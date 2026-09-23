(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [1468],
    {
        3785: (e, t, r) => {
            'use strict';
            var a;
            (r.d(t, { M: () => a }),
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
                })(a || (a = {})));
        },
        5749: (e, t, r) => {
            'use strict';
            r.d(t, { c: () => m });
            var a = r(17811),
                i = r(92146),
                l = r(74416),
                o = r(91027),
                s = r(79374),
                n = r(84782),
                d = r(2792),
                c = r(37240),
                u = r(62376);
            let m = () => {
                let { hash: e } = (0, l.gf)(),
                    t = (0, u.U)(),
                    r = (0, l.st)(),
                    { pageId: m } = (0, c.$)(),
                    { blockId: v, blockType: _, blockPosX: f, blockPosY: p } = (0, n.N)(),
                    { objectType: g, objectId: x, objectPosX: h, objectPosY: A, objectsCount: N, mainObjectId: T, mainObjectType: j } = (0, d.J)();
                return (0, o.c)((l, o) => {
                    if (!r || !m) return;
                    let n = s.W[m];
                    if (!n) return;
                    let d = {
                        to: l,
                        objectType: g,
                        objectId: x,
                        objectPosX: h,
                        objectPosY: A,
                        hash: e,
                        pageId: n,
                        mainObjectType: j,
                        mainObjectId: T,
                        entityType: _,
                        entityId: v,
                        entityPosX: f,
                        entityPosY: p,
                        objectsCount: N,
                        from: n,
                    };
                    o && (d.deepLink = o);
                    let c = (0, a.F)({ params: d, logger: t, context: 'useSendEventOnDonationNavigated' });
                    c && (0, i.QS)(r.evgenInstance, c);
                });
            };
        },
        8576: (e, t, r) => {
            'use strict';
            r.d(t, { I: () => m });
            var a = r(32290),
                i = r(63618),
                l = r(21732),
                o = r(63423),
                s = r(82586),
                n = r(86269),
                d = r(11323),
                c = r(78166),
                u = r.n(c);
            let m = (e) => {
                let { coverVariant: t, coverUri: r, isAvailable: c, className: m, withPlusBadge: v, onClick: _, 'aria-label': f, customCover: p, buttonClassName: g } = e;
                return (0, a.jsxs)(n.t, {
                    radius: 'round' === t ? 'round' : 'm',
                    className: (0, i.$)(u().root, m, { [u().root_hoverable]: !!_ }),
                    children: [
                        (0, a.jsx)(o.$, {
                            className: (0, i.$)(u().coverButton, g),
                            onClick: _,
                            'aria-label': f,
                            tabIndex: _ ? 0 : -1,
                            disabled: !_,
                            'data-test-id': l.S7.ENTITY_COVER_BUTTON,
                            children: p || (0, a.jsx)(d.B, { fit: 'cover', src: r, size: 300, className: u().coverImage, withAvatarReplace: !0, isAvailable: c }),
                        }),
                        v && (0, a.jsx)(s.I, { variant: 'plusBadge', className: u().plusBadge }),
                    ],
                });
            };
        },
        8868: (e, t, r) => {
            'use strict';
            r.d(t, { A: () => m });
            var a = r(55178),
                i = r(17811),
                l = r(99923),
                o = r(90153),
                s = r(74416),
                n = r(91027),
                d = r(62376),
                c = r(79374),
                u = r(37240);
            let m = function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    { autoSend: t = !0 } = e,
                    r = (0, s.st)(),
                    m = (0, d.U)(),
                    { hash: v } = (0, s.gf)(),
                    { pageId: _ } = (0, u.$)(),
                    f = (0, n.c)(function () {
                        let { deepLink: e } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                        if (
                            !r ||
                            !_ ||
                            !v ||
                            !(() => {
                                for (let [e, t] of new URLSearchParams(window.location.search))
                                    if ((e.startsWith('utm_') || 'ref_id' === e) && '' !== t.trim()) return !0;
                                return !1;
                            })()
                        )
                            return;
                        let t = c.W[_];
                        if (!t) return;
                        let a = {
                                hash: v,
                                pageId: l.AppScreen.Link,
                                entityType: l.EntityTypes.Deeplink,
                                entityId: l.EntityTypes.Deeplink,
                                from: l.AppScreen.Link,
                                to: t,
                                deepLink: null != e ? e : window.location.href,
                            },
                            s = (0, i.F)({ params: a, logger: m, context: 'useSendDeeplinkNavigationEvent' });
                        s && (0, o.ID)(r.evgenInstance, s);
                    });
                return (
                    (0, a.useEffect)(() => {
                        t && f();
                    }, [t, f]),
                    (0, n.c)(function () {
                        let { deepLink: e } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                        t || f({ deepLink: e });
                    })
                );
            };
        },
        10733: (e, t, r) => {
            'use strict';
            r.d(t, { G: () => l });
            var a = r(91945),
                i = r(50891);
            class l extends i.m {
                constructor(e, t) {
                    (super(e, { code: 'E_HTTP_CLIENT_NON_2XX_3XX_RESPONSE', cause: t.cause }),
                        (0, a._)(this, 'name', 'HttpErrorException'),
                        (0, a._)(this, 'statusCode', void 0),
                        (this.statusCode = t.statusCode),
                        Object.setPrototypeOf(this, l.prototype));
                }
            }
        },
        17024: (e, t, r) => {
            'use strict';
            r.d(t, { L: () => i });
            let a = /^(0|[1-9]\d*)$/;
            function i(e) {
                return void 0 !== e && !(e.length > 40) && a.test(e);
            }
        },
        18870: (e, t, r) => {
            'use strict';
            var a;
            (r.d(t, { $: () => a }),
                (function (e) {
                    ((e.RU = 'ru'),
                        (e.EN = 'en'),
                        (e.UK = 'uk'),
                        (e.BE = 'be'),
                        (e.KK = 'kk'),
                        (e.HY = 'hy'),
                        (e.AZ = 'az'),
                        (e.KA = 'ka'),
                        (e.HE = 'he'),
                        (e.UZ = 'uz'),
                        (e.TG = 'tg'),
                        (e.TR = 'tr'),
                        (e.JA = 'ja'),
                        (e.ZH = 'zh'),
                        (e.KO = 'ko'),
                        (e.TH = 'th'),
                        (e.ID = 'id'),
                        (e.DE = 'de'),
                        (e.EL = 'el'),
                        (e.RO = 'ro'),
                        (e.MO = 'mo'),
                        (e.AR = 'ar'));
                })(a || (a = {})));
        },
        20279: (e) => {
            e.exports = {
                root: 'OfflineArtistPage_root__u1qco',
                important: 'OfflineArtistPage_important__Kt9GU',
                header: 'OfflineArtistPage_header__PR4N7',
                averageColorBackground: 'OfflineArtistPage_averageColorBackground__6WlL4',
                content: 'OfflineArtistPage_content__Y71zx',
                footer: 'OfflineArtistPage_footer__mB2rh',
            };
        },
        22644: (e, t, r) => {
            'use strict';
            r.d(t, { _: () => i });
            var a = r(55178);
            let i = (e, t) => {
                (0, a.useEffect)(
                    () => () => {
                        window.location.pathname.includes(e.selfLink) || e.reset();
                    },
                    [e, t],
                );
            };
        },
        22748: (e, t, r) => {
            'use strict';
            r.d(t, { h: () => i, v: () => l });
            var a = r(55178);
            let i = (0, a.createContext)(null);
            function l() {
                return (0, a.useContext)(i);
            }
        },
        22873: (e) => {
            e.exports = {
                root: 'ArtistPage_root__QPg3p',
                averageColorBackground: 'ArtistPage_averageColorBackground__wXTSY',
                header: 'ArtistPage_header__tQnNe',
                content: 'ArtistPage_content__iZHVN',
                footer: 'ArtistPage_footer__8m6P9',
                carouselBlockHeader: 'ArtistPage_carouselBlockHeader__CtGDa',
                concertsBlock: 'ArtistPage_concertsBlock__1BfM8',
                carouselBlock: 'ArtistPage_carouselBlock__7tYRK',
            };
        },
        28724: (e, t, r) => {
            'use strict';
            r.d(t, { M: () => j });
            var a = r(32290),
                i = r(63618),
                l = r(96103),
                o = r(55178),
                s = r(39407),
                n = r(21732),
                d = r(91027),
                c = r(63423),
                u = r(71926),
                m = r(70204),
                v = r(34186),
                _ = r(83808),
                f = r(20472),
                p = r(32641),
                g = r(85017),
                x = r(19379),
                h = r(61258),
                A = r(76768),
                N = r.n(A);
            let T = {
                    [g.n.ALBUM]: (0, a.jsx)(s.A, { id: 'extra-explicit.confirm-unsafe-album' }),
                    [g.n.PODCAST]: (0, a.jsx)(s.A, { id: 'extra-explicit.confirm-unsafe-podcast' }),
                    [g.n.ARTIST]: (0, a.jsx)(s.A, { id: 'extra-explicit.confirm-unsafe-artist' }),
                    [g.n.TRACK]: (0, a.jsx)(s.A, { id: 'extra-explicit.confirm-unsafe-track' }),
                    [g.n.AUDIOBOOK]: (0, a.jsx)(s.A, { id: 'extra-explicit.confirm-unsafe-audiobook' }),
                    [g.n.CLIP]: (0, a.jsx)(s.A, { id: 'extra-explicit.confirm-unsafe-clip' }),
                },
                j = (0, l.PA)((e) => {
                    var t;
                    let { modalState: r, data: l, onClose: A, className: j } = e,
                        E = null != l ? l : null == r ? void 0 : r.modalData,
                        b = (0, _.W)(),
                        C = (0, p.Z)(f.Z.main.href),
                        S = (0, v.N)().get(m.U2),
                        I = (0, d.c)(() => {
                            if (A) return A();
                            (b.canBack && b.back(), C());
                        }),
                        O = (null == E || null == (t = E.details) ? void 0 : t.url) && E.details.text,
                        k = (0, d.c)(() => {
                            var e;
                            null == r || r.setConfirmUnsafeDisclaimer(!0);
                            let t = S.get(x.c.ExEx),
                                a = new Date(),
                                i = a.setMinutes(a.getMinutes() + 15),
                                l =
                                    null != (e = null == r ? void 0 : r.entityKey)
                                        ? e
                                        : ''.concat(null == r ? void 0 : r.entityType, '_').concat(null == r ? void 0 : r.entityId);
                            (t ? S.set(x.c.ExEx, [...t, l], { expires: new Date(i) }) : S.set(x.c.ExEx, [l], { expires: new Date(i) }),
                                null == A || A(),
                                (null == r ? void 0 : r.onDisclaimerConfirmHandler) && r.onDisclaimerConfirmHandler());
                        }),
                        y = (0, d.c)(() => {
                            ((null == r ? void 0 : r.shouldHistoryBack) ? (null == A || A(), b.canBack && b.back(), C()) : null == A || A(),
                                (null == r ? void 0 : r.onDisclaimerRejectHandler) && r.onDisclaimerRejectHandler());
                        });
                    (0, o.useEffect)(
                        () => () => {
                            null == r || r.reset();
                        },
                        [r],
                    );
                    let P = (0, o.useMemo)(() => {
                            if (E) {
                                var e, t;
                                return (0, a.jsxs)(a.Fragment, {
                                    children: [
                                        (0, a.jsx)(u.DZ, {
                                            variant: 'h4',
                                            size: 'l',
                                            className: (0, i.$)(N().title, N().text),
                                            'data-test-id': n.OA.disclaimer.DISCLAIMER_TITLE,
                                            children: E.title,
                                        }),
                                        (0, a.jsx)(u.HL, {
                                            variant: 'div',
                                            size: 'l',
                                            weight: 'normal',
                                            className: N().text,
                                            'data-test-id': n.OA.disclaimer.DISCLAIMER_DESCRIPTION,
                                            children: E.description,
                                        }),
                                        O &&
                                            (0, a.jsx)(h.N, {
                                                href: null == (e = E.details) ? void 0 : e.url,
                                                className: N().link,
                                                children: (0, a.jsx)(u.HL, {
                                                    variant: 'span',
                                                    size: 'l',
                                                    weight: 'normal',
                                                    children: null == (t = E.details) ? void 0 : t.text,
                                                }),
                                            }),
                                    ],
                                });
                            }
                            return null;
                        }, [E, O]),
                        R = (0, o.useMemo)(
                            () =>
                                (null == r ? void 0 : r.type) === g.Z.UNSAFE
                                    ? (0, a.jsxs)('div', {
                                          className: N().buttons,
                                          children: [
                                              (0, a.jsx)(c.$, {
                                                  color: 'primary',
                                                  onClick: y,
                                                  size: 'l',
                                                  radius: 'xxxl',
                                                  className: N().button,
                                                  'data-test-id': n.OA.disclaimer.DISCLAIMER_REJECT_BUTTON,
                                                  children: (0, a.jsx)(s.A, { id: 'extra-explicit.reject-unsafe-entity' }),
                                              }),
                                              (0, a.jsx)(c.$, {
                                                  color: 'secondary',
                                                  onClick: k,
                                                  size: 'l',
                                                  radius: 'xxxl',
                                                  className: N().button,
                                                  'data-test-id': n.OA.disclaimer.DISCLAIMER_CONFIRM_BUTTON,
                                                  children: r.entityType && T[r.entityType],
                                              }),
                                          ],
                                      })
                                    : (0, a.jsx)('div', {
                                          className: N().buttons,
                                          children: (0, a.jsx)(c.$, {
                                              color: 'primary',
                                              onClick: I,
                                              size: 'l',
                                              radius: 'xxxl',
                                              className: N().button,
                                              'data-test-id': n.OA.disclaimer.DISCLAIMER_REJECT_BUTTON,
                                              children: (0, a.jsx)(s.A, { id: 'interface-actions.confirm' }),
                                          }),
                                      }),
                            [k, null == r ? void 0 : r.entityType, null == r ? void 0 : r.type, I, y],
                        );
                    return (0, a.jsx)('div', {
                        className: (0, i.$)(N().root, j),
                        'data-test-id': n.OA.disclaimer.DISCLAIMER_CONTENT,
                        children: (0, a.jsxs)('div', { className: N().container, children: [P, R] }),
                    });
                });
        },
        31286: (e, t, r) => {
            'use strict';
            r.d(t, { w: () => l });
            var a = r(55178),
                i = r(91027);
            let l = () => {
                let e = (0, a.useRef)(new Map());
                return (
                    (0, a.useLayoutEffect)(
                        () => (
                            e.current.size > 0 && e.current.clear(),
                            () => {
                                e.current.clear();
                            }
                        ),
                        [],
                    ),
                    (0, i.c)((t, r) => (e.current.has(t) ? e.current.get(t) : (e.current.set(t, r), r)))
                );
            };
        },
        33898: (e, t, r) => {
            'use strict';
            var a;
            (r.d(t, { Z: () => a }),
                (function (e) {
                    ((e.METHOD_NOT_SUPPORTED = 'E_BEACON_METHOD_NOT_SUPPORTED'),
                        (e.NOT_AVAILABLE = 'E_BEACON_NOT_AVAILABLE'),
                        (e.QUEUE_FAILED = 'E_BEACON_QUEUE_FAILED'),
                        (e.NO_RESPONSE_DATA = 'E_BEACON_NO_RESPONSE_DATA'),
                        (e.RETRY_EXHAUSTED = 'E_BEACON_RETRY_EXHAUSTED'));
                })(a || (a = {})));
        },
        37318: (e) => {
            e.exports = {
                root: 'PageHeaderShimmer_root__kqSwa',
                cover: 'PageHeaderShimmer_cover__ay2cr',
                content: 'PageHeaderShimmer_content__SdBKK',
                info: 'PageHeaderShimmer_info__cZkS2',
                entityName: 'PageHeaderShimmer_entityName__tlWnA',
                title: 'PageHeaderShimmer_title__xKG4e',
                meta: 'PageHeaderShimmer_meta__YWx0m',
                controls: 'PageHeaderShimmer_controls__gPErM',
                desktopPlayButton: 'PageHeaderShimmer_desktopPlayButton__R7EmH',
                button: 'PageHeaderShimmer_button__13qrG',
            };
        },
        38653: (e) => {
            e.exports = {
                root: 'PageHeaderArtist_root__QhL_a',
                playControl: 'PageHeaderArtist_playControl__N_3l_',
                playControl_withLogin: 'PageHeaderArtist_playControl_withLogin__H4TCQ',
                trailerControl: 'PageHeaderArtist_trailerControl__BWQXJ',
                likeControl: 'PageHeaderArtist_likeControl__oEdXe',
                menuControl: 'PageHeaderArtist_menuControl__8qi0J',
                pinControl: 'PageHeaderArtist_pinControl__dQToz',
                donateControl: 'PageHeaderArtist_donateControl__EX63H',
                controls: 'PageHeaderArtist_controls__U_6g7',
                main: 'PageHeaderArtist_main__VNnip',
                brandedControl: 'PageHeaderArtist_brandedControl__b6qhV',
                meta: 'PageHeaderArtist_meta__ZAlx_',
                label: 'PageHeaderArtist_label__rXyrB',
                donationButtonTooltip: 'PageHeaderArtist_donationButtonTooltip__G7XtX',
                tooltipText: 'PageHeaderArtist_tooltipText__aYfaU',
                closeTooltip: 'PageHeaderArtist_closeTooltip__z2w_O',
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
        40783: (e, t, r) => {
            'use strict';
            r.d(t, { Q: () => i });
            var a = r(55178);
            let i = (e, t) => ({
                topColorStyle: (0, a.useMemo)(() => {
                    if (void 0 === t) return;
                    let r = t - 17;
                    return { '--average-color-background': e, transform: 'translateY('.concat(t >= 17 ? 0 : r, 'px)'), opacity: 1 };
                }, [t, e]),
                headerStyle: (0, a.useMemo)(() => ({ '--average-color-background': e }), [e]),
            });
        },
        44338: (e, t, r) => {
            'use strict';
            r.d(t, { N: () => i });
            var a = r(31995);
            function i(e, t) {
                var r;
                return (0, a.Y)(e, null != (r = null == t ? void 0 : t.maxLength) ? r : 48, !!(null == t ? void 0 : t.truncateByLastSpace));
            }
        },
        45257: (e, t, r) => {
            'use strict';
            r.d(t, { $: () => p });
            var a = r(32290),
                i = r(63618),
                l = r(8055),
                o = r(55178);
            let s = (e) => {
                    let { style: t, forwardRef: r, context: i, ...l } = e,
                        o = (null == i ? void 0 : i.listAriaLabel) || void 0,
                        s = (null == i ? void 0 : i.listRole) || 'region';
                    return (0, a.jsx)('div', { 'aria-labelledby': 'virtual-grid-header', role: s, 'aria-label': o, style: { ...t }, ref: r, ...l });
                },
                n = (0, o.forwardRef)((e, t) => (0, a.jsx)(s, { forwardRef: t, ...e }));
            var d = r(39684),
                c = r.n(d);
            let u = (e) => {
                    let { style: t, forwardRef: r, withFooter: l, withHeader: o, withForceScroll: s, ...n } = e;
                    return (0, a.jsx)('div', {
                        className: (0, i.$)(c().scroller, { [c().scroller_withFooter]: l, [c().scroller_withHeader]: o, [c().scroller_withForceScroll]: s }),
                        style: { ...t },
                        ref: r,
                        ...n,
                        tabIndex: -1,
                    });
                },
                m = (0, o.forwardRef)((e, t) => (0, a.jsx)(u, { forwardRef: t, ...e }));
            var v = r(62060),
                _ = r(31417);
            let f = (e) => {
                    let {
                            pageSize: t,
                            onPageHandler: r,
                            onRangeHandler: i,
                            debounceDurationInMs: l = 100,
                            totalCount: s = 0,
                            shouldTriggerRangeChangedOn: n = [],
                            endReached: d,
                            virtuosoRef: c,
                            ...u
                        } = e,
                        [m, f] = (0, o.useState)(null),
                        p = (0, o.useMemo)(
                            () =>
                                (0, v.A)((e) => {
                                    if ((null == i || i(e), n.length > 0 && f(e), t && r)) {
                                        let a = Math.floor(e.endIndex / t) + 1,
                                            i = Math.floor(e.startIndex / t);
                                        for (let e = i; e < a; e++) r(e);
                                    }
                                }, l),
                            [l, i, t, r, n],
                        );
                    (0, o.useEffect)(() => {
                        n.length > 0 && m && p(m);
                    }, n);
                    let g = (0, o.useMemo)(() => {
                        if (d)
                            return (0, v.A)((e) => {
                                d(e);
                            }, l);
                    }, [d, l]);
                    return (0, a.jsx)(_.sN, { ref: c, rangeChanged: p, totalCount: s, endReached: g, ...u });
                },
                p = (e) => {
                    let {
                            className: t,
                            customComponents: r,
                            onGetDataByPage: s,
                            onGetDataByRange: d,
                            itemClassName: u,
                            itemContentCallback: v,
                            listClassName: _,
                            overscan: p = 700,
                            pageSize: g = 20,
                            totalCount: x,
                            totalRequests: h,
                            debounceDurationInMs: A,
                            initialItemCount: N,
                            minInitialItemCount: T = 20,
                            handleRef: j,
                            alwaysShowScrollbar: E = !1,
                            testId: b,
                            isMobileLayout: C = !1,
                            shouldTriggerRangeChangedOn: S,
                            ...I
                        } = e,
                        [O, k] = (0, o.useState)(!1),
                        y = (0, o.useMemo)(
                            () =>
                                (0, l.A)((e) => {
                                    k(e);
                                }, 100),
                            [],
                        ),
                        P = (0, o.useMemo)(() => {
                            var e, t;
                            return C
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
                        }, [r, h, C]),
                        R = N ? Math.min(N, T) : void 0;
                    return (0, a.jsxs)('div', {
                        className: (0, i.$)(c().root, { [c().root_scrolling]: O || E, [c().root_notScrolling]: !O && !E }, t),
                        'data-test-id': b,
                        children: [
                            C && (null == r ? void 0 : r.Header) && r.Header(),
                            (0, a.jsx)(f, {
                                overscan: p,
                                components: P,
                                listClassName: _,
                                itemClassName: u,
                                isScrolling: y,
                                itemContent: v,
                                scrollerRef: j,
                                totalCount: x,
                                pageSize: g,
                                onPageHandler: s,
                                onRangeHandler: d,
                                debounceDurationInMs: A,
                                initialItemCount: R,
                                shouldTriggerRangeChangedOn: S,
                                ...I,
                            }),
                            C && (null == r ? void 0 : r.Footer) && r.Footer(),
                        ],
                    });
                };
        },
        48977: (e, t, r) => {
            'use strict';
            r.d(t, { C: () => m });
            var a = r(17811),
                i = r(92146),
                l = r(74416),
                o = r(91027),
                s = r(79374),
                n = r(84782),
                d = r(2792),
                c = r(37240),
                u = r(62376);
            let m = () => {
                let { hash: e } = (0, l.gf)(),
                    t = (0, u.U)(),
                    r = (0, l.st)(),
                    { pageId: m } = (0, c.$)(),
                    { blockId: v, blockType: _, blockPosX: f, blockPosY: p } = (0, n.N)(),
                    { objectType: g, objectId: x, objectPosX: h, objectPosY: A, objectsCount: N, mainObjectId: T, mainObjectType: j } = (0, d.J)();
                return (0, o.c)((l, o) => {
                    if (!r || !m) return;
                    let n = s.W[m];
                    if (!n) return;
                    let d = (0, a.F)({
                        params: {
                            objectType: g,
                            objectId: x,
                            objectPosX: h,
                            objectPosY: A,
                            hash: e,
                            pageId: n,
                            mainObjectType: j,
                            mainObjectId: T,
                            entityType: _,
                            entityId: v,
                            entityPosX: f,
                            entityPosY: p,
                            objectsCount: N,
                            viewUuid: o,
                        },
                        logger: t,
                        context: 'useSendEventOnDonationShowedOrHidden',
                    });
                    d && (l ? (0, i.Pf)(r.evgenInstance, d) : (0, i.nv)(r.evgenInstance, d));
                });
            };
        },
        49164: (e, t, r) => {
            Promise.resolve().then(r.bind(r, 79288));
        },
        50168: (e, t, r) => {
            'use strict';
            r.d(t, { c: () => u });
            var a = r(32290),
                i = r(63618),
                l = r(96103),
                o = r(55178),
                s = r(79856),
                n = r(57594),
                d = r(37318),
                c = r.n(d);
            let u = (0, l.PA)((e) => {
                let { className: t, coverRadius: r = 'm', isActive: l } = e,
                    {
                        settings: { isMobile: d },
                    } = (0, n.g)(),
                    u = (0, o.useMemo)(
                        () =>
                            d
                                ? (0, a.jsxs)('div', {
                                      className: c().controls,
                                      children: [
                                          (0, a.jsx)(s.W, { className: c().button, radius: 'round', isActive: l }),
                                          (0, a.jsx)(s.W, { className: c().button, radius: 'round', isActive: l }),
                                          (0, a.jsx)(s.W, { className: c().button, radius: 'round', isActive: l }),
                                      ],
                                  })
                                : (0, a.jsxs)('div', {
                                      className: c().controls,
                                      children: [
                                          (0, a.jsx)(s.W, { className: c().desktopPlayButton, isActive: l }),
                                          (0, a.jsx)(s.W, { className: c().button, radius: 'round', isActive: l }),
                                          (0, a.jsx)(s.W, { className: c().button, radius: 'round', isActive: l }),
                                          (0, a.jsx)(s.W, { className: c().button, radius: 'round', isActive: l }),
                                      ],
                                  }),
                        [l, d],
                    );
                return (0, a.jsxs)('div', {
                    className: (0, i.$)(c().root, t),
                    children: [
                        (0, a.jsx)(s.W, { className: c().cover, radius: r, isActive: l }),
                        (0, a.jsxs)('div', {
                            className: c().content,
                            children: [
                                (0, a.jsxs)('div', {
                                    className: c().info,
                                    children: [
                                        (0, a.jsx)(s.W, { className: c().entityName, radius: 's', isActive: l }),
                                        (0, a.jsx)(s.W, { className: c().title, radius: 'xl', isActive: l }),
                                        (0, a.jsx)(s.W, { className: c().meta, radius: 's', isActive: l }),
                                    ],
                                }),
                                u,
                            ],
                        }),
                    ],
                });
            });
        },
        50891: (e, t, r) => {
            'use strict';
            r.d(t, { m: () => l });
            var a = r(91945),
                i = r(25090);
            class l extends i.t {
                constructor(e = 'Http Client error', { code: t = 'E_HTTP_CLIENT', ...r } = {}) {
                    (super(e, { code: t, ...r }), (0, a._)(this, 'name', 'HttpException'), Object.setPrototypeOf(this, l.prototype));
                }
            }
        },
        50961: (e, t, r) => {
            'use strict';
            var a;
            (r.d(t, { X: () => a }),
                (function (e) {
                    ((e[(e.NOT_MODIFIED = 304)] = 'NOT_MODIFIED'),
                        (e[(e.NOT_FOUND = 404)] = 'NOT_FOUND'),
                        (e[(e.BAD_REQUEST = 400)] = 'BAD_REQUEST'),
                        (e[(e.REQUEST_TIMEOUT = 408)] = 'REQUEST_TIMEOUT'),
                        (e[(e.PRECONDITION_FAILED = 412)] = 'PRECONDITION_FAILED'),
                        (e[(e.TEAPOT = 418)] = 'TEAPOT'));
                })(a || (a = {})));
        },
        51714: (e, t, r) => {
            'use strict';
            r.d(t, { G: () => o });
            var a = r(55178),
                i = r(31010),
                l = r(68243);
            let o = (e) => {
                var t;
                let { setDeeplink: r } = null != (t = (0, i.P)()) ? t : {};
                (0, a.useEffect)(() => {
                    if (e) {
                        let { href: t } = (0, l.u)('/artist/:artistId', { params: { artistId: e } });
                        null == r || r(t);
                    }
                    return () => {
                        null == r || r(null);
                    };
                }, [e, r]);
            };
        },
        57815: (e, t, r) => {
            'use strict';
            r.d(t, { E: () => i });
            var a = r(87151);
            let i = (e) => {
                var t, r;
                return e
                    ? {
                          id: Number(e.id),
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
                          cover: { uri: e.coverUri || '' },
                          various: e.various || !1,
                          contentRestrictions: { available: null == (r = e.isAvailable) || r, disclaimers: (0, a.H)(e.disclaimers) },
                      }
                    : { id: 0, name: '', various: !1, decomposed: [], contentRestrictions: { available: !1, disclaimers: [] } };
            };
        },
        60101: (e, t, r) => {
            'use strict';
            r.d(t, { v: () => m });
            var a = r(32290),
                i = r(96103),
                l = r(55178),
                o = r(60900),
                s = r(85472),
                n = r(21732),
                d = r(63423),
                c = r(82586);
            let u = (0, i.PA)((e) => {
                    let { onClick: t, className: r, size: i = 's', iconSize: l = 'xxs', forwardRef: u, ...m } = e,
                        { formatMessage: v } = (0, o.A)();
                    return (0, a.jsx)(d.$, {
                        ref: u,
                        size: i,
                        variant: 'default',
                        radius: 'round',
                        color: 'secondary',
                        onClick: t,
                        className: r,
                        'aria-label': v({ id: 'donation.button-text' }),
                        icon: (0, a.jsx)(c.I, { size: l, variant: 'ruble' }),
                        ...(0, s.getDataAttrFromProps)(m),
                        'data-test-id': n.S7.DONATION_BUTTON,
                    });
                }),
                m = (0, l.forwardRef)((e, t) => (0, a.jsx)(u, { forwardRef: t, ...e }));
        },
        61334: (e, t, r) => {
            'use strict';
            r.d(t, { q: () => c });
            var a = r(21916),
                i = r(90432),
                l = r(91027),
                o = r(6752),
                s = r(67544),
                n = r(68243);
            let d = /[^\w\-./:?=&[\]%]/gi,
                c = (e) => {
                    let { browserInfo: t, login: r } = e,
                        c = (0, a.useSearchParams)(),
                        u = (0, o.L)(() => {
                            var e;
                            let r = parseFloat(null != (e = null == t ? void 0 : t.version) ? e : '');
                            return (null == t ? void 0 : t.OSFamily) === s.j.IOS
                                ? r >= 16
                                : (null == t ? void 0 : t.OSFamily) === s.j.ANDROID
                                  ? r >= 7
                                  : null == t
                                    ? void 0
                                    : t.inAppBrowser;
                        });
                    return (0, l.c)((e) =>
                        u && e
                            ? ((e, t, r) => {
                                  let a = e.get('deeplink_url'),
                                      l = e.get('channel'),
                                      o = e.get('tags'),
                                      s = { campaign: 'yamusicweb', channel: null != l ? l : 'musicmain', deep_link_value: t, af_dp: t };
                                  if ((r && (s.login = r), a)) {
                                      let e = ''.concat(i.ov).concat(a);
                                      ((s.deep_link_value = e), (s.af_dp = e), (s.deeplink_url = a));
                                  }
                                  o && (s.pid = o);
                                  let c = Object.keys(s).reduce((e, t) => {
                                          let r = s[t];
                                          if (void 0 !== r) {
                                              let a = ((e) => ('string' == typeof e ? e.replace(d, '') : ''))(r);
                                              a && (e[t] = a);
                                          }
                                          return e;
                                      }, {}),
                                      { href: u } = (0, n.u)('/', { query: c, options: { host: 'https://music.onelink.me/VkDa' } });
                                  return u;
                              })(c, e, r)
                            : ((e) => {
                                  if (e === s.j.IOS) {
                                      let { href: e } = (0, n.u)('/ru/app/andeks.muzyka/id520797969', {
                                          query: { mt: 8, uo: 4, at: '1000lqjf', ct: 'music' },
                                          options: { host: 'https://itunes.apple.com' },
                                      });
                                      return e;
                                  }
                                  if (e === s.j.ANDROID) {
                                      let { href: e } = (0, n.u)('/store/apps/details', {
                                          query: { id: 'ru.yandex.music' },
                                          options: { host: 'https://play.google.com' },
                                      });
                                      return e;
                                  }
                                  let { href: t } = (0, n.u)('/apps', { options: { host: 'https://music.yandex.ru' } });
                                  return t;
                              })(null == t ? void 0 : t.OSFamily),
                    );
                };
        },
        65024: (e, t, r) => {
            'use strict';
            r.d(t, { C: () => i });
            let a = new Set(Object.values(r(3785).M)),
                i = (e) => 'string' == typeof e && a.has(e);
        },
        65204: (e, t, r) => {
            'use strict';
            r.d(t, { O: () => u });
            var a = r(32290),
                i = r(96103),
                l = r(39407),
                o = r(63423),
                s = r(71926),
                n = r(61334),
                d = r(32641),
                c = r(57594);
            let u = (0, i.PA)((e) => {
                let { className: t, buttonText: r, isBlock: i = !1 } = e,
                    {
                        settings: { browserInfo: u },
                        user: { account: m },
                    } = (0, c.g)(),
                    v = (0, n.q)({ browserInfo: u, login: m.data.login }),
                    _ = (0, d.Z)(v());
                return (0, a.jsx)(o.$, {
                    role: 'link',
                    className: t,
                    isBlock: i,
                    color: 'primary',
                    variant: 'default',
                    size: 'l',
                    radius: 'xxxl',
                    onClick: _,
                    children: r || (0, a.jsx)(s.HL, { variant: 'div', size: 'm', lineClamp: 1, children: (0, a.jsx)(l.A, { id: 'download-mobile-app.listen-in-app' }) }),
                });
            });
        },
        66075: (e, t, r) => {
            'use strict';
            r.d(t, { G: () => c });
            var a,
                i = r(95716),
                l = r(55178),
                o = {
                    8612: (e, t, r) => {
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.useDebouncedToggle = void 0));
                        let a = r(352),
                            i = r(810);
                        t.useDebouncedToggle = (e) => {
                            let { delay: t, initialState: r, throttleTimeout: l } = e,
                                o = (0, i.useRef)(null),
                                [s, n] = (0, i.useState)(!!r),
                                d = (0, i.useMemo)(
                                    () =>
                                        (0, a.throttle)(() => {
                                            (n(!r),
                                                o.current && window.clearTimeout(o.current),
                                                (o.current = window.setTimeout(() => {
                                                    n(!!r);
                                                }, t)));
                                        }, l),
                                    [t, r, l],
                                ),
                                c = (0, i.useCallback)(() => {
                                    (n(!!r), o.current && window.clearTimeout(o.current));
                                }, [r]);
                            return (
                                (0, i.useEffect)(
                                    () => () => {
                                        o.current && window.clearTimeout(o.current);
                                    },
                                    [],
                                ),
                                { state: s, handleDebouncedToggle: d, reset: c }
                            );
                        };
                    },
                    3940: (e, t, r) => {
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.useForceUpdateRef = void 0));
                        let a = r(810);
                        t.useForceUpdateRef = () => {
                            let [e, t] = (0, a.useState)(null);
                            return [
                                e,
                                (0, a.useCallback)((e) => {
                                    t((t) => (t !== e ? e : t));
                                }, []),
                            ];
                        };
                    },
                    3830: (e, t, r) => {
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.useScroll = void 0));
                        let a = r(810),
                            i = r(1848),
                            l = r(8612);
                        t.useScroll = (e) => {
                            let { onScroll: t, listenIsScrolling: r, elementRef: o } = e,
                                { state: s, handleDebouncedToggle: n } = (0, l.useDebouncedToggle)({ delay: 1e3, throttleTimeout: 100 }),
                                d = (0, a.useCallback)(() => {
                                    (r && n(), null == t || t());
                                }, [r, n, t]);
                            return (
                                (0, a.useEffect)(() => {
                                    let e = (0, i.getElementFromRefOrElement)(o);
                                    if (null === e) return;
                                    let t = null != e ? e : window,
                                        r = { capture: !0, passive: !0 };
                                    return (t.addEventListener('scroll', d, r), () => t.removeEventListener('scroll', d, r));
                                }, [o, d]),
                                s
                            );
                        };
                    },
                    1848: (e, t) => {
                        (Object.defineProperty(t, '__esModule', { value: !0 }),
                            (t.getElementFromRefOrElement = void 0),
                            (t.getElementFromRefOrElement = (e) => {
                                if (void 0 !== e) {
                                    if (null === e || e instanceof HTMLElement) return e;
                                    if (null === e.current || e.current instanceof HTMLElement) return e.current;
                                }
                            }));
                    },
                    352: (e) => {
                        e.exports = i;
                    },
                    810: (e) => {
                        e.exports = a || (a = r.t(l, 2));
                    },
                },
                s = {};
            function n(e) {
                var t = s[e];
                if (void 0 !== t) return t.exports;
                var r = (s[e] = { exports: {} });
                return (o[e](r, r.exports, n), r.exports);
            }
            var d = {};
            ((() => {
                (Object.defineProperty(d, '__esModule', { value: !0 }), (d.useElementOffsetY = void 0));
                let e = n(810),
                    t = n(3830),
                    r = n(3940);
                d.useElementOffsetY = (a) => {
                    let [i, l] = (0, r.useForceUpdateRef)(),
                        [o, s] = (0, e.useState)(),
                        n = (0, e.useCallback)(() => {
                            let e = null == i ? void 0 : i.getBoundingClientRect();
                            e && s(e.y);
                        }, [i]);
                    return ((0, e.useLayoutEffect)(n), (0, t.useScroll)({ onScroll: n, elementRef: a }), { forceUpdateRefCallback: l, offsetY: o });
                };
            })(),
                d.__esModule);
            var c = d.useElementOffsetY;
        },
        67544: (e, t, r) => {
            'use strict';
            r.d(t, { j: () => a });
            var a = (function (e) {
                return ((e.ANDROID = 'Android'), (e.IOS = 'iOS'), (e.MACOS = 'MacOS'), (e.WINDOWS = 'Windows'), e);
            })({});
        },
        73155: (e, t, r) => {
            'use strict';
            r.d(t, { W: () => i });
            var a = r(85472);
            let i = (e) => {
                if (!e) return null;
                let { h: t, s: r, l: i } = (0, a.hexToHsl)(e),
                    l = Math.min(70, Math.max(10, i + 10));
                return 'hsl('.concat(t, 'deg, ').concat(r, '%, ').concat(l, '%)');
            };
        },
        76768: (e) => {
            e.exports = {
                root: 'Disclaimer_root__ciLA2',
                container: 'Disclaimer_container__cB_wK',
                title: 'Disclaimer_title__I5hOj',
                text: 'Disclaimer_text__2Yo3R',
                link: 'Disclaimer_link__4UMOz',
                buttons: 'Disclaimer_buttons__mpL9o',
                button: 'Disclaimer_button__qIuMB',
                shimmer: 'Disclaimer_shimmer__Bg0HE',
            };
        },
        78166: (e) => {
            e.exports = {
                root_hoverable: 'PageHeaderCover_root_hoverable__WF_BH',
                coverImage: 'PageHeaderCover_coverImage__i0wBv',
                coverImage_hoverable: 'PageHeaderCover_coverImage_hoverable__9XZK7',
                coverButton: 'PageHeaderCover_coverButton__3zeub',
                coverButton_hoverable: 'PageHeaderCover_coverButton_hoverable__hS1Gq',
                plusBadge: 'PageHeaderCover_plusBadge__O09t4',
            };
        },
        79288: (e, t, r) => {
            'use strict';
            (r.r(t), r.d(t, { default: () => te }));
            var a = r(32290),
                i = r(21916),
                l = r(96103),
                o = r(55178),
                s = r(60900),
                n = r(21732),
                d = r(73474),
                c = r(91027),
                u = r(66075),
                m = r(46049),
                v = r(50168),
                _ = r(63618),
                f = r(39407),
                p = r(99923),
                g = r(71483),
                x = r(63423),
                h = r(82586),
                A = r(71926),
                N = r(80528),
                T = r(90840),
                j = r(5942),
                E = r(70390),
                b = r(71735),
                C = r(37862),
                S = r(48922),
                I = r(2969),
                O = r(54391),
                k = r(95226),
                y = r(26042),
                P = r(72396),
                R = r(46200),
                L = r(5537),
                D = r(96434),
                H = r(32641),
                w = r(90169),
                B = r(57594),
                M = r(92744),
                U = r(10180),
                z = r(90326),
                F = r(29268),
                W = r(11260),
                X = r(4008),
                G = r(73155),
                K = r(87863),
                Y = r(8055),
                $ = r(5749),
                Q = r(48977),
                V = r(60101),
                q = r(23352),
                Z = r(59576);
            let J = (0, l.PA)((e) => {
                let { url: t, iconSize: r, controlSize: i, className: l, 'aria-label': o, ref: s } = e,
                    n = (0, H.Z)(t),
                    d = (0, $.c)(),
                    u = (0, Q.C)(),
                    { ref: m, intersectionPropertyId: v } = (0, q.n)({ callback: u, withViewUuid: !0 }),
                    _ = (0, c.c)((e) => {
                        (d(p.AppScreen.Link, t), n(e));
                    });
                return (0, a.jsx)('div', {
                    ref: s,
                    'data-intersection-property-id': Z.N,
                    className: l,
                    children: (0, a.jsx)(V.v, { 'data-intersection-property-id': v, iconSize: r, size: i, onClick: _, ref: m, 'aria-label': o }),
                });
            });
            var ee = r(73395),
                et = r(8576),
                er = r(54862),
                ea = r(70280),
                ei = r(83920),
                el = r(59518),
                eo = r(34284),
                es = r(46151),
                en = r(38653),
                ed = r.n(en);
            let ec = { width: 20, height: 8, tipRadius: 2, fill: 'var(--ym-background-color-primary-enabled-tooltip)' },
                eu = (e) => {
                    let { children: t } = e,
                        {
                            settings: { isMobile: r },
                        } = (0, B.g)(),
                        { contentRef: i } = (0, ei.g)(),
                        { setIsOnboardingOpened: l } = (0, es.w)(),
                        [s, n] = (0, er.d)(),
                        d = (0, eo.z)({ id: el.h.ARTIST_DONATION_BUTTON, ref: s }),
                        [u, m] = (0, o.useState)(d),
                        v = (0, c.c)(() => {
                            (m(!1), l(!1));
                        }),
                        _ = (0, c.c)((e) => {
                            e || (v(), l(!1));
                        });
                    return (0, a.jsxs)(ea.m_, {
                        placement: r ? 'top' : 'right',
                        arrowProps: ec,
                        offsetOptions: 14,
                        isHoverEnabled: !1,
                        open: u,
                        onOpenChange: _,
                        enableAriaDescribedby: !0,
                        referenceRef: n,
                        children: [
                            t,
                            (0, a.jsxs)(ea.ZI, {
                                className: ed().donationButtonTooltip,
                                rootNode: i,
                                children: [
                                    (0, a.jsx)(x.$, {
                                        icon: (0, a.jsx)(h.I, { variant: 'close', size: 'xxs' }),
                                        onClick: v,
                                        variant: 'text',
                                        className: ed().closeTooltip,
                                        withRipple: !1,
                                    }),
                                    (0, a.jsx)(A.HL, {
                                        variant: 'span',
                                        className: ed().tooltipText,
                                        children: (0, a.jsx)(f.A, { id: 'onboarding.artist-donation-button-1', values: { br: (0, a.jsx)('br', {}) } }),
                                    }),
                                ],
                            }),
                        ],
                    });
                },
                em = (0, l.PA)((e) => {
                    var t, r, i, l, d, u;
                    let { className: m, artistMeta: v, entitiesData: $, forwardRef: Q, onCoverClick: V } = e,
                        { shouldShowBuySubscriptionModal: q, showBuySubscriptionModal: Z } = (0, R.q)(),
                        { from: er, utmLink: ea } = (0, P.f)({
                            pageId: S._Q.ARTIST,
                            blockId: C.U.ARTIST,
                            contextType: g.K.Artist,
                            contextId: null == v ? void 0 : v.artist.id,
                        }),
                        ei = (0, j.K)(null == v ? void 0 : v.artist),
                        el = (0, E.A)(null == v ? void 0 : v.artist),
                        eo = (0, O.F)(),
                        { formatMessage: es } = (0, s.A)(),
                        [en, ec] = (0, o.useState)(!1),
                        {
                            settings: { isMobile: em },
                            trailer: ev,
                            user: e_,
                            slam: { isOfflineModeEnabled: ef },
                            paywall: { modal: ep },
                        } = (0, B.g)(),
                        eg = (0, I.b)(),
                        ex = (0, b.P)(),
                        eh = (0, T.Q)(),
                        eA = !!(null == v || null == (t = v.artist.trailer) ? void 0 : t.isAvailable) && !em,
                        eN = !em,
                        eT = !!(null == v ? void 0 : v.donationUrl),
                        ej = em && !e_.isAuthorized,
                        eE = em && !e_.hasPlus && e_.isAuthorized,
                        eb = ej || eE,
                        eC = (0, L.N)(),
                        eS = (0, D.c)(null == v ? void 0 : v.artist),
                        eI = (() => {
                            let [e, t] = (0, o.useState)(window.innerWidth < 1120),
                                r = (0, o.useMemo)(
                                    () =>
                                        (0, Y.A)(
                                            () => {
                                                t(window.innerWidth < 1120);
                                            },
                                            100,
                                            { trailing: !1 },
                                        ),
                                    [t],
                                );
                            return (
                                (0, o.useEffect)(
                                    () => (
                                        window.addEventListener('resize', r),
                                        r(),
                                        () => {
                                            window.removeEventListener('resize', r);
                                        }
                                    ),
                                    [r],
                                ),
                                e
                            );
                        })(),
                        { controlSize: eO, iconSize: ek } = (0, K.q)(em),
                        ey = (0, o.useMemo)(
                            () => ((null == v ? void 0 : v.artist.isComposer) ? es({ id: 'entity-names.composer' }) : es({ id: 'entity-names.singer' })),
                            [es, null == v ? void 0 : v.artist.isComposer],
                        ),
                        eP = !!(null == v ? void 0 : v.brandedButton) && !ef,
                        eR = (0, H.Z)(null != (u = null == v || null == (r = v.brandedButton) ? void 0 : r.url) ? u : ''),
                        eL = !eI || (eI && !eP),
                        { isPlaying: eD, togglePlay: eH } = (0, w.D)({
                            playContextParams: {
                                contextData: { type: ef ? g.K.Various : g.K.Artist, meta: { id: Number(null == v ? void 0 : v.artist.id) }, from: er, utmLink: ea },
                                loadContextMeta: !ef,
                                entitiesData: $,
                            },
                        }),
                        ew = (0, c.c)(() => {
                            if (!ex()) {
                                if (q) return void Z();
                                if (eC) return void ep.open();
                                (eH(), eg(!eD));
                            }
                        }),
                        eB = (0, o.useMemo)(() => {
                            var e, t;
                            return em
                                ? (0, a.jsx)(z.D, {
                                      className: (0, _.$)(ed().playControl, { [ed().playControl_withLogin]: eb }),
                                      color: eb ? 'secondary' : 'primary',
                                      buttonVariant: 'default',
                                      iconSize: eb ? ek : 'xxl',
                                      size: eb ? eO : void 0,
                                      radius: eb ? 'xxxl' : 'round',
                                      isPlaying: eD,
                                      variant: eb ? 'default' : 'filled',
                                      onClick: ew,
                                      disabled: !(null == v || null == (t = v.artist) ? void 0 : t.isAvailableForPlaying) || !v.artist.isAvailable,
                                  })
                                : (0, a.jsx)(z.D, {
                                      className: ed().playControl,
                                      withRipple: !0,
                                      buttonVariant: 'default',
                                      radius: 'xxxl',
                                      size: 's',
                                      color: 'primary',
                                      iconSize: 'xxs',
                                      isPlaying: eD,
                                      disabled: !(null == v || null == (e = v.artist) ? void 0 : e.isAvailableForPlaying) || !v.artist.isAvailable,
                                      onClick: ew,
                                      variant: 'default',
                                      children: eL && (0, a.jsx)(f.A, { id: 'player-actions.listen' }),
                                  });
                        }, [eL, null == v ? void 0 : v.artist.isAvailable, null == v ? void 0 : v.artist.isAvailableForPlaying, ew, em, eD, eb, ek, eO]),
                        eM = (0, c.c)(() => {
                            if (q) return void Z();
                            !ex() &&
                                (null == v ? void 0 : v.artist.id) &&
                                (ev.setUtmLink(ea), ev.openArtistTrailer(v.artist.id), eo(p.DomainObjectType.Artist, v.artist.id));
                        }),
                        eU = (0, o.useMemo)(
                            () =>
                                eA
                                    ? (0, a.jsx)(X.WithOffline, {
                                          fallback: (0, a.jsx)(W.L, {
                                              children: (0, a.jsx)(F.k, {
                                                  size: 's',
                                                  radius: 'xxxl',
                                                  iconSize: 'xxs',
                                                  className: ed().trailerControl,
                                                  onClick: eM,
                                                  children: eL && (0, a.jsx)(f.A, { id: 'entity-names.trailer' }),
                                              }),
                                          }),
                                      })
                                    : null,
                            [eL, eM, eA],
                        ),
                        ez = (0, o.useMemo)(() => {
                            var e;
                            return em && eP
                                ? null
                                : (null == v ? void 0 : v.donationUrl) && (null == (e = v.artist) ? void 0 : e.id)
                                  ? (0, a.jsx)(k.F, {
                                        blockType: p.EntityTypes.Donations,
                                        blockId: C.U.DONATY,
                                        blockPosX: 1,
                                        blockPosY: 1,
                                        children: (0, a.jsx)(y.B, {
                                            objectType: p.DomainObjectType.Donation,
                                            objectId: v.artist.id,
                                            objectPosX: 0,
                                            objectPosY: 0,
                                            objectsCount: 1,
                                            mainObjectId: v.artist.id,
                                            mainObjectType: p.DomainObjectType.Artist,
                                            children: (0, a.jsx)(eu, {
                                                children: (0, a.jsx)(J, { className: ed().donateControl, iconSize: ek, controlSize: eO, url: eh(v.donationUrl) }),
                                            }),
                                        }),
                                    })
                                  : (0, a.jsx)(U.O, {
                                        onClick: el,
                                        isPinned: null == v ? void 0 : v.artist.isPinned,
                                        className: ed().pinControl,
                                        isDisabled: !(null == v ? void 0 : v.artist.isAvailable),
                                    });
                        }, [
                            em,
                            eP,
                            null == v ? void 0 : v.donationUrl,
                            null == v ? void 0 : v.artist.id,
                            null == v ? void 0 : v.artist.isPinned,
                            null == v ? void 0 : v.artist.isAvailable,
                            el,
                            ek,
                            eO,
                            eh,
                        ]),
                        eF = (0, o.useMemo)(() => {
                            var e;
                            let t = {
                                    gridTemplateAreas: ''.concat(
                                        ((e) => {
                                            let { isMobile: t, brandedButton: r, trailerButton: a, pinOrDonateControl: i } = e,
                                                l = i ? 'pinOrDonate' : '';
                                            return t
                                                ? r
                                                    ? "'menu play like' 'branded branded branded'"
                                                    : "'menu like ".concat(l, " play '")
                                                : "'play "
                                                      .concat(r ? 'branded' : '', ' ')
                                                      .concat(a ? 'trailer' : '', ' like ')
                                                      .concat(l, " menu'");
                                        })({ isMobile: em, brandedButton: eP, pinOrDonateControl: eT || eN, trailerButton: eA }),
                                    ),
                                },
                                r = { '--baranded-button-color-background': (0, G.W)(null == v ? void 0 : v.artist.averageColor) };
                            return (0, a.jsxs)('div', {
                                style: t,
                                className: ed().controls,
                                children: [
                                    eB,
                                    eP &&
                                        (0, a.jsx)(X.WithOffline, {
                                            fallback: (0, a.jsx)(x.$, {
                                                className: ed().brandedControl,
                                                style: r,
                                                withRipple: !1,
                                                withHover: !1,
                                                radius: 'xxxl',
                                                size: 's',
                                                color: 'primary',
                                                onClick: eR,
                                                variant: 'default',
                                                role: 'link',
                                                children: (0, a.jsx)(A.HL, {
                                                    variant: 'span',
                                                    lineClamp: 1,
                                                    children: null == v || null == (e = v.brandedButton) ? void 0 : e.title,
                                                }),
                                            }),
                                        }),
                                    eU,
                                    (0, a.jsx)(X.WithOffline, {
                                        fallback: (0, a.jsx)(M.c, {
                                            className: ed().likeControl,
                                            isLiked: null == v ? void 0 : v.artist.isLiked,
                                            onClick: ei,
                                            withRipple: !em,
                                            iconSize: ek,
                                            size: eO,
                                            variant: 'default',
                                            iconClassName: ed().likeIcon,
                                            disabled: !(null == v ? void 0 : v.artist.isAvailable) || !e_.isAuthorized,
                                        }),
                                    }),
                                    (0, a.jsx)(X.WithOffline, { fallback: ez }),
                                    (0, a.jsx)(N.g, {
                                        artist: null == v ? void 0 : v.artist,
                                        open: en,
                                        onOpenChange: ec,
                                        className: ed().menuControl,
                                        size: eO,
                                        icon: (0, a.jsx)(h.I, { size: ek, variant: 'more' }),
                                        'data-test-id': n.e8.pageHeader.ARTIST_HEADER_CONTEXT_MENU_BUTTON,
                                    }),
                                ],
                            });
                        }, [
                            null == v ? void 0 : v.artist,
                            null == v || null == (i = v.brandedButton) ? void 0 : i.title,
                            eO,
                            ei,
                            ek,
                            en,
                            em,
                            eR,
                            eB,
                            ez,
                            eU,
                            e_.isAuthorized,
                            eP,
                            eN,
                            eT,
                            eA,
                        ]),
                        eW = (0, o.useMemo)(
                            () =>
                                (0, a.jsx)('div', {
                                    className: ed().meta,
                                    children:
                                        (null == v ? void 0 : v.lastMonthListeners) &&
                                        (0, a.jsxs)('div', {
                                            className: ed().label,
                                            'data-test-id': n.e8.pageHeader.ARTIST_LISTENERS_COUNT,
                                            children: [
                                                (0, a.jsx)(h.I, { variant: 'users', size: 'xxxs' }),
                                                (0, a.jsx)(A.HL, {
                                                    type: 'text',
                                                    size: 'm',
                                                    weight: 'medium',
                                                    variant: 'span',
                                                    children: (0, a.jsx)(f.A, { id: 'entity-names.listeners-per-month', values: { counter: v.lastMonthListeners } }),
                                                }),
                                            ],
                                        }),
                                }),
                            [null == v ? void 0 : v.lastMonthListeners],
                        );
                    return (0, a.jsx)('div', {
                        className: ed().root,
                        children: (0, a.jsx)(ee.k, {
                            ref: Q,
                            className: m,
                            entityName: ey,
                            title: (null == v || null == (l = v.artist) ? void 0 : l.name) || '',
                            meta: eW,
                            cover: (0, a.jsx)(et.I, {
                                coverVariant: 'round',
                                coverUri: null == v || null == (d = v.artist) ? void 0 : d.coverUri,
                                isAvailable: null == v ? void 0 : v.artist.isAvailable,
                                onClick: V,
                                'aria-label': V ? es({ id: 'slider.view-artist-covers' }) : void 0,
                            }),
                            controls: eF,
                            disclaimerLabel: eS,
                            headingVariant: 'h1',
                            showMobileLoginButton: ej,
                            showMobileSubscriptionButton: eE,
                        }),
                    });
                }),
                ev = (0, o.forwardRef)((e, t) => (0, a.jsx)(em, { forwardRef: t, ...e }));
            var e_ = r(64170),
                ef = r(40783),
                ep = r(7999),
                eg = r(91853),
                ex = r(8868),
                eh = r(71610),
                eA = r(22714),
                eN = r(94805),
                eT = r(3796),
                ej = r(45477),
                eE = r(75582),
                eb = r(97201),
                eC = r(68243),
                eS = r(90357),
                eI = r(28724),
                eO = r(97841),
                ek = r(32468),
                ey = r(74694),
                eP = r(57815),
                eR = r(22556),
                eL = r(44242),
                eD = r(42125),
                eH = r(44338),
                ew = r(24535),
                eB = r(47216),
                eM = r(94821),
                eU = r(26365);
            async function ez(e, t) {
                var r, a, i, l, o;
                if (!e) return { title: '', description: '', openGraph: {}, twitter: {}, appLinks: {}, other: {} };
                let s = await (0, eD.W)(t.locale),
                    n = (0, eH.N)(e.artist.name),
                    d = s({ id: 'metadata.artist-title' }, { artistTitle: e.artist.name }),
                    c = s({ id: 'metadata.artist-description' }, { artistTitle: e.artist.name });
                return {
                    title: d,
                    description: c,
                    openGraph: (0, ew.i)({
                        ogTitle: n,
                        ogDescription: c,
                        fullUrl: null != (a = t.fullUrl) ? a : '',
                        locale: t.locale,
                        ogImage: null != (i = null == (r = e.artist.cover) ? void 0 : r.uri) ? i : '',
                        siteName: s({ id: 'metadata.yandex-music' }),
                    }),
                    twitter: (0, eB.H)({ cardType: eM.W.APP, title: n, url: t.url, appName: s({ id: 'metadata.yandex-music' }) }),
                    appLinks: (0, eL.X)({
                        additional: { ...t, url: null != (l = t.url) ? l : '', fullUrl: null != (o = t.fullUrl) ? o : '', host: t.host },
                        appName: s({ id: 'metadata.yandex-music' }),
                    }),
                    other: { 'music:musician': e.artist.name },
                    alternates: (0, eU.S)('/artist/:artistId', t.tld, { params: { artistId: e.artist.id } }),
                };
            }
            var eF = r(22644),
                eW = r(51714),
                eX = r(92533),
                eG = r(69951),
                eK = r(88964),
                eY = r(22748),
                e$ = r(31286),
                eQ = r(98350),
                eV = r(34223),
                eq = r(45257),
                eZ = r(20279),
                eJ = r.n(eZ);
            let e0 = (0, l.PA)((e) => {
                let { artistId: t } = e,
                    r = (0, eK.j)(),
                    { contentScrollRef: l, setContentScrollRef: d } = (0, ei.g)(),
                    { formatMessage: m } = (0, s.A)(),
                    {
                        artist: { offlineArtist: f },
                    } = (0, B.g)(),
                    { trackIds: p, downloadedTracks: x } = f,
                    { from: h } = (0, P.f)({ pageId: S._Q.ARTIST, blockId: C.U.TRACK_LIST }),
                    A = (0, eY.v)(),
                    N = (0, e$.w)(),
                    { forceUpdateRefCallback: T, offsetY: j } = (0, u.G)(l),
                    { topColorStyle: E, headerStyle: b } = (0, ef.Q)(null, j),
                    I = (0, c.c)(() => {
                        r.tracksController && p.ids && x.getData(r.tracksController, p.ids);
                    });
                ((0, eX.L)(I),
                    (0, o.useEffect)(() => {
                        f.meta && x.isResolved && x.items && f.setTracksCount(x.items.length);
                    }, [f, f.meta, x.isResolved, x.items]),
                    (0, o.useEffect)(() => {
                        x.isNeededToLoad && p.isResolved && I();
                    }, [x.isNeededToLoad, p.isResolved, I]),
                    (0, o.useEffect)(
                        () => () => {
                            f.reset();
                        },
                        [f, t],
                    ),
                    (0, eT.J)(f.isResolved));
                let O = (0, o.useMemo)(
                        () =>
                            f.isLoading || !f.meta
                                ? (0, a.jsx)(v.c, { className: eJ().header, coverRadius: 'round' })
                                : (0, a.jsx)(ev, { className: eJ().header, artistMeta: f.meta, entitiesData: x.entitiesData, ref: T }),
                        [f.isLoading, f.meta, x.entitiesData, T],
                    ),
                    k = (0, o.useMemo)(() => ({ Header: () => O, Footer: () => (0, a.jsx)(ek.A, { children: (0, a.jsx)(eO.w, { className: eJ().footer }) }) }), [O]),
                    y = x.items ? x.items.length : 10;
                if (f.isNeededToLoad && A) {
                    let e = [f.getArtist(t, A), p.getIds(t, A)];
                    (0, o.use)(Promise.allSettled(e));
                }
                return (f.isNotFound && (0, i.notFound)(), f.isRejected || p.isRejected || x.isRejected)
                    ? (0, a.jsx)(e_.SomethingWentWrong, {})
                    : (0, a.jsx)(eA.n, {
                          pageId: S._Q.ARTIST,
                          pageEntityId: t,
                          children: (0, a.jsxs)(ep.h, {
                              scrollElement: l,
                              children: [
                                  (0, a.jsx)(ey.Y, { style: b }),
                                  (0, a.jsx)('div', { className: eJ().averageColorBackground, style: E }),
                                  (0, a.jsx)(eq.$, {
                                      context: { listAriaLabel: m({ id: 'offline.downloaded-track-list' }) },
                                      className: (0, _.$)(eJ().root, eJ().important),
                                      listClassName: eJ().content,
                                      customComponents: k,
                                      totalCount: y,
                                      itemContentCallback: (e) => {
                                          var t;
                                          let r = null == (t = x.items) ? void 0 : t[e];
                                          return r
                                              ? (0, a.jsx)(
                                                    eG.K,
                                                    {
                                                        track: r,
                                                        playContextParams: N(r.id, {
                                                            contextData: { type: g.K.Various, meta: { id: S._Q.ARTIST }, from: h },
                                                            entitiesData: x.entitiesData,
                                                            queueParams: { index: e, entityId: r.id },
                                                            loadContextMeta: !1,
                                                        }),
                                                    },
                                                    r.id,
                                                )
                                              : (0, a.jsx)(eV.D, { isActive: !0, className: eJ().trackShimmer, variant: eQ.X.PLAYLIST });
                                      },
                                      debounceDurationInMs: 300,
                                      initialItemCount: y,
                                      handleRef: d,
                                      shouldTriggerRangeChangedOn: [y],
                                      testId: n.Xk.artist.OFFLINE_ARTIST_DOWNLOADED_TRACKS,
                                  }),
                              ],
                          }),
                      });
            });
            var e1 = r(22873),
                e2 = r.n(e1),
                e7 = r(40959),
                e4 = r(90776),
                e8 = r.n(e4);
            let e3 = (0, l.PA)((e) => {
                    let { artist: t } = e;
                    return (0, a.jsx)(e7.E, {
                        landing: t.landing,
                        errorComponent: (0, a.jsx)(e_.SomethingWentWrong, { className: e8().error, withBackwardControl: !1 }),
                        containerClassName: e8().root,
                    });
                }),
                e6 = (0, l.PA)((e) => {
                    var t, r, l, _, f, p;
                    let { artistId: g, preloadedArtist: x } = e,
                        { notify: h } = (0, eE.l)(),
                        {
                            artist: A,
                            disclaimerModalState: N,
                            slam: T,
                            modals: { imageSliderModal: j },
                        } = (0, B.g)(),
                        { formatMessage: E } = (0, s.A)(),
                        b = (0, o.useRef)(0),
                        { contentScrollRef: C, setContentScrollRef: S } = (0, ei.g)(),
                        { forceUpdateRefCallback: I, offsetY: O } = (0, u.G)(C),
                        k = (0, o.useRef)(null),
                        y = (0, eN.y)(null == A || null == (r = A.meta) || null == (t = r.artist) ? void 0 : t.averageColor),
                        { topColorStyle: P, headerStyle: R } = (0, ef.Q)(y, O),
                        L = null == (l = A.meta) ? void 0 : l.hasCovers,
                        D = (0, i.useSearchParams)();
                    ((0, eW.G)(g),
                        (0, ex.A)(),
                        (0, o.useEffect)(() => {
                            let e = D.get(eb.K.BLOCK);
                            e &&
                                A.infoLoadingState.isResolved &&
                                A.landing.isLoaded &&
                                ((e) => {
                                    let { blockId: t, scrollRef: r, headerRef: a } = e,
                                        i = document.getElementById(t);
                                    if (i && r) {
                                        var l;
                                        let e = i.getBoundingClientRect().top,
                                            t = (null == (l = a.current) ? void 0 : l.offsetHeight) ? e - a.current.offsetHeight : e;
                                        r.scrollTo({ top: t - 10, behavior: 'smooth' });
                                    }
                                })({ blockId: e, scrollRef: C, headerRef: k });
                        }, [A.infoLoadingState.isResolved, A.landing.isLoaded, C, D]));
                    let H = (0, eg.S)({ artist: null == (_ = A.meta) ? void 0 : _.artist, shouldHistoryBack: !0 });
                    ((0, o.useEffect)(() => {
                        var e;
                        (null == (e = A.meta) ? void 0 : e.artist.isUnsafeLegal) && H();
                    }, [null == (f = A.meta) ? void 0 : f.artist.isUnsafeLegal, H]),
                        (0, eF._)(A, g));
                    let w = (0, c.c)(() => {
                        var e;
                        (null == (e = A.meta) ? void 0 : e.hasCovers) && A.meta.covers && j.openImages({ images: A.meta.covers });
                    });
                    if (T.isOfflineModeEnabled) return (0, a.jsx)(e0, { artistId: g });
                    if (A.deprecationTargetArtistId) {
                        let { href: e } = (0, eC.u)('/artist/:artistId', { params: { artistId: A.deprecationTargetArtistId } });
                        (0, i.redirect)(e);
                    }
                    ((0, o.useMemo)(
                        () => () => {
                            (A.infoLoadingState.isRejected || (!A.meta && !A.infoLoadingState.isLoading && !A.infoLoadingState.isNeededToLoad)) &&
                                b &&
                                !(b.current > 0) &&
                                (h((0, a.jsx)(eS.h, { error: E({ id: 'artist-errors.error-during-loading-artist' }) }), { containerId: ej.u.ERROR }), b.current++);
                        },
                        [A.infoLoadingState.isRejected, A.infoLoadingState.isLoading, A.infoLoadingState.isNeededToLoad, A.meta, h, E],
                    )(),
                        (0, eT.J)(A.infoLoadingState.isResolved),
                        A.isInfoNotFound && (0, i.notFound)(),
                        ((e) => {
                            var t;
                            (0, o.useEffect)(() => {
                                (null == e ? void 0 : e.meta) &&
                                    !e.infoLoadingState.isLoading &&
                                    e.meta.artist &&
                                    ez({ artist: (0, eP.E)(e.meta.artist) }, { fullUrl: null, locale: null, url: null, tld: '', host: '' }).then((e) => {
                                        (0, eR.j)(e);
                                    });
                            }, [null == e ? void 0 : e.meta, null == e ? void 0 : e.infoLoadingState.isLoading, null == e || null == (t = e.meta) ? void 0 : t.artist]);
                        })(A));
                    let M = (0, o.useMemo)(
                            () =>
                                A.infoLoadingState.isLoading || !A.meta
                                    ? (0, a.jsx)(v.c, { className: e2().header, coverRadius: 'round' })
                                    : (0, a.jsx)(ev, { className: e2().header, artistMeta: A.meta, ref: I, onCoverClick: L ? w : void 0 }),
                            [A.infoLoadingState.isLoading, A.meta, L, I, w],
                        ),
                        U = [];
                    return (A.infoLoadingState.isNeededToLoad && U.push(A.getInfo({ artistId: g, preloadedArtist: x })),
                    A.landing.isNeededToLoad && U.push(A.landing.getArtistSkeleton({ artistId: g, skeletonId: d.p.ARTIST }, { preloadBlocksCount: 2 })),
                    U.length && (0, o.use)(Promise.allSettled(U)),
                    A.isInfoSomethingWentWrong)
                        ? (0, a.jsx)(e_.SomethingWentWrong, {})
                        : (null == (p = A.meta) ? void 0 : p.artist.isLegalRejected)
                          ? (0, a.jsx)(eI.M, { modalState: N })
                          : (0, a.jsx)(eh.j, {
                                children: (0, a.jsxs)(ep.h, {
                                    scrollElement: C,
                                    children: [
                                        (0, a.jsx)(ey.Y, { style: R, innerHeaderRef: k }),
                                        (0, a.jsx)('div', { className: e2().averageColorBackground, style: P }),
                                        (0, a.jsxs)(m.N, {
                                            className: e2().root,
                                            containerClassName: e2().content,
                                            ref: S,
                                            'data-test-id': n.Xk.artist.ARTIST_PAGE,
                                            children: [
                                                (0, a.jsxs)('div', { children: [M, (0, a.jsx)(e3, { artist: A })] }),
                                                (0, a.jsx)(ek.A, { children: (0, a.jsx)(eO.w, { className: e2().footer }) }),
                                            ],
                                        }),
                                    ],
                                }),
                            });
                }),
                e9 = (0, l.PA)((e) => (0, a.jsx)(eA.n, { pageId: S._Q.ARTIST, pageEntityId: e.artistId, children: (0, a.jsx)(e6, { ...e }) }));
            var e5 = r(17024);
            let te = () => {
                let e = (0, i.useSearchParams)().get('artistId');
                return ((e && (0, e5.L)(e)) || (0, i.notFound)(), (0, a.jsx)(e9, { artistId: e }));
            };
        },
        87151: (e, t, r) => {
            'use strict';
            r.d(t, { H: () => i });
            var a = r(65024);
            let i = function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
                return e.map((e) => ((0, a.C)(e) ? e : void 0)).filter((e) => void 0 !== e);
            };
        },
        87953: (e, t, r) => {
            'use strict';
            r.d(t, { GX: () => l.G, X1: () => a.X, m5: () => i.m });
            var a = r(50961),
                i = r(50891),
                l = r(10733);
            r(33898);
        },
        90776: (e) => {
            e.exports = { root: 'ArtistPageSkeleton_root___Cj4n', error: 'ArtistPageSkeleton_error__GMCzn' };
        },
        92533: (e, t, r) => {
            'use strict';
            r.d(t, { L: () => n });
            var a = r(55178),
                i = r(44547),
                l = r(91027),
                o = r(88964);
            let s = [i.DT.IDLE, i.DT.DOWNLOADED],
                n = (e) => {
                    var t;
                    let r = (0, o.j)(),
                        n = (0, l.c)((t) => {
                            let { state: r } = t;
                            s.includes(r.loadingState) && e();
                        });
                    (0, a.useEffect)(() => {
                        var t, a;
                        return (
                            null == (t = r.store) || t.tracks.events.on(i.je.STATE_CHANGED, e),
                            null == (a = r.store) || a.tracks.events.on(i.je.ENTITY_CHANGED, n),
                            () => {
                                var t, a;
                                (null == (t = r.store) || t.tracks.events.off(i.je.STATE_CHANGED, e),
                                    null == (a = r.store) || a.tracks.events.off(i.je.ENTITY_CHANGED, n));
                            }
                        );
                    }, [e, n, null == (t = r.store) ? void 0 : t.tracks.events]);
                };
        },
        94218: (e, t, r) => {
            'use strict';
            r.d(t, { H: () => v });
            var a = r(32290),
                i = r(21916),
                l = r(39407),
                o = r(21732),
                s = r(91027),
                n = r(63423),
                d = r(71926),
                c = r(78648),
                u = r(70204),
                m = r(34186);
            let v = (e) => {
                let { size: t = 'm', variant: r = 'default', color: v = 'primary', withRipple: _ = !0, buttonText: f, isBlock: p, key: g, className: x } = e,
                    h = (0, i.useRouter)(),
                    A = (0, m.N)().get(u.QG),
                    N = (0, s.c)(() => {
                        A.authorizationUrl && ((0, c.uV)({ stage: 'attempt-start', trigger: 'user' }), h.push(A.authorizationUrl));
                    });
                return (0, a.jsx)(
                    n.$,
                    {
                        onClick: N,
                        className: x,
                        isBlock: p,
                        color: v,
                        variant: r,
                        size: t,
                        radius: 'xxxl',
                        withRipple: _,
                        'data-test-id': o.S7.UNAUTHORIZED_BUTTON,
                        children: f || (0, a.jsx)(d.HL, { variant: 'div', size: 'l', lineClamp: 1, children: (0, a.jsx)(l.A, { id: 'authorization.enter-button' }) }),
                    },
                    g,
                );
            };
        },
        94805: (e, t, r) => {
            'use strict';
            r.d(t, { y: () => o });
            var a = r(85472),
                i = r(14257),
                l = r(50);
            let o = (e) => {
                let { theme: t } = (0, l.W)();
                if (e) {
                    let { r, g: l, b: o } = (0, a.hexToRgb)(e),
                        s = t === i.S.Light ? 0.15 : 0.7;
                    return 'rgba('.concat(r, ', ').concat(l, ', ').concat(o, ', ').concat(s, ')');
                }
            };
        },
        96434: (e, t, r) => {
            'use strict';
            r.d(t, { c: () => a });
            let a = (e) => {
                var t;
                if (null == e ? void 0 : e.isForeignAgent) return null == (t = e.resolvedForeignAgentData) ? void 0 : t.title;
            };
        },
    },
    (e) => {
        (e.O(
            0,
            [
                9117, 1010, 7231, 7412, 9763, 2147, 4517, 3608, 8461, 1256, 3379, 3647, 8497, 7680, 5108, 5583, 1544, 4413, 1914, 4761, 992, 492, 6706, 1311, 5201, 1588,
                5472, 8378, 900, 2536, 2146, 3353, 2474, 8035, 347, 2732, 1417, 6861, 4250, 1570, 4793, 6989, 8506, 6050, 5806, 6241, 7702, 6874, 9155, 861, 4668, 9740,
                1175, 4499, 8915, 8816, 2563, 6341, 6226, 4797, 4638, 277, 8160, 7784, 6914, 8393, 2126, 3350, 4220, 9562, 7358,
            ],
            () => e((e.s = 49164)),
        ),
            (_N_E = e.O()));
    },
]);
