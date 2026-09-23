(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [5646],
    {
        3377: (e, t, s) => {
            'use strict';
            s.d(t, { WithAuth: () => h });
            var i = s(32290),
                r = s(96103),
                a = s(21916),
                n = s(63618),
                o = s(39407),
                l = s(71926),
                c = s(94218),
                d = s(55556),
                u = s.n(d);
            let m = (0, r.PA)(() =>
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
            var p = s(20472),
                _ = s(57594);
            let h = (0, r.PA)((e) => {
                let { children: t, withRedirectToMainPage: s } = e,
                    { user: r } = (0, _.g)();
                return r.isAuthorized ? t : (s && (0, a.redirect)(p.Z.main.href), (0, i.jsx)(m, {}));
            });
        },
        3796: (e, t, s) => {
            'use strict';
            s.d(t, { J: () => a });
            var i = s(21916),
                r = s(55178);
            let a = (e) => {
                let t = (0, i.usePathname)(),
                    [s, a] = (0, r.useState)(!1);
                ((0, r.useEffect)(() => {
                    (window.Ya.Rum.spa.makeSpaSubPage(t), window.Ya.Rum.spa.startDataLoading(t));
                }),
                    (0, r.useEffect)(() => {
                        window.Ya.Rum.spa.getLastSpaSubPage(t) && e && !s && (window.Ya.Rum.spa.finishDataLoading(t), window.Ya.Rum.spa.startDataRendering(t), a(!0));
                    }, [e, s, t]));
            };
        },
        4820: (e, t, s) => {
            'use strict';
            s.d(t, { C: () => c });
            var i = s(32290),
                r = s(55178),
                a = s(21732),
                n = s(71926),
                o = s(91624),
                l = s.n(o);
            let c = (e) => {
                let { getDescriptionTexts: t, entityId: s } = e,
                    [o, c] = (0, r.useState)(null);
                if (
                    ((0, r.useEffect)(() => {
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
                            ''.concat(s, '-descpription-text-').concat(t),
                        ),
                    );
            };
        },
        5537: (e, t, s) => {
            'use strict';
            s.d(t, { N: () => a });
            var i = s(57594),
                r = s(79406);
            let a = () => {
                var e, t;
                let {
                    user: s,
                    settings: { browserInfo: a },
                    experiments: n,
                } = (0, i.g)();
                return (
                    !(null == a ? void 0 : a.isTouch) &&
                    s.isAuthorized &&
                    !s.hasPlus &&
                    (null == (t = n.getExperiment(r.z.WebNextDesktopWebFreemium)) || null == (e = t.value) ? void 0 : e.closeListening) === 'on'
                );
            };
        },
        7944: (e) => {
            e.exports = {
                root: 'CollectionShelfNewEpisodesPage_root__HTWkS',
                scrollableContainer: 'CollectionShelfNewEpisodesPage_scrollableContainer__xGZcJ',
                footer: 'CollectionShelfNewEpisodesPage_footer__0i466',
            };
        },
        10733: (e, t, s) => {
            'use strict';
            s.d(t, { G: () => a });
            var i = s(91945),
                r = s(50891);
            class a extends r.m {
                constructor(e, t) {
                    (super(e, { code: 'E_HTTP_CLIENT_NON_2XX_3XX_RESPONSE', cause: t.cause }),
                        (0, i._)(this, 'name', 'HttpErrorException'),
                        (0, i._)(this, 'statusCode', void 0),
                        (this.statusCode = t.statusCode),
                        Object.setPrototypeOf(this, a.prototype));
                }
            }
        },
        12989: (e, t, s) => {
            'use strict';
            s.d(t, { D: () => v });
            var i = s(55178),
                r = s(17811),
                a = s(92146),
                n = s(74416),
                o = s(6752),
                l = s(62376),
                c = s(1677),
                d = s(48922),
                u = s(84782),
                m = s(30915),
                p = s(18746),
                _ = s(2792),
                h = s(37240),
                x = s(51012),
                f = s(47498);
            let v = () => {
                let e = (0, l.U)(),
                    t = (0, n.st)(),
                    { hash: s } = (0, n.gf)(),
                    { pageId: v, displayReasonId: g } = (0, h.$)(),
                    { tabId: E, tabPos: A, isTabSelectedByDefault: N } = (0, f.R)(),
                    { offsetBlockPosY: T } = (0, m.u)(),
                    { blockType: b, blockId: S, blockPosX: j, blockPosY: y, mainObjectId: O, mainObjectType: I, displayReasonId: C } = (0, u.N)(),
                    { filterKey: k, filterValue: w, filterPos: P } = (0, p.G)(),
                    { objectType: D, objectsCount: L, objectId: R, objectPosX: W, objectPosY: F } = (0, _.J)(),
                    { skeleton: z } = (0, x.b)(),
                    U = null != C ? C : g,
                    M = (0, o.L)(() => (void 0 !== T && void 0 !== y ? T + y : y));
                return (0, i.useCallback)(
                    (i, n) => {
                        if (!t || !v || !d.xK.includes(v) || !d.fD.includes(v)) return;
                        let o = c.F[v];
                        if (!o) return;
                        let l = {
                            hash: s,
                            pageId: o,
                            entityType: b,
                            entityId: S,
                            entityPosX: j,
                            entityPosY: M,
                            objectsCount: L,
                            viewUuid: n,
                            objectType: D,
                            objectId: R,
                            objectPosX: W,
                            objectPosY: F,
                        };
                        (void 0 !== k && ((l.filterKey = k), (l.filterValue = w), (l.filterPos = P)),
                            d.qG.includes(v) && ((l.tabId = E), (l.tabPos = A), (l.isTabSelectedByDefault = N)),
                            z && (l.skeletonId = z),
                            'string' == typeof O && 'string' == typeof I && ((l.mainObjectType = I), (l.mainObjectId = O)),
                            U && (l.displayReasonId = U));
                        let u = (0, r.F)({ params: l, logger: e, context: 'useSendEventOnBlockShowedOrHidden' });
                        u && (i ? (0, a.Pf)(t.evgenInstance, u) : (0, a.nv)(t.evgenInstance, u));
                    },
                    [t, U, S, j, M, b, k, P, w, s, N, e, O, I, R, W, F, D, L, v, z, E, A],
                );
            };
        },
        13798: (e, t, s) => {
            'use strict';
            s.d(t, { N: () => x });
            var i = s(32290),
                r = s(63618),
                a = s(96103),
                n = s(55178),
                o = s(60900),
                l = s(80229),
                c = s(21732),
                d = s(6752),
                u = s(82586),
                m = s(57594),
                p = s(60244),
                _ = s(90006),
                h = s.n(_);
            let x = (0, a.PA)((e) => {
                let { className: t, getDescriptionTexts: s, trackId: a, containerClassName: _, variant: x, size: f = 'xxxs', ...v } = e,
                    { formatMessage: g } = (0, o.A)(),
                    {
                        settings: { isMobile: E },
                    } = (0, m.g)(),
                    [A, N] = (0, n.useState)(null),
                    T = (0, d.L)(() => {
                        switch (x) {
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
                    b = (0, n.useMemo)(() => g({ id: 'extra-explicit.explicit-mark' }), [g]);
                (0, n.useEffect)(() => {
                    s && s().then(N);
                }, [s, a]);
                let S = (null == A ? void 0 : A.join('\n')) || '',
                    j = !!(null == A ? void 0 : A.length) && !E,
                    y = S.length > 0 ? S : b;
                return (0, i.jsx)(p.k, {
                    description: S,
                    placement: 'bottom-start',
                    enabled: j,
                    children: (0, i.jsx)('span', {
                        className: _,
                        children: (0, i.jsx)(u.I, {
                            className: (0, r.$)(h().explicitMark, t),
                            'aria-label': y,
                            variant: T,
                            size: f,
                            ...v,
                            'data-test-id': c.S7.EXPLICIT_MARK_ICON,
                        }),
                    }),
                });
            });
        },
        16510: (e) => {
            e.exports = { root: 'ArtistItem_root__Q_mgJ', image: 'ArtistItem_image__5rKWF', cover: 'ArtistItem_cover__FTvHo' };
        },
        23352: (e, t, s) => {
            'use strict';
            s.d(t, { n: () => n });
            var i = s(55178),
                r = s(12989),
                a = s(80536);
            let n = function () {
                let { callback: e, singleEvent: t, withViewUuid: s } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    n = (0, i.useRef)(null),
                    o = (0, r.D)(),
                    l = (0, i.useId)(),
                    c = (0, i.useContext)(a.B),
                    d = (0, i.useCallback)(
                        (i, r) => {
                            (e ? e(i, s ? r : void 0) : o(i, r), t && c.unobserveElement(l));
                        },
                        [e, c, l, o, t, s],
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
        29268: (e, t, s) => {
            'use strict';
            s.d(t, { k: () => u });
            var i = s(32290),
                r = s(55178),
                a = s(60900),
                n = s(21732),
                o = s(63423),
                l = s(82586),
                c = s(59576);
            let d = (e) => {
                    let {
                            variant: t,
                            withRipple: s,
                            size: r,
                            radius: d,
                            iconSize: u,
                            disabled: m,
                            onClick: p,
                            iconClassName: _,
                            className: h,
                            forwardRef: x,
                            style: f,
                            children: v,
                        } = e,
                        { formatMessage: g } = (0, a.A)(),
                        E = g({ id: 'trailer.button-aria-label' });
                    return (0, i.jsx)(o.$, {
                        className: h,
                        color: 'secondary',
                        radius: d,
                        size: r,
                        variant: t,
                        withRipple: s,
                        flexIcon: !0,
                        'aria-label': E,
                        onClick: p,
                        ref: x,
                        icon: (0, i.jsx)(l.I, { variant: 'trailer', size: u, className: _ }),
                        disabled: m,
                        'data-intersection-property-id': c.N,
                        style: f,
                        'data-test-id': n.S7.TRAILER_BUTTON,
                        children: v,
                    });
                },
                u = (0, r.forwardRef)((e, t) => (0, i.jsx)(d, { forwardRef: t, ...e }));
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
        30542: (e, t, s) => {
            'use strict';
            s.d(t, { $: () => a });
            var i = s(60900),
                r = s(64605);
            let a = (e, t) => {
                let { formatMessage: s } = (0, i.A)();
                if (e)
                    switch (t) {
                        case r._.AUDIOBOOK:
                            return s({ id: 'non-music.shelf-unsubscribe' });
                        case r._.FAIRY_TALE:
                            return s({ id: 'interface-actions.do-not-like' });
                        default:
                            return s({ id: 'interface-actions.subscribed' });
                    }
                switch (t) {
                    case r._.AUDIOBOOK:
                        return s({ id: 'non-music.shelf-subscribe' });
                    case r._.FAIRY_TALE:
                        return s({ id: 'interface-actions.like' });
                    default:
                        return s({ id: 'interface-actions.subscribe' });
                }
            };
        },
        33898: (e, t, s) => {
            'use strict';
            var i;
            (s.d(t, { Z: () => i }),
                (function (e) {
                    ((e.METHOD_NOT_SUPPORTED = 'E_BEACON_METHOD_NOT_SUPPORTED'),
                        (e.NOT_AVAILABLE = 'E_BEACON_NOT_AVAILABLE'),
                        (e.QUEUE_FAILED = 'E_BEACON_QUEUE_FAILED'),
                        (e.NO_RESPONSE_DATA = 'E_BEACON_NO_RESPONSE_DATA'),
                        (e.RETRY_EXHAUSTED = 'E_BEACON_RETRY_EXHAUSTED'));
                })(i || (i = {})));
        },
        40484: (e) => {
            e.exports = {
                root_clamp: 'SeparatedArtists_root_clamp__SyvjM',
                root_variant_breakAll: 'SeparatedArtists_root_variant_breakAll__34YbW',
                root_variant_breakWord: 'SeparatedArtists_root_variant_breakWord__1sziE',
                ellipsis: 'SeparatedArtists_ellipsis__0SUCv',
            };
        },
        40942: (e, t, s) => {
            'use strict';
            s.d(t, { CollectionShelfNewEpisodesPage: () => L });
            var i = s(32290),
                r = s(96103),
                a = s(21916),
                n = s(55178),
                o = s(21732),
                l = s(91027),
                c = s(46049),
                d = s(71926),
                u = s(64170),
                m = s(7999),
                p = s(83808),
                _ = s(83920),
                h = s(3796),
                x = s(57594),
                f = s(97841),
                v = s(32468),
                g = s(74694),
                E = s(63618),
                A = s(39407),
                N = s(71483),
                T = s(63423),
                b = s(82586),
                S = s(94631),
                j = s(20472),
                y = s(32641),
                O = s(98350),
                I = s(34223),
                C = s(82535),
                k = s.n(C);
            let w = (0, r.PA)(() => {
                let {
                        sonataState: e,
                        collection: {
                            shelf: { newEpisodes: t },
                        },
                    } = (0, x.g)(),
                    s = (0, y.Z)(j.Z.nonMusic.href),
                    r = (0, n.useMemo)(() => {
                        var s;
                        return null == (s = t.tracks)
                            ? void 0
                            : s.map((s, r) =>
                                  (0, i.jsx)(
                                      S.K,
                                      {
                                          track: s,
                                          playContextParams: {
                                              contextData: { type: N.K.Album, meta: { id: s.entityId }, from: t.typeForFrom || '' },
                                              queueParams: { index: r, entityId: s.id },
                                              loadContextMeta: !0,
                                              entitiesData: e.unloadedEntitiesDataFromModels,
                                          },
                                          withPodcastName: !0,
                                      },
                                      s.entityId,
                                  ),
                              );
                    }, [t.tracks, t.typeForFrom, e.unloadedEntitiesDataFromModels]),
                    a = (0, n.useMemo)(
                        () =>
                            t.isEmpty
                                ? (0, i.jsx)(A.A, { id: 'error-messages.empty-shelf-new-episodes-title-no-tracks' })
                                : (0, i.jsx)(A.A, { id: 'error-messages.empty-shelf-new-episodes-title' }),
                        [t.isEmpty],
                    );
                return (t.isNeededToLoad && (0, n.use)(t.getData()), t.isLoading)
                    ? (0, i.jsx)(I.D, { variant: O.X.PLAYLIST, isActive: !0 })
                    : (0, i.jsxs)('div', {
                          className: (0, E.$)(k().root, { [k().root_emptyList]: t.isEmpty }),
                          children: [
                              r,
                              (0, i.jsxs)('div', {
                                  className: k().wrapper,
                                  children: [
                                      (0, i.jsx)('div', { className: k().iconBackground, children: (0, i.jsx)(b.I, { variant: 'like', size: 'l' }) }),
                                      (0, i.jsx)(d.DZ, { className: k().title, variant: 'h3', size: 'xs', children: a }),
                                      !t.isEmpty &&
                                          (0, i.jsx)(d.HL, {
                                              type: 'controls',
                                              variant: 'span',
                                              size: 'l',
                                              weight: 'normal',
                                              children: (0, i.jsx)(A.A, { id: 'error-messages.empty-shelf-new-episodes-text' }),
                                          }),
                                      (0, i.jsx)(T.$, {
                                          onClick: s,
                                          className: k().button,
                                          role: 'link',
                                          color: 'secondary',
                                          size: 's',
                                          radius: 'xxxl',
                                          children: (0, i.jsx)(d.HL, {
                                              type: 'controls',
                                              variant: 'span',
                                              size: 'm',
                                              children: (0, i.jsx)(A.A, { id: 'error-messages.empty-shelf-liked-page-link' }),
                                          }),
                                      }),
                                  ],
                              }),
                          ],
                      });
            });
            var P = s(7944),
                D = s.n(P);
            let L = (0, r.PA)(() => {
                let {
                        collection: {
                            shelf: { newEpisodes: e },
                        },
                    } = (0, x.g)(),
                    { contentScrollRef: t, setContentScrollRef: s } = (0, _.g)(),
                    r = (0, p.W)(),
                    E = (0, a.useRouter)(),
                    A = (0, l.c)(() => {
                        var t;
                        (null == (t = e.playlist) ? void 0 : t.uuid) && E.replace(e.playlist.url);
                    });
                return ((0, n.useEffect)(() => {
                    e.isResolved && e.withPlaylist && A();
                }, [e.isResolved, e.withPlaylist, A]),
                (0, n.useEffect)(
                    () => () => {
                        e.reset();
                    },
                    [e],
                ),
                (0, h.J)(e.isResolved),
                e.isRejected)
                    ? (0, i.jsx)(u.SomethingWentWrong, {})
                    : (0, i.jsxs)(m.h, {
                          scrollElement: t,
                          outerTitle: e.title,
                          children: [
                              (0, i.jsx)(g.Y, {
                                  variant: g.V.TEXT,
                                  withForwardControl: !1,
                                  withBackwardControl: r.canBack,
                                  children: (0, i.jsx)(d.DZ, { variant: 'h2', weight: 'bold', size: 'xl', lineClamp: 1, children: e.title }),
                              }),
                              (0, i.jsxs)(c.N, {
                                  ref: s,
                                  containerClassName: D().scrollableContainer,
                                  className: D().root,
                                  'data-test-id': o.Xk.collection.COLLECTION_SHELF_NEW_EPISODES_PAGE,
                                  children: [(0, i.jsx)(w, {}), (0, i.jsx)(v.A, { children: (0, i.jsx)(f.w, { className: D().footer }) })],
                              }),
                          ],
                      });
            });
        },
        41566: (e, t, s) => {
            'use strict';
            s.d(t, { U: () => d });
            var i = s(32290),
                r = s(96103),
                a = s(21732),
                n = s(82586),
                o = s(19740),
                l = s(30542),
                c = s(57594);
            let d = (0, r.PA)((e) => {
                let { isLiked: t, onClick: s, className: r, albumType: d, disabled: u } = e,
                    { user: m } = (0, c.g)(),
                    p = t ? 'liked' : 'like',
                    _ = (0, l.$)(t, d);
                return (0, i.jsx)(o.Dr, {
                    className: r,
                    onClick: s,
                    icon: (0, i.jsx)(n.I, { variant: p, size: 'xxs' }),
                    'aria-pressed': t,
                    disabled: u || !m.isAuthorized,
                    'data-test-id': a.S7.CONTEXT_MENU_SUBSCRIBE_BUTTON,
                    children: _,
                });
            });
        },
        41677: (e, t, s) => {
            'use strict';
            s.d(t, { i: () => U });
            var i = s(32290),
                r = s(63618),
                a = s(96103),
                n = s(55178),
                o = s(70280),
                l = s(57594),
                c = s(53514),
                d = s(40484),
                u = s.n(d),
                m = s(60900),
                p = s(99923),
                _ = s(21732),
                h = s(91027),
                x = s(71926),
                f = s(47745),
                v = s(32641),
                g = s(28999),
                E = s(61258),
                A = s(19383);
            let N = (0, a.PA)((e) => {
                    let {
                            artist: t,
                            withLink: s = !0,
                            linkClassName: r,
                            captionClassName: a,
                            captionSize: n = 'm',
                            allArtistsTitle: c,
                            withCustomTooltip: d,
                            hoverSettings: u,
                        } = e,
                        { formatMessage: N } = (0, m.A)(),
                        {
                            track: T,
                            settings: { isMobile: b },
                        } = (0, l.g)(),
                        S = (0, v.Z)(t.url),
                        { sendNavigateSearchFeedback: j } = (0, g.z)(),
                        y = (0, f.N)(),
                        O = ((e) => {
                            let { artist: t, callback: s } = e,
                                { currentTrackInfo: i, fullscreenPlayer: r, fullscreenVideoPlayer: a } = (0, l.g)(),
                                { modal: n } = i;
                            return (0, A.l)({
                                entity: t,
                                callback: s,
                                onBeforeHandle: (e) => {
                                    (null == e || e.stopPropagation(), n.isOpened && (i.reset(), n.close()), r.modal.isOpened && r.modal.close());
                                },
                                onAfterHandled: () => {
                                    a.modal.isOpened && (a.modal.close(), a.reset());
                                },
                                preventDefaultWhenSafe: !0,
                            });
                        })({
                            artist: t,
                            callback: (0, h.c)((e) => {
                                (b && T.isOpened && T.close(), S(e));
                            }),
                        }),
                        I = (0, h.c)((e) => {
                            (y({ to: p.AppScreen.ArtistScreen }), null == j || j(), O(e));
                        });
                    return s && !t.various
                        ? (0, i.jsx)(E.N, {
                              'aria-label': N({ id: 'entity-names.artist-name' }, { artistName: t.name }),
                              className: r,
                              href: t.url,
                              onClick: I,
                              title: d ? void 0 : c || t.name,
                              'data-test-id': _.OA.artists.SEPARATED_ARTIST_TITLE,
                              children: (0, i.jsx)(o.m_, {
                                  enabled: !c && d,
                                  offsetOptions: 4,
                                  placement: 'top',
                                  text: c || t.name,
                                  hoverSettings: u,
                                  children: (0, i.jsx)(x.HL, { variant: 'span', type: 'entity', size: n, weight: 'medium', className: a, children: t.name }),
                              }),
                          })
                        : (0, i.jsx)(o.m_, {
                              enabled: !c && d,
                              offsetOptions: 4,
                              placement: 'top',
                              text: c || t.name,
                              hoverSettings: u,
                              children: (0, i.jsx)(x.HL, {
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
                            withLink: s = !0,
                            linkClassName: r,
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
                                                  N,
                                                  {
                                                      artist: t,
                                                      withLink: s,
                                                      linkClassName: r,
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
                        }, [t.decomposed, u, s, r, a, o, l, c, d]);
                    return (0, i.jsxs)(i.Fragment, {
                        children: [
                            (0, i.jsx)(N, {
                                artist: t,
                                withLink: s,
                                linkClassName: r,
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
            var b = s(39407),
                S = s(63887);
            let j = (e) => {
                let { spoilerArtistsCount: t, spoilerClassName: s, handleOnSpoilerClick: a } = e;
                return (0, i.jsxs)(i.Fragment, {
                    children: [
                        ' ',
                        (0, i.jsx)(S.N, {
                            role: 'button',
                            href: '',
                            className: (0, r.$)(u().spoiler, s),
                            onClick: a,
                            rel: 'nofollow',
                            'data-test-id': _.OA.artists.SEPARATED_ARTISTS_SPOILER,
                            children: (0, i.jsx)(b.A, { id: 'entity-names.number-of-more-artists', values: { counter: t } }),
                        }),
                    ],
                });
            };
            var y = s(8055),
                O = s(6752),
                I = s(78035),
                C = s(78176),
                k = s(83598),
                w = s.n(k);
            let P = (0, a.PA)((e) => {
                    let { label: t, artists: s, forwardRef: r } = e;
                    return (0, i.jsxs)(o.m_, {
                        enableAriaDescribedby: !1,
                        isFocusEnabled: !1,
                        placement: 'top',
                        hoverSettings: { delay: 200, handleClose: (0, I.safePolygon)({ blockPointerEvents: !0 }) },
                        children: [
                            (0, i.jsx)('div', { ref: r, children: t }),
                            (0, i.jsx)(o.ZI, { className: w().tooltipContent, children: s.map((e) => (0, i.jsx)(C.V, { artist: e, className: w().artistItem }, e.id)) }),
                        ],
                    });
                }),
                D = (0, n.forwardRef)((e, t) => (0, i.jsx)(P, { forwardRef: t, ...e }));
            var L = s(19740),
                R = s(52598),
                W = s.n(R);
            let F = (0, a.PA)((e) => {
                    let { label: t, artists: s } = e,
                        { formatMessage: a } = (0, m.A)();
                    return (0, i.jsx)(L.W1, {
                        isMobile: !0,
                        className: (0, r.$)(W().root, W().important),
                        label: t,
                        ariaLabel: a({ id: 'interface-actions.context-menu-artists' }),
                        children: s.map((e) => (0, i.jsx)(C.V, { artist: e }, e.id)),
                    });
                }),
                z = (0, a.PA)((e) => {
                    let { artists: t = [], label: s, labelRef: r } = e,
                        [a, o] = (0, n.useState)(!1),
                        {
                            settings: { isMobile: c },
                        } = (0, l.g)(),
                        d = (0, h.c)(() => {
                            let e = r.current;
                            e && o(e.scrollHeight > e.clientHeight || e.scrollWidth > e.clientWidth);
                        }),
                        u = (0, O.L)(() =>
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
                        return (a || c) && (!c || 1 !== t.length) ? (c ? (0, i.jsx)(F, { artists: t, label: s }) : (0, i.jsx)(D, { artists: t, label: s })) : s;
                }),
                U = (0, a.PA)((e) => {
                    let {
                            className: t,
                            artists: s = [],
                            separator: a = ', ',
                            lineClamp: d,
                            visibleArtistsCount: m,
                            withLink: p = !0,
                            spoilerClassName: _,
                            linkClassName: h,
                            captionClassName: x,
                            captionSize: f,
                            variant: v = 'breakAll',
                            withAllArtistsTitle: g = !0,
                            withComposer: E = !0,
                            spoilerComponent: A,
                            withCustomTooltip: N = !0,
                            artistIdWithoutLink: b,
                            withContextMenu: S,
                        } = e,
                        y = (0, n.useRef)(null),
                        [O, I] = (0, n.useState)(!1),
                        C = g
                            ? s
                                  .reduce(function () {
                                      let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
                                          t = arguments.length > 1 ? arguments[1] : void 0;
                                      if (t.decomposed) {
                                          let s = t.decomposed.reduce((e, t) => e.concat([t.name]), []);
                                          return e.length ? e.concat([t.name, ...s]) : [t.name, ...s];
                                      }
                                      return e.length ? (e.push(t.name), e) : [t.name];
                                  }, [])
                                  .join(a)
                            : '',
                        {
                            settings: { isMobile: k },
                        } = (0, l.g)(),
                        w = 1 === s.length,
                        P = (0, n.useCallback)((e) => {
                            (I(!0), e.preventDefault());
                        }, []),
                        D = (0, n.useMemo)(() => {
                            let e = s;
                            return (
                                m && !O && (e = s.slice(0, m)),
                                e.reduce((e, t) => {
                                    if (!E && t.isComposer) return e.length ? e : [];
                                    let s = (0, i.jsx)(
                                        T,
                                        {
                                            artist: t,
                                            linkClassName: h,
                                            captionClassName: x,
                                            withLink: p && t.id !== b && (((!k || w) && S) || !S),
                                            captionSize: f,
                                            allArtistsTitle: C,
                                            withCustomTooltip: N,
                                            hoverSettings: c.V,
                                            shouldUseSeparator: !!a,
                                        },
                                        t.key,
                                    );
                                    return e.length ? e.concat([a, s]) : [s];
                                }, [])
                            );
                        }, [s, m, O, E, k, w, S, h, x, p, b, f, C, N, a]),
                        L = (0, n.useMemo)(() => {
                            if (!O && m && m < s.length) {
                                let e = s.length - m;
                                return (0, n.isValidElement)(A) ? A : (0, i.jsx)(j, { spoilerClassName: _, spoilerArtistsCount: e, handleOnSpoilerClick: P });
                            }
                        }, [s.length, P, O, _, A, m]),
                        R = (0, n.useMemo)(() => {
                            if (d) return { WebkitLineClamp: d };
                        }, [d]),
                        W = (0, i.jsx)(o.m_, {
                            referenceRef: y,
                            enabled: !!(g && C) && N && !S && !k,
                            offsetOptions: 4,
                            placement: 'top',
                            text: C,
                            hoverSettings: c.V,
                            children: (0, i.jsxs)('div', {
                                style: R,
                                className: (0, r.$)(u().root, u()['root_variant_'.concat(v)], { [u().root_clamp]: d && d > 0 }, { [u().ellipsis]: !d }, t),
                                title: g && C && !N && !S ? C : void 0,
                                children: [D, L],
                            }),
                        });
                    return S ? (0, i.jsx)(z, { labelRef: y, artists: s, label: W }) : W;
                });
        },
        42464: (e, t, s) => {
            'use strict';
            s.d(t, { N: () => i });
            let i = (e) => 'object' == typeof e && null !== e && 'request' in e && null !== e.request;
        },
        48736: (e) => {
            e.exports = { root: 'TooltipWithTitle_root__7jLY3', text: 'TooltipWithTitle_text__ElBtq', description: 'TooltipWithTitle_description__HsGcR' };
        },
        50891: (e, t, s) => {
            'use strict';
            s.d(t, { m: () => a });
            var i = s(91945),
                r = s(25090);
            class a extends r.t {
                constructor(e = 'Http Client error', { code: t = 'E_HTTP_CLIENT', ...s } = {}) {
                    (super(e, { code: t, ...s }), (0, i._)(this, 'name', 'HttpException'), Object.setPrototypeOf(this, a.prototype));
                }
            }
        },
        50961: (e, t, s) => {
            'use strict';
            var i;
            (s.d(t, { X: () => i }),
                (function (e) {
                    ((e[(e.NOT_MODIFIED = 304)] = 'NOT_MODIFIED'),
                        (e[(e.NOT_FOUND = 404)] = 'NOT_FOUND'),
                        (e[(e.BAD_REQUEST = 400)] = 'BAD_REQUEST'),
                        (e[(e.REQUEST_TIMEOUT = 408)] = 'REQUEST_TIMEOUT'),
                        (e[(e.PRECONDITION_FAILED = 412)] = 'PRECONDITION_FAILED'),
                        (e[(e.TEAPOT = 418)] = 'TEAPOT'));
                })(i || (i = {})));
        },
        52199: (e, t, s) => {
            'use strict';
            s.d(t, { r: () => i });
            let i = (e, t, s) => e.replace(s, t);
        },
        52598: (e) => {
            e.exports = { root: 'SeparatedArtistsWithContextMenuMobile_root__4BiJL', important: 'SeparatedArtistsWithContextMenuMobile_important__fSF1h' };
        },
        53514: (e, t, s) => {
            'use strict';
            s.d(t, { V: () => i });
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
        56008: (e, t, s) => {
            'use strict';
            s.d(t, { H: () => i });
            let i = (0, s(55178).createContext)({ pageAlbumId: void 0 });
        },
        60244: (e, t, s) => {
            'use strict';
            s.d(t, { k: () => d });
            var i = s(32290),
                r = s(21732),
                a = s(70280),
                n = s(71926),
                o = s(48736),
                l = s.n(o);
            let c = { padding: 8 },
                d = (e) => {
                    let { description: t, enabled: s, title: o, placement: d = 'top', children: u } = e;
                    return (0, i.jsxs)(a.m_, {
                        enabled: s,
                        offsetOptions: 4,
                        shiftOptions: c,
                        flipOptions: c,
                        placement: d,
                        children: [
                            u,
                            (0, i.jsx)(a.ZI, {
                                className: l().root,
                                'data-test-id': r.S7.TOOLTIP_WITH_TITLE,
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
        63038: (e, t, s) => {
            'use strict';
            s.d(t, { B: () => i });
            let i = '{tld}';
        },
        63363: (e, t, s) => {
            'use strict';
            s.d(t, { K: () => v });
            var i = s(32290),
                r = s(60900),
                a = s(91027),
                n = s(67732),
                o = s(45477),
                l = s(75582),
                c = s(57594),
                d = s(90357),
                u = s(92708),
                m = s(55178),
                p = s(63380),
                _ = s(96103),
                h = s(97755),
                x = s(79238);
            let f = (0, _.PA)((e) => {
                    let { album: t, closeToast: s, withLink: r } = e,
                        a = (0, x.b)(t);
                    return (0, i.jsx)(h.O, {
                        closeToast: s,
                        entityVariant: a,
                        coverUri: t.coverUri,
                        entityUrl: t.url,
                        collectionUrl: '/collection',
                        entityTitle: t.title,
                        isLiked: t.isLiked,
                        withLink: r,
                    });
                }),
                v = (e) => {
                    let {
                            user: t,
                            paywall: s,
                            albumCPA: { isPlusCPAEnabled: _ },
                        } = (0, c.g)(),
                        { formatMessage: h } = (0, r.A)(),
                        { notify: x } = (0, l.l)(),
                        v = (() => {
                            let { notify: e } = (0, l.l)(),
                                [t, s] = (0, m.useState)(!1),
                                { formatMessage: n } = (0, r.A)();
                            return (0, a.c)(async (r) => {
                                let { album: a, withLink: l = !0, withNotification: c = !0 } = r;
                                if (t) return;
                                let m = { ...(0, u.HO)(a), url: a.url, isLiked: !a.isLiked };
                                s(!0);
                                let _ = await a.toggleLike();
                                (s(!1),
                                    c &&
                                        (_ === p.f.OK
                                            ? e((0, i.jsx)(f, { withLink: l, album: m }), { containerId: o.u.INFO })
                                            : e((0, i.jsx)(d.h, { error: n({ id: 'error-messages.error-during-action' }) }), { containerId: o.u.ERROR })));
                            });
                        })(),
                        { pageAlbumId: g } = (0, n.T)();
                    return (0, a.c)(async () => {
                        if (e)
                            return _({ pageAlbumId: g, albumId: e.id, isNonMusic: e.isNonMusic })
                                ? void s.openModal()
                                : t.isAuthorized
                                  ? v({ album: e })
                                  : void x((0, i.jsx)(d.h, { error: h({ id: 'authorization-messages.need-to-authorizate' }) }), { containerId: o.u.ERROR });
                    });
                };
        },
        64170: (e, t, s) => {
            'use strict';
            s.d(t, { SomethingWentWrong: () => T });
            var i = s(32290),
                r = s(63618),
                a = s(96103),
                n = s(55178),
                o = s(60900),
                l = s(39407),
                c = s(63423),
                d = s(82586),
                u = s(71926),
                m = s(17811),
                p = s(99923),
                _ = s(90153),
                h = s(74416),
                x = s(62376),
                f = s(37240),
                v = s(83920),
                g = s(20472),
                E = s(12894),
                A = s(30310),
                N = s.n(A);
            let T = (0, a.PA)((e) => {
                let { className: t, withBackwardControl: s = !0 } = e,
                    { formatMessage: a } = (0, o.A)(),
                    A = a({ id: 'error-messages.something-went-wrong' });
                !(function (e) {
                    let t = (0, h.st)(),
                        { hash: s } = (0, h.gf)(),
                        { pageId: i } = (0, f.$)(),
                        r = (0, x.U)();
                    (0, n.useEffect)(() => {
                        if (!t || !s || !i) return;
                        let a = (0, m.F)({
                            params: {
                                entityType: p.EntityTypes.Error,
                                entityId: p.EntityTypes.SomethingWrong,
                                errorMessage: e,
                                hash: s,
                                pageId: i,
                                pageStyle: p.PageStyles.Fullscreen,
                                pagePlacement: p.PagePlacements.Fullscreen,
                                mainObjectType: p.DomainObjectType.NonApplicable,
                                mainObjectId: p.DomainObjectType.NonApplicable,
                            },
                            logger: r,
                            context: 'useSendEventOnSomethingWentWrongShowed',
                        });
                        a && (0, _.z5)(t.evgenInstance, a);
                    }, [t, e, s, i, r]);
                })(A);
                let { sendRefreshEvent: T } = (function () {
                        let e = (0, h.st)(),
                            { hash: t } = (0, h.gf)(),
                            { pageId: s } = (0, f.$)(),
                            i = (0, x.U)();
                        return {
                            sendRefreshEvent: (0, n.useCallback)(() => {
                                if (!e || !t || !s) return;
                                let r = (0, m.F)({
                                    params: {
                                        actionType: p.ActionType.Refresh,
                                        userInteractionType: p.UserInteractionType.Tap,
                                        entityType: p.EntityTypes.Error,
                                        entityId: p.EntityTypes.SomethingWrong,
                                        hash: t,
                                        pageId: s,
                                        pageStyle: p.PageStyles.Fullscreen,
                                        pagePlacement: p.PagePlacements.Fullscreen,
                                        mainObjectType: p.DomainObjectType.NonApplicable,
                                        mainObjectId: p.DomainObjectType.NonApplicable,
                                    },
                                    logger: i,
                                    context: 'useSendEventOnSomethingWentWrongRefreshed',
                                });
                                r && (0, _.bv)(e.evgenInstance, r);
                            }, [e, t, s, i]),
                        };
                    })(),
                    b = (0, n.useCallback)(() => {
                        (T(), (window.location.href = g.Z.main.href));
                    }, [T]),
                    { contentRef: S } = (0, v.g)();
                return (0, i.jsxs)('div', {
                    className: (0, r.$)(N().root, t),
                    children: [
                        s &&
                            (0, i.jsx)(E.L, { withBackwardFallback: '/', className: (0, r.$)(N().navigation, { [N().navigation_desktop]: !S }), withForwardControl: !1 }),
                        (0, i.jsxs)('div', {
                            className: (0, r.$)(N().content, { [N().content_shrink]: !s }),
                            children: [
                                (0, i.jsx)(d.I, { className: N().icon, variant: 'attention', size: 'xxl' }),
                                (0, i.jsx)(u.DZ, { className: (0, r.$)(N().title, N().important), variant: 'h3', size: 'xs', children: A }),
                                (0, i.jsxs)(u.HL, {
                                    className: (0, r.$)(N().text, N().important),
                                    variant: 'span',
                                    type: 'text',
                                    size: 'l',
                                    weight: 'normal',
                                    children: [!1, (0, i.jsx)(l.A, { id: 'page-error.try-to-restart-app' })],
                                }),
                                (0, i.jsx)(c.$, {
                                    onClick: b,
                                    className: N().button,
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
        67732: (e, t, s) => {
            'use strict';
            s.d(t, { T: () => a });
            var i = s(55178),
                r = s(56008);
            function a() {
                return (0, i.useContext)(r.H);
            }
        },
        78176: (e, t, s) => {
            'use strict';
            s.d(t, { V: () => g });
            var i = s(32290),
                r = s(63618),
                a = s(96103),
                n = s(55178),
                o = s(99923),
                l = s(21732),
                c = s(91027),
                d = s(50162),
                u = s(19740),
                m = s(86269),
                p = s(71926),
                _ = s(47745),
                h = s(32641),
                x = s(57594),
                f = s(16510),
                v = s.n(f);
            let g = (0, a.PA)((e) => {
                let { artist: t, className: s } = e,
                    { fullscreenPlayer: a } = (0, x.g)(),
                    f = (0, h.Z)(t.url),
                    E = (0, _.N)(),
                    A = (0, n.useMemo)(() => {
                        var e;
                        return (
                            'decomposed' in t &&
                            (null == (e = t.decomposed) ? void 0 : e.reduce((e, t) => (e.push((0, i.jsx)(g, { artist: t, className: s }, t.id)), e), []))
                        );
                    }, [t, s]),
                    N = (0, c.c)((e) => {
                        (a.modal.isOpened && a.modal.close(), E({ to: o.AppScreen.ArtistScreen }), f(e));
                    });
                return (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsxs)(u.Dr, {
                            className: (0, r.$)(v().root, s),
                            onClick: N,
                            'data-test-id': l.OA.artists.ARTIST_ITEM,
                            children: [
                                (0, i.jsx)(m.t, {
                                    radius: 'round',
                                    className: v().cover,
                                    children: (0, i.jsx)(d._V, { withAvatarReplace: !0, src: t.coverUri, size: 100, fit: 'contain', className: v().image }),
                                }),
                                (0, i.jsx)(p.HL, { variant: 'span', size: 'm', weight: 'medium', lineClamp: 1, children: t.name }),
                            ],
                        }),
                        A,
                    ],
                });
            });
        },
        78648: (e, t, s) => {
            'use strict';
            s.d(t, { C8: () => a, UC: () => n, dM: () => o, uV: () => l });
            var i = s(87953),
                r = s(42464);
            let a = (e) => {
                    if (void 0 === e || '' === e) return 'missing';
                    let t = Number(e);
                    return !Number.isFinite(t) || t < 0 ? 'invalid' : t < 86400 ? 'lt-1d' : t <= 2592e3 ? '1-30d' : 'gt-30d';
                },
                n = (e) => (e.uid ? 'authorized' : 'no-uid'),
                o = (e) => {
                    if (!(e instanceof i.m5) || !(0, r.N)(e.cause)) return 'unexpected';
                    let t = ((e) => {
                        if (!(0, r.N)(e.cause)) return;
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
        79238: (e, t, s) => {
            'use strict';
            s.d(t, { b: () => a });
            var i = s(64605),
                r = s(97647);
            let a = (e) => {
                switch (e.type) {
                    case i._.PODCAST:
                        return r.c.PODCAST;
                    case i._.AUDIOBOOK:
                        return r.c.AUDIOBOOK;
                    case i._.FAIRY_TALE:
                        return r.c.FAIRY_TALE;
                    default:
                        return r.c.ALBUM;
                }
            };
        },
        80536: (e, t, s) => {
            'use strict';
            s.d(t, { B: () => i });
            let i = (0, s(55178).createContext)({ observeElement: () => {}, unobserveElement: () => {} });
        },
        81354: (e, t, s) => {
            'use strict';
            s.d(t, { XU: () => m, YK: () => u });
            var i,
                r,
                a = s(30782),
                n = s(55178),
                o = s(60900);
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
                })(r || (r = {})));
            var l = function (e) {
                var t = (0, o.A)(),
                    s = e.value,
                    i = e.children,
                    r = (0, a.__rest)(e, ['value', 'children']);
                return i(t.formatNumberToParts(s, r));
            };
            function c(e) {
                var t = function (t) {
                    var s = (0, o.A)(),
                        i = t.value,
                        r = t.children,
                        n = (0, a.__rest)(t, ['value', 'children']),
                        l = 'string' == typeof i ? new Date(i || 0) : i;
                    return r('formatDate' === e ? s.formatDateToParts(l, n) : s.formatTimeToParts(l, n));
                };
                return ((t.displayName = r[e]), t);
            }
            function d(e) {
                var t = function (t) {
                    var s = (0, o.A)(),
                        i = t.value,
                        r = t.children,
                        l = (0, a.__rest)(t, ['value', 'children']),
                        c = s[e](i, l);
                    if ('function' == typeof r) return r(c);
                    var d = s.textComponent || n.Fragment;
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
        82535: (e) => {
            e.exports = {
                title: 'CollectionShelfNewEpisodes_title__y_SoT',
                root: 'CollectionShelfNewEpisodes_root__VojSS',
                root_emptyList: 'CollectionShelfNewEpisodes_root_emptyList__jsjSW',
                wrapper: 'CollectionShelfNewEpisodes_wrapper__Z2EOe',
                iconBackground: 'CollectionShelfNewEpisodes_iconBackground__K4Xui',
                button: 'CollectionShelfNewEpisodes_button__3DALk',
            };
        },
        83598: (e) => {
            e.exports = {
                tooltipContent: 'SeparatedArtistsWithContextMenuDesktop_tooltipContent___PtDD',
                artistItem: 'SeparatedArtistsWithContextMenuDesktop_artistItem__Ggo_W',
            };
        },
        87953: (e, t, s) => {
            'use strict';
            s.d(t, { GX: () => a.G, X1: () => i.X, m5: () => r.m });
            var i = s(50961),
                r = s(50891),
                a = s(10733);
            s(33898);
        },
        90006: (e) => {
            e.exports = { explicitMark: 'ExplicitMarkIcon_explicitMark__0BPeQ' };
        },
        91624: (e) => {
            e.exports = { descriptionTextItem: 'DescriptionTextsDisclaimer_descriptionTextItem__XtzRU' };
        },
        92013: (e, t, s) => {
            'use strict';
            var i;
            (s.d(t, { T: () => i }),
                (function (e) {
                    ((e.OK = 'ok'), (e.ERROR = 'error'));
                })(i || (i = {})));
        },
        94218: (e, t, s) => {
            'use strict';
            s.d(t, { H: () => p });
            var i = s(32290),
                r = s(21916),
                a = s(39407),
                n = s(21732),
                o = s(91027),
                l = s(63423),
                c = s(71926),
                d = s(78648),
                u = s(70204),
                m = s(34186);
            let p = (e) => {
                let { size: t = 'm', variant: s = 'default', color: p = 'primary', withRipple: _ = !0, buttonText: h, isBlock: x, key: f, className: v } = e,
                    g = (0, r.useRouter)(),
                    E = (0, m.N)().get(u.QG),
                    A = (0, o.c)(() => {
                        E.authorizationUrl && ((0, d.uV)({ stage: 'attempt-start', trigger: 'user' }), g.push(E.authorizationUrl));
                    });
                return (0, i.jsx)(
                    l.$,
                    {
                        onClick: A,
                        className: v,
                        isBlock: x,
                        color: p,
                        variant: s,
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
        95581: (e, t, s) => {
            (Promise.resolve().then(s.bind(s, 3377)), Promise.resolve().then(s.bind(s, 40942)));
        },
    },
    (e) => {
        (e.O(
            0,
            [
                7412, 1010, 1256, 8461, 7231, 2147, 9763, 4517, 3608, 3244, 6706, 5472, 8378, 900, 2536, 2146, 3353, 2474, 8035, 347, 2732, 1410, 229, 8506, 6050, 5806,
                6241, 7702, 6874, 9155, 861, 4668, 9740, 1175, 4499, 8915, 6341, 6226, 4220, 9562, 7358,
            ],
            () => e((e.s = 95581)),
        ),
            (_N_E = e.O()));
    },
]);
