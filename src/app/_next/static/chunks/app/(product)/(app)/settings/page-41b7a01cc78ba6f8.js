(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [4398],
    {
        1176: (e, t, r) => {
            'use strict';
            r.d(t, { r: () => n });
            let n = (0, r(55178).createContext)({ pageId: void 0, pageEntityId: void 0, displayReasonId: void 0, pageStyle: void 0, pagePlacement: void 0 });
        },
        1677: (e, t, r) => {
            'use strict';
            r.d(t, { F: () => s });
            var n = r(99923),
                o = r(48922);
            let s = {
                [o._Q.HOME]: n.LandingBlockPageID.MainScreen,
                [o._Q.NON_MUSIC]: n.LandingBlockPageID.NonmusicLandingScreen,
                [o._Q.OWN_COLLECTION]: n.LandingBlockPageID.CollectionLandingScreen,
                [o._Q.LANDING]: n.LandingBlockPageID.DynamicScreen,
                [o._Q.OWN_ARTISTS]: n.LandingBlockPageID.CollectionArtistsScreen,
                [o._Q.SEARCH]: n.LandingBlockPageID.SearchScreen,
                [o._Q.ARTIST]: n.LandingBlockPageID.ArtistScreen,
                [o._Q.CONCERTS]: n.LandingBlockPageID.ConcertsLandingScreen,
                [o._Q.CONCERT]: n.LandingBlockPageID.ConcertScreen,
                [o._Q.CONCERT_LOCATION_SELECTOR]: n.LandingBlockPageID.ConcertLocationSelector,
                [o._Q.ALBUM]: n.LandingBlockPageID.AlbumScreen,
                [o._Q.PLAYLIST]: n.LandingBlockPageID.PlaylistScreen,
                [o._Q.SLIDES_SCREEN]: n.LandingBlockPageID.SlidesScreen,
                [o._Q.PROMOLANDING_ALBUM]: n.LandingBlockPageID.PromolandingAlbumScreen,
                [o._Q.WAVE_LANDING_SCREEN]: n.LandingBlockPageID.WaveLandingScreen,
                [o._Q.FACT_SCREEN]: n.LandingBlockPageID.FactScreen,
                [o._Q.COLLECTION_VIBE_ROOMS]: n.LandingBlockPageID.MultivibeScreen,
                [o._Q.MULTIVIBE_SENDING_INVITATION_SCREEN]: n.LandingBlockPageID.MultivibeSendingInvitationScreen,
                [o._Q.MULTIVIBE_ACTION_SCREEN]: n.LandingBlockPageID.MultivibeActionScreen,
                [o._Q.MULTIVIBE_LIMIT_SCREEN]: n.LandingBlockPageID.MultivibeLimitScreen,
                [o._Q.MULTIVIBE_UNIFIED_SCREEN]: n.LandingBlockPageID.MultivibeUnifiedScreen,
            };
        },
        1987: (e, t) => {
            'use strict';
            (Object.defineProperty(t, '__esModule', { value: !0 }),
                !(function (e, t) {
                    for (var r in t) Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
                })(t, {
                    bindSnapshot: function () {
                        return i;
                    },
                    createAsyncLocalStorage: function () {
                        return s;
                    },
                    createSnapshot: function () {
                        return a;
                    },
                }));
            let r = Object.defineProperty(Error('Invariant: AsyncLocalStorage accessed in runtime where it is not available'), '__NEXT_ERROR_CODE', {
                value: 'E504',
                enumerable: !1,
                configurable: !0,
            });
            class n {
                disable() {
                    throw r;
                }
                getStore() {}
                run() {
                    throw r;
                }
                exit() {
                    throw r;
                }
                enterWith() {
                    throw r;
                }
                static bind(e) {
                    return e;
                }
            }
            let o = 'undefined' != typeof globalThis && globalThis.AsyncLocalStorage;
            function s() {
                return o ? new o() : new n();
            }
            function i(e) {
                return o ? o.bind(e) : n.bind(e);
            }
            function a() {
                return o
                    ? o.snapshot()
                    : function (e, ...t) {
                          return e(...t);
                      };
            }
        },
        2356: (e, t, r) => {
            Promise.resolve().then(r.bind(r, 72306));
        },
        2783: (e, t, r) => {
            'use strict';
            function n(e, t) {
                return (n = Object.setPrototypeOf
                    ? Object.setPrototypeOf.bind()
                    : function (e, t) {
                          return ((e.__proto__ = t), e);
                      })(e, t);
            }
            function o(e, t) {
                ((e.prototype = Object.create(t.prototype)), (e.prototype.constructor = e), n(e, t));
            }
            r.d(t, { A: () => o });
        },
        2792: (e, t, r) => {
            'use strict';
            r.d(t, { J: () => s });
            var n = r(55178),
                o = r(10936);
            function s() {
                return (0, n.useContext)(o.l);
            }
        },
        3064: (e, t, r) => {
            'use strict';
            r.d(t, { D: () => n });
            let n = (0, r(55178).createContext)({ skeleton: void 0 });
        },
        4008: (e, t, r) => {
            'use strict';
            r.d(t, { WithOffline: () => l });
            var n = r(96103),
                o = r(70204),
                s = r(34186),
                i = r(11541),
                a = r(57594);
            let l = (0, n.PA)((e) => {
                let { fallback: t, children: r } = e,
                    n = (0, s.N)(),
                    { slam: l } = (0, a.g)(),
                    c = n.get(o.U2);
                return (0, i.g)(c) || l.isOfflineModeEnabled ? r : t;
            });
        },
        6680: (e) => {
            e.exports = {
                content: 'WizardModal_content__mLcxg',
                modalHeader: 'WizardModal_modalHeader__BbNjx',
                root: 'WizardModal_root__mrF2y',
                root_withCustomControls: 'WizardModal_root_withCustomControls__t7Kjv',
                modalContent: 'WizardModal_modalContent__OifZs',
                wrapper: 'WizardModal_wrapper__2_8ft',
                title: 'WizardModal_title__fPGJr',
                text: 'WizardModal_text__ntEON',
                button: 'WizardModal_button__e8bCS',
                mainContainer: 'WizardModal_mainContainer__fbjpt',
                carousel: 'WizardModal_carousel__uVcYS',
                scrollContainer: 'WizardModal_scrollContainer__tDrP6',
                important: 'WizardModal_important__7uymQ',
                tabCarousel: 'WizardModal_tabCarousel__AclIV',
                tabShimmer: 'WizardModal_tabShimmer__36Qc7',
                tabTitle: 'WizardModal_tabTitle__7ZAaF',
                filter: 'WizardModal_filter__o2wpn',
                filter_selected: 'WizardModal_filter_selected__qdlMf',
                item: 'WizardModal_item__wUHVg',
            };
        },
        6752: (e, t, r) => {
            'use strict';
            r.d(t, { L: () => o });
            var n = {};
            (Object.defineProperty(n, '__esModule', { value: !0 }), (n.useReturnValue = void 0), (n.useReturnValue = (e) => e()), n.__esModule);
            var o = n.useReturnValue;
        },
        8626: (e, t, r) => {
            'use strict';
            r.d(t, { m: () => n });
            let n = () => ({ year: 'numeric' });
        },
        9612: (e, t, r) => {
            'use strict';
            r.d(t, { A: () => _ });
            var n = r(28376),
                o = r(68905),
                s = r(2783);
            function i(e, t) {
                return e
                    .replace(RegExp('(^|\\s)' + t + '(?:\\s|$)', 'g'), '$1')
                    .replace(/\s+/g, ' ')
                    .replace(/^\s*|\s*$/g, '');
            }
            var a = r(55178),
                l = r(65549),
                c = r(25024),
                d = function (e, t) {
                    return (
                        e &&
                        t &&
                        t.split(' ').forEach(function (t) {
                            e.classList
                                ? e.classList.remove(t)
                                : 'string' == typeof e.className
                                  ? (e.className = i(e.className, t))
                                  : e.setAttribute('class', i((e.className && e.className.baseVal) || '', t));
                        })
                    );
                },
                u = (function (e) {
                    function t() {
                        for (var t, r = arguments.length, n = Array(r), o = 0; o < r; o++) n[o] = arguments[o];
                        return (
                            ((t = e.call.apply(e, [this].concat(n)) || this).appliedClasses = { appear: {}, enter: {}, exit: {} }),
                            (t.onEnter = function (e, r) {
                                var n = t.resolveArguments(e, r),
                                    o = n[0],
                                    s = n[1];
                                (t.removeClasses(o, 'exit'), t.addClass(o, s ? 'appear' : 'enter', 'base'), t.props.onEnter && t.props.onEnter(e, r));
                            }),
                            (t.onEntering = function (e, r) {
                                var n = t.resolveArguments(e, r),
                                    o = n[0],
                                    s = n[1];
                                (t.addClass(o, s ? 'appear' : 'enter', 'active'), t.props.onEntering && t.props.onEntering(e, r));
                            }),
                            (t.onEntered = function (e, r) {
                                var n = t.resolveArguments(e, r),
                                    o = n[0],
                                    s = n[1] ? 'appear' : 'enter';
                                (t.removeClasses(o, s), t.addClass(o, s, 'done'), t.props.onEntered && t.props.onEntered(e, r));
                            }),
                            (t.onExit = function (e) {
                                var r = t.resolveArguments(e)[0];
                                (t.removeClasses(r, 'appear'), t.removeClasses(r, 'enter'), t.addClass(r, 'exit', 'base'), t.props.onExit && t.props.onExit(e));
                            }),
                            (t.onExiting = function (e) {
                                var r = t.resolveArguments(e)[0];
                                (t.addClass(r, 'exit', 'active'), t.props.onExiting && t.props.onExiting(e));
                            }),
                            (t.onExited = function (e) {
                                var r = t.resolveArguments(e)[0];
                                (t.removeClasses(r, 'exit'), t.addClass(r, 'exit', 'done'), t.props.onExited && t.props.onExited(e));
                            }),
                            (t.resolveArguments = function (e, r) {
                                return t.props.nodeRef ? [t.props.nodeRef.current, e] : [e, r];
                            }),
                            (t.getClassNames = function (e) {
                                var r = t.props.classNames,
                                    n = 'string' == typeof r,
                                    o = n && r ? r + '-' : '',
                                    s = n ? '' + o + e : r[e],
                                    i = n ? s + '-active' : r[e + 'Active'],
                                    a = n ? s + '-done' : r[e + 'Done'];
                                return { baseClassName: s, activeClassName: i, doneClassName: a };
                            }),
                            t
                        );
                    }
                    (0, s.A)(t, e);
                    var r = t.prototype;
                    return (
                        (r.addClass = function (e, t, r) {
                            var n,
                                o = this.getClassNames(t)[r + 'ClassName'],
                                s = this.getClassNames('enter').doneClassName;
                            ('appear' === t && 'done' === r && s && (o += ' ' + s),
                                'active' === r && e && (0, c.F)(e),
                                o &&
                                    ((this.appliedClasses[t][r] = o),
                                    (n = o),
                                    e &&
                                        n &&
                                        n.split(' ').forEach(function (t) {
                                            e.classList
                                                ? e.classList.add(t)
                                                : (e.classList
                                                      ? t && e.classList.contains(t)
                                                      : -1 !== (' ' + (e.className.baseVal || e.className) + ' ').indexOf(' ' + t + ' ')) ||
                                                  ('string' == typeof e.className
                                                      ? (e.className = e.className + ' ' + t)
                                                      : e.setAttribute('class', ((e.className && e.className.baseVal) || '') + ' ' + t));
                                        })));
                        }),
                        (r.removeClasses = function (e, t) {
                            var r = this.appliedClasses[t],
                                n = r.base,
                                o = r.active,
                                s = r.done;
                            ((this.appliedClasses[t] = {}), n && d(e, n), o && d(e, o), s && d(e, s));
                        }),
                        (r.render = function () {
                            var e = this.props,
                                t = (e.classNames, (0, o.A)(e, ['classNames']));
                            return a.createElement(
                                l.Ay,
                                (0, n.A)({}, t, {
                                    onEnter: this.onEnter,
                                    onEntered: this.onEntered,
                                    onEntering: this.onEntering,
                                    onExit: this.onExit,
                                    onExiting: this.onExiting,
                                    onExited: this.onExited,
                                }),
                            );
                        }),
                        t
                    );
                })(a.Component);
            ((u.defaultProps = { classNames: '' }), (u.propTypes = {}));
            let _ = u;
        },
        9848: (e, t, r) => {
            'use strict';
            r.d(t, { F: () => n });
            let n = (0, r(55178).createContext)({ tabId: void 0, tabPos: void 0, isTabSelectedByDefault: void 0 });
        },
        10936: (e, t, r) => {
            'use strict';
            r.d(t, { l: () => n });
            let n = (0, r(55178).createContext)({
                objectType: void 0,
                objectId: void 0,
                objectPosX: void 0,
                objectPosY: void 0,
                objectPos: void 0,
                objectsCount: void 0,
                mainObjectId: void 0,
                mainObjectType: void 0,
            });
        },
        11323: (e, t, r) => {
            'use strict';
            r.d(t, { B: () => l });
            var n = r(32290),
                o = r(55178),
                s = r(21732),
                i = r(50162);
            let a = (e) => {
                    let { isAvailable: t = !0, className: r, fallbackIconSize: o, forwardRef: a, ...l } = e;
                    return t
                        ? (0, n.jsx)(i._V, { ref: a, className: r, fallbackIconSize: o, ...l, 'data-test-id': s.S7.ENTITY_COVER_IMAGE })
                        : (0, n.jsx)(i.Ab, { className: r, iconSize: o, iconVariant: 'unavailable', 'data-test-id': s.S7.ENTITY_COVER_FALLBACK_IMAGE });
                },
                l = (0, o.forwardRef)((e, t) => (0, n.jsx)(a, { forwardRef: t, ...e }));
        },
        11541: (e, t, r) => {
            'use strict';
            r.d(t, { g: () => o });
            var n = r(19379);
            let o = (e) => {
                let t = e.get(n.c.OfflineMode);
                return 'boolean' == typeof t && t;
            };
        },
        12989: (e, t, r) => {
            'use strict';
            r.d(t, { D: () => C });
            var n = r(55178),
                o = r(17811),
                s = r(92146),
                i = r(74416),
                a = r(6752),
                l = r(62376),
                c = r(1677),
                d = r(48922),
                u = r(84782),
                _ = r(30915),
                m = r(18746),
                f = r(2792),
                p = r(37240),
                h = r(51012),
                x = r(47498);
            let C = () => {
                let e = (0, l.U)(),
                    t = (0, i.st)(),
                    { hash: r } = (0, i.gf)(),
                    { pageId: C, displayReasonId: v } = (0, p.$)(),
                    { tabId: E, tabPos: g, isTabSelectedByDefault: b } = (0, x.R)(),
                    { offsetBlockPosY: A } = (0, _.u)(),
                    { blockType: S, blockId: O, blockPosX: N, blockPosY: L, mainObjectId: y, mainObjectType: R, displayReasonId: T } = (0, u.N)(),
                    { filterKey: I, filterValue: j, filterPos: M } = (0, m.G)(),
                    { objectType: w, objectsCount: P, objectId: k, objectPosX: D, objectPosY: B } = (0, f.J)(),
                    { skeleton: z } = (0, h.b)(),
                    U = null != T ? T : v,
                    F = (0, a.L)(() => (void 0 !== A && void 0 !== L ? A + L : L));
                return (0, n.useCallback)(
                    (n, i) => {
                        if (!t || !C || !d.xK.includes(C) || !d.fD.includes(C)) return;
                        let a = c.F[C];
                        if (!a) return;
                        let l = {
                            hash: r,
                            pageId: a,
                            entityType: S,
                            entityId: O,
                            entityPosX: N,
                            entityPosY: F,
                            objectsCount: P,
                            viewUuid: i,
                            objectType: w,
                            objectId: k,
                            objectPosX: D,
                            objectPosY: B,
                        };
                        (void 0 !== I && ((l.filterKey = I), (l.filterValue = j), (l.filterPos = M)),
                            d.qG.includes(C) && ((l.tabId = E), (l.tabPos = g), (l.isTabSelectedByDefault = b)),
                            z && (l.skeletonId = z),
                            'string' == typeof y && 'string' == typeof R && ((l.mainObjectType = R), (l.mainObjectId = y)),
                            U && (l.displayReasonId = U));
                        let u = (0, o.F)({ params: l, logger: e, context: 'useSendEventOnBlockShowedOrHidden' });
                        u && (n ? (0, s.Pf)(t.evgenInstance, u) : (0, s.nv)(t.evgenInstance, u));
                    },
                    [t, U, O, N, F, S, I, M, j, r, b, e, y, R, k, D, B, w, P, C, z, E, g],
                );
            };
        },
        13616: (e, t, r) => {
            'use strict';
            r.d(t, { K: () => o });
            var n = r(60754);
            let o = n.gK.model('CustomPlayerThumb', { href: n.gK.string, width: n.gK.number, height: n.gK.number });
        },
        14934: (e, t, r) => {
            'use strict';
            r.d(t, { MN: () => d, hg: () => c });
            var n,
                o = r(55178),
                s = {
                    5881: (e, t, r) => {
                        function n() {
                            for (var e, t, r = 0, n = ''; r < arguments.length;)
                                (e = arguments[r++]) &&
                                    (t = (function e(t) {
                                        var r,
                                            n,
                                            o = '';
                                        if ('string' == typeof t || 'number' == typeof t) o += t;
                                        else if ('object' == typeof t)
                                            if (Array.isArray(t)) for (r = 0; r < t.length; r++) t[r] && (n = e(t[r])) && (o && (o += ' '), (o += n));
                                            else for (r in t) t[r] && (o && (o += ' '), (o += r));
                                        return o;
                                    })(e)) &&
                                    (n && (n += ' '), (n += t));
                            return n;
                        }
                        (r.r(t), r.d(t, { clsx: () => n, default: () => o }));
                        let o = n;
                    },
                    8765: (e, t, r) => {
                        (r.r(t), r.d(t, { default: () => n }));
                        let n = {
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
                        (r.r(t), r.d(t, { default: () => n }));
                        let n = {
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
                        (r.r(t), r.d(t, { default: () => n }));
                        let n = { root: 'LizdJ2L0HW7JWOvPrfly' };
                    },
                    7319: (e, t, r) => {
                        (r.r(t), r.d(t, { default: () => n }));
                        let n = { root: 'eaYyesBmJL_NbkgoYR1c', focusable: 'uL1dD5rxgI4bPmfyMMe7' };
                    },
                    1246: (e, t, r) => {
                        (r.r(t), r.d(t, { default: () => n }));
                        let n = {
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
                        (r.r(t), r.d(t, { default: () => n }));
                        let n = {
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
                        (r.r(t), r.d(t, { default: () => n }));
                        let n = {
                            root: '_MWOVuZRvUQdXKTMcOPx',
                            root_clamp: 'LezmJlldtbHWqU7l1950',
                            root_clamp_oneline: 'oyQL2RSmoNbNQf3Vc6YI',
                            root_clamp_multiline: 'jMyoZB5J9iZbzJmWOrF0',
                        };
                    },
                    9097: (e, t) => {
                        var r = Symbol.for('react.transitional.element');
                        function n(e, t, n) {
                            var o = null;
                            if ((void 0 !== n && (o = '' + n), void 0 !== t.key && (o = '' + t.key), 'key' in t))
                                for (var s in ((n = {}), t)) 'key' !== s && (n[s] = t[s]);
                            else n = t;
                            return { $$typeof: r, type: e, key: o, ref: void 0 !== (t = n.ref) ? t : null, props: n };
                        }
                        ((t.Fragment = Symbol.for('react.fragment')), (t.jsx = n), (t.jsxs = n));
                    },
                    4377: (e, t, r) => {
                        e.exports = r(9097);
                    },
                    7742: function (e, t, r) {
                        var n =
                            (this && this.__importDefault) ||
                            function (e) {
                                return e && e.__esModule ? e : { default: e };
                            };
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.CardControls = void 0));
                        let o = r(4377),
                            s = r(5881),
                            i = r(8532),
                            a = n(r(8765));
                        t.CardControls = (e) => {
                            let {
                                    className: t,
                                    playControl: r,
                                    likeControl: n,
                                    menuControl: l,
                                    pinControl: c,
                                    trailerControl: d,
                                    isVisible: u,
                                    radius: _ = 'default',
                                    bottomContainerClassName: m,
                                    labelText: f,
                                } = e,
                                p = d || r,
                                h = l || n;
                            return (0, o.jsxs)('div', {
                                className: (0, s.clsx)(
                                    a.default.root,
                                    a.default.controls,
                                    { [a.default.controls_visible]: u },
                                    a.default['controls_radius_'.concat(_)],
                                    t,
                                ),
                                children: [
                                    (0, o.jsx)('div', { className: a.default.top, children: c }),
                                    (0, o.jsxs)('div', {
                                        className: (0, s.clsx)(a.default.bottom, m),
                                        children: [
                                            p && (0, o.jsxs)('div', { className: a.default.bottom_left, children: [d, r] }),
                                            h && (0, o.jsxs)('div', { className: a.default.bottom_right, children: [l, n] }),
                                        ],
                                    }),
                                    !!f && (0, o.jsx)(i.Label, { className: a.default.label, children: f }),
                                ],
                            });
                        };
                    },
                    7093: function (e, t, r) {
                        var n =
                            (this && this.__importDefault) ||
                            function (e) {
                                return e && e.__esModule ? e : { default: e };
                            };
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.EntityCard = void 0));
                        let o = r(4377),
                            s = r(810),
                            i = r(5881),
                            a = r(8903),
                            l = r(6530),
                            c = n(r(3550)),
                            d = (e) => {
                                let {
                                    forwardRef: t,
                                    view: r,
                                    className: n,
                                    textPosition: s = 'left',
                                    contentLinesCount: d = 2,
                                    title: u,
                                    description: _,
                                    explicitMarkComponent: m,
                                    chart: f,
                                    children: p,
                                    srTitle: h,
                                    wrapperClassName: x,
                                    ...C
                                } = e;
                                return (0, o.jsxs)('div', {
                                    className: (0, i.clsx)(c.default.root, n),
                                    ref: t,
                                    ...C,
                                    children: [
                                        (0, o.jsx)(l.SROnly, { tabIndex: -1, children: null != h ? h : u }),
                                        (0, o.jsx)('div', { className: c.default.viewContainer, children: r }),
                                        (0, o.jsxs)('div', {
                                            className: (0, i.clsx)(c.default.wrapper, x),
                                            children: [
                                                f,
                                                (0, o.jsxs)('div', {
                                                    className: (0, i.clsx)(
                                                        c.default.content,
                                                        c.default['content_'.concat(s)],
                                                        c.default['content_linesCount_'.concat(d)],
                                                    ),
                                                    children: [
                                                        u &&
                                                            (0, o.jsxs)('div', {
                                                                className: c.default.titleContainer,
                                                                children: [
                                                                    (0, o.jsx)(a.Caption, {
                                                                        className: c.default.title,
                                                                        variant: 'div',
                                                                        type: 'entity',
                                                                        size: 's',
                                                                        weight: 'medium',
                                                                        lineClamp: 2,
                                                                        children: u,
                                                                    }),
                                                                    m,
                                                                ],
                                                            }),
                                                        _,
                                                        p,
                                                    ],
                                                }),
                                            ],
                                        }),
                                    ],
                                });
                            };
                        t.EntityCard = (0, s.forwardRef)((e, t) => (0, o.jsx)(d, { forwardRef: t, ...e }));
                    },
                    2018: function (e, t, r) {
                        var n =
                            (this && this.__importDefault) ||
                            function (e) {
                                return e && e.__esModule ? e : { default: e };
                            };
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.Label = void 0));
                        let o = r(4377),
                            s = r(5881),
                            i = r(8903),
                            a = n(r(4353));
                        t.Label = (e) => {
                            let { children: t, className: r, size: n = 's', ...l } = e;
                            return (0, o.jsx)(i.Caption, {
                                variant: 'div',
                                type: 'text',
                                size: n,
                                lineClamp: 1,
                                className: (0, s.clsx)(a.default.root, r),
                                ...l,
                                children: t,
                            });
                        };
                    },
                    8532: (e, t, r) => {
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.Label = void 0));
                        var n = r(2018);
                        Object.defineProperty(t, 'Label', {
                            enumerable: !0,
                            get: function () {
                                return n.Label;
                            },
                        });
                    },
                    5531: function (e, t, r) {
                        var n =
                            (this && this.__importDefault) ||
                            function (e) {
                                return e && e.__esModule ? e : { default: e };
                            };
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.SROnly = void 0));
                        let o = r(4377),
                            s = r(5881),
                            i = r(810),
                            a = n(r(7319));
                        t.SROnly = (e) => {
                            let { className: t, focusable: r, children: n, ...l } = e,
                                c = (0, s.clsx)(a.default.root, { [a.default.focusable]: r }, t);
                            return (0, i.isValidElement)(n)
                                ? (0, i.cloneElement)(n, { ...l, className: (0, s.clsx)(c, n.props.className) })
                                : (0, o.jsx)('span', { className: c, ...l, children: n });
                        };
                    },
                    6530: (e, t, r) => {
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.SROnly = void 0));
                        var n = r(5531);
                        Object.defineProperty(t, 'SROnly', {
                            enumerable: !0,
                            get: function () {
                                return n.SROnly;
                            },
                        });
                    },
                    3412: function (e, t, r) {
                        var n =
                            (this && this.__importDefault) ||
                            function (e) {
                                return e && e.__esModule ? e : { default: e };
                            };
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.Caption = t.CaptionComponent = void 0));
                        let o = r(4377),
                            s = r(5881),
                            i = r(810),
                            a = r(5987),
                            l = n(r(1246));
                        ((t.CaptionComponent = (e) => {
                            let { forwardRef: t, variant: r, type: n = 'text', size: i = 's', className: c, children: d, weight: u = 'medium', ..._ } = e;
                            return (0, o.jsx)(a.Typography, {
                                variant: r,
                                ref: t,
                                className: (0, s.clsx)(l.default.root, l.default['root_'.concat(n, '_').concat(i)], l.default['root_weight_'.concat(u)], c),
                                ..._,
                                children: d,
                            });
                        }),
                            (t.Caption = (0, i.forwardRef)((e, r) => (0, o.jsx)(t.CaptionComponent, { forwardRef: r, ...e }))));
                    },
                    1641: function (e, t, r) {
                        var n =
                            (this && this.__importDefault) ||
                            function (e) {
                                return e && e.__esModule ? e : { default: e };
                            };
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.Heading = t.HeadingComponent = void 0));
                        let o = r(4377),
                            s = r(5881),
                            i = r(810),
                            a = r(5987),
                            l = n(r(2445));
                        ((t.HeadingComponent = (e) => {
                            let { forwardRef: t, variant: r, weight: n = 'bold', size: i = 's', className: c, children: d, ...u } = e;
                            return (0, o.jsx)(a.Typography, {
                                variant: r,
                                ref: t,
                                className: (0, s.clsx)(l.default.root, l.default['root_size_'.concat(i)], l.default['root_weight_'.concat(n)], c),
                                ...u,
                                children: d,
                            });
                        }),
                            (t.Heading = (0, i.forwardRef)((e, r) => (0, o.jsx)(t.HeadingComponent, { forwardRef: r, ...e }))));
                    },
                    5987: function (e, t, r) {
                        var n =
                            (this && this.__importDefault) ||
                            function (e) {
                                return e && e.__esModule ? e : { default: e };
                            };
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.Typography = t.TypographyComponent = void 0));
                        let o = r(4377),
                            s = r(5881),
                            i = r(810),
                            a = n(r(61));
                        function l(e) {
                            let { forwardRef: t, style: r, className: n, children: i, variant: l, lineClamp: c, ...d } = e,
                                u = c && 'string' == typeof i ? i : void 0;
                            return (0, o.jsx)(l, {
                                style: { ...r, WebkitLineClamp: c },
                                ref: t,
                                title: u,
                                className: (0, s.clsx)(
                                    a.default.root,
                                    { [a.default.root_clamp]: c && c > 0, [a.default.root_clamp_oneline]: c && 1 === c, [a.default.root_clamp_multiline]: c && c > 1 },
                                    n,
                                ),
                                ...d,
                                children: i,
                            });
                        }
                        ((t.TypographyComponent = l), (t.Typography = (0, i.forwardRef)((e, t) => (0, o.jsx)(l, { forwardRef: t, ...e }))));
                    },
                    8903: (e, t, r) => {
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.Heading = t.Caption = void 0));
                        var n = r(3412);
                        Object.defineProperty(t, 'Caption', {
                            enumerable: !0,
                            get: function () {
                                return n.Caption;
                            },
                        });
                        var o = r(1641);
                        Object.defineProperty(t, 'Heading', {
                            enumerable: !0,
                            get: function () {
                                return o.Heading;
                            },
                        });
                    },
                    810: (e) => {
                        e.exports = n || (n = r.t(o, 2));
                    },
                },
                i = {};
            function a(e) {
                var t = i[e];
                if (void 0 !== t) return t.exports;
                var r = (i[e] = { exports: {} });
                return (s[e].call(r.exports, r, r.exports, a), r.exports);
            }
            ((a.d = (e, t) => {
                for (var r in t) a.o(t, r) && !a.o(e, r) && Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
            }),
                (a.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
                (a.r = (e) => {
                    ('undefined' != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
                        Object.defineProperty(e, '__esModule', { value: !0 }));
                }));
            var l = {};
            (() => {
                (Object.defineProperty(l, 'X$', { value: !0 }), (l.kk = l.m7 = void 0));
                var e = a(7093);
                Object.defineProperty(l, 'm7', {
                    enumerable: !0,
                    get: function () {
                        return e.EntityCard;
                    },
                });
                var t = a(7742);
                Object.defineProperty(l, 'kk', {
                    enumerable: !0,
                    get: function () {
                        return t.CardControls;
                    },
                });
            })();
            var c = l.kk,
                d = l.m7;
            l.X$;
        },
        15559: (e, t, r) => {
            'use strict';
            r.d(t, { v: () => o });
            var n = r(79406);
            let o = (e) => {
                let { checkExperiment: t, getDisclaimerContent: r, getExplicitContent: o, userRegion: s } = e;
                return 'ru' === s && t(n.z.WebNextFooterDisclaimer, 'on') ? r() : o();
            };
        },
        17512: (e, t, r) => {
            'use strict';
            function n() {
                var e;
                return null == (e = window.musicDesktop) ? void 0 : e.runtime.version;
            }
            r.d(t, { B: () => n });
        },
        17679: (e) => {
            e.exports = { root: 'BaseNotificationError_root__FfGUZ', message: 'BaseNotificationError_message___W_xy' };
        },
        17811: (e, t, r) => {
            'use strict';
            function n(e) {
                let { params: t, logger: r, context: n } = e,
                    o = Object.getOwnPropertyNames(t).filter((e) => void 0 === t[e]);
                return o.length > 0 ? (r.error('Evgen parameters are not met', { parameters: o.join(', '), incomingParams: t, context: n }), null) : t;
            }
            r.d(t, { F: () => n });
        },
        18746: (e, t, r) => {
            'use strict';
            r.d(t, { G: () => s });
            var n = r(55178),
                o = r(70608);
            function s() {
                return (0, n.useContext)(o.S);
            }
        },
        20599: (e, t, r) => {
            'use strict';
            r.d(t, { E: () => n });
            let n = (0, r(55178).createContext)({ offsetBlockPosY: void 0 });
        },
        22800: (e) => {
            e.exports = {
                coverBlock: 'ArtistCard_coverBlock__YCSus',
                like: 'ArtistCard_like__jmlKc',
                root: 'ArtistCard_root__F4RfA',
                root_selected: 'ArtistCard_root_selected__9Djbq',
                cover: 'ArtistCard_cover__RSTvK',
                image: 'ArtistCard_image__Uab5w',
                name: 'ArtistCard_name__IF9yZ',
                icon: 'ArtistCard_icon__PjbJI',
            };
        },
        23352: (e, t, r) => {
            'use strict';
            r.d(t, { n: () => i });
            var n = r(55178),
                o = r(12989),
                s = r(80536);
            let i = function () {
                let { callback: e, singleEvent: t, withViewUuid: r } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    i = (0, n.useRef)(null),
                    a = (0, o.D)(),
                    l = (0, n.useId)(),
                    c = (0, n.useContext)(s.B),
                    d = (0, n.useCallback)(
                        (n, o) => {
                            (e ? e(n, r ? o : void 0) : a(n, o), t && c.unobserveElement(l));
                        },
                        [e, c, l, a, t, r],
                    );
                return (
                    (0, n.useEffect)(
                        () => (
                            c.observeElement({ elementRef: i, elementId: l, callback: d }),
                            () => {
                                c.unobserveElement(l);
                            }
                        ),
                        [e, c, d, l, a],
                    ),
                    { ref: i, intersectionPropertyId: l }
                );
            };
        },
        23912: (e, t, r) => {
            'use strict';
            var n;
            (r.d(t, { f: () => n }),
                (function (e) {
                    ((e.CUSTOM = 'CUSTOM'),
                        (e.DEFAULT = 'DEFAULT'),
                        (e.CLASSICAL = 'CLASSICAL'),
                        (e.CLUB = 'CLUB'),
                        (e.DANCE = 'DANCE'),
                        (e.BASS_BOOST = 'BASS_BOOST'),
                        (e.BASS_AND_TREBLE_BOOST = 'BASS_AND_TREBLE_BOOST'),
                        (e.TREBLE_BOOST = 'TREBLE_BOOST'),
                        (e.SPEAKERS = 'SPEAKERS'),
                        (e.LARGE_HALL = 'LARGE_HALL'),
                        (e.CONCERT = 'CONCERT'),
                        (e.PARTY = 'PARTY'),
                        (e.POP = 'POP'),
                        (e.REGGAE = 'REGGAE'),
                        (e.ROCK = 'ROCK'),
                        (e.SKA = 'SKA'),
                        (e.SOFT = 'SOFT'),
                        (e.SOFT_ROCK = 'SOFT_ROCK'),
                        (e.TECHNO = 'TECHNO'));
                })(n || (n = {})));
        },
        25024: (e, t, r) => {
            'use strict';
            r.d(t, { F: () => n });
            var n = function (e) {
                return e.scrollTop;
            };
        },
        26490: (e, t, r) => {
            'use strict';
            r.d(t, { S: () => i, i: () => s });
            var n = r(55178),
                o = r(25090);
            let s = (0, n.createContext)(null),
                i = () => {
                    let e = (0, n.useContext)(s);
                    if (!e) throw new o.t('Equalizer cannot be null, please add a context provider', { code: 'E_CONTEXT_EQUALIZER_NULL' });
                    return e;
                };
        },
        28376: (e, t, r) => {
            'use strict';
            function n() {
                return (n = Object.assign
                    ? Object.assign.bind()
                    : function (e) {
                          for (var t = 1; t < arguments.length; t++) {
                              var r = arguments[t];
                              for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
                          }
                          return e;
                      }).apply(null, arguments);
            }
            r.d(t, { A: () => n });
        },
        28563: (e, t, r) => {
            'use strict';
            r.d(t, { F: () => b });
            var n = r(32290),
                o = r(63618),
                s = r(42157),
                i = r(96103),
                a = r(55178),
                l = r.t(a, 2),
                c = r(21732),
                d = r(45807),
                u = {
                    810: (e) => {
                        e.exports = l;
                    },
                },
                _ = {},
                m = {};
            ((() => {
                (Object.defineProperty(m, '__esModule', { value: !0 }), (m.useForwardRef = void 0));
                let e = (function e(t) {
                    var r = _[t];
                    if (void 0 !== r) return r.exports;
                    var n = (_[t] = { exports: {} });
                    return (u[t](n, n.exports, e), n.exports);
                })(810);
                m.useForwardRef = function (t, r) {
                    let n = (0, e.useRef)(r);
                    return (
                        (0, e.useEffect)(() => {
                            t && ('function' == typeof t ? t(n.current) : (t.current = n.current));
                        }, [t]),
                        n
                    );
                };
            })(),
                m.__esModule);
            var f = m.useForwardRef,
                p = r(54667),
                h = r(57594),
                x = r(49522),
                C = r(61954),
                v = r.n(C);
            let E = { [p.u.Desktop]: { start: 40, end: 20 }, [p.u.Mobile]: { start: 40, end: 40 } },
                g = (0, i.PA)((e) => {
                    let {
                            className: t,
                            carouselElement: r,
                            forwardRef: i,
                            scrollPadding: l,
                            isCarouselBetweenArrows: u = !1,
                            controlsWrapperClassName: _,
                            buttonSize: m,
                            buttonVariant: C,
                            withSecondaryColor: g,
                        } = e,
                        {
                            settings: { isMobile: b },
                        } = (0, h.g)(),
                        A = f(i, null),
                        { shouldBackwardButtonBeDisabled: S, shouldForwardButtonBeDisabled: O, shouldHideControls: N } = (0, d.Y)(A),
                        [L, y] = (0, a.useMemo)(() => {
                            let e = (0, s.A)(E, l);
                            return [b ? e[p.u.Mobile].start : e[p.u.Desktop].start, b ? e[p.u.Mobile].end : e[p.u.Desktop].end];
                        }, [l, b]),
                        R = (0, a.useCallback)(
                            (e) => {
                                var t;
                                let r = null == (t = A.current) ? void 0 : t.children[e],
                                    { current: n } = A;
                                if (!n || !(r instanceof HTMLElement)) return;
                                if (r.offsetLeft - n.scrollLeft < L) {
                                    n.scrollLeft = r.offsetLeft - L;
                                    return;
                                }
                                let o = n.scrollLeft + n.clientWidth - r.offsetLeft - r.offsetWidth;
                                o < y && (n.scrollLeft -= o - y);
                            },
                            [A, y, L],
                        ),
                        T = (0, a.useCallback)(
                            (e) => {
                                var t, n;
                                (R(e), null == (t = (n = r.props).onTabChange) || t.call(n, e));
                            },
                            [r, R],
                        ),
                        I = (0, a.cloneElement)(r, { forwardRef: A, className: (0, o.$)(v().wrapper, r.props.className, v().carousel, v().important), onTabChange: T });
                    return (0, n.jsxs)('div', {
                        className: (0, o.$)(
                            v().root,
                            {
                                [v().root_carouselBetweenArrows]: u,
                                [v().root_arrowLeft_hidden]: S,
                                [v().root_arrowRight_hidden]: O,
                                [v().root_arrow_hidden]: S && O && N,
                            },
                            t,
                        ),
                        'data-test-id': c.S7.CAROUSEL_WITH_ARROWS,
                        children: [
                            (0, n.jsx)('div', { className: v().list, children: I }),
                            !b &&
                                (0, n.jsx)(x.X, {
                                    className: (0, o.$)(v().buttons, _),
                                    carouselRef: A,
                                    backwardControlClassName: v().control,
                                    forwardControlClassName: v().control,
                                    withSecondaryColor: g,
                                    buttonSize: m,
                                    buttonVariant: C,
                                }),
                        ],
                    });
                }),
                b = (0, a.forwardRef)((e, t) => (0, n.jsx)(g, { forwardRef: t, ...e }));
        },
        29098: (e, t, r) => {
            'use strict';
            r.d(t, { P: () => n });
            let n = (0, r(55178).createContext)(null);
        },
        29130: (e, t, r) => {
            'use strict';
            r.d(t, { p: () => W });
            var n = r(32290),
                o = r(63618),
                s = r(96103),
                i = r(55178),
                a = r(60900),
                l = r(39407),
                c = r(21732),
                d = r(54862),
                u = r(63423),
                _ = r(84638),
                m = r(15299),
                f = r(71926),
                p = r(54667),
                h = r(45477),
                x = r(75582),
                C = r(55332),
                v = r(95329),
                E = r(53022),
                g = r(57594),
                b = r(58008),
                A = r(49399),
                S = r(90357),
                O = r(28563),
                N = r(89020),
                L = r(45180),
                y = r(8946),
                R = r(45257),
                T = r(14934),
                I = r(82586),
                j = r(86269),
                M = r(23352),
                w = r(11323),
                P = r(80872),
                k = r(22800),
                D = r.n(k);
            let B = (0, s.PA)((e) => {
                let { className: t, artist: r } = e,
                    { ref: s, intersectionPropertyId: a } = (0, M.n)(),
                    {
                        wizard: { likeArtist: l, isArtistLiked: d },
                    } = (0, g.g)(),
                    { id: _, name: m, coverUri: p } = r,
                    h = (0, i.useCallback)(() => {
                        l(_);
                    }, [l, _]),
                    x = d(_),
                    C = (0, i.useMemo)(
                        () =>
                            (0, n.jsx)(j.t, {
                                className: D().cover,
                                radius: 'round',
                                'data-test-id': c.e8.wizard.ARTIST_CARD,
                                children: (0, n.jsxs)(u.$, {
                                    radius: 'round',
                                    className: D().coverBlock,
                                    variant: 'default',
                                    onClick: h,
                                    withRipple: !1,
                                    withHover: !1,
                                    'aria-pressed': x,
                                    'aria-label': m,
                                    'data-test-id': c.e8.wizard.ARTIST_CARD_BUTTON,
                                    children: [
                                        (0, n.jsx)(w.B, { className: D().image, src: p || P.A.src, fit: 'cover', alt: m, withAvatarReplace: !!p, 'aria-hidden': !0 }),
                                        (0, n.jsx)('div', {
                                            className: (0, o.$)(D().like),
                                            children: (0, n.jsx)(I.I, { variant: 'likedVariant', size: 's', className: D().icon }),
                                        }),
                                    ],
                                }),
                            }),
                        [x, p, m, h],
                    );
                return (0, n.jsx)(T.MN, {
                    ref: s,
                    className: (0, o.$)(D().root, { [D().root_selected]: x }, t),
                    textPosition: 'center',
                    title: (0, n.jsx)(f.HL, {
                        'aria-hidden': !0,
                        className: D().name,
                        variant: 'div',
                        type: 'entity',
                        size: 'l',
                        weight: 'medium',
                        lineClamp: 2,
                        'data-test-id': c.e8.wizard.ARTIST_CARD_NAME,
                        children: m,
                    }),
                    'data-intersection-property-id': a,
                    view: C,
                    'data-test-id': c.Kq.artist.ARTIST_ITEM,
                });
            });
            var z = r(6680),
                U = r.n(z);
            let F = { [p.u.Desktop]: { start: 40, end: 40 }, [p.u.Mobile]: { start: 40, end: 40 } },
                W = (0, s.PA)((e) => {
                    let { onFinishSuccess: t } = e,
                        { formatMessage: r } = (0, a.A)(),
                        {
                            wizard: s,
                            settings: { isMobile: p, isWindowsApplication: T, isLinuxApplication: I },
                            user: j,
                        } = (0, g.g)(),
                        { notify: M } = (0, x.l)(),
                        w = (0, E.z)(),
                        [P, k] = (0, d.d)(),
                        D = (0, m.zb)(0),
                        z = (0, i.useMemo)(
                            () => (e) => {
                                var t;
                                if (!D.onTabChange || e === D.value) return;
                                D.onTabChange(e);
                                let r = null == (t = s.genres[e]) ? void 0 : t.id;
                                (s.setFilter(r), null == P || P.scrollTo({ top: 0 }));
                            },
                            [s, D, P],
                        ),
                        W = (0, i.useMemo)(() => {
                            switch (s.selectedArtistsCounter) {
                                case 0:
                                    return r({ id: 'wizard.button-tune' });
                                case 1:
                                    return r({ id: 'wizard.button-little-more' });
                                case 2:
                                    return r({ id: 'wizard.button-one-more' });
                                default:
                                    return r({ id: 'wizard.button-done' });
                            }
                        }, [s.selectedArtistsCounter, r]),
                        G = (0, i.useMemo)(
                            () =>
                                (0, n.jsx)(y.wI, {
                                    className: U().tabCarousel,
                                    ...D,
                                    onTabChange: z,
                                    isShimmerVisible: s.loadingState === A.G.PENDING,
                                    shimmer: (0, n.jsx)(y.zr, { isActive: !0, className: U().tabCarousel, shimmerClassName: U().tabShimmer, count: p ? 2 : 3 }),
                                    children: s.genres.map((e, t) =>
                                        (0, n.jsx)(
                                            L.o,
                                            {
                                                className: (0, o.$)(U().filter, { [U().filter_selected]: t === D.value }),
                                                titleClassName: U().tabTitle,
                                                title: e.title,
                                                value: t,
                                            },
                                            t,
                                        ),
                                    ),
                                }),
                            [s.genres, D, z, s.loadingState, p],
                        ),
                        H = (0, i.useCallback)(() => {
                            s.getArtists(60);
                        }, [s]);
                    (0, i.useEffect)(() => {
                        s.filter && H();
                    }, [s.filter, H]);
                    let K = (0, i.useCallback)(async () => {
                        (await s.getGenres(), H());
                    }, [s, H]);
                    ((0, i.useEffect)(() => {
                        s.modal.isOpened && K();
                    }, [s, s.modal.isOpened, K]),
                        (0, i.useEffect)(() => {
                            s.loadingState === A.G.REJECT &&
                                (s.modal.close(), M((0, n.jsx)(S.h, { error: r({ id: 'error-messages.error-load-wizard' }) }), { containerId: h.u.ERROR }));
                        }, [s, s.getGenres, s.loadingState, r, M]));
                    let V = (0, i.useMemo)(
                            () =>
                                (0, n.jsx)(f.DZ, {
                                    className: U().title,
                                    weight: 'bold',
                                    variant: 'h1',
                                    size: 'l',
                                    'data-test-id': c.e8.wizard.WIZARD_MODAL_TITLE,
                                    children: (0, n.jsx)(l.A, { id: 'wizard.modal-title' }),
                                }),
                            [],
                        ),
                        Y = (0, i.useCallback)(async () => {
                            (s.selectedArtistsCounter < 3 ? s.getArtists() : (await s.finish()) === b.F.OK && (await j.getSettings(), await (null == t ? void 0 : t())),
                                s.modal.close());
                        }, [t, j, s]);
                    return (
                        (0, i.useEffect)(
                            () => (
                                null == w ||
                                    w.addShortcutsListener(v.M.MAIN, C.l.CLOSE, () => {
                                        s.modal.isOpened && Y();
                                    }),
                                () => {
                                    null == w || w.removeShortcutsListener(v.M.MAIN, C.l.CLOSE);
                                }
                            ),
                            [Y, s.modal.isOpened, w],
                        ),
                        (0, n.jsxs)(_.a, {
                            className: (0, o.$)(U().root, { [U().root_withCustomControls]: T || I }),
                            headerClassName: U().modalHeader,
                            contentClassName: U().modalContent,
                            open: s.modal.isOpened,
                            onOpenChange: s.modal.onOpenChange,
                            onClose: Y,
                            size: 'fullscreen',
                            placement: 'center',
                            labelClose: r({ id: 'interface-actions.close' }),
                            closeButtonDataTestId: c.e8.wizard.WIZARD_MODAL_CLOSE_BUTTON,
                            'data-test-id': c.e8.wizard.WIZARD_MODAL,
                            header: p && V,
                            escapeKey: !1,
                            children: [
                                (0, n.jsxs)('div', {
                                    className: U().wrapper,
                                    children: [
                                        !p && V,
                                        (0, n.jsx)(f.HL, {
                                            className: U().text,
                                            variant: 'div',
                                            size: 'l',
                                            weight: 'normal',
                                            'data-test-id': c.e8.wizard.WIZARD_MODAL_TEXT,
                                            children: (0, n.jsx)(l.A, { id: 'wizard.modal-text' }),
                                        }),
                                        (0, n.jsx)(u.$, {
                                            className: U().button,
                                            size: p ? 'm' : 'l',
                                            iconPosition: 'right',
                                            radius: 'xxxl',
                                            color: 'primary',
                                            onClick: Y,
                                            disabled: s.selectedArtistsCounter < 3,
                                            'data-test-id': c.e8.wizard.WIZARD_MODAL_BUTTON,
                                            children: (0, n.jsx)(f.HL, { variant: 'div', size: 'm', weight: 'medium', children: W }),
                                        }),
                                    ],
                                }),
                                (0, n.jsxs)('div', {
                                    className: U().mainContainer,
                                    children: [
                                        (0, n.jsx)(O.F, { className: U().carousel, carouselElement: G, scrollPadding: F }),
                                        (0, n.jsx)(R.$, {
                                            withFooter: !1,
                                            className: (0, o.$)(U().scrollContainer, U().important),
                                            itemContentCallback: (e) => {
                                                let t = s.artistsByGenre[e];
                                                if (!t) {
                                                    let e = r({ id: 'loading-messages.entity-is-loading' }, { entityName: r({ id: 'entity-names.artist' }) });
                                                    return (0, n.jsx)(N.V, { 'aria-label': e, round: !0, centered: !0 });
                                                }
                                                return (0, n.jsx)(B, { artist: t }, t.id);
                                            },
                                            data: s.artistsByGenre,
                                            endReached: H,
                                            listClassName: U().content,
                                            itemClassName: U().item,
                                            pageSize: 60,
                                            handleRef: k,
                                            'data-test-id': c.e8.wizard.WIZARD_MODAL_ARTISTS_GRID,
                                        }),
                                    ],
                                }),
                            ],
                        })
                    );
                });
        },
        30915: (e, t, r) => {
            'use strict';
            r.d(t, { u: () => s });
            var n = r(55178),
                o = r(20599);
            function s() {
                return (0, n.useContext)(o.E);
            }
        },
        31010: (e, t, r) => {
            'use strict';
            r.d(t, { H: () => o, P: () => s });
            var n = r(55178);
            let o = (0, n.createContext)(null),
                s = () => (0, n.useContext)(o);
        },
        31658: (e) => {
            e.exports = { root: 'Settings_root__FVVrn', item: 'Settings_item__Ksa9h' };
        },
        32468: (e, t, r) => {
            'use strict';
            r.d(t, { A: () => i });
            var n = r(32290),
                o = r(77088),
                s = r.n(o);
            let i = (e) => {
                let { children: t } = e;
                return (0, n.jsx)('footer', { className: s().empty });
            };
        },
        37240: (e, t, r) => {
            'use strict';
            r.d(t, { $: () => s });
            var n = r(55178),
                o = r(1176);
            function s() {
                return (0, n.useContext)(o.r);
            }
        },
        37528: (e) => {
            e.exports = {
                icon: 'SettingsListButtonItem_icon__WULZ1',
                root: 'SettingsListButtonItem_root__3dtV2',
                important: 'SettingsListButtonItem_important__AcEon',
                contentContainer: 'SettingsListButtonItem_contentContainer__jqoKg',
                content: 'SettingsListButtonItem_content___Opuo',
                title: 'SettingsListButtonItem_title__npCza',
                description: 'SettingsListButtonItem_description__g8_Ba',
            };
        },
        37892: (e) => {
            e.exports = {
                root: 'SettingsPage_root__BB4lC',
                scrollableContainer: 'SettingsPage_scrollableContainer__qD32i',
                container: 'SettingsPage_container__bIwea',
                content: 'SettingsPage_content__cR6Ra',
                footer: 'SettingsPage_footer__QIqyx',
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
        40199: (e, t, r) => {
            'use strict';
            (Object.defineProperty(t, '__esModule', { value: !0 }),
                Object.defineProperty(t, 'workAsyncStorage', {
                    enumerable: !0,
                    get: function () {
                        return n.workAsyncStorageInstance;
                    },
                }));
            let n = r(89957);
        },
        42406: (e, t, r) => {
            'use strict';
            r.d(t, { BL: () => d, Gv: () => l, L5: () => c });
            var n,
                o = r(55178),
                s = {
                    597: (e, t, r) => {
                        (Object.defineProperty(t, '__esModule', { value: !0 }),
                            (t.useIntersectionObserver = t.createIntersectionObserver = t.getElementNameByDataAttribute = t.isInViewportNow = t.defaultOptions = void 0));
                        let n = r(810),
                            { innerWidth: o = 0, innerHeight: s = 0 } = window;
                        function i(e) {
                            let { top: t, right: r, bottom: n, left: i } = e.getBoundingClientRect();
                            return ((t >= 0 && t <= s) || (n >= 0 && n <= s)) && ((i >= 0 && i <= o) || (r >= 0 && r <= o));
                        }
                        function a(e) {
                            var t, r;
                            let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 'data-intersection-property-id';
                            return null != (r = null == e || null == (t = e.getAttribute) ? void 0 : t.call(e, n)) ? r : e.attributes[0];
                        }
                        function l(e, t) {
                            let r = new IntersectionObserver((t) => {
                                t.forEach((t) => {
                                    e(t, r);
                                });
                            }, t);
                            return r;
                        }
                        ((t.defaultOptions = { threshold: 0, preflightCheck: !0 }),
                            (t.isInViewportNow = i),
                            (t.getElementNameByDataAttribute = a),
                            (t.createIntersectionObserver = l),
                            (t.useIntersectionObserver = function (e, r, o) {
                                let [{ freezeOnceVisible: s, preflightCheck: c, ...d }, u = !1] =
                                        'boolean' == typeof r || void 0 === r ? [t.defaultOptions, r] : [{ ...t.defaultOptions, ...r }, o],
                                    [_, m] = (0, n.useState)({}),
                                    f = (0, n.useRef)(new Set()),
                                    p = (0, n.useMemo)(
                                        () =>
                                            u
                                                ? null
                                                : l((e) => {
                                                      let t = a(e.target);
                                                      if (t && p) {
                                                          if (f.current.has(t)) return;
                                                          (m((r) => ({ ...r, [t]: { isIntersecting: e.isIntersecting } })),
                                                              s && e.isIntersecting && (f.current.add(t), p.unobserve(e.target)));
                                                      }
                                                  }, d),
                                        [u],
                                    );
                                return (
                                    (0, n.useLayoutEffect)(
                                        () => (
                                            p &&
                                                !u &&
                                                e.forEach((e) => {
                                                    if (e.current) {
                                                        let t = !1;
                                                        if (c && (t = i(e.current))) {
                                                            let t = a(e.current);
                                                            m((e) => ({ ...e, [t]: { isIntersecting: !0 } }));
                                                        }
                                                        t || p.observe(e.current);
                                                    }
                                                }),
                                            () => {
                                                p && p.disconnect();
                                            }
                                        ),
                                        [u, p, e.length],
                                    ),
                                    _
                                );
                            }));
                    },
                    810: (e) => {
                        e.exports = n || (n = r.t(o, 2));
                    },
                },
                i = {},
                a = (function e(t) {
                    var r = i[t];
                    if (void 0 !== r) return r.exports;
                    var n = (i[t] = { exports: {} });
                    return (s[t](n, n.exports, e), n.exports);
                })(597);
            a.__esModule;
            var l = a.createIntersectionObserver;
            a.defaultOptions;
            var c = a.getElementNameByDataAttribute;
            a.isInViewportNow;
            var d = a.useIntersectionObserver;
        },
        42822: (e) => {
            e.exports = {
                root: 'CustomPlayerThumbSelector_root__DQT1f',
                title: 'CustomPlayerThumbSelector_title__9Eai2',
                thumbsContainer: 'CustomPlayerThumbSelector_thumbsContainer__ywFZ1',
                button: 'CustomPlayerThumbSelector_button__JXiFX',
                button_selected: 'CustomPlayerThumbSelector_button_selected__5_mwm',
                thumbContent: 'CustomPlayerThumbSelector_thumbContent__lAM5O',
                thumbContent_custom: 'CustomPlayerThumbSelector_thumbContent_custom__ZcoKb',
                thumbLine: 'CustomPlayerThumbSelector_thumbLine__Iv4PY',
                thumbDefault: 'CustomPlayerThumbSelector_thumbDefault__3RlO1',
                thumbName: 'CustomPlayerThumbSelector_thumbName__SCX2s',
            };
        },
        45257: (e, t, r) => {
            'use strict';
            r.d(t, { $: () => h });
            var n = r(32290),
                o = r(63618),
                s = r(8055),
                i = r(55178);
            let a = (e) => {
                    let { style: t, forwardRef: r, context: o, ...s } = e,
                        i = (null == o ? void 0 : o.listAriaLabel) || void 0,
                        a = (null == o ? void 0 : o.listRole) || 'region';
                    return (0, n.jsx)('div', { 'aria-labelledby': 'virtual-grid-header', role: a, 'aria-label': i, style: { ...t }, ref: r, ...s });
                },
                l = (0, i.forwardRef)((e, t) => (0, n.jsx)(a, { forwardRef: t, ...e }));
            var c = r(39684),
                d = r.n(c);
            let u = (e) => {
                    let { style: t, forwardRef: r, withFooter: s, withHeader: i, withForceScroll: a, ...l } = e;
                    return (0, n.jsx)('div', {
                        className: (0, o.$)(d().scroller, { [d().scroller_withFooter]: s, [d().scroller_withHeader]: i, [d().scroller_withForceScroll]: a }),
                        style: { ...t },
                        ref: r,
                        ...l,
                        tabIndex: -1,
                    });
                },
                _ = (0, i.forwardRef)((e, t) => (0, n.jsx)(u, { forwardRef: t, ...e }));
            var m = r(62060),
                f = r(31417);
            let p = (e) => {
                    let {
                            pageSize: t,
                            onPageHandler: r,
                            onRangeHandler: o,
                            debounceDurationInMs: s = 100,
                            totalCount: a = 0,
                            shouldTriggerRangeChangedOn: l = [],
                            endReached: c,
                            virtuosoRef: d,
                            ...u
                        } = e,
                        [_, p] = (0, i.useState)(null),
                        h = (0, i.useMemo)(
                            () =>
                                (0, m.A)((e) => {
                                    if ((null == o || o(e), l.length > 0 && p(e), t && r)) {
                                        let n = Math.floor(e.endIndex / t) + 1,
                                            o = Math.floor(e.startIndex / t);
                                        for (let e = o; e < n; e++) r(e);
                                    }
                                }, s),
                            [s, o, t, r, l],
                        );
                    (0, i.useEffect)(() => {
                        l.length > 0 && _ && h(_);
                    }, l);
                    let x = (0, i.useMemo)(() => {
                        if (c)
                            return (0, m.A)((e) => {
                                c(e);
                            }, s);
                    }, [c, s]);
                    return (0, n.jsx)(f.sN, { ref: d, rangeChanged: h, totalCount: a, endReached: x, ...u });
                },
                h = (e) => {
                    let {
                            className: t,
                            customComponents: r,
                            onGetDataByPage: a,
                            onGetDataByRange: c,
                            itemClassName: u,
                            itemContentCallback: m,
                            listClassName: f,
                            overscan: h = 700,
                            pageSize: x = 20,
                            totalCount: C,
                            totalRequests: v,
                            debounceDurationInMs: E,
                            initialItemCount: g,
                            minInitialItemCount: b = 20,
                            handleRef: A,
                            alwaysShowScrollbar: S = !1,
                            testId: O,
                            isMobileLayout: N = !1,
                            shouldTriggerRangeChangedOn: L,
                            ...y
                        } = e,
                        [R, T] = (0, i.useState)(!1),
                        I = (0, i.useMemo)(
                            () =>
                                (0, s.A)((e) => {
                                    T(e);
                                }, 100),
                            [],
                        ),
                        j = (0, i.useMemo)(() => {
                            var e, t;
                            return N
                                ? {
                                      Scroller: _,
                                      List: null != (e = null == r ? void 0 : r.List) ? e : l,
                                      Item: null == r ? void 0 : r.Item,
                                      ScrollSeekPlaceholder: null == r ? void 0 : r.ScrollSeekPlaceholder,
                                  }
                                : {
                                      Scroller: _,
                                      List: null != (t = null == r ? void 0 : r.List) ? t : l,
                                      Item: null == r ? void 0 : r.Item,
                                      Header: null == r ? void 0 : r.Header,
                                      Footer: null == r ? void 0 : r.Footer,
                                      ScrollSeekPlaceholder: null == r ? void 0 : r.ScrollSeekPlaceholder,
                                  };
                        }, [r, v, N]),
                        M = g ? Math.min(g, b) : void 0;
                    return (0, n.jsxs)('div', {
                        className: (0, o.$)(d().root, { [d().root_scrolling]: R || S, [d().root_notScrolling]: !R && !S }, t),
                        'data-test-id': O,
                        children: [
                            N && (null == r ? void 0 : r.Header) && r.Header(),
                            (0, n.jsx)(p, {
                                overscan: h,
                                components: j,
                                listClassName: f,
                                itemClassName: u,
                                isScrolling: I,
                                itemContent: m,
                                scrollerRef: A,
                                totalCount: C,
                                pageSize: x,
                                onPageHandler: a,
                                onRangeHandler: c,
                                debounceDurationInMs: E,
                                initialItemCount: M,
                                shouldTriggerRangeChangedOn: L,
                                ...y,
                            }),
                            N && (null == r ? void 0 : r.Footer) && r.Footer(),
                        ],
                    });
                };
        },
        45807: (e, t, r) => {
            'use strict';
            r.d(t, { Y: () => d });
            var n,
                o = r(95716),
                s = r(55178),
                i = {
                    352: (e) => {
                        e.exports = o;
                    },
                    810: (e) => {
                        e.exports = n || (n = r.t(s, 2));
                    },
                },
                a = {};
            function l(e) {
                var t = a[e];
                if (void 0 !== t) return t.exports;
                var r = (a[e] = { exports: {} });
                return (i[e](r, r.exports, l), r.exports);
            }
            var c = {};
            ((() => {
                (Object.defineProperty(c, 'X', { value: !0 }), (c.l = void 0));
                let e = l(810),
                    t = l(352);
                c.l = (r) => {
                    let [n, o] = (0, e.useState)(!0),
                        [s, i] = (0, e.useState)(!0),
                        a = () => {
                            let e = null == r ? void 0 : r.current;
                            e && (o(0 === e.scrollLeft), i(e.scrollWidth - e.scrollLeft <= e.offsetWidth + 10));
                        };
                    ((0, e.useEffect)(() => {
                        a();
                    }, [r, a]),
                        (0, e.useEffect)(() => {
                            let e = null == r ? void 0 : r.current;
                            return (
                                null == e || e.addEventListener('scroll', a),
                                window.addEventListener('resize', a),
                                () => {
                                    (null == e || e.removeEventListener('scroll', a), window.removeEventListener('resize', a));
                                }
                            );
                        }, [r, a]));
                    let l = (0, e.useMemo)(
                        () =>
                            (0, t.throttle)(
                                () => {
                                    r && r.current && (r.current.scrollLeft += r.current.offsetWidth / 2);
                                },
                                420,
                                { trailing: !1 },
                            ),
                        [r],
                    );
                    return {
                        swipeBackward: (0, e.useMemo)(
                            () =>
                                (0, t.throttle)(
                                    () => {
                                        r && r.current && (r.current.scrollLeft -= r.current.offsetWidth / 2);
                                    },
                                    420,
                                    { trailing: !1 },
                                ),
                            [r],
                        ),
                        swipeForward: l,
                        shouldBackwardButtonBeDisabled: n,
                        shouldForwardButtonBeDisabled: s,
                        shouldHideControls: n && s,
                    };
                };
            })(),
                c.X);
            var d = c.l;
        },
        46456: (e, t, r) => {
            'use strict';
            function n(e) {
                let { moduleIds: t } = e;
                return null;
            }
            (Object.defineProperty(t, '__esModule', { value: !0 }),
                Object.defineProperty(t, 'PreloadChunks', {
                    enumerable: !0,
                    get: function () {
                        return n;
                    },
                }),
                r(32290),
                r(51767),
                r(40199),
                r(15406));
        },
        47498: (e, t, r) => {
            'use strict';
            r.d(t, { R: () => s });
            var n = r(55178),
                o = r(9848);
            function s() {
                return (0, n.useContext)(o.F);
            }
        },
        48922: (e, t, r) => {
            'use strict';
            r.d(t, { _Q: () => n, fD: () => s, qG: () => i, xK: () => o });
            var n = (function (e) {
                return (
                    (e.ALBUM = 'album'),
                    (e.PLAYLIST = 'playlist'),
                    (e.ARTIST = 'artist'),
                    (e.ARTIST_TRACKS = 'artist_tracks'),
                    (e.ARTIST_SIMILAR = 'artist_similar'),
                    (e.ARTIST_ALBUMS = 'artist_albums'),
                    (e.ARTIST_DISCOGRAPHY = 'artist_discography'),
                    (e.ARTIST_COMPILATIONS = 'artist_compilations'),
                    (e.ARTIST_CONCERTS = 'artist_concerts_screen'),
                    (e.ARTIST_CLIPS = 'artist_clips'),
                    (e.CHART = 'chart'),
                    (e.CHART_PODCASTS = 'chart_podcasts'),
                    (e.CHART_PODCASTS_CATEGORY = 'chart_podcasts_category'),
                    (e.HOME = 'home'),
                    (e.SEARCH = 'search'),
                    (e.SIDEBAR = 'sidebar'),
                    (e.OWN_COLLECTION = 'own_collection'),
                    (e.OWN_ALBUMS = 'own_albums'),
                    (e.OWN_DISLIKES = 'own_dislikes'),
                    (e.OWN_PODCASTS = 'own_podcasts'),
                    (e.OWN_ARTISTS = 'own_artists'),
                    (e.OWN_PLAYLISTS = 'own_playlists'),
                    (e.OWN_TRACKS = 'own_tracks'),
                    (e.OWN_CLIPS = 'own_clips'),
                    (e.RADIO = 'radio'),
                    (e.GENRE = 'genre'),
                    (e.GENRE_ALBUMS = 'genre_albums'),
                    (e.GENRE_ARTISTS = 'genre_artists'),
                    (e.GENRE_PLAYLISTS = 'genre_playlists'),
                    (e.TAG = 'tag'),
                    (e.POST = 'post'),
                    (e.HISTORY = 'history'),
                    (e.FAMILIAR_YOU = 'familiar_you'),
                    (e.PODCAST = 'podcast'),
                    (e.AUDIOBOOK = 'audiobook'),
                    (e.NON_MUSIC = 'non_music'),
                    (e.NON_MUSIC_CATEGORY_PLAYLISTS = 'non_music_category_playlists'),
                    (e.NON_MUSIC_ALBUMS = 'non_music_albums'),
                    (e.LANDING = 'landing'),
                    (e.ENTITIES = 'entities'),
                    (e.TRAILER = 'trailer'),
                    (e.TRACK = 'track'),
                    (e.TRACK_SCREEN = 'track_screen'),
                    (e.PLAYER = 'player'),
                    (e.KIDS = 'kids'),
                    (e.KIDS_EDITORIAL_PLAYLISTS = 'kids_editorial_playlists'),
                    (e.KIDS_EDITORIAL_ALBUMS = 'kids_editorial_albums'),
                    (e.DOWNLOADS_TRACKS = 'downloads_tracks'),
                    (e.TRAILER_OF_THE_YEAR = 'trailer_of_the_year'),
                    (e.COLLECTION_KIDS = 'collection_kids'),
                    (e.COLLECTION_KIDS_ALBUMS = 'collection_kids_albums'),
                    (e.COLLECTION_KIDS_PLAYLISTS = 'collection_kids_playlists'),
                    (e.COLLECTION_KIDS_TRACKS = 'collection_kids_tracks'),
                    (e.COLLECTION_VIBE_ROOMS = 'multivibe_screen'),
                    (e.VIDEO_PLAYER = 'video_player'),
                    (e.LABEL = 'label'),
                    (e.LABEL_ALBUMS = 'label_albums'),
                    (e.LABEL_ARTISTS = 'label_artists'),
                    (e.PAYWALL = 'paywall'),
                    (e.CONCERTS = 'concerts'),
                    (e.CONCERT_LOCATION_SELECTOR = 'concert_location_selector'),
                    (e.PROMOLANDING_ALBUM = 'promolanding_album'),
                    (e.CONCERT = 'concert_screen'),
                    (e.PAGE_NOT_FOUND_SCREEN = 'page_not_found_screen'),
                    (e.SLIDES_SCREEN = 'slides_screen'),
                    (e.WAVE_LANDING_SCREEN = 'wave_landing_screen'),
                    (e.FACT_SCREEN = 'fact_screen'),
                    (e.LUMEN_AWAKENING_SCREEN = 'lumen_awakening_screen'),
                    (e.MULTIVIBE_SENDING_INVITATION_SCREEN = 'multivibe_sending_invitation_screen'),
                    (e.MULTIVIBE_ACTION_SCREEN = 'multivibe_action_screen'),
                    (e.MULTIVIBE_LIMIT_SCREEN = 'multivibe_limit_screen'),
                    (e.MULTIVIBE_UNIFIED_SCREEN = 'multivibe_unified_screen'),
                    e
                );
            })({});
            let o = [
                    'home',
                    'own_collection',
                    'landing',
                    'own_artists',
                    'artist',
                    'artist_concerts_screen',
                    'non_music',
                    'playlist',
                    'search',
                    'video_player',
                    'label',
                    'concerts',
                    'concert_screen',
                    'concert_location_selector',
                    'album',
                    'playlist',
                    'slides_screen',
                    'promolanding_album',
                    'wave_landing_screen',
                    'fact_screen',
                    'lumen_awakening_screen',
                    'multivibe_screen',
                    'multivibe_sending_invitation_screen',
                    'multivibe_action_screen',
                    'multivibe_unified_screen',
                ],
                s = [
                    'home',
                    'landing',
                    'non_music',
                    'own_collection',
                    'own_artists',
                    'search',
                    'artist',
                    'concerts',
                    'concert_screen',
                    'concert_location_selector',
                    'album',
                    'playlist',
                    'slides_screen',
                    'promolanding_album',
                    'wave_landing_screen',
                    'fact_screen',
                    'lumen_awakening_screen',
                    'multivibe_screen',
                    'multivibe_sending_invitation_screen',
                    'multivibe_action_screen',
                    'multivibe_limit_screen',
                    'multivibe_unified_screen',
                ],
                i = ['home', 'landing', 'non_music', 'own_collection', 'search', 'artist', 'concerts', 'concert_screen', 'album', 'playlist'];
        },
        49522: (e, t, r) => {
            'use strict';
            r.d(t, { X: () => _ });
            var n = r(32290),
                o = r(63618),
                s = r(55178),
                i = r(21732),
                a = r(45807),
                l = r(63423),
                c = r(82586),
                d = r(60178),
                u = r.n(d);
            let _ = (e) => {
                let {
                        carouselRef: t,
                        backwardControlClassName: r,
                        forwardControlClassName: d,
                        className: _,
                        withSecondaryColor: m,
                        buttonSize: f = 'xxxs',
                        buttonVariant: p = 'outline',
                    } = e,
                    { swipeBackward: h, swipeForward: x, shouldBackwardButtonBeDisabled: C, shouldForwardButtonBeDisabled: v, shouldHideControls: E } = (0, a.Y)(t),
                    g = (0, s.useCallback)(
                        (e) => {
                            (h(), e.stopPropagation());
                        },
                        [h],
                    ),
                    b = (0, s.useCallback)(
                        (e) => {
                            (x(), e.stopPropagation());
                        },
                        [x],
                    );
                return (0, n.jsxs)('div', {
                    className: (0, o.$)(u().root, _),
                    'data-test-id': i.S7.CAROUSEL_CONTROLS,
                    children: [
                        (0, n.jsx)(l.$, {
                            tabIndex: -1,
                            'aria-hidden': !0,
                            className: (0, o.$)(u().control, r, { [u().control_hidden]: E, [u().control_withSecondaryColor]: m }),
                            onClick: g,
                            size: f,
                            radius: 'round',
                            variant: p,
                            withRipple: !1,
                            icon: (0, n.jsx)(c.I, { size: 'xxs', variant: 'arrowLeft' }),
                            disabled: C,
                            'data-test-id': i.S7.CAROUSEL_CONTROLS_BACKWARD_BUTTON,
                        }),
                        (0, n.jsx)(l.$, {
                            tabIndex: -1,
                            'aria-hidden': !0,
                            className: (0, o.$)(u().control, d, { [u().control_hidden]: E, [u().control_withSecondaryColor]: m }),
                            onClick: b,
                            size: f,
                            radius: 'round',
                            variant: p,
                            withRipple: !1,
                            icon: (0, n.jsx)(c.I, { size: 'xxs', variant: 'arrowRight' }),
                            disabled: v,
                            'data-test-id': i.S7.CAROUSEL_CONTROLS_FORWARD_BUTTON,
                        }),
                    ],
                });
            };
        },
        49700: (e) => {
            e.exports = {
                root: 'ShortcutsModal_root__ro7m4',
                modalHeader: 'ShortcutsModal_modalHeader__IYJ9m',
                modalContent: 'ShortcutsModal_modalContent__SCpYX',
                list: 'ShortcutsModal_list__eS4ox',
                text: 'ShortcutsModal_text__5JJ0j',
                content: 'ShortcutsModal_content__Li9Ip',
                buttons: 'ShortcutsModal_buttons__o_xlC',
                button: 'ShortcutsModal_button__cTIee',
            };
        },
        51012: (e, t, r) => {
            'use strict';
            r.d(t, { b: () => s });
            var n = r(55178),
                o = r(3064);
            function s() {
                return (0, n.useContext)(o.D);
            }
        },
        52898: (e) => {
            e.exports = {
                root: 'AboutAppModal_root__yBvgU',
                modalHeader: 'AboutAppModal_modalHeader__q1NPj',
                modalContent: 'AboutAppModal_modalContent__SHO_X',
                list: 'AboutAppModal_list__HfB82',
                link: 'AboutAppModal_link__i3P3P',
                explicitText: 'AboutAppModal_explicitText__29HUD',
                companyText: 'AboutAppModal_companyText__yroW0',
                versionText: 'AboutAppModal_versionText__iFb8L',
            };
        },
        53022: (e, t, r) => {
            'use strict';
            r.d(t, { z: () => s });
            var n = r(55178),
                o = r(29098);
            let s = () => (0, n.useContext)(o.P);
        },
        53453: (e, t, r) => {
            'use strict';
            r.d(t, { w: () => n });
            var n = (function (e) {
                return ((e.DISABLED = 'DISABLED'), (e.ENABLED = 'ENABLED'), e);
            })({});
        },
        54667: (e, t, r) => {
            'use strict';
            r.d(t, { P: () => n, u: () => o });
            var n = (function (e) {
                    return ((e[(e.Mobile = 768)] = 'Mobile'), (e[(e.Desktop = 1440)] = 'Desktop'), e);
                })({}),
                o = (function (e) {
                    return ((e.Mobile = 'Mobile'), (e.Desktop = 'Desktop'), e);
                })({});
        },
        55332: (e, t, r) => {
            'use strict';
            r.d(t, { l: () => n });
            var n = (function (e) {
                return (
                    (e.TOGGLE_PLAY = 'TOGGLE_PLAY'),
                    (e.TOGGLE_MUTE = 'TOGGLE_MUTE'),
                    (e.INCREASE_VOLUME = 'INCREASE_VOLUME'),
                    (e.DECREASE_VOLUME = 'DECREASE_VOLUME'),
                    (e.LIKE = 'LIKE'),
                    (e.DISLIKE = 'DISLIKE'),
                    (e.MOVE_FORWARD = 'MOVE_FORWARD'),
                    (e.MOVE_BACKWARD = 'MOVE_BACKWARD'),
                    (e.SLIDE_FORWARD = 'SLIDE_FORWARD'),
                    (e.SLIDE_BACKWARD = 'SLIDE_BACKWARD'),
                    (e.TOGGLE_REPEAT = 'TOGGLE_REPEAT'),
                    (e.TOGGLE_SHUFFLE = 'TOGGLE_SHUFFLE'),
                    (e.TOGGLE_FULLSCREEN_PLAYER = 'TOGGLE_FULLSCREEN_PLAYER'),
                    (e.CLOSE = 'CLOSE'),
                    e
                );
            })({});
        },
        57249: (e, t, r) => {
            'use strict';
            e.exports = r.p + 'static/media/dotlottie-player.98f80c6ff3eca5ba.wasm';
        },
        58008: (e, t, r) => {
            'use strict';
            r.d(t, { F: () => n });
            var n = (function (e) {
                return ((e.OK = 'ok'), (e.ERROR = 'error'), e);
            })({});
        },
        60178: (e) => {
            e.exports = {
                root: 'CarouselControls_root__E_hwc',
                control: 'CarouselControls_control__L8t4i',
                control_hidden: 'CarouselControls_control_hidden__pLrn6',
                control_withSecondaryColor: 'CarouselControls_control_withSecondaryColor__KqSEN',
            };
        },
        61258: (e, t, r) => {
            'use strict';
            r.d(t, { N: () => m });
            var n = r(32290),
                o = r(59611),
                s = r.n(o),
                i = r(55178),
                a = r(91027),
                l = r(63887),
                c = r(74653),
                d = r(68243);
            let u = (e) => {
                    let [t, r] = (0, i.useState)(!1),
                        o = (0, a.c)(() => {
                            r(!0);
                        });
                    return (0, n.jsx)(s(), { prefetch: t, ...e, onMouseEnter: o });
                },
                _ = (e) => {
                    let { forwardedRef: t, href: r, component: o, ...a } = e,
                        { isPrefetchDisabled: _, isPrefetchOnHover: m } = (0, i.useContext)(c.j),
                        { href: f, target: p, rel: h } = (0, d.u)(null != r ? r : ''),
                        x = (0, i.isValidElement)(o)
                            ? o
                            : (function (e, t, r) {
                                  return e ? (t ? (0, n.jsx)(s(), { prefetch: !1 }) : r ? (0, n.jsx)(u, { href: e }) : (0, n.jsx)(s(), {})) : (0, n.jsx)('a', {});
                              })(r, _, m);
                    return (0, n.jsx)(l.N, { ref: t, component: x, href: r ? f : void 0, target: p, rel: h, ...a });
                },
                m = (0, i.forwardRef)((e, t) => (0, n.jsx)(_, { ...e, forwardedRef: t }));
        },
        61954: (e) => {
            e.exports = {
                control: 'CarouselWithArrows_control__3uyYB',
                list: 'CarouselWithArrows_list__2f6lz',
                buttons: 'CarouselWithArrows_buttons__fW_Dp',
                root: 'CarouselWithArrows_root__RreSk',
                root_arrowLeft_hidden: 'CarouselWithArrows_root_arrowLeft_hidden__WmoMn',
                root_arrowRight_hidden: 'CarouselWithArrows_root_arrowRight_hidden__sQTGA',
                root_arrow_hidden: 'CarouselWithArrows_root_arrow_hidden__sltkz',
                control_left: 'CarouselWithArrows_control_left__GrTcO',
                control_right: 'CarouselWithArrows_control_right__Si_BV',
                root_carouselBetweenArrows: 'CarouselWithArrows_root_carouselBetweenArrows___aN_d',
                wrapper: 'CarouselWithArrows_wrapper__Kezgl',
                carousel: 'CarouselWithArrows_carousel__gm5sM',
                important: 'CarouselWithArrows_important__ZFlvq',
            };
        },
        63397: (e, t, r) => {
            'use strict';
            function n(e) {
                let { reason: t, children: r } = e;
                return r;
            }
            (Object.defineProperty(t, '__esModule', { value: !0 }),
                Object.defineProperty(t, 'BailoutToCSR', {
                    enumerable: !0,
                    get: function () {
                        return n;
                    },
                }),
                r(82105));
        },
        63887: (e, t, r) => {
            'use strict';
            r.d(t, { N: () => c });
            var n,
                o = r(55178),
                s = {
                    5881: (e, t, r) => {
                        function n() {
                            for (var e, t, r = 0, n = ''; r < arguments.length;)
                                (e = arguments[r++]) &&
                                    (t = (function e(t) {
                                        var r,
                                            n,
                                            o = '';
                                        if ('string' == typeof t || 'number' == typeof t) o += t;
                                        else if ('object' == typeof t)
                                            if (Array.isArray(t)) for (r = 0; r < t.length; r++) t[r] && (n = e(t[r])) && (o && (o += ' '), (o += n));
                                            else for (r in t) t[r] && (o && (o += ' '), (o += r));
                                        return o;
                                    })(e)) &&
                                    (n && (n += ' '), (n += t));
                            return n;
                        }
                        (r.r(t), r.d(t, { clsx: () => n, default: () => o }));
                        let o = n;
                    },
                    7354: (e, t, r) => {
                        (r.r(t), r.d(t, { default: () => n }));
                        let n = {
                            root: 'buOTZq_TKQOVyjMLrXvB',
                            block: 'BSPmaubc8UL2KHOMLV4A',
                            iconContainer: 'VUb2BxfgkGQhG1RDQGwF',
                            iconOnly: 'WhDaA5aAfZSjxalYb_Ex',
                            flexIcon: 'vIGeuYz4Cf60Cnuq3WKA',
                            icon_position_left: 'GoUQfg7mJlSkcbAZ28Rj',
                            icon_position_right: 'TXa2RKc_Hf0QPdmUDMwI',
                        };
                    },
                    9097: (e, t) => {
                        var r = Symbol.for('react.transitional.element');
                        function n(e, t, n) {
                            var o = null;
                            if ((void 0 !== n && (o = '' + n), void 0 !== t.key && (o = '' + t.key), 'key' in t))
                                for (var s in ((n = {}), t)) 'key' !== s && (n[s] = t[s]);
                            else n = t;
                            return { $$typeof: r, type: e, key: o, ref: void 0 !== (t = n.ref) ? t : null, props: n };
                        }
                        ((t.Fragment = Symbol.for('react.fragment')), (t.jsx = n), (t.jsxs = n));
                    },
                    4377: (e, t, r) => {
                        e.exports = r(9097);
                    },
                    3616: function (e, t, r) {
                        var n =
                            (this && this.__importDefault) ||
                            function (e) {
                                return e && e.__esModule ? e : { default: e };
                            };
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.Link = void 0));
                        let o = r(4377),
                            s = r(810),
                            i = r(5881),
                            a = n(r(7354)),
                            l = (e) => {
                                let {
                                        component: t = (0, o.jsx)('a', {}),
                                        block: r,
                                        target: n,
                                        rel: l,
                                        href: c,
                                        forwardRef: d,
                                        iconPosition: u = 'left',
                                        flexIcon: _,
                                        icon: m,
                                        className: f,
                                        children: p,
                                        textClassName: h = '',
                                        containerClassName: x,
                                        ...C
                                    } = e,
                                    v = (0, s.useId)(),
                                    E = !s.Children.count(p),
                                    g = 'left' === u,
                                    b = null;
                                if (void 0 !== m) {
                                    var A;
                                    b = (0, s.cloneElement)(m, {
                                        className: (0, i.clsx)(
                                            a.default.icon,
                                            { [a.default['icon_position_'.concat(u)]]: !E && u },
                                            null == (A = m.props) ? void 0 : A.className,
                                        ),
                                        key: v,
                                    });
                                }
                                let S = (0, s.useMemo)(
                                    () =>
                                        m
                                            ? (0, o.jsxs)('div', {
                                                  className: (0, i.clsx)(a.default.iconContainer, x),
                                                  children: [g && b, !E && (0, o.jsx)('span', { className: h, children: p }), !g && b],
                                              })
                                            : p,
                                    [p, x, m, g, E, b, h],
                                );
                                return (0, s.cloneElement)(
                                    t,
                                    {
                                        ref: d,
                                        target: n,
                                        rel: '_blank' === n && void 0 === l ? 'noopener noreferrer' : l,
                                        href: c,
                                        className: (0, i.clsx)(a.default.root, { [a.default.block]: r, [a.default.flexIcon]: m && _, [a.default.iconOnly]: m && E }, f),
                                        ...C,
                                        ...t.props,
                                    },
                                    S,
                                );
                            };
                        t.Link = (0, s.forwardRef)((e, t) => (0, o.jsx)(l, { forwardRef: t, ...e }));
                    },
                    810: (e) => {
                        e.exports = n || (n = r.t(o, 2));
                    },
                },
                i = {};
            function a(e) {
                var t = i[e];
                if (void 0 !== t) return t.exports;
                var r = (i[e] = { exports: {} });
                return (s[e].call(r.exports, r, r.exports, a), r.exports);
            }
            ((a.d = (e, t) => {
                for (var r in t) a.o(t, r) && !a.o(e, r) && Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
            }),
                (a.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
                (a.r = (e) => {
                    ('undefined' != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
                        Object.defineProperty(e, '__esModule', { value: !0 }));
                }));
            var l = {};
            (() => {
                (Object.defineProperty(l, 'X', { value: !0 }), (l.r = void 0));
                var e = a(3616);
                Object.defineProperty(l, 'r', {
                    enumerable: !0,
                    get: function () {
                        return e.Link;
                    },
                });
            })();
            var c = l.r;
            l.X;
        },
        64910: (e, t, r) => {
            'use strict';
            (Object.defineProperty(t, '__esModule', { value: !0 }),
                Object.defineProperty(t, 'default', {
                    enumerable: !0,
                    get: function () {
                        return l;
                    },
                }));
            let n = r(32290),
                o = r(55178),
                s = r(63397);
            function i(e) {
                return { default: e && 'default' in e ? e.default : e };
            }
            r(46456);
            let a = { loader: () => Promise.resolve(i(() => null)), loading: null, ssr: !0 },
                l = function (e) {
                    let t = { ...a, ...e },
                        r = (0, o.lazy)(() => t.loader().then(i)),
                        l = t.loading;
                    function c(e) {
                        let i = l ? (0, n.jsx)(l, { isLoading: !0, pastDelay: !0, error: null }) : null,
                            a = !t.ssr || !!t.loading,
                            c = a ? o.Suspense : o.Fragment,
                            d = t.ssr
                                ? (0, n.jsxs)(n.Fragment, { children: [null, (0, n.jsx)(r, { ...e })] })
                                : (0, n.jsx)(s.BailoutToCSR, { reason: 'next/dynamic', children: (0, n.jsx)(r, { ...e }) });
                        return (0, n.jsx)(c, { ...(a ? { fallback: i } : {}), children: d });
                    }
                    return ((c.displayName = 'LoadableComponent'), c);
                };
        },
        65493: (e, t, r) => {
            'use strict';
            r.d(t, { default: () => o.a });
            var n = r(95574),
                o = r.n(n);
        },
        65497: (e, t, r) => {
            'use strict';
            r.d(t, { J: () => o });
            var n = r(53161);
            let o = (e) => e.startsWith(n.nl);
        },
        65549: (e, t, r) => {
            'use strict';
            r.d(t, { _K: () => m, ns: () => _, ze: () => f, Ay: () => x });
            var n = r(68905),
                o = r(2783),
                s = r(55178),
                i = r(51767);
            let a = { disabled: !1 };
            var l = r(89562),
                c = r(25024),
                d = 'unmounted',
                u = 'exited',
                _ = 'entering',
                m = 'entered',
                f = 'exiting',
                p = (function (e) {
                    function t(t, r) {
                        var n,
                            o = e.call(this, t, r) || this,
                            s = r && !r.isMounting ? t.enter : t.appear;
                        return (
                            (o.appearStatus = null),
                            t.in ? (s ? ((n = u), (o.appearStatus = _)) : (n = m)) : (n = t.unmountOnExit || t.mountOnEnter ? d : u),
                            (o.state = { status: n }),
                            (o.nextCallback = null),
                            o
                        );
                    }
                    ((0, o.A)(t, e),
                        (t.getDerivedStateFromProps = function (e, t) {
                            return e.in && t.status === d ? { status: u } : null;
                        }));
                    var r = t.prototype;
                    return (
                        (r.componentDidMount = function () {
                            this.updateStatus(!0, this.appearStatus);
                        }),
                        (r.componentDidUpdate = function (e) {
                            var t = null;
                            if (e !== this.props) {
                                var r = this.state.status;
                                this.props.in ? r !== _ && r !== m && (t = _) : (r === _ || r === m) && (t = f);
                            }
                            this.updateStatus(!1, t);
                        }),
                        (r.componentWillUnmount = function () {
                            this.cancelNextCallback();
                        }),
                        (r.getTimeouts = function () {
                            var e,
                                t,
                                r,
                                n = this.props.timeout;
                            return (
                                (e = t = r = n),
                                null != n && 'number' != typeof n && ((e = n.exit), (t = n.enter), (r = void 0 !== n.appear ? n.appear : t)),
                                { exit: e, enter: t, appear: r }
                            );
                        }),
                        (r.updateStatus = function (e, t) {
                            if ((void 0 === e && (e = !1), null !== t))
                                if ((this.cancelNextCallback(), t === _)) {
                                    if (this.props.unmountOnExit || this.props.mountOnEnter) {
                                        var r = this.props.nodeRef ? this.props.nodeRef.current : i.findDOMNode(this);
                                        r && (0, c.F)(r);
                                    }
                                    this.performEnter(e);
                                } else this.performExit();
                            else this.props.unmountOnExit && this.state.status === u && this.setState({ status: d });
                        }),
                        (r.performEnter = function (e) {
                            var t = this,
                                r = this.props.enter,
                                n = this.context ? this.context.isMounting : e,
                                o = this.props.nodeRef ? [n] : [i.findDOMNode(this), n],
                                s = o[0],
                                l = o[1],
                                c = this.getTimeouts(),
                                d = n ? c.appear : c.enter;
                            if ((!e && !r) || a.disabled)
                                return void this.safeSetState({ status: m }, function () {
                                    t.props.onEntered(s);
                                });
                            (this.props.onEnter(s, l),
                                this.safeSetState({ status: _ }, function () {
                                    (t.props.onEntering(s, l),
                                        t.onTransitionEnd(d, function () {
                                            t.safeSetState({ status: m }, function () {
                                                t.props.onEntered(s, l);
                                            });
                                        }));
                                }));
                        }),
                        (r.performExit = function () {
                            var e = this,
                                t = this.props.exit,
                                r = this.getTimeouts(),
                                n = this.props.nodeRef ? void 0 : i.findDOMNode(this);
                            if (!t || a.disabled)
                                return void this.safeSetState({ status: u }, function () {
                                    e.props.onExited(n);
                                });
                            (this.props.onExit(n),
                                this.safeSetState({ status: f }, function () {
                                    (e.props.onExiting(n),
                                        e.onTransitionEnd(r.exit, function () {
                                            e.safeSetState({ status: u }, function () {
                                                e.props.onExited(n);
                                            });
                                        }));
                                }));
                        }),
                        (r.cancelNextCallback = function () {
                            null !== this.nextCallback && (this.nextCallback.cancel(), (this.nextCallback = null));
                        }),
                        (r.safeSetState = function (e, t) {
                            ((t = this.setNextCallback(t)), this.setState(e, t));
                        }),
                        (r.setNextCallback = function (e) {
                            var t = this,
                                r = !0;
                            return (
                                (this.nextCallback = function (n) {
                                    r && ((r = !1), (t.nextCallback = null), e(n));
                                }),
                                (this.nextCallback.cancel = function () {
                                    r = !1;
                                }),
                                this.nextCallback
                            );
                        }),
                        (r.onTransitionEnd = function (e, t) {
                            this.setNextCallback(t);
                            var r = this.props.nodeRef ? this.props.nodeRef.current : i.findDOMNode(this),
                                n = null == e && !this.props.addEndListener;
                            if (!r || n) return void setTimeout(this.nextCallback, 0);
                            if (this.props.addEndListener) {
                                var o = this.props.nodeRef ? [this.nextCallback] : [r, this.nextCallback],
                                    s = o[0],
                                    a = o[1];
                                this.props.addEndListener(s, a);
                            }
                            null != e && setTimeout(this.nextCallback, e);
                        }),
                        (r.render = function () {
                            var e = this.state.status;
                            if (e === d) return null;
                            var t = this.props,
                                r = t.children,
                                o =
                                    (t.in,
                                    t.mountOnEnter,
                                    t.unmountOnExit,
                                    t.appear,
                                    t.enter,
                                    t.exit,
                                    t.timeout,
                                    t.addEndListener,
                                    t.onEnter,
                                    t.onEntering,
                                    t.onEntered,
                                    t.onExit,
                                    t.onExiting,
                                    t.onExited,
                                    t.nodeRef,
                                    (0, n.A)(t, [
                                        'children',
                                        'in',
                                        'mountOnEnter',
                                        'unmountOnExit',
                                        'appear',
                                        'enter',
                                        'exit',
                                        'timeout',
                                        'addEndListener',
                                        'onEnter',
                                        'onEntering',
                                        'onEntered',
                                        'onExit',
                                        'onExiting',
                                        'onExited',
                                        'nodeRef',
                                    ]));
                            return s.createElement(l.A.Provider, { value: null }, 'function' == typeof r ? r(e, o) : s.cloneElement(s.Children.only(r), o));
                        }),
                        t
                    );
                })(s.Component);
            function h() {}
            ((p.contextType = l.A),
                (p.propTypes = {}),
                (p.defaultProps = {
                    in: !1,
                    mountOnEnter: !1,
                    unmountOnExit: !1,
                    appear: !1,
                    enter: !0,
                    exit: !0,
                    onEnter: h,
                    onEntering: h,
                    onEntered: h,
                    onExit: h,
                    onExiting: h,
                    onExited: h,
                }),
                (p.UNMOUNTED = d),
                (p.EXITED = u),
                (p.ENTERING = _),
                (p.ENTERED = m),
                (p.EXITING = f));
            let x = p;
        },
        68905: (e, t, r) => {
            'use strict';
            function n(e, t) {
                if (null == e) return {};
                var r = {};
                for (var n in e)
                    if ({}.hasOwnProperty.call(e, n)) {
                        if (-1 !== t.indexOf(n)) continue;
                        r[n] = e[n];
                    }
                return r;
            }
            r.d(t, { A: () => n });
        },
        69582: (e) => {
            e.exports = {
                root: 'ClearMemoryModal_root__gKdij',
                modalHeader: 'ClearMemoryModal_modalHeader__veasf',
                modalContent: 'ClearMemoryModal_modalContent__b7yHr',
                image: 'ClearMemoryModal_image__evvTq',
                description: 'ClearMemoryModal_description__ue94L',
                message: 'ClearMemoryModal_message__mYQpM',
            };
        },
        70208: (e, t, r) => {
            'use strict';
            r.d(t, { T: () => n });
            var n = (function (e) {
                return ((e.BRANDED = 'branded'), (e.DEFAULT = 'default'), (e.DUCK = 'duck'), (e.CAR = 'car'), e);
            })({});
        },
        70608: (e, t, r) => {
            'use strict';
            r.d(t, { S: () => n });
            let n = (0, r(55178).createContext)({ filterKey: void 0, filterValue: void 0, filterPos: void 0 });
        },
        72306: (e, t, r) => {
  'use strict';

  r.d(t, {
    SettingsPage: () => ej
  });
  var o = r(32290),
    s = r(96103),
    n = r(60900),
    i = r(39407),
    l = r(21732),
    a = r(46049),
    c = r(71926),
    d = r(55178),
    _ = r(26490),
    u = r(84638),
    m = r(78091),
    f = r(43705),
    p = r.n(f);
  let h = (0, s.PA)(() => {
    let {
        formatMessage: e
      } = (0, n.A)(),
      t = (0, _.S)();
    return (0, o.jsx)(u.a, {
      className: p().modal,
      headerClassName: p().modalHeader,
      contentClassName: p().modalContent,
      title: e({
        id: 'equalizer.title'
      }),
      open: t.modal.isOpened,
      onOpenChange: t.modal.onOpenChange,
      onClose: t.modal.close,
      size: 'fitContent',
      placement: 'center',
      overlayColor: 'full',
      labelClose: e({
        id: 'interface-actions.close'
      }),
      closeButtonProps: {
        'data-test-id': l.Kq.equalizer.EQUALIZER_MODAL_CLOSE_BUTTON
      },
      'data-test-id': l.Kq.equalizer.EQUALIZER_MODAL,
      children: (0, o.jsx)(m.r, {
        title: e({
          id: 'equalizer.enable'
        }),
        isExpanded: !0,
        isDisabled: !t.isEnabled
      })
    });
  });
  var C = r(70204),
    v = r(34186),
    x = r(45477),
    E = r(75582),
    S = r(81218),
    A = r(57594),
    g = r(58008),
    N = r(79406),
    O = r(53453),
    L = r(19379),
    R = r(90357),
    I = r(4008),
    y = r(61945),
    j = r(61258),
    M = r(52898),
    w = r.n(M);
  let P = (0, s.PA)(() => {
    let {
        formatMessage: e
      } = (0, n.A)(),
      {
        location: t,
        modals: {
          aboutAppModal: r
        }
      } = (0, A.g)(),
      s = window.VERSION,
      l = window.BRANCH,
      {
        language: a
      } = (0, y.h)(),
      d = void 0;
    return (0, o.jsxs)(u.a, {
      className: w().root,
      headerClassName: w().modalHeader,
      contentClassName: w().modalContent,
      title: e({
        id: 'settings.about-app'
      }),
      open: r.isOpened,
      onOpenChange: r.onOpenChange,
      onClose: r.close,
      size: 'fitContent',
      placement: 'center',
      overlayColor: 'full',
      labelClose: e({
        id: 'interface-actions.close'
      }),
      children: [(0, o.jsxs)('ul', {
        className: w().list,
        children: [(0, o.jsx)('li', {
          className: w().item,
          children: (0, o.jsx)(j.N, {
            className: w().link,
            target: '_blank',
            href: 'https://yandex.'.concat(t.tld, '/support/music/performers-and-copyright-holders.html?lang=').concat(a),
            children: (0, o.jsx)(c.HL, {
              type: 'controls',
              variant: 'span',
              size: 'l',
              weight: 'medium',
              children: (0, o.jsx)(i.A, {
                id: 'footer.links-copyright-holders'
              })
            })
          })
        }), (0, o.jsx)('li', {
          className: w().item,
          children: (0, o.jsx)(j.N, {
            className: w().link,
            target: '_blank',
            href: 'https://yandex.'.concat(t.tld, '/legal/music_mobile_agreement?lang=').concat(a),
            children: (0, o.jsx)(c.HL, {
              type: 'controls',
              variant: 'span',
              size: 'l',
              weight: 'medium',
              children: (0, o.jsx)(i.A, {
                id: 'footer.links-terms'
              })
            })
          })
        }), (0, o.jsx)('li', {
          className: w().item,
          children: (0, o.jsx)(j.N, {
            className: w().link,
            target: '_blank',
            href: 'https://music.yandex.'.concat(t.tld, '/legal/recommendations/ru/#music'),
            children: (0, o.jsx)(c.HL, {
              type: 'controls',
              variant: 'span',
              size: 'l',
              weight: 'medium',
              children: (0, o.jsx)(i.A, {
                id: 'footer.links-recommendation-rules'
              })
            })
          })
        }), (0, o.jsx)('li', {
          className: w().item,
          children: (0, o.jsx)(j.N, {
            className: w().link,
            target: '_blank',
            href: 'https://yandex.'.concat(t.tld, '/support/music/index.html?lang=').concat(a),
            children: (0, o.jsx)(c.HL, {
              type: 'controls',
              variant: 'span',
              size: 'l',
              weight: 'medium',
              children: (0, o.jsx)(i.A, {
                id: 'footer.links-help'
              })
            })
          })
        }), (0, o.jsx)('li', {
          className: w().item,
          children: (0, o.jsx)(j.N, {
            className: w().link,
            target: '_blank',
            href: 'https://github.com/PulseSync-LLC/PulseSync-mod',
            children: (0, o.jsx)(c.HL, {
              type: 'controls',
              variant: 'span',
              size: 'l',
              weight: 'medium',
              children: 'Репозиторий PulseSync на GitHub'
            })
          })
        }), (0, o.jsx)('li', {
          className: w().item,
          children: (0, o.jsx)(j.N, {
            className: w().link,
            target: '_blank',
            href: 'https://pulsesync.dev/subscription',
            children: (0, o.jsx)(c.HL, {
              type: 'controls',
              variant: 'span',
              size: 'l',
              weight: 'medium',
              children: 'Поддержать проект оформив подписку'
            })
          })
        }), (0, o.jsx)('li', {
          className: w().item,
          children: (0, o.jsx)(j.N, {
            className: w().link,
            target: '_blank',
            href: 'https://pulsesync.dev',
            children: (0, o.jsx)(c.HL, {
              type: 'controls',
              variant: 'span',
              size: 'l',
              weight: 'medium',
              children: 'Сайт проекта PulseSync'
            })
          })
        })]
      }), (0, o.jsx)(c.HL, {
        className: w().explicitText,
        type: 'controls',
        variant: 'div',
        size: 'xs',
        weight: 'medium',
        dangerouslySetInnerHTML: {
          __html: d
        }
      }), (0, o.jsx)('div', {
        style: {
          display: 'flex',
          gap: '10px',
          alignItems: 'center',
          justifyContent: 'center'
        },
        className: w().versionText,
        children: [(0, o.jsx)(c.HL, {
          type: 'controls',
          variant: 'div',
          size: 'xs',
          children: (0, o.jsx)(i.A, {
            id: 'about-app.app-name'
          })
        }), (0, o.jsx)(c.HL, {
          type: 'controls',
          variant: 'div',
          size: 'xs',
          children: e({
            id: 'desktop.app-version-short'
          }, {
            version: s
          })
        }), (0, o.jsx)(c.HL, {
          type: 'controls',
          variant: 'div',
          size: 'xs',
          children: e({
            id: 'desktop.app-revision'
          }, {
            revision: l
          })
        })]
      }), (0, o.jsx)('div', {
        style: {
          display: 'flex',
          gap: '10px',
          alignItems: 'center',
          justifyContent: 'center'
        },
        className: w().versionText,
        children: 'PulseSync '.concat(window.PULSE_VERSION, ' · Host ').concat(window.HOST_VERSION)
      })]
    });
  });
  var D = r(63423),
    k = r(50162),
    W = r(88964),
    B = r(58534),
    z = r(69582),
    U = r.n(z);
  let F = {
      src: '/_next/static/media/clearMemory.33a5df30.png'
    },
    H = (0, s.PA)(() => {
      let {
          formatMessage: e
        } = (0, n.A)(),
        {
          modals: {
            clearMemoryModal: t
          }
        } = (0, A.g)(),
        {
          notify: r
        } = (0, E.l)(),
        s = (0, W.j)(),
        l = (0, d.useCallback)(() => {
          s.clearAll().then(() => {
            t.close();
            window.onDownloadedTracksDeleted();
            r((0, o.jsx)(B.$, {
              message: (0, o.jsx)(c.HL, {
                className: U().message,
                variant: 'div',
                type: 'controls',
                size: 'm',
                children: (0, o.jsx)(i.A, {
                  id: 'offline.memory-cleared'
                })
              })
            }), {
              containerId: x.u.INFO
            });
          });
        }, [t, r, s]);
      return (0, o.jsxs)(u.a, {
        className: U().root,
        headerClassName: U().modalHeader,
        contentClassName: U().modalContent,
        open: t.isOpened,
        onOpenChange: t.onOpenChange,
        onClose: t.close,
        size: 'fitContent',
        overlayColor: 'full',
        placement: 'center',
        labelClose: e({
          id: 'interface-actions.close'
        }),
        children: [(0, o.jsx)(k._V, {
          src: F.src,
          className: U().image,
          fit: 'contain',
          'aria-hidden': !0
        }), (0, o.jsx)(c.HL, {
          className: U().description,
          type: 'text',
          variant: 'div',
          size: 'l',
          weight: 'normal',
          children: (0, o.jsx)(i.A, {
            id: 'offline.clear-memory-description'
          })
        }), (0, o.jsx)(D.$, {
          color: 'primary',
          radius: 'xxxl',
          size: 'default',
          onClick: l,
          children: (0, o.jsx)(i.A, {
            id: 'interface-actions.clear'
          })
        })]
      });
    });
  var G = r(99169),
    V = r(58723),
    K = r(70208),
    Y = r(42822),
    Q = r.n(Y),
    X = r(90040),
    $ = r(57249),
    Z = r(63618),
    q = r(65493),
    J = r(91027),
    ee = r(65497),
    et = r(49124);
  let er = q.default.default(() => Promise.resolve().then(r.bind(r, 90040)).then(e => e.DotLottieWorkerReact), {
    ssr: !1
  });
  {
    let e = et.env.USE_CDN_FOR_STATIC ? 'https://yastatic-net.ru/s3/music-frontend-static/music/vundefined' : window.location.origin;
    (0, X.setWasmUrl)(new URL($, e).href);
  }
  let eo = e => {
      let {
          thumbType: t
        } = e,
        [r, s] = (0, d.useState)(null);
      return ((0, d.useEffect)(() => {
        let e = G.z[t];
        e && e().then(e => {
          (0, ee.J)(e) ? s(e) : s(''.concat(window.location.origin).concat(e));
        });
      }, [t]), r) ? (0, o.jsx)(er, {
        src: r
      }) : null;
    },
    es = (0, s.PA)(e => {
      let {
          thumbId: t,
          isDefault: r = !1
        } = e,
        {
          settings: s,
          user: l,
          paywall: a
        } = (0, A.g)(),
        {
          formatMessage: _
        } = (0, n.A)(),
        [u, m] = (0, d.useState)(!1);
      (0, d.useEffect)(() => {
        m(!0);
      }, []);
      let f = (0, J.c)(e => {
          if (e.preventDefault(), !l.hasPlus && t !== s.selectedThumbId) return void a.openModal();
          s.setCustomPlayerThumb(t);
        }),
        p = !!u && s.selectedThumbId === t;
      if (r) return (0, o.jsxs)(D.$, {
        className: (0, Z.$)(Q().button, {
          [Q().button_selected]: p
        }),
        radius: 'xl',
        onClick: f,
        withRipple: !1,
        'aria-pressed': p,
        children: [(0, o.jsxs)('div', {
          className: Q().thumbContent,
          children: [(0, o.jsx)('div', {
            className: Q().thumbLine
          }), (0, o.jsx)('div', {
            className: Q().thumbDefault
          })]
        }), (0, o.jsx)(c.HL, {
          variant: 'span',
          type: 'controls',
          size: 'm',
          weight: 'medium',
          className: Q().thumbName,
          lineClamp: 1,
          children: (0, o.jsx)(i.A, {
            id: 'branded-player.default'
          })
        })]
      });
      let h = (0, G.r)(_).get(t);
      if (!h) return;
      let C = {
        '--thumb-height': ''.concat(h.thumb.height, 'px')
      };
      return (0, o.jsxs)(D.$, {
        className: (0, Z.$)(Q().button, {
          [Q().button_selected]: p
        }),
        radius: 'xl',
        onClick: f,
        withRipple: !1,
        'aria-pressed': p,
        children: [(0, o.jsx)('div', {
          style: C,
          className: (0, Z.$)(Q().thumbContent, Q().thumbContent_custom),
          children: (0, o.jsx)(eo, {
            thumbType: t
          })
        }), (0, o.jsx)(c.HL, {
          className: Q().thumbName,
          variant: 'div',
          size: 'm',
          weight: 'normal',
          lineClamp: 1,
          children: h.name
        })]
      });
    }),
    en = (0, s.PA)(() => {
      let {
          formatMessage: e
        } = (0, n.A)(),
        t = Array.from((0, G.r)(e).keys());
      return (0, o.jsxs)('div', {
        className: Q().root,
        children: [(0, o.jsx)(c.HL, {
          className: Q().title,
          variant: 'div',
          size: 'l',
          weight: 'bold',
          lineClamp: 1,
          children: (0, o.jsx)(i.A, {
            id: 'branded-player.player-type'
          })
        }), (0, o.jsxs)(V.m, {
          restrictionsClassName: Q().thumbsContainer,
          children: [(0, o.jsx)(es, {
            thumbId: K.T.DEFAULT,
            isDefault: !0
          }), t.map(e => (0, o.jsx)(es, {
            thumbId: e
          }, e))]
        })]
      });
    });
  var ei = r(82586),
    el = r(37528),
    ea = r.n(el);
  let ec = e => {
    let {
      title: t,
      description: r,
      onClick: s,
      descriptionProps: n,
      ...i
    } = e;
    return (0, o.jsx)(D.$, {
      className: (0, Z.$)(ea().root, ea().important),
      contentContainerClassName: ea().contentContainer,
      icon: (0, o.jsx)(ei.I, {
        className: ea().icon,
        size: 'xs',
        variant: 'arrowRight'
      }),
      iconPosition: 'right',
      onClick: s,
      isBlock: !0,
      withRipple: !1,
      withHover: !1,
      variant: 'text',
      size: 'xs',
      ...i,
      children: (0, o.jsxs)('div', {
        className: ea().content,
        children: [(0, o.jsx)(c.HL, {
          className: ea().title,
          variant: 'div',
          size: 'l',
          weight: 'bold',
          lineClamp: 1,
          children: t
        }), r && (0, o.jsx)(c.HL, {
          variant: 'div',
          type: 'text',
          size: 'xs',
          weight: 'medium',
          className: ea().description,
          ...n,
          children: r
        })]
      })
    });
  };
  var ed = r(99311),
    e_ = r(85892),
    eu = r.n(e_);
  let em = e => {
    let {
        title: t,
        onChange: r,
        isChecked: s,
        description: n,
        dataTestId: i,
        disabled: l = !1
      } = e,
      a = (0, d.useId)(),
      [u, m] = (0, d.useState)(!!s && 'function' != typeof s?.then),
      f = (0, d.useCallback)(e => {
        m(e), null == r || r(e);
      }, [r]);
    (0, d.useEffect)(() => {
      let e = !1;
      return s && 'function' == typeof s.then ? s.then(t => {
        e || m(Boolean(t));
      }) : m(Boolean(s)), () => {
        e = !0;
      };
    }, [s]);
    return (0, o.jsxs)('div', {
      className: eu().root,
      children: [(0, o.jsxs)('div', {
        className: eu().textContainer,
        children: [(0, o.jsx)(c.HL, {
          className: l ? eu().titleDisabled : eu().title,
          id: a,
          variant: 'div',
          size: 'l',
          weight: 'bold',
          lineClamp: 1,
          'aria-hidden': !0,
          children: t
        }), n && (0, o.jsx)(c.HL, {
          variant: 'div',
          type: 'text',
          size: 'xs',
          weight: 'medium',
          className: l ? eu().descriptionDisabled : eu().description,
          children: n
        })]
      }), (0, o.jsx)(ed.l, {
        isChecked: u,
        'aria-describedby': a,
        onChange: f,
        disabled: l,
        ...i
      })]
    });
  };
  var ef = r(55332);
  let ep = {
      [ef.l.TOGGLE_PLAY]: ['K'],
      [ef.l.TOGGLE_MUTE]: ['M'],
      [ef.l.INCREASE_VOLUME]: ['↑'],
      [ef.l.DECREASE_VOLUME]: ['↓'],
      [ef.l.LIKE]: ['F'],
      [ef.l.DISLIKE]: ['D'],
      [ef.l.MOVE_FORWARD]: ['N'],
      [ef.l.MOVE_BACKWARD]: ['P'],
      [ef.l.SLIDE_FORWARD]: ['→', 'L'],
      [ef.l.SLIDE_BACKWARD]: ['←', 'J'],
      [ef.l.TOGGLE_REPEAT]: ['R'],
      [ef.l.TOGGLE_SHUFFLE]: ['S'],
      [ef.l.TOGGLE_FULLSCREEN_PLAYER]: ['W'],
      [ef.l.CLOSE]: ['Escape']
    },
    eh = [{
      formattedMessage: (0, o.jsx)(i.A, {
        id: 'shortcuts.play-pause'
      }),
      shortcutsAction: ef.l.TOGGLE_PLAY
    }, {
      formattedMessage: (0, o.jsx)(i.A, {
        id: 'shortcuts.mute'
      }),
      shortcutsAction: ef.l.TOGGLE_MUTE
    }, {
      formattedMessage: (0, o.jsx)(i.A, {
        id: 'shortcuts.skip-forward'
      }),
      shortcutsAction: ef.l.SLIDE_FORWARD
    }, {
      formattedMessage: (0, o.jsx)(i.A, {
        id: 'shortcuts.rewind'
      }),
      shortcutsAction: ef.l.SLIDE_BACKWARD
    }, {
      formattedMessage: (0, o.jsx)(i.A, {
        id: 'shortcuts.volume-up'
      }),
      shortcutsAction: ef.l.INCREASE_VOLUME
    }, {
      formattedMessage: (0, o.jsx)(i.A, {
        id: 'shortcuts.volume-down'
      }),
      shortcutsAction: ef.l.DECREASE_VOLUME
    }, {
      formattedMessage: (0, o.jsx)(i.A, {
        id: 'shortcuts.like'
      }),
      shortcutsAction: ef.l.LIKE
    }, {
      formattedMessage: (0, o.jsx)(i.A, {
        id: 'shortcuts.unlike'
      }),
      shortcutsAction: ef.l.DISLIKE
    }, {
      formattedMessage: (0, o.jsx)(i.A, {
        id: 'shortcuts.switch-repeat-mode'
      }),
      shortcutsAction: ef.l.TOGGLE_REPEAT
    }, {
      formattedMessage: (0, o.jsx)(i.A, {
        id: 'shortcuts.switch-shuffle-mode'
      }),
      shortcutsAction: ef.l.TOGGLE_SHUFFLE
    }, {
      formattedMessage: (0, o.jsx)(i.A, {
        id: 'shortcuts.next-track'
      }),
      shortcutsAction: ef.l.MOVE_FORWARD
    }, {
      formattedMessage: (0, o.jsx)(i.A, {
        id: 'shortcuts.previous-track'
      }),
      shortcutsAction: ef.l.MOVE_BACKWARD
    }, {
      formattedMessage: (0, o.jsx)(i.A, {
        id: 'shortcuts.fullscreen-player'
      }),
      shortcutsAction: ef.l.TOGGLE_FULLSCREEN_PLAYER
    }];
  var eC = r(49700),
    ev = r.n(eC);
  let ex = (0, s.PA)(() => {
    let {
        modals: {
          shortcutsModal: e
        }
      } = (0, A.g)(),
      {
        formatMessage: t
      } = (0, n.A)(),
      r = (0, d.useMemo)(() => {
        let e = (0, o.jsx)(c.HL, {
          className: ev().text,
          variant: 'div',
          type: 'text',
          size: 'xs',
          weight: 'normal',
          children: (0, o.jsx)(i.A, {
            id: 'shortcuts.or'
          })
        }, 'or');
        return eh.map(t => {
          let {
              shortcutsAction: r,
              formattedMessage: s
            } = t,
            n = ep[r].map((e, t) => (0, o.jsx)('div', {
              className: ev().button,
              children: (0, o.jsx)(c.HL, {
                variant: 'div',
                type: 'text',
                size: 'xs',
                weight: 'normal',
                children: e
              })
            }, t));
          return n.length > 1 && n.splice(1, 0, e), (0, o.jsx)('li', {
            children: (0, o.jsxs)('div', {
              className: ev().content,
              children: [(0, o.jsx)(c.HL, {
                className: ev().text,
                variant: 'div',
                type: 'text',
                size: 'xs',
                weight: 'normal',
                children: s
              }), (0, o.jsx)('div', {
                className: ev().buttons,
                children: n
              })]
            })
          }, r);
        });
      }, []);
    return (0, o.jsx)(u.a, {
      className: ev().root,
      headerClassName: ev().modalHeader,
      contentClassName: ev().modalContent,
      title: t({
        id: 'settings.shortcuts'
      }),
      open: e.isOpened,
      onOpenChange: e.onOpenChange,
      onClose: e.close,
      size: 'fitContent',
      placement: 'center',
      overlayColor: 'full',
      labelClose: t({
        id: 'interface-actions.close'
      }),
      children: (0, o.jsx)('ul', {
        className: ev().list,
        children: r
      })
    });
  });
  var eE = r(31658),
    eb = r.n(eE),
    eTooltipWithTitle = r(60244);
  var reactDom = r(51767),
    inputComponent = r(30627),
    sliderComponent = r(378),
    pulseWebAudio = r(92496),
    pulseDomain = r(82273);
  var pulseJsxRuntime = o,
    pulseReactRuntime = d,
    pulseMobxRuntime = s,
    pulseIntlRuntime = n,
    pulseEqualizerRuntime = _,
    pulseTypography = c.HL,
    pulseModal = u.a,
    pulseIcon = ei.I,
    pulseToggle = ed.l,
    pulseEqualizerModal = h,
    pulseSettingsItemStyles = eu;
  let pulseSettingsRuntime = {
      Pjs: A.g,
      HFS: () => window.VERSION,
      NFA: v.N,
      ooW: C.oo,
      twC: C.V4,
      _lF: pulseDomain._,
      h6b: y.h,
      gQL: S.g,
      zal: N.z,
      wv5: O.w,
      cYZ: L.c,
      FlZ: R.F,
      lkh: E.l,
      uQT: x.u,
      iIU: pulseWebAudio.i
    },
    pulseSettingsUi = {
      $W: B.$,
      hT: R.h,
      N_: j.N,
      aQ: I.WithOffline
    },
    pulseDataTest = {
      Am: e => ({
        'data-test-id': e
      }),
      e8: l.e8
    },
    settingsLinkItem = e => {
      let {
        link: t,
        title: r,
        description: s,
        target: n
      } = e;
      return (0, o.jsxs)(j.N, {
        className: 'SettingsListLinkItem_root__rTPC9',
        containerClassName: 'SettingsListLinkItem_container__k7bhS',
        textClassName: 'SettingsListLinkItem_linkText__0PHlQ',
        icon: (0, o.jsx)(ei.I, {
          className: 'SettingsListLinkItem_icon__p4P_V',
          size: 'xs',
          variant: 'arrowRight'
        }),
        iconPosition: 'right',
        href: t,
        ...(n ? {
          target: n
        } : {}),
        children: [(0, o.jsx)(c.HL, {
          className: 'SettingsListLinkItem_title__duJnL',
          variant: 'div',
          size: 'l',
          weight: 'bold',
          lineClamp: 1,
          children: r
        }), s && (0, o.jsx)(c.HL, {
          variant: 'div',
          type: 'text',
          size: 'xs',
          weight: 'medium',
          className: 'SettingsListLinkItem_description__xWeAD',
          children: s
        })]
      });
    };
  let labeledBubble = e => {
      let {
        label: t,
        color: o = 'var(--ym-controls-color-primary-default-enabled)',
        tooltip: i = {
          title: 'Экспериментально',
          description: 'Может работать некорректно'
        },
        disabled: l,
        ...r
      } = e;
      return i ? (0, pulseJsxRuntime.jsx)(eTooltipWithTitle.k, {
        title: i.title,
        description: i.description,
        children: (0, pulseJsxRuntime.jsxs)('span', {
          style: {
            display: 'inline-flex',
            alignItems: 'center',
            width: 'fit-content',
            'margin-inline': '5px',
            'background-color': o,
            color: 'black',
            'border-radius': '6px',
            'padding-inline': '6px',
            transition: 'opacity var(--ym-duration-transition)',
            ...(l ? {
              opacity: 0.3
            } : {})
          },
          children: t
        })
      }) : (0, pulseJsxRuntime.jsxs)('span', {
        style: {
          display: 'inline-flex',
          alignItems: 'center',
          width: 'fit-content',
          'margin-inline': '5px',
          'background-color': o,
          color: 'black',
          'border-radius': '6px',
          'padding-inline': '6px',
          transition: 'opacity var(--ym-duration-transition)',
          ...(l ? {
            opacity: 0.3
          } : {})
        },
        children: t
      });
    },
    settingsCategorySeparator = e => {
      let {
        text: t
      } = e;
      return (0, pulseJsxRuntime.jsx)('li', {
        className: eb().item,
        style: {
          paddingBlockEnd: 'var(--ym-spacer-size-m)'
        },
        children: (0, pulseJsxRuntime.jsxs)('div', {
          role: 'separator',
          'aria-label': t,
          style: {
            display: 'flex',
            alignItems: 'center',
            gap: 'var(--ym-spacer-size-xs)',
            width: '100%',
            paddingBlock: 'var(--ym-spacer-size-xxxs)'
          },
          children: [(0, pulseJsxRuntime.jsx)('div', {
            style: {
              height: '1px',
              flex: '1 1 auto',
              background: 'var(--ym-controls-color-secondary-outline-enabled_stroke)',
              opacity: 0.6
            }
          }), t && (0, pulseJsxRuntime.jsx)(pulseTypography, {
            variant: 'div',
            type: 'text',
            size: 'xs',
            weight: 'medium',
            style: {
              color: 'var(--ym-controls-color-secondary-text-enabled)',
              opacity: 0.72,
              whiteSpace: 'nowrap'
            },
            children: t
          }), (0, pulseJsxRuntime.jsx)('div', {
            style: {
              height: '1px',
              flex: '1 1 auto',
              background: 'var(--ym-controls-color-secondary-outline-enabled_stroke)',
              opacity: 0.6
            }
          })]
        })
      });
    },
    settingBarWithDropdown = e => {
      let {
          title: t,
          description: o,
          onChange: i,
          value: l,
          options: r,
          direction: s = 'bottom',
          disabled: a = !1,
          buttonStyle = {},
          layout: dropdownLayout = 'row'
        } = e,
        [d, u] = (0, pulseReactRuntime.useState)(!1),
        [menuPosition, setMenuPosition] = (0, pulseReactRuntime.useState)(null),
        [menuMaxHeight, setMenuMaxHeight] = (0, pulseReactRuntime.useState)(null),
        [m, y] = (0, pulseReactRuntime.useState)(!1),
        h = (0, pulseReactRuntime.useRef)(null),
        menuRef = (0, pulseReactRuntime.useRef)(null),
        f = r.find(e => e.value === l),
        isColumnLayout = dropdownLayout === 'column',
        updateMenuPosition = (0, pulseReactRuntime.useCallback)(() => {
          let e = h.current;
          if (!e) return;
          let t = e.getBoundingClientRect(),
            o = 'bottom' === s;
          setMenuPosition({
            left: Math.round(t.left),
            width: Math.round(t.width),
            top: o ? Math.round(t.bottom + 8) : 'auto',
            bottom: o ? 'auto' : Math.round(window.innerHeight - t.top + 8)
          });
        }, [s]),
        updateMenuMaxHeight = (0, pulseReactRuntime.useCallback)(() => {
          let e = menuRef.current;
          if (!e) return;
          let t = window.getComputedStyle(e),
            o = (parseFloat(t.borderTopWidth) || 0) + (parseFloat(t.borderBottomWidth) || 0),
            i = 16 * (parseFloat(window.getComputedStyle(document.documentElement).fontSize) || 16),
            l = e.scrollHeight + o;
          l > 0 && setMenuMaxHeight(Math.min(l, i));
        }, []),
        x = (0, pulseReactRuntime.useCallback)(e => {
          i(e), u(!1);
        }, [i]),
        closeDropdownOnOuterClick = (0, pulseReactRuntime.useCallback)(e => {
          if (!d) return;
          let t = e.target;
          h.current?.contains(t) || menuRef.current?.contains(t) || u(!1);
        }, [d]);
      return (0, pulseReactRuntime.useEffect)(() => {
        document.addEventListener('click', closeDropdownOnOuterClick);
        return () => {
          document.removeEventListener('click', closeDropdownOnOuterClick);
        };
      }, [closeDropdownOnOuterClick]), (0, pulseReactRuntime.useEffect)(() => {
        if (!d) return;
        updateMenuPosition();
        window.addEventListener('resize', updateMenuPosition);
        document.addEventListener('scroll', updateMenuPosition, !0);
        return () => (window.removeEventListener('resize', updateMenuPosition), document.removeEventListener('scroll', updateMenuPosition, !0));
      }, [d, updateMenuPosition]), (0, pulseReactRuntime.useEffect)(() => {
        if (!d || !m) return;
        updateMenuMaxHeight();
        window.addEventListener('resize', updateMenuMaxHeight);
        return () => {
          window.removeEventListener('resize', updateMenuMaxHeight);
        };
      }, [d, m, r.length, updateMenuMaxHeight]), (0, pulseReactRuntime.useEffect)(() => {
        d && y(!0);
      }, [d]), (0, pulseReactRuntime.useEffect)(() => {
        if (d || !m) return;
        let e = setTimeout(() => {
          y(!1);
        }, 180);
        return () => {
          clearTimeout(e);
        };
      }, [d, m]), (0, pulseJsxRuntime.jsxs)('div', {
        className: pulseSettingsItemStyles().root,
        style: isColumnLayout ? {
          alignItems: 'stretch',
          flexDirection: 'column',
          gap: 'var(--ym-spacer-size-xs)',
          width: '100%'
        } : void 0,
        children: [(0, pulseJsxRuntime.jsxs)('div', {
          className: pulseSettingsItemStyles().textContainer,
          style: isColumnLayout ? {
            width: '100%'
          } : void 0,
          children: [(0, pulseJsxRuntime.jsx)(pulseTypography, {
            className: a ? pulseSettingsItemStyles().titleDisabled : pulseSettingsItemStyles().title,
            variant: 'div',
            size: 'l',
            weight: 'bold',
            lineClamp: 1,
            'aria-hidden': !0,
            children: t
          }), (f?.description ?? o) && (0, pulseJsxRuntime.jsx)(pulseTypography, {
            variant: 'div',
            type: 'text',
            size: 'xs',
            weight: 'medium',
            className: a ? pulseSettingsItemStyles().descriptionDisabled : pulseSettingsItemStyles().description,
            style: {
              whiteSpace: 'pre-line'
            },
            children: f?.description ?? o
          })]
        }), (0, pulseJsxRuntime.jsxs)('div', {
          ref: h,
          onClick: () => {
            u(e => a ? !1 : !e);
          },
          className: ''.concat(a ? 'settingBarWithDropdown_button__disabled' : 'settingBarWithDropdown_button', ' Ai2iRN9elHpk_u5splD6 _3_Mxw7Si7j2g4kWjlpR _MWOVuZRvUQdXKTMcOPx'),
          style: {
            ...(isColumnLayout ? {
              width: '100%',
              alignSelf: 'stretch'
            } : {}),
            ...buttonStyle
          },
          children: [f?.label || 'Select...', m && menuPosition && reactDom.createPortal((0, pulseJsxRuntime.jsx)('ul', {
            ref: menuRef,
            role: 'menu',
            className: 'settingBarWithDropdown_menu PulseSync_experimentsListScroll Ai2iRN9elHpk_u5splD6 _3_Mxw7Si7j2g4kWjlpR _MWOVuZRvUQdXKTMcOPx'.concat(d ? '' : ' settingBarWithDropdown_menu__closed'),
            style: {
              display: 'flex',
              flexDirection: 'column',
              position: 'fixed',
              left: ''.concat(menuPosition.left, 'px'),
              right: 'auto',
              width: ''.concat(menuPosition.width, 'px'),
              maxHeight: null == menuMaxHeight ? '16rem' : ''.concat(menuMaxHeight, 'px'),
              overflowY: 'auto',
              overflowX: 'hidden',
              scrollbarWidth: 'thin',
              overscrollBehavior: 'contain',
              top: 'number' == typeof menuPosition.top ? ''.concat(menuPosition.top, 'px') : menuPosition.top,
              bottom: 'number' == typeof menuPosition.bottom ? ''.concat(menuPosition.bottom, 'px') : menuPosition.bottom,
              '--settingBarWithDropdown-offset-y': 'bottom' === s ? '-6px' : '6px',
              '--settingBarWithDropdown-origin': 'bottom' === s ? 'top right' : 'bottom right'
            },
            children: r.map(e => e && (0, pulseJsxRuntime.jsxs)('li', {
              role: 'menuitem',
              className: 'settingBarWithDropdown_menuItem',
              id: e.value,
              style: {
                flexShrink: 0,
                alignItems: 'flex-start'
              },
              'aria-selected': l === e.value,
              onClick: t => {
                t.stopPropagation(), x(e.value);
              },
              children: [(0, pulseJsxRuntime.jsxs)('div', {
                style: {
                  display: 'flex',
                  flex: '1 1 auto',
                  flexDirection: 'column',
                  gap: '0.125rem',
                  minWidth: 0
                },
                children: [(0, pulseJsxRuntime.jsx)('span', {
                  children: e.label
                }), e.description && (0, pulseJsxRuntime.jsx)('span', {
                  style: {
                    color: 'inherit',
                    fontSize: '0.75rem',
                    lineHeight: 1.35,
                    opacity: 0.72,
                    whiteSpace: 'pre-line'
                  },
                  children: e.description
                })]
              }), l === e.value && (0, pulseJsxRuntime.jsx)('svg', {
                width: '16',
                height: '16',
                style: {
                  flex: '0 0 auto',
                  marginTop: '0.125rem'
                },
                fill: 'currentColor',
                xmlns: 'http://www.w3.org/2000/svg',
                children: (0, pulseJsxRuntime.jsx)('path', {
                  d: 'M6.5 11.5l-3.5-3.5 1.4-1.4L6.5 8.7l5.1-5.1 1.4 1.4z'
                })
              })]
            }, e.value))
          }), document.body)]
        })]
      });
    },
    keybindDisplayPart = e => {
      switch (e) {
        case 'Plus':
          return '+';
        case 'CommandOrControl':
        case 'CmdOrCtrl':
        case 'Control':
        case 'Ctrl':
          return 'Ctrl';
        case 'Command':
        case 'Cmd':
          return 'Cmd';
        case 'Option':
          return 'Alt';
        case 'Super':
          return 'Win';
        case 'Escape':
          return 'Esc';
        default:
          return e;
      }
    },
    formatKeybindDisplay = e => e ? e.split('+').map(keybindDisplayPart).join(' + ') : 'Не задано',
    keybindNamedKeyMap = {
      ' ': 'Space',
      Spacebar: 'Space',
      Tab: 'Tab',
      Backspace: 'Backspace',
      Delete: 'Delete',
      Insert: 'Insert',
      Enter: 'Enter',
      Return: 'Return',
      Escape: 'Esc',
      Esc: 'Esc',
      ArrowUp: 'Up',
      ArrowDown: 'Down',
      ArrowLeft: 'Left',
      ArrowRight: 'Right',
      Home: 'Home',
      End: 'End',
      PageUp: 'PageUp',
      PageDown: 'PageDown',
      PrintScreen: 'PrintScreen',
      AudioVolumeUp: 'VolumeUp',
      AudioVolumeDown: 'VolumeDown',
      AudioVolumeMute: 'VolumeMute',
      MediaTrackNext: 'MediaNextTrack',
      MediaTrackPrevious: 'MediaPreviousTrack',
      MediaStop: 'MediaStop',
      MediaPlayPause: 'MediaPlayPause'
    },
    keybindCodeMap = {
      Backquote: '`',
      Minus: '-',
      Equal: '=',
      BracketLeft: '[',
      BracketRight: ']',
      Backslash: '\\',
      IntlBackslash: '\\',
      Semicolon: ';',
      Quote: "'",
      Comma: ',',
      Period: '.',
      Slash: '/'
    },
    getKeybindModifiers = e => {
      let t = [];
      return e.ctrlKey && t.push('Ctrl'), e.altKey && t.push('Alt'), e.shiftKey && t.push('Shift'), e.metaKey && t.push('Super'), t;
    },
    getKeybindModifierPreview = (e, t) => {
      let o = getKeybindModifiers(e);
      return o.length ? ''.concat(o.join(' + '), ' + ...') : t;
    },
    buildKeybindFromEvent = (e, t) => {
      let o = getKeybindModifiers(e),
        i = ['Plus', ')', '!', '@', '#', '$', '%', '^', '&', '*', '(', ':', '<', '_', '>', '?', '~', '{', '|', '}', '"'].includes(t);
      return (i ? o.filter(e => 'Shift' !== e) : o).concat(t).join('+');
    },
    getKeybindTokenFromEvent = e => {
      if ('+' === e.key || 'NumpadAdd' === e.code) return 'Plus';
      let t = keybindNamedKeyMap[e.key];
      if (t) return t;
      if (1 === e.key?.length) {
        let t = e.key.toUpperCase();
        if (/^[0-9A-Z)!@#$%^&*(:<_>?~{|}";=,\-./`\[\\\]']$/.test(t)) return t;
      }
      if (/^Key[A-Z]$/.test(e.code)) return e.code.slice(3);
      if (/^Digit[0-9]$/.test(e.code)) return e.code.slice(5);
      if (/^F([1-9]|1[0-9]|2[0-4])$/.test(e.code)) return e.code;
      return keybindCodeMap[e.code] ?? null;
    },
    settingBarWithKeybindRecorder = e => {
      let {
          title: t,
          description: o,
          onChange: i,
          value: l,
          onRecordingChange: r1,
          disabled: r = !1,
          placeholder: s = 'Не задано',
          recordingPlaceholder: a = 'Нажмите сочетание...',
          clearHint: d = 'Esc - отмена, Backspace - сброс'
        } = e,
        [u, p] = (0, pulseReactRuntime.useState)(!1),
        [h, f] = (0, pulseReactRuntime.useState)(a),
        x = (0, pulseReactRuntime.useRef)(null),
        ariaId = (0, pulseReactRuntime.useId)(),
        _ = (0, pulseReactRuntime.useCallback)(() => {
          r || p(e => {
            let t = !e;
            return f(a), t;
          });
        }, [r, a]),
        b = (0, pulseReactRuntime.useCallback)(() => {
          p(!1), f(a);
        }, [a]),
        j = (0, pulseReactRuntime.useCallback)(e => {
          if (e.preventDefault(), e.stopPropagation(), e.repeat) return;
          if (['Control', 'Shift', 'Alt', 'Meta'].includes(e.key)) return void f(getKeybindModifierPreview(e, a));
          if (!e.ctrlKey && !e.altKey && !e.shiftKey && !e.metaKey && ('Escape' === e.key || 'Esc' === e.key)) return void b();
          if (!e.ctrlKey && !e.altKey && !e.shiftKey && !e.metaKey && ('Backspace' === e.key || 'Delete' === e.key)) return i(''), void b();
          let t = getKeybindTokenFromEvent(e);
          if (!t) return void f(getKeybindModifierPreview(e, a));
          i(buildKeybindFromEvent(e, t)), b();
        }, [i, b, a]),
        C = (0, pulseReactRuntime.useCallback)(e => {
          f(getKeybindModifierPreview(e, a));
        }, [a]);
      return (0, pulseReactRuntime.useEffect)(() => {
        if (!u) return;
        let e = e => {
            x.current && !x.current.contains(e.target) && b();
          },
          t = () => {
            b();
          };
        return document.addEventListener('keydown', j, !0), document.addEventListener('keyup', C, !0), document.addEventListener('mousedown', e, !0), window.addEventListener('blur', t), () => {
          document.removeEventListener('keydown', j, !0), document.removeEventListener('keyup', C, !0), document.removeEventListener('mousedown', e, !0), window.removeEventListener('blur', t);
        };
      }, [u, j, C, b]), (0, pulseReactRuntime.useEffect)(() => {
        return r1?.(u), () => {
          u && r1?.(!1);
        };
      }, [u, r1]), (0, pulseReactRuntime.useEffect)(() => {
        r && u && b();
      }, [r, u, b]), (0, pulseJsxRuntime.jsxs)('div', {
        className: pulseSettingsItemStyles().root,
        children: [(0, pulseJsxRuntime.jsxs)('div', {
          className: pulseSettingsItemStyles().textContainer,
          children: [(0, pulseJsxRuntime.jsx)(pulseTypography, {
            className: r ? pulseSettingsItemStyles().titleDisabled : pulseSettingsItemStyles().title,
            id: ariaId,
            variant: 'div',
            size: 'l',
            weight: 'bold',
            lineClamp: 1,
            'aria-hidden': !0,
            children: t
          }), (u ? d : o) && (0, pulseJsxRuntime.jsx)(pulseTypography, {
            variant: 'div',
            type: 'text',
            size: 'xs',
            weight: 'medium',
            className: r ? pulseSettingsItemStyles().descriptionDisabled : pulseSettingsItemStyles().description,
            children: u ? d : o
          })]
        }), (0, pulseJsxRuntime.jsx)('div', {
          ref: x,
          role: 'button',
          tabIndex: r ? -1 : 0,
          'aria-describedby': ariaId,
          'aria-pressed': u,
          onClick: _,
          onKeyDown: e => {
            r || u || 'Enter' !== e.key && ' ' !== e.key || (e.preventDefault(), e.stopPropagation(), _());
          },
          className: ''.concat(r ? 'settingBarWithDropdown_button__disabled' : 'settingBarWithDropdown_button', ' Ai2iRN9elHpk_u5splD6 _3_Mxw7Si7j2g4kWjlpR _MWOVuZRvUQdXKTMcOPx'),
          style: {
            minWidth: '12.5rem',
            textAlign: 'center',
            ...(u ? {
              borderColor: 'var(--ym-controls-color-secondary-outline-hovered_stroke)',
              boxShadow: 'inset 0 0 0 1px var(--ym-controls-color-secondary-outline-hovered_stroke)'
            } : {})
          },
          children: u ? h : l ? formatKeybindDisplay(l) : s
        })]
      });
    },
    settingBarWithInput = e => {
      let {
          title: t,
          description: o,
          onChange: i,
          value: l,
          disabled: r = !1,
          placeholder: s = '',
          type: a = 'text',
          min: d,
          max: u,
          step: p,
          inputMode: h
        } = e,
        f = (0, pulseReactRuntime.useId)();
      return (0, pulseJsxRuntime.jsxs)('div', {
        className: pulseSettingsItemStyles().root,
        children: [(0, pulseJsxRuntime.jsxs)('div', {
          className: pulseSettingsItemStyles().textContainer,
          children: [(0, pulseJsxRuntime.jsx)(pulseTypography, {
            className: r ? pulseSettingsItemStyles().titleDisabled : pulseSettingsItemStyles().title,
            id: f,
            variant: 'div',
            size: 'l',
            weight: 'bold',
            lineClamp: 1,
            'aria-hidden': !0,
            children: t
          }), o && (0, pulseJsxRuntime.jsx)(pulseTypography, {
            variant: 'div',
            type: 'text',
            size: 'xs',
            weight: 'medium',
            className: r ? pulseSettingsItemStyles().descriptionDisabled : pulseSettingsItemStyles().description,
            children: o
          })]
        }), (0, pulseJsxRuntime.jsx)('input', {
          type: a,
          value: l ?? '',
          min: d,
          max: u,
          step: p,
          inputMode: h,
          placeholder: s,
          disabled: r,
          'aria-describedby': f,
          onChange: e => {
            i(e.target.value);
          },
          className: ''.concat(r ? 'settingBarWithDropdown_button__disabled' : 'settingBarWithDropdown_button', ' Ai2iRN9elHpk_u5splD6 _3_Mxw7Si7j2g4kWjlpR _MWOVuZRvUQdXKTMcOPx'),
          style: {
            minWidth: '12.5rem',
            textAlign: 'center',
            background: 'transparent'
          }
        })]
      });
    },
    toggleBarWithPathChooser = e => {
      let {
          title: t,
          onChange: o,
          isChecked: i,
          description: l,
          placeholder: r,
          disabled: s,
          inputValue: a,
          onClick: d
        } = e,
        u = (0, pulseReactRuntime.useId)();
      return (0, pulseJsxRuntime.jsxs)('div', {
        style: {
          flexDirection: 'column',
          display: 'flex',
          gap: '5px'
        },
        children: [(0, pulseJsxRuntime.jsxs)('div', {
          className: pulseSettingsItemStyles().root,
          children: [(0, pulseJsxRuntime.jsxs)('div', {
            className: pulseSettingsItemStyles().textContainer,
            children: [(0, pulseJsxRuntime.jsx)(pulseTypography, {
              className: s ? pulseSettingsItemStyles().titleDisabled : pulseSettingsItemStyles().title,
              id: u,
              variant: 'div',
              size: 'l',
              weight: 'bold',
              lineClamp: 1,
              'aria-hidden': !0,
              children: t
            }), l && (0, pulseJsxRuntime.jsx)(pulseTypography, {
              variant: 'div',
              type: 'text',
              size: 'xs',
              weight: 'medium',
              className: s ? pulseSettingsItemStyles().descriptionDisabled : pulseSettingsItemStyles().description,
              children: l
            })]
          }), (0, pulseJsxRuntime.jsx)(pulseToggle, {
            isChecked: i,
            'aria-describedby': u,
            onChange: o
          })]
        }), (0, pulseJsxRuntime.jsxs)('div', {
          className: pulseSettingsItemStyles().root,
          style: {
            justifyContent: 'unset',
            alignItems: 'unset'
          },
          children: [(0, pulseJsxRuntime.jsx)(inputComponent.p, {
            containerClassName: 'ToggleBarWithPathChooser_input',
            value: a,
            placeholder: r,
            disabled: !0
          }), (0, pulseJsxRuntime.jsx)(D.$, {
            radius: 'xxxl',
            color: 'secondary',
            size: 'm',
            onClick: d,
            children: 'Обзор',
            disabled: s
          })]
        })]
      });
    },
    settingBarWithSlider = e => {
      let {
          title: t,
          onChange: o,
          value: i,
          minValue: l,
          maxValue: r,
          step: s,
          description: a,
          disabled: d
        } = e,
        u = (0, pulseReactRuntime.useId)();
      return (0, pulseJsxRuntime.jsxs)('div', {
        className: pulseSettingsItemStyles().root,
        style: {
          flexDirection: 'column',
          alignItems: 'start'
        },
        children: [(0, pulseJsxRuntime.jsxs)('div', {
          className: pulseSettingsItemStyles().textContainer,
          children: [(0, pulseJsxRuntime.jsx)(pulseTypography, {
            className: d ? pulseSettingsItemStyles().titleDisabled : pulseSettingsItemStyles().title,
            id: u,
            variant: 'div',
            size: 'l',
            weight: 'bold',
            lineClamp: 1,
            'aria-hidden': !0,
            children: t
          }), a && (0, pulseJsxRuntime.jsx)(pulseTypography, {
            variant: 'div',
            type: 'text',
            size: 'xs',
            weight: 'medium',
            className: d ? pulseSettingsItemStyles().descriptionDisabled : pulseSettingsItemStyles().description,
            children: a
          })]
        }), (0, pulseJsxRuntime.jsxs)('div', {
          style: {
            width: '-webkit-fill-available'
          },
          children: [(0, pulseJsxRuntime.jsx)(pulseTypography, {
            style: {
              textAlign: 'end'
            },
            variant: 'div',
            type: 'text',
            size: 'xs',
            weight: 'medium',
            className: d ? pulseSettingsItemStyles().descriptionDisabled : pulseSettingsItemStyles().description,
            children: i
          }), (0, pulseJsxRuntime.jsx)(sliderComponent.A, {
            thumbSize: 's',
            trackSize: 's',
            value: i,
            minValue: l ?? 0,
            maxValue: r ?? 2,
            secondaryValue: r ?? 1,
            step: s ?? 0.01,
            disabled: d,
            onChange: o,
            'aria-describedby': u
          })]
        })]
      });
    },
    createGlobalShortcutDraftId = (e = 'shortcut') => ''.concat(e, '_', Date.now(), '_', Math.random().toString(36).slice(2, 9)),
    globalShortcutFallbackActions = ['TOGGLE_PLAY', 'PLAY', 'PAUSE', 'MOVE_FORWARD', 'MOVE_BACKWARD', 'TOGGLE_REPEAT', 'REPEAT_NONE', 'REPEAT_CONTEXT', 'REPEAT_ONE', 'TOGGLE_SHUFFLE', 'SHUFFLE', 'SHUFFLE_NONE', 'TOGGLE_LIKE', 'LIKE', 'LIKE_NONE', 'TOGGLE_DISLIKE', 'DISLIKE', 'DISLIKE_NONE', 'INCREASE_VOLUME', 'DECREASE_VOLUME', 'SET_VOLUME', 'SET_PROGRESS'],
    globalShortcutActionLabels = {
      PLAY: 'Плей',
      PAUSE: 'Пауза',
      TOGGLE_PLAY: 'Плей/Пауза',
      MOVE_FORWARD: 'Следующий трек',
      MOVE_BACKWARD: 'Предыдущий трек',
      TOGGLE_LIKE: 'Переключить Лайк',
      LIKE: 'Поставить лайк',
      LIKE_NONE: 'Снять лайк',
      TOGGLE_DISLIKE: 'Переключить Дизлайк',
      DISLIKE: 'Поставить дизлайк',
      DISLIKE_NONE: 'Снять дизлайк',
      TOGGLE_REPEAT: 'Переключить Повтор',
      REPEAT_NONE: 'Повтор выкл.',
      REPEAT_CONTEXT: 'Повтор плейлиста',
      REPEAT_ONE: 'Повтор трека',
      TOGGLE_SHUFFLE: 'Переключить Шафл',
      SHUFFLE: 'Включить шафл',
      SHUFFLE_NONE: 'Выключить шафл',
      INCREASE_VOLUME: 'Увеличить громкость',
      DECREASE_VOLUME: 'Уменьшить громкость',
      SET_VOLUME: 'Громкость',
      SET_PROGRESS: 'Позиция'
    },
    globalShortcutActionDescriptions = {
      PLAY: 'Запускает воспроизведение.',
      PAUSE: 'Ставит воспроизведение на паузу.',
      TOGGLE_PLAY: 'Переключает воспроизведение и паузу.',
      MOVE_FORWARD: 'Переключает на следующий трек.',
      MOVE_BACKWARD: 'Переключает на предыдущий трек.',
      TOGGLE_LIKE: 'Переключает состояние лайка.',
      LIKE: 'Ставит лайк текущему треку.',
      LIKE_NONE: 'Снимает лайк с текущего трека.',
      TOGGLE_DISLIKE: 'Переключает дизлайк.',
      DISLIKE: 'Ставит дизлайк текущему треку.',
      DISLIKE_NONE: 'Снимает дизлайк с текущего трека.',
      TOGGLE_REPEAT: 'Переключает режим повтора.',
      REPEAT_NONE: 'Выключает повтор.',
      REPEAT_CONTEXT: 'Включает повтор текущего списка.',
      REPEAT_ONE: 'Включает повтор текущего трека.',
      TOGGLE_SHUFFLE: 'Переключает шафл.',
      SHUFFLE: 'Включает шафл.',
      SHUFFLE_NONE: 'Выключает шафл.',
      INCREASE_VOLUME: 'Увеличивает громкость на заданное ниже количество процентов.',
      DECREASE_VOLUME: 'Уменьшает громкость на заданное ниже количество процентов.',
      SET_VOLUME: 'Устанавливает громкость. Ниже задаётся значение от 0 до 100.',
      SET_PROGRESS: 'Перематывает трек. Ниже задаётся позиция в секундах.'
    },
    globalShortcutVolumePercentActions = ['SET_VOLUME', 'INCREASE_VOLUME', 'DECREASE_VOLUME'],
    globalShortcutActionsWithValue = [...globalShortcutVolumePercentActions, 'SET_PROGRESS'],
    globalShortcutActionDefaultValues = {
      SET_VOLUME: '50',
      INCREASE_VOLUME: '5',
      DECREASE_VOLUME: '5',
      SET_PROGRESS: '0'
    },
    globalShortcutActionValueMeta = {
      SET_VOLUME: {
        description: 'Процент громкости от 0 до 100.',
        placeholder: '50',
        min: 0,
        max: 100,
        step: 1,
        inputMode: 'numeric'
      },
      INCREASE_VOLUME: {
        description: 'Шаг увеличения громкости в процентах от 0 до 100.',
        placeholder: '5',
        min: 0,
        max: 100,
        step: 1,
        inputMode: 'numeric'
      },
      DECREASE_VOLUME: {
        description: 'Шаг уменьшения громкости в процентах от 0 до 100.',
        placeholder: '5',
        min: 0,
        max: 100,
        step: 1,
        inputMode: 'numeric'
      },
      SET_PROGRESS: {
        description: 'Позиция трека в секундах.',
        placeholder: '0',
        min: 0,
        step: 1,
        inputMode: 'numeric'
      }
    },
    globalShortcutActionNeedsValue = e => globalShortcutActionsWithValue.includes(e),
    normalizeGlobalShortcutValue = (e, t) => {
      if (!globalShortcutActionNeedsValue(e)) return ''.concat(null == t ? '' : t);
      let o = ''.concat(null == t ? '' : t).replace(',', '.').replace(/[^0-9.]/g, ''),
        i = o.split('.'),
        l = i.shift() ?? '',
        r = i.length ? ''.concat(l, '.', i.join('')) : l;
      if (!r) return '';
      let s = Number(r);
      return Number.isFinite(s) ? globalShortcutVolumePercentActions.includes(e) ? ''.concat(Math.min(Math.max(s, 0), 100)) : ''.concat(Math.max(s, 0)) : r;
    },
    getAvailableGlobalShortcutActions = () => {
      let e = window.PLAYER_ACTIONS ? Object.values(window.PLAYER_ACTIONS) : globalShortcutFallbackActions;
      return Array.from(new Set(e.filter(e => 'string' == typeof e && e)));
    },
    buildGlobalShortcutActionOptions = (e = []) => {
      let t = Array.from(new Set(getAvailableGlobalShortcutActions().concat(e.filter(e => 'string' == typeof e && e))));
      return [{
        value: '',
        label: 'Выберите действие',
        description: 'Хоткей не сохранится, пока действие не выбрано.'
      }].concat(t.map(e => ({
        value: e,
        label: globalShortcutActionLabels[e] ?? e,
        description: globalShortcutActionDescriptions[e]
      })));
    },
    createGlobalShortcutCommandDraft = (e = '', t) => ({
      id: createGlobalShortcutDraftId('action'),
      action: e,
      value: void 0 !== t ? t : globalShortcutActionNeedsValue(e) ? globalShortcutActionDefaultValues[e] ?? '' : ''
    }),
    createEmptyGlobalShortcutDraft = () => ({
      id: createGlobalShortcutDraftId('shortcut'),
      accelerator: '',
      commands: [createGlobalShortcutCommandDraft()]
    }),
    parseGlobalShortcutCommandToken = e => {
      if ('string' != typeof e || !e.trim()) return null;
      let t = e.indexOf('|'),
        o = (-1 === t ? e : e.slice(0, t)).trim(),
        i = (-1 === t ? '' : e.slice(t + 1)).trim();
      return o ? {
        id: createGlobalShortcutDraftId('action'),
        action: o,
        value: i
      } : null;
    },
    parseGlobalShortcutsConfig = e => {
      if (!e || 'object' != typeof e) return [];
      return Object.entries(e).reduce((t, [o, i]) => {
        if ('enable' === o) return t;
        let l = 'string' == typeof o ? o.split(' ').map(parseGlobalShortcutCommandToken).filter(Boolean) : [],
          r = l.length ? l : [createGlobalShortcutCommandDraft()];
        return t.push({
          id: createGlobalShortcutDraftId('shortcut'),
          accelerator: 'string' == typeof i ? i : '',
          commands: r
        }), t;
      }, []);
    },
    serializeGlobalShortcutCommand = e => {
      if (!e || 'string' != typeof e.action || !e.action.trim()) return null;
      let t = e.action.trim();
      if (!globalShortcutActionNeedsValue(t)) return t;
      let o = normalizeGlobalShortcutValue(t, e.value);
      return ''.concat(t, '|', o || globalShortcutActionDefaultValues[t] || '0');
    },
    serializeGlobalShortcutsConfig = (e, t) => {
      let o = {
        enable: Boolean(t)
      };
      return e.forEach(e => {
        let t = 'string' == typeof e.accelerator ? e.accelerator.trim() : '',
          i = e.commands.map(serializeGlobalShortcutCommand).filter(Boolean);
        t && i.length && (o[i.join(' ')] = t);
      }), o;
    },
    getGlobalShortcutValueMeta = e => globalShortcutActionValueMeta[e] ?? {
      description: 'Дополнительное значение действия.',
      placeholder: ''
    },
    globalShortcutsSettings = (0, pulseMobxRuntime.PA)(() => {
      let {
          formatMessage: formatMessage
        } = (0, pulseIntlRuntime.A)(),
        {
          modals: {
            globalShortcutsSettingsModal: modal
          }
        } = (0, pulseSettingsRuntime.Pjs)(),
        [isGlobalShortcutsEnabled, setIsGlobalShortcutsEnabled] = (0, pulseReactRuntime.useState)(Boolean(window.nativeSettings.get('modSettings.globalShortcuts.enable'))),
        [shortcutItems, setShortcutItems] = (0, pulseReactRuntime.useState)(() => parseGlobalShortcutsConfig(window.nativeSettings.get('modSettings.globalShortcuts'))),
        isGlobalShortcutsEnabledRef = (0, pulseReactRuntime.useRef)(Boolean(window.nativeSettings.get('modSettings.globalShortcuts.enable'))),
        recordingIdsRef = (0, pulseReactRuntime.useRef)(new Set()),
        isRecordingRef = (0, pulseReactRuntime.useRef)(!1),
        extraActions = (0, pulseReactRuntime.useMemo)(() => shortcutItems.reduce((e, t) => {
          t.commands.forEach(t => {
            t.action && !e.includes(t.action) && e.push(t.action);
          });
          return e;
        }, []), [shortcutItems]),
        actionOptions = (0, pulseReactRuntime.useMemo)(() => buildGlobalShortcutActionOptions(extraActions), [extraActions]),
        syncGlobalShortcutsFromStore = (0, pulseReactRuntime.useCallback)(() => {
          let e = window.nativeSettings.get('modSettings.globalShortcuts') ?? {};
          isGlobalShortcutsEnabledRef.current = Boolean(e.enable), setIsGlobalShortcutsEnabled(Boolean(e.enable)), setShortcutItems(parseGlobalShortcutsConfig(e));
        }, []),
        persistShortcutItems = (0, pulseReactRuntime.useCallback)((e, t) => {
          window.nativeSettings.set('modSettings.globalShortcuts', serializeGlobalShortcutsConfig(e, void 0 === t ? isGlobalShortcutsEnabledRef.current : t));
        }, []),
        updateShortcutItems = (0, pulseReactRuntime.useCallback)(e => {
          setShortcutItems(t => {
            let o = 'function' == typeof e ? e(t) : e;
            return persistShortcutItems(o), o;
          });
        }, [persistShortcutItems]),
        onGlobalShortcutsEnabledChange = (0, pulseReactRuntime.useCallback)(e => {
          isGlobalShortcutsEnabledRef.current = e, setIsGlobalShortcutsEnabled(e), window.nativeSettings.set('modSettings.globalShortcuts.enable', e);
        }, []),
        onRecorderStateChange = (0, pulseReactRuntime.useCallback)((e, t) => {
          let o = recordingIdsRef.current;
          t ? o.add(e) : o.delete(e);
          let i = o.size > 0;
          i !== isRecordingRef.current && (isRecordingRef.current = i, window.globalShortcutsControl?.setRecordingState?.(i));
        }, []),
        onAcceleratorChange = (0, pulseReactRuntime.useCallback)((e, t) => {
          updateShortcutItems(o => o.map(o => o.id !== e ? o : {
            ...o,
            accelerator: t
          }));
        }, [updateShortcutItems]),
        onRemoveShortcut = (0, pulseReactRuntime.useCallback)(e => {
          updateShortcutItems(t => t.filter(t => t.id !== e));
        }, [updateShortcutItems]),
        onAddActionToShortcut = (0, pulseReactRuntime.useCallback)(e => {
          updateShortcutItems(t => t.map(t => t.id !== e ? t : {
            ...t,
            commands: t.commands.concat(createGlobalShortcutCommandDraft())
          }));
        }, [updateShortcutItems]),
        onRemoveActionFromShortcut = (0, pulseReactRuntime.useCallback)((e, t) => {
          updateShortcutItems(o => o.map(o => {
            if (o.id !== e) return o;
            let i = o.commands.filter(e => e.id !== t);
            return {
              ...o,
              commands: i.length ? i : [createGlobalShortcutCommandDraft()]
            };
          }));
        }, [updateShortcutItems]),
        onActionChange = (0, pulseReactRuntime.useCallback)((e, t, o) => {
          updateShortcutItems(i => i.map(i => {
            if (i.id !== e) return i;
            return {
              ...i,
              commands: i.commands.map(e => {
                if (e.id !== t) return e;
                let i = ''.concat(null == e.value ? '' : e.value).trim();
                return {
                  ...e,
                  action: o,
                  value: o ? globalShortcutActionNeedsValue(o) ? i || globalShortcutActionDefaultValues[o] || '' : '' : ''
                };
              })
            };
          }));
        }, [updateShortcutItems]),
        onActionValueChange = (0, pulseReactRuntime.useCallback)((e, t, o) => {
          updateShortcutItems(i => i.map(i => {
            if (i.id !== e) return i;
            return {
              ...i,
              commands: i.commands.map(e => e.id !== t ? e : {
                ...e,
                value: normalizeGlobalShortcutValue(e.action, o)
              })
            };
          }));
        }, [updateShortcutItems]),
        onAddShortcut = (0, pulseReactRuntime.useCallback)(() => {
          setShortcutItems(e => e.concat(createEmptyGlobalShortcutDraft()));
        }, []);
      return (0, pulseReactRuntime.useEffect)(() => {
        if (modal.isOpened) return void syncGlobalShortcutsFromStore();
        isRecordingRef.current && (recordingIdsRef.current.clear(), isRecordingRef.current = !1, window.globalShortcutsControl?.setRecordingState?.(!1));
      }, [modal.isOpened, syncGlobalShortcutsFromStore]), (0, pulseReactRuntime.useEffect)(() => {
        return () => {
          isRecordingRef.current && (recordingIdsRef.current.clear(), isRecordingRef.current = !1, window.globalShortcutsControl?.setRecordingState?.(!1));
        };
      }, []), (0, pulseJsxRuntime.jsx)(pulseModal, {
        className: ev().root,
        headerClassName: ev().modalHeader,
        contentClassName: ''.concat(ev().modalContent, ' Modal_content_no_right_padding'),
        title: 'Глобальные горячие клавиши',
        style: {
          maxWidth: '38.0rem',
          width: '38.0rem'
        },
        open: modal.isOpened,
        onOpenChange: modal.onOpenChange,
        onClose: modal.close,
        size: 'fitContent',
        placement: 'center',
        overlayColor: 'full',
        labelClose: formatMessage({
          id: 'interface-actions.close'
        }),
        children: (0, pulseJsxRuntime.jsxs)('div', {
          style: {
            width: '36.5rem',
            maxHeight: '30rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '0.75rem'
          },
          children: [(0, pulseJsxRuntime.jsx)('div', {
            style: {
              paddingRight: '0.75rem'
            },
            children: (0, pulseJsxRuntime.jsx)(em, {
              title: 'Включить глобальные горячие клавиши',
              description: 'Во время записи регистрация временно отключается, чтобы не было конфликтов с уже назначенными сочетаниями.',
              onChange: onGlobalShortcutsEnabledChange,
              isChecked: isGlobalShortcutsEnabled
            })
          }), (0, pulseJsxRuntime.jsxs)('ul', {
            className: ''.concat(ev().list, ' PulseSync_experimentsListScroll'),
            style: {
              display: 'flex',
              flexDirection: 'column',
              gap: '0.75rem',
              paddingRight: '0.35rem'
            },
            children: [(0, pulseJsxRuntime.jsx)('li', {
              style: {
                listStyle: 'none',
                display: 'flex',
                justifyContent: 'flex-end'
              },
              children: (0, pulseJsxRuntime.jsx)(D.$, {
                style: {
                  padding: 'var(--ym-spacer-size-xl)'
                },
                contentContainerClassName: 'justify_center',
                radius: 'm',
                color: 'secondary',
                size: 'm',
                isBlock: true,
                withOutline: true,
                variant: 'outline',
                icon: (0, pulseJsxRuntime.jsx)(pulseIcon, {
                  variant: 'add',
                  size: 'xxs'
                }),
                onClick: onAddShortcut,
                children: 'Добавить хоткей'
              })
            }), !shortcutItems.length && (0, pulseJsxRuntime.jsx)('li', {
              style: {
                listStyle: 'none',
                padding: '0.875rem 1rem',
                borderRadius: '1rem',
                background: 'var(--ym-surface-color-primary-enabled-list)'
              },
              children: (0, pulseJsxRuntime.jsx)(pulseTypography, {
                variant: 'div',
                type: 'text',
                size: 'xs',
                weight: 'medium',
                children: 'Пока нет настроенных хоткеев.'
              })
            }), ...shortcutItems.toReversed().map((shortcutItem, shortcutIndex) => (0, pulseJsxRuntime.jsx)('li', {
              style: {
                listStyle: 'none',
                display: 'flex',
                flexDirection: 'column',
                padding: '0.875rem',
                borderRadius: '1rem',
                background: 'var(--ym-surface-color-primary-enabled-list)',
                border: '1px solid var(--ym-controls-color-secondary-outline-default-stroke)'
              },
              children: (0, pulseJsxRuntime.jsxs)('div', {
                style: {
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.75rem'
                },
                children: [(0, pulseJsxRuntime.jsx)('div', {
                  style: {
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    gap: '0.5rem'
                  },
                  children: [(0, pulseJsxRuntime.jsx)(pulseTypography, {
                    variant: 'div',
                    size: 'm',
                    weight: 'bold',
                    children: 'Хоткей '.concat(shortcutItems.length - shortcutIndex)
                  }), (0, pulseJsxRuntime.jsx)(D.$, {
                    radius: 'm',
                    color: 'secondary',
                    size: 'xxs',
                    icon: (0, pulseJsxRuntime.jsx)(pulseIcon, {
                      variant: 'bucket',
                      size: 'xxs'
                    }),
                    onClick: () => {
                      onRemoveShortcut(shortcutItem.id);
                    },
                    children: 'Удалить хоткей'
                  })]
                }), (0, pulseJsxRuntime.jsx)(settingBarWithKeybindRecorder, {
                  title: 'Сочетание',
                  description: 'Нажмите справа и введите комбинацию. Esc отменяет запись, Backspace/Delete очищает поле.',
                  value: shortcutItem.accelerator,
                  onChange: e => {
                    onAcceleratorChange(shortcutItem.id, e);
                  },
                  onRecordingChange: e => {
                    onRecorderStateChange(shortcutItem.id, e);
                  }
                }), ...shortcutItem.commands.map((commandItem, commandIndex) => {
                  let valueMeta = getGlobalShortcutValueMeta(commandItem.action);
                  return (0, pulseJsxRuntime.jsxs)('div', {
                    style: {
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '0.5rem'
                    },
                    children: [(0, pulseJsxRuntime.jsxs)('div', {
                      style: {
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem'
                      },
                      children: [(0, pulseJsxRuntime.jsx)('div', {
                        style: {
                          flex: 1
                        },
                        children: (0, pulseJsxRuntime.jsx)(settingBarWithDropdown, {
                          title: 'Действие '.concat(commandIndex + 1),
                          description: 'Что должно произойти после нажатия.',
                          value: commandItem.action,
                          onChange: e => {
                            onActionChange(shortcutItem.id, commandItem.id, e);
                          },
                          options: actionOptions,
                          direction: shortcutIndex === shortcutItems.length - 1 ? 'top' : 'bottom',
                          buttonStyle: {
                            minWidth: '12.5rem',
                            textAlign: 'center'
                          }
                        })
                      }), shortcutItem.commands.length > 1 && (0, pulseJsxRuntime.jsx)(D.$, {
                        radius: 'm',
                        color: 'secondary',
                        variant: 'outline',
                        withHover: true,
                        size: 'xxs',
                        icon: (0, pulseJsxRuntime.jsx)(pulseIcon, {
                          variant: 'bucket',
                          size: 'xxs'
                        }),
                        'aria-label': 'Удалить действие',
                        title: 'Удалить действие',
                        onClick: () => {
                          onRemoveActionFromShortcut(shortcutItem.id, commandItem.id);
                        }
                      })]
                    }), globalShortcutActionNeedsValue(commandItem.action) && (0, pulseJsxRuntime.jsx)(settingBarWithInput, {
                      title: 'Значение',
                      description: valueMeta.description,
                      value: commandItem.value,
                      onChange: e => {
                        onActionValueChange(shortcutItem.id, commandItem.id, e);
                      },
                      placeholder: valueMeta.placeholder,
                      type: 'number',
                      min: valueMeta.min,
                      max: valueMeta.max,
                      step: valueMeta.step,
                      inputMode: valueMeta.inputMode
                    })]
                  }, commandItem.id);
                }), (0, pulseJsxRuntime.jsxs)('div', {
                  style: {
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'flex-end',
                    gap: '0.5rem'
                  },
                  children: [(0, pulseJsxRuntime.jsx)(D.$, {
                    contentContainerClassName: 'justify_center',
                    radius: 'm',
                    color: 'secondary',
                    size: 'm',
                    isBlock: true,
                    withOutline: true,
                    variant: 'outline',
                    icon: (0, pulseJsxRuntime.jsx)(pulseIcon, {
                      variant: 'add',
                      size: 'xxs'
                    }),
                    onClick: () => {
                      onAddActionToShortcut(shortcutItem.id);
                    },
                    children: 'Добавить действие'
                  })]
                })]
              })
            }, shortcutItem.id))]
          })]
        })
      });
    }),
    systemSettings = (0, pulseMobxRuntime.PA)(() => {
      let {
          formatMessage: e
        } = (0, pulseIntlRuntime.A)(),
        {
          modals: {
            systemSettingsModal: t
          }
        } = (0, pulseSettingsRuntime.Pjs)(),
        {
          notify: o
        } = (0, pulseSettingsRuntime.lkh)(),
        [isHardwareAccelerationEnabled, setIsHardwareAccelerationEnabled] = (0, pulseReactRuntime.useState)(window.nativeSettings.get('modSettings.enableHardwareAcceleration')),
        [angleEngine, setAngleEngine] = (0, pulseReactRuntime.useState)(window.nativeSettings.get('modSettings.hardwareAcceleration.angleEngine')),
        onPreventDisplaySleepToggle = (0, pulseReactRuntime.useCallback)(e => {
          console.log('preventDisplaySleep toggled. Value: ', e);
          window.nativeSettings.set('modSettings.window.preventDisplaySleep', e);
        }, []),
        onSendAnonymizedMetricsToggle = (0, pulseReactRuntime.useCallback)(e => {
          console.log('sendModAnonymizedMetrics toggled. Value: ', e);
          window.nativeSettings.set('sendModAnonymizedMetrics', e);
          o((0, pulseJsxRuntime.jsx)(pulseSettingsUi.hT, {
            error: 'Для применения этой настройки требуется перезапуск приложения'
          }), {
            containerId: pulseSettingsRuntime.uQT.ERROR
          });
        }, [o]),
        onAutoStartupToggle = (0, pulseReactRuntime.useCallback)(async e => {
          console.log('autoStartup toggled. Value: ', e);
          window.nativeSettings.set('modSettings.window.autoStartup', e);
          window.autoStartupStatus?.(e);
        }, []),
        onMinimizedStartToggle = (0, pulseReactRuntime.useCallback)(async e => {
          console.log('minimizedStart toggled. Value: ', e);
          window.nativeSettings.set('modSettings.window.minimizedStart', e);
        }, []),
        onEnableHardwareAccelerationToggle = (0, pulseReactRuntime.useCallback)(e => {
          console.log('enableHardwareAcceleration toggled. Value: ', e);
          setIsHardwareAccelerationEnabled(e);
          window.nativeSettings.set('modSettings.enableHardwareAcceleration', e);
          o((0, pulseJsxRuntime.jsx)(pulseSettingsUi.hT, {
            error: 'Для применения этой настройки требуется перезапуск приложения'
          }), {
            containerId: pulseSettingsRuntime.uQT.ERROR
          });
        }, [o]),
        onAngleEngineChange = (0, pulseReactRuntime.useCallback)(e => {
          console.log('angleEngine changed. Value: ', e);
          setAngleEngine(e);
          window.nativeSettings.set('modSettings.hardwareAcceleration.angleEngine', e);
          o((0, pulseJsxRuntime.jsx)(pulseSettingsUi.hT, {
            error: 'Для применения этой настройки требуется перезапуск приложения'
          }), {
            containerId: pulseSettingsRuntime.uQT.ERROR
          });
        }, [o]);
      return (0, pulseJsxRuntime.jsx)(pulseModal, {
        className: ev().list,
        headerClassName: ev().modalHeader,
        contentClassName: ''.concat(ev().modalContent),
        title: 'Системные настройки',
        open: t.isOpened,
        onOpenChange: t.onOpenChange,
        onClose: t.close,
        size: 'fitContent',
        placement: 'center',
        overlayColor: 'full',
        labelClose: e({
          id: 'interface-actions.close'
        }),
        children: (0, pulseJsxRuntime.jsxs)('ul', {
          className: ''.concat(eb().root, ' ').concat(ev().list),
          style: {
            width: '34.125rem',
            maxHeight: '37.5rem',
            gap: 0
          },
          children: [(0, pulseJsxRuntime.jsx)('li', {
            className: eb().item,
            children: (0, pulseJsxRuntime.jsx)(em, {
              title: 'Включить аппаратное ускорение',
              description: 'Настоятельно рекомендуется не выключать. Отключайте только если ни одни вариант настроек ниже не помог.',
              onChange: onEnableHardwareAccelerationToggle,
              isChecked: isHardwareAccelerationEnabled
            })
          }), (0, pulseJsxRuntime.jsx)('li', {
            className: eb().item,
            children: (0, pulseJsxRuntime.jsx)(settingBarWithDropdown, {
              title: 'API аппаратного ускорения',
              description: 'Изменение может помочь в некоторых случаях, пробуйте по убыванию в списке.',
              onChange: onAngleEngineChange,
              disabled: !isHardwareAccelerationEnabled,
              value: angleEngine,
              direction: 'bottom',
              options: [{
                value: 'default',
                label: 'Авто'
              }, {
                value: 'd3d11',
                label: 'DirectX 11'
              }, {
                value: 'd3d11on12',
                label: 'DirectX 11 on 12'
              }, {
                value: 'gl',
                label: 'OpenGL'
              }, {
                value: 'd3d9',
                label: 'DirectX 9'
              }]
            })
          }), (0, pulseJsxRuntime.jsx)('li', {
            className: eb().item,
            children: (0, pulseJsxRuntime.jsx)(em, {
              title: 'Предотвращать отключение монитора',
              description: 'Если включено и окно ЯМ видно на экране, он не уйдёт в сон от бездействия',
              onChange: onPreventDisplaySleepToggle,
              isChecked: window.nativeSettings.getAsync('modSettings.window.preventDisplaySleep')
            })
          }), (0, pulseJsxRuntime.jsx)('li', {
            className: eb().item,
            children: (0, pulseJsxRuntime.jsx)(em, {
              title: 'Автозапуск при старте системы',
              description: 'Приложение будет запускаться автоматически при включении системы.',
              onChange: onAutoStartupToggle,
              isChecked: window.nativeSettings.getAsync('modSettings.window.autoStartup')
            })
          }), (0, pulseJsxRuntime.jsx)('li', {
            className: eb().item,
            children: (0, pulseJsxRuntime.jsx)(em, {
              title: 'Автоматический запуск свернутым',
              description: 'Если включено, приложение будет запускаться свернутым в трей.',
              onChange: onMinimizedStartToggle,
              isChecked: window.nativeSettings.getAsync('modSettings.window.minimizedStart')
            })
          }), (0, pulseJsxRuntime.jsx)('li', {
            className: eb().item,
            children: (0, pulseJsxRuntime.jsx)(em, {
              title: 'Отправлять анонимную статистику',
              description: 'Отключит отправку статистики Мода его разработчику. Не влияет на метрику Яндекса',
              onChange: onSendAnonymizedMetricsToggle,
              isChecked: window.nativeSettings.getAsync('sendModAnonymizedMetrics')
            })
          })]
        })
      });
    }),
    playerSettings = (0, pulseMobxRuntime.PA)(() => {
      let {
          formatMessage: e
        } = (0, pulseIntlRuntime.A)(),
        {
          modals: {
            playerSettingsModal: t
          },
          sonataState: sonataState
        } = (0, pulseSettingsRuntime.Pjs)(),
        {
          notify: o
        } = (0, pulseSettingsRuntime.lkh)(),
        [isYandexStationCastToggleLocked, setIsYandexStationCastToggleLocked] = (0, pulseReactRuntime.useState)(!1),
        onSwapDislikeToggle = (0, pulseReactRuntime.useCallback)(async e => {
          console.log('modSettings.playerBarEnhancement.changeDislikeButtonPos toggled. Value: ', e);
          window.nativeSettings.set('modSettings.playerBarEnhancement.changeDislikeButtonPos', e);
          setTimeout(() => {
            window.forcePlayerBarRerender?.();
          }, 100);
        }, []),
        onTimestampsToggle = (0, pulseReactRuntime.useCallback)(async e => {
          console.log('alwaysShowTimestamps toggled. Value: ', e);
          window.nativeSettings.set('modSettings.playerBarEnhancement.alwaysShowTimestamps', e);
          setTimeout(() => {
            window.forcePlayerBarRerender?.();
          }, 100);
        }, [sonataState]),
        onShowCodecToggle = (0, pulseReactRuntime.useCallback)(async e => {
          console.log('showCodecInsteadOfQualityMark toggled. Value: ', e);
          window.nativeSettings.set('modSettings.playerBarEnhancement.showCodecInsteadOfQualityMark', e);
          setTimeout(() => {
            window.forcePlayerBarRerender?.();
          }, 100);
        }, []),
        onDisablePerTrackColorsToggle = (0, pulseReactRuntime.useCallback)(async e => {
          console.log('modSettings.playerBarEnhancement.disablePerTrackColors toggled. Value: ', e);
          window.nativeSettings.set('modSettings.playerBarEnhancement.disablePerTrackColors', e);
          setTimeout(() => {
            window.forcePlayerBarRerender?.();
          }, 100);
        }, []),
        onYandexStationCastToggle = (0, pulseReactRuntime.useCallback)(async e => {
          if (isYandexStationCastToggleLocked) return;
          setIsYandexStationCastToggleLocked(!0);
          try {
            console.log('modSettings.playerBarEnhancement.enableYandexStationCast toggled. Value: ', e);
            window.__pulseSyncYandexStationCastEnabled = e;
            window.dispatchEvent?.(new CustomEvent('pulse-sync-yandex-station-cast-setting-change', {
              detail: {
                enabled: e
              }
            }));
            e || (await window.pulseSyncYandexStationCast?.clear?.());
            await window.nativeSettings.set('modSettings.playerBarEnhancement.enableYandexStationCast', e);
            setTimeout(() => {
              window.forcePlayerBarRerender?.();
            }, 100);
          } finally {
            setTimeout(() => {
              setIsYandexStationCastToggleLocked(!1);
            }, 800);
          }
        }, [isYandexStationCastToggleLocked]),
        onAlwaysWideBarToggle = (0, pulseReactRuntime.useCallback)(async e => {
          console.log('modSettings.playerBarEnhancement.alwaysWideBar toggled. Value: ', e);
          window.nativeSettings.set('modSettings.playerBarEnhancement.alwaysWideBar', e);
          o((0, pulseJsxRuntime.jsx)(pulseSettingsUi.hT, {
            error: 'Для применения этой настройки требуется перезапуск приложения'
          }), {
            containerId: pulseSettingsRuntime.uQT.ERROR
          });
        }, [o]),
        onShowOldPlayerBarOnNewWaveToggle = (0, pulseReactRuntime.useCallback)(async e => {
          console.log('modSettings.playerBarEnhancement.showOldPlayerBarOnNewWave toggled. Value: ', e);
          window.nativeSettings.set('modSettings.playerBarEnhancement.showOldPlayerBarOnNewWave', e);
          o((0, pulseJsxRuntime.jsx)(pulseSettingsUi.hT, {
            error: 'Для применения этой настройки требуется перезапуск приложения'
          }), {
            containerId: pulseSettingsRuntime.uQT.ERROR
          });
        }, [o]);
      let playButtonType = (0, pulseReactRuntime.useState)(window.nativeSettings.get('modSettings.playerBarEnhancement.playButtonType') ?? 'yellow'),
        playButtonTypeValue = playButtonType[0],
        s = playButtonType[1],
        communicationTriggersMode = (0, pulseReactRuntime.useState)(window.nativeSettings.get('modSettings.communicationTriggers.mode') ?? 'disabled'),
        communicationTriggersModeValue = communicationTriggersMode[0],
        setCommunicationTriggersMode = communicationTriggersMode[1],
        onPlayButtonTypeChange = (0, pulseReactRuntime.useCallback)(async e => {
          console.log('playButtonType changed. Value: ', e);
          window.nativeSettings.set('modSettings.playerBarEnhancement.playButtonType', e);
          s(e);
          o((0, pulseJsxRuntime.jsx)(pulseSettingsUi.hT, {
            error: 'Для применения этой настройки требуется перезапуск приложения'
          }), {
            containerId: pulseSettingsRuntime.uQT.ERROR
          });
        }, []),
        onCommunicationTriggersModeChange = (0, pulseReactRuntime.useCallback)(async e => {
          console.log('communicationTriggers.mode changed. Value: ', e);
          window.nativeSettings.set('modSettings.communicationTriggers.mode', e);
          setCommunicationTriggersMode(e);
          o((0, pulseJsxRuntime.jsx)(pulseSettingsUi.hT, {
            error: 'Для применения этой настройки требуется перезапуск приложения'
          }), {
            containerId: pulseSettingsRuntime.uQT.ERROR
          });
        }, []);
      return (0, pulseJsxRuntime.jsx)(pulseModal, {
        className: ev().list,
        headerClassName: ev().modalHeader,
        contentClassName: ''.concat(ev().modalContent, ' Modal_content_no_right_padding'),
        title: 'Панель плеера',
        open: t.isOpened,
        onOpenChange: t.onOpenChange,
        onClose: t.close,
        size: 'fitContent',
        placement: 'center',
        overlayColor: 'full',
        labelClose: e({
          id: 'interface-actions.close'
        }),
        children: (0, pulseJsxRuntime.jsxs)('ul', {
          className: ''.concat(eb().root, ' ').concat(ev().list, ' PulseSync_experimentsListScroll'),
          style: {
            width: '29.125rem',
            gap: 0,
            maxHeight: 'min(36rem, calc(100vh - 12rem))'
          },
          children: [(0, pulseJsxRuntime.jsx)('li', {
            className: eb().item,
            children: (0, pulseJsxRuntime.jsx)(settingBarWithDropdown, {
              title: 'Цвет кнопки воспроизведения',
              description: 'Выберите цвет кнопки плеера',
              onChange: onPlayButtonTypeChange,
              value: playButtonTypeValue,
              direction: 'bottom',
              options: [{
                value: 'yellow',
                label: 'Желтая'
              }, {
                value: 'white',
                label: 'Белая'
              }]
            })
          }), (0, pulseJsxRuntime.jsx)('li', {
            className: eb().item,
            children: (0, pulseJsxRuntime.jsx)(settingBarWithDropdown, {
              title: 'Стартовые предложения',
              description: 'Управляет показом WebNextTriggersV2: нижняя плашка и полноэкранные предложения',
              onChange: onCommunicationTriggersModeChange,
              value: communicationTriggersModeValue,
              direction: 'bottom',
              options: [{
                value: 'disabled',
                label: 'Отключены',
                description: 'Не показывать стартовые предложения'
              }, {
                value: 'all',
                label: 'Все',
                description: 'Показывать плашки и полноэкранные предложения'
              }, {
                value: 'barBelow',
                label: 'Только плашка',
                description: 'Показывать только предложение под панелью плеера'
              }, {
                value: 'fullscreen',
                label: 'Только fullscreen',
                description: 'Показывать только полноэкранное предложение'
              }]
            })
          }), (0, pulseJsxRuntime.jsx)('li', {
            className: eb().item,
            children: (0, pulseJsxRuntime.jsx)(em, {
              title: 'Поменять местами Дизлайк и Лайк',
              description: 'Чтобы их положение соответствовало остальным платформам',
              onChange: onSwapDislikeToggle,
              isChecked: window.nativeSettings.getAsync('modSettings.playerBarEnhancement.changeDislikeButtonPos')
            })
          }), (0, pulseJsxRuntime.jsx)('li', {
            className: eb().item,
            children: (0, pulseJsxRuntime.jsx)(em, {
              title: 'Отображать кодек',
              description: 'Отображает кодек вместо качества трека',
              onChange: onShowCodecToggle,
              isChecked: window.nativeSettings.getAsync('modSettings.playerBarEnhancement.showCodecInsteadOfQualityMark')
            })
          }), (0, pulseJsxRuntime.jsx)('li', {
            className: eb().item,
            children: (0, pulseJsxRuntime.jsx)(em, {
              title: 'Отображать временные метки',
              description: 'Отображать метки независимо от положения курсора',
              onChange: onTimestampsToggle,
              isChecked: window.nativeSettings.getAsync('modSettings.playerBarEnhancement.alwaysShowTimestamps')
            })
          }), (0, pulseJsxRuntime.jsx)('li', {
            className: eb().item,
            children: (0, pulseJsxRuntime.jsx)(em, {
              title: 'Отключить цвета треков',
              description: 'Панель перестанет перекрашиваться под каждый трек',
              onChange: onDisablePerTrackColorsToggle,
              isChecked: window.nativeSettings.getAsync('modSettings.playerBarEnhancement.disablePerTrackColors')
            })
          }), (0, pulseJsxRuntime.jsx)('li', {
            className: eb().item,
            children: (0, pulseJsxRuntime.jsx)(em, {
              title: 'Кнопка Cast и поиск колонок',
              description: 'Показывает кнопку Cast и включает поиск Яндекс Станций в локальной сети',
              onChange: onYandexStationCastToggle,
              isChecked: window.nativeSettings.getAsync('modSettings.playerBarEnhancement.enableYandexStationCast').then(e => e ?? !0),
              disabled: isYandexStationCastToggleLocked
            })
          }), (0, pulseJsxRuntime.jsx)('li', {
            className: eb().item,
            children: (0, pulseJsxRuntime.jsx)(em, {
              title: 'Всегда расширенная',
              description: 'Панель будет всегда широкой, независимо от размера окна приложения',
              onChange: onAlwaysWideBarToggle,
              isChecked: window.nativeSettings.getAsync('modSettings.playerBarEnhancement.alwaysWideBar')
            })
          }), (0, pulseJsxRuntime.jsx)('li', {
            className: eb().item,
            children: (0, pulseJsxRuntime.jsx)(em, {
              title: 'Старая панель в новой Волне',
              description: 'Возвращает классическую панель плеера на новую страницу Моей волны, не скрывая новую',
              onChange: onShowOldPlayerBarOnNewWaveToggle,
              isChecked: window.nativeSettings.getAsync('modSettings.playerBarEnhancement.showOldPlayerBarOnNewWave')
            })
          })]
        })
      });
    }),
    audioSettings = (0, pulseMobxRuntime.PA)(() => {
      let {
          formatMessage: e
        } = (0, pulseIntlRuntime.A)(),
        {
          modals: {
            audioSettingsModal: t
          },
          sonataState: sonataState
        } = (0, pulseSettingsRuntime.Pjs)(),
        a = (0, pulseSettingsRuntime.iIU)(),
        {
          notify: o
        } = (0, pulseSettingsRuntime.lkh)(),
        isWindows = window.PLATFORM === 'win32',
        [yaspTapEnabled, setYaspTapEnabled] = (0, pulseReactRuntime.useState)(() => Boolean(window.nativeSettings.get('modSettings.nativeAudioOutput.enableYaspChunkTap'))),
        [wasapiEnabled, setWasapiEnabled] = (0, pulseReactRuntime.useState)(() => Boolean(window.nativeSettings.get('modSettings.nativeAudioOutput.enableWasapiExclusiveOutput'))),
        [wasapiStatus, setWasapiStatus] = (0, pulseReactRuntime.useState)(null),
        [wasapiDevices, setWasapiDevices] = (0, pulseReactRuntime.useState)([]),
        [selectedWasapiDeviceId, setSelectedWasapiDeviceId] = (0, pulseReactRuntime.useState)(''),
        onYaspTapToggle = (0, pulseReactRuntime.useCallback)(e => {
          setYaspTapEnabled(e);
          Promise.resolve(window.nativeAudioOutput?.setYaspChunkTapEnabled?.(e) ?? window.nativeSettings.set('modSettings.nativeAudioOutput.enableYaspChunkTap', e)).catch(t => {
            setYaspTapEnabled(!e);
            console.error('Failed to change YASP Tap setting:', t);
          });
        }, []),
        onWasapiExclusiveToggle = (0, pulseReactRuntime.useCallback)(e => {
          setWasapiEnabled(e);
          Promise.resolve(window.nativeAudioOutput?.setWasapiExclusiveOutputEnabled?.(e)).catch(t => {
            setWasapiEnabled(!e);
            console.error('Failed to change WASAPI Exclusive setting:', t);
          });
        }, []),
        onWasapiFullVolumeToggle = (0, pulseReactRuntime.useCallback)(e => {
          window.nativeSettings.set('modSettings.nativeAudioOutput.forceWasapiExclusiveFullVolume', e);
        }, []),
        onWasapiDeviceChange = (0, pulseReactRuntime.useCallback)(async e => {
          let t = e || null;
          try {
            await window.nativeAudioOutput?.selectWasapiExclusiveDevice?.(t);
            setSelectedWasapiDeviceId(t ?? '');
          } catch (e) {
            console.error('Failed to select WASAPI Exclusive device:', e);
          }
        }, []),
        onSurroundAudioCompatibilityToggle = (0, pulseReactRuntime.useCallback)(e => {
          console.log('enableSurroundAudioCompatibility toggled. Value: ', e);
          window.nativeSettings.set('modSettings.enableSurroundAudioCompatibility', e);
          o((0, pulseJsxRuntime.jsx)(pulseSettingsUi.hT, {
            error: 'Для применения этой настройки требуется перезапуск приложения'
          }), {
            containerId: pulseSettingsRuntime.uQT.ERROR
          });
        }, [o]),
        onR128NormalizationToggle = (0, pulseReactRuntime.useCallback)(async e => {
          var t;
          console.log('modSettings.r128Normalization toggled. Value: ', e);
          window.nativeSettings.set('modSettings.r128Normalization', e);
          let o = null == (t = null == sonataState ? void 0 : sonataState.state) || null == t.queueState ? void 0 : t.queueState.currentEntity.value,
            i = null == o ? void 0 : o.entity.data.meta.r128,
            r = null == o ? void 0 : o.entity.data.meta,
            s = !i && ('UGC' === (null == r ? void 0 : r.trackSource) || 'OWN_REPLACED_TO_UGC' === (null == r ? void 0 : r.trackSource) || /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(String(null == r ? void 0 : r.id))) ? {
              i: 0,
              tp: 0
            } : i;
          null == a || null == a.graphs || a.graphs.forEach(t => {
            t.setR128Gain(s, e);
          });
        }, [a, sonataState]);
      (0, pulseReactRuntime.useEffect)(() => {
        if (!t.isOpened) return;
        setYaspTapEnabled(Boolean(window.nativeSettings.get('modSettings.nativeAudioOutput.enableYaspChunkTap')));
        setWasapiEnabled(Boolean(window.nativeSettings.get('modSettings.nativeAudioOutput.enableWasapiExclusiveOutput')));
        if (!isWindows) return;
        let e = !1;
        Promise.all([window.nativeAudioOutput?.getWasapiExclusiveStatus?.(), window.nativeAudioOutput?.listWasapiExclusiveDevices?.({
          includeDisabled: !0,
          includeFormats: !0
        }), window.nativeAudioOutput?.getSelectedWasapiExclusiveDeviceId?.()]).then(([t, o, n]) => {
          if (e) return;
          setWasapiStatus(t ?? null);
          setWasapiDevices(Array.isArray(o) ? o : []);
          setSelectedWasapiDeviceId(n ?? '');
        }).catch(t => {
          if (e) return;
          setWasapiStatus({
            available: !1,
            supported: !1,
            loadError: String(t?.message ?? t)
          });
          setWasapiDevices([]);
        });
        return () => {
          e = !0;
        };
      }, [t.isOpened, isWindows]);
      (0, pulseReactRuntime.useEffect)(() => {
        if (!t.isOpened || !isWindows) return;
        let e = null,
          o = !1;
        const refreshDefaultDevice = t => {
          const i = t?.detail?.defaultDeviceChangedAt,
            n = Number(i);
          if (null == i || !Number.isFinite(n) || n === e) return;
          e = n;
          Promise.resolve(window.nativeAudioOutput?.listWasapiExclusiveDevices?.({
            includeDisabled: !0,
            includeFormats: !0
          })).then(e => {
            o || setWasapiDevices(Array.isArray(e) ? e : []);
          }).catch(e => {
            o || console.error('Failed to refresh the system default WASAPI device:', e);
          });
        };
        window.addEventListener('pulse-sync-wasapi-exclusive-output-state-change', refreshDefaultDevice);
        return () => {
          o = !0;
          window.removeEventListener('pulse-sync-wasapi-exclusive-output-state-change', refreshDefaultDevice);
        };
      }, [t.isOpened, isWindows]);
      let wasapiSupported = Boolean(isWindows && wasapiStatus?.available && wasapiStatus?.supported),
        wasapiSectionDisabled = !wasapiSupported || !yaspTapEnabled,
        supports24Bit48000 = e => Array.isArray(e?.supportedFormats) && e.supportedFormats.some(e => e?.sampleRate === 48000 && e?.bitsPerSample === 24 && e?.channels === 2 && e?.float !== !0),
        unsupportedDeviceDescription = '\nУстройство не поддерживает 24 бит / 48 кГц.\nНекоторые треки будут воспроизводиться обычным способом.',
        formatWasapiSampleRate = e => ''.concat(String(Number(e) / 1000).replace('.', ','), ' кГц'),
        getMaximumWasapiFormat = e => {
          let t = Array.isArray(e?.supportedFormats) ? e.supportedFormats.filter(e => e?.float !== !0 && Number(e?.sampleRate) > 0 && Number(e?.bitsPerSample) > 0 && Number(e?.channels) > 0 && Number.isFinite(Number(e?.sampleRate)) && Number.isFinite(Number(e?.bitsPerSample)) && Number.isFinite(Number(e?.channels))) : [];
          const o = t.filter(e => Number(e.channels) === 2);
          if (o.length) t = o;
          return t.slice().sort((e, t) => Number(t.sampleRate) - Number(e.sampleRate) || Number(t.bitsPerSample) - Number(e.bitsPerSample) || Number(t.containerBitsPerSample ?? t.bitsPerSample) - Number(e.containerBitsPerSample ?? e.bitsPerSample))[0] ?? null;
        },
        getWasapiDeviceFormatDescription = e => {
          const t = getMaximumWasapiFormat(e);
          if (!t) return 'Поддерживаемые PCM-форматы не определены.';
          const o = Number(t.bitsPerSample),
            n = Number(t.containerBitsPerSample ?? o),
            i = Number(t.channels),
            l = n !== o ? ''.concat(o, ' бит (контейнер ').concat(n, ' бит)') : ''.concat(o, ' бит');
          return 'До: '.concat(l, ' / ').concat(formatWasapiSampleRate(t.sampleRate));
        },
        getWasapiDeviceDescription = (e, t = !1) => {
          if (!e) return 'Системное устройство вывода будет определено автоматически.';
          const o = [t ? 'Сейчас: '.concat(e.name, '.\n') : null, getWasapiDeviceFormatDescription(e), supports24Bit48000(e) ? null : unsupportedDeviceDescription];
          return o.filter(Boolean).join(' ');
        },
        activeWasapiDevices = wasapiDevices.filter(e => e?.state === 'active'),
        defaultWasapiDevice = activeWasapiDevices.find(e => e.isDefault) ?? activeWasapiDevices.find(e => e.isDefaultConsole) ?? null,
        wasapiDeviceOptions = [{
          value: '',
          label: 'По умолчанию',
          description: getWasapiDeviceDescription(defaultWasapiDevice, !0)
        }, ...activeWasapiDevices.map(e => ({
          value: e.id,
          label: e.name,
          description: getWasapiDeviceDescription(e)
        }))],
        wasapiAvailabilityDescription = !wasapiStatus ? 'Проверяем поддержку WASAPI Exclusive...' : wasapiSupported ? 'Открывает выбранное устройство в эксклюзивном режиме.' : 'WASAPI Exclusive недоступен в этой системе.';
      return (0, pulseJsxRuntime.jsx)(pulseModal, {
        className: ev().list,
        style: {
          maxWidth: '34.375rem',
          height: 'auto'
        },
        title: 'Настройки аудио',
        headerClassName: ev().modalHeader,
        contentClassName: ''.concat(ev().modalContent),
        open: t.isOpened,
        onOpenChange: t.onOpenChange,
        onClose: t.close,
        size: 'fitContent',
        placement: 'center',
        overlayColor: 'full',
        labelClose: e({
          id: 'interface-actions.close'
        }),
        children: (0, pulseJsxRuntime.jsxs)('ul', {
          className: ''.concat(eb().root, ' ').concat(ev().list),
          style: {
            width: '32.125rem',
            maxHeight: '37.5rem',
            gap: 0
          },
          children: [(0, pulseJsxRuntime.jsx)('li', {
            className: eb().item,
            children: (0, pulseJsxRuntime.jsx)(em, {
              title: ['Нормализация громкости', (0, pulseJsxRuntime.jsx)(labeledBubble, {
                label: 'r128',
                tooltip: null
              })],
              description: 'Приводит громкость треков к единому уровню.',
              onChange: onR128NormalizationToggle,
              isChecked: window.nativeSettings.getAsync('modSettings.r128Normalization') ?? !0
            })
          }), (0, pulseJsxRuntime.jsx)('li', {
            className: eb().item,
            children: (0, pulseJsxRuntime.jsx)(em, {
              title: ['Попробовать включить пространственный звук', (0, pulseJsxRuntime.jsx)(labeledBubble, {
                label: 'ALPHA'
              })],
              description: 'Включает поддержку систем 5.1 / 7.1 (Учтите что звук останется в стерео)',
              onChange: onSurroundAudioCompatibilityToggle,
              isChecked: window.nativeSettings.getAsync('modSettings.enableSurroundAudioCompatibility') ?? !1
            })
          }), (0, pulseJsxRuntime.jsx)(settingsCategorySeparator, {
            text: 'YASP'
          }), (0, pulseJsxRuntime.jsx)('li', {
            className: eb().item,
            children: (0, pulseJsxRuntime.jsx)(em, {
              title: ['YASP Tap', (0, pulseJsxRuntime.jsx)(labeledBubble, {
                label: 'ALPHA'
              })],
              description: 'Перехватывает расшифрованные аудио сегменты для анализа качества и нативного вывода.',
              onChange: onYaspTapToggle,
              isChecked: yaspTapEnabled
            })
          }), isWindows && (0, pulseJsxRuntime.jsx)(settingsCategorySeparator, {
            text: 'WASAPI Exclusive'
          }), isWindows && (0, pulseJsxRuntime.jsx)('li', {
            className: eb().item,
            children: (0, pulseJsxRuntime.jsx)(pulseTypography, {
              variant: 'div',
              type: 'text',
              size: 's',
              weight: 'medium',
              style: {
                padding: 'var(--ym-spacer-size-xs) var(--ym-spacer-size-s)',
                color: 'var(--ym-controls-color-secondary-text-enabled)',
                opacity: wasapiSupported ? 0.82 : 0.4,
                'white-space': 'pre-line'
              },
              children: 'WASAPI Exclusive обеспечивает bit-perfect вывод без системного микшера.\nВ этом режиме только Яндекс Музыка сможет выводить звук на выбранное устройство\nКроме того не работают кроссфейд и нормализация громкости.'
            })
          }), isWindows && (0, pulseJsxRuntime.jsx)('li', {
            className: eb().item,
            children: (0, pulseJsxRuntime.jsx)(em, {
              title: ['Включить WASAPI Exclusive', (0, pulseJsxRuntime.jsx)(labeledBubble, {
                label: 'ALPHA',
                disabled: wasapiSectionDisabled
              })],
              description: yaspTapEnabled ? wasapiAvailabilityDescription : 'Сначала включите YASP Tap.',
              onChange: onWasapiExclusiveToggle,
              isChecked: wasapiEnabled,
              disabled: wasapiSectionDisabled
            })
          }), isWindows && (0, pulseJsxRuntime.jsx)('li', {
            className: eb().item,
            children: (0, pulseJsxRuntime.jsx)(em, {
              title: 'Форсировать громкость 100%',
              description: 'Отключает синхронизацию громкости с плеером и выводит WASAPI Exclusive с полной громкостью.',
              onChange: onWasapiFullVolumeToggle,
              isChecked: window.nativeSettings.getAsync('modSettings.nativeAudioOutput.forceWasapiExclusiveFullVolume').then(e => e ?? !1),
              disabled: wasapiSectionDisabled
            })
          }), isWindows && (0, pulseJsxRuntime.jsx)('li', {
            className: eb().item,
            children: (0, pulseJsxRuntime.jsx)(settingBarWithDropdown, {
              title: 'Устройство вывода',
              description: 'Устройство, которое будет открыто в эксклюзивном режиме.',
              direction: 'top',
              value: selectedWasapiDeviceId,
              options: wasapiDeviceOptions,
              onChange: onWasapiDeviceChange,
              disabled: wasapiSectionDisabled,
              layout: 'column',
              buttonStyle: {
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                whiteSpace: 'nowrap'
              }
            })
          })]
        })
      });
    }),
    windowSettings = (0, pulseMobxRuntime.PA)(() => {
      let {
          formatMessage: e
        } = (0, pulseIntlRuntime.A)(),
        {
          modals: {
            windowSettingsModal: t
          }
        } = (0, pulseSettingsRuntime.Pjs)(),
        {
          notify: o
        } = (0, pulseSettingsRuntime.lkh)(),
        onSaveWindowDimensionsToggle = (0, pulseReactRuntime.useCallback)(async e => {
          console.log('saveWindowDimensionsOnRestart toggled. Value: ', e);
          window.nativeSettings.set('modSettings.window.saveWindowDimensionsOnRestart', e);
        }, []),
        onSaveWindowPositionToggle = (0, pulseReactRuntime.useCallback)(async e => {
          console.log('saveWindowPositionOnRestart toggled. Value: ', e);
          window.nativeSettings.set('modSettings.window.saveWindowPositionOnRestart', e);
        }, []),
        onToTrayToggle = (0, pulseReactRuntime.useCallback)(async e => {
          console.log('toTray toggled. Value: ', e);
          window.nativeSettings.set('modSettings.window.toTray', e);
        }, []),
        onTaskBarToggle = (0, pulseReactRuntime.useCallback)(async e => {
          window.nativeSettings.set('modSettings.taskBarExtensions.enable', e);
          o((0, pulseJsxRuntime.jsx)(pulseSettingsUi.hT, {
            error: 'Для применения этой настройки требуется перезапуск приложения'
          }), {
            containerId: pulseSettingsRuntime.uQT.ERROR
          });
        }, [o]),
        onTaskbarExtensionsCoverAsThumbnailToggle = (0, pulseReactRuntime.useCallback)(async e => {
          console.log('taskBarExtensions.coverAsThumbnail toggled. Value: ', e);
          window.nativeSettings.set('modSettings.taskBarExtensions.coverAsThumbnail', e);
          o((0, pulseJsxRuntime.jsx)(pulseSettingsUi.hT, {
            error: 'Для применения этой настройки требуется перезапуск приложения'
          }), {
            containerId: pulseSettingsRuntime.uQT.ERROR
          });
        }, [o]),
        onHidePulseSyncVersionInTitleBarToggle = (0, pulseReactRuntime.useCallback)(async e => {
          console.log('hidePulseSyncVersionInTitleBar toggled. Value: ', e);
          window.nativeSettings.set('modSettings.window.hidePulseSyncVersionInTitleBar', e);
          setHidePulseSyncVersionInTitleBar(e);
        }, []),
        onRemoveMinSizeRestrictionsToggle = (0, pulseReactRuntime.useCallback)(async e => {
          window.nativeSettings.set('modSettings.window.removeMinSizeRestrictions', e);
          o((0, pulseJsxRuntime.jsx)(pulseSettingsUi.hT, {
            error: 'Для применения этой настройки требуется перезапуск приложения'
          }), {
            containerId: pulseSettingsRuntime.uQT.ERROR
          });
        }, [o]);
      let hidePulseSyncVersionInTitleBarState = (0, pulseReactRuntime.useState)(window.nativeSettings.get('modSettings.window.hidePulseSyncVersionInTitleBar') ?? !1),
        hidePulseSyncVersionInTitleBar = hidePulseSyncVersionInTitleBarState[0],
        setHidePulseSyncVersionInTitleBar = hidePulseSyncVersionInTitleBarState[1],
        isPremiumState = (0, pulseReactRuntime.useState)(!1),
        a = isPremiumState[0],
        d = isPremiumState[1];
      (0, pulseReactRuntime.useEffect)(() => {
        window.IS_PREMIUM_USER?.().then(e => d(e));
      }, []);
      let startupPageState = (0, pulseReactRuntime.useState)(window.nativeSettings.get('modSettings.window.startupPage') ?? '/'),
        u = startupPageState[0],
        _ = startupPageState[1],
        onStartupPageChange = (0, pulseReactRuntime.useCallback)(async e => {
          console.log('startupPage changed. Value: ', e);
          window.nativeSettings.set('modSettings.window.startupPage', e);
          _(e);
        }, []);
      return (0, pulseJsxRuntime.jsx)(pulseModal, {
        className: ev().list,
        headerClassName: ev().modalHeader,
        contentClassName: ''.concat(ev().modalContent),
        title: 'Поведение окна',
        open: t.isOpened,
        onOpenChange: t.onOpenChange,
        onClose: t.close,
        size: 'fitContent',
        placement: 'center',
        overlayColor: 'full',
        labelClose: e({
          id: 'interface-actions.close'
        }),
        children: (0, pulseJsxRuntime.jsxs)('ul', {
          className: ''.concat(eb().root, ' ').concat(ev().list),
          style: {
            width: '32.125rem',
            maxHeight: '37.5rem',
            gap: 0
          },
          children: [(0, pulseJsxRuntime.jsx)('li', {
            className: eb().item,
            children: (0, pulseJsxRuntime.jsx)(em, {
              title: 'Снять блокировки минимального размера окна приложения',
              description: 'Позволяет уменьшать окно ниже стандартных 768×650 (до 280×200). Требуется перезапуск приложения',
              onChange: onRemoveMinSizeRestrictionsToggle,
              isChecked: window.nativeSettings.getAsync('modSettings.window.removeMinSizeRestrictions')
            })
          }), (0, pulseJsxRuntime.jsx)('li', {
            className: eb().item,
            children: (0, pulseJsxRuntime.jsx)(settingBarWithDropdown, {
              title: 'Стартовая страница',
              description: 'Страница по умолчанию при запуске',
              onChange: onStartupPageChange,
              value: u,
              direction: 'bottom',
              options: [{
                value: '/',
                label: 'Главная'
              }, {
                value: '/search',
                label: 'Поиск'
              }, window.nativeSettings?.get('modSettings.showNonMusicPage') && {
                value: '/non-music',
                label: 'Подкасты и книги'
              }, {
                value: '/collection',
                label: 'Коллекция'
              }, window.nativeSettings?.get('modSettings.showConcertsTab') && {
                value: '/concerts',
                label: 'Концерты'
              }]
            })
          }), (0, pulseJsxRuntime.jsx)('li', {
            className: eb().item,
            children: (0, pulseJsxRuntime.jsx)(em, {
              title: ['Скрывать версию PulseSync в TitleBar', (0, pulseJsxRuntime.jsx)(labeledBubble, {
                label: 'Basic',
                tooltip: {
                  title: 'Премиум функция',
                  description: a ? 'У вас есть подписка Basic' : 'Оформите Basic подписку, чтобы разблокировать'
                },
                disabled: !a
              })],
              description: 'Скрывает подпись PulseSync в верхней панели окна.',
              onChange: onHidePulseSyncVersionInTitleBarToggle,
              isChecked: hidePulseSyncVersionInTitleBar && a,
              disabled: !a
            })
          }), (0, pulseJsxRuntime.jsx)('li', {
            className: eb().item,
            children: (0, pulseJsxRuntime.jsx)(em, {
              title: 'Сохранять размер окна',
              description: 'Сохраняет размер окна при перезапуске',
              onChange: onSaveWindowDimensionsToggle,
              isChecked: window.nativeSettings.getAsync('modSettings.window.saveWindowDimensionsOnRestart')
            })
          }), (0, pulseJsxRuntime.jsx)('li', {
            className: eb().item,
            children: (0, pulseJsxRuntime.jsx)(em, {
              title: 'Сохранять положение окна',
              description: 'Сохраняет положение окна при перезапуске',
              onChange: onSaveWindowPositionToggle,
              isChecked: window.nativeSettings.getAsync('modSettings.window.saveWindowPositionOnRestart')
            })
          }), (0, pulseJsxRuntime.jsx)('li', {
            className: eb().item,
            children: (0, pulseJsxRuntime.jsx)(em, {
              title: 'Минимизировать в трей при закрытии',
              description: 'Если включено, приложение свернется в трей при закрытии.',
              onChange: onToTrayToggle,
              isChecked: window.nativeSettings.getAsync('modSettings.window.toTray')
            })
          }), (0, pulseJsxRuntime.jsx)('li', {
            className: eb().item,
            children: (0, pulseJsxRuntime.jsx)(em, {
              title: 'Кнопки в превью панели задач',
              description: 'Добавляет поддержку расширений панели задач (Windows)',
              onChange: onTaskBarToggle,
              isChecked: window.nativeSettings.getAsync('modSettings.taskBarExtensions.enable'),
              disabled: navigator.userAgent.includes('Macintosh')
            })
          }), (0, pulseJsxRuntime.jsx)('li', {
            className: eb().item,
            children: (0, pulseJsxRuntime.jsx)(em, {
              title: 'Использовать обложку трека в превью окна',
              description: 'Если трек играет, заменяет динамичное превью на картинку обложки трека (Windows)',
              onChange: onTaskbarExtensionsCoverAsThumbnailToggle,
              isChecked: window.nativeSettings.getAsync('modSettings.taskBarExtensions.coverAsThumbnail'),
              disabled: navigator.userAgent.includes('Macintosh')
            })
          })]
        })
      });
    }),
    miniPlayerSettings = (0, pulseMobxRuntime.PA)(() => {
      let {
          formatMessage: e
        } = (0, pulseIntlRuntime.A)(),
        {
          modals: {
            miniPlayerSettingsModal: t
          }
        } = (0, pulseSettingsRuntime.Pjs)(),
        onSkipTaskbarToggle = (0, pulseReactRuntime.useCallback)(async e => {
          console.log('modSettings.miniplayer.skipTaskbar toggled. Value: ', e);
          window.nativeSettings.set('modSettings.miniplayer.skipTaskbar', e);
        }, []),
        onSaveDimensionsToggle = (0, pulseReactRuntime.useCallback)(async e => {
          console.log('modSettings.miniplayer.saveDimensions toggled. Value: ', e);
          window.nativeSettings.set('modSettings.miniplayer.saveDimensions', e);
        }, []),
        onSavePositionToggle = (0, pulseReactRuntime.useCallback)(async e => {
          console.log('modSettings.miniplayer.savePosition toggled. Value: ', e);
          window.nativeSettings.set('modSettings.miniplayer.savePosition', e);
        }, []),
        onAlwaysShowPlayerTimestampsToggle = (0, pulseReactRuntime.useCallback)(async e => {
          console.log('modSettings.miniplayer.alwaysShowPlayerTimestamps toggled. Value: ', e);
          window.nativeSettings.set('modSettings.miniplayer.alwaysShowPlayerTimestamps', e);
        }, []),
        [notchPlayerEnabled, setNotchPlayerEnabled] = (0, pulseReactRuntime.useState)(window.nativeSettings.get('modSettings.notchplayer.enabled') === !0),
        onNotchPlayerToggle = (0, pulseReactRuntime.useCallback)(async e => {
          window.nativeSettings.set('modSettings.notchplayer.enabled', e);
          setNotchPlayerEnabled(e);
        }, []),
        [notchDisplay, setNotchDisplay] = (0, pulseReactRuntime.useState)(window.nativeSettings.get('modSettings.notchplayer.display') ?? 'builtin'),
        onNotchDisplayChange = (0, pulseReactRuntime.useCallback)(async e => {
          window.nativeSettings.set('modSettings.notchplayer.display', e);
          setNotchDisplay(e);
        }, []),
        [showShuffleRepeat, setShowShuffleRepeat] = (0, pulseReactRuntime.useState)(window.nativeSettings.get('modSettings.notchplayer.showShuffleRepeat') === !0),
        onShowShuffleRepeatToggle = (0, pulseReactRuntime.useCallback)(async e => {
          window.nativeSettings.set('modSettings.notchplayer.showShuffleRepeat', e);
          setShowShuffleRepeat(e);
        }, []);
      return (0, pulseJsxRuntime.jsx)(pulseModal, {
        className: ev().list,
        headerClassName: ev().modalHeader,
        contentClassName: ''.concat(ev().modalContent),
        title: 'Миниплеер',
        open: t.isOpened,
        onOpenChange: t.onOpenChange,
        onClose: t.close,
        size: 'fitContent',
        placement: 'center',
        overlayColor: 'full',
        labelClose: e({
          id: 'interface-actions.close'
        }),
        children: (0, pulseJsxRuntime.jsxs)('ul', {
          className: ''.concat(eb().root, ' ').concat(ev().list),
          style: {
            width: '32.125rem',
            maxHeight: '37.5rem',
            gap: 0
          },
          children: [(0, pulseJsxRuntime.jsx)('li', {
            className: eb().item,
            children: (0, pulseJsxRuntime.jsx)(em, {
              title: 'Сохранять размер окна',
              description: 'Сохраняет размер окна миниплеера при перезапуске',
              onChange: onSaveDimensionsToggle,
              isChecked: window.nativeSettings.getAsync('modSettings.miniplayer.saveDimensions')
            })
          }), (0, pulseJsxRuntime.jsx)('li', {
            className: eb().item,
            children: (0, pulseJsxRuntime.jsx)(em, {
              title: 'Сохранять положение окна',
              description: 'Сохраняет положение окна миниплеера при перезапуске',
              onChange: onSavePositionToggle,
              isChecked: window.nativeSettings.getAsync('modSettings.miniplayer.savePosition')
            })
          }), (0, pulseJsxRuntime.jsx)('li', {
            className: eb().item,
            children: (0, pulseJsxRuntime.jsx)(em, {
              title: 'Не отображать окно в таскбаре',
              description: 'Работает только если миниплеер закреплён поверх других окон (Windows)',
              onChange: onSkipTaskbarToggle,
              isChecked: window.nativeSettings.getAsync('modSettings.miniplayer.skipTaskbar'),
              disabled: navigator.userAgent.includes('Macintosh')
            })
          }), (0, pulseJsxRuntime.jsx)('li', {
            className: eb().item,
            children: (0, pulseJsxRuntime.jsx)(em, {
              title: 'Всегда отображать временные метки',
              description: 'Отображает временные метки независимо от положения курсора',
              onChange: onAlwaysShowPlayerTimestampsToggle,
              isChecked: window.nativeSettings.getAsync('modSettings.miniplayer.alwaysShowPlayerTimestamps')
            })
          }), window.PLATFORM === 'darwin' && (0, pulseJsxRuntime.jsx)('li', {
            className: eb().item,
            children: (0, pulseJsxRuntime.jsx)(em, {
              title: 'Плеер у выреза (нотч)',
              description: 'Капсула плеера в зоне меню-бара (macOS)',
              onChange: onNotchPlayerToggle,
              isChecked: notchPlayerEnabled === !0
            })
          }), window.PLATFORM === 'darwin' && (0, pulseJsxRuntime.jsx)('li', {
            className: eb().item,
            children: (0, pulseJsxRuntime.jsx)(settingBarWithDropdown, {
              title: 'Где показывать плеер у выреза',
              description: 'Где показывать капсулу нотч-плеера',
              onChange: onNotchDisplayChange,
              value: notchDisplay,
              direction: 'bottom',
              options: [{
                value: 'builtin',
                label: 'Встроенный'
              }, {
                value: 'primary',
                label: 'Основной'
              }, {
                value: 'all',
                label: 'Все мониторы'
              }]
            })
          }), window.PLATFORM === 'darwin' && (0, pulseJsxRuntime.jsx)('li', {
            className: eb().item,
            children: (0, pulseJsxRuntime.jsx)(em, {
              title: 'Шаффл и повтор у выреза',
              description: 'Кнопки перемешивания и повтора между дизлайком, плей и лайком.',
              onChange: onShowShuffleRepeatToggle,
              isChecked: showShuffleRepeat === !0
            })
          })]
        })
      });
    });
  let myVibeAnimationPerformanceSettings = (0, pulseMobxRuntime.PA)(() => {
      let {
          formatMessage: e
        } = (0, pulseIntlRuntime.A)(),
        {
          modals: {
            myVibeAnimationPerformanceSettingsModal: t
          }
        } = (0, pulseSettingsRuntime.Pjs)(),
        [o, setMaxFPS] = (0, pulseReactRuntime.useState)(window.nativeSettings.get('modSettings.vibeAnimationEnhancement.maxFPS')),
        [r, s] = (0, pulseReactRuntime.useState)(window.nativeSettings.get('modSettings.vibeAnimationEnhancement.disableRendering')),
        [canvasResolution, setCanvasResolution] = (0, pulseReactRuntime.useState)(window.nativeSettings.get('modSettings.vibeAnimationEnhancement.canvasResolution')),
        onCanvasResolutionChange = (0, pulseReactRuntime.useCallback)(async e => {
          console.log('canvasResolution changed. Value: ', e);
          window.nativeSettings.set('modSettings.vibeAnimationEnhancement.canvasResolution', e);
          setCanvasResolution(e);
        }, []),
        onDisableVibeRenderingToggle = (0, pulseReactRuntime.useCallback)(async e => {
          console.log('modSettings.vibeAnimationEnhancement.disableRendering toggled. Value: ', e);
          window.nativeSettings.set('modSettings.vibeAnimationEnhancement.disableRendering', e);
          s(e);
        }, []),
        onMaxFPSchange = (0, pulseReactRuntime.useCallback)(async e => {
          let t = Math.min(Math.max(e, 1), window?.DISPLAY_MAX_FPS);
          setMaxFPS(t);
          console.log('modSettings.vibeAnimationEnhancement.maxFPS changed. Value: ', t);
          window.nativeSettings.set('modSettings.vibeAnimationEnhancement.maxFPS', t);
        }, []);
      return (0, pulseJsxRuntime.jsx)(pulseModal, {
        className: ev().list,
        style: {
          maxWidth: '34.375rem'
        },
        title: 'Производительность Моей Волны',
        headerClassName: ev().modalHeader,
        contentClassName: ''.concat(ev().modalContent),
        open: t.isOpened,
        onOpenChange: t.onOpenChange,
        onClose: t.close,
        size: 'fitContent',
        placement: 'center',
        overlayColor: 'full',
        labelClose: e({
          id: 'interface-actions.close'
        }),
        children: (0, pulseJsxRuntime.jsxs)('ul', {
          className: ''.concat(eb().root, ' ').concat(ev().list),
          style: {
            width: '32.125rem',
            maxHeight: '37.5rem',
            gap: 0
          },
          children: [(0, pulseJsxRuntime.jsx)('li', {
            className: eb().item,
            children: (0, pulseJsxRuntime.jsx)(em, {
              title: 'Отключить отрисовку анимации Волны',
              description: 'Значительно увеличивает производительность на слабом железе',
              onChange: onDisableVibeRenderingToggle,
              isChecked: r
            })
          }), (0, pulseJsxRuntime.jsx)('li', {
            className: eb().item,
            children: (0, pulseJsxRuntime.jsx)(settingBarWithSlider, {
              title: 'Ограничение FPS',
              description: 'Верхняя граница FPS. Чем больше, тем плавнее анимация',
              onChange: onMaxFPSchange,
              value: o,
              maxValue: Math.max(window?.DISPLAY_MAX_FPS ?? 60, o),
              minValue: 1,
              step: 1,
              disabled: !!r
            })
          }), (0, pulseJsxRuntime.jsx)('li', {
            className: eb().item,
            children: (0, pulseJsxRuntime.jsx)(settingBarWithDropdown, {
              title: 'Разрешение анимации Волны',
              onChange: onCanvasResolutionChange,
              value: canvasResolution,
              direction: 'top',
              options: [{
                value: 300,
                label: 'Низкое',
                description: '300x300'
              }, {
                value: 650,
                label: 'Среднее',
                description: '650x650. По умолчанию. Как в ванильном приложении'
              }, {
                value: 1400,
                label: 'Высокое',
                description: '1400x1400'
              }],
              disabled: !!r
            })
          })]
        })
      });
    }),
    myVibeAnimationAppearanceSettings = (0, pulseMobxRuntime.PA)(() => {
      let {
          formatMessage: e
        } = (0, pulseIntlRuntime.A)(),
        {
          modals: {
            myVibeAnimationAppearanceSettingsModal: t
          }
        } = (0, pulseSettingsRuntime.Pjs)(),
        [r, s] = (0, pulseReactRuntime.useState)(window.nativeSettings.get('modSettings.vibeAnimationEnhancement.disableRendering')),
        [a, d] = (0, pulseReactRuntime.useState)(window.nativeSettings.get('modSettings.vibeAnimationEnhancement.useDynamicEnergy')),
        [u, p] = (0, pulseReactRuntime.useState)(window.nativeSettings.get('modSettings.vibeAnimationEnhancement.smoothDynamicEnergy')),
        [h, f] = (0, pulseReactRuntime.useState)(window.nativeSettings.get('modSettings.vibeAnimationEnhancement.vibeIntensityCoefficient')),
        [x, setSmoothDynamicEnergyCoefficient] = (0, pulseReactRuntime.useState)(window.nativeSettings.get('modSettings.vibeAnimationEnhancement.smoothDynamicEnergyCoefficient')),
        [j, C] = (0, pulseReactRuntime.useState)(window.nativeSettings.get('modSettings.vibeAnimationEnhancement.useVibeWidgetColors') ?? !0),
        onIntensityCoefficientChange = (0, pulseReactRuntime.useCallback)(async e => {
          let t = Math.min(Math.max(e, 0), 2.5);
          f(t);
          console.log('modSettings.vibeAnimationEnhancement.vibeIntensityCoefficient changed. Value: ', t);
          window.nativeSettings.set('modSettings.vibeAnimationEnhancement.vibeIntensityCoefficient', t);
        }, []),
        onSmoothDynamicEnergyCoefficientChange = (0, pulseReactRuntime.useCallback)(async e => {
          let t = Math.min(Math.max(e, 0.01), 1);
          setSmoothDynamicEnergyCoefficient(t);
          console.log('modSettings.vibeAnimationEnhancement.smoothDynamicEnergyCoefficient changed. Value: ', t);
          window.nativeSettings.set('modSettings.vibeAnimationEnhancement.smoothDynamicEnergyCoefficient', t);
        }, []),
        onEnableUseDynamicEnergy = (0, pulseReactRuntime.useCallback)(async e => {
          console.log('modSettings.vibeAnimationEnhancement.useDynamicEnergy toggled. Value: ', e);
          window.nativeSettings.set('modSettings.vibeAnimationEnhancement.useDynamicEnergy', e);
          d(e);
        }, []),
        onEnableSmoothDynamicEnergy = (0, pulseReactRuntime.useCallback)(async e => {
          console.log('modSettings.vibeAnimationEnhancement.smoothDynamicEnergy toggled. Value: ', e);
          window.nativeSettings.set('modSettings.vibeAnimationEnhancement.smoothDynamicEnergy', e);
          p(e);
        }, []),
        onUseVibeWidgetColorsToggle = (0, pulseReactRuntime.useCallback)(async e => {
          console.log('modSettings.vibeAnimationEnhancement.useVibeWidgetColors toggled. Value: ', e);
          window.nativeSettings.set('modSettings.vibeAnimationEnhancement.useVibeWidgetColors', e);
          C(e);
        }, []);
      return (0, pulseJsxRuntime.jsx)(pulseModal, {
        className: ev().list,
        style: {
          maxWidth: '34.375rem'
        },
        title: 'Вид анимации Волны',
        headerClassName: ev().modalHeader,
        contentClassName: ''.concat(ev().modalContent),
        open: t.isOpened,
        onOpenChange: t.onOpenChange,
        onClose: t.close,
        size: 'fitContent',
        placement: 'center',
        overlayColor: 'full',
        labelClose: e({
          id: 'interface-actions.close'
        }),
        children: (0, pulseJsxRuntime.jsxs)('ul', {
          className: ''.concat(eb().root, ' ').concat(ev().list),
          style: {
            width: '32.125rem',
            maxHeight: '37.5rem',
            gap: 0
          },
          children: [(0, pulseJsxRuntime.jsx)('li', {
            className: eb().item,
            children: (0, pulseJsxRuntime.jsx)(em, {
              title: 'Использовать альтернативную цветовую схему Волны',
              description: 'Переключение между радужным и одноцветным градиентом Волны',
              onChange: onUseVibeWidgetColorsToggle,
              isChecked: j,
              disabled: !!r
            })
          }), (0, pulseJsxRuntime.jsx)('li', {
            className: eb().item,
            children: (0, pulseJsxRuntime.jsx)(settingBarWithSlider, {
              title: 'Интенсивность реакции на трек',
              description: 'Чем больше, тем сильнее анимация ускоряется под трек',
              onChange: onIntensityCoefficientChange,
              value: h,
              maxValue: 2.5,
              minValue: 0,
              step: 0.1,
              disabled: !!r
            })
          }), (0, pulseJsxRuntime.jsx)('li', {
            className: eb().item,
            children: (0, pulseJsxRuntime.jsx)(em, {
              title: 'Подстраивать скорость анимации под Энергию трека',
              description: 'Анимация будет подстраивать скорость под Энергию трека в реальном времени',
              onChange: onEnableUseDynamicEnergy,
              isChecked: a,
              disabled: !!r
            })
          }), (0, pulseJsxRuntime.jsx)('li', {
            className: eb().item,
            children: (0, pulseJsxRuntime.jsx)(em, {
              title: 'Смягчать динамическую энергию',
              description: 'Изменения скорости трека будут более плавными',
              onChange: onEnableSmoothDynamicEnergy,
              isChecked: u,
              disabled: !(!r && a)
            })
          }), (0, pulseJsxRuntime.jsx)('li', {
            className: eb().item,
            children: (0, pulseJsxRuntime.jsx)(settingBarWithSlider, {
              title: 'Коэффициент смягчения энергии',
              description: 'Чем меньше, тем сильнее сглаживаются изменения скорости анимации',
              onChange: onSmoothDynamicEnergyCoefficientChange,
              value: x,
              maxValue: 1,
              minValue: 0.01,
              step: 0.01,
              disabled: !(!r && a && u)
            })
          })]
        })
      });
    }),
    myVibeParamsSettings = (0, pulseMobxRuntime.PA)(() => {
      let {
          formatMessage: e
        } = (0, pulseIntlRuntime.A)(),
        {
          modals: {
            myVibeParamsSettingsModal: t
          }
        } = (0, pulseSettingsRuntime.Pjs)(),
        onAutoLaunchOnAppStartup = (0, pulseReactRuntime.useCallback)(async e => {
          console.log('modSettings.vibeAnimationEnhancement.autoLaunchOnAppStartup toggled. Value: ', e);
          window.nativeSettings.set('modSettings.vibeAnimationEnhancement.autoLaunchOnAppStartup', e);
        }, []),
        onEnableEndlessMusicToggle = (0, pulseReactRuntime.useCallback)(async e => {
          console.log('modSettings.vibeAnimationEnhancement.enableEndlessMusic toggled. Value: ', e);
          window.nativeSettings.set('modSettings.vibeAnimationEnhancement.enableEndlessMusic', e);
        }, []),
        onImprovedWaveLayoutToggle = (0, pulseReactRuntime.useCallback)(async e => {
          console.log('modSettings.vibeAnimationEnhancement.improvedWaveLayout toggled. Value: ', e);
          window.nativeSettings.set('modSettings.vibeAnimationEnhancement.improvedWaveLayout', e);
        }, []),
        onForceOldSettingsInWheelToggle = (0, pulseReactRuntime.useCallback)(async e => {
          console.log('modSettings.vibeAnimationEnhancement.forceOldSettingsInWheel toggled. Value: ', e);
          window.nativeSettings.set('modSettings.vibeAnimationEnhancement.forceOldSettingsInWheel', e);
        }, []),
        onSwapVibeAnimationAndWheelToggle = (0, pulseReactRuntime.useCallback)(async e => {
          console.log('modSettings.vibeAnimationEnhancement.swapVibeAnimationAndWheel toggled. Value: ', e);
          window.nativeSettings.set('modSettings.vibeAnimationEnhancement.swapVibeAnimationAndWheel', e);
        }, []),
        onShowAudioQualityOnNewWaveToggle = (0, pulseReactRuntime.useCallback)(async e => {
          console.log('modSettings.vibeAnimationEnhancement.showAudioQualityOnNewWave toggled. Value: ', e);
          window.nativeSettings.set('modSettings.vibeAnimationEnhancement.showAudioQualityOnNewWave', e);
        }, []);
      return (0, pulseJsxRuntime.jsx)(pulseModal, {
        className: ev().list,
        style: {
          maxWidth: '34.375rem',
          height: 'auto'
        },
        title: 'Поведение Волны',
        headerClassName: ev().modalHeader,
        contentClassName: ''.concat(ev().modalContent),
        open: t.isOpened,
        onOpenChange: t.onOpenChange,
        onClose: t.close,
        size: 'fitContent',
        placement: 'center',
        overlayColor: 'full',
        labelClose: e({
          id: 'interface-actions.close'
        }),
        children: (0, pulseJsxRuntime.jsxs)('ul', {
          className: ''.concat(eb().root, ' ').concat(ev().list),
          style: {
            width: '32.125rem',
            maxHeight: '37.5rem',
            gap: 0
          },
          children: [(0, pulseJsxRuntime.jsx)('li', {
            className: eb().item,
            children: (0, pulseJsxRuntime.jsx)(em, {
              title: 'Запускать воспроизведение трека при старте приложения',
              description: 'Запустит последний играющий трек сразу после старта приложения',
              onChange: onAutoLaunchOnAppStartup,
              isChecked: window.nativeSettings.getAsync('modSettings.vibeAnimationEnhancement.autoLaunchOnAppStartup')
            })
          }), (0, pulseJsxRuntime.jsx)('li', {
            className: eb().item,
            children: (0, pulseJsxRuntime.jsx)(em, {
              title: 'Музыка без остановки',
              description: 'После окончания воспроизведения очереди, запустится волна',
              onChange: onEnableEndlessMusicToggle,
              isChecked: window.nativeSettings.getAsync('modSettings.vibeAnimationEnhancement.enableEndlessMusic')
            })
          }), (0, pulseJsxRuntime.jsx)('li', {
            className: eb().item,
            children: (0, pulseJsxRuntime.jsx)(em, {
              title: 'Улучшенный layout страницы Волны',
              description: 'Включает обновленное расположение кнопок и дополнительные элементы управления на странице Волны',
              onChange: onImprovedWaveLayoutToggle,
              isChecked: window.nativeSettings.getAsync('modSettings.vibeAnimationEnhancement.improvedWaveLayout').then(e => e ?? !0)
            })
          }), (0, pulseJsxRuntime.jsx)('li', {
            className: eb().item,
            children: (0, pulseJsxRuntime.jsx)(em, {
              title: 'Показывать качество на странице новой Волны',
              description: 'Показывает формат и качество текущего трека. При активном WASAPI Exclusive формат отображается всегда.',
              onChange: onShowAudioQualityOnNewWaveToggle,
              isChecked: window.nativeSettings.getAsync('modSettings.vibeAnimationEnhancement.showAudioQualityOnNewWave').then(e => e ?? !0)
            })
          }), (0, pulseJsxRuntime.jsx)('li', {
            className: eb().item,
            children: (0, pulseJsxRuntime.jsx)(em, {
              title: 'Форсировать старые настройки в колесе Волн',
              description: 'Когда включено, добавляет кнопку на первый элемент колеса, кнопку открывающую старые настройки Волны',
              onChange: onForceOldSettingsInWheelToggle,
              isChecked: window.nativeSettings.getAsync('modSettings.vibeAnimationEnhancement.forceOldSettingsInWheel').then(e => e ?? !0)
            })
          }), (0, pulseJsxRuntime.jsx)('li', {
            className: eb().item,
            children: (0, pulseJsxRuntime.jsx)(em, {
              title: 'Поменять местами Анимацию Волны и Колесо Волн',
              onChange: onSwapVibeAnimationAndWheelToggle,
              isChecked: window.nativeSettings.getAsync('modSettings.vibeAnimationEnhancement.swapVibeAnimationAndWheel').then(e => e ?? !0)
            })
          })]
        })
      });
    });
  let discordRpcSettings = (0, pulseMobxRuntime.PA)(() => {
    let statusDisplayTypeState = (0, pulseReactRuntime.useState)(window.nativeSettings.get('modSettings.discordRPC.statusDisplayType') ?? 0),
      statusDisplayType = statusDisplayTypeState[0],
      setStatusDisplayType = statusDisplayTypeState[1],
      applicationIDForRPCState = (0, pulseReactRuntime.useState)(window.nativeSettings.get('modSettings.discordRPC.applicationIDForRPC') ?? '1124055337234858005'),
      applicationIDForRPC = applicationIDForRPCState[0],
      setApplicationIDForRPC = applicationIDForRPCState[1],
      hideBrandingState = (0, pulseReactRuntime.useState)(window.nativeSettings.get('modSettings.discordRPC.hideBranding') ?? !1),
      hideBranding = hideBrandingState[0],
      setHideBranding = hideBrandingState[1];
    let {
        formatMessage: e
      } = (0, pulseIntlRuntime.A)(),
      {
        modals: {
          discordRpcSettingsModal: t
        }
      } = (0, pulseSettingsRuntime.Pjs)(),
      {
        notify: o
      } = (0, pulseSettingsRuntime.lkh)(),
      afkTimeoutState = (0, pulseReactRuntime.useState)(window.nativeSettings.get('modSettings.discordRPC.afkTimeout')),
      afkTimeout = afkTimeoutState[0],
      setAfkTimeout = afkTimeoutState[1],
      reconnectIntervalState = (0, pulseReactRuntime.useState)(window.nativeSettings.get('modSettings.discordRPC.reconnectInterval')),
      reconnectInterval = reconnectIntervalState[0],
      setReconnectInterval = reconnectIntervalState[1],
      isExperimentOverridenState = (0, pulseReactRuntime.useState)(window.nativeSettings.get('modSettings.discordRPC.overrideDeepLinksExperiment')),
      isExperimentOverriden = isExperimentOverridenState[0],
      setIsExperimentOverriden = isExperimentOverridenState[1],
      showButtonsState = (0, pulseReactRuntime.useState)(window.nativeSettings.get('modSettings.discordRPC.showButtons')),
      showButtons = showButtonsState[0],
      setShowButtons = showButtonsState[1],
      isDiscordStatusEnabledState = (0, pulseReactRuntime.useState)(window.nativeSettings.get('modSettings.discordRPC.enable')),
      isDiscordStatusEnabled = isDiscordStatusEnabledState[0],
      setIsDiscordStatusEnabled = isDiscordStatusEnabledState[1],
      isPremiumState = (0, pulseReactRuntime.useState)(!1),
      isPremium = isPremiumState[0],
      setIsPremium = isPremiumState[1];
    (0, pulseReactRuntime.useEffect)(() => {
      window.IS_PREMIUM_USER().then(e => setIsPremium(e));
    });
    let onAfkTimeoutChange = (0, pulseReactRuntime.useCallback)(async e => {
        let t = Math.min(Math.max(e, 0), 30);
        setAfkTimeout(t);
        console.log('modSettings.discordRPC.afkTimeout changed. Value: ', t);
        window.nativeSettings.set('modSettings.discordRPC.afkTimeout', t);
      }, []),
      onReconnectIntervalChange = (0, pulseReactRuntime.useCallback)(async e => {
        let t = Math.min(Math.max(e, 0), 300);
        setReconnectInterval(t);
        console.log('modSettings.discordRPC.reconnectInterval changed. Value: ', t);
        window.nativeSettings.set('modSettings.discordRPC.reconnectInterval', t);
      }, []),
      onDiscordStatusToggle = (0, pulseReactRuntime.useCallback)(async e => {
        console.log('modSettings.discordRPC.enable toggled. Value: ', e);
        window.nativeSettings.set('modSettings.discordRPC.enable', e);
        setIsDiscordStatusEnabled(e);
      }, []),
      onDiscordFromYnisonToggle = (0, pulseReactRuntime.useCallback)(async e => {
        console.log('modSettings.discordRPC.fromYnison toggled. Value: ', e);
        window.nativeSettings.set('modSettings.discordRPC.fromYnison', e);
      }, []),
      onDiscordShowButtonsToggle = (0, pulseReactRuntime.useCallback)(async e => {
        console.log('modSettings.discordRPC.showButtons toggled. Value: ', e);
        window.nativeSettings.set('modSettings.discordRPC.showButtons', e);
        setShowButtons(e);
      }, []),
      onDiscordOverrideDeepLinksExperimentToggle = (0, pulseReactRuntime.useCallback)(async e => {
        console.log('modSettings.discordRPC.overrideDeepLinksExperiment toggled. Value: ', e);
        window.nativeSettings.set('modSettings.discordRPC.overrideDeepLinksExperiment', e);
        setIsExperimentOverriden(e);
      }, []),
      onDiscordShowGitHubButtonToggle = (0, pulseReactRuntime.useCallback)(async e => {
        console.log('modSettings.discordRPC.showGitHubButton toggled. Value: ', e);
        window.nativeSettings.set('modSettings.discordRPC.showGitHubButton', e);
      }, []),
      onDiscordShowSmallIconToggle = (0, pulseReactRuntime.useCallback)(async e => {
        console.log('modSettings.discordRPC.showSmallIcon toggled. Value: ', e);
        window.nativeSettings.set('modSettings.discordRPC.showSmallIcon', e);
      }, []),
      onDiscordShowAlbumToggle = (0, pulseReactRuntime.useCallback)(async e => {
        console.log('modSettings.discordRPC.showAlbum toggled. Value: ', e);
        window.nativeSettings.set('modSettings.discordRPC.showAlbum', e);
      }, []),
      onDiscordShowVersionToggle = (0, pulseReactRuntime.useCallback)(async e => {
        console.log('modSettings.discordRPC.showVersion toggled. Value: ', e);
        window.nativeSettings.set('modSettings.discordRPC.showVersion', e);
      }, []),
      onStatusDisplayTypeChange = (0, pulseReactRuntime.useCallback)(async e => {
        console.log('statusDisplayType changed. Value: ', e);
        window.nativeSettings.set('modSettings.discordRPC.statusDisplayType', e);
        setStatusDisplayType(e);
      }, []),
      onHideBrandingChange = (0, pulseReactRuntime.useCallback)(async e => {
        console.log('hideBranding changed. Value: ', e);
        window.nativeSettings.set('modSettings.discordRPC.hideBranding', e);
        setHideBranding(e);
      }, []),
      onApplicationIDForRPCChange = (0, pulseReactRuntime.useCallback)(async e => {
        console.log('applicationIDForRPC changed. Value: ', e);
        window.nativeSettings.set('modSettings.discordRPC.applicationIDForRPC', e);
        setApplicationIDForRPC(e);
        o((0, pulseJsxRuntime.jsx)(pulseSettingsUi.hT, {
          error: 'Для применения этой настройки требуется перезапуск приложения'
        }), {
          containerId: pulseSettingsRuntime.uQT.ERROR
        });
      }, [o]);
    return (0, pulseJsxRuntime.jsx)(pulseModal, {
      className: ev().list,
      style: {
        'max-width': '31.25rem'
      },
      title: 'Discord RPC',
      headerClassName: ev().modalHeader,
      contentClassName: ''.concat(ev().modalContent, ' Modal_content_no_right_padding'),
      open: t.isOpened,
      onOpenChange: t.onOpenChange,
      onClose: t.close,
      size: 'fitContent',
      placement: 'center',
      overlayColor: 'full',
      labelClose: e({
        id: 'interface-actions.close'
      }),
      children: (0, pulseJsxRuntime.jsxs)('ul', {
        className: ''.concat(eb().root, ' ').concat(ev().list, ' PulseSync_experimentsListScroll'),
        style: {
          width: '29.125rem',
          maxHeight: '37.5rem',
          gap: 0
        },
        children: [(0, pulseJsxRuntime.jsx)('li', {
          className: eb().item,
          children: (0, pulseJsxRuntime.jsx)(em, {
            title: 'Включить интеграцию с Discord',
            onChange: onDiscordStatusToggle,
            isChecked: isDiscordStatusEnabled
          })
        }), (0, pulseJsxRuntime.jsx)('li', {
          className: eb().item,
          children: (0, pulseJsxRuntime.jsx)(em, {
            title: ['Скрыть брендинг PulseSync в статусе', (0, pulseJsxRuntime.jsx)(labeledBubble, {
              label: 'Basic',
              tooltip: {
                title: 'Премиум функция',
                description: isPremium ? 'У вас есть подписка Basic' : 'Оформите Basic подписку, чтобы разблокировать'
              },
              disabled: !isDiscordStatusEnabled
            })],
            onChange: onHideBrandingChange,
            isChecked: hideBranding && isPremium,
            disabled: !isDiscordStatusEnabled || !isPremium
          })
        }), (0, pulseJsxRuntime.jsx)('li', {
          className: eb().item,
          children: (0, pulseJsxRuntime.jsx)(em, {
            title: ['Использовать Ynison', (0, pulseJsxRuntime.jsx)(labeledBubble, {
              label: 'BETA',
              disabled: !isDiscordStatusEnabled
            })],
            description: 'Использует данные о воспроизведении с других устройств',
            onChange: onDiscordFromYnisonToggle,
            isChecked: window.nativeSettings.getAsync('modSettings.discordRPC.fromYnison'),
            disabled: !isDiscordStatusEnabled
          })
        }), (0, pulseJsxRuntime.jsx)('li', {
          className: eb().item,
          children: (0, pulseJsxRuntime.jsx)(settingBarWithDropdown, {
            title: 'Тип отображения статуса',
            description: 'Что будет отображаться в коротком статусе',
            onChange: onStatusDisplayTypeChange,
            value: statusDisplayType,
            direction: 'bottom',
            options: [{
              value: 0,
              label: 'Платформа'
            }, {
              value: 1,
              label: 'Артист'
            }, {
              value: 2,
              label: 'Трек'
            }],
            disabled: !isDiscordStatusEnabled
          })
        }), (0, pulseJsxRuntime.jsx)('li', {
          className: eb().item,
          children: (0, pulseJsxRuntime.jsx)(settingBarWithDropdown, {
            title: 'Локализация платформы в статусе',
            description: '1290778445370097674' === applicationIDForRPC ? 'Слушает Яндекс Музыку' : 'Listening to Yandex Music',
            onChange: onApplicationIDForRPCChange,
            value: applicationIDForRPC,
            direction: 'bottom',
            options: [{
              value: '1124055337234858005',
              label: 'Английский'
            }, {
              value: '1290778445370097674',
              label: 'Русский'
            }],
            disabled: !isDiscordStatusEnabled
          })
        }), (0, pulseJsxRuntime.jsx)('li', {
          className: eb().item,
          children: (0, pulseJsxRuntime.jsx)(em, {
            title: 'Отображать Альбом',
            description: 'Отображать ли название альбома в статусе',
            onChange: onDiscordShowAlbumToggle,
            isChecked: window.nativeSettings.getAsync('modSettings.discordRPC.showAlbum'),
            disabled: !isDiscordStatusEnabled
          })
        }), (0, pulseJsxRuntime.jsx)('li', {
          className: eb().item,
          children: (0, pulseJsxRuntime.jsx)(em, {
            title: 'Отображать Версию трека',
            description: 'Отображать ли версию трека в статусе',
            onChange: onDiscordShowVersionToggle,
            isChecked: window.nativeSettings.getAsync('modSettings.discordRPC.showVersion'),
            disabled: !isDiscordStatusEnabled
          })
        }), (0, pulseJsxRuntime.jsx)('li', {
          className: eb().item,
          children: (0, pulseJsxRuntime.jsx)(em, {
            title: 'Отображать маленькую иконку',
            description: 'Отображать ли иконку статуса воспроизведения (Playing, Paused)',
            onChange: onDiscordShowSmallIconToggle,
            isChecked: window.nativeSettings.getAsync('modSettings.discordRPC.showSmallIcon'),
            disabled: !isDiscordStatusEnabled
          })
        }), (0, pulseJsxRuntime.jsx)('li', {
          className: eb().item,
          children: (0, pulseJsxRuntime.jsx)(em, {
            title: 'Отображать кнопки',
            description: 'Отображает кнопки-ссылки в статусе',
            onChange: onDiscordShowButtonsToggle,
            isChecked: showButtons,
            disabled: !isDiscordStatusEnabled
          })
        }), (0, pulseJsxRuntime.jsx)('li', {
          className: eb().item,
          children: (0, pulseJsxRuntime.jsx)(em, {
            title: 'Объединить веб и апп ссылки в одну',
            description: 'Уберёт ссылку открывающую приложение т.к. это сделает ссылка на сайт',
            onChange: onDiscordOverrideDeepLinksExperimentToggle,
            isChecked: isExperimentOverriden,
            disabled: !(isDiscordStatusEnabled && showButtons)
          })
        }), (0, pulseJsxRuntime.jsx)('li', {
          className: eb().item,
          children: (0, pulseJsxRuntime.jsx)(em, {
            title: 'Отображать кнопку на сайт PulseSync',
            description: 'Отображает кнопку установки мода',
            onChange: onDiscordShowGitHubButtonToggle,
            isChecked: window.nativeSettings.getAsync('modSettings.discordRPC.showGitHubButton'),
            disabled: !(isDiscordStatusEnabled && showButtons && isExperimentOverriden)
          })
        }), (0, pulseJsxRuntime.jsx)('li', {
          className: eb().item,
          children: (0, pulseJsxRuntime.jsx)(settingBarWithSlider, {
            title: 'Таймер бездействия',
            description: 'Через сколько в минутах активность автоматически пропадёт',
            onChange: onAfkTimeoutChange,
            value: afkTimeout,
            maxValue: 30,
            minValue: 0,
            step: 1,
            disabled: !isDiscordStatusEnabled
          })
        }), (0, pulseJsxRuntime.jsx)('li', {
          className: eb().item,
          children: (0, pulseJsxRuntime.jsx)(settingBarWithSlider, {
            title: 'Повторное подключение к Discord',
            description: 'Интервал повторных попыток подключения к Discord при потере соединения (в секундах, 0 — отключает)',
            onChange: onReconnectIntervalChange,
            value: reconnectInterval,
            maxValue: 300,
            minValue: 0,
            step: 5,
            disabled: !isDiscordStatusEnabled
          })
        })]
      })
    });
  });
  let lrclibSettings = (0, pulseMobxRuntime.PA)(() => {
    let {
        formatMessage: e
      } = (0, pulseIntlRuntime.A)(),
      {
        modals: {
          lrclibSettingsModal: t
        }
      } = (0, pulseSettingsRuntime.Pjs)(),
      useLrclibTextState = (0, pulseReactRuntime.useState)(window.nativeSettings.get('modSettings.lrclib.useText') ?? !0),
      useLrclibText = useLrclibTextState[0],
      setUseLrclibText = useLrclibTextState[1],
      lookupModeState = (0, pulseReactRuntime.useState)(window.nativeSettings.get('modSettings.lrclib.lookupMode') === 'search' ? 'search' : 'get'),
      lookupMode = lookupModeState[0],
      setLookupMode = lookupModeState[1],
      useTitleOnlyFallbackState = (0, pulseReactRuntime.useState)(window.nativeSettings.get('modSettings.lrclib.useTitleOnlyFallback') ?? !0),
      useTitleOnlyFallback = useTitleOnlyFallbackState[0],
      setUseTitleOnlyFallback = useTitleOnlyFallbackState[1],
      useTrackVersionState = (0, pulseReactRuntime.useState)(window.nativeSettings.get('modSettings.lrclib.useTrackVersion') ?? !0),
      useTrackVersion = useTrackVersionState[0],
      setUseTrackVersion = useTrackVersionState[1],
      onUseLrclibTextToggle = (0, pulseReactRuntime.useCallback)(e => {
        window.nativeSettings.set('modSettings.lrclib.useText', e);
        setUseLrclibText(e);
      }, []),
      onLookupModeChange = (0, pulseReactRuntime.useCallback)(value => {
        const mode = value === 'search' ? 'search' : 'get';
        window.nativeSettings.set('modSettings.lrclib.lookupMode', mode);
        setLookupMode(mode);
      }, []),
      onUseTitleOnlyFallbackToggle = (0, pulseReactRuntime.useCallback)(e => {
        window.nativeSettings.set('modSettings.lrclib.useTitleOnlyFallback', e);
        setUseTitleOnlyFallback(e);
      }, []),
      onUseTrackVersionToggle = (0, pulseReactRuntime.useCallback)(e => {
        window.nativeSettings.set('modSettings.lrclib.useTrackVersion', e);
        setUseTrackVersion(e);
      }, []);
    return (0, pulseJsxRuntime.jsx)(pulseModal, {
      className: ev().list,
      style: {
        'max-width': '34.375rem',
        height: 'auto'
      },
      title: 'Настройки LRCLib',
      headerClassName: ev().modalHeader,
      contentClassName: ''.concat(ev().modalContent),
      open: t.isOpened,
      onOpenChange: t.onOpenChange,
      onClose: t.close,
      size: 'fitContent',
      placement: 'center',
      overlayColor: 'full',
      labelClose: e({
        id: 'interface-actions.close'
      }),
      children: (0, pulseJsxRuntime.jsxs)('ul', {
        className: ''.concat(eb().root, ' ').concat(ev().list),
        style: {
          width: '32.125rem',
          gap: 0
        },
        children: [(0, pulseJsxRuntime.jsx)('li', {
          className: eb().item,
          children: (0, pulseJsxRuntime.jsx)(em, {
            title: ['Использовать LRCLib для текста', (0, pulseJsxRuntime.jsx)(labeledBubble, {
              label: 'ALPHA'
            })],
            description: useLrclibText ? 'Если в Яндекс Музыке текста нет, то ищем в LRCLib' : 'Берём текст только из Яндекс Музыки',
            onChange: onUseLrclibTextToggle,
            isChecked: useLrclibText
          })
        }), (0, pulseJsxRuntime.jsx)('li', {
          className: eb().item,
          children: (0, pulseJsxRuntime.jsx)(settingBarWithDropdown, {
            title: 'Режим поиска LRCLib',
            description: lookupMode === 'search' ? 'Проверяет несколько вариантов и выбирает наиболее подходящий результат' : 'Ищет текст по всем данным текущего трека',
            onChange: onLookupModeChange,
            value: lookupMode,
            direction: 'bottom',
            disabled: !useLrclibText,
            options: [{
              value: 'get',
              label: 'Точный поиск',
              description: 'Ищет текст по всем данным текущего трека'
            }, {
              value: 'search',
              label: 'Расширенный поиск',
              description: 'Проверяет несколько вариантов и выбирает наиболее подходящий результат'
            }]
          })
        }), (0, pulseJsxRuntime.jsx)('li', {
          className: eb().item,
          children: (0, pulseJsxRuntime.jsx)(em, {
            title: 'Повторный поиск только по названию',
            description: useTitleOnlyFallback ? 'Если по названию и автору не нашли, то попробуем только по названию' : 'Ищем по названию и автору',
            onChange: onUseTitleOnlyFallbackToggle,
            isChecked: useTitleOnlyFallback,
            disabled: !useLrclibText || lookupMode !== 'search'
          })
        }), (0, pulseJsxRuntime.jsx)('li', {
          className: eb().item,
          children: (0, pulseJsxRuntime.jsx)(em, {
            title: 'Учитывать версию трека при поиске',
            description: useTrackVersion ? 'Добавляем версию трека к названию при поиске в LRCLib' : 'Ищем в LRCLib без версии трека',
            onChange: onUseTrackVersionToggle,
            isChecked: useTrackVersion,
            disabled: !useLrclibText
          })
        })]
      })
    });
  });
  let downloaderSettings = (0, pulseMobxRuntime.PA)(() => {
      let {
          formatMessage: e
        } = (0, pulseIntlRuntime.A)(),
        {
          modals: {
            downloaderSettingsModal: t
          }
        } = (0, pulseSettingsRuntime.Pjs)(),
        {
          notify: o
        } = (0, pulseSettingsRuntime.lkh)(),
        useMP3State = (0, pulseReactRuntime.useState)(window.nativeSettings?.get('modSettings.downloader.useMP3') ?? !1),
        useMP3 = useMP3State[0],
        setUseMP3 = useMP3State[1],
        useCustomPathForSessionStorageState = (0, pulseReactRuntime.useState)(window.nativeSettings?.get('modSettings.downloader.useCustomPathForSessionStorage') ?? !1),
        useCustomPathForSessionStorage = useCustomPathForSessionStorageState[0],
        setUseCustomPathForSessionStorage = useCustomPathForSessionStorageState[1],
        useDefaultPathState = (0, pulseReactRuntime.useState)(window.nativeSettings?.get('modSettings.downloader.useDefaultPath') ?? !1),
        useDefaultPath = useDefaultPathState[0],
        setUseDefaultPath = useDefaultPathState[1],
        addM3UToPlaylistsState = (0, pulseReactRuntime.useState)(window.nativeSettings?.get('modSettings.downloader.addM3UToPlaylists') ?? !1),
        addM3UToPlaylists = addM3UToPlaylistsState[0],
        setAddM3UToPlaylists = addM3UToPlaylistsState[1],
        concurrencyPresetState = (0, pulseReactRuntime.useState)(window.nativeSettings?.get('modSettings.downloader.concurrencyPreset') ?? 'adaptive'),
        concurrencyPreset = concurrencyPresetState[0],
        setConcurrencyPreset = concurrencyPresetState[1],
        customPathForSessionStorageState = (0, pulseReactRuntime.useState)(window.nativeSettings?.get('modSettings.downloader.customPathForSessionStorage') ?? ''),
        customPathForSessionStorage = customPathForSessionStorageState[0],
        setCustomPathForSessionStorage = customPathForSessionStorageState[1],
        defaultPathState = (0, pulseReactRuntime.useState)(window.nativeSettings?.get('modSettings.downloader.defaultPath') ?? ''),
        defaultPath = defaultPathState[0],
        setDefaultPath = defaultPathState[1],
        onUseDefaultPathToggle = (0, pulseReactRuntime.useCallback)(async e => {
          console.log('useDefaultPath toggled. Value: ', e);
          window.nativeSettings.set('modSettings.downloader.useDefaultPath', e);
          setUseDefaultPath(e);
        }, []),
        onDefaultPathExploreClick = (0, pulseReactRuntime.useCallback)(async () => {
          window.nativeSettings?.setPathWithNativeDialog('modSettings.downloader.defaultPath', void 0, ['openDirectory', 'showHiddenFiles']);
        }, []),
        onUseMP3Toggle = (0, pulseReactRuntime.useCallback)(async e => {
          console.log('useMP3 toggled. Value: ', e);
          window.nativeSettings.set('modSettings.downloader.useMP3', e);
          setUseMP3(e);
        }, []),
        onUseSyncLyricsToggle = (0, pulseReactRuntime.useCallback)(async e => {
          console.log('useSyncLyrics toggled. Value: ', e);
          window.nativeSettings.set('modSettings.downloader.useSyncLyrics', e);
        }, []),
        onAddM3UToPlaylistsToggle = (0, pulseReactRuntime.useCallback)(async e => {
          console.log('addM3UToPlaylists toggled. Value: ', e);
          window.nativeSettings.set('modSettings.downloader.addM3UToPlaylists', e);
          setAddM3UToPlaylists(e);
        }, []),
        onConcurrencyPresetChange = (0, pulseReactRuntime.useCallback)(async e => {
          console.log('concurrencyPreset changed. Value: ', e);
          window.nativeSettings.set('modSettings.downloader.concurrencyPreset', e);
          setConcurrencyPreset(e);
        }, []),
        onUseCustomPathForSessionStorageToggle = (0, pulseReactRuntime.useCallback)(async e => {
          console.log('useCustomPathForSessionStorage toggled. Value: ', e);
          window.nativeSettings.set('modSettings.downloader.useCustomPathForSessionStorage', e);
          setUseCustomPathForSessionStorage(e);
          o((0, pulseJsxRuntime.jsx)(pulseSettingsUi.hT, {
            error: 'Для применения этой настройки требуется перезапуск приложения'
          }), {
            containerId: pulseSettingsRuntime.uQT.ERROR
          });
        }, [o]),
        onCustomPathForSessionStorageExploreClick = (0, pulseReactRuntime.useCallback)(async () => {
          window.nativeSettings?.setPathWithNativeDialog('modSettings.downloader.customPathForSessionStorage', void 0, ['openDirectory', 'showHiddenFiles']);
        }, []);
      return (0, pulseReactRuntime.useEffect)(() => {
        window.desktopEvents?.on('NATIVE_STORE_UPDATE', (event, e, t) => {
          'modSettings.downloader.defaultPath' === e ? setDefaultPath(t) : 'modSettings.downloader.customPathForSessionStorage' === e && (setCustomPathForSessionStorage(t), o((0, pulseJsxRuntime.jsx)(pulseSettingsUi.hT, {
            error: 'Для применения этой настройки требуется перезапуск приложения'
          }), {
            containerId: pulseSettingsRuntime.uQT.ERROR
          }));
        });
      }, [o]), (0, pulseJsxRuntime.jsx)(pulseModal, {
        className: ev().root,
        style: {
          'max-width': '34.375rem',
          height: 'auto',
          maxHeight: 'unset'
        },
        title: 'Скачивание треков',
        headerClassName: ev().modalHeader,
        contentClassName: ev().modalContent,
        open: t.isOpened,
        onOpenChange: t.onOpenChange,
        onClose: t.close,
        size: 'fitContent',
        placement: 'center',
        overlayColor: 'full',
        labelClose: e({
          id: 'interface-actions.close'
        }),
        children: (0, pulseJsxRuntime.jsxs)('ul', {
          className: eb().root,
          style: {
            width: '32.125rem',
            gap: 0
          },
          children: [(0, pulseJsxRuntime.jsx)('li', {
            className: eb().item,
            children: (0, pulseJsxRuntime.jsx)(settingBarWithDropdown, {
              title: 'Конкурентность загрузки',
              value: concurrencyPreset,
              onChange: onConcurrencyPresetChange,
              options: [{
                value: 'minimal',
                label: 'Минимальная',
                description: 'Использует минимум ресурсов; (до ~50 мбит/с)'
              }, {
                value: 'adaptive',
                label: 'Адаптивная',
                description: 'Рекомендуемый вариант. Автоматически подбирает потоки, в границах максимального и минимального пресета.'
              }, {
                value: 'maximum',
                label: 'Максимальная',
                description: 'Использует максимум ресурсов. (до ~1 гбит/с)'
              }]
            })
          }), (0, pulseJsxRuntime.jsx)('li', {
            className: eb().item,
            children: (0, pulseJsxRuntime.jsx)(em, {
              title: 'Скачивать в MP3',
              description: useMP3 ? 'Треки скачиваются в MP3' : 'Треки скачиваются в оригинальном формате',
              onChange: onUseMP3Toggle,
              isChecked: useMP3
            })
          }), (0, pulseJsxRuntime.jsx)('li', {
            className: eb().item,
            children: (0, pulseJsxRuntime.jsx)(em, {
              title: 'Скачивать текстомузыку',
              description: 'Если возможно, записывать синхронный текст трека в метаданные файла',
              onChange: onUseSyncLyricsToggle,
              isChecked: window.nativeSettings.getAsync('modSettings.downloader.useSyncLyrics')
            })
          }), (0, pulseJsxRuntime.jsx)('li', {
            className: eb().item,
            children: (0, pulseJsxRuntime.jsx)(em, {
              title: 'Создавать M3U для плейлистов',
              description: addM3UToPlaylists ? 'После скачивания плейлиста будет создан .m3u файл' : 'Плейлисты будут скачиваться без .m3u файла',
              onChange: onAddM3UToPlaylistsToggle,
              isChecked: addM3UToPlaylists
            })
          }), (0, pulseJsxRuntime.jsx)('li', {
            className: eb().item,
            children: (0, pulseJsxRuntime.jsx)(toggleBarWithPathChooser, {
              title: 'Путь для файлов по умолчанию',
              description: useDefaultPath ? 'Использовать путь по умолчанию для скачивания треков в файл' : 'Спрашивать путь при каждом скачивании трека',
              onChange: onUseDefaultPathToggle,
              isChecked: useDefaultPath,
              placeholder: 'Укажите путь кнопкой справа',
              inputValue: defaultPath,
              onClick: onDefaultPathExploreClick
            })
          }), (0, pulseJsxRuntime.jsx)('li', {
            className: eb().item,
            children: (0, pulseJsxRuntime.jsx)(toggleBarWithPathChooser, {
              title: 'Путь для кеша',
              description: useCustomPathForSessionStorage ? 'Использовать путь ниже для кеша (в т.ч. ванильного скачивания треков)' : 'Использовать путь по умолчанию для кеша (в т.ч. ванильного скачивания треков)',
              onChange: onUseCustomPathForSessionStorageToggle,
              isChecked: useCustomPathForSessionStorage,
              placeholder: 'Укажите путь кнопкой справа',
              inputValue: customPathForSessionStorage,
              onClick: onCustomPathForSessionStorageExploreClick
            })
          })]
        })
      });
    }),
    appUpdatesSettings = (0, pulseMobxRuntime.PA)(() => {
      let {
          formatMessage: e
        } = (0, pulseIntlRuntime.A)(),
        {
          modals: {
            appUpdatesSettingsModal: t
          }
        } = (0, pulseSettingsRuntime.Pjs)(),
        {
          notify: o
        } = (0, pulseSettingsRuntime.lkh)(),
        onModAutoUpdateToggle = (0, pulseReactRuntime.useCallback)(async e => {
          console.log('enableModAutoUpdate toggled. Value: ', e);
          window.nativeSettings.set('modSettings.appAutoUpdates.enableModAutoUpdate', e);
          o((0, pulseJsxRuntime.jsx)(pulseSettingsUi.hT, {
            error: 'Для применения этой настройки требуется перезапуск приложения'
          }), {
            containerId: pulseSettingsRuntime.uQT.ERROR
          });
        }, [o]),
        onAppAutoUpdateByProbabilityToggle = (0, pulseReactRuntime.useCallback)(async e => {
          console.log('enableAppAutoUpdateByProbability toggled. Value: ', !e);
          window.nativeSettings.set('modSettings.appAutoUpdates.enableAppAutoUpdateByProbability', !e);
          o((0, pulseJsxRuntime.jsx)(pulseSettingsUi.hT, {
            error: 'Для применения этой настройки требуется перезапуск приложения'
          }), {
            containerId: pulseSettingsRuntime.uQT.ERROR
          });
        }, [o]),
        onAppAutoUpdateToggle = (0, pulseReactRuntime.useCallback)(async e => {
          console.log('enableAppAutoUpdate toggled. Value: ', e);
          window.nativeSettings.set('modSettings.appAutoUpdates.enableAppAutoUpdate', e);
          o((0, pulseJsxRuntime.jsx)(pulseSettingsUi.hT, {
            error: 'Для применения этой настройки требуется перезапуск приложения'
          }), {
            containerId: pulseSettingsRuntime.uQT.ERROR
          });
        }, [o]);
      return (0, pulseJsxRuntime.jsx)(pulseModal, {
        className: ev().root,
        style: {
          maxWidth: '34.375rem',
          height: 'auto'
        },
        title: 'Настройки обновлений',
        headerClassName: ev().modalHeader,
        contentClassName: ev().modalContent,
        open: t.isOpened,
        onOpenChange: t.onOpenChange,
        onClose: t.close,
        size: 'fitContent',
        placement: 'center',
        overlayColor: 'full',
        labelClose: e({
          id: 'interface-actions.close'
        }),
        children: (0, pulseJsxRuntime.jsxs)('ul', {
          className: eb().root,
          style: {
            width: '32.125rem',
            gap: 0
          },
          children: [(0, pulseJsxRuntime.jsx)('li', {
            className: eb().item,
            children: (0, pulseJsxRuntime.jsx)(em, {
              title: 'Автообновлять приложение',
              description: 'Обновлять ли приложение автоматически',
              onChange: onAppAutoUpdateToggle,
              isChecked: window.nativeSettings.getAsync('modSettings.appAutoUpdates.enableAppAutoUpdate')
            })
          }), (0, pulseJsxRuntime.jsx)('li', {
            className: eb().item,
            children: (0, pulseJsxRuntime.jsx)(em, {
              title: 'Получать обновления приложения сразу же',
              description: 'Выключает участие в получении обновлений волнами',
              onChange: onAppAutoUpdateByProbabilityToggle,
              isChecked: !window.nativeSettings.get('modSettings.appAutoUpdates.enableAppAutoUpdateByProbability')
            })
          }), (0, pulseJsxRuntime.jsx)('li', {
            className: eb().item,
            children: (0, pulseJsxRuntime.jsx)(em, {
              title: 'Проверять обновления модификации',
              description: 'Проверять ли наличие обновлений мода автоматически',
              onChange: onModAutoUpdateToggle,
              isChecked: window.nativeSettings.getAsync('modSettings.appAutoUpdates.enableModAutoUpdate')
            })
          })]
        })
      });
    }),
    ynisonSettings = (0, pulseMobxRuntime.PA)(() => {
      let {
          formatMessage: e
        } = (0, pulseIntlRuntime.A)(),
        {
          modals: {
            ynisonSettingsModal: t
          }
        } = (0, pulseSettingsRuntime.Pjs)(),
        {
          notify: o
        } = (0, pulseSettingsRuntime.lkh)(),
        [ynisonRemoteEnabled, r] = (0, pulseReactRuntime.useState)(window.ENABLE_YNISON_REMOTE_CONTROL ?? !0),
        [s, a] = (0, pulseReactRuntime.useState)(window.YNISON_INTERCEPT_PLAYBACK ?? !0),
        onEnableYnisonRemoteControlToggle = (0, pulseReactRuntime.useCallback)(async e => {
          console.log('Ynison Remote Control toggled. Value: ', e);
          window.nativeSettings.set('enableYnisonPlayerRemoteControl', e);
          r(e);
          o((0, pulseJsxRuntime.jsx)(pulseSettingsUi.hT, {
            error: 'Для применения этой настройки требуется перезапуск приложения'
          }), {
            containerId: pulseSettingsRuntime.uQT.ERROR
          });
        }, [o]),
        onYnisonInterceptPlaybackToggle = (0, pulseReactRuntime.useCallback)(async e => {
          console.log('Ynison intercept toggled. Value: ', e);
          window.nativeSettings.set('ynisonInterceptPlayback', e);
          a(e);
          o((0, pulseJsxRuntime.jsx)(pulseSettingsUi.hT, {
            error: 'Для применения этой настройки требуется перезапуск приложения'
          }), {
            containerId: pulseSettingsRuntime.uQT.ERROR
          });
        }, [o]);
      return (0, pulseJsxRuntime.jsx)(pulseModal, {
        className: ev().list,
        title: 'Ynison Remote',
        headerClassName: ev().modalHeader,
        contentClassName: ''.concat(ev().modalContent, ' Modal_content_no_right_padding'),
        open: t.isOpened,
        onOpenChange: t.onOpenChange,
        onClose: t.close,
        size: 'fitContent',
        placement: 'center',
        style: {
          maxWidth: '34.375rem',
          height: 'auto'
        },
        overlayColor: 'full',
        labelClose: e({
          id: 'interface-actions.close'
        }),
        children: (0, pulseJsxRuntime.jsxs)('ul', {
          className: ''.concat(eb().root, ' ').concat(ev().list, ' PulseSync_experimentsListScroll'),
          style: {
            width: '32.125rem',
            gap: 0
          },
          children: [(0, pulseJsxRuntime.jsx)('li', {
            className: eb().item,
            children: (0, pulseJsxRuntime.jsx)(em, {
              title: ['Удалённое управление', (0, pulseJsxRuntime.jsx)(labeledBubble, {
                label: 'BETA'
              })],
              description: 'Даст возможность управлять этим плеером с других устройств',
              onChange: onEnableYnisonRemoteControlToggle,
              isChecked: ynisonRemoteEnabled
            })
          }), (0, pulseJsxRuntime.jsx)('li', {
            className: eb().item,
            children: (0, pulseJsxRuntime.jsx)(em, {
              title: ['Перехват Ynison', (0, pulseJsxRuntime.jsx)(labeledBubble, {
                label: 'BETA',
                disabled: !ynisonRemoteEnabled
              })],
              description: 'Воспроизведение с других плееров будет автоматически переходить на этот плеер',
              onChange: onYnisonInterceptPlaybackToggle,
              isChecked: s,
              disabled: !ynisonRemoteEnabled
            })
          })]
        })
      });
    }),
    scrobblersSettings = (0, pulseMobxRuntime.PA)(() => {
      let {
          formatMessage: e
        } = (0, pulseIntlRuntime.A)(),
        {
          modals: {
            scrobblersSettingsModal: t
          }
        } = (0, pulseSettingsRuntime.Pjs)(),
        [userInfo, setUserInfo] = (0, pulseReactRuntime.useState)(null),
        [lastFmLoginError, setLastFmLoginError] = (0, pulseReactRuntime.useState)(!1),
        [unauthorizedProbe, setUnauthorizedProbe] = (0, pulseReactRuntime.useState)(!1),
        [isLastFmEnabled, setIsLastFmEnabledState] = (0, pulseReactRuntime.useState)(window.nativeSettings.get('modSettings.scrobblers.lastfm.enable')),
        [separatorType, setSeparatorType] = (0, pulseReactRuntime.useState)(window.nativeSettings.get('modSettings.scrobblers.lastfm.separatorType')),
        onLastFMLoginClick = (0, pulseReactRuntime.useCallback)(async () => {
          console.log('scrobble-lastfm-login triggered.');
          setLastFmLoginError(!1);
          try {
            await window.scrobble.lastfmLogin();
          } catch (error) {
            console.error('scrobble-lastfm-login failed.', error);
            setLastFmLoginError(!0);
          }
        }, []),
        onLastFMLogoutClick = (0, pulseReactRuntime.useCallback)(async () => {
          console.log('scrobble-lastfm-logout triggered.');
          await window.scrobble.lastfmLogout();
        }, []),
        onLastFmScrobblingToggle = (0, pulseReactRuntime.useCallback)(async e => {
          console.log('modSettings.scrobblers.lastfm.enable toggled. Value: ', e);
          window.nativeSettings.set('modSettings.scrobblers.lastfm.enable', e);
          setIsLastFmEnabledState(e);
        }, []),
        onSeparatorTypeChange = (0, pulseReactRuntime.useCallback)(async e => {
          console.log('separatorType changed. Value: ', e);
          window.nativeSettings.set('modSettings.scrobblers.lastfm.separatorType', e);
          setSeparatorType(e);
        }, []),
        onLastFmAutoLikesToggle = (0, pulseReactRuntime.useCallback)(async e => {
          console.log('modSettings.scrobblers.lastfm.autoLike toggled. Value: ', e);
          window.nativeSettings.set('modSettings.scrobblers.lastfm.autoLike', e);
        }, []),
        onLastFmFromYnisonToggle = (0, pulseReactRuntime.useCallback)(async e => {
          console.log('modSettings.scrobblers.lastfm.fromYnison toggled. Value: ', e);
          window.nativeSettings.set('modSettings.scrobblers.lastfm.fromYnison', e);
        }, []);
      return (0, pulseReactRuntime.useEffect)(() => {
        window.scrobble?.lastfmGetUser().then(e => {
          setUserInfo(e);
        });
        fetch('https://api.music.yandex.net/tracks/138005337:36143630').then(e => {
          setUnauthorizedProbe(e.ok);
        });
      }, [t.isOpened]), (0, pulseReactRuntime.useEffect)(() => {
        window.desktopEvents?.on('LASTFM_USERINFO_UPDATE', (event, e) => {
          setUserInfo(e);
        });
      }, []), (0, pulseJsxRuntime.jsx)(pulseModal, {
        className: ev().list,
        title: 'Скробблинг',
        headerClassName: ev().modalHeader,
        contentClassName: ''.concat(ev().modalContent),
        open: t.isOpened,
        onOpenChange: t.onOpenChange,
        onClose: t.close,
        size: 'fitContent',
        placement: 'center',
        overlayColor: 'full',
        style: {
          height: 'auto',
          minWidth: '430px'
        },
        labelClose: e({
          id: 'interface-actions.close'
        }),
        children: (0, pulseJsxRuntime.jsxs)('ul', {
          className: ''.concat(eb().root, ' ').concat(ev().list),
          style: {
            width: '-webkit-fill-available',
            gap: 0
          },
          children: [(0, pulseJsxRuntime.jsx)('li', {
            className: eb().item,
            ...(userInfo?.user?.image ? {
              style: {
                display: 'flex',
                alignItems: 'center',
                gap: '16px'
              }
            } : {}),
            children: [(0, pulseJsxRuntime.jsx)('div', {
              children: userInfo?.user?.image?.[0]?.['#text'] ? (0, pulseJsxRuntime.jsx)('img', {
                src: (userInfo.user.image?.find(e => 'medium' === e.size)?.['#text'] || userInfo.user.image?.[0]?.['#text']).replace('64s', 'avatar'),
                alt: 'Аватар',
                style: {
                  width: 46,
                  height: 46,
                  borderRadius: '50%'
                }
              }) : null
            }), (0, pulseJsxRuntime.jsx)(ec, {
              title: userInfo ? ''.concat(userInfo.user.name, ' (').concat(Number(userInfo.user.playcount).toLocaleString().replace(' ', ','), ')') : 'LastFM',
              description: userInfo ? 'Выйти из LastFM' : lastFmLoginError ? (0, pulseJsxRuntime.jsxs)(pulseJsxRuntime.Fragment, {
                children: ['Не удалось авторизоваться в LastFM', (0, pulseJsxRuntime.jsx)('br', {}), 'Убедитесь, что домены ниже проксируются:', (0, pulseJsxRuntime.jsx)('br', {}), 'last.fm', (0, pulseJsxRuntime.jsx)('br', {}), 'ws.audioscrobbler.com']
              }) : 'Авторизоваться в LastFM',
              onClick: userInfo ? onLastFMLogoutClick : onLastFMLoginClick
            })]
          }), (0, pulseJsxRuntime.jsx)('li', {
            className: eb().item,
            children: (0, pulseJsxRuntime.jsx)(em, {
              title: 'Скробблинг в LastFM',
              disabled: !userInfo,
              onChange: onLastFmScrobblingToggle,
              isChecked: isLastFmEnabled
            })
          }), (0, pulseJsxRuntime.jsx)('li', {
            className: eb().item,
            children: (0, pulseJsxRuntime.jsx)(settingBarWithDropdown, {
              title: 'Разделитель',
              description: 'Разделитель между артистами при скробблинге треков с несколькими артистами',
              onChange: onSeparatorTypeChange,
              value: separatorType,
              direction: 'bottom',
              options: [{
                value: 0,
                label: 'Нет',
                description: 'Только первый артист'
              }, {
                value: 1,
                label: '" & "',
                description: 'Артист & артист'
              }, {
                value: 2,
                label: '" | "',
                description: 'Артист | артист'
              }, {
                value: 3,
                label: '", "',
                description: 'Артист, артист'
              }],
              disabled: !isLastFmEnabled
            })
          }), (0, pulseJsxRuntime.jsx)('li', {
            className: eb().item,
            children: (0, pulseJsxRuntime.jsx)(em, {
              title: 'Синхронизировать лайки',
              description: 'Автоматически лайкает/анлайкает треки в LastFM',
              disabled: !(userInfo && isLastFmEnabled),
              onChange: onLastFmAutoLikesToggle,
              isChecked: window.nativeSettings.getAsync('modSettings.scrobblers.lastfm.autoLike')
            })
          }), (0, pulseJsxRuntime.jsx)('li', {
            className: eb().item,
            children: (0, pulseJsxRuntime.jsx)(em, {
              title: ['Использовать Ynison', (0, pulseJsxRuntime.jsx)(labeledBubble, {
                label: 'BETA',
                disabled: !(userInfo && isLastFmEnabled && unauthorizedProbe)
              })],
              description: unauthorizedProbe ? 'Скробблить проигрывания даже с других устройств' : 'Недоступно в вашем регионе или регионе VPN',
              disabled: !(userInfo && isLastFmEnabled && unauthorizedProbe),
              onChange: onLastFmFromYnisonToggle,
              isChecked: window.nativeSettings.getAsync('modSettings.scrobblers.lastfm.fromYnison')
            })
          })]
        })
      });
    });
  let eS = (0, pulseMobxRuntime.PA)(() => {
    let e = (0, pulseSettingsRuntime.HFS)(),
      t = (0, pulseSettingsRuntime.NFA)().get(pulseSettingsRuntime.ooW),
      {
        modals: {
          shortcutsModal: pulseShortcutsModal,
          aboutAppModal: aboutAppModal,
          clearMemoryModal: r,
          windowSettingsModal: se,
          playerSettingsModal: aeModal,
          audioSettingsModal: audioSettingsModal,
          myVibeAnimationAppearanceSettingsModal: myVibeAnimationAppearanceSettingsModal,
          myVibeAnimationPerformanceSettingsModal: myVibeAnimationPerformanceSettingsModal,
          appUpdatesSettingsModal: appUpdatesSettingsModal,
          systemSettingsModal: deModal,
          globalShortcutsSettingsModal: globalShortcutsSettingsModal,
          myVibeParamsSettingsModal: myVibeParamsSettingsModal,
          miniPlayerSettingsModal: ueModal,
          ynisonSettingsModal: ynisonSettingsModal,
          scrobblersSettingsModal: scrobblersSettingsModal,
          downloaderSettingsModal: downloaderSettingsModal,
          discordRpcSettingsModal: discordRpcSettingsModal,
          lrclibSettingsModal: lrclibSettingsModal
        },
        experiments: pulseExperiments,
        wizard: pulseWizard,
        user: pulseUser,
        slam: pulseSlam,
        settings: pulseSettings,
        sonataState: pulseSonataState
      } = (0, pulseSettingsRuntime.Pjs)(),
      h = (0, pulseEqualizerRuntime.S)(),
      {
        notify: f
      } = (0, pulseSettingsRuntime.lkh)(),
      {
        formatMessage: x
      } = (0, pulseIntlRuntime.A)(),
      importMediaLink = (() => {
        let e = (0, pulseSettingsRuntime.NFA)().get(pulseSettingsRuntime.twC),
          t = (0, pulseSettingsRuntime._lF)(e?.oldWebHost ?? 'music.yandex.ru'),
          {
            language: o
          } = (0, pulseSettingsRuntime.h6b)();
        return 'https://'.concat(t, '/newimport?lang=').concat(o);
      })(),
      b = (0, pulseSettingsRuntime.gQL)(),
      j = h.isAvailable && !pulseSettings.isMobile,
      C = pulseExperiments.checkExperiment(pulseSettingsRuntime.zal.WebNextCrossMediaPlayer, 'on'),
      aiContentReductionSettingEnabled = pulseExperiments.checkExperiment(pulseSettingsRuntime.zal.WebNextAIContentReductionSetting, 'on'),
      y = pulseUser.hasPlus,
      N = pulseExperiments.checkExperiment(pulseSettingsRuntime.zal.WebNextLiteVersion, 'on') && pulseSettings.isLiteVersionModeAvailableForToggle && !0,
      S = pulseExperiments.checkExperiment(pulseSettingsRuntime.zal.WebNextCustomThumb, 'on') && !pulseSettings.isMobile,
      equalizerStatusLabel = h.isEnabled ? x({
        id: 'equalizer.enabled'
      }) : x({
        id: 'equalizer.disabled'
      }),
      E = (0, pulseReactRuntime.useMemo)(() => ''.concat(x({
        id: 'desktop.app-version-short'
      }, {
        version: e
      }), ' / Мод ').concat(window.PULSE_VERSION, ' / Хост ').concat(window.HOST_VERSION), [!0, x, e]),
      [ae, ce] = (0, pulseReactRuntime.useState)(window.nativeSettings?.get('modSettings.showNonMusicPage') ?? !0),
      [de, ue] = (0, pulseReactRuntime.useState)(window.nativeSettings?.get('modSettings.showConcertsTab') ?? !0),
      [appendPlaylistTracksToEnd, setAppendPlaylistTracksToEnd] = (0, pulseReactRuntime.useState)(window.nativeSettings?.get('modSettings.playlist.addTracksToEndFromContextMenu') ?? !1),
      [me, pe] = (0, pulseReactRuntime.useState)(window.nativeSettings?.get('devMode') ?? !1),
      [downloadedTracksInfo, setDownloadedTracksInfo] = (0, pulseReactRuntime.useState)({
        tracksCount: void 0,
        tracksSize: void 0
      }),
      oe = (0, pulseReactRuntime.useCallback)(() => {
        f((0, pulseJsxRuntime.jsx)(pulseSettingsUi.hT, {
          error: 'Для применения этой настройки требуется перезапуск приложения'
        }), {
          containerId: pulseSettingsRuntime.uQT.ERROR
        });
      }, [f]),
      childModeToggle = (0, pulseReactRuntime.useCallback)(async e => {
        (await pulseUser.setSettings({
          isChildModeEnabled: e
        })) === pulseSettingsRuntime.FlZ.ERROR && f((0, pulseJsxRuntime.jsx)(pulseSettingsUi.hT, {
          error: x({
            id: 'settings.failed-to-change-child-mode'
          })
        }), {
          containerId: pulseSettingsRuntime.uQT.ERROR
        });
      }, [pulseUser, x, f]),
      aiContentReductionToggle = (0, pulseReactRuntime.useCallback)(async e => {
        (await pulseUser.setSettings({
          aiContentReductionEnabled: e
        })) === pulseSettingsRuntime.FlZ.ERROR && f((0, pulseJsxRuntime.jsx)(pulseSettingsUi.hT, {
          error: x({
            id: 'error-messages.error-during-action'
          })
        }), {
          containerId: pulseSettingsRuntime.uQT.ERROR
        });
      }, [pulseUser, x, f]),
      O = (0, pulseReactRuntime.useCallback)(e => {
        pulseSlam.setOfflineMode(e);
      }, [pulseSlam]),
      Y = (0, pulseReactRuntime.useCallback)(() => {
        r.open();
      }, [r]),
      V = (0, pulseReactRuntime.useCallback)(e => {
        if (e) return void pulseSettings.setLiteVersionMode(pulseSettingsRuntime.wv5.ENABLED, !0);
        pulseSettings.setLiteVersionMode(pulseSettingsRuntime.wv5.DISABLED, !0);
      }, [pulseSettings]),
      Gt = (0, pulseReactRuntime.useCallback)(e => {
        window.nativeSettings?.set('modSettings.showNonMusicPage', e), ce(e), oe();
      }, [oe]),
      Qt = (0, pulseReactRuntime.useCallback)(e => {
        window.nativeSettings?.set('modSettings.showConcertsTab', e), ue(e), oe();
      }, [oe]),
      togglePlaylistAddTrackToEnd = (0, pulseReactRuntime.useCallback)(e => {
        window.nativeSettings?.set('modSettings.playlist.addTracksToEndFromContextMenu', e), setAppendPlaylistTracksToEnd(e);
      }, []),
      Xt = (0, pulseReactRuntime.useCallback)(e => {
        window.nativeSettings?.set('devMode', e), pe(e), oe();
      }, [oe]),
      Zt = (0, pulseReactRuntime.useCallback)(() => {
        window.openConfigFile?.();
      }, []);
    (0, pulseReactRuntime.useEffect)(() => {
      let e = async () => {
        let o = async e => {
            let t = {
              tracksCount: 0,
              tracksSize: 0
            };
            for await (let n of e.values()) if ('directory' === n.kind) {
              let e = await o(n);
              t.tracksCount += e.tracksCount, t.tracksSize += e.tracksSize;
            } else if ('file' === n.kind && !n.name.endsWith('.crswap')) try {
              let e = await n.getFile();
              t.tracksCount += 1, t.tracksSize += e.size;
            } catch (e) {
              console.warn('Track file is in use. Skipping...', e);
            }
            return t;
          },
          t = async e => {
            for await (let n of e.values()) if ('directory' === n.kind && 'tracks' === n.name) return o(n);
            return {
              tracksCount: 0,
              tracksSize: 0
            };
          };
        if (!window.navigator?.storage?.getDirectory) return;
        let n = await window.navigator.storage.getDirectory();
        setDownloadedTracksInfo(await t(n));
      };
      return window.onDownloadedTracksDeleted = () => {
        setDownloadedTracksInfo({
          tracksCount: 0,
          tracksSize: 0
        });
      }, e(), () => {
        window.onDownloadedTracksDeleted = null;
      };
    }, []);
    (0, pulseReactRuntime.useLayoutEffect)(() => {
      let e = t.get(pulseSettingsRuntime.cYZ.CrossFadeMode);
      'boolean' == typeof e && pulseSonataState.setCrossFadeMode(e);
    }, [pulseSonataState, t]);
    let te = (0, pulseReactRuntime.useCallback)(e => {
        pulseSonataState.setCrossFadeMode(e);
      }, [pulseSonataState, b]),
      formatBytes = e => {
        if ('number' != typeof e || e < 0) return '0 B';
        let t = ['B', 'KB', 'MB', 'GB'],
          o = 0;
        for (; e >= 1024 && o < t.length - 1;) e /= 1024, o++;
        return ''.concat(e.toFixed(2), ' ').concat(t[o]);
      },
      getTrackWordForm = e => {
        if ('number' != typeof e || e < 0 || !Number.isInteger(e)) return 'треков';
        let t = e % 10,
          o = e % 100;
        return o >= 11 && o <= 19 ? 'треков' : 1 === t ? 'трек' : t >= 2 && t <= 4 ? 'трека' : 'треков';
      };
    let [modScreen, setModScreen] = (0, pulseReactRuntime.useState)(!1);
    
    (0, pulseReactRuntime.useEffect)(() => {
      if (!modScreen) return;
      const onBackClick = (e) => {
        const btn = e.target && e.target.closest && e.target.closest('button');
        if (btn && 'Вернуться назад' === btn.getAttribute('aria-label')) {
          e.preventDefault(), e.stopPropagation();
          setModScreen(!1);
        }
      };
      document.addEventListener('click', onBackClick, !0);
      return () => document.removeEventListener('click', onBackClick, !0);
    }, [modScreen]);
    return (0, pulseJsxRuntime.jsxs)('ul', {
      className: eb().root,
      ...(0, pulseDataTest.Am)(pulseDataTest.e8.settings.SETTINGS_LIST),
      children: [!modScreen &&
          (0, pulseJsxRuntime.jsx)('li', {
            className: eb().item,
            children: (0, pulseJsxRuntime.jsx)(ec, {
              title: 'Настройки мода',
              description: 'Все параметры PulseSync в одном месте',
              onClick: () => setModScreen(!0)
            })
          }), !modScreen && [y && (0, pulseJsxRuntime.jsx)('li', {
        className: eb().item,
        children: (0, pulseJsxRuntime.jsx)(em, {
          title: x({
            id: 'offline.offline-mode'
          }),
          description: x({
            id: 'offline.offline-mode-description'
          }),
          onChange: O,
          isChecked: !!pulseSlam.isOfflineModeEnabled,
          dataTestId: (0, pulseDataTest.Am)(pulseDataTest.e8.settings.OFFLINE_MODE_TOGGLE)
        })
      }), N && (0, pulseJsxRuntime.jsx)('li', {
        className: eb().item,
        children: (0, pulseJsxRuntime.jsx)(em, {
          title: x({
            id: 'lite-version.title'
          }),
          description: x({
            id: 'lite-version.description'
          }),
          onChange: V,
          isChecked: pulseSettings.isLiteVersionModeEnabled
        })
      }), j && (0, pulseJsxRuntime.jsxs)('li', {
        className: eb().item,
        children: [(0, pulseJsxRuntime.jsx)(ec, {
          title: x({
            id: 'equalizer.title'
          }),
          description: equalizerStatusLabel,
          onClick: h.modal.open,
          descriptionProps: (0, pulseDataTest.Am)(pulseDataTest.e8.settings.SETTINGS_EQUALIZER_BUTTON_DESCRIPTION),
          ...(0, pulseDataTest.Am)(pulseDataTest.e8.settings.SETTINGS_EQUALIZER_BUTTON)
        }), (0, pulseJsxRuntime.jsx)(pulseEqualizerModal, {})]
      }), (0, pulseJsxRuntime.jsx)(pulseSettingsUi.aQ, {
        fallback: (0, pulseJsxRuntime.jsx)('li', {
          className: eb().item,
          children: (0, pulseJsxRuntime.jsx)(ec, {
            title: x({
              id: 'settings.preferences'
            }),
            description: x({
              id: 'settings.preferences-description'
            }),
            onClick: pulseWizard.modal.open
          })
        })
      }),  C && (0, pulseJsxRuntime.jsx)('li', {
        className: eb().item,
        children: (0, pulseJsxRuntime.jsx)(em, {
          title: x({
            id: 'settings.crossfade'
          }),
          onChange: te,
          isChecked: pulseSonataState.isCrossFadeEnabled
        })
      })], modScreen && [
        (0, pulseJsxRuntime.jsx)('li', {
            className: eb().item,
            children: (0, pulseJsxRuntime.jsx)(ec, {
              title: 'Импорт медиатеки',
              description: 'Перенесите плейлисты из других сервисов в Яндекс Музыку',
              onClick: () => window.open(importMediaLink, '_blank')
            })
          }), (0, pulseJsxRuntime.jsx)('li', {
        className: eb().item,
        children: (0, pulseJsxRuntime.jsx)(em, {
          title: 'Добавлять треки в конец плейлиста',
          description: 'При добавлении из контекстного меню трек будет вставляться в конец, а не в начало',
          onChange: togglePlaylistAddTrackToEnd,
          isChecked: appendPlaylistTracksToEnd
        })
      }), (0, pulseJsxRuntime.jsx)(settingsCategorySeparator, {
        text: 'Скачивание и Кеш'
      }), (0, pulseJsxRuntime.jsx)('li', {
        className: eb().item,
        children: (0, pulseJsxRuntime.jsx)(ec, {
          title: 'Скачивание треков',
          description: 'Настройки оффлайн прослушивания, а также скачивания в файл',
          onClick: downloaderSettingsModal.open
        })
      }), y && (0, pulseJsxRuntime.jsxs)('li', {
        className: eb().item,
        children: (() => {
          let e = downloadedTracksInfo.tracksCount ?? 0;
          return [(0, pulseJsxRuntime.jsx)(ec, {
            title: x({
              id: 'offline.clear-memory'
            }),
            description: 'Скачан'.concat(e % 10 === 1 && e % 100 !== 11 ? '' : 'о', ' ').concat(e, ' ').concat(getTrackWordForm(e), ' (').concat(formatBytes(downloadedTracksInfo.tracksSize), ')'),
            onClick: Y
          }), (0, pulseJsxRuntime.jsx)(H, {})];
        })()
      }), (0, pulseJsxRuntime.jsx)(settingsCategorySeparator, {
        text: 'Отключение разделов'
      }), (0, pulseJsxRuntime.jsx)(pulseSettingsUi.aQ, {
        fallback: !pulseExperiments.checkExperiment(pulseSettingsRuntime.zal.WebNextDisableKids, 'on') && (0, pulseJsxRuntime.jsx)('li', {
          className: eb().item,
          children: (0, pulseJsxRuntime.jsx)(em, {
            title: x({
              id: 'settings.show-child-section'
            }),
            onChange: childModeToggle,
            isChecked: pulseUser.settings.isChildModeEnabled,
            dataTestId: (0, pulseDataTest.Am)(pulseDataTest.e8.settings.SETTINGS_KIDS_BUTTON)
          })
        })
      }), (0, pulseJsxRuntime.jsx)('li', {
        className: eb().item,
        children: (0, pulseJsxRuntime.jsx)(em, {
          title: 'Показывать раздел «Подкасты и книги»',
          onChange: Gt,
          isChecked: ae
        })
      }), (0, pulseJsxRuntime.jsx)('li', {
        className: eb().item,
        children: (0, pulseJsxRuntime.jsx)(em, {
          title: 'Показывать раздел «Концерты»',
          onChange: Qt,
          isChecked: de
        })
      }), (0, pulseJsxRuntime.jsx)(settingsCategorySeparator, {
        text: 'Горячие клавиши'
      }), (0, pulseJsxRuntime.jsxs)('li', {
        className: eb().item,
        children: [(0, pulseJsxRuntime.jsx)(ec, {
          title: x({
            id: 'settings.shortcuts'
          }),
          onClick: pulseShortcutsModal.open
        }), (0, pulseJsxRuntime.jsx)(ex, {})]
      }), (0, pulseJsxRuntime.jsx)('li', {
        className: eb().item,
        children: (0, pulseJsxRuntime.jsx)(ec, {
          title: 'Глобальные горячие клавиши',
          description: 'Действия, кейбинды и группы действий',
          onClick: globalShortcutsSettingsModal.open
        })
      }), (0, pulseJsxRuntime.jsx)(globalShortcutsSettings, {}), S && (0, pulseJsxRuntime.jsx)('li', {
        className: eb().item,
        children: (0, pulseJsxRuntime.jsx)(en, {})
      }), (0, pulseJsxRuntime.jsx)(settingsCategorySeparator, {
        text: 'Моя Волна'
      }), aiContentReductionSettingEnabled && (0, pulseJsxRuntime.jsx)('li', {
        className: eb().item,
        children: (0, pulseJsxRuntime.jsx)(em, {
          title: x({
            id: 'settings.ai-content-reduction'
          }),
          description: x({
            id: 'settings.ai-content-reduction-description'
          }),
          onChange: aiContentReductionToggle,
          isChecked: pulseUser.settings.aiContentReductionEnabled,
          dataTestId: (0, pulseDataTest.Am)(pulseDataTest.e8.settings.SETTINGS_AI_CONTENT_REDUCTION_BUTTON)
        })
      }), (0, pulseJsxRuntime.jsx)('li', {
        className: eb().item,
        children: (0, pulseJsxRuntime.jsx)(ec, {
          title: 'Производительность анимации Волны',
          description: 'Отключение анимации, FPS, разрешение и т.п.',
          onClick: myVibeAnimationPerformanceSettingsModal.open
        })
      }), (0, pulseJsxRuntime.jsx)('li', {
        className: eb().item,
        children: (0, pulseJsxRuntime.jsx)(ec, {
          title: 'Вид анимации Волны',
          description: 'Настройка визуального вида Моей Волны',
          onClick: myVibeAnimationAppearanceSettingsModal.open
        })
      }), (0, pulseJsxRuntime.jsx)('li', {
        className: eb().item,
        children: (0, pulseJsxRuntime.jsx)(ec, {
          title: 'Поведение Волны',
          description: 'Настройка поведения Волны',
          onClick: myVibeParamsSettingsModal.open
        })
      }), (0, pulseJsxRuntime.jsx)(settingsCategorySeparator, {
        text: 'UI и Плеер'
      }), (0, pulseJsxRuntime.jsx)('li', {
        className: eb().item,
        children: (0, pulseJsxRuntime.jsx)(ec, {
          title: 'Поведение окна',
          description: 'Настройки поведения окна приложения',
          onClick: se.open
        })
      }), (0, pulseJsxRuntime.jsx)('li', {
        className: eb().item,
        children: (0, pulseJsxRuntime.jsx)(ec, {
          title: 'Панель плеера',
          description: 'Настройки элементов на панели плеера',
          onClick: aeModal.open
        })
      }), (0, pulseJsxRuntime.jsx)('li', {
        className: eb().item,
        children: (0, pulseJsxRuntime.jsx)(ec, {
          title: 'Миниплеер',
          description: 'Настройки поведения миниплеера',
          onClick: ueModal.open
        })
      }), (0, pulseJsxRuntime.jsx)(settingsCategorySeparator, {
        text: 'Интеграции'
      }), (0, pulseJsxRuntime.jsx)('li', {
        className: eb().item,
        children: (0, pulseJsxRuntime.jsx)(ec, {
          title: 'Discord RPC',
          description: 'Интеграция с Discord',
          onClick: discordRpcSettingsModal.open
        })
      }), (0, pulseJsxRuntime.jsx)('li', {
        className: eb().item,
        children: (0, pulseJsxRuntime.jsx)(ec, {
          title: 'Скробблинг',
          description: 'Авторизация в Last.fm и другие настройки',
          onClick: scrobblersSettingsModal.open
        })
      }), (0, pulseJsxRuntime.jsx)('li', {
        className: eb().item,
        children: (0, pulseJsxRuntime.jsx)(ec, {
          title: ['Настройки LRCLib', (0, pulseJsxRuntime.jsx)(labeledBubble, {
            label: 'BETA'
          })],
          description: 'Поиск текста песен в LRCLib и режимы отображения',
          onClick: lrclibSettingsModal.open
        })
      }), (0, pulseJsxRuntime.jsx)(settingsCategorySeparator, {
        text: 'Система и Синхронизация'
      }), (0, pulseJsxRuntime.jsx)('li', {
        className: eb().item,
        children: (0, pulseJsxRuntime.jsx)(ec, {
          title: 'Системные настройки',
          description: 'Автозапуск, аппаратное ускорение и т.п.',
          onClick: deModal.open
        })
      }), (0, pulseJsxRuntime.jsx)('li', {
        className: eb().item,
        children: (0, pulseJsxRuntime.jsx)(ec, {
          title: 'Настройки аудио',
          description: 'Нормализация громкости и пространственный звук',
          onClick: audioSettingsModal.open
        })
      }), (0, pulseJsxRuntime.jsx)('li', {
        className: eb().item,
        children: (0, pulseJsxRuntime.jsx)(ec, {
          title: ['Ynison Remote', (0, pulseJsxRuntime.jsx)(labeledBubble, {
            label: 'BETA'
          })],
          description: 'Настройки удалённого управления',
          onClick: ynisonSettingsModal.open
        })
      }), (0, pulseJsxRuntime.jsx)('li', {
        className: eb().item,
        children: (0, pulseJsxRuntime.jsx)(ec, {
          title: 'Обновления',
          description: 'Настройки обновлений программы и мода',
          onClick: appUpdatesSettingsModal.open
        })
      })], !modScreen && E && (0, pulseJsxRuntime.jsxs)('li', {
        className: eb().item,
        children: [(0, pulseJsxRuntime.jsx)(ec, {
          title: x({
            id: 'settings.about-app'
          }),
          description: E,
          onClick: aboutAppModal.open
        }), (0, pulseJsxRuntime.jsx)(P, {})]
      }), modScreen && [(0, pulseJsxRuntime.jsx)(settingsCategorySeparator, {
        text: 'Прочие'
      }), (0, pulseJsxRuntime.jsx)('li', {
        className: eb().item,
        children: (0, pulseJsxRuntime.jsx)(em, {
          title: 'Режим разработчика',
          description: 'Разблокирует Chromium DevTools и dev-панель мода',
          onChange: Xt,
          isChecked: me
        })
      }), (0, pulseJsxRuntime.jsx)('li', {
        className: eb().item,
        children: (0, pulseJsxRuntime.jsx)(ec, {
          title: 'Прочие настройки мода',
          description: 'Открывает config.json Яндекс Музыки',
          onClick: Zt
        })
      }), (0, pulseJsxRuntime.jsx)(systemSettings, {}), (0, pulseJsxRuntime.jsx)(myVibeAnimationPerformanceSettings, {}), (0, pulseJsxRuntime.jsx)(myVibeAnimationAppearanceSettings, {}), (0, pulseJsxRuntime.jsx)(myVibeParamsSettings, {}), (0, pulseJsxRuntime.jsx)(playerSettings, {}), (0, pulseJsxRuntime.jsx)(lrclibSettings, {}), (0, pulseJsxRuntime.jsx)(audioSettings, {}), (0, pulseJsxRuntime.jsx)(windowSettings, {}), (0, pulseJsxRuntime.jsx)(miniPlayerSettings, {}), (0, pulseJsxRuntime.jsx)(scrobblersSettings, {}), (0, pulseJsxRuntime.jsx)(downloaderSettings, {}), (0, pulseJsxRuntime.jsx)(appUpdatesSettings, {}), (0, pulseJsxRuntime.jsx)(discordRpcSettings, {}), (0, pulseJsxRuntime.jsx)(ynisonSettings, {})]],
    });
  });
  var psSep = r(29130),
    eg = r(7999),
    eN = r(83808),
    eO = r(83920),
    psFooter = r(97841),
    eR = r(32468),
    eI = r(74694),
    eT = r(37892),
    ey = r.n(eT);
  let ej = (0, s.PA)(() => {
    let {
        formatMessage: e
      } = (0, n.A)(),
      {
        contentScrollRef: t,
        setContentScrollRef: r
      } = (0, eO.g)(),
      s = (0, eN.W)();
    return (0, o.jsxs)(eg.h, {
      scrollElement: t,
      outerTitle: e({
        id: 'page.settings'
      }),
      children: [(0, o.jsx)(eI.Y, {
        variant: eI.V.TEXT,
        withForwardControl: !1,
        withBackwardControl: s.canBack,
        children: (0, o.jsx)(c.DZ, {
          variant: 'h2',
          weight: 'bold',
          size: 'xl',
          lineClamp: 1,
          children: (0, o.jsx)(i.A, {
            id: 'page.settings'
          })
        })
      }), (0, o.jsx)(a.N, {
        ref: r,
        className: ey().root,
        containerClassName: ey().scrollableContainer,
        'data-test-id': l.Xk.settings.SETTINGS_PAGE,
        children: (0, o.jsxs)('div', {
          className: ey().container,
          children: [(0, o.jsx)('div', {
            className: ey().content,
            children: (0, o.jsx)(eS, {})
          }), (0, o.jsx)(psSep.p, {}), (0, o.jsx)(eR.A, {
            children: (0, o.jsx)(psFooter.w, {
              className: ey().footer
            })
          })]
        })
      })]
    });
  });
},

        73818: (e, t, r) => {
            'use strict';
            r.d(t, { p: () => n });
            let n = (0, r(55178).createContext)({
                blockId: void 0,
                blockType: void 0,
                blockIdForFrom: void 0,
                blockPosX: void 0,
                blockPosY: void 0,
                objectsCount: void 0,
                mainObjectType: void 0,
                mainObjectId: void 0,
                displayReasonId: void 0,
            });
        },
        74196: (e, t, r) => {
            'use strict';
            r.d(t, { q: () => c });
            var n,
                o = r(55178),
                s = {
                    5881: (e, t, r) => {
                        function n() {
                            for (var e, t, r = 0, n = ''; r < arguments.length;)
                                (e = arguments[r++]) &&
                                    (t = (function e(t) {
                                        var r,
                                            n,
                                            o = '';
                                        if ('string' == typeof t || 'number' == typeof t) o += t;
                                        else if ('object' == typeof t)
                                            if (Array.isArray(t)) for (r = 0; r < t.length; r++) t[r] && (n = e(t[r])) && (o && (o += ' '), (o += n));
                                            else for (r in t) t[r] && (o && (o += ' '), (o += r));
                                        return o;
                                    })(e)) &&
                                    (n && (n += ' '), (n += t));
                            return n;
                        }
                        (r.r(t), r.d(t, { clsx: () => n, default: () => o }));
                        let o = n;
                    },
                    7319: (e, t, r) => {
                        (r.r(t), r.d(t, { default: () => n }));
                        let n = { root: 'eaYyesBmJL_NbkgoYR1c', focusable: 'uL1dD5rxgI4bPmfyMMe7' };
                    },
                    9097: (e, t) => {
                        var r = Symbol.for('react.transitional.element');
                        function n(e, t, n) {
                            var o = null;
                            if ((void 0 !== n && (o = '' + n), void 0 !== t.key && (o = '' + t.key), 'key' in t))
                                for (var s in ((n = {}), t)) 'key' !== s && (n[s] = t[s]);
                            else n = t;
                            return { $$typeof: r, type: e, key: o, ref: void 0 !== (t = n.ref) ? t : null, props: n };
                        }
                        ((t.Fragment = Symbol.for('react.fragment')), (t.jsx = n), (t.jsxs = n));
                    },
                    4377: (e, t, r) => {
                        e.exports = r(9097);
                    },
                    5531: function (e, t, r) {
                        var n =
                            (this && this.__importDefault) ||
                            function (e) {
                                return e && e.__esModule ? e : { default: e };
                            };
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.SROnly = void 0));
                        let o = r(4377),
                            s = r(5881),
                            i = r(810),
                            a = n(r(7319));
                        t.SROnly = (e) => {
                            let { className: t, focusable: r, children: n, ...l } = e,
                                c = (0, s.clsx)(a.default.root, { [a.default.focusable]: r }, t);
                            return (0, i.isValidElement)(n)
                                ? (0, i.cloneElement)(n, { ...l, className: (0, s.clsx)(c, n.props.className) })
                                : (0, o.jsx)('span', { className: c, ...l, children: n });
                        };
                    },
                    810: (e) => {
                        e.exports = n || (n = r.t(o, 2));
                    },
                },
                i = {};
            function a(e) {
                var t = i[e];
                if (void 0 !== t) return t.exports;
                var r = (i[e] = { exports: {} });
                return (s[e].call(r.exports, r, r.exports, a), r.exports);
            }
            ((a.d = (e, t) => {
                for (var r in t) a.o(t, r) && !a.o(e, r) && Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
            }),
                (a.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
                (a.r = (e) => {
                    ('undefined' != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
                        Object.defineProperty(e, '__esModule', { value: !0 }));
                }));
            var l = {};
            (() => {
                (Object.defineProperty(l, '__esModule', { value: !0 }), (l.SROnly = void 0));
                var e = a(5531);
                Object.defineProperty(l, 'SROnly', {
                    enumerable: !0,
                    get: function () {
                        return e.SROnly;
                    },
                });
            })();
            var c = l.SROnly;
            l.__esModule;
        },
        74416: (e, t, r) => {
            'use strict';
            r.d(t, { vZ: () => h, st: () => s, gf: () => a });
            var n = r(55178);
            let o = (0, n.createContext)(null);
            function s() {
                return (0, n.useContext)(o);
            }
            let i = (0, n.createContext)({ hash: void 0 });
            function a() {
                return (0, n.useContext)(i);
            }
            var l = r(32290),
                c = r(27576);
            let d = (e) => {
                let { children: t } = e,
                    r = (0, n.useMemo)(() => ({ hash: (0, c.A)() }), []);
                return (0, l.jsx)(i.Provider, { value: r, children: t });
            };
            class u {
                makeParams() {
                    return {};
                }
            }
            class _ {
                makeParams() {
                    return {};
                }
            }
            var m = r(91945);
            class f {
                get evgenInstance() {
                    return this.evgen;
                }
                sendEvent(e, t) {
                    this.evgen.trackEvent(e, t);
                }
                constructor(e, t, r) {
                    ((0, m._)(this, 'evgen', void 0),
                        (this.evgen = {
                            trackEvent: (n, o) => {
                                let s = { ...o, ...t.getGlobalParams(), ...r.getPlatformParams() };
                                e.trackEvent(n, s);
                            },
                        }));
                }
            }
            let p = null,
                h = (e) => {
                    let { allowAnalyticsLogs: t, children: r, evgenUserParam: s, logger: i, metrika: a } = e,
                        c = (0, n.useMemo)(() => {
                            if (p) return p;
                            let e = (function (e, t, r) {
                                let n = (function (e) {
                                    let { callback: t, maxSendingItemsPerRequest: r, requestsSendingDelay: n } = e,
                                        o = [];
                                    return (
                                        !(function e() {
                                            (o.length > 0 && t(o.splice(0, r)), window.setTimeout(e, n));
                                        })(),
                                        {
                                            add(e) {
                                                o.push(e);
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
                                    trackEvent(e, o) {
                                        (r && t.log(e, o), n.add({ [e]: o }));
                                    },
                                };
                            })((e) => a.count(e, s), i, t);
                            return (p = new f(
                                e,
                                (function () {
                                    let e = new u();
                                    return { getGlobalParams: () => e };
                                })(),
                                (function () {
                                    let e = new _();
                                    return { getPlatformParams: () => e };
                                })(),
                            ));
                        }, [i, a]);
                    return (0, l.jsx)(o.Provider, { value: c, children: (0, l.jsx)(d, { children: r }) });
                };
        },
        74653: (e, t, r) => {
            'use strict';
            r.d(t, { j: () => n });
            let n = (0, r(55178).createContext)({ isPrefetchDisabled: !0, isPrefetchOnHover: !1 });
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
        80536: (e, t, r) => {
            'use strict';
            r.d(t, { B: () => n });
            let n = (0, r(55178).createContext)({ observeElement: () => {}, unobserveElement: () => {} });
        },
        80556: (e) => {
            e.exports = {
                root: 'EntityCardShimmer_root__Sh7ah',
                subcover: 'EntityCardShimmer_subcover__ESt3R',
                cover: 'EntityCardShimmer_cover__BXtjT',
                cover_round: 'EntityCardShimmer_cover_round__Ci3zW',
                cover_withSubcover: 'EntityCardShimmer_cover_withSubcover__v9l5y',
                infoContainer: 'EntityCardShimmer_infoContainer__22kYk',
                infoContainer_centered: 'EntityCardShimmer_infoContainer_centered__cxlPO',
                title: 'EntityCardShimmer_title__GQ2jX',
                title_withSubcover: 'EntityCardShimmer_title_withSubcover__lBHBC',
                content_linesCount_1: 'EntityCardShimmer_content_linesCount_1__JHlue',
                content_linesCount_2: 'EntityCardShimmer_content_linesCount_2__CMvO5',
                content_linesCount_3: 'EntityCardShimmer_content_linesCount_3__mPzav',
                content_linesCount_4: 'EntityCardShimmer_content_linesCount_4__8KtHO',
            };
        },
        80872: (e, t, r) => {
            'use strict';
            r.d(t, { A: () => n });
            let n = {
                src: '/_next/static/media/artist.d238337d.webp',
                height: 327,
                width: 327,
                blurDataURL:
                    'data:image/webp;base64,UklGRpIAAABXRUJQVlA4WAoAAAAQAAAABwAABwAAQUxQSDcAAAABN6AmAAFGLREF9q0aERG4Qx2sIslqLIhkYEj/WQECkgJwcBfR/5j9mQEnwGchWUgR7oAz228AAFZQOCA0AAAA0AEAnQEqCAAIAAJAOCWUAAMX+VdAjqAA/ubxr1dKCvvMhnGE/guc0nvMLJJkD5h+3R4AAA==',
                blurWidth: 8,
                blurHeight: 8,
            };
        },
        81218: (e, t, r) => {
            'use strict';
            r.d(t, { c: () => o, g: () => s });
            var n = r(55178);
            let o = (0, n.createContext)(null);
            function s() {
                return (0, n.useContext)(o);
            }
        },
        84782: (e, t, r) => {
            'use strict';
            r.d(t, { N: () => s });
            var n = r(55178),
                o = r(73818);
            function s() {
                return (0, n.useContext)(o.p);
            }
        },
        85892: (e) => {
            e.exports = {
                root: 'SettingsListToggleItem_root__yEEYT',
                textContainer: 'SettingsListToggleItem_textContainer__tRjyt',
                title: 'SettingsListToggleItem_title__Xz8_Q',
                description: 'SettingsListToggleItem_description__JBOzV',
            };
        },
        88964: (e, t, r) => {
            'use strict';
            r.d(t, { j: () => s });
            var n = r(70204),
                o = r(34186);
            function s() {
                return (0, o.N)().get(n.y$);
            }
        },
        89020: (e, t, r) => {
            'use strict';
            r.d(t, { V: () => c });
            var n = r(32290),
                o = r(63618),
                s = r(21732),
                i = r(79856),
                a = r(80556),
                l = r.n(a);
            let c = (e) => {
                let {
                    isActive: t,
                    className: r,
                    shimmerClassName: a,
                    round: c,
                    'aria-label': d,
                    centered: u,
                    withInfo: _ = !0,
                    linesCount: m = 3,
                    withSubcover: f,
                    radius: p = 'l',
                } = e;
                return (0, n.jsxs)('div', {
                    'aria-label': d,
                    'aria-live': t ? 'polite' : 'off',
                    'aria-busy': t,
                    className: (0, o.$)(l().root, r),
                    'data-test-id': s.S7.ENTITY_CARD_SHIMMER,
                    children: [
                        f && (0, n.jsx)(i.W, { isActive: t, className: l().subcover, radius: 'l' }),
                        (0, n.jsx)(i.W, { isActive: t, className: (0, o.$)(l().cover, a, { [l().cover_round]: c, [l().cover_withSubcover]: f }), radius: p }),
                        _ &&
                            (0, n.jsx)('div', {
                                className: (0, o.$)(l().infoContainer, l()['content_linesCount_'.concat(m)], { [l().infoContainer_centered]: u }),
                                children: (0, n.jsx)(i.W, { isActive: t, className: (0, o.$)(l().title, { [l().title_withSubcover]: f }), radius: 's' }),
                            }),
                    ],
                });
            };
        },
        89562: (e, t, r) => {
            'use strict';
            r.d(t, { A: () => n });
            let n = r(55178).createContext(null);
        },
        89957: (e, t, r) => {
            'use strict';
            (Object.defineProperty(t, '__esModule', { value: !0 }),
                Object.defineProperty(t, 'workAsyncStorageInstance', {
                    enumerable: !0,
                    get: function () {
                        return n;
                    },
                }));
            let n = (0, r(1987).createAsyncLocalStorage)();
        },
        90357: (e, t, r) => {
            'use strict';
            r.d(t, { h: () => d });
            var n = r(32290),
                o = r(63618),
                s = r(74196),
                i = r(71926),
                a = r(58534),
                l = r(17679),
                c = r.n(l);
            let d = (e) => {
                let { error: t, closeToast: r, className: l } = e;
                return (0, n.jsx)(a.$, {
                    className: (0, o.$)(c().root, l),
                    message: (0, n.jsxs)(n.Fragment, {
                        children: [
                            (0, n.jsx)(s.q, { children: (0, n.jsx)('p', { role: 'alert', 'aria-label': t }) }),
                            (0, n.jsx)(i.HL, { className: c().message, variant: 'div', type: 'controls', size: 'm', 'aria-hidden': !0, children: t }),
                        ],
                    }),
                    closeToast: r,
                });
            };
        },
        95329: (e, t, r) => {
            'use strict';
            r.d(t, { M: () => n });
            var n = (function (e) {
                return (
                    (e.MAIN = 'MAIN'),
                    (e.TRAILER = 'TRAILER'),
                    (e.VIDEO_PLAYER = 'VIDEO_PLAYER'),
                    (e.IMAGE_SLIDER = 'IMAGE_SLIDER'),
                    (e.PROMO_LANDING = 'PROMO_LANDING'),
                    e
                );
            })({});
        },
        95574: (e, t, r) => {
            'use strict';
            (Object.defineProperty(t, '__esModule', { value: !0 }),
                Object.defineProperty(t, 'default', {
                    enumerable: !0,
                    get: function () {
                        return o;
                    },
                }));
            let n = r(33399)._(r(64910));
            function o(e, t) {
                var r;
                let o = {};
                'function' == typeof e && (o.loader = e);
                let s = { ...o, ...t };
                return (0, n.default)({ ...s, modules: null == (r = s.loadableGenerated) ? void 0 : r.modules });
            }
            ('function' == typeof t.default || ('object' == typeof t.default && null !== t.default)) &&
                void 0 === t.default.__esModule &&
                (Object.defineProperty(t.default, '__esModule', { value: !0 }), Object.assign(t.default, t), (e.exports = t.default));
        },
        97841: (e, t, r) => {
            'use strict';
            r.d(t, { w: () => S });
            var n = r(32290),
                o = r(63618),
                s = r(96103),
                i = r(60900),
                a = r(31010),
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
            let c = (e, t, r) => {
                    switch (e) {
                        case l.YANDEX:
                            if ('ru' === t) return 'https://ya.ru';
                            return;
                        case l.YANDEX_PROJECTS:
                            return 'https://yandex.'.concat(t, '/all?lang=').concat(r);
                        case l.COPYRIGHT_HOLDER:
                            return 'https://yandex.'.concat(t, '/support/music/performers-and-copyright-holders/copyright.html?lang=').concat(r);
                        case l.AGREEMENT:
                            return 'https://yandex.ru/legal/music_termsofuse?lang='.concat(r);
                        case l.RECOMMENDATION_RULES:
                            return 'https://music.yandex.ru/legal/recommendations/ru/#music';
                        case l.HELP:
                            return 'https://yandex.'.concat(t, '/support/music/index.html?lang=').concat(r);
                        case l.PRIVACY_POLICY:
                            return 'https://yandex.'.concat(t, '/legal/confidential/').concat(r);
                    }
                },
                d = (e) => {
                    let { formatMessage: t, language: r, tld: n, year: o } = e;
                    return {
                        year: o,
                        yandexMusic: { id: l.YANDEX, title: t({ id: 'footer.yandex-music' }), url: c(l.YANDEX, n, r) },
                        yandexProjects: { id: l.YANDEX_PROJECTS, title: t({ id: 'footer.yandex-project' }), url: c(l.YANDEX_PROJECTS, n, r) },
                    };
                };
            var u = r(15559),
                _ = r(8626);
            let m = (e) => e(new Date(), (0, _.m)());
            var f = r(61945),
                p = r(57594),
                h = r(77088),
                x = r.n(h),
                C = r(21732),
                v = r(71926),
                E = r(61258);
            let g = (e) => {
                    let { className: t, data: r } = e;
                    return (0, n.jsxs)('div', {
                        className: (0, o.$)(x().copyrights, t),
                        'data-test-id': C.S7.FOOTER_COPYRIGHTS,
                        children: [
                            (0, n.jsxs)(v.HL, {
                                variant: 'span',
                                type: 'text',
                                size: 's',
                                weight: 'medium',
                                className: x().text,
                                children: [
                                    '\xa9 ',
                                    r.year,
                                    ' \xa0',
                                    (0, n.jsx)(E.N, {
                                        target: '_blank',
                                        href: r.yandexMusic.url,
                                        className: (0, o.$)(x().copyrightLink, x().yandexMusicLink),
                                        'data-test-id': C.S7.FOOTER_YANDEX_MUSIC_LINK,
                                        children: r.yandexMusic.title,
                                    }),
                                ],
                            }),
                            (0, n.jsx)(v.HL, { variant: 'span', type: 'text', size: 's', weight: 'medium', children: ' • ' }),
                            (0, n.jsx)(E.N, {
                                target: '_blank',
                                href: r.yandexProjects.url,
                                className: x().copyrightLink,
                                'data-test-id': C.S7.FOOTER_YANDEX_PROJECT_LINK,
                                children: r.yandexProjects.title,
                            }),
                        ],
                    });
                },
                b = (e) => {
                    let { disclaimer: t, links: r } = e;
                    return (0, n.jsxs)('div', {
                        className: x().links,
                        children: [
                            (0, n.jsx)('ol', {
                                className: x().list,
                                'data-test-id': C.S7.FOOTER_LINKS_LIST,
                                children: r.map((e) => {
                                    let { id: t, title: r, url: o } = e;
                                    return (0, n.jsx)(
                                        'li',
                                        {
                                            className: x().item,
                                            children: (0, n.jsx)(E.N, { target: '_blank', href: o, className: x().link, 'data-test-id': C.S7.FOOTER_LINK, children: r }),
                                        },
                                        t,
                                    );
                                }),
                            }),
                            (0, n.jsx)(v.HL, {
                                variant: 'span',
                                type: 'text',
                                size: 'm',
                                weight: 'medium',
                                className: x().explicitText,
                                tabIndex: 0,
                                dangerouslySetInnerHTML: { __html: t },
                                'data-test-id': C.S7.FOOTER_DISCLAIMER_TEXT,
                            }),
                        ],
                    });
                },
                A = (e) => {
                    let { className: t, data: r } = e;
                    return (0, n.jsxs)('footer', {
                        className: (0, o.$)(x().root, x().important, t),
                        'data-test-id': C.S7.FOOTER,
                        children: [(0, n.jsx)(b, { links: r.links, disclaimer: r.disclaimer }), (0, n.jsx)(g, { data: r.copyrights })],
                    });
                };
            (0, s.PA)((e) => {
                let { className: t } = e,
                    { location: r } = (0, p.g)(),
                    { formatDate: o, formatMessage: s } = (0, i.A)(),
                    { language: a } = (0, f.h)(),
                    l = d({ formatMessage: s, language: a, tld: r.tld, year: m(o) });
                return (0, n.jsx)(g, { className: t, data: l });
            });
            let S = (0, s.PA)((e) => {
                var t;
                let { className: r } = e,
                    { experiments: s, location: _, user: h } = (0, p.g)(),
                    { formatDate: C, formatMessage: v } = (0, i.A)(),
                    { isEnabled: E } = null != (t = (0, a.P)()) ? t : {},
                    { language: g } = (0, f.h)(),
                    b = ((e) => {
                        let { checkExperiment: t, formatMessage: r, isWebApplication: n, language: o, tld: s, userRegion: i, year: a } = e;
                        return {
                            links: ((e) => {
                                let { formatMessage: t, isWebApplication: r, tld: n, language: o, userRegion: s } = e,
                                    i = { id: l.COPYRIGHT_HOLDER, title: t({ id: 'footer.links-copyright-holders' }), url: c(l.COPYRIGHT_HOLDER, n, o) },
                                    a = { id: l.PRIVACY_POLICY, title: t({ id: 'footer.links-privacy-policy' }), url: c(l.PRIVACY_POLICY, n, o) },
                                    d = { id: l.AGREEMENT, title: t({ id: 'footer.links-terms' }), url: c(l.AGREEMENT, n, o) },
                                    u = { id: l.RECOMMENDATION_RULES, title: t({ id: 'footer.links-recommendation-rules' }), url: c(l.RECOMMENDATION_RULES, n, o) },
                                    _ = { id: l.HELP, title: t({ id: 'footer.links-help' }), url: c(l.HELP, n, o) },
                                    m = [i, d, u];
                                return (r && 'ru' === s && m.push(a), m.push(_), m);
                            })({ formatMessage: r, isWebApplication: n, language: o, tld: s, userRegion: i }),
                            disclaimer: (0, u.v)({
                                checkExperiment: t,
                                getDisclaimerContent: () => r({ id: 'footer.disclaimer-content' }),
                                getExplicitContent: () => r({ id: 'footer.explicit-content' }),
                                userRegion: i,
                            }),
                            copyrights: d({ formatMessage: r, language: o, tld: s, year: a }),
                        };
                    })({
                        checkExperiment: (e, t) => s.checkExperiment(e, t),
                        formatMessage: v,
                        isWebApplication: !1,
                        tld: _.tld,
                        language: g,
                        userRegion: h.account.data.userSessionRegionIso,
                        year: m(C),
                    });
                return (0, n.jsx)(A, { className: (0, o.$)({ [x().root_withOffsetForDeeplink]: E }, r), data: b });
            });
        },
        99169: (e, t, r) => {
            'use strict';
            r.d(t, { z: () => a, r: () => l });
            var n = r(70208),
                o = r(60754),
                s = r(13616);
            let i = o.gK.model('CustomPlayerThumbItem', { id: o.gK.enumeration(Object.values(n.T)), name: o.gK.string, thumb: s.K }),
                a = {
                    [n.T.DUCK]: () =>
                        r
                            .e(8962)
                            .then(r.t.bind(r, 68962, 17))
                            .then((e) => e.default),
                    [n.T.CAR]: () =>
                        r
                            .e(8765)
                            .then(r.t.bind(r, 68765, 17))
                            .then((e) => e.default),
                },
                l = (e) =>
                    new Map([
                        [n.T.DUCK, i.create({ id: n.T.DUCK, name: e({ id: 'branded-player.duck' }), thumb: { href: n.T.DUCK, width: 50, height: 50 } })],
                        [n.T.CAR, i.create({ id: n.T.CAR, name: e({ id: 'branded-player.car' }), thumb: { href: n.T.CAR, width: 143, height: 38 } })],
                    ]);
        },
    },
    (e) => {
        (e.O(
            0,
            [
                9030, 1010, 1157, 7412, 3879, 3608, 3379, 3647, 1256, 567, 6706, 1311, 5201, 5472, 8378, 900, 2536, 2146, 3353, 2474, 8035, 2732, 1410, 1417, 8506, 6050,
                5806, 6241, 7702, 861, 4668, 1175, 4797, 4638, 6758, 1993, 4220, 9562, 7358,
            ],
            () => e((e.s = 2356)),
        ),
            (_N_E = e.O()));
    },
]);
