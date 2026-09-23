(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [556],
    {
        6043: (e, t, n) => {
            Promise.resolve().then(n.bind(n, 38529));
        },
        7748: (e, t, n) => {
            'use strict';
            (n.r(t), n.d(t, { NotFound: () => F }));
            var l = n(32290),
                a = n(63618),
                o = n(96103),
                r = n(39407),
                c = n(63423),
                s = n(82586),
                i = n(46049),
                u = n(71926),
                d = n(55178),
                p = n(17811),
                m = n(99923),
                f = n(90153),
                g = n(74416),
                v = n(62376),
                y = n(27576),
                P = n(83920),
                N = n(20472),
                k = n(32641),
                b = n(27120),
                h = n(12894),
                _ = n(57594),
                x = n(55365),
                A = n.n(x);
            let F = (0, o.PA)((e) => {
                let { className: t, title: n, description: o, iconVariant: x = 'musicLogo', iconClassName: F, iconSize: S } = e,
                    { contentRef: E, setContentScrollRef: T } = (0, P.g)(),
                    j = (0, k.Z)(N.Z.main.href);
                !(function () {
                    let e = (0, g.st)(),
                        { hash: t } = (0, g.gf)(),
                        n = (0, v.U)(),
                        l = (0, d.useRef)(void 0);
                    (0, d.useEffect)(() => {
                        if (!e || !t) return;
                        l.current = (0, y.A)();
                        let a = (0, p.F)({
                            params: {
                                hash: t,
                                pageId: m.AppScreen.PageNotFoundScreen,
                                pageStyle: m.PageStyles.Fullscreen,
                                pagePlacement: m.PagePlacements.Fullscreen,
                                mainObjectType: m.DomainObjectType.NonApplicable,
                                mainObjectId: m.DomainObjectType.NonApplicable,
                                viewUuid: l.current,
                            },
                            logger: n,
                            context: 'useSendEventOnNotFoundShowedOrHidden.open',
                        });
                        return (
                            a && (0, f.w5)(e.evgenInstance, a),
                            () => {
                                let a = (0, p.F)({
                                    params: {
                                        hash: t,
                                        pageId: m.AppScreen.PageNotFoundScreen,
                                        pageStyle: m.PageStyles.Fullscreen,
                                        pagePlacement: m.PagePlacements.Fullscreen,
                                        mainObjectType: m.DomainObjectType.NonApplicable,
                                        mainObjectId: m.DomainObjectType.NonApplicable,
                                        viewUuid: l.current,
                                    },
                                    logger: n,
                                    context: 'useSendEventOnNotFoundShowedOrHidden.close',
                                });
                                a && (0, f.XB)(e.evgenInstance, a);
                            }
                        );
                    }, [e, t, n]);
                })();
                let { handleNavigateToMain: O } = (function (e) {
                    let t = (0, g.st)(),
                        { hash: n } = (0, g.gf)(),
                        l = (0, v.U)();
                    return {
                        handleNavigateToMain: (0, d.useCallback)(() => {
                            if (!t || !n) return;
                            let a = (0, p.F)({
                                params: {
                                    hash: n,
                                    pageId: m.AppScreen.PageNotFoundScreen,
                                    pageStyle: m.PageStyles.Fullscreen,
                                    pagePlacement: m.PagePlacements.Fullscreen,
                                    mainObjectType: m.DomainObjectType.NonApplicable,
                                    mainObjectId: m.DomainObjectType.NonApplicable,
                                    from: m.AppScreen.PageNotFoundScreen,
                                    to: m.AppScreen.MainScreen,
                                    entityType: m.EntityTypes.Error,
                                    entityId: m.EntityTypes.Error,
                                },
                                logger: l,
                                context: 'useSendEventOnNotFoundNavigated',
                            });
                            (a && (0, f.Mu)(t.evgenInstance, a), e());
                        }, [t, n, l, e]),
                    };
                })(j);
                return (
                    (0, b.N)(!0),
                    !(function () {
                        let { location: e } = (0, _.g)();
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
                    (0, l.jsxs)(i.N, {
                        className: (0, a.$)(A().root, { [A().root_desktop]: !E }, t),
                        containerClassName: A().container,
                        ref: T,
                        children: [
                            (0, l.jsx)(h.L, { withBackwardFallback: '/', className: A().navigation, withForwardControl: !1 }),
                            (0, l.jsxs)('div', {
                                className: A().content,
                                children: [
                                    (0, l.jsx)(s.I, { className: (0, a.$)(A().icon, F), variant: x, size: S }),
                                    (0, l.jsx)(u.DZ, {
                                        className: (0, a.$)(A().title, A().important),
                                        variant: 'h3',
                                        size: 'xs',
                                        children: n || (0, l.jsx)(r.A, { id: 'page-error.page-does-not-exist' }),
                                    }),
                                    (0, l.jsx)(u.HL, {
                                        className: (0, a.$)(A().text, A().important),
                                        variant: 'span',
                                        type: 'text',
                                        size: 'l',
                                        weight: 'normal',
                                        children: o || (0, l.jsx)(r.A, { id: 'page-error.page-does-not-exist-description' }),
                                    }),
                                    (0, l.jsx)(c.$, {
                                        onClick: O,
                                        className: A().button,
                                        role: 'link',
                                        color: 'secondary',
                                        size: 'l',
                                        radius: 'xxxl',
                                        children: (0, l.jsx)(u.HL, {
                                            type: 'controls',
                                            variant: 'span',
                                            size: 'm',
                                            children: (0, l.jsx)(r.A, { id: 'navigation.page-main' }),
                                        }),
                                    }),
                                ],
                            }),
                        ],
                    })
                );
            });
        },
        12894: (e, t, n) => {
            'use strict';
            n.d(t, { L: () => g });
            var l = n(32290),
                a = n(63618),
                o = n(96103),
                r = n(55178),
                c = n(60900),
                s = n(21732),
                i = n(91027),
                u = n(63423),
                d = n(82586),
                p = n(21935),
                m = n(78842),
                f = n.n(m);
            let g = (0, o.PA)((e) => {
                let {
                        withBackwardControl: t = !0,
                        withForwardControl: n = !0,
                        shouldFocusOnMount: o = !0,
                        className: m,
                        withBackwardFallback: g,
                        buttonSize: v = 'xxs',
                    } = e,
                    { formatMessage: y } = (0, c.A)(),
                    { canBack: P, canForward: N, moveBack: k, moveForward: b } = (0, p.J)(g),
                    h = (0, r.useRef)(null),
                    _ = (0, i.c)((e) => {
                        (e.stopPropagation(), k());
                    }),
                    x = (0, i.c)((e) => {
                        (e.stopPropagation(), b());
                    });
                return (
                    (0, r.useEffect)(() => {
                        o && h.current && P && h.current.focus();
                    }, [P]),
                    (0, l.jsxs)('div', {
                        className: (0, a.$)(f().root, m),
                        'data-test-id': s.Kq.navigation.NAVIGATION_CONTROLS,
                        children: [
                            t &&
                                (0, l.jsx)(u.$, {
                                    ref: h,
                                    'aria-label': y({ id: 'navigation.go-back' }),
                                    radius: 'round',
                                    disabled: !P,
                                    size: v,
                                    icon: (0, l.jsx)(d.I, { size: 'xxs', variant: 'arrowLeft' }),
                                    onClick: _,
                                    'data-test-id': s.Kq.navigation.NAVIGATION_BACKWARD_BUTTON,
                                }),
                            n &&
                                (0, l.jsx)(u.$, {
                                    'aria-label': y({ id: 'navigation.go-forward' }),
                                    radius: 'round',
                                    disabled: !N,
                                    size: v,
                                    icon: (0, l.jsx)(d.I, { size: 'xxs', variant: 'arrowRight' }),
                                    onClick: x,
                                    'data-test-id': s.Kq.navigation.NAVIGATION_FORWARD_BUTTON,
                                }),
                        ],
                    })
                );
            });
        },
        17811: (e, t, n) => {
            'use strict';
            function l(e) {
                let { params: t, logger: n, context: l } = e,
                    a = Object.getOwnPropertyNames(t).filter((e) => void 0 === t[e]);
                return a.length > 0 ? (n.error('Evgen parameters are not met', { parameters: a.join(', '), incomingParams: t, context: l }), null) : t;
            }
            n.d(t, { F: () => l });
        },
        20472: (e, t, n) => {
            'use strict';
            n.d(t, { Z: () => a });
            var l = n(68243);
            let a = {
                main: (0, l.u)('/'),
                chart: (0, l.u)('/chart'),
                chartPodcasts: (0, l.u)('/chart/podcasts'),
                collection: (0, l.u)('/collection'),
                collectionAlbums: (0, l.u)('/collection/albums'),
                collectionArtists: (0, l.u)('/collection/artists'),
                collectionClips: (0, l.u)('/collection/clips'),
                collectionDislikes: (0, l.u)('/collection/dislikes'),
                collectionKids: (0, l.u)('/collection/kids'),
                collectionKidsAlbums: (0, l.u)('/collection/kids/albums'),
                collectionKidsPlaylists: (0, l.u)('/collection/kids/playlists'),
                collectionKidsTracks: (0, l.u)('/collection/kids/tracks'),
                collectionNonMusic: (0, l.u)('/collection/non-music'),
                collectionNonMusicLiked: (0, l.u)('/collection/non-music/liked'),
                collectionVibeRooms: (0, l.u)('/collection/multivibes'),
                collectionPlaylists: (0, l.u)('/collection/playlists'),
                collectionPlaylistsCreated: (0, l.u)('/collection/playlists/created'),
                collectionPlaylistsLiked: (0, l.u)('/collection/playlists/liked'),
                collectionShelf: (0, l.u)('/collection/shelf'),
                collectionShelfLiked: (0, l.u)('/collection/shelf/liked'),
                collectionShelfNewEpisodes: (0, l.u)('/collection/shelf/new-episodes'),
                collectionShelfRecentlyPlayed: (0, l.u)('/collection/shelf/recently-played'),
                concerts: (0, l.u)('/concerts'),
                kids: (0, l.u)('/kids'),
                mixes: (0, l.u)('/mixes'),
                musicHistory: (0, l.u)('/music-history'),
                muzmarket: (0, l.u)('/muzmarket'),
                mymusic: (0, l.u)('/mymusic'),
                mymusicDownloadsTracks: (0, l.u)('/mymusic/downloads/tracks'),
                multivibe: (0, l.u)('/multivibe'),
                nonMusic: (0, l.u)('/non-music'),
                pay: (0, l.u)('/pay'),
                userSlides: (0, l.u)('/slides/user'),
                search: (0, l.u)('/search'),
                searchHistory: (0, l.u)('/search/history'),
                settings: (0, l.u)('/settings'),
                video: (0, l.u)('/video'),
            };
        },
        21935: (e, t, n) => {
            'use strict';
            n.d(t, { J: () => r });
            var l = n(62060),
                a = n(55178),
                o = n(83808);
            let r = (e) => {
                let t = (0, o.W)(),
                    n = (0, a.useMemo)(
                        () =>
                            (0, l.A)(() => {
                                if (e && !t.canBack) return void t.replaceState({ href: e });
                                null == t || t.back();
                            }, 200),
                        [t, e],
                    ),
                    r = (0, a.useMemo)(
                        () =>
                            (0, l.A)(() => {
                                null == t || t.forward();
                            }, 200),
                        [t],
                    );
                return { canBack: !!e || t.canBack, canForward: t.canForward, moveBack: n, moveForward: r };
            };
        },
        27120: (e, t, n) => {
            'use strict';
            n.d(t, { N: () => o });
            var l = n(55178),
                a = n(53022);
            let o = (e) => {
                let t = (0, l.useRef)(!1),
                    n = (0, a.z)();
                (0, l.useEffect)(() => {
                    (e && (null == n || n.disable(), (t.current = !0)), !e && t.current && (null == n || n.enable(), (t.current = !1)));
                }, [e, n]);
            };
        },
        29098: (e, t, n) => {
            'use strict';
            n.d(t, { P: () => l });
            let l = (0, n(55178).createContext)(null);
        },
        32641: (e, t, n) => {
            'use strict';
            n.d(t, { Z: () => u });
            var l = n(21916),
                a = n(91027),
                o = n(68243),
                r = n(85472),
                c = n(90432),
                s = (function (e) {
                    return ((e.INTERNAL = 'internal'), (e.EXTERNAL = 'external'), (e.DEEPLINK = 'deeplink'), e);
                })({});
            let i = [r.UrlProtocol.HTTP, r.UrlProtocol.HTTPS, r.UrlProtocol.MAILTO, r.UrlProtocol.TEL, c.Lz],
                u = (e) => {
                    let t = (0, l.useRouter)(),
                        { href: n, target: u } = (0, o.u)(e);
                    return (0, a.c)((e) => {
                        let l = ((e, t, n) => {
                            let l;
                            try {
                                l = new URL(t);
                            } catch (e) {
                                return null;
                            }
                            let a = (0, r.resolveUrlByPolicy)(e, { allowedProtocols: new Set([...i, l.protocol]), baseUrl: l.href });
                            return a.isAllowed
                                ? a.url.protocol === c.Lz
                                    ? { type: s.DEEPLINK, href: e }
                                    : '_blank' !== n && ((e, t) => e.protocol === t.protocol && e.hostname === t.hostname && e.port === t.port)(a.url, l)
                                      ? { type: s.INTERNAL, href: e }
                                      : { type: s.EXTERNAL, href: e }
                                : null;
                        })(n, window.location.href, u);
                        if (!l) {
                            null == e || e.preventDefault();
                            return;
                        }
                        (null != e && e.metaKey) ||
                            (null != e && e.ctrlKey) ||
                            (null != e && e.shiftKey) ||
                            (l.type === s.EXTERNAL || l.type === s.DEEPLINK
                                ? ((e) => {
                                      let { target: t, rel: n } = (0, o.u)(e, { options: { isExternalLink: !0 } });
                                      window.open(e, t, n);
                                  })(l.href)
                                : t.push(l.href));
                    });
                };
        },
        38529: (e, t, n) => {
            'use strict';
            n.d(t, { NonMusicCategoryNotFoundPage: () => r });
            var l = n(32290),
                a = n(96103),
                o = n(7748);
            let r = (0, a.PA)(() => (0, l.jsx)(o.NotFound, {}));
        },
        39407: (e, t, n) => {
            'use strict';
            n.d(t, { A: () => i });
            var l = n(30782),
                a = n(55178),
                o = n(36260),
                r = n(60900);
            function c(e) {
                var t = (0, r.A)(),
                    n = t.formatMessage,
                    l = t.textComponent,
                    o = void 0 === l ? a.Fragment : l,
                    c = e.id,
                    s = e.description,
                    i = e.defaultMessage,
                    u = e.values,
                    d = e.children,
                    p = e.tagName,
                    m = void 0 === p ? o : p,
                    f = n({ id: c, description: s, defaultMessage: i }, u, { ignoreTag: e.ignoreTag });
                return 'function' == typeof d ? d(Array.isArray(f) ? f : [f]) : m ? a.createElement(m, null, f) : a.createElement(a.Fragment, null, f);
            }
            c.displayName = 'FormattedMessage';
            var s = a.memo(c, function (e, t) {
                var n = e.values,
                    a = (0, l.__rest)(e, ['values']),
                    r = t.values,
                    c = (0, l.__rest)(t, ['values']);
                return (0, o.bN)(r, n) && (0, o.bN)(a, c);
            });
            s.displayName = 'MemoizedFormattedMessage';
            let i = s;
        },
        53022: (e, t, n) => {
            'use strict';
            n.d(t, { z: () => o });
            var l = n(55178),
                a = n(29098);
            let o = () => (0, l.useContext)(a.P);
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
        74416: (e, t, n) => {
            'use strict';
            n.d(t, { vZ: () => v, st: () => o, gf: () => c });
            var l = n(55178);
            let a = (0, l.createContext)(null);
            function o() {
                return (0, l.useContext)(a);
            }
            let r = (0, l.createContext)({ hash: void 0 });
            function c() {
                return (0, l.useContext)(r);
            }
            var s = n(32290),
                i = n(27576);
            let u = (e) => {
                let { children: t } = e,
                    n = (0, l.useMemo)(() => ({ hash: (0, i.A)() }), []);
                return (0, s.jsx)(r.Provider, { value: n, children: t });
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
            var m = n(91945);
            class f {
                get evgenInstance() {
                    return this.evgen;
                }
                sendEvent(e, t) {
                    this.evgen.trackEvent(e, t);
                }
                constructor(e, t, n) {
                    ((0, m._)(this, 'evgen', void 0),
                        (this.evgen = {
                            trackEvent: (l, a) => {
                                let o = { ...a, ...t.getGlobalParams(), ...n.getPlatformParams() };
                                e.trackEvent(l, o);
                            },
                        }));
                }
            }
            let g = null,
                v = (e) => {
                    let { allowAnalyticsLogs: t, children: n, evgenUserParam: o, logger: r, metrika: c } = e,
                        i = (0, l.useMemo)(() => {
                            if (g) return g;
                            let e = (function (e, t, n) {
                                let l = (function (e) {
                                    let { callback: t, maxSendingItemsPerRequest: n, requestsSendingDelay: l } = e,
                                        a = [];
                                    return (
                                        !(function e() {
                                            (a.length > 0 && t(a.splice(0, n)), window.setTimeout(e, l));
                                        })(),
                                        {
                                            add(e) {
                                                a.push(e);
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
                                    trackEvent(e, a) {
                                        (n && t.log(e, a), l.add({ [e]: a }));
                                    },
                                };
                            })((e) => c.count(e, o), r, t);
                            return (g = new f(
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
                        }, [r, c]);
                    return (0, s.jsx)(a.Provider, { value: i, children: (0, s.jsx)(u, { children: n }) });
                };
        },
        78842: (e) => {
            e.exports = { root: 'NavigationControls_root__V2A3_' };
        },
        83808: (e, t, n) => {
            'use strict';
            n.d(t, { Q: () => a, W: () => o });
            var l = n(55178);
            let a = (0, l.createContext)({
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
                return (0, l.useContext)(a);
            }
        },
        83920: (e, t, n) => {
            'use strict';
            n.d(t, { M: () => a, g: () => o });
            var l = n(55178);
            let a = (0, l.createContext)({
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
                o = () => (0, l.useContext)(a);
        },
        90153: (e, t, n) => {
            'use strict';
            ((t.w5 = function (e, t) {
                let {
                        skeletonId: n = '',
                        mainObjectType: o = a.DomainObjectType.NonApplicable,
                        mainObjectId: r = '',
                        tabId: c = '',
                        tabPos: s = 0,
                        isTabSelectedByDefault: i = !1,
                        viewUuid: u = '',
                    } = t,
                    d = (0, l.makeMetaParams)(1),
                    p = { ...t, skeletonId: n, mainObjectType: o, mainObjectId: r, tabId: c, tabPos: s, isTabSelectedByDefault: i, viewUuid: u, _meta: d };
                e.trackEvent('Screen.Opened', p);
            }),
                (t.Fn = function (e, t) {
                    let {
                            pageStyle: n = a.PageStyles.Fullscreen,
                            pagePlacement: o = a.PagePlacements.Fullscreen,
                            skeletonId: r = '',
                            mainObjectType: c = a.DomainObjectType.NonApplicable,
                            mainObjectId: s = '',
                            tabId: i = '',
                            tabPos: u = 0,
                            isTabSelectedByDefault: d = !1,
                            viewUuid: p = '',
                        } = t,
                        m = (0, l.makeMetaParams)(3),
                        f = {
                            ...t,
                            pageStyle: n,
                            pagePlacement: o,
                            skeletonId: r,
                            mainObjectType: c,
                            mainObjectId: s,
                            tabId: i,
                            tabPos: u,
                            isTabSelectedByDefault: d,
                            viewUuid: p,
                            _meta: m,
                        };
                    e.trackEvent('Screen.Opened', f);
                }),
                (t.XB = function (e, t) {
                    let {
                            skeletonId: n = '',
                            mainObjectType: o = a.DomainObjectType.NonApplicable,
                            mainObjectId: r = '',
                            tabId: c = '',
                            tabPos: s = 0,
                            isTabSelectedByDefault: i = !1,
                        } = t,
                        u = (0, l.makeMetaParams)(1),
                        d = { ...t, skeletonId: n, mainObjectType: o, mainObjectId: r, tabId: c, tabPos: s, isTabSelectedByDefault: i, _meta: u };
                    e.trackEvent('Screen.Closed', d);
                }),
                (t.Ig = function (e, t) {
                    let {
                            pageStyle: n = a.PageStyles.Fullscreen,
                            pagePlacement: o = a.PagePlacements.Fullscreen,
                            skeletonId: r = '',
                            mainObjectType: c = a.DomainObjectType.NonApplicable,
                            mainObjectId: s = '',
                            tabId: i = '',
                            tabPos: u = 0,
                            isTabSelectedByDefault: d = !1,
                        } = t,
                        p = (0, l.makeMetaParams)(3),
                        m = {
                            ...t,
                            pageStyle: n,
                            pagePlacement: o,
                            skeletonId: r,
                            mainObjectType: c,
                            mainObjectId: s,
                            tabId: i,
                            tabPos: u,
                            isTabSelectedByDefault: d,
                            _meta: p,
                        };
                    e.trackEvent('Screen.Closed', m);
                }),
                (t.PO = function (e, t) {
                    let {
                            pageStyle: n = a.PageStyles.Fullscreen,
                            pagePlacement: o = a.PagePlacements.Fullscreen,
                            skeletonId: r = '',
                            mainObjectType: c = a.DomainObjectType.NonApplicable,
                            mainObjectId: s = '',
                            tabId: i = '',
                            tabPos: u = 0,
                            isTabSelectedByDefault: d = !1,
                            viewUuid: p = '',
                        } = t,
                        m = (0, l.makeMetaParams)(4),
                        f = {
                            ...t,
                            pageStyle: n,
                            pagePlacement: o,
                            skeletonId: r,
                            mainObjectType: c,
                            mainObjectId: s,
                            tabId: i,
                            tabPos: u,
                            isTabSelectedByDefault: d,
                            viewUuid: p,
                            _meta: m,
                        };
                    e.trackEvent('Screen.Closed', f);
                }),
                (t.e7 = function (e, t) {
                    let {
                            skeletonId: n = '',
                            mainObjectType: o = a.DomainObjectType.NonApplicable,
                            mainObjectId: r = '',
                            tabId: c = '',
                            tabPos: s = 0,
                            isTabSelectedByDefault: i = !1,
                        } = t,
                        u = (0, l.makeMetaParams)(1),
                        d = { ...t, skeletonId: n, mainObjectType: o, mainObjectId: r, tabId: c, tabPos: s, isTabSelectedByDefault: i, _meta: u };
                    e.trackEvent('Screen.Started', d);
                }),
                (t.Mu = function (e, t) {
                    let {
                            skeletonId: n = '',
                            mainObjectType: o = a.DomainObjectType.NonApplicable,
                            mainObjectId: r = '',
                            tabId: c = '',
                            tabPos: s = 0,
                            isTabSelectedByDefault: i = !1,
                        } = t,
                        u = (0, l.makeMetaParams)(1),
                        d = { ...t, skeletonId: n, mainObjectType: o, mainObjectId: r, tabId: c, tabPos: s, isTabSelectedByDefault: i, _meta: u };
                    e.trackEvent('Screen.Navigated', d);
                }),
                (t.ID = function (e, t) {
                    let {
                            pageStyle: n = a.PageStyles.Fullscreen,
                            pagePlacement: o = a.PagePlacements.Fullscreen,
                            skeletonId: r = '',
                            mainObjectType: c = a.DomainObjectType.NonApplicable,
                            mainObjectId: s = '',
                            tabId: i = '',
                            tabPos: u = 0,
                            isTabSelectedByDefault: d = !1,
                            deepLink: p = '',
                        } = t,
                        m = (0, l.makeMetaParams)(4),
                        f = {
                            ...t,
                            pageStyle: n,
                            pagePlacement: o,
                            skeletonId: r,
                            mainObjectType: c,
                            mainObjectId: s,
                            tabId: i,
                            tabPos: u,
                            isTabSelectedByDefault: d,
                            deepLink: p,
                            _meta: m,
                        };
                    e.trackEvent('Screen.Navigated', f);
                }),
                (t.bv = function (e, t) {
                    let {
                            skeletonId: n = '',
                            mainObjectType: o = a.DomainObjectType.NonApplicable,
                            mainObjectId: r = '',
                            tabId: c = '',
                            tabPos: s = 0,
                            isTabSelectedByDefault: i = !1,
                        } = t,
                        u = (0, l.makeMetaParams)(1),
                        d = { ...t, skeletonId: n, mainObjectType: o, mainObjectId: r, tabId: c, tabPos: s, isTabSelectedByDefault: i, _meta: u };
                    e.trackEvent('Screen.ActionPerformed', d);
                }),
                (t.z5 = function (e, t) {
                    let {
                            pageStyle: n = a.PageStyles.Fullscreen,
                            pagePlacement: o = a.PagePlacements.Fullscreen,
                            skeletonId: r = '',
                            mainObjectType: c = a.DomainObjectType.NonApplicable,
                            mainObjectId: s = '',
                        } = t,
                        i = (0, l.makeMetaParams)(1),
                        u = { ...t, pageStyle: n, pagePlacement: o, skeletonId: r, mainObjectType: c, mainObjectId: s, _meta: i };
                    e.trackEvent('Screen.ErrorRaised', u);
                }));
            let l = n(92871),
                a = n(99923);
        },
        90432: (e, t, n) => {
            'use strict';
            n.d(t, { Lz: () => l, ov: () => a });
            let l = ''.concat('yandexmusic', ':'),
                a = ''.concat(l, '//');
        },
        92871: (e, t) => {
            'use strict';
            var n;
            (Object.defineProperty(t, '__esModule', { value: !0 }),
                (t.MiniappConfig = void 0),
                (t.makeMetaParams = function (e) {
                    return { event: { version: e } };
                }),
                (t.createEvgenAnalytics = function (e, t, n) {
                    return {
                        trackEvent: (l, a) => {
                            let o = { ...a, ...t.getGlobalParams(), ...n.getPlatformParams() };
                            e.trackEvent(l, o);
                        },
                    };
                }),
                !(function (e) {
                    ((e.Music = 'music'), (e.NotApplicable = 'not_applicable'));
                })(n || (t.MiniappConfig = n = {})));
        },
    },
    (e) => {
        (e.O(0, [1010, 6706, 5472, 8378, 900, 2536, 2146, 3353, 8506, 6050, 5806, 6241, 4220, 9562, 7358], () => e((e.s = 6043))), (_N_E = e.O()));
    },
]);
