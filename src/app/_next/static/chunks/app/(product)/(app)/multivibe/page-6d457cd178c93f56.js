(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [8764],
    {
        1204: (e, t, i) => {
            'use strict';
            i.d(t, { v: () => s });
            var s = (function (e) {
                return ((e.PLAY_VIBE = 'play-vibe'), e);
            })({});
        },
        3377: (e, t, i) => {
            'use strict';
            i.d(t, { WithAuth: () => p });
            var s = i(32290),
                o = i(96103),
                r = i(21916),
                n = i(63618),
                l = i(39407),
                a = i(71926),
                c = i(94218),
                u = i(55556),
                d = i.n(u);
            let _ = (0, o.PA)(() =>
                (0, s.jsxs)('div', {
                    className: d().root,
                    children: [
                        (0, s.jsx)(a.DZ, {
                            className: (0, n.$)(d().title, d().important),
                            variant: 'h3',
                            size: 'xs',
                            children: (0, s.jsx)(l.A, { id: 'authorization.enter-title' }),
                        }),
                        (0, s.jsx)(a.HL, {
                            className: (0, n.$)(d().text, d().important),
                            variant: 'span',
                            type: 'text',
                            size: 'l',
                            weight: 'normal',
                            children: (0, s.jsx)(l.A, { id: 'authorization.enter-text' }),
                        }),
                        (0, s.jsx)(c.H, { size: 'l', className: d().button }),
                    ],
                }),
            );
            var E = i(20472),
                m = i(57594);
            let p = (0, o.PA)((e) => {
                let { children: t, withRedirectToMainPage: i } = e,
                    { user: o } = (0, m.g)();
                return o.isAuthorized ? t : (i && (0, r.redirect)(E.Z.main.href), (0, s.jsx)(_, {}));
            });
        },
        3961: (e, t, i) => {
            'use strict';
            var s;
            (i.d(t, { z: () => s }),
                (function (e) {
                    ((e.ROOM_DUPLICATION = 'ROOM_DUPLICATION'), (e.ROOM_NOT_FOUND = 'ROOM_NOT_FOUND'), (e.ROOM_LIMIT_EXCEEDED = 'ROOM_LIMIT_EXCEEDED'));
                })(s || (s = {})));
        },
        9634: (e, t, i) => {
            'use strict';
            i.d(t, { MainSuspenseLoader: () => l });
            var s = i(32290),
                o = i(82586),
                r = i(82542),
                n = i.n(r);
            let l = (e) => {
                let { style: t } = e,
                    i = {
                        display: 'flex',
                        position: 'fixed',
                        insetBlockStart: 0,
                        insetInlineEnd: 0,
                        insetBlockEnd: 0,
                        insetInlineStart: 0,
                        zIndex: 'var(--ym-z-index-loader)',
                        alignItems: 'center',
                        justifyContent: 'center',
                        overflow: 'hidden',
                        background: 'var(--ym-background-color-primary-enabled-basic)',
                        ...t,
                    };
                return (0, s.jsx)('div', {
                    style: i,
                    children: (0, s.jsx)(o.I, {
                        variant: 'musicLogo',
                        style: { width: '100%', maxWidth: '100px', color: 'var(--ym-logo-color-primary-variant)' },
                        className: n().icon,
                    }),
                });
            };
        },
        10733: (e, t, i) => {
            'use strict';
            i.d(t, { G: () => r });
            var s = i(91945),
                o = i(50891);
            class r extends o.m {
                constructor(e, t) {
                    (super(e, { code: 'E_HTTP_CLIENT_NON_2XX_3XX_RESPONSE', cause: t.cause }),
                        (0, s._)(this, 'name', 'HttpErrorException'),
                        (0, s._)(this, 'statusCode', void 0),
                        (this.statusCode = t.statusCode),
                        Object.setPrototypeOf(this, r.prototype));
                }
            }
        },
        15258: (e, t, i) => {
            'use strict';
            i.d(t, { WithWebNextWaveForTwo: () => l });
            var s = i(96103),
                o = i(21916),
                r = i(20472),
                n = i(57594);
            let l = (0, s.PA)((e) => {
                let { children: t } = e,
                    { multivibe: i } = (0, n.g)();
                return (i.isEnabled || (0, o.redirect)(r.Z.main.href), t);
            });
        },
        20472: (e, t, i) => {
            'use strict';
            i.d(t, { Z: () => o });
            var s = i(68243);
            let o = {
                main: (0, s.u)('/'),
                chart: (0, s.u)('/chart'),
                chartPodcasts: (0, s.u)('/chart/podcasts'),
                collection: (0, s.u)('/collection'),
                collectionAlbums: (0, s.u)('/collection/albums'),
                collectionArtists: (0, s.u)('/collection/artists'),
                collectionClips: (0, s.u)('/collection/clips'),
                collectionDislikes: (0, s.u)('/collection/dislikes'),
                collectionKids: (0, s.u)('/collection/kids'),
                collectionKidsAlbums: (0, s.u)('/collection/kids/albums'),
                collectionKidsPlaylists: (0, s.u)('/collection/kids/playlists'),
                collectionKidsTracks: (0, s.u)('/collection/kids/tracks'),
                collectionNonMusic: (0, s.u)('/collection/non-music'),
                collectionNonMusicLiked: (0, s.u)('/collection/non-music/liked'),
                collectionVibeRooms: (0, s.u)('/collection/multivibes'),
                collectionPlaylists: (0, s.u)('/collection/playlists'),
                collectionPlaylistsCreated: (0, s.u)('/collection/playlists/created'),
                collectionPlaylistsLiked: (0, s.u)('/collection/playlists/liked'),
                collectionShelf: (0, s.u)('/collection/shelf'),
                collectionShelfLiked: (0, s.u)('/collection/shelf/liked'),
                collectionShelfNewEpisodes: (0, s.u)('/collection/shelf/new-episodes'),
                collectionShelfRecentlyPlayed: (0, s.u)('/collection/shelf/recently-played'),
                concerts: (0, s.u)('/concerts'),
                kids: (0, s.u)('/kids'),
                mixes: (0, s.u)('/mixes'),
                musicHistory: (0, s.u)('/music-history'),
                muzmarket: (0, s.u)('/muzmarket'),
                mymusic: (0, s.u)('/mymusic'),
                mymusicDownloadsTracks: (0, s.u)('/mymusic/downloads/tracks'),
                multivibe: (0, s.u)('/multivibe'),
                nonMusic: (0, s.u)('/non-music'),
                pay: (0, s.u)('/pay'),
                userSlides: (0, s.u)('/slides/user'),
                search: (0, s.u)('/search'),
                searchHistory: (0, s.u)('/search/history'),
                settings: (0, s.u)('/settings'),
                video: (0, s.u)('/video'),
            };
        },
        33898: (e, t, i) => {
            'use strict';
            var s;
            (i.d(t, { Z: () => s }),
                (function (e) {
                    ((e.METHOD_NOT_SUPPORTED = 'E_BEACON_METHOD_NOT_SUPPORTED'),
                        (e.NOT_AVAILABLE = 'E_BEACON_NOT_AVAILABLE'),
                        (e.QUEUE_FAILED = 'E_BEACON_QUEUE_FAILED'),
                        (e.NO_RESPONSE_DATA = 'E_BEACON_NO_RESPONSE_DATA'),
                        (e.RETRY_EXHAUSTED = 'E_BEACON_RETRY_EXHAUSTED'));
                })(s || (s = {})));
        },
        42464: (e, t, i) => {
            'use strict';
            i.d(t, { N: () => s });
            let s = (e) => 'object' == typeof e && null !== e && 'request' in e && null !== e.request;
        },
        50891: (e, t, i) => {
            'use strict';
            i.d(t, { m: () => r });
            var s = i(91945),
                o = i(25090);
            class r extends o.t {
                constructor(e = 'Http Client error', { code: t = 'E_HTTP_CLIENT', ...i } = {}) {
                    (super(e, { code: t, ...i }), (0, s._)(this, 'name', 'HttpException'), Object.setPrototypeOf(this, r.prototype));
                }
            }
        },
        50961: (e, t, i) => {
            'use strict';
            var s;
            (i.d(t, { X: () => s }),
                (function (e) {
                    ((e[(e.NOT_MODIFIED = 304)] = 'NOT_MODIFIED'),
                        (e[(e.NOT_FOUND = 404)] = 'NOT_FOUND'),
                        (e[(e.BAD_REQUEST = 400)] = 'BAD_REQUEST'),
                        (e[(e.REQUEST_TIMEOUT = 408)] = 'REQUEST_TIMEOUT'),
                        (e[(e.PRECONDITION_FAILED = 412)] = 'PRECONDITION_FAILED'),
                        (e[(e.TEAPOT = 418)] = 'TEAPOT'));
                })(s || (s = {})));
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
        57594: (e, t, i) => {
            'use strict';
            i.d(t, { P: () => r, g: () => n });
            var s = i(55178),
                o = i(25090);
            let r = (0, s.createContext)(null);
            function n() {
                let e = (0, s.useContext)(r);
                if (null === e) throw new o.t('Store cannot be null, please add a context provider', { code: 'E_CONTEXT_STORE_NULL' });
                return e;
            }
        },
        57624: (e, t, i) => {
            Promise.resolve().then(i.bind(i, 92153));
        },
        78648: (e, t, i) => {
            'use strict';
            i.d(t, { C8: () => r, UC: () => n, dM: () => l, uV: () => a });
            var s = i(87953),
                o = i(42464);
            let r = (e) => {
                    if (void 0 === e || '' === e) return 'missing';
                    let t = Number(e);
                    return !Number.isFinite(t) || t < 0 ? 'invalid' : t < 86400 ? 'lt-1d' : t <= 2592e3 ? '1-30d' : 'gt-30d';
                },
                n = (e) => (e.uid ? 'authorized' : 'no-uid'),
                l = (e) => {
                    if (!(e instanceof s.m5) || !(0, o.N)(e.cause)) return 'unexpected';
                    let t = ((e) => {
                        if (!(0, o.N)(e.cause)) return;
                        let t = e.cause.response;
                        if ('object' == typeof t && null !== t) {
                            if ('statusCode' in t && 'number' == typeof t.statusCode) return t.statusCode;
                            if ('status' in t && 'number' == typeof t.status) return t.status;
                        }
                    })(e);
                    return void 0 === t ? 'transport' : 401 === t ? '401' : t >= 400 && t < 500 ? '4xx' : t >= 500 && t < 600 ? '5xx' : 'unexpected';
                },
                a = (e) => {
                    try {
                        var t;
                        null == (t = window.musicDesktop) || t.authorization.reportDiagnostic(e);
                    } catch (e) {}
                };
        },
        79473: (e, t, i) => {
            'use strict';
            i.d(t, { S: () => l });
            var s = i(21916),
                o = i(55178),
                r = i(20472),
                n = i(57594);
            let l = () => {
                let e = (0, s.useRouter)(),
                    { user: t, paywall: i, multivibe: l } = (0, n.g)(),
                    [a, c] = (0, o.useState)(!1),
                    u = !l.isEnabled,
                    d = t.hasPlus,
                    _ = i.modal.isOpened,
                    E = !d && a && !_,
                    m = a && _;
                return (
                    (0, o.useEffect)(() => {
                        if (u || E) return void e.replace(r.Z.main.href);
                        a || d || _ || (i.openModal(), c(!0));
                    }, [d, u, _, a, i, e, E]),
                    { hasPlus: d, isPaywallBlocking: m }
                );
            };
        },
        82542: (e) => {
            e.exports = {
                icon: 'MainSuspenseLoader_icon__MceTD',
                'animate-pop': 'MainSuspenseLoader_animate-pop__vkpff',
                heartbeat: 'MainSuspenseLoader_heartbeat__6RDpM',
            };
        },
        87953: (e, t, i) => {
            'use strict';
            i.d(t, { GX: () => r.G, X1: () => s.X, m5: () => o.m });
            var s = i(50961),
                o = i(50891),
                r = i(10733);
            i(33898);
        },
        92153: (e, t, i) => {
            'use strict';
            (i.r(t), i.d(t, { default: () => h }));
            var s = i(32290),
                o = i(21916),
                r = i(3377),
                n = i(15258),
                l = i(96103),
                a = i(55178),
                c = i(3961),
                u = i(91027),
                d = i(79473),
                _ = i(20472),
                E = i(57594),
                m = i(1204),
                p = i(97201),
                O = i(9634);
            let T = (0, l.PA)((e) => {
                    let { roomId: t = null } = e,
                        i = (0, o.useRouter)(),
                        { multivibe: r } = (0, E.g)(),
                        { hasPlus: n, isPaywallBlocking: l } = (0, d.S)(),
                        [T, h] = (0, a.useState)(!1),
                        N = (0, u.c)(async (e) => {
                            var t;
                            if ((await r.getRoomById({ roomId: e }), r.isGetRoomByIdRejected && r.errorName !== c.z.ROOM_NOT_FOUND)) {
                                (h(!0), r.resetErrorName());
                                return;
                            }
                            let s = r.invitationRoom;
                            if ((null == s ? void 0 : s.isEnabled) && (null == (t = s.wave) ? void 0 : t.seedsId)) {
                                let e = new URLSearchParams();
                                (e.set(p.K.DEEPLINK, m.v.PLAY_VIBE), e.set(p.K.SEEDS, s.wave.seedsId), i.replace(''.concat(_.Z.main.href, '?').concat(e.toString())));
                                return;
                            }
                            (r.inviteModal.open(), i.replace(_.Z.main.href));
                        });
                    return ((0, a.useEffect)(() => {
                        if (n) {
                            if (!t) {
                                (r.promoModal.open(), i.replace(_.Z.main.href));
                                return;
                            }
                            N(t);
                        }
                    }, [N, n, r.promoModal, t, i]),
                    T && (0, o.notFound)(),
                    l)
                        ? null
                        : (0, s.jsx)(O.MainSuspenseLoader, {});
                }),
                h = () => {
                    let e = (0, o.useSearchParams)().get('roomId');
                    return (0, s.jsx)(n.WithWebNextWaveForTwo, {
                        children: (0, s.jsx)(r.WithAuth, { withRedirectToMainPage: !1, children: (0, s.jsx)(T, { roomId: e }) }),
                    });
                };
        },
        94218: (e, t, i) => {
            'use strict';
            i.d(t, { H: () => E });
            var s = i(32290),
                o = i(21916),
                r = i(39407),
                n = i(21732),
                l = i(91027),
                a = i(63423),
                c = i(71926),
                u = i(78648),
                d = i(70204),
                _ = i(34186);
            let E = (e) => {
                let { size: t = 'm', variant: i = 'default', color: E = 'primary', withRipple: m = !0, buttonText: p, isBlock: O, key: T, className: h } = e,
                    N = (0, o.useRouter)(),
                    v = (0, _.N)().get(d.QG),
                    A = (0, l.c)(() => {
                        v.authorizationUrl && ((0, u.uV)({ stage: 'attempt-start', trigger: 'user' }), N.push(v.authorizationUrl));
                    });
                return (0, s.jsx)(
                    a.$,
                    {
                        onClick: A,
                        className: h,
                        isBlock: O,
                        color: E,
                        variant: i,
                        size: t,
                        radius: 'xxxl',
                        withRipple: m,
                        'data-test-id': n.S7.UNAUTHORIZED_BUTTON,
                        children: p || (0, s.jsx)(c.HL, { variant: 'div', size: 'l', lineClamp: 1, children: (0, s.jsx)(r.A, { id: 'authorization.enter-button' }) }),
                    },
                    T,
                );
            };
        },
        97201: (e, t, i) => {
            'use strict';
            i.d(t, { K: () => s });
            var s = (function (e) {
                return (
                    (e.TAB = 'tab'),
                    (e.ACTIVE_TAB = 'activeTab'),
                    (e.BLOCK = 'block'),
                    (e.IDS = 'ids'),
                    (e.ACTIVE_INDEX = 'activeIndex'),
                    (e.SORT = 'sort'),
                    (e.OPEN_TRAILER = 'openTrailer'),
                    (e.DEEPLINK = 'deeplink'),
                    (e.SEEDS = 'seeds'),
                    (e.STATION_ID = 'stationId'),
                    (e.OPEN_PLAYER = 'openPlayer'),
                    (e.SCREEN = 'screen'),
                    (e.CLID = 'clid'),
                    (e.UTM_SOURCE = 'utm_source'),
                    (e.YCLID = 'yclid'),
                    (e.UTM_CAMPAIGN = 'utm_campaign'),
                    (e.UTM_MEDIUM = 'utm_medium'),
                    (e.REF_ID = 'ref_id'),
                    (e.LUMEN_AWAKE_PARAM = 'shouldAwakeLumen'),
                    (e.BEST_PLAY = 'bestPlay'),
                    (e.TEXT = 'text'),
                    e
                );
            })({});
        },
    },
    (e) => {
        (e.O(0, [7412, 1256, 6706, 5472, 900, 3480, 8506, 6050, 5806, 4220, 9562, 7358], () => e((e.s = 57624))), (_N_E = e.O()));
    },
]);
