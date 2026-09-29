'use strict';
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [3199, 4893],
    {
        19878: (e, t, n) => {
            (Object.defineProperty(t, '__esModule', { value: !0 }),
                !(function (e, t) {
                    for (var n in t) Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
                })(t, {
                    formatUrl: function () {
                        return a;
                    },
                    formatWithValidation: function () {
                        return i;
                    },
                    urlObjectKeys: function () {
                        return u;
                    },
                }));
            let r = n(79476)._(n(51526)),
                o = /https?|ftp|gopher|file/;
            function a(e) {
                let { auth: t, hostname: n } = e,
                    a = e.protocol || '',
                    u = e.pathname || '',
                    i = e.hash || '',
                    l = e.query || '',
                    c = !1;
                ((t = t ? encodeURIComponent(t).replace(/%3A/i, ':') + '@' : ''),
                    e.host ? (c = t + e.host) : n && ((c = t + (~n.indexOf(':') ? '[' + n + ']' : n)), e.port && (c += ':' + e.port)),
                    l && 'object' == typeof l && (l = String(r.urlQueryToSearchParams(l))));
                let s = e.search || (l && '?' + l) || '';
                return (
                    a && !a.endsWith(':') && (a += ':'),
                    e.slashes || ((!a || o.test(a)) && !1 !== c) ? ((c = '//' + (c || '')), u && '/' !== u[0] && (u = '/' + u)) : c || (c = ''),
                    i && '#' !== i[0] && (i = '#' + i),
                    s && '?' !== s[0] && (s = '?' + s),
                    '' + a + c + (u = u.replace(/[?#]/g, encodeURIComponent)) + (s = s.replace('#', '%23')) + i
                );
            }
            let u = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];
            function i(e) {
                return a(e);
            }
        },
        39407: (e, t, n) => {
            n.d(t, { A: () => c });
            var r = n(30782),
                o = n(55178),
                a = n(36260),
                u = n(60900);
            function i(e) {
                var t = (0, u.A)(),
                    n = t.formatMessage,
                    r = t.textComponent,
                    a = void 0 === r ? o.Fragment : r,
                    i = e.id,
                    l = e.description,
                    c = e.defaultMessage,
                    s = e.values,
                    f = e.children,
                    p = e.tagName,
                    d = void 0 === p ? a : p,
                    m = n({ id: i, description: l, defaultMessage: c }, s, { ignoreTag: e.ignoreTag });
                return 'function' == typeof f ? f(Array.isArray(m) ? m : [m]) : d ? o.createElement(d, null, m) : o.createElement(o.Fragment, null, m);
            }
            i.displayName = 'FormattedMessage';
            var l = o.memo(i, function (e, t) {
                var n = e.values,
                    o = (0, r.__rest)(e, ['values']),
                    u = t.values,
                    i = (0, r.__rest)(t, ['values']);
                return (0, a.bN)(u, n) && (0, a.bN)(o, i);
            });
            l.displayName = 'MemoizedFormattedMessage';
            let c = l;
        },
        43048: (e, t) => {
            (Object.defineProperty(t, '__esModule', { value: !0 }),
                !(function (e, t) {
                    for (var n in t) Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
                })(t, {
                    DecodeError: function () {
                        return m;
                    },
                    MiddlewareNotFoundError: function () {
                        return b;
                    },
                    MissingStaticPage: function () {
                        return h;
                    },
                    NormalizeError: function () {
                        return g;
                    },
                    PageNotFoundError: function () {
                        return y;
                    },
                    SP: function () {
                        return p;
                    },
                    ST: function () {
                        return d;
                    },
                    WEB_VITALS: function () {
                        return n;
                    },
                    execOnce: function () {
                        return r;
                    },
                    getDisplayName: function () {
                        return l;
                    },
                    getLocationOrigin: function () {
                        return u;
                    },
                    getURL: function () {
                        return i;
                    },
                    isAbsoluteUrl: function () {
                        return a;
                    },
                    isResSent: function () {
                        return c;
                    },
                    loadGetInitialProps: function () {
                        return f;
                    },
                    normalizeRepeatedSlashes: function () {
                        return s;
                    },
                    stringifyError: function () {
                        return v;
                    },
                }));
            let n = ['CLS', 'FCP', 'FID', 'INP', 'LCP', 'TTFB'];
            function r(e) {
                let t,
                    n = !1;
                return function () {
                    for (var r = arguments.length, o = Array(r), a = 0; a < r; a++) o[a] = arguments[a];
                    return (n || ((n = !0), (t = e(...o))), t);
                };
            }
            let o = /^[a-zA-Z][a-zA-Z\d+\-.]*?:/,
                a = (e) => o.test(e);
            function u() {
                let { protocol: e, hostname: t, port: n } = window.location;
                return e + '//' + t + (n ? ':' + n : '');
            }
            function i() {
                let { href: e } = window.location,
                    t = u();
                return e.substring(t.length);
            }
            function l(e) {
                return 'string' == typeof e ? e : e.displayName || e.name || 'Unknown';
            }
            function c(e) {
                return e.finished || e.headersSent;
            }
            function s(e) {
                let t = e.split('?');
                return t[0].replace(/\\/g, '/').replace(/\/\/+/g, '/') + (t[1] ? '?' + t.slice(1).join('?') : '');
            }
            async function f(e, t) {
                let n = t.res || (t.ctx && t.ctx.res);
                if (!e.getInitialProps) return t.ctx && t.Component ? { pageProps: await f(t.Component, t.ctx) } : {};
                let r = await e.getInitialProps(t);
                if (n && c(n)) return r;
                if (!r)
                    throw Object.defineProperty(
                        Error('"' + l(e) + '.getInitialProps()" should resolve to an object. But found "' + r + '" instead.'),
                        '__NEXT_ERROR_CODE',
                        { value: 'E394', enumerable: !1, configurable: !0 },
                    );
                return r;
            }
            let p = 'undefined' != typeof performance,
                d = p && ['mark', 'measure', 'getEntriesByName'].every((e) => 'function' == typeof performance[e]);
            class m extends Error {}
            class g extends Error {}
            class y extends Error {
                constructor(e) {
                    (super(), (this.code = 'ENOENT'), (this.name = 'PageNotFoundError'), (this.message = 'Cannot find module for page: ' + e));
                }
            }
            class h extends Error {
                constructor(e, t) {
                    (super(), (this.message = 'Failed to load static file for page: ' + e + ' ' + t));
                }
            }
            class b extends Error {
                constructor() {
                    (super(), (this.code = 'ENOENT'), (this.message = 'Cannot find the middleware module'));
                }
            }
            function v(e) {
                return JSON.stringify({ message: e.message, stack: e.stack });
            }
        },
        51526: (e, t) => {
            function n(e) {
                let t = {};
                for (let [n, r] of e.entries()) {
                    let e = t[n];
                    void 0 === e ? (t[n] = r) : Array.isArray(e) ? e.push(r) : (t[n] = [e, r]);
                }
                return t;
            }
            function r(e) {
                return 'string' == typeof e ? e : ('number' != typeof e || isNaN(e)) && 'boolean' != typeof e ? '' : String(e);
            }
            function o(e) {
                let t = new URLSearchParams();
                for (let [n, o] of Object.entries(e))
                    if (Array.isArray(o)) for (let e of o) t.append(n, r(e));
                    else t.set(n, r(o));
                return t;
            }
            function a(e) {
                for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
                for (let t of n) {
                    for (let n of t.keys()) e.delete(n);
                    for (let [n, r] of t.entries()) e.append(n, r);
                }
                return e;
            }
            (Object.defineProperty(t, '__esModule', { value: !0 }),
                !(function (e, t) {
                    for (var n in t) Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
                })(t, {
                    assign: function () {
                        return a;
                    },
                    searchParamsToUrlQuery: function () {
                        return n;
                    },
                    urlQueryToSearchParams: function () {
                        return o;
                    },
                }));
        },
        59611: (e, t, n) => {
            (Object.defineProperty(t, '__esModule', { value: !0 }),
                !(function (e, t) {
                    for (var n in t) Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
                })(t, {
                    default: function () {
                        return y;
                    },
                    useLinkStatus: function () {
                        return b;
                    },
                }));
            let r = n(79476),
                o = n(32290),
                a = r._(n(55178)),
                u = n(19878),
                i = n(36336),
                l = n(83655),
                c = n(84179),
                s = n(43048),
                f = n(35018);
            n(61165);
            let p = n(77787),
                d = n(61215),
                m = n(29135);
            function g(e) {
                return 'string' == typeof e ? e : (0, u.formatUrl)(e);
            }
            function y(e) {
                let t,
                    n,
                    r,
                    [u, y] = (0, a.useOptimistic)(p.IDLE_LINK_STATUS),
                    b = (0, a.useRef)(null),
                    {
                        href: v,
                        as: P,
                        children: E,
                        prefetch: O = null,
                        passHref: _,
                        replace: j,
                        shallow: M,
                        scroll: S,
                        onClick: k,
                        onMouseEnter: N,
                        onTouchStart: A,
                        legacyBehavior: C = !1,
                        onNavigate: T,
                        ref: x,
                        unstable_dynamicOnHover: F,
                        ...U
                    } = e;
                ((t = E), C && ('string' == typeof t || 'number' == typeof t) && (t = (0, o.jsx)('a', { children: t })));
                let I = a.default.useContext(i.AppRouterContext),
                    R = !1 !== O,
                    D = null === O || 'auto' === O ? l.PrefetchKind.AUTO : l.PrefetchKind.FULL,
                    { href: L, as: w } = a.default.useMemo(() => {
                        let e = g(v);
                        return { href: e, as: P ? g(P) : e };
                    }, [v, P]);
                C && (n = a.default.Children.only(t));
                let B = C ? n && 'object' == typeof n && n.ref : x,
                    K = a.default.useCallback(
                        (e) => (
                            null !== I && (b.current = (0, p.mountLinkInstance)(e, L, I, D, R, y)),
                            () => {
                                (b.current && ((0, p.unmountLinkForCurrentNavigation)(b.current), (b.current = null)), (0, p.unmountPrefetchableInstance)(e));
                            }
                        ),
                        [R, L, I, D, y],
                    ),
                    z = {
                        ref: (0, c.useMergedRef)(K, B),
                        onClick(e) {
                            (C || 'function' != typeof k || k(e),
                                C && n.props && 'function' == typeof n.props.onClick && n.props.onClick(e),
                                I &&
                                    (e.defaultPrevented ||
                                        (function (e, t, n, r, o, u, i) {
                                            let { nodeName: l } = e.currentTarget;
                                            if (!(
                                                ('A' === l.toUpperCase() &&
                                                    (function (e) {
                                                        let t = e.currentTarget.getAttribute('target');
                                                        return (
                                                            (t && '_self' !== t) ||
                                                            e.metaKey ||
                                                            e.ctrlKey ||
                                                            e.shiftKey ||
                                                            e.altKey ||
                                                            (e.nativeEvent && 2 === e.nativeEvent.which)
                                                        );
                                                    })(e)) ||
                                                e.currentTarget.hasAttribute('download')
                                            )) {
                                                if (!(0, d.isLocalURL)(t)) {
                                                    o && (e.preventDefault(), location.replace(t));
                                                    return;
                                                }
                                                if ((e.preventDefault(), i)) {
                                                    let e = !1;
                                                    if (
                                                        (i({
                                                            preventDefault: () => {
                                                                e = !0;
                                                            },
                                                        }),
                                                        e)
                                                    )
                                                        return;
                                                }
                                                a.default.startTransition(() => {
                                                    (0, m.dispatchNavigateAction)(n || t, o ? 'replace' : 'push', null == u || u, r.current);
                                                });
                                            }
                                        })(e, L, w, b, j, S, T)));
                        },
                        onMouseEnter(e) {
                            (C || 'function' != typeof N || N(e),
                                C && n.props && 'function' == typeof n.props.onMouseEnter && n.props.onMouseEnter(e),
                                I && R && (0, p.onNavigationIntent)(e.currentTarget, !0 === F));
                        },
                        onTouchStart: function (e) {
                            (C || 'function' != typeof A || A(e),
                                C && n.props && 'function' == typeof n.props.onTouchStart && n.props.onTouchStart(e),
                                I && R && (0, p.onNavigationIntent)(e.currentTarget, !0 === F));
                        },
                    };
                return (
                    (0, s.isAbsoluteUrl)(w) ? (z.href = w) : (C && !_ && ('a' !== n.type || 'href' in n.props)) || (z.href = (0, f.addBasePath)(w)),
                    (r = C ? a.default.cloneElement(n, z) : (0, o.jsx)('a', { ...U, ...z, children: t })),
                    (0, o.jsx)(h.Provider, { value: u, children: r })
                );
            }
            n(65285);
            let h = (0, a.createContext)(p.IDLE_LINK_STATUS),
                b = () => (0, a.useContext)(h);
            ('function' == typeof t.default || ('object' == typeof t.default && null !== t.default)) &&
                void 0 === t.default.__esModule &&
                (Object.defineProperty(t.default, '__esModule', { value: !0 }), Object.assign(t.default, t), (e.exports = t.default));
        },
        61215: (e, t, n) => {
            (Object.defineProperty(t, '__esModule', { value: !0 }),
                Object.defineProperty(t, 'isLocalURL', {
                    enumerable: !0,
                    get: function () {
                        return a;
                    },
                }));
            let r = n(43048),
                o = n(96817);
            function a(e) {
                if (!(0, r.isAbsoluteUrl)(e)) return !0;
                try {
                    let t = (0, r.getLocationOrigin)(),
                        n = new URL(e, t);
                    return n.origin === t && (0, o.hasBasePath)(n.pathname);
                } catch (e) {
                    return !1;
                }
            }
        },
        65285: (e, t) => {
            (Object.defineProperty(t, '__esModule', { value: !0 }),
                Object.defineProperty(t, 'errorOnce', {
                    enumerable: !0,
                    get: function () {
                        return n;
                    },
                }));
            let n = (e) => {};
        },
        78061: (e, t, n) => {
            n.d(t, { Jt: () => a, TF: () => i, hZ: () => u });
            var r = function () {
                return (r =
                    Object.assign ||
                    function (e) {
                        for (var t, n = 1, r = arguments.length; n < r; n++)
                            for (var o in (t = arguments[n])) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                        return e;
                    }).apply(this, arguments);
            };
            function o(e, t) {
                if (!t) return '';
                var n = '; ' + e;
                return !0 === t ? n : n + '=' + t;
            }
            function a(e) {
                return (function (e) {
                    for (var t = {}, n = e ? e.split('; ') : [], r = 0; r < n.length; r++) {
                        var o = n[r].split('='),
                            a = o.slice(1).join('=');
                        '"' === a[0] && (a = a.slice(1, -1));
                        try {
                            t[decodeURIComponent(o[0])] = a.replace(/(%[\dA-F]{2})+/gi, decodeURIComponent);
                        } catch (e) {}
                    }
                    return t;
                })(document.cookie)[e];
            }
            function u(e, t, n) {
                var a;
                document.cookie =
                    ((a = r({ path: '/' }, n)),
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
                                o('Expires', e.expires ? e.expires.toUTCString() : '') +
                                o('Domain', e.domain) +
                                o('Path', e.path) +
                                o('Secure', e.secure) +
                                o('SameSite', e.sameSite)
                            );
                        })(a));
            }
            function i(e, t) {
                u(e, '', r(r({}, t), { expires: -1 }));
            }
        },
        84179: (e, t, n) => {
            (Object.defineProperty(t, '__esModule', { value: !0 }),
                Object.defineProperty(t, 'useMergedRef', {
                    enumerable: !0,
                    get: function () {
                        return o;
                    },
                }));
            let r = n(55178);
            function o(e, t) {
                let n = (0, r.useRef)(null),
                    o = (0, r.useRef)(null);
                return (0, r.useCallback)(
                    (r) => {
                        if (null === r) {
                            let e = n.current;
                            e && ((n.current = null), e());
                            let t = o.current;
                            t && ((o.current = null), t());
                        } else (e && (n.current = a(e, r)), t && (o.current = a(t, r)));
                    },
                    [e, t],
                );
            }
            function a(e, t) {
                if ('function' != typeof e)
                    return (
                        (e.current = t),
                        () => {
                            e.current = null;
                        }
                    );
                {
                    let n = e(t);
                    return 'function' == typeof n ? n : () => e(null);
                }
            }
            ('function' == typeof t.default || ('object' == typeof t.default && null !== t.default)) &&
                void 0 === t.default.__esModule &&
                (Object.defineProperty(t.default, '__esModule', { value: !0 }), Object.assign(t.default, t), (e.exports = t.default));
        },
        90153: (e, t, n) => {
            ((t.w5 = function (e, t) {
                let {
                        skeletonId: n = '',
                        mainObjectType: a = o.DomainObjectType.NonApplicable,
                        mainObjectId: u = '',
                        tabId: i = '',
                        tabPos: l = 0,
                        isTabSelectedByDefault: c = !1,
                        viewUuid: s = '',
                    } = t,
                    f = (0, r.makeMetaParams)(1),
                    p = { ...t, skeletonId: n, mainObjectType: a, mainObjectId: u, tabId: i, tabPos: l, isTabSelectedByDefault: c, viewUuid: s, _meta: f };
                e.trackEvent('Screen.Opened', p);
            }),
                (t.Fn = function (e, t) {
                    let {
                            pageStyle: n = o.PageStyles.Fullscreen,
                            pagePlacement: a = o.PagePlacements.Fullscreen,
                            skeletonId: u = '',
                            mainObjectType: i = o.DomainObjectType.NonApplicable,
                            mainObjectId: l = '',
                            tabId: c = '',
                            tabPos: s = 0,
                            isTabSelectedByDefault: f = !1,
                            viewUuid: p = '',
                        } = t,
                        d = (0, r.makeMetaParams)(3),
                        m = {
                            ...t,
                            pageStyle: n,
                            pagePlacement: a,
                            skeletonId: u,
                            mainObjectType: i,
                            mainObjectId: l,
                            tabId: c,
                            tabPos: s,
                            isTabSelectedByDefault: f,
                            viewUuid: p,
                            _meta: d,
                        };
                    e.trackEvent('Screen.Opened', m);
                }),
                (t.XB = function (e, t) {
                    let {
                            skeletonId: n = '',
                            mainObjectType: a = o.DomainObjectType.NonApplicable,
                            mainObjectId: u = '',
                            tabId: i = '',
                            tabPos: l = 0,
                            isTabSelectedByDefault: c = !1,
                        } = t,
                        s = (0, r.makeMetaParams)(1),
                        f = { ...t, skeletonId: n, mainObjectType: a, mainObjectId: u, tabId: i, tabPos: l, isTabSelectedByDefault: c, _meta: s };
                    e.trackEvent('Screen.Closed', f);
                }),
                (t.Ig = function (e, t) {
                    let {
                            pageStyle: n = o.PageStyles.Fullscreen,
                            pagePlacement: a = o.PagePlacements.Fullscreen,
                            skeletonId: u = '',
                            mainObjectType: i = o.DomainObjectType.NonApplicable,
                            mainObjectId: l = '',
                            tabId: c = '',
                            tabPos: s = 0,
                            isTabSelectedByDefault: f = !1,
                        } = t,
                        p = (0, r.makeMetaParams)(3),
                        d = {
                            ...t,
                            pageStyle: n,
                            pagePlacement: a,
                            skeletonId: u,
                            mainObjectType: i,
                            mainObjectId: l,
                            tabId: c,
                            tabPos: s,
                            isTabSelectedByDefault: f,
                            _meta: p,
                        };
                    e.trackEvent('Screen.Closed', d);
                }),
                (t.PO = function (e, t) {
                    let {
                            pageStyle: n = o.PageStyles.Fullscreen,
                            pagePlacement: a = o.PagePlacements.Fullscreen,
                            skeletonId: u = '',
                            mainObjectType: i = o.DomainObjectType.NonApplicable,
                            mainObjectId: l = '',
                            tabId: c = '',
                            tabPos: s = 0,
                            isTabSelectedByDefault: f = !1,
                            viewUuid: p = '',
                        } = t,
                        d = (0, r.makeMetaParams)(4),
                        m = {
                            ...t,
                            pageStyle: n,
                            pagePlacement: a,
                            skeletonId: u,
                            mainObjectType: i,
                            mainObjectId: l,
                            tabId: c,
                            tabPos: s,
                            isTabSelectedByDefault: f,
                            viewUuid: p,
                            _meta: d,
                        };
                    e.trackEvent('Screen.Closed', m);
                }),
                (t.e7 = function (e, t) {
                    let {
                            skeletonId: n = '',
                            mainObjectType: a = o.DomainObjectType.NonApplicable,
                            mainObjectId: u = '',
                            tabId: i = '',
                            tabPos: l = 0,
                            isTabSelectedByDefault: c = !1,
                        } = t,
                        s = (0, r.makeMetaParams)(1),
                        f = { ...t, skeletonId: n, mainObjectType: a, mainObjectId: u, tabId: i, tabPos: l, isTabSelectedByDefault: c, _meta: s };
                    e.trackEvent('Screen.Started', f);
                }),
                (t.Mu = function (e, t) {
                    let {
                            skeletonId: n = '',
                            mainObjectType: a = o.DomainObjectType.NonApplicable,
                            mainObjectId: u = '',
                            tabId: i = '',
                            tabPos: l = 0,
                            isTabSelectedByDefault: c = !1,
                        } = t,
                        s = (0, r.makeMetaParams)(1),
                        f = { ...t, skeletonId: n, mainObjectType: a, mainObjectId: u, tabId: i, tabPos: l, isTabSelectedByDefault: c, _meta: s };
                    e.trackEvent('Screen.Navigated', f);
                }),
                (t.ID = function (e, t) {
                    let {
                            pageStyle: n = o.PageStyles.Fullscreen,
                            pagePlacement: a = o.PagePlacements.Fullscreen,
                            skeletonId: u = '',
                            mainObjectType: i = o.DomainObjectType.NonApplicable,
                            mainObjectId: l = '',
                            tabId: c = '',
                            tabPos: s = 0,
                            isTabSelectedByDefault: f = !1,
                            deepLink: p = '',
                        } = t,
                        d = (0, r.makeMetaParams)(4),
                        m = {
                            ...t,
                            pageStyle: n,
                            pagePlacement: a,
                            skeletonId: u,
                            mainObjectType: i,
                            mainObjectId: l,
                            tabId: c,
                            tabPos: s,
                            isTabSelectedByDefault: f,
                            deepLink: p,
                            _meta: d,
                        };
                    e.trackEvent('Screen.Navigated', m);
                }),
                (t.bv = function (e, t) {
                    let {
                            skeletonId: n = '',
                            mainObjectType: a = o.DomainObjectType.NonApplicable,
                            mainObjectId: u = '',
                            tabId: i = '',
                            tabPos: l = 0,
                            isTabSelectedByDefault: c = !1,
                        } = t,
                        s = (0, r.makeMetaParams)(1),
                        f = { ...t, skeletonId: n, mainObjectType: a, mainObjectId: u, tabId: i, tabPos: l, isTabSelectedByDefault: c, _meta: s };
                    e.trackEvent('Screen.ActionPerformed', f);
                }),
                (t.z5 = function (e, t) {
                    let {
                            pageStyle: n = o.PageStyles.Fullscreen,
                            pagePlacement: a = o.PagePlacements.Fullscreen,
                            skeletonId: u = '',
                            mainObjectType: i = o.DomainObjectType.NonApplicable,
                            mainObjectId: l = '',
                        } = t,
                        c = (0, r.makeMetaParams)(1),
                        s = { ...t, pageStyle: n, pagePlacement: a, skeletonId: u, mainObjectType: i, mainObjectId: l, _meta: c };
                    e.trackEvent('Screen.ErrorRaised', s);
                }));
            let r = n(92871),
                o = n(99923);
        },
        92871: (e, t) => {
            var n;
            (Object.defineProperty(t, '__esModule', { value: !0 }),
                (t.MiniappConfig = void 0),
                (t.makeMetaParams = function (e) {
                    return { event: { version: e } };
                }),
                (t.createEvgenAnalytics = function (e, t, n) {
                    return {
                        trackEvent: (r, o) => {
                            let a = { ...o, ...t.getGlobalParams(), ...n.getPlatformParams() };
                            e.trackEvent(r, a);
                        },
                    };
                }),
                !(function (e) {
                    ((e.Music = 'music'), (e.NotApplicable = 'not_applicable'));
                })(n || (t.MiniappConfig = n = {})));
        },
    },
]);
