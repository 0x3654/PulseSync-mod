(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [9953],
    {
        18123: (e, s, a) => {
            'use strict';
            (a.r(s), a.d(s, { default: () => u }));
            var t = a(32290),
                i = a(21916),
                n = a(3377),
                r = a(84330),
                d = a(9105);
            let u = () => {
                let e = (0, i.useSearchParams)().get('campaignId');
                return (
                    e || (0, i.notFound)(),
                    (0, t.jsx)(n.WithAuth, { withRedirectToMainPage: !1, children: (0, t.jsx)(r.SlidesPage, { slidesConsumer: d.z.SPECIAL, campaignId: e }) })
                );
            };
        },
        79181: (e, s, a) => {
            Promise.resolve().then(a.bind(a, 18123));
        },
    },
    (e) => {
        (e.O(
            0,
            [
                7412, 7709, 1010, 2226, 9808, 6706, 1311, 5472, 8378, 900, 2536, 2146, 3353, 2474, 347, 8672, 2551, 8506, 6050, 5806, 7702, 6874, 9155, 861, 7078, 7866,
                4220, 9562, 7358,
            ],
            () => e((e.s = 79181)),
        ),
            (_N_E = e.O()));
    },
]);
