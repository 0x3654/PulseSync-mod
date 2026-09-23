(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [621],
    {
        2352: (e) => {
            e.exports = { root: 'TextShimmer_root__qqWug', text: 'TextShimmer_text__z8oN9' };
        },
        2969: (e, t, r) => {
            'use strict';
            r.d(t, { b: () => h });
            var l = r(55178),
                i = r(17811),
                a = r(92146),
                o = r(74416),
                n = r(6752),
                s = r(62376),
                d = r(1677),
                u = r(48922),
                c = r(84782),
                p = r(30915),
                _ = r(2792),
                m = r(37240),
                f = r(51012),
                v = r(47498);
            let x = [
                    u._Q.HOME,
                    u._Q.LANDING,
                    u._Q.NON_MUSIC,
                    u._Q.OWN_COLLECTION,
                    u._Q.SEARCH,
                    u._Q.CONCERTS,
                    u._Q.ALBUM,
                    u._Q.PLAYLIST,
                    u._Q.SLIDES_SCREEN,
                    u._Q.PROMOLANDING_ALBUM,
                    u._Q.WAVE_LANDING_SCREEN,
                    u._Q.COLLECTION_VIBE_ROOMS,
                    u._Q.MULTIVIBE_SENDING_INVITATION_SCREEN,
                    u._Q.MULTIVIBE_ACTION_SCREEN,
                    u._Q.MULTIVIBE_UNIFIED_SCREEN,
                ],
                h = () => {
                    let e = (0, o.st)(),
                        t = (0, s.U)(),
                        { hash: r } = (0, o.gf)(),
                        { pageId: h } = (0, m.$)(),
                        { tabId: g, tabPos: y, isTabSelectedByDefault: b } = (0, v.R)(),
                        { offsetBlockPosY: C } = (0, p.u)(),
                        { blockId: S, blockType: A, blockPosX: I, blockPosY: T, mainObjectId: j, mainObjectType: E } = (0, c.N)(),
                        { objectId: N, objectPosX: R, objectPosY: P, objectType: O, objectsCount: L } = (0, _.J)(),
                        { skeleton: M } = (0, f.b)(),
                        k = (0, n.L)(() => (void 0 !== C && void 0 !== T ? C + T : T));
                    return (0, l.useCallback)(
                        (l, o) => {
                            if (!e || !h || !u.xK.includes(h) || !l || !x.includes(h)) return;
                            let n = d.F[h];
                            if (!n) return;
                            let s = {
                                hash: r,
                                pageId: n,
                                entityType: A,
                                entityId: S,
                                entityPosX: I,
                                entityPosY: k,
                                objectId: null != o ? o : N,
                                objectType: O,
                                objectPosX: R,
                                objectPosY: P,
                                objectsCount: L,
                            };
                            (u.qG.includes(h) && ((s.tabId = g), (s.tabPos = y), (s.isTabSelectedByDefault = b)),
                                M && (s.skeletonId = M),
                                j && E && ((s.mainObjectType = E), (s.mainObjectId = j)));
                            let c = (0, i.F)({ params: s, logger: t, context: 'useSendEventOnBlockStarted' });
                            c && (0, a.er)(e.evgenInstance, c);
                        },
                        [e, h, r, A, S, I, k, N, O, R, P, L, M, j, E, t, g, y, b],
                    );
                };
        },
        3796: (e, t, r) => {
            'use strict';
            r.d(t, { J: () => a });
            var l = r(21916),
                i = r(55178);
            let a = (e) => {
                let t = (0, l.usePathname)(),
                    [r, a] = (0, i.useState)(!1);
                ((0, i.useEffect)(() => {
                    (window.Ya.Rum.spa.makeSpaSubPage(t), window.Ya.Rum.spa.startDataLoading(t));
                }),
                    (0, i.useEffect)(() => {
                        window.Ya.Rum.spa.getLastSpaSubPage(t) && e && !r && (window.Ya.Rum.spa.finishDataLoading(t), window.Ya.Rum.spa.startDataRendering(t), a(!0));
                    }, [e, r, t]));
            };
        },
        12113: (e, t, r) => {
            'use strict';
            r.d(t, { F: () => U });
            var l = r(32290),
                i = r(63618),
                a = r(62060),
                o = r(96103),
                n = r(55178),
                s = r(60900),
                d = r(85472),
                u = r(21732),
                c = r(71483),
                p = r(91027),
                _ = r(14934),
                m = r(50162),
                f = r(86269),
                v = r(71926),
                x = r(41677),
                h = r(56797),
                g = r(26089),
                y = r(94315),
                b = r(99872),
                C = r(37862),
                S = r(48922),
                A = r(23352),
                I = r(72396),
                T = r(52843),
                j = r(22191),
                E = r(63415),
                N = r(56755),
                R = r(90169),
                P = r(57594),
                O = r(13798),
                L = r(61258),
                M = r(90326),
                k = r(73325),
                w = r(96299),
                D = r.n(w);
            let U = (0, o.PA)((e) => {
                var t;
                let {
                        titleClassName: r,
                        artistLinkClassName: o,
                        clip: w,
                        withVideo: U = !0,
                        artistIdWithoutLink: W,
                        viewUuid: B,
                        shouldOpenModalOnCardClick: V = !0,
                    } = e,
                    { fullscreenVideoPlayer: K } = (0, P.g)(),
                    { formatMessage: H } = (0, s.A)(),
                    F = (0, b.C)(),
                    { from: z } = (0, I.f)({ pageId: S._Q.VIDEO_PLAYER, contextId: K.state.contextId, contextType: c.K.Various, blockId: C.U.CLIPS }),
                    Q = (0, j.P)(null != (t = w.duration) ? t : 0),
                    Y = (0, g.M)(B),
                    G = (0, h._)(B),
                    { ref: J, intersectionPropertyId: Z } = (0, A.n)({ callback: Y }),
                    X = (0, n.useRef)(null),
                    q = U && w.previewUrl,
                    $ = (0, p.c)(() => {
                        X.current && ((X.current.currentTime = 0), X.current.play());
                    }),
                    ee = (0, n.useMemo)(() => (0, a.A)($, 500), [$]),
                    et = (0, p.c)(() => {
                        var e;
                        null == (e = X.current) || e.pause();
                    }),
                    er = (0, n.useMemo)(() => K.ids.indexOf(w.clipId), [K, w.clipId]),
                    { isPlaying: el, togglePlay: ei } = (0, R.D)({
                        playContextParams: {
                            contextData: { type: c.K.Various, meta: { id: E.H.VARIOUS_CLIP_CONTEXT }, from: z },
                            queueParams: { index: er },
                            entitiesData: K.entitiesData,
                            loadContextMeta: !1,
                        },
                        entityId: String(w.clipId),
                        sonataState: K.state,
                        playbackId: N.V.CLIP,
                    }),
                    ea = V ? w.url : (0, y.J)(K.ids, er),
                    eo = (0, p.c)(() => {
                        V ? (F([w.clipId]), G()) : el || ei();
                    }),
                    en = (0, k.X)({ clip: w, callback: eo }),
                    es = H({ id: 'entity-names.clip-name' }, { clipName: w.title }),
                    ed = (0, n.useMemo)(
                        () =>
                            w.isAvailable
                                ? (0, l.jsxs)(f.t, {
                                      radius: 'm',
                                      className: (0, i.$)(D().view, D().cover),
                                      onMouseEnter: ee,
                                      onMouseLeave: et,
                                      onClick: en,
                                      children: [
                                          q &&
                                              (0, l.jsx)('video', {
                                                  className: D().media,
                                                  ref: X,
                                                  poster: w.thumbnail && (0, d.createAvatarVideoUrl)(w.thumbnail, 1280),
                                                  playsInline: !0,
                                                  muted: !0,
                                                  loop: !0,
                                                  'aria-hidden': !0,
                                                  children: (0, l.jsx)('source', { src: w.previewUrl, type: 'video/mp4' }),
                                              }),
                                          w.thumbnail &&
                                              (0, l.jsx)(m._V, {
                                                  className: D().image,
                                                  'aria-hidden': !0,
                                                  src: w.thumbnail,
                                                  fit: 'cover',
                                                  withAvatarReplace: !0,
                                                  size: 1280,
                                                  createUrlReplacer: d.createAvatarVideoUrl,
                                              }),
                                          void 0 !== w.duration &&
                                              (0, l.jsx)(v.HL, {
                                                  role: 'text',
                                                  'aria-label': Q,
                                                  variant: 'span',
                                                  className: D().duration,
                                                  type: 'entity',
                                                  size: 'xs',
                                                  weight: 'medium',
                                                  children: (0, l.jsx)('span', { 'aria-hidden': 'true', children: (0, T.E)(w.duration, w.duration) }),
                                              }),
                                          (0, l.jsx)(M.D, { variant: 'filled', className: D().playButton, onClick: en, iconSize: 'xl' }),
                                      ],
                                  })
                                : (0, l.jsx)(f.t, {
                                      radius: 'm',
                                      className: D().unavailableCover,
                                      children: (0, l.jsx)(m.Ab, { className: D().image, iconVariant: 'unavailable', 'data-test-id': u.S7.ENTITY_COVER_FALLBACK_IMAGE }),
                                  }),
                        [Q, w.isAvailable, w.thumbnail, w.previewUrl, w.duration, ee, et, en, q],
                    ),
                    eu = (0, n.useMemo)(
                        () =>
                            w.hasArtists
                                ? (0, l.jsx)(
                                      x.i,
                                      { linkClassName: (0, i.$)(D().artistLink, o), artists: w.artists, lineClamp: 1, withAllArtistsTitle: !0, artistIdWithoutLink: W },
                                      w.getKey('SeparatedArtists'),
                                  )
                                : null,
                        [W, w, o],
                    );
                return (0, l.jsx)(_.MN, {
                    ref: J,
                    className: D().root,
                    explicitMarkComponent:
                        w.explicitDisclaimer &&
                        (0, l.jsx)(O.N, { getDescriptionTexts: w.getDescriptionTexts, variant: w.explicitDisclaimer, size: 'xxs' }, w.getKey('ExplicitMarkIcon')),
                    'aria-label': es,
                    srTitle: (0, l.jsx)(L.N, { href: ea, onClick: en, children: es }),
                    title: (0, l.jsxs)(
                        v.HL,
                        {
                            className: (0, i.$)(D().title, r),
                            variant: 'div',
                            type: 'entity',
                            size: 'm',
                            weight: 'medium',
                            lineClamp: 1,
                            children: [
                                (0, l.jsx)(L.N, {
                                    className: D().titleLink,
                                    href: ea,
                                    'aria-label': es,
                                    onClick: en,
                                    'data-test-id': u.Kq.clip.CLIP_META_TITLE,
                                    children: w.title,
                                }),
                                w.version && (0, l.jsx)(v.HL, { className: D().version, variant: 'span', children: ' '.concat(w.version) }),
                            ],
                        },
                        w.getKey('Title'),
                    ),
                    'data-intersection-property-id': Z,
                    view: ed,
                    description: eu,
                    'data-test-id': u.Kq.clip.CLIP_CARD,
                });
            });
        },
        12989: (e, t, r) => {
            'use strict';
            r.d(t, { D: () => h });
            var l = r(55178),
                i = r(17811),
                a = r(92146),
                o = r(74416),
                n = r(6752),
                s = r(62376),
                d = r(1677),
                u = r(48922),
                c = r(84782),
                p = r(30915),
                _ = r(18746),
                m = r(2792),
                f = r(37240),
                v = r(51012),
                x = r(47498);
            let h = () => {
                let e = (0, s.U)(),
                    t = (0, o.st)(),
                    { hash: r } = (0, o.gf)(),
                    { pageId: h, displayReasonId: g } = (0, f.$)(),
                    { tabId: y, tabPos: b, isTabSelectedByDefault: C } = (0, x.R)(),
                    { offsetBlockPosY: S } = (0, p.u)(),
                    { blockType: A, blockId: I, blockPosX: T, blockPosY: j, mainObjectId: E, mainObjectType: N, displayReasonId: R } = (0, c.N)(),
                    { filterKey: P, filterValue: O, filterPos: L } = (0, _.G)(),
                    { objectType: M, objectsCount: k, objectId: w, objectPosX: D, objectPosY: U } = (0, m.J)(),
                    { skeleton: W } = (0, v.b)(),
                    B = null != R ? R : g,
                    V = (0, n.L)(() => (void 0 !== S && void 0 !== j ? S + j : j));
                return (0, l.useCallback)(
                    (l, o) => {
                        if (!t || !h || !u.xK.includes(h) || !u.fD.includes(h)) return;
                        let n = d.F[h];
                        if (!n) return;
                        let s = {
                            hash: r,
                            pageId: n,
                            entityType: A,
                            entityId: I,
                            entityPosX: T,
                            entityPosY: V,
                            objectsCount: k,
                            viewUuid: o,
                            objectType: M,
                            objectId: w,
                            objectPosX: D,
                            objectPosY: U,
                        };
                        (void 0 !== P && ((s.filterKey = P), (s.filterValue = O), (s.filterPos = L)),
                            u.qG.includes(h) && ((s.tabId = y), (s.tabPos = b), (s.isTabSelectedByDefault = C)),
                            W && (s.skeletonId = W),
                            'string' == typeof E && 'string' == typeof N && ((s.mainObjectType = N), (s.mainObjectId = E)),
                            B && (s.displayReasonId = B));
                        let c = (0, i.F)({ params: s, logger: e, context: 'useSendEventOnBlockShowedOrHidden' });
                        c && (l ? (0, a.Pf)(t.evgenInstance, c) : (0, a.nv)(t.evgenInstance, c));
                    },
                    [t, B, I, T, V, A, P, L, O, r, C, e, E, N, w, D, U, M, k, h, W, y, b],
                );
            };
        },
        13798: (e, t, r) => {
            'use strict';
            r.d(t, { N: () => v });
            var l = r(32290),
                i = r(63618),
                a = r(96103),
                o = r(55178),
                n = r(60900),
                s = r(80229),
                d = r(21732),
                u = r(6752),
                c = r(82586),
                p = r(57594),
                _ = r(60244),
                m = r(90006),
                f = r.n(m);
            let v = (0, a.PA)((e) => {
                let { className: t, getDescriptionTexts: r, trackId: a, containerClassName: m, variant: v, size: x = 'xxxs', ...h } = e,
                    { formatMessage: g } = (0, n.A)(),
                    {
                        settings: { isMobile: y },
                    } = (0, p.g)(),
                    [b, C] = (0, o.useState)(null),
                    S = (0, u.L)(() => {
                        switch (v) {
                            case s.JU.E:
                                return 'explicit';
                            case s.JU.AGE_12:
                            case s.JU.AGE_16:
                            case s.JU.AGE_18:
                                return 'adult';
                            case s.JU.EXCLAMATION:
                        }
                        return 'exclamation';
                    }),
                    A = (0, o.useMemo)(() => g({ id: 'extra-explicit.explicit-mark' }), [g]);
                (0, o.useEffect)(() => {
                    r && r().then(C);
                }, [r, a]);
                let I = (null == b ? void 0 : b.join('\n')) || '',
                    T = !!(null == b ? void 0 : b.length) && !y,
                    j = I.length > 0 ? I : A;
                return (0, l.jsx)(_.k, {
                    description: I,
                    placement: 'bottom-start',
                    enabled: T,
                    children: (0, l.jsx)('span', {
                        className: m,
                        children: (0, l.jsx)(c.I, {
                            className: (0, i.$)(f().explicitMark, t),
                            'aria-label': j,
                            variant: S,
                            size: x,
                            ...h,
                            'data-test-id': d.S7.EXPLICIT_MARK_ICON,
                        }),
                    }),
                });
            });
        },
        14934: (e, t, r) => {
            'use strict';
            r.d(t, { MN: () => u, hg: () => d });
            var l,
                i = r(55178),
                a = {
                    5881: (e, t, r) => {
                        function l() {
                            for (var e, t, r = 0, l = ''; r < arguments.length;)
                                (e = arguments[r++]) &&
                                    (t = (function e(t) {
                                        var r,
                                            l,
                                            i = '';
                                        if ('string' == typeof t || 'number' == typeof t) i += t;
                                        else if ('object' == typeof t)
                                            if (Array.isArray(t)) for (r = 0; r < t.length; r++) t[r] && (l = e(t[r])) && (i && (i += ' '), (i += l));
                                            else for (r in t) t[r] && (i && (i += ' '), (i += r));
                                        return i;
                                    })(e)) &&
                                    (l && (l += ' '), (l += t));
                            return l;
                        }
                        (r.r(t), r.d(t, { clsx: () => l, default: () => i }));
                        let i = l;
                    },
                    8765: (e, t, r) => {
                        (r.r(t), r.d(t, { default: () => l }));
                        let l = {
                            root: 'KL50tMDvfAdw_9MzcVht',
                            bottom: 'bL0wE1Bui8zpIZbvMVL3',
                            top: 'P6gOmyFtXyetUz0dqhF3',
                            bottom_left: 'RvWjZle1erRBXzJEF9Zj',
                            bottom_right: 'bBh7lvgdfF7bqNqlK78Q',
                            label: 'FgncHYHPDU14dLddn0wF',
                            controls: 'PBhQ1krUFiAybu_BS2YE',
                            controls_radius_default: 'cSCPJSa6Lx6OnpM4ljX9',
                            controls_radius_round: 'kHUOlGxOaBwL4P3jEBXU',
                            controls_visible: 'QZC5vQL9p11QsEkdkTtZ',
                        };
                    },
                    3550: (e, t, r) => {
                        (r.r(t), r.d(t, { default: () => l }));
                        let l = {
                            root: 'laBJlJAaqEVS0i_4Ot3l',
                            titleContainer: 'LmhA6nlLyzxwYIX31gYa',
                            wrapper: 'IO4kvpDGNI2J0CHwcKSf',
                            content: 'l8SktNpJd30JWp1owp_b',
                            content_left: 'Mb33JzAWx9EjbQAeScFt',
                            description: 'kbcBH9meMfY6Du_xQNnI',
                            content_center: 'Dp41JRuLGzwV3MHBYHMC',
                            content_right: 'eOsuNCgUirwAw16iUKLu',
                            title: 'FAmeEGy52GX1k0xZuPDn',
                            content_linesCount_1: 'Cfj1Wkh1bvQMCfk1mZwK',
                            content_linesCount_2: 'lV4OXsCTURC5K1s9Q5mx',
                            content_linesCount_3: 'PVBDIXF2RTUThmbNT9sV',
                            content_linesCount_4: 'ND4XIwkIYtNoU89EOISr',
                        };
                    },
                    4353: (e, t, r) => {
                        (r.r(t), r.d(t, { default: () => l }));
                        let l = { root: 'LizdJ2L0HW7JWOvPrfly' };
                    },
                    7319: (e, t, r) => {
                        (r.r(t), r.d(t, { default: () => l }));
                        let l = { root: 'eaYyesBmJL_NbkgoYR1c', focusable: 'uL1dD5rxgI4bPmfyMMe7' };
                    },
                    1246: (e, t, r) => {
                        (r.r(t), r.d(t, { default: () => l }));
                        let l = {
                            root_controls_xxs: 'tRaaBpDMg9Qu8v6gKjtn',
                            root_entity_xxs: 'M9zvtlcpLUVn6DKdcHhj',
                            root_text_xxs: 'ln0PYYwDmFnfYxCDJsFU',
                            root_controls_xs: 'n5AeWEsJC3_AYXcbK4Lt',
                            root_entity_xs: '__hrMKGmNbw54T54IUyh',
                            root_text_xs: 'SehSa7OyRpC2nzYTVb2Q',
                            root_controls_s: '_oBLf5gprWsKjCw4Ce58',
                            root_entity_s: 'mxSPe5xpZnie9gpIqacd',
                            root_text_s: 'Ai2iRN9elHpk_u5splD6',
                            root_controls_m: 'tk7ahHRDYXJMMB879KUA',
                            root_entity_m: 'Z_WIr2W8JU4MPQek3hgR',
                            root_text_m: 'g3qWNP6xl__7qxNmtrvd',
                            root_controls_l: 'grvxapJE3vGArOKDWf6n',
                            root_entity_l: 'Esj5A1UeSi4xV4tZ839D',
                            root_text_l: 'V3WU123oO65AxsprotU9',
                            root_weight_normal: 'ZYV27jeWd30QDXu4GhaH',
                            root_weight_medium: '_3_Mxw7Si7j2g4kWjlpR',
                            root_weight_bold: 'Vi7Rd0SZWqD17F0872TB',
                        };
                    },
                    2445: (e, t, r) => {
                        (r.r(t), r.d(t, { default: () => l }));
                        let l = {
                            root_size_xs: 'qJJ288377iHlWN_RXeEE',
                            root_size_s: '_sd8Q9d_Ttn0Ufe4ISWS',
                            root_size_m: 'Ctk8dbecq31Qh7isOJPQ',
                            root_size_l: 'M_Djh6ppIkCO3A2k_BTA',
                            root_size_xl: 'dtxlzGQMPAbM2MEndXWX',
                            root_size_xxl: 'IUb9XLplTAoZqne9rNUL',
                            root_size_xxxl: 'ZYZamUwql_rfFR4RpI2B',
                            root_size_xxxxl: 'ZBZyxow5njdq8z5dnRPY',
                            root_size_xxxxxl: 'WdvQQNwdDNCdRSwRkAtT',
                            root_weight_bold: 'nSU6fV9y80WrZEfafvww',
                            root_weight_black: 'KBeGPPK4DinQzAP41Y_N',
                        };
                    },
                    61: (e, t, r) => {
                        (r.r(t), r.d(t, { default: () => l }));
                        let l = {
                            root: '_MWOVuZRvUQdXKTMcOPx',
                            root_clamp: 'LezmJlldtbHWqU7l1950',
                            root_clamp_oneline: 'oyQL2RSmoNbNQf3Vc6YI',
                            root_clamp_multiline: 'jMyoZB5J9iZbzJmWOrF0',
                        };
                    },
                    9097: (e, t) => {
                        var r = Symbol.for('react.transitional.element');
                        function l(e, t, l) {
                            var i = null;
                            if ((void 0 !== l && (i = '' + l), void 0 !== t.key && (i = '' + t.key), 'key' in t))
                                for (var a in ((l = {}), t)) 'key' !== a && (l[a] = t[a]);
                            else l = t;
                            return { $$typeof: r, type: e, key: i, ref: void 0 !== (t = l.ref) ? t : null, props: l };
                        }
                        ((t.Fragment = Symbol.for('react.fragment')), (t.jsx = l), (t.jsxs = l));
                    },
                    4377: (e, t, r) => {
                        e.exports = r(9097);
                    },
                    7742: function (e, t, r) {
                        var l =
                            (this && this.__importDefault) ||
                            function (e) {
                                return e && e.__esModule ? e : { default: e };
                            };
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.CardControls = void 0));
                        let i = r(4377),
                            a = r(5881),
                            o = r(8532),
                            n = l(r(8765));
                        t.CardControls = (e) => {
                            let {
                                    className: t,
                                    playControl: r,
                                    likeControl: l,
                                    menuControl: s,
                                    pinControl: d,
                                    trailerControl: u,
                                    isVisible: c,
                                    radius: p = 'default',
                                    bottomContainerClassName: _,
                                    labelText: m,
                                } = e,
                                f = u || r,
                                v = s || l;
                            return (0, i.jsxs)('div', {
                                className: (0, a.clsx)(
                                    n.default.root,
                                    n.default.controls,
                                    { [n.default.controls_visible]: c },
                                    n.default['controls_radius_'.concat(p)],
                                    t,
                                ),
                                children: [
                                    (0, i.jsx)('div', { className: n.default.top, children: d }),
                                    (0, i.jsxs)('div', {
                                        className: (0, a.clsx)(n.default.bottom, _),
                                        children: [
                                            f && (0, i.jsxs)('div', { className: n.default.bottom_left, children: [u, r] }),
                                            v && (0, i.jsxs)('div', { className: n.default.bottom_right, children: [s, l] }),
                                        ],
                                    }),
                                    !!m && (0, i.jsx)(o.Label, { className: n.default.label, children: m }),
                                ],
                            });
                        };
                    },
                    7093: function (e, t, r) {
                        var l =
                            (this && this.__importDefault) ||
                            function (e) {
                                return e && e.__esModule ? e : { default: e };
                            };
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.EntityCard = void 0));
                        let i = r(4377),
                            a = r(810),
                            o = r(5881),
                            n = r(8903),
                            s = r(6530),
                            d = l(r(3550)),
                            u = (e) => {
                                let {
                                    forwardRef: t,
                                    view: r,
                                    className: l,
                                    textPosition: a = 'left',
                                    contentLinesCount: u = 2,
                                    title: c,
                                    description: p,
                                    explicitMarkComponent: _,
                                    chart: m,
                                    children: f,
                                    srTitle: v,
                                    wrapperClassName: x,
                                    ...h
                                } = e;
                                return (0, i.jsxs)('div', {
                                    className: (0, o.clsx)(d.default.root, l),
                                    ref: t,
                                    ...h,
                                    children: [
                                        (0, i.jsx)(s.SROnly, { tabIndex: -1, children: null != v ? v : c }),
                                        (0, i.jsx)('div', { className: d.default.viewContainer, children: r }),
                                        (0, i.jsxs)('div', {
                                            className: (0, o.clsx)(d.default.wrapper, x),
                                            children: [
                                                m,
                                                (0, i.jsxs)('div', {
                                                    className: (0, o.clsx)(
                                                        d.default.content,
                                                        d.default['content_'.concat(a)],
                                                        d.default['content_linesCount_'.concat(u)],
                                                    ),
                                                    children: [
                                                        c &&
                                                            (0, i.jsxs)('div', {
                                                                className: d.default.titleContainer,
                                                                children: [
                                                                    (0, i.jsx)(n.Caption, {
                                                                        className: d.default.title,
                                                                        variant: 'div',
                                                                        type: 'entity',
                                                                        size: 's',
                                                                        weight: 'medium',
                                                                        lineClamp: 2,
                                                                        children: c,
                                                                    }),
                                                                    _,
                                                                ],
                                                            }),
                                                        p,
                                                        f,
                                                    ],
                                                }),
                                            ],
                                        }),
                                    ],
                                });
                            };
                        t.EntityCard = (0, a.forwardRef)((e, t) => (0, i.jsx)(u, { forwardRef: t, ...e }));
                    },
                    2018: function (e, t, r) {
                        var l =
                            (this && this.__importDefault) ||
                            function (e) {
                                return e && e.__esModule ? e : { default: e };
                            };
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.Label = void 0));
                        let i = r(4377),
                            a = r(5881),
                            o = r(8903),
                            n = l(r(4353));
                        t.Label = (e) => {
                            let { children: t, className: r, size: l = 's', ...s } = e;
                            return (0, i.jsx)(o.Caption, {
                                variant: 'div',
                                type: 'text',
                                size: l,
                                lineClamp: 1,
                                className: (0, a.clsx)(n.default.root, r),
                                ...s,
                                children: t,
                            });
                        };
                    },
                    8532: (e, t, r) => {
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.Label = void 0));
                        var l = r(2018);
                        Object.defineProperty(t, 'Label', {
                            enumerable: !0,
                            get: function () {
                                return l.Label;
                            },
                        });
                    },
                    5531: function (e, t, r) {
                        var l =
                            (this && this.__importDefault) ||
                            function (e) {
                                return e && e.__esModule ? e : { default: e };
                            };
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.SROnly = void 0));
                        let i = r(4377),
                            a = r(5881),
                            o = r(810),
                            n = l(r(7319));
                        t.SROnly = (e) => {
                            let { className: t, focusable: r, children: l, ...s } = e,
                                d = (0, a.clsx)(n.default.root, { [n.default.focusable]: r }, t);
                            return (0, o.isValidElement)(l)
                                ? (0, o.cloneElement)(l, { ...s, className: (0, a.clsx)(d, l.props.className) })
                                : (0, i.jsx)('span', { className: d, ...s, children: l });
                        };
                    },
                    6530: (e, t, r) => {
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.SROnly = void 0));
                        var l = r(5531);
                        Object.defineProperty(t, 'SROnly', {
                            enumerable: !0,
                            get: function () {
                                return l.SROnly;
                            },
                        });
                    },
                    3412: function (e, t, r) {
                        var l =
                            (this && this.__importDefault) ||
                            function (e) {
                                return e && e.__esModule ? e : { default: e };
                            };
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.Caption = t.CaptionComponent = void 0));
                        let i = r(4377),
                            a = r(5881),
                            o = r(810),
                            n = r(5987),
                            s = l(r(1246));
                        ((t.CaptionComponent = (e) => {
                            let { forwardRef: t, variant: r, type: l = 'text', size: o = 's', className: d, children: u, weight: c = 'medium', ...p } = e;
                            return (0, i.jsx)(n.Typography, {
                                variant: r,
                                ref: t,
                                className: (0, a.clsx)(s.default.root, s.default['root_'.concat(l, '_').concat(o)], s.default['root_weight_'.concat(c)], d),
                                ...p,
                                children: u,
                            });
                        }),
                            (t.Caption = (0, o.forwardRef)((e, r) => (0, i.jsx)(t.CaptionComponent, { forwardRef: r, ...e }))));
                    },
                    1641: function (e, t, r) {
                        var l =
                            (this && this.__importDefault) ||
                            function (e) {
                                return e && e.__esModule ? e : { default: e };
                            };
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.Heading = t.HeadingComponent = void 0));
                        let i = r(4377),
                            a = r(5881),
                            o = r(810),
                            n = r(5987),
                            s = l(r(2445));
                        ((t.HeadingComponent = (e) => {
                            let { forwardRef: t, variant: r, weight: l = 'bold', size: o = 's', className: d, children: u, ...c } = e;
                            return (0, i.jsx)(n.Typography, {
                                variant: r,
                                ref: t,
                                className: (0, a.clsx)(s.default.root, s.default['root_size_'.concat(o)], s.default['root_weight_'.concat(l)], d),
                                ...c,
                                children: u,
                            });
                        }),
                            (t.Heading = (0, o.forwardRef)((e, r) => (0, i.jsx)(t.HeadingComponent, { forwardRef: r, ...e }))));
                    },
                    5987: function (e, t, r) {
                        var l =
                            (this && this.__importDefault) ||
                            function (e) {
                                return e && e.__esModule ? e : { default: e };
                            };
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.Typography = t.TypographyComponent = void 0));
                        let i = r(4377),
                            a = r(5881),
                            o = r(810),
                            n = l(r(61));
                        function s(e) {
                            let { forwardRef: t, style: r, className: l, children: o, variant: s, lineClamp: d, ...u } = e,
                                c = d && 'string' == typeof o ? o : void 0;
                            return (0, i.jsx)(s, {
                                style: { ...r, WebkitLineClamp: d },
                                ref: t,
                                title: c,
                                className: (0, a.clsx)(
                                    n.default.root,
                                    { [n.default.root_clamp]: d && d > 0, [n.default.root_clamp_oneline]: d && 1 === d, [n.default.root_clamp_multiline]: d && d > 1 },
                                    l,
                                ),
                                ...u,
                                children: o,
                            });
                        }
                        ((t.TypographyComponent = s), (t.Typography = (0, o.forwardRef)((e, t) => (0, i.jsx)(s, { forwardRef: t, ...e }))));
                    },
                    8903: (e, t, r) => {
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.Heading = t.Caption = void 0));
                        var l = r(3412);
                        Object.defineProperty(t, 'Caption', {
                            enumerable: !0,
                            get: function () {
                                return l.Caption;
                            },
                        });
                        var i = r(1641);
                        Object.defineProperty(t, 'Heading', {
                            enumerable: !0,
                            get: function () {
                                return i.Heading;
                            },
                        });
                    },
                    810: (e) => {
                        e.exports = l || (l = r.t(i, 2));
                    },
                },
                o = {};
            function n(e) {
                var t = o[e];
                if (void 0 !== t) return t.exports;
                var r = (o[e] = { exports: {} });
                return (a[e].call(r.exports, r, r.exports, n), r.exports);
            }
            ((n.d = (e, t) => {
                for (var r in t) n.o(t, r) && !n.o(e, r) && Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
            }),
                (n.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
                (n.r = (e) => {
                    ('undefined' != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
                        Object.defineProperty(e, '__esModule', { value: !0 }));
                }));
            var s = {};
            (() => {
                (Object.defineProperty(s, 'X$', { value: !0 }), (s.kk = s.m7 = void 0));
                var e = n(7093);
                Object.defineProperty(s, 'm7', {
                    enumerable: !0,
                    get: function () {
                        return e.EntityCard;
                    },
                });
                var t = n(7742);
                Object.defineProperty(s, 'kk', {
                    enumerable: !0,
                    get: function () {
                        return t.CardControls;
                    },
                });
            })();
            var d = s.kk,
                u = s.m7;
            s.X$;
        },
        16510: (e) => {
            e.exports = { root: 'ArtistItem_root__Q_mgJ', image: 'ArtistItem_image__5rKWF', cover: 'ArtistItem_cover__FTvHo' };
        },
        19383: (e, t, r) => {
            'use strict';
            r.d(t, { l: () => c });
            var l = r(55178),
                i = r(27576),
                a = r(91027),
                o = r(70204),
                n = r(34186),
                s = r(57594),
                d = r(85017),
                u = r(19379);
            let c = (e) => {
                let {
                        entity: t,
                        entityType: r,
                        getStorageKey: c,
                        callback: p,
                        onAfterHandled: _,
                        onBeforeHandle: m,
                        onReject: f,
                        modalBehavior: v,
                        preventDefaultWhenSafe: x,
                    } = e,
                    {
                        disclaimerModalState: h,
                        modals: { disclaimerModal: g },
                    } = (0, s.g)(),
                    y = (0, l.useRef)(String((0, i.A)())),
                    b = (0, l.useRef)(!1),
                    C = (0, l.useRef)(!1),
                    S = (0, l.useRef)(0),
                    A = (0, l.useRef)(!0),
                    I = (0, n.N)().get(o.U2),
                    T = (0, a.c)((e) => {
                        (x && (null == e || e.preventDefault()), p && p(e), _ && _());
                    });
                return (
                    (0, l.useEffect)(() => {
                        h.isUnsafeDisclaimerConfirmed && h.id === y.current && !b.current && (T(), (b.current = !0));
                    }, [h.id, h.isUnsafeDisclaimerConfirmed, T]),
                    (0, l.useEffect)(() => {
                        h.isNeededToLoad && (null == t ? void 0 : t.isLegalRejected) && t.resolvedModalData && h.setModalData(t.resolvedModalData);
                    }, [h, null == t ? void 0 : t.isLegalRejected, null == t ? void 0 : t.resolvedModalData]),
                    (0, l.useEffect)(
                        () => () => {
                            A.current = !1;
                        },
                        [],
                    ),
                    (0, a.c)(async (e) => {
                        if (!C.current) {
                            C.current = !0;
                            try {
                                if ((null == m || m(e), t)) {
                                    var l, i, a;
                                    let o = t.getDisclaimerEntityRef(r),
                                        n = null != (l = null == c ? void 0 : c(t, o)) ? l : ''.concat(o.entityType, '_').concat(o.entityId),
                                        s = t.isLegalRejected || t.isUnsafeLegal;
                                    if (t.isUnsafeLegal) {
                                        let t = I.get(u.c.ExEx);
                                        if (null == t ? void 0 : t.includes(n)) return void T(e);
                                    }
                                    if (s) {
                                        (null == e || e.preventDefault(),
                                            t.isUnsafeLegal && h.setType(d.Z.UNSAFE),
                                            h.setDisclaimerRejectHandler(null != f ? f : null),
                                            h.setId(y.current),
                                            h.setEntityKey(n),
                                            h.setCurrentEntityRef(o.entityType, o.entityId),
                                            h.setShouldHistoryBack(!!(null == v ? void 0 : v.shouldHistoryBack)),
                                            h.setShouldCloseModalOnOutsidePress(null == (i = null == v ? void 0 : v.closeOnOutside) || i),
                                            h.setShouldCloseModalOnEscape(null == (a = null == v ? void 0 : v.closeOnEscape) || a),
                                            (S.current += 1));
                                        let r = S.current,
                                            l = await t.getModalDisclaimerData();
                                        if (S.current !== r || !1 === A.current) return;
                                        (h.setModalData(null != l ? l : null), (b.current = !1), g.open());
                                        return;
                                    }
                                    (x && (null == e || e.preventDefault()), T(e));
                                    return;
                                }
                                (x && (null == e || e.preventDefault()), T(e));
                            } finally {
                                C.current = !1;
                            }
                        }
                    })
                );
            };
        },
        20541: (e) => {
            e.exports = {
                root: 'ClipCardShimmer_root__sIvNr',
                cover: 'ClipCardShimmer_cover__yA4jz',
                title: 'ClipCardShimmer_title__MCApK',
                text: 'ClipCardShimmer_text__ajZGv',
            };
        },
        20917: (e, t, r) => {
            Promise.resolve().then(r.bind(r, 24522));
        },
        22191: (e, t, r) => {
            'use strict';
            r.d(t, { P: () => a });
            var l = r(60900),
                i = r(29913);
            let a = (e) => {
                let { seconds: t, hours: r, minutes: a } = (0, i.e)(e),
                    { formatMessage: o } = (0, l.A)();
                return o({ id: 'time.hours-minutes-seconds' }, { hours: r, minutes: a, seconds: t });
            };
        },
        22714: (e, t, r) => {
            'use strict';
            r.d(t, { n: () => o });
            var l = r(32290),
                i = r(55178),
                a = r(1176);
            let o = (e) => {
                let { pageId: t, pageEntityId: r, displayReasonId: o, pageStyle: n, pagePlacement: s, children: d } = e,
                    u = (0, i.useMemo)(() => ({ pageId: t, pageEntityId: r, displayReasonId: o, pageStyle: n, pagePlacement: s }), [t, r, o, n, s]);
                return (0, l.jsx)(a.r.Provider, { value: u, children: d });
            };
        },
        23352: (e, t, r) => {
            'use strict';
            r.d(t, { n: () => o });
            var l = r(55178),
                i = r(12989),
                a = r(80536);
            let o = function () {
                let { callback: e, singleEvent: t, withViewUuid: r } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    o = (0, l.useRef)(null),
                    n = (0, i.D)(),
                    s = (0, l.useId)(),
                    d = (0, l.useContext)(a.B),
                    u = (0, l.useCallback)(
                        (l, i) => {
                            (e ? e(l, r ? i : void 0) : n(l, i), t && d.unobserveElement(s));
                        },
                        [e, d, s, n, t, r],
                    );
                return (
                    (0, l.useEffect)(
                        () => (
                            d.observeElement({ elementRef: o, elementId: s, callback: u }),
                            () => {
                                d.unobserveElement(s);
                            }
                        ),
                        [e, d, u, s, n],
                    ),
                    { ref: o, intersectionPropertyId: s }
                );
            };
        },
        24522: (e, t, r) => {
            'use strict';
            (r.r(t), r.d(t, { default: () => G }));
            var l = r(32290),
                i = r(21916),
                a = r(63618),
                o = r(96103),
                n = r(55178),
                s = r(60900),
                d = r(21732),
                u = r(91027),
                c = r(71926),
                p = r(64170),
                _ = r(54639),
                m = r(12113),
                f = r(50819),
                v = r(7999),
                x = r(91853),
                h = r(84427),
                g = r(48922),
                y = r(22714),
                b = r(83808),
                C = r(83920),
                S = r(3796),
                A = r(57594),
                I = r(11262),
                T = r(28724),
                j = r(97841),
                E = r(32468),
                N = r(74694),
                R = r(45257),
                P = r(57815),
                O = r(22556),
                L = r(44242),
                M = r(14459),
                k = r(83992),
                w = r(42125),
                D = r(24535),
                U = r(47216),
                W = r(94821),
                B = r(26365);
            async function V(e, t) {
                var r, l, i;
                if (!e) return { title: '', description: '', openGraph: {}, twitter: {}, appLinks: {}, other: {} };
                let a = await (0, w.W)(t.locale),
                    o = a({ id: 'metadata.artist-clips-title' }, { artistName: e.artist.name }),
                    n = a({ id: 'metadata.artist-clips-description' }, { artistName: e.artist.name });
                return {
                    title: o,
                    description: n,
                    openGraph: (0, D.i)({
                        ogTitle: o,
                        ogDescription: n,
                        ogType: 'website',
                        fullUrl: null != (r = t.fullUrl) ? r : '',
                        locale: t.locale,
                        customImage: (0, k.v)({ tld: t.tld }),
                        siteName: a({ id: 'metadata.yandex-music' }),
                    }),
                    twitter: (0, U.H)({ cardType: W.W.SUMMARY_LARGE_IMAGE, title: o, description: n }),
                    facebook: (0, M.k)(),
                    appLinks: (0, L.X)({
                        additional: { ...t, url: null != (l = t.url) ? l : '', fullUrl: null != (i = t.fullUrl) ? i : '', host: t.host },
                        appName: a({ id: 'metadata.yandex-music' }),
                    }),
                    alternates: (0, B.S)('/artist/:artistId/clips', t.tld, { params: { artistId: e.artist.id } }),
                };
            }
            var K = r(22644),
                H = r(51714),
                F = r(42731),
                z = r.n(F);
            let Q = (0, o.PA)((e) => {
                var t, r;
                let { artistId: o, preloadedArtist: L, preloadedClips: M } = e,
                    {
                        artist: k,
                        disclaimerModalState: w,
                        settings: { isMobile: D },
                    } = (0, A.g)(),
                    { formatMessage: U } = (0, s.A)(),
                    { contentScrollRef: W, setContentScrollRef: B } = (0, C.g)(),
                    F = (0, b.W)(),
                    Q = (0, h.d)();
                (0, x.S)({ artist: null == (t = k.meta) ? void 0 : t.artist, shouldHistoryBack: !0 });
                let Y = (0, u.c)((e) => {
                    k.clipsSubpage.getData({ artistId: o, page: e, pageSize: _.EV });
                });
                ((0, I.X)(k.clipsSubpage.pagesLoader, Y),
                    (0, H.G)(o),
                    (0, K._)(k, o),
                    (0, n.useEffect)(
                        () => () => {
                            k.clipsSubpage.reset();
                        },
                        [k, k.clipsSubpage],
                    ),
                    (0, S.J)(k.clipsSubpage.isResolved),
                    ((e) => {
                        var t;
                        (0, n.useEffect)(() => {
                            (null == e ? void 0 : e.meta) &&
                                !e.infoLoadingState.isLoading &&
                                e.meta.artist &&
                                V({ artist: (0, P.E)(e.meta.artist) }, { fullUrl: null, locale: null, url: null, tld: '', host: '' }).then((e) => {
                                    (0, O.j)(e);
                                });
                        }, [null == e ? void 0 : e.meta, null == e ? void 0 : e.infoLoadingState.isLoading, null == e || null == (t = e.meta) ? void 0 : t.artist]);
                    })(k));
                let G = k.clipsSubpage.isShimmerVisible ? 20 : k.clipsSubpage.items.length,
                    J = (0, n.useMemo)(() => ({ Footer: () => (0, l.jsx)(E.A, { children: (0, l.jsx)(j.w, { className: z().footer }) }) }), []),
                    Z = (0, n.useMemo)(() => U({ id: 'page.artist-clips-header' }, { artistName: k.commonSubPage.artistName }), [k.commonSubPage.artistName, U]),
                    X = [];
                return (k.clipsSubpage.isNeededToLoad && X.push(k.clipsSubpage.getData({ artistId: o, page: 0, pageSize: _.EV, preloadedClips: M })),
                k.infoLoadingState.isNeededToLoad && X.push(k.getInfo({ artistId: o, preloadedArtist: L })),
                X.length && (0, n.use)(Promise.allSettled(X)),
                (k.clipsSubpage.isNotFound || !Q) && (0, i.notFound)(),
                null == (r = k.meta) ? void 0 : r.artist.isLegalRejected)
                    ? (0, l.jsx)(T.M, { modalState: w })
                    : k.clipsSubpage.isRejected
                      ? (0, l.jsx)(p.SomethingWentWrong, {})
                      : (0, l.jsx)(y.n, {
                            pageId: g._Q.ARTIST_CLIPS,
                            pageEntityId: o,
                            children: (0, l.jsx)(v.h, {
                                scrollElement: W,
                                outerTitle: Z,
                                children: (0, l.jsxs)('div', {
                                    className: z().root,
                                    'data-test-id': d.Xk.artist.ARTIST_CLIPS_PAGE,
                                    children: [
                                        (0, l.jsx)(N.Y, {
                                            variant: N.V.TEXT,
                                            withForwardControl: !1,
                                            withBackwardControl: F.canBack,
                                            children: (0, l.jsx)(c.DZ, { variant: 'h1', weight: 'bold', size: 'xl', lineClamp: 1, children: Z }),
                                        }),
                                        (0, l.jsx)(R.$, {
                                            className: (0, a.$)(z().scrollContainer, z().important),
                                            listClassName: z().content,
                                            itemClassName: z().item,
                                            customComponents: J,
                                            itemContentCallback: (e) => {
                                                let t = k.clipsSubpage.items[e];
                                                return t ? (0, l.jsx)(m.F, { clip: t }, t.clipId) : (0, l.jsx)(f.k, { isActive: !0 });
                                            },
                                            totalCount: G,
                                            onGetDataByPage: Y,
                                            pageSize: _.EV,
                                            totalRequests: k.clipsSubpage.requestsCount,
                                            handleRef: B,
                                            context: { listAriaLabel: U({ id: 'entity-names.artist-clips-list' }) },
                                            isMobileLayout: D,
                                            useWindowScroll: D,
                                        }),
                                    ],
                                }),
                            }),
                        });
            });
            var Y = r(17024);
            let G = () => {
                let e = (0, i.useSearchParams)().get('artistId');
                return ((e && (0, Y.L)(e)) || (0, i.notFound)(), (0, l.jsx)(Q, { artistId: e }));
            };
        },
        26089: (e, t, r) => {
            'use strict';
            r.d(t, { M: () => m });
            var l = r(17811),
                i = r(92146),
                a = r(74416),
                o = r(91027),
                n = r(48922),
                s = r(84782),
                d = r(2792),
                u = r(37240),
                c = r(51012),
                p = r(47498),
                _ = r(62376);
            let m = (e) => {
                let t = (0, a.st)(),
                    { hash: r } = (0, a.gf)(),
                    { pageId: m } = (0, u.$)(),
                    { tabId: f, tabPos: v, isTabSelectedByDefault: x } = (0, p.R)(),
                    { blockType: h, blockId: g, blockPosX: y, blockPosY: b, mainObjectType: C, mainObjectId: S } = (0, s.N)(),
                    { objectsCount: A, objectType: I, objectId: T, objectPosX: j, objectPosY: E } = (0, d.J)(),
                    N = (0, _.U)(),
                    { skeleton: R } = (0, c.b)();
                return (0, o.c)((a) => {
                    if (!t || !m || !n.xK.includes(m)) return;
                    let o = {
                        hash: r,
                        pageId: m,
                        entityType: h,
                        entityId: g,
                        entityPosX: y,
                        entityPosY: b,
                        objectsCount: A,
                        viewUuid: e,
                        objectType: I,
                        objectId: T,
                        objectPosX: j,
                        objectPosY: E,
                    };
                    (n.qG.includes(m) && ((o.tabId = f), (o.tabPos = v), (o.isTabSelectedByDefault = x)),
                        R && (o.skeletonId = R),
                        C && (o.mainObjectType = C),
                        S && (o.mainObjectId = S));
                    let s = (0, l.F)({ params: o, logger: N, context: 'useSendEventOnClipShowedOrHidden' });
                    if (s) {
                        if (a) return void (0, i.Pf)(t.evgenInstance, s);
                        (0, i.nv)(t.evgenInstance, s);
                    }
                });
            };
        },
        28816: (e, t, r) => {
            'use strict';
            r.d(t, { p: () => i });
            var l = r(55178);
            let i = () =>
                (0, l.useCallback)((e) => {
                    {
                        let t = window.history.state;
                        window.history.pushState(t, '', e);
                    }
                }, []);
        },
        28999: (e, t, r) => {
            'use strict';
            r.d(t, { z: () => o });
            var l = r(55178),
                i = r(77223),
                a = r(75265);
            let o = () => {
                let { sendSearchFeedback: e, id: t, type: r, blockPosition: o, position: n } = (0, l.useContext)(a.N) || {};
                if (void 0 === t || void 0 === r || void 0 === o || void 0 === n) return {};
                let s = null == e ? void 0 : e.bind(null, { feedbackType: i.n.LIKE, id: t, type: r, blockPosition: o, position: n });
                return {
                    sendLikeSearchFeedback: s,
                    sendNavigateSearchFeedback: null == e ? void 0 : e.bind(null, { feedbackType: i.n.NAVIGATE, id: t, type: r, blockPosition: o, position: n }),
                    sendPlaySearchFeedback: null == e ? void 0 : e.bind(null, { feedbackType: i.n.PLAY, id: t, type: r, blockPosition: o, position: n }),
                };
            };
        },
        29913: (e, t, r) => {
            'use strict';
            r.d(t, { e: () => l });
            let l = (e) => {
                let t = Math.round(e);
                return { hours: Math.floor(t / 3600), minutes: Math.floor((t % 3600) / 60), seconds: t % 60 };
            };
        },
        32496: (e, t, r) => {
            'use strict';
            r.d(t, { n: () => s });
            var l = r(32290),
                i = r(63618),
                a = r(79856),
                o = r(2352),
                n = r.n(o);
            let s = (e) => {
                let { className: t, textClassName: r, isActive: o } = e;
                return (0, l.jsx)('div', { className: (0, i.$)(n().root, t), children: (0, l.jsx)(a.W, { className: (0, i.$)(n().text, r), isActive: o, radius: 's' }) });
            };
        },
        37862: (e, t, r) => {
            'use strict';
            r.d(t, { U: () => l });
            var l = (function (e) {
                return (
                    (e.TRACK = 'track'),
                    (e.TRACK_LIST = 'track_list'),
                    (e.ALBUM = 'album'),
                    (e.PLAYLIST = 'playlist'),
                    (e.ARTIST = 'artist'),
                    (e.RUP = 'rup'),
                    (e.MAIN = 'main'),
                    (e.RADIO = 'radio'),
                    (e.DISCOGRAPHY = 'discography'),
                    (e.CAROUSEL = 'carousel'),
                    (e.ALBUMS = 'albums'),
                    (e.COMPILATIONS = 'compilations'),
                    (e.PLAYLISTS = 'playlists'),
                    (e.ARTISTS = 'artists'),
                    (e.CLIPS = 'clips'),
                    (e.BLOCK = 'block'),
                    (e.DISCOVERY = 'discovery'),
                    (e.SIMILAR = 'similar'),
                    (e.SEARCH = 'search'),
                    (e.HISTORY = 'history'),
                    (e.DEFAULT = 'default'),
                    (e.PODCAST = 'podcast'),
                    (e.AUDIOBOOK = 'audiobook'),
                    (e.FILTERED = 'filtered'),
                    (e.SUGGESTED = 'suggested'),
                    (e.TRAILER = 'trailer'),
                    (e.DONATY = 'donaty'),
                    (e.BEST_RESULTS = 'best_results'),
                    (e.OPEN_BEST_RESULTS = 'open_best_results'),
                    (e.WHEEL = 'wheel'),
                    (e.Q2V = 'q2v'),
                    e
                );
            })({});
        },
        40484: (e) => {
            e.exports = {
                root_clamp: 'SeparatedArtists_root_clamp__SyvjM',
                root_variant_breakAll: 'SeparatedArtists_root_variant_breakAll__34YbW',
                root_variant_breakWord: 'SeparatedArtists_root_variant_breakWord__1sziE',
                ellipsis: 'SeparatedArtists_ellipsis__0SUCv',
            };
        },
        41677: (e, t, r) => {
            'use strict';
            r.d(t, { i: () => B });
            var l = r(32290),
                i = r(63618),
                a = r(96103),
                o = r(55178),
                n = r(70280),
                s = r(57594),
                d = r(53514),
                u = r(40484),
                c = r.n(u),
                p = r(60900),
                _ = r(99923),
                m = r(21732),
                f = r(91027),
                v = r(71926),
                x = r(47745),
                h = r(32641),
                g = r(28999),
                y = r(61258),
                b = r(19383);
            let C = (0, a.PA)((e) => {
                    let {
                            artist: t,
                            withLink: r = !0,
                            linkClassName: i,
                            captionClassName: a,
                            captionSize: o = 'm',
                            allArtistsTitle: d,
                            withCustomTooltip: u,
                            hoverSettings: c,
                        } = e,
                        { formatMessage: C } = (0, p.A)(),
                        {
                            track: S,
                            settings: { isMobile: A },
                        } = (0, s.g)(),
                        I = (0, h.Z)(t.url),
                        { sendNavigateSearchFeedback: T } = (0, g.z)(),
                        j = (0, x.N)(),
                        E = ((e) => {
                            let { artist: t, callback: r } = e,
                                { currentTrackInfo: l, fullscreenPlayer: i, fullscreenVideoPlayer: a } = (0, s.g)(),
                                { modal: o } = l;
                            return (0, b.l)({
                                entity: t,
                                callback: r,
                                onBeforeHandle: (e) => {
                                    (null == e || e.stopPropagation(), o.isOpened && (l.reset(), o.close()), i.modal.isOpened && i.modal.close());
                                },
                                onAfterHandled: () => {
                                    a.modal.isOpened && (a.modal.close(), a.reset());
                                },
                                preventDefaultWhenSafe: !0,
                            });
                        })({
                            artist: t,
                            callback: (0, f.c)((e) => {
                                (A && S.isOpened && S.close(), I(e));
                            }),
                        }),
                        N = (0, f.c)((e) => {
                            (j({ to: _.AppScreen.ArtistScreen }), null == T || T(), E(e));
                        });
                    return r && !t.various
                        ? (0, l.jsx)(y.N, {
                              'aria-label': C({ id: 'entity-names.artist-name' }, { artistName: t.name }),
                              className: i,
                              href: t.url,
                              onClick: N,
                              title: u ? void 0 : d || t.name,
                              'data-test-id': m.OA.artists.SEPARATED_ARTIST_TITLE,
                              children: (0, l.jsx)(n.m_, {
                                  enabled: !d && u,
                                  offsetOptions: 4,
                                  placement: 'top',
                                  text: d || t.name,
                                  hoverSettings: c,
                                  children: (0, l.jsx)(v.HL, { variant: 'span', type: 'entity', size: o, weight: 'medium', className: a, children: t.name }),
                              }),
                          })
                        : (0, l.jsx)(n.m_, {
                              enabled: !d && u,
                              offsetOptions: 4,
                              placement: 'top',
                              text: d || t.name,
                              hoverSettings: c,
                              children: (0, l.jsx)(v.HL, {
                                  variant: 'span',
                                  type: 'entity',
                                  size: o,
                                  weight: 'medium',
                                  className: a,
                                  title: u ? void 0 : d || t.name,
                                  'data-test-id': m.OA.artists.SEPARATED_ARTIST_TITLE,
                                  children: t.name,
                              }),
                          });
                }),
                S = (e) => {
                    let {
                            artist: t,
                            withLink: r = !0,
                            linkClassName: i,
                            captionClassName: a,
                            captionSize: n,
                            allArtistsTitle: s,
                            withCustomTooltip: d,
                            hoverSettings: u,
                            shouldUseSeparator: c = !0,
                        } = e,
                        p = (0, o.useMemo)(() => {
                            var e;
                            return null == (e = t.decomposed)
                                ? void 0
                                : e.reduce(
                                      (e, t) =>
                                          e.concat([
                                              c ? t.separator : '',
                                              (0, l.jsx)(
                                                  C,
                                                  {
                                                      artist: t,
                                                      withLink: r,
                                                      linkClassName: i,
                                                      captionClassName: a,
                                                      captionSize: n,
                                                      allArtistsTitle: s,
                                                      withCustomTooltip: d,
                                                      hoverSettings: u,
                                                  },
                                                  t.id,
                                              ),
                                          ]),
                                      [],
                                  );
                        }, [t.decomposed, c, r, i, a, n, s, d, u]);
                    return (0, l.jsxs)(l.Fragment, {
                        children: [
                            (0, l.jsx)(C, {
                                artist: t,
                                withLink: r,
                                linkClassName: i,
                                captionClassName: a,
                                captionSize: n,
                                allArtistsTitle: s,
                                withCustomTooltip: d,
                                hoverSettings: u,
                            }),
                            p,
                        ],
                    });
                };
            var A = r(39407),
                I = r(63887);
            let T = (e) => {
                let { spoilerArtistsCount: t, spoilerClassName: r, handleOnSpoilerClick: a } = e;
                return (0, l.jsxs)(l.Fragment, {
                    children: [
                        ' ',
                        (0, l.jsx)(I.N, {
                            role: 'button',
                            href: '',
                            className: (0, i.$)(c().spoiler, r),
                            onClick: a,
                            rel: 'nofollow',
                            'data-test-id': m.OA.artists.SEPARATED_ARTISTS_SPOILER,
                            children: (0, l.jsx)(A.A, { id: 'entity-names.number-of-more-artists', values: { counter: t } }),
                        }),
                    ],
                });
            };
            var j = r(8055),
                E = r(6752),
                N = r(78035),
                R = r(78176),
                P = r(83598),
                O = r.n(P);
            let L = (0, a.PA)((e) => {
                    let { label: t, artists: r, forwardRef: i } = e;
                    return (0, l.jsxs)(n.m_, {
                        enableAriaDescribedby: !1,
                        isFocusEnabled: !1,
                        placement: 'top',
                        hoverSettings: { delay: 200, handleClose: (0, N.safePolygon)({ blockPointerEvents: !0 }) },
                        children: [
                            (0, l.jsx)('div', { ref: i, children: t }),
                            (0, l.jsx)(n.ZI, { className: O().tooltipContent, children: r.map((e) => (0, l.jsx)(R.V, { artist: e, className: O().artistItem }, e.id)) }),
                        ],
                    });
                }),
                M = (0, o.forwardRef)((e, t) => (0, l.jsx)(L, { forwardRef: t, ...e }));
            var k = r(19740),
                w = r(52598),
                D = r.n(w);
            let U = (0, a.PA)((e) => {
                    let { label: t, artists: r } = e,
                        { formatMessage: a } = (0, p.A)();
                    return (0, l.jsx)(k.W1, {
                        isMobile: !0,
                        className: (0, i.$)(D().root, D().important),
                        label: t,
                        ariaLabel: a({ id: 'interface-actions.context-menu-artists' }),
                        children: r.map((e) => (0, l.jsx)(R.V, { artist: e }, e.id)),
                    });
                }),
                W = (0, a.PA)((e) => {
                    let { artists: t = [], label: r, labelRef: i } = e,
                        [a, n] = (0, o.useState)(!1),
                        {
                            settings: { isMobile: d },
                        } = (0, s.g)(),
                        u = (0, f.c)(() => {
                            let e = i.current;
                            e && n(e.scrollHeight > e.clientHeight || e.scrollWidth > e.clientWidth);
                        }),
                        c = (0, E.L)(() =>
                            (0, j.A)(() => {
                                u();
                            }, 100),
                        );
                    if (
                        ((0, o.useEffect)(
                            () => (
                                window.addEventListener('resize', c),
                                u(),
                                () => {
                                    window.removeEventListener('resize', c);
                                }
                            ),
                            [c, u],
                        ),
                        (0, o.useEffect)(() => {
                            u();
                        }, [t, u]),
                        0 !== t.length)
                    )
                        return (a || d) && (!d || 1 !== t.length) ? (d ? (0, l.jsx)(U, { artists: t, label: r }) : (0, l.jsx)(M, { artists: t, label: r })) : r;
                }),
                B = (0, a.PA)((e) => {
                    let {
                            className: t,
                            artists: r = [],
                            separator: a = ', ',
                            lineClamp: u,
                            visibleArtistsCount: p,
                            withLink: _ = !0,
                            spoilerClassName: m,
                            linkClassName: f,
                            captionClassName: v,
                            captionSize: x,
                            variant: h = 'breakAll',
                            withAllArtistsTitle: g = !0,
                            withComposer: y = !0,
                            spoilerComponent: b,
                            withCustomTooltip: C = !0,
                            artistIdWithoutLink: A,
                            withContextMenu: I,
                        } = e,
                        j = (0, o.useRef)(null),
                        [E, N] = (0, o.useState)(!1),
                        R = g
                            ? r
                                  .reduce(function () {
                                      let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
                                          t = arguments.length > 1 ? arguments[1] : void 0;
                                      if (t.decomposed) {
                                          let r = t.decomposed.reduce((e, t) => e.concat([t.name]), []);
                                          return e.length ? e.concat([t.name, ...r]) : [t.name, ...r];
                                      }
                                      return e.length ? (e.push(t.name), e) : [t.name];
                                  }, [])
                                  .join(a)
                            : '',
                        {
                            settings: { isMobile: P },
                        } = (0, s.g)(),
                        O = 1 === r.length,
                        L = (0, o.useCallback)((e) => {
                            (N(!0), e.preventDefault());
                        }, []),
                        M = (0, o.useMemo)(() => {
                            let e = r;
                            return (
                                p && !E && (e = r.slice(0, p)),
                                e.reduce((e, t) => {
                                    if (!y && t.isComposer) return e.length ? e : [];
                                    let r = (0, l.jsx)(
                                        S,
                                        {
                                            artist: t,
                                            linkClassName: f,
                                            captionClassName: v,
                                            withLink: _ && t.id !== A && (((!P || O) && I) || !I),
                                            captionSize: x,
                                            allArtistsTitle: R,
                                            withCustomTooltip: C,
                                            hoverSettings: d.V,
                                            shouldUseSeparator: !!a,
                                        },
                                        t.key,
                                    );
                                    return e.length ? e.concat([a, r]) : [r];
                                }, [])
                            );
                        }, [r, p, E, y, P, O, I, f, v, _, A, x, R, C, a]),
                        k = (0, o.useMemo)(() => {
                            if (!E && p && p < r.length) {
                                let e = r.length - p;
                                return (0, o.isValidElement)(b) ? b : (0, l.jsx)(T, { spoilerClassName: m, spoilerArtistsCount: e, handleOnSpoilerClick: L });
                            }
                        }, [r.length, L, E, m, b, p]),
                        w = (0, o.useMemo)(() => {
                            if (u) return { WebkitLineClamp: u };
                        }, [u]),
                        D = (0, l.jsx)(n.m_, {
                            referenceRef: j,
                            enabled: !!(g && R) && C && !I && !P,
                            offsetOptions: 4,
                            placement: 'top',
                            text: R,
                            hoverSettings: d.V,
                            children: (0, l.jsxs)('div', {
                                style: w,
                                className: (0, i.$)(c().root, c()['root_variant_'.concat(h)], { [c().root_clamp]: u && u > 0 }, { [c().ellipsis]: !u }, t),
                                title: g && R && !C && !I ? R : void 0,
                                children: [M, k],
                            }),
                        });
                    return I ? (0, l.jsx)(W, { labelRef: j, artists: r, label: D }) : D;
                });
        },
        42731: (e) => {
            e.exports = {
                root: 'ArtistClipsPage_root__3efVS',
                scrollContainer: 'ArtistClipsPage_scrollContainer___2pJZ',
                important: 'ArtistClipsPage_important__UBPcN',
                footer: 'ArtistClipsPage_footer__mhu_A',
                item: 'ArtistClipsPage_item__fonRp',
                content: 'ArtistClipsPage_content__GFs51',
            };
        },
        44128: (e, t, r) => {
            'use strict';
            r.d(t, { G: () => i, e: () => a });
            var l = r(55178);
            let i = (0, l.createContext)(null);
            function a() {
                return (0, l.useContext)(i);
            }
        },
        48736: (e) => {
            e.exports = { root: 'TooltipWithTitle_root__7jLY3', text: 'TooltipWithTitle_text__ElBtq', description: 'TooltipWithTitle_description__HsGcR' };
        },
        50819: (e, t, r) => {
            'use strict';
            r.d(t, { k: () => s });
            var l = r(32290),
                i = r(79856),
                a = r(32496),
                o = r(20541),
                n = r.n(o);
            let s = (e) => {
                let { isActive: t } = e;
                return (0, l.jsxs)('div', {
                    className: n().root,
                    'aria-live': t ? 'polite' : 'off',
                    'aria-busy': t,
                    children: [
                        (0, l.jsx)(i.W, { isActive: t, className: n().cover, radius: 'l' }),
                        (0, l.jsx)(a.n, { isActive: t, className: n().title }),
                        (0, l.jsx)(a.n, { isActive: t, className: n().text }),
                    ],
                });
            };
        },
        52598: (e) => {
            e.exports = { root: 'SeparatedArtistsWithContextMenuMobile_root__4BiJL', important: 'SeparatedArtistsWithContextMenuMobile_important__fSF1h' };
        },
        52843: (e, t, r) => {
            'use strict';
            r.d(t, { E: () => i });
            let l = (e, t) => (t > 0 ? Math.floor(e / t) : 0),
                i = (e, t) => {
                    let r = l(e, 3600),
                        i = l(e - 3600 * r, 60),
                        a = e - 3600 * r - 60 * i,
                        o = l(t || e, 3600) > 0,
                        n = [i, a];
                    return (o && n.unshift(r), n.map((e) => String(e).padStart(2, '0')).join(':'));
                };
        },
        53514: (e, t, r) => {
            'use strict';
            r.d(t, { V: () => l });
            let l = { delay: { open: 1e3, close: 0 } };
        },
        56755: (e, t, r) => {
            'use strict';
            r.d(t, { V: () => l });
            var l = (function (e) {
                return ((e.TRAILER = 'TRAILER'), (e.ADVERT = 'ADVERT'), (e.CLIP = 'CLIP'), (e.PROMO_LANDING = 'PROMO_LANDING'), e);
            })({});
        },
        56797: (e, t, r) => {
            'use strict';
            r.d(t, { _: () => v });
            var l = r(17811),
                i = r(99923),
                a = r(92146),
                o = r(74416),
                n = r(91027),
                s = r(79374),
                d = r(48922),
                u = r(84782),
                c = r(2792),
                p = r(37240),
                _ = r(51012),
                m = r(47498),
                f = r(62376);
            let v = (e) => {
                let t = (0, o.st)(),
                    { hash: r } = (0, o.gf)(),
                    { pageId: v } = (0, p.$)(),
                    { tabId: x, tabPos: h, isTabSelectedByDefault: g } = (0, m.R)(),
                    { skeleton: y } = (0, _.b)(),
                    { blockType: b, blockId: C, blockPosX: S, blockPosY: A, mainObjectType: I, mainObjectId: T } = (0, u.N)(),
                    { objectsCount: j, objectType: E, objectId: N, objectPosX: R, objectPosY: P } = (0, c.J)(),
                    O = (0, f.U)();
                return (0, n.c)(() => {
                    if (!t || !v || !d.xK.includes(v)) return;
                    let o = {
                        hash: r,
                        pageId: v,
                        entityType: b,
                        entityId: C,
                        entityPosX: S,
                        entityPosY: A,
                        objectId: N,
                        objectType: E,
                        objectPosX: R,
                        objectPosY: P,
                        objectsCount: j,
                        from: s.W[v],
                        to: i.AppScreen.VideoScreen,
                    };
                    (d.qG.includes(v) && ((o.tabId = x), (o.tabPos = h), (o.isTabSelectedByDefault = g)),
                        y && (o.skeletonId = y),
                        I && (o.mainObjectType = I),
                        T && (o.mainObjectId = T));
                    let n = (0, l.F)({ params: o, logger: O, context: 'useSendEventOnClipNavigated' });
                    n && e && (0, a.QS)(t.evgenInstance, n);
                });
            };
        },
        60244: (e, t, r) => {
            'use strict';
            r.d(t, { k: () => u });
            var l = r(32290),
                i = r(21732),
                a = r(70280),
                o = r(71926),
                n = r(48736),
                s = r.n(n);
            let d = { padding: 8 },
                u = (e) => {
                    let { description: t, enabled: r, title: n, placement: u = 'top', children: c } = e;
                    return (0, l.jsxs)(a.m_, {
                        enabled: r,
                        offsetOptions: 4,
                        shiftOptions: d,
                        flipOptions: d,
                        placement: u,
                        children: [
                            c,
                            (0, l.jsx)(a.ZI, {
                                className: s().root,
                                'data-test-id': i.S7.TOOLTIP_WITH_TITLE,
                                children: (0, l.jsxs)('div', {
                                    className: s().text,
                                    children: [
                                        n && (0, l.jsx)(o.HL, { variant: 'span', type: 'text', size: 's', weight: 'bold', children: n }),
                                        (0, l.jsx)(o.HL, { variant: 'span', type: 'text', size: 's', weight: 'normal', className: s().description, children: t }),
                                    ],
                                }),
                            }),
                        ],
                    });
                };
        },
        63415: (e, t, r) => {
            'use strict';
            r.d(t, { H: () => l });
            var l = (function (e) {
                return ((e.VARIOUS_CLIP_CONTEXT = 'various-clip-context'), e);
            })({});
        },
        70280: (e, t, r) => {
            'use strict';
            r.d(t, { ZI: () => p, m_: () => c });
            var l,
                i = r(78035),
                a = r(85472),
                o = r(55178),
                n = {
                    5881: (e, t, r) => {
                        function l() {
                            for (var e, t, r = 0, l = ''; r < arguments.length;)
                                (e = arguments[r++]) &&
                                    (t = (function e(t) {
                                        var r,
                                            l,
                                            i = '';
                                        if ('string' == typeof t || 'number' == typeof t) i += t;
                                        else if ('object' == typeof t)
                                            if (Array.isArray(t)) for (r = 0; r < t.length; r++) t[r] && (l = e(t[r])) && (i && (i += ' '), (i += l));
                                            else for (r in t) t[r] && (i && (i += ' '), (i += r));
                                        return i;
                                    })(e)) &&
                                    (l && (l += ' '), (l += t));
                            return l;
                        }
                        (r.r(t), r.d(t, { clsx: () => l, default: () => i }));
                        let i = l;
                    },
                    4295: (e, t, r) => {
                        (r.r(t), r.d(t, { default: () => l }));
                        let l = { root: 'QhR4J536RmNHBB5bZYwF', text: 'Fqg1VWCJUfasVVxqICeO' };
                    },
                    1246: (e, t, r) => {
                        (r.r(t), r.d(t, { default: () => l }));
                        let l = {
                            root_controls_xxs: 'tRaaBpDMg9Qu8v6gKjtn',
                            root_entity_xxs: 'M9zvtlcpLUVn6DKdcHhj',
                            root_text_xxs: 'ln0PYYwDmFnfYxCDJsFU',
                            root_controls_xs: 'n5AeWEsJC3_AYXcbK4Lt',
                            root_entity_xs: '__hrMKGmNbw54T54IUyh',
                            root_text_xs: 'SehSa7OyRpC2nzYTVb2Q',
                            root_controls_s: '_oBLf5gprWsKjCw4Ce58',
                            root_entity_s: 'mxSPe5xpZnie9gpIqacd',
                            root_text_s: 'Ai2iRN9elHpk_u5splD6',
                            root_controls_m: 'tk7ahHRDYXJMMB879KUA',
                            root_entity_m: 'Z_WIr2W8JU4MPQek3hgR',
                            root_text_m: 'g3qWNP6xl__7qxNmtrvd',
                            root_controls_l: 'grvxapJE3vGArOKDWf6n',
                            root_entity_l: 'Esj5A1UeSi4xV4tZ839D',
                            root_text_l: 'V3WU123oO65AxsprotU9',
                            root_weight_normal: 'ZYV27jeWd30QDXu4GhaH',
                            root_weight_medium: '_3_Mxw7Si7j2g4kWjlpR',
                            root_weight_bold: 'Vi7Rd0SZWqD17F0872TB',
                        };
                    },
                    61: (e, t, r) => {
                        (r.r(t), r.d(t, { default: () => l }));
                        let l = {
                            root: '_MWOVuZRvUQdXKTMcOPx',
                            root_clamp: 'LezmJlldtbHWqU7l1950',
                            root_clamp_oneline: 'oyQL2RSmoNbNQf3Vc6YI',
                            root_clamp_multiline: 'jMyoZB5J9iZbzJmWOrF0',
                        };
                    },
                    9097: (e, t) => {
                        var r = Symbol.for('react.transitional.element');
                        function l(e, t, l) {
                            var i = null;
                            if ((void 0 !== l && (i = '' + l), void 0 !== t.key && (i = '' + t.key), 'key' in t))
                                for (var a in ((l = {}), t)) 'key' !== a && (l[a] = t[a]);
                            else l = t;
                            return { $$typeof: r, type: e, key: i, ref: void 0 !== (t = l.ref) ? t : null, props: l };
                        }
                        ((t.Fragment = Symbol.for('react.fragment')), (t.jsx = l), (t.jsxs = l));
                    },
                    4377: (e, t, r) => {
                        e.exports = r(9097);
                    },
                    853: (e, t, r) => {
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.Tooltip = void 0));
                        let l = r(4377),
                            i = r(810),
                            a = r(1964),
                            o = r(2660),
                            n = r(3343),
                            s = r(1229);
                        t.Tooltip = (e) => {
                            let { enableAriaDescribedby: t = !1, text: r, children: d, referenceRef: u, ...c } = e,
                                [p, _] = Array.isArray(d) ? d : [d],
                                m = (0, s.useTooltip)(c),
                                f = (0, i.useId)(),
                                v = (0, i.useId)(),
                                x = (0, i.useId)(),
                                h = (0, a.useMergeRefs)([m.refs.setReference, u]);
                            return (0, l.jsxs)(l.Fragment, {
                                children: [
                                    (0, i.cloneElement)(p, {
                                        ref: h,
                                        ...(t ? { 'aria-describedby': f } : {}),
                                        ...m.getReferenceProps(),
                                        ...(0, o.getDataAttrFromProps)(c),
                                        key: v,
                                    }),
                                    m.context.open
                                        ? (0, i.cloneElement)(null != _ ? _ : (0, l.jsx)(n.TooltipContent, {}), {
                                              ref: m.refs.setFloating,
                                              style: { ...m.floatingStyles, visibility: m.referenceHidden ? 'hidden' : 'visible' },
                                              text: r,
                                              arrow: m.arrow,
                                              ...(t ? { id: f } : {}),
                                              ...m.getFloatingProps(),
                                              key: x,
                                          })
                                        : null,
                                ],
                            });
                        };
                    },
                    3343: function (e, t, r) {
                        var l =
                            (this && this.__importDefault) ||
                            function (e) {
                                return e && e.__esModule ? e : { default: e };
                            };
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.TooltipContent = t.TooltipContentComponent = void 0));
                        let i = r(4377),
                            a = r(5881),
                            o = r(810),
                            n = r(1964),
                            s = r(3412),
                            d = l(r(4295));
                        ((t.TooltipContentComponent = (e) => {
                            let { className: t, children: r, arrow: l, rootNode: u, forwardRef: c, text: p, ..._ } = e;
                            return (0, i.jsx)(n.FloatingPortal, {
                                root: u,
                                children: (0, i.jsxs)('div', {
                                    className: (0, a.clsx)(d.default.root, t),
                                    ref: c,
                                    ..._,
                                    children: [
                                        (0, o.isValidElement)(l) && l,
                                        (0, i.jsx)(s.Caption, {
                                            variant: 'div',
                                            type: 'text',
                                            size: 's',
                                            weight: 'medium',
                                            className: d.default.text,
                                            children: null != r ? r : p,
                                        }),
                                    ],
                                }),
                            });
                        }),
                            (t.TooltipContent = (0, o.forwardRef)((e, r) => (0, i.jsx)(t.TooltipContentComponent, { forwardRef: r, ...e }))));
                    },
                    1229: (e, t, r) => {
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.useTooltip = void 0));
                        let l = r(4377),
                            i = r(810),
                            a = r(1964),
                            o = { delay: { open: 200, close: 0 } };
                        t.useTooltip = function (e) {
                            let {
                                    initialOpen: t = !1,
                                    placement: r = 'top',
                                    open: n,
                                    onOpenChange: s,
                                    isHoverEnabled: d = !0,
                                    isFocusEnabled: u = !0,
                                    offsetOptions: c,
                                    flipOptions: p = {},
                                    shiftOptions: _ = {},
                                    hoverSettings: m = o,
                                    enabled: f = !0,
                                    arrowProps: v,
                                } = e,
                                [x, h] = (0, i.useState)(t),
                                g = (0, i.useRef)(null),
                                y = null != n ? n : x,
                                b = null != s ? s : h,
                                C = (0, a.useFloating)({
                                    placement: r,
                                    open: y,
                                    onOpenChange: b,
                                    whileElementsMounted: a.autoUpdate,
                                    middleware: [
                                        (0, a.offset)(c),
                                        (0, a.flip)({ crossAxis: r.includes('-'), ...p }),
                                        (0, a.shift)(_),
                                        (0, a.arrow)({ element: g }),
                                        (0, a.hide)(),
                                    ],
                                }),
                                S = C.context,
                                A = (0, a.useHover)(S, { move: !1, enabled: d && f, ...m }),
                                I = (0, a.useFocus)(S, { enabled: u && f }),
                                T = (0, a.useDismiss)(S),
                                j = (0, a.useRole)(S, { role: 'tooltip' }),
                                E = (0, a.useInteractions)([A, I, T, j]),
                                N = (0, i.useMemo)(() => {
                                    if (v) return (0, l.jsx)(a.FloatingArrow, { ref: g, context: C.context, ...v });
                                }, [v, C.context]);
                            return (0, i.useMemo)(() => {
                                var e;
                                return { open: y, setOpen: b, arrow: N, referenceHidden: null == (e = C.middlewareData.hide) ? void 0 : e.referenceHidden, ...E, ...C };
                            }, [y, b, N, E, C]);
                        };
                    },
                    3412: function (e, t, r) {
                        var l =
                            (this && this.__importDefault) ||
                            function (e) {
                                return e && e.__esModule ? e : { default: e };
                            };
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.Caption = t.CaptionComponent = void 0));
                        let i = r(4377),
                            a = r(5881),
                            o = r(810),
                            n = r(5987),
                            s = l(r(1246));
                        ((t.CaptionComponent = (e) => {
                            let { forwardRef: t, variant: r, type: l = 'text', size: o = 's', className: d, children: u, weight: c = 'medium', ...p } = e;
                            return (0, i.jsx)(n.Typography, {
                                variant: r,
                                ref: t,
                                className: (0, a.clsx)(s.default.root, s.default['root_'.concat(l, '_').concat(o)], s.default['root_weight_'.concat(c)], d),
                                ...p,
                                children: u,
                            });
                        }),
                            (t.Caption = (0, o.forwardRef)((e, r) => (0, i.jsx)(t.CaptionComponent, { forwardRef: r, ...e }))));
                    },
                    5987: function (e, t, r) {
                        var l =
                            (this && this.__importDefault) ||
                            function (e) {
                                return e && e.__esModule ? e : { default: e };
                            };
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.Typography = t.TypographyComponent = void 0));
                        let i = r(4377),
                            a = r(5881),
                            o = r(810),
                            n = l(r(61));
                        function s(e) {
                            let { forwardRef: t, style: r, className: l, children: o, variant: s, lineClamp: d, ...u } = e,
                                c = d && 'string' == typeof o ? o : void 0;
                            return (0, i.jsx)(s, {
                                style: { ...r, WebkitLineClamp: d },
                                ref: t,
                                title: c,
                                className: (0, a.clsx)(
                                    n.default.root,
                                    { [n.default.root_clamp]: d && d > 0, [n.default.root_clamp_oneline]: d && 1 === d, [n.default.root_clamp_multiline]: d && d > 1 },
                                    l,
                                ),
                                ...u,
                                children: o,
                            });
                        }
                        ((t.TypographyComponent = s), (t.Typography = (0, o.forwardRef)((e, t) => (0, i.jsx)(s, { forwardRef: t, ...e }))));
                    },
                    1964: (e) => {
                        e.exports = i;
                    },
                    2660: (e) => {
                        e.exports = a;
                    },
                    810: (e) => {
                        e.exports = l || (l = r.t(o, 2));
                    },
                },
                s = {};
            function d(e) {
                var t = s[e];
                if (void 0 !== t) return t.exports;
                var r = (s[e] = { exports: {} });
                return (n[e].call(r.exports, r, r.exports, d), r.exports);
            }
            ((d.d = (e, t) => {
                for (var r in t) d.o(t, r) && !d.o(e, r) && Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
            }),
                (d.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
                (d.r = (e) => {
                    ('undefined' != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
                        Object.defineProperty(e, '__esModule', { value: !0 }));
                }));
            var u = {};
            (() => {
                (Object.defineProperty(u, 'X$', { value: !0 }), (u._v = u.u = void 0));
                var e = d(853);
                Object.defineProperty(u, 'u', {
                    enumerable: !0,
                    get: function () {
                        return e.Tooltip;
                    },
                });
                var t = d(3343);
                Object.defineProperty(u, '_v', {
                    enumerable: !0,
                    get: function () {
                        return t.TooltipContent;
                    },
                });
            })();
            var c = u.u,
                p = u._v;
            u.X$;
        },
        72396: (e, t, r) => {
            'use strict';
            r.d(t, { f: () => p });
            var l = r(55178),
                i = r(84782),
                a = r(37240),
                o = r(21916),
                n = r(37862),
                s = r(71483),
                d = r(48922),
                u = r(89083);
            let c = [n.U.TRAILER],
                p = (e) => {
                    let t = ((e) => {
                            let t = null == e ? void 0 : e.pageId,
                                r = null == e ? void 0 : e.blockId,
                                o = null == e ? void 0 : e.pageEntityId,
                                { pageId: n, pageEntityId: s } = (0, a.$)(),
                                { blockId: d } = (0, i.N)();
                            return (0, l.useMemo)(() => ({ pageId: null != t ? t : n, blockId: null != r ? r : d, pageEntityId: null != o ? o : s }), [r, d, t, o, n, s]);
                        })(e),
                        r = ((e) => {
                            let { pageId: t, blockId: r } = e;
                            return (0, l.useMemo)(() => {
                                let e = ['desktop'];
                                return (t && e.push(t.toLowerCase()), r && e.push(r.toLowerCase()), e.push('default'), e.join('-'));
                            }, [r, t]);
                        })(t),
                        n = ((e) => {
                            let { pageId: t, blockId: r, pageEntityId: i, contextType: a, contextId: n, utmForPageIds: p } = e,
                                _ = (0, o.useSearchParams)();
                            return (0, l.useMemo)(
                                () =>
                                    ((e) => {
                                        let { searchParams: t, pageId: r, pageEntityId: l, utmForPageIds: i, contextId: a, contextType: o, blockId: n } = e,
                                            p = t && Object.fromEntries(t),
                                            _ = ((e) => {
                                                switch (e) {
                                                    case d._Q.ALBUM:
                                                    case d._Q.PROMOLANDING_ALBUM:
                                                    case d._Q.AUDIOBOOK:
                                                    case d._Q.PODCAST:
                                                        return s.K.Album;
                                                    case d._Q.ARTIST:
                                                    case d._Q.ARTIST_TRACKS:
                                                    case d._Q.ARTIST_ALBUMS:
                                                    case d._Q.ARTIST_DISCOGRAPHY:
                                                        return s.K.Artist;
                                                    case d._Q.PLAYLIST:
                                                        return s.K.Playlist;
                                                    default:
                                                        return null;
                                                }
                                            })(r);
                                        return !_ || !p || !l || c.includes(n)
                                            ? null
                                            : (Array.isArray(i) ? i.map((e) => String(e)).includes(String(l)) : !!a && _ === o && String(a) === String(l)) && p
                                              ? (0, u.Z)(p)
                                              : null;
                                    })({ searchParams: _, pageId: t, pageEntityId: i, utmForPageIds: p, contextId: n, contextType: a, blockId: r }),
                                [_, t, i, n, a, r, p],
                            );
                        })({
                            ...t,
                            contextType: null == e ? void 0 : e.contextType,
                            contextId: null == e ? void 0 : e.contextId,
                            utmForPageIds: null == e ? void 0 : e.utmForPageIds,
                        });
                    return (0, l.useMemo)(() => ({ from: r, utmLink: n || void 0 }), [r, n]);
                };
        },
        73325: (e, t, r) => {
            'use strict';
            r.d(t, { X: () => i });
            var l = r(19383);
            let i = (e) => {
                let { clip: t, callback: r, disclaimerRejectHandler: i } = e;
                return (0, l.l)({ entity: t, callback: r, onReject: i, modalBehavior: { closeOnOutside: !1, closeOnEscape: !1 }, preventDefaultWhenSafe: !0 });
            };
        },
        75265: (e, t, r) => {
            'use strict';
            r.d(t, { N: () => l });
            let l = (0, r(55178).createContext)(null);
        },
        77223: (e, t, r) => {
            'use strict';
            var l, i;
            (r.d(t, { n: () => i, o: () => l }),
                (function (e) {
                    ((e.ARTIST = 'artist'),
                        (e.ALBUM = 'album'),
                        (e.TRACK = 'track'),
                        (e.PLAYLIST = 'playlist'),
                        (e.USER = 'user'),
                        (e.VIDEO = 'video'),
                        (e.CLIP = 'clip'),
                        (e.PODCAST = 'podcast'),
                        (e.PODCAST_EPISODE = 'podcast_episode'),
                        (e.WAVE = 'wave'),
                        (e.GENRE = 'genre'),
                        (e.SEARCH_PAGE = 'search-page'));
                })(l || (l = {})),
                (function (e) {
                    ((e.PLAY = 'play'), (e.FRIDGE = 'fridge'), (e.NAVIGATE = 'navigate'), (e.LIKE = 'like'));
                })(i || (i = {})));
        },
        78176: (e, t, r) => {
            'use strict';
            r.d(t, { V: () => g });
            var l = r(32290),
                i = r(63618),
                a = r(96103),
                o = r(55178),
                n = r(99923),
                s = r(21732),
                d = r(91027),
                u = r(50162),
                c = r(19740),
                p = r(86269),
                _ = r(71926),
                m = r(47745),
                f = r(32641),
                v = r(57594),
                x = r(16510),
                h = r.n(x);
            let g = (0, a.PA)((e) => {
                let { artist: t, className: r } = e,
                    { fullscreenPlayer: a } = (0, v.g)(),
                    x = (0, f.Z)(t.url),
                    y = (0, m.N)(),
                    b = (0, o.useMemo)(() => {
                        var e;
                        return (
                            'decomposed' in t &&
                            (null == (e = t.decomposed) ? void 0 : e.reduce((e, t) => (e.push((0, l.jsx)(g, { artist: t, className: r }, t.id)), e), []))
                        );
                    }, [t, r]),
                    C = (0, d.c)((e) => {
                        (a.modal.isOpened && a.modal.close(), y({ to: n.AppScreen.ArtistScreen }), x(e));
                    });
                return (0, l.jsxs)(l.Fragment, {
                    children: [
                        (0, l.jsxs)(c.Dr, {
                            className: (0, i.$)(h().root, r),
                            onClick: C,
                            'data-test-id': s.OA.artists.ARTIST_ITEM,
                            children: [
                                (0, l.jsx)(p.t, {
                                    radius: 'round',
                                    className: h().cover,
                                    children: (0, l.jsx)(u._V, { withAvatarReplace: !0, src: t.coverUri, size: 100, fit: 'contain', className: h().image }),
                                }),
                                (0, l.jsx)(_.HL, { variant: 'span', size: 'm', weight: 'medium', lineClamp: 1, children: t.name }),
                            ],
                        }),
                        b,
                    ],
                });
            });
        },
        80536: (e, t, r) => {
            'use strict';
            r.d(t, { B: () => l });
            let l = (0, r(55178).createContext)({ observeElement: () => {}, unobserveElement: () => {} });
        },
        83598: (e) => {
            e.exports = {
                tooltipContent: 'SeparatedArtistsWithContextMenuDesktop_tooltipContent___PtDD',
                artistItem: 'SeparatedArtistsWithContextMenuDesktop_artistItem__Ggo_W',
            };
        },
        84427: (e, t, r) => {
            'use strict';
            r.d(t, { d: () => i });
            var l = r(57594);
            let i = () => {
                let {
                    settings: { isMobile: e },
                } = (0, l.g)();
                return !e;
            };
        },
        85017: (e, t, r) => {
            'use strict';
            r.d(t, { Z: () => l, n: () => i });
            var l = (function (e) {
                    return ((e.REJECT = 'REJECT'), (e.UNSAFE = 'UNSAFE'), e);
                })({}),
                i = (function (e) {
                    return ((e.ALBUM = 'album'), (e.PODCAST = 'podcast'), (e.AUDIOBOOK = 'audiobook'), (e.ARTIST = 'artist'), (e.TRACK = 'track'), (e.CLIP = 'clip'), e);
                })({});
        },
        89083: (e, t, r) => {
            'use strict';
            r.d(t, { Z: () => i });
            let l = [
                    { queryKey: 'utm_campaign', resultKey: 'utmCampaign' },
                    { queryKey: 'utm_medium', resultKey: 'utmMedium' },
                    { queryKey: 'utm_source', resultKey: 'utmSource' },
                    { queryKey: 'utm_term', resultKey: 'utmTerm' },
                    { queryKey: 'yclid', resultKey: 'yclid' },
                ],
                i = (e) =>
                    l.reduce((t, r) => {
                        let { queryKey: l, resultKey: i } = r;
                        return ('string' == typeof e[l] && (t[i] = e[l]), t);
                    }, {});
        },
        90006: (e) => {
            e.exports = { explicitMark: 'ExplicitMarkIcon_explicitMark__0BPeQ' };
        },
        90169: (e, t, r) => {
            'use strict';
            r.d(t, { D: () => n });
            var l = r(91027),
                i = r(72676),
                a = r(57594),
                o = r(44128);
            let n = (e) => {
                let { playContextParams: t, entityId: r, playbackId: n, sonataState: s } = e,
                    d = (0, o.e)(),
                    { sonataState: u } = (0, a.g)(),
                    c = s || u,
                    p = !1,
                    _ = !1,
                    { contextData: m } = t,
                    {
                        type: f,
                        meta: { id: v },
                    } = m,
                    x = c.contextId === String(v) && f === c.contextType;
                if (r) {
                    var h;
                    p = r === (null == (h = c.entityMeta) ? void 0 : h.idWithContext);
                } else p = x;
                return (
                    (_ = p && c.status === i.MT.PLAYING),
                    {
                        isPlaying: _,
                        isCurrent: p,
                        togglePlay: (0, l.c)(() => {
                            var e;
                            let l = null == (e = c.entityMeta) ? void 0 : e.idWithContext;
                            if (void 0 !== r && r === l) {
                                null == d || d.togglePause(n);
                                return;
                            }
                            null == d || d.playContext(t, n);
                        }),
                        restartPlay: (0, l.c)(() => {
                            null == d || d.setProgress(0, n);
                        }),
                    }
                );
            };
        },
        90326: (e, t, r) => {
            'use strict';
            r.d(t, { D: () => _ });
            var l = r(32290),
                i = r(96103),
                a = r(55178),
                o = r(60900),
                n = r(21732),
                s = r(91027),
                d = r(63423),
                u = r(82586),
                c = r(2969);
            let p = (0, i.PA)((e) => {
                    let {
                            iconSize: t,
                            className: r,
                            size: i,
                            variant: a = 'default',
                            isPlaying: p = !1,
                            onClick: _,
                            iconClassName: m,
                            disabled: f,
                            color: v,
                            buttonVariant: x = 'text',
                            children: h,
                            radius: g = 'round',
                            withHover: y,
                            withRipple: b = !1,
                            ariaDescribedBy: C,
                            forwardRef: S,
                            tabIndex: A,
                            ariaHidden: I,
                            shouldSendAnalyticsOnPlayClick: T,
                        } = e,
                        j = (0, c.b)(),
                        { formatMessage: E } = (0, o.A)(),
                        N = ''.concat(p ? 'pause' : 'play').concat('filled' === a ? '_filled' : ''),
                        R = p ? n.S7.PAUSE_BUTTON : n.S7.PLAY_BUTTON,
                        P = E(p ? { id: 'player-actions.pause' } : { id: 'player-actions.play' }),
                        O = (0, s.c)((e) => {
                            (e.stopPropagation(), e.preventDefault(), null == _ || _(e), T && j(!p));
                        });
                    return (0, l.jsx)(d.$, {
                        className: r,
                        variant: x,
                        color: v,
                        radius: g,
                        size: i,
                        flexIcon: !0,
                        withRipple: b,
                        'aria-label': P,
                        onClick: O,
                        icon: (0, l.jsx)(u.I, { variant: N, size: t, className: m }),
                        disabled: f,
                        withHover: y,
                        'aria-describedby': C,
                        ref: S,
                        tabIndex: A,
                        'aria-hidden': I,
                        'data-test-id': R,
                        children: h,
                    });
                }),
                _ = (0, a.forwardRef)((e, t) => (0, l.jsx)(p, { forwardRef: t, ...e }));
        },
        94315: (e, t, r) => {
            'use strict';
            r.d(t, { J: () => o });
            var l = r(20472),
                i = r(97201),
                a = r(68243);
            let o = function (e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                    { href: r } = (0, a.u)(l.Z.video.href, { query: { [i.K.IDS]: e.join(','), [i.K.ACTIVE_INDEX]: String(t) } });
                return r;
            };
        },
        96299: (e) => {
            e.exports = {
                card_root: 'HorizontalCardContainer_root__YoAAP',
                root: 'ClipCard_root__kzWjg',
                view: 'ClipCard_view__MYSwA',
                playButton: 'ClipCard_playButton__0Wyss',
                duration: 'ClipCard_duration__89ZCx',
                image: 'ClipCard_image__hSUud',
                media: 'ClipCard_media__dU4RM',
                unavailableCover: 'ClipCard_unavailableCover__Zd9jl',
                cover: 'ClipCard_cover__ztEok',
                cover_withoutOffset: 'ClipCard_cover_withoutOffset__aasE2',
                title: 'ClipCard_title__I1s7Q',
                artistLink: 'ClipCard_artistLink__t6oPP',
                titleLink: 'ClipCard_titleLink__g3HDM',
                version: 'ClipCard_version__w9PM7',
            };
        },
        97201: (e, t, r) => {
            'use strict';
            r.d(t, { K: () => l });
            var l = (function (e) {
                return (
                    (e.TAB = 'tab'),
                    (e.ACTIVE_TAB = 'activeTab'),
                    (e.BLOCK = 'block'),
                    (e.IDS = 'ids'),
                    (e.ACTIVE_INDEX = 'activeIndex'),
                    (e.SORT = 'sort'),
                    (e.OPEN_TRAILER = 'openTrailer'),
                    (e.DEEPLINK = 'deeplink'),
                    (e.SEEDS = 'seeds'),
                    (e.STATION_ID = 'stationId'),
                    (e.OPEN_PLAYER = 'openPlayer'),
                    (e.SCREEN = 'screen'),
                    (e.CLID = 'clid'),
                    (e.UTM_SOURCE = 'utm_source'),
                    (e.YCLID = 'yclid'),
                    (e.UTM_CAMPAIGN = 'utm_campaign'),
                    (e.UTM_MEDIUM = 'utm_medium'),
                    (e.REF_ID = 'ref_id'),
                    (e.LUMEN_AWAKE_PARAM = 'shouldAwakeLumen'),
                    (e.BEST_PLAY = 'bestPlay'),
                    (e.TEXT = 'text'),
                    e
                );
            })({});
        },
        99872: (e, t, r) => {
            'use strict';
            r.d(t, { C: () => n });
            var l = r(91027),
                i = r(57594),
                a = r(28816),
                o = r(94315);
            let n = () => {
                let { fullscreenVideoPlayer: e } = (0, i.g)(),
                    t = (0, a.p)();
                return (0, l.c)(function (r) {
                    let l = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
                    (e.setIds(r), e.setClipIndex(l), t((0, o.J)(r, l)), e.modal.open());
                });
            };
        },
    },
    (e) => {
        (e.O(
            0,
            [
                1010, 7412, 2147, 8461, 5108, 1256, 4555, 6706, 5472, 8378, 900, 2536, 2146, 3353, 2474, 8035, 347, 2732, 1410, 1417, 229, 3266, 8506, 6050, 5806, 7702,
                6874, 9155, 861, 4668, 9740, 1175, 7914, 4220, 9562, 7358,
            ],
            () => e((e.s = 20917)),
        ),
            (_N_E = e.O()));
    },
]);
