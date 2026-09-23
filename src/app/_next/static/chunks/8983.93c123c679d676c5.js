(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [8983],
    {
        3632: (e, t, r) => {
            'use strict';
            let o;
            r.d(t, { useMetrika: () => n });
            var s = r(55178),
                i = r(48723);
            let n = () => {
                let e = (o || (o = (0, i.a)()), o),
                    t = (0, s.useSyncExternalStore)(
                        (t) => e.isLoaded.onChange(t),
                        () => e.isLoaded.value,
                    );
                return (0, s.useMemo)(() => ({ ...e, isLoaded: t }), [t, e]);
            };
        },
        17280: (e, t, r) => {
            'use strict';
            r.d(t, { cm: () => o.c });
            var o = r(99604);
            r(64450);
        },
        20630: (e, t, r) => {
            'use strict';
            function o(e, ...t) {
                let r = e('i18n-jwt-token', t[0]);
                return r ? { 'X-Authorization': r } : {};
            }
            (r.d(t, { e: () => o }), r(24770));
        },
        24770: (e, t, r) => {
            'use strict';
            r.d(t, { I: () => i, M: () => u, a: () => n, b: () => a, c: () => o, d: () => s, g: () => h });
            let o = 'i18n-geo-widget-device-id',
                s = 'i18n-geo-widget-replacements',
                i = 'i18n-enabled-replacement',
                n = 'i18n-jwt-token',
                a = 'i18n-geo-widget-replacement-cleared',
                u = 3,
                l = {
                    yandex: {
                        testing: 'https://plus-i18n-token.tst.plus.yandex-team.ru',
                        prestable: 'https://plus-i18n-token.prestable.plus.yandex-team.ru',
                        production: 'https://plus-i18n-token.plus.yandex-team.ru',
                    },
                    yango: {
                        testing: 'https://plus-i18n-token.plus.yango.com',
                        prestable: 'https://plus-i18n-token.plus.yango.com',
                        production: 'https://plus-i18n-token.plus.yango.com',
                    },
                },
                h = (e, t) => l[t][e];
        },
        36177: (e, t, r) => {
            'use strict';
            r.d(t, { A: () => s });
            var o = r(52803);
            let s = function (e, t, r) {
                return null == e ? e : (0, o.A)(e, t, r);
            };
        },
        40141: (e, t, r) => {
            'use strict';
            r.d(t, { A: () => s });
            var o = r(50807);
            let s = function (e, t, r) {
                var s = null == e ? void 0 : (0, o.A)(e, t);
                return void 0 === s ? r : s;
            };
        },
        48723: (e, t, r) => {
            'use strict';
            r.d(t, { a: () => n });
            var o = r(98411),
                s = (function () {
                    function e(e) {
                        ((this.observableValue = (0, o.vP)(e)), (this.prevValueByListener = new Map()));
                    }
                    return (
                        Object.defineProperty(e.prototype, 'value', {
                            get: function () {
                                return this.observableValue.value;
                            },
                            set: function (e) {
                                this.observableValue.value = e;
                            },
                            enumerable: !1,
                            configurable: !0,
                        }),
                        (e.prototype.onChange = function (e, t) {
                            var r = this;
                            void 0 === t && (t = { skipFirstChange: !1 });
                            var o = !0;
                            return (
                                this.prevValueByListener.has(e) || this.prevValueByListener.set(e, void 0),
                                this.observableValue.subscribe(function (s) {
                                    if (s !== r.prevValueByListener.get(e)) {
                                        if (t.skipFirstChange && o) {
                                            o = !1;
                                            return;
                                        }
                                        (r.prevValueByListener.set(e, s), e(s));
                                    }
                                })
                            );
                        }),
                        e
                    );
                })();
            !(function () {
                function e(e) {
                    ((this.observableValue = (0, o.EW)(e)), (this.prevValueByListener = new Map()));
                }
                (Object.defineProperty(e.prototype, 'value', {
                    get: function () {
                        return this.observableValue.value;
                    },
                    enumerable: !1,
                    configurable: !0,
                }),
                    (e.prototype.onChange = function (e, t) {
                        var r = this;
                        void 0 === t && (t = { skipFirstChange: !1 });
                        var o = !0;
                        return (
                            this.prevValueByListener.has(e) || this.prevValueByListener.set(e, void 0),
                            this.observableValue.subscribe(function (s) {
                                if (s !== r.prevValueByListener.get(e)) {
                                    if (t.skipFirstChange && o) {
                                        o = !1;
                                        return;
                                    }
                                    (r.prevValueByListener.set(e, s), e(s));
                                }
                            })
                        );
                    }));
            })();
            let i = 'counter',
                n = () => {
                    let e = null,
                        t = new s(!1),
                        r = [];
                    return {
                        isLoaded: t,
                        init: (o) => {
                            if ('undefined' != typeof window && void 0 !== window.Ya?.Metrika2 && !t.value)
                                try {
                                    var s;
                                    ((e = new window.Ya.Metrika2({ ...o })),
                                        (t.value = !0),
                                        (s = e),
                                        r.forEach((e) => {
                                            e(s);
                                        }),
                                        (r.length = 0));
                                } catch (e) {
                                    ('string' == typeof e || e instanceof Error) && o.logger.error(e);
                                }
                        },
                        count: (t, o = i) => {
                            e
                                ? e.params({ [o]: t })
                                : r.push((e) => {
                                      e.params({ [o]: t });
                                  });
                        },
                        hit: (t) => {
                            e
                                ? e.hit(t)
                                : r.push((e) => {
                                      e.hit(t);
                                  });
                        },
                        reachGoal: (t, o) => {
                            if (!e) return void r.push((e) => e.reachGoal(t, o));
                            e.reachGoal(t, o);
                        },
                    };
                };
        },
        50239: (e, t, r) => {
            'use strict';
            r.d(t, { M: () => o });
            class o extends Error {
                constructor(e) {
                    (super('Request timed out'),
                        Object.defineProperty(this, 'request', { enumerable: !0, configurable: !0, writable: !0, value: void 0 }),
                        (this.name = 'TimeoutError'),
                        (this.request = e));
                }
            }
        },
        50807: (e, t, r) => {
            'use strict';
            r.d(t, { A: () => i });
            var o = r(97608),
                s = r(85172);
            let i = function (e, t) {
                t = (0, o.A)(t, e);
                for (var r = 0, i = t.length; null != e && r < i;) e = e[(0, s.A)(t[r++])];
                return r && r == i ? e : void 0;
            };
        },
        51393: (e, t, r) => {
            'use strict';
            r.d(t, { a: () => o.a });
            var o = r(48723);
            r(3632);
        },
        51678: (e, t, r) => {
            'use strict';
            r.d(t, { H: () => o });
            class o extends Error {
                constructor(e, t, r) {
                    let o = e.status || 0 === e.status ? e.status : '',
                        s = e.statusText || '',
                        i = `${o} ${s}`.trim();
                    (super(`Request failed with ${i ? `status code ${i}` : 'an unknown error'}`),
                        Object.defineProperty(this, 'response', { enumerable: !0, configurable: !0, writable: !0, value: void 0 }),
                        Object.defineProperty(this, 'request', { enumerable: !0, configurable: !0, writable: !0, value: void 0 }),
                        Object.defineProperty(this, 'options', { enumerable: !0, configurable: !0, writable: !0, value: void 0 }),
                        (this.name = 'HTTPError'),
                        (this.response = e),
                        (this.request = t),
                        (this.options = r));
                }
            }
        },
        52803: (e, t, r) => {
            'use strict';
            r.d(t, { A: () => u });
            var o = r(46346),
                s = r(97608),
                i = r(15640),
                n = r(83556),
                a = r(85172);
            let u = function (e, t, r, u) {
                if (!(0, n.A)(e)) return e;
                t = (0, s.A)(t, e);
                for (var l = -1, h = t.length, c = h - 1, p = e; null != p && ++l < h;) {
                    var f = (0, a.A)(t[l]),
                        d = r;
                    if ('__proto__' === f || 'constructor' === f || 'prototype' === f) break;
                    if (l != c) {
                        var b = p[f];
                        void 0 === (d = u ? u(b, f, p) : void 0) && (d = (0, n.A)(b) ? b : (0, i.A)(t[l + 1]) ? [] : {});
                    }
                    ((0, o.A)(p, f, d), (p = p[f]));
                }
                return e;
            };
        },
        62850: (e, t, r) => {
            'use strict';
            r.d(t, { r: () => i });
            var o = r(99604),
                s = r(64450);
            class i extends s.q {
                disableLogToConsole;
                constructor(e) {
                    (super(e), (this.disableLogToConsole = e.disableLogToConsole));
                }
                info(e, t) {
                    this.maxLogLevel >= o.c.INFO && this.logToConsole(o.c.INFO, e, t);
                }
                debug(e, t) {
                    this.maxLogLevel >= o.c.DEBUG && this.logToConsole(o.c.DEBUG, e, t);
                }
                trace(e, t) {
                    this.maxLogLevel >= o.c.TRACE && this.logToConsole(o.c.TRACE, e, t);
                }
                warn(e, t) {
                    (this.maxLogLevel >= o.c.WARNING && this.logToConsole(o.c.WARNING, e, t), this.sendToErrorBooster(o.c.WARNING, e, t));
                }
                error(e, t) {
                    (this.maxLogLevel >= o.c.ERROR && this.logToConsole(o.c.ERROR, e, t), this.sendToErrorBooster(o.c.ERROR, e, t));
                }
                log(e, t) {
                    this.logToConsole(o.c.INFO, e, t);
                }
                logToConsole(e, t, r) {
                    if (this.disableLogToConsole) return;
                    let s = o.Q[e];
                    console[s](...this.formatMessage(e, t, r));
                }
                sendToErrorBooster(e, t, r) {
                    window.Ya.Rum.logError({ message: t, level: e, additional: { data: r ? this.obfuscateData({ ...this.additionalData, ...r }) : {} } });
                }
            }
        },
        64450: (e, t, r) => {
            'use strict';
            r.d(t, { q: () => u });
            var o = r(77769),
                s = r(40141),
                i = r(36177),
                n = r(2774);
            let a = () => 'SECRET';
            class u {
                maxLogLevel;
                secureFields;
                additionalData;
                constructor({ additionalData: e, maxLogLevel: t, secureFields: r }) {
                    ((this.maxLogLevel = t), (this.secureFields = r), (this.additionalData = e));
                }
                formatMessage(e, t, r = {}, s) {
                    let i,
                        a = String(t instanceof Error && t.stack ? t.stack : t),
                        u = (0, n.A)({ ...this.additionalData, ...r });
                    return (Object.keys(u).length && (i = this.obfuscateData(u)), s) ? `${a} ${o(i)}` : [a, i];
                }
                obfuscateData(e) {
                    if (this.secureFields?.length) for (let t of this.secureFields) void 0 !== (0, s.A)(e, t) && (0, i.A)(e, t, a());
                    return e;
                }
            }
        },
        70411: (e, t, r) => {
            'use strict';
            r.d(t, { A: () => a });
            var o = r(47256),
                s = r(86867),
                i = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
                n = /^\w*$/;
            let a = function (e, t) {
                if ((0, o.A)(e)) return !1;
                var r = typeof e;
                return !!('number' == r || 'symbol' == r || 'boolean' == r || null == e || (0, s.A)(e)) || n.test(e) || !i.test(e) || (null != t && e in Object(t));
            };
        },
        71e3: (e, t, r) => {
            'use strict';
            function o(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = arguments[t];
                    for (var o in r) e[o] = r[o];
                }
                return e;
            }
            r.d(t, { pL: () => i });
            var s = (function e(t, r) {
                function s(e, s, i) {
                    if ('undefined' != typeof document) {
                        ('number' == typeof (i = o({}, r, i)).expires && (i.expires = new Date(Date.now() + 864e5 * i.expires)),
                            i.expires && (i.expires = i.expires.toUTCString()),
                            (e = encodeURIComponent(e)
                                .replace(/%(2[346B]|5E|60|7C)/g, decodeURIComponent)
                                .replace(/[()]/g, escape)));
                        var n = '';
                        for (var a in i) i[a] && ((n += '; ' + a), !0 !== i[a] && (n += '=' + i[a].split(';')[0]));
                        return (document.cookie = e + '=' + t.write(s, e) + n);
                    }
                }
                return Object.create(
                    {
                        set: s,
                        get: function (e) {
                            if ('undefined' != typeof document && (!arguments.length || e)) {
                                for (var r = document.cookie ? document.cookie.split('; ') : [], o = {}, s = 0; s < r.length; s++) {
                                    var i = r[s].split('='),
                                        n = i.slice(1).join('=');
                                    try {
                                        var a = decodeURIComponent(i[0]);
                                        if (((o[a] = t.read(n, a)), e === a)) break;
                                    } catch (e) {}
                                }
                                return e ? o[e] : o;
                            }
                        },
                        remove: function (e, t) {
                            s(e, '', o({}, t, { expires: -1 }));
                        },
                        withAttributes: function (t) {
                            return e(this.converter, o({}, this.attributes, t));
                        },
                        withConverter: function (t) {
                            return e(o({}, this.converter, t), this.attributes);
                        },
                    },
                    { attributes: { value: Object.freeze(r) }, converter: { value: Object.freeze(t) } },
                );
            })(
                {
                    read: function (e) {
                        return ('"' === e[0] && (e = e.slice(1, -1)), e.replace(/(%[\dA-F]{2})+/gi, decodeURIComponent));
                    },
                    write: function (e) {
                        return encodeURIComponent(e).replace(/%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g, decodeURIComponent);
                    },
                },
                { path: '/' },
            );
            let i = (e) => {
                if (!(typeof window > 'u')) return s.get(e);
            };
        },
        74991: (e, t, r) => {
            'use strict';
            r.d(t, { Ay: () => T });
            var o = r(51678),
                s = r(50239);
            let i = (e) => null !== e && 'object' == typeof e,
                n = (...e) => {
                    for (let t of e) if ((!i(t) || Array.isArray(t)) && void 0 !== t) throw TypeError('The `options` argument must be an object');
                    return u({}, ...e);
                },
                a = (e = {}, t = {}) => {
                    let r = new globalThis.Headers(e),
                        o = t instanceof globalThis.Headers;
                    for (let [e, s] of new globalThis.Headers(t).entries()) (o && 'undefined' === s) || void 0 === s ? r.delete(e) : r.set(e, s);
                    return r;
                },
                u = (...e) => {
                    let t = {},
                        r = {};
                    for (let o of e)
                        if (Array.isArray(o)) (Array.isArray(t) || (t = []), (t = [...t, ...o]));
                        else if (i(o)) {
                            for (let [e, r] of Object.entries(o)) (i(r) && e in t && (r = u(t[e], r)), (t = { ...t, [e]: r }));
                            i(o.headers) && ((r = a(r, o.headers)), (t.headers = r));
                        }
                    return t;
                },
                l = (() => {
                    let e = !1,
                        t = !1,
                        r = 'function' == typeof globalThis.Request;
                    return (
                        'function' == typeof globalThis.ReadableStream &&
                            r &&
                            (t = new globalThis.Request('https://a.com', {
                                body: new globalThis.ReadableStream(),
                                method: 'POST',
                                get duplex() {
                                    return ((e = !0), 'half');
                                },
                            }).headers.has('Content-Type')),
                        e && !t
                    );
                })(),
                h = 'function' == typeof globalThis.AbortController,
                c = 'function' == typeof globalThis.ReadableStream,
                p = 'function' == typeof globalThis.FormData,
                f = ['get', 'post', 'put', 'patch', 'head', 'delete'],
                d = { json: 'application/json', text: 'text/*', formData: 'multipart/form-data', arrayBuffer: '*/*', blob: '*/*' },
                b = Symbol('stop'),
                g = [413, 429, 503],
                y = {
                    limit: 2,
                    methods: ['get', 'put', 'head', 'delete', 'options', 'trace'],
                    statusCodes: [408, 413, 429, 500, 502, 503, 504],
                    afterStatusCodes: g,
                    maxRetryAfter: 1 / 0,
                    backoffLimit: 1 / 0,
                };
            async function v(e, t, r) {
                return new Promise((o, i) => {
                    let n = setTimeout(() => {
                        (t && t.abort(), i(new s.M(e)));
                    }, r.timeout);
                    r.fetch(e)
                        .then(o)
                        .catch(i)
                        .then(() => {
                            clearTimeout(n);
                        });
                });
            }
            let m = !!globalThis.DOMException;
            function w(e) {
                if (m) return new DOMException(e?.reason ?? 'The operation was aborted.', 'AbortError');
                let t = Error(e?.reason ?? 'The operation was aborted.');
                return ((t.name = 'AbortError'), t);
            }
            async function _(e, { signal: t }) {
                return new Promise((r, o) => {
                    if (t) {
                        if (t.aborted) return void o(w(t));
                        t.addEventListener('abort', s, { once: !0 });
                    }
                    function s() {
                        (o(w(t)), clearTimeout(i));
                    }
                    let i = setTimeout(() => {
                        (t?.removeEventListener('abort', s), r());
                    }, e);
                });
            }
            class R {
                static create(e, t) {
                    let r = new R(e, t),
                        s = async () => {
                            if (r._options.timeout > 0x7fffffff) throw RangeError('The `timeout` option cannot be greater than 2147483647');
                            await Promise.resolve();
                            let e = await r._fetch();
                            for (let t of r._options.hooks.afterResponse) {
                                let o = await t(r.request, r._options, r._decorateResponse(e.clone()));
                                o instanceof globalThis.Response && (e = o);
                            }
                            if ((r._decorateResponse(e), !e.ok && r._options.throwHttpErrors)) {
                                let t = new o.H(e, r.request, r._options);
                                for (let e of r._options.hooks.beforeError) t = await e(t);
                                throw t;
                            }
                            if (r._options.onDownloadProgress) {
                                if ('function' != typeof r._options.onDownloadProgress) throw TypeError('The `onDownloadProgress` option must be a function');
                                if (!c) throw Error('Streams are not supported in your environment. `ReadableStream` is missing.');
                                return r._stream(e.clone(), r._options.onDownloadProgress);
                            }
                            return e;
                        },
                        i = r._options.retry.methods.includes(r.request.method.toLowerCase()) ? r._retry(s) : s();
                    for (let [e, o] of Object.entries(d))
                        i[e] = async () => {
                            r.request.headers.set('accept', r.request.headers.get('accept') || o);
                            let s = (await i).clone();
                            if ('json' === e) {
                                if (204 === s.status || 0 === (await s.clone().arrayBuffer()).byteLength) return '';
                                if (t.parseJson) return t.parseJson(await s.text());
                            }
                            return s[e]();
                        };
                    return i;
                }
                constructor(e, t = {}) {
                    if (
                        (Object.defineProperty(this, 'request', { enumerable: !0, configurable: !0, writable: !0, value: void 0 }),
                        Object.defineProperty(this, 'abortController', { enumerable: !0, configurable: !0, writable: !0, value: void 0 }),
                        Object.defineProperty(this, '_retryCount', { enumerable: !0, configurable: !0, writable: !0, value: 0 }),
                        Object.defineProperty(this, '_input', { enumerable: !0, configurable: !0, writable: !0, value: void 0 }),
                        Object.defineProperty(this, '_options', { enumerable: !0, configurable: !0, writable: !0, value: void 0 }),
                        (this._input = e),
                        (this._options = {
                            credentials: this._input.credentials || 'same-origin',
                            ...t,
                            headers: a(this._input.headers, t.headers),
                            hooks: u({ beforeRequest: [], beforeRetry: [], beforeError: [], afterResponse: [] }, t.hooks),
                            method: ((e) => (f.includes(e) ? e.toUpperCase() : e))(t.method ?? this._input.method),
                            prefixUrl: String(t.prefixUrl || ''),
                            retry: ((e = {}) => {
                                if ('number' == typeof e) return { ...y, limit: e };
                                if (e.methods && !Array.isArray(e.methods)) throw Error('retry.methods must be an array');
                                if (e.statusCodes && !Array.isArray(e.statusCodes)) throw Error('retry.statusCodes must be an array');
                                return { ...y, ...e, afterStatusCodes: g };
                            })(t.retry),
                            throwHttpErrors: !1 !== t.throwHttpErrors,
                            timeout: void 0 === t.timeout ? 1e4 : t.timeout,
                            fetch: t.fetch ?? globalThis.fetch.bind(globalThis),
                        }),
                        'string' != typeof this._input && !(this._input instanceof URL || this._input instanceof globalThis.Request))
                    )
                        throw TypeError('`input` must be a string, URL, or Request');
                    if (this._options.prefixUrl && 'string' == typeof this._input) {
                        if (this._input.startsWith('/')) throw Error('`input` must not begin with a slash when using `prefixUrl`');
                        (this._options.prefixUrl.endsWith('/') || (this._options.prefixUrl += '/'), (this._input = this._options.prefixUrl + this._input));
                    }
                    if (h) {
                        if (((this.abortController = new globalThis.AbortController()), this._options.signal)) {
                            let e = this._options.signal;
                            this._options.signal.addEventListener('abort', () => {
                                this.abortController.abort(e.reason);
                            });
                        }
                        this._options.signal = this.abortController.signal;
                    }
                    if ((l && (this._options.duplex = 'half'), (this.request = new globalThis.Request(this._input, this._options)), this._options.searchParams)) {
                        let e =
                                'string' == typeof this._options.searchParams
                                    ? this._options.searchParams.replace(/^\?/, '')
                                    : new URLSearchParams(this._options.searchParams).toString(),
                            t = this.request.url.replace(/(?:\?.*?)?(?=#|$)/, '?' + e);
                        (((p && this._options.body instanceof globalThis.FormData) || this._options.body instanceof URLSearchParams) &&
                            !(this._options.headers && this._options.headers['content-type']) &&
                            this.request.headers.delete('content-type'),
                            (this.request = new globalThis.Request(new globalThis.Request(t, { ...this.request }), this._options)));
                    }
                    void 0 !== this._options.json &&
                        ((this._options.body = JSON.stringify(this._options.json)),
                        this.request.headers.set('content-type', this._options.headers.get('content-type') ?? 'application/json'),
                        (this.request = new globalThis.Request(this.request, { body: this._options.body })));
                }
                _calculateRetryDelay(e) {
                    if ((this._retryCount++, this._retryCount < this._options.retry.limit && !(e instanceof s.M))) {
                        if (e instanceof o.H) {
                            if (!this._options.retry.statusCodes.includes(e.response.status)) return 0;
                            let t = e.response.headers.get('Retry-After');
                            if (t && this._options.retry.afterStatusCodes.includes(e.response.status)) {
                                let e = Number(t);
                                return (Number.isNaN(e) ? (e = Date.parse(t) - Date.now()) : (e *= 1e3),
                                void 0 !== this._options.retry.maxRetryAfter && e > this._options.retry.maxRetryAfter)
                                    ? 0
                                    : e;
                            }
                            if (413 === e.response.status) return 0;
                        }
                        return Math.min(this._options.retry.backoffLimit, 0.3 * 2 ** (this._retryCount - 1) * 1e3);
                    }
                    return 0;
                }
                _decorateResponse(e) {
                    return (this._options.parseJson && (e.json = async () => this._options.parseJson(await e.text())), e);
                }
                async _retry(e) {
                    try {
                        return await e();
                    } catch (r) {
                        let t = Math.min(this._calculateRetryDelay(r), 0x7fffffff);
                        if (0 !== t && this._retryCount > 0) {
                            for (let e of (await _(t, { signal: this._options.signal }), this._options.hooks.beforeRetry))
                                if ((await e({ request: this.request, options: this._options, error: r, retryCount: this._retryCount })) === b) return;
                            return this._retry(e);
                        }
                        throw r;
                    }
                }
                async _fetch() {
                    for (let e of this._options.hooks.beforeRequest) {
                        let t = await e(this.request, this._options);
                        if (t instanceof Request) {
                            this.request = t;
                            break;
                        }
                        if (t instanceof Response) return t;
                    }
                    return !1 === this._options.timeout ? this._options.fetch(this.request.clone()) : v(this.request.clone(), this.abortController, this._options);
                }
                _stream(e, t) {
                    let r = Number(e.headers.get('content-length')) || 0,
                        o = 0;
                    return 204 === e.status
                        ? (t && t({ percent: 1, totalBytes: r, transferredBytes: o }, new Uint8Array()),
                          new globalThis.Response(null, { status: e.status, statusText: e.statusText, headers: e.headers }))
                        : new globalThis.Response(
                              new globalThis.ReadableStream({
                                  async start(s) {
                                      let i = e.body.getReader();
                                      async function n() {
                                          let { done: e, value: a } = await i.read();
                                          if (e) return void s.close();
                                          (t && ((o += a.byteLength), t({ percent: 0 === r ? 0 : o / r, transferredBytes: o, totalBytes: r }, a)),
                                              s.enqueue(a),
                                              await n());
                                      }
                                      (t && t({ percent: 0, transferredBytes: 0, totalBytes: r }, new Uint8Array()), await n());
                                  },
                              }),
                              { status: e.status, statusText: e.statusText, headers: e.headers },
                          );
                }
            }
            let A = (e) => {
                    let t = (t, r) => R.create(t, n(e, r));
                    for (let r of f) t[r] = (t, o) => R.create(t, n(e, o, { method: r }));
                    return ((t.create = (e) => A(n(e))), (t.extend = (t) => A(n(e, t))), (t.stop = b), t);
                },
                T = A();
        },
        77769: (e, t) => {
            (e.exports = function (e, t, o, s) {
                return JSON.stringify(e, r(t, s), o);
            }).getSerialize = r;
            function r(e, t) {
                var r = [],
                    o = [];
                return (
                    null == t &&
                        (t = function (e, t) {
                            return r[0] === t ? '[Circular ~]' : '[Circular ~.' + o.slice(0, r.indexOf(t)).join('.') + ']';
                        }),
                    function (s, i) {
                        if (r.length > 0) {
                            var n = r.indexOf(this);
                            (~n ? r.splice(n + 1) : r.push(this), ~n ? o.splice(n, 1 / 0, s) : o.push(s), ~r.indexOf(i) && (i = t.call(this, s, i)));
                        } else r.push(i);
                        return null == e ? i : e.call(this, s, i);
                    }
                );
            }
        },
        85172: (e, t, r) => {
            'use strict';
            r.d(t, { A: () => i });
            var o = r(86867),
                s = 1 / 0;
            let i = function (e) {
                if ('string' == typeof e || (0, o.A)(e)) return e;
                var t = e + '';
                return '0' == t && 1 / e == -s ? '-0' : t;
            };
        },
        87505: (e, t, r) => {
            'use strict';
            r.d(t, { A: () => n });
            var o = r(98761),
                s = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
                i = /\\(\\)?/g;
            let n = (function (e) {
                var t = (0, o.A)(e, function (e) {
                        return (500 === r.size && r.clear(), e);
                    }),
                    r = t.cache;
                return t;
            })(function (e) {
                var t = [];
                return (
                    46 === e.charCodeAt(0) && t.push(''),
                    e.replace(s, function (e, r, o, s) {
                        t.push(o ? s.replace(i, '$1') : r || e);
                    }),
                    t
                );
            });
        },
        88249: (e) => {
            function t() {}
            ((t.prototype = {
                on: function (e, t, r) {
                    var o = this.e || (this.e = {});
                    return ((o[e] || (o[e] = [])).push({ fn: t, ctx: r }), this);
                },
                once: function (e, t, r) {
                    var o = this;
                    function s() {
                        (o.off(e, s), t.apply(r, arguments));
                    }
                    return ((s._ = t), this.on(e, s, r));
                },
                emit: function (e) {
                    for (var t = [].slice.call(arguments, 1), r = ((this.e || (this.e = {}))[e] || []).slice(), o = 0, s = r.length; o < s; o++)
                        r[o].fn.apply(r[o].ctx, t);
                    return this;
                },
                off: function (e, t) {
                    var r = this.e || (this.e = {}),
                        o = r[e],
                        s = [];
                    if (o && t) for (var i = 0, n = o.length; i < n; i++) o[i].fn !== t && o[i].fn._ !== t && s.push(o[i]);
                    return (s.length ? (r[e] = s) : delete r[e], this);
                },
            }),
                (e.exports = t),
                (e.exports.TinyEmitter = t));
        },
        97608: (e, t, r) => {
            'use strict';
            r.d(t, { A: () => a });
            var o = r(47256),
                s = r(70411),
                i = r(87505),
                n = r(85599);
            let a = function (e, t) {
                return (0, o.A)(e) ? e : (0, s.A)(e, t) ? [e] : (0, i.A)((0, n.A)(e));
            };
        },
        98761: (e, t, r) => {
            'use strict';
            r.d(t, { A: () => i });
            var o = r(33661);
            function s(e, t) {
                if ('function' != typeof e || (null != t && 'function' != typeof t)) throw TypeError('Expected a function');
                var r = function () {
                    var o = arguments,
                        s = t ? t.apply(this, o) : o[0],
                        i = r.cache;
                    if (i.has(s)) return i.get(s);
                    var n = e.apply(this, o);
                    return ((r.cache = i.set(s, n) || i), n);
                };
                return ((r.cache = new (s.Cache || o.A)()), r);
            }
            s.Cache = o.A;
            let i = s;
        },
        99604: (e, t, r) => {
            'use strict';
            var o;
            (r.d(t, { Q: () => s, c: () => o }),
                (function (e) {
                    ((e[(e.ERROR = 10)] = 'ERROR'),
                        (e[(e.WARNING = 20)] = 'WARNING'),
                        (e[(e.INFO = 30)] = 'INFO'),
                        (e[(e.DEBUG = 40)] = 'DEBUG'),
                        (e[(e.TRACE = 50)] = 'TRACE'));
                })(o || (o = {})));
            let s = { [o.ERROR]: 'error', [o.WARNING]: 'warn', [o.INFO]: 'info', [o.DEBUG]: 'debug', [o.TRACE]: 'trace' };
        },
    },
]);
