(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [8393],
    {
        76: (e, t, i) => {
            'use strict';
            i.d(t, { E: () => J });
            var a = i(32290),
                s = i(63618),
                r = i(96103),
                o = i(55178),
                l = i(60900),
                n = i(39407),
                c = i(99923),
                d = i(21732),
                m = i(91027),
                _ = i(6752),
                u = i(44989),
                p = i(14934),
                b = i(71926),
                v = i(71735),
                h = i(48922),
                x = i(12350),
                C = i(47745),
                A = i(2969),
                j = i(23352),
                T = i(22714),
                N = i(37240),
                I = i(28999),
                S = i(43564),
                f = i(57594),
                L = i(86562),
                g = i(10180),
                y = i(90326),
                R = i(80195),
                k = i(85832),
                E = i(45477),
                P = i(75582),
                w = i(58008),
                O = i(90357),
                M = i(64089),
                D = i(82586),
                B = i(19740),
                V = i(99902),
                U = i(84051),
                W = i(27120),
                z = i(56367),
                H = i(3243),
                K = i.n(H);
            let Y = (0, r.PA)((e) => {
                var t;
                let { room: i, onOpenChange: r, onRenameClick: _, isRenamePending: u, onRoomSuccessExit: p, open: b, className: v, ...h } = e,
                    {
                        settings: { isMobile: C },
                    } = (0, f.g)(),
                    { formatMessage: A } = (0, l.A)(),
                    j = (0, M.A)(null == i ? void 0 : i.wave),
                    { exitVibeRoom: T, isPending: N } = ((e) => {
                        let { room: t, onRoomSuccessExit: i } = e,
                            [s, r] = (0, o.useState)(!1),
                            { notify: n } = (0, P.l)(),
                            c = (0, o.useRef)(!1),
                            { formatMessage: d } = (0, l.A)();
                        return {
                            exitVibeRoom: (0, m.c)(async () => {
                                c.current ||
                                    (r(!0),
                                    (c.current = !0),
                                    (await t.exitRoom({ roomId: t.id })) === w.F.ERROR
                                        ? n((0, a.jsx)(O.h, { error: d({ id: 'error-messages.error-during-action' }) }), { containerId: E.u.ERROR })
                                        : i(),
                                    r(!1),
                                    (c.current = !1));
                            }),
                            isPending: s,
                        };
                    })({ room: i, onRoomSuccessExit: p }),
                    I = (0, x.m)(),
                    S = (0, U.l)({ mainObjectType: c.DomainObjectType.NonApplicable }),
                    L = (0, m.c)(async () => {
                        (I({ actionType: c.ActionType.Remove, userInteractionType: c.UserInteractionType.Tap, objectType: c.DomainObjectType.Wave }), await T());
                    }),
                    g = (0, m.c)(async () => {
                        (I({ actionType: c.ActionType.Pin, userInteractionType: c.UserInteractionType.Tap, objectType: c.DomainObjectType.Wave }), await j());
                    });
                ((0, W.N)(b),
                    (0, o.useEffect)(() => {
                        if (b)
                            return (
                                S(!0),
                                () => {
                                    S(!1);
                                }
                            );
                    }, [b, S]));
                let y = !(null == i ? void 0 : i.isDisabled) && !C,
                    R = !(null == i ? void 0 : i.isDisabled) && !C;
                return (0, a.jsxs)(B.W1, {
                    ...h,
                    isMobile: C,
                    offsetOptions: 10,
                    open: b,
                    onOpenChange: r,
                    ariaLabel: A({ id: 'interface-actions.context-menu' }),
                    containerDataTestId: d.OA.vibe.VIBE_ROOM_CONTEXT_MENU,
                    size: 's',
                    icon: (0, a.jsx)(D.I, { size: 'xxs', variant: 'more' }),
                    color: 'secondary',
                    variant: 'default',
                    className: v,
                    menuClassName: (0, s.$)(K().root, { [K().root_mobile]: C }),
                    children: [
                        y && (0, a.jsx)(z.L, { onClick: g, isPinned: null == (t = i.wave) ? void 0 : t.isPinned }),
                        R &&
                            (0, a.jsx)(B.Dr, {
                                icon: (0, a.jsx)(D.I, { variant: 'edit', size: 'xxs' }),
                                onClick: _,
                                disabled: u,
                                spinner: u ? (0, a.jsx)(V.y, { size: 'xs' }) : void 0,
                                'data-test-id': d.OA.vibe.VIBE_ROOM_CONTEXT_MENU_RENAME_BUTTON,
                                children: (0, a.jsx)(n.A, { id: 'interface-actions.rename' }),
                            }),
                        (0, a.jsx)(B.Dr, {
                            icon: (0, a.jsx)(D.I, { variant: 'bucket', size: 'xxs' }),
                            onClick: L,
                            disabled: N,
                            spinner: N ? (0, a.jsx)(V.y, { size: 'xs' }) : void 0,
                            'data-test-id': d.OA.vibe.VIBE_ROOM_CONTEXT_MENU_EXIT_BUTTON,
                            children: (0, a.jsx)(n.A, { id: 'interface-actions.delete-multivibe' }),
                        }),
                    ],
                });
            });
            var F = i(11323),
                $ = i(42106),
                X = i(2833),
                G = i.n(X);
            let Q = (e) => {
                let { align: t, controls: i, src: s, isDisabled: r = !1, isMobileLayout: o = !1 } = e;
                return (0, a.jsx)($.b, {
                    align: t,
                    isDisabled: r,
                    overlay: i,
                    surfaceClassName: G().surface,
                    overlayClassName: G().overlay,
                    children: (0, a.jsx)(F.B, {
                        size: 200,
                        fit: 'cover',
                        className: G().image,
                        src: s,
                        withSrcSet: !1,
                        alt: '',
                        withAvatarReplace: !0,
                        fallbackIconSize: o ? 'xxxs' : 'l',
                    }),
                });
            };
            var q = i(67775),
                Z = i.n(q);
            let J = (0, r.PA)((e) => {
                var t, i, r, D;
                let { room: B, contentLinesCount: V = 3, className: U, withMobileLayout: W = !1, onRoomSuccessExit: z } = e,
                    { pageId: H } = (0, N.$)(),
                    { ref: K, intersectionPropertyId: F } = (0, j.n)(),
                    {
                        settings: { isMobile: $ },
                        multivibe: X,
                        user: G,
                        freeAccess: q,
                    } = (0, f.g)(),
                    J = (0, v.P)(),
                    { sendPlaySearchFeedback: ee } = (0, I.z)(),
                    [et, ei] = (0, o.useState)(!1),
                    ea = (0, M.A)(B.wave),
                    es = (0, A.b)(),
                    er = (0, x.m)(),
                    eo = (0, C.N)(),
                    { state: el, setState: en } = (0, u.e)(!1),
                    { state: ec, setState: ed } = (0, u.e)(!1),
                    { state: em, toggleTrue: e_, toggleFalse: eu } = (0, u.e)(!1),
                    { formatMessage: ep } = (0, l.A)(),
                    { editVibeRoom: eb, isPending: ev } = ((e) => {
                        let [t, i] = (0, o.useState)(!1),
                            { notify: s } = (0, P.l)(),
                            r = (0, o.useRef)(!1),
                            { formatMessage: n } = (0, l.A)();
                        return {
                            editVibeRoom: (0, m.c)(async (t) => {
                                r.current ||
                                    (i(!0),
                                    (r.current = !0),
                                    (await e.editRoom({ roomId: e.id, name: t })) === w.F.ERROR &&
                                        s((0, a.jsx)(O.h, { error: n({ id: 'error-messages.error-during-action' }) }), { containerId: E.u.ERROR }),
                                    i(!1),
                                    (r.current = !1));
                            }),
                            isPending: t,
                        };
                    })(B),
                    eh = W && $,
                    ex = (em || el || ec) && !$,
                    {
                        isPlaying: eC,
                        isPaused: eA,
                        togglePlay: ej,
                    } = (0, S.B)({ seeds: null != (D = null == (t = B.wave) ? void 0 : t.seeds) ? D : [], pageIdForFrom: H, blockIdForFrom: c.EntityTypes.Multiwave }),
                    eT = eh && !B.isDisabled && (eC || eA),
                    eN = (0, m.c)(() => {
                        !(B.isDisabled || J()) &&
                            (q.isVibeStartRestricted ||
                                (et || eC || (ei(!0), null == ee || ee()),
                                ej(),
                                es(!eC),
                                er({
                                    actionType: eC ? c.ActionType.Pause : c.ActionType.Play,
                                    userInteractionType: c.UserInteractionType.Tap,
                                    objectType: c.DomainObjectType.Wave,
                                })));
                    }),
                    eI = (0, m.c)(async () => {
                        (er({ actionType: c.ActionType.Pin, userInteractionType: c.UserInteractionType.Tap, objectType: c.DomainObjectType.Wave }), await ea());
                    }),
                    eS = (0, m.c)(() => {
                        if (B.isDisabled) {
                            (X.setDisabledRoomId(B.id),
                                X.disabledRoomInfoModal.open(),
                                eo({ to: c.AppScreen.MultivibeUnifiedScreen, objectType: c.DomainObjectType.Link }));
                            return;
                        }
                        $ && eN();
                    }),
                    ef = (0, m.c)((e) => {
                        (e && eo({ to: c.AppScreen.MultivibeActionScreen, objectType: c.DomainObjectType.Link }), en(e), ed(e));
                    }),
                    eL = (0, m.c)((e) => {
                        e.target === e.currentTarget && (e.code === L.v.SPACE || e.code === L.v.ENTER) && (e.preventDefault(), eS());
                    }),
                    [eg, ey] = (0, o.useState)(!1),
                    eR = (0, o.useCallback)(
                        (e) => {
                            (ey(!1), eb(e), er({ actionType: c.ActionType.Rename, userInteractionType: c.UserInteractionType.Tap, objectType: c.DomainObjectType.Wave }));
                        },
                        [eb, er, ey],
                    ),
                    ek = (0, o.useCallback)(() => {
                        (ey(!0), eo({ to: c.AppScreen.MultivibeRenameScreen, objectType: c.DomainObjectType.Link }));
                    }, [eo, ey]),
                    eE = (0, _.L)(() =>
                        (0, a.jsx)(T.n, {
                            pageId: h._Q.MULTIVIBE_ACTION_SCREEN,
                            pageStyle: c.PageStyles.Sheet,
                            pagePlacement: c.PagePlacements.Bottom,
                            pageEntityId: '',
                            children: (0, a.jsx)(
                                Y,
                                {
                                    room: B,
                                    onOpenChange: ef,
                                    open: el,
                                    isRenamePending: ev,
                                    onRenameClick: ek,
                                    returnFocus: !eg,
                                    className: (0, s.$)(Z().menuControl, Z().control, { [Z().menuControl_mobile]: eh }),
                                    onRoomSuccessExit: z,
                                    'data-test-id': d.OA.vibe.VIBE_ROOM_CONTEXT_MENU_BUTTON,
                                },
                                B.getKey('VibeRoomContextMenu'),
                            ),
                        }),
                    ),
                    eP = (0, _.L)(() => {
                        if (!B.isDisabled)
                            return (0, a.jsx)(
                                y.D,
                                {
                                    isPlaying: eC,
                                    onClick: eN,
                                    className: (0, s.$)(Z().playControl, Z().control),
                                    buttonVariant: 'default',
                                    withHover: !1,
                                    iconSize: 'xl',
                                    variant: 'filled',
                                },
                                B.getKey('PlayButton'),
                            );
                    }),
                    ew = (0, _.L)(() => {
                        var e;
                        if (!B.isDisabled)
                            return (0, a.jsx)(
                                g.O,
                                {
                                    isPinned: null == (e = B.wave) ? void 0 : e.isPinned,
                                    onClick: eI,
                                    className: (0, s.$)(Z().pinControl, Z().control, { [Z().pinControl_mobile]: eh }),
                                    withRipple: !1,
                                },
                                B.getKey('PinButton'),
                            );
                    }),
                    eO = B.isDisabled ? ep({ id: 'multivibe.room-status-disabled' }) : ep({ id: 'multivibe.room-status-enabled' }),
                    eM = ep({ id: 'entity-names.vibe-room-name' }, { name: B.name, status: eO }),
                    eD = B.owner.cover.uri,
                    eB = null == (i = B.members[0]) ? void 0 : i.cover.uri,
                    eV = (null == (r = B.owner) ? void 0 : r.uid) && B.owner.uid === G.puid,
                    eU = eV ? eD : eB,
                    eW = eV ? eB : eD,
                    ez = (0, _.L)(() =>
                        (0, a.jsxs)('div', {
                            className: (0, s.$)(Z().avatarsWrapper, {
                                [Z().avatarsWrapper_mobile]: eh,
                                [Z().avatarsWrapper_disabled]: B.isDisabled,
                                [Z().avatarsWrapper_visible]: ex,
                            }),
                            children: [
                                (0, a.jsx)(Q, {
                                    align: 'back',
                                    isDisabled: B.isDisabled,
                                    isMobileLayout: eh,
                                    src: eU,
                                    controls: (0, a.jsx)(p.hg, { isVisible: ex, className: Z().cardControls, radius: 'round', pinControl: ew }),
                                }),
                                (0, a.jsx)(Q, {
                                    align: 'front',
                                    isDisabled: B.isDisabled,
                                    isMobileLayout: eh,
                                    src: eW,
                                    controls: (0, a.jsx)(p.hg, { isVisible: ex, className: Z().cardControls, radius: 'round', playControl: eP, menuControl: eE }),
                                }),
                                eT && (0, a.jsx)(R.P, { stopAnimation: eA, className: Z().playingAnimation }),
                            ],
                        }),
                    ),
                    eH = (0, _.L)(() =>
                        B.isDisabled
                            ? (0, a.jsxs)('span', {
                                  className: Z().unavailableStatus,
                                  'data-test-id': d.OA.vibe.VIBE_ROOM_UNAVAILABLE_STATUS,
                                  children: [
                                      (0, a.jsx)('span', { className: Z().unavailableStatusDot }),
                                      (0, a.jsx)(b.HL, {
                                          variant: 'div',
                                          type: 'entity',
                                          size: 'xs',
                                          weight: 'medium',
                                          lineClamp: 1,
                                          children: (0, a.jsx)(n.A, { id: 'multivibe.room-unavailable' }),
                                      }),
                                  ],
                              })
                            : null,
                    ),
                    eK = (0, _.L)(() =>
                        eg
                            ? (0, a.jsx)('div', {
                                  className: Z().textFieldContainer,
                                  children: (0, a.jsx)(k.A, {
                                      text: B.name,
                                      className: Z().textField,
                                      onChangeFinish: eR,
                                      maxTextLength: 200,
                                      minTextLength: 1,
                                      placeholder: ep({ id: 'vibe-actions.enter-title' }),
                                      shouldFinishOnKeyPress: !0,
                                      'data-test-id': d.OA.vibe.VIBE_ROOM_RENAME_INPUT,
                                  }),
                              })
                            : (0, a.jsx)(b.HL, {
                                  variant: 'div',
                                  type: 'entity',
                                  size: 'm',
                                  weight: 'medium',
                                  lineClamp: B.isDisabled ? 1 : 2,
                                  className: (0, s.$)(Z().roomName, { [Z().roomName_disabled]: B.isDisabled, [Z().roomName_mobile]: eh }),
                                  'data-test-id': d.OA.vibe.VIBE_ROOM_NAME,
                                  children: B.name,
                              }),
                    );
                return (0, a.jsxs)(p.MN, {
                    ref: K,
                    className: (0, s.$)(Z().root, { [Z().root_mobile]: eh }, U),
                    contentLinesCount: eh ? 2 : V,
                    textPosition: eh ? 'left' : 'center',
                    'data-intersection-property-id': F,
                    wrapperClassName: (0, s.$)(Z().cardWrapper, { [Z().cardWrapper_mobile]: eh }),
                    view: ez,
                    'aria-label': eM,
                    tabIndex: 0,
                    onClick: eS,
                    onKeyDown: eL,
                    onFocus: e_,
                    onMouseEnter: e_,
                    onMouseLeave: eu,
                    onBlur: eu,
                    'data-test-id': d.OA.vibe.VIBE_ROOM_CARD,
                    children: [(0, a.jsxs)('div', { className: (0, s.$)(Z().roomInfo, { [Z().roomInfo_mobile]: eh }), 'aria-hidden': !0, children: [eK, eH] }), eh && eE],
                });
            });
        },
        1001: (e) => {
            e.exports = {
                iconContainer: 'QueryToVibeBase_iconContainer__AM7_Y',
                comet: 'QueryToVibeBase_comet__TR7wA',
                root: 'QueryToVibeBase_root__YPyW_',
                root_loading: 'QueryToVibeBase_root_loading__ATBRE',
                caption: 'QueryToVibeBase_caption__QUrL9',
                'caption-pulse': 'QueryToVibeBase_caption-pulse__OYj1G',
                iconPulse: 'QueryToVibeBase_iconPulse__113Fc',
                icon: 'QueryToVibeBase_icon__GNNz8',
                meta: 'QueryToVibeBase_meta__hQX1A',
            };
        },
        1085: (e) => {
            e.exports = {
                root: 'EditorialVibesAgent_root__DWv1O',
                controls: 'EditorialVibesAgent_controls__8zmg0',
                item: 'EditorialVibesAgent_item__D8lQA',
                important: 'EditorialVibesAgent_important__xnrnN',
            };
        },
        2125: (e, t, i) => {
            'use strict';
            i.d(t, { h: () => s });
            var a = i(37862),
                s = (function (e) {
                    return (
                        (e[(e.RUP_MAIN_RADIO = ''.concat(a.U.RUP, '_').concat(a.U.MAIN, '-').concat(a.U.RADIO))] = 'RUP_MAIN_RADIO'),
                        (e[(e.DISCOGRAPHY_CAROUSEL = ''.concat(a.U.DISCOGRAPHY, '_').concat(a.U.CAROUSEL))] = 'DISCOGRAPHY_CAROUSEL'),
                        (e[(e.ALBUMS_CAROUSEL = ''.concat(a.U.ALBUMS, '_').concat(a.U.CAROUSEL))] = 'ALBUMS_CAROUSEL'),
                        (e[(e.COMPILATIONS_CAROUSEL = ''.concat(a.U.COMPILATIONS, '_').concat(a.U.CAROUSEL))] = 'COMPILATIONS_CAROUSEL'),
                        (e[(e.PLAYLISTS_CAROUSEL = ''.concat(a.U.PLAYLISTS, '_').concat(a.U.CAROUSEL))] = 'PLAYLISTS_CAROUSEL'),
                        (e[(e.ARTISTS_CAROUSEL = ''.concat(a.U.ARTISTS, '_').concat(a.U.CAROUSEL))] = 'ARTISTS_CAROUSEL'),
                        (e[(e.CLIPS_CAROUSEL = ''.concat(a.U.CLIPS, '_').concat(a.U.CAROUSEL))] = 'CLIPS_CAROUSEL'),
                        (e[(e.DISCOVERY_BLOCK = ''.concat(a.U.DISCOVERY, '_').concat(a.U.BLOCK))] = 'DISCOVERY_BLOCK'),
                        (e[(e.PLAYLISTS_SIMILAR = ''.concat(a.U.PLAYLISTS, '_').concat(a.U.SIMILAR))] = 'PLAYLISTS_SIMILAR'),
                        (e[(e.SEARCH_HISTORY = ''.concat(a.U.SEARCH, '_').concat(a.U.HISTORY))] = 'SEARCH_HISTORY'),
                        (e[(e.PLAYLISTS_SIMILAR_PLAYLIST = ''.concat(a.U.PLAYLISTS, '_').concat(a.U.SIMILAR, '_').concat(a.U.PLAYLIST))] = 'PLAYLISTS_SIMILAR_PLAYLIST'),
                        (e[(e.SEARCH_BEST_RESULTS = ''.concat(a.U.SEARCH, '_').concat(a.U.BEST_RESULTS))] = 'SEARCH_BEST_RESULTS'),
                        (e[(e.SEARCH_OPEN_BEST_RESULTS = ''.concat(a.U.SEARCH, '_').concat(a.U.OPEN_BEST_RESULTS))] = 'SEARCH_OPEN_BEST_RESULTS'),
                        e
                    );
                })({});
        },
        2755: (e, t, i) => {
            'use strict';
            i.d(t, { K: () => _ });
            var a = i(32290),
                s = i(63618),
                r = i(57594),
                o = i(14257),
                l = i(90625),
                n = i(28301),
                c = i.n(n);
            let d = {
                    [o.S.Dark]: 'https://music-custom-wave-media.music.yandex.net/dark_q2v_history.lottie',
                    [o.S.Light]: 'https://music-custom-wave-media.music.yandex.net/light_q2v_history.lottie',
                },
                m = {
                    loading: {},
                    idle: { frameRange: { start: 0, end: 0 } },
                    playing: { frameRange: { start: 0 } },
                    paused: { frameRange: { start: 0 }, mode: 'reverse' },
                },
                _ = (e) => {
                    let { className: t, ...i } = e,
                        { lumen: o } = (0, r.g)();
                    return (0, a.jsx)(l.D, {
                        className: (0, s.$)(c().root, t),
                        lumenImages: o.getFallbackImage(i.vibe.seeds[0]),
                        animationByTheme: d,
                        animationConfig: m,
                        ...i,
                    });
                };
        },
        2833: (e) => {
            e.exports = { surface: 'VibeRoomMemberAvatar_surface__L4WU2', overlay: 'VibeRoomMemberAvatar_overlay__9adN4', image: 'VibeRoomMemberAvatar_image__g4AsX' };
        },
        3107: (e, t, i) => {
            'use strict';
            i.d(t, { z: () => E });
            var a = i(32290),
                s = i(55178),
                r = i(99923),
                o = i(91027),
                l = i(6752),
                n = i(48922),
                c = i(26042),
                d = i(22714),
                m = i(57594),
                _ = i(63618),
                u = i(96103),
                p = i(60900),
                b = i(21732),
                v = i(63423),
                h = i(84638),
                x = i(17811),
                C = i(90153),
                A = i(74416),
                j = i(62376),
                T = i(79374),
                N = i(2792),
                I = i(37240),
                S = i(84051),
                f = i(61945),
                L = i(75314),
                g = i(14257),
                y = i(61280),
                R = i.n(y);
            let k = (0, u.PA)((e) => {
                    let { requestAwakeLumenModalRef: t } = e,
                        {
                            lumen: i,
                            settings: { isMobile: l },
                        } = (0, m.g)(),
                        { formatMessage: c } = (0, p.A)(),
                        { language: d } = (0, f.h)(),
                        u = (0, s.useRef)(null),
                        [y, k] = (0, s.useState)(!1),
                        [E, P] = (0, s.useState)(!1),
                        w = (() => {
                            let e = (0, A.st)(),
                                { hash: t } = (0, A.gf)(),
                                i = (0, j.U)(),
                                { pageId: a, pageStyle: s, pagePlacement: l } = (0, I.$)(),
                                { objectId: c = '', objectType: d } = (0, N.J)();
                            return (0, o.c)((o) => {
                                let { actionType: m, mainObjectType: _ = d, mainObjectId: u = c, userInteractionType: p = r.UserInteractionType.Tap } = o;
                                if (!e || !t || !a || !n.xK.includes(a) || !n.fD.includes(a)) return;
                                let b = T.W[a];
                                if (!b) return;
                                let v = (0, x.F)({
                                    params: {
                                        hash: t,
                                        pageId: b,
                                        pageStyle: s,
                                        pagePlacement: l,
                                        mainObjectType: _,
                                        mainObjectId: u,
                                        actionType: m,
                                        userInteractionType: p,
                                    },
                                    logger: i,
                                    context: 'useSendEventOnScreenActionPerformed',
                                });
                                v && (0, C.bv)(e.evgenInstance, v);
                            });
                        })(),
                        O = (0, S.l)({ mainObjectType: r.DomainObjectType.Lumen }),
                        M = (0, o.c)(async (e) => {
                            let t = i.isAwakened;
                            try {
                                e || (await i.getData(!0));
                            } finally {
                                (e || (!t && i.isAwakened && w({ actionType: r.ActionType.LumenAwakened }), O(!1), (u.current = null)), k(e));
                            }
                        }),
                        D = (0, o.c)(() => M(!1)),
                        B = (0, o.c)(() => {
                            var e;
                            (null == (e = u.current) || e.call(u), M(!1));
                        });
                    return (
                        (0, s.useEffect)(() => {
                            t.current = (e) => {
                                ((u.current = e), O(!0), k(!0));
                            };
                        }, [t, O]),
                        (0, s.useEffect)(() => {
                            if (!y) return void P(!1);
                            let e = window.setTimeout(() => P(!0), i.playButtonShowDelay);
                            return () => window.clearTimeout(e);
                        }, [y, i.playButtonShowDelay]),
                        (0, a.jsxs)(h.a, {
                            open: y,
                            onOpenChange: M,
                            onClose: D,
                            placement: l ? 'default' : 'center',
                            size: 'fitContent',
                            overlayColor: 'full',
                            className: (0, _.$)(R().root, (0, L.J)(g.S.Dark)),
                            headerClassName: R().header,
                            contentClassName: R().content,
                            closeOnOutsidePress: !0,
                            closeButtonDataTestId: b.S7.AWAKE_LUMEN_MODAL_CLOSE_BUTTON,
                            escapeKey: !0,
                            'data-test-id': b.S7.AWAKE_LUMEN_MODAL,
                            children: [
                                (0, a.jsx)('iframe', {
                                    referrerPolicy: 'no-referrer',
                                    sandbox: 'allow-forms allow-modals allow-popups allow-scripts allow-same-origin',
                                    className: R().iframe,
                                    src: ''.concat('https://lumen.yandex.ru/lumen/birth?utm_source=music&utm_medium=q2v', '&lang=').concat(d),
                                    'data-test-id': b.S7.AWAKE_LUMEN_MODAL_IFRAME,
                                }),
                                (0, a.jsx)(v.$, {
                                    className: (0, _.$)(R().playButton, E && R().playButtonVisible),
                                    radius: 'xxxl',
                                    size: 'default',
                                    variant: 'default',
                                    color: 'primary',
                                    onClick: B,
                                    'data-test-id': b.S7.AWAKE_LUMEN_MODAL_PLAY_BUTTON,
                                    children: c({ id: 'player-actions.listen' }),
                                }),
                            ],
                        })
                    );
                }),
                E = () => {
                    let { lumen: e } = (0, m.g)(),
                        t = (0, s.useRef)(() => void 0),
                        i = (0, o.c)((e) => t.current(e));
                    return {
                        awakeLumenModal: (0, l.L)(() => {
                            if (e.isEnabled)
                                return (0, a.jsx)(d.n, {
                                    pageEntityId: '',
                                    pageId: n._Q.LUMEN_AWAKENING_SCREEN,
                                    pageStyle: r.PageStyles.Sheet,
                                    pagePlacement: r.PagePlacements.Bottom,
                                    children: (0, a.jsx)(c.B, {
                                        objectId: '',
                                        objectType: r.DomainObjectType.Lumen,
                                        children: (0, a.jsx)(k, { requestAwakeLumenModalRef: t }),
                                    }),
                                });
                        }),
                        requestAwakeLumenModal: i,
                    };
                };
        },
        3243: (e) => {
            e.exports = { root_mobile: 'VibeRoomContextMenu_root_mobile__mH0PT' };
        },
        3417: (e) => {
            e.exports = {
                root: 'PromotionsCard_root__1yY_m',
                coverLink: 'PromotionsCard_coverLink__masNa',
                image: 'PromotionsCard_image__4lmYk',
                titleLink: 'PromotionsCard_titleLink__3q_M5',
                subtitle: 'PromotionsCard_subtitle__fGfn9',
                coverWrapper: 'PromotionsCard_coverWrapper__IbTzz',
                advDisclaimer: 'PromotionsCard_advDisclaimer__moi3V',
                advDisclaimerTrigger: 'PromotionsCard_advDisclaimerTrigger__GOUr2',
                advDisclaimerPopover: 'PromotionsCard_advDisclaimerPopover__h_zAR',
                advDisclaimerText: 'PromotionsCard_advDisclaimerText__2WRMS',
            };
        },
        4274: (e) => {
            e.exports = {
                root: 'NeuromusicButton_root__OMwq0',
                ripple: 'NeuromusicButton_ripple__B9e3A',
                textContainer: 'NeuromusicButton_textContainer__2rb8y',
                title: 'NeuromusicButton_title__mTAB8',
                button: 'NeuromusicButton_button__kT4GN',
                icon: 'NeuromusicButton_icon__HTDr2',
            };
        },
        4550: (e, t, i) => {
            'use strict';
            var a;
            (i.d(t, { R: () => a }),
                (function (e) {
                    ((e.RADIAL = 'RADIAL'), (e.STACK = 'STACK'));
                })(a || (a = {})));
        },
        4772: (e, t, i) => {
            'use strict';
            i.d(t, { P: () => d });
            var a = i(32290),
                s = i(63618),
                r = i(79856),
                o = i(57594),
                l = i(42106),
                n = i(18628),
                c = i.n(n);
            let d = (e) => {
                let { isActive: t, className: i, 'aria-label': n, withMobileLayout: d = !1 } = e,
                    {
                        settings: { isMobile: m },
                    } = (0, o.g)(),
                    _ = d && m;
                return (0, a.jsxs)('div', {
                    'aria-label': n,
                    'aria-live': t ? 'polite' : 'off',
                    'aria-busy': t,
                    className: (0, s.$)(c().root, { [c().root_mobile]: _ }, i),
                    children: [
                        (0, a.jsxs)('div', {
                            className: (0, s.$)(c().coverContainer, { [c().coverContainer_mobile]: _ }),
                            children: [
                                (0, a.jsx)(l.b, { align: 'back', children: (0, a.jsx)(r.W, { isActive: t, className: c().avatarShimmer, radius: 'round' }) }),
                                (0, a.jsx)(l.b, { align: 'front', children: (0, a.jsx)(r.W, { isActive: t, className: c().avatarShimmer, radius: 'round' }) }),
                            ],
                        }),
                        (0, a.jsx)('div', {
                            className: (0, s.$)(c().infoContainer, { [c().infoContainer_mobile]: _ }),
                            children: (0, a.jsx)(r.W, { isActive: t, className: (0, s.$)(c().title, { [c().title_mobile]: _ }), radius: 's' }),
                        }),
                    ],
                });
            };
        },
        5347: (e) => {
            e.exports = {
                root: 'NewReleaseCard_root__IY5m_',
                ripple: 'NewReleaseCard_ripple__VoybZ',
                image: 'NewReleaseCard_image__oxm2S',
                info: 'NewReleaseCard_info__rcfoY',
                type: 'NewReleaseCard_type__cW58D',
                title: 'NewReleaseCard_title__N5soS',
                description: 'NewReleaseCard_description__Daz5q',
                container: 'NewReleaseCard_container__XvwZC',
                explicitMark: 'NewReleaseCard_explicitMark__isgxE',
                explicitMarkContainer: 'NewReleaseCard_explicitMarkContainer__QHRoH',
                button: 'NewReleaseCard_button__WPk82',
                paperLink: 'NewReleaseCard_paperLink__NN_8o',
            };
        },
        6791: (e, t, i) => {
            'use strict';
            var a;
            (i.d(t, { z: () => a }),
                (function (e) {
                    ((e.NONE = 'none'), (e.DEFAULT = 'default'), (e.CUSTOM = 'custom'));
                })(a || (a = {})));
        },
        6943: (e) => {
            e.exports = { trailer: 'PlaylistWithTracks_trailer__dOp1u', root: 'PlaylistWithTracks_root__jchZL' };
        },
        7246: (e) => {
            e.exports = {
                container: 'SkeletonBlock_container__9IxUi',
                important: 'SkeletonBlock_important__faY0E',
                container_withContentVisibility: 'SkeletonBlock_container_withContentVisibility__QzL5d',
                headerContainer: 'SkeletonBlock_headerContainer__fl8EX',
                tracksContainer: 'SkeletonBlock_tracksContainer__uF8Tg',
            };
        },
        8588: (e, t, i) => {
            'use strict';
            i.d(t, { V: () => p });
            var a = i(32290),
                s = i(63618),
                r = i(96103),
                o = i(55178),
                l = i(21732),
                n = i(50162),
                c = i(86269),
                d = i(71926),
                m = i(61258),
                _ = i(69748),
                u = i.n(_);
            let p = (0, r.PA)((e) => {
                var t;
                let { className: i, title: r, weblink: _, linkClassName: p, covers: b, coverSize: v = 100, captionVariant: h = 'div' } = e,
                    x = (0, o.useMemo)(() => {
                        var e;
                        if (null == b || null == (e = b[0]) ? void 0 : e.color) return { '--subcover-background-color': b[0].color };
                    }, [b]);
                return (0, a.jsx)(m.N, {
                    href: _,
                    className: (0, s.$)(u().link, p),
                    'data-test-id': l.OA.mix.MIX_CARD,
                    children: (0, a.jsxs)(c.t, {
                        radius: 'm',
                        style: x,
                        className: (0, s.$)(u().root, i),
                        children: [
                            (0, a.jsxs)('div', {
                                className: u().plate,
                                'data-test-id': l.OA.mix.MIX_CARD_PLATE,
                                children: [
                                    (0, a.jsx)('div', { className: u().subcover, 'data-test-id': l.OA.mix.MIX_CARD_SUBCOVER }),
                                    (0, a.jsx)(n._V, {
                                        src: null == b || null == (t = b[0]) ? void 0 : t.uri,
                                        withAvatarReplace: !0,
                                        fit: 'contain',
                                        className: u().cover,
                                        size: v,
                                        'data-test-id': l.OA.mix.MIX_CARD_COVER,
                                    }),
                                ],
                            }),
                            (0, a.jsx)('div', {
                                className: u().header,
                                children: (0, a.jsx)(d.HL, {
                                    variant: h,
                                    size: 'xs',
                                    weight: 'bold',
                                    className: u().title,
                                    lineClamp: 2,
                                    'data-test-id': l.OA.mix.MIX_CARD_HEADER,
                                    children: r,
                                }),
                            }),
                        ],
                    }),
                });
            });
        },
        9724: (e, t, i) => {
            'use strict';
            i.d(t, { f: () => C });
            var a = i(32290),
                s = i(63618),
                r = i(96103),
                o = i(60900),
                l = i(39407),
                n = i(99923),
                c = i(21732),
                d = i(91027),
                m = i(63423),
                _ = i(82586),
                u = i(71926),
                p = i(47745),
                b = i(57594),
                v = i(42106),
                h = i(51740),
                x = i.n(h);
            let C = (0, r.PA)((e) => {
                let { withMobileLayout: t } = e,
                    {
                        settings: { isMobile: i },
                        multivibe: r,
                    } = (0, b.g)(),
                    { formatMessage: h } = (0, o.A)(),
                    C = (0, p.N)(),
                    A = t && i,
                    j = (0, d.c)(() => {
                        (C({ to: n.AppScreen.MultivibeSendingInvitationScreen, objectType: n.DomainObjectType.Shortcut }), r.promoModal.open());
                    });
                return (0, a.jsxs)('div', {
                    className: (0, s.$)(x().root, { [x().root_mobile]: A }),
                    'data-test-id': c.Kq.multivibe.MULTIVIBE_SHOW_PROMO_MODAL_CARD,
                    children: [
                        (0, a.jsxs)(m.$, {
                            className: (0, s.$)(x().button, { [x().button_mobile]: A }),
                            'aria-label': h({ id: 'interface-actions.create' }),
                            onClick: j,
                            variant: 'text',
                            isBlock: !0,
                            withRipple: !1,
                            withHover: !1,
                            'data-test-id': c.Kq.multivibe.MULTIVIBE_SHOW_PROMO_MODAL_BUTTON,
                            children: [
                                (0, a.jsx)(v.b, { align: 'back', surfaceClassName: x().surface }),
                                (0, a.jsx)(v.b, {
                                    align: 'front',
                                    surfaceClassName: x().surface,
                                    children: (0, a.jsx)(_.I, { variant: 'add', size: A ? 'xxxs' : 'l', className: x().icon }),
                                }),
                            ],
                        }),
                        (0, a.jsx)('div', {
                            className: x().titleWrapper,
                            children: (0, a.jsx)(u.HL, {
                                variant: 'div',
                                type: 'entity',
                                size: 'm',
                                weight: 'medium',
                                lineClamp: 2,
                                'aria-hidden': !0,
                                className: (0, s.$)(x().title, { [x().title_mobile]: A }),
                                children: (0, a.jsx)(l.A, { id: 'interface-actions.create' }),
                            }),
                        }),
                    ],
                });
            });
        },
        10921: (e) => {
            e.exports = {
                root: 'LikesAndHistoryItem_root__oI1gk',
                link: 'LikesAndHistoryItem_link__snTl_',
                start: 'LikesAndHistoryItem_start__wdtiV',
                textContainer: 'LikesAndHistoryItem_textContainer__yGdOu',
                titleIcon: 'LikesAndHistoryItem_titleIcon__2D_yS',
                title: 'LikesAndHistoryItem_title__hdi2H',
                subtitle: 'LikesAndHistoryItem_subtitle__ghuKi',
                covers: 'LikesAndHistoryItem_covers__9k_yw',
                coverContainer: 'LikesAndHistoryItem_coverContainer__fwXXJ',
                cover: 'LikesAndHistoryItem_cover__QlRhz',
            };
        },
        13424: (e) => {
            e.exports = {
                root: 'VerticalListItemShimmer_root__Ppz8c',
                infoContainer: 'VerticalListItemShimmer_infoContainer__ycrKq',
                textContainer: 'VerticalListItemShimmer_textContainer__kHkGo',
                title: 'VerticalListItemShimmer_title__z_x63',
                cover: 'VerticalListItemShimmer_cover__0SqgP',
                action: 'VerticalListItemShimmer_action__DvEuY',
            };
        },
        13819: (e, t, i) => {
            'use strict';
            i.d(t, { Z: () => _ });
            var a = i(32290),
                s = i(96103),
                r = i(55178),
                o = i(60900),
                l = i(71926),
                n = i(30436),
                c = i(98066),
                d = i(10570),
                m = i.n(d);
            let _ = (0, s.PA)((e) => {
                let { id: t, concert: i } = e,
                    { formatDate: s } = (0, o.A)(),
                    d = [],
                    _ = (0, a.jsx)(l.HL, { variant: 'span', size: 'm', weight: 'medium', 'aria-hidden': !0, children: '•' });
                return (
                    (null == i ? void 0 : i.place) && d.push((0, a.jsx)(l.HL, { variant: 'span', size: 'm', weight: 'medium', lineClamp: 1, children: i.place })),
                    (null == i ? void 0 : i.datetime) &&
                        d.push(_, (0, a.jsx)(l.HL, { variant: 'span', size: 'm', weight: 'medium', className: m().time, children: s(i.datetime, (0, n.f)()) })),
                    (null == i ? void 0 : i.contentRating) && d.push(_, (0, a.jsx)(l.HL, { variant: 'span', size: 'm', weight: 'medium', children: i.contentRating })),
                    (0, a.jsxs)('div', {
                        className: m().root,
                        id: t,
                        children: [
                            (0, a.jsx)(l.HL, { variant: 'div', size: 'm', weight: 'medium', className: m().city, lineClamp: 1, children: null == i ? void 0 : i.city }),
                            (0, a.jsx)('div', { className: m().info, children: d.map((e, t) => (0, r.cloneElement)(e, { key: t })) }),
                            (null == i ? void 0 : i.isIdentityExperimentEnabled) &&
                                i.cashbackValuePercent &&
                                (0, a.jsx)(c.m, { className: m().cashback, valuePercent: i.cashbackValuePercent }),
                            !(null == i ? void 0 : i.isIdentityExperimentEnabled) &&
                                (null == i ? void 0 : i.isCashbackExperimentEnabled) &&
                                i.cashbackTitle &&
                                (0, a.jsx)(c.m, { className: m().cashback, title: i.cashbackTitle }),
                        ],
                    })
                );
            });
        },
        13889: (e) => {
            e.exports = { cover: 'FamiliarYou_cover__nY4e8', shimmerCover: 'FamiliarYou_shimmerCover__HFgkx' };
        },
        14209: (e) => {
            e.exports = { item: 'Mixes_item__Om7aR' };
        },
        14631: (e, t, i) => {
            'use strict';
            i.d(t, { Q: () => v });
            var a = i(32290),
                s = i(96103),
                r = i(55178),
                o = i(21732),
                l = i(73749),
                n = i(90169),
                c = i(57594),
                d = i(40229),
                m = i(8677),
                _ = i(68912),
                u = i(92102),
                p = i(16409),
                b = i.n(p);
            let v = (0, s.PA)((e) => {
                var t, i;
                let { track: s, playContextParams: p } = e,
                    v = (0, n.D)({ playContextParams: p, entityId: s.entityId }),
                    {
                        settings: { isMobile: h },
                    } = (0, c.g)(),
                    x = (0, r.useCallback)(
                        (e) =>
                            (0, a.jsx)(d.q, {
                                isAvailable: s.isAvailable,
                                isDisliked: s.isDisliked,
                                coverUri: s.coverUri,
                                title: s.title,
                                className: b().playButtonCell,
                                radius: 'xs',
                                ...e,
                            }),
                        [s],
                    );
                return (0, a.jsx)(u.C, {
                    track: s,
                    meta: (0, a.jsx)(_.j, { withArtistLink: !h, track: s }),
                    beforeBlock: (0, a.jsx)(l.t, {
                        withIcon: !0,
                        className: b().chartCell,
                        progress: null == (t = s.chart) ? void 0 : t.progress,
                        position: null == (i = s.chart) ? void 0 : i.position,
                        isDisliked: s.isDisliked,
                        isDisabled: !s.isAvailable,
                    }),
                    playButtonCellRender: x,
                    controls: (0, a.jsx)(m.Q, { track: s, className: b().controlsBarCell }),
                    ...v,
                    'data-test-id': o.Kq.track.TRACK_CHART,
                });
            });
        },
        15047: (e) => {
            e.exports = {
                root: 'Promotions_root__Osgj2',
                controls: 'Promotions_controls__IEqvq',
                item: 'Promotions_item__ycc9P',
                important: 'Promotions_important__x_kQK',
            };
        },
        15523: (e) => {
            e.exports = { carousel: 'PlaylistFilters_carousel__pO6nw', carousel_noSmooth: 'PlaylistFilters_carousel_noSmooth__cqaBs' };
        },
        16078: (e, t, i) => {
            'use strict';
            i.d(t, { z: () => o });
            var a = i(91027),
                s = i(57594),
                r = i(71670);
            let o = () => {
                let { location: e } = (0, s.g)(),
                    t = (0, r.X)();
                return (0, a.c)((i) => {
                    let a = new URL(window.location.href);
                    i.forEach((e) => a.searchParams.delete(e));
                    let s = a.toString();
                    (t(s), e.setHref(s), e.setSearchParams(a.searchParams.toString()));
                });
            };
        },
        16409: (e) => {
            e.exports = {
                playButtonCell: 'TrackChart_playButtonCell__cvY7u',
                controlsBarCell: 'TrackChart_controlsBarCell__Xd5pn',
                chartCell: 'TrackChart_chartCell__33_al',
            };
        },
        16696: (e) => {
            e.exports = {
                message: 'OverviewBlock_message__f41Rq',
                modal: 'OverviewBlock_modal__Jxiv2',
                modalHeader: 'OverviewBlock_modalHeader__nerV2',
                modalHeader_withTitle: 'OverviewBlock_modalHeader_withTitle__gjKhp',
                modalContent: 'OverviewBlock_modalContent__fw4fH',
                button: 'OverviewBlock_button__k7t4c',
                modalOverlay: 'OverviewBlock_modalOverlay__1dp_D',
            };
        },
        17365: (e) => {
            e.exports = {
                card_root: 'HorizontalCardContainer_root__YoAAP',
                root: 'ControlsBar_root__l6Fg6',
                item: 'ControlsBar_item__tEQvM',
                item_buttonArrow: 'ControlsBar_item_buttonArrow__3aZyp',
                contextMenu: 'ControlsBar_contextMenu__1Sj5f',
                contextMenu_visible: 'ControlsBar_contextMenu_visible__FMTw4',
                controls_disabled: 'ControlsBar_controls_disabled__xR0_N',
                controls: 'ControlsBar_controls__PEMXx',
                likeIcon: 'ControlsBar_likeIcon__UBXQm',
            };
        },
        17744: (e) => {
            e.exports = {
                root: 'ArtistWithItemsShimmer_root__0UQ8u',
                actionItems: 'ArtistWithItemsShimmer_actionItems__drxv9',
                actionItem: 'ArtistWithItemsShimmer_actionItem__NksfP',
                actionCover: 'ArtistWithItemsShimmer_actionCover__4LUi8',
                actionTextContainer: 'ArtistWithItemsShimmer_actionTextContainer__Qijsx',
                actionText: 'ArtistWithItemsShimmer_actionText__nUSLH',
                actionText_title: 'ArtistWithItemsShimmer_actionText_title__cXusB',
            };
        },
        18125: (e) => {
            e.exports = {
                root_withControls: 'CollectionAlbumsPresaves_root_withControls__qE_u_',
                controls: 'CollectionAlbumsPresaves_controls__8twKX',
                header: 'CollectionAlbumsPresaves_header__1flkp',
                important: 'CollectionAlbumsPresaves_important__EkdBU',
                tab: 'CollectionAlbumsPresaves_tab__V6yvN',
                tabShimmer: 'CollectionAlbumsPresaves_tabShimmer__T6w2W',
                tabCarousel: 'CollectionAlbumsPresaves_tabCarousel__hobTn',
                tabPanel: 'CollectionAlbumsPresaves_tabPanel__ZHz6v',
                carouselEmpty: 'CollectionAlbumsPresaves_carouselEmpty__8szhR',
                item: 'CollectionAlbumsPresaves_item__to1P9',
            };
        },
        18459: (e) => {
            e.exports = { root: 'CollectionPlaylistsEmpty_root__KGNv_' };
        },
        18628: (e) => {
            e.exports = {
                root: 'VibeRoomCardShimmer_root__lG3e3',
                root_mobile: 'VibeRoomCardShimmer_root_mobile__A462e',
                coverContainer: 'VibeRoomCardShimmer_coverContainer__dBb9G',
                coverContainer_mobile: 'VibeRoomCardShimmer_coverContainer_mobile__fcRcH',
                avatarShimmer: 'VibeRoomCardShimmer_avatarShimmer__ZHbcX',
                infoContainer: 'VibeRoomCardShimmer_infoContainer__WxMcd',
                infoContainer_mobile: 'VibeRoomCardShimmer_infoContainer_mobile__DJYX6',
                title: 'VibeRoomCardShimmer_title__X_5k3',
                title_mobile: 'VibeRoomCardShimmer_title_mobile___I56b',
            };
        },
        18896: (e) => {
            e.exports = {
                root: 'Q2vLumen_root__KMtjw',
                root_clickable: 'Q2vLumen_root_clickable__Yczhj',
                image: 'Q2vLumen_image__6dREJ',
                imageBlurred: 'Q2vLumen_imageBlurred__NyTmk',
                haze: 'Q2vLumen_haze__ZmnSW',
            };
        },
        18941: (e) => {
            e.exports = {
                root: 'Special_root__FOrBZ',
                actions: 'Special_actions__XYuvB',
                textContainer: 'Special_textContainer__pN_TF',
                textColor: 'Special_textColor__dySbq',
                imageContainer: 'Special_imageContainer__V1_E3',
                image: 'Special_image__1sSXR',
                button: 'Special_button__j8gGH',
                advDisclaimer: 'Special_advDisclaimer__aMsoC',
                advDisclaimerTrigger: 'Special_advDisclaimerTrigger__19qVj',
                advDisclaimerPopover: 'Special_advDisclaimerPopover__5WrLl',
                advDisclaimerText: 'Special_advDisclaimerText__eQP9w',
            };
        },
        19429: (e, t, i) => {
            'use strict';
            i.d(t, { K: () => p });
            var a = i(32290),
                s = i(63618),
                r = i(96103),
                o = i(55178),
                l = i(85472),
                n = i(19620),
                c = i(49522),
                d = i(26279),
                m = i.n(d),
                _ = i(29869);
            let u = (0, r.PA)((e) => {
                    let {
                            clipCardTitleClassName: t,
                            clipCardArtistLinkClassName: i,
                            carouselItemClassName: r,
                            forwardRef: d,
                            isShimmerVisible: u,
                            isShimmerActive: p,
                            title: b,
                            description: v,
                            containerClassName: h,
                            headerClassName: x,
                            viewAllActionLink: C,
                            artistIdWithoutLink: A,
                            withVideo: j = !0,
                            clips: T,
                            headingVariant: N,
                            className: I,
                            shouldOpenModalOnCardClick: S = !0,
                            itemCounter: f,
                            ...L
                        } = e,
                        g = (0, o.useId)(),
                        y = (0, o.useRef)(null);
                    return (0, a.jsxs)('section', {
                        className: (0, s.$)(m().root, I),
                        ref: d,
                        ...(0, l.getDataAttrFromProps)(L),
                        children: [
                            (0, a.jsx)(n.T, {
                                className: x,
                                labeledForId: g,
                                title: b,
                                description: v,
                                viewAllActionLink: C,
                                controls: (0, a.jsx)(c.X, { className: m().controls, carouselRef: y }),
                                headingVariant: N,
                                withDescription: !!v,
                            }),
                            (0, a.jsx)(_.t, {
                                clipCardTitleClassName: t,
                                clipCardArtistLinkClassName: i,
                                carouselItemClassName: r,
                                isShimmerVisible: u,
                                isShimmerActive: p,
                                containerClassName: h,
                                artistIdWithoutLink: A,
                                withVideo: j,
                                clips: T,
                                shouldOpenModalOnCardClick: S,
                                itemCounter: f,
                                ref: y,
                                'aria-labelledby': g,
                            }),
                        ],
                    });
                }),
                p = (0, o.forwardRef)((e, t) => (0, a.jsx)(u, { forwardRef: t, ...e }));
        },
        19875: (e, t, i) => {
            'use strict';
            i.d(t, { $: () => _ });
            var a = i(55178),
                s = i(17811),
                r = i(17408),
                o = i(74416),
                l = i(62376),
                n = i(79374),
                c = i(84782),
                d = i(37240),
                m = i(51012);
            let _ = () => {
                let e = (0, o.st)(),
                    t = (0, l.U)(),
                    { hash: i } = (0, o.gf)(),
                    { pageId: _ } = (0, d.$)(),
                    { mainObjectType: u, mainObjectId: p } = (0, c.N)(),
                    { skeleton: b } = (0, m.b)();
                return (0, a.useCallback)(
                    (a) => {
                        let { tabId: o = '', tabPos: l = 1, isTabSelectedByDefault: c = !1 } = a;
                        if (!e || !_) return;
                        let d = { hash: i, pageId: n.W[_], tabId: o, tabPos: l, isTabSelectedByDefault: c };
                        (b && (d.skeletonId = b), p && u && ((d.mainObjectType = u), (d.mainObjectId = p)));
                        let m = (0, s.F)({ params: d, logger: t, context: 'useSendEventOnTabOpened' });
                        m && (0, r.TV)(e.evgenInstance, m);
                    },
                    [e, _, i, b, p, u, t],
                );
            };
        },
        20567: (e) => {
            e.exports = {
                root: 'CreatePlaylistCard_root__pMDua',
                button: 'CreatePlaylistCard_button__ZaAtb',
                icon: 'CreatePlaylistCard_icon__09K9N',
                text: 'CreatePlaylistCard_text__dd9Q6',
            };
        },
        22139: (e) => {
            e.exports = { root: 'CollectionClipsEmpty_root__LwgZS', text: 'CollectionClipsEmpty_text__cZfLW' };
        },
        25378: (e) => {
            e.exports = {
                root: 'Skeleton_root__ANDaF',
                upperBlocks: 'Skeleton_upperBlocks__zI__5',
                tab: 'Skeleton_tab__Jn6By',
                tabPanel: 'Skeleton_tabPanel__Ke42U',
                tabCarousel: 'Skeleton_tabCarousel__E2kLf',
                important: 'Skeleton_important__ob12_',
                header: 'Skeleton_header__Ir5f4',
                stickyTabs: 'Skeleton_stickyTabs__I_uuk',
            };
        },
        25629: (e, t, i) => {
            'use strict';
            i.d(t, { e: () => r });
            var a = i(32290),
                s = i(55178);
            let r = (e) => {
                let { className: t } = e,
                    i = (0, s.useId)(),
                    r = (0, s.useId)();
                return (0, a.jsxs)('svg', {
                    className: t,
                    viewBox: '0 0 139 72',
                    preserveAspectRatio: 'none',
                    focusable: 'false',
                    'aria-hidden': !0,
                    children: [
                        (0, a.jsx)('g', { filter: 'url(#'.concat(i, ')'), children: (0, a.jsx)('path', { d: 'M24 24L115 36L24 48V24Z', fill: 'url(#'.concat(r, ')') }) }),
                        (0, a.jsxs)('defs', {
                            children: [
                                (0, a.jsx)('filter', {
                                    id: i,
                                    x: '0',
                                    y: '0',
                                    width: '139',
                                    height: '72',
                                    filterUnits: 'userSpaceOnUse',
                                    colorInterpolationFilters: 'sRGB',
                                    children: (0, a.jsx)('feGaussianBlur', { stdDeviation: '12' }),
                                }),
                                (0, a.jsxs)('linearGradient', {
                                    id: r,
                                    x1: '24',
                                    y1: '36',
                                    x2: '115',
                                    y2: '36',
                                    gradientUnits: 'userSpaceOnUse',
                                    children: [
                                        (0, a.jsx)('stop', { stopColor: 'var(--q2v-accent-color)' }),
                                        (0, a.jsx)('stop', { offset: '1', stopColor: 'var(--q2v-accent-color)', stopOpacity: '0' }),
                                    ],
                                }),
                            ],
                        }),
                    ],
                });
            };
        },
        26279: (e) => {
            e.exports = { root: 'ClipsCarousel_root__r1mGp', controls: 'ClipsCarousel_controls__nZB6r' };
        },
        26689: (e) => {
            e.exports = {
                root: 'MapBlock_root__lcL__',
                heading: 'MapBlock_heading__20gje',
                linkContainer: 'MapBlock_linkContainer__iO0dw',
                mapImage: 'MapBlock_mapImage__Qch0h',
                addressContainer: 'MapBlock_addressContainer__gFnzq',
                address: 'MapBlock_address__UofT6',
                metroStations: 'MapBlock_metroStations__T3Zpc',
            };
        },
        27151: (e) => {
            e.exports = {
                blocksContainer: 'ContinueListen_blocksContainer__tQ80F',
                container: 'ContinueListen_container__1oxhK',
                item: 'ContinueListen_item__jGg_0',
                item_lastPlayed: 'ContinueListen_item_lastPlayed__AkN1T',
                important: 'ContinueListen_important__xwCU5',
            };
        },
        27521: (e) => {
            e.exports = { root: 'CollectionVibeRooms_root__TCV_x', multivibeNDA: 'CollectionVibeRooms_multivibeNDA__JAncX' };
        },
        28301: (e) => {
            e.exports = { root: 'QueryToVibeSimple_root__fOVFG' };
        },
        29001: (e, t, i) => {
            'use strict';
            i.d(t, { F: () => S });
            var a = i(32290),
                s = i(63618),
                r = i(96103),
                o = i(55178),
                l = i.t(o, 2),
                n = i(85472),
                c = i(21732),
                d = i(95716),
                m = {
                    1676: (e, t, i) => {
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.useToggle = void 0));
                        let a = i(810);
                        t.useToggle = (e) => {
                            let [t, i] = (0, a.useState)(e);
                            (0, a.useEffect)(() => {
                                i(e);
                            }, [e]);
                            let s = (0, a.useCallback)(() => {
                                    i((e) => !e);
                                }, []),
                                r = (0, a.useCallback)(() => {
                                    i(!0);
                                }, []),
                                o = (0, a.useCallback)(() => {
                                    i(!1);
                                }, []);
                            return { state: t, toggle: s, setState: i, toggleTrue: r, toggleFalse: o };
                        };
                    },
                    352: (e) => {
                        e.exports = d;
                    },
                    810: (e) => {
                        e.exports = l;
                    },
                },
                _ = {};
            function u(e) {
                var t = _[e];
                if (void 0 !== t) return t.exports;
                var i = (_[e] = { exports: {} });
                return (m[e](i, i.exports, u), i.exports);
            }
            var p = {};
            ((() => {
                (Object.defineProperty(p, '__esModule', { value: !0 }), (p.useTruncate = void 0));
                let e = u(352),
                    t = u(810),
                    i = u(1676);
                p.useTruncate = (a) => {
                    let [s, r] = (0, t.useState)(0),
                        { state: o, toggleTrue: l, toggleFalse: n } = (0, i.useToggle)(!1),
                        c = (0, t.useMemo)(
                            () =>
                                (0, e.throttle)(() => {
                                    let { offsetHeight: e, scrollHeight: t } = (null == a ? void 0 : a.current) || {};
                                    e && t && s < t ? l() : n();
                                }, 100),
                            [s, a, n, l],
                        );
                    return (
                        (0, t.useEffect)(() => {
                            var e, t;
                            !s && (null == (e = a.current) ? void 0 : e.offsetHeight) && r(null == (t = a.current) ? void 0 : t.offsetHeight);
                        }, [s, a]),
                        (0, t.useEffect)(
                            () => (
                                c(),
                                window.addEventListener('resize', c),
                                () => {
                                    window.removeEventListener('resize', c);
                                }
                            ),
                            [c],
                        ),
                        { isTruncated: o }
                    );
                };
            })(),
                p.__esModule);
            var b = p.useTruncate,
                v = i(63423),
                h = i(71926),
                x = i(57594),
                C = i(16696),
                A = i.n(C),
                j = i(60900),
                T = i(84638),
                N = i(83920);
            let I = (0, r.PA)((e) => {
                    let { message: t, title: i, className: r, credits: o, messageClassName: l } = e,
                        {
                            modals: { overviewModal: d },
                            settings: { isMobile: m },
                        } = (0, x.g)(),
                        { formatMessage: _ } = (0, j.A)(),
                        { contentRef: u } = (0, N.g)();
                    return (0, a.jsxs)(T.a, {
                        title: i,
                        titleDataTestId: c.Kq.overview.OVERVIEW_MODAL_TITLE,
                        className: (0, s.$)(A().modal, r),
                        contentClassName: A().modalContent,
                        overlayClassName: A().modalOverlay,
                        headerClassName: (0, s.$)(A().modalHeader, { [A().modalHeader_withTitle]: i }),
                        size: 'fitContent',
                        placement: m ? 'default' : 'right',
                        open: d.isOpened,
                        onOpenChange: d.onOpenChange,
                        onClose: d.close,
                        portalNode: m ? null : u,
                        isMobile: m,
                        labelClose: _({ id: 'interface-actions.close' }),
                        'data-test-id': c.Kq.overview.OVERVIEW_MODAL,
                        closeButtonDataTestId: c.Kq.overview.OVERVIEW_MODAL_CLOSE_BUTTON,
                        children: [
                            (0, a.jsx)(h.HL, {
                                className: (0, s.$)(A().message, l),
                                size: 'l',
                                variant: 'div',
                                dangerouslySetInnerHTML: { __html: (0, n.sanitizeDOM)(t) },
                                'data-test-id': c.Kq.overview.OVERVIEW_MODAL_MESSAGE,
                            }),
                            o,
                        ],
                    });
                }),
                S = (0, r.PA)((e) => {
                    let {
                            meta: t,
                            buttonClassName: i,
                            modalClassName: r,
                            creditsModal: l,
                            messageClassName: d,
                            messageModalClassName: m,
                            textButton: _,
                            withShowButton: u,
                        } = e,
                        p = (0, o.useRef)(null),
                        {
                            modals: { overviewModal: C },
                        } = (0, x.g)(),
                        { isTruncated: j } = b(p),
                        T = (j && t.isExpandable) || u;
                    return (0, a.jsxs)(a.Fragment, {
                        children: [
                            (0, a.jsx)(h.HL, {
                                ref: p,
                                className: (0, s.$)(A().message, d),
                                size: 'm',
                                variant: 'div',
                                lineClamp: t.visibleLinesCount,
                                dangerouslySetInnerHTML: { __html: (0, n.sanitizeDOM)(t.message || '') },
                                'data-test-id': c.Kq.overview.OVERVIEW_MESSAGE,
                            }),
                            T &&
                                t.message &&
                                (0, a.jsxs)(a.Fragment, {
                                    children: [
                                        (0, a.jsx)(v.$, {
                                            className: (0, s.$)(A().button, i),
                                            onClick: C.open,
                                            radius: 'xs',
                                            variant: 'text',
                                            color: 'secondary',
                                            withRipple: !1,
                                            'data-test-id': c.Kq.overview.OVERVIEW_FURTHER_BUTTON,
                                            children: (0, a.jsx)(h.HL, { size: 'm', variant: 'span', children: _ }),
                                        }),
                                        (0, a.jsx)(I, { message: t.message, title: t.title, className: r, credits: l, messageClassName: m }),
                                    ],
                                }),
                        ],
                    });
                });
        },
        29038: (e, t, i) => {
            'use strict';
            i.d(t, { H: () => a });
            var a = (function (e) {
                return ((e.LIKED_ALBUMS = 'liked'), (e.UPCOMING_ALBUMS = 'upcoming'), e);
            })({});
        },
        29304: (e, t, i) => {
            'use strict';
            i.d(t, { D: () => ot });
            var a,
                s,
                r = i(96194),
                o = i(32290),
                l = i(55178),
                n = i(99923),
                c = i(26042),
                d = i(63618),
                m = i(96103),
                _ = i(60900),
                u = i(39407),
                p = i(21732),
                b = i(71483);
            !(function (e) {
                ((e.TOP = 'top'), (e.CENTER = 'center'));
            })(a || (a = {}));
            var v = i(91027),
                h = i(86269),
                x = i(71926),
                C = i(34883),
                A = i(41677),
                j = i(71735),
                T = i(47745),
                N = i(2969),
                I = i(23352),
                S = i(72396),
                f = i(89083),
                L = i(5537),
                g = i(32641),
                y = i(90169),
                R = i(57594),
                k = i(11323),
                E = i(13798),
                P = i(61258),
                w = i(90326),
                O = i(52022),
                M = i.n(O);
            let D = (0, m.PA)((e) => {
                let { promo: t } = e,
                    { formatMessage: i } = (0, _.A)(),
                    { ref: s, intersectionPropertyId: r } = (0, I.n)(),
                    l = (0, T.N)(),
                    c = (0, g.Z)(t.albumUrl),
                    m = (0, C.c)({ album: t.album, callback: c }),
                    O = (0, N.b)(),
                    D = (0, j.P)(),
                    {
                        paywall: { modal: B },
                    } = (0, R.g)(),
                    V = (0, L.N)(),
                    { from: U } = (0, S.f)({ contextId: t.album.id, contextType: b.K.Album }),
                    { isPlaying: W, togglePlay: z } = (0, y.D)({
                        playContextParams: {
                            contextData: { type: b.K.Album, meta: { id: t.album.id }, from: U, utmLink: (0, f.Z)(t.reportingProperties) },
                            loadContextMeta: !0,
                        },
                    }),
                    H = (0, v.c)((e) => {
                        (t.setClicked(), l({ to: n.AppScreen.AlbumScreen }), m(e));
                    }),
                    K = (0, v.c)(() => {
                        (t.setClicked(), z());
                    }),
                    Y = (0, C.c)({ album: t.album, callback: K }),
                    F = (0, v.c)(() => {
                        if (!D()) {
                            if (V) return void B.open();
                            (Y(), O(!W));
                        }
                    }),
                    $ = i({ id: 'entity-names.album-name' }, { albumName: t.album.title }),
                    X = t.coverContentMode === a.TOP;
                return (0, o.jsxs)('div', {
                    className: M().root,
                    ref: s,
                    'data-intersection-property-id': r,
                    'data-test-id': p.Kq.albumPromo.ALBUM_PROMO_CARD,
                    children: [
                        (0, o.jsxs)(h.t, {
                            className: M().artistCover,
                            radius: 'm',
                            withShadow: !0,
                            'data-test-id': p.Kq.albumPromo.ALBUM_PROMO_CARD_ARTIST_COVER,
                            children: [
                                (0, o.jsx)(P.N, {
                                    className: M().artistLink,
                                    href: t.albumUrl,
                                    onClick: H,
                                    'aria-label': $,
                                    children: (0, o.jsx)(k.B, {
                                        className: (0, d.$)(M().artistImage, { [M().artistImage_withTopPosition]: X }),
                                        src: t.cover.uri,
                                        withAvatarReplace: !0,
                                        withAspectRatio: !0,
                                        size: 600,
                                        fit: 'cover',
                                        'aria-hidden': !0,
                                    }),
                                }),
                                (0, o.jsx)(h.t, {
                                    className: M().albumCover,
                                    radius: 'xs',
                                    'data-test-id': p.Kq.albumPromo.ALBUM_PROMO_CARD_ALBUM_COVER,
                                    children: (0, o.jsx)(P.N, {
                                        className: M().albumLink,
                                        href: t.albumUrl,
                                        onClick: H,
                                        'aria-label': $,
                                        children: (0, o.jsx)(k.B, {
                                            className: M().albumImage,
                                            src: t.album.coverUri,
                                            withAvatarReplace: !0,
                                            size: 300,
                                            fit: 'cover',
                                            'aria-hidden': !0,
                                        }),
                                    }),
                                }),
                                (0, o.jsx)(w.D, {
                                    className: M().button,
                                    withRipple: !1,
                                    withHover: !1,
                                    buttonVariant: 'default',
                                    radius: 'xxxl',
                                    size: 'default',
                                    color: 'secondary',
                                    iconSize: 'xxs',
                                    isPlaying: W,
                                    onClick: F,
                                    iconClassName: M().buttonIcon,
                                    disabled: !t.album.isAvailable,
                                    children: (0, o.jsx)(x.HL, {
                                        className: M().buttonText,
                                        variant: 'span',
                                        type: 'controls',
                                        size: 'm',
                                        weight: 'medium',
                                        children: (0, o.jsx)(u.A, { id: 'player-actions.listen' }),
                                    }),
                                }),
                            ],
                        }),
                        (0, o.jsxs)('div', {
                            className: M().meta,
                            children: [
                                (0, o.jsxs)('div', {
                                    className: M().titleContainer,
                                    'data-test-id': p.Kq.albumPromo.ALBUM_PROMO_CARD_TITLE,
                                    children: [
                                        (0, o.jsx)(x.HL, {
                                            className: M().title,
                                            variant: 'div',
                                            lineClamp: 1,
                                            type: 'entity',
                                            size: 's',
                                            weight: 'medium',
                                            children: (0, o.jsx)(P.N, {
                                                className: M().titleLink,
                                                href: t.albumUrl,
                                                onClick: H,
                                                'data-test-id': p.Kq.albumPromo.ALBUM_PROMO_CARD_TITLE_LINK,
                                                children: t.album.title,
                                            }),
                                        }),
                                        t.album.explicitDisclaimer &&
                                            (0, o.jsx)(E.N, { getDescriptionTexts: t.album.getDescriptionTexts, variant: t.album.explicitDisclaimer, size: 'xxxs' }),
                                    ],
                                }),
                                (0, o.jsx)(A.i, { className: M().artists, linkClassName: M().artistsLink, artists: t.artists, lineClamp: 1, captionSize: 's' }),
                            ],
                        }),
                    ],
                });
            });
            var B = i(85472),
                V = i(75245),
                U = i(19620),
                W = i(49522),
                z = i(78035),
                H = {
                    1964: (e) => {
                        e.exports = z;
                    },
                },
                K = {},
                Y = {};
            ((() => {
                (Object.defineProperty(Y, 'X', { value: !0 }), (Y.q = void 0));
                var e = (function e(t) {
                    var i = K[t];
                    if (void 0 !== i) return i.exports;
                    var a = (K[t] = { exports: {} });
                    return (H[t](a, a.exports, e), a.exports);
                })(1964);
                Object.defineProperty(Y, 'q', {
                    enumerable: !0,
                    get: function () {
                        return e.useMergeRefs;
                    },
                });
            })(),
                Y.X);
            var F = Y.q,
                $ = i(42406);
            let X = (e) => {
                let t,
                    { callback: i, visibleTime: a, threshold: s } = e;
                return (0, $.Gv)(
                    (e, s) => {
                        (e.isIntersecting &&
                            (t = setTimeout(() => {
                                (i(), s.disconnect());
                            }, a)),
                            e.isIntersecting || clearTimeout(t));
                    },
                    { threshold: s },
                );
            };
            var G = i(41640),
                Q = i.n(G);
            let q = (e) => {
                    let {
                            forwardRef: t,
                            isLoaded: i,
                            setOutdated: a,
                            headerClassName: s,
                            containerClassName: r,
                            data: n,
                            meta: c,
                            headingVariant: m,
                            className: _,
                            children: u,
                            ...p
                        } = e,
                        { intersectionPropertyId: b, ref: v } = ((e) => {
                            let { forwardedRef: t, isLoaded: i, data: a, setOutdated: s } = e,
                                { report: r, reporting: o } = null != a ? a : {},
                                { ref: n, intersectionPropertyId: c } = ((e) => {
                                    let { params: t, isLoaded: i } = e,
                                        a = (0, l.useRef)(null),
                                        s = (0, l.useId)(),
                                        r = (0, l.useMemo)(() => {
                                            if (i) return t.map(X);
                                        }, [i, t]);
                                    return (
                                        (0, l.useEffect)(
                                            () => (
                                                null == r ||
                                                    r.forEach((e) => {
                                                        a.current && e.observe(a.current);
                                                    }),
                                                () => {
                                                    null == r ||
                                                        r.forEach((e) => {
                                                            e.disconnect();
                                                        });
                                                }
                                            ),
                                            [r],
                                        ),
                                        { intersectionPropertyId: s, ref: a }
                                    );
                                })({
                                    isLoaded: i,
                                    params: (0, l.useMemo)(() => {
                                        var e, t, i;
                                        return [
                                            {
                                                threshold: 0,
                                                visibleTime: null != (e = null == o ? void 0 : o.blockRender.timeMs) ? e : 0,
                                                callback: () => {
                                                    let e = null == o ? void 0 : o.blockRender.url;
                                                    e && (null == r || r(e));
                                                },
                                            },
                                            {
                                                threshold: 0.5,
                                                visibleTime: null != (t = null == o ? void 0 : o.blockImpression.timeMs) ? t : 2100,
                                                callback: () => {
                                                    let e = null == o ? void 0 : o.blockImpression.url;
                                                    (e && (null == r || r(e)), s());
                                                },
                                            },
                                            {
                                                threshold: 0,
                                                visibleTime: null != (i = null == o ? void 0 : o.adImpressions.timeMs) ? i : 2100,
                                                callback: () => {
                                                    let e = null == o ? void 0 : o.adImpressions.url;
                                                    e && (null == r || r(e));
                                                },
                                            },
                                        ];
                                    }, [
                                        r,
                                        null == o ? void 0 : o.adImpressions.timeMs,
                                        null == o ? void 0 : o.adImpressions.url,
                                        null == o ? void 0 : o.blockImpression.timeMs,
                                        null == o ? void 0 : o.blockImpression.url,
                                        null == o ? void 0 : o.blockRender.timeMs,
                                        null == o ? void 0 : o.blockRender.url,
                                        s,
                                    ]),
                                });
                            return { intersectionPropertyId: c, ref: F([n, t]) };
                        })({ forwardedRef: t, data: n, isLoaded: i, setOutdated: a }),
                        h = (0, l.useRef)(null);
                    return (0, o.jsxs)('section', {
                        className: (0, d.$)(Q().root, _),
                        ref: v,
                        'data-intersection-property-id': b,
                        ...(0, B.getDataAttrFromProps)(p),
                        children: [
                            (0, o.jsx)(U.T, { className: s, title: c.title, controls: (0, o.jsx)(W.X, { className: Q().controls, carouselRef: h }), headingVariant: m }),
                            (0, o.jsx)(V.F, { className: r, ref: h, itemClassName: (0, d.$)(Q().item, Q().important), children: u }),
                        ],
                    });
                },
                Z = (0, l.forwardRef)((e, t) => (0, o.jsx)(q, { forwardRef: t, ...e })),
                J = (e) => {
                    let { forwardRef: t, data: i, ...a } = e;
                    return (0, o.jsx)(Z, {
                        ref: t,
                        data: i,
                        ...a,
                        children:
                            null == i
                                ? void 0
                                : i.items.map((e, t) =>
                                      (0, o.jsx)(
                                          c.B,
                                          {
                                              objectType: n.DomainObjectType.Album,
                                              objectId: String(e.album.id),
                                              objectPosX: t + 1,
                                              objectPosY: 1,
                                              objectsCount: null == i ? void 0 : i.items.length,
                                              children: (0, o.jsx)(D, { promo: e }),
                                          },
                                          e.album.getKey(t),
                                      ),
                                  ),
                    });
                },
                ee = (0, l.forwardRef)((e, t) => (0, o.jsx)(J, { forwardRef: t, ...e }));
            var et = i(58359),
                ei = i(5347),
                ea = i.n(ei);
            let es = (0, m.PA)((e) => {
                    let {
                            className: t,
                            forwardRef: i,
                            album: a,
                            description: s,
                            trailerButton: r,
                            entityName: c,
                            onClick: m,
                            albumUrl: u,
                            from: A,
                            utmLink: I,
                            coverColor: S,
                            ...f
                        } = e,
                        O = (0, g.Z)(u),
                        M = (0, j.P)(),
                        D = (0, N.b)(),
                        {
                            paywall: { modal: V },
                        } = (0, R.g)(),
                        U = (0, L.N)(),
                        { formatMessage: W } = (0, _.A)(),
                        { isPlaying: z, togglePlay: H } = (0, y.D)({
                            playContextParams: { contextData: { type: b.K.Album, meta: { id: a.id }, from: A, utmLink: I }, loadContextMeta: !0 },
                        }),
                        K = (0, v.c)(() => {
                            (null == m || m(), H());
                        }),
                        Y = (0, C.c)({ album: a, callback: O }),
                        F = (0, C.c)({ album: a, callback: K }),
                        $ = (0, T.N)(),
                        X = (0, v.c)((e) => {
                            ((0, et.P)(e, ea().ripple), e.stopPropagation(), null == m || m(), $({ to: n.AppScreen.AlbumScreen }), Y(e));
                        }),
                        G = (0, v.c)(() => {
                            if (!M()) {
                                if (U) return void V.open();
                                (F(), D(!z));
                            }
                        }),
                        Q = (0, l.useMemo)(() => {
                            let e;
                            if (S) {
                                let { h: t, s: i } = (0, B.hexToHsl)(S);
                                e = 'hsl('.concat(t, ', ').concat(i, '%, ', 20, '%)');
                            }
                            return { '--new-release-cover-color': e, '--new-release-color': null == a ? void 0 : a.averageColor };
                        }, [null == a ? void 0 : a.averageColor, S]),
                        q = c ? ''.concat(c, ' ').concat(a.title) : a.title;
                    return (0, o.jsxs)(h.t, {
                        radius: 'l',
                        className: (0, d.$)(ea().root, t),
                        ref: i,
                        style: Q,
                        ...(0, B.getDataAttrFromProps)(f),
                        children: [
                            (0, o.jsx)(P.N, { href: u, className: ea().paperLink, onClick: X, 'aria-label': q }),
                            (0, o.jsx)(k.B, {
                                className: ea().image,
                                src: a.coverUri,
                                alt: W({ id: 'entity-names.album-name' }, { albumName: a.title }),
                                size: 100,
                                fit: 'cover',
                                withAvatarReplace: !0,
                            }),
                            (0, o.jsxs)('div', {
                                className: ea().info,
                                children: [
                                    (0, o.jsx)(x.HL, {
                                        className: ea().title,
                                        variant: 'div',
                                        type: 'entity',
                                        size: 'm',
                                        weight: 'medium',
                                        lineClamp: 2,
                                        'aria-label': q,
                                        'data-test-id': p.Kq.newRelease.NEW_RELEASE_CARD_TITLE,
                                        children: a.title,
                                    }),
                                    s &&
                                        (0, o.jsx)(x.HL, {
                                            className: ea().description,
                                            variant: 'div',
                                            type: 'entity',
                                            size: 's',
                                            weight: 'medium',
                                            lineClamp: 1,
                                            'data-test-id': p.Kq.newRelease.NEW_RELEASE_CARD_DESCRIPTION,
                                            children: s,
                                        }),
                                ],
                            }),
                            (0, o.jsxs)('div', {
                                className: ea().container,
                                children: [
                                    a.explicitDisclaimer &&
                                        (0, o.jsx)(E.N, {
                                            className: ea().explicitMark,
                                            containerClassName: ea().explicitMarkContainer,
                                            getDescriptionTexts: a.getDescriptionTexts,
                                            variant: a.explicitDisclaimer,
                                        }),
                                    r,
                                    (0, o.jsx)(w.D, {
                                        buttonVariant: 'default',
                                        withHover: !1,
                                        className: ea().button,
                                        iconClassName: ea().buttonIcon,
                                        variant: 'filled',
                                        iconSize: 'm',
                                        isPlaying: z,
                                        onClick: G,
                                    }),
                                ],
                            }),
                        ],
                    });
                }),
                er = (0, l.forwardRef)((e, t) => (0, o.jsx)(es, { forwardRef: t, ...e })),
                eo = (0, m.PA)((e) => {
                    let { promo: t } = e,
                        { ref: i, intersectionPropertyId: a } = (0, I.n)(),
                        { from: s } = (0, S.f)({ contextId: t.album.id, contextType: b.K.Album });
                    return (0, o.jsx)(er, {
                        onClick: t.setClicked,
                        album: t.album,
                        albumUrl: t.albumUrl,
                        utmLink: (0, f.Z)(t.reportingProperties),
                        from: s,
                        ref: i,
                        'data-intersection-property-id': a,
                        description: t.album.artistNames,
                        'data-test-id': p.Kq.simpleAlbumPromo.SIMPLE_ALBUM_PROMO_CARD,
                    });
                }),
                el = (e) => {
                    let { forwardRef: t, data: i, ...a } = e;
                    return (0, o.jsx)(Z, {
                        ref: t,
                        data: i,
                        ...a,
                        children:
                            null == i
                                ? void 0
                                : i.items.map((e, t) =>
                                      (0, o.jsx)(
                                          c.B,
                                          {
                                              objectType: n.DomainObjectType.Album,
                                              objectId: String(e.album.id),
                                              objectPosX: t + 1,
                                              objectPosY: 1,
                                              objectsCount: null == i ? void 0 : i.items.length,
                                              children: (0, o.jsx)(eo, { promo: e }),
                                          },
                                          e.album.getKey(t),
                                      ),
                                  ),
                    });
                },
                en = (0, l.forwardRef)((e, t) => (0, o.jsx)(el, { forwardRef: t, ...e }));
            var ec = i(79589),
                ed = i(13819),
                em = i(61744),
                e_ = i(66988),
                eu = i(75127),
                ep = i(37997),
                eb = i(91555),
                ev = i.n(eb);
            let eh = (e) => {
                    let {
                            artistId: t,
                            forwardRef: i,
                            isLoading: a,
                            title: s,
                            viewAllActionLink: r,
                            children: c,
                            className: m,
                            containerClassName: _,
                            headerClassName: u,
                            itemClassName: p,
                            headingVariant: b,
                            ...v
                        } = e,
                        h = (0, l.useId)(),
                        x = (0, l.useRef)(null),
                        C = (0, ep.m)({ artistId: t }),
                        A = (0, l.useCallback)(() => {
                            C(n.FromArtistScreenTo.ArtistConcertsScreen);
                        }, [C]),
                        j = (0, l.useMemo)(
                            () =>
                                (0, e_.A)(c, 2)
                                    .slice(0, 4)
                                    .map((e, t) => (0, o.jsx)('div', { className: ev().concertsColumn, children: e }, t)),
                            [c],
                        );
                    return (0, o.jsxs)('section', {
                        ref: i,
                        className: (0, d.$)(ev().root, m),
                        ...v,
                        children: [
                            (0, o.jsx)(U.T, {
                                className: u,
                                labeledForId: h,
                                title: s,
                                viewAllActionLink: r,
                                onViewAllAction: A,
                                controls: (0, o.jsx)(W.X, { className: ev().controls, carouselRef: x }),
                                headingVariant: b,
                                shouldSendAnalyticsOnLoaded: !0,
                            }),
                            (0, o.jsx)(V.F, {
                                itemClassName: (0, d.$)(ev().item, { [ev().item_singleColumn]: 2 >= l.Children.count(c) }, p),
                                className: (0, d.$)(_, { [ev().preventScroll]: a }),
                                ref: x,
                                'aria-labelledby': h,
                                children: a ? Array.from({ length: 2 }, (e, t) => (0, o.jsx)('div', { className: ev().concertsColumn, children: (0, eu.T)(2) }, t)) : j,
                            }),
                        ],
                    });
                },
                ex = (0, l.forwardRef)((e, t) => (0, o.jsx)(eh, { forwardRef: t, ...e }));
            var eC = i(53937),
                eA = i(79406);
            let ej = (0, m.PA)((e) => {
                    var t, i, a, s;
                    let {
                            forwardRef: r,
                            isShimmerVisible: l,
                            isShimmerActive: d,
                            containerClassName: m,
                            headerClassName: _,
                            meta: u,
                            data: p,
                            headingVariant: b,
                            className: v,
                            ...h
                        } = e,
                        { artist: x, concert: C, experiments: A } = (0, R.g)(),
                        j = null != (a = null != (i = x.id) ? i : C.leadArtistId) ? a : '',
                        T = A.checkExperiment(eA.z.WebNextConcertsIdentityEventType, 'on'),
                        N = T ? em.M : ed.Z;
                    return (0, o.jsx)(c.B, {
                        objectType: n.DomainObjectType.Shortcut,
                        objectId: String(j),
                        objectPosX: 0,
                        objectPosY: 0,
                        objectsCount: null != (s = null == p || null == (t = p.items) ? void 0 : t.length) ? s : 0,
                        children: (0, o.jsx)(ex, {
                            ref: r,
                            artistId: String(j),
                            title: u.title,
                            viewAllActionLink: u.viewAllActionLink,
                            isLoading: l || d,
                            headingVariant: b,
                            className: v,
                            headerClassName: _,
                            containerClassName: m,
                            ...(0, B.getDataAttrFromProps)(h),
                            children:
                                null == p
                                    ? void 0
                                    : p.items.map((e, t) => {
                                          var i, a;
                                          let {
                                              objectPosX: s,
                                              objectPosY: r,
                                              objectsCount: l,
                                          } = (0, eC.$)({ index: t, count: null != (a = null == (i = p.items) ? void 0 : i.length) ? a : 0, itemsCountPerColumn: 2 });
                                          return (0, o.jsx)(
                                              c.B,
                                              {
                                                  objectType: n.DomainObjectType.Concert,
                                                  objectId: String(e.id),
                                                  objectPosX: s,
                                                  objectPosY: r,
                                                  objectsCount: l,
                                                  children: (0, o.jsx)(ec.V, { artistId: String(j), concert: e, meta: (0, o.jsx)(N, { concert: e }), shouldShowMask: T }),
                                              },
                                              e.id,
                                          );
                                      }),
                        }),
                    });
                }),
                eT = (0, l.forwardRef)((e, t) => (0, o.jsx)(ej, { forwardRef: t, ...e }));
            var eN = i(74196),
                eI = i(39723),
                eS = i.n(eI);
            let ef = (0, m.PA)((e) => {
                    var t, i, a;
                    let { isShimmerVisible: s, isShimmerActive: r, headerClassName: l, data: n, headingVariant: c } = e,
                        { ref: d, intersectionPropertyId: m } = (0, I.n)(),
                        { playlist: _, artists: p } = n || {},
                        { artist: b } = (0, R.g)(),
                        v = !!(null == (t = b.meta) ? void 0 : t.artist.isAvailable),
                        C = null == (i = b.meta) ? void 0 : i.artist.coverUri,
                        j = null == (a = b.meta) ? void 0 : a.artist.name;
                    return (0, o.jsx)(U.T, {
                        ref: d,
                        'data-intersection-property-id': m,
                        coverUrl: null == _ ? void 0 : _.coverUri,
                        withCover: !0,
                        withDescription: !0,
                        viewAllActionLink: null == _ ? void 0 : _.url,
                        title: null == _ ? void 0 : _.title,
                        controls: !1,
                        coverContainerClassName: eS().cover,
                        shimmerCoverClassName: eS().shimmerCover,
                        titleLineClamp: 1,
                        withDescriptionWidthLimit: !1,
                        isShimmerVisible: s,
                        isShimmerActive: r,
                        headingVariant: c,
                        className: l,
                        subTitle: (0, o.jsxs)('div', {
                            className: eS().subTitle,
                            children: [
                                (0, o.jsx)(eN.q, {
                                    children: (0, o.jsx)(x.DZ, {
                                        variant: 'h4',
                                        children: (0, o.jsx)(u.A, { id: 'page.artist-pick-aria-label', values: { artistName: j } }),
                                    }),
                                }),
                                (0, o.jsx)(x.HL, {
                                    variant: 'span',
                                    size: 'l',
                                    weight: 'medium',
                                    className: eS().text,
                                    'aria-hidden': !0,
                                    children: (0, o.jsx)(u.A, { id: 'page.artist-pick-subtitle' }),
                                }),
                                (0, o.jsx)(h.t, {
                                    radius: 'round',
                                    className: eS().smallCoverContainer,
                                    children: (0, o.jsx)(k.B, {
                                        fit: 'cover',
                                        src: C,
                                        size: 50,
                                        className: eS().smallCover,
                                        withAvatarReplace: !0,
                                        isAvailable: v,
                                        'aria-hidden': !0,
                                    }),
                                }),
                                j &&
                                    (0, o.jsx)(x.HL, {
                                        variant: 'span',
                                        size: 'l',
                                        weight: 'medium',
                                        className: eS().text,
                                        lineClamp: 1,
                                        'aria-hidden': !0,
                                        children: j,
                                    }),
                            ],
                        }),
                        description: (0, o.jsx)(A.i, {
                            artists: p,
                            linkClassName: eS().artistLink,
                            spoilerClassName: eS().artistsSpoiler,
                            lineClamp: 1,
                            visibleArtistsCount: 3,
                            spoilerComponent: (0, o.jsx)(u.A, { id: 'entity-names.and-more-artists', values: { artists: '' } }),
                        }),
                    });
                }),
                eL = (0, m.PA)((e) => {
                    var t, i;
                    let { forwardRef: a, className: s, ...r } = e;
                    return (0, o.jsx)('section', {
                        ref: a,
                        className: s,
                        ...(0, B.getDataAttrFromProps)(r),
                        children: (0, o.jsx)(c.B, {
                            objectType: n.DomainObjectType.Playlist,
                            objectPosX: 1,
                            objectPosY: 1,
                            objectsCount: 1,
                            objectId: null != (i = null == (t = r.data) ? void 0 : t.playlist.id) ? i : '',
                            children: (0, o.jsx)(ef, { ...r }),
                        }),
                    });
                }),
                eg = (0, l.forwardRef)((e, t) => (0, o.jsx)(eL, { forwardRef: t, ...e }));
            var ey = i(69951),
                eR = i(98350),
                ek = i(49518),
                eE = i(34223),
                eP = i(81497),
                ew = i.n(eP);
            let eO = (0, m.PA)((e) => {
                    let {
                            forwardRef: t,
                            isShimmerVisible: i,
                            isShimmerActive: a,
                            tracksContainerClassName: s,
                            meta: r,
                            data: l,
                            headerClassName: m,
                            headingVariant: _,
                            className: u,
                            ...p
                        } = e,
                        v = (function () {
                            var e;
                            let { artist: t, concert: i } = (0, R.g)();
                            return null != (e = t.id) ? e : i.leadArtistId;
                        })(),
                        { from: h, utmLink: x } = (0, S.f)({ contextType: b.K.Artist, contextId: v });
                    return null === v
                        ? null
                        : (0, o.jsx)(ek.$, {
                              className: u,
                              ref: t,
                              shimmer: (0, o.jsx)(eE.D, { variant: eR.X.PLAYLIST, isActive: a }),
                              maxColumnsCount: ek.D.ONE,
                              itemsCountPerColumn: 5,
                              isShimmerVisible: i,
                              isShimmerActive: a,
                              carouselClassName: s,
                              carouselItemClassName: (0, d.$)(ew().item, ew().important),
                              blockHeaderClassName: m,
                              blockHeaderTitle: r.title,
                              blockHeaderDescription: r.description,
                              blockHeaderHeadingVariant: _,
                              viewAllActionLink: r.viewAllActionLink,
                              ...p,
                              children:
                                  null == l
                                      ? void 0
                                      : l.items.map((e, t) => {
                                            var i;
                                            let { objectPosX: a, objectPosY: s, objectsCount: r } = (0, eC.$)({ index: t, count: l.items.length });
                                            return (0, o.jsx)(
                                                c.B,
                                                {
                                                    objectId: e.id,
                                                    objectType: n.DomainObjectType.Track,
                                                    objectPosX: a,
                                                    objectPosY: s,
                                                    objectsCount: r,
                                                    children: (0, o.jsx)(ey.K, {
                                                        track: e,
                                                        playContextParams:
                                                            ((i = e.id),
                                                            l && v
                                                                ? {
                                                                      contextData: { type: b.K.Artist, meta: { id: v }, from: h, utmLink: x },
                                                                      queueParams: { index: t, entityId: i },
                                                                      loadContextMeta: !0,
                                                                  }
                                                                : { contextData: { type: b.K.Artist, meta: { id: '' }, from: h, utmLink: x } }),
                                                    }),
                                                },
                                                e.id,
                                            );
                                        }),
                          });
                }),
                eM = (0, l.forwardRef)((e, t) => (0, o.jsx)(eO, { forwardRef: t, ...e }));
            var eD = i(6752),
                eB = i(24170),
                eV = i(89020);
            let eU = (e) => {
                    let {
                            forwardRef: t,
                            isShimmerVisible: i,
                            isShimmerActive: a,
                            containerClassName: s,
                            headerClassName: r,
                            meta: l,
                            data: d,
                            headingVariant: m,
                            className: _,
                            ...u
                        } = e,
                        p = (0, eD.L)(() =>
                            i || !d
                                ? (0, o.jsx)(eV.V, { className: s, isActive: a })
                                : (0, o.jsx)(c.B, {
                                      objectType: n.DomainObjectType.Album,
                                      objectId: String(d.album.id),
                                      objectPosX: 1,
                                      objectPosY: 1,
                                      objectsCount: 1,
                                      children: (0, o.jsx)(eB.a, { className: s, album: d.album }),
                                  }),
                        );
                    return (0, o.jsxs)('section', {
                        className: _,
                        ref: t,
                        ...(0, B.getDataAttrFromProps)(u),
                        children: [(0, o.jsx)(U.T, { className: r, title: l.title, headingVariant: m, titleLineClamp: 1 }), p],
                    });
                },
                eW = (0, l.forwardRef)((e, t) => (0, o.jsx)(eU, { forwardRef: t, ...e }));
            var ez = i(40126);
            let eH = (e) => {
                    let {
                            forwardRef: t,
                            isShimmerVisible: i,
                            isShimmerActive: a,
                            containerClassName: s,
                            headerClassName: r,
                            meta: l,
                            data: d,
                            headingVariant: m,
                            className: _,
                            ...u
                        } = e,
                        p = (0, eD.L)(() =>
                            i || !d
                                ? (0, o.jsx)(eV.V, { className: s, isActive: a })
                                : (0, o.jsx)(c.B, {
                                      objectType: n.DomainObjectType.UpcomingAlbum,
                                      objectId: String(d.album.id),
                                      objectPosX: 1,
                                      objectPosY: 1,
                                      objectsCount: 1,
                                      children: (0, o.jsx)(ez.M, { className: s, upcomingAlbum: d.album }),
                                  }),
                        );
                    return (0, o.jsxs)('section', {
                        className: _,
                        ref: t,
                        ...(0, B.getDataAttrFromProps)(u),
                        children: [(0, o.jsx)(U.T, { className: r, title: l.title, headingVariant: m, titleLineClamp: 1 }), p],
                    });
                },
                eK = (0, l.forwardRef)((e, t) => (0, o.jsx)(eH, { forwardRef: t, ...e }));
            var eY = i(14631),
                eF = i(59888),
                e$ = i(56958);
            let eX = (0, m.PA)((e) => {
                    let {
                            forwardRef: t,
                            isShimmerVisible: i,
                            isShimmerActive: a,
                            tracksContainerClassName: s,
                            meta: r,
                            data: l,
                            headerClassName: d,
                            headingVariant: m,
                            className: _,
                            ...u
                        } = e,
                        { from: p, utmLink: v } = (0, S.f)({ contextType: b.K.Playlist, contextId: null == l ? void 0 : l.playlist.id }),
                        h = (0, e$.i)({ playlistId: null == l ? void 0 : l.playlist.id });
                    return (0, o.jsx)(eF._, {
                        sourceContextData: h,
                        children: (0, o.jsx)(ek.$, {
                            className: _,
                            ref: t,
                            shimmer: (0, o.jsx)(eE.D, { variant: eR.X.PLAYLIST, isActive: a }),
                            maxColumnsCount: ek.D.TWO,
                            itemsCountPerColumn: 4,
                            isShimmerVisible: i,
                            isShimmerActive: a,
                            carouselClassName: s,
                            blockHeaderClassName: d,
                            blockHeaderTitle: r.title,
                            blockHeaderDescription: r.description,
                            blockHeaderHeadingVariant: m,
                            viewAllActionLink: r.viewAllActionLink,
                            ...u,
                            children:
                                null == l
                                    ? void 0
                                    : l.items.map((e, t) => {
                                          let { objectPosX: i, objectPosY: a, objectsCount: s } = (0, eC.$)({ index: t, count: l.items.length });
                                          return (0, o.jsx)(
                                              c.B,
                                              {
                                                  objectId: e.data.id,
                                                  objectType: n.DomainObjectType.Track,
                                                  objectPosX: i,
                                                  objectPosY: a,
                                                  objectsCount: s,
                                                  children: (0, o.jsx)(eY.Q, {
                                                      track: e.data,
                                                      playContextParams: ((e) =>
                                                          l
                                                              ? {
                                                                    contextData: { type: b.K.Playlist, meta: { id: l.playlist.id }, from: p, utmLink: v },
                                                                    queueParams: { index: l.items.findIndex((t) => t.data.id === e), entityId: e },
                                                                    loadContextMeta: !0,
                                                                }
                                                              : { contextData: { type: b.K.Playlist, meta: { id: '' }, from: p, utmLink: v } })(e.data.id),
                                                  }),
                                              },
                                              e.data.id,
                                          );
                                      }),
                        }),
                    });
                }),
                eG = (0, l.forwardRef)((e, t) => (0, o.jsx)(eX, { forwardRef: t, ...e }));
            var eQ = i(19429);
            let eq = function () {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
                    return e.map((e) => e.data);
                },
                eZ = (e) => {
                    let { forwardRef: t, isShimmerVisible: i, isShimmerActive: a, data: s, meta: r, containerClassName: l, headerClassName: n, className: c, ...d } = e;
                    return (0, o.jsx)(eQ.K, {
                        className: c,
                        ref: t,
                        isShimmerVisible: i,
                        isShimmerActive: a,
                        clips: eq(null == s ? void 0 : s.items),
                        title: r.title,
                        description: r.description,
                        viewAllActionLink: r.viewAllActionLink,
                        containerClassName: l,
                        headerClassName: n,
                        ...d,
                    });
                },
                eJ = (0, l.forwardRef)((e, t) => (0, o.jsx)(eZ, { forwardRef: t, ...e }));
            var e0 = i(98148),
                e1 = i(53226),
                e2 = i.n(e1);
            let e3 = (e) => {
                    let { title: t, description: i, viewAllActionLink: a, headerClassName: s, containerClassName: r, headingVariant: l } = e,
                        { formatMessage: n } = (0, _.A)();
                    return (0, o.jsxs)('div', {
                        className: e2().root,
                        children: [
                            (0, o.jsx)(U.T, {
                                className: s,
                                title: t,
                                description: i,
                                viewAllActionLink: a,
                                'aria-label': n({ id: 'error-messages.empty-collection-podcasts' }),
                                headingVariant: l,
                                withDescription: !!i,
                            }),
                            (0, o.jsx)('div', { className: (0, d.$)(e2().text, r), children: (0, o.jsx)(u.A, { id: 'error-messages.empty-collection-podcasts' }) }),
                        ],
                    });
                },
                e9 = (e) => {
                    let {
                        forwardRef: t,
                        isShimmerVisible: i,
                        isShimmerActive: a,
                        containerClassName: s,
                        headerClassName: r,
                        meta: l,
                        data: d,
                        headingVariant: m,
                        className: _,
                        ...u
                    } = e;
                    return (null == d ? void 0 : d.isEmptyBlock)
                        ? (0, o.jsx)(e3, {
                              title: l.title,
                              description: l.description,
                              viewAllActionLink: l.viewAllActionLink,
                              containerClassName: s,
                              headerClassName: r,
                              headingVariant: m,
                          })
                        : (0, o.jsx)(e0.O, {
                              className: _,
                              ...u,
                              isShimmerVisible: i,
                              isShimmerActive: a,
                              headerClassName: r,
                              containerClassName: s,
                              title: l.title,
                              description: l.description,
                              viewAllActionLink: l.viewAllActionLink,
                              ref: t,
                              headingVariant: m,
                              children:
                                  null == d
                                      ? void 0
                                      : d.items.map((e, t) =>
                                            (0, o.jsx)(
                                                c.B,
                                                {
                                                    objectType: n.DomainObjectType.Album,
                                                    objectId: String(e.id),
                                                    objectPosX: t + 1,
                                                    objectPosY: 1,
                                                    objectsCount: d.items.length,
                                                    children: (0, o.jsx)(eB.a, { album: e, contentLinesCount: 3 }),
                                                },
                                                e.id,
                                            ),
                                        ),
                          });
                },
                e4 = (0, l.forwardRef)((e, t) => (0, o.jsx)(e9, { forwardRef: t, ...e }));
            var e8 = i(90404),
                e7 = i(15299),
                e6 = i(84782),
                e5 = i(30564),
                te = i(45180),
                tt = i(8946),
                ti = i(18125),
                ta = i.n(ti),
                ts = i(91118),
                tr = i(54997),
                to = i.n(tr);
            let tl = (e) => {
                    let { tab: t, areBothTabsEmpty: i } = e,
                        a = (0, l.useMemo)(() => {
                            switch (t) {
                                case ts.n.ALBUM:
                                    return (0, o.jsx)(u.A, { id: 'error-messages.empty-collection-albums' });
                                case ts.n.PRESAVED_ALBUM:
                                    return (0, o.jsx)(u.A, { id: 'error-messages.empty-collection-upcoming-albums-title' });
                            }
                        }, [t]);
                    return (0, o.jsx)('div', { className: (0, d.$)(to().root, { [to().root_oneEmptyTab]: !i, [to().root_twoEmptyTabs]: i }), children: a });
                },
                tn = (0, m.PA)((e) => {
                    let {
                            forwardRef: t,
                            isShimmerVisible: i,
                            isShimmerActive: a,
                            containerClassName: s,
                            headerClassName: r,
                            meta: m,
                            data: _,
                            headingVariant: u,
                            className: p,
                            ...b
                        } = e,
                        { objectsCount: v } = (0, e6.N)(),
                        h = (0, l.useId)(),
                        x = (0, l.useRef)(null),
                        C = (0, l.useId)(),
                        A = ''.concat(h, ' ').concat(h, '-description'),
                        j = (0, e7.zb)((null == _ ? void 0 : _.activeIndexTab) || 0),
                        T = (0, l.useMemo)(() => {
                            var e;
                            return (null == _ || null == (e = _.tabs[j.value]) ? void 0 : e.items.length) === 0;
                        }, [null == _ ? void 0 : _.tabs, j.value]),
                        N = (0, l.useCallback)(
                            (e) =>
                                e.isEmptyTab
                                    ? (0, o.jsxs)(o.Fragment, {
                                          children: [
                                              !(null == _ ? void 0 : _.areBothTabsEmpty) &&
                                                  (0, o.jsx)(V.F, {
                                                      className: (0, d.$)(ta().carouselEmpty, s),
                                                      itemClassName: (0, d.$)(ta().item, ta().important),
                                                      tabIndex: -1,
                                                      children: (0, e5.k)({ isActive: !1, withInfo: !0, linesCount: 4 }),
                                                  }),
                                              (0, o.jsx)(tl, { tab: e.type, areBothTabsEmpty: null == _ ? void 0 : _.areBothTabsEmpty }),
                                          ],
                                      })
                                    : (0, o.jsx)(V.F, {
                                          ref: x,
                                          itemClassName: (0, d.$)(ta().item, ta().important),
                                          className: s,
                                          'aria-labelledby': A,
                                          children: e.items.map((t, i) => {
                                              switch (t.type) {
                                                  case e8._.ALBUM_ITEM:
                                                      return (0, o.jsx)(
                                                          c.B,
                                                          {
                                                              objectType: n.DomainObjectType.Album,
                                                              objectId: String(t.data.id),
                                                              objectPosX: i + 1,
                                                              objectPosY: 1,
                                                              objectsCount: e.items.length,
                                                              children: (0, o.jsx)(eB.a, { contentLinesCount: 4, album: t.data }),
                                                          },
                                                          t.data.id,
                                                      );
                                                  case e8._.PRESAVED_ALBUM_ITEM:
                                                      return (0, o.jsx)(
                                                          c.B,
                                                          {
                                                              objectType: n.DomainObjectType.UpcomingAlbum,
                                                              objectId: String(t.data.id),
                                                              objectPosX: i + 1,
                                                              objectPosY: 1,
                                                              objectsCount: e.items.length,
                                                              children: (0, o.jsx)(ez.M, { contentLinesCount: 4, upcomingAlbum: t.data }),
                                                          },
                                                          t.data.id,
                                                      );
                                              }
                                          }),
                                      }),
                            [A, s, null == _ ? void 0 : _.areBothTabsEmpty],
                        ),
                        I = (0, l.useMemo)(
                            () =>
                                i
                                    ? (0, o.jsx)(V.F, {
                                          ref: x,
                                          itemClassName: (0, d.$)(ta().item, ta().important),
                                          className: s,
                                          'aria-labelledby': A,
                                          children: (0, e5.k)({ isActive: a, withInfo: !0, linesCount: 4 }),
                                      })
                                    : null == _
                                      ? void 0
                                      : _.tabs.map((e, t) =>
                                            (0, o.jsx)(e7.Kp, { name: t, value: j.value, elementId: C, className: ta().tabPanel, children: N(e) }, e.id),
                                        ),
                            [i, null == _ ? void 0 : _.tabs, s, A, a, j.value, C, N],
                        );
                    return (0, o.jsxs)('section', {
                        className: (0, d.$)(ta().root, p, { [ta().root_withControls]: !T }),
                        ref: t,
                        ...(0, B.getDataAttrFromProps)(b),
                        children: [
                            (0, o.jsx)(c.B, {
                                objectType: n.DomainObjectType.Shortcut,
                                objectId: String(m.viewAllActionLink),
                                objectPosX: 0,
                                objectPosY: 0,
                                objectsCount: null != v ? v : 0,
                                children: (0, o.jsx)(U.T, {
                                    className: (0, d.$)(r, ta().header, ta().important),
                                    title: m.title,
                                    description: m.description,
                                    labeledForId: h,
                                    viewAllActionLink: m.viewAllActionLink,
                                    controls: (0, o.jsx)(W.X, { className: ta().controls, carouselRef: x }),
                                    headingVariant: u,
                                    withDescription: !!m.description,
                                }),
                            }),
                            (0, o.jsx)(tt.wI, {
                                className: (0, d.$)(s, ta().tabCarousel, ta().important),
                                isShimmerVisible: i,
                                elementId: C,
                                shimmer: (0, o.jsx)(tt.zr, { isActive: a, className: (0, d.$)(s, ta().tabCarousel, ta().important), shimmerClassName: ta().tabShimmer }),
                                'aria-labelledby': h,
                                ...j,
                                children:
                                    null == _
                                        ? void 0
                                        : _.tabs.map((e, t) =>
                                              (0, o.jsx)(te.o, { value: t, 'aria-label': e.title, title: e.title, className: (0, d.$)(ta().tab, ta().important) }, e.id),
                                          ),
                            }),
                            I,
                        ],
                    });
                }),
                tc = (0, l.forwardRef)((e, t) => (0, o.jsx)(tn, { forwardRef: t, ...e }));
            var td = i(7474),
                tm = i(40624),
                t_ = i.n(tm);
            let tu = (e) => {
                    let { title: t, description: i, viewAllActionLink: a, headerClassName: s, containerClassName: r } = e,
                        { formatMessage: l } = (0, _.A)();
                    return (0, o.jsxs)('div', {
                        className: t_().root,
                        children: [
                            (0, o.jsx)(U.T, {
                                className: s,
                                title: t,
                                description: i,
                                viewAllActionLink: a,
                                'aria-label': l({ id: 'error-messages.empty-collection-artists-title' }),
                                withDescription: !!i,
                            }),
                            (0, o.jsx)('div', { className: (0, d.$)(t_().text, r), children: (0, o.jsx)(u.A, { id: 'error-messages.empty-collection-artists-title' }) }),
                        ],
                    });
                },
                tp = (e) => {
                    let {
                        forwardRef: t,
                        isShimmerVisible: i,
                        isShimmerActive: a,
                        containerClassName: s,
                        headerClassName: r,
                        className: l,
                        meta: d,
                        data: m,
                        headingVariant: _,
                        ...u
                    } = e;
                    return (null == m ? void 0 : m.isEmptyBlock)
                        ? (0, o.jsx)(tu, {
                              title: d.title,
                              description: d.description,
                              viewAllActionLink: d.viewAllActionLink,
                              containerClassName: s,
                              headerClassName: r,
                          })
                        : (0, o.jsx)(e0.O, {
                              ...u,
                              className: l,
                              isShimmerVisible: i,
                              isShimmerActive: a,
                              isShimmerCentered: !0,
                              isShimmerRounded: !0,
                              containerClassName: s,
                              headerClassName: r,
                              title: d.title,
                              description: d.description,
                              viewAllActionLink: d.viewAllActionLink,
                              ref: t,
                              headingVariant: _,
                              children:
                                  null == m
                                      ? void 0
                                      : m.items.map((e, t) =>
                                            (0, o.jsx)(
                                                c.B,
                                                {
                                                    objectType: n.DomainObjectType.Artist,
                                                    objectId: e.id,
                                                    objectPosX: t + 1,
                                                    objectPosY: 1,
                                                    objectsCount: m.items.length,
                                                    children: (0, o.jsx)(td.a, { artist: e, contentLinesCount: 3 }),
                                                },
                                                e.id,
                                            ),
                                        ),
                          });
                },
                tb = (0, l.forwardRef)((e, t) => (0, o.jsx)(tp, { forwardRef: t, ...e }));
            var tv = i(44989),
                th = i(50162),
                tx = i(19529),
                tC = i(37862),
                tA = i(48922),
                tj = i(43564),
                tT = i(32156),
                tN = i(1444),
                tI = i(40229),
                tS = i(58910),
                tf = i.n(tS);
            let tL = (e) => {
                    var t;
                    let { item: i } = e,
                        a = (0, v.c)((e) => {
                            (0, et.P)(e, tf().ripple);
                        });
                    return (0, o.jsxs)(P.N, {
                        href: i.data.viewAllActionLink,
                        className: (0, d.$)(tf().item, tf().menuItem),
                        onClick: a,
                        children: [
                            (0, o.jsx)(th._V, {
                                src: null == (t = i.data.cover) ? void 0 : t.uri,
                                className: tf().cover,
                                fit: 'cover',
                                withAvatarReplace: !0,
                                'aria-hidden': !0,
                            }),
                            (0, o.jsx)(x.HL, { className: tf().text, variant: 'div', type: 'entity', size: 'm', weight: 'medium', lineClamp: 2, children: i.data.title }),
                        ],
                    });
                },
                tg = (0, m.PA)((e) => {
                    let { item: t, artistId: i } = e,
                        [a, s] = (0, l.useState)(!1),
                        { state: r, setState: n } = (0, tv.e)(!1),
                        c = (0, j.P)(),
                        { freeAccess: d } = (0, R.g)(),
                        m = (0, N.b)(),
                        _ = ''.concat(tC.U.ARTIST, '-').concat(i),
                        {
                            isPlaying: u,
                            togglePlay: p,
                            isCurrent: b,
                        } = (0, tj.B)({ seeds: t.data.seeds, pageIdForFrom: tA._Q.RADIO, blockIdForFrom: _, parentContextId: i }),
                        h = (0, v.c)(async () => (d.isVibeStartRestricted ? void n(!0) : p())),
                        C = (0, v.c)(() => {
                            c() ||
                                (s(!0),
                                h().finally(() => {
                                    s(!1);
                                }),
                                m(!u));
                        }),
                        A = (0, v.c)((e) => {
                            ((0, et.P)(e, tf().ripple), C());
                        }),
                        T = (0, eD.L)(() => {
                            var e;
                            return t.data.shouldShowAgent && t.data.agent
                                ? (0, o.jsx)(tx.n, { agent: t.data.agent, isCurrent: b, isPlaying: u, onPlayButtonClick: C, playButtonIconSize: 'm' })
                                : (0, o.jsx)(tI.q, {
                                      isCurrent: b,
                                      isPlaying: u,
                                      isAvailable: !0,
                                      isPlayButtonLoading: a,
                                      onPlayButtonClick: C,
                                      title: t.data.title,
                                      entityCoverStyle: { backgroundColor: null == (e = t.data.agent) ? void 0 : e.cover.color },
                                      coverUri: 'avatars.mds.yandex.net/get-music-misc/2419084/img.64426eadaa320f4f1b4b633a/%%',
                                      radius: 'round',
                                      withLoadingIndicator: !1,
                                      playButtonIconSize: 'm',
                                  });
                        }),
                        I = (0, l.useCallback)(
                            () =>
                                (0, o.jsxs)(tN.C, {
                                    className: tf().item,
                                    onClick: A,
                                    children: [
                                        T,
                                        (0, o.jsx)(x.HL, {
                                            className: tf().text,
                                            variant: 'div',
                                            type: 'entity',
                                            size: 'm',
                                            weight: 'medium',
                                            lineClamp: 2,
                                            children: t.data.title,
                                        }),
                                    ],
                                }),
                            [A, T, t.data.title],
                        );
                    return (0, o.jsx)(tT.S, {
                        isEnabled: d.isVibeStartRestricted,
                        isOpened: r,
                        onOpenChange: n,
                        placement: 'right',
                        textVariant: 'vibe',
                        vibeTextVariant: t.data.stationType,
                        renderChildren: I,
                    });
                }),
                ty = (e) => {
                    let { items: t, className: i, artistId: a } = e;
                    return (0, o.jsx)('div', {
                        className: (0, d.$)(tf().root, i),
                        children: t.map((e, t) => {
                            switch (e.type) {
                                case e8._.MENU_ITEM:
                                    return (0, o.jsx)(tL, { item: e }, e.key);
                                case e8._.WAVE_AGENT_ITEM:
                                    return (0, o.jsx)(tg, { item: e, artistId: a }, t);
                                default:
                                    return null;
                            }
                        }),
                    });
                };
            var tR = i(79856),
                tk = i(17744),
                tE = i.n(tk);
            let tP = (e) => {
                    let { isActive: t, itemClassName: i, actionItemClassName: a } = e;
                    return (0, o.jsxs)('div', {
                        className: tE().root,
                        children: [
                            (0, o.jsx)(eV.V, { isActive: t, className: i, round: !0, centered: !0 }),
                            (0, o.jsxs)('div', {
                                className: (0, d.$)(tE().actionItems, a),
                                children: [
                                    (0, o.jsxs)('div', {
                                        className: tE().actionItem,
                                        children: [
                                            (0, o.jsx)(tR.W, { isActive: t, className: tE().actionCover, radius: 's' }),
                                            (0, o.jsxs)('div', {
                                                className: tE().actionTextContainer,
                                                children: [
                                                    (0, o.jsx)(tR.W, { isActive: t, className: (0, d.$)(tE().actionText, tE().actionText_title), radius: 's' }),
                                                    (0, o.jsx)(tR.W, { isActive: t, className: tE().actionText, radius: 's' }),
                                                ],
                                            }),
                                        ],
                                    }),
                                    (0, o.jsxs)('div', {
                                        className: tE().actionItem,
                                        children: [
                                            (0, o.jsx)(tR.W, { isActive: t, className: tE().actionCover, radius: 'round' }),
                                            (0, o.jsxs)('div', {
                                                className: tE().actionTextContainer,
                                                children: [
                                                    (0, o.jsx)(tR.W, { isActive: t, className: (0, d.$)(tE().actionText, tE().actionText_title), radius: 's' }),
                                                    (0, o.jsx)(tR.W, { isActive: t, className: tE().actionText, radius: 's' }),
                                                ],
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                        ],
                    });
                },
                tw = function () {
                    var e;
                    let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    return Array.from({ length: null != (e = t.countWeb) ? e : 5 }, (e, i) => (0, o.jsx)(tP, { ...t }, i));
                };
            var tO = i(77279),
                tM = i.n(tO);
            let tD = (e) => {
                    var t;
                    let {
                            forwardRef: i,
                            isShimmerVisible: a,
                            isShimmerActive: s,
                            containerClassName: r,
                            headerClassName: m,
                            className: u,
                            meta: p,
                            data: b,
                            headingVariant: v,
                            ...h
                        } = e,
                        { formatMessage: x } = (0, _.A)(),
                        C = (0, l.useRef)(null);
                    return (0, o.jsxs)('section', {
                        ref: i,
                        className: (0, d.$)(tM().root, u),
                        ...(0, B.getDataAttrFromProps)(h),
                        children: [
                            (0, o.jsx)(U.T, {
                                className: m,
                                title: p.title,
                                description: p.description,
                                viewAllActionLink: p.viewAllActionLink,
                                headingVariant: v,
                                controls: (0, o.jsx)(W.X, { className: tM().controls, carouselRef: C }),
                            }),
                            (0, o.jsx)(V.F, {
                                className: r,
                                ref: C,
                                children: a
                                    ? tw({
                                          isActive: s,
                                          itemClassName: (0, d.$)(tM().item, tM().important),
                                          actionItemClassName: (0, d.$)(tM().actionItem, tM().important),
                                          countWeb: null == (t = p.source) ? void 0 : t.countWeb,
                                      })
                                    : null == b
                                      ? void 0
                                      : b.artists.map((e, t) =>
                                            (0, o.jsx)(
                                                c.B,
                                                {
                                                    objectType: n.DomainObjectType.Artist,
                                                    objectId: e.artist.id,
                                                    objectPosX: t + 1,
                                                    objectPosY: 1,
                                                    objectsCount: b.artists.length,
                                                    children: (0, o.jsxs)('div', {
                                                        className: tM().itemContainer,
                                                        'aria-label': x({ id: 'entity-names.artist-name' }, { artistName: e.artist.name }),
                                                        children: [
                                                            (0, o.jsx)(td.a, { className: (0, d.$)(tM().item, tM().important), artist: e.artist, contentLinesCount: 2 }),
                                                            (0, o.jsx)(ty, {
                                                                className: (0, d.$)(tM().actionItem, tM().important),
                                                                items: e.items,
                                                                artistId: e.artist.id,
                                                            }),
                                                        ],
                                                    }),
                                                },
                                                e.artist.id,
                                            ),
                                        ),
                            }),
                        ],
                    });
                },
                tB = (0, l.forwardRef)((e, t) => (0, o.jsx)(tD, { forwardRef: t, ...e }));
            var tV = i(22139),
                tU = i.n(tV);
            let tW = (e) => {
                    let { title: t, description: i, viewAllActionLink: a, headerClassName: s, containerClassName: r, headingVariant: l } = e,
                        { formatMessage: n } = (0, _.A)();
                    return (0, o.jsxs)('div', {
                        className: tU().root,
                        'data-test-id': p.e8.landing.COLLECTION_CLIPS,
                        children: [
                            (0, o.jsx)(U.T, {
                                className: s,
                                title: t,
                                description: i,
                                viewAllActionLink: a,
                                'aria-label': n({ id: 'error-messages.empty-collection-clips-title' }),
                                headingVariant: l,
                                withDescription: !!i,
                            }),
                            (0, o.jsx)(x.HL, {
                                className: (0, d.$)(tU().text, r),
                                variant: 'div',
                                size: 'l',
                                weight: 'normal',
                                'data-test-id': p.e8.landing.COLLECTION_CLIPS_BLOCK_LIKED_EMPTY_BLOCK_TITLE,
                                children: (0, o.jsx)(u.A, { id: 'error-messages.empty-collection-clips-title' }),
                            }),
                        ],
                    });
                },
                tz = (e) => {
                    let { forwardRef: t, containerClassName: i, headerClassName: a, meta: s, data: r, headingVariant: l, ...n } = e;
                    return (null == r ? void 0 : r.isEmptyBlock)
                        ? (0, o.jsx)(tW, {
                              title: s.title,
                              description: s.description,
                              viewAllActionLink: s.viewAllActionLink,
                              containerClassName: i,
                              headerClassName: a,
                              headingVariant: l,
                          })
                        : (0, o.jsx)(eJ, { ref: t, meta: s, data: r, containerClassName: i, headerClassName: a, headingVariant: l, ...n });
                },
                tH = (0, l.forwardRef)((e, t) => (0, o.jsx)(tz, { forwardRef: t, ...e }));
            var tK = i(83460),
                tY = i(44277);
            let tF = (0, m.PA)((e) => {
                    let {
                            forwardRef: t,
                            isShimmerVisible: i,
                            isShimmerActive: a,
                            containerClassName: s,
                            headerClassName: r,
                            meta: d,
                            data: m,
                            headingVariant: _,
                            className: u,
                            ...p
                        } = e,
                        b = (0, l.useMemo)(() => {
                            let e =
                                null == m
                                    ? void 0
                                    : m.items.map((e, t) =>
                                          (0, o.jsx)(
                                              c.B,
                                              {
                                                  objectType: n.DomainObjectType.Playlist,
                                                  objectId: e.id,
                                                  objectPosX: t + 1,
                                                  objectPosY: 1,
                                                  objectsCount: m.items.length,
                                                  children: (0, o.jsx)(tK.B, { playlist: e, contentLinesCount: 3 }),
                                              },
                                              e.key,
                                          ),
                                      );
                            return (null == e || e.unshift((0, o.jsx)(tY.B, {}, 'create-playlist-card')), e);
                        }, [null == m ? void 0 : m.items]);
                    return (0, o.jsx)(e0.O, {
                        className: u,
                        ...p,
                        isShimmerVisible: i,
                        isShimmerActive: a,
                        containerClassName: s,
                        headerClassName: r,
                        title: d.title,
                        description: d.description,
                        viewAllActionLink: d.viewAllActionLink,
                        ref: t,
                        headingVariant: _,
                        children: b,
                    });
                }),
                t$ = (0, l.forwardRef)((e, t) => (0, o.jsx)(tF, { forwardRef: t, ...e })),
                tX = (0, m.PA)((e) => {
                    let {
                            forwardRef: t,
                            isShimmerVisible: i,
                            isShimmerActive: a,
                            tracksContainerClassName: s,
                            headerClassName: l,
                            className: d,
                            meta: m,
                            data: u,
                            headingVariant: v,
                            ...h
                        } = e,
                        { from: x } = (0, S.f)(),
                        { formatMessage: C } = (0, _.A)(),
                        A = Array.isArray(null == u ? void 0 : u.rawTracks)
                            ? C({ id: 'entity-names.number-of-tracks' }, { counter: null == u ? void 0 : u.rawTracks.length })
                            : m.description;
                    return (0, o.jsx)(ek.$, {
                        className: d,
                        shimmer: (0, o.jsx)(eE.D, { variant: eR.X.PLAYLIST, isActive: a }),
                        'data-test-id': p.e8.landing.COLLECTION_DOWNLOADED_TRACKS,
                        maxColumnsCount: ek.D.TWO,
                        itemsCountPerColumn: 4,
                        isShimmerVisible: i,
                        isShimmerActive: a,
                        blockHeaderClassName: l,
                        carouselClassName: s,
                        blockHeaderTitle: m.title,
                        viewAllActionLink: m.viewAllActionLink,
                        blockHeaderDescription: A,
                        ref: t,
                        blockHeaderHeadingVariant: v,
                        withBlockHeaderDescription: !0,
                        ...h,
                        children:
                            null == u
                                ? void 0
                                : u.items.map((e, t) => {
                                      let i,
                                          { objectPosX: a, objectPosY: s, objectsCount: l } = (0, eC.$)({ index: t, count: u.items.length });
                                      return (0, o.jsx)(
                                          c.B,
                                          {
                                              objectType: n.DomainObjectType.Track,
                                              objectId: e.id,
                                              objectPosX: a,
                                              objectPosY: s,
                                              objectsCount: l,
                                              children: (0, o.jsx)(ey.K, {
                                                  track: e,
                                                  playContextParams:
                                                      ((i = e.id),
                                                      {
                                                          contextData: { type: b.K.Various, meta: { id: r.t.COLLECTION_DOWNLOADED_TRACKS }, from: x },
                                                          entitiesData: null == u ? void 0 : u.entitiesData,
                                                          queueParams: { index: t, entityId: i },
                                                          loadContextMeta: !1,
                                                      }),
                                              }),
                                          },
                                          e.id,
                                      );
                                  }),
                    });
                }),
                tG = (0, l.forwardRef)((e, t) => (0, o.jsx)(tX, { forwardRef: t, ...e }));
            var tQ = i(61113);
            let tq = (e) => {
                    let {
                        forwardRef: t,
                        isShimmerVisible: i,
                        isShimmerActive: a,
                        containerClassName: s,
                        headerClassName: r,
                        meta: l,
                        data: d,
                        headingVariant: m,
                        className: _,
                        ...u
                    } = e;
                    return (0, o.jsx)(e0.O, {
                        className: _,
                        ...u,
                        isShimmerVisible: i,
                        isShimmerActive: a,
                        containerClassName: s,
                        headerClassName: r,
                        title: l.title,
                        description: l.description,
                        viewAllActionLink: l.viewAllActionLink,
                        ref: t,
                        headingVariant: m,
                        children:
                            null == d
                                ? void 0
                                : d.items.map((e, t) => {
                                      switch (e.type) {
                                          case e8._.TRACK_ITEM:
                                              return (0, o.jsx)(
                                                  c.B,
                                                  {
                                                      objectType: n.DomainObjectType.Track,
                                                      objectId: String(e.data.id),
                                                      objectPosX: t + 1,
                                                      objectPosY: 1,
                                                      objectsCount: d.items.length,
                                                      children: (0, o.jsx)(tQ.w, { track: e.data, contentLinesCount: 3 }, e.data.getKey('track')),
                                                  },
                                                  e.data.id,
                                              );
                                          case e8._.LIKED_PLAYLIST_ITEM:
                                              return (0, o.jsx)(
                                                  c.B,
                                                  {
                                                      objectType: n.DomainObjectType.Playlist,
                                                      objectId: e.data.id,
                                                      objectPosX: t + 1,
                                                      objectPosY: 1,
                                                      objectsCount: d.items.length,
                                                      children: (0, o.jsx)(tK.B, { playlist: e.data, contentLinesCount: 3 }, e.data.getKey('playlist')),
                                                  },
                                                  e.data.key,
                                              );
                                          case e8._.NON_MUSIC_ALBUM_ITEM:
                                              return (0, o.jsx)(
                                                  c.B,
                                                  {
                                                      objectType: n.DomainObjectType.Album,
                                                      objectId: String(e.data.id),
                                                      objectPosX: t + 1,
                                                      objectPosY: 1,
                                                      objectsCount: d.items.length,
                                                      children: (0, o.jsx)(eB.a, { album: e.data, contentLinesCount: 3 }, e.data.getKey('album')),
                                                  },
                                                  e.data.id,
                                              );
                                      }
                                  }),
                    });
                },
                tZ = (0, l.forwardRef)((e, t) => (0, o.jsx)(tq, { forwardRef: t, ...e })),
                tJ = (e) => {
                    let {
                        forwardRef: t,
                        isShimmerVisible: i,
                        isShimmerActive: a,
                        containerClassName: s,
                        headerClassName: r,
                        meta: l,
                        data: d,
                        headingVariant: m,
                        className: _,
                        ...u
                    } = e;
                    return (0, o.jsx)(e0.O, {
                        className: _,
                        ...u,
                        isShimmerVisible: i,
                        isShimmerActive: a,
                        headerClassName: r,
                        containerClassName: s,
                        title: l.title,
                        description: l.description,
                        viewAllActionLink: l.viewAllActionLink,
                        ref: t,
                        headingVariant: m,
                        children:
                            null == d
                                ? void 0
                                : d.items.map((e, t) =>
                                      (0, o.jsx)(
                                          c.B,
                                          {
                                              objectType: n.DomainObjectType.Playlist,
                                              objectId: e.id,
                                              objectPosX: t + 1,
                                              objectPosY: 1,
                                              objectsCount: d.items.length,
                                              children: (0, o.jsx)(tK.B, { playlist: e, contentLinesCount: 3 }),
                                          },
                                          e.key,
                                      ),
                                  ),
                    });
                },
                t0 = (0, l.forwardRef)((e, t) => (0, o.jsx)(tJ, { forwardRef: t, ...e }));
            var t1 = i(37184),
                t2 = i(35629),
                t3 = i.n(t2),
                t9 = i(18459),
                t4 = i.n(t9);
            let t8 = (e) => {
                    let { className: t } = e;
                    return (0, o.jsx)('div', {
                        className: (0, d.$)(t4().root, t),
                        'data-test-id': p.e8.landing.COLLECTION_PLAYLISTS_BLOCK_LIKED_EMPTY_BLOCK_TEXT,
                        children: (0, o.jsx)(u.A, { id: 'error-messages.empty-collection-liked-playlists' }),
                    });
                },
                t7 = (0, m.PA)((e) => {
                    let {
                            forwardRef: t,
                            isShimmerVisible: i,
                            isShimmerActive: a,
                            containerClassName: s,
                            headerClassName: r,
                            meta: m,
                            data: _,
                            headingVariant: u,
                            className: p,
                            ...b
                        } = e,
                        { objectsCount: v } = (0, e6.N)(),
                        h = (0, l.useId)(),
                        x = (0, l.useRef)(null),
                        C = (0, l.useId)(),
                        A = ''.concat(h, ' ').concat(h, '-description'),
                        j = (0, e7.zb)((null == _ ? void 0 : _.activeIndexTab) || 0),
                        T = (0, l.useMemo)(() => {
                            var e, t;
                            return (
                                (null == _ || null == (e = _.tabs[j.value]) ? void 0 : e.type) !== t1.l.PLAYLIST_CREATED_TAB &&
                                (null == _ || null == (t = _.tabs[j.value]) ? void 0 : t.items.length) === 0
                            );
                        }, [null == _ ? void 0 : _.tabs, j.value]),
                        N = (0, l.useCallback)(
                            (e) => {
                                if (e.isEmptyTab && e.type !== t1.l.PLAYLIST_CREATED_TAB)
                                    return (0, o.jsxs)(o.Fragment, {
                                        children: [
                                            (0, o.jsx)(V.F, {
                                                className: (0, d.$)(t3().carouselEmpty, s),
                                                itemClassName: (0, d.$)(t3().item, t3().important),
                                                tabIndex: -1,
                                                children: (0, e5.k)({ isActive: !1, withInfo: !0, linesCount: 4 }),
                                            }),
                                            (0, o.jsx)(t8, {}),
                                        ],
                                    });
                                let t = e.items.map((t, i) =>
                                    (0, o.jsx)(
                                        c.B,
                                        {
                                            objectType: n.DomainObjectType.Playlist,
                                            objectId: String(t.id),
                                            objectPosX: i + 1,
                                            objectPosY: 1,
                                            objectsCount: e.items.length,
                                            children: (0, o.jsx)(tK.B, { contentLinesCount: 4, playlist: t }),
                                        },
                                        t.id,
                                    ),
                                );
                                return (
                                    e.type === t1.l.PLAYLIST_CREATED_TAB && t.unshift((0, o.jsx)(tY.B, { className: t3().createPlaylistCard }, 'create-playlist-card')),
                                    (0, o.jsx)(V.F, { ref: x, itemClassName: (0, d.$)(t3().item, t3().important), className: s, 'aria-labelledby': A, children: t })
                                );
                            },
                            [A, s],
                        ),
                        I = (0, l.useMemo)(
                            () =>
                                i
                                    ? (0, o.jsx)(V.F, {
                                          ref: x,
                                          itemClassName: (0, d.$)(t3().item, t3().important),
                                          className: s,
                                          'aria-labelledby': A,
                                          children: (0, e5.k)({ isActive: a, withInfo: !0, linesCount: 4 }),
                                      })
                                    : null == _
                                      ? void 0
                                      : _.tabs.map((e, t) =>
                                            (0, o.jsx)(e7.Kp, { name: t, value: j.value, elementId: C, className: t3().tabPanel, children: N(e) }, e.id),
                                        ),
                            [i, null == _ ? void 0 : _.tabs, s, A, a, j.value, C, N],
                        );
                    return (0, o.jsxs)('section', {
                        className: (0, d.$)(t3().root, p, { [t3().root_withControls]: !T }),
                        ref: t,
                        ...(0, B.getDataAttrFromProps)(b),
                        children: [
                            (0, o.jsx)(c.B, {
                                objectType: n.DomainObjectType.Shortcut,
                                objectId: String(m.viewAllActionLink),
                                objectPosX: 0,
                                objectPosY: 0,
                                objectsCount: null != v ? v : 0,
                                children: (0, o.jsx)(U.T, {
                                    className: (0, d.$)(r, t3().header, t3().important),
                                    title: m.title,
                                    description: m.description,
                                    labeledForId: h,
                                    viewAllActionLink: m.viewAllActionLink,
                                    controls: (0, o.jsx)(W.X, { className: t3().controls, carouselRef: x }),
                                    headingVariant: u,
                                    withDescription: !!m.description,
                                }),
                            }),
                            (0, o.jsx)(tt.wI, {
                                isShimmerVisible: i,
                                className: (0, d.$)(s, t3().tabCarousel, t3().important),
                                elementId: C,
                                shimmer: (0, o.jsx)(tt.zr, { isActive: a, className: (0, d.$)(s, t3().tabCarousel, t3().important), shimmerClassName: t3().tabShimmer }),
                                'aria-labelledby': h,
                                ...j,
                                children:
                                    null == _
                                        ? void 0
                                        : _.tabs.map((e, t) =>
                                              (0, o.jsx)(te.o, { value: t, 'aria-label': e.title, title: e.title, className: (0, d.$)(t3().tab, t3().important) }, e.id),
                                          ),
                            }),
                            I,
                        ],
                    });
                }),
                t6 = (0, l.forwardRef)((e, t) => (0, o.jsx)(t7, { forwardRef: t, ...e }));
            var t5 = i(13365),
                ie = i(82586),
                it = i(82219),
                ii = i(86384),
                ia = i.n(ii);
            let is = { [t5._.UP]: 'chartUp', [t5._.DOWN]: 'chartDown', [t5._.SAME]: 'chartSame', [t5._.NEW]: 'chartNew' },
                ir = (0, m.PA)((e) => {
                    let { artist: t, position: i, progress: a, listenTimeSeconds: s, className: r } = e,
                        { formatMessage: l } = (0, _.A)(),
                        n = (0, it.U)(s, l),
                        c = a ? is[a] : null,
                        m = c
                            ? (0, o.jsx)(ie.I, { variant: c, size: 'xxs', className: (0, d.$)(ia().progressIcon, ia()['progressIcon_'.concat(a)]), 'aria-hidden': !0 })
                            : null,
                        u = (0, eD.L)(() =>
                            void 0 !== i
                                ? (0, o.jsxs)('div', {
                                      className: ia().positionIndicator,
                                      children: [
                                          (0, o.jsx)(x.HL, { variant: 'span', type: 'entity', size: 'm', weight: 'bold', children: i }),
                                          1 === i && (0, o.jsx)(ie.I, { variant: 'crown', size: 'xxs', className: ia().crownIcon, 'aria-hidden': 'true' }),
                                          1 !== i && m,
                                      ],
                                  })
                                : void 0,
                        ),
                        p = (0, eD.L)(() => (0, o.jsx)(x.HL, { variant: 'div', type: 'controls', size: 's', weight: 'medium', className: ia().listenTime, children: n }));
                    return (0, o.jsx)(td.a, { artist: t, className: r, topTitleElement: u, bottomTitleElement: p, contentLinesCount: 3 });
                }),
                io = (0, m.PA)((e) => {
                    let {
                        forwardRef: t,
                        isShimmerVisible: i,
                        isShimmerActive: a,
                        containerClassName: s,
                        headerClassName: r,
                        className: l,
                        meta: d,
                        data: m,
                        headingVariant: _,
                        ...u
                    } = e;
                    return i || (null == m ? void 0 : m.items.length)
                        ? (0, o.jsx)(e0.O, {
                              ...u,
                              className: l,
                              isShimmerVisible: i,
                              isShimmerActive: a,
                              isShimmerCentered: !0,
                              isShimmerRounded: !0,
                              containerClassName: s,
                              headerClassName: r,
                              title: d.title,
                              description: d.description,
                              viewAllActionLink: d.viewAllActionLink,
                              ref: t,
                              headingVariant: _,
                              children:
                                  null == m
                                      ? void 0
                                      : m.items.map((e, t) => {
                                            var i, a;
                                            return (0, o.jsx)(
                                                c.B,
                                                {
                                                    objectType: n.DomainObjectType.Artist,
                                                    objectId: e.artist.id,
                                                    objectPosX: t + 1,
                                                    objectPosY: 1,
                                                    objectsCount: m.items.length,
                                                    children: (0, o.jsx)(ir, {
                                                        artist: e.artist,
                                                        position: null == (i = e.top) ? void 0 : i.position,
                                                        progress: null == (a = e.top) ? void 0 : a.progress,
                                                        listenTimeSeconds: e.listenTimeSeconds,
                                                    }),
                                                },
                                                e.artist.id,
                                            );
                                        }),
                          })
                        : (0, o.jsx)(tu, {
                              title: d.title,
                              description: d.description,
                              viewAllActionLink: d.viewAllActionLink,
                              containerClassName: s,
                              headerClassName: r,
                          });
                }),
                il = (0, l.forwardRef)((e, t) => (0, o.jsx)(io, { forwardRef: t, ...e }));
            var ic = i(85305),
                id = i(37240),
                im = i(41009),
                i_ = i.n(im);
            let iu = (0, m.PA)((e) => {
                    var t;
                    let { containerClassName: i, meta: a, data: s, forwardRef: r, isShimmerVisible: n, isShimmerActive: c, headingVariant: m = 'h2', ..._ } = e,
                        {
                            settings: { isMobile: p },
                            freeAccess: b,
                        } = (0, R.g)(),
                        { pageId: v } = (0, id.$)(),
                        { blockIdForFrom: h } = (0, e6.N)(),
                        [C, A] = (0, l.useState)(!1),
                        { isPlaying: j, togglePlay: T } = (0, tj.B)({
                            seeds: null != (t = null == s ? void 0 : s.vibe.seeds) ? t : [],
                            pageIdForFrom: v,
                            blockIdForFrom: h,
                        }),
                        I = (0, N.b)(),
                        S = (0, l.useCallback)(() => {
                            b.isVibeStartRestricted || (T(), I(!j));
                        }, [b.isVibeStartRestricted, T, I, j]),
                        f = (0, l.useCallback)(
                            () =>
                                (0, o.jsx)(w.D, {
                                    withRipple: !0,
                                    buttonVariant: 'default',
                                    radius: 'xxxl',
                                    size: 's',
                                    color: 'primary',
                                    iconSize: 'xxs',
                                    isPlaying: j,
                                    onClick: S,
                                    className: i_().playButton,
                                    children: (0, o.jsx)(u.A, { id: 'player-actions.listen' }),
                                }),
                            [S, j],
                        ),
                        L = (0, eD.L)(() =>
                            (0, o.jsx)(tT.S, {
                                isEnabled: b.isVibeStartRestricted,
                                isOpened: C,
                                onOpenChange: A,
                                placement: 'top',
                                textVariant: 'vibe',
                                vibeTextVariant: null == s ? void 0 : s.vibe.stationType,
                                renderChildren: f,
                            }),
                        ),
                        g = (0, eD.L)(() =>
                            n || !s
                                ? (0, o.jsxs)('div', {
                                      className: i_().root,
                                      children: [
                                          (0, o.jsxs)('div', {
                                              className: i_().shimmerContainer,
                                              children: [
                                                  (0, o.jsx)(tR.W, { isActive: c, radius: 'xs', className: (0, d.$)(i_().coverShimmer, i_().item, i_().important) }),
                                                  p && (0, o.jsx)(tR.W, { radius: 'l', isActive: c, width: 150, height: 24 }),
                                              ],
                                          }),
                                          !p &&
                                              (0, o.jsxs)('div', {
                                                  className: i_().container,
                                                  children: [
                                                      (0, o.jsx)(tR.W, { radius: 'l', isActive: c, width: 300, height: 32 }),
                                                      (0, o.jsx)(tR.W, { radius: 'xxxl', isActive: c, width: 124, height: 48 }),
                                                  ],
                                              }),
                                      ],
                                  })
                                : (0, o.jsxs)('div', {
                                      className: i_().root,
                                      children: [
                                          (0, o.jsx)(ic.y, {
                                              vibe: s.vibe,
                                              shouldShowPlayButton: !1,
                                              className: (0, d.$)(i_().item, i_().important),
                                              shouldShowAdditionals: p,
                                              additionalsLinesCount: 1,
                                          }),
                                          !p &&
                                              (0, o.jsxs)('div', {
                                                  className: i_().container,
                                                  children: [
                                                      (0, o.jsx)(x.DZ, {
                                                          weight: 'bold',
                                                          size: 'm',
                                                          className: i_().text,
                                                          lineClamp: 2,
                                                          variant: m,
                                                          children: null == s ? void 0 : s.vibe.description,
                                                      }),
                                                      L,
                                                  ],
                                              }),
                                      ],
                                  }),
                        );
                    return (0, o.jsx)('section', { ref: r, title: a.title, className: i, ...(0, B.getDataAttrFromProps)(_), children: g });
                }),
                ip = (0, l.forwardRef)((e, t) => (0, o.jsx)(iu, { forwardRef: t, ...e }));
            var ib = i(42530),
                iv = i(9724),
                ih = i(20472),
                ix = i(4772),
                iC = i(76);
            let iA = (0, m.PA)((e) => {
                let { room: t, onRoomSuccessExit: i } = e,
                    a = (0, v.c)(() => {
                        i(t.id);
                    });
                return (0, o.jsx)(iC.E, { room: t, contentLinesCount: 3, onRoomSuccessExit: a });
            });
            var ij = i(27521),
                iT = i.n(ij);
            let iN = (0, m.PA)((e) => {
                    let {
                            forwardRef: t,
                            isShimmerVisible: i,
                            isShimmerActive: a,
                            containerClassName: s,
                            headerClassName: r,
                            meta: d,
                            data: m,
                            headingVariant: _,
                            className: u,
                            ...b
                        } = e,
                        { multivibe: h } = (0, R.g)(),
                        [x, C] = (0, l.useState)([]);
                    (0, l.useEffect)(() => {
                        var e;
                        C((null == m || null == (e = m.items) ? void 0 : e.length) ? (null == m ? void 0 : m.items) : []);
                    }, [null == m ? void 0 : m.items]);
                    let A = (0, v.c)((e) => {
                            C((t) => t.filter((t) => t.id !== e));
                        }),
                        j = x.length,
                        T = (0, eD.L)(() => {
                            let e = x.map((e, t) => {
                                var i, a;
                                return (0, o.jsx)(
                                    c.B,
                                    {
                                        objectType: n.DomainObjectType.Wave,
                                        objectId: null != (a = null == (i = e.wave) ? void 0 : i.seedsId) ? a : '',
                                        objectPosX: t + 1,
                                        objectPosY: 1,
                                        objectsCount: j,
                                        children: (0, o.jsx)(iA, { room: e, onRoomSuccessExit: A }, e.id),
                                    },
                                    e.id,
                                );
                            });
                            return [
                                (0, o.jsx)(c.B, {
                                    objectType: n.DomainObjectType.Shortcut,
                                    objectId: '',
                                    objectPosX: 0,
                                    objectPosY: 1,
                                    objectsCount: j,
                                    children: (0, o.jsx)(iv.f, {}, 'create-vibe-room-button'),
                                }),
                                ...e,
                            ];
                        }),
                        N = (0, eD.L)(() => Array.from({ length: 9 }, (e, t) => (0, o.jsx)(ix.P, { isActive: a }, t))),
                        I = (0, eD.L)(() => (h.isNDAEnabled ? (0, o.jsx)(ib.b, { className: iT().multivibeNDA }) : null));
                    return (0, o.jsx)(e0.O, {
                        className: u,
                        ...b,
                        isShimmerVisible: i,
                        isShimmerActive: a,
                        showShimmerInfo: !1,
                        containerClassName: s,
                        headerClassName: r,
                        title: d.title,
                        description: d.description,
                        viewAllActionLink: d.viewAllActionLink || ih.Z.collectionVibeRooms.href,
                        ref: t,
                        headingVariant: _,
                        customShimmer: N,
                        titleChildren: I,
                        'data-test-id': p.e8.landing.COLLECTION_WAVE_ROOMS,
                        children: T,
                    });
                }),
                iI = (0, l.forwardRef)((e, t) => {
                    let {
                        collection: { vibeRooms: i },
                        user: a,
                    } = (0, R.g)();
                    return i.isEnabled && a.hasPlus ? (0, o.jsx)(iN, { forwardRef: t, ...e, containerClassName: iT().root }) : null;
                });
            var iS = i(50),
                iL = i(68243),
                ig = i(26689),
                iy = i.n(ig),
                iR = i(89616),
                ik = i.n(iR);
            let iE = (0, m.PA)((e) => {
                    let { title: t, colors: i } = e;
                    return (0, o.jsxs)(x.HL, {
                        size: 'm',
                        variant: 'span',
                        className: ik().station,
                        children: [
                            (0, o.jsx)('div', {
                                className: ik().stationColors,
                                children: i.map((e, t) => (0, o.jsx)('span', { className: ik().colorSpan, style: { '--metro-station-color-line': e } }, t)),
                            }),
                            t,
                        ],
                    });
                }),
                iP = (0, m.PA)((e) => {
                    var t, i, a;
                    let { data: s } = e,
                        { place: r, city: c, address: d, map: m } = s,
                        u = (() => {
                            let { theme: e } = (0, iS.W)();
                            return (0, l.useCallback)(
                                (t) => {
                                    let i = (0, B.httpsReplacer)(t.replace('%%', '1300,1000')),
                                        { href: a } = (0, iL.u)(i, { query: { theme: null != e ? e : '' } });
                                    return a;
                                },
                                [e],
                            );
                        })(),
                        { formatMessage: p } = (0, _.A)(),
                        { href: b, target: h } = ((e) => {
                            let { theme: t } = (0, iS.W)();
                            return (0, iL.u)(null != e ? e : '', { query: { theme: null != t ? t : '' }, options: { isExternalLink: !0 } });
                        })(null != (a = null == s || null == (t = s.map) ? void 0 : t.url) ? a : ''),
                        C = (0, T.N)(),
                        { ref: A, intersectionPropertyId: j } = (0, I.n)(),
                        N = (0, v.c)(() => {
                            C({ to: n.AppScreen.Link, deepLink: b });
                        });
                    return (0, o.jsxs)('div', {
                        ref: A,
                        'data-intersection-property-id': j,
                        className: iy().root,
                        children: [
                            (0, o.jsx)(x.DZ, { size: 'm', variant: 'h3', className: iy().heading, children: r }),
                            (0, o.jsx)(P.N, {
                                onClick: N,
                                'aria-label': p({ id: 'entity-names.map-url' }),
                                href: b,
                                className: iy().linkContainer,
                                target: h,
                                children: (0, o.jsx)(th._V, {
                                    createUrlReplacer: u,
                                    className: iy().mapImage,
                                    alt: r,
                                    fit: 'cover',
                                    size: 600,
                                    src: null == m ? void 0 : m.imageUrl,
                                    withAvatarReplace: !0,
                                }),
                            }),
                            (0, o.jsxs)('div', {
                                className: iy().addressContainer,
                                children: [
                                    (0, o.jsx)(x.HL, { variant: 'span', size: 'm', weight: 'medium', className: iy().address, children: ''.concat(c, ', ').concat(d) }),
                                    (0, o.jsx)('div', {
                                        'aria-label': p({ id: 'entity-names.metro-stations' }),
                                        className: iy().metroStations,
                                        children:
                                            null == (i = s.groupedMetroStations) ? void 0 : i.map((e, t) => (0, o.jsx)(iE, { title: e.title, colors: e.colors }, t)),
                                    }),
                                ],
                            }),
                        ],
                    });
                });
            var iw = i(71583),
                iO = i.n(iw);
            let iM = (0, m.PA)((e) => {
                    let { isActive: t } = e;
                    return (0, o.jsxs)('div', {
                        className: iO().root,
                        children: [
                            (0, o.jsx)(tR.W, { className: iO().heading, radius: 's', isActive: t }),
                            (0, o.jsx)(tR.W, { className: iO().mapImage, radius: 's', isActive: t }),
                            (0, o.jsx)(tR.W, { className: iO().address, radius: 's', isActive: t }),
                            (0, o.jsx)(tR.W, { className: iO().metroStations, radius: 's', isActive: t }),
                        ],
                    });
                }),
                iD = (0, m.PA)((e) => {
                    var t, i;
                    let { forwardRef: a, containerClassName: s, isShimmerVisible: r, isShimmerActive: l, id: d, data: m, ..._ } = e,
                        { concert: u } = (0, R.g)(),
                        p = null != (i = null == (t = u.meta) ? void 0 : t.id) ? i : '',
                        b = (0, eD.L)(() => (r ? (0, o.jsx)(iM, { isActive: l }) : m ? (0, o.jsx)(iP, { data: m }) : void 0));
                    return (0, o.jsx)('section', {
                        ref: a,
                        className: s,
                        ...(0, B.getDataAttrFromProps)(_),
                        children: (0, o.jsx)(c.B, { objectId: p, objectType: n.DomainObjectType.Concert, objectPosX: 1, objectPosY: 1, objectsCount: 1, children: b }, d),
                    });
                }),
                iB = (0, l.forwardRef)((e, t) => (0, o.jsx)(iD, { forwardRef: t, ...e }));
            var iV = i(53109),
                iU = i(88404),
                iW = i(70608);
            let iz = (e) => {
                let { filterKey: t, filterValue: i, filterPos: a, children: s } = e,
                    r = (0, l.useMemo)(() => ({ filterKey: t, filterValue: i, filterPos: a }), [t, i, a]);
                return (0, o.jsx)(iW.S.Provider, { value: r, children: s });
            };
            var iH = i(12578),
                iK = i(98066),
                iY = i(62980),
                iF = i(30436),
                i$ = i(86562),
                iX = i(61371),
                iG = i.n(iX);
            let iQ = (e) => {
                let { concert: t } = e,
                    {
                        title: i,
                        datetime: a,
                        city: s,
                        place: r,
                        contentRating: c,
                        cover: m,
                        dataSessionId: u,
                        rank: p,
                        isCashbackExperimentEnabled: b,
                        isIdentityExperimentEnabled: C,
                        cashbackTitle: A,
                        cashbackValuePercent: j,
                    } = t,
                    { formatDate: N } = (0, _.A)(),
                    { ref: S, intersectionPropertyId: f } = (0, I.n)(),
                    L = (0, T.N)(),
                    { state: y, toggleTrue: k, toggleFalse: E } = (0, tv.e)(!1),
                    { experiments: P } = (0, R.g)(),
                    { href: w } = (0, iL.u)('/concert/:concertId', { params: { concertId: t.id } }),
                    O = (0, g.Z)(w),
                    M = P.checkExperiment(eA.z.WebNextConcertPage, 'on'),
                    D = (0, l.useMemo)(() => {
                        let e = b && !!A;
                        if ((C && j) || e)
                            return (0, o.jsxs)(o.Fragment, {
                                children: [
                                    (0, o.jsx)(eN.q, { children: N(a, (0, iF.f)()) }),
                                    (0, o.jsxs)(x.HL, {
                                        variant: 'span',
                                        type: 'text',
                                        size: 'm',
                                        weight: 'medium',
                                        className: iG().descriptionContainer,
                                        children: [
                                            (0, o.jsx)(x.HL, {
                                                variant: 'span',
                                                type: 'text',
                                                size: 'm',
                                                weight: 'medium',
                                                lineClamp: 1,
                                                className: iG().description,
                                                children: r,
                                            }),
                                            (0, o.jsx)(x.HL, {
                                                variant: 'span',
                                                type: 'text',
                                                size: 'm',
                                                weight: 'medium',
                                                className: iG().description,
                                                'aria-hidden': !0,
                                                children: ' • ',
                                            }),
                                            c &&
                                                (0, o.jsx)(x.HL, {
                                                    variant: 'span',
                                                    type: 'text',
                                                    size: 'm',
                                                    weight: 'medium',
                                                    className: iG().description,
                                                    children: c,
                                                }),
                                        ],
                                    }),
                                    (0, o.jsx)(iK.m, { className: iG().cashback, title: A, valuePercent: j }),
                                ],
                            });
                        let t = [];
                        return (
                            a && t.push(N(a, (0, iF.f)())),
                            c && t.push(c),
                            (0, o.jsxs)(o.Fragment, {
                                children: [
                                    (0, o.jsx)(x.HL, {
                                        variant: 'span',
                                        type: 'text',
                                        size: 'm',
                                        weight: 'medium',
                                        lineClamp: 1,
                                        className: iG().description,
                                        children: r,
                                    }),
                                    (0, o.jsxs)(eN.q, { children: [N(a, (0, iF.f)()), ' ', c] }),
                                    (0, o.jsx)(x.HL, {
                                        variant: 'span',
                                        type: 'text',
                                        size: 'm',
                                        weight: 'medium',
                                        lineClamp: 1,
                                        className: iG().description,
                                        'aria-hidden': !0,
                                        children: t.join(' • '),
                                    }),
                                ],
                            })
                        );
                    }, [A, j, c, a, N, b, C, r]),
                    V = (0, l.useCallback)(
                        (e) => {
                            (L({ to: n.AppScreen.ConcertPurchaseScreen }), k(), null == e || e.stopPropagation());
                        },
                        [k, L],
                    ),
                    U = (0, v.c)((e) => {
                        if (!M) {
                            (V(e), L({ to: n.AppScreen.ConcertScreen }));
                            return;
                        }
                        O(e);
                    }),
                    W = (0, l.useCallback)(
                        (e) => {
                            (e.code === i$.v.SPACE || e.code === i$.v.ENTER) && (e.preventDefault(), U());
                        },
                        [U],
                    );
                return (0, o.jsxs)(o.Fragment, {
                    children: [
                        (0, o.jsxs)(h.t, {
                            className: iG().root,
                            style: ((e) => {
                                let t;
                                if (e) {
                                    let { h: i, s: a, l: s } = (0, B.hexToHsl)(e);
                                    t = 'linear-gradient(\n            180deg, \n            transparent 0%, \n            hsla('
                                        .concat(i, 'deg, ')
                                        .concat(a, '%, ')
                                        .concat(s, '%, 0) 40%, \n            hsla(')
                                        .concat(i, 'deg, ')
                                        .concat(a, '%, ')
                                        .concat(s, '%, 0.1) 43%,\n            hsla(')
                                        .concat(i, 'deg, ')
                                        .concat(a, '%, ')
                                        .concat(s, '%, 0.2) 46%,\n            hsla(')
                                        .concat(i, 'deg, ')
                                        .concat(a, '%, ')
                                        .concat(s, '%, 0.3) 49%,\n            hsla(')
                                        .concat(i, 'deg, ')
                                        .concat(a, '%, ')
                                        .concat(s, '%, 0.4) 52%,\n            hsla(')
                                        .concat(i, 'deg, ')
                                        .concat(a, '%, ')
                                        .concat(s, '%, 0.5) 55%,\n            hsla(')
                                        .concat(i, 'deg, ')
                                        .concat(a, '%, ')
                                        .concat(s, '%, 0.6) 58%,\n            hsla(')
                                        .concat(i, 'deg, ')
                                        .concat(a, '%, ')
                                        .concat(s, '%, 0.7) 61%,\n            hsla(')
                                        .concat(i, 'deg, ')
                                        .concat(a, '%, ')
                                        .concat(s, '%, 0.8) 64%,\n            hsla(')
                                        .concat(i, 'deg, ')
                                        .concat(a, '%, ')
                                        .concat(s, '%, 0.9) 67%, \n            hsla(')
                                        .concat(i, 'deg, ')
                                        .concat(a, '%, ')
                                        .concat(s, '%, 1) 70%, \n            hsla(')
                                        .concat(i, 'deg, ')
                                        .concat(a, '%, ')
                                        .concat(s, '%, 1) 100%\n        )');
                                }
                                return { '--concert-card-linear-gradient': t };
                            })(null == m ? void 0 : m.color),
                            radius: 'l',
                            role: 'button',
                            tabIndex: 0,
                            onClick: U,
                            onKeyDown: W,
                            ref: S,
                            'data-intersection-property-id': f,
                            children: [
                                (0, o.jsx)(th._V, {
                                    className: iG().cover,
                                    src: null == m ? void 0 : m.uri,
                                    size: 400,
                                    fit: 'cover',
                                    withAvatarReplace: !0,
                                    withLoadingIndicator: !1,
                                }),
                                void 0 !== p &&
                                    (0, o.jsx)(x.HL, {
                                        variant: 'span',
                                        size: 'l',
                                        weight: 'bold',
                                        className: (0, d.$)(iG().index, iG().title),
                                        'aria-hidden': !0,
                                        children: p,
                                    }),
                                (0, o.jsxs)('div', {
                                    className: iG().meta,
                                    children: [
                                        (0, o.jsx)(x.DZ, {
                                            variant: 'h3',
                                            size: 'xs',
                                            weight: 'bold',
                                            lineClamp: 3,
                                            className: (0, d.$)(iG().title, iG().concertTitle),
                                            children: i,
                                        }),
                                        (0, o.jsxs)('div', {
                                            className: iG().textContainer,
                                            children: [
                                                a &&
                                                    (0, o.jsx)(iY.d, {
                                                        datetime: a,
                                                        className: iG().date,
                                                        monthClassName: iG().description,
                                                        dayClassName: iG().title,
                                                        withWeekday: !1,
                                                    }),
                                                (0, o.jsxs)('div', {
                                                    className: iG().info,
                                                    children: [
                                                        (0, o.jsx)(x.HL, {
                                                            variant: 'span',
                                                            type: 'controls',
                                                            size: 'm',
                                                            weight: 'medium',
                                                            lineClamp: 1,
                                                            className: iG().title,
                                                            children: s,
                                                        }),
                                                        D,
                                                    ],
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                            ],
                        }),
                        (0, o.jsx)(iH.h, { dataSessionId: u, isOpened: y, onOpen: k, onClose: E }),
                    ],
                });
            };
            var iq = i(44337),
                iZ = i.n(iq);
            let iJ = (0, m.PA)((e) => {
                    let {
                            forwardRef: t,
                            isShimmerVisible: i,
                            isShimmerActive: a,
                            containerClassName: s,
                            headerClassName: r,
                            meta: m,
                            data: _,
                            headingVariant: u,
                            className: p,
                            ...b
                        } = e,
                        v = (0, l.useId)(),
                        { experiments: h, concerts: x } = (0, R.g)(),
                        C = (0, l.useRef)(null),
                        A = h.checkExperiment(eA.z.WebNextNewConcertCard, 'on'),
                        j = x.isLocationSelectionExperimentEnabled
                            ? {
                                  filterKey: n.DomainObjectType.Location,
                                  filterValue: null !== x.locationSelection.selectedLocationId ? String(x.locationSelection.selectedLocationId) : 'auto',
                                  filterPos: 1,
                              }
                            : {},
                        T = (0, l.useMemo)(
                            () =>
                                i
                                    ? ((e, t) =>
                                          Array.from({ length: 10 }, (i, a) =>
                                              e ? (0, o.jsx)(iU.L, { isActive: t }, a) : (0, o.jsx)(tR.W, { isActive: t, className: iZ().shimmer }, a),
                                          ))(A, a)
                                    : null == _
                                      ? void 0
                                      : _.items.map((e, t) =>
                                            (0, o.jsx)(
                                                c.B,
                                                {
                                                    objectType: n.DomainObjectType.Concert,
                                                    objectId: e.id,
                                                    objectPosX: t + 1,
                                                    objectPosY: 1,
                                                    objectsCount: _.items.length,
                                                    children: A ? (0, o.jsx)(iV.Q, { concert: e }) : (0, o.jsx)(iQ, { concert: e }),
                                                },
                                                e.id,
                                            ),
                                        ),
                            [null == _ ? void 0 : _.items, a, i, A],
                        );
                    return (0, o.jsx)(iz, {
                        ...j,
                        children: (0, o.jsxs)('section', {
                            ref: t,
                            className: (0, d.$)(iZ().root, { [iZ().root_withNewConcertCards]: A }, p),
                            ...(0, B.getDataAttrFromProps)(b),
                            children: [
                                (0, o.jsx)(U.T, {
                                    className: r,
                                    labeledForId: v,
                                    title: m.title,
                                    viewAllActionLink: m.viewAllActionLink,
                                    controls: (0, o.jsx)(W.X, { className: iZ().controls, carouselRef: C }),
                                    headingVariant: u,
                                }),
                                (0, o.jsx)(V.F, { ref: C, itemClassName: (0, d.$)(iZ().item, iZ().important), className: s, 'aria-labelledby': v, children: T }),
                            ],
                        }),
                    });
                }),
                i0 = (0, l.forwardRef)((e, t) => (0, o.jsx)(iJ, { forwardRef: t, ...e }));
            var i1 = i(27151),
                i2 = i.n(i1),
                i3 = i(48318),
                i9 = i.n(i3);
            let i4 = (e) => {
                let { className: t, title: i, subtitle: a, covers: s, link: r, type: c, withLastPlayed: m } = e,
                    _ = (0, T.N)(),
                    u = (0, l.useMemo)(() => {
                        if (0 !== s.length)
                            return (0, o.jsx)('div', {
                                className: i9().covers,
                                'data-test-id': p.e8.landing.CONTINUE_LISTEN_BASE_ITEM_COVERS,
                                children: s
                                    .slice(0, 2)
                                    .map((e, t) =>
                                        (0, o.jsx)(
                                            h.t,
                                            {
                                                className: i9().coverContainer,
                                                radius: 'xs',
                                                children: (0, o.jsx)(th._V, {
                                                    className: i9().cover,
                                                    size: 80,
                                                    src: e.uri,
                                                    fit: 'contain',
                                                    withAvatarReplace: !0,
                                                    fallbackIconSize: 's',
                                                    'data-test-id': ''.concat(p.e8.landing.CONTINUE_LISTEN_BASE_ITEM_COVERS, '_').concat(t),
                                                }),
                                            },
                                            t,
                                        ),
                                    ),
                            });
                    }, [s]),
                    b = (0, l.useCallback)(() => {
                        _({ to: n.AppScreen.Link });
                    }, [_]);
                return (0, o.jsx)(h.t, {
                    className: (0, d.$)(i9().root, i9()['root_'.concat(c)], { [i9().root_withCovers]: s.length > 0, [i9().root_withLastPlayed]: m }, t),
                    radius: 'l',
                    'data-test-id': p.e8.landing.CONTINUE_LISTEN_BASE_ITEM,
                    children: (0, o.jsx)(P.N, {
                        className: i9().link,
                        href: r,
                        onClick: b,
                        'data-test-id': p.e8.landing.CONTINUE_LISTEN_BASE_ITEM_LINK,
                        children: (0, o.jsxs)('div', {
                            className: i9().content,
                            children: [
                                (0, o.jsxs)('div', {
                                    className: i9().textContainer,
                                    children: [
                                        (0, o.jsxs)(x.HL, {
                                            className: i9().title,
                                            size: 'm',
                                            variant: 'div',
                                            'data-test-id': p.e8.landing.CONTINUE_LISTEN_BASE_ITEM_LINK_TITLE,
                                            children: [i, (0, o.jsx)(ie.I, { className: i9().titleIcon, size: 'xs', variant: 'arrowRight' })],
                                        }),
                                        a &&
                                            (0, o.jsx)(x.HL, {
                                                className: i9().subtitle,
                                                size: 'm',
                                                variant: 'div',
                                                lineClamp: 2,
                                                'data-test-id': p.e8.landing.CONTINUE_LISTEN_BASE_ITEM_LINK_SUBTITLE,
                                                children: a,
                                            }),
                                    ],
                                }),
                                u,
                            ],
                        }),
                    }),
                });
            };
            var i8 = i(8055),
                i7 = i(74924),
                i6 = i(83557),
                i5 = i(66436),
                ae = i(44128),
                at = i(59800),
                ai = i.n(at);
            let aa = (0, m.PA)((e) => {
                    var t, i, a, s, r;
                    let { className: m, lastPlayed: u } = e,
                        { objectsCount: C } = (0, e6.N)(),
                        { formatMessage: A } = (0, _.A)(),
                        { sonataState: T, continueListen: I } = (0, R.g)(),
                        f = (0, ae.e)(),
                        L = (0, i5.$)(),
                        {
                            album: g,
                            playlist: O,
                            track: M,
                            getTrackMeta: D,
                            getPlaylistMeta: B,
                            isNeededToLoad: V,
                            isRejected: U,
                            albumDuration: W,
                            albumDurationLeft: z,
                        } = u.data,
                        { track: H, trackIndex: K, contextType: Y, contextId: F, albumDuration: $, albumStreamProgress: X, trackTempStreamProgress: G } = I,
                        Q = (0, N.b)(),
                        q = (0, j.P)(),
                        Z = (0, l.useMemo)(() => H || M, [H, M]),
                        J = (null == (t = T.entityMeta) ? void 0 : t.isPodcast) || (null == (i = T.entityMeta) ? void 0 : i.isAudiobook),
                        ee = (0, l.useCallback)(async () => {
                            let e = await D();
                            !I.track &&
                                e &&
                                (I.saveTrack({
                                    contextType: g ? b.K.Album : b.K.Playlist,
                                    contextId: g ? g.id : String(null == O ? void 0 : O.id),
                                    track: e,
                                    isDefaultTrack: !0,
                                }),
                                W && z && (I.saveAlbumDuration(W), I.albumStreamProgress.updateEndPositionSec(W - z)));
                        }, [I, g, W, z, D, null == O ? void 0 : O.id]),
                        et = (0, l.useCallback)(async () => {
                            let e = await B();
                            I.trackIndex || 'number' != typeof e || I.saveTrackIndex(e);
                        }, [B, I]);
                    (0, l.useEffect)(() => {
                        V && (ee(), et());
                    }, [V, ee, et]);
                    let ei = Y === b.K.Album && Z.mainAlbum && (null == Z ? void 0 : Z.mainAlbum.isAudiobook),
                        ea = (0, l.useCallback)(
                            (e) => {
                                var t, i;
                                if (
                                    e &&
                                    e.duration &&
                                    (e.duration === 1 / 0
                                        ? null == (t = Z.streamProgress) || t.updateEndPositionSec(0)
                                        : null == (i = Z.streamProgress) || i.updateEndPositionSec(e.position),
                                    ei)
                                ) {
                                    let t = (null == X ? void 0 : X.endPositionSec) || 0,
                                        i = e.position,
                                        a = i - ((null == G ? void 0 : G.endPositionSec) || 0);
                                    (null == X || X.updateEndPositionSec(t + a), null == G || G.updateEndPositionSec(i));
                                }
                            },
                            [Z.streamProgress, X, G, ei],
                        ),
                        es = ei ? (null == X ? void 0 : X.endPositionSec) || 0 : (null == (a = Z.streamProgress) ? void 0 : a.endPositionSec) || 0,
                        er = Z.durationMs ? Z.durationMs / 1e3 : 0,
                        eo = ei ? $ || 0 : er,
                        el = (0, i6.m)(es, eo),
                        en = (0, l.useMemo)(() => (0, i8.A)(ea, 500), [ea]),
                        { isPlaying: ec, togglePlay: ed } = ((e) => {
                            let { track: t, trackIndex: i, contextType: a, contextId: s } = e,
                                r = (0, l.useMemo)(() => {
                                    switch (a) {
                                        case b.K.Playlist:
                                            return { type: b.K.Playlist, meta: { id: String(s) } };
                                        case b.K.Album:
                                            return { type: b.K.Album, meta: { id: Number(s) } };
                                        case b.K.Various:
                                            return { type: b.K.Various, meta: { id: Number(s) } };
                                        case b.K.Artist:
                                            return { type: b.K.Artist, meta: { id: Number(s) } };
                                        case b.K.Generative:
                                            return { type: b.K.Generative, meta: { id: Number(s) } };
                                        case b.K.Vibe:
                                            return { type: b.K.Vibe, meta: { id: String(s) } };
                                        default:
                                            return { type: b.K.Various, meta: { id: '' } };
                                    }
                                }, [a, s]),
                                { from: o, utmLink: n } = (0, S.f)({ contextId: r.meta.id, contextType: r.type }),
                                c = (0, eD.L)(() => {
                                    switch (a) {
                                        case b.K.Playlist:
                                            return { type: b.K.Playlist, meta: { id: String(s) }, from: o, utmLink: n };
                                        case b.K.Album:
                                            return { type: b.K.Album, meta: { id: Number(s) }, from: o, utmLink: n };
                                        case b.K.Various:
                                            return { type: b.K.Various, meta: { id: Number(s) }, from: o, utmLink: n };
                                        case b.K.Artist:
                                            return { type: b.K.Artist, meta: { id: Number(s) }, from: o, utmLink: n };
                                        case b.K.Generative:
                                            return { type: b.K.Generative, meta: { id: Number(s) }, from: o, utmLink: n };
                                        case b.K.Vibe:
                                            return {
                                                type: b.K.Vibe,
                                                meta: { id: String(s) },
                                                seeds: [String(s)],
                                                includeTracksInResponse: !0,
                                                trackToStartFrom: t.id,
                                                from: o,
                                                utmLink: n,
                                            };
                                        default:
                                            return { type: b.K.Playlist, meta: { id: '' }, from: o, utmLink: n };
                                    }
                                });
                            return (0, y.D)({
                                playContextParams: { contextData: c, queueParams: { entityId: t.id, index: i }, loadContextMeta: !0 },
                                entityId: t.entityId,
                            });
                        })({ track: Z, trackIndex: K, contextType: Y, contextId: F }),
                        em = (0, v.c)(() => {
                            q() || (ed(), Q(!ec));
                        }),
                        e_ = (0, l.useMemo)(() => ({ '--color-background': Z.averageColor }), [Z.averageColor]);
                    (0, l.useEffect)(() => {
                        let e,
                            t =
                                null == f
                                    ? void 0
                                    : f.state.queueState.currentEntity.onChange(() => {
                                          (null == e || e(),
                                              (e = f.state.playerState.progress.onChange(() => {
                                                  let e = f.state.playerState.progress.value;
                                                  J && en(e);
                                              })));
                                      });
                        return () => {
                            (null == t || t(), null == e || e());
                        };
                    }, [f, en, J, Z.streamProgress]);
                    let eu = ei ? Z.mainAlbum.title : Z.title,
                        ep = ei ? Z.mainAlbum.coverUri : Z.coverUri,
                        eb = (0, l.useMemo)(() => {
                            var e;
                            return A({ id: 'entity-names.album-name' }, { albumName: null == (e = Z.mainAlbum) ? void 0 : e.title });
                        }, [A, null == (s = Z.mainAlbum) ? void 0 : s.title]),
                        ev = (0, l.useMemo)(() => (ei ? eb : A({ id: 'entity-names.track-name' }, { trackName: Z.title })), [A, ei, eb, Z.title]),
                        eh = ei ? Z.mainAlbum.explicitDisclaimer : Z.explicitDisclaimer,
                        ex = L(eo - es, !1);
                    return U
                        ? null
                        : (0, o.jsx)(
                              c.B,
                              {
                                  objectType: n.DomainObjectType.Track,
                                  objectId: String(Z.id),
                                  objectPosX: 0,
                                  objectPosY: 1,
                                  objectsCount: C,
                                  children: (0, o.jsxs)(h.t, {
                                      className: (0, d.$)(ai().root, m),
                                      radius: 'l',
                                      style: e_,
                                      'aria-label': eu,
                                      'data-test-id': p.e8.landing.CONTINUE_LISTEN_TRACK,
                                      children: [
                                          (0, o.jsxs)('div', {
                                              className: ai().content,
                                              children: [
                                                  (0, o.jsx)(k.B, {
                                                      className: (0, d.$)(ai().cover, ai().important),
                                                      src: ep,
                                                      size: 50,
                                                      alt: ev,
                                                      fit: 'cover',
                                                      withAvatarReplace: !0,
                                                      isAvailable: Z.isAvailable,
                                                      fallbackIconSize: 'xs',
                                                      'aria-hidden': !0,
                                                  }),
                                                  (0, o.jsxs)('div', {
                                                      className: ai().metaTrack,
                                                      children: [
                                                          (0, o.jsxs)(P.N, {
                                                              className: ai().metaContainer,
                                                              href: null == (r = Z.mainAlbum) ? void 0 : r.url,
                                                              'data-test-id': p.e8.landing.CONTINUE_LISTEN_TRACK_META_LINK,
                                                              children: [
                                                                  (0, o.jsx)(x.HL, {
                                                                      className: ai().title,
                                                                      type: 'entity',
                                                                      size: 'm',
                                                                      weight: 'medium',
                                                                      variant: 'span',
                                                                      lineClamp: 1,
                                                                      'aria-label': eb,
                                                                      'data-test-id': p.e8.landing.CONTINUE_LISTEN_TRACK_META_LINK_TITLE,
                                                                      children: eu,
                                                                  }),
                                                                  eh &&
                                                                      (0, o.jsx)(E.N, {
                                                                          getDescriptionTexts: Z.getDescriptionTexts,
                                                                          size: 'xs',
                                                                          variant: eh,
                                                                          className: ai().explicitMark,
                                                                      }),
                                                                  (0, o.jsx)(ie.I, { className: ai().titleIcon, size: 'xs', variant: 'arrowRight' }),
                                                              ],
                                                          }),
                                                          (0, o.jsx)('div', {
                                                              className: ai().progress,
                                                              children:
                                                                  !!eo &&
                                                                  (0, o.jsxs)(o.Fragment, {
                                                                      children: [
                                                                          (0, o.jsx)(i7.q, {
                                                                              'aria-valuetext': el,
                                                                              'aria-busy': ec && J,
                                                                              fullCircleClassName: ai().fullCircle,
                                                                              progressCircleClassName: ai().progressCircle,
                                                                              value: es,
                                                                              max: eo,
                                                                              'data-test-id': p.e8.landing.CONTINUE_LISTEN_TRACK_META_CIRCLE_PROGRESS,
                                                                          }),
                                                                          (0, o.jsx)(x.HL, {
                                                                              lineClamp: 1,
                                                                              variant: 'div',
                                                                              size: 'm',
                                                                              'data-test-id': p.e8.landing.CONTINUE_LISTEN_TRACK_META_PROGRESS_TEXT,
                                                                              children: ex,
                                                                          }),
                                                                      ],
                                                                  }),
                                                          }),
                                                      ],
                                                  }),
                                              ],
                                          }),
                                          (0, o.jsx)(w.D, { variant: 'filled', className: ai().playButton, isPlaying: ec && J, onClick: em, iconSize: 'm' }),
                                      ],
                                  }),
                              },
                              Z.id,
                          );
                }),
                as = (e) => {
                    let { forwardRef: t, isShimmerVisible: i, isShimmerActive: a, headerClassName: s, containerClassName: r, headingVariant: m, data: u, ...p } = e,
                        { formatMessage: b } = (0, _.A)(),
                        v = (0, l.useId)(),
                        { objectsCount: h } = (0, e6.N)(),
                        x = (0, l.useMemo)(() => {
                            if (!u || i) return Array.from({ length: 3 }, (e, t) => (0, o.jsx)(tR.W, { className: i2().item, isActive: a }, t));
                            let e = [
                                    u.bookshelf.bookCount ? b({ id: 'entity-names.number-of-books' }, { counter: u.bookshelf.bookCount }) : void 0,
                                    u.bookshelf.podcastCount ? b({ id: 'entity-names.number-of-podcasts' }, { counter: u.bookshelf.podcastCount }) : void 0,
                                ]
                                    .filter(Boolean)
                                    .join(',\n'),
                                t = u.newEpisodes.trackCount ? b({ id: 'entity-names.number-of-episodes' }, { counter: u.newEpisodes.trackCount }) : void 0,
                                s = [];
                            return (
                                u.lastPlayed &&
                                    s.push((0, o.jsx)(aa, { className: (0, d.$)(i2().item, i2().item_lastPlayed), lastPlayed: u.lastPlayed }, u.lastPlayed.type)),
                                s.push(
                                    (0, o.jsx)(
                                        c.B,
                                        {
                                            objectType: n.DomainObjectType.Text,
                                            objectId: 'bookshelf',
                                            objectPosX: 1,
                                            objectPosY: 1,
                                            objectsCount: h,
                                            children: (0, o.jsx)(i4, {
                                                className: i2().item,
                                                type: 'bookshelf',
                                                link: ih.Z.collectionShelf.href,
                                                title: u.bookshelf.title,
                                                subtitle: e,
                                                covers: u.bookshelf.covers,
                                                withLastPlayed: !!u.lastPlayed,
                                            }),
                                        },
                                        u.bookshelf.title,
                                    ),
                                    (0, o.jsx)(
                                        c.B,
                                        {
                                            objectType: n.DomainObjectType.Text,
                                            objectId: 'newEpisodes',
                                            objectPosX: 2,
                                            objectPosY: 1,
                                            objectsCount: h,
                                            children: (0, o.jsx)(i4, {
                                                className: i2().item,
                                                type: 'newEpisodes',
                                                link: ih.Z.collectionShelfNewEpisodes.href,
                                                title: u.newEpisodes.title,
                                                subtitle: t,
                                                covers: u.newEpisodes.covers,
                                                withLastPlayed: !!u.lastPlayed,
                                            }),
                                        },
                                        u.newEpisodes.title,
                                    ),
                                ),
                                s
                            );
                        }, [b, u, a, i, h]);
                    return (0, o.jsxs)('section', {
                        ref: t,
                        ...(0, B.getDataAttrFromProps)(p),
                        children: [
                            (0, o.jsx)(U.T, { className: s, labeledForId: v, title: b({ id: 'non-music.continue-listen-landing-block-title' }), headingVariant: m }),
                            (0, o.jsx)('div', {
                                className: i2().blocksContainer,
                                children: (0, o.jsx)('div', { className: (0, d.$)(i2().container, r), 'aria-labelledby': v, children: x }),
                            }),
                        ],
                    });
                },
                ar = (0, l.forwardRef)((e, t) => (0, o.jsx)(as, { forwardRef: t, ...e })),
                ao = (e) => {
                    let { forwardRef: t, headerClassName: i, headingVariant: a, meta: s, ...r } = e;
                    return (0, o.jsx)(c.B, {
                        objectType: n.DomainObjectType.Text,
                        objectId: String(s.viewAllActionLink),
                        objectPosX: 1,
                        objectPosY: 1,
                        objectsCount: 0,
                        children: (0, o.jsx)('section', {
                            ref: t,
                            ...(0, B.getDataAttrFromProps)(r),
                            children: (0, o.jsx)(U.T, { className: i, title: s.title, headingVariant: a, viewAllActionLink: s.viewAllActionLink }),
                        }),
                    });
                },
                al = (0, l.forwardRef)((e, t) => (0, o.jsx)(ao, { forwardRef: t, ...e }));
            var an = i(80097),
                ac = i(74381),
                ad = i(90840),
                am = i(79897),
                a_ = i(91853);
            let au = (0, m.PA)((e) => {
                    let { donation: t } = e,
                        { ref: i, intersectionPropertyId: a } = (0, I.n)(),
                        s = (0, ad.Q)()(t.url),
                        r = (0, g.Z)(s),
                        l = (0, g.Z)(t.artist.url),
                        c = (0, T.N)(),
                        d = (0, v.c)(() => {
                            (c({ to: n.AppScreen.ArtistScreen }), l());
                        }),
                        m = (0, v.c)(() => {
                            (c({ to: n.AppScreen.Link, deepLink: s }), r());
                        }),
                        _ = (0, a_.S)({ artist: t.artist, callback: d });
                    return (0, o.jsx)(am.X, {
                        ref: i,
                        'data-intersection-property-id': a,
                        artist: t.artist,
                        goal: t.goal,
                        onNavigateToArtist: _,
                        onNavigateToDonation: m,
                    });
                }),
                ap = (e) => {
                    let {
                            forwardRef: t,
                            isShimmerVisible: i,
                            isShimmerActive: a,
                            containerClassName: s,
                            headerClassName: r,
                            meta: d,
                            data: m,
                            headingVariant: _,
                            className: u,
                            ...p
                        } = e,
                        b = (0, l.useMemo)(
                            () =>
                                !i && (null == m ? void 0 : m.items)
                                    ? m.items.map((e, t) => {
                                          let { data: i } = e;
                                          return (0, o.jsx)(
                                              c.B,
                                              {
                                                  objectType: n.DomainObjectType.Donation,
                                                  objectId: i.artist.id,
                                                  objectPosX: t + 1,
                                                  objectPosY: 1,
                                                  objectsCount: m.items.length,
                                                  children: (0, o.jsx)(au, { donation: i }),
                                              },
                                              i.artist.id,
                                          );
                                      })
                                    : (0, ac.k)(a),
                            [null == m ? void 0 : m.items, a, i],
                        );
                    return (0, o.jsx)(an.x, {
                        containerClassName: s,
                        headerClassName: r,
                        headingVariant: _,
                        className: u,
                        forwardRef: t,
                        description: d.description,
                        viewAllActionLink: d.viewAllActionLink,
                        title: d.title,
                        ...p,
                        children: b,
                    });
                },
                ab = (0, l.forwardRef)((e, t) => (0, o.jsx)(ap, { forwardRef: t, ...e }));
            var av = i(45807),
                ah = i(63423),
                ax = i(51025),
                aC = i.n(ax);
            let aA = (e) => {
                    let { isActive: t, className: i } = e;
                    return (0, o.jsx)(tR.W, { isActive: t, className: (0, d.$)(aC().root, i) });
                },
                aj = (0, m.PA)((e) => {
                    let { className: t, vibe: i } = e,
                        { formatMessage: a } = (0, _.A)(),
                        { pageId: s } = (0, id.$)(),
                        { blockIdForFrom: r } = (0, e6.N)(),
                        { ref: n, intersectionPropertyId: c } = (0, I.n)(),
                        { toggleTrue: m, toggleFalse: u, state: b } = (0, tv.e)(!1),
                        { freeAccess: v } = (0, R.g)(),
                        h = i.title.length > 26,
                        { isPlaying: C, togglePlay: A } = (0, tj.B)({ seeds: i.seeds, pageIdForFrom: s, blockIdForFrom: r }),
                        j = (0, N.b)(),
                        T = (0, l.useCallback)(
                            (e) => {
                                v.isVibeStartRestricted ||
                                    ((0, et.P)(e, aC().ripple),
                                    m(),
                                    A().finally(() => {
                                        (u(), j(!C));
                                    }));
                            },
                            [u, m, A, C, j, v.isVibeStartRestricted],
                        ),
                        S = (0, l.useMemo)(() => {
                            var e, t;
                            return {
                                '--vibe-button-background': null == (e = i.colors) ? void 0 : e.average,
                                '--vibe-button-text-color': null == (t = i.colors) ? void 0 : t.waveText,
                            };
                        }, [i.colors]),
                        f = C ? 'pause' : 'play',
                        L = C ? p.e8.landing.VIBE_DISCOVERY_ITEM_PAUSE_ICON : p.e8.landing.VIBE_DISCOVERY_ITEM_PLAY_ICON,
                        g = (0, l.useCallback)(
                            () =>
                                (0, o.jsxs)(ah.$, {
                                    style: S,
                                    withRipple: !1,
                                    withHover: !1,
                                    variant: 'text',
                                    onClick: T,
                                    className: (0, d.$)(aC().root, aC().button, { [aC().button_loading]: b }, t),
                                    'data-intersection-property-id': c,
                                    ref: n,
                                    'data-test-id': p.e8.landing.VIBE_DISCOVERY_ITEM,
                                    children: [
                                        (0, o.jsx)(th._V, {
                                            className: aC().image,
                                            withAvatarReplace: !0,
                                            withFallback: !1,
                                            src: i.backgroundImageUrl,
                                            withAspectRatio: !0,
                                            size: 400,
                                            fit: 'cover',
                                        }),
                                        (0, o.jsxs)('span', {
                                            className: aC().textContainer,
                                            children: [
                                                (0, o.jsx)(x.HL, {
                                                    className: aC().subtitle,
                                                    variant: 'span',
                                                    type: 'controls',
                                                    size: 's',
                                                    weight: 'bold',
                                                    children: i.getDescription(a({ id: 'entity-names.my-vibe' })),
                                                }),
                                                (0, o.jsxs)(x.HL, {
                                                    className: (0, d.$)(aC().title, { [aC().title_long]: h }),
                                                    variant: 'span',
                                                    size: 's',
                                                    weight: 'bold',
                                                    lineClamp: 2,
                                                    children: [(0, o.jsx)(ie.I, { className: aC().icon, size: 'xxs', variant: f, 'data-test-id': L }), i.title],
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                            [t, a, T, L, f, c, h, b, n, S, i],
                        );
                    return (0, o.jsx)(tT.S, {
                        isEnabled: v.isVibeStartRestricted,
                        placement: 'top',
                        textVariant: 'vibe',
                        vibeTextVariant: i.stationType,
                        renderChildren: g,
                    });
                });
            var aT = i(31906),
                aN = i.n(aT);
            let aI = (e) => {
                    let { forwardRef: t, items: i, itemClassName: a, containerClassName: s, ariaLabelledBy: r } = e;
                    return (0, o.jsx)(V.F, {
                        ref: t,
                        className: s,
                        itemClassName: (0, d.$)(aN().item, aN().important, a),
                        'aria-labelledby': r,
                        children:
                            null == i
                                ? void 0
                                : i.map((e, t) =>
                                      (0, o.jsx)(
                                          c.B,
                                          {
                                              objectType: n.DomainObjectType.Wave,
                                              objectId: e.stationId,
                                              objectPosX: t + 1,
                                              objectPosY: 1,
                                              objectsCount: null == i ? void 0 : i.length,
                                              children: (0, o.jsx)(aj, { vibe: e }),
                                          },
                                          e.stationId,
                                      ),
                                  ),
                    });
                },
                aS = (e) => {
                    let { forwardRef: t, isActive: i, itemClassName: a, containerClassName: s, ariaLabelledBy: r, length: l } = e;
                    return (0, o.jsx)(V.F, {
                        ref: t,
                        className: s,
                        itemClassName: (0, d.$)(aN().item, aN().important, a),
                        'aria-labelledby': r,
                        children: Array.from({ length: l }, (e, t) => (0, o.jsx)(aA, { isActive: i }, t)),
                    });
                },
                af = (0, l.forwardRef)((e, t) => (0, o.jsx)(aI, { forwardRef: t, ...e })),
                aL = (0, l.forwardRef)((e, t) => (0, o.jsx)(aS, { forwardRef: t, ...e }));
            var ag = i(36687),
                ay = i.n(ag);
            let aR = (e) => {
                    let {
                            forwardRef: t,
                            isShimmerVisible: i,
                            isShimmerActive: a,
                            containerClassName: s,
                            headerClassName: r,
                            meta: n,
                            data: c,
                            className: m,
                            headingVariant: _,
                            ...u
                        } = e,
                        p = (0, l.useId)(),
                        b = (0, l.useRef)(null),
                        { shouldHideControls: v } = (0, av.Y)(b),
                        h = !!(n.description || n.title || !v),
                        x = (0, l.useMemo)(
                            () =>
                                i
                                    ? (0, o.jsx)(aL, { isActive: a, ref: b, containerClassName: s, ariaLabelledBy: p, length: 9 })
                                    : (0, o.jsx)(af, { ref: b, containerClassName: s, ariaLabelledBy: p, items: null == c ? void 0 : c.items }),
                            [null == c ? void 0 : c.items, a, i, s, p],
                        );
                    return (0, o.jsxs)('section', {
                        className: (0, d.$)(ay().root, m),
                        ref: t,
                        ...(0, B.getDataAttrFromProps)(u),
                        children: [
                            h &&
                                (0, o.jsx)(U.T, {
                                    className: r,
                                    title: n.title,
                                    description: n.description,
                                    labeledForId: p,
                                    viewAllActionLink: n.viewAllActionLink,
                                    controls: (0, o.jsx)(W.X, { className: ay().controls, carouselRef: b }),
                                    headingVariant: _,
                                    withDescription: !!n.description,
                                }),
                            x,
                        ],
                    });
                },
                ak = (0, l.forwardRef)((e, t) => (0, o.jsx)(aR, { forwardRef: t, ...e }));
            var aE = i(1085),
                aP = i.n(aE);
            let aw = (e) => {
                    let {
                            forwardRef: t,
                            isShimmerVisible: i,
                            isShimmerActive: a,
                            containerClassName: s,
                            headerClassName: r,
                            meta: m,
                            data: _,
                            className: u,
                            headingVariant: p,
                            ...b
                        } = e,
                        v = (0, l.useId)(),
                        h = (0, l.useRef)(null),
                        { shouldHideControls: x } = (0, av.Y)(h),
                        C = !!(m.description || m.title || !x),
                        A = (0, l.useMemo)(() => {
                            var e;
                            return i
                                ? (0, o.jsx)(V.F, {
                                      ref: h,
                                      itemClassName: (0, d.$)(aP().item, aP().important),
                                      className: s,
                                      'aria-labelledby': ''.concat(v, ' ').concat(v, '-description'),
                                      children: (0, e5.k)({ isActive: a, centered: !0 }),
                                  })
                                : (0, o.jsx)(V.F, {
                                      ref: h,
                                      itemClassName: (0, d.$)(aP().item, aP().important),
                                      className: s,
                                      'aria-labelledby': ''.concat(v, ' ').concat(v, '-description'),
                                      children:
                                          null == _ || null == (e = _.items)
                                              ? void 0
                                              : e.map((e, t) => {
                                                    var i;
                                                    return (0, o.jsx)(
                                                        c.B,
                                                        {
                                                            objectType: n.DomainObjectType.Wave,
                                                            objectId: e.stationId,
                                                            objectPosX: t + 1,
                                                            objectPosY: 1,
                                                            objectsCount: null == (i = _.items) ? void 0 : i.length,
                                                            children: (0, o.jsx)(ic.y, { vibe: e }),
                                                        },
                                                        e.stationId,
                                                    );
                                                }),
                                  });
                        }, [null == _ ? void 0 : _.items, a, i, s, v]);
                    return (0, o.jsxs)('section', {
                        className: (0, d.$)(aP().root, u),
                        ref: t,
                        ...(0, B.getDataAttrFromProps)(b),
                        children: [
                            C &&
                                (0, o.jsx)(U.T, {
                                    className: r,
                                    title: m.title,
                                    description: m.description,
                                    labeledForId: v,
                                    viewAllActionLink: m.viewAllActionLink,
                                    controls: (0, o.jsx)(W.X, { className: aP().controls, carouselRef: h }),
                                    headingVariant: p,
                                    withDescription: !!m.description,
                                }),
                            A,
                        ],
                    });
                },
                aO = (0, l.forwardRef)((e, t) => (0, o.jsx)(aw, { forwardRef: t, ...e }));
            var aM = i(71079),
                aD = i(13889),
                aB = i.n(aD);
            let aV = (0, m.PA)((e) => {
                    let { forwardRef: t, isShimmerVisible: i, isShimmerActive: a, headerClassName: s, meta: r, data: l, headingVariant: n, className: c, ...d } = e,
                        { artist: m } = (0, R.g)(),
                        { formatMessage: u } = (0, _.A)(),
                        p = (0, eD.L)(() => {
                            if (!l) return;
                            let e = [];
                            return (
                                l.tracksCount && e.push(u({ id: 'entity-names.tracks-count' }, { value: l.tracksCount })),
                                l.collectionAlbumCount && e.push(u({ id: 'entity-names.albums-count' }, { value: l.collectionAlbumCount })),
                                e.join(' • ')
                            );
                        });
                    return (0, o.jsx)('section', {
                        ref: t,
                        className: c,
                        ...(0, B.getDataAttrFromProps)(d),
                        children: (0, o.jsx)(U.T, {
                            className: s,
                            title: r.title,
                            coverUrl: 'avatars.mds.yandex.net/get-music-misc/2419084/img.65faec7dd0866004f49a38bc/%%',
                            controls: !1,
                            viewAllActionLink: null == l ? void 0 : l.href(m.id),
                            coverContainerClassName: aB().cover,
                            shimmerCoverClassName: aB().shimmerCover,
                            headingVariant: n,
                            titleLineClamp: 1,
                            withDescription: !0,
                            description: p,
                            isShimmerActive: a,
                            isShimmerVisible: i,
                        }),
                    });
                }),
                aU = (0, l.forwardRef)((e, t) => (0, o.jsx)(aV, { forwardRef: t, ...e }));
            var aW = i(74553),
                az = i.n(aW);
            let aH = (0, m.PA)((e) => {
                    let {
                            forwardRef: t,
                            isShimmerVisible: i,
                            isShimmerActive: a,
                            containerClassName: s,
                            headerClassName: r,
                            meta: m,
                            data: _,
                            headingVariant: u,
                            className: p,
                            ...b
                        } = e,
                        { objectsCount: v } = (0, e6.N)(),
                        h = (0, e7.zb)(0),
                        x = (0, l.useId)(),
                        C = (0, l.useRef)(null),
                        A = (0, l.useId)(),
                        j = (0, l.useMemo)(
                            () =>
                                i
                                    ? (0, o.jsx)(V.F, {
                                          ref: C,
                                          itemClassName: (0, d.$)(az().item, az().important),
                                          className: s,
                                          'aria-labelledby': ''.concat(x, ' ').concat(x, '-description'),
                                          children: (0, e5.k)({ isActive: a }),
                                      })
                                    : null == _
                                      ? void 0
                                      : _.items.map((e) =>
                                            (0, o.jsx)(
                                                e7.Kp,
                                                {
                                                    name: e.tab.id,
                                                    value: h.value,
                                                    elementId: A,
                                                    children: (0, o.jsx)(V.F, {
                                                        ref: C,
                                                        itemClassName: (0, d.$)(az().item, az().important),
                                                        className: s,
                                                        'aria-labelledby': ''.concat(x, ' ').concat(x, '-description'),
                                                        children: e.data.map((t, i) =>
                                                            (0, o.jsx)(
                                                                c.B,
                                                                {
                                                                    objectType: n.DomainObjectType.Album,
                                                                    objectId: String(t.id),
                                                                    objectPosX: i + 1,
                                                                    objectPosY: 1,
                                                                    objectsCount: e.data.length,
                                                                    children: (0, o.jsx)(eB.a, { contentLinesCount: 3, album: t }),
                                                                },
                                                                t.id,
                                                            ),
                                                        ),
                                                    }),
                                                },
                                                e.tab.id,
                                            ),
                                        ),
                            [i, null == _ ? void 0 : _.items, s, x, a, h.value, A],
                        );
                    return (0, o.jsxs)('section', {
                        className: (0, d.$)(az().root, p),
                        ref: t,
                        ...(0, B.getDataAttrFromProps)(b),
                        children: [
                            (0, o.jsx)(c.B, {
                                objectType: n.DomainObjectType.Shortcut,
                                objectId: String(m.viewAllActionLink),
                                objectPosX: 0,
                                objectPosY: 0,
                                objectsCount: null != v ? v : 0,
                                children: (0, o.jsx)(U.T, {
                                    className: (0, d.$)(r, az().header, az().important),
                                    title: m.title,
                                    description: m.description,
                                    labeledForId: x,
                                    viewAllActionLink: m.viewAllActionLink,
                                    controls: (0, o.jsx)(W.X, { className: az().controls, carouselRef: C }),
                                    headingVariant: u,
                                    withDescription: !!m.description,
                                }),
                            }),
                            (0, o.jsx)(tt.wI, {
                                isShimmerVisible: i,
                                className: (0, d.$)(s, az().tabCarousel, az().important),
                                elementId: A,
                                shimmer: (0, o.jsx)(tt.nR, { isActive: a, className: (0, d.$)(s, az().tabCarousel, az().important) }),
                                'aria-labelledby': x,
                                ...h,
                                children:
                                    null == _
                                        ? void 0
                                        : _.items.map((e) => {
                                              let { tab: t } = e;
                                              return (0, o.jsx)(
                                                  te.o,
                                                  {
                                                      value: t.id,
                                                      'aria-label': t.title,
                                                      title: t.title,
                                                      covers: t.covers,
                                                      className: (0, d.$)(az().tab, az().important),
                                                      withCovers: !0,
                                                  },
                                                  t.id,
                                              );
                                          }),
                            }),
                            j,
                        ],
                    });
                }),
                aK = (0, l.forwardRef)((e, t) => (0, o.jsx)(aH, { forwardRef: t, ...e }));
            var aY = i(81448),
                aF = i(78381),
                a$ = i.n(aF);
            let aX = (e) => {
                    var t;
                    let { containerClassName: i, meta: a, data: s, forwardRef: r, isShimmerVisible: n, isShimmerActive: c, headingVariant: d } = e,
                        m = (0, l.useMemo)(() => {
                            if (n) {
                                var e;
                                return (0, aY.q)({
                                    className: a$().root,
                                    shimmerClassName: a$().shimmer,
                                    isActive: c,
                                    count: (null == (e = a.source) ? void 0 : e.countWeb) || 10,
                                    minWidth: 30,
                                    maxWidth: 70,
                                });
                            }
                            return (0, o.jsx)('div', {
                                className: a$().root,
                                children:
                                    null == s
                                        ? void 0
                                        : s.items.map((e) =>
                                              (0, o.jsx)(
                                                  U.T,
                                                  { titleLineClamp: 1, title: e.data.title, viewAllActionLink: e.data.viewAllActionLink, headingVariant: d },
                                                  e.key,
                                              ),
                                          ),
                            });
                        }, [null == s ? void 0 : s.items, d, c, n, null == (t = a.source) ? void 0 : t.countWeb]);
                    return (0, o.jsx)('section', { ref: r, title: a.title, className: i, 'data-test-id': p.e8.landing.ITEM_LIST, children: m });
                },
                aG = (0, l.forwardRef)((e, t) => (0, o.jsx)(aX, { forwardRef: t, ...e }));
            var aQ = i(91037),
                aq = i.n(aQ),
                aZ = i(10921),
                aJ = i.n(aZ);
            let a0 = (0, m.PA)((e) => {
                    let { title: t, subtitle: i, link: a, testId: s, icon: r, covers: n, navigateTo: c } = e,
                        {
                            settings: { isMobile: d },
                        } = (0, R.g)(),
                        m = (0, T.N)(),
                        { ref: _, intersectionPropertyId: u } = (0, I.n)(),
                        b = (0, l.useMemo)(() => {
                            if (0 !== n.length)
                                return (0, o.jsx)('div', {
                                    className: aJ().covers,
                                    children: n.map((e, t) =>
                                        (0, o.jsx)(
                                            h.t,
                                            {
                                                className: aJ().coverContainer,
                                                radius: 'xs',
                                                'data-test-id': p.e8.landing.LIKES_HISTORY_COVERS,
                                                children: (0, o.jsx)(th._V, { size: 80, className: aJ().cover, src: e.uri, fit: 'cover', withAvatarReplace: !0 }),
                                            },
                                            t,
                                        ),
                                    ),
                                });
                        }, [n]),
                        v = (0, l.useCallback)(() => {
                            m({ to: c });
                        }, [c, m]);
                    return (0, o.jsx)('div', {
                        ref: _,
                        'data-intersection-property-id': u,
                        className: aJ().root,
                        'data-test-id': s,
                        children: (0, o.jsxs)(P.N, {
                            className: aJ().link,
                            href: a,
                            onClick: v,
                            children: [
                                (0, o.jsxs)('div', {
                                    className: aJ().start,
                                    children: [
                                        r,
                                        (0, o.jsxs)('div', {
                                            className: aJ().textContainer,
                                            children: [
                                                (0, o.jsxs)(x.DZ, {
                                                    className: aJ().title,
                                                    size: d ? 'xs' : 'm',
                                                    variant: 'h2',
                                                    'data-test-id': p.e8.landing.LIKES_HISTORY_TITLE,
                                                    children: [t, (0, o.jsx)(ie.I, { className: aJ().titleIcon, size: 'xs', variant: 'arrowRight' })],
                                                }),
                                                (0, o.jsx)(x.HL, {
                                                    className: aJ().subtitle,
                                                    size: 'm',
                                                    variant: 'div',
                                                    lineClamp: 1,
                                                    'data-test-id': p.e8.landing.LIKES_HISTORY_SUBTITLE,
                                                    children: i,
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                                b,
                            ],
                        }),
                    });
                }),
                a1 = (e) => {
                    let { isActive: t } = e;
                    return (0, o.jsx)(tR.W, { isActive: t, className: aJ().root, height: 82 });
                },
                a2 = (e) => {
                    let { forwardRef: t, isShimmerVisible: i, isShimmerActive: a, data: s, ...r } = e,
                        { formatMessage: d } = (0, _.A)(),
                        { favorites: m, history: u } = s || {},
                        b = (0, l.useMemo)(
                            () =>
                                m && u && !i
                                    ? [
                                          (0, o.jsx)(
                                              c.B,
                                              {
                                                  objectType: n.DomainObjectType.Playlist,
                                                  objectId: m.id,
                                                  objectPosX: 1,
                                                  objectPosY: 1,
                                                  objectsCount: 2,
                                                  children: (0, o.jsx)(a0, {
                                                      title: m.title,
                                                      subtitle: d({ id: 'entity-names.number-of-tracks' }, { counter: m.count }),
                                                      link: m.url,
                                                      navigateTo: n.AppScreen.PlaylistScreen,
                                                      testId: p.e8.landing.LIKES_BLOCK,
                                                      icon: (0, o.jsx)(h.t, {
                                                          className: aq().favoritesCoverContainer,
                                                          radius: 'm',
                                                          children: (0, o.jsx)(th._V, {
                                                              className: aq().favoritesCover,
                                                              size: 80,
                                                              src: m.cover.uri,
                                                              fit: 'cover',
                                                              withAvatarReplace: !0,
                                                              alt: m.title,
                                                          }),
                                                      }),
                                                      covers: m.trackCovers,
                                                  }),
                                              },
                                              m.id,
                                          ),
                                          (0, o.jsx)(
                                              c.B,
                                              {
                                                  objectType: n.DomainObjectType.Shortcut,
                                                  objectId: u.id,
                                                  objectPosX: 2,
                                                  objectPosY: 1,
                                                  objectsCount: 2,
                                                  children: (0, o.jsx)(a0, {
                                                      title: u.title,
                                                      subtitle: u.artists.join(', '),
                                                      link: u.url,
                                                      navigateTo: n.AppScreen.MusicHistoryScreen,
                                                      testId: p.e8.landing.HISTORY_BLOCK,
                                                      icon: (0, o.jsx)(h.t, {
                                                          className: aq().historyIconContainer,
                                                          radius: 'm',
                                                          children: (0, o.jsx)(ie.I, { className: aq().historyIcon, variant: 'history', size: 'm' }),
                                                      }),
                                                      covers: u.trackCovers,
                                                  }),
                                              },
                                              u.id,
                                          ),
                                      ]
                                    : [(0, o.jsx)(a1, { isActive: a }, 0), (0, o.jsx)(a1, { isActive: a }, 1)],
                            [m, d, u, a, i],
                        );
                    return (0, o.jsx)('section', {
                        ref: t,
                        className: aq().root,
                        ...(0, B.getDataAttrFromProps)(r),
                        children: (0, o.jsx)(V.F, { className: aq().carousel, itemClassName: aq().carouselItem, children: b }),
                    });
                },
                a3 = (0, l.forwardRef)((e, t) => (0, o.jsx)(a2, { forwardRef: t, ...e }));
            var a9 = i(88467),
                a4 = i(14209),
                a8 = i.n(a4);
            let a7 = (e) => {
                    let {
                        forwardRef: t,
                        isShimmerVisible: i,
                        isShimmerActive: a,
                        containerClassName: s,
                        headerClassName: r,
                        meta: l,
                        data: n,
                        headingVariant: c,
                        className: d,
                        ...m
                    } = e;
                    return (0, o.jsx)(e0.O, {
                        className: d,
                        ...m,
                        isShimmerVisible: i,
                        isShimmerActive: a,
                        containerClassName: s,
                        headerClassName: r,
                        title: l.title,
                        description: l.description,
                        viewAllActionLink: l.viewAllActionLink,
                        itemClassName: a8().item,
                        showShimmerInfo: !1,
                        ref: t,
                        headingVariant: c,
                        'data-test-id': p.e8.landing.MIXES_BLOCK,
                        children:
                            null == n
                                ? void 0
                                : n.items.map((e) =>
                                      (0, o.jsx)(
                                          a9.N,
                                          { title: e.title, weblink: e.weblink, covers: e.covers, imagesLayoutType: e.imagesLayoutType, headingVariant: 'h3' },
                                          e.id,
                                      ),
                                  ),
                    });
                },
                a6 = (0, l.forwardRef)((e, t) => (0, o.jsx)(a7, { forwardRef: t, ...e }));
            var a5 = i(8588),
                se = i(50308),
                st = i(55885),
                si = i.n(st);
            let sa = (e) => {
                    var t;
                    let {
                            forwardRef: i,
                            headerClassName: a,
                            meta: s,
                            data: r,
                            headingVariant: m,
                            isShimmerActive: _,
                            containerClassName: u,
                            isShimmerVisible: p,
                            className: b,
                            ...v
                        } = e,
                        h = (0, l.useId)(),
                        x = (0, l.useMemo)(() => {
                            if (p) {
                                var e;
                                return (0, o.jsx)(se.e, {
                                    itemClassName: (0, d.$)(si().item, si().important, si().shimmerWithSubcover),
                                    isActive: _,
                                    centered: !0,
                                    withInfo: !0,
                                    withSubcover: !0,
                                    count: null == (e = s.source) ? void 0 : e.count,
                                });
                            }
                            return null == r
                                ? void 0
                                : r.items.map((e, t) =>
                                      (0, o.jsx)(
                                          c.B,
                                          {
                                              objectType: n.DomainObjectType.Shortcut,
                                              objectId: String(e.id),
                                              objectPosX: t + 1,
                                              objectPosY: 1,
                                              objectsCount: r.items.length,
                                              children: (0, o.jsx)(
                                                  a5.V,
                                                  {
                                                      linkClassName: (0, d.$)(si().item, si().important),
                                                      title: e.title,
                                                      weblink: e.weblink,
                                                      covers: e.covers,
                                                      captionVariant: 'h3',
                                                  },
                                                  e.id,
                                              ),
                                          },
                                          e.id,
                                      ),
                                  );
                        }, [_, p, null == r ? void 0 : r.items, null == (t = s.source) ? void 0 : t.count]);
                    return (0, o.jsxs)('section', {
                        ref: i,
                        className: b,
                        ...(0, B.getDataAttrFromProps)(v),
                        children: [
                            (0, o.jsx)(U.T, {
                                className: (0, d.$)(si().header, a),
                                labeledForId: h,
                                title: s.title,
                                viewAllActionLink: s.viewAllActionLink,
                                headingVariant: m,
                            }),
                            (0, o.jsx)('div', { className: (0, d.$)(si().mixesGrid, u), children: x }),
                        ],
                    });
                },
                ss = (0, l.forwardRef)((e, t) => (0, o.jsx)(sa, { forwardRef: t, ...e }));
            var sr = i(46997),
                so = i.n(sr);
            let sl = (e) => {
                    let {
                        forwardRef: t,
                        isShimmerVisible: i,
                        isShimmerActive: a,
                        containerClassName: s,
                        headerClassName: r,
                        meta: l,
                        data: d,
                        headingVariant: m,
                        className: _,
                        ...u
                    } = e;
                    return (0, o.jsx)(e0.O, {
                        className: _,
                        ...u,
                        isShimmerVisible: i,
                        isShimmerActive: a,
                        isShimmerWithSubcover: !0,
                        isShimmerCentered: !0,
                        shimmerClassName: so().shimmer,
                        containerClassName: s,
                        headerClassName: r,
                        title: l.title,
                        description: l.description,
                        viewAllActionLink: l.viewAllActionLink,
                        itemClassName: so().item,
                        showShimmerInfo: !0,
                        ref: t,
                        headingVariant: m,
                        'data-test-id': p.e8.landing.MIXES_MUSIC,
                        children:
                            null == d
                                ? void 0
                                : d.items.map((e, t) =>
                                      (0, o.jsx)(
                                          c.B,
                                          {
                                              objectType: n.DomainObjectType.Shortcut,
                                              objectId: String(e.id),
                                              objectPosX: t + 1,
                                              objectPosY: 1,
                                              objectsCount: d.items.length,
                                              children: (0, o.jsx)(
                                                  a5.V,
                                                  { linkClassName: so().item, title: e.title, weblink: e.weblink, covers: e.covers, captionVariant: 'h3' },
                                                  e.id,
                                              ),
                                          },
                                          e.id,
                                      ),
                                  ),
                    });
                },
                sn = (0, l.forwardRef)((e, t) => (0, o.jsx)(sl, { forwardRef: t, ...e }));
            var sc = i(39499),
                sd = i.n(sc),
                sm = i(4274),
                s_ = i.n(sm);
            let su = (e) => {
                    let { isActive: t } = e;
                    return (0, o.jsx)(tR.W, { isActive: t, className: s_().root });
                },
                sp = (0, m.PA)((e) => {
                    var t, i;
                    let { neuromusic: a } = e,
                        { from: s } = (0, S.f)(),
                        { isPlaying: r, togglePlay: n } = (0, y.D)({
                            playContextParams: { contextData: { type: b.K.Generative, meta: { id: a.stationId }, from: s }, loadContextMeta: !0 },
                        }),
                        c = (0, l.useCallback)(
                            (e) => {
                                ((0, et.P)(e, s_().ripple), n());
                            },
                            [n],
                        ),
                        m = (0, l.useMemo)(() => {
                            var e, t;
                            return {
                                '--neuromusic-button-background': null == a || null == (e = a.style) ? void 0 : e.backgroundColor,
                                '--neuromusic-button-color': null == a || null == (t = a.style) ? void 0 : t.titleColor,
                            };
                        }, [null == a || null == (t = a.style) ? void 0 : t.backgroundColor, null == a || null == (i = a.style) ? void 0 : i.titleColor]),
                        _ = r ? p.e8.landing.NEUROMUSIC_BLOCK_ITEM_PAUSE_ICON : p.e8.landing.NEUROMUSIC_BLOCK_ITEM_PLAY_ICON;
                    return (0, o.jsx)(ah.$, {
                        style: m,
                        withRipple: !1,
                        withHover: !1,
                        variant: 'text',
                        onClick: c,
                        className: (0, d.$)(s_().root, s_().button),
                        'data-test-id': p.e8.landing.NEUROMUSIC_BLOCK_ITEM,
                        children: (0, o.jsxs)('div', {
                            className: s_().textContainer,
                            children: [
                                (0, o.jsx)(ie.I, { className: s_().icon, size: 'xxs', variant: r ? 'pause' : 'play', 'data-test-id': _ }),
                                (0, o.jsx)(x.HL, { className: s_().title, variant: 'span', size: 's', weight: 'bold', lineClamp: 1, children: a.title }),
                            ],
                        }),
                    });
                }),
                sb = (e) => {
                    let {
                            forwardRef: t,
                            isShimmerVisible: i,
                            isShimmerActive: a,
                            containerClassName: s,
                            headerClassName: r,
                            meta: n,
                            data: c,
                            className: m,
                            headingVariant: _,
                            ...u
                        } = e,
                        p = (0, l.useId)(),
                        b = (0, l.useRef)(null),
                        v = (0, l.useMemo)(
                            () =>
                                i
                                    ? Array.from({ length: 3 }, (e, t) => (0, o.jsx)(su, { isActive: a }, t))
                                    : null == c
                                      ? void 0
                                      : c.items.map((e, t) => (0, o.jsx)(sp, { neuromusic: e }, t)),
                            [null == c ? void 0 : c.items, a, i],
                        );
                    return (0, o.jsxs)('section', {
                        ref: t,
                        className: (0, d.$)(sd().root, m),
                        ...(0, B.getDataAttrFromProps)(u),
                        children: [
                            (0, o.jsx)(U.T, {
                                className: r,
                                labeledForId: p,
                                title: n.title,
                                description: n.description,
                                controls: (0, o.jsx)(W.X, { className: sd().controls, carouselRef: b }),
                                headingVariant: _,
                                withDescription: !!n.description,
                            }),
                            (0, o.jsx)(V.F, { ref: b, itemClassName: (0, d.$)(sd().item, sd().important), className: s, 'aria-labelledby': p, children: v }),
                        ],
                    });
                },
                sv = (0, l.forwardRef)((e, t) => (0, o.jsx)(sb, { forwardRef: t, ...e }));
            var sh = i(7462),
                sx = i(54391),
                sC = i(29268),
                sA = i(11260);
            let sj = /^#[a-fA-F\d]{2}[a-fA-F\d]{2}[a-fA-F\d]{2}$/i;
            var sT = i(67848),
                sN = i.n(sT);
            let sI = (0, m.PA)((e) => {
                var t, i, a;
                let { album: s, releaseDate: r, coverColor: c, coverUri: d } = e,
                    m = null == s || null == (t = s.artists) ? void 0 : t[0],
                    { formatDate: u } = (0, _.A)(),
                    { trailer: C } = (0, R.g)(),
                    { ref: N, intersectionPropertyId: f } = (0, I.n)(),
                    L = (0, g.Z)(null != (a = null == m ? void 0 : m.url) ? a : ''),
                    y = (0, a_.S)({ artist: m, callback: L }),
                    E = (0, sx.F)(),
                    w = (0, sh.r)(s.type),
                    O = (0, j.P)(),
                    { from: M, utmLink: D } = (0, S.f)({ contextId: s.id, contextType: b.K.Album }),
                    V = (0, T.N)(),
                    U = (0, v.c)((e) => {
                        (V({ to: n.AppScreen.ArtistScreen, objectId: null == m ? void 0 : m.id, objectType: n.DomainObjectType.Artist }), y(e));
                    }),
                    W = (0, v.c)((e) => {
                        if (O()) {
                            (e.stopPropagation(), e.preventDefault());
                            return;
                        }
                        (null == s ? void 0 : s.id) && (e.stopPropagation(), C.openAlbumTrailer(s.id), E(n.DomainObjectType.Album, String(s.id)));
                    }),
                    z = (0, l.useMemo)(() => {
                        var e;
                        if (null == s || null == (e = s.trailer) ? void 0 : e.isAvailable)
                            return (0, o.jsx)(sA.L, {
                                children: (0, o.jsx)(sC.k, { variant: 'text', iconSize: 'xs', className: sN().trailerButton, withRipple: !1, onClick: W }),
                            });
                    }, [null == s || null == (i = s.trailer) ? void 0 : i.isAvailable, W]),
                    H = (0, l.useMemo)(() => {
                        if (r)
                            return (0, o.jsxs)(x.HL, {
                                variant: 'span',
                                type: 'text',
                                size: 's',
                                weight: 'medium',
                                className: sN().descriptionContainer,
                                children: [
                                    (0, o.jsx)(x.HL, { variant: 'span', type: 'text', size: 's', weight: 'medium', children: w.toLowerCase() }),
                                    (0, o.jsx)(x.HL, { variant: 'span', type: 'text', size: 's', weight: 'medium', children: ' • ' }),
                                    (0, o.jsx)(x.HL, {
                                        variant: 'span',
                                        type: 'text',
                                        size: 's',
                                        weight: 'medium',
                                        children: u(new Date(r), { day: 'numeric', month: 'long' }),
                                    }),
                                ],
                            });
                    }, [w, u, r]);
                return (0, o.jsxs)('div', {
                    className: sN().root,
                    ref: N,
                    'data-intersection-property-id': f,
                    children: [
                        (0, o.jsxs)('div', {
                            className: sN().cover,
                            children: [
                                (0, o.jsxs)(h.t, {
                                    className: sN().coverImage,
                                    radius: 'round',
                                    withShadow: !0,
                                    children: [
                                        (0, o.jsx)(k.B, {
                                            className: sN().image,
                                            src: d,
                                            alt: null == m ? void 0 : m.name,
                                            size: 300,
                                            fit: 'cover',
                                            withAvatarReplace: !0,
                                            'aria-hidden': !0,
                                        }),
                                        (0, o.jsx)('div', {
                                            className: sN().fade,
                                            style: {
                                                background: ((e) => {
                                                    (e && sj.test(e)) || (e = '#000000');
                                                    let { r: t, g: i, b: a } = (0, B.hexToRgb)(e);
                                                    return 'linear-gradient(180.14deg, rgba('
                                                        .concat(t, ', ')
                                                        .concat(i, ', ')
                                                        .concat(a, ', 0) 30.88%, rgba(')
                                                        .concat(t, ', ')
                                                        .concat(i, ', ')
                                                        .concat(a, ', 0.4) 70.8%, rgba(')
                                                        .concat(t, ', ')
                                                        .concat(i, ', ')
                                                        .concat(a, ', 0.9) 80.88%)');
                                                })(null == s ? void 0 : s.averageColor),
                                            },
                                        }),
                                    ],
                                }),
                                (0, o.jsx)(P.N, { className: sN().fade, 'aria-label': null == m ? void 0 : m.name, href: null == m ? void 0 : m.url, onClick: U }),
                                (0, o.jsx)(A.i, {
                                    className: sN().artists,
                                    lineClamp: 2,
                                    artists: null == s ? void 0 : s.artists,
                                    linkClassName: sN().artistLink,
                                    captionClassName: sN().artistCaption,
                                    variant: 'breakWord',
                                }),
                            ],
                        }),
                        (0, o.jsx)(er, {
                            className: sN().card,
                            album: s,
                            albumUrl: s.url,
                            from: M,
                            utmLink: D,
                            trailerButton: z,
                            description: H,
                            entityName: w,
                            coverColor: c,
                            'data-test-id': p.Kq.newRelease.NEW_RELEASE_CARD,
                        }),
                    ],
                });
            });
            var sS = i(48293),
                sf = i.n(sS);
            let sL = (0, m.PA)((e) => {
                    let {
                            forwardRef: t,
                            isShimmerActive: i,
                            isShimmerVisible: a,
                            containerClassName: s,
                            headerClassName: r,
                            meta: m,
                            data: _,
                            headingVariant: u,
                            className: p,
                            ...b
                        } = e,
                        { objectsCount: v } = (0, e6.N)(),
                        h = (0, l.useId)(),
                        x = (0, l.useRef)(null),
                        { theme: C } = (0, iS.W)(),
                        A = (0, l.useMemo)(
                            () =>
                                a
                                    ? ((e) =>
                                          Array.from({ length: 6 }, (t, i) =>
                                              (0, o.jsxs)(
                                                  'div',
                                                  {
                                                      children: [
                                                          (0, o.jsx)(tR.W, { isActive: e, radius: 'round', className: sf().shimmerImage }),
                                                          (0, o.jsx)(tR.W, { isActive: e, radius: 'l', className: sf().shimmerCard }),
                                                      ],
                                                  },
                                                  i,
                                              ),
                                          ))(i)
                                    : null == _
                                      ? void 0
                                      : _.items.map((e, t) => {
                                            let i = e.coverUriWithPlaceholder(C);
                                            return (0, o.jsx)(
                                                c.B,
                                                {
                                                    objectType: n.DomainObjectType.Album,
                                                    objectId: String(e.album.id),
                                                    objectPosX: t + 1,
                                                    objectPosY: 1,
                                                    objectsCount: _.items.length,
                                                    children: (0, o.jsx)(sI, { ...e, coverUri: i }),
                                                },
                                                e.album.id,
                                            );
                                        }),
                            [null == _ ? void 0 : _.items, i, a, C],
                        );
                    return (0, o.jsxs)('section', {
                        ref: t,
                        className: (0, d.$)(sf().root, p),
                        ...(0, B.getDataAttrFromProps)(b),
                        children: [
                            (0, o.jsx)(c.B, {
                                objectType: n.DomainObjectType.Shortcut,
                                objectId: String(m.viewAllActionLink),
                                objectPosX: 0,
                                objectPosY: 0,
                                objectsCount: null != v ? v : 0,
                                children: (0, o.jsx)(U.T, {
                                    className: r,
                                    labeledForId: h,
                                    title: m.title,
                                    viewAllActionLink: m.viewAllActionLink,
                                    controls: (0, o.jsx)(W.X, { className: sf().controls, carouselRef: x }),
                                    headingVariant: u,
                                }),
                            }),
                            (0, o.jsx)(V.F, { ref: x, itemClassName: (0, d.$)(sf().item, sf().important), className: s, 'aria-labelledby': h, children: A }),
                        ],
                    });
                }),
                sg = (0, l.forwardRef)((e, t) => (0, o.jsx)(sL, { forwardRef: t, ...e })),
                sy = (e) => {
                    let {
                        forwardRef: t,
                        isShimmerVisible: i,
                        isShimmerActive: a,
                        containerClassName: s,
                        headerClassName: r,
                        meta: l,
                        data: d,
                        headingVariant: m,
                        className: _,
                        ...u
                    } = e;
                    return (0, o.jsx)(e0.O, {
                        className: _,
                        ...u,
                        isShimmerVisible: i,
                        isShimmerActive: a,
                        headerClassName: r,
                        containerClassName: s,
                        title: l.title,
                        description: l.description,
                        viewAllActionLink: l.viewAllActionLink,
                        ref: t,
                        headingVariant: m,
                        children:
                            null == d
                                ? void 0
                                : d.items.map((e, t) =>
                                      (0, o.jsx)(
                                          c.B,
                                          {
                                              objectType: n.DomainObjectType.Album,
                                              objectId: String(e.id),
                                              objectPosX: t + 1,
                                              objectPosY: 1,
                                              objectsCount: d.items.length,
                                              children: (0, o.jsx)(eB.a, { album: e, contentLinesCount: 3, withLikesCount: !0, withChart: !0, withAddition: !1 }),
                                          },
                                          e.id,
                                      ),
                                  ),
                    });
                },
                sR = (0, l.forwardRef)((e, t) => (0, o.jsx)(sy, { forwardRef: t, ...e })),
                sk = (e) => {
                    let {
                        forwardRef: t,
                        isShimmerVisible: i,
                        isShimmerActive: a,
                        containerClassName: s,
                        headerClassName: r,
                        meta: l,
                        data: d,
                        headingVariant: m,
                        className: _,
                        ...u
                    } = e;
                    return (0, o.jsx)(e0.O, {
                        className: _,
                        ...u,
                        isShimmerVisible: i,
                        isShimmerActive: a,
                        headerClassName: r,
                        containerClassName: s,
                        title: l.title,
                        description: l.description,
                        viewAllActionLink: l.viewAllActionLink,
                        ref: t,
                        headingVariant: m,
                        children:
                            null == d
                                ? void 0
                                : d.items.map((e, t) =>
                                      e.type === e8._.NON_MUSIC_ALBUM_ITEM
                                          ? (0, o.jsx)(
                                                c.B,
                                                {
                                                    objectType: n.DomainObjectType.Album,
                                                    objectId: String(e.data.id),
                                                    objectPosX: t + 1,
                                                    objectPosY: 1,
                                                    objectsCount: d.items.length,
                                                    children: (0, o.jsx)(eB.a, { album: e.data, contentLinesCount: 3, withLikesCount: !0 }),
                                                },
                                                e.data.id,
                                            )
                                          : (0, o.jsx)(
                                                c.B,
                                                {
                                                    objectType: n.DomainObjectType.Playlist,
                                                    objectId: String(e.data.id),
                                                    objectPosX: t + 1,
                                                    objectPosY: 1,
                                                    objectsCount: d.items.length,
                                                    children: (0, o.jsx)(tK.B, { playlist: e.data, contentLinesCount: 3 }),
                                                },
                                                e.data.id,
                                            ),
                                  ),
                    });
                },
                sE = (0, l.forwardRef)((e, t) => (0, o.jsx)(sk, { forwardRef: t, ...e }));
            var sP = i(29001),
                sw = i(91693),
                sO = i.n(sw);
            let sM = (e) => {
                    let { forwardRef: t, containerClassName: i, id: a, meta: s, ...r } = e,
                        { formatMessage: l } = (0, _.A)();
                    return (0, o.jsx)('section', {
                        ref: t,
                        className: (0, d.$)(sO().root, i),
                        ...(0, B.getDataAttrFromProps)(r),
                        children: (0, o.jsx)(
                            c.B,
                            {
                                objectType: n.DomainObjectType.Text,
                                objectId: a,
                                objectPosX: 1,
                                objectPosY: 1,
                                objectsCount: 1,
                                children: (0, o.jsx)(sP.F, { textButton: l({ id: 'interface-actions.further' }), meta: s }),
                            },
                            a,
                        ),
                    });
                },
                sD = (0, l.forwardRef)((e, t) => (0, o.jsx)(sM, { forwardRef: t, ...e })),
                sB = (e) => {
                    let {
                        forwardRef: t,
                        isShimmerVisible: i,
                        isShimmerActive: a,
                        containerClassName: s,
                        headerClassName: r,
                        meta: l,
                        data: d,
                        headingVariant: m,
                        className: _,
                        ...u
                    } = e;
                    return (0, o.jsx)(e0.O, {
                        className: _,
                        ...u,
                        isShimmerVisible: i,
                        isShimmerActive: a,
                        headerClassName: r,
                        containerClassName: s,
                        title: l.title,
                        description: l.description,
                        viewAllActionLink: l.viewAllActionLink,
                        ref: t,
                        headingVariant: m,
                        children:
                            null == d
                                ? void 0
                                : d.items.map((e, t) =>
                                      (0, o.jsx)(
                                          c.B,
                                          {
                                              objectType: n.DomainObjectType.Playlist,
                                              objectId: e.data.playlist.id,
                                              objectPosX: t + 1,
                                              objectPosY: 1,
                                              objectsCount: d.items.length,
                                              children: (0, o.jsx)(tK.B, { playlist: e.data.playlist, customDescription: e.data.description, contentLinesCount: 4 }),
                                          },
                                          e.data.playlist.key,
                                      ),
                                  ),
                    });
                },
                sV = (0, l.forwardRef)((e, t) => (0, o.jsx)(sB, { forwardRef: t, ...e }));
            var sU = i(6791),
                sW = i(45447),
                sz = i(94631);
            let sH = (e) => {
                    let { items: t, playlistId: i, playlistUuid: a, from: s, utmLink: r } = e;
                    return t.slice(0, 8).map((e, l) => {
                        let d,
                            { objectPosX: m, objectPosY: _, objectsCount: u } = (0, eC.$)({ index: l, count: t.length }),
                            p =
                                ((d = e.id),
                                {
                                    contextData: { type: b.K.Playlist, meta: { id: i, uuid: a }, from: s, utmLink: r, completeEntitesDataByLoadedMeta: !0 },
                                    queueParams: { index: l, entityId: d },
                                    loadContextMeta: !0,
                                    entitiesData: t.map((e) => (0, sW.l)(e.id, e.albumId ? String(e.albumId) : void 0)),
                                });
                        return (0, o.jsx)(
                            c.B,
                            {
                                objectType: n.DomainObjectType.Track,
                                objectId: e.id,
                                objectPosX: m,
                                objectPosY: _,
                                objectsCount: u,
                                children: e.isTrackNonMusic
                                    ? (0, o.jsx)(sz.K, { track: e, playContextParams: p, withPodcastName: !0, withTimeLeftText: !1 })
                                    : (0, o.jsx)(ey.K, { track: e, playContextParams: p }),
                            },
                            e.id,
                        );
                    });
                },
                sK = { src: '/_next/static/media/heart.602389ae.png' };
            var sY = i(62107),
                sF = i.n(sY);
            let s$ = (0, m.PA)(() => {
                var e, t;
                let { vibe: i, freeAccess: a } = (0, R.g)(),
                    { pageId: s } = (0, id.$)(),
                    { blockIdForFrom: r } = (0, e6.N)(),
                    n = (0, g.Z)(ih.Z.main.href),
                    { formatMessage: c } = (0, _.A)(),
                    d = c({ id: 'vibe-actions.play-vibe' }),
                    { isPlaying: m, togglePlay: b } = (0, tj.B)({
                        seeds: null != (t = null == (e = i.meta) ? void 0 : e.seeds) ? t : [],
                        pageIdForFrom: s,
                        blockIdForFrom: r,
                    });
                (0, l.useEffect)(
                    () => () => {
                        i.reset();
                    },
                    [i],
                );
                let v = (0, l.useCallback)(() => {
                        a.isVibeStartRestricted || (m || b(), n());
                    }, [a.isVibeStartRestricted, m, n, b]),
                    h = (0, l.useCallback)(
                        () =>
                            (0, o.jsx)(ah.$, {
                                withRipple: !0,
                                radius: 'xxxl',
                                size: 'l',
                                color: 'primary',
                                className: sF().myWaveButton,
                                'aria-label': d,
                                onClick: v,
                                'data-test-id': p.e8.landing.COLLECTION_PLAYLIST_WITH_LIKES_EMPTY_BLOCK_MY_VIBE_BUTTON,
                                children: (0, o.jsx)(x.HL, {
                                    variant: 'span',
                                    size: 'm',
                                    children: (0, o.jsx)(x.HL, { variant: 'span', size: 'm', weight: 'medium', className: sF().myWaveButtonText, children: d }),
                                }),
                            }),
                        [d, v],
                    );
                return (
                    i.isNeededToLoad && (0, l.use)(i.getLastVibe()),
                    (0, o.jsxs)('div', {
                        className: sF().root,
                        'data-test-id': p.e8.landing.COLLECTION_PLAYLIST_WITH_LIKES_EMPTY_BLOCK,
                        children: [
                            (0, o.jsx)(th._V, { src: sK.src, className: sF().image, 'data-test-id': p.e8.landing.COLLECTION_PLAYLIST_WITH_LIKES_EMPTY_BLOCK_IMAGE }),
                            (0, o.jsx)(x.DZ, {
                                variant: 'h3',
                                size: 'xs',
                                className: sF().header,
                                'data-test-id': p.e8.landing.COLLECTION_PLAYLIST_WITH_LIKES_EMPTY_BLOCK_TITLE,
                                children: (0, o.jsx)(u.A, { id: 'collection.empty-liked-tracks-title' }),
                            }),
                            (0, o.jsx)(x.HL, {
                                variant: 'div',
                                size: 'l',
                                weight: 'normal',
                                className: sF().text,
                                'data-test-id': p.e8.landing.COLLECTION_PLAYLIST_WITH_LIKES_EMPTY_BLOCK_TEXT,
                                children: (0, o.jsx)(u.A, { id: 'collection.empty-liked-tracks-text' }),
                            }),
                            (0, o.jsx)(tT.S, { isEnabled: a.isVibeStartRestricted, placement: 'top', textVariant: 'vibe', renderChildren: h }),
                        ],
                    })
                );
            });
            var sX = i(6943),
                sG = i.n(sX);
            let sQ = (0, m.PA)((e) => {
                    let {
                            forwardRef: t,
                            isShimmerVisible: i,
                            isShimmerActive: a,
                            tracksContainerClassName: s,
                            headerClassName: c,
                            meta: m,
                            data: p,
                            type: v,
                            headingVariant: h,
                            className: x,
                            ...C
                        } = e,
                        { from: A, utmLink: j } = (0, S.f)({ contextId: null == p ? void 0 : p.playlist.id, contextType: b.K.Playlist }),
                        {
                            trailer: T,
                            settings: { isMobile: N },
                        } = (0, R.g)(),
                        I = (0, sx.F)(),
                        { formatMessage: f } = (0, _.A)(),
                        L = (0, e$.i)({ playlistId: null == p ? void 0 : p.playlist.id }),
                        g = (null == p ? void 0 : p.totalItemsCount)
                            ? f({ id: 'entity-names.number-of-tracks' }, { counter: null == p ? void 0 : p.totalItemsCount })
                            : m.description,
                        y = [r.t.COLLECTION_PLAYLIST_WITH_LIKES, r.t.SMART_OPEN_PLAYLIST].includes(v),
                        k = m.coverStyle !== sU.z.NONE,
                        E = (0, l.useCallback)(() => {
                            (null == p ? void 0 : p.playlist.id) &&
                                (T.setUtmLink(j), T.openPlaylistTrailer(null == p ? void 0 : p.playlist.id), I(n.DomainObjectType.Playlist, String(p.playlist.id)));
                        }, [T, null == p ? void 0 : p.playlist.id, I, j]),
                        P = (0, l.useMemo)(() => {
                            if (null == p ? void 0 : p.withRewindTrailerButton)
                                return N
                                    ? (0, o.jsx)(sC.k, { className: sG().trailer, radius: 'round', size: 's', iconSize: 'xs', onClick: E })
                                    : (0, o.jsx)(sC.k, {
                                          size: 's',
                                          radius: 'xxxl',
                                          iconSize: 'xxs',
                                          className: sG().trailer,
                                          onClick: E,
                                          children: (0, o.jsx)(u.A, { id: 'entity-names.trailer' }),
                                      });
                        }, [null == p ? void 0 : p.withRewindTrailerButton, N, E]);
                    return (null == p ? void 0 : p.playlist.isFavouritePlaylist) &&
                        (null == p ? void 0 : p.totalItemsCount) === 0 &&
                        (null == p ? void 0 : p.canShowEmptyBlock)
                        ? (0, o.jsx)(s$, {})
                        : (0, o.jsx)(eF._, {
                              sourceContextData: L,
                              children: (0, o.jsx)(ek.$, {
                                  isShimmerActive: a,
                                  shimmer: (0, o.jsx)(eE.D, { variant: eR.X.PLAYLIST, isActive: a }),
                                  maxColumnsCount: ek.D.TWO,
                                  itemsCountPerColumn: 4,
                                  className: (0, d.$)(sG().root, x),
                                  isShimmerVisible: i,
                                  blockHeaderClassName: c,
                                  carouselClassName: s,
                                  blockHeaderTitle: m.title,
                                  blockHeaderCoverUrl: null == p ? void 0 : p.getCoverUri(m.coverStyle),
                                  blockHeaderDescription: g,
                                  viewAllActionLink: null == p ? void 0 : p.playlist.url,
                                  ref: t,
                                  blockHeaderHeadingVariant: h,
                                  additionalControl: P,
                                  withBlockHeaderDescription: y,
                                  withBlockHeaderCover: k,
                                  ...C,
                                  children:
                                      (null == p ? void 0 : p.items) &&
                                      sH({ items: p.items, playlistId: p.playlist.id, playlistUuid: p.playlist.uuid, from: A, utmLink: j }),
                              }),
                          });
                }),
                sq = (0, l.forwardRef)((e, t) => (0, o.jsx)(sQ, { forwardRef: t, ...e }));
            var sZ = i(32369),
                sJ = i(19875),
                s0 = i(85819),
                s1 = i.n(s0);
            let s2 = (0, m.PA)((e) => {
                    var t, i;
                    let {
                            forwardRef: a,
                            isShimmerVisible: s,
                            isShimmerActive: r,
                            tracksContainerClassName: n,
                            headerClassName: c,
                            meta: d,
                            data: m,
                            headingVariant: u,
                            className: p,
                            ...h
                        } = e,
                        { formatMessage: x } = (0, _.A)(),
                        { from: C, utmLink: A } = (0, S.f)({ contextId: null == m ? void 0 : m.playlist.id, contextType: b.K.Playlist }),
                        j = (0, e$.i)({ playlistId: null == m ? void 0 : m.playlist.id, filter: null == m ? void 0 : m.filters.activeFilter }),
                        T = (0, e7.zb)((null == m ? void 0 : m.filters.activeFilterIndex) || 0),
                        N = (0, l.useRef)(null),
                        I = (0, sJ.$)(),
                        f = (null == m ? void 0 : m.totalItemsCount) ? x({ id: 'entity-names.number-of-tracks' }, { counter: m.totalItemsCount }) : d.description,
                        L = (0, v.c)((e) => {
                            var t;
                            if (!T.onTabChange || e === T.value || !m) return;
                            (setTimeout(() => {
                                var t, i, a;
                                null == (a = N.current) || null == (i = a.children[e]) || null == (t = i.focus) || t.call(i);
                            }),
                                T.onTabChange(e));
                            let i = null == (t = m.filters.items) ? void 0 : t[e];
                            i && (m.handleFilterClick(i), I({ tabId: i.id, tabPos: e + 1 }));
                        });
                    if (((null == m ? void 0 : m.playlistLoading.isNeededToLoad) && (0, l.use)(m.getPlaylist()), null == m ? void 0 : m.shouldShowEmptyPlaylist))
                        return (0, o.jsx)(s$, {});
                    let g = r || !!(null == m ? void 0 : m.isLoading),
                        y = s || !!(null == m ? void 0 : m.isLoading) || !!(null == m ? void 0 : m.isRejected),
                        R = m && 0 === m.items.length,
                        k = !!(null == m || null == (t = m.filters.items) ? void 0 : t.length),
                        E = !m || (null == m ? void 0 : m.isLoading) || (null == m || null == (i = m.filters) ? void 0 : i.isShimmerVisible) || R || k,
                        P = (0, eD.L)(() => {
                            var e, t, i, a;
                            if (E)
                                return (0, o.jsx)(sZ.A, {
                                    className: s1().filters,
                                    tabsState: T,
                                    handleFilterClick: L,
                                    ref: N,
                                    items: null != (a = null == m || null == (e = m.filters) ? void 0 : e.items) ? a : void 0,
                                    isShimmerVisible: null == m || null == (t = m.filters) ? void 0 : t.isShimmerVisible,
                                    isShimmerActive: null == m || null == (i = m.filters) ? void 0 : i.isLoading,
                                    skipSearchCheck: !0,
                                    shimmerClassName: s1().shimmer,
                                });
                        });
                    return (0, o.jsx)(eF._, {
                        sourceContextData: j,
                        children: (0, o.jsx)(ek.$, {
                            isShimmerActive: g,
                            shimmer: (0, o.jsx)(eE.D, { variant: eR.X.PLAYLIST, isActive: g }),
                            maxColumnsCount: ek.D.TWO,
                            itemsCountPerColumn: 4,
                            className: p,
                            isShimmerVisible: s,
                            isColumnsShimmerVisible: y,
                            isHeaderWithoutControls: !0,
                            blockHeaderClassName: c,
                            carouselClassName: n,
                            blockHeaderTitle: d.title,
                            blockHeaderCoverUrl: d.coverUri,
                            blockHeaderDescription: f,
                            viewAllActionLink: null == m ? void 0 : m.playlist.url,
                            ref: a,
                            blockHeaderHeadingVariant: u,
                            withBlockHeaderDescription: !0,
                            withBlockHeaderCover: d.coverStyle !== sU.z.NONE,
                            beforeCarousel: P,
                            ...h,
                            children:
                                (null == m ? void 0 : m.items) && sH({ items: m.items, playlistId: m.playlist.id, playlistUuid: m.playlist.uuid, from: C, utmLink: A }),
                        }),
                    });
                }),
                s3 = (0, l.forwardRef)((e, t) => (0, o.jsx)(s2, { forwardRef: t, ...e }));
            var s9 = i(48454),
                s4 = i(3417),
                s8 = i.n(s4);
            let s7 = (e) => {
                let { promotion: t } = e,
                    { ref: i, intersectionPropertyId: a } = (0, I.n)(),
                    s = (0, T.N)(),
                    { experiments: r } = (0, R.g)(),
                    c = r.checkExperiment(eA.z.WebNextErids, 'on'),
                    { advDisclaimer: m } = t,
                    [_, b] = (0, l.useState)(!1),
                    v = (0, l.useCallback)(() => {
                        s({ to: n.AppScreen.Link });
                    }, [s]);
                return (0, o.jsxs)('div', {
                    className: (0, d.$)(s8().root, s8().card),
                    ref: i,
                    'data-intersection-property-id': a,
                    'data-test-id': p.e8.landing.EDITORIAL_PROMOTIONS_CARD,
                    children: [
                        (0, o.jsxs)('div', {
                            className: s8().meta,
                            children: [
                                (0, o.jsx)(P.N, {
                                    className: s8().titleLink,
                                    href: t.weblink,
                                    onClick: v,
                                    children: (0, o.jsx)(x.HL, { variant: 'div', lineClamp: 1, type: 'entity', size: 's', weight: 'medium', children: t.title }),
                                }),
                                (0, o.jsx)(x.HL, {
                                    className: s8().subtitle,
                                    variant: 'div',
                                    lineClamp: 1,
                                    type: 'entity',
                                    size: 's',
                                    weight: 'medium',
                                    children: t.subtitle,
                                }),
                            ],
                        }),
                        (0, o.jsxs)('div', {
                            className: s8().coverWrapper,
                            children: [
                                (0, o.jsx)(P.N, {
                                    className: s8().coverLink,
                                    href: t.weblink,
                                    onClick: v,
                                    'aria-hidden': !0,
                                    tabIndex: -1,
                                    children: (0, o.jsx)(h.t, {
                                        className: s8().cover,
                                        radius: 'm',
                                        withShadow: !0,
                                        children: (0, o.jsx)(th._V, {
                                            className: s8().image,
                                            src: t.imageUrl,
                                            alt: t.title,
                                            withAvatarReplace: !0,
                                            withAspectRatio: !0,
                                            size: 400,
                                            fit: 'cover',
                                        }),
                                    }),
                                }),
                                c &&
                                    m &&
                                    (0, o.jsx)('div', {
                                        className: s8().advDisclaimer,
                                        children: (0, o.jsxs)(s9.AM, {
                                            placement: 'top-end',
                                            open: _,
                                            onOpenChange: b,
                                            offsetOptions: 8,
                                            transform: !1,
                                            children: [
                                                (0, o.jsxs)(ah.$, {
                                                    variant: 'text',
                                                    color: 'secondary',
                                                    withHover: !1,
                                                    withRipple: !1,
                                                    className: s8().advDisclaimerTrigger,
                                                    'data-test-id': p.e8.landing.EDITORIAL_PROMOTIONS_ADV_DISCLAIMER_TRIGGER_BUTTON,
                                                    children: [(0, o.jsx)(u.A, { id: 'ads.ad' }), (0, o.jsx)(ie.I, { variant: 'moreOutlined', size: 'xxxs' })],
                                                }),
                                                (0, o.jsx)(s9.hl, {
                                                    className: s8().advDisclaimerPopover,
                                                    children: (0, o.jsx)(x.HL, {
                                                        className: s8().advDisclaimerText,
                                                        variant: 'p',
                                                        type: 'text',
                                                        size: 'xs',
                                                        weight: 'medium',
                                                        'data-test-id': p.e8.landing.EDITORIAL_PROMOTIONS_ADV_DISCLAIMER_TEXT,
                                                        children: m,
                                                    }),
                                                }),
                                            ],
                                        }),
                                    }),
                            ],
                        }),
                    ],
                });
            };
            var s6 = i(15047),
                s5 = i.n(s6),
                re = i(57762),
                rt = i.n(re);
            let ri = (e) => {
                    let { isActive: t, withHeadingShimmer: i } = e;
                    return (0, o.jsxs)('div', {
                        className: rt().root,
                        children: [
                            (0, o.jsx)(tR.W, { isActive: t, className: rt().cover, radius: 'l' }),
                            (0, o.jsxs)('div', {
                                className: rt().meta,
                                children: [
                                    i && (0, o.jsx)(tR.W, { isActive: t, className: rt().heading, radius: 's' }),
                                    (0, o.jsx)(tR.W, { isActive: t, className: rt().title, radius: 's' }),
                                    (0, o.jsx)(tR.W, { isActive: t, className: rt().subtitle, radius: 's' }),
                                ],
                            }),
                        ],
                    });
                },
                ra = (e) => {
                    let {
                            forwardRef: t,
                            isShimmerVisible: i,
                            isShimmerActive: a,
                            data: s,
                            meta: r,
                            containerClassName: m,
                            headerClassName: _,
                            headingVariant: u,
                            className: b,
                            ...v
                        } = e,
                        h = (0, l.useId)(),
                        x = (0, l.useRef)(null),
                        C = (0, l.useMemo)(() => {
                            if (i) return Array.from({ length: 6 }, (e, t) => (0, o.jsx)(ri, { isActive: a, withHeadingShimmer: !0 }, t));
                            return null == s
                                ? void 0
                                : s.items.map((e, t) =>
                                      (0, o.jsx)(
                                          c.B,
                                          {
                                              objectType: n.DomainObjectType.Feature,
                                              objectId: e.featureId,
                                              objectPosX: t + 1,
                                              objectPosY: 1,
                                              objectsCount: s.items.length,
                                              children: (0, o.jsx)(s7, { promotion: e }),
                                          },
                                          e.featureId,
                                      ),
                                  );
                        }, [null == s ? void 0 : s.items, a, i]);
                    return (0, o.jsxs)('section', {
                        className: (0, d.$)(s5().root, b),
                        ref: t,
                        ...(0, B.getDataAttrFromProps)(v),
                        'data-test-id': p.e8.landing.EDITORIAL_PROMOTIONS,
                        children: [
                            (0, o.jsx)(U.T, {
                                className: _,
                                labeledForId: h,
                                title: r.title,
                                controls: (0, o.jsx)(W.X, { className: s5().controls, carouselRef: x }),
                                headingVariant: u,
                            }),
                            (0, o.jsx)(V.F, { className: m, ref: x, itemClassName: (0, d.$)(s5().item, s5().important), 'aria-labelledby': h, children: C }),
                        ],
                    });
                },
                rs = (0, l.forwardRef)((e, t) => (0, o.jsx)(ra, { forwardRef: t, ...e }));
            var rr = i(86806),
                ro = i(71906),
                rl = i(49750),
                rn = i(3107),
                rc = i(25629),
                rd = i(12350),
                rm = i(14257),
                r_ = i(18896),
                ru = i.n(r_);
            let rp = (0, m.PA)((e) => {
                var t, i;
                let { isLoading: a, onRefetch: s, onStartLoading: r } = e,
                    { lumen: l } = (0, R.g)(),
                    { theme: c } = (0, iS.W)(),
                    { awakeLumenModal: m, requestAwakeLumenModal: u } = (0, rn.z)(),
                    b = (0, T.N)(),
                    h = (0, rd.m)(),
                    { formatMessage: x } = (0, _.A)(),
                    C = null != c ? c : rm.S.Dark,
                    A = l.getFallbackImage(),
                    j = l.isEnabled && null != (i = null == (t = l.themes) ? void 0 : t[C].uri) ? i : A[C],
                    N = l.isEnabled && !l.isAwakened,
                    I = l.isEnabled && l.isAwakened,
                    S = (0, v.c)(() => {
                        (b({ to: n.AppScreen.LumenAwakeningScreen, objectId: '', objectType: n.DomainObjectType.LumenUnawakened }), u(() => void 0));
                    }),
                    f = (0, v.c)(() => {
                        a || (h({ actionType: n.ActionType.Refresh, userInteractionType: n.UserInteractionType.Tap }), r(), s());
                    }),
                    L = (0, o.jsxs)(o.Fragment, {
                        children: [
                            (0, o.jsx)(rc.e, { className: ru().haze }),
                            (0, o.jsx)(th._V, {
                                alt: '',
                                className: (0, d.$)(ru().image, ru().imageBlurred),
                                src: j,
                                fit: 'cover',
                                draggable: !1,
                                withAvatarReplace: !0,
                                withFallback: !1,
                                withLoadingIndicator: !1,
                            }),
                            (0, o.jsx)(th._V, {
                                alt: '',
                                className: ru().image,
                                src: j,
                                fit: 'cover',
                                draggable: !1,
                                withAvatarReplace: !0,
                                withFallback: !1,
                                withLoadingIndicator: !1,
                            }),
                        ],
                    }),
                    g = (0, eD.L)(() =>
                        N
                            ? (0, o.jsx)('button', {
                                  type: 'button',
                                  className: (0, d.$)(ru().root, ru().root_clickable),
                                  onClick: S,
                                  'data-test-id': p.e8.landing.Q2V_AWAKE_LUMEN_BUTTON,
                                  children: L,
                              })
                            : I
                              ? (0, o.jsx)('button', {
                                    type: 'button',
                                    className: (0, d.$)(ru().root, ru().root_clickable),
                                    disabled: a,
                                    'aria-label': x({ id: 'interface-actions.reload-part-page' }),
                                    onClick: f,
                                    'data-test-id': p.e8.landing.Q2V_REFETCH_SUGGESTIONS_BUTTON,
                                    children: L,
                                })
                              : (0, o.jsx)('div', { className: ru().root, 'aria-hidden': !0, children: L }),
                    );
                return (0, o.jsxs)(o.Fragment, { children: [m, g] });
            });
            !(function (e) {
                ((e.VIEW = 'VIEW'), (e.CLICK = 'CLICK'));
            })(s || (s = {}));
            var rb = i(12989),
                rv = i(97470),
                rh = i.n(rv);
            let rx = (e) => {
                let { handleFeedBack: t, onSelect: i, position: a, query: r, suggestionsRequestId: l } = e,
                    c = (0, rb.D)(),
                    d = (0, rd.m)(),
                    m = (0, v.c)((e, i) => {
                        (c(e, null != i ? i : ''), e && t({ type: s.VIEW, query: r, suggestionsRequestId: l, position: a }));
                    }),
                    { ref: _, intersectionPropertyId: u } = (0, I.n)({ callback: m }),
                    b = (0, v.c)(() => {
                        (d({ actionType: n.ActionType.SearchItemSelected, userInteractionType: n.UserInteractionType.Tap }),
                            t({ type: s.CLICK, query: r, suggestionsRequestId: l, position: a }),
                            null == i || i(r));
                    });
                return (0, o.jsx)('button', {
                    ref: _,
                    className: rh().root,
                    'data-intersection-property-id': u,
                    'data-test-id': p.e8.landing.Q2V_SUGGESTION_BUTTON,
                    type: 'button',
                    onClick: b,
                    children: (0, o.jsx)(x.HL, { className: rh().text, size: 'm', weight: 'medium', variant: 'span', type: 'text', lineClamp: 2, children: r }),
                });
            };
            var rC = i(82359),
                rA = i.n(rC);
            let rj = (0, m.PA)((e) => {
                    let {
                            forwardRef: t,
                            data: i,
                            className: a,
                            containerClassName: s,
                            isShimmerVisible: r,
                            isShimmerActive: m,
                            setIsNeededToLoad: _,
                            onRefetch: p,
                            ...b
                        } = e,
                        v = (0, rl.u)(),
                        {
                            search: h,
                            settings: { isMobile: C },
                        } = (0, R.g)(),
                        A = (0, l.useRef)(null),
                        { shouldBackwardButtonBeDisabled: j, shouldForwardButtonBeDisabled: T, shouldHideControls: N } = (0, av.Y)(A),
                        { state: I, handleDebouncedToggle: S } = (0, rr.F)({ delay: 1500, throttleTimeout: 0 });
                    ((0, l.useEffect)(() => {
                        r && m && S();
                    }, [m, r, S]),
                        (0, l.useEffect)(
                            () => () => {
                                h.sendQ2vSuggestionFeedbacks();
                            },
                            [null == i ? void 0 : i.suggestionsRequestId, h],
                        ));
                    let f = m || I,
                        L = (0, eD.L)(() =>
                            f
                                ? (0, o.jsx)(x.HL, {
                                      className: rA().loadingText,
                                      size: 'm',
                                      weight: 'medium',
                                      variant: 'span',
                                      type: 'text',
                                      children: (0, o.jsx)(u.A, { id: 'search.q2v-suggestions-loading' }),
                                  })
                                : (0, o.jsxs)('div', {
                                      className: (0, d.$)(rA().carouselWithArrows, {
                                          [rA().carouselWithArrows_arrowLeft_hidden]: j,
                                          [rA().carouselWithArrows_arrowRight_hidden]: T,
                                          [rA().carouselWithArrows_arrow_hidden]: N,
                                      }),
                                      children: [
                                          (0, o.jsx)(V.F, {
                                              ref: A,
                                              className: rA().carousel,
                                              itemClassName: rA().item,
                                              children:
                                                  null == i
                                                      ? void 0
                                                      : i.items.map((e, t) => {
                                                            let { query: a } = e;
                                                            return (0, o.jsx)(
                                                                c.B,
                                                                {
                                                                    objectType: n.DomainObjectType.SearchItem,
                                                                    objectId: a,
                                                                    objectPosX: t + 1,
                                                                    objectPosY: 1,
                                                                    objectsCount: i.items.length,
                                                                    children: (0, o.jsx)(rx, {
                                                                        query: a,
                                                                        position: t,
                                                                        suggestionsRequestId: i.suggestionsRequestId,
                                                                        handleFeedBack: h.addQ2vSuggestionFeedback,
                                                                        onSelect: null != v ? v : void 0,
                                                                    }),
                                                                },
                                                                a,
                                                            );
                                                        }),
                                          }),
                                          !C && (0, o.jsx)(W.X, { className: rA().controls, carouselRef: A }),
                                      ],
                                  }),
                        ),
                        g = { '--q2v-accent-color': ro.R };
                    return (0, o.jsxs)('div', {
                        ref: t,
                        className: (0, d.$)(rA().root, s, a),
                        style: g,
                        ...(0, B.getDataAttrFromProps)(b),
                        children: [
                            (0, o.jsx)(c.B, {
                                objectType: n.DomainObjectType.Lumen,
                                objectId: '',
                                objectPosX: 0,
                                objectPosY: 1,
                                objectsCount: 1,
                                children: (0, o.jsx)(rp, { isLoading: f, onRefetch: null != p ? p : _, onStartLoading: S }),
                            }),
                            L,
                        ],
                    });
                }),
                rT = (0, l.forwardRef)((e, t) => (0, o.jsx)(rj, { forwardRef: t, ...e })),
                rN = (e) => {
                    let {
                        forwardRef: t,
                        isShimmerVisible: i,
                        isShimmerActive: a,
                        containerClassName: s,
                        headerClassName: r,
                        meta: l,
                        data: d,
                        headingVariant: m,
                        className: _,
                        ...u
                    } = e;
                    return (0, o.jsx)(e0.O, {
                        className: _,
                        ...u,
                        isShimmerVisible: i,
                        isShimmerActive: a,
                        headerClassName: r,
                        containerClassName: s,
                        title: l.title,
                        description: l.description,
                        viewAllActionLink: l.viewAllActionLink,
                        ref: t,
                        headingVariant: m,
                        children:
                            null == d
                                ? void 0
                                : d.items.map((e, t) => {
                                      switch (e.type) {
                                          case e8._.ALBUM_ITEM:
                                              return (0, o.jsx)(
                                                  c.B,
                                                  {
                                                      objectType: n.DomainObjectType.Album,
                                                      objectId: String(e.data.id),
                                                      objectPosX: t + 1,
                                                      objectPosY: 1,
                                                      objectsCount: d.items.length,
                                                      children: (0, o.jsx)(eB.a, { withLikesCount: !0, album: e.data, contentLinesCount: 3 }),
                                                  },
                                                  e.data.id,
                                              );
                                          case e8._.ARTIST_ITEM:
                                              return (0, o.jsx)(
                                                  c.B,
                                                  {
                                                      objectType: n.DomainObjectType.Artist,
                                                      objectId: e.data.id,
                                                      objectPosX: t + 1,
                                                      objectPosY: 1,
                                                      objectsCount: d.items.length,
                                                      children: (0, o.jsx)(td.a, { artist: e.data, contentLinesCount: 3 }, e.data.id),
                                                  },
                                                  e.data.id,
                                              );
                                          case e8._.PLAYLIST_ITEM:
                                              return (0, o.jsx)(
                                                  c.B,
                                                  {
                                                      objectType: n.DomainObjectType.Playlist,
                                                      objectId: e.data.id,
                                                      objectPosX: t + 1,
                                                      objectPosY: 1,
                                                      objectsCount: d.items.length,
                                                      children: (0, o.jsx)(tK.B, { playlist: e.data, contentLinesCount: 3 }, e.data.id),
                                                  },
                                                  e.data.id,
                                              );
                                      }
                                  }),
                    });
                },
                rI = (0, l.forwardRef)((e, t) => (0, o.jsx)(rN, { forwardRef: t, ...e }));
            var rS = i(88446),
                rf = i(42383),
                rL = i(69675),
                rg = i(50476),
                ry = i(4664),
                rR = i(84427),
                rk = i(40053),
                rE = i(85015),
                rP = i(2755),
                rw = i(20183),
                rO = i(95226),
                rM = i(13424),
                rD = i.n(rM);
            let rB = (e) => {
                let { isActive: t, className: i, ariaLabel: a } = e;
                return (0, o.jsxs)('div', {
                    'aria-label': a,
                    'aria-live': t ? 'polite' : 'off',
                    'aria-busy': t,
                    className: (0, d.$)(rD().root, i),
                    children: [
                        (0, o.jsxs)('div', {
                            className: rD().infoContainer,
                            children: [
                                (0, o.jsx)(tR.W, { isActive: t, className: rD().cover, radius: 's' }),
                                (0, o.jsx)('div', { className: rD().textContainer, children: (0, o.jsx)(tR.W, { isActive: t, className: rD().title, radius: 'l' }) }),
                            ],
                        }),
                        (0, o.jsx)(tR.W, { isActive: t, className: rD().action, radius: 'l' }),
                    ],
                });
            };
            var rV = i(30733),
                rU = i.n(rV);
            let rW = (0, m.PA)((e) => {
                    let {
                            forwardRef: t,
                            isShimmerActive: i,
                            isShimmerVisible: a,
                            data: s,
                            meta: r,
                            isLoaded: m,
                            headerClassName: b,
                            setIsNeededToLoad: v,
                            tracksContainerClassName: h,
                            className: C,
                            ...A
                        } = e,
                        { formatMessage: j } = (0, _.A)(),
                        {
                            search: { history: T },
                        } = (0, R.g)(),
                        N = (0, rR.d)(),
                        I = !(null == s ? void 0 : s.items.length) && m,
                        S = (0, rk.f)(),
                        { awakeLumenModal: f, requestAwakeLumenModal: L } = (0, rn.z)();
                    return ((0, l.useLayoutEffect)(
                        () => (
                            T.shouldUpdateHistory && (v(), T.setShouldUpdateHistory(!1)),
                            () => {
                                (T.hasCleared && v(), T.reset());
                            }
                        ),
                        [T, v],
                    ),
                    I || T.hasCleared)
                        ? (0, o.jsx)('div', {
                              ref: t,
                              className: (0, d.$)(rU().root, rU().fallback),
                              ...(0, B.getDataAttrFromProps)(A),
                              'data-test-id': p.e8.landing.SEARCH_HISTORY_EMPTY,
                              children: (0, o.jsx)(x.HL, {
                                  variant: 'span',
                                  type: 'text',
                                  size: 'l',
                                  weight: 'normal',
                                  children: (0, o.jsx)(u.A, { id: 'search.recent-requests-fallback' }),
                              }),
                          })
                        : (0, o.jsxs)('div', {
                              ref: t,
                              className: rU().root,
                              ...(0, B.getDataAttrFromProps)(A),
                              'data-test-id': p.e8.landing.SEARCH_HISTORY,
                              children: [
                                  f,
                                  (0, o.jsx)(ek.$, {
                                      className: C,
                                      shimmer: (0, o.jsx)(rB, { isActive: i }),
                                      isShimmerActive: i,
                                      isShimmerVisible: a,
                                      itemsCountPerColumn: 5,
                                      maxColumnsCount: ek.D.TWO,
                                      blockHeaderClassName: b,
                                      carouselClassName: (0, d.$)(h, rU().content),
                                      blockHeaderTitle: r.title,
                                      blockHeaderDescription: r.description,
                                      viewAllActionLink: r.viewAllActionLink,
                                      children:
                                          null == s
                                              ? void 0
                                              : s.items.map((e, t) => {
                                                    var i, a;
                                                    let {
                                                        objectPosX: r,
                                                        objectPosY: l,
                                                        objectsCount: d,
                                                    } = (0, eC.$)({ index: t, count: s.items.length, itemsCountPerColumn: 5, showedItemsCountInBlock: 10 });
                                                    switch (e.type) {
                                                        case e8._.NON_MUSIC_ALBUM_ITEM:
                                                        case e8._.ALBUM_ITEM:
                                                            return (0, o.jsx)(
                                                                c.B,
                                                                {
                                                                    objectType: n.DomainObjectType.Album,
                                                                    objectId: String(e.data.id),
                                                                    objectPosX: r,
                                                                    objectPosY: l,
                                                                    objectsCount: d,
                                                                    children: (0, o.jsx)(rS.M, { album: e.data }),
                                                                },
                                                                e.data.getKey(t),
                                                            );
                                                        case e8._.ARTIST_ITEM:
                                                            return (0, o.jsx)(
                                                                c.B,
                                                                {
                                                                    objectType: n.DomainObjectType.Artist,
                                                                    objectId: e.data.id,
                                                                    objectPosX: r,
                                                                    objectPosY: l,
                                                                    objectsCount: d,
                                                                    children: (0, o.jsx)(rf.c, { description: j({ id: 'entity-names.singer' }), artist: e.data }),
                                                                },
                                                                e.data.getKey(t),
                                                            );
                                                        case e8._.TRACK_ITEM:
                                                            return (0, o.jsx)(
                                                                c.B,
                                                                {
                                                                    objectType: n.DomainObjectType.Track,
                                                                    objectId: e.data.id,
                                                                    objectPosX: r,
                                                                    objectPosY: l,
                                                                    objectsCount: d,
                                                                    children: (0, o.jsx)(ry.c, { track: e.data }),
                                                                },
                                                                e.data.getKey(t),
                                                            );
                                                        case e8._.LIKED_PLAYLIST_ITEM:
                                                            return (0, o.jsx)(
                                                                c.B,
                                                                {
                                                                    objectType: n.DomainObjectType.Playlist,
                                                                    objectId: e.data.id,
                                                                    objectPosX: r,
                                                                    objectPosY: l,
                                                                    objectsCount: d,
                                                                    children: (0, o.jsx)(rg.v, { playlist: e.data }),
                                                                },
                                                                e.data.getKey(t),
                                                            );
                                                        case e8._.WAVE_ITEM:
                                                            return (0, o.jsx)(
                                                                c.B,
                                                                {
                                                                    objectType: n.DomainObjectType.Wave,
                                                                    objectId: null != (i = e.data.vibe.seeds[0]) ? i : '',
                                                                    objectPosX: r,
                                                                    objectPosY: l,
                                                                    objectsCount: d,
                                                                    children: (0, o.jsx)(rw.H, {
                                                                        vibe: e.data.vibe,
                                                                        cover: e.data.cover,
                                                                        description: e.data.vibe.getDescription(j({ id: 'entity-names.my-vibe' })),
                                                                    }),
                                                                },
                                                                e.data.vibe.getKey(t),
                                                            );
                                                        case e8._.WAVE_AGENT_ITEM:
                                                            return (0, o.jsx)(
                                                                c.B,
                                                                {
                                                                    objectType: n.DomainObjectType.Wave,
                                                                    objectId: null != (a = e.data.seeds[0]) ? a : '',
                                                                    objectPosX: r,
                                                                    objectPosY: l,
                                                                    objectsCount: d,
                                                                    children: (0, o.jsx)(rw.H, {
                                                                        vibe: e.data,
                                                                        description: e.data.getDescription(j({ id: 'entity-names.my-vibe' })),
                                                                        agentVariant: rE.h.SMALL,
                                                                    }),
                                                                },
                                                                e.data.getKey(t),
                                                            );
                                                        case e8._.CLIP_ITEM:
                                                            if (!N) return null;
                                                            return (0, o.jsx)(rL.N, { clip: e.data }, e.data.clipId);
                                                        case e8._.QUERY_TO_VIBE_ITEM:
                                                            return (
                                                                S &&
                                                                (0, o.jsx)(rO.F, {
                                                                    blockId: n.EntityTypes.Q2vWave,
                                                                    blockType: n.EntityTypes.Q2vWave,
                                                                    blockPosX: 1,
                                                                    blockPosY: 1,
                                                                    objectsCount: 1,
                                                                    children: (0, o.jsx)(
                                                                        c.B,
                                                                        {
                                                                            objectPosX: 1,
                                                                            objectPosY: 1,
                                                                            objectsCount: 1,
                                                                            objectType: n.DomainObjectType.Wave,
                                                                            objectId: e.data.stationId,
                                                                            children: (0, o.jsx)(rP.K, { requestAwakeLumenModal: L, vibe: e.data }),
                                                                        },
                                                                        e.data.getKey(t),
                                                                    ),
                                                                })
                                                            );
                                                        default:
                                                            return null;
                                                    }
                                                }),
                                  }),
                                  m &&
                                      (0, o.jsx)(ah.$, {
                                          onClick: T.clear,
                                          className: rU().button,
                                          radius: 'xxxl',
                                          variant: 'default',
                                          size: 'default',
                                          'data-test-id': p.e8.landing.SEARCH_HISTORY_CLEAR_BUTTON,
                                          children: (0, o.jsx)(u.A, { id: 'search.clear-history' }),
                                      }),
                              ],
                          });
                }),
                rz = (0, l.forwardRef)((e, t) => (0, o.jsx)(rW, { forwardRef: t, ...e }));
            var rH = i(18941),
                rK = i.n(rH);
            let rY = (0, m.PA)((e) => {
                    var t, i, a, s, r, n, c, d, m;
                    let { containerClassName: _, meta: b, data: v, forwardRef: h, headingVariant: C = 'h2', ...A } = e,
                        { experiments: j } = (0, R.g)(),
                        T = (0, g.Z)(null != (m = null == v ? void 0 : v.weblink) ? m : ''),
                        { theme: N } = (0, iS.W)(),
                        I = j.checkExperiment(eA.z.WebNextErids, 'on'),
                        S = null == v ? void 0 : v.advDisclaimer,
                        [f, L] = (0, l.useState)(!1),
                        y =
                            N === rm.S.Light
                                ? null == v || null == (t = v.lightTheme)
                                    ? void 0
                                    : t.imageUrl
                                : null == v || null == (i = v.darkTheme)
                                  ? void 0
                                  : i.imageUrl,
                        k = (0, l.useMemo)(() => {
                            var e, t;
                            return {
                                '--text-color':
                                    N === rm.S.Light
                                        ? null == v || null == (e = v.lightTheme)
                                            ? void 0
                                            : e.textColor
                                        : null == v || null == (t = v.darkTheme)
                                          ? void 0
                                          : t.textColor,
                            };
                        }, [N, null == v || null == (a = v.darkTheme) ? void 0 : a.textColor, null == v || null == (s = v.lightTheme) ? void 0 : s.textColor]),
                        E = (0, l.useMemo)(() => {
                            var e, t, i, a;
                            return {
                                '--button-color':
                                    N === rm.S.Light
                                        ? null == v || null == (e = v.lightTheme)
                                            ? void 0
                                            : e.buttonColor
                                        : null == v || null == (t = v.darkTheme)
                                          ? void 0
                                          : t.buttonColor,
                                '--button-text-color':
                                    N === rm.S.Light
                                        ? null == v || null == (i = v.lightTheme)
                                            ? void 0
                                            : i.buttonTextColor
                                        : null == v || null == (a = v.darkTheme)
                                          ? void 0
                                          : a.buttonTextColor,
                            };
                        }, [
                            N,
                            null == v || null == (r = v.darkTheme) ? void 0 : r.buttonColor,
                            null == v || null == (n = v.lightTheme) ? void 0 : n.buttonColor,
                            null == v || null == (c = v.darkTheme) ? void 0 : c.buttonTextColor,
                            null == v || null == (d = v.lightTheme) ? void 0 : d.buttonTextColor,
                        ]);
                    return (0, o.jsx)('section', {
                        ref: h,
                        title: b.title,
                        className: _,
                        ...(0, B.getDataAttrFromProps)(A),
                        children: (0, o.jsxs)('div', {
                            className: rK().root,
                            children: [
                                (0, o.jsxs)('div', {
                                    className: rK().actions,
                                    children: [
                                        (0, o.jsxs)('div', {
                                            className: rK().textContainer,
                                            children: [
                                                !!(null == v ? void 0 : v.title) &&
                                                    (0, o.jsx)(x.DZ, {
                                                        weight: 'black',
                                                        size: 'xl',
                                                        className: rK().textColor,
                                                        lineClamp: 2,
                                                        variant: C,
                                                        style: k,
                                                        children: null == v ? void 0 : v.title,
                                                    }),
                                                !!(null == v ? void 0 : v.subtitle) &&
                                                    (0, o.jsx)(x.HL, {
                                                        className: rK().textColor,
                                                        variant: 'span',
                                                        type: 'text',
                                                        size: 'l',
                                                        weight: 'medium',
                                                        lineClamp: 2,
                                                        style: k,
                                                        children: null == v ? void 0 : v.subtitle,
                                                    }),
                                            ],
                                        }),
                                        !!(null == v ? void 0 : v.weblink) &&
                                            !!(null == v ? void 0 : v.buttonTitle) &&
                                            (0, o.jsx)(ah.$, {
                                                color: 'primary',
                                                radius: 'xxxl',
                                                className: rK().button,
                                                role: 'link',
                                                onClick: T,
                                                style: E,
                                                children: (0, o.jsx)(x.HL, {
                                                    variant: 'span',
                                                    type: 'controls',
                                                    size: 'm',
                                                    weight: 'medium',
                                                    children: null == v ? void 0 : v.buttonTitle,
                                                }),
                                            }),
                                    ],
                                }),
                                (0, o.jsx)('div', {
                                    className: rK().imageContainer,
                                    children: (0, o.jsx)(th._V, {
                                        src: y || (null == v ? void 0 : v.imageUrl),
                                        withAvatarReplace: !0,
                                        fit: 'cover',
                                        size: 300,
                                        withFallback: !1,
                                        className: rK().image,
                                        withLoadingIndicator: !1,
                                    }),
                                }),
                                I &&
                                    S &&
                                    (0, o.jsx)('div', {
                                        className: rK().advDisclaimer,
                                        children: (0, o.jsxs)(s9.AM, {
                                            placement: 'top-end',
                                            open: f,
                                            onOpenChange: L,
                                            offsetOptions: 8,
                                            transform: !1,
                                            children: [
                                                (0, o.jsxs)(ah.$, {
                                                    variant: 'text',
                                                    color: 'secondary',
                                                    withHover: !1,
                                                    withRipple: !1,
                                                    className: rK().advDisclaimerTrigger,
                                                    'data-test-id': p.e8.landing.SPECIAL_ADV_DISCLAIMER_TRIGGER_BUTTON,
                                                    children: [(0, o.jsx)(u.A, { id: 'ads.ad' }), (0, o.jsx)(ie.I, { variant: 'moreOutlined', size: 'xxxs' })],
                                                }),
                                                (0, o.jsx)(s9.hl, {
                                                    className: rK().advDisclaimerPopover,
                                                    children: (0, o.jsx)(x.HL, {
                                                        className: rK().advDisclaimerText,
                                                        variant: 'p',
                                                        type: 'text',
                                                        size: 'xs',
                                                        weight: 'medium',
                                                        'data-test-id': p.e8.landing.SPECIAL_ADV_DISCLAIMER_TEXT,
                                                        children: S,
                                                    }),
                                                }),
                                            ],
                                        }),
                                    }),
                            ],
                        }),
                    });
                }),
                rF = (0, l.forwardRef)((e, t) => (0, o.jsx)(rY, { forwardRef: t, ...e }));
            var r$ = i(35793),
                rX = i.n(r$);
            let rG = (e) => {
                    let {
                            forwardRef: t,
                            isShimmerVisible: i,
                            isShimmerActive: a,
                            containerClassName: s,
                            headerClassName: r,
                            meta: n,
                            data: c,
                            headingVariant: m,
                            className: _,
                            ...u
                        } = e,
                        p = (0, l.useId)(),
                        b = (0, e7.zb)(0),
                        v = (0, l.useRef)(null),
                        h = (0, l.useId)(),
                        x = (0, l.useMemo)(
                            () =>
                                i
                                    ? (0, o.jsx)(aL, {
                                          isActive: a,
                                          ref: v,
                                          containerClassName: s,
                                          ariaLabelledBy: ''.concat(p, ' ').concat(p, '-description'),
                                          length: 9,
                                      })
                                    : null == c
                                      ? void 0
                                      : c.items.map((e) =>
                                            (0, o.jsx)(
                                                e7.Kp,
                                                {
                                                    name: e.tab.id,
                                                    value: b.value,
                                                    elementId: h,
                                                    children: (0, o.jsx)(af, {
                                                        ref: v,
                                                        containerClassName: s,
                                                        ariaLabelledBy: ''.concat(p, ' ').concat(p, '-description'),
                                                        items: e.data,
                                                    }),
                                                },
                                                e.tab.id,
                                            ),
                                        ),
                            [null == c ? void 0 : c.items, i, a, s, p, b.value, h],
                        );
                    return (0, o.jsxs)('section', {
                        className: (0, d.$)(rX().root, _),
                        ref: t,
                        ...(0, B.getDataAttrFromProps)(u),
                        children: [
                            (0, o.jsx)(U.T, {
                                className: (0, d.$)(r, rX().header, rX().important),
                                title: n.title,
                                description: n.description,
                                labeledForId: p,
                                viewAllActionLink: n.viewAllActionLink,
                                controls: (0, o.jsx)(W.X, { className: rX().controls, carouselRef: v }),
                                headingVariant: m,
                                withDescription: !!n.description,
                            }),
                            (0, o.jsx)(tt.wI, {
                                isShimmerVisible: i,
                                className: (0, d.$)(s, rX().tabCarousel, rX().important),
                                elementId: h,
                                shimmer: (0, o.jsx)(tt.zr, { isActive: a, className: (0, d.$)(s, rX().tabCarousel, rX().important), shimmerClassName: rX().tabShimmer }),
                                'aria-labelledby': p,
                                ...b,
                                children:
                                    null == c
                                        ? void 0
                                        : c.items.map((e) => {
                                              let { tab: t } = e;
                                              return (0, o.jsx)(
                                                  te.o,
                                                  { className: (0, d.$)(rX().tab, rX().important), value: t.id, 'aria-label': t.title, title: t.title },
                                                  t.id,
                                              );
                                          }),
                            }),
                            x,
                        ],
                    });
                },
                rQ = (0, l.forwardRef)((e, t) => (0, o.jsx)(rG, { forwardRef: t, ...e }));
            var rq = i(53535),
                rZ = i.n(rq);
            let rJ = (e) => {
                    var t;
                    let {
                            forwardRef: i,
                            isShimmerVisible: a,
                            isShimmerActive: s,
                            containerClassName: r,
                            headerClassName: m,
                            meta: _,
                            data: u,
                            headingVariant: p,
                            className: b,
                            ...v
                        } = e,
                        h = (0, l.useId)(),
                        x = (0, e7.zb)(0),
                        C = (0, l.useRef)(null),
                        A = (0, l.useId)(),
                        j = (0, l.useMemo)(
                            () =>
                                a
                                    ? (0, o.jsx)(V.F, {
                                          ref: C,
                                          itemClassName: (0, d.$)(rZ().item, rZ().important),
                                          className: r,
                                          'aria-labelledby': ''.concat(h, ' ').concat(h, '-description'),
                                          children: (0, e5.k)({ isActive: s, centered: !0 }),
                                      })
                                    : null == u
                                      ? void 0
                                      : u.items.map((e) => {
                                            var t;
                                            return (0, o.jsx)(
                                                e7.Kp,
                                                {
                                                    name: e.tab.id,
                                                    value: x.value,
                                                    elementId: A,
                                                    children: (0, o.jsx)(V.F, {
                                                        ref: C,
                                                        itemClassName: (0, d.$)(rZ().item, rZ().important),
                                                        className: r,
                                                        'aria-labelledby': ''.concat(h, ' ').concat(h, '-description'),
                                                        children:
                                                            null == (t = e.data)
                                                                ? void 0
                                                                : t.map((t, i) => {
                                                                      var a;
                                                                      return (0, o.jsx)(
                                                                          c.B,
                                                                          {
                                                                              objectType: n.DomainObjectType.Wave,
                                                                              objectId: t.stationId,
                                                                              objectPosX: i + 1,
                                                                              objectPosY: 1,
                                                                              objectsCount: null == (a = e.data) ? void 0 : a.length,
                                                                              children: (0, o.jsx)(ic.y, { vibe: t }),
                                                                          },
                                                                          t.stationId,
                                                                      );
                                                                  }),
                                                    }),
                                                },
                                                e.tab.id,
                                            );
                                        }),
                            [null == u ? void 0 : u.items, a, s, r, h, x.value, A],
                        );
                    return (0, o.jsxs)('section', {
                        className: (0, d.$)(rZ().root, b),
                        ref: i,
                        ...(0, B.getDataAttrFromProps)(v),
                        children: [
                            (0, o.jsx)(U.T, {
                                className: (0, d.$)(m, rZ().header, rZ().important),
                                title: _.title,
                                description: _.description,
                                labeledForId: h,
                                viewAllActionLink: _.viewAllActionLink,
                                controls: (0, o.jsx)(W.X, { className: rZ().controls, carouselRef: C }),
                                headingVariant: p,
                                withDescription: !!_.description,
                            }),
                            (0, o.jsx)(tt.wI, {
                                isShimmerVisible: a,
                                className: (0, d.$)(r, rZ().tabCarousel, rZ().important),
                                elementId: A,
                                shimmer: (0, o.jsx)(tt.zr, { isActive: s, className: (0, d.$)(r, rZ().tabCarousel, rZ().important), shimmerClassName: rZ().tabShimmer }),
                                'aria-labelledby': h,
                                ...x,
                                children:
                                    null == u || null == (t = u.items)
                                        ? void 0
                                        : t.map((e) => {
                                              let { tab: t } = e;
                                              return (0, o.jsx)(
                                                  te.o,
                                                  { className: (0, d.$)(rZ().tab, rZ().important), value: t.id, 'aria-label': t.title, title: t.title },
                                                  t.id,
                                              );
                                          }),
                            }),
                            j,
                        ],
                    });
                },
                r0 = (0, l.forwardRef)((e, t) => (0, o.jsx)(rJ, { forwardRef: t, ...e }));
            var r1 = i(80872),
                r2 = i(47509),
                r3 = i.n(r2),
                r9 = i(32496),
                r4 = i(34775),
                r8 = i.n(r4);
            let r7 = (0, m.PA)(() => {
                    let {
                        settings: { isMobile: e },
                    } = (0, R.g)();
                    return (0, o.jsxs)(o.Fragment, {
                        children: [
                            (0, o.jsx)(r9.n, { isActive: !0, className: r8().titleShimmer, textClassName: r8().titleTextShimmer }),
                            (0, o.jsx)(r9.n, { isActive: !0, className: r8().descriptionShimmer, textClassName: r8().textShimmer }),
                            (0, o.jsx)(r9.n, { isActive: !0, className: r8().descriptionShimmer, textClassName: r8().textShimmer }),
                            (0, o.jsx)(r9.n, { isActive: !0, className: r8().descriptionShimmer, textClassName: r8().textShimmer }),
                            e &&
                                (0, o.jsxs)(o.Fragment, {
                                    children: [
                                        (0, o.jsx)(r9.n, { isActive: !0, className: r8().descriptionShimmer, textClassName: r8().textShimmer }),
                                        (0, o.jsx)(r9.n, { isActive: !0, className: r8().descriptionShimmer, textClassName: r8().textShimmer }),
                                    ],
                                }),
                        ],
                    });
                }),
                r6 = Array.from({ length: 3 }, () => r1.A.src),
                r5 = (0, m.PA)((e) => {
                    let { forwardRef: t, isShimmerVisible: i, data: a, headingVariant: s = 'h2' } = e,
                        { formatMessage: r } = (0, _.A)(),
                        { wizard: n } = (0, R.g)(),
                        c = (0, l.useMemo)(
                            () =>
                                (0, o.jsx)('div', {
                                    className: r3().images,
                                    'data-test-id': p.e8.landing.WIZARD_BLOCK_ARTISTS,
                                    children: r6.map((e, t) => {
                                        var i;
                                        let s = null == a || null == (i = a.artists[t]) ? void 0 : i.coverUri;
                                        return (0, o.jsx)(
                                            h.t,
                                            {
                                                className: r3().paper,
                                                radius: 'round',
                                                children: (0, o.jsx)(th._V, {
                                                    className: r3().image,
                                                    src: s || e,
                                                    fit: 'contain',
                                                    withAvatarReplace: !!s,
                                                    'aria-hidden': !0,
                                                    fallbackIconSize: 's',
                                                    'data-test-id': ''.concat(p.e8.landing.WIZARD_BLOCK_ARTIST_COVER, '_').concat(t),
                                                }),
                                            },
                                            t,
                                        );
                                    }),
                                }),
                            [null == a ? void 0 : a.artists],
                        ),
                        d = (0, l.useMemo)(
                            () =>
                                i
                                    ? (0, o.jsx)(r7, {})
                                    : (0, o.jsxs)(o.Fragment, {
                                          children: [
                                              (0, o.jsx)(x.DZ, {
                                                  variant: s,
                                                  size: 'xs',
                                                  className: r3().title,
                                                  'data-test-id': p.e8.landing.WIZARD_BLOCK_TITLE,
                                                  children: null == a ? void 0 : a.title,
                                              }),
                                              (null == a ? void 0 : a.description) &&
                                                  (0, o.jsx)(x.DZ, {
                                                      variant: 'h3',
                                                      size: 'l',
                                                      className: r3().description,
                                                      lineClamp: 5,
                                                      'data-test-id': p.e8.landing.WIZARD_BLOCK_TEXT,
                                                      children: a.description,
                                                  }),
                                          ],
                                      }),
                            [i, s, null == a ? void 0 : a.title, null == a ? void 0 : a.description],
                        );
                    return (0, o.jsxs)('section', {
                        className: r3().root,
                        ref: t,
                        'data-test-id': p.e8.landing.WIZARD_BLOCK,
                        children: [
                            c,
                            d,
                            (0, o.jsx)(ah.$, {
                                className: r3().button,
                                icon: (0, o.jsx)(ie.I, { variant: 'link', size: 'xxs', className: r3().buttonIcon }),
                                color: 'secondary',
                                size: 'm',
                                iconPosition: 'right',
                                radius: 'xxxl',
                                onClick: n.modal.open,
                                'data-test-id': p.e8.landing.WIZARD_BLOCK_BUTTON,
                                children: r({ id: 'wizard.buttonText' }),
                            }),
                        ],
                    });
                }),
                oe = (0, l.forwardRef)((e, t) => (0, o.jsx)(r5, { forwardRef: t, ...e })),
                ot = {
                    [r.t.COLLECTION_PLAYLIST_WITH_LIKES]: sq,
                    [r.t.COLLECTION_FAVOURITE_PLAYLIST]: s3,
                    [r.t.OPEN_PLAYLIST]: sq,
                    [r.t.SMART_OPEN_PLAYLIST]: sq,
                    [r.t.NON_MUSIC_OPEN_PLAYLIST]: sq,
                    [r.t.COLLECTION_ARTISTS]: tb,
                    [r.t.COLLECTION_ARTISTS_AND_TOP]: tb,
                    [r.t.PERSONAL_ARTISTS]: tb,
                    [r.t.NEW_STARS_ARTISTS]: tb,
                    [r.t.EDITORIAL_ARTISTS]: tb,
                    [r.t.META_TAG_POPULAR_ARTISTS]: tb,
                    [r.t.MICRO_GENRE_ARTISTS]: tb,
                    [r.t.MICRO_GENRE_TOP_ARTISTS]: tb,
                    [r.t.META_TAG_ARTISTS]: tb,
                    [r.t.SIMILAR_ARTISTS]: tb,
                    [r.t.NEW_RELEASES]: sg,
                    [r.t.EDITORIAL_NEW_RELEASES]: sg,
                    [r.t.NEW_PLAYLISTS]: aM.Q,
                    [r.t.EDITORIAL_COMPILATION]: aM.Q,
                    [r.t.RECOMMENDED_PLAYLISTS]: aM.Q,
                    [r.t.META_TAG_POPULAR_PLAYLISTS]: aM.Q,
                    [r.t.META_TAG_PLAYLISTS]: aM.Q,
                    [r.t.META_TAG_NEW_ALBUMS]: aM.Q,
                    [r.t.MICRO_GENRE_ALBUMS]: aM.Q,
                    [r.t.META_TAG_ALBUMS]: aM.Q,
                    [r.t.ARTIST_PLAYLISTS]: aM.Q,
                    [r.t.ARTIST_ALBUMS]: aM.Q,
                    [r.t.ARTIST_COMPILATIONS]: aM.Q,
                    [r.t.ARTIST_STUDIO_ALBUMS]: aM.Q,
                    [r.t.ARTIST_SIMILAR_ENTITIES]: aM.Q,
                    [r.t.COLLECTION_SIMILAR_ENTITIES]: aM.Q,
                    [r.t.PROMOTIONS]: rs,
                    [r.t.EDITORIAL_PROMOTIONS]: rs,
                    [r.t.NON_MUSIC_PROMOTIONS]: rs,
                    [r.t.Q2V_SUGGESTIONS]: rT,
                    [r.t.PERSONAL_PLAYLISTS]: sV,
                    [r.t.REWIND_PLAYLISTS]: sV,
                    [r.t.MICRO_GENRE_SIMILAR_WAVE]: ak,
                    [r.t.META_TAG_SIMILAR_WAVE]: ak,
                    [r.t.EDITORIAL_WAVES]: ak,
                    [r.t.META_TAG_WAVE]: ak,
                    [r.t.MICRO_GENRE_WAVE]: ak,
                    [r.t.EDITORIAL_WAVES_AGENT]: aO,
                    [r.t.META_TAG_WAVE_AGENT]: aO,
                    [r.t.MICRO_GENRE_WAVE_AGENT]: aO,
                    [r.t.MICRO_GENRE_SIMILAR_WAVE_AGENT]: aO,
                    [r.t.META_TAG_SIMILAR_WAVE_AGENT]: aO,
                    [r.t.CONCERTS_PERSONAL]: i0,
                    [r.t.CONCERTS_TOP]: i0,
                    [r.t.EDITORIAL_CONCERTS]: i0,
                    [r.t.VIEWED_CONCERTS]: i0,
                    [r.t.CLIPS]: eJ,
                    [r.t.ARTIST_CLIPS]: eJ,
                    [r.t.WAVES]: rQ,
                    [r.t.SETS_BY_WAVES]: rQ,
                    [r.t.WAVES_AGENT]: r0,
                    [r.t.SETS_BY_WAVES_AGENT]: r0,
                    [r.t.CHART_TRACKS]: eG,
                    [r.t.COLLECTION_KIDS]: tZ,
                    [r.t.COLLECTION_PLAYLISTS_LIKED_AND_CREATED]: t6,
                    [r.t.COLLECTION_PLAYLISTS_CREATED]: t$,
                    [r.t.COLLECTION_PLAYLISTS_LIKED]: t0,
                    [r.t.ALBUM_PROMO]: ee,
                    [r.t.SIMPLE_ALBUM_PROMO]: en,
                    [r.t.ITEM_LIST]: aG,
                    [r.t.OVERVIEW]: sD,
                    [r.t.COLLECTION_ALBUMS]: e4,
                    [r.t.COLLECTION_CLIPS]: tH,
                    [r.t.COLLECTION_TOP_ARTISTS]: il,
                    [r.t.RECENTLY_PLAYED]: rI,
                    [r.t.IN_STYLE]: aK,
                    [r.t.SPECIAL]: rF,
                    [r.t.WIZARD]: oe,
                    [r.t.MIXES]: a6,
                    [r.t.MIXES_GRID]: ss,
                    [r.t.MIXES_MUSIC]: sn,
                    [r.t.NEUROMUSIC]: sv,
                    [r.t.CONCERT_PLACE]: iB,
                    [r.t.LIKES_AND_HISTORY]: a3,
                    [r.t.NON_MUSIC_EDITORIAL_COMPILATION]: sE,
                    [r.t.COLLECTION_ALBUMS_PRESAVES]: tc,
                    [r.t.CHART_ALBUMS]: sR,
                    [r.t.DONATIONS]: ab,
                    [r.t.CONTINUE_LISTEN]: ar,
                    [r.t.DISLIKES]: al,
                    [r.t.COLLECTION_DOWNLOADED_TRACKS]: tG,
                    [r.t.HISTORY]: rz,
                    [r.t.SEARCH_HISTORY]: rz,
                    [r.t.ARTIST_CONCERTS]: eT,
                    [r.t.ARTIST_POPULAR_TRACKS]: eM,
                    [r.t.ARTIST_RELEASE]: eW,
                    [r.t.FAMILIAR_YOU]: aU,
                    [r.t.ARTIST_PICK]: eg,
                    [r.t.ARTIST_UPCOMING_RELEASE]: eK,
                    [r.t.COLLECTION_WAVE_AGENT]: ip,
                    [r.t.COLLECTION_WAVE_ROOMS]: iI,
                    [r.t.COLLECTION_ARTISTS_AND_TOP_WITH_ITEMS]: tB,
                    [r.t.NON_MUSIC_CATEGORY]: sE,
                    [r.t.PODCASTS_CHART_ALBUMS]: sR,
                };
        },
        30436: (e, t, i) => {
            'use strict';
            i.d(t, { f: () => a });
            let a = () => ({ timeStyle: 'short' });
        },
        30733: (e) => {
            e.exports = {
                root: 'SearchHistory_root__0z_bV',
                fallback: 'SearchHistory_fallback____oTN',
                button: 'SearchHistory_button__LBJeT',
                content: 'SearchHistory_content__wSN8E',
            };
        },
        31209: (e, t, i) => {
            'use strict';
            i.d(t, { Q: () => r });
            var a = i(96194);
            let s = [a.t.ARTIST_POPULAR_TRACKS_AND_RELEASES, a.t.FAMILIAR_YOU_AND_ARTIST_PICK],
                r = (e) => s.includes(e.type);
        },
        31266: (e, t, i) => {
            'use strict';
            i.d(t, { b: () => a });
            let a = (e, t) => {
                let i = new URL(window.location.href),
                    a = i.searchParams;
                return (a.set(e, t), (i.search = a.toString()), i.toString());
            };
        },
        31906: (e) => {
            e.exports = { item: 'VibesCarousel_item__AupL0', important: 'VibesCarousel_important__JkzUC' };
        },
        32369: (e, t, i) => {
            'use strict';
            i.d(t, { A: () => w });
            var a = i(32290),
                s = i(63618),
                r = i(96103),
                o = i(55178),
                l = i(6752),
                n = i(54667),
                c = i(83920),
                d = i(57594),
                m = i(28563),
                _ = i(8946),
                u = i(86168),
                p = i(17811),
                b = i(17408),
                v = i(74416),
                h = i(62376),
                x = i(79374),
                C = i(84782),
                A = i(37240),
                j = i(51012),
                T = i(45180),
                N = i(42701),
                I = i.n(N);
            let S = (e) => {
                let { filter: t, tabsState: i, value: r, isSticky: l, ...n } = e,
                    c = (() => {
                        let e = (0, o.useRef)(!1),
                            t = (0, v.st)(),
                            i = (0, h.U)(),
                            { hash: a } = (0, v.gf)(),
                            { pageId: s } = (0, A.$)(),
                            { mainObjectType: r, mainObjectId: l } = (0, C.N)(),
                            { skeleton: n } = (0, j.b)();
                        return (0, o.useCallback)(
                            (o) => {
                                let { tabId: c = '', tabPos: d = 1, isTabSelectedByDefault: m = !1 } = o;
                                if (!t || !s || e.current) return;
                                let _ = { hash: a, pageId: x.W[s], tabId: c, tabPos: d, isTabSelectedByDefault: m };
                                (n && (_.skeletonId = n), l && r && ((_.mainObjectType = r), (_.mainObjectId = l)));
                                let u = (0, p.F)({ params: _, logger: i, context: 'useSendEventOnTabLoaded' });
                                u && ((0, b.hc)(t.evgenInstance, u), (e.current = !0));
                            },
                            [t, s, a, n, l, r, i],
                        );
                    })();
                return (
                    (0, o.useEffect)(() => {
                        c({ tabId: t.id, tabPos: r + 1, isTabSelectedByDefault: t.id === u.Q.ALL });
                    }, [t.id, r, c]),
                    (0, a.jsx)(T.o, { tabIndex: l ? -1 : 0, className: (0, s.$)(I().root, { [I().root_selected]: r === i.value }), title: t.name, value: r, ...n })
                );
            };
            var f = i(80389),
                L = i.n(f);
            let g = (0, r.PA)((e) => {
                let { className: t, isActive: i = !0, shimmerClassName: r } = e;
                return (0, a.jsx)(_.wI, {
                    className: (0, s.$)(L().root, t),
                    isShimmerVisible: !0,
                    value: 0,
                    shimmer: (0, a.jsx)(_.zr, { className: (0, s.$)(L().root, r), shimmerClassName: L().shimmer, count: 3, isActive: i }),
                });
            });
            var y = i(15523),
                R = i.n(y);
            let k = { [n.u.Desktop]: { start: 40, end: 20 }, [n.u.Mobile]: { start: 40, end: 40 } },
                E = { [n.u.Desktop]: { start: 40, end: 20 }, [n.u.Mobile]: { start: 20, end: 50 } },
                P = (0, r.PA)((e) => {
                    let {
                            tabsState: t,
                            handleFilterClick: i,
                            className: r,
                            forwardRef: n,
                            carouselClassName: u,
                            shimmerClassName: p,
                            isSticky: b,
                            items: v,
                            isShimmerVisible: h,
                            isShimmerActive: x,
                            skipSearchCheck: C = !1,
                        } = e,
                        {
                            playlist: A,
                            settings: { isMobile: j },
                        } = (0, d.g)(),
                        { playlistStickyFiltersRef: T, playlistStaticFiltersRef: N, contentScrollRef: I } = (0, c.g)(),
                        f = null != v ? v : A.filters.items,
                        L = (0, l.L)(() =>
                            (0, a.jsx)(_.wI, {
                                ref: n,
                                className: (0, s.$)(R().carousel, u),
                                ...t,
                                onTabChange: i,
                                children: null == f ? void 0 : f.map((e, i) => (0, a.jsx)(S, { filter: e, tabsState: t, value: i, isSticky: b }, e.id)),
                            }),
                        ),
                        y = (0, o.useCallback)(() => {
                            N && T && (N.scrollLeft = T.scrollLeft);
                        }, [N, T]),
                        P = (0, o.useCallback)(() => {
                            N && T && (T.classList.add(R().carousel_noSmooth), (T.scrollLeft = N.scrollLeft), T.classList.remove(R().carousel_noSmooth));
                        }, [N, T]),
                        [w, O] = (0, o.useState)(!1);
                    (0, o.useEffect)(() => {
                        w && P();
                    }, [w, P]);
                    let M = (0, o.useCallback)(() => {
                        O((null == T ? void 0 : T.checkVisibility({ checkOpacity: !0 })) || !1);
                    }, [T]);
                    return (
                        (0, o.useEffect)(() => {
                            let e = new AbortController(),
                                t = { signal: e.signal };
                            return (
                                b
                                    ? (null == T || T.addEventListener('scroll', y, t), null == T || T.addEventListener('resize', y, t))
                                    : j
                                      ? (window.addEventListener('scroll', M, t), window.addEventListener('resize', M, t))
                                      : (null == I || I.addEventListener('scroll', M, t), null == I || I.addEventListener('resize', M, t)),
                                () => {
                                    e.abort();
                                }
                            );
                        }, [b, I, T, M, y, j]),
                        (null != h ? h : A.filters.isShimmerVisible)
                            ? (0, a.jsx)(g, { isActive: null == x || x, shimmerClassName: p })
                            : f && 0 !== f.length && (C || A.search.isNeededToLoad)
                              ? (0, a.jsx)(m.F, { className: r, carouselElement: L, ref: n, scrollPadding: b ? E : k })
                              : void 0
                    );
                }),
                w = (0, o.forwardRef)((e, t) => (0, a.jsx)(P, { forwardRef: t, ...e }));
        },
        34775: (e) => {
            e.exports = {
                titleShimmer: 'WizardTextShimmer_titleShimmer__g__ye',
                titleTextShimmer: 'WizardTextShimmer_titleTextShimmer__ThHNk',
                textShimmer: 'WizardTextShimmer_textShimmer__QokKt',
                descriptionShimmer: 'WizardTextShimmer_descriptionShimmer__Z9daY',
            };
        },
        35629: (e) => {
            e.exports = {
                root_withControls: 'CollectionPlaylists_root_withControls__YV7o_',
                controls: 'CollectionPlaylists_controls___7XSv',
                header: 'CollectionPlaylists_header__EDtBS',
                important: 'CollectionPlaylists_important__oumcA',
                tab: 'CollectionPlaylists_tab__PppbA',
                tabShimmer: 'CollectionPlaylists_tabShimmer__U_ZFn',
                tabCarousel: 'CollectionPlaylists_tabCarousel__hWuL_',
                tabPanel: 'CollectionPlaylists_tabPanel__wSwRR',
                carouselEmpty: 'CollectionPlaylists_carouselEmpty__SVn6E',
                createPlaylistCard: 'CollectionPlaylists_createPlaylistCard__1cMca',
                item: 'CollectionPlaylists_item__YeviY',
            };
        },
        35792: (e, t, i) => {
            'use strict';
            i.d(t, { X: () => s });
            var a = i(96194);
            let s = {
                [a.t.ALBUM_PROMO]: 314,
                [a.t.ARTIST_PICK]: 102,
                [a.t.ARTIST_CONCERTS]: 232,
                [a.t.ARTIST_PLAYLISTS]: 316,
                [a.t.ARTIST_POPULAR_TRACKS_AND_RELEASES]: 340,
                [a.t.ARTIST_POPULAR_TRACKS]: 340,
                [a.t.ARTIST_RELEASE]: 340,
                [a.t.ARTIST_UPCOMING_RELEASE]: 340,
                [a.t.ARTIST_ALBUMS]: 316,
                [a.t.ARTIST_COMPILATIONS]: 316,
                [a.t.ARTIST_CLIPS]: 292,
                [a.t.ARTIST_STUDIO_ALBUMS]: 316,
                [a.t.FAMILIAR_YOU_AND_ARTIST_PICK]: 102,
                [a.t.SIMPLE_ALBUM_PROMO]: 140,
                [a.t.CHART_ALBUMS]: 322,
                [a.t.CHART_TRACKS]: 284,
                [a.t.COLLECTION_ALBUMS]: 320,
                [a.t.COLLECTION_ALBUMS_PRESAVES]: 378,
                [a.t.COLLECTION_ARTISTS]: 336,
                [a.t.COLLECTION_ARTISTS_AND_TOP]: 336,
                [a.t.COLLECTION_TOP_ARTISTS]: 336,
                [a.t.COLLECTION_CLIPS]: 292,
                [a.t.COLLECTION_FAVOURITE_PLAYLIST]: 370,
                [a.t.COLLECTION_PLAYLISTS_CREATED]: 316,
                [a.t.COLLECTION_PLAYLISTS_LIKED]: 316,
                [a.t.COLLECTION_PLAYLISTS_LIKED_AND_CREATED]: 378,
                [a.t.COLLECTION_PLAYLIST_WITH_LIKES]: 310,
                [a.t.COLLECTION_KIDS]: 320,
                [a.t.COLLECTION_WAVE_ROOMS]: 320,
                [a.t.CONCERTS_PERSONAL]: 442,
                [a.t.COLLECTION_DOWNLOADED_TRACKS]: 298,
                [a.t.CONCERTS_TOP]: 442,
                [a.t.EDITORIAL_ARTISTS]: 336,
                [a.t.EDITORIAL_CONCERTS]: 442,
                [a.t.VIEWED_CONCERTS]: 442,
                [a.t.EDITORIAL_COMPILATION]: 316,
                [a.t.EDITORIAL_NEW_RELEASES]: 410,
                [a.t.EDITORIAL_PROMOTIONS]: 342,
                [a.t.EDITORIAL_WAVES]: 138,
                [a.t.EDITORIAL_WAVES_AGENT]: 319,
                [a.t.META_TAG_WAVE_AGENT]: 319,
                [a.t.MICRO_GENRE_WAVE_AGENT]: 319,
                [a.t.MICRO_GENRE_SIMILAR_WAVE_AGENT]: 319,
                [a.t.META_TAG_SIMILAR_WAVE_AGENT]: 319,
                [a.t.IN_STYLE]: 370,
                [a.t.ITEM_LIST]: 250,
                [a.t.LIKES_AND_HISTORY]: 106,
                [a.t.META_TAG_ALBUMS]: 316,
                [a.t.META_TAG_ARTISTS]: 336,
                [a.t.META_TAG_NEW_ALBUMS]: 316,
                [a.t.META_TAG_PLAYLISTS]: 316,
                [a.t.META_TAG_POPULAR_ARTISTS]: 336,
                [a.t.META_TAG_POPULAR_PLAYLISTS]: 316,
                [a.t.META_TAG_SIMILAR_WAVE]: 138,
                [a.t.META_TAG_WAVE]: 64,
                [a.t.MICRO_GENRE_ALBUMS]: 316,
                [a.t.MICRO_GENRE_ARTISTS]: 336,
                [a.t.MICRO_GENRE_SIMILAR_WAVE]: 138,
                [a.t.MICRO_GENRE_TOP_ARTISTS]: 336,
                [a.t.MICRO_GENRE_WAVE]: 64,
                [a.t.MIXES]: 260,
                [a.t.MIXES_GRID]: 240,
                [a.t.MIXES_MUSIC]: 264,
                [a.t.NEUROMUSIC]: 138,
                [a.t.NEW_PLAYLISTS]: 316,
                [a.t.ARTIST_SIMILAR_ENTITIES]: 316,
                [a.t.COLLECTION_SIMILAR_ENTITIES]: 316,
                [a.t.NEW_RELEASES]: 410,
                [a.t.NEW_STARS_ARTISTS]: 336,
                [a.t.NON_MUSIC_EDITORIAL_COMPILATION]: 316,
                [a.t.NON_MUSIC_OPEN_PLAYLIST]: 310,
                [a.t.NON_MUSIC_PROMOTIONS]: 342,
                [a.t.OPEN_PLAYLIST]: 310,
                [a.t.OVERVIEW]: 84,
                [a.t.PERSONAL_ARTISTS]: 336,
                [a.t.PERSONAL_PLAYLISTS]: 342,
                [a.t.PROMOTIONS]: 342,
                [a.t.Q2V_SUGGESTIONS]: 48,
                [a.t.RECENTLY_PLAYED]: 316,
                [a.t.RECOMMENDED_PLAYLISTS]: 316,
                [a.t.REWIND_PLAYLISTS]: 342,
                [a.t.SMART_OPEN_PLAYLIST]: 310,
                [a.t.SPECIAL]: 192,
                [a.t.SIMILAR_ARTISTS]: 336,
                [a.t.TABS]: 60,
                [a.t.WAVES]: 176,
                [a.t.WAVES_AGENT]: 370,
                [a.t.SETS_BY_WAVES_AGENT]: 370,
                [a.t.SETS_BY_WAVES]: 176,
                [a.t.WIZARD]: 328,
                [a.t.DONATIONS]: 216,
                [a.t.CLIPS]: 292,
                [a.t.CONTINUE_LISTEN]: 138,
                [a.t.DISLIKES]: 54,
                [a.t.HISTORY]: 402,
                [a.t.SEARCH_HISTORY]: 402,
                [a.t.FAMILIAR_YOU]: 102,
                [a.t.CONCERT_PLACE]: 324,
                [a.t.COLLECTION_WAVE_AGENT]: 186,
                [a.t.COLLECTION_ARTISTS_AND_TOP_WITH_ITEMS]: 336,
                [a.t.NON_MUSIC_CATEGORY]: 316,
                [a.t.PODCASTS_CHART_ALBUMS]: 322,
            };
        },
        35793: (e) => {
            e.exports = {
                root: 'Vibes_root__Bk6PF',
                controls: 'Vibes_controls__bUp2H',
                header: 'Vibes_header__RcW5b',
                important: 'Vibes_important__Vew_4',
                tab: 'Vibes_tab__uOfqW',
                tabShimmer: 'Vibes_tabShimmer__hjehH',
                tabCarousel: 'Vibes_tabCarousel__bSvp0',
            };
        },
        36597: (e) => {
            e.exports = { root: 'VirtualizedSkeletonBlock_root__njUFa' };
        },
        36687: (e) => {
            e.exports = { root: 'EditorialVibes_root__MPgdy', controls: 'EditorialVibes_controls__sKvZK' };
        },
        37184: (e, t, i) => {
            'use strict';
            var a;
            (i.d(t, { l: () => a }),
                (function (e) {
                    ((e.PLAYLIST_LIKED_TAB = 'liked_playlist_tab'), (e.PLAYLIST_CREATED_TAB = 'created_playlist_tab'));
                })(a || (a = {})));
        },
        37340: (e, t, i) => {
            'use strict';
            i.d(t, { W: () => c });
            var a = i(32290),
                s = i(63618),
                r = i(60900),
                o = i(79856),
                l = i(61420),
                n = i.n(l);
            let c = (e) => {
                let { className: t, isShimmerActive: i } = e,
                    { formatMessage: l } = (0, r.A)();
                return (0, a.jsxs)('div', {
                    'aria-label': l({ id: 'loading-messages.concert-is-loading' }),
                    'aria-live': 'polite',
                    'aria-busy': !0,
                    className: (0, s.$)(n().root, t),
                    children: [
                        (0, a.jsx)(o.W, { className: n().date, radius: 'm', isActive: i }),
                        (0, a.jsxs)('div', {
                            className: n().meta,
                            children: [
                                (0, a.jsx)(o.W, { className: n().title, radius: 's', isActive: i }),
                                (0, a.jsx)(o.W, { className: n().description, radius: 's', isActive: i }),
                            ],
                        }),
                        (0, a.jsx)(o.W, { className: n().action, radius: 'l', isActive: i }),
                    ],
                });
            };
        },
        37997: (e, t, i) => {
            'use strict';
            i.d(t, { m: () => p });
            var a = i(55178),
                s = i(17811),
                r = i(99923),
                o = i(28470),
                l = i(37456),
                n = i(74416),
                c = i(48922),
                d = i(47745),
                m = i(2792),
                _ = i(37240),
                u = i(62376);
            let p = (e) => {
                let { artistId: t, viewUuid: i } = e,
                    p = (0, n.st)(),
                    { hash: b } = (0, n.gf)(),
                    { pageId: v } = (0, _.$)(),
                    { objectsCount: h, objectType: x, objectId: C, objectPosX: A, objectPosY: j, objectPos: T } = (0, m.J)(),
                    N = (0, d.N)(),
                    I = (0, u.U)(),
                    S = (0, a.useCallback)(
                        (e) => {
                            let i = (0, s.F)({
                                params: { hash: b, artistId: t, objectsCount: h, objectType: x, objectId: C, objectPosX: A, objectPosY: j, to: e },
                                logger: I,
                                context: 'useSendEventOnConcertNavigated',
                            });
                            p && i && (0, o.U6)(p.evgenInstance, i);
                        },
                        [p, t, b, I, C, A, j, x, h],
                    ),
                    f = (0, a.useCallback)(
                        (e) => {
                            let a = (0, s.F)({
                                params: { hash: b, artistId: t, viewUuid: i, objectId: C, objectPos: T, to: e },
                                logger: I,
                                context: 'useSendEventOnConcertNavigated',
                            });
                            p && a && i && (0, l.mh)(p.evgenInstance, a);
                        },
                        [p, t, b, I, C, T, i],
                    );
                return (0, a.useCallback)(
                    (e) => {
                        if (p && v && c.xK.includes(v))
                            switch (v) {
                                case c._Q.ARTIST:
                                    S(e);
                                    break;
                                case c._Q.ARTIST_CONCERTS:
                                    f(e);
                                    break;
                                case c._Q.SEARCH:
                                    N({ to: r.AppScreen.ConcertPurchaseScreen });
                            }
                    },
                    [p, v, N, f, S],
                );
            };
        },
        38714: (e) => {
            e.exports = {
                root: 'UpcomingAlbumCard_root__lSZ5l',
                controls: 'UpcomingAlbumCard_controls__fQ50f',
                cover: 'UpcomingAlbumCard_cover__qvU1m',
                image: 'UpcomingAlbumCard_image__WKtGR',
                releaseDate: 'UpcomingAlbumCard_releaseDate__EvDzB',
                artists: 'UpcomingAlbumCard_artists__Jp1OE',
                artistLink: 'UpcomingAlbumCard_artistLink__RSqXw',
                control: 'UpcomingAlbumCard_control__pSMdI',
                presaveButton: 'UpcomingAlbumCard_presaveButton__ixwy_',
                lockButton: 'UpcomingAlbumCard_lockButton__9_qyp',
                lockIcon: 'UpcomingAlbumCard_lockIcon__wtvkP',
            };
        },
        39478: (e) => {
            e.exports = {
                root: 'VibeRoomMemberAvatarSlot_root__0id8R',
                root_back: 'VibeRoomMemberAvatarSlot_root_back__whzaT',
                root_front: 'VibeRoomMemberAvatarSlot_root_front__ZAlv_',
                surface: 'VibeRoomMemberAvatarSlot_surface__Ylq3t',
                circle: 'VibeRoomMemberAvatarSlot_circle__N0n0t',
                circle_back: 'VibeRoomMemberAvatarSlot_circle_back__XNqs4',
                circle_disabled: 'VibeRoomMemberAvatarSlot_circle_disabled__KTcAv',
            };
        },
        39499: (e) => {
            e.exports = {
                root: 'Neuromusic_root__wTkG_',
                controls: 'Neuromusic_controls__8kH7t',
                item: 'Neuromusic_item__Q_JI_',
                important: 'Neuromusic_important__8Ib5E',
            };
        },
        39723: (e) => {
            e.exports = {
                artistLink: 'ArtistPick_artistLink__WYRFP',
                artistsSpoiler: 'ArtistPick_artistsSpoiler__HBKka',
                subTitle: 'ArtistPick_subTitle__5SJFj',
                text: 'ArtistPick_text__sIhNG',
                smallCoverContainer: 'ArtistPick_smallCoverContainer__iBgJu',
                cover: 'ArtistPick_cover__9utVr',
                smallCover: 'ArtistPick_smallCover__6NSnL',
                shimmerCover: 'ArtistPick_shimmerCover__HIauy',
            };
        },
        40053: (e, t, i) => {
            'use strict';
            i.d(t, { f: () => r });
            var a = i(57594),
                s = i(79406);
            let r = () => {
                let {
                        experiments: e,
                        user: { hasPlus: t, isLumenAvailable: i },
                    } = (0, a.g)(),
                    r = e.checkExperiment(s.z.WebNextQueryToVibeLumenOptionCheck, 'on');
                return t && e.checkExperiment(s.z.WebNextQueryToVibe, 'on') && (!r || !!i);
            };
        },
        40126: (e, t, i) => {
            'use strict';
            i.d(t, { M: () => f });
            var a = i(32290),
                s = i(63618),
                r = i(96103),
                o = i(55178),
                l = i(60900),
                n = i(39407),
                c = i(21732),
                d = i(6752),
                m = i(63423),
                _ = i(14934),
                u = i(82586),
                p = i(86269),
                b = i(71926),
                v = i(73654),
                h = i(41677),
                x = i(23352),
                C = i(83560),
                A = i(57594),
                j = i(11323),
                T = i(13798),
                N = i(92744),
                I = i(38714),
                S = i.n(I);
            let f = (0, r.PA)((e) => {
                let { className: t, children: i, upcomingAlbum: r, contentLinesCount: I } = e,
                    { user: f } = (0, A.g)(),
                    { ref: L, intersectionPropertyId: g } = (0, x.n)(),
                    { formatMessage: y, formatDate: R } = (0, l.A)(),
                    k = (0, v.P)(r),
                    E = r.getKey('PlayButton'),
                    P = r.getKey('LikeButton'),
                    w = (0, o.useMemo)(() => {
                        let e = y({ id: 'entity-names.upcoming-album-name' }, { upcomingAlbumName: r.title }),
                            t = r.isPresave ? y({ id: 'entity-names.has-your-like' }) : '';
                        return ''.concat(e, ' ').concat(t);
                    }, [y, r.title, r.isPresave]),
                    O = (0, d.L)(() =>
                        (0, a.jsxs)(p.t, {
                            className: S().cover,
                            radius: 's',
                            withShadow: !0,
                            children: [
                                (0, a.jsx)(j.B, { className: S().image, src: r.coverUri, size: 200, fit: 'cover', alt: w, withAvatarReplace: !0 }),
                                (0, a.jsx)(_.hg, {
                                    className: S().controls,
                                    playControl: (0, a.jsx)(
                                        m.$,
                                        {
                                            className: S().lockButton,
                                            disabled: !0,
                                            radius: 'xxxl',
                                            variant: 'default',
                                            size: 's',
                                            icon: (0, a.jsx)(u.I, { variant: 'lock', size: 'xxs', className: S().lockIcon }),
                                            'aria-label': y({ id: 'entity-names.upcoming-album-play-disabled' }),
                                            'data-test-id': c.Kq.album.UPCOMING_ALBUM_LOCK_BUTTON,
                                        },
                                        E,
                                    ),
                                    likeControl: (0, a.jsx)(
                                        N.c,
                                        {
                                            className: (0, s.$)(S().control, S().presaveButton),
                                            isLiked: r.isPresave,
                                            onClick: k,
                                            variant: 'default',
                                            size: 's',
                                            iconSize: 'xxs',
                                            disabled: !f.isAuthorized,
                                        },
                                        P,
                                    ),
                                }),
                            ],
                        }),
                    );
                return (0, a.jsxs)(_.MN, {
                    ref: L,
                    className: (0, s.$)(S().root, t),
                    'aria-label': w,
                    explicitMarkComponent: r.explicitDisclaimer && (0, a.jsx)(T.N, { getDescriptionTexts: r.getDescriptionTexts, variant: r.explicitDisclaimer }),
                    title: (0, a.jsx)(b.HL, {
                        variant: 'div',
                        type: 'entity',
                        size: 's',
                        weight: 'medium',
                        lineClamp: 2,
                        'data-test-id': c.Kq.album.UPCOMING_ALBUM_TITLE,
                        children: r.title,
                    }),
                    'data-intersection-property-id': g,
                    contentLinesCount: I,
                    view: O,
                    description: (0, a.jsx)(h.i, { className: S().artists, artists: r.artists, lineClamp: 1, linkClassName: S().artistLink, captionSize: 's' }),
                    'data-test-id': c.Kq.album.UPCOMING_ALBUM_CARD,
                    children: [
                        (0, a.jsx)(b.HL, {
                            className: S().releaseDate,
                            variant: 'div',
                            type: 'entity',
                            size: 's',
                            weight: 'medium',
                            lineClamp: 1,
                            'data-test-id': c.Kq.album.UPCOMING_ALBUM_RELEASE_DATE,
                            children: (0, a.jsx)(n.A, { id: 'entity-names.upcoming-album-date', values: { releaseDate: R(r.releaseDate, (0, C.s)()) } }),
                        }),
                        i,
                    ],
                });
            });
        },
        40342: (e) => {
            e.exports = {
                root: 'TrackCard_root__kIpe1',
                controls: 'TrackCard_controls__E7Y3L',
                cover: 'TrackCard_cover__tkVPB',
                coverBlock: 'TrackCard_coverBlock__WdvvQ',
                coverBlock_withTrackLink: 'TrackCard_coverBlock_withTrackLink__fDe6k',
                image: 'TrackCard_image__KsOFF',
                artists: 'TrackCard_artists__wH48n',
                artistLink: 'TrackCard_artistLink__aqLl7',
                titleContainer: 'TrackCard_titleContainer__YCcZk',
                titleContainer_withVersion: 'TrackCard_titleContainer_withVersion__fTRGu',
                title: 'TrackCard_title__BVLuv',
                titleLink: 'TrackCard_titleLink__NtPhm',
                version: 'TrackCard_version__7iPuj',
                playButton: 'TrackCard_playButton__ukJDd',
                likeButton: 'TrackCard_likeButton__Hejrk',
                menuButton: 'TrackCard_menuButton__XtYLf',
                trailerButton: 'TrackCard_trailerButton__nGqhD',
                control: 'TrackCard_control___huPc',
            };
        },
        40624: (e) => {
            e.exports = { root: 'CollectionArtistsEmpty_root__i2XSM', text: 'CollectionArtistsEmpty_text__E_gjT' };
        },
        40959: (e, t, i) => {
            'use strict';
            i.d(t, { E: () => q });
            var a = i(32290),
                s = i(63618),
                r = i(96103),
                o = i(21916),
                l = i(55178),
                n = i(21732),
                c = i(91027),
                d = i(42406),
                m = i(15299),
                _ = i(71610),
                u = i(13882),
                p = i(83920),
                b = i(57594),
                v = i(79406),
                h = i(49399),
                x = i(97201),
                C = i(31266),
                A = i(71670),
                j = i(74694),
                T = i(85377),
                N = i(45180),
                I = i(8946),
                S = i(84468),
                f = i(31209),
                L = i(50212),
                g = i(2125),
                y = i(95226),
                R = i(79114);
            let k = (0, r.PA)((e) => {
                    let { block: t, forwardRef: i, onLoad: s, ...r } = e;
                    if (
                        ((0, l.useEffect)(() => {
                            null == s || s();
                        }, [t.isVisible, s]),
                        !(0, f.Q)(t) || !t.isVisible)
                    )
                        return null;
                    let o = R.Y[t.type];
                    return (0, a.jsx)(o, { data: t.data, ref: i, 'data-intersection-property-id': t.id, ...r });
                }),
                E = (0, r.PA)((e) => {
                    let { ...t } = e;
                    return (0, a.jsx)(y.F, {
                        blockId: t.block.id,
                        blockType: t.block.type,
                        blockIdForFrom: ''.concat(g.h.DISCOVERY_BLOCK, '-').concat(t.block.id),
                        blockPosX: 1,
                        blockPosY: t.blockIndex + 1,
                        objectsCount: t.block.objectsCount,
                        children: (0, a.jsx)(k, { ...t }),
                    });
                }),
                P = (0, r.PA)((e) => ((0, f.Q)(e.block) ? (0, a.jsx)(E, { ...e }) : (0, a.jsx)(L.Z, { ...e })));
            var w = i(25378),
                O = i.n(w),
                M = i(60754),
                D = i(45477),
                B = i(75582),
                V = i(71730);
            let U = (e) => {
                    let { landing: t, tab: i } = e,
                        { notify: s, dismiss: r } = (0, B.l)(),
                        o = (0, l.useRef)(void 0),
                        n = (0, c.c)(() => {
                            (i.blocks.forEach((e) => {
                                e.isRejected && (0, S.v)(e.meta) && t.getBlock(e);
                            }),
                                r({ notificationId: o.current }),
                                i.setShouldReloadNotification(!1));
                        });
                    ((0, l.useEffect)(() => {
                        i.hasErrorBlocks &&
                            !i.shouldReloadNotification &&
                            setTimeout(() => {
                                ((o.current = s((0, a.jsx)(V.L, { reloadBlocks: n }), { containerId: D.u.ERROR, autoClose: !1 })), i.setShouldReloadNotification(!0));
                            });
                    }, [s, n, i.hasErrorBlocks, i.shouldReloadNotification, i]),
                        (0, l.useEffect)(
                            () => () => {
                                (r(), (0, M._n)(i) && i.setShouldReloadNotification(!1));
                            },
                            [r, i],
                        ));
                },
                W = (0, r.PA)((e) => {
                    var t;
                    let { landing: i, tab: s, tabIndex: r } = e,
                        o = (0, l.useMemo)(() => s.blocks.map(() => (0, l.createRef)()), [s.blocks]),
                        n = (0, d.BL)(o, { freezeOnceVisible: !0 });
                    return (
                        U({ landing: i, tab: s }),
                        (0, a.jsx)(_.j, {
                            children: (0, a.jsx)(u.h, {
                                tabId: s.meta.id,
                                tabPos: r + 1,
                                isTabSelectedByDefault: (null == (t = i.meta) ? void 0 : t.selectedTabIndex) === r,
                                children: (0, a.jsx)('div', {
                                    className: O().root,
                                    children: s.blocks.map((e, t) => {
                                        let { isIntersecting: s } = n[e.id] || {};
                                        return (0, a.jsx)(P, { landing: i, block: e, blockIndex: t, isIntersecting: s, forwardRef: o[t] }, e.id);
                                    }),
                                }),
                            }),
                        })
                    );
                });
            var z = i(99424),
                H = i(54862),
                K = i(79248),
                Y = i(35792),
                F = i(36597),
                $ = i.n(F);
            let X = (0, r.PA)((e) => {
                    var t;
                    let { virtualItem: i, resizeObserver: s, isScrolling: r, style: o, ...n } = e,
                        [c, m] = (0, H.d)(),
                        [_, u] = (0, H.d)(),
                        { isIntersecting: p } =
                            null != (t = (0, d.BL)([{ current: c }], !c || (null == c ? void 0 : c.dataset.intersectionPropertyId) !== n.block.id)[n.block.id]) ? t : {};
                    return (
                        (0, l.useEffect)(
                            () => (
                                _ && s && s.observe(_),
                                () => {
                                    _ && s && s.unobserve(_);
                                }
                            ),
                            [_, s],
                        ),
                        (0, a.jsx)('div', {
                            'data-index': i.index,
                            className: $().root,
                            ref: u,
                            style: o,
                            children: (0, a.jsx)(P, { ...n, forwardRef: m, isIntersecting: p && !r }),
                        })
                    );
                }),
                G = (0, r.PA)((e) => {
                    var t, i;
                    let { landing: s, tab: r, tabIndex: n } = e,
                        d = (0, o.useSearchParams)(),
                        {
                            settings: { isMobile: m },
                        } = (0, b.g)(),
                        [p, v] = (0, H.d)(),
                        h = (0, l.useRef)(!0),
                        [C, A] = (0, l.useState)(() => Array.from({ length: r.blocks.length }, (e, t) => t)),
                        j = (0, c.c)(() => {
                            let e = [];
                            (r.blocks.forEach((t, i) => {
                                var a;
                                (t.isVisible || ((null == (a = t.meta) ? void 0 : a.showPolicy) === z.E.LOAD_AND_SHOW && t.isNeededToLoad)) && e.push(i);
                            }),
                                A(e));
                        }),
                        T = (0, c.c)((e) => {
                            let t = C[e];
                            if (void 0 === t) return 300;
                            let i = r.blocks[t];
                            return (null == i ? void 0 : i.isVisible) ? Y.X[i.type] : 0;
                        }),
                        { virtualizer: N, resizeObserver: I } = (0, K.r)({
                            count: null != (i = C.length) ? i : 0,
                            gap: m ? 16 : 24,
                            getEstimateSize: T,
                            containerRef: p,
                        });
                    (0, l.useEffect)(() => {
                        var e;
                        if (!h.current) return;
                        let t = d.get(x.K.BLOCK),
                            i = r.blocks.findIndex((e) => e.id === t);
                        if (!C.includes(i)) return;
                        let a = null == (e = N.getOffsetForIndex(i, 'center')) ? void 0 : e[0];
                        (N.scrollToIndex(i, { align: 'center', behavior: 'auto' }), N.scrollOffset && a && 100 > Math.abs(N.scrollOffset - a) && (h.current = !1));
                    }, [C, d, r.blocks, N]);
                    let S = N.getTotalSize(),
                        f = N.getVirtualItems();
                    return (
                        U({ landing: s, tab: r }),
                        (0, a.jsx)(_.j, {
                            children: (0, a.jsx)(u.h, {
                                tabId: r.meta.id,
                                tabPos: n + 1,
                                isTabSelectedByDefault: (null == (t = s.meta) ? void 0 : t.selectedTabIndex) === n,
                                children: (0, a.jsx)('div', {
                                    className: O().root,
                                    style: { height: ''.concat(S, 'px') },
                                    ref: v,
                                    children: f.map((e) => {
                                        let t = C[e.index],
                                            i = r.blocks[Number(t)];
                                        return i
                                            ? (0, a.jsx)(
                                                  X,
                                                  {
                                                      virtualItem: e,
                                                      resizeObserver: I,
                                                      landing: s,
                                                      block: i,
                                                      blockIndex: Number(t),
                                                      isScrolling: N.isScrolling,
                                                      onLoad: j,
                                                      style: { transform: 'translate3d(0, '.concat(e.start - N.options.scrollMargin, 'px, 0)') },
                                                  },
                                                  e.key,
                                              )
                                            : null;
                                    }),
                                }),
                            }),
                        })
                    );
                }),
                Q = (0, r.PA)((e) => {
                    var t, i, r;
                    let {
                            landing: o,
                            upperBlocks: d,
                            headerConcealerComponent: _,
                            tabsState: u,
                            containerClassName: x,
                            containerStyle: C,
                            headerClassName: A,
                            tabWithHeadingTitle: S,
                            tabWithCovers: f,
                            tabWithSubtitle: L,
                            stickyHeaderClassName: g,
                            staticHeaderClassName: y,
                            stickyHeaderTabIndex: R,
                            headerVariant: k = j.V.COMPOSITE,
                        } = e,
                        { tabs: E } = o,
                        P = (0, l.useId)(),
                        { isScrolling: w } = (0, l.useContext)(T.B),
                        { contentScrollRef: M } = (0, p.g)(),
                        {
                            experiments: D,
                            settings: { isMobile: B },
                        } = (0, b.g)(),
                        V = D.checkExperiment(v.z.WebNextVirtualSkeleton, 'on') ? G : W,
                        U = (0, c.c)((e) => {
                            var t;
                            (B ? window.scrollTo(0, 0) : M && (M.scrollTop = 0), null == (t = u.onTabChange) || t.call(u, e));
                        });
                    return (0, a.jsxs)(a.Fragment, {
                        children: [
                            d,
                            _,
                            (0, a.jsx)(j.Y, {
                                className: (0, s.$)(O().header, A),
                                variant: k,
                                stickyClassName: g,
                                staticClassName: y,
                                stickyChild: (0, a.jsx)(I.wI, {
                                    isShimmerVisible: E.isLoading || o.isLoading,
                                    className: O().stickyTabs,
                                    shimmer: (0, a.jsx)(I.zr, {}),
                                    elementId: P,
                                    'data-test-id': n.e8.landing.MAIN_TABS,
                                    value: u.value,
                                    onTabChange: U,
                                    children:
                                        null == (t = E.data)
                                            ? void 0
                                            : t.map((e, t) => {
                                                  let { meta: i } = e;
                                                  return (0, a.jsx)(
                                                      N.o,
                                                      {
                                                          className: O().tab,
                                                          value: t,
                                                          'aria-label': i.title,
                                                          title: i.title,
                                                          'aria-hidden': !w && k !== j.V.STICKY,
                                                          tabIndex: null != R ? R : w ? 0 : -1,
                                                      },
                                                      i.id,
                                                  );
                                              }),
                                }),
                                children: (0, a.jsx)(I.wI, {
                                    className: (0, s.$)(O().tabCarousel, O().important),
                                    elementId: P,
                                    'data-test-id': n.e8.landing.MAIN_TABS,
                                    ...u,
                                    children:
                                        null == (i = E.data)
                                            ? void 0
                                            : i.map((e, t) => {
                                                  let { meta: i, data: s } = e;
                                                  return (0, a.jsx)(
                                                      N.o,
                                                      {
                                                          className: O().tab,
                                                          value: t,
                                                          'aria-label': i.title,
                                                          title: i.title,
                                                          subtitle: null == s ? void 0 : s.subtitle,
                                                          covers: null == s ? void 0 : s.covers,
                                                          'aria-hidden': w,
                                                          tabIndex: w ? -1 : 0,
                                                          withCovers: f,
                                                          withSubtitle: L,
                                                          withHeading: S,
                                                          isShimmerVisible: E.loadingState === h.G.PENDING,
                                                      },
                                                      i.id,
                                                  );
                                              }),
                                }),
                            }),
                            (0, a.jsx)('div', {
                                className: x,
                                style: C,
                                children:
                                    null == (r = E.data)
                                        ? void 0
                                        : r.map((e, t) =>
                                              (0, a.jsx)(
                                                  m.Kp,
                                                  {
                                                      className: O().tabPanel,
                                                      name: t,
                                                      value: u.value,
                                                      elementId: P,
                                                      children: (0, a.jsx)(V, { landing: o, tab: e, tabIndex: t }),
                                                  },
                                                  e.meta.id,
                                              ),
                                          ),
                            }),
                        ],
                    });
                }),
                q = (0, r.PA)((e) => {
                    var t, i, s, r;
                    let {
                            landing: n,
                            headerConcealerComponent: c,
                            errorComponent: p,
                            containerClassName: h,
                            headerClassName: j,
                            containerStyle: T,
                            tabWithHeadingTitle: N,
                            tabWithCovers: I,
                            tabWithSubtitle: f,
                            staticHeaderClassName: L,
                            stickyHeaderClassName: g,
                            stickyHeaderTabIndex: y,
                            headerVariant: R,
                        } = e,
                        k = (0, o.useSearchParams)(),
                        E = (0, A.X)(),
                        w = ((e) =>
                            (0, l.useCallback)(
                                (t) => {
                                    var i;
                                    let a = null == (i = e.tabs.data) ? void 0 : i[t];
                                    null == a ||
                                        a.blocks.forEach((t) => {
                                            t.isOutdated && (0, S.v)(t.meta) && (t.setHasSentAnalyticsOnLoaded(!1), e.getBlock(t));
                                        });
                                },
                                [e],
                            ))(n),
                        { experiments: M } = (0, b.g)(),
                        D = M.checkExperiment(v.z.WebNextVirtualSkeleton, 'on') ? G : W,
                        B = (0, l.useMemo)(() => {
                            var e;
                            if (!n.isLoaded) return null;
                            let t = k.get(x.K.TAB),
                                i = null == (e = n.tabs.data) ? void 0 : e.findIndex((e) => e.meta.id === t);
                            return 'number' == typeof i && i >= 0 ? i : null;
                        }, [n.isLoaded, n.tabs.data, k]),
                        V = (0, m.zb)(null != (r = null != B ? B : null == (t = n.meta) ? void 0 : t.selectedTabIndex) ? r : 0),
                        U = (0, l.useCallback)(
                            (e) => {
                                var t, i, a;
                                let s = null == (i = n.tabs.data) || null == (t = i[e]) ? void 0 : t.meta.id;
                                if ((e !== V.value && w(V.value), null == (a = V.onTabChange) || a.call(V, e), s)) {
                                    let e = (0, C.b)(x.K.TAB, s);
                                    e && E(e);
                                }
                            },
                            [E, n.tabs.data, w, V],
                        ),
                        z = !!(n.tabs.data && n.tabs.data.length > 1),
                        H = null == (i = n.tabs.data) ? void 0 : i[0],
                        K = (0, l.useMemo)(() => {
                            var e, t;
                            return null != (t = null == (e = n.upperBlocks) ? void 0 : e.map(() => (0, l.createRef)())) ? t : [];
                        }, [n.upperBlocks]),
                        Y = (0, d.BL)(K, { freezeOnceVisible: !0 }),
                        F = (0, l.useMemo)(() => {
                            var e;
                            if (null == (e = n.upperBlocks) ? void 0 : e.length)
                                return (0, a.jsx)(u.h, {
                                    tabId: '',
                                    tabPos: -1,
                                    isTabSelectedByDefault: !1,
                                    children: (0, a.jsx)('div', {
                                        className: O().upperBlocks,
                                        children: n.upperBlocks.map((e, t) => {
                                            let { isIntersecting: i } = Y[e.id] || {};
                                            return (0, a.jsx)(P, { landing: n, block: e, blockIndex: t, isIntersecting: i, forwardRef: K[t] }, e.id);
                                        }),
                                    }),
                                });
                        }, [null == (s = n.upperBlocks) ? void 0 : s.length, n, Y, K]);
                    return z
                        ? (0, a.jsx)(Q, {
                              landing: n,
                              upperBlocks: F,
                              headerConcealerComponent: c,
                              tabsState: { value: V.value, onTabChange: U },
                              containerClassName: h,
                              containerStyle: T,
                              headerClassName: j,
                              tabWithHeadingTitle: N,
                              tabWithCovers: I,
                              tabWithSubtitle: f,
                              staticHeaderClassName: L,
                              stickyHeaderClassName: g,
                              stickyHeaderTabIndex: y,
                              headerVariant: R,
                          })
                        : H
                          ? (0, a.jsxs)('div', { className: h, style: T, children: [F, c, (0, a.jsx)(D, { landing: n, tab: H, tabIndex: 0 })] })
                          : F
                            ? (0, a.jsx)(_.j, { children: (0, a.jsxs)('div', { className: h, style: T, children: [F, c] }) })
                            : n.isLoadedAndEmpty
                              ? (0, a.jsx)('div', { className: h, style: T, children: p })
                              : null;
                });
        },
        41009: (e) => {
            e.exports = {
                root: 'CollectionVibeAgent_root__Ckkcd',
                container: 'CollectionVibeAgent_container__Vnapv',
                text: 'CollectionVibeAgent_text__WYNR_',
                playButton: 'CollectionVibeAgent_playButton__YANpE',
                coverShimmer: 'CollectionVibeAgent_coverShimmer__q32bW',
                shimmerContainer: 'CollectionVibeAgent_shimmerContainer__4wBoC',
                item: 'CollectionVibeAgent_item__X8a1I',
                important: 'CollectionVibeAgent_important__FEcUJ',
            };
        },
        41640: (e) => {
            e.exports = {
                root: 'BaseAlbumPromo_root__wgbC3',
                controls: 'BaseAlbumPromo_controls__NiVRJ',
                item: 'BaseAlbumPromo_item__coi3X',
                important: 'BaseAlbumPromo_important__OiNRT',
            };
        },
        41947: (e) => {
            e.exports = {
                root: 'HorizontalClipCard_root__B_6yA',
                cover: 'HorizontalClipCard_cover__vpEvl',
                unavailable: 'HorizontalClipCard_unavailable__SILaB',
                duration: 'HorizontalClipCard_duration__r1UFp',
            };
        },
        42106: (e, t, i) => {
            'use strict';
            i.d(t, { b: () => l });
            var a = i(32290),
                s = i(63618),
                r = i(39478),
                o = i.n(r);
            let l = (e) => {
                let { align: t, children: i, overlay: r, isDisabled: l = !1, className: n, surfaceClassName: c, overlayClassName: d } = e,
                    m = 'back' === t;
                return (0, a.jsxs)('span', {
                    className: (0, s.$)(o().root, m ? o().root_back : o().root_front, n),
                    children: [
                        (0, a.jsxs)('span', {
                            className: (0, s.$)(o().circle, { [o().circle_back]: m, [o().circle_disabled]: l }),
                            children: [(0, a.jsx)('span', { className: (0, s.$)(o().surface, c), children: i }), d && (0, a.jsx)('span', { className: d })],
                        }),
                        r,
                    ],
                });
            };
        },
        42701: (e) => {
            e.exports = { root: 'PlaylistFilter_root__AnfqR', root_selected: 'PlaylistFilter_root_selected__DxSW9' };
        },
        44277: (e, t, i) => {
            'use strict';
            i.d(t, { B: () => T });
            var a = i(32290),
                s = i(63618),
                r = i(96103),
                o = i(21916),
                l = i(55178),
                n = i(60900),
                c = i(39407),
                d = i(21732),
                m = i(2047),
                _ = i(63423),
                u = i(82586),
                p = i(71926),
                b = i(45477),
                v = i(75582),
                h = i(57594),
                x = i(68243),
                C = i(90357),
                A = i(20567),
                j = i.n(A);
            let T = (0, r.PA)((e) => {
                let { className: t } = e,
                    { formatMessage: i } = (0, n.A)(),
                    { createPlaylist: r } = (0, h.g)(),
                    { notify: A } = (0, v.l)(),
                    T = (0, o.useRouter)(),
                    N = (0, l.useRef)(!1),
                    I = (0, l.useCallback)(async () => {
                        if (N.current) return;
                        N.current = !0;
                        let e = await r.create({ title: i({ id: 'entity-names.new-playlist' }), visibility: m.L.PUBLIC });
                        if (e) {
                            let { href: t } = (0, x.u)('/playlists/:playlistUuid', { params: { playlistUuid: e } });
                            T.push(t);
                        } else (A((0, a.jsx)(C.h, { error: i({ id: 'playlist-errors.failed-to-create-playlist' }) }), { containerId: b.u.ERROR }), (N.current = !1));
                    }, [r, i, T, A]);
                return (
                    (0, l.useEffect)(
                        () => () => {
                            r.reset();
                        },
                        [r],
                    ),
                    (0, a.jsxs)('div', {
                        className: (0, s.$)(j().root, t),
                        'data-test-id': d.OA.playlist.CREATE_PLAYLIST_CARD,
                        children: [
                            (0, a.jsx)(_.$, {
                                className: j().button,
                                icon: (0, a.jsx)(u.I, { className: j().icon, variant: 'add', size: 'l' }),
                                radius: 's',
                                'aria-label': i({ id: 'playlist-actions.create-playlist' }),
                                onClick: I,
                                flexIcon: !0,
                                isBlock: !0,
                                'data-test-id': d.OA.playlist.CREATE_PLAYLIST_BUTTON,
                            }),
                            (0, a.jsx)(p.HL, {
                                weight: 'medium',
                                size: 's',
                                variant: 'div',
                                className: j().text,
                                'data-test-id': d.OA.playlist.CREATE_PLAYLIST_TITLE,
                                children: (0, a.jsx)(c.A, { id: 'collection.new-playlist' }),
                            }),
                        ],
                    })
                );
            });
        },
        44337: (e) => {
            e.exports = {
                root_withNewConcertCards: 'Concerts_root_withNewConcertCards__42M3w',
                item: 'Concerts_item__jetvg',
                important: 'Concerts_important__rvXs6',
                root: 'Concerts_root__12jay',
                controls: 'Concerts_controls__n4qr8',
                shimmer: 'Concerts_shimmer__ujsLv',
            };
        },
        45447: (e, t, i) => {
            'use strict';
            i.d(t, { l: () => s });
            var a = i(72676);
            let s = (e, t) => ({ type: a.z4.Unloaded, meta: { id: e, albumId: t } });
        },
        46997: (e) => {
            e.exports = { item: 'MixesMusic_item__9QVmW', shimmer: 'MixesMusic_shimmer__rJ3xa' };
        },
        47509: (e) => {
            e.exports = {
                root: 'Wizard_root__aW2c2',
                title: 'Wizard_title__L8ktt',
                description: 'Wizard_description__RFf2U',
                button: 'Wizard_button__lr8pa',
                buttonIcon: 'Wizard_buttonIcon__eOX3P',
                imagesWrapper: 'Wizard_imagesWrapper__tyqWr',
                images: 'Wizard_images__5rxec',
                paper: 'Wizard_paper__ijUgq',
                image: 'Wizard_image__k9AXl',
            };
        },
        48293: (e) => {
            e.exports = {
                root: 'NewReleases_root__4ONiw',
                controls: 'NewReleases_controls__zlJZF',
                shimmerImage: 'NewReleases_shimmerImage__8IEd_',
                shimmerCard: 'NewReleases_shimmerCard__S1gfL',
                item: 'NewReleases_item__Gv0iR',
                important: 'NewReleases_important__qkt9x',
            };
        },
        48318: (e) => {
            e.exports = {
                content: 'ContinueListenBaseItem_content__Rdrbh',
                root: 'ContinueListenBaseItem_root__FH7Jk',
                root_bookshelf: 'ContinueListenBaseItem_root_bookshelf__cKQqb',
                root_newEpisodes: 'ContinueListenBaseItem_root_newEpisodes__OTZgU',
                root_withLastPlayed: 'ContinueListenBaseItem_root_withLastPlayed__1Z2P5',
                title: 'ContinueListenBaseItem_title__vvDta',
                root_withCovers: 'ContinueListenBaseItem_root_withCovers__Y4w7V',
                link: 'ContinueListenBaseItem_link__3xuh7',
                textContainer: 'ContinueListenBaseItem_textContainer__1nvoM',
                titleIcon: 'ContinueListenBaseItem_titleIcon__4lGcT',
                subtitle: 'ContinueListenBaseItem_subtitle__jFLLT',
                covers: 'ContinueListenBaseItem_covers__bCLfi',
                coverContainer: 'ContinueListenBaseItem_coverContainer__qdnAa',
                cover: 'ContinueListenBaseItem_cover__gSp5J',
            };
        },
        49750: (e, t, i) => {
            'use strict';
            i.d(t, { m: () => s, u: () => r });
            var a = i(55178);
            let s = (0, a.createContext)(null),
                r = () => (0, a.useContext)(s);
        },
        50212: (e, t, i) => {
            'use strict';
            i.d(t, { Z: () => A });
            var a = i(32290),
                s = i(63618),
                r = i(96103),
                o = i(55178),
                l = i(91027),
                n = i(6752),
                c = i(2125),
                d = i(95481),
                m = i(95226),
                _ = i(57594),
                u = i(79406),
                p = i(31209),
                b = i(84468),
                v = i(7246),
                h = i.n(v),
                x = i(29304);
            let C = (0, r.PA)((e) => {
                    let { landing: t, block: i, isIntersecting: r, forwardRef: c, onLoad: m, className: v, containerClassName: C, ...A } = e,
                        {
                            isNeededToLoad: j,
                            isLoading: T,
                            isLoaded: N,
                            isRejected: I,
                            isShimmerVisible: S,
                            isShimmerActive: f,
                            isVisible: L,
                            id: g,
                            type: y,
                            meta: R,
                            data: k,
                            hasSentAnalyticsOnLoaded: E,
                            setHasSentAnalyticsOnLoaded: P,
                            setOutdated: w,
                            setIsNeededToLoad: O,
                        } = i;
                    if ((0, p.Q)(i)) return null;
                    let M = x.D[i.type],
                        D = (0, d.f)(),
                        { settings: B, experiments: V } = (0, _.g)(),
                        U = !V.checkExperiment(u.z.WebNextVirtualSkeleton, 'on') && B.browserInfo && !B.browserInfo.isSafari;
                    (0, o.useEffect)(() => {
                        (r || !L) && j && (0, b.v)(R) && t.getBlock(i);
                    }, [i, r, j, L, t, R]);
                    let W = (0, l.c)(() => {
                        t.getBlock(i);
                    });
                    ((0, o.useEffect)(() => {
                        (N || I) && (null == m || m());
                    }, [N, I, m]),
                        (0, o.useEffect)(() => {
                            !E && N && (D(), P(!0));
                        }, [E, N, D, P]));
                    let z = (0, n.L)(() => {
                        if (((e) => !!(e && 'object' == typeof e && 'current' in e))(c)) {
                            var e;
                            return null == (e = c.current) ? void 0 : e.clientHeight;
                        }
                        return 0;
                    });
                    return L
                        ? (0, a.jsx)(
                              M,
                              {
                                  setIsNeededToLoad: O,
                                  setOutdated: w,
                                  isLoaded: N,
                                  isLoading: T,
                                  isShimmerVisible: S,
                                  isShimmerActive: f,
                                  isRejected: I,
                                  tracksContainerClassName: h().tracksContainer,
                                  containerClassName: (0, s.$)(h().container, h().important, C),
                                  className: (0, s.$)({ [h().container_withContentVisibility]: U && z }, v),
                                  headerClassName: h().headerContainer,
                                  meta: R,
                                  data: k,
                                  type: y,
                                  ref: c,
                                  headingVariant: 'h2',
                                  'data-intersection-property-id': i.id,
                                  'data-test-id': i.type,
                                  ...A,
                                  onRefetch: W,
                              },
                              g,
                          )
                        : null;
                }),
                A = (0, r.PA)((e) => {
                    let { ...t } = e;
                    return (0, a.jsx)(m.F, {
                        blockId: t.block.id,
                        blockType: t.block.type,
                        blockIdForFrom: ''.concat(c.h.DISCOVERY_BLOCK, '-').concat(t.block.id),
                        blockPosX: 1,
                        blockPosY: t.blockIndex + 1,
                        objectsCount: t.block.objectsCount,
                        children: (0, a.jsx)(C, { ...t }),
                    });
                });
        },
        50308: (e, t, i) => {
            'use strict';
            i.d(t, { e: () => r });
            var a = i(32290),
                s = i(89020);
            let r = (e) => {
                let {
                    isActive: t,
                    itemClassName: i,
                    round: r,
                    centered: o,
                    withInfo: l,
                    count: n = 10,
                    shimmerClassName: c,
                    linesCount: d,
                    'aria-label': m,
                    withSubcover: _,
                } = e;
                return Array.from(Array(n).keys()).map((e) =>
                    (0, a.jsx)(
                        s.V,
                        { isActive: t, linesCount: d, className: i, round: r, centered: o, withInfo: l, withSubcover: _, 'aria-label': m, shimmerClassName: c },
                        e,
                    ),
                );
            };
        },
        51025: (e) => {
            e.exports = {
                root: 'VibeButton_root___i3R5',
                ripple: 'VibeButton_ripple__cmoBR',
                textContainer: 'VibeButton_textContainer__j9nOW',
                title: 'VibeButton_title__sLC0I',
                title_long: 'VibeButton_title_long__gSVM5',
                subtitle: 'VibeButton_subtitle__MQ_Ca',
                image: 'VibeButton_image__GOwKJ',
                button: 'VibeButton_button__tXFAm',
                button_loading: 'VibeButton_button_loading__LYnUR',
                titleContainer: 'VibeButton_titleContainer__yrRRu',
                'applying-setting': 'VibeButton_applying-setting__Jd_3C',
                icon: 'VibeButton_icon__KIv7n',
            };
        },
        51740: (e) => {
            e.exports = {
                root: 'MultivibeShowPromoModalButton_root__IVPw7',
                root_mobile: 'MultivibeShowPromoModalButton_root_mobile__WRav6',
                button: 'MultivibeShowPromoModalButton_button__FIPMr',
                button_mobile: 'MultivibeShowPromoModalButton_button_mobile__27mpZ',
                surface: 'MultivibeShowPromoModalButton_surface__moFgc',
                icon: 'MultivibeShowPromoModalButton_icon__Sq7Vg',
                title: 'MultivibeShowPromoModalButton_title__0ZG_f',
                titleWrapper: 'MultivibeShowPromoModalButton_titleWrapper__GNMdJ',
                title_mobile: 'MultivibeShowPromoModalButton_title_mobile__qZ_tH',
                content_linesCount_1: 'MultivibeShowPromoModalButton_content_linesCount_1__YfsBl',
                content_linesCount_2: 'MultivibeShowPromoModalButton_content_linesCount_2__AC_t8',
                content_linesCount_3: 'MultivibeShowPromoModalButton_content_linesCount_3___wDV_',
                content_linesCount_4: 'MultivibeShowPromoModalButton_content_linesCount_4__BuNw_',
            };
        },
        52022: (e) => {
            e.exports = {
                root: 'AlbumPromoCard_root__dAUet',
                artistImage: 'AlbumPromoCard_artistImage__fWVxn',
                artistImage_withTopPosition: 'AlbumPromoCard_artistImage_withTopPosition__tRrcO',
                artistCover: 'AlbumPromoCard_artistCover__Gfhab',
                albumCover: 'AlbumPromoCard_albumCover__QYYKH',
                button: 'AlbumPromoCard_button__mpQr6',
                buttonIcon: 'AlbumPromoCard_buttonIcon__WredC',
                buttonText: 'AlbumPromoCard_buttonText__pI3Ot',
                albumImage: 'AlbumPromoCard_albumImage__v8021',
                albumLink: 'AlbumPromoCard_albumLink__dnGvR',
                artistLink: 'AlbumPromoCard_artistLink__AD9__',
                title: 'AlbumPromoCard_title__uzmho',
                titleLink: 'AlbumPromoCard_titleLink__4DLNk',
                titleContainer: 'AlbumPromoCard_titleContainer__f1k8Y',
                artists: 'AlbumPromoCard_artists__UYpyB',
                artistsLink: 'AlbumPromoCard_artistsLink__8gTlH',
            };
        },
        52575: (e) => {
            e.exports = {
                root: 'ConcertCard_root__fcR9B',
                root_withConcertsRedesign: 'ConcertCard_root_withConcertsRedesign__0g8bs',
                ripple: 'ConcertCard_ripple__PW4xI',
                date: 'ConcertCard_date__ECoa3',
                dateWithMask: 'ConcertCard_dateWithMask__si35m',
                important: 'ConcertCard_important__dQYxN',
                dateColor: 'ConcertCard_dateColor__muPRD',
                button: 'ConcertCard_button__GQxNL',
            };
        },
        53226: (e) => {
            e.exports = { root: 'CollectionAlbumsEmpty_root__xtfuI', text: 'CollectionAlbumsEmpty_text__fRpx_' };
        },
        53535: (e) => {
            e.exports = {
                root: 'VibesAgent_root__vZxtE',
                controls: 'VibesAgent_controls__6jNJF',
                header: 'VibesAgent_header__PrZP3',
                important: 'VibesAgent_important__5yfOt',
                tab: 'VibesAgent_tab__Wwcd_',
                tabShimmer: 'VibesAgent_tabShimmer__TnlQU',
                tabCarousel: 'VibesAgent_tabCarousel__q__hc',
                item: 'VibesAgent_item__UBIWG',
            };
        },
        53937: (e, t, i) => {
            'use strict';
            i.d(t, { $: () => a });
            let a = (e) => {
                let { index: t, count: i, itemsCountPerColumn: a = 4, showedItemsCountInBlock: s = 8 } = e;
                return { objectPosX: Math.floor(t / a) + 1, objectPosY: (t % a) + 1, objectsCount: i > s ? s : i };
            };
        },
        54997: (e) => {
            e.exports = {
                root: 'CollectionAlbumsPresavesEmpty_root__3w6b7',
                root_oneEmptyTab: 'CollectionAlbumsPresavesEmpty_root_oneEmptyTab__UIaL3',
                root_twoEmptyTabs: 'CollectionAlbumsPresavesEmpty_root_twoEmptyTabs__4Ct2l',
            };
        },
        55885: (e) => {
            e.exports = {
                shimmerWithSubcover: 'MixesGridBlock_shimmerWithSubcover__3EtzK',
                header: 'MixesGridBlock_header__wz5KI',
                mixesGrid: 'MixesGridBlock_mixesGrid__LSeyw',
                item: 'MixesGridBlock_item__TVzNE',
                important: 'MixesGridBlock_important__DQE7T',
            };
        },
        56958: (e, t, i) => {
            'use strict';
            i.d(t, { i: () => o });
            var a = i(55178),
                s = i(71483),
                r = i(46673);
            let o = (e) => {
                let { playlistId: t, filter: i } = e;
                return (0, a.useMemo)(() => (t ? (0, r.t)({ contextType: s.K.Playlist, contextId: t, filter: i }) : null), [t, i]);
            };
        },
        57762: (e) => {
            e.exports = {
                root: 'PromotionShimmer_root__Nb8vU',
                cover: 'PromotionShimmer_cover__WYwD7',
                meta: 'PromotionShimmer_meta__9eRwi',
                heading: 'PromotionShimmer_heading__38lLU',
                title: 'PromotionShimmer_title__TLj1g',
                subtitle: 'PromotionShimmer_subtitle__LS5v_',
            };
        },
        58910: (e) => {
            e.exports = {
                root: 'ArtistActionItems_root__r3J3K',
                item: 'ArtistActionItems_item__8DYtg',
                ripple: 'ArtistActionItems_ripple__3t0gz',
                menuItem: 'ArtistActionItems_menuItem__qWymt',
                cover: 'ArtistActionItems_cover__4E3qx',
                text: 'ArtistActionItems_text__RcAY_',
            };
        },
        59800: (e) => {
            e.exports = {
                root: 'ContinueListenTrack_root__JFzVe',
                cover: 'ContinueListenTrack_cover__E5zob',
                important: 'ContinueListenTrack_important__4_84V',
                metaTrack: 'ContinueListenTrack_metaTrack__hSIYC',
                content: 'ContinueListenTrack_content__xU2R9',
                textContainer: 'ContinueListenTrack_textContainer__zisLi',
                titleIcon: 'ContinueListenTrack_titleIcon__smcf_',
                title: 'ContinueListenTrack_title__LBdpD',
                explicitMark: 'ContinueListenTrack_explicitMark___eXOa',
                metaContainer: 'ContinueListenTrack_metaContainer__Yoo2N',
                playButton: 'ContinueListenTrack_playButton__5tT4s',
                progress: 'ContinueListenTrack_progress__CfJQP',
                fullCircle: 'ContinueListenTrack_fullCircle__xrROh',
                progressCircle: 'ContinueListenTrack_progressCircle__msDye',
            };
        },
        59888: (e, t, i) => {
            'use strict';
            i.d(t, { _: () => o });
            var a = i(32290),
                s = i(55178),
                r = i(21183);
            let o = (e) => {
                let { sourceContextData: t, children: i } = e,
                    o = (0, s.useMemo)(() => ({ sourceContextData: t }), [t]);
                return (0, a.jsx)(r.l.Provider, { value: o, children: i });
            };
        },
        61113: (e, t, i) => {
            'use strict';
            i.d(t, { w: () => z });
            var a = i(32290),
                s = i(63618),
                r = i(96103),
                o = i(55178),
                l = i(60900),
                n = i(71483),
                c = i(91027),
                d = i(6752),
                m = i(14934),
                _ = i(86269),
                u = i(71926),
                p = i(34883),
                b = i(41677),
                v = i(17705),
                h = i(71735),
                x = i(2969),
                C = i(72396),
                A = i(5537),
                j = i(32641),
                T = i(28999),
                N = i(90169),
                I = i(57594),
                S = i(11323),
                f = i(13798),
                L = i(61258),
                g = i(54171),
                y = i(40342),
                R = i.n(y),
                k = i(39407),
                E = i(99923),
                P = i(21732),
                w = i(82586),
                O = i(54391),
                M = i(92744),
                D = i(90326),
                B = i(29268),
                V = i(34925),
                U = i(39400);
            let W = (0, r.PA)((e) => {
                    let { track: t, handleLikeButtonClick: i, handlePlayButtonClick: r, isPlaying: l } = e,
                        { trailer: n, user: _ } = (0, I.g)(),
                        [u, p] = (0, o.useState)(!1),
                        [b, v] = (0, o.useState)(!1),
                        x = (0, h.P)(),
                        C = (0, O.F)(),
                        A = (0, c.c)(() => {
                            (p(!u), v(!u));
                        }),
                        j = (0, c.c)((e) => {
                            (e.preventDefault(), e.stopPropagation());
                        }),
                        T = (0, c.c)((e) => {
                            if ((e.stopPropagation(), x())) return void e.preventDefault();
                            (n.openTrackTrailer(t.id), C(E.DomainObjectType.Track, t.id));
                        }),
                        N = (0, d.L)(() => {
                            var e;
                            if (null == t || null == (e = t.trailer) ? void 0 : e.isAvailable)
                                return (0, a.jsx)(
                                    V.n,
                                    {
                                        children: (0, a.jsx)(B.k, {
                                            className: (0, s.$)(R().trailerButton, R().control),
                                            radius: 'round',
                                            size: 's',
                                            iconSize: 'xxs',
                                            onClick: T,
                                        }),
                                    },
                                    t.getKey('TrackCardTrailerTooltip'),
                                );
                        });
                    return (0, a.jsx)(m.hg, {
                        isVisible: u || b,
                        className: R().controls,
                        labelText: (0, a.jsx)(k.A, { id: 'entity-names.track' }),
                        playControl: (0, a.jsx)(
                            D.D,
                            {
                                className: (0, s.$)(R().playButton, R().control),
                                buttonVariant: 'default',
                                withHover: !1,
                                iconSize: 'xl',
                                variant: 'filled',
                                isPlaying: l,
                                onClick: r,
                            },
                            t.getKey('PlayButton'),
                        ),
                        likeControl: (0, a.jsx)(
                            M.c,
                            {
                                className: (0, s.$)(R().likeButton, R().control),
                                isLiked: t.isLiked,
                                onClick: i,
                                variant: 'default',
                                size: 's',
                                iconSize: 'xxs',
                                disabled: !_.isAuthorized,
                            },
                            t.getKey('LikeButton'),
                        ),
                        menuControl: (0, a.jsx)(
                            U._,
                            {
                                placement: 'bottom',
                                track: t,
                                onOpenChange: A,
                                open: u,
                                onClick: j,
                                className: (0, s.$)(R().menuButton, R().control),
                                icon: (0, a.jsx)(w.I, { size: 'xxs', variant: 'more' }),
                                size: 's',
                                'data-test-id': P.Kq.track.TRACK_CONTEXT_MENU_BUTTON,
                            },
                            t.getKey('TrackContextMenu'),
                        ),
                        trailerControl: N,
                    });
                }),
                z = (0, r.PA)((e) => {
                    var t, i;
                    let { className: r, children: y, track: k, contentLinesCount: E, overrideContextType: P } = e,
                        { from: w } = (0, C.f)(),
                        {
                            track: O,
                            paywall: { modal: M },
                        } = (0, I.g)(),
                        { formatMessage: D } = (0, l.A)(),
                        [B, V] = (0, o.useState)(!1),
                        [U, z] = (0, o.useState)(!1),
                        { sendLikeSearchFeedback: H, sendPlaySearchFeedback: K, sendNavigateSearchFeedback: Y } = (0, T.z)(),
                        F = (0, v.K)(k),
                        $ = (0, j.Z)(null != (i = null == (t = k.mainAlbum) ? void 0 : t.url) ? i : ''),
                        X = (0, j.Z)(k.url),
                        G = (0, x.b)(),
                        Q = (0, h.P)(),
                        q = (0, d.L)(() => {
                            var e;
                            let t = D({ id: 'entity-names.track-name' }, { trackName: k.title }),
                                i = k.isLiked ? D({ id: 'entity-names.has-your-like' }) : '';
                            return ''
                                .concat(t, ' ')
                                .concat(null != (e = k.version) ? e : '', ' ')
                                .concat(i);
                        }),
                        { isPlaying: Z, togglePlay: J } = (0, N.D)({
                            playContextParams: {
                                contextData: { type: n.K.Various, meta: { id: k.entityId }, from: w, overrideContextType: P },
                                queueParams: { index: 0 },
                                loadContextMeta: !0,
                            },
                            entityId: k.entityId,
                        }),
                        ee = (0, c.c)(() => {
                            O.open({ trackId: k.id, albumId: k.albumId });
                        }),
                        et = (0, c.c)(() => {
                            (B || Z || (V(!0), null == K || K()), J());
                        }),
                        ei = (0, p.c)({ album: k.mainAlbum, callback: $ }),
                        ea = (0, g.w)({ track: k, callback: X }),
                        es = (0, g.w)({ track: k, callback: ee }),
                        er = (0, g.w)({ track: k, callback: et }),
                        eo = (0, A.N)(),
                        el = (0, c.c)(() => {
                            if (!Q()) {
                                if (eo) return void M.open();
                                (er(), G(!Z));
                            }
                        }),
                        en = (0, c.c)(() => {
                            k.hasTrackLink && es();
                        }),
                        ec = (0, c.c)(() => {
                            (U || k.isLiked || (z(!0), null == H || H()), F());
                        }),
                        ed = (0, c.c)((e) => {
                            var t;
                            if (k.hasTrackLink) {
                                (null == Y || Y(), ea(e));
                                return;
                            }
                            k.hasAlbumLink && (null == (t = k.mainAlbum) ? void 0 : t.url) && ei(e);
                        }),
                        em = (0, d.L)(() => {
                            var e, t, i;
                            return k.hasTrackLink
                                ? (0, a.jsx)(L.N, {
                                      'aria-label': ''.concat(k.title, ' ').concat(null != (t = k.version) ? t : ''),
                                      className: R().titleLink,
                                      href: k.url,
                                      onClick: ed,
                                      children: k.title,
                                  })
                                : k.hasAlbumLink && (null == (e = k.mainAlbum) ? void 0 : e.url)
                                  ? (0, a.jsx)(L.N, {
                                        'aria-label': ''.concat(k.title, ' ').concat(null != (i = k.version) ? i : ''),
                                        className: R().titleLink,
                                        href: k.mainAlbum.url,
                                        onClick: ed,
                                        children: k.title,
                                    })
                                  : (0, a.jsx)(u.HL, { className: R().title, variant: 'span', children: k.title });
                        }),
                        e_ = (0, d.L)(() => {
                            var e, t;
                            return k.hasAlbumLink && (null == (e = k.mainAlbum) ? void 0 : e.url)
                                ? (0, a.jsx)(L.N, { href: k.mainAlbum.url, onClick: ed, children: ''.concat(k.title, ' ').concat(null != (t = k.version) ? t : '') })
                                : null;
                        }),
                        eu = (0, d.L)(() => {
                            if (k.isAvailable) return (0, a.jsx)(W, { track: k, isPlaying: Z, handleLikeButtonClick: ec, handlePlayButtonClick: el });
                        });
                    return (0, a.jsx)(m.MN, {
                        className: (0, s.$)(R().root, r),
                        'aria-label': q,
                        explicitMarkComponent: k.explicitDisclaimer && (0, a.jsx)(f.N, { getDescriptionTexts: k.getDescriptionTexts, variant: k.explicitDisclaimer }),
                        title: (0, a.jsxs)(u.HL, {
                            className: (0, s.$)(R().titleContainer, { [R().titleContainer_withVersion]: k.version }),
                            variant: 'div',
                            type: 'entity',
                            size: 's',
                            weight: 'medium',
                            lineClamp: 2,
                            children: [em, k.version && (0, a.jsx)(u.HL, { className: R().version, variant: 'span', children: ' '.concat(k.version) })],
                        }),
                        srTitle: e_,
                        contentLinesCount: E,
                        view: (0, a.jsx)(_.t, {
                            className: R().cover,
                            radius: 'l',
                            withShadow: !0,
                            children: (0, a.jsxs)('div', {
                                className: (0, s.$)(R().coverBlock, { [R().coverBlock_withTrackLink]: k.hasTrackLink }),
                                onClick: en,
                                children: [
                                    (0, a.jsx)(S.B, {
                                        className: R().image,
                                        src: k.coverUri,
                                        size: 200,
                                        fit: 'cover',
                                        alt: q,
                                        withAvatarReplace: !0,
                                        isAvailable: k.isAvailable,
                                        'aria-hidden': !0,
                                    }),
                                    eu,
                                ],
                            }),
                        }),
                        description: (0, a.jsx)(
                            b.i,
                            { className: R().artists, artists: k.artists, lineClamp: 1, linkClassName: R().artistLink, captionSize: 's', withLink: k.isNonUserGenerated },
                            k.getKey('description'),
                        ),
                        children: y,
                    });
                });
        },
        61280: (e) => {
            e.exports = {
                root: 'AwakeLumenModal_root__KutgH',
                header: 'AwakeLumenModal_header__uptVv',
                content: 'AwakeLumenModal_content__IGhwx',
                iframe: 'AwakeLumenModal_iframe__VUNuR',
                playButton: 'AwakeLumenModal_playButton__n3HTQ',
                playButtonVisible: 'AwakeLumenModal_playButtonVisible__wA_ri',
            };
        },
        61371: (e) => {
            e.exports = {
                root: 'Concert_root__INQJc',
                cover: 'Concert_cover__POyDO',
                index: 'Concert_index__cPRuN',
                meta: 'Concert_meta__s_lsH',
                textContainer: 'Concert_textContainer__50dZP',
                date: 'Concert_date__3xwWB',
                info: 'Concert_info__viObm',
                concertTitle: 'Concert_concertTitle__kngHo',
                description: 'Concert_description__JTZtZ',
                descriptionContainer: 'Concert_descriptionContainer__cPF3d',
                cashback: 'Concert_cashback__b7feO',
                title: 'Concert_title__tX2Mj',
            };
        },
        61420: (e) => {
            e.exports = {
                root: 'ConcertShimmer_root__yp58v',
                date: 'ConcertShimmer_date__GEOK7',
                meta: 'ConcertShimmer_meta__y8Y2_',
                title: 'ConcertShimmer_title__Rj3Dc',
                description: 'ConcertShimmer_description__tJ4Qp',
                action: 'ConcertShimmer_action__6c4QF',
            };
        },
        62107: (e) => {
            e.exports = {
                root: 'PlaylistWithTracksEmpty_root__secDB',
                image: 'PlaylistWithTracksEmpty_image__JH2uE',
                header: 'PlaylistWithTracksEmpty_header__pD30X',
                text: 'PlaylistWithTracksEmpty_text__b69Q_',
                myWaveButton: 'PlaylistWithTracksEmpty_myWaveButton__Kswfl',
                myWaveButtonText: 'PlaylistWithTracksEmpty_myWaveButtonText__AfIg9',
            };
        },
        67775: (e) => {
            e.exports = {
                root: 'VibeRoomCard_root__5_iia',
                root_mobile: 'VibeRoomCard_root_mobile__v2PVq',
                cardWrapper: 'VibeRoomCard_cardWrapper__SjvtK',
                cardWrapper_mobile: 'VibeRoomCard_cardWrapper_mobile__Zq5mQ',
                roomInfo: 'VibeRoomCard_roomInfo__OH814',
                roomInfo_mobile: 'VibeRoomCard_roomInfo_mobile__q49k2',
                unavailableStatus: 'VibeRoomCard_unavailableStatus___TRYU',
                unavailableStatusDot: 'VibeRoomCard_unavailableStatusDot__HhbgW',
                roomName: 'VibeRoomCard_roomName__vMTor',
                roomName_disabled: 'VibeRoomCard_roomName_disabled__ADQ3G',
                roomName_mobile: 'VibeRoomCard_roomName_mobile__AcCl_',
                textField: 'VibeRoomCard_textField__SZ7Nw',
                avatarsWrapper: 'VibeRoomCard_avatarsWrapper__y7_Rm',
                avatarsWrapper_mobile: 'VibeRoomCard_avatarsWrapper_mobile__jGyAN',
                avatarsWrapper_visible: 'VibeRoomCard_avatarsWrapper_visible__RCg1b',
                avatarsWrapper_disabled: 'VibeRoomCard_avatarsWrapper_disabled__P_0ea',
                playingAnimation: 'VibeRoomCard_playingAnimation__biX8D',
                cardControls: 'VibeRoomCard_cardControls__ffMym',
                control: 'VibeRoomCard_control__QKRAh',
                playControl: 'VibeRoomCard_playControl__DnQ9O',
                menuControl: 'VibeRoomCard_menuControl__KwpDi',
                pinControl: 'VibeRoomCard_pinControl__C3epe',
                menuControl_mobile: 'VibeRoomCard_menuControl_mobile__VsaOD',
                pinControl_mobile: 'VibeRoomCard_pinControl_mobile__5gVK6',
            };
        },
        67848: (e) => {
            e.exports = {
                root: 'NewRelease_root__W0T4a',
                image: 'NewRelease_image__Vw6_k',
                cover: 'NewRelease_cover__EVFNR',
                coverImage: 'NewRelease_coverImage__9x6Uk',
                card: 'NewRelease_card__yn06x',
                fade: 'NewRelease_fade__rVE0_',
                artists: 'NewRelease_artists__wGTaP',
                artistLink: 'NewRelease_artistLink__CO3Zn',
                artistCaption: 'NewRelease_artistCaption__1F8A9',
                trailerButton: 'NewRelease_trailerButton__OYAW6',
                descriptionContainer: 'NewRelease_descriptionContainer__g56GG',
            };
        },
        69675: (e, t, i) => {
            'use strict';
            i.d(t, { N: () => q });
            var a = i(32290),
                s = i(63618),
                r = i(62060),
                o = i(96103),
                l = i(55178),
                n = i(60900),
                c = i(85472),
                d = i(21732),
                m = i(71483),
                _ = i(91027),
                u = i(6752),
                p = i(58359),
                b = i(50162),
                v = i(86269),
                h = i(71926),
                x = i(41677),
                C = i(56797),
                A = i(26089),
                j = i(99872),
                T = i(37862),
                N = i(48922),
                I = i(23352),
                S = i(72396),
                f = i(52843),
                L = i(22191),
                g = i(28999),
                y = i(63415),
                R = i(56755),
                k = i(90169),
                E = i(57594),
                P = i(50880),
                w = i.n(P),
                O = i(78570),
                M = i(1444),
                D = i(90326),
                B = i(73325),
                V = i(96299),
                U = i.n(V),
                W = i(82586),
                z = i(46789),
                H = i(92744),
                K = i(4008),
                Y = i(57223),
                F = i(17365),
                $ = i.n(F);
            let X = (0, o.PA)((e) => {
                let { className: t, clip: i, likeIconSize: r = 'xxs' } = e,
                    { user: o } = (0, E.g)(),
                    { sendLikeSearchFeedback: n } = (0, g.z)(),
                    c = (0, z.K)(i),
                    [m, u] = (0, l.useState)(!1),
                    [p, b] = (0, l.useState)(!1),
                    v = (0, _.c)(() => {
                        (m || i.isLiked || (u(!0), null == n || n()), c());
                    });
                return (0, a.jsx)('div', {
                    className: (0, s.$)($().root, $().controls, t, { [$().controls_disabled]: !i.isAvailable }),
                    children:
                        i.isAvailable &&
                        (0, a.jsxs)(a.Fragment, {
                            children: [
                                (0, a.jsx)(K.WithOffline, {
                                    fallback: (0, a.jsx)(H.c, {
                                        size: 'xs',
                                        iconSize: r,
                                        className: (0, s.$)($().item, $().likeIcon),
                                        isLiked: i.isLiked,
                                        onClick: v,
                                        disabled: !o.isAuthorized,
                                    }),
                                }),
                                (0, a.jsx)(Y.z, {
                                    placement: 'top-start',
                                    icon: (0, a.jsx)(W.I, { variant: 'more', size: 'xs' }),
                                    size: 'xs',
                                    clip: i,
                                    className: (0, s.$)($().contextMenu, { [$().contextMenu_visible]: p }),
                                    onOpenChange: b,
                                    open: p,
                                    'data-test-id': d.Kq.clip.CLIP_CONTEXT_MENU_BUTTON,
                                }),
                            ],
                        }),
                });
            });
            var G = i(41947),
                Q = i.n(G);
            let q = (0, o.PA)((e) => {
                var t;
                let { clip: i, className: o, coverClassName: P, playButtonIconSize: V = 'xs', likeIconSize: W, viewUuid: z, shouldShowTimecode: H = !1 } = e,
                    { fullscreenVideoPlayer: K } = (0, E.g)(),
                    { formatMessage: Y } = (0, n.A)(),
                    F = (0, L.P)(null != (t = i.duration) ? t : 0),
                    $ = (0, C._)(z),
                    G = (0, A.M)(z),
                    { ref: q, intersectionPropertyId: Z } = (0, I.n)({ callback: G }),
                    { from: J } = (0, S.f)({ pageId: N._Q.VIDEO_PLAYER, contextId: K.state.contextId, contextType: m.K.Various, blockId: T.U.CLIPS }),
                    [ee, et] = (0, l.useState)(!1),
                    { sendNavigateSearchFeedback: ei, sendPlaySearchFeedback: ea } = (0, g.z)(),
                    es = (0, j.C)(),
                    er = (0, l.useRef)(null),
                    eo = (0, _.c)(() => {
                        er.current && ((er.current.currentTime = 0), er.current.play());
                    }),
                    el = (0, l.useMemo)(() => (0, r.A)(eo, 500), [eo]),
                    en = (0, _.c)(() => {
                        var e;
                        null == (e = er.current) || e.pause();
                    }),
                    ec = (0, l.useMemo)(() => K.ids.indexOf(i.clipId), [K, i.clipId]),
                    { isPlaying: ed } = (0, k.D)({
                        playContextParams: {
                            contextData: { type: m.K.Various, meta: { id: y.H.VARIOUS_CLIP_CONTEXT }, from: J },
                            queueParams: { index: ec },
                            entitiesData: K.entitiesData,
                            loadContextMeta: !1,
                        },
                        entityId: String(i.clipId),
                        sonataState: K.state,
                        playbackId: R.V.CLIP,
                    }),
                    em = (0, _.c)(() => {
                        (es([i.clipId]), ee || ed || (et(!0), null == ea || ea()), null == ei || ei(), $());
                    }),
                    e_ = (0, B.X)({ clip: i, callback: em }),
                    eu = (0, _.c)((e) => {
                        ((0, p.P)(e, w().ripple), e_(e));
                    }),
                    ep = (0, u.L)(() =>
                        (0, a.jsx)(h.HL, {
                            className: (0, s.$)(w().text, w().titleText),
                            'aria-hidden': !0,
                            variant: 'div',
                            type: 'entity',
                            size: 'm',
                            weight: 'medium',
                            lineClamp: 1,
                            children: i.title,
                        }),
                    ),
                    eb = (0, l.useCallback)(
                        (e, t) => {
                            var s;
                            return (null == (s = i.artists) ? void 0 : s.length)
                                ? (0, a.jsx)(x.i, { linkClassName: e, captionClassName: t, artists: i.artists, lineClamp: 1 })
                                : null;
                        },
                        [i.artists],
                    ),
                    ev = Y({ id: 'entity-names.clip-name' }, { clipName: i.title }),
                    eh = (0, u.L)(() =>
                        i.isAvailable
                            ? (0, a.jsxs)(v.t, {
                                  className: (0, s.$)(Q().cover, U().cover, U().cover_withoutOffset, P),
                                  radius: 'xs',
                                  onMouseEnter: el,
                                  onMouseLeave: en,
                                  children: [
                                      i.previewUrl &&
                                          (0, a.jsx)('video', {
                                              className: U().media,
                                              ref: er,
                                              poster: i.thumbnail && (0, c.createAvatarVideoUrl)(i.thumbnail, 80),
                                              playsInline: !0,
                                              muted: !0,
                                              loop: !0,
                                              'aria-hidden': !0,
                                              children: (0, a.jsx)('source', { src: i.previewUrl, type: 'video/mp4' }),
                                          }),
                                      i.thumbnail &&
                                          (0, a.jsx)(b._V, {
                                              className: U().image,
                                              src: i.thumbnail,
                                              fit: 'cover',
                                              withAvatarReplace: !0,
                                              size: 80,
                                              createUrlReplacer: c.createAvatarVideoUrl,
                                              alt: ev,
                                          }),
                                      void 0 !== i.duration &&
                                          H &&
                                          (0, a.jsx)(h.HL, {
                                              variant: 'span',
                                              className: (0, s.$)(U().duration, Q().duration),
                                              type: 'entity',
                                              size: 'xs',
                                              weight: 'medium',
                                              role: 'text',
                                              'aria-label': F,
                                              children: (0, a.jsx)('span', { 'aria-hidden': 'true', children: (0, f.E)(i.duration, i.duration) }),
                                          }),
                                      (0, a.jsx)(D.D, { variant: 'filled', className: U().playButton, onClick: e_, iconSize: V }),
                                  ],
                              })
                            : (0, a.jsxs)(v.t, {
                                  className: (0, s.$)(Q().cover, Q().unavailable, P),
                                  radius: 'xs',
                                  children: [
                                      (0, a.jsx)(b.Ab, {
                                          className: U().image,
                                          iconVariant: 'unavailable',
                                          iconSize: 'xs',
                                          'data-test-id': d.S7.ENTITY_COVER_FALLBACK_IMAGE,
                                      }),
                                      (0, a.jsx)(D.D, { variant: 'filled', className: U().playButton, iconSize: V, disabled: !0 }),
                                  ],
                              }),
                    );
                return (0, a.jsxs)(M.C, {
                    ref: q,
                    'data-intersection-property-id': Z,
                    className: (0, s.$)(w().root, { [w().root_disabled]: !i.isAvailable }, Q().root, o),
                    onClick: eu,
                    'data-test-id': d.Kq.clip.HORIZONTAL_CLIP_CARD,
                    children: [
                        eh,
                        (0, a.jsx)(O.r, {
                            isDisabled: !i.isAvailable,
                            title: ep,
                            artistsComponent: eb,
                            getDescriptionTexts: i.getDescriptionTexts,
                            explicitMarkVariant: i.explicitDisclaimer,
                            isLiked: i.isLiked,
                        }),
                        (0, a.jsx)(X, { className: w().controlsBar, clip: i, likeIconSize: W }),
                    ],
                });
            });
        },
        69748: (e) => {
            e.exports = {
                plate: 'MixesGridMixCard_plate__ONH3P',
                root: 'MixesGridMixCard_root__HHE7z',
                subcover: 'MixesGridMixCard_subcover__z5sBj',
                link: 'MixesGridMixCard_link__D3_S6',
                header: 'MixesGridMixCard_header__t24VH',
                title: 'MixesGridMixCard_title__fKTCy',
                cover: 'MixesGridMixCard_cover__Ra3ic',
            };
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
        71583: (e) => {
            e.exports = {
                root: 'ShimmerMapBlock_root__TAa25',
                heading: 'ShimmerMapBlock_heading__rF7ts',
                mapImage: 'ShimmerMapBlock_mapImage__bQbYD',
                address: 'ShimmerMapBlock_address__GgNdC',
                metroStations: 'ShimmerMapBlock_metroStations__omTcd',
            };
        },
        71670: (e, t, i) => {
            'use strict';
            i.d(t, { X: () => s });
            var a = i(55178);
            let s = () =>
                (0, a.useCallback)((e) => {
                    {
                        let t = window.history.state;
                        window.history.replaceState(t, '', e);
                    }
                }, []);
        },
        71730: (e, t, i) => {
            'use strict';
            i.d(t, { L: () => p });
            var a = i(32290),
                s = i(63618),
                r = i(55178),
                o = i(60900),
                l = i(39407),
                n = i(63423),
                c = i(82586),
                d = i(71926),
                m = i(58534),
                _ = i(70718),
                u = i.n(_);
            let p = (e) => {
                let { reloadBlocks: t, closeToast: i } = e,
                    _ = (0, r.useRef)(null),
                    { formatMessage: p } = (0, o.A)();
                (0, r.useEffect)(() => {
                    var e;
                    null == (e = _.current) || e.focus();
                }, []);
                let b = (0, r.useMemo)(
                    () =>
                        (0, a.jsxs)('div', {
                            className: u().message,
                            children: [
                                (0, a.jsx)(d.HL, {
                                    className: u().text,
                                    variant: 'div',
                                    type: 'controls',
                                    size: 'm',
                                    children: (0, a.jsx)(l.A, { id: 'error-messages.error-load-part-page' }),
                                }),
                                (0, a.jsx)(n.$, {
                                    ref: _,
                                    className: u().button,
                                    onClick: t,
                                    variant: 'text',
                                    'aria-label': p({ id: 'interface-actions.reload-part-page' }),
                                    icon: (0, a.jsx)(c.I, { variant: 'reset', size: 'xxs', className: u().icon }),
                                }),
                            ],
                        }),
                    [p, t],
                );
                return (0, a.jsx)(m.$, { className: (0, s.$)(u().root, u().important), message: b, closeToast: i });
            };
        },
        71906: (e, t, i) => {
            'use strict';
            i.d(t, { R: () => a });
            let a = '#b239f3';
        },
        73474: (e, t, i) => {
            'use strict';
            var a;
            (i.d(t, { p: () => a }),
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
                })(a || (a = {})));
        },
        73654: (e, t, i) => {
            'use strict';
            i.d(t, { P: () => S });
            var a = i(32290),
                s = i(92708),
                r = i(55178),
                o = i(60900),
                l = i(90346),
                n = i(45477),
                c = i(75582),
                d = i(57594),
                m = i(90357),
                _ = i(63618),
                u = i(39407),
                p = i(21732),
                b = i(74196),
                v = i(71926),
                h = i(29038),
                x = i(11323),
                C = i(61258),
                A = i(58534),
                j = i(80271),
                T = i.n(j);
            let N = (e) => {
                    let { closeToast: t, albumTitle: i, coverUri: s, isPresave: l, entityTitle: n, className: c } = e,
                        { formatMessage: d } = (0, o.A)(),
                        m = (0, r.useMemo)(
                            () => (l ? (0, a.jsx)(u.A, { id: 'notifications-info.added-to' }) : (0, a.jsx)(u.A, { id: 'notifications-info.removed-from' })),
                            [l],
                        ),
                        j = (0, r.useMemo)(
                            () => (l ? (0, a.jsx)(u.A, { id: 'notifications-info.to-collection' }) : (0, a.jsx)(u.A, { id: 'notifications-info.from-collection' })),
                            [l],
                        ),
                        N = (0, r.useMemo)(
                            () =>
                                l
                                    ? d({ id: 'notifications-info.album-added-to-collection-aria-label' }, { entity: n })
                                    : d({ id: 'notifications-info.album-removed-from-collection-aria-label' }, { entity: n }),
                            [l, n, d],
                        ),
                        I = (0, r.useMemo)(
                            () =>
                                (0, a.jsxs)(v.HL, {
                                    className: T().text,
                                    variant: 'div',
                                    type: 'controls',
                                    size: 'm',
                                    'data-test-id': p.S7.BASE_NOTIFICATION_PRESAVE_TEXT,
                                    'aria-hidden': !0,
                                    children: [
                                        (0, a.jsx)(u.A, { id: 'entity-names.album' }),
                                        '\xa0',
                                        (0, a.jsxs)(v.HL, { className: T().title, variant: 'span', type: 'controls', size: 'm', lineClamp: 1, children: [n, '\xa0'] }),
                                        m,
                                        '\xa0',
                                        (0, a.jsx)(C.N, {
                                            className: T().link,
                                            href: '/collection/albums?tab='.concat(h.H.UPCOMING_ALBUMS),
                                            title: String(j),
                                            children: (0, a.jsx)(v.HL, { variant: 'span', type: 'controls', size: 'm', lineClamp: 1, children: j }),
                                        }),
                                    ],
                                }),
                            [n, m, j],
                        );
                    return (0, a.jsx)(A.$, {
                        className: (0, _.$)(T().root, c),
                        message: (0, a.jsxs)(a.Fragment, { children: [(0, a.jsx)(b.q, { children: (0, a.jsx)('p', { role: 'alert', 'aria-label': N }) }), I] }),
                        cover: (0, a.jsx)(x.B, { className: T().image, src: s, size: 100, fit: 'cover', alt: i, withAvatarReplace: !0 }),
                        closeToast: t,
                        coverRadius: 's',
                    });
                },
                I = (e) => {
                    let { upcomingAlbum: t, closeToast: i } = e;
                    return (0, a.jsx)(N, { closeToast: i, albumTitle: t.title, coverUri: t.coverUri, entityTitle: t.title, isPresave: t.isPresave });
                },
                S = (e) => {
                    let { user: t } = (0, d.g)(),
                        { notify: i } = (0, c.l)(),
                        [_, u] = (0, r.useState)(!1),
                        { formatMessage: p } = (0, o.A)();
                    return (0, r.useCallback)(async () => {
                        if (!t.isAuthorized)
                            return void i((0, a.jsx)(m.h, { error: p({ id: 'authorization-messages.need-to-authorizate' }) }), { containerId: n.u.ERROR });
                        if (_) return;
                        let r = { ...(0, s.HO)(e), isPresave: !e.isPresave };
                        u(!0);
                        let o = await e.toggleLike();
                        (u(!1),
                            o === l.J.OK
                                ? i((0, a.jsx)(I, { upcomingAlbum: r }), { containerId: n.u.INFO })
                                : i((0, a.jsx)(m.h, { error: p({ id: 'error-messages.error-during-action' }) }), { containerId: n.u.ERROR }));
                    }, [t.isAuthorized, _, e, i, p]);
                };
        },
        74381: (e, t, i) => {
            'use strict';
            i.d(t, { k: () => c });
            var a = i(32290),
                s = i(63618),
                r = i(79856),
                o = i(90011),
                l = i.n(o);
            let n = (e) => {
                    let { isActive: t } = e;
                    return (0, a.jsxs)('div', {
                        className: (0, s.$)(l().shimmer, l().donation),
                        children: [
                            (0, a.jsx)(r.W, { isActive: t, radius: 'round', className: l().shimmerCover }),
                            (0, a.jsxs)('div', {
                                className: l().shimmerContainer,
                                children: [
                                    (0, a.jsxs)('div', {
                                        className: l().shimmerText,
                                        children: [
                                            (0, a.jsx)(r.W, { isActive: t, radius: 'xxxl', className: l().shimmerArtist }),
                                            (0, a.jsx)(r.W, { isActive: t, radius: 'xxxl', className: l().shimmerGoal }),
                                        ],
                                    }),
                                    (0, a.jsx)(r.W, { isActive: t, radius: 'xxxl', className: l().shimmerButton }),
                                ],
                            }),
                        ],
                    });
                },
                c = (e) => Array.from({ length: 10 }, (t, i) => (0, a.jsx)(n, { isActive: e }, i));
        },
        74553: (e) => {
            e.exports = {
                root: 'InStyle_root__ZsdXE',
                controls: 'InStyle_controls__mGqhj',
                header: 'InStyle_header__C2AWP',
                important: 'InStyle_important__msPsl',
                tab: 'InStyle_tab__DeURY',
                tabCarousel: 'InStyle_tabCarousel__SXqBO',
                item: 'InStyle_item__e5_Qz',
            };
        },
        75127: (e, t, i) => {
            'use strict';
            i.d(t, { T: () => r });
            var a = i(32290),
                s = i(37340);
            let r = (e) => Array.from({ length: e }, (e, t) => (0, a.jsx)(s.W, {}, t));
        },
        75314: (e, t, i) => {
            'use strict';
            i.d(t, { J: () => r, o: () => s });
            var a = i(14257);
            let s = { [a.S.Dark]: 'ym-dark-theme', [a.S.Light]: 'ym-light-theme' },
                r = (e) => {
                    switch (e) {
                        case a.S.Light:
                        case a.S.Dark:
                            return s[e];
                        default:
                            return '';
                    }
                };
        },
        77279: (e) => {
            e.exports = {
                root: 'CollectionArtistsAndTopWithItems_root__tR4BR',
                controls: 'CollectionArtistsAndTopWithItems_controls__Z_VQb',
                itemContainer: 'CollectionArtistsAndTopWithItems_itemContainer__xF00m',
                actionItem: 'CollectionArtistsAndTopWithItems_actionItem__7xPUf',
                important: 'CollectionArtistsAndTopWithItems_important__TEa6m',
                item: 'CollectionArtistsAndTopWithItems_item__fPqL0',
            };
        },
        78381: (e) => {
            e.exports = { root: 'ItemList_root__0fUbd', shimmer: 'ItemList_shimmer__hIZtA' };
        },
        79114: (e, t, i) => {
            'use strict';
            i.d(t, { Y: () => C });
            var a = i(96194),
                s = i(32290),
                r = i(63618),
                o = i(96103),
                l = i(55178),
                n = i(85472),
                c = i(6752),
                d = i(50212),
                m = i(80585),
                _ = i.n(m);
            let u = (0, o.PA)((e) => {
                    let { forwardRef: t, data: i, ...a } = e,
                        o = (0, c.L)(() => {
                            if (null == i ? void 0 : i.release)
                                return (0, s.jsx)(d.Z, { ...a, className: _().release, containerClassName: _().releaseCard, block: i.release });
                        }),
                        l = (0, c.L)(() => {
                            if (null == i ? void 0 : i.upcomingRelese)
                                return (0, s.jsx)(d.Z, { ...a, className: _().release, containerClassName: _().releaseCard, block: i.upcomingRelese });
                        }),
                        m = (0, c.L)(() => {
                            if (null == i ? void 0 : i.popularTracks)
                                return (0, s.jsx)(d.Z, {
                                    ...a,
                                    className: (0, r.$)(_().popularTracks, { [_().popularTracks_withReleaseBlock]: !!(null != l ? l : o) }),
                                    block: i.popularTracks,
                                });
                        });
                    return (0, s.jsx)('section', {
                        ref: t,
                        className: _().root,
                        ...(0, n.getDataAttrFromProps)(a),
                        children: (0, s.jsxs)('div', { className: _().container, children: [m, null != l ? l : o] }),
                    });
                }),
                p = (0, l.forwardRef)((e, t) => (0, s.jsx)(u, { forwardRef: t, ...e }));
            var b = i(92989),
                v = i.n(b);
            let h = (0, o.PA)((e) => {
                    let { forwardRef: t, data: i, ...a } = e,
                        r = (0, c.L)(() => {
                            if (null == i ? void 0 : i.familiarYou) return (0, s.jsx)(d.Z, { ...a, block: i.familiarYou });
                        }),
                        o = (0, c.L)(() => {
                            if (null == i ? void 0 : i.artistPick) return (0, s.jsx)(d.Z, { ...a, block: i.artistPick });
                        });
                    return (0, s.jsxs)('section', { ref: t, className: v().root, ...(0, n.getDataAttrFromProps)(a), children: [o, r] });
                }),
                x = (0, l.forwardRef)((e, t) => (0, s.jsx)(h, { forwardRef: t, ...e })),
                C = { [a.t.ARTIST_POPULAR_TRACKS_AND_RELEASES]: p, [a.t.FAMILIAR_YOU_AND_ARTIST_PICK]: x };
        },
        79589: (e, t, i) => {
            'use strict';
            i.d(t, { V: () => P });
            var a = i(32290),
                s = i(63618),
                r = i(96103),
                o = i(55178),
                l = i(99923),
                n = i(21732),
                c = i(91027),
                d = i(44989),
                m = i(58359),
                _ = i(63423),
                u = i(86269),
                p = i(23352),
                b = i(32641),
                v = i(57594),
                h = i(79406),
                x = i(68243),
                C = i(37997),
                A = i(17811),
                j = i(28470),
                T = i(37456),
                N = i(74416),
                I = i(48922),
                S = i(2792),
                f = i(37240),
                L = i(62376),
                g = i(19522),
                y = i(12578),
                R = i(62980),
                k = i(52575),
                E = i.n(k);
            let P = (0, r.PA)((e) => {
                let {
                        artistId: t,
                        concert: i,
                        meta: r,
                        viewUuid: k,
                        radius: P = 'l',
                        className: w,
                        shouldSendAnalyticsOnHide: O,
                        forceAfishaWidget: M,
                        shouldShowMask: D,
                    } = e,
                    { state: B, toggleTrue: V, toggleFalse: U } = (0, d.e)(!1),
                    { experiments: W } = (0, v.g)(),
                    z = !M && W.checkExperiment(h.z.WebNextConcertPage, 'on'),
                    { href: H } = (0, x.u)('/concert/:concertId', { params: { concertId: i.id } }),
                    K = (0, b.Z)(H),
                    Y = ((e) => {
                        let { artistId: t, viewUuid: i } = e,
                            a = (0, N.st)(),
                            { hash: s } = (0, N.gf)(),
                            { pageId: r } = (0, f.$)(),
                            { objectsCount: l, objectType: n, objectId: c, objectPosX: d, objectPosY: m, objectPos: _ } = (0, S.J)(),
                            u = (0, L.U)(),
                            p = (0, o.useCallback)(() => {
                                let e = (0, A.F)({
                                    params: { hash: s, artistId: t, objectsCount: l, objectType: n, objectId: c, objectPosX: d, objectPosY: m },
                                    logger: u,
                                    context: 'useSendEventOnConcertShowed',
                                });
                                a && e && (0, j.HB)(a.evgenInstance, e);
                            }, [a, t, s, u, c, d, m, n, l]),
                            b = (0, o.useCallback)(() => {
                                let e = (0, A.F)({
                                    params: { hash: s, artistId: t, viewUuid: i, objectId: c, objectPos: _ },
                                    logger: u,
                                    context: 'useSendEventOnConcertShowed',
                                });
                                a && e && i && (0, T.Z4)(a.evgenInstance, e);
                            }, [a, t, s, u, c, _, i]);
                        return (0, o.useCallback)(() => {
                            if (a && r && I.xK.includes(r))
                                switch (r) {
                                    case I._Q.ARTIST:
                                    case I._Q.CONCERT:
                                        p();
                                        break;
                                    case I._Q.ARTIST_CONCERTS:
                                        b();
                                }
                        }, [a, r, b, p]);
                    })({ artistId: t, viewUuid: k }),
                    F = (0, C.m)({ artistId: t, viewUuid: k }),
                    { ref: $, intersectionPropertyId: X } = (0, p.n)({ callback: null !== t ? Y : void 0, singleEvent: !O }),
                    G = (0, o.useId)(),
                    Q = (0, o.useId)(),
                    q = (0, g.Y)()(i),
                    Z = (0, c.c)((e) => {
                        ((0, m.P)(e, E().ripple), z && (K(e), F(l.FromArtistScreenTo.ConcertScreen)));
                    }),
                    J = (0, c.c)((e) => {
                        (V(), F(l.FromArtistScreenTo.ConcertPurchaseScreen), e.stopPropagation(), e.preventDefault());
                    });
                return (0, a.jsxs)(u.t, {
                    radius: P,
                    className: (0, s.$)(E().root, w, { [E().root_withConcertsRedesign]: i.isIdentityExperimentEnabled }),
                    ref: $,
                    'data-intersection-property-id': X,
                    onClick: Z,
                    children: [
                        i.datetime &&
                            (0, a.jsx)(R.d, {
                                datetime: i.datetime,
                                id: G,
                                className: (0, s.$)(E().date, { [E().dateWithMask]: D, [E().important]: D }),
                                dayClassName: E().dateColor,
                                monthClassName: E().dateColor,
                            }),
                        (0, o.cloneElement)(r, { id: Q, concert: i }),
                        i.dataSessionId &&
                            (0, a.jsxs)(a.Fragment, {
                                children: [
                                    (0, a.jsx)(_.$, {
                                        color: 'primary',
                                        radius: 'xxxl',
                                        className: E().button,
                                        'aria-describedby': ''.concat(G, ' ').concat(Q),
                                        'aria-label': q,
                                        onClick: J,
                                        'data-test-id': n.OA.concert.CONCERT_CARD_BUTTON,
                                        children: q,
                                    }),
                                    (0, a.jsx)(y.h, { dataSessionId: i.dataSessionId, isOpened: B, onOpen: V, onClose: U }),
                                ],
                            }),
                    ],
                });
            });
        },
        79897: (e, t, i) => {
            'use strict';
            i.d(t, { X: () => x });
            var a = i(32290),
                s = i(63618),
                r = i(55178),
                o = i(60900),
                l = i(39407),
                n = i(85472),
                c = i(63423),
                d = i(82586),
                m = i(86269),
                _ = i(71926),
                u = i(11323),
                p = i(61258),
                b = i(90011),
                v = i.n(b);
            let h = (e) => {
                    let { artist: t, goal: i, onNavigateToArtist: r, onNavigateToDonation: b, forwardRef: h, ...x } = e,
                        { formatMessage: C } = (0, o.A)();
                    return (0, a.jsxs)('div', {
                        ref: h,
                        className: (0, s.$)(v().root, v().donation),
                        ...(0, n.getDataAttrFromProps)(x),
                        children: [
                            (0, a.jsx)(m.t, {
                                radius: 'round',
                                className: v().cover,
                                children: (0, a.jsx)(p.N, {
                                    href: t.url,
                                    onClick: r,
                                    'aria-label': C({ id: 'entity-names.artist-name' }, { artistName: t.name }),
                                    children: (0, a.jsx)(u.B, {
                                        className: v().image,
                                        src: t.coverUri,
                                        isAvailable: t.isAvailable,
                                        size: 200,
                                        fit: 'cover',
                                        withAvatarReplace: !0,
                                        'aria-hidden': !0,
                                    }),
                                }),
                            }),
                            (0, a.jsxs)('div', {
                                className: v().container,
                                children: [
                                    (0, a.jsxs)('div', {
                                        className: v().text,
                                        children: [
                                            (0, a.jsx)(_.DZ, { variant: 'span', size: 'xs', weight: 'bold', lineClamp: 2, className: v().artist, children: t.name }),
                                            (0, a.jsx)(_.HL, {
                                                variant: 'span',
                                                type: 'text',
                                                size: 'l',
                                                weight: 'medium',
                                                lineClamp: 2,
                                                className: v().goal,
                                                children: i,
                                            }),
                                        ],
                                    }),
                                    (0, a.jsxs)(c.$, {
                                        role: 'link',
                                        size: 's',
                                        color: 'secondary',
                                        onClick: b,
                                        className: v().label,
                                        withRipple: !1,
                                        children: [
                                            (0, a.jsx)(d.I, { variant: 'ruble', size: 'xxxs' }),
                                            (0, a.jsx)(_.HL, {
                                                type: 'text',
                                                size: 'm',
                                                weight: 'medium',
                                                variant: 'span',
                                                children: (0, a.jsx)(l.A, { id: 'donation.support-button' }),
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                        ],
                    });
                },
                x = (0, r.forwardRef)((e, t) => (0, a.jsx)(h, { forwardRef: t, ...e }));
        },
        79915: (e) => {
            e.exports = {
                root: 'MixCard_root__9tPLV',
                header: 'MixCard_header__j7Zpo',
                title: 'MixCard_title__nhghp',
                cover: 'MixCard_cover__oSu73',
                covers: 'MixCard_covers__S61hz',
                covers_stack: 'MixCard_covers_stack__VeHDp',
                covers_radial: 'MixCard_covers_radial__orE40',
            };
        },
        80097: (e, t, i) => {
            'use strict';
            i.d(t, { x: () => u });
            var a = i(32290),
                s = i(63618),
                r = i(55178),
                o = i(85472),
                l = i(75245),
                n = i(19620),
                c = i(49522),
                d = i(98307),
                m = i.n(d);
            let _ = (e) => {
                    let {
                            className: t,
                            forwardRef: i,
                            headerClassName: d,
                            containerClassName: _,
                            headingVariant: u,
                            title: p,
                            viewAllActionLink: b,
                            description: v,
                            children: h,
                            ...x
                        } = e,
                        C = (0, r.useId)(),
                        A = (0, r.useRef)(null);
                    return (0, a.jsxs)('section', {
                        ref: i,
                        className: (0, s.$)(m().root, t),
                        ...(0, o.getDataAttrFromProps)(x),
                        children: [
                            (0, a.jsx)(n.T, {
                                className: d,
                                labeledForId: C,
                                title: p,
                                description: v,
                                viewAllActionLink: b,
                                controls: (0, a.jsx)(c.X, { className: m().controls, carouselRef: A }),
                                headingVariant: u,
                                withDescription: !!v,
                            }),
                            (0, a.jsx)(l.F, { ref: A, itemClassName: (0, s.$)(m().item, m().important), className: _, 'aria-labelledby': C, children: h }),
                        ],
                    });
                },
                u = (0, r.forwardRef)((e, t) => (0, a.jsx)(_, { forwardRef: t, ...e }));
        },
        80271: (e) => {
            e.exports = {
                link: 'BaseNotificationPresave_link__4uQhM',
                title: 'BaseNotificationPresave_title__bEloI',
                text: 'BaseNotificationPresave_text__3Kv9j',
                image: 'BaseNotificationPresave_image__Hb7ve',
            };
        },
        80389: (e) => {
            e.exports = { root: 'PlaylistFiltersShimmer_root__Pam_a', shimmer: 'PlaylistFiltersShimmer_shimmer__Grx4y' };
        },
        80585: (e) => {
            e.exports = {
                root: 'ArtistPopularTracksAndReleases_root__rN5Wk',
                container: 'ArtistPopularTracksAndReleases_container__EQIVk',
                popularTracks: 'ArtistPopularTracksAndReleases_popularTracks__HEZ73',
                popularTracks_withReleaseBlock: 'ArtistPopularTracksAndReleases_popularTracks_withReleaseBlock__WwiJr',
                release: 'ArtistPopularTracksAndReleases_release__9NDdR',
                releaseCard: 'ArtistPopularTracksAndReleases_releaseCard__uHtao',
            };
        },
        80872: (e, t, i) => {
            'use strict';
            i.d(t, { A: () => a });
            let a = {
                src: '/_next/static/media/artist.d238337d.webp',
                height: 327,
                width: 327,
                blurDataURL:
                    'data:image/webp;base64,UklGRpIAAABXRUJQVlA4WAoAAAAQAAAABwAABwAAQUxQSDcAAAABN6AmAAFGLREF9q0aERG4Qx2sIslqLIhkYEj/WQECkgJwcBfR/5j9mQEnwGchWUgR7oAz228AAFZQOCA0AAAA0AEAnQEqCAAIAAJAOCWUAAMX+VdAjqAA/ubxr1dKCvvMhnGE/guc0nvMLJJkD5h+3R4AAA==',
                blurWidth: 8,
                blurHeight: 8,
            };
        },
        81497: (e) => {
            e.exports = { item: 'ArtistPopularTracks_item__PsKwP', important: 'ArtistPopularTracks_important__hdfzU' };
        },
        82219: (e, t, i) => {
            'use strict';
            i.d(t, { U: () => a });
            let a = (e, t) => {
                let i = e / 60;
                return i <= 45 ? t({ id: 'time.minutes-left' }, { minutes: Math.round(i) }) : t({ id: 'time.hours' }, { hours: Math.round((i / 60) * 2) / 2 });
            };
        },
        82359: (e) => {
            e.exports = {
                root: 'Q2vSuggestions_root__i22DA',
                loadingText: 'Q2vSuggestions_loadingText__BJVPX',
                'loading-shimmer': 'Q2vSuggestions_loading-shimmer__KVw_H',
                carousel: 'Q2vSuggestions_carousel__cmIj5',
                carouselWithArrows: 'Q2vSuggestions_carouselWithArrows__EscuL',
                'content-appear': 'Q2vSuggestions_content-appear__yrwAp',
                carouselWithArrows_arrowLeft_hidden: 'Q2vSuggestions_carouselWithArrows_arrowLeft_hidden__N_rpe',
                carouselWithArrows_arrowRight_hidden: 'Q2vSuggestions_carouselWithArrows_arrowRight_hidden__yiDMn',
                carouselWithArrows_arrow_hidden: 'Q2vSuggestions_carouselWithArrows_arrow_hidden__ZuI4D',
                controls: 'Q2vSuggestions_controls__SJZet',
                item: 'Q2vSuggestions_item__rDItX',
            };
        },
        84468: (e, t, i) => {
            'use strict';
            i.d(t, { v: () => a });
            let a = (e) => !!(e && 'object' == typeof e && 'source' in e);
        },
        85819: (e) => {
            e.exports = { filters: 'PlaylistWithTracksAndFilters_filters__koC2A', shimmer: 'PlaylistWithTracksAndFilters_shimmer__vrNPe' };
        },
        86168: (e, t, i) => {
            'use strict';
            i.d(t, { Q: () => a });
            var a = (function (e) {
                return ((e.ALL = 'all'), e);
            })({});
        },
        86384: (e) => {
            e.exports = {
                positionIndicator: 'ArtistTopCard_positionIndicator__Bs_Ga',
                crownIcon: 'ArtistTopCard_crownIcon__yxAH3',
                progressIcon: 'ArtistTopCard_progressIcon__gHcbF',
                progressIcon_up: 'ArtistTopCard_progressIcon_up__PeHBx',
                progressIcon_down: 'ArtistTopCard_progressIcon_down__0PKeO',
                progressIcon_same: 'ArtistTopCard_progressIcon_same___SujQ',
                progressIcon_new: 'ArtistTopCard_progressIcon_new__w3wA6',
                listenTime: 'ArtistTopCard_listenTime__P1_jw',
            };
        },
        86806: (e, t, i) => {
            'use strict';
            i.d(t, { F: () => d });
            var a,
                s = i(95716),
                r = i(55178),
                o = {
                    352: (e) => {
                        e.exports = s;
                    },
                    810: (e) => {
                        e.exports = a || (a = i.t(r, 2));
                    },
                },
                l = {};
            function n(e) {
                var t = l[e];
                if (void 0 !== t) return t.exports;
                var i = (l[e] = { exports: {} });
                return (o[e](i, i.exports, n), i.exports);
            }
            var c = {};
            ((() => {
                (Object.defineProperty(c, '__esModule', { value: !0 }), (c.useDebouncedToggle = void 0));
                let e = n(352),
                    t = n(810);
                c.useDebouncedToggle = (i) => {
                    let { delay: a, initialState: s, throttleTimeout: r } = i,
                        o = (0, t.useRef)(null),
                        [l, n] = (0, t.useState)(!!s),
                        c = (0, t.useMemo)(
                            () =>
                                (0, e.throttle)(() => {
                                    (n(!s),
                                        o.current && window.clearTimeout(o.current),
                                        (o.current = window.setTimeout(() => {
                                            n(!!s);
                                        }, a)));
                                }, r),
                            [a, s, r],
                        ),
                        d = (0, t.useCallback)(() => {
                            (n(!!s), o.current && window.clearTimeout(o.current));
                        }, [s]);
                    return (
                        (0, t.useEffect)(
                            () => () => {
                                o.current && window.clearTimeout(o.current);
                            },
                            [],
                        ),
                        { state: l, handleDebouncedToggle: c, reset: d }
                    );
                };
            })(),
                c.__esModule);
            var d = c.useDebouncedToggle;
        },
        88467: (e, t, i) => {
            'use strict';
            i.d(t, { N: () => p });
            var a = i(32290),
                s = i(63618),
                r = i(96103),
                o = i(21732),
                l = i(4550),
                n = i(50162),
                c = i(86269),
                d = i(71926),
                m = i(61258),
                _ = i(79915),
                u = i.n(_);
            let p = (0, r.PA)((e) => {
                let { className: t, title: i, weblink: r, covers: _ = [], coverSize: p = 100, imagesLayoutType: b, headingVariant: v = 'h3' } = e;
                return (0, a.jsx)(m.N, {
                    href: r,
                    'data-test-id': o.OA.mix.MIX_CARD,
                    children: (0, a.jsxs)(c.t, {
                        className: (0, s.$)(u().root, t),
                        radius: 'l',
                        children: [
                            (0, a.jsx)('div', {
                                className: u().header,
                                children: (0, a.jsx)(d.HL, {
                                    variant: v,
                                    size: 'xs',
                                    weight: 'bold',
                                    className: u().title,
                                    lineClamp: 2,
                                    'data-test-id': o.OA.mix.MIX_CARD_HEADER,
                                    children: i,
                                }),
                            }),
                            (0, a.jsxs)('div', {
                                className: (0, s.$)(u().covers, { [u().covers_radial]: b === l.R.RADIAL, [u().covers_stack]: b === l.R.STACK }),
                                'data-test-id': o.OA.mix.MIX_CARD_COVERS,
                                children: [
                                    (0, a.jsx)(n._V, {
                                        src: _[2],
                                        withAvatarReplace: !0,
                                        fit: 'contain',
                                        className: u().cover,
                                        size: p,
                                        'data-test-id': o.OA.mix.MIX_CARD_COVER_IMAGE_3,
                                    }),
                                    (0, a.jsx)(n._V, {
                                        src: _[1],
                                        withAvatarReplace: !0,
                                        fit: 'contain',
                                        className: u().cover,
                                        size: p,
                                        'data-test-id': o.OA.mix.MIX_CARD_COVER_IMAGE_2,
                                    }),
                                    (0, a.jsx)(n._V, {
                                        src: _[0],
                                        withAvatarReplace: !0,
                                        fit: 'contain',
                                        className: u().cover,
                                        size: p,
                                        'data-test-id': o.OA.mix.MIX_CARD_COVER_IMAGE_1,
                                    }),
                                ],
                            }),
                        ],
                    }),
                });
            });
        },
        89616: (e) => {
            e.exports = { station: 'MetroStation_station__mCvqj', stationColors: 'MetroStation_stationColors__MgJFV', colorSpan: 'MetroStation_colorSpan__cFHsy' };
        },
        90011: (e) => {
            e.exports = {
                root: 'DonationCard_root__81nc5',
                donation: 'DonationCard_donation__SlArJ',
                cover: 'DonationCard_cover__Mqb3g',
                image: 'DonationCard_image__xABTn',
                container: 'DonationCard_container__1xkqs',
                text: 'DonationCard_text__mdeXx',
                artist: 'DonationCard_artist__xq4Jw',
                goal: 'DonationCard_goal__6BdcG',
                label: 'DonationCard_label__T_hDw',
                shimmer: 'DonationCard_shimmer__cMO7r',
                shimmerContainer: 'DonationCard_shimmerContainer__9ZH20',
                shimmerText: 'DonationCard_shimmerText__TrtjR',
                shimmerCover: 'DonationCard_shimmerCover__U6Rwp',
                shimmerArtist: 'DonationCard_shimmerArtist__jRQCV',
                shimmerGoal: 'DonationCard_shimmerGoal__UGSTd',
                shimmerButton: 'DonationCard_shimmerButton__LYfOm',
            };
        },
        90346: (e, t, i) => {
            'use strict';
            var a;
            (i.d(t, { J: () => a }),
                (function (e) {
                    ((e.OK = 'ok'), (e.ERROR = 'error'));
                })(a || (a = {})));
        },
        90625: (e, t, i) => {
            'use strict';
            i.d(t, { D: () => z });
            var a = i(32290),
                s = i(90040),
                r = i(57249),
                o = i(63618),
                l = i(96103),
                n = i(65493),
                c = i(21916),
                d = i(55178),
                m = i(60900),
                _ = i(99923),
                u = i(21732),
                p = i(91027),
                b = i(50162),
                v = i(71926),
                h = i(95481),
                x = i(47745),
                C = i(2969),
                A = i(84782),
                j = i(23352),
                T = i(37240),
                N = i(28999),
                I = i(43564),
                S = i(57594),
                f = i(14257),
                L = i(50),
                g = i(86562),
                y = i(97201),
                R = i(16078),
                k = i(50880),
                E = i.n(k),
                P = i(78570),
                w = i(80195);
            let O = async (e, t) => {
                let { loop: i = !1, markerId: a, frameRange: s, mode: r = 'forward' } = t,
                    o = null,
                    l = null;
                if (a) {
                    let t = e.markers().find((e) => e.name === a);
                    if (!t) return;
                    ((o = t.time), (l = t.time + t.duration));
                } else if (s) {
                    var n;
                    ((o = s.start), (l = null != (n = s.end) ? n : e.totalFrames));
                }
                null !== o &&
                    null !== l &&
                    (await Promise.all([e.setLoop(i), e.setMode(r), e.setSegment(o, l), e.setFrame('reverse' === r ? l : o)]), o !== l && (await e.play()));
            };
            var M = i(1001),
                D = i.n(M),
                B = i(49124);
            let V = { align: [0, 0.5], fit: 'contain' },
                U = { autoResize: !0, freezeOnOffscreen: !1 },
                W = n.default.default(
                    () =>
                        Promise.resolve()
                            .then(i.bind(i, 90040))
                            .then((e) => e.DotLottieWorkerReact),
                    { ssr: !1 },
                );
            {
                let e = B.env.USE_CDN_FOR_STATIC ? 'https://yastatic-net.ru/s3/music-frontend-static/music/vundefined' : window.location.origin;
                (0, s.setWasmUrl)(new URL(r, e).href);
            }
            let z = (0, l.PA)((e) => {
                var t, i, s, r, l, n;
                let { animationByTheme: k, animationConfig: M, className: B, lumenImages: z, requestAwakeLumenModal: H, vibe: K } = e,
                    { formatMessage: Y } = (0, m.A)(),
                    F = (0, c.useSearchParams)(),
                    $ = (0, R.z)(),
                    { pageId: X } = (0, T.$)(),
                    { blockIdForFrom: G } = (0, A.N)(),
                    { sendPlaySearchFeedback: Q } = (0, N.z)(),
                    q = (0, C.b)(),
                    Z = (0, x.N)(),
                    J = (0, h.f)(),
                    { ref: ee, intersectionPropertyId: et } = (0, j.n)(),
                    ei = (0, L.W)(),
                    { lumen: ea } = (0, S.g)(),
                    es = 'true' === F.get(y.K.LUMEN_AWAKE_PARAM),
                    er = ea.isEnabled && !ea.isTriedToLoadData,
                    eo = ea.isEnabled && !ea.isAwakened,
                    el = null != (i = ei.theme) ? i : f.S.Dark,
                    en = ea.getFallbackImage(),
                    ec = (0, d.useRef)(!1),
                    ed = (0, d.useRef)(M[K ? 'idle' : 'loading']),
                    em = (0, d.useRef)(void 0),
                    [e_, eu] = (0, d.useState)(null),
                    {
                        isPlaying: ep,
                        togglePlay: eb,
                        isCurrent: ev,
                    } = (0, I.B)({ blockIdForFrom: G, pageIdForFrom: X, seeds: null != (s = null == K ? void 0 : K.seeds) ? s : [] });
                ((0, d.useEffect)(() => J(), [J]),
                    (0, d.useEffect)(() => {
                        if (!e_ || ec.current) return;
                        let e = () => {
                            ((ec.current = !0), O(e_, ed.current));
                        };
                        return (e_.addEventListener('load', e), () => e_.removeEventListener('load', e));
                    }, [e_]),
                    (0, d.useEffect)(() => {
                        let e = ((e, t, i, a) =>
                            i || e === (null == a ? void 0 : a.loading)
                                ? t
                                    ? null == a
                                        ? void 0
                                        : a.playing
                                    : e === a.playing
                                      ? null == a
                                          ? void 0
                                          : a.paused
                                      : e === a.loading
                                        ? null == a
                                            ? void 0
                                            : a.idle
                                        : null
                                : null == a
                                  ? void 0
                                  : a.loading)(ed.current, ep, !!K, M);
                        e && e !== ed.current && ((ed.current = e), e_ && ec.current && O(e_, e));
                    }, [M, e_, ev, ep, K]));
                let eh = (0, p.c)(() => {
                    (em.current === (null == K ? void 0 : K.seedsId) || ep || ((em.current = null == K ? void 0 : K.seedsId), null == Q || Q()), eb(), q(!0));
                });
                (0, d.useEffect)(() => {
                    es && !er && K && (eo && (null == H || H(eh)), $([y.K.LUMEN_AWAKE_PARAM]));
                }, [H, $, es, eo, er, eh, K]);
                let ex = (0, p.c)(() => {
                        if (K) {
                            if (ep) {
                                (eb(), q(!1));
                                return;
                            }
                            if (eo) {
                                (Z({ to: _.AppScreen.LumenAwakeningScreen }), null == H || H(eh));
                                return;
                            }
                            eh();
                        }
                    }),
                    eC = (0, p.c)((e) => {
                        (e.code === g.v.SPACE || e.code === g.v.ENTER) && (e.preventDefault(), ex());
                    }),
                    eA = null != (r = null == K ? void 0 : K.title) ? r : Y({ id: 'entity-names.query-to-vibe-loading-title' }),
                    ej = null != (l = null == K ? void 0 : K.description) ? l : Y({ id: 'entity-names.query-to-vibe-loading-description' }),
                    eT = !ea.isEnabled || ea.isTriedToLoadData,
                    eN = ea.isEnabled ? (null != (n = null == ea || null == (t = ea.themes) ? void 0 : t[el].uri) ? n : en[el]) : (null != z ? z : en)[el],
                    eI = K ? u.OA.vibe.QUERY_TO_VIBE_BLOCK : u.OA.vibe.QUERY_TO_VIBE_LOADING_BLOCK,
                    eS = K && (!ea.isEnabled || ea.isTriedToLoadData);
                return (0, a.jsxs)('div', {
                    'aria-label': eA,
                    'aria-description': ej,
                    className: (0, o.$)(E().root, D().root, { [D().root_loading]: !K }, B),
                    tabIndex: 0,
                    onClick: ex,
                    onKeyDown: eC,
                    'data-test-id': eI,
                    children: [
                        (0, a.jsx)(W, { className: D().comet, layout: V, src: k[null != el ? el : f.S.Dark], renderConfig: U, dotLottieRefCallback: eu }),
                        (0, a.jsxs)('div', {
                            className: D().iconContainer,
                            children: [
                                ev && (0, a.jsx)(w.P, { className: D().iconPulse, stopAnimation: !ep }),
                                eT && (0, a.jsx)(b._V, { className: D().icon, src: eN, fit: 'cover', withAvatarReplace: !0, withFallback: !1, withLoadingIndicator: !1 }),
                            ],
                        }),
                        (0, a.jsx)(P.r, {
                            className: D().meta,
                            title: (0, a.jsx)(v.HL, { className: (0, o.$)(E().text, E().titleText, D().caption), size: 'm', variant: 'div', type: 'text', children: eA }),
                            description: ej,
                            titleLineClamp: 2,
                        }),
                        eS && (0, a.jsx)('div', { ref: ee, 'data-intersection-property-id': et }),
                    ],
                });
            });
        },
        90840: (e, t, i) => {
            'use strict';
            i.d(t, { Q: () => d });
            var a = i(21916),
                s = i(55178),
                r = i(14257),
                o = i(50),
                l = i(74523),
                n = i(97201);
            let c = { [r.S.Light]: 'yandex_music', [r.S.Dark]: 'yandex_music_dark' },
                d = () => {
                    let e = (0, a.useSearchParams)(),
                        { theme: t } = (0, o.W)();
                    return (0, s.useCallback)(
                        (i) => {
                            if (!t) return i;
                            let a = new URLSearchParams(e);
                            a.set('wl', c[t]);
                            let s = e.get(n.K.UTM_CAMPAIGN);
                            return (s && a.set('meta', 'campaignid_'.concat(s)), (0, l.C)(i, a));
                        },
                        [t, e],
                    );
                };
        },
        91037: (e) => {
            e.exports = {
                root: 'LikesAndHistory_root__KCuz_',
                carousel: 'LikesAndHistory_carousel__579RD',
                carouselItem: 'LikesAndHistory_carouselItem__Yq5Xw',
                favoritesCoverContainer: 'LikesAndHistory_favoritesCoverContainer__UUIDf',
                favoritesCover: 'LikesAndHistory_favoritesCover__Nt7Gm',
                historyIcon: 'LikesAndHistory_historyIcon__2FAMu',
                historyIconContainer: 'LikesAndHistory_historyIconContainer__KPPbS',
            };
        },
        91118: (e, t, i) => {
            'use strict';
            var a;
            (i.d(t, { n: () => a }),
                (function (e) {
                    ((e.ALBUM = 'album_tab'), (e.PRESAVED_ALBUM = 'presaved_album_tab'));
                })(a || (a = {})));
        },
        91555: (e) => {
            e.exports = {
                root: 'ConcertsBlock_root__d_1G3',
                controls: 'ConcertsBlock_controls__oULxu',
                item: 'ConcertsBlock_item__jMAX9',
                item_singleColumn: 'ConcertsBlock_item_singleColumn__p8ilp',
                preventScroll: 'ConcertsBlock_preventScroll__YeeZH',
                concertsColumn: 'ConcertsBlock_concertsColumn__2M2t_',
            };
        },
        91693: (e) => {
            e.exports = { root: 'Overview_root__2deXs' };
        },
        92989: (e) => {
            e.exports = { root: 'FamiliarYouAndArtistPick_root___Ihxe' };
        },
        97470: (e) => {
            e.exports = { text: 'Q2vSuggestion_text__d1vnX', root: 'Q2vSuggestion_root__Ep0ce' };
        },
        98307: (e) => {
            e.exports = {
                root: 'DonationCarousel_root__Uejjw',
                controls: 'DonationCarousel_controls__anVvP',
                item: 'DonationCarousel_item__89_B6',
                important: 'DonationCarousel_important__Y52Es',
            };
        },
        99424: (e, t, i) => {
            'use strict';
            var a;
            (i.d(t, { E: () => a }),
                (function (e) {
                    ((e.SHOW_AND_LOAD = 'SHOW_AND_LOAD'), (e.LOAD_AND_SHOW = 'LOAD_AND_SHOW'));
                })(a || (a = {})));
        },
    },
]);
