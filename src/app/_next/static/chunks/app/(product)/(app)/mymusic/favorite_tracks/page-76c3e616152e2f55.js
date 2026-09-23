(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [8062],
    {
        3377: (e, t, n) => {
            'use strict';
            n.d(t, { WithAuth: () => E });
            var r = n(32290),
                l = n(96103),
                o = n(21916),
                s = n(63618),
                i = n(39407),
                a = n(71926),
                c = n(94218),
                u = n(55556),
                d = n.n(u);
            let p = (0, l.PA)(() =>
                (0, r.jsxs)('div', {
                    className: d().root,
                    children: [
                        (0, r.jsx)(a.DZ, {
                            className: (0, s.$)(d().title, d().important),
                            variant: 'h3',
                            size: 'xs',
                            children: (0, r.jsx)(i.A, { id: 'authorization.enter-title' }),
                        }),
                        (0, r.jsx)(a.HL, {
                            className: (0, s.$)(d().text, d().important),
                            variant: 'span',
                            type: 'text',
                            size: 'l',
                            weight: 'normal',
                            children: (0, r.jsx)(i.A, { id: 'authorization.enter-text' }),
                        }),
                        (0, r.jsx)(c.H, { size: 'l', className: d().button }),
                    ],
                }),
            );
            var g = n(20472),
                _ = n(57594);
            let E = (0, l.PA)((e) => {
                let { children: t, withRedirectToMainPage: n } = e,
                    { user: l } = (0, _.g)();
                return l.isAuthorized ? t : (n && (0, o.redirect)(g.Z.main.href), (0, r.jsx)(p, {}));
            });
        },
        5245: (e, t, n) => {
            'use strict';
            n.d(t, { m: () => o });
            var r = n(60754),
                l = n(55178);
            let o = (e) => {
                let { createStore: t, getPendingPatchBatches: n, patchesUpdatedEventName: o } = e,
                    s = (0, l.useRef)([]),
                    [i] = (0, l.useState)(() => {
                        let e = t();
                        for (let t of n()) (0, r.X6)(e, t);
                        return e;
                    });
                return (
                    (0, l.useLayoutEffect)(() => {
                        let e = () => {
                            for (let e of n()) (0, r.X6)(i, e);
                        };
                        return (e(), window.addEventListener(o, e), () => window.removeEventListener(o, e));
                    }, [n, o, i]),
                    { store: i, patchesRef: s }
                );
            };
        },
        7748: (e, t, n) => {
            'use strict';
            (n.r(t), n.d(t, { NotFound: () => x }));
            var r = n(32290),
                l = n(63618),
                o = n(96103),
                s = n(39407),
                i = n(63423),
                a = n(82586),
                c = n(46049),
                u = n(71926),
                d = n(55178),
                p = n(17811),
                g = n(99923),
                _ = n(90153),
                E = n(74416),
                m = n(62376),
                h = n(27576),
                v = n(83920),
                f = n(20472),
                y = n(32641),
                N = n(27120),
                S = n(12894),
                T = n(57594),
                P = n(55365),
                A = n.n(P);
            let x = (0, o.PA)((e) => {
                let { className: t, title: n, description: o, iconVariant: P = 'musicLogo', iconClassName: x, iconSize: O } = e,
                    { contentRef: w, setContentScrollRef: I } = (0, v.g)(),
                    L = (0, y.Z)(f.Z.main.href);
                !(function () {
                    let e = (0, E.st)(),
                        { hash: t } = (0, E.gf)(),
                        n = (0, m.U)(),
                        r = (0, d.useRef)(void 0);
                    (0, d.useEffect)(() => {
                        if (!e || !t) return;
                        r.current = (0, h.A)();
                        let l = (0, p.F)({
                            params: {
                                hash: t,
                                pageId: g.AppScreen.PageNotFoundScreen,
                                pageStyle: g.PageStyles.Fullscreen,
                                pagePlacement: g.PagePlacements.Fullscreen,
                                mainObjectType: g.DomainObjectType.NonApplicable,
                                mainObjectId: g.DomainObjectType.NonApplicable,
                                viewUuid: r.current,
                            },
                            logger: n,
                            context: 'useSendEventOnNotFoundShowedOrHidden.open',
                        });
                        return (
                            l && (0, _.w5)(e.evgenInstance, l),
                            () => {
                                let l = (0, p.F)({
                                    params: {
                                        hash: t,
                                        pageId: g.AppScreen.PageNotFoundScreen,
                                        pageStyle: g.PageStyles.Fullscreen,
                                        pagePlacement: g.PagePlacements.Fullscreen,
                                        mainObjectType: g.DomainObjectType.NonApplicable,
                                        mainObjectId: g.DomainObjectType.NonApplicable,
                                        viewUuid: r.current,
                                    },
                                    logger: n,
                                    context: 'useSendEventOnNotFoundShowedOrHidden.close',
                                });
                                l && (0, _.XB)(e.evgenInstance, l);
                            }
                        );
                    }, [e, t, n]);
                })();
                let { handleNavigateToMain: R } = (function (e) {
                    let t = (0, E.st)(),
                        { hash: n } = (0, E.gf)(),
                        r = (0, m.U)();
                    return {
                        handleNavigateToMain: (0, d.useCallback)(() => {
                            if (!t || !n) return;
                            let l = (0, p.F)({
                                params: {
                                    hash: n,
                                    pageId: g.AppScreen.PageNotFoundScreen,
                                    pageStyle: g.PageStyles.Fullscreen,
                                    pagePlacement: g.PagePlacements.Fullscreen,
                                    mainObjectType: g.DomainObjectType.NonApplicable,
                                    mainObjectId: g.DomainObjectType.NonApplicable,
                                    from: g.AppScreen.PageNotFoundScreen,
                                    to: g.AppScreen.MainScreen,
                                    entityType: g.EntityTypes.Error,
                                    entityId: g.EntityTypes.Error,
                                },
                                logger: r,
                                context: 'useSendEventOnNotFoundNavigated',
                            });
                            (l && (0, _.Mu)(t.evgenInstance, l), e());
                        }, [t, n, r, e]),
                    };
                })(L);
                return (
                    (0, N.N)(!0),
                    !(function () {
                        let { location: e } = (0, T.g)();
                        (0, d.useEffect)(
                            () => (
                                e.setNotFound(!0),
                                () => {
                                    e.setNotFound(!1);
                                }
                            ),
                            [e],
                        );
                    })(),
                    (0, r.jsxs)(c.N, {
                        className: (0, l.$)(A().root, { [A().root_desktop]: !w }, t),
                        containerClassName: A().container,
                        ref: I,
                        children: [
                            (0, r.jsx)(S.L, { withBackwardFallback: '/', className: A().navigation, withForwardControl: !1 }),
                            (0, r.jsxs)('div', {
                                className: A().content,
                                children: [
                                    (0, r.jsx)(a.I, { className: (0, l.$)(A().icon, x), variant: P, size: O }),
                                    (0, r.jsx)(u.DZ, {
                                        className: (0, l.$)(A().title, A().important),
                                        variant: 'h3',
                                        size: 'xs',
                                        children: n || (0, r.jsx)(s.A, { id: 'page-error.page-does-not-exist' }),
                                    }),
                                    (0, r.jsx)(u.HL, {
                                        className: (0, l.$)(A().text, A().important),
                                        variant: 'span',
                                        type: 'text',
                                        size: 'l',
                                        weight: 'normal',
                                        children: o || (0, r.jsx)(s.A, { id: 'page-error.page-does-not-exist-description' }),
                                    }),
                                    (0, r.jsx)(i.$, {
                                        onClick: R,
                                        className: A().button,
                                        role: 'link',
                                        color: 'secondary',
                                        size: 'l',
                                        radius: 'xxxl',
                                        children: (0, r.jsx)(u.HL, {
                                            type: 'controls',
                                            variant: 'span',
                                            size: 'm',
                                            children: (0, r.jsx)(s.A, { id: 'navigation.page-main' }),
                                        }),
                                    }),
                                ],
                            }),
                        ],
                    })
                );
            });
        },
        9634: (e, t, n) => {
            'use strict';
            n.d(t, { MainSuspenseLoader: () => i });
            var r = n(32290),
                l = n(82586),
                o = n(82542),
                s = n.n(o);
            let i = (e) => {
                let { style: t } = e,
                    n = {
                        display: 'flex',
                        position: 'fixed',
                        insetBlockStart: 0,
                        insetInlineEnd: 0,
                        insetBlockEnd: 0,
                        insetInlineStart: 0,
                        zIndex: 'var(--ym-z-index-loader)',
                        alignItems: 'center',
                        justifyContent: 'center',
                        overflow: 'hidden',
                        background: 'var(--ym-background-color-primary-enabled-basic)',
                        ...t,
                    };
                return (0, r.jsx)('div', {
                    style: n,
                    children: (0, r.jsx)(l.I, {
                        variant: 'musicLogo',
                        style: { width: '100%', maxWidth: '100px', color: 'var(--ym-logo-color-primary-variant)' },
                        className: s().icon,
                    }),
                });
            };
        },
        10733: (e, t, n) => {
            'use strict';
            n.d(t, { G: () => o });
            var r = n(91945),
                l = n(50891);
            class o extends l.m {
                constructor(e, t) {
                    (super(e, { code: 'E_HTTP_CLIENT_NON_2XX_3XX_RESPONSE', cause: t.cause }),
                        (0, r._)(this, 'name', 'HttpErrorException'),
                        (0, r._)(this, 'statusCode', void 0),
                        (this.statusCode = t.statusCode),
                        Object.setPrototypeOf(this, o.prototype));
                }
            }
        },
        12894: (e, t, n) => {
            'use strict';
            n.d(t, { L: () => E });
            var r = n(32290),
                l = n(63618),
                o = n(96103),
                s = n(55178),
                i = n(60900),
                a = n(21732),
                c = n(91027),
                u = n(63423),
                d = n(82586),
                p = n(21935),
                g = n(78842),
                _ = n.n(g);
            let E = (0, o.PA)((e) => {
                let {
                        withBackwardControl: t = !0,
                        withForwardControl: n = !0,
                        shouldFocusOnMount: o = !0,
                        className: g,
                        withBackwardFallback: E,
                        buttonSize: m = 'xxs',
                    } = e,
                    { formatMessage: h } = (0, i.A)(),
                    { canBack: v, canForward: f, moveBack: y, moveForward: N } = (0, p.J)(E),
                    S = (0, s.useRef)(null),
                    T = (0, c.c)((e) => {
                        (e.stopPropagation(), y());
                    }),
                    P = (0, c.c)((e) => {
                        (e.stopPropagation(), N());
                    });
                return (
                    (0, s.useEffect)(() => {
                        o && S.current && v && S.current.focus();
                    }, [v]),
                    (0, r.jsxs)('div', {
                        className: (0, l.$)(_().root, g),
                        'data-test-id': a.Kq.navigation.NAVIGATION_CONTROLS,
                        children: [
                            t &&
                                (0, r.jsx)(u.$, {
                                    ref: S,
                                    'aria-label': h({ id: 'navigation.go-back' }),
                                    radius: 'round',
                                    disabled: !v,
                                    size: m,
                                    icon: (0, r.jsx)(d.I, { size: 'xxs', variant: 'arrowLeft' }),
                                    onClick: T,
                                    'data-test-id': a.Kq.navigation.NAVIGATION_BACKWARD_BUTTON,
                                }),
                            n &&
                                (0, r.jsx)(u.$, {
                                    'aria-label': h({ id: 'navigation.go-forward' }),
                                    radius: 'round',
                                    disabled: !f,
                                    size: m,
                                    icon: (0, r.jsx)(d.I, { size: 'xxs', variant: 'arrowRight' }),
                                    onClick: P,
                                    'data-test-id': a.Kq.navigation.NAVIGATION_FORWARD_BUTTON,
                                }),
                        ],
                    })
                );
            });
        },
        17811: (e, t, n) => {
            'use strict';
            function r(e) {
                let { params: t, logger: n, context: r } = e,
                    l = Object.getOwnPropertyNames(t).filter((e) => void 0 === t[e]);
                return l.length > 0 ? (n.error('Evgen parameters are not met', { parameters: l.join(', '), incomingParams: t, context: r }), null) : t;
            }
            n.d(t, { F: () => r });
        },
        20472: (e, t, n) => {
            'use strict';
            n.d(t, { Z: () => l });
            var r = n(68243);
            let l = {
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
        21935: (e, t, n) => {
            'use strict';
            n.d(t, { J: () => s });
            var r = n(62060),
                l = n(55178),
                o = n(83808);
            let s = (e) => {
                let t = (0, o.W)(),
                    n = (0, l.useMemo)(
                        () =>
                            (0, r.A)(() => {
                                if (e && !t.canBack) return void t.replaceState({ href: e });
                                null == t || t.back();
                            }, 200),
                        [t, e],
                    ),
                    s = (0, l.useMemo)(
                        () =>
                            (0, r.A)(() => {
                                null == t || t.forward();
                            }, 200),
                        [t],
                    );
                return { canBack: !!e || t.canBack, canForward: t.canForward, moveBack: n, moveForward: s };
            };
        },
        27032: (e, t, n) => {
            'use strict';
            n.d(t, { FavoriteTracksPageStoreProvider: () => _ });
            var r = n(49259),
                l = n(45066),
                o = n(60754),
                s = n(87953),
                i = n(96194),
                a = n(49399),
                c = n(68243),
                u = n(73715);
            let d = o.gK
                    .compose(o.gK.model('FavoriteTracksPage', { playlistUuid: o.gK.maybeNull(o.gK.string), errorStatusCode: o.gK.maybeNull(o.gK.number) }), u.X)
                    .views((e) => ({
                        get playlistUrl() {
                            if (!e.playlistUuid) return '';
                            let { href: t } = (0, c.u)('/playlists/:playlistUuid', { params: { playlistUuid: e.playlistUuid } });
                            return t;
                        },
                    }))
                    .actions((e) => ({
                        getPlaylistUrl: (0, o.L3)(function* () {
                            let { landingResource: t, modelActionsLogger: n } = (0, o._$)(e);
                            if (e.loadingState !== a.G.PENDING)
                                try {
                                    ((e.loadingState = a.G.PENDING),
                                        (e.playlistUuid = (yield t.getBlock({
                                            source: { uri: '/landing/block/collection/playlist-with-likes', countWeb: 8 },
                                            type: i.t.COLLECTION_PLAYLIST_WITH_LIKES,
                                        })).playlist.playlistUuid),
                                        e.loadingState !== a.G.IDLE && (e.loadingState = a.G.RESOLVE));
                                } catch (t) {
                                    (n.error(t),
                                        t instanceof s.GX &&
                                            (t.statusCode === s.X1.NOT_FOUND || t.statusCode === s.X1.BAD_REQUEST) &&
                                            (e.errorStatusCode = s.X1.NOT_FOUND),
                                        e.loadingState !== a.G.IDLE && (e.loadingState = a.G.REJECT));
                                }
                        }),
                        reset() {
                            ((e.loadingState = a.G.IDLE), (e.playlistUuid = null));
                        },
                    })),
                p = { loadingState: a.G.IDLE },
                { pageStoreProvider: g } = (0, r.W)({ createStore: (e) => d.create(p, e), patchKey: l.n.FAVORITE_TRACKS }),
                _ = g;
        },
        27120: (e, t, n) => {
            'use strict';
            n.d(t, { N: () => o });
            var r = n(55178),
                l = n(53022);
            let o = (e) => {
                let t = (0, r.useRef)(!1),
                    n = (0, l.z)();
                (0, r.useEffect)(() => {
                    (e && (null == n || n.disable(), (t.current = !0)), !e && t.current && (null == n || n.enable(), (t.current = !1)));
                }, [e, n]);
            };
        },
        29098: (e, t, n) => {
            'use strict';
            n.d(t, { P: () => r });
            let r = (0, n(55178).createContext)(null);
        },
        31726: (e, t, n) => {
            'use strict';
            n.d(t, { Y: () => i });
            var r = n(54280),
                l = n(70204),
                o = n(34186),
                s = n(62376);
            let i = () => {
                let e = (0, o.N)(),
                    t = e.get(l.oo),
                    n = e.get(l.uM),
                    i = e.get(l.ff),
                    a = e.get(l.V4),
                    c = e.get(l.P0),
                    u = (() => {
                        let e = (0, o.N)(),
                            t = e.get(l.$I),
                            n = e.get(l.EN),
                            r = e.get(l.N1),
                            s = e.get(l._1),
                            i = e.get(l.V3),
                            a = e.get(l.Lb),
                            c = e.get(l.wK),
                            u = e.get(l.tz),
                            d = e.get(l.$8),
                            p = e.get(l.Oo),
                            g = e.get(l.X4),
                            _ = e.get(l.O9),
                            E = e.get(l.E),
                            m = e.get(l.wH),
                            h = e.get(l.ok),
                            v = e.get(l.X8),
                            f = e.get(l.yq),
                            y = e.get(l.NN),
                            N = e.get(l.qN),
                            S = e.get(l.ro),
                            T = e.get(l.nM),
                            P = e.get(l.Ut),
                            A = e.get(l.K1),
                            x = e.get(l.eu),
                            O = e.get(l.aE),
                            w = e.get(l.ki),
                            I = e.get(l.c9),
                            L = e.get(l.en),
                            R = e.get(l.jQ),
                            b = e.get(l.cZ),
                            C = e.get(l.Zl),
                            k = e.get(l.CN),
                            j = e.get(l.P1),
                            D = e.get(l.zj),
                            F = e.get(l.re),
                            U = e.get(l.JM),
                            G = e.get(l.Lk),
                            M = e.get(l.$$),
                            H = e.get(l.sv),
                            z = e.get(l.gd),
                            K = e.get(l.Ez),
                            B = e.get(l.u2),
                            X = e.get(l.TD),
                            V = e.get(l.dh),
                            Z = e.get(l.LC),
                            $ = e.get(l.PL),
                            W = e.get(l.DT);
                        return {
                            accountResource: t,
                            afterTrackResource: n,
                            disclaimersResource: r,
                            usersResource: s,
                            landingResource: i,
                            landing3Resource: a,
                            landingBlocksResource: c,
                            albumResource: u,
                            libraryResource: d,
                            tracksResource: p,
                            topResource: g,
                            artistsResource: _,
                            slidesResource: E,
                            redAlertResource: m,
                            rotorResource: h,
                            waveResource: v,
                            searchResource: f,
                            searchPlaylistResource: y,
                            playlistResource: N,
                            playlistsResource: S,
                            pinResource: T,
                            metatagsResource: P,
                            tagResource: A,
                            feedResource: x,
                            pinsResource: O,
                            musicHistoryResource: w,
                            dynamicPagesResource: I,
                            chartResource: L,
                            clipsResource: R,
                            lyricViewsResource: b,
                            nonMusicResource: C,
                            donationResource: k,
                            loaderResource: j,
                            lumenResource: D,
                            prefixlessResource: F,
                            streamsResource: U,
                            filtersResource: G,
                            ugcResource: M,
                            collectionResource: H,
                            adsResource: z,
                            personalResource: K,
                            familyResource: B,
                            childrenLandingResource: X,
                            promoResource: V,
                            telemetryResource: Z,
                            labelsResource: $,
                            concertsResource: W,
                            wordsResource: e.get(l.dA),
                            wheelResource: e.get(l.$Y),
                        };
                    })(),
                    d = (0, s.U)(),
                    p = (0, o.N)().get(l.TK),
                    g = e.get(l.ni),
                    _ = new r.si(),
                    E = new r.fW();
                return {
                    ...u,
                    acqOffers: n,
                    disclaimerDictionary: i,
                    logger: d,
                    modelActionsLogger: p,
                    localStorage: _,
                    sessionStorage: E,
                    containerStorage: t,
                    config: a,
                    clientSafeConfig: c,
                    landingSdk: g,
                };
            };
        },
        32641: (e, t, n) => {
            'use strict';
            n.d(t, { Z: () => u });
            var r = n(21916),
                l = n(91027),
                o = n(68243),
                s = n(85472),
                i = n(90432),
                a = (function (e) {
                    return ((e.INTERNAL = 'internal'), (e.EXTERNAL = 'external'), (e.DEEPLINK = 'deeplink'), e);
                })({});
            let c = [s.UrlProtocol.HTTP, s.UrlProtocol.HTTPS, s.UrlProtocol.MAILTO, s.UrlProtocol.TEL, i.Lz],
                u = (e) => {
                    let t = (0, r.useRouter)(),
                        { href: n, target: u } = (0, o.u)(e);
                    return (0, l.c)((e) => {
                        let r = ((e, t, n) => {
                            let r;
                            try {
                                r = new URL(t);
                            } catch (e) {
                                return null;
                            }
                            let l = (0, s.resolveUrlByPolicy)(e, { allowedProtocols: new Set([...c, r.protocol]), baseUrl: r.href });
                            return l.isAllowed
                                ? l.url.protocol === i.Lz
                                    ? { type: a.DEEPLINK, href: e }
                                    : '_blank' !== n && ((e, t) => e.protocol === t.protocol && e.hostname === t.hostname && e.port === t.port)(l.url, r)
                                      ? { type: a.INTERNAL, href: e }
                                      : { type: a.EXTERNAL, href: e }
                                : null;
                        })(n, window.location.href, u);
                        if (!r) {
                            null == e || e.preventDefault();
                            return;
                        }
                        (null != e && e.metaKey) ||
                            (null != e && e.ctrlKey) ||
                            (null != e && e.shiftKey) ||
                            (r.type === a.EXTERNAL || r.type === a.DEEPLINK
                                ? ((e) => {
                                      let { target: t, rel: n } = (0, o.u)(e, { options: { isExternalLink: !0 } });
                                      window.open(e, t, n);
                                  })(r.href)
                                : t.push(r.href));
                    });
                };
        },
        33898: (e, t, n) => {
            'use strict';
            var r;
            (n.d(t, { Z: () => r }),
                (function (e) {
                    ((e.METHOD_NOT_SUPPORTED = 'E_BEACON_METHOD_NOT_SUPPORTED'),
                        (e.NOT_AVAILABLE = 'E_BEACON_NOT_AVAILABLE'),
                        (e.QUEUE_FAILED = 'E_BEACON_QUEUE_FAILED'),
                        (e.NO_RESPONSE_DATA = 'E_BEACON_NO_RESPONSE_DATA'),
                        (e.RETRY_EXHAUSTED = 'E_BEACON_RETRY_EXHAUSTED'));
                })(r || (r = {})));
        },
        42464: (e, t, n) => {
            'use strict';
            n.d(t, { N: () => r });
            let r = (e) => 'object' == typeof e && null !== e && 'request' in e && null !== e.request;
        },
        45066: (e, t, n) => {
            'use strict';
            n.d(t, { n: () => r });
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
        49259: (e, t, n) => {
            'use strict';
            n.d(t, { W: () => m, s: () => h });
            var r = n(32290),
                l = n(96103),
                o = n(21916),
                s = n(55178),
                i = n(85472),
                a = n(25090),
                c = n(96218),
                u = n(5245),
                d = n(57594),
                p = n(31726);
            (0, l.eO)(!1);
            let g = (0, s.createContext)(null),
                _ = (e) => {
                    let { children: t, store: n, storeKey: l } = e,
                        o = (0, s.useMemo)(() => ({ store: n, storeKey: l }), [n, l]);
                    return (0, r.jsx)(g.Provider, { value: o, children: t });
                },
                E = (e) => {
                    let { nonce: t, patchKey: n, patchesRef: l } = e;
                    return (
                        (0, o.useServerInsertedHTML)(() => {
                            let e = l.current;
                            return ((l.current = []), 0 === e.length)
                                ? null
                                : (0, r.jsx)('script', {
                                      dangerouslySetInnerHTML: {
                                          __html: ((e, t) =>
                                              "\n        window.__PAGE_STATE_PATCHES__ = window.__PAGE_STATE_PATCHES__ || {};\n        window.__PAGE_STATE_PATCHES__['"
                                                  .concat(e, "'] =\n            window.__PAGE_STATE_PATCHES__['")
                                                  .concat(e, "'] || [];\n        window.__PAGE_STATE_PATCHES__['")
                                                  .concat(e, "'].push(")
                                                  .concat((0, i.stringifyJSONSafely)(t), ");\n        window.dispatchEvent(new Event('")
                                                  .concat(c.O, "'));\n    "))(n, e),
                                      },
                                      nonce: null != t ? t : void 0,
                                  });
                        }),
                        null
                    );
                },
                m = (e) => {
                    let { createStore: t, patchKey: n } = e,
                        l = () => {
                            var e, t;
                            let r = null != (t = null == (e = window.__PAGE_STATE_PATCHES__) ? void 0 : e[n]) ? t : [];
                            return (window.__PAGE_STATE_PATCHES__ && delete window.__PAGE_STATE_PATCHES__[n], r);
                        };
                    return {
                        pageStoreProvider: (e) => {
                            let { children: o, nonce: s } = e,
                                i = (0, p.Y)(),
                                a = (0, d.g)(),
                                { store: g, patchesRef: m } = (0, u.m)({
                                    createStore: () => t({ ...i, rootStore: a }),
                                    getPendingPatchBatches: l,
                                    patchesUpdatedEventName: c.O,
                                });
                            return (0, r.jsxs)(r.Fragment, {
                                children: [(0, r.jsx)(E, { nonce: s, patchKey: n, patchesRef: m }), (0, r.jsx)(_, { store: g, storeKey: n, children: o })],
                            });
                        },
                    };
                };
            function h(e) {
                let { throwOnAbsence: t = !0 } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    n = (0, s.useContext)(g);
                if (!n || n.storeKey !== e) {
                    var r;
                    if (!t) return null;
                    throw new a.t('Page store context is missing or has unexpected key', {
                        code: 'E_CONTEXT_PAGE_STORE_NULL',
                        data: { actualStoreKey: null != (r = null == n ? void 0 : n.storeKey) ? r : 'null', expectedStoreKey: e },
                    });
                }
                return n.store;
            }
        },
        49399: (e, t, n) => {
            'use strict';
            n.d(t, { G: () => r });
            var r = (function (e) {
                return ((e.IDLE = 'IDLE'), (e.PENDING = 'PENDING'), (e.RESOLVE = 'RESOLVE'), (e.REJECT = 'REJECT'), e);
            })({});
        },
        50891: (e, t, n) => {
            'use strict';
            n.d(t, { m: () => o });
            var r = n(91945),
                l = n(25090);
            class o extends l.t {
                constructor(e = 'Http Client error', { code: t = 'E_HTTP_CLIENT', ...n } = {}) {
                    (super(e, { code: t, ...n }), (0, r._)(this, 'name', 'HttpException'), Object.setPrototypeOf(this, o.prototype));
                }
            }
        },
        50961: (e, t, n) => {
            'use strict';
            var r;
            (n.d(t, { X: () => r }),
                (function (e) {
                    ((e[(e.NOT_MODIFIED = 304)] = 'NOT_MODIFIED'),
                        (e[(e.NOT_FOUND = 404)] = 'NOT_FOUND'),
                        (e[(e.BAD_REQUEST = 400)] = 'BAD_REQUEST'),
                        (e[(e.REQUEST_TIMEOUT = 408)] = 'REQUEST_TIMEOUT'),
                        (e[(e.PRECONDITION_FAILED = 412)] = 'PRECONDITION_FAILED'),
                        (e[(e.TEAPOT = 418)] = 'TEAPOT'));
                })(r || (r = {})));
        },
        53022: (e, t, n) => {
            'use strict';
            n.d(t, { z: () => o });
            var r = n(55178),
                l = n(29098);
            let o = () => (0, r.useContext)(l.P);
        },
        54280: (e, t, n) => {
            'use strict';
            n.d(t, { V8: () => o, si: () => i, fW: () => p, MJ: () => d, jU: () => _, Bx: () => g });
            var r = n(78061);
            function l(e) {
                if (!e) return null;
                try {
                    return JSON.parse(e);
                } catch (e) {
                    return (console.error(e), null);
                }
            }
            class o {
                get(e) {
                    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
                    try {
                        let s = (0, r.Jt)(e);
                        if (t) {
                            var n, o;
                            return null != (o = null == (n = l(s)) ? void 0 : n.value) ? o : null;
                        }
                        return null != s ? s : null;
                    } catch (e) {
                        return null;
                    }
                }
                set(e, t, n) {
                    let l = !(arguments.length > 3) || void 0 === arguments[3] || arguments[3];
                    try {
                        let o = l ? JSON.stringify({ value: t }) : t;
                        (0, r.hZ)(e, o, n);
                    } catch (e) {
                        console.error(e);
                    }
                }
                has(e) {
                    return null !== this.get(e, !1);
                }
                remove(e) {
                    try {
                        (0, r.TF)(e);
                    } catch (e) {}
                }
            }
            function s(e) {
                try {
                    var t;
                    return null != (t = window[e]) ? t : null;
                } catch (e) {
                    return null;
                }
            }
            class i {
                get(e) {
                    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
                        n = s('localStorage');
                    if (!n) return null;
                    try {
                        var r;
                        let o = n.getItem(e) || void 0;
                        if (!t) return o;
                        let s = l(o);
                        if (!s) return null;
                        let i = null != (r = null == s ? void 0 : s.value) ? r : null;
                        if ((null == s ? void 0 : s.expires) && Date.now() > new Date(s.expires).getTime()) return (this.remove(e), null);
                        return i;
                    } catch (e) {
                        return null;
                    }
                }
                set(e, t, n) {
                    if ('number' == typeof (null == n ? void 0 : n.expires)) {
                        let e = new Date();
                        (e.setMilliseconds(e.getMilliseconds() + 864e5 * n.expires), (n.expires = e));
                    }
                    let r = s('localStorage');
                    if (r)
                        try {
                            r.setItem(e, JSON.stringify({ value: t, ...n }));
                        } catch (e) {}
                }
                has(e) {
                    return null !== this.get(e);
                }
                remove(e) {
                    let t = s('localStorage');
                    if (t)
                        try {
                            t.removeItem(e);
                        } catch (e) {}
                }
            }
            var a = n(91945),
                c = n(25090);
            class u extends c.t {
                constructor(e, t, { code: n = 'E_STORAGE', ...r } = {}) {
                    (super('There is no '.concat(t, ' storage on the ').concat(e, ' platform'), { code: n, ...r }),
                        (0, a._)(this, 'name', 'Storage Exception'),
                        Object.setPrototypeOf(this, u.prototype));
                }
            }
            class d {
                get(e) {
                    throw new u(this.platform, this.type);
                }
                set(e, t, n) {
                    throw new u(this.platform, this.type);
                }
                has(e) {
                    throw new u(this.platform, this.type);
                }
                remove(e) {
                    throw new u(this.platform, this.type);
                }
                constructor(e, t) {
                    ((0, a._)(this, 'platform', ''), (0, a._)(this, 'type', ''), (this.platform = e), (this.type = t));
                }
            }
            class p {
                get(e) {
                    let t = s('sessionStorage');
                    if (!t) return null;
                    try {
                        var n, r, o;
                        let s = null != (r = t.getItem(e)) ? r : void 0;
                        return null != (o = null == (n = l(s)) ? void 0 : n.value) ? o : null;
                    } catch (e) {
                        return null;
                    }
                }
                set(e, t) {
                    let n = s('sessionStorage');
                    if (n)
                        try {
                            n.setItem(e, JSON.stringify({ value: t }));
                        } catch (e) {}
                }
                has(e) {
                    return null !== this.get(e);
                }
                remove(e) {
                    let t = s('sessionStorage');
                    if (t)
                        try {
                            t.removeItem(e);
                        } catch (e) {}
                }
            }
            function g(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
                Array.isArray(t) &&
                    t.forEach((t) => {
                        let n = 'object' != typeof t ? t : t.name,
                            r = 'object' != typeof t ? { expires: 365 } : t.options || { expires: 365 },
                            l = e.get(n);
                        null != l && e.set(n, l, r);
                    });
            }
            function _(e) {
                let { name: t, group: n, value: r } = e;
                return r && 0 !== Object.keys(r).length
                    ? r.title
                        ? { [t]: { group: n, value: { ...r, title: n } } }
                        : { [t]: { group: n, value: { title: n, value: r } } }
                    : { [t]: { group: n, value: { title: n } } };
            }
        },
        55365: (e) => {
            e.exports = {
                root: 'NotFound_root__47ZX6',
                root_desktop: 'NotFound_root_desktop___QqSb',
                container: 'NotFound_container__h1XeE',
                navigation: 'NotFound_navigation__q8rIW',
                content: 'NotFound_content__3kry_',
                icon: 'NotFound_icon___Wa9y',
                title: 'NotFound_title__akG_o',
                important: 'NotFound_important__z1LWl',
                text: 'NotFound_text__oxDZv',
                button: 'NotFound_button__jF4uH',
            };
        },
        55556: (e) => {
            e.exports = {
                root: 'Login_root__VtFg_',
                title: 'Login_title__dqQz1',
                important: 'Login_important__Z8S9I',
                text: 'Login_text__1uju5',
                button: 'Login_button__ZYvZY',
            };
        },
        60809: (e, t, n) => {
            (Promise.resolve().then(n.bind(n, 3377)),
                Promise.resolve().then(n.bind(n, 27032)),
                Promise.resolve().then(n.bind(n, 95324)),
                Promise.resolve().then(n.bind(n, 9634)));
        },
        73715: (e, t, n) => {
            'use strict';
            n.d(t, { X: () => o });
            var r = n(60754),
                l = n(49399);
            let o = r.gK.model('LoadingState', { loadingState: r.gK.enumeration(Object.values(l.G)) }).views((e) => ({
                get isNeededToLoad() {
                    return e.loadingState === l.G.IDLE;
                },
                get isLoading() {
                    return e.loadingState === l.G.PENDING;
                },
                get isResolved() {
                    return e.loadingState === l.G.RESOLVE;
                },
                get isRejected() {
                    return e.loadingState === l.G.REJECT;
                },
            }));
        },
        74416: (e, t, n) => {
            'use strict';
            n.d(t, { vZ: () => m, st: () => o, gf: () => i });
            var r = n(55178);
            let l = (0, r.createContext)(null);
            function o() {
                return (0, r.useContext)(l);
            }
            let s = (0, r.createContext)({ hash: void 0 });
            function i() {
                return (0, r.useContext)(s);
            }
            var a = n(32290),
                c = n(27576);
            let u = (e) => {
                let { children: t } = e,
                    n = (0, r.useMemo)(() => ({ hash: (0, c.A)() }), []);
                return (0, a.jsx)(s.Provider, { value: n, children: t });
            };
            class d {
                makeParams() {
                    return {};
                }
            }
            class p {
                makeParams() {
                    return {};
                }
            }
            var g = n(91945);
            class _ {
                get evgenInstance() {
                    return this.evgen;
                }
                sendEvent(e, t) {
                    this.evgen.trackEvent(e, t);
                }
                constructor(e, t, n) {
                    ((0, g._)(this, 'evgen', void 0),
                        (this.evgen = {
                            trackEvent: (r, l) => {
                                let o = { ...l, ...t.getGlobalParams(), ...n.getPlatformParams() };
                                e.trackEvent(r, o);
                            },
                        }));
                }
            }
            let E = null,
                m = (e) => {
                    let { allowAnalyticsLogs: t, children: n, evgenUserParam: o, logger: s, metrika: i } = e,
                        c = (0, r.useMemo)(() => {
                            if (E) return E;
                            let e = (function (e, t, n) {
                                let r = (function (e) {
                                    let { callback: t, maxSendingItemsPerRequest: n, requestsSendingDelay: r } = e,
                                        l = [];
                                    return (
                                        !(function e() {
                                            (l.length > 0 && t(l.splice(0, n)), window.setTimeout(e, r));
                                        })(),
                                        {
                                            add(e) {
                                                l.push(e);
                                            },
                                        }
                                    );
                                })({
                                    callback: (t) => {
                                        e(t);
                                    },
                                    requestsSendingDelay: 1e3,
                                    maxSendingItemsPerRequest: 21,
                                });
                                return {
                                    trackEvent(e, l) {
                                        (n && t.log(e, l), r.add({ [e]: l }));
                                    },
                                };
                            })((e) => i.count(e, o), s, t);
                            return (E = new _(
                                e,
                                (function () {
                                    let e = new d();
                                    return { getGlobalParams: () => e };
                                })(),
                                (function () {
                                    let e = new p();
                                    return { getPlatformParams: () => e };
                                })(),
                            ));
                        }, [s, i]);
                    return (0, a.jsx)(l.Provider, { value: c, children: (0, a.jsx)(u, { children: n }) });
                };
        },
        78648: (e, t, n) => {
            'use strict';
            n.d(t, { C8: () => o, UC: () => s, dM: () => i, uV: () => a });
            var r = n(87953),
                l = n(42464);
            let o = (e) => {
                    if (void 0 === e || '' === e) return 'missing';
                    let t = Number(e);
                    return !Number.isFinite(t) || t < 0 ? 'invalid' : t < 86400 ? 'lt-1d' : t <= 2592e3 ? '1-30d' : 'gt-30d';
                },
                s = (e) => (e.uid ? 'authorized' : 'no-uid'),
                i = (e) => {
                    if (!(e instanceof r.m5) || !(0, l.N)(e.cause)) return 'unexpected';
                    let t = ((e) => {
                        if (!(0, l.N)(e.cause)) return;
                        let t = e.cause.response;
                        if ('object' == typeof t && null !== t) {
                            if ('statusCode' in t && 'number' == typeof t.statusCode) return t.statusCode;
                            if ('status' in t && 'number' == typeof t.status) return t.status;
                        }
                    })(e);
                    return void 0 === t ? 'transport' : 401 === t ? '401' : t >= 400 && t < 500 ? '4xx' : t >= 500 && t < 600 ? '5xx' : 'unexpected';
                },
                a = (e) => {
                    try {
                        var t;
                        null == (t = window.musicDesktop) || t.authorization.reportDiagnostic(e);
                    } catch (e) {}
                };
        },
        78842: (e) => {
            e.exports = { root: 'NavigationControls_root__V2A3_' };
        },
        82542: (e) => {
            e.exports = {
                icon: 'MainSuspenseLoader_icon__MceTD',
                'animate-pop': 'MainSuspenseLoader_animate-pop__vkpff',
                heartbeat: 'MainSuspenseLoader_heartbeat__6RDpM',
            };
        },
        83808: (e, t, n) => {
            'use strict';
            n.d(t, { Q: () => l, W: () => o });
            var r = n(55178);
            let l = (0, r.createContext)({
                pushState: () => {},
                replaceState: () => {},
                forward: () => {},
                back: () => {},
                canForward: !1,
                canBack: !1,
                state: null,
                length: 0,
            });
            function o() {
                return (0, r.useContext)(l);
            }
        },
        83920: (e, t, n) => {
            'use strict';
            n.d(t, { M: () => l, g: () => o });
            var r = n(55178);
            let l = (0, r.createContext)({
                    contentRef: null,
                    defaultLayoutRef: null,
                    contentRootRef: null,
                    contentScrollRef: null,
                    sideBannerRef: null,
                    playlistStickyFiltersRef: null,
                    playlistStaticFiltersRef: null,
                    compositePlayerBarRef: null,
                    paywallRef: null,
                    setDefaultLayoutRef: () => {},
                    setContentRef: () => {},
                    setContentRootRef: () => {},
                    setSideBannerRef: () => {},
                    setContentScrollRef: () => {},
                    setPlaylistStickyFiltersRef: () => {},
                    setPlaylistStaticFiltersRef: () => {},
                    setCompositePlayerBarRef: () => {},
                    setPaywallRef: () => {},
                }),
                o = () => (0, r.useContext)(l);
        },
        87953: (e, t, n) => {
            'use strict';
            n.d(t, { GX: () => o.G, X1: () => r.X, m5: () => l.m });
            var r = n(50961),
                l = n(50891),
                o = n(10733);
            n(33898);
        },
        90432: (e, t, n) => {
            'use strict';
            n.d(t, { Lz: () => r, ov: () => l });
            let r = ''.concat('yandexmusic', ':'),
                l = ''.concat(r, '//');
        },
        94218: (e, t, n) => {
            'use strict';
            n.d(t, { H: () => g });
            var r = n(32290),
                l = n(21916),
                o = n(39407),
                s = n(21732),
                i = n(91027),
                a = n(63423),
                c = n(71926),
                u = n(78648),
                d = n(70204),
                p = n(34186);
            let g = (e) => {
                let { size: t = 'm', variant: n = 'default', color: g = 'primary', withRipple: _ = !0, buttonText: E, isBlock: m, key: h, className: v } = e,
                    f = (0, l.useRouter)(),
                    y = (0, p.N)().get(d.QG),
                    N = (0, i.c)(() => {
                        y.authorizationUrl && ((0, u.uV)({ stage: 'attempt-start', trigger: 'user' }), f.push(y.authorizationUrl));
                    });
                return (0, r.jsx)(
                    a.$,
                    {
                        onClick: N,
                        className: v,
                        isBlock: m,
                        color: g,
                        variant: n,
                        size: t,
                        radius: 'xxxl',
                        withRipple: _,
                        'data-test-id': s.S7.UNAUTHORIZED_BUTTON,
                        children: E || (0, r.jsx)(c.HL, { variant: 'div', size: 'l', lineClamp: 1, children: (0, r.jsx)(o.A, { id: 'authorization.enter-button' }) }),
                    },
                    h,
                );
            };
        },
        95324: (e, t, n) => {
            'use strict';
            n.d(t, { FavoriteTracksPage: () => d });
            var r = n(32290),
                l = n(96103),
                o = n(55178),
                s = n(32641),
                i = n(49259),
                a = n(45066),
                c = n(7748);
            let u = (0, l.PA)(() => (0, r.jsx)(c.NotFound, {})),
                d = (0, l.PA)(() => {
                    let e = (0, i.s)(a.n.FAVORITE_TRACKS),
                        t = (0, s.Z)(e.playlistUrl);
                    if (
                        ((0, o.useEffect)(
                            () => () => {
                                e.reset();
                            },
                            [e],
                        ),
                        (0, o.useEffect)(() => {
                            e.playlistUrl && t();
                        }, [e.playlistUrl, t]),
                        e.isNeededToLoad && (0, o.use)(e.getPlaylistUrl()),
                        e.isRejected)
                    )
                        return (0, r.jsx)(u, {});
                });
        },
        96218: (e, t, n) => {
            'use strict';
            n.d(t, { O: () => l, s: () => r });
            let r = 'yMusicStatePatchesUpdated',
                l = 'yMusicPageStatePatchesUpdated';
        },
    },
    (e) => {
        (e.O(0, [7412, 1010, 1256, 6706, 1311, 5472, 8378, 900, 2536, 2146, 3353, 3199, 8506, 6050, 5806, 6241, 4220, 9562, 7358], () => e((e.s = 60809))),
            (_N_E = e.O()));
    },
]);
