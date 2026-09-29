(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [7079],
    {
        3377: (e, t, o) => {
            'use strict';
            o.d(t, { WithAuth: () => h });
            var i = o(32290),
                n = o(96103),
                l = o(21916),
                s = o(63618),
                r = o(39407),
                a = o(71926),
                c = o(94218),
                d = o(55556),
                u = o.n(d);
            let _ = (0, n.PA)(() =>
                (0, i.jsxs)('div', {
                    className: u().root,
                    children: [
                        (0, i.jsx)(a.DZ, {
                            className: (0, s.$)(u().title, u().important),
                            variant: 'h3',
                            size: 'xs',
                            children: (0, i.jsx)(r.A, { id: 'authorization.enter-title' }),
                        }),
                        (0, i.jsx)(a.HL, {
                            className: (0, s.$)(u().text, u().important),
                            variant: 'span',
                            type: 'text',
                            size: 'l',
                            weight: 'normal',
                            children: (0, i.jsx)(r.A, { id: 'authorization.enter-text' }),
                        }),
                        (0, i.jsx)(c.H, { size: 'l', className: u().button }),
                    ],
                }),
            );
            var m = o(20472),
                p = o(57594);
            let h = (0, n.PA)((e) => {
                let { children: t, withRedirectToMainPage: o } = e,
                    { user: n } = (0, p.g)();
                return n.isAuthorized ? t : (o && (0, l.redirect)(m.Z.main.href), (0, i.jsx)(_, {}));
            });
        },
        8626: (e, t, o) => {
            'use strict';
            o.d(t, { m: () => i });
            let i = () => ({ year: 'numeric' });
        },
        10733: (e, t, o) => {
            'use strict';
            o.d(t, { G: () => l });
            var i = o(91945),
                n = o(50891);
            class l extends n.m {
                constructor(e, t) {
                    (super(e, { code: 'E_HTTP_CLIENT_NON_2XX_3XX_RESPONSE', cause: t.cause }),
                        (0, i._)(this, 'name', 'HttpErrorException'),
                        (0, i._)(this, 'statusCode', void 0),
                        (this.statusCode = t.statusCode),
                        Object.setPrototypeOf(this, l.prototype));
                }
            }
        },
        15260: (e, t, o) => {
            'use strict';
            o.d(t, { CollectionNonMusicLikedPage: () => A });
            var i = o(32290),
                n = o(63618),
                l = o(96103),
                s = o(55178),
                r = o(60900),
                a = o(39407),
                c = o(21732),
                d = o(71926),
                u = o(64170),
                _ = o(24170),
                m = o(7999),
                p = o(48922),
                h = o(22714),
                E = o(83808),
                g = o(83920),
                x = o(3796),
                N = o(57594),
                y = o(97841),
                C = o(32468),
                O = o(74694),
                T = o(89020),
                S = o(45257),
                f = o(32756),
                v = o(29316),
                k = o.n(v);
            let A = (0, l.PA)(() => {
                var e, t, o;
                let {
                        user: l,
                        collection: { nonMusicLiked: v },
                        settings: { isMobile: A },
                        library: R,
                    } = (0, N.g)(),
                    { formatMessage: P } = (0, r.A)(),
                    { contentScrollRef: I, setContentScrollRef: L } = (0, g.g)(),
                    j = (0, E.W)();
                (0, x.J)(v.isResolved);
                let D = (0, s.useCallback)(
                    (e) => {
                        l.account.data.uid && v.getData({ userId: l.account.data.uid, metaType: 'podcast', page: e, pageSize: 20 });
                    },
                    [v, l.account.data.uid],
                );
                if (v.isRejected) return (0, i.jsx)(u.SomethingWentWrong, {});
                (0, s.useEffect)(
                    () => () => {
                        v.reset();
                    },
                    [v],
                );
                let b = (0, s.useMemo)(() => ({ Footer: () => (0, i.jsx)(C.A, { children: (0, i.jsx)(y.w, { className: k().footer }) }) }), []);
                if (l.account.data.uid && v.isNeededToLoad) {
                    let e = [v.getData({ userId: l.account.data.uid, metaType: 'podcast', pageSize: 20 }), R.getData()];
                    (0, s.use)(Promise.allSettled(e));
                }
                return (0, i.jsx)(h.n, {
                    pageId: p._Q.OWN_PODCASTS,
                    children: (0, i.jsx)(m.h, {
                        scrollElement: I,
                        outerTitle: P({ id: 'page.delayed-non-music' }),
                        children: (0, i.jsxs)('div', {
                            className: k().root,
                            'data-test-id': c.Xk.collection.COLLECTION_NON_MUSIC_LIKED_PAGE,
                            children: [
                                (0, i.jsx)(O.Y, {
                                    variant: O.V.TEXT,
                                    withForwardControl: !1,
                                    withBackwardControl: j.canBack,
                                    children: (0, i.jsx)(d.DZ, {
                                        variant: 'h2',
                                        weight: 'bold',
                                        size: 'xl',
                                        lineClamp: 1,
                                        children: (0, i.jsx)(a.A, { id: 'page.delayed-non-music' }),
                                    }),
                                }),
                                v.isEmptyItems && !v.isRejected && (0, i.jsx)(f.M, { className: k().emptyBlock }),
                                (0, i.jsx)(S.$, {
                                    className: (0, n.$)(k().scrollContainer, k().important),
                                    listClassName: k().content,
                                    itemClassName: k().item,
                                    customComponents: b,
                                    itemContentCallback: (e) => {
                                        var t;
                                        let o = null == (t = v.items) ? void 0 : t[e],
                                            n = P({ id: 'loading-messages.entity-is-loading' }, { entityName: P({ id: 'entity-names.podcast' }) });
                                        return o
                                            ? (0, i.jsx)(_.a, { album: o, contentLinesCount: 3, withLikesCount: !0, withAddition: !1 }, o.id)
                                            : (0, i.jsx)(T.V, { 'aria-label': n });
                                    },
                                    totalCount: null != (t = null == (e = v.pager) ? void 0 : e.total) ? t : 0,
                                    onGetDataByPage: D,
                                    pageSize: 20,
                                    totalRequests: null != (o = v.requestsCount) ? o : 0,
                                    handleRef: L,
                                    context: { listAriaLabel: P({ id: 'collection.liked-non-music-list' }) },
                                    isMobileLayout: A,
                                    useWindowScroll: A,
                                }),
                            ],
                        }),
                    }),
                });
            });
        },
        15559: (e, t, o) => {
            'use strict';
            o.d(t, { v: () => n });
            var i = o(79406);
            let n = (e) => {
                let { checkExperiment: t, getDisclaimerContent: o, getExplicitContent: n, userRegion: l } = e;
                return 'ru' === l && t(i.z.WebNextFooterDisclaimer, 'on') ? o() : n();
            };
        },
        20472: (e, t, o) => {
            'use strict';
            o.d(t, { Z: () => n });
            var i = o(68243);
            let n = {
                main: (0, i.u)('/'),
                chart: (0, i.u)('/chart'),
                chartPodcasts: (0, i.u)('/chart/podcasts'),
                collection: (0, i.u)('/collection'),
                collectionAlbums: (0, i.u)('/collection/albums'),
                collectionArtists: (0, i.u)('/collection/artists'),
                collectionClips: (0, i.u)('/collection/clips'),
                collectionDislikes: (0, i.u)('/collection/dislikes'),
                collectionKids: (0, i.u)('/collection/kids'),
                collectionKidsAlbums: (0, i.u)('/collection/kids/albums'),
                collectionKidsPlaylists: (0, i.u)('/collection/kids/playlists'),
                collectionKidsTracks: (0, i.u)('/collection/kids/tracks'),
                collectionNonMusic: (0, i.u)('/collection/non-music'),
                collectionNonMusicLiked: (0, i.u)('/collection/non-music/liked'),
                collectionVibeRooms: (0, i.u)('/collection/multivibes'),
                collectionPlaylists: (0, i.u)('/collection/playlists'),
                collectionPlaylistsCreated: (0, i.u)('/collection/playlists/created'),
                collectionPlaylistsLiked: (0, i.u)('/collection/playlists/liked'),
                collectionShelf: (0, i.u)('/collection/shelf'),
                collectionShelfLiked: (0, i.u)('/collection/shelf/liked'),
                collectionShelfNewEpisodes: (0, i.u)('/collection/shelf/new-episodes'),
                collectionShelfRecentlyPlayed: (0, i.u)('/collection/shelf/recently-played'),
                concerts: (0, i.u)('/concerts'),
                kids: (0, i.u)('/kids'),
                mixes: (0, i.u)('/mixes'),
                musicHistory: (0, i.u)('/music-history'),
                muzmarket: (0, i.u)('/muzmarket'),
                mymusic: (0, i.u)('/mymusic'),
                mymusicDownloadsTracks: (0, i.u)('/mymusic/downloads/tracks'),
                multivibe: (0, i.u)('/multivibe'),
                nonMusic: (0, i.u)('/non-music'),
                pay: (0, i.u)('/pay'),
                userSlides: (0, i.u)('/slides/user'),
                search: (0, i.u)('/search'),
                searchHistory: (0, i.u)('/search/history'),
                settings: (0, i.u)('/settings'),
                video: (0, i.u)('/video'),
            };
        },
        29316: (e) => {
            e.exports = {
                root: 'CollectionNonMusicLikedPage_root__0e_hz',
                scrollContainer: 'CollectionNonMusicLikedPage_scrollContainer__OthtN',
                important: 'CollectionNonMusicLikedPage_important__MNJX3',
                footer: 'CollectionNonMusicLikedPage_footer__F_mtD',
                item: 'CollectionNonMusicLikedPage_item__Rb0yS',
                emptyBlock: 'CollectionNonMusicLikedPage_emptyBlock__WAdri',
                content: 'CollectionNonMusicLikedPage_content__9WDX5',
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
        31010: (e, t, o) => {
            'use strict';
            o.d(t, { H: () => n, P: () => l });
            var i = o(55178);
            let n = (0, i.createContext)(null),
                l = () => (0, i.useContext)(n);
        },
        32468: (e, t, o) => {
            'use strict';
            o.d(t, { A: () => s });
            var i = o(32290),
                n = o(77088),
                l = o.n(n);
            let s = (e) => {
                let { children: t } = e;
                return (0, i.jsx)('footer', { className: l().empty });
            };
        },
        32756: (e, t, o) => {
            'use strict';
            o.d(t, { M: () => d });
            var i = o(32290),
                n = o(63618),
                l = o(39407),
                s = o(82586),
                r = o(71926),
                a = o(44642),
                c = o.n(a);
            let d = (e) => {
                let { className: t } = e;
                return (0, i.jsxs)('div', {
                    className: (0, n.$)(c().emptyContent, t),
                    children: [
                        (0, i.jsx)(s.I, { className: c().emptyContentIcon, size: 'l', variant: 'album' }),
                        (0, i.jsx)(r.DZ, {
                            className: c().emptyContentTitle,
                            variant: 'h3',
                            size: 'xs',
                            children: (0, i.jsx)(l.A, { id: 'error-messages.empty-collection-podcasts-and-books' }),
                        }),
                    ],
                });
            };
        },
        33898: (e, t, o) => {
            'use strict';
            var i;
            (o.d(t, { Z: () => i }),
                (function (e) {
                    ((e.METHOD_NOT_SUPPORTED = 'E_BEACON_METHOD_NOT_SUPPORTED'),
                        (e.NOT_AVAILABLE = 'E_BEACON_NOT_AVAILABLE'),
                        (e.QUEUE_FAILED = 'E_BEACON_QUEUE_FAILED'),
                        (e.NO_RESPONSE_DATA = 'E_BEACON_NO_RESPONSE_DATA'),
                        (e.RETRY_EXHAUSTED = 'E_BEACON_RETRY_EXHAUSTED'));
                })(i || (i = {})));
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
        42464: (e, t, o) => {
            'use strict';
            o.d(t, { N: () => i });
            let i = (e) => 'object' == typeof e && null !== e && 'request' in e && null !== e.request;
        },
        44642: (e) => {
            e.exports = {
                emptyContent: 'CollectionNonMusicEmpty_emptyContent__Km4Xo',
                emptyContentIcon: 'CollectionNonMusicEmpty_emptyContentIcon__ZHVte',
                emptyContentTitle: 'CollectionNonMusicEmpty_emptyContentTitle__PJIFd',
            };
        },
        45257: (e, t, o) => {
            'use strict';
            o.d(t, { $: () => E });
            var i = o(32290),
                n = o(63618),
                l = o(8055),
                s = o(55178);
            let r = (e) => {
                    let { style: t, forwardRef: o, context: n, ...l } = e,
                        s = (null == n ? void 0 : n.listAriaLabel) || void 0,
                        r = (null == n ? void 0 : n.listRole) || 'region';
                    return (0, i.jsx)('div', { 'aria-labelledby': 'virtual-grid-header', role: r, 'aria-label': s, style: { ...t }, ref: o, ...l });
                },
                a = (0, s.forwardRef)((e, t) => (0, i.jsx)(r, { forwardRef: t, ...e }));
            var c = o(39684),
                d = o.n(c);
            let u = (e) => {
                    let { style: t, forwardRef: o, withFooter: l, withHeader: s, withForceScroll: r, ...a } = e;
                    return (0, i.jsx)('div', {
                        className: (0, n.$)(d().scroller, { [d().scroller_withFooter]: l, [d().scroller_withHeader]: s, [d().scroller_withForceScroll]: r }),
                        style: { ...t },
                        ref: o,
                        ...a,
                        tabIndex: -1,
                    });
                },
                _ = (0, s.forwardRef)((e, t) => (0, i.jsx)(u, { forwardRef: t, ...e }));
            var m = o(62060),
                p = o(31417);
            let h = (e) => {
                    let {
                            pageSize: t,
                            onPageHandler: o,
                            onRangeHandler: n,
                            debounceDurationInMs: l = 100,
                            totalCount: r = 0,
                            shouldTriggerRangeChangedOn: a = [],
                            endReached: c,
                            virtuosoRef: d,
                            ...u
                        } = e,
                        [_, h] = (0, s.useState)(null),
                        E = (0, s.useMemo)(
                            () =>
                                (0, m.A)((e) => {
                                    if ((null == n || n(e), a.length > 0 && h(e), t && o)) {
                                        let i = Math.floor(e.endIndex / t) + 1,
                                            n = Math.floor(e.startIndex / t);
                                        for (let e = n; e < i; e++) o(e);
                                    }
                                }, l),
                            [l, n, t, o, a],
                        );
                    (0, s.useEffect)(() => {
                        a.length > 0 && _ && E(_);
                    }, a);
                    let g = (0, s.useMemo)(() => {
                        if (c)
                            return (0, m.A)((e) => {
                                c(e);
                            }, l);
                    }, [c, l]);
                    return (0, i.jsx)(p.sN, { ref: d, rangeChanged: E, totalCount: r, endReached: g, ...u });
                },
                E = (e) => {
                    let {
                            className: t,
                            customComponents: o,
                            onGetDataByPage: r,
                            onGetDataByRange: c,
                            itemClassName: u,
                            itemContentCallback: m,
                            listClassName: p,
                            overscan: E = 700,
                            pageSize: g = 20,
                            totalCount: x,
                            totalRequests: N,
                            debounceDurationInMs: y,
                            initialItemCount: C,
                            minInitialItemCount: O = 20,
                            handleRef: T,
                            alwaysShowScrollbar: S = !1,
                            testId: f,
                            isMobileLayout: v = !1,
                            shouldTriggerRangeChangedOn: k,
                            ...A
                        } = e,
                        [R, P] = (0, s.useState)(!1),
                        I = (0, s.useMemo)(
                            () =>
                                (0, l.A)((e) => {
                                    P(e);
                                }, 100),
                            [],
                        ),
                        L = (0, s.useMemo)(() => {
                            var e, t;
                            return v
                                ? {
                                      Scroller: _,
                                      List: null != (e = null == o ? void 0 : o.List) ? e : a,
                                      Item: null == o ? void 0 : o.Item,
                                      ScrollSeekPlaceholder: null == o ? void 0 : o.ScrollSeekPlaceholder,
                                  }
                                : {
                                      Scroller: _,
                                      List: null != (t = null == o ? void 0 : o.List) ? t : a,
                                      Item: null == o ? void 0 : o.Item,
                                      Header: null == o ? void 0 : o.Header,
                                      Footer: null == o ? void 0 : o.Footer,
                                      ScrollSeekPlaceholder: null == o ? void 0 : o.ScrollSeekPlaceholder,
                                  };
                        }, [o, N, v]),
                        j = C ? Math.min(C, O) : void 0;
                    return (0, i.jsxs)('div', {
                        className: (0, n.$)(d().root, { [d().root_scrolling]: R || S, [d().root_notScrolling]: !R && !S }, t),
                        'data-test-id': f,
                        children: [
                            v && (null == o ? void 0 : o.Header) && o.Header(),
                            (0, i.jsx)(h, {
                                overscan: E,
                                components: L,
                                listClassName: p,
                                itemClassName: u,
                                isScrolling: I,
                                itemContent: m,
                                scrollerRef: T,
                                totalCount: x,
                                pageSize: g,
                                onPageHandler: r,
                                onRangeHandler: c,
                                debounceDurationInMs: y,
                                initialItemCount: j,
                                shouldTriggerRangeChangedOn: k,
                                ...A,
                            }),
                            v && (null == o ? void 0 : o.Footer) && o.Footer(),
                        ],
                    });
                };
        },
        50891: (e, t, o) => {
            'use strict';
            o.d(t, { m: () => l });
            var i = o(91945),
                n = o(25090);
            class l extends n.t {
                constructor(e = 'Http Client error', { code: t = 'E_HTTP_CLIENT', ...o } = {}) {
                    (super(e, { code: t, ...o }), (0, i._)(this, 'name', 'HttpException'), Object.setPrototypeOf(this, l.prototype));
                }
            }
        },
        50961: (e, t, o) => {
            'use strict';
            var i;
            (o.d(t, { X: () => i }),
                (function (e) {
                    ((e[(e.NOT_MODIFIED = 304)] = 'NOT_MODIFIED'),
                        (e[(e.NOT_FOUND = 404)] = 'NOT_FOUND'),
                        (e[(e.BAD_REQUEST = 400)] = 'BAD_REQUEST'),
                        (e[(e.REQUEST_TIMEOUT = 408)] = 'REQUEST_TIMEOUT'),
                        (e[(e.PRECONDITION_FAILED = 412)] = 'PRECONDITION_FAILED'),
                        (e[(e.TEAPOT = 418)] = 'TEAPOT'));
                })(i || (i = {})));
        },
        52199: (e, t, o) => {
            'use strict';
            o.d(t, { r: () => i });
            let i = (e, t, o) => e.replace(o, t);
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
        57594: (e, t, o) => {
            'use strict';
            o.d(t, { P: () => l, g: () => s });
            var i = o(55178),
                n = o(25090);
            let l = (0, i.createContext)(null);
            function s() {
                let e = (0, i.useContext)(l);
                if (null === e) throw new n.t('Store cannot be null, please add a context provider', { code: 'E_CONTEXT_STORE_NULL' });
                return e;
            }
        },
        62376: (e, t, o) => {
            'use strict';
            o.d(t, { U: () => l });
            var i = o(70204),
                n = o(34186);
            let l = () => (0, n.N)().get(i.Zf);
        },
        63038: (e, t, o) => {
            'use strict';
            o.d(t, { B: () => i });
            let i = '{tld}';
        },
        64170: (e, t, o) => {
            'use strict';
            o.d(t, { SomethingWentWrong: () => T });
            var i = o(32290),
                n = o(63618),
                l = o(96103),
                s = o(55178),
                r = o(60900),
                a = o(39407),
                c = o(63423),
                d = o(82586),
                u = o(71926),
                _ = o(17811),
                m = o(99923),
                p = o(90153),
                h = o(74416),
                E = o(62376),
                g = o(37240),
                x = o(83920),
                N = o(20472),
                y = o(12894),
                C = o(30310),
                O = o.n(C);
            let T = (0, l.PA)((e) => {
                let { className: t, withBackwardControl: o = !0 } = e,
                    { formatMessage: l } = (0, r.A)(),
                    C = l({ id: 'error-messages.something-went-wrong' });
                !(function (e) {
                    let t = (0, h.st)(),
                        { hash: o } = (0, h.gf)(),
                        { pageId: i } = (0, g.$)(),
                        n = (0, E.U)();
                    (0, s.useEffect)(() => {
                        if (!t || !o || !i) return;
                        let l = (0, _.F)({
                            params: {
                                entityType: m.EntityTypes.Error,
                                entityId: m.EntityTypes.SomethingWrong,
                                errorMessage: e,
                                hash: o,
                                pageId: i,
                                pageStyle: m.PageStyles.Fullscreen,
                                pagePlacement: m.PagePlacements.Fullscreen,
                                mainObjectType: m.DomainObjectType.NonApplicable,
                                mainObjectId: m.DomainObjectType.NonApplicable,
                            },
                            logger: n,
                            context: 'useSendEventOnSomethingWentWrongShowed',
                        });
                        l && (0, p.z5)(t.evgenInstance, l);
                    }, [t, e, o, i, n]);
                })(C);
                let { sendRefreshEvent: T } = (function () {
                        let e = (0, h.st)(),
                            { hash: t } = (0, h.gf)(),
                            { pageId: o } = (0, g.$)(),
                            i = (0, E.U)();
                        return {
                            sendRefreshEvent: (0, s.useCallback)(() => {
                                if (!e || !t || !o) return;
                                let n = (0, _.F)({
                                    params: {
                                        actionType: m.ActionType.Refresh,
                                        userInteractionType: m.UserInteractionType.Tap,
                                        entityType: m.EntityTypes.Error,
                                        entityId: m.EntityTypes.SomethingWrong,
                                        hash: t,
                                        pageId: o,
                                        pageStyle: m.PageStyles.Fullscreen,
                                        pagePlacement: m.PagePlacements.Fullscreen,
                                        mainObjectType: m.DomainObjectType.NonApplicable,
                                        mainObjectId: m.DomainObjectType.NonApplicable,
                                    },
                                    logger: i,
                                    context: 'useSendEventOnSomethingWentWrongRefreshed',
                                });
                                n && (0, p.bv)(e.evgenInstance, n);
                            }, [e, t, o, i]),
                        };
                    })(),
                    S = (0, s.useCallback)(() => {
                        (T(), (window.location.href = N.Z.main.href));
                    }, [T]),
                    { contentRef: f } = (0, x.g)();
                return (0, i.jsxs)('div', {
                    className: (0, n.$)(O().root, t),
                    children: [
                        o &&
                            (0, i.jsx)(y.L, { withBackwardFallback: '/', className: (0, n.$)(O().navigation, { [O().navigation_desktop]: !f }), withForwardControl: !1 }),
                        (0, i.jsxs)('div', {
                            className: (0, n.$)(O().content, { [O().content_shrink]: !o }),
                            children: [
                                (0, i.jsx)(d.I, { className: O().icon, variant: 'attention', size: 'xxl' }),
                                (0, i.jsx)(u.DZ, { className: (0, n.$)(O().title, O().important), variant: 'h3', size: 'xs', children: C }),
                                (0, i.jsxs)(u.HL, {
                                    className: (0, n.$)(O().text, O().important),
                                    variant: 'span',
                                    type: 'text',
                                    size: 'l',
                                    weight: 'normal',
                                    children: [!1, (0, i.jsx)(a.A, { id: 'page-error.try-to-restart-app' })],
                                }),
                                (0, i.jsx)(c.$, {
                                    onClick: S,
                                    className: O().button,
                                    role: 'link',
                                    color: 'secondary',
                                    size: 'l',
                                    radius: 'xxxl',
                                    children: (0, i.jsxs)(u.HL, {
                                        type: 'controls',
                                        variant: 'span',
                                        size: 'm',
                                        children: [!1, (0, i.jsx)(a.A, { id: 'page-error.restart-app-button' })],
                                    }),
                                }),
                            ],
                        }),
                    ],
                });
            });
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
        78648: (e, t, o) => {
            'use strict';
            o.d(t, { C8: () => l, UC: () => s, dM: () => r, uV: () => a });
            var i = o(87953),
                n = o(42464);
            let l = (e) => {
                    if (void 0 === e || '' === e) return 'missing';
                    let t = Number(e);
                    return !Number.isFinite(t) || t < 0 ? 'invalid' : t < 86400 ? 'lt-1d' : t <= 2592e3 ? '1-30d' : 'gt-30d';
                },
                s = (e) => (e.uid ? 'authorized' : 'no-uid'),
                r = (e) => {
                    if (!(e instanceof i.m5) || !(0, n.N)(e.cause)) return 'unexpected';
                    let t = ((e) => {
                        if (!(0, n.N)(e.cause)) return;
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
        87953: (e, t, o) => {
            'use strict';
            o.d(t, { GX: () => l.G, X1: () => i.X, m5: () => n.m });
            var i = o(50961),
                n = o(50891),
                l = o(10733);
            o(33898);
        },
        94218: (e, t, o) => {
            'use strict';
            o.d(t, { H: () => m });
            var i = o(32290),
                n = o(21916),
                l = o(39407),
                s = o(21732),
                r = o(91027),
                a = o(63423),
                c = o(71926),
                d = o(78648),
                u = o(70204),
                _ = o(34186);
            let m = (e) => {
                let { size: t = 'm', variant: o = 'default', color: m = 'primary', withRipple: p = !0, buttonText: h, isBlock: E, key: g, className: x } = e,
                    N = (0, n.useRouter)(),
                    y = (0, _.N)().get(u.QG),
                    C = (0, r.c)(() => {
                        y.authorizationUrl && ((0, d.uV)({ stage: 'attempt-start', trigger: 'user' }), N.push(y.authorizationUrl));
                    });
                return (0, i.jsx)(
                    a.$,
                    {
                        onClick: C,
                        className: x,
                        isBlock: E,
                        color: m,
                        variant: o,
                        size: t,
                        radius: 'xxxl',
                        withRipple: p,
                        'data-test-id': s.S7.UNAUTHORIZED_BUTTON,
                        children: h || (0, i.jsx)(c.HL, { variant: 'div', size: 'l', lineClamp: 1, children: (0, i.jsx)(l.A, { id: 'authorization.enter-button' }) }),
                    },
                    g,
                );
            };
        },
        97841: (e, t, o) => {
            'use strict';
            o.d(t, { w: () => S });
            var i = o(32290),
                n = o(63618),
                l = o(96103),
                s = o(60900),
                r = o(31010),
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
            let c = (e, t, o) => {
                    switch (e) {
                        case a.YANDEX:
                            if ('ru' === t) return 'https://ya.ru';
                            return;
                        case a.YANDEX_PROJECTS:
                            return 'https://yandex.'.concat(t, '/all?lang=').concat(o);
                        case a.COPYRIGHT_HOLDER:
                            return 'https://yandex.'.concat(t, '/support/music/performers-and-copyright-holders/copyright.html?lang=').concat(o);
                        case a.AGREEMENT:
                            return 'https://yandex.ru/legal/music_termsofuse?lang='.concat(o);
                        case a.RECOMMENDATION_RULES:
                            return 'https://music.yandex.ru/legal/recommendations/ru/#music';
                        case a.HELP:
                            return 'https://yandex.'.concat(t, '/support/music/index.html?lang=').concat(o);
                        case a.PRIVACY_POLICY:
                            return 'https://yandex.'.concat(t, '/legal/confidential/').concat(o);
                    }
                },
                d = (e) => {
                    let { formatMessage: t, language: o, tld: i, year: n } = e;
                    return {
                        year: n,
                        yandexMusic: { id: a.YANDEX, title: t({ id: 'footer.yandex-music' }), url: c(a.YANDEX, i, o) },
                        yandexProjects: { id: a.YANDEX_PROJECTS, title: t({ id: 'footer.yandex-project' }), url: c(a.YANDEX_PROJECTS, i, o) },
                    };
                };
            var u = o(15559),
                _ = o(8626);
            let m = (e) => e(new Date(), (0, _.m)());
            var p = o(61945),
                h = o(57594),
                E = o(77088),
                g = o.n(E),
                x = o(21732),
                N = o(71926),
                y = o(61258);
            let C = (e) => {
                    let { className: t, data: o } = e;
                    return (0, i.jsxs)('div', {
                        className: (0, n.$)(g().copyrights, t),
                        'data-test-id': x.S7.FOOTER_COPYRIGHTS,
                        children: [
                            (0, i.jsxs)(N.HL, {
                                variant: 'span',
                                type: 'text',
                                size: 's',
                                weight: 'medium',
                                className: g().text,
                                children: [
                                    '\xa9 ',
                                    o.year,
                                    ' \xa0',
                                    (0, i.jsx)(y.N, {
                                        target: '_blank',
                                        href: o.yandexMusic.url,
                                        className: (0, n.$)(g().copyrightLink, g().yandexMusicLink),
                                        'data-test-id': x.S7.FOOTER_YANDEX_MUSIC_LINK,
                                        children: o.yandexMusic.title,
                                    }),
                                ],
                            }),
                            (0, i.jsx)(N.HL, { variant: 'span', type: 'text', size: 's', weight: 'medium', children: ' • ' }),
                            (0, i.jsx)(y.N, {
                                target: '_blank',
                                href: o.yandexProjects.url,
                                className: g().copyrightLink,
                                'data-test-id': x.S7.FOOTER_YANDEX_PROJECT_LINK,
                                children: o.yandexProjects.title,
                            }),
                        ],
                    });
                },
                O = (e) => {
                    let { disclaimer: t, links: o } = e;
                    return (0, i.jsxs)('div', {
                        className: g().links,
                        children: [
                            (0, i.jsx)('ol', {
                                className: g().list,
                                'data-test-id': x.S7.FOOTER_LINKS_LIST,
                                children: o.map((e) => {
                                    let { id: t, title: o, url: n } = e;
                                    return (0, i.jsx)(
                                        'li',
                                        {
                                            className: g().item,
                                            children: (0, i.jsx)(y.N, { target: '_blank', href: n, className: g().link, 'data-test-id': x.S7.FOOTER_LINK, children: o }),
                                        },
                                        t,
                                    );
                                }),
                            }),
                            (0, i.jsx)(N.HL, {
                                variant: 'span',
                                type: 'text',
                                size: 'm',
                                weight: 'medium',
                                className: g().explicitText,
                                tabIndex: 0,
                                dangerouslySetInnerHTML: { __html: t },
                                'data-test-id': x.S7.FOOTER_DISCLAIMER_TEXT,
                            }),
                        ],
                    });
                },
                T = (e) => {
                    let { className: t, data: o } = e;
                    return (0, i.jsxs)('footer', {
                        className: (0, n.$)(g().root, g().important, t),
                        'data-test-id': x.S7.FOOTER,
                        children: [(0, i.jsx)(O, { links: o.links, disclaimer: o.disclaimer }), (0, i.jsx)(C, { data: o.copyrights })],
                    });
                };
            (0, l.PA)((e) => {
                let { className: t } = e,
                    { location: o } = (0, h.g)(),
                    { formatDate: n, formatMessage: l } = (0, s.A)(),
                    { language: r } = (0, p.h)(),
                    a = d({ formatMessage: l, language: r, tld: o.tld, year: m(n) });
                return (0, i.jsx)(C, { className: t, data: a });
            });
            let S = (0, l.PA)((e) => {
                var t;
                let { className: o } = e,
                    { experiments: l, location: _, user: E } = (0, h.g)(),
                    { formatDate: x, formatMessage: N } = (0, s.A)(),
                    { isEnabled: y } = null != (t = (0, r.P)()) ? t : {},
                    { language: C } = (0, p.h)(),
                    O = ((e) => {
                        let { checkExperiment: t, formatMessage: o, isWebApplication: i, language: n, tld: l, userRegion: s, year: r } = e;
                        return {
                            links: ((e) => {
                                let { formatMessage: t, isWebApplication: o, tld: i, language: n, userRegion: l } = e,
                                    s = { id: a.COPYRIGHT_HOLDER, title: t({ id: 'footer.links-copyright-holders' }), url: c(a.COPYRIGHT_HOLDER, i, n) },
                                    r = { id: a.PRIVACY_POLICY, title: t({ id: 'footer.links-privacy-policy' }), url: c(a.PRIVACY_POLICY, i, n) },
                                    d = { id: a.AGREEMENT, title: t({ id: 'footer.links-terms' }), url: c(a.AGREEMENT, i, n) },
                                    u = { id: a.RECOMMENDATION_RULES, title: t({ id: 'footer.links-recommendation-rules' }), url: c(a.RECOMMENDATION_RULES, i, n) },
                                    _ = { id: a.HELP, title: t({ id: 'footer.links-help' }), url: c(a.HELP, i, n) },
                                    m = [s, d, u];
                                return (o && 'ru' === l && m.push(r), m.push(_), m);
                            })({ formatMessage: o, isWebApplication: i, language: n, tld: l, userRegion: s }),
                            disclaimer: (0, u.v)({
                                checkExperiment: t,
                                getDisclaimerContent: () => o({ id: 'footer.disclaimer-content' }),
                                getExplicitContent: () => o({ id: 'footer.explicit-content' }),
                                userRegion: s,
                            }),
                            copyrights: d({ formatMessage: o, language: n, tld: l, year: r }),
                        };
                    })({
                        checkExperiment: (e, t) => l.checkExperiment(e, t),
                        formatMessage: N,
                        isWebApplication: !1,
                        tld: _.tld,
                        language: C,
                        userRegion: E.account.data.userSessionRegionIso,
                        year: m(x),
                    });
                return (0, i.jsx)(T, { className: (0, n.$)({ [g().root_withOffsetForDeeplink]: y }, o), data: O });
            });
        },
        98574: (e, t, o) => {
            (Promise.resolve().then(o.bind(o, 3377)), Promise.resolve().then(o.bind(o, 15260)));
        },
    },
    (e) => {
        (e.O(
            0,
            [
                7412, 1010, 7231, 8461, 2147, 4517, 9763, 1256, 3608, 7679, 6706, 5472, 8378, 900, 2536, 2146, 3353, 2474, 8035, 347, 2732, 1410, 1417, 229, 8506, 6050,
                5806, 7702, 6874, 9155, 861, 4668, 9740, 1175, 4499, 8915, 8816, 2563, 4220, 9562, 7358,
            ],
            () => e((e.s = 98574)),
        ),
            (_N_E = e.O()));
    },
]);
