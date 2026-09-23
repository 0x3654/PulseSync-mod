(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [6413],
    {
        3377: (e, t, i) => {
            'use strict';
            i.d(t, { WithAuth: () => p });
            var r = i(32290),
                s = i(96103),
                a = i(21916),
                o = i(63618),
                n = i(39407),
                l = i(71926),
                c = i(94218),
                d = i(55556),
                u = i.n(d);
            let m = (0, s.PA)(() =>
                (0, r.jsxs)('div', {
                    className: u().root,
                    children: [
                        (0, r.jsx)(l.DZ, {
                            className: (0, o.$)(u().title, u().important),
                            variant: 'h3',
                            size: 'xs',
                            children: (0, r.jsx)(n.A, { id: 'authorization.enter-title' }),
                        }),
                        (0, r.jsx)(l.HL, {
                            className: (0, o.$)(u().text, u().important),
                            variant: 'span',
                            type: 'text',
                            size: 'l',
                            weight: 'normal',
                            children: (0, r.jsx)(n.A, { id: 'authorization.enter-text' }),
                        }),
                        (0, r.jsx)(c.H, { size: 'l', className: u().button }),
                    ],
                }),
            );
            var _ = i(20472),
                h = i(57594);
            let p = (0, s.PA)((e) => {
                let { children: t, withRedirectToMainPage: i } = e,
                    { user: s } = (0, h.g)();
                return s.isAuthorized ? t : (i && (0, a.redirect)(_.Z.main.href), (0, r.jsx)(m, {}));
            });
        },
        4154: (e, t, i) => {
            (Promise.resolve().then(i.bind(i, 3377)), Promise.resolve().then(i.bind(i, 16890)));
        },
        6726: (e) => {
            e.exports = {
                root: 'CollectionKidsPage_root__nfE01',
                content: 'CollectionKidsPage_content__hVB40',
                carouselBlocks: 'CollectionKidsPage_carouselBlocks__q7f0T',
                tracksCarouselItem: 'CollectionKidsPage_tracksCarouselItem__8WvD0',
                important: 'CollectionKidsPage_important__GkZJX',
                carouselBlock: 'CollectionKidsPage_carouselBlock___6XRJ',
                carouselBlockHeader: 'CollectionKidsPage_carouselBlockHeader__fqs_v',
                emptyBlock: 'CollectionKidsPage_emptyBlock__dc50I',
                emptyBlockIcon: 'CollectionKidsPage_emptyBlockIcon__eVAMs',
                emptyBlockTitle: 'CollectionKidsPage_emptyBlockTitle__TYUpU',
                footer: 'CollectionKidsPage_footer__wEREs',
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
        11675: (e) => {
            e.exports = {
                root: 'PlaylistCard_root__i3pR4',
                controls: 'PlaylistCard_controls__Ej8Rz',
                cover: 'PlaylistCard_cover__tpK5L',
                coverBlock: 'PlaylistCard_coverBlock__1slsN',
                image: 'PlaylistCard_image__Li6oy',
                titleLink: 'PlaylistCard_titleLink__H8qEc',
                artists: 'PlaylistCard_artists__HtVIF',
                artistLink: 'PlaylistCard_artistLink__jx3KB',
                playButton: 'PlaylistCard_playButton__eaduk',
                likeButton: 'PlaylistCard_likeButton__RYXJz',
                menuButton: 'PlaylistCard_menuButton__jFcWr',
                pinButton: 'PlaylistCard_pinButton__jhWnL',
                trailerButton: 'PlaylistCard_trailerButton__Qjg_U',
                control: 'PlaylistCard_control__73YUq',
            };
        },
        13931: (e, t, i) => {
            'use strict';
            i.d(t, { r: () => a });
            var r = i(55178),
                s = i(60900);
            let a = (e) => {
                let { formatMessage: t } = (0, s.A)();
                return (0, r.useMemo)(() => {
                    let i = '';
                    e.isLiked && !e.actualLikesCount
                        ? (i = t({ id: 'entity-names.has-your-like' }))
                        : 'number' == typeof e.actualLikesCount &&
                          (i =
                              e.actualLikesCount > 0
                                  ? t({ id: 'entity-names.likes-counter' }, { counter: e.actualLikesCount })
                                  : t({ id: 'entity-names.likes-counter-empty' }));
                    let r = t({ id: 'entity-names.playlist-name' }, { playlistName: e.title });
                    return ''.concat(r, ' ').concat(i);
                }, [t, e]);
            };
        },
        16890: (e, t, i) => {
            'use strict';
            i.d(t, { CollectionKidsPage: () => z });
            var r = i(32290),
                s = i(63618),
                a = i(96103),
                o = i(55178),
                n = i(60900),
                l = i(39407),
                c = i(21732),
                d = i(71483),
                u = i(96333),
                m = i(6752),
                _ = i(82586),
                h = i(46049),
                p = i(71926),
                v = i(64170),
                C = i(77435),
                x = i(7999),
                f = i(64538),
                k = i(94631),
                y = i(69951),
                N = i(48922),
                g = i(22714),
                j = i(72396),
                T = i(83808),
                b = i(83920),
                A = i(3796),
                L = i(20472),
                S = i(57594),
                E = i(98350),
                P = i(49518),
                O = i(97841),
                B = i(32468),
                I = i(74694),
                w = i(34223),
                R = i(6726),
                D = i.n(R);
            let z = (0, a.PA)(() => {
                let {
                        collection: { kids: e },
                    } = (0, S.g)(),
                    { contentScrollRef: t, setContentScrollRef: i } = (0, b.g)(),
                    a = (0, T.W)(),
                    { from: R } = (0, j.f)({ pageId: N._Q.COLLECTION_KIDS }),
                    { formatMessage: z } = (0, n.A)();
                ((0, o.useEffect)(
                    () => () => {
                        e.reset();
                    },
                    [e],
                ),
                    (0, A.J)(e.isResolved));
                let K = (0, m.L)(() =>
                    e.tracks.loadedItems.slice(0, 5).map((t, i) => {
                        let s = {
                            contextData: { type: d.K.Various, meta: { id: t.entityId }, from: R },
                            queueParams: { index: i },
                            loadContextMeta: !1,
                            entitiesData: e.tracks.sonataEntitiesData,
                        };
                        return t.type === u.S.MUSIC
                            ? (0, r.jsx)(y.K, { track: t, playContextParams: s }, i)
                            : (0, r.jsx)(k.K, { track: t, playContextParams: s, withPodcastName: t.isTrackPodcast }, i);
                    }),
                );
                if (e.isNeededToLoad) {
                    let t = [e.albums.getData({ pageSize: 8 }), e.playlists.getData({ pageSize: 8 }), e.tracks.getData({ pageSize: 5 })];
                    (0, o.use)(Promise.allSettled(t));
                }
                return e.isRejected
                    ? (0, r.jsx)(v.SomethingWentWrong, {})
                    : (0, r.jsx)(g.n, {
                          pageId: N._Q.COLLECTION_KIDS,
                          children: (0, r.jsxs)(x.h, {
                              scrollElement: t,
                              outerTitle: z({ id: 'kids.for-kids' }),
                              children: [
                                  (0, r.jsx)(I.Y, {
                                      variant: I.V.TEXT,
                                      withForwardControl: !1,
                                      withBackwardControl: a.canBack,
                                      children: (0, r.jsx)(p.DZ, { variant: 'h2', weight: 'bold', size: 'xl', children: (0, r.jsx)(l.A, { id: 'kids.for-kids' }) }),
                                  }),
                                  (0, r.jsxs)(h.N, {
                                      className: D().root,
                                      containerClassName: D().content,
                                      ref: i,
                                      'data-test-id': c.Xk.collection.COLLECTION_KIDS_PAGE,
                                      children: [
                                          !e.shouldShowContent &&
                                              (0, r.jsxs)('div', {
                                                  className: D().emptyBlock,
                                                  children: [
                                                      (0, r.jsx)(_.I, { className: D().emptyBlockIcon, variant: 'album' }),
                                                      (0, r.jsx)(p.DZ, {
                                                          className: D().emptyBlockTitle,
                                                          variant: 'h3',
                                                          size: 'xs',
                                                          children: (0, r.jsx)(l.A, { id: 'kids.empty-collection-text' }),
                                                      }),
                                                  ],
                                              }),
                                          e.tracks.shouldShowContent &&
                                              (0, r.jsx)(P.$, {
                                                  blockHeaderClassName: (0, s.$)(D().carouselBlockHeader, D().carouselBlock),
                                                  carouselItemClassName: (0, s.$)(D().tracksCarouselItem, D().important),
                                                  blockHeaderTitle: z({ id: 'kids.favourite-tracks-and-episodes' }),
                                                  shimmer: (0, r.jsx)(w.D, { variant: E.X.PLAYLIST, isActive: !0 }),
                                                  maxColumnsCount: P.D.ONE,
                                                  isShimmerVisible: e.tracks.isShimmerVisible,
                                                  isShimmerActive: !0,
                                                  itemsCountPerColumn: 5,
                                                  viewAllActionLink: L.Z.collectionKidsTracks.href,
                                                  children: K,
                                              }),
                                          e.albums.shouldShowContent &&
                                              (0, r.jsx)(C.p, {
                                                  headerClassName: (0, s.$)(D().carouselBlock, D().carouselBlockHeader),
                                                  containerClassName: D().carouselBlock,
                                                  title: z({ id: 'kids.albums-and-podcasts' }),
                                                  albums: e.albums.loadedItems,
                                                  headingVariant: 'h2',
                                                  isShimmerVisible: e.albums.isShimmerVisible,
                                                  isShimmerActive: !0,
                                                  viewAllActionLink: L.Z.collectionKidsAlbums.href,
                                              }),
                                          e.playlists.shouldShowContent &&
                                              (0, r.jsx)(f.E, {
                                                  headerClassName: (0, s.$)(D().carouselBlock, D().carouselBlockHeader),
                                                  containerClassName: D().carouselBlock,
                                                  title: z({ id: 'entity-names.artist-playlist' }),
                                                  playlists: e.playlists.loadedItems,
                                                  headingVariant: 'h2',
                                                  isShimmerVisible: e.playlists.isShimmerVisible,
                                                  isShimmerActive: !0,
                                                  viewAllActionLink: L.Z.collectionKidsPlaylists.href,
                                              }),
                                          (0, r.jsx)(B.A, { children: (0, r.jsx)(O.w, { className: D().footer }) }),
                                      ],
                                  }),
                              ],
                          }),
                      });
            });
        },
        19620: (e, t, i) => {
            'use strict';
            i.d(t, { T: () => f });
            var r = i(32290),
                s = i(63618),
                a = i(55178),
                o = i(99923),
                n = i(21732),
                l = i(82586),
                c = i(50162),
                d = i(86269),
                u = i(79856),
                m = i(71926),
                _ = i(95481),
                h = i(47745),
                p = i(61258),
                v = i(69e3),
                C = i.n(v);
            let x = (e) => {
                    let {
                            className: t,
                            coverUrl: i,
                            labeledForId: v,
                            subTitle: x,
                            title: f,
                            description: k,
                            viewAllActionLink: y,
                            controls: N,
                            titleSize: g = 'm',
                            coverBackgroundColor: j,
                            coverRadius: T = 's',
                            titleClassName: b,
                            titleLineClamp: A,
                            fallbackIconVariant: L,
                            available: S = !0,
                            onViewAllAction: E,
                            titleChildren: P,
                            children: O,
                            headingRef: B,
                            coverContainerClassName: I,
                            headingVariant: w = 'h3',
                            withDescriptionWidthLimit: R = !0,
                            isShimmerVisible: D,
                            isShimmerActive: z,
                            withCover: K,
                            withDescription: U,
                            forwardRef: W,
                            shimmerCoverClassName: H,
                            shouldSendAnalyticsOnLoaded: M,
                            ...F
                        } = e,
                        $ = (0, _.f)(),
                        V = (0, a.useRef)(null),
                        X = i || K,
                        Y = k || U,
                        Q = (0, a.useCallback)(() => {
                            V.current && 'focus' in V.current && V.current.focus();
                        }, []),
                        Z = (0, h.N)(),
                        q = (0, a.useCallback)(() => {
                            E ? E() : Z({ to: o.AppScreen.Link });
                        }, [Z, E]);
                    (0, a.useEffect)(() => {
                        M && $();
                    }, [M, $]);
                    let G = (0, a.useMemo)(
                            () =>
                                f && y && S
                                    ? (0, r.jsxs)(p.N, {
                                          className: C().title,
                                          containerClassName: C().linkContainer,
                                          textClassName: C().linkText,
                                          icon: (0, r.jsx)(l.I, { className: C().titleIcon, size: 'xs', variant: 'arrowRight' }),
                                          iconPosition: 'right',
                                          href: y,
                                          onClick: q,
                                          'data-test-id': n.S7.BLOCK_HEADER_TITLE,
                                          children: [
                                              (0, r.jsx)(m.DZ, {
                                                  id: v,
                                                  className: (0, s.$)(C().heading, b),
                                                  variant: w,
                                                  size: g,
                                                  weight: 'bold',
                                                  lineClamp: A,
                                                  ref: B,
                                                  children: f,
                                              }),
                                              P,
                                          ],
                                      })
                                    : (0, r.jsxs)('div', {
                                          className: C().title,
                                          children: [
                                              (0, r.jsx)(m.DZ, {
                                                  id: v,
                                                  className: (0, s.$)(C().heading, b, { [C().heading_notAvailable]: !S }),
                                                  variant: w,
                                                  size: g,
                                                  weight: 'bold',
                                                  lineClamp: A,
                                                  ref: B,
                                                  'data-test-id': n.S7.BLOCK_HEADER_TITLE,
                                                  children: f,
                                              }),
                                              P,
                                          ],
                                      }),
                            [S, q, B, w, v, f, b, A, g, y, P],
                        ),
                        J = (0, a.useMemo)(() => (U && D ? (0, r.jsx)(u.W, { isActive: z, className: C().shimmerDescription }) : k), [U, D, k, z]),
                        ee = (0, a.useMemo)(
                            () =>
                                K && D
                                    ? (0, r.jsx)(u.W, { isActive: z, className: (0, s.$)(C().shimmerCover, H), radius: 's' })
                                    : (0, r.jsx)(c._V, {
                                          src: i,
                                          fallbackIconVariant: L,
                                          style: { backgroundColor: j },
                                          className: C().cover,
                                          ref: V,
                                          onClick: Q,
                                          fit: 'cover',
                                          withAvatarReplace: !0,
                                          fallbackIconSize: 's',
                                          'aria-hidden': !0,
                                          'data-test-id': n.S7.BLOCK_HEADER_COVER,
                                      }),
                            [j, i, L, Q, z, D, H, K],
                        );
                    return (0, r.jsxs)('div', {
                        className: (0, s.$)(C().root, t),
                        ref: W,
                        ...F,
                        'data-test-id': n.S7.BLOCK_HEADER,
                        children: [
                            (0, r.jsxs)('div', {
                                className: C().start,
                                children: [
                                    X && (0, r.jsx)(d.t, { radius: T, className: (0, s.$)(C().coverContainer, I), children: ee }),
                                    (0, r.jsxs)('div', {
                                        className: C().textContainer,
                                        children: [
                                            x,
                                            G,
                                            Y &&
                                                (0, r.jsx)(m.HL, {
                                                    id: ''.concat(v, '-description'),
                                                    variant: 'span',
                                                    type: 'text',
                                                    size: 'm',
                                                    weight: 'medium',
                                                    lineClamp: R ? 2 : void 0,
                                                    className: (0, s.$)(C().description, { [C().description_widthLimit]: R }),
                                                    'data-test-id': n.S7.BLOCK_HEADER_DESCRIPTION,
                                                    children: J,
                                                }),
                                        ],
                                    }),
                                ],
                            }),
                            N || O,
                        ],
                    });
                },
                f = (0, a.forwardRef)((e, t) => (0, r.jsx)(x, { forwardRef: t, ...e }));
        },
        23338: (e) => {
            e.exports = {
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
        26042: (e, t, i) => {
            'use strict';
            i.d(t, { B: () => o });
            var r = i(32290),
                s = i(55178),
                a = i(10936);
            let o = (e) => {
                let { objectId: t, objectPosX: i, objectPosY: o, objectPos: n, objectType: l, objectsCount: c, mainObjectId: d, mainObjectType: u, children: m } = e,
                    _ = (0, s.useMemo)(
                        () => ({ objectId: t, objectPosX: i, objectPosY: o, objectPos: n, objectType: l, objectsCount: c, mainObjectId: d, mainObjectType: u }),
                        [t, i, o, n, l, c, d, u],
                    );
                return (0, r.jsx)(a.l.Provider, { value: _, children: m });
            };
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
        30564: (e, t, i) => {
            'use strict';
            i.d(t, { k: () => a });
            var r = i(32290),
                s = i(89020);
            let a = function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                return Array.from({ length: 9 }, (t, i) => (0, r.jsx)(s.V, { ...e }, i));
            };
        },
        33696: (e) => {
            e.exports = {
                root: 'CarouselBlock_root__aeOla',
                controls: 'CarouselBlock_controls__vsHCR',
                shimmerTitle: 'CarouselBlock_shimmerTitle__ZXIRx',
                item: 'CarouselBlock_item__DatZ2',
                important: 'CarouselBlock_important__AARmP',
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
        42464: (e, t, i) => {
            'use strict';
            i.d(t, { N: () => r });
            let r = (e) => 'object' == typeof e && null !== e && 'request' in e && null !== e.request;
        },
        45807: (e, t, i) => {
            'use strict';
            i.d(t, { Y: () => d });
            var r,
                s = i(95716),
                a = i(55178),
                o = {
                    352: (e) => {
                        e.exports = s;
                    },
                    810: (e) => {
                        e.exports = r || (r = i.t(a, 2));
                    },
                },
                n = {};
            function l(e) {
                var t = n[e];
                if (void 0 !== t) return t.exports;
                var i = (n[e] = { exports: {} });
                return (o[e](i, i.exports, l), i.exports);
            }
            var c = {};
            ((() => {
                (Object.defineProperty(c, 'X', { value: !0 }), (c.l = void 0));
                let e = l(810),
                    t = l(352);
                c.l = (i) => {
                    let [r, s] = (0, e.useState)(!0),
                        [a, o] = (0, e.useState)(!0),
                        n = () => {
                            let e = null == i ? void 0 : i.current;
                            e && (s(0 === e.scrollLeft), o(e.scrollWidth - e.scrollLeft <= e.offsetWidth + 10));
                        };
                    ((0, e.useEffect)(() => {
                        n();
                    }, [i, n]),
                        (0, e.useEffect)(() => {
                            let e = null == i ? void 0 : i.current;
                            return (
                                null == e || e.addEventListener('scroll', n),
                                window.addEventListener('resize', n),
                                () => {
                                    (null == e || e.removeEventListener('scroll', n), window.removeEventListener('resize', n));
                                }
                            );
                        }, [i, n]));
                    let l = (0, e.useMemo)(
                        () =>
                            (0, t.throttle)(
                                () => {
                                    i && i.current && (i.current.scrollLeft += i.current.offsetWidth / 2);
                                },
                                420,
                                { trailing: !1 },
                            ),
                        [i],
                    );
                    return {
                        swipeBackward: (0, e.useMemo)(
                            () =>
                                (0, t.throttle)(
                                    () => {
                                        i && i.current && (i.current.scrollLeft -= i.current.offsetWidth / 2);
                                    },
                                    420,
                                    { trailing: !1 },
                                ),
                            [i],
                        ),
                        swipeForward: l,
                        shouldBackwardButtonBeDisabled: r,
                        shouldForwardButtonBeDisabled: a,
                        shouldHideControls: r && a,
                    };
                };
            })(),
                c.X);
            var d = c.l;
        },
        49518: (e, t, i) => {
            'use strict';
            i.d(t, { $: () => f, D: () => C });
            var r = i(32290),
                s = i(63618),
                a = i(66988),
                o = i(55178),
                n = i(85472),
                l = i(99923),
                c = i(21732),
                d = i(75245),
                u = i(84782),
                m = i(26042),
                _ = i(19620),
                h = i(49522),
                p = i(23338),
                v = i.n(p),
                C = (function (e) {
                    return ((e.ONE = 'one'), (e.TWO = 'two'), e);
                })({});
            let x = (e) => {
                    let {
                            className: t,
                            forwardRef: i,
                            isShimmerVisible: p,
                            isColumnsShimmerVisible: C,
                            isHeaderWithoutControls: x,
                            maxColumnsCount: f,
                            carouselItemClassName: k,
                            carouselClassName: y,
                            children: N,
                            itemsCountPerColumn: g,
                            shimmer: j,
                            viewAllActionLink: T,
                            blockHeaderClassName: b,
                            additionalControl: A,
                            blockHeaderDescription: L,
                            blockHeaderTitle: S,
                            blockHeaderCoverUrl: E,
                            withBlockHeaderDescription: P,
                            withBlockHeaderCover: O,
                            blockHeaderHeadingVariant: B,
                            isShimmerActive: I,
                            shouldResetCarouselScroll: w,
                            beforeCarousel: R,
                            ...D
                        } = e,
                        { objectsCount: z } = (0, u.N)(),
                        [K, U] = (0, o.useState)(),
                        W = (0, o.useId)(),
                        H = (0, o.useRef)(null),
                        M = 'two' === f,
                        F = 'string' == typeof T ? String(T) : void 0,
                        $ = null != C ? C : p,
                        V = (0, o.useCallback)(
                            (e) => {
                                let t = (0, a.A)(e, g).slice(0, M ? 2 : 1);
                                return (
                                    1 === t.length ? U('one') : U('two'),
                                    t.map((e, t) => (0, r.jsx)('div', { className: v().column, 'data-test-id': c.S7.CAROUSEL_WITH_COLUMNS_BLOCK_COLUMN, children: e }, t))
                                );
                            },
                            [g, M],
                        ),
                        X = (0, o.useMemo)(() => {
                            if ($) return V(Array.from({ length: 2 * g }, (e, t) => (0, o.cloneElement)(j, { key: t })));
                            return V(N);
                        }, [N, V, $, g, j]),
                        Y = (0, o.useMemo)(
                            () =>
                                x
                                    ? null
                                    : (0, r.jsxs)('div', {
                                          className: v().controlsContainer,
                                          children: [A, (0, r.jsx)(h.X, { carouselRef: H, className: v().controls, backwardControlClassName: v().backwardControl })],
                                      }),
                            [A, x],
                        );
                    return (
                        (0, o.useEffect)(() => {
                            H.current && w && H.current.scrollTo(0, 0);
                        }, [w]),
                        (0, r.jsxs)('section', {
                            ref: i,
                            className: (0, s.$)(v().root, t),
                            ...(0, n.getDataAttrFromProps)(D),
                            children: [
                                (0, r.jsx)(m.B, {
                                    objectType: l.DomainObjectType.Shortcut,
                                    objectId: F,
                                    objectPosX: 0,
                                    objectPosY: 0,
                                    objectsCount: null != z ? z : 0,
                                    children: (0, r.jsx)(_.T, {
                                        coverUrl: E,
                                        title: S,
                                        description: L,
                                        className: b,
                                        labeledForId: W,
                                        viewAllActionLink: T,
                                        controls: Y,
                                        isShimmerVisible: p,
                                        isShimmerActive: I,
                                        withDescription: P,
                                        withCover: O,
                                        headingVariant: B,
                                    }),
                                }),
                                R,
                                (0, r.jsx)(d.F, {
                                    itemClassName: (0, s.$)(v().item, v()['item_columns_'.concat($ && M ? 'two' : K)], k),
                                    className: y,
                                    ref: H,
                                    'aria-labelledby': W,
                                    'data-test-id': c.S7.CAROUSEL_WITH_COLUMNS_BLOCK_CAROUSEL,
                                    children: X,
                                }),
                            ],
                        })
                    );
                },
                f = (0, o.forwardRef)((e, t) => (0, r.jsx)(x, { forwardRef: t, ...e }));
        },
        49522: (e, t, i) => {
            'use strict';
            i.d(t, { X: () => m });
            var r = i(32290),
                s = i(63618),
                a = i(55178),
                o = i(21732),
                n = i(45807),
                l = i(63423),
                c = i(82586),
                d = i(60178),
                u = i.n(d);
            let m = (e) => {
                let {
                        carouselRef: t,
                        backwardControlClassName: i,
                        forwardControlClassName: d,
                        className: m,
                        withSecondaryColor: _,
                        buttonSize: h = 'xxxs',
                        buttonVariant: p = 'outline',
                    } = e,
                    { swipeBackward: v, swipeForward: C, shouldBackwardButtonBeDisabled: x, shouldForwardButtonBeDisabled: f, shouldHideControls: k } = (0, n.Y)(t),
                    y = (0, a.useCallback)(
                        (e) => {
                            (v(), e.stopPropagation());
                        },
                        [v],
                    ),
                    N = (0, a.useCallback)(
                        (e) => {
                            (C(), e.stopPropagation());
                        },
                        [C],
                    );
                return (0, r.jsxs)('div', {
                    className: (0, s.$)(u().root, m),
                    'data-test-id': o.S7.CAROUSEL_CONTROLS,
                    children: [
                        (0, r.jsx)(l.$, {
                            tabIndex: -1,
                            'aria-hidden': !0,
                            className: (0, s.$)(u().control, i, { [u().control_hidden]: k, [u().control_withSecondaryColor]: _ }),
                            onClick: y,
                            size: h,
                            radius: 'round',
                            variant: p,
                            withRipple: !1,
                            icon: (0, r.jsx)(c.I, { size: 'xxs', variant: 'arrowLeft' }),
                            disabled: x,
                            'data-test-id': o.S7.CAROUSEL_CONTROLS_BACKWARD_BUTTON,
                        }),
                        (0, r.jsx)(l.$, {
                            tabIndex: -1,
                            'aria-hidden': !0,
                            className: (0, s.$)(u().control, d, { [u().control_hidden]: k, [u().control_withSecondaryColor]: _ }),
                            onClick: N,
                            size: h,
                            radius: 'round',
                            variant: p,
                            withRipple: !1,
                            icon: (0, r.jsx)(c.I, { size: 'xxs', variant: 'arrowRight' }),
                            disabled: f,
                            'data-test-id': o.S7.CAROUSEL_CONTROLS_FORWARD_BUTTON,
                        }),
                    ],
                });
            };
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
        55556: (e) => {
            e.exports = {
                root: 'Login_root__VtFg_',
                title: 'Login_title__dqQz1',
                important: 'Login_important__Z8S9I',
                text: 'Login_text__1uju5',
                button: 'Login_button__ZYvZY',
            };
        },
        60178: (e) => {
            e.exports = {
                root: 'CarouselControls_root__E_hwc',
                control: 'CarouselControls_control__L8t4i',
                control_hidden: 'CarouselControls_control_hidden__pLrn6',
                control_withSecondaryColor: 'CarouselControls_control_withSecondaryColor__KqSEN',
            };
        },
        63038: (e, t, i) => {
            'use strict';
            i.d(t, { B: () => r });
            let r = '{tld}';
        },
        64170: (e, t, i) => {
            'use strict';
            i.d(t, { SomethingWentWrong: () => g });
            var r = i(32290),
                s = i(63618),
                a = i(96103),
                o = i(55178),
                n = i(60900),
                l = i(39407),
                c = i(63423),
                d = i(82586),
                u = i(71926),
                m = i(17811),
                _ = i(99923),
                h = i(90153),
                p = i(74416),
                v = i(62376),
                C = i(37240),
                x = i(83920),
                f = i(20472),
                k = i(12894),
                y = i(30310),
                N = i.n(y);
            let g = (0, a.PA)((e) => {
                let { className: t, withBackwardControl: i = !0 } = e,
                    { formatMessage: a } = (0, n.A)(),
                    y = a({ id: 'error-messages.something-went-wrong' });
                !(function (e) {
                    let t = (0, p.st)(),
                        { hash: i } = (0, p.gf)(),
                        { pageId: r } = (0, C.$)(),
                        s = (0, v.U)();
                    (0, o.useEffect)(() => {
                        if (!t || !i || !r) return;
                        let a = (0, m.F)({
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
                            logger: s,
                            context: 'useSendEventOnSomethingWentWrongShowed',
                        });
                        a && (0, h.z5)(t.evgenInstance, a);
                    }, [t, e, i, r, s]);
                })(y);
                let { sendRefreshEvent: g } = (function () {
                        let e = (0, p.st)(),
                            { hash: t } = (0, p.gf)(),
                            { pageId: i } = (0, C.$)(),
                            r = (0, v.U)();
                        return {
                            sendRefreshEvent: (0, o.useCallback)(() => {
                                if (!e || !t || !i) return;
                                let s = (0, m.F)({
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
                                s && (0, h.bv)(e.evgenInstance, s);
                            }, [e, t, i, r]),
                        };
                    })(),
                    j = (0, o.useCallback)(() => {
                        (g(), (window.location.href = f.Z.main.href));
                    }, [g]),
                    { contentRef: T } = (0, x.g)();
                return (0, r.jsxs)('div', {
                    className: (0, s.$)(N().root, t),
                    children: [
                        i &&
                            (0, r.jsx)(k.L, { withBackwardFallback: '/', className: (0, s.$)(N().navigation, { [N().navigation_desktop]: !T }), withForwardControl: !1 }),
                        (0, r.jsxs)('div', {
                            className: (0, s.$)(N().content, { [N().content_shrink]: !i }),
                            children: [
                                (0, r.jsx)(d.I, { className: N().icon, variant: 'attention', size: 'xxl' }),
                                (0, r.jsx)(u.DZ, { className: (0, s.$)(N().title, N().important), variant: 'h3', size: 'xs', children: y }),
                                (0, r.jsxs)(u.HL, {
                                    className: (0, s.$)(N().text, N().important),
                                    variant: 'span',
                                    type: 'text',
                                    size: 'l',
                                    weight: 'normal',
                                    children: [!1, (0, r.jsx)(l.A, { id: 'page-error.try-to-restart-app' })],
                                }),
                                (0, r.jsx)(c.$, {
                                    onClick: j,
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
        64538: (e, t, i) => {
            'use strict';
            i.d(t, { E: () => u });
            var r = i(32290),
                s = i(55178),
                a = i(99923),
                o = i(95481),
                n = i(26042),
                l = i(98148),
                c = i(83460);
            let d = (e) => {
                    let {
                            forwardRef: t,
                            isShimmerVisible: i,
                            isShimmerActive: d,
                            title: u,
                            description: m,
                            playlists: _,
                            containerClassName: h,
                            className: p,
                            headerClassName: v,
                            viewAllActionLink: C,
                            headingVariant: x,
                            shouldSendAnalyticsOnLoaded: f,
                            ...k
                        } = e,
                        y = (0, o.f)();
                    return (
                        (0, s.useEffect)(() => {
                            f && !i && y();
                        }, [i, y, f]),
                        (0, r.jsx)(l.O, {
                            isShimmerVisible: i,
                            isShimmerActive: d,
                            className: p,
                            headerClassName: v,
                            containerClassName: h,
                            ref: t,
                            title: u,
                            description: m,
                            viewAllActionLink: C,
                            headingVariant: x,
                            ...k,
                            children:
                                null == _
                                    ? void 0
                                    : _.map((e, t) =>
                                          (0, r.jsx)(
                                              n.B,
                                              {
                                                  objectType: a.DomainObjectType.Playlist,
                                                  objectId: e.id,
                                                  objectPosX: t + 1,
                                                  objectPosY: 1,
                                                  objectsCount: _.length,
                                                  children: (0, r.jsx)(c.B, { playlist: e, contentLinesCount: 3 }),
                                              },
                                              e.key,
                                          ),
                                      ),
                        })
                    );
                },
                u = (0, s.forwardRef)((e, t) => (0, r.jsx)(d, { forwardRef: t, ...e }));
        },
        68912: (e, t, i) => {
            'use strict';
            i.d(t, { j: () => T });
            var r = i(32290),
                s = i(63618),
                a = i(96103),
                o = i(21916),
                n = i(55178),
                l = i(60900),
                c = i(39407),
                d = i(21732),
                u = i(70280),
                m = i(71926),
                _ = i(41677),
                h = i(28999),
                p = i(57594),
                v = i(53514),
                C = i(85017),
                x = i(13798),
                f = i(61258),
                k = i(25649),
                y = i(24760),
                N = i(84141),
                g = i(5856),
                j = i.n(g);
            let T = (0, a.PA)((e) => {
                let {
                        className: t,
                        titleContainerClassName: i,
                        track: a,
                        albumArtists: g,
                        withExplicitMark: T = !0,
                        withSecondaryColor: b,
                        captionSize: A = 'm',
                        explicitSize: L = 'xxxs',
                        withAllArtistsTitle: S,
                        textClassName: E,
                        artistsClassName: P,
                        ignoreDislikedStyles: O,
                        withCustomTooltip: B = !0,
                        hasLineClamp: I = !0,
                        withSavingQueryParams: w,
                        beforeTitle: R,
                        withArtistLink: D = !0,
                        withTrackLink: z = !0,
                        afterTitle: K,
                        withContextMenuArtists: U,
                    } = e,
                    { formatMessage: W } = (0, l.A)(),
                    { sendNavigateSearchFeedback: H } = (0, h.z)(),
                    {
                        settings: { isMobile: M },
                    } = (0, p.g)(),
                    F = (0, y.$)({ withCustomTooltip: B }),
                    $ = (0, o.useSearchParams)(),
                    V = a.getUrl(w ? Object.fromEntries($) : void 0),
                    X = (0, n.useMemo)(() => {
                        var e;
                        let t = W({ id: 'entity-names.track-name' }, { trackName: a.title });
                        return ''.concat(t, ' ').concat(null != (e = a.version) ? e : '');
                    }, [W, a.title, a.version]),
                    Y = (0, N.O)({ track: a, onNavigate: H, withSavingQueryParams: w, entityType: C.n.TRACK }),
                    Q = (0, n.useCallback)(
                        (e) => {
                            let t = ''.concat(a.title, ' ').concat(!a.isRemoved && a.version ? a.version : '');
                            return (0, r.jsx)(u.m_, {
                                enabled: F && !M,
                                offsetOptions: 4,
                                placement: 'top',
                                text: t,
                                hoverSettings: v.V,
                                children: (0, r.jsx)(m.HL, {
                                    className: (0, s.$)(j().text, j().title),
                                    type: 'entity',
                                    size: A,
                                    weight: 'medium',
                                    variant: 'span',
                                    ...e,
                                    children: a.title,
                                }),
                            });
                        },
                        [M, F, A, a.isRemoved, a.title, a.version],
                    ),
                    Z = (0, n.useMemo)(() => {
                        let e = ''.concat(a.title, ' ').concat(!a.isRemoved && a.version ? a.version : '');
                        return a.isRemoved
                            ? (0, r.jsx)(u.m_, {
                                  enabled: F && !M,
                                  offsetOptions: 4,
                                  placement: 'top',
                                  text: W({ id: 'track-title.error-not-found' }),
                                  hoverSettings: v.V,
                                  children: (0, r.jsx)(m.HL, {
                                      className: (0, s.$)(j().text, j().title),
                                      type: 'entity',
                                      size: A,
                                      weight: 'medium',
                                      variant: 'span',
                                      title: F ? void 0 : W({ id: 'track-title.error-not-found' }),
                                      children: (0, r.jsx)(c.A, { id: 'track-title.error-not-found' }),
                                  }),
                              })
                            : a.hasTrackLink && z
                              ? (0, r.jsx)(f.N, {
                                    onClick: Y,
                                    className: j().albumLink,
                                    href: V,
                                    'aria-label': X,
                                    title: F ? void 0 : e,
                                    'data-test-id': d.Kq.track.TRACK_TITLE,
                                    children: Q(),
                                })
                              : Q({ 'data-test-id': d.Kq.track.TRACK_TITLE });
                    }, [M, a.title, a.isRemoved, a.version, a.hasTrackLink, Q, F, W, A, X, Y, V, z]),
                    q = (0, k.s)(a.artists, g),
                    G = (0, n.useMemo)(() => +!!I, [I]);
                return (0, r.jsx)('div', {
                    className: (0, s.$)(j().root, { [j().root_disabled]: !a.isAvailable, [j().root_disliked]: a.isDisliked && !O, [j().root_withSecondaryColor]: b }, t),
                    children: (0, r.jsxs)('div', {
                        className: j().metaContainer,
                        children: [
                            (0, r.jsxs)('div', {
                                className: (0, s.$)(j().titleContainer, { [j().titleContainer_withVersion]: a.version }, i),
                                children: [
                                    (0, r.jsxs)(m.HL, {
                                        className: (0, s.$)(j().text, E),
                                        type: 'entity',
                                        size: A,
                                        weight: 'medium',
                                        variant: 'div',
                                        lineClamp: 1,
                                        children: [
                                            R,
                                            Z,
                                            !a.isRemoved &&
                                                a.version &&
                                                (0, r.jsxs)(m.HL, {
                                                    className: (0, s.$)(j().text, j().version),
                                                    type: 'entity',
                                                    size: A,
                                                    weight: 'medium',
                                                    variant: 'span',
                                                    title: F ? void 0 : a.version,
                                                    'data-test-id': d.Kq.track.TRACK_VERSION,
                                                    children: ['\xa0', a.version],
                                                }),
                                        ],
                                    }),
                                    a.explicitDisclaimer &&
                                        T &&
                                        (0, r.jsx)(x.N, {
                                            containerClassName: j().explicitMarkContainer,
                                            getDescriptionTexts: a.getDescriptionTexts,
                                            size: L,
                                            variant: a.explicitDisclaimer,
                                            className: j().explicitMark,
                                            trackId: a.id,
                                        }),
                                    K,
                                ],
                            }),
                            q.length > 0 &&
                                (0, r.jsx)(_.i, {
                                    className: (0, s.$)(j().text, { [j().artists]: I }, P, E),
                                    withAllArtistsTitle: S,
                                    linkClassName: (0, s.$)(j().text, j().link),
                                    captionClassName: (0, s.$)(j().text, j().artistCaption),
                                    artists: q,
                                    withLink: a.isNonUserGenerated && D,
                                    lineClamp: G,
                                    captionSize: A,
                                    withContextMenu: U,
                                }),
                        ],
                    }),
                });
            });
        },
        69e3: (e) => {
            e.exports = {
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
        69951: (e, t, i) => {
            'use strict';
            i.d(t, { K: () => C });
            var r = i(32290),
                s = i(63618),
                a = i(96103),
                o = i(55178),
                n = i(21732),
                l = i(90169),
                c = i(57594),
                d = i(40229),
                u = i(43565),
                m = i(8677),
                _ = i(68912),
                h = i(92102),
                p = i(85673),
                v = i.n(p);
            let C = (0, a.PA)((e) => {
                var t;
                let {
                        track: i,
                        playContextParams: a,
                        className: p,
                        withDNDBlock: C,
                        isDragging: x,
                        draggingClassName: f,
                        ignoreDislikedStyles: k,
                        withSecondaryColor: y,
                        handleRemove: N,
                        withDislike: g,
                        withTrailer: j = !0,
                        beforeTitle: T,
                        removeButtonAriaLabel: b,
                        hideControls: A,
                    } = e,
                    L = (0, l.D)({ playContextParams: a, entityId: i.entityId }),
                    {
                        settings: { isMobile: S },
                    } = (0, c.g)(),
                    E = (0, o.useCallback)(
                        (e) =>
                            (0, r.jsx)(d.q, {
                                isAvailable: i.isAvailable,
                                isDisliked: i.isDisliked,
                                coverUri: i.coverUri,
                                title: i.title,
                                className: v().playButtonCell,
                                ignoreDislikedStyles: k,
                                radius: 'xs',
                                ...e,
                            }),
                        [k, i.coverUri, i.isAvailable, i.isDisliked, i.title],
                    );
                return (0, r.jsx)(h.C, {
                    className: (0, s.$)(p, { [v().trackWithDots]: C, [v().important]: C }),
                    track: i,
                    beforeBlock: C ? (0, r.jsx)(u.O, { className: (0, s.$)(v().dots, f), isDragging: x }) : void 0,
                    meta: (0, r.jsx)(_.j, { withArtistLink: !S, beforeTitle: T, track: i, ignoreDislikedStyles: k, withSecondaryColor: y }),
                    playButtonCellRender: E,
                    controls: (0, r.jsx)(m.Q, {
                        track: i,
                        className: v().controlsBarCell,
                        ignoreDislikedStyles: k,
                        utmLink: null == (t = a.contextData) ? void 0 : t.utmLink,
                        withSecondaryColor: y,
                        handleRemove: N,
                        withDislike: g,
                        withTrailer: j,
                        removeButtonAriaLabel: b,
                        hideControls: A,
                    }),
                    ...L,
                    'data-test-id': n.Kq.track.TRACK_PLAYLIST,
                });
            });
        },
        73141: (e, t, i) => {
            'use strict';
            i.d(t, { K: () => p });
            var r = i(32290),
                s = i(92708),
                a = i(55178),
                o = i(60900),
                n = i(63380),
                l = i(45477),
                c = i(75582),
                d = i(57594),
                u = i(90357),
                m = i(97647),
                _ = i(97755);
            let h = (e) => {
                    let { playlist: t, closeToast: i } = e;
                    return (0, r.jsx)(_.O, {
                        entityVariant: m.c.PLAYLIST,
                        entityUrl: t.url,
                        collectionUrl: '/collection',
                        entityTitle: t.title,
                        isLiked: t.isLiked,
                        closeToast: i,
                        coverUri: t.coverUri,
                    });
                },
                p = (e) => {
                    let { user: t } = (0, d.g)(),
                        { notify: i } = (0, c.l)(),
                        [m, _] = (0, a.useState)(!1),
                        { formatMessage: p } = (0, o.A)();
                    return (0, a.useCallback)(async () => {
                        if (!t.isAuthorized)
                            return void i((0, r.jsx)(u.h, { error: p({ id: 'authorization-messages.need-to-authorizate' }) }), { containerId: l.u.ERROR });
                        if (m) return;
                        let a = { ...(0, s.HO)(e), url: e.url, isLiked: !e.isLiked };
                        _(!0);
                        let o = await e.toggleLike();
                        (_(!1),
                            o === n.f.OK
                                ? i((0, r.jsx)(h, { playlist: a }), { containerId: l.u.INFO })
                                : i((0, r.jsx)(u.h, { error: p({ id: 'error-messages.error-during-action' }) }), { containerId: l.u.ERROR }));
                    }, [t.isAuthorized, m, e, p, i]);
                };
        },
        73192: (e, t, i) => {
            'use strict';
            i.d(t, { A: () => h });
            var r = i(32290),
                s = i(92708),
                a = i(55178),
                o = i(60900),
                n = i(45477),
                l = i(75582),
                c = i(57594),
                d = i(90357),
                u = i(97647),
                m = i(8097);
            let _ = (e) => {
                    let { playlist: t, closeToast: i } = e;
                    return (0, r.jsx)(m.k, {
                        closeToast: i,
                        entityVariant: u.c.PLAYLIST,
                        entityUrl: t.url,
                        coverUri: t.coverUri,
                        entityTitle: t.title,
                        isPinned: t.isPinned,
                        radius: 's',
                    });
                },
                h = (e) => {
                    let { user: t } = (0, c.g)(),
                        { notify: i } = (0, l.l)(),
                        { formatMessage: u } = (0, o.A)(),
                        [m, h] = (0, a.useState)(!1);
                    return (0, a.useCallback)(async () => {
                        if (!t.isAuthorized)
                            return void i((0, r.jsx)(d.h, { error: u({ id: 'authorization-messages.need-to-authorizate' }) }), { containerId: n.u.ERROR });
                        if (m) return;
                        let a = { ...(0, s.HO)(e), url: e.url, isPinned: !e.isPinned };
                        h(!0);
                        let o = await e.togglePin();
                        (h(!1),
                            o
                                ? i((0, r.jsx)(_, { playlist: a }), { containerId: n.u.INFO })
                                : i((0, r.jsx)(d.h, { error: u({ id: 'error-messages.error-during-action' }) }), { containerId: n.u.ERROR }));
                    }, [t.isAuthorized, m, e, i, u]);
                };
        },
        75245: (e, t, i) => {
            'use strict';
            i.d(t, { F: () => c });
            var r,
                s = i(55178),
                a = {
                    5881: (e, t, i) => {
                        function r() {
                            for (var e, t, i = 0, r = ''; i < arguments.length;)
                                (e = arguments[i++]) &&
                                    (t = (function e(t) {
                                        var i,
                                            r,
                                            s = '';
                                        if ('string' == typeof t || 'number' == typeof t) s += t;
                                        else if ('object' == typeof t)
                                            if (Array.isArray(t)) for (i = 0; i < t.length; i++) t[i] && (r = e(t[i])) && (s && (s += ' '), (s += r));
                                            else for (i in t) t[i] && (s && (s += ' '), (s += i));
                                        return s;
                                    })(e)) &&
                                    (r && (r += ' '), (r += t));
                            return r;
                        }
                        (i.r(t), i.d(t, { clsx: () => r, default: () => s }));
                        let s = r;
                    },
                    2876: (e, t, i) => {
                        (i.r(t), i.d(t, { default: () => r }));
                        let r = { root: 'IZnFMW4gXBshJODnvB1P', item: 'VJ9IexhAEuYSCyGiMfN4' };
                    },
                    9097: (e, t) => {
                        var i = Symbol.for('react.transitional.element');
                        function r(e, t, r) {
                            var s = null;
                            if ((void 0 !== r && (s = '' + r), void 0 !== t.key && (s = '' + t.key), 'key' in t))
                                for (var a in ((r = {}), t)) 'key' !== a && (r[a] = t[a]);
                            else r = t;
                            return { $$typeof: i, type: e, key: s, ref: void 0 !== (t = r.ref) ? t : null, props: r };
                        }
                        ((t.Fragment = Symbol.for('react.fragment')), (t.jsx = r), (t.jsxs = r));
                    },
                    4377: (e, t, i) => {
                        e.exports = i(9097);
                    },
                    4014: function (e, t, i) {
                        var r =
                            (this && this.__importDefault) ||
                            function (e) {
                                return e && e.__esModule ? e : { default: e };
                            };
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.Carousel = void 0));
                        let s = i(4377),
                            a = i(5881),
                            o = i(810),
                            n = r(i(2876)),
                            l = (e) => {
                                let { className: t, itemClassName: i, children: r, forwardRef: l, role: c, ...d } = e;
                                return (0, s.jsx)('ol', {
                                    ref: l,
                                    className: (0, a.clsx)(n.default.root, t),
                                    ...d,
                                    role: null != c ? c : 'list',
                                    children: o.Children.map(r, (e) => (0, s.jsx)('li', { className: (0, a.clsx)(n.default.item, i), children: e })),
                                });
                            };
                        t.Carousel = (0, o.forwardRef)((e, t) => (0, s.jsx)(l, { forwardRef: t, ...e }));
                    },
                    810: (e) => {
                        e.exports = r || (r = i.t(s, 2));
                    },
                },
                o = {};
            function n(e) {
                var t = o[e];
                if (void 0 !== t) return t.exports;
                var i = (o[e] = { exports: {} });
                return (a[e].call(i.exports, i, i.exports, n), i.exports);
            }
            ((n.d = (e, t) => {
                for (var i in t) n.o(t, i) && !n.o(e, i) && Object.defineProperty(e, i, { enumerable: !0, get: t[i] });
            }),
                (n.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
                (n.r = (e) => {
                    ('undefined' != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
                        Object.defineProperty(e, '__esModule', { value: !0 }));
                }));
            var l = {};
            (() => {
                (Object.defineProperty(l, 'X', { value: !0 }), (l.l = void 0));
                var e = n(4014);
                Object.defineProperty(l, 'l', {
                    enumerable: !0,
                    get: function () {
                        return e.Carousel;
                    },
                });
            })();
            var c = l.l;
            l.X;
        },
        77435: (e, t, i) => {
            'use strict';
            i.d(t, { p: () => u });
            var r = i(32290),
                s = i(55178),
                a = i(99923),
                o = i(95481),
                n = i(26042),
                l = i(98148),
                c = i(24170);
            let d = (e) => {
                    let {
                            forwardRef: t,
                            isShimmerVisible: i,
                            isShimmerActive: d,
                            title: u,
                            description: m,
                            albums: _,
                            className: h,
                            containerClassName: p,
                            headerClassName: v,
                            viewAllActionLink: C,
                            headingRef: x,
                            headingVariant: f,
                            shouldSendAnalyticsOnLoaded: k,
                            ...y
                        } = e,
                        N = (0, o.f)();
                    return (
                        (0, s.useEffect)(() => {
                            k && N();
                        }, [N, k]),
                        (0, r.jsx)(l.O, {
                            isShimmerVisible: i,
                            isShimmerActive: d,
                            className: h,
                            headerClassName: v,
                            containerClassName: p,
                            ref: t,
                            title: u,
                            description: m,
                            viewAllActionLink: C,
                            headingRef: x,
                            headingVariant: f,
                            ...y,
                            children:
                                null == _
                                    ? void 0
                                    : _.map((e, t) =>
                                          (0, r.jsx)(
                                              n.B,
                                              {
                                                  objectType: a.DomainObjectType.Album,
                                                  objectId: String(e.id),
                                                  objectPosX: t + 1,
                                                  objectPosY: 1,
                                                  objectsCount: _.length,
                                                  children: (0, r.jsx)(c.a, {
                                                      album: e,
                                                      contentLinesCount: 3,
                                                      withAddition: !e.isNonMusic,
                                                      withLikesCount: e.isNonMusic,
                                                  }),
                                              },
                                              e.id,
                                          ),
                                      ),
                        })
                    );
                },
                u = (0, s.forwardRef)((e, t) => (0, r.jsx)(d, { forwardRef: t, ...e }));
        },
        78648: (e, t, i) => {
            'use strict';
            i.d(t, { C8: () => a, UC: () => o, dM: () => n, uV: () => l });
            var r = i(87953),
                s = i(42464);
            let a = (e) => {
                    if (void 0 === e || '' === e) return 'missing';
                    let t = Number(e);
                    return !Number.isFinite(t) || t < 0 ? 'invalid' : t < 86400 ? 'lt-1d' : t <= 2592e3 ? '1-30d' : 'gt-30d';
                },
                o = (e) => (e.uid ? 'authorized' : 'no-uid'),
                n = (e) => {
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
        81354: (e, t, i) => {
            'use strict';
            i.d(t, { XU: () => m, YK: () => u });
            var r,
                s,
                a = i(30782),
                o = i(55178),
                n = i(60900);
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
                var t = (0, n.A)(),
                    i = e.value,
                    r = e.children,
                    s = (0, a.__rest)(e, ['value', 'children']);
                return r(t.formatNumberToParts(i, s));
            };
            function c(e) {
                var t = function (t) {
                    var i = (0, n.A)(),
                        r = t.value,
                        s = t.children,
                        o = (0, a.__rest)(t, ['value', 'children']),
                        l = 'string' == typeof r ? new Date(r || 0) : r;
                    return s('formatDate' === e ? i.formatDateToParts(l, o) : i.formatTimeToParts(l, o));
                };
                return ((t.displayName = s[e]), t);
            }
            function d(e) {
                var t = function (t) {
                    var i = (0, n.A)(),
                        r = t.value,
                        s = t.children,
                        l = (0, a.__rest)(t, ['value', 'children']),
                        c = i[e](r, l);
                    if ('function' == typeof s) return s(c);
                    var d = i.textComponent || o.Fragment;
                    return o.createElement(d, null, c);
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
        83460: (e, t, i) => {
            'use strict';
            i.d(t, { B: () => J });
            var r = i(32290),
                s = i(63618),
                a = i(96103),
                o = i(55178),
                n = i(60900),
                l = i(99923),
                c = i(21732),
                d = i(71483),
                u = i(91027),
                m = i(6752),
                _ = i(14934),
                h = i(82586),
                p = i(86269),
                v = i(71926),
                C = i(41677),
                x = i(73141),
                f = i(73192),
                k = i(71735),
                y = i(47745),
                N = i(2969),
                g = i(54391),
                j = i(23352),
                T = i(72396),
                b = i(5537),
                A = i(32641),
                L = i(28999),
                S = i(90169),
                E = i(57594),
                P = i(61376),
                O = i(11323),
                B = i(92744),
                I = i(61258),
                w = i(10180),
                R = i(90326),
                D = i(29268),
                z = i(34925),
                K = i(13931),
                U = i(19740),
                W = i(9017),
                H = i(65477),
                M = i(46200),
                F = i(27120),
                $ = i(95134),
                V = i(79406),
                X = i(58237),
                Y = i(56367),
                Q = i(83755);
            let Z = (0, a.PA)((e) => {
                var t;
                let { playlist: i, onOpenChange: s, open: a, ...o } = e,
                    { shouldShowBuySubscriptionModal: d, showBuySubscriptionModal: m } = (0, M.q)(),
                    {
                        experiments: _,
                        settings: { isMobile: h },
                        trailer: p,
                        user: v,
                    } = (0, E.g)(),
                    C = (0, x.K)(i),
                    y = (0, f.A)(i),
                    N = (0, g.F)(),
                    { formatMessage: j } = (0, n.A)(),
                    T = (0, k.P)(),
                    b = _.checkExperiment(V.z.WebEditorsFeatures, 'on'),
                    A = (0, W.A)({ entityVariant: $.D.PLAYLIST, urlParams: { id: i.uid, kind: i.kind } });
                (0, F.N)(a);
                let L = (0, u.c)(() => {
                    if (d) return void m();
                    T() || (p.openPlaylistTrailer(i.id), N(l.DomainObjectType.Playlist, i.id));
                });
                return (0, r.jsxs)(U.W1, {
                    title: i.title,
                    onOpenChange: s,
                    open: a,
                    offsetOptions: 10,
                    isMobile: h,
                    ariaLabel: j({ id: 'interface-actions.context-menu' }),
                    containerDataTestId: c.Kq.playlist.PLAYLIST_CONTEXT_MENU,
                    ...o,
                    children: [
                        b && (0, r.jsx)(H.d, { entityVariant: $.D.PLAYLIST, adminUrl: i.isFavouritePlaylist ? void 0 : A }),
                        !h && (0, r.jsx)(Y.L, { onClick: y, isPinned: i.isPinned }),
                        !i.isFavouritePlaylist && (0, r.jsx)(X.T, { onClick: C, isLiked: i.isLiked, disabled: !v.isAuthorized }),
                        (null == (t = i.trailer) ? void 0 : t.isAvailable) && (0, r.jsx)(Q.N, { onClick: L, disabled: !i.isAvailable }),
                    ],
                });
            });
            var q = i(11675),
                G = i.n(q);
            let J = (0, a.PA)((e) => {
                let { className: t, playlist: i, children: a, contentLinesCount: U, customDescription: W, onCoverMouseDown: H } = e,
                    { ref: M, intersectionPropertyId: F } = (0, j.n)(),
                    {
                        trailer: $,
                        user: V,
                        paywall: { modal: X },
                    } = (0, E.g)(),
                    { from: Y, utmLink: Q } = (0, T.f)({ contextId: i.uuid, contextType: d.K.Playlist }),
                    { formatMessage: q } = (0, n.A)(),
                    { sendLikeSearchFeedback: J, sendNavigateSearchFeedback: ee, sendPlaySearchFeedback: et } = (0, L.z)(),
                    [ei, er] = (0, o.useState)(!1),
                    [es, ea] = (0, o.useState)(!1),
                    [eo, en] = (0, o.useState)(!1),
                    el = (0, K.r)(i),
                    ec = (0, x.K)(i),
                    ed = (0, f.A)(i),
                    eu = (0, y.N)(),
                    em = (0, N.b)(),
                    e_ = (0, A.Z)(i.url),
                    eh = (0, g.F)(),
                    ep = (0, k.P)(),
                    ev = (0, u.c)((e) => {
                        if ((e.stopPropagation(), ep())) return void e.preventDefault();
                        ($.setUtmLink(Q), $.openPlaylistTrailer(i.id), eh(l.DomainObjectType.Playlist, i.id));
                    }),
                    [eC, ex] = (0, o.useState)(!1),
                    { isPlaying: ef, togglePlay: ek } = (0, S.D)({
                        playContextParams: { contextData: { type: d.K.Playlist, meta: { id: i.id, uuid: i.uuid }, from: Y, utmLink: Q }, loadContextMeta: !0 },
                    }),
                    ey = (0, u.c)(() => {
                        (eu({ to: l.AppScreen.PlaylistScreen }), null == ee || ee());
                    }),
                    eN = (0, u.c)((e) => {
                        (ey(), e_(e));
                    }),
                    eg = (0, b.N)(),
                    ej = (0, u.c)(() => {
                        if (!ep()) {
                            if (eg) return void X.open();
                            (ei || ef || (er(!0), null == et || et()), ek(), em(!ef));
                        }
                    }),
                    eT = (0, u.c)(() => {
                        (es || i.isLiked || (ea(!0), null == J || J()), ec());
                    }),
                    eb = (0, u.c)((e) => {
                        (e.preventDefault(), e.stopPropagation());
                    }),
                    eA = (0, u.c)((e) => {
                        (en(e), ex(e));
                    }),
                    eL = (0, o.useMemo)(() => {
                        var e;
                        return W
                            ? (0, r.jsx)(v.HL, { variant: 'span', type: 'entity', size: 's', weight: 'medium', lineClamp: 2, children: W }, i.getKey('description'))
                            : (null == (e = i.artists) ? void 0 : e.length)
                              ? (0, r.jsx)(
                                    C.i,
                                    { className: G().artists, artists: i.artists, lineClamp: 1, linkClassName: G().artistLink, captionSize: 's' },
                                    i.getKey('description'),
                                )
                              : void 0;
                    }, [W, i]),
                    eS = (0, m.L)(() => {
                        if (!i.isFavouritePlaylist)
                            return (0, r.jsx)(
                                B.c,
                                {
                                    className: (0, s.$)(G().likeButton, G().control),
                                    isLiked: i.isLiked,
                                    onClick: eT,
                                    variant: 'default',
                                    size: 's',
                                    iconSize: 'xxs',
                                    disabled: !V.isAuthorized,
                                },
                                i.getKey('LikeButton'),
                            );
                    }),
                    eE = (0, o.useMemo)(() => {
                        var e;
                        if (null == i || null == (e = i.trailer) ? void 0 : e.isAvailable)
                            return (0, r.jsx)(
                                z.n,
                                {
                                    children: (0, r.jsx)(
                                        D.k,
                                        { className: (0, s.$)(G().trailerButton, G().control), radius: 'round', size: 's', iconSize: 'xxs', onClick: ev },
                                        i.getKey('TrailerButton'),
                                    ),
                                },
                                i.getKey('PlaylilstCardTrailerTooltip'),
                            );
                    }, [ev, i]),
                    eP = (0, o.useMemo)(
                        () =>
                            (0, r.jsx)(
                                w.O,
                                { onClick: ed, isPinned: i.isPinned, className: (0, s.$)(G().pinButton, G().control), withRipple: !1 },
                                i.getKey('PinButton'),
                            ),
                        [ed, i],
                    ),
                    eO = (0, o.useMemo)(
                        () =>
                            (0, r.jsx)(p.t, {
                                className: G().cover,
                                radius: 's',
                                withShadow: !0,
                                'data-test-id': c.Kq.playlist.PLAYLIST_CARD,
                                children: (0, r.jsxs)('div', {
                                    className: G().coverBlock,
                                    onClick: eN,
                                    onMouseDown: H,
                                    children: [
                                        (0, r.jsx)(O.B, {
                                            className: G().image,
                                            src: i.coverUri,
                                            size: 200,
                                            fit: 'cover',
                                            alt: el,
                                            withAvatarReplace: !0,
                                            'aria-hidden': !0,
                                        }),
                                        (0, r.jsx)(_.hg, {
                                            isVisible: eo || eC,
                                            className: G().controls,
                                            playControl: (0, r.jsx)(
                                                R.D,
                                                {
                                                    className: (0, s.$)(G().playButton, G().control),
                                                    buttonVariant: 'default',
                                                    withHover: !1,
                                                    iconSize: 'xl',
                                                    variant: 'filled',
                                                    onClick: ej,
                                                    isPlaying: ef,
                                                    disabled: !i.isAvailable,
                                                },
                                                i.getKey('PlayButton'),
                                            ),
                                            likeControl: eS,
                                            menuControl: (0, r.jsx)(
                                                Z,
                                                {
                                                    playlist: i,
                                                    onOpenChange: eA,
                                                    open: eo,
                                                    onClick: eb,
                                                    className: (0, s.$)(G().menuButton, G().control),
                                                    icon: (0, r.jsx)(h.I, { size: 'xxs', variant: 'more' }),
                                                    size: 's',
                                                    'data-test-id': c.Kq.playlist.PLAYLIST_CONTEXT_MENU_BUTTON,
                                                },
                                                i.getKey('PlaylistContextMenu'),
                                            ),
                                            pinControl: eP,
                                            trailerControl: eE,
                                        }),
                                    ],
                                }),
                            }),
                        [eN, H, i, el, eo, eC, ej, ef, eS, eA, eb, eP, eE],
                    ),
                    eB = !!i.actualLikesCount && !i.isLikesCountHidden;
                return (0, r.jsxs)(_.MN, {
                    ref: M,
                    'aria-label': el,
                    className: (0, s.$)(G().root, t),
                    title: (0, r.jsx)(v.HL, {
                        variant: 'div',
                        type: 'entity',
                        size: 's',
                        weight: 'medium',
                        lineClamp: 2,
                        'data-test-id': c.Kq.playlist.PLAYLIST_TITLE,
                        children: (0, r.jsx)(I.N, { className: G().titleLink, href: i.url, onClick: ey, children: i.title }),
                    }),
                    srTitle: (0, r.jsx)(I.N, { href: i.url, onClick: ey, children: i.title }),
                    'data-intersection-property-id': F,
                    contentLinesCount: U,
                    view: eO,
                    description: eL,
                    'data-test-id': c.Kq.playlist.PLAYLIST_ITEM,
                    children: [
                        eB &&
                            (0, r.jsx)(P.x, {
                                ariaLabel: q({ id: 'entity-names.likes-counter' }, { counter: i.actualLikesCount }),
                                likesCount: i.actualLikesCount,
                                isLiked: i.isLiked,
                                handleLikeClick: ec,
                            }),
                        a,
                    ],
                });
            });
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
        94218: (e, t, i) => {
            'use strict';
            i.d(t, { H: () => _ });
            var r = i(32290),
                s = i(21916),
                a = i(39407),
                o = i(21732),
                n = i(91027),
                l = i(63423),
                c = i(71926),
                d = i(78648),
                u = i(70204),
                m = i(34186);
            let _ = (e) => {
                let { size: t = 'm', variant: i = 'default', color: _ = 'primary', withRipple: h = !0, buttonText: p, isBlock: v, key: C, className: x } = e,
                    f = (0, s.useRouter)(),
                    k = (0, m.N)().get(u.QG),
                    y = (0, n.c)(() => {
                        k.authorizationUrl && ((0, d.uV)({ stage: 'attempt-start', trigger: 'user' }), f.push(k.authorizationUrl));
                    });
                return (0, r.jsx)(
                    l.$,
                    {
                        onClick: y,
                        className: x,
                        isBlock: v,
                        color: _,
                        variant: i,
                        size: t,
                        radius: 'xxxl',
                        withRipple: h,
                        'data-test-id': o.S7.UNAUTHORIZED_BUTTON,
                        children: p || (0, r.jsx)(c.HL, { variant: 'div', size: 'l', lineClamp: 1, children: (0, r.jsx)(a.A, { id: 'authorization.enter-button' }) }),
                    },
                    C,
                );
            };
        },
        95481: (e, t, i) => {
            'use strict';
            i.d(t, { f: () => x });
            var r = i(55178),
                s = i(17811),
                a = i(92146),
                o = i(74416),
                n = i(6752),
                l = i(62376),
                c = i(1677),
                d = i(48922),
                u = i(84782),
                m = i(30915),
                _ = i(18746),
                h = i(37240),
                p = i(51012),
                v = i(47498);
            let C = [
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
                    let e = (0, r.useRef)(!1),
                        t = (0, o.st)(),
                        i = (0, l.U)(),
                        { hash: x } = (0, o.gf)(),
                        { pageId: f } = (0, h.$)(),
                        { tabId: k, tabPos: y, isTabSelectedByDefault: N } = (0, v.R)(),
                        { offsetBlockPosY: g } = (0, m.u)(),
                        { blockId: j, blockType: T, blockPosX: b, blockPosY: A, mainObjectType: L, mainObjectId: S, objectsCount: E } = (0, u.N)(),
                        { filterKey: P, filterValue: O, filterPos: B } = (0, _.G)(),
                        { skeleton: I } = (0, p.b)(),
                        w = (0, n.L)(() => (void 0 !== g && void 0 !== A ? g + A : A));
                    return (0, r.useCallback)(() => {
                        if (!t || !f || !d.xK.includes(f) || !C.includes(f) || e.current) return;
                        let r = { hash: x, pageId: c.F[f], entityType: T, entityId: j, entityPosX: b, entityPosY: w, objectsCount: E };
                        (void 0 !== P && ((r.filterKey = P), (r.filterValue = O), (r.filterPos = B)),
                            d.qG.includes(f) && ((r.tabId = k), (r.tabPos = y), (r.isTabSelectedByDefault = N)),
                            I && (r.skeletonId = I),
                            S && L && ((r.mainObjectType = L), (r.mainObjectId = S)));
                        let o = (0, s.F)({ params: r, logger: i, context: 'useSendEventOnBlockLoaded' });
                        o && ((0, a.uY)(t.evgenInstance, o), (e.current = !0));
                    }, [t, f, x, T, j, b, w, P, O, B, E, I, S, L, i, k, y, N]);
                };
        },
        98148: (e, t, i) => {
            'use strict';
            i.d(t, { O: () => f });
            var r = i(32290),
                s = i(63618),
                a = i(55178),
                o = i(85472),
                n = i(99923),
                l = i(6752),
                c = i(75245),
                d = i(79856),
                u = i(84782),
                m = i(26042),
                _ = i(19620),
                h = i(49522),
                p = i(30564),
                v = i(33696),
                C = i.n(v);
            let x = (e) => {
                    let {
                            forwardRef: t,
                            shimmerClassName: i,
                            isShimmerVisible: v,
                            isShimmerActive: x,
                            isShimmerWithSubcover: f,
                            isShimmerCentered: k,
                            isShimmerRounded: y,
                            title: N,
                            description: g,
                            coverUrl: j,
                            viewAllActionLink: T,
                            titleChildren: b,
                            headerChildren: A,
                            children: L,
                            className: S,
                            containerClassName: E,
                            headerClassName: P,
                            itemClassName: O,
                            showHeaderShimmer: B = !1,
                            showShimmerInfo: I = !0,
                            showControls: w = !0,
                            headingRef: R,
                            headingVariant: D,
                            customShimmer: z,
                            ...K
                        } = e,
                        U = (0, a.useId)(),
                        W = (0, a.useRef)(null),
                        { objectsCount: H } = (0, u.N)(),
                        M = (0, a.useMemo)(
                            () =>
                                B && v
                                    ? (0, r.jsx)('div', { className: P, children: (0, r.jsx)(d.W, { isActive: x, className: C().shimmerTitle, radius: 'l' }) })
                                    : N || g || b || A
                                      ? (0, r.jsx)(m.B, {
                                            objectType: n.DomainObjectType.Shortcut,
                                            objectId: String(T),
                                            objectPosX: 0,
                                            objectPosY: 0,
                                            objectsCount: null != H ? H : 0,
                                            children: (0, r.jsx)(_.T, {
                                                className: P,
                                                labeledForId: U,
                                                title: N,
                                                description: g,
                                                coverUrl: j,
                                                viewAllActionLink: T,
                                                controls: w && (0, r.jsx)(h.X, { className: C().controls, carouselRef: W }),
                                                headingRef: R,
                                                headingVariant: D,
                                                withDescription: !!g,
                                                titleChildren: b,
                                                children: A,
                                            }),
                                        })
                                      : void 0,
                            [j, g, P, R, D, U, x, v, H, w, B, N, b, A, T],
                        ),
                        F = (0, l.L)(() => z || (0, p.k)({ className: i, isActive: x, withInfo: I, withSubcover: f, centered: k, round: y }));
                    return (0, r.jsxs)('section', {
                        ref: t,
                        className: (0, s.$)(C().root, S),
                        ...(0, o.getDataAttrFromProps)(K),
                        children: [
                            M,
                            (0, r.jsx)(c.F, {
                                className: E,
                                ref: W,
                                itemClassName: (0, s.$)(C().item, C().important, O),
                                'aria-labelledby': ''.concat(U, ' ').concat(U, '-description'),
                                children: v ? F : L,
                            }),
                        ],
                    });
                },
                f = (0, a.forwardRef)((e, t) => (0, r.jsx)(x, { forwardRef: t, ...e }));
        },
    },
    (e) => {
        (e.O(
            0,
            [
                7412, 1010, 3608, 7231, 8461, 2147, 4517, 9763, 1256, 313, 6706, 5472, 8378, 900, 2536, 2146, 3353, 2474, 8035, 347, 2732, 1410, 229, 8506, 6050, 5806,
                6241, 7702, 6874, 9155, 861, 4668, 9740, 1175, 4499, 8915, 8816, 2563, 6341, 6226, 4220, 9562, 7358,
            ],
            () => e((e.s = 4154)),
        ),
            (_N_E = e.O()));
    },
]);
