(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [229, 3069],
    {
        356: (e) => {
            e.exports = {
                message: 'NotificationDislike_message__RoxZH',
                text: 'NotificationDislike_text__fJHts',
                cover: 'NotificationDislike_cover__N5Oqu',
                image: 'NotificationDislike_image__jn4_4',
            };
        },
        1045: (e, t, i) => {
            'use strict';
            i.d(t, { k: () => r });
            let r = 100;
        },
        2047: (e, t, i) => {
            'use strict';
            var r;
            (i.d(t, { L: () => r }),
                (function (e) {
                    ((e.PUBLIC = 'public'), (e.PRIVATE = 'private'));
                })(r || (r = {})));
        },
        5482: (e, t, i) => {
            'use strict';
            i.d(t, { I: () => s });
            var r = i(60754),
                n = i(57367);
            let s = i(38396).Z.props({ artists: r.gK.maybe(r.gK.array(n.P)) });
        },
        5942: (e, t, i) => {
            'use strict';
            i.d(t, { K: () => y });
            var r = i(32290),
                n = i(92708),
                s = i(55178),
                a = i(60900),
                l = i(63380),
                o = i(45477),
                c = i(75582),
                d = i(57594),
                u = i(90357),
                m = i(20472),
                p = i(97647),
                _ = i(97755);
            let g = (e) => {
                    let { artist: t, closeToast: i } = e;
                    return (0, r.jsx)(_.O, {
                        closeToast: i,
                        entityVariant: p.c.ARTIST,
                        entityUrl: t.url,
                        collectionUrl: m.Z.collectionArtists.href,
                        coverUri: t.coverUri,
                        entityTitle: t.name,
                        isLiked: t.isLiked,
                    });
                },
                y = (e) => {
                    let { user: t } = (0, d.g)(),
                        { notify: i } = (0, c.l)(),
                        [m, p] = (0, s.useState)(!1),
                        { formatMessage: _ } = (0, a.A)();
                    return (0, s.useCallback)(async () => {
                        if (!e) return;
                        if (!t.isAuthorized)
                            return void i((0, r.jsx)(u.h, { error: _({ id: 'authorization-messages.need-to-authorizate' }) }), { containerId: o.u.ERROR });
                        if (m) return;
                        let s = { ...(0, n.HO)(e), isLiked: !e.isLiked };
                        p(!0);
                        let a = await e.toggleLike();
                        (p(!1),
                            a === l.f.OK
                                ? i((0, r.jsx)(g, { artist: s }), { containerId: o.u.INFO })
                                : i((0, r.jsx)(u.h, { error: _({ id: 'error-messages.error-during-action' }) }), { containerId: o.u.ERROR }));
                    }, [e, t.isAuthorized, m, _, i]);
                };
        },
        7474: (e, t, i) => {
            'use strict';
            i.d(t, { a: () => F });
            var r = i(32290),
                n = i(63618),
                s = i(96103),
                a = i(55178),
                l = i(60900),
                o = i(99923),
                c = i(21732),
                d = i(71483),
                u = i(91027),
                m = i(6752),
                p = i(14934),
                _ = i(82586),
                g = i(86269),
                y = i(71926),
                v = i(91853),
                h = i(5942),
                T = i(70390),
                A = i(71735),
                b = i(47745),
                I = i(2969),
                C = i(54391),
                f = i(23352),
                x = i(72396),
                P = i(5537),
                k = i(32641),
                E = i(28999),
                L = i(90169),
                O = i(57594),
                N = i(11323),
                S = i(92744),
                j = i(61258),
                R = i(10180),
                K = i(90326),
                w = i(29268),
                B = i(34925),
                D = i(80528),
                M = i(42048),
                U = i.n(M);
            let F = (0, s.PA)((e) => {
                let { artist: t, className: i, children: s, contentLinesCount: M, topTitleElement: F, bottomTitleElement: z } = e,
                    { ref: W, intersectionPropertyId: G } = (0, f.n)(),
                    {
                        trailer: V,
                        user: H,
                        paywall: { modal: Y },
                    } = (0, O.g)(),
                    { from: X, utmLink: $ } = (0, x.f)({ contextId: t.id, contextType: d.K.Artist }),
                    { formatMessage: q } = (0, l.A)(),
                    [J, Z] = (0, a.useState)(!1),
                    [Q, ee] = (0, a.useState)(!1),
                    [et, ei] = (0, a.useState)(!1),
                    { sendLikeSearchFeedback: er, sendNavigateSearchFeedback: en, sendPlaySearchFeedback: es } = (0, E.z)(),
                    ea = (0, b.N)(),
                    el = (0, I.b)(),
                    eo = (0, h.K)(t),
                    ec = (0, T.A)(t),
                    { id: ed, name: eu, coverUri: em, isLiked: ep } = t,
                    e_ = (0, k.Z)(t.url),
                    [eg, ey] = (0, a.useState)(!1),
                    ev = (0, C.F)(),
                    eh = (0, A.P)(),
                    eT = (0, u.c)((e) => {
                        if ((e.stopPropagation(), eh())) return void e.preventDefault();
                        (V.openArtistTrailer(t.id), ev(o.DomainObjectType.Artist, t.id));
                    }),
                    eA = (0, a.useMemo)(() => {
                        let e = q({ id: 'entity-names.artist-name' }, { artistName: eu }),
                            t = ep ? q({ id: 'entity-names.has-your-like' }) : '';
                        return ''.concat(e, ' ').concat(t);
                    }, [eu, ep, q]),
                    { isPlaying: eb, togglePlay: eI } = (0, L.D)({
                        playContextParams: { contextData: { type: d.K.Artist, meta: { id: Number(ed) }, from: X, utmLink: $ }, loadContextMeta: !0 },
                    }),
                    eC = (0, v.S)({ artist: t, callback: e_ }),
                    ef = (0, v.S)({ artist: t, callback: eI }),
                    ex = (0, u.c)((e) => {
                        (null == en || en(), ea({ to: o.AppScreen.ArtistScreen }), eC(e));
                    }),
                    eP = (0, P.N)(),
                    ek = (0, u.c)(() => {
                        if (!eh()) {
                            if (eP) return void Y.open();
                            (J || eb || (Z(!0), null == es || es()), ef(), el(!eb));
                        }
                    }),
                    eE = (0, u.c)(() => {
                        (Q || ep || (ee(!0), null == er || er()), eo());
                    }),
                    eL = (0, u.c)((e) => {
                        (e.preventDefault(), e.stopPropagation());
                    }),
                    eO = (0, u.c)((e) => {
                        (ei(e), ey(e));
                    }),
                    eN = (0, a.useMemo)(
                        () =>
                            (0, r.jsx)(
                                D.g,
                                {
                                    artist: t,
                                    onOpenChange: eO,
                                    open: et,
                                    onClick: eL,
                                    className: (0, n.$)(U().menuButton, U().control),
                                    size: 's',
                                    icon: (0, r.jsx)(_.I, { size: 'xxs', variant: 'more' }),
                                    'data-test-id': c.Kq.artist.ARTIST_CONTEXT_MENU_BUTTON,
                                },
                                t.getKey('ArtistContextMenu'),
                            ),
                        [t, eL, eO, et],
                    ),
                    eS = (0, a.useMemo)(() => {
                        var e;
                        if (null == t || null == (e = t.trailer) ? void 0 : e.isAvailable)
                            return (0, r.jsx)(
                                B.n,
                                {
                                    children: (0, r.jsx)(w.k, {
                                        className: (0, n.$)(U().trailerButton, U().control),
                                        radius: 'round',
                                        size: 's',
                                        iconSize: 'xxs',
                                        onClick: eT,
                                    }),
                                },
                                t.getKey('ArtistCardTrailerTooltip'),
                            );
                    }, [t, eT]),
                    ej = (0, a.useMemo)(
                        () =>
                            (0, r.jsx)(
                                R.O,
                                { onClick: ec, isPinned: t.isPinned, className: (0, n.$)(U().pinButton, U().control), withRipple: !1 },
                                t.getKey('PinButton'),
                            ),
                        [t, ec],
                    ),
                    eR = (0, m.L)(() => {
                        if (t.isAvailable)
                            return (0, r.jsx)(
                                p.hg,
                                {
                                    isVisible: et || eg,
                                    className: U().controls,
                                    radius: 'round',
                                    playControl: (0, r.jsx)(
                                        K.D,
                                        {
                                            buttonVariant: 'default',
                                            withHover: !1,
                                            className: (0, n.$)(U().playButton, U().control),
                                            iconSize: 'xl',
                                            variant: 'filled',
                                            onClick: ek,
                                            isPlaying: eb,
                                            disabled: !t.isAvailableForPlaying,
                                        },
                                        t.getKey('PlayButton'),
                                    ),
                                    likeControl: (0, r.jsx)(
                                        S.c,
                                        {
                                            className: (0, n.$)(U().likeButton, U().control),
                                            isLiked: ep,
                                            onClick: eE,
                                            variant: 'default',
                                            size: 's',
                                            iconSize: 'xxs',
                                            disabled: !H.isAuthorized,
                                        },
                                        t.getKey('LikeButton'),
                                    ),
                                    menuControl: eN,
                                    pinControl: ej,
                                    trailerControl: eS,
                                },
                                t.getKey('ArtistCardControls'),
                            );
                    }),
                    eK = (0, a.useMemo)(
                        () =>
                            (0, r.jsx)(g.t, {
                                className: U().cover,
                                radius: 'round',
                                withShadow: !0,
                                'data-test-id': c.Kq.artist.ARTIST_CARD,
                                children: (0, r.jsxs)('div', {
                                    className: U().coverBlock,
                                    onClick: ex,
                                    children: [
                                        (0, r.jsx)(N.B, {
                                            className: U().image,
                                            src: em,
                                            size: 200,
                                            fit: 'cover',
                                            alt: eA,
                                            withAvatarReplace: !0,
                                            isAvailable: t.isAvailable,
                                            'aria-hidden': !0,
                                        }),
                                        eR,
                                    ],
                                }),
                            }),
                        [ex, em, eA, t.isAvailable, eR],
                    );
                return (0, r.jsx)(p.MN, {
                    ref: W,
                    className: (0, n.$)(U().root, i),
                    textPosition: 'center',
                    'aria-label': eA,
                    title: (0, r.jsxs)(r.Fragment, {
                        children: [
                            F,
                            (0, r.jsx)(y.HL, {
                                variant: 'div',
                                type: 'entity',
                                size: 's',
                                weight: 'medium',
                                lineClamp: 2,
                                children: (0, r.jsx)(j.N, {
                                    className: U().titleLink,
                                    href: t.url,
                                    'aria-label': eA,
                                    onClick: ex,
                                    'data-test-id': c.Kq.artist.ARTIST_TITLE,
                                    children: eu,
                                }),
                            }),
                            z,
                        ],
                    }),
                    srTitle: (0, r.jsx)(j.N, { href: t.url, onClick: ex, children: eA }),
                    'data-intersection-property-id': G,
                    contentLinesCount: M,
                    view: eK,
                    'data-test-id': c.Kq.artist.ARTIST_ITEM,
                    children: s,
                });
            });
        },
        9905: (e) => {
            e.exports = { root: 'PostAlbums_root__u2a1q', content: 'PostAlbums_content__uMSez' };
        },
        11675: (e) => {
            e.exports = {
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
        12388: (e, t, i) => {
            'use strict';
            i.d(t, { J: () => l });
            var r = i(60754),
                n = i(87411),
                s = i(57367),
                a = i(44032);
            let l = n.G.props({ artists: r.gK.maybe(r.gK.array(s.P)), chart: r.gK.maybe(a.I) }).views((e) => ({
                get artistNames() {
                    var t;
                    return null == (t = e.artists) ? void 0 : t.map((e) => e.name).join(', ');
                },
                get artistName() {
                    var i, r, n, s;
                    if (null == (r = e.artists) || null == (i = r[0]) ? void 0 : i.various) return;
                    return null == (s = e.artists) || null == (n = s[0]) ? void 0 : n.name;
                },
                get artistIds() {
                    var a;
                    return null == (a = e.artists) ? void 0 : a.map((e) => e.id);
                },
                get artistId() {
                    var l, o;
                    return null == (o = e.artists) || null == (l = o[0]) ? void 0 : l.id;
                },
            }));
        },
        13931: (e, t, i) => {
            'use strict';
            i.d(t, { r: () => s });
            var r = i(55178),
                n = i(60900);
            let s = (e) => {
                let { formatMessage: t } = (0, n.A)();
                return (0, r.useMemo)(() => {
                    let i = '';
                    e.isLiked && !e.actualLikesCount
                        ? (i = t({ id: 'entity-names.has-your-like' }))
                        : 'number' == typeof e.actualLikesCount &&
                          (i =
                              e.actualLikesCount > 0
                                  ? t({ id: 'entity-names.likes-counter' }, { counter: e.actualLikesCount })
                                  : t({ id: 'entity-names.likes-counter-empty' }));
                    let r = t({ id: 'entity-names.playlist-name' }, { playlistName: e.title });
                    return ''.concat(r, ' ').concat(i);
                }, [t, e]);
            };
        },
        15910: (e) => {
            e.exports = { root: 'PostShimmer_root__MlLkY' };
        },
        19182: (e) => {
            e.exports = {
                root: 'PostPage_root__Orhf7',
                scrollableContainer: 'PostPage_scrollableContainer__iV9Bo',
                scrollContainer: 'PostPage_scrollContainer__zrIrH',
                important: 'PostPage_important__qUlED',
                container: 'PostPage_container__orSfz',
                shimmerTitle: 'PostPage_shimmerTitle__EeFCD',
            };
        },
        20168: (e, t, i) => {
            'use strict';
            i.d(t, { Y: () => r });
            var r = (function (e) {
                return ((e.OK = 'ok'), (e.ERROR = 'error'), (e.RELOAD = 'reload'), e);
            })({});
        },
        20472: (e, t, i) => {
            'use strict';
            i.d(t, { Z: () => n });
            var r = i(68243);
            let n = {
                main: (0, r.u)('/'),
                chart: (0, r.u)('/chart'),
                chartPodcasts: (0, r.u)('/chart/podcasts'),
                collection: (0, r.u)('/collection'),
                collectionAlbums: (0, r.u)('/collection/albums'),
                collectionArtists: (0, r.u)('/collection/artists'),
                collectionClips: (0, r.u)('/collection/clips'),
                collectionDislikes: (0, r.u)('/collection/dislikes'),
                collectionKids: (0, r.u)('/collection/kids'),
                collectionKidsAlbums: (0, r.u)('/collection/kids/albums'),
                collectionKidsPlaylists: (0, r.u)('/collection/kids/playlists'),
                collectionKidsTracks: (0, r.u)('/collection/kids/tracks'),
                collectionNonMusic: (0, r.u)('/collection/non-music'),
                collectionNonMusicLiked: (0, r.u)('/collection/non-music/liked'),
                collectionVibeRooms: (0, r.u)('/collection/multivibes'),
                collectionPlaylists: (0, r.u)('/collection/playlists'),
                collectionPlaylistsCreated: (0, r.u)('/collection/playlists/created'),
                collectionPlaylistsLiked: (0, r.u)('/collection/playlists/liked'),
                collectionShelf: (0, r.u)('/collection/shelf'),
                collectionShelfLiked: (0, r.u)('/collection/shelf/liked'),
                collectionShelfNewEpisodes: (0, r.u)('/collection/shelf/new-episodes'),
                collectionShelfRecentlyPlayed: (0, r.u)('/collection/shelf/recently-played'),
                concerts: (0, r.u)('/concerts'),
                kids: (0, r.u)('/kids'),
                mixes: (0, r.u)('/mixes'),
                musicHistory: (0, r.u)('/music-history'),
                muzmarket: (0, r.u)('/muzmarket'),
                mymusic: (0, r.u)('/mymusic'),
                mymusicDownloadsTracks: (0, r.u)('/mymusic/downloads/tracks'),
                multivibe: (0, r.u)('/multivibe'),
                nonMusic: (0, r.u)('/non-music'),
                pay: (0, r.u)('/pay'),
                userSlides: (0, r.u)('/slides/user'),
                search: (0, r.u)('/search'),
                searchHistory: (0, r.u)('/search/history'),
                settings: (0, r.u)('/settings'),
                video: (0, r.u)('/video'),
            };
        },
        23491: (e, t, i) => {
            'use strict';
            (i.r(t), i.d(t, { default: () => et }));
            var r,
                n = i(32290),
                s = i(21916),
                a = i(55178),
                l = i(49259),
                o = i(45066),
                c = i(60754),
                d = i(87953);
            !(function (e) {
                ((e.ALBUMS = 'albums'), (e.ARTISTS = 'artists'), (e.PLAYLISTS = 'playlists'));
            })(r || (r = {}));
            var u = i(72428),
                m = i(12388),
                p = i(5482),
                _ = i(84060),
                g = i(57367),
                y = i(33229),
                v = i(49399),
                h = i(73715);
            let T = c.gK
                    .compose(
                        c.gK.model('PostPage', {
                            errorStatusCode: c.gK.maybe(c.gK.number),
                            title: c.gK.maybeNull(c.gK.string),
                            promotionType: c.gK.maybeNull(c.gK.enumeration(Object.values(r))),
                            artists: c.gK.maybe(c.gK.array(g.P)),
                            albums: c.gK.maybe(c.gK.array(m.J)),
                            playlists: c.gK.maybe(c.gK.array(p.I)),
                        }),
                        h.X,
                    )
                    .views((e) => {
                        let t = {
                            get isLoading() {
                                return e.isNeededToLoad || e.loadingState === v.G.PENDING;
                            },
                            get isNotFound() {
                                let t = e.errorStatusCode === d.X1.NOT_FOUND || e.errorStatusCode === d.X1.BAD_REQUEST;
                                return e.isRejected && t;
                            },
                            get isSomethingWrong() {
                                return e.isRejected && !t.isNotFound;
                            },
                        };
                        return t;
                    })
                    .actions((e) => ({
                        getData: (0, c.L3)(function* (t) {
                            let { promoId: i } = t,
                                { feedResource: r, modelActionsLogger: n } = (0, c._$)(e);
                            if (e.loadingState !== v.G.PENDING)
                                try {
                                    e.loadingState = v.G.PENDING;
                                    let t = yield r.getPromotionsById({ promoId: i });
                                    ((e.title = t.title),
                                        (e.promotionType = t.promotionType),
                                        t.artists && t.artists.length > 0 && (e.artists = (0, c.wg)(t.artists.map(_.d))),
                                        t.albums && t.albums.length > 0 && (e.albums = (0, c.wg)(t.albums.map(u.p))),
                                        t.playlists &&
                                            t.playlists.length > 0 &&
                                            (e.playlists = (0, c.wg)(
                                                t.playlists.map((e) => {
                                                    let { playlist: t } = e;
                                                    return (0, y.j)(t);
                                                }),
                                            )),
                                        e.loadingState !== v.G.IDLE && (e.loadingState = v.G.RESOLVE));
                                } catch (t) {
                                    (n.error(t),
                                        t instanceof d.GX &&
                                            (t.statusCode === d.X1.NOT_FOUND || t.statusCode === d.X1.BAD_REQUEST) &&
                                            (e.errorStatusCode = d.X1.NOT_FOUND),
                                        e.loadingState !== v.G.IDLE && (e.loadingState = v.G.REJECT));
                                }
                        }),
                        reset() {
                            ((e.loadingState = v.G.IDLE), (e.title = null), (e.artists = (0, c.wg)([])), (e.albums = (0, c.wg)([])));
                        },
                    })),
                A = { loadingState: v.G.IDLE },
                { pageStoreProvider: b } = (0, l.W)({ createStore: (e) => T.create(A, e), patchKey: o.n.POST });
            var I = i(63618),
                C = i(96103),
                f = i(46049),
                x = i(79856),
                P = i(71926),
                k = i(64170),
                E = i(7999),
                L = i(48922),
                O = i(22714),
                N = i(83808),
                S = i(83920),
                j = i(3796),
                R = i(74694),
                K = i(89020),
                w = i(15910),
                B = i.n(w);
            let D = () => {
                let e = Array.from({ length: 20 }, (e, t) => {
                    let i = void 0 === e ? t : ''.concat(t, '-').concat(String(e));
                    return (0, n.jsx)(K.V, { isActive: !0 }, i);
                });
                return (0, n.jsx)('div', { className: B().root, children: e });
            };
            var M = i(19182),
                U = i.n(M),
                F = i(24170),
                z = i(9905),
                W = i.n(z);
            let G = (0, C.PA)((e) => {
                let { albums: t = [] } = e;
                return (0, n.jsx)('div', {
                    className: W().root,
                    children: (0, n.jsx)('div', {
                        className: W().content,
                        'aria-labelledby': 'post-page-header',
                        tabIndex: 0,
                        children: t.map((e) => (0, n.jsx)(F.a, { className: W().item, album: e, contentLinesCount: 3 }, e.id)),
                    }),
                });
            });
            var V = i(7474),
                H = i(98503),
                Y = i.n(H);
            let X = (0, C.PA)((e) => {
                let { artists: t = [] } = e;
                return (0, n.jsx)('div', {
                    className: Y().root,
                    children: (0, n.jsx)('div', {
                        className: Y().content,
                        'aria-labelledby': 'post-page-header',
                        tabIndex: 0,
                        children: t.map((e) => (0, n.jsx)(V.a, { className: Y().item, artist: e, contentLinesCount: 3 }, e.id)),
                    }),
                });
            });
            var $ = i(83460),
                q = i(79043),
                J = i.n(q);
            let Z = (0, C.PA)((e) => {
                    let { playlists: t = [] } = e;
                    return (0, n.jsx)('div', {
                        className: J().root,
                        children: (0, n.jsx)('div', {
                            className: J().content,
                            'aria-labelledby': 'post-page-header',
                            tabIndex: 0,
                            children: t.map((e) => (0, n.jsx)($.B, { className: J().item, playlist: e, contentLinesCount: 3 }, e.id)),
                        }),
                    });
                }),
                Q = (0, C.PA)((e) => {
                    let { promoId: t } = e,
                        i = (0, l.s)(o.n.POST),
                        c = (0, N.W)(),
                        { contentScrollRef: d, setContentScrollRef: u } = (0, S.g)();
                    (i.isNotFound && (0, s.notFound)(), (0, j.J)(i.isResolved));
                    let m = (0, a.useMemo)(() => {
                        if (i.isLoading) return (0, n.jsx)(D, {});
                        switch (i.promotionType) {
                            case r.ARTISTS:
                                return (0, n.jsx)(X, { artists: i.artists });
                            case r.ALBUMS:
                                return (0, n.jsx)(G, { albums: i.albums });
                            case r.PLAYLISTS:
                                return (0, n.jsx)(Z, { playlists: i.playlists });
                            default:
                                (0, s.notFound)();
                        }
                    }, [i.albums, i.artists, i.isLoading, i.playlists, i.promotionType]);
                    return (t && i.isNeededToLoad && (0, a.use)(i.getData({ promoId: t })), i.isSomethingWrong)
                        ? (0, n.jsx)(k.SomethingWentWrong, {})
                        : (0, n.jsx)(O.n, {
                              pageId: L._Q.POST,
                              children: (0, n.jsx)(E.h, {
                                  scrollElement: d,
                                  outerTitle: i.title || void 0,
                                  children: (0, n.jsxs)('div', {
                                      className: U().root,
                                      children: [
                                          (0, n.jsx)(R.Y, {
                                              variant: R.V.TEXT,
                                              withForwardControl: !1,
                                              withBackwardControl: c.canBack,
                                              children: i.title
                                                  ? (0, n.jsx)(P.DZ, { id: 'post-header', variant: 'h2', weight: 'bold', size: 'xl', lineClamp: 1, children: i.title })
                                                  : (0, n.jsx)(x.W, { className: U().shimmerTitle, radius: 'l' }),
                                          }),
                                          (0, n.jsx)(f.N, {
                                              containerClassName: (0, I.$)(U().scrollContainer, U().important),
                                              className: U().scrollableContainer,
                                              ref: u,
                                              children: (0, n.jsx)('div', { className: U().container, children: m }),
                                          }),
                                      ],
                                  }),
                              }),
                          });
                }),
                ee = () => {
                    let e = (0, N.W)();
                    return (0, n.jsx)(E.h, {
                        scrollElement: null,
                        children: (0, n.jsxs)('div', {
                            className: U().root,
                            children: [
                                (0, n.jsx)(R.Y, {
                                    variant: R.V.TEXT,
                                    withForwardControl: !1,
                                    withBackwardControl: e.canBack,
                                    children: (0, n.jsx)(x.W, { className: U().shimmerTitle, radius: 'l' }),
                                }),
                                (0, n.jsx)(f.N, {
                                    containerClassName: (0, I.$)(U().scrollContainer, U().important),
                                    className: U().scrollableContainer,
                                    children: (0, n.jsx)('div', { className: U().container, children: (0, n.jsx)(D, {}) }),
                                }),
                            ],
                        }),
                    });
                },
                et = () => {
                    let e = (0, s.useSearchParams)().get('promoId');
                    return (
                        e || (0, s.notFound)(),
                        (0, n.jsx)(b, { children: (0, n.jsx)(a.Suspense, { fallback: (0, n.jsx)(ee, {}), children: (0, n.jsx)(Q, { promoId: e }) }) })
                    );
                };
        },
        30310: (e) => {
            e.exports = {
                root: 'SomethingWentWrong_root__d77VJ',
                content: 'SomethingWentWrong_content__8_YkJ',
                content_shrink: 'SomethingWentWrong_content_shrink__GOR_7',
                navigation: 'SomethingWentWrong_navigation__a8eMG',
                navigation_desktop: 'SomethingWentWrong_navigation_desktop__WGGBX',
                icon: 'SomethingWentWrong_icon__f15_y',
                title: 'SomethingWentWrong_title__Kn89B',
                important: 'SomethingWentWrong_important__namIb',
                text: 'SomethingWentWrong_text__KEfGc',
                button: 'SomethingWentWrong_button__dmh7t',
            };
        },
        33229: (e, t, i) => {
            'use strict';
            i.d(t, { j: () => a });
            var r = i(60754),
                n = i(93159),
                s = i(26544);
            let a = (e) => {
                var t, i, a, l, o;
                e = e || {};
                let c = (0, s.m)(e.trailer);
                return (0, r.wg)({
                    isAvailable: null == (l = e.available) || l,
                    uid: e.uid,
                    uuid: null != (o = e.playlistUuid) ? o : '',
                    kind: e.kind,
                    title: e.title,
                    coverUri: (null == e || null == (t = e.cover) ? void 0 : t.uri) || (null == e || null == (a = e.cover) || null == (i = a.itemsUri) ? void 0 : i[0]),
                    tracksCount: e.trackCount,
                    likesCount: e.likesCount,
                    averageColor: (0, n.Q)(null == e ? void 0 : e.derivedColors),
                    revision: e.revision,
                    generatedPlaylistType: e.generatedPlaylistType,
                    personalColor: e.personalColor,
                    visibility: e.visibility,
                    trailer: c,
                });
            };
        },
        38223: (e, t, i) => {
            'use strict';
            i.d(t, { D: () => d });
            var r = i(32290),
                n = i(96103),
                s = i(39407),
                a = i(21732),
                l = i(82586),
                o = i(19740),
                c = i(57594);
            let d = (0, n.PA)((e) => {
                let { isDisliked: t, onClick: i, disabled: n, className: d } = e,
                    { user: u } = (0, c.g)();
                return (0, r.jsx)(o.Dr, {
                    onClick: i,
                    className: d,
                    icon: (0, r.jsx)(l.I, { variant: t ? 'disliked' : 'dislike', size: 'xxs' }),
                    role: 'menuitemcheckbox',
                    'aria-checked': t,
                    disabled: n || !u.isAuthorized,
                    'data-test-id': a.S7.CONTEXT_MENU_DISLIKE_BUTTON,
                    children: (0, r.jsx)(s.A, { id: 'interface-actions.do-not-like' }),
                });
            });
        },
        38396: (e, t, i) => {
            'use strict';
            i.d(t, { Z: () => s });
            var r = i(60754);
            let n = r.gK.model('TrackIdModel', { id: r.gK.union(r.gK.string, r.gK.number), albumId: r.gK.maybe(r.gK.number), timestamp: r.gK.maybe(r.gK.string) }),
                s = i(74885)
                    .$.props({ tracks: r.gK.maybe(r.gK.array(n)) })
                    .actions((e) => ({ getKey: (t) => ''.concat(t, '_').concat(e.id) }));
        },
        42048: (e) => {
            e.exports = {
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
        44265: (e, t, i) => {
            'use strict';
            i.d(t, { j: () => r });
            var r = (function (e) {
                return ((e[(e.LIKE = 3)] = 'LIKE'), (e[(e.CHART = 1076)] = 'CHART'), e);
            })({});
        },
        45066: (e, t, i) => {
            'use strict';
            i.d(t, { n: () => r });
            let r = {
                MIXES: 'pages/mixes',
                TAG: 'pages/tag',
                GENRES: 'pages/genres',
                PROMOLANDING: 'pages/promolanding',
                MUSIC_HISTORY: 'pages/music-history',
                POST: 'pages/post',
                PLAYLIST_PERSONAL: 'pages/playlist-personal',
                MY_MUSIC: 'pages/my-music',
                FAVORITE_TRACKS: 'pages/favorite-tracks',
                CONCERTS_DETAILS: 'pages/concerts-details',
                LANDING_PROMO_PREVIEW: 'pages/landing-promo-preview',
                LABEL: 'pages/label',
                GENRE: 'pages/genre',
                CHART: 'pages/chart',
            };
        },
        49259: (e, t, i) => {
            'use strict';
            i.d(t, { W: () => y, s: () => v });
            var r = i(32290),
                n = i(96103),
                s = i(21916),
                a = i(55178),
                l = i(85472),
                o = i(25090),
                c = i(96218),
                d = i(5245),
                u = i(57594),
                m = i(31726);
            (0, n.eO)(!1);
            let p = (0, a.createContext)(null),
                _ = (e) => {
                    let { children: t, store: i, storeKey: n } = e,
                        s = (0, a.useMemo)(() => ({ store: i, storeKey: n }), [i, n]);
                    return (0, r.jsx)(p.Provider, { value: s, children: t });
                },
                g = (e) => {
                    let { nonce: t, patchKey: i, patchesRef: n } = e;
                    return (
                        (0, s.useServerInsertedHTML)(() => {
                            let e = n.current;
                            return ((n.current = []), 0 === e.length)
                                ? null
                                : (0, r.jsx)('script', {
                                      dangerouslySetInnerHTML: {
                                          __html: ((e, t) =>
                                              "\n        window.__PAGE_STATE_PATCHES__ = window.__PAGE_STATE_PATCHES__ || {};\n        window.__PAGE_STATE_PATCHES__['"
                                                  .concat(e, "'] =\n            window.__PAGE_STATE_PATCHES__['")
                                                  .concat(e, "'] || [];\n        window.__PAGE_STATE_PATCHES__['")
                                                  .concat(e, "'].push(")
                                                  .concat((0, l.stringifyJSONSafely)(t), ");\n        window.dispatchEvent(new Event('")
                                                  .concat(c.O, "'));\n    "))(i, e),
                                      },
                                      nonce: null != t ? t : void 0,
                                  });
                        }),
                        null
                    );
                },
                y = (e) => {
                    let { createStore: t, patchKey: i } = e,
                        n = () => {
                            var e, t;
                            let r = null != (t = null == (e = window.__PAGE_STATE_PATCHES__) ? void 0 : e[i]) ? t : [];
                            return (window.__PAGE_STATE_PATCHES__ && delete window.__PAGE_STATE_PATCHES__[i], r);
                        };
                    return {
                        pageStoreProvider: (e) => {
                            let { children: s, nonce: a } = e,
                                l = (0, m.Y)(),
                                o = (0, u.g)(),
                                { store: p, patchesRef: y } = (0, d.m)({
                                    createStore: () => t({ ...l, rootStore: o }),
                                    getPendingPatchBatches: n,
                                    patchesUpdatedEventName: c.O,
                                });
                            return (0, r.jsxs)(r.Fragment, {
                                children: [(0, r.jsx)(g, { nonce: a, patchKey: i, patchesRef: y }), (0, r.jsx)(_, { store: p, storeKey: i, children: s })],
                            });
                        },
                    };
                };
            function v(e) {
                let { throwOnAbsence: t = !0 } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    i = (0, a.useContext)(p);
                if (!i || i.storeKey !== e) {
                    var r;
                    if (!t) return null;
                    throw new o.t('Page store context is missing or has unexpected key', {
                        code: 'E_CONTEXT_PAGE_STORE_NULL',
                        data: { actualStoreKey: null != (r = null == i ? void 0 : i.storeKey) ? r : 'null', expectedStoreKey: e },
                    });
                }
                return i.store;
            }
        },
        52199: (e, t, i) => {
            'use strict';
            i.d(t, { r: () => r });
            let r = (e, t, i) => e.replace(i, t);
        },
        55985: (e, t, i) => {
            'use strict';
            i.d(t, { p: () => n });
            var r = i(60754);
            let n = (e) => (0, r.wg)({ uri: e.uri, color: e.color });
        },
        63038: (e, t, i) => {
            'use strict';
            i.d(t, { B: () => r });
            let r = '{tld}';
        },
        63211: (e, t, i) => {
            Promise.resolve().then(i.bind(i, 23491));
        },
        64170: (e, t, i) => {
            'use strict';
            i.d(t, { SomethingWentWrong: () => C });
            var r = i(32290),
                n = i(63618),
                s = i(96103),
                a = i(55178),
                l = i(60900),
                o = i(39407),
                c = i(63423),
                d = i(82586),
                u = i(71926),
                m = i(17811),
                p = i(99923),
                _ = i(90153),
                g = i(74416),
                y = i(62376),
                v = i(37240),
                h = i(83920),
                T = i(20472),
                A = i(12894),
                b = i(30310),
                I = i.n(b);
            let C = (0, s.PA)((e) => {
                let { className: t, withBackwardControl: i = !0 } = e,
                    { formatMessage: s } = (0, l.A)(),
                    b = s({ id: 'error-messages.something-went-wrong' });
                !(function (e) {
                    let t = (0, g.st)(),
                        { hash: i } = (0, g.gf)(),
                        { pageId: r } = (0, v.$)(),
                        n = (0, y.U)();
                    (0, a.useEffect)(() => {
                        if (!t || !i || !r) return;
                        let s = (0, m.F)({
                            params: {
                                entityType: p.EntityTypes.Error,
                                entityId: p.EntityTypes.SomethingWrong,
                                errorMessage: e,
                                hash: i,
                                pageId: r,
                                pageStyle: p.PageStyles.Fullscreen,
                                pagePlacement: p.PagePlacements.Fullscreen,
                                mainObjectType: p.DomainObjectType.NonApplicable,
                                mainObjectId: p.DomainObjectType.NonApplicable,
                            },
                            logger: n,
                            context: 'useSendEventOnSomethingWentWrongShowed',
                        });
                        s && (0, _.z5)(t.evgenInstance, s);
                    }, [t, e, i, r, n]);
                })(b);
                let { sendRefreshEvent: C } = (function () {
                        let e = (0, g.st)(),
                            { hash: t } = (0, g.gf)(),
                            { pageId: i } = (0, v.$)(),
                            r = (0, y.U)();
                        return {
                            sendRefreshEvent: (0, a.useCallback)(() => {
                                if (!e || !t || !i) return;
                                let n = (0, m.F)({
                                    params: {
                                        actionType: p.ActionType.Refresh,
                                        userInteractionType: p.UserInteractionType.Tap,
                                        entityType: p.EntityTypes.Error,
                                        entityId: p.EntityTypes.SomethingWrong,
                                        hash: t,
                                        pageId: i,
                                        pageStyle: p.PageStyles.Fullscreen,
                                        pagePlacement: p.PagePlacements.Fullscreen,
                                        mainObjectType: p.DomainObjectType.NonApplicable,
                                        mainObjectId: p.DomainObjectType.NonApplicable,
                                    },
                                    logger: r,
                                    context: 'useSendEventOnSomethingWentWrongRefreshed',
                                });
                                n && (0, _.bv)(e.evgenInstance, n);
                            }, [e, t, i, r]),
                        };
                    })(),
                    f = (0, a.useCallback)(() => {
                        (C(), (window.location.href = T.Z.main.href));
                    }, [C]),
                    { contentRef: x } = (0, h.g)();
                return (0, r.jsxs)('div', {
                    className: (0, n.$)(I().root, t),
                    children: [
                        i &&
                            (0, r.jsx)(A.L, { withBackwardFallback: '/', className: (0, n.$)(I().navigation, { [I().navigation_desktop]: !x }), withForwardControl: !1 }),
                        (0, r.jsxs)('div', {
                            className: (0, n.$)(I().content, { [I().content_shrink]: !i }),
                            children: [
                                (0, r.jsx)(d.I, { className: I().icon, variant: 'attention', size: 'xxl' }),
                                (0, r.jsx)(u.DZ, { className: (0, n.$)(I().title, I().important), variant: 'h3', size: 'xs', children: b }),
                                (0, r.jsxs)(u.HL, {
                                    className: (0, n.$)(I().text, I().important),
                                    variant: 'span',
                                    type: 'text',
                                    size: 'l',
                                    weight: 'normal',
                                    children: [!1, (0, r.jsx)(o.A, { id: 'page-error.try-to-restart-app' })],
                                }),
                                (0, r.jsx)(c.$, {
                                    onClick: f,
                                    className: I().button,
                                    role: 'link',
                                    color: 'secondary',
                                    size: 'l',
                                    radius: 'xxxl',
                                    children: (0, r.jsxs)(u.HL, {
                                        type: 'controls',
                                        variant: 'span',
                                        size: 'm',
                                        children: [!1, (0, r.jsx)(o.A, { id: 'page-error.restart-app-button' })],
                                    }),
                                }),
                            ],
                        }),
                    ],
                });
            });
        },
        70390: (e, t, i) => {
            'use strict';
            i.d(t, { A: () => _ });
            var r = i(32290),
                n = i(92708),
                s = i(55178),
                a = i(60900),
                l = i(45477),
                o = i(75582),
                c = i(57594),
                d = i(90357),
                u = i(97647),
                m = i(8097);
            let p = (e) => {
                    let { artist: t, closeToast: i } = e;
                    return (0, r.jsx)(m.k, {
                        closeToast: i,
                        entityVariant: u.c.ARTIST,
                        coverUri: t.coverUri,
                        entityUrl: t.url,
                        entityTitle: t.name,
                        isPinned: t.isPinned,
                        radius: 'round',
                    });
                },
                _ = (e) => {
                    let { user: t } = (0, c.g)(),
                        { notify: i } = (0, o.l)(),
                        { formatMessage: u } = (0, a.A)(),
                        [m, _] = (0, s.useState)(!1);
                    return (0, s.useCallback)(async () => {
                        if (!e) return;
                        if (!t.isAuthorized)
                            return void i((0, r.jsx)(d.h, { error: u({ id: 'authorization-messages.need-to-authorizate' }) }), { containerId: l.u.ERROR });
                        if (m) return;
                        let s = { ...(0, n.HO)(e), isPinned: !e.isPinned };
                        _(!0);
                        let a = await e.togglePin();
                        (_(!1),
                            a
                                ? i((0, r.jsx)(p, { artist: s }), { containerId: l.u.INFO })
                                : i((0, r.jsx)(d.h, { error: u({ id: 'error-messages.error-during-action' }) }), { containerId: l.u.ERROR }));
                    }, [e, t.isAuthorized, m, u, i]);
                };
        },
        72428: (e, t, i) => {
            'use strict';
            i.d(t, { p: () => a });
            var r = i(60754),
                n = i(69757),
                s = i(84060);
            let a = (e) => {
                let t = e.artists.map((e) => (0, s.d)(e));
                return (0, r.wg)({ ...(0, n.e)(e), artists: t });
            };
        },
        73141: (e, t, i) => {
            'use strict';
            i.d(t, { K: () => g });
            var r = i(32290),
                n = i(92708),
                s = i(55178),
                a = i(60900),
                l = i(63380),
                o = i(45477),
                c = i(75582),
                d = i(57594),
                u = i(90357),
                m = i(97647),
                p = i(97755);
            let _ = (e) => {
                    let { playlist: t, closeToast: i } = e;
                    return (0, r.jsx)(p.O, {
                        entityVariant: m.c.PLAYLIST,
                        entityUrl: t.url,
                        collectionUrl: '/collection',
                        entityTitle: t.title,
                        isLiked: t.isLiked,
                        closeToast: i,
                        coverUri: t.coverUri,
                    });
                },
                g = (e) => {
                    let { user: t } = (0, d.g)(),
                        { notify: i } = (0, c.l)(),
                        [m, p] = (0, s.useState)(!1),
                        { formatMessage: g } = (0, a.A)();
                    return (0, s.useCallback)(async () => {
                        if (!t.isAuthorized)
                            return void i((0, r.jsx)(u.h, { error: g({ id: 'authorization-messages.need-to-authorizate' }) }), { containerId: o.u.ERROR });
                        if (m) return;
                        let s = { ...(0, n.HO)(e), url: e.url, isLiked: !e.isLiked };
                        p(!0);
                        let a = await e.toggleLike();
                        (p(!1),
                            a === l.f.OK
                                ? i((0, r.jsx)(_, { playlist: s }), { containerId: o.u.INFO })
                                : i((0, r.jsx)(u.h, { error: g({ id: 'error-messages.error-during-action' }) }), { containerId: o.u.ERROR }));
                    }, [t.isAuthorized, m, e, g, i]);
                };
        },
        73192: (e, t, i) => {
            'use strict';
            i.d(t, { A: () => _ });
            var r = i(32290),
                n = i(92708),
                s = i(55178),
                a = i(60900),
                l = i(45477),
                o = i(75582),
                c = i(57594),
                d = i(90357),
                u = i(97647),
                m = i(8097);
            let p = (e) => {
                    let { playlist: t, closeToast: i } = e;
                    return (0, r.jsx)(m.k, {
                        closeToast: i,
                        entityVariant: u.c.PLAYLIST,
                        entityUrl: t.url,
                        coverUri: t.coverUri,
                        entityTitle: t.title,
                        isPinned: t.isPinned,
                        radius: 's',
                    });
                },
                _ = (e) => {
                    let { user: t } = (0, c.g)(),
                        { notify: i } = (0, o.l)(),
                        { formatMessage: u } = (0, a.A)(),
                        [m, _] = (0, s.useState)(!1);
                    return (0, s.useCallback)(async () => {
                        if (!t.isAuthorized)
                            return void i((0, r.jsx)(d.h, { error: u({ id: 'authorization-messages.need-to-authorizate' }) }), { containerId: l.u.ERROR });
                        if (m) return;
                        let s = { ...(0, n.HO)(e), url: e.url, isPinned: !e.isPinned };
                        _(!0);
                        let a = await e.togglePin();
                        (_(!1),
                            a
                                ? i((0, r.jsx)(p, { playlist: s }), { containerId: l.u.INFO })
                                : i((0, r.jsx)(d.h, { error: u({ id: 'error-messages.error-during-action' }) }), { containerId: l.u.ERROR }));
                    }, [t.isAuthorized, m, e, i, u]);
                };
        },
        74885: (e, t, i) => {
            'use strict';
            i.d(t, { $: () => y });
            var r = i(60754),
                n = i(87953),
                s = i(2047),
                a = i(90404),
                l = i(63380),
                o = i(15567),
                c = i(58008),
                d = i(68243),
                u = i(45346),
                m = i(35597),
                p = i(20168),
                _ = i(1045),
                g = i(44265);
            let y = r.gK
                .compose(
                    r.gK.model({
                        uuid: r.gK.string,
                        isAvailable: r.gK.boolean,
                        revision: r.gK.maybe(r.gK.number),
                        uid: r.gK.number,
                        kind: r.gK.number,
                        title: r.gK.maybe(r.gK.string),
                        coverUri: r.gK.maybe(r.gK.string),
                        tracksCount: r.gK.maybe(r.gK.number),
                        averageColor: r.gK.maybe(r.gK.string),
                        generatedPlaylistType: r.gK.maybe(r.gK.string),
                        personalColor: r.gK.maybeNull(r.gK.number),
                        visibility: r.gK.maybe(r.gK.string),
                        trailer: r.gK.maybe(u.a),
                    }),
                    m.t,
                )
                .views((e) => ({
                    get key() {
                        return ''.concat(e.uuid, '_').concat(e.uid, '_').concat(e.kind);
                    },
                    get url() {
                        let { href: t } = (0, d.u)('/playlists/:playlistUuid', { params: { playlistUuid: e.uuid } });
                        return t;
                    },
                    get isLikesCountHidden() {
                        return e.kind === g.j.LIKE || e.kind === g.j.CHART || e.generatedPlaylistType;
                    },
                    get isFavouritePlaylist() {
                        return e.kind === g.j.LIKE;
                    },
                    get isPublic() {
                        return e.visibility === s.L.PUBLIC;
                    },
                    get isLiked() {
                        if (!(0, r._n)(e)) return !1;
                        let { library: t } = (0, o.M)(e);
                        return t.isPlaylistLiked(''.concat(e.uid, ':').concat(e.kind));
                    },
                    get pinId() {
                        return ''.concat(a._.PLAYLIST_ITEM).concat(e.uid, '_').concat(e.kind);
                    },
                    get id() {
                        return ''.concat(e.uid, ':').concat(e.kind);
                    },
                    get isPinned() {
                        if (!(0, r._n)(e)) return !1;
                        let { pinsCollection: t } = (0, o.M)(e);
                        return t.isPinned(this.pinId);
                    },
                    get isOwnPlaylist() {
                        let { user: t } = (0, o.M)(e);
                        return !!(t.isAuthorized && e.uid && t.account.data.uid && e.uid === t.account.data.uid);
                    },
                    get canUserChange() {
                        if (!(0, r._n)(e)) return !1;
                        return this.isOwnPlaylist && !this.isFavouritePlaylist;
                    },
                    get isOwnFavouritePlaylist() {
                        if (!(0, r._n)(e)) return !1;
                        return this.isFavouritePlaylist && this.isOwnPlaylist;
                    },
                }))
                .actions((e) => ({
                    toggleLike: (0, r.L3)(function* () {
                        if (!(0, r._n)(e)) return;
                        let { library: t, user: i } = (0, o.M)(e);
                        if (i.isAuthorized) {
                            let n = yield t.togglePlaylistLike({ userId: i.account.data.uid, entityId: e.id, ownerId: e.uid, kindId: e.kind });
                            return ((0, r._n)(e) && n === l.f.OK && (e.isLiked ? e.likePending() : e.unlikePending()), n);
                        }
                    }),
                    togglePin: (0, r.L3)(function* () {
                        if (!(0, r._n)(e)) return;
                        let { pinsCollection: t, user: i } = (0, o.M)(e);
                        if (i.isAuthorized) return yield t.togglePlaylistPin({ uid: e.uid, kind: e.kind }, e.pinId);
                    }),
                    changePlaylist: (0, r.L3)(function* (t) {
                        if (!(0, r._n)(e)) return p.Y.ERROR;
                        let { usersResource: i, modelActionsLogger: s } = (0, r._$)(e);
                        try {
                            var a, l;
                            let r = yield i.changePlaylistRelative({ userId: e.uid, diff: t, revision: null != (a = e.revision) ? a : 0, playlistKind: e.kind });
                            return ((e.revision = r.revision), (e.isAvailable = null == (l = r.available) || l), p.Y.OK);
                        } catch (e) {
                            if ((s.error(e), e && 'object' == typeof e && 'statusCode' in e && e.statusCode === n.X1.PRECONDITION_FAILED)) return p.Y.RELOAD;
                            return p.Y.ERROR;
                        }
                    }),
                    changeTitle: (0, r.L3)(function* (t) {
                        if (!(0, r._n)(e)) return c.F.ERROR;
                        if (e.title === t) return c.F.OK;
                        let { usersResource: i, modelActionsLogger: n } = (0, r._$)(e);
                        if (e.canUserChange) {
                            if (t.length < 1 || t.length > _.k) return c.F.ERROR;
                            let r = e.title;
                            e.title = t;
                            try {
                                let n = yield i.changePlaylistTitle({ title: t, userId: e.uid, playlistKind: e.kind });
                                if (!(null == n ? void 0 : n.title)) return ((e.title = r), c.F.ERROR);
                                return ((e.title = n.title), c.F.OK);
                            } catch (t) {
                                ((e.title = r), n.error(t));
                            }
                        }
                        return c.F.ERROR;
                    }),
                    deletePlaylist: (0, r.L3)(function* () {
                        if (!(0, r._n)(e) || !e.canUserChange) return c.F.ERROR;
                        let { pinsCollection: t } = (0, o.M)(e),
                            { usersResource: i, modelActionsLogger: n } = (0, r._$)(e);
                        try {
                            return (yield i.deletePlaylist({ userId: e.uid, playlistKind: e.kind }), t.isPinned(e.pinId) && t.deletePin(e.pinId), c.F.OK);
                        } catch (e) {
                            n.error(e);
                        }
                        return c.F.ERROR;
                    }),
                    toggleVisibility: (0, r.L3)(function* (t) {
                        if (!(0, r._n)(e) || (!e.canUserChange && !e.isOwnFavouritePlaylist)) return c.F.ERROR;
                        let { usersResource: i, modelActionsLogger: n } = (0, r._$)(e),
                            { user: a } = (0, o.M)(e),
                            l = e.visibility,
                            d = e.isPublic ? s.L.PRIVATE : s.L.PUBLIC;
                        t && (d = t);
                        try {
                            return (
                                (e.visibility = d),
                                e.isOwnFavouritePlaylist
                                    ? yield a.setSettings({ userMusicVisibility: d })
                                    : yield i.togglePlaylistVisibility({ visibility: d, userId: e.uid, playlistKind: e.kind }),
                                c.F.OK
                            );
                        } catch (e) {
                            n.error(e);
                        }
                        return ((e.visibility = l), c.F.ERROR);
                    }),
                    getKey: (t) => ''.concat(t, '_').concat(e.id),
                }));
        },
        78061: (e, t, i) => {
            'use strict';
            i.d(t, { Jt: () => s, TF: () => l, hZ: () => a });
            var r = function () {
                return (r =
                    Object.assign ||
                    function (e) {
                        for (var t, i = 1, r = arguments.length; i < r; i++)
                            for (var n in (t = arguments[i])) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                        return e;
                    }).apply(this, arguments);
            };
            function n(e, t) {
                if (!t) return '';
                var i = '; ' + e;
                return !0 === t ? i : i + '=' + t;
            }
            function s(e) {
                return (function (e) {
                    for (var t = {}, i = e ? e.split('; ') : [], r = 0; r < i.length; r++) {
                        var n = i[r].split('='),
                            s = n.slice(1).join('=');
                        '"' === s[0] && (s = s.slice(1, -1));
                        try {
                            t[decodeURIComponent(n[0])] = s.replace(/(%[\dA-F]{2})+/gi, decodeURIComponent);
                        } catch (e) {}
                    }
                    return t;
                })(document.cookie)[e];
            }
            function a(e, t, i) {
                var s;
                document.cookie =
                    ((s = r({ path: '/' }, i)),
                    encodeURIComponent(e)
                        .replace(/%(2[346B]|5E|60|7C)/g, decodeURIComponent)
                        .replace(/\(/g, '%28')
                        .replace(/\)/g, '%29') +
                        '=' +
                        encodeURIComponent(t).replace(/%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g, decodeURIComponent) +
                        (function (e) {
                            if ('number' == typeof e.expires) {
                                var t = new Date();
                                (t.setMilliseconds(t.getMilliseconds() + 864e5 * e.expires), (e.expires = t));
                            }
                            return (
                                n('Expires', e.expires ? e.expires.toUTCString() : '') +
                                n('Domain', e.domain) +
                                n('Path', e.path) +
                                n('Secure', e.secure) +
                                n('SameSite', e.sameSite)
                            );
                        })(s));
            }
            function l(e, t) {
                a(e, '', r(r({}, t), { expires: -1 }));
            }
        },
        79043: (e) => {
            e.exports = { root: 'PostPlaylists_root__3tea0', content: 'PostPlaylists_content__2fXI5' };
        },
        80176: (e, t, i) => {
            'use strict';
            i.d(t, { t: () => r });
            class r extends Error {
                name = 'BaseException';
                message;
                code;
                data;
                stack;
                constructor(e, t = {}) {
                    let { code: i = 'E_INTERNAL', data: n = {}, ...s } = t,
                        a = e || 'Internal error';
                    (super(a, s), (this.message = a), (this.code = i), (this.data = n), (this.stack = Error(a).stack), Object.setPrototypeOf(this, r.prototype));
                }
            }
        },
        80229: (e, t, i) => {
            'use strict';
            i.d(t, { AS: () => m, Yw: () => r, JU: () => n, DQ: () => g, Ve: () => y });
            var r,
                n,
                s = i(98411),
                a = (function () {
                    function e(e) {
                        ((this.observableValue = (0, s.vP)(e)), (this.prevValueByListener = new Map()));
                    }
                    return (
                        Object.defineProperty(e.prototype, 'value', {
                            get: function () {
                                return this.observableValue.value;
                            },
                            set: function (e) {
                                this.observableValue.value = e;
                            },
                            enumerable: !1,
                            configurable: !0,
                        }),
                        (e.prototype.onChange = function (e, t) {
                            var i = this;
                            void 0 === t && (t = { skipFirstChange: !1 });
                            var r = !0;
                            return (
                                this.prevValueByListener.has(e) || this.prevValueByListener.set(e, void 0),
                                this.observableValue.subscribe(function (n) {
                                    if (n !== i.prevValueByListener.get(e)) {
                                        if (t.skipFirstChange && r) {
                                            r = !1;
                                            return;
                                        }
                                        (i.prevValueByListener.set(e, n), e(n));
                                    }
                                })
                            );
                        }),
                        e
                    );
                })();
            !(function () {
                function e(e) {
                    ((this.observableValue = (0, s.EW)(e)), (this.prevValueByListener = new Map()));
                }
                (Object.defineProperty(e.prototype, 'value', {
                    get: function () {
                        return this.observableValue.value;
                    },
                    enumerable: !1,
                    configurable: !0,
                }),
                    (e.prototype.onChange = function (e, t) {
                        var i = this;
                        void 0 === t && (t = { skipFirstChange: !1 });
                        var r = !0;
                        return (
                            this.prevValueByListener.has(e) || this.prevValueByListener.set(e, void 0),
                            this.observableValue.subscribe(function (n) {
                                if (n !== i.prevValueByListener.get(e)) {
                                    if (t.skipFirstChange && r) {
                                        r = !1;
                                        return;
                                    }
                                    (i.prevValueByListener.set(e, n), e(n));
                                }
                            })
                        );
                    }));
            })();
            var l = i(80176);
            class o extends l.t {
                name = 'DisclaimerDictionaryLoadError';
                constructor(e) {
                    (super('Failed to load disclaimer dictionary', { code: 'E_DISCLAIMER_DICTIONARY_LOAD', cause: e, data: { valueType: typeof e } }),
                        Object.setPrototypeOf(this, o.prototype));
                }
            }
            class c extends l.t {
                name = 'DisclaimerNotFoundError';
                disclaimerId;
                retryAttempted;
                constructor(e, t) {
                    (super(`Disclaimer with id "${e}" not found${t ? ' after retry' : ''}`, {
                        code: 'E_DISCLAIMER_NOT_FOUND',
                        data: { disclaimerId: e, retryAttempted: t },
                    }),
                        (this.disclaimerId = e),
                        (this.retryAttempted = t),
                        Object.setPrototypeOf(this, c.prototype));
                }
            }
            !(function (e) {
                ((e.MODAL = 'modal'),
                    (e.FOREIGN_AGENT = 'foreignAgent'),
                    (e.INFORMATIONAL = 'informational'),
                    (e.AGE_18 = 'age18'),
                    (e.EXPLICIT = 'explicit'),
                    (e.DESCRIPTION_TEXT = 'descriptionText'),
                    (e.AGE_12_ICON = 'age12Icon'),
                    (e.AGE_16_ICON = 'age16Icon'),
                    (e.AGE_18_ICON = 'age18Icon'),
                    (e.EXPLICIT_ICON = 'explicitIcon'),
                    (e.EXCLAMATION_ICON = 'exclamationIcon'));
            })(r || (r = {}));
            let d = (e) => {
                    let t = [];
                    for (let i of e) {
                        let [e, r] = i.split(':');
                        e && r && t.push({ type: e, id: r });
                    }
                    return t;
                },
                u = (e, t) => d(e).filter((e) => e.type === t);
            class m {
                items;
                isLoading;
                error;
                dataSource;
                itemsObservable;
                isLoadingObservable;
                errorObservable;
                loadingPromise;
                isDestroyed;
                constructor(e) {
                    ((this.dataSource = e.dataSource),
                        (this.itemsObservable = new a(null)),
                        (this.isLoadingObservable = new a(!1)),
                        (this.errorObservable = new a(null)),
                        (this.loadingPromise = null),
                        (this.isDestroyed = !1),
                        (this.items = this.itemsObservable),
                        (this.isLoading = this.isLoadingObservable),
                        (this.error = this.errorObservable));
                }
                async load() {
                    if (this.isDestroyed) return;
                    if (this.loadingPromise) return void (await this.loadingPromise);
                    ((this.isLoadingObservable.value = !0), (this.errorObservable.value = null));
                    let e = this.dataSource
                        .loadAll()
                        .then((e) => {
                            this.isDestroyed || ((this.itemsObservable.value = e), (this.isLoadingObservable.value = !1));
                        })
                        .catch((e) => {
                            let t = e instanceof Error ? e : new o(e);
                            throw (!1 === this.isDestroyed && ((this.errorObservable.value = t), (this.isLoadingObservable.value = !1)), t);
                        })
                        .finally(() => {
                            this.loadingPromise = null;
                        });
                    ((this.loadingPromise = e), await e);
                }
                async getById(e) {
                    let t = this.findItemById(e);
                    return t || (await this.load(), this.findItemById(e));
                }
                async getByIdOrThrow(e) {
                    let t = await this.getById(e);
                    if (void 0 !== t) return t;
                    throw new c(e, !0);
                }
                async resolveByType(e, t) {
                    let i = u(e, t);
                    return (await Promise.all(i.map(async (e) => await this.getById(e.id)))).filter((e) => void 0 !== e);
                }
                async resolveAll(e) {
                    let t = d(e),
                        i = await Promise.all(
                            t.map(async (e) => {
                                let t = await this.getById(e.id);
                                return void 0 === t ? null : { disclaimerItem: t, disclaimerType: e.type };
                            }),
                        ),
                        r = {};
                    for (let e of i)
                        if (e) {
                            let t = r[e.disclaimerType] ?? [];
                            (t.push(e.disclaimerItem), (r[e.disclaimerType] = t));
                        }
                    return r;
                }
                destroy() {
                    ((this.isDestroyed = !0),
                        (this.loadingPromise = null),
                        (this.itemsObservable.value = null),
                        (this.isLoadingObservable.value = !1),
                        (this.errorObservable.value = null));
                }
                findItemById(e) {
                    let t = this.itemsObservable.value;
                    if (null !== t) return t.find((t) => t.id === e);
                }
            }
            !(function (e) {
                ((e.E = 'e'), (e.AGE_12 = '12+'), (e.AGE_16 = '16+'), (e.AGE_18 = '18+'), (e.EXCLAMATION = '!'));
            })(n || (n = {}));
            let p = new Map([
                    [r.EXPLICIT_ICON, n.E],
                    [r.AGE_18_ICON, n.AGE_18],
                    [r.AGE_16_ICON, n.AGE_16],
                    [r.AGE_12_ICON, n.AGE_12],
                    [r.EXCLAMATION_ICON, n.EXCLAMATION],
                ]),
                _ = [r.EXPLICIT_ICON, r.AGE_18_ICON, r.AGE_16_ICON, r.AGE_12_ICON, r.EXCLAMATION_ICON],
                g = (e) => {
                    let t = ((e, t) => {
                        for (let i of t) {
                            let t = u(e, i)[0];
                            if (t) return t;
                        }
                        return null;
                    })(e, _);
                    if (null === t) return null;
                    let i = p.get(t.type);
                    return void 0 !== i ? i : null;
                },
                y = (e, t) => u(e, t).length > 0;
        },
        80528: (e, t, i) => {
            'use strict';
            i.d(t, { g: () => J });
            var r = i(32290),
                n = i(96103),
                s = i(60900),
                a = i(99923),
                l = i(21732),
                o = i(71483),
                c = i(91027),
                d = i(82586),
                u = i(19740),
                m = i(92708),
                p = i(55178),
                _ = i(63380),
                g = i(45477),
                y = i(75582),
                v = i(57594),
                h = i(90357),
                T = i(86269),
                A = i(74196),
                b = i(71926),
                I = i(58534),
                C = i(11323),
                f = i(356),
                x = i.n(f);
            let P = (e) => {
                let { coverUri: t, title: i, isDisliked: n, closeToast: a } = e,
                    { formatMessage: l } = (0, s.A)(),
                    o = l(n ? { id: 'notifications-info.artist-unavailable-in-recommendations' } : { id: 'notifications-info.artist-available-in-recommendations' });
                return (0, r.jsx)(I.$, {
                    closeToast: a,
                    message: (0, r.jsxs)('div', {
                        className: x().message,
                        children: [
                            (0, r.jsx)(A.q, { children: (0, r.jsx)('p', { role: 'alert', 'aria-label': o }) }),
                            (0, r.jsx)(T.t, {
                                className: x().cover,
                                radius: 'round',
                                children: (0, r.jsx)(C.B, { className: x().image, src: t, alt: i, size: 100, fit: 'cover', withAvatarReplace: !0 }),
                            }),
                            (0, r.jsx)(b.HL, { className: x().text, variant: 'div', type: 'controls', size: 'm', 'aria-hidden': !0, children: o }),
                        ],
                    }),
                });
            };
            var k = i(5942),
                E = i(70390),
                L = i(9017),
                O = i(65477),
                N = i(71735),
                S = i(37862),
                j = i(48922),
                R = i(54391),
                K = i(72396),
                w = i(46200),
                B = i(27120),
                D = i(43564),
                M = i(95134),
                U = i(79406),
                F = i(51675),
                z = i(48027),
                W = i(89384),
                G = i(38223),
                V = i(58237),
                H = i(56367),
                Y = i(4914),
                X = i(83755),
                $ = i(25160),
                q = i(4008);
            let J = (0, n.PA)((e) => {
                var t, i, n;
                let { artist: T, onOpenChange: A, open: b, ...I } = e,
                    { shouldShowBuySubscriptionModal: C, showBuySubscriptionModal: f } = (0, w.q)(),
                    {
                        settings: { isMobile: x },
                        modals: { artistAboutModal: J },
                        trailer: Z,
                        user: Q,
                        experiments: ee,
                    } = (0, v.g)(),
                    et = (0, E.A)(T),
                    ei = (0, k.K)(T),
                    er = ((e) => {
                        let { user: t } = (0, v.g)(),
                            { notify: i } = (0, y.l)(),
                            [n, a] = (0, p.useState)(!1),
                            { formatMessage: l } = (0, s.A)();
                        return (0, c.c)(async () => {
                            if (!e) return;
                            if (!t.isAuthorized)
                                return void i((0, r.jsx)(h.h, { error: l({ id: 'authorization-messages.need-to-authorizate' }) }), { containerId: g.u.ERROR });
                            if (n) return;
                            let s = { ...(0, m.HO)(e), isDisliked: !e.isDisliked };
                            a(!0);
                            let o = await e.toggleDislike();
                            (a(!1),
                                o === _.f.OK
                                    ? i((0, r.jsx)(P, { coverUri: s.coverUri, title: s.name, isDisliked: s.isDisliked }), { containerId: g.u.INFO })
                                    : i((0, r.jsx)(h.h, { error: l({ id: 'error-messages.error-during-action' }) }), { containerId: g.u.ERROR }));
                        });
                    })(T),
                    en = (0, R.F)(),
                    es = ''.concat(S.U.ARTIST, '-').concat(null == T ? void 0 : T.id),
                    { formatMessage: ea } = (0, s.A)(),
                    { utmLink: el } = (0, K.f)({ blockId: S.U.ARTIST, contextType: o.K.Artist, contextId: null == T ? void 0 : T.id }),
                    { shareLink: eo, pathname: ec } = (0, W.b)('/artist/:artistId', { params: { artistId: null != (i = null == T ? void 0 : T.id) ? i : '' } }),
                    ed = (0, L.A)({ entityVariant: M.D.ARTIST, urlParams: { id: null == T ? void 0 : T.id } }),
                    { isPlaying: eu, togglePlay: em } = (0, D.B)({
                        seeds: null != (n = null == T ? void 0 : T.seeds) ? n : [],
                        pageIdForFrom: j._Q.RADIO,
                        blockIdForFrom: es,
                        parentContextId: null == T ? void 0 : T.id,
                    }),
                    ep = (0, N.P)(),
                    e_ = ea((null == T ? void 0 : T.isComposer) ? { id: 'artist.about-composer' } : { id: 'artist.about-artist' }),
                    eg = (0, c.c)(() => {
                        if (C && Q.isAuthorized) return void f();
                        eu || em();
                    }),
                    ey = (0, c.c)(() => {
                        if (!ep()) {
                            if (C) return void f();
                            (null == T ? void 0 : T.id) && (Z.setUtmLink(el), Z.openArtistTrailer(T.id), en(a.DomainObjectType.Artist, T.id));
                        }
                    }),
                    ev = (0, c.c)(() => {
                        J.open(null == T ? void 0 : T.id);
                    });
                (0, B.N)(b);
                let eh = { variant: F.Y.ARTIST, id: null == T ? void 0 : T.id, title: null == T ? void 0 : T.name, path: ec },
                    eT = ee.checkExperiment(U.z.WebEditorsFeatures, 'on'),
                    eA = null == T || null == (t = T.trailer) ? void 0 : t.isAvailable,
                    eb = ee.checkExperiment(U.z.WebNextArtistInfo, 'on');
                return (0, r.jsxs)(u.W1, {
                    isMobile: x,
                    offsetOptions: 10,
                    open: b,
                    onOpenChange: A,
                    ariaLabel: ea({ id: 'interface-actions.context-menu' }),
                    containerDataTestId: l.Kq.artist.ARTIST_CONTEXT_MENU,
                    ...I,
                    children: [
                        eT && (0, r.jsx)(q.WithOffline, { fallback: (0, r.jsx)(O.d, { entityVariant: M.D.ARTIST, adminUrl: ed }) }),
                        !x && (0, r.jsx)(q.WithOffline, { fallback: (0, r.jsx)(H.L, { onClick: et, isPinned: null == T ? void 0 : T.isPinned }) }),
                        (0, r.jsx)(q.WithOffline, {
                            fallback: (0, r.jsx)(V.T, {
                                onClick: ei,
                                isLiked: null == T ? void 0 : T.isLiked,
                                disabled: !Q.isAuthorized || !(null == T ? void 0 : T.isAvailable),
                            }),
                        }),
                        eA && (0, r.jsx)(q.WithOffline, { fallback: (0, r.jsx)(X.N, { onClick: ey }) }),
                        (0, r.jsx)(q.WithOffline, {
                            fallback: (0, r.jsx)($.C, { onClick: eg, disabled: !(null == T ? void 0 : T.isAvailable), variant: z.I.ARTIST, onOpenMenuChange: A }),
                        }),
                        (0, r.jsx)(Y.H, { disabled: !T, shareLink: eo, entityMeta: eh }),
                        eb &&
                            (0, r.jsx)(q.WithOffline, {
                                fallback: (0, r.jsx)(u.Dr, {
                                    onClick: ev,
                                    icon: (0, r.jsx)(d.I, { variant: 'info', size: 'xxs' }),
                                    'data-test-id': l.Kq.artist.ARTIST_CONTEXT_MENU_ABOUT_ARTIST_BUTTON,
                                    children: e_,
                                }),
                            }),
                        (0, r.jsx)(q.WithOffline, {
                            fallback: (0, r.jsx)(G.D, { onClick: er, isDisliked: null == T ? void 0 : T.isDisliked, disabled: !(null == T ? void 0 : T.isAvailable) }),
                        }),
                    ],
                });
            });
        },
        83460: (e, t, i) => {
            'use strict';
            i.d(t, { B: () => Q });
            var r = i(32290),
                n = i(63618),
                s = i(96103),
                a = i(55178),
                l = i(60900),
                o = i(99923),
                c = i(21732),
                d = i(71483),
                u = i(91027),
                m = i(6752),
                p = i(14934),
                _ = i(82586),
                g = i(86269),
                y = i(71926),
                v = i(41677),
                h = i(73141),
                T = i(73192),
                A = i(71735),
                b = i(47745),
                I = i(2969),
                C = i(54391),
                f = i(23352),
                x = i(72396),
                P = i(5537),
                k = i(32641),
                E = i(28999),
                L = i(90169),
                O = i(57594),
                N = i(61376),
                S = i(11323),
                j = i(92744),
                R = i(61258),
                K = i(10180),
                w = i(90326),
                B = i(29268),
                D = i(34925),
                M = i(13931),
                U = i(19740),
                F = i(9017),
                z = i(65477),
                W = i(46200),
                G = i(27120),
                V = i(95134),
                H = i(79406),
                Y = i(58237),
                X = i(56367),
                $ = i(83755);
            let q = (0, s.PA)((e) => {
                var t;
                let { playlist: i, onOpenChange: n, open: s, ...a } = e,
                    { shouldShowBuySubscriptionModal: d, showBuySubscriptionModal: m } = (0, W.q)(),
                    {
                        experiments: p,
                        settings: { isMobile: _ },
                        trailer: g,
                        user: y,
                    } = (0, O.g)(),
                    v = (0, h.K)(i),
                    b = (0, T.A)(i),
                    I = (0, C.F)(),
                    { formatMessage: f } = (0, l.A)(),
                    x = (0, A.P)(),
                    P = p.checkExperiment(H.z.WebEditorsFeatures, 'on'),
                    k = (0, F.A)({ entityVariant: V.D.PLAYLIST, urlParams: { id: i.uid, kind: i.kind } });
                (0, G.N)(s);
                let E = (0, u.c)(() => {
                    if (d) return void m();
                    x() || (g.openPlaylistTrailer(i.id), I(o.DomainObjectType.Playlist, i.id));
                });
                return (0, r.jsxs)(U.W1, {
                    title: i.title,
                    onOpenChange: n,
                    open: s,
                    offsetOptions: 10,
                    isMobile: _,
                    ariaLabel: f({ id: 'interface-actions.context-menu' }),
                    containerDataTestId: c.Kq.playlist.PLAYLIST_CONTEXT_MENU,
                    ...a,
                    children: [
                        P && (0, r.jsx)(z.d, { entityVariant: V.D.PLAYLIST, adminUrl: i.isFavouritePlaylist ? void 0 : k }),
                        !_ && (0, r.jsx)(X.L, { onClick: b, isPinned: i.isPinned }),
                        !i.isFavouritePlaylist && (0, r.jsx)(Y.T, { onClick: v, isLiked: i.isLiked, disabled: !y.isAuthorized }),
                        (null == (t = i.trailer) ? void 0 : t.isAvailable) && (0, r.jsx)($.N, { onClick: E, disabled: !i.isAvailable }),
                    ],
                });
            });
            var J = i(11675),
                Z = i.n(J);
            let Q = (0, s.PA)((e) => {
                let { className: t, playlist: i, children: s, contentLinesCount: U, customDescription: F, onCoverMouseDown: z } = e,
                    { ref: W, intersectionPropertyId: G } = (0, f.n)(),
                    {
                        trailer: V,
                        user: H,
                        paywall: { modal: Y },
                    } = (0, O.g)(),
                    { from: X, utmLink: $ } = (0, x.f)({ contextId: i.uuid, contextType: d.K.Playlist }),
                    { formatMessage: J } = (0, l.A)(),
                    { sendLikeSearchFeedback: Q, sendNavigateSearchFeedback: ee, sendPlaySearchFeedback: et } = (0, E.z)(),
                    [ei, er] = (0, a.useState)(!1),
                    [en, es] = (0, a.useState)(!1),
                    [ea, el] = (0, a.useState)(!1),
                    eo = (0, M.r)(i),
                    ec = (0, h.K)(i),
                    ed = (0, T.A)(i),
                    eu = (0, b.N)(),
                    em = (0, I.b)(),
                    ep = (0, k.Z)(i.url),
                    e_ = (0, C.F)(),
                    eg = (0, A.P)(),
                    ey = (0, u.c)((e) => {
                        if ((e.stopPropagation(), eg())) return void e.preventDefault();
                        (V.setUtmLink($), V.openPlaylistTrailer(i.id), e_(o.DomainObjectType.Playlist, i.id));
                    }),
                    [ev, eh] = (0, a.useState)(!1),
                    { isPlaying: eT, togglePlay: eA } = (0, L.D)({
                        playContextParams: { contextData: { type: d.K.Playlist, meta: { id: i.id, uuid: i.uuid }, from: X, utmLink: $ }, loadContextMeta: !0 },
                    }),
                    eb = (0, u.c)(() => {
                        (eu({ to: o.AppScreen.PlaylistScreen }), null == ee || ee());
                    }),
                    eI = (0, u.c)((e) => {
                        (eb(), ep(e));
                    }),
                    eC = (0, P.N)(),
                    ef = (0, u.c)(() => {
                        if (!eg()) {
                            if (eC) return void Y.open();
                            (ei || eT || (er(!0), null == et || et()), eA(), em(!eT));
                        }
                    }),
                    ex = (0, u.c)(() => {
                        (en || i.isLiked || (es(!0), null == Q || Q()), ec());
                    }),
                    eP = (0, u.c)((e) => {
                        (e.preventDefault(), e.stopPropagation());
                    }),
                    ek = (0, u.c)((e) => {
                        (el(e), eh(e));
                    }),
                    eE = (0, a.useMemo)(() => {
                        var e;
                        return F
                            ? (0, r.jsx)(y.HL, { variant: 'span', type: 'entity', size: 's', weight: 'medium', lineClamp: 2, children: F }, i.getKey('description'))
                            : (null == (e = i.artists) ? void 0 : e.length)
                              ? (0, r.jsx)(
                                    v.i,
                                    { className: Z().artists, artists: i.artists, lineClamp: 1, linkClassName: Z().artistLink, captionSize: 's' },
                                    i.getKey('description'),
                                )
                              : void 0;
                    }, [F, i]),
                    eL = (0, m.L)(() => {
                        if (!i.isFavouritePlaylist)
                            return (0, r.jsx)(
                                j.c,
                                {
                                    className: (0, n.$)(Z().likeButton, Z().control),
                                    isLiked: i.isLiked,
                                    onClick: ex,
                                    variant: 'default',
                                    size: 's',
                                    iconSize: 'xxs',
                                    disabled: !H.isAuthorized,
                                },
                                i.getKey('LikeButton'),
                            );
                    }),
                    eO = (0, a.useMemo)(() => {
                        var e;
                        if (null == i || null == (e = i.trailer) ? void 0 : e.isAvailable)
                            return (0, r.jsx)(
                                D.n,
                                {
                                    children: (0, r.jsx)(
                                        B.k,
                                        { className: (0, n.$)(Z().trailerButton, Z().control), radius: 'round', size: 's', iconSize: 'xxs', onClick: ey },
                                        i.getKey('TrailerButton'),
                                    ),
                                },
                                i.getKey('PlaylilstCardTrailerTooltip'),
                            );
                    }, [ey, i]),
                    eN = (0, a.useMemo)(
                        () =>
                            (0, r.jsx)(
                                K.O,
                                { onClick: ed, isPinned: i.isPinned, className: (0, n.$)(Z().pinButton, Z().control), withRipple: !1 },
                                i.getKey('PinButton'),
                            ),
                        [ed, i],
                    ),
                    eS = (0, a.useMemo)(
                        () =>
                            (0, r.jsx)(g.t, {
                                className: Z().cover,
                                radius: 's',
                                withShadow: !0,
                                'data-test-id': c.Kq.playlist.PLAYLIST_CARD,
                                children: (0, r.jsxs)('div', {
                                    className: Z().coverBlock,
                                    onClick: eI,
                                    onMouseDown: z,
                                    children: [
                                        (0, r.jsx)(S.B, {
                                            className: Z().image,
                                            src: i.coverUri,
                                            size: 200,
                                            fit: 'cover',
                                            alt: eo,
                                            withAvatarReplace: !0,
                                            'aria-hidden': !0,
                                        }),
                                        (0, r.jsx)(p.hg, {
                                            isVisible: ea || ev,
                                            className: Z().controls,
                                            playControl: (0, r.jsx)(
                                                w.D,
                                                {
                                                    className: (0, n.$)(Z().playButton, Z().control),
                                                    buttonVariant: 'default',
                                                    withHover: !1,
                                                    iconSize: 'xl',
                                                    variant: 'filled',
                                                    onClick: ef,
                                                    isPlaying: eT,
                                                    disabled: !i.isAvailable,
                                                },
                                                i.getKey('PlayButton'),
                                            ),
                                            likeControl: eL,
                                            menuControl: (0, r.jsx)(
                                                q,
                                                {
                                                    playlist: i,
                                                    onOpenChange: ek,
                                                    open: ea,
                                                    onClick: eP,
                                                    className: (0, n.$)(Z().menuButton, Z().control),
                                                    icon: (0, r.jsx)(_.I, { size: 'xxs', variant: 'more' }),
                                                    size: 's',
                                                    'data-test-id': c.Kq.playlist.PLAYLIST_CONTEXT_MENU_BUTTON,
                                                },
                                                i.getKey('PlaylistContextMenu'),
                                            ),
                                            pinControl: eN,
                                            trailerControl: eO,
                                        }),
                                    ],
                                }),
                            }),
                        [eI, z, i, eo, ea, ev, ef, eT, eL, ek, eP, eN, eO],
                    ),
                    ej = !!i.actualLikesCount && !i.isLikesCountHidden;
                return (0, r.jsxs)(p.MN, {
                    ref: W,
                    'aria-label': eo,
                    className: (0, n.$)(Z().root, t),
                    title: (0, r.jsx)(y.HL, {
                        variant: 'div',
                        type: 'entity',
                        size: 's',
                        weight: 'medium',
                        lineClamp: 2,
                        'data-test-id': c.Kq.playlist.PLAYLIST_TITLE,
                        children: (0, r.jsx)(R.N, { className: Z().titleLink, href: i.url, onClick: eb, children: i.title }),
                    }),
                    srTitle: (0, r.jsx)(R.N, { href: i.url, onClick: eb, children: i.title }),
                    'data-intersection-property-id': G,
                    contentLinesCount: U,
                    view: eS,
                    description: eE,
                    'data-test-id': c.Kq.playlist.PLAYLIST_ITEM,
                    children: [
                        ej &&
                            (0, r.jsx)(N.x, {
                                ariaLabel: J({ id: 'entity-names.likes-counter' }, { counter: i.actualLikesCount }),
                                likesCount: i.actualLikesCount,
                                isLiked: i.isLiked,
                                handleLikeClick: ec,
                            }),
                        s,
                    ],
                });
            });
        },
        90404: (e, t, i) => {
            'use strict';
            var r;
            (i.d(t, { _: () => r }),
                (function (e) {
                    ((e.ALBUM_ITEM = 'album_item'),
                        (e.ARTIST_ITEM = 'artist_item'),
                        (e.PLAYLIST_ITEM = 'playlist_item'),
                        (e.TRACK_ITEM = 'track_item'),
                        (e.LIKED_PLAYLIST_ITEM = 'liked_playlist_item'),
                        (e.PERSONAL_PLAYLIST_ITEM = 'personal_playlist_item'),
                        (e.WAVE_ITEM = 'wave_item'),
                        (e.WAVE_AGENT_ITEM = 'wave_agent_item'),
                        (e.MIX = 'mix'),
                        (e.MIX_CARD_ITEM = 'mix_card_item'),
                        (e.LIKED_ALBUM_ITEM = 'liked_album_item'),
                        (e.PRESAVED_ALBUM_ITEM = 'presaved_album_item'),
                        (e.CHART_ALBUM_ITEM = 'chart_album_item'),
                        (e.NON_MUSIC_ALBUM_ITEM = 'non_music_album_item'),
                        (e.MENU_ITEM = 'menu_item'),
                        (e.DONATION_ITEM = 'donation_item'),
                        (e.CLIP = 'clip'),
                        (e.CLIP_ITEM = 'clip_item'),
                        (e.CONCERT_ITEM = 'concert_item'),
                        (e.QUERY_TO_VIBE_ITEM = 'q2v_item'));
                })(r || (r = {})));
        },
        91853: (e, t, i) => {
            'use strict';
            i.d(t, { S: () => n });
            var r = i(19383);
            let n = (e) => {
                let { artist: t, callback: i, shouldHistoryBack: n } = e;
                return (0, r.l)({ entity: t, callback: i, modalBehavior: void 0 === n ? void 0 : { shouldHistoryBack: n }, preventDefaultWhenSafe: !0 });
            };
        },
        96333: (e, t, i) => {
            'use strict';
            var r;
            (i.d(t, { S: () => r }),
                (function (e) {
                    ((e.TRACK = 'track'),
                        (e.MUSIC = 'music'),
                        (e.NOISE = 'noise'),
                        (e.PODCAST = 'podcast-episode'),
                        (e.COMMENT = 'comment'),
                        (e.ARTICLE = 'article'),
                        (e.ASMR = 'asmr'),
                        (e.RADIO = 'radio'),
                        (e.SHOW = 'show'),
                        (e.LECTURE = 'lecture'),
                        (e.FAIRY_TALE = 'fairy-tale'),
                        (e.AUDIOBOOK = 'audiobook'),
                        (e.POETRY = 'poetry'));
                })(r || (r = {})));
        },
        98503: (e) => {
            e.exports = { root: 'PostArtists_root__Zxmjq', content: 'PostArtists_content__JzGOH' };
        },
    },
    (e) => {
        (e.O(
            0,
            [
                1010, 7412, 3608, 7441, 7231, 8461, 2147, 4517, 9763, 8168, 3964, 6706, 1311, 5472, 8378, 900, 2536, 2146, 3353, 2474, 8035, 347, 2732, 1410, 8506, 6050,
                5806, 6241, 7702, 6874, 9155, 861, 4668, 9740, 1175, 4499, 8915, 8816, 2563, 1647, 4220, 9562, 7358,
            ],
            () => e((e.s = 63211)),
        ),
            (_N_E = e.O()));
    },
]);
