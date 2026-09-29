'use strict';
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [6234],
    {
        56234: (e, a, s) => {
            (s.r(a), s.d(a, { config: () => u, getMocksEnabled: () => i }));
            var n = s(42157),
                o = s(85472),
                t = s(59136),
                r = s(63038),
                l = s(84746),
                c = s(11463);
            let i = () => (0, o.toBoolean)('false'),
                u = {
                    ...(0, n.A)((0, c.Z)(), {
                        resources: { musicExternalApi: { allowCustomPrefixUrl: !0, prefixUrl: t.$ } },
                        player: { overembed: !1, externalDomain: 'next.music.yandex.ru' },
                        oldWebHost: 'music.yandex.'.concat(r.B),
                        afisha: { host: 'https://widget.afisha.yandex.ru' },
                        payment: { environment: 'production' },
                        mocks: { enabled: i() },
                    }),
                    csp: (0, l.$)(),
                };
        },
    },
]);
