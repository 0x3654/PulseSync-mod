(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [7784],
    {
        10570: (e) => {
            e.exports = {
                root: 'ConcertMeta_root__CkKU3',
                city: 'ConcertMeta_city__ngDq2',
                info: 'ConcertMeta_info__czKlU',
                time: 'ConcertMeta_time__gX09u',
                cashback: 'ConcertMeta_cashback__fkZfk',
                meta: 'ConcertMeta_meta__GteL_',
                title: 'ConcertMeta_title__cqonb',
                location: 'ConcertMeta_location__HuUgv',
                rating: 'ConcertMeta_rating__P4Ana',
                separator: 'ConcertMeta_separator__BcJsF',
            };
        },
        11489: (e) => {
            e.exports = { root: 'AfishaWidget_root__Fu9a6', content: 'AfishaWidget_content__YFmbs', widget: 'AfishaWidget_widget__ZdvqS' };
        },
        12578: (e, t, a) => {
            'use strict';
            a.d(t, { h: () => x });
            var n = a(32290),
                r = a(55178),
                i = a(60900),
                s = a(37511),
                c = a(21732),
                o = a(63423),
                l = a(84638),
                d = a(74196),
                m = a(70204),
                h = a(34186),
                _ = a(8671),
                p = a(21916),
                u = a(74523),
                g = a(97201),
                C = a(11489),
                v = a.n(C);
            let x = (e) => {
                let { dataSessionId: t, isOpened: a, onOpen: C, onClose: x } = e,
                    y = (0, h.N)().get(m.V4),
                    { formatMessage: f } = (0, i.A)(),
                    E = (() => {
                        let e = (0, p.useSearchParams)();
                        return (0, r.useCallback)(
                            (t) => {
                                let a = e.get(g.K.UTM_CAMPAIGN);
                                if (!a) return t;
                                let n = new URLSearchParams();
                                return (n.set(g.K.UTM_SOURCE, 'campaignid_'.concat(a)), (0, u.C)(t, n));
                            },
                            [e],
                        );
                    })(),
                    b = (0, r.useCallback)(
                        (e) => {
                            e.origin === y.afisha.host && 'close' === e.data.type && x();
                        },
                        [x, y.afisha.host],
                    );
                (0, r.useEffect)(
                    () => (
                        window.addEventListener('message', b),
                        () => {
                            window.removeEventListener('message', b);
                        }
                    ),
                    [b],
                );
                let N = (0, r.useCallback)(
                        (e) => {
                            e ? C() : x();
                        },
                        [x, C],
                    ),
                    k = (0, s.tE)(y, (0, _.u)()),
                    w = E(''.concat(y.afisha.host, '/w/sessions/').concat(t, '?clientKey=').concat(k));
                return (0, n.jsxs)(l.a, {
                    size: 'fitContent',
                    placement: 'center',
                    open: a,
                    onOpenChange: N,
                    onClose: x,
                    showHeader: !1,
                    className: v().widget,
                    contentClassName: v().content,
                    overlayColor: 'full',
                    'data-test-id': c.OA.concert.AFISHA_MODAL,
                    children: [
                        (0, n.jsx)(d.q, { children: (0, n.jsx)(o.$, { 'aria-label': f({ id: 'interface-actions.close' }), onClick: x }) }),
                        (0, n.jsx)('iframe', {
                            src: w,
                            className: v().root,
                            referrerPolicy: 'no-referrer',
                            sandbox: 'allow-forms allow-modals allow-popups allow-scripts allow-same-origin',
                            allow: 'clipboard-read clipboard-write',
                        }),
                    ],
                });
            };
        },
        19111: (e) => {
            e.exports = { root: 'ConcertDate_root__xnVG1', month: 'ConcertDate_month__ti5Na', day: 'ConcertDate_day__YibpP', weekday: 'ConcertDate_weekday__fBZXo' };
        },
        19522: (e, t, a) => {
            'use strict';
            a.d(t, { Y: () => i });
            var n = a(60900),
                r = a(91027);
            let i = () => {
                let { formatMessage: e, formatNumber: t } = (0, n.A)();
                return (0, r.c)((a) => {
                    var n, r;
                    return (null == (n = a.price) ? void 0 : n.value)
                        ? e(
                              { id: 'payment.min-price' },
                              { value: t(a.price.value, { style: 'currency', currency: null == (r = a.price) ? void 0 : r.currency, maximumFractionDigits: 0 }) },
                          )
                        : e({ id: 'payment.buy' });
                });
            };
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
        37511: (e, t, a) => {
            'use strict';
            a.d(t, { iV: () => c, tE: () => o, Ef: () => l, tk: () => d.t, u0: () => _ });
            var n = a(91945),
                r = a(25090);
            class i extends r.t {
                constructor(e = 'Internal error', { code: t = 'E_CONFIG', ...a } = {}) {
                    (super(e, { code: t, ...a }), (0, n._)(this, 'name', 'ConfigException'), Object.setPrototypeOf(this, i.prototype));
                }
            }
            class s extends i {
                constructor(e) {
                    (super('The configuration file for environment "'.concat(e, '" does not exist.'), { code: 'E_CONFIG_FILE_NOT_FOUND' }),
                        (0, n._)(this, 'name', 'NotFoundConfigException'),
                        Object.setPrototypeOf(this, s.prototype));
                }
            }
            let c = (function (e) {
                let { manifest: t, getConfig: a } = e,
                    n = new Map();
                return (e) => {
                    let r = n.get(e);
                    if (r) return r;
                    if (!Object.hasOwn(t, e)) return Promise.reject(new s(e));
                    let i = t[e]().then(a);
                    return (n.set(e, i), i);
                };
            })({
                manifest: {
                    development: () => Promise.all([a.e(394), a.e(1463), a.e(6468)]).then(a.bind(a, 46468)),
                    qa: () => Promise.all([a.e(394), a.e(1463), a.e(547)]).then(a.bind(a, 50547)),
                    stress: () => Promise.all([a.e(394), a.e(1463), a.e(9709)]).then(a.bind(a, 29709)),
                    production: () => Promise.all([a.e(394), a.e(1463), a.e(6234)]).then(a.bind(a, 56234)),
                },
                getConfig: (e) => {
                    let { config: t } = e;
                    return t;
                },
            });
            a(31570);
            let o = (e, t) => (t ? e.afisha.clientId[t] : e.afisha.clientId.web);
            function l(e, t) {
                return t ? e.player.secretKey[t] : '';
            }
            var d = a(90480),
                m = a(52199),
                h = a(63038);
            let _ = (e, t, a) => {
                let { allowCustomPrefixUrl: n, prefixUrl: r } = e.resources.musicExternalApi,
                    i = n && 'string' == typeof a && a.length > 0 ? a : r;
                return (0, m.r)(i, t, h.B);
            };
        },
        53109: (e, t, a) => {
            'use strict';
            a.d(t, { Q: () => P });
            var n = a(32290),
                r = a(96103),
                i = a(39407),
                s = a(99923),
                c = a(21732),
                o = a(91027),
                l = a(6752),
                d = a(44989),
                m = a(63423),
                h = a(74196),
                _ = a(71926),
                p = a(47745),
                u = a(23352),
                g = a(32641),
                C = a(57594),
                v = a(79406),
                x = a(86562),
                y = a(68243),
                f = a(19522),
                E = a(12578),
                b = a(98066);
            let N = ' • ',
                k = (e, t) => {
                    let a = [];
                    return (e.city && a.push(e.city), e.place && a.push(e.place), a.join(t));
                };
            var w = a(10570),
                T = a.n(w);
            let j = (0, r.PA)((e) => {
                let { concert: t, cashback: a } = e;
                return (0, n.jsxs)('div', {
                    className: T().meta,
                    children: [
                        (0, n.jsx)(_.HL, {
                            variant: 'span',
                            type: 'controls',
                            size: 'l',
                            weight: 'medium',
                            lineClamp: 1,
                            className: T().title,
                            'data-test-id': c.OA.concert.CONCERT_CARD_TITLE,
                            children: t.title,
                        }),
                        (0, n.jsxs)(_.HL, {
                            variant: 'span',
                            type: 'controls',
                            weight: 'medium',
                            className: T().info,
                            children: [
                                (0, n.jsx)(_.HL, {
                                    variant: 'span',
                                    type: 'controls',
                                    weight: 'medium',
                                    lineClamp: 1,
                                    className: T().location,
                                    'aria-label': k(t, ' '),
                                    'data-test-id': c.OA.concert.CONCERT_CARD_LOCATION,
                                    children: k(t, N),
                                }),
                                (0, n.jsx)(_.HL, { 'aria-hidden': !0, className: T().separator, variant: 'span', type: 'controls', weight: 'medium', children: N }),
                                (0, n.jsx)(_.HL, {
                                    variant: 'span',
                                    type: 'controls',
                                    weight: 'medium',
                                    className: T().rating,
                                    'data-test-id': c.OA.concert.CONCERT_CARD_CONTENT_RATING,
                                    children: t.contentRating,
                                }),
                            ],
                        }),
                        a,
                    ],
                });
            });
            var A = a(61744),
                O = a(81697),
                I = a(96871),
                R = a.n(I);
            let P = (0, r.PA)((e) => {
                var t, a, r;
                let { concert: N, withMask: k = !0, withPriceButton: w, withInlineMeta: T = !1 } = e,
                    { state: I, toggleTrue: P, toggleFalse: W } = (0, d.e)(!1),
                    { ref: S, intersectionPropertyId: L } = (0, u.n)(),
                    { experiments: D } = (0, C.g)(),
                    M = D.checkExperiment(v.z.WebNextConcertPage, 'on'),
                    H = (0, p.N)(),
                    F = (0, f.Y)(),
                    { href: z } = (0, y.u)('/concert/:concertId', { params: { concertId: N.id } }),
                    B = (0, g.Z)(z),
                    G = F(N),
                    U = (0, o.c)((e) => {
                        (H({ to: s.AppScreen.ConcertPurchaseScreen }), P(), null == e || e.stopPropagation());
                    }),
                    $ = (0, o.c)((e) => {
                        if (!M) return void U(e);
                        (H({ to: s.AppScreen.ConcertScreen }), B(e));
                    }),
                    K = (0, o.c)((e) => {
                        (e.code === x.v.SPACE || e.code === x.v.ENTER) && (e.preventDefault(), $());
                    }),
                    V = (0, o.c)((e) => {
                        M && (U(e), e.preventDefault());
                    }),
                    Z = (0, l.L)(() => {
                        let e = N.isIdentityExperimentEnabled && N.cashbackValuePercent,
                            t = !N.isIdentityExperimentEnabled && N.isCashbackExperimentEnabled && N.cashbackTitle;
                        if (e || t)
                            return (0, n.jsx)(b.m, {
                                className: R().cashback,
                                titleClassName: R().cashbackTitle,
                                title: N.cashbackTitle,
                                valuePercent: N.cashbackValuePercent,
                            });
                    }),
                    Y = (0, n.jsx)(A.M, { concert: N, withCashback: !1, withInlineMeta: T, titleSize: 'l' }),
                    q = (0, n.jsx)(j, { concert: N, cashback: Z });
                return (0, n.jsxs)(n.Fragment, {
                    children: [
                        (0, n.jsxs)('div', {
                            className: R().root,
                            role: 'button',
                            tabIndex: 0,
                            onClick: $,
                            onKeyDown: K,
                            ref: S,
                            'data-intersection-property-id': L,
                            'data-test-id': c.OA.concert.CONCERT_CARD,
                            children: [
                                (0, n.jsx)(h.q, { children: (0, n.jsx)(_.HL, { variant: 'div', children: (0, n.jsx)(i.A, { id: 'entity-names.concert' }) }) }),
                                (0, n.jsx)('div', {
                                    className: R().cover,
                                    children: (0, n.jsx)(O.W, {
                                        datetime: N.datetime,
                                        coverColor: null == (t = N.cover) ? void 0 : t.color,
                                        uri: null == (a = N.cover) ? void 0 : a.uri,
                                        withMask: k,
                                        cashbackPercent: N.isIdentityExperimentEnabled ? N.cashbackValuePercent : void 0,
                                    }),
                                }),
                                N.isIdentityExperimentEnabled ? Y : q,
                                !!(null == (r = N.price) ? void 0 : r.value) && (0, n.jsx)(h.q, { children: (0, n.jsx)(_.HL, { variant: 'div', children: G }) }),
                                w &&
                                    (0, n.jsx)(m.$, {
                                        'aria-hidden': !0,
                                        tabIndex: -1,
                                        radius: 'xxxl',
                                        className: R().button,
                                        size: 'default',
                                        variant: 'default',
                                        color: 'primary',
                                        onClick: V,
                                        'data-test-id': c.OA.concert.CONCERT_CARD_BUTTON,
                                        children: G,
                                    }),
                            ],
                        }),
                        (0, n.jsx)(E.h, { dataSessionId: N.dataSessionId, isOpened: I, onOpen: P, onClose: W }),
                    ],
                });
            });
        },
        54267: (e) => {
            e.exports = {
                root: 'ConcertImage_root__gZpOa',
                root_withMask: 'ConcertImage_root_withMask__1ayfK',
                image: 'ConcertImage_image__xtZCZ',
                day: 'ConcertImage_day__c90Ih',
                month: 'ConcertImage_month__Ic5k5',
                date: 'ConcertImage_date__aH1IR',
                date_withEventType: 'ConcertImage_date_withEventType__QRb1o',
                day_withEventType: 'ConcertImage_day_withEventType__GI5B9',
                month_withEventType: 'ConcertImage_month_withEventType__Thry7',
                weekday_withEventType: 'ConcertImage_weekday_withEventType__v4vMZ',
                dateBackground: 'ConcertImage_dateBackground__GAONC',
                weekday: 'ConcertImage_weekday__kXeo3',
                important: 'ConcertImage_important__0o7jF',
                cashback: 'ConcertImage_cashback__TQ_tu',
            };
        },
        59245: (e) => {
            e.exports = { root: 'CashbackPercentBadge_root__rP2Rj', icon: 'CashbackPercentBadge_icon__dq7pE', text: 'CashbackPercentBadge_text__Uol3I' };
        },
        61744: (e, t, a) => {
            'use strict';
            a.d(t, { M: () => _ });
            var n = a(32290),
                r = a(96103),
                i = a(55178),
                s = a(39407),
                c = a(21732),
                o = a(6752),
                l = a(71926),
                d = a(98066),
                m = a(10570),
                h = a.n(m);
            let _ = (0, r.PA)((e) => {
                let { id: t, concert: a, withCashback: r = !0, withInlineMeta: m = !1, titleSize: _ = 'm' } = e,
                    p = [],
                    u = (0, n.jsx)(l.HL, { variant: 'span', size: 'm', weight: 'medium', 'aria-hidden': !0, children: '•' });
                ((null == a ? void 0 : a.eventKind) &&
                    p.push(
                        (0, n.jsx)(l.HL, {
                            variant: 'span',
                            size: 'm',
                            weight: 'medium',
                            'data-test-id': c.OA.concert.CONCERT_CARD_EVENT_KIND,
                            children: (0, n.jsx)(s.A, { id: 'concerts.event-kind', values: { kind: a.eventKind } }),
                        }),
                    ),
                    (null == a ? void 0 : a.contentRating) &&
                        p.push(
                            u,
                            (0, n.jsx)(l.HL, {
                                variant: 'span',
                                size: 'm',
                                weight: 'medium',
                                'data-test-id': c.OA.concert.CONCERT_CARD_CONTENT_RATING,
                                children: a.contentRating,
                            }),
                        ));
                let g = (0, o.L)(() =>
                    (null == a ? void 0 : a.city)
                        ? (0, n.jsx)(l.HL, {
                              variant: 'span',
                              size: 'm',
                              weight: 'medium',
                              lineClamp: 1,
                              'data-test-id': c.OA.concert.CONCERT_CARD_LOCATION,
                              children: a.city,
                          })
                        : null,
                );
                return (
                    m && g && p.push(u, g),
                    (0, n.jsxs)('div', {
                        className: h().root,
                        id: t,
                        children: [
                            (0, n.jsx)(l.HL, {
                                variant: 'div',
                                size: _,
                                weight: 'medium',
                                className: h().city,
                                lineClamp: 1,
                                'data-test-id': c.OA.concert.CONCERT_CARD_TITLE,
                                children: null == a ? void 0 : a.title,
                            }),
                            (0, n.jsx)('div', { className: h().info, children: p.map((e, t) => (0, i.cloneElement)(e, { key: t })) }),
                            !m && g,
                            r &&
                                (null == a ? void 0 : a.isIdentityExperimentEnabled) &&
                                a.cashbackValuePercent &&
                                (0, n.jsx)(d.m, { className: h().cashback, valuePercent: a.cashbackValuePercent }),
                            r &&
                                !(null == a ? void 0 : a.isIdentityExperimentEnabled) &&
                                (null == a ? void 0 : a.isCashbackExperimentEnabled) &&
                                a.cashbackTitle &&
                                (0, n.jsx)(d.m, { className: h().cashback, title: a.cashbackTitle }),
                        ],
                    })
                );
            });
        },
        62980: (e, t, a) => {
            'use strict';
            a.d(t, { d: () => m });
            var n = a(32290),
                r = a(63618),
                i = a(60900),
                s = a(21732),
                c = a(71926),
                o = a(83560),
                l = a(19111),
                d = a.n(l);
            let m = (e) => {
                let { datetime: t, className: a, monthClassName: l, dayClassName: m, weekdayClassName: h, withWeekday: _ = !0, ...p } = e,
                    { formatDate: u } = (0, i.A)(),
                    g = ((e) => {
                        let { formatMessage: t } = (0, i.A)(),
                            a = {
                                0: t({ id: 'calendar.january-short' }),
                                1: t({ id: 'calendar.february-short' }),
                                2: t({ id: 'calendar.march-short' }),
                                3: t({ id: 'calendar.april-short' }),
                                4: t({ id: 'calendar.may-short' }),
                                5: t({ id: 'calendar.june-short' }),
                                6: t({ id: 'calendar.july-short' }),
                                7: t({ id: 'calendar.august-short' }),
                                8: t({ id: 'calendar.september-short' }),
                                9: t({ id: 'calendar.october-short' }),
                                10: t({ id: 'calendar.november-short' }),
                                11: t({ id: 'calendar.december-short' }),
                            };
                        if (e) return a[new Date(e).getMonth()];
                    })(t);
                return (0, n.jsxs)('div', {
                    className: (0, r.$)(d().root, a),
                    'aria-label': u(t, (0, o.s)()),
                    ...p,
                    'data-test-id': s.OA.concert.CONCERT_DATE,
                    children: [
                        (0, n.jsx)(c.HL, {
                            variant: 'div',
                            size: 'xs',
                            weight: 'bold',
                            className: (0, r.$)(d().month, l),
                            'data-test-id': s.OA.concert.CONCERT_DATE_MONTH,
                            children: g,
                        }),
                        (0, n.jsx)(c.HL, {
                            variant: 'div',
                            className: (0, r.$)(d().day, m),
                            'data-test-id': s.OA.concert.CONCERT_DATE_DAY,
                            children: u(t, { day: 'numeric' }),
                        }),
                        _ &&
                            (0, n.jsx)(c.HL, {
                                variant: 'div',
                                size: 'xs',
                                weight: 'bold',
                                className: (0, r.$)(d().weekday, h),
                                'data-test-id': s.OA.concert.CONCERT_DATE_WEEKDAY,
                                children: u(t, { weekday: 'short' }),
                            }),
                    ],
                });
            };
        },
        64146: (e) => {
            e.exports = { root: 'CashbackBadge_root__hStMF', icon: 'CashbackBadge_icon__RJ6qe', title: 'CashbackBadge_title__neGD7' };
        },
        64170: (e, t, a) => {
            'use strict';
            a.d(t, { SomethingWentWrong: () => b });
            var n = a(32290),
                r = a(63618),
                i = a(96103),
                s = a(55178),
                c = a(60900),
                o = a(39407),
                l = a(63423),
                d = a(82586),
                m = a(71926),
                h = a(17811),
                _ = a(99923),
                p = a(90153),
                u = a(74416),
                g = a(62376),
                C = a(37240),
                v = a(83920),
                x = a(20472),
                y = a(12894),
                f = a(30310),
                E = a.n(f);
            let b = (0, i.PA)((e) => {
                let { className: t, withBackwardControl: a = !0 } = e,
                    { formatMessage: i } = (0, c.A)(),
                    f = i({ id: 'error-messages.something-went-wrong' });
                !(function (e) {
                    let t = (0, u.st)(),
                        { hash: a } = (0, u.gf)(),
                        { pageId: n } = (0, C.$)(),
                        r = (0, g.U)();
                    (0, s.useEffect)(() => {
                        if (!t || !a || !n) return;
                        let i = (0, h.F)({
                            params: {
                                entityType: _.EntityTypes.Error,
                                entityId: _.EntityTypes.SomethingWrong,
                                errorMessage: e,
                                hash: a,
                                pageId: n,
                                pageStyle: _.PageStyles.Fullscreen,
                                pagePlacement: _.PagePlacements.Fullscreen,
                                mainObjectType: _.DomainObjectType.NonApplicable,
                                mainObjectId: _.DomainObjectType.NonApplicable,
                            },
                            logger: r,
                            context: 'useSendEventOnSomethingWentWrongShowed',
                        });
                        i && (0, p.z5)(t.evgenInstance, i);
                    }, [t, e, a, n, r]);
                })(f);
                let { sendRefreshEvent: b } = (function () {
                        let e = (0, u.st)(),
                            { hash: t } = (0, u.gf)(),
                            { pageId: a } = (0, C.$)(),
                            n = (0, g.U)();
                        return {
                            sendRefreshEvent: (0, s.useCallback)(() => {
                                if (!e || !t || !a) return;
                                let r = (0, h.F)({
                                    params: {
                                        actionType: _.ActionType.Refresh,
                                        userInteractionType: _.UserInteractionType.Tap,
                                        entityType: _.EntityTypes.Error,
                                        entityId: _.EntityTypes.SomethingWrong,
                                        hash: t,
                                        pageId: a,
                                        pageStyle: _.PageStyles.Fullscreen,
                                        pagePlacement: _.PagePlacements.Fullscreen,
                                        mainObjectType: _.DomainObjectType.NonApplicable,
                                        mainObjectId: _.DomainObjectType.NonApplicable,
                                    },
                                    logger: n,
                                    context: 'useSendEventOnSomethingWentWrongRefreshed',
                                });
                                r && (0, p.bv)(e.evgenInstance, r);
                            }, [e, t, a, n]),
                        };
                    })(),
                    N = (0, s.useCallback)(() => {
                        (b(), (window.location.href = x.Z.main.href));
                    }, [b]),
                    { contentRef: k } = (0, v.g)();
                return (0, n.jsxs)('div', {
                    className: (0, r.$)(E().root, t),
                    children: [
                        a &&
                            (0, n.jsx)(y.L, { withBackwardFallback: '/', className: (0, r.$)(E().navigation, { [E().navigation_desktop]: !k }), withForwardControl: !1 }),
                        (0, n.jsxs)('div', {
                            className: (0, r.$)(E().content, { [E().content_shrink]: !a }),
                            children: [
                                (0, n.jsx)(d.I, { className: E().icon, variant: 'attention', size: 'xxl' }),
                                (0, n.jsx)(m.DZ, { className: (0, r.$)(E().title, E().important), variant: 'h3', size: 'xs', children: f }),
                                (0, n.jsxs)(m.HL, {
                                    className: (0, r.$)(E().text, E().important),
                                    variant: 'span',
                                    type: 'text',
                                    size: 'l',
                                    weight: 'normal',
                                    children: [!1, (0, n.jsx)(o.A, { id: 'page-error.try-to-restart-app' })],
                                }),
                                (0, n.jsx)(l.$, {
                                    onClick: N,
                                    className: E().button,
                                    role: 'link',
                                    color: 'secondary',
                                    size: 'l',
                                    radius: 'xxxl',
                                    children: (0, n.jsxs)(m.HL, {
                                        type: 'controls',
                                        variant: 'span',
                                        size: 'm',
                                        children: [!1, (0, n.jsx)(o.A, { id: 'page-error.restart-app-button' })],
                                    }),
                                }),
                            ],
                        }),
                    ],
                });
            });
        },
        74523: (e, t, a) => {
            'use strict';
            a.d(t, { C: () => n });
            let n = (e, t) => {
                let [a, n] = e.split('?'),
                    r = new URLSearchParams(n || '');
                for (let [e, a] of new URLSearchParams(t).entries()) r.set(e, a);
                let i = r.toString();
                return ''.concat(a).concat(i ? '?'.concat(i) : '');
            };
        },
        79248: (e, t, a) => {
            'use strict';
            a.d(t, { r: () => l });
            var n = a(77307),
                r = a(55178),
                i = a(91027),
                s = a(83920),
                c = a(57594);
            let o = { width: 400, height: 400 },
                l = (e) => {
                    let { count: t, getEstimateSize: a, gap: l, containerRef: d, overscan: m = 2 } = e,
                        {
                            settings: { isMobile: h },
                        } = (0, c.g)(),
                        { contentScrollRef: _ } = (0, s.g)(),
                        p = (0, r.useRef)(new Map()),
                        u = (0, r.useRef)(void 0),
                        g = {
                            count: t,
                            gap: l,
                            estimateSize: (e) => {
                                let t = p.current.get(String(e));
                                return null != t ? t : a(e);
                            },
                            overscan: m,
                            initialRect: o,
                            isScrollingResetDelay: 50,
                            scrollMargin: ((e, t, a) => {
                                if (!t) return 0;
                                let n = t.getBoundingClientRect().top;
                                return e && 1 ? n + window.scrollY : !e && a ? n + a.scrollTop : 0;
                            })(h, d, _),
                        },
                        C = (0, n.XW)(g),
                        v = (0, n.Te)({ ...g, getScrollElement: () => _, initialOffset: null == _ ? void 0 : _.scrollTop }),
                        x = h ? C : v,
                        y = (0, i.c)(() => {
                            x.measure();
                        });
                    return (
                        (0, r.useEffect)(() => {
                            u.current ||
                                (u.current = new ResizeObserver((e) => {
                                    let t = !1;
                                    (e.forEach((e) => {
                                        let a = e.target.getAttribute('data-index');
                                        if (e.target && a) {
                                            let n = e.contentRect.height;
                                            n && n !== p.current.get(a) && (p.current.set(a, e.contentRect.height), (t = !0));
                                        }
                                    }),
                                        t && y());
                                }));
                        }, [y]),
                        { virtualizer: x, resizeObserver: u.current }
                    );
                };
        },
        81697: (e, t, a) => {
            'use strict';
            a.d(t, { W: () => w });
            var n,
                r,
                i = a(32290),
                s = a(63618),
                c = a(96103),
                o = a(55178),
                l = a(21732),
                d = a(6752),
                m = a(50162),
                h = a(57594),
                _ = a(79406),
                p = a(85472);
            let u = (e) => (0, p.httpsReplacer)(e.replace('%%', '960x690_noncrop'));
            var g = a(39407),
                C = a(71926);
            function v() {
                return (v = Object.assign
                    ? Object.assign.bind()
                    : function (e) {
                          for (var t = 1; t < arguments.length; t++) {
                              var a = arguments[t];
                              for (var n in a) ({}).hasOwnProperty.call(a, n) && (e[n] = a[n]);
                          }
                          return e;
                      }).apply(null, arguments);
            }
            let x = function (e) {
                return o.createElement(
                    'svg',
                    v({ xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 24 24', fill: 'none' }, e),
                    n ||
                        (n = o.createElement(
                            'defs',
                            null,
                            o.createElement(
                                'linearGradient',
                                { id: 'plusColorGradient', x1: 0, x2: 24, y1: 10.4, y2: 10.4, gradientUnits: 'userSpaceOnUse' },
                                o.createElement('stop', { stopColor: '#FF5C4D' }),
                                o.createElement('stop', { offset: 0.4, stopColor: '#EB469F' }),
                                o.createElement('stop', { offset: 1, stopColor: '#8341EF' }),
                            ),
                            o.createElement('clipPath', { id: 'plusColorClip' }, o.createElement('rect', { width: 24, height: 24, fill: '#fff', rx: 12 })),
                        )),
                    r ||
                        (r = o.createElement(
                            'g',
                            { clipPath: 'url(#plusColorClip)' },
                            o.createElement('rect', { width: 24, height: 24, fill: '#fff', rx: 12 }),
                            o.createElement('path', {
                                fill: 'url(#plusColorGradient)',
                                fillRule: 'evenodd',
                                d: 'M24 12c0 6.627-5.373 12-12 12S0 18.627 0 12 5.373 0 12 0c1.295 0 2.542.205 3.71.585L12.977 9H4.989l-.976 3H12l-2.34 7.2h3.3L15.3 12H24Zm-.378-3h-7.346l2.29-7.046A12.019 12.019 0 0 1 23.622 9Z',
                                clipRule: 'evenodd',
                            }),
                        )),
                );
            };
            var y = a(59245),
                f = a.n(y);
            let E = (e) => {
                let { percent: t, className: a } = e;
                return (0, i.jsxs)('div', {
                    className: (0, s.$)(f().root, a),
                    'data-test-id': l.OA.concert.CONCERT_CARD_CASHBACK_PERCENT,
                    children: [
                        (0, i.jsx)(x, { 'aria-hidden': !0, className: f().icon }),
                        (0, i.jsx)(C.HL, {
                            variant: 'span',
                            type: 'text',
                            size: 'xs',
                            weight: 'medium',
                            className: f().text,
                            children: (0, i.jsx)(g.A, { id: 'entity-names.percent', values: { value: t } }),
                        }),
                    ],
                });
            };
            var b = a(62980),
                N = a(54267),
                k = a.n(N);
            let w = (0, c.PA)((e) => {
                let { uri: t, withMask: a, datetime: n, coverColor: r, cashbackPercent: c } = e,
                    { experiments: g } = (0, h.g)(),
                    [C, v] = (0, o.useState)(!1),
                    x = g.checkExperiment(_.z.NewConcertsTicketRedesign, 'on') && a,
                    y = g.checkExperiment(_.z.WebNextConcertsIdentityEventType, 'on'),
                    f = (0, o.useCallback)(() => {
                        v(!0);
                    }, []),
                    N = (0, d.L)(() => {
                        if (r)
                            return {
                                '--concert-image-date-background': ((e) => {
                                    let { h: t, s: a, l: n } = (0, p.hexToHsl)(e);
                                    return 'hsl('
                                        .concat(t, ', ')
                                        .concat(a, '%, ')
                                        .concat(n <= 55 ? n + 20 : n - 20, '%)');
                                })(r),
                            };
                    }),
                    w = (0, d.L)(() =>
                        n
                            ? (0, i.jsxs)('div', {
                                  className: (0, s.$)(k().date, { [k().date_withEventType]: y }),
                                  children: [
                                      (0, i.jsx)(m._V, {
                                          className: k().dateBackground,
                                          fit: 'cover',
                                          src: 'avatars.mds.yandex.net/get-music-misc/28052/img.69aab8c335547735b2df1c54/%%',
                                          'aria-hidden': !0,
                                          withAvatarReplace: !0,
                                          withLoadingIndicator: !1,
                                          onLoad: f,
                                      }),
                                      C &&
                                          (0, i.jsx)(b.d, {
                                              className: k().root_withEventType,
                                              dayClassName: k().day_withEventType,
                                              weekdayClassName: k().weekday_withEventType,
                                              monthClassName: k().month_withEventType,
                                              datetime: n,
                                          }),
                                  ],
                              })
                            : null,
                    ),
                    T = (0, d.L)(() =>
                        n
                            ? (0, i.jsx)(b.d, {
                                  dayClassName: k().day,
                                  weekdayClassName: (0, s.$)(k().weekday, k().important),
                                  monthClassName: k().month,
                                  className: k().date,
                                  datetime: n,
                              })
                            : null,
                    );
                return (0, i.jsxs)('div', {
                    className: (0, s.$)(k().root, { [k().root_withMask]: x }),
                    style: N,
                    children: [
                        (0, i.jsx)(m._V, {
                            className: k().image,
                            fit: 'cover',
                            src: t,
                            withAvatarReplace: !0,
                            createUrlReplacer: u,
                            'aria-hidden': !0,
                            'data-test-id': l.OA.concert.CONCERT_CARD_IMAGE,
                        }),
                        n && (y ? w : T),
                        y && c && (0, i.jsx)(E, { className: k().cashback, percent: c }),
                    ],
                });
            });
        },
        86562: (e, t, a) => {
            'use strict';
            a.d(t, { v: () => n });
            var n = (function (e) {
                return ((e.SPACE = 'Space'), (e.ENTER = 'Enter'), (e.ESCAPE = 'Escape'), e);
            })({});
        },
        88404: (e, t, a) => {
            'use strict';
            a.d(t, { L: () => c });
            var n = a(32290),
                r = a(79856),
                i = a(96871),
                s = a.n(i);
            let c = (e) => {
                let { isActive: t, withMeta: a, withPriceButton: i } = e;
                return (0, n.jsxs)('div', {
                    className: s().root,
                    children: [
                        (0, n.jsx)(r.W, { radius: 'm', className: s().shimmerCover, isActive: t }),
                        (0, n.jsxs)('div', {
                            className: s().meta,
                            children: [
                                (0, n.jsx)(r.W, { isActive: t, radius: 'xxxl', className: s().shimmerTitle }),
                                a &&
                                    (0, n.jsxs)(n.Fragment, {
                                        children: [
                                            (0, n.jsx)(r.W, { isActive: t, radius: 'xxxl', className: s().shimmerInfo }),
                                            (0, n.jsx)(r.W, { isActive: t, radius: 'xxxl', className: s().shimmerCity }),
                                        ],
                                    }),
                            ],
                        }),
                        i && (0, n.jsx)(r.W, { isActive: t, radius: 'xxxl', className: s().shimmerButton }),
                    ],
                });
            };
        },
        90480: (e, t, a) => {
            'use strict';
            a.d(t, { t: () => n });
            let n = {
                statusCodes: {
                    408: { retryPolicy: 'constant-backoff', attempts: [2e3, 5e3] },
                    429: { retryPolicy: 'constant-backoff', attempts: [2e3, 5e3] },
                    500: { retryPolicy: 'constant-backoff', attempts: [1e3, 3e3] },
                    502: { retryPolicy: 'constant-backoff', attempts: [1e3, 3e3] },
                    503: { retryPolicy: 'constant-backoff', attempts: [1e3, 3e3] },
                    504: { retryPolicy: 'constant-backoff', attempts: [2e3, 5e3] },
                    NON_HTTP_ERROR: { retryPolicy: 'constant-backoff', attempts: [1e3, 1e3] },
                    TIMEOUT: { retryPolicy: 'constant-backoff', attempts: [500] },
                },
                totalRequestsLimit: 3,
            };
        },
        96871: (e) => {
            e.exports = {
                root: 'ConcertCardWithImage_root__NHF59',
                cover: 'ConcertCardWithImage_cover__3V2fk',
                cashbackTitle: 'ConcertCardWithImage_cashbackTitle__lfr7z',
                cashback: 'ConcertCardWithImage_cashback__sNa2M',
                shimmerCover: 'ConcertCardWithImage_shimmerCover___X6xn',
                shimmerTitle: 'ConcertCardWithImage_shimmerTitle__YgaQa',
                shimmerInfo: 'ConcertCardWithImage_shimmerInfo__yUfJ4',
                shimmerCity: 'ConcertCardWithImage_shimmerCity__VlGY_',
                meta: 'ConcertCardWithImage_meta__mhsYf',
                button: 'ConcertCardWithImage_button__osv22',
                shimmerButton: 'ConcertCardWithImage_shimmerButton__JZEFY',
            };
        },
        98066: (e, t, a) => {
            'use strict';
            a.d(t, { m: () => d });
            var n = a(32290),
                r = a(63618),
                i = a(21732),
                s = a(82586),
                c = a(71926),
                o = a(64146),
                l = a.n(o);
            let d = (e) => {
                let { title: t, className: a, titleClassName: o, valuePercent: d } = e;
                return (0, n.jsxs)('div', {
                    className: (0, r.$)(l().root, a),
                    children: [
                        (0, n.jsx)(s.I, { 'aria-hidden': !0, className: l().icon, variant: 'plus' }),
                        (0, n.jsx)(c.HL, {
                            variant: 'span',
                            type: 'text',
                            size: 'm',
                            weight: 'medium',
                            lineClamp: 1,
                            className: (0, r.$)(l().title, o),
                            'data-test-id': i.OA.concert.CONCERT_CARD_CASHBACK,
                            children: d ? ''.concat(d, '%') : t,
                        }),
                    ],
                });
            };
        },
    },
]);
