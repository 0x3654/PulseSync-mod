(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [6914],
    {
        291: (e) => {
            e.exports = {
                itemCounter_3: 'ClipsCarouselContent_itemCounter_3__c_H3V',
                item: 'ClipsCarouselContent_item__Yy7_P',
                important: 'ClipsCarouselContent_important__nZYA0',
                itemCounter_5: 'ClipsCarouselContent_itemCounter_5__QeQd_',
            };
        },
        2352: (e) => {
            e.exports = { root: 'TextShimmer_root__qqWug', text: 'TextShimmer_text__z8oN9' };
        },
        12113: (e, t, r) => {
            'use strict';
            r.d(t, { F: () => W });
            var i = r(32290),
                o = r(63618),
                s = r(62060),
                a = r(96103),
                l = r(55178),
                n = r(60900),
                c = r(85472),
                d = r(21732),
                u = r(71483),
                _ = r(91027),
                m = r(14934),
                C = r(50162),
                p = r(86269),
                h = r(71926),
                v = r(41677),
                f = r(56797),
                x = r(26089),
                b = r(94315),
                k = r(99872),
                A = r(37862),
                w = r(48922),
                j = r(23352),
                N = r(72396),
                L = r(52843),
                I = r(22191),
                y = r(63415),
                T = r(56755),
                g = r(90169),
                R = r(57594),
                S = r(13798),
                O = r(61258),
                D = r(90326),
                M = r(73325),
                P = r(96299),
                E = r.n(P);
            let W = (0, a.PA)((e) => {
                var t;
                let {
                        titleClassName: r,
                        artistLinkClassName: a,
                        clip: P,
                        withVideo: W = !0,
                        artistIdWithoutLink: B,
                        viewUuid: U,
                        shouldOpenModalOnCardClick: z = !0,
                    } = e,
                    { fullscreenVideoPlayer: K } = (0, R.g)(),
                    { formatMessage: V } = (0, n.A)(),
                    $ = (0, k.C)(),
                    { from: F } = (0, N.f)({ pageId: w._Q.VIDEO_PLAYER, contextId: K.state.contextId, contextType: u.K.Various, blockId: A.U.CLIPS }),
                    q = (0, I.P)(null != (t = P.duration) ? t : 0),
                    H = (0, x.M)(U),
                    Y = (0, f._)(U),
                    { ref: X, intersectionPropertyId: G } = (0, j.n)({ callback: H }),
                    Q = (0, l.useRef)(null),
                    Z = W && P.previewUrl,
                    J = (0, _.c)(() => {
                        Q.current && ((Q.current.currentTime = 0), Q.current.play());
                    }),
                    ee = (0, l.useMemo)(() => (0, s.A)(J, 500), [J]),
                    et = (0, _.c)(() => {
                        var e;
                        null == (e = Q.current) || e.pause();
                    }),
                    er = (0, l.useMemo)(() => K.ids.indexOf(P.clipId), [K, P.clipId]),
                    { isPlaying: ei, togglePlay: eo } = (0, g.D)({
                        playContextParams: {
                            contextData: { type: u.K.Various, meta: { id: y.H.VARIOUS_CLIP_CONTEXT }, from: F },
                            queueParams: { index: er },
                            entitiesData: K.entitiesData,
                            loadContextMeta: !1,
                        },
                        entityId: String(P.clipId),
                        sonataState: K.state,
                        playbackId: T.V.CLIP,
                    }),
                    es = z ? P.url : (0, b.J)(K.ids, er),
                    ea = (0, _.c)(() => {
                        z ? ($([P.clipId]), Y()) : ei || eo();
                    }),
                    el = (0, M.X)({ clip: P, callback: ea }),
                    en = V({ id: 'entity-names.clip-name' }, { clipName: P.title }),
                    ec = (0, l.useMemo)(
                        () =>
                            P.isAvailable
                                ? (0, i.jsxs)(p.t, {
                                      radius: 'm',
                                      className: (0, o.$)(E().view, E().cover),
                                      onMouseEnter: ee,
                                      onMouseLeave: et,
                                      onClick: el,
                                      children: [
                                          Z &&
                                              (0, i.jsx)('video', {
                                                  className: E().media,
                                                  ref: Q,
                                                  poster: P.thumbnail && (0, c.createAvatarVideoUrl)(P.thumbnail, 1280),
                                                  playsInline: !0,
                                                  muted: !0,
                                                  loop: !0,
                                                  'aria-hidden': !0,
                                                  children: (0, i.jsx)('source', { src: P.previewUrl, type: 'video/mp4' }),
                                              }),
                                          P.thumbnail &&
                                              (0, i.jsx)(C._V, {
                                                  className: E().image,
                                                  'aria-hidden': !0,
                                                  src: P.thumbnail,
                                                  fit: 'cover',
                                                  withAvatarReplace: !0,
                                                  size: 1280,
                                                  createUrlReplacer: c.createAvatarVideoUrl,
                                              }),
                                          void 0 !== P.duration &&
                                              (0, i.jsx)(h.HL, {
                                                  role: 'text',
                                                  'aria-label': q,
                                                  variant: 'span',
                                                  className: E().duration,
                                                  type: 'entity',
                                                  size: 'xs',
                                                  weight: 'medium',
                                                  children: (0, i.jsx)('span', { 'aria-hidden': 'true', children: (0, L.E)(P.duration, P.duration) }),
                                              }),
                                          (0, i.jsx)(D.D, { variant: 'filled', className: E().playButton, onClick: el, iconSize: 'xl' }),
                                      ],
                                  })
                                : (0, i.jsx)(p.t, {
                                      radius: 'm',
                                      className: E().unavailableCover,
                                      children: (0, i.jsx)(C.Ab, { className: E().image, iconVariant: 'unavailable', 'data-test-id': d.S7.ENTITY_COVER_FALLBACK_IMAGE }),
                                  }),
                        [q, P.isAvailable, P.thumbnail, P.previewUrl, P.duration, ee, et, el, Z],
                    ),
                    ed = (0, l.useMemo)(
                        () =>
                            P.hasArtists
                                ? (0, i.jsx)(
                                      v.i,
                                      { linkClassName: (0, o.$)(E().artistLink, a), artists: P.artists, lineClamp: 1, withAllArtistsTitle: !0, artistIdWithoutLink: B },
                                      P.getKey('SeparatedArtists'),
                                  )
                                : null,
                        [B, P, a],
                    );
                return (0, i.jsx)(m.MN, {
                    ref: X,
                    className: E().root,
                    explicitMarkComponent:
                        P.explicitDisclaimer &&
                        (0, i.jsx)(S.N, { getDescriptionTexts: P.getDescriptionTexts, variant: P.explicitDisclaimer, size: 'xxs' }, P.getKey('ExplicitMarkIcon')),
                    'aria-label': en,
                    srTitle: (0, i.jsx)(O.N, { href: es, onClick: el, children: en }),
                    title: (0, i.jsxs)(
                        h.HL,
                        {
                            className: (0, o.$)(E().title, r),
                            variant: 'div',
                            type: 'entity',
                            size: 'm',
                            weight: 'medium',
                            lineClamp: 1,
                            children: [
                                (0, i.jsx)(O.N, {
                                    className: E().titleLink,
                                    href: es,
                                    'aria-label': en,
                                    onClick: el,
                                    'data-test-id': d.Kq.clip.CLIP_META_TITLE,
                                    children: P.title,
                                }),
                                P.version && (0, i.jsx)(h.HL, { className: E().version, variant: 'span', children: ' '.concat(P.version) }),
                            ],
                        },
                        P.getKey('Title'),
                    ),
                    'data-intersection-property-id': G,
                    view: ec,
                    description: ed,
                    'data-test-id': d.Kq.clip.CLIP_CARD,
                });
            });
        },
        20541: (e) => {
            e.exports = {
                root: 'ClipCardShimmer_root__sIvNr',
                cover: 'ClipCardShimmer_cover__yA4jz',
                title: 'ClipCardShimmer_title__MCApK',
                text: 'ClipCardShimmer_text__ajZGv',
            };
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
        23708: (e) => {
            e.exports = { root: 'TextBlockShimmer_root__og5Bj', shimmer: 'TextBlockShimmer_shimmer__TpDdq' };
        },
        26089: (e, t, r) => {
            'use strict';
            r.d(t, { M: () => C });
            var i = r(17811),
                o = r(92146),
                s = r(74416),
                a = r(91027),
                l = r(48922),
                n = r(84782),
                c = r(2792),
                d = r(37240),
                u = r(51012),
                _ = r(47498),
                m = r(62376);
            let C = (e) => {
                let t = (0, s.st)(),
                    { hash: r } = (0, s.gf)(),
                    { pageId: C } = (0, d.$)(),
                    { tabId: p, tabPos: h, isTabSelectedByDefault: v } = (0, _.R)(),
                    { blockType: f, blockId: x, blockPosX: b, blockPosY: k, mainObjectType: A, mainObjectId: w } = (0, n.N)(),
                    { objectsCount: j, objectType: N, objectId: L, objectPosX: I, objectPosY: y } = (0, c.J)(),
                    T = (0, m.U)(),
                    { skeleton: g } = (0, u.b)();
                return (0, a.c)((s) => {
                    if (!t || !C || !l.xK.includes(C)) return;
                    let a = {
                        hash: r,
                        pageId: C,
                        entityType: f,
                        entityId: x,
                        entityPosX: b,
                        entityPosY: k,
                        objectsCount: j,
                        viewUuid: e,
                        objectType: N,
                        objectId: L,
                        objectPosX: I,
                        objectPosY: y,
                    };
                    (l.qG.includes(C) && ((a.tabId = p), (a.tabPos = h), (a.isTabSelectedByDefault = v)),
                        g && (a.skeletonId = g),
                        A && (a.mainObjectType = A),
                        w && (a.mainObjectId = w));
                    let n = (0, i.F)({ params: a, logger: T, context: 'useSendEventOnClipShowedOrHidden' });
                    if (n) {
                        if (s) return void (0, o.Pf)(t.evgenInstance, n);
                        (0, o.nv)(t.evgenInstance, n);
                    }
                });
            };
        },
        28563: (e, t, r) => {
            'use strict';
            r.d(t, { F: () => A });
            var i = r(32290),
                o = r(63618),
                s = r(42157),
                a = r(96103),
                l = r(55178),
                n = r.t(l, 2),
                c = r(21732),
                d = r(45807),
                u = {
                    810: (e) => {
                        e.exports = n;
                    },
                },
                _ = {},
                m = {};
            ((() => {
                (Object.defineProperty(m, '__esModule', { value: !0 }), (m.useForwardRef = void 0));
                let e = (function e(t) {
                    var r = _[t];
                    if (void 0 !== r) return r.exports;
                    var i = (_[t] = { exports: {} });
                    return (u[t](i, i.exports, e), i.exports);
                })(810);
                m.useForwardRef = function (t, r) {
                    let i = (0, e.useRef)(r);
                    return (
                        (0, e.useEffect)(() => {
                            t && ('function' == typeof t ? t(i.current) : (t.current = i.current));
                        }, [t]),
                        i
                    );
                };
            })(),
                m.__esModule);
            var C = m.useForwardRef,
                p = r(54667),
                h = r(57594),
                v = r(49522),
                f = r(61954),
                x = r.n(f);
            let b = { [p.u.Desktop]: { start: 40, end: 20 }, [p.u.Mobile]: { start: 40, end: 40 } },
                k = (0, a.PA)((e) => {
                    let {
                            className: t,
                            carouselElement: r,
                            forwardRef: a,
                            scrollPadding: n,
                            isCarouselBetweenArrows: u = !1,
                            controlsWrapperClassName: _,
                            buttonSize: m,
                            buttonVariant: f,
                            withSecondaryColor: k,
                        } = e,
                        {
                            settings: { isMobile: A },
                        } = (0, h.g)(),
                        w = C(a, null),
                        { shouldBackwardButtonBeDisabled: j, shouldForwardButtonBeDisabled: N, shouldHideControls: L } = (0, d.Y)(w),
                        [I, y] = (0, l.useMemo)(() => {
                            let e = (0, s.A)(b, n);
                            return [A ? e[p.u.Mobile].start : e[p.u.Desktop].start, A ? e[p.u.Mobile].end : e[p.u.Desktop].end];
                        }, [n, A]),
                        T = (0, l.useCallback)(
                            (e) => {
                                var t;
                                let r = null == (t = w.current) ? void 0 : t.children[e],
                                    { current: i } = w;
                                if (!i || !(r instanceof HTMLElement)) return;
                                if (r.offsetLeft - i.scrollLeft < I) {
                                    i.scrollLeft = r.offsetLeft - I;
                                    return;
                                }
                                let o = i.scrollLeft + i.clientWidth - r.offsetLeft - r.offsetWidth;
                                o < y && (i.scrollLeft -= o - y);
                            },
                            [w, y, I],
                        ),
                        g = (0, l.useCallback)(
                            (e) => {
                                var t, i;
                                (T(e), null == (t = (i = r.props).onTabChange) || t.call(i, e));
                            },
                            [r, T],
                        ),
                        R = (0, l.cloneElement)(r, { forwardRef: w, className: (0, o.$)(x().wrapper, r.props.className, x().carousel, x().important), onTabChange: g });
                    return (0, i.jsxs)('div', {
                        className: (0, o.$)(
                            x().root,
                            {
                                [x().root_carouselBetweenArrows]: u,
                                [x().root_arrowLeft_hidden]: j,
                                [x().root_arrowRight_hidden]: N,
                                [x().root_arrow_hidden]: j && N && L,
                            },
                            t,
                        ),
                        'data-test-id': c.S7.CAROUSEL_WITH_ARROWS,
                        children: [
                            (0, i.jsx)('div', { className: x().list, children: R }),
                            !A &&
                                (0, i.jsx)(v.X, {
                                    className: (0, o.$)(x().buttons, _),
                                    carouselRef: w,
                                    backwardControlClassName: x().control,
                                    forwardControlClassName: x().control,
                                    withSecondaryColor: k,
                                    buttonSize: m,
                                    buttonVariant: f,
                                }),
                        ],
                    });
                }),
                A = (0, l.forwardRef)((e, t) => (0, i.jsx)(k, { forwardRef: t, ...e }));
        },
        29869: (e, t, r) => {
            'use strict';
            r.d(t, { t: () => h });
            var i = r(32290),
                o = r(63618),
                s = r(96103),
                a = r(55178),
                l = r(27576),
                n = r(99923),
                c = r(75245),
                d = r(26042),
                u = r(12113),
                _ = r(50819),
                m = r(291),
                C = r.n(m);
            let p = (0, s.PA)((e) => {
                    let {
                            forwardRef: t,
                            clipCardTitleClassName: r,
                            clipCardArtistLinkClassName: s,
                            carouselItemClassName: m,
                            isShimmerVisible: p,
                            isShimmerActive: h,
                            containerClassName: v,
                            artistIdWithoutLink: f,
                            withVideo: x = !0,
                            clips: b,
                            shouldOpenModalOnCardClick: k = !0,
                            itemCounter: A,
                        } = e,
                        w = (0, a.useId)(),
                        j = (0, a.useRef)(String((0, l.A)())),
                        N = (0, a.useMemo)(() => {
                            if (p) return Array.from({ length: 5 }, (e, t) => (0, i.jsx)(_.k, { isActive: h }, t));
                            return null == b
                                ? void 0
                                : b.map((e, t) =>
                                      (0, i.jsx)(
                                          d.B,
                                          {
                                              objectType: n.DomainObjectType.Video,
                                              objectPosX: t + 1,
                                              objectPosY: 1,
                                              objectsCount: null == b ? void 0 : b.length,
                                              objectId: String(e.clipId),
                                              children: (0, i.jsx)(u.F, {
                                                  titleClassName: r,
                                                  artistLinkClassName: s,
                                                  clip: e,
                                                  withVideo: x,
                                                  artistIdWithoutLink: f,
                                                  viewUuid: j.current,
                                                  shouldOpenModalOnCardClick: k,
                                              }),
                                          },
                                          e.clipId,
                                      ),
                                  );
                        }, [r, s, p, h, f, x, b, k]);
                    return (0, i.jsx)(c.F, {
                        className: (0, o.$)(C().itemCounter, { [C()['itemCounter_'.concat(A)]]: A }, v),
                        ref: t,
                        itemClassName: (0, o.$)(C().item, C().important, m),
                        'aria-labelledby': w,
                        children: N,
                    });
                }),
                h = (0, a.forwardRef)((e, t) => (0, i.jsx)(p, { forwardRef: t, ...e }));
        },
        32496: (e, t, r) => {
            'use strict';
            r.d(t, { n: () => n });
            var i = r(32290),
                o = r(63618),
                s = r(79856),
                a = r(2352),
                l = r.n(a);
            let n = (e) => {
                let { className: t, textClassName: r, isActive: a } = e;
                return (0, i.jsx)('div', { className: (0, o.$)(l().root, t), children: (0, i.jsx)(s.W, { className: (0, o.$)(l().text, r), isActive: a, radius: 's' }) });
            };
        },
        34274: (e) => {
            e.exports = { root: 'MultivibeNDA_root__Xmby8', text: 'MultivibeNDA_text__szNv7' };
        },
        42530: (e, t, r) => {
            'use strict';
            r.d(t, { b: () => c });
            var i = r(32290),
                o = r(63618),
                s = r(39407),
                a = r(71926),
                l = r(34274),
                n = r.n(l);
            let c = (e) => {
                let { className: t } = e;
                return (0, i.jsx)('span', {
                    className: (0, o.$)(n().root, t),
                    children: (0, i.jsx)(a.HL, { variant: 'span', size: 'm', weight: 'bold', className: n().text, children: (0, i.jsx)(s.A, { id: 'multivibe.nda' }) }),
                });
            };
        },
        46789: (e, t, r) => {
            'use strict';
            r.d(t, { K: () => h });
            var i = r(32290),
                o = r(92708),
                s = r(55178),
                a = r(60900),
                l = r(63380),
                n = r(45477),
                c = r(75582),
                d = r(57594),
                u = r(90357),
                _ = r(20472),
                m = r(97647),
                C = r(97755);
            let p = (e) => {
                    let { clip: t, closeToast: r } = e;
                    return (0, i.jsx)(C.O, {
                        entityVariant: m.c.CLIP,
                        entityTitle: t.title,
                        collectionUrl: _.Z.collectionClips.href,
                        isLiked: t.isLiked,
                        closeToast: r,
                        coverUri: t.thumbnail,
                    });
                },
                h = (e) => {
                    let { user: t, fullscreenVideoPlayer: r, collection: _ } = (0, d.g)(),
                        { notify: m } = (0, c.l)(),
                        [C, h] = (0, s.useState)(!1),
                        { formatMessage: v } = (0, a.A)();
                    return (0, s.useCallback)(async () => {
                        if (!e) return;
                        let s = r.modal.isOpened ? n.u.FULLSCREEN_INFO : n.u.INFO,
                            a = r.modal.isOpened ? n.u.FULLSCREEN_ERROR : n.u.ERROR;
                        if (!t.isAuthorized) return void m((0, i.jsx)(u.h, { error: v({ id: 'authorization-messages.need-to-authorizate' }) }), { containerId: a });
                        if (C) return;
                        let c = { ...(0, o.HO)(e), isLiked: !e.isLiked };
                        h(!0);
                        let d = await e.toggleLike();
                        (h(!1),
                            _.clips.reset(),
                            d === l.f.OK
                                ? m((0, i.jsx)(p, { clip: c }), { containerId: s })
                                : m((0, i.jsx)(u.h, { error: v({ id: 'error-messages.error-during-action' }) }), { containerId: a }));
                    }, [e, t.isAuthorized, C, v, m, r.modal.isOpened, _.clips]);
                };
        },
        49518: (e, t, r) => {
            'use strict';
            r.d(t, { $: () => x, D: () => v });
            var i = r(32290),
                o = r(63618),
                s = r(66988),
                a = r(55178),
                l = r(85472),
                n = r(99923),
                c = r(21732),
                d = r(75245),
                u = r(84782),
                _ = r(26042),
                m = r(19620),
                C = r(49522),
                p = r(23338),
                h = r.n(p),
                v = (function (e) {
                    return ((e.ONE = 'one'), (e.TWO = 'two'), e);
                })({});
            let f = (e) => {
                    let {
                            className: t,
                            forwardRef: r,
                            isShimmerVisible: p,
                            isColumnsShimmerVisible: v,
                            isHeaderWithoutControls: f,
                            maxColumnsCount: x,
                            carouselItemClassName: b,
                            carouselClassName: k,
                            children: A,
                            itemsCountPerColumn: w,
                            shimmer: j,
                            viewAllActionLink: N,
                            blockHeaderClassName: L,
                            additionalControl: I,
                            blockHeaderDescription: y,
                            blockHeaderTitle: T,
                            blockHeaderCoverUrl: g,
                            withBlockHeaderDescription: R,
                            withBlockHeaderCover: S,
                            blockHeaderHeadingVariant: O,
                            isShimmerActive: D,
                            shouldResetCarouselScroll: M,
                            beforeCarousel: P,
                            ...E
                        } = e,
                        { objectsCount: W } = (0, u.N)(),
                        [B, U] = (0, a.useState)(),
                        z = (0, a.useId)(),
                        K = (0, a.useRef)(null),
                        V = 'two' === x,
                        $ = 'string' == typeof N ? String(N) : void 0,
                        F = null != v ? v : p,
                        q = (0, a.useCallback)(
                            (e) => {
                                let t = (0, s.A)(e, w).slice(0, V ? 2 : 1);
                                return (
                                    1 === t.length ? U('one') : U('two'),
                                    t.map((e, t) => (0, i.jsx)('div', { className: h().column, 'data-test-id': c.S7.CAROUSEL_WITH_COLUMNS_BLOCK_COLUMN, children: e }, t))
                                );
                            },
                            [w, V],
                        ),
                        H = (0, a.useMemo)(() => {
                            if (F) return q(Array.from({ length: 2 * w }, (e, t) => (0, a.cloneElement)(j, { key: t })));
                            return q(A);
                        }, [A, q, F, w, j]),
                        Y = (0, a.useMemo)(
                            () =>
                                f
                                    ? null
                                    : (0, i.jsxs)('div', {
                                          className: h().controlsContainer,
                                          children: [I, (0, i.jsx)(C.X, { carouselRef: K, className: h().controls, backwardControlClassName: h().backwardControl })],
                                      }),
                            [I, f],
                        );
                    return (
                        (0, a.useEffect)(() => {
                            K.current && M && K.current.scrollTo(0, 0);
                        }, [M]),
                        (0, i.jsxs)('section', {
                            ref: r,
                            className: (0, o.$)(h().root, t),
                            ...(0, l.getDataAttrFromProps)(E),
                            children: [
                                (0, i.jsx)(_.B, {
                                    objectType: n.DomainObjectType.Shortcut,
                                    objectId: $,
                                    objectPosX: 0,
                                    objectPosY: 0,
                                    objectsCount: null != W ? W : 0,
                                    children: (0, i.jsx)(m.T, {
                                        coverUrl: g,
                                        title: T,
                                        description: y,
                                        className: L,
                                        labeledForId: z,
                                        viewAllActionLink: N,
                                        controls: Y,
                                        isShimmerVisible: p,
                                        isShimmerActive: D,
                                        withDescription: R,
                                        withCover: S,
                                        headingVariant: O,
                                    }),
                                }),
                                P,
                                (0, i.jsx)(d.F, {
                                    itemClassName: (0, o.$)(h().item, h()['item_columns_'.concat(F && V ? 'two' : B)], b),
                                    className: k,
                                    ref: K,
                                    'aria-labelledby': z,
                                    'data-test-id': c.S7.CAROUSEL_WITH_COLUMNS_BLOCK_CAROUSEL,
                                    children: H,
                                }),
                            ],
                        })
                    );
                },
                x = (0, a.forwardRef)((e, t) => (0, i.jsx)(f, { forwardRef: t, ...e }));
        },
        50819: (e, t, r) => {
            'use strict';
            r.d(t, { k: () => n });
            var i = r(32290),
                o = r(79856),
                s = r(32496),
                a = r(20541),
                l = r.n(a);
            let n = (e) => {
                let { isActive: t } = e;
                return (0, i.jsxs)('div', {
                    className: l().root,
                    'aria-live': t ? 'polite' : 'off',
                    'aria-busy': t,
                    children: [
                        (0, i.jsx)(o.W, { isActive: t, className: l().cover, radius: 'l' }),
                        (0, i.jsx)(s.n, { isActive: t, className: l().title }),
                        (0, i.jsx)(s.n, { isActive: t, className: l().text }),
                    ],
                });
            };
        },
        54667: (e, t, r) => {
            'use strict';
            r.d(t, { P: () => i, u: () => o });
            var i = (function (e) {
                    return ((e[(e.Mobile = 768)] = 'Mobile'), (e[(e.Desktop = 1440)] = 'Desktop'), e);
                })({}),
                o = (function (e) {
                    return ((e.Mobile = 'Mobile'), (e.Desktop = 'Desktop'), e);
                })({});
        },
        56755: (e, t, r) => {
            'use strict';
            r.d(t, { V: () => i });
            var i = (function (e) {
                return ((e.TRAILER = 'TRAILER'), (e.ADVERT = 'ADVERT'), (e.CLIP = 'CLIP'), (e.PROMO_LANDING = 'PROMO_LANDING'), e);
            })({});
        },
        56797: (e, t, r) => {
            'use strict';
            r.d(t, { _: () => h });
            var i = r(17811),
                o = r(99923),
                s = r(92146),
                a = r(74416),
                l = r(91027),
                n = r(79374),
                c = r(48922),
                d = r(84782),
                u = r(2792),
                _ = r(37240),
                m = r(51012),
                C = r(47498),
                p = r(62376);
            let h = (e) => {
                let t = (0, a.st)(),
                    { hash: r } = (0, a.gf)(),
                    { pageId: h } = (0, _.$)(),
                    { tabId: v, tabPos: f, isTabSelectedByDefault: x } = (0, C.R)(),
                    { skeleton: b } = (0, m.b)(),
                    { blockType: k, blockId: A, blockPosX: w, blockPosY: j, mainObjectType: N, mainObjectId: L } = (0, d.N)(),
                    { objectsCount: I, objectType: y, objectId: T, objectPosX: g, objectPosY: R } = (0, u.J)(),
                    S = (0, p.U)();
                return (0, l.c)(() => {
                    if (!t || !h || !c.xK.includes(h)) return;
                    let a = {
                        hash: r,
                        pageId: h,
                        entityType: k,
                        entityId: A,
                        entityPosX: w,
                        entityPosY: j,
                        objectId: T,
                        objectType: y,
                        objectPosX: g,
                        objectPosY: R,
                        objectsCount: I,
                        from: n.W[h],
                        to: o.AppScreen.VideoScreen,
                    };
                    (c.qG.includes(h) && ((a.tabId = v), (a.tabPos = f), (a.isTabSelectedByDefault = x)),
                        b && (a.skeletonId = b),
                        N && (a.mainObjectType = N),
                        L && (a.mainObjectId = L));
                    let l = (0, i.F)({ params: a, logger: S, context: 'useSendEventOnClipNavigated' });
                    l && e && (0, s.QS)(t.evgenInstance, l);
                });
            };
        },
        57223: (e, t, r) => {
            'use strict';
            r.d(t, { z: () => x });
            var i = r(32290),
                o = r(96103),
                s = r(60900),
                a = r(39407),
                l = r(21732),
                n = r(91027),
                c = r(82586),
                d = r(19740),
                u = r(46789),
                _ = r(20472),
                m = r(27120),
                C = r(57594),
                p = r(51675),
                h = r(89384),
                v = r(58237),
                f = r(4914);
            let x = (0, o.PA)((e) => {
                let { onOpenChange: t, open: r, placement: o, isFullscreenMobile: x = !1, icon: b, size: k, clip: A, ...w } = e,
                    { currentClipInfo: j, settings: N, user: L } = (0, C.g)(),
                    { formatMessage: I } = (0, s.A)(),
                    { shareLink: y, pathname: T } = (0, h.b)(_.Z.video.href, { query: { ids: String(A.clipId) } }),
                    g = x || N.isMobile;
                (0, m.N)(r);
                let R = (0, u.K)(A),
                    S = (0, n.c)(() => {
                        (j.setClipId(A.clipId), j.modal.open());
                    }),
                    O = { variant: p.Y.CLIP, id: A.clipId, title: A.title, path: T };
                return (0, i.jsxs)(d.W1, {
                    isMobile: g,
                    placement: o,
                    offsetOptions: -10,
                    open: r,
                    onOpenChange: t,
                    icon: b,
                    size: k,
                    containerDataTestId: l.Kq.clip.CLIP_CONTEXT_MENU,
                    ariaLabel: I({ id: 'interface-actions.context-menu' }),
                    variant: 'text',
                    ...w,
                    children: [
                        (0, i.jsx)(v.T, { onClick: R, isLiked: A.isLiked, disabled: !L.isAuthorized }),
                        (0, i.jsx)(f.H, { shareLink: y, entityMeta: O }),
                        (0, i.jsx)(d.Dr, {
                            onClick: S,
                            icon: (0, i.jsx)(c.I, { variant: 'info', size: 'xxs' }),
                            'data-test-id': l.Kq.clip.CLIP_CONTEXT_MENU_ABOUT_TRACK_BUTTON,
                            children: (0, i.jsx)(a.A, { id: 'track-modal.clip-title' }),
                        }),
                    ],
                });
            });
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
        63415: (e, t, r) => {
            'use strict';
            r.d(t, { H: () => i });
            var i = (function (e) {
                return ((e.VARIOUS_CLIP_CONTEXT = 'various-clip-context'), e);
            })({});
        },
        69951: (e, t, r) => {
            'use strict';
            r.d(t, { K: () => v });
            var i = r(32290),
                o = r(63618),
                s = r(96103),
                a = r(55178),
                l = r(21732),
                n = r(90169),
                c = r(57594),
                d = r(40229),
                u = r(43565),
                _ = r(8677),
                m = r(68912),
                C = r(92102),
                p = r(85673),
                h = r.n(p);
            let v = (0, s.PA)((e) => {
                var t;
                let {
                        track: r,
                        playContextParams: s,
                        className: p,
                        withDNDBlock: v,
                        isDragging: f,
                        draggingClassName: x,
                        ignoreDislikedStyles: b,
                        withSecondaryColor: k,
                        handleRemove: A,
                        withDislike: w,
                        withTrailer: j = !0,
                        beforeTitle: N,
                        removeButtonAriaLabel: L,
                        hideControls: I,
                    } = e,
                    y = (0, n.D)({ playContextParams: s, entityId: r.entityId }),
                    {
                        settings: { isMobile: T },
                    } = (0, c.g)(),
                    g = (0, a.useCallback)(
                        (e) =>
                            (0, i.jsx)(d.q, {
                                isAvailable: r.isAvailable,
                                isDisliked: r.isDisliked,
                                coverUri: r.coverUri,
                                title: r.title,
                                className: h().playButtonCell,
                                ignoreDislikedStyles: b,
                                radius: 'xs',
                                ...e,
                            }),
                        [b, r.coverUri, r.isAvailable, r.isDisliked, r.title],
                    );
                return (0, i.jsx)(C.C, {
                    className: (0, o.$)(p, { [h().trackWithDots]: v, [h().important]: v }),
                    track: r,
                    beforeBlock: v ? (0, i.jsx)(u.O, { className: (0, o.$)(h().dots, x), isDragging: f }) : void 0,
                    meta: (0, i.jsx)(m.j, { withArtistLink: !T, beforeTitle: N, track: r, ignoreDislikedStyles: b, withSecondaryColor: k }),
                    playButtonCellRender: g,
                    controls: (0, i.jsx)(_.Q, {
                        track: r,
                        className: h().controlsBarCell,
                        ignoreDislikedStyles: b,
                        utmLink: null == (t = s.contextData) ? void 0 : t.utmLink,
                        withSecondaryColor: k,
                        handleRemove: A,
                        withDislike: w,
                        withTrailer: j,
                        removeButtonAriaLabel: L,
                        hideControls: I,
                    }),
                    ...y,
                    'data-test-id': l.Kq.track.TRACK_PLAYLIST,
                });
            });
        },
        73325: (e, t, r) => {
            'use strict';
            r.d(t, { X: () => o });
            var i = r(19383);
            let o = (e) => {
                let { clip: t, callback: r, disclaimerRejectHandler: o } = e;
                return (0, i.l)({ entity: t, callback: r, onReject: o, modalBehavior: { closeOnOutside: !1, closeOnEscape: !1 }, preventDefaultWhenSafe: !0 });
            };
        },
        81448: (e, t, r) => {
            'use strict';
            r.d(t, { q: () => n });
            var i = r(32290),
                o = r(63618),
                s = r(79856),
                a = r(23708),
                l = r.n(a);
            let n = (e) => {
                let { className: t, shimmerClassName: r, isActive: a = !1, count: n = 10, minWidth: c = 50, maxWidth: d = 90, multiplicity: u = 1 } = e;
                return (0, i.jsx)('div', {
                    className: (0, o.$)(l().root, t),
                    children: Array.from({ length: n }, (e, t) => {
                        let n = ''.concat(((e, t, r) => Math.floor((Math.floor(Math.random() * (t - e + 1)) + e) / r) * r)(c, d, u), '%');
                        return (0, i.jsx)(s.W, { width: n, className: (0, o.$)(l().shimmer, r), isActive: a, radius: 's' }, t);
                    }),
                });
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
    },
]);
