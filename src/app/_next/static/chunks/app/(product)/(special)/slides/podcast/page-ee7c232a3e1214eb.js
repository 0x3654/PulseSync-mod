(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [6890],
    {
        6540: (e, s, t) => {
            Promise.resolve().then(t.bind(t, 88056));
        },
        88056: (e, s, t) => {
            'use strict';
            (t.r(s), t.d(s, { default: () => u }));
            var a = t(32290),
                d = t(21916),
                r = t(3377),
                i = t(84330),
                n = t(9105);
            let u = () => {
                let e = (0, d.useSearchParams)().get('podcastId');
                return (
                    e || (0, d.notFound)(),
                    (0, a.jsx)(r.WithAuth, { withRedirectToMainPage: !1, children: (0, a.jsx)(i.SlidesPage, { slidesConsumer: n.z.PODCAST, podcastId: e }) })
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
            () => e((e.s = 6540)),
        ),
            (_N_E = e.O()));
    },
]);
