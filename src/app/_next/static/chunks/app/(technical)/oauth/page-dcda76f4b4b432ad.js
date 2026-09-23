(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [2975],
    {
        9634: (e, t, r) => {
            'use strict';
            r.d(t, { MainSuspenseLoader: () => i });
            var n = r(32290),
                o = r(82586),
                s = r(82542),
                a = r.n(s);
            let i = (e) => {
                let { style: t } = e,
                    r = {
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
                return (0, n.jsx)('div', {
                    style: r,
                    children: (0, n.jsx)(o.I, {
                        variant: 'musicLogo',
                        style: { width: '100%', maxWidth: '100px', color: 'var(--ym-logo-color-primary-variant)' },
                        className: a().icon,
                    }),
                });
            };
        },
        10733: (e, t, r) => {
            'use strict';
            r.d(t, { G: () => s });
            var n = r(91945),
                o = r(50891);
            class s extends o.m {
                constructor(e, t) {
                    (super(e, { code: 'E_HTTP_CLIENT_NON_2XX_3XX_RESPONSE', cause: t.cause }),
                        (0, n._)(this, 'name', 'HttpErrorException'),
                        (0, n._)(this, 'statusCode', void 0),
                        (this.statusCode = t.statusCode),
                        Object.setPrototypeOf(this, s.prototype));
                }
            }
        },
        19379: (e, t, r) => {
            'use strict';
            r.d(t, { c: () => o });
            var n = r(99029),
                o = (function (e) {
                    return (
                        (e.Theme = 'theme'),
                        (e.AllowAnalyticsLogs = 'AllowAnalyticsLogs'),
                        (e.NavbarCollapsed = 'navbarCollapsed'),
                        (e.SessionHistoryState = 'sessionHistoryState'),
                        (e.SessionId = 'Session_id'),
                        (e.YmPlayerRepeatMode = 'ymPlayerRepeatMode'),
                        (e.YmPlayerVolume = 'ymPlayerVolume'),
                        (e.YmPlayerPrevVolume = 'ymPlayerPrevVolume'),
                        (e.YmPlayerShuffle = 'ymPlayerShuffle'),
                        (e.YmPlayerQuality = 'ymPlayerQuality'),
                        (e.YmUid = 'ymUid'),
                        (e.YandexLogin = 'yandex_login'),
                        (e.YandexUid = 'yandexuid'),
                        (e.Oauth = 'oauth'),
                        (e.OauthState = 'oauthState'),
                        (e.ArtistDonationButtonOnbordingShowed = 'ArtistDonationButtonOnbordingShowed'),
                        (e.TrailerButtonOnbordingShowed = 'TrailerButtonOnbordingShowed'),
                        (e.ConcertsTabOnboardingShowed = 'ConcertsTabOnboardingShowed'),
                        (e[(e.SavedUserLanguage = n.s)] = 'SavedUserLanguage'),
                        (e.ExEx = 'ExEx'),
                        (e.EqualizerConfig = 'EqualizerConfig'),
                        (e.EnableMetricsPluginDebugMode = 'EnableMetricsPluginDebugMode'),
                        (e.EnableYnisonMetricsDebugMode = 'EnableYnisonMetricsDebugMode'),
                        (e.OverwrittenExperiments = 'overwrittenExperiments'),
                        (e.Offer = 'offer'),
                        (e.OfflineMode = 'offlineMode'),
                        (e.NavbarDownloadBarIsHidden = 'navbarDownloadBarIsHidden'),
                        (e.OfflineDegradation = 'offlineDegradation'),
                        (e.DesktopPaywall = 'desktopPaywall'),
                        (e.LiteVersionMode = 'liteVersionMode'),
                        (e.ForceNextWeb = 'force_next_web'),
                        (e.PreventNextWeb = 'prevent_next_web'),
                        (e.DownloadMobileApp = 'downloadMobileApp'),
                        (e.HideDeeplinkAndOnelink = 'hideDeeplinkAndOnelink'),
                        (e.YnisonDeviceId = 'ynisonDeviceId'),
                        (e.CrossFadeMode = 'crossFadeMode'),
                        (e.CustomPlayerThumbConfig = 'CustomPlayerThumbConfig'),
                        (e.BuySubscriptionParams = 'buySubscriptionParams'),
                        (e.EnableCrossfadeDebugMode = 'EnableCrossfadeDebugMode'),
                        (e.EnableBurstDebounceDebugMode = 'EnableBurstDebounceDebugMode'),
                        (e.ConcertLocation = 'concertLocation'),
                        e
                    );
                })({});
        },
        24865: (e, t, r) => {
            'use strict';
            r.d(t, { OAuthPage: () => m });
            var n = r(32290),
                o = r(96103),
                s = r(21916),
                a = r(33265),
                i = r(55178),
                l = r(85472),
                u = r(25090),
                d = r(78648),
                c = r(70204),
                E = r(34186),
                _ = r(57594),
                p = r(19379),
                b = r(9634);
            let O = (e) => (
                    e.startsWith('#') && (e = e.slice(1)),
                    e.split('&').reduce((e, t) => {
                        let [r = '', n = ''] = t.split('=');
                        return ((e[r] = n), e);
                    }, {})
                ),
                m = (0, o.PA)(() => {
                    let e = (0, E.N)(),
                        t = e.get(c.QG),
                        r = e.get(c.Zf),
                        o = e.get(c.oo),
                        m = (0, s.useSearchParams)(),
                        { location: f } = (0, _.g)(),
                        g = m.get('redirectUri') || '',
                        h = ''.concat(f.origin, '/').concat(g),
                        T = (0, a.A)(h);
                    return (
                        (0, i.useEffect)(() => {
                            o.remove(p.c.YmUid);
                            let e = window.location.hash;
                            ((0, d.uV)(
                                ((e) => {
                                    if (!e) return { stage: 'oauth-callback', result: 'missing', state: 'missing', ttl: 'missing' };
                                    try {
                                        let t = O(e),
                                            r = t.state ? 'present' : 'missing',
                                            n = (0, d.C8)(t.expires_in);
                                        if (t.error) return { stage: 'oauth-callback', result: 'error', state: r, ttl: n };
                                        if (t.expires_in && t.access_token && t.state) return { stage: 'oauth-callback', result: 'token', state: r, ttl: n };
                                        return { stage: 'oauth-callback', result: 'malformed', state: r, ttl: n };
                                    } catch (e) {
                                        return { stage: 'oauth-callback', result: 'malformed', state: 'missing', ttl: 'missing' };
                                    }
                                })(e),
                            ),
                                (window.location.hash = ''));
                            try {
                                if (e.length) {
                                    let r = O(e);
                                    if (r.expires_in && r.access_token && r.state) {
                                        var n;
                                        null == (n = t.setToken) || n.call(t, { expiresIn: parseInt(r.expires_in, 10), token: r.access_token, state: r.state });
                                    } else throw new u.t('No OAuth-token in URL returned by OAuth-service', { code: 'E_OAUTH_PAGE_NO_TOKEN' });
                                }
                            } catch (t) {
                                let e = new u.t('Error on OAuth page', { code: 'E_OAUTH_PAGE', cause: (0, l.createObjectFromError)(t) });
                                r.error(e);
                            }
                            (0, s.redirect)(T);
                        }, [T, t, r, e, o]),
                        (0, n.jsx)(b.MainSuspenseLoader, {})
                    );
                });
        },
        33898: (e, t, r) => {
            'use strict';
            var n;
            (r.d(t, { Z: () => n }),
                (function (e) {
                    ((e.METHOD_NOT_SUPPORTED = 'E_BEACON_METHOD_NOT_SUPPORTED'),
                        (e.NOT_AVAILABLE = 'E_BEACON_NOT_AVAILABLE'),
                        (e.QUEUE_FAILED = 'E_BEACON_QUEUE_FAILED'),
                        (e.NO_RESPONSE_DATA = 'E_BEACON_NO_RESPONSE_DATA'),
                        (e.RETRY_EXHAUSTED = 'E_BEACON_RETRY_EXHAUSTED'));
                })(n || (n = {})));
        },
        42464: (e, t, r) => {
            'use strict';
            r.d(t, { N: () => n });
            let n = (e) => 'object' == typeof e && null !== e && 'request' in e && null !== e.request;
        },
        42636: (e, t, r) => {
            Promise.resolve().then(r.bind(r, 24865));
        },
        50891: (e, t, r) => {
            'use strict';
            r.d(t, { m: () => s });
            var n = r(91945),
                o = r(25090);
            class s extends o.t {
                constructor(e = 'Http Client error', { code: t = 'E_HTTP_CLIENT', ...r } = {}) {
                    (super(e, { code: t, ...r }), (0, n._)(this, 'name', 'HttpException'), Object.setPrototypeOf(this, s.prototype));
                }
            }
        },
        50961: (e, t, r) => {
            'use strict';
            var n;
            (r.d(t, { X: () => n }),
                (function (e) {
                    ((e[(e.NOT_MODIFIED = 304)] = 'NOT_MODIFIED'),
                        (e[(e.NOT_FOUND = 404)] = 'NOT_FOUND'),
                        (e[(e.BAD_REQUEST = 400)] = 'BAD_REQUEST'),
                        (e[(e.REQUEST_TIMEOUT = 408)] = 'REQUEST_TIMEOUT'),
                        (e[(e.PRECONDITION_FAILED = 412)] = 'PRECONDITION_FAILED'),
                        (e[(e.TEAPOT = 418)] = 'TEAPOT'));
                })(n || (n = {})));
        },
        57594: (e, t, r) => {
            'use strict';
            r.d(t, { P: () => s, g: () => a });
            var n = r(55178),
                o = r(25090);
            let s = (0, n.createContext)(null);
            function a() {
                let e = (0, n.useContext)(s);
                if (null === e) throw new o.t('Store cannot be null, please add a context provider', { code: 'E_CONTEXT_STORE_NULL' });
                return e;
            }
        },
        78648: (e, t, r) => {
            'use strict';
            r.d(t, { C8: () => s, UC: () => a, dM: () => i, uV: () => l });
            var n = r(87953),
                o = r(42464);
            let s = (e) => {
                    if (void 0 === e || '' === e) return 'missing';
                    let t = Number(e);
                    return !Number.isFinite(t) || t < 0 ? 'invalid' : t < 86400 ? 'lt-1d' : t <= 2592e3 ? '1-30d' : 'gt-30d';
                },
                a = (e) => (e.uid ? 'authorized' : 'no-uid'),
                i = (e) => {
                    if (!(e instanceof n.m5) || !(0, o.N)(e.cause)) return 'unexpected';
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
                l = (e) => {
                    try {
                        var t;
                        null == (t = window.musicDesktop) || t.authorization.reportDiagnostic(e);
                    } catch (e) {}
                };
        },
        82542: (e) => {
            e.exports = {
                icon: 'MainSuspenseLoader_icon__MceTD',
                'animate-pop': 'MainSuspenseLoader_animate-pop__vkpff',
                heartbeat: 'MainSuspenseLoader_heartbeat__6RDpM',
            };
        },
        87953: (e, t, r) => {
            'use strict';
            r.d(t, { GX: () => s.G, X1: () => n.X, m5: () => o.m });
            var n = r(50961),
                o = r(50891),
                s = r(10733);
            r(33898);
        },
    },
    (e) => {
        (e.O(0, [1256, 6706, 5472, 1410, 3712, 8506, 4220, 9562, 7358], () => e((e.s = 42636))), (_N_E = e.O()));
    },
]);
