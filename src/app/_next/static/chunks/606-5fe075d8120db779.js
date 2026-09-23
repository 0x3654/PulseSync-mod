(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [606],
    {
        2825: (t, e, r) => {
            'use strict';
            r.d(e, { m: () => N });
            var i = r(32290),
                a = r(63618),
                o = r(96103),
                n = r(55178),
                s = r(21732),
                l = r(6752),
                c = r(88446),
                d = r(94631),
                _ = r(20472),
                u = r(57594),
                m = r(98350),
                p = r(49518),
                h = r(34223),
                C = r(40015),
                v = r(41549),
                x = r(81885),
                f = r.n(x);
            let N = (0, o.PA)((t) => {
                var e;
                let { className: r, itemsCount: o, headerClassName: x, carouselClassName: N } = t,
                    {
                        collection: {
                            shelf: { liked: E },
                        },
                    } = (0, u.g)(),
                    T = (0, l.L)(() => {
                        var t;
                        return null == (t = E.entities)
                            ? void 0
                            : t.map((t, e) => {
                                  if (t.album) return (0, i.jsx)(c.M, { album: t.album }, t.album.getKey(e));
                                  let r = (0, C.q)(t.track, e, E.typeForFrom);
                                  return (0, i.jsx)(d.K, { track: t.track, playContextParams: r, withPodcastName: !0 }, t.track.getKey(e));
                              });
                    });
                return (E.isNeededToLoad && (0, n.use)(E.getData()), !E.isLoading && (null == (e = E.entities) ? void 0 : e.length))
                    ? (0, i.jsx)(p.$, {
                          shimmer: (0, i.jsx)(h.D, { variant: m.X.PLAYLIST, isActive: !0 }),
                          isShimmerActive: !0,
                          isShimmerVisible: E.isLoading,
                          className: r,
                          carouselItemClassName: (0, a.$)(f().shelfColumn, f().important),
                          blockHeaderClassName: (0, a.$)(f().header, x),
                          carouselClassName: N,
                          blockHeaderTitle: E.title,
                          itemsCountPerColumn: null != o ? o : 0,
                          maxColumnsCount: p.D.ONE,
                          viewAllActionLink: _.Z.collectionShelfLiked.href,
                          'data-test-id': s.Xk.collection.COLLECTION_SHELF_PAGE_SHELF_LIKED_BLOCK,
                          children: T,
                      })
                    : (0, i.jsx)(v.E, { className: r, withHeader: !0 });
            });
        },
        3377: (t, e, r) => {
            'use strict';
            r.d(e, { WithAuth: () => h });
            var i = r(32290),
                a = r(96103),
                o = r(21916),
                n = r(63618),
                s = r(39407),
                l = r(71926),
                c = r(94218),
                d = r(55556),
                _ = r.n(d);
            let u = (0, a.PA)(() =>
                (0, i.jsxs)('div', {
                    className: _().root,
                    children: [
                        (0, i.jsx)(l.DZ, {
                            className: (0, n.$)(_().title, _().important),
                            variant: 'h3',
                            size: 'xs',
                            children: (0, i.jsx)(s.A, { id: 'authorization.enter-title' }),
                        }),
                        (0, i.jsx)(l.HL, {
                            className: (0, n.$)(_().text, _().important),
                            variant: 'span',
                            type: 'text',
                            size: 'l',
                            weight: 'normal',
                            children: (0, i.jsx)(s.A, { id: 'authorization.enter-text' }),
                        }),
                        (0, i.jsx)(c.H, { size: 'l', className: _().button }),
                    ],
                }),
            );
            var m = r(20472),
                p = r(57594);
            let h = (0, a.PA)((t) => {
                let { children: e, withRedirectToMainPage: r } = t,
                    { user: a } = (0, p.g)();
                return a.isAuthorized ? e : (r && (0, o.redirect)(m.Z.main.href), (0, i.jsx)(u, {}));
            });
        },
        10733: (t, e, r) => {
            'use strict';
            r.d(e, { G: () => o });
            var i = r(91945),
                a = r(50891);
            class o extends a.m {
                constructor(t, e) {
                    (super(t, { code: 'E_HTTP_CLIENT_NON_2XX_3XX_RESPONSE', cause: e.cause }),
                        (0, i._)(this, 'name', 'HttpErrorException'),
                        (0, i._)(this, 'statusCode', void 0),
                        (this.statusCode = e.statusCode),
                        Object.setPrototypeOf(this, o.prototype));
                }
            }
        },
        19620: (t, e, r) => {
            'use strict';
            r.d(e, { T: () => f });
            var i = r(32290),
                a = r(63618),
                o = r(55178),
                n = r(99923),
                s = r(21732),
                l = r(82586),
                c = r(50162),
                d = r(86269),
                _ = r(79856),
                u = r(71926),
                m = r(95481),
                p = r(47745),
                h = r(61258),
                C = r(69e3),
                v = r.n(C);
            let x = (t) => {
                    let {
                            className: e,
                            coverUrl: r,
                            labeledForId: C,
                            subTitle: x,
                            title: f,
                            description: N,
                            viewAllActionLink: E,
                            controls: T,
                            titleSize: b = 'm',
                            coverBackgroundColor: y,
                            coverRadius: A = 's',
                            titleClassName: k,
                            titleLineClamp: g,
                            fallbackIconVariant: S,
                            available: L = !0,
                            onViewAllAction: O,
                            titleChildren: j,
                            children: I,
                            headingRef: D,
                            coverContainerClassName: R,
                            headingVariant: w = 'h3',
                            withDescriptionWidthLimit: B = !0,
                            isShimmerVisible: P,
                            isShimmerActive: M,
                            withCover: H,
                            withDescription: W,
                            forwardRef: U,
                            shimmerCoverClassName: z,
                            shouldSendAnalyticsOnLoaded: F,
                            ...$
                        } = t,
                        Y = (0, m.f)(),
                        K = (0, o.useRef)(null),
                        X = r || H,
                        V = N || W,
                        G = (0, o.useCallback)(() => {
                            K.current && 'focus' in K.current && K.current.focus();
                        }, []),
                        Q = (0, p.N)(),
                        Z = (0, o.useCallback)(() => {
                            O ? O() : Q({ to: n.AppScreen.Link });
                        }, [Q, O]);
                    (0, o.useEffect)(() => {
                        F && Y();
                    }, [F, Y]);
                    let q = (0, o.useMemo)(
                            () =>
                                f && E && L
                                    ? (0, i.jsxs)(h.N, {
                                          className: v().title,
                                          containerClassName: v().linkContainer,
                                          textClassName: v().linkText,
                                          icon: (0, i.jsx)(l.I, { className: v().titleIcon, size: 'xs', variant: 'arrowRight' }),
                                          iconPosition: 'right',
                                          href: E,
                                          onClick: Z,
                                          'data-test-id': s.S7.BLOCK_HEADER_TITLE,
                                          children: [
                                              (0, i.jsx)(u.DZ, {
                                                  id: C,
                                                  className: (0, a.$)(v().heading, k),
                                                  variant: w,
                                                  size: b,
                                                  weight: 'bold',
                                                  lineClamp: g,
                                                  ref: D,
                                                  children: f,
                                              }),
                                              j,
                                          ],
                                      })
                                    : (0, i.jsxs)('div', {
                                          className: v().title,
                                          children: [
                                              (0, i.jsx)(u.DZ, {
                                                  id: C,
                                                  className: (0, a.$)(v().heading, k, { [v().heading_notAvailable]: !L }),
                                                  variant: w,
                                                  size: b,
                                                  weight: 'bold',
                                                  lineClamp: g,
                                                  ref: D,
                                                  'data-test-id': s.S7.BLOCK_HEADER_TITLE,
                                                  children: f,
                                              }),
                                              j,
                                          ],
                                      }),
                            [L, Z, D, w, C, f, k, g, b, E, j],
                        ),
                        J = (0, o.useMemo)(() => (W && P ? (0, i.jsx)(_.W, { isActive: M, className: v().shimmerDescription }) : N), [W, P, N, M]),
                        tt = (0, o.useMemo)(
                            () =>
                                H && P
                                    ? (0, i.jsx)(_.W, { isActive: M, className: (0, a.$)(v().shimmerCover, z), radius: 's' })
                                    : (0, i.jsx)(c._V, {
                                          src: r,
                                          fallbackIconVariant: S,
                                          style: { backgroundColor: y },
                                          className: v().cover,
                                          ref: K,
                                          onClick: G,
                                          fit: 'cover',
                                          withAvatarReplace: !0,
                                          fallbackIconSize: 's',
                                          'aria-hidden': !0,
                                          'data-test-id': s.S7.BLOCK_HEADER_COVER,
                                      }),
                            [y, r, S, G, M, P, z, H],
                        );
                    return (0, i.jsxs)('div', {
                        className: (0, a.$)(v().root, e),
                        ref: U,
                        ...$,
                        'data-test-id': s.S7.BLOCK_HEADER,
                        children: [
                            (0, i.jsxs)('div', {
                                className: v().start,
                                children: [
                                    X && (0, i.jsx)(d.t, { radius: A, className: (0, a.$)(v().coverContainer, R), children: tt }),
                                    (0, i.jsxs)('div', {
                                        className: v().textContainer,
                                        children: [
                                            x,
                                            q,
                                            V &&
                                                (0, i.jsx)(u.HL, {
                                                    id: ''.concat(C, '-description'),
                                                    variant: 'span',
                                                    type: 'text',
                                                    size: 'm',
                                                    weight: 'medium',
                                                    lineClamp: B ? 2 : void 0,
                                                    className: (0, a.$)(v().description, { [v().description_widthLimit]: B }),
                                                    'data-test-id': s.S7.BLOCK_HEADER_DESCRIPTION,
                                                    children: J,
                                                }),
                                        ],
                                    }),
                                ],
                            }),
                            T || I,
                        ],
                    });
                },
                f = (0, o.forwardRef)((t, e) => (0, i.jsx)(x, { forwardRef: e, ...t }));
        },
        20930: (t) => {
            t.exports = {
                card_root: 'HorizontalCardContainer_root__YoAAP',
                root: 'ControlsBar_root__hZQ_Z',
                item: 'ControlsBar_item__Y7iTC',
                item_buttonArrow: 'ControlsBar_item_buttonArrow__y_Ku0',
                controls: 'ControlsBar_controls__yRO8t',
                trailerIcon: 'ControlsBar_trailerIcon__areYT',
                controls_disabled: 'ControlsBar_controls_disabled___S7Rg',
                likeIcon: 'ControlsBar_likeIcon__eJvkI',
            };
        },
        23338: (t) => {
            t.exports = {
                root: 'CarouselWithColumnsBlock_root__v_qoo',
                controls: 'CarouselWithColumnsBlock_controls__yCSFo',
                item: 'CarouselWithColumnsBlock_item__RBGs4',
                item_columns_one: 'CarouselWithColumnsBlock_item_columns_one__GuhDB',
                item_columns_two: 'CarouselWithColumnsBlock_item_columns_two__46rgZ',
                column: 'CarouselWithColumnsBlock_column__oMRES',
                backwardControl: 'CarouselWithColumnsBlock_backwardControl__b_uKR',
                controlsContainer: 'CarouselWithColumnsBlock_controlsContainer__4_1Ao',
            };
        },
        26042: (t, e, r) => {
            'use strict';
            r.d(e, { B: () => n });
            var i = r(32290),
                a = r(55178),
                o = r(10936);
            let n = (t) => {
                let { objectId: e, objectPosX: r, objectPosY: n, objectPos: s, objectType: l, objectsCount: c, mainObjectId: d, mainObjectType: _, children: u } = t,
                    m = (0, a.useMemo)(
                        () => ({ objectId: e, objectPosX: r, objectPosY: n, objectPos: s, objectType: l, objectsCount: c, mainObjectId: d, mainObjectType: _ }),
                        [e, r, n, s, l, c, d, _],
                    );
                return (0, i.jsx)(o.l.Provider, { value: m, children: u });
            };
        },
        30310: (t) => {
            t.exports = {
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
        31640: (t) => {
            t.exports = {
                card_root: 'HorizontalCardContainer_root__YoAAP',
                root: 'EntityMeta_root__Zn4Th',
                root_disabled: 'EntityMeta_root_disabled__u3DaR',
                albumLink: 'EntityMeta_albumLink__vxRG7',
                artistCaption: 'EntityMeta_artistCaption__3JqiO',
                artistLink: 'EntityMeta_artistLink__rMKgI',
                description: 'EntityMeta_description__cSa2I',
                explicitMark: 'EntityMeta_explicitMark__wOyns',
                likesCount: 'EntityMeta_likesCount__cw2GN',
                subtitle: 'EntityMeta_subtitle__yE1NK',
                title: 'EntityMeta_title__6_ChR',
                titleContainer: 'EntityMeta_titleContainer__WMe1r',
                version: 'EntityMeta_version__7Z948',
                root_disliked: 'EntityMeta_root_disliked__PhzHW',
                title_withVersion: 'EntityMeta_title_withVersion__rbXWv',
                text: 'EntityMeta_text___lB4k',
                icon: 'EntityMeta_icon__tTxs3',
            };
        },
        33898: (t, e, r) => {
            'use strict';
            var i;
            (r.d(e, { Z: () => i }),
                (function (t) {
                    ((t.METHOD_NOT_SUPPORTED = 'E_BEACON_METHOD_NOT_SUPPORTED'),
                        (t.NOT_AVAILABLE = 'E_BEACON_NOT_AVAILABLE'),
                        (t.QUEUE_FAILED = 'E_BEACON_QUEUE_FAILED'),
                        (t.NO_RESPONSE_DATA = 'E_BEACON_NO_RESPONSE_DATA'),
                        (t.RETRY_EXHAUSTED = 'E_BEACON_RETRY_EXHAUSTED'));
                })(i || (i = {})));
        },
        40015: (t, e, r) => {
            'use strict';
            r.d(e, { q: () => a });
            var i = r(71483);
            let a = (t, e, r) => {
                let a = { type: i.K.Various, meta: { id: t.id }, from: r || '' };
                return (
                    void 0 !== t.albumId && (a = { type: i.K.Album, meta: { id: t.albumId }, from: r || '' }),
                    { contextData: a, queueParams: { entityId: t.id, index: e }, loadContextMeta: !0 }
                );
            };
        },
        41549: (t, e, r) => {
            'use strict';
            r.d(e, { E: () => _ });
            var i = r(32290),
                a = r(96103),
                o = r(79856),
                n = r(98350),
                s = r(34223),
                l = r(85197),
                c = r.n(l);
            let d = () => Array.from({ length: 5 }, (t) => (0, i.jsx)(s.D, { variant: n.X.PLAYLIST, className: c().track, isActive: !0 }, t)),
                _ = (0, a.PA)((t) => {
                    let { className: e, withHeader: r } = t;
                    return (0, i.jsxs)('div', {
                        className: e,
                        children: [r && (0, i.jsx)(o.W, { radius: 'l', width: 100, height: 24, className: c().title, isActive: !0 }), (0, i.jsx)(d, {})],
                    });
                });
        },
        42464: (t, e, r) => {
            'use strict';
            r.d(e, { N: () => i });
            let i = (t) => 'object' == typeof t && null !== t && 'request' in t && null !== t.request;
        },
        45807: (t, e, r) => {
            'use strict';
            r.d(e, { Y: () => d });
            var i,
                a = r(95716),
                o = r(55178),
                n = {
                    352: (t) => {
                        t.exports = a;
                    },
                    810: (t) => {
                        t.exports = i || (i = r.t(o, 2));
                    },
                },
                s = {};
            function l(t) {
                var e = s[t];
                if (void 0 !== e) return e.exports;
                var r = (s[t] = { exports: {} });
                return (n[t](r, r.exports, l), r.exports);
            }
            var c = {};
            ((() => {
                (Object.defineProperty(c, 'X', { value: !0 }), (c.l = void 0));
                let t = l(810),
                    e = l(352);
                c.l = (r) => {
                    let [i, a] = (0, t.useState)(!0),
                        [o, n] = (0, t.useState)(!0),
                        s = () => {
                            let t = null == r ? void 0 : r.current;
                            t && (a(0 === t.scrollLeft), n(t.scrollWidth - t.scrollLeft <= t.offsetWidth + 10));
                        };
                    ((0, t.useEffect)(() => {
                        s();
                    }, [r, s]),
                        (0, t.useEffect)(() => {
                            let t = null == r ? void 0 : r.current;
                            return (
                                null == t || t.addEventListener('scroll', s),
                                window.addEventListener('resize', s),
                                () => {
                                    (null == t || t.removeEventListener('scroll', s), window.removeEventListener('resize', s));
                                }
                            );
                        }, [r, s]));
                    let l = (0, t.useMemo)(
                        () =>
                            (0, e.throttle)(
                                () => {
                                    r && r.current && (r.current.scrollLeft += r.current.offsetWidth / 2);
                                },
                                420,
                                { trailing: !1 },
                            ),
                        [r],
                    );
                    return {
                        swipeBackward: (0, t.useMemo)(
                            () =>
                                (0, e.throttle)(
                                    () => {
                                        r && r.current && (r.current.scrollLeft -= r.current.offsetWidth / 2);
                                    },
                                    420,
                                    { trailing: !1 },
                                ),
                            [r],
                        ),
                        swipeForward: l,
                        shouldBackwardButtonBeDisabled: i,
                        shouldForwardButtonBeDisabled: o,
                        shouldHideControls: i && o,
                    };
                };
            })(),
                c.X);
            var d = c.l;
        },
        49518: (t, e, r) => {
            'use strict';
            r.d(e, { $: () => f, D: () => v });
            var i = r(32290),
                a = r(63618),
                o = r(66988),
                n = r(55178),
                s = r(85472),
                l = r(99923),
                c = r(21732),
                d = r(75245),
                _ = r(84782),
                u = r(26042),
                m = r(19620),
                p = r(49522),
                h = r(23338),
                C = r.n(h),
                v = (function (t) {
                    return ((t.ONE = 'one'), (t.TWO = 'two'), t);
                })({});
            let x = (t) => {
                    let {
                            className: e,
                            forwardRef: r,
                            isShimmerVisible: h,
                            isColumnsShimmerVisible: v,
                            isHeaderWithoutControls: x,
                            maxColumnsCount: f,
                            carouselItemClassName: N,
                            carouselClassName: E,
                            children: T,
                            itemsCountPerColumn: b,
                            shimmer: y,
                            viewAllActionLink: A,
                            blockHeaderClassName: k,
                            additionalControl: g,
                            blockHeaderDescription: S,
                            blockHeaderTitle: L,
                            blockHeaderCoverUrl: O,
                            withBlockHeaderDescription: j,
                            withBlockHeaderCover: I,
                            blockHeaderHeadingVariant: D,
                            isShimmerActive: R,
                            shouldResetCarouselScroll: w,
                            beforeCarousel: B,
                            ...P
                        } = t,
                        { objectsCount: M } = (0, _.N)(),
                        [H, W] = (0, n.useState)(),
                        U = (0, n.useId)(),
                        z = (0, n.useRef)(null),
                        F = 'two' === f,
                        $ = 'string' == typeof A ? String(A) : void 0,
                        Y = null != v ? v : h,
                        K = (0, n.useCallback)(
                            (t) => {
                                let e = (0, o.A)(t, b).slice(0, F ? 2 : 1);
                                return (
                                    1 === e.length ? W('one') : W('two'),
                                    e.map((t, e) => (0, i.jsx)('div', { className: C().column, 'data-test-id': c.S7.CAROUSEL_WITH_COLUMNS_BLOCK_COLUMN, children: t }, e))
                                );
                            },
                            [b, F],
                        ),
                        X = (0, n.useMemo)(() => {
                            if (Y) return K(Array.from({ length: 2 * b }, (t, e) => (0, n.cloneElement)(y, { key: e })));
                            return K(T);
                        }, [T, K, Y, b, y]),
                        V = (0, n.useMemo)(
                            () =>
                                x
                                    ? null
                                    : (0, i.jsxs)('div', {
                                          className: C().controlsContainer,
                                          children: [g, (0, i.jsx)(p.X, { carouselRef: z, className: C().controls, backwardControlClassName: C().backwardControl })],
                                      }),
                            [g, x],
                        );
                    return (
                        (0, n.useEffect)(() => {
                            z.current && w && z.current.scrollTo(0, 0);
                        }, [w]),
                        (0, i.jsxs)('section', {
                            ref: r,
                            className: (0, a.$)(C().root, e),
                            ...(0, s.getDataAttrFromProps)(P),
                            children: [
                                (0, i.jsx)(u.B, {
                                    objectType: l.DomainObjectType.Shortcut,
                                    objectId: $,
                                    objectPosX: 0,
                                    objectPosY: 0,
                                    objectsCount: null != M ? M : 0,
                                    children: (0, i.jsx)(m.T, {
                                        coverUrl: O,
                                        title: L,
                                        description: S,
                                        className: k,
                                        labeledForId: U,
                                        viewAllActionLink: A,
                                        controls: V,
                                        isShimmerVisible: h,
                                        isShimmerActive: R,
                                        withDescription: j,
                                        withCover: I,
                                        headingVariant: D,
                                    }),
                                }),
                                B,
                                (0, i.jsx)(d.F, {
                                    itemClassName: (0, a.$)(C().item, C()['item_columns_'.concat(Y && F ? 'two' : H)], N),
                                    className: E,
                                    ref: z,
                                    'aria-labelledby': U,
                                    'data-test-id': c.S7.CAROUSEL_WITH_COLUMNS_BLOCK_CAROUSEL,
                                    children: X,
                                }),
                            ],
                        })
                    );
                },
                f = (0, n.forwardRef)((t, e) => (0, i.jsx)(x, { forwardRef: e, ...t }));
        },
        49522: (t, e, r) => {
            'use strict';
            r.d(e, { X: () => u });
            var i = r(32290),
                a = r(63618),
                o = r(55178),
                n = r(21732),
                s = r(45807),
                l = r(63423),
                c = r(82586),
                d = r(60178),
                _ = r.n(d);
            let u = (t) => {
                let {
                        carouselRef: e,
                        backwardControlClassName: r,
                        forwardControlClassName: d,
                        className: u,
                        withSecondaryColor: m,
                        buttonSize: p = 'xxxs',
                        buttonVariant: h = 'outline',
                    } = t,
                    { swipeBackward: C, swipeForward: v, shouldBackwardButtonBeDisabled: x, shouldForwardButtonBeDisabled: f, shouldHideControls: N } = (0, s.Y)(e),
                    E = (0, o.useCallback)(
                        (t) => {
                            (C(), t.stopPropagation());
                        },
                        [C],
                    ),
                    T = (0, o.useCallback)(
                        (t) => {
                            (v(), t.stopPropagation());
                        },
                        [v],
                    );
                return (0, i.jsxs)('div', {
                    className: (0, a.$)(_().root, u),
                    'data-test-id': n.S7.CAROUSEL_CONTROLS,
                    children: [
                        (0, i.jsx)(l.$, {
                            tabIndex: -1,
                            'aria-hidden': !0,
                            className: (0, a.$)(_().control, r, { [_().control_hidden]: N, [_().control_withSecondaryColor]: m }),
                            onClick: E,
                            size: p,
                            radius: 'round',
                            variant: h,
                            withRipple: !1,
                            icon: (0, i.jsx)(c.I, { size: 'xxs', variant: 'arrowLeft' }),
                            disabled: x,
                            'data-test-id': n.S7.CAROUSEL_CONTROLS_BACKWARD_BUTTON,
                        }),
                        (0, i.jsx)(l.$, {
                            tabIndex: -1,
                            'aria-hidden': !0,
                            className: (0, a.$)(_().control, d, { [_().control_hidden]: N, [_().control_withSecondaryColor]: m }),
                            onClick: T,
                            size: p,
                            radius: 'round',
                            variant: h,
                            withRipple: !1,
                            icon: (0, i.jsx)(c.I, { size: 'xxs', variant: 'arrowRight' }),
                            disabled: f,
                            'data-test-id': n.S7.CAROUSEL_CONTROLS_FORWARD_BUTTON,
                        }),
                    ],
                });
            };
        },
        50880: (t) => {
            t.exports = {
                buttonArrow: 'EntityCard_buttonArrow__ussa7',
                titleLink: 'EntityCard_titleLink__3ucPa',
                titleText: 'EntityCard_titleText___EU9t',
                root: 'EntityCard_root__HNsWx',
                root_disabled: 'EntityCard_root_disabled__qdBaH',
                ripple: 'EntityCard_ripple__iMHNo',
                playButtonCell: 'EntityCard_playButtonCell__AYoR5',
                controlsBarCell: 'EntityCard_controlsBarCell__GpbEX',
                text: 'EntityCard_text__hChwj',
            };
        },
        50891: (t, e, r) => {
            'use strict';
            r.d(e, { m: () => o });
            var i = r(91945),
                a = r(25090);
            class o extends a.t {
                constructor(t = 'Http Client error', { code: e = 'E_HTTP_CLIENT', ...r } = {}) {
                    (super(t, { code: e, ...r }), (0, i._)(this, 'name', 'HttpException'), Object.setPrototypeOf(this, o.prototype));
                }
            }
        },
        50961: (t, e, r) => {
            'use strict';
            var i;
            (r.d(e, { X: () => i }),
                (function (t) {
                    ((t[(t.NOT_MODIFIED = 304)] = 'NOT_MODIFIED'),
                        (t[(t.NOT_FOUND = 404)] = 'NOT_FOUND'),
                        (t[(t.BAD_REQUEST = 400)] = 'BAD_REQUEST'),
                        (t[(t.REQUEST_TIMEOUT = 408)] = 'REQUEST_TIMEOUT'),
                        (t[(t.PRECONDITION_FAILED = 412)] = 'PRECONDITION_FAILED'),
                        (t[(t.TEAPOT = 418)] = 'TEAPOT'));
                })(i || (i = {})));
        },
        52199: (t, e, r) => {
            'use strict';
            r.d(e, { r: () => i });
            let i = (t, e, r) => t.replace(r, e);
        },
        55556: (t) => {
            t.exports = {
                root: 'Login_root__VtFg_',
                title: 'Login_title__dqQz1',
                important: 'Login_important__Z8S9I',
                text: 'Login_text__1uju5',
                button: 'Login_button__ZYvZY',
            };
        },
        60178: (t) => {
            t.exports = {
                root: 'CarouselControls_root__E_hwc',
                control: 'CarouselControls_control__L8t4i',
                control_hidden: 'CarouselControls_control_hidden__pLrn6',
                control_withSecondaryColor: 'CarouselControls_control_withSecondaryColor__KqSEN',
            };
        },
        63038: (t, e, r) => {
            'use strict';
            r.d(e, { B: () => i });
            let i = '{tld}';
        },
        64170: (t, e, r) => {
            'use strict';
            r.d(e, { SomethingWentWrong: () => b });
            var i = r(32290),
                a = r(63618),
                o = r(96103),
                n = r(55178),
                s = r(60900),
                l = r(39407),
                c = r(63423),
                d = r(82586),
                _ = r(71926),
                u = r(17811),
                m = r(99923),
                p = r(90153),
                h = r(74416),
                C = r(62376),
                v = r(37240),
                x = r(83920),
                f = r(20472),
                N = r(12894),
                E = r(30310),
                T = r.n(E);
            let b = (0, o.PA)((t) => {
                let { className: e, withBackwardControl: r = !0 } = t,
                    { formatMessage: o } = (0, s.A)(),
                    E = o({ id: 'error-messages.something-went-wrong' });
                !(function (t) {
                    let e = (0, h.st)(),
                        { hash: r } = (0, h.gf)(),
                        { pageId: i } = (0, v.$)(),
                        a = (0, C.U)();
                    (0, n.useEffect)(() => {
                        if (!e || !r || !i) return;
                        let o = (0, u.F)({
                            params: {
                                entityType: m.EntityTypes.Error,
                                entityId: m.EntityTypes.SomethingWrong,
                                errorMessage: t,
                                hash: r,
                                pageId: i,
                                pageStyle: m.PageStyles.Fullscreen,
                                pagePlacement: m.PagePlacements.Fullscreen,
                                mainObjectType: m.DomainObjectType.NonApplicable,
                                mainObjectId: m.DomainObjectType.NonApplicable,
                            },
                            logger: a,
                            context: 'useSendEventOnSomethingWentWrongShowed',
                        });
                        o && (0, p.z5)(e.evgenInstance, o);
                    }, [e, t, r, i, a]);
                })(E);
                let { sendRefreshEvent: b } = (function () {
                        let t = (0, h.st)(),
                            { hash: e } = (0, h.gf)(),
                            { pageId: r } = (0, v.$)(),
                            i = (0, C.U)();
                        return {
                            sendRefreshEvent: (0, n.useCallback)(() => {
                                if (!t || !e || !r) return;
                                let a = (0, u.F)({
                                    params: {
                                        actionType: m.ActionType.Refresh,
                                        userInteractionType: m.UserInteractionType.Tap,
                                        entityType: m.EntityTypes.Error,
                                        entityId: m.EntityTypes.SomethingWrong,
                                        hash: e,
                                        pageId: r,
                                        pageStyle: m.PageStyles.Fullscreen,
                                        pagePlacement: m.PagePlacements.Fullscreen,
                                        mainObjectType: m.DomainObjectType.NonApplicable,
                                        mainObjectId: m.DomainObjectType.NonApplicable,
                                    },
                                    logger: i,
                                    context: 'useSendEventOnSomethingWentWrongRefreshed',
                                });
                                a && (0, p.bv)(t.evgenInstance, a);
                            }, [t, e, r, i]),
                        };
                    })(),
                    y = (0, n.useCallback)(() => {
                        (b(), (window.location.href = f.Z.main.href));
                    }, [b]),
                    { contentRef: A } = (0, x.g)();
                return (0, i.jsxs)('div', {
                    className: (0, a.$)(T().root, e),
                    children: [
                        r &&
                            (0, i.jsx)(N.L, { withBackwardFallback: '/', className: (0, a.$)(T().navigation, { [T().navigation_desktop]: !A }), withForwardControl: !1 }),
                        (0, i.jsxs)('div', {
                            className: (0, a.$)(T().content, { [T().content_shrink]: !r }),
                            children: [
                                (0, i.jsx)(d.I, { className: T().icon, variant: 'attention', size: 'xxl' }),
                                (0, i.jsx)(_.DZ, { className: (0, a.$)(T().title, T().important), variant: 'h3', size: 'xs', children: E }),
                                (0, i.jsxs)(_.HL, {
                                    className: (0, a.$)(T().text, T().important),
                                    variant: 'span',
                                    type: 'text',
                                    size: 'l',
                                    weight: 'normal',
                                    children: [!1, (0, i.jsx)(l.A, { id: 'page-error.try-to-restart-app' })],
                                }),
                                (0, i.jsx)(c.$, {
                                    onClick: y,
                                    className: T().button,
                                    role: 'link',
                                    color: 'secondary',
                                    size: 'l',
                                    radius: 'xxxl',
                                    children: (0, i.jsxs)(_.HL, {
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
        69e3: (t) => {
            t.exports = {
                root: 'BlockHeader_root__j3mbg',
                titleIcon: 'BlockHeader_titleIcon__GQFEK',
                start: 'BlockHeader_start__ZrGP5',
                coverContainer: 'BlockHeader_coverContainer__lATZT',
                cover: 'BlockHeader_cover__koOXq',
                textContainer: 'BlockHeader_textContainer___2wn9',
                title: 'BlockHeader_title__5xlx6',
                description: 'BlockHeader_description__hAk9D',
                description_widthLimit: 'BlockHeader_description_widthLimit__CXxK1',
                linkContainer: 'BlockHeader_linkContainer__EuW_L',
                linkText: 'BlockHeader_linkText__Or6VB',
                heading: 'BlockHeader_heading__4iqvS',
                heading_notAvailable: 'BlockHeader_heading_notAvailable__r_dm1',
                shimmerCover: 'BlockHeader_shimmerCover__m2PJl',
                textShimmerContainer: 'BlockHeader_textShimmerContainer__hT_Zo',
                shimmerTitle: 'BlockHeader_shimmerTitle__kAkgm',
                shimmerDescription: 'BlockHeader_shimmerDescription__Bya4z',
            };
        },
        75245: (t, e, r) => {
            'use strict';
            r.d(e, { F: () => c });
            var i,
                a = r(55178),
                o = {
                    5881: (t, e, r) => {
                        function i() {
                            for (var t, e, r = 0, i = ''; r < arguments.length;)
                                (t = arguments[r++]) &&
                                    (e = (function t(e) {
                                        var r,
                                            i,
                                            a = '';
                                        if ('string' == typeof e || 'number' == typeof e) a += e;
                                        else if ('object' == typeof e)
                                            if (Array.isArray(e)) for (r = 0; r < e.length; r++) e[r] && (i = t(e[r])) && (a && (a += ' '), (a += i));
                                            else for (r in e) e[r] && (a && (a += ' '), (a += r));
                                        return a;
                                    })(t)) &&
                                    (i && (i += ' '), (i += e));
                            return i;
                        }
                        (r.r(e), r.d(e, { clsx: () => i, default: () => a }));
                        let a = i;
                    },
                    2876: (t, e, r) => {
                        (r.r(e), r.d(e, { default: () => i }));
                        let i = { root: 'IZnFMW4gXBshJODnvB1P', item: 'VJ9IexhAEuYSCyGiMfN4' };
                    },
                    9097: (t, e) => {
                        var r = Symbol.for('react.transitional.element');
                        function i(t, e, i) {
                            var a = null;
                            if ((void 0 !== i && (a = '' + i), void 0 !== e.key && (a = '' + e.key), 'key' in e))
                                for (var o in ((i = {}), e)) 'key' !== o && (i[o] = e[o]);
                            else i = e;
                            return { $$typeof: r, type: t, key: a, ref: void 0 !== (e = i.ref) ? e : null, props: i };
                        }
                        ((e.Fragment = Symbol.for('react.fragment')), (e.jsx = i), (e.jsxs = i));
                    },
                    4377: (t, e, r) => {
                        t.exports = r(9097);
                    },
                    4014: function (t, e, r) {
                        var i =
                            (this && this.__importDefault) ||
                            function (t) {
                                return t && t.__esModule ? t : { default: t };
                            };
                        (Object.defineProperty(e, '__esModule', { value: !0 }), (e.Carousel = void 0));
                        let a = r(4377),
                            o = r(5881),
                            n = r(810),
                            s = i(r(2876)),
                            l = (t) => {
                                let { className: e, itemClassName: r, children: i, forwardRef: l, role: c, ...d } = t;
                                return (0, a.jsx)('ol', {
                                    ref: l,
                                    className: (0, o.clsx)(s.default.root, e),
                                    ...d,
                                    role: null != c ? c : 'list',
                                    children: n.Children.map(i, (t) => (0, a.jsx)('li', { className: (0, o.clsx)(s.default.item, r), children: t })),
                                });
                            };
                        e.Carousel = (0, n.forwardRef)((t, e) => (0, a.jsx)(l, { forwardRef: e, ...t }));
                    },
                    810: (t) => {
                        t.exports = i || (i = r.t(a, 2));
                    },
                },
                n = {};
            function s(t) {
                var e = n[t];
                if (void 0 !== e) return e.exports;
                var r = (n[t] = { exports: {} });
                return (o[t].call(r.exports, r, r.exports, s), r.exports);
            }
            ((s.d = (t, e) => {
                for (var r in e) s.o(e, r) && !s.o(t, r) && Object.defineProperty(t, r, { enumerable: !0, get: e[r] });
            }),
                (s.o = (t, e) => Object.prototype.hasOwnProperty.call(t, e)),
                (s.r = (t) => {
                    ('undefined' != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, { value: 'Module' }),
                        Object.defineProperty(t, '__esModule', { value: !0 }));
                }));
            var l = {};
            (() => {
                (Object.defineProperty(l, 'X', { value: !0 }), (l.l = void 0));
                var t = s(4014);
                Object.defineProperty(l, 'l', {
                    enumerable: !0,
                    get: function () {
                        return t.Carousel;
                    },
                });
            })();
            var c = l.l;
            l.X;
        },
        78570: (t, e, r) => {
            'use strict';
            r.d(e, { r: () => m });
            var i = r(32290),
                a = r(63618),
                o = r(60900),
                n = r(21732),
                s = r(6752),
                l = r(82586),
                c = r(71926),
                d = r(13798),
                _ = r(31640),
                u = r.n(_);
            let m = (t) => {
                let {
                        isDisliked: e,
                        isDisabled: r,
                        description: _,
                        getDescriptionTexts: m,
                        explicitMarkVariant: p,
                        className: h,
                        version: C,
                        title: v,
                        artistsComponent: x,
                        likesCount: f,
                        isLiked: N,
                        releaseYear: E,
                        titleLineClamp: T = 1,
                    } = t,
                    { formatMessage: b, formatNumber: y } = (0, o.A)(),
                    A = (0, s.L)(() => {
                        let t = null == x ? void 0 : x((0, a.$)(u().text, u().artistLink), (0, a.$)(u().text, u().artistCaption));
                        if (!t && !f) return;
                        let e = (0, i.jsx)(c.HL, { variant: 'span', size: 'm', weight: 'medium', 'aria-hidden': !0, children: '•' });
                        return (0, i.jsxs)('div', {
                            className: u().subtitle,
                            'data-test-id': n.S7.ENTITY_CARD_ENTITY_META_SUBTITLE,
                            children: [
                                'number' == typeof f &&
                                    f > 0 &&
                                    (0, i.jsxs)('div', {
                                        className: u().likesCount,
                                        'aria-label': b({ id: 'entity-names.likes-counter' }, { counter: f }),
                                        'data-test-id': n.S7.ENTITY_CARD_ENTITY_META_SUBTITLE_LIKES_COUNT,
                                        children: [
                                            (0, i.jsx)(l.I, {
                                                className: u().icon,
                                                variant: N ? 'likedVariant' : 'likeVariant',
                                                size: 'xxs',
                                                'data-test-id': n.S7.ENTITY_CARD_ENTITY_META_SUBTITLE_LIKES_COUNT_ICON,
                                            }),
                                            (0, i.jsx)(c.HL, {
                                                variant: 'span',
                                                size: 'm',
                                                weight: 'medium',
                                                'aria-hidden': !0,
                                                'data-test-id': n.S7.ENTITY_CARD_ENTITY_META_SUBTITLE_LIKES_COUNT_TEXT,
                                                children: y(f),
                                            }),
                                        ],
                                    }),
                                !!f && t && e,
                                t,
                                !!E && t && e,
                                (0, i.jsx)(c.HL, { variant: 'span', size: 'm', weight: 'medium', children: E }),
                            ],
                        });
                    });
                return (0, i.jsxs)('div', {
                    className: (0, a.$)(u().root, { [u().root_disabled]: r, [u().root_disliked]: e }, h),
                    'data-test-id': n.S7.ENTITY_CARD_ENTITY_META,
                    children: [
                        (0, i.jsxs)('div', {
                            className: u().titleContainer,
                            children: [
                                (0, i.jsxs)(c.HL, {
                                    className: (0, a.$)(u().text, u().title, { [u().title_withVersion]: C }),
                                    size: 'm',
                                    variant: 'div',
                                    lineClamp: T,
                                    type: 'text',
                                    'data-test-id': n.S7.ENTITY_CARD_ENTITY_META_TITLE,
                                    children: [
                                        v,
                                        C &&
                                            (0, i.jsx)(c.HL, {
                                                className: (0, a.$)(u().text, u().version),
                                                size: 'm',
                                                variant: 'div',
                                                type: 'text',
                                                'data-test-id': n.S7.ENTITY_CARD_ENTITY_META_VERSION,
                                                children: ' '.concat(C),
                                            }),
                                    ],
                                }),
                                p && (0, i.jsx)(d.N, { className: u().explicitMark, getDescriptionTexts: m, variant: p }),
                            ],
                        }),
                        _ &&
                            (0, i.jsx)(c.HL, {
                                className: (0, a.$)(u().text, u().description),
                                variant: 'span',
                                size: 'm',
                                weight: 'medium',
                                lineClamp: 1,
                                'data-test-id': n.S7.ENTITY_CARD_ENTITY_META_DESCRIPTION,
                                children: _,
                            }),
                        A,
                    ],
                });
            };
        },
        78648: (t, e, r) => {
            'use strict';
            r.d(e, { C8: () => o, UC: () => n, dM: () => s, uV: () => l });
            var i = r(87953),
                a = r(42464);
            let o = (t) => {
                    if (void 0 === t || '' === t) return 'missing';
                    let e = Number(t);
                    return !Number.isFinite(e) || e < 0 ? 'invalid' : e < 86400 ? 'lt-1d' : e <= 2592e3 ? '1-30d' : 'gt-30d';
                },
                n = (t) => (t.uid ? 'authorized' : 'no-uid'),
                s = (t) => {
                    if (!(t instanceof i.m5) || !(0, a.N)(t.cause)) return 'unexpected';
                    let e = ((t) => {
                        if (!(0, a.N)(t.cause)) return;
                        let e = t.cause.response;
                        if ('object' == typeof e && null !== e) {
                            if ('statusCode' in e && 'number' == typeof e.statusCode) return e.statusCode;
                            if ('status' in e && 'number' == typeof e.status) return e.status;
                        }
                    })(t);
                    return void 0 === e ? 'transport' : 401 === e ? '401' : e >= 400 && e < 500 ? '4xx' : e >= 500 && e < 600 ? '5xx' : 'unexpected';
                },
                l = (t) => {
                    try {
                        var e;
                        null == (e = window.musicDesktop) || e.authorization.reportDiagnostic(t);
                    } catch (t) {}
                };
        },
        81354: (t, e, r) => {
            'use strict';
            r.d(e, { XU: () => u, YK: () => _ });
            var i,
                a,
                o = r(30782),
                n = r(55178),
                s = r(60900);
            (!(function (t) {
                ((t.formatDate = 'FormattedDate'),
                    (t.formatTime = 'FormattedTime'),
                    (t.formatNumber = 'FormattedNumber'),
                    (t.formatList = 'FormattedList'),
                    (t.formatDisplayName = 'FormattedDisplayName'));
            })(i || (i = {})),
                (function (t) {
                    ((t.formatDate = 'FormattedDateParts'),
                        (t.formatTime = 'FormattedTimeParts'),
                        (t.formatNumber = 'FormattedNumberParts'),
                        (t.formatList = 'FormattedListParts'));
                })(a || (a = {})));
            var l = function (t) {
                var e = (0, s.A)(),
                    r = t.value,
                    i = t.children,
                    a = (0, o.__rest)(t, ['value', 'children']);
                return i(e.formatNumberToParts(r, a));
            };
            function c(t) {
                var e = function (e) {
                    var r = (0, s.A)(),
                        i = e.value,
                        a = e.children,
                        n = (0, o.__rest)(e, ['value', 'children']),
                        l = 'string' == typeof i ? new Date(i || 0) : i;
                    return a('formatDate' === t ? r.formatDateToParts(l, n) : r.formatTimeToParts(l, n));
                };
                return ((e.displayName = a[t]), e);
            }
            function d(t) {
                var e = function (e) {
                    var r = (0, s.A)(),
                        i = e.value,
                        a = e.children,
                        l = (0, o.__rest)(e, ['value', 'children']),
                        c = r[t](i, l);
                    if ('function' == typeof a) return a(c);
                    var d = r.textComponent || n.Fragment;
                    return n.createElement(d, null, c);
                };
                return ((e.displayName = i[t]), e);
            }
            function _(t) {
                return t;
            }
            ((l.displayName = 'FormattedNumberParts'), (l.displayName = 'FormattedNumberParts'));
            var u = d('formatDate');
            (d('formatTime'), d('formatNumber'), d('formatList'), d('formatDisplayName'), c('formatDate'), c('formatTime'));
        },
        81885: (t) => {
            t.exports = {
                header: 'CollectionShelfLiked_header__u9MqV',
                shelfColumn: 'CollectionShelfLiked_shelfColumn__4KX_5',
                important: 'CollectionShelfLiked_important__0K3qk',
            };
        },
        85197: (t) => {
            t.exports = { title: 'CollectionShelfShimmer_title__X3d9J' };
        },
        87953: (t, e, r) => {
            'use strict';
            r.d(e, { GX: () => o.G, X1: () => i.X, m5: () => a.m });
            var i = r(50961),
                a = r(50891),
                o = r(10733);
            r(33898);
        },
        88446: (t, e, r) => {
            'use strict';
            r.d(e, { M: () => z });
            var i = r(32290),
                a = r(63618),
                o = r(96103),
                n = r(55178),
                s = r(99923),
                l = r(21732),
                c = r(71483),
                d = r(91027),
                _ = r(6752),
                u = r(58359),
                m = r(71926),
                p = r(34883),
                h = r(7462),
                C = r(41677),
                v = r(71735),
                x = r(47745),
                f = r(2969),
                N = r(23352),
                E = r(72396),
                T = r(5537),
                b = r(32641),
                y = r(28999),
                A = r(90169),
                k = r(57594),
                g = r(50880),
                S = r.n(g),
                L = r(78570),
                O = r(1444),
                j = r(61258),
                I = r(40229),
                D = r(82586),
                R = r(63363),
                w = r(54391),
                B = r(92744),
                P = r(29268),
                M = r(4008),
                H = r(20930),
                W = r.n(H);
            let U = (0, o.PA)((t) => {
                    var e;
                    let { className: r, album: o, likeIconSize: l = 'xxs' } = t,
                        { user: c, trailer: _ } = (0, k.g)(),
                        u = (0, v.P)(),
                        { sendLikeSearchFeedback: m } = (0, y.z)(),
                        p = (0, R.K)(o),
                        [h, C] = (0, n.useState)(!1),
                        x = (0, d.c)(async () => {
                            (h || o.isLiked || (C(!0), null == m || m()), await p());
                        }),
                        f = (0, w.F)(),
                        N = (0, d.c)((t) => {
                            if ((t.stopPropagation(), u())) return void t.preventDefault();
                            (_.openAlbumTrailer(o.id), f(s.DomainObjectType.Album, String(o.id)));
                        });
                    return (0, i.jsxs)('div', {
                        className: (0, a.$)(W().root, W().controls, r, { [W().controls_disabled]: !o.isAvailable }),
                        children: [
                            o.isAvailable &&
                                (0, i.jsxs)(i.Fragment, {
                                    children: [
                                        (0, i.jsx)(M.WithOffline, {
                                            fallback: (0, i.jsx)(B.c, {
                                                size: 'xs',
                                                iconSize: l,
                                                className: (0, a.$)(W().item, W().likeIcon),
                                                isLiked: o.isLiked,
                                                onClick: x,
                                                disabled: !c.isAuthorized,
                                            }),
                                        }),
                                        (null == (e = o.trailer) ? void 0 : e.isAvailable) &&
                                            (0, i.jsx)(M.WithOffline, {
                                                fallback: (0, i.jsx)(P.k, {
                                                    className: (0, a.$)(W().item, W().trailerIcon),
                                                    iconSize: 'xs',
                                                    variant: 'text',
                                                    onClick: N,
                                                    withRipple: !1,
                                                }),
                                            }),
                                    ],
                                }),
                            (0, i.jsx)('div', {
                                className: (0, a.$)(W().item, W().item_buttonArrow),
                                children: (0, i.jsx)(D.I, { className: S().buttonArrow, variant: 'arrowRight', size: 'xs' }),
                            }),
                        ],
                    });
                }),
                z = (0, o.PA)((t) => {
                    let { className: e, album: r, pageId: o, coverClassName: g, playButtonIconSize: D, likeIconSize: R, shouldShowReleaseYear: w, description: B } = t,
                        P = (0, h.r)(r.type),
                        { ref: M, intersectionPropertyId: H } = (0, N.n)(),
                        { from: W } = (0, E.f)({ pageId: o }),
                        [z, F] = (0, n.useState)(!1),
                        $ = (0, f.b)(),
                        Y = (0, b.Z)(r.url),
                        K = (0, v.P)(),
                        { sendNavigateSearchFeedback: X, sendPlaySearchFeedback: V } = (0, y.z)(),
                        G = (0, x.N)(),
                        {
                            paywall: { modal: Q },
                        } = (0, k.g)(),
                        Z = (0, T.N)(),
                        {
                            isPlaying: q,
                            isCurrent: J,
                            togglePlay: tt,
                        } = (0, A.D)({ playContextParams: { contextData: { type: c.K.Album, meta: { id: r.id }, from: W }, loadContextMeta: !0 } }),
                        te = (0, p.c)({ album: r, callback: Y }),
                        tr = (0, p.c)({ album: r, callback: tt }),
                        ti = (0, d.c)((t) => {
                            (null == X || X(), G({ to: s.AppScreen.AlbumScreen }), te(t));
                        }),
                        ta = (0, d.c)(() => {
                            if (!K()) {
                                if (Z) return void Q.open();
                                (z || q || (F(!0), null == V || V()), tr(), $(!q));
                            }
                        }),
                        to = (0, d.c)((t) => {
                            ((0, u.P)(t, S().ripple), ti(t));
                        }),
                        tn = (0, d.c)((t) => {
                            (t.stopPropagation(), ti(t));
                        }),
                        ts = (0, n.useCallback)(
                            (t) =>
                                (0, i.jsx)(I.q, {
                                    isAvailable: r.isAvailable,
                                    isDisliked: !1,
                                    coverUri: r.coverUri,
                                    title: r.title,
                                    className: (0, a.$)(S().playButtonCell, g),
                                    alt: ''.concat(P, ' ').concat(r.title),
                                    radius: 'xs',
                                    ...t,
                                }),
                            [r.coverUri, r.isAvailable, r.title, g, P],
                        ),
                        tl = null == ts ? void 0 : ts({ onPlayButtonClick: ta, isPlaying: q, isCurrent: J, playButtonIconSize: D }),
                        tc = (0, n.useMemo)(
                            () =>
                                r.url && r.isAvailable
                                    ? (0, i.jsx)(j.N, { className: (0, a.$)(S().text, S().titleLink), href: r.url, onClick: tn, children: r.title })
                                    : (0, i.jsx)(m.HL, { className: (0, a.$)(S().text, S().titleText), size: 'm', variant: 'div', type: 'text', children: r.title }),
                            [r.isAvailable, r.title, r.url, tn],
                        ),
                        td = (0, n.useCallback)(
                            (t, e) => {
                                var a;
                                return (null == (a = r.artists) ? void 0 : a.length)
                                    ? (0, i.jsx)(C.i, { linkClassName: t, captionClassName: e, artists: r.artists, lineClamp: 1, withLink: r.isAvailable })
                                    : null;
                            },
                            [r.artists, r.isAvailable],
                        ),
                        t_ = (0, _.L)(() => [r.artistNames, r.title, r.version].filter(Boolean).join(' '));
                    return (0, i.jsxs)(O.C, {
                        ref: M,
                        'data-intersection-property-id': H,
                        className: (0, a.$)(S().root, { [S().root_disabled]: !r.isAvailable }, e),
                        'aria-label': t_,
                        onClick: to,
                        'data-test-id': l.Kq.album.HORIZONTAL_ALBUM_CARD,
                        children: [
                            tl,
                            (0, i.jsx)(L.r, {
                                isDisabled: !r.isAvailable,
                                version: r.version,
                                title: tc,
                                artistsComponent: td,
                                getDescriptionTexts: r.getDescriptionTexts,
                                explicitMarkVariant: r.explicitDisclaimer,
                                likesCount: r.isNonMusic ? r.actualLikesCount : void 0,
                                isLiked: r.isNonMusic ? r.isLiked : void 0,
                                releaseYear: r.isNonMusic && w ? r.year : void 0,
                                description: B,
                            }),
                            (0, i.jsx)(U, { className: S().controlsBar, album: r, likeIconSize: R }),
                        ],
                    });
                });
        },
        94218: (t, e, r) => {
            'use strict';
            r.d(e, { H: () => m });
            var i = r(32290),
                a = r(21916),
                o = r(39407),
                n = r(21732),
                s = r(91027),
                l = r(63423),
                c = r(71926),
                d = r(78648),
                _ = r(70204),
                u = r(34186);
            let m = (t) => {
                let { size: e = 'm', variant: r = 'default', color: m = 'primary', withRipple: p = !0, buttonText: h, isBlock: C, key: v, className: x } = t,
                    f = (0, a.useRouter)(),
                    N = (0, u.N)().get(_.QG),
                    E = (0, s.c)(() => {
                        N.authorizationUrl && ((0, d.uV)({ stage: 'attempt-start', trigger: 'user' }), f.push(N.authorizationUrl));
                    });
                return (0, i.jsx)(
                    l.$,
                    {
                        onClick: E,
                        className: x,
                        isBlock: C,
                        color: m,
                        variant: r,
                        size: e,
                        radius: 'xxxl',
                        withRipple: p,
                        'data-test-id': n.S7.UNAUTHORIZED_BUTTON,
                        children: h || (0, i.jsx)(c.HL, { variant: 'div', size: 'l', lineClamp: 1, children: (0, i.jsx)(o.A, { id: 'authorization.enter-button' }) }),
                    },
                    v,
                );
            };
        },
        95481: (t, e, r) => {
            'use strict';
            r.d(e, { f: () => x });
            var i = r(55178),
                a = r(17811),
                o = r(92146),
                n = r(74416),
                s = r(6752),
                l = r(62376),
                c = r(1677),
                d = r(48922),
                _ = r(84782),
                u = r(30915),
                m = r(18746),
                p = r(37240),
                h = r(51012),
                C = r(47498);
            let v = [
                    d._Q.HOME,
                    d._Q.LANDING,
                    d._Q.NON_MUSIC,
                    d._Q.OWN_COLLECTION,
                    d._Q.SEARCH,
                    d._Q.ARTIST,
                    d._Q.CONCERTS,
                    d._Q.CONCERT,
                    d._Q.ALBUM,
                    d._Q.PLAYLIST,
                    d._Q.SLIDES_SCREEN,
                    d._Q.PROMOLANDING_ALBUM,
                    d._Q.WAVE_LANDING_SCREEN,
                ],
                x = () => {
                    let t = (0, i.useRef)(!1),
                        e = (0, n.st)(),
                        r = (0, l.U)(),
                        { hash: x } = (0, n.gf)(),
                        { pageId: f } = (0, p.$)(),
                        { tabId: N, tabPos: E, isTabSelectedByDefault: T } = (0, C.R)(),
                        { offsetBlockPosY: b } = (0, u.u)(),
                        { blockId: y, blockType: A, blockPosX: k, blockPosY: g, mainObjectType: S, mainObjectId: L, objectsCount: O } = (0, _.N)(),
                        { filterKey: j, filterValue: I, filterPos: D } = (0, m.G)(),
                        { skeleton: R } = (0, h.b)(),
                        w = (0, s.L)(() => (void 0 !== b && void 0 !== g ? b + g : g));
                    return (0, i.useCallback)(() => {
                        if (!e || !f || !d.xK.includes(f) || !v.includes(f) || t.current) return;
                        let i = { hash: x, pageId: c.F[f], entityType: A, entityId: y, entityPosX: k, entityPosY: w, objectsCount: O };
                        (void 0 !== j && ((i.filterKey = j), (i.filterValue = I), (i.filterPos = D)),
                            d.qG.includes(f) && ((i.tabId = N), (i.tabPos = E), (i.isTabSelectedByDefault = T)),
                            R && (i.skeletonId = R),
                            L && S && ((i.mainObjectType = S), (i.mainObjectId = L)));
                        let n = (0, a.F)({ params: i, logger: r, context: 'useSendEventOnBlockLoaded' });
                        n && ((0, o.uY)(e.evgenInstance, n), (t.current = !0));
                    }, [e, f, x, A, y, k, w, j, I, D, O, R, L, S, r, N, E, T]);
                };
        },
    },
]);
