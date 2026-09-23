(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [3763],
    {
        3785: (e, t, r) => {
            'use strict';
            var l;
            (r.d(t, { M: () => l }),
                (function (e) {
                    ((e.MODAL = 'modal'),
                        (e.FOREIGN_AGENT = 'foreignAgent'),
                        (e.INFORMATIONAL = 'informational'),
                        (e.AGE_18 = 'age18'),
                        (e.EXPLICIT = 'explicit'),
                        (e.DESCRIPTION_TEXT = 'descriptionText'),
                        (e.AGE_18_ICON = 'age18Icon'),
                        (e.EXPLICIT_ICON = 'explicitIcon'),
                        (e.EXCLAMATION_ICON = 'exclamationIcon'));
                })(l || (l = {})));
        },
        8626: (e, t, r) => {
            'use strict';
            r.d(t, { m: () => l });
            let l = () => ({ year: 'numeric' });
        },
        11262: (e, t, r) => {
            'use strict';
            r.d(t, { X: () => d });
            var l = r(32290),
                a = r(55178),
                i = r(91027),
                o = r(71730),
                s = r(45477),
                n = r(75582),
                c = r(49399);
            let d = (e, t) => {
                let { notify: r, dismiss: d } = (0, n.l)(),
                    u = (0, a.useRef)(void 0),
                    m = (0, i.c)(() => {
                        var r;
                        (d({ notificationId: u.current }), (u.current = 0));
                        let l = [...(null != (r = e.lastRejectedPagesList) ? r : [])].reverse().filter((t) => {
                            var r;
                            return (null == (r = e.pageStates) ? void 0 : r[t]) === c.G.REJECT;
                        });
                        (e.resetRejectedPagesState(),
                            l.forEach((e) => {
                                t(e);
                            }));
                    });
                (0, a.useEffect)(() => {
                    e.rejectedPagesCount > 0 && !u.current && (u.current = r((0, l.jsx)(o.L, { reloadBlocks: m }), { containerId: s.u.ERROR, autoClose: !1 }));
                }, [d, m, r, e.rejectedPagesCount]);
            };
        },
        15559: (e, t, r) => {
            'use strict';
            r.d(t, { v: () => a });
            var l = r(79406);
            let a = (e) => {
                let { checkExperiment: t, getDisclaimerContent: r, getExplicitContent: a, userRegion: i } = e;
                return 'ru' === i && t(l.z.WebNextFooterDisclaimer, 'on') ? r() : a();
            };
        },
        29739: (e, t, r) => {
            Promise.resolve().then(r.bind(r, 30174));
        },
        30174: (e, t, r) => {
            'use strict';
            (r.r(t), r.d(t, { default: () => $ }));
            var l = r(32290),
                a = r(21916),
                i = r(55178),
                o = r(63618),
                s = r(96103),
                n = r(60900),
                c = r(21732),
                d = r(71926),
                u = r(64170),
                m = r(24170),
                _ = r(7999),
                p = r(48922),
                g = r(22714),
                v = r(83808),
                h = r(83920),
                x = r(3796),
                f = r(49259),
                N = r(45066),
                E = r(57594),
                C = r(11262),
                R = r(97841),
                A = r(32468),
                b = r(74694),
                y = r(89020),
                I = r(45257),
                P = r(69796),
                S = r(22556),
                T = r(44242),
                k = r(42125),
                O = r(44338),
                L = r(24535),
                j = r(47216),
                w = r(94821),
                F = r(26365),
                M = r(43993),
                D = r(49124);
            async function H(e, t) {
                let { locale: r, fullUrl: l, url: a, tld: i, host: o } = t,
                    s = await (0, k.W)(r),
                    n = e.title.fullTitle,
                    c = s({ id: 'metadata.genre-title' }, { genreTitle: n }),
                    d = (0, M.f)({ genreTitle: n, messageFormatter: s }),
                    u = D.env.ASSET_PREFIX || '',
                    m = ''.concat(o).concat(u, '/meta/og-image.png');
                return {
                    title: c,
                    description: d,
                    openGraph: (0, L.i)({
                        ogTitle: (0, O.N)(n),
                        ogDescription: d,
                        fullUrl: null != l ? l : '',
                        locale: r,
                        siteName: s({ id: 'metadata.yandex-music' }),
                        ogImage: m,
                    }),
                    twitter: (0, j.H)({ cardType: w.W.APP, title: c, url: null != a ? a : '', appName: s({ id: 'metadata.yandex-music' }) }),
                    appLinks: (0, T.X)({
                        additional: { tld: i, url: null != a ? a : '', fullUrl: null != l ? l : '', host: o },
                        appName: s({ id: 'metadata.yandex-music' }),
                    }),
                    alternates: (0, F.S)('/genre/:metatagId/albums', t.tld, { params: { metatagId: e.id } }),
                };
            }
            var Y = r(44936),
                G = r(73215),
                X = r.n(G);
            let U = (0, s.PA)((e) => {
                let { metatagId: t, preloadedMeta: r } = e,
                    { albumsSubpage: s } = (0, f.s)(N.n.GENRE),
                    {
                        settings: { isMobile: T },
                    } = (0, E.g)(),
                    { formatMessage: k } = (0, n.A)(),
                    { contentScrollRef: O, setContentScrollRef: L } = (0, h.g)(),
                    j = (0, v.W)(),
                    w = (0, i.useCallback)(
                        (e) => {
                            t && s.getData({ metatagId: t, page: e, pageSize: P.cM });
                        },
                        [s, t],
                    );
                ((0, C.X)(s.pagesLoader, w),
                    (0, i.useEffect)(
                        () => () => {
                            s.reset();
                        },
                        [s],
                    ),
                    s.isNotFound && (0, a.notFound)(),
                    (0, x.J)(s.isResolved),
                    ((e) => {
                        (0, i.useEffect)(() => {
                            e &&
                                H(
                                    ((e) => {
                                        var t, r, l;
                                        return {
                                            id: '',
                                            title: { title: '', fullTitle: e.fullTitle || '' },
                                            albums: e.items.map(Y.f),
                                            pager: {
                                                page: (null == (t = e.pagesLoader.pager) ? void 0 : t.page) || 0,
                                                perPage: (null == (r = e.pagesLoader.pager) ? void 0 : r.perPage) || 0,
                                                total: (null == (l = e.pagesLoader.pager) ? void 0 : l.total) || 0,
                                            },
                                        };
                                    })(e),
                                    { fullUrl: null, locale: null, url: null, tld: '', host: '' },
                                ).then((e) => {
                                    (0, S.j)(e);
                                });
                        }, [e]);
                    })(s));
                let F = (0, i.useMemo)(() => ({ Footer: () => (0, l.jsx)(A.A, { children: (0, l.jsx)(R.w, { className: X().footer }) }) }), []);
                if ((t && s.isNeededToLoad && (0, i.use)(s.getData({ preloadedMeta: r, metatagId: t, page: 0, pageSize: P.cM })), s.isSomethingWrong))
                    return (0, l.jsx)(u.SomethingWentWrong, {});
                let M = s.isShimmerVisible ? 20 : s.totalCount;
                return (0, l.jsx)(g.n, {
                    pageId: p._Q.GENRE_ALBUMS,
                    children: (0, l.jsx)(_.h, {
                        scrollElement: O,
                        outerTitle: s.fullTitle,
                        children: (0, l.jsxs)('div', {
                            className: X().root,
                            'data-test-id': c.Xk.genre.GENRE_ALBUMS_PAGE,
                            children: [
                                (0, l.jsx)(b.Y, {
                                    variant: b.V.TEXT,
                                    withForwardControl: !1,
                                    withBackwardControl: j.canBack,
                                    children: (0, l.jsx)(d.DZ, { variant: 'h2', weight: 'bold', size: 'xl', lineClamp: 1, children: s.fullTitle }),
                                }),
                                (0, l.jsx)(I.$, {
                                    className: (0, o.$)(X().scrollContainer, X().important),
                                    customComponents: F,
                                    itemContentCallback: (e) => {
                                        let t = s.items[e],
                                            r = k({ id: 'loading-messages.entity-is-loading' }, { entityName: k({ id: 'entity-names.album' }) });
                                        return t ? (0, l.jsx)(m.a, { album: t, contentLinesCount: 4 }, t.id) : (0, l.jsx)(y.V, { 'aria-label': r, linesCount: 4 });
                                    },
                                    totalCount: M,
                                    initialItemCount: M,
                                    onGetDataByPage: w,
                                    pageSize: P.cM,
                                    totalRequests: s.requestsCount,
                                    listClassName: X().content,
                                    itemClassName: X().item,
                                    handleRef: L,
                                    context: { listAriaLabel: k({ id: 'mixes.albums-list' }, { genreName: s.fullTitle || '' }) },
                                    isMobileLayout: T,
                                    useWindowScroll: T,
                                }),
                            ],
                        }),
                    }),
                });
            });
            var V = r(79856),
                z = r(50308);
            let B = () => {
                    let e = (0, v.W)(),
                        { formatMessage: t } = (0, n.A)(),
                        r = t({ id: 'loading-messages.entity-is-loading' }, { entityName: t({ id: 'entity-names.album' }) });
                    return (0, l.jsx)(_.h, {
                        scrollElement: null,
                        children: (0, l.jsxs)('div', {
                            className: X().root,
                            children: [
                                (0, l.jsx)(b.Y, {
                                    variant: b.V.TEXT,
                                    withForwardControl: !1,
                                    withBackwardControl: e.canBack,
                                    children: (0, l.jsx)(V.W, { className: X().shimmerTitle, radius: 'l' }),
                                }),
                                (0, l.jsx)('div', {
                                    className: (0, o.$)(X().scrollContainer, X().important, X().shimmerScrollContainer),
                                    children: (0, l.jsx)('div', {
                                        className: X().content,
                                        children: (0, l.jsx)(z.e, { isActive: !0, itemClassName: X().item, 'aria-label': r, linesCount: 4, count: 20 }),
                                    }),
                                }),
                            ],
                        }),
                    });
                },
                $ = () => {
                    let e = (0, a.useSearchParams)().get('metatagId');
                    return (e || (0, a.notFound)(), (0, l.jsx)(i.Suspense, { fallback: (0, l.jsx)(B, {}), children: (0, l.jsx)(U, { metatagId: e }) }));
                };
        },
        31010: (e, t, r) => {
            'use strict';
            r.d(t, { H: () => a, P: () => i });
            var l = r(55178);
            let a = (0, l.createContext)(null),
                i = () => (0, l.useContext)(a);
        },
        32468: (e, t, r) => {
            'use strict';
            r.d(t, { A: () => o });
            var l = r(32290),
                a = r(77088),
                i = r.n(a);
            let o = (e) => {
                let { children: t } = e;
                return (0, l.jsx)('footer', { className: i().empty });
            };
        },
        36504: (e, t, r) => {
            'use strict';
            r.d(t, { N: () => i });
            var l = r(96151),
                a = r(87151);
            let i = (e) => {
                var t, r, i, o, s;
                return e
                    ? {
                          id: e.id,
                          decomposed:
                              (null == (t = e.decomposed)
                                  ? void 0
                                  : t.map((e) => {
                                        var t;
                                        return {
                                            id: e.id,
                                            name: e.name,
                                            various: e.various || !1,
                                            composer: e.isComposer || !1,
                                            item: e.separator,
                                            available: null == (t = e.isAvailable) || t,
                                            disclaimers: (0, a.H)(e.disclaimers),
                                        };
                                    })) || [],
                          name: e.name,
                          cover: { uri: e.coverUri || '', type: l.Q.PIC, prefix: '', custom: !1 },
                          ogImage: '',
                          derivedColors: { accent: '', average: e.averageColor || '', miniPlayer: '', waveText: '' },
                          available: e.isAvailable,
                          disclaimers: (0, a.H)(e.disclaimers),
                          counts: {
                              directAlbums: (null == (r = e.counts) ? void 0 : r.albums) || 0,
                              alsoAlbums: (null == (i = e.counts) ? void 0 : i.compilations) || 0,
                              tracks: (null == (o = e.counts) ? void 0 : o.tracks) || 0,
                              alsoTracks: 0,
                          },
                          trailer: { available: !!(null == (s = e.trailer) ? void 0 : s.isAvailable) },
                          hasPromotions: !1,
                          genres: [],
                          links: [],
                          ticketsAvailable: !1,
                          ratings: { week: 0, month: 0, day: 0 },
                          composer: e.isComposer || !1,
                          various: e.various || !1,
                      }
                    : {
                          id: '',
                          name: '',
                          various: !1,
                          composer: !1,
                          decomposed: [],
                          ogImage: '',
                          hasPromotions: !1,
                          genres: [],
                          ticketsAvailable: !1,
                          links: [],
                          ratings: { week: 0, month: 0, day: 0 },
                          counts: { directAlbums: 0, alsoAlbums: 0, tracks: 0, alsoTracks: 0 },
                          available: !1,
                          disclaimers: [],
                      };
            };
        },
        39684: (e) => {
            e.exports = {
                root: 'VirtualScroll_root__pCptn',
                root_scrolling: 'VirtualScroll_root_scrolling__dsQ6K',
                root_notScrolling: 'VirtualScroll_root_notScrolling__x4qdd',
                scroller_withFooter: 'VirtualScroll_scroller_withFooter__ntDaU',
                scroller_withHeader: 'VirtualScroll_scroller_withHeader__9yzCK',
                scroller_withForceScroll: 'VirtualScroll_scroller_withForceScroll__w7q1L',
            };
        },
        44936: (e, t, r) => {
            'use strict';
            r.d(t, { f: () => a });
            var l = r(36504);
            let a = (e) => {
                var t;
                if (!e)
                    return {
                        id: 0,
                        title: '',
                        availableForOptions: [],
                        availableForPremiumUsers: !0,
                        artists: [],
                        volumes: [],
                        ogImage: '',
                        availablePartially: !1,
                        trackCount: 0,
                        recent: !1,
                        veryImportant: !1,
                        labels: [],
                        metaType: '',
                        availableForMobile: !0,
                    };
                let r = (null == (t = e.artists) ? void 0 : t.map((e) => (0, l.N)(e))) || [];
                return {
                    id: e.id,
                    title: e.title,
                    type: e.type,
                    coverUri: e.coverUri,
                    year: e.year,
                    version: e.version,
                    availableForOptions: e.availableForOptions || [],
                    availableForPremiumUsers: e.availableForPremiumUsers || !0,
                    artists: r,
                    volumes: [],
                    ogImage: e.coverUri || '',
                    availablePartially: !1,
                    trackCount: e.trackCount || 0,
                    recent: !1,
                    veryImportant: !1,
                    labels: [],
                    metaType: '',
                    availableForMobile: !0,
                };
            };
        },
        45257: (e, t, r) => {
            'use strict';
            r.d(t, { $: () => v });
            var l = r(32290),
                a = r(63618),
                i = r(8055),
                o = r(55178);
            let s = (e) => {
                    let { style: t, forwardRef: r, context: a, ...i } = e,
                        o = (null == a ? void 0 : a.listAriaLabel) || void 0,
                        s = (null == a ? void 0 : a.listRole) || 'region';
                    return (0, l.jsx)('div', { 'aria-labelledby': 'virtual-grid-header', role: s, 'aria-label': o, style: { ...t }, ref: r, ...i });
                },
                n = (0, o.forwardRef)((e, t) => (0, l.jsx)(s, { forwardRef: t, ...e }));
            var c = r(39684),
                d = r.n(c);
            let u = (e) => {
                    let { style: t, forwardRef: r, withFooter: i, withHeader: o, withForceScroll: s, ...n } = e;
                    return (0, l.jsx)('div', {
                        className: (0, a.$)(d().scroller, { [d().scroller_withFooter]: i, [d().scroller_withHeader]: o, [d().scroller_withForceScroll]: s }),
                        style: { ...t },
                        ref: r,
                        ...n,
                        tabIndex: -1,
                    });
                },
                m = (0, o.forwardRef)((e, t) => (0, l.jsx)(u, { forwardRef: t, ...e }));
            var _ = r(62060),
                p = r(31417);
            let g = (e) => {
                    let {
                            pageSize: t,
                            onPageHandler: r,
                            onRangeHandler: a,
                            debounceDurationInMs: i = 100,
                            totalCount: s = 0,
                            shouldTriggerRangeChangedOn: n = [],
                            endReached: c,
                            virtuosoRef: d,
                            ...u
                        } = e,
                        [m, g] = (0, o.useState)(null),
                        v = (0, o.useMemo)(
                            () =>
                                (0, _.A)((e) => {
                                    if ((null == a || a(e), n.length > 0 && g(e), t && r)) {
                                        let l = Math.floor(e.endIndex / t) + 1,
                                            a = Math.floor(e.startIndex / t);
                                        for (let e = a; e < l; e++) r(e);
                                    }
                                }, i),
                            [i, a, t, r, n],
                        );
                    (0, o.useEffect)(() => {
                        n.length > 0 && m && v(m);
                    }, n);
                    let h = (0, o.useMemo)(() => {
                        if (c)
                            return (0, _.A)((e) => {
                                c(e);
                            }, i);
                    }, [c, i]);
                    return (0, l.jsx)(p.sN, { ref: d, rangeChanged: v, totalCount: s, endReached: h, ...u });
                },
                v = (e) => {
                    let {
                            className: t,
                            customComponents: r,
                            onGetDataByPage: s,
                            onGetDataByRange: c,
                            itemClassName: u,
                            itemContentCallback: _,
                            listClassName: p,
                            overscan: v = 700,
                            pageSize: h = 20,
                            totalCount: x,
                            totalRequests: f,
                            debounceDurationInMs: N,
                            initialItemCount: E,
                            minInitialItemCount: C = 20,
                            handleRef: R,
                            alwaysShowScrollbar: A = !1,
                            testId: b,
                            isMobileLayout: y = !1,
                            shouldTriggerRangeChangedOn: I,
                            ...P
                        } = e,
                        [S, T] = (0, o.useState)(!1),
                        k = (0, o.useMemo)(
                            () =>
                                (0, i.A)((e) => {
                                    T(e);
                                }, 100),
                            [],
                        ),
                        O = (0, o.useMemo)(() => {
                            var e, t;
                            return y
                                ? {
                                      Scroller: m,
                                      List: null != (e = null == r ? void 0 : r.List) ? e : n,
                                      Item: null == r ? void 0 : r.Item,
                                      ScrollSeekPlaceholder: null == r ? void 0 : r.ScrollSeekPlaceholder,
                                  }
                                : {
                                      Scroller: m,
                                      List: null != (t = null == r ? void 0 : r.List) ? t : n,
                                      Item: null == r ? void 0 : r.Item,
                                      Header: null == r ? void 0 : r.Header,
                                      Footer: null == r ? void 0 : r.Footer,
                                      ScrollSeekPlaceholder: null == r ? void 0 : r.ScrollSeekPlaceholder,
                                  };
                        }, [r, f, y]),
                        L = E ? Math.min(E, C) : void 0;
                    return (0, l.jsxs)('div', {
                        className: (0, a.$)(d().root, { [d().root_scrolling]: S || A, [d().root_notScrolling]: !S && !A }, t),
                        'data-test-id': b,
                        children: [
                            y && (null == r ? void 0 : r.Header) && r.Header(),
                            (0, l.jsx)(g, {
                                overscan: v,
                                components: O,
                                listClassName: p,
                                itemClassName: u,
                                isScrolling: k,
                                itemContent: _,
                                scrollerRef: R,
                                totalCount: x,
                                pageSize: h,
                                onPageHandler: s,
                                onRangeHandler: c,
                                debounceDurationInMs: N,
                                initialItemCount: L,
                                shouldTriggerRangeChangedOn: I,
                                ...P,
                            }),
                            y && (null == r ? void 0 : r.Footer) && r.Footer(),
                        ],
                    });
                };
        },
        50308: (e, t, r) => {
            'use strict';
            r.d(t, { e: () => i });
            var l = r(32290),
                a = r(89020);
            let i = (e) => {
                let {
                    isActive: t,
                    itemClassName: r,
                    round: i,
                    centered: o,
                    withInfo: s,
                    count: n = 10,
                    shimmerClassName: c,
                    linesCount: d,
                    'aria-label': u,
                    withSubcover: m,
                } = e;
                return Array.from(Array(n).keys()).map((e) =>
                    (0, l.jsx)(
                        a.V,
                        { isActive: t, linesCount: d, className: r, round: i, centered: o, withInfo: s, withSubcover: m, 'aria-label': u, shimmerClassName: c },
                        e,
                    ),
                );
            };
        },
        57594: (e, t, r) => {
            'use strict';
            r.d(t, { P: () => i, g: () => o });
            var l = r(55178),
                a = r(25090);
            let i = (0, l.createContext)(null);
            function o() {
                let e = (0, l.useContext)(i);
                if (null === e) throw new a.t('Store cannot be null, please add a context provider', { code: 'E_CONTEXT_STORE_NULL' });
                return e;
            }
        },
        62376: (e, t, r) => {
            'use strict';
            r.d(t, { U: () => i });
            var l = r(70204),
                a = r(34186);
            let i = () => (0, a.N)().get(l.Zf);
        },
        65024: (e, t, r) => {
            'use strict';
            r.d(t, { C: () => a });
            let l = new Set(Object.values(r(3785).M)),
                a = (e) => 'string' == typeof e && l.has(e);
        },
        69796: (e, t, r) => {
            'use strict';
            r.d(t, { El: () => s, I7: () => n, K$: () => o, cM: () => d, fZ: () => a, tA: () => i, vX: () => l, xi: () => c });
            let l = 16,
                a = 16,
                i = 315,
                o = 170,
                s = 270,
                n = 7,
                c = 30,
                d = 30;
        },
        70718: (e) => {
            e.exports = {
                root: 'NotificationReloadBlocks_root__qNd_1',
                important: 'NotificationReloadBlocks_important__QsAfb',
                text: 'NotificationReloadBlocks_text__TN_U0',
                icon: 'NotificationReloadBlocks_icon__vVN__',
                button: 'NotificationReloadBlocks_button__uXYiL',
                message: 'NotificationReloadBlocks_message__uQ1hC',
            };
        },
        71730: (e, t, r) => {
            'use strict';
            r.d(t, { L: () => p });
            var l = r(32290),
                a = r(63618),
                i = r(55178),
                o = r(60900),
                s = r(39407),
                n = r(63423),
                c = r(82586),
                d = r(71926),
                u = r(58534),
                m = r(70718),
                _ = r.n(m);
            let p = (e) => {
                let { reloadBlocks: t, closeToast: r } = e,
                    m = (0, i.useRef)(null),
                    { formatMessage: p } = (0, o.A)();
                (0, i.useEffect)(() => {
                    var e;
                    null == (e = m.current) || e.focus();
                }, []);
                let g = (0, i.useMemo)(
                    () =>
                        (0, l.jsxs)('div', {
                            className: _().message,
                            children: [
                                (0, l.jsx)(d.HL, {
                                    className: _().text,
                                    variant: 'div',
                                    type: 'controls',
                                    size: 'm',
                                    children: (0, l.jsx)(s.A, { id: 'error-messages.error-load-part-page' }),
                                }),
                                (0, l.jsx)(n.$, {
                                    ref: m,
                                    className: _().button,
                                    onClick: t,
                                    variant: 'text',
                                    'aria-label': p({ id: 'interface-actions.reload-part-page' }),
                                    icon: (0, l.jsx)(c.I, { variant: 'reset', size: 'xxs', className: _().icon }),
                                }),
                            ],
                        }),
                    [p, t],
                );
                return (0, l.jsx)(u.$, { className: (0, a.$)(_().root, _().important), message: g, closeToast: r });
            };
        },
        73215: (e) => {
            e.exports = {
                root: 'GenreAlbumsPage_root__r_Sts',
                scrollContainer: 'GenreAlbumsPage_scrollContainer__K_v_b',
                important: 'GenreAlbumsPage_important__r3P2T',
                shimmerScrollContainer: 'GenreAlbumsPage_shimmerScrollContainer__IpQeU',
                footer: 'GenreAlbumsPage_footer__vmCiR',
                item: 'GenreAlbumsPage_item__zRzB0',
                content: 'GenreAlbumsPage_content__PRJUm',
                shimmerTitle: 'GenreAlbumsPage_shimmerTitle__UW_D5',
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
        87151: (e, t, r) => {
            'use strict';
            r.d(t, { H: () => a });
            var l = r(65024);
            let a = function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
                return e.map((e) => ((0, l.C)(e) ? e : void 0)).filter((e) => void 0 !== e);
            };
        },
        97841: (e, t, r) => {
            'use strict';
            r.d(t, { w: () => A });
            var l = r(32290),
                a = r(63618),
                i = r(96103),
                o = r(60900),
                s = r(31010),
                n = (function (e) {
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
                        case n.YANDEX:
                            if ('ru' === t) return 'https://ya.ru';
                            return;
                        case n.YANDEX_PROJECTS:
                            return 'https://yandex.'.concat(t, '/all?lang=').concat(r);
                        case n.COPYRIGHT_HOLDER:
                            return 'https://yandex.'.concat(t, '/support/music/performers-and-copyright-holders/copyright.html?lang=').concat(r);
                        case n.AGREEMENT:
                            return 'https://yandex.ru/legal/music_termsofuse?lang='.concat(r);
                        case n.RECOMMENDATION_RULES:
                            return 'https://music.yandex.ru/legal/recommendations/ru/#music';
                        case n.HELP:
                            return 'https://yandex.'.concat(t, '/support/music/index.html?lang=').concat(r);
                        case n.PRIVACY_POLICY:
                            return 'https://yandex.'.concat(t, '/legal/confidential/').concat(r);
                    }
                },
                d = (e) => {
                    let { formatMessage: t, language: r, tld: l, year: a } = e;
                    return {
                        year: a,
                        yandexMusic: { id: n.YANDEX, title: t({ id: 'footer.yandex-music' }), url: c(n.YANDEX, l, r) },
                        yandexProjects: { id: n.YANDEX_PROJECTS, title: t({ id: 'footer.yandex-project' }), url: c(n.YANDEX_PROJECTS, l, r) },
                    };
                };
            var u = r(15559),
                m = r(8626);
            let _ = (e) => e(new Date(), (0, m.m)());
            var p = r(61945),
                g = r(57594),
                v = r(77088),
                h = r.n(v),
                x = r(21732),
                f = r(71926),
                N = r(61258);
            let E = (e) => {
                    let { className: t, data: r } = e;
                    return (0, l.jsxs)('div', {
                        className: (0, a.$)(h().copyrights, t),
                        'data-test-id': x.S7.FOOTER_COPYRIGHTS,
                        children: [
                            (0, l.jsxs)(f.HL, {
                                variant: 'span',
                                type: 'text',
                                size: 's',
                                weight: 'medium',
                                className: h().text,
                                children: [
                                    '\xa9 ',
                                    r.year,
                                    ' \xa0',
                                    (0, l.jsx)(N.N, {
                                        target: '_blank',
                                        href: r.yandexMusic.url,
                                        className: (0, a.$)(h().copyrightLink, h().yandexMusicLink),
                                        'data-test-id': x.S7.FOOTER_YANDEX_MUSIC_LINK,
                                        children: r.yandexMusic.title,
                                    }),
                                ],
                            }),
                            (0, l.jsx)(f.HL, { variant: 'span', type: 'text', size: 's', weight: 'medium', children: ' • ' }),
                            (0, l.jsx)(N.N, {
                                target: '_blank',
                                href: r.yandexProjects.url,
                                className: h().copyrightLink,
                                'data-test-id': x.S7.FOOTER_YANDEX_PROJECT_LINK,
                                children: r.yandexProjects.title,
                            }),
                        ],
                    });
                },
                C = (e) => {
                    let { disclaimer: t, links: r } = e;
                    return (0, l.jsxs)('div', {
                        className: h().links,
                        children: [
                            (0, l.jsx)('ol', {
                                className: h().list,
                                'data-test-id': x.S7.FOOTER_LINKS_LIST,
                                children: r.map((e) => {
                                    let { id: t, title: r, url: a } = e;
                                    return (0, l.jsx)(
                                        'li',
                                        {
                                            className: h().item,
                                            children: (0, l.jsx)(N.N, { target: '_blank', href: a, className: h().link, 'data-test-id': x.S7.FOOTER_LINK, children: r }),
                                        },
                                        t,
                                    );
                                }),
                            }),
                            (0, l.jsx)(f.HL, {
                                variant: 'span',
                                type: 'text',
                                size: 'm',
                                weight: 'medium',
                                className: h().explicitText,
                                tabIndex: 0,
                                dangerouslySetInnerHTML: { __html: t },
                                'data-test-id': x.S7.FOOTER_DISCLAIMER_TEXT,
                            }),
                        ],
                    });
                },
                R = (e) => {
                    let { className: t, data: r } = e;
                    return (0, l.jsxs)('footer', {
                        className: (0, a.$)(h().root, h().important, t),
                        'data-test-id': x.S7.FOOTER,
                        children: [(0, l.jsx)(C, { links: r.links, disclaimer: r.disclaimer }), (0, l.jsx)(E, { data: r.copyrights })],
                    });
                };
            (0, i.PA)((e) => {
                let { className: t } = e,
                    { location: r } = (0, g.g)(),
                    { formatDate: a, formatMessage: i } = (0, o.A)(),
                    { language: s } = (0, p.h)(),
                    n = d({ formatMessage: i, language: s, tld: r.tld, year: _(a) });
                return (0, l.jsx)(E, { className: t, data: n });
            });
            let A = (0, i.PA)((e) => {
                var t;
                let { className: r } = e,
                    { experiments: i, location: m, user: v } = (0, g.g)(),
                    { formatDate: x, formatMessage: f } = (0, o.A)(),
                    { isEnabled: N } = null != (t = (0, s.P)()) ? t : {},
                    { language: E } = (0, p.h)(),
                    C = ((e) => {
                        let { checkExperiment: t, formatMessage: r, isWebApplication: l, language: a, tld: i, userRegion: o, year: s } = e;
                        return {
                            links: ((e) => {
                                let { formatMessage: t, isWebApplication: r, tld: l, language: a, userRegion: i } = e,
                                    o = { id: n.COPYRIGHT_HOLDER, title: t({ id: 'footer.links-copyright-holders' }), url: c(n.COPYRIGHT_HOLDER, l, a) },
                                    s = { id: n.PRIVACY_POLICY, title: t({ id: 'footer.links-privacy-policy' }), url: c(n.PRIVACY_POLICY, l, a) },
                                    d = { id: n.AGREEMENT, title: t({ id: 'footer.links-terms' }), url: c(n.AGREEMENT, l, a) },
                                    u = { id: n.RECOMMENDATION_RULES, title: t({ id: 'footer.links-recommendation-rules' }), url: c(n.RECOMMENDATION_RULES, l, a) },
                                    m = { id: n.HELP, title: t({ id: 'footer.links-help' }), url: c(n.HELP, l, a) },
                                    _ = [o, d, u];
                                return (r && 'ru' === i && _.push(s), _.push(m), _);
                            })({ formatMessage: r, isWebApplication: l, language: a, tld: i, userRegion: o }),
                            disclaimer: (0, u.v)({
                                checkExperiment: t,
                                getDisclaimerContent: () => r({ id: 'footer.disclaimer-content' }),
                                getExplicitContent: () => r({ id: 'footer.explicit-content' }),
                                userRegion: o,
                            }),
                            copyrights: d({ formatMessage: r, language: a, tld: i, year: s }),
                        };
                    })({
                        checkExperiment: (e, t) => i.checkExperiment(e, t),
                        formatMessage: f,
                        isWebApplication: !1,
                        tld: m.tld,
                        language: E,
                        userRegion: v.account.data.userSessionRegionIso,
                        year: _(x),
                    });
                return (0, l.jsx)(R, { className: (0, a.$)({ [h().root_withOffsetForDeeplink]: N }, r), data: C });
            });
        },
    },
    (e) => {
        (e.O(
            0,
            [
                1010, 7412, 7231, 8461, 2147, 4517, 9763, 1256, 3608, 6004, 6706, 1311, 5472, 8378, 900, 2536, 2146, 3353, 2474, 8035, 347, 2732, 1410, 1417, 7529, 8506,
                6050, 5806, 7702, 6874, 9155, 861, 4668, 9740, 1175, 4499, 8915, 8816, 2563, 9021, 4220, 9562, 7358,
            ],
            () => e((e.s = 29739)),
        ),
            (_N_E = e.O()));
    },
]);
