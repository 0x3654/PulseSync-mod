(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [3358],
    {
        50: (e, t, a) => {
            'use strict';
            a.d(t, { D: () => o, W: () => r });
            var n = a(55178);
            let o = (0, n.createContext)({ theme: null, setTheme: () => {} }),
                r = () => (0, n.useContext)(o);
        },
        1164: (e, t, a) => {
            'use strict';
            a.d(t, { C: () => s });
            var n = a(55178),
                o = a(62376),
                r = a(19805);
            let s = () => {
                let e = (0, o.U)();
                return (0, n.useCallback)(
                    (t) => {
                        ((e, t) => {
                            if ('code' in e && e.code === r.lo.MISSING_DATA) return;
                            let a = e && 'object' == typeof e && 'code' in e && e.code,
                                n = 'IntlProviderError';
                            (a && (n += ':'.concat(a)), t.error(n, { error: null == e ? void 0 : e.message, stack: null == e ? void 0 : e.stack }));
                        })(t, e);
                    },
                    [e],
                );
            };
        },
        1204: (e, t, a) => {
            'use strict';
            a.d(t, { v: () => n });
            var n = (function (e) {
                return ((e.PLAY_VIBE = 'play-vibe'), e);
            })({});
        },
        8623: (e) => {
            e.exports = {
                root: 'NotificationUpdate_root__hpSQi',
                important: 'NotificationUpdate_important___0WHj',
                text: 'NotificationUpdate_text__YylYD',
                button: 'NotificationUpdate_button__F3O16',
                message: 'NotificationUpdate_message__rLYpW',
            };
        },
        10790: (e, t, a) => {
            'use strict';
            a.d(t, { Q: () => r, q: () => o });
            let n = new Set(),
                o = (e) => (
                    n.add(e),
                    () => {
                        n.delete(e);
                    }
                ),
                r = () => {
                    n.forEach((e) => {
                        e();
                    });
                };
        },
        12818: () => {},
        17512: (e, t, a) => {
            'use strict';
            function n() {
                var e;
                return null == (e = window.musicDesktop) ? void 0 : e.runtime.version;
            }
            a.d(t, { B: () => n });
        },
        34291: (e, t, a) => {
            'use strict';
            a.d(t, { W: () => n });
            let n = 'system';
        },
        36131: (e) => {
            e.exports = {
                toastClassName: 'NotificationsInitializer_toastClassName__ZVvrd',
                notificationContainer: 'NotificationsInitializer_notificationContainer__oe1ot',
            };
        },
        36634: (e, t, a) => {
            'use strict';
            a.d(t, { DesktopInitializer: () => z });
            var n,
                o = a(32290),
                r = a(55178);
            !(function (e) {
                ((e.LIGHT = 'light'), (e.DARK = 'dark'));
            })(n || (n = {}));
            var s = a(14257),
                i = a(21916),
                l = a(85472),
                c = a(91027),
                b = a(20472),
                d = a(1204),
                N = a(97201),
                u = a(68243),
                x = a(44326);
            let W = x.b.regexPatterns.map((e) => new RegExp(e)),
                p = [
                    [
                        /^\/home\/([^/?]+)(\?.*)?$/,
                        (e) => {
                            let t = e.match(/^\/home\/([^/?]+)(\?.*)?$/);
                            if (!t) return e;
                            let a = t[1],
                                n = t[2] || '';
                            if (!a) return e;
                            let o = new URLSearchParams(n.startsWith('?') ? n.substring(1) : '');
                            return (o.set('tab', a), '/?'.concat(o.toString()));
                        },
                    ],
                    [/^\/home$/, () => b.Z.main.href],
                    [/^\/users\/(.*)\/playlists$/, () => b.Z.collection.href],
                    [/^\/users\/(.*)\/artists$/, () => b.Z.collection.href],
                    [/^\/users\/(.*)\/albums$/, () => b.Z.collection.href],
                    [/^\/users\/(.*)\/tracks$/, () => b.Z.collection.href],
                    [/^\/users\/(.*)\/podcasts$/, () => b.Z.collection.href],
                    [/^\/users\/(.*)\/kids$/, () => b.Z.collection.href],
                    [/^\/users\/(.*)\/history$/, () => b.Z.musicHistory.href],
                    [
                        /^\/play-vibe/,
                        (e) => {
                            let t = new URLSearchParams(e.split('?')[1]);
                            t.set(N.K.DEEPLINK, d.v.PLAY_VIBE);
                            let a = ((e, t) => {
                                let a = new URLSearchParams();
                                return (
                                    e.forEach((e, t) => {
                                        a.append(t, e);
                                    }),
                                    t.forEach((e, t) => {
                                        a.append(t, e);
                                    }),
                                    a
                                );
                            })(new URLSearchParams(window.location.search), t);
                            return 'landing' === t.get(N.K.SCREEN) ? '/?'.concat(a.toString()) : ''.concat(window.location.pathname, '?').concat(a.toString());
                        },
                    ],
                ];
            var m = a(60900),
                v = a(45477),
                h = a(75582),
                f = a(63618),
                g = a(21732),
                C = a(63423),
                k = a(71926),
                S = a(58534),
                P = a(8623),
                D = a.n(P);
            let y = (e) => {
                let { version: t, formatMessage: a, closeToast: n } = e,
                    s = (0, r.useCallback)(() => {
                        var e;
                        (null == (e = window.musicDesktop) || e.app.installUpdate(), null == n || n());
                    }, [n]),
                    i = (0, r.useMemo)(
                        () =>
                            (0, o.jsxs)('div', {
                                className: D().message,
                                children: [
                                    (0, o.jsx)(k.HL, {
                                        className: D().text,
                                        variant: 'div',
                                        type: 'controls',
                                        size: 'm',
                                        children: a({ id: 'desktop.on-update-available' }, { version: t }),
                                    }),
                                    (0, o.jsx)(C.$, {
                                        className: D().button,
                                        onClick: s,
                                        variant: 'default',
                                        color: 'secondary',
                                        size: 'xs',
                                        radius: 'xxxl',
                                        'data-test-id': g.Kq.appUpdate.APP_UPDATE_NOTIFICATION_BUTTON,
                                        children: (0, o.jsx)(k.HL, { variant: 'div', type: 'controls', size: 'm', children: a({ id: 'desktop.update' }) }),
                                    }),
                                ],
                            }),
                        [a, s, t],
                    );
                return (0, o.jsx)(S.$, { className: (0, f.$)(D().root, D().important), message: i });
            };
            var T = a(70204),
                E = a(34186),
                _ = a(17512),
                A = a(57594),
                L = a(10790),
                w = a(88964),
                I = a(96103),
                R = a(60764),
                O = a(39407),
                M = a(84638),
                V = a(46049);
            a(75717);
            var F = a(1164),
                j = a(61945),
                B = a(89337),
                U = a.n(B);
            let Y = {
                    ul: (e) => (0, o.jsx)('ul', { className: U().description, children: e }),
                    li: (e) => (0, o.jsx)('li', { className: U().item, children: e }),
                    code: (e) => (0, o.jsx)('code', { className: U().code, children: e }),
                    date: (e) => (0, o.jsx)('span', { className: U().date, children: e }),
                    p: (e) => (0, o.jsx)('p', { className: U().paragraph, children: e }),
                    br: (0, o.jsx)('br', {}),
                },
                Q = (0, I.PA)(() => {
                    let {
                            releaseNotes: { translations: e, sortedDescReleaseNotesKeys: t, modal: a },
                        } = (0, A.g)(),
                        { formatMessage: n } = (0, m.A)(),
                        { language: r, defaultLanguage: s } = (0, j.h)(),
                        i = (0, F.C)();
                    return (0, o.jsx)(M.a, {
                        title: n({ id: 'desktop.release-notes-modal-title' }),
                        open: a.isOpened,
                        onOpenChange: a.onOpenChange,
                        onClose: a.close,
                        size: 'fitContent',
                        placement: 'center',
                        overlayClassName: U().modalOverlay,
                        overlayColor: 'full',
                        labelClose: n({ id: 'interface-actions.close' }),
                        className: U().root,
                        headerClassName: U().modalHeader,
                        contentClassName: U().modalContent,
                        'data-test-id': g.Kq.releaseNotes.RELEASE_NOTES_MODAL,
                        closeButtonDataTestId: g.Kq.releaseNotes.RELEASE_NOTES_MODAL_CLOSE_BUTTON,
                        children: (0, o.jsx)(R.A, {
                            onError: i,
                            defaultLocale: s,
                            locale: r,
                            messages: null == e ? void 0 : e.data,
                            children: (0, o.jsx)(V.N, {
                                className: (0, f.$)(U().scrollableContent, U().important),
                                containerClassName: (0, f.$)(U().notes, U().important),
                                children:
                                    null == t
                                        ? void 0
                                        : t.map((e) =>
                                              (0, o.jsxs)(
                                                  'div',
                                                  {
                                                      className: U().note,
                                                      children: [
                                                          (0, o.jsx)(k.DZ, {
                                                              variant: 'h4',
                                                              className: (0, f.$)(U().version, U().important),
                                                              'data-test-id': g.Kq.releaseNotes.RELEASE_NOTES_VERSION,
                                                              children: ((e) => {
                                                                  var t;
                                                                  return null != (t = e.split('desktop-release-notes.')[1]) ? t : '';
                                                              })(e),
                                                          }),
                                                          (0, o.jsx)('div', {
                                                              'data-test-id': g.Kq.releaseNotes.RELEASE_NOTES_TEXT,
                                                              children: (0, o.jsx)(O.A, { id: e, values: Y }),
                                                          }),
                                                      ],
                                                  },
                                                  e,
                                              ),
                                          ),
                            }),
                        }),
                    });
                });
            var K = a(50);
            let z = () => {
                let { language: e } = (0, j.h)();
                {
                    let { theme: t } = (0, K.W)(),
                        a = (0, E.N)().get(T.vg);
                    ((() => {
                        let [e, t] = (0, r.useState)(!1),
                            {
                                releaseNotes: { setTranslationsReleaseNotes: a, isReady: n, modal: o, setSortedDescReleaseNotesKeys: s },
                            } = (0, A.g)(),
                            i = (0, r.useCallback)(
                                (e) => {
                                    let { needToShowReleaseNotes: n, sortedDescReleaseNotesKeys: o, translationsReleaseNotes: r } = e;
                                    (a(r), s(o), n && t(!0));
                                },
                                [s, a],
                            );
                        ((0, r.useEffect)(() => {
                            e && n && (o.open(), t(!1));
                        }, [n, o, e]),
                            (0, r.useEffect)(() => {
                                var e;
                                return null == (e = window.musicDesktop) ? void 0 : e.app.onLoadReleaseNotes(i);
                            }, [i]));
                    })(),
                        (() => {
                            let { formatMessage: e } = (0, m.A)(),
                                { notify: t } = (0, h.l)(),
                                a = (0, r.useRef)(''),
                                n = (0, r.useCallback)(
                                    (n) => {
                                        a.current !== n && ((a.current = n), t((0, o.jsx)(y, { formatMessage: e, version: n }), { containerId: v.u.IMPORTANT }));
                                    },
                                    [e, a, t],
                                );
                            (0, r.useEffect)(() => {
                                var e;
                                return null == (e = window.musicDesktop) ? void 0 : e.app.onUpdateAvailable(n);
                            }, [n]);
                        })(),
                        (() => {
                            let { library: e, experiments: t } = (0, A.g)(),
                                a = (0, r.useCallback)(() => {
                                    (t.getData(), e.getData(), (0, L.Q)());
                                }, [t, e]);
                            (0, r.useEffect)(() => {
                                var e;
                                return null == (e = window.musicDesktop) ? void 0 : e.app.onRefreshData(a);
                            }, [a]);
                        })(),
                        (() => {
                            let e = (0, i.useRouter)(),
                                t = (0, c.c)((t) => {
                                    if (!(0, l.isSafeUrlPathnameAfterDecode)(t)) return;
                                    for (let [a, n] of p) if (a.test(t)) return void e.push(n(t));
                                    if (
                                        !((e) => {
                                            let t = (0, l.getPathnameFromUrl)(e);
                                            return (
                                                W.some((e) => e.test(t)) ||
                                                ((e) => {
                                                    let t = (0, l.getPathnameFromUrl)(e),
                                                        a = new URLSearchParams(e.split('?')[1]);
                                                    return Object.keys(x.j).some((e) => {
                                                        let n = e
                                                            .split('/')
                                                            .filter(Boolean)
                                                            .filter((e) => e.startsWith(':'))
                                                            .map((e) => e.substring(1));
                                                        return (
                                                            0 !== n.length &&
                                                            ((e) => {
                                                                let t = e
                                                                    .split('/')
                                                                    .filter(Boolean)
                                                                    .filter((e) => !e.startsWith(':'));
                                                                return '/'.concat(t.join('/'));
                                                            })(e) === t &&
                                                            n.every((e) => a.has(e))
                                                        );
                                                    });
                                                })(e)
                                            );
                                        })(t)
                                    )
                                        return;
                                    let { href: a } = (0, u.u)(t);
                                    e.push(a);
                                });
                            (0, r.useEffect)(() => {
                                var e;
                                return null == (e = window.musicDesktop) ? void 0 : e.navigation.onOpenDeeplink(t);
                            }, [t]);
                        })(),
                        (() => {
                            let e = (0, E.N)().get(T.vg),
                                t = (0, r.useCallback)(
                                    (t) => {
                                        t && e.count(t, 'probabilityBucket');
                                    },
                                    [e],
                                );
                            (0, r.useEffect)(() => {
                                var e;
                                return null == (e = window.musicDesktop) ? void 0 : e.app.onProbabilityBucket(t);
                            }, [t]);
                        })(),
                        (() => {
                            let e = (0, E.N)().get(T.vg),
                                t = (0, r.useCallback)(() => {
                                    let t = (0, _.B)();
                                    t && e.count(t, 'installsCount');
                                }, [e]);
                            (0, r.useEffect)(() => {
                                var e;
                                return null == (e = window.musicDesktop) ? void 0 : e.app.onFirstLaunch(t);
                            }, [t]);
                        })(),
                        (() => {
                            let e = (0, w.j)(),
                                t = (0, r.useCallback)(() => {
                                    e.tracksController &&
                                        e.tracksController.refreshTracksMeta().then(() => {
                                            var e;
                                            null == (e = window.musicDesktop) || e.offline.notifyRepositoryMetaUpdated();
                                        });
                                }, [e.tracksController]);
                            (0, r.useEffect)(() => {
                                var e;
                                return null == (e = window.musicDesktop) ? void 0 : e.offline.onRefreshRepositoryMeta(t);
                            }, [t]);
                        })(),
                        (() => {
                            let e = (0, w.j)(),
                                t = (0, r.useCallback)(() => {
                                    e.tracksController &&
                                        e.tracksController.refreshTracksAvailability().then(() => {
                                            var e;
                                            null == (e = window.musicDesktop) || e.offline.notifyTracksAvailabilityUpdated();
                                        });
                                }, [e.tracksController]);
                            (0, r.useEffect)(() => {
                                var e;
                                return null == (e = window.musicDesktop) ? void 0 : e.offline.onRefreshTracksAvailability(t);
                            }, [t]);
                        })(),
                        (0, r.useEffect)(() => {
                            (((e) => {
                                var t;
                                null == (t = window.musicDesktop) || t.app.ready(e);
                            })(e),
                                document.addEventListener('auxclick', (e) => e.preventDefault()),
                                document.addEventListener('click', (e) => {
                                    (e.ctrlKey || e.metaKey || e.shiftKey) && e.preventDefault();
                                }));
                        }, [e]),
                        (0, r.useEffect)(() => {
                            let e = (0, _.B)();
                            e && a.count(e, 'appVersion');
                        }, [a]),
                        (0, r.useEffect)(() => {
                            t &&
                                (((e) => {
                                    var t;
                                    null == (t = window.musicDesktop) || t.app.setTheme(e === s.S.Light ? n.LIGHT : n.DARK);
                                })(t),
                                a.count(t, 'appTheme'));
                        }, [t]));
                }
                return (0, o.jsx)(Q, {});
            };
        },
        37108: (e, t, a) => {
            'use strict';
            a.d(t, { h: () => n });
            let n = {
                PlayerAuthorization: 'player-authorization',
                PlayerSubscription: 'player-subscription',
                FullscreenUnauthorized: 'fullscreen-unauthorized',
                FullscreenSubscription: 'fullscreen-subscription',
            };
        },
        41433: (e, t, a) => {
            (Promise.resolve().then(a.bind(a, 29680)),
                Promise.resolve().then(a.bind(a, 36634)),
                Promise.resolve().then(a.t.bind(a, 36131, 23)),
                Promise.resolve().then(a.t.bind(a, 12818, 23)),
                Promise.resolve().then(a.bind(a, 37824)),
                Promise.resolve().then(a.bind(a, 54783)),
                Promise.resolve().then(a.bind(a, 96096)),
                Promise.resolve().then(a.bind(a, 57510)),
                Promise.resolve().then(a.bind(a, 49932)));
        },
        42040: (e, t, a) => {
            'use strict';
            a.d(t, { Q: () => o, V: () => r });
            var n = a(14257);
            let o = () => window.matchMedia('(prefers-color-scheme: light)'),
                r = () => {
                    let e = o();
                    return (null == e ? void 0 : e.matches) ? n.S.Light : n.S.Dark;
                };
        },
        43352: (e, t, a) => {
            'use strict';
            a.d(t, { Z: () => r });
            var n = a(75314),
                o = a(14257);
            let r = (e) => {
                (document.body.classList.remove(...Object.values(n.o)), e && Object.values(o.S).includes(e) && document.body.classList.add(n.o[e]));
            };
        },
        49932: (e, t, a) => {
            'use strict';
            a.d(t, { ApplicationInformationHeadTags: () => o });
            var n = a(32290);
            let o = (e) => {
                let { assetPrefix: t } = e;
                return (0, n.jsxs)(n.Fragment, {
                    children: [
                        (0, n.jsx)('link', { rel: 'icon', type: 'image/png', sizes: '48x48', href: ''.concat(t, '/favicon-48x48.png') }),
                        (0, n.jsx)('link', { rel: 'icon', type: 'image/svg+xml', href: ''.concat(t, '/favicon.svg') }),
                        (0, n.jsx)('link', { rel: 'shortcut icon', href: ''.concat(t, '/favicon.ico') }),
                        (0, n.jsx)('link', { rel: 'apple-touch-icon', sizes: '180x180', href: ''.concat(t, '/apple-touch-icon.png') }),
                        (0, n.jsx)('link', { rel: 'manifest', crossOrigin: 'use-credentials', href: ''.concat(t, '/site.webmanifest') }),
                        (0, n.jsx)('meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }),
                        (0, n.jsx)('meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }),
                        (0, n.jsx)('meta', { name: 'apple-mobile-web-app-title', content: 'Яндекс Музыка' }),
                        (0, n.jsx)('link', {
                            rel: 'search',
                            type: 'application/opensearchdescription+xml',
                            title: 'Яндекс Музыка',
                            href: ''.concat(t, '/opensearch.xml'),
                        }),
                        (0, n.jsx)('meta', { name: 'robots', content: 'noyaca' }),
                    ],
                });
            };
        },
        57510: (e, t, a) => {
            'use strict';
            a.d(t, { TranslationsProvider: () => i });
            var n = a(32290),
                o = a(60764),
                r = a(1164),
                s = a(61945);
            let i = (e) => {
                let { children: t } = e,
                    { dictionary: a, language: i, defaultLanguage: l } = (0, s.h)(),
                    c = (0, r.C)();
                return (0, n.jsx)(o.A, { onError: c, defaultLocale: l, locale: i, messages: a, children: t });
            };
        },
        58741: (e, t, a) => {
            'use strict';
            a.d(t, { O: () => n });
            var n = (function (e) {
                return ((e.MACOS = 'darwin'), (e.WINDOWS = 'win32'), (e.LINUX = 'linux'), e);
            })({});
        },
        61945: (e, t, a) => {
            'use strict';
            a.d(t, { h: () => s });
            var n = a(55178),
                o = a(70204),
                r = a(34186);
            let s = () => {
                let e = (0, r.N)().get(o.Xc),
                    t = e.getLanguage(),
                    a = e.getDefaultLanguage(),
                    s = e.getDictionary(),
                    i = e.getAvailableLanguages(),
                    l = (0, n.useCallback)(
                        (t) => {
                            e.setLanguage(t);
                        },
                        [t],
                    );
                return (0, n.useMemo)(() => ({ dictionary: s, language: t, defaultLanguage: a, availableLanguages: i, setLanguage: l }), [t, l]);
            };
        },
        72733: (e, t, a) => {
            'use strict';
            a.d(t, { Q: () => s });
            var n = a(91027),
                o = a(19379),
                r = a(14257);
            let s = (e) => {
                let t = (0, n.c)((t) => {
                    e.set(o.c.Theme, t, { expires: 180 });
                });
                return {
                    getThemeFromStorage: (0, n.c)(() => {
                        let a = e.get(o.c.Theme);
                        return a && Object.values(r.S).includes(a) ? (t(a), a) : null;
                    }),
                    setThemeToStorage: t,
                };
            };
        },
        75314: (e, t, a) => {
            'use strict';
            a.d(t, { J: () => r, o: () => o });
            var n = a(14257);
            let o = { [n.S.Dark]: 'ym-dark-theme', [n.S.Light]: 'ym-light-theme' },
                r = (e) => {
                    switch (e) {
                        case n.S.Light:
                        case n.S.Dark:
                            return o[e];
                        default:
                            return '';
                    }
                };
        },
        76232: (e, t, a) => {
            'use strict';
            var n;
            (a.d(t, { e: () => n }),
                (function (e) {
                    ((e.HIGH_QUALITY = 'high_quality'), (e.BALANCED = 'balanced'), (e.EFFICIENT = 'efficient'), (e.PREVIEW = 'preview'));
                })(n || (n = {})));
        },
        79406: (e, t, a) => {
            'use strict';
            a.d(t, { z: () => n });
            var n = (function (e) {
                return (
                    (e.WebEditorsFeatures = 'WebEditorsFeatures'),
                    (e.WebNext = 'WebNext'),
                    (e.WebNextAuthPerf = 'WebNextAuthPerf'),
                    (e.WebNextBlockFullscreen = 'WebNextBlockFullscreen'),
                    (e.WebNextDisableCollection = 'WebNextDisableCollection'),
                    (e.WebNextDisableVibe = 'WebNextDisableVibe'),
                    (e.WebNextDisableVibeSettings = 'WebNextDisableVibeSettings'),
                    (e.WebNextDisableSearch = 'WebNextDisableSearch'),
                    (e.WebNextDisableKids = 'WebNextDisableKids'),
                    (e.WebNextDisableNonMusic = 'WebNextDisableNonMusic'),
                    (e.WebNextDisablePlus = 'WebNextDisablePlus'),
                    (e.WebNextDisableSendPlaysOnTrackStart = 'WebNextDisableSendPlaysOnTrackStart'),
                    (e.WebNextPlayQueueDnD = 'WebNextPlayQueueDnD'),
                    (e.WebNextCollectionPlaylistsDnD = 'WebNextCollectionPlaylistsDnD'),
                    (e.WebNextCrackdownInterval = 'WebNextCrackdownInterval'),
                    (e.WebNextAdvertTest = 'WebNextAdvertTest'),
                    (e.WebNextErids = 'WebNextErids'),
                    (e.WebNextConcertsCashback = 'WebNextConcertsCashback'),
                    (e.WebNextBetaLabel = 'WebNextBetaLabel'),
                    (e.WebNextRewind2024 = 'WebNextRewind2024'),
                    (e.WebNextOfflineDegradation = 'WebNextOfflineDegradation'),
                    (e.WebNextDesktopPaywallInterval = 'WebNextDesktopPaywallInterval'),
                    (e.WebNextPaywallCrackdownInterval = 'WebNextPaywallCrackdownInterval'),
                    (e.WebNextShaderFallbackEnabled = 'WebNextShaderFallbackEnabled'),
                    (e.WebNextShaderV3 = 'WebNextShaderV3'),
                    (e.WebNextDisablePrefetchRequests = 'WebNextDisablePrefetchRequests'),
                    (e.WebNextDeleteIndexedDbPlaysStore = 'WebNextDeleteIndexedDbPlaysStore'),
                    (e.WebNextDeeplinksToMobile = 'WebNextDeeplinksToMobile'),
                    (e.WebNextPromoLanding = 'WebNextPromoLanding'),
                    (e.WebNextPromoLandingCrackdownInterval = 'WebNextPromoLandingCrackdownInterval'),
                    (e.WebNextPromoLandingAdvert = 'WebNextPromoLandingAdvert'),
                    (e.WebNextArtistInfo = 'WebNextArtistInfo'),
                    (e.WebNextEnableSendLimitedEntityListToYnison = 'WebNextEnableSendLimitedEntityListToYnison'),
                    (e.WebNextPromoVeryBestRecommendations = 'WebNextPromoVeryBestRecommendations'),
                    (e.WebNextLegalRedirects = 'WebNextLegalRedirects'),
                    (e.WebNextRemoveDuplicatePlays = 'WebNextRemoveDuplicatePlays'),
                    (e.WebNextVirtualSkeleton = 'WebNextVirtualSkeleton'),
                    (e.WebNextAlbumDonationButton = 'WebNextAlbumDonationButton'),
                    (e.WebNextAlbumNotModified = 'WebNextAlbumNotModified'),
                    (e.WebNextDisableAds = 'WebNextDisableAds'),
                    (e.WebNextAlbumCPA = 'WebNextAlbumCPA'),
                    (e.WebNextPlusCPA = 'WebNextPlusCPA'),
                    (e.WebNextNewConcertCard = 'WebNextNewConcertCard'),
                    (e.NewConcertsTicketRedesign = 'newConcertsTicketRedesign'),
                    (e.WebNextConcertsTab = 'WebNextConcertsTab'),
                    (e.WebNextTracksPreload = 'WebNextTracksPreload'),
                    (e.WebNextResourcesFileInfo = 'WebNextResourcesFileInfo'),
                    (e.WebNextDisableConcertsTab = 'WebNextDisableConcertsTab'),
                    (e.WebNextFooterDisclaimer = 'WebNextFooterDisclaimer'),
                    (e.WebNextYnisonActivityInterception = 'WebNextYnisonActivityInterception'),
                    (e.WebNextYnisonRestoreMusicAsVibe = 'WebNextYnisonRestoreMusicAsVibe'),
                    (e.WebNextVibeDescription = 'WebNextVibeDescription'),
                    (e.WebNextVibeTerminated = 'WebNextVibeTerminated'),
                    (e.WebNextConcertsTicketIcon = 'WebNextConcertsTicketIcon'),
                    (e.WebNextConcertPage = 'WebNextConcertPage'),
                    (e.WebNextCrossMediaPlayer = 'WebNextCrossMediaPlayer'),
                    (e.WebNextConcertTabOnboarding = 'WebNextConcertTabOnboarding'),
                    (e.WebNextPlusOptionsMarketplace = 'WebNextPlusOptionsMarketplace'),
                    (e.WebNextMarketLanding = 'WebNextMarketLanding'),
                    (e.ABTestIds = 'ABTestIds'),
                    (e.WebNextWaveAgentExperiment = 'WebNextWaveAgentExperiment'),
                    (e.WebNextUlitochka = 'WebNextUlitochka'),
                    (e.WebNextPromoLandingLayout = 'WebNextPromoLandingLayout'),
                    (e.WebNextToggleFavouritePlaylistVisibility = 'WebNextToggleFavouritePlaylistVisibility'),
                    (e.WebNextBrandedPlaylistsAxe = 'WebNextBrandedPlaylistsAxe'),
                    (e.WebNextNavbarExplicit = 'WebNextNavbarExplicit'),
                    (e.WebNextEnableSendFadeFieldsInPlays = 'WebNextEnableSendFadeFieldsInPlays'),
                    (e.WebNextSlidesPage = 'WebNextSlidesPage'),
                    (e.WebNextYnisonInactiveTimerDesktop = 'WebNextYnisonInactiveTimerDesktop'),
                    (e.WebNextPaywallTopSection = 'WebNextPaywallTopSection'),
                    (e.WebNextPaywallSecondButton = 'WebNextPaywallSecondButton'),
                    (e.WebNextSearchConcerts = 'WebNextSearchConcerts'),
                    (e.WebNextConcertsDetailsPage = 'WebNextConcertsDetailsPage'),
                    (e.WebNextYaspSourceLimit = 'WebNextYaspSourceLimit'),
                    (e.WebNextNewWaveTab = 'WebNextNewWaveTab'),
                    (e.WebNextMainPlayerAnimation = 'WebNextMainPlayerAnimation'),
                    (e.WebNextNewWaveTabFeedbackForm = 'WebNextNewWaveTabFeedbackForm'),
                    (e.WebNextNdaLabelOnWaveTab = 'WebNextNdaLabelOnWaveTab'),
                    (e.WebNextPaidPerformancePaywallTopSection = 'WebNextPaidPerformancePaywallTopSection'),
                    (e.WebNextPlusOptionsSidebar = 'WebNextPlusOptionsSidebar'),
                    (e.WebNextConcertsIdentityEventType = 'WebNextConcertsIdentityEventType'),
                    (e.WebNextWaveScreenWordsInWave = 'WebNextWaveScreenWordsInWave'),
                    (e.WebNextWaveScreenWordsInWaveBigReplica = 'WebNextWaveScreenWordsInWaveBigReplica'),
                    (e.WebNextWaveScreenWordsInWaveDirectLinks = 'WebNextWaveScreenWordsInWaveDirectLinks'),
                    (e.WebNextEnableSkipDebounce = 'WebNextEnableSkipDebounce'),
                    (e.WebNextYaspVersion13766 = 'WebNextYaspVersion13766'),
                    (e.WebNextQueryToVibe = 'WebNextQueryToVibe'),
                    (e.WebNextQueryToVibeXLumen = 'WebNextQueryToVibeXLumen'),
                    (e.WebNextQueryToVibeLumenOptionCheck = 'WebNextQueryToVibeLumenOptionCheck'),
                    (e.WebNextErrorAutoSkip = 'WebNextErrorAutoSkip'),
                    (e.WebNextConcertsLocation = 'WebNextConcertsLocation'),
                    (e.WebNextConcertsLocationAll = 'WebNextConcertsLocationAll'),
                    (e.WebNextDesktopWebFreemium = 'WebNextDesktopWebFreemium'),
                    (e.WebNextFreeToApp = 'WebNextFreeToApp'),
                    (e.WebNextBatchFeedbacksOnVibeSettingsChange = 'WebNextBatchFeedbacksOnVibeSettingsChange'),
                    (e.WebNextSendRadioStartedOnVibeSettingsChange = 'WebNextSendRadioStartedOnVibeSettingsChange'),
                    (e.WebNextRadioStartedOnSessionCreation = 'WebNextRadioStartedOnSessionCreation'),
                    (e.WebNextStoreDeferredVibeFeedbacks = 'WebNextStoreDeferredVibeFeedbacks'),
                    (e.WebNextDeleteDeferredVibeFeedbacksStore = 'WebNextDeleteDeferredVibeFeedbacksStore'),
                    (e.WebNextYnisonNetworkMonitoring = 'WebNextYnisonNetworkMonitoring'),
                    (e.WebNextYnisonNewConnector = 'WebNextYnisonNewConnector'),
                    (e.WebNextVibeQueueButtonLoginPopover = 'WebNextVibeQueueButtonLoginPopover'),
                    (e.WebNextCorrectRotorQueueParam = 'WebNextCorrectRotorQueueParam'),
                    (e.WebNextNewWaveWizard = 'WebNextNewWaveWizard'),
                    (e.WebNextTrackModalCloseOnNavigate = 'WebNextTrackModalCloseOnNavigate'),
                    (e.WebNextEnableSendOriginalContextInVibePlays = 'WebNextEnableSendOriginalContextInVibePlays'),
                    (e.WebNextWaveForTwo = 'WebNextWaveForTwo'),
                    (e.WebNextWaveForTwoTest = 'WebNextWaveForTwoTest'),
                    (e.WebNextTrackComplaintForm = 'WebNextTrackComplaintForm'),
                    (e.WebNextLandingSdk = 'WebNextLandingSdk'),
                    (e.WebNextYnisonUseConnectionType = 'WebNextYnisonUseConnectionType'),
                    (e.WebNextNewWaveTabFeatCover = 'WebNextNewWaveTabFeatCover'),
                    (e.WebNextAIContentReductionSetting = 'WebNextAIContentReductionSetting'),
                    (e.WebNextQueryToVibeInputAnimation = 'WebNextQueryToVibeInputAnimation'),
                    e
                );
            })({});
        },
        88964: (e, t, a) => {
            'use strict';
            a.d(t, { j: () => r });
            var n = a(70204),
                o = a(34186);
            function r() {
                return (0, o.N)().get(n.y$);
            }
        },
        89337: (e) => {
            e.exports = {
                root: 'ReleaseNotesModal_root__RSw1p',
                modalOverlay: 'ReleaseNotesModal_modalOverlay__GYUgU',
                modalHeader: 'ReleaseNotesModal_modalHeader__gp9SA',
                modalContent: 'ReleaseNotesModal_modalContent__g8OTu',
                scrollableContent: 'ReleaseNotesModal_scrollableContent__zGdbH',
                important: 'ReleaseNotesModal_important__u8yP4',
                notes: 'ReleaseNotesModal_notes__bVAoa',
                date: 'ReleaseNotesModal_date__s3_ux',
                description: 'ReleaseNotesModal_description__B_yLI',
                paragraph: 'ReleaseNotesModal_paragraph___laDJ',
                note: 'ReleaseNotesModal_note__S9E6z',
                version: 'ReleaseNotesModal_version__4Mcd5',
                item: 'ReleaseNotesModal_item___CYml',
                code: 'ReleaseNotesModal_code__Yv3QD',
            };
        },
        92495: (e, t, a) => {
            'use strict';
            a.d(t, { W: () => n });
            let n = { Playing: 'playing', Interrupted: 'interrupted' };
        },
        96096: (e, t, a) => {
            'use strict';
            a.d(t, { ThemeProvider: () => x });
            var n = a(32290),
                o = a(55178),
                r = a(91027),
                s = a(70204),
                i = a(34186),
                l = a(43352),
                c = a(34291),
                b = a(42040),
                d = a(72733),
                N = a(50),
                u = a(9634);
            let x = (e) => {
                let { children: t, predefinedTheme: a } = e,
                    x = (0, i.N)().get(s.oo),
                    { getThemeFromStorage: W, setThemeToStorage: p } = (0, d.Q)(x),
                    [m, v] = (0, o.useState)(() => (null != a ? a : W())),
                    h = (0, r.c)((e) => {
                        W() || a || (p(c.W), v(e));
                    });
                ((0, o.useLayoutEffect)(() => {
                    a || (0, l.Z)(m);
                }, [m, a]),
                    ((e) => {
                        let { onSystemThemeChange: t } = e,
                            a = (0, r.c)(() => {
                                t((0, b.V)());
                            });
                        (0, o.useLayoutEffect)(() => {
                            let e = (0, b.Q)();
                            return (
                                null == e || e.addEventListener('change', a),
                                () => {
                                    null == e || e.removeEventListener('change', a);
                                }
                            );
                        }, [a]);
                    })({ onSystemThemeChange: h }),
                    (0, o.useLayoutEffect)(() => {
                        h((0, b.V)());
                    }, [h]));
                let f = (0, o.useMemo)(() => ({ theme: m, setTheme: v }), [m]);
                return (0, n.jsx)(N.D.Provider, { value: f, children: (0, n.jsx)(o.Suspense, { fallback: (0, n.jsx)(u.MainSuspenseLoader, {}), children: t }) });
            };
        },
        97201: (e, t, a) => {
            'use strict';
            a.d(t, { K: () => n });
            var n = (function (e) {
                return (
                    (e.TAB = 'tab'),
                    (e.ACTIVE_TAB = 'activeTab'),
                    (e.BLOCK = 'block'),
                    (e.IDS = 'ids'),
                    (e.ACTIVE_INDEX = 'activeIndex'),
                    (e.SORT = 'sort'),
                    (e.OPEN_TRAILER = 'openTrailer'),
                    (e.DEEPLINK = 'deeplink'),
                    (e.SEEDS = 'seeds'),
                    (e.STATION_ID = 'stationId'),
                    (e.OPEN_PLAYER = 'openPlayer'),
                    (e.SCREEN = 'screen'),
                    (e.CLID = 'clid'),
                    (e.UTM_SOURCE = 'utm_source'),
                    (e.YCLID = 'yclid'),
                    (e.UTM_CAMPAIGN = 'utm_campaign'),
                    (e.UTM_MEDIUM = 'utm_medium'),
                    (e.REF_ID = 'ref_id'),
                    (e.LUMEN_AWAKE_PARAM = 'shouldAwakeLumen'),
                    (e.BEST_PLAY = 'bestPlay'),
                    (e.TEXT = 'text'),
                    e
                );
            })({});
        },
        97323: (e, t, a) => {
            'use strict';
            a.d(t, { s: () => n });
            var n = (function (e) {
                return ((e.DIVERSITY = 'diversity'), (e.MOOD_ENERGY = 'moodEnergy'), (e.LANGUAGE = 'language'), e);
            })({});
        },
    },
    (e) => {
        (e.O(
            0,
            [
                1010, 8310, 8153, 7182, 2497, 1256, 6706, 1311, 1588, 5472, 8378, 900, 2536, 2146, 3353, 8035, 1410, 229, 4250, 1570, 4793, 7641, 8506, 6050, 5806, 6241,
                6874, 861, 4638, 1647, 2126, 5283, 9712, 4220, 9562, 7358,
            ],
            () => e((e.s = 41433)),
        ),
            (_N_E = e.O()));
    },
]);
