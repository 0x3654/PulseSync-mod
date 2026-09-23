(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [229, 4292],
    {
        3377: (e, t, r) => {
            'use strict';
            r.d(t, { WithAuth: () => h });
            var i = r(32290),
                s = r(96103),
                a = r(21916),
                n = r(63618),
                o = r(39407),
                l = r(71926),
                c = r(94218),
                d = r(55556),
                u = r.n(d);
            let m = (0, s.PA)(() =>
                (0, i.jsxs)('div', {
                    className: u().root,
                    children: [
                        (0, i.jsx)(l.DZ, {
                            className: (0, n.$)(u().title, u().important),
                            variant: 'h3',
                            size: 'xs',
                            children: (0, i.jsx)(o.A, { id: 'authorization.enter-title' }),
                        }),
                        (0, i.jsx)(l.HL, {
                            className: (0, n.$)(u().text, u().important),
                            variant: 'span',
                            type: 'text',
                            size: 'l',
                            weight: 'normal',
                            children: (0, i.jsx)(o.A, { id: 'authorization.enter-text' }),
                        }),
                        (0, i.jsx)(c.H, { size: 'l', className: u().button }),
                    ],
                }),
            );
            var p = r(20472),
                _ = r(57594);
            let h = (0, s.PA)((e) => {
                let { children: t, withRedirectToMainPage: r } = e,
                    { user: s } = (0, _.g)();
                return s.isAuthorized ? t : (r && (0, a.redirect)(p.Z.main.href), (0, i.jsx)(m, {}));
            });
        },
        3796: (e, t, r) => {
            'use strict';
            r.d(t, { J: () => a });
            var i = r(21916),
                s = r(55178);
            let a = (e) => {
                let t = (0, i.usePathname)(),
                    [r, a] = (0, s.useState)(!1);
                ((0, s.useEffect)(() => {
                    (window.Ya.Rum.spa.makeSpaSubPage(t), window.Ya.Rum.spa.startDataLoading(t));
                }),
                    (0, s.useEffect)(() => {
                        window.Ya.Rum.spa.getLastSpaSubPage(t) && e && !r && (window.Ya.Rum.spa.finishDataLoading(t), window.Ya.Rum.spa.startDataRendering(t), a(!0));
                    }, [e, r, t]));
            };
        },
        4820: (e, t, r) => {
            'use strict';
            r.d(t, { C: () => c });
            var i = r(32290),
                s = r(55178),
                a = r(21732),
                n = r(71926),
                o = r(91624),
                l = r.n(o);
            let c = (e) => {
                let { getDescriptionTexts: t, entityId: r } = e,
                    [o, c] = (0, s.useState)(null);
                if (
                    ((0, s.useEffect)(() => {
                        t && t().then(c);
                    }, [t]),
                    o)
                )
                    return o.map((e, t) =>
                        (0, i.jsx)(
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
                            ''.concat(r, '-descpription-text-').concat(t),
                        ),
                    );
            };
        },
        5537: (e, t, r) => {
            'use strict';
            r.d(t, { N: () => a });
            var i = r(57594),
                s = r(79406);
            let a = () => {
                var e, t;
                let {
                    user: r,
                    settings: { browserInfo: a },
                    experiments: n,
                } = (0, i.g)();
                return (
                    !(null == a ? void 0 : a.isTouch) &&
                    r.isAuthorized &&
                    !r.hasPlus &&
                    (null == (t = n.getExperiment(s.z.WebNextDesktopWebFreemium)) || null == (e = t.value) ? void 0 : e.closeListening) === 'on'
                );
            };
        },
        10733: (e, t, r) => {
            'use strict';
            r.d(t, { G: () => a });
            var i = r(91945),
                s = r(50891);
            class a extends s.m {
                constructor(e, t) {
                    (super(e, { code: 'E_HTTP_CLIENT_NON_2XX_3XX_RESPONSE', cause: t.cause }),
                        (0, i._)(this, 'name', 'HttpErrorException'),
                        (0, i._)(this, 'statusCode', void 0),
                        (this.statusCode = t.statusCode),
                        Object.setPrototypeOf(this, a.prototype));
                }
            }
        },
        11262: (e, t, r) => {
            'use strict';
            r.d(t, { X: () => d });
            var i = r(32290),
                s = r(55178),
                a = r(91027),
                n = r(71730),
                o = r(45477),
                l = r(75582),
                c = r(49399);
            let d = (e, t) => {
                let { notify: r, dismiss: d } = (0, l.l)(),
                    u = (0, s.useRef)(void 0),
                    m = (0, a.c)(() => {
                        var r;
                        (d({ notificationId: u.current }), (u.current = 0));
                        let i = [...(null != (r = e.lastRejectedPagesList) ? r : [])].reverse().filter((t) => {
                            var r;
                            return (null == (r = e.pageStates) ? void 0 : r[t]) === c.G.REJECT;
                        });
                        (e.resetRejectedPagesState(),
                            i.forEach((e) => {
                                t(e);
                            }));
                    });
                (0, s.useEffect)(() => {
                    e.rejectedPagesCount > 0 && !u.current && (u.current = r((0, i.jsx)(n.L, { reloadBlocks: m }), { containerId: o.u.ERROR, autoClose: !1 }));
                }, [d, m, r, e.rejectedPagesCount]);
            };
        },
        12989: (e, t, r) => {
            'use strict';
            r.d(t, { D: () => g });
            var i = r(55178),
                s = r(17811),
                a = r(92146),
                n = r(74416),
                o = r(6752),
                l = r(62376),
                c = r(1677),
                d = r(48922),
                u = r(84782),
                m = r(30915),
                p = r(18746),
                _ = r(2792),
                h = r(37240),
                v = r(51012),
                f = r(47498);
            let g = () => {
                let e = (0, l.U)(),
                    t = (0, n.st)(),
                    { hash: r } = (0, n.gf)(),
                    { pageId: g, displayReasonId: x } = (0, h.$)(),
                    { tabId: b, tabPos: E, isTabSelectedByDefault: A } = (0, f.R)(),
                    { offsetBlockPosY: N } = (0, m.u)(),
                    { blockType: I, blockId: O, blockPosX: T, blockPosY: y, mainObjectId: S, mainObjectType: C, displayReasonId: j } = (0, u.N)(),
                    { filterKey: L, filterValue: R, filterPos: k } = (0, p.G)(),
                    { objectType: w, objectsCount: P, objectId: D, objectPosX: F, objectPosY: B } = (0, _.J)(),
                    { skeleton: M } = (0, v.b)(),
                    U = null != j ? j : x,
                    z = (0, o.L)(() => (void 0 !== N && void 0 !== y ? N + y : y));
                return (0, i.useCallback)(
                    (i, n) => {
                        if (!t || !g || !d.xK.includes(g) || !d.fD.includes(g)) return;
                        let o = c.F[g];
                        if (!o) return;
                        let l = {
                            hash: r,
                            pageId: o,
                            entityType: I,
                            entityId: O,
                            entityPosX: T,
                            entityPosY: z,
                            objectsCount: P,
                            viewUuid: n,
                            objectType: w,
                            objectId: D,
                            objectPosX: F,
                            objectPosY: B,
                        };
                        (void 0 !== L && ((l.filterKey = L), (l.filterValue = R), (l.filterPos = k)),
                            d.qG.includes(g) && ((l.tabId = b), (l.tabPos = E), (l.isTabSelectedByDefault = A)),
                            M && (l.skeletonId = M),
                            'string' == typeof S && 'string' == typeof C && ((l.mainObjectType = C), (l.mainObjectId = S)),
                            U && (l.displayReasonId = U));
                        let u = (0, s.F)({ params: l, logger: e, context: 'useSendEventOnBlockShowedOrHidden' });
                        u && (i ? (0, a.Pf)(t.evgenInstance, u) : (0, a.nv)(t.evgenInstance, u));
                    },
                    [t, U, O, T, z, I, L, k, R, r, A, e, S, C, D, F, B, w, P, g, M, b, E],
                );
            };
        },
        13798: (e, t, r) => {
            'use strict';
            r.d(t, { N: () => v });
            var i = r(32290),
                s = r(63618),
                a = r(96103),
                n = r(55178),
                o = r(60900),
                l = r(80229),
                c = r(21732),
                d = r(6752),
                u = r(82586),
                m = r(57594),
                p = r(60244),
                _ = r(90006),
                h = r.n(_);
            let v = (0, a.PA)((e) => {
                let { className: t, getDescriptionTexts: r, trackId: a, containerClassName: _, variant: v, size: f = 'xxxs', ...g } = e,
                    { formatMessage: x } = (0, o.A)(),
                    {
                        settings: { isMobile: b },
                    } = (0, m.g)(),
                    [E, A] = (0, n.useState)(null),
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
                    I = (0, n.useMemo)(() => x({ id: 'extra-explicit.explicit-mark' }), [x]);
                (0, n.useEffect)(() => {
                    r && r().then(A);
                }, [r, a]);
                let O = (null == E ? void 0 : E.join('\n')) || '',
                    T = !!(null == E ? void 0 : E.length) && !b,
                    y = O.length > 0 ? O : I;
                return (0, i.jsx)(p.k, {
                    description: O,
                    placement: 'bottom-start',
                    enabled: T,
                    children: (0, i.jsx)('span', {
                        className: _,
                        children: (0, i.jsx)(u.I, {
                            className: (0, s.$)(h().explicitMark, t),
                            'aria-label': y,
                            variant: N,
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
        23352: (e, t, r) => {
            'use strict';
            r.d(t, { n: () => n });
            var i = r(55178),
                s = r(12989),
                a = r(80536);
            let n = function () {
                let { callback: e, singleEvent: t, withViewUuid: r } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    n = (0, i.useRef)(null),
                    o = (0, s.D)(),
                    l = (0, i.useId)(),
                    c = (0, i.useContext)(a.B),
                    d = (0, i.useCallback)(
                        (i, s) => {
                            (e ? e(i, r ? s : void 0) : o(i, s), t && c.unobserveElement(l));
                        },
                        [e, c, l, o, t, r],
                    );
                return (
                    (0, i.useEffect)(
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
        29268: (e, t, r) => {
            'use strict';
            r.d(t, { k: () => u });
            var i = r(32290),
                s = r(55178),
                a = r(60900),
                n = r(21732),
                o = r(63423),
                l = r(82586),
                c = r(59576);
            let d = (e) => {
                    let {
                            variant: t,
                            withRipple: r,
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
                    return (0, i.jsx)(o.$, {
                        className: h,
                        color: 'secondary',
                        radius: d,
                        size: s,
                        variant: t,
                        withRipple: r,
                        flexIcon: !0,
                        'aria-label': b,
                        onClick: p,
                        ref: v,
                        icon: (0, i.jsx)(l.I, { variant: 'trailer', size: u, className: _ }),
                        disabled: m,
                        'data-intersection-property-id': c.N,
                        style: f,
                        'data-test-id': n.S7.TRAILER_BUTTON,
                        children: g,
                    });
                },
                u = (0, s.forwardRef)((e, t) => (0, i.jsx)(d, { forwardRef: t, ...e }));
        },
        30294: (e, t, r) => {
            'use strict';
            r.d(t, { c: () => i });
            let i = 20;
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
        30542: (e, t, r) => {
            'use strict';
            r.d(t, { $: () => a });
            var i = r(60900),
                s = r(64605);
            let a = (e, t) => {
                let { formatMessage: r } = (0, i.A)();
                if (e)
                    switch (t) {
                        case s._.AUDIOBOOK:
                            return r({ id: 'non-music.shelf-unsubscribe' });
                        case s._.FAIRY_TALE:
                            return r({ id: 'interface-actions.do-not-like' });
                        default:
                            return r({ id: 'interface-actions.subscribed' });
                    }
                switch (t) {
                    case s._.AUDIOBOOK:
                        return r({ id: 'non-music.shelf-subscribe' });
                    case s._.FAIRY_TALE:
                        return r({ id: 'interface-actions.like' });
                    default:
                        return r({ id: 'interface-actions.subscribe' });
                }
            };
        },
        31286: (e, t, r) => {
            'use strict';
            r.d(t, { w: () => a });
            var i = r(55178),
                s = r(91027);
            let a = () => {
                let e = (0, i.useRef)(new Map());
                return (
                    (0, i.useLayoutEffect)(
                        () => (
                            e.current.size > 0 && e.current.clear(),
                            () => {
                                e.current.clear();
                            }
                        ),
                        [],
                    ),
                    (0, s.c)((t, r) => (e.current.has(t) ? e.current.get(t) : (e.current.set(t, r), r)))
                );
            };
        },
        33898: (e, t, r) => {
            'use strict';
            var i;
            (r.d(t, { Z: () => i }),
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
        40484: (e) => {
            e.exports = {
                root_clamp: 'SeparatedArtists_root_clamp__SyvjM',
                root_variant_breakAll: 'SeparatedArtists_root_variant_breakAll__34YbW',
                root_variant_breakWord: 'SeparatedArtists_root_variant_breakWord__1sziE',
                ellipsis: 'SeparatedArtists_ellipsis__0SUCv',
            };
        },
        40498: (e, t, r) => {
            'use strict';
            r.d(t, { F: () => p });
            var i = r(32290),
                s = r(96103),
                a = r(39407),
                n = r(63423),
                o = r(82586),
                l = r(71926),
                c = r(20472),
                d = r(32641),
                u = r(92606),
                m = r.n(u);
            let p = (0, s.PA)((e) => {
                let { title: t } = e,
                    r = (0, d.Z)(c.Z.nonMusic.href);
                return (0, i.jsxs)('div', {
                    className: m().root,
                    children: [
                        (0, i.jsx)('div', { className: m().iconBackground, children: (0, i.jsx)(o.I, { variant: 'like', size: 'l' }) }),
                        (0, i.jsx)(l.DZ, { className: m().title, variant: 'h3', size: 'xs', children: t }),
                        (0, i.jsx)(n.$, {
                            onClick: r,
                            className: m().button,
                            role: 'link',
                            color: 'secondary',
                            size: 's',
                            radius: 'xxxl',
                            children: (0, i.jsx)(l.HL, {
                                type: 'controls',
                                variant: 'span',
                                size: 'm',
                                children: (0, i.jsx)(a.A, { id: 'error-messages.empty-shelf-liked-page-link' }),
                            }),
                        }),
                    ],
                });
            });
        },
        41566: (e, t, r) => {
            'use strict';
            r.d(t, { U: () => d });
            var i = r(32290),
                s = r(96103),
                a = r(21732),
                n = r(82586),
                o = r(19740),
                l = r(30542),
                c = r(57594);
            let d = (0, s.PA)((e) => {
                let { isLiked: t, onClick: r, className: s, albumType: d, disabled: u } = e,
                    { user: m } = (0, c.g)(),
                    p = t ? 'liked' : 'like',
                    _ = (0, l.$)(t, d);
                return (0, i.jsx)(o.Dr, {
                    className: s,
                    onClick: r,
                    icon: (0, i.jsx)(n.I, { variant: p, size: 'xxs' }),
                    'aria-pressed': t,
                    disabled: u || !m.isAuthorized,
                    'data-test-id': a.S7.CONTEXT_MENU_SUBSCRIBE_BUTTON,
                    children: _,
                });
            });
        },
        41677: (e, t, r) => {
            'use strict';
            r.d(t, { i: () => U });
            var i = r(32290),
                s = r(63618),
                a = r(96103),
                n = r(55178),
                o = r(70280),
                l = r(57594),
                c = r(53514),
                d = r(40484),
                u = r.n(d),
                m = r(60900),
                p = r(99923),
                _ = r(21732),
                h = r(91027),
                v = r(71926),
                f = r(47745),
                g = r(32641),
                x = r(28999),
                b = r(61258),
                E = r(19383);
            let A = (0, a.PA)((e) => {
                    let {
                            artist: t,
                            withLink: r = !0,
                            linkClassName: s,
                            captionClassName: a,
                            captionSize: n = 'm',
                            allArtistsTitle: c,
                            withCustomTooltip: d,
                            hoverSettings: u,
                        } = e,
                        { formatMessage: A } = (0, m.A)(),
                        {
                            track: N,
                            settings: { isMobile: I },
                        } = (0, l.g)(),
                        O = (0, g.Z)(t.url),
                        { sendNavigateSearchFeedback: T } = (0, x.z)(),
                        y = (0, f.N)(),
                        S = ((e) => {
                            let { artist: t, callback: r } = e,
                                { currentTrackInfo: i, fullscreenPlayer: s, fullscreenVideoPlayer: a } = (0, l.g)(),
                                { modal: n } = i;
                            return (0, E.l)({
                                entity: t,
                                callback: r,
                                onBeforeHandle: (e) => {
                                    (null == e || e.stopPropagation(), n.isOpened && (i.reset(), n.close()), s.modal.isOpened && s.modal.close());
                                },
                                onAfterHandled: () => {
                                    a.modal.isOpened && (a.modal.close(), a.reset());
                                },
                                preventDefaultWhenSafe: !0,
                            });
                        })({
                            artist: t,
                            callback: (0, h.c)((e) => {
                                (I && N.isOpened && N.close(), O(e));
                            }),
                        }),
                        C = (0, h.c)((e) => {
                            (y({ to: p.AppScreen.ArtistScreen }), null == T || T(), S(e));
                        });
                    return r && !t.various
                        ? (0, i.jsx)(b.N, {
                              'aria-label': A({ id: 'entity-names.artist-name' }, { artistName: t.name }),
                              className: s,
                              href: t.url,
                              onClick: C,
                              title: d ? void 0 : c || t.name,
                              'data-test-id': _.OA.artists.SEPARATED_ARTIST_TITLE,
                              children: (0, i.jsx)(o.m_, {
                                  enabled: !c && d,
                                  offsetOptions: 4,
                                  placement: 'top',
                                  text: c || t.name,
                                  hoverSettings: u,
                                  children: (0, i.jsx)(v.HL, { variant: 'span', type: 'entity', size: n, weight: 'medium', className: a, children: t.name }),
                              }),
                          })
                        : (0, i.jsx)(o.m_, {
                              enabled: !c && d,
                              offsetOptions: 4,
                              placement: 'top',
                              text: c || t.name,
                              hoverSettings: u,
                              children: (0, i.jsx)(v.HL, {
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
                N = (e) => {
                    let {
                            artist: t,
                            withLink: r = !0,
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
                                              (0, i.jsx)(
                                                  A,
                                                  {
                                                      artist: t,
                                                      withLink: r,
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
                        }, [t.decomposed, u, r, s, a, o, l, c, d]);
                    return (0, i.jsxs)(i.Fragment, {
                        children: [
                            (0, i.jsx)(A, {
                                artist: t,
                                withLink: r,
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
            var I = r(39407),
                O = r(63887);
            let T = (e) => {
                let { spoilerArtistsCount: t, spoilerClassName: r, handleOnSpoilerClick: a } = e;
                return (0, i.jsxs)(i.Fragment, {
                    children: [
                        ' ',
                        (0, i.jsx)(O.N, {
                            role: 'button',
                            href: '',
                            className: (0, s.$)(u().spoiler, r),
                            onClick: a,
                            rel: 'nofollow',
                            'data-test-id': _.OA.artists.SEPARATED_ARTISTS_SPOILER,
                            children: (0, i.jsx)(I.A, { id: 'entity-names.number-of-more-artists', values: { counter: t } }),
                        }),
                    ],
                });
            };
            var y = r(8055),
                S = r(6752),
                C = r(78035),
                j = r(78176),
                L = r(83598),
                R = r.n(L);
            let k = (0, a.PA)((e) => {
                    let { label: t, artists: r, forwardRef: s } = e;
                    return (0, i.jsxs)(o.m_, {
                        enableAriaDescribedby: !1,
                        isFocusEnabled: !1,
                        placement: 'top',
                        hoverSettings: { delay: 200, handleClose: (0, C.safePolygon)({ blockPointerEvents: !0 }) },
                        children: [
                            (0, i.jsx)('div', { ref: s, children: t }),
                            (0, i.jsx)(o.ZI, { className: R().tooltipContent, children: r.map((e) => (0, i.jsx)(j.V, { artist: e, className: R().artistItem }, e.id)) }),
                        ],
                    });
                }),
                w = (0, n.forwardRef)((e, t) => (0, i.jsx)(k, { forwardRef: t, ...e }));
            var P = r(19740),
                D = r(52598),
                F = r.n(D);
            let B = (0, a.PA)((e) => {
                    let { label: t, artists: r } = e,
                        { formatMessage: a } = (0, m.A)();
                    return (0, i.jsx)(P.W1, {
                        isMobile: !0,
                        className: (0, s.$)(F().root, F().important),
                        label: t,
                        ariaLabel: a({ id: 'interface-actions.context-menu-artists' }),
                        children: r.map((e) => (0, i.jsx)(j.V, { artist: e }, e.id)),
                    });
                }),
                M = (0, a.PA)((e) => {
                    let { artists: t = [], label: r, labelRef: s } = e,
                        [a, o] = (0, n.useState)(!1),
                        {
                            settings: { isMobile: c },
                        } = (0, l.g)(),
                        d = (0, h.c)(() => {
                            let e = s.current;
                            e && o(e.scrollHeight > e.clientHeight || e.scrollWidth > e.clientWidth);
                        }),
                        u = (0, S.L)(() =>
                            (0, y.A)(() => {
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
                        return (a || c) && (!c || 1 !== t.length) ? (c ? (0, i.jsx)(B, { artists: t, label: r }) : (0, i.jsx)(w, { artists: t, label: r })) : r;
                }),
                U = (0, a.PA)((e) => {
                    let {
                            className: t,
                            artists: r = [],
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
                            spoilerComponent: E,
                            withCustomTooltip: A = !0,
                            artistIdWithoutLink: I,
                            withContextMenu: O,
                        } = e,
                        y = (0, n.useRef)(null),
                        [S, C] = (0, n.useState)(!1),
                        j = x
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
                            settings: { isMobile: L },
                        } = (0, l.g)(),
                        R = 1 === r.length,
                        k = (0, n.useCallback)((e) => {
                            (C(!0), e.preventDefault());
                        }, []),
                        w = (0, n.useMemo)(() => {
                            let e = r;
                            return (
                                m && !S && (e = r.slice(0, m)),
                                e.reduce((e, t) => {
                                    if (!b && t.isComposer) return e.length ? e : [];
                                    let r = (0, i.jsx)(
                                        N,
                                        {
                                            artist: t,
                                            linkClassName: h,
                                            captionClassName: v,
                                            withLink: p && t.id !== I && (((!L || R) && O) || !O),
                                            captionSize: f,
                                            allArtistsTitle: j,
                                            withCustomTooltip: A,
                                            hoverSettings: c.V,
                                            shouldUseSeparator: !!a,
                                        },
                                        t.key,
                                    );
                                    return e.length ? e.concat([a, r]) : [r];
                                }, [])
                            );
                        }, [r, m, S, b, L, R, O, h, v, p, I, f, j, A, a]),
                        P = (0, n.useMemo)(() => {
                            if (!S && m && m < r.length) {
                                let e = r.length - m;
                                return (0, n.isValidElement)(E) ? E : (0, i.jsx)(T, { spoilerClassName: _, spoilerArtistsCount: e, handleOnSpoilerClick: k });
                            }
                        }, [r.length, k, S, _, E, m]),
                        D = (0, n.useMemo)(() => {
                            if (d) return { WebkitLineClamp: d };
                        }, [d]),
                        F = (0, i.jsx)(o.m_, {
                            referenceRef: y,
                            enabled: !!(x && j) && A && !O && !L,
                            offsetOptions: 4,
                            placement: 'top',
                            text: j,
                            hoverSettings: c.V,
                            children: (0, i.jsxs)('div', {
                                style: D,
                                className: (0, s.$)(u().root, u()['root_variant_'.concat(g)], { [u().root_clamp]: d && d > 0 }, { [u().ellipsis]: !d }, t),
                                title: x && j && !A && !O ? j : void 0,
                                children: [w, P],
                            }),
                        });
                    return O ? (0, i.jsx)(M, { labelRef: y, artists: r, label: F }) : F;
                });
        },
        42464: (e, t, r) => {
            'use strict';
            r.d(t, { N: () => i });
            let i = (e) => 'object' == typeof e && null !== e && 'request' in e && null !== e.request;
        },
        45257: (e, t, r) => {
            'use strict';
            r.d(t, { $: () => v });
            var i = r(32290),
                s = r(63618),
                a = r(8055),
                n = r(55178);
            let o = (e) => {
                    let { style: t, forwardRef: r, context: s, ...a } = e,
                        n = (null == s ? void 0 : s.listAriaLabel) || void 0,
                        o = (null == s ? void 0 : s.listRole) || 'region';
                    return (0, i.jsx)('div', { 'aria-labelledby': 'virtual-grid-header', role: o, 'aria-label': n, style: { ...t }, ref: r, ...a });
                },
                l = (0, n.forwardRef)((e, t) => (0, i.jsx)(o, { forwardRef: t, ...e }));
            var c = r(39684),
                d = r.n(c);
            let u = (e) => {
                    let { style: t, forwardRef: r, withFooter: a, withHeader: n, withForceScroll: o, ...l } = e;
                    return (0, i.jsx)('div', {
                        className: (0, s.$)(d().scroller, { [d().scroller_withFooter]: a, [d().scroller_withHeader]: n, [d().scroller_withForceScroll]: o }),
                        style: { ...t },
                        ref: r,
                        ...l,
                        tabIndex: -1,
                    });
                },
                m = (0, n.forwardRef)((e, t) => (0, i.jsx)(u, { forwardRef: t, ...e }));
            var p = r(62060),
                _ = r(31417);
            let h = (e) => {
                    let {
                            pageSize: t,
                            onPageHandler: r,
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
                                    if ((null == s || s(e), l.length > 0 && h(e), t && r)) {
                                        let i = Math.floor(e.endIndex / t) + 1,
                                            s = Math.floor(e.startIndex / t);
                                        for (let e = s; e < i; e++) r(e);
                                    }
                                }, a),
                            [a, s, t, r, l],
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
                    return (0, i.jsx)(_.sN, { ref: d, rangeChanged: v, totalCount: o, endReached: f, ...u });
                },
                v = (e) => {
                    let {
                            className: t,
                            customComponents: r,
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
                            initialItemCount: E,
                            minInitialItemCount: A = 20,
                            handleRef: N,
                            alwaysShowScrollbar: I = !1,
                            testId: O,
                            isMobileLayout: T = !1,
                            shouldTriggerRangeChangedOn: y,
                            ...S
                        } = e,
                        [C, j] = (0, n.useState)(!1),
                        L = (0, n.useMemo)(
                            () =>
                                (0, a.A)((e) => {
                                    j(e);
                                }, 100),
                            [],
                        ),
                        R = (0, n.useMemo)(() => {
                            var e, t;
                            return T
                                ? {
                                      Scroller: m,
                                      List: null != (e = null == r ? void 0 : r.List) ? e : l,
                                      Item: null == r ? void 0 : r.Item,
                                      ScrollSeekPlaceholder: null == r ? void 0 : r.ScrollSeekPlaceholder,
                                  }
                                : {
                                      Scroller: m,
                                      List: null != (t = null == r ? void 0 : r.List) ? t : l,
                                      Item: null == r ? void 0 : r.Item,
                                      Header: null == r ? void 0 : r.Header,
                                      Footer: null == r ? void 0 : r.Footer,
                                      ScrollSeekPlaceholder: null == r ? void 0 : r.ScrollSeekPlaceholder,
                                  };
                        }, [r, x, T]),
                        k = E ? Math.min(E, A) : void 0;
                    return (0, i.jsxs)('div', {
                        className: (0, s.$)(d().root, { [d().root_scrolling]: C || I, [d().root_notScrolling]: !C && !I }, t),
                        'data-test-id': O,
                        children: [
                            T && (null == r ? void 0 : r.Header) && r.Header(),
                            (0, i.jsx)(h, {
                                overscan: v,
                                components: R,
                                listClassName: _,
                                itemClassName: u,
                                isScrolling: L,
                                itemContent: p,
                                scrollerRef: N,
                                totalCount: g,
                                pageSize: f,
                                onPageHandler: o,
                                onRangeHandler: c,
                                debounceDurationInMs: b,
                                initialItemCount: k,
                                shouldTriggerRangeChangedOn: y,
                                ...S,
                            }),
                            T && (null == r ? void 0 : r.Footer) && r.Footer(),
                        ],
                    });
                };
        },
        48736: (e) => {
            e.exports = { root: 'TooltipWithTitle_root__7jLY3', text: 'TooltipWithTitle_text__ElBtq', description: 'TooltipWithTitle_description__HsGcR' };
        },
        50891: (e, t, r) => {
            'use strict';
            r.d(t, { m: () => a });
            var i = r(91945),
                s = r(25090);
            class a extends s.t {
                constructor(e = 'Http Client error', { code: t = 'E_HTTP_CLIENT', ...r } = {}) {
                    (super(e, { code: t, ...r }), (0, i._)(this, 'name', 'HttpException'), Object.setPrototypeOf(this, a.prototype));
                }
            }
        },
        50961: (e, t, r) => {
            'use strict';
            var i;
            (r.d(t, { X: () => i }),
                (function (e) {
                    ((e[(e.NOT_MODIFIED = 304)] = 'NOT_MODIFIED'),
                        (e[(e.NOT_FOUND = 404)] = 'NOT_FOUND'),
                        (e[(e.BAD_REQUEST = 400)] = 'BAD_REQUEST'),
                        (e[(e.REQUEST_TIMEOUT = 408)] = 'REQUEST_TIMEOUT'),
                        (e[(e.PRECONDITION_FAILED = 412)] = 'PRECONDITION_FAILED'),
                        (e[(e.TEAPOT = 418)] = 'TEAPOT'));
                })(i || (i = {})));
        },
        52199: (e, t, r) => {
            'use strict';
            r.d(t, { r: () => i });
            let i = (e, t, r) => e.replace(r, t);
        },
        52598: (e) => {
            e.exports = { root: 'SeparatedArtistsWithContextMenuMobile_root__4BiJL', important: 'SeparatedArtistsWithContextMenuMobile_important__fSF1h' };
        },
        53514: (e, t, r) => {
            'use strict';
            r.d(t, { V: () => i });
            let i = { delay: { open: 1e3, close: 0 } };
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
        56008: (e, t, r) => {
            'use strict';
            r.d(t, { H: () => i });
            let i = (0, r(55178).createContext)({ pageAlbumId: void 0 });
        },
        57594: (e, t, r) => {
            'use strict';
            r.d(t, { P: () => a, g: () => n });
            var i = r(55178),
                s = r(25090);
            let a = (0, i.createContext)(null);
            function n() {
                let e = (0, i.useContext)(a);
                if (null === e) throw new s.t('Store cannot be null, please add a context provider', { code: 'E_CONTEXT_STORE_NULL' });
                return e;
            }
        },
        60244: (e, t, r) => {
            'use strict';
            r.d(t, { k: () => d });
            var i = r(32290),
                s = r(21732),
                a = r(70280),
                n = r(71926),
                o = r(48736),
                l = r.n(o);
            let c = { padding: 8 },
                d = (e) => {
                    let { description: t, enabled: r, title: o, placement: d = 'top', children: u } = e;
                    return (0, i.jsxs)(a.m_, {
                        enabled: r,
                        offsetOptions: 4,
                        shiftOptions: c,
                        flipOptions: c,
                        placement: d,
                        children: [
                            u,
                            (0, i.jsx)(a.ZI, {
                                className: l().root,
                                'data-test-id': s.S7.TOOLTIP_WITH_TITLE,
                                children: (0, i.jsxs)('div', {
                                    className: l().text,
                                    children: [
                                        o && (0, i.jsx)(n.HL, { variant: 'span', type: 'text', size: 's', weight: 'bold', children: o }),
                                        (0, i.jsx)(n.HL, { variant: 'span', type: 'text', size: 's', weight: 'normal', className: l().description, children: t }),
                                    ],
                                }),
                            }),
                        ],
                    });
                };
        },
        62376: (e, t, r) => {
            'use strict';
            r.d(t, { U: () => a });
            var i = r(70204),
                s = r(34186);
            let a = () => (0, s.N)().get(i.Zf);
        },
        63038: (e, t, r) => {
            'use strict';
            r.d(t, { B: () => i });
            let i = '{tld}';
        },
        63363: (e, t, r) => {
            'use strict';
            r.d(t, { K: () => g });
            var i = r(32290),
                s = r(60900),
                a = r(91027),
                n = r(67732),
                o = r(45477),
                l = r(75582),
                c = r(57594),
                d = r(90357),
                u = r(92708),
                m = r(55178),
                p = r(63380),
                _ = r(96103),
                h = r(97755),
                v = r(79238);
            let f = (0, _.PA)((e) => {
                    let { album: t, closeToast: r, withLink: s } = e,
                        a = (0, v.b)(t);
                    return (0, i.jsx)(h.O, {
                        closeToast: r,
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
                            paywall: r,
                            albumCPA: { isPlusCPAEnabled: _ },
                        } = (0, c.g)(),
                        { formatMessage: h } = (0, s.A)(),
                        { notify: v } = (0, l.l)(),
                        g = (() => {
                            let { notify: e } = (0, l.l)(),
                                [t, r] = (0, m.useState)(!1),
                                { formatMessage: n } = (0, s.A)();
                            return (0, a.c)(async (s) => {
                                let { album: a, withLink: l = !0, withNotification: c = !0 } = s;
                                if (t) return;
                                let m = { ...(0, u.HO)(a), url: a.url, isLiked: !a.isLiked };
                                r(!0);
                                let _ = await a.toggleLike();
                                (r(!1),
                                    c &&
                                        (_ === p.f.OK
                                            ? e((0, i.jsx)(f, { withLink: l, album: m }), { containerId: o.u.INFO })
                                            : e((0, i.jsx)(d.h, { error: n({ id: 'error-messages.error-during-action' }) }), { containerId: o.u.ERROR })));
                            });
                        })(),
                        { pageAlbumId: x } = (0, n.T)();
                    return (0, a.c)(async () => {
                        if (e)
                            return _({ pageAlbumId: x, albumId: e.id, isNonMusic: e.isNonMusic })
                                ? void r.openModal()
                                : t.isAuthorized
                                  ? g({ album: e })
                                  : void v((0, i.jsx)(d.h, { error: h({ id: 'authorization-messages.need-to-authorizate' }) }), { containerId: o.u.ERROR });
                    });
                };
        },
        64170: (e, t, r) => {
            'use strict';
            r.d(t, { SomethingWentWrong: () => N });
            var i = r(32290),
                s = r(63618),
                a = r(96103),
                n = r(55178),
                o = r(60900),
                l = r(39407),
                c = r(63423),
                d = r(82586),
                u = r(71926),
                m = r(17811),
                p = r(99923),
                _ = r(90153),
                h = r(74416),
                v = r(62376),
                f = r(37240),
                g = r(83920),
                x = r(20472),
                b = r(12894),
                E = r(30310),
                A = r.n(E);
            let N = (0, a.PA)((e) => {
                let { className: t, withBackwardControl: r = !0 } = e,
                    { formatMessage: a } = (0, o.A)(),
                    E = a({ id: 'error-messages.something-went-wrong' });
                !(function (e) {
                    let t = (0, h.st)(),
                        { hash: r } = (0, h.gf)(),
                        { pageId: i } = (0, f.$)(),
                        s = (0, v.U)();
                    (0, n.useEffect)(() => {
                        if (!t || !r || !i) return;
                        let a = (0, m.F)({
                            params: {
                                entityType: p.EntityTypes.Error,
                                entityId: p.EntityTypes.SomethingWrong,
                                errorMessage: e,
                                hash: r,
                                pageId: i,
                                pageStyle: p.PageStyles.Fullscreen,
                                pagePlacement: p.PagePlacements.Fullscreen,
                                mainObjectType: p.DomainObjectType.NonApplicable,
                                mainObjectId: p.DomainObjectType.NonApplicable,
                            },
                            logger: s,
                            context: 'useSendEventOnSomethingWentWrongShowed',
                        });
                        a && (0, _.z5)(t.evgenInstance, a);
                    }, [t, e, r, i, s]);
                })(E);
                let { sendRefreshEvent: N } = (function () {
                        let e = (0, h.st)(),
                            { hash: t } = (0, h.gf)(),
                            { pageId: r } = (0, f.$)(),
                            i = (0, v.U)();
                        return {
                            sendRefreshEvent: (0, n.useCallback)(() => {
                                if (!e || !t || !r) return;
                                let s = (0, m.F)({
                                    params: {
                                        actionType: p.ActionType.Refresh,
                                        userInteractionType: p.UserInteractionType.Tap,
                                        entityType: p.EntityTypes.Error,
                                        entityId: p.EntityTypes.SomethingWrong,
                                        hash: t,
                                        pageId: r,
                                        pageStyle: p.PageStyles.Fullscreen,
                                        pagePlacement: p.PagePlacements.Fullscreen,
                                        mainObjectType: p.DomainObjectType.NonApplicable,
                                        mainObjectId: p.DomainObjectType.NonApplicable,
                                    },
                                    logger: i,
                                    context: 'useSendEventOnSomethingWentWrongRefreshed',
                                });
                                s && (0, _.bv)(e.evgenInstance, s);
                            }, [e, t, r, i]),
                        };
                    })(),
                    I = (0, n.useCallback)(() => {
                        (N(), (window.location.href = x.Z.main.href));
                    }, [N]),
                    { contentRef: O } = (0, g.g)();
                return (0, i.jsxs)('div', {
                    className: (0, s.$)(A().root, t),
                    children: [
                        r &&
                            (0, i.jsx)(b.L, { withBackwardFallback: '/', className: (0, s.$)(A().navigation, { [A().navigation_desktop]: !O }), withForwardControl: !1 }),
                        (0, i.jsxs)('div', {
                            className: (0, s.$)(A().content, { [A().content_shrink]: !r }),
                            children: [
                                (0, i.jsx)(d.I, { className: A().icon, variant: 'attention', size: 'xxl' }),
                                (0, i.jsx)(u.DZ, { className: (0, s.$)(A().title, A().important), variant: 'h3', size: 'xs', children: E }),
                                (0, i.jsxs)(u.HL, {
                                    className: (0, s.$)(A().text, A().important),
                                    variant: 'span',
                                    type: 'text',
                                    size: 'l',
                                    weight: 'normal',
                                    children: [!1, (0, i.jsx)(l.A, { id: 'page-error.try-to-restart-app' })],
                                }),
                                (0, i.jsx)(c.$, {
                                    onClick: I,
                                    className: A().button,
                                    role: 'link',
                                    color: 'secondary',
                                    size: 'l',
                                    radius: 'xxxl',
                                    children: (0, i.jsxs)(u.HL, {
                                        type: 'controls',
                                        variant: 'span',
                                        size: 'm',
                                        children: [!1, (0, i.jsx)(l.A, { id: 'page-error.restart-app-button' })],
                                    }),
                                }),
                            ],
                        }),
                    ],
                });
            });
        },
        67732: (e, t, r) => {
            'use strict';
            r.d(t, { T: () => a });
            var i = r(55178),
                s = r(56008);
            function a() {
                return (0, i.useContext)(s.H);
            }
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
        71730: (e, t, r) => {
            'use strict';
            r.d(t, { L: () => _ });
            var i = r(32290),
                s = r(63618),
                a = r(55178),
                n = r(60900),
                o = r(39407),
                l = r(63423),
                c = r(82586),
                d = r(71926),
                u = r(58534),
                m = r(70718),
                p = r.n(m);
            let _ = (e) => {
                let { reloadBlocks: t, closeToast: r } = e,
                    m = (0, a.useRef)(null),
                    { formatMessage: _ } = (0, n.A)();
                (0, a.useEffect)(() => {
                    var e;
                    null == (e = m.current) || e.focus();
                }, []);
                let h = (0, a.useMemo)(
                    () =>
                        (0, i.jsxs)('div', {
                            className: p().message,
                            children: [
                                (0, i.jsx)(d.HL, {
                                    className: p().text,
                                    variant: 'div',
                                    type: 'controls',
                                    size: 'm',
                                    children: (0, i.jsx)(o.A, { id: 'error-messages.error-load-part-page' }),
                                }),
                                (0, i.jsx)(l.$, {
                                    ref: m,
                                    className: p().button,
                                    onClick: t,
                                    variant: 'text',
                                    'aria-label': _({ id: 'interface-actions.reload-part-page' }),
                                    icon: (0, i.jsx)(c.I, { variant: 'reset', size: 'xxs', className: p().icon }),
                                }),
                            ],
                        }),
                    [_, t],
                );
                return (0, i.jsx)(u.$, { className: (0, s.$)(p().root, p().important), message: h, closeToast: r });
            };
        },
        78176: (e, t, r) => {
            'use strict';
            r.d(t, { V: () => x });
            var i = r(32290),
                s = r(63618),
                a = r(96103),
                n = r(55178),
                o = r(99923),
                l = r(21732),
                c = r(91027),
                d = r(50162),
                u = r(19740),
                m = r(86269),
                p = r(71926),
                _ = r(47745),
                h = r(32641),
                v = r(57594),
                f = r(16510),
                g = r.n(f);
            let x = (0, a.PA)((e) => {
                let { artist: t, className: r } = e,
                    { fullscreenPlayer: a } = (0, v.g)(),
                    f = (0, h.Z)(t.url),
                    b = (0, _.N)(),
                    E = (0, n.useMemo)(() => {
                        var e;
                        return (
                            'decomposed' in t &&
                            (null == (e = t.decomposed) ? void 0 : e.reduce((e, t) => (e.push((0, i.jsx)(x, { artist: t, className: r }, t.id)), e), []))
                        );
                    }, [t, r]),
                    A = (0, c.c)((e) => {
                        (a.modal.isOpened && a.modal.close(), b({ to: o.AppScreen.ArtistScreen }), f(e));
                    });
                return (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsxs)(u.Dr, {
                            className: (0, s.$)(g().root, r),
                            onClick: A,
                            'data-test-id': l.OA.artists.ARTIST_ITEM,
                            children: [
                                (0, i.jsx)(m.t, {
                                    radius: 'round',
                                    className: g().cover,
                                    children: (0, i.jsx)(d._V, { withAvatarReplace: !0, src: t.coverUri, size: 100, fit: 'contain', className: g().image }),
                                }),
                                (0, i.jsx)(p.HL, { variant: 'span', size: 'm', weight: 'medium', lineClamp: 1, children: t.name }),
                            ],
                        }),
                        E,
                    ],
                });
            });
        },
        78648: (e, t, r) => {
            'use strict';
            r.d(t, { C8: () => a, UC: () => n, dM: () => o, uV: () => l });
            var i = r(87953),
                s = r(42464);
            let a = (e) => {
                    if (void 0 === e || '' === e) return 'missing';
                    let t = Number(e);
                    return !Number.isFinite(t) || t < 0 ? 'invalid' : t < 86400 ? 'lt-1d' : t <= 2592e3 ? '1-30d' : 'gt-30d';
                },
                n = (e) => (e.uid ? 'authorized' : 'no-uid'),
                o = (e) => {
                    if (!(e instanceof i.m5) || !(0, s.N)(e.cause)) return 'unexpected';
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
        79238: (e, t, r) => {
            'use strict';
            r.d(t, { b: () => a });
            var i = r(64605),
                s = r(97647);
            let a = (e) => {
                switch (e.type) {
                    case i._.PODCAST:
                        return s.c.PODCAST;
                    case i._.AUDIOBOOK:
                        return s.c.AUDIOBOOK;
                    case i._.FAIRY_TALE:
                        return s.c.FAIRY_TALE;
                    default:
                        return s.c.ALBUM;
                }
            };
        },
        80176: (e, t, r) => {
            'use strict';
            r.d(t, { t: () => i });
            class i extends Error {
                name = 'BaseException';
                message;
                code;
                data;
                stack;
                constructor(e, t = {}) {
                    let { code: r = 'E_INTERNAL', data: s = {}, ...a } = t,
                        n = e || 'Internal error';
                    (super(n, a), (this.message = n), (this.code = r), (this.data = s), (this.stack = Error(n).stack), Object.setPrototypeOf(this, i.prototype));
                }
            }
        },
        80229: (e, t, r) => {
            'use strict';
            r.d(t, { AS: () => m, Yw: () => i, JU: () => s, DQ: () => h, Ve: () => v });
            var i,
                s,
                a = r(98411),
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
                            var r = this;
                            void 0 === t && (t = { skipFirstChange: !1 });
                            var i = !0;
                            return (
                                this.prevValueByListener.has(e) || this.prevValueByListener.set(e, void 0),
                                this.observableValue.subscribe(function (s) {
                                    if (s !== r.prevValueByListener.get(e)) {
                                        if (t.skipFirstChange && i) {
                                            i = !1;
                                            return;
                                        }
                                        (r.prevValueByListener.set(e, s), e(s));
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
                        var r = this;
                        void 0 === t && (t = { skipFirstChange: !1 });
                        var i = !0;
                        return (
                            this.prevValueByListener.has(e) || this.prevValueByListener.set(e, void 0),
                            this.observableValue.subscribe(function (s) {
                                if (s !== r.prevValueByListener.get(e)) {
                                    if (t.skipFirstChange && i) {
                                        i = !1;
                                        return;
                                    }
                                    (r.prevValueByListener.set(e, s), e(s));
                                }
                            })
                        );
                    }));
            })();
            var o = r(80176);
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
            })(i || (i = {}));
            let d = (e) => {
                    let t = [];
                    for (let r of e) {
                        let [e, i] = r.split(':');
                        e && i && t.push({ type: e, id: i });
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
                    let r = u(e, t);
                    return (await Promise.all(r.map(async (e) => await this.getById(e.id)))).filter((e) => void 0 !== e);
                }
                async resolveAll(e) {
                    let t = d(e),
                        r = await Promise.all(
                            t.map(async (e) => {
                                let t = await this.getById(e.id);
                                return void 0 === t ? null : { disclaimerItem: t, disclaimerType: e.type };
                            }),
                        ),
                        i = {};
                    for (let e of r)
                        if (e) {
                            let t = i[e.disclaimerType] ?? [];
                            (t.push(e.disclaimerItem), (i[e.disclaimerType] = t));
                        }
                    return i;
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
                    [i.EXPLICIT_ICON, s.E],
                    [i.AGE_18_ICON, s.AGE_18],
                    [i.AGE_16_ICON, s.AGE_16],
                    [i.AGE_12_ICON, s.AGE_12],
                    [i.EXCLAMATION_ICON, s.EXCLAMATION],
                ]),
                _ = [i.EXPLICIT_ICON, i.AGE_18_ICON, i.AGE_16_ICON, i.AGE_12_ICON, i.EXCLAMATION_ICON],
                h = (e) => {
                    let t = ((e, t) => {
                        for (let r of t) {
                            let t = u(e, r)[0];
                            if (t) return t;
                        }
                        return null;
                    })(e, _);
                    if (null === t) return null;
                    let r = p.get(t.type);
                    return void 0 !== r ? r : null;
                },
                v = (e, t) => u(e, t).length > 0;
        },
        80536: (e, t, r) => {
            'use strict';
            r.d(t, { B: () => i });
            let i = (0, r(55178).createContext)({ observeElement: () => {}, unobserveElement: () => {} });
        },
        81354: (e, t, r) => {
            'use strict';
            r.d(t, { XU: () => m, YK: () => u });
            var i,
                s,
                a = r(30782),
                n = r(55178),
                o = r(60900);
            (!(function (e) {
                ((e.formatDate = 'FormattedDate'),
                    (e.formatTime = 'FormattedTime'),
                    (e.formatNumber = 'FormattedNumber'),
                    (e.formatList = 'FormattedList'),
                    (e.formatDisplayName = 'FormattedDisplayName'));
            })(i || (i = {})),
                (function (e) {
                    ((e.formatDate = 'FormattedDateParts'),
                        (e.formatTime = 'FormattedTimeParts'),
                        (e.formatNumber = 'FormattedNumberParts'),
                        (e.formatList = 'FormattedListParts'));
                })(s || (s = {})));
            var l = function (e) {
                var t = (0, o.A)(),
                    r = e.value,
                    i = e.children,
                    s = (0, a.__rest)(e, ['value', 'children']);
                return i(t.formatNumberToParts(r, s));
            };
            function c(e) {
                var t = function (t) {
                    var r = (0, o.A)(),
                        i = t.value,
                        s = t.children,
                        n = (0, a.__rest)(t, ['value', 'children']),
                        l = 'string' == typeof i ? new Date(i || 0) : i;
                    return s('formatDate' === e ? r.formatDateToParts(l, n) : r.formatTimeToParts(l, n));
                };
                return ((t.displayName = s[e]), t);
            }
            function d(e) {
                var t = function (t) {
                    var r = (0, o.A)(),
                        i = t.value,
                        s = t.children,
                        l = (0, a.__rest)(t, ['value', 'children']),
                        c = r[e](i, l);
                    if ('function' == typeof s) return s(c);
                    var d = r.textComponent || n.Fragment;
                    return n.createElement(d, null, c);
                };
                return ((t.displayName = i[e]), t);
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
        87953: (e, t, r) => {
            'use strict';
            r.d(t, { GX: () => a.G, X1: () => i.X, m5: () => s.m });
            var i = r(50961),
                s = r(50891),
                a = r(10733);
            r(33898);
        },
        90006: (e) => {
            e.exports = { explicitMark: 'ExplicitMarkIcon_explicitMark__0BPeQ' };
        },
        91624: (e) => {
            e.exports = { descriptionTextItem: 'DescriptionTextsDisclaimer_descriptionTextItem__XtzRU' };
        },
        92013: (e, t, r) => {
            'use strict';
            var i;
            (r.d(t, { T: () => i }),
                (function (e) {
                    ((e.OK = 'ok'), (e.ERROR = 'error'));
                })(i || (i = {})));
        },
        92606: (e) => {
            e.exports = {
                root: 'CollectionShelfPageEmpty_root__KrMco',
                iconBackground: 'CollectionShelfPageEmpty_iconBackground__limUg',
                title: 'CollectionShelfPageEmpty_title__cwF4m',
                button: 'CollectionShelfPageEmpty_button___uzMX',
            };
        },
        94218: (e, t, r) => {
            'use strict';
            r.d(t, { H: () => p });
            var i = r(32290),
                s = r(21916),
                a = r(39407),
                n = r(21732),
                o = r(91027),
                l = r(63423),
                c = r(71926),
                d = r(78648),
                u = r(70204),
                m = r(34186);
            let p = (e) => {
                let { size: t = 'm', variant: r = 'default', color: p = 'primary', withRipple: _ = !0, buttonText: h, isBlock: v, key: f, className: g } = e,
                    x = (0, s.useRouter)(),
                    b = (0, m.N)().get(u.QG),
                    E = (0, o.c)(() => {
                        b.authorizationUrl && ((0, d.uV)({ stage: 'attempt-start', trigger: 'user' }), x.push(b.authorizationUrl));
                    });
                return (0, i.jsx)(
                    l.$,
                    {
                        onClick: E,
                        className: g,
                        isBlock: v,
                        color: p,
                        variant: r,
                        size: t,
                        radius: 'xxxl',
                        withRipple: _,
                        'data-test-id': n.S7.UNAUTHORIZED_BUTTON,
                        children: h || (0, i.jsx)(c.HL, { variant: 'div', size: 'l', lineClamp: 1, children: (0, i.jsx)(a.A, { id: 'authorization.enter-button' }) }),
                    },
                    f,
                );
            };
        },
    },
]);
