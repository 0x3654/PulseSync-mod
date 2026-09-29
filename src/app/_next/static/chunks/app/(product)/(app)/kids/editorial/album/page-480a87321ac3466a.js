(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [5940],
    {
        8626: (e, t, l) => {
            'use strict';
            l.d(t, { m: () => o });
            let o = () => ({ year: 'numeric' });
        },
        11262: (e, t, l) => {
            'use strict';
            l.d(t, { X: () => d });
            var o = l(32290),
                i = l(55178),
                r = l(91027),
                n = l(71730),
                s = l(45477),
                a = l(75582),
                c = l(49399);
            let d = (e, t) => {
                let { notify: l, dismiss: d } = (0, a.l)(),
                    u = (0, i.useRef)(void 0),
                    _ = (0, r.c)(() => {
                        var l;
                        (d({ notificationId: u.current }), (u.current = 0));
                        let o = [...(null != (l = e.lastRejectedPagesList) ? l : [])].reverse().filter((t) => {
                            var l;
                            return (null == (l = e.pageStates) ? void 0 : l[t]) === c.G.REJECT;
                        });
                        (e.resetRejectedPagesState(),
                            o.forEach((e) => {
                                t(e);
                            }));
                    });
                (0, i.useEffect)(() => {
                    e.rejectedPagesCount > 0 && !u.current && (u.current = l((0, o.jsx)(n.L, { reloadBlocks: _ }), { containerId: s.u.ERROR, autoClose: !1 }));
                }, [d, _, l, e.rejectedPagesCount]);
            };
        },
        15559: (e, t, l) => {
            'use strict';
            l.d(t, { v: () => i });
            var o = l(79406);
            let i = (e) => {
                let { checkExperiment: t, getDisclaimerContent: l, getExplicitContent: i, userRegion: r } = e;
                return 'ru' === r && t(o.z.WebNextFooterDisclaimer, 'on') ? l() : i();
            };
        },
        20472: (e, t, l) => {
            'use strict';
            l.d(t, { Z: () => i });
            var o = l(68243);
            let i = {
                main: (0, o.u)('/'),
                chart: (0, o.u)('/chart'),
                chartPodcasts: (0, o.u)('/chart/podcasts'),
                collection: (0, o.u)('/collection'),
                collectionAlbums: (0, o.u)('/collection/albums'),
                collectionArtists: (0, o.u)('/collection/artists'),
                collectionClips: (0, o.u)('/collection/clips'),
                collectionDislikes: (0, o.u)('/collection/dislikes'),
                collectionKids: (0, o.u)('/collection/kids'),
                collectionKidsAlbums: (0, o.u)('/collection/kids/albums'),
                collectionKidsPlaylists: (0, o.u)('/collection/kids/playlists'),
                collectionKidsTracks: (0, o.u)('/collection/kids/tracks'),
                collectionNonMusic: (0, o.u)('/collection/non-music'),
                collectionNonMusicLiked: (0, o.u)('/collection/non-music/liked'),
                collectionVibeRooms: (0, o.u)('/collection/multivibes'),
                collectionPlaylists: (0, o.u)('/collection/playlists'),
                collectionPlaylistsCreated: (0, o.u)('/collection/playlists/created'),
                collectionPlaylistsLiked: (0, o.u)('/collection/playlists/liked'),
                collectionShelf: (0, o.u)('/collection/shelf'),
                collectionShelfLiked: (0, o.u)('/collection/shelf/liked'),
                collectionShelfNewEpisodes: (0, o.u)('/collection/shelf/new-episodes'),
                collectionShelfRecentlyPlayed: (0, o.u)('/collection/shelf/recently-played'),
                concerts: (0, o.u)('/concerts'),
                kids: (0, o.u)('/kids'),
                mixes: (0, o.u)('/mixes'),
                musicHistory: (0, o.u)('/music-history'),
                muzmarket: (0, o.u)('/muzmarket'),
                mymusic: (0, o.u)('/mymusic'),
                mymusicDownloadsTracks: (0, o.u)('/mymusic/downloads/tracks'),
                multivibe: (0, o.u)('/multivibe'),
                nonMusic: (0, o.u)('/non-music'),
                pay: (0, o.u)('/pay'),
                userSlides: (0, o.u)('/slides/user'),
                search: (0, o.u)('/search'),
                searchHistory: (0, o.u)('/search/history'),
                settings: (0, o.u)('/settings'),
                video: (0, o.u)('/video'),
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
        31010: (e, t, l) => {
            'use strict';
            l.d(t, { H: () => i, P: () => r });
            var o = l(55178);
            let i = (0, o.createContext)(null),
                r = () => (0, o.useContext)(i);
        },
        31984: (e, t, l) => {
            Promise.resolve().then(l.bind(l, 59411));
        },
        32468: (e, t, l) => {
            'use strict';
            l.d(t, { A: () => n });
            var o = l(32290),
                i = l(77088),
                r = l.n(i);
            let n = (e) => {
                let { children: t } = e;
                return (0, o.jsx)('footer', { className: r().empty });
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
        45257: (e, t, l) => {
            'use strict';
            l.d(t, { $: () => p });
            var o = l(32290),
                i = l(63618),
                r = l(8055),
                n = l(55178);
            let s = (e) => {
                    let { style: t, forwardRef: l, context: i, ...r } = e,
                        n = (null == i ? void 0 : i.listAriaLabel) || void 0,
                        s = (null == i ? void 0 : i.listRole) || 'region';
                    return (0, o.jsx)('div', { 'aria-labelledby': 'virtual-grid-header', role: s, 'aria-label': n, style: { ...t }, ref: l, ...r });
                },
                a = (0, n.forwardRef)((e, t) => (0, o.jsx)(s, { forwardRef: t, ...e }));
            var c = l(39684),
                d = l.n(c);
            let u = (e) => {
                    let { style: t, forwardRef: l, withFooter: r, withHeader: n, withForceScroll: s, ...a } = e;
                    return (0, o.jsx)('div', {
                        className: (0, i.$)(d().scroller, { [d().scroller_withFooter]: r, [d().scroller_withHeader]: n, [d().scroller_withForceScroll]: s }),
                        style: { ...t },
                        ref: l,
                        ...a,
                        tabIndex: -1,
                    });
                },
                _ = (0, n.forwardRef)((e, t) => (0, o.jsx)(u, { forwardRef: t, ...e }));
            var m = l(62060),
                g = l(31417);
            let h = (e) => {
                    let {
                            pageSize: t,
                            onPageHandler: l,
                            onRangeHandler: i,
                            debounceDurationInMs: r = 100,
                            totalCount: s = 0,
                            shouldTriggerRangeChangedOn: a = [],
                            endReached: c,
                            virtuosoRef: d,
                            ...u
                        } = e,
                        [_, h] = (0, n.useState)(null),
                        p = (0, n.useMemo)(
                            () =>
                                (0, m.A)((e) => {
                                    if ((null == i || i(e), a.length > 0 && h(e), t && l)) {
                                        let o = Math.floor(e.endIndex / t) + 1,
                                            i = Math.floor(e.startIndex / t);
                                        for (let e = i; e < o; e++) l(e);
                                    }
                                }, r),
                            [r, i, t, l, a],
                        );
                    (0, n.useEffect)(() => {
                        a.length > 0 && _ && p(_);
                    }, a);
                    let x = (0, n.useMemo)(() => {
                        if (c)
                            return (0, m.A)((e) => {
                                c(e);
                            }, r);
                    }, [c, r]);
                    return (0, o.jsx)(g.sN, { ref: d, rangeChanged: p, totalCount: s, endReached: x, ...u });
                },
                p = (e) => {
                    let {
                            className: t,
                            customComponents: l,
                            onGetDataByPage: s,
                            onGetDataByRange: c,
                            itemClassName: u,
                            itemContentCallback: m,
                            listClassName: g,
                            overscan: p = 700,
                            pageSize: x = 20,
                            totalCount: y,
                            totalRequests: E,
                            debounceDurationInMs: f,
                            initialItemCount: N,
                            minInitialItemCount: S = 20,
                            handleRef: v,
                            alwaysShowScrollbar: k = !1,
                            testId: R,
                            isMobileLayout: C = !1,
                            shouldTriggerRangeChangedOn: L,
                            ...P
                        } = e,
                        [O, A] = (0, n.useState)(!1),
                        j = (0, n.useMemo)(
                            () =>
                                (0, r.A)((e) => {
                                    A(e);
                                }, 100),
                            [],
                        ),
                        T = (0, n.useMemo)(() => {
                            var e, t;
                            return C
                                ? {
                                      Scroller: _,
                                      List: null != (e = null == l ? void 0 : l.List) ? e : a,
                                      Item: null == l ? void 0 : l.Item,
                                      ScrollSeekPlaceholder: null == l ? void 0 : l.ScrollSeekPlaceholder,
                                  }
                                : {
                                      Scroller: _,
                                      List: null != (t = null == l ? void 0 : l.List) ? t : a,
                                      Item: null == l ? void 0 : l.Item,
                                      Header: null == l ? void 0 : l.Header,
                                      Footer: null == l ? void 0 : l.Footer,
                                      ScrollSeekPlaceholder: null == l ? void 0 : l.ScrollSeekPlaceholder,
                                  };
                        }, [l, E, C]),
                        b = N ? Math.min(N, S) : void 0;
                    return (0, o.jsxs)('div', {
                        className: (0, i.$)(d().root, { [d().root_scrolling]: O || k, [d().root_notScrolling]: !O && !k }, t),
                        'data-test-id': R,
                        children: [
                            C && (null == l ? void 0 : l.Header) && l.Header(),
                            (0, o.jsx)(h, {
                                overscan: p,
                                components: T,
                                listClassName: g,
                                itemClassName: u,
                                isScrolling: j,
                                itemContent: m,
                                scrollerRef: v,
                                totalCount: y,
                                pageSize: x,
                                onPageHandler: s,
                                onRangeHandler: c,
                                debounceDurationInMs: f,
                                initialItemCount: b,
                                shouldTriggerRangeChangedOn: L,
                                ...P,
                            }),
                            C && (null == l ? void 0 : l.Footer) && l.Footer(),
                        ],
                    });
                };
        },
        52199: (e, t, l) => {
            'use strict';
            l.d(t, { r: () => o });
            let o = (e, t, l) => e.replace(l, t);
        },
        57594: (e, t, l) => {
            'use strict';
            l.d(t, { P: () => r, g: () => n });
            var o = l(55178),
                i = l(25090);
            let r = (0, o.createContext)(null);
            function n() {
                let e = (0, o.useContext)(r);
                if (null === e) throw new i.t('Store cannot be null, please add a context provider', { code: 'E_CONTEXT_STORE_NULL' });
                return e;
            }
        },
        59411: (e, t, l) => {
            'use strict';
            (l.r(t), l.d(t, { default: () => j }));
            var o = l(32290),
                i = l(21916),
                r = l(63618),
                n = l(96103),
                s = l(55178),
                a = l(60900),
                c = l(21732),
                d = l(91027),
                u = l(6752),
                _ = l(71926),
                m = l(64170),
                g = l(24170),
                h = l(7999),
                p = l(48922),
                x = l(22714),
                y = l(83808),
                E = l(83920),
                f = l(3796),
                N = l(57594),
                S = l(11262),
                v = l(97841),
                k = l(32468),
                R = l(74694),
                C = l(89020),
                L = l(45257),
                P = l(72461),
                O = l.n(P);
            let A = (0, n.PA)((e) => {
                    var t, l, n, P;
                    let { id: A } = e,
                        {
                            kids: { kidsEditorialAlbumSubpage: j },
                            settings: { isMobile: T },
                        } = (0, N.g)(),
                        b = (0, y.W)(),
                        { contentScrollRef: I, setContentScrollRef: w } = (0, E.g)(),
                        { formatMessage: F } = (0, a.A)(),
                        D = (0, d.c)((e) => {
                            j.getAlbums({ page: e, pageSize: 20 });
                        });
                    (j.isNotFound && (0, i.notFound)(),
                        (0, s.useEffect)(
                            () => () => {
                                j.reset();
                            },
                            [j],
                        ));
                    let M = (0, u.L)(() => ({ Footer: () => (0, o.jsx)(k.A, { children: (0, o.jsx)(v.w, { className: O().footer }) }) }));
                    if (
                        ((0, f.J)(j.isResolved),
                        (0, S.X)(j.pagesLoader, D),
                        j.isNeededToLoad && (0, s.use)(j.getData({ id: A, page: 0, pageSize: 20 })),
                        j.isSomethingWrong)
                    )
                        return (0, o.jsx)(m.SomethingWentWrong, {});
                    let W = j.isLoading ? 20 : null != (n = null == (l = j.pagesLoader) || null == (t = l.pager) ? void 0 : t.total) ? n : 0;
                    return (0, o.jsx)(x.n, {
                        pageId: p._Q.KIDS_EDITORIAL_ALBUMS,
                        children: (0, o.jsx)(h.h, {
                            scrollElement: I,
                            outerTitle: j.title,
                            children: (0, o.jsxs)('div', {
                                className: O().root,
                                'data-test-id': c.Xk.kids.KIDS_EDITORIAL_ALBUMS,
                                children: [
                                    (0, o.jsx)(R.Y, {
                                        variant: R.V.TEXT,
                                        withForwardControl: !1,
                                        withBackwardControl: b.canBack,
                                        children: (0, o.jsx)(_.DZ, { variant: 'h2', weight: 'bold', size: 'xl', lineClamp: 1, children: j.title }),
                                    }),
                                    (0, o.jsx)(L.$, {
                                        context: { listAriaLabel: F({ id: 'mixes.albums-list' }, { genreName: j.title || '' }) },
                                        className: (0, r.$)(O().scrollContainer, O().important),
                                        customComponents: M,
                                        itemContentCallback: (e) => {
                                            let t = j.albums[e],
                                                l = F({ id: 'loading-messages.entity-is-loading' }, { entityName: F({ id: 'entity-names.album' }) });
                                            return t
                                                ? (0, o.jsx)(g.a, { withLikesCount: !0, album: t, contentLinesCount: 3 }, t.id)
                                                : (0, o.jsx)(C.V, { isActive: !0, 'aria-label': l });
                                        },
                                        totalCount: W,
                                        onGetDataByPage: D,
                                        pageSize: 20,
                                        totalRequests: null != (P = j.pagesLoader.requestsCount) ? P : 0,
                                        listClassName: O().content,
                                        itemClassName: O().item,
                                        handleRef: w,
                                        isMobileLayout: T,
                                        useWindowScroll: T,
                                    }),
                                ],
                            }),
                        }),
                    });
                }),
                j = () => {
                    let e = (0, i.useSearchParams)().get('id');
                    return (e || (0, i.notFound)(), (0, o.jsx)(A, { id: e }));
                };
        },
        62376: (e, t, l) => {
            'use strict';
            l.d(t, { U: () => r });
            var o = l(70204),
                i = l(34186);
            let r = () => (0, i.N)().get(o.Zf);
        },
        63038: (e, t, l) => {
            'use strict';
            l.d(t, { B: () => o });
            let o = '{tld}';
        },
        64170: (e, t, l) => {
            'use strict';
            l.d(t, { SomethingWentWrong: () => v });
            var o = l(32290),
                i = l(63618),
                r = l(96103),
                n = l(55178),
                s = l(60900),
                a = l(39407),
                c = l(63423),
                d = l(82586),
                u = l(71926),
                _ = l(17811),
                m = l(99923),
                g = l(90153),
                h = l(74416),
                p = l(62376),
                x = l(37240),
                y = l(83920),
                E = l(20472),
                f = l(12894),
                N = l(30310),
                S = l.n(N);
            let v = (0, r.PA)((e) => {
                let { className: t, withBackwardControl: l = !0 } = e,
                    { formatMessage: r } = (0, s.A)(),
                    N = r({ id: 'error-messages.something-went-wrong' });
                !(function (e) {
                    let t = (0, h.st)(),
                        { hash: l } = (0, h.gf)(),
                        { pageId: o } = (0, x.$)(),
                        i = (0, p.U)();
                    (0, n.useEffect)(() => {
                        if (!t || !l || !o) return;
                        let r = (0, _.F)({
                            params: {
                                entityType: m.EntityTypes.Error,
                                entityId: m.EntityTypes.SomethingWrong,
                                errorMessage: e,
                                hash: l,
                                pageId: o,
                                pageStyle: m.PageStyles.Fullscreen,
                                pagePlacement: m.PagePlacements.Fullscreen,
                                mainObjectType: m.DomainObjectType.NonApplicable,
                                mainObjectId: m.DomainObjectType.NonApplicable,
                            },
                            logger: i,
                            context: 'useSendEventOnSomethingWentWrongShowed',
                        });
                        r && (0, g.z5)(t.evgenInstance, r);
                    }, [t, e, l, o, i]);
                })(N);
                let { sendRefreshEvent: v } = (function () {
                        let e = (0, h.st)(),
                            { hash: t } = (0, h.gf)(),
                            { pageId: l } = (0, x.$)(),
                            o = (0, p.U)();
                        return {
                            sendRefreshEvent: (0, n.useCallback)(() => {
                                if (!e || !t || !l) return;
                                let i = (0, _.F)({
                                    params: {
                                        actionType: m.ActionType.Refresh,
                                        userInteractionType: m.UserInteractionType.Tap,
                                        entityType: m.EntityTypes.Error,
                                        entityId: m.EntityTypes.SomethingWrong,
                                        hash: t,
                                        pageId: l,
                                        pageStyle: m.PageStyles.Fullscreen,
                                        pagePlacement: m.PagePlacements.Fullscreen,
                                        mainObjectType: m.DomainObjectType.NonApplicable,
                                        mainObjectId: m.DomainObjectType.NonApplicable,
                                    },
                                    logger: o,
                                    context: 'useSendEventOnSomethingWentWrongRefreshed',
                                });
                                i && (0, g.bv)(e.evgenInstance, i);
                            }, [e, t, l, o]),
                        };
                    })(),
                    k = (0, n.useCallback)(() => {
                        (v(), (window.location.href = E.Z.main.href));
                    }, [v]),
                    { contentRef: R } = (0, y.g)();
                return (0, o.jsxs)('div', {
                    className: (0, i.$)(S().root, t),
                    children: [
                        l &&
                            (0, o.jsx)(f.L, { withBackwardFallback: '/', className: (0, i.$)(S().navigation, { [S().navigation_desktop]: !R }), withForwardControl: !1 }),
                        (0, o.jsxs)('div', {
                            className: (0, i.$)(S().content, { [S().content_shrink]: !l }),
                            children: [
                                (0, o.jsx)(d.I, { className: S().icon, variant: 'attention', size: 'xxl' }),
                                (0, o.jsx)(u.DZ, { className: (0, i.$)(S().title, S().important), variant: 'h3', size: 'xs', children: N }),
                                (0, o.jsxs)(u.HL, {
                                    className: (0, i.$)(S().text, S().important),
                                    variant: 'span',
                                    type: 'text',
                                    size: 'l',
                                    weight: 'normal',
                                    children: [!1, (0, o.jsx)(a.A, { id: 'page-error.try-to-restart-app' })],
                                }),
                                (0, o.jsx)(c.$, {
                                    onClick: k,
                                    className: S().button,
                                    role: 'link',
                                    color: 'secondary',
                                    size: 'l',
                                    radius: 'xxxl',
                                    children: (0, o.jsxs)(u.HL, {
                                        type: 'controls',
                                        variant: 'span',
                                        size: 'm',
                                        children: [!1, (0, o.jsx)(a.A, { id: 'page-error.restart-app-button' })],
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
        71730: (e, t, l) => {
            'use strict';
            l.d(t, { L: () => g });
            var o = l(32290),
                i = l(63618),
                r = l(55178),
                n = l(60900),
                s = l(39407),
                a = l(63423),
                c = l(82586),
                d = l(71926),
                u = l(58534),
                _ = l(70718),
                m = l.n(_);
            let g = (e) => {
                let { reloadBlocks: t, closeToast: l } = e,
                    _ = (0, r.useRef)(null),
                    { formatMessage: g } = (0, n.A)();
                (0, r.useEffect)(() => {
                    var e;
                    null == (e = _.current) || e.focus();
                }, []);
                let h = (0, r.useMemo)(
                    () =>
                        (0, o.jsxs)('div', {
                            className: m().message,
                            children: [
                                (0, o.jsx)(d.HL, {
                                    className: m().text,
                                    variant: 'div',
                                    type: 'controls',
                                    size: 'm',
                                    children: (0, o.jsx)(s.A, { id: 'error-messages.error-load-part-page' }),
                                }),
                                (0, o.jsx)(a.$, {
                                    ref: _,
                                    className: m().button,
                                    onClick: t,
                                    variant: 'text',
                                    'aria-label': g({ id: 'interface-actions.reload-part-page' }),
                                    icon: (0, o.jsx)(c.I, { variant: 'reset', size: 'xxs', className: m().icon }),
                                }),
                            ],
                        }),
                    [g, t],
                );
                return (0, o.jsx)(u.$, { className: (0, i.$)(m().root, m().important), message: h, closeToast: l });
            };
        },
        72461: (e) => {
            e.exports = {
                root: 'KidsEditorialAlbumsPage_root__7rHF8',
                scrollContainer: 'KidsEditorialAlbumsPage_scrollContainer__nQVlt',
                important: 'KidsEditorialAlbumsPage_important__hmmxn',
                footer: 'KidsEditorialAlbumsPage_footer__6rwU1',
                item: 'KidsEditorialAlbumsPage_item__Wc243',
                content: 'KidsEditorialAlbumsPage_content__u3zcW',
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
        97841: (e, t, l) => {
            'use strict';
            l.d(t, { w: () => k });
            var o = l(32290),
                i = l(63618),
                r = l(96103),
                n = l(60900),
                s = l(31010),
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
            let c = (e, t, l) => {
                    switch (e) {
                        case a.YANDEX:
                            if ('ru' === t) return 'https://ya.ru';
                            return;
                        case a.YANDEX_PROJECTS:
                            return 'https://yandex.'.concat(t, '/all?lang=').concat(l);
                        case a.COPYRIGHT_HOLDER:
                            return 'https://yandex.'.concat(t, '/support/music/performers-and-copyright-holders/copyright.html?lang=').concat(l);
                        case a.AGREEMENT:
                            return 'https://yandex.ru/legal/music_termsofuse?lang='.concat(l);
                        case a.RECOMMENDATION_RULES:
                            return 'https://music.yandex.ru/legal/recommendations/ru/#music';
                        case a.HELP:
                            return 'https://yandex.'.concat(t, '/support/music/index.html?lang=').concat(l);
                        case a.PRIVACY_POLICY:
                            return 'https://yandex.'.concat(t, '/legal/confidential/').concat(l);
                    }
                },
                d = (e) => {
                    let { formatMessage: t, language: l, tld: o, year: i } = e;
                    return {
                        year: i,
                        yandexMusic: { id: a.YANDEX, title: t({ id: 'footer.yandex-music' }), url: c(a.YANDEX, o, l) },
                        yandexProjects: { id: a.YANDEX_PROJECTS, title: t({ id: 'footer.yandex-project' }), url: c(a.YANDEX_PROJECTS, o, l) },
                    };
                };
            var u = l(15559),
                _ = l(8626);
            let m = (e) => e(new Date(), (0, _.m)());
            var g = l(61945),
                h = l(57594),
                p = l(77088),
                x = l.n(p),
                y = l(21732),
                E = l(71926),
                f = l(61258);
            let N = (e) => {
                    let { className: t, data: l } = e;
                    return (0, o.jsxs)('div', {
                        className: (0, i.$)(x().copyrights, t),
                        'data-test-id': y.S7.FOOTER_COPYRIGHTS,
                        children: [
                            (0, o.jsxs)(E.HL, {
                                variant: 'span',
                                type: 'text',
                                size: 's',
                                weight: 'medium',
                                className: x().text,
                                children: [
                                    '\xa9 ',
                                    l.year,
                                    ' \xa0',
                                    (0, o.jsx)(f.N, {
                                        target: '_blank',
                                        href: l.yandexMusic.url,
                                        className: (0, i.$)(x().copyrightLink, x().yandexMusicLink),
                                        'data-test-id': y.S7.FOOTER_YANDEX_MUSIC_LINK,
                                        children: l.yandexMusic.title,
                                    }),
                                ],
                            }),
                            (0, o.jsx)(E.HL, { variant: 'span', type: 'text', size: 's', weight: 'medium', children: ' • ' }),
                            (0, o.jsx)(f.N, {
                                target: '_blank',
                                href: l.yandexProjects.url,
                                className: x().copyrightLink,
                                'data-test-id': y.S7.FOOTER_YANDEX_PROJECT_LINK,
                                children: l.yandexProjects.title,
                            }),
                        ],
                    });
                },
                S = (e) => {
                    let { disclaimer: t, links: l } = e;
                    return (0, o.jsxs)('div', {
                        className: x().links,
                        children: [
                            (0, o.jsx)('ol', {
                                className: x().list,
                                'data-test-id': y.S7.FOOTER_LINKS_LIST,
                                children: l.map((e) => {
                                    let { id: t, title: l, url: i } = e;
                                    return (0, o.jsx)(
                                        'li',
                                        {
                                            className: x().item,
                                            children: (0, o.jsx)(f.N, { target: '_blank', href: i, className: x().link, 'data-test-id': y.S7.FOOTER_LINK, children: l }),
                                        },
                                        t,
                                    );
                                }),
                            }),
                            (0, o.jsx)(E.HL, {
                                variant: 'span',
                                type: 'text',
                                size: 'm',
                                weight: 'medium',
                                className: x().explicitText,
                                tabIndex: 0,
                                dangerouslySetInnerHTML: { __html: t },
                                'data-test-id': y.S7.FOOTER_DISCLAIMER_TEXT,
                            }),
                        ],
                    });
                },
                v = (e) => {
                    let { className: t, data: l } = e;
                    return (0, o.jsxs)('footer', {
                        className: (0, i.$)(x().root, x().important, t),
                        'data-test-id': y.S7.FOOTER,
                        children: [(0, o.jsx)(S, { links: l.links, disclaimer: l.disclaimer }), (0, o.jsx)(N, { data: l.copyrights })],
                    });
                };
            (0, r.PA)((e) => {
                let { className: t } = e,
                    { location: l } = (0, h.g)(),
                    { formatDate: i, formatMessage: r } = (0, n.A)(),
                    { language: s } = (0, g.h)(),
                    a = d({ formatMessage: r, language: s, tld: l.tld, year: m(i) });
                return (0, o.jsx)(N, { className: t, data: a });
            });
            let k = (0, r.PA)((e) => {
                var t;
                let { className: l } = e,
                    { experiments: r, location: _, user: p } = (0, h.g)(),
                    { formatDate: y, formatMessage: E } = (0, n.A)(),
                    { isEnabled: f } = null != (t = (0, s.P)()) ? t : {},
                    { language: N } = (0, g.h)(),
                    S = ((e) => {
                        let { checkExperiment: t, formatMessage: l, isWebApplication: o, language: i, tld: r, userRegion: n, year: s } = e;
                        return {
                            links: ((e) => {
                                let { formatMessage: t, isWebApplication: l, tld: o, language: i, userRegion: r } = e,
                                    n = { id: a.COPYRIGHT_HOLDER, title: t({ id: 'footer.links-copyright-holders' }), url: c(a.COPYRIGHT_HOLDER, o, i) },
                                    s = { id: a.PRIVACY_POLICY, title: t({ id: 'footer.links-privacy-policy' }), url: c(a.PRIVACY_POLICY, o, i) },
                                    d = { id: a.AGREEMENT, title: t({ id: 'footer.links-terms' }), url: c(a.AGREEMENT, o, i) },
                                    u = { id: a.RECOMMENDATION_RULES, title: t({ id: 'footer.links-recommendation-rules' }), url: c(a.RECOMMENDATION_RULES, o, i) },
                                    _ = { id: a.HELP, title: t({ id: 'footer.links-help' }), url: c(a.HELP, o, i) },
                                    m = [n, d, u];
                                return (l && 'ru' === r && m.push(s), m.push(_), m);
                            })({ formatMessage: l, isWebApplication: o, language: i, tld: r, userRegion: n }),
                            disclaimer: (0, u.v)({
                                checkExperiment: t,
                                getDisclaimerContent: () => l({ id: 'footer.disclaimer-content' }),
                                getExplicitContent: () => l({ id: 'footer.explicit-content' }),
                                userRegion: n,
                            }),
                            copyrights: d({ formatMessage: l, language: i, tld: r, year: s }),
                        };
                    })({
                        checkExperiment: (e, t) => r.checkExperiment(e, t),
                        formatMessage: E,
                        isWebApplication: !1,
                        tld: _.tld,
                        language: N,
                        userRegion: p.account.data.userSessionRegionIso,
                        year: m(y),
                    });
                return (0, o.jsx)(v, { className: (0, i.$)({ [x().root_withOffsetForDeeplink]: f }, l), data: S });
            });
        },
    },
    (e) => {
        (e.O(
            0,
            [
                1010, 7412, 7231, 8461, 2147, 4517, 9763, 1256, 3608, 7426, 6706, 5472, 8378, 900, 2536, 2146, 3353, 2474, 8035, 347, 2732, 1410, 1417, 229, 8506, 6050,
                5806, 7702, 6874, 9155, 861, 4668, 9740, 1175, 4499, 8915, 8816, 2563, 4220, 9562, 7358,
            ],
            () => e((e.s = 31984)),
        ),
            (_N_E = e.O()));
    },
]);
