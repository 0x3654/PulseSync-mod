'use strict';
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [2110],
    {
        9729: (e, t, r) => {
            r.d(t, { createDesktopContainer: () => e1 });
            var o = r(32732),
                i = r(37511),
                n = r(73202),
                s = r(74187),
                a = r(5924),
                u = r(19731),
                l = r(4628),
                g = r(17280),
                c = r(62850),
                d = r(52231),
                h = r(39439),
                p = r(52199),
                m = r(63038),
                G = r(97290),
                f = r(35268),
                w = r(15912),
                v = r(42750),
                k = r(38979),
                y = r(57466),
                V = r(30676),
                R = r(31038),
                P = r(46510),
                C = r(50808),
                U = r(70233),
                b = r(37558),
                L = r(83310),
                A = r(8368),
                D = r(74503),
                O = r(41816),
                S = r(67982),
                E = r(66838),
                z = r(16128),
                T = r(99146),
                x = r(78484),
                _ = r(51432),
                M = r(82669),
                q = r(58693),
                B = r(40482),
                H = r(10894),
                Z = r(50581),
                I = r(71943),
                F = r(24956),
                Y = r(51770),
                N = r(12690),
                W = r(90662),
                X = r(90926),
                Q = r(85750),
                $ = r(72864),
                K = r(84706),
                j = r(68846),
                J = r(67700),
                ee = r(30742),
                et = r(83092),
                er = r(90591),
                eo = r(59757),
                ei = r(4990),
                en = r(65866),
                es = r(96002),
                ea = r(76198),
                eu = r(37694),
                el = r(54874),
                eg = r(73494),
                ec = r(11318),
                ed = r(26838),
                eh = r(71695),
                ep = r(44547),
                em = r(54280),
                eG = r(51393),
                ef = r(70039),
                ew = r(25500),
                ev = r(91945),
                ek = r(19379),
                ey = r(38126),
                eV = r(20472),
                eR = r(78648),
                eP = r(42068);
            let eC = (e) => (void 0 === e ? 'missing' : e ? 'present' : 'empty');
            class eU extends eP.P {
                check() {
                    if (!this.dataIsLoaded) return;
                    let e = this.passportLogin,
                        t = this.token,
                        r = this.tokenOwnerLogin,
                        o = this.isOAuthPage ? 'oauth' : 'product',
                        i = e && r ? (e === r ? 'match' : 'mismatch') : 'unavailable',
                        n = (n) => ({
                            stage: 'authorization-decision',
                            page: o,
                            token: t ? 'present' : 'missing',
                            passportLogin: eC(e),
                            tokenOwnerLogin: eC(r),
                            loginComparison: i,
                            decision: n,
                        });
                    if (!e && t) {
                        (this.reportAuthorizationDecision(n('remove-token-reload'), 'passport-login-missing'), this.removeToken(), this.reloadPage());
                        return;
                    }
                    if (!t && e && !this.isOAuthPage) {
                        (this.reportAuthorizationDecision(n('redirect-authorization'), 'missing-token'), this.redirectToAuthorizationUrl());
                        return;
                    }
                    if ('string' == typeof e && 'string' == typeof r && e && r && e !== r) {
                        (this.reportAuthorizationDecision(n('redirect-oauth'), 'login-mismatch'), this.redirectToOAuthUrl());
                        return;
                    }
                    this.reportAuthorizationDecision(n('continue'));
                }
                get isOAuthPage() {
                    return window.location.pathname.endsWith('/oauth');
                }
                getRedirectUri() {
                    let e = ''.concat(this.pathname).concat(this.searchParams ? '?'.concat(this.searchParams) : '');
                    e.charAt(0) === eV.Z.main.href && (e = e.substring(1));
                    let t = new URLSearchParams({ redirectUri: e, language: this.language });
                    return ''.concat(origin, '/oauth?').concat(t.toString());
                }
                get oauthUrl() {
                    let {
                            oauthCredentials: { host: e, clientId: t },
                        } = this.config,
                        r = (0, p.r)(e, ey.r.RU, m.B),
                        o = new URL(''.concat(r, '/authorize')),
                        i = this.getRedirectUri();
                    return (
                        o.searchParams.append('response_type', 'token'),
                        o.searchParams.append('display', 'popup'),
                        o.searchParams.append('scope', 'music:content'),
                        o.searchParams.append('scope', 'music:read'),
                        o.searchParams.append('scope', 'music:write'),
                        o.searchParams.append('client_id', t),
                        o.searchParams.append('redirect_uri', i),
                        o.searchParams.append('state', this.oauthState),
                        o.searchParams.append('origin', this.passportOrigin),
                        o.searchParams.append('language', this.language),
                        o.toString()
                    );
                }
                get authorizationUrl() {
                    let e = this.getPassportHostWithTld(ey.r.RU, m.B);
                    if (!e) return;
                    let t = new URL(''.concat(e, '/auth'));
                    return (
                        t.searchParams.append('noreturn', '1'),
                        t.searchParams.append('origin', this.passportOrigin),
                        t.searchParams.append('language', this.language),
                        t.searchParams.append('retpath', this.oauthUrl),
                        t.toString()
                    );
                }
                getAuthorizationUrlWithParams(e) {
                    let t = this.getPassportHostWithTld(this.tld, m.B);
                    if (t) return ''.concat(t, '/auth?').concat(e.toString());
                }
                get childPageUrl() {
                    let e = this.getPassportHostWithTld(this.tld, m.B);
                    if (!e) return;
                    let t = new URLSearchParams({ origin: this.passportOrigin, retpath: this.oauthUrl, language: this.language });
                    return ''.concat(e, '/auth/child/restrict?').concat(t.toString());
                }
                reloadPage() {
                    window.location.reload();
                }
                redirectToOAuthUrl() {
                    this.oauthUrl && this.redirect(this.oauthUrl);
                }
                redirectToAuthorizationUrl() {
                    this.authorizationUrl && this.redirect(this.authorizationUrl);
                }
                redirectToChildPageUrl() {
                    this.childPageUrl && this.redirect(this.childPageUrl);
                }
                setTokenOwnerLogin(e) {
                    this.tokenOwnerLogin = e;
                }
                setDataIsLoaded() {
                    this.dataIsLoaded = !0;
                }
                setToken(e) {
                    let t = (0, eR.C8)(e.expiresIn),
                        r = this.oauthState;
                    if (!e.state || !r)
                        return (
                            (0, eR.uV)({ stage: 'token-storage', state: 'missing', write: 'skipped', readback: 'not-attempted', ttl: t, result: 'state-missing' }),
                            'state-missing'
                        );
                    if (e.state !== r)
                        return (
                            (0, eR.uV)({ stage: 'token-storage', state: 'mismatch', write: 'skipped', readback: 'not-attempted', ttl: t, result: 'state-mismatch' }),
                            'state-mismatch'
                        );
                    this.storage.set(ek.c.Oauth, e.token, { expires: Math.floor(e.expiresIn / 86400) });
                    let o = !!this.storage.get(ek.c.Oauth),
                        i = o ? 'stored' : 'readback-missing';
                    return ((0, eR.uV)({ stage: 'token-storage', state: 'match', write: 'attempted', readback: o ? 'present' : 'missing', ttl: t, result: i }), i);
                }
                get token() {
                    if (this.passportLogin) return this.storage.get(ek.c.Oauth) || void 0;
                }
                removeToken() {
                    this.storage.remove(ek.c.Oauth);
                }
                updateOauthState() {
                    let e = Math.round(1e11 * Math.random()).toString(16);
                    this.storage.set(ek.c.OauthState, e, { expires: 1 });
                }
                get oauthState() {
                    return this.storage.get(ek.c.OauthState) || '';
                }
                reportAuthorizationDecision(e, t) {
                    let r = JSON.stringify(e);
                    this.reportedAuthorizationDecisions.has(r) ||
                        (this.reportedAuthorizationDecisions.add(r), t && (0, eR.uV)({ stage: 'attempt-start', trigger: t }), (0, eR.uV)(e));
                }
                constructor(e, t, r) {
                    (super(e, t),
                        (0, ev._)(this, 'language', void 0),
                        (0, ev._)(this, 'dataIsLoaded', void 0),
                        (0, ev._)(this, 'tokenOwnerLogin', void 0),
                        (0, ev._)(this, 'reportedAuthorizationDecisions', void 0),
                        (this.language = r),
                        (this.dataIsLoaded = !1),
                        (this.reportedAuthorizationDecisions = new Set()),
                        this.oauthState || this.updateOauthState(),
                        this.check());
                }
            }
            class eb extends eU {
                get token() {
                    return this.storage.get(ek.c.Oauth) || void 0;
                }
                loadDataFromElectron() {
                    Promise.allSettled([this.loadPassportLogin(), this.loadYandexUid()]).then(() => {
                        (this.setDataIsLoaded(), this.check());
                    });
                }
                async loadPassportLogin() {
                    if (window.musicDesktop) {
                        let e = await window.musicDesktop.authorization.getPassportLogin();
                        return ((this.passportLoginFromElectron = e), e);
                    }
                    return Promise.resolve(void 0);
                }
                async loadYandexUid() {
                    if (window.musicDesktop) {
                        let e = await window.musicDesktop.authorization.getYandexUid();
                        return ((this.yadexUidFromElectron = e), e);
                    }
                    return Promise.resolve(void 0);
                }
                get passportLogin() {
                    return this.passportLoginFromElectron;
                }
                get yandexUid() {
                    return this.yadexUidFromElectron;
                }
                constructor(e, t, r) {
                    (super(e, t, r), (0, ev._)(this, 'passportLoginFromElectron', void 0), (0, ev._)(this, 'yadexUidFromElectron', void 0), this.loadDataFromElectron());
                }
            }
            var eL = r(51053),
                eA = r(12583),
                eD = r(75887),
                eO = r(95564);
            class eS {
                onChangeLanguage() {
                    window.location.reload();
                }
            }
            var eE = r(73422),
                ez = r(48193),
                eT = r(92023),
                ex = r(11541),
                e_ = r(8671),
                eM = r(10410),
                eq = r(70204),
                eB = r(79824),
                eH = r(18111),
                eZ = r(94482),
                eI = r(30673),
                eF = r(34097),
                eY = r(32629),
                eN = r(20030);
            let eW = (e) => {
                let { authorization: t, cacheController: r, httpClient: o, i18nStorage: i, prefixUrl: n, publicConfig: s } = e,
                    a = i.getLanguage(),
                    u = s.resources.musicExternalApi,
                    l = {
                        prefixUrl: n,
                        retryPolicyConfig: u.retryPolicyConfig,
                        timeouts: u.timeouts.accountResource,
                        params: { common: { oauth: t.token, client: (0, eY._)(), device: (0, eN.h)(), language: a } },
                    };
                return r ? new ep.wV(o, l, { cacheController: r }) : new eF.Q(o, l);
            };
            var eX = r(36090);
            let eQ = (e) => {
                let { resource: t, resourceName: r, slam: o } = e,
                    i = o.cacheController;
                return i ? (0, ep._2)({ resource: t, cacheController: i, config: { common: { resourceName: r }, enabled: !0, priority: ep.OU.HIGH, ttl: 6048e5 } }) : t;
            };
            var e$ = r(75898),
                eK = r(27576),
                ej = r(17512);
            let eJ = (e, t) => {
                let r = e.get(eq.oo),
                    o = e.get(eq.U2),
                    i = e.get(eq.Zf),
                    n = o.get(ek.c.YnisonDeviceId);
                n || ((n = (0, eK.A)()), o.set(ek.c.YnisonDeviceId, n));
                let s = {
                        info: { app_name: 'Desktop', app_version: (0, ej.B)() || '', title: 'Music Desktop App', device_id: n, type: e$.bq.WEB_DESKTOP },
                        volumeGranularity: 20,
                        get defaultVolume() {
                            var a;
                            return null != (a = r.get(ek.c.YmPlayerVolume)) ? a : void 0;
                        },
                    },
                    u = e.get(eq.WA).getPassportUid(),
                    l = e.get(eq.QG),
                    g = e.get(eq.V4),
                    c = e.get(eq.UB),
                    d = e.get(eq.Tq),
                    h = [new e$.zT(c)];
                return (
                    d && h.push(new e$.qP(d)),
                    new e$.Jd({
                        logger: i,
                        deviceConfig: s,
                        multiAuthUserId: u,
                        oauth: l.token,
                        ynisonConnectionConfig: g.ynisonConnectionConfig,
                        metricsTransport: h,
                        variables: { newConnector: t, isShadow: !0 },
                    })
                );
            };
            var e0 = r(7736);
            async function e1(e) {
                let { tld: t, env: ev, customApiPrefixUrl: ey } = e,
                    eV = await (0, i.iV)(ev),
                    eR = (0, e_.u)(),
                    eP = (0, i.u0)(eV, t, ey),
                    eC = (0, i.Ef)(eV, eR),
                    eU = await (0, eD.B)(ev),
                    eF = {},
                    e$ = new s.Dt()
                        .registerMany({
                            [eq.SX]: (0, s.Gr)(() => ev),
                            [eq.V4]: (0, s.Gr)(() => eV),
                            [eq.xF]: (0, s.Gr)(() => null),
                            [eq.qt]: (0, s.Gr)(() => eP),
                            [eq.P0]: (0, s.Gr)(() => new n.q(eU)),
                            [eq.Zi]: (0, s.Gr)(() => new eO.Y(eF)),
                        })
                        .register(
                            eq.WA,
                            (0, s.Gr)((e) => {
                                let t = e.get(eq.Zi);
                                return new eM.V(t);
                            }),
                        )
                        .registerMany({
                            [eq.Zf]: (0, s.Gr)((e) => {
                                let t = e.get(eq.P0).get(eA.qV);
                                return new c.r({
                                    maxLogLevel: g.cm.DEBUG,
                                    secureFields: ec.x,
                                    disableLogToConsole: !t,
                                    additionalData: {
                                        get puid() {
                                            return e.get(eq.WA).getPassportUid();
                                        },
                                    },
                                });
                            }),
                            [eq.RG]: (0, s.Gr)(async (e) => {
                                let {
                                    mocks: { enabled: o, mocksProviderUrl: i, urlCapturePattern: n },
                                } = e.get(eq.V4);
                                if (!o) return () => Promise.resolve(null);
                                let { initMocks: s } = await Promise.all([r.e(8387), r.e(9829)]).then(r.bind(r, 69829)),
                                    a = e.get(eq.U2),
                                    u = e.get(eq.Zf),
                                    l = 'production' === e.get(eq.SX) ? '/rsc-cache-worker.js' : '',
                                    g = () => {
                                        var e;
                                        return null != (e = a.get(h.L, !1)) ? e : null;
                                    },
                                    c = n || ''.concat(eP, '/*');
                                return () =>
                                    s({
                                        getMocksConfiguration: g,
                                        log: (e, t) => u.debug('[Mocks] | desktop: '.concat(e), t),
                                        mocksProviderUrl: i,
                                        serviceWorkerUrl: l,
                                        urlCapturePattern: (0, p.r)(c, t, m.B),
                                    }).catch((e) => u.debug('[Mocks] | desktop: initialization failed. '.concat(e)));
                            }),
                            [eq.TK]: (0, s.Gr)(
                                (e) =>
                                    new ((0, ez.b)(c.r))({
                                        maxLogLevel: g.cm.DEBUG,
                                        secureFields: ec.x,
                                        disableLogToConsole: 'development' !== e.get(eq.SX),
                                        additionalData: {
                                            get puid() {
                                                return e.get(eq.WA).getPassportUid();
                                            },
                                        },
                                    }),
                            ),
                            [eq.oo]: (0, s.Gr)(() => new em.si()),
                            [eq.DP]: (0, s.Gr)(() => new em.MJ('client '.concat('desktop'), 'cookie')),
                            [eq.U2]: (0, s.Gr)(() => new em.si()),
                            [eq.vH]: (0, s.Gr)(() => new em.fW()),
                            [eq.Xc]: (0, s.Gr)((e) => {
                                let t = e.get(eq.oo),
                                    r = e.get(eq.Zf);
                                return new eE.E({
                                    isBuildTypeDesktop: !0,
                                    logger: r,
                                    changeLanguageHandler: new eS(),
                                    storage: {
                                        get: () => t.get(ek.c.SavedUserLanguage),
                                        set(e) {
                                            t.set(ek.c.SavedUserLanguage, e);
                                        },
                                    },
                                });
                            }),
                        })
                        .registerMany({
                            [eq.y$]: (0, s.Gr)((e) => {
                                let t = e.get(eq.Zf),
                                    r = e.get(eq.oo),
                                    o = new ep.Mz({
                                        config: { useEntitiesStorage: !0, useFileStorage: !0, useResponseCacheStorage: !0 },
                                        plugins: [new ep.wK({ logger: t })],
                                    });
                                return (
                                    o.createCacheController({
                                        repositoryContainer: o.repositoryContainer,
                                        variables: {
                                            get uid() {
                                                return r.get(ek.c.YmUid);
                                            },
                                            get isOffline() {
                                                return !!o.network.status.isOffline;
                                            },
                                        },
                                    }),
                                    o
                                );
                            }),
                            [eq.Hm]: (0, s.P9)(
                                () =>
                                    function () {
                                        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                                        return new u.Q(e);
                                    },
                            ),
                            [eq.gu]: (0, s.P9)(
                                () =>
                                    function () {
                                        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                                        return new a.S(e);
                                    },
                            ),
                        })
                        .registerMany({
                            [eq.QG]: (0, s.Gr)((e) => new eb(e.get(eq.oo), e.get(eq.V4), e.get(eq.Xc).getLanguage())),
                            [eq.OP]: (0, s.P9)(
                                (e) =>
                                    function () {
                                        var t, r, o, i, n;
                                        let s = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                                            a = arguments.length > 1 ? arguments[1] : void 0,
                                            u = e.get(eq.Zf),
                                            l = e.get(eq.U2),
                                            g = new ed.N(u),
                                            {
                                                resources: { musicExternalApi: c },
                                            } = e.get(eq.V4);
                                        ((s.timeout = c.defaultTimeout),
                                            (s.hooks = {
                                                afterResponse: [...((null == s || null == (t = s.hooks) ? void 0 : t.afterResponse) || [])],
                                                beforeError: [g.beforeErrorHook, ...((null == s || null == (r = s.hooks) ? void 0 : r.beforeError) || [])],
                                                beforeRequest: [eg.xW, ...((null == s || null == (o = s.hooks) ? void 0 : o.beforeRequest) || [])],
                                                afterTimeout: [g.beforeErrorHook, ...((null == s || null == (i = s.hooks) ? void 0 : i.afterTimeout) || [])],
                                                beforeRetry: [eg.ie, g.beforeRetryHook, ...((null == s || null == (n = s.hooks) ? void 0 : n.beforeRetry) || [])],
                                            }));
                                        let d = a(s);
                                        return (0, ep.sY)(d, {
                                            get isOffline() {
                                                return (0, ex.g)(l);
                                            },
                                        });
                                    },
                            ),
                        })
                        .registerMany({
                            [eq.A4]: (0, s.P9)(
                                (e) =>
                                    function () {
                                        var t;
                                        let r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                                            o = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : e.get(eq.OP),
                                            i = e.get(eq.QG),
                                            n = e.get(eq.Hm),
                                            s = e.get(eq.Xc),
                                            a = e.get(eq.V4),
                                            u = eW({ authorization: i, cacheController: null, httpClient: o({}, n), i18nStorage: s, prefixUrl: eP, publicConfig: a });
                                        return (
                                            (r.hooks = { beforeError: [(0, eL.o)(i, u), ...((null == r || null == (t = r.hooks) ? void 0 : t.beforeError) || [])] }),
                                            o(r, n)
                                        );
                                    },
                            ),
                        })
                        .register(
                            eq.CR,
                            (0, s.P9)(
                                (e) =>
                                    function () {
                                        let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                                        return e.get(eq.A4)(t, e.get(eq.gu));
                                    },
                            ),
                        )
                        .register(
                            eq.GV,
                            (0, s.P9)((e) => {
                                let t = e.get(eq.QG),
                                    r = e.get(eq.qt),
                                    o = e.get(eq.Xc);
                                return ((e) => {
                                    let { authorization: t, createDefaultHttpClient: r, defaultPrefixUrl: o, i18nStorage: i, publicConfig: n } = e;
                                    return (e, s, a) => {
                                        var u, l, g;
                                        let c = n.resources.musicExternalApi,
                                            d = null != (u = null == a ? void 0 : a.prefixUrl) ? u : o,
                                            h = i.getLanguage(),
                                            p = null == a ? void 0 : a.httpClient;
                                        return (
                                            void 0 === p && (p = r()),
                                            new e(p, {
                                                prefixUrl: d,
                                                retryPolicyConfig: c.retryPolicyConfig,
                                                timeouts: c.timeouts[s],
                                                params: {
                                                    common: {
                                                        ...((null == a ? void 0 : a.oauth) === null
                                                            ? {}
                                                            : { oauth: null != (l = null == a ? void 0 : a.oauth) ? l : t.token }),
                                                        client: (0, eY._)(),
                                                        ...((null == a ? void 0 : a.device) === null
                                                            ? {}
                                                            : { device: null != (g = null == a ? void 0 : a.device) ? g : (0, eN.h)() }),
                                                        language: h,
                                                    },
                                                },
                                            })
                                        );
                                    };
                                })({ authorization: t, createDefaultHttpClient: () => e.get(eq.A4)(), defaultPrefixUrl: r, i18nStorage: o, publicConfig: e.get(eq.V4) });
                            }),
                        )
                        .registerMany({
                            [eq.$I]: (0, s.Gr)((e) => {
                                let t = e.get(eq.QG),
                                    r = e.get(eq.A4),
                                    o = e.get(eq.Xc),
                                    i = e.get(eq.qt),
                                    n = e.get(eq.V4);
                                return eW({
                                    authorization: t,
                                    cacheController: e.get(eq.y$).cacheController,
                                    httpClient: r(),
                                    i18nStorage: o,
                                    prefixUrl: i,
                                    publicConfig: n,
                                });
                            }),
                            [eq._1]: (0, s.Gr)((e) => e.get(eq.GV)(G.d, 'usersResource')),
                            [eq.V3]: (0, s.Gr)((e) => {
                                let t = e.get(eq.QG),
                                    r = e.get(eq.A4),
                                    o = e.get(eq.Xc),
                                    i = e.get(eq.qt);
                                return ((e) => {
                                    let { authorization: t, httpClientFactory: r, i18nStorage: o, prefixUrl: i, publicConfig: n, slam: s } = e,
                                        a = r(),
                                        u = o.getLanguage(),
                                        l = n.resources.musicExternalApi,
                                        g = {
                                            prefixUrl: i,
                                            retryPolicyConfig: l.retryPolicyConfig,
                                            timeouts: l.timeouts.landingResource,
                                            params: { common: { oauth: t.token, client: (0, eY._)(), device: (0, eN.h)(), language: u } },
                                        };
                                    return new ep.o7(a, g, {
                                        hooks: s.hooks,
                                        variables: {
                                            get tracksController() {
                                                return s.tracksController;
                                            },
                                            get cacheController() {
                                                var c;
                                                return null != (c = s.cacheController) ? c : null;
                                            },
                                        },
                                    });
                                })({ authorization: t, httpClientFactory: r, i18nStorage: o, prefixUrl: i, publicConfig: e.get(eq.V4), slam: e.get(eq.y$) });
                            }),
                            [eq.Lb]: (0, s.Gr)((e) => e.get(eq.GV)(f.H, 'landing3Resource')),
                            [eq.tz]: (0, s.Gr)((e) => e.get(eq.GV)(w.B, 'albumsResource')),
                            [eq.$8]: (0, s.Gr)((e) => e.get(eq.GV)(v.w, 'libraryResource')),
                            [eq.Oo]: (0, s.Gr)((e) => e.get(eq.GV)(k.L, 'tracksResource')),
                            [eq.$5]: (0, s.Gr)((e) => e.get(eq.GV)(y._, 'availabilityResource')),
                            [eq.qT]: (0, s.Gr)((e) => {
                                let t = e.get(eq.QG),
                                    r = e.get(eq.A4),
                                    o = e.get(eq.Xc),
                                    i = e.get(eq.qt),
                                    n = e.get(eq.V4);
                                return ((e) => {
                                    let {
                                            authorization: t,
                                            httpClientFactory: r,
                                            i18nStorage: o,
                                            platformSecret: i,
                                            prefixUrl: n,
                                            publicConfig: s,
                                            slam: a,
                                            storage: u,
                                        } = e,
                                        l = r(),
                                        g = o.getLanguage(),
                                        c = s.resources.musicExternalApi,
                                        d = {
                                            prefixUrl: n,
                                            retryPolicyConfig: c.retryPolicyConfig,
                                            timeouts: c.timeouts.getFileInfoResource,
                                            params: { common: { oauth: t.token, client: (0, eY._)(), device: (0, eN.h)(), language: g } },
                                        },
                                        h = a.repositoryContainer.fileStorage,
                                        p = a.repositoryContainer.tracksRepository,
                                        m = a.repositoryContainer.usersTracksRepository;
                                    return h && p && m
                                        ? new ep.d7(l, d, {
                                              fileStorage: h,
                                              tracksRepository: p,
                                              usersTracksRepository: m,
                                              hooks: a.hooks,
                                              variables: {
                                                  get uid() {
                                                      return u.get(ek.c.YmUid);
                                                  },
                                                  secretKey: i,
                                              },
                                          })
                                        : new eX.v(l, d);
                                })({
                                    authorization: t,
                                    httpClientFactory: r,
                                    i18nStorage: o,
                                    platformSecret: eC,
                                    prefixUrl: i,
                                    publicConfig: n,
                                    slam: e.get(eq.y$),
                                    storage: e.get(eq.oo),
                                });
                            }),
                            [eq.DV]: (0, s.Gr)((e) => e.get(eq.GV)(V.K, 'resourcesResource')),
                            [eq.X4]: (0, s.Gr)((e) => e.get(eq.GV)(R.a, 'topResource')),
                            [eq.O9]: (0, s.Gr)((e) => e.get(eq.GV)(P.b, 'artistsResource')),
                            [eq.E]: (0, s.Gr)((e) => e.get(eq.GV)(C.V, 'slidesResource')),
                            [eq.wH]: (0, s.Gr)((e) => e.get(eq.GV)(U.c, 'redAlertResource')),
                            [eq.ok]: (0, s.Gr)((e) => e.get(eq.GV)(b.Z, 'rotorResource')),
                            [eq.X8]: (0, s.Gr)((e) => e.get(eq.GV)(L.w, 'waveResource')),
                            [eq.yq]: (0, s.Gr)((e) => e.get(eq.GV)(A.p, 'searchResource')),
                            [eq.NN]: (0, s.Gr)((e) => e.get(eq.GV)(D.v, 'searchResource')),
                            [eq.qN]: (0, s.Gr)((e) => e.get(eq.GV)(O.T, 'playlistResource')),
                            [eq.ro]: (0, s.Gr)((e) => e.get(eq.GV)(S.e, 'playlistsResource')),
                            [eq.nM]: (0, s.Gr)((e) => e.get(eq.GV)(E.o, 'pinResource')),
                            [eq.Ut]: (0, s.Gr)((e) => e.get(eq.GV)(z.$, 'metatagsResource')),
                            [eq.K1]: (0, s.Gr)((e) => e.get(eq.GV)(T.p, 'tagResource')),
                            [eq.eu]: (0, s.Gr)((e) => e.get(eq.GV)(x.D, 'feedResource')),
                            [eq.aE]: (0, s.Gr)((e) => {
                                let t = e.get(eq.GV),
                                    r = e.get(eq.y$);
                                return eQ({ resource: t(_.l, 'pinsResource'), resourceName: _.l.constructor.name, slam: r });
                            }),
                            [eq.ki]: (0, s.Gr)((e) => e.get(eq.GV)(M.I, 'musicHistoryResource')),
                            [eq.c9]: (0, s.Gr)((e) => e.get(eq.GV)(q.s, 'dynamicPagesResource')),
                            [eq.en]: (0, s.Gr)((e) => e.get(eq.GV)(B.B, 'chartResource')),
                            [eq.jQ]: (0, s.Gr)((e) => e.get(eq.GV)(H._, 'clipsResource')),
                            [eq.cZ]: (0, s.Gr)((e) => e.get(eq.GV)(Z.c, 'lyricViewsResource')),
                            [eq.Zl]: (0, s.Gr)((e) => e.get(eq.GV)(I.D, 'nonMusicResource')),
                            [eq.CN]: (0, s.Gr)((e) => e.get(eq.GV)(F.N, 'donationResource')),
                            [eq.JM]: (0, s.Gr)((e) => e.get(eq.GV)(Y.c, 'streamsResource')),
                            [eq.P1]: (0, s.Gr)((e) => e.get(eq.GV)(N.S, 'loaderResource')),
                            [eq.re]: (0, s.Gr)((e) => {
                                let t = e.get(eq.GV),
                                    r = e.get(eq.A4)({ credentials: 'omit' });
                                return t(W.s, 'prefixlessResource', { httpClient: r, oauth: null, prefixUrl: '' });
                            }),
                            [eq.Lk]: (0, s.Gr)((e) => e.get(eq.GV)(X.g, 'filtersResource')),
                            [eq.uM]: (0, s.Gr)((e) => {
                                var t;
                                let { acqOffers: r, rumSettings: i } = e.get(eq.V4),
                                    { brand: n, service: s, environment: a, appVersion: u } = r,
                                    { platform: l, page: g } = i,
                                    c = e.get(eq.QG),
                                    d = e.get(eq.Xc).getLanguage(),
                                    h = e.get(eq.A4),
                                    p = c.token || null,
                                    m = h({ credentials: 'omit' }),
                                    { request_id: G, puid: f } = null != (t = e.get(eq.Zi).getStore()) ? t : {};
                                return new o.mZ({
                                    brand: n,
                                    service: s,
                                    environment: a,
                                    appVersion: u,
                                    etld: 'yandex.net',
                                    platform: 'Desktop',
                                    lang: d,
                                    oAuthToken: p,
                                    authMethod: 'oauth',
                                    requester: (0, e0.n)(m),
                                    puid: (null == f ? void 0 : f.toString()) || null,
                                    rumOptions: { platform: l, page: g, requestId: G },
                                });
                            }),
                            [eq.$$]: (0, s.Gr)((e) => e.get(eq.GV)(Q.E, 'ugcResource', { device: null })),
                            [eq.sv]: (0, s.Gr)((e) => e.get(eq.GV)($.L, 'collectionResource')),
                            [eq.gd]: (0, s.Gr)((e) => e.get(eq.GV)(K.z, 'adsResource')),
                            [eq.EN]: (0, s.Gr)((e) => e.get(eq.GV)(j._, 'afterTrackResource')),
                            [eq.Ez]: (0, s.Gr)((e) => e.get(eq.GV)(J.l, 'personalResource')),
                            [eq.N1]: (0, s.Gr)((e) => {
                                let t = e.get(eq.GV),
                                    r = e.get(eq.y$);
                                return eQ({ resource: t(ee.H, 'disclaimersResource'), resourceName: ee.H.constructor.name, slam: r });
                            }),
                            [eq.u2]: (0, s.Gr)((e) => e.get(eq.GV)(et.J, 'familyResource')),
                            [eq.TD]: (0, s.Gr)((e) => e.get(eq.GV)(er.L, 'childrenLandingResource')),
                            [eq.wK]: (0, s.Gr)((e) => e.get(eq.GV)(eo.u, 'landingBlocksResource')),
                            [eq.dh]: (0, s.Gr)((e) => e.get(eq.GV)(ei.q, 'promoResource')),
                            [eq.LC]: (0, s.Gr)((e) => {
                                let t = e.get(eq.CR),
                                    r = e.get(eq.V4),
                                    o = t({ credentials: 'include' }),
                                    i = r.resources.musicExternalApi;
                                return (0, eI._)({ httpClient: o, musicExternalApi: i, publicConfig: r });
                            }),
                            [eq.W5]: (0, s.Gr)((e) => {
                                let t = e.get(eq.CR),
                                    r = e.get(eq.V4),
                                    o = t({ credentials: 'include' });
                                return (0, eZ.Z)({ httpClient: o, publicConfig: r });
                            }),
                            [eq.PL]: (0, s.Gr)((e) => e.get(eq.GV)(en.w, 'labelsResource')),
                            [eq.DT]: (0, s.Gr)((e) => e.get(eq.GV)(es.O, 'concertsResource')),
                            [eq.dA]: (0, s.Gr)((e) => e.get(eq.GV)(ea.Q, 'wordsResource')),
                            [eq.$Y]: (0, s.Gr)((e) => e.get(eq.GV)(eu.C, 'wheelResource')),
                            [eq.VR]: (0, s.P9)((e) => () => {
                                let t = e.get(eq.A4),
                                    r = e.get(eq.V4),
                                    o = (0, eH.i)({ httpClientFactory: t, publicConfig: r });
                                return (0, eT.P)({ probe: (e) => o.ping({ signal: e }) });
                            }),
                            [eq.zj]: (0, s.Gr)((e) => e.get(eq.GV)(el.U, 'lumenResource')),
                            [eq.vg]: (0, s.Gr)(() => (0, eG.a)()),
                        })
                        .register(
                            eq.ff,
                            (0, s.Gr)((e) => {
                                let t = e.get(eq.N1);
                                return (0, eB.Y)(t);
                            }),
                        )
                        .registerMany({
                            [eq.UB]: (0, s.Gr)((e) => {
                                let t = e.get(eq.vg);
                                return new d.B(t);
                            }),
                            [eq.Tq]: (0, s.Gr)((e) => {
                                var t;
                                let r = e.get(eq.W5);
                                return (null == (t = window.Ya) ? void 0 : t.Rum) ? new d.G((0, ew.y)(), r, window.Ya.Rum) : null;
                            }),
                        });
                return e$
                    .register(
                        eq.by,
                        (0, s.Gr)(() => eJ(e$, !1)),
                    )
                    .register(
                        eq.s_,
                        (0, s.Gr)(() => eJ(e$, !0)),
                    )
                    .register(
                        eq.ni,
                        (0, s.Gr)((e) => {
                            let t = e.get(eq.Zf);
                            return new l.SU({
                                skeletonFactory: new ef.F6({
                                    landingResource: e.get(eq.V3),
                                    artistsResource: e.get(eq.O9),
                                    tabIdQueryParamController: new ef.ET(),
                                    config: { nodesConfig: { tabConfig: { addLoadAndShowBlocks: !1 } } },
                                }),
                                visibilityControllerParams: {
                                    visibilityConfig: { type: 'listVisibility', virtualizedMetadataLoader: new eh.yq({ resizeObserverAdapter: new eh.u2() }) },
                                },
                                plugins: [new ef.X({ logger: t })],
                            });
                        }),
                    );
            }
        },
        11541: (e, t, r) => {
            r.d(t, { g: () => i });
            var o = r(19379);
            let i = (e) => {
                let t = e.get(o.c.OfflineMode);
                return 'boolean' == typeof t && t;
            };
        },
        20030: (e, t, r) => {
            r.d(t, { h: () => o });
            let o = () => {
                if (void 0 === window.musicDesktop) return;
                let e = Object.entries(window.musicDesktop.runtime.deviceInfo);
                if (0 !== e.length)
                    return e
                        .map((e) => {
                            let [t, r] = e;
                            return ''.concat(t, '=').concat(String(r));
                        })
                        .join('; ');
            };
        },
        38126: (e, t, r) => {
            var o;
            (r.d(t, { r: () => o }),
                (function (e) {
                    ((e.RU = 'ru'), (e.COM = 'com'), (e.KZ = 'kz'), (e.BY = 'by'), (e.UZ = 'uz'));
                })(o || (o = {})));
        },
    },
]);
