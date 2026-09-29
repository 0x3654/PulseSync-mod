(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [3266, 9689],
    {
        3266: (e, t, r) => {
            'use strict';
            r.d(t, { S: () => x });
            var i,
                a,
                n = r(30782),
                s = r(63670);
            function l(e, t) {
                var r = t && t.cache ? t.cache : m,
                    i = t && t.serializer ? t.serializer : u;
                return (
                    t && t.strategy
                        ? t.strategy
                        : function (e, t) {
                              var r,
                                  i,
                                  a = 1 === e.length ? o : c;
                              return ((r = t.cache.create()), (i = t.serializer), a.bind(this, e, r, i));
                          }
                )(e, { cache: r, serializer: i });
            }
            function o(e, t, r, i) {
                var a = null == i || 'number' == typeof i || 'boolean' == typeof i ? i : r(i),
                    n = t.get(a);
                return (void 0 === n && ((n = e.call(this, i)), t.set(a, n)), n);
            }
            function c(e, t, r) {
                var i = Array.prototype.slice.call(arguments, 3),
                    a = r(i),
                    n = t.get(a);
                return (void 0 === n && ((n = e.apply(this, i)), t.set(a, n)), n);
            }
            var u = function () {
                return JSON.stringify(arguments);
            };
            function d() {
                this.cache = Object.create(null);
            }
            ((d.prototype.get = function (e) {
                return this.cache[e];
            }),
                (d.prototype.set = function (e, t) {
                    this.cache[e] = t;
                }));
            var m = {
                    create: function () {
                        return new d();
                    },
                },
                p = {
                    variadic: function (e, t) {
                        var r, i;
                        return ((r = t.cache.create()), (i = t.serializer), c.bind(this, e, r, i));
                    },
                    monadic: function (e, t) {
                        var r, i;
                        return ((r = t.cache.create()), (i = t.serializer), o.bind(this, e, r, i));
                    },
                };
            !(function (e) {
                ((e.MISSING_VALUE = 'MISSING_VALUE'), (e.INVALID_VALUE = 'INVALID_VALUE'), (e.MISSING_INTL_API = 'MISSING_INTL_API'));
            })(i || (i = {}));
            var _ = (function (e) {
                    function t(t, r, i) {
                        var a = e.call(this, t) || this;
                        return ((a.code = r), (a.originalMessage = i), a);
                    }
                    return (
                        (0, n.__extends)(t, e),
                        (t.prototype.toString = function () {
                            return '[formatjs Error: '.concat(this.code, '] ').concat(this.message);
                        }),
                        t
                    );
                })(Error),
                g = (function (e) {
                    function t(t, r, a, n) {
                        return (
                            e.call(
                                this,
                                'Invalid values for "'.concat(t, '": "').concat(r, '". Options are "').concat(Object.keys(a).join('", "'), '"'),
                                i.INVALID_VALUE,
                                n,
                            ) || this
                        );
                    }
                    return ((0, n.__extends)(t, e), t);
                })(_),
                h = (function (e) {
                    function t(t, r, a) {
                        return e.call(this, 'Value for "'.concat(t, '" must be of type ').concat(r), i.INVALID_VALUE, a) || this;
                    }
                    return ((0, n.__extends)(t, e), t);
                })(_),
                f = (function (e) {
                    function t(t, r) {
                        return (
                            e.call(this, 'The intl string context variable "'.concat(t, '" was not provided to the string "').concat(r, '"'), i.MISSING_VALUE, r) || this
                        );
                    }
                    return ((0, n.__extends)(t, e), t);
                })(_);
            function v(e) {
                return {
                    create: function () {
                        return {
                            get: function (t) {
                                return e[t];
                            },
                            set: function (t, r) {
                                e[t] = r;
                            },
                        };
                    },
                };
            }
            !(function (e) {
                ((e[(e.literal = 0)] = 'literal'), (e[(e.object = 1)] = 'object'));
            })(a || (a = {}));
            var x = (function () {
                function e(t, r, o, c) {
                    var u,
                        d,
                        m = this;
                    if (
                        (void 0 === r && (r = e.defaultLocale),
                        (this.formatterCache = { number: {}, dateTime: {}, pluralRules: {} }),
                        (this.format = function (e) {
                            var t = m.formatToParts(e);
                            if (1 === t.length) return t[0].value;
                            var r = t.reduce(function (e, t) {
                                return (e.length && t.type === a.literal && 'string' == typeof e[e.length - 1] ? (e[e.length - 1] += t.value) : e.push(t.value), e);
                            }, []);
                            return r.length <= 1 ? r[0] || '' : r;
                        }),
                        (this.formatToParts = function (e) {
                            return (function e(t, r, n, l, o, c, u) {
                                if (1 === t.length && (0, s.isLiteralElement)(t[0])) return [{ type: a.literal, value: t[0].value }];
                                for (var d = [], m = 0; m < t.length; m++) {
                                    var p = t[m];
                                    if ((0, s.isLiteralElement)(p)) {
                                        d.push({ type: a.literal, value: p.value });
                                        continue;
                                    }
                                    if ((0, s.isPoundElement)(p)) {
                                        'number' == typeof c && d.push({ type: a.literal, value: n.getNumberFormat(r).format(c) });
                                        continue;
                                    }
                                    var v = p.value;
                                    if (!(o && v in o)) throw new f(v, u);
                                    var x = o[v];
                                    if ((0, s.isArgumentElement)(p)) {
                                        ((x && 'string' != typeof x && 'number' != typeof x) || (x = 'string' == typeof x || 'number' == typeof x ? String(x) : ''),
                                            d.push({ type: 'string' == typeof x ? a.literal : a.object, value: x }));
                                        continue;
                                    }
                                    if ((0, s.isDateElement)(p)) {
                                        var y = 'string' == typeof p.style ? l.date[p.style] : (0, s.isDateTimeSkeleton)(p.style) ? p.style.parsedOptions : void 0;
                                        d.push({ type: a.literal, value: n.getDateTimeFormat(r, y).format(x) });
                                        continue;
                                    }
                                    if ((0, s.isTimeElement)(p)) {
                                        var y = 'string' == typeof p.style ? l.time[p.style] : (0, s.isDateTimeSkeleton)(p.style) ? p.style.parsedOptions : l.time.medium;
                                        d.push({ type: a.literal, value: n.getDateTimeFormat(r, y).format(x) });
                                        continue;
                                    }
                                    if ((0, s.isNumberElement)(p)) {
                                        var y = 'string' == typeof p.style ? l.number[p.style] : (0, s.isNumberSkeleton)(p.style) ? p.style.parsedOptions : void 0;
                                        (y && y.scale && (x *= y.scale || 1), d.push({ type: a.literal, value: n.getNumberFormat(r, y).format(x) }));
                                        continue;
                                    }
                                    if ((0, s.isTagElement)(p)) {
                                        var k = p.children,
                                            A = p.value,
                                            T = o[A];
                                        if ('function' != typeof T) throw new h(A, 'function', u);
                                        var b = T(
                                            e(k, r, n, l, o, c).map(function (e) {
                                                return e.value;
                                            }),
                                        );
                                        (Array.isArray(b) || (b = [b]),
                                            d.push.apply(
                                                d,
                                                b.map(function (e) {
                                                    return { type: 'string' == typeof e ? a.literal : a.object, value: e };
                                                }),
                                            ));
                                    }
                                    if ((0, s.isSelectElement)(p)) {
                                        var C = p.options[x] || p.options.other;
                                        if (!C) throw new g(p.value, x, Object.keys(p.options), u);
                                        d.push.apply(d, e(C.value, r, n, l, o));
                                        continue;
                                    }
                                    if ((0, s.isPluralElement)(p)) {
                                        var C = p.options['='.concat(x)];
                                        if (!C) {
                                            if (!Intl.PluralRules)
                                                throw new _(
                                                    'Intl.PluralRules is not available in this environment.\nTry polyfilling it using "@formatjs/intl-pluralrules"\n',
                                                    i.MISSING_INTL_API,
                                                    u,
                                                );
                                            var N = n.getPluralRules(r, { type: p.pluralType }).select(x - (p.offset || 0));
                                            C = p.options[N] || p.options.other;
                                        }
                                        if (!C) throw new g(p.value, x, Object.keys(p.options), u);
                                        d.push.apply(d, e(C.value, r, n, l, o, x - (p.offset || 0)));
                                        continue;
                                    }
                                }
                                return d.length < 2
                                    ? d
                                    : d.reduce(function (e, t) {
                                          var r = e[e.length - 1];
                                          return (r && r.type === a.literal && t.type === a.literal ? (r.value += t.value) : e.push(t), e);
                                      }, []);
                            })(m.ast, m.locales, m.formatters, m.formats, e, void 0, m.message);
                        }),
                        (this.resolvedOptions = function () {
                            var e;
                            return { locale: (null == (e = m.resolvedLocale) ? void 0 : e.toString()) || Intl.NumberFormat.supportedLocalesOf(m.locales)[0] };
                        }),
                        (this.getAst = function () {
                            return m.ast;
                        }),
                        (this.locales = r),
                        (this.resolvedLocale = e.resolveLocale(r)),
                        'string' == typeof t)
                    ) {
                        if (((this.message = t), !e.__parse)) throw TypeError('IntlMessageFormat.__parse must be set to process `message` of type `string`');
                        var x = c || {},
                            y = (x.formatters, (0, n.__rest)(x, ['formatters']));
                        this.ast = e.__parse(t, (0, n.__assign)((0, n.__assign)({}, y), { locale: this.resolvedLocale }));
                    } else this.ast = t;
                    if (!Array.isArray(this.ast)) throw TypeError('A message must be provided as a String or AST.');
                    ((this.formats =
                        ((u = e.formats),
                        o
                            ? Object.keys(u).reduce(
                                  function (e, t) {
                                      var r, i;
                                      return (
                                          (e[t] =
                                              ((r = u[t]),
                                              (i = o[t])
                                                  ? (0, n.__assign)(
                                                        (0, n.__assign)((0, n.__assign)({}, r || {}), i || {}),
                                                        Object.keys(r).reduce(function (e, t) {
                                                            return ((e[t] = (0, n.__assign)((0, n.__assign)({}, r[t]), i[t] || {})), e);
                                                        }, {}),
                                                    )
                                                  : r)),
                                          e
                                      );
                                  },
                                  (0, n.__assign)({}, u),
                              )
                            : u)),
                        (this.formatters =
                            (c && c.formatters) ||
                            (void 0 === (d = this.formatterCache) && (d = { number: {}, dateTime: {}, pluralRules: {} }),
                            {
                                getNumberFormat: l(
                                    function () {
                                        for (var e, t = [], r = 0; r < arguments.length; r++) t[r] = arguments[r];
                                        return new ((e = Intl.NumberFormat).bind.apply(e, (0, n.__spreadArray)([void 0], t, !1)))();
                                    },
                                    { cache: v(d.number), strategy: p.variadic },
                                ),
                                getDateTimeFormat: l(
                                    function () {
                                        for (var e, t = [], r = 0; r < arguments.length; r++) t[r] = arguments[r];
                                        return new ((e = Intl.DateTimeFormat).bind.apply(e, (0, n.__spreadArray)([void 0], t, !1)))();
                                    },
                                    { cache: v(d.dateTime), strategy: p.variadic },
                                ),
                                getPluralRules: l(
                                    function () {
                                        for (var e, t = [], r = 0; r < arguments.length; r++) t[r] = arguments[r];
                                        return new ((e = Intl.PluralRules).bind.apply(e, (0, n.__spreadArray)([void 0], t, !1)))();
                                    },
                                    { cache: v(d.pluralRules), strategy: p.variadic },
                                ),
                            })));
                }
                return (
                    Object.defineProperty(e, 'defaultLocale', {
                        get: function () {
                            return (e.memoizedDefaultLocale || (e.memoizedDefaultLocale = new Intl.NumberFormat().resolvedOptions().locale), e.memoizedDefaultLocale);
                        },
                        enumerable: !1,
                        configurable: !0,
                    }),
                    (e.memoizedDefaultLocale = null),
                    (e.resolveLocale = function (e) {
                        if (void 0 !== Intl.Locale) {
                            var t = Intl.NumberFormat.supportedLocalesOf(e);
                            return new Intl.Locale(t.length > 0 ? t[0] : 'string' == typeof e ? e : e[0]);
                        }
                    }),
                    (e.__parse = s.parse),
                    (e.formats = {
                        number: { integer: { maximumFractionDigits: 0 }, currency: { style: 'currency' }, percent: { style: 'percent' } },
                        date: {
                            short: { month: 'numeric', day: 'numeric', year: '2-digit' },
                            medium: { month: 'short', day: 'numeric', year: 'numeric' },
                            long: { month: 'long', day: 'numeric', year: 'numeric' },
                            full: { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' },
                        },
                        time: {
                            short: { hour: 'numeric', minute: 'numeric' },
                            medium: { hour: 'numeric', minute: 'numeric', second: 'numeric' },
                            long: { hour: 'numeric', minute: 'numeric', second: 'numeric', timeZoneName: 'short' },
                            full: { hour: 'numeric', minute: 'numeric', second: 'numeric', timeZoneName: 'short' },
                        },
                    }),
                    e
                );
            })();
        },
        3785: (e, t, r) => {
            'use strict';
            var i;
            (r.d(t, { M: () => i }),
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
                })(i || (i = {})));
        },
        3796: (e, t, r) => {
            'use strict';
            r.d(t, { J: () => n });
            var i = r(21916),
                a = r(55178);
            let n = (e) => {
                let t = (0, i.usePathname)(),
                    [r, n] = (0, a.useState)(!1);
                ((0, a.useEffect)(() => {
                    (window.Ya.Rum.spa.makeSpaSubPage(t), window.Ya.Rum.spa.startDataLoading(t));
                }),
                    (0, a.useEffect)(() => {
                        window.Ya.Rum.spa.getLastSpaSubPage(t) && e && !r && (window.Ya.Rum.spa.finishDataLoading(t), window.Ya.Rum.spa.startDataRendering(t), n(!0));
                    }, [e, r, t]));
            };
        },
        4820: (e, t, r) => {
            'use strict';
            r.d(t, { C: () => c });
            var i = r(32290),
                a = r(55178),
                n = r(21732),
                s = r(71926),
                l = r(91624),
                o = r.n(l);
            let c = (e) => {
                let { getDescriptionTexts: t, entityId: r } = e,
                    [l, c] = (0, a.useState)(null);
                if (
                    ((0, a.useEffect)(() => {
                        t && t().then(c);
                    }, [t]),
                    l)
                )
                    return l.map((e, t) =>
                        (0, i.jsx)(
                            s.HL,
                            {
                                className: o().descriptionTextItem,
                                variant: 'div',
                                type: 'text',
                                size: 'm',
                                weight: 'normal',
                                'data-test-id': n.S7.DESCRIPTION_TEXT,
                                children: e,
                            },
                            ''.concat(r, '-descpription-text-').concat(t),
                        ),
                    );
            };
        },
        5537: (e, t, r) => {
            'use strict';
            r.d(t, { N: () => n });
            var i = r(57594),
                a = r(79406);
            let n = () => {
                var e, t;
                let {
                    user: r,
                    settings: { browserInfo: n },
                    experiments: s,
                } = (0, i.g)();
                return (
                    !(null == n ? void 0 : n.isTouch) &&
                    r.isAuthorized &&
                    !r.hasPlus &&
                    (null == (t = s.getExperiment(a.z.WebNextDesktopWebFreemium)) || null == (e = t.value) ? void 0 : e.closeListening) === 'on'
                );
            };
        },
        8626: (e, t, r) => {
            'use strict';
            r.d(t, { m: () => i });
            let i = () => ({ year: 'numeric' });
        },
        8677: (e, t, r) => {
            'use strict';
            r.d(t, { Q: () => D });
            var i = r(32290),
                a = r(63618),
                n = r(96103),
                s = r(55178),
                l = r(60900),
                o = r(39407),
                c = r(99923),
                u = r(21732),
                d = r(91027),
                m = r(82586),
                p = r(70280),
                _ = r(71926),
                g = r(17705),
                h = r(63423);
            let f = (e) => {
                let { className: t, variant: r = 'text', onClick: a, iconClassName: n, iconSize: o, size: c = 's', ariaLabel: d } = e,
                    { formatMessage: p } = (0, l.A)(),
                    _ = null != d ? d : p({ id: 'play-queue.delete-from-queue' }),
                    g = (0, s.useCallback)(
                        (e) => {
                            (null == a || a(), e.stopPropagation());
                        },
                        [a],
                    );
                return (0, i.jsx)(h.$, {
                    className: t,
                    withRipple: !1,
                    variant: r,
                    size: c,
                    radius: 'round',
                    'aria-label': _,
                    onClick: g,
                    icon: (0, i.jsx)(m.I, { size: o, className: n, variant: 'bucket' }),
                    'data-test-id': u.OA.track.REMOVE_BUTTON,
                });
            };
            var v = r(71735),
                x = r(54391),
                y = r(22191),
                k = r(28999),
                A = r(57594),
                T = r(92744),
                b = r(29268),
                C = r(4008),
                N = r(53161),
                E = r(52843),
                I = r(39400),
                L = r(54714),
                S = r.n(L),
                j = r(38420),
                O = r(92565),
                w = r.n(O);
            let R = (0, n.PA)((e) => {
                    let { track: t } = e,
                        { formatMessage: r } = (0, l.A)();
                    return t.isDownloaded
                        ? (0, i.jsx)(m.I, {
                              size: 'xxs',
                              variant: 'downloaded',
                              'aria-label': r({ id: 'offline.track-downloaded' }),
                              'data-test-id': u.Kq.track.DOWNLOADED_TRACK_ICON,
                          })
                        : t.isDownloading
                          ? (0, i.jsx)(j.A, { value: t.downloadingProgress, size: 16, className: w().downloadingProgress, progressBarClassName: w().progress })
                          : null;
                }),
                D = (0, n.PA)((e) => {
                    var t, r;
                    let {
                            className: n,
                            track: h,
                            withLightning: L,
                            ignoreDislikedStyles: j,
                            onLikeClick: O,
                            utmLink: w,
                            withSecondaryColor: D,
                            handleRemove: P,
                            withTrailer: M = !0,
                            likeIconSize: U = 'xxs',
                            removeButtonAriaLabel: z,
                            hideControls: B,
                        } = e,
                        { user: F, trailer: W } = (0, A.g)(),
                        { formatMessage: H } = (0, l.A)(),
                        { sendLikeSearchFeedback: K } = (0, k.z)(),
                        [Y, $] = (0, s.useState)(!1),
                        [G, V] = (0, s.useState)(!1),
                        X = (0, v.P)(),
                        J = (0, g.K)(h),
                        Z = (0, y.P)(Math.round((null != (r = h.durationMs) ? r : 0) / 1e3)),
                        q = (0, x.F)(),
                        Q = F.hasPlus,
                        ee = !h.isRemoved && h.isAvailable && !B,
                        et = (0, d.c)(async () => {
                            (Y || h.isLiked || ($(!0), null == K || K()), await J(), null == O || O(h.isLiked));
                        }),
                        er = (0, d.c)((e) => {
                            e.stopPropagation();
                        }),
                        ei = (0, d.c)((e) => {
                            if ((e.stopPropagation(), X())) return void e.preventDefault();
                            (W.openTrackTrailer(h.id), q(c.DomainObjectType.Track, h.id));
                        }),
                        ea = (0, s.useMemo)(() => {
                            if (ee)
                                return (0, i.jsx)('div', {
                                    onClick: er,
                                    children: (0, i.jsx)(I._, {
                                        track: h,
                                        open: G,
                                        onOpenChange: V,
                                        placement: 'bottom',
                                        icon: (0, i.jsx)(m.I, { size: 'xs', variant: 'more' }),
                                        size: 'xs',
                                        utmLink: w,
                                        className: (0, a.$)(S().contextMenu, { [S().contextMenu_visible]: G }),
                                        handleRemove: P,
                                        withTrailer: M,
                                        'data-test-id': u.Kq.track.TRACK_CONTEXT_MENU_BUTTON,
                                    }),
                                });
                        }, [er, P, G, ee, M, h, w]);
                    return (0, i.jsxs)('div', {
                        className: (0, a.$)(S().root, S().controls, n, {
                            [S().controls_dislikedControls]: h.isDisliked,
                            [S().controls_dislikedColors]: h.isDisliked && !j,
                            [S().controls_disabled]: !h.isAvailable,
                            [S().root_withSecondaryColor]: D,
                        }),
                        children: [
                            L &&
                                (0, i.jsx)(m.I, {
                                    'aria-label': H({ id: 'entity-names.popular-among-users' }),
                                    size: 'xxs',
                                    className: S().lightning,
                                    variant: 'lightning',
                                }),
                            h.isUGC &&
                                (0, i.jsxs)(p.m_, {
                                    placement: 'bottom',
                                    offsetOptions: 8,
                                    children: [
                                        (0, i.jsx)(m.I, {
                                            'aria-label': H({ id: 'ugc.track-description' }),
                                            size: 'xxs',
                                            className: S().ugcIcon,
                                            variant: 'eye_crossed',
                                            'data-test-id': u.Kq.track.UGC_TRACK_ICON,
                                        }),
                                        (0, i.jsx)(p.ZI, { children: (0, i.jsx)(o.A, { id: 'ugc.track-description' }) }),
                                    ],
                                }),
                            Q && (0, i.jsx)('div', { className: (0, a.$)(S().item, S().downloadIcon), children: (0, i.jsx)(R, { track: h }) }),
                            P && !B && (0, i.jsx)(f, { size: 'xs', iconSize: 'xxs', className: (0, a.$)(S().item, S().removeButton), onClick: P, ariaLabel: z }),
                            ee &&
                                (0, i.jsx)(C.WithOffline, {
                                    fallback: (0, i.jsx)(T.c, {
                                        size: 'xs',
                                        iconSize: U,
                                        className: (0, a.$)(S().item, S().likeIcon),
                                        isLiked: h.isLiked,
                                        onClick: et,
                                        disabled: !F.isAuthorized,
                                    }),
                                }),
                            (null == (t = h.trailer) ? void 0 : t.isAvailable) &&
                                h.isAvailable &&
                                (0, i.jsx)(C.WithOffline, {
                                    fallback: (0, i.jsx)(b.k, {
                                        className: (0, a.$)(S().item, S().trailerIcon),
                                        iconSize: 'xs',
                                        variant: 'text',
                                        onClick: ei,
                                        withRipple: !1,
                                    }),
                                }),
                            (0, i.jsxs)('div', {
                                className: (0, a.$)(S().item, S().contextMenuWrapper),
                                children: [
                                    'number' == typeof h.durationMs &&
                                        (0, i.jsx)(_.HL, {
                                            variant: 'span',
                                            className: (0, a.$)(S().duration, { [S().duration_hidden]: G && ee }),
                                            type: 'entity',
                                            size: 'm',
                                            weight: 'medium',
                                            'aria-label': Z,
                                            role: 'text',
                                            'data-test-id': u.Kq.track.TRACK_DURATION,
                                            children: (0, i.jsx)('span', {
                                                'aria-hidden': 'true',
                                                children: ((e) => {
                                                    let t = Math.round((e || 0) / N.k7);
                                                    return (0, E.E)(t);
                                                })(h.durationMs),
                                            }),
                                        }),
                                    ea,
                                ],
                            }),
                        ],
                    });
                });
        },
        12526: (e, t, r) => {
            var i = { './en.json': [46983, 6983], './kk.json': [64042, 4042], './ru.json': [20937, 937], './uz.json': [76707, 6707] };
            function a(e) {
                if (!r.o(i, e))
                    return Promise.resolve().then(() => {
                        var t = Error("Cannot find module '" + e + "'");
                        throw ((t.code = 'MODULE_NOT_FOUND'), t);
                    });
                var t = i[e],
                    a = t[0];
                return r.e(t[1]).then(() => r.t(a, 19));
            }
            ((a.keys = () => Object.keys(i)), (a.id = 12526), (e.exports = a));
        },
        12989: (e, t, r) => {
            'use strict';
            r.d(t, { D: () => v });
            var i = r(55178),
                a = r(17811),
                n = r(92146),
                s = r(74416),
                l = r(6752),
                o = r(62376),
                c = r(1677),
                u = r(48922),
                d = r(84782),
                m = r(30915),
                p = r(18746),
                _ = r(2792),
                g = r(37240),
                h = r(51012),
                f = r(47498);
            let v = () => {
                let e = (0, o.U)(),
                    t = (0, s.st)(),
                    { hash: r } = (0, s.gf)(),
                    { pageId: v, displayReasonId: x } = (0, g.$)(),
                    { tabId: y, tabPos: k, isTabSelectedByDefault: A } = (0, f.R)(),
                    { offsetBlockPosY: T } = (0, m.u)(),
                    { blockType: b, blockId: C, blockPosX: N, blockPosY: E, mainObjectId: I, mainObjectType: L, displayReasonId: S } = (0, d.N)(),
                    { filterKey: j, filterValue: O, filterPos: w } = (0, p.G)(),
                    { objectType: R, objectsCount: D, objectId: P, objectPosX: M, objectPosY: U } = (0, _.J)(),
                    { skeleton: z } = (0, h.b)(),
                    B = null != S ? S : x,
                    F = (0, l.L)(() => (void 0 !== T && void 0 !== E ? T + E : E));
                return (0, i.useCallback)(
                    (i, s) => {
                        if (!t || !v || !u.xK.includes(v) || !u.fD.includes(v)) return;
                        let l = c.F[v];
                        if (!l) return;
                        let o = {
                            hash: r,
                            pageId: l,
                            entityType: b,
                            entityId: C,
                            entityPosX: N,
                            entityPosY: F,
                            objectsCount: D,
                            viewUuid: s,
                            objectType: R,
                            objectId: P,
                            objectPosX: M,
                            objectPosY: U,
                        };
                        (void 0 !== j && ((o.filterKey = j), (o.filterValue = O), (o.filterPos = w)),
                            u.qG.includes(v) && ((o.tabId = y), (o.tabPos = k), (o.isTabSelectedByDefault = A)),
                            z && (o.skeletonId = z),
                            'string' == typeof I && 'string' == typeof L && ((o.mainObjectType = L), (o.mainObjectId = I)),
                            B && (o.displayReasonId = B));
                        let d = (0, a.F)({ params: o, logger: e, context: 'useSendEventOnBlockShowedOrHidden' });
                        d && (i ? (0, n.Pf)(t.evgenInstance, d) : (0, n.nv)(t.evgenInstance, d));
                    },
                    [t, B, C, N, F, b, j, w, O, r, A, e, I, L, P, M, U, R, D, v, z, y, k],
                );
            };
        },
        13798: (e, t, r) => {
            'use strict';
            r.d(t, { N: () => h });
            var i = r(32290),
                a = r(63618),
                n = r(96103),
                s = r(55178),
                l = r(60900),
                o = r(80229),
                c = r(21732),
                u = r(6752),
                d = r(82586),
                m = r(57594),
                p = r(60244),
                _ = r(90006),
                g = r.n(_);
            let h = (0, n.PA)((e) => {
                let { className: t, getDescriptionTexts: r, trackId: n, containerClassName: _, variant: h, size: f = 'xxxs', ...v } = e,
                    { formatMessage: x } = (0, l.A)(),
                    {
                        settings: { isMobile: y },
                    } = (0, m.g)(),
                    [k, A] = (0, s.useState)(null),
                    T = (0, u.L)(() => {
                        switch (h) {
                            case o.JU.E:
                                return 'explicit';
                            case o.JU.AGE_12:
                            case o.JU.AGE_16:
                            case o.JU.AGE_18:
                                return 'adult';
                            case o.JU.EXCLAMATION:
                        }
                        return 'exclamation';
                    }),
                    b = (0, s.useMemo)(() => x({ id: 'extra-explicit.explicit-mark' }), [x]);
                (0, s.useEffect)(() => {
                    r && r().then(A);
                }, [r, n]);
                let C = (null == k ? void 0 : k.join('\n')) || '',
                    N = !!(null == k ? void 0 : k.length) && !y,
                    E = C.length > 0 ? C : b;
                return (0, i.jsx)(p.k, {
                    description: C,
                    placement: 'bottom-start',
                    enabled: N,
                    children: (0, i.jsx)('span', {
                        className: _,
                        children: (0, i.jsx)(d.I, {
                            className: (0, a.$)(g().explicitMark, t),
                            'aria-label': E,
                            variant: T,
                            size: f,
                            ...v,
                            'data-test-id': c.S7.EXPLICIT_MARK_ICON,
                        }),
                    }),
                });
            });
        },
        14190: (e, t, r) => {
            'use strict';
            r.d(t, { Xn: () => n, cy: () => a, pE: () => i });
            let i = {
                    yandex: {
                        regions: ['RU', 'BY', 'KZ', 'UZ'],
                        regionLangs: {
                            RU: { langs: ['ru', 'en', 'uz', 'kk'], defaultLang: 'ru' },
                            BY: { langs: ['ru', 'en', 'uz', 'kk'], defaultLang: 'ru' },
                            KZ: { langs: ['kk', 'en', 'ru', 'uz'], defaultLang: 'kk' },
                            UZ: { langs: ['uz', 'en', 'ru', 'kk'], defaultLang: 'uz' },
                        },
                        langs: ['ru', 'en', 'uz', 'kk'],
                        defaultLang: 'ru',
                    },
                    yango: {
                        regions: ['AE', 'BH', 'EG', 'IQ', 'JO', 'KW', 'OM', 'QA', 'SA'],
                        regionLangs: {
                            AE: { langs: ['ar', 'en'], defaultLang: 'ar' },
                            BH: { langs: ['ar', 'en'], defaultLang: 'ar' },
                            EG: { langs: ['ar', 'en'], defaultLang: 'ar' },
                            IQ: { langs: ['ar', 'en'], defaultLang: 'ar' },
                            JO: { langs: ['ar', 'en'], defaultLang: 'ar' },
                            KW: { langs: ['ar', 'en'], defaultLang: 'ar' },
                            OM: { langs: ['ar', 'en'], defaultLang: 'ar' },
                            QA: { langs: ['ar', 'en'], defaultLang: 'ar' },
                            SA: { langs: ['ar', 'en'], defaultLang: 'ar' },
                        },
                        langs: ['en', 'ar'],
                        defaultLang: 'en',
                    },
                },
                a = 'yandex',
                n = 'ru-RU';
        },
        14459: (e, t, r) => {
            'use strict';
            function i() {
                return { appId: '117328825040925' };
            }
            r.d(t, { k: () => i });
        },
        15559: (e, t, r) => {
            'use strict';
            r.d(t, { v: () => a });
            var i = r(79406);
            let a = (e) => {
                let { checkExperiment: t, getDisclaimerContent: r, getExplicitContent: a, userRegion: n } = e;
                return 'ru' === n && t(i.z.WebNextFooterDisclaimer, 'on') ? r() : a();
            };
        },
        16510: (e) => {
            e.exports = { root: 'ArtistItem_root__Q_mgJ', image: 'ArtistItem_image__5rKWF', cover: 'ArtistItem_cover__FTvHo' };
        },
        17024: (e, t, r) => {
            'use strict';
            r.d(t, { L: () => a });
            let i = /^(0|[1-9]\d*)$/;
            function a(e) {
                return void 0 !== e && !(e.length > 40) && i.test(e);
            }
        },
        18870: (e, t, r) => {
            'use strict';
            var i;
            (r.d(t, { $: () => i }),
                (function (e) {
                    ((e.RU = 'ru'),
                        (e.EN = 'en'),
                        (e.UK = 'uk'),
                        (e.BE = 'be'),
                        (e.KK = 'kk'),
                        (e.HY = 'hy'),
                        (e.AZ = 'az'),
                        (e.KA = 'ka'),
                        (e.HE = 'he'),
                        (e.UZ = 'uz'),
                        (e.TG = 'tg'),
                        (e.TR = 'tr'),
                        (e.JA = 'ja'),
                        (e.ZH = 'zh'),
                        (e.KO = 'ko'),
                        (e.TH = 'th'),
                        (e.ID = 'id'),
                        (e.DE = 'de'),
                        (e.EL = 'el'),
                        (e.RO = 'ro'),
                        (e.MO = 'mo'),
                        (e.AR = 'ar'));
                })(i || (i = {})));
        },
        20753: (e) => {
            e.exports = { root: 'DragAndDropIcon_root__OstQU', root_active: 'DragAndDropIcon_root_active__xOTKt' };
        },
        22556: (e, t, r) => {
            'use strict';
            r.d(t, { j: () => a });
            let i = (e, t) => {
                    let r = window.document.querySelector('meta['.concat(e, '="').concat(t, '"]'));
                    if (r) return r;
                    let i = window.document.createElement('meta');
                    return (i.setAttribute(e, t), i);
                },
                a = (e) => {
                    let { title: t, description: r, openGraph: a } = e;
                    if (('string' == typeof t && (window.document.title = t), 'string' == typeof r)) {
                        let e = i('name', 'description');
                        (e.setAttribute('content', r), window.document.head.appendChild(e));
                    }
                    let n = '';
                    if (a) {
                        let e = 'string' == typeof a.title ? a.title : '',
                            t = 'string' == typeof a.description ? a.description : '',
                            r = Array.isArray(a.images) ? a.images[0] : null;
                        n = r && 'object' == typeof r && 'url' in r ? String(r.url) : '';
                        let s = i('property', 'og:title'),
                            l = i('property', 'og:description'),
                            o = i('property', 'og:image');
                        (s.setAttribute('content', e),
                            l.setAttribute('content', t),
                            o.setAttribute('content', n),
                            window.document.head.appendChild(s),
                            window.document.head.appendChild(l),
                            window.document.head.appendChild(o));
                    }
                };
        },
        22644: (e, t, r) => {
            'use strict';
            r.d(t, { _: () => a });
            var i = r(55178);
            let a = (e, t) => {
                (0, i.useEffect)(
                    () => () => {
                        window.location.pathname.includes(e.selfLink) || e.reset();
                    },
                    [e, t],
                );
            };
        },
        22714: (e, t, r) => {
            'use strict';
            r.d(t, { n: () => s });
            var i = r(32290),
                a = r(55178),
                n = r(1176);
            let s = (e) => {
                let { pageId: t, pageEntityId: r, displayReasonId: s, pageStyle: l, pagePlacement: o, children: c } = e,
                    u = (0, a.useMemo)(() => ({ pageId: t, pageEntityId: r, displayReasonId: s, pageStyle: l, pagePlacement: o }), [t, r, s, l, o]);
                return (0, i.jsx)(n.r.Provider, { value: u, children: c });
            };
        },
        23352: (e, t, r) => {
            'use strict';
            r.d(t, { n: () => s });
            var i = r(55178),
                a = r(12989),
                n = r(80536);
            let s = function () {
                let { callback: e, singleEvent: t, withViewUuid: r } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    s = (0, i.useRef)(null),
                    l = (0, a.D)(),
                    o = (0, i.useId)(),
                    c = (0, i.useContext)(n.B),
                    u = (0, i.useCallback)(
                        (i, a) => {
                            (e ? e(i, r ? a : void 0) : l(i, a), t && c.unobserveElement(o));
                        },
                        [e, c, o, l, t, r],
                    );
                return (
                    (0, i.useEffect)(
                        () => (
                            c.observeElement({ elementRef: s, elementId: o, callback: u }),
                            () => {
                                c.unobserveElement(o);
                            }
                        ),
                        [e, c, u, o, l],
                    ),
                    { ref: s, intersectionPropertyId: o }
                );
            };
        },
        24535: (e, t, r) => {
            'use strict';
            r.d(t, { i: () => n });
            var i = r(85472),
                a = r(73422);
            function n(e) {
                let { ogTitle: t, ogDescription: r, fullUrl: n, locale: s, ogImage: l, siteName: o, ogType: c, customImage: u } = e,
                    d = l ? { url: (0, i.createAvatarUrl)(l, 1e3, !0), width: 1e3, height: 1e3 } : void 0;
                return {
                    title: t,
                    description: r,
                    url: n,
                    ...(c && { type: c }),
                    siteName: o,
                    locale: (s || a.E.getDefaultLocale()).toString().replace('-', '_'),
                    images: d || u,
                };
            }
        },
        26365: (e, t, r) => {
            'use strict';
            r.d(t, { S: () => n });
            var i = r(68243);
            let a = {
                    'ru-ru': 'https://music.yandex.ru',
                    'ru-kz': 'https://music.yandex.kz',
                    'ru-uz': 'https://music.yandex.uz',
                    'ru-by': 'https://music.yandex.by',
                    en: 'https://music.yandex.com',
                    'x-default': 'https://music.yandex.ru',
                },
                n = function (e, t) {
                    for (var r = arguments.length, n = Array(r > 2 ? r - 2 : 0), s = 2; s < r; s++) n[s - 2] = arguments[s];
                    let [l] = n,
                        o = '/' === e ? '' : e,
                        c = (e) => ({ ...(null != l ? l : {}), options: e }),
                        u = {},
                        { href: d } = (0, i.u)(o, c({ linkType: 'canonical', host: 'https://music.yandex.'.concat(t) }));
                    for (let [e, t] of Object.entries(a)) {
                        let { href: r } = (0, i.u)(o, c({ linkType: 'alternate', host: t, lang: e }));
                        u[e] = r;
                    }
                    return { canonical: d, languages: u };
                };
        },
        28724: (e, t, r) => {
            'use strict';
            r.d(t, { M: () => T });
            var i = r(32290),
                a = r(63618),
                n = r(96103),
                s = r(55178),
                l = r(39407),
                o = r(21732),
                c = r(91027),
                u = r(63423),
                d = r(71926),
                m = r(70204),
                p = r(34186),
                _ = r(83808),
                g = r(20472),
                h = r(32641),
                f = r(85017),
                v = r(19379),
                x = r(61258),
                y = r(76768),
                k = r.n(y);
            let A = {
                    [f.n.ALBUM]: (0, i.jsx)(l.A, { id: 'extra-explicit.confirm-unsafe-album' }),
                    [f.n.PODCAST]: (0, i.jsx)(l.A, { id: 'extra-explicit.confirm-unsafe-podcast' }),
                    [f.n.ARTIST]: (0, i.jsx)(l.A, { id: 'extra-explicit.confirm-unsafe-artist' }),
                    [f.n.TRACK]: (0, i.jsx)(l.A, { id: 'extra-explicit.confirm-unsafe-track' }),
                    [f.n.AUDIOBOOK]: (0, i.jsx)(l.A, { id: 'extra-explicit.confirm-unsafe-audiobook' }),
                    [f.n.CLIP]: (0, i.jsx)(l.A, { id: 'extra-explicit.confirm-unsafe-clip' }),
                },
                T = (0, n.PA)((e) => {
                    var t;
                    let { modalState: r, data: n, onClose: y, className: T } = e,
                        b = null != n ? n : null == r ? void 0 : r.modalData,
                        C = (0, _.W)(),
                        N = (0, h.Z)(g.Z.main.href),
                        E = (0, p.N)().get(m.U2),
                        I = (0, c.c)(() => {
                            if (y) return y();
                            (C.canBack && C.back(), N());
                        }),
                        L = (null == b || null == (t = b.details) ? void 0 : t.url) && b.details.text,
                        S = (0, c.c)(() => {
                            var e;
                            null == r || r.setConfirmUnsafeDisclaimer(!0);
                            let t = E.get(v.c.ExEx),
                                i = new Date(),
                                a = i.setMinutes(i.getMinutes() + 15),
                                n =
                                    null != (e = null == r ? void 0 : r.entityKey)
                                        ? e
                                        : ''.concat(null == r ? void 0 : r.entityType, '_').concat(null == r ? void 0 : r.entityId);
                            (t ? E.set(v.c.ExEx, [...t, n], { expires: new Date(a) }) : E.set(v.c.ExEx, [n], { expires: new Date(a) }),
                                null == y || y(),
                                (null == r ? void 0 : r.onDisclaimerConfirmHandler) && r.onDisclaimerConfirmHandler());
                        }),
                        j = (0, c.c)(() => {
                            ((null == r ? void 0 : r.shouldHistoryBack) ? (null == y || y(), C.canBack && C.back(), N()) : null == y || y(),
                                (null == r ? void 0 : r.onDisclaimerRejectHandler) && r.onDisclaimerRejectHandler());
                        });
                    (0, s.useEffect)(
                        () => () => {
                            null == r || r.reset();
                        },
                        [r],
                    );
                    let O = (0, s.useMemo)(() => {
                            if (b) {
                                var e, t;
                                return (0, i.jsxs)(i.Fragment, {
                                    children: [
                                        (0, i.jsx)(d.DZ, {
                                            variant: 'h4',
                                            size: 'l',
                                            className: (0, a.$)(k().title, k().text),
                                            'data-test-id': o.OA.disclaimer.DISCLAIMER_TITLE,
                                            children: b.title,
                                        }),
                                        (0, i.jsx)(d.HL, {
                                            variant: 'div',
                                            size: 'l',
                                            weight: 'normal',
                                            className: k().text,
                                            'data-test-id': o.OA.disclaimer.DISCLAIMER_DESCRIPTION,
                                            children: b.description,
                                        }),
                                        L &&
                                            (0, i.jsx)(x.N, {
                                                href: null == (e = b.details) ? void 0 : e.url,
                                                className: k().link,
                                                children: (0, i.jsx)(d.HL, {
                                                    variant: 'span',
                                                    size: 'l',
                                                    weight: 'normal',
                                                    children: null == (t = b.details) ? void 0 : t.text,
                                                }),
                                            }),
                                    ],
                                });
                            }
                            return null;
                        }, [b, L]),
                        w = (0, s.useMemo)(
                            () =>
                                (null == r ? void 0 : r.type) === f.Z.UNSAFE
                                    ? (0, i.jsxs)('div', {
                                          className: k().buttons,
                                          children: [
                                              (0, i.jsx)(u.$, {
                                                  color: 'primary',
                                                  onClick: j,
                                                  size: 'l',
                                                  radius: 'xxxl',
                                                  className: k().button,
                                                  'data-test-id': o.OA.disclaimer.DISCLAIMER_REJECT_BUTTON,
                                                  children: (0, i.jsx)(l.A, { id: 'extra-explicit.reject-unsafe-entity' }),
                                              }),
                                              (0, i.jsx)(u.$, {
                                                  color: 'secondary',
                                                  onClick: S,
                                                  size: 'l',
                                                  radius: 'xxxl',
                                                  className: k().button,
                                                  'data-test-id': o.OA.disclaimer.DISCLAIMER_CONFIRM_BUTTON,
                                                  children: r.entityType && A[r.entityType],
                                              }),
                                          ],
                                      })
                                    : (0, i.jsx)('div', {
                                          className: k().buttons,
                                          children: (0, i.jsx)(u.$, {
                                              color: 'primary',
                                              onClick: I,
                                              size: 'l',
                                              radius: 'xxxl',
                                              className: k().button,
                                              'data-test-id': o.OA.disclaimer.DISCLAIMER_REJECT_BUTTON,
                                              children: (0, i.jsx)(l.A, { id: 'interface-actions.confirm' }),
                                          }),
                                      }),
                            [S, null == r ? void 0 : r.entityType, null == r ? void 0 : r.type, I, j],
                        );
                    return (0, i.jsx)('div', {
                        className: (0, a.$)(k().root, T),
                        'data-test-id': o.OA.disclaimer.DISCLAIMER_CONTENT,
                        children: (0, i.jsxs)('div', { className: k().container, children: [O, w] }),
                    });
                });
        },
        29268: (e, t, r) => {
            'use strict';
            r.d(t, { k: () => d });
            var i = r(32290),
                a = r(55178),
                n = r(60900),
                s = r(21732),
                l = r(63423),
                o = r(82586),
                c = r(59576);
            let u = (e) => {
                    let {
                            variant: t,
                            withRipple: r,
                            size: a,
                            radius: u,
                            iconSize: d,
                            disabled: m,
                            onClick: p,
                            iconClassName: _,
                            className: g,
                            forwardRef: h,
                            style: f,
                            children: v,
                        } = e,
                        { formatMessage: x } = (0, n.A)(),
                        y = x({ id: 'trailer.button-aria-label' });
                    return (0, i.jsx)(l.$, {
                        className: g,
                        color: 'secondary',
                        radius: u,
                        size: a,
                        variant: t,
                        withRipple: r,
                        flexIcon: !0,
                        'aria-label': y,
                        onClick: p,
                        ref: h,
                        icon: (0, i.jsx)(o.I, { variant: 'trailer', size: d, className: _ }),
                        disabled: m,
                        'data-intersection-property-id': c.N,
                        style: f,
                        'data-test-id': s.S7.TRAILER_BUTTON,
                        children: v,
                    });
                },
                d = (0, a.forwardRef)((e, t) => (0, i.jsx)(u, { forwardRef: t, ...e }));
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
        30542: (e, t, r) => {
            'use strict';
            r.d(t, { $: () => n });
            var i = r(60900),
                a = r(64605);
            let n = (e, t) => {
                let { formatMessage: r } = (0, i.A)();
                if (e)
                    switch (t) {
                        case a._.AUDIOBOOK:
                            return r({ id: 'non-music.shelf-unsubscribe' });
                        case a._.FAIRY_TALE:
                            return r({ id: 'interface-actions.do-not-like' });
                        default:
                            return r({ id: 'interface-actions.subscribed' });
                    }
                switch (t) {
                    case a._.AUDIOBOOK:
                        return r({ id: 'non-music.shelf-subscribe' });
                    case a._.FAIRY_TALE:
                        return r({ id: 'interface-actions.like' });
                    default:
                        return r({ id: 'interface-actions.subscribe' });
                }
            };
        },
        31010: (e, t, r) => {
            'use strict';
            r.d(t, { H: () => a, P: () => n });
            var i = r(55178);
            let a = (0, i.createContext)(null),
                n = () => (0, i.useContext)(a);
        },
        31286: (e, t, r) => {
            'use strict';
            r.d(t, { w: () => n });
            var i = r(55178),
                a = r(91027);
            let n = () => {
                let e = (0, i.useRef)(new Map());
                return (
                    (0, i.useLayoutEffect)(
                        () => (
                            e.current.size > 0 && e.current.clear(),
                            () => {
                                e.current.clear();
                            }
                        ),
                        [],
                    ),
                    (0, a.c)((t, r) => (e.current.has(t) ? e.current.get(t) : (e.current.set(t, r), r)))
                );
            };
        },
        32468: (e, t, r) => {
            'use strict';
            r.d(t, { A: () => s });
            var i = r(32290),
                a = r(77088),
                n = r.n(a);
            let s = (e) => {
                let { children: t } = e;
                return (0, i.jsx)('footer', { className: n().empty });
            };
        },
        34223: (e, t, r) => {
            'use strict';
            r.d(t, { D: () => g });
            var i = r(32290),
                a = r(98350),
                n = r(63618),
                s = r(55178),
                l = r(60900),
                o = r(79856),
                c = r(91063),
                u = r.n(c);
            let d = (e) => {
                let { isActive: t, className: r } = e,
                    { formatMessage: a } = (0, l.A)(),
                    c = (0, s.useMemo)(() => a({ id: 'loading-messages.entity-is-loading' }, { entityName: a({ id: 'entity-names.track' }) }), [a]);
                return (0, i.jsxs)('div', {
                    'aria-label': c,
                    'aria-live': t ? 'polite' : 'off',
                    'aria-busy': t,
                    className: (0, n.$)(u().root, r),
                    children: [
                        (0, i.jsxs)('div', {
                            className: u().infoContainer,
                            children: [
                                (0, i.jsx)('div', { className: u().coverContainer, children: (0, i.jsx)(o.W, { isActive: t, className: u().cover, radius: 'round' }) }),
                                (0, i.jsx)('div', { className: u().textContainer, children: (0, i.jsx)(o.W, { isActive: t, className: u().title, radius: 'l' }) }),
                            ],
                        }),
                        (0, i.jsx)(o.W, { isActive: t, className: u().action, radius: 'l' }),
                    ],
                });
            };
            var m = r(89661),
                p = r.n(m);
            let _ = (e) => {
                    let { isActive: t, className: r } = e,
                        { formatMessage: a } = (0, l.A)(),
                        c = (0, s.useMemo)(() => a({ id: 'loading-messages.entity-is-loading' }, { entityName: a({ id: 'entity-names.track' }) }), [a]);
                    return (0, i.jsxs)('div', {
                        'aria-label': c,
                        'aria-live': t ? 'polite' : 'off',
                        'aria-busy': t,
                        className: (0, n.$)(p().root, r),
                        children: [
                            (0, i.jsxs)('div', {
                                className: p().infoContainer,
                                children: [
                                    (0, i.jsx)(o.W, { isActive: t, className: p().cover, radius: 's' }),
                                    (0, i.jsx)('div', { className: p().textContainer, children: (0, i.jsx)(o.W, { isActive: t, className: p().title, radius: 'l' }) }),
                                ],
                            }),
                            (0, i.jsx)(o.W, { isActive: t, className: p().action, radius: 'l' }),
                        ],
                    });
                },
                g = (e) => {
                    let { isActive: t, variant: r, className: n } = e;
                    switch (r) {
                        case a.X.PLAYLIST:
                            return (0, i.jsx)(_, { isActive: t, className: n });
                        case a.X.ALBUM:
                            return (0, i.jsx)(d, { isActive: t, className: n });
                    }
                };
        },
        34803: (e, t, r) => {
            'use strict';
            (r.r(t), r.d(t, { default: () => J }));
            var i = r(32290),
                a = r(21916),
                n = r(63618),
                s = r(96103),
                l = r(55178),
                o = r(60900),
                c = r(39407),
                u = r(21732),
                d = r(71483),
                m = r(91027),
                p = r(71926),
                _ = r(64170),
                g = r(7999),
                h = r(69951),
                f = r(91853),
                v = r(48922),
                x = r(22714),
                y = r(72396),
                k = r(83808),
                A = r(83920),
                T = r(3796),
                b = r(31286),
                C = r(57594),
                N = r(98350),
                E = r(28724),
                I = r(97841),
                L = r(32468),
                S = r(74694),
                j = r(34223),
                O = r(45257),
                w = r(57815),
                R = r(22556),
                D = r(44242),
                P = r(14459),
                M = r(83992),
                U = r(42125),
                z = r(24535),
                B = r(47216),
                F = r(94821),
                W = r(26365);
            async function H(e, t) {
                var r, i, a;
                if (!e) return { title: '', description: '', openGraph: {}, twitter: {}, appLinks: {}, other: {} };
                let n = await (0, U.W)(t.locale),
                    s = n({ id: 'metadata.artist-tracks-title' }, { artistName: e.artist.name }),
                    l = n({ id: 'metadata.artist-tracks-description' }, { artistName: e.artist.name });
                return {
                    title: s,
                    description: l,
                    openGraph: (0, z.i)({
                        ogTitle: s,
                        ogDescription: l,
                        ogType: 'website',
                        fullUrl: null != (r = t.fullUrl) ? r : '',
                        locale: t.locale,
                        customImage: (0, M.v)({ tld: t.tld }),
                        siteName: n({ id: 'metadata.yandex-music' }),
                    }),
                    twitter: (0, B.H)({ cardType: F.W.SUMMARY_LARGE_IMAGE, title: s, description: l }),
                    facebook: (0, P.k)(),
                    appLinks: (0, D.X)({
                        additional: { ...t, url: null != (i = t.url) ? i : '', fullUrl: null != (a = t.fullUrl) ? a : '', host: t.host },
                        appName: n({ id: 'metadata.yandex-music' }),
                    }),
                    alternates: (0, W.S)('/artist/:artistId/tracks', t.tld, { params: { artistId: e.artist.id } }),
                };
            }
            var K = r(22644),
                Y = r(51714),
                $ = r(81613),
                G = r.n($);
            let V = (0, s.PA)((e) => {
                var t, r, s, D, P, M;
                let { artistId: U, preloadedArtist: z } = e,
                    {
                        artist: B,
                        sonataState: F,
                        disclaimerModalState: W,
                        settings: { isMobile: $ },
                    } = (0, C.g)(),
                    { formatMessage: V } = (0, o.A)(),
                    { from: X, utmLink: J } = (0, y.f)({ pageId: v._Q.ARTIST_TRACKS, pageEntityId: U, contextType: d.K.Artist, contextId: U }),
                    { contentScrollRef: Z, setContentScrollRef: q } = (0, A.g)(),
                    Q = (0, k.W)(),
                    ee = (0, b.w)(),
                    et = (0, f.S)({ artist: null == (t = B.meta) ? void 0 : t.artist, shouldHistoryBack: !0 });
                ((0, Y.G)(U),
                    (0, l.useEffect)(() => {
                        var e;
                        (null == (e = B.meta) ? void 0 : e.artist.isUnsafeLegal) && et();
                    }, [null == (r = B.meta) ? void 0 : r.artist.isUnsafeLegal, et]),
                    (0, K._)(B, U),
                    (0, l.useEffect)(
                        () => () => {
                            B.fullTracksListSubpage.reset();
                        },
                        [B],
                    ),
                    B.fullTracksListSubpage.isNotFound && (0, a.notFound)(),
                    (0, T.J)(B.fullTracksListSubpage.isResolved));
                let er = (0, l.useMemo)(() => ({ Footer: () => (0, i.jsx)(L.A, { children: (0, i.jsx)(I.w, { className: G().footer }) }) }), []),
                    ei = (0, m.c)((e) => {
                        let t = [];
                        for (let i = e.startIndex; i <= e.endIndex; i++) {
                            var r;
                            let e = null == (r = B.fullTracksListSubpage.ids) ? void 0 : r[i];
                            !B.fullTracksListSubpage.getTrackByIndex(i) && e && t.push(e);
                        }
                        t.length && B.fullTracksListSubpage.getTracks({ trackIds: t });
                    }),
                    ea = [];
                return (B.fullTracksListSubpage.isNeededToLoad && ea.push(B.fullTracksListSubpage.getTracksIds({ artistId: U })),
                B.infoLoadingState.isNeededToLoad && ea.push(B.getInfo({ artistId: U, preloadedArtist: z })),
                ((e) => {
                    var t;
                    (0, l.useEffect)(() => {
                        (null == e ? void 0 : e.meta) &&
                            !e.infoLoadingState.isLoading &&
                            e.meta.artist &&
                            H({ artist: (0, w.E)(e.meta.artist) }, { fullUrl: null, locale: null, url: null, tld: '', host: '' }).then((e) => {
                                (0, R.j)(e);
                            });
                    }, [null == e ? void 0 : e.meta, null == e ? void 0 : e.infoLoadingState.isLoading, null == e || null == (t = e.meta) ? void 0 : t.artist]);
                })(B),
                ea.length && (0, l.use)(Promise.allSettled(ea)),
                B.fullTracksListSubpage.isRejected && !B.fullTracksListSubpage.isNotFound)
                    ? (0, i.jsx)(_.SomethingWentWrong, {})
                    : (null == (s = B.meta) ? void 0 : s.artist.isLegalRejected)
                      ? (0, i.jsx)(E.M, { modalState: W })
                      : (0, i.jsx)(x.n, {
                            pageId: v._Q.ARTIST_TRACKS,
                            pageEntityId: U,
                            children: (0, i.jsx)(g.h, {
                                scrollElement: Z,
                                outerTitle: V({ id: 'page.artist-tracks-header' }, { artistName: B.commonSubPage.artistName }),
                                children: (0, i.jsxs)('div', {
                                    className: G().root,
                                    'data-test-id': u.Xk.artist.ARTIST_TRACKS_PAGE,
                                    children: [
                                        (0, i.jsx)(S.Y, {
                                            variant: S.V.TEXT,
                                            withForwardControl: !1,
                                            withBackwardControl: Q.canBack,
                                            children: (0, i.jsx)(p.DZ, {
                                                variant: 'h1',
                                                weight: 'bold',
                                                size: 'xl',
                                                lineClamp: 1,
                                                children: (0, i.jsx)(c.A, {
                                                    id: 'page.artist-tracks-header',
                                                    values: { artistName: null == (D = B.meta) ? void 0 : D.artist.name },
                                                }),
                                            }),
                                        }),
                                        (0, i.jsx)(O.$, {
                                            className: (0, n.$)(G().scrollContainer, G().important),
                                            customComponents: er,
                                            itemContentCallback: (e) => {
                                                let t = B.fullTracksListSubpage.getTrackByIndex(e),
                                                    r = V({ id: 'loading-messages.entity-is-loading' }, { entityName: V({ id: 'search-filters.track' }) });
                                                return t
                                                    ? (0, i.jsx)(h.K, {
                                                          track: t,
                                                          playContextParams: ee(e, {
                                                              contextData: { type: d.K.Artist, meta: { id: Number(U) }, from: X, utmLink: J },
                                                              queueParams: { index: e, entityId: t.id },
                                                              loadContextMeta: !0,
                                                              entitiesData: F.unloadedEntitiesDataFromModels,
                                                          }),
                                                      })
                                                    : (0, i.jsx)(j.D, { isActive: !0, 'aria-label': r, variant: N.X.PLAYLIST, className: G().shimmerItem });
                                            },
                                            totalCount: null != (M = null == (P = B.fullTracksListSubpage.ids) ? void 0 : P.length) ? M : 0,
                                            onGetDataByRange: ei,
                                            pageSize: 20,
                                            listClassName: G().content,
                                            itemClassName: G().item,
                                            totalRequests: B.fullTracksListSubpage.tracks.size,
                                            handleRef: q,
                                            context: { listAriaLabel: V({ id: 'entity-names.artist-tracks-list' }) },
                                            isMobileLayout: $,
                                            useWindowScroll: $,
                                        }),
                                    ],
                                }),
                            }),
                        });
            });
            var X = r(17024);
            let J = () => {
                let e = (0, a.useSearchParams)().get('artistId');
                return ((e && (0, X.L)(e)) || (0, a.notFound)(), (0, i.jsx)(V, { artistId: e }));
            };
        },
        35587: (e) => {
            e.exports = {
                root: 'CommonTrack_root__i6shE',
                root_disabled: 'CommonTrack_root_disabled__vDyCm',
                root_current: 'CommonTrack_root_current__MNrpS',
                ripple: 'CommonTrack_ripple__wnpUs',
            };
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
        41566: (e, t, r) => {
            'use strict';
            r.d(t, { U: () => u });
            var i = r(32290),
                a = r(96103),
                n = r(21732),
                s = r(82586),
                l = r(19740),
                o = r(30542),
                c = r(57594);
            let u = (0, a.PA)((e) => {
                let { isLiked: t, onClick: r, className: a, albumType: u, disabled: d } = e,
                    { user: m } = (0, c.g)(),
                    p = t ? 'liked' : 'like',
                    _ = (0, o.$)(t, u);
                return (0, i.jsx)(l.Dr, {
                    className: a,
                    onClick: r,
                    icon: (0, i.jsx)(s.I, { variant: p, size: 'xxs' }),
                    'aria-pressed': t,
                    disabled: d || !m.isAuthorized,
                    'data-test-id': n.S7.CONTEXT_MENU_SUBSCRIBE_BUTTON,
                    children: _,
                });
            });
        },
        41677: (e, t, r) => {
            'use strict';
            r.d(t, { i: () => B });
            var i = r(32290),
                a = r(63618),
                n = r(96103),
                s = r(55178),
                l = r(70280),
                o = r(57594),
                c = r(53514),
                u = r(40484),
                d = r.n(u),
                m = r(60900),
                p = r(99923),
                _ = r(21732),
                g = r(91027),
                h = r(71926),
                f = r(47745),
                v = r(32641),
                x = r(28999),
                y = r(61258),
                k = r(19383);
            let A = (0, n.PA)((e) => {
                    let {
                            artist: t,
                            withLink: r = !0,
                            linkClassName: a,
                            captionClassName: n,
                            captionSize: s = 'm',
                            allArtistsTitle: c,
                            withCustomTooltip: u,
                            hoverSettings: d,
                        } = e,
                        { formatMessage: A } = (0, m.A)(),
                        {
                            track: T,
                            settings: { isMobile: b },
                        } = (0, o.g)(),
                        C = (0, v.Z)(t.url),
                        { sendNavigateSearchFeedback: N } = (0, x.z)(),
                        E = (0, f.N)(),
                        I = ((e) => {
                            let { artist: t, callback: r } = e,
                                { currentTrackInfo: i, fullscreenPlayer: a, fullscreenVideoPlayer: n } = (0, o.g)(),
                                { modal: s } = i;
                            return (0, k.l)({
                                entity: t,
                                callback: r,
                                onBeforeHandle: (e) => {
                                    (null == e || e.stopPropagation(), s.isOpened && (i.reset(), s.close()), a.modal.isOpened && a.modal.close());
                                },
                                onAfterHandled: () => {
                                    n.modal.isOpened && (n.modal.close(), n.reset());
                                },
                                preventDefaultWhenSafe: !0,
                            });
                        })({
                            artist: t,
                            callback: (0, g.c)((e) => {
                                (b && T.isOpened && T.close(), C(e));
                            }),
                        }),
                        L = (0, g.c)((e) => {
                            (E({ to: p.AppScreen.ArtistScreen }), null == N || N(), I(e));
                        });
                    return r && !t.various
                        ? (0, i.jsx)(y.N, {
                              'aria-label': A({ id: 'entity-names.artist-name' }, { artistName: t.name }),
                              className: a,
                              href: t.url,
                              onClick: L,
                              title: u ? void 0 : c || t.name,
                              'data-test-id': _.OA.artists.SEPARATED_ARTIST_TITLE,
                              children: (0, i.jsx)(l.m_, {
                                  enabled: !c && u,
                                  offsetOptions: 4,
                                  placement: 'top',
                                  text: c || t.name,
                                  hoverSettings: d,
                                  children: (0, i.jsx)(h.HL, { variant: 'span', type: 'entity', size: s, weight: 'medium', className: n, children: t.name }),
                              }),
                          })
                        : (0, i.jsx)(l.m_, {
                              enabled: !c && u,
                              offsetOptions: 4,
                              placement: 'top',
                              text: c || t.name,
                              hoverSettings: d,
                              children: (0, i.jsx)(h.HL, {
                                  variant: 'span',
                                  type: 'entity',
                                  size: s,
                                  weight: 'medium',
                                  className: n,
                                  title: u ? void 0 : c || t.name,
                                  'data-test-id': _.OA.artists.SEPARATED_ARTIST_TITLE,
                                  children: t.name,
                              }),
                          });
                }),
                T = (e) => {
                    let {
                            artist: t,
                            withLink: r = !0,
                            linkClassName: a,
                            captionClassName: n,
                            captionSize: l,
                            allArtistsTitle: o,
                            withCustomTooltip: c,
                            hoverSettings: u,
                            shouldUseSeparator: d = !0,
                        } = e,
                        m = (0, s.useMemo)(() => {
                            var e;
                            return null == (e = t.decomposed)
                                ? void 0
                                : e.reduce(
                                      (e, t) =>
                                          e.concat([
                                              d ? t.separator : '',
                                              (0, i.jsx)(
                                                  A,
                                                  {
                                                      artist: t,
                                                      withLink: r,
                                                      linkClassName: a,
                                                      captionClassName: n,
                                                      captionSize: l,
                                                      allArtistsTitle: o,
                                                      withCustomTooltip: c,
                                                      hoverSettings: u,
                                                  },
                                                  t.id,
                                              ),
                                          ]),
                                      [],
                                  );
                        }, [t.decomposed, d, r, a, n, l, o, c, u]);
                    return (0, i.jsxs)(i.Fragment, {
                        children: [
                            (0, i.jsx)(A, {
                                artist: t,
                                withLink: r,
                                linkClassName: a,
                                captionClassName: n,
                                captionSize: l,
                                allArtistsTitle: o,
                                withCustomTooltip: c,
                                hoverSettings: u,
                            }),
                            m,
                        ],
                    });
                };
            var b = r(39407),
                C = r(63887);
            let N = (e) => {
                let { spoilerArtistsCount: t, spoilerClassName: r, handleOnSpoilerClick: n } = e;
                return (0, i.jsxs)(i.Fragment, {
                    children: [
                        ' ',
                        (0, i.jsx)(C.N, {
                            role: 'button',
                            href: '',
                            className: (0, a.$)(d().spoiler, r),
                            onClick: n,
                            rel: 'nofollow',
                            'data-test-id': _.OA.artists.SEPARATED_ARTISTS_SPOILER,
                            children: (0, i.jsx)(b.A, { id: 'entity-names.number-of-more-artists', values: { counter: t } }),
                        }),
                    ],
                });
            };
            var E = r(8055),
                I = r(6752),
                L = r(78035),
                S = r(78176),
                j = r(83598),
                O = r.n(j);
            let w = (0, n.PA)((e) => {
                    let { label: t, artists: r, forwardRef: a } = e;
                    return (0, i.jsxs)(l.m_, {
                        enableAriaDescribedby: !1,
                        isFocusEnabled: !1,
                        placement: 'top',
                        hoverSettings: { delay: 200, handleClose: (0, L.safePolygon)({ blockPointerEvents: !0 }) },
                        children: [
                            (0, i.jsx)('div', { ref: a, children: t }),
                            (0, i.jsx)(l.ZI, { className: O().tooltipContent, children: r.map((e) => (0, i.jsx)(S.V, { artist: e, className: O().artistItem }, e.id)) }),
                        ],
                    });
                }),
                R = (0, s.forwardRef)((e, t) => (0, i.jsx)(w, { forwardRef: t, ...e }));
            var D = r(19740),
                P = r(52598),
                M = r.n(P);
            let U = (0, n.PA)((e) => {
                    let { label: t, artists: r } = e,
                        { formatMessage: n } = (0, m.A)();
                    return (0, i.jsx)(D.W1, {
                        isMobile: !0,
                        className: (0, a.$)(M().root, M().important),
                        label: t,
                        ariaLabel: n({ id: 'interface-actions.context-menu-artists' }),
                        children: r.map((e) => (0, i.jsx)(S.V, { artist: e }, e.id)),
                    });
                }),
                z = (0, n.PA)((e) => {
                    let { artists: t = [], label: r, labelRef: a } = e,
                        [n, l] = (0, s.useState)(!1),
                        {
                            settings: { isMobile: c },
                        } = (0, o.g)(),
                        u = (0, g.c)(() => {
                            let e = a.current;
                            e && l(e.scrollHeight > e.clientHeight || e.scrollWidth > e.clientWidth);
                        }),
                        d = (0, I.L)(() =>
                            (0, E.A)(() => {
                                u();
                            }, 100),
                        );
                    if (
                        ((0, s.useEffect)(
                            () => (
                                window.addEventListener('resize', d),
                                u(),
                                () => {
                                    window.removeEventListener('resize', d);
                                }
                            ),
                            [d, u],
                        ),
                        (0, s.useEffect)(() => {
                            u();
                        }, [t, u]),
                        0 !== t.length)
                    )
                        return (n || c) && (!c || 1 !== t.length) ? (c ? (0, i.jsx)(U, { artists: t, label: r }) : (0, i.jsx)(R, { artists: t, label: r })) : r;
                }),
                B = (0, n.PA)((e) => {
                    let {
                            className: t,
                            artists: r = [],
                            separator: n = ', ',
                            lineClamp: u,
                            visibleArtistsCount: m,
                            withLink: p = !0,
                            spoilerClassName: _,
                            linkClassName: g,
                            captionClassName: h,
                            captionSize: f,
                            variant: v = 'breakAll',
                            withAllArtistsTitle: x = !0,
                            withComposer: y = !0,
                            spoilerComponent: k,
                            withCustomTooltip: A = !0,
                            artistIdWithoutLink: b,
                            withContextMenu: C,
                        } = e,
                        E = (0, s.useRef)(null),
                        [I, L] = (0, s.useState)(!1),
                        S = x
                            ? r
                                  .reduce(function () {
                                      let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
                                          t = arguments.length > 1 ? arguments[1] : void 0;
                                      if (t.decomposed) {
                                          let r = t.decomposed.reduce((e, t) => e.concat([t.name]), []);
                                          return e.length ? e.concat([t.name, ...r]) : [t.name, ...r];
                                      }
                                      return e.length ? (e.push(t.name), e) : [t.name];
                                  }, [])
                                  .join(n)
                            : '',
                        {
                            settings: { isMobile: j },
                        } = (0, o.g)(),
                        O = 1 === r.length,
                        w = (0, s.useCallback)((e) => {
                            (L(!0), e.preventDefault());
                        }, []),
                        R = (0, s.useMemo)(() => {
                            let e = r;
                            return (
                                m && !I && (e = r.slice(0, m)),
                                e.reduce((e, t) => {
                                    if (!y && t.isComposer) return e.length ? e : [];
                                    let r = (0, i.jsx)(
                                        T,
                                        {
                                            artist: t,
                                            linkClassName: g,
                                            captionClassName: h,
                                            withLink: p && t.id !== b && (((!j || O) && C) || !C),
                                            captionSize: f,
                                            allArtistsTitle: S,
                                            withCustomTooltip: A,
                                            hoverSettings: c.V,
                                            shouldUseSeparator: !!n,
                                        },
                                        t.key,
                                    );
                                    return e.length ? e.concat([n, r]) : [r];
                                }, [])
                            );
                        }, [r, m, I, y, j, O, C, g, h, p, b, f, S, A, n]),
                        D = (0, s.useMemo)(() => {
                            if (!I && m && m < r.length) {
                                let e = r.length - m;
                                return (0, s.isValidElement)(k) ? k : (0, i.jsx)(N, { spoilerClassName: _, spoilerArtistsCount: e, handleOnSpoilerClick: w });
                            }
                        }, [r.length, w, I, _, k, m]),
                        P = (0, s.useMemo)(() => {
                            if (u) return { WebkitLineClamp: u };
                        }, [u]),
                        M = (0, i.jsx)(l.m_, {
                            referenceRef: E,
                            enabled: !!(x && S) && A && !C && !j,
                            offsetOptions: 4,
                            placement: 'top',
                            text: S,
                            hoverSettings: c.V,
                            children: (0, i.jsxs)('div', {
                                style: P,
                                className: (0, a.$)(d().root, d()['root_variant_'.concat(v)], { [d().root_clamp]: u && u > 0 }, { [d().ellipsis]: !u }, t),
                                title: x && S && !A && !C ? S : void 0,
                                children: [R, D],
                            }),
                        });
                    return C ? (0, i.jsx)(z, { labelRef: E, artists: r, label: M }) : M;
                });
        },
        42125: (e, t, r) => {
            'use strict';
            r.d(t, { W: () => u });
            var i = r(3266),
                a = r(55178),
                n = r(14190),
                s = r(73422),
                l = r(84570),
                o = r(64552);
            let c = (0, a.cache)(async (e) => (0, o.M)(e, o.X)),
                u = async (e) => {
                    let t = (e || s.E.getDefaultLocale()).language,
                        r = (0, l.k)(n.pE[n.cy], t),
                        a = await c(r);
                    return (e, t) => {
                        let n = null == a ? void 0 : a[e.id],
                            s = '';
                        return ((Array.isArray(n) || 'string' == typeof n) && (s = new i.S(n, r).format(t)), Array.isArray(s) ? s.join('') : s);
                    };
                };
        },
        43565: (e, t, r) => {
            'use strict';
            r.d(t, { O: () => o });
            var i = r(32290),
                a = r(63618),
                n = r(82586),
                s = r(20753),
                l = r.n(s);
            let o = (e) => {
                let { isDragging: t, className: r } = e;
                return (0, i.jsx)(n.I, { variant: 'dragDots', size: 'xxs', className: (0, a.$)(l().root, { [l().root_active]: t }, r), 'aria-hidden': !0 });
            };
        },
        44242: (e, t, r) => {
            'use strict';
            r.d(t, { X: () => a });
            var i = r(90432);
            function a(e) {
                return {
                    ios: { app_name: e.appName, app_store_id: '520797969', url: ''.concat(i.Lz, '/').concat(e.additional.url) },
                    web: { url: e.additional.fullUrl },
                };
            }
        },
        44937: (e, t, r) => {
            Promise.resolve().then(r.bind(r, 34803));
        },
        45257: (e, t, r) => {
            'use strict';
            r.d(t, { $: () => h });
            var i = r(32290),
                a = r(63618),
                n = r(8055),
                s = r(55178);
            let l = (e) => {
                    let { style: t, forwardRef: r, context: a, ...n } = e,
                        s = (null == a ? void 0 : a.listAriaLabel) || void 0,
                        l = (null == a ? void 0 : a.listRole) || 'region';
                    return (0, i.jsx)('div', { 'aria-labelledby': 'virtual-grid-header', role: l, 'aria-label': s, style: { ...t }, ref: r, ...n });
                },
                o = (0, s.forwardRef)((e, t) => (0, i.jsx)(l, { forwardRef: t, ...e }));
            var c = r(39684),
                u = r.n(c);
            let d = (e) => {
                    let { style: t, forwardRef: r, withFooter: n, withHeader: s, withForceScroll: l, ...o } = e;
                    return (0, i.jsx)('div', {
                        className: (0, a.$)(u().scroller, { [u().scroller_withFooter]: n, [u().scroller_withHeader]: s, [u().scroller_withForceScroll]: l }),
                        style: { ...t },
                        ref: r,
                        ...o,
                        tabIndex: -1,
                    });
                },
                m = (0, s.forwardRef)((e, t) => (0, i.jsx)(d, { forwardRef: t, ...e }));
            var p = r(62060),
                _ = r(31417);
            let g = (e) => {
                    let {
                            pageSize: t,
                            onPageHandler: r,
                            onRangeHandler: a,
                            debounceDurationInMs: n = 100,
                            totalCount: l = 0,
                            shouldTriggerRangeChangedOn: o = [],
                            endReached: c,
                            virtuosoRef: u,
                            ...d
                        } = e,
                        [m, g] = (0, s.useState)(null),
                        h = (0, s.useMemo)(
                            () =>
                                (0, p.A)((e) => {
                                    if ((null == a || a(e), o.length > 0 && g(e), t && r)) {
                                        let i = Math.floor(e.endIndex / t) + 1,
                                            a = Math.floor(e.startIndex / t);
                                        for (let e = a; e < i; e++) r(e);
                                    }
                                }, n),
                            [n, a, t, r, o],
                        );
                    (0, s.useEffect)(() => {
                        o.length > 0 && m && h(m);
                    }, o);
                    let f = (0, s.useMemo)(() => {
                        if (c)
                            return (0, p.A)((e) => {
                                c(e);
                            }, n);
                    }, [c, n]);
                    return (0, i.jsx)(_.sN, { ref: u, rangeChanged: h, totalCount: l, endReached: f, ...d });
                },
                h = (e) => {
                    let {
                            className: t,
                            customComponents: r,
                            onGetDataByPage: l,
                            onGetDataByRange: c,
                            itemClassName: d,
                            itemContentCallback: p,
                            listClassName: _,
                            overscan: h = 700,
                            pageSize: f = 20,
                            totalCount: v,
                            totalRequests: x,
                            debounceDurationInMs: y,
                            initialItemCount: k,
                            minInitialItemCount: A = 20,
                            handleRef: T,
                            alwaysShowScrollbar: b = !1,
                            testId: C,
                            isMobileLayout: N = !1,
                            shouldTriggerRangeChangedOn: E,
                            ...I
                        } = e,
                        [L, S] = (0, s.useState)(!1),
                        j = (0, s.useMemo)(
                            () =>
                                (0, n.A)((e) => {
                                    S(e);
                                }, 100),
                            [],
                        ),
                        O = (0, s.useMemo)(() => {
                            var e, t;
                            return N
                                ? {
                                      Scroller: m,
                                      List: null != (e = null == r ? void 0 : r.List) ? e : o,
                                      Item: null == r ? void 0 : r.Item,
                                      ScrollSeekPlaceholder: null == r ? void 0 : r.ScrollSeekPlaceholder,
                                  }
                                : {
                                      Scroller: m,
                                      List: null != (t = null == r ? void 0 : r.List) ? t : o,
                                      Item: null == r ? void 0 : r.Item,
                                      Header: null == r ? void 0 : r.Header,
                                      Footer: null == r ? void 0 : r.Footer,
                                      ScrollSeekPlaceholder: null == r ? void 0 : r.ScrollSeekPlaceholder,
                                  };
                        }, [r, x, N]),
                        w = k ? Math.min(k, A) : void 0;
                    return (0, i.jsxs)('div', {
                        className: (0, a.$)(u().root, { [u().root_scrolling]: L || b, [u().root_notScrolling]: !L && !b }, t),
                        'data-test-id': C,
                        children: [
                            N && (null == r ? void 0 : r.Header) && r.Header(),
                            (0, i.jsx)(g, {
                                overscan: h,
                                components: O,
                                listClassName: _,
                                itemClassName: d,
                                isScrolling: j,
                                itemContent: p,
                                scrollerRef: T,
                                totalCount: v,
                                pageSize: f,
                                onPageHandler: l,
                                onRangeHandler: c,
                                debounceDurationInMs: y,
                                initialItemCount: w,
                                shouldTriggerRangeChangedOn: E,
                                ...I,
                            }),
                            N && (null == r ? void 0 : r.Footer) && r.Footer(),
                        ],
                    });
                };
        },
        46646: (e, t, r) => {
            var i = { './en.json': [61263, 1263], './kk.json': [62837, 5218], './ru.json': [74721, 4721], './uz.json': [20075, 75] };
            function a(e) {
                if (!r.o(i, e))
                    return Promise.resolve().then(() => {
                        var t = Error("Cannot find module '" + e + "'");
                        throw ((t.code = 'MODULE_NOT_FOUND'), t);
                    });
                var t = i[e],
                    a = t[0];
                return r.e(t[1]).then(() => r.t(a, 19));
            }
            ((a.keys = () => Object.keys(i)), (a.id = 46646), (e.exports = a));
        },
        47216: (e, t, r) => {
            'use strict';
            r.d(t, { H: () => s });
            var i = r(90432),
                a = r(94821);
            let n = '@yandexmusic';
            function s(e) {
                return e.cardType === a.W.SUMMARY_LARGE_IMAGE
                    ? { card: a.W.SUMMARY_LARGE_IMAGE, site: n, title: e.title, description: e.description }
                    : {
                          card: a.W.APP,
                          site: n,
                          title: e.title,
                          app: { id: { iphone: '520797969' }, name: e.appName, url: { iphone: ''.concat(i.Lz, '/').concat(e.url) } },
                      };
            }
        },
        48736: (e) => {
            e.exports = { root: 'TooltipWithTitle_root__7jLY3', text: 'TooltipWithTitle_text__ElBtq', description: 'TooltipWithTitle_description__HsGcR' };
        },
        51714: (e, t, r) => {
            'use strict';
            r.d(t, { G: () => s });
            var i = r(55178),
                a = r(31010),
                n = r(68243);
            let s = (e) => {
                var t;
                let { setDeeplink: r } = null != (t = (0, a.P)()) ? t : {};
                (0, i.useEffect)(() => {
                    if (e) {
                        let { href: t } = (0, n.u)('/artist/:artistId', { params: { artistId: e } });
                        null == r || r(t);
                    }
                    return () => {
                        null == r || r(null);
                    };
                }, [e, r]);
            };
        },
        52199: (e, t, r) => {
            'use strict';
            r.d(t, { r: () => i });
            let i = (e, t, r) => e.replace(r, t);
        },
        52598: (e) => {
            e.exports = { root: 'SeparatedArtistsWithContextMenuMobile_root__4BiJL', important: 'SeparatedArtistsWithContextMenuMobile_important__fSF1h' };
        },
        53514: (e, t, r) => {
            'use strict';
            r.d(t, { V: () => i });
            let i = { delay: { open: 1e3, close: 0 } };
        },
        54171: (e, t, r) => {
            'use strict';
            r.d(t, { w: () => n });
            var i = r(19383),
                a = r(85017);
            let n = (e) => {
                let { track: t, callback: r, disclaimerRejectHandler: n } = e;
                return (0, i.l)({ entity: t, entityType: a.n.TRACK, callback: r, onReject: n, preventDefaultWhenSafe: !1 });
            };
        },
        54714: (e) => {
            e.exports = {
                card_root: 'HorizontalCardContainer_root__YoAAP',
                root: 'CommonControlsBar_root__N8b0F',
                root_withSecondaryColor: 'CommonControlsBar_root_withSecondaryColor__4Y1P_',
                item: 'CommonControlsBar_item__qGErG',
                contextMenu: 'CommonControlsBar_contextMenu__EAq_c',
                contextMenu_visible: 'CommonControlsBar_contextMenu_visible__M0ry0',
                contextMenuWrapper: 'CommonControlsBar_contextMenuWrapper__XjkaL',
                lightning: 'CommonControlsBar_lightning__o7wrY',
                ugcIcon: 'CommonControlsBar_ugcIcon__OV0Cl',
                lightning_withOffset: 'CommonControlsBar_lightning_withOffset__LGvUS',
                duration: 'CommonControlsBar_duration__un38A',
                duration_hidden: 'CommonControlsBar_duration_hidden__noQ4S',
                alwaysVisibleDuration: 'CommonControlsBar_alwaysVisibleDuration__3V6gl',
                controls: 'CommonControlsBar_controls__QrogT',
                trailerIcon: 'CommonControlsBar_trailerIcon__ZHSBo',
                removeButton: 'CommonControlsBar_removeButton__35xHY',
                controls_disabled: 'CommonControlsBar_controls_disabled__0RmLo',
                explicitMark: 'CommonControlsBar_explicitMark__3I_Op',
                controls_dislikedControls: 'CommonControlsBar_controls_dislikedControls__mMjKC',
                likeIcon: 'CommonControlsBar_likeIcon__YqgZY',
                controls_dislikedColors: 'CommonControlsBar_controls_dislikedColors__h5lev',
                downloadIcon: 'CommonControlsBar_downloadIcon__2mM6m',
                popover: 'CommonControlsBar_popover__6bmNd',
            };
        },
        56008: (e, t, r) => {
            'use strict';
            r.d(t, { H: () => i });
            let i = (0, r(55178).createContext)({ pageAlbumId: void 0 });
        },
        57594: (e, t, r) => {
            'use strict';
            r.d(t, { P: () => n, g: () => s });
            var i = r(55178),
                a = r(25090);
            let n = (0, i.createContext)(null);
            function s() {
                let e = (0, i.useContext)(n);
                if (null === e) throw new a.t('Store cannot be null, please add a context provider', { code: 'E_CONTEXT_STORE_NULL' });
                return e;
            }
        },
        57815: (e, t, r) => {
            'use strict';
            r.d(t, { E: () => a });
            var i = r(87151);
            let a = (e) => {
                var t, r;
                return e
                    ? {
                          id: Number(e.id),
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
                                            disclaimers: (0, i.H)(e.disclaimers),
                                        };
                                    })) || [],
                          name: e.name,
                          cover: { uri: e.coverUri || '' },
                          various: e.various || !1,
                          contentRestrictions: { available: null == (r = e.isAvailable) || r, disclaimers: (0, i.H)(e.disclaimers) },
                      }
                    : { id: 0, name: '', various: !1, decomposed: [], contentRestrictions: { available: !1, disclaimers: [] } };
            };
        },
        60244: (e, t, r) => {
            'use strict';
            r.d(t, { k: () => u });
            var i = r(32290),
                a = r(21732),
                n = r(70280),
                s = r(71926),
                l = r(48736),
                o = r.n(l);
            let c = { padding: 8 },
                u = (e) => {
                    let { description: t, enabled: r, title: l, placement: u = 'top', children: d } = e;
                    return (0, i.jsxs)(n.m_, {
                        enabled: r,
                        offsetOptions: 4,
                        shiftOptions: c,
                        flipOptions: c,
                        placement: u,
                        children: [
                            d,
                            (0, i.jsx)(n.ZI, {
                                className: o().root,
                                'data-test-id': a.S7.TOOLTIP_WITH_TITLE,
                                children: (0, i.jsxs)('div', {
                                    className: o().text,
                                    children: [
                                        l && (0, i.jsx)(s.HL, { variant: 'span', type: 'text', size: 's', weight: 'bold', children: l }),
                                        (0, i.jsx)(s.HL, { variant: 'span', type: 'text', size: 's', weight: 'normal', className: o().description, children: t }),
                                    ],
                                }),
                            }),
                        ],
                    });
                };
        },
        62376: (e, t, r) => {
            'use strict';
            r.d(t, { U: () => n });
            var i = r(70204),
                a = r(34186);
            let n = () => (0, a.N)().get(i.Zf);
        },
        63038: (e, t, r) => {
            'use strict';
            r.d(t, { B: () => i });
            let i = '{tld}';
        },
        63363: (e, t, r) => {
            'use strict';
            r.d(t, { K: () => v });
            var i = r(32290),
                a = r(60900),
                n = r(91027),
                s = r(67732),
                l = r(45477),
                o = r(75582),
                c = r(57594),
                u = r(90357),
                d = r(92708),
                m = r(55178),
                p = r(63380),
                _ = r(96103),
                g = r(97755),
                h = r(79238);
            let f = (0, _.PA)((e) => {
                    let { album: t, closeToast: r, withLink: a } = e,
                        n = (0, h.b)(t);
                    return (0, i.jsx)(g.O, {
                        closeToast: r,
                        entityVariant: n,
                        coverUri: t.coverUri,
                        entityUrl: t.url,
                        collectionUrl: '/collection',
                        entityTitle: t.title,
                        isLiked: t.isLiked,
                        withLink: a,
                    });
                }),
                v = (e) => {
                    let {
                            user: t,
                            paywall: r,
                            albumCPA: { isPlusCPAEnabled: _ },
                        } = (0, c.g)(),
                        { formatMessage: g } = (0, a.A)(),
                        { notify: h } = (0, o.l)(),
                        v = (() => {
                            let { notify: e } = (0, o.l)(),
                                [t, r] = (0, m.useState)(!1),
                                { formatMessage: s } = (0, a.A)();
                            return (0, n.c)(async (a) => {
                                let { album: n, withLink: o = !0, withNotification: c = !0 } = a;
                                if (t) return;
                                let m = { ...(0, d.HO)(n), url: n.url, isLiked: !n.isLiked };
                                r(!0);
                                let _ = await n.toggleLike();
                                (r(!1),
                                    c &&
                                        (_ === p.f.OK
                                            ? e((0, i.jsx)(f, { withLink: o, album: m }), { containerId: l.u.INFO })
                                            : e((0, i.jsx)(u.h, { error: s({ id: 'error-messages.error-during-action' }) }), { containerId: l.u.ERROR })));
                            });
                        })(),
                        { pageAlbumId: x } = (0, s.T)();
                    return (0, n.c)(async () => {
                        if (e)
                            return _({ pageAlbumId: x, albumId: e.id, isNonMusic: e.isNonMusic })
                                ? void r.openModal()
                                : t.isAuthorized
                                  ? v({ album: e })
                                  : void h((0, i.jsx)(u.h, { error: g({ id: 'authorization-messages.need-to-authorizate' }) }), { containerId: l.u.ERROR });
                    });
                };
        },
        63670: (e, t, r) => {
            'use strict';
            (Object.defineProperty(t, '__esModule', { value: !0 }), (t._Parser = t.parse = void 0));
            var i = r(30782);
            ((t.parse = function () {
                throw Error("You're trying to format an uncompiled message with react-intl without parser, please import from 'react-intl' instead");
            }),
                i.__exportStar(r(88222), t),
                (t._Parser = void 0));
        },
        64170: (e, t, r) => {
            'use strict';
            r.d(t, { SomethingWentWrong: () => T });
            var i = r(32290),
                a = r(63618),
                n = r(96103),
                s = r(55178),
                l = r(60900),
                o = r(39407),
                c = r(63423),
                u = r(82586),
                d = r(71926),
                m = r(17811),
                p = r(99923),
                _ = r(90153),
                g = r(74416),
                h = r(62376),
                f = r(37240),
                v = r(83920),
                x = r(20472),
                y = r(12894),
                k = r(30310),
                A = r.n(k);
            let T = (0, n.PA)((e) => {
                let { className: t, withBackwardControl: r = !0 } = e,
                    { formatMessage: n } = (0, l.A)(),
                    k = n({ id: 'error-messages.something-went-wrong' });
                !(function (e) {
                    let t = (0, g.st)(),
                        { hash: r } = (0, g.gf)(),
                        { pageId: i } = (0, f.$)(),
                        a = (0, h.U)();
                    (0, s.useEffect)(() => {
                        if (!t || !r || !i) return;
                        let n = (0, m.F)({
                            params: {
                                entityType: p.EntityTypes.Error,
                                entityId: p.EntityTypes.SomethingWrong,
                                errorMessage: e,
                                hash: r,
                                pageId: i,
                                pageStyle: p.PageStyles.Fullscreen,
                                pagePlacement: p.PagePlacements.Fullscreen,
                                mainObjectType: p.DomainObjectType.NonApplicable,
                                mainObjectId: p.DomainObjectType.NonApplicable,
                            },
                            logger: a,
                            context: 'useSendEventOnSomethingWentWrongShowed',
                        });
                        n && (0, _.z5)(t.evgenInstance, n);
                    }, [t, e, r, i, a]);
                })(k);
                let { sendRefreshEvent: T } = (function () {
                        let e = (0, g.st)(),
                            { hash: t } = (0, g.gf)(),
                            { pageId: r } = (0, f.$)(),
                            i = (0, h.U)();
                        return {
                            sendRefreshEvent: (0, s.useCallback)(() => {
                                if (!e || !t || !r) return;
                                let a = (0, m.F)({
                                    params: {
                                        actionType: p.ActionType.Refresh,
                                        userInteractionType: p.UserInteractionType.Tap,
                                        entityType: p.EntityTypes.Error,
                                        entityId: p.EntityTypes.SomethingWrong,
                                        hash: t,
                                        pageId: r,
                                        pageStyle: p.PageStyles.Fullscreen,
                                        pagePlacement: p.PagePlacements.Fullscreen,
                                        mainObjectType: p.DomainObjectType.NonApplicable,
                                        mainObjectId: p.DomainObjectType.NonApplicable,
                                    },
                                    logger: i,
                                    context: 'useSendEventOnSomethingWentWrongRefreshed',
                                });
                                a && (0, _.bv)(e.evgenInstance, a);
                            }, [e, t, r, i]),
                        };
                    })(),
                    b = (0, s.useCallback)(() => {
                        (T(), (window.location.href = x.Z.main.href));
                    }, [T]),
                    { contentRef: C } = (0, v.g)();
                return (0, i.jsxs)('div', {
                    className: (0, a.$)(A().root, t),
                    children: [
                        r &&
                            (0, i.jsx)(y.L, { withBackwardFallback: '/', className: (0, a.$)(A().navigation, { [A().navigation_desktop]: !C }), withForwardControl: !1 }),
                        (0, i.jsxs)('div', {
                            className: (0, a.$)(A().content, { [A().content_shrink]: !r }),
                            children: [
                                (0, i.jsx)(u.I, { className: A().icon, variant: 'attention', size: 'xxl' }),
                                (0, i.jsx)(d.DZ, { className: (0, a.$)(A().title, A().important), variant: 'h3', size: 'xs', children: k }),
                                (0, i.jsxs)(d.HL, {
                                    className: (0, a.$)(A().text, A().important),
                                    variant: 'span',
                                    type: 'text',
                                    size: 'l',
                                    weight: 'normal',
                                    children: [!1, (0, i.jsx)(o.A, { id: 'page-error.try-to-restart-app' })],
                                }),
                                (0, i.jsx)(c.$, {
                                    onClick: b,
                                    className: A().button,
                                    role: 'link',
                                    color: 'secondary',
                                    size: 'l',
                                    radius: 'xxxl',
                                    children: (0, i.jsxs)(d.HL, {
                                        type: 'controls',
                                        variant: 'span',
                                        size: 'm',
                                        children: [!1, (0, i.jsx)(o.A, { id: 'page-error.restart-app-button' })],
                                    }),
                                }),
                            ],
                        }),
                    ],
                });
            });
        },
        64552: (e, t, r) => {
            'use strict';
            r.d(t, { M: () => c, X: () => o });
            var i = r(25090),
                a = r(14190);
            let n = async (e) => e.then((e) => e.default),
                s = a.pE[a.cy],
                l = s.langs.reduce((e, t) => (e.set(t, async () => n(r(12526)('./'.concat(t, '.json')))), e), new Map()),
                o = s.langs.reduce((e, t) => (e.set(t, async () => n(r(46646)('./'.concat(t, '.json')))), e), new Map()),
                c = async function (e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : l,
                        r = t.get(e),
                        a = t.get('ru');
                    if (r) return r();
                    if (a) return a();
                    throw new i.t('No translations for '.concat(e, ' or ru languages'));
                };
        },
        65024: (e, t, r) => {
            'use strict';
            r.d(t, { C: () => a });
            let i = new Set(Object.values(r(3785).M)),
                a = (e) => 'string' == typeof e && i.has(e);
        },
        67732: (e, t, r) => {
            'use strict';
            r.d(t, { T: () => n });
            var i = r(55178),
                a = r(56008);
            function n() {
                return (0, i.useContext)(a.H);
            }
        },
        68912: (e, t, r) => {
            'use strict';
            r.d(t, { j: () => C });
            var i = r(32290),
                a = r(63618),
                n = r(96103),
                s = r(21916),
                l = r(55178),
                o = r(60900),
                c = r(39407),
                u = r(21732),
                d = r(70280),
                m = r(71926),
                p = r(41677),
                _ = r(28999),
                g = r(57594),
                h = r(53514),
                f = r(85017),
                v = r(13798),
                x = r(61258),
                y = r(25649),
                k = r(24760),
                A = r(84141),
                T = r(5856),
                b = r.n(T);
            let C = (0, n.PA)((e) => {
                let {
                        className: t,
                        titleContainerClassName: r,
                        track: n,
                        albumArtists: T,
                        withExplicitMark: C = !0,
                        withSecondaryColor: N,
                        captionSize: E = 'm',
                        explicitSize: I = 'xxxs',
                        withAllArtistsTitle: L,
                        textClassName: S,
                        artistsClassName: j,
                        ignoreDislikedStyles: O,
                        withCustomTooltip: w = !0,
                        hasLineClamp: R = !0,
                        withSavingQueryParams: D,
                        beforeTitle: P,
                        withArtistLink: M = !0,
                        withTrackLink: U = !0,
                        afterTitle: z,
                        withContextMenuArtists: B,
                    } = e,
                    { formatMessage: F } = (0, o.A)(),
                    { sendNavigateSearchFeedback: W } = (0, _.z)(),
                    {
                        settings: { isMobile: H },
                    } = (0, g.g)(),
                    K = (0, k.$)({ withCustomTooltip: w }),
                    Y = (0, s.useSearchParams)(),
                    $ = n.getUrl(D ? Object.fromEntries(Y) : void 0),
                    G = (0, l.useMemo)(() => {
                        var e;
                        let t = F({ id: 'entity-names.track-name' }, { trackName: n.title });
                        return ''.concat(t, ' ').concat(null != (e = n.version) ? e : '');
                    }, [F, n.title, n.version]),
                    V = (0, A.O)({ track: n, onNavigate: W, withSavingQueryParams: D, entityType: f.n.TRACK }),
                    X = (0, l.useCallback)(
                        (e) => {
                            let t = ''.concat(n.title, ' ').concat(!n.isRemoved && n.version ? n.version : '');
                            return (0, i.jsx)(d.m_, {
                                enabled: K && !H,
                                offsetOptions: 4,
                                placement: 'top',
                                text: t,
                                hoverSettings: h.V,
                                children: (0, i.jsx)(m.HL, {
                                    className: (0, a.$)(b().text, b().title),
                                    type: 'entity',
                                    size: E,
                                    weight: 'medium',
                                    variant: 'span',
                                    ...e,
                                    children: n.title,
                                }),
                            });
                        },
                        [H, K, E, n.isRemoved, n.title, n.version],
                    ),
                    J = (0, l.useMemo)(() => {
                        let e = ''.concat(n.title, ' ').concat(!n.isRemoved && n.version ? n.version : '');
                        return n.isRemoved
                            ? (0, i.jsx)(d.m_, {
                                  enabled: K && !H,
                                  offsetOptions: 4,
                                  placement: 'top',
                                  text: F({ id: 'track-title.error-not-found' }),
                                  hoverSettings: h.V,
                                  children: (0, i.jsx)(m.HL, {
                                      className: (0, a.$)(b().text, b().title),
                                      type: 'entity',
                                      size: E,
                                      weight: 'medium',
                                      variant: 'span',
                                      title: K ? void 0 : F({ id: 'track-title.error-not-found' }),
                                      children: (0, i.jsx)(c.A, { id: 'track-title.error-not-found' }),
                                  }),
                              })
                            : n.hasTrackLink && U
                              ? (0, i.jsx)(x.N, {
                                    onClick: V,
                                    className: b().albumLink,
                                    href: $,
                                    'aria-label': G,
                                    title: K ? void 0 : e,
                                    'data-test-id': u.Kq.track.TRACK_TITLE,
                                    children: X(),
                                })
                              : X({ 'data-test-id': u.Kq.track.TRACK_TITLE });
                    }, [H, n.title, n.isRemoved, n.version, n.hasTrackLink, X, K, F, E, G, V, $, U]),
                    Z = (0, y.s)(n.artists, T),
                    q = (0, l.useMemo)(() => +!!R, [R]);
                return (0, i.jsx)('div', {
                    className: (0, a.$)(b().root, { [b().root_disabled]: !n.isAvailable, [b().root_disliked]: n.isDisliked && !O, [b().root_withSecondaryColor]: N }, t),
                    children: (0, i.jsxs)('div', {
                        className: b().metaContainer,
                        children: [
                            (0, i.jsxs)('div', {
                                className: (0, a.$)(b().titleContainer, { [b().titleContainer_withVersion]: n.version }, r),
                                children: [
                                    (0, i.jsxs)(m.HL, {
                                        className: (0, a.$)(b().text, S),
                                        type: 'entity',
                                        size: E,
                                        weight: 'medium',
                                        variant: 'div',
                                        lineClamp: 1,
                                        children: [
                                            P,
                                            J,
                                            !n.isRemoved &&
                                                n.version &&
                                                (0, i.jsxs)(m.HL, {
                                                    className: (0, a.$)(b().text, b().version),
                                                    type: 'entity',
                                                    size: E,
                                                    weight: 'medium',
                                                    variant: 'span',
                                                    title: K ? void 0 : n.version,
                                                    'data-test-id': u.Kq.track.TRACK_VERSION,
                                                    children: ['\xa0', n.version],
                                                }),
                                        ],
                                    }),
                                    n.explicitDisclaimer &&
                                        C &&
                                        (0, i.jsx)(v.N, {
                                            containerClassName: b().explicitMarkContainer,
                                            getDescriptionTexts: n.getDescriptionTexts,
                                            size: I,
                                            variant: n.explicitDisclaimer,
                                            className: b().explicitMark,
                                            trackId: n.id,
                                        }),
                                    z,
                                ],
                            }),
                            Z.length > 0 &&
                                (0, i.jsx)(p.i, {
                                    className: (0, a.$)(b().text, { [b().artists]: R }, j, S),
                                    withAllArtistsTitle: L,
                                    linkClassName: (0, a.$)(b().text, b().link),
                                    captionClassName: (0, a.$)(b().text, b().artistCaption),
                                    artists: Z,
                                    withLink: n.isNonUserGenerated && M,
                                    lineClamp: q,
                                    captionSize: E,
                                    withContextMenu: B,
                                }),
                        ],
                    }),
                });
            });
        },
        69951: (e, t, r) => {
            'use strict';
            r.d(t, { K: () => f });
            var i = r(32290),
                a = r(63618),
                n = r(96103),
                s = r(55178),
                l = r(21732),
                o = r(90169),
                c = r(57594),
                u = r(40229),
                d = r(43565),
                m = r(8677),
                p = r(68912),
                _ = r(92102),
                g = r(85673),
                h = r.n(g);
            let f = (0, n.PA)((e) => {
                var t;
                let {
                        track: r,
                        playContextParams: n,
                        className: g,
                        withDNDBlock: f,
                        isDragging: v,
                        draggingClassName: x,
                        ignoreDislikedStyles: y,
                        withSecondaryColor: k,
                        handleRemove: A,
                        withDislike: T,
                        withTrailer: b = !0,
                        beforeTitle: C,
                        removeButtonAriaLabel: N,
                        hideControls: E,
                    } = e,
                    I = (0, o.D)({ playContextParams: n, entityId: r.entityId }),
                    {
                        settings: { isMobile: L },
                    } = (0, c.g)(),
                    S = (0, s.useCallback)(
                        (e) =>
                            (0, i.jsx)(u.q, {
                                isAvailable: r.isAvailable,
                                isDisliked: r.isDisliked,
                                coverUri: r.coverUri,
                                title: r.title,
                                className: h().playButtonCell,
                                ignoreDislikedStyles: y,
                                radius: 'xs',
                                ...e,
                            }),
                        [y, r.coverUri, r.isAvailable, r.isDisliked, r.title],
                    );
                return (0, i.jsx)(_.C, {
                    className: (0, a.$)(g, { [h().trackWithDots]: f, [h().important]: f }),
                    track: r,
                    beforeBlock: f ? (0, i.jsx)(d.O, { className: (0, a.$)(h().dots, x), isDragging: v }) : void 0,
                    meta: (0, i.jsx)(p.j, { withArtistLink: !L, beforeTitle: C, track: r, ignoreDislikedStyles: y, withSecondaryColor: k }),
                    playButtonCellRender: S,
                    controls: (0, i.jsx)(m.Q, {
                        track: r,
                        className: h().controlsBarCell,
                        ignoreDislikedStyles: y,
                        utmLink: null == (t = n.contextData) ? void 0 : t.utmLink,
                        withSecondaryColor: k,
                        handleRemove: A,
                        withDislike: T,
                        withTrailer: b,
                        removeButtonAriaLabel: N,
                        hideControls: E,
                    }),
                    ...I,
                    'data-test-id': l.Kq.track.TRACK_PLAYLIST,
                });
            });
        },
        73422: (e, t, r) => {
            'use strict';
            r.d(t, { E: () => d });
            var i = r(91945),
                a = r(14190),
                n = r(84570),
                s = r(40363);
            let l = (e) => s.U.parseAcceptLanguage(null != e ? e : void 0);
            var o = r(18870);
            let c = (e) => {
                var t;
                return null != (t = { ru: o.$.RU, en: o.$.EN, uz: o.$.UZ, kk: o.$.KK }[e]) ? t : o.$.RU;
            };
            var u = r(64552);
            class d {
                static getDefaultLocale() {
                    return new Intl.Locale(a.Xn);
                }
                getLocale() {
                    let e;
                    try {
                        e = new Intl.Locale(this.serverDetectedLocale).region;
                    } catch (t) {
                        e = d.getDefaultLocale().region;
                    }
                    return new Intl.Locale(this.language, { region: e });
                }
                getDefaultLanguage() {
                    return c((0, n.k)(this.config, this.config.defaultLang));
                }
                getLanguage() {
                    return c((0, n.k)(this.config, this.language));
                }
                setLanguage(e) {
                    var t, r, i;
                    let a = (0, n.k)(this.config, e);
                    a !== (null == (t = this.storage) ? void 0 : t.get()) &&
                        (null == (r = this.storage) || r.set(a), null == (i = this.changeLanguageHandler) || i.onChangeLanguage(a));
                }
                getDictionary() {
                    if (!this.dictionary)
                        throw Error(
                            '\n                There is no downloaded CompiledTranslations!\n                I18NStorage.loadDictionary() must be called.\n            ',
                        );
                    return this.dictionary;
                }
                getAvailableLanguages() {
                    return this.config.langs.map((e) => c((0, n.k)(this.config, e)));
                }
                async loadDictionary() {
                    let e = (0, n.k)(this.config, this.language);
                    try {
                        this.dictionary = await (0, u.M)(e);
                    } catch (t) {
                        (t instanceof Error && this.logger.error(t, { language: e }), (this.dictionary = {}));
                    }
                    return this.dictionary;
                }
                constructor({ serverDetectedLocale: e, isBuildTypeDesktop: t, storage: r, changeLanguageHandler: o, logger: c }) {
                    let u;
                    if (
                        ((0, i._)(this, 'language', void 0),
                        (0, i._)(this, 'storage', void 0),
                        (0, i._)(this, 'dictionary', void 0),
                        (0, i._)(this, 'config', void 0),
                        (0, i._)(this, 'logger', void 0),
                        (0, i._)(this, 'changeLanguageHandler', void 0),
                        (0, i._)(this, 'serverDetectedLocale', void 0),
                        (this.storage = r),
                        (this.logger = c),
                        (this.changeLanguageHandler = o),
                        (this.serverDetectedLocale = e),
                        (this.config = a.pE[a.cy]),
                        t)
                    ) {
                        if ('undefined' != typeof navigator) {
                            var d;
                            let e;
                            u = ((e = this.config), new s.U({ brandConfig: e, enableWideLanguageSelectWithBrandLangs: !0 })).getLang({
                                cookieLang: (null == (d = this.storage) ? void 0 : d.get()) || void 0,
                                acceptLangs: l(navigator.languages.join()),
                            });
                        }
                    } else [u] = l(e) || [];
                    this.language = (0, n.k)(this.config, u);
                }
            }
        },
        76768: (e) => {
            e.exports = {
                root: 'Disclaimer_root__ciLA2',
                container: 'Disclaimer_container__cB_wK',
                title: 'Disclaimer_title__I5hOj',
                text: 'Disclaimer_text__2Yo3R',
                link: 'Disclaimer_link__4UMOz',
                buttons: 'Disclaimer_buttons__mpL9o',
                button: 'Disclaimer_button__qIuMB',
                shimmer: 'Disclaimer_shimmer__Bg0HE',
            };
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
        78176: (e, t, r) => {
            'use strict';
            r.d(t, { V: () => x });
            var i = r(32290),
                a = r(63618),
                n = r(96103),
                s = r(55178),
                l = r(99923),
                o = r(21732),
                c = r(91027),
                u = r(50162),
                d = r(19740),
                m = r(86269),
                p = r(71926),
                _ = r(47745),
                g = r(32641),
                h = r(57594),
                f = r(16510),
                v = r.n(f);
            let x = (0, n.PA)((e) => {
                let { artist: t, className: r } = e,
                    { fullscreenPlayer: n } = (0, h.g)(),
                    f = (0, g.Z)(t.url),
                    y = (0, _.N)(),
                    k = (0, s.useMemo)(() => {
                        var e;
                        return (
                            'decomposed' in t &&
                            (null == (e = t.decomposed) ? void 0 : e.reduce((e, t) => (e.push((0, i.jsx)(x, { artist: t, className: r }, t.id)), e), []))
                        );
                    }, [t, r]),
                    A = (0, c.c)((e) => {
                        (n.modal.isOpened && n.modal.close(), y({ to: l.AppScreen.ArtistScreen }), f(e));
                    });
                return (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsxs)(d.Dr, {
                            className: (0, a.$)(v().root, r),
                            onClick: A,
                            'data-test-id': o.OA.artists.ARTIST_ITEM,
                            children: [
                                (0, i.jsx)(m.t, {
                                    radius: 'round',
                                    className: v().cover,
                                    children: (0, i.jsx)(u._V, { withAvatarReplace: !0, src: t.coverUri, size: 100, fit: 'contain', className: v().image }),
                                }),
                                (0, i.jsx)(p.HL, { variant: 'span', size: 'm', weight: 'medium', lineClamp: 1, children: t.name }),
                            ],
                        }),
                        k,
                    ],
                });
            });
        },
        79238: (e, t, r) => {
            'use strict';
            r.d(t, { b: () => n });
            var i = r(64605),
                a = r(97647);
            let n = (e) => {
                switch (e.type) {
                    case i._.PODCAST:
                        return a.c.PODCAST;
                    case i._.AUDIOBOOK:
                        return a.c.AUDIOBOOK;
                    case i._.FAIRY_TALE:
                        return a.c.FAIRY_TALE;
                    default:
                        return a.c.ALBUM;
                }
            };
        },
        80536: (e, t, r) => {
            'use strict';
            r.d(t, { B: () => i });
            let i = (0, r(55178).createContext)({ observeElement: () => {}, unobserveElement: () => {} });
        },
        81613: (e) => {
            e.exports = {
                root: 'ArtistTracksPage_root__ad3rI',
                footer: 'ArtistTracksPage_footer__KN2i_',
                scrollContainer: 'ArtistTracksPage_scrollContainer__9iO2g',
                important: 'ArtistTracksPage_important__iulth',
                content: 'ArtistTracksPage_content__6LJJd',
                shimmerItem: 'ArtistTracksPage_shimmerItem__136_r',
            };
        },
        83598: (e) => {
            e.exports = {
                tooltipContent: 'SeparatedArtistsWithContextMenuDesktop_tooltipContent___PtDD',
                artistItem: 'SeparatedArtistsWithContextMenuDesktop_artistItem__Ggo_W',
            };
        },
        83992: (e, t, r) => {
            'use strict';
            function i(e) {
                let { tld: t, url: r } = e;
                return r || 'https://music.yandex.'.concat(t, '/pages/main/i/og/home.png?webp=false');
            }
            r.d(t, { v: () => i });
        },
        84570: (e, t, r) => {
            'use strict';
            r.d(t, { k: () => i });
            let i = (e, t) => (e.langs.includes(t) ? t : e.defaultLang);
        },
        85673: (e) => {
            e.exports = {
                playButtonCell: 'TrackPlaylist_playButtonCell__Q6YT_',
                controlsBarCell: 'TrackPlaylist_controlsBarCell__6clda',
                dots: 'TrackPlaylist_dots__nLYej',
                trackWithDots: 'TrackPlaylist_trackWithDots__EU6LD',
                important: 'TrackPlaylist_important__n8Tjb',
            };
        },
        87151: (e, t, r) => {
            'use strict';
            r.d(t, { H: () => a });
            var i = r(65024);
            let a = function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
                return e.map((e) => ((0, i.C)(e) ? e : void 0)).filter((e) => void 0 !== e);
            };
        },
        88222: (e, t) => {
            'use strict';
            var r, i;
            (Object.defineProperty(t, '__esModule', { value: !0 }),
                (t.createNumberElement =
                    t.createLiteralElement =
                    t.isDateTimeSkeleton =
                    t.isNumberSkeleton =
                    t.isTagElement =
                    t.isPoundElement =
                    t.isPluralElement =
                    t.isSelectElement =
                    t.isTimeElement =
                    t.isDateElement =
                    t.isNumberElement =
                    t.isArgumentElement =
                    t.isLiteralElement =
                    t.SKELETON_TYPE =
                    t.TYPE =
                        void 0),
                (function (e) {
                    ((e[(e.literal = 0)] = 'literal'),
                        (e[(e.argument = 1)] = 'argument'),
                        (e[(e.number = 2)] = 'number'),
                        (e[(e.date = 3)] = 'date'),
                        (e[(e.time = 4)] = 'time'),
                        (e[(e.select = 5)] = 'select'),
                        (e[(e.plural = 6)] = 'plural'),
                        (e[(e.pound = 7)] = 'pound'),
                        (e[(e.tag = 8)] = 'tag'));
                })(r || (t.TYPE = r = {})),
                (function (e) {
                    ((e[(e.number = 0)] = 'number'), (e[(e.dateTime = 1)] = 'dateTime'));
                })(i || (t.SKELETON_TYPE = i = {})),
                (t.isLiteralElement = function (e) {
                    return e.type === r.literal;
                }),
                (t.isArgumentElement = function (e) {
                    return e.type === r.argument;
                }),
                (t.isNumberElement = function (e) {
                    return e.type === r.number;
                }),
                (t.isDateElement = function (e) {
                    return e.type === r.date;
                }),
                (t.isTimeElement = function (e) {
                    return e.type === r.time;
                }),
                (t.isSelectElement = function (e) {
                    return e.type === r.select;
                }),
                (t.isPluralElement = function (e) {
                    return e.type === r.plural;
                }),
                (t.isPoundElement = function (e) {
                    return e.type === r.pound;
                }),
                (t.isTagElement = function (e) {
                    return e.type === r.tag;
                }),
                (t.isNumberSkeleton = function (e) {
                    return !!(e && 'object' == typeof e && e.type === i.number);
                }),
                (t.isDateTimeSkeleton = function (e) {
                    return !!(e && 'object' == typeof e && e.type === i.dateTime);
                }),
                (t.createLiteralElement = function (e) {
                    return { type: r.literal, value: e };
                }),
                (t.createNumberElement = function (e, t) {
                    return { type: r.number, value: e, style: t };
                }));
        },
        89661: (e) => {
            e.exports = {
                root: 'PlaylistTrackShimmer_root__nZ9KR',
                infoContainer: 'PlaylistTrackShimmer_infoContainer__xLd7a',
                textContainer: 'PlaylistTrackShimmer_textContainer__QI5cC',
                title: 'PlaylistTrackShimmer_title__MojYd',
                cover: 'PlaylistTrackShimmer_cover__xyDhR',
                action: 'PlaylistTrackShimmer_action__tT5xx',
            };
        },
        90006: (e) => {
            e.exports = { explicitMark: 'ExplicitMarkIcon_explicitMark__0BPeQ' };
        },
        91063: (e) => {
            e.exports = {
                root: 'AlbumTrackShimmer_root__fBjbK',
                infoContainer: 'AlbumTrackShimmer_infoContainer__4fdAk',
                coverContainer: 'AlbumTrackShimmer_coverContainer__frW12',
                textContainer: 'AlbumTrackShimmer_textContainer__5wNPM',
                title: 'AlbumTrackShimmer_title__HC_Pa',
                cover: 'AlbumTrackShimmer_cover__36UkV',
                action: 'AlbumTrackShimmer_action__oI5t5',
            };
        },
        91624: (e) => {
            e.exports = { descriptionTextItem: 'DescriptionTextsDisclaimer_descriptionTextItem__XtzRU' };
        },
        91853: (e, t, r) => {
            'use strict';
            r.d(t, { S: () => a });
            var i = r(19383);
            let a = (e) => {
                let { artist: t, callback: r, shouldHistoryBack: a } = e;
                return (0, i.l)({ entity: t, callback: r, modalBehavior: void 0 === a ? void 0 : { shouldHistoryBack: a }, preventDefaultWhenSafe: !0 });
            };
        },
        92013: (e, t, r) => {
            'use strict';
            var i;
            (r.d(t, { T: () => i }),
                (function (e) {
                    ((e.OK = 'ok'), (e.ERROR = 'error'));
                })(i || (i = {})));
        },
        92102: (e, t, r) => {
            'use strict';
            r.d(t, { C: () => A });
            var i = r(32290),
                a = r(63618),
                n = r(96103),
                s = r(55178),
                l = r(91027),
                o = r(58359),
                c = r(71735),
                u = r(2969),
                d = r(23352),
                m = r(46200),
                p = r(5537),
                _ = r(28999),
                g = r(72676),
                h = r(57594),
                f = r(1444),
                v = r(60900),
                x = r(54171),
                y = r(35587),
                k = r.n(y);
            let A = (0, n.PA)((e) => {
                var t;
                let {
                        className: r,
                        track: n,
                        meta: y,
                        beforeBlock: A,
                        controls: T,
                        playButtonCellRender: b,
                        withLightning: C,
                        isPlaying: N,
                        isCurrent: E,
                        togglePlay: I,
                        restartPlay: L,
                        onPlayClick: S,
                        playButtonIconSize: j,
                        skipFreemiumCloseListeningPaywall: O = !1,
                        ...w
                    } = e,
                    { shouldShowBuySubscriptionModal: R, showBuySubscriptionModal: D } = (0, m.q)(),
                    {
                        track: P,
                        fullscreenPlayer: M,
                        settings: { isMobile: U },
                        album: z,
                        albumCPA: { isPlusCPAPlayerBarEnabled: B },
                        paywall: { modal: F },
                    } = (0, h.g)(),
                    { ref: W, intersectionPropertyId: H } = (0, d.n)(),
                    K = (0, u.b)(),
                    Y = (0, c.P)(),
                    $ = ((e) => {
                        let { track: t, withLightning: r } = e,
                            { formatMessage: i } = (0, v.A)();
                        return t.isAvailable
                            ? [t.artistsNames, t.title, t.version, r && i({ id: 'entity-names.popular-among-users' })].filter(Boolean).join(' ')
                            : ''
                                  .concat(i({ id: 'extra-explicit.play-unavailable' }), ' ')
                                  .concat(t.artistsNames, ' ')
                                  .concat(t.title);
                    })({ withLightning: C, track: n }),
                    G = ((e) => {
                        let { sonataState: t } = (0, h.g)(),
                            r = t.status === g.MT.LOADING_MEDIA_SOURCE || t.status === g.MT.BUFFERING;
                        if (e && t.entityMeta) {
                            let i = t.entityMeta.entityId;
                            return r && i === e;
                        }
                        return r;
                    })(n.entityId),
                    V = B(z.id, null == (t = z.meta) ? void 0 : t.isNonMusic),
                    X = n.isAvailable && R && !V,
                    J = (0, p.N)(),
                    Z = n.isAvailable && J && !V && !O,
                    q = (0, x.w)({ track: n, callback: I }),
                    Q = (0, l.c)(() => {
                        P.open({ trackId: n.id, albumId: n.albumId });
                    }),
                    ee = (0, x.w)({ track: n, callback: Q }),
                    { sendPlaySearchFeedback: et } = (0, _.z)(),
                    [er, ei] = (0, s.useState)(!1),
                    ea = (0, l.c)(() => {
                        if (!Y()) {
                            if (X) return void D();
                            if (Z) return void F.open();
                            (er || N || (ei(!0), null == et || et()), q(), K(!N), null == S || S(!N));
                        }
                    }),
                    en = (0, l.c)(() => {
                        if (N) return void L();
                        ea();
                    }),
                    es = (0, l.c)((e) => {
                        if (!n.isAvailable && !n.hasModalAccess) {
                            (R && n.isAvailableOnlyForPlus && D(), J && n.isAvailableOnlyForPlus && F.open());
                            return;
                        }
                        if (X) return void D();
                        let t = !U && (2 === e.detail || (1 === e.detail && n.hasTrackLink && !M.modal.isOpened));
                        return Z && !t
                            ? void F.open()
                            : ((0, o.P)(e, k().ripple), U)
                              ? void ea()
                              : 2 === e.detail
                                ? void en()
                                : void (1 === e.detail && n.hasTrackLink && !M.modal.isOpened && (ee(), Z && F.open()));
                    }),
                    el = null == b ? void 0 : b({ onPlayButtonClick: ea, isPlaying: N, isCurrent: E, isLoading: G, playButtonIconSize: j });
                return (0, i.jsxs)(f.C, {
                    ref: W,
                    'aria-label': $,
                    'data-intersection-property-id': H,
                    onClick: es,
                    className: (0, a.$)(k().root, { [k().root_disabled]: !n.isAvailable, [k().root_current]: E && U }, r),
                    ...w,
                    children: [A, el, y, T],
                });
            });
        },
        92565: (e) => {
            e.exports = { downloadingProgress: 'TrackDownloadControl_downloadingProgress__wNg2W', progress: 'TrackDownloadControl_progress__K_OhO' };
        },
        94821: (e, t, r) => {
            'use strict';
            r.d(t, { W: () => i });
            var i = (function (e) {
                return ((e.APP = 'app'), (e.SUMMARY_LARGE_IMAGE = 'summary_large_image'), e);
            })({});
        },
        97841: (e, t, r) => {
            'use strict';
            r.d(t, { w: () => b });
            var i = r(32290),
                a = r(63618),
                n = r(96103),
                s = r(60900),
                l = r(31010),
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
            let c = (e, t, r) => {
                    switch (e) {
                        case o.YANDEX:
                            if ('ru' === t) return 'https://ya.ru';
                            return;
                        case o.YANDEX_PROJECTS:
                            return 'https://yandex.'.concat(t, '/all?lang=').concat(r);
                        case o.COPYRIGHT_HOLDER:
                            return 'https://yandex.'.concat(t, '/support/music/performers-and-copyright-holders/copyright.html?lang=').concat(r);
                        case o.AGREEMENT:
                            return 'https://yandex.ru/legal/music_termsofuse?lang='.concat(r);
                        case o.RECOMMENDATION_RULES:
                            return 'https://music.yandex.ru/legal/recommendations/ru/#music';
                        case o.HELP:
                            return 'https://yandex.'.concat(t, '/support/music/index.html?lang=').concat(r);
                        case o.PRIVACY_POLICY:
                            return 'https://yandex.'.concat(t, '/legal/confidential/').concat(r);
                    }
                },
                u = (e) => {
                    let { formatMessage: t, language: r, tld: i, year: a } = e;
                    return {
                        year: a,
                        yandexMusic: { id: o.YANDEX, title: t({ id: 'footer.yandex-music' }), url: c(o.YANDEX, i, r) },
                        yandexProjects: { id: o.YANDEX_PROJECTS, title: t({ id: 'footer.yandex-project' }), url: c(o.YANDEX_PROJECTS, i, r) },
                    };
                };
            var d = r(15559),
                m = r(8626);
            let p = (e) => e(new Date(), (0, m.m)());
            var _ = r(61945),
                g = r(57594),
                h = r(77088),
                f = r.n(h),
                v = r(21732),
                x = r(71926),
                y = r(61258);
            let k = (e) => {
                    let { className: t, data: r } = e;
                    return (0, i.jsxs)('div', {
                        className: (0, a.$)(f().copyrights, t),
                        'data-test-id': v.S7.FOOTER_COPYRIGHTS,
                        children: [
                            (0, i.jsxs)(x.HL, {
                                variant: 'span',
                                type: 'text',
                                size: 's',
                                weight: 'medium',
                                className: f().text,
                                children: [
                                    '\xa9 ',
                                    r.year,
                                    ' \xa0',
                                    (0, i.jsx)(y.N, {
                                        target: '_blank',
                                        href: r.yandexMusic.url,
                                        className: (0, a.$)(f().copyrightLink, f().yandexMusicLink),
                                        'data-test-id': v.S7.FOOTER_YANDEX_MUSIC_LINK,
                                        children: r.yandexMusic.title,
                                    }),
                                ],
                            }),
                            (0, i.jsx)(x.HL, { variant: 'span', type: 'text', size: 's', weight: 'medium', children: ' • ' }),
                            (0, i.jsx)(y.N, {
                                target: '_blank',
                                href: r.yandexProjects.url,
                                className: f().copyrightLink,
                                'data-test-id': v.S7.FOOTER_YANDEX_PROJECT_LINK,
                                children: r.yandexProjects.title,
                            }),
                        ],
                    });
                },
                A = (e) => {
                    let { disclaimer: t, links: r } = e;
                    return (0, i.jsxs)('div', {
                        className: f().links,
                        children: [
                            (0, i.jsx)('ol', {
                                className: f().list,
                                'data-test-id': v.S7.FOOTER_LINKS_LIST,
                                children: r.map((e) => {
                                    let { id: t, title: r, url: a } = e;
                                    return (0, i.jsx)(
                                        'li',
                                        {
                                            className: f().item,
                                            children: (0, i.jsx)(y.N, { target: '_blank', href: a, className: f().link, 'data-test-id': v.S7.FOOTER_LINK, children: r }),
                                        },
                                        t,
                                    );
                                }),
                            }),
                            (0, i.jsx)(x.HL, {
                                variant: 'span',
                                type: 'text',
                                size: 'm',
                                weight: 'medium',
                                className: f().explicitText,
                                tabIndex: 0,
                                dangerouslySetInnerHTML: { __html: t },
                                'data-test-id': v.S7.FOOTER_DISCLAIMER_TEXT,
                            }),
                        ],
                    });
                },
                T = (e) => {
                    let { className: t, data: r } = e;
                    return (0, i.jsxs)('footer', {
                        className: (0, a.$)(f().root, f().important, t),
                        'data-test-id': v.S7.FOOTER,
                        children: [(0, i.jsx)(A, { links: r.links, disclaimer: r.disclaimer }), (0, i.jsx)(k, { data: r.copyrights })],
                    });
                };
            (0, n.PA)((e) => {
                let { className: t } = e,
                    { location: r } = (0, g.g)(),
                    { formatDate: a, formatMessage: n } = (0, s.A)(),
                    { language: l } = (0, _.h)(),
                    o = u({ formatMessage: n, language: l, tld: r.tld, year: p(a) });
                return (0, i.jsx)(k, { className: t, data: o });
            });
            let b = (0, n.PA)((e) => {
                var t;
                let { className: r } = e,
                    { experiments: n, location: m, user: h } = (0, g.g)(),
                    { formatDate: v, formatMessage: x } = (0, s.A)(),
                    { isEnabled: y } = null != (t = (0, l.P)()) ? t : {},
                    { language: k } = (0, _.h)(),
                    A = ((e) => {
                        let { checkExperiment: t, formatMessage: r, isWebApplication: i, language: a, tld: n, userRegion: s, year: l } = e;
                        return {
                            links: ((e) => {
                                let { formatMessage: t, isWebApplication: r, tld: i, language: a, userRegion: n } = e,
                                    s = { id: o.COPYRIGHT_HOLDER, title: t({ id: 'footer.links-copyright-holders' }), url: c(o.COPYRIGHT_HOLDER, i, a) },
                                    l = { id: o.PRIVACY_POLICY, title: t({ id: 'footer.links-privacy-policy' }), url: c(o.PRIVACY_POLICY, i, a) },
                                    u = { id: o.AGREEMENT, title: t({ id: 'footer.links-terms' }), url: c(o.AGREEMENT, i, a) },
                                    d = { id: o.RECOMMENDATION_RULES, title: t({ id: 'footer.links-recommendation-rules' }), url: c(o.RECOMMENDATION_RULES, i, a) },
                                    m = { id: o.HELP, title: t({ id: 'footer.links-help' }), url: c(o.HELP, i, a) },
                                    p = [s, u, d];
                                return (r && 'ru' === n && p.push(l), p.push(m), p);
                            })({ formatMessage: r, isWebApplication: i, language: a, tld: n, userRegion: s }),
                            disclaimer: (0, d.v)({
                                checkExperiment: t,
                                getDisclaimerContent: () => r({ id: 'footer.disclaimer-content' }),
                                getExplicitContent: () => r({ id: 'footer.explicit-content' }),
                                userRegion: s,
                            }),
                            copyrights: u({ formatMessage: r, language: a, tld: n, year: l }),
                        };
                    })({
                        checkExperiment: (e, t) => n.checkExperiment(e, t),
                        formatMessage: x,
                        isWebApplication: !1,
                        tld: m.tld,
                        language: k,
                        userRegion: h.account.data.userSessionRegionIso,
                        year: p(v),
                    });
                return (0, i.jsx)(T, { className: (0, a.$)({ [f().root_withOffsetForDeeplink]: y }, r), data: A });
            });
        },
        98350: (e, t, r) => {
            'use strict';
            r.d(t, { X: () => i });
            var i = (function (e) {
                return ((e.PLAYLIST = 'playlist'), (e.ALBUM = 'album'), e);
            })({});
        },
    },
    (e) => {
        (e.O(
            0,
            [
                1010, 7412, 8461, 7231, 2147, 9763, 4517, 1256, 3608, 6986, 6706, 5472, 8378, 900, 2536, 2146, 3353, 2474, 8035, 347, 2732, 1410, 1417, 229, 8506, 6050,
                5806, 7702, 6874, 9155, 861, 4668, 9740, 1175, 4499, 8915, 6341, 4220, 9562, 7358,
            ],
            () => e((e.s = 44937)),
        ),
            (_N_E = e.O()));
    },
]);
