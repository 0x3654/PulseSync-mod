(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [6360],
    {
        49: (t) => {
            t.exports = {
                root: 'BlockEntities_root__sHn14',
                scrollableContent: 'BlockEntities_scrollableContent__4A0tK',
                scrollableContainer: 'BlockEntities_scrollableContainer__KXyas',
                container: 'BlockEntities_container__1XiOc',
                content: 'BlockEntities_content__bfoTn',
                shimmerWithSubcover: 'BlockEntities_shimmerWithSubcover__dYd6P',
                footer: 'BlockEntities_footer__eEuix',
            };
        },
        356: (t) => {
            t.exports = {
                message: 'NotificationDislike_message__RoxZH',
                text: 'NotificationDislike_text__fJHts',
                cover: 'NotificationDislike_cover__N5Oqu',
                image: 'NotificationDislike_image__jn4_4',
            };
        },
        1544: (t, e, i) => {
            Promise.resolve().then(i.bind(i, 52432));
        },
        2125: (t, e, i) => {
            'use strict';
            i.d(e, { h: () => s });
            var a = i(37862),
                s = (function (t) {
                    return (
                        (t[(t.RUP_MAIN_RADIO = ''.concat(a.U.RUP, '_').concat(a.U.MAIN, '-').concat(a.U.RADIO))] = 'RUP_MAIN_RADIO'),
                        (t[(t.DISCOGRAPHY_CAROUSEL = ''.concat(a.U.DISCOGRAPHY, '_').concat(a.U.CAROUSEL))] = 'DISCOGRAPHY_CAROUSEL'),
                        (t[(t.ALBUMS_CAROUSEL = ''.concat(a.U.ALBUMS, '_').concat(a.U.CAROUSEL))] = 'ALBUMS_CAROUSEL'),
                        (t[(t.COMPILATIONS_CAROUSEL = ''.concat(a.U.COMPILATIONS, '_').concat(a.U.CAROUSEL))] = 'COMPILATIONS_CAROUSEL'),
                        (t[(t.PLAYLISTS_CAROUSEL = ''.concat(a.U.PLAYLISTS, '_').concat(a.U.CAROUSEL))] = 'PLAYLISTS_CAROUSEL'),
                        (t[(t.ARTISTS_CAROUSEL = ''.concat(a.U.ARTISTS, '_').concat(a.U.CAROUSEL))] = 'ARTISTS_CAROUSEL'),
                        (t[(t.CLIPS_CAROUSEL = ''.concat(a.U.CLIPS, '_').concat(a.U.CAROUSEL))] = 'CLIPS_CAROUSEL'),
                        (t[(t.DISCOVERY_BLOCK = ''.concat(a.U.DISCOVERY, '_').concat(a.U.BLOCK))] = 'DISCOVERY_BLOCK'),
                        (t[(t.PLAYLISTS_SIMILAR = ''.concat(a.U.PLAYLISTS, '_').concat(a.U.SIMILAR))] = 'PLAYLISTS_SIMILAR'),
                        (t[(t.SEARCH_HISTORY = ''.concat(a.U.SEARCH, '_').concat(a.U.HISTORY))] = 'SEARCH_HISTORY'),
                        (t[(t.PLAYLISTS_SIMILAR_PLAYLIST = ''.concat(a.U.PLAYLISTS, '_').concat(a.U.SIMILAR, '_').concat(a.U.PLAYLIST))] = 'PLAYLISTS_SIMILAR_PLAYLIST'),
                        (t[(t.SEARCH_BEST_RESULTS = ''.concat(a.U.SEARCH, '_').concat(a.U.BEST_RESULTS))] = 'SEARCH_BEST_RESULTS'),
                        (t[(t.SEARCH_OPEN_BEST_RESULTS = ''.concat(a.U.SEARCH, '_').concat(a.U.OPEN_BEST_RESULTS))] = 'SEARCH_OPEN_BEST_RESULTS'),
                        t
                    );
                })({});
        },
        5942: (t, e, i) => {
            'use strict';
            i.d(e, { K: () => x });
            var a = i(32290),
                s = i(92708),
                l = i(55178),
                r = i(60900),
                n = i(63380),
                o = i(45477),
                c = i(75582),
                d = i(57594),
                u = i(90357),
                _ = i(20472),
                m = i(97647),
                A = i(97755);
            let T = (t) => {
                    let { artist: e, closeToast: i } = t;
                    return (0, a.jsx)(A.O, {
                        closeToast: i,
                        entityVariant: m.c.ARTIST,
                        entityUrl: e.url,
                        collectionUrl: _.Z.collectionArtists.href,
                        coverUri: e.coverUri,
                        entityTitle: e.name,
                        isLiked: e.isLiked,
                    });
                },
                x = (t) => {
                    let { user: e } = (0, d.g)(),
                        { notify: i } = (0, c.l)(),
                        [_, m] = (0, l.useState)(!1),
                        { formatMessage: A } = (0, r.A)();
                    return (0, l.useCallback)(async () => {
                        if (!t) return;
                        if (!e.isAuthorized)
                            return void i((0, a.jsx)(u.h, { error: A({ id: 'authorization-messages.need-to-authorizate' }) }), { containerId: o.u.ERROR });
                        if (_) return;
                        let l = { ...(0, s.HO)(t), isLiked: !t.isLiked };
                        m(!0);
                        let r = await t.toggleLike();
                        (m(!1),
                            r === n.f.OK
                                ? i((0, a.jsx)(T, { artist: l }), { containerId: o.u.INFO })
                                : i((0, a.jsx)(u.h, { error: A({ id: 'error-messages.error-during-action' }) }), { containerId: o.u.ERROR }));
                    }, [t, e.isAuthorized, _, A, i]);
                };
        },
        7474: (t, e, i) => {
            'use strict';
            i.d(e, { a: () => H });
            var a = i(32290),
                s = i(63618),
                l = i(96103),
                r = i(55178),
                n = i(60900),
                o = i(99923),
                c = i(21732),
                d = i(71483),
                u = i(91027),
                _ = i(6752),
                m = i(14934),
                A = i(82586),
                T = i(86269),
                x = i(71926),
                C = i(91853),
                L = i(5942),
                I = i(70390),
                E = i(71735),
                S = i(47745),
                h = i(2969),
                p = i(54391),
                k = i(23352),
                y = i(72396),
                R = i(5537),
                v = i(32641),
                O = i(28999),
                N = i(90169),
                P = i(57594),
                f = i(11323),
                j = i(92744),
                g = i(61258),
                M = i(10180),
                b = i(90326),
                U = i(29268),
                D = i(34925),
                B = i(80528),
                Y = i(42048),
                z = i.n(Y);
            let H = (0, l.PA)((t) => {
                let { artist: e, className: i, children: l, contentLinesCount: Y, topTitleElement: H, bottomTitleElement: K } = t,
                    { ref: w, intersectionPropertyId: F } = (0, k.n)(),
                    {
                        trailer: X,
                        user: V,
                        paywall: { modal: G },
                    } = (0, P.g)(),
                    { from: W, utmLink: q } = (0, y.f)({ contextId: e.id, contextType: d.K.Artist }),
                    { formatMessage: $ } = (0, n.A)(),
                    [J, Z] = (0, r.useState)(!1),
                    [Q, tt] = (0, r.useState)(!1),
                    [te, ti] = (0, r.useState)(!1),
                    { sendLikeSearchFeedback: ta, sendNavigateSearchFeedback: ts, sendPlaySearchFeedback: tl } = (0, O.z)(),
                    tr = (0, S.N)(),
                    tn = (0, h.b)(),
                    to = (0, L.K)(e),
                    tc = (0, I.A)(e),
                    { id: td, name: tu, coverUri: t_, isLiked: tm } = e,
                    tA = (0, v.Z)(e.url),
                    [tT, tx] = (0, r.useState)(!1),
                    tC = (0, p.F)(),
                    tL = (0, E.P)(),
                    tI = (0, u.c)((t) => {
                        if ((t.stopPropagation(), tL())) return void t.preventDefault();
                        (X.openArtistTrailer(e.id), tC(o.DomainObjectType.Artist, e.id));
                    }),
                    tE = (0, r.useMemo)(() => {
                        let t = $({ id: 'entity-names.artist-name' }, { artistName: tu }),
                            e = tm ? $({ id: 'entity-names.has-your-like' }) : '';
                        return ''.concat(t, ' ').concat(e);
                    }, [tu, tm, $]),
                    { isPlaying: tS, togglePlay: th } = (0, N.D)({
                        playContextParams: { contextData: { type: d.K.Artist, meta: { id: Number(td) }, from: W, utmLink: q }, loadContextMeta: !0 },
                    }),
                    tp = (0, C.S)({ artist: e, callback: tA }),
                    tk = (0, C.S)({ artist: e, callback: th }),
                    ty = (0, u.c)((t) => {
                        (null == ts || ts(), tr({ to: o.AppScreen.ArtistScreen }), tp(t));
                    }),
                    tR = (0, R.N)(),
                    tv = (0, u.c)(() => {
                        if (!tL()) {
                            if (tR) return void G.open();
                            (J || tS || (Z(!0), null == tl || tl()), tk(), tn(!tS));
                        }
                    }),
                    tO = (0, u.c)(() => {
                        (Q || tm || (tt(!0), null == ta || ta()), to());
                    }),
                    tN = (0, u.c)((t) => {
                        (t.preventDefault(), t.stopPropagation());
                    }),
                    tP = (0, u.c)((t) => {
                        (ti(t), tx(t));
                    }),
                    tf = (0, r.useMemo)(
                        () =>
                            (0, a.jsx)(
                                B.g,
                                {
                                    artist: e,
                                    onOpenChange: tP,
                                    open: te,
                                    onClick: tN,
                                    className: (0, s.$)(z().menuButton, z().control),
                                    size: 's',
                                    icon: (0, a.jsx)(A.I, { size: 'xxs', variant: 'more' }),
                                    'data-test-id': c.Kq.artist.ARTIST_CONTEXT_MENU_BUTTON,
                                },
                                e.getKey('ArtistContextMenu'),
                            ),
                        [e, tN, tP, te],
                    ),
                    tj = (0, r.useMemo)(() => {
                        var t;
                        if (null == e || null == (t = e.trailer) ? void 0 : t.isAvailable)
                            return (0, a.jsx)(
                                D.n,
                                {
                                    children: (0, a.jsx)(U.k, {
                                        className: (0, s.$)(z().trailerButton, z().control),
                                        radius: 'round',
                                        size: 's',
                                        iconSize: 'xxs',
                                        onClick: tI,
                                    }),
                                },
                                e.getKey('ArtistCardTrailerTooltip'),
                            );
                    }, [e, tI]),
                    tg = (0, r.useMemo)(
                        () =>
                            (0, a.jsx)(
                                M.O,
                                { onClick: tc, isPinned: e.isPinned, className: (0, s.$)(z().pinButton, z().control), withRipple: !1 },
                                e.getKey('PinButton'),
                            ),
                        [e, tc],
                    ),
                    tM = (0, _.L)(() => {
                        if (e.isAvailable)
                            return (0, a.jsx)(
                                m.hg,
                                {
                                    isVisible: te || tT,
                                    className: z().controls,
                                    radius: 'round',
                                    playControl: (0, a.jsx)(
                                        b.D,
                                        {
                                            buttonVariant: 'default',
                                            withHover: !1,
                                            className: (0, s.$)(z().playButton, z().control),
                                            iconSize: 'xl',
                                            variant: 'filled',
                                            onClick: tv,
                                            isPlaying: tS,
                                            disabled: !e.isAvailableForPlaying,
                                        },
                                        e.getKey('PlayButton'),
                                    ),
                                    likeControl: (0, a.jsx)(
                                        j.c,
                                        {
                                            className: (0, s.$)(z().likeButton, z().control),
                                            isLiked: tm,
                                            onClick: tO,
                                            variant: 'default',
                                            size: 's',
                                            iconSize: 'xxs',
                                            disabled: !V.isAuthorized,
                                        },
                                        e.getKey('LikeButton'),
                                    ),
                                    menuControl: tf,
                                    pinControl: tg,
                                    trailerControl: tj,
                                },
                                e.getKey('ArtistCardControls'),
                            );
                    }),
                    tb = (0, r.useMemo)(
                        () =>
                            (0, a.jsx)(T.t, {
                                className: z().cover,
                                radius: 'round',
                                withShadow: !0,
                                'data-test-id': c.Kq.artist.ARTIST_CARD,
                                children: (0, a.jsxs)('div', {
                                    className: z().coverBlock,
                                    onClick: ty,
                                    children: [
                                        (0, a.jsx)(f.B, {
                                            className: z().image,
                                            src: t_,
                                            size: 200,
                                            fit: 'cover',
                                            alt: tE,
                                            withAvatarReplace: !0,
                                            isAvailable: e.isAvailable,
                                            'aria-hidden': !0,
                                        }),
                                        tM,
                                    ],
                                }),
                            }),
                        [ty, t_, tE, e.isAvailable, tM],
                    );
                return (0, a.jsx)(m.MN, {
                    ref: w,
                    className: (0, s.$)(z().root, i),
                    textPosition: 'center',
                    'aria-label': tE,
                    title: (0, a.jsxs)(a.Fragment, {
                        children: [
                            H,
                            (0, a.jsx)(x.HL, {
                                variant: 'div',
                                type: 'entity',
                                size: 's',
                                weight: 'medium',
                                lineClamp: 2,
                                children: (0, a.jsx)(g.N, {
                                    className: z().titleLink,
                                    href: e.url,
                                    'aria-label': tE,
                                    onClick: ty,
                                    'data-test-id': c.Kq.artist.ARTIST_TITLE,
                                    children: tu,
                                }),
                            }),
                            K,
                        ],
                    }),
                    srTitle: (0, a.jsx)(g.N, { href: e.url, onClick: ty, children: tE }),
                    'data-intersection-property-id': F,
                    contentLinesCount: Y,
                    view: tb,
                    'data-test-id': c.Kq.artist.ARTIST_ITEM,
                    children: l,
                });
            });
        },
        8588: (t, e, i) => {
            'use strict';
            i.d(e, { V: () => A });
            var a = i(32290),
                s = i(63618),
                l = i(96103),
                r = i(55178),
                n = i(21732),
                o = i(50162),
                c = i(86269),
                d = i(71926),
                u = i(61258),
                _ = i(69748),
                m = i.n(_);
            let A = (0, l.PA)((t) => {
                var e;
                let { className: i, title: l, weblink: _, linkClassName: A, covers: T, coverSize: x = 100, captionVariant: C = 'div' } = t,
                    L = (0, r.useMemo)(() => {
                        var t;
                        if (null == T || null == (t = T[0]) ? void 0 : t.color) return { '--subcover-background-color': T[0].color };
                    }, [T]);
                return (0, a.jsx)(u.N, {
                    href: _,
                    className: (0, s.$)(m().link, A),
                    'data-test-id': n.OA.mix.MIX_CARD,
                    children: (0, a.jsxs)(c.t, {
                        radius: 'm',
                        style: L,
                        className: (0, s.$)(m().root, i),
                        children: [
                            (0, a.jsxs)('div', {
                                className: m().plate,
                                'data-test-id': n.OA.mix.MIX_CARD_PLATE,
                                children: [
                                    (0, a.jsx)('div', { className: m().subcover, 'data-test-id': n.OA.mix.MIX_CARD_SUBCOVER }),
                                    (0, a.jsx)(o._V, {
                                        src: null == T || null == (e = T[0]) ? void 0 : e.uri,
                                        withAvatarReplace: !0,
                                        fit: 'contain',
                                        className: m().cover,
                                        size: x,
                                        'data-test-id': n.OA.mix.MIX_CARD_COVER,
                                    }),
                                ],
                            }),
                            (0, a.jsx)('div', {
                                className: m().header,
                                children: (0, a.jsx)(d.HL, {
                                    variant: C,
                                    size: 'xs',
                                    weight: 'bold',
                                    className: m().title,
                                    lineClamp: 2,
                                    'data-test-id': n.OA.mix.MIX_CARD_HEADER,
                                    children: l,
                                }),
                            }),
                        ],
                    }),
                });
            });
        },
        8626: (t, e, i) => {
            'use strict';
            i.d(e, { m: () => a });
            let a = () => ({ year: 'numeric' });
        },
        11675: (t) => {
            t.exports = {
                root: 'PlaylistCard_root__i3pR4',
                controls: 'PlaylistCard_controls__Ej8Rz',
                cover: 'PlaylistCard_cover__tpK5L',
                coverBlock: 'PlaylistCard_coverBlock__1slsN',
                image: 'PlaylistCard_image__Li6oy',
                titleLink: 'PlaylistCard_titleLink__H8qEc',
                artists: 'PlaylistCard_artists__HtVIF',
                artistLink: 'PlaylistCard_artistLink__jx3KB',
                playButton: 'PlaylistCard_playButton__eaduk',
                likeButton: 'PlaylistCard_likeButton__RYXJz',
                menuButton: 'PlaylistCard_menuButton__jFcWr',
                pinButton: 'PlaylistCard_pinButton__jhWnL',
                trailerButton: 'PlaylistCard_trailerButton__Qjg_U',
                control: 'PlaylistCard_control__73YUq',
            };
        },
        13931: (t, e, i) => {
            'use strict';
            i.d(e, { r: () => l });
            var a = i(55178),
                s = i(60900);
            let l = (t) => {
                let { formatMessage: e } = (0, s.A)();
                return (0, a.useMemo)(() => {
                    let i = '';
                    t.isLiked && !t.actualLikesCount
                        ? (i = e({ id: 'entity-names.has-your-like' }))
                        : 'number' == typeof t.actualLikesCount &&
                          (i =
                              t.actualLikesCount > 0
                                  ? e({ id: 'entity-names.likes-counter' }, { counter: t.actualLikesCount })
                                  : e({ id: 'entity-names.likes-counter-empty' }));
                    let a = e({ id: 'entity-names.playlist-name' }, { playlistName: t.title });
                    return ''.concat(a, ' ').concat(i);
                }, [e, t]);
            };
        },
        15559: (t, e, i) => {
            'use strict';
            i.d(e, { v: () => s });
            var a = i(79406);
            let s = (t) => {
                let { checkExperiment: e, getDisclaimerContent: i, getExplicitContent: s, userRegion: l } = t;
                return 'ru' === l && e(a.z.WebNextFooterDisclaimer, 'on') ? i() : s();
            };
        },
        20472: (t, e, i) => {
            'use strict';
            i.d(e, { Z: () => s });
            var a = i(68243);
            let s = {
                main: (0, a.u)('/'),
                chart: (0, a.u)('/chart'),
                chartPodcasts: (0, a.u)('/chart/podcasts'),
                collection: (0, a.u)('/collection'),
                collectionAlbums: (0, a.u)('/collection/albums'),
                collectionArtists: (0, a.u)('/collection/artists'),
                collectionClips: (0, a.u)('/collection/clips'),
                collectionDislikes: (0, a.u)('/collection/dislikes'),
                collectionKids: (0, a.u)('/collection/kids'),
                collectionKidsAlbums: (0, a.u)('/collection/kids/albums'),
                collectionKidsPlaylists: (0, a.u)('/collection/kids/playlists'),
                collectionKidsTracks: (0, a.u)('/collection/kids/tracks'),
                collectionNonMusic: (0, a.u)('/collection/non-music'),
                collectionNonMusicLiked: (0, a.u)('/collection/non-music/liked'),
                collectionVibeRooms: (0, a.u)('/collection/multivibes'),
                collectionPlaylists: (0, a.u)('/collection/playlists'),
                collectionPlaylistsCreated: (0, a.u)('/collection/playlists/created'),
                collectionPlaylistsLiked: (0, a.u)('/collection/playlists/liked'),
                collectionShelf: (0, a.u)('/collection/shelf'),
                collectionShelfLiked: (0, a.u)('/collection/shelf/liked'),
                collectionShelfNewEpisodes: (0, a.u)('/collection/shelf/new-episodes'),
                collectionShelfRecentlyPlayed: (0, a.u)('/collection/shelf/recently-played'),
                concerts: (0, a.u)('/concerts'),
                kids: (0, a.u)('/kids'),
                mixes: (0, a.u)('/mixes'),
                musicHistory: (0, a.u)('/music-history'),
                muzmarket: (0, a.u)('/muzmarket'),
                mymusic: (0, a.u)('/mymusic'),
                mymusicDownloadsTracks: (0, a.u)('/mymusic/downloads/tracks'),
                multivibe: (0, a.u)('/multivibe'),
                nonMusic: (0, a.u)('/non-music'),
                pay: (0, a.u)('/pay'),
                userSlides: (0, a.u)('/slides/user'),
                search: (0, a.u)('/search'),
                searchHistory: (0, a.u)('/search/history'),
                settings: (0, a.u)('/settings'),
                video: (0, a.u)('/video'),
            };
        },
        31010: (t, e, i) => {
            'use strict';
            i.d(e, { H: () => s, P: () => l });
            var a = i(55178);
            let s = (0, a.createContext)(null),
                l = () => (0, a.useContext)(s);
        },
        32468: (t, e, i) => {
            'use strict';
            i.d(e, { A: () => r });
            var a = i(32290),
                s = i(77088),
                l = i.n(s);
            let r = (t) => {
                let { children: e } = t;
                return (0, a.jsx)('footer', { className: l().empty });
            };
        },
        38223: (t, e, i) => {
            'use strict';
            i.d(e, { D: () => d });
            var a = i(32290),
                s = i(96103),
                l = i(39407),
                r = i(21732),
                n = i(82586),
                o = i(19740),
                c = i(57594);
            let d = (0, s.PA)((t) => {
                let { isDisliked: e, onClick: i, disabled: s, className: d } = t,
                    { user: u } = (0, c.g)();
                return (0, a.jsx)(o.Dr, {
                    onClick: i,
                    className: d,
                    icon: (0, a.jsx)(n.I, { variant: e ? 'disliked' : 'dislike', size: 'xxs' }),
                    role: 'menuitemcheckbox',
                    'aria-checked': e,
                    disabled: s || !u.isAuthorized,
                    'data-test-id': r.S7.CONTEXT_MENU_DISLIKE_BUTTON,
                    children: (0, a.jsx)(l.A, { id: 'interface-actions.do-not-like' }),
                });
            });
        },
        42048: (t) => {
            t.exports = {
                root: 'ArtistCard_root__x67BK',
                controls: 'ArtistCard_controls__jsqqI',
                cover: 'ArtistCard_cover__29ShU',
                coverBlock: 'ArtistCard_coverBlock__dBL4x',
                image: 'ArtistCard_image__pONJx',
                titleLink: 'ArtistCard_titleLink__G8Puz',
                playButton: 'ArtistCard_playButton__XZoTr',
                likeButton: 'ArtistCard_likeButton__LU9TL',
                menuButton: 'ArtistCard_menuButton__EynXG',
                pinButton: 'ArtistCard_pinButton__G_VOi',
                trailerButton: 'ArtistCard_trailerButton__a2NHm',
                control: 'ArtistCard_control___qv5j',
            };
        },
        50308: (t, e, i) => {
            'use strict';
            i.d(e, { e: () => l });
            var a = i(32290),
                s = i(89020);
            let l = (t) => {
                let {
                    isActive: e,
                    itemClassName: i,
                    round: l,
                    centered: r,
                    withInfo: n,
                    count: o = 10,
                    shimmerClassName: c,
                    linesCount: d,
                    'aria-label': u,
                    withSubcover: _,
                } = t;
                return Array.from(Array(o).keys()).map((t) =>
                    (0, a.jsx)(
                        s.V,
                        { isActive: e, linesCount: d, className: i, round: l, centered: r, withInfo: n, withSubcover: _, 'aria-label': u, shimmerClassName: c },
                        t,
                    ),
                );
            };
        },
        52199: (t, e, i) => {
            'use strict';
            i.d(e, { r: () => a });
            let a = (t, e, i) => t.replace(i, e);
        },
        52432: (t, e, i) => {
            'use strict';
            (i.r(e), i.d(e, { default: () => D }));
            var a = i(32290),
                s = i(21916),
                l = i(96103),
                r = i(55178),
                n = i(63618),
                o = i(60900),
                c = i(21732),
                d = i(96194),
                u = i(90404),
                _ = i(46049),
                m = i(71926),
                A = i(24170),
                T = i(7474),
                x = i(7999),
                C = i(83460),
                L = i(8588),
                I = i(83808),
                E = i(83920),
                S = i(57594),
                h = i(97841),
                p = i(32468),
                k = i(74694),
                y = i(50308),
                R = i(49),
                v = i.n(R);
            let O = (0, l.PA)((t) => {
                let { blockId: e, blockType: i } = t,
                    { landingBlockEntities: s } = (0, S.g)(),
                    { formatMessage: l } = (0, o.A)(),
                    { contentScrollRef: R, setContentScrollRef: O } = (0, E.g)(),
                    N = (0, I.W)(),
                    P = (0, r.useMemo)(() => {
                        if (s.isLoading) {
                            let t = l({ id: 'loading-messages.content-is-loading' }),
                                e = [d.t.COLLECTION_ARTISTS, d.t.COLLECTION_ARTISTS_AND_TOP, d.t.PERSONAL_ARTISTS, d.t.NEW_STARS_ARTISTS, d.t.EDITORIAL_ARTISTS].includes(
                                    i,
                                ),
                                s = i === d.t.MIXES_GRID;
                            return (0, a.jsx)(y.e, {
                                itemClassName: (0, n.$)({ [v().shimmerWithSubcover]: s }),
                                withSubcover: s,
                                isActive: !0,
                                'aria-label': t,
                                centered: e || s,
                                round: e,
                            });
                        }
                        return s.items.map((t) => {
                            switch (t.type) {
                                case u._.MIX_CARD_ITEM:
                                    return (0, a.jsx)(L.V, { title: t.data.title, weblink: t.data.weblink, covers: t.data.covers }, t.data.id);
                                case u._.ALBUM_ITEM:
                                    return (0, a.jsx)(A.a, { album: t.data, contentLinesCount: 3 }, t.data.id);
                                case u._.CHART_ALBUM_ITEM:
                                case u._.NON_MUSIC_ALBUM_ITEM:
                                    return (0, a.jsx)(A.a, { withChart: !0, withLikesCount: !0, album: t.data, contentLinesCount: 3 }, t.data.id);
                                case u._.ARTIST_ITEM:
                                    return (0, a.jsx)(T.a, { artist: t.data, contentLinesCount: 3 }, t.data.id);
                                case u._.PLAYLIST_ITEM:
                                    return (0, a.jsx)(C.B, { playlist: t.data, contentLinesCount: 3 }, t.data.key);
                                case u._.PERSONAL_PLAYLIST_ITEM:
                                    return (0, a.jsx)(
                                        C.B,
                                        { playlist: t.data.playlist, customDescription: t.data.description, contentLinesCount: 4 },
                                        t.data.playlist.key,
                                    );
                                case u._.LIKED_PLAYLIST_ITEM:
                                    return (0, a.jsx)(C.B, { playlist: t.data, contentLinesCount: 3 }, t.data.key);
                            }
                        });
                    }, [i, s.isLoading, s.items, l]);
                return (
                    e && s.isNeededToLoad && (0, r.use)(s.getData({ blockId: e })),
                    (0, a.jsx)(x.h, {
                        scrollElement: R,
                        outerTitle: s.title,
                        children: (0, a.jsxs)('div', {
                            className: v().root,
                            children: [
                                (0, a.jsx)(k.Y, {
                                    variant: k.V.TEXT,
                                    withForwardControl: !1,
                                    withBackwardControl: N.canBack,
                                    children: (0, a.jsx)(m.DZ, {
                                        id: 'block-entities-header',
                                        variant: 'h1',
                                        weight: 'bold',
                                        size: 'xl',
                                        lineClamp: 1,
                                        children: s.title,
                                    }),
                                }),
                                (0, a.jsx)(_.N, {
                                    ref: O,
                                    className: v().scrollableContent,
                                    containerClassName: v().scrollableContainer,
                                    'data-test-id': c.e8.landing.BLOCK_ENTITY_PAGE,
                                    children: (0, a.jsxs)('div', {
                                        className: v().container,
                                        children: [
                                            (0, a.jsx)('div', { className: v().content, 'aria-labelledby': 'block-entities-header', tabIndex: 0, children: P }),
                                            (0, a.jsx)(p.A, { children: (0, a.jsx)(h.w, { className: v().footer }) }),
                                        ],
                                    }),
                                }),
                            ],
                        }),
                    })
                );
            });
            var N = i(2125),
                P = i(48922),
                f = i(95226),
                j = i(22714),
                g = i(3796),
                M = i(49399);
            let b = {
                    'new-releases': d.t.NEW_RELEASES,
                    'editorial-new-releases': d.t.EDITORIAL_NEW_RELEASES,
                    'personal-artists': d.t.PERSONAL_ARTISTS,
                    'new-stars-artists': d.t.NEW_STARS_ARTISTS,
                    'editorial-artists': d.t.EDITORIAL_ARTISTS,
                    'new-playlists': d.t.NEW_PLAYLISTS,
                    'editorial-compilation': d.t.EDITORIAL_COMPILATION,
                    'non-music-editorial-compilation': d.t.EDITORIAL_COMPILATION,
                    'chart-albums': d.t.CHART_ALBUMS,
                    'mixes-grid': d.t.MIXES_GRID,
                    'mixes-music': d.t.MIXES_MUSIC,
                },
                U = (0, l.PA)((t) => {
                    let { blockType: e, blockId: i } = t,
                        { landingBlockEntities: l } = (0, S.g)();
                    ((0, r.useEffect)(
                        () => () => {
                            l.reset();
                        },
                        [l, e, i],
                    ),
                        (0, g.J)(l.loadingState === M.G.RESOLVE));
                    let n = b[e];
                    return (
                        (l.isNotFound || !n) && (0, s.notFound)(),
                        (0, a.jsx)(j.n, {
                            pageId: P._Q.ENTITIES,
                            children: (0, a.jsx)(f.F, {
                                blockId: ''.concat(N.h.DISCOVERY_BLOCK, '-').concat(i),
                                blockIdForFrom: ''.concat(N.h.DISCOVERY_BLOCK, '-').concat(i),
                                blockPosX: 1,
                                blockPosY: 1,
                                blockType: n,
                                objectsCount: l.items.length,
                                children: (0, a.jsx)(O, { blockType: n, blockId: i }),
                            }),
                        })
                    );
                }),
                D = () => {
                    let t = (0, s.useSearchParams)(),
                        e = t.get('blockType'),
                        i = t.get('blockId');
                    return ((e && i) || (0, s.notFound)(), (0, a.jsx)(U, { blockType: e, blockId: i }));
                };
        },
        63038: (t, e, i) => {
            'use strict';
            i.d(e, { B: () => a });
            let a = '{tld}';
        },
        69748: (t) => {
            t.exports = {
                plate: 'MixesGridMixCard_plate__ONH3P',
                root: 'MixesGridMixCard_root__HHE7z',
                subcover: 'MixesGridMixCard_subcover__z5sBj',
                link: 'MixesGridMixCard_link__D3_S6',
                header: 'MixesGridMixCard_header__t24VH',
                title: 'MixesGridMixCard_title__fKTCy',
                cover: 'MixesGridMixCard_cover__Ra3ic',
            };
        },
        70390: (t, e, i) => {
            'use strict';
            i.d(e, { A: () => A });
            var a = i(32290),
                s = i(92708),
                l = i(55178),
                r = i(60900),
                n = i(45477),
                o = i(75582),
                c = i(57594),
                d = i(90357),
                u = i(97647),
                _ = i(8097);
            let m = (t) => {
                    let { artist: e, closeToast: i } = t;
                    return (0, a.jsx)(_.k, {
                        closeToast: i,
                        entityVariant: u.c.ARTIST,
                        coverUri: e.coverUri,
                        entityUrl: e.url,
                        entityTitle: e.name,
                        isPinned: e.isPinned,
                        radius: 'round',
                    });
                },
                A = (t) => {
                    let { user: e } = (0, c.g)(),
                        { notify: i } = (0, o.l)(),
                        { formatMessage: u } = (0, r.A)(),
                        [_, A] = (0, l.useState)(!1);
                    return (0, l.useCallback)(async () => {
                        if (!t) return;
                        if (!e.isAuthorized)
                            return void i((0, a.jsx)(d.h, { error: u({ id: 'authorization-messages.need-to-authorizate' }) }), { containerId: n.u.ERROR });
                        if (_) return;
                        let l = { ...(0, s.HO)(t), isPinned: !t.isPinned };
                        A(!0);
                        let r = await t.togglePin();
                        (A(!1),
                            r
                                ? i((0, a.jsx)(m, { artist: l }), { containerId: n.u.INFO })
                                : i((0, a.jsx)(d.h, { error: u({ id: 'error-messages.error-during-action' }) }), { containerId: n.u.ERROR }));
                    }, [t, e.isAuthorized, _, u, i]);
                };
        },
        73141: (t, e, i) => {
            'use strict';
            i.d(e, { K: () => T });
            var a = i(32290),
                s = i(92708),
                l = i(55178),
                r = i(60900),
                n = i(63380),
                o = i(45477),
                c = i(75582),
                d = i(57594),
                u = i(90357),
                _ = i(97647),
                m = i(97755);
            let A = (t) => {
                    let { playlist: e, closeToast: i } = t;
                    return (0, a.jsx)(m.O, {
                        entityVariant: _.c.PLAYLIST,
                        entityUrl: e.url,
                        collectionUrl: '/collection',
                        entityTitle: e.title,
                        isLiked: e.isLiked,
                        closeToast: i,
                        coverUri: e.coverUri,
                    });
                },
                T = (t) => {
                    let { user: e } = (0, d.g)(),
                        { notify: i } = (0, c.l)(),
                        [_, m] = (0, l.useState)(!1),
                        { formatMessage: T } = (0, r.A)();
                    return (0, l.useCallback)(async () => {
                        if (!e.isAuthorized)
                            return void i((0, a.jsx)(u.h, { error: T({ id: 'authorization-messages.need-to-authorizate' }) }), { containerId: o.u.ERROR });
                        if (_) return;
                        let l = { ...(0, s.HO)(t), url: t.url, isLiked: !t.isLiked };
                        m(!0);
                        let r = await t.toggleLike();
                        (m(!1),
                            r === n.f.OK
                                ? i((0, a.jsx)(A, { playlist: l }), { containerId: o.u.INFO })
                                : i((0, a.jsx)(u.h, { error: T({ id: 'error-messages.error-during-action' }) }), { containerId: o.u.ERROR }));
                    }, [e.isAuthorized, _, t, T, i]);
                };
        },
        73192: (t, e, i) => {
            'use strict';
            i.d(e, { A: () => A });
            var a = i(32290),
                s = i(92708),
                l = i(55178),
                r = i(60900),
                n = i(45477),
                o = i(75582),
                c = i(57594),
                d = i(90357),
                u = i(97647),
                _ = i(8097);
            let m = (t) => {
                    let { playlist: e, closeToast: i } = t;
                    return (0, a.jsx)(_.k, {
                        closeToast: i,
                        entityVariant: u.c.PLAYLIST,
                        entityUrl: e.url,
                        coverUri: e.coverUri,
                        entityTitle: e.title,
                        isPinned: e.isPinned,
                        radius: 's',
                    });
                },
                A = (t) => {
                    let { user: e } = (0, c.g)(),
                        { notify: i } = (0, o.l)(),
                        { formatMessage: u } = (0, r.A)(),
                        [_, A] = (0, l.useState)(!1);
                    return (0, l.useCallback)(async () => {
                        if (!e.isAuthorized)
                            return void i((0, a.jsx)(d.h, { error: u({ id: 'authorization-messages.need-to-authorizate' }) }), { containerId: n.u.ERROR });
                        if (_) return;
                        let l = { ...(0, s.HO)(t), url: t.url, isPinned: !t.isPinned };
                        A(!0);
                        let r = await t.togglePin();
                        (A(!1),
                            r
                                ? i((0, a.jsx)(m, { playlist: l }), { containerId: n.u.INFO })
                                : i((0, a.jsx)(d.h, { error: u({ id: 'error-messages.error-during-action' }) }), { containerId: n.u.ERROR }));
                    }, [e.isAuthorized, _, t, i, u]);
                };
        },
        77088: (t) => {
            t.exports = {
                root: 'Footer_root__ugyur',
                root_withOffsetForDeeplink: 'Footer_root_withOffsetForDeeplink__qcs6U',
                important: 'Footer_important__mCXZp',
                links: 'Footer_links__3kOY7',
                list: 'Footer_list__0sCXQ',
                copyrights: 'Footer_copyrights__IsnbJ',
                link: 'Footer_link__av50q',
                copyrightLink: 'Footer_copyrightLink__6NOkg',
                yandexMusicLink: 'Footer_yandexMusicLink__k7ILf',
                explicitText: 'Footer_explicitText__Px3wr',
                text: 'Footer_text__lMPwl',
                empty: 'Footer_empty__RR_zf',
            };
        },
        80528: (t, e, i) => {
            'use strict';
            i.d(e, { g: () => J });
            var a = i(32290),
                s = i(96103),
                l = i(60900),
                r = i(99923),
                n = i(21732),
                o = i(71483),
                c = i(91027),
                d = i(82586),
                u = i(19740),
                _ = i(92708),
                m = i(55178),
                A = i(63380),
                T = i(45477),
                x = i(75582),
                C = i(57594),
                L = i(90357),
                I = i(86269),
                E = i(74196),
                S = i(71926),
                h = i(58534),
                p = i(11323),
                k = i(356),
                y = i.n(k);
            let R = (t) => {
                let { coverUri: e, title: i, isDisliked: s, closeToast: r } = t,
                    { formatMessage: n } = (0, l.A)(),
                    o = n(s ? { id: 'notifications-info.artist-unavailable-in-recommendations' } : { id: 'notifications-info.artist-available-in-recommendations' });
                return (0, a.jsx)(h.$, {
                    closeToast: r,
                    message: (0, a.jsxs)('div', {
                        className: y().message,
                        children: [
                            (0, a.jsx)(E.q, { children: (0, a.jsx)('p', { role: 'alert', 'aria-label': o }) }),
                            (0, a.jsx)(I.t, {
                                className: y().cover,
                                radius: 'round',
                                children: (0, a.jsx)(p.B, { className: y().image, src: e, alt: i, size: 100, fit: 'cover', withAvatarReplace: !0 }),
                            }),
                            (0, a.jsx)(S.HL, { className: y().text, variant: 'div', type: 'controls', size: 'm', 'aria-hidden': !0, children: o }),
                        ],
                    }),
                });
            };
            var v = i(5942),
                O = i(70390),
                N = i(9017),
                P = i(65477),
                f = i(71735),
                j = i(37862),
                g = i(48922),
                M = i(54391),
                b = i(72396),
                U = i(46200),
                D = i(27120),
                B = i(43564),
                Y = i(95134),
                z = i(79406),
                H = i(51675),
                K = i(48027),
                w = i(89384),
                F = i(38223),
                X = i(58237),
                V = i(56367),
                G = i(4914),
                W = i(83755),
                q = i(25160),
                $ = i(4008);
            let J = (0, s.PA)((t) => {
                var e, i, s;
                let { artist: I, onOpenChange: E, open: S, ...h } = t,
                    { shouldShowBuySubscriptionModal: p, showBuySubscriptionModal: k } = (0, U.q)(),
                    {
                        settings: { isMobile: y },
                        modals: { artistAboutModal: J },
                        trailer: Z,
                        user: Q,
                        experiments: tt,
                    } = (0, C.g)(),
                    te = (0, O.A)(I),
                    ti = (0, v.K)(I),
                    ta = ((t) => {
                        let { user: e } = (0, C.g)(),
                            { notify: i } = (0, x.l)(),
                            [s, r] = (0, m.useState)(!1),
                            { formatMessage: n } = (0, l.A)();
                        return (0, c.c)(async () => {
                            if (!t) return;
                            if (!e.isAuthorized)
                                return void i((0, a.jsx)(L.h, { error: n({ id: 'authorization-messages.need-to-authorizate' }) }), { containerId: T.u.ERROR });
                            if (s) return;
                            let l = { ...(0, _.HO)(t), isDisliked: !t.isDisliked };
                            r(!0);
                            let o = await t.toggleDislike();
                            (r(!1),
                                o === A.f.OK
                                    ? i((0, a.jsx)(R, { coverUri: l.coverUri, title: l.name, isDisliked: l.isDisliked }), { containerId: T.u.INFO })
                                    : i((0, a.jsx)(L.h, { error: n({ id: 'error-messages.error-during-action' }) }), { containerId: T.u.ERROR }));
                        });
                    })(I),
                    ts = (0, M.F)(),
                    tl = ''.concat(j.U.ARTIST, '-').concat(null == I ? void 0 : I.id),
                    { formatMessage: tr } = (0, l.A)(),
                    { utmLink: tn } = (0, b.f)({ blockId: j.U.ARTIST, contextType: o.K.Artist, contextId: null == I ? void 0 : I.id }),
                    { shareLink: to, pathname: tc } = (0, w.b)('/artist/:artistId', { params: { artistId: null != (i = null == I ? void 0 : I.id) ? i : '' } }),
                    td = (0, N.A)({ entityVariant: Y.D.ARTIST, urlParams: { id: null == I ? void 0 : I.id } }),
                    { isPlaying: tu, togglePlay: t_ } = (0, B.B)({
                        seeds: null != (s = null == I ? void 0 : I.seeds) ? s : [],
                        pageIdForFrom: g._Q.RADIO,
                        blockIdForFrom: tl,
                        parentContextId: null == I ? void 0 : I.id,
                    }),
                    tm = (0, f.P)(),
                    tA = tr((null == I ? void 0 : I.isComposer) ? { id: 'artist.about-composer' } : { id: 'artist.about-artist' }),
                    tT = (0, c.c)(() => {
                        if (p && Q.isAuthorized) return void k();
                        tu || t_();
                    }),
                    tx = (0, c.c)(() => {
                        if (!tm()) {
                            if (p) return void k();
                            (null == I ? void 0 : I.id) && (Z.setUtmLink(tn), Z.openArtistTrailer(I.id), ts(r.DomainObjectType.Artist, I.id));
                        }
                    }),
                    tC = (0, c.c)(() => {
                        J.open(null == I ? void 0 : I.id);
                    });
                (0, D.N)(S);
                let tL = { variant: H.Y.ARTIST, id: null == I ? void 0 : I.id, title: null == I ? void 0 : I.name, path: tc },
                    tI = tt.checkExperiment(z.z.WebEditorsFeatures, 'on'),
                    tE = null == I || null == (e = I.trailer) ? void 0 : e.isAvailable,
                    tS = tt.checkExperiment(z.z.WebNextArtistInfo, 'on');
                return (0, a.jsxs)(u.W1, {
                    isMobile: y,
                    offsetOptions: 10,
                    open: S,
                    onOpenChange: E,
                    ariaLabel: tr({ id: 'interface-actions.context-menu' }),
                    containerDataTestId: n.Kq.artist.ARTIST_CONTEXT_MENU,
                    ...h,
                    children: [
                        tI && (0, a.jsx)($.WithOffline, { fallback: (0, a.jsx)(P.d, { entityVariant: Y.D.ARTIST, adminUrl: td }) }),
                        !y && (0, a.jsx)($.WithOffline, { fallback: (0, a.jsx)(V.L, { onClick: te, isPinned: null == I ? void 0 : I.isPinned }) }),
                        (0, a.jsx)($.WithOffline, {
                            fallback: (0, a.jsx)(X.T, {
                                onClick: ti,
                                isLiked: null == I ? void 0 : I.isLiked,
                                disabled: !Q.isAuthorized || !(null == I ? void 0 : I.isAvailable),
                            }),
                        }),
                        tE && (0, a.jsx)($.WithOffline, { fallback: (0, a.jsx)(W.N, { onClick: tx }) }),
                        (0, a.jsx)($.WithOffline, {
                            fallback: (0, a.jsx)(q.C, { onClick: tT, disabled: !(null == I ? void 0 : I.isAvailable), variant: K.I.ARTIST, onOpenMenuChange: E }),
                        }),
                        (0, a.jsx)(G.H, { disabled: !I, shareLink: to, entityMeta: tL }),
                        tS &&
                            (0, a.jsx)($.WithOffline, {
                                fallback: (0, a.jsx)(u.Dr, {
                                    onClick: tC,
                                    icon: (0, a.jsx)(d.I, { variant: 'info', size: 'xxs' }),
                                    'data-test-id': n.Kq.artist.ARTIST_CONTEXT_MENU_ABOUT_ARTIST_BUTTON,
                                    children: tA,
                                }),
                            }),
                        (0, a.jsx)($.WithOffline, {
                            fallback: (0, a.jsx)(F.D, { onClick: ta, isDisliked: null == I ? void 0 : I.isDisliked, disabled: !(null == I ? void 0 : I.isAvailable) }),
                        }),
                    ],
                });
            });
        },
        83460: (t, e, i) => {
            'use strict';
            i.d(e, { B: () => Q });
            var a = i(32290),
                s = i(63618),
                l = i(96103),
                r = i(55178),
                n = i(60900),
                o = i(99923),
                c = i(21732),
                d = i(71483),
                u = i(91027),
                _ = i(6752),
                m = i(14934),
                A = i(82586),
                T = i(86269),
                x = i(71926),
                C = i(41677),
                L = i(73141),
                I = i(73192),
                E = i(71735),
                S = i(47745),
                h = i(2969),
                p = i(54391),
                k = i(23352),
                y = i(72396),
                R = i(5537),
                v = i(32641),
                O = i(28999),
                N = i(90169),
                P = i(57594),
                f = i(61376),
                j = i(11323),
                g = i(92744),
                M = i(61258),
                b = i(10180),
                U = i(90326),
                D = i(29268),
                B = i(34925),
                Y = i(13931),
                z = i(19740),
                H = i(9017),
                K = i(65477),
                w = i(46200),
                F = i(27120),
                X = i(95134),
                V = i(79406),
                G = i(58237),
                W = i(56367),
                q = i(83755);
            let $ = (0, l.PA)((t) => {
                var e;
                let { playlist: i, onOpenChange: s, open: l, ...r } = t,
                    { shouldShowBuySubscriptionModal: d, showBuySubscriptionModal: _ } = (0, w.q)(),
                    {
                        experiments: m,
                        settings: { isMobile: A },
                        trailer: T,
                        user: x,
                    } = (0, P.g)(),
                    C = (0, L.K)(i),
                    S = (0, I.A)(i),
                    h = (0, p.F)(),
                    { formatMessage: k } = (0, n.A)(),
                    y = (0, E.P)(),
                    R = m.checkExperiment(V.z.WebEditorsFeatures, 'on'),
                    v = (0, H.A)({ entityVariant: X.D.PLAYLIST, urlParams: { id: i.uid, kind: i.kind } });
                (0, F.N)(l);
                let O = (0, u.c)(() => {
                    if (d) return void _();
                    y() || (T.openPlaylistTrailer(i.id), h(o.DomainObjectType.Playlist, i.id));
                });
                return (0, a.jsxs)(z.W1, {
                    title: i.title,
                    onOpenChange: s,
                    open: l,
                    offsetOptions: 10,
                    isMobile: A,
                    ariaLabel: k({ id: 'interface-actions.context-menu' }),
                    containerDataTestId: c.Kq.playlist.PLAYLIST_CONTEXT_MENU,
                    ...r,
                    children: [
                        R && (0, a.jsx)(K.d, { entityVariant: X.D.PLAYLIST, adminUrl: i.isFavouritePlaylist ? void 0 : v }),
                        !A && (0, a.jsx)(W.L, { onClick: S, isPinned: i.isPinned }),
                        !i.isFavouritePlaylist && (0, a.jsx)(G.T, { onClick: C, isLiked: i.isLiked, disabled: !x.isAuthorized }),
                        (null == (e = i.trailer) ? void 0 : e.isAvailable) && (0, a.jsx)(q.N, { onClick: O, disabled: !i.isAvailable }),
                    ],
                });
            });
            var J = i(11675),
                Z = i.n(J);
            let Q = (0, l.PA)((t) => {
                let { className: e, playlist: i, children: l, contentLinesCount: z, customDescription: H, onCoverMouseDown: K } = t,
                    { ref: w, intersectionPropertyId: F } = (0, k.n)(),
                    {
                        trailer: X,
                        user: V,
                        paywall: { modal: G },
                    } = (0, P.g)(),
                    { from: W, utmLink: q } = (0, y.f)({ contextId: i.uuid, contextType: d.K.Playlist }),
                    { formatMessage: J } = (0, n.A)(),
                    { sendLikeSearchFeedback: Q, sendNavigateSearchFeedback: tt, sendPlaySearchFeedback: te } = (0, O.z)(),
                    [ti, ta] = (0, r.useState)(!1),
                    [ts, tl] = (0, r.useState)(!1),
                    [tr, tn] = (0, r.useState)(!1),
                    to = (0, Y.r)(i),
                    tc = (0, L.K)(i),
                    td = (0, I.A)(i),
                    tu = (0, S.N)(),
                    t_ = (0, h.b)(),
                    tm = (0, v.Z)(i.url),
                    tA = (0, p.F)(),
                    tT = (0, E.P)(),
                    tx = (0, u.c)((t) => {
                        if ((t.stopPropagation(), tT())) return void t.preventDefault();
                        (X.setUtmLink(q), X.openPlaylistTrailer(i.id), tA(o.DomainObjectType.Playlist, i.id));
                    }),
                    [tC, tL] = (0, r.useState)(!1),
                    { isPlaying: tI, togglePlay: tE } = (0, N.D)({
                        playContextParams: { contextData: { type: d.K.Playlist, meta: { id: i.id, uuid: i.uuid }, from: W, utmLink: q }, loadContextMeta: !0 },
                    }),
                    tS = (0, u.c)(() => {
                        (tu({ to: o.AppScreen.PlaylistScreen }), null == tt || tt());
                    }),
                    th = (0, u.c)((t) => {
                        (tS(), tm(t));
                    }),
                    tp = (0, R.N)(),
                    tk = (0, u.c)(() => {
                        if (!tT()) {
                            if (tp) return void G.open();
                            (ti || tI || (ta(!0), null == te || te()), tE(), t_(!tI));
                        }
                    }),
                    ty = (0, u.c)(() => {
                        (ts || i.isLiked || (tl(!0), null == Q || Q()), tc());
                    }),
                    tR = (0, u.c)((t) => {
                        (t.preventDefault(), t.stopPropagation());
                    }),
                    tv = (0, u.c)((t) => {
                        (tn(t), tL(t));
                    }),
                    tO = (0, r.useMemo)(() => {
                        var t;
                        return H
                            ? (0, a.jsx)(x.HL, { variant: 'span', type: 'entity', size: 's', weight: 'medium', lineClamp: 2, children: H }, i.getKey('description'))
                            : (null == (t = i.artists) ? void 0 : t.length)
                              ? (0, a.jsx)(
                                    C.i,
                                    { className: Z().artists, artists: i.artists, lineClamp: 1, linkClassName: Z().artistLink, captionSize: 's' },
                                    i.getKey('description'),
                                )
                              : void 0;
                    }, [H, i]),
                    tN = (0, _.L)(() => {
                        if (!i.isFavouritePlaylist)
                            return (0, a.jsx)(
                                g.c,
                                {
                                    className: (0, s.$)(Z().likeButton, Z().control),
                                    isLiked: i.isLiked,
                                    onClick: ty,
                                    variant: 'default',
                                    size: 's',
                                    iconSize: 'xxs',
                                    disabled: !V.isAuthorized,
                                },
                                i.getKey('LikeButton'),
                            );
                    }),
                    tP = (0, r.useMemo)(() => {
                        var t;
                        if (null == i || null == (t = i.trailer) ? void 0 : t.isAvailable)
                            return (0, a.jsx)(
                                B.n,
                                {
                                    children: (0, a.jsx)(
                                        D.k,
                                        { className: (0, s.$)(Z().trailerButton, Z().control), radius: 'round', size: 's', iconSize: 'xxs', onClick: tx },
                                        i.getKey('TrailerButton'),
                                    ),
                                },
                                i.getKey('PlaylilstCardTrailerTooltip'),
                            );
                    }, [tx, i]),
                    tf = (0, r.useMemo)(
                        () =>
                            (0, a.jsx)(
                                b.O,
                                { onClick: td, isPinned: i.isPinned, className: (0, s.$)(Z().pinButton, Z().control), withRipple: !1 },
                                i.getKey('PinButton'),
                            ),
                        [td, i],
                    ),
                    tj = (0, r.useMemo)(
                        () =>
                            (0, a.jsx)(T.t, {
                                className: Z().cover,
                                radius: 's',
                                withShadow: !0,
                                'data-test-id': c.Kq.playlist.PLAYLIST_CARD,
                                children: (0, a.jsxs)('div', {
                                    className: Z().coverBlock,
                                    onClick: th,
                                    onMouseDown: K,
                                    children: [
                                        (0, a.jsx)(j.B, {
                                            className: Z().image,
                                            src: i.coverUri,
                                            size: 200,
                                            fit: 'cover',
                                            alt: to,
                                            withAvatarReplace: !0,
                                            'aria-hidden': !0,
                                        }),
                                        (0, a.jsx)(m.hg, {
                                            isVisible: tr || tC,
                                            className: Z().controls,
                                            playControl: (0, a.jsx)(
                                                U.D,
                                                {
                                                    className: (0, s.$)(Z().playButton, Z().control),
                                                    buttonVariant: 'default',
                                                    withHover: !1,
                                                    iconSize: 'xl',
                                                    variant: 'filled',
                                                    onClick: tk,
                                                    isPlaying: tI,
                                                    disabled: !i.isAvailable,
                                                },
                                                i.getKey('PlayButton'),
                                            ),
                                            likeControl: tN,
                                            menuControl: (0, a.jsx)(
                                                $,
                                                {
                                                    playlist: i,
                                                    onOpenChange: tv,
                                                    open: tr,
                                                    onClick: tR,
                                                    className: (0, s.$)(Z().menuButton, Z().control),
                                                    icon: (0, a.jsx)(A.I, { size: 'xxs', variant: 'more' }),
                                                    size: 's',
                                                    'data-test-id': c.Kq.playlist.PLAYLIST_CONTEXT_MENU_BUTTON,
                                                },
                                                i.getKey('PlaylistContextMenu'),
                                            ),
                                            pinControl: tf,
                                            trailerControl: tP,
                                        }),
                                    ],
                                }),
                            }),
                        [th, K, i, to, tr, tC, tk, tI, tN, tv, tR, tf, tP],
                    ),
                    tg = !!i.actualLikesCount && !i.isLikesCountHidden;
                return (0, a.jsxs)(m.MN, {
                    ref: w,
                    'aria-label': to,
                    className: (0, s.$)(Z().root, e),
                    title: (0, a.jsx)(x.HL, {
                        variant: 'div',
                        type: 'entity',
                        size: 's',
                        weight: 'medium',
                        lineClamp: 2,
                        'data-test-id': c.Kq.playlist.PLAYLIST_TITLE,
                        children: (0, a.jsx)(M.N, { className: Z().titleLink, href: i.url, onClick: tS, children: i.title }),
                    }),
                    srTitle: (0, a.jsx)(M.N, { href: i.url, onClick: tS, children: i.title }),
                    'data-intersection-property-id': F,
                    contentLinesCount: z,
                    view: tj,
                    description: tO,
                    'data-test-id': c.Kq.playlist.PLAYLIST_ITEM,
                    children: [
                        tg &&
                            (0, a.jsx)(f.x, {
                                ariaLabel: J({ id: 'entity-names.likes-counter' }, { counter: i.actualLikesCount }),
                                likesCount: i.actualLikesCount,
                                isLiked: i.isLiked,
                                handleLikeClick: tc,
                            }),
                        l,
                    ],
                });
            });
        },
        90404: (t, e, i) => {
            'use strict';
            var a;
            (i.d(e, { _: () => a }),
                (function (t) {
                    ((t.ALBUM_ITEM = 'album_item'),
                        (t.ARTIST_ITEM = 'artist_item'),
                        (t.PLAYLIST_ITEM = 'playlist_item'),
                        (t.TRACK_ITEM = 'track_item'),
                        (t.LIKED_PLAYLIST_ITEM = 'liked_playlist_item'),
                        (t.PERSONAL_PLAYLIST_ITEM = 'personal_playlist_item'),
                        (t.WAVE_ITEM = 'wave_item'),
                        (t.WAVE_AGENT_ITEM = 'wave_agent_item'),
                        (t.MIX = 'mix'),
                        (t.MIX_CARD_ITEM = 'mix_card_item'),
                        (t.LIKED_ALBUM_ITEM = 'liked_album_item'),
                        (t.PRESAVED_ALBUM_ITEM = 'presaved_album_item'),
                        (t.CHART_ALBUM_ITEM = 'chart_album_item'),
                        (t.NON_MUSIC_ALBUM_ITEM = 'non_music_album_item'),
                        (t.MENU_ITEM = 'menu_item'),
                        (t.DONATION_ITEM = 'donation_item'),
                        (t.CLIP = 'clip'),
                        (t.CLIP_ITEM = 'clip_item'),
                        (t.CONCERT_ITEM = 'concert_item'),
                        (t.QUERY_TO_VIBE_ITEM = 'q2v_item'));
                })(a || (a = {})));
        },
        91853: (t, e, i) => {
            'use strict';
            i.d(e, { S: () => s });
            var a = i(19383);
            let s = (t) => {
                let { artist: e, callback: i, shouldHistoryBack: s } = t;
                return (0, a.l)({ entity: e, callback: i, modalBehavior: void 0 === s ? void 0 : { shouldHistoryBack: s }, preventDefaultWhenSafe: !0 });
            };
        },
        95226: (t, e, i) => {
            'use strict';
            i.d(e, { F: () => r });
            var a = i(32290),
                s = i(55178),
                l = i(73818);
            let r = (t) => {
                let {
                        blockId: e,
                        blockType: i,
                        blockIdForFrom: r,
                        blockPosX: n,
                        blockPosY: o,
                        objectsCount: c,
                        mainObjectType: d,
                        mainObjectId: u,
                        children: _,
                        displayReasonId: m,
                    } = t,
                    A = (0, s.useMemo)(
                        () => ({
                            blockId: e,
                            blockType: i,
                            blockIdForFrom: r,
                            blockPosX: n,
                            blockPosY: o,
                            objectsCount: c,
                            mainObjectType: d,
                            mainObjectId: u,
                            displayReasonId: m,
                        }),
                        [e, i, r, n, o, c, d, u, m],
                    );
                return (0, a.jsx)(l.p.Provider, { value: A, children: _ });
            };
        },
        97841: (t, e, i) => {
            'use strict';
            i.d(e, { w: () => k });
            var a = i(32290),
                s = i(63618),
                l = i(96103),
                r = i(60900),
                n = i(31010),
                o = (function (t) {
                    return (
                        (t.YANDEX = 'YANDEX'),
                        (t.YANDEX_PROJECTS = 'YANDEX_PROJECTS'),
                        (t.COPYRIGHT_HOLDER = 'COPYRIGHT_HOLDER'),
                        (t.AGREEMENT = 'AGREEMENT'),
                        (t.RECOMMENDATION_RULES = 'RECOMMENDATION_RULES'),
                        (t.HELP = 'HELP'),
                        (t.PRIVACY_POLICY = 'PRIVACY_POLICY'),
                        t
                    );
                })({});
            let c = (t, e, i) => {
                    switch (t) {
                        case o.YANDEX:
                            if ('ru' === e) return 'https://ya.ru';
                            return;
                        case o.YANDEX_PROJECTS:
                            return 'https://yandex.'.concat(e, '/all?lang=').concat(i);
                        case o.COPYRIGHT_HOLDER:
                            return 'https://yandex.'.concat(e, '/support/music/performers-and-copyright-holders/copyright.html?lang=').concat(i);
                        case o.AGREEMENT:
                            return 'https://yandex.ru/legal/music_termsofuse?lang='.concat(i);
                        case o.RECOMMENDATION_RULES:
                            return 'https://music.yandex.ru/legal/recommendations/ru/#music';
                        case o.HELP:
                            return 'https://yandex.'.concat(e, '/support/music/index.html?lang=').concat(i);
                        case o.PRIVACY_POLICY:
                            return 'https://yandex.'.concat(e, '/legal/confidential/').concat(i);
                    }
                },
                d = (t) => {
                    let { formatMessage: e, language: i, tld: a, year: s } = t;
                    return {
                        year: s,
                        yandexMusic: { id: o.YANDEX, title: e({ id: 'footer.yandex-music' }), url: c(o.YANDEX, a, i) },
                        yandexProjects: { id: o.YANDEX_PROJECTS, title: e({ id: 'footer.yandex-project' }), url: c(o.YANDEX_PROJECTS, a, i) },
                    };
                };
            var u = i(15559),
                _ = i(8626);
            let m = (t) => t(new Date(), (0, _.m)());
            var A = i(61945),
                T = i(57594),
                x = i(77088),
                C = i.n(x),
                L = i(21732),
                I = i(71926),
                E = i(61258);
            let S = (t) => {
                    let { className: e, data: i } = t;
                    return (0, a.jsxs)('div', {
                        className: (0, s.$)(C().copyrights, e),
                        'data-test-id': L.S7.FOOTER_COPYRIGHTS,
                        children: [
                            (0, a.jsxs)(I.HL, {
                                variant: 'span',
                                type: 'text',
                                size: 's',
                                weight: 'medium',
                                className: C().text,
                                children: [
                                    '\xa9 ',
                                    i.year,
                                    ' \xa0',
                                    (0, a.jsx)(E.N, {
                                        target: '_blank',
                                        href: i.yandexMusic.url,
                                        className: (0, s.$)(C().copyrightLink, C().yandexMusicLink),
                                        'data-test-id': L.S7.FOOTER_YANDEX_MUSIC_LINK,
                                        children: i.yandexMusic.title,
                                    }),
                                ],
                            }),
                            (0, a.jsx)(I.HL, { variant: 'span', type: 'text', size: 's', weight: 'medium', children: ' • ' }),
                            (0, a.jsx)(E.N, {
                                target: '_blank',
                                href: i.yandexProjects.url,
                                className: C().copyrightLink,
                                'data-test-id': L.S7.FOOTER_YANDEX_PROJECT_LINK,
                                children: i.yandexProjects.title,
                            }),
                        ],
                    });
                },
                h = (t) => {
                    let { disclaimer: e, links: i } = t;
                    return (0, a.jsxs)('div', {
                        className: C().links,
                        children: [
                            (0, a.jsx)('ol', {
                                className: C().list,
                                'data-test-id': L.S7.FOOTER_LINKS_LIST,
                                children: i.map((t) => {
                                    let { id: e, title: i, url: s } = t;
                                    return (0, a.jsx)(
                                        'li',
                                        {
                                            className: C().item,
                                            children: (0, a.jsx)(E.N, { target: '_blank', href: s, className: C().link, 'data-test-id': L.S7.FOOTER_LINK, children: i }),
                                        },
                                        e,
                                    );
                                }),
                            }),
                            (0, a.jsx)(I.HL, {
                                variant: 'span',
                                type: 'text',
                                size: 'm',
                                weight: 'medium',
                                className: C().explicitText,
                                tabIndex: 0,
                                dangerouslySetInnerHTML: { __html: e },
                                'data-test-id': L.S7.FOOTER_DISCLAIMER_TEXT,
                            }),
                        ],
                    });
                },
                p = (t) => {
                    let { className: e, data: i } = t;
                    return (0, a.jsxs)('footer', {
                        className: (0, s.$)(C().root, C().important, e),
                        'data-test-id': L.S7.FOOTER,
                        children: [(0, a.jsx)(h, { links: i.links, disclaimer: i.disclaimer }), (0, a.jsx)(S, { data: i.copyrights })],
                    });
                };
            (0, l.PA)((t) => {
                let { className: e } = t,
                    { location: i } = (0, T.g)(),
                    { formatDate: s, formatMessage: l } = (0, r.A)(),
                    { language: n } = (0, A.h)(),
                    o = d({ formatMessage: l, language: n, tld: i.tld, year: m(s) });
                return (0, a.jsx)(S, { className: e, data: o });
            });
            let k = (0, l.PA)((t) => {
                var e;
                let { className: i } = t,
                    { experiments: l, location: _, user: x } = (0, T.g)(),
                    { formatDate: L, formatMessage: I } = (0, r.A)(),
                    { isEnabled: E } = null != (e = (0, n.P)()) ? e : {},
                    { language: S } = (0, A.h)(),
                    h = ((t) => {
                        let { checkExperiment: e, formatMessage: i, isWebApplication: a, language: s, tld: l, userRegion: r, year: n } = t;
                        return {
                            links: ((t) => {
                                let { formatMessage: e, isWebApplication: i, tld: a, language: s, userRegion: l } = t,
                                    r = { id: o.COPYRIGHT_HOLDER, title: e({ id: 'footer.links-copyright-holders' }), url: c(o.COPYRIGHT_HOLDER, a, s) },
                                    n = { id: o.PRIVACY_POLICY, title: e({ id: 'footer.links-privacy-policy' }), url: c(o.PRIVACY_POLICY, a, s) },
                                    d = { id: o.AGREEMENT, title: e({ id: 'footer.links-terms' }), url: c(o.AGREEMENT, a, s) },
                                    u = { id: o.RECOMMENDATION_RULES, title: e({ id: 'footer.links-recommendation-rules' }), url: c(o.RECOMMENDATION_RULES, a, s) },
                                    _ = { id: o.HELP, title: e({ id: 'footer.links-help' }), url: c(o.HELP, a, s) },
                                    m = [r, d, u];
                                return (i && 'ru' === l && m.push(n), m.push(_), m);
                            })({ formatMessage: i, isWebApplication: a, language: s, tld: l, userRegion: r }),
                            disclaimer: (0, u.v)({
                                checkExperiment: e,
                                getDisclaimerContent: () => i({ id: 'footer.disclaimer-content' }),
                                getExplicitContent: () => i({ id: 'footer.explicit-content' }),
                                userRegion: r,
                            }),
                            copyrights: d({ formatMessage: i, language: s, tld: l, year: n }),
                        };
                    })({
                        checkExperiment: (t, e) => l.checkExperiment(t, e),
                        formatMessage: I,
                        isWebApplication: !1,
                        tld: _.tld,
                        language: S,
                        userRegion: x.account.data.userSessionRegionIso,
                        year: m(L),
                    });
                return (0, a.jsx)(p, { className: (0, s.$)({ [C().root_withOffsetForDeeplink]: E }, i), data: h });
            });
        },
    },
    (t) => {
        (t.O(
            0,
            [
                1010, 7231, 7412, 8461, 2147, 4517, 9763, 1256, 3608, 4182, 6706, 5472, 8378, 900, 2536, 2146, 3353, 2474, 8035, 347, 2732, 1410, 229, 8506, 6050, 5806,
                6241, 7702, 6874, 9155, 861, 4668, 9740, 1175, 4499, 8915, 8816, 2563, 4220, 9562, 7358,
            ],
            () => t((t.s = 1544)),
        ),
            (_N_E = t.O()));
    },
]);
