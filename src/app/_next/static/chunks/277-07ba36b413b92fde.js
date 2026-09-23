(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [277],
    {
        50: (e, t, i) => {
            'use strict';
            i.d(t, { D: () => a, W: () => n });
            var r = i(55178);
            let a = (0, r.createContext)({ theme: null, setTheme: () => {} }),
                n = () => (0, r.useContext)(a);
        },
        356: (e) => {
            e.exports = {
                message: 'NotificationDislike_message__RoxZH',
                text: 'NotificationDislike_text__fJHts',
                cover: 'NotificationDislike_cover__N5Oqu',
                image: 'NotificationDislike_image__jn4_4',
            };
        },
        5942: (e, t, i) => {
            'use strict';
            i.d(t, { K: () => h });
            var r = i(32290),
                a = i(92708),
                n = i(55178),
                s = i(60900),
                o = i(63380),
                l = i(45477),
                c = i(75582),
                d = i(57594),
                u = i(90357),
                _ = i(20472),
                m = i(97647),
                v = i(97755);
            let p = (e) => {
                    let { artist: t, closeToast: i } = e;
                    return (0, r.jsx)(v.O, {
                        closeToast: i,
                        entityVariant: m.c.ARTIST,
                        entityUrl: t.url,
                        collectionUrl: _.Z.collectionArtists.href,
                        coverUri: t.coverUri,
                        entityTitle: t.name,
                        isLiked: t.isLiked,
                    });
                },
                h = (e) => {
                    let { user: t } = (0, d.g)(),
                        { notify: i } = (0, c.l)(),
                        [_, m] = (0, n.useState)(!1),
                        { formatMessage: v } = (0, s.A)();
                    return (0, n.useCallback)(async () => {
                        if (!e) return;
                        if (!t.isAuthorized)
                            return void i((0, r.jsx)(u.h, { error: v({ id: 'authorization-messages.need-to-authorizate' }) }), { containerId: l.u.ERROR });
                        if (_) return;
                        let n = { ...(0, a.HO)(e), isLiked: !e.isLiked };
                        m(!0);
                        let s = await e.toggleLike();
                        (m(!1),
                            s === o.f.OK
                                ? i((0, r.jsx)(p, { artist: n }), { containerId: l.u.INFO })
                                : i((0, r.jsx)(u.h, { error: v({ id: 'error-messages.error-during-action' }) }), { containerId: l.u.ERROR }));
                    }, [e, t.isAuthorized, _, v, i]);
                };
        },
        7474: (e, t, i) => {
            'use strict';
            i.d(t, { a: () => U });
            var r = i(32290),
                a = i(63618),
                n = i(96103),
                s = i(55178),
                o = i(60900),
                l = i(99923),
                c = i(21732),
                d = i(71483),
                u = i(91027),
                _ = i(6752),
                m = i(14934),
                v = i(82586),
                p = i(86269),
                h = i(71926),
                x = i(91853),
                f = i(5942),
                C = i(70390),
                g = i(71735),
                y = i(47745),
                b = i(2969),
                k = i(54391),
                T = i(23352),
                A = i(72396),
                j = i(5537),
                N = i(32641),
                I = i(28999),
                L = i(90169),
                P = i(57594),
                R = i(11323),
                S = i(92744),
                O = i(61258),
                E = i(10180),
                w = i(90326),
                B = i(29268),
                M = i(34925),
                D = i(80528),
                z = i(42048),
                V = i.n(z);
            let U = (0, n.PA)((e) => {
                let { artist: t, className: i, children: n, contentLinesCount: z, topTitleElement: U, bottomTitleElement: K } = e,
                    { ref: H, intersectionPropertyId: $ } = (0, T.n)(),
                    {
                        trailer: F,
                        user: W,
                        paywall: { modal: q },
                    } = (0, P.g)(),
                    { from: Y, utmLink: X } = (0, A.f)({ contextId: t.id, contextType: d.K.Artist }),
                    { formatMessage: G } = (0, o.A)(),
                    [Q, Z] = (0, s.useState)(!1),
                    [J, ee] = (0, s.useState)(!1),
                    [et, ei] = (0, s.useState)(!1),
                    { sendLikeSearchFeedback: er, sendNavigateSearchFeedback: ea, sendPlaySearchFeedback: en } = (0, I.z)(),
                    es = (0, y.N)(),
                    eo = (0, b.b)(),
                    el = (0, f.K)(t),
                    ec = (0, C.A)(t),
                    { id: ed, name: eu, coverUri: e_, isLiked: em } = t,
                    ev = (0, N.Z)(t.url),
                    [ep, eh] = (0, s.useState)(!1),
                    ex = (0, k.F)(),
                    ef = (0, g.P)(),
                    eC = (0, u.c)((e) => {
                        if ((e.stopPropagation(), ef())) return void e.preventDefault();
                        (F.openArtistTrailer(t.id), ex(l.DomainObjectType.Artist, t.id));
                    }),
                    eg = (0, s.useMemo)(() => {
                        let e = G({ id: 'entity-names.artist-name' }, { artistName: eu }),
                            t = em ? G({ id: 'entity-names.has-your-like' }) : '';
                        return ''.concat(e, ' ').concat(t);
                    }, [eu, em, G]),
                    { isPlaying: ey, togglePlay: eb } = (0, L.D)({
                        playContextParams: { contextData: { type: d.K.Artist, meta: { id: Number(ed) }, from: Y, utmLink: X }, loadContextMeta: !0 },
                    }),
                    ek = (0, x.S)({ artist: t, callback: ev }),
                    eT = (0, x.S)({ artist: t, callback: eb }),
                    eA = (0, u.c)((e) => {
                        (null == ea || ea(), es({ to: l.AppScreen.ArtistScreen }), ek(e));
                    }),
                    ej = (0, j.N)(),
                    eN = (0, u.c)(() => {
                        if (!ef()) {
                            if (ej) return void q.open();
                            (Q || ey || (Z(!0), null == en || en()), eT(), eo(!ey));
                        }
                    }),
                    eI = (0, u.c)(() => {
                        (J || em || (ee(!0), null == er || er()), el());
                    }),
                    eL = (0, u.c)((e) => {
                        (e.preventDefault(), e.stopPropagation());
                    }),
                    eP = (0, u.c)((e) => {
                        (ei(e), eh(e));
                    }),
                    eR = (0, s.useMemo)(
                        () =>
                            (0, r.jsx)(
                                D.g,
                                {
                                    artist: t,
                                    onOpenChange: eP,
                                    open: et,
                                    onClick: eL,
                                    className: (0, a.$)(V().menuButton, V().control),
                                    size: 's',
                                    icon: (0, r.jsx)(v.I, { size: 'xxs', variant: 'more' }),
                                    'data-test-id': c.Kq.artist.ARTIST_CONTEXT_MENU_BUTTON,
                                },
                                t.getKey('ArtistContextMenu'),
                            ),
                        [t, eL, eP, et],
                    ),
                    eS = (0, s.useMemo)(() => {
                        var e;
                        if (null == t || null == (e = t.trailer) ? void 0 : e.isAvailable)
                            return (0, r.jsx)(
                                M.n,
                                {
                                    children: (0, r.jsx)(B.k, {
                                        className: (0, a.$)(V().trailerButton, V().control),
                                        radius: 'round',
                                        size: 's',
                                        iconSize: 'xxs',
                                        onClick: eC,
                                    }),
                                },
                                t.getKey('ArtistCardTrailerTooltip'),
                            );
                    }, [t, eC]),
                    eO = (0, s.useMemo)(
                        () =>
                            (0, r.jsx)(
                                E.O,
                                { onClick: ec, isPinned: t.isPinned, className: (0, a.$)(V().pinButton, V().control), withRipple: !1 },
                                t.getKey('PinButton'),
                            ),
                        [t, ec],
                    ),
                    eE = (0, _.L)(() => {
                        if (t.isAvailable)
                            return (0, r.jsx)(
                                m.hg,
                                {
                                    isVisible: et || ep,
                                    className: V().controls,
                                    radius: 'round',
                                    playControl: (0, r.jsx)(
                                        w.D,
                                        {
                                            buttonVariant: 'default',
                                            withHover: !1,
                                            className: (0, a.$)(V().playButton, V().control),
                                            iconSize: 'xl',
                                            variant: 'filled',
                                            onClick: eN,
                                            isPlaying: ey,
                                            disabled: !t.isAvailableForPlaying,
                                        },
                                        t.getKey('PlayButton'),
                                    ),
                                    likeControl: (0, r.jsx)(
                                        S.c,
                                        {
                                            className: (0, a.$)(V().likeButton, V().control),
                                            isLiked: em,
                                            onClick: eI,
                                            variant: 'default',
                                            size: 's',
                                            iconSize: 'xxs',
                                            disabled: !W.isAuthorized,
                                        },
                                        t.getKey('LikeButton'),
                                    ),
                                    menuControl: eR,
                                    pinControl: eO,
                                    trailerControl: eS,
                                },
                                t.getKey('ArtistCardControls'),
                            );
                    }),
                    ew = (0, s.useMemo)(
                        () =>
                            (0, r.jsx)(p.t, {
                                className: V().cover,
                                radius: 'round',
                                withShadow: !0,
                                'data-test-id': c.Kq.artist.ARTIST_CARD,
                                children: (0, r.jsxs)('div', {
                                    className: V().coverBlock,
                                    onClick: eA,
                                    children: [
                                        (0, r.jsx)(R.B, {
                                            className: V().image,
                                            src: e_,
                                            size: 200,
                                            fit: 'cover',
                                            alt: eg,
                                            withAvatarReplace: !0,
                                            isAvailable: t.isAvailable,
                                            'aria-hidden': !0,
                                        }),
                                        eE,
                                    ],
                                }),
                            }),
                        [eA, e_, eg, t.isAvailable, eE],
                    );
                return (0, r.jsx)(m.MN, {
                    ref: H,
                    className: (0, a.$)(V().root, i),
                    textPosition: 'center',
                    'aria-label': eg,
                    title: (0, r.jsxs)(r.Fragment, {
                        children: [
                            U,
                            (0, r.jsx)(h.HL, {
                                variant: 'div',
                                type: 'entity',
                                size: 's',
                                weight: 'medium',
                                lineClamp: 2,
                                children: (0, r.jsx)(O.N, {
                                    className: V().titleLink,
                                    href: t.url,
                                    'aria-label': eg,
                                    onClick: eA,
                                    'data-test-id': c.Kq.artist.ARTIST_TITLE,
                                    children: eu,
                                }),
                            }),
                            K,
                        ],
                    }),
                    srTitle: (0, r.jsx)(O.N, { href: t.url, onClick: eA, children: eg }),
                    'data-intersection-property-id': $,
                    contentLinesCount: z,
                    view: ew,
                    'data-test-id': c.Kq.artist.ARTIST_ITEM,
                    children: n,
                });
            });
        },
        11260: (e, t, i) => {
            'use strict';
            i.d(t, { L: () => g });
            var r = i(32290),
                a = i(96103),
                n = i(55178),
                s = i(60900),
                o = i(39407),
                l = i(54862),
                c = i(63423),
                d = i(82586),
                u = i(70280),
                _ = i(71926),
                m = i(83920),
                v = i(59518),
                p = i(34284),
                h = i(46151),
                x = i(68104),
                f = i.n(x);
            let C = { width: 20, height: 8, tipRadius: 2, fill: 'var(--ym-background-color-primary-enabled-tooltip)' },
                g = (0, a.PA)((e) => {
                    let { children: t, customMessage: i, shouldForceOpenTooltip: a } = e,
                        { formatMessage: x } = (0, s.A)(),
                        { contentRef: g } = (0, m.g)(),
                        { setIsOnboardingOpened: y } = (0, h.w)(),
                        [b, k] = (0, l.d)(),
                        T = (0, p.z)({ id: v.h.TRAILER_BUTTON, ref: b }) || !!a,
                        [A, j] = (0, n.useState)(T),
                        N = (0, n.useCallback)(
                            (e) => {
                                (null == e || e.stopPropagation(), j(!1), y(!1));
                            },
                            [y],
                        ),
                        I = (0, n.useCallback)(
                            (e) => {
                                e || N();
                            },
                            [N],
                        );
                    return (0, r.jsxs)(u.m_, {
                        placement: 'bottom',
                        arrowProps: C,
                        offsetOptions: 14,
                        isHoverEnabled: !1,
                        open: A,
                        onOpenChange: I,
                        enableAriaDescribedby: !0,
                        referenceRef: k,
                        children: [
                            t,
                            (0, r.jsxs)(u.ZI, {
                                className: f().root,
                                rootNode: g,
                                children: [
                                    (0, r.jsx)(c.$, {
                                        icon: (0, r.jsx)(d.I, { variant: 'close', size: 'xxs' }),
                                        onClick: N,
                                        variant: 'text',
                                        className: f().close,
                                        withRipple: !1,
                                        'aria-label': x({ id: 'interface-actions.close' }),
                                    }),
                                    (0, r.jsx)(_.HL, {
                                        variant: 'span',
                                        className: f().text,
                                        children: i || (0, r.jsx)(o.A, { id: 'onboarding.trailer', values: { br: (0, r.jsx)('br', {}) } }),
                                    }),
                                ],
                            }),
                        ],
                    });
                });
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
        13882: (e, t, i) => {
            'use strict';
            i.d(t, { h: () => s });
            var r = i(32290),
                a = i(55178),
                n = i(9848);
            let s = (e) => {
                let { tabId: t, tabPos: i, children: s, isTabSelectedByDefault: o } = e,
                    l = (0, a.useMemo)(() => ({ tabId: t, tabPos: i, isTabSelectedByDefault: o }), [t, i, o]);
                return (0, r.jsx)(n.F.Provider, { value: l, children: s });
            };
        },
        13931: (e, t, i) => {
            'use strict';
            i.d(t, { r: () => n });
            var r = i(55178),
                a = i(60900);
            let n = (e) => {
                let { formatMessage: t } = (0, a.A)();
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
        14257: (e, t, i) => {
            'use strict';
            i.d(t, { S: () => r });
            var r = (function (e) {
                return ((e.Dark = 'dark'), (e.Light = 'light'), e);
            })({});
        },
        19529: (e, t, i) => {
            'use strict';
            i.d(t, { n: () => d });
            var r = i(32290),
                a = i(63618),
                n = i(52138),
                s = i(6752),
                o = i(40229),
                l = i(75487),
                c = i.n(l);
            let d = (e) => {
                let {
                        agent: t,
                        isPlaying: i,
                        isCurrent: l,
                        onPlayButtonClick: d,
                        shouldShowControl: u = !0,
                        playButtonIconSize: _,
                        alt: m,
                        className: v,
                        coverClassName: p,
                        entityCoverClassName: h,
                        controlClassName: x,
                        fallbackIconSize: f,
                    } = e,
                    C = (0, s.L)(() => {
                        if (t.entityType) return t.entityType === n.h.ARTIST ? 'round' : 'xs';
                    });
                return (0, r.jsx)(o.q, {
                    isAvailable: !0,
                    coverUri: t.cover.uri,
                    className: (0, a.$)(c().root, c()['root_radius_'.concat(C)], { [c().root_withShadow]: !!t.entityType }, v),
                    radius: C,
                    onPlayButtonClick: d,
                    isPlaying: i,
                    isCurrent: l,
                    alt: m,
                    withLoadingIndicator: !1,
                    shouldShowControl: u,
                    playButtonIconSize: _,
                    fallbackIconSize: f,
                    coverClassName: p,
                    entityCoverClassName: h,
                    controlClassName: x,
                });
            };
        },
        19620: (e, t, i) => {
            'use strict';
            i.d(t, { T: () => C });
            var r = i(32290),
                a = i(63618),
                n = i(55178),
                s = i(99923),
                o = i(21732),
                l = i(82586),
                c = i(50162),
                d = i(86269),
                u = i(79856),
                _ = i(71926),
                m = i(95481),
                v = i(47745),
                p = i(61258),
                h = i(69e3),
                x = i.n(h);
            let f = (e) => {
                    let {
                            className: t,
                            coverUrl: i,
                            labeledForId: h,
                            subTitle: f,
                            title: C,
                            description: g,
                            viewAllActionLink: y,
                            controls: b,
                            titleSize: k = 'm',
                            coverBackgroundColor: T,
                            coverRadius: A = 's',
                            titleClassName: j,
                            titleLineClamp: N,
                            fallbackIconVariant: I,
                            available: L = !0,
                            onViewAllAction: P,
                            titleChildren: R,
                            children: S,
                            headingRef: O,
                            coverContainerClassName: E,
                            headingVariant: w = 'h3',
                            withDescriptionWidthLimit: B = !0,
                            isShimmerVisible: M,
                            isShimmerActive: D,
                            withCover: z,
                            withDescription: V,
                            forwardRef: U,
                            shimmerCoverClassName: K,
                            shouldSendAnalyticsOnLoaded: H,
                            ...$
                        } = e,
                        F = (0, m.f)(),
                        W = (0, n.useRef)(null),
                        q = i || z,
                        Y = g || V,
                        X = (0, n.useCallback)(() => {
                            W.current && 'focus' in W.current && W.current.focus();
                        }, []),
                        G = (0, v.N)(),
                        Q = (0, n.useCallback)(() => {
                            P ? P() : G({ to: s.AppScreen.Link });
                        }, [G, P]);
                    (0, n.useEffect)(() => {
                        H && F();
                    }, [H, F]);
                    let Z = (0, n.useMemo)(
                            () =>
                                C && y && L
                                    ? (0, r.jsxs)(p.N, {
                                          className: x().title,
                                          containerClassName: x().linkContainer,
                                          textClassName: x().linkText,
                                          icon: (0, r.jsx)(l.I, { className: x().titleIcon, size: 'xs', variant: 'arrowRight' }),
                                          iconPosition: 'right',
                                          href: y,
                                          onClick: Q,
                                          'data-test-id': o.S7.BLOCK_HEADER_TITLE,
                                          children: [
                                              (0, r.jsx)(_.DZ, {
                                                  id: h,
                                                  className: (0, a.$)(x().heading, j),
                                                  variant: w,
                                                  size: k,
                                                  weight: 'bold',
                                                  lineClamp: N,
                                                  ref: O,
                                                  children: C,
                                              }),
                                              R,
                                          ],
                                      })
                                    : (0, r.jsxs)('div', {
                                          className: x().title,
                                          children: [
                                              (0, r.jsx)(_.DZ, {
                                                  id: h,
                                                  className: (0, a.$)(x().heading, j, { [x().heading_notAvailable]: !L }),
                                                  variant: w,
                                                  size: k,
                                                  weight: 'bold',
                                                  lineClamp: N,
                                                  ref: O,
                                                  'data-test-id': o.S7.BLOCK_HEADER_TITLE,
                                                  children: C,
                                              }),
                                              R,
                                          ],
                                      }),
                            [L, Q, O, w, h, C, j, N, k, y, R],
                        ),
                        J = (0, n.useMemo)(() => (V && M ? (0, r.jsx)(u.W, { isActive: D, className: x().shimmerDescription }) : g), [V, M, g, D]),
                        ee = (0, n.useMemo)(
                            () =>
                                z && M
                                    ? (0, r.jsx)(u.W, { isActive: D, className: (0, a.$)(x().shimmerCover, K), radius: 's' })
                                    : (0, r.jsx)(c._V, {
                                          src: i,
                                          fallbackIconVariant: I,
                                          style: { backgroundColor: T },
                                          className: x().cover,
                                          ref: W,
                                          onClick: X,
                                          fit: 'cover',
                                          withAvatarReplace: !0,
                                          fallbackIconSize: 's',
                                          'aria-hidden': !0,
                                          'data-test-id': o.S7.BLOCK_HEADER_COVER,
                                      }),
                            [T, i, I, X, D, M, K, z],
                        );
                    return (0, r.jsxs)('div', {
                        className: (0, a.$)(x().root, t),
                        ref: U,
                        ...$,
                        'data-test-id': o.S7.BLOCK_HEADER,
                        children: [
                            (0, r.jsxs)('div', {
                                className: x().start,
                                children: [
                                    q && (0, r.jsx)(d.t, { radius: A, className: (0, a.$)(x().coverContainer, E), children: ee }),
                                    (0, r.jsxs)('div', {
                                        className: x().textContainer,
                                        children: [
                                            f,
                                            Z,
                                            Y &&
                                                (0, r.jsx)(_.HL, {
                                                    id: ''.concat(h, '-description'),
                                                    variant: 'span',
                                                    type: 'text',
                                                    size: 'm',
                                                    weight: 'medium',
                                                    lineClamp: B ? 2 : void 0,
                                                    className: (0, a.$)(x().description, { [x().description_widthLimit]: B }),
                                                    'data-test-id': o.S7.BLOCK_HEADER_DESCRIPTION,
                                                    children: J,
                                                }),
                                        ],
                                    }),
                                ],
                            }),
                            b || S,
                        ],
                    });
                },
                C = (0, n.forwardRef)((e, t) => (0, r.jsx)(f, { forwardRef: t, ...e }));
        },
        20982: (e, t, i) => {
            'use strict';
            i.d(t, { K: () => a });
            var r = i(55985);
            let a = (e) => {
                var t;
                if (e) return { animationUri: e.animationUri, cover: (0, r.p)(e.cover), entityType: null == (t = e.entity) ? void 0 : t.type };
            };
        },
        26042: (e, t, i) => {
            'use strict';
            i.d(t, { B: () => s });
            var r = i(32290),
                a = i(55178),
                n = i(10936);
            let s = (e) => {
                let { objectId: t, objectPosX: i, objectPosY: s, objectPos: o, objectType: l, objectsCount: c, mainObjectId: d, mainObjectType: u, children: _ } = e,
                    m = (0, a.useMemo)(
                        () => ({ objectId: t, objectPosX: i, objectPosY: s, objectPos: o, objectType: l, objectsCount: c, mainObjectId: d, mainObjectType: u }),
                        [t, i, s, o, l, c, d, u],
                    );
                return (0, r.jsx)(n.l.Provider, { value: m, children: _ });
            };
        },
        28099: (e) => {
            e.exports = {
                root: 'VibeCardView_root__bt_Xt',
                root_loading: 'VibeCardView_root_loading__J8fOe',
                cover: 'VibeCardView_cover__fBDH_',
                cover_round: 'VibeCardView_cover_round__LPs63',
                cover_square: 'VibeCardView_cover_square__C45qF',
                cover_loading: 'VibeCardView_cover_loading__kpdrp',
                shimmer: 'VibeCardView_shimmer__Rp6yh',
                shimmer_loading: 'VibeCardView_shimmer_loading__74dZm',
                animation: 'VibeCardView_animation__x3VEI',
                image: 'VibeCardView_image__5fXOh',
            };
        },
        30564: (e, t, i) => {
            'use strict';
            i.d(t, { k: () => n });
            var r = i(32290),
                a = i(89020);
            let n = function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                return Array.from({ length: 9 }, (t, i) => (0, r.jsx)(a.V, { ...e }, i));
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
        34284: (e, t, i) => {
            'use strict';
            i.d(t, { z: () => c });
            var r = i(55178),
                a = i(42406),
                n = i(70204),
                s = i(34186),
                o = i(59576),
                l = i(46151);
            let c = (e) => {
                var t;
                let { id: i, ref: c } = e,
                    { config: d, isOnboardingOpened: u, setIsOnboardingOpened: _ } = (0, l.w)(),
                    m = (0, r.useRef)(!1),
                    v = (0, a.BL)([{ current: c }], !c),
                    { isIntersecting: p } = null != (t = v[o.N]) ? t : {},
                    h = (0, s.N)().get(n.U2);
                for (let { id: e, storageKey: t, enabled: a } of ((0, r.useEffect)(() => {
                    if (m.current && p) {
                        let e = d.find((e) => {
                            let { id: t } = e;
                            return t === i;
                        });
                        e && h.set(e.storageKey, !0, { expires: e.expires });
                    }
                }, [d, i, p, h, v, c]),
                d)) {
                    let r = h.get(t);
                    if (a) {
                        if (null == u ? void 0 : u.current) return !1;
                        if (i === e) {
                            if (r) return !1;
                            return ((m.current = !0), _(!0), !0);
                        }
                        if (!r) break;
                    }
                }
                return !1;
            };
        },
        37445: (e, t, i) => {
            'use strict';
            i.d(t, { s: () => j });
            var r = i(32290),
                a = i(90040),
                n = i(57249),
                s = i(63618),
                o = i(96103),
                l = i(65493),
                c = i(55178),
                d = i(21732),
                u = i(52138),
                _ = i(91027),
                m = i(6752),
                v = i(44989),
                p = i(50162),
                h = i(79856),
                x = i(50),
                f = i(85472);
            let C = (e, t, i) => {
                let r = (r) => {
                    let a = (r + e / 30) % 12,
                        n = t * Math.min(i, 1 - i);
                    return i - n * Math.max(-1, Math.min(a - 3, 9 - a, 1));
                };
                return [r(0), r(8), r(4)];
            };
            var g = i(14257);
            let y = function (e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                    i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 100;
                return Math.min(i, Math.max(t, e)) / 100;
            };
            var b = i(28099),
                k = i.n(b),
                T = i(49124);
            let A = l.default.default(
                () =>
                    Promise.resolve()
                        .then(i.bind(i, 90040))
                        .then((e) => e.DotLottieWorkerReact),
                { ssr: !1 },
            );
            {
                let e = T.env.USE_CDN_FOR_STATIC ? 'https://yastatic-net.ru/s3/music-frontend-static/music/vundefined' : window.location.origin;
                (0, a.setWasmUrl)(new URL(n, e).href);
            }
            let j = (0, o.PA)((e) => {
                let { agent: t, isPlaying: i } = e,
                    [a, n] = (0, c.useState)(null),
                    { state: o, toggleTrue: l } = (0, v.e)(!1),
                    { state: b, toggleTrue: T, toggleFalse: j } = (0, v.e)(!1),
                    { theme: N } = (0, x.W)(),
                    I = (0, c.useRef)(null),
                    L = t.entityType === u.h.ARTIST,
                    P = t.entityType === u.h.ALBUM || t.entityType === u.h.TRACK || t.entityType === u.h.PLAYLIST,
                    R = t.cover.color,
                    S = t.cover.uri,
                    O = (0, _.c)(async () => {
                        if (o && R && N) {
                            j();
                            let {
                                    color: e,
                                    glow1: i,
                                    glow2: r,
                                } = ((e) => {
                                    let { averageColor: t, theme: i, custom: r } = e,
                                        { h: a, s: n, l: s } = (0, f.hexToHsl)(t);
                                    if (r) {
                                        if (i === g.S.Dark) {
                                            let e = y(n + 5, 50, 100);
                                            return { color: C(a, e, y(s - 40, 12, 25)), glow1: C(a, e, y(s - 5, 45, 60)), glow2: C(a, e, y(s + 35, 80, 90)) };
                                        }
                                        let e = y(n - 2, 50, 100);
                                        return { color: C(a, e, y(s + 43, 80, 95)), glow1: C(a, e, y(s + 5, 45, 75)), glow2: C(a, e, y(s, 35, 55)) };
                                    }
                                    return { color: C(a, (n > 25 ? Math.min(n + 25, 60) : n) / 100, (s > 20 ? Math.min(s + 15, 60) : s) / 100) };
                                })({ averageColor: R, theme: N, custom: !t.entityType }),
                                n = JSON.stringify({
                                    rules: [
                                        { id: 'color', type: 'Color', value: e },
                                        { id: 'glow_1', type: 'Color', value: i },
                                        { id: 'glow_2', type: 'Color', value: r },
                                    ],
                                });
                            (await (null == a ? void 0 : a.setThemeData(n)), T());
                        }
                    }),
                    E = (0, _.c)(() => {
                        (l(), O());
                    });
                ((0, c.useEffect)(() => {
                    i ? null == a || a.play() : null == a || a.pause();
                }, [a, i]),
                    (0, c.useEffect)(() => {
                        O();
                    }, [R, O, N, o]),
                    (0, c.useEffect)(() => {
                        if (a)
                            return (
                                a.setUseFrameInterpolation(!1),
                                a.setRenderConfig({ devicePixelRatio: 0.1 }),
                                a.addEventListener('load', E),
                                () => {
                                    a.removeEventListener('load', E);
                                }
                            );
                    }, [a, E]));
                let w = !o || !b,
                    B = (0, m.L)(() => {
                        if (!I.current) return;
                        let e = L ? 0.029 : 0.036;
                        return { '--blur-size': ''.concat(I.current.clientWidth * e, 'px') };
                    });
                return (0, r.jsxs)('div', {
                    ref: I,
                    className: (0, s.$)(k().root, { [k().root_loading]: w }),
                    style: B,
                    'data-test-id': w ? d.OA.vibe.VIBE_AGENT_LOADING_CARD : void 0,
                    children: [
                        (0, r.jsxs)('div', {
                            className: (0, s.$)(k().cover, { [k().cover_round]: L, [k().cover_square]: P, [k().cover_loading]: w }),
                            children: [
                                t.entityType &&
                                    S &&
                                    (0, r.jsx)(p._V, { src: S, size: 200, fit: 'cover', withAvatarReplace: !0, className: k().image, withLoadingIndicator: !1 }),
                                (0, r.jsx)(A, { src: t.animationUri, loop: !0, dotLottieRefCallback: n, className: k().animation }),
                            ],
                        }),
                        (0, r.jsx)(h.W, { className: (0, s.$)(k().shimmer, { [k().shimmer_loading]: w }), isActive: !0, radius: L ? 'round' : 'm' }),
                    ],
                });
            });
        },
        37852: (e) => {
            e.exports = { root: 'TextField_root__RO2Hk', root_textarea: 'TextField_root_textarea__N0PF_', root_outline: 'TextField_root_outline__8JfQF' };
        },
        38819: (e) => {
            e.exports = {
                root: 'NotificationPin_root__DBEub',
                view: 'NotificationPin_view__daGc_',
                image: 'NotificationPin_image__o5F7B',
                multivibeContainer: 'NotificationPin_multivibeContainer__ZbXhn',
                multivibeCover: 'NotificationPin_multivibeCover__n_5EZ',
                multivibeAvatar: 'NotificationPin_multivibeAvatar__4P5gm',
                multivibeControl: 'NotificationPin_multivibeControl__iOOyQ',
            };
        },
        42048: (e) => {
            e.exports = {
                root: 'ArtistCard_root__x67BK',
                controls: 'ArtistCard_controls__jsqqI',
                cover: 'ArtistCard_cover__29ShU',
                coverBlock: 'ArtistCard_coverBlock__dBL4x',
                image: 'ArtistCard_image__pONJx',
                titleLink: 'ArtistCard_titleLink__G8Puz',
                playButton: 'ArtistCard_playButton__XZoTr',
                likeButton: 'ArtistCard_likeButton__LU9TL',
                menuButton: 'ArtistCard_menuButton__EynXG',
                pinButton: 'ArtistCard_pinButton__G_VOi',
                trailerButton: 'ArtistCard_trailerButton__a2NHm',
                control: 'ArtistCard_control___qv5j',
            };
        },
        44989: (e, t, i) => {
            'use strict';
            i.d(t, { e: () => l });
            var r,
                a = i(55178),
                n = {
                    810: (e) => {
                        e.exports = r || (r = i.t(a, 2));
                    },
                },
                s = {},
                o = {};
            ((() => {
                (Object.defineProperty(o, '__esModule', { value: !0 }), (o.useToggle = void 0));
                let e = (function e(t) {
                    var i = s[t];
                    if (void 0 !== i) return i.exports;
                    var r = (s[t] = { exports: {} });
                    return (n[t](r, r.exports, e), r.exports);
                })(810);
                o.useToggle = (t) => {
                    let [i, r] = (0, e.useState)(t);
                    (0, e.useEffect)(() => {
                        r(t);
                    }, [t]);
                    let a = (0, e.useCallback)(() => {
                            r((e) => !e);
                        }, []),
                        n = (0, e.useCallback)(() => {
                            r(!0);
                        }, []),
                        s = (0, e.useCallback)(() => {
                            r(!1);
                        }, []);
                    return { state: i, toggle: a, setState: r, toggleTrue: n, toggleFalse: s };
                };
            })(),
                o.__esModule);
            var l = o.useToggle;
        },
        45807: (e, t, i) => {
            'use strict';
            i.d(t, { Y: () => d });
            var r,
                a = i(95716),
                n = i(55178),
                s = {
                    352: (e) => {
                        e.exports = a;
                    },
                    810: (e) => {
                        e.exports = r || (r = i.t(n, 2));
                    },
                },
                o = {};
            function l(e) {
                var t = o[e];
                if (void 0 !== t) return t.exports;
                var i = (o[e] = { exports: {} });
                return (s[e](i, i.exports, l), i.exports);
            }
            var c = {};
            ((() => {
                (Object.defineProperty(c, 'X', { value: !0 }), (c.l = void 0));
                let e = l(810),
                    t = l(352);
                c.l = (i) => {
                    let [r, a] = (0, e.useState)(!0),
                        [n, s] = (0, e.useState)(!0),
                        o = () => {
                            let e = null == i ? void 0 : i.current;
                            e && (a(0 === e.scrollLeft), s(e.scrollWidth - e.scrollLeft <= e.offsetWidth + 10));
                        };
                    ((0, e.useEffect)(() => {
                        o();
                    }, [i, o]),
                        (0, e.useEffect)(() => {
                            let e = null == i ? void 0 : i.current;
                            return (
                                null == e || e.addEventListener('scroll', o),
                                window.addEventListener('resize', o),
                                () => {
                                    (null == e || e.removeEventListener('scroll', o), window.removeEventListener('resize', o));
                                }
                            );
                        }, [i, o]));
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
                        shouldForwardButtonBeDisabled: n,
                        shouldHideControls: r && n,
                    };
                };
            })(),
                c.X);
            var d = c.l;
        },
        46151: (e, t, i) => {
            'use strict';
            i.d(t, { d: () => a, w: () => n });
            var r = i(55178);
            let a = (0, r.createContext)({ config: [], isOnboardingOpened: null, setIsOnboardingOpened: () => {} }),
                n = () => (0, r.useContext)(a);
        },
        49522: (e, t, i) => {
            'use strict';
            i.d(t, { X: () => _ });
            var r = i(32290),
                a = i(63618),
                n = i(55178),
                s = i(21732),
                o = i(45807),
                l = i(63423),
                c = i(82586),
                d = i(60178),
                u = i.n(d);
            let _ = (e) => {
                let {
                        carouselRef: t,
                        backwardControlClassName: i,
                        forwardControlClassName: d,
                        className: _,
                        withSecondaryColor: m,
                        buttonSize: v = 'xxxs',
                        buttonVariant: p = 'outline',
                    } = e,
                    { swipeBackward: h, swipeForward: x, shouldBackwardButtonBeDisabled: f, shouldForwardButtonBeDisabled: C, shouldHideControls: g } = (0, o.Y)(t),
                    y = (0, n.useCallback)(
                        (e) => {
                            (h(), e.stopPropagation());
                        },
                        [h],
                    ),
                    b = (0, n.useCallback)(
                        (e) => {
                            (x(), e.stopPropagation());
                        },
                        [x],
                    );
                return (0, r.jsxs)('div', {
                    className: (0, a.$)(u().root, _),
                    'data-test-id': s.S7.CAROUSEL_CONTROLS,
                    children: [
                        (0, r.jsx)(l.$, {
                            tabIndex: -1,
                            'aria-hidden': !0,
                            className: (0, a.$)(u().control, i, { [u().control_hidden]: g, [u().control_withSecondaryColor]: m }),
                            onClick: y,
                            size: v,
                            radius: 'round',
                            variant: p,
                            withRipple: !1,
                            icon: (0, r.jsx)(c.I, { size: 'xxs', variant: 'arrowLeft' }),
                            disabled: f,
                            'data-test-id': s.S7.CAROUSEL_CONTROLS_BACKWARD_BUTTON,
                        }),
                        (0, r.jsx)(l.$, {
                            tabIndex: -1,
                            'aria-hidden': !0,
                            className: (0, a.$)(u().control, d, { [u().control_hidden]: g, [u().control_withSecondaryColor]: m }),
                            onClick: b,
                            size: v,
                            radius: 'round',
                            variant: p,
                            withRipple: !1,
                            icon: (0, r.jsx)(c.I, { size: 'xxs', variant: 'arrowRight' }),
                            disabled: C,
                            'data-test-id': s.S7.CAROUSEL_CONTROLS_FORWARD_BUTTON,
                        }),
                    ],
                });
            };
        },
        52138: (e, t, i) => {
            'use strict';
            var r;
            (i.d(t, { h: () => r }),
                (function (e) {
                    ((e.ALBUM = 'album'), (e.PLAYLIST = 'playlist'), (e.TRACK = 'track'), (e.ARTIST = 'artist'));
                })(r || (r = {})));
        },
        55985: (e, t, i) => {
            'use strict';
            i.d(t, { p: () => a });
            var r = i(60754);
            let a = (e) => (0, r.wg)({ uri: e.uri, color: e.color });
        },
        59518: (e, t, i) => {
            'use strict';
            i.d(t, { h: () => r });
            var r = (function (e) {
                return ((e.ARTIST_DONATION_BUTTON = 'artist_donation_button'), (e.TRAILER_BUTTON = 'trailer_button'), (e.CONCERTS_TAB = 'concerts_tab'), e);
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
        64089: (e, t, i) => {
            'use strict';
            i.d(t, { A: () => j });
            var r = i(32290),
                a = i(92708),
                n = i(55178),
                s = i(60900),
                o = i(90404),
                l = i(45477),
                c = i(75582),
                d = i(57594),
                u = i(90357),
                _ = i(63618),
                m = i(96103),
                v = i(21732),
                p = i(6752),
                h = i(50162),
                x = i(79406),
                f = i(8322),
                C = i(97647),
                g = i(8097),
                y = i(19529),
                b = i(38819),
                k = i.n(b);
            let T = (0, m.PA)((e) => {
                let { vibe: t, closeToast: i } = e,
                    { experiments: a } = (0, d.g)(),
                    n = a.checkExperiment(x.z.WebNextWaveAgentExperiment, 'on'),
                    s = t.type === f.q7,
                    o = (0, p.L)(() => {
                        var e;
                        return n && t.agent
                            ? (0, r.jsx)(y.n, {
                                  agent: t.agent,
                                  shouldShowControl: !1,
                                  className: (0, _.$)(k().view, { [k().multivibeContainer]: s }),
                                  coverClassName: (0, _.$)({ [k().multivibeCover]: s }),
                                  entityCoverClassName: (0, _.$)({ [k().multivibeAvatar]: s }),
                                  controlClassName: (0, _.$)({ [k().multivibeControl]: s }),
                              })
                            : (0, r.jsx)(h._V, {
                                  className: k().image,
                                  src: t.backgroundImageUrl,
                                  size: 100,
                                  fit: 'cover',
                                  withAvatarReplace: !0,
                                  'aria-hidden': !0,
                                  style: { backgroundColor: null == (e = t.colors) ? void 0 : e.average },
                                  withLoadingIndicator: !1,
                                  'data-test-id': v.S7.BASE_NOTIFICATION_PIN_VIBE_COVER,
                              });
                    }),
                    l = n && t.agent ? void 0 : 'round';
                return (0, r.jsx)(g.k, {
                    closeToast: i,
                    entityVariant: C.c.VIBE,
                    entityTitle: t.title,
                    entityDescription: t.getDescription(),
                    isPinned: t.isPinned,
                    customCover: o,
                    radius: l,
                    className: k().root,
                });
            });
            var A = i(20982);
            let j = (e) => {
                let { user: t, pinsCollection: i } = (0, d.g)(),
                    { notify: _ } = (0, c.l)(),
                    { formatMessage: m } = (0, s.A)(),
                    [v, p] = (0, n.useState)(!1);
                return (0, n.useCallback)(async () => {
                    if (!e) return;
                    if (!t.isAuthorized) return void _((0, r.jsx)(u.h, { error: m({ id: 'authorization-messages.need-to-authorizate' }) }), { containerId: l.u.ERROR });
                    if (v) return;
                    let n = { ...(0, a.HO)(e), isPinned: !e.isPinned, getDescription: e.getDescription },
                        s = i.get(e.pinId);
                    p(!0);
                    let c = await e.togglePin();
                    (p(!1),
                        s &&
                            s.type === o._.WAVE_ITEM &&
                            s.data.backgroundImageUrl &&
                            ((n.backgroundImageUrl = s.data.backgroundImageUrl), (n.colors = s.data.colors), (n.agent = s.data.agent)),
                        c &&
                            'object' == typeof c &&
                            'data' in c &&
                            (c.data.backgroundImageUrl && (n.backgroundImageUrl = c.data.backgroundImageUrl),
                            c.data.colors && (n.colors = { average: c.data.colors.average, waveText: c.data.colors.waveText }),
                            c.data.agent && (n.agent = (0, A.K)(c.data.agent))),
                        c
                            ? _((0, r.jsx)(T, { vibe: n }), { containerId: l.u.INFO })
                            : _((0, r.jsx)(u.h, { error: m({ id: 'error-messages.error-during-action' }) }), { containerId: l.u.ERROR }));
                }, [m, _, v, i, t.isAuthorized, e]);
            };
        },
        68104: (e) => {
            e.exports = { root: 'TrailerOnboarding_root__I3fd0', text: 'TrailerOnboarding_text__HU4RO', close: 'TrailerOnboarding_close__ywMIK' };
        },
        68912: (e, t, i) => {
            'use strict';
            i.d(t, { j: () => A });
            var r = i(32290),
                a = i(63618),
                n = i(96103),
                s = i(21916),
                o = i(55178),
                l = i(60900),
                c = i(39407),
                d = i(21732),
                u = i(70280),
                _ = i(71926),
                m = i(41677),
                v = i(28999),
                p = i(57594),
                h = i(53514),
                x = i(85017),
                f = i(13798),
                C = i(61258),
                g = i(25649),
                y = i(24760),
                b = i(84141),
                k = i(5856),
                T = i.n(k);
            let A = (0, n.PA)((e) => {
                let {
                        className: t,
                        titleContainerClassName: i,
                        track: n,
                        albumArtists: k,
                        withExplicitMark: A = !0,
                        withSecondaryColor: j,
                        captionSize: N = 'm',
                        explicitSize: I = 'xxxs',
                        withAllArtistsTitle: L,
                        textClassName: P,
                        artistsClassName: R,
                        ignoreDislikedStyles: S,
                        withCustomTooltip: O = !0,
                        hasLineClamp: E = !0,
                        withSavingQueryParams: w,
                        beforeTitle: B,
                        withArtistLink: M = !0,
                        withTrackLink: D = !0,
                        afterTitle: z,
                        withContextMenuArtists: V,
                    } = e,
                    { formatMessage: U } = (0, l.A)(),
                    { sendNavigateSearchFeedback: K } = (0, v.z)(),
                    {
                        settings: { isMobile: H },
                    } = (0, p.g)(),
                    $ = (0, y.$)({ withCustomTooltip: O }),
                    F = (0, s.useSearchParams)(),
                    W = n.getUrl(w ? Object.fromEntries(F) : void 0),
                    q = (0, o.useMemo)(() => {
                        var e;
                        let t = U({ id: 'entity-names.track-name' }, { trackName: n.title });
                        return ''.concat(t, ' ').concat(null != (e = n.version) ? e : '');
                    }, [U, n.title, n.version]),
                    Y = (0, b.O)({ track: n, onNavigate: K, withSavingQueryParams: w, entityType: x.n.TRACK }),
                    X = (0, o.useCallback)(
                        (e) => {
                            let t = ''.concat(n.title, ' ').concat(!n.isRemoved && n.version ? n.version : '');
                            return (0, r.jsx)(u.m_, {
                                enabled: $ && !H,
                                offsetOptions: 4,
                                placement: 'top',
                                text: t,
                                hoverSettings: h.V,
                                children: (0, r.jsx)(_.HL, {
                                    className: (0, a.$)(T().text, T().title),
                                    type: 'entity',
                                    size: N,
                                    weight: 'medium',
                                    variant: 'span',
                                    ...e,
                                    children: n.title,
                                }),
                            });
                        },
                        [H, $, N, n.isRemoved, n.title, n.version],
                    ),
                    G = (0, o.useMemo)(() => {
                        let e = ''.concat(n.title, ' ').concat(!n.isRemoved && n.version ? n.version : '');
                        return n.isRemoved
                            ? (0, r.jsx)(u.m_, {
                                  enabled: $ && !H,
                                  offsetOptions: 4,
                                  placement: 'top',
                                  text: U({ id: 'track-title.error-not-found' }),
                                  hoverSettings: h.V,
                                  children: (0, r.jsx)(_.HL, {
                                      className: (0, a.$)(T().text, T().title),
                                      type: 'entity',
                                      size: N,
                                      weight: 'medium',
                                      variant: 'span',
                                      title: $ ? void 0 : U({ id: 'track-title.error-not-found' }),
                                      children: (0, r.jsx)(c.A, { id: 'track-title.error-not-found' }),
                                  }),
                              })
                            : n.hasTrackLink && D
                              ? (0, r.jsx)(C.N, {
                                    onClick: Y,
                                    className: T().albumLink,
                                    href: W,
                                    'aria-label': q,
                                    title: $ ? void 0 : e,
                                    'data-test-id': d.Kq.track.TRACK_TITLE,
                                    children: X(),
                                })
                              : X({ 'data-test-id': d.Kq.track.TRACK_TITLE });
                    }, [H, n.title, n.isRemoved, n.version, n.hasTrackLink, X, $, U, N, q, Y, W, D]),
                    Q = (0, g.s)(n.artists, k),
                    Z = (0, o.useMemo)(() => +!!E, [E]);
                return (0, r.jsx)('div', {
                    className: (0, a.$)(T().root, { [T().root_disabled]: !n.isAvailable, [T().root_disliked]: n.isDisliked && !S, [T().root_withSecondaryColor]: j }, t),
                    children: (0, r.jsxs)('div', {
                        className: T().metaContainer,
                        children: [
                            (0, r.jsxs)('div', {
                                className: (0, a.$)(T().titleContainer, { [T().titleContainer_withVersion]: n.version }, i),
                                children: [
                                    (0, r.jsxs)(_.HL, {
                                        className: (0, a.$)(T().text, P),
                                        type: 'entity',
                                        size: N,
                                        weight: 'medium',
                                        variant: 'div',
                                        lineClamp: 1,
                                        children: [
                                            B,
                                            G,
                                            !n.isRemoved &&
                                                n.version &&
                                                (0, r.jsxs)(_.HL, {
                                                    className: (0, a.$)(T().text, T().version),
                                                    type: 'entity',
                                                    size: N,
                                                    weight: 'medium',
                                                    variant: 'span',
                                                    title: $ ? void 0 : n.version,
                                                    'data-test-id': d.Kq.track.TRACK_VERSION,
                                                    children: ['\xa0', n.version],
                                                }),
                                        ],
                                    }),
                                    n.explicitDisclaimer &&
                                        A &&
                                        (0, r.jsx)(f.N, {
                                            containerClassName: T().explicitMarkContainer,
                                            getDescriptionTexts: n.getDescriptionTexts,
                                            size: I,
                                            variant: n.explicitDisclaimer,
                                            className: T().explicitMark,
                                            trackId: n.id,
                                        }),
                                    z,
                                ],
                            }),
                            Q.length > 0 &&
                                (0, r.jsx)(m.i, {
                                    className: (0, a.$)(T().text, { [T().artists]: E }, R, P),
                                    withAllArtistsTitle: L,
                                    linkClassName: (0, a.$)(T().text, T().link),
                                    captionClassName: (0, a.$)(T().text, T().artistCaption),
                                    artists: Q,
                                    withLink: n.isNonUserGenerated && M,
                                    lineClamp: Z,
                                    captionSize: N,
                                    withContextMenu: V,
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
        70390: (e, t, i) => {
            'use strict';
            i.d(t, { A: () => v });
            var r = i(32290),
                a = i(92708),
                n = i(55178),
                s = i(60900),
                o = i(45477),
                l = i(75582),
                c = i(57594),
                d = i(90357),
                u = i(97647),
                _ = i(8097);
            let m = (e) => {
                    let { artist: t, closeToast: i } = e;
                    return (0, r.jsx)(_.k, {
                        closeToast: i,
                        entityVariant: u.c.ARTIST,
                        coverUri: t.coverUri,
                        entityUrl: t.url,
                        entityTitle: t.name,
                        isPinned: t.isPinned,
                        radius: 'round',
                    });
                },
                v = (e) => {
                    let { user: t } = (0, c.g)(),
                        { notify: i } = (0, l.l)(),
                        { formatMessage: u } = (0, s.A)(),
                        [_, v] = (0, n.useState)(!1);
                    return (0, n.useCallback)(async () => {
                        if (!e) return;
                        if (!t.isAuthorized)
                            return void i((0, r.jsx)(d.h, { error: u({ id: 'authorization-messages.need-to-authorizate' }) }), { containerId: o.u.ERROR });
                        if (_) return;
                        let n = { ...(0, a.HO)(e), isPinned: !e.isPinned };
                        v(!0);
                        let s = await e.togglePin();
                        (v(!1),
                            s
                                ? i((0, r.jsx)(m, { artist: n }), { containerId: o.u.INFO })
                                : i((0, r.jsx)(d.h, { error: u({ id: 'error-messages.error-during-action' }) }), { containerId: o.u.ERROR }));
                    }, [e, t.isAuthorized, _, u, i]);
                };
        },
        71079: (e, t, i) => {
            'use strict';
            i.d(t, { Q: () => x });
            var r = i(32290),
                a = i(96103),
                n = i(55178),
                s = i(99923),
                o = i(90404),
                l = i(24170),
                c = i(7474),
                d = i(83460),
                u = i(85305),
                _ = i(95481),
                m = i(26042),
                v = i(8626),
                p = i(98148);
            let h = (0, a.PA)((e) => {
                    var t;
                    let {
                            forwardRef: i,
                            isShimmerVisible: a,
                            isShimmerActive: h,
                            containerClassName: x,
                            headerClassName: f,
                            meta: C,
                            data: g,
                            headingVariant: y,
                            className: b,
                            isLoaded: k,
                            shouldSendAnalyticsOnLoaded: T,
                            hasSentAnalyticsOnLoaded: A,
                            setHasSentAnalyticsOnLoaded: j,
                            ...N
                        } = e,
                        I = (0, _.f)();
                    return (
                        (0, n.useEffect)(() => {
                            T && !A && k && (I(), j(!0));
                        }, [A, k, I, j, T]),
                        (0, r.jsx)(p.O, {
                            className: b,
                            ...N,
                            isShimmerVisible: a,
                            isShimmerActive: h,
                            containerClassName: x,
                            headerClassName: f,
                            title: C.title,
                            description: C.description,
                            viewAllActionLink: C.viewAllActionLink,
                            ref: i,
                            headingVariant: y,
                            children:
                                null == g || null == (t = g.items)
                                    ? void 0
                                    : t.map((e, t) => {
                                          switch (e.type) {
                                              case o._.LIKED_PLAYLIST_ITEM:
                                                  return (0, r.jsx)(
                                                      m.B,
                                                      {
                                                          objectType: s.DomainObjectType.Playlist,
                                                          objectId: e.data.id,
                                                          objectPosX: t + 1,
                                                          objectPosY: 1,
                                                          objectsCount: g.items.length,
                                                          children: (0, r.jsx)(d.B, { playlist: e.data, contentLinesCount: 3 }),
                                                      },
                                                      e.data.key,
                                                  );
                                              case o._.ALBUM_ITEM:
                                                  return (0, r.jsx)(
                                                      m.B,
                                                      {
                                                          objectType: s.DomainObjectType.Album,
                                                          objectId: String(e.data.id),
                                                          objectPosX: t + 1,
                                                          objectPosY: 1,
                                                          objectsCount: g.items.length,
                                                          children: (0, r.jsx)(l.a, { album: e.data, contentLinesCount: 3, releaseDateFormatter: v.m }),
                                                      },
                                                      e.data.id,
                                                  );
                                              case o._.ARTIST_ITEM:
                                                  return (0, r.jsx)(
                                                      m.B,
                                                      {
                                                          objectType: s.DomainObjectType.Artist,
                                                          objectId: String(e.data.id),
                                                          objectPosX: t + 1,
                                                          objectPosY: 1,
                                                          objectsCount: g.items.length,
                                                          children: (0, r.jsx)(c.a, { artist: e.data, contentLinesCount: 3 }),
                                                      },
                                                      e.data.id,
                                                  );
                                              case o._.WAVE_AGENT_ITEM:
                                                  return (0, r.jsx)(
                                                      m.B,
                                                      {
                                                          objectType: s.DomainObjectType.Wave,
                                                          objectId: e.data.stationId,
                                                          objectPosX: t + 1,
                                                          objectPosY: 1,
                                                          objectsCount: g.items.length,
                                                          children: (0, r.jsx)(u.y, { vibe: e.data }),
                                                      },
                                                      e.data.stationId,
                                                  );
                                              case o._.PLAYLIST_ITEM:
                                                  return (0, r.jsx)(
                                                      m.B,
                                                      {
                                                          objectType: s.DomainObjectType.Playlist,
                                                          objectId: e.data.id,
                                                          objectPosX: t + 1,
                                                          objectPosY: 1,
                                                          objectsCount: g.items.length,
                                                          children: (0, r.jsx)(d.B, { playlist: e.data, contentLinesCount: 3 }),
                                                      },
                                                      e.data.key,
                                                  );
                                              case o._.QUERY_TO_VIBE_ITEM:
                                                  return (0, r.jsx)(n.Fragment, {}, e.data.stationId);
                                          }
                                      }),
                        })
                    );
                }),
                x = (0, n.forwardRef)((e, t) => (0, r.jsx)(h, { forwardRef: t, ...e }));
        },
        71610: (e, t, i) => {
            'use strict';
            i.d(t, { j: () => l });
            var r = i(32290),
                a = i(55178),
                n = i(27576),
                s = i(42406),
                o = i(80536);
            let l = (e) => {
                let { children: t } = e,
                    i = (0, a.useRef)({}),
                    l = (0, a.useRef)(
                        (0, s.Gv)(
                            (e) => {
                                let t = (0, s.L5)(e.target),
                                    r = i.current[t];
                                if (r) {
                                    if (e.isIntersecting) {
                                        let e = window.setTimeout(() => {
                                            let e = String((0, n.A)());
                                            (r.callback(!0, e), (r.showed = !0), (r.viewUuid = e));
                                        }, 1e3);
                                        r.timerId = e;
                                    }
                                    (!e.isIntersecting && r.showed && (r.callback(!1, r.viewUuid), (r.showed = !1), (r.viewUuid = '')),
                                        e.isIntersecting || window.clearTimeout(r.timerId));
                                }
                            },
                            { threshold: 0.8 },
                        ),
                    ),
                    c = (0, a.useCallback)((e) => {
                        var t;
                        !i.current[e.elementId] &&
                            e.elementRef.current &&
                            (null == (t = l.current) || t.observe(e.elementRef.current), (i.current[e.elementId] = { showed: !1, viewUuid: '', callback: e.callback }));
                    }, []),
                    d = (0, a.useCallback)((e) => {
                        let t = i.current[e];
                        t && (t.showed && t.callback(!1, t.viewUuid), delete i.current[e]);
                    }, []);
                (0, a.useEffect)(
                    () => () => {
                        var e;
                        return null == (e = l.current) ? void 0 : e.disconnect();
                    },
                    [],
                );
                let u = (0, a.useMemo)(() => ({ observeElement: c, unobserveElement: d }), [c, d]);
                return (0, r.jsx)(o.B.Provider, { value: u, children: t });
            };
        },
        73141: (e, t, i) => {
            'use strict';
            i.d(t, { K: () => p });
            var r = i(32290),
                a = i(92708),
                n = i(55178),
                s = i(60900),
                o = i(63380),
                l = i(45477),
                c = i(75582),
                d = i(57594),
                u = i(90357),
                _ = i(97647),
                m = i(97755);
            let v = (e) => {
                    let { playlist: t, closeToast: i } = e;
                    return (0, r.jsx)(m.O, {
                        entityVariant: _.c.PLAYLIST,
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
                        [_, m] = (0, n.useState)(!1),
                        { formatMessage: p } = (0, s.A)();
                    return (0, n.useCallback)(async () => {
                        if (!t.isAuthorized)
                            return void i((0, r.jsx)(u.h, { error: p({ id: 'authorization-messages.need-to-authorizate' }) }), { containerId: l.u.ERROR });
                        if (_) return;
                        let n = { ...(0, a.HO)(e), url: e.url, isLiked: !e.isLiked };
                        m(!0);
                        let s = await e.toggleLike();
                        (m(!1),
                            s === o.f.OK
                                ? i((0, r.jsx)(v, { playlist: n }), { containerId: l.u.INFO })
                                : i((0, r.jsx)(u.h, { error: p({ id: 'error-messages.error-during-action' }) }), { containerId: l.u.ERROR }));
                    }, [t.isAuthorized, _, e, p, i]);
                };
        },
        73192: (e, t, i) => {
            'use strict';
            i.d(t, { A: () => v });
            var r = i(32290),
                a = i(92708),
                n = i(55178),
                s = i(60900),
                o = i(45477),
                l = i(75582),
                c = i(57594),
                d = i(90357),
                u = i(97647),
                _ = i(8097);
            let m = (e) => {
                    let { playlist: t, closeToast: i } = e;
                    return (0, r.jsx)(_.k, {
                        closeToast: i,
                        entityVariant: u.c.PLAYLIST,
                        entityUrl: t.url,
                        coverUri: t.coverUri,
                        entityTitle: t.title,
                        isPinned: t.isPinned,
                        radius: 's',
                    });
                },
                v = (e) => {
                    let { user: t } = (0, c.g)(),
                        { notify: i } = (0, l.l)(),
                        { formatMessage: u } = (0, s.A)(),
                        [_, v] = (0, n.useState)(!1);
                    return (0, n.useCallback)(async () => {
                        if (!t.isAuthorized)
                            return void i((0, r.jsx)(d.h, { error: u({ id: 'authorization-messages.need-to-authorizate' }) }), { containerId: o.u.ERROR });
                        if (_) return;
                        let n = { ...(0, a.HO)(e), url: e.url, isPinned: !e.isPinned };
                        v(!0);
                        let s = await e.togglePin();
                        (v(!1),
                            s
                                ? i((0, r.jsx)(m, { playlist: n }), { containerId: o.u.INFO })
                                : i((0, r.jsx)(d.h, { error: u({ id: 'error-messages.error-during-action' }) }), { containerId: o.u.ERROR }));
                    }, [t.isAuthorized, _, e, i, u]);
                };
        },
        75245: (e, t, i) => {
            'use strict';
            i.d(t, { F: () => c });
            var r,
                a = i(55178),
                n = {
                    5881: (e, t, i) => {
                        function r() {
                            for (var e, t, i = 0, r = ''; i < arguments.length;)
                                (e = arguments[i++]) &&
                                    (t = (function e(t) {
                                        var i,
                                            r,
                                            a = '';
                                        if ('string' == typeof t || 'number' == typeof t) a += t;
                                        else if ('object' == typeof t)
                                            if (Array.isArray(t)) for (i = 0; i < t.length; i++) t[i] && (r = e(t[i])) && (a && (a += ' '), (a += r));
                                            else for (i in t) t[i] && (a && (a += ' '), (a += i));
                                        return a;
                                    })(e)) &&
                                    (r && (r += ' '), (r += t));
                            return r;
                        }
                        (i.r(t), i.d(t, { clsx: () => r, default: () => a }));
                        let a = r;
                    },
                    2876: (e, t, i) => {
                        (i.r(t), i.d(t, { default: () => r }));
                        let r = { root: 'IZnFMW4gXBshJODnvB1P', item: 'VJ9IexhAEuYSCyGiMfN4' };
                    },
                    9097: (e, t) => {
                        var i = Symbol.for('react.transitional.element');
                        function r(e, t, r) {
                            var a = null;
                            if ((void 0 !== r && (a = '' + r), void 0 !== t.key && (a = '' + t.key), 'key' in t))
                                for (var n in ((r = {}), t)) 'key' !== n && (r[n] = t[n]);
                            else r = t;
                            return { $$typeof: i, type: e, key: a, ref: void 0 !== (t = r.ref) ? t : null, props: r };
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
                        let a = i(4377),
                            n = i(5881),
                            s = i(810),
                            o = r(i(2876)),
                            l = (e) => {
                                let { className: t, itemClassName: i, children: r, forwardRef: l, role: c, ...d } = e;
                                return (0, a.jsx)('ol', {
                                    ref: l,
                                    className: (0, n.clsx)(o.default.root, t),
                                    ...d,
                                    role: null != c ? c : 'list',
                                    children: s.Children.map(r, (e) => (0, a.jsx)('li', { className: (0, n.clsx)(o.default.item, i), children: e })),
                                });
                            };
                        t.Carousel = (0, s.forwardRef)((e, t) => (0, a.jsx)(l, { forwardRef: t, ...e }));
                    },
                    810: (e) => {
                        e.exports = r || (r = i.t(a, 2));
                    },
                },
                s = {};
            function o(e) {
                var t = s[e];
                if (void 0 !== t) return t.exports;
                var i = (s[e] = { exports: {} });
                return (n[e].call(i.exports, i, i.exports, o), i.exports);
            }
            ((o.d = (e, t) => {
                for (var i in t) o.o(t, i) && !o.o(e, i) && Object.defineProperty(e, i, { enumerable: !0, get: t[i] });
            }),
                (o.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
                (o.r = (e) => {
                    ('undefined' != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
                        Object.defineProperty(e, '__esModule', { value: !0 }));
                }));
            var l = {};
            (() => {
                (Object.defineProperty(l, 'X', { value: !0 }), (l.l = void 0));
                var e = o(4014);
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
        75487: (e) => {
            e.exports = {
                root: 'VibeSmallView_root__6IYFM',
                root_radius_xs: 'VibeSmallView_root_radius_xs__hrEG3',
                root_radius_round: 'VibeSmallView_root_radius_round__t4uAR',
                root_withShadow: 'VibeSmallView_root_withShadow__HU7NP',
            };
        },
        80528: (e, t, i) => {
            'use strict';
            i.d(t, { g: () => Q });
            var r = i(32290),
                a = i(96103),
                n = i(60900),
                s = i(99923),
                o = i(21732),
                l = i(71483),
                c = i(91027),
                d = i(82586),
                u = i(19740),
                _ = i(92708),
                m = i(55178),
                v = i(63380),
                p = i(45477),
                h = i(75582),
                x = i(57594),
                f = i(90357),
                C = i(86269),
                g = i(74196),
                y = i(71926),
                b = i(58534),
                k = i(11323),
                T = i(356),
                A = i.n(T);
            let j = (e) => {
                let { coverUri: t, title: i, isDisliked: a, closeToast: s } = e,
                    { formatMessage: o } = (0, n.A)(),
                    l = o(a ? { id: 'notifications-info.artist-unavailable-in-recommendations' } : { id: 'notifications-info.artist-available-in-recommendations' });
                return (0, r.jsx)(b.$, {
                    closeToast: s,
                    message: (0, r.jsxs)('div', {
                        className: A().message,
                        children: [
                            (0, r.jsx)(g.q, { children: (0, r.jsx)('p', { role: 'alert', 'aria-label': l }) }),
                            (0, r.jsx)(C.t, {
                                className: A().cover,
                                radius: 'round',
                                children: (0, r.jsx)(k.B, { className: A().image, src: t, alt: i, size: 100, fit: 'cover', withAvatarReplace: !0 }),
                            }),
                            (0, r.jsx)(y.HL, { className: A().text, variant: 'div', type: 'controls', size: 'm', 'aria-hidden': !0, children: l }),
                        ],
                    }),
                });
            };
            var N = i(5942),
                I = i(70390),
                L = i(9017),
                P = i(65477),
                R = i(71735),
                S = i(37862),
                O = i(48922),
                E = i(54391),
                w = i(72396),
                B = i(46200),
                M = i(27120),
                D = i(43564),
                z = i(95134),
                V = i(79406),
                U = i(51675),
                K = i(48027),
                H = i(89384),
                $ = i(38223),
                F = i(58237),
                W = i(56367),
                q = i(4914),
                Y = i(83755),
                X = i(25160),
                G = i(4008);
            let Q = (0, a.PA)((e) => {
                var t, i, a;
                let { artist: C, onOpenChange: g, open: y, ...b } = e,
                    { shouldShowBuySubscriptionModal: k, showBuySubscriptionModal: T } = (0, B.q)(),
                    {
                        settings: { isMobile: A },
                        modals: { artistAboutModal: Q },
                        trailer: Z,
                        user: J,
                        experiments: ee,
                    } = (0, x.g)(),
                    et = (0, I.A)(C),
                    ei = (0, N.K)(C),
                    er = ((e) => {
                        let { user: t } = (0, x.g)(),
                            { notify: i } = (0, h.l)(),
                            [a, s] = (0, m.useState)(!1),
                            { formatMessage: o } = (0, n.A)();
                        return (0, c.c)(async () => {
                            if (!e) return;
                            if (!t.isAuthorized)
                                return void i((0, r.jsx)(f.h, { error: o({ id: 'authorization-messages.need-to-authorizate' }) }), { containerId: p.u.ERROR });
                            if (a) return;
                            let n = { ...(0, _.HO)(e), isDisliked: !e.isDisliked };
                            s(!0);
                            let l = await e.toggleDislike();
                            (s(!1),
                                l === v.f.OK
                                    ? i((0, r.jsx)(j, { coverUri: n.coverUri, title: n.name, isDisliked: n.isDisliked }), { containerId: p.u.INFO })
                                    : i((0, r.jsx)(f.h, { error: o({ id: 'error-messages.error-during-action' }) }), { containerId: p.u.ERROR }));
                        });
                    })(C),
                    ea = (0, E.F)(),
                    en = ''.concat(S.U.ARTIST, '-').concat(null == C ? void 0 : C.id),
                    { formatMessage: es } = (0, n.A)(),
                    { utmLink: eo } = (0, w.f)({ blockId: S.U.ARTIST, contextType: l.K.Artist, contextId: null == C ? void 0 : C.id }),
                    { shareLink: el, pathname: ec } = (0, H.b)('/artist/:artistId', { params: { artistId: null != (i = null == C ? void 0 : C.id) ? i : '' } }),
                    ed = (0, L.A)({ entityVariant: z.D.ARTIST, urlParams: { id: null == C ? void 0 : C.id } }),
                    { isPlaying: eu, togglePlay: e_ } = (0, D.B)({
                        seeds: null != (a = null == C ? void 0 : C.seeds) ? a : [],
                        pageIdForFrom: O._Q.RADIO,
                        blockIdForFrom: en,
                        parentContextId: null == C ? void 0 : C.id,
                    }),
                    em = (0, R.P)(),
                    ev = es((null == C ? void 0 : C.isComposer) ? { id: 'artist.about-composer' } : { id: 'artist.about-artist' }),
                    ep = (0, c.c)(() => {
                        if (k && J.isAuthorized) return void T();
                        eu || e_();
                    }),
                    eh = (0, c.c)(() => {
                        if (!em()) {
                            if (k) return void T();
                            (null == C ? void 0 : C.id) && (Z.setUtmLink(eo), Z.openArtistTrailer(C.id), ea(s.DomainObjectType.Artist, C.id));
                        }
                    }),
                    ex = (0, c.c)(() => {
                        Q.open(null == C ? void 0 : C.id);
                    });
                (0, M.N)(y);
                let ef = { variant: U.Y.ARTIST, id: null == C ? void 0 : C.id, title: null == C ? void 0 : C.name, path: ec },
                    eC = ee.checkExperiment(V.z.WebEditorsFeatures, 'on'),
                    eg = null == C || null == (t = C.trailer) ? void 0 : t.isAvailable,
                    ey = ee.checkExperiment(V.z.WebNextArtistInfo, 'on');
                return (0, r.jsxs)(u.W1, {
                    isMobile: A,
                    offsetOptions: 10,
                    open: y,
                    onOpenChange: g,
                    ariaLabel: es({ id: 'interface-actions.context-menu' }),
                    containerDataTestId: o.Kq.artist.ARTIST_CONTEXT_MENU,
                    ...b,
                    children: [
                        eC && (0, r.jsx)(G.WithOffline, { fallback: (0, r.jsx)(P.d, { entityVariant: z.D.ARTIST, adminUrl: ed }) }),
                        !A && (0, r.jsx)(G.WithOffline, { fallback: (0, r.jsx)(W.L, { onClick: et, isPinned: null == C ? void 0 : C.isPinned }) }),
                        (0, r.jsx)(G.WithOffline, {
                            fallback: (0, r.jsx)(F.T, {
                                onClick: ei,
                                isLiked: null == C ? void 0 : C.isLiked,
                                disabled: !J.isAuthorized || !(null == C ? void 0 : C.isAvailable),
                            }),
                        }),
                        eg && (0, r.jsx)(G.WithOffline, { fallback: (0, r.jsx)(Y.N, { onClick: eh }) }),
                        (0, r.jsx)(G.WithOffline, {
                            fallback: (0, r.jsx)(X.C, { onClick: ep, disabled: !(null == C ? void 0 : C.isAvailable), variant: K.I.ARTIST, onOpenMenuChange: g }),
                        }),
                        (0, r.jsx)(q.H, { disabled: !C, shareLink: el, entityMeta: ef }),
                        ey &&
                            (0, r.jsx)(G.WithOffline, {
                                fallback: (0, r.jsx)(u.Dr, {
                                    onClick: ex,
                                    icon: (0, r.jsx)(d.I, { variant: 'info', size: 'xxs' }),
                                    'data-test-id': o.Kq.artist.ARTIST_CONTEXT_MENU_ABOUT_ARTIST_BUTTON,
                                    children: ev,
                                }),
                            }),
                        (0, r.jsx)(G.WithOffline, {
                            fallback: (0, r.jsx)($.D, { onClick: er, isDisliked: null == C ? void 0 : C.isDisliked, disabled: !(null == C ? void 0 : C.isAvailable) }),
                        }),
                    ],
                });
            });
        },
        83460: (e, t, i) => {
            'use strict';
            i.d(t, { B: () => J });
            var r = i(32290),
                a = i(63618),
                n = i(96103),
                s = i(55178),
                o = i(60900),
                l = i(99923),
                c = i(21732),
                d = i(71483),
                u = i(91027),
                _ = i(6752),
                m = i(14934),
                v = i(82586),
                p = i(86269),
                h = i(71926),
                x = i(41677),
                f = i(73141),
                C = i(73192),
                g = i(71735),
                y = i(47745),
                b = i(2969),
                k = i(54391),
                T = i(23352),
                A = i(72396),
                j = i(5537),
                N = i(32641),
                I = i(28999),
                L = i(90169),
                P = i(57594),
                R = i(61376),
                S = i(11323),
                O = i(92744),
                E = i(61258),
                w = i(10180),
                B = i(90326),
                M = i(29268),
                D = i(34925),
                z = i(13931),
                V = i(19740),
                U = i(9017),
                K = i(65477),
                H = i(46200),
                $ = i(27120),
                F = i(95134),
                W = i(79406),
                q = i(58237),
                Y = i(56367),
                X = i(83755);
            let G = (0, n.PA)((e) => {
                var t;
                let { playlist: i, onOpenChange: a, open: n, ...s } = e,
                    { shouldShowBuySubscriptionModal: d, showBuySubscriptionModal: _ } = (0, H.q)(),
                    {
                        experiments: m,
                        settings: { isMobile: v },
                        trailer: p,
                        user: h,
                    } = (0, P.g)(),
                    x = (0, f.K)(i),
                    y = (0, C.A)(i),
                    b = (0, k.F)(),
                    { formatMessage: T } = (0, o.A)(),
                    A = (0, g.P)(),
                    j = m.checkExperiment(W.z.WebEditorsFeatures, 'on'),
                    N = (0, U.A)({ entityVariant: F.D.PLAYLIST, urlParams: { id: i.uid, kind: i.kind } });
                (0, $.N)(n);
                let I = (0, u.c)(() => {
                    if (d) return void _();
                    A() || (p.openPlaylistTrailer(i.id), b(l.DomainObjectType.Playlist, i.id));
                });
                return (0, r.jsxs)(V.W1, {
                    title: i.title,
                    onOpenChange: a,
                    open: n,
                    offsetOptions: 10,
                    isMobile: v,
                    ariaLabel: T({ id: 'interface-actions.context-menu' }),
                    containerDataTestId: c.Kq.playlist.PLAYLIST_CONTEXT_MENU,
                    ...s,
                    children: [
                        j && (0, r.jsx)(K.d, { entityVariant: F.D.PLAYLIST, adminUrl: i.isFavouritePlaylist ? void 0 : N }),
                        !v && (0, r.jsx)(Y.L, { onClick: y, isPinned: i.isPinned }),
                        !i.isFavouritePlaylist && (0, r.jsx)(q.T, { onClick: x, isLiked: i.isLiked, disabled: !h.isAuthorized }),
                        (null == (t = i.trailer) ? void 0 : t.isAvailable) && (0, r.jsx)(X.N, { onClick: I, disabled: !i.isAvailable }),
                    ],
                });
            });
            var Q = i(11675),
                Z = i.n(Q);
            let J = (0, n.PA)((e) => {
                let { className: t, playlist: i, children: n, contentLinesCount: V, customDescription: U, onCoverMouseDown: K } = e,
                    { ref: H, intersectionPropertyId: $ } = (0, T.n)(),
                    {
                        trailer: F,
                        user: W,
                        paywall: { modal: q },
                    } = (0, P.g)(),
                    { from: Y, utmLink: X } = (0, A.f)({ contextId: i.uuid, contextType: d.K.Playlist }),
                    { formatMessage: Q } = (0, o.A)(),
                    { sendLikeSearchFeedback: J, sendNavigateSearchFeedback: ee, sendPlaySearchFeedback: et } = (0, I.z)(),
                    [ei, er] = (0, s.useState)(!1),
                    [ea, en] = (0, s.useState)(!1),
                    [es, eo] = (0, s.useState)(!1),
                    el = (0, z.r)(i),
                    ec = (0, f.K)(i),
                    ed = (0, C.A)(i),
                    eu = (0, y.N)(),
                    e_ = (0, b.b)(),
                    em = (0, N.Z)(i.url),
                    ev = (0, k.F)(),
                    ep = (0, g.P)(),
                    eh = (0, u.c)((e) => {
                        if ((e.stopPropagation(), ep())) return void e.preventDefault();
                        (F.setUtmLink(X), F.openPlaylistTrailer(i.id), ev(l.DomainObjectType.Playlist, i.id));
                    }),
                    [ex, ef] = (0, s.useState)(!1),
                    { isPlaying: eC, togglePlay: eg } = (0, L.D)({
                        playContextParams: { contextData: { type: d.K.Playlist, meta: { id: i.id, uuid: i.uuid }, from: Y, utmLink: X }, loadContextMeta: !0 },
                    }),
                    ey = (0, u.c)(() => {
                        (eu({ to: l.AppScreen.PlaylistScreen }), null == ee || ee());
                    }),
                    eb = (0, u.c)((e) => {
                        (ey(), em(e));
                    }),
                    ek = (0, j.N)(),
                    eT = (0, u.c)(() => {
                        if (!ep()) {
                            if (ek) return void q.open();
                            (ei || eC || (er(!0), null == et || et()), eg(), e_(!eC));
                        }
                    }),
                    eA = (0, u.c)(() => {
                        (ea || i.isLiked || (en(!0), null == J || J()), ec());
                    }),
                    ej = (0, u.c)((e) => {
                        (e.preventDefault(), e.stopPropagation());
                    }),
                    eN = (0, u.c)((e) => {
                        (eo(e), ef(e));
                    }),
                    eI = (0, s.useMemo)(() => {
                        var e;
                        return U
                            ? (0, r.jsx)(h.HL, { variant: 'span', type: 'entity', size: 's', weight: 'medium', lineClamp: 2, children: U }, i.getKey('description'))
                            : (null == (e = i.artists) ? void 0 : e.length)
                              ? (0, r.jsx)(
                                    x.i,
                                    { className: Z().artists, artists: i.artists, lineClamp: 1, linkClassName: Z().artistLink, captionSize: 's' },
                                    i.getKey('description'),
                                )
                              : void 0;
                    }, [U, i]),
                    eL = (0, _.L)(() => {
                        if (!i.isFavouritePlaylist)
                            return (0, r.jsx)(
                                O.c,
                                {
                                    className: (0, a.$)(Z().likeButton, Z().control),
                                    isLiked: i.isLiked,
                                    onClick: eA,
                                    variant: 'default',
                                    size: 's',
                                    iconSize: 'xxs',
                                    disabled: !W.isAuthorized,
                                },
                                i.getKey('LikeButton'),
                            );
                    }),
                    eP = (0, s.useMemo)(() => {
                        var e;
                        if (null == i || null == (e = i.trailer) ? void 0 : e.isAvailable)
                            return (0, r.jsx)(
                                D.n,
                                {
                                    children: (0, r.jsx)(
                                        M.k,
                                        { className: (0, a.$)(Z().trailerButton, Z().control), radius: 'round', size: 's', iconSize: 'xxs', onClick: eh },
                                        i.getKey('TrailerButton'),
                                    ),
                                },
                                i.getKey('PlaylilstCardTrailerTooltip'),
                            );
                    }, [eh, i]),
                    eR = (0, s.useMemo)(
                        () =>
                            (0, r.jsx)(
                                w.O,
                                { onClick: ed, isPinned: i.isPinned, className: (0, a.$)(Z().pinButton, Z().control), withRipple: !1 },
                                i.getKey('PinButton'),
                            ),
                        [ed, i],
                    ),
                    eS = (0, s.useMemo)(
                        () =>
                            (0, r.jsx)(p.t, {
                                className: Z().cover,
                                radius: 's',
                                withShadow: !0,
                                'data-test-id': c.Kq.playlist.PLAYLIST_CARD,
                                children: (0, r.jsxs)('div', {
                                    className: Z().coverBlock,
                                    onClick: eb,
                                    onMouseDown: K,
                                    children: [
                                        (0, r.jsx)(S.B, {
                                            className: Z().image,
                                            src: i.coverUri,
                                            size: 200,
                                            fit: 'cover',
                                            alt: el,
                                            withAvatarReplace: !0,
                                            'aria-hidden': !0,
                                        }),
                                        (0, r.jsx)(m.hg, {
                                            isVisible: es || ex,
                                            className: Z().controls,
                                            playControl: (0, r.jsx)(
                                                B.D,
                                                {
                                                    className: (0, a.$)(Z().playButton, Z().control),
                                                    buttonVariant: 'default',
                                                    withHover: !1,
                                                    iconSize: 'xl',
                                                    variant: 'filled',
                                                    onClick: eT,
                                                    isPlaying: eC,
                                                    disabled: !i.isAvailable,
                                                },
                                                i.getKey('PlayButton'),
                                            ),
                                            likeControl: eL,
                                            menuControl: (0, r.jsx)(
                                                G,
                                                {
                                                    playlist: i,
                                                    onOpenChange: eN,
                                                    open: es,
                                                    onClick: ej,
                                                    className: (0, a.$)(Z().menuButton, Z().control),
                                                    icon: (0, r.jsx)(v.I, { size: 'xxs', variant: 'more' }),
                                                    size: 's',
                                                    'data-test-id': c.Kq.playlist.PLAYLIST_CONTEXT_MENU_BUTTON,
                                                },
                                                i.getKey('PlaylistContextMenu'),
                                            ),
                                            pinControl: eR,
                                            trailerControl: eP,
                                        }),
                                    ],
                                }),
                            }),
                        [eb, K, i, el, es, ex, eT, eC, eL, eN, ej, eR, eP],
                    ),
                    eO = !!i.actualLikesCount && !i.isLikesCountHidden;
                return (0, r.jsxs)(m.MN, {
                    ref: H,
                    'aria-label': el,
                    className: (0, a.$)(Z().root, t),
                    title: (0, r.jsx)(h.HL, {
                        variant: 'div',
                        type: 'entity',
                        size: 's',
                        weight: 'medium',
                        lineClamp: 2,
                        'data-test-id': c.Kq.playlist.PLAYLIST_TITLE,
                        children: (0, r.jsx)(E.N, { className: Z().titleLink, href: i.url, onClick: ey, children: i.title }),
                    }),
                    srTitle: (0, r.jsx)(E.N, { href: i.url, onClick: ey, children: i.title }),
                    'data-intersection-property-id': $,
                    contentLinesCount: V,
                    view: eS,
                    description: eI,
                    'data-test-id': c.Kq.playlist.PLAYLIST_ITEM,
                    children: [
                        eO &&
                            (0, r.jsx)(R.x, {
                                ariaLabel: Q({ id: 'entity-names.likes-counter' }, { counter: i.actualLikesCount }),
                                likesCount: i.actualLikesCount,
                                isLiked: i.isLiked,
                                handleLikeClick: ec,
                            }),
                        n,
                    ],
                });
            });
        },
        84051: (e, t, i) => {
            'use strict';
            i.d(t, { l: () => m });
            var r = i(55178),
                a = i(17811),
                n = i(99923),
                s = i(90153),
                o = i(74416),
                l = i(91027),
                c = i(62376),
                d = i(79374),
                u = i(37240),
                _ = i(47498);
            let m = (e) => {
                let { mainObjectType: t } = e,
                    i = (0, r.useRef)(!1),
                    m = (0, r.useRef)(!1),
                    v = (0, o.st)(),
                    p = (0, c.U)(),
                    { hash: h } = (0, o.gf)(),
                    { pageId: x, pageEntityId: f, pageStyle: C, pagePlacement: g } = (0, u.$)(),
                    { tabId: y, tabPos: b, isTabSelectedByDefault: k } = (0, _.R)();
                return (0, l.c)((e) => {
                    if (!v || !x || 'string' != typeof f) return;
                    let r = {
                        hash: h,
                        pageId: d.W[x],
                        pageStyle: C || n.PageStyles.Fullscreen,
                        pagePlacement: g || n.PagePlacements.Fullscreen,
                        mainObjectType: t,
                        mainObjectId: f,
                    };
                    void 0 !== y && ((r.tabId = y), (r.tabPos = b), (r.isTabSelectedByDefault = k));
                    let o = (0, a.F)({ params: r, logger: p, context: 'useSendEventOnScreenOpenedOrClosed' });
                    o && (e && !i.current && ((0, s.w5)(v.evgenInstance, o), (i.current = !0)), e || m.current || ((0, s.XB)(v.evgenInstance, o), (m.current = !0)));
                });
            };
        },
        85305: (e, t, i) => {
            'use strict';
            i.d(t, { y: () => T });
            var r = i(32290),
                a = i(63618),
                n = i(96103),
                s = i(55178),
                o = i(21732),
                l = i(6752),
                c = i(14934),
                d = i(71926),
                u = i(2969),
                _ = i(84782),
                m = i(23352),
                v = i(37240),
                p = i(43564),
                h = i(57594),
                x = i(32156),
                f = i(10180),
                C = i(90326),
                g = i(64089),
                y = i(37445),
                b = i(85927),
                k = i.n(b);
            let T = (0, n.PA)((e) => {
                let { vibe: t, shouldShowPlayButton: i = !0, shouldShowAdditionals: n = !0, additionalsLinesCount: b = 3, className: T } = e,
                    { pageId: A } = (0, v.$)(),
                    { blockIdForFrom: j } = (0, _.N)(),
                    { ref: N, intersectionPropertyId: I } = (0, m.n)(),
                    { freeAccess: L } = (0, h.g)(),
                    [P, R] = (0, s.useState)(!1),
                    S = (0, g.A)(t),
                    { isPlaying: O, togglePlay: E } = (0, p.B)({ seeds: t.seeds, pageIdForFrom: A, blockIdForFrom: j }),
                    w = (0, u.b)(),
                    B = (0, s.useCallback)(() => {
                        L.isVibeStartRestricted || (E(), w(!O));
                    }, [L.isVibeStartRestricted, E, w, O]),
                    M = (0, s.useCallback)(
                        () =>
                            (0, r.jsx)(
                                C.D,
                                {
                                    className: (0, a.$)(k().playButton, k().control),
                                    buttonVariant: 'default',
                                    withHover: !1,
                                    iconSize: 'xl',
                                    variant: 'filled',
                                    onClick: B,
                                    isPlaying: O,
                                },
                                t.getKey('PlayButton'),
                            ),
                        [t, B, O],
                    ),
                    D = (0, l.L)(() =>
                        (0, r.jsx)(
                            x.S,
                            {
                                isEnabled: L.isVibeStartRestricted,
                                isOpened: P,
                                onOpenChange: R,
                                placement: 'top',
                                textVariant: 'vibe',
                                vibeTextVariant: t.stationType,
                                renderChildren: M,
                            },
                            t.getKey('BuyPlusPopover'),
                        ),
                    ),
                    z = (0, l.L)(() =>
                        (0, r.jsx)(f.O, { onClick: S, isPinned: t.isPinned, className: (0, a.$)(k().pinButton, k().control), withRipple: !1 }, t.getKey('PinButton')),
                    ),
                    V = (0, l.L)(() =>
                        (0, r.jsxs)('div', {
                            className: k().cover,
                            onClick: B,
                            children: [
                                t.agent && (0, r.jsx)(y.s, { agent: t.agent, isPlaying: O }),
                                (0, r.jsx)(c.hg, { isVisible: P, className: k().controls, playControl: i ? D : void 0, pinControl: z }),
                            ],
                        }),
                    );
                return (0, r.jsx)(c.MN, {
                    ref: N,
                    className: (0, a.$)(k().root, T),
                    'data-intersection-property-id': I,
                    contentLinesCount: b,
                    view: V,
                    textPosition: 'center',
                    wrapperClassName: (0, a.$)({ [k().additionals_hide]: !n }),
                    title: (0, r.jsx)(d.HL, { variant: 'div', type: 'entity', size: 's', weight: 'medium', lineClamp: 2, children: t.title }, t.getKey('Title')),
                    description: (0, r.jsx)(
                        d.HL,
                        { variant: 'div', type: 'entity', size: 's', weight: 'medium', lineClamp: 1, children: t.description },
                        t.getKey('Description'),
                    ),
                    'data-test-id': o.OA.vibe.VIBE_AGENT_CARD,
                });
            });
        },
        85832: (e, t, i) => {
            'use strict';
            i.d(t, { A: () => c });
            var r = i(32290),
                a = i(63618),
                n = i(96103),
                s = i(55178),
                o = i(37852),
                l = i.n(o);
            let c = (0, n.PA)((e) => {
                let {
                        className: t,
                        text: i = '',
                        maxTextLength: n,
                        minTextLength: o,
                        variant: c = 'input',
                        shouldFinishOnKeyPress: d = !1,
                        placeholder: u,
                        onChangeFinish: _,
                        withOutline: m = !1,
                        'data-test-id': v,
                    } = e,
                    [p, h] = (0, s.useState)(i),
                    x = (0, s.useRef)(!1),
                    f = (0, s.useRef)(null),
                    C = (0, s.useCallback)((e) => {
                        h(e.target.value);
                    }, []),
                    g = (0, s.useCallback)(
                        (e) => {
                            if (d && ['Enter', 'Escape'].includes(e.key)) {
                                var t;
                                ('Escape' === e.key && (x.current = !0), null == (t = e.currentTarget) || t.blur());
                            }
                        },
                        [d],
                    ),
                    y = (0, s.useCallback)(() => {
                        let e = p.trim();
                        x.current || (o && e.length < o) ? ((x.current = !1), null == _ || _(i)) : null == _ || _(e);
                    }, [p, x, o, _, i]);
                ((0, s.useEffect)(() => {
                    f.current && ((f.current.selectionStart = f.current.value.length), (f.current.selectionEnd = f.current.value.length));
                }, []),
                    (0, s.useLayoutEffect)(() => {
                        let e = f.current;
                        if (e) {
                            e.style.height = '0px';
                            let t = e.scrollHeight;
                            e.style.height = ''.concat(t, 'px');
                        }
                    }, [f, p]));
                let b = (0, s.useMemo)(() => ('textarea' === c ? (e) => (0, r.jsx)('textarea', { ref: f, rows: 6, ...e }) : (e) => (0, r.jsx)('input', { ...e })), [c]);
                return (0, r.jsx)(b, {
                    className: (0, a.$)(l().root, t, { [l().root_textarea]: 'textarea' === c, [l().root_outline]: m }),
                    type: 'text',
                    value: p,
                    maxLength: n,
                    onBlur: y,
                    onChange: C,
                    onKeyDown: g,
                    placeholder: u,
                    autoFocus: !0,
                    'data-test-id': v,
                });
            });
        },
        85927: (e) => {
            e.exports = {
                root: 'VibeAgentCard_root__GVtqu',
                cover: 'VibeAgentCard_cover__In0Nz',
                controls: 'VibeAgentCard_controls__yXgoW',
                additionals_hide: 'VibeAgentCard_additionals_hide__GpV7Z',
                control: 'VibeAgentCard_control__toXgO',
                playButton: 'VibeAgentCard_playButton__5YkZS',
                pinButton: 'VibeAgentCard_pinButton___f4vw',
            };
        },
        90404: (e, t, i) => {
            'use strict';
            var r;
            (i.d(t, { _: () => r }),
                (function (e) {
                    ((e.ALBUM_ITEM = 'album_item'),
                        (e.ARTIST_ITEM = 'artist_item'),
                        (e.PLAYLIST_ITEM = 'playlist_item'),
                        (e.TRACK_ITEM = 'track_item'),
                        (e.LIKED_PLAYLIST_ITEM = 'liked_playlist_item'),
                        (e.PERSONAL_PLAYLIST_ITEM = 'personal_playlist_item'),
                        (e.WAVE_ITEM = 'wave_item'),
                        (e.WAVE_AGENT_ITEM = 'wave_agent_item'),
                        (e.MIX = 'mix'),
                        (e.MIX_CARD_ITEM = 'mix_card_item'),
                        (e.LIKED_ALBUM_ITEM = 'liked_album_item'),
                        (e.PRESAVED_ALBUM_ITEM = 'presaved_album_item'),
                        (e.CHART_ALBUM_ITEM = 'chart_album_item'),
                        (e.NON_MUSIC_ALBUM_ITEM = 'non_music_album_item'),
                        (e.MENU_ITEM = 'menu_item'),
                        (e.DONATION_ITEM = 'donation_item'),
                        (e.CLIP = 'clip'),
                        (e.CLIP_ITEM = 'clip_item'),
                        (e.CONCERT_ITEM = 'concert_item'),
                        (e.QUERY_TO_VIBE_ITEM = 'q2v_item'));
                })(r || (r = {})));
        },
        91853: (e, t, i) => {
            'use strict';
            i.d(t, { S: () => a });
            var r = i(19383);
            let a = (e) => {
                let { artist: t, callback: i, shouldHistoryBack: a } = e;
                return (0, r.l)({ entity: t, callback: i, modalBehavior: void 0 === a ? void 0 : { shouldHistoryBack: a }, preventDefaultWhenSafe: !0 });
            };
        },
        95226: (e, t, i) => {
            'use strict';
            i.d(t, { F: () => s });
            var r = i(32290),
                a = i(55178),
                n = i(73818);
            let s = (e) => {
                let {
                        blockId: t,
                        blockType: i,
                        blockIdForFrom: s,
                        blockPosX: o,
                        blockPosY: l,
                        objectsCount: c,
                        mainObjectType: d,
                        mainObjectId: u,
                        children: _,
                        displayReasonId: m,
                    } = e,
                    v = (0, a.useMemo)(
                        () => ({
                            blockId: t,
                            blockType: i,
                            blockIdForFrom: s,
                            blockPosX: o,
                            blockPosY: l,
                            objectsCount: c,
                            mainObjectType: d,
                            mainObjectId: u,
                            displayReasonId: m,
                        }),
                        [t, i, s, o, l, c, d, u, m],
                    );
                return (0, r.jsx)(n.p.Provider, { value: v, children: _ });
            };
        },
        95481: (e, t, i) => {
            'use strict';
            i.d(t, { f: () => f });
            var r = i(55178),
                a = i(17811),
                n = i(92146),
                s = i(74416),
                o = i(6752),
                l = i(62376),
                c = i(1677),
                d = i(48922),
                u = i(84782),
                _ = i(30915),
                m = i(18746),
                v = i(37240),
                p = i(51012),
                h = i(47498);
            let x = [
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
                f = () => {
                    let e = (0, r.useRef)(!1),
                        t = (0, s.st)(),
                        i = (0, l.U)(),
                        { hash: f } = (0, s.gf)(),
                        { pageId: C } = (0, v.$)(),
                        { tabId: g, tabPos: y, isTabSelectedByDefault: b } = (0, h.R)(),
                        { offsetBlockPosY: k } = (0, _.u)(),
                        { blockId: T, blockType: A, blockPosX: j, blockPosY: N, mainObjectType: I, mainObjectId: L, objectsCount: P } = (0, u.N)(),
                        { filterKey: R, filterValue: S, filterPos: O } = (0, m.G)(),
                        { skeleton: E } = (0, p.b)(),
                        w = (0, o.L)(() => (void 0 !== k && void 0 !== N ? k + N : N));
                    return (0, r.useCallback)(() => {
                        if (!t || !C || !d.xK.includes(C) || !x.includes(C) || e.current) return;
                        let r = { hash: f, pageId: c.F[C], entityType: A, entityId: T, entityPosX: j, entityPosY: w, objectsCount: P };
                        (void 0 !== R && ((r.filterKey = R), (r.filterValue = S), (r.filterPos = O)),
                            d.qG.includes(C) && ((r.tabId = g), (r.tabPos = y), (r.isTabSelectedByDefault = b)),
                            E && (r.skeletonId = E),
                            L && I && ((r.mainObjectType = I), (r.mainObjectId = L)));
                        let s = (0, a.F)({ params: r, logger: i, context: 'useSendEventOnBlockLoaded' });
                        s && ((0, n.uY)(t.evgenInstance, s), (e.current = !0));
                    }, [t, C, f, A, T, j, w, R, S, O, P, E, L, I, i, g, y, b]);
                };
        },
        98148: (e, t, i) => {
            'use strict';
            i.d(t, { O: () => C });
            var r = i(32290),
                a = i(63618),
                n = i(55178),
                s = i(85472),
                o = i(99923),
                l = i(6752),
                c = i(75245),
                d = i(79856),
                u = i(84782),
                _ = i(26042),
                m = i(19620),
                v = i(49522),
                p = i(30564),
                h = i(33696),
                x = i.n(h);
            let f = (e) => {
                    let {
                            forwardRef: t,
                            shimmerClassName: i,
                            isShimmerVisible: h,
                            isShimmerActive: f,
                            isShimmerWithSubcover: C,
                            isShimmerCentered: g,
                            isShimmerRounded: y,
                            title: b,
                            description: k,
                            coverUrl: T,
                            viewAllActionLink: A,
                            titleChildren: j,
                            headerChildren: N,
                            children: I,
                            className: L,
                            containerClassName: P,
                            headerClassName: R,
                            itemClassName: S,
                            showHeaderShimmer: O = !1,
                            showShimmerInfo: E = !0,
                            showControls: w = !0,
                            headingRef: B,
                            headingVariant: M,
                            customShimmer: D,
                            ...z
                        } = e,
                        V = (0, n.useId)(),
                        U = (0, n.useRef)(null),
                        { objectsCount: K } = (0, u.N)(),
                        H = (0, n.useMemo)(
                            () =>
                                O && h
                                    ? (0, r.jsx)('div', { className: R, children: (0, r.jsx)(d.W, { isActive: f, className: x().shimmerTitle, radius: 'l' }) })
                                    : b || k || j || N
                                      ? (0, r.jsx)(_.B, {
                                            objectType: o.DomainObjectType.Shortcut,
                                            objectId: String(A),
                                            objectPosX: 0,
                                            objectPosY: 0,
                                            objectsCount: null != K ? K : 0,
                                            children: (0, r.jsx)(m.T, {
                                                className: R,
                                                labeledForId: V,
                                                title: b,
                                                description: k,
                                                coverUrl: T,
                                                viewAllActionLink: A,
                                                controls: w && (0, r.jsx)(v.X, { className: x().controls, carouselRef: U }),
                                                headingRef: B,
                                                headingVariant: M,
                                                withDescription: !!k,
                                                titleChildren: j,
                                                children: N,
                                            }),
                                        })
                                      : void 0,
                            [T, k, R, B, M, V, f, h, K, w, O, b, j, N, A],
                        ),
                        $ = (0, l.L)(() => D || (0, p.k)({ className: i, isActive: f, withInfo: E, withSubcover: C, centered: g, round: y }));
                    return (0, r.jsxs)('section', {
                        ref: t,
                        className: (0, a.$)(x().root, L),
                        ...(0, s.getDataAttrFromProps)(z),
                        children: [
                            H,
                            (0, r.jsx)(c.F, {
                                className: P,
                                ref: U,
                                itemClassName: (0, a.$)(x().item, x().important, S),
                                'aria-labelledby': ''.concat(V, ' ').concat(V, '-description'),
                                children: h ? $ : I,
                            }),
                        ],
                    });
                },
                C = (0, n.forwardRef)((e, t) => (0, r.jsx)(f, { forwardRef: t, ...e }));
        },
    },
]);
