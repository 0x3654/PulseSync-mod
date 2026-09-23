(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [4347],
    {
        21916: (t, e, s) => {
            'use strict';
            var i = s(23948);
            (s.o(i, 'ServerInsertedHTMLContext') &&
                s.d(e, {
                    ServerInsertedHTMLContext: function () {
                        return i.ServerInsertedHTMLContext;
                    },
                }),
                s.o(i, 'notFound') &&
                    s.d(e, {
                        notFound: function () {
                            return i.notFound;
                        },
                    }),
                s.o(i, 'redirect') &&
                    s.d(e, {
                        redirect: function () {
                            return i.redirect;
                        },
                    }),
                s.o(i, 'usePathname') &&
                    s.d(e, {
                        usePathname: function () {
                            return i.usePathname;
                        },
                    }),
                s.o(i, 'useRouter') &&
                    s.d(e, {
                        useRouter: function () {
                            return i.useRouter;
                        },
                    }),
                s.o(i, 'useSearchParams') &&
                    s.d(e, {
                        useSearchParams: function () {
                            return i.useSearchParams;
                        },
                    }),
                s.o(i, 'useServerInsertedHTML') &&
                    s.d(e, {
                        useServerInsertedHTML: function () {
                            return i.useServerInsertedHTML;
                        },
                    }));
        },
        41595: (t, e, s) => {
            Promise.resolve().then(s.bind(s, 51751));
        },
        44326: (t, e, s) => {
            'use strict';
            s.d(e, { b: () => i, j: () => l });
            let i = {
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
        51751: (t, e, s) => {
            'use strict';
            (s.r(e), s.d(e, { default: () => o }));
            var i = s(32290),
                l = s(21916),
                a = s(68243);
            let r = (t) => {
                    let { categoryId: e } = t,
                        { href: s } = (0, a.u)('/landing/:skeleton', { params: { skeleton: 'category_kids_'.concat(e) } });
                    (0, l.redirect)(s);
                },
                o = () => {
                    let t = (0, l.useSearchParams)().get('categoryId');
                    return (t || (0, l.notFound)(), (0, i.jsx)(r, { categoryId: t }));
                };
        },
        53161: (t, e, s) => {
            'use strict';
            s.d(e, { k7: () => i, nl: () => l });
            let i = 1e3,
                l = 'https://';
        },
        68243: (t, e, s) => {
            'use strict';
            s.d(e, { u: () => n });
            var i = s(85472),
                l = s(44326),
                a = s(53161);
            let r = (t) => {
                    var e;
                    if (!t) return t;
                    let s = (null != (e = t.split('?')[0]) ? e : '').split('/').filter(Boolean);
                    for (let t of Object.keys(l.j)) {
                        let e = t.split('/').filter(Boolean);
                        if (s.length !== e.length) continue;
                        let i = !0;
                        for (let t = 0; t < e.length; t++) {
                            let l = e[t],
                                a = s[t];
                            if (l && !l.startsWith(':') && l !== a) {
                                i = !1;
                                break;
                            }
                        }
                        if (i) return t;
                    }
                    return t;
                },
                o = (t) => {
                    let e = [],
                        s = t.split('/').filter(Boolean),
                        i = [];
                    for (let t of s) t.startsWith(':') ? e.push(t.substring(1)) : i.push(t);
                    let l = '/'.concat(i.join('/'));
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
                    for (var e, s = arguments.length, n = Array(s > 1 ? s - 1 : 0), d = 1; d < s; d++) n[d - 1] = arguments[d];
                    let [u] = n,
                        m = t.includes(':'),
                        p = t.includes('?'),
                        g = 'string' == typeof t ? t : String(t);
                    if (
                        (g.includes(a.nl) && (u = { ...u, options: { ...(null == u ? void 0 : u.options), isExternalLink: !0 } }),
                        p &&
                            ((t) => {
                                let [e, s] = t.split('?'),
                                    i = new URLSearchParams(s);
                                return Object.keys(l.j).some((t) => {
                                    let s = c(t);
                                    return 0 !== s.length && o(t).split('?')[0] === e && s.every((t) => i.has(t));
                                });
                            })(g))
                    )
                        return (0, i.getLinkAttributesBase)(g, u);
                    if (p && !m) {
                        let t = r(g),
                            s = c(t);
                        if (s.length > 0) {
                            let l = ((t, e) => {
                                    var s;
                                    let i = (null != (s = t.split('?')[0]) ? s : '').split('/').filter(Boolean);
                                    return e
                                        .split('/')
                                        .filter(Boolean)
                                        .reduce((t, e, s) => {
                                            let l = i[s];
                                            return (e.startsWith(':') && l && (t[e.substring(1)] = l), t);
                                        }, {});
                                })(g, t),
                                a = {
                                    ...((t, e) => {
                                        let s = t.split('?')[1];
                                        if (!s) return {};
                                        let i = new Set(e),
                                            l = {};
                                        return (
                                            new URLSearchParams(s).forEach((t, e) => {
                                                i.has(e) || (l[e] = t);
                                            }),
                                            l
                                        );
                                    })(g, s),
                                    ...(null != (e = null == u ? void 0 : u.query) ? e : {}),
                                },
                                r = o(t);
                            return (0, i.getLinkAttributesBase)(r, { ...u, params: l, query: a });
                        }
                    }
                    if (m || p) {
                        let t = o(g);
                        return (0, i.getLinkAttributesBase)(t, u);
                    }
                    let y = r(g),
                        k = (function (t, e) {
                            let [s, i] = t.split('?'),
                                l = null == s ? void 0 : s.split('/').filter(Boolean),
                                a = {},
                                r = e.split('/').filter(Boolean);
                            if ((null == l ? void 0 : l.length) !== r.length || (r[0] && !t.startsWith('/'.concat(r[0])))) return a;
                            for (let t = 0; t < r.length; t++) {
                                let e = r[t],
                                    s = l && l[t];
                                (null == e ? void 0 : e.startsWith(':')) && s && (a[e.substring(1)] = s);
                            }
                            return (
                                i &&
                                    i.split('&').map((t) => {
                                        let [e, s] = t.split('=');
                                        e && void 0 !== s && (a[e] = s);
                                    }),
                                a
                            );
                        })(g, y),
                        $ = o(y);
                    return (0, i.getLinkAttributesBase)($, { ...u, params: k });
                };
        },
    },
    (t) => {
        (t.O(0, [5472, 4220, 9562, 7358], () => t((t.s = 41595))), (_N_E = t.O()));
    },
]);
