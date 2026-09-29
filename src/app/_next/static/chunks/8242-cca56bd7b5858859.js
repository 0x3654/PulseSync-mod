(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [8242],
    {
        1613: (e, t, i) => {
            'use strict';
            i.d(t, { z: () => n });
            var a = i(6612);
            let n = (e, t, i) =>
                t(
                    e === a.pM.NONE || i
                        ? { id: 'player-actions.repeat' }
                        : e === a.pM.ONE
                          ? { id: 'player-actions.repeat-one' }
                          : { id: 'player-actions.repeat-context' },
                );
        },
        8484: (e, t, i) => {
            'use strict';
            i.d(t, { CU: () => l, f_: () => r, pp: () => a });
            let a = [1, 1.25, 1.5, 1.75, 2],
                n = ['speed_1x', 'speed_1_25x', 'speed_1_5x', 'speed_1_75x', 'speed_2x'],
                s = ['speed_1x_centered', 'speed_1_25x_centered', 'speed_1_5x_centered', 'speed_1_75x_centered', 'speed_2x_centered'],
                r = { 1: 0, 1.25: 1, 1.5: 2, 1.75: 3, 2: 4 },
                l = (e, t) => {
                    var i, a, l;
                    let o = null != (i = r[e]) ? i : 0,
                        u = null != (a = n[o]) ? a : 'speed_1x';
                    return t ? (null != (l = s[o]) ? l : 'speed_1x_centered') : u;
                };
        },
        9885: (e) => {
            e.exports = { icon: 'NotificationRepeat_icon__WCf4_', message: 'NotificationRepeat_message__jCngy', icon_unset: 'NotificationRepeat_icon_unset__z2fmU' };
        },
        10733: (e, t, i) => {
            'use strict';
            i.d(t, { G: () => s });
            var a = i(91945),
                n = i(50891);
            class s extends n.m {
                constructor(e, t) {
                    (super(e, { code: 'E_HTTP_CLIENT_NON_2XX_3XX_RESPONSE', cause: t.cause }),
                        (0, a._)(this, 'name', 'HttpErrorException'),
                        (0, a._)(this, 'statusCode', void 0),
                        (this.statusCode = t.statusCode),
                        Object.setPrototypeOf(this, s.prototype));
                }
            }
        },
        10910: (e, t, i) => {
            'use strict';
            i.d(t, { GQ: () => f, f8: () => R, p$: () => L });
            var a = i(32290),
                n = i(63618),
                s = i(96103),
                r = i(55178),
                l = i(39407),
                o = i(60900),
                u = i(21732),
                d = i(76232),
                c = i(44989),
                _ = i(63423),
                p = i(82586),
                E = i(19740),
                C = i(74196),
                m = i(26490),
                A = i(78091),
                y = i(70204),
                B = i(34186),
                g = i(45477),
                N = i(75582),
                h = i(27120),
                D = i(81218),
                b = i(57594),
                T = i(19379),
                x = i(32156),
                v = i(90829),
                F = i(78297),
                S = i(31926),
                I = i(98602),
                O = i.n(I);
            let f = [
                    {
                        type: d.e.HIGH_QUALITY,
                        text: (0, a.jsx)(l.A, { id: 'player-actions.audio-quality-maximum' }),
                        qualityMessageId: 'player-actions.audio-quality-maximum',
                    },
                    {
                        type: d.e.BALANCED,
                        text: (0, a.jsx)(l.A, { id: 'player-actions.audio-quality-optimal' }),
                        qualityMessageId: 'player-actions.audio-quality-optimal',
                    },
                    {
                        type: d.e.EFFICIENT,
                        text: (0, a.jsx)(l.A, { id: 'player-actions.audio-quality-economical' }),
                        qualityMessageId: 'player-actions.audio-quality-economical',
                    },
                ],
                R = {
                    [d.e.HIGH_QUALITY]: (0, a.jsx)(l.A, { id: 'player-actions.audio-quality-maximum-description' }),
                    [d.e.BALANCED]: (0, a.jsx)(l.A, { id: 'player-actions.audio-quality-optimal-description' }),
                    [d.e.EFFICIENT]: (0, a.jsx)(l.A, { id: 'player-actions.audio-quality-economical-description' }),
                },
                L = (0, s.PA)((e) => {
                    let { onOpenChange: t, open: i, placement: s, size: d, referenceClassName: I, icon: L, referenceLabel: j, disabled: k } = e;
                    (0, h.N)(i);
                    let M = (0, r.useId)(),
                        { formatMessage: q } = (0, o.A)(),
                        { notify: P } = (0, N.l)(),
                        U = (0, B.N)().get(y.oo),
                        {
                            sonataState: z,
                            user: Q,
                            settings: { isMobile: V },
                            quality: G,
                        } = (0, b.g)(),
                        w = (0, m.S)(),
                        H = (0, D.g)(),
                        K = (0, F.$)(),
                        { state: Y, setState: $ } = (0, c.e)(!1),
                        X = (0, r.useCallback)(() => {
                            null == t || t(!0);
                        }, [t]),
                        W = (0, r.useCallback)(
                            (e) => {
                                (K(e, z.quality), z.setQuality(e), null == H || H.setQuality(e), U.set(T.c.YmPlayerQuality, e, { expires: 365 }));
                            },
                            [H, z, U, K],
                        ),
                        Z = (0, r.useCallback)(
                            (e) => {
                                let t = q({ id: e }).toLowerCase();
                                return {
                                    message: (0, a.jsx)(l.A, { id: 'notifications-info.quality-changed', values: { quality: t } }),
                                    ariaLabel: q({ id: 'notifications-info.quality-changed' }, { quality: t }),
                                };
                            },
                            [q],
                        ),
                        J = (0, r.useCallback)(
                            (e, t) => () => {
                                if (z.quality === e) return;
                                W(e);
                                let { message: i, ariaLabel: n } = Z(t);
                                P((0, a.jsx)(S.J, { onOpenQualitySettingsMenu: X, message: i, ariaLabel: n, isMobile: V }), { containerId: g.u.INFO });
                            },
                            [Z, X, P, z.quality, W, V],
                        ),
                        ee = (0, r.useCallback)(
                            (e) => {
                                let { selectedItemIcon: t, type: i, qualityMessageId: s, ariaSelected: r, text: l } = e;
                                return (e) => {
                                    let { isPopoverEnabled: o, popoverText: u } = e;
                                    return (0, a.jsx)(E.Dr, {
                                        isBlock: !0,
                                        disabled: o,
                                        className: (0, n.$)(O().item, O().expandedItem),
                                        iconPosition: 'right',
                                        icon: t,
                                        onClick: J(i, s),
                                        role: 'option',
                                        'aria-selected': r,
                                        children: (0, a.jsxs)('span', {
                                            className: O().itemWrapper,
                                            children: [
                                                (0, a.jsxs)('span', { className: O().item_option, children: [l, ' ', (0, a.jsx)(C.q, { children: u })] }),
                                                (0, a.jsx)('span', { className: (0, n.$)(O().item_option, O().itemSubTitle), children: R[i] }),
                                            ],
                                        }),
                                    });
                                };
                            },
                            [J],
                        ),
                        et = !Q.hasPlus,
                        ei = !Q.isAuthorized && V,
                        ea = (0, r.useMemo)(
                            () =>
                                f.map((e) => {
                                    let { type: t, text: i, qualityMessageId: n } = e,
                                        s = t === z.quality ? (0, a.jsx)(p.I, { variant: 'check', size: 'xxs' }) : null,
                                        r = t === z.quality;
                                    return (0, a.jsx)(
                                        x.S,
                                        {
                                            isNested: !0,
                                            isEnabled: et && !V,
                                            placement: 'left',
                                            textVariant: 'highQuality',
                                            renderChildren: ee({ selectedItemIcon: s, type: t, qualityMessageId: n, ariaSelected: r, text: i }),
                                        },
                                        t,
                                    );
                                }),
                            [z.quality, et, V, ee],
                        ),
                        en = (0, r.useMemo)(
                            () => ({
                                listClassName: (0, n.$)(O().root, O().root_withNewQuality, { [O().root_withEqualizer]: w.isAvailable }),
                                menuClassName: (0, n.$)({ [O().menuContent]: !V }),
                            }),
                            [w.isAvailable, V],
                        ),
                        es = (0, r.useMemo)(() => {
                            if (w.isAvailable && !V)
                                return (0, a.jsx)(A.r, { isExpanded: w.isEnabled, isDisabled: !1, className: O().equalizer, title: q({ id: 'equalizer.title' }) }, M);
                        }, [w.isEnabled, M, q, w.isAvailable, V]),
                        er = (0, r.useCallback)(
                            (e) => {
                                let { isPopoverEnabled: r } = e;
                                if (!V)
                                    return (0, a.jsx)(_.$, {
                                        className: (0, n.$)(I, { [O().button_active]: G.modal.isOpened }),
                                        radius: 'round',
                                        color: 'secondary',
                                        size: d,
                                        icon: L,
                                        variant: 'text',
                                        onClick: G.modal.open,
                                        'aria-label': q({ id: 'player-actions.audio-quality' }),
                                        withRipple: !1,
                                        'data-test-id': u.e8.player.SOUND_QUALITY_BUTTON,
                                    });
                                let l = r ? $ : t;
                                return (0, a.jsx)(E.W1, {
                                    wrapperClassName: I,
                                    size: d,
                                    icon: L,
                                    placement: s,
                                    open: i,
                                    onOpenChange: l,
                                    ariaLabel: q({ id: 'player-actions.audio-quality' }),
                                    footer: es,
                                    label: j,
                                    variant: 'text',
                                    ...en,
                                    containerDataTestId: u.e8.player.QUALITY_SETTINGS_CONTEXT_MENU,
                                    isMobile: V,
                                    lockScroll: !V,
                                    disabled: k,
                                    'data-test-id': u.e8.player.SOUND_QUALITY_BUTTON,
                                    children: ea,
                                });
                            },
                            [V, $, t, I, d, L, s, i, q, es, j, en, ea, G.modal.open, G.modal.isOpened, k],
                        );
                    return (0, a.jsx)(v.Z, { isEnabled: ei, isOpened: Y, onOpenChange: $, placement: 'top', textVariant: 'changeQuality', renderChildren: er });
                });
        },
        19267: (e) => {
            e.exports = {
                root: 'QualitySettingsModal_root__f3gE2',
                modalContent: 'QualitySettingsModal_modalContent__R_JNT',
                overlay: 'QualitySettingsModal_overlay__8pjOO',
                button: 'QualitySettingsModal_button__BCHBi',
            };
        },
        30743: (e, t, i) => {
            'use strict';
            i.d(t, { f: () => A });
            var a = i(32290),
                n = i(55178),
                s = i(60900),
                r = i(79490),
                l = i(11051),
                o = i(91027),
                u = i(86806),
                d = i(45477),
                c = i(75582),
                _ = i(44128),
                p = i(57594),
                E = i(90357),
                C = i(75783),
                m = i(17705);
            let A = () => {
                var e, t;
                let { sonataState: i } = (0, p.g)(),
                    A = (0, m.K)(i.entityMeta),
                    y = (0, C.m)(i.entityMeta),
                    {
                        isGenerativeLiked: B,
                        isGenerativeDisliked: g,
                        onGenerativeLikeClick: N,
                        onGenerativeDislikeClick: h,
                    } = (() => {
                        let {
                                sonataState: { entityMeta: e },
                                user: t,
                                fullscreenPlayer: i,
                            } = (0, p.g)(),
                            C = (0, _.e)(),
                            { notify: m } = (0, c.l)(),
                            { formatMessage: A } = (0, s.A)(),
                            [y, B] = (0, n.useState)(!1),
                            { state: g, handleDebouncedToggle: N, reset: h } = (0, u.F)({ delay: 1e4, throttleTimeout: 0 }),
                            { state: D, handleDebouncedToggle: b, reset: T } = (0, u.F)({ delay: 1e4, throttleTimeout: 0 }),
                            x = (0, o.c)(() => {
                                (h(), T());
                            });
                        (0, n.useEffect)(() => {
                            (null == e ? void 0 : e.id) && x();
                        }, [null == e ? void 0 : e.id, x]);
                        let v = (0, o.c)(async (n) => {
                            if (y || !e || !C) return;
                            if (!t.isAuthorized) {
                                let e = i.modal.isOpened ? d.u.FULLSCREEN_ERROR : d.u.ERROR;
                                m((0, a.jsx)(E.h, { error: A({ id: 'authorization-messages.need-to-authorizate' }) }), { containerId: e });
                                return;
                            }
                            let s = C.getState(),
                                o = C.playbackController.getPlayback();
                            if (s && o && (0, r.S)(s.currentContext.value)) {
                                B(!0);
                                try {
                                    switch (n) {
                                        case l.Q.TimestampLike:
                                            (T(), N());
                                            break;
                                        case l.Q.TimestampDislike:
                                            (h(), b());
                                    }
                                    let t = s.currentContext.value.restartsCount;
                                    (s.queueState.entityList.value.find((t) => {
                                        var i, a;
                                        let { entity: n } = t;
                                        return (null == (a = n.data) || null == (i = a.meta) ? void 0 : i.id) === e.id;
                                    }) && (await s.currentContext.value.sendFeedback(n, o)),
                                        s.currentContext.value.restartsCount > t && x());
                                } catch (t) {
                                    x();
                                    let e = i.modal.isOpened ? d.u.FULLSCREEN_ERROR : d.u.ERROR;
                                    m((0, a.jsx)(E.h, { error: A({ id: 'error-messages.error-during-action' }) }), { containerId: e });
                                } finally {
                                    B(!1);
                                }
                            }
                        });
                        return {
                            isGenerativeLiked: g,
                            isGenerativeDisliked: D,
                            onGenerativeLikeClick: (0, o.c)(() => v(l.Q.TimestampLike)),
                            onGenerativeDislikeClick: (0, o.c)(() => v(l.Q.TimestampDislike)),
                        };
                    })();
                return i.isGenerativeContext
                    ? { isLiked: B, isDisliked: g, handleLike: N, handleDislike: h }
                    : {
                          isLiked: null == (e = i.entityMeta) ? void 0 : e.isLiked,
                          isDisliked: null == (t = i.entityMeta) ? void 0 : t.isDisliked,
                          handleLike: A,
                          handleDislike: y,
                      };
            };
        },
        31926: (e, t, i) => {
            'use strict';
            i.d(t, { J: () => C });
            var a = i(32290),
                n = i(55178),
                s = i(60900),
                r = i(39407),
                l = i(21732),
                o = i(63423),
                u = i(82586),
                d = i(74196),
                c = i(71926),
                _ = i(58534),
                p = i(95114),
                E = i.n(p);
            let C = (e) => {
                let { closeToast: t, onOpenQualitySettingsMenu: i, message: p, ariaLabel: C, isMobile: m } = e,
                    { formatMessage: A } = (0, s.A)(),
                    y = (0, n.useCallback)(() => {
                        (i(), null == t || t());
                    }, [t, i]),
                    B = (0, n.useMemo)(
                        () =>
                            (0, a.jsxs)('div', {
                                className: E().message,
                                children: [
                                    (0, a.jsx)(d.q, { children: (0, a.jsx)('p', { role: 'alert', 'aria-label': C }) }),
                                    (0, a.jsx)(c.HL, {
                                        variant: 'div',
                                        size: 'm',
                                        'aria-hidden': !0,
                                        'data-test-id': l.e8.player.NOTIFICATION_CHANGE_QUALITY_TEXT,
                                        children: p,
                                    }),
                                    !m &&
                                        (0, a.jsx)(o.$, {
                                            className: E().changeButton,
                                            onClick: y,
                                            variant: 'text',
                                            withRipple: !1,
                                            'aria-label': A({ id: 'interface-actions.change' }),
                                            children: (0, a.jsx)(c.HL, { variant: 'div', size: 'm', children: (0, a.jsx)(r.A, { id: 'interface-actions.change' }) }),
                                        }),
                                ],
                            }),
                        [C, A, y, p, m],
                    );
                return (0, a.jsx)(_.$, { closeToast: t, cover: (0, a.jsx)(u.I, { className: E().icon, size: 'xs', variant: 'settings' }), message: B, coverRadius: 's' });
            };
        },
        33898: (e, t, i) => {
            'use strict';
            var a;
            (i.d(t, { Z: () => a }),
                (function (e) {
                    ((e.METHOD_NOT_SUPPORTED = 'E_BEACON_METHOD_NOT_SUPPORTED'),
                        (e.NOT_AVAILABLE = 'E_BEACON_NOT_AVAILABLE'),
                        (e.QUEUE_FAILED = 'E_BEACON_QUEUE_FAILED'),
                        (e.NO_RESPONSE_DATA = 'E_BEACON_NO_RESPONSE_DATA'),
                        (e.RETRY_EXHAUSTED = 'E_BEACON_RETRY_EXHAUSTED'));
                })(a || (a = {})));
        },
        39264: () => {},
        41812: (e, t, i) => {
            'use strict';
            i.d(t, { _: () => m });
            var a = i(32290),
                n = i(63618),
                s = i(96103),
                r = i(55178),
                l = i(60900),
                o = i(99923),
                u = i(21732),
                d = i(63423),
                c = i(82586),
                _ = i(12350),
                p = i(57594),
                E = i(39264),
                C = i.n(E);
            let m = (0, s.PA)((e) => {
                let { className: t, variant: i = 'text', isDisliked: s = !1, onClick: E, iconClassName: m, iconSize: A, size: y = 's', disabled: B = !1 } = e,
                    { user: g } = (0, p.g)(),
                    { formatMessage: N } = (0, l.A)(),
                    h = (0, _.m)(),
                    D = (0, r.useCallback)(
                        (e) => {
                            (null == E || E(e), e.stopPropagation(), h({ actionType: o.ActionType.Dislike }));
                        },
                        [E, h],
                    );
                return (0, a.jsx)(d.$, {
                    className: (0, n.$)(C().root, t),
                    withRipple: !1,
                    variant: i,
                    size: y,
                    radius: 'round',
                    disabled: !g.isAuthorized || B,
                    'aria-label': N({ id: 'interface-actions.do-not-like' }),
                    'aria-pressed': s,
                    onClick: D,
                    icon: (0, a.jsx)(c.I, { size: A, className: m, variant: s ? 'disliked' : 'dislike' }),
                    'data-test-id': u.S7.DISLIKE_BUTTON,
                });
            });
        },
        42464: (e, t, i) => {
            'use strict';
            i.d(t, { N: () => a });
            let a = (e) => 'object' == typeof e && null !== e && 'request' in e && null !== e.request;
        },
        44782: (e, t, i) => {
            'use strict';
            i.d(t, { A: () => B });
            var a = i(32290),
                n = i(6612),
                s = i(91027),
                r = i(45477),
                l = i(75582),
                o = i(44128),
                u = i(57594),
                d = i(63618),
                c = i(60900),
                _ = i(82586),
                p = i(74196),
                E = i(71926),
                C = i(58534),
                m = i(9885),
                A = i.n(m);
            let y = (e) => {
                    let t,
                        { repeatMode: i, closeToast: s } = e,
                        { formatMessage: r } = (0, c.A)(),
                        l = i === n.pM.ONE ? 'repeat_one' : 'repeat';
                    switch (i) {
                        case n.pM.CONTEXT:
                            t = r({ id: 'notifications-info.change-repeat-context' });
                            break;
                        case n.pM.ONE:
                            t = r({ id: 'notifications-info.change-repeat-track' });
                            break;
                        case n.pM.NONE:
                        default:
                            t = r({ id: 'notifications-info.change-repeat-none' });
                    }
                    return (0, a.jsx)(C.$, {
                        cover: (0, a.jsx)(_.I, { className: (0, d.$)(A().icon, { [A().icon_unset]: i === n.pM.NONE }), size: 'xs', variant: l }),
                        message: (0, a.jsxs)(a.Fragment, {
                            children: [
                                (0, a.jsx)(p.q, { children: (0, a.jsx)('p', { role: 'alert', 'aria-label': t }) }),
                                (0, a.jsx)(E.HL, { className: A().message, variant: 'div', type: 'controls', size: 'm', 'aria-hidden': !0, children: t }),
                            ],
                        }),
                        closeToast: s,
                        coverRadius: 's',
                    });
                },
                B = () => {
                    let { notify: e } = (0, l.l)(),
                        { fullscreenPlayer: t } = (0, u.g)(),
                        i = (0, o.e)();
                    return (0, s.c)((s, l) => {
                        if (null === s.entityMeta || !s.canChangeRepeatMode) return;
                        let o = ((e, t) => (t ? (e === n.pM.NONE ? n.pM.ONE : n.pM.NONE) : e === n.pM.NONE ? n.pM.CONTEXT : e === n.pM.CONTEXT ? n.pM.ONE : n.pM.NONE))(
                            s.repeatMode,
                            s.isVibeContext,
                        );
                        (null == i || i.setRepeatMode(o, l), e((0, a.jsx)(y, { repeatMode: o }), { containerId: t.modal.isOpened ? r.u.FULLSCREEN_INFO : r.u.INFO }));
                    });
                };
        },
        45219: (e, t, i) => {
            'use strict';
            i.d(t, { e: () => j });
            var a = i(32290),
                n = i(63618),
                s = i(96103),
                r = i(55178),
                l = i(60900),
                o = i(39407),
                u = i(21732),
                d = i(76232),
                c = i(91027),
                _ = i(63423),
                p = i(82586),
                E = i(84638),
                C = i(74196),
                m = i(71926),
                A = i(26490),
                y = i(78091),
                B = i(70204),
                g = i(34186),
                N = i(83920),
                h = i(45477),
                D = i(75582),
                b = i(81218),
                T = i(57594),
                x = i(19379),
                v = i(32156),
                F = i(78297),
                S = i(31926),
                I = i(10910),
                O = i(98602),
                f = i.n(O),
                R = i(19267),
                L = i.n(R);
            let j = (0, s.PA)(() => {
                let {
                        settings: { isMobile: e },
                        sonataState: t,
                        user: i,
                        quality: s,
                    } = (0, T.g)(),
                    O = (0, A.S)(),
                    { contentRootRef: R } = (0, N.g)(),
                    { formatMessage: j } = (0, l.A)(),
                    k = (0, g.N)(),
                    { notify: M } = (0, D.l)(),
                    q = (0, r.useId)(),
                    P = (0, b.g)(),
                    U = k.get(B.oo),
                    z = (0, F.$)(),
                    Q = (0, r.useCallback)(
                        (e) => {
                            (z(e, t.quality), t.setQuality(e), null == P || P.setQuality(e), U.set(x.c.YmPlayerQuality, e, { expires: 365 }));
                        },
                        [P, t, U, z],
                    ),
                    V = (0, r.useCallback)(
                        (e) => {
                            let t = j({ id: e }).toLowerCase();
                            return {
                                message: (0, a.jsx)(o.A, { id: 'notifications-info.quality-changed', values: { quality: t } }),
                                ariaLabel: j({ id: 'notifications-info.quality-changed' }, { quality: t }),
                            };
                        },
                        [j],
                    ),
                    G = (0, r.useCallback)(
                        (e, i) => () => {
                            if (t.quality === e) return;
                            (s.modal.close(), Q(e));
                            let { message: n, ariaLabel: r } = V(i);
                            M((0, a.jsx)(S.J, { onOpenQualitySettingsMenu: s.modal.open, message: n, ariaLabel: r }), { containerId: h.u.INFO });
                        },
                        [V, M, t.quality, Q, s.modal],
                    ),
                    w = (0, c.c)((e) => {
                        switch (e) {
                            case d.e.HIGH_QUALITY:
                                return u.e8.player.QUALITY_SETTINGS_CONTEXT_MENU_ITEM_HIGH_QUALITY;
                            case d.e.BALANCED:
                                return u.e8.player.QUALITY_SETTINGS_CONTEXT_MENU_ITEM_BALANCED;
                            default:
                                return u.e8.player.QUALITY_SETTINGS_CONTEXT_MENU_ITEM_EFFICIENT;
                        }
                    }),
                    H = (0, r.useCallback)(
                        (e) => {
                            let { selectedItemIcon: t, type: i, qualityMessageId: s, ariaSelected: r, text: l } = e;
                            return (e) => {
                                let { isPopoverEnabled: o, popoverText: u } = e;
                                return (0, a.jsx)(
                                    _.$,
                                    {
                                        isBlock: !0,
                                        disabled: o,
                                        className: (0, n.$)(f().item, L().button, f().expandedItem),
                                        iconPosition: 'right',
                                        icon: t,
                                        onClick: G(i, s),
                                        role: 'option',
                                        'aria-selected': r,
                                        variant: 'text',
                                        'data-test-id': w(i),
                                        children: (0, a.jsxs)('span', {
                                            className: f().itemWrapper,
                                            children: [
                                                (0, a.jsxs)('span', { className: f().item_option, children: [l, ' ', (0, a.jsx)(C.q, { children: u })] }),
                                                (0, a.jsx)('span', { className: (0, n.$)(f().item_option, f().itemSubTitle), children: I.f8[i] }),
                                            ],
                                        }),
                                    },
                                    i,
                                );
                            };
                        },
                        [G, w],
                    );
                (0, r.useEffect)(
                    () => () => {
                        s.modal.close();
                    },
                    [s.modal],
                );
                let K = !i.hasPlus,
                    Y = (0, r.useMemo)(
                        () =>
                            I.GQ.map((i) => {
                                let { type: n, text: s, qualityMessageId: r } = i,
                                    l = n === t.quality ? (0, a.jsx)(p.I, { variant: 'check', size: 'xxs' }) : null,
                                    o = n === t.quality;
                                return (0, a.jsx)(
                                    v.S,
                                    {
                                        isNested: !0,
                                        isEnabled: K && !e,
                                        placement: 'left',
                                        textVariant: 'highQuality',
                                        renderChildren: H({ selectedItemIcon: l, type: n, qualityMessageId: r, ariaSelected: o, text: s }),
                                    },
                                    n,
                                );
                            }),
                        [t.quality, K, e, H],
                    ),
                    $ = (0, r.useMemo)(() => {
                        if (O.isAvailable && !e)
                            return (0, a.jsx)(
                                y.r,
                                {
                                    isExpanded: O.isEnabled,
                                    isDisabled: !1,
                                    className: (0, n.$)(f().equalizer, f().equalizer_withNewQuality),
                                    title: j({ id: 'equalizer.title' }),
                                },
                                q,
                            );
                    }, [q, j, e, O.isEnabled, O.isAvailable]);
                return (0, a.jsxs)(E.a, {
                    size: 'fitContent',
                    placement: e ? 'default' : 'right',
                    open: s.modal.isOpened,
                    onOpenChange: s.modal.onOpenChange,
                    onClose: s.modal.close,
                    className: L().root,
                    contentClassName: L().modalContent,
                    portalNode: e ? null : R,
                    showHeader: !1,
                    overlayClassName: L().overlay,
                    'data-test-id': u.e8.player.QUALITY_SETTINGS_CONTEXT_MENU,
                    children: [
                        !e &&
                            (0, a.jsxs)(m.DZ, {
                                className: (0, n.$)(f().header, f().headerWithCloseButton),
                                variant: 'h4',
                                size: 'xs',
                                weight: 'bold',
                                children: [
                                    (0, a.jsx)(o.A, { id: 'player-actions.audio-quality' }),
                                    (0, a.jsx)(_.$, {
                                        radius: 'round',
                                        color: 'secondary',
                                        size: 'xxs',
                                        icon: (0, a.jsx)(p.I, { variant: 'close', size: 'xxs' }),
                                        onClick: s.modal.close,
                                        'aria-label': j({ id: 'interface-actions.close-quality-settings' }),
                                    }),
                                ],
                            }),
                        Y,
                        $,
                    ],
                });
            });
        },
        45303: (e, t, i) => {
            'use strict';
            i.d(t, { q: () => a });
            var a = (function (e) {
                return ((e.VERTICAL = 'vertical'), (e.HORIZONTAL = 'horizontal'), e);
            })({});
        },
        45495: (e) => {
            e.exports = { icon: 'NotificationShuffle_icon__U_ape', message: 'NotificationShuffle_message__BNxJm', icon_unset: 'NotificationShuffle_icon_unset__y1jg_' };
        },
        50891: (e, t, i) => {
            'use strict';
            i.d(t, { m: () => s });
            var a = i(91945),
                n = i(25090);
            class s extends n.t {
                constructor(e = 'Http Client error', { code: t = 'E_HTTP_CLIENT', ...i } = {}) {
                    (super(e, { code: t, ...i }), (0, a._)(this, 'name', 'HttpException'), Object.setPrototypeOf(this, s.prototype));
                }
            }
        },
        50961: (e, t, i) => {
            'use strict';
            var a;
            (i.d(t, { X: () => a }),
                (function (e) {
                    ((e[(e.NOT_MODIFIED = 304)] = 'NOT_MODIFIED'),
                        (e[(e.NOT_FOUND = 404)] = 'NOT_FOUND'),
                        (e[(e.BAD_REQUEST = 400)] = 'BAD_REQUEST'),
                        (e[(e.REQUEST_TIMEOUT = 408)] = 'REQUEST_TIMEOUT'),
                        (e[(e.PRECONDITION_FAILED = 412)] = 'PRECONDITION_FAILED'),
                        (e[(e.TEAPOT = 418)] = 'TEAPOT'));
                })(a || (a = {})));
        },
        53730: (e, t, i) => {
            'use strict';
            i.d(t, { OH: () => l });
            var a = i(85472),
                n = {
                    6384: (e, t) => {
                        (Object.defineProperty(t, '__esModule', { value: !0 }),
                            (t.findColorBucketByLightness = t.findColorBucketByHue = t.findColorBucketByName = t.LIGHTNESS_COLOR_BUCKETS = t.COLOR_BUCKETS = void 0),
                            (t.COLOR_BUCKETS = [
                                { name: 'coral', start: 2, end: 19, primary: '#F53700', secondary: '#FFD7CC' },
                                { name: 'tangerine', start: 20, end: 64, primary: '#F56E00', secondary: '#FFE3CC' },
                                { name: 'clover', start: 65, end: 149, primary: '#34C03E', secondary: '#D7F4D9' },
                                { name: 'emerald', start: 150, end: 164, primary: '#00C789', secondary: '#CCFFEF' },
                                { name: 'turquoise', start: 165, end: 179, primary: '#00C7A6', secondary: '#CCFFF7' },
                                { name: 'aquamarine', start: 180, end: 189, primary: '#00B2CC', secondary: '#CCF9FF' },
                                { name: 'glacier', start: 190, end: 204, primary: '#5C8E9B', secondary: '#DFE9EC' },
                                { name: 'slate', start: 205, end: 219, primary: '#4F6C9B', secondary: '#DDE4EE' },
                                { name: 'sapphire', start: 220, end: 234, primary: '#0C41E8', secondary: '#CFDAFC' },
                                { name: 'indigo', start: 235, end: 249, primary: '#160CE8', secondary: '#D1CFFC' },
                                { name: 'amethyst', start: 250, end: 259, primary: '#5035C0', secondary: '#DDD7F4' },
                                { name: 'plum', start: 260, end: 269, primary: '#7C35C0', secondary: '#E6D7F4' },
                                { name: 'orchid', start: 270, end: 299, primary: '#BB1ADB', secondary: '#F3D1FA' },
                                { name: 'raspberry', start: 300, end: 329, primary: '#DB1A7D', secondary: '#FAD1E6' },
                                { name: 'fuchsia', start: 330, end: 339, primary: '#F5007C', secondary: '#FFCCE6' },
                                { name: 'carmine', start: 340, end: 1, primary: '#F5002E', secondary: '#FFCCD6' },
                            ]),
                            (t.LIGHTNESS_COLOR_BUCKETS = [
                                { name: 'amethyst', start: 0, end: 22 },
                                { name: 'indigo', start: 22, end: 32 },
                                { name: 'clover', start: 32, end: 42 },
                                { name: 'raspberry', start: 42, end: 51 },
                                { name: 'aquamarine', start: 51, end: 100 },
                            ]),
                            (t.findColorBucketByName = (e) => t.COLOR_BUCKETS.find((t) => t.name === e)),
                            (t.findColorBucketByHue = (e) =>
                                t.COLOR_BUCKETS.find((t) => ((e, t) => (e.start > e.end ? t >= e.start || t <= e.end : t >= e.start && t <= e.end))(t, e))),
                            (t.findColorBucketByLightness = (e) => {
                                let i = t.LIGHTNESS_COLOR_BUCKETS.find((i, a) =>
                                    ((e, i, a) => (a === t.LIGHTNESS_COLOR_BUCKETS.length - 1 ? i >= e.start && i <= e.end : i >= e.start && i < e.end))(i, e, a),
                                );
                                return (0, t.findColorBucketByName)(null == i ? void 0 : i.name);
                            }));
                    },
                    1888: (e, t, i) => {
                        (Object.defineProperty(t, '__esModule', { value: !0 }),
                            (t.getVibePaletteColors =
                                t.getVibeColorBucketSelection =
                                t.getVibePaletteByBucketName =
                                t.FALLBACK_PALETTE =
                                t.FALLBACK_NAME =
                                t.SECONDARY_GRADIENT_STOPS =
                                t.PRIMARY_GRADIENT_STOPS =
                                t.PRIMARY_DARK_IDLE_STOPS =
                                    void 0));
                        let a = i(2660),
                            n = i(6384);
                        ((t.PRIMARY_DARK_IDLE_STOPS = Array.from({ length: 16 }, () => '#000000')),
                            (t.PRIMARY_GRADIENT_STOPS = {
                                carmine: [
                                    '#F5002E',
                                    '#CF0027',
                                    '#AF0021',
                                    '#94001C',
                                    '#7C0017',
                                    '#690014',
                                    '#590011',
                                    '#4B000E',
                                    '#40000C',
                                    '#36000A',
                                    '#2D0008',
                                    '#250007',
                                    '#1D0005',
                                    '#140004',
                                    '#0B0002',
                                    '#000000',
                                ],
                                fuchsia: [
                                    '#F5007C',
                                    '#CF0069',
                                    '#AF0059',
                                    '#94004B',
                                    '#7C003F',
                                    '#690035',
                                    '#59002D',
                                    '#4B0026',
                                    '#400020',
                                    '#36001B',
                                    '#2D0017',
                                    '#250013',
                                    '#1D000F',
                                    '#14000A',
                                    '#0B0006',
                                    '#000000',
                                ],
                                coral: [
                                    '#F53700',
                                    '#CF2F00',
                                    '#AF2700',
                                    '#942100',
                                    '#7C1C00',
                                    '#691800',
                                    '#591400',
                                    '#4B1100',
                                    '#400E00',
                                    '#360C00',
                                    '#2D0A00',
                                    '#250800',
                                    '#1D0700',
                                    '#140400',
                                    '#0B0200',
                                    '#000000',
                                ],
                                tangerine: [
                                    '#F56E00',
                                    '#CF5D00',
                                    '#AF4F00',
                                    '#944200',
                                    '#7C3800',
                                    '#692F00',
                                    '#592800',
                                    '#4B2200',
                                    '#401D00',
                                    '#361800',
                                    '#2D1400',
                                    '#251100',
                                    '#1D0D00',
                                    '#140900',
                                    '#0B0500',
                                    '#000000',
                                ],
                                clover: [
                                    '#34C03E',
                                    '#2CA334',
                                    '#25892C',
                                    '#1F7425',
                                    '#1A621F',
                                    '#16521B',
                                    '#134516',
                                    '#103B13',
                                    '#0D3210',
                                    '#0B2A0E',
                                    '#0A230B',
                                    '#081D09',
                                    '#061707',
                                    '#041005',
                                    '#020903',
                                    '#000000',
                                ],
                                emerald: [
                                    '#00C789',
                                    '#00A874',
                                    '#008E62',
                                    '#007853',
                                    '#006545',
                                    '#00553B',
                                    '#004832',
                                    '#003D2A',
                                    '#003424',
                                    '#002C1E',
                                    '#002519',
                                    '#001E15',
                                    '#001810',
                                    '#00100B',
                                    '#000906',
                                    '#000000',
                                ],
                                turquoise: [
                                    '#00C7A6',
                                    '#00A88C',
                                    '#008E77',
                                    '#007864',
                                    '#006554',
                                    '#005547',
                                    '#00483C',
                                    '#003D33',
                                    '#00342B',
                                    '#002C25',
                                    '#00251E',
                                    '#001E19',
                                    '#001814',
                                    '#00100E',
                                    '#000907',
                                    '#000000',
                                ],
                                aquamarine: [
                                    '#00B2CC',
                                    '#0096AC',
                                    '#007F92',
                                    '#006C7B',
                                    '#005A67',
                                    '#004C57',
                                    '#00414A',
                                    '#00363E',
                                    '#002E35',
                                    '#00272D',
                                    '#002125',
                                    '#001B1F',
                                    '#001518',
                                    '#000F11',
                                    '#000809',
                                    '#000000',
                                ],
                                glacier: [
                                    '#5C8E9B',
                                    '#4E7883',
                                    '#42666F',
                                    '#37565D',
                                    '#2F484F',
                                    '#273D42',
                                    '#213338',
                                    '#1C2B2F',
                                    '#182528',
                                    '#141F22',
                                    '#111A1C',
                                    '#0E1517',
                                    '#0B1112',
                                    '#080C0D',
                                    '#040607',
                                    '#000000',
                                ],
                                slate: [
                                    '#4F6C9B',
                                    '#435B83',
                                    '#384D6F',
                                    '#30415D',
                                    '#28374F',
                                    '#222E42',
                                    '#1D2738',
                                    '#18212F',
                                    '#141C28',
                                    '#111822',
                                    '#0F141C',
                                    '#0C1017',
                                    '#090D12',
                                    '#07090D',
                                    '#040507',
                                    '#000000',
                                ],
                                sapphire: [
                                    '#0C41E8',
                                    '#0A37C4',
                                    '#092EA6',
                                    '#07278C',
                                    '#062176',
                                    '#051C63',
                                    '#041854',
                                    '#041447',
                                    '#03113C',
                                    '#030E33',
                                    '#020C2B',
                                    '#020A23',
                                    '#01081B',
                                    '#010513',
                                    '#01030A',
                                    '#000000',
                                ],
                                indigo: [
                                    '#160CE8',
                                    '#130AC4',
                                    '#1009A6',
                                    '#0D078C',
                                    '#0B0676',
                                    '#090563',
                                    '#080454',
                                    '#070447',
                                    '#06033C',
                                    '#050333',
                                    '#04022B',
                                    '#030223',
                                    '#03011B',
                                    '#020113',
                                    '#01010A',
                                    '#000000',
                                ],
                                amethyst: [
                                    '#5035C0',
                                    '#442DA3',
                                    '#392689',
                                    '#302074',
                                    '#291B62',
                                    '#221752',
                                    '#1D1345',
                                    '#18103B',
                                    '#150E32',
                                    '#120C2A',
                                    '#0F0A23',
                                    '#0C081D',
                                    '#090617',
                                    '#070410',
                                    '#040209',
                                    '#000000',
                                ],
                                plum: [
                                    '#7C35C0',
                                    '#692DA3',
                                    '#592689',
                                    '#4B2074',
                                    '#3F1B62',
                                    '#351752',
                                    '#2D1345',
                                    '#26103B',
                                    '#200E32',
                                    '#1B0C2A',
                                    '#170A23',
                                    '#13081D',
                                    '#0F0617',
                                    '#0A0410',
                                    '#060209',
                                    '#000000',
                                ],
                                orchid: [
                                    '#BB1ADB',
                                    '#9E16B9',
                                    '#86139D',
                                    '#711084',
                                    '#5F0D6F',
                                    '#500B5E',
                                    '#44094F',
                                    '#390843',
                                    '#310739',
                                    '#290630',
                                    '#220528',
                                    '#1C0421',
                                    '#16031A',
                                    '#100212',
                                    '#08010A',
                                    '#000000',
                                ],
                                raspberry: [
                                    '#DB1A7D',
                                    '#B9166A',
                                    '#9D1359',
                                    '#84104B',
                                    '#6F0D40',
                                    '#5E0B36',
                                    '#4F092D',
                                    '#430826',
                                    '#390720',
                                    '#30061B',
                                    '#280517',
                                    '#210413',
                                    '#1A030F',
                                    '#12020A',
                                    '#0A0106',
                                    '#000000',
                                ],
                            }),
                            (t.SECONDARY_GRADIENT_STOPS = {
                                carmine: [
                                    '#FFCCD6',
                                    '#D8ADB5',
                                    '#B69299',
                                    '#9A7B81',
                                    '#82686D',
                                    '#6D575C',
                                    '#5C4A4D',
                                    '#4E3E42',
                                    '#423538',
                                    '#382D2F',
                                    '#2F2527',
                                    '#261F20',
                                    '#1E1819',
                                    '#151112',
                                    '#0B090A',
                                    '#000000',
                                ],
                                fuchsia: [
                                    '#FFCCE6',
                                    '#D8ADC3',
                                    '#B692A4',
                                    '#9A7B8B',
                                    '#826875',
                                    '#6D5763',
                                    '#5C4A53',
                                    '#4E3E46',
                                    '#42353C',
                                    '#382D32',
                                    '#2F252A',
                                    '#261F23',
                                    '#1E181B',
                                    '#151113',
                                    '#0B090A',
                                    '#000000',
                                ],
                                coral: [
                                    '#FFD7CC',
                                    '#D8B6AD',
                                    '#B69A92',
                                    '#9A827B',
                                    '#826D68',
                                    '#6D5C57',
                                    '#5C4E4A',
                                    '#4E423E',
                                    '#423835',
                                    '#382F2D',
                                    '#2F2825',
                                    '#26201F',
                                    '#1E1918',
                                    '#151211',
                                    '#0B0A09',
                                    '#000000',
                                ],
                                tangerine: [
                                    '#FFE3CC',
                                    '#D8C0AD',
                                    '#B6A292',
                                    '#9A897B',
                                    '#827368',
                                    '#6D6157',
                                    '#5C524A',
                                    '#4E463E',
                                    '#423B35',
                                    '#38322D',
                                    '#2F2A25',
                                    '#26221F',
                                    '#1E1B18',
                                    '#151311',
                                    '#0B0A09',
                                    '#000000',
                                ],
                                clover: [
                                    '#D7F4D9',
                                    '#B6CFB8',
                                    '#9AAE9B',
                                    '#829383',
                                    '#6D7C6E',
                                    '#5C695D',
                                    '#4E584F',
                                    '#424B42',
                                    '#383F38',
                                    '#2F3630',
                                    '#282D28',
                                    '#202521',
                                    '#191D1A',
                                    '#121412',
                                    '#0A0B0A',
                                    '#000000',
                                ],
                                emerald: [
                                    '#CCFFEF',
                                    '#ADD8CA',
                                    '#92B6AB',
                                    '#7B9A90',
                                    '#688279',
                                    '#576D66',
                                    '#4A5C56',
                                    '#3E4E49',
                                    '#35423E',
                                    '#2D3834',
                                    '#252F2C',
                                    '#1F2624',
                                    '#181E1C',
                                    '#111514',
                                    '#090B0B',
                                    '#000000',
                                ],
                                turquoise: [
                                    '#CCFFF7',
                                    '#ADD8D1',
                                    '#92B6B1',
                                    '#7B9A95',
                                    '#68827D',
                                    '#576D6A',
                                    '#4A5C59',
                                    '#3E4E4C',
                                    '#354240',
                                    '#2D3836',
                                    '#252F2D',
                                    '#1F2625',
                                    '#181E1D',
                                    '#111515',
                                    '#090B0B',
                                    '#000000',
                                ],
                                aquamarine: [
                                    '#CCF9FF',
                                    '#ADD3D8',
                                    '#92B2B6',
                                    '#7B969A',
                                    '#687F82',
                                    '#576B6D',
                                    '#4A5A5C',
                                    '#3E4C4E',
                                    '#354142',
                                    '#2D3738',
                                    '#252E2F',
                                    '#1F2626',
                                    '#181D1E',
                                    '#111515',
                                    '#090B0B',
                                    '#000000',
                                ],
                                glacier: [
                                    '#DFE9EC',
                                    '#BDC5C8',
                                    '#9FA7A9',
                                    '#868C8E',
                                    '#717678',
                                    '#606465',
                                    '#515455',
                                    '#444748',
                                    '#3A3C3D',
                                    '#313334',
                                    '#292B2B',
                                    '#222324',
                                    '#1A1B1C',
                                    '#131314',
                                    '#0A0A0B',
                                    '#000000',
                                ],
                                slate: [
                                    '#DDE4EE',
                                    '#BBC1CA',
                                    '#9EA3AA',
                                    '#85898F',
                                    '#707479',
                                    '#5F6266',
                                    '#505256',
                                    '#444649',
                                    '#393B3E',
                                    '#303234',
                                    '#292A2C',
                                    '#212224',
                                    '#1A1B1C',
                                    '#121314',
                                    '#0A0A0B',
                                    '#000000',
                                ],
                                sapphire: [
                                    '#CFDAFC',
                                    '#AFB9D5',
                                    '#949CB4',
                                    '#7D8398',
                                    '#696F80',
                                    '#595D6C',
                                    '#4B4F5B',
                                    '#3F434D',
                                    '#363941',
                                    '#2D3037',
                                    '#26282E',
                                    '#1F2126',
                                    '#181A1E',
                                    '#111215',
                                    '#090A0B',
                                    '#000000',
                                ],
                                indigo: [
                                    '#D1CFFC',
                                    '#B1AFD5',
                                    '#9594B4',
                                    '#7E7D98',
                                    '#6A6980',
                                    '#5A596C',
                                    '#4C4B5B',
                                    '#403F4D',
                                    '#363641',
                                    '#2E2D37',
                                    '#26262E',
                                    '#1F1F26',
                                    '#19181E',
                                    '#111115',
                                    '#09090B',
                                    '#000000',
                                ],
                                amethyst: [
                                    '#DDD7F4',
                                    '#BBB6CF',
                                    '#9E9AAE',
                                    '#858293',
                                    '#706D7C',
                                    '#5F5C69',
                                    '#504E58',
                                    '#44424B',
                                    '#39383F',
                                    '#302F36',
                                    '#29282D',
                                    '#212025',
                                    '#1A191D',
                                    '#121214',
                                    '#0A0A0B',
                                    '#000000',
                                ],
                                plum: [
                                    '#E6D7F4',
                                    '#C3B6CF',
                                    '#A49AAE',
                                    '#8B8293',
                                    '#756D7C',
                                    '#635C69',
                                    '#534E58',
                                    '#46424B',
                                    '#3C383F',
                                    '#322F36',
                                    '#2A282D',
                                    '#232025',
                                    '#1B191D',
                                    '#131214',
                                    '#0A0A0B',
                                    '#000000',
                                ],
                                orchid: [
                                    '#F3D1FA',
                                    '#CEB1D4',
                                    '#AE95B3',
                                    '#937E97',
                                    '#7B6A7F',
                                    '#685A6B',
                                    '#584C5A',
                                    '#4A404D',
                                    '#3F3641',
                                    '#352E37',
                                    '#2D262E',
                                    '#251F26',
                                    '#1D191D',
                                    '#141115',
                                    '#0B090B',
                                    '#000000',
                                ],
                                raspberry: [
                                    '#FAD1E6',
                                    '#D4B1C3',
                                    '#B395A4',
                                    '#977E8B',
                                    '#7F6A75',
                                    '#6B5A63',
                                    '#5A4C53',
                                    '#4D4046',
                                    '#41363C',
                                    '#372E32',
                                    '#2E262A',
                                    '#261F23',
                                    '#1D191B',
                                    '#151113',
                                    '#0B090A',
                                    '#000000',
                                ],
                            }),
                            (t.FALLBACK_NAME = 'slate'),
                            (t.FALLBACK_PALETTE = {
                                primary: '#4F6C9B',
                                secondary: '#DDE4EE',
                                primaryStops: t.PRIMARY_GRADIENT_STOPS[t.FALLBACK_NAME],
                                secondaryStops: t.SECONDARY_GRADIENT_STOPS[t.FALLBACK_NAME],
                                primaryDarkIdleStops: t.PRIMARY_DARK_IDLE_STOPS,
                            }));
                        let s = (e) => ({
                            primary: e.primary,
                            secondary: e.secondary,
                            primaryStops: t.PRIMARY_GRADIENT_STOPS[e.name],
                            secondaryStops: t.SECONDARY_GRADIENT_STOPS[e.name],
                            primaryDarkIdleStops: t.PRIMARY_DARK_IDLE_STOPS,
                        });
                        ((t.getVibePaletteByBucketName = (e) => {
                            let i = (0, n.findColorBucketByName)(e);
                            return i ? s(i) : t.FALLBACK_PALETTE;
                        }),
                            (t.getVibeColorBucketSelection = (e) => {
                                let t = (0, a.hexToHsl)(e),
                                    i = t.s > 0 ? 'hue' : 'lightness';
                                return { bucket: 'hue' === i ? (0, n.findColorBucketByHue)(t.h) : (0, n.findColorBucketByLightness)(t.l), hsl: t, mode: i };
                            }),
                            (t.getVibePaletteColors = (e) => {
                                if (!e) return t.FALLBACK_PALETTE;
                                let { bucket: i } = (0, t.getVibeColorBucketSelection)(e);
                                return i ? s(i) : t.FALLBACK_PALETTE;
                            }));
                    },
                    2660: (e) => {
                        e.exports = a;
                    },
                },
                s = {},
                r = (function e(t) {
                    var i = s[t];
                    if (void 0 !== i) return i.exports;
                    var a = (s[t] = { exports: {} });
                    return (n[t](a, a.exports, e), a.exports);
                })(1888);
            (r.FALLBACK_NAME,
                r.FALLBACK_PALETTE,
                r.PRIMARY_DARK_IDLE_STOPS,
                r.PRIMARY_GRADIENT_STOPS,
                r.SECONDARY_GRADIENT_STOPS,
                r.__esModule,
                r.getVibeColorBucketSelection,
                r.getVibePaletteByBucketName);
            var l = r.getVibePaletteColors;
        },
        58625: (e, t, i) => {
            'use strict';
            i.d(t, { C: () => x });
            var a = i(32290),
                n = i(96103),
                s = i(60900),
                r = i(21732),
                l = i(58723),
                o = i(57594),
                u = i(63618),
                d = i(55178),
                c = i(58359),
                _ = i(63423),
                p = i(50162),
                E = i(71926),
                C = i(2125),
                m = i(48922),
                A = i(43564);
            let y = (e) => {
                var t, i, a;
                let { seed: n, title: r, isStation: l } = e,
                    { vibe: u } = (0, o.g)(),
                    { applySetting: c } = (0, A.B)({
                        seeds: null != (a = null == (t = u.meta) ? void 0 : t.seeds) ? a : [],
                        pageIdForFrom: m._Q.HOME,
                        blockIdForFrom: C.h.RUP_MAIN_RADIO,
                    }),
                    { formatMessage: _ } = (0, s.A)(),
                    p = !!(null == (i = u.meta) ? void 0 : i.seeds.includes(n)),
                    E = u.applyingSetting === n,
                    y = (0, d.useMemo)(
                        () => (p ? ''.concat(_({ id: 'vibe-actions.remove' }), ' ').concat(r) : ''.concat(_({ id: 'vibe-actions.apply' }), ' ').concat(r)),
                        [p, r, _],
                    );
                return {
                    isApplying: E,
                    isSelected: p,
                    ariaLabel: y,
                    ariaPressed: p,
                    onClickHandler: (0, d.useCallback)(async () => {
                        (u.setApplyingSetting(n), await c(n, l), u.setApplyingSetting());
                    }, [c, l, n, u]),
                };
            };
            var B = i(86323),
                g = i.n(B);
            let N = (0, n.PA)((e) => {
                let { item: t } = e,
                    { vibe: i } = (0, o.g)(),
                    n = (0, d.useRef)(null),
                    { isApplying: s, isSelected: l, ariaPressed: C, onClickHandler: m } = y({ seed: t.seed, title: t.title, isStation: !0 }),
                    A = (0, d.useCallback)(
                        (e) => {
                            i.isApplying || (n.current && (0, c.P)(e, g().ripple, n.current), m());
                        },
                        [m, i.isApplying],
                    );
                return (0, a.jsxs)(_.$, {
                    radius: 'xxxl',
                    className: (0, u.$)(g().button, g().textButton, { [g().button_selected]: l, [g().button_applying]: s, [g().specialButton]: t.specialContext }),
                    onClick: A,
                    'aria-disabled': i.isApplying,
                    'aria-pressed': C,
                    withRipple: !1,
                    'data-test-id': r.Kq.vibeSettings.VIBE_SETTINGS_CONTEXT_BUTTON,
                    children: [
                        t.specialContext && (0, a.jsx)(p._V, { className: g().specialImage, src: t.specialContextImage, size: 100, fit: 'cover', withAvatarReplace: !0 }),
                        (0, a.jsx)(E.HL, { variant: 'span', type: 'controls', size: 'm', weight: 'medium', className: g().title, children: t.title }),
                        (0, a.jsx)('div', { className: g().rippleContainer, ref: n }),
                    ],
                });
            });
            var h = i(97323);
            let D = (0, n.PA)((e) => {
                let { type: t, restrictionValue: i } = e,
                    { vibe: n } = (0, o.g)(),
                    s = (0, d.useRef)(null),
                    { isApplying: l, isSelected: C, ariaPressed: m, onClickHandler: A } = y({ seed: i.seed, title: i.title }),
                    B = (0, d.useCallback)(
                        (e) => {
                            n.isApplying || (s.current && (0, c.P)(e, g().ripple, s.current), A());
                        },
                        [A, n.isApplying],
                    ),
                    N = (0, d.useMemo)(
                        () => (0, a.jsx)(E.HL, { variant: 'span', type: 'controls', size: 'm', weight: 'medium', className: g().title, children: i.title }),
                        [i.title],
                    );
                switch (t) {
                    case h.s.DIVERSITY:
                        return (0, a.jsxs)(_.$, {
                            className: (0, u.$)(g().button, g().diversityButton, { [g().button_selected]: C, [g().button_applying]: l }),
                            radius: 'xl',
                            'aria-disabled': n.isApplying,
                            'aria-pressed': m,
                            onClick: B,
                            withRipple: !1,
                            'data-test-id': r.Kq.vibeSettings.VIBE_SETTINGS_DIVERSITY_BUTTON,
                            children: [
                                (0, a.jsx)(p._V, {
                                    'aria-hidden': !0,
                                    src: i.imageUrl,
                                    fit: 'contain',
                                    width: 40,
                                    height: 40,
                                    withAvatarReplace: !0,
                                    className: g().diversityButtonImage,
                                }),
                                N,
                                (0, a.jsx)('div', { className: g().rippleContainer, ref: s }),
                            ],
                        });
                    case h.s.MOOD_ENERGY:
                        return (0, a.jsxs)('div', {
                            className: g().moodEnergy,
                            'data-test-id': r.Kq.vibeSettings.VIBE_SETTINGS_MOOD_ENERGY_BUTTON,
                            children: [
                                (0, a.jsx)(_.$, {
                                    variant: 'text',
                                    className: (0, u.$)(g().button, g().moodEnergyButton, { [g().button_selected]: C, [g().button_applying]: l }),
                                    radius: 'round',
                                    onClick: B,
                                    withRipple: !1,
                                    'aria-disabled': n.isApplying,
                                    'aria-pressed': m,
                                    'aria-label': i.title,
                                    children: (0, a.jsx)(p._V, {
                                        src: i.imageUrl,
                                        fit: 'contain',
                                        width: 52,
                                        height: 52,
                                        'aria-hidden': !0,
                                        withAvatarReplace: !0,
                                        className: g().moodEnergyButtonImage,
                                    }),
                                }),
                                (0, a.jsx)('span', { 'aria-hidden': !0, children: N }),
                            ],
                        });
                    case h.s.LANGUAGE:
                        return (0, a.jsxs)(_.$, {
                            radius: 'xxxl',
                            className: (0, u.$)(g().button, g().textButton, { [g().button_selected]: C, [g().button_applying]: l }),
                            onClick: B,
                            withRipple: !1,
                            'aria-disabled': n.isApplying,
                            'aria-pressed': m,
                            'data-test-id': r.Kq.vibeSettings.VIBE_SETTINGS_LANGUAGE_BUTTON,
                            children: [N, (0, a.jsx)('div', { className: g().rippleContainer, ref: s })],
                        });
                    default:
                        return null;
                }
            });
            var b = i(90875),
                T = i.n(b);
            let x = (0, n.PA)(() => {
                let { vibeSettings: e } = (0, o.g)(),
                    { formatMessage: t } = (0, s.A)();
                return (
                    e.isNeededToLoad && e.getData(),
                    (0, a.jsxs)('div', {
                        className: T().root,
                        children: [
                            e.contextItems.length > 0 &&
                                (0, a.jsx)(l.m, {
                                    title: t({ id: 'interface-actions.my-vibe-context-settings' }),
                                    restrictionsClassName: T().contextItems,
                                    'data-test-id': r.Kq.vibeSettings.VIBE_SETTINGS_CONTEXT_BLOCK,
                                    children: e.contextItems.map((e) =>
                                        (0, a.jsx)(N, { item: e, 'data-test-id': r.Kq.vibeSettings.VIBE_SETTINGS_CONTEXT_BUTTON }, e.seed),
                                    ),
                                }),
                            e.diversity &&
                                (0, a.jsx)(l.m, {
                                    title: e.diversity.title,
                                    restrictionsClassName: T().diversity,
                                    'data-test-id': r.Kq.vibeSettings.VIBE_SETTINGS_DIVERSITY_BLOCK,
                                    children: e.diversity.values.map((t) => {
                                        var i;
                                        return (0, a.jsx)(D, { type: null == (i = e.diversity) ? void 0 : i.type, restrictionValue: t }, t.value);
                                    }),
                                }),
                            e.moodEnergy &&
                                (0, a.jsx)(l.m, {
                                    title: e.moodEnergy.title,
                                    restrictionsClassName: T().moodEnergy,
                                    'data-test-id': r.Kq.vibeSettings.VIBE_SETTINGS_MOOD_ENERGY_BLOCK,
                                    children: e.moodEnergy.values.map((t) => {
                                        var i;
                                        return (0, a.jsx)(D, { type: null == (i = e.moodEnergy) ? void 0 : i.type, restrictionValue: t }, t.value);
                                    }),
                                }),
                            e.language &&
                                (0, a.jsx)(l.m, {
                                    title: e.language.title,
                                    restrictionsClassName: T().contextItems,
                                    'data-test-id': r.Kq.vibeSettings.VIBE_SETTINGS_LANGUAGE_BLOCK,
                                    children: e.language.values.map((t) => {
                                        var i;
                                        return (0, a.jsx)(D, { type: null == (i = e.language) ? void 0 : i.type, restrictionValue: t }, t.value);
                                    }),
                                }),
                        ],
                    })
                );
            });
        },
        59802: (e, t, i) => {
            'use strict';
            i.d(t, { e: () => o });
            var a = i(55178),
                n = i(72676),
                s = i(92495),
                r = i(44128),
                l = i(57594);
            let o = () => {
                let { freePlayerAccess: e } = (0, l.g)(),
                    t = (0, r.e)();
                (0, a.useEffect)(() => {
                    let i =
                        null == t
                            ? void 0
                            : t.state.playerState.event.onChange((t) => {
                                  t === n.Iu.PLAYING && e.showRestrictionModal(s.W.Playing);
                              });
                    return () => {
                        null == i || i();
                    };
                }, [t, e]);
            };
        },
        60070: (e) => {
            e.exports = {
                button: 'ChangeVolume_button__4HLEr',
                icon: 'ChangeVolume_icon__5Zv2a',
                sliderContainer: 'ChangeVolume_sliderContainer__pvOZa',
                sliderContainer_focusVisible: 'ChangeVolume_sliderContainer_focusVisible__1JxI9',
                wrapperSlider: 'ChangeVolume_wrapperSlider__9S1Vi',
                root: 'ChangeVolume_root__HDxtA',
                slider: 'ChangeVolume_slider__fCKGZ',
                important: 'ChangeVolume_important__ZIYpu',
            };
        },
        77035: (e, t, i) => {
            'use strict';
            i.d(t, { e: () => B });
            var a = i(32290),
                n = i(91027),
                s = i(45477),
                r = i(75582),
                l = i(44128),
                o = i(57594),
                u = i(63618),
                d = i(55178),
                c = i(60900),
                _ = i(82586),
                p = i(74196),
                E = i(71926),
                C = i(58534),
                m = i(45495),
                A = i.n(m);
            let y = (e) => {
                    let { shuffle: t, closeToast: i } = e,
                        { formatMessage: n } = (0, c.A)(),
                        s = (0, d.useMemo)(() => (t ? n({ id: 'notifications-info.shuffle-enabled' }) : n({ id: 'notifications-info.shuffle-disabled' })), [n, t]),
                        r = (0, d.useMemo)(
                            () =>
                                (0, a.jsxs)(a.Fragment, {
                                    children: [
                                        (0, a.jsx)(p.q, { children: (0, a.jsx)('p', { role: 'alert', children: s }) }),
                                        (0, a.jsx)(E.HL, { className: A().message, variant: 'div', type: 'controls', size: 'm', 'aria-hidden': !0, children: s }),
                                    ],
                                }),
                            [s],
                        );
                    return (0, a.jsx)(C.$, {
                        cover: (0, a.jsx)(_.I, { className: (0, u.$)(A().icon, { [A().icon_unset]: !t }), size: 'xs', variant: 'shuffle' }),
                        message: r,
                        closeToast: i,
                        coverRadius: 's',
                    });
                },
                B = () => {
                    let { notify: e } = (0, r.l)(),
                        { fullscreenPlayer: t } = (0, o.g)(),
                        i = (0, l.e)();
                    return (0, n.c)((n, r) => {
                        null !== n.entityMeta &&
                            n.canShuffle &&
                            (null == i || i.toggleShuffle(r),
                            e((0, a.jsx)(y, { shuffle: !!(null == i ? void 0 : i.getState(r).queueState.shuffle.value) }), {
                                containerId: t.modal.isOpened ? s.u.FULLSCREEN_INFO : s.u.INFO,
                            }));
                    });
                };
        },
        78297: (e, t, i) => {
            'use strict';
            i.d(t, { $: () => d });
            var a = i(55178),
                n = i(17811),
                s = i(93476),
                r = i(74416),
                l = i(79374),
                o = i(37240),
                u = i(62376);
            let d = () => {
                let e = (0, r.st)(),
                    t = (0, u.U)(),
                    { hash: i } = (0, r.gf)(),
                    { pageId: d } = (0, o.$)();
                return (0, a.useCallback)(
                    (a, r) => {
                        if (!e || !d || !l.W[d] || !i) return;
                        let o = { hash: i, pageId: l.W[d], propertyKey: 'sound_quality', propertyValueNew: a, propertyValueOld: r },
                            u = (0, n.F)({ params: o, logger: t, context: 'useSendEventOnQualitySettingsChanged' });
                        u && (0, s.Bl)(e.evgenInstance, u);
                    },
                    [e, i, t, d],
                );
            };
        },
        78648: (e, t, i) => {
            'use strict';
            i.d(t, { C8: () => s, UC: () => r, dM: () => l, uV: () => o });
            var a = i(87953),
                n = i(42464);
            let s = (e) => {
                    if (void 0 === e || '' === e) return 'missing';
                    let t = Number(e);
                    return !Number.isFinite(t) || t < 0 ? 'invalid' : t < 86400 ? 'lt-1d' : t <= 2592e3 ? '1-30d' : 'gt-30d';
                },
                r = (e) => (e.uid ? 'authorized' : 'no-uid'),
                l = (e) => {
                    if (!(e instanceof a.m5) || !(0, n.N)(e.cause)) return 'unexpected';
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
                o = (e) => {
                    try {
                        var t;
                        null == (t = window.musicDesktop) || t.authorization.reportDiagnostic(e);
                    } catch (e) {}
                };
        },
        80346: (e, t, i) => {
            'use strict';
            i.d(t, { r: () => B });
            var a = i(32290),
                n = i(63618),
                s = i(96103),
                r = i(55178),
                l = i(60900),
                o = i(21732),
                u = i(91027),
                d = i(6752),
                c = i(44989),
                _ = i(63423),
                p = i(82586),
                E = i(378),
                C = i(44128),
                m = i(45303),
                A = i(60070),
                y = i.n(A);
            let B = (0, s.PA)((e) => {
                let {
                        className: t,
                        horizontalSliderClassName: i,
                        verticalSliderClassName: s,
                        variant: A = m.q.HORIZONTAL,
                        playbackId: B,
                        onVolumeClick: g,
                        onVolumeSet: N,
                        sonataVolume: h,
                        buttonClassName: D,
                    } = e,
                    [b, T] = (0, r.useState)(void 0),
                    { formatMessage: x } = (0, l.A)(),
                    v = (0, C.e)(),
                    { state: F, toggleTrue: S, toggleFalse: I } = (0, c.e)(!1);
                (0, r.useEffect)(() => {
                    'number' == typeof h && T(h);
                }, [h]);
                let O = Math.round((null != b ? b : 1) * 100) / 100,
                    f = (0, u.c)((e) => {
                        null == v || v.setExponentVolume(e, B);
                    });
                (0, r.useEffect)(() => {
                    let e = () => {
                            (I(), document.activeElement instanceof HTMLElement && document.activeElement.blur());
                        },
                        t = () => {
                            document.hidden && e();
                        };
                    return (
                        document.addEventListener('visibilitychange', t),
                        window.addEventListener('blur', e),
                        () => {
                            (document.removeEventListener('visibilitychange', t), window.removeEventListener('blur', e));
                        }
                    );
                }, [I]);
                let R = (0, u.c)((e) => {
                        (T(e), f(e), null == N || N(e));
                    }),
                    L = (0, u.c)(async (e) => {
                        await g(O, e);
                    }),
                    j = 0 === O ? 'volumeOff' : 'volume',
                    k = 0 === O ? x({ id: 'player-actions.volume-on' }) : x({ id: 'player-actions.volume-off' }),
                    M = (0, u.c)((e) => {
                        R(Math.max(0, Math.min(1, Math.round(100 * (O + (e.deltaY > 0 ? -1 : 1) * 0.01)) / 100)));
                    }),
                    q = (0, d.L)(() => {
                        if (A === m.q.HORIZONTAL)
                            return (0, a.jsx)(E.A, {
                                onWheel: M,
                                className: i,
                                thumbSize: 's',
                                trackSize: 's',
                                value: O,
                                maxValue: 1,
                                step: 0.01,
                                onChange: R,
                                'aria-label': x({ id: 'player-actions.volume-control' }),
                                'data-test-id': o.Kq.changeVolume.CHANGE_VOLUME_SLIDER,
                            });
                    }),
                    P = (0, d.L)(() => {
                        if (A === m.q.VERTICAL)
                            return (0, a.jsx)('div', {
                                onWheel: M,
                                className: (0, n.$)(y().sliderContainer, { [y().sliderContainer_focusVisible]: F }),
                                children: (0, a.jsx)('div', {
                                    className: (0, n.$)(y().wrapperSlider, s),
                                    children: (0, a.jsx)(E.A, {
                                        onMouseLeave: I,
                                        className: (0, n.$)(y().slider, y().important),
                                        thumbSize: 's',
                                        onFocus: S,
                                        onBlur: I,
                                        trackSize: 's',
                                        value: O,
                                        maxValue: 1,
                                        step: 0.01,
                                        onChange: R,
                                        'aria-label': x({ id: 'player-actions.volume-control' }),
                                        'data-test-id': o.Kq.changeVolume.CHANGE_VOLUME_SLIDER,
                                    }),
                                }),
                            });
                    });
                return (0, a.jsxs)('div', {
                    className: (0, n.$)(y().root, t),
                    children: [
                        P,
                        (0, a.jsx)(_.$, {
                            onWheel: M,
                            radius: 'round',
                            size: 'xxxs',
                            variant: 'text',
                            withRipple: !1,
                            onClick: L,
                            'aria-label': k,
                            icon: (0, a.jsx)(p.I, { size: 'xs', className: y().icon, variant: j }),
                            className: (0, n.$)(y().button, D),
                            'data-test-id': o.Kq.changeVolume.CHANGE_VOLUME_BUTTON,
                        }),
                        q,
                    ],
                });
            });
        },
        86323: (e) => {
            e.exports = {
                button: 'RestrictionButton_button__eLMkU',
                button_selected: 'RestrictionButton_button_selected__LHD20',
                button_applying: 'RestrictionButton_button_applying___ik5f',
                'applying-setting': 'RestrictionButton_applying-setting__utqyc',
                diversityButton: 'RestrictionButton_diversityButton__uclSi',
                diversityButtonImage: 'RestrictionButton_diversityButtonImage__21oME',
                moodEnergy: 'RestrictionButton_moodEnergy__q_I4y',
                moodEnergyButton: 'RestrictionButton_moodEnergyButton__yKkaS',
                moodEnergyButtonImage: 'RestrictionButton_moodEnergyButtonImage__zxT2C',
                textButton: 'RestrictionButton_textButton__HC_AE',
                title: 'RestrictionButton_title__UZn0O',
                specialButton: 'RestrictionButton_specialButton__Di6B9',
                specialImage: 'RestrictionButton_specialImage__0E3x2',
                rippleContainer: 'RestrictionButton_rippleContainer__xPANO',
                ripple: 'RestrictionButton_ripple__Rsu8b',
            };
        },
        87953: (e, t, i) => {
            'use strict';
            i.d(t, { GX: () => s.G, X1: () => a.X, m5: () => n.m });
            var a = i(50961),
                n = i(50891),
                s = i(10733);
            i(33898);
        },
        90829: (e, t, i) => {
            'use strict';
            i.d(t, { Z: () => c });
            var a = i(32290),
                n = i(55178),
                s = i(60900),
                r = i(21732),
                l = i(71926),
                o = i(48027),
                u = i(32562),
                d = i(94218);
            let c = (e) => {
                let { textVariant: t, vibeTextVariant: i, ...c } = e,
                    _ = (0, n.useId)(),
                    { formatMessage: p } = (0, s.A)(),
                    E = (0, n.useMemo)(() => {
                        switch (i) {
                            case o.I.ALBUM:
                                return p({ id: 'onboarding.authorize-to-listen-vibe-by-album' }, { br: '\n', nbsp: ' ' });
                            case o.I.ARTIST:
                                return p({ id: 'onboarding.authorize-to-listen-vibe-by-artist' }, { br: '\n', nbsp: ' ' });
                            case o.I.PLAYLIST:
                                return p({ id: 'onboarding.authorize-to-listen-vibe-by-playlist' }, { br: '\n', nbsp: ' ' });
                            case o.I.TRACK:
                                return p({ id: 'onboarding.authorize-to-listen-vibe-by-track' }, { br: '\n', nbsp: ' ' });
                            case o.I.GENRE:
                            case o.I.MICRO_GENRE:
                                return p({ id: 'onboarding.authorize-to-listen-vibe-by-genre' }, { br: '\n', nbsp: ' ' });
                            case o.I.MOOD:
                                return p({ id: 'onboarding.authorize-to-listen-vibe-by-mood' }, { br: '\n', nbsp: ' ' });
                            case o.I.ACTIVITY:
                                return p({ id: 'onboarding.authorize-to-listen-vibe-by-activity' }, { br: '\n', nbsp: ' ' });
                            default:
                                return p({ id: 'onboarding.authorize-to-listen-vibe' }, { br: '\n', nbsp: ' ' });
                        }
                    }, [i, p]),
                    C = (0, n.useMemo)(() => {
                        switch (t) {
                            case 'fullTracks':
                                return p({ id: 'onboarding.authorize-to-listen-full' }, { br: '\n', nbsp: ' ' });
                            case 'changeQuality':
                                return p({ id: 'onboarding.authorize-to-change-quality' }, { br: '\n', nbsp: ' ' });
                            case 'addToCollection':
                                return p({ id: 'onboarding.authorize-to-add-to-collection' }, { br: '\n', nbsp: ' ' });
                            case 'openQueue':
                                return p({ id: 'onboarding.authorize-to-open-queue' }, { br: '\n', nbsp: ' ' });
                            case 'addToQueue':
                                return p({ id: 'onboarding.authorize-to-add-track-to-queue' }, { br: '\n', nbsp: ' ' });
                            case 'like':
                                return p({ id: 'onboarding.authorize-to-like' }, { br: '\n', nbsp: ' ' });
                            case 'dislike':
                                return p({ id: 'onboarding.authorize-to-dislike' }, { br: '\n', nbsp: ' ' });
                            case 'pin':
                                return p({ id: 'onboarding.authorize-to-pin' }, { br: '\n', nbsp: ' ' });
                            case 'sync-lyrics':
                                return p({ id: 'onboarding.authorize-to-view-sync-lyrics' }, { br: '\n', nbsp: ' ' });
                            case 'vibe':
                                return E;
                            default:
                                return '';
                        }
                    }, [p, t, E]);
                return (0, a.jsx)(u.z, {
                    contentElement: (0, a.jsx)(l.HL, { variant: 'div', size: 'l', weight: 'bold', children: C }),
                    buttons: [(0, a.jsx)(d.H, { size: 'xxs' }, _)],
                    renderChildrenText: C,
                    contentDataTestId: r.S7.LOGIN_POPOVER,
                    ...c,
                });
            };
        },
        90875: (e) => {
            e.exports = {
                root: 'VibeRestrictions_root__efJez',
                diversity: 'VibeRestrictions_diversity__qfOls',
                moodEnergy: 'VibeRestrictions_moodEnergy__Le0Cy',
                contextItems: 'VibeRestrictions_contextItems__JrF7D',
            };
        },
        95114: (e) => {
            e.exports = {
                message: 'NotificationChangeQuality_message__coCvn',
                changeButton: 'NotificationChangeQuality_changeButton__Hzc3y',
                icon: 'NotificationChangeQuality_icon__bOfQO',
            };
        },
        98602: (e) => {
            e.exports = {
                root: 'QualitySettings_root__bsEFH',
                root_withEqualizer: 'QualitySettings_root_withEqualizer__KF0Ng',
                root_withNewQuality: 'QualitySettings_root_withNewQuality__wP_x5',
                header: 'QualitySettings_header__azQ0H',
                list: 'QualitySettings_list__ggzI6',
                equalizer: 'QualitySettings_equalizer__bt11k',
                headerWithCloseButton: 'QualitySettings_headerWithCloseButton__VHskw',
                itemWrapper: 'QualitySettings_itemWrapper__3KKwt',
                item: 'QualitySettings_item__2SGU_',
                item_option: 'QualitySettings_item_option__KuE4e',
                item_type: 'QualitySettings_item_type___96WF',
                expandedItem: 'QualitySettings_expandedItem__kCxQb',
                itemSubTitle: 'QualitySettings_itemSubTitle__rNJL_',
                menuContent: 'QualitySettings_menuContent__SzqoC',
                button_active: 'QualitySettings_button_active__Nivv_',
            };
        },
    },
]);
