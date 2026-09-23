(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [8134],
    {
        4205: (e, s, a) => {
            'use strict';
            (a.r(s), a.d(s, { default: () => m }));
            var t = a(32290),
                r = a(21916),
                i = a(55178),
                l = a(21604),
                n = a(50168),
                f = a(74694),
                u = a(83410),
                h = a.n(u);
            let c = () => (0, t.jsxs)('div', { className: h().root, children: [(0, t.jsx)(f.Y, { className: h().header }), (0, t.jsx)(n.c, { isActive: !0 })] }),
                d = /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i,
                o = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i,
                _ = /^[a-z]{2}\.$/i,
                m = () => {
                    let e = (0, r.useSearchParams)().get('playlistUuid');
                    return (
                        (e &&
                            (function (e) {
                                if (!e || (36 !== e.length && 39 !== e.length)) return !1;
                                if (39 === e.length) {
                                    let s = e.substring(0, 3),
                                        a = e.substring(3);
                                    return _.test(s) && d.test(a);
                                }
                                return o.test(e);
                            })(e)) ||
                            (0, r.notFound)(),
                        (0, t.jsxs)(i.Suspense, { fallback: (0, t.jsx)(c, {}), children: [(0, t.jsx)(l.S, { playlistUuid: e }), ';'] })
                    );
                };
        },
        30246: (e, s, a) => {
            Promise.resolve().then(a.bind(a, 4205));
        },
        83410: (e) => {
            e.exports = { root: 'PlaylistShimmersPage_root__RsNRj', header: 'PlaylistShimmersPage_header__vm4q3' };
        },
    },
    (e) => {
        (e.O(
            0,
            [
                1010, 7412, 3608, 8461, 7231, 2147, 9763, 4517, 2633, 1256, 9117, 3186, 3647, 3379, 257, 7685, 6706, 1311, 5201, 5472, 8378, 900, 2536, 2146, 3353, 2474,
                8035, 347, 2732, 1417, 6861, 8672, 9364, 2176, 8506, 6050, 5806, 7702, 6874, 9155, 861, 4668, 9740, 1175, 4499, 8915, 8816, 2563, 6341, 6226, 4797, 277,
                7078, 3350, 3298, 6728, 4220, 9562, 7358,
            ],
            () => e((e.s = 30246)),
        ),
            (_N_E = e.O()));
    },
]);
