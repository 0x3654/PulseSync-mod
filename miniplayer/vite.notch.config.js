import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// Отдельная сборка нотч-плеера: тот же outDir, но без очистки (основной билд чистит).
export default defineConfig({
    base: './',
    plugins: [react()],
    build: {
        outDir: path.resolve(__dirname, '../src/main/lib/miniplayer/renderer'),
        emptyOutDir: false,
        rollupOptions: {
            input: path.resolve(__dirname, 'notch.html'),
            output: {
                entryFileNames: 'notch.js',
                chunkFileNames: 'notch-[name].js',
                assetFileNames: 'assets/notch-[name][extname]',
            },
        },
    },
})
