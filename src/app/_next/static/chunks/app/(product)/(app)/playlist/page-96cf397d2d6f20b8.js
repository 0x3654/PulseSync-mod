(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [8209],
    {
        3796: (e, t, r) => {
            'use strict';
            r.d(t, { J: () => a });
            var i = r(21916),
                s = r(55178);
            let a = (e) => {
                let t = (0, i.usePathname)(),
                    [r, a] = (0, s.useState)(!1);
                ((0, s.useEffect)(() => {
                    (window.Ya.Rum.spa.makeSpaSubPage(t), window.Ya.Rum.spa.startDataLoading(t));
                }),
                    (0, s.useEffect)(() => {
                        window.Ya.Rum.spa.getLastSpaSubPage(t) && e && !r && (window.Ya.Rum.spa.finishDataLoading(t), window.Ya.Rum.spa.startDataRendering(t), a(!0));
                    }, [e, r, t]));
            };
        },
        5245: (e, t, r) => {
            'use strict';
            r.d(t, { m: () => a });
            var i = r(60754),
                s = r(55178);
            let a = (e) => {
                let { createStore: t, getPendingPatchBatches: r, patchesUpdatedEventName: a } = e,
                    n = (0, s.useRef)([]),
                    [l] = (0, s.useState)(() => {
                        let e = t();
                        for (let t of r()) (0, i.X6)(e, t);
                        return e;
                    });
                return (
                    (0, s.useLayoutEffect)(() => {
                        let e = () => {
                            for (let e of r()) (0, i.X6)(l, e);
                        };
                        return (e(), window.addEventListener(a, e), () => window.removeEventListener(a, e));
                    }, [r, a, l]),
                    { store: l, patchesRef: n }
                );
            };
        },
        9634: (e, t, r) => {
            'use strict';
            r.d(t, { MainSuspenseLoader: () => l });
            var i = r(32290),
                s = r(82586),
                a = r(82542),
                n = r.n(a);
            let l = (e) => {
                let { style: t } = e,
                    r = {
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
                return (0, i.jsx)('div', {
                    style: r,
                    children: (0, i.jsx)(s.I, {
                        variant: 'musicLogo',
                        style: { width: '100%', maxWidth: '100px', color: 'var(--ym-logo-color-primary-variant)' },
                        className: n().icon,
                    }),
                });
            };
        },
        10733: (e, t, r) => {
            'use strict';
            r.d(t, { G: () => a });
            var i = r(91945),
                s = r(50891);
            class a extends s.m {
                constructor(e, t) {
                    (super(e, { code: 'E_HTTP_CLIENT_NON_2XX_3XX_RESPONSE', cause: t.cause }),
                        (0, i._)(this, 'name', 'HttpErrorException'),
                        (0, i._)(this, 'statusCode', void 0),
                        (this.statusCode = t.statusCode),
                        Object.setPrototypeOf(this, a.prototype));
                }
            }
        },
        11323: (e, t, r) => {
            'use strict';
            r.d(t, { B: () => o });
            var i = r(32290),
                s = r(55178),
                a = r(21732),
                n = r(50162);
            let l = (e) => {
                    let { isAvailable: t = !0, className: r, fallbackIconSize: s, forwardRef: l, ...o } = e;
                    return t
                        ? (0, i.jsx)(n._V, { ref: l, className: r, fallbackIconSize: s, ...o, 'data-test-id': a.S7.ENTITY_COVER_IMAGE })
                        : (0, i.jsx)(n.Ab, { className: r, iconSize: s, iconVariant: 'unavailable', 'data-test-id': a.S7.ENTITY_COVER_FALLBACK_IMAGE });
                },
                o = (0, s.forwardRef)((e, t) => (0, i.jsx)(l, { forwardRef: t, ...e }));
        },
        18518: (e) => {
            e.exports = {
                backdrop: 'BrandedPlaylistHeader_backdrop__hLImj',
                title: 'BrandedPlaylistHeader_title__gPU9U',
                title_show: 'BrandedPlaylistHeader_title_show__e4u0h',
                show: 'BrandedPlaylistHeader_show__42bNL',
                title_withOffset: 'BrandedPlaylistHeader_title_withOffset__QppO0',
                root: 'BrandedPlaylistHeader_root__jXK4F',
                root_withChildren: 'BrandedPlaylistHeader_root_withChildren__6BMwV',
                root_sticky: 'BrandedPlaylistHeader_root_sticky__E_n81',
                root_blurWithTitle: 'BrandedPlaylistHeader_root_blurWithTitle__lmykd',
                child: 'BrandedPlaylistHeader_child__35wjg',
                child_show: 'BrandedPlaylistHeader_child_show__Uvbef',
                container: 'BrandedPlaylistHeader_container__s66Ay',
                container_withMultipleChildren: 'BrandedPlaylistHeader_container_withMultipleChildren__76B6E',
                header: 'BrandedPlaylistHeader_header__jdTQJ',
                actions: 'BrandedPlaylistHeader_actions__we7tI',
                leftBlock: 'BrandedPlaylistHeader_leftBlock__iSsfy',
            };
        },
        31726: (e, t, r) => {
            'use strict';
            r.d(t, { Y: () => l });
            var i = r(54280),
                s = r(70204),
                a = r(34186),
                n = r(62376);
            let l = () => {
                let e = (0, a.N)(),
                    t = e.get(s.oo),
                    r = e.get(s.uM),
                    l = e.get(s.ff),
                    o = e.get(s.V4),
                    d = e.get(s.P0),
                    c = (() => {
                        let e = (0, a.N)(),
                            t = e.get(s.$I),
                            r = e.get(s.EN),
                            i = e.get(s.N1),
                            n = e.get(s._1),
                            l = e.get(s.V3),
                            o = e.get(s.Lb),
                            d = e.get(s.wK),
                            c = e.get(s.tz),
                            u = e.get(s.$8),
                            _ = e.get(s.Oo),
                            h = e.get(s.X4),
                            m = e.get(s.O9),
                            E = e.get(s.E),
                            p = e.get(s.wH),
                            g = e.get(s.ok),
                            v = e.get(s.X8),
                            T = e.get(s.yq),
                            N = e.get(s.NN),
                            S = e.get(s.qN),
                            y = e.get(s.ro),
                            f = e.get(s.nM),
                            x = e.get(s.Ut),
                            P = e.get(s.K1),
                            w = e.get(s.eu),
                            O = e.get(s.aE),
                            I = e.get(s.ki),
                            C = e.get(s.c9),
                            A = e.get(s.en),
                            b = e.get(s.jQ),
                            R = e.get(s.cZ),
                            H = e.get(s.Zl),
                            L = e.get(s.CN),
                            D = e.get(s.P1),
                            B = e.get(s.zj),
                            j = e.get(s.re),
                            k = e.get(s.JM),
                            U = e.get(s.Lk),
                            M = e.get(s.$$),
                            G = e.get(s.sv),
                            V = e.get(s.gd),
                            K = e.get(s.Ez),
                            F = e.get(s.u2),
                            Y = e.get(s.TD),
                            X = e.get(s.dh),
                            $ = e.get(s.LC),
                            J = e.get(s.PL),
                            z = e.get(s.DT);
                        return {
                            accountResource: t,
                            afterTrackResource: r,
                            disclaimersResource: i,
                            usersResource: n,
                            landingResource: l,
                            landing3Resource: o,
                            landingBlocksResource: d,
                            albumResource: c,
                            libraryResource: u,
                            tracksResource: _,
                            topResource: h,
                            artistsResource: m,
                            slidesResource: E,
                            redAlertResource: p,
                            rotorResource: g,
                            waveResource: v,
                            searchResource: T,
                            searchPlaylistResource: N,
                            playlistResource: S,
                            playlistsResource: y,
                            pinResource: f,
                            metatagsResource: x,
                            tagResource: P,
                            feedResource: w,
                            pinsResource: O,
                            musicHistoryResource: I,
                            dynamicPagesResource: C,
                            chartResource: A,
                            clipsResource: b,
                            lyricViewsResource: R,
                            nonMusicResource: H,
                            donationResource: L,
                            loaderResource: D,
                            lumenResource: B,
                            prefixlessResource: j,
                            streamsResource: k,
                            filtersResource: U,
                            ugcResource: M,
                            collectionResource: G,
                            adsResource: V,
                            personalResource: K,
                            familyResource: F,
                            childrenLandingResource: Y,
                            promoResource: X,
                            telemetryResource: $,
                            labelsResource: J,
                            concertsResource: z,
                            wordsResource: e.get(s.dA),
                            wheelResource: e.get(s.$Y),
                        };
                    })(),
                    u = (0, n.U)(),
                    _ = (0, a.N)().get(s.TK),
                    h = e.get(s.ni),
                    m = new i.si(),
                    E = new i.fW();
                return {
                    ...c,
                    acqOffers: r,
                    disclaimerDictionary: l,
                    logger: u,
                    modelActionsLogger: _,
                    localStorage: m,
                    sessionStorage: E,
                    containerStorage: t,
                    config: o,
                    clientSafeConfig: d,
                    landingSdk: h,
                };
            };
        },
        33898: (e, t, r) => {
            'use strict';
            var i;
            (r.d(t, { Z: () => i }),
                (function (e) {
                    ((e.METHOD_NOT_SUPPORTED = 'E_BEACON_METHOD_NOT_SUPPORTED'),
                        (e.NOT_AVAILABLE = 'E_BEACON_NOT_AVAILABLE'),
                        (e.QUEUE_FAILED = 'E_BEACON_QUEUE_FAILED'),
                        (e.NO_RESPONSE_DATA = 'E_BEACON_NO_RESPONSE_DATA'),
                        (e.RETRY_EXHAUSTED = 'E_BEACON_RETRY_EXHAUSTED'));
                })(i || (i = {})));
        },
        41582: (e, t, r) => {
            'use strict';
            (r.r(t), r.d(t, { default: () => O }));
            var i = r(32290),
                s = r(21916),
                a = r(55178),
                n = r(49259),
                l = r(45066),
                o = r(60754),
                d = r(87953),
                c = r(49399),
                u = r(68243),
                _ = r(73715);
            let h = o.gK
                    .compose(
                        o.gK.model('PlaylistPersonalPage', {
                            errorStatusCode: o.gK.maybeNull(o.gK.number),
                            playlistUuid: o.gK.maybe(o.gK.string),
                            isReady: o.gK.optional(o.gK.boolean, !1),
                            dummyCoverUrl: o.gK.maybe(o.gK.string),
                            dummyDescription: o.gK.maybe(o.gK.string),
                            title: o.gK.maybe(o.gK.string),
                        }),
                        _.X,
                    )
                    .views((e) => ({
                        getUrl(t) {
                            if (!e.playlistUuid) return '';
                            let { href: r } = (0, u.u)('/playlists/:playlistUuid', { params: { playlistUuid: e.playlistUuid }, query: t });
                            return r;
                        },
                        get url() {
                            if (!e.playlistUuid) return '';
                            let { href: t } = (0, u.u)('/playlists/:playlistUuid', { params: { playlistUuid: e.playlistUuid } });
                            return t;
                        },
                        get isNotFound() {
                            let t = e.errorStatusCode === d.X1.NOT_FOUND || e.errorStatusCode === d.X1.BAD_REQUEST;
                            return e.loadingState === c.G.REJECT && t;
                        },
                    }))
                    .actions((e) => ({
                        getPlaylistPersonalDetails: (0, o.L3)(function* (t) {
                            if (!(0, o._n)(e)) return;
                            let { playlistsResource: r, modelActionsLogger: i } = (0, o._$)(e);
                            if (e.loadingState !== c.G.PENDING)
                                try {
                                    var s, a;
                                    e.loadingState = c.G.PENDING;
                                    let i = yield r.getPlaylistPersonal({ playlistId: t });
                                    if ((null == (s = i.error) ? void 0 : s.name) === 'no-such-playlist') {
                                        ((e.errorStatusCode = d.X1.NOT_FOUND), (e.loadingState = c.G.REJECT));
                                        return;
                                    }
                                    ((e.isReady = i.ready),
                                        (e.playlistUuid = i.data.playlistUuid),
                                        (e.dummyCoverUrl = null == (a = i.data.dummyCover) ? void 0 : a.uri),
                                        (e.dummyDescription = i.data.dummyDescription),
                                        (e.title = i.data.title),
                                        e.loadingState !== c.G.IDLE && (e.loadingState = c.G.RESOLVE));
                                } catch (t) {
                                    (i.error(t),
                                        t instanceof d.GX &&
                                            (t.statusCode === d.X1.NOT_FOUND || t.statusCode === d.X1.BAD_REQUEST) &&
                                            (e.errorStatusCode = d.X1.NOT_FOUND),
                                        e.loadingState !== c.G.IDLE && (e.loadingState = c.G.REJECT));
                                }
                        }),
                        reset() {
                            ((e.loadingState = c.G.IDLE),
                                (e.errorStatusCode = null),
                                (e.isReady = !1),
                                (e.playlistUuid = void 0),
                                (e.dummyCoverUrl = void 0),
                                (e.dummyDescription = void 0),
                                (e.title = void 0));
                        },
                    })),
                m = { loadingState: c.G.IDLE },
                { pageStoreProvider: E } = (0, n.W)({ createStore: (e) => h.create(m, e), patchKey: l.n.PLAYLIST_PERSONAL });
            var p = r(96103),
                g = r(3796),
                v = r(63618),
                T = r(71926),
                N = r(11323),
                S = r(74694),
                y = r(56589),
                f = r.n(y);
            let x = (0, p.PA)(() => {
                    let { dummyCoverUrl: e, dummyDescription: t, title: r } = (0, n.s)(l.n.PLAYLIST_PERSONAL);
                    return (0, i.jsxs)('div', {
                        className: f().root,
                        children: [
                            (0, i.jsx)(S.Y, {}),
                            (0, i.jsx)(N.B, { src: e, size: 200, fit: 'cover', withAvatarReplace: !0, 'aria-hidden': !0, className: f().cover }),
                            r && (0, i.jsx)(T.DZ, { className: (0, v.$)(f().title, f().important), variant: 'h1', size: 'xs', children: r }),
                            t &&
                                (0, i.jsx)(T.HL, {
                                    className: (0, v.$)(f().text, f().important),
                                    variant: 'span',
                                    type: 'text',
                                    size: 'l',
                                    weight: 'normal',
                                    children: t,
                                }),
                        ],
                    });
                }),
                P = (0, p.PA)((e) => {
                    let { params: t, searchParams: r } = e,
                        o = (0, n.s)(l.n.PLAYLIST_PERSONAL),
                        d = o.getUrl(r);
                    if (
                        ((0, a.useEffect)(() => {
                            o.isNeededToLoad && o.getPlaylistPersonalDetails(t.playlistId);
                        }, [o.isNeededToLoad, t.playlistId, o]),
                        (0, a.useEffect)(
                            () => () => {
                                o.reset();
                            },
                            [o],
                        ),
                        (0, g.J)(o.isResolved),
                        (o.isNotFound || o.isRejected) && (0, s.notFound)(),
                        o.isResolved && !o.isReady)
                    )
                        return (o.dummyDescription || (0, s.notFound)(), (0, i.jsx)(x, {}));
                    o.isResolved && o.isReady && (0, s.redirect)(d);
                });
            var w = r(9634);
            let O = () => {
                let e = (0, s.useSearchParams)().get('playlistId');
                return (
                    e || (0, s.notFound)(),
                    (0, i.jsx)(E, {
                        children: (0, i.jsx)(a.Suspense, { fallback: (0, i.jsx)(w.MainSuspenseLoader, {}), children: (0, i.jsx)(P, { params: { playlistId: e } }) }),
                    })
                );
            };
        },
        42406: (e, t, r) => {
            'use strict';
            r.d(t, { BL: () => c, Gv: () => o, L5: () => d });
            var i,
                s = r(55178),
                a = {
                    597: (e, t, r) => {
                        (Object.defineProperty(t, '__esModule', { value: !0 }),
                            (t.useIntersectionObserver = t.createIntersectionObserver = t.getElementNameByDataAttribute = t.isInViewportNow = t.defaultOptions = void 0));
                        let i = r(810),
                            { innerWidth: s = 0, innerHeight: a = 0 } = window;
                        function n(e) {
                            let { top: t, right: r, bottom: i, left: n } = e.getBoundingClientRect();
                            return ((t >= 0 && t <= a) || (i >= 0 && i <= a)) && ((n >= 0 && n <= s) || (r >= 0 && r <= s));
                        }
                        function l(e) {
                            var t, r;
                            let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 'data-intersection-property-id';
                            return null != (r = null == e || null == (t = e.getAttribute) ? void 0 : t.call(e, i)) ? r : e.attributes[0];
                        }
                        function o(e, t) {
                            let r = new IntersectionObserver((t) => {
                                t.forEach((t) => {
                                    e(t, r);
                                });
                            }, t);
                            return r;
                        }
                        ((t.defaultOptions = { threshold: 0, preflightCheck: !0 }),
                            (t.isInViewportNow = n),
                            (t.getElementNameByDataAttribute = l),
                            (t.createIntersectionObserver = o),
                            (t.useIntersectionObserver = function (e, r, s) {
                                let [{ freezeOnceVisible: a, preflightCheck: d, ...c }, u = !1] =
                                        'boolean' == typeof r || void 0 === r ? [t.defaultOptions, r] : [{ ...t.defaultOptions, ...r }, s],
                                    [_, h] = (0, i.useState)({}),
                                    m = (0, i.useRef)(new Set()),
                                    E = (0, i.useMemo)(
                                        () =>
                                            u
                                                ? null
                                                : o((e) => {
                                                      let t = l(e.target);
                                                      if (t && E) {
                                                          if (m.current.has(t)) return;
                                                          (h((r) => ({ ...r, [t]: { isIntersecting: e.isIntersecting } })),
                                                              a && e.isIntersecting && (m.current.add(t), E.unobserve(e.target)));
                                                      }
                                                  }, c),
                                        [u],
                                    );
                                return (
                                    (0, i.useLayoutEffect)(
                                        () => (
                                            E &&
                                                !u &&
                                                e.forEach((e) => {
                                                    if (e.current) {
                                                        let t = !1;
                                                        if (d && (t = n(e.current))) {
                                                            let t = l(e.current);
                                                            h((e) => ({ ...e, [t]: { isIntersecting: !0 } }));
                                                        }
                                                        t || E.observe(e.current);
                                                    }
                                                }),
                                            () => {
                                                E && E.disconnect();
                                            }
                                        ),
                                        [u, E, e.length],
                                    ),
                                    _
                                );
                            }));
                    },
                    810: (e) => {
                        e.exports = i || (i = r.t(s, 2));
                    },
                },
                n = {},
                l = (function e(t) {
                    var r = n[t];
                    if (void 0 !== r) return r.exports;
                    var i = (n[t] = { exports: {} });
                    return (a[t](i, i.exports, e), i.exports);
                })(597);
            l.__esModule;
            var o = l.createIntersectionObserver;
            l.defaultOptions;
            var d = l.getElementNameByDataAttribute;
            l.isInViewportNow;
            var c = l.useIntersectionObserver;
        },
        45066: (e, t, r) => {
            'use strict';
            r.d(t, { n: () => i });
            let i = {
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
        45155: (e, t, r) => {
            Promise.resolve().then(r.bind(r, 41582));
        },
        47584: (e) => {
            e.exports = {
                staticItem: 'TextHeader_staticItem__OMNew',
                staticItem_hide: 'TextHeader_staticItem_hide__JtdeC',
                backdrop: 'TextHeader_backdrop__39FkE',
                stickyItem: 'TextHeader_stickyItem__WF2hh',
                container: 'TextHeader_container__I0pVO',
                stickyItem_scrolling: 'TextHeader_stickyItem_scrolling__YPBOL',
            };
        },
        48870: (e) => {
            e.exports = {
                title: 'InnerHeader_title__5aVLP',
                title_show: 'InnerHeader_title_show__RvHsQ',
                show: 'InnerHeader_show__ji3KF',
                backdrop: 'InnerHeader_backdrop__iRxvk',
                root: 'InnerHeader_root__u0zu1',
                root_withChildren: 'InnerHeader_root_withChildren__rLTCN',
                root_sticky: 'InnerHeader_root_sticky__baN8o',
                child: 'InnerHeader_child__DGTfK',
                child_show: 'InnerHeader_child_show__7MFTV',
                actions: 'InnerHeader_actions__x6ruG',
                plusButton: 'InnerHeader_plusButton__eH4NP',
                plusButton_show: 'InnerHeader_plusButton_show__jwPtB',
            };
        },
        49259: (e, t, r) => {
            'use strict';
            r.d(t, { W: () => p, s: () => g });
            var i = r(32290),
                s = r(96103),
                a = r(21916),
                n = r(55178),
                l = r(85472),
                o = r(25090),
                d = r(96218),
                c = r(5245),
                u = r(57594),
                _ = r(31726);
            (0, s.eO)(!1);
            let h = (0, n.createContext)(null),
                m = (e) => {
                    let { children: t, store: r, storeKey: s } = e,
                        a = (0, n.useMemo)(() => ({ store: r, storeKey: s }), [r, s]);
                    return (0, i.jsx)(h.Provider, { value: a, children: t });
                },
                E = (e) => {
                    let { nonce: t, patchKey: r, patchesRef: s } = e;
                    return (
                        (0, a.useServerInsertedHTML)(() => {
                            let e = s.current;
                            return ((s.current = []), 0 === e.length)
                                ? null
                                : (0, i.jsx)('script', {
                                      dangerouslySetInnerHTML: {
                                          __html: ((e, t) =>
                                              "\n        window.__PAGE_STATE_PATCHES__ = window.__PAGE_STATE_PATCHES__ || {};\n        window.__PAGE_STATE_PATCHES__['"
                                                  .concat(e, "'] =\n            window.__PAGE_STATE_PATCHES__['")
                                                  .concat(e, "'] || [];\n        window.__PAGE_STATE_PATCHES__['")
                                                  .concat(e, "'].push(")
                                                  .concat((0, l.stringifyJSONSafely)(t), ");\n        window.dispatchEvent(new Event('")
                                                  .concat(d.O, "'));\n    "))(r, e),
                                      },
                                      nonce: null != t ? t : void 0,
                                  });
                        }),
                        null
                    );
                },
                p = (e) => {
                    let { createStore: t, patchKey: r } = e,
                        s = () => {
                            var e, t;
                            let i = null != (t = null == (e = window.__PAGE_STATE_PATCHES__) ? void 0 : e[r]) ? t : [];
                            return (window.__PAGE_STATE_PATCHES__ && delete window.__PAGE_STATE_PATCHES__[r], i);
                        };
                    return {
                        pageStoreProvider: (e) => {
                            let { children: a, nonce: n } = e,
                                l = (0, _.Y)(),
                                o = (0, u.g)(),
                                { store: h, patchesRef: p } = (0, c.m)({
                                    createStore: () => t({ ...l, rootStore: o }),
                                    getPendingPatchBatches: s,
                                    patchesUpdatedEventName: d.O,
                                });
                            return (0, i.jsxs)(i.Fragment, {
                                children: [(0, i.jsx)(E, { nonce: n, patchKey: r, patchesRef: p }), (0, i.jsx)(m, { store: h, storeKey: r, children: a })],
                            });
                        },
                    };
                };
            function g(e) {
                let { throwOnAbsence: t = !0 } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    r = (0, n.useContext)(h);
                if (!r || r.storeKey !== e) {
                    var i;
                    if (!t) return null;
                    throw new o.t('Page store context is missing or has unexpected key', {
                        code: 'E_CONTEXT_PAGE_STORE_NULL',
                        data: { actualStoreKey: null != (i = null == r ? void 0 : r.storeKey) ? i : 'null', expectedStoreKey: e },
                    });
                }
                return r.store;
            }
        },
        50396: (e) => {
            e.exports = {
                root: 'StickyHeader_root__s_rPg',
                backdrop: 'StickyHeader_backdrop__fCnOw',
                container: 'StickyHeader_container__8mTBx',
                container_scrolling: 'StickyHeader_container_scrolling__nV9EK',
                plusButton: 'StickyHeader_plusButton__80nx5',
                plusButton_show: 'StickyHeader_plusButton_show__lN22Y',
                children: 'StickyHeader_children__5Jlr1',
            };
        },
        50891: (e, t, r) => {
            'use strict';
            r.d(t, { m: () => a });
            var i = r(91945),
                s = r(25090);
            class a extends s.t {
                constructor(e = 'Http Client error', { code: t = 'E_HTTP_CLIENT', ...r } = {}) {
                    (super(e, { code: t, ...r }), (0, i._)(this, 'name', 'HttpException'), Object.setPrototypeOf(this, a.prototype));
                }
            }
        },
        50961: (e, t, r) => {
            'use strict';
            var i;
            (r.d(t, { X: () => i }),
                (function (e) {
                    ((e[(e.NOT_MODIFIED = 304)] = 'NOT_MODIFIED'),
                        (e[(e.NOT_FOUND = 404)] = 'NOT_FOUND'),
                        (e[(e.BAD_REQUEST = 400)] = 'BAD_REQUEST'),
                        (e[(e.REQUEST_TIMEOUT = 408)] = 'REQUEST_TIMEOUT'),
                        (e[(e.PRECONDITION_FAILED = 412)] = 'PRECONDITION_FAILED'),
                        (e[(e.TEAPOT = 418)] = 'TEAPOT'));
                })(i || (i = {})));
        },
        54280: (e, t, r) => {
            'use strict';
            r.d(t, { V8: () => a, si: () => l, fW: () => _, MJ: () => u, jU: () => m, Bx: () => h });
            var i = r(78061);
            function s(e) {
                if (!e) return null;
                try {
                    return JSON.parse(e);
                } catch (e) {
                    return (console.error(e), null);
                }
            }
            class a {
                get(e) {
                    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
                    try {
                        let n = (0, i.Jt)(e);
                        if (t) {
                            var r, a;
                            return null != (a = null == (r = s(n)) ? void 0 : r.value) ? a : null;
                        }
                        return null != n ? n : null;
                    } catch (e) {
                        return null;
                    }
                }
                set(e, t, r) {
                    let s = !(arguments.length > 3) || void 0 === arguments[3] || arguments[3];
                    try {
                        let a = s ? JSON.stringify({ value: t }) : t;
                        (0, i.hZ)(e, a, r);
                    } catch (e) {
                        console.error(e);
                    }
                }
                has(e) {
                    return null !== this.get(e, !1);
                }
                remove(e) {
                    try {
                        (0, i.TF)(e);
                    } catch (e) {}
                }
            }
            function n(e) {
                try {
                    var t;
                    return null != (t = window[e]) ? t : null;
                } catch (e) {
                    return null;
                }
            }
            class l {
                get(e) {
                    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
                        r = n('localStorage');
                    if (!r) return null;
                    try {
                        var i;
                        let a = r.getItem(e) || void 0;
                        if (!t) return a;
                        let n = s(a);
                        if (!n) return null;
                        let l = null != (i = null == n ? void 0 : n.value) ? i : null;
                        if ((null == n ? void 0 : n.expires) && Date.now() > new Date(n.expires).getTime()) return (this.remove(e), null);
                        return l;
                    } catch (e) {
                        return null;
                    }
                }
                set(e, t, r) {
                    if ('number' == typeof (null == r ? void 0 : r.expires)) {
                        let e = new Date();
                        (e.setMilliseconds(e.getMilliseconds() + 864e5 * r.expires), (r.expires = e));
                    }
                    let i = n('localStorage');
                    if (i)
                        try {
                            i.setItem(e, JSON.stringify({ value: t, ...r }));
                        } catch (e) {}
                }
                has(e) {
                    return null !== this.get(e);
                }
                remove(e) {
                    let t = n('localStorage');
                    if (t)
                        try {
                            t.removeItem(e);
                        } catch (e) {}
                }
            }
            var o = r(91945),
                d = r(25090);
            class c extends d.t {
                constructor(e, t, { code: r = 'E_STORAGE', ...i } = {}) {
                    (super('There is no '.concat(t, ' storage on the ').concat(e, ' platform'), { code: r, ...i }),
                        (0, o._)(this, 'name', 'Storage Exception'),
                        Object.setPrototypeOf(this, c.prototype));
                }
            }
            class u {
                get(e) {
                    throw new c(this.platform, this.type);
                }
                set(e, t, r) {
                    throw new c(this.platform, this.type);
                }
                has(e) {
                    throw new c(this.platform, this.type);
                }
                remove(e) {
                    throw new c(this.platform, this.type);
                }
                constructor(e, t) {
                    ((0, o._)(this, 'platform', ''), (0, o._)(this, 'type', ''), (this.platform = e), (this.type = t));
                }
            }
            class _ {
                get(e) {
                    let t = n('sessionStorage');
                    if (!t) return null;
                    try {
                        var r, i, a;
                        let n = null != (i = t.getItem(e)) ? i : void 0;
                        return null != (a = null == (r = s(n)) ? void 0 : r.value) ? a : null;
                    } catch (e) {
                        return null;
                    }
                }
                set(e, t) {
                    let r = n('sessionStorage');
                    if (r)
                        try {
                            r.setItem(e, JSON.stringify({ value: t }));
                        } catch (e) {}
                }
                has(e) {
                    return null !== this.get(e);
                }
                remove(e) {
                    let t = n('sessionStorage');
                    if (t)
                        try {
                            t.removeItem(e);
                        } catch (e) {}
                }
            }
            function h(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
                Array.isArray(t) &&
                    t.forEach((t) => {
                        let r = 'object' != typeof t ? t : t.name,
                            i = 'object' != typeof t ? { expires: 365 } : t.options || { expires: 365 },
                            s = e.get(r);
                        null != s && e.set(r, s, i);
                    });
            }
            function m(e) {
                let { name: t, group: r, value: i } = e;
                return i && 0 !== Object.keys(i).length
                    ? i.title
                        ? { [t]: { group: r, value: { ...i, title: r } } }
                        : { [t]: { group: r, value: { title: r, value: i } } }
                    : { [t]: { group: r, value: { title: r } } };
            }
        },
        56589: (e) => {
            e.exports = {
                root: 'PlaylistPersonalDummyPage_root__tGxHG',
                cover: 'PlaylistPersonalDummyPage_cover__XcCD1',
                title: 'PlaylistPersonalDummyPage_title__ZSf9O',
                important: 'PlaylistPersonalDummyPage_important__uEHGe',
                text: 'PlaylistPersonalDummyPage_text__ci30d',
            };
        },
        57594: (e, t, r) => {
            'use strict';
            r.d(t, { P: () => a, g: () => n });
            var i = r(55178),
                s = r(25090);
            let a = (0, i.createContext)(null);
            function n() {
                let e = (0, i.useContext)(a);
                if (null === e) throw new s.t('Store cannot be null, please add a context provider', { code: 'E_CONTEXT_STORE_NULL' });
                return e;
            }
        },
        62376: (e, t, r) => {
            'use strict';
            r.d(t, { U: () => a });
            var i = r(70204),
                s = r(34186);
            let a = () => (0, s.N)().get(i.Zf);
        },
        73715: (e, t, r) => {
            'use strict';
            r.d(t, { X: () => a });
            var i = r(60754),
                s = r(49399);
            let a = i.gK.model('LoadingState', { loadingState: i.gK.enumeration(Object.values(s.G)) }).views((e) => ({
                get isNeededToLoad() {
                    return e.loadingState === s.G.IDLE;
                },
                get isLoading() {
                    return e.loadingState === s.G.PENDING;
                },
                get isResolved() {
                    return e.loadingState === s.G.RESOLVE;
                },
                get isRejected() {
                    return e.loadingState === s.G.REJECT;
                },
            }));
        },
        74694: (e, t, r) => {
            'use strict';
            r.d(t, { Y: () => Y, V: () => F });
            var i = r(32290),
                s = r(96103),
                a = r(71768),
                n = r(27246),
                l = r(24116),
                o = r(63618),
                d = r(55178),
                c = r(21732),
                u = r(91027),
                _ = r(54862),
                h = r(71926),
                m = r(98740),
                E = r(57594),
                p = r(15509),
                g = r(12894),
                v = r(81471),
                T = r.n(v),
                N = r(85377),
                S = r(18518),
                y = r.n(S);
            let f = 'header-block-controls',
                x = (0, s.PA)((e) => {
                    let { showControls: t = !0, ...r } = e,
                        { isScrolledTitle: s, isScrolledChild: a, isScrolling: n, title: l, titleElement: v, child: S, childElement: x } = (0, d.useContext)(N.B),
                        {
                            settings: { isMobile: P, browserInfo: w },
                            user: { hasPlus: O, isAuthorized: I },
                        } = (0, E.g)(),
                        [C, A] = (0, _.d)(),
                        b = !O && !(null == w ? void 0 : w.isTouch),
                        {
                            openPaymentWidgetModal: R,
                            saveOfferAndAuthorize: H,
                            isShimmerActive: L,
                            isShimmerVisible: D,
                            mainText: B,
                            mainTextA11y: j,
                        } = (0, m.D)({ storeName: 'music', isEnabled: !O, offerElement: { element: C, intersectionPropertyId: f, isVisible: s, requireTransition: !0 } }),
                        k = (0, u.c)(() => {
                            var e;
                            null == v || null == (e = v.current) || e.scrollIntoView({ block: 'center', behavior: 'smooth' });
                        }),
                        U = (0, u.c)(() => {
                            var e;
                            null == x || null == (e = x.current) || e.scrollIntoView({ block: 'center', behavior: 'smooth' });
                        }),
                        M = (0, u.c)(() => {
                            if (!I) return void H();
                            R();
                        });
                    return (0, i.jsx)('header', {
                        className: (0, o.$)(y().root, { [y().root_sticky]: n, [y().root_withChildren]: a, [y().root_blurWithTitle]: !s }),
                        'data-test-id': c.S7.BRANDED_PLAYLIST_HEADER,
                        ...r,
                        children: (0, i.jsx)('div', {
                            className: y().header,
                            children: (0, i.jsxs)('div', {
                                className: (0, o.$)(y().container, { [y().container_withMultipleChildren]: (0, d.isValidElement)(S) }),
                                children: [
                                    (0, i.jsx)('div', { className: y().backdrop }),
                                    (0, i.jsxs)('div', {
                                        className: y().leftBlock,
                                        children: [
                                            t && (0, i.jsx)(g.L, { withForwardControl: !P, className: y().actions }),
                                            s &&
                                                (0, i.jsxs)(i.Fragment, {
                                                    children: [
                                                        (0, i.jsx)(h.HL, {
                                                            variant: 'div',
                                                            type: 'text',
                                                            className: (0, o.$)(y().title, { [y().title_show]: s, [y().title_withOffset]: t }),
                                                            lineClamp: 1,
                                                            onClick: k,
                                                            title: n && l ? l : '',
                                                            'aria-hidden': !0,
                                                            children: l,
                                                        }),
                                                        b &&
                                                            (0, i.jsx)(p.b, {
                                                                mainText: B,
                                                                ariaLabel: j,
                                                                mainTextFontSize: 'm',
                                                                ref: A,
                                                                onClick: M,
                                                                isShimmerActive: L,
                                                                isShimmerVisible: D,
                                                                className: T().plusButton,
                                                                'data-intersection-property-id': f,
                                                                'data-test-id': c.S7.HEADER_PLUS_BUTTON,
                                                            }),
                                                    ],
                                                }),
                                        ],
                                    }),
                                    (0, d.isValidElement)(S) &&
                                        (0, i.jsx)('div', { onClick: U, className: (0, o.$)(y().child, { [y().child_show]: a }), 'aria-hidden': !0, children: S }),
                                ],
                            }),
                        }),
                    });
                });
            var P = r(50396),
                w = r.n(P);
            let O = 'header-block-controls',
                I = (e) => {
                    let { className: t, children: r, onClick: s, 'aria-hidden': a, 'data-test-id': n } = e,
                        { isScrolling: l } = (0, d.useContext)(N.B),
                        {
                            user: { hasPlus: h, isAuthorized: g },
                            settings: { browserInfo: v },
                        } = (0, E.g)(),
                        S = !h && !(null == v ? void 0 : v.isTouch),
                        [y, f] = (0, _.d)(),
                        {
                            openPaymentWidgetModal: x,
                            saveOfferAndAuthorize: P,
                            isShimmerActive: I,
                            isShimmerVisible: C,
                            mainText: A,
                            mainTextA11y: b,
                        } = (0, m.D)({ storeName: 'music', isEnabled: !h, offerElement: { element: y, intersectionPropertyId: O, isVisible: l, requireTransition: !0 } }),
                        R = (0, u.c)(() => {
                            if (!g) return void P();
                            x();
                        });
                    return (0, i.jsx)('div', {
                        className: w().root,
                        children: (0, i.jsxs)('div', {
                            className: (0, o.$)(w().container, { [w().container_scrolling]: l }, t),
                            onClick: s,
                            'aria-hidden': a,
                            'data-test-id': c.S7.STICKY_HEADER,
                            children: [
                                (0, i.jsx)('div', { className: w().backdrop }),
                                (0, i.jsx)('div', { className: w().children, 'data-test-id': n, children: r }),
                                S &&
                                    (0, i.jsx)(p.b, {
                                        mainText: A,
                                        ariaLabel: b,
                                        mainTextFontSize: 'm',
                                        ref: f,
                                        onClick: R,
                                        isShimmerActive: I,
                                        isShimmerVisible: C,
                                        className: (0, o.$)(T().plusButton, w().plusButton, { [w().plusButton_show]: l }),
                                        'data-intersection-property-id': O,
                                        'data-test-id': c.S7.HEADER_PLUS_BUTTON,
                                    }),
                            ],
                        }),
                    });
                };
            var C = r(98610),
                A = r.n(C);
            let b = (0, s.PA)((e) => {
                let {
                        className: t,
                        children: r,
                        stickyChild: s,
                        isScrolledToTop: a = !0,
                        staticClassName: n,
                        stickyClassName: l,
                        compositeHeaderRef: u,
                        'aria-hidden': _,
                    } = e,
                    { isScrolling: h, scrollElement: m } = (0, d.useContext)(N.B),
                    E = (0, d.useRef)(null),
                    p = (0, d.useCallback)(() => {
                        if (m && a) m.scrollTo({ top: 0, behavior: 'smooth' });
                        else {
                            var e;
                            null == E || null == (e = E.current) || e.scrollIntoView({ block: 'center', behavior: 'smooth' });
                        }
                    }, [E, m, a]);
                return (0, i.jsxs)('header', {
                    className: (0, o.$)(A().root, t),
                    'aria-hidden': _,
                    ref: u,
                    'data-test-id': c.S7.COMPOSITE_HEADER_CONTAINER,
                    children: [
                        (0, i.jsx)('div', { className: (0, o.$)(A().static, { [A().static_hidden]: h }, n), ref: E, 'data-test-id': c.S7.COMPOSITE_HEADER, children: r }),
                        (0, i.jsx)(I, { className: l, onClick: p, 'aria-hidden': !0, 'data-test-id': c.S7.COMPOSITE_STICKY_HEADER, children: s }),
                    ],
                });
            });
            var R = r(48870),
                H = r.n(R);
            let L = 'header-block-controls',
                D = (0, s.PA)((e) => {
                    let { headerRef: t, ...r } = e,
                        { isScrolledTitle: s, isScrolledChild: a, isScrolling: n, title: l, titleElement: v, child: S, childElement: y } = (0, d.useContext)(N.B),
                        {
                            settings: { isMobile: f, browserInfo: x },
                            user: { hasPlus: P, isAuthorized: w },
                        } = (0, E.g)(),
                        [O, I] = (0, _.d)(),
                        C = !P && !(null == x ? void 0 : x.isTouch),
                        {
                            openPaymentWidgetModal: A,
                            saveOfferAndAuthorize: b,
                            isShimmerActive: R,
                            isShimmerVisible: D,
                            mainText: B,
                            mainTextA11y: j,
                        } = (0, m.D)({ storeName: 'music', isEnabled: !P, offerElement: { element: O, intersectionPropertyId: L, isVisible: s, requireTransition: !0 } }),
                        k = (0, u.c)(() => {
                            var e;
                            null == v || null == (e = v.current) || e.scrollIntoView({ block: 'center', behavior: 'smooth' });
                        }),
                        U = (0, u.c)(() => {
                            var e;
                            null == y || null == (e = y.current) || e.scrollIntoView({ block: 'center', behavior: 'smooth' });
                        }),
                        M = (0, u.c)(() => {
                            if (!w) return void b();
                            A();
                        });
                    return (0, i.jsx)('header', {
                        className: (0, o.$)(T().inner, H().root, { [H().root_sticky]: n, [H().root_withChildren]: a }),
                        ref: t,
                        'data-test-id': c.S7.INNER_HEADER,
                        ...r,
                        children: (0, i.jsx)('div', {
                            className: T().header,
                            children: (0, i.jsxs)('div', {
                                className: T().container,
                                children: [
                                    (0, i.jsx)('div', { className: H().backdrop }),
                                    (0, i.jsxs)('div', {
                                        className: T().leftBlock,
                                        children: [
                                            (0, i.jsx)(g.L, { withForwardControl: !f, className: H().actions }),
                                            (0, i.jsx)(h.HL, {
                                                variant: 'div',
                                                type: 'text',
                                                className: (0, o.$)(T().title, H().title, { [H().title_show]: s }),
                                                lineClamp: 1,
                                                onClick: k,
                                                title: n && l ? l : '',
                                                'aria-hidden': !0,
                                                children: l,
                                            }),
                                            C &&
                                                (0, i.jsx)(p.b, {
                                                    mainText: B,
                                                    ariaLabel: j,
                                                    mainTextFontSize: 'm',
                                                    ref: I,
                                                    onClick: M,
                                                    isShimmerActive: R,
                                                    isShimmerVisible: D,
                                                    className: (0, o.$)(T().plusButton, H().plusButton, { [H().plusButton_show]: s }),
                                                    'data-intersection-property-id': L,
                                                    'data-test-id': c.S7.HEADER_PLUS_BUTTON,
                                                }),
                                        ],
                                    }),
                                    (0, i.jsx)('div', { onClick: U, className: (0, o.$)(H().child, { [H().child_show]: a }), 'aria-hidden': !0, children: S }),
                                ],
                            }),
                        }),
                    });
                });
            var B = r(86838),
                j = r.n(B);
            let k = 'header-block-controls',
                U = (e) => {
                    let { style: t } = e,
                        { isScrolling: r, title: s, titleElement: a, isScrolledTitle: n } = (0, d.useContext)(N.B),
                        {
                            user: { hasPlus: l, isAuthorized: g },
                            settings: { browserInfo: v },
                        } = (0, E.g)(),
                        S = !l && !(null == v ? void 0 : v.isTouch),
                        [y, f] = (0, _.d)(),
                        {
                            openPaymentWidgetModal: x,
                            saveOfferAndAuthorize: P,
                            isShimmerActive: w,
                            isShimmerVisible: O,
                            mainText: I,
                            mainTextA11y: C,
                        } = (0, m.D)({ storeName: 'music', isEnabled: !l, offerElement: { element: y, intersectionPropertyId: k, isVisible: n, requireTransition: !0 } }),
                        A = (0, u.c)(() => {
                            var e;
                            null == a || null == (e = a.current) || e.scrollIntoView({ block: 'center', behavior: 'smooth' });
                        }),
                        b = (0, u.c)(() => {
                            if (!g) return void P();
                            x();
                        });
                    return (0, i.jsx)('header', {
                        className: (0, o.$)(T().inner, j().root, { [j().root_visible]: n }),
                        style: t,
                        'data-test-id': c.S7.PROMO_LANDING_HEADER,
                        children: (0, i.jsx)('div', {
                            className: T().header,
                            children: (0, i.jsxs)('div', {
                                className: (0, o.$)(T().container, j().container),
                                children: [
                                    (0, i.jsx)('div', { className: j().backdrop }),
                                    (0, i.jsxs)('div', {
                                        className: T().leftBlock,
                                        children: [
                                            (0, i.jsx)(h.HL, {
                                                variant: 'div',
                                                type: 'text',
                                                className: (0, o.$)(T().title, j().title),
                                                lineClamp: 1,
                                                onClick: A,
                                                title: r && s ? s : '',
                                                'aria-hidden': !0,
                                                children: s,
                                            }),
                                            S &&
                                                (0, i.jsx)(p.b, {
                                                    mainText: I,
                                                    ariaLabel: C,
                                                    mainTextFontSize: 'm',
                                                    ref: f,
                                                    onClick: b,
                                                    isShimmerActive: w,
                                                    isShimmerVisible: O,
                                                    className: T().plusButton,
                                                    'data-intersection-property-id': k,
                                                    'data-test-id': c.S7.HEADER_PLUS_BUTTON,
                                                }),
                                        ],
                                    }),
                                ],
                            }),
                        }),
                    });
                };
            var M = r(47584),
                G = r.n(M);
            let V = 'header-block-controls',
                K = (0, s.PA)((e) => {
                    let { className: t, children: r, showControls: s = !0, withForwardControl: a = !0, withBackwardControl: n = !0, disableStickyVariant: l = !1 } = e,
                        { isScrolling: v, title: S, scrollElement: y, isHeaderHidden: f } = (0, d.useContext)(N.B),
                        x = (0, d.useRef)(null),
                        [P, w] = (0, _.d)(),
                        {
                            user: { hasPlus: O, isAuthorized: I },
                            settings: { browserInfo: C },
                        } = (0, E.g)(),
                        A = !O && !(null == C ? void 0 : C.isTouch),
                        {
                            openPaymentWidgetModal: b,
                            saveOfferAndAuthorize: R,
                            isShimmerActive: H,
                            isShimmerVisible: L,
                            mainText: D,
                            mainTextA11y: B,
                        } = (0, m.D)({ storeName: 'music', isEnabled: !O, offerElement: { element: P, intersectionPropertyId: V, isVisible: v, requireTransition: !0 } }),
                        j = (0, u.c)(() => {
                            if (y) y.scrollTo({ top: 0, behavior: 'smooth' });
                            else {
                                var e;
                                null == x || null == (e = x.current) || e.scrollIntoView({ block: 'center', behavior: 'smooth' });
                            }
                        }),
                        k = (0, d.useMemo)(() => (0, i.jsx)(h.DZ, { variant: 'h2', weight: 'bold', size: 's', lineClamp: 1, children: S }), [S]),
                        U = s && (a || n),
                        M = (0, u.c)(() => {
                            if (!I) return void R();
                            b();
                        });
                    return (0, i.jsxs)('header', {
                        className: (0, o.$)(G().root, t),
                        'data-test-id': c.S7.TEXT_HEADER_CONTAINER,
                        children: [
                            (0, i.jsxs)('div', {
                                className: (0, o.$)(G().staticItem, { [G().staticItem_hide]: v || f }),
                                ref: x,
                                'data-test-id': c.S7.TEXT_HEADER,
                                children: [U && (0, i.jsx)(g.L, { withForwardControl: a, withBackwardControl: n }), r],
                            }),
                            !l &&
                                (0, i.jsxs)('div', {
                                    className: (0, o.$)(G().stickyItem, { [G().stickyItem_scrolling]: v }),
                                    onClick: j,
                                    'aria-hidden': !0,
                                    'data-test-id': c.S7.TEXT_STICKY_HEADER,
                                    children: [
                                        (0, i.jsx)('div', { className: G().backdrop }),
                                        (0, i.jsxs)('div', {
                                            className: G().container,
                                            children: [U && (0, i.jsx)(g.L, { withForwardControl: a, withBackwardControl: n, shouldFocusOnMount: !1 }), k],
                                        }),
                                        A &&
                                            (0, i.jsx)(p.b, {
                                                mainText: D,
                                                ariaLabel: B,
                                                mainTextFontSize: 'm',
                                                ref: w,
                                                onClick: M,
                                                isShimmerActive: H,
                                                isShimmerVisible: L,
                                                className: T().plusButton,
                                                'data-intersection-property-id': V,
                                                'data-test-id': c.S7.HEADER_PLUS_BUTTON,
                                            }),
                                    ],
                                }),
                        ],
                    });
                });
            var F = (function (e) {
                return (
                    (e.INNER = 'INNER'),
                    (e.TEXT = 'TEXT'),
                    (e.COMPOSITE = 'COMPOSITE'),
                    (e.PROMO_LANDING = 'PROMO_LANDING'),
                    (e.BRANDED_PLAYLIST = 'BRANDED_PLAYLIST'),
                    (e.STICKY = 'STICKY'),
                    e
                );
            })({});
            let Y = (0, s.PA)((e) => {
                let {
                    variant: t = 'INNER',
                    style: r,
                    children: s,
                    showControls: o,
                    withBackwardControl: d,
                    withForwardControl: c,
                    className: u = '',
                    stickyChild: _,
                    staticClassName: h,
                    stickyClassName: m,
                    innerHeaderRef: E,
                    compositeHeaderRef: p,
                    disableStickyVariant: g,
                    ...v
                } = e;
                switch (t) {
                    case 'INNER':
                        return (0, i.jsx)(a.r, { page: n.l.HEADER, places: [l.R.BUTTON], children: (0, i.jsx)(D, { headerRef: E, style: r }) });
                    case 'TEXT':
                        return (0, i.jsx)(a.r, {
                            page: n.l.HEADER,
                            places: [l.R.BUTTON],
                            children: (0, i.jsx)(K, { showControls: o, withBackwardControl: d, withForwardControl: c, disableStickyVariant: g, children: s }),
                        });
                    case 'COMPOSITE':
                        return (0, i.jsx)(a.r, {
                            page: n.l.HEADER,
                            places: [l.R.BUTTON],
                            children: (0, i.jsx)(b, { className: u, stickyChild: _, staticClassName: h, stickyClassName: m, compositeHeaderRef: p, ...v, children: s }),
                        });
                    case 'PROMO_LANDING':
                        return (0, i.jsx)(a.r, { page: n.l.HEADER, places: [l.R.BUTTON], children: (0, i.jsx)(U, { style: r }) });
                    case 'BRANDED_PLAYLIST':
                        return (0, i.jsx)(a.r, { page: n.l.HEADER, places: [l.R.BUTTON], children: (0, i.jsx)(x, { showControls: o, children: s }) });
                    case 'STICKY':
                        return (0, i.jsx)('header', {
                            className: u,
                            children: (0, i.jsx)(a.r, { page: n.l.HEADER, places: [l.R.BUTTON], children: (0, i.jsx)(I, { className: m, ...v, children: _ }) }),
                        });
                }
            });
        },
        81471: (e) => {
            e.exports = {
                inner: 'CommonHeader_inner__DFpbr',
                header: 'CommonHeader_header__41HAE',
                container: 'CommonHeader_container__Jgf0s',
                leftBlock: 'CommonHeader_leftBlock__dJUBK',
                title: 'CommonHeader_title__RSbBG',
                plusButton: 'CommonHeader_plusButton__oe8Gh',
            };
        },
        82542: (e) => {
            e.exports = {
                icon: 'MainSuspenseLoader_icon__MceTD',
                'animate-pop': 'MainSuspenseLoader_animate-pop__vkpff',
                heartbeat: 'MainSuspenseLoader_heartbeat__6RDpM',
            };
        },
        85377: (e, t, r) => {
            'use strict';
            r.d(t, { B: () => i });
            let i = (0, r(55178).createContext)({
                title: null,
                setTitle: () => {},
                titleElement: null,
                scrollElement: null,
                setTitleElement: () => {},
                child: null,
                setChild: () => {},
                childElement: null,
                setChildElement: () => {},
                isScrolledChild: !1,
                isScrolledTitle: !1,
                isScrolling: !1,
                isHeaderHidden: !1,
            });
        },
        86838: (e) => {
            e.exports = {
                inner: 'PromoLandingHeader_inner__hKls8',
                header: 'PromoLandingHeader_header__gKwtu',
                container: 'PromoLandingHeader_container__JD5rw',
                leftBlock: 'PromoLandingHeader_leftBlock__jEcOR',
                title: 'PromoLandingHeader_title__LqClE',
                plusButton: 'PromoLandingHeader_plusButton__27yUf',
                backdrop: 'PromoLandingHeader_backdrop__AYF3a',
                root: 'PromoLandingHeader_root__zLOun',
                root_visible: 'PromoLandingHeader_root_visible__yB3YQ',
            };
        },
        87953: (e, t, r) => {
            'use strict';
            r.d(t, { GX: () => a.G, X1: () => i.X, m5: () => s.m });
            var i = r(50961),
                s = r(50891),
                a = r(10733);
            r(33898);
        },
        96218: (e, t, r) => {
            'use strict';
            r.d(t, { O: () => s, s: () => i });
            let i = 'yMusicStatePatchesUpdated',
                s = 'yMusicPageStatePatchesUpdated';
        },
        98610: (e) => {
            e.exports = { static: 'CompositeHeader_static__pZdrc', static_hidden: 'CompositeHeader_static_hidden__jHPYh' };
        },
    },
    (e) => {
        (e.O(0, [1010, 4450, 1256, 6706, 1311, 5472, 900, 2536, 2146, 3353, 2732, 1410, 1266, 8506, 6050, 5806, 7702, 4668, 4220, 9562, 7358], () => e((e.s = 45155))),
            (_N_E = e.O()));
    },
]);
