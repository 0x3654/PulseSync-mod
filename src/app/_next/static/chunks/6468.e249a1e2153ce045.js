'use strict';
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [6468],
    {
        46468: (t, a, s) => {
            (s.r(a), s.d(a, { config: () => A }));
            var e = s(42157),
                n = s(59136),
                c = s(94661),
                o = s(63038),
                u = s(31570),
                d = s.n(u),
                i = s(84746),
                p = s(71762),
                l = s(56081);
            let { MEDIA: r, CONNECT: B, FRAME: h, WORKER: x, SCRIPT: y } = d(),
                m = (0, l.P)(['*.mdst.yandex.net', 'localhost.music.yandex.'.concat(o.B, ':3000')], p.q, o.B),
                _ = [
                    'music.qa.yandex.'.concat(o.B),
                    'widget.afisha.tst.yandex.'.concat(o.B),
                    '*.music.yandex.'.concat(o.B),
                    '*.plus.tst.yandex.'.concat(o.B),
                    'plus.tst.yandex.'.concat(o.B),
                ],
                C = ['*.music.yandex.'.concat(o.B, ':3000')],
                E = [
                    'wss://localhost.music.yandex.'.concat(o.B, ':3000'),
                    'https://api.events.plus.tst.yandex.net',
                    'https://plus-i18n-token.tst.plus.yandex-team.ru',
                    'https://plus-i18n-token.plus.yandex-team.ru',
                ],
                P = ['*.plus.tst.yandex.'.concat(o.B), 'plus.tst.yandex.'.concat(o.B)],
                v = (0, l.P)(E, p.q, o.B),
                U = (0, l.P)(_, p.q, o.B),
                N = (0, l.P)(C, p.q, o.B),
                f = (0, l.P)(P, p.q, o.B);
            var q = s(11463),
                k = s(49124);
            let T = k.env.NEXT_PUBLIC_USE_PRODUCTION_BACKEND ? n.$ : c.Y,
                A = {
                    ...(0, e.A)((0, q.Z)(), {
                        resources: { musicExternalApi: { allowCustomPrefixUrl: !1, prefixUrl: T } },
                        player: { overembed: !1, externalDomain: 'localhost.music.yandex.ru' },
                        passportCredentials: { host: 'https://passport.yandex.'.concat(o.B), origin: 'music_desktop' },
                        oldWebHost: k.env.NEXT_PUBLIC_USE_PRODUCTION_BACKEND ? 'music.yandex.'.concat(o.B) : 'music.qa.yandex.'.concat(o.B),
                        afisha: { host: 'https://widget.afisha.yandex.ru' },
                        iframe: { entityBaseUrl: 'https://music.qa.yandex.'.concat(o.B) },
                        feedbackForm: { host: 'https://music.qa.yandex.'.concat(o.B) },
                        rsc: { useCache: !1 },
                        mocks: {
                            enabled: 'true' === k.env.NEXT_PUBLIC_MOCKS_ENABLED,
                            urlCapturePattern: k.env.NEXT_PUBLIC_MOCK_URL_CAPTURE_PATTERN || ''.concat(T, '/*'),
                        },
                    }),
                    csp: (() => {
                        let t = (0, i.$)(),
                            a = t[r],
                            s = t[B],
                            e = t[h],
                            n = t[x],
                            c = t[y];
                        return (
                            void 0 !== n && n.push(...N),
                            void 0 !== a && a.push(...m),
                            void 0 !== s && s.push(...v),
                            void 0 !== e && e.push(...U),
                            void 0 !== c && c.push(...f),
                            t
                        );
                    })(),
                };
        },
        94661: (t, a, s) => {
            s.d(a, { Y: () => n });
            var e = s(63038);
            let n = `https://api.music.qa.yandex.${e.B}`;
        },
    },
]);
