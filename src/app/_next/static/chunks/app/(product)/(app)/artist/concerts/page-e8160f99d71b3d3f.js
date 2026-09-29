(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [3042],
    {
        3785: (e, t, a) => {
            'use strict';
            var n;
            (a.d(t, { M: () => n }),
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
                })(n || (n = {})));
        },
        3796: (e, t, a) => {
            'use strict';
            a.d(t, { J: () => i });
            var n = a(21916),
                r = a(55178);
            let i = (e) => {
                let t = (0, n.usePathname)(),
                    [a, i] = (0, r.useState)(!1);
                ((0, r.useEffect)(() => {
                    (window.Ya.Rum.spa.makeSpaSubPage(t), window.Ya.Rum.spa.startDataLoading(t));
                }),
                    (0, r.useEffect)(() => {
                        window.Ya.Rum.spa.getLastSpaSubPage(t) && e && !a && (window.Ya.Rum.spa.finishDataLoading(t), window.Ya.Rum.spa.startDataRendering(t), i(!0));
                    }, [e, a, t]));
            };
        },
        8626: (e, t, a) => {
            'use strict';
            a.d(t, { m: () => n });
            let n = () => ({ year: 'numeric' });
        },
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
        12526: (e, t, a) => {
            var n = { './en.json': [46983, 6983], './kk.json': [64042, 4042], './ru.json': [20937, 937], './uz.json': [76707, 6707] };
            function r(e) {
                if (!a.o(n, e))
                    return Promise.resolve().then(() => {
                        var t = Error("Cannot find module '" + e + "'");
                        throw ((t.code = 'MODULE_NOT_FOUND'), t);
                    });
                var t = n[e],
                    r = t[0];
                return a.e(t[1]).then(() => a.t(r, 19));
            }
            ((r.keys = () => Object.keys(n)), (r.id = 12526), (e.exports = r));
        },
        12578: (e, t, a) => {
            'use strict';
            a.d(t, { h: () => v });
            var n = a(32290),
                r = a(55178),
                i = a(60900),
                s = a(37511),
                o = a(21732),
                l = a(63423),
                c = a(84638),
                d = a(74196),
                u = a(70204),
                m = a(34186),
                b = a(8671),
                p = a(21916),
                x = a(74523),
                g = a(97201),
                f = a(11489),
                N = a.n(f);
            let v = (e) => {
                let { dataSessionId: t, isOpened: a, onOpen: f, onClose: v } = e,
                    h = (0, m.N)().get(u.V4),
                    { formatMessage: _ } = (0, i.A)(),
                    y = (() => {
                        let e = (0, p.useSearchParams)();
                        return (0, r.useCallback)(
                            (t) => {
                                let a = e.get(g.K.UTM_CAMPAIGN);
                                if (!a) return t;
                                let n = new URLSearchParams();
                                return (n.set(g.K.UTM_SOURCE, 'campaignid_'.concat(a)), (0, x.C)(t, n));
                            },
                            [e],
                        );
                    })(),
                    C = (0, r.useCallback)(
                        (e) => {
                            e.origin === h.afisha.host && 'close' === e.data.type && v();
                        },
                        [v, h.afisha.host],
                    );
                (0, r.useEffect)(
                    () => (
                        window.addEventListener('message', C),
                        () => {
                            window.removeEventListener('message', C);
                        }
                    ),
                    [C],
                );
                let E = (0, r.useCallback)(
                        (e) => {
                            e ? f() : v();
                        },
                        [v, f],
                    ),
                    W = (0, s.tE)(h, (0, b.u)()),
                    k = y(''.concat(h.afisha.host, '/w/sessions/').concat(t, '?clientKey=').concat(W));
                return (0, n.jsxs)(c.a, {
                    size: 'fitContent',
                    placement: 'center',
                    open: a,
                    onOpenChange: E,
                    onClose: v,
                    showHeader: !1,
                    className: N().widget,
                    contentClassName: N().content,
                    overlayColor: 'full',
                    'data-test-id': o.OA.concert.AFISHA_MODAL,
                    children: [
                        (0, n.jsx)(d.q, { children: (0, n.jsx)(l.$, { 'aria-label': _({ id: 'interface-actions.close' }), onClick: v }) }),
                        (0, n.jsx)('iframe', {
                            src: k,
                            className: N().root,
                            referrerPolicy: 'no-referrer',
                            sandbox: 'allow-forms allow-modals allow-popups allow-scripts allow-same-origin',
                            allow: 'clipboard-read clipboard-write',
                        }),
                    ],
                });
            };
        },
        12989: (e, t, a) => {
            'use strict';
            a.d(t, { D: () => N });
            var n = a(55178),
                r = a(17811),
                i = a(92146),
                s = a(74416),
                o = a(6752),
                l = a(62376),
                c = a(1677),
                d = a(48922),
                u = a(84782),
                m = a(30915),
                b = a(18746),
                p = a(2792),
                x = a(37240),
                g = a(51012),
                f = a(47498);
            let N = () => {
                let e = (0, l.U)(),
                    t = (0, s.st)(),
                    { hash: a } = (0, s.gf)(),
                    { pageId: N, displayReasonId: v } = (0, x.$)(),
                    { tabId: h, tabPos: _, isTabSelectedByDefault: y } = (0, f.R)(),
                    { offsetBlockPosY: C } = (0, m.u)(),
                    { blockType: E, blockId: W, blockPosX: k, blockPosY: A, mainObjectId: T, mainObjectType: S, displayReasonId: P } = (0, u.N)(),
                    { filterKey: I, filterValue: O, filterPos: L } = (0, b.G)(),
                    { objectType: R, objectsCount: w, objectId: D, objectPosX: j, objectPosY: M } = (0, p.J)(),
                    { skeleton: F } = (0, g.b)(),
                    U = null != P ? P : v,
                    H = (0, o.L)(() => (void 0 !== C && void 0 !== A ? C + A : A));
                return (0, n.useCallback)(
                    (n, s) => {
                        if (!t || !N || !d.xK.includes(N) || !d.fD.includes(N)) return;
                        let o = c.F[N];
                        if (!o) return;
                        let l = {
                            hash: a,
                            pageId: o,
                            entityType: E,
                            entityId: W,
                            entityPosX: k,
                            entityPosY: H,
                            objectsCount: w,
                            viewUuid: s,
                            objectType: R,
                            objectId: D,
                            objectPosX: j,
                            objectPosY: M,
                        };
                        (void 0 !== I && ((l.filterKey = I), (l.filterValue = O), (l.filterPos = L)),
                            d.qG.includes(N) && ((l.tabId = h), (l.tabPos = _), (l.isTabSelectedByDefault = y)),
                            F && (l.skeletonId = F),
                            'string' == typeof T && 'string' == typeof S && ((l.mainObjectType = S), (l.mainObjectId = T)),
                            U && (l.displayReasonId = U));
                        let u = (0, r.F)({ params: l, logger: e, context: 'useSendEventOnBlockShowedOrHidden' });
                        u && (n ? (0, i.Pf)(t.evgenInstance, u) : (0, i.nv)(t.evgenInstance, u));
                    },
                    [t, U, W, k, H, E, I, L, O, a, y, e, T, S, D, j, M, R, w, N, F, h, _],
                );
            };
        },
        13819: (e, t, a) => {
            'use strict';
            a.d(t, { Z: () => m });
            var n = a(32290),
                r = a(96103),
                i = a(55178),
                s = a(60900),
                o = a(71926),
                l = a(30436),
                c = a(98066),
                d = a(10570),
                u = a.n(d);
            let m = (0, r.PA)((e) => {
                let { id: t, concert: a } = e,
                    { formatDate: r } = (0, s.A)(),
                    d = [],
                    m = (0, n.jsx)(o.HL, { variant: 'span', size: 'm', weight: 'medium', 'aria-hidden': !0, children: '•' });
                return (
                    (null == a ? void 0 : a.place) && d.push((0, n.jsx)(o.HL, { variant: 'span', size: 'm', weight: 'medium', lineClamp: 1, children: a.place })),
                    (null == a ? void 0 : a.datetime) &&
                        d.push(m, (0, n.jsx)(o.HL, { variant: 'span', size: 'm', weight: 'medium', className: u().time, children: r(a.datetime, (0, l.f)()) })),
                    (null == a ? void 0 : a.contentRating) && d.push(m, (0, n.jsx)(o.HL, { variant: 'span', size: 'm', weight: 'medium', children: a.contentRating })),
                    (0, n.jsxs)('div', {
                        className: u().root,
                        id: t,
                        children: [
                            (0, n.jsx)(o.HL, { variant: 'div', size: 'm', weight: 'medium', className: u().city, lineClamp: 1, children: null == a ? void 0 : a.city }),
                            (0, n.jsx)('div', { className: u().info, children: d.map((e, t) => (0, i.cloneElement)(e, { key: t })) }),
                            (null == a ? void 0 : a.isIdentityExperimentEnabled) &&
                                a.cashbackValuePercent &&
                                (0, n.jsx)(c.m, { className: u().cashback, valuePercent: a.cashbackValuePercent }),
                            !(null == a ? void 0 : a.isIdentityExperimentEnabled) &&
                                (null == a ? void 0 : a.isCashbackExperimentEnabled) &&
                                a.cashbackTitle &&
                                (0, n.jsx)(c.m, { className: u().cashback, title: a.cashbackTitle }),
                        ],
                    })
                );
            });
        },
        14190: (e, t, a) => {
            'use strict';
            a.d(t, { Xn: () => i, cy: () => r, pE: () => n });
            let n = {
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
                r = 'yandex',
                i = 'ru-RU';
        },
        14459: (e, t, a) => {
            'use strict';
            function n() {
                return { appId: '117328825040925' };
            }
            a.d(t, { k: () => n });
        },
        15559: (e, t, a) => {
            'use strict';
            a.d(t, { v: () => r });
            var n = a(79406);
            let r = (e) => {
                let { checkExperiment: t, getDisclaimerContent: a, getExplicitContent: r, userRegion: i } = e;
                return 'ru' === i && t(n.z.WebNextFooterDisclaimer, 'on') ? a() : r();
            };
        },
        17024: (e, t, a) => {
            'use strict';
            a.d(t, { L: () => r });
            let n = /^(0|[1-9]\d*)$/;
            function r(e) {
                return void 0 !== e && !(e.length > 40) && n.test(e);
            }
        },
        18870: (e, t, a) => {
            'use strict';
            var n;
            (a.d(t, { $: () => n }),
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
                })(n || (n = {})));
        },
        19111: (e) => {
            e.exports = { root: 'ConcertDate_root__xnVG1', month: 'ConcertDate_month__ti5Na', day: 'ConcertDate_day__YibpP', weekday: 'ConcertDate_weekday__fBZXo' };
        },
        19383: (e, t, a) => {
            'use strict';
            a.d(t, { l: () => u });
            var n = a(55178),
                r = a(27576),
                i = a(91027),
                s = a(70204),
                o = a(34186),
                l = a(57594),
                c = a(85017),
                d = a(19379);
            let u = (e) => {
                let {
                        entity: t,
                        entityType: a,
                        getStorageKey: u,
                        callback: m,
                        onAfterHandled: b,
                        onBeforeHandle: p,
                        onReject: x,
                        modalBehavior: g,
                        preventDefaultWhenSafe: f,
                    } = e,
                    {
                        disclaimerModalState: N,
                        modals: { disclaimerModal: v },
                    } = (0, l.g)(),
                    h = (0, n.useRef)(String((0, r.A)())),
                    _ = (0, n.useRef)(!1),
                    y = (0, n.useRef)(!1),
                    C = (0, n.useRef)(0),
                    E = (0, n.useRef)(!0),
                    W = (0, o.N)().get(s.U2),
                    k = (0, i.c)((e) => {
                        (f && (null == e || e.preventDefault()), m && m(e), b && b());
                    });
                return (
                    (0, n.useEffect)(() => {
                        N.isUnsafeDisclaimerConfirmed && N.id === h.current && !_.current && (k(), (_.current = !0));
                    }, [N.id, N.isUnsafeDisclaimerConfirmed, k]),
                    (0, n.useEffect)(() => {
                        N.isNeededToLoad && (null == t ? void 0 : t.isLegalRejected) && t.resolvedModalData && N.setModalData(t.resolvedModalData);
                    }, [N, null == t ? void 0 : t.isLegalRejected, null == t ? void 0 : t.resolvedModalData]),
                    (0, n.useEffect)(
                        () => () => {
                            E.current = !1;
                        },
                        [],
                    ),
                    (0, i.c)(async (e) => {
                        if (!y.current) {
                            y.current = !0;
                            try {
                                if ((null == p || p(e), t)) {
                                    var n, r, i;
                                    let s = t.getDisclaimerEntityRef(a),
                                        o = null != (n = null == u ? void 0 : u(t, s)) ? n : ''.concat(s.entityType, '_').concat(s.entityId),
                                        l = t.isLegalRejected || t.isUnsafeLegal;
                                    if (t.isUnsafeLegal) {
                                        let t = W.get(d.c.ExEx);
                                        if (null == t ? void 0 : t.includes(o)) return void k(e);
                                    }
                                    if (l) {
                                        (null == e || e.preventDefault(),
                                            t.isUnsafeLegal && N.setType(c.Z.UNSAFE),
                                            N.setDisclaimerRejectHandler(null != x ? x : null),
                                            N.setId(h.current),
                                            N.setEntityKey(o),
                                            N.setCurrentEntityRef(s.entityType, s.entityId),
                                            N.setShouldHistoryBack(!!(null == g ? void 0 : g.shouldHistoryBack)),
                                            N.setShouldCloseModalOnOutsidePress(null == (r = null == g ? void 0 : g.closeOnOutside) || r),
                                            N.setShouldCloseModalOnEscape(null == (i = null == g ? void 0 : g.closeOnEscape) || i),
                                            (C.current += 1));
                                        let a = C.current,
                                            n = await t.getModalDisclaimerData();
                                        if (C.current !== a || !1 === E.current) return;
                                        (N.setModalData(null != n ? n : null), (_.current = !1), v.open());
                                        return;
                                    }
                                    (f && (null == e || e.preventDefault()), k(e));
                                    return;
                                }
                                (f && (null == e || e.preventDefault()), k(e));
                            } finally {
                                y.current = !1;
                            }
                        }
                    })
                );
            };
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
        20472: (e, t, a) => {
            'use strict';
            a.d(t, { Z: () => r });
            var n = a(68243);
            let r = {
                main: (0, n.u)('/'),
                chart: (0, n.u)('/chart'),
                chartPodcasts: (0, n.u)('/chart/podcasts'),
                collection: (0, n.u)('/collection'),
                collectionAlbums: (0, n.u)('/collection/albums'),
                collectionArtists: (0, n.u)('/collection/artists'),
                collectionClips: (0, n.u)('/collection/clips'),
                collectionDislikes: (0, n.u)('/collection/dislikes'),
                collectionKids: (0, n.u)('/collection/kids'),
                collectionKidsAlbums: (0, n.u)('/collection/kids/albums'),
                collectionKidsPlaylists: (0, n.u)('/collection/kids/playlists'),
                collectionKidsTracks: (0, n.u)('/collection/kids/tracks'),
                collectionNonMusic: (0, n.u)('/collection/non-music'),
                collectionNonMusicLiked: (0, n.u)('/collection/non-music/liked'),
                collectionVibeRooms: (0, n.u)('/collection/multivibes'),
                collectionPlaylists: (0, n.u)('/collection/playlists'),
                collectionPlaylistsCreated: (0, n.u)('/collection/playlists/created'),
                collectionPlaylistsLiked: (0, n.u)('/collection/playlists/liked'),
                collectionShelf: (0, n.u)('/collection/shelf'),
                collectionShelfLiked: (0, n.u)('/collection/shelf/liked'),
                collectionShelfNewEpisodes: (0, n.u)('/collection/shelf/new-episodes'),
                collectionShelfRecentlyPlayed: (0, n.u)('/collection/shelf/recently-played'),
                concerts: (0, n.u)('/concerts'),
                kids: (0, n.u)('/kids'),
                mixes: (0, n.u)('/mixes'),
                musicHistory: (0, n.u)('/music-history'),
                muzmarket: (0, n.u)('/muzmarket'),
                mymusic: (0, n.u)('/mymusic'),
                mymusicDownloadsTracks: (0, n.u)('/mymusic/downloads/tracks'),
                multivibe: (0, n.u)('/multivibe'),
                nonMusic: (0, n.u)('/non-music'),
                pay: (0, n.u)('/pay'),
                userSlides: (0, n.u)('/slides/user'),
                search: (0, n.u)('/search'),
                searchHistory: (0, n.u)('/search/history'),
                settings: (0, n.u)('/settings'),
                video: (0, n.u)('/video'),
            };
        },
        21536: (e, t, a) => {
            Promise.resolve().then(a.bind(a, 85786));
        },
        22556: (e, t, a) => {
            'use strict';
            a.d(t, { j: () => r });
            let n = (e, t) => {
                    let a = window.document.querySelector('meta['.concat(e, '="').concat(t, '"]'));
                    if (a) return a;
                    let n = window.document.createElement('meta');
                    return (n.setAttribute(e, t), n);
                },
                r = (e) => {
                    let { title: t, description: a, openGraph: r } = e;
                    if (('string' == typeof t && (window.document.title = t), 'string' == typeof a)) {
                        let e = n('name', 'description');
                        (e.setAttribute('content', a), window.document.head.appendChild(e));
                    }
                    let i = '';
                    if (r) {
                        let e = 'string' == typeof r.title ? r.title : '',
                            t = 'string' == typeof r.description ? r.description : '',
                            a = Array.isArray(r.images) ? r.images[0] : null;
                        i = a && 'object' == typeof a && 'url' in a ? String(a.url) : '';
                        let s = n('property', 'og:title'),
                            o = n('property', 'og:description'),
                            l = n('property', 'og:image');
                        (s.setAttribute('content', e),
                            o.setAttribute('content', t),
                            l.setAttribute('content', i),
                            window.document.head.appendChild(s),
                            window.document.head.appendChild(o),
                            window.document.head.appendChild(l));
                    }
                };
        },
        22644: (e, t, a) => {
            'use strict';
            a.d(t, { _: () => r });
            var n = a(55178);
            let r = (e, t) => {
                (0, n.useEffect)(
                    () => () => {
                        window.location.pathname.includes(e.selfLink) || e.reset();
                    },
                    [e, t],
                );
            };
        },
        22714: (e, t, a) => {
            'use strict';
            a.d(t, { n: () => s });
            var n = a(32290),
                r = a(55178),
                i = a(1176);
            let s = (e) => {
                let { pageId: t, pageEntityId: a, displayReasonId: s, pageStyle: o, pagePlacement: l, children: c } = e,
                    d = (0, r.useMemo)(() => ({ pageId: t, pageEntityId: a, displayReasonId: s, pageStyle: o, pagePlacement: l }), [t, a, s, o, l]);
                return (0, n.jsx)(i.r.Provider, { value: d, children: c });
            };
        },
        23352: (e, t, a) => {
            'use strict';
            a.d(t, { n: () => s });
            var n = a(55178),
                r = a(12989),
                i = a(80536);
            let s = function () {
                let { callback: e, singleEvent: t, withViewUuid: a } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    s = (0, n.useRef)(null),
                    o = (0, r.D)(),
                    l = (0, n.useId)(),
                    c = (0, n.useContext)(i.B),
                    d = (0, n.useCallback)(
                        (n, r) => {
                            (e ? e(n, a ? r : void 0) : o(n, r), t && c.unobserveElement(l));
                        },
                        [e, c, l, o, t, a],
                    );
                return (
                    (0, n.useEffect)(
                        () => (
                            c.observeElement({ elementRef: s, elementId: l, callback: d }),
                            () => {
                                c.unobserveElement(l);
                            }
                        ),
                        [e, c, d, l, o],
                    ),
                    { ref: s, intersectionPropertyId: l }
                );
            };
        },
        24535: (e, t, a) => {
            'use strict';
            a.d(t, { i: () => i });
            var n = a(85472),
                r = a(73422);
            function i(e) {
                let { ogTitle: t, ogDescription: a, fullUrl: i, locale: s, ogImage: o, siteName: l, ogType: c, customImage: d } = e,
                    u = o ? { url: (0, n.createAvatarUrl)(o, 1e3, !0), width: 1e3, height: 1e3 } : void 0;
                return {
                    title: t,
                    description: a,
                    url: i,
                    ...(c && { type: c }),
                    siteName: l,
                    locale: (s || r.E.getDefaultLocale()).toString().replace('-', '_'),
                    images: u || d,
                };
            }
        },
        26042: (e, t, a) => {
            'use strict';
            a.d(t, { B: () => s });
            var n = a(32290),
                r = a(55178),
                i = a(10936);
            let s = (e) => {
                let { objectId: t, objectPosX: a, objectPosY: s, objectPos: o, objectType: l, objectsCount: c, mainObjectId: d, mainObjectType: u, children: m } = e,
                    b = (0, r.useMemo)(
                        () => ({ objectId: t, objectPosX: a, objectPosY: s, objectPos: o, objectType: l, objectsCount: c, mainObjectId: d, mainObjectType: u }),
                        [t, a, s, o, l, c, d, u],
                    );
                return (0, n.jsx)(i.l.Provider, { value: b, children: m });
            };
        },
        26365: (e, t, a) => {
            'use strict';
            a.d(t, { S: () => i });
            var n = a(68243);
            let r = {
                    'ru-ru': 'https://music.yandex.ru',
                    'ru-kz': 'https://music.yandex.kz',
                    'ru-uz': 'https://music.yandex.uz',
                    'ru-by': 'https://music.yandex.by',
                    en: 'https://music.yandex.com',
                    'x-default': 'https://music.yandex.ru',
                },
                i = function (e, t) {
                    for (var a = arguments.length, i = Array(a > 2 ? a - 2 : 0), s = 2; s < a; s++) i[s - 2] = arguments[s];
                    let [o] = i,
                        l = '/' === e ? '' : e,
                        c = (e) => ({ ...(null != o ? o : {}), options: e }),
                        d = {},
                        { href: u } = (0, n.u)(l, c({ linkType: 'canonical', host: 'https://music.yandex.'.concat(t) }));
                    for (let [e, t] of Object.entries(r)) {
                        let { href: a } = (0, n.u)(l, c({ linkType: 'alternate', host: t, lang: e }));
                        d[e] = a;
                    }
                    return { canonical: u, languages: d };
                };
        },
        28470: (e, t, a) => {
            'use strict';
            var n;
            ((t.HB = function (e, t) {
                let { objectsCount: a = 1, objectPosX: n = 1, objectPosY: i = 1 } = t,
                    s = (0, r.makeMetaParams)(2),
                    o = {
                        ...t,
                        objectsCount: a,
                        objectPosX: n,
                        objectPosY: i,
                        pageId: 'artist_screen',
                        pageType: 'object',
                        entityType: 'carousel',
                        entityId: 'concerts',
                        objectsType: 'concert',
                        _meta: s,
                    };
                e.trackEvent('Artist.Concerts.Showed', o);
            }),
                (t.U6 = function (e, t) {
                    let { objectsCount: a = 1, objectPosX: n = 1, objectPosY: i = 1 } = t,
                        s = (0, r.makeMetaParams)(2),
                        o = {
                            ...t,
                            objectsCount: a,
                            objectPosX: n,
                            objectPosY: i,
                            pageId: 'artist_screen',
                            pageType: 'object',
                            entityType: 'carousel',
                            entityId: 'concerts',
                            objectsType: 'concert',
                            from: 'artist_screen',
                            _meta: s,
                        };
                    e.trackEvent('Artist.Concerts.Navigated', o);
                }));
            let r = a(92871);
            (n || (n = {})).ConcertScreen = 'concert_screen';
        },
        28724: (e, t, a) => {
            'use strict';
            a.d(t, { M: () => C });
            var n = a(32290),
                r = a(63618),
                i = a(96103),
                s = a(55178),
                o = a(39407),
                l = a(21732),
                c = a(91027),
                d = a(63423),
                u = a(71926),
                m = a(70204),
                b = a(34186),
                p = a(83808),
                x = a(20472),
                g = a(32641),
                f = a(85017),
                N = a(19379),
                v = a(61258),
                h = a(76768),
                _ = a.n(h);
            let y = {
                    [f.n.ALBUM]: (0, n.jsx)(o.A, { id: 'extra-explicit.confirm-unsafe-album' }),
                    [f.n.PODCAST]: (0, n.jsx)(o.A, { id: 'extra-explicit.confirm-unsafe-podcast' }),
                    [f.n.ARTIST]: (0, n.jsx)(o.A, { id: 'extra-explicit.confirm-unsafe-artist' }),
                    [f.n.TRACK]: (0, n.jsx)(o.A, { id: 'extra-explicit.confirm-unsafe-track' }),
                    [f.n.AUDIOBOOK]: (0, n.jsx)(o.A, { id: 'extra-explicit.confirm-unsafe-audiobook' }),
                    [f.n.CLIP]: (0, n.jsx)(o.A, { id: 'extra-explicit.confirm-unsafe-clip' }),
                },
                C = (0, i.PA)((e) => {
                    var t;
                    let { modalState: a, data: i, onClose: h, className: C } = e,
                        E = null != i ? i : null == a ? void 0 : a.modalData,
                        W = (0, p.W)(),
                        k = (0, g.Z)(x.Z.main.href),
                        A = (0, b.N)().get(m.U2),
                        T = (0, c.c)(() => {
                            if (h) return h();
                            (W.canBack && W.back(), k());
                        }),
                        S = (null == E || null == (t = E.details) ? void 0 : t.url) && E.details.text,
                        P = (0, c.c)(() => {
                            var e;
                            null == a || a.setConfirmUnsafeDisclaimer(!0);
                            let t = A.get(N.c.ExEx),
                                n = new Date(),
                                r = n.setMinutes(n.getMinutes() + 15),
                                i =
                                    null != (e = null == a ? void 0 : a.entityKey)
                                        ? e
                                        : ''.concat(null == a ? void 0 : a.entityType, '_').concat(null == a ? void 0 : a.entityId);
                            (t ? A.set(N.c.ExEx, [...t, i], { expires: new Date(r) }) : A.set(N.c.ExEx, [i], { expires: new Date(r) }),
                                null == h || h(),
                                (null == a ? void 0 : a.onDisclaimerConfirmHandler) && a.onDisclaimerConfirmHandler());
                        }),
                        I = (0, c.c)(() => {
                            ((null == a ? void 0 : a.shouldHistoryBack) ? (null == h || h(), W.canBack && W.back(), k()) : null == h || h(),
                                (null == a ? void 0 : a.onDisclaimerRejectHandler) && a.onDisclaimerRejectHandler());
                        });
                    (0, s.useEffect)(
                        () => () => {
                            null == a || a.reset();
                        },
                        [a],
                    );
                    let O = (0, s.useMemo)(() => {
                            if (E) {
                                var e, t;
                                return (0, n.jsxs)(n.Fragment, {
                                    children: [
                                        (0, n.jsx)(u.DZ, {
                                            variant: 'h4',
                                            size: 'l',
                                            className: (0, r.$)(_().title, _().text),
                                            'data-test-id': l.OA.disclaimer.DISCLAIMER_TITLE,
                                            children: E.title,
                                        }),
                                        (0, n.jsx)(u.HL, {
                                            variant: 'div',
                                            size: 'l',
                                            weight: 'normal',
                                            className: _().text,
                                            'data-test-id': l.OA.disclaimer.DISCLAIMER_DESCRIPTION,
                                            children: E.description,
                                        }),
                                        S &&
                                            (0, n.jsx)(v.N, {
                                                href: null == (e = E.details) ? void 0 : e.url,
                                                className: _().link,
                                                children: (0, n.jsx)(u.HL, {
                                                    variant: 'span',
                                                    size: 'l',
                                                    weight: 'normal',
                                                    children: null == (t = E.details) ? void 0 : t.text,
                                                }),
                                            }),
                                    ],
                                });
                            }
                            return null;
                        }, [E, S]),
                        L = (0, s.useMemo)(
                            () =>
                                (null == a ? void 0 : a.type) === f.Z.UNSAFE
                                    ? (0, n.jsxs)('div', {
                                          className: _().buttons,
                                          children: [
                                              (0, n.jsx)(d.$, {
                                                  color: 'primary',
                                                  onClick: I,
                                                  size: 'l',
                                                  radius: 'xxxl',
                                                  className: _().button,
                                                  'data-test-id': l.OA.disclaimer.DISCLAIMER_REJECT_BUTTON,
                                                  children: (0, n.jsx)(o.A, { id: 'extra-explicit.reject-unsafe-entity' }),
                                              }),
                                              (0, n.jsx)(d.$, {
                                                  color: 'secondary',
                                                  onClick: P,
                                                  size: 'l',
                                                  radius: 'xxxl',
                                                  className: _().button,
                                                  'data-test-id': l.OA.disclaimer.DISCLAIMER_CONFIRM_BUTTON,
                                                  children: a.entityType && y[a.entityType],
                                              }),
                                          ],
                                      })
                                    : (0, n.jsx)('div', {
                                          className: _().buttons,
                                          children: (0, n.jsx)(d.$, {
                                              color: 'primary',
                                              onClick: T,
                                              size: 'l',
                                              radius: 'xxxl',
                                              className: _().button,
                                              'data-test-id': l.OA.disclaimer.DISCLAIMER_REJECT_BUTTON,
                                              children: (0, n.jsx)(o.A, { id: 'interface-actions.confirm' }),
                                          }),
                                      }),
                            [P, null == a ? void 0 : a.entityType, null == a ? void 0 : a.type, T, I],
                        );
                    return (0, n.jsx)('div', {
                        className: (0, r.$)(_().root, C),
                        'data-test-id': l.OA.disclaimer.DISCLAIMER_CONTENT,
                        children: (0, n.jsxs)('div', { className: _().container, children: [O, L] }),
                    });
                });
        },
        28991: (e) => {
            e.exports = {
                root: 'ArtistConcertsPage_root__DDTmb',
                scrollableContent: 'ArtistConcertsPage_scrollableContent__aiEjd',
                container: 'ArtistConcertsPage_container__ho6Fw',
                content: 'ArtistConcertsPage_content__Ynto2',
                footer: 'ArtistConcertsPage_footer__kQL7m',
            };
        },
        30436: (e, t, a) => {
            'use strict';
            a.d(t, { f: () => n });
            let n = () => ({ timeStyle: 'short' });
        },
        31010: (e, t, a) => {
            'use strict';
            a.d(t, { H: () => r, P: () => i });
            var n = a(55178);
            let r = (0, n.createContext)(null),
                i = () => (0, n.useContext)(r);
        },
        32468: (e, t, a) => {
            'use strict';
            a.d(t, { A: () => s });
            var n = a(32290),
                r = a(77088),
                i = a.n(r);
            let s = (e) => {
                let { children: t } = e;
                return (0, n.jsx)('footer', { className: i().empty });
            };
        },
        37340: (e, t, a) => {
            'use strict';
            a.d(t, { W: () => c });
            var n = a(32290),
                r = a(63618),
                i = a(60900),
                s = a(79856),
                o = a(61420),
                l = a.n(o);
            let c = (e) => {
                let { className: t, isShimmerActive: a } = e,
                    { formatMessage: o } = (0, i.A)();
                return (0, n.jsxs)('div', {
                    'aria-label': o({ id: 'loading-messages.concert-is-loading' }),
                    'aria-live': 'polite',
                    'aria-busy': !0,
                    className: (0, r.$)(l().root, t),
                    children: [
                        (0, n.jsx)(s.W, { className: l().date, radius: 'm', isActive: a }),
                        (0, n.jsxs)('div', {
                            className: l().meta,
                            children: [
                                (0, n.jsx)(s.W, { className: l().title, radius: 's', isActive: a }),
                                (0, n.jsx)(s.W, { className: l().description, radius: 's', isActive: a }),
                            ],
                        }),
                        (0, n.jsx)(s.W, { className: l().action, radius: 'l', isActive: a }),
                    ],
                });
            };
        },
        37456: (e, t, a) => {
            'use strict';
            ((t.__ = function (e, t) {
                let a = (0, n.makeMetaParams)(1),
                    r = { ...t, pageId: 'artist_concerts_screen', pageType: 'listing', _meta: a };
                e.trackEvent('ArtistConcerts.Opened', r);
            }),
                (t.pe = function (e, t) {
                    let a = (0, n.makeMetaParams)(1),
                        r = { ...t, pageId: 'artist_concerts_screen', pageType: 'listing', _meta: a };
                    e.trackEvent('ArtistConcerts.Closed', r);
                }),
                (t.Z4 = function (e, t) {
                    let { objectPos: a = 1 } = t,
                        r = (0, n.makeMetaParams)(1),
                        i = { ...t, objectPos: a, pageId: 'artist_concerts_screen', pageType: 'listing', objectType: 'concert', _meta: r };
                    e.trackEvent('ArtistConcerts.Concert.Showed', i);
                }),
                (t.mh = function (e, t) {
                    let { objectPos: a = 1 } = t,
                        r = (0, n.makeMetaParams)(1),
                        i = {
                            ...t,
                            objectPos: a,
                            pageId: 'artist_concerts_screen',
                            pageType: 'listing',
                            objectType: 'concert',
                            from: 'artist_concerts_screen',
                            _meta: r,
                        };
                    e.trackEvent('ArtistConcerts.Concert.Navigated', i);
                }));
            let n = a(92871);
        },
        37511: (e, t, a) => {
            'use strict';
            a.d(t, { iV: () => o, tE: () => l, Ef: () => c, tk: () => d.t, u0: () => b });
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
            let o = (function (e) {
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
            let l = (e, t) => (t ? e.afisha.clientId[t] : e.afisha.clientId.web);
            function c(e, t) {
                return t ? e.player.secretKey[t] : '';
            }
            var d = a(90480),
                u = a(52199),
                m = a(63038);
            let b = (e, t, a) => {
                let { allowCustomPrefixUrl: n, prefixUrl: r } = e.resources.musicExternalApi,
                    i = n && 'string' == typeof a && a.length > 0 ? a : r;
                return (0, u.r)(i, t, m.B);
            };
        },
        37997: (e, t, a) => {
            'use strict';
            a.d(t, { m: () => p });
            var n = a(55178),
                r = a(17811),
                i = a(99923),
                s = a(28470),
                o = a(37456),
                l = a(74416),
                c = a(48922),
                d = a(47745),
                u = a(2792),
                m = a(37240),
                b = a(62376);
            let p = (e) => {
                let { artistId: t, viewUuid: a } = e,
                    p = (0, l.st)(),
                    { hash: x } = (0, l.gf)(),
                    { pageId: g } = (0, m.$)(),
                    { objectsCount: f, objectType: N, objectId: v, objectPosX: h, objectPosY: _, objectPos: y } = (0, u.J)(),
                    C = (0, d.N)(),
                    E = (0, b.U)(),
                    W = (0, n.useCallback)(
                        (e) => {
                            let a = (0, r.F)({
                                params: { hash: x, artistId: t, objectsCount: f, objectType: N, objectId: v, objectPosX: h, objectPosY: _, to: e },
                                logger: E,
                                context: 'useSendEventOnConcertNavigated',
                            });
                            p && a && (0, s.U6)(p.evgenInstance, a);
                        },
                        [p, t, x, E, v, h, _, N, f],
                    ),
                    k = (0, n.useCallback)(
                        (e) => {
                            let n = (0, r.F)({
                                params: { hash: x, artistId: t, viewUuid: a, objectId: v, objectPos: y, to: e },
                                logger: E,
                                context: 'useSendEventOnConcertNavigated',
                            });
                            p && n && a && (0, o.mh)(p.evgenInstance, n);
                        },
                        [p, t, x, E, v, y, a],
                    );
                return (0, n.useCallback)(
                    (e) => {
                        if (p && g && c.xK.includes(g))
                            switch (g) {
                                case c._Q.ARTIST:
                                    W(e);
                                    break;
                                case c._Q.ARTIST_CONCERTS:
                                    k(e);
                                    break;
                                case c._Q.SEARCH:
                                    C({ to: i.AppScreen.ConcertPurchaseScreen });
                            }
                    },
                    [p, g, C, k, W],
                );
            };
        },
        42125: (e, t, a) => {
            'use strict';
            a.d(t, { W: () => d });
            var n = a(3266),
                r = a(55178),
                i = a(14190),
                s = a(73422),
                o = a(84570),
                l = a(64552);
            let c = (0, r.cache)(async (e) => (0, l.M)(e, l.X)),
                d = async (e) => {
                    let t = (e || s.E.getDefaultLocale()).language,
                        a = (0, o.k)(i.pE[i.cy], t),
                        r = await c(a);
                    return (e, t) => {
                        let i = null == r ? void 0 : r[e.id],
                            s = '';
                        return ((Array.isArray(i) || 'string' == typeof i) && (s = new n.S(i, a).format(t)), Array.isArray(s) ? s.join('') : s);
                    };
                };
        },
        44242: (e, t, a) => {
            'use strict';
            a.d(t, { X: () => r });
            var n = a(90432);
            function r(e) {
                return {
                    ios: { app_name: e.appName, app_store_id: '520797969', url: ''.concat(n.Lz, '/').concat(e.additional.url) },
                    web: { url: e.additional.fullUrl },
                };
            }
        },
        44989: (e, t, a) => {
            'use strict';
            a.d(t, { e: () => l });
            var n,
                r = a(55178),
                i = {
                    810: (e) => {
                        e.exports = n || (n = a.t(r, 2));
                    },
                },
                s = {},
                o = {};
            ((() => {
                (Object.defineProperty(o, '__esModule', { value: !0 }), (o.useToggle = void 0));
                let e = (function e(t) {
                    var a = s[t];
                    if (void 0 !== a) return a.exports;
                    var n = (s[t] = { exports: {} });
                    return (i[t](n, n.exports, e), n.exports);
                })(810);
                o.useToggle = (t) => {
                    let [a, n] = (0, e.useState)(t);
                    (0, e.useEffect)(() => {
                        n(t);
                    }, [t]);
                    let r = (0, e.useCallback)(() => {
                            n((e) => !e);
                        }, []),
                        i = (0, e.useCallback)(() => {
                            n(!0);
                        }, []),
                        s = (0, e.useCallback)(() => {
                            n(!1);
                        }, []);
                    return { state: a, toggle: r, setState: n, toggleTrue: i, toggleFalse: s };
                };
            })(),
                o.__esModule);
            var l = o.useToggle;
        },
        46646: (e, t, a) => {
            var n = { './en.json': [61263, 1263], './kk.json': [62837, 5218], './ru.json': [74721, 4721], './uz.json': [20075, 75] };
            function r(e) {
                if (!a.o(n, e))
                    return Promise.resolve().then(() => {
                        var t = Error("Cannot find module '" + e + "'");
                        throw ((t.code = 'MODULE_NOT_FOUND'), t);
                    });
                var t = n[e],
                    r = t[0];
                return a.e(t[1]).then(() => a.t(r, 19));
            }
            ((r.keys = () => Object.keys(n)), (r.id = 46646), (e.exports = r));
        },
        47216: (e, t, a) => {
            'use strict';
            a.d(t, { H: () => s });
            var n = a(90432),
                r = a(94821);
            let i = '@yandexmusic';
            function s(e) {
                return e.cardType === r.W.SUMMARY_LARGE_IMAGE
                    ? { card: r.W.SUMMARY_LARGE_IMAGE, site: i, title: e.title, description: e.description }
                    : {
                          card: r.W.APP,
                          site: i,
                          title: e.title,
                          app: { id: { iphone: '520797969' }, name: e.appName, url: { iphone: ''.concat(n.Lz, '/').concat(e.url) } },
                      };
            }
        },
        51714: (e, t, a) => {
            'use strict';
            a.d(t, { G: () => s });
            var n = a(55178),
                r = a(31010),
                i = a(68243);
            let s = (e) => {
                var t;
                let { setDeeplink: a } = null != (t = (0, r.P)()) ? t : {};
                (0, n.useEffect)(() => {
                    if (e) {
                        let { href: t } = (0, i.u)('/artist/:artistId', { params: { artistId: e } });
                        null == a || a(t);
                    }
                    return () => {
                        null == a || a(null);
                    };
                }, [e, a]);
            };
        },
        52199: (e, t, a) => {
            'use strict';
            a.d(t, { r: () => n });
            let n = (e, t, a) => e.replace(a, t);
        },
        52575: (e) => {
            e.exports = {
                root: 'ConcertCard_root__fcR9B',
                root_withConcertsRedesign: 'ConcertCard_root_withConcertsRedesign__0g8bs',
                ripple: 'ConcertCard_ripple__PW4xI',
                date: 'ConcertCard_date__ECoa3',
                dateWithMask: 'ConcertCard_dateWithMask__si35m',
                important: 'ConcertCard_important__dQYxN',
                dateColor: 'ConcertCard_dateColor__muPRD',
                button: 'ConcertCard_button__GQxNL',
            };
        },
        57815: (e, t, a) => {
            'use strict';
            a.d(t, { E: () => r });
            var n = a(87151);
            let r = (e) => {
                var t, a;
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
                                            disclaimers: (0, n.H)(e.disclaimers),
                                        };
                                    })) || [],
                          name: e.name,
                          cover: { uri: e.coverUri || '' },
                          various: e.various || !1,
                          contentRestrictions: { available: null == (a = e.isAvailable) || a, disclaimers: (0, n.H)(e.disclaimers) },
                      }
                    : { id: 0, name: '', various: !1, decomposed: [], contentRestrictions: { available: !1, disclaimers: [] } };
            };
        },
        58359: (e, t, a) => {
            'use strict';
            a.d(t, { P: () => r });
            var n = {};
            (Object.defineProperty(n, '__esModule', { value: !0 }),
                (n.createRipple = void 0),
                (n.createRipple = function (e, t, a) {
                    let n = null != a ? a : e.currentTarget,
                        r = document.createElement('span'),
                        i = Math.max(n.clientWidth, n.clientHeight),
                        s = i / 2,
                        o = n.getBoundingClientRect(),
                        l = 0 === e.clientX ? Math.round(o.width / 2) : e.clientX - o.left,
                        c = 0 === e.clientY ? Math.round(o.height / 2) : e.clientY - o.top;
                    ((r.style.width = ''.concat(i, 'px')),
                        (r.style.height = ''.concat(i, 'px')),
                        (r.style.left = 0 === e.clientX ? '0px' : ''.concat(l - s, 'px')),
                        (r.style.top = ''.concat(c - s, 'px')),
                        r.classList.add(t));
                    let d = n.getElementsByClassName(t)[0];
                    (d && d.remove(), n.insertBefore(r, n.firstChild));
                }),
                n.__esModule);
            var r = n.createRipple;
        },
        61420: (e) => {
            e.exports = {
                root: 'ConcertShimmer_root__yp58v',
                date: 'ConcertShimmer_date__GEOK7',
                meta: 'ConcertShimmer_meta__y8Y2_',
                title: 'ConcertShimmer_title__Rj3Dc',
                description: 'ConcertShimmer_description__tJ4Qp',
                action: 'ConcertShimmer_action__6c4QF',
            };
        },
        61744: (e, t, a) => {
            'use strict';
            a.d(t, { M: () => b });
            var n = a(32290),
                r = a(96103),
                i = a(55178),
                s = a(39407),
                o = a(21732),
                l = a(6752),
                c = a(71926),
                d = a(98066),
                u = a(10570),
                m = a.n(u);
            let b = (0, r.PA)((e) => {
                let { id: t, concert: a, withCashback: r = !0, withInlineMeta: u = !1, titleSize: b = 'm' } = e,
                    p = [],
                    x = (0, n.jsx)(c.HL, { variant: 'span', size: 'm', weight: 'medium', 'aria-hidden': !0, children: '•' });
                ((null == a ? void 0 : a.eventKind) &&
                    p.push(
                        (0, n.jsx)(c.HL, {
                            variant: 'span',
                            size: 'm',
                            weight: 'medium',
                            'data-test-id': o.OA.concert.CONCERT_CARD_EVENT_KIND,
                            children: (0, n.jsx)(s.A, { id: 'concerts.event-kind', values: { kind: a.eventKind } }),
                        }),
                    ),
                    (null == a ? void 0 : a.contentRating) &&
                        p.push(
                            x,
                            (0, n.jsx)(c.HL, {
                                variant: 'span',
                                size: 'm',
                                weight: 'medium',
                                'data-test-id': o.OA.concert.CONCERT_CARD_CONTENT_RATING,
                                children: a.contentRating,
                            }),
                        ));
                let g = (0, l.L)(() =>
                    (null == a ? void 0 : a.city)
                        ? (0, n.jsx)(c.HL, {
                              variant: 'span',
                              size: 'm',
                              weight: 'medium',
                              lineClamp: 1,
                              'data-test-id': o.OA.concert.CONCERT_CARD_LOCATION,
                              children: a.city,
                          })
                        : null,
                );
                return (
                    u && g && p.push(x, g),
                    (0, n.jsxs)('div', {
                        className: m().root,
                        id: t,
                        children: [
                            (0, n.jsx)(c.HL, {
                                variant: 'div',
                                size: b,
                                weight: 'medium',
                                className: m().city,
                                lineClamp: 1,
                                'data-test-id': o.OA.concert.CONCERT_CARD_TITLE,
                                children: null == a ? void 0 : a.title,
                            }),
                            (0, n.jsx)('div', { className: m().info, children: p.map((e, t) => (0, i.cloneElement)(e, { key: t })) }),
                            !u && g,
                            r &&
                                (null == a ? void 0 : a.isIdentityExperimentEnabled) &&
                                a.cashbackValuePercent &&
                                (0, n.jsx)(d.m, { className: m().cashback, valuePercent: a.cashbackValuePercent }),
                            r &&
                                !(null == a ? void 0 : a.isIdentityExperimentEnabled) &&
                                (null == a ? void 0 : a.isCashbackExperimentEnabled) &&
                                a.cashbackTitle &&
                                (0, n.jsx)(d.m, { className: m().cashback, title: a.cashbackTitle }),
                        ],
                    })
                );
            });
        },
        62980: (e, t, a) => {
            'use strict';
            a.d(t, { d: () => u });
            var n = a(32290),
                r = a(63618),
                i = a(60900),
                s = a(21732),
                o = a(71926),
                l = a(83560),
                c = a(19111),
                d = a.n(c);
            let u = (e) => {
                let { datetime: t, className: a, monthClassName: c, dayClassName: u, weekdayClassName: m, withWeekday: b = !0, ...p } = e,
                    { formatDate: x } = (0, i.A)(),
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
                    'aria-label': x(t, (0, l.s)()),
                    ...p,
                    'data-test-id': s.OA.concert.CONCERT_DATE,
                    children: [
                        (0, n.jsx)(o.HL, {
                            variant: 'div',
                            size: 'xs',
                            weight: 'bold',
                            className: (0, r.$)(d().month, c),
                            'data-test-id': s.OA.concert.CONCERT_DATE_MONTH,
                            children: g,
                        }),
                        (0, n.jsx)(o.HL, {
                            variant: 'div',
                            className: (0, r.$)(d().day, u),
                            'data-test-id': s.OA.concert.CONCERT_DATE_DAY,
                            children: x(t, { day: 'numeric' }),
                        }),
                        b &&
                            (0, n.jsx)(o.HL, {
                                variant: 'div',
                                size: 'xs',
                                weight: 'bold',
                                className: (0, r.$)(d().weekday, m),
                                'data-test-id': s.OA.concert.CONCERT_DATE_WEEKDAY,
                                children: x(t, { weekday: 'short' }),
                            }),
                    ],
                });
            };
        },
        63038: (e, t, a) => {
            'use strict';
            a.d(t, { B: () => n });
            let n = '{tld}';
        },
        64146: (e) => {
            e.exports = { root: 'CashbackBadge_root__hStMF', icon: 'CashbackBadge_icon__RJ6qe', title: 'CashbackBadge_title__neGD7' };
        },
        64552: (e, t, a) => {
            'use strict';
            a.d(t, { M: () => c, X: () => l });
            var n = a(25090),
                r = a(14190);
            let i = async (e) => e.then((e) => e.default),
                s = r.pE[r.cy],
                o = s.langs.reduce((e, t) => (e.set(t, async () => i(a(12526)('./'.concat(t, '.json')))), e), new Map()),
                l = s.langs.reduce((e, t) => (e.set(t, async () => i(a(46646)('./'.concat(t, '.json')))), e), new Map()),
                c = async function (e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : o,
                        a = t.get(e),
                        r = t.get('ru');
                    if (a) return a();
                    if (r) return r();
                    throw new n.t('No translations for '.concat(e, ' or ru languages'));
                };
        },
        65024: (e, t, a) => {
            'use strict';
            a.d(t, { C: () => r });
            let n = new Set(Object.values(a(3785).M)),
                r = (e) => 'string' == typeof e && n.has(e);
        },
        71610: (e, t, a) => {
            'use strict';
            a.d(t, { j: () => l });
            var n = a(32290),
                r = a(55178),
                i = a(27576),
                s = a(42406),
                o = a(80536);
            let l = (e) => {
                let { children: t } = e,
                    a = (0, r.useRef)({}),
                    l = (0, r.useRef)(
                        (0, s.Gv)(
                            (e) => {
                                let t = (0, s.L5)(e.target),
                                    n = a.current[t];
                                if (n) {
                                    if (e.isIntersecting) {
                                        let e = window.setTimeout(() => {
                                            let e = String((0, i.A)());
                                            (n.callback(!0, e), (n.showed = !0), (n.viewUuid = e));
                                        }, 1e3);
                                        n.timerId = e;
                                    }
                                    (!e.isIntersecting && n.showed && (n.callback(!1, n.viewUuid), (n.showed = !1), (n.viewUuid = '')),
                                        e.isIntersecting || window.clearTimeout(n.timerId));
                                }
                            },
                            { threshold: 0.8 },
                        ),
                    ),
                    c = (0, r.useCallback)((e) => {
                        var t;
                        !a.current[e.elementId] &&
                            e.elementRef.current &&
                            (null == (t = l.current) || t.observe(e.elementRef.current), (a.current[e.elementId] = { showed: !1, viewUuid: '', callback: e.callback }));
                    }, []),
                    d = (0, r.useCallback)((e) => {
                        let t = a.current[e];
                        t && (t.showed && t.callback(!1, t.viewUuid), delete a.current[e]);
                    }, []);
                (0, r.useEffect)(
                    () => () => {
                        var e;
                        return null == (e = l.current) ? void 0 : e.disconnect();
                    },
                    [],
                );
                let u = (0, r.useMemo)(() => ({ observeElement: c, unobserveElement: d }), [c, d]);
                return (0, n.jsx)(o.B.Provider, { value: u, children: t });
            };
        },
        73422: (e, t, a) => {
            'use strict';
            a.d(t, { E: () => u });
            var n = a(91945),
                r = a(14190),
                i = a(84570),
                s = a(40363);
            let o = (e) => s.U.parseAcceptLanguage(null != e ? e : void 0);
            var l = a(18870);
            let c = (e) => {
                var t;
                return null != (t = { ru: l.$.RU, en: l.$.EN, uz: l.$.UZ, kk: l.$.KK }[e]) ? t : l.$.RU;
            };
            var d = a(64552);
            class u {
                static getDefaultLocale() {
                    return new Intl.Locale(r.Xn);
                }
                getLocale() {
                    let e;
                    try {
                        e = new Intl.Locale(this.serverDetectedLocale).region;
                    } catch (t) {
                        e = u.getDefaultLocale().region;
                    }
                    return new Intl.Locale(this.language, { region: e });
                }
                getDefaultLanguage() {
                    return c((0, i.k)(this.config, this.config.defaultLang));
                }
                getLanguage() {
                    return c((0, i.k)(this.config, this.language));
                }
                setLanguage(e) {
                    var t, a, n;
                    let r = (0, i.k)(this.config, e);
                    r !== (null == (t = this.storage) ? void 0 : t.get()) &&
                        (null == (a = this.storage) || a.set(r), null == (n = this.changeLanguageHandler) || n.onChangeLanguage(r));
                }
                getDictionary() {
                    if (!this.dictionary)
                        throw Error(
                            '\n                There is no downloaded CompiledTranslations!\n                I18NStorage.loadDictionary() must be called.\n            ',
                        );
                    return this.dictionary;
                }
                getAvailableLanguages() {
                    return this.config.langs.map((e) => c((0, i.k)(this.config, e)));
                }
                async loadDictionary() {
                    let e = (0, i.k)(this.config, this.language);
                    try {
                        this.dictionary = await (0, d.M)(e);
                    } catch (t) {
                        (t instanceof Error && this.logger.error(t, { language: e }), (this.dictionary = {}));
                    }
                    return this.dictionary;
                }
                constructor({ serverDetectedLocale: e, isBuildTypeDesktop: t, storage: a, changeLanguageHandler: l, logger: c }) {
                    let d;
                    if (
                        ((0, n._)(this, 'language', void 0),
                        (0, n._)(this, 'storage', void 0),
                        (0, n._)(this, 'dictionary', void 0),
                        (0, n._)(this, 'config', void 0),
                        (0, n._)(this, 'logger', void 0),
                        (0, n._)(this, 'changeLanguageHandler', void 0),
                        (0, n._)(this, 'serverDetectedLocale', void 0),
                        (this.storage = a),
                        (this.logger = c),
                        (this.changeLanguageHandler = l),
                        (this.serverDetectedLocale = e),
                        (this.config = r.pE[r.cy]),
                        t)
                    ) {
                        if ('undefined' != typeof navigator) {
                            var u;
                            let e;
                            d = ((e = this.config), new s.U({ brandConfig: e, enableWideLanguageSelectWithBrandLangs: !0 })).getLang({
                                cookieLang: (null == (u = this.storage) ? void 0 : u.get()) || void 0,
                                acceptLangs: o(navigator.languages.join()),
                            });
                        }
                    } else [d] = o(e) || [];
                    this.language = (0, i.k)(this.config, d);
                }
            }
        },
        74196: (e, t, a) => {
            'use strict';
            a.d(t, { q: () => c });
            var n,
                r = a(55178),
                i = {
                    5881: (e, t, a) => {
                        function n() {
                            for (var e, t, a = 0, n = ''; a < arguments.length;)
                                (e = arguments[a++]) &&
                                    (t = (function e(t) {
                                        var a,
                                            n,
                                            r = '';
                                        if ('string' == typeof t || 'number' == typeof t) r += t;
                                        else if ('object' == typeof t)
                                            if (Array.isArray(t)) for (a = 0; a < t.length; a++) t[a] && (n = e(t[a])) && (r && (r += ' '), (r += n));
                                            else for (a in t) t[a] && (r && (r += ' '), (r += a));
                                        return r;
                                    })(e)) &&
                                    (n && (n += ' '), (n += t));
                            return n;
                        }
                        (a.r(t), a.d(t, { clsx: () => n, default: () => r }));
                        let r = n;
                    },
                    7319: (e, t, a) => {
                        (a.r(t), a.d(t, { default: () => n }));
                        let n = { root: 'eaYyesBmJL_NbkgoYR1c', focusable: 'uL1dD5rxgI4bPmfyMMe7' };
                    },
                    9097: (e, t) => {
                        var a = Symbol.for('react.transitional.element');
                        function n(e, t, n) {
                            var r = null;
                            if ((void 0 !== n && (r = '' + n), void 0 !== t.key && (r = '' + t.key), 'key' in t))
                                for (var i in ((n = {}), t)) 'key' !== i && (n[i] = t[i]);
                            else n = t;
                            return { $$typeof: a, type: e, key: r, ref: void 0 !== (t = n.ref) ? t : null, props: n };
                        }
                        ((t.Fragment = Symbol.for('react.fragment')), (t.jsx = n), (t.jsxs = n));
                    },
                    4377: (e, t, a) => {
                        e.exports = a(9097);
                    },
                    5531: function (e, t, a) {
                        var n =
                            (this && this.__importDefault) ||
                            function (e) {
                                return e && e.__esModule ? e : { default: e };
                            };
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.SROnly = void 0));
                        let r = a(4377),
                            i = a(5881),
                            s = a(810),
                            o = n(a(7319));
                        t.SROnly = (e) => {
                            let { className: t, focusable: a, children: n, ...l } = e,
                                c = (0, i.clsx)(o.default.root, { [o.default.focusable]: a }, t);
                            return (0, s.isValidElement)(n)
                                ? (0, s.cloneElement)(n, { ...l, className: (0, i.clsx)(c, n.props.className) })
                                : (0, r.jsx)('span', { className: c, ...l, children: n });
                        };
                    },
                    810: (e) => {
                        e.exports = n || (n = a.t(r, 2));
                    },
                },
                s = {};
            function o(e) {
                var t = s[e];
                if (void 0 !== t) return t.exports;
                var a = (s[e] = { exports: {} });
                return (i[e].call(a.exports, a, a.exports, o), a.exports);
            }
            ((o.d = (e, t) => {
                for (var a in t) o.o(t, a) && !o.o(e, a) && Object.defineProperty(e, a, { enumerable: !0, get: t[a] });
            }),
                (o.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
                (o.r = (e) => {
                    ('undefined' != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
                        Object.defineProperty(e, '__esModule', { value: !0 }));
                }));
            var l = {};
            (() => {
                (Object.defineProperty(l, '__esModule', { value: !0 }), (l.SROnly = void 0));
                var e = o(5531);
                Object.defineProperty(l, 'SROnly', {
                    enumerable: !0,
                    get: function () {
                        return e.SROnly;
                    },
                });
            })();
            var c = l.SROnly;
            l.__esModule;
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
        75127: (e, t, a) => {
            'use strict';
            a.d(t, { T: () => i });
            var n = a(32290),
                r = a(37340);
            let i = (e) => Array.from({ length: e }, (e, t) => (0, n.jsx)(r.W, {}, t));
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
        79406: (e, t, a) => {
            'use strict';
            a.d(t, { z: () => n });
            var n = (function (e) {
                return (
                    (e.WebEditorsFeatures = 'WebEditorsFeatures'),
                    (e.WebNext = 'WebNext'),
                    (e.WebNextAuthPerf = 'WebNextAuthPerf'),
                    (e.WebNextBlockFullscreen = 'WebNextBlockFullscreen'),
                    (e.WebNextDisableCollection = 'WebNextDisableCollection'),
                    (e.WebNextDisableVibe = 'WebNextDisableVibe'),
                    (e.WebNextDisableVibeSettings = 'WebNextDisableVibeSettings'),
                    (e.WebNextDisableSearch = 'WebNextDisableSearch'),
                    (e.WebNextDisableKids = 'WebNextDisableKids'),
                    (e.WebNextDisableNonMusic = 'WebNextDisableNonMusic'),
                    (e.WebNextDisablePlus = 'WebNextDisablePlus'),
                    (e.WebNextDisableSendPlaysOnTrackStart = 'WebNextDisableSendPlaysOnTrackStart'),
                    (e.WebNextPlayQueueDnD = 'WebNextPlayQueueDnD'),
                    (e.WebNextCollectionPlaylistsDnD = 'WebNextCollectionPlaylistsDnD'),
                    (e.WebNextCrackdownInterval = 'WebNextCrackdownInterval'),
                    (e.WebNextAdvertTest = 'WebNextAdvertTest'),
                    (e.WebNextErids = 'WebNextErids'),
                    (e.WebNextConcertsCashback = 'WebNextConcertsCashback'),
                    (e.WebNextBetaLabel = 'WebNextBetaLabel'),
                    (e.WebNextRewind2024 = 'WebNextRewind2024'),
                    (e.WebNextOfflineDegradation = 'WebNextOfflineDegradation'),
                    (e.WebNextDesktopPaywallInterval = 'WebNextDesktopPaywallInterval'),
                    (e.WebNextPaywallCrackdownInterval = 'WebNextPaywallCrackdownInterval'),
                    (e.WebNextShaderFallbackEnabled = 'WebNextShaderFallbackEnabled'),
                    (e.WebNextShaderV3 = 'WebNextShaderV3'),
                    (e.WebNextDisablePrefetchRequests = 'WebNextDisablePrefetchRequests'),
                    (e.WebNextDeleteIndexedDbPlaysStore = 'WebNextDeleteIndexedDbPlaysStore'),
                    (e.WebNextDeeplinksToMobile = 'WebNextDeeplinksToMobile'),
                    (e.WebNextPromoLanding = 'WebNextPromoLanding'),
                    (e.WebNextPromoLandingCrackdownInterval = 'WebNextPromoLandingCrackdownInterval'),
                    (e.WebNextPromoLandingAdvert = 'WebNextPromoLandingAdvert'),
                    (e.WebNextArtistInfo = 'WebNextArtistInfo'),
                    (e.WebNextEnableSendLimitedEntityListToYnison = 'WebNextEnableSendLimitedEntityListToYnison'),
                    (e.WebNextPromoVeryBestRecommendations = 'WebNextPromoVeryBestRecommendations'),
                    (e.WebNextLegalRedirects = 'WebNextLegalRedirects'),
                    (e.WebNextRemoveDuplicatePlays = 'WebNextRemoveDuplicatePlays'),
                    (e.WebNextVirtualSkeleton = 'WebNextVirtualSkeleton'),
                    (e.WebNextAlbumDonationButton = 'WebNextAlbumDonationButton'),
                    (e.WebNextAlbumNotModified = 'WebNextAlbumNotModified'),
                    (e.WebNextDisableAds = 'WebNextDisableAds'),
                    (e.WebNextAlbumCPA = 'WebNextAlbumCPA'),
                    (e.WebNextPlusCPA = 'WebNextPlusCPA'),
                    (e.WebNextNewConcertCard = 'WebNextNewConcertCard'),
                    (e.NewConcertsTicketRedesign = 'newConcertsTicketRedesign'),
                    (e.WebNextConcertsTab = 'WebNextConcertsTab'),
                    (e.WebNextTracksPreload = 'WebNextTracksPreload'),
                    (e.WebNextResourcesFileInfo = 'WebNextResourcesFileInfo'),
                    (e.WebNextDisableConcertsTab = 'WebNextDisableConcertsTab'),
                    (e.WebNextFooterDisclaimer = 'WebNextFooterDisclaimer'),
                    (e.WebNextYnisonActivityInterception = 'WebNextYnisonActivityInterception'),
                    (e.WebNextYnisonRestoreMusicAsVibe = 'WebNextYnisonRestoreMusicAsVibe'),
                    (e.WebNextVibeDescription = 'WebNextVibeDescription'),
                    (e.WebNextVibeTerminated = 'WebNextVibeTerminated'),
                    (e.WebNextConcertsTicketIcon = 'WebNextConcertsTicketIcon'),
                    (e.WebNextConcertPage = 'WebNextConcertPage'),
                    (e.WebNextCrossMediaPlayer = 'WebNextCrossMediaPlayer'),
                    (e.WebNextConcertTabOnboarding = 'WebNextConcertTabOnboarding'),
                    (e.WebNextPlusOptionsMarketplace = 'WebNextPlusOptionsMarketplace'),
                    (e.WebNextMarketLanding = 'WebNextMarketLanding'),
                    (e.ABTestIds = 'ABTestIds'),
                    (e.WebNextWaveAgentExperiment = 'WebNextWaveAgentExperiment'),
                    (e.WebNextUlitochka = 'WebNextUlitochka'),
                    (e.WebNextPromoLandingLayout = 'WebNextPromoLandingLayout'),
                    (e.WebNextToggleFavouritePlaylistVisibility = 'WebNextToggleFavouritePlaylistVisibility'),
                    (e.WebNextBrandedPlaylistsAxe = 'WebNextBrandedPlaylistsAxe'),
                    (e.WebNextNavbarExplicit = 'WebNextNavbarExplicit'),
                    (e.WebNextEnableSendFadeFieldsInPlays = 'WebNextEnableSendFadeFieldsInPlays'),
                    (e.WebNextSlidesPage = 'WebNextSlidesPage'),
                    (e.WebNextYnisonInactiveTimerDesktop = 'WebNextYnisonInactiveTimerDesktop'),
                    (e.WebNextPaywallTopSection = 'WebNextPaywallTopSection'),
                    (e.WebNextPaywallSecondButton = 'WebNextPaywallSecondButton'),
                    (e.WebNextSearchConcerts = 'WebNextSearchConcerts'),
                    (e.WebNextConcertsDetailsPage = 'WebNextConcertsDetailsPage'),
                    (e.WebNextYaspSourceLimit = 'WebNextYaspSourceLimit'),
                    (e.WebNextNewWaveTab = 'WebNextNewWaveTab'),
                    (e.WebNextMainPlayerAnimation = 'WebNextMainPlayerAnimation'),
                    (e.WebNextNewWaveTabFeedbackForm = 'WebNextNewWaveTabFeedbackForm'),
                    (e.WebNextNdaLabelOnWaveTab = 'WebNextNdaLabelOnWaveTab'),
                    (e.WebNextPaidPerformancePaywallTopSection = 'WebNextPaidPerformancePaywallTopSection'),
                    (e.WebNextPlusOptionsSidebar = 'WebNextPlusOptionsSidebar'),
                    (e.WebNextConcertsIdentityEventType = 'WebNextConcertsIdentityEventType'),
                    (e.WebNextWaveScreenWordsInWave = 'WebNextWaveScreenWordsInWave'),
                    (e.WebNextWaveScreenWordsInWaveBigReplica = 'WebNextWaveScreenWordsInWaveBigReplica'),
                    (e.WebNextWaveScreenWordsInWaveDirectLinks = 'WebNextWaveScreenWordsInWaveDirectLinks'),
                    (e.WebNextEnableSkipDebounce = 'WebNextEnableSkipDebounce'),
                    (e.WebNextYaspVersion13766 = 'WebNextYaspVersion13766'),
                    (e.WebNextQueryToVibe = 'WebNextQueryToVibe'),
                    (e.WebNextQueryToVibeXLumen = 'WebNextQueryToVibeXLumen'),
                    (e.WebNextQueryToVibeLumenOptionCheck = 'WebNextQueryToVibeLumenOptionCheck'),
                    (e.WebNextErrorAutoSkip = 'WebNextErrorAutoSkip'),
                    (e.WebNextConcertsLocation = 'WebNextConcertsLocation'),
                    (e.WebNextConcertsLocationAll = 'WebNextConcertsLocationAll'),
                    (e.WebNextDesktopWebFreemium = 'WebNextDesktopWebFreemium'),
                    (e.WebNextFreeToApp = 'WebNextFreeToApp'),
                    (e.WebNextBatchFeedbacksOnVibeSettingsChange = 'WebNextBatchFeedbacksOnVibeSettingsChange'),
                    (e.WebNextSendRadioStartedOnVibeSettingsChange = 'WebNextSendRadioStartedOnVibeSettingsChange'),
                    (e.WebNextRadioStartedOnSessionCreation = 'WebNextRadioStartedOnSessionCreation'),
                    (e.WebNextStoreDeferredVibeFeedbacks = 'WebNextStoreDeferredVibeFeedbacks'),
                    (e.WebNextDeleteDeferredVibeFeedbacksStore = 'WebNextDeleteDeferredVibeFeedbacksStore'),
                    (e.WebNextYnisonNetworkMonitoring = 'WebNextYnisonNetworkMonitoring'),
                    (e.WebNextYnisonNewConnector = 'WebNextYnisonNewConnector'),
                    (e.WebNextVibeQueueButtonLoginPopover = 'WebNextVibeQueueButtonLoginPopover'),
                    (e.WebNextCorrectRotorQueueParam = 'WebNextCorrectRotorQueueParam'),
                    (e.WebNextNewWaveWizard = 'WebNextNewWaveWizard'),
                    (e.WebNextTrackModalCloseOnNavigate = 'WebNextTrackModalCloseOnNavigate'),
                    (e.WebNextEnableSendOriginalContextInVibePlays = 'WebNextEnableSendOriginalContextInVibePlays'),
                    (e.WebNextWaveForTwo = 'WebNextWaveForTwo'),
                    (e.WebNextWaveForTwoTest = 'WebNextWaveForTwoTest'),
                    (e.WebNextTrackComplaintForm = 'WebNextTrackComplaintForm'),
                    (e.WebNextLandingSdk = 'WebNextLandingSdk'),
                    (e.WebNextYnisonUseConnectionType = 'WebNextYnisonUseConnectionType'),
                    (e.WebNextNewWaveTabFeatCover = 'WebNextNewWaveTabFeatCover'),
                    (e.WebNextAIContentReductionSetting = 'WebNextAIContentReductionSetting'),
                    (e.WebNextQueryToVibeInputAnimation = 'WebNextQueryToVibeInputAnimation'),
                    e
                );
            })({});
        },
        79589: (e, t, a) => {
            'use strict';
            a.d(t, { V: () => L });
            var n = a(32290),
                r = a(63618),
                i = a(96103),
                s = a(55178),
                o = a(99923),
                l = a(21732),
                c = a(91027),
                d = a(44989),
                u = a(58359),
                m = a(63423),
                b = a(86269),
                p = a(23352),
                x = a(32641),
                g = a(57594),
                f = a(79406),
                N = a(68243),
                v = a(37997),
                h = a(17811),
                _ = a(28470),
                y = a(37456),
                C = a(74416),
                E = a(48922),
                W = a(2792),
                k = a(37240),
                A = a(62376),
                T = a(19522),
                S = a(12578),
                P = a(62980),
                I = a(52575),
                O = a.n(I);
            let L = (0, i.PA)((e) => {
                let {
                        artistId: t,
                        concert: a,
                        meta: i,
                        viewUuid: I,
                        radius: L = 'l',
                        className: R,
                        shouldSendAnalyticsOnHide: w,
                        forceAfishaWidget: D,
                        shouldShowMask: j,
                    } = e,
                    { state: M, toggleTrue: F, toggleFalse: U } = (0, d.e)(!1),
                    { experiments: H } = (0, g.g)(),
                    B = !D && H.checkExperiment(f.z.WebNextConcertPage, 'on'),
                    { href: Y } = (0, N.u)('/concert/:concertId', { params: { concertId: a.id } }),
                    V = (0, x.Z)(Y),
                    z = ((e) => {
                        let { artistId: t, viewUuid: a } = e,
                            n = (0, C.st)(),
                            { hash: r } = (0, C.gf)(),
                            { pageId: i } = (0, k.$)(),
                            { objectsCount: o, objectType: l, objectId: c, objectPosX: d, objectPosY: u, objectPos: m } = (0, W.J)(),
                            b = (0, A.U)(),
                            p = (0, s.useCallback)(() => {
                                let e = (0, h.F)({
                                    params: { hash: r, artistId: t, objectsCount: o, objectType: l, objectId: c, objectPosX: d, objectPosY: u },
                                    logger: b,
                                    context: 'useSendEventOnConcertShowed',
                                });
                                n && e && (0, _.HB)(n.evgenInstance, e);
                            }, [n, t, r, b, c, d, u, l, o]),
                            x = (0, s.useCallback)(() => {
                                let e = (0, h.F)({
                                    params: { hash: r, artistId: t, viewUuid: a, objectId: c, objectPos: m },
                                    logger: b,
                                    context: 'useSendEventOnConcertShowed',
                                });
                                n && e && a && (0, y.Z4)(n.evgenInstance, e);
                            }, [n, t, r, b, c, m, a]);
                        return (0, s.useCallback)(() => {
                            if (n && i && E.xK.includes(i))
                                switch (i) {
                                    case E._Q.ARTIST:
                                    case E._Q.CONCERT:
                                        p();
                                        break;
                                    case E._Q.ARTIST_CONCERTS:
                                        x();
                                }
                        }, [n, i, x, p]);
                    })({ artistId: t, viewUuid: I }),
                    G = (0, v.m)({ artistId: t, viewUuid: I }),
                    { ref: K, intersectionPropertyId: X } = (0, p.n)({ callback: null !== t ? z : void 0, singleEvent: !w }),
                    Q = (0, s.useId)(),
                    $ = (0, s.useId)(),
                    J = (0, T.Y)()(a),
                    Z = (0, c.c)((e) => {
                        ((0, u.P)(e, O().ripple), B && (V(e), G(o.FromArtistScreenTo.ConcertScreen)));
                    }),
                    q = (0, c.c)((e) => {
                        (F(), G(o.FromArtistScreenTo.ConcertPurchaseScreen), e.stopPropagation(), e.preventDefault());
                    });
                return (0, n.jsxs)(b.t, {
                    radius: L,
                    className: (0, r.$)(O().root, R, { [O().root_withConcertsRedesign]: a.isIdentityExperimentEnabled }),
                    ref: K,
                    'data-intersection-property-id': X,
                    onClick: Z,
                    children: [
                        a.datetime &&
                            (0, n.jsx)(P.d, {
                                datetime: a.datetime,
                                id: Q,
                                className: (0, r.$)(O().date, { [O().dateWithMask]: j, [O().important]: j }),
                                dayClassName: O().dateColor,
                                monthClassName: O().dateColor,
                            }),
                        (0, s.cloneElement)(i, { id: $, concert: a }),
                        a.dataSessionId &&
                            (0, n.jsxs)(n.Fragment, {
                                children: [
                                    (0, n.jsx)(m.$, {
                                        color: 'primary',
                                        radius: 'xxxl',
                                        className: O().button,
                                        'aria-describedby': ''.concat(Q, ' ').concat($),
                                        'aria-label': J,
                                        onClick: q,
                                        'data-test-id': l.OA.concert.CONCERT_CARD_BUTTON,
                                        children: J,
                                    }),
                                    (0, n.jsx)(S.h, { dataSessionId: a.dataSessionId, isOpened: M, onOpen: F, onClose: U }),
                                ],
                            }),
                    ],
                });
            });
        },
        80536: (e, t, a) => {
            'use strict';
            a.d(t, { B: () => n });
            let n = (0, a(55178).createContext)({ observeElement: () => {}, unobserveElement: () => {} });
        },
        83560: (e, t, a) => {
            'use strict';
            a.d(t, { s: () => n });
            let n = () => ({ year: 'numeric', month: 'long', day: 'numeric' });
        },
        83808: (e, t, a) => {
            'use strict';
            a.d(t, { Q: () => r, W: () => i });
            var n = a(55178);
            let r = (0, n.createContext)({
                pushState: () => {},
                replaceState: () => {},
                forward: () => {},
                back: () => {},
                canForward: !1,
                canBack: !1,
                state: null,
                length: 0,
            });
            function i() {
                return (0, n.useContext)(r);
            }
        },
        83992: (e, t, a) => {
            'use strict';
            function n(e) {
                let { tld: t, url: a } = e;
                return a || 'https://music.yandex.'.concat(t, '/pages/main/i/og/home.png?webp=false');
            }
            a.d(t, { v: () => n });
        },
        84570: (e, t, a) => {
            'use strict';
            a.d(t, { k: () => n });
            let n = (e, t) => (e.langs.includes(t) ? t : e.defaultLang);
        },
        85017: (e, t, a) => {
            'use strict';
            a.d(t, { Z: () => n, n: () => r });
            var n = (function (e) {
                    return ((e.REJECT = 'REJECT'), (e.UNSAFE = 'UNSAFE'), e);
                })({}),
                r = (function (e) {
                    return ((e.ALBUM = 'album'), (e.PODCAST = 'podcast'), (e.AUDIOBOOK = 'audiobook'), (e.ARTIST = 'artist'), (e.TRACK = 'track'), (e.CLIP = 'clip'), e);
                })({});
        },
        85786: (e, t, a) => {
            'use strict';
            (a.r(t), a.d(t, { default: () => Z }));
            var n = a(32290),
                r = a(21916),
                i = a(96103),
                s = a(55178),
                o = a(60900),
                l = a(27576),
                c = a(21732),
                d = a(46049),
                u = a(71926),
                m = a(7999),
                b = a(91853),
                p = a(79589),
                x = a(13819),
                g = a(61744),
                f = a(48922),
                N = a(71610),
                v = a(26042),
                h = a(22714),
                _ = a(83808),
                y = a(83920),
                C = a(3796),
                E = a(57594),
                W = a(79406),
                k = a(28724),
                A = a(97841),
                T = a(32468),
                S = a(74694),
                P = a(75127),
                I = a(17811),
                O = a(37456),
                L = a(74416),
                R = a(62376),
                w = a(57815),
                D = a(22556),
                j = a(44242),
                M = a(14459),
                F = a(83992),
                U = a(42125),
                H = a(24535),
                B = a(47216),
                Y = a(94821),
                V = a(26365);
            async function z(e, t) {
                var a, n, r;
                if (!e) return { title: '', description: '', openGraph: {}, twitter: {}, appLinks: {} };
                let i = await (0, U.W)(t.locale),
                    s = i({ id: 'metadata.artist-concerts-title' }, { artistName: e.artist.name }),
                    o = i({ id: 'metadata.artist-concerts-description' }, { artistName: e.artist.name });
                return {
                    title: s,
                    description: o,
                    openGraph: (0, H.i)({
                        ogTitle: s,
                        ogDescription: o,
                        ogType: 'website',
                        fullUrl: null != (a = t.fullUrl) ? a : '',
                        locale: t.locale,
                        customImage: (0, F.v)({ tld: t.tld }),
                        siteName: i({ id: 'metadata.yandex-music' }),
                    }),
                    twitter: (0, B.H)({ cardType: Y.W.SUMMARY_LARGE_IMAGE, title: s, description: o }),
                    facebook: (0, M.k)(),
                    appLinks: (0, j.X)({
                        additional: { ...t, url: null != (n = t.url) ? n : '', fullUrl: null != (r = t.fullUrl) ? r : '', host: t.host },
                        appName: i({ id: 'metadata.yandex-music' }),
                    }),
                    alternates: (0, V.S)('/artist/:artistId/concerts', t.tld, { params: { artistId: e.artist.id } }),
                };
            }
            var G = a(22644),
                K = a(51714),
                X = a(28991),
                Q = a.n(X);
            let $ = (0, i.PA)((e) => {
                var t, a, i;
                let { artistId: j, preloadedArtist: M, preloadedConcerts: F } = e,
                    { artist: U, disclaimerModalState: H, experiments: B } = (0, E.g)(),
                    Y = B.checkExperiment(W.z.WebNextConcertsIdentityEventType, 'on'),
                    { formatMessage: V } = (0, o.A)(),
                    { contentScrollRef: X, setContentScrollRef: $ } = (0, y.g)(),
                    J = (0, _.W)(),
                    Z = (0, s.useRef)(String((0, l.A)())),
                    q = ((e) => {
                        let { artistId: t, viewUuid: a } = e,
                            n = (0, L.st)(),
                            { hash: r } = (0, L.gf)(),
                            i = (0, R.U)();
                        return (0, s.useCallback)(() => {
                            if (!n || !t) return;
                            let e = (0, I.F)({ params: { hash: r, artistId: t, viewUuid: a }, logger: i, context: 'useSendEventOnConcertsPageOpened' });
                            e && (0, O.__)(n.evgenInstance, e);
                        }, [n, t, r, i, a]);
                    })({ artistId: j, viewUuid: Z.current }),
                    ee = ((e) => {
                        let { artistId: t, viewUuid: a } = e,
                            n = (0, L.st)(),
                            { hash: r } = (0, L.gf)(),
                            i = (0, R.U)();
                        return (0, s.useCallback)(() => {
                            if (!n || !t) return;
                            let e = (0, I.F)({ params: { hash: r, artistId: t, viewUuid: a }, logger: i, context: 'useSendEventOnConcertsPageClosed' });
                            e && (0, O.pe)(n.evgenInstance, e);
                        }, [n, t, r, i, a]);
                    })({ artistId: j, viewUuid: Z.current });
                (0, s.useEffect)(
                    () => (
                        q(),
                        () => {
                            ee();
                        }
                    ),
                    [ee, q],
                );
                let et = (0, b.S)({ artist: null == (t = U.meta) ? void 0 : t.artist, shouldHistoryBack: !0 });
                ((0, K.G)(j),
                    (0, s.useEffect)(() => {
                        var e;
                        (null == (e = U.meta) ? void 0 : e.artist.isUnsafeLegal) && et();
                    }, [null == (a = U.meta) ? void 0 : a.artist.isUnsafeLegal, et]),
                    (0, G._)(U, j),
                    (0, s.useEffect)(
                        () => () => {
                            U.concertsSubpage.reset();
                        },
                        [U],
                    ),
                    (0, C.J)(U.concertsSubpage.isResolved),
                    U.concertsSubpage.isNotFound && (0, r.notFound)());
                let ea = (0, s.useMemo)(() => {
                        var e;
                        if (U.concertsSubpage.isLoading) return (0, P.T)(10);
                        let t = Y ? g.M : x.Z;
                        return null == (e = U.concertsSubpage.concerts)
                            ? void 0
                            : e.map((e, a) =>
                                  (0, n.jsx)(
                                      v.B,
                                      {
                                          objectId: String(e.id),
                                          objectPos: a + 1,
                                          children: (0, n.jsx)(p.V, {
                                              artistId: j,
                                              concert: e,
                                              viewUuid: Z.current,
                                              meta: (0, n.jsx)(t, { concert: e }),
                                              shouldShowMask: Y,
                                          }),
                                      },
                                      e.id,
                                  ),
                              );
                    }, [U.concertsSubpage.concerts, U.concertsSubpage.isLoading, j, Y, Z]),
                    en = [];
                if (
                    (U.concertsSubpage.isNeededToLoad && en.push(U.concertsSubpage.getData({ artistId: Number(j), preloadedConcerts: F })),
                    U.infoLoadingState.isNeededToLoad && en.push(U.getInfo({ artistId: j, preloadedArtist: M })),
                    ((e) => {
                        var t;
                        (0, s.useEffect)(() => {
                            (null == e ? void 0 : e.meta) &&
                                !e.infoLoadingState.isLoading &&
                                e.meta.artist &&
                                z({ artist: (0, w.E)(e.meta.artist) }, { fullUrl: null, locale: null, url: null, tld: '', host: '' }).then((e) => {
                                    (0, D.j)(e);
                                });
                        }, [null == e ? void 0 : e.meta, null == e ? void 0 : e.infoLoadingState.isLoading, null == e || null == (t = e.meta) ? void 0 : t.artist]);
                    })(U),
                    en.length && (0, s.use)(Promise.allSettled(en)),
                    null == (i = U.meta) ? void 0 : i.artist.isLegalRejected)
                )
                    return (0, n.jsx)(k.M, { modalState: H });
                let er = (0, s.useMemo)(
                    () =>
                        Y && U.concertsSubpage.artistTitle
                            ? V({ id: 'page.artist-all-concerts-header' }, { artistName: U.concertsSubpage.artistTitle })
                            : V({ id: 'page.artist-concerts-header' }, { artistName: U.commonSubPage.artistName }),
                    [Y, U.concertsSubpage.artistTitle, U.commonSubPage.artistName, V],
                );
                return (0, n.jsx)(h.n, {
                    pageId: f._Q.ARTIST_CONCERTS,
                    pageEntityId: j,
                    children: (0, n.jsx)(N.j, {
                        children: (0, n.jsx)(m.h, {
                            scrollElement: X,
                            outerTitle: er,
                            children: (0, n.jsxs)('div', {
                                className: Q().root,
                                'data-test-id': c.Xk.artist.ARTIST_CONCERTS_PAGE,
                                children: [
                                    (0, n.jsx)(S.Y, {
                                        variant: S.V.TEXT,
                                        withForwardControl: !1,
                                        withBackwardControl: J.canBack,
                                        children: (0, n.jsx)(u.DZ, { id: 'concerts-header', variant: 'h1', weight: 'bold', size: 'xl', lineClamp: 1, children: er }),
                                    }),
                                    (0, n.jsxs)(d.N, {
                                        ref: $,
                                        className: Q().scrollableContent,
                                        containerClassName: Q().container,
                                        children: [
                                            (0, n.jsx)('div', { className: Q().content, 'aria-labelledby': 'concerts-header', tabIndex: 0, children: ea }),
                                            (0, n.jsx)(T.A, { children: (0, n.jsx)(A.w, { className: Q().footer }) }),
                                        ],
                                    }),
                                ],
                            }),
                        }),
                    }),
                });
            });
            var J = a(17024);
            let Z = () => {
                let e = (0, r.useSearchParams)().get('artistId');
                return ((e && (0, J.L)(e)) || (0, r.notFound)(), (0, n.jsx)($, { artistId: e }));
            };
        },
        86269: (e, t, a) => {
            'use strict';
            a.d(t, { t: () => c });
            var n,
                r = a(55178),
                i = {
                    5881: (e, t, a) => {
                        function n() {
                            for (var e, t, a = 0, n = ''; a < arguments.length;)
                                (e = arguments[a++]) &&
                                    (t = (function e(t) {
                                        var a,
                                            n,
                                            r = '';
                                        if ('string' == typeof t || 'number' == typeof t) r += t;
                                        else if ('object' == typeof t)
                                            if (Array.isArray(t)) for (a = 0; a < t.length; a++) t[a] && (n = e(t[a])) && (r && (r += ' '), (r += n));
                                            else for (a in t) t[a] && (r && (r += ' '), (r += a));
                                        return r;
                                    })(e)) &&
                                    (n && (n += ' '), (n += t));
                            return n;
                        }
                        (a.r(t), a.d(t, { clsx: () => n, default: () => r }));
                        let r = n;
                    },
                    2095: (e, t, a) => {
                        (a.r(t), a.d(t, { default: () => n }));
                        let n = {
                            root: 'qaIScXjx1qyXuaIHXQIo',
                            root_radius_xs: 'wdE2qVRIlWUesuBfzCis',
                            root_radius_s: '_7gw1qGE6BeUAdSMbhRx',
                            root_radius_m: 'emVxQKB1wJc9FwuIBG8o',
                            root_radius_l: 'NFJAa_h_EAjwQVY7bU5J',
                            root_radius_xl: 'SRpgu5IgfEGM_VHllm_6',
                            root_radius_round: 'QIWoHHDozGGG5w2JYImt',
                            root_withShadow: 'gtfPudKIIbfkwmuOBzwI',
                            root_variant_default: 'ZcpulvHgF_wsgzB8Hye9',
                            root_variant_outline: 'kPFFrHHxF3SOjiETAE6Q',
                        };
                    },
                    9097: (e, t) => {
                        var a = Symbol.for('react.transitional.element');
                        function n(e, t, n) {
                            var r = null;
                            if ((void 0 !== n && (r = '' + n), void 0 !== t.key && (r = '' + t.key), 'key' in t))
                                for (var i in ((n = {}), t)) 'key' !== i && (n[i] = t[i]);
                            else n = t;
                            return { $$typeof: a, type: e, key: r, ref: void 0 !== (t = n.ref) ? t : null, props: n };
                        }
                        ((t.Fragment = Symbol.for('react.fragment')), (t.jsx = n), (t.jsxs = n));
                    },
                    4377: (e, t, a) => {
                        e.exports = a(9097);
                    },
                    6009: function (e, t, a) {
                        var n =
                            (this && this.__importDefault) ||
                            function (e) {
                                return e && e.__esModule ? e : { default: e };
                            };
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.Paper = void 0));
                        let r = a(4377),
                            i = a(5881),
                            s = a(810),
                            o = n(a(2095)),
                            l = (e) => {
                                let { forwardRef: t, radius: a, variant: n = 'default', children: s, className: l, withShadow: c, style: d, ...u } = e;
                                return (0, r.jsx)('div', {
                                    className: (0, i.clsx)(
                                        o.default.root,
                                        o.default['root_radius_'.concat(a)],
                                        o.default['root_variant_'.concat(n)],
                                        { [o.default.root_withShadow]: c },
                                        l,
                                    ),
                                    style: d,
                                    ref: t,
                                    ...u,
                                    children: s,
                                });
                            };
                        t.Paper = (0, s.forwardRef)((e, t) => (0, r.jsx)(l, { forwardRef: t, ...e }));
                    },
                    810: (e) => {
                        e.exports = n || (n = a.t(r, 2));
                    },
                },
                s = {};
            function o(e) {
                var t = s[e];
                if (void 0 !== t) return t.exports;
                var a = (s[e] = { exports: {} });
                return (i[e].call(a.exports, a, a.exports, o), a.exports);
            }
            ((o.d = (e, t) => {
                for (var a in t) o.o(t, a) && !o.o(e, a) && Object.defineProperty(e, a, { enumerable: !0, get: t[a] });
            }),
                (o.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
                (o.r = (e) => {
                    ('undefined' != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
                        Object.defineProperty(e, '__esModule', { value: !0 }));
                }));
            var l = {};
            (() => {
                (Object.defineProperty(l, 'U', { value: !0 }), (l.X = void 0));
                var e = o(6009);
                Object.defineProperty(l, 'X', {
                    enumerable: !0,
                    get: function () {
                        return e.Paper;
                    },
                });
            })();
            var c = l.X;
            l.U;
        },
        87151: (e, t, a) => {
            'use strict';
            a.d(t, { H: () => r });
            var n = a(65024);
            let r = function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
                return e.map((e) => ((0, n.C)(e) ? e : void 0)).filter((e) => void 0 !== e);
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
        91853: (e, t, a) => {
            'use strict';
            a.d(t, { S: () => r });
            var n = a(19383);
            let r = (e) => {
                let { artist: t, callback: a, shouldHistoryBack: r } = e;
                return (0, n.l)({ entity: t, callback: a, modalBehavior: void 0 === r ? void 0 : { shouldHistoryBack: r }, preventDefaultWhenSafe: !0 });
            };
        },
        94821: (e, t, a) => {
            'use strict';
            a.d(t, { W: () => n });
            var n = (function (e) {
                return ((e.APP = 'app'), (e.SUMMARY_LARGE_IMAGE = 'summary_large_image'), e);
            })({});
        },
        97201: (e, t, a) => {
            'use strict';
            a.d(t, { K: () => n });
            var n = (function (e) {
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
        97841: (e, t, a) => {
            'use strict';
            a.d(t, { w: () => E });
            var n = a(32290),
                r = a(63618),
                i = a(96103),
                s = a(60900),
                o = a(31010),
                l = (function (e) {
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
            let c = (e, t, a) => {
                    switch (e) {
                        case l.YANDEX:
                            if ('ru' === t) return 'https://ya.ru';
                            return;
                        case l.YANDEX_PROJECTS:
                            return 'https://yandex.'.concat(t, '/all?lang=').concat(a);
                        case l.COPYRIGHT_HOLDER:
                            return 'https://yandex.'.concat(t, '/support/music/performers-and-copyright-holders/copyright.html?lang=').concat(a);
                        case l.AGREEMENT:
                            return 'https://yandex.ru/legal/music_termsofuse?lang='.concat(a);
                        case l.RECOMMENDATION_RULES:
                            return 'https://music.yandex.ru/legal/recommendations/ru/#music';
                        case l.HELP:
                            return 'https://yandex.'.concat(t, '/support/music/index.html?lang=').concat(a);
                        case l.PRIVACY_POLICY:
                            return 'https://yandex.'.concat(t, '/legal/confidential/').concat(a);
                    }
                },
                d = (e) => {
                    let { formatMessage: t, language: a, tld: n, year: r } = e;
                    return {
                        year: r,
                        yandexMusic: { id: l.YANDEX, title: t({ id: 'footer.yandex-music' }), url: c(l.YANDEX, n, a) },
                        yandexProjects: { id: l.YANDEX_PROJECTS, title: t({ id: 'footer.yandex-project' }), url: c(l.YANDEX_PROJECTS, n, a) },
                    };
                };
            var u = a(15559),
                m = a(8626);
            let b = (e) => e(new Date(), (0, m.m)());
            var p = a(61945),
                x = a(57594),
                g = a(77088),
                f = a.n(g),
                N = a(21732),
                v = a(71926),
                h = a(61258);
            let _ = (e) => {
                    let { className: t, data: a } = e;
                    return (0, n.jsxs)('div', {
                        className: (0, r.$)(f().copyrights, t),
                        'data-test-id': N.S7.FOOTER_COPYRIGHTS,
                        children: [
                            (0, n.jsxs)(v.HL, {
                                variant: 'span',
                                type: 'text',
                                size: 's',
                                weight: 'medium',
                                className: f().text,
                                children: [
                                    '\xa9 ',
                                    a.year,
                                    ' \xa0',
                                    (0, n.jsx)(h.N, {
                                        target: '_blank',
                                        href: a.yandexMusic.url,
                                        className: (0, r.$)(f().copyrightLink, f().yandexMusicLink),
                                        'data-test-id': N.S7.FOOTER_YANDEX_MUSIC_LINK,
                                        children: a.yandexMusic.title,
                                    }),
                                ],
                            }),
                            (0, n.jsx)(v.HL, { variant: 'span', type: 'text', size: 's', weight: 'medium', children: ' • ' }),
                            (0, n.jsx)(h.N, {
                                target: '_blank',
                                href: a.yandexProjects.url,
                                className: f().copyrightLink,
                                'data-test-id': N.S7.FOOTER_YANDEX_PROJECT_LINK,
                                children: a.yandexProjects.title,
                            }),
                        ],
                    });
                },
                y = (e) => {
                    let { disclaimer: t, links: a } = e;
                    return (0, n.jsxs)('div', {
                        className: f().links,
                        children: [
                            (0, n.jsx)('ol', {
                                className: f().list,
                                'data-test-id': N.S7.FOOTER_LINKS_LIST,
                                children: a.map((e) => {
                                    let { id: t, title: a, url: r } = e;
                                    return (0, n.jsx)(
                                        'li',
                                        {
                                            className: f().item,
                                            children: (0, n.jsx)(h.N, { target: '_blank', href: r, className: f().link, 'data-test-id': N.S7.FOOTER_LINK, children: a }),
                                        },
                                        t,
                                    );
                                }),
                            }),
                            (0, n.jsx)(v.HL, {
                                variant: 'span',
                                type: 'text',
                                size: 'm',
                                weight: 'medium',
                                className: f().explicitText,
                                tabIndex: 0,
                                dangerouslySetInnerHTML: { __html: t },
                                'data-test-id': N.S7.FOOTER_DISCLAIMER_TEXT,
                            }),
                        ],
                    });
                },
                C = (e) => {
                    let { className: t, data: a } = e;
                    return (0, n.jsxs)('footer', {
                        className: (0, r.$)(f().root, f().important, t),
                        'data-test-id': N.S7.FOOTER,
                        children: [(0, n.jsx)(y, { links: a.links, disclaimer: a.disclaimer }), (0, n.jsx)(_, { data: a.copyrights })],
                    });
                };
            (0, i.PA)((e) => {
                let { className: t } = e,
                    { location: a } = (0, x.g)(),
                    { formatDate: r, formatMessage: i } = (0, s.A)(),
                    { language: o } = (0, p.h)(),
                    l = d({ formatMessage: i, language: o, tld: a.tld, year: b(r) });
                return (0, n.jsx)(_, { className: t, data: l });
            });
            let E = (0, i.PA)((e) => {
                var t;
                let { className: a } = e,
                    { experiments: i, location: m, user: g } = (0, x.g)(),
                    { formatDate: N, formatMessage: v } = (0, s.A)(),
                    { isEnabled: h } = null != (t = (0, o.P)()) ? t : {},
                    { language: _ } = (0, p.h)(),
                    y = ((e) => {
                        let { checkExperiment: t, formatMessage: a, isWebApplication: n, language: r, tld: i, userRegion: s, year: o } = e;
                        return {
                            links: ((e) => {
                                let { formatMessage: t, isWebApplication: a, tld: n, language: r, userRegion: i } = e,
                                    s = { id: l.COPYRIGHT_HOLDER, title: t({ id: 'footer.links-copyright-holders' }), url: c(l.COPYRIGHT_HOLDER, n, r) },
                                    o = { id: l.PRIVACY_POLICY, title: t({ id: 'footer.links-privacy-policy' }), url: c(l.PRIVACY_POLICY, n, r) },
                                    d = { id: l.AGREEMENT, title: t({ id: 'footer.links-terms' }), url: c(l.AGREEMENT, n, r) },
                                    u = { id: l.RECOMMENDATION_RULES, title: t({ id: 'footer.links-recommendation-rules' }), url: c(l.RECOMMENDATION_RULES, n, r) },
                                    m = { id: l.HELP, title: t({ id: 'footer.links-help' }), url: c(l.HELP, n, r) },
                                    b = [s, d, u];
                                return (a && 'ru' === i && b.push(o), b.push(m), b);
                            })({ formatMessage: a, isWebApplication: n, language: r, tld: i, userRegion: s }),
                            disclaimer: (0, u.v)({
                                checkExperiment: t,
                                getDisclaimerContent: () => a({ id: 'footer.disclaimer-content' }),
                                getExplicitContent: () => a({ id: 'footer.explicit-content' }),
                                userRegion: s,
                            }),
                            copyrights: d({ formatMessage: a, language: r, tld: i, year: o }),
                        };
                    })({
                        checkExperiment: (e, t) => i.checkExperiment(e, t),
                        formatMessage: v,
                        isWebApplication: !1,
                        tld: m.tld,
                        language: _,
                        userRegion: g.account.data.userSessionRegionIso,
                        year: b(N),
                    });
                return (0, n.jsx)(C, { className: (0, r.$)({ [f().root_withOffsetForDeeplink]: h }, a), data: y });
            });
        },
        98066: (e, t, a) => {
            'use strict';
            a.d(t, { m: () => d });
            var n = a(32290),
                r = a(63618),
                i = a(21732),
                s = a(82586),
                o = a(71926),
                l = a(64146),
                c = a.n(l);
            let d = (e) => {
                let { title: t, className: a, titleClassName: l, valuePercent: d } = e;
                return (0, n.jsxs)('div', {
                    className: (0, r.$)(c().root, a),
                    children: [
                        (0, n.jsx)(s.I, { 'aria-hidden': !0, className: c().icon, variant: 'plus' }),
                        (0, n.jsx)(o.HL, {
                            variant: 'span',
                            type: 'text',
                            size: 'm',
                            weight: 'medium',
                            lineClamp: 1,
                            className: (0, r.$)(c().title, l),
                            'data-test-id': i.OA.concert.CONCERT_CARD_CASHBACK,
                            children: d ? ''.concat(d, '%') : t,
                        }),
                    ],
                });
            };
        },
    },
    (e) => {
        (e.O(
            0,
            [
                3608, 1256, 1010, 7412, 4100, 6706, 1588, 5472, 8378, 900, 2536, 2146, 3353, 2474, 8035, 2732, 1410, 4250, 1570, 3266, 8506, 6050, 5806, 6241, 9155, 4668,
                1175, 4638, 4220, 9562, 7358,
            ],
            () => e((e.s = 21536)),
        ),
            (_N_E = e.O()));
    },
]);
