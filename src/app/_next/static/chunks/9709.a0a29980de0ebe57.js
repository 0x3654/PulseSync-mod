'use strict';
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [9709],
    {
        29709: (a, s, t) => {
            (t.r(s), t.d(s, { config: () => f }));
            var e = t(42157),
                c = t(94661),
                n = t(63038),
                i = t(31570),
                o = t.n(i),
                r = t(84746),
                d = t(71762),
                u = t(56081);
            let { MEDIA: l, CONNECT: p, FRAME: h } = o(),
                m = (0, u.P)(['*.mdst.yandex.net', 'localhost.music.yandex.'.concat(n.B, ':3000')], d.q, n.B),
                x = (0, u.P)(
                    [
                        'wss://localhost.music.yandex.'.concat(n.B, ':3000'),
                        '*.music.yandex-team.'.concat(n.B),
                        'http://music-landing-stress-music-landing-79.sas.yp-c.yandex.net:8080',
                    ],
                    d.q,
                    n.B,
                ),
                y = (0, u.P)(['music.qa.yandex.'.concat(n.B)], d.q, n.B);
            var B = t(11463);
            let f = {
                ...(0, e.A)((0, B.Z)(), {
                    resources: { musicExternalApi: { allowCustomPrefixUrl: !0, prefixUrl: c.Y } },
                    player: { overembed: !1, externalDomain: 'localhost.music.yandex.ru' },
                    passportCredentials: { host: 'https://passport.yandex.'.concat(n.B), origin: 'music' },
                    oldWebHost: 'music.qa.yandex.'.concat(n.B),
                    afisha: { host: 'https://widget.afisha.yandex.ru' },
                    iframe: { entityBaseUrl: 'https://music.qa.yandex.'.concat(n.B) },
                    feedbackForm: { host: 'https://music.qa.yandex.'.concat(n.B) },
                }),
                csp: (() => {
                    let a = (0, r.$)(),
                        s = a[l],
                        t = a[p],
                        e = a[h];
                    return (void 0 !== s && s.push(...m), void 0 !== t && t.push(...x), void 0 !== e && e.push(...y), a);
                })(),
            };
        },
        94661: (a, s, t) => {
            t.d(s, { Y: () => c });
            var e = t(63038);
            let c = `https://api.music.qa.yandex.${e.B}`;
        },
    },
]);
