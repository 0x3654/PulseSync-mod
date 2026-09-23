(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [1156],
    {
        356: (e) => {
            e.exports = {
                message: 'NotificationDislike_message__RoxZH',
                text: 'NotificationDislike_text__fJHts',
                cover: 'NotificationDislike_cover__N5Oqu',
                image: 'NotificationDislike_image__jn4_4',
            };
        },
        3676: (e, t, i) => {
            'use strict';
            (i.r(t), i.d(t, { default: () => z }));
            var r = i(32290),
                a = i(21916),
                l = i(55178),
                n = i(63618),
                s = i(96103),
                o = i(60900),
                c = i(21732),
                d = i(91027),
                u = i(71926),
                m = i(64170),
                _ = i(7474),
                v = i(7999),
                h = i(48922),
                x = i(22714),
                f = i(83808),
                C = i(83920),
                p = i(3796),
                g = i(49259),
                A = i(45066),
                b = i(57594),
                j = i(11262),
                S = i(97841),
                N = i(32468),
                k = i(74694),
                T = i(89020),
                y = i(45257),
                R = i(29973),
                I = i(15498),
                E = i.n(I);
            let L = (0, s.PA)((e) => {
                let { labelId: t, preloadedLabel: i, preloadedArtists: s } = e,
                    { id: I, name: L, type: w, artistsSubpage: O, reset: P, isNeededToLoad: B, getData: z } = (0, g.s)(A.n.LABEL),
                    {
                        settings: { isMobile: D },
                    } = (0, b.g)(),
                    { formatMessage: U } = (0, o.A)(),
                    { contentScrollRef: F, setContentScrollRef: M } = (0, C.g)(),
                    K = (0, f.W)(),
                    H = U({ id: 'page.label-artists-header' }, { labelName: L }),
                    W = (0, d.c)((e) => {
                        O.getData({ labelId: Number(t), page: e, pageSize: 20 });
                    });
                ((0, j.X)(O.pagesLoader, W),
                    (0, l.useEffect)(
                        () => () => {
                            (P(), O.reset());
                        },
                        [P, O],
                    ),
                    O.isNotFound && (0, a.notFound)(),
                    (0, R.Q)({ id: Number(I), name: null != L ? L : '', type: null != w ? w : '' }, R.T.ARTISTS),
                    (0, p.J)(O.isResolved));
                let $ = (0, l.useMemo)(() => ({ Footer: () => (0, r.jsx)(N.A, { children: (0, r.jsx)(S.w, { className: E().footer }) }) }), []),
                    V = U({ id: 'entity-names.label-artists-list' }),
                    q = [];
                if (
                    (O.isNeededToLoad && q.push(O.getData({ labelId: Number(t), page: 0, pageSize: 20, preloadedArtists: s })),
                    B && q.push(z({ labelId: Number(t), preloadedLabel: i, withLabelEntities: !1 })),
                    q.length && (0, l.use)(Promise.allSettled(q)),
                    O.isRejected && !O.isNotFound)
                )
                    return (0, r.jsx)(m.SomethingWentWrong, {});
                let X = O.isShimmerVisible ? 20 : O.totalCount;
                return (0, r.jsx)(x.n, {
                    pageId: h._Q.LABEL_ARTISTS,
                    children: (0, r.jsx)(v.h, {
                        scrollElement: F,
                        outerTitle: H,
                        children: (0, r.jsxs)('div', {
                            className: E().root,
                            'data-test-id': c.Xk.label.LABEL_ARTISTS_PAGE,
                            children: [
                                (0, r.jsx)(k.Y, {
                                    variant: k.V.TEXT,
                                    withForwardControl: !1,
                                    withBackwardControl: K.canBack,
                                    className: E().header,
                                    children: (0, r.jsx)(u.DZ, { variant: 'h1', weight: 'bold', size: 'xl', lineClamp: 1, children: H }),
                                }),
                                (0, r.jsx)(y.$, {
                                    className: (0, n.$)(E().scrollContainer, E().important),
                                    listClassName: E().content,
                                    itemClassName: E().item,
                                    customComponents: $,
                                    itemContentCallback: (e) => {
                                        let t = O.items[e],
                                            i = U({ id: 'loading-messages.entity-is-loading' }, { entityName: U({ id: 'entity-names.artist' }) });
                                        return t
                                            ? (0, r.jsx)(_.a, { artist: t, contentLinesCount: 4 }, t.id)
                                            : (0, r.jsx)(T.V, { 'aria-label': i, round: !0, centered: !0, linesCount: 4 });
                                    },
                                    totalCount: X,
                                    initialItemCount: X,
                                    onGetDataByPage: W,
                                    pageSize: 20,
                                    totalRequests: O.requestsCount,
                                    handleRef: M,
                                    context: { listAriaLabel: V },
                                    isMobileLayout: D,
                                    useWindowScroll: D,
                                }),
                            ],
                        }),
                    }),
                });
            });
            var w = i(79856),
                O = i(50308);
            let P = () => {
                let e = (0, f.W)(),
                    { formatMessage: t } = (0, o.A)(),
                    i = t({ id: 'loading-messages.entity-is-loading' }, { entityName: t({ id: 'entity-names.artist' }) });
                return (0, r.jsx)(v.h, {
                    scrollElement: null,
                    children: (0, r.jsxs)('div', {
                        className: E().root,
                        children: [
                            (0, r.jsx)(k.Y, {
                                variant: k.V.TEXT,
                                withForwardControl: !1,
                                withBackwardControl: e.canBack,
                                children: (0, r.jsx)(w.W, { className: E().shimmerTitle, radius: 'l' }),
                            }),
                            (0, r.jsx)('div', {
                                className: (0, n.$)(E().scrollContainer, E().important, E().shimmerScrollContainer),
                                children: (0, r.jsx)('div', {
                                    className: E().content,
                                    children: (0, r.jsx)(O.e, {
                                        isActive: !0,
                                        itemClassName: E().item,
                                        'aria-label': i,
                                        round: !0,
                                        centered: !0,
                                        linesCount: 4,
                                        count: 20,
                                    }),
                                }),
                            }),
                        ],
                    }),
                });
            };
            var B = i(17024);
            let z = () => {
                let e = (0, a.useSearchParams)().get('labelId');
                return ((e && (0, B.L)(e)) || (0, a.notFound)(), (0, r.jsx)(l.Suspense, { fallback: (0, r.jsx)(P, {}), children: (0, r.jsx)(L, { labelId: e }) }));
            };
        },
        5537: (e, t, i) => {
            'use strict';
            i.d(t, { N: () => l });
            var r = i(57594),
                a = i(79406);
            let l = () => {
                var e, t;
                let {
                    user: i,
                    settings: { browserInfo: l },
                    experiments: n,
                } = (0, r.g)();
                return (
                    !(null == l ? void 0 : l.isTouch) &&
                    i.isAuthorized &&
                    !i.hasPlus &&
                    (null == (t = n.getExperiment(a.z.WebNextDesktopWebFreemium)) || null == (e = t.value) ? void 0 : e.closeListening) === 'on'
                );
            };
        },
        5942: (e, t, i) => {
            'use strict';
            i.d(t, { K: () => x });
            var r = i(32290),
                a = i(92708),
                l = i(55178),
                n = i(60900),
                s = i(63380),
                o = i(45477),
                c = i(75582),
                d = i(57594),
                u = i(90357),
                m = i(20472),
                _ = i(97647),
                v = i(97755);
            let h = (e) => {
                    let { artist: t, closeToast: i } = e;
                    return (0, r.jsx)(v.O, {
                        closeToast: i,
                        entityVariant: _.c.ARTIST,
                        entityUrl: t.url,
                        collectionUrl: m.Z.collectionArtists.href,
                        coverUri: t.coverUri,
                        entityTitle: t.name,
                        isLiked: t.isLiked,
                    });
                },
                x = (e) => {
                    let { user: t } = (0, d.g)(),
                        { notify: i } = (0, c.l)(),
                        [m, _] = (0, l.useState)(!1),
                        { formatMessage: v } = (0, n.A)();
                    return (0, l.useCallback)(async () => {
                        if (!e) return;
                        if (!t.isAuthorized)
                            return void i((0, r.jsx)(u.h, { error: v({ id: 'authorization-messages.need-to-authorizate' }) }), { containerId: o.u.ERROR });
                        if (m) return;
                        let l = { ...(0, a.HO)(e), isLiked: !e.isLiked };
                        _(!0);
                        let n = await e.toggleLike();
                        (_(!1),
                            n === s.f.OK
                                ? i((0, r.jsx)(h, { artist: l }), { containerId: o.u.INFO })
                                : i((0, r.jsx)(u.h, { error: v({ id: 'error-messages.error-during-action' }) }), { containerId: o.u.ERROR }));
                    }, [e, t.isAuthorized, m, v, i]);
                };
        },
        7474: (e, t, i) => {
            'use strict';
            i.d(t, { a: () => M });
            var r = i(32290),
                a = i(63618),
                l = i(96103),
                n = i(55178),
                s = i(60900),
                o = i(99923),
                c = i(21732),
                d = i(71483),
                u = i(91027),
                m = i(6752),
                _ = i(14934),
                v = i(82586),
                h = i(86269),
                x = i(71926),
                f = i(91853),
                C = i(5942),
                p = i(70390),
                g = i(71735),
                A = i(47745),
                b = i(2969),
                j = i(54391),
                S = i(23352),
                N = i(72396),
                k = i(5537),
                T = i(32641),
                y = i(28999),
                R = i(90169),
                I = i(57594),
                E = i(11323),
                L = i(92744),
                w = i(61258),
                O = i(10180),
                P = i(90326),
                B = i(29268),
                z = i(34925),
                D = i(80528),
                U = i(42048),
                F = i.n(U);
            let M = (0, l.PA)((e) => {
                let { artist: t, className: i, children: l, contentLinesCount: U, topTitleElement: M, bottomTitleElement: K } = e,
                    { ref: H, intersectionPropertyId: W } = (0, S.n)(),
                    {
                        trailer: $,
                        user: V,
                        paywall: { modal: q },
                    } = (0, I.g)(),
                    { from: X, utmLink: J } = (0, N.f)({ contextId: t.id, contextType: d.K.Artist }),
                    { formatMessage: Z } = (0, s.A)(),
                    [G, Q] = (0, n.useState)(!1),
                    [Y, ee] = (0, n.useState)(!1),
                    [et, ei] = (0, n.useState)(!1),
                    { sendLikeSearchFeedback: er, sendNavigateSearchFeedback: ea, sendPlaySearchFeedback: el } = (0, y.z)(),
                    en = (0, A.N)(),
                    es = (0, b.b)(),
                    eo = (0, C.K)(t),
                    ec = (0, p.A)(t),
                    { id: ed, name: eu, coverUri: em, isLiked: e_ } = t,
                    ev = (0, T.Z)(t.url),
                    [eh, ex] = (0, n.useState)(!1),
                    ef = (0, j.F)(),
                    eC = (0, g.P)(),
                    ep = (0, u.c)((e) => {
                        if ((e.stopPropagation(), eC())) return void e.preventDefault();
                        ($.openArtistTrailer(t.id), ef(o.DomainObjectType.Artist, t.id));
                    }),
                    eg = (0, n.useMemo)(() => {
                        let e = Z({ id: 'entity-names.artist-name' }, { artistName: eu }),
                            t = e_ ? Z({ id: 'entity-names.has-your-like' }) : '';
                        return ''.concat(e, ' ').concat(t);
                    }, [eu, e_, Z]),
                    { isPlaying: eA, togglePlay: eb } = (0, R.D)({
                        playContextParams: { contextData: { type: d.K.Artist, meta: { id: Number(ed) }, from: X, utmLink: J }, loadContextMeta: !0 },
                    }),
                    ej = (0, f.S)({ artist: t, callback: ev }),
                    eS = (0, f.S)({ artist: t, callback: eb }),
                    eN = (0, u.c)((e) => {
                        (null == ea || ea(), en({ to: o.AppScreen.ArtistScreen }), ej(e));
                    }),
                    ek = (0, k.N)(),
                    eT = (0, u.c)(() => {
                        if (!eC()) {
                            if (ek) return void q.open();
                            (G || eA || (Q(!0), null == el || el()), eS(), es(!eA));
                        }
                    }),
                    ey = (0, u.c)(() => {
                        (Y || e_ || (ee(!0), null == er || er()), eo());
                    }),
                    eR = (0, u.c)((e) => {
                        (e.preventDefault(), e.stopPropagation());
                    }),
                    eI = (0, u.c)((e) => {
                        (ei(e), ex(e));
                    }),
                    eE = (0, n.useMemo)(
                        () =>
                            (0, r.jsx)(
                                D.g,
                                {
                                    artist: t,
                                    onOpenChange: eI,
                                    open: et,
                                    onClick: eR,
                                    className: (0, a.$)(F().menuButton, F().control),
                                    size: 's',
                                    icon: (0, r.jsx)(v.I, { size: 'xxs', variant: 'more' }),
                                    'data-test-id': c.Kq.artist.ARTIST_CONTEXT_MENU_BUTTON,
                                },
                                t.getKey('ArtistContextMenu'),
                            ),
                        [t, eR, eI, et],
                    ),
                    eL = (0, n.useMemo)(() => {
                        var e;
                        if (null == t || null == (e = t.trailer) ? void 0 : e.isAvailable)
                            return (0, r.jsx)(
                                z.n,
                                {
                                    children: (0, r.jsx)(B.k, {
                                        className: (0, a.$)(F().trailerButton, F().control),
                                        radius: 'round',
                                        size: 's',
                                        iconSize: 'xxs',
                                        onClick: ep,
                                    }),
                                },
                                t.getKey('ArtistCardTrailerTooltip'),
                            );
                    }, [t, ep]),
                    ew = (0, n.useMemo)(
                        () =>
                            (0, r.jsx)(
                                O.O,
                                { onClick: ec, isPinned: t.isPinned, className: (0, a.$)(F().pinButton, F().control), withRipple: !1 },
                                t.getKey('PinButton'),
                            ),
                        [t, ec],
                    ),
                    eO = (0, m.L)(() => {
                        if (t.isAvailable)
                            return (0, r.jsx)(
                                _.hg,
                                {
                                    isVisible: et || eh,
                                    className: F().controls,
                                    radius: 'round',
                                    playControl: (0, r.jsx)(
                                        P.D,
                                        {
                                            buttonVariant: 'default',
                                            withHover: !1,
                                            className: (0, a.$)(F().playButton, F().control),
                                            iconSize: 'xl',
                                            variant: 'filled',
                                            onClick: eT,
                                            isPlaying: eA,
                                            disabled: !t.isAvailableForPlaying,
                                        },
                                        t.getKey('PlayButton'),
                                    ),
                                    likeControl: (0, r.jsx)(
                                        L.c,
                                        {
                                            className: (0, a.$)(F().likeButton, F().control),
                                            isLiked: e_,
                                            onClick: ey,
                                            variant: 'default',
                                            size: 's',
                                            iconSize: 'xxs',
                                            disabled: !V.isAuthorized,
                                        },
                                        t.getKey('LikeButton'),
                                    ),
                                    menuControl: eE,
                                    pinControl: ew,
                                    trailerControl: eL,
                                },
                                t.getKey('ArtistCardControls'),
                            );
                    }),
                    eP = (0, n.useMemo)(
                        () =>
                            (0, r.jsx)(h.t, {
                                className: F().cover,
                                radius: 'round',
                                withShadow: !0,
                                'data-test-id': c.Kq.artist.ARTIST_CARD,
                                children: (0, r.jsxs)('div', {
                                    className: F().coverBlock,
                                    onClick: eN,
                                    children: [
                                        (0, r.jsx)(E.B, {
                                            className: F().image,
                                            src: em,
                                            size: 200,
                                            fit: 'cover',
                                            alt: eg,
                                            withAvatarReplace: !0,
                                            isAvailable: t.isAvailable,
                                            'aria-hidden': !0,
                                        }),
                                        eO,
                                    ],
                                }),
                            }),
                        [eN, em, eg, t.isAvailable, eO],
                    );
                return (0, r.jsx)(_.MN, {
                    ref: H,
                    className: (0, a.$)(F().root, i),
                    textPosition: 'center',
                    'aria-label': eg,
                    title: (0, r.jsxs)(r.Fragment, {
                        children: [
                            M,
                            (0, r.jsx)(x.HL, {
                                variant: 'div',
                                type: 'entity',
                                size: 's',
                                weight: 'medium',
                                lineClamp: 2,
                                children: (0, r.jsx)(w.N, {
                                    className: F().titleLink,
                                    href: t.url,
                                    'aria-label': eg,
                                    onClick: eN,
                                    'data-test-id': c.Kq.artist.ARTIST_TITLE,
                                    children: eu,
                                }),
                            }),
                            K,
                        ],
                    }),
                    srTitle: (0, r.jsx)(w.N, { href: t.url, onClick: eN, children: eg }),
                    'data-intersection-property-id': W,
                    contentLinesCount: U,
                    view: eP,
                    'data-test-id': c.Kq.artist.ARTIST_ITEM,
                    children: l,
                });
            });
        },
        11262: (e, t, i) => {
            'use strict';
            i.d(t, { X: () => d });
            var r = i(32290),
                a = i(55178),
                l = i(91027),
                n = i(71730),
                s = i(45477),
                o = i(75582),
                c = i(49399);
            let d = (e, t) => {
                let { notify: i, dismiss: d } = (0, o.l)(),
                    u = (0, a.useRef)(void 0),
                    m = (0, l.c)(() => {
                        var i;
                        (d({ notificationId: u.current }), (u.current = 0));
                        let r = [...(null != (i = e.lastRejectedPagesList) ? i : [])].reverse().filter((t) => {
                            var i;
                            return (null == (i = e.pageStates) ? void 0 : i[t]) === c.G.REJECT;
                        });
                        (e.resetRejectedPagesState(),
                            r.forEach((e) => {
                                t(e);
                            }));
                    });
                (0, a.useEffect)(() => {
                    e.rejectedPagesCount > 0 && !u.current && (u.current = i((0, r.jsx)(n.L, { reloadBlocks: m }), { containerId: s.u.ERROR, autoClose: !1 }));
                }, [d, m, i, e.rejectedPagesCount]);
            };
        },
        15498: (e) => {
            e.exports = {
                root: 'LabelArtistsPage_root__smTJJ',
                scrollContainer: 'LabelArtistsPage_scrollContainer__alDjs',
                important: 'LabelArtistsPage_important__pOZpi',
                shimmerScrollContainer: 'LabelArtistsPage_shimmerScrollContainer__Znpy2',
                footer: 'LabelArtistsPage_footer__JU2P3',
                item: 'LabelArtistsPage_item__kol2m',
                content: 'LabelArtistsPage_content__4hjcX',
                shimmerTitle: 'LabelArtistsPage_shimmerTitle__hXk1g',
            };
        },
        29268: (e, t, i) => {
            'use strict';
            i.d(t, { k: () => u });
            var r = i(32290),
                a = i(55178),
                l = i(60900),
                n = i(21732),
                s = i(63423),
                o = i(82586),
                c = i(59576);
            let d = (e) => {
                    let {
                            variant: t,
                            withRipple: i,
                            size: a,
                            radius: d,
                            iconSize: u,
                            disabled: m,
                            onClick: _,
                            iconClassName: v,
                            className: h,
                            forwardRef: x,
                            style: f,
                            children: C,
                        } = e,
                        { formatMessage: p } = (0, l.A)(),
                        g = p({ id: 'trailer.button-aria-label' });
                    return (0, r.jsx)(s.$, {
                        className: h,
                        color: 'secondary',
                        radius: d,
                        size: a,
                        variant: t,
                        withRipple: i,
                        flexIcon: !0,
                        'aria-label': g,
                        onClick: _,
                        ref: x,
                        icon: (0, r.jsx)(o.I, { variant: 'trailer', size: u, className: v }),
                        disabled: m,
                        'data-intersection-property-id': c.N,
                        style: f,
                        'data-test-id': n.S7.TRAILER_BUTTON,
                        children: C,
                    });
                },
                u = (0, a.forwardRef)((e, t) => (0, r.jsx)(d, { forwardRef: t, ...e }));
        },
        34925: (e, t, i) => {
            'use strict';
            i.d(t, { n: () => n });
            var r = i(32290),
                a = i(60900),
                l = i(70280);
            let n = (e) => {
                let { children: t } = e,
                    { formatMessage: i } = (0, a.A)();
                return (0, r.jsx)(l.m_, {
                    placement: 'top',
                    offsetOptions: 8,
                    hoverSettings: { delay: { open: 500, close: 0 } },
                    text: i({ id: 'entity-names.trailer' }),
                    isFocusEnabled: !1,
                    children: t,
                });
            };
        },
        38223: (e, t, i) => {
            'use strict';
            i.d(t, { D: () => d });
            var r = i(32290),
                a = i(96103),
                l = i(39407),
                n = i(21732),
                s = i(82586),
                o = i(19740),
                c = i(57594);
            let d = (0, a.PA)((e) => {
                let { isDisliked: t, onClick: i, disabled: a, className: d } = e,
                    { user: u } = (0, c.g)();
                return (0, r.jsx)(o.Dr, {
                    onClick: i,
                    className: d,
                    icon: (0, r.jsx)(s.I, { variant: t ? 'disliked' : 'dislike', size: 'xxs' }),
                    role: 'menuitemcheckbox',
                    'aria-checked': t,
                    disabled: a || !u.isAuthorized,
                    'data-test-id': n.S7.CONTEXT_MENU_DISLIKE_BUTTON,
                    children: (0, r.jsx)(l.A, { id: 'interface-actions.do-not-like' }),
                });
            });
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
        45257: (e, t, i) => {
            'use strict';
            i.d(t, { $: () => x });
            var r = i(32290),
                a = i(63618),
                l = i(8055),
                n = i(55178);
            let s = (e) => {
                    let { style: t, forwardRef: i, context: a, ...l } = e,
                        n = (null == a ? void 0 : a.listAriaLabel) || void 0,
                        s = (null == a ? void 0 : a.listRole) || 'region';
                    return (0, r.jsx)('div', { 'aria-labelledby': 'virtual-grid-header', role: s, 'aria-label': n, style: { ...t }, ref: i, ...l });
                },
                o = (0, n.forwardRef)((e, t) => (0, r.jsx)(s, { forwardRef: t, ...e }));
            var c = i(39684),
                d = i.n(c);
            let u = (e) => {
                    let { style: t, forwardRef: i, withFooter: l, withHeader: n, withForceScroll: s, ...o } = e;
                    return (0, r.jsx)('div', {
                        className: (0, a.$)(d().scroller, { [d().scroller_withFooter]: l, [d().scroller_withHeader]: n, [d().scroller_withForceScroll]: s }),
                        style: { ...t },
                        ref: i,
                        ...o,
                        tabIndex: -1,
                    });
                },
                m = (0, n.forwardRef)((e, t) => (0, r.jsx)(u, { forwardRef: t, ...e }));
            var _ = i(62060),
                v = i(31417);
            let h = (e) => {
                    let {
                            pageSize: t,
                            onPageHandler: i,
                            onRangeHandler: a,
                            debounceDurationInMs: l = 100,
                            totalCount: s = 0,
                            shouldTriggerRangeChangedOn: o = [],
                            endReached: c,
                            virtuosoRef: d,
                            ...u
                        } = e,
                        [m, h] = (0, n.useState)(null),
                        x = (0, n.useMemo)(
                            () =>
                                (0, _.A)((e) => {
                                    if ((null == a || a(e), o.length > 0 && h(e), t && i)) {
                                        let r = Math.floor(e.endIndex / t) + 1,
                                            a = Math.floor(e.startIndex / t);
                                        for (let e = a; e < r; e++) i(e);
                                    }
                                }, l),
                            [l, a, t, i, o],
                        );
                    (0, n.useEffect)(() => {
                        o.length > 0 && m && x(m);
                    }, o);
                    let f = (0, n.useMemo)(() => {
                        if (c)
                            return (0, _.A)((e) => {
                                c(e);
                            }, l);
                    }, [c, l]);
                    return (0, r.jsx)(v.sN, { ref: d, rangeChanged: x, totalCount: s, endReached: f, ...u });
                },
                x = (e) => {
                    let {
                            className: t,
                            customComponents: i,
                            onGetDataByPage: s,
                            onGetDataByRange: c,
                            itemClassName: u,
                            itemContentCallback: _,
                            listClassName: v,
                            overscan: x = 700,
                            pageSize: f = 20,
                            totalCount: C,
                            totalRequests: p,
                            debounceDurationInMs: g,
                            initialItemCount: A,
                            minInitialItemCount: b = 20,
                            handleRef: j,
                            alwaysShowScrollbar: S = !1,
                            testId: N,
                            isMobileLayout: k = !1,
                            shouldTriggerRangeChangedOn: T,
                            ...y
                        } = e,
                        [R, I] = (0, n.useState)(!1),
                        E = (0, n.useMemo)(
                            () =>
                                (0, l.A)((e) => {
                                    I(e);
                                }, 100),
                            [],
                        ),
                        L = (0, n.useMemo)(() => {
                            var e, t;
                            return k
                                ? {
                                      Scroller: m,
                                      List: null != (e = null == i ? void 0 : i.List) ? e : o,
                                      Item: null == i ? void 0 : i.Item,
                                      ScrollSeekPlaceholder: null == i ? void 0 : i.ScrollSeekPlaceholder,
                                  }
                                : {
                                      Scroller: m,
                                      List: null != (t = null == i ? void 0 : i.List) ? t : o,
                                      Item: null == i ? void 0 : i.Item,
                                      Header: null == i ? void 0 : i.Header,
                                      Footer: null == i ? void 0 : i.Footer,
                                      ScrollSeekPlaceholder: null == i ? void 0 : i.ScrollSeekPlaceholder,
                                  };
                        }, [i, p, k]),
                        w = A ? Math.min(A, b) : void 0;
                    return (0, r.jsxs)('div', {
                        className: (0, a.$)(d().root, { [d().root_scrolling]: R || S, [d().root_notScrolling]: !R && !S }, t),
                        'data-test-id': N,
                        children: [
                            k && (null == i ? void 0 : i.Header) && i.Header(),
                            (0, r.jsx)(h, {
                                overscan: x,
                                components: L,
                                listClassName: v,
                                itemClassName: u,
                                isScrolling: E,
                                itemContent: _,
                                scrollerRef: j,
                                totalCount: C,
                                pageSize: f,
                                onPageHandler: s,
                                onRangeHandler: c,
                                debounceDurationInMs: g,
                                initialItemCount: w,
                                shouldTriggerRangeChangedOn: T,
                                ...y,
                            }),
                            k && (null == i ? void 0 : i.Footer) && i.Footer(),
                        ],
                    });
                };
        },
        50308: (e, t, i) => {
            'use strict';
            i.d(t, { e: () => l });
            var r = i(32290),
                a = i(89020);
            let l = (e) => {
                let {
                    isActive: t,
                    itemClassName: i,
                    round: l,
                    centered: n,
                    withInfo: s,
                    count: o = 10,
                    shimmerClassName: c,
                    linesCount: d,
                    'aria-label': u,
                    withSubcover: m,
                } = e;
                return Array.from(Array(o).keys()).map((e) =>
                    (0, r.jsx)(
                        a.V,
                        { isActive: t, linesCount: d, className: i, round: l, centered: n, withInfo: s, withSubcover: m, 'aria-label': u, shimmerClassName: c },
                        e,
                    ),
                );
            };
        },
        52199: (e, t, i) => {
            'use strict';
            i.d(t, { r: () => r });
            let r = (e, t, i) => e.replace(i, t);
        },
        56334: (e, t, i) => {
            Promise.resolve().then(i.bind(i, 3676));
        },
        57594: (e, t, i) => {
            'use strict';
            i.d(t, { P: () => l, g: () => n });
            var r = i(55178),
                a = i(25090);
            let l = (0, r.createContext)(null);
            function n() {
                let e = (0, r.useContext)(l);
                if (null === e) throw new a.t('Store cannot be null, please add a context provider', { code: 'E_CONTEXT_STORE_NULL' });
                return e;
            }
        },
        62376: (e, t, i) => {
            'use strict';
            i.d(t, { U: () => l });
            var r = i(70204),
                a = i(34186);
            let l = () => (0, a.N)().get(r.Zf);
        },
        63038: (e, t, i) => {
            'use strict';
            i.d(t, { B: () => r });
            let r = '{tld}';
        },
        70390: (e, t, i) => {
            'use strict';
            i.d(t, { A: () => v });
            var r = i(32290),
                a = i(92708),
                l = i(55178),
                n = i(60900),
                s = i(45477),
                o = i(75582),
                c = i(57594),
                d = i(90357),
                u = i(97647),
                m = i(8097);
            let _ = (e) => {
                    let { artist: t, closeToast: i } = e;
                    return (0, r.jsx)(m.k, {
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
                        { notify: i } = (0, o.l)(),
                        { formatMessage: u } = (0, n.A)(),
                        [m, v] = (0, l.useState)(!1);
                    return (0, l.useCallback)(async () => {
                        if (!e) return;
                        if (!t.isAuthorized)
                            return void i((0, r.jsx)(d.h, { error: u({ id: 'authorization-messages.need-to-authorizate' }) }), { containerId: s.u.ERROR });
                        if (m) return;
                        let l = { ...(0, a.HO)(e), isPinned: !e.isPinned };
                        v(!0);
                        let n = await e.togglePin();
                        (v(!1),
                            n
                                ? i((0, r.jsx)(_, { artist: l }), { containerId: s.u.INFO })
                                : i((0, r.jsx)(d.h, { error: u({ id: 'error-messages.error-during-action' }) }), { containerId: s.u.ERROR }));
                    }, [e, t.isAuthorized, m, u, i]);
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
        71730: (e, t, i) => {
            'use strict';
            i.d(t, { L: () => v });
            var r = i(32290),
                a = i(63618),
                l = i(55178),
                n = i(60900),
                s = i(39407),
                o = i(63423),
                c = i(82586),
                d = i(71926),
                u = i(58534),
                m = i(70718),
                _ = i.n(m);
            let v = (e) => {
                let { reloadBlocks: t, closeToast: i } = e,
                    m = (0, l.useRef)(null),
                    { formatMessage: v } = (0, n.A)();
                (0, l.useEffect)(() => {
                    var e;
                    null == (e = m.current) || e.focus();
                }, []);
                let h = (0, l.useMemo)(
                    () =>
                        (0, r.jsxs)('div', {
                            className: _().message,
                            children: [
                                (0, r.jsx)(d.HL, {
                                    className: _().text,
                                    variant: 'div',
                                    type: 'controls',
                                    size: 'm',
                                    children: (0, r.jsx)(s.A, { id: 'error-messages.error-load-part-page' }),
                                }),
                                (0, r.jsx)(o.$, {
                                    ref: m,
                                    className: _().button,
                                    onClick: t,
                                    variant: 'text',
                                    'aria-label': v({ id: 'interface-actions.reload-part-page' }),
                                    icon: (0, r.jsx)(c.I, { variant: 'reset', size: 'xxs', className: _().icon }),
                                }),
                            ],
                        }),
                    [v, t],
                );
                return (0, r.jsx)(u.$, { className: (0, a.$)(_().root, _().important), message: h, closeToast: i });
            };
        },
        78061: (e, t, i) => {
            'use strict';
            i.d(t, { Jt: () => l, TF: () => s, hZ: () => n });
            var r = function () {
                return (r =
                    Object.assign ||
                    function (e) {
                        for (var t, i = 1, r = arguments.length; i < r; i++)
                            for (var a in (t = arguments[i])) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                        return e;
                    }).apply(this, arguments);
            };
            function a(e, t) {
                if (!t) return '';
                var i = '; ' + e;
                return !0 === t ? i : i + '=' + t;
            }
            function l(e) {
                return (function (e) {
                    for (var t = {}, i = e ? e.split('; ') : [], r = 0; r < i.length; r++) {
                        var a = i[r].split('='),
                            l = a.slice(1).join('=');
                        '"' === l[0] && (l = l.slice(1, -1));
                        try {
                            t[decodeURIComponent(a[0])] = l.replace(/(%[\dA-F]{2})+/gi, decodeURIComponent);
                        } catch (e) {}
                    }
                    return t;
                })(document.cookie)[e];
            }
            function n(e, t, i) {
                var l;
                document.cookie =
                    ((l = r({ path: '/' }, i)),
                    encodeURIComponent(e)
                        .replace(/%(2[346B]|5E|60|7C)/g, decodeURIComponent)
                        .replace(/\(/g, '%28')
                        .replace(/\)/g, '%29') +
                        '=' +
                        encodeURIComponent(t).replace(/%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g, decodeURIComponent) +
                        (function (e) {
                            if ('number' == typeof e.expires) {
                                var t = new Date();
                                (t.setMilliseconds(t.getMilliseconds() + 864e5 * e.expires), (e.expires = t));
                            }
                            return (
                                a('Expires', e.expires ? e.expires.toUTCString() : '') +
                                a('Domain', e.domain) +
                                a('Path', e.path) +
                                a('Secure', e.secure) +
                                a('SameSite', e.sameSite)
                            );
                        })(l));
            }
            function s(e, t) {
                n(e, '', r(r({}, t), { expires: -1 }));
            }
        },
        80528: (e, t, i) => {
            'use strict';
            i.d(t, { g: () => G });
            var r = i(32290),
                a = i(96103),
                l = i(60900),
                n = i(99923),
                s = i(21732),
                o = i(71483),
                c = i(91027),
                d = i(82586),
                u = i(19740),
                m = i(92708),
                _ = i(55178),
                v = i(63380),
                h = i(45477),
                x = i(75582),
                f = i(57594),
                C = i(90357),
                p = i(86269),
                g = i(74196),
                A = i(71926),
                b = i(58534),
                j = i(11323),
                S = i(356),
                N = i.n(S);
            let k = (e) => {
                let { coverUri: t, title: i, isDisliked: a, closeToast: n } = e,
                    { formatMessage: s } = (0, l.A)(),
                    o = s(a ? { id: 'notifications-info.artist-unavailable-in-recommendations' } : { id: 'notifications-info.artist-available-in-recommendations' });
                return (0, r.jsx)(b.$, {
                    closeToast: n,
                    message: (0, r.jsxs)('div', {
                        className: N().message,
                        children: [
                            (0, r.jsx)(g.q, { children: (0, r.jsx)('p', { role: 'alert', 'aria-label': o }) }),
                            (0, r.jsx)(p.t, {
                                className: N().cover,
                                radius: 'round',
                                children: (0, r.jsx)(j.B, { className: N().image, src: t, alt: i, size: 100, fit: 'cover', withAvatarReplace: !0 }),
                            }),
                            (0, r.jsx)(A.HL, { className: N().text, variant: 'div', type: 'controls', size: 'm', 'aria-hidden': !0, children: o }),
                        ],
                    }),
                });
            };
            var T = i(5942),
                y = i(70390),
                R = i(9017),
                I = i(65477),
                E = i(71735),
                L = i(37862),
                w = i(48922),
                O = i(54391),
                P = i(72396),
                B = i(46200),
                z = i(27120),
                D = i(43564),
                U = i(95134),
                F = i(79406),
                M = i(51675),
                K = i(48027),
                H = i(89384),
                W = i(38223),
                $ = i(58237),
                V = i(56367),
                q = i(4914),
                X = i(83755),
                J = i(25160),
                Z = i(4008);
            let G = (0, a.PA)((e) => {
                var t, i, a;
                let { artist: p, onOpenChange: g, open: A, ...b } = e,
                    { shouldShowBuySubscriptionModal: j, showBuySubscriptionModal: S } = (0, B.q)(),
                    {
                        settings: { isMobile: N },
                        modals: { artistAboutModal: G },
                        trailer: Q,
                        user: Y,
                        experiments: ee,
                    } = (0, f.g)(),
                    et = (0, y.A)(p),
                    ei = (0, T.K)(p),
                    er = ((e) => {
                        let { user: t } = (0, f.g)(),
                            { notify: i } = (0, x.l)(),
                            [a, n] = (0, _.useState)(!1),
                            { formatMessage: s } = (0, l.A)();
                        return (0, c.c)(async () => {
                            if (!e) return;
                            if (!t.isAuthorized)
                                return void i((0, r.jsx)(C.h, { error: s({ id: 'authorization-messages.need-to-authorizate' }) }), { containerId: h.u.ERROR });
                            if (a) return;
                            let l = { ...(0, m.HO)(e), isDisliked: !e.isDisliked };
                            n(!0);
                            let o = await e.toggleDislike();
                            (n(!1),
                                o === v.f.OK
                                    ? i((0, r.jsx)(k, { coverUri: l.coverUri, title: l.name, isDisliked: l.isDisliked }), { containerId: h.u.INFO })
                                    : i((0, r.jsx)(C.h, { error: s({ id: 'error-messages.error-during-action' }) }), { containerId: h.u.ERROR }));
                        });
                    })(p),
                    ea = (0, O.F)(),
                    el = ''.concat(L.U.ARTIST, '-').concat(null == p ? void 0 : p.id),
                    { formatMessage: en } = (0, l.A)(),
                    { utmLink: es } = (0, P.f)({ blockId: L.U.ARTIST, contextType: o.K.Artist, contextId: null == p ? void 0 : p.id }),
                    { shareLink: eo, pathname: ec } = (0, H.b)('/artist/:artistId', { params: { artistId: null != (i = null == p ? void 0 : p.id) ? i : '' } }),
                    ed = (0, R.A)({ entityVariant: U.D.ARTIST, urlParams: { id: null == p ? void 0 : p.id } }),
                    { isPlaying: eu, togglePlay: em } = (0, D.B)({
                        seeds: null != (a = null == p ? void 0 : p.seeds) ? a : [],
                        pageIdForFrom: w._Q.RADIO,
                        blockIdForFrom: el,
                        parentContextId: null == p ? void 0 : p.id,
                    }),
                    e_ = (0, E.P)(),
                    ev = en((null == p ? void 0 : p.isComposer) ? { id: 'artist.about-composer' } : { id: 'artist.about-artist' }),
                    eh = (0, c.c)(() => {
                        if (j && Y.isAuthorized) return void S();
                        eu || em();
                    }),
                    ex = (0, c.c)(() => {
                        if (!e_()) {
                            if (j) return void S();
                            (null == p ? void 0 : p.id) && (Q.setUtmLink(es), Q.openArtistTrailer(p.id), ea(n.DomainObjectType.Artist, p.id));
                        }
                    }),
                    ef = (0, c.c)(() => {
                        G.open(null == p ? void 0 : p.id);
                    });
                (0, z.N)(A);
                let eC = { variant: M.Y.ARTIST, id: null == p ? void 0 : p.id, title: null == p ? void 0 : p.name, path: ec },
                    ep = ee.checkExperiment(F.z.WebEditorsFeatures, 'on'),
                    eg = null == p || null == (t = p.trailer) ? void 0 : t.isAvailable,
                    eA = ee.checkExperiment(F.z.WebNextArtistInfo, 'on');
                return (0, r.jsxs)(u.W1, {
                    isMobile: N,
                    offsetOptions: 10,
                    open: A,
                    onOpenChange: g,
                    ariaLabel: en({ id: 'interface-actions.context-menu' }),
                    containerDataTestId: s.Kq.artist.ARTIST_CONTEXT_MENU,
                    ...b,
                    children: [
                        ep && (0, r.jsx)(Z.WithOffline, { fallback: (0, r.jsx)(I.d, { entityVariant: U.D.ARTIST, adminUrl: ed }) }),
                        !N && (0, r.jsx)(Z.WithOffline, { fallback: (0, r.jsx)(V.L, { onClick: et, isPinned: null == p ? void 0 : p.isPinned }) }),
                        (0, r.jsx)(Z.WithOffline, {
                            fallback: (0, r.jsx)($.T, {
                                onClick: ei,
                                isLiked: null == p ? void 0 : p.isLiked,
                                disabled: !Y.isAuthorized || !(null == p ? void 0 : p.isAvailable),
                            }),
                        }),
                        eg && (0, r.jsx)(Z.WithOffline, { fallback: (0, r.jsx)(X.N, { onClick: ex }) }),
                        (0, r.jsx)(Z.WithOffline, {
                            fallback: (0, r.jsx)(J.C, { onClick: eh, disabled: !(null == p ? void 0 : p.isAvailable), variant: K.I.ARTIST, onOpenMenuChange: g }),
                        }),
                        (0, r.jsx)(q.H, { disabled: !p, shareLink: eo, entityMeta: eC }),
                        eA &&
                            (0, r.jsx)(Z.WithOffline, {
                                fallback: (0, r.jsx)(u.Dr, {
                                    onClick: ef,
                                    icon: (0, r.jsx)(d.I, { variant: 'info', size: 'xxs' }),
                                    'data-test-id': s.Kq.artist.ARTIST_CONTEXT_MENU_ABOUT_ARTIST_BUTTON,
                                    children: ev,
                                }),
                            }),
                        (0, r.jsx)(Z.WithOffline, {
                            fallback: (0, r.jsx)(W.D, { onClick: er, isDisliked: null == p ? void 0 : p.isDisliked, disabled: !(null == p ? void 0 : p.isAvailable) }),
                        }),
                    ],
                });
            });
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
        89020: (e, t, i) => {
            'use strict';
            i.d(t, { V: () => c });
            var r = i(32290),
                a = i(63618),
                l = i(21732),
                n = i(79856),
                s = i(80556),
                o = i.n(s);
            let c = (e) => {
                let {
                    isActive: t,
                    className: i,
                    shimmerClassName: s,
                    round: c,
                    'aria-label': d,
                    centered: u,
                    withInfo: m = !0,
                    linesCount: _ = 3,
                    withSubcover: v,
                    radius: h = 'l',
                } = e;
                return (0, r.jsxs)('div', {
                    'aria-label': d,
                    'aria-live': t ? 'polite' : 'off',
                    'aria-busy': t,
                    className: (0, a.$)(o().root, i),
                    'data-test-id': l.S7.ENTITY_CARD_SHIMMER,
                    children: [
                        v && (0, r.jsx)(n.W, { isActive: t, className: o().subcover, radius: 'l' }),
                        (0, r.jsx)(n.W, { isActive: t, className: (0, a.$)(o().cover, s, { [o().cover_round]: c, [o().cover_withSubcover]: v }), radius: h }),
                        m &&
                            (0, r.jsx)('div', {
                                className: (0, a.$)(o().infoContainer, o()['content_linesCount_'.concat(_)], { [o().infoContainer_centered]: u }),
                                children: (0, r.jsx)(n.W, { isActive: t, className: (0, a.$)(o().title, { [o().title_withSubcover]: v }), radius: 's' }),
                            }),
                    ],
                });
            };
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
    },
    (e) => {
        (e.O(
            0,
            [
                1010, 7412, 7231, 2147, 9763, 4517, 1256, 3608, 6561, 6706, 1311, 5472, 8378, 900, 2536, 2146, 3353, 2474, 8035, 347, 2732, 1410, 1417, 3266, 8506, 6050,
                5806, 7702, 6874, 9155, 861, 4668, 9740, 1175, 4499, 8915, 8816, 3841, 4220, 9562, 7358,
            ],
            () => e((e.s = 56334)),
        ),
            (_N_E = e.O()));
    },
]);
