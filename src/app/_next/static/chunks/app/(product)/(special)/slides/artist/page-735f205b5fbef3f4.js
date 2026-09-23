(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [2833],
    {
        43021: (e, s, t) => {
            Promise.resolve().then(t.bind(t, 92792));
        },
        92792: (e, s, t) => {
            'use strict';
            (t.r(s), t.d(s, { default: () => u }));
            var r = t(32290),
                a = t(21916),
                i = t(3377),
                d = t(84330),
                n = t(9105);
            let u = () => {
                let e = (0, a.useSearchParams)().get('artistId');
                return (
                    e || (0, a.notFound)(),
                    (0, r.jsx)(i.WithAuth, { withRedirectToMainPage: !1, children: (0, r.jsx)(d.SlidesPage, { slidesConsumer: n.z.ARTIST, artistId: e }) })
                );
            };
        },
    },
    (e) => {
        (e.O(
            0,
            [
                7412, 7709, 1010, 2226, 9808, 6706, 1311, 5472, 8378, 900, 2536, 2146, 3353, 2474, 347, 8672, 2551, 8506, 6050, 5806, 7702, 6874, 9155, 861, 7078, 7866,
                4220, 9562, 7358,
            ],
            () => e((e.s = 43021)),
        ),
            (_N_E = e.O()));
    },
]);
