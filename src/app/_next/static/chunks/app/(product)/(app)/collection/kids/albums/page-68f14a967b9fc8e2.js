(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [229, 4602],
    {
        3377: (e, t, i) => {
            'use strict';
            i.d(t, { WithAuth: () => p });
            var s = i(32290),
                r = i(96103),
                o = i(21916),
                l = i(63618),
                n = i(39407),
                a = i(71926),
                c = i(94218),
                u = i(55556),
                d = i.n(u);
            let _ = (0, r.PA)(() =>
                (0, s.jsxs)('div', {
                    className: d().root,
                    children: [
                        (0, s.jsx)(a.DZ, {
                            className: (0, l.$)(d().title, d().important),
                            variant: 'h3',
                            size: 'xs',
                            children: (0, s.jsx)(n.A, { id: 'authorization.enter-title' }),
                        }),
                        (0, s.jsx)(a.HL, {
                            className: (0, l.$)(d().text, d().important),
                            variant: 'span',
                            type: 'text',
                            size: 'l',
                            weight: 'normal',
                            children: (0, s.jsx)(n.A, { id: 'authorization.enter-text' }),
                        }),
                        (0, s.jsx)(c.H, { size: 'l', className: d().button }),
                    ],
                }),
            );
            var m = i(20472),
                h = i(57594);
            let p = (0, r.PA)((e) => {
                let { children: t, withRedirectToMainPage: i } = e,
                    { user: r } = (0, h.g)();
                return r.isAuthorized ? t : (i && (0, o.redirect)(m.Z.main.href), (0, s.jsx)(_, {}));
            });
        },
        8626: (e, t, i) => {
            'use strict';
            i.d(t, { m: () => s });
            let s = () => ({ year: 'numeric' });
        },
        10733: (e, t, i) => {
            'use strict';
            i.d(t, { G: () => o });
            var s = i(91945),
                r = i(50891);
            class o extends r.m {
                constructor(e, t) {
                    (super(e, { code: 'E_HTTP_CLIENT_NON_2XX_3XX_RESPONSE', cause: t.cause }),
                        (0, s._)(this, 'name', 'HttpErrorException'),
                        (0, s._)(this, 'statusCode', void 0),
                        (this.statusCode = t.statusCode),
                        Object.setPrototypeOf(this, o.prototype));
                }
            }
        },
        11262: (e, t, i) => {
            'use strict';
            i.d(t, { X: () => u });
            var s = i(32290),
                r = i(55178),
                o = i(91027),
                l = i(71730),
                n = i(45477),
                a = i(75582),
                c = i(49399);
            let u = (e, t) => {
                let { notify: i, dismiss: u } = (0, a.l)(),
                    d = (0, r.useRef)(void 0),
                    _ = (0, o.c)(() => {
                        var i;
                        (u({ notificationId: d.current }), (d.current = 0));
                        let s = [...(null != (i = e.lastRejectedPagesList) ? i : [])].reverse().filter((t) => {
                            var i;
                            return (null == (i = e.pageStates) ? void 0 : i[t]) === c.G.REJECT;
                        });
                        (e.resetRejectedPagesState(),
                            s.forEach((e) => {
                                t(e);
                            }));
                    });
                (0, r.useEffect)(() => {
                    e.rejectedPagesCount > 0 && !d.current && (d.current = i((0, s.jsx)(l.L, { reloadBlocks: _ }), { containerId: n.u.ERROR, autoClose: !1 }));
                }, [u, _, i, e.rejectedPagesCount]);
            };
        },
        15559: (e, t, i) => {
            'use strict';
            i.d(t, { v: () => r });
            var s = i(79406);
            let r = (e) => {
                let { checkExperiment: t, getDisclaimerContent: i, getExplicitContent: r, userRegion: o } = e;
                return 'ru' === o && t(s.z.WebNextFooterDisclaimer, 'on') ? i() : r();
            };
        },
        20472: (e, t, i) => {
            'use strict';
            i.d(t, { Z: () => r });
            var s = i(68243);
            let r = {
                main: (0, s.u)('/'),
                chart: (0, s.u)('/chart'),
                chartPodcasts: (0, s.u)('/chart/podcasts'),
                collection: (0, s.u)('/collection'),
                collectionAlbums: (0, s.u)('/collection/albums'),
                collectionArtists: (0, s.u)('/collection/artists'),
                collectionClips: (0, s.u)('/collection/clips'),
                collectionDislikes: (0, s.u)('/collection/dislikes'),
                collectionKids: (0, s.u)('/collection/kids'),
                collectionKidsAlbums: (0, s.u)('/collection/kids/albums'),
                collectionKidsPlaylists: (0, s.u)('/collection/kids/playlists'),
                collectionKidsTracks: (0, s.u)('/collection/kids/tracks'),
                collectionNonMusic: (0, s.u)('/collection/non-music'),
                collectionNonMusicLiked: (0, s.u)('/collection/non-music/liked'),
                collectionVibeRooms: (0, s.u)('/collection/multivibes'),
                collectionPlaylists: (0, s.u)('/collection/playlists'),
                collectionPlaylistsCreated: (0, s.u)('/collection/playlists/created'),
                collectionPlaylistsLiked: (0, s.u)('/collection/playlists/liked'),
                collectionShelf: (0, s.u)('/collection/shelf'),
                collectionShelfLiked: (0, s.u)('/collection/shelf/liked'),
                collectionShelfNewEpisodes: (0, s.u)('/collection/shelf/new-episodes'),
                collectionShelfRecentlyPlayed: (0, s.u)('/collection/shelf/recently-played'),
                concerts: (0, s.u)('/concerts'),
                kids: (0, s.u)('/kids'),
                mixes: (0, s.u)('/mixes'),
                musicHistory: (0, s.u)('/music-history'),
                muzmarket: (0, s.u)('/muzmarket'),
                mymusic: (0, s.u)('/mymusic'),
                mymusicDownloadsTracks: (0, s.u)('/mymusic/downloads/tracks'),
                multivibe: (0, s.u)('/multivibe'),
                nonMusic: (0, s.u)('/non-music'),
                pay: (0, s.u)('/pay'),
                userSlides: (0, s.u)('/slides/user'),
                search: (0, s.u)('/search'),
                searchHistory: (0, s.u)('/search/history'),
                settings: (0, s.u)('/settings'),
                video: (0, s.u)('/video'),
            };
        },
        26362: (e) => {
            e.exports = {
                root: 'CollectionKidsAlbumsPage_root__Fjk4C',
                scrollContainer: 'CollectionKidsAlbumsPage_scrollContainer__OWiCy',
                important: 'CollectionKidsAlbumsPage_important__1ghiQ',
                footer: 'CollectionKidsAlbumsPage_footer__9niUH',
                item: 'CollectionKidsAlbumsPage_item__A5TuB',
                content: 'CollectionKidsAlbumsPage_content__6w_jh',
            };
        },
        30294: (e, t, i) => {
            'use strict';
            i.d(t, { c: () => s });
            let s = 20;
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
        31010: (e, t, i) => {
            'use strict';
            i.d(t, { H: () => r, P: () => o });
            var s = i(55178);
            let r = (0, s.createContext)(null),
                o = () => (0, s.useContext)(r);
        },
        32468: (e, t, i) => {
            'use strict';
            i.d(t, { A: () => l });
            var s = i(32290),
                r = i(77088),
                o = i.n(r);
            let l = (e) => {
                let { children: t } = e;
                return (0, s.jsx)('footer', { className: o().empty });
            };
        },
        33898: (e, t, i) => {
            'use strict';
            var s;
            (i.d(t, { Z: () => s }),
                (function (e) {
                    ((e.METHOD_NOT_SUPPORTED = 'E_BEACON_METHOD_NOT_SUPPORTED'),
                        (e.NOT_AVAILABLE = 'E_BEACON_NOT_AVAILABLE'),
                        (e.QUEUE_FAILED = 'E_BEACON_QUEUE_FAILED'),
                        (e.NO_RESPONSE_DATA = 'E_BEACON_NO_RESPONSE_DATA'),
                        (e.RETRY_EXHAUSTED = 'E_BEACON_RETRY_EXHAUSTED'));
                })(s || (s = {})));
        },
        33960: (e) => {
            e.exports = {
                root: 'CollectionKidsSubPageEmpty_root__53xVY',
                scrollableContainer: 'CollectionKidsSubPageEmpty_scrollableContainer__Dh6Sp',
                content: 'CollectionKidsSubPageEmpty_content__VZZg5',
                icon: 'CollectionKidsSubPageEmpty_icon__IQAON',
                title: 'CollectionKidsSubPageEmpty_title__t9H4h',
                button: 'CollectionKidsSubPageEmpty_button__26EKY',
                footer: 'CollectionKidsSubPageEmpty_footer__XQnAw',
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
        42464: (e, t, i) => {
            'use strict';
            i.d(t, { N: () => s });
            let s = (e) => 'object' == typeof e && null !== e && 'request' in e && null !== e.request;
        },
        45257: (e, t, i) => {
            'use strict';
            i.d(t, { $: () => g });
            var s = i(32290),
                r = i(63618),
                o = i(8055),
                l = i(55178);
            let n = (e) => {
                    let { style: t, forwardRef: i, context: r, ...o } = e,
                        l = (null == r ? void 0 : r.listAriaLabel) || void 0,
                        n = (null == r ? void 0 : r.listRole) || 'region';
                    return (0, s.jsx)('div', { 'aria-labelledby': 'virtual-grid-header', role: n, 'aria-label': l, style: { ...t }, ref: i, ...o });
                },
                a = (0, l.forwardRef)((e, t) => (0, s.jsx)(n, { forwardRef: t, ...e }));
            var c = i(39684),
                u = i.n(c);
            let d = (e) => {
                    let { style: t, forwardRef: i, withFooter: o, withHeader: l, withForceScroll: n, ...a } = e;
                    return (0, s.jsx)('div', {
                        className: (0, r.$)(u().scroller, { [u().scroller_withFooter]: o, [u().scroller_withHeader]: l, [u().scroller_withForceScroll]: n }),
                        style: { ...t },
                        ref: i,
                        ...a,
                        tabIndex: -1,
                    });
                },
                _ = (0, l.forwardRef)((e, t) => (0, s.jsx)(d, { forwardRef: t, ...e }));
            var m = i(62060),
                h = i(31417);
            let p = (e) => {
                    let {
                            pageSize: t,
                            onPageHandler: i,
                            onRangeHandler: r,
                            debounceDurationInMs: o = 100,
                            totalCount: n = 0,
                            shouldTriggerRangeChangedOn: a = [],
                            endReached: c,
                            virtuosoRef: u,
                            ...d
                        } = e,
                        [_, p] = (0, l.useState)(null),
                        g = (0, l.useMemo)(
                            () =>
                                (0, m.A)((e) => {
                                    if ((null == r || r(e), a.length > 0 && p(e), t && i)) {
                                        let s = Math.floor(e.endIndex / t) + 1,
                                            r = Math.floor(e.startIndex / t);
                                        for (let e = r; e < s; e++) i(e);
                                    }
                                }, o),
                            [o, r, t, i, a],
                        );
                    (0, l.useEffect)(() => {
                        a.length > 0 && _ && g(_);
                    }, a);
                    let E = (0, l.useMemo)(() => {
                        if (c)
                            return (0, m.A)((e) => {
                                c(e);
                            }, o);
                    }, [c, o]);
                    return (0, s.jsx)(h.sN, { ref: u, rangeChanged: g, totalCount: n, endReached: E, ...d });
                },
                g = (e) => {
                    let {
                            className: t,
                            customComponents: i,
                            onGetDataByPage: n,
                            onGetDataByRange: c,
                            itemClassName: d,
                            itemContentCallback: m,
                            listClassName: h,
                            overscan: g = 700,
                            pageSize: E = 20,
                            totalCount: y,
                            totalRequests: v,
                            debounceDurationInMs: x,
                            initialItemCount: N,
                            minInitialItemCount: f = 20,
                            handleRef: O,
                            alwaysShowScrollbar: b = !1,
                            testId: C,
                            isMobileLayout: A = !1,
                            shouldTriggerRangeChangedOn: I,
                            ...T
                        } = e,
                        [S, L] = (0, l.useState)(!1),
                        P = (0, l.useMemo)(
                            () =>
                                (0, o.A)((e) => {
                                    L(e);
                                }, 100),
                            [],
                        ),
                        k = (0, l.useMemo)(() => {
                            var e, t;
                            return A
                                ? {
                                      Scroller: _,
                                      List: null != (e = null == i ? void 0 : i.List) ? e : a,
                                      Item: null == i ? void 0 : i.Item,
                                      ScrollSeekPlaceholder: null == i ? void 0 : i.ScrollSeekPlaceholder,
                                  }
                                : {
                                      Scroller: _,
                                      List: null != (t = null == i ? void 0 : i.List) ? t : a,
                                      Item: null == i ? void 0 : i.Item,
                                      Header: null == i ? void 0 : i.Header,
                                      Footer: null == i ? void 0 : i.Footer,
                                      ScrollSeekPlaceholder: null == i ? void 0 : i.ScrollSeekPlaceholder,
                                  };
                        }, [i, v, A]),
                        R = N ? Math.min(N, f) : void 0;
                    return (0, s.jsxs)('div', {
                        className: (0, r.$)(u().root, { [u().root_scrolling]: S || b, [u().root_notScrolling]: !S && !b }, t),
                        'data-test-id': C,
                        children: [
                            A && (null == i ? void 0 : i.Header) && i.Header(),
                            (0, s.jsx)(p, {
                                overscan: g,
                                components: k,
                                listClassName: h,
                                itemClassName: d,
                                isScrolling: P,
                                itemContent: m,
                                scrollerRef: O,
                                totalCount: y,
                                pageSize: E,
                                onPageHandler: n,
                                onRangeHandler: c,
                                debounceDurationInMs: x,
                                initialItemCount: R,
                                shouldTriggerRangeChangedOn: I,
                                ...T,
                            }),
                            A && (null == i ? void 0 : i.Footer) && i.Footer(),
                        ],
                    });
                };
        },
        50891: (e, t, i) => {
            'use strict';
            i.d(t, { m: () => o });
            var s = i(91945),
                r = i(25090);
            class o extends r.t {
                constructor(e = 'Http Client error', { code: t = 'E_HTTP_CLIENT', ...i } = {}) {
                    (super(e, { code: t, ...i }), (0, s._)(this, 'name', 'HttpException'), Object.setPrototypeOf(this, o.prototype));
                }
            }
        },
        50961: (e, t, i) => {
            'use strict';
            var s;
            (i.d(t, { X: () => s }),
                (function (e) {
                    ((e[(e.NOT_MODIFIED = 304)] = 'NOT_MODIFIED'),
                        (e[(e.NOT_FOUND = 404)] = 'NOT_FOUND'),
                        (e[(e.BAD_REQUEST = 400)] = 'BAD_REQUEST'),
                        (e[(e.REQUEST_TIMEOUT = 408)] = 'REQUEST_TIMEOUT'),
                        (e[(e.PRECONDITION_FAILED = 412)] = 'PRECONDITION_FAILED'),
                        (e[(e.TEAPOT = 418)] = 'TEAPOT'));
                })(s || (s = {})));
        },
        51854: (e, t, i) => {
            (Promise.resolve().then(i.bind(i, 3377)), Promise.resolve().then(i.bind(i, 62302)));
        },
        52199: (e, t, i) => {
            'use strict';
            i.d(t, { r: () => s });
            let s = (e, t, i) => e.replace(i, t);
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
        61500: (e, t, i) => {
            'use strict';
            i.d(t, { i: () => N });
            var s = i(32290),
                r = i(96103),
                o = i(39407),
                l = i(63423),
                n = i(82586),
                a = i(46049),
                c = i(71926),
                u = i(7999),
                d = i(83808),
                _ = i(83920),
                m = i(20472),
                h = i(32641),
                p = i(57594),
                g = i(97841),
                E = i(32468),
                y = i(74694),
                v = i(33960),
                x = i.n(v);
            let N = (0, r.PA)((e) => {
                let { title: t } = e,
                    {
                        settings: { isMobile: i },
                    } = (0, p.g)(),
                    { contentScrollRef: r, setContentScrollRef: v } = (0, _.g)(),
                    N = (0, d.W)(),
                    f = (0, h.Z)(m.Z.collectionKids.href);
                return (0, s.jsxs)(u.h, {
                    scrollElement: r,
                    outerTitle: t,
                    children: [
                        (0, s.jsx)(y.Y, {
                            variant: y.V.TEXT,
                            withForwardControl: !1,
                            withBackwardControl: N.canBack,
                            children: (0, s.jsx)(c.DZ, { variant: 'h2', weight: 'bold', size: i ? 'm' : 'xl', lineClamp: 2, children: t }),
                        }),
                        (0, s.jsxs)(a.N, {
                            ref: v,
                            containerClassName: x().scrollableContainer,
                            className: x().root,
                            children: [
                                (0, s.jsxs)('div', {
                                    className: x().content,
                                    children: [
                                        (0, s.jsx)('div', { className: x().icon, children: (0, s.jsx)(n.I, { variant: 'like', size: 'l' }) }),
                                        (0, s.jsx)(c.DZ, {
                                            className: x().title,
                                            variant: 'h3',
                                            size: 'xs',
                                            children: (0, s.jsx)(o.A, { id: 'error-messages.empty-collection-kids-sub-page-title' }),
                                        }),
                                        (0, s.jsx)(l.$, {
                                            onClick: f,
                                            className: x().button,
                                            role: 'link',
                                            color: 'secondary',
                                            size: 's',
                                            radius: 'xxxl',
                                            children: (0, s.jsx)(c.HL, {
                                                type: 'controls',
                                                variant: 'span',
                                                size: 'm',
                                                children: (0, s.jsx)(o.A, { id: 'error-messages.empty-collection-kids-sub-page-link' }),
                                            }),
                                        }),
                                    ],
                                }),
                                (0, s.jsx)(E.A, { children: (0, s.jsx)(g.w, { className: x().footer }) }),
                            ],
                        }),
                    ],
                });
            });
        },
        62302: (e, t, i) => {
            'use strict';
            i.d(t, { CollectionKidsAlbumsPage: () => L });
            var s = i(32290),
                r = i(63618),
                o = i(96103),
                l = i(55178),
                n = i(60900),
                a = i(39407),
                c = i(21732),
                u = i(71926),
                d = i(64170),
                _ = i(24170),
                m = i(7999),
                h = i(48922),
                p = i(22714),
                g = i(83808),
                E = i(83920),
                y = i(3796),
                v = i(57594),
                x = i(11262),
                N = i(97841),
                f = i(32468),
                O = i(74694),
                b = i(89020),
                C = i(45257),
                A = i(30294),
                I = i(61500),
                T = i(26362),
                S = i.n(T);
            let L = (0, o.PA)(() => {
                let {
                        settings: { isMobile: e },
                        collection: {
                            kids: { albums: t },
                        },
                    } = (0, v.g)(),
                    { contentScrollRef: i, setContentScrollRef: o } = (0, E.g)(),
                    T = (0, g.W)(),
                    { formatMessage: L } = (0, n.A)(),
                    P = (0, l.useCallback)(
                        (e) => {
                            t.getData({ page: e, pageSize: A.c });
                        },
                        [t],
                    );
                (0, x.X)(t.pagesLoader, P);
                let k = (0, l.useMemo)(() => ({ Footer: () => (0, s.jsx)(f.A, { children: (0, s.jsx)(N.w, { className: S().footer }) }) }), []),
                    R = t.isShimmerVisible ? 20 : t.items.length;
                return ((0, l.useEffect)(
                    () => () => {
                        t.reset();
                    },
                    [t],
                ),
                (0, y.J)(t.isResolved),
                t.isNeededToLoad && (0, l.use)(t.getData({ pageSize: A.c })),
                t.isRejected)
                    ? (0, s.jsx)(d.SomethingWentWrong, {})
                    : t.isEmpty
                      ? (0, s.jsx)(I.i, { title: L({ id: 'kids.albums-and-podcasts' }) })
                      : (0, s.jsx)(p.n, {
                            pageId: h._Q.COLLECTION_KIDS_ALBUMS,
                            children: (0, s.jsx)(m.h, {
                                scrollElement: i,
                                outerTitle: L({ id: 'kids.albums-and-podcasts' }),
                                children: (0, s.jsxs)('div', {
                                    className: S().root,
                                    'data-test-id': c.Xk.collection.COLLECTION_KIDS_ALBUMS_PAGE,
                                    children: [
                                        (0, s.jsx)(O.Y, {
                                            variant: O.V.TEXT,
                                            withForwardControl: !1,
                                            withBackwardControl: T.canBack,
                                            children: (0, s.jsx)(u.DZ, {
                                                variant: 'h2',
                                                weight: 'bold',
                                                size: e ? 'm' : 'xl',
                                                lineClamp: 2,
                                                children: (0, s.jsx)(a.A, { id: 'kids.albums-and-podcasts' }),
                                            }),
                                        }),
                                        (0, s.jsx)(C.$, {
                                            className: (0, r.$)(S().scrollContainer, S().important),
                                            listClassName: S().content,
                                            itemClassName: S().item,
                                            customComponents: k,
                                            itemContentCallback: (e) => {
                                                let i = t.items[e],
                                                    r = L({ id: 'loading-messages.entity-is-loading' }, { entityName: L({ id: 'entity-names.album' }) });
                                                return i
                                                    ? (0, s.jsx)(_.a, { album: i, contentLinesCount: 4, withLikesCount: !0 }, i.id)
                                                    : (0, s.jsx)(b.V, { 'aria-label': r, linesCount: 4 });
                                            },
                                            initialItemCount: R,
                                            totalCount: R,
                                            onGetDataByPage: P,
                                            pageSize: A.c,
                                            totalRequests: t.requestsCount,
                                            handleRef: o,
                                            context: { listAriaLabel: L({ id: 'entity-names.albums' }) },
                                            isMobileLayout: e,
                                            useWindowScroll: e,
                                        }),
                                    ],
                                }),
                            }),
                        });
            });
        },
        63038: (e, t, i) => {
            'use strict';
            i.d(t, { B: () => s });
            let s = '{tld}';
        },
        64170: (e, t, i) => {
            'use strict';
            i.d(t, { SomethingWentWrong: () => O });
            var s = i(32290),
                r = i(63618),
                o = i(96103),
                l = i(55178),
                n = i(60900),
                a = i(39407),
                c = i(63423),
                u = i(82586),
                d = i(71926),
                _ = i(17811),
                m = i(99923),
                h = i(90153),
                p = i(74416),
                g = i(62376),
                E = i(37240),
                y = i(83920),
                v = i(20472),
                x = i(12894),
                N = i(30310),
                f = i.n(N);
            let O = (0, o.PA)((e) => {
                let { className: t, withBackwardControl: i = !0 } = e,
                    { formatMessage: o } = (0, n.A)(),
                    N = o({ id: 'error-messages.something-went-wrong' });
                !(function (e) {
                    let t = (0, p.st)(),
                        { hash: i } = (0, p.gf)(),
                        { pageId: s } = (0, E.$)(),
                        r = (0, g.U)();
                    (0, l.useEffect)(() => {
                        if (!t || !i || !s) return;
                        let o = (0, _.F)({
                            params: {
                                entityType: m.EntityTypes.Error,
                                entityId: m.EntityTypes.SomethingWrong,
                                errorMessage: e,
                                hash: i,
                                pageId: s,
                                pageStyle: m.PageStyles.Fullscreen,
                                pagePlacement: m.PagePlacements.Fullscreen,
                                mainObjectType: m.DomainObjectType.NonApplicable,
                                mainObjectId: m.DomainObjectType.NonApplicable,
                            },
                            logger: r,
                            context: 'useSendEventOnSomethingWentWrongShowed',
                        });
                        o && (0, h.z5)(t.evgenInstance, o);
                    }, [t, e, i, s, r]);
                })(N);
                let { sendRefreshEvent: O } = (function () {
                        let e = (0, p.st)(),
                            { hash: t } = (0, p.gf)(),
                            { pageId: i } = (0, E.$)(),
                            s = (0, g.U)();
                        return {
                            sendRefreshEvent: (0, l.useCallback)(() => {
                                if (!e || !t || !i) return;
                                let r = (0, _.F)({
                                    params: {
                                        actionType: m.ActionType.Refresh,
                                        userInteractionType: m.UserInteractionType.Tap,
                                        entityType: m.EntityTypes.Error,
                                        entityId: m.EntityTypes.SomethingWrong,
                                        hash: t,
                                        pageId: i,
                                        pageStyle: m.PageStyles.Fullscreen,
                                        pagePlacement: m.PagePlacements.Fullscreen,
                                        mainObjectType: m.DomainObjectType.NonApplicable,
                                        mainObjectId: m.DomainObjectType.NonApplicable,
                                    },
                                    logger: s,
                                    context: 'useSendEventOnSomethingWentWrongRefreshed',
                                });
                                r && (0, h.bv)(e.evgenInstance, r);
                            }, [e, t, i, s]),
                        };
                    })(),
                    b = (0, l.useCallback)(() => {
                        (O(), (window.location.href = v.Z.main.href));
                    }, [O]),
                    { contentRef: C } = (0, y.g)();
                return (0, s.jsxs)('div', {
                    className: (0, r.$)(f().root, t),
                    children: [
                        i &&
                            (0, s.jsx)(x.L, { withBackwardFallback: '/', className: (0, r.$)(f().navigation, { [f().navigation_desktop]: !C }), withForwardControl: !1 }),
                        (0, s.jsxs)('div', {
                            className: (0, r.$)(f().content, { [f().content_shrink]: !i }),
                            children: [
                                (0, s.jsx)(u.I, { className: f().icon, variant: 'attention', size: 'xxl' }),
                                (0, s.jsx)(d.DZ, { className: (0, r.$)(f().title, f().important), variant: 'h3', size: 'xs', children: N }),
                                (0, s.jsxs)(d.HL, {
                                    className: (0, r.$)(f().text, f().important),
                                    variant: 'span',
                                    type: 'text',
                                    size: 'l',
                                    weight: 'normal',
                                    children: [!1, (0, s.jsx)(a.A, { id: 'page-error.try-to-restart-app' })],
                                }),
                                (0, s.jsx)(c.$, {
                                    onClick: b,
                                    className: f().button,
                                    role: 'link',
                                    color: 'secondary',
                                    size: 'l',
                                    radius: 'xxxl',
                                    children: (0, s.jsxs)(d.HL, {
                                        type: 'controls',
                                        variant: 'span',
                                        size: 'm',
                                        children: [!1, (0, s.jsx)(a.A, { id: 'page-error.restart-app-button' })],
                                    }),
                                }),
                            ],
                        }),
                    ],
                });
            });
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
        71730: (e, t, i) => {
            'use strict';
            i.d(t, { L: () => h });
            var s = i(32290),
                r = i(63618),
                o = i(55178),
                l = i(60900),
                n = i(39407),
                a = i(63423),
                c = i(82586),
                u = i(71926),
                d = i(58534),
                _ = i(70718),
                m = i.n(_);
            let h = (e) => {
                let { reloadBlocks: t, closeToast: i } = e,
                    _ = (0, o.useRef)(null),
                    { formatMessage: h } = (0, l.A)();
                (0, o.useEffect)(() => {
                    var e;
                    null == (e = _.current) || e.focus();
                }, []);
                let p = (0, o.useMemo)(
                    () =>
                        (0, s.jsxs)('div', {
                            className: m().message,
                            children: [
                                (0, s.jsx)(u.HL, {
                                    className: m().text,
                                    variant: 'div',
                                    type: 'controls',
                                    size: 'm',
                                    children: (0, s.jsx)(n.A, { id: 'error-messages.error-load-part-page' }),
                                }),
                                (0, s.jsx)(a.$, {
                                    ref: _,
                                    className: m().button,
                                    onClick: t,
                                    variant: 'text',
                                    'aria-label': h({ id: 'interface-actions.reload-part-page' }),
                                    icon: (0, s.jsx)(c.I, { variant: 'reset', size: 'xxs', className: m().icon }),
                                }),
                            ],
                        }),
                    [h, t],
                );
                return (0, s.jsx)(d.$, { className: (0, r.$)(m().root, m().important), message: p, closeToast: i });
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
        78648: (e, t, i) => {
            'use strict';
            i.d(t, { C8: () => o, UC: () => l, dM: () => n, uV: () => a });
            var s = i(87953),
                r = i(42464);
            let o = (e) => {
                    if (void 0 === e || '' === e) return 'missing';
                    let t = Number(e);
                    return !Number.isFinite(t) || t < 0 ? 'invalid' : t < 86400 ? 'lt-1d' : t <= 2592e3 ? '1-30d' : 'gt-30d';
                },
                l = (e) => (e.uid ? 'authorized' : 'no-uid'),
                n = (e) => {
                    if (!(e instanceof s.m5) || !(0, r.N)(e.cause)) return 'unexpected';
                    let t = ((e) => {
                        if (!(0, r.N)(e.cause)) return;
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
        80176: (e, t, i) => {
            'use strict';
            i.d(t, { t: () => s });
            class s extends Error {
                name = 'BaseException';
                message;
                code;
                data;
                stack;
                constructor(e, t = {}) {
                    let { code: i = 'E_INTERNAL', data: r = {}, ...o } = t,
                        l = e || 'Internal error';
                    (super(l, o), (this.message = l), (this.code = i), (this.data = r), (this.stack = Error(l).stack), Object.setPrototypeOf(this, s.prototype));
                }
            }
        },
        80229: (e, t, i) => {
            'use strict';
            i.d(t, { AS: () => _, Yw: () => s, JU: () => r, DQ: () => p, Ve: () => g });
            var s,
                r,
                o = i(98411),
                l = (function () {
                    function e(e) {
                        ((this.observableValue = (0, o.vP)(e)), (this.prevValueByListener = new Map()));
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
                            var s = !0;
                            return (
                                this.prevValueByListener.has(e) || this.prevValueByListener.set(e, void 0),
                                this.observableValue.subscribe(function (r) {
                                    if (r !== i.prevValueByListener.get(e)) {
                                        if (t.skipFirstChange && s) {
                                            s = !1;
                                            return;
                                        }
                                        (i.prevValueByListener.set(e, r), e(r));
                                    }
                                })
                            );
                        }),
                        e
                    );
                })();
            !(function () {
                function e(e) {
                    ((this.observableValue = (0, o.EW)(e)), (this.prevValueByListener = new Map()));
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
                        var s = !0;
                        return (
                            this.prevValueByListener.has(e) || this.prevValueByListener.set(e, void 0),
                            this.observableValue.subscribe(function (r) {
                                if (r !== i.prevValueByListener.get(e)) {
                                    if (t.skipFirstChange && s) {
                                        s = !1;
                                        return;
                                    }
                                    (i.prevValueByListener.set(e, r), e(r));
                                }
                            })
                        );
                    }));
            })();
            var n = i(80176);
            class a extends n.t {
                name = 'DisclaimerDictionaryLoadError';
                constructor(e) {
                    (super('Failed to load disclaimer dictionary', { code: 'E_DISCLAIMER_DICTIONARY_LOAD', cause: e, data: { valueType: typeof e } }),
                        Object.setPrototypeOf(this, a.prototype));
                }
            }
            class c extends n.t {
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
            })(s || (s = {}));
            let u = (e) => {
                    let t = [];
                    for (let i of e) {
                        let [e, s] = i.split(':');
                        e && s && t.push({ type: e, id: s });
                    }
                    return t;
                },
                d = (e, t) => u(e).filter((e) => e.type === t);
            class _ {
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
                        (this.itemsObservable = new l(null)),
                        (this.isLoadingObservable = new l(!1)),
                        (this.errorObservable = new l(null)),
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
                            let t = e instanceof Error ? e : new a(e);
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
                    let i = d(e, t);
                    return (await Promise.all(i.map(async (e) => await this.getById(e.id)))).filter((e) => void 0 !== e);
                }
                async resolveAll(e) {
                    let t = u(e),
                        i = await Promise.all(
                            t.map(async (e) => {
                                let t = await this.getById(e.id);
                                return void 0 === t ? null : { disclaimerItem: t, disclaimerType: e.type };
                            }),
                        ),
                        s = {};
                    for (let e of i)
                        if (e) {
                            let t = s[e.disclaimerType] ?? [];
                            (t.push(e.disclaimerItem), (s[e.disclaimerType] = t));
                        }
                    return s;
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
            })(r || (r = {}));
            let m = new Map([
                    [s.EXPLICIT_ICON, r.E],
                    [s.AGE_18_ICON, r.AGE_18],
                    [s.AGE_16_ICON, r.AGE_16],
                    [s.AGE_12_ICON, r.AGE_12],
                    [s.EXCLAMATION_ICON, r.EXCLAMATION],
                ]),
                h = [s.EXPLICIT_ICON, s.AGE_18_ICON, s.AGE_16_ICON, s.AGE_12_ICON, s.EXCLAMATION_ICON],
                p = (e) => {
                    let t = ((e, t) => {
                        for (let i of t) {
                            let t = d(e, i)[0];
                            if (t) return t;
                        }
                        return null;
                    })(e, h);
                    if (null === t) return null;
                    let i = m.get(t.type);
                    return void 0 !== i ? i : null;
                },
                g = (e, t) => d(e, t).length > 0;
        },
        87953: (e, t, i) => {
            'use strict';
            i.d(t, { GX: () => o.G, X1: () => s.X, m5: () => r.m });
            var s = i(50961),
                r = i(50891),
                o = i(10733);
            i(33898);
        },
        94218: (e, t, i) => {
            'use strict';
            i.d(t, { H: () => m });
            var s = i(32290),
                r = i(21916),
                o = i(39407),
                l = i(21732),
                n = i(91027),
                a = i(63423),
                c = i(71926),
                u = i(78648),
                d = i(70204),
                _ = i(34186);
            let m = (e) => {
                let { size: t = 'm', variant: i = 'default', color: m = 'primary', withRipple: h = !0, buttonText: p, isBlock: g, key: E, className: y } = e,
                    v = (0, r.useRouter)(),
                    x = (0, _.N)().get(d.QG),
                    N = (0, n.c)(() => {
                        x.authorizationUrl && ((0, u.uV)({ stage: 'attempt-start', trigger: 'user' }), v.push(x.authorizationUrl));
                    });
                return (0, s.jsx)(
                    a.$,
                    {
                        onClick: N,
                        className: y,
                        isBlock: g,
                        color: m,
                        variant: i,
                        size: t,
                        radius: 'xxxl',
                        withRipple: h,
                        'data-test-id': l.S7.UNAUTHORIZED_BUTTON,
                        children: p || (0, s.jsx)(c.HL, { variant: 'div', size: 'l', lineClamp: 1, children: (0, s.jsx)(o.A, { id: 'authorization.enter-button' }) }),
                    },
                    E,
                );
            };
        },
        97841: (e, t, i) => {
            'use strict';
            i.d(t, { w: () => b });
            var s = i(32290),
                r = i(63618),
                o = i(96103),
                l = i(60900),
                n = i(31010),
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
            let c = (e, t, i) => {
                    switch (e) {
                        case a.YANDEX:
                            if ('ru' === t) return 'https://ya.ru';
                            return;
                        case a.YANDEX_PROJECTS:
                            return 'https://yandex.'.concat(t, '/all?lang=').concat(i);
                        case a.COPYRIGHT_HOLDER:
                            return 'https://yandex.'.concat(t, '/support/music/performers-and-copyright-holders/copyright.html?lang=').concat(i);
                        case a.AGREEMENT:
                            return 'https://yandex.ru/legal/music_termsofuse?lang='.concat(i);
                        case a.RECOMMENDATION_RULES:
                            return 'https://music.yandex.ru/legal/recommendations/ru/#music';
                        case a.HELP:
                            return 'https://yandex.'.concat(t, '/support/music/index.html?lang=').concat(i);
                        case a.PRIVACY_POLICY:
                            return 'https://yandex.'.concat(t, '/legal/confidential/').concat(i);
                    }
                },
                u = (e) => {
                    let { formatMessage: t, language: i, tld: s, year: r } = e;
                    return {
                        year: r,
                        yandexMusic: { id: a.YANDEX, title: t({ id: 'footer.yandex-music' }), url: c(a.YANDEX, s, i) },
                        yandexProjects: { id: a.YANDEX_PROJECTS, title: t({ id: 'footer.yandex-project' }), url: c(a.YANDEX_PROJECTS, s, i) },
                    };
                };
            var d = i(15559),
                _ = i(8626);
            let m = (e) => e(new Date(), (0, _.m)());
            var h = i(61945),
                p = i(57594),
                g = i(77088),
                E = i.n(g),
                y = i(21732),
                v = i(71926),
                x = i(61258);
            let N = (e) => {
                    let { className: t, data: i } = e;
                    return (0, s.jsxs)('div', {
                        className: (0, r.$)(E().copyrights, t),
                        'data-test-id': y.S7.FOOTER_COPYRIGHTS,
                        children: [
                            (0, s.jsxs)(v.HL, {
                                variant: 'span',
                                type: 'text',
                                size: 's',
                                weight: 'medium',
                                className: E().text,
                                children: [
                                    '\xa9 ',
                                    i.year,
                                    ' \xa0',
                                    (0, s.jsx)(x.N, {
                                        target: '_blank',
                                        href: i.yandexMusic.url,
                                        className: (0, r.$)(E().copyrightLink, E().yandexMusicLink),
                                        'data-test-id': y.S7.FOOTER_YANDEX_MUSIC_LINK,
                                        children: i.yandexMusic.title,
                                    }),
                                ],
                            }),
                            (0, s.jsx)(v.HL, { variant: 'span', type: 'text', size: 's', weight: 'medium', children: ' • ' }),
                            (0, s.jsx)(x.N, {
                                target: '_blank',
                                href: i.yandexProjects.url,
                                className: E().copyrightLink,
                                'data-test-id': y.S7.FOOTER_YANDEX_PROJECT_LINK,
                                children: i.yandexProjects.title,
                            }),
                        ],
                    });
                },
                f = (e) => {
                    let { disclaimer: t, links: i } = e;
                    return (0, s.jsxs)('div', {
                        className: E().links,
                        children: [
                            (0, s.jsx)('ol', {
                                className: E().list,
                                'data-test-id': y.S7.FOOTER_LINKS_LIST,
                                children: i.map((e) => {
                                    let { id: t, title: i, url: r } = e;
                                    return (0, s.jsx)(
                                        'li',
                                        {
                                            className: E().item,
                                            children: (0, s.jsx)(x.N, { target: '_blank', href: r, className: E().link, 'data-test-id': y.S7.FOOTER_LINK, children: i }),
                                        },
                                        t,
                                    );
                                }),
                            }),
                            (0, s.jsx)(v.HL, {
                                variant: 'span',
                                type: 'text',
                                size: 'm',
                                weight: 'medium',
                                className: E().explicitText,
                                tabIndex: 0,
                                dangerouslySetInnerHTML: { __html: t },
                                'data-test-id': y.S7.FOOTER_DISCLAIMER_TEXT,
                            }),
                        ],
                    });
                },
                O = (e) => {
                    let { className: t, data: i } = e;
                    return (0, s.jsxs)('footer', {
                        className: (0, r.$)(E().root, E().important, t),
                        'data-test-id': y.S7.FOOTER,
                        children: [(0, s.jsx)(f, { links: i.links, disclaimer: i.disclaimer }), (0, s.jsx)(N, { data: i.copyrights })],
                    });
                };
            (0, o.PA)((e) => {
                let { className: t } = e,
                    { location: i } = (0, p.g)(),
                    { formatDate: r, formatMessage: o } = (0, l.A)(),
                    { language: n } = (0, h.h)(),
                    a = u({ formatMessage: o, language: n, tld: i.tld, year: m(r) });
                return (0, s.jsx)(N, { className: t, data: a });
            });
            let b = (0, o.PA)((e) => {
                var t;
                let { className: i } = e,
                    { experiments: o, location: _, user: g } = (0, p.g)(),
                    { formatDate: y, formatMessage: v } = (0, l.A)(),
                    { isEnabled: x } = null != (t = (0, n.P)()) ? t : {},
                    { language: N } = (0, h.h)(),
                    f = ((e) => {
                        let { checkExperiment: t, formatMessage: i, isWebApplication: s, language: r, tld: o, userRegion: l, year: n } = e;
                        return {
                            links: ((e) => {
                                let { formatMessage: t, isWebApplication: i, tld: s, language: r, userRegion: o } = e,
                                    l = { id: a.COPYRIGHT_HOLDER, title: t({ id: 'footer.links-copyright-holders' }), url: c(a.COPYRIGHT_HOLDER, s, r) },
                                    n = { id: a.PRIVACY_POLICY, title: t({ id: 'footer.links-privacy-policy' }), url: c(a.PRIVACY_POLICY, s, r) },
                                    u = { id: a.AGREEMENT, title: t({ id: 'footer.links-terms' }), url: c(a.AGREEMENT, s, r) },
                                    d = { id: a.RECOMMENDATION_RULES, title: t({ id: 'footer.links-recommendation-rules' }), url: c(a.RECOMMENDATION_RULES, s, r) },
                                    _ = { id: a.HELP, title: t({ id: 'footer.links-help' }), url: c(a.HELP, s, r) },
                                    m = [l, u, d];
                                return (i && 'ru' === o && m.push(n), m.push(_), m);
                            })({ formatMessage: i, isWebApplication: s, language: r, tld: o, userRegion: l }),
                            disclaimer: (0, d.v)({
                                checkExperiment: t,
                                getDisclaimerContent: () => i({ id: 'footer.disclaimer-content' }),
                                getExplicitContent: () => i({ id: 'footer.explicit-content' }),
                                userRegion: l,
                            }),
                            copyrights: u({ formatMessage: i, language: r, tld: o, year: n }),
                        };
                    })({
                        checkExperiment: (e, t) => o.checkExperiment(e, t),
                        formatMessage: v,
                        isWebApplication: !1,
                        tld: _.tld,
                        language: N,
                        userRegion: g.account.data.userSessionRegionIso,
                        year: m(y),
                    });
                return (0, s.jsx)(O, { className: (0, r.$)({ [E().root_withOffsetForDeeplink]: x }, i), data: f });
            });
        },
    },
    (e) => {
        (e.O(
            0,
            [
                7412, 1010, 7231, 8461, 2147, 4517, 9763, 1256, 3608, 3907, 7349, 6706, 5472, 8378, 900, 2536, 2146, 3353, 2474, 8035, 347, 2732, 1410, 1417, 8506, 6050,
                5806, 6241, 7702, 6874, 9155, 861, 4668, 9740, 1175, 4499, 8915, 8816, 2563, 4220, 9562, 7358,
            ],
            () => e((e.s = 51854)),
        ),
            (_N_E = e.O()));
    },
]);
