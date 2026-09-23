(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [229, 1287],
    {
        3796: (e, t, i) => {
            'use strict';
            i.d(t, { J: () => s });
            var r = i(21916),
                a = i(55178);
            let s = (e) => {
                let t = (0, r.usePathname)(),
                    [i, s] = (0, a.useState)(!1);
                ((0, a.useEffect)(() => {
                    (window.Ya.Rum.spa.makeSpaSubPage(t), window.Ya.Rum.spa.startDataLoading(t));
                }),
                    (0, a.useEffect)(() => {
                        window.Ya.Rum.spa.getLastSpaSubPage(t) && e && !i && (window.Ya.Rum.spa.finishDataLoading(t), window.Ya.Rum.spa.startDataRendering(t), s(!0));
                    }, [e, i, t]));
            };
        },
        4820: (e, t, i) => {
            'use strict';
            i.d(t, { C: () => c });
            var r = i(32290),
                a = i(55178),
                s = i(21732),
                n = i(71926),
                o = i(91624),
                l = i.n(o);
            let c = (e) => {
                let { getDescriptionTexts: t, entityId: i } = e,
                    [o, c] = (0, a.useState)(null);
                if (
                    ((0, a.useEffect)(() => {
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
                                'data-test-id': s.S7.DESCRIPTION_TEXT,
                                children: e,
                            },
                            ''.concat(i, '-descpription-text-').concat(t),
                        ),
                    );
            };
        },
        5537: (e, t, i) => {
            'use strict';
            i.d(t, { N: () => s });
            var r = i(57594),
                a = i(79406);
            let s = () => {
                var e, t;
                let {
                    user: i,
                    settings: { browserInfo: s },
                    experiments: n,
                } = (0, r.g)();
                return (
                    !(null == s ? void 0 : s.isTouch) &&
                    i.isAuthorized &&
                    !i.hasPlus &&
                    (null == (t = n.getExperiment(a.z.WebNextDesktopWebFreemium)) || null == (e = t.value) ? void 0 : e.closeListening) === 'on'
                );
            };
        },
        7748: (e, t, i) => {
            'use strict';
            (i.r(t), i.d(t, { NotFound: () => T }));
            var r = i(32290),
                a = i(63618),
                s = i(96103),
                n = i(39407),
                o = i(63423),
                l = i(82586),
                c = i(46049),
                d = i(71926),
                u = i(55178),
                m = i(17811),
                _ = i(99923),
                p = i(90153),
                h = i(74416),
                v = i(62376),
                x = i(27576),
                g = i(83920),
                A = i(20472),
                C = i(32641),
                b = i(27120),
                f = i(12894),
                N = i(57594),
                y = i(55365),
                I = i.n(y);
            let T = (0, s.PA)((e) => {
                let { className: t, title: i, description: s, iconVariant: y = 'musicLogo', iconClassName: T, iconSize: k } = e,
                    { contentRef: E, setContentScrollRef: O } = (0, g.g)(),
                    S = (0, C.Z)(A.Z.main.href);
                !(function () {
                    let e = (0, h.st)(),
                        { hash: t } = (0, h.gf)(),
                        i = (0, v.U)(),
                        r = (0, u.useRef)(void 0);
                    (0, u.useEffect)(() => {
                        if (!e || !t) return;
                        r.current = (0, x.A)();
                        let a = (0, m.F)({
                            params: {
                                hash: t,
                                pageId: _.AppScreen.PageNotFoundScreen,
                                pageStyle: _.PageStyles.Fullscreen,
                                pagePlacement: _.PagePlacements.Fullscreen,
                                mainObjectType: _.DomainObjectType.NonApplicable,
                                mainObjectId: _.DomainObjectType.NonApplicable,
                                viewUuid: r.current,
                            },
                            logger: i,
                            context: 'useSendEventOnNotFoundShowedOrHidden.open',
                        });
                        return (
                            a && (0, p.w5)(e.evgenInstance, a),
                            () => {
                                let a = (0, m.F)({
                                    params: {
                                        hash: t,
                                        pageId: _.AppScreen.PageNotFoundScreen,
                                        pageStyle: _.PageStyles.Fullscreen,
                                        pagePlacement: _.PagePlacements.Fullscreen,
                                        mainObjectType: _.DomainObjectType.NonApplicable,
                                        mainObjectId: _.DomainObjectType.NonApplicable,
                                        viewUuid: r.current,
                                    },
                                    logger: i,
                                    context: 'useSendEventOnNotFoundShowedOrHidden.close',
                                });
                                a && (0, p.XB)(e.evgenInstance, a);
                            }
                        );
                    }, [e, t, i]);
                })();
                let { handleNavigateToMain: j } = (function (e) {
                    let t = (0, h.st)(),
                        { hash: i } = (0, h.gf)(),
                        r = (0, v.U)();
                    return {
                        handleNavigateToMain: (0, u.useCallback)(() => {
                            if (!t || !i) return;
                            let a = (0, m.F)({
                                params: {
                                    hash: i,
                                    pageId: _.AppScreen.PageNotFoundScreen,
                                    pageStyle: _.PageStyles.Fullscreen,
                                    pagePlacement: _.PagePlacements.Fullscreen,
                                    mainObjectType: _.DomainObjectType.NonApplicable,
                                    mainObjectId: _.DomainObjectType.NonApplicable,
                                    from: _.AppScreen.PageNotFoundScreen,
                                    to: _.AppScreen.MainScreen,
                                    entityType: _.EntityTypes.Error,
                                    entityId: _.EntityTypes.Error,
                                },
                                logger: r,
                                context: 'useSendEventOnNotFoundNavigated',
                            });
                            (a && (0, p.Mu)(t.evgenInstance, a), e());
                        }, [t, i, r, e]),
                    };
                })(S);
                return (
                    (0, b.N)(!0),
                    !(function () {
                        let { location: e } = (0, N.g)();
                        (0, u.useEffect)(
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
                        className: (0, a.$)(I().root, { [I().root_desktop]: !E }, t),
                        containerClassName: I().container,
                        ref: O,
                        children: [
                            (0, r.jsx)(f.L, { withBackwardFallback: '/', className: I().navigation, withForwardControl: !1 }),
                            (0, r.jsxs)('div', {
                                className: I().content,
                                children: [
                                    (0, r.jsx)(l.I, { className: (0, a.$)(I().icon, T), variant: y, size: k }),
                                    (0, r.jsx)(d.DZ, {
                                        className: (0, a.$)(I().title, I().important),
                                        variant: 'h3',
                                        size: 'xs',
                                        children: i || (0, r.jsx)(n.A, { id: 'page-error.page-does-not-exist' }),
                                    }),
                                    (0, r.jsx)(d.HL, {
                                        className: (0, a.$)(I().text, I().important),
                                        variant: 'span',
                                        type: 'text',
                                        size: 'l',
                                        weight: 'normal',
                                        children: s || (0, r.jsx)(n.A, { id: 'page-error.page-does-not-exist-description' }),
                                    }),
                                    (0, r.jsx)(o.$, {
                                        onClick: j,
                                        className: I().button,
                                        role: 'link',
                                        color: 'secondary',
                                        size: 'l',
                                        radius: 'xxxl',
                                        children: (0, r.jsx)(d.HL, {
                                            type: 'controls',
                                            variant: 'span',
                                            size: 'm',
                                            children: (0, r.jsx)(n.A, { id: 'navigation.page-main' }),
                                        }),
                                    }),
                                ],
                            }),
                        ],
                    })
                );
            });
        },
        8626: (e, t, i) => {
            'use strict';
            i.d(t, { m: () => r });
            let r = () => ({ year: 'numeric' });
        },
        8677: (e, t, i) => {
            'use strict';
            i.d(t, { Q: () => R });
            var r = i(32290),
                a = i(63618),
                s = i(96103),
                n = i(55178),
                o = i(60900),
                l = i(39407),
                c = i(99923),
                d = i(21732),
                u = i(91027),
                m = i(82586),
                _ = i(70280),
                p = i(71926),
                h = i(17705),
                v = i(63423);
            let x = (e) => {
                let { className: t, variant: i = 'text', onClick: a, iconClassName: s, iconSize: l, size: c = 's', ariaLabel: u } = e,
                    { formatMessage: _ } = (0, o.A)(),
                    p = null != u ? u : _({ id: 'play-queue.delete-from-queue' }),
                    h = (0, n.useCallback)(
                        (e) => {
                            (null == a || a(), e.stopPropagation());
                        },
                        [a],
                    );
                return (0, r.jsx)(v.$, {
                    className: t,
                    withRipple: !1,
                    variant: i,
                    size: c,
                    radius: 'round',
                    'aria-label': p,
                    onClick: h,
                    icon: (0, r.jsx)(m.I, { size: l, className: s, variant: 'bucket' }),
                    'data-test-id': d.OA.track.REMOVE_BUTTON,
                });
            };
            var g = i(71735),
                A = i(54391),
                C = i(22191),
                b = i(28999),
                f = i(57594),
                N = i(92744),
                y = i(29268),
                I = i(4008),
                T = i(53161),
                k = i(52843),
                E = i(39400),
                O = i(54714),
                S = i.n(O),
                j = i(38420),
                L = i(92565),
                P = i.n(L);
            let w = (0, s.PA)((e) => {
                    let { track: t } = e,
                        { formatMessage: i } = (0, o.A)();
                    return t.isDownloaded
                        ? (0, r.jsx)(m.I, {
                              size: 'xxs',
                              variant: 'downloaded',
                              'aria-label': i({ id: 'offline.track-downloaded' }),
                              'data-test-id': d.Kq.track.DOWNLOADED_TRACK_ICON,
                          })
                        : t.isDownloading
                          ? (0, r.jsx)(j.A, { value: t.downloadingProgress, size: 16, className: P().downloadingProgress, progressBarClassName: P().progress })
                          : null;
                }),
                R = (0, s.PA)((e) => {
                    var t, i;
                    let {
                            className: s,
                            track: v,
                            withLightning: O,
                            ignoreDislikedStyles: j,
                            onLikeClick: L,
                            utmLink: P,
                            withSecondaryColor: R,
                            handleRemove: M,
                            withTrailer: D = !0,
                            likeIconSize: F = 'xxs',
                            removeButtonAriaLabel: B,
                            hideControls: W,
                        } = e,
                        { user: U, trailer: z } = (0, f.g)(),
                        { formatMessage: H } = (0, o.A)(),
                        { sendLikeSearchFeedback: Y } = (0, b.z)(),
                        [$, V] = (0, n.useState)(!1),
                        [G, K] = (0, n.useState)(!1),
                        X = (0, g.P)(),
                        q = (0, h.K)(v),
                        J = (0, C.P)(Math.round((null != (i = v.durationMs) ? i : 0) / 1e3)),
                        Z = (0, A.F)(),
                        Q = U.hasPlus,
                        ee = !v.isRemoved && v.isAvailable && !W,
                        et = (0, u.c)(async () => {
                            ($ || v.isLiked || (V(!0), null == Y || Y()), await q(), null == L || L(v.isLiked));
                        }),
                        ei = (0, u.c)((e) => {
                            e.stopPropagation();
                        }),
                        er = (0, u.c)((e) => {
                            if ((e.stopPropagation(), X())) return void e.preventDefault();
                            (z.openTrackTrailer(v.id), Z(c.DomainObjectType.Track, v.id));
                        }),
                        ea = (0, n.useMemo)(() => {
                            if (ee)
                                return (0, r.jsx)('div', {
                                    onClick: ei,
                                    children: (0, r.jsx)(E._, {
                                        track: v,
                                        open: G,
                                        onOpenChange: K,
                                        placement: 'bottom',
                                        icon: (0, r.jsx)(m.I, { size: 'xs', variant: 'more' }),
                                        size: 'xs',
                                        utmLink: P,
                                        className: (0, a.$)(S().contextMenu, { [S().contextMenu_visible]: G }),
                                        handleRemove: M,
                                        withTrailer: D,
                                        'data-test-id': d.Kq.track.TRACK_CONTEXT_MENU_BUTTON,
                                    }),
                                });
                        }, [ei, M, G, ee, D, v, P]);
                    return (0, r.jsxs)('div', {
                        className: (0, a.$)(S().root, S().controls, s, {
                            [S().controls_dislikedControls]: v.isDisliked,
                            [S().controls_dislikedColors]: v.isDisliked && !j,
                            [S().controls_disabled]: !v.isAvailable,
                            [S().root_withSecondaryColor]: R,
                        }),
                        children: [
                            O &&
                                (0, r.jsx)(m.I, {
                                    'aria-label': H({ id: 'entity-names.popular-among-users' }),
                                    size: 'xxs',
                                    className: S().lightning,
                                    variant: 'lightning',
                                }),
                            v.isUGC &&
                                (0, r.jsxs)(_.m_, {
                                    placement: 'bottom',
                                    offsetOptions: 8,
                                    children: [
                                        (0, r.jsx)(m.I, {
                                            'aria-label': H({ id: 'ugc.track-description' }),
                                            size: 'xxs',
                                            className: S().ugcIcon,
                                            variant: 'eye_crossed',
                                            'data-test-id': d.Kq.track.UGC_TRACK_ICON,
                                        }),
                                        (0, r.jsx)(_.ZI, { children: (0, r.jsx)(l.A, { id: 'ugc.track-description' }) }),
                                    ],
                                }),
                            Q && (0, r.jsx)('div', { className: (0, a.$)(S().item, S().downloadIcon), children: (0, r.jsx)(w, { track: v }) }),
                            M && !W && (0, r.jsx)(x, { size: 'xs', iconSize: 'xxs', className: (0, a.$)(S().item, S().removeButton), onClick: M, ariaLabel: B }),
                            ee &&
                                (0, r.jsx)(I.WithOffline, {
                                    fallback: (0, r.jsx)(N.c, {
                                        size: 'xs',
                                        iconSize: F,
                                        className: (0, a.$)(S().item, S().likeIcon),
                                        isLiked: v.isLiked,
                                        onClick: et,
                                        disabled: !U.isAuthorized,
                                    }),
                                }),
                            (null == (t = v.trailer) ? void 0 : t.isAvailable) &&
                                v.isAvailable &&
                                (0, r.jsx)(I.WithOffline, {
                                    fallback: (0, r.jsx)(y.k, {
                                        className: (0, a.$)(S().item, S().trailerIcon),
                                        iconSize: 'xs',
                                        variant: 'text',
                                        onClick: er,
                                        withRipple: !1,
                                    }),
                                }),
                            (0, r.jsxs)('div', {
                                className: (0, a.$)(S().item, S().contextMenuWrapper),
                                children: [
                                    'number' == typeof v.durationMs &&
                                        (0, r.jsx)(p.HL, {
                                            variant: 'span',
                                            className: (0, a.$)(S().duration, { [S().duration_hidden]: G && ee }),
                                            type: 'entity',
                                            size: 'm',
                                            weight: 'medium',
                                            'aria-label': J,
                                            role: 'text',
                                            'data-test-id': d.Kq.track.TRACK_DURATION,
                                            children: (0, r.jsx)('span', {
                                                'aria-hidden': 'true',
                                                children: ((e) => {
                                                    let t = Math.round((e || 0) / T.k7);
                                                    return (0, k.E)(t);
                                                })(v.durationMs),
                                            }),
                                        }),
                                    ea,
                                ],
                            }),
                        ],
                    });
                });
        },
        12989: (e, t, i) => {
            'use strict';
            i.d(t, { D: () => g });
            var r = i(55178),
                a = i(17811),
                s = i(92146),
                n = i(74416),
                o = i(6752),
                l = i(62376),
                c = i(1677),
                d = i(48922),
                u = i(84782),
                m = i(30915),
                _ = i(18746),
                p = i(2792),
                h = i(37240),
                v = i(51012),
                x = i(47498);
            let g = () => {
                let e = (0, l.U)(),
                    t = (0, n.st)(),
                    { hash: i } = (0, n.gf)(),
                    { pageId: g, displayReasonId: A } = (0, h.$)(),
                    { tabId: C, tabPos: b, isTabSelectedByDefault: f } = (0, x.R)(),
                    { offsetBlockPosY: N } = (0, m.u)(),
                    { blockType: y, blockId: I, blockPosX: T, blockPosY: k, mainObjectId: E, mainObjectType: O, displayReasonId: S } = (0, u.N)(),
                    { filterKey: j, filterValue: L, filterPos: P } = (0, _.G)(),
                    { objectType: w, objectsCount: R, objectId: M, objectPosX: D, objectPosY: F } = (0, p.J)(),
                    { skeleton: B } = (0, v.b)(),
                    W = null != S ? S : A,
                    U = (0, o.L)(() => (void 0 !== N && void 0 !== k ? N + k : k));
                return (0, r.useCallback)(
                    (r, n) => {
                        if (!t || !g || !d.xK.includes(g) || !d.fD.includes(g)) return;
                        let o = c.F[g];
                        if (!o) return;
                        let l = {
                            hash: i,
                            pageId: o,
                            entityType: y,
                            entityId: I,
                            entityPosX: T,
                            entityPosY: U,
                            objectsCount: R,
                            viewUuid: n,
                            objectType: w,
                            objectId: M,
                            objectPosX: D,
                            objectPosY: F,
                        };
                        (void 0 !== j && ((l.filterKey = j), (l.filterValue = L), (l.filterPos = P)),
                            d.qG.includes(g) && ((l.tabId = C), (l.tabPos = b), (l.isTabSelectedByDefault = f)),
                            B && (l.skeletonId = B),
                            'string' == typeof E && 'string' == typeof O && ((l.mainObjectType = O), (l.mainObjectId = E)),
                            W && (l.displayReasonId = W));
                        let u = (0, a.F)({ params: l, logger: e, context: 'useSendEventOnBlockShowedOrHidden' });
                        u && (r ? (0, s.Pf)(t.evgenInstance, u) : (0, s.nv)(t.evgenInstance, u));
                    },
                    [t, W, I, T, U, y, j, P, L, i, f, e, E, O, M, D, F, w, R, g, B, C, b],
                );
            };
        },
        13365: (e, t, i) => {
            'use strict';
            var r;
            (i.d(t, { _: () => r }),
                (function (e) {
                    ((e.UP = 'up'), (e.DOWN = 'down'), (e.SAME = 'same'), (e.NEW = 'new'));
                })(r || (r = {})));
        },
        13798: (e, t, i) => {
            'use strict';
            i.d(t, { N: () => v });
            var r = i(32290),
                a = i(63618),
                s = i(96103),
                n = i(55178),
                o = i(60900),
                l = i(80229),
                c = i(21732),
                d = i(6752),
                u = i(82586),
                m = i(57594),
                _ = i(60244),
                p = i(90006),
                h = i.n(p);
            let v = (0, s.PA)((e) => {
                let { className: t, getDescriptionTexts: i, trackId: s, containerClassName: p, variant: v, size: x = 'xxxs', ...g } = e,
                    { formatMessage: A } = (0, o.A)(),
                    {
                        settings: { isMobile: C },
                    } = (0, m.g)(),
                    [b, f] = (0, n.useState)(null),
                    N = (0, d.L)(() => {
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
                    y = (0, n.useMemo)(() => A({ id: 'extra-explicit.explicit-mark' }), [A]);
                (0, n.useEffect)(() => {
                    i && i().then(f);
                }, [i, s]);
                let I = (null == b ? void 0 : b.join('\n')) || '',
                    T = !!(null == b ? void 0 : b.length) && !C,
                    k = I.length > 0 ? I : y;
                return (0, r.jsx)(_.k, {
                    description: I,
                    placement: 'bottom-start',
                    enabled: T,
                    children: (0, r.jsx)('span', {
                        className: p,
                        children: (0, r.jsx)(u.I, {
                            className: (0, a.$)(h().explicitMark, t),
                            'aria-label': k,
                            variant: N,
                            size: x,
                            ...g,
                            'data-test-id': c.S7.EXPLICIT_MARK_ICON,
                        }),
                    }),
                });
            });
        },
        15559: (e, t, i) => {
            'use strict';
            i.d(t, { v: () => a });
            var r = i(79406);
            let a = (e) => {
                let { checkExperiment: t, getDisclaimerContent: i, getExplicitContent: a, userRegion: s } = e;
                return 'ru' === s && t(r.z.WebNextFooterDisclaimer, 'on') ? i() : a();
            };
        },
        16510: (e) => {
            e.exports = { root: 'ArtistItem_root__Q_mgJ', image: 'ArtistItem_image__5rKWF', cover: 'ArtistItem_cover__FTvHo' };
        },
        20753: (e) => {
            e.exports = { root: 'DragAndDropIcon_root__OstQU', root_active: 'DragAndDropIcon_root_active__xOTKt' };
        },
        22334: (e, t, i) => {
            (Promise.resolve().then(i.bind(i, 3377)),
                Promise.resolve().then(i.bind(i, 11044)),
                Promise.resolve().then(i.bind(i, 92498)),
                Promise.resolve().then(i.bind(i, 7748)));
        },
        22714: (e, t, i) => {
            'use strict';
            i.d(t, { n: () => n });
            var r = i(32290),
                a = i(55178),
                s = i(1176);
            let n = (e) => {
                let { pageId: t, pageEntityId: i, displayReasonId: n, pageStyle: o, pagePlacement: l, children: c } = e,
                    d = (0, a.useMemo)(() => ({ pageId: t, pageEntityId: i, displayReasonId: n, pageStyle: o, pagePlacement: l }), [t, i, n, o, l]);
                return (0, r.jsx)(s.r.Provider, { value: d, children: c });
            };
        },
        23352: (e, t, i) => {
            'use strict';
            i.d(t, { n: () => n });
            var r = i(55178),
                a = i(12989),
                s = i(80536);
            let n = function () {
                let { callback: e, singleEvent: t, withViewUuid: i } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    n = (0, r.useRef)(null),
                    o = (0, a.D)(),
                    l = (0, r.useId)(),
                    c = (0, r.useContext)(s.B),
                    d = (0, r.useCallback)(
                        (r, a) => {
                            (e ? e(r, i ? a : void 0) : o(r, a), t && c.unobserveElement(l));
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
        29268: (e, t, i) => {
            'use strict';
            i.d(t, { k: () => u });
            var r = i(32290),
                a = i(55178),
                s = i(60900),
                n = i(21732),
                o = i(63423),
                l = i(82586),
                c = i(59576);
            let d = (e) => {
                    let {
                            variant: t,
                            withRipple: i,
                            size: a,
                            radius: d,
                            iconSize: u,
                            disabled: m,
                            onClick: _,
                            iconClassName: p,
                            className: h,
                            forwardRef: v,
                            style: x,
                            children: g,
                        } = e,
                        { formatMessage: A } = (0, s.A)(),
                        C = A({ id: 'trailer.button-aria-label' });
                    return (0, r.jsx)(o.$, {
                        className: h,
                        color: 'secondary',
                        radius: d,
                        size: a,
                        variant: t,
                        withRipple: i,
                        flexIcon: !0,
                        'aria-label': C,
                        onClick: _,
                        ref: v,
                        icon: (0, r.jsx)(l.I, { variant: 'trailer', size: u, className: p }),
                        disabled: m,
                        'data-intersection-property-id': c.N,
                        style: x,
                        'data-test-id': n.S7.TRAILER_BUTTON,
                        children: g,
                    });
                },
                u = (0, a.forwardRef)((e, t) => (0, r.jsx)(d, { forwardRef: t, ...e }));
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
            i.d(t, { $: () => s });
            var r = i(60900),
                a = i(64605);
            let s = (e, t) => {
                let { formatMessage: i } = (0, r.A)();
                if (e)
                    switch (t) {
                        case a._.AUDIOBOOK:
                            return i({ id: 'non-music.shelf-unsubscribe' });
                        case a._.FAIRY_TALE:
                            return i({ id: 'interface-actions.do-not-like' });
                        default:
                            return i({ id: 'interface-actions.subscribed' });
                    }
                switch (t) {
                    case a._.AUDIOBOOK:
                        return i({ id: 'non-music.shelf-subscribe' });
                    case a._.FAIRY_TALE:
                        return i({ id: 'interface-actions.like' });
                    default:
                        return i({ id: 'interface-actions.subscribe' });
                }
            };
        },
        31010: (e, t, i) => {
            'use strict';
            i.d(t, { H: () => a, P: () => s });
            var r = i(55178);
            let a = (0, r.createContext)(null),
                s = () => (0, r.useContext)(a);
        },
        32468: (e, t, i) => {
            'use strict';
            i.d(t, { A: () => n });
            var r = i(32290),
                a = i(77088),
                s = i.n(a);
            let n = (e) => {
                let { children: t } = e;
                return (0, r.jsx)('footer', { className: s().empty });
            };
        },
        34223: (e, t, i) => {
            'use strict';
            i.d(t, { D: () => h });
            var r = i(32290),
                a = i(98350),
                s = i(63618),
                n = i(55178),
                o = i(60900),
                l = i(79856),
                c = i(91063),
                d = i.n(c);
            let u = (e) => {
                let { isActive: t, className: i } = e,
                    { formatMessage: a } = (0, o.A)(),
                    c = (0, n.useMemo)(() => a({ id: 'loading-messages.entity-is-loading' }, { entityName: a({ id: 'entity-names.track' }) }), [a]);
                return (0, r.jsxs)('div', {
                    'aria-label': c,
                    'aria-live': t ? 'polite' : 'off',
                    'aria-busy': t,
                    className: (0, s.$)(d().root, i),
                    children: [
                        (0, r.jsxs)('div', {
                            className: d().infoContainer,
                            children: [
                                (0, r.jsx)('div', { className: d().coverContainer, children: (0, r.jsx)(l.W, { isActive: t, className: d().cover, radius: 'round' }) }),
                                (0, r.jsx)('div', { className: d().textContainer, children: (0, r.jsx)(l.W, { isActive: t, className: d().title, radius: 'l' }) }),
                            ],
                        }),
                        (0, r.jsx)(l.W, { isActive: t, className: d().action, radius: 'l' }),
                    ],
                });
            };
            var m = i(89661),
                _ = i.n(m);
            let p = (e) => {
                    let { isActive: t, className: i } = e,
                        { formatMessage: a } = (0, o.A)(),
                        c = (0, n.useMemo)(() => a({ id: 'loading-messages.entity-is-loading' }, { entityName: a({ id: 'entity-names.track' }) }), [a]);
                    return (0, r.jsxs)('div', {
                        'aria-label': c,
                        'aria-live': t ? 'polite' : 'off',
                        'aria-busy': t,
                        className: (0, s.$)(_().root, i),
                        children: [
                            (0, r.jsxs)('div', {
                                className: _().infoContainer,
                                children: [
                                    (0, r.jsx)(l.W, { isActive: t, className: _().cover, radius: 's' }),
                                    (0, r.jsx)('div', { className: _().textContainer, children: (0, r.jsx)(l.W, { isActive: t, className: _().title, radius: 'l' }) }),
                                ],
                            }),
                            (0, r.jsx)(l.W, { isActive: t, className: _().action, radius: 'l' }),
                        ],
                    });
                },
                h = (e) => {
                    let { isActive: t, variant: i, className: s } = e;
                    switch (i) {
                        case a.X.PLAYLIST:
                            return (0, r.jsx)(p, { isActive: t, className: s });
                        case a.X.ALBUM:
                            return (0, r.jsx)(u, { isActive: t, className: s });
                    }
                };
        },
        35587: (e) => {
            e.exports = {
                root: 'CommonTrack_root__i6shE',
                root_disabled: 'CommonTrack_root_disabled__vDyCm',
                root_current: 'CommonTrack_root_current__MNrpS',
                ripple: 'CommonTrack_ripple__wnpUs',
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
                a = i(96103),
                s = i(21732),
                n = i(82586),
                o = i(19740),
                l = i(30542),
                c = i(57594);
            let d = (0, a.PA)((e) => {
                let { isLiked: t, onClick: i, className: a, albumType: d, disabled: u } = e,
                    { user: m } = (0, c.g)(),
                    _ = t ? 'liked' : 'like',
                    p = (0, l.$)(t, d);
                return (0, r.jsx)(o.Dr, {
                    className: a,
                    onClick: i,
                    icon: (0, r.jsx)(n.I, { variant: _, size: 'xxs' }),
                    'aria-pressed': t,
                    disabled: u || !m.isAuthorized,
                    'data-test-id': s.S7.CONTEXT_MENU_SUBSCRIBE_BUTTON,
                    children: p,
                });
            });
        },
        41677: (e, t, i) => {
            'use strict';
            i.d(t, { i: () => W });
            var r = i(32290),
                a = i(63618),
                s = i(96103),
                n = i(55178),
                o = i(70280),
                l = i(57594),
                c = i(53514),
                d = i(40484),
                u = i.n(d),
                m = i(60900),
                _ = i(99923),
                p = i(21732),
                h = i(91027),
                v = i(71926),
                x = i(47745),
                g = i(32641),
                A = i(28999),
                C = i(61258),
                b = i(19383);
            let f = (0, s.PA)((e) => {
                    let {
                            artist: t,
                            withLink: i = !0,
                            linkClassName: a,
                            captionClassName: s,
                            captionSize: n = 'm',
                            allArtistsTitle: c,
                            withCustomTooltip: d,
                            hoverSettings: u,
                        } = e,
                        { formatMessage: f } = (0, m.A)(),
                        {
                            track: N,
                            settings: { isMobile: y },
                        } = (0, l.g)(),
                        I = (0, g.Z)(t.url),
                        { sendNavigateSearchFeedback: T } = (0, A.z)(),
                        k = (0, x.N)(),
                        E = ((e) => {
                            let { artist: t, callback: i } = e,
                                { currentTrackInfo: r, fullscreenPlayer: a, fullscreenVideoPlayer: s } = (0, l.g)(),
                                { modal: n } = r;
                            return (0, b.l)({
                                entity: t,
                                callback: i,
                                onBeforeHandle: (e) => {
                                    (null == e || e.stopPropagation(), n.isOpened && (r.reset(), n.close()), a.modal.isOpened && a.modal.close());
                                },
                                onAfterHandled: () => {
                                    s.modal.isOpened && (s.modal.close(), s.reset());
                                },
                                preventDefaultWhenSafe: !0,
                            });
                        })({
                            artist: t,
                            callback: (0, h.c)((e) => {
                                (y && N.isOpened && N.close(), I(e));
                            }),
                        }),
                        O = (0, h.c)((e) => {
                            (k({ to: _.AppScreen.ArtistScreen }), null == T || T(), E(e));
                        });
                    return i && !t.various
                        ? (0, r.jsx)(C.N, {
                              'aria-label': f({ id: 'entity-names.artist-name' }, { artistName: t.name }),
                              className: a,
                              href: t.url,
                              onClick: O,
                              title: d ? void 0 : c || t.name,
                              'data-test-id': p.OA.artists.SEPARATED_ARTIST_TITLE,
                              children: (0, r.jsx)(o.m_, {
                                  enabled: !c && d,
                                  offsetOptions: 4,
                                  placement: 'top',
                                  text: c || t.name,
                                  hoverSettings: u,
                                  children: (0, r.jsx)(v.HL, { variant: 'span', type: 'entity', size: n, weight: 'medium', className: s, children: t.name }),
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
                                  className: s,
                                  title: d ? void 0 : c || t.name,
                                  'data-test-id': p.OA.artists.SEPARATED_ARTIST_TITLE,
                                  children: t.name,
                              }),
                          });
                }),
                N = (e) => {
                    let {
                            artist: t,
                            withLink: i = !0,
                            linkClassName: a,
                            captionClassName: s,
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
                                                  f,
                                                  {
                                                      artist: t,
                                                      withLink: i,
                                                      linkClassName: a,
                                                      captionClassName: s,
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
                        }, [t.decomposed, u, i, a, s, o, l, c, d]);
                    return (0, r.jsxs)(r.Fragment, {
                        children: [
                            (0, r.jsx)(f, {
                                artist: t,
                                withLink: i,
                                linkClassName: a,
                                captionClassName: s,
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
                I = i(63887);
            let T = (e) => {
                let { spoilerArtistsCount: t, spoilerClassName: i, handleOnSpoilerClick: s } = e;
                return (0, r.jsxs)(r.Fragment, {
                    children: [
                        ' ',
                        (0, r.jsx)(I.N, {
                            role: 'button',
                            href: '',
                            className: (0, a.$)(u().spoiler, i),
                            onClick: s,
                            rel: 'nofollow',
                            'data-test-id': p.OA.artists.SEPARATED_ARTISTS_SPOILER,
                            children: (0, r.jsx)(y.A, { id: 'entity-names.number-of-more-artists', values: { counter: t } }),
                        }),
                    ],
                });
            };
            var k = i(8055),
                E = i(6752),
                O = i(78035),
                S = i(78176),
                j = i(83598),
                L = i.n(j);
            let P = (0, s.PA)((e) => {
                    let { label: t, artists: i, forwardRef: a } = e;
                    return (0, r.jsxs)(o.m_, {
                        enableAriaDescribedby: !1,
                        isFocusEnabled: !1,
                        placement: 'top',
                        hoverSettings: { delay: 200, handleClose: (0, O.safePolygon)({ blockPointerEvents: !0 }) },
                        children: [
                            (0, r.jsx)('div', { ref: a, children: t }),
                            (0, r.jsx)(o.ZI, { className: L().tooltipContent, children: i.map((e) => (0, r.jsx)(S.V, { artist: e, className: L().artistItem }, e.id)) }),
                        ],
                    });
                }),
                w = (0, n.forwardRef)((e, t) => (0, r.jsx)(P, { forwardRef: t, ...e }));
            var R = i(19740),
                M = i(52598),
                D = i.n(M);
            let F = (0, s.PA)((e) => {
                    let { label: t, artists: i } = e,
                        { formatMessage: s } = (0, m.A)();
                    return (0, r.jsx)(R.W1, {
                        isMobile: !0,
                        className: (0, a.$)(D().root, D().important),
                        label: t,
                        ariaLabel: s({ id: 'interface-actions.context-menu-artists' }),
                        children: i.map((e) => (0, r.jsx)(S.V, { artist: e }, e.id)),
                    });
                }),
                B = (0, s.PA)((e) => {
                    let { artists: t = [], label: i, labelRef: a } = e,
                        [s, o] = (0, n.useState)(!1),
                        {
                            settings: { isMobile: c },
                        } = (0, l.g)(),
                        d = (0, h.c)(() => {
                            let e = a.current;
                            e && o(e.scrollHeight > e.clientHeight || e.scrollWidth > e.clientWidth);
                        }),
                        u = (0, E.L)(() =>
                            (0, k.A)(() => {
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
                        return (s || c) && (!c || 1 !== t.length) ? (c ? (0, r.jsx)(F, { artists: t, label: i }) : (0, r.jsx)(w, { artists: t, label: i })) : i;
                }),
                W = (0, s.PA)((e) => {
                    let {
                            className: t,
                            artists: i = [],
                            separator: s = ', ',
                            lineClamp: d,
                            visibleArtistsCount: m,
                            withLink: _ = !0,
                            spoilerClassName: p,
                            linkClassName: h,
                            captionClassName: v,
                            captionSize: x,
                            variant: g = 'breakAll',
                            withAllArtistsTitle: A = !0,
                            withComposer: C = !0,
                            spoilerComponent: b,
                            withCustomTooltip: f = !0,
                            artistIdWithoutLink: y,
                            withContextMenu: I,
                        } = e,
                        k = (0, n.useRef)(null),
                        [E, O] = (0, n.useState)(!1),
                        S = A
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
                                  .join(s)
                            : '',
                        {
                            settings: { isMobile: j },
                        } = (0, l.g)(),
                        L = 1 === i.length,
                        P = (0, n.useCallback)((e) => {
                            (O(!0), e.preventDefault());
                        }, []),
                        w = (0, n.useMemo)(() => {
                            let e = i;
                            return (
                                m && !E && (e = i.slice(0, m)),
                                e.reduce((e, t) => {
                                    if (!C && t.isComposer) return e.length ? e : [];
                                    let i = (0, r.jsx)(
                                        N,
                                        {
                                            artist: t,
                                            linkClassName: h,
                                            captionClassName: v,
                                            withLink: _ && t.id !== y && (((!j || L) && I) || !I),
                                            captionSize: x,
                                            allArtistsTitle: S,
                                            withCustomTooltip: f,
                                            hoverSettings: c.V,
                                            shouldUseSeparator: !!s,
                                        },
                                        t.key,
                                    );
                                    return e.length ? e.concat([s, i]) : [i];
                                }, [])
                            );
                        }, [i, m, E, C, j, L, I, h, v, _, y, x, S, f, s]),
                        R = (0, n.useMemo)(() => {
                            if (!E && m && m < i.length) {
                                let e = i.length - m;
                                return (0, n.isValidElement)(b) ? b : (0, r.jsx)(T, { spoilerClassName: p, spoilerArtistsCount: e, handleOnSpoilerClick: P });
                            }
                        }, [i.length, P, E, p, b, m]),
                        M = (0, n.useMemo)(() => {
                            if (d) return { WebkitLineClamp: d };
                        }, [d]),
                        D = (0, r.jsx)(o.m_, {
                            referenceRef: k,
                            enabled: !!(A && S) && f && !I && !j,
                            offsetOptions: 4,
                            placement: 'top',
                            text: S,
                            hoverSettings: c.V,
                            children: (0, r.jsxs)('div', {
                                style: M,
                                className: (0, a.$)(u().root, u()['root_variant_'.concat(g)], { [u().root_clamp]: d && d > 0 }, { [u().ellipsis]: !d }, t),
                                title: A && S && !f && !I ? S : void 0,
                                children: [w, R],
                            }),
                        });
                    return I ? (0, r.jsx)(B, { labelRef: k, artists: i, label: D }) : D;
                });
        },
        43565: (e, t, i) => {
            'use strict';
            i.d(t, { O: () => l });
            var r = i(32290),
                a = i(63618),
                s = i(82586),
                n = i(20753),
                o = i.n(n);
            let l = (e) => {
                let { isDragging: t, className: i } = e;
                return (0, r.jsx)(s.I, { variant: 'dragDots', size: 'xxs', className: (0, a.$)(o().root, { [o().root_active]: t }, i), 'aria-hidden': !0 });
            };
        },
        45257: (e, t, i) => {
            'use strict';
            i.d(t, { $: () => v });
            var r = i(32290),
                a = i(63618),
                s = i(8055),
                n = i(55178);
            let o = (e) => {
                    let { style: t, forwardRef: i, context: a, ...s } = e,
                        n = (null == a ? void 0 : a.listAriaLabel) || void 0,
                        o = (null == a ? void 0 : a.listRole) || 'region';
                    return (0, r.jsx)('div', { 'aria-labelledby': 'virtual-grid-header', role: o, 'aria-label': n, style: { ...t }, ref: i, ...s });
                },
                l = (0, n.forwardRef)((e, t) => (0, r.jsx)(o, { forwardRef: t, ...e }));
            var c = i(39684),
                d = i.n(c);
            let u = (e) => {
                    let { style: t, forwardRef: i, withFooter: s, withHeader: n, withForceScroll: o, ...l } = e;
                    return (0, r.jsx)('div', {
                        className: (0, a.$)(d().scroller, { [d().scroller_withFooter]: s, [d().scroller_withHeader]: n, [d().scroller_withForceScroll]: o }),
                        style: { ...t },
                        ref: i,
                        ...l,
                        tabIndex: -1,
                    });
                },
                m = (0, n.forwardRef)((e, t) => (0, r.jsx)(u, { forwardRef: t, ...e }));
            var _ = i(62060),
                p = i(31417);
            let h = (e) => {
                    let {
                            pageSize: t,
                            onPageHandler: i,
                            onRangeHandler: a,
                            debounceDurationInMs: s = 100,
                            totalCount: o = 0,
                            shouldTriggerRangeChangedOn: l = [],
                            endReached: c,
                            virtuosoRef: d,
                            ...u
                        } = e,
                        [m, h] = (0, n.useState)(null),
                        v = (0, n.useMemo)(
                            () =>
                                (0, _.A)((e) => {
                                    if ((null == a || a(e), l.length > 0 && h(e), t && i)) {
                                        let r = Math.floor(e.endIndex / t) + 1,
                                            a = Math.floor(e.startIndex / t);
                                        for (let e = a; e < r; e++) i(e);
                                    }
                                }, s),
                            [s, a, t, i, l],
                        );
                    (0, n.useEffect)(() => {
                        l.length > 0 && m && v(m);
                    }, l);
                    let x = (0, n.useMemo)(() => {
                        if (c)
                            return (0, _.A)((e) => {
                                c(e);
                            }, s);
                    }, [c, s]);
                    return (0, r.jsx)(p.sN, { ref: d, rangeChanged: v, totalCount: o, endReached: x, ...u });
                },
                v = (e) => {
                    let {
                            className: t,
                            customComponents: i,
                            onGetDataByPage: o,
                            onGetDataByRange: c,
                            itemClassName: u,
                            itemContentCallback: _,
                            listClassName: p,
                            overscan: v = 700,
                            pageSize: x = 20,
                            totalCount: g,
                            totalRequests: A,
                            debounceDurationInMs: C,
                            initialItemCount: b,
                            minInitialItemCount: f = 20,
                            handleRef: N,
                            alwaysShowScrollbar: y = !1,
                            testId: I,
                            isMobileLayout: T = !1,
                            shouldTriggerRangeChangedOn: k,
                            ...E
                        } = e,
                        [O, S] = (0, n.useState)(!1),
                        j = (0, n.useMemo)(
                            () =>
                                (0, s.A)((e) => {
                                    S(e);
                                }, 100),
                            [],
                        ),
                        L = (0, n.useMemo)(() => {
                            var e, t;
                            return T
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
                        }, [i, A, T]),
                        P = b ? Math.min(b, f) : void 0;
                    return (0, r.jsxs)('div', {
                        className: (0, a.$)(d().root, { [d().root_scrolling]: O || y, [d().root_notScrolling]: !O && !y }, t),
                        'data-test-id': I,
                        children: [
                            T && (null == i ? void 0 : i.Header) && i.Header(),
                            (0, r.jsx)(h, {
                                overscan: v,
                                components: L,
                                listClassName: p,
                                itemClassName: u,
                                isScrolling: j,
                                itemContent: _,
                                scrollerRef: N,
                                totalCount: g,
                                pageSize: x,
                                onPageHandler: o,
                                onRangeHandler: c,
                                debounceDurationInMs: C,
                                initialItemCount: P,
                                shouldTriggerRangeChangedOn: k,
                                ...E,
                            }),
                            T && (null == i ? void 0 : i.Footer) && i.Footer(),
                        ],
                    });
                };
        },
        48736: (e) => {
            e.exports = { root: 'TooltipWithTitle_root__7jLY3', text: 'TooltipWithTitle_text__ElBtq', description: 'TooltipWithTitle_description__HsGcR' };
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
        54171: (e, t, i) => {
            'use strict';
            i.d(t, { w: () => s });
            var r = i(19383),
                a = i(85017);
            let s = (e) => {
                let { track: t, callback: i, disclaimerRejectHandler: s } = e;
                return (0, r.l)({ entity: t, entityType: a.n.TRACK, callback: i, onReject: s, preventDefaultWhenSafe: !1 });
            };
        },
        54714: (e) => {
            e.exports = {
                card_root: 'HorizontalCardContainer_root__YoAAP',
                root: 'CommonControlsBar_root__N8b0F',
                root_withSecondaryColor: 'CommonControlsBar_root_withSecondaryColor__4Y1P_',
                item: 'CommonControlsBar_item__qGErG',
                contextMenu: 'CommonControlsBar_contextMenu__EAq_c',
                contextMenu_visible: 'CommonControlsBar_contextMenu_visible__M0ry0',
                contextMenuWrapper: 'CommonControlsBar_contextMenuWrapper__XjkaL',
                lightning: 'CommonControlsBar_lightning__o7wrY',
                ugcIcon: 'CommonControlsBar_ugcIcon__OV0Cl',
                lightning_withOffset: 'CommonControlsBar_lightning_withOffset__LGvUS',
                duration: 'CommonControlsBar_duration__un38A',
                duration_hidden: 'CommonControlsBar_duration_hidden__noQ4S',
                alwaysVisibleDuration: 'CommonControlsBar_alwaysVisibleDuration__3V6gl',
                controls: 'CommonControlsBar_controls__QrogT',
                trailerIcon: 'CommonControlsBar_trailerIcon__ZHSBo',
                removeButton: 'CommonControlsBar_removeButton__35xHY',
                controls_disabled: 'CommonControlsBar_controls_disabled__0RmLo',
                explicitMark: 'CommonControlsBar_explicitMark__3I_Op',
                controls_dislikedControls: 'CommonControlsBar_controls_dislikedControls__mMjKC',
                likeIcon: 'CommonControlsBar_likeIcon__YqgZY',
                controls_dislikedColors: 'CommonControlsBar_controls_dislikedColors__h5lev',
                downloadIcon: 'CommonControlsBar_downloadIcon__2mM6m',
                popover: 'CommonControlsBar_popover__6bmNd',
            };
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
        55985: (e, t, i) => {
            'use strict';
            i.d(t, { p: () => a });
            var r = i(60754);
            let a = (e) => (0, r.wg)({ uri: e.uri, color: e.color });
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
                a = i(21732),
                s = i(70280),
                n = i(71926),
                o = i(48736),
                l = i.n(o);
            let c = { padding: 8 },
                d = (e) => {
                    let { description: t, enabled: i, title: o, placement: d = 'top', children: u } = e;
                    return (0, r.jsxs)(s.m_, {
                        enabled: i,
                        offsetOptions: 4,
                        shiftOptions: c,
                        flipOptions: c,
                        placement: d,
                        children: [
                            u,
                            (0, r.jsx)(s.ZI, {
                                className: l().root,
                                'data-test-id': a.S7.TOOLTIP_WITH_TITLE,
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
        63038: (e, t, i) => {
            'use strict';
            i.d(t, { B: () => r });
            let r = '{tld}';
        },
        63363: (e, t, i) => {
            'use strict';
            i.d(t, { K: () => g });
            var r = i(32290),
                a = i(60900),
                s = i(91027),
                n = i(67732),
                o = i(45477),
                l = i(75582),
                c = i(57594),
                d = i(90357),
                u = i(92708),
                m = i(55178),
                _ = i(63380),
                p = i(96103),
                h = i(97755),
                v = i(79238);
            let x = (0, p.PA)((e) => {
                    let { album: t, closeToast: i, withLink: a } = e,
                        s = (0, v.b)(t);
                    return (0, r.jsx)(h.O, {
                        closeToast: i,
                        entityVariant: s,
                        coverUri: t.coverUri,
                        entityUrl: t.url,
                        collectionUrl: '/collection',
                        entityTitle: t.title,
                        isLiked: t.isLiked,
                        withLink: a,
                    });
                }),
                g = (e) => {
                    let {
                            user: t,
                            paywall: i,
                            albumCPA: { isPlusCPAEnabled: p },
                        } = (0, c.g)(),
                        { formatMessage: h } = (0, a.A)(),
                        { notify: v } = (0, l.l)(),
                        g = (() => {
                            let { notify: e } = (0, l.l)(),
                                [t, i] = (0, m.useState)(!1),
                                { formatMessage: n } = (0, a.A)();
                            return (0, s.c)(async (a) => {
                                let { album: s, withLink: l = !0, withNotification: c = !0 } = a;
                                if (t) return;
                                let m = { ...(0, u.HO)(s), url: s.url, isLiked: !s.isLiked };
                                i(!0);
                                let p = await s.toggleLike();
                                (i(!1),
                                    c &&
                                        (p === _.f.OK
                                            ? e((0, r.jsx)(x, { withLink: l, album: m }), { containerId: o.u.INFO })
                                            : e((0, r.jsx)(d.h, { error: n({ id: 'error-messages.error-during-action' }) }), { containerId: o.u.ERROR })));
                            });
                        })(),
                        { pageAlbumId: A } = (0, n.T)();
                    return (0, s.c)(async () => {
                        if (e)
                            return p({ pageAlbumId: A, albumId: e.id, isNonMusic: e.isNonMusic })
                                ? void i.openModal()
                                : t.isAuthorized
                                  ? g({ album: e })
                                  : void v((0, r.jsx)(d.h, { error: h({ id: 'authorization-messages.need-to-authorizate' }) }), { containerId: o.u.ERROR });
                    });
                };
        },
        64170: (e, t, i) => {
            'use strict';
            i.d(t, { SomethingWentWrong: () => N });
            var r = i(32290),
                a = i(63618),
                s = i(96103),
                n = i(55178),
                o = i(60900),
                l = i(39407),
                c = i(63423),
                d = i(82586),
                u = i(71926),
                m = i(17811),
                _ = i(99923),
                p = i(90153),
                h = i(74416),
                v = i(62376),
                x = i(37240),
                g = i(83920),
                A = i(20472),
                C = i(12894),
                b = i(30310),
                f = i.n(b);
            let N = (0, s.PA)((e) => {
                let { className: t, withBackwardControl: i = !0 } = e,
                    { formatMessage: s } = (0, o.A)(),
                    b = s({ id: 'error-messages.something-went-wrong' });
                !(function (e) {
                    let t = (0, h.st)(),
                        { hash: i } = (0, h.gf)(),
                        { pageId: r } = (0, x.$)(),
                        a = (0, v.U)();
                    (0, n.useEffect)(() => {
                        if (!t || !i || !r) return;
                        let s = (0, m.F)({
                            params: {
                                entityType: _.EntityTypes.Error,
                                entityId: _.EntityTypes.SomethingWrong,
                                errorMessage: e,
                                hash: i,
                                pageId: r,
                                pageStyle: _.PageStyles.Fullscreen,
                                pagePlacement: _.PagePlacements.Fullscreen,
                                mainObjectType: _.DomainObjectType.NonApplicable,
                                mainObjectId: _.DomainObjectType.NonApplicable,
                            },
                            logger: a,
                            context: 'useSendEventOnSomethingWentWrongShowed',
                        });
                        s && (0, p.z5)(t.evgenInstance, s);
                    }, [t, e, i, r, a]);
                })(b);
                let { sendRefreshEvent: N } = (function () {
                        let e = (0, h.st)(),
                            { hash: t } = (0, h.gf)(),
                            { pageId: i } = (0, x.$)(),
                            r = (0, v.U)();
                        return {
                            sendRefreshEvent: (0, n.useCallback)(() => {
                                if (!e || !t || !i) return;
                                let a = (0, m.F)({
                                    params: {
                                        actionType: _.ActionType.Refresh,
                                        userInteractionType: _.UserInteractionType.Tap,
                                        entityType: _.EntityTypes.Error,
                                        entityId: _.EntityTypes.SomethingWrong,
                                        hash: t,
                                        pageId: i,
                                        pageStyle: _.PageStyles.Fullscreen,
                                        pagePlacement: _.PagePlacements.Fullscreen,
                                        mainObjectType: _.DomainObjectType.NonApplicable,
                                        mainObjectId: _.DomainObjectType.NonApplicable,
                                    },
                                    logger: r,
                                    context: 'useSendEventOnSomethingWentWrongRefreshed',
                                });
                                a && (0, p.bv)(e.evgenInstance, a);
                            }, [e, t, i, r]),
                        };
                    })(),
                    y = (0, n.useCallback)(() => {
                        (N(), (window.location.href = A.Z.main.href));
                    }, [N]),
                    { contentRef: I } = (0, g.g)();
                return (0, r.jsxs)('div', {
                    className: (0, a.$)(f().root, t),
                    children: [
                        i &&
                            (0, r.jsx)(C.L, { withBackwardFallback: '/', className: (0, a.$)(f().navigation, { [f().navigation_desktop]: !I }), withForwardControl: !1 }),
                        (0, r.jsxs)('div', {
                            className: (0, a.$)(f().content, { [f().content_shrink]: !i }),
                            children: [
                                (0, r.jsx)(d.I, { className: f().icon, variant: 'attention', size: 'xxl' }),
                                (0, r.jsx)(u.DZ, { className: (0, a.$)(f().title, f().important), variant: 'h3', size: 'xs', children: b }),
                                (0, r.jsxs)(u.HL, {
                                    className: (0, a.$)(f().text, f().important),
                                    variant: 'span',
                                    type: 'text',
                                    size: 'l',
                                    weight: 'normal',
                                    children: [!1, (0, r.jsx)(l.A, { id: 'page-error.try-to-restart-app' })],
                                }),
                                (0, r.jsx)(c.$, {
                                    onClick: y,
                                    className: f().button,
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
            i.d(t, { T: () => s });
            var r = i(55178),
                a = i(56008);
            function s() {
                return (0, r.useContext)(a.H);
            }
        },
        68912: (e, t, i) => {
            'use strict';
            i.d(t, { j: () => I });
            var r = i(32290),
                a = i(63618),
                s = i(96103),
                n = i(21916),
                o = i(55178),
                l = i(60900),
                c = i(39407),
                d = i(21732),
                u = i(70280),
                m = i(71926),
                _ = i(41677),
                p = i(28999),
                h = i(57594),
                v = i(53514),
                x = i(85017),
                g = i(13798),
                A = i(61258),
                C = i(25649),
                b = i(24760),
                f = i(84141),
                N = i(5856),
                y = i.n(N);
            let I = (0, s.PA)((e) => {
                let {
                        className: t,
                        titleContainerClassName: i,
                        track: s,
                        albumArtists: N,
                        withExplicitMark: I = !0,
                        withSecondaryColor: T,
                        captionSize: k = 'm',
                        explicitSize: E = 'xxxs',
                        withAllArtistsTitle: O,
                        textClassName: S,
                        artistsClassName: j,
                        ignoreDislikedStyles: L,
                        withCustomTooltip: P = !0,
                        hasLineClamp: w = !0,
                        withSavingQueryParams: R,
                        beforeTitle: M,
                        withArtistLink: D = !0,
                        withTrackLink: F = !0,
                        afterTitle: B,
                        withContextMenuArtists: W,
                    } = e,
                    { formatMessage: U } = (0, l.A)(),
                    { sendNavigateSearchFeedback: z } = (0, p.z)(),
                    {
                        settings: { isMobile: H },
                    } = (0, h.g)(),
                    Y = (0, b.$)({ withCustomTooltip: P }),
                    $ = (0, n.useSearchParams)(),
                    V = s.getUrl(R ? Object.fromEntries($) : void 0),
                    G = (0, o.useMemo)(() => {
                        var e;
                        let t = U({ id: 'entity-names.track-name' }, { trackName: s.title });
                        return ''.concat(t, ' ').concat(null != (e = s.version) ? e : '');
                    }, [U, s.title, s.version]),
                    K = (0, f.O)({ track: s, onNavigate: z, withSavingQueryParams: R, entityType: x.n.TRACK }),
                    X = (0, o.useCallback)(
                        (e) => {
                            let t = ''.concat(s.title, ' ').concat(!s.isRemoved && s.version ? s.version : '');
                            return (0, r.jsx)(u.m_, {
                                enabled: Y && !H,
                                offsetOptions: 4,
                                placement: 'top',
                                text: t,
                                hoverSettings: v.V,
                                children: (0, r.jsx)(m.HL, {
                                    className: (0, a.$)(y().text, y().title),
                                    type: 'entity',
                                    size: k,
                                    weight: 'medium',
                                    variant: 'span',
                                    ...e,
                                    children: s.title,
                                }),
                            });
                        },
                        [H, Y, k, s.isRemoved, s.title, s.version],
                    ),
                    q = (0, o.useMemo)(() => {
                        let e = ''.concat(s.title, ' ').concat(!s.isRemoved && s.version ? s.version : '');
                        return s.isRemoved
                            ? (0, r.jsx)(u.m_, {
                                  enabled: Y && !H,
                                  offsetOptions: 4,
                                  placement: 'top',
                                  text: U({ id: 'track-title.error-not-found' }),
                                  hoverSettings: v.V,
                                  children: (0, r.jsx)(m.HL, {
                                      className: (0, a.$)(y().text, y().title),
                                      type: 'entity',
                                      size: k,
                                      weight: 'medium',
                                      variant: 'span',
                                      title: Y ? void 0 : U({ id: 'track-title.error-not-found' }),
                                      children: (0, r.jsx)(c.A, { id: 'track-title.error-not-found' }),
                                  }),
                              })
                            : s.hasTrackLink && F
                              ? (0, r.jsx)(A.N, {
                                    onClick: K,
                                    className: y().albumLink,
                                    href: V,
                                    'aria-label': G,
                                    title: Y ? void 0 : e,
                                    'data-test-id': d.Kq.track.TRACK_TITLE,
                                    children: X(),
                                })
                              : X({ 'data-test-id': d.Kq.track.TRACK_TITLE });
                    }, [H, s.title, s.isRemoved, s.version, s.hasTrackLink, X, Y, U, k, G, K, V, F]),
                    J = (0, C.s)(s.artists, N),
                    Z = (0, o.useMemo)(() => +!!w, [w]);
                return (0, r.jsx)('div', {
                    className: (0, a.$)(y().root, { [y().root_disabled]: !s.isAvailable, [y().root_disliked]: s.isDisliked && !L, [y().root_withSecondaryColor]: T }, t),
                    children: (0, r.jsxs)('div', {
                        className: y().metaContainer,
                        children: [
                            (0, r.jsxs)('div', {
                                className: (0, a.$)(y().titleContainer, { [y().titleContainer_withVersion]: s.version }, i),
                                children: [
                                    (0, r.jsxs)(m.HL, {
                                        className: (0, a.$)(y().text, S),
                                        type: 'entity',
                                        size: k,
                                        weight: 'medium',
                                        variant: 'div',
                                        lineClamp: 1,
                                        children: [
                                            M,
                                            q,
                                            !s.isRemoved &&
                                                s.version &&
                                                (0, r.jsxs)(m.HL, {
                                                    className: (0, a.$)(y().text, y().version),
                                                    type: 'entity',
                                                    size: k,
                                                    weight: 'medium',
                                                    variant: 'span',
                                                    title: Y ? void 0 : s.version,
                                                    'data-test-id': d.Kq.track.TRACK_VERSION,
                                                    children: ['\xa0', s.version],
                                                }),
                                        ],
                                    }),
                                    s.explicitDisclaimer &&
                                        I &&
                                        (0, r.jsx)(g.N, {
                                            containerClassName: y().explicitMarkContainer,
                                            getDescriptionTexts: s.getDescriptionTexts,
                                            size: E,
                                            variant: s.explicitDisclaimer,
                                            className: y().explicitMark,
                                            trackId: s.id,
                                        }),
                                    B,
                                ],
                            }),
                            J.length > 0 &&
                                (0, r.jsx)(_.i, {
                                    className: (0, a.$)(y().text, { [y().artists]: w }, j, S),
                                    withAllArtistsTitle: O,
                                    linkClassName: (0, a.$)(y().text, y().link),
                                    captionClassName: (0, a.$)(y().text, y().artistCaption),
                                    artists: J,
                                    withLink: s.isNonUserGenerated && D,
                                    lineClamp: Z,
                                    captionSize: k,
                                    withContextMenu: W,
                                }),
                        ],
                    }),
                });
            });
        },
        69951: (e, t, i) => {
            'use strict';
            i.d(t, { K: () => x });
            var r = i(32290),
                a = i(63618),
                s = i(96103),
                n = i(55178),
                o = i(21732),
                l = i(90169),
                c = i(57594),
                d = i(40229),
                u = i(43565),
                m = i(8677),
                _ = i(68912),
                p = i(92102),
                h = i(85673),
                v = i.n(h);
            let x = (0, s.PA)((e) => {
                var t;
                let {
                        track: i,
                        playContextParams: s,
                        className: h,
                        withDNDBlock: x,
                        isDragging: g,
                        draggingClassName: A,
                        ignoreDislikedStyles: C,
                        withSecondaryColor: b,
                        handleRemove: f,
                        withDislike: N,
                        withTrailer: y = !0,
                        beforeTitle: I,
                        removeButtonAriaLabel: T,
                        hideControls: k,
                    } = e,
                    E = (0, l.D)({ playContextParams: s, entityId: i.entityId }),
                    {
                        settings: { isMobile: O },
                    } = (0, c.g)(),
                    S = (0, n.useCallback)(
                        (e) =>
                            (0, r.jsx)(d.q, {
                                isAvailable: i.isAvailable,
                                isDisliked: i.isDisliked,
                                coverUri: i.coverUri,
                                title: i.title,
                                className: v().playButtonCell,
                                ignoreDislikedStyles: C,
                                radius: 'xs',
                                ...e,
                            }),
                        [C, i.coverUri, i.isAvailable, i.isDisliked, i.title],
                    );
                return (0, r.jsx)(p.C, {
                    className: (0, a.$)(h, { [v().trackWithDots]: x, [v().important]: x }),
                    track: i,
                    beforeBlock: x ? (0, r.jsx)(u.O, { className: (0, a.$)(v().dots, A), isDragging: g }) : void 0,
                    meta: (0, r.jsx)(_.j, { withArtistLink: !O, beforeTitle: I, track: i, ignoreDislikedStyles: C, withSecondaryColor: b }),
                    playButtonCellRender: S,
                    controls: (0, r.jsx)(m.Q, {
                        track: i,
                        className: v().controlsBarCell,
                        ignoreDislikedStyles: C,
                        utmLink: null == (t = s.contextData) ? void 0 : t.utmLink,
                        withSecondaryColor: b,
                        handleRemove: f,
                        withDislike: N,
                        withTrailer: y,
                        removeButtonAriaLabel: T,
                        hideControls: k,
                    }),
                    ...E,
                    'data-test-id': o.Kq.track.TRACK_PLAYLIST,
                });
            });
        },
        73474: (e, t, i) => {
            'use strict';
            var r;
            (i.d(t, { p: () => r }),
                (function (e) {
                    ((e.WEB_MAIN = 'web_main'),
                        (e.MAIN = 'main'),
                        (e.WEB_COLLECTION = 'web_collection'),
                        (e.NON_MUSIC = 'non_music'),
                        (e.KIDS = 'kids'),
                        (e.MAIN_NOLOGIN = 'main_nologin'),
                        (e.SEARCH = 'Search'),
                        (e.ARTIST = 'artist_web'),
                        (e.CONCERTS = 'concerts'),
                        (e.CONCERT_PAGE = 'concert_page'));
                })(r || (r = {})));
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
        78176: (e, t, i) => {
            'use strict';
            i.d(t, { V: () => A });
            var r = i(32290),
                a = i(63618),
                s = i(96103),
                n = i(55178),
                o = i(99923),
                l = i(21732),
                c = i(91027),
                d = i(50162),
                u = i(19740),
                m = i(86269),
                _ = i(71926),
                p = i(47745),
                h = i(32641),
                v = i(57594),
                x = i(16510),
                g = i.n(x);
            let A = (0, s.PA)((e) => {
                let { artist: t, className: i } = e,
                    { fullscreenPlayer: s } = (0, v.g)(),
                    x = (0, h.Z)(t.url),
                    C = (0, p.N)(),
                    b = (0, n.useMemo)(() => {
                        var e;
                        return (
                            'decomposed' in t &&
                            (null == (e = t.decomposed) ? void 0 : e.reduce((e, t) => (e.push((0, r.jsx)(A, { artist: t, className: i }, t.id)), e), []))
                        );
                    }, [t, i]),
                    f = (0, c.c)((e) => {
                        (s.modal.isOpened && s.modal.close(), C({ to: o.AppScreen.ArtistScreen }), x(e));
                    });
                return (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsxs)(u.Dr, {
                            className: (0, a.$)(g().root, i),
                            onClick: f,
                            'data-test-id': l.OA.artists.ARTIST_ITEM,
                            children: [
                                (0, r.jsx)(m.t, {
                                    radius: 'round',
                                    className: g().cover,
                                    children: (0, r.jsx)(d._V, { withAvatarReplace: !0, src: t.coverUri, size: 100, fit: 'contain', className: g().image }),
                                }),
                                (0, r.jsx)(_.HL, { variant: 'span', size: 'm', weight: 'medium', lineClamp: 1, children: t.name }),
                            ],
                        }),
                        b,
                    ],
                });
            });
        },
        79238: (e, t, i) => {
            'use strict';
            i.d(t, { b: () => s });
            var r = i(64605),
                a = i(97647);
            let s = (e) => {
                switch (e.type) {
                    case r._.PODCAST:
                        return a.c.PODCAST;
                    case r._.AUDIOBOOK:
                        return a.c.AUDIOBOOK;
                    case r._.FAIRY_TALE:
                        return a.c.FAIRY_TALE;
                    default:
                        return a.c.ALBUM;
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
                    let { code: i = 'E_INTERNAL', data: a = {}, ...s } = t,
                        n = e || 'Internal error';
                    (super(n, s), (this.message = n), (this.code = i), (this.data = a), (this.stack = Error(n).stack), Object.setPrototypeOf(this, r.prototype));
                }
            }
        },
        80229: (e, t, i) => {
            'use strict';
            i.d(t, { AS: () => m, Yw: () => r, JU: () => a, DQ: () => h, Ve: () => v });
            var r,
                a,
                s = i(98411),
                n = (function () {
                    function e(e) {
                        ((this.observableValue = (0, s.vP)(e)), (this.prevValueByListener = new Map()));
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
                                this.observableValue.subscribe(function (a) {
                                    if (a !== i.prevValueByListener.get(e)) {
                                        if (t.skipFirstChange && r) {
                                            r = !1;
                                            return;
                                        }
                                        (i.prevValueByListener.set(e, a), e(a));
                                    }
                                })
                            );
                        }),
                        e
                    );
                })();
            !(function () {
                function e(e) {
                    ((this.observableValue = (0, s.EW)(e)), (this.prevValueByListener = new Map()));
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
                            this.observableValue.subscribe(function (a) {
                                if (a !== i.prevValueByListener.get(e)) {
                                    if (t.skipFirstChange && r) {
                                        r = !1;
                                        return;
                                    }
                                    (i.prevValueByListener.set(e, a), e(a));
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
            })(a || (a = {}));
            let _ = new Map([
                    [r.EXPLICIT_ICON, a.E],
                    [r.AGE_18_ICON, a.AGE_18],
                    [r.AGE_16_ICON, a.AGE_16],
                    [r.AGE_12_ICON, a.AGE_12],
                    [r.EXCLAMATION_ICON, a.EXCLAMATION],
                ]),
                p = [r.EXPLICIT_ICON, r.AGE_18_ICON, r.AGE_16_ICON, r.AGE_12_ICON, r.EXCLAMATION_ICON],
                h = (e) => {
                    let t = ((e, t) => {
                        for (let i of t) {
                            let t = u(e, i)[0];
                            if (t) return t;
                        }
                        return null;
                    })(e, p);
                    if (null === t) return null;
                    let i = _.get(t.type);
                    return void 0 !== i ? i : null;
                },
                v = (e, t) => u(e, t).length > 0;
        },
        80536: (e, t, i) => {
            'use strict';
            i.d(t, { B: () => r });
            let r = (0, i(55178).createContext)({ observeElement: () => {}, unobserveElement: () => {} });
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
        89661: (e) => {
            e.exports = {
                root: 'PlaylistTrackShimmer_root__nZ9KR',
                infoContainer: 'PlaylistTrackShimmer_infoContainer__xLd7a',
                textContainer: 'PlaylistTrackShimmer_textContainer__QI5cC',
                title: 'PlaylistTrackShimmer_title__MojYd',
                cover: 'PlaylistTrackShimmer_cover__xyDhR',
                action: 'PlaylistTrackShimmer_action__tT5xx',
            };
        },
        90006: (e) => {
            e.exports = { explicitMark: 'ExplicitMarkIcon_explicitMark__0BPeQ' };
        },
        90404: (e, t, i) => {
            'use strict';
            var r;
            (i.d(t, { _: () => r }),
                (function (e) {
                    ((e.ALBUM_ITEM = 'album_item'),
                        (e.ARTIST_ITEM = 'artist_item'),
                        (e.PLAYLIST_ITEM = 'playlist_item'),
                        (e.TRACK_ITEM = 'track_item'),
                        (e.LIKED_PLAYLIST_ITEM = 'liked_playlist_item'),
                        (e.PERSONAL_PLAYLIST_ITEM = 'personal_playlist_item'),
                        (e.WAVE_ITEM = 'wave_item'),
                        (e.WAVE_AGENT_ITEM = 'wave_agent_item'),
                        (e.MIX = 'mix'),
                        (e.MIX_CARD_ITEM = 'mix_card_item'),
                        (e.LIKED_ALBUM_ITEM = 'liked_album_item'),
                        (e.PRESAVED_ALBUM_ITEM = 'presaved_album_item'),
                        (e.CHART_ALBUM_ITEM = 'chart_album_item'),
                        (e.NON_MUSIC_ALBUM_ITEM = 'non_music_album_item'),
                        (e.MENU_ITEM = 'menu_item'),
                        (e.DONATION_ITEM = 'donation_item'),
                        (e.CLIP = 'clip'),
                        (e.CLIP_ITEM = 'clip_item'),
                        (e.CONCERT_ITEM = 'concert_item'),
                        (e.QUERY_TO_VIBE_ITEM = 'q2v_item'));
                })(r || (r = {})));
        },
        91063: (e) => {
            e.exports = {
                root: 'AlbumTrackShimmer_root__fBjbK',
                infoContainer: 'AlbumTrackShimmer_infoContainer__4fdAk',
                coverContainer: 'AlbumTrackShimmer_coverContainer__frW12',
                textContainer: 'AlbumTrackShimmer_textContainer__5wNPM',
                title: 'AlbumTrackShimmer_title__HC_Pa',
                cover: 'AlbumTrackShimmer_cover__36UkV',
                action: 'AlbumTrackShimmer_action__oI5t5',
            };
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
        92102: (e, t, i) => {
            'use strict';
            i.d(t, { C: () => f });
            var r = i(32290),
                a = i(63618),
                s = i(96103),
                n = i(55178),
                o = i(91027),
                l = i(58359),
                c = i(71735),
                d = i(2969),
                u = i(23352),
                m = i(46200),
                _ = i(5537),
                p = i(28999),
                h = i(72676),
                v = i(57594),
                x = i(1444),
                g = i(60900),
                A = i(54171),
                C = i(35587),
                b = i.n(C);
            let f = (0, s.PA)((e) => {
                var t;
                let {
                        className: i,
                        track: s,
                        meta: C,
                        beforeBlock: f,
                        controls: N,
                        playButtonCellRender: y,
                        withLightning: I,
                        isPlaying: T,
                        isCurrent: k,
                        togglePlay: E,
                        restartPlay: O,
                        onPlayClick: S,
                        playButtonIconSize: j,
                        skipFreemiumCloseListeningPaywall: L = !1,
                        ...P
                    } = e,
                    { shouldShowBuySubscriptionModal: w, showBuySubscriptionModal: R } = (0, m.q)(),
                    {
                        track: M,
                        fullscreenPlayer: D,
                        settings: { isMobile: F },
                        album: B,
                        albumCPA: { isPlusCPAPlayerBarEnabled: W },
                        paywall: { modal: U },
                    } = (0, v.g)(),
                    { ref: z, intersectionPropertyId: H } = (0, u.n)(),
                    Y = (0, d.b)(),
                    $ = (0, c.P)(),
                    V = ((e) => {
                        let { track: t, withLightning: i } = e,
                            { formatMessage: r } = (0, g.A)();
                        return t.isAvailable
                            ? [t.artistsNames, t.title, t.version, i && r({ id: 'entity-names.popular-among-users' })].filter(Boolean).join(' ')
                            : ''
                                  .concat(r({ id: 'extra-explicit.play-unavailable' }), ' ')
                                  .concat(t.artistsNames, ' ')
                                  .concat(t.title);
                    })({ withLightning: I, track: s }),
                    G = ((e) => {
                        let { sonataState: t } = (0, v.g)(),
                            i = t.status === h.MT.LOADING_MEDIA_SOURCE || t.status === h.MT.BUFFERING;
                        if (e && t.entityMeta) {
                            let r = t.entityMeta.entityId;
                            return i && r === e;
                        }
                        return i;
                    })(s.entityId),
                    K = W(B.id, null == (t = B.meta) ? void 0 : t.isNonMusic),
                    X = s.isAvailable && w && !K,
                    q = (0, _.N)(),
                    J = s.isAvailable && q && !K && !L,
                    Z = (0, A.w)({ track: s, callback: E }),
                    Q = (0, o.c)(() => {
                        M.open({ trackId: s.id, albumId: s.albumId });
                    }),
                    ee = (0, A.w)({ track: s, callback: Q }),
                    { sendPlaySearchFeedback: et } = (0, p.z)(),
                    [ei, er] = (0, n.useState)(!1),
                    ea = (0, o.c)(() => {
                        if (!$()) {
                            if (X) return void R();
                            if (J) return void U.open();
                            (ei || T || (er(!0), null == et || et()), Z(), Y(!T), null == S || S(!T));
                        }
                    }),
                    es = (0, o.c)(() => {
                        if (T) return void O();
                        ea();
                    }),
                    en = (0, o.c)((e) => {
                        if (!s.isAvailable && !s.hasModalAccess) {
                            (w && s.isAvailableOnlyForPlus && R(), q && s.isAvailableOnlyForPlus && U.open());
                            return;
                        }
                        if (X) return void R();
                        let t = !F && (2 === e.detail || (1 === e.detail && s.hasTrackLink && !D.modal.isOpened));
                        return J && !t
                            ? void U.open()
                            : ((0, l.P)(e, b().ripple), F)
                              ? void ea()
                              : 2 === e.detail
                                ? void es()
                                : void (1 === e.detail && s.hasTrackLink && !D.modal.isOpened && (ee(), J && U.open()));
                    }),
                    eo = null == y ? void 0 : y({ onPlayButtonClick: ea, isPlaying: T, isCurrent: k, isLoading: G, playButtonIconSize: j });
                return (0, r.jsxs)(x.C, {
                    ref: z,
                    'aria-label': V,
                    'data-intersection-property-id': H,
                    onClick: en,
                    className: (0, a.$)(b().root, { [b().root_disabled]: !s.isAvailable, [b().root_current]: k && F }, i),
                    ...P,
                    children: [f, eo, C, N],
                });
            });
        },
        92565: (e) => {
            e.exports = { downloadingProgress: 'TrackDownloadControl_downloadingProgress__wNg2W', progress: 'TrackDownloadControl_progress__K_OhO' };
        },
        94218: (e, t, i) => {
            'use strict';
            i.d(t, { H: () => _ });
            var r = i(32290),
                a = i(21916),
                s = i(39407),
                n = i(21732),
                o = i(91027),
                l = i(63423),
                c = i(71926),
                d = i(78648),
                u = i(70204),
                m = i(34186);
            let _ = (e) => {
                let { size: t = 'm', variant: i = 'default', color: _ = 'primary', withRipple: p = !0, buttonText: h, isBlock: v, key: x, className: g } = e,
                    A = (0, a.useRouter)(),
                    C = (0, m.N)().get(u.QG),
                    b = (0, o.c)(() => {
                        C.authorizationUrl && ((0, d.uV)({ stage: 'attempt-start', trigger: 'user' }), A.push(C.authorizationUrl));
                    });
                return (0, r.jsx)(
                    l.$,
                    {
                        onClick: b,
                        className: g,
                        isBlock: v,
                        color: _,
                        variant: i,
                        size: t,
                        radius: 'xxxl',
                        withRipple: p,
                        'data-test-id': n.S7.UNAUTHORIZED_BUTTON,
                        children: h || (0, r.jsx)(c.HL, { variant: 'div', size: 'l', lineClamp: 1, children: (0, r.jsx)(s.A, { id: 'authorization.enter-button' }) }),
                    },
                    x,
                );
            };
        },
        97841: (e, t, i) => {
            'use strict';
            i.d(t, { w: () => y });
            var r = i(32290),
                a = i(63618),
                s = i(96103),
                n = i(60900),
                o = i(31010),
                l = (function (e) {
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
                        case l.YANDEX:
                            if ('ru' === t) return 'https://ya.ru';
                            return;
                        case l.YANDEX_PROJECTS:
                            return 'https://yandex.'.concat(t, '/all?lang=').concat(i);
                        case l.COPYRIGHT_HOLDER:
                            return 'https://yandex.'.concat(t, '/support/music/performers-and-copyright-holders/copyright.html?lang=').concat(i);
                        case l.AGREEMENT:
                            return 'https://yandex.ru/legal/music_termsofuse?lang='.concat(i);
                        case l.RECOMMENDATION_RULES:
                            return 'https://music.yandex.ru/legal/recommendations/ru/#music';
                        case l.HELP:
                            return 'https://yandex.'.concat(t, '/support/music/index.html?lang=').concat(i);
                        case l.PRIVACY_POLICY:
                            return 'https://yandex.'.concat(t, '/legal/confidential/').concat(i);
                    }
                },
                d = (e) => {
                    let { formatMessage: t, language: i, tld: r, year: a } = e;
                    return {
                        year: a,
                        yandexMusic: { id: l.YANDEX, title: t({ id: 'footer.yandex-music' }), url: c(l.YANDEX, r, i) },
                        yandexProjects: { id: l.YANDEX_PROJECTS, title: t({ id: 'footer.yandex-project' }), url: c(l.YANDEX_PROJECTS, r, i) },
                    };
                };
            var u = i(15559),
                m = i(8626);
            let _ = (e) => e(new Date(), (0, m.m)());
            var p = i(61945),
                h = i(57594),
                v = i(77088),
                x = i.n(v),
                g = i(21732),
                A = i(71926),
                C = i(61258);
            let b = (e) => {
                    let { className: t, data: i } = e;
                    return (0, r.jsxs)('div', {
                        className: (0, a.$)(x().copyrights, t),
                        'data-test-id': g.S7.FOOTER_COPYRIGHTS,
                        children: [
                            (0, r.jsxs)(A.HL, {
                                variant: 'span',
                                type: 'text',
                                size: 's',
                                weight: 'medium',
                                className: x().text,
                                children: [
                                    '\xa9 ',
                                    i.year,
                                    ' \xa0',
                                    (0, r.jsx)(C.N, {
                                        target: '_blank',
                                        href: i.yandexMusic.url,
                                        className: (0, a.$)(x().copyrightLink, x().yandexMusicLink),
                                        'data-test-id': g.S7.FOOTER_YANDEX_MUSIC_LINK,
                                        children: i.yandexMusic.title,
                                    }),
                                ],
                            }),
                            (0, r.jsx)(A.HL, { variant: 'span', type: 'text', size: 's', weight: 'medium', children: ' • ' }),
                            (0, r.jsx)(C.N, {
                                target: '_blank',
                                href: i.yandexProjects.url,
                                className: x().copyrightLink,
                                'data-test-id': g.S7.FOOTER_YANDEX_PROJECT_LINK,
                                children: i.yandexProjects.title,
                            }),
                        ],
                    });
                },
                f = (e) => {
                    let { disclaimer: t, links: i } = e;
                    return (0, r.jsxs)('div', {
                        className: x().links,
                        children: [
                            (0, r.jsx)('ol', {
                                className: x().list,
                                'data-test-id': g.S7.FOOTER_LINKS_LIST,
                                children: i.map((e) => {
                                    let { id: t, title: i, url: a } = e;
                                    return (0, r.jsx)(
                                        'li',
                                        {
                                            className: x().item,
                                            children: (0, r.jsx)(C.N, { target: '_blank', href: a, className: x().link, 'data-test-id': g.S7.FOOTER_LINK, children: i }),
                                        },
                                        t,
                                    );
                                }),
                            }),
                            (0, r.jsx)(A.HL, {
                                variant: 'span',
                                type: 'text',
                                size: 'm',
                                weight: 'medium',
                                className: x().explicitText,
                                tabIndex: 0,
                                dangerouslySetInnerHTML: { __html: t },
                                'data-test-id': g.S7.FOOTER_DISCLAIMER_TEXT,
                            }),
                        ],
                    });
                },
                N = (e) => {
                    let { className: t, data: i } = e;
                    return (0, r.jsxs)('footer', {
                        className: (0, a.$)(x().root, x().important, t),
                        'data-test-id': g.S7.FOOTER,
                        children: [(0, r.jsx)(f, { links: i.links, disclaimer: i.disclaimer }), (0, r.jsx)(b, { data: i.copyrights })],
                    });
                };
            (0, s.PA)((e) => {
                let { className: t } = e,
                    { location: i } = (0, h.g)(),
                    { formatDate: a, formatMessage: s } = (0, n.A)(),
                    { language: o } = (0, p.h)(),
                    l = d({ formatMessage: s, language: o, tld: i.tld, year: _(a) });
                return (0, r.jsx)(b, { className: t, data: l });
            });
            let y = (0, s.PA)((e) => {
                var t;
                let { className: i } = e,
                    { experiments: s, location: m, user: v } = (0, h.g)(),
                    { formatDate: g, formatMessage: A } = (0, n.A)(),
                    { isEnabled: C } = null != (t = (0, o.P)()) ? t : {},
                    { language: b } = (0, p.h)(),
                    f = ((e) => {
                        let { checkExperiment: t, formatMessage: i, isWebApplication: r, language: a, tld: s, userRegion: n, year: o } = e;
                        return {
                            links: ((e) => {
                                let { formatMessage: t, isWebApplication: i, tld: r, language: a, userRegion: s } = e,
                                    n = { id: l.COPYRIGHT_HOLDER, title: t({ id: 'footer.links-copyright-holders' }), url: c(l.COPYRIGHT_HOLDER, r, a) },
                                    o = { id: l.PRIVACY_POLICY, title: t({ id: 'footer.links-privacy-policy' }), url: c(l.PRIVACY_POLICY, r, a) },
                                    d = { id: l.AGREEMENT, title: t({ id: 'footer.links-terms' }), url: c(l.AGREEMENT, r, a) },
                                    u = { id: l.RECOMMENDATION_RULES, title: t({ id: 'footer.links-recommendation-rules' }), url: c(l.RECOMMENDATION_RULES, r, a) },
                                    m = { id: l.HELP, title: t({ id: 'footer.links-help' }), url: c(l.HELP, r, a) },
                                    _ = [n, d, u];
                                return (i && 'ru' === s && _.push(o), _.push(m), _);
                            })({ formatMessage: i, isWebApplication: r, language: a, tld: s, userRegion: n }),
                            disclaimer: (0, u.v)({
                                checkExperiment: t,
                                getDisclaimerContent: () => i({ id: 'footer.disclaimer-content' }),
                                getExplicitContent: () => i({ id: 'footer.explicit-content' }),
                                userRegion: n,
                            }),
                            copyrights: d({ formatMessage: i, language: a, tld: s, year: o }),
                        };
                    })({
                        checkExperiment: (e, t) => s.checkExperiment(e, t),
                        formatMessage: A,
                        isWebApplication: !1,
                        tld: m.tld,
                        language: b,
                        userRegion: v.account.data.userSessionRegionIso,
                        year: _(g),
                    });
                return (0, r.jsx)(N, { className: (0, a.$)({ [x().root_withOffsetForDeeplink]: C }, i), data: f });
            });
        },
        98350: (e, t, i) => {
            'use strict';
            i.d(t, { X: () => r });
            var r = (function (e) {
                return ((e.PLAYLIST = 'playlist'), (e.ALBUM = 'album'), e);
            })({});
        },
    },
    (e) => {
        (e.O(
            0,
            [
                7412, 1010, 8461, 7231, 2147, 9763, 4517, 1256, 3608, 6706, 1311, 1588, 5472, 8378, 900, 2536, 2146, 3353, 2474, 8035, 347, 2732, 1410, 1417, 4250, 4793,
                8506, 6050, 5806, 6241, 7702, 6874, 9155, 861, 4668, 9740, 1175, 4499, 8915, 6341, 1647, 2126, 6881, 4220, 9562, 7358,
            ],
            () => e((e.s = 22334)),
        ),
            (_N_E = e.O()));
    },
]);
