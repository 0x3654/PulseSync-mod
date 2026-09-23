(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [4336],
    {
        1176: (e, t, n) => {
            'use strict';
            n.d(t, { r: () => r });
            let r = (0, n(55178).createContext)({ pageId: void 0, pageEntityId: void 0, displayReasonId: void 0, pageStyle: void 0, pagePlacement: void 0 });
        },
        7748: (e, t, n) => {
            'use strict';
            (n.r(t), n.d(t, { NotFound: () => f }));
            var r = n(32290),
                c = n(63618),
                l = n(96103),
                a = n(39407),
                i = n(63423),
                o = n(82586),
                s = n(46049),
                u = n(71926),
                _ = n(55178),
                p = n(17811),
                S = n(99923),
                d = n(90153),
                A = n(74416),
                m = n(62376),
                N = n(27576),
                E = n(83920),
                T = n(20472),
                I = n(32641),
                v = n(27120),
                g = n(12894),
                O = n(57594),
                L = n(55365),
                R = n.n(L);
            let f = (0, l.PA)((e) => {
                let { className: t, title: n, description: l, iconVariant: L = 'musicLogo', iconClassName: f, iconSize: y } = e,
                    { contentRef: C, setContentScrollRef: P } = (0, E.g)(),
                    b = (0, I.Z)(T.Z.main.href);
                !(function () {
                    let e = (0, A.st)(),
                        { hash: t } = (0, A.gf)(),
                        n = (0, m.U)(),
                        r = (0, _.useRef)(void 0);
                    (0, _.useEffect)(() => {
                        if (!e || !t) return;
                        r.current = (0, N.A)();
                        let c = (0, p.F)({
                            params: {
                                hash: t,
                                pageId: S.AppScreen.PageNotFoundScreen,
                                pageStyle: S.PageStyles.Fullscreen,
                                pagePlacement: S.PagePlacements.Fullscreen,
                                mainObjectType: S.DomainObjectType.NonApplicable,
                                mainObjectId: S.DomainObjectType.NonApplicable,
                                viewUuid: r.current,
                            },
                            logger: n,
                            context: 'useSendEventOnNotFoundShowedOrHidden.open',
                        });
                        return (
                            c && (0, d.w5)(e.evgenInstance, c),
                            () => {
                                let c = (0, p.F)({
                                    params: {
                                        hash: t,
                                        pageId: S.AppScreen.PageNotFoundScreen,
                                        pageStyle: S.PageStyles.Fullscreen,
                                        pagePlacement: S.PagePlacements.Fullscreen,
                                        mainObjectType: S.DomainObjectType.NonApplicable,
                                        mainObjectId: S.DomainObjectType.NonApplicable,
                                        viewUuid: r.current,
                                    },
                                    logger: n,
                                    context: 'useSendEventOnNotFoundShowedOrHidden.close',
                                });
                                c && (0, d.XB)(e.evgenInstance, c);
                            }
                        );
                    }, [e, t, n]);
                })();
                let { handleNavigateToMain: k } = (function (e) {
                    let t = (0, A.st)(),
                        { hash: n } = (0, A.gf)(),
                        r = (0, m.U)();
                    return {
                        handleNavigateToMain: (0, _.useCallback)(() => {
                            if (!t || !n) return;
                            let c = (0, p.F)({
                                params: {
                                    hash: n,
                                    pageId: S.AppScreen.PageNotFoundScreen,
                                    pageStyle: S.PageStyles.Fullscreen,
                                    pagePlacement: S.PagePlacements.Fullscreen,
                                    mainObjectType: S.DomainObjectType.NonApplicable,
                                    mainObjectId: S.DomainObjectType.NonApplicable,
                                    from: S.AppScreen.PageNotFoundScreen,
                                    to: S.AppScreen.MainScreen,
                                    entityType: S.EntityTypes.Error,
                                    entityId: S.EntityTypes.Error,
                                },
                                logger: r,
                                context: 'useSendEventOnNotFoundNavigated',
                            });
                            (c && (0, d.Mu)(t.evgenInstance, c), e());
                        }, [t, n, r, e]),
                    };
                })(b);
                return (
                    (0, v.N)(!0),
                    !(function () {
                        let { location: e } = (0, O.g)();
                        (0, _.useEffect)(
                            () => (
                                e.setNotFound(!0),
                                () => {
                                    e.setNotFound(!1);
                                }
                            ),
                            [e],
                        );
                    })(),
                    (0, r.jsxs)(s.N, {
                        className: (0, c.$)(R().root, { [R().root_desktop]: !C }, t),
                        containerClassName: R().container,
                        ref: P,
                        children: [
                            (0, r.jsx)(g.L, { withBackwardFallback: '/', className: R().navigation, withForwardControl: !1 }),
                            (0, r.jsxs)('div', {
                                className: R().content,
                                children: [
                                    (0, r.jsx)(o.I, { className: (0, c.$)(R().icon, f), variant: L, size: y }),
                                    (0, r.jsx)(u.DZ, {
                                        className: (0, c.$)(R().title, R().important),
                                        variant: 'h3',
                                        size: 'xs',
                                        children: n || (0, r.jsx)(a.A, { id: 'page-error.page-does-not-exist' }),
                                    }),
                                    (0, r.jsx)(u.HL, {
                                        className: (0, c.$)(R().text, R().important),
                                        variant: 'span',
                                        type: 'text',
                                        size: 'l',
                                        weight: 'normal',
                                        children: l || (0, r.jsx)(a.A, { id: 'page-error.page-does-not-exist-description' }),
                                    }),
                                    (0, r.jsx)(i.$, {
                                        onClick: k,
                                        className: R().button,
                                        role: 'link',
                                        color: 'secondary',
                                        size: 'l',
                                        radius: 'xxxl',
                                        children: (0, r.jsx)(u.HL, {
                                            type: 'controls',
                                            variant: 'span',
                                            size: 'm',
                                            children: (0, r.jsx)(a.A, { id: 'navigation.page-main' }),
                                        }),
                                    }),
                                ],
                            }),
                        ],
                    })
                );
            });
        },
        8868: (e, t, n) => {
            'use strict';
            n.d(t, { A: () => p });
            var r = n(55178),
                c = n(17811),
                l = n(99923),
                a = n(90153),
                i = n(74416),
                o = n(91027),
                s = n(62376),
                u = n(79374),
                _ = n(37240);
            let p = function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    { autoSend: t = !0 } = e,
                    n = (0, i.st)(),
                    p = (0, s.U)(),
                    { hash: S } = (0, i.gf)(),
                    { pageId: d } = (0, _.$)(),
                    A = (0, o.c)(function () {
                        let { deepLink: e } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                        if (
                            !n ||
                            !d ||
                            !S ||
                            !(() => {
                                for (let [e, t] of new URLSearchParams(window.location.search))
                                    if ((e.startsWith('utm_') || 'ref_id' === e) && '' !== t.trim()) return !0;
                                return !1;
                            })()
                        )
                            return;
                        let t = u.W[d];
                        if (!t) return;
                        let r = {
                                hash: S,
                                pageId: l.AppScreen.Link,
                                entityType: l.EntityTypes.Deeplink,
                                entityId: l.EntityTypes.Deeplink,
                                from: l.AppScreen.Link,
                                to: t,
                                deepLink: null != e ? e : window.location.href,
                            },
                            i = (0, c.F)({ params: r, logger: p, context: 'useSendDeeplinkNavigationEvent' });
                        i && (0, a.ID)(n.evgenInstance, i);
                    });
                return (
                    (0, r.useEffect)(() => {
                        t && A();
                    }, [t, A]),
                    (0, o.c)(function () {
                        let { deepLink: e } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                        t || A({ deepLink: e });
                    })
                );
            };
        },
        12894: (e, t, n) => {
            'use strict';
            n.d(t, { L: () => A });
            var r = n(32290),
                c = n(63618),
                l = n(96103),
                a = n(55178),
                i = n(60900),
                o = n(21732),
                s = n(91027),
                u = n(63423),
                _ = n(82586),
                p = n(21935),
                S = n(78842),
                d = n.n(S);
            let A = (0, l.PA)((e) => {
                let {
                        withBackwardControl: t = !0,
                        withForwardControl: n = !0,
                        shouldFocusOnMount: l = !0,
                        className: S,
                        withBackwardFallback: A,
                        buttonSize: m = 'xxs',
                    } = e,
                    { formatMessage: N } = (0, i.A)(),
                    { canBack: E, canForward: T, moveBack: I, moveForward: v } = (0, p.J)(A),
                    g = (0, a.useRef)(null),
                    O = (0, s.c)((e) => {
                        (e.stopPropagation(), I());
                    }),
                    L = (0, s.c)((e) => {
                        (e.stopPropagation(), v());
                    });
                return (
                    (0, a.useEffect)(() => {
                        l && g.current && E && g.current.focus();
                    }, [E]),
                    (0, r.jsxs)('div', {
                        className: (0, c.$)(d().root, S),
                        'data-test-id': o.Kq.navigation.NAVIGATION_CONTROLS,
                        children: [
                            t &&
                                (0, r.jsx)(u.$, {
                                    ref: g,
                                    'aria-label': N({ id: 'navigation.go-back' }),
                                    radius: 'round',
                                    disabled: !E,
                                    size: m,
                                    icon: (0, r.jsx)(_.I, { size: 'xxs', variant: 'arrowLeft' }),
                                    onClick: O,
                                    'data-test-id': o.Kq.navigation.NAVIGATION_BACKWARD_BUTTON,
                                }),
                            n &&
                                (0, r.jsx)(u.$, {
                                    'aria-label': N({ id: 'navigation.go-forward' }),
                                    radius: 'round',
                                    disabled: !T,
                                    size: m,
                                    icon: (0, r.jsx)(_.I, { size: 'xxs', variant: 'arrowRight' }),
                                    onClick: L,
                                    'data-test-id': o.Kq.navigation.NAVIGATION_FORWARD_BUTTON,
                                }),
                        ],
                    })
                );
            });
        },
        14336: (e, t, n) => {
            Promise.resolve().then(n.bind(n, 19132));
        },
        17811: (e, t, n) => {
            'use strict';
            function r(e) {
                let { params: t, logger: n, context: r } = e,
                    c = Object.getOwnPropertyNames(t).filter((e) => void 0 === t[e]);
                return c.length > 0 ? (n.error('Evgen parameters are not met', { parameters: c.join(', '), incomingParams: t, context: r }), null) : t;
            }
            n.d(t, { F: () => r });
        },
        19132: (e, t, n) => {
            'use strict';
            n.d(t, { PlaylistNotFoundPage: () => p });
            var r = n(32290),
                c = n(96103),
                l = n(55178),
                a = n(7748),
                i = n(48922),
                o = n(8868),
                s = n(22714),
                u = n(57594);
            let _ = (0, c.PA)(() => {
                    let { playlist: e } = (0, u.g)();
                    return (
                        (0, o.A)(),
                        (0, l.useEffect)(() => {
                            e.reset();
                        }, []),
                        (0, r.jsx)(a.NotFound, {})
                    );
                }),
                p = (0, c.PA)(() => (0, r.jsx)(s.n, { pageId: i._Q.PAGE_NOT_FOUND_SCREEN, children: (0, r.jsx)(_, {}) }));
        },
        20472: (e, t, n) => {
            'use strict';
            n.d(t, { Z: () => c });
            var r = n(68243);
            let c = {
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
        21935: (e, t, n) => {
            'use strict';
            n.d(t, { J: () => a });
            var r = n(62060),
                c = n(55178),
                l = n(83808);
            let a = (e) => {
                let t = (0, l.W)(),
                    n = (0, c.useMemo)(
                        () =>
                            (0, r.A)(() => {
                                if (e && !t.canBack) return void t.replaceState({ href: e });
                                null == t || t.back();
                            }, 200),
                        [t, e],
                    ),
                    a = (0, c.useMemo)(
                        () =>
                            (0, r.A)(() => {
                                null == t || t.forward();
                            }, 200),
                        [t],
                    );
                return { canBack: !!e || t.canBack, canForward: t.canForward, moveBack: n, moveForward: a };
            };
        },
        22714: (e, t, n) => {
            'use strict';
            n.d(t, { n: () => a });
            var r = n(32290),
                c = n(55178),
                l = n(1176);
            let a = (e) => {
                let { pageId: t, pageEntityId: n, displayReasonId: a, pageStyle: i, pagePlacement: o, children: s } = e,
                    u = (0, c.useMemo)(() => ({ pageId: t, pageEntityId: n, displayReasonId: a, pageStyle: i, pagePlacement: o }), [t, n, a, i, o]);
                return (0, r.jsx)(l.r.Provider, { value: u, children: s });
            };
        },
        27120: (e, t, n) => {
            'use strict';
            n.d(t, { N: () => l });
            var r = n(55178),
                c = n(53022);
            let l = (e) => {
                let t = (0, r.useRef)(!1),
                    n = (0, c.z)();
                (0, r.useEffect)(() => {
                    (e && (null == n || n.disable(), (t.current = !0)), !e && t.current && (null == n || n.enable(), (t.current = !1)));
                }, [e, n]);
            };
        },
        29098: (e, t, n) => {
            'use strict';
            n.d(t, { P: () => r });
            let r = (0, n(55178).createContext)(null);
        },
        32641: (e, t, n) => {
            'use strict';
            n.d(t, { Z: () => u });
            var r = n(21916),
                c = n(91027),
                l = n(68243),
                a = n(85472),
                i = n(90432),
                o = (function (e) {
                    return ((e.INTERNAL = 'internal'), (e.EXTERNAL = 'external'), (e.DEEPLINK = 'deeplink'), e);
                })({});
            let s = [a.UrlProtocol.HTTP, a.UrlProtocol.HTTPS, a.UrlProtocol.MAILTO, a.UrlProtocol.TEL, i.Lz],
                u = (e) => {
                    let t = (0, r.useRouter)(),
                        { href: n, target: u } = (0, l.u)(e);
                    return (0, c.c)((e) => {
                        let r = ((e, t, n) => {
                            let r;
                            try {
                                r = new URL(t);
                            } catch (e) {
                                return null;
                            }
                            let c = (0, a.resolveUrlByPolicy)(e, { allowedProtocols: new Set([...s, r.protocol]), baseUrl: r.href });
                            return c.isAllowed
                                ? c.url.protocol === i.Lz
                                    ? { type: o.DEEPLINK, href: e }
                                    : '_blank' !== n && ((e, t) => e.protocol === t.protocol && e.hostname === t.hostname && e.port === t.port)(c.url, r)
                                      ? { type: o.INTERNAL, href: e }
                                      : { type: o.EXTERNAL, href: e }
                                : null;
                        })(n, window.location.href, u);
                        if (!r) {
                            null == e || e.preventDefault();
                            return;
                        }
                        (null != e && e.metaKey) ||
                            (null != e && e.ctrlKey) ||
                            (null != e && e.shiftKey) ||
                            (r.type === o.EXTERNAL || r.type === o.DEEPLINK
                                ? ((e) => {
                                      let { target: t, rel: n } = (0, l.u)(e, { options: { isExternalLink: !0 } });
                                      window.open(e, t, n);
                                  })(r.href)
                                : t.push(r.href));
                    });
                };
        },
        37240: (e, t, n) => {
            'use strict';
            n.d(t, { $: () => l });
            var r = n(55178),
                c = n(1176);
            function l() {
                return (0, r.useContext)(c.r);
            }
        },
        39407: (e, t, n) => {
            'use strict';
            n.d(t, { A: () => s });
            var r = n(30782),
                c = n(55178),
                l = n(36260),
                a = n(60900);
            function i(e) {
                var t = (0, a.A)(),
                    n = t.formatMessage,
                    r = t.textComponent,
                    l = void 0 === r ? c.Fragment : r,
                    i = e.id,
                    o = e.description,
                    s = e.defaultMessage,
                    u = e.values,
                    _ = e.children,
                    p = e.tagName,
                    S = void 0 === p ? l : p,
                    d = n({ id: i, description: o, defaultMessage: s }, u, { ignoreTag: e.ignoreTag });
                return 'function' == typeof _ ? _(Array.isArray(d) ? d : [d]) : S ? c.createElement(S, null, d) : c.createElement(c.Fragment, null, d);
            }
            i.displayName = 'FormattedMessage';
            var o = c.memo(i, function (e, t) {
                var n = e.values,
                    c = (0, r.__rest)(e, ['values']),
                    a = t.values,
                    i = (0, r.__rest)(t, ['values']);
                return (0, l.bN)(a, n) && (0, l.bN)(c, i);
            });
            o.displayName = 'MemoizedFormattedMessage';
            let s = o;
        },
        48922: (e, t, n) => {
            'use strict';
            n.d(t, { _Q: () => r, fD: () => l, qG: () => a, xK: () => c });
            var r = (function (e) {
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
            let c = [
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
                l = [
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
                a = ['home', 'landing', 'non_music', 'own_collection', 'search', 'artist', 'concerts', 'concert_screen', 'album', 'playlist'];
        },
        53022: (e, t, n) => {
            'use strict';
            n.d(t, { z: () => l });
            var r = n(55178),
                c = n(29098);
            let l = () => (0, r.useContext)(c.P);
        },
        55365: (e) => {
            e.exports = {
                root: 'NotFound_root__47ZX6',
                root_desktop: 'NotFound_root_desktop___QqSb',
                container: 'NotFound_container__h1XeE',
                navigation: 'NotFound_navigation__q8rIW',
                content: 'NotFound_content__3kry_',
                icon: 'NotFound_icon___Wa9y',
                title: 'NotFound_title__akG_o',
                important: 'NotFound_important__z1LWl',
                text: 'NotFound_text__oxDZv',
                button: 'NotFound_button__jF4uH',
            };
        },
        74416: (e, t, n) => {
            'use strict';
            n.d(t, { vZ: () => m, st: () => l, gf: () => i });
            var r = n(55178);
            let c = (0, r.createContext)(null);
            function l() {
                return (0, r.useContext)(c);
            }
            let a = (0, r.createContext)({ hash: void 0 });
            function i() {
                return (0, r.useContext)(a);
            }
            var o = n(32290),
                s = n(27576);
            let u = (e) => {
                let { children: t } = e,
                    n = (0, r.useMemo)(() => ({ hash: (0, s.A)() }), []);
                return (0, o.jsx)(a.Provider, { value: n, children: t });
            };
            class _ {
                makeParams() {
                    return {};
                }
            }
            class p {
                makeParams() {
                    return {};
                }
            }
            var S = n(91945);
            class d {
                get evgenInstance() {
                    return this.evgen;
                }
                sendEvent(e, t) {
                    this.evgen.trackEvent(e, t);
                }
                constructor(e, t, n) {
                    ((0, S._)(this, 'evgen', void 0),
                        (this.evgen = {
                            trackEvent: (r, c) => {
                                let l = { ...c, ...t.getGlobalParams(), ...n.getPlatformParams() };
                                e.trackEvent(r, l);
                            },
                        }));
                }
            }
            let A = null,
                m = (e) => {
                    let { allowAnalyticsLogs: t, children: n, evgenUserParam: l, logger: a, metrika: i } = e,
                        s = (0, r.useMemo)(() => {
                            if (A) return A;
                            let e = (function (e, t, n) {
                                let r = (function (e) {
                                    let { callback: t, maxSendingItemsPerRequest: n, requestsSendingDelay: r } = e,
                                        c = [];
                                    return (
                                        !(function e() {
                                            (c.length > 0 && t(c.splice(0, n)), window.setTimeout(e, r));
                                        })(),
                                        {
                                            add(e) {
                                                c.push(e);
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
                                    trackEvent(e, c) {
                                        (n && t.log(e, c), r.add({ [e]: c }));
                                    },
                                };
                            })((e) => i.count(e, l), a, t);
                            return (A = new d(
                                e,
                                (function () {
                                    let e = new _();
                                    return { getGlobalParams: () => e };
                                })(),
                                (function () {
                                    let e = new p();
                                    return { getPlatformParams: () => e };
                                })(),
                            ));
                        }, [a, i]);
                    return (0, o.jsx)(c.Provider, { value: s, children: (0, o.jsx)(u, { children: n }) });
                };
        },
        78842: (e) => {
            e.exports = { root: 'NavigationControls_root__V2A3_' };
        },
        79374: (e, t, n) => {
            'use strict';
            n.d(t, { W: () => l });
            var r = n(99923),
                c = n(48922);
            let l = {
                [c._Q.ALBUM]: r.AppScreen.AlbumScreen,
                [c._Q.PLAYLIST]: r.AppScreen.PlaylistScreen,
                [c._Q.HOME]: r.AppScreen.MainScreen,
                [c._Q.ARTIST]: r.AppScreen.ArtistScreen,
                [c._Q.ARTIST_TRACKS]: r.AppScreen.ArtistScreen,
                [c._Q.ARTIST_SIMILAR]: r.AppScreen.ArtistScreen,
                [c._Q.ARTIST_ALBUMS]: r.AppScreen.ArtistScreen,
                [c._Q.ARTIST_DISCOGRAPHY]: r.AppScreen.ArtistScreen,
                [c._Q.ARTIST_COMPILATIONS]: r.AppScreen.ArtistScreen,
                [c._Q.ARTIST_CONCERTS]: r.AppScreen.ArtistScreen,
                [c._Q.SEARCH]: r.AppScreen.SearchScreen,
                [c._Q.OWN_COLLECTION]: r.AppScreen.CollectionLandingScreen,
                [c._Q.LANDING]: r.AppScreen.DynamicScreen,
                [c._Q.HISTORY]: r.AppScreen.MusicHistoryScreen,
                [c._Q.NON_MUSIC]: r.AppScreen.NonmusicLandingScreen,
                [c._Q.CHART]: r.AppScreen.PlaylistListScreen,
                [c._Q.PODCAST]: r.AppScreen.AlbumScreen,
                [c._Q.AUDIOBOOK]: r.AppScreen.AlbumScreen,
                [c._Q.OWN_ALBUMS]: r.AppScreen.CollectionAlbumsScreen,
                [c._Q.OWN_DISLIKES]: r.AppScreen.CollectionTrackListScreen,
                [c._Q.OWN_ARTISTS]: r.AppScreen.CollectionArtistsScreen,
                [c._Q.OWN_PLAYLISTS]: r.AppScreen.CollectionPlaylistsScreen,
                [c._Q.FAMILIAR_YOU]: r.AppScreen.TrackListScreen,
                [c._Q.ENTITIES]: r.AppScreen.ObjectsGridScreen,
                [c._Q.TRAILER]: r.AppScreen.TrailerScreen,
                [c._Q.PLAYER]: r.AppScreen.ExpandedPlayerScreen,
                [c._Q.VIDEO_PLAYER]: r.AppScreen.VideoScreen,
                [c._Q.TRACK_SCREEN]: r.AppScreen.TrackScreen,
                [c._Q.PAYWALL]: r.AppScreen.PaywallScreen,
                [c._Q.CONCERTS]: r.AppScreen.ConcertsLandingScreen,
                [c._Q.CONCERT]: r.AppScreen.ConcertScreen,
                [c._Q.CONCERT_LOCATION_SELECTOR]: r.AppScreen.ConcertLocationSelector,
                [c._Q.PAGE_NOT_FOUND_SCREEN]: r.AppScreen.PageNotFoundScreen,
                [c._Q.SLIDES_SCREEN]: r.AppScreen.SlidesScreen,
                [c._Q.PROMOLANDING_ALBUM]: r.AppScreen.PromolandingAlbumScreen,
                [c._Q.WAVE_LANDING_SCREEN]: r.AppScreen.WaveLandingScreen,
                [c._Q.FACT_SCREEN]: r.AppScreen.FactScreen,
                [c._Q.LUMEN_AWAKENING_SCREEN]: r.AppScreen.LumenAwakeningScreen,
                [c._Q.COLLECTION_VIBE_ROOMS]: r.AppScreen.MultivibeScreen,
                [c._Q.MULTIVIBE_SENDING_INVITATION_SCREEN]: r.AppScreen.MultivibeSendingInvitationScreen,
                [c._Q.MULTIVIBE_ACTION_SCREEN]: r.AppScreen.MultivibeActionScreen,
                [c._Q.MULTIVIBE_LIMIT_SCREEN]: r.AppScreen.MultivibeLimitScreen,
                [c._Q.MULTIVIBE_UNIFIED_SCREEN]: r.AppScreen.MultivibeUnifiedScreen,
            };
        },
        83808: (e, t, n) => {
            'use strict';
            n.d(t, { Q: () => c, W: () => l });
            var r = n(55178);
            let c = (0, r.createContext)({
                pushState: () => {},
                replaceState: () => {},
                forward: () => {},
                back: () => {},
                canForward: !1,
                canBack: !1,
                state: null,
                length: 0,
            });
            function l() {
                return (0, r.useContext)(c);
            }
        },
        83920: (e, t, n) => {
            'use strict';
            n.d(t, { M: () => c, g: () => l });
            var r = n(55178);
            let c = (0, r.createContext)({
                    contentRef: null,
                    defaultLayoutRef: null,
                    contentRootRef: null,
                    contentScrollRef: null,
                    sideBannerRef: null,
                    playlistStickyFiltersRef: null,
                    playlistStaticFiltersRef: null,
                    compositePlayerBarRef: null,
                    paywallRef: null,
                    setDefaultLayoutRef: () => {},
                    setContentRef: () => {},
                    setContentRootRef: () => {},
                    setSideBannerRef: () => {},
                    setContentScrollRef: () => {},
                    setPlaylistStickyFiltersRef: () => {},
                    setPlaylistStaticFiltersRef: () => {},
                    setCompositePlayerBarRef: () => {},
                    setPaywallRef: () => {},
                }),
                l = () => (0, r.useContext)(c);
        },
        90153: (e, t, n) => {
            'use strict';
            ((t.w5 = function (e, t) {
                let {
                        skeletonId: n = '',
                        mainObjectType: l = c.DomainObjectType.NonApplicable,
                        mainObjectId: a = '',
                        tabId: i = '',
                        tabPos: o = 0,
                        isTabSelectedByDefault: s = !1,
                        viewUuid: u = '',
                    } = t,
                    _ = (0, r.makeMetaParams)(1),
                    p = { ...t, skeletonId: n, mainObjectType: l, mainObjectId: a, tabId: i, tabPos: o, isTabSelectedByDefault: s, viewUuid: u, _meta: _ };
                e.trackEvent('Screen.Opened', p);
            }),
                (t.Fn = function (e, t) {
                    let {
                            pageStyle: n = c.PageStyles.Fullscreen,
                            pagePlacement: l = c.PagePlacements.Fullscreen,
                            skeletonId: a = '',
                            mainObjectType: i = c.DomainObjectType.NonApplicable,
                            mainObjectId: o = '',
                            tabId: s = '',
                            tabPos: u = 0,
                            isTabSelectedByDefault: _ = !1,
                            viewUuid: p = '',
                        } = t,
                        S = (0, r.makeMetaParams)(3),
                        d = {
                            ...t,
                            pageStyle: n,
                            pagePlacement: l,
                            skeletonId: a,
                            mainObjectType: i,
                            mainObjectId: o,
                            tabId: s,
                            tabPos: u,
                            isTabSelectedByDefault: _,
                            viewUuid: p,
                            _meta: S,
                        };
                    e.trackEvent('Screen.Opened', d);
                }),
                (t.XB = function (e, t) {
                    let {
                            skeletonId: n = '',
                            mainObjectType: l = c.DomainObjectType.NonApplicable,
                            mainObjectId: a = '',
                            tabId: i = '',
                            tabPos: o = 0,
                            isTabSelectedByDefault: s = !1,
                        } = t,
                        u = (0, r.makeMetaParams)(1),
                        _ = { ...t, skeletonId: n, mainObjectType: l, mainObjectId: a, tabId: i, tabPos: o, isTabSelectedByDefault: s, _meta: u };
                    e.trackEvent('Screen.Closed', _);
                }),
                (t.Ig = function (e, t) {
                    let {
                            pageStyle: n = c.PageStyles.Fullscreen,
                            pagePlacement: l = c.PagePlacements.Fullscreen,
                            skeletonId: a = '',
                            mainObjectType: i = c.DomainObjectType.NonApplicable,
                            mainObjectId: o = '',
                            tabId: s = '',
                            tabPos: u = 0,
                            isTabSelectedByDefault: _ = !1,
                        } = t,
                        p = (0, r.makeMetaParams)(3),
                        S = {
                            ...t,
                            pageStyle: n,
                            pagePlacement: l,
                            skeletonId: a,
                            mainObjectType: i,
                            mainObjectId: o,
                            tabId: s,
                            tabPos: u,
                            isTabSelectedByDefault: _,
                            _meta: p,
                        };
                    e.trackEvent('Screen.Closed', S);
                }),
                (t.PO = function (e, t) {
                    let {
                            pageStyle: n = c.PageStyles.Fullscreen,
                            pagePlacement: l = c.PagePlacements.Fullscreen,
                            skeletonId: a = '',
                            mainObjectType: i = c.DomainObjectType.NonApplicable,
                            mainObjectId: o = '',
                            tabId: s = '',
                            tabPos: u = 0,
                            isTabSelectedByDefault: _ = !1,
                            viewUuid: p = '',
                        } = t,
                        S = (0, r.makeMetaParams)(4),
                        d = {
                            ...t,
                            pageStyle: n,
                            pagePlacement: l,
                            skeletonId: a,
                            mainObjectType: i,
                            mainObjectId: o,
                            tabId: s,
                            tabPos: u,
                            isTabSelectedByDefault: _,
                            viewUuid: p,
                            _meta: S,
                        };
                    e.trackEvent('Screen.Closed', d);
                }),
                (t.e7 = function (e, t) {
                    let {
                            skeletonId: n = '',
                            mainObjectType: l = c.DomainObjectType.NonApplicable,
                            mainObjectId: a = '',
                            tabId: i = '',
                            tabPos: o = 0,
                            isTabSelectedByDefault: s = !1,
                        } = t,
                        u = (0, r.makeMetaParams)(1),
                        _ = { ...t, skeletonId: n, mainObjectType: l, mainObjectId: a, tabId: i, tabPos: o, isTabSelectedByDefault: s, _meta: u };
                    e.trackEvent('Screen.Started', _);
                }),
                (t.Mu = function (e, t) {
                    let {
                            skeletonId: n = '',
                            mainObjectType: l = c.DomainObjectType.NonApplicable,
                            mainObjectId: a = '',
                            tabId: i = '',
                            tabPos: o = 0,
                            isTabSelectedByDefault: s = !1,
                        } = t,
                        u = (0, r.makeMetaParams)(1),
                        _ = { ...t, skeletonId: n, mainObjectType: l, mainObjectId: a, tabId: i, tabPos: o, isTabSelectedByDefault: s, _meta: u };
                    e.trackEvent('Screen.Navigated', _);
                }),
                (t.ID = function (e, t) {
                    let {
                            pageStyle: n = c.PageStyles.Fullscreen,
                            pagePlacement: l = c.PagePlacements.Fullscreen,
                            skeletonId: a = '',
                            mainObjectType: i = c.DomainObjectType.NonApplicable,
                            mainObjectId: o = '',
                            tabId: s = '',
                            tabPos: u = 0,
                            isTabSelectedByDefault: _ = !1,
                            deepLink: p = '',
                        } = t,
                        S = (0, r.makeMetaParams)(4),
                        d = {
                            ...t,
                            pageStyle: n,
                            pagePlacement: l,
                            skeletonId: a,
                            mainObjectType: i,
                            mainObjectId: o,
                            tabId: s,
                            tabPos: u,
                            isTabSelectedByDefault: _,
                            deepLink: p,
                            _meta: S,
                        };
                    e.trackEvent('Screen.Navigated', d);
                }),
                (t.bv = function (e, t) {
                    let {
                            skeletonId: n = '',
                            mainObjectType: l = c.DomainObjectType.NonApplicable,
                            mainObjectId: a = '',
                            tabId: i = '',
                            tabPos: o = 0,
                            isTabSelectedByDefault: s = !1,
                        } = t,
                        u = (0, r.makeMetaParams)(1),
                        _ = { ...t, skeletonId: n, mainObjectType: l, mainObjectId: a, tabId: i, tabPos: o, isTabSelectedByDefault: s, _meta: u };
                    e.trackEvent('Screen.ActionPerformed', _);
                }),
                (t.z5 = function (e, t) {
                    let {
                            pageStyle: n = c.PageStyles.Fullscreen,
                            pagePlacement: l = c.PagePlacements.Fullscreen,
                            skeletonId: a = '',
                            mainObjectType: i = c.DomainObjectType.NonApplicable,
                            mainObjectId: o = '',
                        } = t,
                        s = (0, r.makeMetaParams)(1),
                        u = { ...t, pageStyle: n, pagePlacement: l, skeletonId: a, mainObjectType: i, mainObjectId: o, _meta: s };
                    e.trackEvent('Screen.ErrorRaised', u);
                }));
            let r = n(92871),
                c = n(99923);
        },
        90432: (e, t, n) => {
            'use strict';
            n.d(t, { Lz: () => r, ov: () => c });
            let r = ''.concat('yandexmusic', ':'),
                c = ''.concat(r, '//');
        },
        92871: (e, t) => {
            'use strict';
            var n;
            (Object.defineProperty(t, '__esModule', { value: !0 }),
                (t.MiniappConfig = void 0),
                (t.makeMetaParams = function (e) {
                    return { event: { version: e } };
                }),
                (t.createEvgenAnalytics = function (e, t, n) {
                    return {
                        trackEvent: (r, c) => {
                            let l = { ...c, ...t.getGlobalParams(), ...n.getPlatformParams() };
                            e.trackEvent(r, l);
                        },
                    };
                }),
                !(function (e) {
                    ((e.Music = 'music'), (e.NotApplicable = 'not_applicable'));
                })(n || (t.MiniappConfig = n = {})));
        },
    },
]);
