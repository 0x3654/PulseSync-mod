(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [738],
    {
        7443: (e, t, r) => {
            'use strict';
            r.d(t, { x: () => l });
            var l = (function (e) {
                return ((e.CATEGORY = 'category'), (e.EDITORIAL = 'editorial'), e);
            })({});
        },
        8626: (e, t, r) => {
            'use strict';
            r.d(t, { m: () => l });
            let l = () => ({ year: 'numeric' });
        },
        15559: (e, t, r) => {
            'use strict';
            r.d(t, { v: () => o });
            var l = r(79406);
            let o = (e) => {
                let { checkExperiment: t, getDisclaimerContent: r, getExplicitContent: o, userRegion: i } = e;
                return 'ru' === i && t(l.z.WebNextFooterDisclaimer, 'on') ? r() : o();
            };
        },
        25901: (e) => {
            e.exports = {
                root: 'NonMusicAlbumsPage_root__jlDXa',
                scrollContainer: 'NonMusicAlbumsPage_scrollContainer__XNRsu',
                important: 'NonMusicAlbumsPage_important__Rk8LT',
                footer: 'NonMusicAlbumsPage_footer__LJCIL',
                item: 'NonMusicAlbumsPage_item__YArCS',
                content: 'NonMusicAlbumsPage_content__phVa7',
            };
        },
        31010: (e, t, r) => {
            'use strict';
            r.d(t, { H: () => o, P: () => i });
            var l = r(55178);
            let o = (0, l.createContext)(null),
                i = () => (0, l.useContext)(o);
        },
        32468: (e, t, r) => {
            'use strict';
            r.d(t, { A: () => s });
            var l = r(32290),
                o = r(77088),
                i = r.n(o);
            let s = (e) => {
                let { children: t } = e;
                return (0, l.jsx)('footer', { className: i().empty });
            };
        },
        39530: (e, t, r) => {
            Promise.resolve().then(r.bind(r, 85696));
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
        45257: (e, t, r) => {
            'use strict';
            r.d(t, { $: () => E });
            var l = r(32290),
                o = r(63618),
                i = r(8055),
                s = r(55178);
            let n = (e) => {
                    let { style: t, forwardRef: r, context: o, ...i } = e,
                        s = (null == o ? void 0 : o.listAriaLabel) || void 0,
                        n = (null == o ? void 0 : o.listRole) || 'region';
                    return (0, l.jsx)('div', { 'aria-labelledby': 'virtual-grid-header', role: n, 'aria-label': s, style: { ...t }, ref: r, ...i });
                },
                a = (0, s.forwardRef)((e, t) => (0, l.jsx)(n, { forwardRef: t, ...e }));
            var c = r(39684),
                d = r.n(c);
            let u = (e) => {
                    let { style: t, forwardRef: r, withFooter: i, withHeader: s, withForceScroll: n, ...a } = e;
                    return (0, l.jsx)('div', {
                        className: (0, o.$)(d().scroller, { [d().scroller_withFooter]: i, [d().scroller_withHeader]: s, [d().scroller_withForceScroll]: n }),
                        style: { ...t },
                        ref: r,
                        ...a,
                        tabIndex: -1,
                    });
                },
                _ = (0, s.forwardRef)((e, t) => (0, l.jsx)(u, { forwardRef: t, ...e }));
            var m = r(62060),
                h = r(31417);
            let x = (e) => {
                    let {
                            pageSize: t,
                            onPageHandler: r,
                            onRangeHandler: o,
                            debounceDurationInMs: i = 100,
                            totalCount: n = 0,
                            shouldTriggerRangeChangedOn: a = [],
                            endReached: c,
                            virtuosoRef: d,
                            ...u
                        } = e,
                        [_, x] = (0, s.useState)(null),
                        E = (0, s.useMemo)(
                            () =>
                                (0, m.A)((e) => {
                                    if ((null == o || o(e), a.length > 0 && x(e), t && r)) {
                                        let l = Math.floor(e.endIndex / t) + 1,
                                            o = Math.floor(e.startIndex / t);
                                        for (let e = o; e < l; e++) r(e);
                                    }
                                }, i),
                            [i, o, t, r, a],
                        );
                    (0, s.useEffect)(() => {
                        a.length > 0 && _ && E(_);
                    }, a);
                    let g = (0, s.useMemo)(() => {
                        if (c)
                            return (0, m.A)((e) => {
                                c(e);
                            }, i);
                    }, [c, i]);
                    return (0, l.jsx)(h.sN, { ref: d, rangeChanged: E, totalCount: n, endReached: g, ...u });
                },
                E = (e) => {
                    let {
                            className: t,
                            customComponents: r,
                            onGetDataByPage: n,
                            onGetDataByRange: c,
                            itemClassName: u,
                            itemContentCallback: m,
                            listClassName: h,
                            overscan: E = 700,
                            pageSize: g = 20,
                            totalCount: p,
                            totalRequests: N,
                            debounceDurationInMs: C,
                            initialItemCount: R,
                            minInitialItemCount: f = 20,
                            handleRef: O,
                            alwaysShowScrollbar: A = !1,
                            testId: L,
                            isMobileLayout: S = !1,
                            shouldTriggerRangeChangedOn: y,
                            ...v
                        } = e,
                        [I, P] = (0, s.useState)(!1),
                        M = (0, s.useMemo)(
                            () =>
                                (0, i.A)((e) => {
                                    P(e);
                                }, 100),
                            [],
                        ),
                        k = (0, s.useMemo)(() => {
                            var e, t;
                            return S
                                ? {
                                      Scroller: _,
                                      List: null != (e = null == r ? void 0 : r.List) ? e : a,
                                      Item: null == r ? void 0 : r.Item,
                                      ScrollSeekPlaceholder: null == r ? void 0 : r.ScrollSeekPlaceholder,
                                  }
                                : {
                                      Scroller: _,
                                      List: null != (t = null == r ? void 0 : r.List) ? t : a,
                                      Item: null == r ? void 0 : r.Item,
                                      Header: null == r ? void 0 : r.Header,
                                      Footer: null == r ? void 0 : r.Footer,
                                      ScrollSeekPlaceholder: null == r ? void 0 : r.ScrollSeekPlaceholder,
                                  };
                        }, [r, N, S]),
                        T = R ? Math.min(R, f) : void 0;
                    return (0, l.jsxs)('div', {
                        className: (0, o.$)(d().root, { [d().root_scrolling]: I || A, [d().root_notScrolling]: !I && !A }, t),
                        'data-test-id': L,
                        children: [
                            S && (null == r ? void 0 : r.Header) && r.Header(),
                            (0, l.jsx)(x, {
                                overscan: E,
                                components: k,
                                listClassName: h,
                                itemClassName: u,
                                isScrolling: M,
                                itemContent: m,
                                scrollerRef: O,
                                totalCount: p,
                                pageSize: g,
                                onPageHandler: n,
                                onRangeHandler: c,
                                debounceDurationInMs: C,
                                initialItemCount: T,
                                shouldTriggerRangeChangedOn: y,
                                ...v,
                            }),
                            S && (null == r ? void 0 : r.Footer) && r.Footer(),
                        ],
                    });
                };
        },
        51819: (e, t, r) => {
            'use strict';
            r.d(t, { g: () => v });
            var l = r(32290),
                o = r(63618),
                i = r(96103),
                s = r(21916),
                n = r(55178),
                a = r(60900),
                c = r(21732),
                d = r(71926),
                u = r(24170),
                _ = r(7999),
                m = r(48922),
                h = r(22714),
                x = r(83808),
                E = r(54667),
                g = r(83920),
                p = r(3796),
                N = r(57594),
                C = r(97841),
                R = r(32468),
                f = r(74694),
                O = r(89020),
                A = r(45257),
                L = r(7443),
                S = r(25901),
                y = r.n(S);
            let v = (0, i.PA)((e) => {
                var t, r;
                let { id: i, variant: S } = e,
                    {
                        nonMusic: { albums: v },
                        settings: I,
                    } = (0, N.g)(),
                    { formatMessage: P } = (0, a.A)(),
                    { contentScrollRef: M, setContentScrollRef: k } = (0, g.g)(),
                    T = (0, x.W)(),
                    b = I.layout === E.u.Mobile;
                ((v.isNotFound || !i) && (0, s.notFound)(),
                    (0, p.J)(v.isResolved),
                    (0, n.useEffect)(
                        () => () => {
                            v.reset();
                        },
                        [v],
                    ));
                let D = (0, n.useCallback)(
                        (e) => {
                            v.getAlbumsByRange(e.startIndex, e.endIndex);
                        },
                        [v],
                    ),
                    j = (0, n.useMemo)(() => ({ Footer: () => (0, l.jsx)(R.A, { children: (0, l.jsx)(C.w, { className: y().footer }) }) }), []),
                    w = v.isLoading ? 20 : null != (r = null == (t = v.albums) ? void 0 : t.length) ? r : 0;
                return (
                    i && v.isNeededToLoad && (S === L.x.EDITORIAL ? (0, n.use)(v.getEditorialAlbums({ id: i })) : (0, n.use)(v.getCategoryAlbums({ id: i }))),
                    (0, l.jsx)(h.n, {
                        pageId: m._Q.NON_MUSIC_ALBUMS,
                        children: (0, l.jsx)(_.h, {
                            scrollElement: M,
                            outerTitle: v.title,
                            children: (0, l.jsxs)('div', {
                                className: y().root,
                                'data-test-id': c.Xk.nonMusic.NON_MUSIC_ALBUMS_PAGE,
                                children: [
                                    (0, l.jsx)(f.Y, {
                                        variant: f.V.TEXT,
                                        withForwardControl: !1,
                                        withBackwardControl: T.canBack,
                                        children: (0, l.jsx)(d.DZ, {
                                            id: 'collection-artists-header',
                                            variant: 'h2',
                                            weight: 'bold',
                                            size: 'xl',
                                            lineClamp: 1,
                                            children: v.title,
                                        }),
                                    }),
                                    (0, l.jsx)(A.$, {
                                        className: (0, o.$)(y().scrollContainer, y().important),
                                        customComponents: j,
                                        itemContentCallback: (e) => {
                                            var t, r;
                                            let o = null == (r = v.albums) || null == (t = r[e]) ? void 0 : t.data,
                                                i = P({ id: 'loading-messages.entity-is-loading' }, { entityName: P({ id: 'entity-names.album' }) });
                                            return o
                                                ? (0, l.jsx)(u.a, { withLikesCount: !0, album: o, contentLinesCount: 3 }, o.id)
                                                : (0, l.jsx)(O.V, { 'aria-label': i }, e);
                                        },
                                        totalCount: w,
                                        onGetDataByRange: D,
                                        totalRequests: v.requestsCount,
                                        listClassName: y().content,
                                        itemClassName: y().item,
                                        handleRef: k,
                                        context: { listAriaLabel: P({ id: 'mixes.albums-list' }, { genreName: v.title || '' }) },
                                        isMobileLayout: b,
                                        useWindowScroll: b,
                                    }),
                                ],
                            }),
                        }),
                    })
                );
            });
        },
        52199: (e, t, r) => {
            'use strict';
            r.d(t, { r: () => l });
            let l = (e, t, r) => e.replace(r, t);
        },
        54667: (e, t, r) => {
            'use strict';
            r.d(t, { P: () => l, u: () => o });
            var l = (function (e) {
                    return ((e[(e.Mobile = 768)] = 'Mobile'), (e[(e.Desktop = 1440)] = 'Desktop'), e);
                })({}),
                o = (function (e) {
                    return ((e.Mobile = 'Mobile'), (e.Desktop = 'Desktop'), e);
                })({});
        },
        57594: (e, t, r) => {
            'use strict';
            r.d(t, { P: () => i, g: () => s });
            var l = r(55178),
                o = r(25090);
            let i = (0, l.createContext)(null);
            function s() {
                let e = (0, l.useContext)(i);
                if (null === e) throw new o.t('Store cannot be null, please add a context provider', { code: 'E_CONTEXT_STORE_NULL' });
                return e;
            }
        },
        62376: (e, t, r) => {
            'use strict';
            r.d(t, { U: () => i });
            var l = r(70204),
                o = r(34186);
            let i = () => (0, o.N)().get(l.Zf);
        },
        63038: (e, t, r) => {
            'use strict';
            r.d(t, { B: () => l });
            let l = '{tld}';
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
        85696: (e, t, r) => {
            'use strict';
            (r.r(t), r.d(t, { default: () => n }));
            var l = r(32290),
                o = r(21916),
                i = r(7443),
                s = r(51819);
            let n = () => {
                let e = (0, o.useSearchParams)().get('id');
                return (e || (0, o.notFound)(), (0, l.jsx)(s.g, { id: e, variant: i.x.CATEGORY }));
            };
        },
        97841: (e, t, r) => {
            'use strict';
            r.d(t, { w: () => A });
            var l = r(32290),
                o = r(63618),
                i = r(96103),
                s = r(60900),
                n = r(31010),
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
                d = (e) => {
                    let { formatMessage: t, language: r, tld: l, year: o } = e;
                    return {
                        year: o,
                        yandexMusic: { id: a.YANDEX, title: t({ id: 'footer.yandex-music' }), url: c(a.YANDEX, l, r) },
                        yandexProjects: { id: a.YANDEX_PROJECTS, title: t({ id: 'footer.yandex-project' }), url: c(a.YANDEX_PROJECTS, l, r) },
                    };
                };
            var u = r(15559),
                _ = r(8626);
            let m = (e) => e(new Date(), (0, _.m)());
            var h = r(61945),
                x = r(57594),
                E = r(77088),
                g = r.n(E),
                p = r(21732),
                N = r(71926),
                C = r(61258);
            let R = (e) => {
                    let { className: t, data: r } = e;
                    return (0, l.jsxs)('div', {
                        className: (0, o.$)(g().copyrights, t),
                        'data-test-id': p.S7.FOOTER_COPYRIGHTS,
                        children: [
                            (0, l.jsxs)(N.HL, {
                                variant: 'span',
                                type: 'text',
                                size: 's',
                                weight: 'medium',
                                className: g().text,
                                children: [
                                    '\xa9 ',
                                    r.year,
                                    ' \xa0',
                                    (0, l.jsx)(C.N, {
                                        target: '_blank',
                                        href: r.yandexMusic.url,
                                        className: (0, o.$)(g().copyrightLink, g().yandexMusicLink),
                                        'data-test-id': p.S7.FOOTER_YANDEX_MUSIC_LINK,
                                        children: r.yandexMusic.title,
                                    }),
                                ],
                            }),
                            (0, l.jsx)(N.HL, { variant: 'span', type: 'text', size: 's', weight: 'medium', children: ' • ' }),
                            (0, l.jsx)(C.N, {
                                target: '_blank',
                                href: r.yandexProjects.url,
                                className: g().copyrightLink,
                                'data-test-id': p.S7.FOOTER_YANDEX_PROJECT_LINK,
                                children: r.yandexProjects.title,
                            }),
                        ],
                    });
                },
                f = (e) => {
                    let { disclaimer: t, links: r } = e;
                    return (0, l.jsxs)('div', {
                        className: g().links,
                        children: [
                            (0, l.jsx)('ol', {
                                className: g().list,
                                'data-test-id': p.S7.FOOTER_LINKS_LIST,
                                children: r.map((e) => {
                                    let { id: t, title: r, url: o } = e;
                                    return (0, l.jsx)(
                                        'li',
                                        {
                                            className: g().item,
                                            children: (0, l.jsx)(C.N, { target: '_blank', href: o, className: g().link, 'data-test-id': p.S7.FOOTER_LINK, children: r }),
                                        },
                                        t,
                                    );
                                }),
                            }),
                            (0, l.jsx)(N.HL, {
                                variant: 'span',
                                type: 'text',
                                size: 'm',
                                weight: 'medium',
                                className: g().explicitText,
                                tabIndex: 0,
                                dangerouslySetInnerHTML: { __html: t },
                                'data-test-id': p.S7.FOOTER_DISCLAIMER_TEXT,
                            }),
                        ],
                    });
                },
                O = (e) => {
                    let { className: t, data: r } = e;
                    return (0, l.jsxs)('footer', {
                        className: (0, o.$)(g().root, g().important, t),
                        'data-test-id': p.S7.FOOTER,
                        children: [(0, l.jsx)(f, { links: r.links, disclaimer: r.disclaimer }), (0, l.jsx)(R, { data: r.copyrights })],
                    });
                };
            (0, i.PA)((e) => {
                let { className: t } = e,
                    { location: r } = (0, x.g)(),
                    { formatDate: o, formatMessage: i } = (0, s.A)(),
                    { language: n } = (0, h.h)(),
                    a = d({ formatMessage: i, language: n, tld: r.tld, year: m(o) });
                return (0, l.jsx)(R, { className: t, data: a });
            });
            let A = (0, i.PA)((e) => {
                var t;
                let { className: r } = e,
                    { experiments: i, location: _, user: E } = (0, x.g)(),
                    { formatDate: p, formatMessage: N } = (0, s.A)(),
                    { isEnabled: C } = null != (t = (0, n.P)()) ? t : {},
                    { language: R } = (0, h.h)(),
                    f = ((e) => {
                        let { checkExperiment: t, formatMessage: r, isWebApplication: l, language: o, tld: i, userRegion: s, year: n } = e;
                        return {
                            links: ((e) => {
                                let { formatMessage: t, isWebApplication: r, tld: l, language: o, userRegion: i } = e,
                                    s = { id: a.COPYRIGHT_HOLDER, title: t({ id: 'footer.links-copyright-holders' }), url: c(a.COPYRIGHT_HOLDER, l, o) },
                                    n = { id: a.PRIVACY_POLICY, title: t({ id: 'footer.links-privacy-policy' }), url: c(a.PRIVACY_POLICY, l, o) },
                                    d = { id: a.AGREEMENT, title: t({ id: 'footer.links-terms' }), url: c(a.AGREEMENT, l, o) },
                                    u = { id: a.RECOMMENDATION_RULES, title: t({ id: 'footer.links-recommendation-rules' }), url: c(a.RECOMMENDATION_RULES, l, o) },
                                    _ = { id: a.HELP, title: t({ id: 'footer.links-help' }), url: c(a.HELP, l, o) },
                                    m = [s, d, u];
                                return (r && 'ru' === i && m.push(n), m.push(_), m);
                            })({ formatMessage: r, isWebApplication: l, language: o, tld: i, userRegion: s }),
                            disclaimer: (0, u.v)({
                                checkExperiment: t,
                                getDisclaimerContent: () => r({ id: 'footer.disclaimer-content' }),
                                getExplicitContent: () => r({ id: 'footer.explicit-content' }),
                                userRegion: s,
                            }),
                            copyrights: d({ formatMessage: r, language: o, tld: i, year: n }),
                        };
                    })({
                        checkExperiment: (e, t) => i.checkExperiment(e, t),
                        formatMessage: N,
                        isWebApplication: !1,
                        tld: _.tld,
                        language: R,
                        userRegion: E.account.data.userSessionRegionIso,
                        year: m(p),
                    });
                return (0, l.jsx)(O, { className: (0, o.$)({ [g().root_withOffsetForDeeplink]: C }, r), data: f });
            });
        },
    },
    (e) => {
        (e.O(
            0,
            [
                1010, 7231, 7412, 8461, 2147, 4517, 9763, 1256, 3608, 3778, 6706, 5472, 8378, 900, 2536, 2146, 3353, 2474, 8035, 347, 2732, 1410, 1417, 229, 8506, 6050,
                5806, 7702, 6874, 9155, 861, 4668, 9740, 1175, 4499, 8915, 8816, 2563, 4220, 9562, 7358,
            ],
            () => e((e.s = 39530)),
        ),
            (_N_E = e.O()));
    },
]);
