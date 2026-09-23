(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [229, 9394],
    {
        3377: (e, t, i) => {
            'use strict';
            i.d(t, { WithAuth: () => h });
            var r = i(32290),
                s = i(96103),
                a = i(21916),
                n = i(63618),
                o = i(39407),
                l = i(71926),
                c = i(94218),
                d = i(55556),
                u = i.n(d);
            let m = (0, s.PA)(() =>
                (0, r.jsxs)('div', {
                    className: u().root,
                    children: [
                        (0, r.jsx)(l.DZ, {
                            className: (0, n.$)(u().title, u().important),
                            variant: 'h3',
                            size: 'xs',
                            children: (0, r.jsx)(o.A, { id: 'authorization.enter-title' }),
                        }),
                        (0, r.jsx)(l.HL, {
                            className: (0, n.$)(u().text, u().important),
                            variant: 'span',
                            type: 'text',
                            size: 'l',
                            weight: 'normal',
                            children: (0, r.jsx)(o.A, { id: 'authorization.enter-text' }),
                        }),
                        (0, r.jsx)(c.H, { size: 'l', className: u().button }),
                    ],
                }),
            );
            var p = i(20472),
                _ = i(57594);
            let h = (0, s.PA)((e) => {
                let { children: t, withRedirectToMainPage: i } = e,
                    { user: s } = (0, _.g)();
                return s.isAuthorized ? t : (i && (0, a.redirect)(p.Z.main.href), (0, r.jsx)(m, {}));
            });
        },
        3796: (e, t, i) => {
            'use strict';
            i.d(t, { J: () => a });
            var r = i(21916),
                s = i(55178);
            let a = (e) => {
                let t = (0, r.usePathname)(),
                    [i, a] = (0, s.useState)(!1);
                ((0, s.useEffect)(() => {
                    (window.Ya.Rum.spa.makeSpaSubPage(t), window.Ya.Rum.spa.startDataLoading(t));
                }),
                    (0, s.useEffect)(() => {
                        window.Ya.Rum.spa.getLastSpaSubPage(t) && e && !i && (window.Ya.Rum.spa.finishDataLoading(t), window.Ya.Rum.spa.startDataRendering(t), a(!0));
                    }, [e, i, t]));
            };
        },
        4820: (e, t, i) => {
            'use strict';
            i.d(t, { C: () => c });
            var r = i(32290),
                s = i(55178),
                a = i(21732),
                n = i(71926),
                o = i(91624),
                l = i.n(o);
            let c = (e) => {
                let { getDescriptionTexts: t, entityId: i } = e,
                    [o, c] = (0, s.useState)(null);
                if (
                    ((0, s.useEffect)(() => {
                        t && t().then(c);
                    }, [t]),
                    o)
                )
                    return o.map((e, t) =>
                        (0, r.jsx)(
                            n.HL,
                            {
                                className: l().descriptionTextItem,
                                variant: 'div',
                                type: 'text',
                                size: 'm',
                                weight: 'normal',
                                'data-test-id': a.S7.DESCRIPTION_TEXT,
                                children: e,
                            },
                            ''.concat(i, '-descpription-text-').concat(t),
                        ),
                    );
            };
        },
        5537: (e, t, i) => {
            'use strict';
            i.d(t, { N: () => a });
            var r = i(57594),
                s = i(79406);
            let a = () => {
                var e, t;
                let {
                    user: i,
                    settings: { browserInfo: a },
                    experiments: n,
                } = (0, r.g)();
                return (
                    !(null == a ? void 0 : a.isTouch) &&
                    i.isAuthorized &&
                    !i.hasPlus &&
                    (null == (t = n.getExperiment(s.z.WebNextDesktopWebFreemium)) || null == (e = t.value) ? void 0 : e.closeListening) === 'on'
                );
            };
        },
        10733: (e, t, i) => {
            'use strict';
            i.d(t, { G: () => a });
            var r = i(91945),
                s = i(50891);
            class a extends s.m {
                constructor(e, t) {
                    (super(e, { code: 'E_HTTP_CLIENT_NON_2XX_3XX_RESPONSE', cause: t.cause }),
                        (0, r._)(this, 'name', 'HttpErrorException'),
                        (0, r._)(this, 'statusCode', void 0),
                        (this.statusCode = t.statusCode),
                        Object.setPrototypeOf(this, a.prototype));
                }
            }
        },
        11262: (e, t, i) => {
            'use strict';
            i.d(t, { X: () => d });
            var r = i(32290),
                s = i(55178),
                a = i(91027),
                n = i(71730),
                o = i(45477),
                l = i(75582),
                c = i(49399);
            let d = (e, t) => {
                let { notify: i, dismiss: d } = (0, l.l)(),
                    u = (0, s.useRef)(void 0),
                    m = (0, a.c)(() => {
                        var i;
                        (d({ notificationId: u.current }), (u.current = 0));
                        let r = [...(null != (i = e.lastRejectedPagesList) ? i : [])].reverse().filter((t) => {
                            var i;
                            return (null == (i = e.pageStates) ? void 0 : i[t]) === c.G.REJECT;
                        });
                        (e.resetRejectedPagesState(),
                            r.forEach((e) => {
                                t(e);
                            }));
                    });
                (0, s.useEffect)(() => {
                    e.rejectedPagesCount > 0 && !u.current && (u.current = i((0, r.jsx)(n.L, { reloadBlocks: m }), { containerId: o.u.ERROR, autoClose: !1 }));
                }, [d, m, i, e.rejectedPagesCount]);
            };
        },
        12989: (e, t, i) => {
            'use strict';
            i.d(t, { D: () => g });
            var r = i(55178),
                s = i(17811),
                a = i(92146),
                n = i(74416),
                o = i(6752),
                l = i(62376),
                c = i(1677),
                d = i(48922),
                u = i(84782),
                m = i(30915),
                p = i(18746),
                _ = i(2792),
                h = i(37240),
                v = i(51012),
                f = i(47498);
            let g = () => {
                let e = (0, l.U)(),
                    t = (0, n.st)(),
                    { hash: i } = (0, n.gf)(),
                    { pageId: g, displayReasonId: x } = (0, h.$)(),
                    { tabId: b, tabPos: A, isTabSelectedByDefault: N } = (0, f.R)(),
                    { offsetBlockPosY: T } = (0, m.u)(),
                    { blockType: y, blockId: C, blockPosX: E, blockPosY: I, mainObjectId: O, mainObjectType: k, displayReasonId: S } = (0, u.N)(),
                    { filterKey: j, filterValue: L, filterPos: P } = (0, p.G)(),
                    { objectType: w, objectsCount: R, objectId: D, objectPosX: B, objectPosY: F } = (0, _.J)(),
                    { skeleton: M } = (0, v.b)(),
                    z = null != S ? S : x,
                    U = (0, o.L)(() => (void 0 !== T && void 0 !== I ? T + I : I));
                return (0, r.useCallback)(
                    (r, n) => {
                        if (!t || !g || !d.xK.includes(g) || !d.fD.includes(g)) return;
                        let o = c.F[g];
                        if (!o) return;
                        let l = {
                            hash: i,
                            pageId: o,
                            entityType: y,
                            entityId: C,
                            entityPosX: E,
                            entityPosY: U,
                            objectsCount: R,
                            viewUuid: n,
                            objectType: w,
                            objectId: D,
                            objectPosX: B,
                            objectPosY: F,
                        };
                        (void 0 !== j && ((l.filterKey = j), (l.filterValue = L), (l.filterPos = P)),
                            d.qG.includes(g) && ((l.tabId = b), (l.tabPos = A), (l.isTabSelectedByDefault = N)),
                            M && (l.skeletonId = M),
                            'string' == typeof O && 'string' == typeof k && ((l.mainObjectType = k), (l.mainObjectId = O)),
                            z && (l.displayReasonId = z));
                        let u = (0, s.F)({ params: l, logger: e, context: 'useSendEventOnBlockShowedOrHidden' });
                        u && (r ? (0, a.Pf)(t.evgenInstance, u) : (0, a.nv)(t.evgenInstance, u));
                    },
                    [t, z, C, E, U, y, j, P, L, i, N, e, O, k, D, B, F, w, R, g, M, b, A],
                );
            };
        },
        13798: (e, t, i) => {
            'use strict';
            i.d(t, { N: () => v });
            var r = i(32290),
                s = i(63618),
                a = i(96103),
                n = i(55178),
                o = i(60900),
                l = i(80229),
                c = i(21732),
                d = i(6752),
                u = i(82586),
                m = i(57594),
                p = i(60244),
                _ = i(90006),
                h = i.n(_);
            let v = (0, a.PA)((e) => {
                let { className: t, getDescriptionTexts: i, trackId: a, containerClassName: _, variant: v, size: f = 'xxxs', ...g } = e,
                    { formatMessage: x } = (0, o.A)(),
                    {
                        settings: { isMobile: b },
                    } = (0, m.g)(),
                    [A, N] = (0, n.useState)(null),
                    T = (0, d.L)(() => {
                        switch (v) {
                            case l.JU.E:
                                return 'explicit';
                            case l.JU.AGE_12:
                            case l.JU.AGE_16:
                            case l.JU.AGE_18:
                                return 'adult';
                            case l.JU.EXCLAMATION:
                        }
                        return 'exclamation';
                    }),
                    y = (0, n.useMemo)(() => x({ id: 'extra-explicit.explicit-mark' }), [x]);
                (0, n.useEffect)(() => {
                    i && i().then(N);
                }, [i, a]);
                let C = (null == A ? void 0 : A.join('\n')) || '',
                    E = !!(null == A ? void 0 : A.length) && !b,
                    I = C.length > 0 ? C : y;
                return (0, r.jsx)(p.k, {
                    description: C,
                    placement: 'bottom-start',
                    enabled: E,
                    children: (0, r.jsx)('span', {
                        className: _,
                        children: (0, r.jsx)(u.I, {
                            className: (0, s.$)(h().explicitMark, t),
                            'aria-label': I,
                            variant: T,
                            size: f,
                            ...g,
                            'data-test-id': c.S7.EXPLICIT_MARK_ICON,
                        }),
                    }),
                });
            });
        },
        16510: (e) => {
            e.exports = { root: 'ArtistItem_root__Q_mgJ', image: 'ArtistItem_image__5rKWF', cover: 'ArtistItem_cover__FTvHo' };
        },
        22714: (e, t, i) => {
            'use strict';
            i.d(t, { n: () => n });
            var r = i(32290),
                s = i(55178),
                a = i(1176);
            let n = (e) => {
                let { pageId: t, pageEntityId: i, displayReasonId: n, pageStyle: o, pagePlacement: l, children: c } = e,
                    d = (0, s.useMemo)(() => ({ pageId: t, pageEntityId: i, displayReasonId: n, pageStyle: o, pagePlacement: l }), [t, i, n, o, l]);
                return (0, r.jsx)(a.r.Provider, { value: d, children: c });
            };
        },
        23352: (e, t, i) => {
            'use strict';
            i.d(t, { n: () => n });
            var r = i(55178),
                s = i(12989),
                a = i(80536);
            let n = function () {
                let { callback: e, singleEvent: t, withViewUuid: i } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    n = (0, r.useRef)(null),
                    o = (0, s.D)(),
                    l = (0, r.useId)(),
                    c = (0, r.useContext)(a.B),
                    d = (0, r.useCallback)(
                        (r, s) => {
                            (e ? e(r, i ? s : void 0) : o(r, s), t && c.unobserveElement(l));
                        },
                        [e, c, l, o, t, i],
                    );
                return (
                    (0, r.useEffect)(
                        () => (
                            c.observeElement({ elementRef: n, elementId: l, callback: d }),
                            () => {
                                c.unobserveElement(l);
                            }
                        ),
                        [e, c, d, l, o],
                    ),
                    { ref: n, intersectionPropertyId: l }
                );
            };
        },
        25630: (e, t, i) => {
            (Promise.resolve().then(i.bind(i, 3377)), Promise.resolve().then(i.bind(i, 25990)));
        },
        25990: (e, t, i) => {
            'use strict';
            i.d(t, { CollectionKidsTracksPage: () => D });
            var r = i(32290),
                s = i(63618),
                a = i(96103),
                n = i(55178),
                o = i(60900),
                l = i(39407),
                c = i(21732),
                d = i(71483),
                u = i(96333),
                m = i(71926),
                p = i(64170),
                _ = i(7999),
                h = i(94631),
                v = i(69951),
                f = i(48922),
                g = i(22714),
                x = i(72396),
                b = i(83808),
                A = i(83920),
                N = i(3796),
                T = i(31286),
                y = i(57594),
                C = i(98350),
                E = i(11262),
                I = i(97841),
                O = i(32468),
                k = i(74694),
                S = i(34223),
                j = i(45257),
                L = i(30294),
                P = i(61500),
                w = i(60586),
                R = i.n(w);
            let D = (0, a.PA)(() => {
                let {
                        collection: {
                            kids: { tracks: e },
                        },
                        settings: { isMobile: t },
                    } = (0, y.g)(),
                    { contentScrollRef: i, setContentScrollRef: a } = (0, A.g)(),
                    w = (0, b.W)(),
                    { from: D } = (0, x.f)({ pageId: f._Q.COLLECTION_KIDS_TRACKS }),
                    { formatMessage: B } = (0, o.A)(),
                    F = (0, T.w)();
                ((0, n.useEffect)(
                    () => () => {
                        e.reset();
                    },
                    [e],
                ),
                    (0, N.J)(e.isResolved));
                let M = (0, n.useCallback)(
                    (t) => {
                        e.getData({ page: t, pageSize: L.c });
                    },
                    [e],
                );
                (0, E.X)(e.pagesLoader, M);
                let z = (0, n.useMemo)(() => ({ Footer: () => (0, r.jsx)(O.A, { children: (0, r.jsx)(I.w, { className: R().footer }) }) }), []),
                    U = e.isShimmerVisible ? 20 : e.items.length;
                return (e.isNeededToLoad && (0, n.use)(e.getData({ pageSize: L.c })), e.isRejected)
                    ? (0, r.jsx)(p.SomethingWentWrong, {})
                    : e.isEmpty
                      ? (0, r.jsx)(P.i, { title: B({ id: 'kids.favourite-tracks-and-episodes' }) })
                      : (0, r.jsx)(g.n, {
                            pageId: f._Q.COLLECTION_KIDS_TRACKS,
                            children: (0, r.jsx)(_.h, {
                                scrollElement: i,
                                outerTitle: B({ id: 'kids.favourite-tracks-and-episodes' }),
                                children: (0, r.jsxs)('div', {
                                    className: R().root,
                                    'data-test-id': c.Xk.collection.COLLECTION_KIDS_TRACKS_PAGE,
                                    children: [
                                        (0, r.jsx)(k.Y, {
                                            variant: k.V.TEXT,
                                            withForwardControl: !1,
                                            withBackwardControl: w.canBack,
                                            children: (0, r.jsx)(m.DZ, {
                                                variant: 'h2',
                                                weight: 'bold',
                                                size: t ? 'm' : 'xl',
                                                lineClamp: 2,
                                                children: (0, r.jsx)(l.A, { id: 'kids.favourite-tracks-and-episodes' }),
                                            }),
                                        }),
                                        (0, r.jsx)(j.$, {
                                            className: (0, s.$)(R().scrollContainer, R().important),
                                            listClassName: R().content,
                                            customComponents: z,
                                            itemContentCallback: (t) => {
                                                let i = e.items[t];
                                                if (!i) return (0, r.jsx)(S.D, { isActive: !0, className: R().shimmerItem, variant: C.X.PLAYLIST });
                                                let s = F(i.entityId, {
                                                    contextData: { type: d.K.Various, meta: { id: i.entityId }, from: D },
                                                    queueParams: { index: t },
                                                    loadContextMeta: !1,
                                                    entitiesData: e.sonataEntitiesData,
                                                });
                                                return i.type === u.S.MUSIC
                                                    ? (0, r.jsx)(v.K, { track: i, playContextParams: s }, t)
                                                    : (0, r.jsx)(h.K, { track: i, playContextParams: s, withPodcastName: i.isTrackPodcast }, t);
                                            },
                                            initialItemCount: U,
                                            totalCount: U,
                                            onGetDataByPage: M,
                                            pageSize: L.c,
                                            totalRequests: e.requestsCount,
                                            handleRef: a,
                                            context: { listAriaLabel: B({ id: 'entity-names.tracks' }) },
                                            isMobileLayout: t,
                                            useWindowScroll: t,
                                        }),
                                    ],
                                }),
                            }),
                        });
            });
        },
        29268: (e, t, i) => {
            'use strict';
            i.d(t, { k: () => u });
            var r = i(32290),
                s = i(55178),
                a = i(60900),
                n = i(21732),
                o = i(63423),
                l = i(82586),
                c = i(59576);
            let d = (e) => {
                    let {
                            variant: t,
                            withRipple: i,
                            size: s,
                            radius: d,
                            iconSize: u,
                            disabled: m,
                            onClick: p,
                            iconClassName: _,
                            className: h,
                            forwardRef: v,
                            style: f,
                            children: g,
                        } = e,
                        { formatMessage: x } = (0, a.A)(),
                        b = x({ id: 'trailer.button-aria-label' });
                    return (0, r.jsx)(o.$, {
                        className: h,
                        color: 'secondary',
                        radius: d,
                        size: s,
                        variant: t,
                        withRipple: i,
                        flexIcon: !0,
                        'aria-label': b,
                        onClick: p,
                        ref: v,
                        icon: (0, r.jsx)(l.I, { variant: 'trailer', size: u, className: _ }),
                        disabled: m,
                        'data-intersection-property-id': c.N,
                        style: f,
                        'data-test-id': n.S7.TRAILER_BUTTON,
                        children: g,
                    });
                },
                u = (0, s.forwardRef)((e, t) => (0, r.jsx)(d, { forwardRef: t, ...e }));
        },
        30294: (e, t, i) => {
            'use strict';
            i.d(t, { c: () => r });
            let r = 20;
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
        30542: (e, t, i) => {
            'use strict';
            i.d(t, { $: () => a });
            var r = i(60900),
                s = i(64605);
            let a = (e, t) => {
                let { formatMessage: i } = (0, r.A)();
                if (e)
                    switch (t) {
                        case s._.AUDIOBOOK:
                            return i({ id: 'non-music.shelf-unsubscribe' });
                        case s._.FAIRY_TALE:
                            return i({ id: 'interface-actions.do-not-like' });
                        default:
                            return i({ id: 'interface-actions.subscribed' });
                    }
                switch (t) {
                    case s._.AUDIOBOOK:
                        return i({ id: 'non-music.shelf-subscribe' });
                    case s._.FAIRY_TALE:
                        return i({ id: 'interface-actions.like' });
                    default:
                        return i({ id: 'interface-actions.subscribe' });
                }
            };
        },
        31286: (e, t, i) => {
            'use strict';
            i.d(t, { w: () => a });
            var r = i(55178),
                s = i(91027);
            let a = () => {
                let e = (0, r.useRef)(new Map());
                return (
                    (0, r.useLayoutEffect)(
                        () => (
                            e.current.size > 0 && e.current.clear(),
                            () => {
                                e.current.clear();
                            }
                        ),
                        [],
                    ),
                    (0, s.c)((t, i) => (e.current.has(t) ? e.current.get(t) : (e.current.set(t, i), i)))
                );
            };
        },
        33898: (e, t, i) => {
            'use strict';
            var r;
            (i.d(t, { Z: () => r }),
                (function (e) {
                    ((e.METHOD_NOT_SUPPORTED = 'E_BEACON_METHOD_NOT_SUPPORTED'),
                        (e.NOT_AVAILABLE = 'E_BEACON_NOT_AVAILABLE'),
                        (e.QUEUE_FAILED = 'E_BEACON_QUEUE_FAILED'),
                        (e.NO_RESPONSE_DATA = 'E_BEACON_NO_RESPONSE_DATA'),
                        (e.RETRY_EXHAUSTED = 'E_BEACON_RETRY_EXHAUSTED'));
                })(r || (r = {})));
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
        40484: (e) => {
            e.exports = {
                root_clamp: 'SeparatedArtists_root_clamp__SyvjM',
                root_variant_breakAll: 'SeparatedArtists_root_variant_breakAll__34YbW',
                root_variant_breakWord: 'SeparatedArtists_root_variant_breakWord__1sziE',
                ellipsis: 'SeparatedArtists_ellipsis__0SUCv',
            };
        },
        41566: (e, t, i) => {
            'use strict';
            i.d(t, { U: () => d });
            var r = i(32290),
                s = i(96103),
                a = i(21732),
                n = i(82586),
                o = i(19740),
                l = i(30542),
                c = i(57594);
            let d = (0, s.PA)((e) => {
                let { isLiked: t, onClick: i, className: s, albumType: d, disabled: u } = e,
                    { user: m } = (0, c.g)(),
                    p = t ? 'liked' : 'like',
                    _ = (0, l.$)(t, d);
                return (0, r.jsx)(o.Dr, {
                    className: s,
                    onClick: i,
                    icon: (0, r.jsx)(n.I, { variant: p, size: 'xxs' }),
                    'aria-pressed': t,
                    disabled: u || !m.isAuthorized,
                    'data-test-id': a.S7.CONTEXT_MENU_SUBSCRIBE_BUTTON,
                    children: _,
                });
            });
        },
        41677: (e, t, i) => {
            'use strict';
            i.d(t, { i: () => z });
            var r = i(32290),
                s = i(63618),
                a = i(96103),
                n = i(55178),
                o = i(70280),
                l = i(57594),
                c = i(53514),
                d = i(40484),
                u = i.n(d),
                m = i(60900),
                p = i(99923),
                _ = i(21732),
                h = i(91027),
                v = i(71926),
                f = i(47745),
                g = i(32641),
                x = i(28999),
                b = i(61258),
                A = i(19383);
            let N = (0, a.PA)((e) => {
                    let {
                            artist: t,
                            withLink: i = !0,
                            linkClassName: s,
                            captionClassName: a,
                            captionSize: n = 'm',
                            allArtistsTitle: c,
                            withCustomTooltip: d,
                            hoverSettings: u,
                        } = e,
                        { formatMessage: N } = (0, m.A)(),
                        {
                            track: T,
                            settings: { isMobile: y },
                        } = (0, l.g)(),
                        C = (0, g.Z)(t.url),
                        { sendNavigateSearchFeedback: E } = (0, x.z)(),
                        I = (0, f.N)(),
                        O = ((e) => {
                            let { artist: t, callback: i } = e,
                                { currentTrackInfo: r, fullscreenPlayer: s, fullscreenVideoPlayer: a } = (0, l.g)(),
                                { modal: n } = r;
                            return (0, A.l)({
                                entity: t,
                                callback: i,
                                onBeforeHandle: (e) => {
                                    (null == e || e.stopPropagation(), n.isOpened && (r.reset(), n.close()), s.modal.isOpened && s.modal.close());
                                },
                                onAfterHandled: () => {
                                    a.modal.isOpened && (a.modal.close(), a.reset());
                                },
                                preventDefaultWhenSafe: !0,
                            });
                        })({
                            artist: t,
                            callback: (0, h.c)((e) => {
                                (y && T.isOpened && T.close(), C(e));
                            }),
                        }),
                        k = (0, h.c)((e) => {
                            (I({ to: p.AppScreen.ArtistScreen }), null == E || E(), O(e));
                        });
                    return i && !t.various
                        ? (0, r.jsx)(b.N, {
                              'aria-label': N({ id: 'entity-names.artist-name' }, { artistName: t.name }),
                              className: s,
                              href: t.url,
                              onClick: k,
                              title: d ? void 0 : c || t.name,
                              'data-test-id': _.OA.artists.SEPARATED_ARTIST_TITLE,
                              children: (0, r.jsx)(o.m_, {
                                  enabled: !c && d,
                                  offsetOptions: 4,
                                  placement: 'top',
                                  text: c || t.name,
                                  hoverSettings: u,
                                  children: (0, r.jsx)(v.HL, { variant: 'span', type: 'entity', size: n, weight: 'medium', className: a, children: t.name }),
                              }),
                          })
                        : (0, r.jsx)(o.m_, {
                              enabled: !c && d,
                              offsetOptions: 4,
                              placement: 'top',
                              text: c || t.name,
                              hoverSettings: u,
                              children: (0, r.jsx)(v.HL, {
                                  variant: 'span',
                                  type: 'entity',
                                  size: n,
                                  weight: 'medium',
                                  className: a,
                                  title: d ? void 0 : c || t.name,
                                  'data-test-id': _.OA.artists.SEPARATED_ARTIST_TITLE,
                                  children: t.name,
                              }),
                          });
                }),
                T = (e) => {
                    let {
                            artist: t,
                            withLink: i = !0,
                            linkClassName: s,
                            captionClassName: a,
                            captionSize: o,
                            allArtistsTitle: l,
                            withCustomTooltip: c,
                            hoverSettings: d,
                            shouldUseSeparator: u = !0,
                        } = e,
                        m = (0, n.useMemo)(() => {
                            var e;
                            return null == (e = t.decomposed)
                                ? void 0
                                : e.reduce(
                                      (e, t) =>
                                          e.concat([
                                              u ? t.separator : '',
                                              (0, r.jsx)(
                                                  N,
                                                  {
                                                      artist: t,
                                                      withLink: i,
                                                      linkClassName: s,
                                                      captionClassName: a,
                                                      captionSize: o,
                                                      allArtistsTitle: l,
                                                      withCustomTooltip: c,
                                                      hoverSettings: d,
                                                  },
                                                  t.id,
                                              ),
                                          ]),
                                      [],
                                  );
                        }, [t.decomposed, u, i, s, a, o, l, c, d]);
                    return (0, r.jsxs)(r.Fragment, {
                        children: [
                            (0, r.jsx)(N, {
                                artist: t,
                                withLink: i,
                                linkClassName: s,
                                captionClassName: a,
                                captionSize: o,
                                allArtistsTitle: l,
                                withCustomTooltip: c,
                                hoverSettings: d,
                            }),
                            m,
                        ],
                    });
                };
            var y = i(39407),
                C = i(63887);
            let E = (e) => {
                let { spoilerArtistsCount: t, spoilerClassName: i, handleOnSpoilerClick: a } = e;
                return (0, r.jsxs)(r.Fragment, {
                    children: [
                        ' ',
                        (0, r.jsx)(C.N, {
                            role: 'button',
                            href: '',
                            className: (0, s.$)(u().spoiler, i),
                            onClick: a,
                            rel: 'nofollow',
                            'data-test-id': _.OA.artists.SEPARATED_ARTISTS_SPOILER,
                            children: (0, r.jsx)(y.A, { id: 'entity-names.number-of-more-artists', values: { counter: t } }),
                        }),
                    ],
                });
            };
            var I = i(8055),
                O = i(6752),
                k = i(78035),
                S = i(78176),
                j = i(83598),
                L = i.n(j);
            let P = (0, a.PA)((e) => {
                    let { label: t, artists: i, forwardRef: s } = e;
                    return (0, r.jsxs)(o.m_, {
                        enableAriaDescribedby: !1,
                        isFocusEnabled: !1,
                        placement: 'top',
                        hoverSettings: { delay: 200, handleClose: (0, k.safePolygon)({ blockPointerEvents: !0 }) },
                        children: [
                            (0, r.jsx)('div', { ref: s, children: t }),
                            (0, r.jsx)(o.ZI, { className: L().tooltipContent, children: i.map((e) => (0, r.jsx)(S.V, { artist: e, className: L().artistItem }, e.id)) }),
                        ],
                    });
                }),
                w = (0, n.forwardRef)((e, t) => (0, r.jsx)(P, { forwardRef: t, ...e }));
            var R = i(19740),
                D = i(52598),
                B = i.n(D);
            let F = (0, a.PA)((e) => {
                    let { label: t, artists: i } = e,
                        { formatMessage: a } = (0, m.A)();
                    return (0, r.jsx)(R.W1, {
                        isMobile: !0,
                        className: (0, s.$)(B().root, B().important),
                        label: t,
                        ariaLabel: a({ id: 'interface-actions.context-menu-artists' }),
                        children: i.map((e) => (0, r.jsx)(S.V, { artist: e }, e.id)),
                    });
                }),
                M = (0, a.PA)((e) => {
                    let { artists: t = [], label: i, labelRef: s } = e,
                        [a, o] = (0, n.useState)(!1),
                        {
                            settings: { isMobile: c },
                        } = (0, l.g)(),
                        d = (0, h.c)(() => {
                            let e = s.current;
                            e && o(e.scrollHeight > e.clientHeight || e.scrollWidth > e.clientWidth);
                        }),
                        u = (0, O.L)(() =>
                            (0, I.A)(() => {
                                d();
                            }, 100),
                        );
                    if (
                        ((0, n.useEffect)(
                            () => (
                                window.addEventListener('resize', u),
                                d(),
                                () => {
                                    window.removeEventListener('resize', u);
                                }
                            ),
                            [u, d],
                        ),
                        (0, n.useEffect)(() => {
                            d();
                        }, [t, d]),
                        0 !== t.length)
                    )
                        return (a || c) && (!c || 1 !== t.length) ? (c ? (0, r.jsx)(F, { artists: t, label: i }) : (0, r.jsx)(w, { artists: t, label: i })) : i;
                }),
                z = (0, a.PA)((e) => {
                    let {
                            className: t,
                            artists: i = [],
                            separator: a = ', ',
                            lineClamp: d,
                            visibleArtistsCount: m,
                            withLink: p = !0,
                            spoilerClassName: _,
                            linkClassName: h,
                            captionClassName: v,
                            captionSize: f,
                            variant: g = 'breakAll',
                            withAllArtistsTitle: x = !0,
                            withComposer: b = !0,
                            spoilerComponent: A,
                            withCustomTooltip: N = !0,
                            artistIdWithoutLink: y,
                            withContextMenu: C,
                        } = e,
                        I = (0, n.useRef)(null),
                        [O, k] = (0, n.useState)(!1),
                        S = x
                            ? i
                                  .reduce(function () {
                                      let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
                                          t = arguments.length > 1 ? arguments[1] : void 0;
                                      if (t.decomposed) {
                                          let i = t.decomposed.reduce((e, t) => e.concat([t.name]), []);
                                          return e.length ? e.concat([t.name, ...i]) : [t.name, ...i];
                                      }
                                      return e.length ? (e.push(t.name), e) : [t.name];
                                  }, [])
                                  .join(a)
                            : '',
                        {
                            settings: { isMobile: j },
                        } = (0, l.g)(),
                        L = 1 === i.length,
                        P = (0, n.useCallback)((e) => {
                            (k(!0), e.preventDefault());
                        }, []),
                        w = (0, n.useMemo)(() => {
                            let e = i;
                            return (
                                m && !O && (e = i.slice(0, m)),
                                e.reduce((e, t) => {
                                    if (!b && t.isComposer) return e.length ? e : [];
                                    let i = (0, r.jsx)(
                                        T,
                                        {
                                            artist: t,
                                            linkClassName: h,
                                            captionClassName: v,
                                            withLink: p && t.id !== y && (((!j || L) && C) || !C),
                                            captionSize: f,
                                            allArtistsTitle: S,
                                            withCustomTooltip: N,
                                            hoverSettings: c.V,
                                            shouldUseSeparator: !!a,
                                        },
                                        t.key,
                                    );
                                    return e.length ? e.concat([a, i]) : [i];
                                }, [])
                            );
                        }, [i, m, O, b, j, L, C, h, v, p, y, f, S, N, a]),
                        R = (0, n.useMemo)(() => {
                            if (!O && m && m < i.length) {
                                let e = i.length - m;
                                return (0, n.isValidElement)(A) ? A : (0, r.jsx)(E, { spoilerClassName: _, spoilerArtistsCount: e, handleOnSpoilerClick: P });
                            }
                        }, [i.length, P, O, _, A, m]),
                        D = (0, n.useMemo)(() => {
                            if (d) return { WebkitLineClamp: d };
                        }, [d]),
                        B = (0, r.jsx)(o.m_, {
                            referenceRef: I,
                            enabled: !!(x && S) && N && !C && !j,
                            offsetOptions: 4,
                            placement: 'top',
                            text: S,
                            hoverSettings: c.V,
                            children: (0, r.jsxs)('div', {
                                style: D,
                                className: (0, s.$)(u().root, u()['root_variant_'.concat(g)], { [u().root_clamp]: d && d > 0 }, { [u().ellipsis]: !d }, t),
                                title: x && S && !N && !C ? S : void 0,
                                children: [w, R],
                            }),
                        });
                    return C ? (0, r.jsx)(M, { labelRef: I, artists: i, label: B }) : B;
                });
        },
        42464: (e, t, i) => {
            'use strict';
            i.d(t, { N: () => r });
            let r = (e) => 'object' == typeof e && null !== e && 'request' in e && null !== e.request;
        },
        45257: (e, t, i) => {
            'use strict';
            i.d(t, { $: () => v });
            var r = i(32290),
                s = i(63618),
                a = i(8055),
                n = i(55178);
            let o = (e) => {
                    let { style: t, forwardRef: i, context: s, ...a } = e,
                        n = (null == s ? void 0 : s.listAriaLabel) || void 0,
                        o = (null == s ? void 0 : s.listRole) || 'region';
                    return (0, r.jsx)('div', { 'aria-labelledby': 'virtual-grid-header', role: o, 'aria-label': n, style: { ...t }, ref: i, ...a });
                },
                l = (0, n.forwardRef)((e, t) => (0, r.jsx)(o, { forwardRef: t, ...e }));
            var c = i(39684),
                d = i.n(c);
            let u = (e) => {
                    let { style: t, forwardRef: i, withFooter: a, withHeader: n, withForceScroll: o, ...l } = e;
                    return (0, r.jsx)('div', {
                        className: (0, s.$)(d().scroller, { [d().scroller_withFooter]: a, [d().scroller_withHeader]: n, [d().scroller_withForceScroll]: o }),
                        style: { ...t },
                        ref: i,
                        ...l,
                        tabIndex: -1,
                    });
                },
                m = (0, n.forwardRef)((e, t) => (0, r.jsx)(u, { forwardRef: t, ...e }));
            var p = i(62060),
                _ = i(31417);
            let h = (e) => {
                    let {
                            pageSize: t,
                            onPageHandler: i,
                            onRangeHandler: s,
                            debounceDurationInMs: a = 100,
                            totalCount: o = 0,
                            shouldTriggerRangeChangedOn: l = [],
                            endReached: c,
                            virtuosoRef: d,
                            ...u
                        } = e,
                        [m, h] = (0, n.useState)(null),
                        v = (0, n.useMemo)(
                            () =>
                                (0, p.A)((e) => {
                                    if ((null == s || s(e), l.length > 0 && h(e), t && i)) {
                                        let r = Math.floor(e.endIndex / t) + 1,
                                            s = Math.floor(e.startIndex / t);
                                        for (let e = s; e < r; e++) i(e);
                                    }
                                }, a),
                            [a, s, t, i, l],
                        );
                    (0, n.useEffect)(() => {
                        l.length > 0 && m && v(m);
                    }, l);
                    let f = (0, n.useMemo)(() => {
                        if (c)
                            return (0, p.A)((e) => {
                                c(e);
                            }, a);
                    }, [c, a]);
                    return (0, r.jsx)(_.sN, { ref: d, rangeChanged: v, totalCount: o, endReached: f, ...u });
                },
                v = (e) => {
                    let {
                            className: t,
                            customComponents: i,
                            onGetDataByPage: o,
                            onGetDataByRange: c,
                            itemClassName: u,
                            itemContentCallback: p,
                            listClassName: _,
                            overscan: v = 700,
                            pageSize: f = 20,
                            totalCount: g,
                            totalRequests: x,
                            debounceDurationInMs: b,
                            initialItemCount: A,
                            minInitialItemCount: N = 20,
                            handleRef: T,
                            alwaysShowScrollbar: y = !1,
                            testId: C,
                            isMobileLayout: E = !1,
                            shouldTriggerRangeChangedOn: I,
                            ...O
                        } = e,
                        [k, S] = (0, n.useState)(!1),
                        j = (0, n.useMemo)(
                            () =>
                                (0, a.A)((e) => {
                                    S(e);
                                }, 100),
                            [],
                        ),
                        L = (0, n.useMemo)(() => {
                            var e, t;
                            return E
                                ? {
                                      Scroller: m,
                                      List: null != (e = null == i ? void 0 : i.List) ? e : l,
                                      Item: null == i ? void 0 : i.Item,
                                      ScrollSeekPlaceholder: null == i ? void 0 : i.ScrollSeekPlaceholder,
                                  }
                                : {
                                      Scroller: m,
                                      List: null != (t = null == i ? void 0 : i.List) ? t : l,
                                      Item: null == i ? void 0 : i.Item,
                                      Header: null == i ? void 0 : i.Header,
                                      Footer: null == i ? void 0 : i.Footer,
                                      ScrollSeekPlaceholder: null == i ? void 0 : i.ScrollSeekPlaceholder,
                                  };
                        }, [i, x, E]),
                        P = A ? Math.min(A, N) : void 0;
                    return (0, r.jsxs)('div', {
                        className: (0, s.$)(d().root, { [d().root_scrolling]: k || y, [d().root_notScrolling]: !k && !y }, t),
                        'data-test-id': C,
                        children: [
                            E && (null == i ? void 0 : i.Header) && i.Header(),
                            (0, r.jsx)(h, {
                                overscan: v,
                                components: L,
                                listClassName: _,
                                itemClassName: u,
                                isScrolling: j,
                                itemContent: p,
                                scrollerRef: T,
                                totalCount: g,
                                pageSize: f,
                                onPageHandler: o,
                                onRangeHandler: c,
                                debounceDurationInMs: b,
                                initialItemCount: P,
                                shouldTriggerRangeChangedOn: I,
                                ...O,
                            }),
                            E && (null == i ? void 0 : i.Footer) && i.Footer(),
                        ],
                    });
                };
        },
        48736: (e) => {
            e.exports = { root: 'TooltipWithTitle_root__7jLY3', text: 'TooltipWithTitle_text__ElBtq', description: 'TooltipWithTitle_description__HsGcR' };
        },
        50891: (e, t, i) => {
            'use strict';
            i.d(t, { m: () => a });
            var r = i(91945),
                s = i(25090);
            class a extends s.t {
                constructor(e = 'Http Client error', { code: t = 'E_HTTP_CLIENT', ...i } = {}) {
                    (super(e, { code: t, ...i }), (0, r._)(this, 'name', 'HttpException'), Object.setPrototypeOf(this, a.prototype));
                }
            }
        },
        50961: (e, t, i) => {
            'use strict';
            var r;
            (i.d(t, { X: () => r }),
                (function (e) {
                    ((e[(e.NOT_MODIFIED = 304)] = 'NOT_MODIFIED'),
                        (e[(e.NOT_FOUND = 404)] = 'NOT_FOUND'),
                        (e[(e.BAD_REQUEST = 400)] = 'BAD_REQUEST'),
                        (e[(e.REQUEST_TIMEOUT = 408)] = 'REQUEST_TIMEOUT'),
                        (e[(e.PRECONDITION_FAILED = 412)] = 'PRECONDITION_FAILED'),
                        (e[(e.TEAPOT = 418)] = 'TEAPOT'));
                })(r || (r = {})));
        },
        52199: (e, t, i) => {
            'use strict';
            i.d(t, { r: () => r });
            let r = (e, t, i) => e.replace(i, t);
        },
        52598: (e) => {
            e.exports = { root: 'SeparatedArtistsWithContextMenuMobile_root__4BiJL', important: 'SeparatedArtistsWithContextMenuMobile_important__fSF1h' };
        },
        53514: (e, t, i) => {
            'use strict';
            i.d(t, { V: () => r });
            let r = { delay: { open: 1e3, close: 0 } };
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
        56008: (e, t, i) => {
            'use strict';
            i.d(t, { H: () => r });
            let r = (0, i(55178).createContext)({ pageAlbumId: void 0 });
        },
        60244: (e, t, i) => {
            'use strict';
            i.d(t, { k: () => d });
            var r = i(32290),
                s = i(21732),
                a = i(70280),
                n = i(71926),
                o = i(48736),
                l = i.n(o);
            let c = { padding: 8 },
                d = (e) => {
                    let { description: t, enabled: i, title: o, placement: d = 'top', children: u } = e;
                    return (0, r.jsxs)(a.m_, {
                        enabled: i,
                        offsetOptions: 4,
                        shiftOptions: c,
                        flipOptions: c,
                        placement: d,
                        children: [
                            u,
                            (0, r.jsx)(a.ZI, {
                                className: l().root,
                                'data-test-id': s.S7.TOOLTIP_WITH_TITLE,
                                children: (0, r.jsxs)('div', {
                                    className: l().text,
                                    children: [
                                        o && (0, r.jsx)(n.HL, { variant: 'span', type: 'text', size: 's', weight: 'bold', children: o }),
                                        (0, r.jsx)(n.HL, { variant: 'span', type: 'text', size: 's', weight: 'normal', className: l().description, children: t }),
                                    ],
                                }),
                            }),
                        ],
                    });
                };
        },
        60586: (e) => {
            e.exports = {
                root: 'CollectionKidsTracksPage_root__8nP0n',
                scrollContainer: 'CollectionKidsTracksPage_scrollContainer__1d9Pm',
                important: 'CollectionKidsTracksPage_important__oX_Ny',
                footer: 'CollectionKidsTracksPage_footer__dujIV',
                content: 'CollectionKidsTracksPage_content__Vf43s',
            };
        },
        61500: (e, t, i) => {
            'use strict';
            i.d(t, { i: () => A });
            var r = i(32290),
                s = i(96103),
                a = i(39407),
                n = i(63423),
                o = i(82586),
                l = i(46049),
                c = i(71926),
                d = i(7999),
                u = i(83808),
                m = i(83920),
                p = i(20472),
                _ = i(32641),
                h = i(57594),
                v = i(97841),
                f = i(32468),
                g = i(74694),
                x = i(33960),
                b = i.n(x);
            let A = (0, s.PA)((e) => {
                let { title: t } = e,
                    {
                        settings: { isMobile: i },
                    } = (0, h.g)(),
                    { contentScrollRef: s, setContentScrollRef: x } = (0, m.g)(),
                    A = (0, u.W)(),
                    N = (0, _.Z)(p.Z.collectionKids.href);
                return (0, r.jsxs)(d.h, {
                    scrollElement: s,
                    outerTitle: t,
                    children: [
                        (0, r.jsx)(g.Y, {
                            variant: g.V.TEXT,
                            withForwardControl: !1,
                            withBackwardControl: A.canBack,
                            children: (0, r.jsx)(c.DZ, { variant: 'h2', weight: 'bold', size: i ? 'm' : 'xl', lineClamp: 2, children: t }),
                        }),
                        (0, r.jsxs)(l.N, {
                            ref: x,
                            containerClassName: b().scrollableContainer,
                            className: b().root,
                            children: [
                                (0, r.jsxs)('div', {
                                    className: b().content,
                                    children: [
                                        (0, r.jsx)('div', { className: b().icon, children: (0, r.jsx)(o.I, { variant: 'like', size: 'l' }) }),
                                        (0, r.jsx)(c.DZ, {
                                            className: b().title,
                                            variant: 'h3',
                                            size: 'xs',
                                            children: (0, r.jsx)(a.A, { id: 'error-messages.empty-collection-kids-sub-page-title' }),
                                        }),
                                        (0, r.jsx)(n.$, {
                                            onClick: N,
                                            className: b().button,
                                            role: 'link',
                                            color: 'secondary',
                                            size: 's',
                                            radius: 'xxxl',
                                            children: (0, r.jsx)(c.HL, {
                                                type: 'controls',
                                                variant: 'span',
                                                size: 'm',
                                                children: (0, r.jsx)(a.A, { id: 'error-messages.empty-collection-kids-sub-page-link' }),
                                            }),
                                        }),
                                    ],
                                }),
                                (0, r.jsx)(f.A, { children: (0, r.jsx)(v.w, { className: b().footer }) }),
                            ],
                        }),
                    ],
                });
            });
        },
        63038: (e, t, i) => {
            'use strict';
            i.d(t, { B: () => r });
            let r = '{tld}';
        },
        63363: (e, t, i) => {
            'use strict';
            i.d(t, { K: () => g });
            var r = i(32290),
                s = i(60900),
                a = i(91027),
                n = i(67732),
                o = i(45477),
                l = i(75582),
                c = i(57594),
                d = i(90357),
                u = i(92708),
                m = i(55178),
                p = i(63380),
                _ = i(96103),
                h = i(97755),
                v = i(79238);
            let f = (0, _.PA)((e) => {
                    let { album: t, closeToast: i, withLink: s } = e,
                        a = (0, v.b)(t);
                    return (0, r.jsx)(h.O, {
                        closeToast: i,
                        entityVariant: a,
                        coverUri: t.coverUri,
                        entityUrl: t.url,
                        collectionUrl: '/collection',
                        entityTitle: t.title,
                        isLiked: t.isLiked,
                        withLink: s,
                    });
                }),
                g = (e) => {
                    let {
                            user: t,
                            paywall: i,
                            albumCPA: { isPlusCPAEnabled: _ },
                        } = (0, c.g)(),
                        { formatMessage: h } = (0, s.A)(),
                        { notify: v } = (0, l.l)(),
                        g = (() => {
                            let { notify: e } = (0, l.l)(),
                                [t, i] = (0, m.useState)(!1),
                                { formatMessage: n } = (0, s.A)();
                            return (0, a.c)(async (s) => {
                                let { album: a, withLink: l = !0, withNotification: c = !0 } = s;
                                if (t) return;
                                let m = { ...(0, u.HO)(a), url: a.url, isLiked: !a.isLiked };
                                i(!0);
                                let _ = await a.toggleLike();
                                (i(!1),
                                    c &&
                                        (_ === p.f.OK
                                            ? e((0, r.jsx)(f, { withLink: l, album: m }), { containerId: o.u.INFO })
                                            : e((0, r.jsx)(d.h, { error: n({ id: 'error-messages.error-during-action' }) }), { containerId: o.u.ERROR })));
                            });
                        })(),
                        { pageAlbumId: x } = (0, n.T)();
                    return (0, a.c)(async () => {
                        if (e)
                            return _({ pageAlbumId: x, albumId: e.id, isNonMusic: e.isNonMusic })
                                ? void i.openModal()
                                : t.isAuthorized
                                  ? g({ album: e })
                                  : void v((0, r.jsx)(d.h, { error: h({ id: 'authorization-messages.need-to-authorizate' }) }), { containerId: o.u.ERROR });
                    });
                };
        },
        64170: (e, t, i) => {
            'use strict';
            i.d(t, { SomethingWentWrong: () => T });
            var r = i(32290),
                s = i(63618),
                a = i(96103),
                n = i(55178),
                o = i(60900),
                l = i(39407),
                c = i(63423),
                d = i(82586),
                u = i(71926),
                m = i(17811),
                p = i(99923),
                _ = i(90153),
                h = i(74416),
                v = i(62376),
                f = i(37240),
                g = i(83920),
                x = i(20472),
                b = i(12894),
                A = i(30310),
                N = i.n(A);
            let T = (0, a.PA)((e) => {
                let { className: t, withBackwardControl: i = !0 } = e,
                    { formatMessage: a } = (0, o.A)(),
                    A = a({ id: 'error-messages.something-went-wrong' });
                !(function (e) {
                    let t = (0, h.st)(),
                        { hash: i } = (0, h.gf)(),
                        { pageId: r } = (0, f.$)(),
                        s = (0, v.U)();
                    (0, n.useEffect)(() => {
                        if (!t || !i || !r) return;
                        let a = (0, m.F)({
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
                            logger: s,
                            context: 'useSendEventOnSomethingWentWrongShowed',
                        });
                        a && (0, _.z5)(t.evgenInstance, a);
                    }, [t, e, i, r, s]);
                })(A);
                let { sendRefreshEvent: T } = (function () {
                        let e = (0, h.st)(),
                            { hash: t } = (0, h.gf)(),
                            { pageId: i } = (0, f.$)(),
                            r = (0, v.U)();
                        return {
                            sendRefreshEvent: (0, n.useCallback)(() => {
                                if (!e || !t || !i) return;
                                let s = (0, m.F)({
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
                                s && (0, _.bv)(e.evgenInstance, s);
                            }, [e, t, i, r]),
                        };
                    })(),
                    y = (0, n.useCallback)(() => {
                        (T(), (window.location.href = x.Z.main.href));
                    }, [T]),
                    { contentRef: C } = (0, g.g)();
                return (0, r.jsxs)('div', {
                    className: (0, s.$)(N().root, t),
                    children: [
                        i &&
                            (0, r.jsx)(b.L, { withBackwardFallback: '/', className: (0, s.$)(N().navigation, { [N().navigation_desktop]: !C }), withForwardControl: !1 }),
                        (0, r.jsxs)('div', {
                            className: (0, s.$)(N().content, { [N().content_shrink]: !i }),
                            children: [
                                (0, r.jsx)(d.I, { className: N().icon, variant: 'attention', size: 'xxl' }),
                                (0, r.jsx)(u.DZ, { className: (0, s.$)(N().title, N().important), variant: 'h3', size: 'xs', children: A }),
                                (0, r.jsxs)(u.HL, {
                                    className: (0, s.$)(N().text, N().important),
                                    variant: 'span',
                                    type: 'text',
                                    size: 'l',
                                    weight: 'normal',
                                    children: [!1, (0, r.jsx)(l.A, { id: 'page-error.try-to-restart-app' })],
                                }),
                                (0, r.jsx)(c.$, {
                                    onClick: y,
                                    className: N().button,
                                    role: 'link',
                                    color: 'secondary',
                                    size: 'l',
                                    radius: 'xxxl',
                                    children: (0, r.jsxs)(u.HL, {
                                        type: 'controls',
                                        variant: 'span',
                                        size: 'm',
                                        children: [!1, (0, r.jsx)(l.A, { id: 'page-error.restart-app-button' })],
                                    }),
                                }),
                            ],
                        }),
                    ],
                });
            });
        },
        67732: (e, t, i) => {
            'use strict';
            i.d(t, { T: () => a });
            var r = i(55178),
                s = i(56008);
            function a() {
                return (0, r.useContext)(s.H);
            }
        },
        68912: (e, t, i) => {
            'use strict';
            i.d(t, { j: () => C });
            var r = i(32290),
                s = i(63618),
                a = i(96103),
                n = i(21916),
                o = i(55178),
                l = i(60900),
                c = i(39407),
                d = i(21732),
                u = i(70280),
                m = i(71926),
                p = i(41677),
                _ = i(28999),
                h = i(57594),
                v = i(53514),
                f = i(85017),
                g = i(13798),
                x = i(61258),
                b = i(25649),
                A = i(24760),
                N = i(84141),
                T = i(5856),
                y = i.n(T);
            let C = (0, a.PA)((e) => {
                let {
                        className: t,
                        titleContainerClassName: i,
                        track: a,
                        albumArtists: T,
                        withExplicitMark: C = !0,
                        withSecondaryColor: E,
                        captionSize: I = 'm',
                        explicitSize: O = 'xxxs',
                        withAllArtistsTitle: k,
                        textClassName: S,
                        artistsClassName: j,
                        ignoreDislikedStyles: L,
                        withCustomTooltip: P = !0,
                        hasLineClamp: w = !0,
                        withSavingQueryParams: R,
                        beforeTitle: D,
                        withArtistLink: B = !0,
                        withTrackLink: F = !0,
                        afterTitle: M,
                        withContextMenuArtists: z,
                    } = e,
                    { formatMessage: U } = (0, l.A)(),
                    { sendNavigateSearchFeedback: W } = (0, _.z)(),
                    {
                        settings: { isMobile: V },
                    } = (0, h.g)(),
                    K = (0, A.$)({ withCustomTooltip: P }),
                    H = (0, n.useSearchParams)(),
                    $ = a.getUrl(R ? Object.fromEntries(H) : void 0),
                    G = (0, o.useMemo)(() => {
                        var e;
                        let t = U({ id: 'entity-names.track-name' }, { trackName: a.title });
                        return ''.concat(t, ' ').concat(null != (e = a.version) ? e : '');
                    }, [U, a.title, a.version]),
                    X = (0, N.O)({ track: a, onNavigate: W, withSavingQueryParams: R, entityType: f.n.TRACK }),
                    Y = (0, o.useCallback)(
                        (e) => {
                            let t = ''.concat(a.title, ' ').concat(!a.isRemoved && a.version ? a.version : '');
                            return (0, r.jsx)(u.m_, {
                                enabled: K && !V,
                                offsetOptions: 4,
                                placement: 'top',
                                text: t,
                                hoverSettings: v.V,
                                children: (0, r.jsx)(m.HL, {
                                    className: (0, s.$)(y().text, y().title),
                                    type: 'entity',
                                    size: I,
                                    weight: 'medium',
                                    variant: 'span',
                                    ...e,
                                    children: a.title,
                                }),
                            });
                        },
                        [V, K, I, a.isRemoved, a.title, a.version],
                    ),
                    Q = (0, o.useMemo)(() => {
                        let e = ''.concat(a.title, ' ').concat(!a.isRemoved && a.version ? a.version : '');
                        return a.isRemoved
                            ? (0, r.jsx)(u.m_, {
                                  enabled: K && !V,
                                  offsetOptions: 4,
                                  placement: 'top',
                                  text: U({ id: 'track-title.error-not-found' }),
                                  hoverSettings: v.V,
                                  children: (0, r.jsx)(m.HL, {
                                      className: (0, s.$)(y().text, y().title),
                                      type: 'entity',
                                      size: I,
                                      weight: 'medium',
                                      variant: 'span',
                                      title: K ? void 0 : U({ id: 'track-title.error-not-found' }),
                                      children: (0, r.jsx)(c.A, { id: 'track-title.error-not-found' }),
                                  }),
                              })
                            : a.hasTrackLink && F
                              ? (0, r.jsx)(x.N, {
                                    onClick: X,
                                    className: y().albumLink,
                                    href: $,
                                    'aria-label': G,
                                    title: K ? void 0 : e,
                                    'data-test-id': d.Kq.track.TRACK_TITLE,
                                    children: Y(),
                                })
                              : Y({ 'data-test-id': d.Kq.track.TRACK_TITLE });
                    }, [V, a.title, a.isRemoved, a.version, a.hasTrackLink, Y, K, U, I, G, X, $, F]),
                    Z = (0, b.s)(a.artists, T),
                    q = (0, o.useMemo)(() => +!!w, [w]);
                return (0, r.jsx)('div', {
                    className: (0, s.$)(y().root, { [y().root_disabled]: !a.isAvailable, [y().root_disliked]: a.isDisliked && !L, [y().root_withSecondaryColor]: E }, t),
                    children: (0, r.jsxs)('div', {
                        className: y().metaContainer,
                        children: [
                            (0, r.jsxs)('div', {
                                className: (0, s.$)(y().titleContainer, { [y().titleContainer_withVersion]: a.version }, i),
                                children: [
                                    (0, r.jsxs)(m.HL, {
                                        className: (0, s.$)(y().text, S),
                                        type: 'entity',
                                        size: I,
                                        weight: 'medium',
                                        variant: 'div',
                                        lineClamp: 1,
                                        children: [
                                            D,
                                            Q,
                                            !a.isRemoved &&
                                                a.version &&
                                                (0, r.jsxs)(m.HL, {
                                                    className: (0, s.$)(y().text, y().version),
                                                    type: 'entity',
                                                    size: I,
                                                    weight: 'medium',
                                                    variant: 'span',
                                                    title: K ? void 0 : a.version,
                                                    'data-test-id': d.Kq.track.TRACK_VERSION,
                                                    children: ['\xa0', a.version],
                                                }),
                                        ],
                                    }),
                                    a.explicitDisclaimer &&
                                        C &&
                                        (0, r.jsx)(g.N, {
                                            containerClassName: y().explicitMarkContainer,
                                            getDescriptionTexts: a.getDescriptionTexts,
                                            size: O,
                                            variant: a.explicitDisclaimer,
                                            className: y().explicitMark,
                                            trackId: a.id,
                                        }),
                                    M,
                                ],
                            }),
                            Z.length > 0 &&
                                (0, r.jsx)(p.i, {
                                    className: (0, s.$)(y().text, { [y().artists]: w }, j, S),
                                    withAllArtistsTitle: k,
                                    linkClassName: (0, s.$)(y().text, y().link),
                                    captionClassName: (0, s.$)(y().text, y().artistCaption),
                                    artists: Z,
                                    withLink: a.isNonUserGenerated && B,
                                    lineClamp: q,
                                    captionSize: I,
                                    withContextMenu: z,
                                }),
                        ],
                    }),
                });
            });
        },
        69951: (e, t, i) => {
            'use strict';
            i.d(t, { K: () => f });
            var r = i(32290),
                s = i(63618),
                a = i(96103),
                n = i(55178),
                o = i(21732),
                l = i(90169),
                c = i(57594),
                d = i(40229),
                u = i(43565),
                m = i(8677),
                p = i(68912),
                _ = i(92102),
                h = i(85673),
                v = i.n(h);
            let f = (0, a.PA)((e) => {
                var t;
                let {
                        track: i,
                        playContextParams: a,
                        className: h,
                        withDNDBlock: f,
                        isDragging: g,
                        draggingClassName: x,
                        ignoreDislikedStyles: b,
                        withSecondaryColor: A,
                        handleRemove: N,
                        withDislike: T,
                        withTrailer: y = !0,
                        beforeTitle: C,
                        removeButtonAriaLabel: E,
                        hideControls: I,
                    } = e,
                    O = (0, l.D)({ playContextParams: a, entityId: i.entityId }),
                    {
                        settings: { isMobile: k },
                    } = (0, c.g)(),
                    S = (0, n.useCallback)(
                        (e) =>
                            (0, r.jsx)(d.q, {
                                isAvailable: i.isAvailable,
                                isDisliked: i.isDisliked,
                                coverUri: i.coverUri,
                                title: i.title,
                                className: v().playButtonCell,
                                ignoreDislikedStyles: b,
                                radius: 'xs',
                                ...e,
                            }),
                        [b, i.coverUri, i.isAvailable, i.isDisliked, i.title],
                    );
                return (0, r.jsx)(_.C, {
                    className: (0, s.$)(h, { [v().trackWithDots]: f, [v().important]: f }),
                    track: i,
                    beforeBlock: f ? (0, r.jsx)(u.O, { className: (0, s.$)(v().dots, x), isDragging: g }) : void 0,
                    meta: (0, r.jsx)(p.j, { withArtistLink: !k, beforeTitle: C, track: i, ignoreDislikedStyles: b, withSecondaryColor: A }),
                    playButtonCellRender: S,
                    controls: (0, r.jsx)(m.Q, {
                        track: i,
                        className: v().controlsBarCell,
                        ignoreDislikedStyles: b,
                        utmLink: null == (t = a.contextData) ? void 0 : t.utmLink,
                        withSecondaryColor: A,
                        handleRemove: N,
                        withDislike: T,
                        withTrailer: y,
                        removeButtonAriaLabel: E,
                        hideControls: I,
                    }),
                    ...O,
                    'data-test-id': o.Kq.track.TRACK_PLAYLIST,
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
            i.d(t, { L: () => _ });
            var r = i(32290),
                s = i(63618),
                a = i(55178),
                n = i(60900),
                o = i(39407),
                l = i(63423),
                c = i(82586),
                d = i(71926),
                u = i(58534),
                m = i(70718),
                p = i.n(m);
            let _ = (e) => {
                let { reloadBlocks: t, closeToast: i } = e,
                    m = (0, a.useRef)(null),
                    { formatMessage: _ } = (0, n.A)();
                (0, a.useEffect)(() => {
                    var e;
                    null == (e = m.current) || e.focus();
                }, []);
                let h = (0, a.useMemo)(
                    () =>
                        (0, r.jsxs)('div', {
                            className: p().message,
                            children: [
                                (0, r.jsx)(d.HL, {
                                    className: p().text,
                                    variant: 'div',
                                    type: 'controls',
                                    size: 'm',
                                    children: (0, r.jsx)(o.A, { id: 'error-messages.error-load-part-page' }),
                                }),
                                (0, r.jsx)(l.$, {
                                    ref: m,
                                    className: p().button,
                                    onClick: t,
                                    variant: 'text',
                                    'aria-label': _({ id: 'interface-actions.reload-part-page' }),
                                    icon: (0, r.jsx)(c.I, { variant: 'reset', size: 'xxs', className: p().icon }),
                                }),
                            ],
                        }),
                    [_, t],
                );
                return (0, r.jsx)(u.$, { className: (0, s.$)(p().root, p().important), message: h, closeToast: i });
            };
        },
        78176: (e, t, i) => {
            'use strict';
            i.d(t, { V: () => x });
            var r = i(32290),
                s = i(63618),
                a = i(96103),
                n = i(55178),
                o = i(99923),
                l = i(21732),
                c = i(91027),
                d = i(50162),
                u = i(19740),
                m = i(86269),
                p = i(71926),
                _ = i(47745),
                h = i(32641),
                v = i(57594),
                f = i(16510),
                g = i.n(f);
            let x = (0, a.PA)((e) => {
                let { artist: t, className: i } = e,
                    { fullscreenPlayer: a } = (0, v.g)(),
                    f = (0, h.Z)(t.url),
                    b = (0, _.N)(),
                    A = (0, n.useMemo)(() => {
                        var e;
                        return (
                            'decomposed' in t &&
                            (null == (e = t.decomposed) ? void 0 : e.reduce((e, t) => (e.push((0, r.jsx)(x, { artist: t, className: i }, t.id)), e), []))
                        );
                    }, [t, i]),
                    N = (0, c.c)((e) => {
                        (a.modal.isOpened && a.modal.close(), b({ to: o.AppScreen.ArtistScreen }), f(e));
                    });
                return (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsxs)(u.Dr, {
                            className: (0, s.$)(g().root, i),
                            onClick: N,
                            'data-test-id': l.OA.artists.ARTIST_ITEM,
                            children: [
                                (0, r.jsx)(m.t, {
                                    radius: 'round',
                                    className: g().cover,
                                    children: (0, r.jsx)(d._V, { withAvatarReplace: !0, src: t.coverUri, size: 100, fit: 'contain', className: g().image }),
                                }),
                                (0, r.jsx)(p.HL, { variant: 'span', size: 'm', weight: 'medium', lineClamp: 1, children: t.name }),
                            ],
                        }),
                        A,
                    ],
                });
            });
        },
        78648: (e, t, i) => {
            'use strict';
            i.d(t, { C8: () => a, UC: () => n, dM: () => o, uV: () => l });
            var r = i(87953),
                s = i(42464);
            let a = (e) => {
                    if (void 0 === e || '' === e) return 'missing';
                    let t = Number(e);
                    return !Number.isFinite(t) || t < 0 ? 'invalid' : t < 86400 ? 'lt-1d' : t <= 2592e3 ? '1-30d' : 'gt-30d';
                },
                n = (e) => (e.uid ? 'authorized' : 'no-uid'),
                o = (e) => {
                    if (!(e instanceof r.m5) || !(0, s.N)(e.cause)) return 'unexpected';
                    let t = ((e) => {
                        if (!(0, s.N)(e.cause)) return;
                        let t = e.cause.response;
                        if ('object' == typeof t && null !== t) {
                            if ('statusCode' in t && 'number' == typeof t.statusCode) return t.statusCode;
                            if ('status' in t && 'number' == typeof t.status) return t.status;
                        }
                    })(e);
                    return void 0 === t ? 'transport' : 401 === t ? '401' : t >= 400 && t < 500 ? '4xx' : t >= 500 && t < 600 ? '5xx' : 'unexpected';
                },
                l = (e) => {
                    try {
                        var t;
                        null == (t = window.musicDesktop) || t.authorization.reportDiagnostic(e);
                    } catch (e) {}
                };
        },
        79238: (e, t, i) => {
            'use strict';
            i.d(t, { b: () => a });
            var r = i(64605),
                s = i(97647);
            let a = (e) => {
                switch (e.type) {
                    case r._.PODCAST:
                        return s.c.PODCAST;
                    case r._.AUDIOBOOK:
                        return s.c.AUDIOBOOK;
                    case r._.FAIRY_TALE:
                        return s.c.FAIRY_TALE;
                    default:
                        return s.c.ALBUM;
                }
            };
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
                    let { code: i = 'E_INTERNAL', data: s = {}, ...a } = t,
                        n = e || 'Internal error';
                    (super(n, a), (this.message = n), (this.code = i), (this.data = s), (this.stack = Error(n).stack), Object.setPrototypeOf(this, r.prototype));
                }
            }
        },
        80229: (e, t, i) => {
            'use strict';
            i.d(t, { AS: () => m, Yw: () => r, JU: () => s, DQ: () => h, Ve: () => v });
            var r,
                s,
                a = i(98411),
                n = (function () {
                    function e(e) {
                        ((this.observableValue = (0, a.vP)(e)), (this.prevValueByListener = new Map()));
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
                                this.observableValue.subscribe(function (s) {
                                    if (s !== i.prevValueByListener.get(e)) {
                                        if (t.skipFirstChange && r) {
                                            r = !1;
                                            return;
                                        }
                                        (i.prevValueByListener.set(e, s), e(s));
                                    }
                                })
                            );
                        }),
                        e
                    );
                })();
            !(function () {
                function e(e) {
                    ((this.observableValue = (0, a.EW)(e)), (this.prevValueByListener = new Map()));
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
                            this.observableValue.subscribe(function (s) {
                                if (s !== i.prevValueByListener.get(e)) {
                                    if (t.skipFirstChange && r) {
                                        r = !1;
                                        return;
                                    }
                                    (i.prevValueByListener.set(e, s), e(s));
                                }
                            })
                        );
                    }));
            })();
            var o = i(80176);
            class l extends o.t {
                name = 'DisclaimerDictionaryLoadError';
                constructor(e) {
                    (super('Failed to load disclaimer dictionary', { code: 'E_DISCLAIMER_DICTIONARY_LOAD', cause: e, data: { valueType: typeof e } }),
                        Object.setPrototypeOf(this, l.prototype));
                }
            }
            class c extends o.t {
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
                        (this.itemsObservable = new n(null)),
                        (this.isLoadingObservable = new n(!1)),
                        (this.errorObservable = new n(null)),
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
                            let t = e instanceof Error ? e : new l(e);
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
            })(s || (s = {}));
            let p = new Map([
                    [r.EXPLICIT_ICON, s.E],
                    [r.AGE_18_ICON, s.AGE_18],
                    [r.AGE_16_ICON, s.AGE_16],
                    [r.AGE_12_ICON, s.AGE_12],
                    [r.EXCLAMATION_ICON, s.EXCLAMATION],
                ]),
                _ = [r.EXPLICIT_ICON, r.AGE_18_ICON, r.AGE_16_ICON, r.AGE_12_ICON, r.EXCLAMATION_ICON],
                h = (e) => {
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
                v = (e, t) => u(e, t).length > 0;
        },
        80536: (e, t, i) => {
            'use strict';
            i.d(t, { B: () => r });
            let r = (0, i(55178).createContext)({ observeElement: () => {}, unobserveElement: () => {} });
        },
        81354: (e, t, i) => {
            'use strict';
            i.d(t, { XU: () => m, YK: () => u });
            var r,
                s,
                a = i(30782),
                n = i(55178),
                o = i(60900);
            (!(function (e) {
                ((e.formatDate = 'FormattedDate'),
                    (e.formatTime = 'FormattedTime'),
                    (e.formatNumber = 'FormattedNumber'),
                    (e.formatList = 'FormattedList'),
                    (e.formatDisplayName = 'FormattedDisplayName'));
            })(r || (r = {})),
                (function (e) {
                    ((e.formatDate = 'FormattedDateParts'),
                        (e.formatTime = 'FormattedTimeParts'),
                        (e.formatNumber = 'FormattedNumberParts'),
                        (e.formatList = 'FormattedListParts'));
                })(s || (s = {})));
            var l = function (e) {
                var t = (0, o.A)(),
                    i = e.value,
                    r = e.children,
                    s = (0, a.__rest)(e, ['value', 'children']);
                return r(t.formatNumberToParts(i, s));
            };
            function c(e) {
                var t = function (t) {
                    var i = (0, o.A)(),
                        r = t.value,
                        s = t.children,
                        n = (0, a.__rest)(t, ['value', 'children']),
                        l = 'string' == typeof r ? new Date(r || 0) : r;
                    return s('formatDate' === e ? i.formatDateToParts(l, n) : i.formatTimeToParts(l, n));
                };
                return ((t.displayName = s[e]), t);
            }
            function d(e) {
                var t = function (t) {
                    var i = (0, o.A)(),
                        r = t.value,
                        s = t.children,
                        l = (0, a.__rest)(t, ['value', 'children']),
                        c = i[e](r, l);
                    if ('function' == typeof s) return s(c);
                    var d = i.textComponent || n.Fragment;
                    return n.createElement(d, null, c);
                };
                return ((t.displayName = r[e]), t);
            }
            function u(e) {
                return e;
            }
            ((l.displayName = 'FormattedNumberParts'), (l.displayName = 'FormattedNumberParts'));
            var m = d('formatDate');
            (d('formatTime'), d('formatNumber'), d('formatList'), d('formatDisplayName'), c('formatDate'), c('formatTime'));
        },
        83598: (e) => {
            e.exports = {
                tooltipContent: 'SeparatedArtistsWithContextMenuDesktop_tooltipContent___PtDD',
                artistItem: 'SeparatedArtistsWithContextMenuDesktop_artistItem__Ggo_W',
            };
        },
        85673: (e) => {
            e.exports = {
                playButtonCell: 'TrackPlaylist_playButtonCell__Q6YT_',
                controlsBarCell: 'TrackPlaylist_controlsBarCell__6clda',
                dots: 'TrackPlaylist_dots__nLYej',
                trackWithDots: 'TrackPlaylist_trackWithDots__EU6LD',
                important: 'TrackPlaylist_important__n8Tjb',
            };
        },
        87953: (e, t, i) => {
            'use strict';
            i.d(t, { GX: () => a.G, X1: () => r.X, m5: () => s.m });
            var r = i(50961),
                s = i(50891),
                a = i(10733);
            i(33898);
        },
        90006: (e) => {
            e.exports = { explicitMark: 'ExplicitMarkIcon_explicitMark__0BPeQ' };
        },
        91624: (e) => {
            e.exports = { descriptionTextItem: 'DescriptionTextsDisclaimer_descriptionTextItem__XtzRU' };
        },
        92013: (e, t, i) => {
            'use strict';
            var r;
            (i.d(t, { T: () => r }),
                (function (e) {
                    ((e.OK = 'ok'), (e.ERROR = 'error'));
                })(r || (r = {})));
        },
        94218: (e, t, i) => {
            'use strict';
            i.d(t, { H: () => p });
            var r = i(32290),
                s = i(21916),
                a = i(39407),
                n = i(21732),
                o = i(91027),
                l = i(63423),
                c = i(71926),
                d = i(78648),
                u = i(70204),
                m = i(34186);
            let p = (e) => {
                let { size: t = 'm', variant: i = 'default', color: p = 'primary', withRipple: _ = !0, buttonText: h, isBlock: v, key: f, className: g } = e,
                    x = (0, s.useRouter)(),
                    b = (0, m.N)().get(u.QG),
                    A = (0, o.c)(() => {
                        b.authorizationUrl && ((0, d.uV)({ stage: 'attempt-start', trigger: 'user' }), x.push(b.authorizationUrl));
                    });
                return (0, r.jsx)(
                    l.$,
                    {
                        onClick: A,
                        className: g,
                        isBlock: v,
                        color: p,
                        variant: i,
                        size: t,
                        radius: 'xxxl',
                        withRipple: _,
                        'data-test-id': n.S7.UNAUTHORIZED_BUTTON,
                        children: h || (0, r.jsx)(c.HL, { variant: 'div', size: 'l', lineClamp: 1, children: (0, r.jsx)(a.A, { id: 'authorization.enter-button' }) }),
                    },
                    f,
                );
            };
        },
    },
    (e) => {
        (e.O(
            0,
            [
                7412, 1010, 8461, 7231, 2147, 9763, 4517, 1256, 3608, 3907, 8722, 6706, 5472, 8378, 900, 2536, 2146, 3353, 2474, 8035, 347, 2732, 1410, 1417, 8506, 6050,
                5806, 6241, 7702, 6874, 9155, 861, 4668, 9740, 1175, 4499, 8915, 6341, 6226, 4220, 9562, 7358,
            ],
            () => e((e.s = 25630)),
        ),
            (_N_E = e.O()));
    },
]);
