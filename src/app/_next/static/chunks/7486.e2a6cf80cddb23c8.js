'use strict';
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [7486],
    {
        57486: (e, t, r) => {
            r.d(t, { createClientContainer: () => e$ });
            var o = r(32732),
                n = r(37511),
                s = r(73202),
                i = r(74187),
                a = r(5924),
                l = r(19731),
                c = r(4628),
                u = r(17280),
                g = r(62850),
                d = r(52231),
                h = r(39439),
                G = r(52199),
                p = r(63038),
                f = r(34097),
                R = r(97290),
                v = r(77175),
                b = r(35268),
                w = r(15912),
                m = r(42750),
                V = r(38979),
                k = r(57466),
                C = r(36090),
                P = r(30676),
                y = r(31038),
                L = r(46510),
                U = r(50808),
                A = r(70233),
                E = r(37558),
                q = r(83310),
                H = r(8368),
                T = r(74503),
                _ = r(41816),
                S = r(67982),
                W = r(66838),
                x = r(16128),
                D = r(99146),
                B = r(78484),
                M = r(51432),
                I = r(82669),
                Z = r(58693),
                z = r(40482),
                X = r(10894),
                N = r(50581),
                O = r(71943),
                Y = r(24956),
                Q = r(51770),
                $ = r(12690),
                j = r(90662),
                F = r(90926),
                K = r(85750),
                J = r(72864),
                ee = r(84706),
                et = r(67700),
                er = r(30742),
                eo = r(83092),
                en = r(90591),
                es = r(59757),
                ei = r(4990),
                ea = r(68846),
                el = r(65866),
                ec = r(96002),
                eu = r(76198),
                eg = r(37694),
                ed = r(54874),
                eh = r(73494),
                eG = r(11318),
                ep = r(26838),
                ef = r(71695),
                eR = r(44547),
                ev = r(54280),
                eb = r(51393),
                ew = r(70039),
                em = r(25500),
                eV = r(91945),
                ek = r(27576),
                eC = r(19379),
                eP = r(42068);
            class ey extends eP.P {
                getRedirectUri() {
                    let e = ''.concat(this.pathname).concat(this.searchParams ? '?'.concat(this.searchParams) : '');
                    return 'https://'.concat(this.host).concat(e);
                }
                get authorizationUrl() {
                    let e = this.getPassportHostWithTld(this.tld, p.B);
                    if (!e) return;
                    let t = new URLSearchParams({ origin: this.passportOrigin, retpath: this.getRedirectUri(), language: this.language });
                    return ''.concat(e, '/auth?').concat(t.toString());
                }
                get childPageUrl() {
                    let e = this.getPassportHostWithTld(this.tld, p.B);
                    if (!e) return;
                    let t = new URLSearchParams({ origin: this.passportOrigin, retpath: this.getRedirectUri(), language: this.language });
                    return ''.concat(e, '/auth/child/restrict?').concat(t.toString());
                }
                getAuthorizationUrlWithParams(e) {
                    let t = this.getPassportHostWithTld(this.tld, p.B);
                    if (t) return ''.concat(t, '/auth?').concat(e.toString());
                }
                get token() {}
                get yandexUid() {
                    return this.storage.get(eC.c.YandexUid, !1) || void 0;
                }
                constructor(e, t, r) {
                    (super(e, t), (0, eV._)(this, 'language', void 0), (this.language = r));
                }
            }
            class eL extends ey {
                get isPassportLoginChanged() {
                    return this.passportLogin !== this.passportLoginCached;
                }
                checkPassportLoginCookieChange() {
                    this.isPassportLoginChanged && this.reloadPage();
                }
                checkPassportLoginCookieChangeWithMultiAuth() {
                    this.isPassportLoginChanged && this.changeUser();
                }
                reloadPage() {
                    window.location.reload();
                }
                setUid(e) {
                    this.userId.setPassportUid(e);
                }
                redirectToAuthorizationUrl() {
                    this.authorizationUrl && this.redirect(this.authorizationUrl);
                }
                redirectToChildPageUrl() {
                    this.childPageUrl && this.redirect(this.childPageUrl);
                }
                get passportLogin() {
                    return this.storage.get(eC.c.YandexLogin, !1) || void 0;
                }
                async check() {}
                changeUser() {
                    var e;
                    if (void 0 === this.userId.getPassportUid()) return;
                    let t = 'auth-iframe-'.concat((0, ek.A)()),
                        r = (0, G.r)(this.config.passportCredentials.host, this.tld, p.B),
                        o = document.createElement('iframe'),
                        n = document.createElement('form');
                    (n.setAttribute('method', 'POST'),
                        n.setAttribute('action', ''.concat(r, '/passport?mode=embeddedauth')),
                        n.setAttribute('target', t),
                        n.setAttribute('class', 'hidden'),
                        o.setAttribute('name', t),
                        o.setAttribute('src', 'about:blank'),
                        o.setAttribute('class', 'hidden'));
                    let s = null != (e = this.storage.get(eC.c.YandexUid, !1)) ? e : '';
                    (Object.entries({
                        action: 'change_default',
                        uid: String(this.userId.getPassportUid()),
                        retpath: ''.concat(window.location.origin, '/login-status'),
                        yu: s,
                    }).forEach((e) => {
                        let [t, r] = e,
                            o = document.createElement('input');
                        (o.setAttribute('type', 'hidden'), o.setAttribute('name', t), o.setAttribute('value', r), n.appendChild(o));
                    }),
                        document.body.appendChild(n),
                        document.body.appendChild(o),
                        n.submit());
                }
                observe(e) {
                    if (e) {
                        ((this.observerCallback = this.checkPassportLoginCookieChangeWithMultiAuth.bind(this)), window.addEventListener('focus', this.observerCallback));
                        return;
                    }
                    this.intervalId = setInterval(this.checkPassportLoginCookieChange.bind(this), 5e3);
                }
                disconnect() {
                    (this.observerCallback && window.removeEventListener('focus', this.observerCallback), clearInterval(this.intervalId));
                }
                constructor(e, t, r, o) {
                    (super(e, t, r),
                        (0, eV._)(this, 'userId', void 0),
                        (0, eV._)(this, 'passportLoginCached', void 0),
                        (0, eV._)(this, 'intervalId', void 0),
                        (0, eV._)(this, 'observerCallback', void 0),
                        (this.userId = o),
                        (this.passportLoginCached = this.passportLogin));
                }
            }
            var eU = r(51053),
                eA = r(12583),
                eE = r(75887),
                eq = r(95564);
            class eH {
                onChangeLanguage(e) {
                    if ('string' == typeof this.token && this.token.length > 0) {
                        let t = 'https://yandex.'.concat(this.tld, '/portal/set/lang/'),
                            r = encodeURIComponent(window.location.href),
                            o = ''.concat(t, '?intl=').concat(e, '&retpath=').concat(r, '&sk=').concat(this.token);
                        window.location.assign(o);
                    } else window.location.reload();
                }
                constructor(e, t) {
                    ((0, eV._)(this, 'tld', void 0), (0, eV._)(this, 'token', void 0), (this.tld = e), (this.token = t));
                }
            }
            var eT = r(73422),
                e_ = r(48193),
                eS = r(92023),
                eW = r(10410),
                ex = r(70204),
                eD = r(79824),
                eB = r(32629);
            let eM = (e) => {
                let { createDefaultHttpClient: t, defaultPrefixUrl: r, i18nStorage: o, publicConfig: n, userId: s } = e;
                return (e, i, a) => {
                    var l;
                    let c = n.resources.musicExternalApi,
                        u = null != (l = null == a ? void 0 : a.prefixUrl) ? l : r,
                        g = o.getLanguage(),
                        d = null == a ? void 0 : a.httpClient;
                    return (
                        void 0 === d && (d = t()),
                        new e(d, {
                            prefixUrl: u,
                            retryPolicyConfig: c.retryPolicyConfig,
                            timeouts: c.timeouts[i],
                            params: {
                                common: {
                                    client: (0, eB._)(),
                                    language: g,
                                    get multiAuthUserId() {
                                        return s.getPassportUid();
                                    },
                                },
                            },
                        })
                    );
                };
            };
            var eI = r(18111),
                eZ = r(94482),
                ez = r(30673);
            let eX = /^application\/json(;\s?charset=\S+)?$/;
            class eN {
                async afterResponse(e) {
                    try {
                        if (!e.headers['content-range'] && e.headers['content-type'] && eX.test(e.headers['content-type'])) {
                            let t = await e.clone().json();
                            if (
                                ((e) => {
                                    if (e && 'object' == typeof e && 'type' in e && 'captcha' === e.type) {
                                        let { captcha: t } = e;
                                        if (t && t['captcha-page']) return !0;
                                    }
                                    return !1;
                                })(t)
                            ) {
                                let { captcha: e } = t;
                                window.location.replace(e['captcha-page']);
                            }
                        }
                    } catch (e) {
                        e instanceof Error && this.logger.error(e);
                    }
                    return e;
                }
                beforeRequest(e) {
                    let t = window.location.href;
                    ((e) => {
                        let t;
                        try {
                            let r = e.map((e) => {
                                let t = new URL(e);
                                return ''.concat(t.protocol).concat(t.hostname.split('.').slice(-2).join('.'));
                            });
                            t = r.every((e) => e === r[0]);
                        } catch (e) {
                            t = !1;
                        }
                        return t;
                    })([t, e.url]) && (e.headers.set('X-Requested-With', 'XMLHttpRequest'), e.headers.set('X-Retpath-Y', t));
                }
                get afterResponseHook() {
                    return this.afterResponse.bind(this);
                }
                get beforeRequestHook() {
                    return this.beforeRequest.bind(this);
                }
                constructor(e) {
                    ((0, eV._)(this, 'logger', void 0), (this.logger = e));
                }
            }
            var eO = r(75898);
            let eY = (e, t) => {
                let { browserName: r, browserVersion: o, newConnector: n } = t,
                    s = e.get(ex.oo),
                    i = e.get(ex.Zf),
                    a = (0, ek.A)(),
                    l = {
                        info: { app_name: r || 'Browser', app_version: o || '', title: 'Browser '.concat(r), device_id: a, type: eO.bq.WEB },
                        volumeGranularity: 20,
                        get defaultVolume() {
                            var c;
                            return null != (c = s.get(eC.c.YmPlayerVolume)) ? c : void 0;
                        },
                    },
                    u = e.get(ex.WA).getPassportUid(),
                    g = e.get(ex.QG),
                    d = e.get(ex.V4),
                    h = e.get(ex.UB),
                    G = e.get(ex.Tq),
                    p = [new eO.zT(h)];
                return (
                    G && p.push(new eO.qP(G)),
                    new eO.Jd({
                        logger: i,
                        deviceConfig: l,
                        multiAuthUserId: u,
                        oauth: g.token,
                        ynisonConnectionConfig: d.ynisonConnectionConfig,
                        metricsTransport: p,
                        variables: {
                            newConnector: n,
                            isShadow: !0,
                            get puid() {
                                return e.get(ex.WA).getPassportUid();
                            },
                        },
                    })
                );
            };
            var eQ = r(7736);
            async function e$(e) {
                let {
                        tld: t,
                        env: eV,
                        serverDetectedLocale: ek,
                        changeLanguageToken: eP,
                        browserName: ey,
                        browserVersion: eB,
                        executionContextStore: eX,
                        customApiPrefixUrl: eO,
                        customApiToken: e$,
                    } = e,
                    ej = await (0, n.iV)(eV),
                    eF = (0, n.u0)(ej, t, eO),
                    eK = await (0, eE.B)(eV),
                    eJ = 'production' !== eV ? eh.PW : void 0,
                    e0 = new i.Dt()
                        .registerMany({
                            [ex.SX]: (0, i.Gr)(() => eV),
                            [ex.V4]: (0, i.Gr)(() => ej),
                            [ex.xF]: (0, i.Gr)(() => null),
                            [ex.qt]: (0, i.Gr)(() => eF),
                            [ex.P0]: (0, i.Gr)(() => new s.q(eK)),
                            [ex.Zi]: (0, i.Gr)(() => new eq.Y(eX)),
                        })
                        .register(
                            ex.WA,
                            (0, i.Gr)((e) => {
                                let t = e.get(ex.Zi);
                                return new eW.V(t);
                            }),
                        )
                        .registerMany({
                            [ex.Zf]: (0, i.Gr)((e) => {
                                let t = e.get(ex.P0).get(eA.qV);
                                return new g.r({
                                    maxLogLevel: u.cm.DEBUG,
                                    secureFields: eG.x,
                                    disableLogToConsole: !t,
                                    additionalData: {
                                        get puid() {
                                            return e.get(ex.WA).getPassportUid();
                                        },
                                    },
                                });
                            }),
                            [ex.TK]: (0, i.Gr)(
                                (e) =>
                                    new ((0, e_.b)(g.r))({
                                        maxLogLevel: u.cm.DEBUG,
                                        secureFields: eG.x,
                                        disableLogToConsole: 'development' !== e.get(ex.SX),
                                        additionalData: {
                                            get puid() {
                                                return e.get(ex.WA).getPassportUid();
                                            },
                                        },
                                    }),
                            ),
                            [ex.oo]: (0, i.Gr)(() => new ev.V8()),
                            [ex.DP]: (0, i.Gr)(() => new ev.V8()),
                            [ex.RG]: (0, i.Gr)(async (e) => {
                                let {
                                    mocks: { enabled: o, mocksProviderUrl: n, urlCapturePattern: s },
                                } = e.get(ex.V4);
                                if (!o) return () => Promise.resolve(null);
                                let { initMocks: i } = await Promise.all([r.e(8387), r.e(9829)]).then(r.bind(r, 69829)),
                                    a = e.get(ex.DP),
                                    l = e.get(ex.Zf),
                                    c = 'production' === e.get(ex.SX) ? '/rsc-cache-worker.js' : '',
                                    u = () => {
                                        var e;
                                        return null != (e = a.get(h.L, !1)) ? e : null;
                                    },
                                    g = s || ''.concat(eF, '/*');
                                return () =>
                                    i({
                                        getMocksConfiguration: u,
                                        log: (e, t) => l.debug('[Mocks] | client: '.concat(e), t),
                                        mocksProviderUrl: n,
                                        serviceWorkerUrl: c,
                                        urlCapturePattern: (0, G.r)(g, t, p.B),
                                    }).catch((e) => l.debug('[Mocks] | client: initialization failed. '.concat(e)));
                            }),
                            [ex.U2]: (0, i.Gr)(() => new ev.si()),
                            [ex.vH]: (0, i.Gr)(() => new ev.fW()),
                            [ex.y$]: (0, i.Gr)(() => new eR.Mz({ config: { useEntitiesStorage: !1, useFileStorage: !1, useResponseCacheStorage: !1 } })),
                            [ex.Xc]: (0, i.Gr)((e) => {
                                let r = e.get(ex.oo),
                                    o = e.get(ex.Zf),
                                    { i18n: n } = e.get(ex.V4),
                                    s = new Date(Date.now() + 24 * n.cookieExpirationDays * 36e5);
                                return new eT.E({
                                    serverDetectedLocale: ek,
                                    logger: o,
                                    changeLanguageHandler: new eH(t, eP),
                                    storage: {
                                        get: () => r.get(eC.c.SavedUserLanguage, !1),
                                        set(e) {
                                            r.set(eC.c.SavedUserLanguage, e, { path: '/', domain: window.location.hostname, expires: s, secure: !0 }, !1);
                                        },
                                    },
                                });
                            }),
                            [ex.Hm]: (0, i.P9)(
                                () =>
                                    function () {
                                        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                                        return new l.Q(e);
                                    },
                            ),
                            [ex.gu]: (0, i.P9)(
                                () =>
                                    function () {
                                        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                                        return new a.S(e);
                                    },
                            ),
                        })
                        .registerMany({
                            [ex.QG]: (0, i.Gr)((e) => new eL(e.get(ex.DP), e.get(ex.V4), e.get(ex.Xc).getLanguage(), e.get(ex.WA))),
                            [ex.OP]: (0, i.P9)(
                                (e) =>
                                    function () {
                                        var t, r, o, n, s, i;
                                        let a = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                                            l = arguments.length > 1 ? arguments[1] : void 0,
                                            c = e.get(ex.Zf),
                                            {
                                                resources: { musicExternalApi: u },
                                            } = e.get(ex.V4),
                                            g = new ep.N(c),
                                            d = new eN(c);
                                        return (
                                            (a.timeout = u.defaultTimeout),
                                            (a.hooks = {
                                                afterResponse: [d.afterResponseHook, ...((null == a || null == (t = a.hooks) ? void 0 : t.afterResponse) || [])],
                                                afterTimeout: [g.beforeErrorHook, ...((null == a || null == (r = a.hooks) ? void 0 : r.afterTimeout) || [])],
                                                beforeError: [g.beforeErrorHook, ...((null == a || null == (o = a.hooks) ? void 0 : o.beforeError) || [])],
                                                beforeRequest: [
                                                    eh.xW,
                                                    (0, eh.uY)(e$),
                                                    ...(eJ ? [eJ] : []),
                                                    d.beforeRequestHook,
                                                    ...((null == a || null == (n = a.hooks) ? void 0 : n.beforeRequest) || []),
                                                ],
                                                beforeRetry: [eh.ie, g.beforeRetryHook, ...((null == a || null == (s = a.hooks) ? void 0 : s.beforeRetry) || [])],
                                                onRequestDone: [...((null == a || null == (i = a.hooks) ? void 0 : i.onRequestDone) || [])],
                                            }),
                                            l(a)
                                        );
                                    },
                            ),
                        })
                        .registerMany({
                            [ex.A4]: (0, i.P9)(
                                (e) =>
                                    function () {
                                        var t;
                                        let r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                                            o = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : e.get(ex.OP),
                                            n = e.get(ex.QG),
                                            s = e.get(ex.Hm),
                                            i = e.get(ex.Xc),
                                            a = e.get(ex.V4),
                                            l = e.get(ex.WA),
                                            c = o({ credentials: 'include' }, s),
                                            u = eM({ createDefaultHttpClient: () => c, defaultPrefixUrl: eF, i18nStorage: i, publicConfig: a, userId: l })(
                                                f.Q,
                                                'accountResource',
                                            );
                                        return (
                                            (r.hooks = { beforeError: [(0, eU.o)(n, u), ...((null == r || null == (t = r.hooks) ? void 0 : t.beforeError) || [])] }),
                                            o(r, s)
                                        );
                                    },
                            ),
                            [ex.mr]: (0, i.P9)(
                                (e) =>
                                    function () {
                                        var t, r, o, n, s, i;
                                        let a = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                                            l = e.get(ex.Hm),
                                            c = e.get(ex.Zf),
                                            {
                                                resources: { musicExternalApi: u },
                                            } = e.get(ex.V4),
                                            g = new ep.N(c);
                                        return (
                                            (a.timeout = u.defaultTimeout),
                                            (a.hooks = {
                                                afterResponse: [...((null == a || null == (t = a.hooks) ? void 0 : t.afterResponse) || [])],
                                                afterTimeout: [g.beforeErrorHook, ...((null == a || null == (r = a.hooks) ? void 0 : r.afterTimeout) || [])],
                                                beforeError: [g.beforeErrorHook, ...((null == a || null == (o = a.hooks) ? void 0 : o.beforeError) || [])],
                                                beforeRequest: [eh.xW, ...((null == a || null == (n = a.hooks) ? void 0 : n.beforeRequest) || [])],
                                                beforeRetry: [eh.ie, g.beforeRetryHook, ...((null == a || null == (s = a.hooks) ? void 0 : s.beforeRetry) || [])],
                                                onRequestDone: [...((null == a || null == (i = a.hooks) ? void 0 : i.onRequestDone) || [])],
                                            }),
                                            l(a)
                                        );
                                    },
                            ),
                        })
                        .register(
                            ex.CR,
                            (0, i.P9)(
                                (e) =>
                                    function () {
                                        let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                                        return e.get(ex.A4)(t, e.get(ex.gu));
                                    },
                            ),
                        )
                        .register(
                            ex.GV,
                            (0, i.P9)((e) => {
                                let t = e.get(ex.qt),
                                    r = e.get(ex.Xc),
                                    o = e.get(ex.V4);
                                return eM({
                                    createDefaultHttpClient: () => e.get(ex.A4)({ credentials: 'include' }),
                                    defaultPrefixUrl: t,
                                    i18nStorage: r,
                                    publicConfig: o,
                                    userId: e.get(ex.WA),
                                });
                            }),
                        )
                        .registerMany({
                            [ex.$I]: (0, i.Gr)((e) => e.get(ex.GV)(f.Q, 'accountResource')),
                            [ex._1]: (0, i.Gr)((e) => e.get(ex.GV)(R.d, 'usersResource')),
                            [ex.V3]: (0, i.Gr)((e) => e.get(ex.GV)(v.G, 'landingResource')),
                            [ex.Lb]: (0, i.Gr)((e) => e.get(ex.GV)(b.H, 'landing3Resource')),
                            [ex.tz]: (0, i.Gr)((e) => e.get(ex.GV)(w.B, 'landingResource')),
                            [ex.$8]: (0, i.Gr)((e) => e.get(ex.GV)(m.w, 'libraryResource')),
                            [ex.Oo]: (0, i.Gr)((e) => e.get(ex.GV)(V.L, 'tracksResource')),
                            [ex.$5]: (0, i.Gr)((e) => e.get(ex.GV)(k._, 'availabilityResource')),
                            [ex.qT]: (0, i.Gr)((e) => e.get(ex.GV)(C.v, 'getFileInfoResource')),
                            [ex.DV]: (0, i.Gr)((e) => e.get(ex.GV)(P.K, 'resourcesResource')),
                            [ex.X4]: (0, i.Gr)((e) => e.get(ex.GV)(y.a, 'topResource')),
                            [ex.O9]: (0, i.Gr)((e) => e.get(ex.GV)(L.b, 'artistsResource')),
                            [ex.E]: (0, i.Gr)((e) => e.get(ex.GV)(U.V, 'slidesResource')),
                            [ex.wH]: (0, i.Gr)((e) => e.get(ex.GV)(A.c, 'redAlertResource')),
                            [ex.ok]: (0, i.Gr)((e) => e.get(ex.GV)(E.Z, 'rotorResource')),
                            [ex.X8]: (0, i.Gr)((e) => e.get(ex.GV)(q.w, 'waveResource')),
                            [ex.yq]: (0, i.Gr)((e) => e.get(ex.GV)(H.p, 'searchResource')),
                            [ex.NN]: (0, i.Gr)((e) => e.get(ex.GV)(T.v, 'searchResource')),
                            [ex.qN]: (0, i.Gr)((e) => e.get(ex.GV)(_.T, 'playlistResource')),
                            [ex.ro]: (0, i.Gr)((e) => e.get(ex.GV)(S.e, 'playlistsResource')),
                            [ex.nM]: (0, i.Gr)((e) => e.get(ex.GV)(W.o, 'pinResource')),
                            [ex.Ut]: (0, i.Gr)((e) => e.get(ex.GV)(x.$, 'metatagsResource')),
                            [ex.K1]: (0, i.Gr)((e) => e.get(ex.GV)(D.p, 'tagResource')),
                            [ex.eu]: (0, i.Gr)((e) => e.get(ex.GV)(B.D, 'feedResource')),
                            [ex.aE]: (0, i.Gr)((e) => e.get(ex.GV)(M.l, 'pinsResource')),
                            [ex.ki]: (0, i.Gr)((e) => e.get(ex.GV)(I.I, 'musicHistoryResource')),
                            [ex.c9]: (0, i.Gr)((e) => e.get(ex.GV)(Z.s, 'dynamicPagesResource')),
                            [ex.en]: (0, i.Gr)((e) => e.get(ex.GV)(z.B, 'chartResource')),
                            [ex.jQ]: (0, i.Gr)((e) => e.get(ex.GV)(X._, 'clipsResource')),
                            [ex.cZ]: (0, i.Gr)((e) => e.get(ex.GV)(N.c, 'lyricViewsResource')),
                            [ex.Zl]: (0, i.Gr)((e) => e.get(ex.GV)(O.D, 'nonMusicResource')),
                            [ex.CN]: (0, i.Gr)((e) => e.get(ex.GV)(Y.N, 'donationResource')),
                            [ex.JM]: (0, i.Gr)((e) => e.get(ex.GV)(Q.c, 'streamsResource')),
                            [ex.P1]: (0, i.Gr)((e) => e.get(ex.GV)($.S, 'loaderResource')),
                            [ex.re]: (0, i.Gr)((e) => {
                                let t = e.get(ex.GV),
                                    r = e.get(ex.mr)({ credentials: 'omit' });
                                return t(j.s, 'prefixlessResource', { httpClient: r, prefixUrl: '' });
                            }),
                            [ex.Lk]: (0, i.Gr)((e) => e.get(ex.GV)(F.g, 'filtersResource')),
                            [ex.uM]: (0, i.Gr)((e) => {
                                var r;
                                let { acqOffers: n, rumSettings: s } = e.get(ex.V4),
                                    { brand: i, service: a, environment: l, appVersion: c } = n,
                                    { platform: u, page: g } = s,
                                    d = e.get(ex.QG),
                                    h = e.get(ex.Xc).getLanguage(),
                                    G = e.get(ex.A4),
                                    p = d.token || null,
                                    f = G({ credentials: p ? 'omit' : 'include' }),
                                    { request_id: R, puid: v } = null != (r = e.get(ex.Zi).getStore()) ? r : {};
                                return new o.mZ({
                                    brand: i,
                                    service: a,
                                    environment: l,
                                    appVersion: c,
                                    etld: 'yandex.'.concat(t),
                                    platform: 'Web',
                                    lang: h,
                                    oAuthToken: p,
                                    authMethod: p ? 'oauth' : 'default',
                                    requester: (0, eQ.n)(f),
                                    puid: (null == v ? void 0 : v.toString()) || null,
                                    rumOptions: { platform: u, page: g, requestId: R },
                                });
                            }),
                            [ex.$$]: (0, i.Gr)((e) => e.get(ex.GV)(K.E, 'ugcResource')),
                            [ex.sv]: (0, i.Gr)((e) => e.get(ex.GV)(J.L, 'collectionResource')),
                            [ex.gd]: (0, i.Gr)((e) => e.get(ex.GV)(ee.z, 'adsResource')),
                            [ex.Ez]: (0, i.Gr)((e) => e.get(ex.GV)(et.l, 'personalResource')),
                            [ex.N1]: (0, i.Gr)((e) => e.get(ex.GV)(er.H, 'disclaimersResource')),
                            [ex.u2]: (0, i.Gr)((e) => e.get(ex.GV)(eo.J, 'familyResource')),
                            [ex.TD]: (0, i.Gr)((e) => e.get(ex.GV)(en.L, 'childrenLandingResource')),
                            [ex.wK]: (0, i.Gr)((e) => e.get(ex.GV)(es.u, 'landingBlocksResource')),
                            [ex.dh]: (0, i.Gr)((e) => e.get(ex.GV)(ei.q, 'promoResource')),
                            [ex.LC]: (0, i.Gr)((e) => {
                                let t = e.get(ex.CR),
                                    r = e.get(ex.V4),
                                    o = t({ credentials: 'include' }),
                                    n = r.resources.musicExternalApi;
                                return (0, ez._)({ httpClient: o, musicExternalApi: n, publicConfig: r });
                            }),
                            [ex.W5]: (0, i.Gr)((e) => {
                                let t = e.get(ex.CR),
                                    r = e.get(ex.V4),
                                    o = t({ credentials: 'include' });
                                return (0, eZ.Z)({ httpClient: o, publicConfig: r });
                            }),
                            [ex.EN]: (0, i.Gr)((e) => e.get(ex.GV)(ea._, 'afterTrackResource')),
                            [ex.PL]: (0, i.Gr)((e) => e.get(ex.GV)(el.w, 'labelsResource')),
                            [ex.DT]: (0, i.Gr)((e) => e.get(ex.GV)(ec.O, 'concertsResource')),
                            [ex.dA]: (0, i.Gr)((e) => e.get(ex.GV)(eu.Q, 'wordsResource')),
                            [ex.$Y]: (0, i.Gr)((e) => e.get(ex.GV)(eg.C, 'wheelResource')),
                            [ex.VR]: (0, i.P9)((e) => () => {
                                let t = e.get(ex.A4),
                                    r = e.get(ex.V4),
                                    o = (0, eI.i)({ httpClientFactory: t, publicConfig: r });
                                return (0, eS.P)({ probe: (e) => o.ping({ signal: e }) });
                            }),
                            [ex.zj]: (0, i.Gr)((e) => e.get(ex.GV)(ed.U, 'lumenResource')),
                            [ex.vg]: (0, i.Gr)(() => (0, eb.a)()),
                        })
                        .register(
                            ex.ff,
                            (0, i.Gr)((e) => {
                                let t = e.get(ex.N1);
                                return (0, eD.Y)(t);
                            }),
                        )
                        .registerMany({
                            [ex.UB]: (0, i.Gr)((e) => {
                                let t = e.get(ex.vg);
                                return new d.B(t);
                            }),
                            [ex.Tq]: (0, i.Gr)((e) => {
                                var t;
                                let r = e.get(ex.W5);
                                return (null == (t = window.Ya) ? void 0 : t.Rum) ? new d.G((0, em.y)(), r, window.Ya.Rum) : null;
                            }),
                        });
                return e0
                    .register(
                        ex.by,
                        (0, i.Gr)(() => eY(e0, { browserName: ey, browserVersion: eB, newConnector: !1 })),
                    )
                    .register(
                        ex.s_,
                        (0, i.Gr)(() => eY(e0, { browserName: ey, browserVersion: eB, newConnector: !0 })),
                    )
                    .register(
                        ex.ni,
                        (0, i.Gr)((e) => {
                            let t = e.get(ex.Zf);
                            return new c.SU({
                                skeletonFactory: new ew.F6({
                                    landingResource: e.get(ex.V3),
                                    artistsResource: e.get(ex.O9),
                                    tabIdQueryParamController: new ew.ET(),
                                    config: { nodesConfig: { tabConfig: { addLoadAndShowBlocks: !1 } } },
                                }),
                                visibilityControllerParams: {
                                    visibilityConfig: { type: 'listVisibility', virtualizedMetadataLoader: new ef.yq({ resizeObserverAdapter: new ef.u2() }) },
                                },
                                plugins: [new ew.X({ logger: t })],
                            });
                        }),
                    );
            }
        },
    },
]);
