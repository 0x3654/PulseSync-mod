(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [4905],
    {
        1045: (e, t, i) => {
            'use strict';
            i.d(t, { k: () => r });
            let r = 100;
        },
        2047: (e, t, i) => {
            'use strict';
            var r;
            (i.d(t, { L: () => r }),
                (function (e) {
                    ((e.PUBLIC = 'public'), (e.PRIVATE = 'private'));
                })(r || (r = {})));
        },
        5245: (e, t, i) => {
            'use strict';
            i.d(t, { m: () => l });
            var r = i(60754),
                n = i(55178);
            let l = (e) => {
                let { createStore: t, getPendingPatchBatches: i, patchesUpdatedEventName: l } = e,
                    a = (0, n.useRef)([]),
                    [s] = (0, n.useState)(() => {
                        let e = t();
                        for (let t of i()) (0, r.X6)(e, t);
                        return e;
                    });
                return (
                    (0, n.useLayoutEffect)(() => {
                        let e = () => {
                            for (let e of i()) (0, r.X6)(s, e);
                        };
                        return (e(), window.addEventListener(l, e), () => window.removeEventListener(l, e));
                    }, [i, l, s]),
                    { store: s, patchesRef: a }
                );
            };
        },
        5537: (e, t, i) => {
            'use strict';
            i.d(t, { N: () => l });
            var r = i(57594),
                n = i(79406);
            let l = () => {
                var e, t;
                let {
                    user: i,
                    settings: { browserInfo: l },
                    experiments: a,
                } = (0, r.g)();
                return (
                    !(null == l ? void 0 : l.isTouch) &&
                    i.isAuthorized &&
                    !i.hasPlus &&
                    (null == (t = a.getExperiment(n.z.WebNextDesktopWebFreemium)) || null == (e = t.value) ? void 0 : e.closeListening) === 'on'
                );
            };
        },
        8626: (e, t, i) => {
            'use strict';
            i.d(t, { m: () => r });
            let r = () => ({ year: 'numeric' });
        },
        10733: (e, t, i) => {
            'use strict';
            i.d(t, { G: () => l });
            var r = i(91945),
                n = i(50891);
            class l extends n.m {
                constructor(e, t) {
                    (super(e, { code: 'E_HTTP_CLIENT_NON_2XX_3XX_RESPONSE', cause: t.cause }),
                        (0, r._)(this, 'name', 'HttpErrorException'),
                        (0, r._)(this, 'statusCode', void 0),
                        (this.statusCode = t.statusCode),
                        Object.setPrototypeOf(this, l.prototype));
                }
            }
        },
        11262: (e, t, i) => {
            'use strict';
            i.d(t, { X: () => u });
            var r = i(32290),
                n = i(55178),
                l = i(91027),
                a = i(71730),
                s = i(45477),
                o = i(75582),
                c = i(49399);
            let u = (e, t) => {
                let { notify: i, dismiss: u } = (0, o.l)(),
                    d = (0, n.useRef)(void 0),
                    g = (0, l.c)(() => {
                        var i;
                        (u({ notificationId: d.current }), (d.current = 0));
                        let r = [...(null != (i = e.lastRejectedPagesList) ? i : [])].reverse().filter((t) => {
                            var i;
                            return (null == (i = e.pageStates) ? void 0 : i[t]) === c.G.REJECT;
                        });
                        (e.resetRejectedPagesState(),
                            r.forEach((e) => {
                                t(e);
                            }));
                    });
                (0, n.useEffect)(() => {
                    e.rejectedPagesCount > 0 && !d.current && (d.current = i((0, r.jsx)(a.L, { reloadBlocks: g }), { containerId: s.u.ERROR, autoClose: !1 }));
                }, [u, g, i, e.rejectedPagesCount]);
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
            i.d(t, { r: () => l });
            var r = i(55178),
                n = i(60900);
            let l = (e) => {
                let { formatMessage: t } = (0, n.A)();
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
        15559: (e, t, i) => {
            'use strict';
            i.d(t, { v: () => n });
            var r = i(79406);
            let n = (e) => {
                let { checkExperiment: t, getDisclaimerContent: i, getExplicitContent: n, userRegion: l } = e;
                return 'ru' === l && t(r.z.WebNextFooterDisclaimer, 'on') ? i() : n();
            };
        },
        15567: (e, t, i) => {
            'use strict';
            i.d(t, { M: () => n });
            var r = i(60754);
            let n = (e) => {
                let t = (0, r.Zn)(e);
                if (((e) => 'object' == typeof e && null !== e && 'isRootModel' in e && !0 === e.isRootModel)(t)) return t;
                let { rootStore: i } = (0, r._$)(e);
                return i || t;
            };
        },
        16510: (e) => {
            e.exports = { root: 'ArtistItem_root__Q_mgJ', image: 'ArtistItem_image__5rKWF', cover: 'ArtistItem_cover__FTvHo' };
        },
        20168: (e, t, i) => {
            'use strict';
            i.d(t, { Y: () => r });
            var r = (function (e) {
                return ((e.OK = 'ok'), (e.ERROR = 'error'), (e.RELOAD = 'reload'), e);
            })({});
        },
        20472: (e, t, i) => {
            'use strict';
            i.d(t, { Z: () => n });
            var r = i(68243);
            let n = {
                main: (0, r.u)('/'),
                chart: (0, r.u)('/chart'),
                chartPodcasts: (0, r.u)('/chart/podcasts'),
                collection: (0, r.u)('/collection'),
                collectionAlbums: (0, r.u)('/collection/albums'),
                collectionArtists: (0, r.u)('/collection/artists'),
                collectionClips: (0, r.u)('/collection/clips'),
                collectionDislikes: (0, r.u)('/collection/dislikes'),
                collectionKids: (0, r.u)('/collection/kids'),
                collectionKidsAlbums: (0, r.u)('/collection/kids/albums'),
                collectionKidsPlaylists: (0, r.u)('/collection/kids/playlists'),
                collectionKidsTracks: (0, r.u)('/collection/kids/tracks'),
                collectionNonMusic: (0, r.u)('/collection/non-music'),
                collectionNonMusicLiked: (0, r.u)('/collection/non-music/liked'),
                collectionVibeRooms: (0, r.u)('/collection/multivibes'),
                collectionPlaylists: (0, r.u)('/collection/playlists'),
                collectionPlaylistsCreated: (0, r.u)('/collection/playlists/created'),
                collectionPlaylistsLiked: (0, r.u)('/collection/playlists/liked'),
                collectionShelf: (0, r.u)('/collection/shelf'),
                collectionShelfLiked: (0, r.u)('/collection/shelf/liked'),
                collectionShelfNewEpisodes: (0, r.u)('/collection/shelf/new-episodes'),
                collectionShelfRecentlyPlayed: (0, r.u)('/collection/shelf/recently-played'),
                concerts: (0, r.u)('/concerts'),
                kids: (0, r.u)('/kids'),
                mixes: (0, r.u)('/mixes'),
                musicHistory: (0, r.u)('/music-history'),
                muzmarket: (0, r.u)('/muzmarket'),
                mymusic: (0, r.u)('/mymusic'),
                mymusicDownloadsTracks: (0, r.u)('/mymusic/downloads/tracks'),
                multivibe: (0, r.u)('/multivibe'),
                nonMusic: (0, r.u)('/non-music'),
                pay: (0, r.u)('/pay'),
                userSlides: (0, r.u)('/slides/user'),
                search: (0, r.u)('/search'),
                searchHistory: (0, r.u)('/search/history'),
                settings: (0, r.u)('/settings'),
                video: (0, r.u)('/video'),
            };
        },
        22492: (e) => {
            e.exports = { icon: 'CardLikes_icon__l95lW', root: 'CardLikes_root__g8ala' };
        },
        26544: (e, t, i) => {
            'use strict';
            i.d(t, { m: () => n });
            var r = i(60754);
            let n = (e) => (0, r.wg)({ available: !!(null == e ? void 0 : e.available) });
        },
        29268: (e, t, i) => {
            'use strict';
            i.d(t, { k: () => d });
            var r = i(32290),
                n = i(55178),
                l = i(60900),
                a = i(21732),
                s = i(63423),
                o = i(82586),
                c = i(59576);
            let u = (e) => {
                    let {
                            variant: t,
                            withRipple: i,
                            size: n,
                            radius: u,
                            iconSize: d,
                            disabled: g,
                            onClick: _,
                            iconClassName: m,
                            className: p,
                            forwardRef: h,
                            style: v,
                            children: y,
                        } = e,
                        { formatMessage: E } = (0, l.A)(),
                        S = E({ id: 'trailer.button-aria-label' });
                    return (0, r.jsx)(s.$, {
                        className: p,
                        color: 'secondary',
                        radius: u,
                        size: n,
                        variant: t,
                        withRipple: i,
                        flexIcon: !0,
                        'aria-label': S,
                        onClick: _,
                        ref: h,
                        icon: (0, r.jsx)(o.I, { variant: 'trailer', size: d, className: m }),
                        disabled: g,
                        'data-intersection-property-id': c.N,
                        style: v,
                        'data-test-id': a.S7.TRAILER_BUTTON,
                        children: y,
                    });
                },
                d = (0, n.forwardRef)((e, t) => (0, r.jsx)(u, { forwardRef: t, ...e }));
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
        31010: (e, t, i) => {
            'use strict';
            i.d(t, { H: () => n, P: () => l });
            var r = i(55178);
            let n = (0, r.createContext)(null),
                l = () => (0, r.useContext)(n);
        },
        31726: (e, t, i) => {
            'use strict';
            i.d(t, { Y: () => s });
            var r = i(54280),
                n = i(70204),
                l = i(34186),
                a = i(62376);
            let s = () => {
                let e = (0, l.N)(),
                    t = e.get(n.oo),
                    i = e.get(n.uM),
                    s = e.get(n.ff),
                    o = e.get(n.V4),
                    c = e.get(n.P0),
                    u = (() => {
                        let e = (0, l.N)(),
                            t = e.get(n.$I),
                            i = e.get(n.EN),
                            r = e.get(n.N1),
                            a = e.get(n._1),
                            s = e.get(n.V3),
                            o = e.get(n.Lb),
                            c = e.get(n.wK),
                            u = e.get(n.tz),
                            d = e.get(n.$8),
                            g = e.get(n.Oo),
                            _ = e.get(n.X4),
                            m = e.get(n.O9),
                            p = e.get(n.E),
                            h = e.get(n.wH),
                            v = e.get(n.ok),
                            y = e.get(n.X8),
                            E = e.get(n.yq),
                            S = e.get(n.NN),
                            f = e.get(n.qN),
                            C = e.get(n.ro),
                            T = e.get(n.nM),
                            P = e.get(n.Ut),
                            x = e.get(n.K1),
                            L = e.get(n.eu),
                            N = e.get(n.aE),
                            A = e.get(n.ki),
                            R = e.get(n.c9),
                            k = e.get(n.en),
                            I = e.get(n.jQ),
                            O = e.get(n.cZ),
                            b = e.get(n.Zl),
                            j = e.get(n.CN),
                            w = e.get(n.P1),
                            M = e.get(n.zj),
                            D = e.get(n.re),
                            K = e.get(n.JM),
                            F = e.get(n.Lk),
                            U = e.get(n.$$),
                            H = e.get(n.sv),
                            G = e.get(n.gd),
                            z = e.get(n.Ez),
                            B = e.get(n.u2),
                            W = e.get(n.TD),
                            Y = e.get(n.dh),
                            V = e.get(n.LC),
                            X = e.get(n.PL),
                            $ = e.get(n.DT);
                        return {
                            accountResource: t,
                            afterTrackResource: i,
                            disclaimersResource: r,
                            usersResource: a,
                            landingResource: s,
                            landing3Resource: o,
                            landingBlocksResource: c,
                            albumResource: u,
                            libraryResource: d,
                            tracksResource: g,
                            topResource: _,
                            artistsResource: m,
                            slidesResource: p,
                            redAlertResource: h,
                            rotorResource: v,
                            waveResource: y,
                            searchResource: E,
                            searchPlaylistResource: S,
                            playlistResource: f,
                            playlistsResource: C,
                            pinResource: T,
                            metatagsResource: P,
                            tagResource: x,
                            feedResource: L,
                            pinsResource: N,
                            musicHistoryResource: A,
                            dynamicPagesResource: R,
                            chartResource: k,
                            clipsResource: I,
                            lyricViewsResource: O,
                            nonMusicResource: b,
                            donationResource: j,
                            loaderResource: w,
                            lumenResource: M,
                            prefixlessResource: D,
                            streamsResource: K,
                            filtersResource: F,
                            ugcResource: U,
                            collectionResource: H,
                            adsResource: G,
                            personalResource: z,
                            familyResource: B,
                            childrenLandingResource: W,
                            promoResource: Y,
                            telemetryResource: V,
                            labelsResource: X,
                            concertsResource: $,
                            wordsResource: e.get(n.dA),
                            wheelResource: e.get(n.$Y),
                        };
                    })(),
                    d = (0, a.U)(),
                    g = (0, l.N)().get(n.TK),
                    _ = e.get(n.ni),
                    m = new r.si(),
                    p = new r.fW();
                return {
                    ...u,
                    acqOffers: i,
                    disclaimerDictionary: s,
                    logger: d,
                    modelActionsLogger: g,
                    localStorage: m,
                    sessionStorage: p,
                    containerStorage: t,
                    config: o,
                    clientSafeConfig: c,
                    landingSdk: _,
                };
            };
        },
        32468: (e, t, i) => {
            'use strict';
            i.d(t, { A: () => a });
            var r = i(32290),
                n = i(77088),
                l = i.n(n);
            let a = (e) => {
                let { children: t } = e;
                return (0, r.jsx)('footer', { className: l().empty });
            };
        },
        33229: (e, t, i) => {
            'use strict';
            i.d(t, { j: () => a });
            var r = i(60754),
                n = i(93159),
                l = i(26544);
            let a = (e) => {
                var t, i, a, s, o;
                e = e || {};
                let c = (0, l.m)(e.trailer);
                return (0, r.wg)({
                    isAvailable: null == (s = e.available) || s,
                    uid: e.uid,
                    uuid: null != (o = e.playlistUuid) ? o : '',
                    kind: e.kind,
                    title: e.title,
                    coverUri: (null == e || null == (t = e.cover) ? void 0 : t.uri) || (null == e || null == (a = e.cover) || null == (i = a.itemsUri) ? void 0 : i[0]),
                    tracksCount: e.trackCount,
                    likesCount: e.likesCount,
                    averageColor: (0, n.Q)(null == e ? void 0 : e.derivedColors),
                    revision: e.revision,
                    generatedPlaylistType: e.generatedPlaylistType,
                    personalColor: e.personalColor,
                    visibility: e.visibility,
                    trailer: c,
                });
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
        34925: (e, t, i) => {
            'use strict';
            i.d(t, { n: () => a });
            var r = i(32290),
                n = i(60900),
                l = i(70280);
            let a = (e) => {
                let { children: t } = e,
                    { formatMessage: i } = (0, n.A)();
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
        35597: (e, t, i) => {
            'use strict';
            i.d(t, { t: () => n });
            var r = i(60754);
            let n = r.gK
                .model('LikesCount', { likesCount: r.gK.maybe(r.gK.number), pendingLikesCount: r.gK.optional(r.gK.number, 0) })
                .views((e) => ({
                    get actualLikesCount() {
                        if ('number' == typeof e.likesCount) {
                            var t;
                            return e.likesCount + (null != (t = e.pendingLikesCount) ? t : 0);
                        }
                        return 0;
                    },
                }))
                .actions((e) => ({
                    likePending() {
                        e.pendingLikesCount += 1;
                    },
                    unlikePending() {
                        e.pendingLikesCount -= 1;
                    },
                }));
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
        41677: (e, t, i) => {
            'use strict';
            i.d(t, { i: () => U });
            var r = i(32290),
                n = i(63618),
                l = i(96103),
                a = i(55178),
                s = i(70280),
                o = i(57594),
                c = i(53514),
                u = i(40484),
                d = i.n(u),
                g = i(60900),
                _ = i(99923),
                m = i(21732),
                p = i(91027),
                h = i(71926),
                v = i(47745),
                y = i(32641),
                E = i(28999),
                S = i(61258),
                f = i(19383);
            let C = (0, l.PA)((e) => {
                    let {
                            artist: t,
                            withLink: i = !0,
                            linkClassName: n,
                            captionClassName: l,
                            captionSize: a = 'm',
                            allArtistsTitle: c,
                            withCustomTooltip: u,
                            hoverSettings: d,
                        } = e,
                        { formatMessage: C } = (0, g.A)(),
                        {
                            track: T,
                            settings: { isMobile: P },
                        } = (0, o.g)(),
                        x = (0, y.Z)(t.url),
                        { sendNavigateSearchFeedback: L } = (0, E.z)(),
                        N = (0, v.N)(),
                        A = ((e) => {
                            let { artist: t, callback: i } = e,
                                { currentTrackInfo: r, fullscreenPlayer: n, fullscreenVideoPlayer: l } = (0, o.g)(),
                                { modal: a } = r;
                            return (0, f.l)({
                                entity: t,
                                callback: i,
                                onBeforeHandle: (e) => {
                                    (null == e || e.stopPropagation(), a.isOpened && (r.reset(), a.close()), n.modal.isOpened && n.modal.close());
                                },
                                onAfterHandled: () => {
                                    l.modal.isOpened && (l.modal.close(), l.reset());
                                },
                                preventDefaultWhenSafe: !0,
                            });
                        })({
                            artist: t,
                            callback: (0, p.c)((e) => {
                                (P && T.isOpened && T.close(), x(e));
                            }),
                        }),
                        R = (0, p.c)((e) => {
                            (N({ to: _.AppScreen.ArtistScreen }), null == L || L(), A(e));
                        });
                    return i && !t.various
                        ? (0, r.jsx)(S.N, {
                              'aria-label': C({ id: 'entity-names.artist-name' }, { artistName: t.name }),
                              className: n,
                              href: t.url,
                              onClick: R,
                              title: u ? void 0 : c || t.name,
                              'data-test-id': m.OA.artists.SEPARATED_ARTIST_TITLE,
                              children: (0, r.jsx)(s.m_, {
                                  enabled: !c && u,
                                  offsetOptions: 4,
                                  placement: 'top',
                                  text: c || t.name,
                                  hoverSettings: d,
                                  children: (0, r.jsx)(h.HL, { variant: 'span', type: 'entity', size: a, weight: 'medium', className: l, children: t.name }),
                              }),
                          })
                        : (0, r.jsx)(s.m_, {
                              enabled: !c && u,
                              offsetOptions: 4,
                              placement: 'top',
                              text: c || t.name,
                              hoverSettings: d,
                              children: (0, r.jsx)(h.HL, {
                                  variant: 'span',
                                  type: 'entity',
                                  size: a,
                                  weight: 'medium',
                                  className: l,
                                  title: u ? void 0 : c || t.name,
                                  'data-test-id': m.OA.artists.SEPARATED_ARTIST_TITLE,
                                  children: t.name,
                              }),
                          });
                }),
                T = (e) => {
                    let {
                            artist: t,
                            withLink: i = !0,
                            linkClassName: n,
                            captionClassName: l,
                            captionSize: s,
                            allArtistsTitle: o,
                            withCustomTooltip: c,
                            hoverSettings: u,
                            shouldUseSeparator: d = !0,
                        } = e,
                        g = (0, a.useMemo)(() => {
                            var e;
                            return null == (e = t.decomposed)
                                ? void 0
                                : e.reduce(
                                      (e, t) =>
                                          e.concat([
                                              d ? t.separator : '',
                                              (0, r.jsx)(
                                                  C,
                                                  {
                                                      artist: t,
                                                      withLink: i,
                                                      linkClassName: n,
                                                      captionClassName: l,
                                                      captionSize: s,
                                                      allArtistsTitle: o,
                                                      withCustomTooltip: c,
                                                      hoverSettings: u,
                                                  },
                                                  t.id,
                                              ),
                                          ]),
                                      [],
                                  );
                        }, [t.decomposed, d, i, n, l, s, o, c, u]);
                    return (0, r.jsxs)(r.Fragment, {
                        children: [
                            (0, r.jsx)(C, {
                                artist: t,
                                withLink: i,
                                linkClassName: n,
                                captionClassName: l,
                                captionSize: s,
                                allArtistsTitle: o,
                                withCustomTooltip: c,
                                hoverSettings: u,
                            }),
                            g,
                        ],
                    });
                };
            var P = i(39407),
                x = i(63887);
            let L = (e) => {
                let { spoilerArtistsCount: t, spoilerClassName: i, handleOnSpoilerClick: l } = e;
                return (0, r.jsxs)(r.Fragment, {
                    children: [
                        ' ',
                        (0, r.jsx)(x.N, {
                            role: 'button',
                            href: '',
                            className: (0, n.$)(d().spoiler, i),
                            onClick: l,
                            rel: 'nofollow',
                            'data-test-id': m.OA.artists.SEPARATED_ARTISTS_SPOILER,
                            children: (0, r.jsx)(P.A, { id: 'entity-names.number-of-more-artists', values: { counter: t } }),
                        }),
                    ],
                });
            };
            var N = i(8055),
                A = i(6752),
                R = i(78035),
                k = i(78176),
                I = i(83598),
                O = i.n(I);
            let b = (0, l.PA)((e) => {
                    let { label: t, artists: i, forwardRef: n } = e;
                    return (0, r.jsxs)(s.m_, {
                        enableAriaDescribedby: !1,
                        isFocusEnabled: !1,
                        placement: 'top',
                        hoverSettings: { delay: 200, handleClose: (0, R.safePolygon)({ blockPointerEvents: !0 }) },
                        children: [
                            (0, r.jsx)('div', { ref: n, children: t }),
                            (0, r.jsx)(s.ZI, { className: O().tooltipContent, children: i.map((e) => (0, r.jsx)(k.V, { artist: e, className: O().artistItem }, e.id)) }),
                        ],
                    });
                }),
                j = (0, a.forwardRef)((e, t) => (0, r.jsx)(b, { forwardRef: t, ...e }));
            var w = i(19740),
                M = i(52598),
                D = i.n(M);
            let K = (0, l.PA)((e) => {
                    let { label: t, artists: i } = e,
                        { formatMessage: l } = (0, g.A)();
                    return (0, r.jsx)(w.W1, {
                        isMobile: !0,
                        className: (0, n.$)(D().root, D().important),
                        label: t,
                        ariaLabel: l({ id: 'interface-actions.context-menu-artists' }),
                        children: i.map((e) => (0, r.jsx)(k.V, { artist: e }, e.id)),
                    });
                }),
                F = (0, l.PA)((e) => {
                    let { artists: t = [], label: i, labelRef: n } = e,
                        [l, s] = (0, a.useState)(!1),
                        {
                            settings: { isMobile: c },
                        } = (0, o.g)(),
                        u = (0, p.c)(() => {
                            let e = n.current;
                            e && s(e.scrollHeight > e.clientHeight || e.scrollWidth > e.clientWidth);
                        }),
                        d = (0, A.L)(() =>
                            (0, N.A)(() => {
                                u();
                            }, 100),
                        );
                    if (
                        ((0, a.useEffect)(
                            () => (
                                window.addEventListener('resize', d),
                                u(),
                                () => {
                                    window.removeEventListener('resize', d);
                                }
                            ),
                            [d, u],
                        ),
                        (0, a.useEffect)(() => {
                            u();
                        }, [t, u]),
                        0 !== t.length)
                    )
                        return (l || c) && (!c || 1 !== t.length) ? (c ? (0, r.jsx)(K, { artists: t, label: i }) : (0, r.jsx)(j, { artists: t, label: i })) : i;
                }),
                U = (0, l.PA)((e) => {
                    let {
                            className: t,
                            artists: i = [],
                            separator: l = ', ',
                            lineClamp: u,
                            visibleArtistsCount: g,
                            withLink: _ = !0,
                            spoilerClassName: m,
                            linkClassName: p,
                            captionClassName: h,
                            captionSize: v,
                            variant: y = 'breakAll',
                            withAllArtistsTitle: E = !0,
                            withComposer: S = !0,
                            spoilerComponent: f,
                            withCustomTooltip: C = !0,
                            artistIdWithoutLink: P,
                            withContextMenu: x,
                        } = e,
                        N = (0, a.useRef)(null),
                        [A, R] = (0, a.useState)(!1),
                        k = E
                            ? i
                                  .reduce(function () {
                                      let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
                                          t = arguments.length > 1 ? arguments[1] : void 0;
                                      if (t.decomposed) {
                                          let i = t.decomposed.reduce((e, t) => e.concat([t.name]), []);
                                          return e.length ? e.concat([t.name, ...i]) : [t.name, ...i];
                                      }
                                      return e.length ? (e.push(t.name), e) : [t.name];
                                  }, [])
                                  .join(l)
                            : '',
                        {
                            settings: { isMobile: I },
                        } = (0, o.g)(),
                        O = 1 === i.length,
                        b = (0, a.useCallback)((e) => {
                            (R(!0), e.preventDefault());
                        }, []),
                        j = (0, a.useMemo)(() => {
                            let e = i;
                            return (
                                g && !A && (e = i.slice(0, g)),
                                e.reduce((e, t) => {
                                    if (!S && t.isComposer) return e.length ? e : [];
                                    let i = (0, r.jsx)(
                                        T,
                                        {
                                            artist: t,
                                            linkClassName: p,
                                            captionClassName: h,
                                            withLink: _ && t.id !== P && (((!I || O) && x) || !x),
                                            captionSize: v,
                                            allArtistsTitle: k,
                                            withCustomTooltip: C,
                                            hoverSettings: c.V,
                                            shouldUseSeparator: !!l,
                                        },
                                        t.key,
                                    );
                                    return e.length ? e.concat([l, i]) : [i];
                                }, [])
                            );
                        }, [i, g, A, S, I, O, x, p, h, _, P, v, k, C, l]),
                        w = (0, a.useMemo)(() => {
                            if (!A && g && g < i.length) {
                                let e = i.length - g;
                                return (0, a.isValidElement)(f) ? f : (0, r.jsx)(L, { spoilerClassName: m, spoilerArtistsCount: e, handleOnSpoilerClick: b });
                            }
                        }, [i.length, b, A, m, f, g]),
                        M = (0, a.useMemo)(() => {
                            if (u) return { WebkitLineClamp: u };
                        }, [u]),
                        D = (0, r.jsx)(s.m_, {
                            referenceRef: N,
                            enabled: !!(E && k) && C && !x && !I,
                            offsetOptions: 4,
                            placement: 'top',
                            text: k,
                            hoverSettings: c.V,
                            children: (0, r.jsxs)('div', {
                                style: M,
                                className: (0, n.$)(d().root, d()['root_variant_'.concat(y)], { [d().root_clamp]: u && u > 0 }, { [d().ellipsis]: !u }, t),
                                title: E && k && !C && !x ? k : void 0,
                                children: [j, w],
                            }),
                        });
                    return x ? (0, r.jsx)(F, { labelRef: N, artists: i, label: D }) : D;
                });
        },
        44265: (e, t, i) => {
            'use strict';
            i.d(t, { j: () => r });
            var r = (function (e) {
                return ((e[(e.LIKE = 3)] = 'LIKE'), (e[(e.CHART = 1076)] = 'CHART'), e);
            })({});
        },
        45066: (e, t, i) => {
            'use strict';
            i.d(t, { n: () => r });
            let r = {
                MIXES: 'pages/mixes',
                TAG: 'pages/tag',
                GENRES: 'pages/genres',
                PROMOLANDING: 'pages/promolanding',
                MUSIC_HISTORY: 'pages/music-history',
                POST: 'pages/post',
                PLAYLIST_PERSONAL: 'pages/playlist-personal',
                MY_MUSIC: 'pages/my-music',
                FAVORITE_TRACKS: 'pages/favorite-tracks',
                CONCERTS_DETAILS: 'pages/concerts-details',
                LANDING_PROMO_PREVIEW: 'pages/landing-promo-preview',
                LABEL: 'pages/label',
                GENRE: 'pages/genre',
                CHART: 'pages/chart',
            };
        },
        45257: (e, t, i) => {
            'use strict';
            i.d(t, { $: () => h });
            var r = i(32290),
                n = i(63618),
                l = i(8055),
                a = i(55178);
            let s = (e) => {
                    let { style: t, forwardRef: i, context: n, ...l } = e,
                        a = (null == n ? void 0 : n.listAriaLabel) || void 0,
                        s = (null == n ? void 0 : n.listRole) || 'region';
                    return (0, r.jsx)('div', { 'aria-labelledby': 'virtual-grid-header', role: s, 'aria-label': a, style: { ...t }, ref: i, ...l });
                },
                o = (0, a.forwardRef)((e, t) => (0, r.jsx)(s, { forwardRef: t, ...e }));
            var c = i(39684),
                u = i.n(c);
            let d = (e) => {
                    let { style: t, forwardRef: i, withFooter: l, withHeader: a, withForceScroll: s, ...o } = e;
                    return (0, r.jsx)('div', {
                        className: (0, n.$)(u().scroller, { [u().scroller_withFooter]: l, [u().scroller_withHeader]: a, [u().scroller_withForceScroll]: s }),
                        style: { ...t },
                        ref: i,
                        ...o,
                        tabIndex: -1,
                    });
                },
                g = (0, a.forwardRef)((e, t) => (0, r.jsx)(d, { forwardRef: t, ...e }));
            var _ = i(62060),
                m = i(31417);
            let p = (e) => {
                    let {
                            pageSize: t,
                            onPageHandler: i,
                            onRangeHandler: n,
                            debounceDurationInMs: l = 100,
                            totalCount: s = 0,
                            shouldTriggerRangeChangedOn: o = [],
                            endReached: c,
                            virtuosoRef: u,
                            ...d
                        } = e,
                        [g, p] = (0, a.useState)(null),
                        h = (0, a.useMemo)(
                            () =>
                                (0, _.A)((e) => {
                                    if ((null == n || n(e), o.length > 0 && p(e), t && i)) {
                                        let r = Math.floor(e.endIndex / t) + 1,
                                            n = Math.floor(e.startIndex / t);
                                        for (let e = n; e < r; e++) i(e);
                                    }
                                }, l),
                            [l, n, t, i, o],
                        );
                    (0, a.useEffect)(() => {
                        o.length > 0 && g && h(g);
                    }, o);
                    let v = (0, a.useMemo)(() => {
                        if (c)
                            return (0, _.A)((e) => {
                                c(e);
                            }, l);
                    }, [c, l]);
                    return (0, r.jsx)(m.sN, { ref: u, rangeChanged: h, totalCount: s, endReached: v, ...d });
                },
                h = (e) => {
                    let {
                            className: t,
                            customComponents: i,
                            onGetDataByPage: s,
                            onGetDataByRange: c,
                            itemClassName: d,
                            itemContentCallback: _,
                            listClassName: m,
                            overscan: h = 700,
                            pageSize: v = 20,
                            totalCount: y,
                            totalRequests: E,
                            debounceDurationInMs: S,
                            initialItemCount: f,
                            minInitialItemCount: C = 20,
                            handleRef: T,
                            alwaysShowScrollbar: P = !1,
                            testId: x,
                            isMobileLayout: L = !1,
                            shouldTriggerRangeChangedOn: N,
                            ...A
                        } = e,
                        [R, k] = (0, a.useState)(!1),
                        I = (0, a.useMemo)(
                            () =>
                                (0, l.A)((e) => {
                                    k(e);
                                }, 100),
                            [],
                        ),
                        O = (0, a.useMemo)(() => {
                            var e, t;
                            return L
                                ? {
                                      Scroller: g,
                                      List: null != (e = null == i ? void 0 : i.List) ? e : o,
                                      Item: null == i ? void 0 : i.Item,
                                      ScrollSeekPlaceholder: null == i ? void 0 : i.ScrollSeekPlaceholder,
                                  }
                                : {
                                      Scroller: g,
                                      List: null != (t = null == i ? void 0 : i.List) ? t : o,
                                      Item: null == i ? void 0 : i.Item,
                                      Header: null == i ? void 0 : i.Header,
                                      Footer: null == i ? void 0 : i.Footer,
                                      ScrollSeekPlaceholder: null == i ? void 0 : i.ScrollSeekPlaceholder,
                                  };
                        }, [i, E, L]),
                        b = f ? Math.min(f, C) : void 0;
                    return (0, r.jsxs)('div', {
                        className: (0, n.$)(u().root, { [u().root_scrolling]: R || P, [u().root_notScrolling]: !R && !P }, t),
                        'data-test-id': x,
                        children: [
                            L && (null == i ? void 0 : i.Header) && i.Header(),
                            (0, r.jsx)(p, {
                                overscan: h,
                                components: O,
                                listClassName: m,
                                itemClassName: d,
                                isScrolling: I,
                                itemContent: _,
                                scrollerRef: T,
                                totalCount: y,
                                pageSize: v,
                                onPageHandler: s,
                                onRangeHandler: c,
                                debounceDurationInMs: S,
                                initialItemCount: b,
                                shouldTriggerRangeChangedOn: N,
                                ...A,
                            }),
                            L && (null == i ? void 0 : i.Footer) && i.Footer(),
                        ],
                    });
                };
        },
        45346: (e, t, i) => {
            'use strict';
            i.d(t, { a: () => s });
            var r = i(60754),
                n = i(15567);
            let l = ['Safari', 'MobileSafari'],
                a = ['iOS', 'MacOS'],
                s = r.gK.model('DomainTrailerEntity', { available: r.gK.boolean }).views((e) => ({
                    get isAvailable() {
                        if (!(0, r._n)(e)) return !1;
                        let { settings: t } = (0, n.M)(e);
                        if (
                            !(null == t ? void 0 : t.browserInfo) ||
                            ((e) => {
                                let t = e.version ? Number(e.version.split('.')[0]) : void 0;
                                return !!(e.name && l.includes(e.name) && e.OSFamily && a.includes(e.OSFamily) && t && t < 18);
                            })(t.browserInfo)
                        )
                            return !1;
                        return e.available;
                    },
                }));
        },
        49259: (e, t, i) => {
            'use strict';
            i.d(t, { W: () => h, s: () => v });
            var r = i(32290),
                n = i(96103),
                l = i(21916),
                a = i(55178),
                s = i(85472),
                o = i(25090),
                c = i(96218),
                u = i(5245),
                d = i(57594),
                g = i(31726);
            (0, n.eO)(!1);
            let _ = (0, a.createContext)(null),
                m = (e) => {
                    let { children: t, store: i, storeKey: n } = e,
                        l = (0, a.useMemo)(() => ({ store: i, storeKey: n }), [i, n]);
                    return (0, r.jsx)(_.Provider, { value: l, children: t });
                },
                p = (e) => {
                    let { nonce: t, patchKey: i, patchesRef: n } = e;
                    return (
                        (0, l.useServerInsertedHTML)(() => {
                            let e = n.current;
                            return ((n.current = []), 0 === e.length)
                                ? null
                                : (0, r.jsx)('script', {
                                      dangerouslySetInnerHTML: {
                                          __html: ((e, t) =>
                                              "\n        window.__PAGE_STATE_PATCHES__ = window.__PAGE_STATE_PATCHES__ || {};\n        window.__PAGE_STATE_PATCHES__['"
                                                  .concat(e, "'] =\n            window.__PAGE_STATE_PATCHES__['")
                                                  .concat(e, "'] || [];\n        window.__PAGE_STATE_PATCHES__['")
                                                  .concat(e, "'].push(")
                                                  .concat((0, s.stringifyJSONSafely)(t), ");\n        window.dispatchEvent(new Event('")
                                                  .concat(c.O, "'));\n    "))(i, e),
                                      },
                                      nonce: null != t ? t : void 0,
                                  });
                        }),
                        null
                    );
                },
                h = (e) => {
                    let { createStore: t, patchKey: i } = e,
                        n = () => {
                            var e, t;
                            let r = null != (t = null == (e = window.__PAGE_STATE_PATCHES__) ? void 0 : e[i]) ? t : [];
                            return (window.__PAGE_STATE_PATCHES__ && delete window.__PAGE_STATE_PATCHES__[i], r);
                        };
                    return {
                        pageStoreProvider: (e) => {
                            let { children: l, nonce: a } = e,
                                s = (0, g.Y)(),
                                o = (0, d.g)(),
                                { store: _, patchesRef: h } = (0, u.m)({
                                    createStore: () => t({ ...s, rootStore: o }),
                                    getPendingPatchBatches: n,
                                    patchesUpdatedEventName: c.O,
                                });
                            return (0, r.jsxs)(r.Fragment, {
                                children: [(0, r.jsx)(p, { nonce: a, patchKey: i, patchesRef: h }), (0, r.jsx)(m, { store: _, storeKey: i, children: l })],
                            });
                        },
                    };
                };
            function v(e) {
                let { throwOnAbsence: t = !0 } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    i = (0, a.useContext)(_);
                if (!i || i.storeKey !== e) {
                    var r;
                    if (!t) return null;
                    throw new o.t('Page store context is missing or has unexpected key', {
                        code: 'E_CONTEXT_PAGE_STORE_NULL',
                        data: { actualStoreKey: null != (r = null == i ? void 0 : i.storeKey) ? r : 'null', expectedStoreKey: e },
                    });
                }
                return i.store;
            }
        },
        50891: (e, t, i) => {
            'use strict';
            i.d(t, { m: () => l });
            var r = i(91945),
                n = i(25090);
            class l extends n.t {
                constructor(e = 'Http Client error', { code: t = 'E_HTTP_CLIENT', ...i } = {}) {
                    (super(e, { code: t, ...i }), (0, r._)(this, 'name', 'HttpException'), Object.setPrototypeOf(this, l.prototype));
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
        52598: (e) => {
            e.exports = { root: 'SeparatedArtistsWithContextMenuMobile_root__4BiJL', important: 'SeparatedArtistsWithContextMenuMobile_important__fSF1h' };
        },
        53126: (e, t, i) => {
            'use strict';
            (i.r(t), i.d(t, { default: () => G }));
            var r = i(32290),
                n = i(21916),
                l = i(55178),
                a = i(49259),
                s = i(45066),
                o = i(60754),
                c = i(87953),
                u = i(33229),
                d = i(74885),
                g = i(58008),
                _ = i(49399),
                m = i(86634);
            let p = o.gK
                    .model('TagPage', {
                        title: o.gK.maybe(o.gK.string),
                        errorStatusCode: o.gK.maybeNull(o.gK.number),
                        tagLoadingState: o.gK.enumeration(Object.values(_.G)),
                        playlistsData: o.gK.array(o.gK.model({ uid: o.gK.number, kind: o.gK.number })),
                        pagesLoader: (0, m.I)(d.$),
                    })
                    .views((e) => {
                        let t = {
                            get isNeededToLoad() {
                                return e.tagLoadingState === _.G.IDLE;
                            },
                            get isResolved() {
                                return e.tagLoadingState === _.G.RESOLVE;
                            },
                            get isNotFound() {
                                let t = e.pagesLoader.isEmpty;
                                return (e.tagLoadingState === _.G.REJECT && (e.errorStatusCode === c.X1.NOT_FOUND || e.errorStatusCode === c.X1.BAD_REQUEST)) || t;
                            },
                            get isSomethingWrong() {
                                return e.tagLoadingState === _.G.REJECT && !t.isNotFound;
                            },
                            get playlists() {
                                var i;
                                return null != (i = e.pagesLoader.items) ? i : [];
                            },
                        };
                        return t;
                    })
                    .actions((e) => {
                        let t = {
                            getPlaylists: (0, o.L3)(function* (t) {
                                let { page: i = 0, pageSize: r = 20 } = t,
                                    { playlistsResource: n, modelActionsLogger: l } = (0, o._$)(e);
                                if (e.tagLoadingState === _.G.RESOLVE && e.pagesLoader.isPageNeedToLoad(i))
                                    try {
                                        e.pagesLoader.setPageState(i, _.G.PENDING);
                                        let t = i * r,
                                            l = e.playlistsData.slice(t, t + r),
                                            a = yield n.getPlaylists({ playlistIds: l.map((e) => ''.concat(e.uid, ':').concat(e.kind)), resumeStream: !1 }),
                                            s = { page: i, perPage: r, total: e.playlistsData.length },
                                            o = a.playlists.map(u.j);
                                        e.pagesLoader.setItems(o, { page: i, pager: s });
                                    } catch (t) {
                                        (l.error(t),
                                            e.pagesLoader.setItems(null, { responseStatus: g.F.ERROR, page: i }),
                                            t instanceof c.GX &&
                                                (t.statusCode === c.X1.NOT_FOUND || t.statusCode === c.X1.BAD_REQUEST) &&
                                                (e.errorStatusCode = c.X1.NOT_FOUND));
                                    }
                            }),
                            reset() {
                                (e.pagesLoader.reset(),
                                    (e.tagLoadingState = _.G.IDLE),
                                    (e.title = void 0),
                                    (e.playlistsData = (0, o.wg)([])),
                                    (e.errorStatusCode = null));
                            },
                            getTag: (0, o.L3)(function* (i) {
                                let { id: r, page: n = 0, pageSize: l = 20 } = i,
                                    { tagResource: a, modelActionsLogger: s } = (0, o._$)(e);
                                if (e.tagLoadingState !== _.G.PENDING)
                                    try {
                                        var u;
                                        e.tagLoadingState = _.G.PENDING;
                                        let i = yield a.getPlaylistIds({ id: r });
                                        ((e.title = null == (u = i.tag) ? void 0 : u.name),
                                            (e.playlistsData = (0, o.wg)(i.ids.map((e) => ({ uid: e.uid, kind: e.kind })))),
                                            e.tagLoadingState !== _.G.IDLE && (e.tagLoadingState = _.G.RESOLVE),
                                            yield t.getPlaylists({ page: n, pageSize: l }));
                                    } catch (t) {
                                        (s.error(t),
                                            t instanceof c.GX &&
                                                (t.statusCode === c.X1.NOT_FOUND || t.statusCode === c.X1.BAD_REQUEST) &&
                                                (e.errorStatusCode = c.X1.NOT_FOUND),
                                            e.tagLoadingState !== _.G.IDLE && (e.tagLoadingState = _.G.REJECT));
                                    }
                            }),
                        };
                        return t;
                    }),
                h = { tagLoadingState: _.G.IDLE, playlistsData: [], pagesLoader: {} },
                { pageStoreProvider: v } = (0, a.W)({ createStore: (e) => p.create(h, e), patchKey: s.n.TAG });
            var y = i(63618),
                E = i(96103),
                S = i(60900),
                f = i(71926),
                C = i(64170),
                T = i(7999),
                P = i(83460),
                x = i(48922),
                L = i(22714),
                N = i(83808),
                A = i(83920),
                R = i(3796),
                k = i(57594),
                I = i(11262),
                O = i(97841),
                b = i(32468),
                j = i(74694),
                w = i(89020),
                M = i(45257),
                D = i(66652),
                K = i.n(D);
            let F = (0, E.PA)((e) => {
                var t, i, o;
                let { tagId: c } = e,
                    u = (0, a.s)(s.n.TAG),
                    {
                        settings: { isMobile: d },
                    } = (0, k.g)(),
                    { formatMessage: g } = (0, S.A)(),
                    { contentScrollRef: _, setContentScrollRef: m } = (0, A.g)(),
                    p = (0, N.W)();
                c || (0, n.notFound)();
                let h = (0, l.useCallback)(
                    (e) => {
                        u.getPlaylists({ page: e, pageSize: 20 });
                    },
                    [u],
                );
                u.isNotFound && (0, n.notFound)();
                let v = (0, l.useMemo)(() => ({ Footer: () => (0, r.jsx)(b.A, { children: (0, r.jsx)(O.w, { className: K().footer }) }) }), []);
                return ((0, R.J)(u.isResolved),
                (0, I.X)(u.pagesLoader, h),
                u.isNeededToLoad && (0, l.use)(u.getTag({ id: c, page: 0, pageSize: 20 })),
                u.isSomethingWrong)
                    ? (0, r.jsx)(C.SomethingWentWrong, {})
                    : (0, r.jsx)(L.n, {
                          pageId: x._Q.TAG,
                          children: (0, r.jsx)(T.h, {
                              scrollElement: _,
                              outerTitle: u.title,
                              children: (0, r.jsxs)('div', {
                                  className: K().root,
                                  children: [
                                      (0, r.jsx)(j.Y, {
                                          variant: j.V.TEXT,
                                          withForwardControl: !1,
                                          withBackwardControl: p.canBack,
                                          children: (0, r.jsx)(f.DZ, { variant: 'h2', weight: 'bold', size: 'xl', lineClamp: 1, children: u.title }),
                                      }),
                                      (0, r.jsx)(M.$, {
                                          className: (0, y.$)(K().scrollContainer, K().important),
                                          customComponents: v,
                                          itemContentCallback: (e) => {
                                              let t = u.playlists[e],
                                                  i = g({ id: 'loading-messages.entity-is-loading' }, { entityName: g({ id: 'entity-names.playlist' }) });
                                              return t ? (0, r.jsx)(P.B, { playlist: t, contentLinesCount: 3 }, t.key) : (0, r.jsx)(w.V, { 'aria-label': i });
                                          },
                                          totalCount: null != (i = null == u || null == (t = u.pagesLoader.pager) ? void 0 : t.total) ? i : 0,
                                          onGetDataByPage: h,
                                          pageSize: 20,
                                          totalRequests: null != (o = null == u ? void 0 : u.pagesLoader.requestsCount) ? o : 0,
                                          listClassName: K().content,
                                          itemClassName: K().item,
                                          handleRef: m,
                                          context: { listAriaLabel: g({ id: 'mixes.albums-list' }, { genreName: u.title || '' }) },
                                          isMobileLayout: d,
                                          useWindowScroll: d,
                                      }),
                                  ],
                              }),
                          }),
                      });
            });
            var U = i(79856);
            let H = () => {
                    let e = (0, N.W)(),
                        { formatMessage: t } = (0, S.A)(),
                        i = t({ id: 'loading-messages.entity-is-loading' }, { entityName: t({ id: 'entity-names.playlist' }) }),
                        n = Array.from({ length: 20 }, (e, t) => {
                            let n = void 0 === e ? t : ''.concat(t, '-').concat(String(e));
                            return (0, r.jsx)('div', { className: K().item, children: (0, r.jsx)(w.V, { isActive: !0, 'aria-label': i }) }, n);
                        });
                    return (0, r.jsx)(T.h, {
                        scrollElement: null,
                        children: (0, r.jsxs)('div', {
                            className: K().root,
                            children: [
                                (0, r.jsx)(j.Y, {
                                    variant: j.V.TEXT,
                                    withForwardControl: !1,
                                    withBackwardControl: e.canBack,
                                    children: (0, r.jsx)(U.W, { className: K().shimmerTitle, radius: 'l' }),
                                }),
                                (0, r.jsx)('div', { className: K().content, children: n }),
                            ],
                        }),
                    });
                },
                G = () => {
                    let e = (0, n.useSearchParams)().get('tagId');
                    return (
                        e || (0, n.notFound)(),
                        (0, r.jsx)(v, { children: (0, r.jsx)(l.Suspense, { fallback: (0, r.jsx)(H, {}), children: (0, r.jsx)(F, { tagId: e }) }) })
                    );
                };
        },
        53514: (e, t, i) => {
            'use strict';
            i.d(t, { V: () => r });
            let r = { delay: { open: 1e3, close: 0 } };
        },
        54280: (e, t, i) => {
            'use strict';
            i.d(t, { V8: () => l, si: () => s, fW: () => g, MJ: () => d, jU: () => m, Bx: () => _ });
            var r = i(78061);
            function n(e) {
                if (!e) return null;
                try {
                    return JSON.parse(e);
                } catch (e) {
                    return (console.error(e), null);
                }
            }
            class l {
                get(e) {
                    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
                    try {
                        let a = (0, r.Jt)(e);
                        if (t) {
                            var i, l;
                            return null != (l = null == (i = n(a)) ? void 0 : i.value) ? l : null;
                        }
                        return null != a ? a : null;
                    } catch (e) {
                        return null;
                    }
                }
                set(e, t, i) {
                    let n = !(arguments.length > 3) || void 0 === arguments[3] || arguments[3];
                    try {
                        let l = n ? JSON.stringify({ value: t }) : t;
                        (0, r.hZ)(e, l, i);
                    } catch (e) {
                        console.error(e);
                    }
                }
                has(e) {
                    return null !== this.get(e, !1);
                }
                remove(e) {
                    try {
                        (0, r.TF)(e);
                    } catch (e) {}
                }
            }
            function a(e) {
                try {
                    var t;
                    return null != (t = window[e]) ? t : null;
                } catch (e) {
                    return null;
                }
            }
            class s {
                get(e) {
                    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
                        i = a('localStorage');
                    if (!i) return null;
                    try {
                        var r;
                        let l = i.getItem(e) || void 0;
                        if (!t) return l;
                        let a = n(l);
                        if (!a) return null;
                        let s = null != (r = null == a ? void 0 : a.value) ? r : null;
                        if ((null == a ? void 0 : a.expires) && Date.now() > new Date(a.expires).getTime()) return (this.remove(e), null);
                        return s;
                    } catch (e) {
                        return null;
                    }
                }
                set(e, t, i) {
                    if ('number' == typeof (null == i ? void 0 : i.expires)) {
                        let e = new Date();
                        (e.setMilliseconds(e.getMilliseconds() + 864e5 * i.expires), (i.expires = e));
                    }
                    let r = a('localStorage');
                    if (r)
                        try {
                            r.setItem(e, JSON.stringify({ value: t, ...i }));
                        } catch (e) {}
                }
                has(e) {
                    return null !== this.get(e);
                }
                remove(e) {
                    let t = a('localStorage');
                    if (t)
                        try {
                            t.removeItem(e);
                        } catch (e) {}
                }
            }
            var o = i(91945),
                c = i(25090);
            class u extends c.t {
                constructor(e, t, { code: i = 'E_STORAGE', ...r } = {}) {
                    (super('There is no '.concat(t, ' storage on the ').concat(e, ' platform'), { code: i, ...r }),
                        (0, o._)(this, 'name', 'Storage Exception'),
                        Object.setPrototypeOf(this, u.prototype));
                }
            }
            class d {
                get(e) {
                    throw new u(this.platform, this.type);
                }
                set(e, t, i) {
                    throw new u(this.platform, this.type);
                }
                has(e) {
                    throw new u(this.platform, this.type);
                }
                remove(e) {
                    throw new u(this.platform, this.type);
                }
                constructor(e, t) {
                    ((0, o._)(this, 'platform', ''), (0, o._)(this, 'type', ''), (this.platform = e), (this.type = t));
                }
            }
            class g {
                get(e) {
                    let t = a('sessionStorage');
                    if (!t) return null;
                    try {
                        var i, r, l;
                        let a = null != (r = t.getItem(e)) ? r : void 0;
                        return null != (l = null == (i = n(a)) ? void 0 : i.value) ? l : null;
                    } catch (e) {
                        return null;
                    }
                }
                set(e, t) {
                    let i = a('sessionStorage');
                    if (i)
                        try {
                            i.setItem(e, JSON.stringify({ value: t }));
                        } catch (e) {}
                }
                has(e) {
                    return null !== this.get(e);
                }
                remove(e) {
                    let t = a('sessionStorage');
                    if (t)
                        try {
                            t.removeItem(e);
                        } catch (e) {}
                }
            }
            function _(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
                Array.isArray(t) &&
                    t.forEach((t) => {
                        let i = 'object' != typeof t ? t : t.name,
                            r = 'object' != typeof t ? { expires: 365 } : t.options || { expires: 365 },
                            n = e.get(i);
                        null != n && e.set(i, n, r);
                    });
            }
            function m(e) {
                let { name: t, group: i, value: r } = e;
                return r && 0 !== Object.keys(r).length
                    ? r.title
                        ? { [t]: { group: i, value: { ...r, title: i } } }
                        : { [t]: { group: i, value: { title: i, value: r } } }
                    : { [t]: { group: i, value: { title: i } } };
            }
        },
        57594: (e, t, i) => {
            'use strict';
            i.d(t, { P: () => l, g: () => a });
            var r = i(55178),
                n = i(25090);
            let l = (0, r.createContext)(null);
            function a() {
                let e = (0, r.useContext)(l);
                if (null === e) throw new n.t('Store cannot be null, please add a context provider', { code: 'E_CONTEXT_STORE_NULL' });
                return e;
            }
        },
        61376: (e, t, i) => {
            'use strict';
            i.d(t, { x: () => g });
            var r = i(32290),
                n = i(63618),
                l = i(60900),
                a = i(21732),
                s = i(63423),
                o = i(82586),
                c = i(71926),
                u = i(22492),
                d = i.n(u);
            let g = (e) => {
                let { className: t, isLiked: i, likesCount: u, handleLikeClick: g, ariaLabel: _ } = e,
                    { formatNumber: m } = (0, l.A)();
                return (0, r.jsx)(s.$, {
                    className: (0, n.$)(d().root, t),
                    onClick: g,
                    variant: 'text',
                    withRipple: !1,
                    icon: (0, r.jsx)(o.I, { variant: i ? 'likedVariant' : 'likeVariant', size: 'xxs', className: d().icon }),
                    'aria-label': _,
                    'data-test-id': a.S7.CARD_LIKES,
                    children: (0, r.jsx)(c.HL, { variant: 'div', size: 's', type: 'entity', weight: 'medium', children: m(u) }),
                });
            };
        },
        62376: (e, t, i) => {
            'use strict';
            i.d(t, { U: () => l });
            var r = i(70204),
                n = i(34186);
            let l = () => (0, n.N)().get(r.Zf);
        },
        64170: (e, t, i) => {
            'use strict';
            i.d(t, { SomethingWentWrong: () => T });
            var r = i(32290),
                n = i(63618),
                l = i(96103),
                a = i(55178),
                s = i(60900),
                o = i(39407),
                c = i(63423),
                u = i(82586),
                d = i(71926),
                g = i(17811),
                _ = i(99923),
                m = i(90153),
                p = i(74416),
                h = i(62376),
                v = i(37240),
                y = i(83920),
                E = i(20472),
                S = i(12894),
                f = i(30310),
                C = i.n(f);
            let T = (0, l.PA)((e) => {
                let { className: t, withBackwardControl: i = !0 } = e,
                    { formatMessage: l } = (0, s.A)(),
                    f = l({ id: 'error-messages.something-went-wrong' });
                !(function (e) {
                    let t = (0, p.st)(),
                        { hash: i } = (0, p.gf)(),
                        { pageId: r } = (0, v.$)(),
                        n = (0, h.U)();
                    (0, a.useEffect)(() => {
                        if (!t || !i || !r) return;
                        let l = (0, g.F)({
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
                            logger: n,
                            context: 'useSendEventOnSomethingWentWrongShowed',
                        });
                        l && (0, m.z5)(t.evgenInstance, l);
                    }, [t, e, i, r, n]);
                })(f);
                let { sendRefreshEvent: T } = (function () {
                        let e = (0, p.st)(),
                            { hash: t } = (0, p.gf)(),
                            { pageId: i } = (0, v.$)(),
                            r = (0, h.U)();
                        return {
                            sendRefreshEvent: (0, a.useCallback)(() => {
                                if (!e || !t || !i) return;
                                let n = (0, g.F)({
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
                                n && (0, m.bv)(e.evgenInstance, n);
                            }, [e, t, i, r]),
                        };
                    })(),
                    P = (0, a.useCallback)(() => {
                        (T(), (window.location.href = E.Z.main.href));
                    }, [T]),
                    { contentRef: x } = (0, y.g)();
                return (0, r.jsxs)('div', {
                    className: (0, n.$)(C().root, t),
                    children: [
                        i &&
                            (0, r.jsx)(S.L, { withBackwardFallback: '/', className: (0, n.$)(C().navigation, { [C().navigation_desktop]: !x }), withForwardControl: !1 }),
                        (0, r.jsxs)('div', {
                            className: (0, n.$)(C().content, { [C().content_shrink]: !i }),
                            children: [
                                (0, r.jsx)(u.I, { className: C().icon, variant: 'attention', size: 'xxl' }),
                                (0, r.jsx)(d.DZ, { className: (0, n.$)(C().title, C().important), variant: 'h3', size: 'xs', children: f }),
                                (0, r.jsxs)(d.HL, {
                                    className: (0, n.$)(C().text, C().important),
                                    variant: 'span',
                                    type: 'text',
                                    size: 'l',
                                    weight: 'normal',
                                    children: [!1, (0, r.jsx)(o.A, { id: 'page-error.try-to-restart-app' })],
                                }),
                                (0, r.jsx)(c.$, {
                                    onClick: P,
                                    className: C().button,
                                    role: 'link',
                                    color: 'secondary',
                                    size: 'l',
                                    radius: 'xxxl',
                                    children: (0, r.jsxs)(d.HL, {
                                        type: 'controls',
                                        variant: 'span',
                                        size: 'm',
                                        children: [!1, (0, r.jsx)(o.A, { id: 'page-error.restart-app-button' })],
                                    }),
                                }),
                            ],
                        }),
                    ],
                });
            });
        },
        66652: (e) => {
            e.exports = {
                root: 'TagPage_root__EWN9A',
                scrollContainer: 'TagPage_scrollContainer__lvG_1',
                important: 'TagPage_important__Jq37E',
                content: 'TagPage_content__rUC_l',
                shimmerTitle: 'TagPage_shimmerTitle__ge9m_',
                footer: 'TagPage_footer__W0mZr',
                item: 'TagPage_item__X_lW7',
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
            i.d(t, { L: () => m });
            var r = i(32290),
                n = i(63618),
                l = i(55178),
                a = i(60900),
                s = i(39407),
                o = i(63423),
                c = i(82586),
                u = i(71926),
                d = i(58534),
                g = i(70718),
                _ = i.n(g);
            let m = (e) => {
                let { reloadBlocks: t, closeToast: i } = e,
                    g = (0, l.useRef)(null),
                    { formatMessage: m } = (0, a.A)();
                (0, l.useEffect)(() => {
                    var e;
                    null == (e = g.current) || e.focus();
                }, []);
                let p = (0, l.useMemo)(
                    () =>
                        (0, r.jsxs)('div', {
                            className: _().message,
                            children: [
                                (0, r.jsx)(u.HL, {
                                    className: _().text,
                                    variant: 'div',
                                    type: 'controls',
                                    size: 'm',
                                    children: (0, r.jsx)(s.A, { id: 'error-messages.error-load-part-page' }),
                                }),
                                (0, r.jsx)(o.$, {
                                    ref: g,
                                    className: _().button,
                                    onClick: t,
                                    variant: 'text',
                                    'aria-label': m({ id: 'interface-actions.reload-part-page' }),
                                    icon: (0, r.jsx)(c.I, { variant: 'reset', size: 'xxs', className: _().icon }),
                                }),
                            ],
                        }),
                    [m, t],
                );
                return (0, r.jsx)(d.$, { className: (0, n.$)(_().root, _().important), message: p, closeToast: i });
            };
        },
        73141: (e, t, i) => {
            'use strict';
            i.d(t, { K: () => p });
            var r = i(32290),
                n = i(92708),
                l = i(55178),
                a = i(60900),
                s = i(63380),
                o = i(45477),
                c = i(75582),
                u = i(57594),
                d = i(90357),
                g = i(97647),
                _ = i(97755);
            let m = (e) => {
                    let { playlist: t, closeToast: i } = e;
                    return (0, r.jsx)(_.O, {
                        entityVariant: g.c.PLAYLIST,
                        entityUrl: t.url,
                        collectionUrl: '/collection',
                        entityTitle: t.title,
                        isLiked: t.isLiked,
                        closeToast: i,
                        coverUri: t.coverUri,
                    });
                },
                p = (e) => {
                    let { user: t } = (0, u.g)(),
                        { notify: i } = (0, c.l)(),
                        [g, _] = (0, l.useState)(!1),
                        { formatMessage: p } = (0, a.A)();
                    return (0, l.useCallback)(async () => {
                        if (!t.isAuthorized)
                            return void i((0, r.jsx)(d.h, { error: p({ id: 'authorization-messages.need-to-authorizate' }) }), { containerId: o.u.ERROR });
                        if (g) return;
                        let l = { ...(0, n.HO)(e), url: e.url, isLiked: !e.isLiked };
                        _(!0);
                        let a = await e.toggleLike();
                        (_(!1),
                            a === s.f.OK
                                ? i((0, r.jsx)(m, { playlist: l }), { containerId: o.u.INFO })
                                : i((0, r.jsx)(d.h, { error: p({ id: 'error-messages.error-during-action' }) }), { containerId: o.u.ERROR }));
                    }, [t.isAuthorized, g, e, p, i]);
                };
        },
        73192: (e, t, i) => {
            'use strict';
            i.d(t, { A: () => m });
            var r = i(32290),
                n = i(92708),
                l = i(55178),
                a = i(60900),
                s = i(45477),
                o = i(75582),
                c = i(57594),
                u = i(90357),
                d = i(97647),
                g = i(8097);
            let _ = (e) => {
                    let { playlist: t, closeToast: i } = e;
                    return (0, r.jsx)(g.k, {
                        closeToast: i,
                        entityVariant: d.c.PLAYLIST,
                        entityUrl: t.url,
                        coverUri: t.coverUri,
                        entityTitle: t.title,
                        isPinned: t.isPinned,
                        radius: 's',
                    });
                },
                m = (e) => {
                    let { user: t } = (0, c.g)(),
                        { notify: i } = (0, o.l)(),
                        { formatMessage: d } = (0, a.A)(),
                        [g, m] = (0, l.useState)(!1);
                    return (0, l.useCallback)(async () => {
                        if (!t.isAuthorized)
                            return void i((0, r.jsx)(u.h, { error: d({ id: 'authorization-messages.need-to-authorizate' }) }), { containerId: s.u.ERROR });
                        if (g) return;
                        let l = { ...(0, n.HO)(e), url: e.url, isPinned: !e.isPinned };
                        m(!0);
                        let a = await e.togglePin();
                        (m(!1),
                            a
                                ? i((0, r.jsx)(_, { playlist: l }), { containerId: s.u.INFO })
                                : i((0, r.jsx)(u.h, { error: d({ id: 'error-messages.error-during-action' }) }), { containerId: s.u.ERROR }));
                    }, [t.isAuthorized, g, e, i, d]);
                };
        },
        74885: (e, t, i) => {
            'use strict';
            i.d(t, { $: () => h });
            var r = i(60754),
                n = i(87953),
                l = i(2047),
                a = i(90404),
                s = i(63380),
                o = i(15567),
                c = i(58008),
                u = i(68243),
                d = i(45346),
                g = i(35597),
                _ = i(20168),
                m = i(1045),
                p = i(44265);
            let h = r.gK
                .compose(
                    r.gK.model({
                        uuid: r.gK.string,
                        isAvailable: r.gK.boolean,
                        revision: r.gK.maybe(r.gK.number),
                        uid: r.gK.number,
                        kind: r.gK.number,
                        title: r.gK.maybe(r.gK.string),
                        coverUri: r.gK.maybe(r.gK.string),
                        tracksCount: r.gK.maybe(r.gK.number),
                        averageColor: r.gK.maybe(r.gK.string),
                        generatedPlaylistType: r.gK.maybe(r.gK.string),
                        personalColor: r.gK.maybeNull(r.gK.number),
                        visibility: r.gK.maybe(r.gK.string),
                        trailer: r.gK.maybe(d.a),
                    }),
                    g.t,
                )
                .views((e) => ({
                    get key() {
                        return ''.concat(e.uuid, '_').concat(e.uid, '_').concat(e.kind);
                    },
                    get url() {
                        let { href: t } = (0, u.u)('/playlists/:playlistUuid', { params: { playlistUuid: e.uuid } });
                        return t;
                    },
                    get isLikesCountHidden() {
                        return e.kind === p.j.LIKE || e.kind === p.j.CHART || e.generatedPlaylistType;
                    },
                    get isFavouritePlaylist() {
                        return e.kind === p.j.LIKE;
                    },
                    get isPublic() {
                        return e.visibility === l.L.PUBLIC;
                    },
                    get isLiked() {
                        if (!(0, r._n)(e)) return !1;
                        let { library: t } = (0, o.M)(e);
                        return t.isPlaylistLiked(''.concat(e.uid, ':').concat(e.kind));
                    },
                    get pinId() {
                        return ''.concat(a._.PLAYLIST_ITEM).concat(e.uid, '_').concat(e.kind);
                    },
                    get id() {
                        return ''.concat(e.uid, ':').concat(e.kind);
                    },
                    get isPinned() {
                        if (!(0, r._n)(e)) return !1;
                        let { pinsCollection: t } = (0, o.M)(e);
                        return t.isPinned(this.pinId);
                    },
                    get isOwnPlaylist() {
                        let { user: t } = (0, o.M)(e);
                        return !!(t.isAuthorized && e.uid && t.account.data.uid && e.uid === t.account.data.uid);
                    },
                    get canUserChange() {
                        if (!(0, r._n)(e)) return !1;
                        return this.isOwnPlaylist && !this.isFavouritePlaylist;
                    },
                    get isOwnFavouritePlaylist() {
                        if (!(0, r._n)(e)) return !1;
                        return this.isFavouritePlaylist && this.isOwnPlaylist;
                    },
                }))
                .actions((e) => ({
                    toggleLike: (0, r.L3)(function* () {
                        if (!(0, r._n)(e)) return;
                        let { library: t, user: i } = (0, o.M)(e);
                        if (i.isAuthorized) {
                            let n = yield t.togglePlaylistLike({ userId: i.account.data.uid, entityId: e.id, ownerId: e.uid, kindId: e.kind });
                            return ((0, r._n)(e) && n === s.f.OK && (e.isLiked ? e.likePending() : e.unlikePending()), n);
                        }
                    }),
                    togglePin: (0, r.L3)(function* () {
                        if (!(0, r._n)(e)) return;
                        let { pinsCollection: t, user: i } = (0, o.M)(e);
                        if (i.isAuthorized) return yield t.togglePlaylistPin({ uid: e.uid, kind: e.kind }, e.pinId);
                    }),
                    changePlaylist: (0, r.L3)(function* (t) {
                        if (!(0, r._n)(e)) return _.Y.ERROR;
                        let { usersResource: i, modelActionsLogger: l } = (0, r._$)(e);
                        try {
                            var a, s;
                            let r = yield i.changePlaylistRelative({ userId: e.uid, diff: t, revision: null != (a = e.revision) ? a : 0, playlistKind: e.kind });
                            return ((e.revision = r.revision), (e.isAvailable = null == (s = r.available) || s), _.Y.OK);
                        } catch (e) {
                            if ((l.error(e), e && 'object' == typeof e && 'statusCode' in e && e.statusCode === n.X1.PRECONDITION_FAILED)) return _.Y.RELOAD;
                            return _.Y.ERROR;
                        }
                    }),
                    changeTitle: (0, r.L3)(function* (t) {
                        if (!(0, r._n)(e)) return c.F.ERROR;
                        if (e.title === t) return c.F.OK;
                        let { usersResource: i, modelActionsLogger: n } = (0, r._$)(e);
                        if (e.canUserChange) {
                            if (t.length < 1 || t.length > m.k) return c.F.ERROR;
                            let r = e.title;
                            e.title = t;
                            try {
                                let n = yield i.changePlaylistTitle({ title: t, userId: e.uid, playlistKind: e.kind });
                                if (!(null == n ? void 0 : n.title)) return ((e.title = r), c.F.ERROR);
                                return ((e.title = n.title), c.F.OK);
                            } catch (t) {
                                ((e.title = r), n.error(t));
                            }
                        }
                        return c.F.ERROR;
                    }),
                    deletePlaylist: (0, r.L3)(function* () {
                        if (!(0, r._n)(e) || !e.canUserChange) return c.F.ERROR;
                        let { pinsCollection: t } = (0, o.M)(e),
                            { usersResource: i, modelActionsLogger: n } = (0, r._$)(e);
                        try {
                            return (yield i.deletePlaylist({ userId: e.uid, playlistKind: e.kind }), t.isPinned(e.pinId) && t.deletePin(e.pinId), c.F.OK);
                        } catch (e) {
                            n.error(e);
                        }
                        return c.F.ERROR;
                    }),
                    toggleVisibility: (0, r.L3)(function* (t) {
                        if (!(0, r._n)(e) || (!e.canUserChange && !e.isOwnFavouritePlaylist)) return c.F.ERROR;
                        let { usersResource: i, modelActionsLogger: n } = (0, r._$)(e),
                            { user: a } = (0, o.M)(e),
                            s = e.visibility,
                            u = e.isPublic ? l.L.PRIVATE : l.L.PUBLIC;
                        t && (u = t);
                        try {
                            return (
                                (e.visibility = u),
                                e.isOwnFavouritePlaylist
                                    ? yield a.setSettings({ userMusicVisibility: u })
                                    : yield i.togglePlaylistVisibility({ visibility: u, userId: e.uid, playlistKind: e.kind }),
                                c.F.OK
                            );
                        } catch (e) {
                            n.error(e);
                        }
                        return ((e.visibility = s), c.F.ERROR);
                    }),
                    getKey: (t) => ''.concat(t, '_').concat(e.id),
                }));
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
        78061: (e, t, i) => {
            'use strict';
            i.d(t, { Jt: () => l, TF: () => s, hZ: () => a });
            var r = function () {
                return (r =
                    Object.assign ||
                    function (e) {
                        for (var t, i = 1, r = arguments.length; i < r; i++)
                            for (var n in (t = arguments[i])) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                        return e;
                    }).apply(this, arguments);
            };
            function n(e, t) {
                if (!t) return '';
                var i = '; ' + e;
                return !0 === t ? i : i + '=' + t;
            }
            function l(e) {
                return (function (e) {
                    for (var t = {}, i = e ? e.split('; ') : [], r = 0; r < i.length; r++) {
                        var n = i[r].split('='),
                            l = n.slice(1).join('=');
                        '"' === l[0] && (l = l.slice(1, -1));
                        try {
                            t[decodeURIComponent(n[0])] = l.replace(/(%[\dA-F]{2})+/gi, decodeURIComponent);
                        } catch (e) {}
                    }
                    return t;
                })(document.cookie)[e];
            }
            function a(e, t, i) {
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
                                n('Expires', e.expires ? e.expires.toUTCString() : '') +
                                n('Domain', e.domain) +
                                n('Path', e.path) +
                                n('Secure', e.secure) +
                                n('SameSite', e.sameSite)
                            );
                        })(l));
            }
            function s(e, t) {
                a(e, '', r(r({}, t), { expires: -1 }));
            }
        },
        78176: (e, t, i) => {
            'use strict';
            i.d(t, { V: () => E });
            var r = i(32290),
                n = i(63618),
                l = i(96103),
                a = i(55178),
                s = i(99923),
                o = i(21732),
                c = i(91027),
                u = i(50162),
                d = i(19740),
                g = i(86269),
                _ = i(71926),
                m = i(47745),
                p = i(32641),
                h = i(57594),
                v = i(16510),
                y = i.n(v);
            let E = (0, l.PA)((e) => {
                let { artist: t, className: i } = e,
                    { fullscreenPlayer: l } = (0, h.g)(),
                    v = (0, p.Z)(t.url),
                    S = (0, m.N)(),
                    f = (0, a.useMemo)(() => {
                        var e;
                        return (
                            'decomposed' in t &&
                            (null == (e = t.decomposed) ? void 0 : e.reduce((e, t) => (e.push((0, r.jsx)(E, { artist: t, className: i }, t.id)), e), []))
                        );
                    }, [t, i]),
                    C = (0, c.c)((e) => {
                        (l.modal.isOpened && l.modal.close(), S({ to: s.AppScreen.ArtistScreen }), v(e));
                    });
                return (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsxs)(d.Dr, {
                            className: (0, n.$)(y().root, i),
                            onClick: C,
                            'data-test-id': o.OA.artists.ARTIST_ITEM,
                            children: [
                                (0, r.jsx)(g.t, {
                                    radius: 'round',
                                    className: y().cover,
                                    children: (0, r.jsx)(u._V, { withAvatarReplace: !0, src: t.coverUri, size: 100, fit: 'contain', className: y().image }),
                                }),
                                (0, r.jsx)(_.HL, { variant: 'span', size: 'm', weight: 'medium', lineClamp: 1, children: t.name }),
                            ],
                        }),
                        f,
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
        83460: (e, t, i) => {
            'use strict';
            i.d(t, { B: () => Z });
            var r = i(32290),
                n = i(63618),
                l = i(96103),
                a = i(55178),
                s = i(60900),
                o = i(99923),
                c = i(21732),
                u = i(71483),
                d = i(91027),
                g = i(6752),
                _ = i(14934),
                m = i(82586),
                p = i(86269),
                h = i(71926),
                v = i(41677),
                y = i(73141),
                E = i(73192),
                S = i(71735),
                f = i(47745),
                C = i(2969),
                T = i(54391),
                P = i(23352),
                x = i(72396),
                L = i(5537),
                N = i(32641),
                A = i(28999),
                R = i(90169),
                k = i(57594),
                I = i(61376),
                O = i(11323),
                b = i(92744),
                j = i(61258),
                w = i(10180),
                M = i(90326),
                D = i(29268),
                K = i(34925),
                F = i(13931),
                U = i(19740),
                H = i(9017),
                G = i(65477),
                z = i(46200),
                B = i(27120),
                W = i(95134),
                Y = i(79406),
                V = i(58237),
                X = i(56367),
                $ = i(83755);
            let q = (0, l.PA)((e) => {
                var t;
                let { playlist: i, onOpenChange: n, open: l, ...a } = e,
                    { shouldShowBuySubscriptionModal: u, showBuySubscriptionModal: g } = (0, z.q)(),
                    {
                        experiments: _,
                        settings: { isMobile: m },
                        trailer: p,
                        user: h,
                    } = (0, k.g)(),
                    v = (0, y.K)(i),
                    f = (0, E.A)(i),
                    C = (0, T.F)(),
                    { formatMessage: P } = (0, s.A)(),
                    x = (0, S.P)(),
                    L = _.checkExperiment(Y.z.WebEditorsFeatures, 'on'),
                    N = (0, H.A)({ entityVariant: W.D.PLAYLIST, urlParams: { id: i.uid, kind: i.kind } });
                (0, B.N)(l);
                let A = (0, d.c)(() => {
                    if (u) return void g();
                    x() || (p.openPlaylistTrailer(i.id), C(o.DomainObjectType.Playlist, i.id));
                });
                return (0, r.jsxs)(U.W1, {
                    title: i.title,
                    onOpenChange: n,
                    open: l,
                    offsetOptions: 10,
                    isMobile: m,
                    ariaLabel: P({ id: 'interface-actions.context-menu' }),
                    containerDataTestId: c.Kq.playlist.PLAYLIST_CONTEXT_MENU,
                    ...a,
                    children: [
                        L && (0, r.jsx)(G.d, { entityVariant: W.D.PLAYLIST, adminUrl: i.isFavouritePlaylist ? void 0 : N }),
                        !m && (0, r.jsx)(X.L, { onClick: f, isPinned: i.isPinned }),
                        !i.isFavouritePlaylist && (0, r.jsx)(V.T, { onClick: v, isLiked: i.isLiked, disabled: !h.isAuthorized }),
                        (null == (t = i.trailer) ? void 0 : t.isAvailable) && (0, r.jsx)($.N, { onClick: A, disabled: !i.isAvailable }),
                    ],
                });
            });
            var J = i(11675),
                Q = i.n(J);
            let Z = (0, l.PA)((e) => {
                let { className: t, playlist: i, children: l, contentLinesCount: U, customDescription: H, onCoverMouseDown: G } = e,
                    { ref: z, intersectionPropertyId: B } = (0, P.n)(),
                    {
                        trailer: W,
                        user: Y,
                        paywall: { modal: V },
                    } = (0, k.g)(),
                    { from: X, utmLink: $ } = (0, x.f)({ contextId: i.uuid, contextType: u.K.Playlist }),
                    { formatMessage: J } = (0, s.A)(),
                    { sendLikeSearchFeedback: Z, sendNavigateSearchFeedback: ee, sendPlaySearchFeedback: et } = (0, A.z)(),
                    [ei, er] = (0, a.useState)(!1),
                    [en, el] = (0, a.useState)(!1),
                    [ea, es] = (0, a.useState)(!1),
                    eo = (0, F.r)(i),
                    ec = (0, y.K)(i),
                    eu = (0, E.A)(i),
                    ed = (0, f.N)(),
                    eg = (0, C.b)(),
                    e_ = (0, N.Z)(i.url),
                    em = (0, T.F)(),
                    ep = (0, S.P)(),
                    eh = (0, d.c)((e) => {
                        if ((e.stopPropagation(), ep())) return void e.preventDefault();
                        (W.setUtmLink($), W.openPlaylistTrailer(i.id), em(o.DomainObjectType.Playlist, i.id));
                    }),
                    [ev, ey] = (0, a.useState)(!1),
                    { isPlaying: eE, togglePlay: eS } = (0, R.D)({
                        playContextParams: { contextData: { type: u.K.Playlist, meta: { id: i.id, uuid: i.uuid }, from: X, utmLink: $ }, loadContextMeta: !0 },
                    }),
                    ef = (0, d.c)(() => {
                        (ed({ to: o.AppScreen.PlaylistScreen }), null == ee || ee());
                    }),
                    eC = (0, d.c)((e) => {
                        (ef(), e_(e));
                    }),
                    eT = (0, L.N)(),
                    eP = (0, d.c)(() => {
                        if (!ep()) {
                            if (eT) return void V.open();
                            (ei || eE || (er(!0), null == et || et()), eS(), eg(!eE));
                        }
                    }),
                    ex = (0, d.c)(() => {
                        (en || i.isLiked || (el(!0), null == Z || Z()), ec());
                    }),
                    eL = (0, d.c)((e) => {
                        (e.preventDefault(), e.stopPropagation());
                    }),
                    eN = (0, d.c)((e) => {
                        (es(e), ey(e));
                    }),
                    eA = (0, a.useMemo)(() => {
                        var e;
                        return H
                            ? (0, r.jsx)(h.HL, { variant: 'span', type: 'entity', size: 's', weight: 'medium', lineClamp: 2, children: H }, i.getKey('description'))
                            : (null == (e = i.artists) ? void 0 : e.length)
                              ? (0, r.jsx)(
                                    v.i,
                                    { className: Q().artists, artists: i.artists, lineClamp: 1, linkClassName: Q().artistLink, captionSize: 's' },
                                    i.getKey('description'),
                                )
                              : void 0;
                    }, [H, i]),
                    eR = (0, g.L)(() => {
                        if (!i.isFavouritePlaylist)
                            return (0, r.jsx)(
                                b.c,
                                {
                                    className: (0, n.$)(Q().likeButton, Q().control),
                                    isLiked: i.isLiked,
                                    onClick: ex,
                                    variant: 'default',
                                    size: 's',
                                    iconSize: 'xxs',
                                    disabled: !Y.isAuthorized,
                                },
                                i.getKey('LikeButton'),
                            );
                    }),
                    ek = (0, a.useMemo)(() => {
                        var e;
                        if (null == i || null == (e = i.trailer) ? void 0 : e.isAvailable)
                            return (0, r.jsx)(
                                K.n,
                                {
                                    children: (0, r.jsx)(
                                        D.k,
                                        { className: (0, n.$)(Q().trailerButton, Q().control), radius: 'round', size: 's', iconSize: 'xxs', onClick: eh },
                                        i.getKey('TrailerButton'),
                                    ),
                                },
                                i.getKey('PlaylilstCardTrailerTooltip'),
                            );
                    }, [eh, i]),
                    eI = (0, a.useMemo)(
                        () =>
                            (0, r.jsx)(
                                w.O,
                                { onClick: eu, isPinned: i.isPinned, className: (0, n.$)(Q().pinButton, Q().control), withRipple: !1 },
                                i.getKey('PinButton'),
                            ),
                        [eu, i],
                    ),
                    eO = (0, a.useMemo)(
                        () =>
                            (0, r.jsx)(p.t, {
                                className: Q().cover,
                                radius: 's',
                                withShadow: !0,
                                'data-test-id': c.Kq.playlist.PLAYLIST_CARD,
                                children: (0, r.jsxs)('div', {
                                    className: Q().coverBlock,
                                    onClick: eC,
                                    onMouseDown: G,
                                    children: [
                                        (0, r.jsx)(O.B, {
                                            className: Q().image,
                                            src: i.coverUri,
                                            size: 200,
                                            fit: 'cover',
                                            alt: eo,
                                            withAvatarReplace: !0,
                                            'aria-hidden': !0,
                                        }),
                                        (0, r.jsx)(_.hg, {
                                            isVisible: ea || ev,
                                            className: Q().controls,
                                            playControl: (0, r.jsx)(
                                                M.D,
                                                {
                                                    className: (0, n.$)(Q().playButton, Q().control),
                                                    buttonVariant: 'default',
                                                    withHover: !1,
                                                    iconSize: 'xl',
                                                    variant: 'filled',
                                                    onClick: eP,
                                                    isPlaying: eE,
                                                    disabled: !i.isAvailable,
                                                },
                                                i.getKey('PlayButton'),
                                            ),
                                            likeControl: eR,
                                            menuControl: (0, r.jsx)(
                                                q,
                                                {
                                                    playlist: i,
                                                    onOpenChange: eN,
                                                    open: ea,
                                                    onClick: eL,
                                                    className: (0, n.$)(Q().menuButton, Q().control),
                                                    icon: (0, r.jsx)(m.I, { size: 'xxs', variant: 'more' }),
                                                    size: 's',
                                                    'data-test-id': c.Kq.playlist.PLAYLIST_CONTEXT_MENU_BUTTON,
                                                },
                                                i.getKey('PlaylistContextMenu'),
                                            ),
                                            pinControl: eI,
                                            trailerControl: ek,
                                        }),
                                    ],
                                }),
                            }),
                        [eC, G, i, eo, ea, ev, eP, eE, eR, eN, eL, eI, ek],
                    ),
                    eb = !!i.actualLikesCount && !i.isLikesCountHidden;
                return (0, r.jsxs)(_.MN, {
                    ref: z,
                    'aria-label': eo,
                    className: (0, n.$)(Q().root, t),
                    title: (0, r.jsx)(h.HL, {
                        variant: 'div',
                        type: 'entity',
                        size: 's',
                        weight: 'medium',
                        lineClamp: 2,
                        'data-test-id': c.Kq.playlist.PLAYLIST_TITLE,
                        children: (0, r.jsx)(j.N, { className: Q().titleLink, href: i.url, onClick: ef, children: i.title }),
                    }),
                    srTitle: (0, r.jsx)(j.N, { href: i.url, onClick: ef, children: i.title }),
                    'data-intersection-property-id': B,
                    contentLinesCount: U,
                    view: eO,
                    description: eA,
                    'data-test-id': c.Kq.playlist.PLAYLIST_ITEM,
                    children: [
                        eb &&
                            (0, r.jsx)(I.x, {
                                ariaLabel: J({ id: 'entity-names.likes-counter' }, { counter: i.actualLikesCount }),
                                likesCount: i.actualLikesCount,
                                isLiked: i.isLiked,
                                handleLikeClick: ec,
                            }),
                        l,
                    ],
                });
            });
        },
        83598: (e) => {
            e.exports = {
                tooltipContent: 'SeparatedArtistsWithContextMenuDesktop_tooltipContent___PtDD',
                artistItem: 'SeparatedArtistsWithContextMenuDesktop_artistItem__Ggo_W',
            };
        },
        86634: (e, t, i) => {
            'use strict';
            i.d(t, { I: () => c });
            var r = i(60754),
                n = i(58008),
                l = i(49399),
                a = i(89009),
                s = i(93841),
                o = i(93043);
            function c(e, t) {
                let { useAppendMode: i = !1 } = null != t ? t : {};
                return r.gK
                    .compose(
                        r.gK.model('PageLoader', {
                            items: r.gK.maybeNull(r.gK.array(r.gK.maybeNull(e))),
                            requestsCount: r.gK.optional(r.gK.number, 0),
                            initialRequestLoadingState: r.gK.optional(r.gK.enumeration(Object.values(l.G)), l.G.IDLE),
                            lastRejectedPagesList: r.gK.optional(r.gK.array(r.gK.number), []),
                            pager: r.gK.maybeNull(o.j),
                            pageStates: r.gK.maybeNull(r.gK.array(r.gK.enumeration(Object.values(l.G)))),
                        }),
                        s.p,
                    )
                    .views((e) => {
                        let t = {
                            isPageNeedToLoad: (t) => {
                                var i;
                                return null == (i = e.pageStates) || !i[t] || e.pageStates[t] === l.G.IDLE;
                            },
                            get isSomePageResolved() {
                                var r;
                                return !!((null == (r = e.pageStates) ? void 0 : r.length) && e.pageStates.some((e) => e === l.G.RESOLVE));
                            },
                            get isEmpty() {
                                var n;
                                return t.isSomePageResolved && !(null == (n = e.items) ? void 0 : n.length);
                            },
                            get isNeedToMakeInitialRequest() {
                                return e.initialRequestLoadingState === l.G.IDLE;
                            },
                            get isInitialRequestRejected() {
                                return e.initialRequestLoadingState === l.G.REJECT;
                            },
                            get hasMorePages() {
                                var a;
                                return !!i && !(null == (a = e.pager) ? void 0 : a.lastPage);
                            },
                            get rejectedPagesCount() {
                                var s;
                                if (t.isInitialRequestRejected || !(null == (s = e.pageStates) ? void 0 : s.length)) return 0;
                                return e.pageStates.filter((e) => e === l.G.REJECT).length;
                            },
                        };
                        return t;
                    })
                    .actions((e) => {
                        let t = {
                            setPageState: (r, n) => {
                                let a;
                                if (([l.G.IDLE, l.G.PENDING].includes(e.initialRequestLoadingState) && (e.initialRequestLoadingState = n), i)) a = r + 1;
                                else {
                                    var s, o, c, u;
                                    a = Math.ceil(
                                        (null != (c = null == (s = e.pager) ? void 0 : s.total) ? c : 0) /
                                            (null != (u = null == (o = e.pager) ? void 0 : o.perPage) ? u : 1),
                                    );
                                }
                                let d = Math.max(r + 1, a);
                                (t.ensurePageStatesInitialized(d), e.pageStates && (e.pageStates[r] = n), n === l.G.REJECT && t.addLastRejectedPageToList(r));
                            },
                            setItems: (s, o) => {
                                var c;
                                let { page: u, pager: d, responseStatus: g } = o;
                                if (((e.requestsCount = (null != (c = e.requestsCount) ? c : 0) + 1), g === n.F.ERROR || !s || !d))
                                    return void t.setPageState(u, l.G.REJECT);
                                (e.pager
                                    ? i && ((e.pager.lastPage = d.lastPage), (e.pager.perPage = d.perPage))
                                    : (e.pager = { page: d.page, perPage: d.perPage, total: d.total, lastPage: d.lastPage }),
                                    t.setPageState(u, l.G.RESOLVE),
                                    (e.pager.page = u),
                                    i
                                        ? (e.items || (e.items = (0, r.wg)([])), e.items && e.items.push(...s))
                                        : (e.items || (e.items = (0, r.wg)(Array.from({ length: e.pager.total }, () => null))),
                                          e.items && (0, a.I)({ items: e.items, mappedRawItems: s, page: u, pageSize: e.pager.perPage })));
                            },
                            resetRejectedPagesState() {
                                var t, i, r;
                                for (let n = 0; n < (null != (i = null == (t = e.pageStates) ? void 0 : t.length) ? i : 0); n++)
                                    (null == (r = e.pageStates) ? void 0 : r[n]) === l.G.REJECT && (e.pageStates[n] = l.G.IDLE);
                            },
                            addLastRejectedPageToList(t) {
                                var i, r, n;
                                for (e.lastRejectedPagesList.push(t); (null != (r = null == (i = e.lastRejectedPagesList) ? void 0 : i.length) ? r : 0) > 5;)
                                    null == (n = e.lastRejectedPagesList) || n.shift();
                            },
                            ensurePageStatesInitialized(t) {
                                if (t <= 0) return;
                                if (!e.pageStates) {
                                    let i = Array.from({ length: t }, () => l.G.IDLE);
                                    e.pageStates = (0, r.wg)(i);
                                    return;
                                }
                                let i = e.pageStates.length;
                                if (t > i) {
                                    let r = Array.from({ length: t - i }, () => l.G.IDLE);
                                    e.pageStates.push(...r);
                                }
                            },
                            reset() {
                                ((e.initialRequestLoadingState = l.G.IDLE),
                                    (e.requestsCount = 0),
                                    (e.lastRejectedPagesList = (0, r.wg)([])),
                                    e.destroyItems([e.items, e.pager, e.pageStates]));
                            },
                        };
                        return t;
                    });
            }
        },
        87953: (e, t, i) => {
            'use strict';
            i.d(t, { GX: () => l.G, X1: () => r.X, m5: () => n.m });
            var r = i(50961),
                n = i(50891),
                l = i(10733);
            i(33898);
        },
        89009: (e, t, i) => {
            'use strict';
            function r(e) {
                let { items: t, mappedRawItems: i, page: r, pageSize: n } = e,
                    l = r * n,
                    a = 0;
                for (let e = l; e < l + n; e++) (i[a] && (t[e] = i[a]), a++);
            }
            i.d(t, { I: () => r });
        },
        89020: (e, t, i) => {
            'use strict';
            i.d(t, { V: () => c });
            var r = i(32290),
                n = i(63618),
                l = i(21732),
                a = i(79856),
                s = i(80556),
                o = i.n(s);
            let c = (e) => {
                let {
                    isActive: t,
                    className: i,
                    shimmerClassName: s,
                    round: c,
                    'aria-label': u,
                    centered: d,
                    withInfo: g = !0,
                    linesCount: _ = 3,
                    withSubcover: m,
                    radius: p = 'l',
                } = e;
                return (0, r.jsxs)('div', {
                    'aria-label': u,
                    'aria-live': t ? 'polite' : 'off',
                    'aria-busy': t,
                    className: (0, n.$)(o().root, i),
                    'data-test-id': l.S7.ENTITY_CARD_SHIMMER,
                    children: [
                        m && (0, r.jsx)(a.W, { isActive: t, className: o().subcover, radius: 'l' }),
                        (0, r.jsx)(a.W, { isActive: t, className: (0, n.$)(o().cover, s, { [o().cover_round]: c, [o().cover_withSubcover]: m }), radius: p }),
                        g &&
                            (0, r.jsx)('div', {
                                className: (0, n.$)(o().infoContainer, o()['content_linesCount_'.concat(_)], { [o().infoContainer_centered]: d }),
                                children: (0, r.jsx)(a.W, { isActive: t, className: (0, n.$)(o().title, { [o().title_withSubcover]: m }), radius: 's' }),
                            }),
                    ],
                });
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
        93043: (e, t, i) => {
            'use strict';
            i.d(t, { j: () => n });
            var r = i(60754);
            let n = r.gK.model('Pager', { page: r.gK.number, perPage: r.gK.number, total: r.gK.number, lastPage: r.gK.maybe(r.gK.boolean) });
        },
        93159: (e, t, i) => {
            'use strict';
            i.d(t, { Q: () => r });
            let r = (e) => {
                var t, i;
                return 'string' == typeof (null == e ? void 0 : e.average)
                    ? null == e
                        ? void 0
                        : e.average
                    : 'object' == typeof (null == e ? void 0 : e.average) && 'string' == typeof (null == e || null == (t = e.average) ? void 0 : t.color)
                      ? null == e || null == (i = e.average)
                          ? void 0
                          : i.color
                      : '';
            };
        },
        93841: (e, t, i) => {
            'use strict';
            i.d(t, { p: () => n });
            var r = i(60754);
            let n = r.gK.model('ModelDestroyManager').actions(() => ({
                destroyItems(e) {
                    (e.forEach((e) => {
                        e && (0, r.Yo)(e);
                    }),
                        queueMicrotask(() => {
                            e.forEach((e) => {
                                e && (0, r.zr)(e);
                            });
                        }));
                },
            }));
        },
        95303: (e, t, i) => {
            Promise.resolve().then(i.bind(i, 53126));
        },
        96218: (e, t, i) => {
            'use strict';
            i.d(t, { O: () => n, s: () => r });
            let r = 'yMusicStatePatchesUpdated',
                n = 'yMusicPageStatePatchesUpdated';
        },
        97841: (e, t, i) => {
            'use strict';
            i.d(t, { w: () => P });
            var r = i(32290),
                n = i(63618),
                l = i(96103),
                a = i(60900),
                s = i(31010),
                o = (function (e) {
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
            let c = (e, t, i) => {
                    switch (e) {
                        case o.YANDEX:
                            if ('ru' === t) return 'https://ya.ru';
                            return;
                        case o.YANDEX_PROJECTS:
                            return 'https://yandex.'.concat(t, '/all?lang=').concat(i);
                        case o.COPYRIGHT_HOLDER:
                            return 'https://yandex.'.concat(t, '/support/music/performers-and-copyright-holders/copyright.html?lang=').concat(i);
                        case o.AGREEMENT:
                            return 'https://yandex.ru/legal/music_termsofuse?lang='.concat(i);
                        case o.RECOMMENDATION_RULES:
                            return 'https://music.yandex.ru/legal/recommendations/ru/#music';
                        case o.HELP:
                            return 'https://yandex.'.concat(t, '/support/music/index.html?lang=').concat(i);
                        case o.PRIVACY_POLICY:
                            return 'https://yandex.'.concat(t, '/legal/confidential/').concat(i);
                    }
                },
                u = (e) => {
                    let { formatMessage: t, language: i, tld: r, year: n } = e;
                    return {
                        year: n,
                        yandexMusic: { id: o.YANDEX, title: t({ id: 'footer.yandex-music' }), url: c(o.YANDEX, r, i) },
                        yandexProjects: { id: o.YANDEX_PROJECTS, title: t({ id: 'footer.yandex-project' }), url: c(o.YANDEX_PROJECTS, r, i) },
                    };
                };
            var d = i(15559),
                g = i(8626);
            let _ = (e) => e(new Date(), (0, g.m)());
            var m = i(61945),
                p = i(57594),
                h = i(77088),
                v = i.n(h),
                y = i(21732),
                E = i(71926),
                S = i(61258);
            let f = (e) => {
                    let { className: t, data: i } = e;
                    return (0, r.jsxs)('div', {
                        className: (0, n.$)(v().copyrights, t),
                        'data-test-id': y.S7.FOOTER_COPYRIGHTS,
                        children: [
                            (0, r.jsxs)(E.HL, {
                                variant: 'span',
                                type: 'text',
                                size: 's',
                                weight: 'medium',
                                className: v().text,
                                children: [
                                    '\xa9 ',
                                    i.year,
                                    ' \xa0',
                                    (0, r.jsx)(S.N, {
                                        target: '_blank',
                                        href: i.yandexMusic.url,
                                        className: (0, n.$)(v().copyrightLink, v().yandexMusicLink),
                                        'data-test-id': y.S7.FOOTER_YANDEX_MUSIC_LINK,
                                        children: i.yandexMusic.title,
                                    }),
                                ],
                            }),
                            (0, r.jsx)(E.HL, { variant: 'span', type: 'text', size: 's', weight: 'medium', children: ' • ' }),
                            (0, r.jsx)(S.N, {
                                target: '_blank',
                                href: i.yandexProjects.url,
                                className: v().copyrightLink,
                                'data-test-id': y.S7.FOOTER_YANDEX_PROJECT_LINK,
                                children: i.yandexProjects.title,
                            }),
                        ],
                    });
                },
                C = (e) => {
                    let { disclaimer: t, links: i } = e;
                    return (0, r.jsxs)('div', {
                        className: v().links,
                        children: [
                            (0, r.jsx)('ol', {
                                className: v().list,
                                'data-test-id': y.S7.FOOTER_LINKS_LIST,
                                children: i.map((e) => {
                                    let { id: t, title: i, url: n } = e;
                                    return (0, r.jsx)(
                                        'li',
                                        {
                                            className: v().item,
                                            children: (0, r.jsx)(S.N, { target: '_blank', href: n, className: v().link, 'data-test-id': y.S7.FOOTER_LINK, children: i }),
                                        },
                                        t,
                                    );
                                }),
                            }),
                            (0, r.jsx)(E.HL, {
                                variant: 'span',
                                type: 'text',
                                size: 'm',
                                weight: 'medium',
                                className: v().explicitText,
                                tabIndex: 0,
                                dangerouslySetInnerHTML: { __html: t },
                                'data-test-id': y.S7.FOOTER_DISCLAIMER_TEXT,
                            }),
                        ],
                    });
                },
                T = (e) => {
                    let { className: t, data: i } = e;
                    return (0, r.jsxs)('footer', {
                        className: (0, n.$)(v().root, v().important, t),
                        'data-test-id': y.S7.FOOTER,
                        children: [(0, r.jsx)(C, { links: i.links, disclaimer: i.disclaimer }), (0, r.jsx)(f, { data: i.copyrights })],
                    });
                };
            (0, l.PA)((e) => {
                let { className: t } = e,
                    { location: i } = (0, p.g)(),
                    { formatDate: n, formatMessage: l } = (0, a.A)(),
                    { language: s } = (0, m.h)(),
                    o = u({ formatMessage: l, language: s, tld: i.tld, year: _(n) });
                return (0, r.jsx)(f, { className: t, data: o });
            });
            let P = (0, l.PA)((e) => {
                var t;
                let { className: i } = e,
                    { experiments: l, location: g, user: h } = (0, p.g)(),
                    { formatDate: y, formatMessage: E } = (0, a.A)(),
                    { isEnabled: S } = null != (t = (0, s.P)()) ? t : {},
                    { language: f } = (0, m.h)(),
                    C = ((e) => {
                        let { checkExperiment: t, formatMessage: i, isWebApplication: r, language: n, tld: l, userRegion: a, year: s } = e;
                        return {
                            links: ((e) => {
                                let { formatMessage: t, isWebApplication: i, tld: r, language: n, userRegion: l } = e,
                                    a = { id: o.COPYRIGHT_HOLDER, title: t({ id: 'footer.links-copyright-holders' }), url: c(o.COPYRIGHT_HOLDER, r, n) },
                                    s = { id: o.PRIVACY_POLICY, title: t({ id: 'footer.links-privacy-policy' }), url: c(o.PRIVACY_POLICY, r, n) },
                                    u = { id: o.AGREEMENT, title: t({ id: 'footer.links-terms' }), url: c(o.AGREEMENT, r, n) },
                                    d = { id: o.RECOMMENDATION_RULES, title: t({ id: 'footer.links-recommendation-rules' }), url: c(o.RECOMMENDATION_RULES, r, n) },
                                    g = { id: o.HELP, title: t({ id: 'footer.links-help' }), url: c(o.HELP, r, n) },
                                    _ = [a, u, d];
                                return (i && 'ru' === l && _.push(s), _.push(g), _);
                            })({ formatMessage: i, isWebApplication: r, language: n, tld: l, userRegion: a }),
                            disclaimer: (0, d.v)({
                                checkExperiment: t,
                                getDisclaimerContent: () => i({ id: 'footer.disclaimer-content' }),
                                getExplicitContent: () => i({ id: 'footer.explicit-content' }),
                                userRegion: a,
                            }),
                            copyrights: u({ formatMessage: i, language: n, tld: l, year: s }),
                        };
                    })({
                        checkExperiment: (e, t) => l.checkExperiment(e, t),
                        formatMessage: E,
                        isWebApplication: !1,
                        tld: g.tld,
                        language: f,
                        userRegion: h.account.data.userSessionRegionIso,
                        year: _(y),
                    });
                return (0, r.jsx)(T, { className: (0, n.$)({ [v().root_withOffsetForDeeplink]: S }, i), data: C });
            });
        },
    },
    (e) => {
        (e.O(
            0,
            [
                1010, 7412, 7231, 2147, 4517, 9763, 1256, 3608, 3803, 6706, 1311, 5472, 8378, 900, 2536, 2146, 3353, 2474, 8035, 347, 2732, 1410, 1417, 8506, 6050, 5806,
                7702, 6874, 9155, 861, 4668, 9740, 1175, 4499, 8816, 4220, 9562, 7358,
            ],
            () => e((e.s = 95303)),
        ),
            (_N_E = e.O()));
    },
]);
