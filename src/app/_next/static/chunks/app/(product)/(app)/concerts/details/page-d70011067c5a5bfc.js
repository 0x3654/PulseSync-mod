(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [2849],
    {
        2528: (e, t, r) => {
            'use strict';
            (r.r(t), r.d(t, { default: () => V }));
            var n = r(32290),
                l = r(21916),
                s = r(55178),
                i = r(49259),
                o = r(45066),
                a = r(60754),
                c = r(36885),
                u = r(55573),
                d = r(15567),
                g = r(49399),
                m = r(73715),
                _ = r(93841);
            let h = a.gK
                    .compose(a.gK.model('ConcertsDetailsPage', { concerts: a.gK.maybeNull(a.gK.array(u.a)), title: a.gK.maybeNull(a.gK.string) }), m.X, _.p)
                    .views((e) => ({
                        get isShimmerVisible() {
                            return e.isNeededToLoad || e.isLoading || e.isRejected;
                        },
                        get isShimmerActive() {
                            return e.isLoading;
                        },
                    }))
                    .actions((e) => ({
                        getData: (0, a.L3)(function* (t) {
                            let { type: r, id: n } = t,
                                { concertsResource: l, modelActionsLogger: s } = (0, a._$)(e);
                            if (!e.isLoading)
                                try {
                                    e.loadingState = g.G.PENDING;
                                    let { concerts: t } = (0, d.M)(e),
                                        s = t.concertsLocationForRequest,
                                        { items: i, title: o } = yield l.getConcertsDetails({ type: r, id: n, locations: s });
                                    ((e.concerts = (0, a.wg)(i.map((e) => (0, c.H)(e)))), (e.title = null != o ? o : null), (e.loadingState = g.G.RESOLVE));
                                } catch (t) {
                                    (s.error(t), (e.loadingState = g.G.REJECT));
                                }
                        }),
                        reset() {
                            ((e.loadingState = g.G.IDLE), (e.title = null), e.destroyItems([e.concerts]));
                        },
                    })),
                p = { loadingState: g.G.IDLE },
                { pageStoreProvider: y } = (0, i.W)({ createStore: (e) => h.create(p, e), patchKey: o.n.CONCERTS_DETAILS });
            var E = r(96103),
                f = r(60900),
                v = r(91027),
                x = r(54862),
                S = r(46049),
                N = r(71926),
                T = r(64170),
                C = r(7999),
                b = r(93954),
                I = r(34326),
                R = r(53109),
                P = r(88404),
                O = r(95481),
                A = r(83808),
                k = r(83920),
                L = r(57594),
                w = r(79406),
                M = r(97841),
                D = r(32468),
                j = r(74694),
                K = r(77028),
                G = r.n(K);
            let Y = (0, E.PA)((e) => {
                let { type: t, id: r } = e,
                    a = (0, s.useId)(),
                    c = (0, i.s)(o.n.CONCERTS_DETAILS),
                    { experiments: u } = (0, L.g)(),
                    { formatMessage: d } = (0, f.A)(),
                    { contentScrollRef: g, setContentScrollRef: m } = (0, k.g)(),
                    _ = (0, A.W)(),
                    [h, p] = (0, x.d)(),
                    y = (0, O.f)(),
                    E = (0, s.useRef)(!1),
                    K = u.checkExperiment(w.z.WebNextConcertsIdentityEventType, 'on'),
                    Y = (0, v.c)(() => {
                        var e;
                        return !c.isShimmerVisible && (null == (e = c.concerts) ? void 0 : e.length) ? c.concerts.length : 50;
                    }),
                    {
                        virtualizer: H,
                        rowResizeObserver: F,
                        columnCount: U,
                        indices: V,
                    } = (0, b.L)({
                        count: Y(),
                        rowGap: 32,
                        columnGap: 16,
                        getEstimateRowSize: () => 371,
                        minColumnCount: 2,
                        minColumnWidth: 170,
                        maxColumnWidth: 227,
                        containerRef: h,
                    }),
                    X = { '--feed-concerts-height': ''.concat(H.getTotalSize(), 'px'), '--feed-concerts-column-count': U },
                    W = (0, s.useCallback)(
                        (e) => {
                            var t;
                            let r = null == (t = c.concerts) ? void 0 : t[e];
                            return !r || c.isShimmerVisible ? (0, n.jsx)(P.L, { isActive: c.isShimmerActive, withMeta: !0 }) : (0, n.jsx)(R.Q, { concert: r });
                        },
                        [c.concerts, c.isShimmerActive, c.isShimmerVisible],
                    );
                if (
                    ((0, s.useEffect)(
                        () => () => {
                            c.reset();
                        },
                        [c],
                    ),
                    (0, s.useEffect)(() => {
                        c.isResolved && !E.current && (y(), (E.current = !0));
                    }, [c.isResolved, y]),
                    c.isNeededToLoad && (0, s.use)(c.getData({ type: t, id: r })),
                    u.checkExperiment(w.z.WebNextConcertsDetailsPage, 'on') || (0, l.notFound)(),
                    c.isRejected)
                )
                    return (0, n.jsx)(T.SomethingWentWrong, {});
                let B = K && c.title ? c.title : d({ id: 'concerts.details-title' });
                return (0, n.jsx)(C.h, {
                    scrollElement: g,
                    outerTitle: B,
                    children: (0, n.jsxs)('div', {
                        className: G().root,
                        children: [
                            (0, n.jsx)(j.Y, {
                                variant: j.V.TEXT,
                                withForwardControl: !1,
                                withBackwardControl: _.canBack,
                                children: (0, n.jsx)(N.DZ, { variant: 'h2', weight: 'bold', size: 'xl', lineClamp: 1, children: B }),
                            }),
                            (0, n.jsxs)(S.N, {
                                ref: m,
                                className: G().scrollContainer,
                                children: [
                                    (0, n.jsx)('div', {
                                        className: G().content,
                                        children: (0, n.jsx)('div', {
                                            'aria-labelledby': a,
                                            ref: p,
                                            style: X,
                                            className: G().container,
                                            children: H.getVirtualItems().map((e) =>
                                                (0, n.jsx)(
                                                    I.U,
                                                    {
                                                        className: G().row,
                                                        columnClassName: G().column,
                                                        virtualItem: e,
                                                        resizeObserver: F,
                                                        indices: V,
                                                        renderItemByIndex: W,
                                                        scrollMargin: H.options.scrollMargin,
                                                    },
                                                    e.key,
                                                ),
                                            ),
                                        }),
                                    }),
                                    (0, n.jsx)(D.A, { children: (0, n.jsx)(M.w, { className: G().footer }) }),
                                ],
                            }),
                        ],
                    }),
                });
            });
            var H = r(79856);
            let F = (e) => (0, n.jsx)(P.L, { isActive: !0, withMeta: !0 }, e),
                U = () => {
                    let e = (0, A.W)(),
                        { contentScrollRef: t, setContentScrollRef: r } = (0, k.g)(),
                        [l, s] = (0, x.d)(),
                        { formatMessage: i } = (0, f.A)(),
                        o = i({ id: 'loading-messages.entity-is-loading' }, { entityName: i({ id: 'entity-names.concert' }) }),
                        {
                            virtualizer: a,
                            rowResizeObserver: c,
                            columnCount: u,
                            indices: d,
                        } = (0, b.L)({
                            count: 50,
                            rowGap: 32,
                            columnGap: 16,
                            getEstimateRowSize: () => 371,
                            minColumnCount: 2,
                            minColumnWidth: 170,
                            maxColumnWidth: 227,
                            containerRef: l,
                        }),
                        g = { '--feed-concerts-height': ''.concat(a.getTotalSize(), 'px'), '--feed-concerts-column-count': u };
                    return (0, n.jsx)(C.h, {
                        scrollElement: t,
                        children: (0, n.jsxs)('div', {
                            className: G().root,
                            children: [
                                (0, n.jsx)(j.Y, {
                                    variant: j.V.TEXT,
                                    withForwardControl: !1,
                                    withBackwardControl: e.canBack,
                                    children: (0, n.jsx)(H.W, { className: G().shimmerTitle, radius: 'xxxl' }),
                                }),
                                (0, n.jsx)(S.N, {
                                    ref: r,
                                    className: G().scrollContainer,
                                    children: (0, n.jsx)('div', {
                                        className: G().content,
                                        children: (0, n.jsx)('div', {
                                            'aria-label': o,
                                            ref: s,
                                            style: g,
                                            className: G().container,
                                            children: a
                                                .getVirtualItems()
                                                .map((e) =>
                                                    (0, n.jsx)(
                                                        I.U,
                                                        {
                                                            className: G().row,
                                                            columnClassName: G().column,
                                                            virtualItem: e,
                                                            resizeObserver: c,
                                                            indices: d,
                                                            renderItemByIndex: F,
                                                            scrollMargin: a.options.scrollMargin,
                                                        },
                                                        e.key,
                                                    ),
                                                ),
                                        }),
                                    }),
                                }),
                            ],
                        }),
                    });
                },
                V = () => {
                    let e = (0, l.useSearchParams)(),
                        t = e.get('type'),
                        r = e.get('id');
                    return (
                        (t && r) || (0, l.notFound)(),
                        (0, n.jsx)(y, { children: (0, n.jsx)(s.Suspense, { fallback: (0, n.jsx)(U, {}), children: (0, n.jsx)(Y, { type: t, id: r }) }) })
                    );
                };
        },
        5245: (e, t, r) => {
            'use strict';
            r.d(t, { m: () => s });
            var n = r(60754),
                l = r(55178);
            let s = (e) => {
                let { createStore: t, getPendingPatchBatches: r, patchesUpdatedEventName: s } = e,
                    i = (0, l.useRef)([]),
                    [o] = (0, l.useState)(() => {
                        let e = t();
                        for (let t of r()) (0, n.X6)(e, t);
                        return e;
                    });
                return (
                    (0, l.useLayoutEffect)(() => {
                        let e = () => {
                            for (let e of r()) (0, n.X6)(o, e);
                        };
                        return (e(), window.addEventListener(s, e), () => window.removeEventListener(s, e));
                    }, [r, s, o]),
                    { store: o, patchesRef: i }
                );
            };
        },
        8626: (e, t, r) => {
            'use strict';
            r.d(t, { m: () => n });
            let n = () => ({ year: 'numeric' });
        },
        12989: (e, t, r) => {
            'use strict';
            r.d(t, { D: () => E });
            var n = r(55178),
                l = r(17811),
                s = r(92146),
                i = r(74416),
                o = r(6752),
                a = r(62376),
                c = r(1677),
                u = r(48922),
                d = r(84782),
                g = r(30915),
                m = r(18746),
                _ = r(2792),
                h = r(37240),
                p = r(51012),
                y = r(47498);
            let E = () => {
                let e = (0, a.U)(),
                    t = (0, i.st)(),
                    { hash: r } = (0, i.gf)(),
                    { pageId: E, displayReasonId: f } = (0, h.$)(),
                    { tabId: v, tabPos: x, isTabSelectedByDefault: S } = (0, y.R)(),
                    { offsetBlockPosY: N } = (0, g.u)(),
                    { blockType: T, blockId: C, blockPosX: b, blockPosY: I, mainObjectId: R, mainObjectType: P, displayReasonId: O } = (0, d.N)(),
                    { filterKey: A, filterValue: k, filterPos: L } = (0, m.G)(),
                    { objectType: w, objectsCount: M, objectId: D, objectPosX: j, objectPosY: K } = (0, _.J)(),
                    { skeleton: G } = (0, p.b)(),
                    Y = null != O ? O : f,
                    H = (0, o.L)(() => (void 0 !== N && void 0 !== I ? N + I : I));
                return (0, n.useCallback)(
                    (n, i) => {
                        if (!t || !E || !u.xK.includes(E) || !u.fD.includes(E)) return;
                        let o = c.F[E];
                        if (!o) return;
                        let a = {
                            hash: r,
                            pageId: o,
                            entityType: T,
                            entityId: C,
                            entityPosX: b,
                            entityPosY: H,
                            objectsCount: M,
                            viewUuid: i,
                            objectType: w,
                            objectId: D,
                            objectPosX: j,
                            objectPosY: K,
                        };
                        (void 0 !== A && ((a.filterKey = A), (a.filterValue = k), (a.filterPos = L)),
                            u.qG.includes(E) && ((a.tabId = v), (a.tabPos = x), (a.isTabSelectedByDefault = S)),
                            G && (a.skeletonId = G),
                            'string' == typeof R && 'string' == typeof P && ((a.mainObjectType = P), (a.mainObjectId = R)),
                            Y && (a.displayReasonId = Y));
                        let d = (0, l.F)({ params: a, logger: e, context: 'useSendEventOnBlockShowedOrHidden' });
                        d && (n ? (0, s.Pf)(t.evgenInstance, d) : (0, s.nv)(t.evgenInstance, d));
                    },
                    [t, Y, C, b, H, T, A, L, k, r, S, e, R, P, D, j, K, w, M, E, G, v, x],
                );
            };
        },
        15559: (e, t, r) => {
            'use strict';
            r.d(t, { v: () => l });
            var n = r(79406);
            let l = (e) => {
                let { checkExperiment: t, getDisclaimerContent: r, getExplicitContent: l, userRegion: s } = e;
                return 'ru' === s && t(n.z.WebNextFooterDisclaimer, 'on') ? r() : l();
            };
        },
        15567: (e, t, r) => {
            'use strict';
            r.d(t, { M: () => l });
            var n = r(60754);
            let l = (e) => {
                let t = (0, n.Zn)(e);
                if (((e) => 'object' == typeof e && null !== e && 'isRootModel' in e && !0 === e.isRootModel)(t)) return t;
                let { rootStore: r } = (0, n._$)(e);
                return r || t;
            };
        },
        19381: (e, t, r) => {
            'use strict';
            r.d(t, { h: () => o });
            var n = r(60754),
                l = r(36125),
                s = r(69538),
                i = r(82757);
            let o = (e, t) => {
                var r, o, a, c;
                let { uri: u, color: d } = e.cover || {};
                return (0, n.wg)({
                    id: e.id,
                    title: e.concertTitle,
                    city: e.city,
                    place: e.place,
                    datetime: e.datetime && (0, s.A)(e.datetime),
                    contentRating: e.contentRating,
                    dataSessionId: e.dataSessionId,
                    cover: { uri: u, color: d },
                    rank: e.rank,
                    cashbackTitle: null == (r = e.cashback) ? void 0 : r.title,
                    cashbackValuePercent: null == (o = e.cashback) ? void 0 : o.valuePercent,
                    price: (0, i.J)(t),
                    eventKind: null != (c = null == (a = e.eventInfo) ? void 0 : a.type) ? c : l.Z.UNSPECIFIED,
                });
            };
        },
        20472: (e, t, r) => {
            'use strict';
            r.d(t, { Z: () => l });
            var n = r(68243);
            let l = {
                main: (0, n.u)('/'),
                chart: (0, n.u)('/chart'),
                chartPodcasts: (0, n.u)('/chart/podcasts'),
                collection: (0, n.u)('/collection'),
                collectionAlbums: (0, n.u)('/collection/albums'),
                collectionArtists: (0, n.u)('/collection/artists'),
                collectionClips: (0, n.u)('/collection/clips'),
                collectionDislikes: (0, n.u)('/collection/dislikes'),
                collectionKids: (0, n.u)('/collection/kids'),
                collectionKidsAlbums: (0, n.u)('/collection/kids/albums'),
                collectionKidsPlaylists: (0, n.u)('/collection/kids/playlists'),
                collectionKidsTracks: (0, n.u)('/collection/kids/tracks'),
                collectionNonMusic: (0, n.u)('/collection/non-music'),
                collectionNonMusicLiked: (0, n.u)('/collection/non-music/liked'),
                collectionVibeRooms: (0, n.u)('/collection/multivibes'),
                collectionPlaylists: (0, n.u)('/collection/playlists'),
                collectionPlaylistsCreated: (0, n.u)('/collection/playlists/created'),
                collectionPlaylistsLiked: (0, n.u)('/collection/playlists/liked'),
                collectionShelf: (0, n.u)('/collection/shelf'),
                collectionShelfLiked: (0, n.u)('/collection/shelf/liked'),
                collectionShelfNewEpisodes: (0, n.u)('/collection/shelf/new-episodes'),
                collectionShelfRecentlyPlayed: (0, n.u)('/collection/shelf/recently-played'),
                concerts: (0, n.u)('/concerts'),
                kids: (0, n.u)('/kids'),
                mixes: (0, n.u)('/mixes'),
                musicHistory: (0, n.u)('/music-history'),
                muzmarket: (0, n.u)('/muzmarket'),
                mymusic: (0, n.u)('/mymusic'),
                mymusicDownloadsTracks: (0, n.u)('/mymusic/downloads/tracks'),
                multivibe: (0, n.u)('/multivibe'),
                nonMusic: (0, n.u)('/non-music'),
                pay: (0, n.u)('/pay'),
                userSlides: (0, n.u)('/slides/user'),
                search: (0, n.u)('/search'),
                searchHistory: (0, n.u)('/search/history'),
                settings: (0, n.u)('/settings'),
                video: (0, n.u)('/video'),
            };
        },
        23352: (e, t, r) => {
            'use strict';
            r.d(t, { n: () => i });
            var n = r(55178),
                l = r(12989),
                s = r(80536);
            let i = function () {
                let { callback: e, singleEvent: t, withViewUuid: r } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    i = (0, n.useRef)(null),
                    o = (0, l.D)(),
                    a = (0, n.useId)(),
                    c = (0, n.useContext)(s.B),
                    u = (0, n.useCallback)(
                        (n, l) => {
                            (e ? e(n, r ? l : void 0) : o(n, l), t && c.unobserveElement(a));
                        },
                        [e, c, a, o, t, r],
                    );
                return (
                    (0, n.useEffect)(
                        () => (
                            c.observeElement({ elementRef: i, elementId: a, callback: u }),
                            () => {
                                c.unobserveElement(a);
                            }
                        ),
                        [e, c, u, a, o],
                    ),
                    { ref: i, intersectionPropertyId: a }
                );
            };
        },
        31010: (e, t, r) => {
            'use strict';
            r.d(t, { H: () => l, P: () => s });
            var n = r(55178);
            let l = (0, n.createContext)(null),
                s = () => (0, n.useContext)(l);
        },
        31726: (e, t, r) => {
            'use strict';
            r.d(t, { Y: () => o });
            var n = r(54280),
                l = r(70204),
                s = r(34186),
                i = r(62376);
            let o = () => {
                let e = (0, s.N)(),
                    t = e.get(l.oo),
                    r = e.get(l.uM),
                    o = e.get(l.ff),
                    a = e.get(l.V4),
                    c = e.get(l.P0),
                    u = (() => {
                        let e = (0, s.N)(),
                            t = e.get(l.$I),
                            r = e.get(l.EN),
                            n = e.get(l.N1),
                            i = e.get(l._1),
                            o = e.get(l.V3),
                            a = e.get(l.Lb),
                            c = e.get(l.wK),
                            u = e.get(l.tz),
                            d = e.get(l.$8),
                            g = e.get(l.Oo),
                            m = e.get(l.X4),
                            _ = e.get(l.O9),
                            h = e.get(l.E),
                            p = e.get(l.wH),
                            y = e.get(l.ok),
                            E = e.get(l.X8),
                            f = e.get(l.yq),
                            v = e.get(l.NN),
                            x = e.get(l.qN),
                            S = e.get(l.ro),
                            N = e.get(l.nM),
                            T = e.get(l.Ut),
                            C = e.get(l.K1),
                            b = e.get(l.eu),
                            I = e.get(l.aE),
                            R = e.get(l.ki),
                            P = e.get(l.c9),
                            O = e.get(l.en),
                            A = e.get(l.jQ),
                            k = e.get(l.cZ),
                            L = e.get(l.Zl),
                            w = e.get(l.CN),
                            M = e.get(l.P1),
                            D = e.get(l.zj),
                            j = e.get(l.re),
                            K = e.get(l.JM),
                            G = e.get(l.Lk),
                            Y = e.get(l.$$),
                            H = e.get(l.sv),
                            F = e.get(l.gd),
                            U = e.get(l.Ez),
                            V = e.get(l.u2),
                            X = e.get(l.TD),
                            W = e.get(l.dh),
                            B = e.get(l.LC),
                            z = e.get(l.PL),
                            J = e.get(l.DT);
                        return {
                            accountResource: t,
                            afterTrackResource: r,
                            disclaimersResource: n,
                            usersResource: i,
                            landingResource: o,
                            landing3Resource: a,
                            landingBlocksResource: c,
                            albumResource: u,
                            libraryResource: d,
                            tracksResource: g,
                            topResource: m,
                            artistsResource: _,
                            slidesResource: h,
                            redAlertResource: p,
                            rotorResource: y,
                            waveResource: E,
                            searchResource: f,
                            searchPlaylistResource: v,
                            playlistResource: x,
                            playlistsResource: S,
                            pinResource: N,
                            metatagsResource: T,
                            tagResource: C,
                            feedResource: b,
                            pinsResource: I,
                            musicHistoryResource: R,
                            dynamicPagesResource: P,
                            chartResource: O,
                            clipsResource: A,
                            lyricViewsResource: k,
                            nonMusicResource: L,
                            donationResource: w,
                            loaderResource: M,
                            lumenResource: D,
                            prefixlessResource: j,
                            streamsResource: K,
                            filtersResource: G,
                            ugcResource: Y,
                            collectionResource: H,
                            adsResource: F,
                            personalResource: U,
                            familyResource: V,
                            childrenLandingResource: X,
                            promoResource: W,
                            telemetryResource: B,
                            labelsResource: z,
                            concertsResource: J,
                            wordsResource: e.get(l.dA),
                            wheelResource: e.get(l.$Y),
                        };
                    })(),
                    d = (0, i.U)(),
                    g = (0, s.N)().get(l.TK),
                    m = e.get(l.ni),
                    _ = new n.si(),
                    h = new n.fW();
                return {
                    ...u,
                    acqOffers: r,
                    disclaimerDictionary: o,
                    logger: d,
                    modelActionsLogger: g,
                    localStorage: _,
                    sessionStorage: h,
                    containerStorage: t,
                    config: a,
                    clientSafeConfig: c,
                    landingSdk: m,
                };
            };
        },
        32468: (e, t, r) => {
            'use strict';
            r.d(t, { A: () => i });
            var n = r(32290),
                l = r(77088),
                s = r.n(l);
            let i = (e) => {
                let { children: t } = e;
                return (0, n.jsx)('footer', { className: s().empty });
            };
        },
        34326: (e, t, r) => {
            'use strict';
            r.d(t, { U: () => c });
            var n = r(32290),
                l = r(63618),
                s = r(96103),
                i = r(55178),
                o = r(62366),
                a = r.n(o);
            let c = (0, s.PA)((e) => {
                let { indices: t, virtualItem: r, renderItemByIndex: s, columnClassName: o, className: c, resizeObserver: u, scrollMargin: d } = e,
                    g = (0, i.useRef)(null),
                    m = t[r.index],
                    _ = { '--virtual-grid-row-vertical-offset': ''.concat(r.start - d, 'px') };
                return (
                    (0, i.useEffect)(() => {
                        let e = g.current;
                        if (e)
                            return (
                                null == u || u.observe(e),
                                () => {
                                    null == u || u.unobserve(e);
                                }
                            );
                    }, [u]),
                    (0, n.jsx)('div', {
                        'data-index': r.index,
                        ref: g,
                        style: _,
                        className: (0, l.$)(a().root, c),
                        children: null == m ? void 0 : m.map((e) => (0, n.jsx)('div', { className: o, children: s(e) }, ''.concat(r.key, '_').concat(e))),
                    })
                );
            });
        },
        36125: (e, t, r) => {
            'use strict';
            var n;
            (r.d(t, { Z: () => n }),
                (function (e) {
                    ((e.CONCERT = 'concert'), (e.FESTIVAL = 'festival'), (e.TRIBUTE = 'tribute'), (e.MUSICAL = 'musical'), (e.UNSPECIFIED = 'unspecified'));
                })(n || (n = {})));
        },
        36885: (e, t, r) => {
            'use strict';
            r.d(t, { H: () => l });
            var n = r(19381);
            let l = (e) => (0, n.h)(e.data.concert, e.data.minPrice);
        },
        44989: (e, t, r) => {
            'use strict';
            r.d(t, { e: () => a });
            var n,
                l = r(55178),
                s = {
                    810: (e) => {
                        e.exports = n || (n = r.t(l, 2));
                    },
                },
                i = {},
                o = {};
            ((() => {
                (Object.defineProperty(o, '__esModule', { value: !0 }), (o.useToggle = void 0));
                let e = (function e(t) {
                    var r = i[t];
                    if (void 0 !== r) return r.exports;
                    var n = (i[t] = { exports: {} });
                    return (s[t](n, n.exports, e), n.exports);
                })(810);
                o.useToggle = (t) => {
                    let [r, n] = (0, e.useState)(t);
                    (0, e.useEffect)(() => {
                        n(t);
                    }, [t]);
                    let l = (0, e.useCallback)(() => {
                            n((e) => !e);
                        }, []),
                        s = (0, e.useCallback)(() => {
                            n(!0);
                        }, []),
                        i = (0, e.useCallback)(() => {
                            n(!1);
                        }, []);
                    return { state: r, toggle: l, setState: n, toggleTrue: s, toggleFalse: i };
                };
            })(),
                o.__esModule);
            var a = o.useToggle;
        },
        45066: (e, t, r) => {
            'use strict';
            r.d(t, { n: () => n });
            let n = {
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
        49259: (e, t, r) => {
            'use strict';
            r.d(t, { W: () => p, s: () => y });
            var n = r(32290),
                l = r(96103),
                s = r(21916),
                i = r(55178),
                o = r(85472),
                a = r(25090),
                c = r(96218),
                u = r(5245),
                d = r(57594),
                g = r(31726);
            (0, l.eO)(!1);
            let m = (0, i.createContext)(null),
                _ = (e) => {
                    let { children: t, store: r, storeKey: l } = e,
                        s = (0, i.useMemo)(() => ({ store: r, storeKey: l }), [r, l]);
                    return (0, n.jsx)(m.Provider, { value: s, children: t });
                },
                h = (e) => {
                    let { nonce: t, patchKey: r, patchesRef: l } = e;
                    return (
                        (0, s.useServerInsertedHTML)(() => {
                            let e = l.current;
                            return ((l.current = []), 0 === e.length)
                                ? null
                                : (0, n.jsx)('script', {
                                      dangerouslySetInnerHTML: {
                                          __html: ((e, t) =>
                                              "\n        window.__PAGE_STATE_PATCHES__ = window.__PAGE_STATE_PATCHES__ || {};\n        window.__PAGE_STATE_PATCHES__['"
                                                  .concat(e, "'] =\n            window.__PAGE_STATE_PATCHES__['")
                                                  .concat(e, "'] || [];\n        window.__PAGE_STATE_PATCHES__['")
                                                  .concat(e, "'].push(")
                                                  .concat((0, o.stringifyJSONSafely)(t), ");\n        window.dispatchEvent(new Event('")
                                                  .concat(c.O, "'));\n    "))(r, e),
                                      },
                                      nonce: null != t ? t : void 0,
                                  });
                        }),
                        null
                    );
                },
                p = (e) => {
                    let { createStore: t, patchKey: r } = e,
                        l = () => {
                            var e, t;
                            let n = null != (t = null == (e = window.__PAGE_STATE_PATCHES__) ? void 0 : e[r]) ? t : [];
                            return (window.__PAGE_STATE_PATCHES__ && delete window.__PAGE_STATE_PATCHES__[r], n);
                        };
                    return {
                        pageStoreProvider: (e) => {
                            let { children: s, nonce: i } = e,
                                o = (0, g.Y)(),
                                a = (0, d.g)(),
                                { store: m, patchesRef: p } = (0, u.m)({
                                    createStore: () => t({ ...o, rootStore: a }),
                                    getPendingPatchBatches: l,
                                    patchesUpdatedEventName: c.O,
                                });
                            return (0, n.jsxs)(n.Fragment, {
                                children: [(0, n.jsx)(h, { nonce: i, patchKey: r, patchesRef: p }), (0, n.jsx)(_, { store: m, storeKey: r, children: s })],
                            });
                        },
                    };
                };
            function y(e) {
                let { throwOnAbsence: t = !0 } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    r = (0, i.useContext)(m);
                if (!r || r.storeKey !== e) {
                    var n;
                    if (!t) return null;
                    throw new a.t('Page store context is missing or has unexpected key', {
                        code: 'E_CONTEXT_PAGE_STORE_NULL',
                        data: { actualStoreKey: null != (n = null == r ? void 0 : r.storeKey) ? n : 'null', expectedStoreKey: e },
                    });
                }
                return r.store;
            }
        },
        54280: (e, t, r) => {
            'use strict';
            r.d(t, { V8: () => s, si: () => o, fW: () => g, MJ: () => d, jU: () => _, Bx: () => m });
            var n = r(78061);
            function l(e) {
                if (!e) return null;
                try {
                    return JSON.parse(e);
                } catch (e) {
                    return (console.error(e), null);
                }
            }
            class s {
                get(e) {
                    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
                    try {
                        let i = (0, n.Jt)(e);
                        if (t) {
                            var r, s;
                            return null != (s = null == (r = l(i)) ? void 0 : r.value) ? s : null;
                        }
                        return null != i ? i : null;
                    } catch (e) {
                        return null;
                    }
                }
                set(e, t, r) {
                    let l = !(arguments.length > 3) || void 0 === arguments[3] || arguments[3];
                    try {
                        let s = l ? JSON.stringify({ value: t }) : t;
                        (0, n.hZ)(e, s, r);
                    } catch (e) {
                        console.error(e);
                    }
                }
                has(e) {
                    return null !== this.get(e, !1);
                }
                remove(e) {
                    try {
                        (0, n.TF)(e);
                    } catch (e) {}
                }
            }
            function i(e) {
                try {
                    var t;
                    return null != (t = window[e]) ? t : null;
                } catch (e) {
                    return null;
                }
            }
            class o {
                get(e) {
                    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
                        r = i('localStorage');
                    if (!r) return null;
                    try {
                        var n;
                        let s = r.getItem(e) || void 0;
                        if (!t) return s;
                        let i = l(s);
                        if (!i) return null;
                        let o = null != (n = null == i ? void 0 : i.value) ? n : null;
                        if ((null == i ? void 0 : i.expires) && Date.now() > new Date(i.expires).getTime()) return (this.remove(e), null);
                        return o;
                    } catch (e) {
                        return null;
                    }
                }
                set(e, t, r) {
                    if ('number' == typeof (null == r ? void 0 : r.expires)) {
                        let e = new Date();
                        (e.setMilliseconds(e.getMilliseconds() + 864e5 * r.expires), (r.expires = e));
                    }
                    let n = i('localStorage');
                    if (n)
                        try {
                            n.setItem(e, JSON.stringify({ value: t, ...r }));
                        } catch (e) {}
                }
                has(e) {
                    return null !== this.get(e);
                }
                remove(e) {
                    let t = i('localStorage');
                    if (t)
                        try {
                            t.removeItem(e);
                        } catch (e) {}
                }
            }
            var a = r(91945),
                c = r(25090);
            class u extends c.t {
                constructor(e, t, { code: r = 'E_STORAGE', ...n } = {}) {
                    (super('There is no '.concat(t, ' storage on the ').concat(e, ' platform'), { code: r, ...n }),
                        (0, a._)(this, 'name', 'Storage Exception'),
                        Object.setPrototypeOf(this, u.prototype));
                }
            }
            class d {
                get(e) {
                    throw new u(this.platform, this.type);
                }
                set(e, t, r) {
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
            class g {
                get(e) {
                    let t = i('sessionStorage');
                    if (!t) return null;
                    try {
                        var r, n, s;
                        let i = null != (n = t.getItem(e)) ? n : void 0;
                        return null != (s = null == (r = l(i)) ? void 0 : r.value) ? s : null;
                    } catch (e) {
                        return null;
                    }
                }
                set(e, t) {
                    let r = i('sessionStorage');
                    if (r)
                        try {
                            r.setItem(e, JSON.stringify({ value: t }));
                        } catch (e) {}
                }
                has(e) {
                    return null !== this.get(e);
                }
                remove(e) {
                    let t = i('sessionStorage');
                    if (t)
                        try {
                            t.removeItem(e);
                        } catch (e) {}
                }
            }
            function m(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
                Array.isArray(t) &&
                    t.forEach((t) => {
                        let r = 'object' != typeof t ? t : t.name,
                            n = 'object' != typeof t ? { expires: 365 } : t.options || { expires: 365 },
                            l = e.get(r);
                        null != l && e.set(r, l, n);
                    });
            }
            function _(e) {
                let { name: t, group: r, value: n } = e;
                return n && 0 !== Object.keys(n).length
                    ? n.title
                        ? { [t]: { group: r, value: { ...n, title: r } } }
                        : { [t]: { group: r, value: { title: r, value: n } } }
                    : { [t]: { group: r, value: { title: r } } };
            }
        },
        55573: (e, t, r) => {
            'use strict';
            r.d(t, { a: () => a });
            var n = r(60754),
                l = r(15567),
                s = r(79406),
                i = r(99703);
            let o = n.gK.model('Price', { value: n.gK.number, currency: n.gK.string }),
                a = n.gK
                    .model('Concert', {
                        id: n.gK.string,
                        dataSessionId: n.gK.maybe(n.gK.string),
                        datetime: n.gK.maybe(n.gK.string),
                        city: n.gK.maybe(n.gK.string),
                        place: n.gK.maybe(n.gK.string),
                        contentRating: n.gK.maybe(n.gK.string),
                        price: n.gK.maybe(o),
                        cashbackTitle: n.gK.maybe(n.gK.string),
                        cashbackValuePercent: n.gK.maybe(n.gK.number),
                        title: n.gK.maybe(n.gK.string),
                        cover: n.gK.maybe(i.$),
                        rank: n.gK.maybe(n.gK.number),
                        eventKind: n.gK.maybe(n.gK.string),
                    })
                    .views((e) => ({
                        get isCashbackExperimentEnabled() {
                            let { experiments: t } = (0, l.M)(e);
                            return t.checkExperiment(s.z.WebNextConcertsCashback, 'on');
                        },
                        get isIdentityExperimentEnabled() {
                            let { experiments: t } = (0, l.M)(e);
                            return t.checkExperiment(s.z.WebNextConcertsIdentityEventType, 'on');
                        },
                    }))
                    .actions((e) => ({ getKey: (t) => ''.concat(t, '_').concat(e.id) }));
        },
        62366: (e) => {
            e.exports = { root: 'VirtualGridRow_root___UfbI' };
        },
        67881: (e, t, r) => {
            Promise.resolve().then(r.bind(r, 2528));
        },
        69538: (e, t, r) => {
            'use strict';
            r.d(t, { A: () => l });
            let n = /[+-]\d{2}:?\d{2}/,
                l = (e) => (null == e ? void 0 : e.replace(n, ''));
        },
        73715: (e, t, r) => {
            'use strict';
            r.d(t, { X: () => s });
            var n = r(60754),
                l = r(49399);
            let s = n.gK.model('LoadingState', { loadingState: n.gK.enumeration(Object.values(l.G)) }).views((e) => ({
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
        74196: (e, t, r) => {
            'use strict';
            r.d(t, { q: () => c });
            var n,
                l = r(55178),
                s = {
                    5881: (e, t, r) => {
                        function n() {
                            for (var e, t, r = 0, n = ''; r < arguments.length;)
                                (e = arguments[r++]) &&
                                    (t = (function e(t) {
                                        var r,
                                            n,
                                            l = '';
                                        if ('string' == typeof t || 'number' == typeof t) l += t;
                                        else if ('object' == typeof t)
                                            if (Array.isArray(t)) for (r = 0; r < t.length; r++) t[r] && (n = e(t[r])) && (l && (l += ' '), (l += n));
                                            else for (r in t) t[r] && (l && (l += ' '), (l += r));
                                        return l;
                                    })(e)) &&
                                    (n && (n += ' '), (n += t));
                            return n;
                        }
                        (r.r(t), r.d(t, { clsx: () => n, default: () => l }));
                        let l = n;
                    },
                    7319: (e, t, r) => {
                        (r.r(t), r.d(t, { default: () => n }));
                        let n = { root: 'eaYyesBmJL_NbkgoYR1c', focusable: 'uL1dD5rxgI4bPmfyMMe7' };
                    },
                    9097: (e, t) => {
                        var r = Symbol.for('react.transitional.element');
                        function n(e, t, n) {
                            var l = null;
                            if ((void 0 !== n && (l = '' + n), void 0 !== t.key && (l = '' + t.key), 'key' in t))
                                for (var s in ((n = {}), t)) 'key' !== s && (n[s] = t[s]);
                            else n = t;
                            return { $$typeof: r, type: e, key: l, ref: void 0 !== (t = n.ref) ? t : null, props: n };
                        }
                        ((t.Fragment = Symbol.for('react.fragment')), (t.jsx = n), (t.jsxs = n));
                    },
                    4377: (e, t, r) => {
                        e.exports = r(9097);
                    },
                    5531: function (e, t, r) {
                        var n =
                            (this && this.__importDefault) ||
                            function (e) {
                                return e && e.__esModule ? e : { default: e };
                            };
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.SROnly = void 0));
                        let l = r(4377),
                            s = r(5881),
                            i = r(810),
                            o = n(r(7319));
                        t.SROnly = (e) => {
                            let { className: t, focusable: r, children: n, ...a } = e,
                                c = (0, s.clsx)(o.default.root, { [o.default.focusable]: r }, t);
                            return (0, i.isValidElement)(n)
                                ? (0, i.cloneElement)(n, { ...a, className: (0, s.clsx)(c, n.props.className) })
                                : (0, l.jsx)('span', { className: c, ...a, children: n });
                        };
                    },
                    810: (e) => {
                        e.exports = n || (n = r.t(l, 2));
                    },
                },
                i = {};
            function o(e) {
                var t = i[e];
                if (void 0 !== t) return t.exports;
                var r = (i[e] = { exports: {} });
                return (s[e].call(r.exports, r, r.exports, o), r.exports);
            }
            ((o.d = (e, t) => {
                for (var r in t) o.o(t, r) && !o.o(e, r) && Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
            }),
                (o.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
                (o.r = (e) => {
                    ('undefined' != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
                        Object.defineProperty(e, '__esModule', { value: !0 }));
                }));
            var a = {};
            (() => {
                (Object.defineProperty(a, '__esModule', { value: !0 }), (a.SROnly = void 0));
                var e = o(5531);
                Object.defineProperty(a, 'SROnly', {
                    enumerable: !0,
                    get: function () {
                        return e.SROnly;
                    },
                });
            })();
            var c = a.SROnly;
            a.__esModule;
        },
        77028: (e) => {
            e.exports = {
                root: 'ConcertsDetailsPage_root__Uyap_',
                scrollContainer: 'ConcertsDetailsPage_scrollContainer__BKTRD',
                content: 'ConcertsDetailsPage_content__WsuVk',
                header: 'ConcertsDetailsPage_header__K7UVE',
                container: 'ConcertsDetailsPage_container__swjuX',
                column: 'ConcertsDetailsPage_column__EB1kA',
                row: 'ConcertsDetailsPage_row__oP8Xu',
                shimmerTitle: 'ConcertsDetailsPage_shimmerTitle__vjWfR',
                footer: 'ConcertsDetailsPage_footer__ooBj8',
            };
        },
        77088: (e) => {
            e.exports = {
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
        80536: (e, t, r) => {
            'use strict';
            r.d(t, { B: () => n });
            let n = (0, r(55178).createContext)({ observeElement: () => {}, unobserveElement: () => {} });
        },
        82757: (e, t, r) => {
            'use strict';
            r.d(t, { J: () => n });
            let n = (e) => {
                if (e) return { value: e.value, currency: e.currency };
            };
        },
        83560: (e, t, r) => {
            'use strict';
            r.d(t, { s: () => n });
            let n = () => ({ year: 'numeric', month: 'long', day: 'numeric' });
        },
        93841: (e, t, r) => {
            'use strict';
            r.d(t, { p: () => l });
            var n = r(60754);
            let l = n.gK.model('ModelDestroyManager').actions(() => ({
                destroyItems(e) {
                    (e.forEach((e) => {
                        e && (0, n.Yo)(e);
                    }),
                        queueMicrotask(() => {
                            e.forEach((e) => {
                                e && (0, n.zr)(e);
                            });
                        }));
                },
            }));
        },
        93954: (e, t, r) => {
            'use strict';
            r.d(t, { L: () => c });
            var n = r(66988),
                l = r(6752),
                s = r(8055),
                i = r(55178);
            let o = (e) => {
                let { minColumnWidth: t, maxColumnWidth: r, containerWidth: n, totalCount: l, columnGap: s, minColumnCount: i, maxColumnCount: o } = e,
                    a = Math.max(1, Math.floor((n + s) / (t + s))),
                    c = Math.max(i, Math.floor((n + s) / ((r + t) * 0.5 + s)));
                for (let e = i; e <= a; e++) {
                    let l = (n - (e - 1) * s) / e;
                    if (l >= t && l <= r) {
                        c = e;
                        break;
                    }
                }
                return { rowCount: Math.ceil(l / (c = o ? Math.min(c, o) : c)), columnCount: c };
            };
            var a = r(79248);
            let c = (e) => {
                let {
                        count: t,
                        getEstimateRowSize: r,
                        rowGap: c,
                        columnGap: u,
                        minColumnWidth: d,
                        maxColumnWidth: g,
                        minColumnCount: m,
                        maxColumnCount: _,
                        containerRef: h,
                    } = e,
                    { rowCount: p, columnCount: y } = ((e) => {
                        let { containerRef: t, minColumnCount: r, maxColumnWidth: n, minColumnWidth: l, totalCount: a, columnGap: c, maxColumnCount: u } = e,
                            [d, g] = (0, i.useState)({ rowCount: 0, columnCount: 0 }),
                            m = (0, i.useRef)(null),
                            _ = (0, i.useMemo)(
                                () =>
                                    (0, s.A)(
                                        (e) => {
                                            g(
                                                o({
                                                    minColumnWidth: l,
                                                    maxColumnWidth: n,
                                                    containerWidth: e.contentRect.width,
                                                    totalCount: a,
                                                    columnGap: c,
                                                    minColumnCount: r,
                                                    maxColumnCount: u,
                                                }),
                                            );
                                        },
                                        100,
                                        { trailing: !0 },
                                    ),
                                [c, u, n, r, l, a],
                            );
                        return (
                            (0, i.useLayoutEffect)(
                                () => (
                                    m.current && m.current.disconnect(),
                                    (m.current = new ResizeObserver((e) => {
                                        e.forEach(_);
                                    })),
                                    t &&
                                        (g(
                                            o({
                                                minColumnWidth: l,
                                                maxColumnWidth: n,
                                                containerWidth: t.getBoundingClientRect().width,
                                                totalCount: a,
                                                columnGap: c,
                                                minColumnCount: r,
                                                maxColumnCount: u,
                                            }),
                                        ),
                                        m.current.observe(t)),
                                    () => {
                                        var e;
                                        null == (e = m.current) || e.disconnect();
                                    }
                                ),
                                [c, t, _, u, n, r, l, a],
                            ),
                            d
                        );
                    })({ totalCount: t, columnGap: null != u ? u : 0, minColumnCount: m, maxColumnWidth: g, minColumnWidth: d, maxColumnCount: _, containerRef: h }),
                    { virtualizer: E, resizeObserver: f } = (0, a.r)({ count: p, getEstimateSize: r, gap: c, containerRef: h }),
                    v = (0, n.A)(
                        Array.from({ length: t }, (e, t) => t),
                        y,
                    ),
                    x = (0, l.L)(() => {
                        var e, t;
                        if (!E.range) return null;
                        let r = null == (e = v[E.range.startIndex]) ? void 0 : e.at(0),
                            n = null == (t = v[E.range.endIndex]) ? void 0 : t.at(-1);
                        return void 0 !== r && void 0 !== n ? { startIndex: r, endIndex: n } : null;
                    });
                return { virtualizer: E, rowResizeObserver: f, indices: v, columnCount: y, visibleRange: x };
            };
        },
        95481: (e, t, r) => {
            'use strict';
            r.d(t, { f: () => E });
            var n = r(55178),
                l = r(17811),
                s = r(92146),
                i = r(74416),
                o = r(6752),
                a = r(62376),
                c = r(1677),
                u = r(48922),
                d = r(84782),
                g = r(30915),
                m = r(18746),
                _ = r(37240),
                h = r(51012),
                p = r(47498);
            let y = [
                    u._Q.HOME,
                    u._Q.LANDING,
                    u._Q.NON_MUSIC,
                    u._Q.OWN_COLLECTION,
                    u._Q.SEARCH,
                    u._Q.ARTIST,
                    u._Q.CONCERTS,
                    u._Q.CONCERT,
                    u._Q.ALBUM,
                    u._Q.PLAYLIST,
                    u._Q.SLIDES_SCREEN,
                    u._Q.PROMOLANDING_ALBUM,
                    u._Q.WAVE_LANDING_SCREEN,
                ],
                E = () => {
                    let e = (0, n.useRef)(!1),
                        t = (0, i.st)(),
                        r = (0, a.U)(),
                        { hash: E } = (0, i.gf)(),
                        { pageId: f } = (0, _.$)(),
                        { tabId: v, tabPos: x, isTabSelectedByDefault: S } = (0, p.R)(),
                        { offsetBlockPosY: N } = (0, g.u)(),
                        { blockId: T, blockType: C, blockPosX: b, blockPosY: I, mainObjectType: R, mainObjectId: P, objectsCount: O } = (0, d.N)(),
                        { filterKey: A, filterValue: k, filterPos: L } = (0, m.G)(),
                        { skeleton: w } = (0, h.b)(),
                        M = (0, o.L)(() => (void 0 !== N && void 0 !== I ? N + I : I));
                    return (0, n.useCallback)(() => {
                        if (!t || !f || !u.xK.includes(f) || !y.includes(f) || e.current) return;
                        let n = { hash: E, pageId: c.F[f], entityType: C, entityId: T, entityPosX: b, entityPosY: M, objectsCount: O };
                        (void 0 !== A && ((n.filterKey = A), (n.filterValue = k), (n.filterPos = L)),
                            u.qG.includes(f) && ((n.tabId = v), (n.tabPos = x), (n.isTabSelectedByDefault = S)),
                            w && (n.skeletonId = w),
                            P && R && ((n.mainObjectType = R), (n.mainObjectId = P)));
                        let i = (0, l.F)({ params: n, logger: r, context: 'useSendEventOnBlockLoaded' });
                        i && ((0, s.uY)(t.evgenInstance, i), (e.current = !0));
                    }, [t, f, E, C, T, b, M, A, k, L, O, w, P, R, r, v, x, S]);
                };
        },
        96218: (e, t, r) => {
            'use strict';
            r.d(t, { O: () => l, s: () => n });
            let n = 'yMusicStatePatchesUpdated',
                l = 'yMusicPageStatePatchesUpdated';
        },
        97201: (e, t, r) => {
            'use strict';
            r.d(t, { K: () => n });
            var n = (function (e) {
                return (
                    (e.TAB = 'tab'),
                    (e.ACTIVE_TAB = 'activeTab'),
                    (e.BLOCK = 'block'),
                    (e.IDS = 'ids'),
                    (e.ACTIVE_INDEX = 'activeIndex'),
                    (e.SORT = 'sort'),
                    (e.OPEN_TRAILER = 'openTrailer'),
                    (e.DEEPLINK = 'deeplink'),
                    (e.SEEDS = 'seeds'),
                    (e.STATION_ID = 'stationId'),
                    (e.OPEN_PLAYER = 'openPlayer'),
                    (e.SCREEN = 'screen'),
                    (e.CLID = 'clid'),
                    (e.UTM_SOURCE = 'utm_source'),
                    (e.YCLID = 'yclid'),
                    (e.UTM_CAMPAIGN = 'utm_campaign'),
                    (e.UTM_MEDIUM = 'utm_medium'),
                    (e.REF_ID = 'ref_id'),
                    (e.LUMEN_AWAKE_PARAM = 'shouldAwakeLumen'),
                    (e.BEST_PLAY = 'bestPlay'),
                    (e.TEXT = 'text'),
                    e
                );
            })({});
        },
        97841: (e, t, r) => {
            'use strict';
            r.d(t, { w: () => T });
            var n = r(32290),
                l = r(63618),
                s = r(96103),
                i = r(60900),
                o = r(31010),
                a = (function (e) {
                    return (
                        (e.YANDEX = 'YANDEX'),
                        (e.YANDEX_PROJECTS = 'YANDEX_PROJECTS'),
                        (e.COPYRIGHT_HOLDER = 'COPYRIGHT_HOLDER'),
                        (e.AGREEMENT = 'AGREEMENT'),
                        (e.RECOMMENDATION_RULES = 'RECOMMENDATION_RULES'),
                        (e.HELP = 'HELP'),
                        (e.PRIVACY_POLICY = 'PRIVACY_POLICY'),
                        e
                    );
                })({});
            let c = (e, t, r) => {
                    switch (e) {
                        case a.YANDEX:
                            if ('ru' === t) return 'https://ya.ru';
                            return;
                        case a.YANDEX_PROJECTS:
                            return 'https://yandex.'.concat(t, '/all?lang=').concat(r);
                        case a.COPYRIGHT_HOLDER:
                            return 'https://yandex.'.concat(t, '/support/music/performers-and-copyright-holders/copyright.html?lang=').concat(r);
                        case a.AGREEMENT:
                            return 'https://yandex.ru/legal/music_termsofuse?lang='.concat(r);
                        case a.RECOMMENDATION_RULES:
                            return 'https://music.yandex.ru/legal/recommendations/ru/#music';
                        case a.HELP:
                            return 'https://yandex.'.concat(t, '/support/music/index.html?lang=').concat(r);
                        case a.PRIVACY_POLICY:
                            return 'https://yandex.'.concat(t, '/legal/confidential/').concat(r);
                    }
                },
                u = (e) => {
                    let { formatMessage: t, language: r, tld: n, year: l } = e;
                    return {
                        year: l,
                        yandexMusic: { id: a.YANDEX, title: t({ id: 'footer.yandex-music' }), url: c(a.YANDEX, n, r) },
                        yandexProjects: { id: a.YANDEX_PROJECTS, title: t({ id: 'footer.yandex-project' }), url: c(a.YANDEX_PROJECTS, n, r) },
                    };
                };
            var d = r(15559),
                g = r(8626);
            let m = (e) => e(new Date(), (0, g.m)());
            var _ = r(61945),
                h = r(57594),
                p = r(77088),
                y = r.n(p),
                E = r(21732),
                f = r(71926),
                v = r(61258);
            let x = (e) => {
                    let { className: t, data: r } = e;
                    return (0, n.jsxs)('div', {
                        className: (0, l.$)(y().copyrights, t),
                        'data-test-id': E.S7.FOOTER_COPYRIGHTS,
                        children: [
                            (0, n.jsxs)(f.HL, {
                                variant: 'span',
                                type: 'text',
                                size: 's',
                                weight: 'medium',
                                className: y().text,
                                children: [
                                    '\xa9 ',
                                    r.year,
                                    ' \xa0',
                                    (0, n.jsx)(v.N, {
                                        target: '_blank',
                                        href: r.yandexMusic.url,
                                        className: (0, l.$)(y().copyrightLink, y().yandexMusicLink),
                                        'data-test-id': E.S7.FOOTER_YANDEX_MUSIC_LINK,
                                        children: r.yandexMusic.title,
                                    }),
                                ],
                            }),
                            (0, n.jsx)(f.HL, { variant: 'span', type: 'text', size: 's', weight: 'medium', children: ' • ' }),
                            (0, n.jsx)(v.N, {
                                target: '_blank',
                                href: r.yandexProjects.url,
                                className: y().copyrightLink,
                                'data-test-id': E.S7.FOOTER_YANDEX_PROJECT_LINK,
                                children: r.yandexProjects.title,
                            }),
                        ],
                    });
                },
                S = (e) => {
                    let { disclaimer: t, links: r } = e;
                    return (0, n.jsxs)('div', {
                        className: y().links,
                        children: [
                            (0, n.jsx)('ol', {
                                className: y().list,
                                'data-test-id': E.S7.FOOTER_LINKS_LIST,
                                children: r.map((e) => {
                                    let { id: t, title: r, url: l } = e;
                                    return (0, n.jsx)(
                                        'li',
                                        {
                                            className: y().item,
                                            children: (0, n.jsx)(v.N, { target: '_blank', href: l, className: y().link, 'data-test-id': E.S7.FOOTER_LINK, children: r }),
                                        },
                                        t,
                                    );
                                }),
                            }),
                            (0, n.jsx)(f.HL, {
                                variant: 'span',
                                type: 'text',
                                size: 'm',
                                weight: 'medium',
                                className: y().explicitText,
                                tabIndex: 0,
                                dangerouslySetInnerHTML: { __html: t },
                                'data-test-id': E.S7.FOOTER_DISCLAIMER_TEXT,
                            }),
                        ],
                    });
                },
                N = (e) => {
                    let { className: t, data: r } = e;
                    return (0, n.jsxs)('footer', {
                        className: (0, l.$)(y().root, y().important, t),
                        'data-test-id': E.S7.FOOTER,
                        children: [(0, n.jsx)(S, { links: r.links, disclaimer: r.disclaimer }), (0, n.jsx)(x, { data: r.copyrights })],
                    });
                };
            (0, s.PA)((e) => {
                let { className: t } = e,
                    { location: r } = (0, h.g)(),
                    { formatDate: l, formatMessage: s } = (0, i.A)(),
                    { language: o } = (0, _.h)(),
                    a = u({ formatMessage: s, language: o, tld: r.tld, year: m(l) });
                return (0, n.jsx)(x, { className: t, data: a });
            });
            let T = (0, s.PA)((e) => {
                var t;
                let { className: r } = e,
                    { experiments: s, location: g, user: p } = (0, h.g)(),
                    { formatDate: E, formatMessage: f } = (0, i.A)(),
                    { isEnabled: v } = null != (t = (0, o.P)()) ? t : {},
                    { language: x } = (0, _.h)(),
                    S = ((e) => {
                        let { checkExperiment: t, formatMessage: r, isWebApplication: n, language: l, tld: s, userRegion: i, year: o } = e;
                        return {
                            links: ((e) => {
                                let { formatMessage: t, isWebApplication: r, tld: n, language: l, userRegion: s } = e,
                                    i = { id: a.COPYRIGHT_HOLDER, title: t({ id: 'footer.links-copyright-holders' }), url: c(a.COPYRIGHT_HOLDER, n, l) },
                                    o = { id: a.PRIVACY_POLICY, title: t({ id: 'footer.links-privacy-policy' }), url: c(a.PRIVACY_POLICY, n, l) },
                                    u = { id: a.AGREEMENT, title: t({ id: 'footer.links-terms' }), url: c(a.AGREEMENT, n, l) },
                                    d = { id: a.RECOMMENDATION_RULES, title: t({ id: 'footer.links-recommendation-rules' }), url: c(a.RECOMMENDATION_RULES, n, l) },
                                    g = { id: a.HELP, title: t({ id: 'footer.links-help' }), url: c(a.HELP, n, l) },
                                    m = [i, u, d];
                                return (r && 'ru' === s && m.push(o), m.push(g), m);
                            })({ formatMessage: r, isWebApplication: n, language: l, tld: s, userRegion: i }),
                            disclaimer: (0, d.v)({
                                checkExperiment: t,
                                getDisclaimerContent: () => r({ id: 'footer.disclaimer-content' }),
                                getExplicitContent: () => r({ id: 'footer.explicit-content' }),
                                userRegion: i,
                            }),
                            copyrights: u({ formatMessage: r, language: l, tld: s, year: o }),
                        };
                    })({
                        checkExperiment: (e, t) => s.checkExperiment(e, t),
                        formatMessage: f,
                        isWebApplication: !1,
                        tld: g.tld,
                        language: x,
                        userRegion: p.account.data.userSessionRegionIso,
                        year: m(E),
                    });
                return (0, n.jsx)(N, { className: (0, l.$)({ [y().root_withOffsetForDeeplink]: v }, r), data: S });
            });
        },
        99703: (e, t, r) => {
            'use strict';
            r.d(t, { $: () => l });
            var n = r(60754);
            let l = n.gK.model('Cover', { uri: n.gK.maybe(n.gK.string), color: n.gK.maybe(n.gK.string), videoUrl: n.gK.maybe(n.gK.string) });
        },
    },
    (e) => {
        (e.O(
            0,
            [
                1010, 7412, 3608, 1256, 9695, 6706, 1311, 1588, 5472, 8378, 900, 2536, 2146, 3353, 2474, 8035, 2732, 1410, 4250, 1570, 7307, 4530, 8506, 6050, 5806, 6241,
                7702, 9155, 4668, 1175, 4638, 7784, 4220, 9562, 7358,
            ],
            () => e((e.s = 67881)),
        ),
            (_N_E = e.O()));
    },
]);
