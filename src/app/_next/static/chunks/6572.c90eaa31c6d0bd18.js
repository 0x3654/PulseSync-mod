(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [6572],
    {
        36572: (e, t, a) => {
            'use strict';
            (a.r(t), a.d(t, { ShareButton: () => g }));
            var l = a(32290),
                r = a(63618),
                n = a(55178),
                o = a(60900),
                s = a(99923),
                i = a(63423),
                c = a(82586),
                d = a(19740),
                u = a(12350),
                h = a(57594),
                y = a(1714),
                x = a(23234),
                p = a.n(x),
                f = a(74980),
                m = a.n(f);
            let v = async (e) => {
                    let { snapdom: t } = await a.e(6090).then(a.bind(a, 66090)),
                        l = e.clientWidth,
                        r = e.clientHeight;
                    return (
                        e.querySelectorAll('[data-scale]').forEach((e) => {
                            let t = e.clientWidth,
                                a = Math.max(1, Math.min((l - 2 * y.EK) / t, y.GF));
                            e.dataset.scale = a.toString();
                        }),
                        await document.fonts.ready,
                        t.toBlob(e, {
                            compress: !1,
                            dpr: 1,
                            embedFonts: !0,
                            quality: y.Tu,
                            scale: y.VI / r,
                            type: 'png',
                            plugins: [
                                {
                                    name: 'prepare-screenshot',
                                    afterClone: (e) => {
                                        let { clone: t } = e;
                                        t instanceof HTMLElement &&
                                            (t.querySelectorAll('[data-scale]').forEach((e) => {
                                                var t;
                                                e.style.scale = null != (t = e.dataset.scale) ? t : '1';
                                            }),
                                            t.querySelectorAll('[data-screenshot-value]').forEach((e) => {
                                                var t;
                                                e.textContent = null != (t = e.dataset.screenshotValue) ? t : '';
                                            }),
                                            t.querySelectorAll(y.bg).forEach((e) => {
                                                e.style.opacity = '0';
                                            }),
                                            t.querySelectorAll('[data-screenshot-visible]').forEach((e) => {
                                                ((e.style.display = 'block'), (e.style.height = '100%'), (e.style.maxWidth = 'none'), (e.style.width = '100%'));
                                            }));
                                    },
                                },
                            ],
                        })
                    );
                },
                b = () => 'ya-music-'.concat(Date.now(), '.png'),
                g = (e) => {
                    var t;
                    let {
                            data: { title: a, textColor: y, buttonColor: x },
                            className: f,
                            cardRef: g,
                            wrapperClassName: w,
                            'data-test-id': S,
                        } = e,
                        {
                            settings: { isMobile: k },
                        } = (0, h.g)(),
                        C = (0, u.m)(),
                        { formatMessage: E } = (0, o.A)(),
                        [A, j] = (0, n.useMemo)(() => {
                            let e = { '--text-color': y, '--button-color': x };
                            return [e, k ? void 0 : e];
                        }, [x, k, y]),
                        _ = (0, n.useCallback)(async () => {
                            var e;
                            if (!(null == g ? void 0 : g.current)) return;
                            C({ actionType: s.ActionType.SaveSlide });
                            let t = b(),
                                a = await v(g.current);
                            null == (e = window.musicDesktop) || e.files.savePng(t, await a.arrayBuffer());
                        }, [g, C]),
                        q = (0, n.useCallback)(async () => {
                            if (!(null == g ? void 0 : g.current)) return;
                            C({ actionType: s.ActionType.SaveSlide });
                            let e = await v(g.current),
                                t = b();
                            navigator.share({ files: [new File([e], t, { type: 'image/png' })], text: t });
                        }, [g, C]);
                    return (null == (t = navigator) ? void 0 : t.share)
                        ? (0, l.jsx)('div', {
                              className: w,
                              style: A,
                              children: (0, l.jsxs)(d.W1, {
                                  ariaLabel: E({ id: 'interface-actions.context-menu' }),
                                  className: (0, r.$)(m().root, p().root, f),
                                  color: 'secondary',
                                  isMobile: k,
                                  label: a,
                                  placement: 'right',
                                  radius: 'xxxl',
                                  role: 'button',
                                  size: 'default',
                                  style: j,
                                  'data-test-id': S,
                                  children: [
                                      (0, l.jsx)(d.Dr, {
                                          icon: (0, l.jsx)(c.I, { variant: 'download', size: 'xxs' }),
                                          onClick: _,
                                          children: E({ id: 'rewind.download-image' }),
                                      }),
                                      (0, l.jsx)(d.Dr, {
                                          icon: (0, l.jsx)(c.I, { variant: 'more', size: 'xxs' }),
                                          onClick: q,
                                          children: E({ id: 'interface-actions.more' }),
                                      }),
                                  ],
                              }),
                          })
                        : (0, l.jsx)(i.$, {
                              className: (0, r.$)(m().root, p().root, f),
                              color: 'secondary',
                              onClick: _,
                              radius: 'xxxl',
                              role: 'button',
                              size: 'default',
                              style: j,
                              withHover: !1,
                              'data-test-id': S,
                              children: a,
                          });
                };
        },
        74980: (e) => {
            e.exports = { root: 'ShareButton_root__fGsNv' };
        },
    },
]);
