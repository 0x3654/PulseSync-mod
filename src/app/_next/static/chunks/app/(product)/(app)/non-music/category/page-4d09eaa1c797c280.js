(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [1397],
    {
        19650: (t, e, i) => {
            'use strict';
            (i.r(e), i.d(e, { default: () => o }));
            var s = i(32290),
                l = i(21916),
                a = i(68243);
            let r = (t) => {
                    let { id: e } = t,
                        { href: i } = (0, a.u)('/landing/:skeleton', { params: { skeleton: 'category_non-music_'.concat(e) } });
                    (0, l.redirect)(i);
                },
                o = () => {
                    let t = (0, l.useSearchParams)().get('id');
                    return (t || (0, l.notFound)(), (0, s.jsx)(r, { id: t }));
                };
        },
        21916: (t, e, i) => {
            'use strict';
            var s = i(23948);
            (i.o(s, 'ServerInsertedHTMLContext') &&
                i.d(e, {
                    ServerInsertedHTMLContext: function () {
                        return s.ServerInsertedHTMLContext;
                    },
                }),
                i.o(s, 'notFound') &&
                    i.d(e, {
                        notFound: function () {
                            return s.notFound;
                        },
                    }),
                i.o(s, 'redirect') &&
                    i.d(e, {
                        redirect: function () {
                            return s.redirect;
                        },
                    }),
                i.o(s, 'usePathname') &&
                    i.d(e, {
                        usePathname: function () {
                            return s.usePathname;
                        },
                    }),
                i.o(s, 'useRouter') &&
                    i.d(e, {
                        useRouter: function () {
                            return s.useRouter;
                        },
                    }),
                i.o(s, 'useSearchParams') &&
                    i.d(e, {
                        useSearchParams: function () {
                            return s.useSearchParams;
                        },
                    }),
                i.o(s, 'useServerInsertedHTML') &&
                    i.d(e, {
                        useServerInsertedHTML: function () {
                            return s.useServerInsertedHTML;
                        },
                    }));
        },
        44326: (t, e, i) => {
            'use strict';
            i.d(e, { b: () => s, j: () => l });
            let s = {
                    exactPaths: [
                        '/',
                        '/404',
                        '/album/[albumId]',
                        '/album/[albumId]/track/[trackId]',
                        '/artist/[artistId]',
                        '/artist/[artistId]/albums',
                        '/artist/[artistId]/compilations',
                        '/artist/[artistId]/concerts',
                        '/artist/[artistId]/discography',
                        '/artist/[artistId]/familiar',
                        '/artist/[artistId]/similar',
                        '/artist/[artistId]/tracks',
                        '/artist/[artistId]/videos',
                        '/chart',
                        '/chart/podcasts',
                        '/chart/podcasts/category/[categoryId]',
                        '/collection',
                        '/collection/albums',
                        '/collection/artists',
                        '/collection/clips',
                        '/collection/dislikes',
                        '/collection/kids',
                        '/collection/kids/albums',
                        '/collection/kids/playlists',
                        '/collection/kids/tracks',
                        '/collection/multivibes',
                        '/collection/non-music',
                        '/collection/non-music/liked',
                        '/collection/playlists',
                        '/collection/playlists/created',
                        '/collection/playlists/liked',
                        '/collection/shelf',
                        '/collection/shelf/liked',
                        '/collection/shelf/new-episodes',
                        '/collection/shelf/recently-played',
                        '/concert/[concertId]',
                        '/concerts',
                        '/concerts/details/[type]/[id]',
                        '/entities/[blockType]/[blockId]',
                        '/genre/[metatagId]',
                        '/genre/[metatagId]/albums',
                        '/genre/[metatagId]/artists',
                        '/genre/[metatagId]/playlists',
                        '/kids',
                        '/kids/category/[categoryId]',
                        '/kids/editorial/album/[id]',
                        '/kids/editorial/playlist/[id]',
                        '/label/[labelId]',
                        '/label/[labelId]/albums',
                        '/label/[labelId]/artists',
                        '/landing-promo-preview',
                        '/landing/[skeleton]',
                        '/login-status',
                        '/mixes',
                        '/mixes/[navigationId]',
                        '/multivibe',
                        '/multivibe/[roomId]',
                        '/music-history',
                        '/muzmarket',
                        '/mymusic/favorite_tracks',
                        '/non-music',
                        '/non-music/category/[id]',
                        '/non-music/category/[id]/albums',
                        '/non-music/editorial/album/[id]',
                        '/non-music/editorial/playlist/[categoryId]',
                        '/oauth',
                        '/pay',
                        '/playlist/[playlistId]',
                        '/playlists/[playlistUuid]',
                        '/plus',
                        '/post/[promoId]',
                        '/promolanding/album/[albumId]',
                        '/search',
                        '/search/history',
                        '/settings',
                        '/slides/artist/[artistId]',
                        '/slides/kids',
                        '/slides/podcast/[podcastId]',
                        '/slides/special/[campaignId]',
                        '/slides/user',
                        '/tag/[tagId]',
                        '/track/[trackId]',
                        '/users',
                        '/users/[userId]/playlists/[kind]',
                        '/video',
                    ],
                    regexPatterns: [
                        '^/$',
                        '^/404$',
                        '^/album/([^/]+)$',
                        '^/album/([^/]+)/track/([^/]+)$',
                        '^/artist/([^/]+)$',
                        '^/artist/([^/]+)/albums$',
                        '^/artist/([^/]+)/compilations$',
                        '^/artist/([^/]+)/concerts$',
                        '^/artist/([^/]+)/discography$',
                        '^/artist/([^/]+)/familiar$',
                        '^/artist/([^/]+)/similar$',
                        '^/artist/([^/]+)/tracks$',
                        '^/artist/([^/]+)/videos$',
                        '^/chart$',
                        '^/chart/podcasts$',
                        '^/chart/podcasts/category/([^/]+)$',
                        '^/collection$',
                        '^/collection/albums$',
                        '^/collection/artists$',
                        '^/collection/clips$',
                        '^/collection/dislikes$',
                        '^/collection/kids$',
                        '^/collection/kids/albums$',
                        '^/collection/kids/playlists$',
                        '^/collection/kids/tracks$',
                        '^/collection/multivibes$',
                        '^/collection/non-music$',
                        '^/collection/non-music/liked$',
                        '^/collection/playlists$',
                        '^/collection/playlists/created$',
                        '^/collection/playlists/liked$',
                        '^/collection/shelf$',
                        '^/collection/shelf/liked$',
                        '^/collection/shelf/new-episodes$',
                        '^/collection/shelf/recently-played$',
                        '^/concert/([^/]+)$',
                        '^/concerts$',
                        '^/concerts/details/([^/]+)/([^/]+)$',
                        '^/entities/([^/]+)/([^/]+)$',
                        '^/genre/([^/]+)$',
                        '^/genre/([^/]+)/albums$',
                        '^/genre/([^/]+)/artists$',
                        '^/genre/([^/]+)/playlists$',
                        '^/kids$',
                        '^/kids/category/([^/]+)$',
                        '^/kids/editorial/album/([^/]+)$',
                        '^/kids/editorial/playlist/([^/]+)$',
                        '^/label/([^/]+)$',
                        '^/label/([^/]+)/albums$',
                        '^/label/([^/]+)/artists$',
                        '^/landing-promo-preview$',
                        '^/landing/([^/]+)$',
                        '^/login-status$',
                        '^/mixes$',
                        '^/mixes/([^/]+)$',
                        '^/multivibe$',
                        '^/multivibe/([^/]+)$',
                        '^/music-history$',
                        '^/muzmarket$',
                        '^/mymusic/favorite_tracks$',
                        '^/non-music$',
                        '^/non-music/category/([^/]+)$',
                        '^/non-music/category/([^/]+)/albums$',
                        '^/non-music/editorial/album/([^/]+)$',
                        '^/non-music/editorial/playlist/([^/]+)$',
                        '^/oauth$',
                        '^/pay$',
                        '^/playlist/([^/]+)$',
                        '^/playlists/([^/]+)$',
                        '^/plus$',
                        '^/post/([^/]+)$',
                        '^/promolanding/album/([^/]+)$',
                        '^/search$',
                        '^/search/history$',
                        '^/settings$',
                        '^/slides/artist/([^/]+)$',
                        '^/slides/kids$',
                        '^/slides/podcast/([^/]+)$',
                        '^/slides/special/([^/]+)$',
                        '^/slides/user$',
                        '^/tag/([^/]+)$',
                        '^/track/([^/]+)$',
                        '^/users$',
                        '^/users/([^/]+)/playlists/([^/]+)$',
                        '^/video$',
                    ],
                },
                l = {
                    '/': '',
                    '/404': '',
                    '/album/:albumId': '',
                    '/album/:albumId/track/:trackId': '',
                    '/artist/:artistId': '',
                    '/artist/:artistId/albums': '',
                    '/artist/:artistId/compilations': '',
                    '/artist/:artistId/concerts': '',
                    '/artist/:artistId/discography': '',
                    '/artist/:artistId/familiar': '',
                    '/artist/:artistId/similar': '',
                    '/artist/:artistId/tracks': '',
                    '/artist/:artistId/videos': '',
                    '/chart': '',
                    '/chart/podcasts': '',
                    '/chart/podcasts/category/:categoryId': '',
                    '/collection': '',
                    '/collection/albums': '',
                    '/collection/artists': '',
                    '/collection/clips': '',
                    '/collection/dislikes': '',
                    '/collection/kids': '',
                    '/collection/kids/albums': '',
                    '/collection/kids/playlists': '',
                    '/collection/kids/tracks': '',
                    '/collection/multivibes': '',
                    '/collection/non-music': '',
                    '/collection/non-music/liked': '',
                    '/collection/playlists': '',
                    '/collection/playlists/created': '',
                    '/collection/playlists/liked': '',
                    '/collection/shelf': '',
                    '/collection/shelf/liked': '',
                    '/collection/shelf/new-episodes': '',
                    '/collection/shelf/recently-played': '',
                    '/concert/:concertId': '',
                    '/concerts': '',
                    '/concerts/details/:type/:id': '',
                    '/entities/:blockType/:blockId': '',
                    '/genre/:metatagId': '',
                    '/genre/:metatagId/albums': '',
                    '/genre/:metatagId/artists': '',
                    '/genre/:metatagId/playlists': '',
                    '/kids': '',
                    '/kids/category/:categoryId': '',
                    '/kids/editorial/album/:id': '',
                    '/kids/editorial/playlist/:id': '',
                    '/label/:labelId': '',
                    '/label/:labelId/albums': '',
                    '/label/:labelId/artists': '',
                    '/landing-promo-preview': '',
                    '/landing/:skeleton': '',
                    '/login-status': '',
                    '/mixes': '',
                    '/mixes/:navigationId': '',
                    '/multivibe': '',
                    '/multivibe/:roomId': '',
                    '/music-history': '',
                    '/muzmarket': '',
                    '/mymusic/favorite_tracks': '',
                    '/non-music': '',
                    '/non-music/category/:id': '',
                    '/non-music/category/:id/albums': '',
                    '/non-music/editorial/album/:id': '',
                    '/non-music/editorial/playlist/:categoryId': '',
                    '/oauth': '',
                    '/pay': '',
                    '/playlist/:playlistId': '',
                    '/playlists/:playlistUuid': '',
                    '/plus': '',
                    '/post/:promoId': '',
                    '/promolanding/album/:albumId': '',
                    '/search': '',
                    '/search/history': '',
                    '/settings': '',
                    '/slides/artist/:artistId': '',
                    '/slides/kids': '',
                    '/slides/podcast/:podcastId': '',
                    '/slides/special/:campaignId': '',
                    '/slides/user': '',
                    '/tag/:tagId': '',
                    '/track/:trackId': '',
                    '/users': '',
                    '/users/:userId/playlists/:kind': '',
                    '/video': '',
                };
        },
        53161: (t, e, i) => {
            'use strict';
            i.d(e, { k7: () => s, nl: () => l });
            let s = 1e3,
                l = 'https://';
        },
        63469: (t, e, i) => {
            Promise.resolve().then(i.bind(i, 19650));
        },
        68243: (t, e, i) => {
            'use strict';
            i.d(e, { u: () => n });
            var s = i(85472),
                l = i(44326),
                a = i(53161);
            let r = (t) => {
                    var e;
                    if (!t) return t;
                    let i = (null != (e = t.split('?')[0]) ? e : '').split('/').filter(Boolean);
                    for (let t of Object.keys(l.j)) {
                        let e = t.split('/').filter(Boolean);
                        if (i.length !== e.length) continue;
                        let s = !0;
                        for (let t = 0; t < e.length; t++) {
                            let l = e[t],
                                a = i[t];
                            if (l && !l.startsWith(':') && l !== a) {
                                s = !1;
                                break;
                            }
                        }
                        if (s) return t;
                    }
                    return t;
                },
                o = (t) => {
                    let e = [],
                        i = t.split('/').filter(Boolean),
                        s = [];
                    for (let t of i) t.startsWith(':') ? e.push(t.substring(1)) : s.push(t);
                    let l = '/'.concat(s.join('/'));
                    if (0 === e.length) return t;
                    let a = e.map((t) => ''.concat(t, '=:').concat(t)).join('&');
                    return ''.concat(l, '?').concat(a);
                },
                c = (t) =>
                    t
                        .split('/')
                        .filter(Boolean)
                        .filter((t) => t.startsWith(':'))
                        .map((t) => t.substring(1)),
                n = function (t) {
                    for (var e, i = arguments.length, n = Array(i > 1 ? i - 1 : 0), d = 1; d < i; d++) n[d - 1] = arguments[d];
                    let [u] = n,
                        m = t.includes(':'),
                        p = t.includes('?'),
                        g = 'string' == typeof t ? t : String(t);
                    if (
                        (g.includes(a.nl) && (u = { ...u, options: { ...(null == u ? void 0 : u.options), isExternalLink: !0 } }),
                        p &&
                            ((t) => {
                                let [e, i] = t.split('?'),
                                    s = new URLSearchParams(i);
                                return Object.keys(l.j).some((t) => {
                                    let i = c(t);
                                    return 0 !== i.length && o(t).split('?')[0] === e && i.every((t) => s.has(t));
                                });
                            })(g))
                    )
                        return (0, s.getLinkAttributesBase)(g, u);
                    if (p && !m) {
                        let t = r(g),
                            i = c(t);
                        if (i.length > 0) {
                            let l = ((t, e) => {
                                    var i;
                                    let s = (null != (i = t.split('?')[0]) ? i : '').split('/').filter(Boolean);
                                    return e
                                        .split('/')
                                        .filter(Boolean)
                                        .reduce((t, e, i) => {
                                            let l = s[i];
                                            return (e.startsWith(':') && l && (t[e.substring(1)] = l), t);
                                        }, {});
                                })(g, t),
                                a = {
                                    ...((t, e) => {
                                        let i = t.split('?')[1];
                                        if (!i) return {};
                                        let s = new Set(e),
                                            l = {};
                                        return (
                                            new URLSearchParams(i).forEach((t, e) => {
                                                s.has(e) || (l[e] = t);
                                            }),
                                            l
                                        );
                                    })(g, i),
                                    ...(null != (e = null == u ? void 0 : u.query) ? e : {}),
                                },
                                r = o(t);
                            return (0, s.getLinkAttributesBase)(r, { ...u, params: l, query: a });
                        }
                    }
                    if (m || p) {
                        let t = o(g);
                        return (0, s.getLinkAttributesBase)(t, u);
                    }
                    let $ = r(g),
                        k = (function (t, e) {
                            let [i, s] = t.split('?'),
                                l = null == i ? void 0 : i.split('/').filter(Boolean),
                                a = {},
                                r = e.split('/').filter(Boolean);
                            if ((null == l ? void 0 : l.length) !== r.length || (r[0] && !t.startsWith('/'.concat(r[0])))) return a;
                            for (let t = 0; t < r.length; t++) {
                                let e = r[t],
                                    i = l && l[t];
                                (null == e ? void 0 : e.startsWith(':')) && i && (a[e.substring(1)] = i);
                            }
                            return (
                                s &&
                                    s.split('&').map((t) => {
                                        let [e, i] = t.split('=');
                                        e && void 0 !== i && (a[e] = i);
                                    }),
                                a
                            );
                        })(g, $),
                        y = o($);
                    return (0, s.getLinkAttributesBase)(y, { ...u, params: k });
                };
        },
    },
    (t) => {
        (t.O(0, [5472, 4220, 9562, 7358], () => t((t.s = 63469))), (_N_E = t.O()));
    },
]);
