const fs = require('fs').promises;
const NodeID3 = require('node-id3');
const { LRC2SYLT } = require('../utils.js');

function createLyricsFrames(lrc) {
    const synchronisedText = LRC2SYLT(lrc);
    if (!synchronisedText.length) return;

    // Only create tag bytes; NodeID3.write would read and rewrite the entire MP3.
    return NodeID3.create({
        unsynchronisedLyrics: {
            language: 'und',
            text: synchronisedText.map((line) => line.text).join('\n'),
        },
        synchronisedLyrics: [
            {
                language: 'und',
                timeStampFormat: NodeID3.TagConstants.TimeStampFormat.MILLISECONDS,
                contentType: NodeID3.TagConstants.SynchronisedLyrics.ContentType.LYRICS,
                synchronisedText,
            },
        ],
    }).subarray(10);
}

async function writeLyricsFrames(filepath, frames, { signal } = {}) {
    signal?.throwIfAborted();
    const file = await fs.open(filepath, 'r+');
    try {
        const header = Buffer.alloc(10);
        const readHeader = async (position) => {
            signal?.throwIfAborted();
            const { bytesRead } = await file.read(header, 0, header.length, position);
            if (bytesRead !== header.length) throw new Error('Incomplete MP3 ID3 header');
        };

        await readHeader(0);
        if (header.toString('ascii', 0, 3) !== 'ID3' || header[3] !== 3 || header[4] !== 0 || header[5] !== 0 || header.subarray(6).some((byte) => byte & 0x80)) {
            throw new Error('Expected an unflagged ID3v2.3 tag from FFmpeg');
        }

        const tagEnd = 10 + header.subarray(6).reduce((size, byte) => size * 128 + byte, 0);
        let position = 10;
        while (position + 10 <= tagEnd) {
            await readHeader(position);
            if (header.every((byte) => byte === 0)) break;
            if (!/^[A-Z0-9]{4}$/.test(header.toString('ascii', 0, 4))) throw new Error('Invalid MP3 ID3 frame');
            position += 10 + header.readUInt32BE(4);
        }

        // Only overwrite the zero padding reserved by writeTrackFile, retaining ten trailing bytes.
        if (tagEnd - position < frames.length + 10) throw new Error('Insufficient ID3 padding for lyrics');
        const padding = Buffer.alloc(frames.length + 10);
        const { bytesRead } = await file.read(padding, 0, padding.length, position);
        if (bytesRead !== padding.length || padding.some((byte) => byte !== 0)) throw new Error('Expected empty ID3 padding for lyrics');

        let offset = 0;
        while (offset < frames.length) {
            signal?.throwIfAborted();
            const { bytesWritten } = await file.write(frames, offset, frames.length - offset, position + offset);
            if (!bytesWritten) throw new Error('Failed to write MP3 lyrics');
            offset += bytesWritten;
        }
    } finally {
        await file.close();
    }
}

exports.createLyricsFrames = createLyricsFrames;
exports.writeLyricsFrames = writeLyricsFrames;
