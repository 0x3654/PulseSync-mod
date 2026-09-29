(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [6902],
    {
        356: (e) => {
            e.exports = {
                message: 'NotificationDislike_message__RoxZH',
                text: 'NotificationDislike_text__fJHts',
                cover: 'NotificationDislike_cover__N5Oqu',
                image: 'NotificationDislike_image__jn4_4',
            };
        },
        2125: (e, t, i) => {
            'use strict';
            i.d(t, { h: () => a });
            var r = i(37862),
                a = (function (e) {
                    return (
                        (e[(e.RUP_MAIN_RADIO = ''.concat(r.U.RUP, '_').concat(r.U.MAIN, '-').concat(r.U.RADIO))] = 'RUP_MAIN_RADIO'),
                        (e[(e.DISCOGRAPHY_CAROUSEL = ''.concat(r.U.DISCOGRAPHY, '_').concat(r.U.CAROUSEL))] = 'DISCOGRAPHY_CAROUSEL'),
                        (e[(e.ALBUMS_CAROUSEL = ''.concat(r.U.ALBUMS, '_').concat(r.U.CAROUSEL))] = 'ALBUMS_CAROUSEL'),
                        (e[(e.COMPILATIONS_CAROUSEL = ''.concat(r.U.COMPILATIONS, '_').concat(r.U.CAROUSEL))] = 'COMPILATIONS_CAROUSEL'),
                        (e[(e.PLAYLISTS_CAROUSEL = ''.concat(r.U.PLAYLISTS, '_').concat(r.U.CAROUSEL))] = 'PLAYLISTS_CAROUSEL'),
                        (e[(e.ARTISTS_CAROUSEL = ''.concat(r.U.ARTISTS, '_').concat(r.U.CAROUSEL))] = 'ARTISTS_CAROUSEL'),
                        (e[(e.CLIPS_CAROUSEL = ''.concat(r.U.CLIPS, '_').concat(r.U.CAROUSEL))] = 'CLIPS_CAROUSEL'),
                        (e[(e.DISCOVERY_BLOCK = ''.concat(r.U.DISCOVERY, '_').concat(r.U.BLOCK))] = 'DISCOVERY_BLOCK'),
                        (e[(e.PLAYLISTS_SIMILAR = ''.concat(r.U.PLAYLISTS, '_').concat(r.U.SIMILAR))] = 'PLAYLISTS_SIMILAR'),
                        (e[(e.SEARCH_HISTORY = ''.concat(r.U.SEARCH, '_').concat(r.U.HISTORY))] = 'SEARCH_HISTORY'),
                        (e[(e.PLAYLISTS_SIMILAR_PLAYLIST = ''.concat(r.U.PLAYLISTS, '_').concat(r.U.SIMILAR, '_').concat(r.U.PLAYLIST))] = 'PLAYLISTS_SIMILAR_PLAYLIST'),
                        (e[(e.SEARCH_BEST_RESULTS = ''.concat(r.U.SEARCH, '_').concat(r.U.BEST_RESULTS))] = 'SEARCH_BEST_RESULTS'),
                        (e[(e.SEARCH_OPEN_BEST_RESULTS = ''.concat(r.U.SEARCH, '_').concat(r.U.OPEN_BEST_RESULTS))] = 'SEARCH_OPEN_BEST_RESULTS'),
                        e
                    );
                })({});
        },
        3785: (e, t, i) => {
            'use strict';
            var r;
            (i.d(t, { M: () => r }),
                (function (e) {
                    ((e.MODAL = 'modal'),
                        (e.FOREIGN_AGENT = 'foreignAgent'),
                        (e.INFORMATIONAL = 'informational'),
                        (e.AGE_18 = 'age18'),
                        (e.EXPLICIT = 'explicit'),
                        (e.DESCRIPTION_TEXT = 'descriptionText'),
                        (e.AGE_18_ICON = 'age18Icon'),
                        (e.EXPLICIT_ICON = 'explicitIcon'),
                        (e.EXCLAMATION_ICON = 'exclamationIcon'));
                })(r || (r = {})));
        },
        5942: (e, t, i) => {
            'use strict';
            i.d(t, { K: () => C });
            var r = i(32290),
                a = i(92708),
                s = i(55178),
                l = i(60900),
                o = i(63380),
                n = i(45477),
                c = i(75582),
                d = i(57594),
                u = i(90357),
                m = i(20472),
                _ = i(97647),
                v = i(97755);
            let p = (e) => {
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
                C = (e) => {
                    let { user: t } = (0, d.g)(),
                        { notify: i } = (0, c.l)(),
                        [m, _] = (0, s.useState)(!1),
                        { formatMessage: v } = (0, l.A)();
                    return (0, s.useCallback)(async () => {
                        if (!e) return;
                        if (!t.isAuthorized)
                            return void i((0, r.jsx)(u.h, { error: v({ id: 'authorization-messages.need-to-authorizate' }) }), { containerId: n.u.ERROR });
                        if (m) return;
                        let s = { ...(0, a.HO)(e), isLiked: !e.isLiked };
                        _(!0);
                        let l = await e.toggleLike();
                        (_(!1),
                            l === o.f.OK
                                ? i((0, r.jsx)(p, { artist: s }), { containerId: n.u.INFO })
                                : i((0, r.jsx)(u.h, { error: v({ id: 'error-messages.error-during-action' }) }), { containerId: n.u.ERROR }));
                    }, [e, t.isAuthorized, m, v, i]);
                };
        },
        7474: (e, t, i) => {
            'use strict';
            i.d(t, { a: () => z });
            var r = i(32290),
                a = i(63618),
                s = i(96103),
                l = i(55178),
                o = i(60900),
                n = i(99923),
                c = i(21732),
                d = i(71483),
                u = i(91027),
                m = i(6752),
                _ = i(14934),
                v = i(82586),
                p = i(86269),
                C = i(71926),
                h = i(91853),
                A = i(5942),
                k = i(70390),
                f = i(71735),
                x = i(47745),
                S = i(2969),
                L = i(54391),
                y = i(23352),
                T = i(72396),
                b = i(5537),
                g = i(32641),
                I = i(28999),
                j = i(90169),
                R = i(57594),
                N = i(11323),
                P = i(92744),
                O = i(61258),
                E = i(10180),
                B = i(90326),
                U = i(29268),
                w = i(34925),
                D = i(80528),
                M = i(42048),
                H = i.n(M);
            let z = (0, s.PA)((e) => {
                let { artist: t, className: i, children: s, contentLinesCount: M, topTitleElement: z, bottomTitleElement: F } = e,
                    { ref: K, intersectionPropertyId: Y } = (0, y.n)(),
                    {
                        trailer: V,
                        user: W,
                        paywall: { modal: $ },
                    } = (0, R.g)(),
                    { from: X, utmLink: G } = (0, T.f)({ contextId: t.id, contextType: d.K.Artist }),
                    { formatMessage: q } = (0, o.A)(),
                    [Q, Z] = (0, l.useState)(!1),
                    [J, ee] = (0, l.useState)(!1),
                    [et, ei] = (0, l.useState)(!1),
                    { sendLikeSearchFeedback: er, sendNavigateSearchFeedback: ea, sendPlaySearchFeedback: es } = (0, I.z)(),
                    el = (0, x.N)(),
                    eo = (0, S.b)(),
                    en = (0, A.K)(t),
                    ec = (0, k.A)(t),
                    { id: ed, name: eu, coverUri: em, isLiked: e_ } = t,
                    ev = (0, g.Z)(t.url),
                    [ep, eC] = (0, l.useState)(!1),
                    eh = (0, L.F)(),
                    eA = (0, f.P)(),
                    ek = (0, u.c)((e) => {
                        if ((e.stopPropagation(), eA())) return void e.preventDefault();
                        (V.openArtistTrailer(t.id), eh(n.DomainObjectType.Artist, t.id));
                    }),
                    ef = (0, l.useMemo)(() => {
                        let e = q({ id: 'entity-names.artist-name' }, { artistName: eu }),
                            t = e_ ? q({ id: 'entity-names.has-your-like' }) : '';
                        return ''.concat(e, ' ').concat(t);
                    }, [eu, e_, q]),
                    { isPlaying: ex, togglePlay: eS } = (0, j.D)({
                        playContextParams: { contextData: { type: d.K.Artist, meta: { id: Number(ed) }, from: X, utmLink: G }, loadContextMeta: !0 },
                    }),
                    eL = (0, h.S)({ artist: t, callback: ev }),
                    ey = (0, h.S)({ artist: t, callback: eS }),
                    eT = (0, u.c)((e) => {
                        (null == ea || ea(), el({ to: n.AppScreen.ArtistScreen }), eL(e));
                    }),
                    eb = (0, b.N)(),
                    eg = (0, u.c)(() => {
                        if (!eA()) {
                            if (eb) return void $.open();
                            (Q || ex || (Z(!0), null == es || es()), ey(), eo(!ex));
                        }
                    }),
                    eI = (0, u.c)(() => {
                        (J || e_ || (ee(!0), null == er || er()), en());
                    }),
                    ej = (0, u.c)((e) => {
                        (e.preventDefault(), e.stopPropagation());
                    }),
                    eR = (0, u.c)((e) => {
                        (ei(e), eC(e));
                    }),
                    eN = (0, l.useMemo)(
                        () =>
                            (0, r.jsx)(
                                D.g,
                                {
                                    artist: t,
                                    onOpenChange: eR,
                                    open: et,
                                    onClick: ej,
                                    className: (0, a.$)(H().menuButton, H().control),
                                    size: 's',
                                    icon: (0, r.jsx)(v.I, { size: 'xxs', variant: 'more' }),
                                    'data-test-id': c.Kq.artist.ARTIST_CONTEXT_MENU_BUTTON,
                                },
                                t.getKey('ArtistContextMenu'),
                            ),
                        [t, ej, eR, et],
                    ),
                    eP = (0, l.useMemo)(() => {
                        var e;
                        if (null == t || null == (e = t.trailer) ? void 0 : e.isAvailable)
                            return (0, r.jsx)(
                                w.n,
                                {
                                    children: (0, r.jsx)(U.k, {
                                        className: (0, a.$)(H().trailerButton, H().control),
                                        radius: 'round',
                                        size: 's',
                                        iconSize: 'xxs',
                                        onClick: ek,
                                    }),
                                },
                                t.getKey('ArtistCardTrailerTooltip'),
                            );
                    }, [t, ek]),
                    eO = (0, l.useMemo)(
                        () =>
                            (0, r.jsx)(
                                E.O,
                                { onClick: ec, isPinned: t.isPinned, className: (0, a.$)(H().pinButton, H().control), withRipple: !1 },
                                t.getKey('PinButton'),
                            ),
                        [t, ec],
                    ),
                    eE = (0, m.L)(() => {
                        if (t.isAvailable)
                            return (0, r.jsx)(
                                _.hg,
                                {
                                    isVisible: et || ep,
                                    className: H().controls,
                                    radius: 'round',
                                    playControl: (0, r.jsx)(
                                        B.D,
                                        {
                                            buttonVariant: 'default',
                                            withHover: !1,
                                            className: (0, a.$)(H().playButton, H().control),
                                            iconSize: 'xl',
                                            variant: 'filled',
                                            onClick: eg,
                                            isPlaying: ex,
                                            disabled: !t.isAvailableForPlaying,
                                        },
                                        t.getKey('PlayButton'),
                                    ),
                                    likeControl: (0, r.jsx)(
                                        P.c,
                                        {
                                            className: (0, a.$)(H().likeButton, H().control),
                                            isLiked: e_,
                                            onClick: eI,
                                            variant: 'default',
                                            size: 's',
                                            iconSize: 'xxs',
                                            disabled: !W.isAuthorized,
                                        },
                                        t.getKey('LikeButton'),
                                    ),
                                    menuControl: eN,
                                    pinControl: eO,
                                    trailerControl: eP,
                                },
                                t.getKey('ArtistCardControls'),
                            );
                    }),
                    eB = (0, l.useMemo)(
                        () =>
                            (0, r.jsx)(p.t, {
                                className: H().cover,
                                radius: 'round',
                                withShadow: !0,
                                'data-test-id': c.Kq.artist.ARTIST_CARD,
                                children: (0, r.jsxs)('div', {
                                    className: H().coverBlock,
                                    onClick: eT,
                                    children: [
                                        (0, r.jsx)(N.B, {
                                            className: H().image,
                                            src: em,
                                            size: 200,
                                            fit: 'cover',
                                            alt: ef,
                                            withAvatarReplace: !0,
                                            isAvailable: t.isAvailable,
                                            'aria-hidden': !0,
                                        }),
                                        eE,
                                    ],
                                }),
                            }),
                        [eT, em, ef, t.isAvailable, eE],
                    );
                return (0, r.jsx)(_.MN, {
                    ref: K,
                    className: (0, a.$)(H().root, i),
                    textPosition: 'center',
                    'aria-label': ef,
                    title: (0, r.jsxs)(r.Fragment, {
                        children: [
                            z,
                            (0, r.jsx)(C.HL, {
                                variant: 'div',
                                type: 'entity',
                                size: 's',
                                weight: 'medium',
                                lineClamp: 2,
                                children: (0, r.jsx)(O.N, {
                                    className: H().titleLink,
                                    href: t.url,
                                    'aria-label': ef,
                                    onClick: eT,
                                    'data-test-id': c.Kq.artist.ARTIST_TITLE,
                                    children: eu,
                                }),
                            }),
                            F,
                        ],
                    }),
                    srTitle: (0, r.jsx)(O.N, { href: t.url, onClick: eT, children: ef }),
                    'data-intersection-property-id': Y,
                    contentLinesCount: M,
                    view: eB,
                    'data-test-id': c.Kq.artist.ARTIST_ITEM,
                    children: s,
                });
            });
        },
        8612: (e, t, i) => {
            'use strict';
            (i.r(t), i.d(t, { default: () => W }));
            var r = i(32290),
                a = i(21916),
                s = i(55178),
                l = i(63618),
                o = i(96103),
                n = i(60900),
                c = i(46049),
                d = i(71926),
                u = i(64170),
                m = i(77435),
                _ = i(7474),
                v = i(7999),
                p = i(64538),
                C = i(2125),
                h = i(48922),
                A = i(95226),
                k = i(22714),
                f = i(83808),
                x = i(83920),
                S = i(3796),
                L = i(49259),
                y = i(45066),
                T = i(98148),
                b = i(74694),
                g = i(22556),
                I = i(44242),
                j = i(42125),
                R = i(44338),
                N = i(24535),
                P = i(47216),
                O = i(94821),
                E = i(26365),
                B = i(43993),
                U = i(49124);
            async function w(e, t) {
                let { locale: i, fullUrl: r, url: a, tld: s, host: l } = t,
                    o = await (0, j.W)(i),
                    n = e.title.fullTitle,
                    c = o({ id: 'metadata.genre-title' }, { genreTitle: n }),
                    d = 'artists' in e ? e.artists : void 0,
                    u = (0, B.f)({ genreTitle: n, artists: d, messageFormatter: o }),
                    m = U.env.ASSET_PREFIX || '',
                    _ = ''.concat(l).concat(m, '/meta/og-image.png');
                return {
                    title: c,
                    description: u,
                    openGraph: (0, N.i)({
                        ogTitle: (0, R.N)(n),
                        ogDescription: u,
                        fullUrl: null != r ? r : '',
                        locale: i,
                        siteName: o({ id: 'metadata.yandex-music' }),
                        ogImage: _,
                    }),
                    twitter: (0, P.H)({ cardType: O.W.APP, title: c, url: null != a ? a : '', appName: o({ id: 'metadata.yandex-music' }) }),
                    appLinks: (0, I.X)({
                        additional: { tld: s, url: null != a ? a : '', fullUrl: null != r ? r : '', host: l },
                        appName: o({ id: 'metadata.yandex-music' }),
                    }),
                    alternates: (0, E.S)('/genre/:metatagId', t.tld, { params: { metatagId: e.id } }),
                };
            }
            var D = i(44936),
                M = i(36504),
                H = i(25049),
                z = i(34627),
                F = i.n(z);
            let K = (0, o.PA)((e) => {
                let { metatagId: t, preloadedMeta: i } = e,
                    o = (0, L.s)(y.n.GENRE),
                    { formatMessage: I } = (0, n.A)(),
                    { contentScrollRef: j, setContentScrollRef: R } = (0, x.g)(),
                    N = (0, f.W)();
                return (o.isNotFound && (0, a.notFound)(),
                (0, s.useEffect)(
                    () => () => {
                        o.reset();
                    },
                    [o],
                ),
                (0, S.J)(o.isResolved),
                ((e) => {
                    (0, s.useEffect)(() => {
                        e &&
                            w(
                                ((e) => ({
                                    id: '',
                                    title: { title: '', fullTitle: e.fullTitle || '' },
                                    liked: !1,
                                    tracks: [],
                                    artists: e.artists.map(M.N),
                                    composers: [],
                                    albums: e.albums.map(D.f),
                                    playlists: e.playlists.map(H.J),
                                }))(e),
                                { fullUrl: null, locale: null, url: null, tld: '', host: '' },
                            ).then((e) => {
                                (0, g.j)(e);
                            });
                    }, [e]);
                })(o),
                t && o.isNeededToLoad && (0, s.use)(o.getData({ id: t, preloadedMeta: i })),
                o.isRejected && !o.isNotFound)
                    ? (0, r.jsx)(u.SomethingWentWrong, {})
                    : (0, r.jsx)(k.n, {
                          pageId: h._Q.GENRE,
                          children: (0, r.jsxs)(v.h, {
                              scrollElement: j,
                              outerTitle: o.fullTitle,
                              children: [
                                  (0, r.jsx)(b.Y, {
                                      variant: b.V.TEXT,
                                      withForwardControl: !1,
                                      withBackwardControl: N.canBack,
                                      children: (0, r.jsx)(d.DZ, { variant: 'h2', weight: 'bold', size: 'xl', lineClamp: 1, children: o.fullTitle }),
                                  }),
                                  (0, r.jsx)(c.N, {
                                      className: F().root,
                                      containerClassName: F().content,
                                      ref: R,
                                      children: (0, r.jsxs)('div', {
                                          className: F().carouselBlocks,
                                          children: [
                                              o.hasPlaylists &&
                                                  (0, r.jsx)(A.F, {
                                                      blockId: C.h.PLAYLISTS_CAROUSEL,
                                                      blockType: C.h.PLAYLISTS_CAROUSEL,
                                                      blockPosX: 1,
                                                      blockPosY: 1,
                                                      blockIdForFrom: C.h.PLAYLISTS_CAROUSEL,
                                                      objectsCount: o.albums.length,
                                                      children: (0, r.jsx)(p.E, {
                                                          isShimmerVisible: o.isLoading,
                                                          isShimmerActive: !0,
                                                          headerClassName: (0, l.$)(F().carouselBlockHeader, F().carouselBlock),
                                                          containerClassName: F().carouselBlock,
                                                          playlists: o.playlists,
                                                          title: I({ id: 'entity-names.popular-playlists' }),
                                                          viewAllActionLink: '/genre/'.concat(o.id, '/playlists'),
                                                      }),
                                                  }),
                                              o.hasAlbums &&
                                                  (0, r.jsx)(A.F, {
                                                      blockId: C.h.ALBUMS_CAROUSEL,
                                                      blockType: C.h.ALBUMS_CAROUSEL,
                                                      blockPosX: 1,
                                                      blockPosY: 2,
                                                      blockIdForFrom: C.h.ALBUMS_CAROUSEL,
                                                      objectsCount: o.albums.length,
                                                      children: (0, r.jsx)(m.p, {
                                                          isShimmerVisible: o.isLoading,
                                                          isShimmerActive: !0,
                                                          headerClassName: (0, l.$)(F().carouselBlockHeader, F().carouselBlock),
                                                          containerClassName: F().carouselBlock,
                                                          albums: o.albums,
                                                          title: I({ id: 'entity-names.new-albums' }),
                                                          viewAllActionLink: '/genre/'.concat(o.id, '/albums'),
                                                      }),
                                                  }),
                                              o.hasArtists &&
                                                  (0, r.jsx)(A.F, {
                                                      blockId: C.h.ARTISTS_CAROUSEL,
                                                      blockType: C.h.ARTISTS_CAROUSEL,
                                                      blockPosX: 1,
                                                      blockPosY: 3,
                                                      blockIdForFrom: C.h.ARTISTS_CAROUSEL,
                                                      objectsCount: o.albums.length,
                                                      children: (0, r.jsx)(T.O, {
                                                          isShimmerVisible: o.isLoading,
                                                          isShimmerActive: !0,
                                                          isShimmerCentered: !0,
                                                          isShimmerRounded: !0,
                                                          headerClassName: (0, l.$)(F().carouselBlockHeader, F().carouselBlock),
                                                          containerClassName: F().carouselBlock,
                                                          title: I({ id: 'entity-names.popular-artists' }),
                                                          viewAllActionLink: '/genre/'.concat(o.id, '/artists'),
                                                          children: o.artists.map((e) => (0, r.jsx)(_.a, { artist: e, contentLinesCount: 3 }, e.id)),
                                                      }),
                                                  }),
                                          ],
                                      }),
                                  }),
                              ],
                          }),
                      });
            });
            var Y = i(79856);
            let V = () => {
                    let { formatMessage: e } = (0, n.A)(),
                        { contentScrollRef: t, setContentScrollRef: i } = (0, x.g)(),
                        a = (0, f.W)();
                    return (0, r.jsxs)(v.h, {
                        scrollElement: t,
                        children: [
                            (0, r.jsx)(b.Y, {
                                variant: b.V.TEXT,
                                withForwardControl: !1,
                                withBackwardControl: a.canBack,
                                children: (0, r.jsx)(Y.W, { className: F().shimmerTitle, radius: 'l' }),
                            }),
                            (0, r.jsx)(c.N, {
                                className: F().root,
                                containerClassName: F().content,
                                ref: i,
                                children: (0, r.jsxs)('div', {
                                    className: F().carouselBlocks,
                                    children: [
                                        (0, r.jsx)(p.E, {
                                            isShimmerVisible: !0,
                                            isShimmerActive: !0,
                                            headerClassName: (0, l.$)(F().carouselBlockHeader, F().carouselBlock),
                                            containerClassName: F().carouselBlock,
                                            title: e({ id: 'entity-names.popular-playlists' }),
                                        }),
                                        (0, r.jsx)(m.p, {
                                            isShimmerVisible: !0,
                                            isShimmerActive: !0,
                                            headerClassName: (0, l.$)(F().carouselBlockHeader, F().carouselBlock),
                                            containerClassName: F().carouselBlock,
                                            title: e({ id: 'entity-names.new-albums' }),
                                        }),
                                        (0, r.jsx)(T.O, {
                                            isShimmerVisible: !0,
                                            isShimmerActive: !0,
                                            isShimmerCentered: !0,
                                            isShimmerRounded: !0,
                                            headerClassName: (0, l.$)(F().carouselBlockHeader, F().carouselBlock),
                                            containerClassName: F().carouselBlock,
                                            title: e({ id: 'entity-names.popular-artists' }),
                                        }),
                                    ],
                                }),
                            }),
                        ],
                    });
                },
                W = () => {
                    let e = (0, a.useSearchParams)().get('metatagId');
                    return (e || (0, a.notFound)(), (0, r.jsx)(s.Suspense, { fallback: (0, r.jsx)(V, {}), children: (0, r.jsx)(K, { metatagId: e }) }));
                };
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
            i.d(t, { r: () => s });
            var r = i(55178),
                a = i(60900);
            let s = (e) => {
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
        19620: (e, t, i) => {
            'use strict';
            i.d(t, { T: () => k });
            var r = i(32290),
                a = i(63618),
                s = i(55178),
                l = i(99923),
                o = i(21732),
                n = i(82586),
                c = i(50162),
                d = i(86269),
                u = i(79856),
                m = i(71926),
                _ = i(95481),
                v = i(47745),
                p = i(61258),
                C = i(69e3),
                h = i.n(C);
            let A = (e) => {
                    let {
                            className: t,
                            coverUrl: i,
                            labeledForId: C,
                            subTitle: A,
                            title: k,
                            description: f,
                            viewAllActionLink: x,
                            controls: S,
                            titleSize: L = 'm',
                            coverBackgroundColor: y,
                            coverRadius: T = 's',
                            titleClassName: b,
                            titleLineClamp: g,
                            fallbackIconVariant: I,
                            available: j = !0,
                            onViewAllAction: R,
                            titleChildren: N,
                            children: P,
                            headingRef: O,
                            coverContainerClassName: E,
                            headingVariant: B = 'h3',
                            withDescriptionWidthLimit: U = !0,
                            isShimmerVisible: w,
                            isShimmerActive: D,
                            withCover: M,
                            withDescription: H,
                            forwardRef: z,
                            shimmerCoverClassName: F,
                            shouldSendAnalyticsOnLoaded: K,
                            ...Y
                        } = e,
                        V = (0, _.f)(),
                        W = (0, s.useRef)(null),
                        $ = i || M,
                        X = f || H,
                        G = (0, s.useCallback)(() => {
                            W.current && 'focus' in W.current && W.current.focus();
                        }, []),
                        q = (0, v.N)(),
                        Q = (0, s.useCallback)(() => {
                            R ? R() : q({ to: l.AppScreen.Link });
                        }, [q, R]);
                    (0, s.useEffect)(() => {
                        K && V();
                    }, [K, V]);
                    let Z = (0, s.useMemo)(
                            () =>
                                k && x && j
                                    ? (0, r.jsxs)(p.N, {
                                          className: h().title,
                                          containerClassName: h().linkContainer,
                                          textClassName: h().linkText,
                                          icon: (0, r.jsx)(n.I, { className: h().titleIcon, size: 'xs', variant: 'arrowRight' }),
                                          iconPosition: 'right',
                                          href: x,
                                          onClick: Q,
                                          'data-test-id': o.S7.BLOCK_HEADER_TITLE,
                                          children: [
                                              (0, r.jsx)(m.DZ, {
                                                  id: C,
                                                  className: (0, a.$)(h().heading, b),
                                                  variant: B,
                                                  size: L,
                                                  weight: 'bold',
                                                  lineClamp: g,
                                                  ref: O,
                                                  children: k,
                                              }),
                                              N,
                                          ],
                                      })
                                    : (0, r.jsxs)('div', {
                                          className: h().title,
                                          children: [
                                              (0, r.jsx)(m.DZ, {
                                                  id: C,
                                                  className: (0, a.$)(h().heading, b, { [h().heading_notAvailable]: !j }),
                                                  variant: B,
                                                  size: L,
                                                  weight: 'bold',
                                                  lineClamp: g,
                                                  ref: O,
                                                  'data-test-id': o.S7.BLOCK_HEADER_TITLE,
                                                  children: k,
                                              }),
                                              N,
                                          ],
                                      }),
                            [j, Q, O, B, C, k, b, g, L, x, N],
                        ),
                        J = (0, s.useMemo)(() => (H && w ? (0, r.jsx)(u.W, { isActive: D, className: h().shimmerDescription }) : f), [H, w, f, D]),
                        ee = (0, s.useMemo)(
                            () =>
                                M && w
                                    ? (0, r.jsx)(u.W, { isActive: D, className: (0, a.$)(h().shimmerCover, F), radius: 's' })
                                    : (0, r.jsx)(c._V, {
                                          src: i,
                                          fallbackIconVariant: I,
                                          style: { backgroundColor: y },
                                          className: h().cover,
                                          ref: W,
                                          onClick: G,
                                          fit: 'cover',
                                          withAvatarReplace: !0,
                                          fallbackIconSize: 's',
                                          'aria-hidden': !0,
                                          'data-test-id': o.S7.BLOCK_HEADER_COVER,
                                      }),
                            [y, i, I, G, D, w, F, M],
                        );
                    return (0, r.jsxs)('div', {
                        className: (0, a.$)(h().root, t),
                        ref: z,
                        ...Y,
                        'data-test-id': o.S7.BLOCK_HEADER,
                        children: [
                            (0, r.jsxs)('div', {
                                className: h().start,
                                children: [
                                    $ && (0, r.jsx)(d.t, { radius: T, className: (0, a.$)(h().coverContainer, E), children: ee }),
                                    (0, r.jsxs)('div', {
                                        className: h().textContainer,
                                        children: [
                                            A,
                                            Z,
                                            X &&
                                                (0, r.jsx)(m.HL, {
                                                    id: ''.concat(C, '-description'),
                                                    variant: 'span',
                                                    type: 'text',
                                                    size: 'm',
                                                    weight: 'medium',
                                                    lineClamp: U ? 2 : void 0,
                                                    className: (0, a.$)(h().description, { [h().description_widthLimit]: U }),
                                                    'data-test-id': o.S7.BLOCK_HEADER_DESCRIPTION,
                                                    children: J,
                                                }),
                                        ],
                                    }),
                                ],
                            }),
                            S || P,
                        ],
                    });
                },
                k = (0, s.forwardRef)((e, t) => (0, r.jsx)(A, { forwardRef: t, ...e }));
        },
        25049: (e, t, i) => {
            'use strict';
            i.d(t, { J: () => a });
            var r = i(96151);
            let a = (e) => {
                var t;
                return e
                    ? {
                          playlistUuid: e.uuid,
                          available: e.isAvailable,
                          uid: e.uid,
                          kind: e.kind,
                          title: e.title || '',
                          revision: e.revision || 0,
                          snapshot: 0,
                          trackCount: e.tracksCount || 0,
                          visibility: e.visibility || 'public',
                          collective: !1,
                          created: '',
                          modified: '',
                          isBanner: !1,
                          isPremiere: !1,
                          durationMs: 0,
                          cover: { uri: e.coverUri || '', type: r.Q.PIC, prefix: '', custom: !1 },
                          ogImage: e.coverUri || '',
                          tags: [],
                          likesCount: e.likesCount || 0,
                          generatedPlaylistType: e.generatedPlaylistType || '',
                          trailer: { available: !!(null == (t = e.trailer) ? void 0 : t.isAvailable) },
                      }
                    : {
                          playlistUuid: '',
                          available: !0,
                          uid: 0,
                          kind: 0,
                          title: '',
                          revision: 0,
                          snapshot: 0,
                          trackCount: 0,
                          visibility: 'public',
                          collective: !1,
                          created: '',
                          modified: '',
                          isBanner: !1,
                          isPremiere: !1,
                          durationMs: 0,
                          cover: { uri: '', type: r.Q.PIC, prefix: '', custom: !1 },
                          ogImage: '',
                          tags: [],
                          likesCount: 0,
                          generatedPlaylistType: '',
                          trailer: { available: !0 },
                      };
            };
        },
        26042: (e, t, i) => {
            'use strict';
            i.d(t, { B: () => l });
            var r = i(32290),
                a = i(55178),
                s = i(10936);
            let l = (e) => {
                let { objectId: t, objectPosX: i, objectPosY: l, objectPos: o, objectType: n, objectsCount: c, mainObjectId: d, mainObjectType: u, children: m } = e,
                    _ = (0, a.useMemo)(
                        () => ({ objectId: t, objectPosX: i, objectPosY: l, objectPos: o, objectType: n, objectsCount: c, mainObjectId: d, mainObjectType: u }),
                        [t, i, l, o, n, c, d, u],
                    );
                return (0, r.jsx)(s.l.Provider, { value: _, children: m });
            };
        },
        30564: (e, t, i) => {
            'use strict';
            i.d(t, { k: () => s });
            var r = i(32290),
                a = i(89020);
            let s = function () {
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
        34627: (e) => {
            e.exports = {
                root: 'GenrePage_root___kL_v',
                content: 'GenrePage_content__NRwAJ',
                shimmerTitle: 'GenrePage_shimmerTitle__hrgjK',
                carouselBlocks: 'GenrePage_carouselBlocks__kR63B',
                carouselBlock: 'GenrePage_carouselBlock__QCkpK',
                carouselBlockHeader: 'GenrePage_carouselBlockHeader__u12sn',
            };
        },
        36504: (e, t, i) => {
            'use strict';
            i.d(t, { N: () => s });
            var r = i(96151),
                a = i(87151);
            let s = (e) => {
                var t, i, s, l, o;
                return e
                    ? {
                          id: e.id,
                          decomposed:
                              (null == (t = e.decomposed)
                                  ? void 0
                                  : t.map((e) => {
                                        var t;
                                        return {
                                            id: e.id,
                                            name: e.name,
                                            various: e.various || !1,
                                            composer: e.isComposer || !1,
                                            item: e.separator,
                                            available: null == (t = e.isAvailable) || t,
                                            disclaimers: (0, a.H)(e.disclaimers),
                                        };
                                    })) || [],
                          name: e.name,
                          cover: { uri: e.coverUri || '', type: r.Q.PIC, prefix: '', custom: !1 },
                          ogImage: '',
                          derivedColors: { accent: '', average: e.averageColor || '', miniPlayer: '', waveText: '' },
                          available: e.isAvailable,
                          disclaimers: (0, a.H)(e.disclaimers),
                          counts: {
                              directAlbums: (null == (i = e.counts) ? void 0 : i.albums) || 0,
                              alsoAlbums: (null == (s = e.counts) ? void 0 : s.compilations) || 0,
                              tracks: (null == (l = e.counts) ? void 0 : l.tracks) || 0,
                              alsoTracks: 0,
                          },
                          trailer: { available: !!(null == (o = e.trailer) ? void 0 : o.isAvailable) },
                          hasPromotions: !1,
                          genres: [],
                          links: [],
                          ticketsAvailable: !1,
                          ratings: { week: 0, month: 0, day: 0 },
                          composer: e.isComposer || !1,
                          various: e.various || !1,
                      }
                    : {
                          id: '',
                          name: '',
                          various: !1,
                          composer: !1,
                          decomposed: [],
                          ogImage: '',
                          hasPromotions: !1,
                          genres: [],
                          ticketsAvailable: !1,
                          links: [],
                          ratings: { week: 0, month: 0, day: 0 },
                          counts: { directAlbums: 0, alsoAlbums: 0, tracks: 0, alsoTracks: 0 },
                          available: !1,
                          disclaimers: [],
                      };
            };
        },
        38223: (e, t, i) => {
            'use strict';
            i.d(t, { D: () => d });
            var r = i(32290),
                a = i(96103),
                s = i(39407),
                l = i(21732),
                o = i(82586),
                n = i(19740),
                c = i(57594);
            let d = (0, a.PA)((e) => {
                let { isDisliked: t, onClick: i, disabled: a, className: d } = e,
                    { user: u } = (0, c.g)();
                return (0, r.jsx)(n.Dr, {
                    onClick: i,
                    className: d,
                    icon: (0, r.jsx)(o.I, { variant: t ? 'disliked' : 'dislike', size: 'xxs' }),
                    role: 'menuitemcheckbox',
                    'aria-checked': t,
                    disabled: a || !u.isAuthorized,
                    'data-test-id': l.S7.CONTEXT_MENU_DISLIKE_BUTTON,
                    children: (0, r.jsx)(s.A, { id: 'interface-actions.do-not-like' }),
                });
            });
        },
        41498: (e, t, i) => {
            Promise.resolve().then(i.bind(i, 8612));
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
        44936: (e, t, i) => {
            'use strict';
            i.d(t, { f: () => a });
            var r = i(36504);
            let a = (e) => {
                var t;
                if (!e)
                    return {
                        id: 0,
                        title: '',
                        availableForOptions: [],
                        availableForPremiumUsers: !0,
                        artists: [],
                        volumes: [],
                        ogImage: '',
                        availablePartially: !1,
                        trackCount: 0,
                        recent: !1,
                        veryImportant: !1,
                        labels: [],
                        metaType: '',
                        availableForMobile: !0,
                    };
                let i = (null == (t = e.artists) ? void 0 : t.map((e) => (0, r.N)(e))) || [];
                return {
                    id: e.id,
                    title: e.title,
                    type: e.type,
                    coverUri: e.coverUri,
                    year: e.year,
                    version: e.version,
                    availableForOptions: e.availableForOptions || [],
                    availableForPremiumUsers: e.availableForPremiumUsers || !0,
                    artists: i,
                    volumes: [],
                    ogImage: e.coverUri || '',
                    availablePartially: !1,
                    trackCount: e.trackCount || 0,
                    recent: !1,
                    veryImportant: !1,
                    labels: [],
                    metaType: '',
                    availableForMobile: !0,
                };
            };
        },
        45807: (e, t, i) => {
            'use strict';
            i.d(t, { Y: () => d });
            var r,
                a = i(95716),
                s = i(55178),
                l = {
                    352: (e) => {
                        e.exports = a;
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
                return (l[e](i, i.exports, n), i.exports);
            }
            var c = {};
            ((() => {
                (Object.defineProperty(c, 'X', { value: !0 }), (c.l = void 0));
                let e = n(810),
                    t = n(352);
                c.l = (i) => {
                    let [r, a] = (0, e.useState)(!0),
                        [s, l] = (0, e.useState)(!0),
                        o = () => {
                            let e = null == i ? void 0 : i.current;
                            e && (a(0 === e.scrollLeft), l(e.scrollWidth - e.scrollLeft <= e.offsetWidth + 10));
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
                    let n = (0, e.useMemo)(
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
                        swipeForward: n,
                        shouldBackwardButtonBeDisabled: r,
                        shouldForwardButtonBeDisabled: s,
                        shouldHideControls: r && s,
                    };
                };
            })(),
                c.X);
            var d = c.l;
        },
        49522: (e, t, i) => {
            'use strict';
            i.d(t, { X: () => m });
            var r = i(32290),
                a = i(63618),
                s = i(55178),
                l = i(21732),
                o = i(45807),
                n = i(63423),
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
                        buttonSize: v = 'xxxs',
                        buttonVariant: p = 'outline',
                    } = e,
                    { swipeBackward: C, swipeForward: h, shouldBackwardButtonBeDisabled: A, shouldForwardButtonBeDisabled: k, shouldHideControls: f } = (0, o.Y)(t),
                    x = (0, s.useCallback)(
                        (e) => {
                            (C(), e.stopPropagation());
                        },
                        [C],
                    ),
                    S = (0, s.useCallback)(
                        (e) => {
                            (h(), e.stopPropagation());
                        },
                        [h],
                    );
                return (0, r.jsxs)('div', {
                    className: (0, a.$)(u().root, m),
                    'data-test-id': l.S7.CAROUSEL_CONTROLS,
                    children: [
                        (0, r.jsx)(n.$, {
                            tabIndex: -1,
                            'aria-hidden': !0,
                            className: (0, a.$)(u().control, i, { [u().control_hidden]: f, [u().control_withSecondaryColor]: _ }),
                            onClick: x,
                            size: v,
                            radius: 'round',
                            variant: p,
                            withRipple: !1,
                            icon: (0, r.jsx)(c.I, { size: 'xxs', variant: 'arrowLeft' }),
                            disabled: A,
                            'data-test-id': l.S7.CAROUSEL_CONTROLS_BACKWARD_BUTTON,
                        }),
                        (0, r.jsx)(n.$, {
                            tabIndex: -1,
                            'aria-hidden': !0,
                            className: (0, a.$)(u().control, d, { [u().control_hidden]: f, [u().control_withSecondaryColor]: _ }),
                            onClick: S,
                            size: v,
                            radius: 'round',
                            variant: p,
                            withRipple: !1,
                            icon: (0, r.jsx)(c.I, { size: 'xxs', variant: 'arrowRight' }),
                            disabled: k,
                            'data-test-id': l.S7.CAROUSEL_CONTROLS_FORWARD_BUTTON,
                        }),
                    ],
                });
            };
        },
        52199: (e, t, i) => {
            'use strict';
            i.d(t, { r: () => r });
            let r = (e, t, i) => e.replace(i, t);
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
        64538: (e, t, i) => {
            'use strict';
            i.d(t, { E: () => u });
            var r = i(32290),
                a = i(55178),
                s = i(99923),
                l = i(95481),
                o = i(26042),
                n = i(98148),
                c = i(83460);
            let d = (e) => {
                    let {
                            forwardRef: t,
                            isShimmerVisible: i,
                            isShimmerActive: d,
                            title: u,
                            description: m,
                            playlists: _,
                            containerClassName: v,
                            className: p,
                            headerClassName: C,
                            viewAllActionLink: h,
                            headingVariant: A,
                            shouldSendAnalyticsOnLoaded: k,
                            ...f
                        } = e,
                        x = (0, l.f)();
                    return (
                        (0, a.useEffect)(() => {
                            k && !i && x();
                        }, [i, x, k]),
                        (0, r.jsx)(n.O, {
                            isShimmerVisible: i,
                            isShimmerActive: d,
                            className: p,
                            headerClassName: C,
                            containerClassName: v,
                            ref: t,
                            title: u,
                            description: m,
                            viewAllActionLink: h,
                            headingVariant: A,
                            ...f,
                            children:
                                null == _
                                    ? void 0
                                    : _.map((e, t) =>
                                          (0, r.jsx)(
                                              o.B,
                                              {
                                                  objectType: s.DomainObjectType.Playlist,
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
                u = (0, a.forwardRef)((e, t) => (0, r.jsx)(d, { forwardRef: t, ...e }));
        },
        65024: (e, t, i) => {
            'use strict';
            i.d(t, { C: () => a });
            let r = new Set(Object.values(i(3785).M)),
                a = (e) => 'string' == typeof e && r.has(e);
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
                s = i(55178),
                l = i(60900),
                o = i(45477),
                n = i(75582),
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
                        { notify: i } = (0, n.l)(),
                        { formatMessage: u } = (0, l.A)(),
                        [m, v] = (0, s.useState)(!1);
                    return (0, s.useCallback)(async () => {
                        if (!e) return;
                        if (!t.isAuthorized)
                            return void i((0, r.jsx)(d.h, { error: u({ id: 'authorization-messages.need-to-authorizate' }) }), { containerId: o.u.ERROR });
                        if (m) return;
                        let s = { ...(0, a.HO)(e), isPinned: !e.isPinned };
                        v(!0);
                        let l = await e.togglePin();
                        (v(!1),
                            l
                                ? i((0, r.jsx)(_, { artist: s }), { containerId: o.u.INFO })
                                : i((0, r.jsx)(d.h, { error: u({ id: 'error-messages.error-during-action' }) }), { containerId: o.u.ERROR }));
                    }, [e, t.isAuthorized, m, u, i]);
                };
        },
        73141: (e, t, i) => {
            'use strict';
            i.d(t, { K: () => p });
            var r = i(32290),
                a = i(92708),
                s = i(55178),
                l = i(60900),
                o = i(63380),
                n = i(45477),
                c = i(75582),
                d = i(57594),
                u = i(90357),
                m = i(97647),
                _ = i(97755);
            let v = (e) => {
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
                        [m, _] = (0, s.useState)(!1),
                        { formatMessage: p } = (0, l.A)();
                    return (0, s.useCallback)(async () => {
                        if (!t.isAuthorized)
                            return void i((0, r.jsx)(u.h, { error: p({ id: 'authorization-messages.need-to-authorizate' }) }), { containerId: n.u.ERROR });
                        if (m) return;
                        let s = { ...(0, a.HO)(e), url: e.url, isLiked: !e.isLiked };
                        _(!0);
                        let l = await e.toggleLike();
                        (_(!1),
                            l === o.f.OK
                                ? i((0, r.jsx)(v, { playlist: s }), { containerId: n.u.INFO })
                                : i((0, r.jsx)(u.h, { error: p({ id: 'error-messages.error-during-action' }) }), { containerId: n.u.ERROR }));
                    }, [t.isAuthorized, m, e, p, i]);
                };
        },
        73192: (e, t, i) => {
            'use strict';
            i.d(t, { A: () => v });
            var r = i(32290),
                a = i(92708),
                s = i(55178),
                l = i(60900),
                o = i(45477),
                n = i(75582),
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
                v = (e) => {
                    let { user: t } = (0, c.g)(),
                        { notify: i } = (0, n.l)(),
                        { formatMessage: u } = (0, l.A)(),
                        [m, v] = (0, s.useState)(!1);
                    return (0, s.useCallback)(async () => {
                        if (!t.isAuthorized)
                            return void i((0, r.jsx)(d.h, { error: u({ id: 'authorization-messages.need-to-authorizate' }) }), { containerId: o.u.ERROR });
                        if (m) return;
                        let s = { ...(0, a.HO)(e), url: e.url, isPinned: !e.isPinned };
                        v(!0);
                        let l = await e.togglePin();
                        (v(!1),
                            l
                                ? i((0, r.jsx)(_, { playlist: s }), { containerId: o.u.INFO })
                                : i((0, r.jsx)(d.h, { error: u({ id: 'error-messages.error-during-action' }) }), { containerId: o.u.ERROR }));
                    }, [t.isAuthorized, m, e, i, u]);
                };
        },
        75245: (e, t, i) => {
            'use strict';
            i.d(t, { F: () => c });
            var r,
                a = i(55178),
                s = {
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
                                for (var s in ((r = {}), t)) 'key' !== s && (r[s] = t[s]);
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
                            s = i(5881),
                            l = i(810),
                            o = r(i(2876)),
                            n = (e) => {
                                let { className: t, itemClassName: i, children: r, forwardRef: n, role: c, ...d } = e;
                                return (0, a.jsx)('ol', {
                                    ref: n,
                                    className: (0, s.clsx)(o.default.root, t),
                                    ...d,
                                    role: null != c ? c : 'list',
                                    children: l.Children.map(r, (e) => (0, a.jsx)('li', { className: (0, s.clsx)(o.default.item, i), children: e })),
                                });
                            };
                        t.Carousel = (0, l.forwardRef)((e, t) => (0, a.jsx)(n, { forwardRef: t, ...e }));
                    },
                    810: (e) => {
                        e.exports = r || (r = i.t(a, 2));
                    },
                },
                l = {};
            function o(e) {
                var t = l[e];
                if (void 0 !== t) return t.exports;
                var i = (l[e] = { exports: {} });
                return (s[e].call(i.exports, i, i.exports, o), i.exports);
            }
            ((o.d = (e, t) => {
                for (var i in t) o.o(t, i) && !o.o(e, i) && Object.defineProperty(e, i, { enumerable: !0, get: t[i] });
            }),
                (o.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
                (o.r = (e) => {
                    ('undefined' != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
                        Object.defineProperty(e, '__esModule', { value: !0 }));
                }));
            var n = {};
            (() => {
                (Object.defineProperty(n, 'X', { value: !0 }), (n.l = void 0));
                var e = o(4014);
                Object.defineProperty(n, 'l', {
                    enumerable: !0,
                    get: function () {
                        return e.Carousel;
                    },
                });
            })();
            var c = n.l;
            n.X;
        },
        77435: (e, t, i) => {
            'use strict';
            i.d(t, { p: () => u });
            var r = i(32290),
                a = i(55178),
                s = i(99923),
                l = i(95481),
                o = i(26042),
                n = i(98148),
                c = i(24170);
            let d = (e) => {
                    let {
                            forwardRef: t,
                            isShimmerVisible: i,
                            isShimmerActive: d,
                            title: u,
                            description: m,
                            albums: _,
                            className: v,
                            containerClassName: p,
                            headerClassName: C,
                            viewAllActionLink: h,
                            headingRef: A,
                            headingVariant: k,
                            shouldSendAnalyticsOnLoaded: f,
                            ...x
                        } = e,
                        S = (0, l.f)();
                    return (
                        (0, a.useEffect)(() => {
                            f && S();
                        }, [S, f]),
                        (0, r.jsx)(n.O, {
                            isShimmerVisible: i,
                            isShimmerActive: d,
                            className: v,
                            headerClassName: C,
                            containerClassName: p,
                            ref: t,
                            title: u,
                            description: m,
                            viewAllActionLink: h,
                            headingRef: A,
                            headingVariant: k,
                            ...x,
                            children:
                                null == _
                                    ? void 0
                                    : _.map((e, t) =>
                                          (0, r.jsx)(
                                              o.B,
                                              {
                                                  objectType: s.DomainObjectType.Album,
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
                u = (0, a.forwardRef)((e, t) => (0, r.jsx)(d, { forwardRef: t, ...e }));
        },
        78061: (e, t, i) => {
            'use strict';
            i.d(t, { Jt: () => s, TF: () => o, hZ: () => l });
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
            function s(e) {
                return (function (e) {
                    for (var t = {}, i = e ? e.split('; ') : [], r = 0; r < i.length; r++) {
                        var a = i[r].split('='),
                            s = a.slice(1).join('=');
                        '"' === s[0] && (s = s.slice(1, -1));
                        try {
                            t[decodeURIComponent(a[0])] = s.replace(/(%[\dA-F]{2})+/gi, decodeURIComponent);
                        } catch (e) {}
                    }
                    return t;
                })(document.cookie)[e];
            }
            function l(e, t, i) {
                var s;
                document.cookie =
                    ((s = r({ path: '/' }, i)),
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
                        })(s));
            }
            function o(e, t) {
                l(e, '', r(r({}, t), { expires: -1 }));
            }
        },
        80528: (e, t, i) => {
            'use strict';
            i.d(t, { g: () => Q });
            var r = i(32290),
                a = i(96103),
                s = i(60900),
                l = i(99923),
                o = i(21732),
                n = i(71483),
                c = i(91027),
                d = i(82586),
                u = i(19740),
                m = i(92708),
                _ = i(55178),
                v = i(63380),
                p = i(45477),
                C = i(75582),
                h = i(57594),
                A = i(90357),
                k = i(86269),
                f = i(74196),
                x = i(71926),
                S = i(58534),
                L = i(11323),
                y = i(356),
                T = i.n(y);
            let b = (e) => {
                let { coverUri: t, title: i, isDisliked: a, closeToast: l } = e,
                    { formatMessage: o } = (0, s.A)(),
                    n = o(a ? { id: 'notifications-info.artist-unavailable-in-recommendations' } : { id: 'notifications-info.artist-available-in-recommendations' });
                return (0, r.jsx)(S.$, {
                    closeToast: l,
                    message: (0, r.jsxs)('div', {
                        className: T().message,
                        children: [
                            (0, r.jsx)(f.q, { children: (0, r.jsx)('p', { role: 'alert', 'aria-label': n }) }),
                            (0, r.jsx)(k.t, {
                                className: T().cover,
                                radius: 'round',
                                children: (0, r.jsx)(L.B, { className: T().image, src: t, alt: i, size: 100, fit: 'cover', withAvatarReplace: !0 }),
                            }),
                            (0, r.jsx)(x.HL, { className: T().text, variant: 'div', type: 'controls', size: 'm', 'aria-hidden': !0, children: n }),
                        ],
                    }),
                });
            };
            var g = i(5942),
                I = i(70390),
                j = i(9017),
                R = i(65477),
                N = i(71735),
                P = i(37862),
                O = i(48922),
                E = i(54391),
                B = i(72396),
                U = i(46200),
                w = i(27120),
                D = i(43564),
                M = i(95134),
                H = i(79406),
                z = i(51675),
                F = i(48027),
                K = i(89384),
                Y = i(38223),
                V = i(58237),
                W = i(56367),
                $ = i(4914),
                X = i(83755),
                G = i(25160),
                q = i(4008);
            let Q = (0, a.PA)((e) => {
                var t, i, a;
                let { artist: k, onOpenChange: f, open: x, ...S } = e,
                    { shouldShowBuySubscriptionModal: L, showBuySubscriptionModal: y } = (0, U.q)(),
                    {
                        settings: { isMobile: T },
                        modals: { artistAboutModal: Q },
                        trailer: Z,
                        user: J,
                        experiments: ee,
                    } = (0, h.g)(),
                    et = (0, I.A)(k),
                    ei = (0, g.K)(k),
                    er = ((e) => {
                        let { user: t } = (0, h.g)(),
                            { notify: i } = (0, C.l)(),
                            [a, l] = (0, _.useState)(!1),
                            { formatMessage: o } = (0, s.A)();
                        return (0, c.c)(async () => {
                            if (!e) return;
                            if (!t.isAuthorized)
                                return void i((0, r.jsx)(A.h, { error: o({ id: 'authorization-messages.need-to-authorizate' }) }), { containerId: p.u.ERROR });
                            if (a) return;
                            let s = { ...(0, m.HO)(e), isDisliked: !e.isDisliked };
                            l(!0);
                            let n = await e.toggleDislike();
                            (l(!1),
                                n === v.f.OK
                                    ? i((0, r.jsx)(b, { coverUri: s.coverUri, title: s.name, isDisliked: s.isDisliked }), { containerId: p.u.INFO })
                                    : i((0, r.jsx)(A.h, { error: o({ id: 'error-messages.error-during-action' }) }), { containerId: p.u.ERROR }));
                        });
                    })(k),
                    ea = (0, E.F)(),
                    es = ''.concat(P.U.ARTIST, '-').concat(null == k ? void 0 : k.id),
                    { formatMessage: el } = (0, s.A)(),
                    { utmLink: eo } = (0, B.f)({ blockId: P.U.ARTIST, contextType: n.K.Artist, contextId: null == k ? void 0 : k.id }),
                    { shareLink: en, pathname: ec } = (0, K.b)('/artist/:artistId', { params: { artistId: null != (i = null == k ? void 0 : k.id) ? i : '' } }),
                    ed = (0, j.A)({ entityVariant: M.D.ARTIST, urlParams: { id: null == k ? void 0 : k.id } }),
                    { isPlaying: eu, togglePlay: em } = (0, D.B)({
                        seeds: null != (a = null == k ? void 0 : k.seeds) ? a : [],
                        pageIdForFrom: O._Q.RADIO,
                        blockIdForFrom: es,
                        parentContextId: null == k ? void 0 : k.id,
                    }),
                    e_ = (0, N.P)(),
                    ev = el((null == k ? void 0 : k.isComposer) ? { id: 'artist.about-composer' } : { id: 'artist.about-artist' }),
                    ep = (0, c.c)(() => {
                        if (L && J.isAuthorized) return void y();
                        eu || em();
                    }),
                    eC = (0, c.c)(() => {
                        if (!e_()) {
                            if (L) return void y();
                            (null == k ? void 0 : k.id) && (Z.setUtmLink(eo), Z.openArtistTrailer(k.id), ea(l.DomainObjectType.Artist, k.id));
                        }
                    }),
                    eh = (0, c.c)(() => {
                        Q.open(null == k ? void 0 : k.id);
                    });
                (0, w.N)(x);
                let eA = { variant: z.Y.ARTIST, id: null == k ? void 0 : k.id, title: null == k ? void 0 : k.name, path: ec },
                    ek = ee.checkExperiment(H.z.WebEditorsFeatures, 'on'),
                    ef = null == k || null == (t = k.trailer) ? void 0 : t.isAvailable,
                    ex = ee.checkExperiment(H.z.WebNextArtistInfo, 'on');
                return (0, r.jsxs)(u.W1, {
                    isMobile: T,
                    offsetOptions: 10,
                    open: x,
                    onOpenChange: f,
                    ariaLabel: el({ id: 'interface-actions.context-menu' }),
                    containerDataTestId: o.Kq.artist.ARTIST_CONTEXT_MENU,
                    ...S,
                    children: [
                        ek && (0, r.jsx)(q.WithOffline, { fallback: (0, r.jsx)(R.d, { entityVariant: M.D.ARTIST, adminUrl: ed }) }),
                        !T && (0, r.jsx)(q.WithOffline, { fallback: (0, r.jsx)(W.L, { onClick: et, isPinned: null == k ? void 0 : k.isPinned }) }),
                        (0, r.jsx)(q.WithOffline, {
                            fallback: (0, r.jsx)(V.T, {
                                onClick: ei,
                                isLiked: null == k ? void 0 : k.isLiked,
                                disabled: !J.isAuthorized || !(null == k ? void 0 : k.isAvailable),
                            }),
                        }),
                        ef && (0, r.jsx)(q.WithOffline, { fallback: (0, r.jsx)(X.N, { onClick: eC }) }),
                        (0, r.jsx)(q.WithOffline, {
                            fallback: (0, r.jsx)(G.C, { onClick: ep, disabled: !(null == k ? void 0 : k.isAvailable), variant: F.I.ARTIST, onOpenMenuChange: f }),
                        }),
                        (0, r.jsx)($.H, { disabled: !k, shareLink: en, entityMeta: eA }),
                        ex &&
                            (0, r.jsx)(q.WithOffline, {
                                fallback: (0, r.jsx)(u.Dr, {
                                    onClick: eh,
                                    icon: (0, r.jsx)(d.I, { variant: 'info', size: 'xxs' }),
                                    'data-test-id': o.Kq.artist.ARTIST_CONTEXT_MENU_ABOUT_ARTIST_BUTTON,
                                    children: ev,
                                }),
                            }),
                        (0, r.jsx)(q.WithOffline, {
                            fallback: (0, r.jsx)(Y.D, { onClick: er, isDisliked: null == k ? void 0 : k.isDisliked, disabled: !(null == k ? void 0 : k.isAvailable) }),
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
                s = i(96103),
                l = i(55178),
                o = i(60900),
                n = i(99923),
                c = i(21732),
                d = i(71483),
                u = i(91027),
                m = i(6752),
                _ = i(14934),
                v = i(82586),
                p = i(86269),
                C = i(71926),
                h = i(41677),
                A = i(73141),
                k = i(73192),
                f = i(71735),
                x = i(47745),
                S = i(2969),
                L = i(54391),
                y = i(23352),
                T = i(72396),
                b = i(5537),
                g = i(32641),
                I = i(28999),
                j = i(90169),
                R = i(57594),
                N = i(61376),
                P = i(11323),
                O = i(92744),
                E = i(61258),
                B = i(10180),
                U = i(90326),
                w = i(29268),
                D = i(34925),
                M = i(13931),
                H = i(19740),
                z = i(9017),
                F = i(65477),
                K = i(46200),
                Y = i(27120),
                V = i(95134),
                W = i(79406),
                $ = i(58237),
                X = i(56367),
                G = i(83755);
            let q = (0, s.PA)((e) => {
                var t;
                let { playlist: i, onOpenChange: a, open: s, ...l } = e,
                    { shouldShowBuySubscriptionModal: d, showBuySubscriptionModal: m } = (0, K.q)(),
                    {
                        experiments: _,
                        settings: { isMobile: v },
                        trailer: p,
                        user: C,
                    } = (0, R.g)(),
                    h = (0, A.K)(i),
                    x = (0, k.A)(i),
                    S = (0, L.F)(),
                    { formatMessage: y } = (0, o.A)(),
                    T = (0, f.P)(),
                    b = _.checkExperiment(W.z.WebEditorsFeatures, 'on'),
                    g = (0, z.A)({ entityVariant: V.D.PLAYLIST, urlParams: { id: i.uid, kind: i.kind } });
                (0, Y.N)(s);
                let I = (0, u.c)(() => {
                    if (d) return void m();
                    T() || (p.openPlaylistTrailer(i.id), S(n.DomainObjectType.Playlist, i.id));
                });
                return (0, r.jsxs)(H.W1, {
                    title: i.title,
                    onOpenChange: a,
                    open: s,
                    offsetOptions: 10,
                    isMobile: v,
                    ariaLabel: y({ id: 'interface-actions.context-menu' }),
                    containerDataTestId: c.Kq.playlist.PLAYLIST_CONTEXT_MENU,
                    ...l,
                    children: [
                        b && (0, r.jsx)(F.d, { entityVariant: V.D.PLAYLIST, adminUrl: i.isFavouritePlaylist ? void 0 : g }),
                        !v && (0, r.jsx)(X.L, { onClick: x, isPinned: i.isPinned }),
                        !i.isFavouritePlaylist && (0, r.jsx)($.T, { onClick: h, isLiked: i.isLiked, disabled: !C.isAuthorized }),
                        (null == (t = i.trailer) ? void 0 : t.isAvailable) && (0, r.jsx)(G.N, { onClick: I, disabled: !i.isAvailable }),
                    ],
                });
            });
            var Q = i(11675),
                Z = i.n(Q);
            let J = (0, s.PA)((e) => {
                let { className: t, playlist: i, children: s, contentLinesCount: H, customDescription: z, onCoverMouseDown: F } = e,
                    { ref: K, intersectionPropertyId: Y } = (0, y.n)(),
                    {
                        trailer: V,
                        user: W,
                        paywall: { modal: $ },
                    } = (0, R.g)(),
                    { from: X, utmLink: G } = (0, T.f)({ contextId: i.uuid, contextType: d.K.Playlist }),
                    { formatMessage: Q } = (0, o.A)(),
                    { sendLikeSearchFeedback: J, sendNavigateSearchFeedback: ee, sendPlaySearchFeedback: et } = (0, I.z)(),
                    [ei, er] = (0, l.useState)(!1),
                    [ea, es] = (0, l.useState)(!1),
                    [el, eo] = (0, l.useState)(!1),
                    en = (0, M.r)(i),
                    ec = (0, A.K)(i),
                    ed = (0, k.A)(i),
                    eu = (0, x.N)(),
                    em = (0, S.b)(),
                    e_ = (0, g.Z)(i.url),
                    ev = (0, L.F)(),
                    ep = (0, f.P)(),
                    eC = (0, u.c)((e) => {
                        if ((e.stopPropagation(), ep())) return void e.preventDefault();
                        (V.setUtmLink(G), V.openPlaylistTrailer(i.id), ev(n.DomainObjectType.Playlist, i.id));
                    }),
                    [eh, eA] = (0, l.useState)(!1),
                    { isPlaying: ek, togglePlay: ef } = (0, j.D)({
                        playContextParams: { contextData: { type: d.K.Playlist, meta: { id: i.id, uuid: i.uuid }, from: X, utmLink: G }, loadContextMeta: !0 },
                    }),
                    ex = (0, u.c)(() => {
                        (eu({ to: n.AppScreen.PlaylistScreen }), null == ee || ee());
                    }),
                    eS = (0, u.c)((e) => {
                        (ex(), e_(e));
                    }),
                    eL = (0, b.N)(),
                    ey = (0, u.c)(() => {
                        if (!ep()) {
                            if (eL) return void $.open();
                            (ei || ek || (er(!0), null == et || et()), ef(), em(!ek));
                        }
                    }),
                    eT = (0, u.c)(() => {
                        (ea || i.isLiked || (es(!0), null == J || J()), ec());
                    }),
                    eb = (0, u.c)((e) => {
                        (e.preventDefault(), e.stopPropagation());
                    }),
                    eg = (0, u.c)((e) => {
                        (eo(e), eA(e));
                    }),
                    eI = (0, l.useMemo)(() => {
                        var e;
                        return z
                            ? (0, r.jsx)(C.HL, { variant: 'span', type: 'entity', size: 's', weight: 'medium', lineClamp: 2, children: z }, i.getKey('description'))
                            : (null == (e = i.artists) ? void 0 : e.length)
                              ? (0, r.jsx)(
                                    h.i,
                                    { className: Z().artists, artists: i.artists, lineClamp: 1, linkClassName: Z().artistLink, captionSize: 's' },
                                    i.getKey('description'),
                                )
                              : void 0;
                    }, [z, i]),
                    ej = (0, m.L)(() => {
                        if (!i.isFavouritePlaylist)
                            return (0, r.jsx)(
                                O.c,
                                {
                                    className: (0, a.$)(Z().likeButton, Z().control),
                                    isLiked: i.isLiked,
                                    onClick: eT,
                                    variant: 'default',
                                    size: 's',
                                    iconSize: 'xxs',
                                    disabled: !W.isAuthorized,
                                },
                                i.getKey('LikeButton'),
                            );
                    }),
                    eR = (0, l.useMemo)(() => {
                        var e;
                        if (null == i || null == (e = i.trailer) ? void 0 : e.isAvailable)
                            return (0, r.jsx)(
                                D.n,
                                {
                                    children: (0, r.jsx)(
                                        w.k,
                                        { className: (0, a.$)(Z().trailerButton, Z().control), radius: 'round', size: 's', iconSize: 'xxs', onClick: eC },
                                        i.getKey('TrailerButton'),
                                    ),
                                },
                                i.getKey('PlaylilstCardTrailerTooltip'),
                            );
                    }, [eC, i]),
                    eN = (0, l.useMemo)(
                        () =>
                            (0, r.jsx)(
                                B.O,
                                { onClick: ed, isPinned: i.isPinned, className: (0, a.$)(Z().pinButton, Z().control), withRipple: !1 },
                                i.getKey('PinButton'),
                            ),
                        [ed, i],
                    ),
                    eP = (0, l.useMemo)(
                        () =>
                            (0, r.jsx)(p.t, {
                                className: Z().cover,
                                radius: 's',
                                withShadow: !0,
                                'data-test-id': c.Kq.playlist.PLAYLIST_CARD,
                                children: (0, r.jsxs)('div', {
                                    className: Z().coverBlock,
                                    onClick: eS,
                                    onMouseDown: F,
                                    children: [
                                        (0, r.jsx)(P.B, {
                                            className: Z().image,
                                            src: i.coverUri,
                                            size: 200,
                                            fit: 'cover',
                                            alt: en,
                                            withAvatarReplace: !0,
                                            'aria-hidden': !0,
                                        }),
                                        (0, r.jsx)(_.hg, {
                                            isVisible: el || eh,
                                            className: Z().controls,
                                            playControl: (0, r.jsx)(
                                                U.D,
                                                {
                                                    className: (0, a.$)(Z().playButton, Z().control),
                                                    buttonVariant: 'default',
                                                    withHover: !1,
                                                    iconSize: 'xl',
                                                    variant: 'filled',
                                                    onClick: ey,
                                                    isPlaying: ek,
                                                    disabled: !i.isAvailable,
                                                },
                                                i.getKey('PlayButton'),
                                            ),
                                            likeControl: ej,
                                            menuControl: (0, r.jsx)(
                                                q,
                                                {
                                                    playlist: i,
                                                    onOpenChange: eg,
                                                    open: el,
                                                    onClick: eb,
                                                    className: (0, a.$)(Z().menuButton, Z().control),
                                                    icon: (0, r.jsx)(v.I, { size: 'xxs', variant: 'more' }),
                                                    size: 's',
                                                    'data-test-id': c.Kq.playlist.PLAYLIST_CONTEXT_MENU_BUTTON,
                                                },
                                                i.getKey('PlaylistContextMenu'),
                                            ),
                                            pinControl: eN,
                                            trailerControl: eR,
                                        }),
                                    ],
                                }),
                            }),
                        [eS, F, i, en, el, eh, ey, ek, ej, eg, eb, eN, eR],
                    ),
                    eO = !!i.actualLikesCount && !i.isLikesCountHidden;
                return (0, r.jsxs)(_.MN, {
                    ref: K,
                    'aria-label': en,
                    className: (0, a.$)(Z().root, t),
                    title: (0, r.jsx)(C.HL, {
                        variant: 'div',
                        type: 'entity',
                        size: 's',
                        weight: 'medium',
                        lineClamp: 2,
                        'data-test-id': c.Kq.playlist.PLAYLIST_TITLE,
                        children: (0, r.jsx)(E.N, { className: Z().titleLink, href: i.url, onClick: ex, children: i.title }),
                    }),
                    srTitle: (0, r.jsx)(E.N, { href: i.url, onClick: ex, children: i.title }),
                    'data-intersection-property-id': Y,
                    contentLinesCount: H,
                    view: eP,
                    description: eI,
                    'data-test-id': c.Kq.playlist.PLAYLIST_ITEM,
                    children: [
                        eO &&
                            (0, r.jsx)(N.x, {
                                ariaLabel: Q({ id: 'entity-names.likes-counter' }, { counter: i.actualLikesCount }),
                                likesCount: i.actualLikesCount,
                                isLiked: i.isLiked,
                                handleLikeClick: ec,
                            }),
                        s,
                    ],
                });
            });
        },
        87151: (e, t, i) => {
            'use strict';
            i.d(t, { H: () => a });
            var r = i(65024);
            let a = function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
                return e.map((e) => ((0, r.C)(e) ? e : void 0)).filter((e) => void 0 !== e);
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
        95226: (e, t, i) => {
            'use strict';
            i.d(t, { F: () => l });
            var r = i(32290),
                a = i(55178),
                s = i(73818);
            let l = (e) => {
                let {
                        blockId: t,
                        blockType: i,
                        blockIdForFrom: l,
                        blockPosX: o,
                        blockPosY: n,
                        objectsCount: c,
                        mainObjectType: d,
                        mainObjectId: u,
                        children: m,
                        displayReasonId: _,
                    } = e,
                    v = (0, a.useMemo)(
                        () => ({
                            blockId: t,
                            blockType: i,
                            blockIdForFrom: l,
                            blockPosX: o,
                            blockPosY: n,
                            objectsCount: c,
                            mainObjectType: d,
                            mainObjectId: u,
                            displayReasonId: _,
                        }),
                        [t, i, l, o, n, c, d, u, _],
                    );
                return (0, r.jsx)(s.p.Provider, { value: v, children: m });
            };
        },
        95481: (e, t, i) => {
            'use strict';
            i.d(t, { f: () => A });
            var r = i(55178),
                a = i(17811),
                s = i(92146),
                l = i(74416),
                o = i(6752),
                n = i(62376),
                c = i(1677),
                d = i(48922),
                u = i(84782),
                m = i(30915),
                _ = i(18746),
                v = i(37240),
                p = i(51012),
                C = i(47498);
            let h = [
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
                A = () => {
                    let e = (0, r.useRef)(!1),
                        t = (0, l.st)(),
                        i = (0, n.U)(),
                        { hash: A } = (0, l.gf)(),
                        { pageId: k } = (0, v.$)(),
                        { tabId: f, tabPos: x, isTabSelectedByDefault: S } = (0, C.R)(),
                        { offsetBlockPosY: L } = (0, m.u)(),
                        { blockId: y, blockType: T, blockPosX: b, blockPosY: g, mainObjectType: I, mainObjectId: j, objectsCount: R } = (0, u.N)(),
                        { filterKey: N, filterValue: P, filterPos: O } = (0, _.G)(),
                        { skeleton: E } = (0, p.b)(),
                        B = (0, o.L)(() => (void 0 !== L && void 0 !== g ? L + g : g));
                    return (0, r.useCallback)(() => {
                        if (!t || !k || !d.xK.includes(k) || !h.includes(k) || e.current) return;
                        let r = { hash: A, pageId: c.F[k], entityType: T, entityId: y, entityPosX: b, entityPosY: B, objectsCount: R };
                        (void 0 !== N && ((r.filterKey = N), (r.filterValue = P), (r.filterPos = O)),
                            d.qG.includes(k) && ((r.tabId = f), (r.tabPos = x), (r.isTabSelectedByDefault = S)),
                            E && (r.skeletonId = E),
                            j && I && ((r.mainObjectType = I), (r.mainObjectId = j)));
                        let l = (0, a.F)({ params: r, logger: i, context: 'useSendEventOnBlockLoaded' });
                        l && ((0, s.uY)(t.evgenInstance, l), (e.current = !0));
                    }, [t, k, A, T, y, b, B, N, P, O, R, E, j, I, i, f, x, S]);
                };
        },
        98148: (e, t, i) => {
            'use strict';
            i.d(t, { O: () => k });
            var r = i(32290),
                a = i(63618),
                s = i(55178),
                l = i(85472),
                o = i(99923),
                n = i(6752),
                c = i(75245),
                d = i(79856),
                u = i(84782),
                m = i(26042),
                _ = i(19620),
                v = i(49522),
                p = i(30564),
                C = i(33696),
                h = i.n(C);
            let A = (e) => {
                    let {
                            forwardRef: t,
                            shimmerClassName: i,
                            isShimmerVisible: C,
                            isShimmerActive: A,
                            isShimmerWithSubcover: k,
                            isShimmerCentered: f,
                            isShimmerRounded: x,
                            title: S,
                            description: L,
                            coverUrl: y,
                            viewAllActionLink: T,
                            titleChildren: b,
                            headerChildren: g,
                            children: I,
                            className: j,
                            containerClassName: R,
                            headerClassName: N,
                            itemClassName: P,
                            showHeaderShimmer: O = !1,
                            showShimmerInfo: E = !0,
                            showControls: B = !0,
                            headingRef: U,
                            headingVariant: w,
                            customShimmer: D,
                            ...M
                        } = e,
                        H = (0, s.useId)(),
                        z = (0, s.useRef)(null),
                        { objectsCount: F } = (0, u.N)(),
                        K = (0, s.useMemo)(
                            () =>
                                O && C
                                    ? (0, r.jsx)('div', { className: N, children: (0, r.jsx)(d.W, { isActive: A, className: h().shimmerTitle, radius: 'l' }) })
                                    : S || L || b || g
                                      ? (0, r.jsx)(m.B, {
                                            objectType: o.DomainObjectType.Shortcut,
                                            objectId: String(T),
                                            objectPosX: 0,
                                            objectPosY: 0,
                                            objectsCount: null != F ? F : 0,
                                            children: (0, r.jsx)(_.T, {
                                                className: N,
                                                labeledForId: H,
                                                title: S,
                                                description: L,
                                                coverUrl: y,
                                                viewAllActionLink: T,
                                                controls: B && (0, r.jsx)(v.X, { className: h().controls, carouselRef: z }),
                                                headingRef: U,
                                                headingVariant: w,
                                                withDescription: !!L,
                                                titleChildren: b,
                                                children: g,
                                            }),
                                        })
                                      : void 0,
                            [y, L, N, U, w, H, A, C, F, B, O, S, b, g, T],
                        ),
                        Y = (0, n.L)(() => D || (0, p.k)({ className: i, isActive: A, withInfo: E, withSubcover: k, centered: f, round: x }));
                    return (0, r.jsxs)('section', {
                        ref: t,
                        className: (0, a.$)(h().root, j),
                        ...(0, l.getDataAttrFromProps)(M),
                        children: [
                            K,
                            (0, r.jsx)(c.F, {
                                className: R,
                                ref: z,
                                itemClassName: (0, a.$)(h().item, h().important, P),
                                'aria-labelledby': ''.concat(H, ' ').concat(H, '-description'),
                                children: C ? Y : I,
                            }),
                        ],
                    });
                },
                k = (0, s.forwardRef)((e, t) => (0, r.jsx)(A, { forwardRef: t, ...e }));
        },
    },
    (e) => {
        (e.O(
            0,
            [
                1010, 7412, 3608, 7231, 8461, 2147, 4517, 9763, 3048, 6706, 1311, 5472, 8378, 900, 2536, 2146, 3353, 2474, 8035, 347, 2732, 1410, 229, 3266, 8506, 6050,
                5806, 6241, 7702, 6874, 9155, 861, 4668, 9740, 1175, 4499, 8915, 8816, 2563, 9021, 4220, 9562, 7358,
            ],
            () => e((e.s = 41498)),
        ),
            (_N_E = e.O()));
    },
]);
