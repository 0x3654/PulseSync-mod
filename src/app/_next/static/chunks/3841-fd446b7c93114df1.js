(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [3841],
    {
        5245: (e, t, n) => {
            'use strict';
            n.d(t, { m: () => r });
            var l = n(60754),
                a = n(55178);
            let r = (e) => {
                let { createStore: t, getPendingPatchBatches: n, patchesUpdatedEventName: r } = e,
                    i = (0, a.useRef)([]),
                    [s] = (0, a.useState)(() => {
                        let e = t();
                        for (let t of n()) (0, l.X6)(e, t);
                        return e;
                    });
                return (
                    (0, a.useLayoutEffect)(() => {
                        let e = () => {
                            for (let e of n()) (0, l.X6)(s, e);
                        };
                        return (e(), window.addEventListener(r, e), () => window.removeEventListener(r, e));
                    }, [n, r, s]),
                    { store: s, patchesRef: i }
                );
            };
        },
        8626: (e, t, n) => {
            'use strict';
            n.d(t, { m: () => l });
            let l = () => ({ year: 'numeric' });
        },
        12526: (e, t, n) => {
            var l = { './en.json': [46983, 6983], './kk.json': [64042, 4042], './ru.json': [20937, 937], './uz.json': [76707, 6707] };
            function a(e) {
                if (!n.o(l, e))
                    return Promise.resolve().then(() => {
                        var t = Error("Cannot find module '" + e + "'");
                        throw ((t.code = 'MODULE_NOT_FOUND'), t);
                    });
                var t = l[e],
                    a = t[0];
                return n.e(t[1]).then(() => n.t(a, 19));
            }
            ((a.keys = () => Object.keys(l)), (a.id = 12526), (e.exports = a));
        },
        14190: (e, t, n) => {
            'use strict';
            n.d(t, { Xn: () => r, cy: () => a, pE: () => l });
            let l = {
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
                r = 'ru-RU';
        },
        15559: (e, t, n) => {
            'use strict';
            n.d(t, { v: () => a });
            var l = n(79406);
            let a = (e) => {
                let { checkExperiment: t, getDisclaimerContent: n, getExplicitContent: a, userRegion: r } = e;
                return 'ru' === r && t(l.z.WebNextFooterDisclaimer, 'on') ? n() : a();
            };
        },
        17024: (e, t, n) => {
            'use strict';
            n.d(t, { L: () => a });
            let l = /^(0|[1-9]\d*)$/;
            function a(e) {
                return void 0 !== e && !(e.length > 40) && l.test(e);
            }
        },
        18870: (e, t, n) => {
            'use strict';
            var l;
            (n.d(t, { $: () => l }),
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
                })(l || (l = {})));
        },
        20472: (e, t, n) => {
            'use strict';
            n.d(t, { Z: () => a });
            var l = n(68243);
            let a = {
                main: (0, l.u)('/'),
                chart: (0, l.u)('/chart'),
                chartPodcasts: (0, l.u)('/chart/podcasts'),
                collection: (0, l.u)('/collection'),
                collectionAlbums: (0, l.u)('/collection/albums'),
                collectionArtists: (0, l.u)('/collection/artists'),
                collectionClips: (0, l.u)('/collection/clips'),
                collectionDislikes: (0, l.u)('/collection/dislikes'),
                collectionKids: (0, l.u)('/collection/kids'),
                collectionKidsAlbums: (0, l.u)('/collection/kids/albums'),
                collectionKidsPlaylists: (0, l.u)('/collection/kids/playlists'),
                collectionKidsTracks: (0, l.u)('/collection/kids/tracks'),
                collectionNonMusic: (0, l.u)('/collection/non-music'),
                collectionNonMusicLiked: (0, l.u)('/collection/non-music/liked'),
                collectionVibeRooms: (0, l.u)('/collection/multivibes'),
                collectionPlaylists: (0, l.u)('/collection/playlists'),
                collectionPlaylistsCreated: (0, l.u)('/collection/playlists/created'),
                collectionPlaylistsLiked: (0, l.u)('/collection/playlists/liked'),
                collectionShelf: (0, l.u)('/collection/shelf'),
                collectionShelfLiked: (0, l.u)('/collection/shelf/liked'),
                collectionShelfNewEpisodes: (0, l.u)('/collection/shelf/new-episodes'),
                collectionShelfRecentlyPlayed: (0, l.u)('/collection/shelf/recently-played'),
                concerts: (0, l.u)('/concerts'),
                kids: (0, l.u)('/kids'),
                mixes: (0, l.u)('/mixes'),
                musicHistory: (0, l.u)('/music-history'),
                muzmarket: (0, l.u)('/muzmarket'),
                mymusic: (0, l.u)('/mymusic'),
                mymusicDownloadsTracks: (0, l.u)('/mymusic/downloads/tracks'),
                multivibe: (0, l.u)('/multivibe'),
                nonMusic: (0, l.u)('/non-music'),
                pay: (0, l.u)('/pay'),
                userSlides: (0, l.u)('/slides/user'),
                search: (0, l.u)('/search'),
                searchHistory: (0, l.u)('/search/history'),
                settings: (0, l.u)('/settings'),
                video: (0, l.u)('/video'),
            };
        },
        22556: (e, t, n) => {
            'use strict';
            n.d(t, { j: () => a });
            let l = (e, t) => {
                    let n = window.document.querySelector('meta['.concat(e, '="').concat(t, '"]'));
                    if (n) return n;
                    let l = window.document.createElement('meta');
                    return (l.setAttribute(e, t), l);
                },
                a = (e) => {
                    let { title: t, description: n, openGraph: a } = e;
                    if (('string' == typeof t && (window.document.title = t), 'string' == typeof n)) {
                        let e = l('name', 'description');
                        (e.setAttribute('content', n), window.document.head.appendChild(e));
                    }
                    let r = '';
                    if (a) {
                        let e = 'string' == typeof a.title ? a.title : '',
                            t = 'string' == typeof a.description ? a.description : '',
                            n = Array.isArray(a.images) ? a.images[0] : null;
                        r = n && 'object' == typeof n && 'url' in n ? String(n.url) : '';
                        let i = l('property', 'og:title'),
                            s = l('property', 'og:description'),
                            o = l('property', 'og:image');
                        (i.setAttribute('content', e),
                            s.setAttribute('content', t),
                            o.setAttribute('content', r),
                            window.document.head.appendChild(i),
                            window.document.head.appendChild(s),
                            window.document.head.appendChild(o));
                    }
                };
        },
        24535: (e, t, n) => {
            'use strict';
            n.d(t, { i: () => r });
            var l = n(85472),
                a = n(73422);
            function r(e) {
                let { ogTitle: t, ogDescription: n, fullUrl: r, locale: i, ogImage: s, siteName: o, ogType: c, customImage: u } = e,
                    d = s ? { url: (0, l.createAvatarUrl)(s, 1e3, !0), width: 1e3, height: 1e3 } : void 0;
                return {
                    title: t,
                    description: n,
                    url: r,
                    ...(c && { type: c }),
                    siteName: o,
                    locale: (i || a.E.getDefaultLocale()).toString().replace('-', '_'),
                    images: d || u,
                };
            }
        },
        26365: (e, t, n) => {
            'use strict';
            n.d(t, { S: () => r });
            var l = n(68243);
            let a = {
                    'ru-ru': 'https://music.yandex.ru',
                    'ru-kz': 'https://music.yandex.kz',
                    'ru-uz': 'https://music.yandex.uz',
                    'ru-by': 'https://music.yandex.by',
                    en: 'https://music.yandex.com',
                    'x-default': 'https://music.yandex.ru',
                },
                r = function (e, t) {
                    for (var n = arguments.length, r = Array(n > 2 ? n - 2 : 0), i = 2; i < n; i++) r[i - 2] = arguments[i];
                    let [s] = r,
                        o = '/' === e ? '' : e,
                        c = (e) => ({ ...(null != s ? s : {}), options: e }),
                        u = {},
                        { href: d } = (0, l.u)(o, c({ linkType: 'canonical', host: 'https://music.yandex.'.concat(t) }));
                    for (let [e, t] of Object.entries(a)) {
                        let { href: n } = (0, l.u)(o, c({ linkType: 'alternate', host: t, lang: e }));
                        u[e] = n;
                    }
                    return { canonical: d, languages: u };
                };
        },
        29973: (e, t, n) => {
            'use strict';
            n.d(t, { T: () => h, Q: () => m });
            var l = n(55178),
                a = n(22556),
                r = n(44242),
                i = n(42125),
                s = n(24535),
                o = n(47216),
                c = n(94821),
                u = n(26365);
            async function d(e, t) {
                var n, l, a;
                if (!e) return { title: '', description: '', openGraph: {}, twitter: {}, appLinks: {}, other: {} };
                let d = await (0, i.W)(t.locale),
                    g = d({ id: 'metadata.label-albums-title' }, { labelName: e.name, labelType: e.type }),
                    p = d({ id: 'metadata.label-albums-description' }, { labelName: e.name, labelType: e.type });
                return {
                    title: g,
                    description: p,
                    openGraph: (0, s.i)({
                        ogTitle: g,
                        ogDescription: p,
                        fullUrl: null != (n = t.fullUrl) ? n : '',
                        locale: t.locale,
                        siteName: d({ id: 'metadata.yandex-music' }),
                        ogType: 'music.playlist',
                    }),
                    twitter: (0, o.H)({ cardType: c.W.APP, title: g, url: t.url, appName: d({ id: 'metadata.yandex-music' }) }),
                    appLinks: (0, r.X)({
                        additional: { ...t, url: null != (l = t.url) ? l : '', fullUrl: null != (a = t.fullUrl) ? a : '', host: t.host },
                        appName: d({ id: 'metadata.yandex-music' }),
                    }),
                    alternates: (0, u.S)('/label/:labelId/albums', t.tld, { params: { labelId: e.id } }),
                };
            }
            async function g(e, t) {
                var n, l, a;
                if (!e) return { title: '', description: '', openGraph: {}, twitter: {}, appLinks: {}, other: {} };
                let d = await (0, i.W)(t.locale),
                    g = d({ id: 'metadata.label-artists-title' }, { labelName: e.name, labelType: e.type }),
                    p = d({ id: 'metadata.label-artists-description' }, { labelName: e.name, labelType: e.type });
                return {
                    title: g,
                    description: p,
                    openGraph: (0, s.i)({
                        ogTitle: g,
                        ogDescription: p,
                        fullUrl: null != (n = t.fullUrl) ? n : '',
                        locale: t.locale,
                        siteName: d({ id: 'metadata.yandex-music' }),
                        ogType: 'music.playlist',
                    }),
                    twitter: (0, o.H)({ cardType: c.W.APP, title: g, url: t.url, appName: d({ id: 'metadata.yandex-music' }) }),
                    appLinks: (0, r.X)({
                        additional: { ...t, url: null != (l = t.url) ? l : '', fullUrl: null != (a = t.fullUrl) ? a : '', host: t.host },
                        appName: d({ id: 'metadata.yandex-music' }),
                    }),
                    alternates: (0, u.S)('/label/:labelId/artists', t.tld, { params: { labelId: e.id } }),
                };
            }
            async function p(e, t) {
                var n, l, a;
                if (!e) return { title: '', description: '', openGraph: {}, twitter: {}, appLinks: {}, other: {} };
                let d = await (0, i.W)(t.locale),
                    g = d({ id: 'metadata.label-title' }, { labelTitle: e.name, labelType: e.type }),
                    p = d({ id: 'metadata.label-description' }, { labelTitle: e.name, labelType: e.type });
                return {
                    title: g,
                    description: p,
                    openGraph: (0, s.i)({
                        ogTitle: g,
                        ogDescription: p,
                        fullUrl: null != (n = t.fullUrl) ? n : '',
                        locale: t.locale,
                        siteName: d({ id: 'metadata.yandex-music' }),
                        ogType: 'music.playlist',
                    }),
                    twitter: (0, o.H)({ cardType: c.W.APP, title: g, url: t.url, appName: d({ id: 'metadata.yandex-music' }) }),
                    appLinks: (0, r.X)({
                        additional: { ...t, url: null != (l = t.url) ? l : '', fullUrl: null != (a = t.fullUrl) ? a : '', host: t.host },
                        appName: d({ id: 'metadata.yandex-music' }),
                    }),
                    alternates: (0, u.S)('/label/:labelId', t.tld, { params: { labelId: e.id } }),
                };
            }
            var h = (function (e) {
                return ((e.ROOT = 'root'), (e.ALBUMS = 'albums'), (e.ARTISTS = 'artists'), e);
            })({});
            let m = (e, t) => {
                (0, l.useEffect)(() => {
                    switch (t) {
                        case 'root':
                            p(e, { fullUrl: null, locale: null, url: null, tld: '', host: '' }).then((e) => {
                                (0, a.j)(e);
                            });
                            break;
                        case 'albums':
                            d(e, { fullUrl: null, locale: null, url: null, tld: '', host: '' }).then((e) => {
                                (0, a.j)(e);
                            });
                            break;
                        case 'artists':
                            g(e, { fullUrl: null, locale: null, url: null, tld: '', host: '' }).then((e) => {
                                (0, a.j)(e);
                            });
                    }
                }, [null == e ? void 0 : e.id, null == e ? void 0 : e.type, null == e ? void 0 : e.name, t, e]);
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
        31010: (e, t, n) => {
            'use strict';
            n.d(t, { H: () => a, P: () => r });
            var l = n(55178);
            let a = (0, l.createContext)(null),
                r = () => (0, l.useContext)(a);
        },
        31726: (e, t, n) => {
            'use strict';
            n.d(t, { Y: () => s });
            var l = n(54280),
                a = n(70204),
                r = n(34186),
                i = n(62376);
            let s = () => {
                let e = (0, r.N)(),
                    t = e.get(a.oo),
                    n = e.get(a.uM),
                    s = e.get(a.ff),
                    o = e.get(a.V4),
                    c = e.get(a.P0),
                    u = (() => {
                        let e = (0, r.N)(),
                            t = e.get(a.$I),
                            n = e.get(a.EN),
                            l = e.get(a.N1),
                            i = e.get(a._1),
                            s = e.get(a.V3),
                            o = e.get(a.Lb),
                            c = e.get(a.wK),
                            u = e.get(a.tz),
                            d = e.get(a.$8),
                            g = e.get(a.Oo),
                            p = e.get(a.X4),
                            h = e.get(a.O9),
                            m = e.get(a.E),
                            y = e.get(a.wH),
                            _ = e.get(a.ok),
                            f = e.get(a.X8),
                            E = e.get(a.yq),
                            v = e.get(a.NN),
                            T = e.get(a.qN),
                            A = e.get(a.ro),
                            x = e.get(a.nM),
                            k = e.get(a.Ut),
                            L = e.get(a.K1),
                            S = e.get(a.eu),
                            w = e.get(a.aE),
                            N = e.get(a.ki),
                            O = e.get(a.c9),
                            P = e.get(a.en),
                            b = e.get(a.jQ),
                            R = e.get(a.cZ),
                            I = e.get(a.Zl),
                            j = e.get(a.CN),
                            C = e.get(a.P1),
                            M = e.get(a.zj),
                            D = e.get(a.re),
                            U = e.get(a.JM),
                            H = e.get(a.Lk),
                            W = e.get(a.$$),
                            G = e.get(a.sv),
                            Y = e.get(a.gd),
                            F = e.get(a.Ez),
                            z = e.get(a.u2),
                            K = e.get(a.TD),
                            X = e.get(a.dh),
                            $ = e.get(a.LC),
                            J = e.get(a.PL),
                            Z = e.get(a.DT);
                        return {
                            accountResource: t,
                            afterTrackResource: n,
                            disclaimersResource: l,
                            usersResource: i,
                            landingResource: s,
                            landing3Resource: o,
                            landingBlocksResource: c,
                            albumResource: u,
                            libraryResource: d,
                            tracksResource: g,
                            topResource: p,
                            artistsResource: h,
                            slidesResource: m,
                            redAlertResource: y,
                            rotorResource: _,
                            waveResource: f,
                            searchResource: E,
                            searchPlaylistResource: v,
                            playlistResource: T,
                            playlistsResource: A,
                            pinResource: x,
                            metatagsResource: k,
                            tagResource: L,
                            feedResource: S,
                            pinsResource: w,
                            musicHistoryResource: N,
                            dynamicPagesResource: O,
                            chartResource: P,
                            clipsResource: b,
                            lyricViewsResource: R,
                            nonMusicResource: I,
                            donationResource: j,
                            loaderResource: C,
                            lumenResource: M,
                            prefixlessResource: D,
                            streamsResource: U,
                            filtersResource: H,
                            ugcResource: W,
                            collectionResource: G,
                            adsResource: Y,
                            personalResource: F,
                            familyResource: z,
                            childrenLandingResource: K,
                            promoResource: X,
                            telemetryResource: $,
                            labelsResource: J,
                            concertsResource: Z,
                            wordsResource: e.get(a.dA),
                            wheelResource: e.get(a.$Y),
                        };
                    })(),
                    d = (0, i.U)(),
                    g = (0, r.N)().get(a.TK),
                    p = e.get(a.ni),
                    h = new l.si(),
                    m = new l.fW();
                return {
                    ...u,
                    acqOffers: n,
                    disclaimerDictionary: s,
                    logger: d,
                    modelActionsLogger: g,
                    localStorage: h,
                    sessionStorage: m,
                    containerStorage: t,
                    config: o,
                    clientSafeConfig: c,
                    landingSdk: p,
                };
            };
        },
        32468: (e, t, n) => {
            'use strict';
            n.d(t, { A: () => i });
            var l = n(32290),
                a = n(77088),
                r = n.n(a);
            let i = (e) => {
                let { children: t } = e;
                return (0, l.jsx)('footer', { className: r().empty });
            };
        },
        42125: (e, t, n) => {
            'use strict';
            n.d(t, { W: () => u });
            var l = n(3266),
                a = n(55178),
                r = n(14190),
                i = n(73422),
                s = n(84570),
                o = n(64552);
            let c = (0, a.cache)(async (e) => (0, o.M)(e, o.X)),
                u = async (e) => {
                    let t = (e || i.E.getDefaultLocale()).language,
                        n = (0, s.k)(r.pE[r.cy], t),
                        a = await c(n);
                    return (e, t) => {
                        let r = null == a ? void 0 : a[e.id],
                            i = '';
                        return ((Array.isArray(r) || 'string' == typeof r) && (i = new l.S(r, n).format(t)), Array.isArray(i) ? i.join('') : i);
                    };
                };
        },
        44242: (e, t, n) => {
            'use strict';
            n.d(t, { X: () => a });
            var l = n(90432);
            function a(e) {
                return {
                    ios: { app_name: e.appName, app_store_id: '520797969', url: ''.concat(l.Lz, '/').concat(e.additional.url) },
                    web: { url: e.additional.fullUrl },
                };
            }
        },
        45066: (e, t, n) => {
            'use strict';
            n.d(t, { n: () => l });
            let l = {
                MIXES: 'pages/mixes',
                TAG: 'pages/tag',
                GENRES: 'pages/genres',
                PROMOLANDING: 'pages/promolanding',
                MUSIC_HISTORY: 'pages/music-history',
                POST: 'pages/post',
                PLAYLIST_PERSONAL: 'pages/playlist-personal',
                MY_MUSIC: 'pages/my-music',
                FAVORITE_TRACKS: 'pages/favorite-tracks',
                CONCERTS_DETAILS: 'pages/concerts-details',
                LANDING_PROMO_PREVIEW: 'pages/landing-promo-preview',
                LABEL: 'pages/label',
                GENRE: 'pages/genre',
                CHART: 'pages/chart',
            };
        },
        46646: (e, t, n) => {
            var l = { './en.json': [61263, 1263], './kk.json': [62837, 5218], './ru.json': [74721, 4721], './uz.json': [20075, 75] };
            function a(e) {
                if (!n.o(l, e))
                    return Promise.resolve().then(() => {
                        var t = Error("Cannot find module '" + e + "'");
                        throw ((t.code = 'MODULE_NOT_FOUND'), t);
                    });
                var t = l[e],
                    a = t[0];
                return n.e(t[1]).then(() => n.t(a, 19));
            }
            ((a.keys = () => Object.keys(l)), (a.id = 46646), (e.exports = a));
        },
        47216: (e, t, n) => {
            'use strict';
            n.d(t, { H: () => i });
            var l = n(90432),
                a = n(94821);
            let r = '@yandexmusic';
            function i(e) {
                return e.cardType === a.W.SUMMARY_LARGE_IMAGE
                    ? { card: a.W.SUMMARY_LARGE_IMAGE, site: r, title: e.title, description: e.description }
                    : {
                          card: a.W.APP,
                          site: r,
                          title: e.title,
                          app: { id: { iphone: '520797969' }, name: e.appName, url: { iphone: ''.concat(l.Lz, '/').concat(e.url) } },
                      };
            }
        },
        49259: (e, t, n) => {
            'use strict';
            n.d(t, { W: () => y, s: () => _ });
            var l = n(32290),
                a = n(96103),
                r = n(21916),
                i = n(55178),
                s = n(85472),
                o = n(25090),
                c = n(96218),
                u = n(5245),
                d = n(57594),
                g = n(31726);
            (0, a.eO)(!1);
            let p = (0, i.createContext)(null),
                h = (e) => {
                    let { children: t, store: n, storeKey: a } = e,
                        r = (0, i.useMemo)(() => ({ store: n, storeKey: a }), [n, a]);
                    return (0, l.jsx)(p.Provider, { value: r, children: t });
                },
                m = (e) => {
                    let { nonce: t, patchKey: n, patchesRef: a } = e;
                    return (
                        (0, r.useServerInsertedHTML)(() => {
                            let e = a.current;
                            return ((a.current = []), 0 === e.length)
                                ? null
                                : (0, l.jsx)('script', {
                                      dangerouslySetInnerHTML: {
                                          __html: ((e, t) =>
                                              "\n        window.__PAGE_STATE_PATCHES__ = window.__PAGE_STATE_PATCHES__ || {};\n        window.__PAGE_STATE_PATCHES__['"
                                                  .concat(e, "'] =\n            window.__PAGE_STATE_PATCHES__['")
                                                  .concat(e, "'] || [];\n        window.__PAGE_STATE_PATCHES__['")
                                                  .concat(e, "'].push(")
                                                  .concat((0, s.stringifyJSONSafely)(t), ");\n        window.dispatchEvent(new Event('")
                                                  .concat(c.O, "'));\n    "))(n, e),
                                      },
                                      nonce: null != t ? t : void 0,
                                  });
                        }),
                        null
                    );
                },
                y = (e) => {
                    let { createStore: t, patchKey: n } = e,
                        a = () => {
                            var e, t;
                            let l = null != (t = null == (e = window.__PAGE_STATE_PATCHES__) ? void 0 : e[n]) ? t : [];
                            return (window.__PAGE_STATE_PATCHES__ && delete window.__PAGE_STATE_PATCHES__[n], l);
                        };
                    return {
                        pageStoreProvider: (e) => {
                            let { children: r, nonce: i } = e,
                                s = (0, g.Y)(),
                                o = (0, d.g)(),
                                { store: p, patchesRef: y } = (0, u.m)({
                                    createStore: () => t({ ...s, rootStore: o }),
                                    getPendingPatchBatches: a,
                                    patchesUpdatedEventName: c.O,
                                });
                            return (0, l.jsxs)(l.Fragment, {
                                children: [(0, l.jsx)(m, { nonce: i, patchKey: n, patchesRef: y }), (0, l.jsx)(h, { store: p, storeKey: n, children: r })],
                            });
                        },
                    };
                };
            function _(e) {
                let { throwOnAbsence: t = !0 } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    n = (0, i.useContext)(p);
                if (!n || n.storeKey !== e) {
                    var l;
                    if (!t) return null;
                    throw new o.t('Page store context is missing or has unexpected key', {
                        code: 'E_CONTEXT_PAGE_STORE_NULL',
                        data: { actualStoreKey: null != (l = null == n ? void 0 : n.storeKey) ? l : 'null', expectedStoreKey: e },
                    });
                }
                return n.store;
            }
        },
        54280: (e, t, n) => {
            'use strict';
            n.d(t, { V8: () => r, si: () => s, fW: () => g, MJ: () => d, jU: () => h, Bx: () => p });
            var l = n(78061);
            function a(e) {
                if (!e) return null;
                try {
                    return JSON.parse(e);
                } catch (e) {
                    return (console.error(e), null);
                }
            }
            class r {
                get(e) {
                    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
                    try {
                        let i = (0, l.Jt)(e);
                        if (t) {
                            var n, r;
                            return null != (r = null == (n = a(i)) ? void 0 : n.value) ? r : null;
                        }
                        return null != i ? i : null;
                    } catch (e) {
                        return null;
                    }
                }
                set(e, t, n) {
                    let a = !(arguments.length > 3) || void 0 === arguments[3] || arguments[3];
                    try {
                        let r = a ? JSON.stringify({ value: t }) : t;
                        (0, l.hZ)(e, r, n);
                    } catch (e) {
                        console.error(e);
                    }
                }
                has(e) {
                    return null !== this.get(e, !1);
                }
                remove(e) {
                    try {
                        (0, l.TF)(e);
                    } catch (e) {}
                }
            }
            function i(e) {
                try {
                    var t;
                    return null != (t = window[e]) ? t : null;
                } catch (e) {
                    return null;
                }
            }
            class s {
                get(e) {
                    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
                        n = i('localStorage');
                    if (!n) return null;
                    try {
                        var l;
                        let r = n.getItem(e) || void 0;
                        if (!t) return r;
                        let i = a(r);
                        if (!i) return null;
                        let s = null != (l = null == i ? void 0 : i.value) ? l : null;
                        if ((null == i ? void 0 : i.expires) && Date.now() > new Date(i.expires).getTime()) return (this.remove(e), null);
                        return s;
                    } catch (e) {
                        return null;
                    }
                }
                set(e, t, n) {
                    if ('number' == typeof (null == n ? void 0 : n.expires)) {
                        let e = new Date();
                        (e.setMilliseconds(e.getMilliseconds() + 864e5 * n.expires), (n.expires = e));
                    }
                    let l = i('localStorage');
                    if (l)
                        try {
                            l.setItem(e, JSON.stringify({ value: t, ...n }));
                        } catch (e) {}
                }
                has(e) {
                    return null !== this.get(e);
                }
                remove(e) {
                    let t = i('localStorage');
                    if (t)
                        try {
                            t.removeItem(e);
                        } catch (e) {}
                }
            }
            var o = n(91945),
                c = n(25090);
            class u extends c.t {
                constructor(e, t, { code: n = 'E_STORAGE', ...l } = {}) {
                    (super('There is no '.concat(t, ' storage on the ').concat(e, ' platform'), { code: n, ...l }),
                        (0, o._)(this, 'name', 'Storage Exception'),
                        Object.setPrototypeOf(this, u.prototype));
                }
            }
            class d {
                get(e) {
                    throw new u(this.platform, this.type);
                }
                set(e, t, n) {
                    throw new u(this.platform, this.type);
                }
                has(e) {
                    throw new u(this.platform, this.type);
                }
                remove(e) {
                    throw new u(this.platform, this.type);
                }
                constructor(e, t) {
                    ((0, o._)(this, 'platform', ''), (0, o._)(this, 'type', ''), (this.platform = e), (this.type = t));
                }
            }
            class g {
                get(e) {
                    let t = i('sessionStorage');
                    if (!t) return null;
                    try {
                        var n, l, r;
                        let i = null != (l = t.getItem(e)) ? l : void 0;
                        return null != (r = null == (n = a(i)) ? void 0 : n.value) ? r : null;
                    } catch (e) {
                        return null;
                    }
                }
                set(e, t) {
                    let n = i('sessionStorage');
                    if (n)
                        try {
                            n.setItem(e, JSON.stringify({ value: t }));
                        } catch (e) {}
                }
                has(e) {
                    return null !== this.get(e);
                }
                remove(e) {
                    let t = i('sessionStorage');
                    if (t)
                        try {
                            t.removeItem(e);
                        } catch (e) {}
                }
            }
            function p(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
                Array.isArray(t) &&
                    t.forEach((t) => {
                        let n = 'object' != typeof t ? t : t.name,
                            l = 'object' != typeof t ? { expires: 365 } : t.options || { expires: 365 },
                            a = e.get(n);
                        null != a && e.set(n, a, l);
                    });
            }
            function h(e) {
                let { name: t, group: n, value: l } = e;
                return l && 0 !== Object.keys(l).length
                    ? l.title
                        ? { [t]: { group: n, value: { ...l, title: n } } }
                        : { [t]: { group: n, value: { title: n, value: l } } }
                    : { [t]: { group: n, value: { title: n } } };
            }
        },
        64170: (e, t, n) => {
            'use strict';
            n.d(t, { SomethingWentWrong: () => x });
            var l = n(32290),
                a = n(63618),
                r = n(96103),
                i = n(55178),
                s = n(60900),
                o = n(39407),
                c = n(63423),
                u = n(82586),
                d = n(71926),
                g = n(17811),
                p = n(99923),
                h = n(90153),
                m = n(74416),
                y = n(62376),
                _ = n(37240),
                f = n(83920),
                E = n(20472),
                v = n(12894),
                T = n(30310),
                A = n.n(T);
            let x = (0, r.PA)((e) => {
                let { className: t, withBackwardControl: n = !0 } = e,
                    { formatMessage: r } = (0, s.A)(),
                    T = r({ id: 'error-messages.something-went-wrong' });
                !(function (e) {
                    let t = (0, m.st)(),
                        { hash: n } = (0, m.gf)(),
                        { pageId: l } = (0, _.$)(),
                        a = (0, y.U)();
                    (0, i.useEffect)(() => {
                        if (!t || !n || !l) return;
                        let r = (0, g.F)({
                            params: {
                                entityType: p.EntityTypes.Error,
                                entityId: p.EntityTypes.SomethingWrong,
                                errorMessage: e,
                                hash: n,
                                pageId: l,
                                pageStyle: p.PageStyles.Fullscreen,
                                pagePlacement: p.PagePlacements.Fullscreen,
                                mainObjectType: p.DomainObjectType.NonApplicable,
                                mainObjectId: p.DomainObjectType.NonApplicable,
                            },
                            logger: a,
                            context: 'useSendEventOnSomethingWentWrongShowed',
                        });
                        r && (0, h.z5)(t.evgenInstance, r);
                    }, [t, e, n, l, a]);
                })(T);
                let { sendRefreshEvent: x } = (function () {
                        let e = (0, m.st)(),
                            { hash: t } = (0, m.gf)(),
                            { pageId: n } = (0, _.$)(),
                            l = (0, y.U)();
                        return {
                            sendRefreshEvent: (0, i.useCallback)(() => {
                                if (!e || !t || !n) return;
                                let a = (0, g.F)({
                                    params: {
                                        actionType: p.ActionType.Refresh,
                                        userInteractionType: p.UserInteractionType.Tap,
                                        entityType: p.EntityTypes.Error,
                                        entityId: p.EntityTypes.SomethingWrong,
                                        hash: t,
                                        pageId: n,
                                        pageStyle: p.PageStyles.Fullscreen,
                                        pagePlacement: p.PagePlacements.Fullscreen,
                                        mainObjectType: p.DomainObjectType.NonApplicable,
                                        mainObjectId: p.DomainObjectType.NonApplicable,
                                    },
                                    logger: l,
                                    context: 'useSendEventOnSomethingWentWrongRefreshed',
                                });
                                a && (0, h.bv)(e.evgenInstance, a);
                            }, [e, t, n, l]),
                        };
                    })(),
                    k = (0, i.useCallback)(() => {
                        (x(), (window.location.href = E.Z.main.href));
                    }, [x]),
                    { contentRef: L } = (0, f.g)();
                return (0, l.jsxs)('div', {
                    className: (0, a.$)(A().root, t),
                    children: [
                        n &&
                            (0, l.jsx)(v.L, { withBackwardFallback: '/', className: (0, a.$)(A().navigation, { [A().navigation_desktop]: !L }), withForwardControl: !1 }),
                        (0, l.jsxs)('div', {
                            className: (0, a.$)(A().content, { [A().content_shrink]: !n }),
                            children: [
                                (0, l.jsx)(u.I, { className: A().icon, variant: 'attention', size: 'xxl' }),
                                (0, l.jsx)(d.DZ, { className: (0, a.$)(A().title, A().important), variant: 'h3', size: 'xs', children: T }),
                                (0, l.jsxs)(d.HL, {
                                    className: (0, a.$)(A().text, A().important),
                                    variant: 'span',
                                    type: 'text',
                                    size: 'l',
                                    weight: 'normal',
                                    children: [!1, (0, l.jsx)(o.A, { id: 'page-error.try-to-restart-app' })],
                                }),
                                (0, l.jsx)(c.$, {
                                    onClick: k,
                                    className: A().button,
                                    role: 'link',
                                    color: 'secondary',
                                    size: 'l',
                                    radius: 'xxxl',
                                    children: (0, l.jsxs)(d.HL, {
                                        type: 'controls',
                                        variant: 'span',
                                        size: 'm',
                                        children: [!1, (0, l.jsx)(o.A, { id: 'page-error.restart-app-button' })],
                                    }),
                                }),
                            ],
                        }),
                    ],
                });
            });
        },
        64552: (e, t, n) => {
            'use strict';
            n.d(t, { M: () => c, X: () => o });
            var l = n(25090),
                a = n(14190);
            let r = async (e) => e.then((e) => e.default),
                i = a.pE[a.cy],
                s = i.langs.reduce((e, t) => (e.set(t, async () => r(n(12526)('./'.concat(t, '.json')))), e), new Map()),
                o = i.langs.reduce((e, t) => (e.set(t, async () => r(n(46646)('./'.concat(t, '.json')))), e), new Map()),
                c = async function (e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : s,
                        n = t.get(e),
                        a = t.get('ru');
                    if (n) return n();
                    if (a) return a();
                    throw new l.t('No translations for '.concat(e, ' or ru languages'));
                };
        },
        73422: (e, t, n) => {
            'use strict';
            n.d(t, { E: () => d });
            var l = n(91945),
                a = n(14190),
                r = n(84570),
                i = n(40363);
            let s = (e) => i.U.parseAcceptLanguage(null != e ? e : void 0);
            var o = n(18870);
            let c = (e) => {
                var t;
                return null != (t = { ru: o.$.RU, en: o.$.EN, uz: o.$.UZ, kk: o.$.KK }[e]) ? t : o.$.RU;
            };
            var u = n(64552);
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
                    return c((0, r.k)(this.config, this.config.defaultLang));
                }
                getLanguage() {
                    return c((0, r.k)(this.config, this.language));
                }
                setLanguage(e) {
                    var t, n, l;
                    let a = (0, r.k)(this.config, e);
                    a !== (null == (t = this.storage) ? void 0 : t.get()) &&
                        (null == (n = this.storage) || n.set(a), null == (l = this.changeLanguageHandler) || l.onChangeLanguage(a));
                }
                getDictionary() {
                    if (!this.dictionary)
                        throw Error(
                            '\n                There is no downloaded CompiledTranslations!\n                I18NStorage.loadDictionary() must be called.\n            ',
                        );
                    return this.dictionary;
                }
                getAvailableLanguages() {
                    return this.config.langs.map((e) => c((0, r.k)(this.config, e)));
                }
                async loadDictionary() {
                    let e = (0, r.k)(this.config, this.language);
                    try {
                        this.dictionary = await (0, u.M)(e);
                    } catch (t) {
                        (t instanceof Error && this.logger.error(t, { language: e }), (this.dictionary = {}));
                    }
                    return this.dictionary;
                }
                constructor({ serverDetectedLocale: e, isBuildTypeDesktop: t, storage: n, changeLanguageHandler: o, logger: c }) {
                    let u;
                    if (
                        ((0, l._)(this, 'language', void 0),
                        (0, l._)(this, 'storage', void 0),
                        (0, l._)(this, 'dictionary', void 0),
                        (0, l._)(this, 'config', void 0),
                        (0, l._)(this, 'logger', void 0),
                        (0, l._)(this, 'changeLanguageHandler', void 0),
                        (0, l._)(this, 'serverDetectedLocale', void 0),
                        (this.storage = n),
                        (this.logger = c),
                        (this.changeLanguageHandler = o),
                        (this.serverDetectedLocale = e),
                        (this.config = a.pE[a.cy]),
                        t)
                    ) {
                        if ('undefined' != typeof navigator) {
                            var d;
                            let e;
                            u = ((e = this.config), new i.U({ brandConfig: e, enableWideLanguageSelectWithBrandLangs: !0 })).getLang({
                                cookieLang: (null == (d = this.storage) ? void 0 : d.get()) || void 0,
                                acceptLangs: s(navigator.languages.join()),
                            });
                        }
                    } else [u] = s(e) || [];
                    this.language = (0, r.k)(this.config, u);
                }
            }
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
        84570: (e, t, n) => {
            'use strict';
            n.d(t, { k: () => l });
            let l = (e, t) => (e.langs.includes(t) ? t : e.defaultLang);
        },
        94821: (e, t, n) => {
            'use strict';
            n.d(t, { W: () => l });
            var l = (function (e) {
                return ((e.APP = 'app'), (e.SUMMARY_LARGE_IMAGE = 'summary_large_image'), e);
            })({});
        },
        96218: (e, t, n) => {
            'use strict';
            n.d(t, { O: () => a, s: () => l });
            let l = 'yMusicStatePatchesUpdated',
                a = 'yMusicPageStatePatchesUpdated';
        },
        97841: (e, t, n) => {
            'use strict';
            n.d(t, { w: () => k });
            var l = n(32290),
                a = n(63618),
                r = n(96103),
                i = n(60900),
                s = n(31010),
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
            let c = (e, t, n) => {
                    switch (e) {
                        case o.YANDEX:
                            if ('ru' === t) return 'https://ya.ru';
                            return;
                        case o.YANDEX_PROJECTS:
                            return 'https://yandex.'.concat(t, '/all?lang=').concat(n);
                        case o.COPYRIGHT_HOLDER:
                            return 'https://yandex.'.concat(t, '/support/music/performers-and-copyright-holders/copyright.html?lang=').concat(n);
                        case o.AGREEMENT:
                            return 'https://yandex.ru/legal/music_termsofuse?lang='.concat(n);
                        case o.RECOMMENDATION_RULES:
                            return 'https://music.yandex.ru/legal/recommendations/ru/#music';
                        case o.HELP:
                            return 'https://yandex.'.concat(t, '/support/music/index.html?lang=').concat(n);
                        case o.PRIVACY_POLICY:
                            return 'https://yandex.'.concat(t, '/legal/confidential/').concat(n);
                    }
                },
                u = (e) => {
                    let { formatMessage: t, language: n, tld: l, year: a } = e;
                    return {
                        year: a,
                        yandexMusic: { id: o.YANDEX, title: t({ id: 'footer.yandex-music' }), url: c(o.YANDEX, l, n) },
                        yandexProjects: { id: o.YANDEX_PROJECTS, title: t({ id: 'footer.yandex-project' }), url: c(o.YANDEX_PROJECTS, l, n) },
                    };
                };
            var d = n(15559),
                g = n(8626);
            let p = (e) => e(new Date(), (0, g.m)());
            var h = n(61945),
                m = n(57594),
                y = n(77088),
                _ = n.n(y),
                f = n(21732),
                E = n(71926),
                v = n(61258);
            let T = (e) => {
                    let { className: t, data: n } = e;
                    return (0, l.jsxs)('div', {
                        className: (0, a.$)(_().copyrights, t),
                        'data-test-id': f.S7.FOOTER_COPYRIGHTS,
                        children: [
                            (0, l.jsxs)(E.HL, {
                                variant: 'span',
                                type: 'text',
                                size: 's',
                                weight: 'medium',
                                className: _().text,
                                children: [
                                    '\xa9 ',
                                    n.year,
                                    ' \xa0',
                                    (0, l.jsx)(v.N, {
                                        target: '_blank',
                                        href: n.yandexMusic.url,
                                        className: (0, a.$)(_().copyrightLink, _().yandexMusicLink),
                                        'data-test-id': f.S7.FOOTER_YANDEX_MUSIC_LINK,
                                        children: n.yandexMusic.title,
                                    }),
                                ],
                            }),
                            (0, l.jsx)(E.HL, { variant: 'span', type: 'text', size: 's', weight: 'medium', children: ' • ' }),
                            (0, l.jsx)(v.N, {
                                target: '_blank',
                                href: n.yandexProjects.url,
                                className: _().copyrightLink,
                                'data-test-id': f.S7.FOOTER_YANDEX_PROJECT_LINK,
                                children: n.yandexProjects.title,
                            }),
                        ],
                    });
                },
                A = (e) => {
                    let { disclaimer: t, links: n } = e;
                    return (0, l.jsxs)('div', {
                        className: _().links,
                        children: [
                            (0, l.jsx)('ol', {
                                className: _().list,
                                'data-test-id': f.S7.FOOTER_LINKS_LIST,
                                children: n.map((e) => {
                                    let { id: t, title: n, url: a } = e;
                                    return (0, l.jsx)(
                                        'li',
                                        {
                                            className: _().item,
                                            children: (0, l.jsx)(v.N, { target: '_blank', href: a, className: _().link, 'data-test-id': f.S7.FOOTER_LINK, children: n }),
                                        },
                                        t,
                                    );
                                }),
                            }),
                            (0, l.jsx)(E.HL, {
                                variant: 'span',
                                type: 'text',
                                size: 'm',
                                weight: 'medium',
                                className: _().explicitText,
                                tabIndex: 0,
                                dangerouslySetInnerHTML: { __html: t },
                                'data-test-id': f.S7.FOOTER_DISCLAIMER_TEXT,
                            }),
                        ],
                    });
                },
                x = (e) => {
                    let { className: t, data: n } = e;
                    return (0, l.jsxs)('footer', {
                        className: (0, a.$)(_().root, _().important, t),
                        'data-test-id': f.S7.FOOTER,
                        children: [(0, l.jsx)(A, { links: n.links, disclaimer: n.disclaimer }), (0, l.jsx)(T, { data: n.copyrights })],
                    });
                };
            (0, r.PA)((e) => {
                let { className: t } = e,
                    { location: n } = (0, m.g)(),
                    { formatDate: a, formatMessage: r } = (0, i.A)(),
                    { language: s } = (0, h.h)(),
                    o = u({ formatMessage: r, language: s, tld: n.tld, year: p(a) });
                return (0, l.jsx)(T, { className: t, data: o });
            });
            let k = (0, r.PA)((e) => {
                var t;
                let { className: n } = e,
                    { experiments: r, location: g, user: y } = (0, m.g)(),
                    { formatDate: f, formatMessage: E } = (0, i.A)(),
                    { isEnabled: v } = null != (t = (0, s.P)()) ? t : {},
                    { language: T } = (0, h.h)(),
                    A = ((e) => {
                        let { checkExperiment: t, formatMessage: n, isWebApplication: l, language: a, tld: r, userRegion: i, year: s } = e;
                        return {
                            links: ((e) => {
                                let { formatMessage: t, isWebApplication: n, tld: l, language: a, userRegion: r } = e,
                                    i = { id: o.COPYRIGHT_HOLDER, title: t({ id: 'footer.links-copyright-holders' }), url: c(o.COPYRIGHT_HOLDER, l, a) },
                                    s = { id: o.PRIVACY_POLICY, title: t({ id: 'footer.links-privacy-policy' }), url: c(o.PRIVACY_POLICY, l, a) },
                                    u = { id: o.AGREEMENT, title: t({ id: 'footer.links-terms' }), url: c(o.AGREEMENT, l, a) },
                                    d = { id: o.RECOMMENDATION_RULES, title: t({ id: 'footer.links-recommendation-rules' }), url: c(o.RECOMMENDATION_RULES, l, a) },
                                    g = { id: o.HELP, title: t({ id: 'footer.links-help' }), url: c(o.HELP, l, a) },
                                    p = [i, u, d];
                                return (n && 'ru' === r && p.push(s), p.push(g), p);
                            })({ formatMessage: n, isWebApplication: l, language: a, tld: r, userRegion: i }),
                            disclaimer: (0, d.v)({
                                checkExperiment: t,
                                getDisclaimerContent: () => n({ id: 'footer.disclaimer-content' }),
                                getExplicitContent: () => n({ id: 'footer.explicit-content' }),
                                userRegion: i,
                            }),
                            copyrights: u({ formatMessage: n, language: a, tld: r, year: s }),
                        };
                    })({
                        checkExperiment: (e, t) => r.checkExperiment(e, t),
                        formatMessage: E,
                        isWebApplication: !1,
                        tld: g.tld,
                        language: T,
                        userRegion: y.account.data.userSessionRegionIso,
                        year: p(f),
                    });
                return (0, l.jsx)(x, { className: (0, a.$)({ [_().root_withOffsetForDeeplink]: v }, n), data: A });
            });
        },
    },
]);
