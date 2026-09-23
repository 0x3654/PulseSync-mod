(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [3496],
    {
        2352: (e) => {
            e.exports = { root: 'TextShimmer_root__qqWug', text: 'TextShimmer_text__z8oN9' };
        },
        2411: (e) => {
            e.exports = {
                meta: 'PageHeaderNonMusic_meta__9DQPy',
                infoNote: 'PageHeaderNonMusic_infoNote__7xbV5',
                infoNoteIcon: 'PageHeaderNonMusic_infoNoteIcon__VDK7_',
                infoNoteText: 'PageHeaderNonMusic_infoNoteText__DCQq8',
                plusPaywallButton: 'PageHeaderNonMusic_plusPaywallButton__O7Tx_',
                booksLogo: 'PageHeaderNonMusic_booksLogo__4_TgU',
                controlsBlock: 'PageHeaderNonMusic_controlsBlock__jta99',
            };
        },
        2413: (e, t, a) => {
            'use strict';
            a.d(t, { F: () => v });
            var i = a(32290),
                l = a(96103),
                s = a(55178),
                n = a(21732),
                o = a(90169),
                r = a(57594),
                c = a(8677),
                d = a(68912),
                u = a(83521),
                m = a(92102),
                b = a(8200),
                p = a.n(b);
            let v = (0, l.PA)((e) => {
                let { track: t, albumArtists: a, position: l, playContextParams: b, withLightning: v } = e,
                    h = (0, o.D)({ playContextParams: b, entityId: t.entityId }),
                    {
                        settings: { isMobile: x },
                    } = (0, r.g)(),
                    _ = (0, s.useCallback)((e) => (0, i.jsx)(u.G, { track: t, position: l, className: p().playButtonCell, ...e }), [t, l]);
                return (0, i.jsx)(m.C, {
                    track: t,
                    withLightning: v,
                    meta: (0, i.jsx)(d.j, { withArtistLink: !x, albumArtists: a, track: t, withSavingQueryParams: !0 }),
                    playButtonCellRender: _,
                    controls: (0, i.jsx)(c.Q, { withLightning: v, track: t, className: p().controlsBarCell, utmLink: b.contextData.utmLink }),
                    ...h,
                    'data-test-id': n.Kq.track.TRACK_ALBUM,
                });
            });
        },
        3785: (e, t, a) => {
            'use strict';
            var i;
            (a.d(t, { M: () => i }),
                (function (e) {
                    ((e.MODAL = 'modal'),
                        (e.FOREIGN_AGENT = 'foreignAgent'),
                        (e.INFORMATIONAL = 'informational'),
                        (e.AGE_18 = 'age18'),
                        (e.EXPLICIT = 'explicit'),
                        (e.DESCRIPTION_TEXT = 'descriptionText'),
                        (e.AGE_18_ICON = 'age18Icon'),
                        (e.EXPLICIT_ICON = 'explicitIcon'),
                        (e.EXCLAMATION_ICON = 'exclamationIcon'));
                })(i || (i = {})));
        },
        4332: (e) => {
            e.exports = { root: 'RelatedContent_root__Dl1Nr', carousel: 'RelatedContent_carousel__pmv5c', header: 'RelatedContent_header__527S3' };
        },
        5749: (e, t, a) => {
            'use strict';
            a.d(t, { c: () => m });
            var i = a(17811),
                l = a(92146),
                s = a(74416),
                n = a(91027),
                o = a(79374),
                r = a(84782),
                c = a(2792),
                d = a(37240),
                u = a(62376);
            let m = () => {
                let { hash: e } = (0, s.gf)(),
                    t = (0, u.U)(),
                    a = (0, s.st)(),
                    { pageId: m } = (0, d.$)(),
                    { blockId: b, blockType: p, blockPosX: v, blockPosY: h } = (0, r.N)(),
                    { objectType: x, objectId: _, objectPosX: j, objectPosY: g, objectsCount: A, mainObjectId: y, mainObjectType: f } = (0, c.J)();
                return (0, n.c)((s, n) => {
                    if (!a || !m) return;
                    let r = o.W[m];
                    if (!r) return;
                    let c = {
                        to: s,
                        objectType: x,
                        objectId: _,
                        objectPosX: j,
                        objectPosY: g,
                        hash: e,
                        pageId: r,
                        mainObjectType: f,
                        mainObjectId: y,
                        entityType: p,
                        entityId: b,
                        entityPosX: v,
                        entityPosY: h,
                        objectsCount: A,
                        from: r,
                    };
                    n && (c.deepLink = n);
                    let d = (0, i.F)({ params: c, logger: t, context: 'useSendEventOnDonationNavigated' });
                    d && (0, l.QS)(a.evgenInstance, d);
                });
            };
        },
        6135: (e) => {
            e.exports = {
                root: 'CommonAlbumPage_root__E8c_3',
                content: 'CommonAlbumPage_content__vRSnu',
                scrollContent: 'CommonAlbumPage_scrollContent__0XS83',
                header: 'CommonAlbumPage_header__jS_be',
                text: 'CommonAlbumPage_text__kqBSb',
                footerContainer: 'CommonAlbumPage_footerContainer__JvjKN',
                footer: 'CommonAlbumPage_footer__dBXP4',
                averageColorBackground: 'CommonAlbumPage_averageColorBackground__hs1_3',
                virtualScroll: 'CommonAlbumPage_virtualScroll__Sc_gs',
                virtualItem: 'CommonAlbumPage_virtualItem__yhvPB',
                label: 'CommonAlbumPage_label__TErtx',
                labelLinkContainer: 'CommonAlbumPage_labelLinkContainer__fk6OB',
                labelLink: 'CommonAlbumPage_labelLink__v4EnM',
                important: 'CommonAlbumPage_important__GXaZH',
            };
        },
        8200: (e) => {
            e.exports = { playButtonCell: 'TrackAlbum_playButtonCell__pLJte', controlsBarCell: 'TrackAlbum_controlsBarCell__XUUCc' };
        },
        8576: (e, t, a) => {
            'use strict';
            a.d(t, { I: () => m });
            var i = a(32290),
                l = a(63618),
                s = a(21732),
                n = a(63423),
                o = a(82586),
                r = a(86269),
                c = a(11323),
                d = a(78166),
                u = a.n(d);
            let m = (e) => {
                let { coverVariant: t, coverUri: a, isAvailable: d, className: m, withPlusBadge: b, onClick: p, 'aria-label': v, customCover: h, buttonClassName: x } = e;
                return (0, i.jsxs)(r.t, {
                    radius: 'round' === t ? 'round' : 'm',
                    className: (0, l.$)(u().root, m, { [u().root_hoverable]: !!p }),
                    children: [
                        (0, i.jsx)(n.$, {
                            className: (0, l.$)(u().coverButton, x),
                            onClick: p,
                            'aria-label': v,
                            tabIndex: p ? 0 : -1,
                            disabled: !p,
                            'data-test-id': s.S7.ENTITY_COVER_BUTTON,
                            children: h || (0, i.jsx)(c.B, { fit: 'cover', src: a, size: 300, className: u().coverImage, withAvatarReplace: !0, isAvailable: d }),
                        }),
                        b && (0, i.jsx)(o.I, { variant: 'plusBadge', className: u().plusBadge }),
                    ],
                });
            };
        },
        8868: (e, t, a) => {
            'use strict';
            a.d(t, { A: () => m });
            var i = a(55178),
                l = a(17811),
                s = a(99923),
                n = a(90153),
                o = a(74416),
                r = a(91027),
                c = a(62376),
                d = a(79374),
                u = a(37240);
            let m = function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    { autoSend: t = !0 } = e,
                    a = (0, o.st)(),
                    m = (0, c.U)(),
                    { hash: b } = (0, o.gf)(),
                    { pageId: p } = (0, u.$)(),
                    v = (0, r.c)(function () {
                        let { deepLink: e } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                        if (
                            !a ||
                            !p ||
                            !b ||
                            !(() => {
                                for (let [e, t] of new URLSearchParams(window.location.search))
                                    if ((e.startsWith('utm_') || 'ref_id' === e) && '' !== t.trim()) return !0;
                                return !1;
                            })()
                        )
                            return;
                        let t = d.W[p];
                        if (!t) return;
                        let i = {
                                hash: b,
                                pageId: s.AppScreen.Link,
                                entityType: s.EntityTypes.Deeplink,
                                entityId: s.EntityTypes.Deeplink,
                                from: s.AppScreen.Link,
                                to: t,
                                deepLink: null != e ? e : window.location.href,
                            },
                            o = (0, l.F)({ params: i, logger: m, context: 'useSendDeeplinkNavigationEvent' });
                        o && (0, n.ID)(a.evgenInstance, o);
                    });
                return (
                    (0, i.useEffect)(() => {
                        t && v();
                    }, [t, v]),
                    (0, r.c)(function () {
                        let { deepLink: e } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                        t || v({ deepLink: e });
                    })
                );
            };
        },
        10733: (e, t, a) => {
            'use strict';
            a.d(t, { G: () => s });
            var i = a(91945),
                l = a(50891);
            class s extends l.m {
                constructor(e, t) {
                    (super(e, { code: 'E_HTTP_CLIENT_NON_2XX_3XX_RESPONSE', cause: t.cause }),
                        (0, i._)(this, 'name', 'HttpErrorException'),
                        (0, i._)(this, 'statusCode', void 0),
                        (this.statusCode = t.statusCode),
                        Object.setPrototypeOf(this, s.prototype));
                }
            }
        },
        15774: (e, t, a) => {
            'use strict';
            a.d(t, { r: () => i });
            var i = (function (e) {
                return ((e.TRACK = 'track'), (e.TEXT = 'text'), e);
            })({});
        },
        17024: (e, t, a) => {
            'use strict';
            a.d(t, { L: () => l });
            let i = /^(0|[1-9]\d*)$/;
            function l(e) {
                return void 0 !== e && !(e.length > 40) && i.test(e);
            }
        },
        17490: (e) => {
            e.exports = {
                root: 'Offline_root__IxjsY',
                container: 'Offline_container__2V5Vo',
                icon: 'Offline_icon__jDmpJ',
                title: 'Offline_title__Y2CtW',
                text: 'Offline_text__Nhult',
                buttons: 'Offline_buttons__ZOFI7',
                button: 'Offline_button__QSA_j',
            };
        },
        20163: (e) => {
            e.exports = { root: 'TextVolume_root__wxSaK' };
        },
        20698: (e, t, a) => {
            'use strict';
            function i(e) {
                return e.map((e) => e.name).join(', ');
            }
            a.d(t, { j: () => i });
        },
        28724: (e, t, a) => {
            'use strict';
            a.d(t, { M: () => f });
            var i = a(32290),
                l = a(63618),
                s = a(96103),
                n = a(55178),
                o = a(39407),
                r = a(21732),
                c = a(91027),
                d = a(63423),
                u = a(71926),
                m = a(70204),
                b = a(34186),
                p = a(83808),
                v = a(20472),
                h = a(32641),
                x = a(85017),
                _ = a(19379),
                j = a(61258),
                g = a(76768),
                A = a.n(g);
            let y = {
                    [x.n.ALBUM]: (0, i.jsx)(o.A, { id: 'extra-explicit.confirm-unsafe-album' }),
                    [x.n.PODCAST]: (0, i.jsx)(o.A, { id: 'extra-explicit.confirm-unsafe-podcast' }),
                    [x.n.ARTIST]: (0, i.jsx)(o.A, { id: 'extra-explicit.confirm-unsafe-artist' }),
                    [x.n.TRACK]: (0, i.jsx)(o.A, { id: 'extra-explicit.confirm-unsafe-track' }),
                    [x.n.AUDIOBOOK]: (0, i.jsx)(o.A, { id: 'extra-explicit.confirm-unsafe-audiobook' }),
                    [x.n.CLIP]: (0, i.jsx)(o.A, { id: 'extra-explicit.confirm-unsafe-clip' }),
                },
                f = (0, s.PA)((e) => {
                    var t;
                    let { modalState: a, data: s, onClose: g, className: f } = e,
                        C = null != s ? s : null == a ? void 0 : a.modalData,
                        T = (0, p.W)(),
                        k = (0, h.Z)(v.Z.main.href),
                        N = (0, b.N)().get(m.U2),
                        O = (0, c.c)(() => {
                            if (g) return g();
                            (T.canBack && T.back(), k());
                        }),
                        I = (null == C || null == (t = C.details) ? void 0 : t.url) && C.details.text,
                        P = (0, c.c)(() => {
                            var e;
                            null == a || a.setConfirmUnsafeDisclaimer(!0);
                            let t = N.get(_.c.ExEx),
                                i = new Date(),
                                l = i.setMinutes(i.getMinutes() + 15),
                                s =
                                    null != (e = null == a ? void 0 : a.entityKey)
                                        ? e
                                        : ''.concat(null == a ? void 0 : a.entityType, '_').concat(null == a ? void 0 : a.entityId);
                            (t ? N.set(_.c.ExEx, [...t, s], { expires: new Date(l) }) : N.set(_.c.ExEx, [s], { expires: new Date(l) }),
                                null == g || g(),
                                (null == a ? void 0 : a.onDisclaimerConfirmHandler) && a.onDisclaimerConfirmHandler());
                        }),
                        E = (0, c.c)(() => {
                            ((null == a ? void 0 : a.shouldHistoryBack) ? (null == g || g(), T.canBack && T.back(), k()) : null == g || g(),
                                (null == a ? void 0 : a.onDisclaimerRejectHandler) && a.onDisclaimerRejectHandler());
                        });
                    (0, n.useEffect)(
                        () => () => {
                            null == a || a.reset();
                        },
                        [a],
                    );
                    let S = (0, n.useMemo)(() => {
                            if (C) {
                                var e, t;
                                return (0, i.jsxs)(i.Fragment, {
                                    children: [
                                        (0, i.jsx)(u.DZ, {
                                            variant: 'h4',
                                            size: 'l',
                                            className: (0, l.$)(A().title, A().text),
                                            'data-test-id': r.OA.disclaimer.DISCLAIMER_TITLE,
                                            children: C.title,
                                        }),
                                        (0, i.jsx)(u.HL, {
                                            variant: 'div',
                                            size: 'l',
                                            weight: 'normal',
                                            className: A().text,
                                            'data-test-id': r.OA.disclaimer.DISCLAIMER_DESCRIPTION,
                                            children: C.description,
                                        }),
                                        I &&
                                            (0, i.jsx)(j.N, {
                                                href: null == (e = C.details) ? void 0 : e.url,
                                                className: A().link,
                                                children: (0, i.jsx)(u.HL, {
                                                    variant: 'span',
                                                    size: 'l',
                                                    weight: 'normal',
                                                    children: null == (t = C.details) ? void 0 : t.text,
                                                }),
                                            }),
                                    ],
                                });
                            }
                            return null;
                        }, [C, I]),
                        L = (0, n.useMemo)(
                            () =>
                                (null == a ? void 0 : a.type) === x.Z.UNSAFE
                                    ? (0, i.jsxs)('div', {
                                          className: A().buttons,
                                          children: [
                                              (0, i.jsx)(d.$, {
                                                  color: 'primary',
                                                  onClick: E,
                                                  size: 'l',
                                                  radius: 'xxxl',
                                                  className: A().button,
                                                  'data-test-id': r.OA.disclaimer.DISCLAIMER_REJECT_BUTTON,
                                                  children: (0, i.jsx)(o.A, { id: 'extra-explicit.reject-unsafe-entity' }),
                                              }),
                                              (0, i.jsx)(d.$, {
                                                  color: 'secondary',
                                                  onClick: P,
                                                  size: 'l',
                                                  radius: 'xxxl',
                                                  className: A().button,
                                                  'data-test-id': r.OA.disclaimer.DISCLAIMER_CONFIRM_BUTTON,
                                                  children: a.entityType && y[a.entityType],
                                              }),
                                          ],
                                      })
                                    : (0, i.jsx)('div', {
                                          className: A().buttons,
                                          children: (0, i.jsx)(d.$, {
                                              color: 'primary',
                                              onClick: O,
                                              size: 'l',
                                              radius: 'xxxl',
                                              className: A().button,
                                              'data-test-id': r.OA.disclaimer.DISCLAIMER_REJECT_BUTTON,
                                              children: (0, i.jsx)(o.A, { id: 'interface-actions.confirm' }),
                                          }),
                                      }),
                            [P, null == a ? void 0 : a.entityType, null == a ? void 0 : a.type, O, E],
                        );
                    return (0, i.jsx)('div', {
                        className: (0, l.$)(A().root, f),
                        'data-test-id': r.OA.disclaimer.DISCLAIMER_CONTENT,
                        children: (0, i.jsxs)('div', { className: A().container, children: [S, L] }),
                    });
                });
        },
        31035: (e) => {
            e.exports = {
                controlsContainer: 'CommonPageHeader_controlsContainer__4_h22',
                controls: 'CommonPageHeader_controls__c27E_',
                playControl: 'CommonPageHeader_playControl__gYOuR',
                playControl_withLogin: 'CommonPageHeader_playControl_withLogin__FL_L6',
            };
        },
        31266: (e, t, a) => {
            'use strict';
            a.d(t, { b: () => i });
            let i = (e, t) => {
                let a = new URL(window.location.href),
                    i = a.searchParams;
                return (i.set(e, t), (a.search = i.toString()), a.toString());
            };
        },
        31286: (e, t, a) => {
            'use strict';
            a.d(t, { w: () => s });
            var i = a(55178),
                l = a(91027);
            let s = () => {
                let e = (0, i.useRef)(new Map());
                return (
                    (0, i.useLayoutEffect)(
                        () => (
                            e.current.size > 0 && e.current.clear(),
                            () => {
                                e.current.clear();
                            }
                        ),
                        [],
                    ),
                    (0, l.c)((t, a) => (e.current.has(t) ? e.current.get(t) : (e.current.set(t, a), a)))
                );
            };
        },
        32496: (e, t, a) => {
            'use strict';
            a.d(t, { n: () => r });
            var i = a(32290),
                l = a(63618),
                s = a(79856),
                n = a(2352),
                o = a.n(n);
            let r = (e) => {
                let { className: t, textClassName: a, isActive: n } = e;
                return (0, i.jsx)('div', { className: (0, l.$)(o().root, t), children: (0, i.jsx)(s.W, { className: (0, l.$)(o().text, a), isActive: n, radius: 's' }) });
            };
        },
        32804: (e, t, a) => {
            'use strict';
            a.d(t, { m: () => b });
            var i = a(32290),
                l = a(91027),
                s = a(72676),
                n = a(9480),
                o = a(60214),
                r = a(45477),
                c = a(75582),
                d = a(44128),
                u = a(57594);
            let m = (e) => {
                var t;
                return null == (t = e.data) ? void 0 : t.entityId;
            };
            function b(e, t, a, b) {
                let p = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : m,
                    { notify: v } = (0, c.l)(),
                    { fullscreenPlayer: h } = (0, u.g)(),
                    x = (0, d.e)();
                return (0, l.c)(() => {
                    let l = e.reduce((e, t) => {
                        let a = p(t);
                        return (a && e.push({ type: s.z4.Unloaded, meta: { id: a } }), e);
                    }, []);
                    if (!l.length) return;
                    switch (t) {
                        case n.N.LAST:
                            null == x || x.injectLast({ entitiesData: l, sourceContextData: null != a ? a : void 0 });
                            break;
                        case n.N.NEXT:
                            null == x || x.injectNext({ entitiesData: l, sourceContextData: null != a ? a : void 0 });
                    }
                    let c = h.modal.isOpened ? r.u.FULLSCREEN_INFO : r.u.INFO;
                    v((0, i.jsx)(o.l, { entityVariant: b.entityVariant, variant: t, entityTitle: b.entityTitle, coverUri: b.coverUri }), { containerId: c });
                });
            }
        },
        33898: (e, t, a) => {
            'use strict';
            var i;
            (a.d(t, { Z: () => i }),
                (function (e) {
                    ((e.METHOD_NOT_SUPPORTED = 'E_BEACON_METHOD_NOT_SUPPORTED'),
                        (e.NOT_AVAILABLE = 'E_BEACON_NOT_AVAILABLE'),
                        (e.QUEUE_FAILED = 'E_BEACON_QUEUE_FAILED'),
                        (e.NO_RESPONSE_DATA = 'E_BEACON_NO_RESPONSE_DATA'),
                        (e.RETRY_EXHAUSTED = 'E_BEACON_RETRY_EXHAUSTED'));
                })(i || (i = {})));
        },
        36504: (e, t, a) => {
            'use strict';
            a.d(t, { N: () => s });
            var i = a(96151),
                l = a(87151);
            let s = (e) => {
                var t, a, s, n, o;
                return e
                    ? {
                          id: e.id,
                          decomposed:
                              (null == (t = e.decomposed)
                                  ? void 0
                                  : t.map((e) => {
                                        var t;
                                        return {
                                            id: e.id,
                                            name: e.name,
                                            various: e.various || !1,
                                            composer: e.isComposer || !1,
                                            item: e.separator,
                                            available: null == (t = e.isAvailable) || t,
                                            disclaimers: (0, l.H)(e.disclaimers),
                                        };
                                    })) || [],
                          name: e.name,
                          cover: { uri: e.coverUri || '', type: i.Q.PIC, prefix: '', custom: !1 },
                          ogImage: '',
                          derivedColors: { accent: '', average: e.averageColor || '', miniPlayer: '', waveText: '' },
                          available: e.isAvailable,
                          disclaimers: (0, l.H)(e.disclaimers),
                          counts: {
                              directAlbums: (null == (a = e.counts) ? void 0 : a.albums) || 0,
                              alsoAlbums: (null == (s = e.counts) ? void 0 : s.compilations) || 0,
                              tracks: (null == (n = e.counts) ? void 0 : n.tracks) || 0,
                              alsoTracks: 0,
                          },
                          trailer: { available: !!(null == (o = e.trailer) ? void 0 : o.isAvailable) },
                          hasPromotions: !1,
                          genres: [],
                          links: [],
                          ticketsAvailable: !1,
                          ratings: { week: 0, month: 0, day: 0 },
                          composer: e.isComposer || !1,
                          various: e.various || !1,
                      }
                    : {
                          id: '',
                          name: '',
                          various: !1,
                          composer: !1,
                          decomposed: [],
                          ogImage: '',
                          hasPromotions: !1,
                          genres: [],
                          ticketsAvailable: !1,
                          links: [],
                          ratings: { week: 0, month: 0, day: 0 },
                          counts: { directAlbums: 0, alsoAlbums: 0, tracks: 0, alsoTracks: 0 },
                          available: !1,
                          disclaimers: [],
                      };
            };
        },
        37318: (e) => {
            e.exports = {
                root: 'PageHeaderShimmer_root__kqSwa',
                cover: 'PageHeaderShimmer_cover__ay2cr',
                content: 'PageHeaderShimmer_content__SdBKK',
                info: 'PageHeaderShimmer_info__cZkS2',
                entityName: 'PageHeaderShimmer_entityName__tlWnA',
                title: 'PageHeaderShimmer_title__xKG4e',
                meta: 'PageHeaderShimmer_meta__YWx0m',
                controls: 'PageHeaderShimmer_controls__gPErM',
                desktopPlayButton: 'PageHeaderShimmer_desktopPlayButton__R7EmH',
                button: 'PageHeaderShimmer_button__13qrG',
            };
        },
        37495: (e, t, a) => {
            'use strict';
            a.d(t, { F: () => i });
            let i = (e) => {
                let t = Math.floor(e / 1e3),
                    a = Math.floor(t / 3600),
                    i = Math.floor((t % 3600) / 60),
                    l = t % 60,
                    s = 'PT';
                return (a > 0 && (s += ''.concat(a, 'H')), i > 0 && (s += ''.concat(i, 'M')), (l > 0 || 'PT' === s) && (s += ''.concat(l, 'S')), s);
            };
        },
        39231: (e, t, a) => {
            'use strict';
            a.d(t, { q: () => l });
            var i = a(80408);
            let l = (e) => {
                var t, a;
                return null != (a = null == (t = (0, i.j)()) ? void 0 : t.get(e)) ? a : null;
            };
        },
        39534: (e) => {
            e.exports = { plusPaywallButton: 'PageHeaderAlbum_plusPaywallButton__yJWCh', booksLogo: 'PageHeaderAlbum_booksLogo__f4gjV' };
        },
        40783: (e, t, a) => {
            'use strict';
            a.d(t, { Q: () => l });
            var i = a(55178);
            let l = (e, t) => ({
                topColorStyle: (0, i.useMemo)(() => {
                    if (void 0 === t) return;
                    let a = t - 17;
                    return { '--average-color-background': e, transform: 'translateY('.concat(t >= 17 ? 0 : a, 'px)'), opacity: 1 };
                }, [t, e]),
                headerStyle: (0, i.useMemo)(() => ({ '--average-color-background': e }), [e]),
            });
        },
        42464: (e, t, a) => {
            'use strict';
            a.d(t, { N: () => i });
            let i = (e) => 'object' == typeof e && null !== e && 'request' in e && null !== e.request;
        },
        43592: (e, t, a) => {
            'use strict';
            function i(e, t) {
                return e.map((e) => 'https://'.concat(t, '/artist/').concat(e.id));
            }
            a.d(t, { x: () => i });
        },
        44338: (e, t, a) => {
            'use strict';
            a.d(t, { N: () => l });
            var i = a(31995);
            function l(e, t) {
                var a;
                return (0, i.Y)(e, null != (a = null == t ? void 0 : t.maxLength) ? a : 48, !!(null == t ? void 0 : t.truncateByLastSpace));
            }
        },
        44936: (e, t, a) => {
            'use strict';
            a.d(t, { f: () => l });
            var i = a(36504);
            let l = (e) => {
                var t;
                if (!e)
                    return {
                        id: 0,
                        title: '',
                        availableForOptions: [],
                        availableForPremiumUsers: !0,
                        artists: [],
                        volumes: [],
                        ogImage: '',
                        availablePartially: !1,
                        trackCount: 0,
                        recent: !1,
                        veryImportant: !1,
                        labels: [],
                        metaType: '',
                        availableForMobile: !0,
                    };
                let a = (null == (t = e.artists) ? void 0 : t.map((e) => (0, i.N)(e))) || [];
                return {
                    id: e.id,
                    title: e.title,
                    type: e.type,
                    coverUri: e.coverUri,
                    year: e.year,
                    version: e.version,
                    availableForOptions: e.availableForOptions || [],
                    availableForPremiumUsers: e.availableForPremiumUsers || !0,
                    artists: a,
                    volumes: [],
                    ogImage: e.coverUri || '',
                    availablePartially: !1,
                    trackCount: e.trackCount || 0,
                    recent: !1,
                    veryImportant: !1,
                    labels: [],
                    metaType: '',
                    availableForMobile: !0,
                };
            };
        },
        48977: (e, t, a) => {
            'use strict';
            a.d(t, { C: () => m });
            var i = a(17811),
                l = a(92146),
                s = a(74416),
                n = a(91027),
                o = a(79374),
                r = a(84782),
                c = a(2792),
                d = a(37240),
                u = a(62376);
            let m = () => {
                let { hash: e } = (0, s.gf)(),
                    t = (0, u.U)(),
                    a = (0, s.st)(),
                    { pageId: m } = (0, d.$)(),
                    { blockId: b, blockType: p, blockPosX: v, blockPosY: h } = (0, r.N)(),
                    { objectType: x, objectId: _, objectPosX: j, objectPosY: g, objectsCount: A, mainObjectId: y, mainObjectType: f } = (0, c.J)();
                return (0, n.c)((s, n) => {
                    if (!a || !m) return;
                    let r = o.W[m];
                    if (!r) return;
                    let c = (0, i.F)({
                        params: {
                            objectType: x,
                            objectId: _,
                            objectPosX: j,
                            objectPosY: g,
                            hash: e,
                            pageId: r,
                            mainObjectType: f,
                            mainObjectId: y,
                            entityType: p,
                            entityId: b,
                            entityPosX: v,
                            entityPosY: h,
                            objectsCount: A,
                            viewUuid: n,
                        },
                        logger: t,
                        context: 'useSendEventOnDonationShowedOrHidden',
                    });
                    c && (s ? (0, l.Pf)(a.evgenInstance, c) : (0, l.nv)(a.evgenInstance, c));
                });
            };
        },
        50168: (e, t, a) => {
            'use strict';
            a.d(t, { c: () => u });
            var i = a(32290),
                l = a(63618),
                s = a(96103),
                n = a(55178),
                o = a(79856),
                r = a(57594),
                c = a(37318),
                d = a.n(c);
            let u = (0, s.PA)((e) => {
                let { className: t, coverRadius: a = 'm', isActive: s } = e,
                    {
                        settings: { isMobile: c },
                    } = (0, r.g)(),
                    u = (0, n.useMemo)(
                        () =>
                            c
                                ? (0, i.jsxs)('div', {
                                      className: d().controls,
                                      children: [
                                          (0, i.jsx)(o.W, { className: d().button, radius: 'round', isActive: s }),
                                          (0, i.jsx)(o.W, { className: d().button, radius: 'round', isActive: s }),
                                          (0, i.jsx)(o.W, { className: d().button, radius: 'round', isActive: s }),
                                      ],
                                  })
                                : (0, i.jsxs)('div', {
                                      className: d().controls,
                                      children: [
                                          (0, i.jsx)(o.W, { className: d().desktopPlayButton, isActive: s }),
                                          (0, i.jsx)(o.W, { className: d().button, radius: 'round', isActive: s }),
                                          (0, i.jsx)(o.W, { className: d().button, radius: 'round', isActive: s }),
                                          (0, i.jsx)(o.W, { className: d().button, radius: 'round', isActive: s }),
                                      ],
                                  }),
                        [s, c],
                    );
                return (0, i.jsxs)('div', {
                    className: (0, l.$)(d().root, t),
                    children: [
                        (0, i.jsx)(o.W, { className: d().cover, radius: a, isActive: s }),
                        (0, i.jsxs)('div', {
                            className: d().content,
                            children: [
                                (0, i.jsxs)('div', {
                                    className: d().info,
                                    children: [
                                        (0, i.jsx)(o.W, { className: d().entityName, radius: 's', isActive: s }),
                                        (0, i.jsx)(o.W, { className: d().title, radius: 'xl', isActive: s }),
                                        (0, i.jsx)(o.W, { className: d().meta, radius: 's', isActive: s }),
                                    ],
                                }),
                                u,
                            ],
                        }),
                    ],
                });
            });
        },
        50891: (e, t, a) => {
            'use strict';
            a.d(t, { m: () => s });
            var i = a(91945),
                l = a(25090);
            class s extends l.t {
                constructor(e = 'Http Client error', { code: t = 'E_HTTP_CLIENT', ...a } = {}) {
                    (super(e, { code: t, ...a }), (0, i._)(this, 'name', 'HttpException'), Object.setPrototypeOf(this, s.prototype));
                }
            }
        },
        50961: (e, t, a) => {
            'use strict';
            var i;
            (a.d(t, { X: () => i }),
                (function (e) {
                    ((e[(e.NOT_MODIFIED = 304)] = 'NOT_MODIFIED'),
                        (e[(e.NOT_FOUND = 404)] = 'NOT_FOUND'),
                        (e[(e.BAD_REQUEST = 400)] = 'BAD_REQUEST'),
                        (e[(e.REQUEST_TIMEOUT = 408)] = 'REQUEST_TIMEOUT'),
                        (e[(e.PRECONDITION_FAILED = 412)] = 'PRECONDITION_FAILED'),
                        (e[(e.TEAPOT = 418)] = 'TEAPOT'));
                })(i || (i = {})));
        },
        51257: (e, t, a) => {
            'use strict';
            a.d(t, { l: () => aw });
            var i = a(32290),
                l = a(96103),
                s = a(21916),
                n = a(55178),
                o = a(99923),
                r = a(21732),
                c = a(6752),
                d = a(84942),
                u = a(39407),
                m = a(91027),
                b = a(63423),
                p = a(82586),
                v = a(71926),
                h = a(20472),
                x = a(32641),
                _ = a(57594),
                j = a(17490),
                g = a.n(j);
            let A = (0, l.PA)(() => {
                let { slam: e } = (0, _.g)(),
                    t = (0, x.Z)(h.Z.mymusicDownloadsTracks.href),
                    a = (0, x.Z)(h.Z.settings.href),
                    l = (0, m.c)(() => {
                        window.location.href = h.Z.main.href;
                    }),
                    s = (0, n.useMemo)(
                        () =>
                            e.isOfflineModeEnabled ? (0, i.jsx)(u.A, { id: 'offline.offline-mode-enabled' }) : (0, i.jsx)(u.A, { id: 'offline.no-internet-connection' }),
                        [e.isOfflineModeEnabled],
                    ),
                    o = (0, n.useMemo)(
                        () =>
                            e.isOfflineModeEnabled
                                ? (0, i.jsx)(b.$, {
                                      onClick: a,
                                      className: g().button,
                                      color: 'secondary',
                                      size: 'l',
                                      radius: 'xxxl',
                                      children: (0, i.jsx)(v.HL, {
                                          type: 'controls',
                                          variant: 'span',
                                          size: 'm',
                                          children: (0, i.jsx)(u.A, { id: 'offline.disable-offline-mode' }),
                                      }),
                                  })
                                : (0, i.jsx)(b.$, {
                                      onClick: l,
                                      className: g().button,
                                      color: 'secondary',
                                      size: 'l',
                                      radius: 'xxxl',
                                      children: (0, i.jsx)(v.HL, {
                                          type: 'controls',
                                          variant: 'span',
                                          size: 'm',
                                          children: (0, i.jsx)(u.A, { id: 'page-error.restart-app-button' }),
                                      }),
                                  }),
                        [l, a, e.isOfflineModeEnabled],
                    );
                return (0, i.jsx)('div', {
                    className: g().root,
                    children: (0, i.jsxs)('div', {
                        className: g().container,
                        children: [
                            (0, i.jsx)(p.I, { className: g().icon, variant: 'offline', size: 'xxl' }),
                            (0, i.jsx)(v.DZ, { className: g().title, variant: 'div', size: 'xs', children: s }),
                            (0, i.jsx)(v.HL, {
                                className: g().text,
                                variant: 'span',
                                type: 'text',
                                size: 'l',
                                weight: 'normal',
                                children: (0, i.jsx)(u.A, { id: 'offline.listen-downloaded-content' }),
                            }),
                            (0, i.jsxs)('div', {
                                className: g().buttons,
                                children: [
                                    o,
                                    (0, i.jsx)(b.$, {
                                        color: 'primary',
                                        onClick: t,
                                        role: 'link',
                                        size: 'l',
                                        radius: 'xxxl',
                                        className: g().button,
                                        children: (0, i.jsx)(u.A, { id: 'interface-actions.go-to-collection' }),
                                    }),
                                ],
                            }),
                        ],
                    }),
                });
            });
            var y = a(97201),
                f = a(40783),
                C = a(7999),
                T = a(34883),
                k = a(48922),
                N = a(8868),
                O = a(84051),
                I = a(71610),
                P = a(22714),
                E = a(94805),
                S = a(56008);
            let L = (e) => {
                let { pageAlbumId: t, children: a } = e,
                    l = (0, n.useMemo)(() => ({ pageAlbumId: t }), [t]);
                return (0, i.jsx)(S.H.Provider, { value: l, children: a });
            };
            var D = a(65476),
                M = a(3785);
            let B = (e) => {
                var t;
                return (null == e ? void 0 : e.available) === !1 && !!(null == (t = e.disclaimers) ? void 0 : t.includes(M.M.MODAL));
            };
            var R = a(83920),
                w = a(3796),
                U = a(28724),
                H = a(74694),
                z = a(68243),
                F = a(44936),
                X = a(22556),
                V = a(44242),
                K = a(42125),
                Y = a(43592),
                W = a(44338),
                $ = a(24535),
                G = a(47216),
                q = a(94821),
                Q = a(26365),
                Z = a(64605),
                J = a(20698);
            function ee(e) {
                let { type: t, genre: a } = e;
                return [Z._.AUDIOBOOK, Z._.FAIRY_TALE].includes(null != t ? t : '') || ['audiobooksinenglish', 'fiction'].includes(null != a ? a : '');
            }
            function et(e) {
                return { minutes: Math.floor((e / 60) % 60), hours: Math.floor(e / 60 / 60) };
            }
            var ea = a(31995);
            function ei(e) {
                let { albumType: t, messageFormatter: a } = e;
                switch (t) {
                    case Z._.SINGLE:
                        return a({ id: 'metadata.single' });
                    case Z._.PODCAST:
                        return a({ id: 'metadata.podcast' });
                    case Z._.AUDIOBOOK:
                        return a({ id: 'metadata.audiobook' });
                    case Z._.FAIRY_TALE:
                        return a({ id: 'metadata.fairy-tale' });
                    default:
                        return a({ id: 'metadata.album' });
                }
            }
            async function el(e, t) {
                var a, i, l, s;
                if (!e) return { title: '', description: '', openGraph: {}, twitter: {}, appLinks: {}, other: {} };
                let n = await (0, K.W)(t.locale),
                    o = (0, W.N)(e.title);
                return {
                    title:
                        null != (a = t.disclaimerTitle)
                            ? a
                            : (function (e) {
                                  let { albumMeta: t, messageFormatter: a } = e,
                                      i = (0, J.j)(t.artists);
                                  return ee({ type: t.type, genre: t.genre })
                                      ? i
                                          ? a(
                                                { id: 'metadata.audiobook-title-with-artists' },
                                                { albumTitle: t.title, artistsNames: i, artistsNamesCount: t.artists.length },
                                            )
                                          : a({ id: 'metadata.audiobook-title-without-artists' }, { albumTitle: t.title })
                                      : t.type === Z._.PODCAST
                                        ? a({ id: 'metadata.podcast-title' }, { albumTitle: t.title })
                                        : i
                                          ? a({ id: 'metadata.album-title-with-artists' }, { albumTitle: t.title, artistsNames: i })
                                          : a({ id: 'metadata.album-title-without-artists' }, { albumTitle: t.title });
                              })({ albumMeta: e, messageFormatter: n }),
                    description: (function (e) {
                        let { albumMeta: t, messageFormatter: a } = e,
                            i = (0, J.j)(t.artists);
                        return ee({ type: t.type, genre: t.genre })
                            ? i
                                ? a({ id: 'metadata.audiobook-title-with-artists' }, { albumTitle: t.title, artistsNames: i, artistsNamesCount: t.artists.length })
                                : a({ id: 'metadata.audiobook-title-without-artists' }, { albumTitle: t.title })
                            : t.type === Z._.PODCAST
                              ? a({ id: 'metadata.podcast-title' }, { albumTitle: t.title })
                              : i
                                ? a({ id: 'metadata.album-title-with-artists' }, { albumTitle: t.title, artistsNames: i })
                                : a({ id: 'metadata.album-title-without-artists' }, { albumTitle: t.title });
                    })({ albumMeta: e, messageFormatter: n }),
                    openGraph: (0, $.i)({
                        ogTitle: o,
                        ogDescription: (function (e) {
                            var t, a, i;
                            let { albumMeta: l, messageFormatter: s } = e,
                                n = (0, ea.Y)((0, J.j)(l.artists), 96, !1);
                            if (ee({ type: l.type, genre: l.genre })) {
                                let { hours: e, minutes: a } = et(null != (t = l.durationSec) ? t : 0),
                                    i = s({ id: 'metadata.hours-and-minutes' }, { hours: e, minutes: a });
                                return [n, ei({ albumType: l.type, messageFormatter: s }), i].join(' • ');
                            }
                            return l.type === Z._.PODCAST
                                ? [
                                      (0, ea.Y)(null != (a = l.description) ? a : '', 96, !1),
                                      ei({ albumType: l.type, messageFormatter: s }),
                                      s({ id: 'metadata.subscribers' }, { subscribers: null != (i = l.likesCount) ? i : 0 }),
                                  ].join(' • ')
                                : [n, ei({ albumType: l.type, messageFormatter: s }), l.year].join(' • ');
                        })({ albumMeta: e, messageFormatter: n }),
                        fullUrl: null != (i = t.fullUrl) ? i : '',
                        locale: t.locale,
                        ogImage: e.ogImage,
                        siteName: n({ id: 'metadata.yandex-music' }),
                        ogType: 'music.album',
                    }),
                    twitter: (0, G.H)({ cardType: q.W.APP, title: o, url: t.url, appName: n({ id: 'metadata.yandex-music' }) }),
                    appLinks: (0, V.X)({
                        additional: { ...t, url: null != (l = t.url) ? l : '', fullUrl: null != (s = t.fullUrl) ? s : '', host: t.host },
                        appName: n({ id: 'metadata.yandex-music' }),
                    }),
                    other: { 'music:musician': (0, Y.x)(e.artists, t.host) },
                    alternates: (0, Q.S)('/album/:albumId', t.tld, { params: { albumId: e.id } }),
                };
            }
            var es = a(60900),
                en = a(45477),
                eo = a(75582),
                er = a(90357),
                ec = a(31010),
                ed = a(85472),
                eu = a(37495),
                em = a(90048);
            let eb = (0, l.PA)((e) => {
                var t, a, l, s, n, o, r, c, d, u, m, b, p, v;
                let { user: h, album: x } = e;
                return h.isAuthorized
                    ? null
                    : (0, i.jsx)(em.S, {
                          value: {
                              '@type': 'MusicAlbum',
                              name: null != (u = null == (t = x.meta) ? void 0 : t.title) ? u : void 0,
                              description: null != (m = x.description) ? m : void 0,
                              url: null != (b = null == (a = x.meta) ? void 0 : a.url) ? b : void 0,
                              image: (null == (l = x.meta) ? void 0 : l.coverUri) ? (0, ed.createAvatarUrl)(null == (s = x.meta) ? void 0 : s.coverUri, 'orig') : void 0,
                              genre: null != (p = null == (n = x.meta) ? void 0 : n.genre) ? p : void 0,
                              datePublished: null != (v = null == (r = x.meta) || null == (o = r.year) ? void 0 : o.toString()) ? v : void 0,
                              tracks:
                                  null == (c = x.tracks)
                                      ? void 0
                                      : c
                                            .map((e) => e.data)
                                            .filter((e) => !!(null == e ? void 0 : e.url))
                                            .map((e) => {
                                                var t;
                                                return { '@type': 'MusicRecording', name: e.title, duration: (0, eu.F)(null != (t = e.durationMs) ? t : 0), url: e.url };
                                            }),
                              potentialAction: {
                                  '@type': 'ListenAction',
                                  expectsAcceptanceOf: {
                                      '@type': 'Offer',
                                      category: 'free',
                                      target: { '@type': 'EntryPoint', actionPlatform: null == (d = x.meta) ? void 0 : d.url },
                                  },
                              },
                          },
                      });
            });
            var ep = a(6135),
                ev = a.n(ep),
                eh = a(63618),
                ex = a(71483),
                e_ = a(72676),
                ej = a(71079),
                eg = a(50168),
                eA = a(7462),
                ey = a(71735),
                ef = a(37862),
                eC = a(95481),
                eT = a(26042),
                ek = a(72396),
                eN = a(46200),
                eO = a(5537),
                eI = a(57197),
                eP = a(90169),
                eE = a(90326),
                eS = a(97404),
                eL = a.n(eS);
            let eD = (e) => {
                let { className: t, albumType: a } = e,
                    {
                        settings: { isMobile: l },
                        paywall: s,
                    } = (0, _.g)(),
                    { formatMessage: o } = (0, es.A)(),
                    c = (0, n.useCallback)(
                        (e) => {
                            (s.openModal(), e.stopPropagation());
                        },
                        [s],
                    ),
                    d = (0, n.useMemo)(() => {
                        switch (a) {
                            case Z._.SINGLE:
                                return o({ id: 'payment.single-offer-button-title' });
                            case Z._.PODCAST:
                                return o({ id: 'payment.podcast-offer-button-title' });
                            case Z._.AUDIOBOOK:
                                return o({ id: 'payment.books-offer-button-title' });
                            case Z._.FAIRY_TALE:
                                return o({ id: 'payment.fairy-tale-offer-button-title' });
                            default:
                                return o({ id: 'payment.album-offer-button-title' });
                        }
                    }, [a, o]);
                return l
                    ? (0, i.jsxs)(b.$, {
                          onClick: c,
                          className: (0, eh.$)(eL().root, t),
                          color: 'plus',
                          size: 'l',
                          radius: 'xxxl',
                          children: [
                              (0, i.jsx)(v.HL, { className: eL().title, weight: 'bold', variant: 'div', size: 'l', children: d }),
                              (0, i.jsx)(v.HL, {
                                  className: eL().subtitle,
                                  weight: 'normal',
                                  variant: 'div',
                                  size: 'xs',
                                  children: (0, i.jsx)(u.A, { id: 'payment.yandex-plus-offer-button' }),
                              }),
                          ],
                      })
                    : (0, i.jsxs)(b.$, {
                          onClick: c,
                          className: (0, eh.$)(eL().root, t),
                          color: 'plus',
                          size: 'l',
                          radius: 'xxxl',
                          'data-test-id': r.S7.PLUS_PAYWALL_BUTTON,
                          children: [
                              (0, i.jsx)(v.HL, { className: eL().title, weight: 'bold', variant: 'div', size: 'm', children: d }),
                              (0, i.jsx)(v.HL, {
                                  className: eL().subtitle,
                                  weight: 'normal',
                                  variant: 'div',
                                  size: 'xs',
                                  children: (0, i.jsx)(u.A, { id: 'payment.yandex-plus-offer-button' }),
                              }),
                          ],
                      });
            };
            var eM = a(87863),
                eB = a(77712),
                eR = a(21105),
                ew = a(63363),
                eU = a(91253),
                eH = a(54391),
                ez = a(67732),
                eF = a(92744),
                eX = a(10180),
                eV = a(29268),
                eK = a(11260),
                eY = a(91092),
                eW = a.n(eY);
            let e$ = (0, l.PA)((e) => {
                var t;
                let { album: a, likeButtonAriaLabel: l, withLikeButton: s = !0, donationButton: d, contextMenuChildren: b } = e,
                    {
                        user: h,
                        settings: { isMobile: x },
                        trailer: j,
                        albumCPA: { isPlusCPAEnabled: g, isPlusCPAPlayerBarEnabled: A },
                    } = (0, _.g)(),
                    { shouldShowBuySubscriptionModal: y, showBuySubscriptionModal: f } = (0, eN.q)(),
                    [C, T] = (0, n.useState)(!1),
                    k = (0, ew.K)(a),
                    N = (0, eU.A)(a),
                    { formatNumber: O } = (0, es.A)(),
                    I = (0, eH.F)(),
                    { utmLink: P } = (0, ek.f)({ contextId: a.id, contextType: ex.K.Album }),
                    E = (0, ey.P)(),
                    { controlSize: S, iconSize: L } = (0, eM.q)(x),
                    { pageAlbumId: D } = (0, ez.T)(),
                    M = g({ pageAlbumId: D, albumId: a.id, isNonMusic: a.isNonMusic }),
                    B = A(a.id, a.isNonMusic),
                    R = !M && !h.isAuthorized,
                    w = (0, m.c)(() => {
                        if (y && !B) return void f();
                        E() || (j.setUtmLink(P), j.openAlbumTrailer(a.id), I(o.DomainObjectType.Album, String(a.id)));
                    }),
                    U = (0, n.useMemo)(() => {
                        var e;
                        return (null == (e = a.trailer) ? void 0 : e.isAvailable) && !x
                            ? (0, i.jsx)(eK.L, {
                                  children: (0, i.jsx)(eV.k, {
                                      size: 's',
                                      radius: 'xxxl',
                                      iconSize: 'xxs',
                                      className: eW().trailerControl,
                                      disabled: !a.isAvailable,
                                      onClick: w,
                                      children: (0, i.jsx)(u.A, { id: 'entity-names.trailer' }),
                                  }),
                              })
                            : null;
                    }, [null == (t = a.trailer) ? void 0 : t.isAvailable, a.isAvailable, w, x]),
                    H = (0, c.L)(() => {
                        if (!x) return (0, n.isValidElement)(d) ? d : (0, i.jsx)(eX.O, { size: S, iconSize: L, onClick: N, isPinned: a.isPinned });
                    }),
                    z = (0, c.L)(() => {
                        if (a.actualLikesCount && 0 !== a.actualLikesCount && !x)
                            return (0, i.jsx)(v.HL, {
                                variant: 'span',
                                type: 'controls',
                                size: 's',
                                weight: 'medium',
                                children: a.actualLikesCount && O(a.actualLikesCount),
                            });
                    }),
                    F = (0, c.L)(() => {
                        if (s)
                            return (0, i.jsx)(eT.B, {
                                objectType: a.mainObjectType,
                                objectId: String(a.id),
                                objectPosX: 1,
                                objectPosY: 1,
                                objectsCount: 1,
                                mainObjectType: a.mainObjectType,
                                mainObjectId: String(a.id),
                                children: (0, i.jsx)(eF.c, {
                                    className: eW().likeControl,
                                    isLiked: a.isLiked,
                                    onClick: k,
                                    variant: 'default',
                                    size: S,
                                    iconSize: L,
                                    withRipple: !x,
                                    disabled: R,
                                    'aria-label': l,
                                    children: z,
                                }),
                            });
                    });
                return (0, i.jsxs)(i.Fragment, {
                    children: [
                        U,
                        F,
                        (0, n.isValidElement)(H) && (0, i.jsx)('div', { className: eW().pinOrDonationControl, children: H }),
                        (0, i.jsx)(eR.x, {
                            album: a,
                            open: C,
                            onOpenChange: T,
                            wrapperClassName: eW().menuControl,
                            size: S,
                            icon: (0, i.jsx)(p.I, { size: L, variant: 'more' }),
                            variant: eB.z.PAGE,
                            'data-test-id': r.e8.pageHeader.ALBUM_HEADER_CONTEXT_MENU_BUTTON,
                            children: b,
                        }),
                    ],
                });
            });
            var eG = a(86269),
                eq = a(41677),
                eQ = a(11323);
            let eZ = function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
                    t = e.filter((e) => !e.isComposer),
                    a = t.filter((e) => !e.various),
                    i = e.filter((e) => e.isComposer && !e.various),
                    l = [];
                return (a.length > 0 ? (l = a) : t.length > 0 && (l = t), l.concat(i));
            };
            var eJ = a(98508),
                e0 = a.n(eJ);
            let e1 = (0, l.PA)((e) => {
                var t, a, l, s;
                let { album: o, withArtistLink: c = !0 } = e,
                    {
                        settings: { isMobile: d },
                    } = (0, _.g)(),
                    u = (0, n.useMemo)(() => eZ(o.artists), [o.artists]),
                    m = (null == u ? void 0 : u.length) === 1 && !(null == (t = u[0]) ? void 0 : t.decomposed) && !(null == (a = u[0]) ? void 0 : a.various);
                return (0, i.jsx)(eT.B, {
                    objectType: o.mainObjectType,
                    objectId: String(o.id),
                    objectPosX: 1,
                    objectPosY: 1,
                    objectsCount: null == (l = o.artists) ? void 0 : l.length,
                    children: (0, i.jsxs)('div', {
                        className: e0().meta,
                        children: [
                            m &&
                                (0, i.jsx)(eG.t, {
                                    radius: 'round',
                                    className: e0().artistCover,
                                    children: (0, i.jsx)(eQ.B, { src: null == (s = u[0]) ? void 0 : s.coverUri, size: 30, withAvatarReplace: !0 }),
                                }),
                            (0, i.jsx)(eq.i, {
                                artists: u,
                                lineClamp: d ? 1 : void 0,
                                className: e0().artists,
                                spoilerClassName: e0().artistsSpoiler,
                                visibleArtistsCount: d ? void 0 : 2,
                                linkClassName: e0().artistLink,
                                captionClassName: e0().artistLabel,
                                variant: d ? 'breakAll' : 'breakWord',
                                withLink: c,
                            }),
                            o.year &&
                                (0, i.jsx)(v.HL, {
                                    variant: 'div',
                                    type: 'text',
                                    size: 'm',
                                    weight: 'medium',
                                    className: (0, eh.$)(e0().year, { [e0().year_dot]: u.length > 0 }),
                                    'data-test-id': r.e8.pageHeader.ALBUM_RELEASE_DATE,
                                    children: o.year,
                                }),
                        ],
                    }),
                });
            });
            var e2 = a(73395),
                e7 = a(8576),
                e4 = a(31035),
                e3 = a.n(e4),
                e9 = a(39534),
                e8 = a.n(e9);
            let e6 = (0, l.PA)((e) => {
                    let { album: t, donationButton: a, contextMenuChildren: l, className: s, 'aria-labelledby': r, forwardRef: c, onVersionClick: d } = e,
                        { formatMessage: b } = (0, es.A)(),
                        { shouldShowBuySubscriptionModal: v, showBuySubscriptionModal: h } = (0, eN.q)(),
                        x = (0, eC.f)(),
                        { from: j, utmLink: g } = (0, ek.f)({ pageId: k._Q.ALBUM, blockId: ef.U.ALBUM, contextType: ex.K.Album, contextId: t.id }),
                        A = (0, ey.P)(),
                        {
                            user: y,
                            settings: { isMobile: f },
                            sonataState: C,
                            track: { isTrackPage: T },
                            modals: { imageSliderModal: N },
                            albumCPA: { isPlusCPAPlayerBarEnabled: O },
                            paywall: { modal: I },
                        } = (0, _.g)(),
                        { iconSize: P, controlSize: E } = (0, eM.q)(f),
                        S = f && !y.isAuthorized && t.isAvailable,
                        L = f && !y.hasPlus && y.isAuthorized && t.isAvailable,
                        D = S || L,
                        M = (0, eO.N)(),
                        B = !y.hasPlus && t.isAvailableOnlyForPlus,
                        R = !!t.coverUri,
                        w = O(t.id, t.isNonMusic),
                        U = (0, eA.r)(t.type),
                        H = (0, eI.j)();
                    (0, n.useEffect)(() => {
                        x();
                    }, [x]);
                    let z = (0, n.useMemo)(() => {
                            if (t.shouldShowBooksBadge) return (0, i.jsx)(p.I, { variant: 'yandexBooks'.concat(H), className: e8().booksLogo });
                        }, [t.shouldShowBooksBadge, H]),
                        { isPlaying: F, togglePlay: X } = (0, eP.D)({
                            playContextParams: {
                                contextData: { type: ex.K.Album, meta: { id: t.id }, from: j, utmLink: g },
                                loadContextMeta: !0,
                                entitiesData: C.unloadedEntitiesDataFromModels,
                            },
                        }),
                        V = (0, m.c)(() => {
                            t.coverUri && N.openImages({ images: [t.coverUri] });
                        }),
                        K = (0, m.c)(() => {
                            if (!A()) {
                                if (v && !w) return void h();
                                if (M && !w) return void I.open();
                                X();
                            }
                        }),
                        Y = (0, n.useMemo)(
                            () =>
                                B
                                    ? (0, i.jsx)(eD, { className: e8().plusPaywallButton, albumType: t.type })
                                    : f
                                      ? (0, i.jsx)(eE.D, {
                                            className: (0, eh.$)(e3().playControl, { [e3().playControl_withLogin]: D }),
                                            buttonVariant: 'default',
                                            iconSize: D ? P : 'xxl',
                                            size: D ? E : void 0,
                                            isPlaying: F,
                                            onClick: K,
                                            variant: D ? 'default' : 'filled',
                                            disabled: !t.isAvailable,
                                            shouldSendAnalyticsOnPlayClick: !0,
                                        })
                                      : (0, i.jsx)(eE.D, {
                                            className: e3().playControl,
                                            withRipple: !0,
                                            buttonVariant: 'default',
                                            radius: 'xxxl',
                                            size: 's',
                                            color: 'primary',
                                            iconSize: 'xxs',
                                            isPlaying: F,
                                            onClick: K,
                                            disabled: !t.isAvailable,
                                            shouldSendAnalyticsOnPlayClick: !0,
                                            children: (0, i.jsx)(u.A, { id: 'player-actions.listen' }),
                                        }),
                            [B, f, F, K, t.isAvailable, t.type, D, P, E],
                        ),
                        W = (0, n.useMemo)(
                            () =>
                                (0, i.jsx)('div', {
                                    className: e3().controlsContainer,
                                    children: (0, i.jsxs)('div', {
                                        className: e3().controls,
                                        children: [
                                            (0, i.jsx)(eT.B, {
                                                objectType: o.DomainObjectType.Album,
                                                objectId: String(t.id),
                                                objectPosX: 1,
                                                objectPosY: 1,
                                                objectsCount: 1,
                                                mainObjectType: o.DomainObjectType.Album,
                                                mainObjectId: String(t.id),
                                                children: Y,
                                            }),
                                            (0, i.jsx)(e$, { donationButton: a, album: t, withLikeButton: !B, contextMenuChildren: l }),
                                        ],
                                    }),
                                }),
                            [t, a, Y, B, l],
                        );
                    return (0, i.jsx)(e2.k, {
                        ref: c,
                        headingVariant: T ? 'div' : 'h1',
                        className: s,
                        controls: W,
                        meta: (0, i.jsx)(e1, { album: t }),
                        entityName: U,
                        entityNameIcon: z,
                        title: t.title,
                        cover: (0, i.jsx)(e7.I, {
                            coverVariant: 'square',
                            coverUri: t.coverUri,
                            isAvailable: t.isAvailable,
                            withPlusBadge: t.isAvailableOnlyForPlus,
                            onClick: R ? V : void 0,
                            'aria-label': R ? b({ id: 'slider.view-cover' }) : void 0,
                        }),
                        'aria-labelledby': r,
                        version: t.version,
                        onVersionClick: d,
                        showMobileLoginButton: S,
                        showMobileSubscriptionButton: L,
                    });
                }),
                e5 = (0, n.forwardRef)((e, t) => (0, i.jsx)(e6, { forwardRef: t, ...e }));
            var te = a(77435),
                tt = a(90840),
                ta = a(2413),
                ti = a(15774),
                tl = a(95226),
                ts = a(13882),
                tn = a(31286),
                to = a(79406),
                tr = a(97841),
                tc = a(32468),
                td = (function (e) {
                    return ((e.ABOUT = 'about'), (e.TRACKS = 'track-list'), e);
                })({});
            let tu = [td.ABOUT, td.TRACKS];
            var tm = a(96333),
                tb = a(49399);
            let tp = (e) => {
                let { album: t } = e;
                return (0, n.useCallback)(
                    (e) => {
                        let a = [];
                        for (let i = e.startIndex; i <= e.endIndex; i++) {
                            let e = t.items[i];
                            (null == e ? void 0 : e.type) === tm.S.TRACK && (null == e ? void 0 : e.loadingState) === tb.G.IDLE && a.push(e.id);
                        }
                        a.length && t.getTracks({ trackIds: a });
                    },
                    [t],
                );
            };
            var tv = a(98350),
                th = a(32496),
                tx = a(34223),
                t_ = (function (e) {
                    return ((e.TRACK = 'TRACK'), (e.TEXT = 'TEXT'), e);
                })({}),
                tj = a(52547),
                tg = a.n(tj);
            let tA = (e) => {
                let { shimmerVariant: t, trackVariant: a = tv.X.ALBUM } = e;
                switch (t) {
                    case t_.TRACK:
                        return (0, i.jsx)(tx.D, { isActive: !0, className: (0, eh.$)({ [tg().root]: a === tv.X.ALBUM }), variant: a });
                    case t_.TEXT:
                        return (0, i.jsx)(th.n, { className: tg().root });
                }
            };
            var ty = a(20163),
                tf = a.n(ty);
            let tC = (e) => {
                    let { text: t } = e;
                    return (0, i.jsx)('div', { className: tf().root, children: (0, i.jsx)(v.DZ, { variant: 'h2', className: ev().text, children: t }) });
                },
                tT = (e) => {
                    let { element: t, isNonMusic: a, album: l } = e,
                        { formatMessage: s } = (0, es.A)();
                    return (e) => {
                        var n;
                        let o = null == l || null == (n = l.items) ? void 0 : n[e];
                        if (
                            !o ||
                            !l.meta ||
                            l.isRejected ||
                            !((e) => !!e && 'object' == typeof e && (('type' in e && e.type === ti.r.TEXT) || ('id' in e && 'positionInContext' in e)))(o)
                        )
                            return (0, i.jsx)(tA, { shimmerVariant: t_.TRACK, trackVariant: tv.X.ALBUM });
                        if (!o.data && !o.isRejected)
                            switch (o.type) {
                                case ti.r.TEXT:
                                    return (0, i.jsx)(tA, { shimmerVariant: t_.TEXT });
                                case tm.S.TRACK:
                                    return (0, i.jsx)(tA, { shimmerVariant: t_.TRACK, trackVariant: tv.X.ALBUM });
                                default:
                                    if (a) return (0, i.jsx)(tA, { shimmerVariant: t_.TRACK, trackVariant: tv.X.PLAYLIST });
                            }
                        return o.type !== ti.r.TEXT
                            ? t(o, e)
                            : a
                              ? (0, i.jsx)(tC, { text: s({ id: 'entity-names.season-number' }, { number: o.data }) })
                              : (0, i.jsx)(tC, { text: s({ id: 'entity-names.disk-number' }, { number: o.data }) });
                    };
                };
            var tk = a(5749),
                tN = a(48977),
                tO = a(60101),
                tI = a(23352);
            let tP = (0, l.PA)((e) => {
                let { url: t } = e,
                    a = (0, tk.c)(),
                    l = (0, tN.C)(),
                    { ref: s, intersectionPropertyId: n } = (0, tI.n)({ callback: l, withViewUuid: !0 }),
                    r = (0, x.Z)(t),
                    c = (0, m.c)((e) => {
                        (a(o.AppScreen.Link, t), r(e));
                    });
                return (0, i.jsx)(tO.v, { onClick: c, ref: s, 'data-intersection-property-id': n });
            });
            var tE = a(80097),
                tS = a(74381),
                tL = a(79897),
                tD = a(91853);
            let tM = (0, l.PA)((e) => {
                    let { donation: t } = e,
                        a = (0, tk.c)(),
                        l = (0, tN.C)(),
                        s = (0, tt.Q)()(t.url),
                        { ref: n, intersectionPropertyId: r } = (0, tI.n)({ callback: l, withViewUuid: !0 }),
                        c = (0, x.Z)(s),
                        d = (0, x.Z)(t.artist.url),
                        u = (0, m.c)((e) => {
                            (a(o.AppScreen.ArtistScreen), d(e));
                        }),
                        b = (0, m.c)(() => {
                            (a(o.AppScreen.Link, s), c());
                        }),
                        p = (0, tD.S)({ artist: t.artist, callback: u });
                    return (0, i.jsx)(tL.X, {
                        ref: n,
                        'data-intersection-property-id': r,
                        artist: t.artist,
                        goal: t.goal,
                        onNavigateToArtist: p,
                        onNavigateToDonation: b,
                    });
                }),
                tB = (0, l.PA)((e) => {
                    var t, a, l;
                    let { className: s, headerClassName: r, containerClassName: c, headingVariant: d } = e,
                        { formatMessage: u } = (0, es.A)(),
                        { album: m } = (0, _.g)(),
                        b = (0, n.useMemo)(() => {
                            var e, t;
                            return (null == (e = m.donations) ? void 0 : e.isLoading) || !(null == (t = m.donations) ? void 0 : t.items)
                                ? (0, tS.k)(!0)
                                : m.donations.items.map((e, t) => {
                                      var a, l, s;
                                      return (0, i.jsx)(
                                          eT.B,
                                          {
                                              objectType: o.DomainObjectType.Donation,
                                              objectId: e.artist.id,
                                              objectPosX: t + 1,
                                              objectPosY: 1,
                                              objectsCount: Number(null == (l = m.donations) || null == (a = l.items) ? void 0 : a.length),
                                              mainObjectId: String(null == (s = m.meta) ? void 0 : s.id),
                                              mainObjectType: o.DomainObjectType.Album,
                                              children: (0, i.jsx)(tM, { donation: e }, e.artist.id),
                                          },
                                          e.artist.id,
                                      );
                                  });
                        }, [null == (t = m.donations) ? void 0 : t.isLoading, null == (a = m.donations) ? void 0 : a.items, null == (l = m.meta) ? void 0 : l.id]);
                    return (0, i.jsx)(tE.x, {
                        className: s,
                        headerClassName: r,
                        containerClassName: c,
                        title: u({ id: 'donation.support-text' }),
                        headingVariant: d,
                        children: b,
                    });
                });
            var tR = a(19740),
                tw = a(27576),
                tU = a(17811),
                tH = a(90153),
                tz = a(74416),
                tF = a(79374),
                tX = a(2792),
                tV = a(37240),
                tK = a(62376),
                tY = a(92083),
                tW = a.n(tY),
                t$ = a(50162),
                tG = a(92146),
                tq = a(84782),
                tQ = a(98252),
                tZ = a.n(tQ);
            let tJ = (0, l.PA)((e) => {
                    let { donation: t } = e,
                        a = (0, tt.Q)()(t.url),
                        l = (0, x.Z)(a),
                        s = (() => {
                            let { hash: e } = (0, tz.gf)(),
                                t = (0, tK.U)(),
                                a = (0, tz.st)(),
                                { pageId: i } = (0, tV.$)(),
                                { blockId: l, blockType: s, blockPosX: n, blockPosY: r } = (0, tq.N)(),
                                { objectType: c, objectId: d, objectPosX: u, objectPosY: b, objectsCount: p, mainObjectId: v, mainObjectType: h } = (0, tX.J)();
                            return (0, m.c)(() => {
                                if (!a || !i) return;
                                let m = tF.W[i];
                                if (!m) return;
                                let x = {
                                        userInteractionType: o.UserInteractionType.Tap,
                                        hash: e,
                                        pageId: m,
                                        pageStyle: o.PageStyles.ContextMenu,
                                        pagePlacement: o.PagePlacements.Hover,
                                        mainObjectType: h,
                                        mainObjectId: v,
                                        objectType: c,
                                        objectId: d,
                                        objectPosX: u,
                                        objectPosY: b,
                                        entityType: s,
                                        entityId: l,
                                        entityPosX: n,
                                        entityPosY: r,
                                        objectsCount: p,
                                        actionType: o.UserInteractionType.Tap,
                                    },
                                    _ = (0, tU.F)({ params: x, logger: t, context: 'useSendEventOnDonationMenuItemActionPerformed' });
                                _ && (0, tG.l6)(a.evgenInstance, _);
                            });
                        })(),
                        n = (0, tN.C)(),
                        { ref: r, intersectionPropertyId: c } = (0, tI.n)({ callback: n, withViewUuid: !0 }),
                        d = (0, m.c)(() => {
                            (s(), l());
                        });
                    return (0, i.jsxs)(
                        tR.Dr,
                        {
                            ref: r,
                            'data-intersection-property-id': c,
                            className: tZ().root,
                            isBlock: !0,
                            onClick: d,
                            children: [
                                (0, i.jsx)(eG.t, {
                                    radius: 'round',
                                    className: tZ().cover,
                                    children: (0, i.jsx)(t$._V, { withAvatarReplace: !0, src: t.artist.coverUri, size: 100, fit: 'contain', className: tZ().image }),
                                }),
                                (0, i.jsx)(v.HL, { variant: 'span', size: 'm', weight: 'medium', lineClamp: 1, children: t.artist.name }),
                            ],
                        },
                        a,
                    );
                }),
                t0 = (0, l.PA)(() => {
                    var e;
                    let {
                            settings: { isMobile: t },
                            album: { donations: a, meta: l },
                        } = (0, _.g)(),
                        { formatMessage: s } = (0, es.A)(),
                        r = (() => {
                            let e = (0, tz.st)(),
                                t = (0, tK.U)(),
                                { hash: a } = (0, tz.gf)(),
                                { pageId: i } = (0, tV.$)(),
                                { mainObjectId: l, mainObjectType: s } = (0, tX.J)();
                            return (0, m.c)((n) => {
                                if (!e || !i || !tF.W[i]) return;
                                let r = {
                                    pageStyle: o.PageStyles.ContextMenu,
                                    pagePlacement: o.PagePlacements.Hover,
                                    mainObjectType: s,
                                    mainObjectId: l,
                                    hash: a,
                                    pageId: i,
                                };
                                n && (r.viewUuid = String((0, tw.A)()));
                                let c = (0, tU.F)({ params: r, logger: t, context: 'useSendEventOnDonationMenuOpenedOrClosed' });
                                c && (n ? (0, tH.Fn)(null == e ? void 0 : e.evgenInstance, c) : (0, tH.Ig)(null == e ? void 0 : e.evgenInstance, c));
                            });
                        })(),
                        [c, d] = (0, n.useState)(!1),
                        u = (0, n.useRef)(!1);
                    return (
                        (0, n.useEffect)(() => {
                            c && (u.current = !0);
                        }, [c]),
                        (0, n.useEffect)(() => {
                            u.current && r(c);
                        }, [c, r]),
                        (0, i.jsx)(tR.W1, {
                            ariaLabel: s({ id: 'donation.button-text' }),
                            size: 's',
                            variant: 'default',
                            radius: 'round',
                            color: 'secondary',
                            icon: (0, i.jsx)(p.I, { size: 'xxs', variant: 'ruble' }),
                            onOpenChange: d,
                            open: c,
                            isMobile: t,
                            placement: 'bottom',
                            offsetOptions: 8,
                            listClassName: tW().popover,
                            children:
                                null == a || null == (e = a.items)
                                    ? void 0
                                    : e.map((e, t) => {
                                          var s;
                                          return (0, i.jsx)(
                                              eT.B,
                                              {
                                                  objectType: o.DomainObjectType.Donation,
                                                  objectId: e.artist.id,
                                                  objectPosX: 1,
                                                  objectPosY: t + 1,
                                                  objectsCount: Number(null == (s = a.items) ? void 0 : s.length),
                                                  mainObjectId: String(null == l ? void 0 : l.id),
                                                  mainObjectType: o.DomainObjectType.Album,
                                                  children: (0, i.jsx)(tJ, { donation: e }),
                                              },
                                              e.artist.id,
                                          );
                                      }),
                        })
                    );
                });
            var t1 = a(54862),
                t2 = a(79248);
            let t7 = (0, l.PA)((e) => {
                    let { item: t, itemContentCallback: a, resizeObserver: l, scrollMargin: s } = e,
                        [o, r] = (0, t1.d)();
                    (0, n.useEffect)(
                        () => (
                            o && l && l.observe(o),
                            () => {
                                o && l && l.unobserve(o);
                            }
                        ),
                        [o, l],
                    );
                    let c = { transform: 'translate3d(0, '.concat(t.start - s, 'px, 0)') };
                    return (0, i.jsx)('div', { 'data-index': t.index, className: ev().virtualItem, ref: r, style: c, children: a(t.index) }, t.key);
                }),
                t4 = (0, l.PA)((e) => {
                    let { count: t, getDataByRange: a, itemContentCallback: l, role: s = 'region', ariaLabel: o } = e,
                        c = (0, eC.f)(),
                        [d, u] = (0, t1.d)(),
                        { virtualizer: m, resizeObserver: b } = (0, t2.r)({ count: t, getEstimateSize: () => 56, containerRef: d });
                    ((0, n.useEffect)(() => {
                        c();
                    }, [c]),
                        (0, n.useEffect)(() => {
                            !m.isScrolling && m.range && a(m.range);
                        }, [a, m.isScrolling, m.range]));
                    let p = m.getTotalSize(),
                        v = m.getVirtualItems();
                    return (0, i.jsx)('div', {
                        className: ev().virtualScroll,
                        style: { height: ''.concat(p, 'px') },
                        ref: u,
                        role: s,
                        'aria-label': o,
                        'data-test-id': r.S7.TRACK_LIST,
                        children: v.map((e) => (0, i.jsx)(t7, { item: e, itemContentCallback: l, resizeObserver: b, scrollMargin: m.options.scrollMargin }, e.key)),
                    });
                });
            var t3 = a(47745),
                t9 = a(61258);
            let t8 = (e) => {
                    let { url: t, name: a } = e,
                        l = (0, t3.N)(),
                        { ref: s, intersectionPropertyId: n } = (0, tI.n)(),
                        c = (0, m.c)(() => {
                            l({ to: o.AppScreen.LabelScreen, deepLink: t });
                        });
                    return (0, i.jsx)('span', {
                        ref: s,
                        'data-intersection-property-id': n,
                        className: ev().labelLinkContainer,
                        children: (0, i.jsx)(t9.N, {
                            role: 'link',
                            'aria-label': a,
                            href: t,
                            className: (0, eh.$)(ev().labelLink, ev().important),
                            onClick: c,
                            'data-test-id': r.Xk.album.ALBUM_LABEL_LINK,
                            children: (0, i.jsx)(v.HL, { variant: 'span', children: a }),
                        }),
                    });
                },
                t6 = (0, l.PA)((e) => {
                    var t, a, l;
                    let { album: s, size: r, weight: c, className: d } = e,
                        { formatMessage: u } = (0, es.A)(),
                        m = (0, eC.f)();
                    (0, n.useEffect)(() => {
                        m();
                    }, [m]);
                    let b = null == (t = s.labels) ? void 0 : t.length,
                        p = u((null == (a = s.meta) ? void 0 : a.isPodcast) ? { id: 'page.album-publisher-title' } : { id: 'page.album-label-title' }, { count: b });
                    return (0, i.jsxs)('div', {
                        className: (0, eh.$)(ev().label, d),
                        children: [
                            (0, i.jsx)(v.HL, { variant: 'span', size: r, weight: c, children: p }),
                            '\xa0',
                            (0, i.jsx)(v.HL, {
                                variant: 'span',
                                size: r,
                                weight: c,
                                lineClamp: 1,
                                children:
                                    null == (l = s.labels)
                                        ? void 0
                                        : l.map((e, t) => {
                                              var a, l;
                                              let { id: n, name: r } = e;
                                              return (0, i.jsx)(
                                                  eT.B,
                                                  {
                                                      objectType: o.DomainObjectType.Link,
                                                      objectId: s.labelUrl(n),
                                                      objectPosX: t + 1,
                                                      objectPosY: 1,
                                                      objectsCount: null == (a = s.labels) ? void 0 : a.length,
                                                      mainObjectType: o.DomainObjectType.Link,
                                                      mainObjectId: String(null == (l = s.meta) ? void 0 : l.id),
                                                      children: (0, i.jsx)(t8, { url: s.labelUrl(n), name: r }),
                                                  },
                                                  n,
                                              );
                                          }),
                            }),
                        ],
                    });
                });
            var t5 = a(79490),
                ae = a(32804),
                at = a(9480),
                aa = a(44128),
                ai = a(46673),
                al = a(97647);
            let as = (0, l.PA)((e) => {
                var t;
                let { albumId: a, albumTitle: l, albumCoverUri: s } = e,
                    {
                        user: o,
                        album: c,
                        sonataState: { entityMeta: d },
                    } = (0, _.g)(),
                    b = (0, aa.e)(),
                    v = (0, t5.S)(null == b ? void 0 : b.state.currentContext.value),
                    h = ((e) =>
                        (0, m.c)((t) =>
                            t.data
                                ? !t.data.isRemoved && t.data.isAvailable
                                    ? t.data.entityId
                                    : void 0
                                : 'number' == typeof e
                                  ? ''.concat(t.id, ':').concat(e)
                                  : void 0,
                        ))(null == (t = c.meta) ? void 0 : t.id),
                    x = (0, n.useMemo)(() => (0, ai.t)({ contextType: ex.K.Album, contextId: String(a) }), [a]),
                    j = (0, ae.m)(c.tracks, at.N.NEXT, x, { entityVariant: al.c.ALBUM, entityTitle: l, coverUri: s }, h),
                    g = (0, ae.m)(c.tracks, at.N.LAST, x, { entityVariant: al.c.ALBUM, entityTitle: l, coverUri: s }, h);
                return d && !v
                    ? (0, i.jsxs)(i.Fragment, {
                          children: [
                              (0, i.jsx)(tR.Dr, {
                                  onClick: j,
                                  icon: (0, i.jsx)(p.I, { variant: 'playNext', size: 'xxs' }),
                                  disabled: !o.isAuthorized,
                                  'data-test-id': r.Kq.album.ALBUM_CONTEXT_MENU_PLAY_NEXT_BUTTON,
                                  children: (0, i.jsx)(u.A, { id: 'play-queue.play-next' }),
                              }),
                              (0, i.jsx)(tR.Dr, {
                                  onClick: g,
                                  icon: (0, i.jsx)(p.I, { variant: 'playLast', size: 'xxs' }),
                                  disabled: !o.isAuthorized,
                                  'data-test-id': r.Kq.album.ALBUM_CONTEXT_MENU_PLAY_LAST_BUTTON,
                                  children: (0, i.jsx)(u.A, { id: 'play-queue.play-last' }),
                              }),
                          ],
                      })
                    : null;
            });
            var an = a(72440),
                ao = a.n(an);
            let ar = (0, l.PA)(() => {
                var e, t, a, l, s, d, u, m;
                let b = (0, n.useRef)(null),
                    p = (0, n.useRef)(0),
                    v = (0, tn.w)(),
                    { notify: h } = (0, eo.l)(),
                    x = (0, tt.Q)(),
                    {
                        album: j,
                        albumCPA: g,
                        experiments: A,
                        sonataState: y,
                        settings: { isMobile: f },
                        track: { isTrackPage: C },
                    } = (0, _.g)(),
                    { from: T, utmLink: N } = (0, ek.f)({ pageId: k._Q.ALBUM, blockId: ef.U.ALBUM, contextType: ex.K.Album, contextId: j.id }),
                    { formatMessage: O } = (0, es.A)(),
                    [I, P] = (0, n.useState)(!1),
                    E = tp({ album: j }),
                    S = C ? 'div' : 'h2',
                    L = j.items.length || 10,
                    { isCPAEnabled: M } = (0, D.I)(),
                    B = !M || (M && !g.cpa),
                    R = A.checkExperiment(to.z.WebNextAlbumDonationButton, 'on') && j.hasDonations,
                    w = R && f,
                    { showBuySubscriptionModal: U } = (0, eN.q)(),
                    H = g.isPlusCPAPlayerBarEnabled(j.id, null == (e = j.meta) ? void 0 : e.isNonMusic) && f;
                ((0, n.useEffect)(
                    () => () => {
                        p.current = 0;
                    },
                    [j],
                ),
                    (0, n.useEffect)(() => {
                        H && y.status === e_.MT.ENDED && U();
                    }, [y.status, U, H]),
                    (0, n.useEffect)(() => {
                        var e, t;
                        if ((null == (e = j.otherArtistAlbums) ? void 0 : e.isRejected) || (null == (t = j.latestGenreAlbums) ? void 0 : t.isRejected)) {
                            if (!p || p.current > 0) return;
                            (h((0, i.jsx)(er.h, { error: O({ id: 'album-errors.error-during-loading-similar-albums' }) }), { containerId: en.u.ERROR }), p.current++);
                        }
                    }, [null == (t = j.latestGenreAlbums) ? void 0 : t.isRejected, null == (a = j.otherArtistAlbums) ? void 0 : a.isRejected, O, h]),
                    (0, n.useEffect)(() => {
                        j.isResolved && j.hasOtherAlbumVersions && P(!0);
                    }, [j.hasOtherAlbumVersions, j.isResolved]));
                let z = (0, n.useCallback)(() => {
                        let e = b.current;
                        null == e || e.scrollIntoView({ behavior: 'smooth' });
                    }, []),
                    F = (0, c.L)(() => {
                        var e, t, a, l, s;
                        if (!R || !(null == (e = j.donations) ? void 0 : e.items)) return;
                        if (Number(null == (a = j.meta) || null == (t = a.artists) ? void 0 : t.length) > 1)
                            return (0, i.jsx)(tl.F, {
                                blockType: o.EntityTypes.Donations,
                                blockId: ef.U.DONATY,
                                blockPosX: 1,
                                blockPosY: 1,
                                children: (0, i.jsx)(eT.B, {
                                    mainObjectId: String(null == (s = j.meta) ? void 0 : s.id),
                                    mainObjectType: o.DomainObjectType.Album,
                                    children: (0, i.jsx)(t0, {}),
                                }),
                            });
                        let [n] = j.donations.items;
                        if (n)
                            return (0, i.jsx)(tl.F, {
                                blockType: o.EntityTypes.Donations,
                                blockId: ef.U.DONATY,
                                blockPosX: 1,
                                blockPosY: 1,
                                children: (0, i.jsx)(eT.B, {
                                    objectType: o.DomainObjectType.Donation,
                                    objectId: n.artist.id,
                                    objectPosX: 0,
                                    objectPosY: 0,
                                    objectsCount: 1,
                                    mainObjectId: String(null == (l = j.meta) ? void 0 : l.id),
                                    mainObjectType: o.DomainObjectType.Album,
                                    children: (0, i.jsx)(tP, { url: x(n.url) }),
                                }),
                            });
                    }),
                    X = (0, n.useMemo)(
                        () =>
                            j.isLoading || !j.meta || j.isRejected
                                ? (0, i.jsx)(eg.c, { className: ev().header, isActive: !0 })
                                : (0, i.jsx)(e5, {
                                      album: j.meta,
                                      donationButton: F,
                                      className: ev().header,
                                      onVersionClick: I ? z : void 0,
                                      contextMenuChildren: (0, i.jsx)(as, { albumId: j.meta.id, albumTitle: j.meta.title, albumCoverUri: j.meta.coverUri }),
                                  }),
                        [j.isLoading, j.meta, j.isRejected, F, I, z],
                    ),
                    V = tT({
                        element: (e, t) => {
                            var a;
                            if (e.data && e.type !== ti.r.TEXT)
                                return (0, i.jsx)(eT.B, {
                                    objectType: o.DomainObjectType.Track,
                                    objectId: String(e.data.id),
                                    objectPosX: 1,
                                    objectPosY: t + 1,
                                    objectsCount: L,
                                    children: (0, i.jsx)(ta.F, {
                                        withLightning: e.isBest && !e.data.isRemoved,
                                        track: e.data,
                                        position: e.position,
                                        albumArtists: null == j || null == (a = j.meta) ? void 0 : a.artists,
                                        playContextParams: v(t, {
                                            contextData: { type: ex.K.Album, meta: j.contextMeta, from: T, utmLink: N },
                                            queueParams: { index: e.positionInContext, entityId: e.data.id },
                                            loadContextMeta: !0,
                                            entitiesData: y.unloadedEntitiesDataFromModels,
                                        }),
                                    }),
                                });
                        },
                        album: j,
                    }),
                    K = (0, c.L)(() => {
                        var e, t, a, l, s, n, c, d, u, m, p, v;
                        let h = [],
                            x = 4;
                        return (
                            w &&
                                (null == (e = j.donations) ? void 0 : e.items) &&
                                (h.push(
                                    (0, i.jsx)(
                                        tl.F,
                                        {
                                            blockType: o.EntityTypes.Donations,
                                            blockId: ef.U.DONATY,
                                            blockPosX: 1,
                                            blockPosY: x,
                                            children: (0, i.jsx)(tB, {
                                                headingVariant: S,
                                                className: ao().carouselContainer,
                                                headerClassName: (0, eh.$)(ao().carouselBlock, ao().carouselBlockHeader),
                                                containerClassName: ao().carouselBlock,
                                            }),
                                        },
                                        o.EntityTypes.Donations,
                                    ),
                                ),
                                x++),
                            j.hasSimilarEntities &&
                                (h.push(
                                    (0, i.jsx)(
                                        tl.F,
                                        {
                                            blockType: o.EntityTypes.SimilarEntities,
                                            blockId: o.EntityTypes.SimilarEntities,
                                            blockPosX: 1,
                                            blockPosY: x,
                                            objectsCount: null == (a = j.similarEntities.data) ? void 0 : a.items.length,
                                            mainObjectId: String(null == (l = j.meta) ? void 0 : l.id),
                                            mainObjectType: o.DomainObjectType.Album,
                                            children: (0, i.jsx)(ej.Q, {
                                                ...j.similarEntities,
                                                meta: { title: O({ id: 'page.similar-entities-block-title' }) },
                                                headingVariant: S,
                                                className: ao().carouselContainer,
                                                headerClassName: (0, eh.$)(ao().carouselBlock, ao().carouselBlockHeader),
                                                containerClassName: ao().carouselBlock,
                                                shouldSendAnalyticsOnLoaded: !0,
                                                setHasSentAnalyticsOnLoaded: j.similarEntities.setHasSentAnalyticsOnLoaded,
                                            }),
                                        },
                                        o.EntityTypes.SimilarEntities,
                                    ),
                                ),
                                x++),
                            j.hasOtherAlbumVersions &&
                                (null == (t = j.otherAlbumVersions) ? void 0 : t.length) &&
                                (h.push(
                                    (0, i.jsx)(
                                        tl.F,
                                        {
                                            blockType: o.EntityTypes.OtherAlbumVersions,
                                            blockId: o.EntityTypes.OtherAlbumVersions,
                                            blockPosX: 1,
                                            blockPosY: x,
                                            objectsCount: null == (s = j.otherAlbumVersions) ? void 0 : s.length,
                                            mainObjectId: String(null == (n = j.meta) ? void 0 : n.id),
                                            mainObjectType: o.DomainObjectType.Album,
                                            children: (0, i.jsx)(te.p, {
                                                isShimmerVisible: j.isLoading,
                                                isShimmerActive: !0,
                                                className: ao().carouselContainer,
                                                headerClassName: (0, eh.$)(ao().carouselBlock, ao().carouselBlockHeader),
                                                containerClassName: ao().carouselBlock,
                                                title: O({ id: 'entity-names.other-album-versions' }),
                                                albums: j.otherAlbumVersions,
                                                headingRef: b,
                                                headingVariant: S,
                                                shouldSendAnalyticsOnLoaded: !0,
                                                'data-test-id': r.Xk.album.OTHER_VERSIONS_CAROUSEL,
                                            }),
                                        },
                                        o.EntityTypes.OtherAlbumVersions,
                                    ),
                                ),
                                x++),
                            j.hasLatestGenreAlbums &&
                                B &&
                                (h.push(
                                    (0, i.jsx)(
                                        tl.F,
                                        {
                                            blockType: o.EntityTypes.GenreAlbums,
                                            blockId: o.EntityTypes.GenreAlbums,
                                            blockPosX: 1,
                                            blockPosY: x,
                                            objectsCount: null == (c = j.latestGenreAlbums) ? void 0 : c.items.length,
                                            mainObjectId: String(null == (d = j.meta) ? void 0 : d.id),
                                            mainObjectType: o.DomainObjectType.Album,
                                            children: (0, i.jsx)(te.p, {
                                                isShimmerVisible: j.isLatestGenreAlbumsLoading,
                                                isShimmerActive: !0,
                                                className: ao().carouselContainer,
                                                headerClassName: (0, eh.$)(ao().carouselBlock, ao().carouselBlockHeader),
                                                containerClassName: ao().carouselBlock,
                                                title: O({ id: 'entity-names.new-albums-in-genre' }),
                                                albums: null == (u = j.latestGenreAlbums) ? void 0 : u.items,
                                                headingVariant: S,
                                                shouldSendAnalyticsOnLoaded: !0,
                                                'data-test-id': r.Xk.album.GENRE_ALBUMS_CAROUSEL,
                                            }),
                                        },
                                        o.EntityTypes.GenreAlbums,
                                    ),
                                ),
                                x++),
                            j.hasOtherArtistAlbums &&
                                (h.push(
                                    (0, i.jsx)(
                                        tl.F,
                                        {
                                            blockType: o.EntityTypes.OtherAlbums,
                                            blockId: o.EntityTypes.OtherAlbums,
                                            blockPosX: 1,
                                            blockPosY: x,
                                            objectsCount: null == (m = j.otherArtistAlbums) ? void 0 : m.items.length,
                                            mainObjectId: String(null == (p = j.meta) ? void 0 : p.id),
                                            mainObjectType: o.DomainObjectType.Album,
                                            children: (0, i.jsx)(te.p, {
                                                isShimmerVisible: j.isOtherArtistAlbumsLoading,
                                                isShimmerActive: !0,
                                                className: ao().carouselContainer,
                                                headerClassName: (0, eh.$)(ao().carouselBlock, ao().carouselBlockHeader),
                                                containerClassName: ao().carouselBlock,
                                                title: O({ id: 'entity-names.other-albums-of-artist' }),
                                                albums: null == (v = j.otherArtistAlbums) ? void 0 : v.items,
                                                headingVariant: S,
                                                shouldSendAnalyticsOnLoaded: !0,
                                                'data-test-id': r.Xk.album.OTHER_ARTIST_ALBUMS_CAROUSEL,
                                            }),
                                        },
                                        o.EntityTypes.OtherAlbums,
                                    ),
                                ),
                                x++),
                            h
                        );
                    });
                return (
                    j.id && j.isResolved && j.similarEntities.isNeededToLoad && j.isSimilarEntitiesEnabled && (0, n.use)(j.getSimilarEntities({ albumId: j.id })),
                    (0, i.jsxs)(ts.h, {
                        tabId: '',
                        tabPos: 0,
                        isTabSelectedByDefault: !1,
                        children: [
                            (0, i.jsx)(tl.F, {
                                blockType: o.EntityTypes.Header,
                                blockId: o.EntityTypes.Header,
                                blockPosX: 1,
                                blockPosY: 1,
                                mainObjectId: String(null == (l = j.meta) ? void 0 : l.id),
                                mainObjectType: o.DomainObjectType.Album,
                                objectsCount: 1,
                                children: X,
                            }),
                            (0, i.jsx)(tl.F, {
                                blockType: o.EntityTypes.Tracks,
                                blockId: o.EntityTypes.Tracks,
                                blockPosX: 1,
                                blockPosY: 2,
                                objectsCount: L,
                                mainObjectId: String(null == (s = j.meta) ? void 0 : s.id),
                                mainObjectType: o.DomainObjectType.Album,
                                children: (0, i.jsx)(t4, {
                                    count: L,
                                    itemContentCallback: V,
                                    getDataByRange: E,
                                    ariaLabel: O({ id: 'entity-names.albums-tracks-list' }, { albumName: (null == (d = j.meta) ? void 0 : d.title) || '' }),
                                }),
                            }),
                            (0, i.jsxs)('div', {
                                className: ev().footerContainer,
                                children: [
                                    j.hasLabel &&
                                        (0, i.jsx)(tl.F, {
                                            blockType: o.EntityTypes.Labels,
                                            blockId: o.EntityTypes.Labels,
                                            blockPosX: 1,
                                            blockPosY: 3,
                                            objectsCount: null == (u = j.labels) ? void 0 : u.length,
                                            mainObjectId: String(null == (m = j.meta) ? void 0 : m.id),
                                            mainObjectType: o.DomainObjectType.Album,
                                            children: (0, i.jsx)(t6, { album: j, size: 's', weight: 'normal', className: ao().label }),
                                        }),
                                    (0, i.jsxs)('div', { className: ao().carouselBlocks, children: [K, ' '] }),
                                    (0, i.jsx)(tc.A, { children: (0, i.jsx)(tr.w, { className: ev().footer }) }),
                                ],
                            }),
                        ],
                    })
                );
            });
            var ac = a(15299),
                ad = a(94631),
                au = a(19620),
                am = a(86400),
                ab = a.n(am);
            let ap = (0, l.PA)((e) => {
                let { className: t, headingVariant: a = 'h2' } = e,
                    l = (0, eC.f)(),
                    { formatMessage: s } = (0, es.A)(),
                    { album: r, sonataState: c } = (0, _.g)();
                (0, n.useEffect)(() => {
                    l();
                }, [l]);
                let { from: d, utmLink: u } = (0, ek.f)({ pageId: k._Q.PODCAST, blockId: ef.U.PODCAST, contextId: r.id, contextType: ex.K.Album }),
                    m = (0, n.useMemo)(
                        () =>
                            r.lastEpisodes.map((e, t) =>
                                r.isResolved && e.data
                                    ? (0, i.jsx)(
                                          eT.B,
                                          {
                                              objectType: o.DomainObjectType.PodcastEpisode,
                                              objectId: String(e.data.id),
                                              objectPosX: 1,
                                              objectPosY: t + 1,
                                              objectsCount: r.lastEpisodes.length,
                                              children: (0, i.jsx)(ad.K, {
                                                  track: e.data,
                                                  playContextParams: {
                                                      contextData: { type: ex.K.Album, meta: r.contextMeta, from: d, utmLink: u },
                                                      queueParams: { index: e.positionInContext, entityId: e.data.id },
                                                      loadContextMeta: !0,
                                                      entitiesData: c.unloadedEntitiesDataFromModels,
                                                  },
                                              }),
                                          },
                                          e.data.id,
                                      )
                                    : (0, i.jsx)(tx.D, { isActive: !0, className: ab().shimmerItem, variant: tv.X.ALBUM }, t),
                            ),
                        [r.lastEpisodes, r.isResolved, r.contextMeta, d, u, c.unloadedEntitiesDataFromModels],
                    );
                return (0, i.jsxs)('div', {
                    className: (0, eh.$)(t, ab().root),
                    children: [
                        (0, i.jsx)(au.T, { headingVariant: a, className: ab().blockHeader, title: s({ id: 'entity-names.podcast-last-episodes' }) }),
                        (0, i.jsx)('div', { role: 'list', 'aria-label': s({ id: 'podcast.last-episodes-list' }), tabIndex: 0, children: m }),
                    ],
                });
            });
            var av = a(24170),
                ah = a(98148),
                ax = a(4332),
                a_ = a.n(ax);
            let aj = {
                    'authors-books': r.e8.album.AUTHORS_BOOKS,
                    'category-albums': r.e8.album.CATEGORY_ALBUMS,
                    'labels-albums': r.e8.album.LABELS_ALBUMS,
                    'similar-albums': r.e8.album.SIMILAR_ALBUMS,
                },
                ag = (0, l.PA)((e) => {
                    var t, a;
                    let { isShimmerVisible: l, isShimmerActive: s, className: r, headingVariant: c = 'h2' } = e,
                        { album: d } = (0, _.g)(),
                        u = (0, eC.f)();
                    return (
                        (0, n.useEffect)(() => {
                            u();
                        }, [u]),
                        (0, i.jsx)('div', {
                            className: (0, eh.$)(r, a_().root),
                            children:
                                null == (a = d.relatedContent) || null == (t = a.items)
                                    ? void 0
                                    : t.map((e, t) => {
                                          let a = aj[e.type] || '';
                                          return (0, i.jsx)(
                                              ah.O,
                                              {
                                                  headingVariant: c,
                                                  title: e.title,
                                                  isShimmerVisible: l,
                                                  isShimmerActive: s,
                                                  className: (0, eh.$)(a_().root, r),
                                                  containerClassName: a_().carousel,
                                                  headerClassName: a_().header,
                                                  'data-test-id': a,
                                                  children: e.albums.map((t, a) =>
                                                      (0, i.jsx)(
                                                          eT.B,
                                                          {
                                                              objectType: o.DomainObjectType.Podcast,
                                                              objectId: String(t.id),
                                                              objectPosX: a + 1,
                                                              objectPosY: 1,
                                                              objectsCount: e.albums.length,
                                                              children: (0, i.jsx)(av.a, { album: t, contentLinesCount: 3, withLikesCount: !0, withAddition: !1 }),
                                                          },
                                                          t.id,
                                                      ),
                                                  ),
                                              },
                                              ''.concat(e.type).concat(t),
                                          );
                                      }),
                        })
                    );
                });
            var aA = a(73155),
                ay = a(2969),
                af = a(96434),
                aC = a(30542),
                aT = a(2411),
                ak = a.n(aT);
            let aN = (0, l.PA)((e) => {
                    let { album: t, actionButton: a, contextMenuChildren: l, className: s, 'aria-labelledby': o, forwardRef: c, onVersionClick: d } = e,
                        { formatMessage: b } = (0, es.A)(),
                        { shouldShowBuySubscriptionModal: v, showBuySubscriptionModal: h } = (0, eN.q)(),
                        x = (0, eC.f)(),
                        { from: j, utmLink: g } = (0, ek.f)({ pageId: k._Q.ALBUM, blockId: ef.U.ALBUM, contextType: ex.K.Album, contextId: t.id }),
                        {
                            user: A,
                            settings: { isMobile: y },
                            sonataState: f,
                            modals: { imageSliderModal: C },
                            paywall: { modal: T },
                        } = (0, _.g)(),
                        N = (0, ay.b)(),
                        O = (0, ey.P)(),
                        { iconSize: I, controlSize: P } = (0, eM.q)(y),
                        E = y && !A.isAuthorized && t.isAvailable,
                        S = y && !A.hasPlus && A.isAuthorized && t.isAvailable,
                        L = E || S,
                        D = (0, eO.N)(),
                        M = (0, aC.$)(t.isLiked, t.type),
                        B = (0, eA.r)(t.type),
                        R = (0, eI.j)(),
                        w = t.isAvailable || t.isAudiobook,
                        U = !!t.coverUri;
                    (0, n.useEffect)(() => {
                        x();
                    }, [x]);
                    let H = (0, n.useMemo)(() => {
                            if (t.shouldShowBooksBadge) return (0, i.jsx)(p.I, { variant: 'yandexBooks'.concat(R), className: ak().booksLogo });
                        }, [t.shouldShowBooksBadge, R]),
                        z = !A.hasPlus && t.isAvailableOnlyForPlus,
                        F = (0, af.c)(t.isPodcast ? t : null),
                        { isPlaying: X, togglePlay: V } = (0, eP.D)({
                            playContextParams: {
                                contextData: { type: ex.K.Album, meta: { id: t.id }, from: j, utmLink: g },
                                loadContextMeta: !0,
                                entitiesData: f.unloadedEntitiesDataFromModels,
                            },
                        }),
                        K = (0, m.c)(() => {
                            t.coverUri && C.openImages({ images: [t.coverUri] });
                        }),
                        Y = (0, m.c)(() => {
                            if (!O()) {
                                if (v) return void h();
                                if (D) return void T.open();
                                (V(), N(!X));
                            }
                        }),
                        W = (0, n.useMemo)(
                            () =>
                                z
                                    ? (0, i.jsx)(eD, { className: ak().plusPaywallButton, albumType: t.type })
                                    : y
                                      ? (0, i.jsx)(eE.D, {
                                            className: (0, eh.$)(e3().playControl, { [e3().playControl_withLogin]: L }),
                                            buttonVariant: 'default',
                                            iconSize: L ? I : 'xxl',
                                            size: L ? P : void 0,
                                            isPlaying: X,
                                            onClick: Y,
                                            variant: L ? 'default' : 'filled',
                                            disabled: !t.isAvailable,
                                            shouldSendAnalyticsOnPlayClick: !0,
                                        })
                                      : (0, i.jsx)(eE.D, {
                                            className: e3().playControl,
                                            withRipple: !0,
                                            buttonVariant: 'default',
                                            radius: 'xxxl',
                                            size: 's',
                                            color: 'primary',
                                            iconSize: 'xxs',
                                            isPlaying: X,
                                            onClick: Y,
                                            disabled: !t.isAvailable,
                                            shouldSendAnalyticsOnPlayClick: !0,
                                            children: (0, i.jsx)(u.A, { id: 'player-actions.listen' }),
                                        }),
                            [z, y, X, Y, t.isAvailable, t.type, L, I, P],
                        ),
                        $ = (0, n.useMemo)(
                            () =>
                                (0, i.jsx)('div', {
                                    className: ak().controlsBlock,
                                    children: (0, i.jsxs)('div', {
                                        className: e3().controlsContainer,
                                        children: [
                                            (0, i.jsxs)('div', {
                                                className: e3().controls,
                                                'data-test-id': r.e8.pageHeader.NON_MUSIC_PAGE_HEADER_CONTROLS,
                                                children: [
                                                    (0, i.jsx)(eT.B, {
                                                        objectType: t.mainObjectType,
                                                        objectId: String(t.id),
                                                        objectPosX: 1,
                                                        objectPosY: 1,
                                                        objectsCount: 1,
                                                        mainObjectType: t.mainObjectType,
                                                        mainObjectId: String(t.id),
                                                        children: W,
                                                    }),
                                                    (0, i.jsx)(e$, { album: t, likeButtonAriaLabel: M, withLikeButton: !z, contextMenuChildren: l }),
                                                ],
                                            }),
                                            a && (0, i.jsx)('div', { className: e3().controls, children: a }),
                                        ],
                                    }),
                                }),
                            [W, t, M, z, a, l],
                        ),
                        G = (0, n.useMemo)(() => (0, i.jsx)('div', { className: ak().meta, children: (0, i.jsx)(e1, { album: t }) }), [t]);
                    return (0, i.jsx)(e2.k, {
                        ref: c,
                        headingVariant: 'h1',
                        className: s,
                        controls: $,
                        meta: G,
                        entityName: B,
                        entityNameIcon: H,
                        title: t.title,
                        cover: (0, i.jsx)(e7.I, {
                            coverVariant: 'square',
                            coverUri: t.coverUri,
                            isAvailable: w,
                            withPlusBadge: t.isAvailableOnlyForPlus,
                            onClick: U ? K : void 0,
                            'aria-label': U ? b({ id: 'slider.view-cover' }) : void 0,
                        }),
                        'aria-labelledby': o,
                        version: t.version,
                        onVersionClick: d,
                        disclaimerLabel: F,
                        showMobileLoginButton: E,
                        showMobileSubscriptionButton: S,
                    });
                }),
                aO = (0, n.forwardRef)((e, t) => (0, i.jsx)(aN, { forwardRef: t, ...e }));
            var aI = a(62134),
                aP = a(31266),
                aE = a(71670),
                aS = a(45180),
                aL = a(8946),
                aD = a(59830),
                aM = a.n(aD);
            let aB = (0, l.PA)(() => {
                    var e, t, a, l, r, d, m, p, h, j, g, A, f, C, T, N, O;
                    let I = (0, n.useRef)(0),
                        P = (0, n.useRef)(null),
                        E = (0, tn.w)(),
                        { album: S, experiments: L, sonataState: D, slides: M } = (0, _.g)(),
                        B = (null == (e = S.meta) ? void 0 : e.isAudiobook) ? k._Q.AUDIOBOOK : k._Q.PODCAST,
                        R = (null == (t = S.meta) ? void 0 : t.isAudiobook) ? ef.U.AUDIOBOOK : ef.U.PODCAST,
                        { from: w, utmLink: U } = (0, ek.f)({ pageId: B, blockId: R, contextType: ex.K.Album, contextId: S.id }),
                        { href: H } = (0, z.u)('/slides/podcast/:podcastId', { params: { podcastId: null != (O = S.id) ? O : '' } }),
                        F = (0, x.Z)(H),
                        X = (0, n.useId)(),
                        { formatMessage: V } = (0, es.A)(),
                        K = (0, s.useSearchParams)(),
                        Y = (0, aE.X)(),
                        W = L.checkExperiment(to.z.WebNextRewind2024, 'on') && (null == (a = S.meta) ? void 0 : a.isPodcast),
                        $ = (0, n.useMemo)(() => {
                            let e = K.get(y.K.ACTIVE_TAB),
                                t = tu.findIndex((t) => t === e);
                            return t >= 0 ? t : 0;
                        }, [K]),
                        G = (0, ac.zb)($),
                        [q, Q] = (0, n.useState)(tu[G.value]),
                        Z = tp({ album: S });
                    (0, n.useEffect)(
                        () => () => {
                            ((I.current = 0), M.resetPodcast());
                        },
                        [S, M],
                    );
                    let J = (0, n.useMemo)(() => {
                            var e, t;
                            let a = W && M.podcastSlidesLoadingState === tb.G.RESOLVE && !!(null == (e = M.podcastItems) ? void 0 : e.length),
                                l = { '--action-button-color-background': (0, aA.W)(null == (t = S.meta) ? void 0 : t.averageColor) };
                            return a
                                ? (0, i.jsx)(b.$, {
                                      className: aM().rewindControl,
                                      style: l,
                                      withRipple: !1,
                                      withHover: !1,
                                      radius: 'xxxl',
                                      size: 's',
                                      color: 'primary',
                                      onClick: F,
                                      variant: 'default',
                                      role: 'link',
                                      children: (0, i.jsx)(v.HL, { variant: 'span', lineClamp: 1, children: (0, i.jsx)(u.A, { id: 'rewind.button-title' }) }),
                                  })
                                : null;
                        }, [null == (l = S.meta) ? void 0 : l.averageColor, W, F, null == (r = M.podcastItems) ? void 0 : r.length, M.podcastSlidesLoadingState]),
                        ee = (0, n.useMemo)(() => {
                            var e, t;
                            return (null == (e = S.meta) ? void 0 : e.isFairyTale)
                                ? { about: V({ id: 'non-music.fairytale-tab-about' }), 'track-list': V({ id: 'non-music.audiobook-tab-tracks' }) }
                                : (null == (t = S.meta) ? void 0 : t.isAudiobook)
                                  ? { about: V({ id: 'non-music.audiobook-tab-about' }), 'track-list': V({ id: 'non-music.audiobook-tab-tracks' }) }
                                  : { about: V({ id: 'podcast.tab-about' }), 'track-list': V({ id: 'podcast.tab-tracks' }, { value: S.tracks.length }) };
                        }, [null == (d = S.meta) ? void 0 : d.isAudiobook, null == (m = S.meta) ? void 0 : m.isFairyTale, S.tracks.length, V]),
                        ea = (0, n.useMemo)(
                            () => (e) => {
                                var t;
                                if (!G.onTabChange || e === G.value) return;
                                G.onTabChange(e);
                                let a = null != (t = tu[e]) ? t : td.ABOUT;
                                Q(a);
                                let i = (0, aP.b)(y.K.ACTIVE_TAB, a);
                                i && Y(i);
                            },
                            [G, Y],
                        ),
                        ei = (e, t) =>
                            (0, i.jsxs)('div', {
                                className: aM().infoBlock,
                                children: [
                                    (0, i.jsx)(v.HL, { variant: 'span', type: 'entity', size: 'm', className: aM().infoTitle, children: e }),
                                    (0, i.jsx)(v.HL, { variant: 'span', type: 'entity', size: 'm', children: t }),
                                ],
                            }),
                        el = ((e) => {
                            let { formatMessage: t } = (0, es.A)(),
                                { minutes: a, hours: i } = et(e),
                                l = '';
                            return (
                                i > 0 && (l += t({ id: 'time.hours' }, { hours: i })),
                                a > 0 && ((l += l.length > 0 ? ' ' : ''), (l += t({ id: 'time.minutes-left' }, { minutes: a }))),
                                l
                            );
                        })((null == (p = S.meta) ? void 0 : p.durationSec) || 0),
                        en = (0, n.useMemo)(() => {
                            var e, t, a, l, s, n, o, r, c, d, u, m, b, p, h;
                            let x = Number(null == (e = S.labels) ? void 0 : e.length) > 1 ? V({ id: 'podcast.publishers-title' }) : V({ id: 'podcast.publisher-title' }),
                                _ = null == (t = S.labels) ? void 0 : t.map((e) => e.name).join(', '),
                                j = V({ id: 'podcast.age-limit' }),
                                g =
                                    Number(null == (l = S.meta) || null == (a = l.artists) ? void 0 : a.length) > 1
                                        ? V({ id: 'non-music.audiobook-artists' })
                                        : V({ id: 'non-music.audiobook-artist' }),
                                A = null == (n = S.meta) || null == (s = n.artists) ? void 0 : s.map((e) => e.name).join(', '),
                                y =
                                    (null == (r = S.meta) || null == (o = r.artists) ? void 0 : o.length) ||
                                    (null == (c = S.meta) ? void 0 : c.durationSec) ||
                                    (null == (d = S.labels) ? void 0 : d.length) ||
                                    S.isExplicit,
                                f = A && ei(''.concat(g, ':'), String(A)),
                                C = (null == (u = S.meta) ? void 0 : u.durationSec) && ei(''.concat(V({ id: 'time.duration' }), ':'), el),
                                T = _ && ei(''.concat(x, ':'), String(_)),
                                k = ei(''.concat(j, ':'), '18+'),
                                N = S.hasLabel ? (0, i.jsx)(t6, { album: S, size: 'm', weight: 'medium', className: aM().label }) : T;
                            return (0, i.jsx)(ac.Kp, {
                                name: 0,
                                value: G.value,
                                elementId: X,
                                children: (0, i.jsxs)('div', {
                                    className: aM().contentAbout,
                                    children: [
                                        S.description &&
                                            !!(null == (m = S.description) ? void 0 : m.length) &&
                                            (0, i.jsx)(v.HL, {
                                                variant: 'div',
                                                type: 'entity',
                                                size: 'm',
                                                className: ev().text,
                                                children: (0, i.jsx)('span', { dangerouslySetInnerHTML: { __html: (0, ed.sanitizeDOM)(S.description) } }),
                                            }),
                                        y &&
                                            (0, i.jsxs)('div', {
                                                className: ev().text,
                                                children: [
                                                    !!(null == (p = S.meta) || null == (b = p.artists) ? void 0 : b.length) && f,
                                                    (null == (h = S.meta) ? void 0 : h.durationSec) && C,
                                                    N,
                                                    S.isExplicit && k,
                                                ],
                                            }),
                                    ],
                                }),
                            });
                        }, [S, V, el, G.value, X]),
                        eo = (0, c.L)(() =>
                            S.isLoading || !S.meta || S.isRejected
                                ? (0, i.jsx)(eg.c, { className: ev().header, isActive: !0 })
                                : (0, i.jsxs)(i.Fragment, {
                                      children: [
                                          (0, i.jsx)(aO, {
                                              album: S.meta,
                                              actionButton: J,
                                              className: ev().header,
                                              contextMenuChildren: (0, i.jsx)(as, { albumId: S.meta.id, albumTitle: S.meta.title, albumCoverUri: S.meta.coverUri }),
                                          }),
                                          (0, i.jsx)(aL.wI, {
                                              className: aM().tabCarousel,
                                              ...G,
                                              onTabChange: ea,
                                              ref: P,
                                              children: tu.map((e, t) => (0, i.jsx)(aS.o, { className: aM().tab, title: ee[e], value: t }, e)),
                                          }),
                                          en,
                                      ],
                                  }),
                        );
                    (0, n.useEffect)(() => {
                        S.isResolved && (S.loadLastEpisodes(), S.getRelatedContent());
                    }, [S, S.isResolved, S.loadLastEpisodes, S.getRelatedContent]);
                    let er = q === td.ABOUT && (null == (h = S.meta) ? void 0 : h.isPodcast) && S.lastEpisodes.length > 0,
                        ec = q === td.ABOUT && S.relatedContent && S.relatedContent.items && S.relatedContent.items.length > 0,
                        eu = tT({
                            element: (e, t) => {
                                if (e.data && e.type !== ti.r.TEXT)
                                    return (0, i.jsx)(eT.B, {
                                        objectType: o.DomainObjectType.Track,
                                        objectId: String(e.data.id),
                                        objectPosX: 1,
                                        objectPosY: t + 1,
                                        objectsCount: S.items.length,
                                        children: (0, i.jsx)(ad.K, {
                                            track: e.data,
                                            viewType: aI.D.ALBUM,
                                            position: e.position,
                                            playContextParams: E(t, {
                                                contextData: { type: ex.K.Album, meta: S.contextMeta, from: w, utmLink: U },
                                                queueParams: { index: e.positionInContext, entityId: e.data.id },
                                                loadContextMeta: !0,
                                                entitiesData: D.unloadedEntitiesDataFromModels,
                                            }),
                                        }),
                                    });
                            },
                            isNonMusic: !0,
                            album: S,
                        }),
                        em = q === td.ABOUT ? 0 : S.items.length || 10,
                        eb = (0, c.L)(() => {
                            if (q === td.TRACKS) {
                                var e, t, a;
                                return (null == (e = S.meta) ? void 0 : e.isAudiobook)
                                    ? V({ id: 'non-music.audiobook-list' }, { albumName: (null == (a = S.meta) ? void 0 : a.title) || '' })
                                    : V({ id: 'podcast.episodes-list' }, { albumName: (null == (t = S.meta) ? void 0 : t.title) || '' });
                            }
                        }),
                        ep = (0, c.L)(() => {
                            var e;
                            return q !== td.TRACKS
                                ? null
                                : (0, i.jsx)(tl.F, {
                                      blockType: o.EntityTypes.Episodes,
                                      blockId: o.EntityTypes.Episodes,
                                      blockPosX: 1,
                                      blockPosY: 2,
                                      objectsCount: em,
                                      mainObjectId: String(null == (e = S.meta) ? void 0 : e.id),
                                      mainObjectType: o.DomainObjectType.Album,
                                      children: (0, i.jsx)(t4, { count: em, getDataByRange: Z, itemContentCallback: eu, role: 'tabpanel', ariaLabel: eb }),
                                  });
                        }),
                        eh = W && M.podcastSlidesLoadingState === tb.G.IDLE;
                    return (
                        'number' == typeof S.id && eh && (0, n.use)(M.getPodcastSlides({ podcastId: S.id })),
                        (0, i.jsxs)(ts.h, {
                            tabId: null != q ? q : td.ABOUT,
                            tabPos: G.value + 1,
                            isTabSelectedByDefault: !1,
                            children: [
                                (0, i.jsx)(tl.F, {
                                    blockType: o.EntityTypes.Header,
                                    blockId: o.EntityTypes.Header,
                                    blockPosX: 1,
                                    blockPosY: 1,
                                    mainObjectId: String(null == (j = S.meta) ? void 0 : j.id),
                                    mainObjectType: o.DomainObjectType.Podcast,
                                    objectsCount: 1,
                                    children: eo,
                                }),
                                ep,
                                (0, i.jsxs)('div', {
                                    className: ev().footerContainer,
                                    children: [
                                        er &&
                                            (0, i.jsx)(tl.F, {
                                                blockType: o.EntityTypes.LatestEpisodes,
                                                blockId: o.EntityTypes.LatestEpisodes,
                                                blockPosX: 1,
                                                blockPosY: 2,
                                                objectsCount: S.lastEpisodes.length,
                                                mainObjectId: String(null == (g = S.meta) ? void 0 : g.id),
                                                mainObjectType: null == (A = S.meta) ? void 0 : A.mainObjectType,
                                                children: (0, i.jsx)(ap, { className: aM().lastEpisodes }),
                                            }),
                                        ec &&
                                            (0, i.jsx)(tl.F, {
                                                blockType: o.EntityTypes.Podcasts,
                                                blockId: o.EntityTypes.Podcasts,
                                                blockPosX: 1,
                                                blockPosY: 3,
                                                objectsCount: null == (C = S.relatedContent) || null == (f = C.items) ? void 0 : f.length,
                                                mainObjectId: String(null == (T = S.meta) ? void 0 : T.id),
                                                mainObjectType: null == (N = S.meta) ? void 0 : N.mainObjectType,
                                                children: (0, i.jsx)(ag, { isShimmerVisible: S.isRelatedContentLoading, isShimmerActive: !0 }),
                                            }),
                                        (0, i.jsx)(tc.A, { children: (0, i.jsx)(tr.w, { className: ev().footer }) }),
                                    ],
                                }),
                            ],
                        })
                    );
                }),
                aR = (0, l.PA)((e) => {
                    var t, a, l, u, m, b, p, v, h, x, j, g;
                    let { albumId: k, trackId: P, preloadedAlbum: S, preloadedCpa: M, preloadedTrack: V } = e,
                        { contentScrollRef: K, setContentScrollRef: Y } = (0, R.g)(),
                        W = (0, s.useSearchParams)(),
                        $ = ((e) => {
                            let { searchParams: t = {} } = e;
                            return 'bandlink' === t[y.K.UTM_SOURCE] || !!t[y.K.CLID] || !!t[y.K.REF_ID];
                        })({ searchParams: Object.fromEntries(W.entries()) }),
                        { user: G, album: q, disclaimerModalState: Q, track: Z, sonataState: J, albumCPA: ee } = (0, _.g)(),
                        { checkIsValidClid: et, setClidToQuery: ea, deleteClidFromQuery: ei } = (0, D.I)(),
                        ed = (0, E.y)(null == (t = q.meta) ? void 0 : t.averageColor),
                        { headerStyle: eu } = (0, f.Q)(ed),
                        em = (0, O.l)({ mainObjectType: null != (x = null == (a = q.meta) ? void 0 : a.mainObjectType) ? x : o.DomainObjectType.Album }),
                        { deprecationUrl: ep, shouldRedirect: eh } = ((e) => {
                            let { albumId: t, deprecationTargetAlbumId: a, trackId: i, realId: l, searchParams: s } = e,
                                n = Number(t),
                                o = new URLSearchParams(s);
                            (o.delete('albumId'), o.delete('trackId'));
                            let r = Object.fromEntries(o);
                            if ('number' == typeof a && a !== n) {
                                if (i) {
                                    let { href: e } = (0, z.u)('/album/:albumId/track/:trackId', { params: { albumId: a, trackId: i }, query: r });
                                    return { deprecationUrl: e, shouldRedirect: !0 };
                                }
                                let { href: e } = (0, z.u)('/album/:albumId', { params: { albumId: a }, query: r });
                                return { deprecationUrl: e, shouldRedirect: !0 };
                            }
                            if (i && l && l !== i) {
                                let { href: e } = (0, z.u)('/album/:albumId/track/:trackId', { params: { albumId: t, trackId: l }, query: r });
                                return { deprecationUrl: e, shouldRedirect: !0 };
                            }
                            return { deprecationUrl: '', shouldRedirect: !1 };
                        })({
                            albumId: k,
                            deprecationTargetAlbumId: q.deprecationTargetAlbumId,
                            trackId: P,
                            realId: (null == (l = Z.meta) ? void 0 : l.id) === P ? (null == (u = Z.meta) ? void 0 : u.realId) : void 0,
                            searchParams: W,
                        }),
                        ex = (0, T.c)({ album: q.meta, shouldHistoryBack: !0 }),
                        e_ = !!(null == (m = q.meta) ? void 0 : m.isNonMusic),
                        ej = !!(P && B(V));
                    ((0, N.A)(),
                        ((e) => {
                            var t;
                            let { albumId: a, trackId: i, isNonMusic: l } = e,
                                { setDeeplink: s } = null != (t = (0, ec.P)()) ? t : {};
                            (0, n.useEffect)(() => {
                                if (i) {
                                    let e = l ? void 0 : { playTrack: i, openPlayer: !0, lyricsMode: !0 },
                                        { href: t } = (0, z.u)('/album/:albumId/track/:trackId', { params: { albumId: a, trackId: i }, query: e });
                                    null == s || s(t);
                                } else {
                                    let { href: e } = (0, z.u)('/album/:albumId', { params: { albumId: a } });
                                    null == s || s(e);
                                }
                                return () => {
                                    null == s || s(null);
                                };
                            }, [a, l, s, i]);
                        })({ albumId: k, trackId: P, isNonMusic: e_ }),
                        (0, n.useEffect)(() => {
                            var e;
                            (null == (e = q.meta) ? void 0 : e.isUnsafeLegal) && ex();
                        }, [null == (b = q.meta) ? void 0 : b.isUnsafeLegal, ex]),
                        (0, n.useLayoutEffect)(
                            () => (
                                P && k && !B(V) && Z.open({ trackId: P, albumId: Number(k) }),
                                () => {
                                    Z.reset();
                                }
                            ),
                            [k, V, P, Z],
                        ),
                        (0, n.useEffect)(() => {
                            var e;
                            ej && (null == (e = Z.meta) ? void 0 : e.resolveAllDisclaimers) && Z.meta.resolveAllDisclaimers();
                        }, [ej, Z.meta]),
                        (0, n.useEffect)(() => {
                            et(ee.cpa, Number(k)) || ei();
                        }, [et, k, ee.cpa, ei]),
                        (0, n.useEffect)(
                            () => (
                                q.id && q.id !== Number(k) && (q.reset(J), ei()),
                                () => {
                                    (q.reset(J), ei());
                                }
                            ),
                            [q, k, J, ei, ee],
                        ),
                        (0, w.J)(q.isResolved),
                        ((e, t, a, i, l) => {
                            var s, o, r, c;
                            (0, n.useEffect)(() => {
                                var s, n, o, r;
                                let c = t && a,
                                    d = null == i || null == (s = i.resolvedModalData) ? void 0 : s.title,
                                    u = null == e || null == (o = e.meta) || null == (n = o.resolvedModalData) ? void 0 : n.title;
                                if (a && (l || (null == i ? void 0 : i.isLegalRejected))) {
                                    if (!d) return;
                                    (0, X.j)({ title: d });
                                    return;
                                }
                                if (null == e || null == (r = e.meta) ? void 0 : r.isLegalRejected) {
                                    if (!u) return;
                                    (0, X.j)({ title: u });
                                    return;
                                }
                                if (!(null == e ? void 0 : e.meta) || e.isLoading || c) return;
                                let m = (0, F.f)(e.meta);
                                t ||
                                    el(m, { fullUrl: null, locale: null, url: null, tld: '', host: '' }).then((e) => {
                                        (0, X.j)(e);
                                    });
                            }, [
                                null == e ? void 0 : e.meta,
                                null == e ? void 0 : e.isLoading,
                                null == e || null == (s = e.meta) ? void 0 : s.isLegalRejected,
                                null == e || null == (r = e.meta) || null == (o = r.resolvedModalData) ? void 0 : o.title,
                                l,
                                a,
                                null == i ? void 0 : i.isLegalRejected,
                                null == i || null == (c = i.resolvedModalData) ? void 0 : c.title,
                                t,
                            ]);
                        })(q, Z.isOpened, P, Z.meta, ej),
                        (0, n.useEffect)(
                            () => (
                                em(!0),
                                () => {
                                    em(!1);
                                }
                            ),
                            [k, em],
                        ));
                    let eg = (0, c.L)(() => (e_ ? (0, i.jsx)(aB, {}) : (0, i.jsx)(ar, {}))),
                        eA = [];
                    (k &&
                        q.isNeededToLoad &&
                        (eA.push(q.getData({ albumId: Number(k), resumeStream: !1, preloadedAlbum: S, sonataState: J }), q.getDonations({ albumId: Number(k) })),
                        ($ || M) && eA.push(ee.getCpa({ albumId: Number(k), preloadedCpa: M }))),
                        eA.length && (0, n.use)(Promise.allSettled(eA)),
                        (0, n.useEffect)(() => {
                            ee.cpa && q.id && ea(ee.cpa, q.id);
                        }, [ee.cpa, q.id, ea]),
                        q.isNotFound && (0, s.notFound)(),
                        eh && (0, s.redirect)(ep),
                        ((e) => {
                            let { album: t } = e,
                                a = (0, n.useRef)(0),
                                { notify: l } = (0, eo.l)(),
                                { formatMessage: s } = (0, es.A)();
                            (0, n.useMemo)(
                                () => () => {
                                    if (!t.isNotFound && (t.isRejected || (!t.meta && !t.isLoading))) {
                                        var e;
                                        if (!a || a.current > 0) return;
                                        let n = (null == (e = t.meta) ? void 0 : e.isPodcast)
                                            ? s({ id: 'podcast-errors.error-during-loading-podcast' })
                                            : s({ id: 'album-errors.error-during-loading-album' });
                                        (l((0, i.jsx)(er.h, { error: n }), { containerId: en.u.ERROR }), a.current++);
                                    }
                                },
                                [t.isLoading, t.isNotFound, t.isRejected, t.meta, s, l],
                            )();
                        })({ album: q }));
                    let ey = ej
                        ? null != (j = null == (p = Z.meta) ? void 0 : p.resolvedModalData)
                            ? j
                            : null
                        : null != (g = null == (v = q.meta) ? void 0 : v.resolvedModalData)
                          ? g
                          : null;
                    if (q.isCacheNotFound) return (0, i.jsx)(A, {});
                    if ((null == (h = q.meta) ? void 0 : h.isLegalRejected) || ej) return (0, i.jsx)(U.M, { modalState: Q, data: ey });
                    let ef = e_ ? r.Xk.album.NON_MUSIC_ALBUM_PAGE : r.Xk.album.ALBUM_PAGE;
                    return (0, i.jsx)(L, {
                        pageAlbumId: Number(k),
                        children: (0, i.jsx)(I.j, {
                            children: (0, i.jsxs)(C.h, {
                                scrollElement: K,
                                children: [
                                    (0, i.jsx)(H.Y, {}),
                                    (0, i.jsxs)(d.C, {
                                        scrollableContainerRef: Y,
                                        className: ev().root,
                                        containerClassName: ev().content,
                                        scrollContentClassName: ev().scrollContent,
                                        'data-test-id': ef,
                                        children: [(0, i.jsx)('div', { className: ev().averageColorBackground, style: eu }), eg, (0, i.jsx)(eb, { user: G, album: q })],
                                    }),
                                ],
                            }),
                        }),
                    });
                }),
                aw = (0, l.PA)((e) => (0, i.jsx)(P.n, { pageId: k._Q.ALBUM, pageEntityId: e.albumId, children: (0, i.jsx)(aR, { ...e }) }));
        },
        52547: (e) => {
            e.exports = { root: 'Shimmer_root__NvUMY' };
        },
        57594: (e, t, a) => {
            'use strict';
            a.d(t, { P: () => s, g: () => n });
            var i = a(55178),
                l = a(25090);
            let s = (0, i.createContext)(null);
            function n() {
                let e = (0, i.useContext)(s);
                if (null === e) throw new l.t('Store cannot be null, please add a context provider', { code: 'E_CONTEXT_STORE_NULL' });
                return e;
            }
        },
        59830: (e) => {
            e.exports = {
                tabCarousel: 'NonMusicContent_tabCarousel__EBHWC',
                tab: 'NonMusicContent_tab__LIh_U',
                contentAbout: 'NonMusicContent_contentAbout__BMIP5',
                infoBlock: 'NonMusicContent_infoBlock__IyjXA',
                infoTitle: 'NonMusicContent_infoTitle__Wf9EC',
                lastEpisodes: 'NonMusicContent_lastEpisodes__Xa8Xp',
                rewindControl: 'NonMusicContent_rewindControl__7tncY',
                label: 'NonMusicContent_label__9GlIS',
            };
        },
        60101: (e, t, a) => {
            'use strict';
            a.d(t, { v: () => m });
            var i = a(32290),
                l = a(96103),
                s = a(55178),
                n = a(60900),
                o = a(85472),
                r = a(21732),
                c = a(63423),
                d = a(82586);
            let u = (0, l.PA)((e) => {
                    let { onClick: t, className: a, size: l = 's', iconSize: s = 'xxs', forwardRef: u, ...m } = e,
                        { formatMessage: b } = (0, n.A)();
                    return (0, i.jsx)(c.$, {
                        ref: u,
                        size: l,
                        variant: 'default',
                        radius: 'round',
                        color: 'secondary',
                        onClick: t,
                        className: a,
                        'aria-label': b({ id: 'donation.button-text' }),
                        icon: (0, i.jsx)(d.I, { size: s, variant: 'ruble' }),
                        ...(0, o.getDataAttrFromProps)(m),
                        'data-test-id': r.S7.DONATION_BUTTON,
                    });
                }),
                m = (0, s.forwardRef)((e, t) => (0, i.jsx)(u, { forwardRef: t, ...e }));
        },
        61334: (e, t, a) => {
            'use strict';
            a.d(t, { q: () => d });
            var i = a(21916),
                l = a(90432),
                s = a(91027),
                n = a(6752),
                o = a(67544),
                r = a(68243);
            let c = /[^\w\-./:?=&[\]%]/gi,
                d = (e) => {
                    let { browserInfo: t, login: a } = e,
                        d = (0, i.useSearchParams)(),
                        u = (0, n.L)(() => {
                            var e;
                            let a = parseFloat(null != (e = null == t ? void 0 : t.version) ? e : '');
                            return (null == t ? void 0 : t.OSFamily) === o.j.IOS
                                ? a >= 16
                                : (null == t ? void 0 : t.OSFamily) === o.j.ANDROID
                                  ? a >= 7
                                  : null == t
                                    ? void 0
                                    : t.inAppBrowser;
                        });
                    return (0, s.c)((e) =>
                        u && e
                            ? ((e, t, a) => {
                                  let i = e.get('deeplink_url'),
                                      s = e.get('channel'),
                                      n = e.get('tags'),
                                      o = { campaign: 'yamusicweb', channel: null != s ? s : 'musicmain', deep_link_value: t, af_dp: t };
                                  if ((a && (o.login = a), i)) {
                                      let e = ''.concat(l.ov).concat(i);
                                      ((o.deep_link_value = e), (o.af_dp = e), (o.deeplink_url = i));
                                  }
                                  n && (o.pid = n);
                                  let d = Object.keys(o).reduce((e, t) => {
                                          let a = o[t];
                                          if (void 0 !== a) {
                                              let i = ((e) => ('string' == typeof e ? e.replace(c, '') : ''))(a);
                                              i && (e[t] = i);
                                          }
                                          return e;
                                      }, {}),
                                      { href: u } = (0, r.u)('/', { query: d, options: { host: 'https://music.onelink.me/VkDa' } });
                                  return u;
                              })(d, e, a)
                            : ((e) => {
                                  if (e === o.j.IOS) {
                                      let { href: e } = (0, r.u)('/ru/app/andeks.muzyka/id520797969', {
                                          query: { mt: 8, uo: 4, at: '1000lqjf', ct: 'music' },
                                          options: { host: 'https://itunes.apple.com' },
                                      });
                                      return e;
                                  }
                                  if (e === o.j.ANDROID) {
                                      let { href: e } = (0, r.u)('/store/apps/details', {
                                          query: { id: 'ru.yandex.music' },
                                          options: { host: 'https://play.google.com' },
                                      });
                                      return e;
                                  }
                                  let { href: t } = (0, r.u)('/apps', { options: { host: 'https://music.yandex.ru' } });
                                  return t;
                              })(null == t ? void 0 : t.OSFamily),
                    );
                };
        },
        62376: (e, t, a) => {
            'use strict';
            a.d(t, { U: () => s });
            var i = a(70204),
                l = a(34186);
            let s = () => (0, l.N)().get(i.Zf);
        },
        65024: (e, t, a) => {
            'use strict';
            a.d(t, { C: () => l });
            let i = new Set(Object.values(a(3785).M)),
                l = (e) => 'string' == typeof e && i.has(e);
        },
        65204: (e, t, a) => {
            'use strict';
            a.d(t, { O: () => u });
            var i = a(32290),
                l = a(96103),
                s = a(39407),
                n = a(63423),
                o = a(71926),
                r = a(61334),
                c = a(32641),
                d = a(57594);
            let u = (0, l.PA)((e) => {
                let { className: t, buttonText: a, isBlock: l = !1 } = e,
                    {
                        settings: { browserInfo: u },
                        user: { account: m },
                    } = (0, d.g)(),
                    b = (0, r.q)({ browserInfo: u, login: m.data.login }),
                    p = (0, c.Z)(b());
                return (0, i.jsx)(n.$, {
                    role: 'link',
                    className: t,
                    isBlock: l,
                    color: 'primary',
                    variant: 'default',
                    size: 'l',
                    radius: 'xxxl',
                    onClick: p,
                    children: a || (0, i.jsx)(o.HL, { variant: 'div', size: 'm', lineClamp: 1, children: (0, i.jsx)(s.A, { id: 'download-mobile-app.listen-in-app' }) }),
                });
            });
        },
        65476: (e, t, a) => {
            'use strict';
            a.d(t, { I: () => d });
            var i = a(55178),
                l = a(91027),
                s = a(57594);
            a(79406);
            var n = a(97201),
                o = a(68243),
                r = (a(39231), a(80408)),
                c = (a(31266), a(71670));
            let d = () => {
                let {
                        experiments: e,
                        user: {
                            account: {
                                data: { hasPlus: t },
                            },
                        },
                    } = (0, s.g)(),
                    a = (0, c.X)(),
                    d = (0, i.useCallback)(() => {}, [!1]),
                    u = (0, l.c)((e, t) => {}),
                    m = (0, l.c)(() => {
                        let e = (0, r.j)();
                        if (null === e) return;
                        e.delete(n.K.CLID);
                        let t = new URL(window.location.href);
                        ((t.search = e.toString()), a(t.toString()));
                    }),
                    b = (0, l.c)((e, t) => {
                        if (!e || !t) return;
                        let a = d();
                        if (!a) return;
                        let { parsedClid: i } = a;
                        return t === i.albumId && e.clid === i.cpa.clid && e.artistId === i.cpa.artistId;
                    }),
                    p = (0, l.c)((e) => {
                        let t = d();
                        return (null == t ? void 0 : t.parsedClid.albumId) === e;
                    }),
                    v = (0, l.c)((e, t) => {
                        let a = d();
                        if (!a || a.parsedClid.albumId !== e) return t;
                        let { href: i } = (0, o.u)(t, { query: { [n.K.CLID]: a.queryClid } });
                        return i;
                    });
                return {
                    isCPAEnabled: !1,
                    getClidFromQuery: d,
                    setClidToQuery: u,
                    deleteClidFromQuery: m,
                    checkIsValidClid: b,
                    getAlbumUrlWithSavedClid: v,
                    checkIsCurrentAlbumPage: p,
                };
            };
        },
        67544: (e, t, a) => {
            'use strict';
            a.d(t, { j: () => i });
            var i = (function (e) {
                return ((e.ANDROID = 'Android'), (e.IOS = 'iOS'), (e.MACOS = 'MacOS'), (e.WINDOWS = 'Windows'), e);
            })({});
        },
        71670: (e, t, a) => {
            'use strict';
            a.d(t, { X: () => l });
            var i = a(55178);
            let l = () =>
                (0, i.useCallback)((e) => {
                    {
                        let t = window.history.state;
                        window.history.replaceState(t, '', e);
                    }
                }, []);
        },
        72440: (e) => {
            e.exports = {
                carouselBlocks: 'AlbumContent_carouselBlocks__bOsTV',
                carouselBlock: 'AlbumContent_carouselBlock__QhSlm',
                carouselBlockHeader: 'AlbumContent_carouselBlockHeader__Liibv',
                carouselContainer: 'AlbumContent_carouselContainer__Y1M_e',
                label: 'AlbumContent_label__2jz4j',
            };
        },
        73155: (e, t, a) => {
            'use strict';
            a.d(t, { W: () => l });
            var i = a(85472);
            let l = (e) => {
                if (!e) return null;
                let { h: t, s: a, l } = (0, i.hexToHsl)(e),
                    s = Math.min(70, Math.max(10, l + 10));
                return 'hsl('.concat(t, 'deg, ').concat(a, '%, ').concat(s, '%)');
            };
        },
        74381: (e, t, a) => {
            'use strict';
            a.d(t, { k: () => c });
            var i = a(32290),
                l = a(63618),
                s = a(79856),
                n = a(90011),
                o = a.n(n);
            let r = (e) => {
                    let { isActive: t } = e;
                    return (0, i.jsxs)('div', {
                        className: (0, l.$)(o().shimmer, o().donation),
                        children: [
                            (0, i.jsx)(s.W, { isActive: t, radius: 'round', className: o().shimmerCover }),
                            (0, i.jsxs)('div', {
                                className: o().shimmerContainer,
                                children: [
                                    (0, i.jsxs)('div', {
                                        className: o().shimmerText,
                                        children: [
                                            (0, i.jsx)(s.W, { isActive: t, radius: 'xxxl', className: o().shimmerArtist }),
                                            (0, i.jsx)(s.W, { isActive: t, radius: 'xxxl', className: o().shimmerGoal }),
                                        ],
                                    }),
                                    (0, i.jsx)(s.W, { isActive: t, radius: 'xxxl', className: o().shimmerButton }),
                                ],
                            }),
                        ],
                    });
                },
                c = (e) => Array.from({ length: 10 }, (t, a) => (0, i.jsx)(r, { isActive: e }, a));
        },
        74523: (e, t, a) => {
            'use strict';
            a.d(t, { C: () => i });
            let i = (e, t) => {
                let [a, i] = e.split('?'),
                    l = new URLSearchParams(i || '');
                for (let [e, a] of new URLSearchParams(t).entries()) l.set(e, a);
                let s = l.toString();
                return ''.concat(a).concat(s ? '?'.concat(s) : '');
            };
        },
        76768: (e) => {
            e.exports = {
                root: 'Disclaimer_root__ciLA2',
                container: 'Disclaimer_container__cB_wK',
                title: 'Disclaimer_title__I5hOj',
                text: 'Disclaimer_text__2Yo3R',
                link: 'Disclaimer_link__4UMOz',
                buttons: 'Disclaimer_buttons__mpL9o',
                button: 'Disclaimer_button__qIuMB',
                shimmer: 'Disclaimer_shimmer__Bg0HE',
            };
        },
        77435: (e, t, a) => {
            'use strict';
            a.d(t, { p: () => u });
            var i = a(32290),
                l = a(55178),
                s = a(99923),
                n = a(95481),
                o = a(26042),
                r = a(98148),
                c = a(24170);
            let d = (e) => {
                    let {
                            forwardRef: t,
                            isShimmerVisible: a,
                            isShimmerActive: d,
                            title: u,
                            description: m,
                            albums: b,
                            className: p,
                            containerClassName: v,
                            headerClassName: h,
                            viewAllActionLink: x,
                            headingRef: _,
                            headingVariant: j,
                            shouldSendAnalyticsOnLoaded: g,
                            ...A
                        } = e,
                        y = (0, n.f)();
                    return (
                        (0, l.useEffect)(() => {
                            g && y();
                        }, [y, g]),
                        (0, i.jsx)(r.O, {
                            isShimmerVisible: a,
                            isShimmerActive: d,
                            className: p,
                            headerClassName: h,
                            containerClassName: v,
                            ref: t,
                            title: u,
                            description: m,
                            viewAllActionLink: x,
                            headingRef: _,
                            headingVariant: j,
                            ...A,
                            children:
                                null == b
                                    ? void 0
                                    : b.map((e, t) =>
                                          (0, i.jsx)(
                                              o.B,
                                              {
                                                  objectType: s.DomainObjectType.Album,
                                                  objectId: String(e.id),
                                                  objectPosX: t + 1,
                                                  objectPosY: 1,
                                                  objectsCount: b.length,
                                                  children: (0, i.jsx)(c.a, {
                                                      album: e,
                                                      contentLinesCount: 3,
                                                      withAddition: !e.isNonMusic,
                                                      withLikesCount: e.isNonMusic,
                                                  }),
                                              },
                                              e.id,
                                          ),
                                      ),
                        })
                    );
                },
                u = (0, l.forwardRef)((e, t) => (0, i.jsx)(d, { forwardRef: t, ...e }));
        },
        78166: (e) => {
            e.exports = {
                root_hoverable: 'PageHeaderCover_root_hoverable__WF_BH',
                coverImage: 'PageHeaderCover_coverImage__i0wBv',
                coverImage_hoverable: 'PageHeaderCover_coverImage_hoverable__9XZK7',
                coverButton: 'PageHeaderCover_coverButton__3zeub',
                coverButton_hoverable: 'PageHeaderCover_coverButton_hoverable__hS1Gq',
                plusBadge: 'PageHeaderCover_plusBadge__O09t4',
            };
        },
        78648: (e, t, a) => {
            'use strict';
            a.d(t, { C8: () => s, UC: () => n, dM: () => o, uV: () => r });
            var i = a(87953),
                l = a(42464);
            let s = (e) => {
                    if (void 0 === e || '' === e) return 'missing';
                    let t = Number(e);
                    return !Number.isFinite(t) || t < 0 ? 'invalid' : t < 86400 ? 'lt-1d' : t <= 2592e3 ? '1-30d' : 'gt-30d';
                },
                n = (e) => (e.uid ? 'authorized' : 'no-uid'),
                o = (e) => {
                    if (!(e instanceof i.m5) || !(0, l.N)(e.cause)) return 'unexpected';
                    let t = ((e) => {
                        if (!(0, l.N)(e.cause)) return;
                        let t = e.cause.response;
                        if ('object' == typeof t && null !== t) {
                            if ('statusCode' in t && 'number' == typeof t.statusCode) return t.statusCode;
                            if ('status' in t && 'number' == typeof t.status) return t.status;
                        }
                    })(e);
                    return void 0 === t ? 'transport' : 401 === t ? '401' : t >= 400 && t < 500 ? '4xx' : t >= 500 && t < 600 ? '5xx' : 'unexpected';
                },
                r = (e) => {
                    try {
                        var t;
                        null == (t = window.musicDesktop) || t.authorization.reportDiagnostic(e);
                    } catch (e) {}
                };
        },
        79248: (e, t, a) => {
            'use strict';
            a.d(t, { r: () => c });
            var i = a(77307),
                l = a(55178),
                s = a(91027),
                n = a(83920),
                o = a(57594);
            let r = { width: 400, height: 400 },
                c = (e) => {
                    let { count: t, getEstimateSize: a, gap: c, containerRef: d, overscan: u = 2 } = e,
                        {
                            settings: { isMobile: m },
                        } = (0, o.g)(),
                        { contentScrollRef: b } = (0, n.g)(),
                        p = (0, l.useRef)(new Map()),
                        v = (0, l.useRef)(void 0),
                        h = {
                            count: t,
                            gap: c,
                            estimateSize: (e) => {
                                let t = p.current.get(String(e));
                                return null != t ? t : a(e);
                            },
                            overscan: u,
                            initialRect: r,
                            isScrollingResetDelay: 50,
                            scrollMargin: ((e, t, a) => {
                                if (!t) return 0;
                                let i = t.getBoundingClientRect().top;
                                return e && 1 ? i + window.scrollY : !e && a ? i + a.scrollTop : 0;
                            })(m, d, b),
                        },
                        x = (0, i.XW)(h),
                        _ = (0, i.Te)({ ...h, getScrollElement: () => b, initialOffset: null == b ? void 0 : b.scrollTop }),
                        j = m ? x : _,
                        g = (0, s.c)(() => {
                            j.measure();
                        });
                    return (
                        (0, l.useEffect)(() => {
                            v.current ||
                                (v.current = new ResizeObserver((e) => {
                                    let t = !1;
                                    (e.forEach((e) => {
                                        let a = e.target.getAttribute('data-index');
                                        if (e.target && a) {
                                            let i = e.contentRect.height;
                                            i && i !== p.current.get(a) && (p.current.set(a, e.contentRect.height), (t = !0));
                                        }
                                    }),
                                        t && g());
                                }));
                        }, [g]),
                        { virtualizer: j, resizeObserver: v.current }
                    );
                };
        },
        79897: (e, t, a) => {
            'use strict';
            a.d(t, { X: () => _ });
            var i = a(32290),
                l = a(63618),
                s = a(55178),
                n = a(60900),
                o = a(39407),
                r = a(85472),
                c = a(63423),
                d = a(82586),
                u = a(86269),
                m = a(71926),
                b = a(11323),
                p = a(61258),
                v = a(90011),
                h = a.n(v);
            let x = (e) => {
                    let { artist: t, goal: a, onNavigateToArtist: s, onNavigateToDonation: v, forwardRef: x, ..._ } = e,
                        { formatMessage: j } = (0, n.A)();
                    return (0, i.jsxs)('div', {
                        ref: x,
                        className: (0, l.$)(h().root, h().donation),
                        ...(0, r.getDataAttrFromProps)(_),
                        children: [
                            (0, i.jsx)(u.t, {
                                radius: 'round',
                                className: h().cover,
                                children: (0, i.jsx)(p.N, {
                                    href: t.url,
                                    onClick: s,
                                    'aria-label': j({ id: 'entity-names.artist-name' }, { artistName: t.name }),
                                    children: (0, i.jsx)(b.B, {
                                        className: h().image,
                                        src: t.coverUri,
                                        isAvailable: t.isAvailable,
                                        size: 200,
                                        fit: 'cover',
                                        withAvatarReplace: !0,
                                        'aria-hidden': !0,
                                    }),
                                }),
                            }),
                            (0, i.jsxs)('div', {
                                className: h().container,
                                children: [
                                    (0, i.jsxs)('div', {
                                        className: h().text,
                                        children: [
                                            (0, i.jsx)(m.DZ, { variant: 'span', size: 'xs', weight: 'bold', lineClamp: 2, className: h().artist, children: t.name }),
                                            (0, i.jsx)(m.HL, {
                                                variant: 'span',
                                                type: 'text',
                                                size: 'l',
                                                weight: 'medium',
                                                lineClamp: 2,
                                                className: h().goal,
                                                children: a,
                                            }),
                                        ],
                                    }),
                                    (0, i.jsxs)(c.$, {
                                        role: 'link',
                                        size: 's',
                                        color: 'secondary',
                                        onClick: v,
                                        className: h().label,
                                        withRipple: !1,
                                        children: [
                                            (0, i.jsx)(d.I, { variant: 'ruble', size: 'xxxs' }),
                                            (0, i.jsx)(m.HL, {
                                                type: 'text',
                                                size: 'm',
                                                weight: 'medium',
                                                variant: 'span',
                                                children: (0, i.jsx)(o.A, { id: 'donation.support-button' }),
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                        ],
                    });
                },
                _ = (0, s.forwardRef)((e, t) => (0, i.jsx)(x, { forwardRef: t, ...e }));
        },
        80097: (e, t, a) => {
            'use strict';
            a.d(t, { x: () => b });
            var i = a(32290),
                l = a(63618),
                s = a(55178),
                n = a(85472),
                o = a(75245),
                r = a(19620),
                c = a(49522),
                d = a(98307),
                u = a.n(d);
            let m = (e) => {
                    let {
                            className: t,
                            forwardRef: a,
                            headerClassName: d,
                            containerClassName: m,
                            headingVariant: b,
                            title: p,
                            viewAllActionLink: v,
                            description: h,
                            children: x,
                            ..._
                        } = e,
                        j = (0, s.useId)(),
                        g = (0, s.useRef)(null);
                    return (0, i.jsxs)('section', {
                        ref: a,
                        className: (0, l.$)(u().root, t),
                        ...(0, n.getDataAttrFromProps)(_),
                        children: [
                            (0, i.jsx)(r.T, {
                                className: d,
                                labeledForId: j,
                                title: p,
                                description: h,
                                viewAllActionLink: v,
                                controls: (0, i.jsx)(c.X, { className: u().controls, carouselRef: g }),
                                headingVariant: b,
                                withDescription: !!h,
                            }),
                            (0, i.jsx)(o.F, { ref: g, itemClassName: (0, l.$)(u().item, u().important), className: m, 'aria-labelledby': j, children: x }),
                        ],
                    });
                },
                b = (0, s.forwardRef)((e, t) => (0, i.jsx)(m, { forwardRef: t, ...e }));
        },
        86400: (e) => {
            e.exports = { root: 'LastEpisodes_root__4JPKj', blockHeader: 'LastEpisodes_blockHeader__se7bd', shimmerItem: 'LastEpisodes_shimmerItem__Iirx5' };
        },
        87151: (e, t, a) => {
            'use strict';
            a.d(t, { H: () => l });
            var i = a(65024);
            let l = function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
                return e.map((e) => ((0, i.C)(e) ? e : void 0)).filter((e) => void 0 !== e);
            };
        },
        87953: (e, t, a) => {
            'use strict';
            a.d(t, { GX: () => s.G, X1: () => i.X, m5: () => l.m });
            var i = a(50961),
                l = a(50891),
                s = a(10733);
            a(33898);
        },
        90011: (e) => {
            e.exports = {
                root: 'DonationCard_root__81nc5',
                donation: 'DonationCard_donation__SlArJ',
                cover: 'DonationCard_cover__Mqb3g',
                image: 'DonationCard_image__xABTn',
                container: 'DonationCard_container__1xkqs',
                text: 'DonationCard_text__mdeXx',
                artist: 'DonationCard_artist__xq4Jw',
                goal: 'DonationCard_goal__6BdcG',
                label: 'DonationCard_label__T_hDw',
                shimmer: 'DonationCard_shimmer__cMO7r',
                shimmerContainer: 'DonationCard_shimmerContainer__9ZH20',
                shimmerText: 'DonationCard_shimmerText__TrtjR',
                shimmerCover: 'DonationCard_shimmerCover__U6Rwp',
                shimmerArtist: 'DonationCard_shimmerArtist__jRQCV',
                shimmerGoal: 'DonationCard_shimmerGoal__UGSTd',
                shimmerButton: 'DonationCard_shimmerButton__LYfOm',
            };
        },
        90048: (e, t, a) => {
            'use strict';
            a.d(t, { S: () => s });
            var i = a(32290),
                l = a(85472);
            let s = (e) => {
                let { value: t } = e,
                    a = { '@context': 'https://schema.org', ...t };
                return (0, i.jsx)('script', { type: 'application/ld+json', dangerouslySetInnerHTML: { __html: (0, l.stringifyJSONSafely)(a) } });
            };
        },
        90840: (e, t, a) => {
            'use strict';
            a.d(t, { Q: () => d });
            var i = a(21916),
                l = a(55178),
                s = a(14257),
                n = a(50),
                o = a(74523),
                r = a(97201);
            let c = { [s.S.Light]: 'yandex_music', [s.S.Dark]: 'yandex_music_dark' },
                d = () => {
                    let e = (0, i.useSearchParams)(),
                        { theme: t } = (0, n.W)();
                    return (0, l.useCallback)(
                        (a) => {
                            if (!t) return a;
                            let i = new URLSearchParams(e);
                            i.set('wl', c[t]);
                            let l = e.get(r.K.UTM_CAMPAIGN);
                            return (l && i.set('meta', 'campaignid_'.concat(l)), (0, o.C)(a, i));
                        },
                        [t, e],
                    );
                };
        },
        91092: (e) => {
            e.exports = {
                menuControl: 'PageHeaderAlbumControls_menuControl__wlqyr',
                likeControl: 'PageHeaderAlbumControls_likeControl__eohAO',
                pinOrDonationControl: 'PageHeaderAlbumControls_pinOrDonationControl__3aFUW',
                trailerControl: 'PageHeaderAlbumControls_trailerControl___HcW0',
            };
        },
        92083: (e) => {
            e.exports = { popover: 'AlbumDonationMenu_popover__Fswfa' };
        },
        94805: (e, t, a) => {
            'use strict';
            a.d(t, { y: () => n });
            var i = a(85472),
                l = a(14257),
                s = a(50);
            let n = (e) => {
                let { theme: t } = (0, s.W)();
                if (e) {
                    let { r: a, g: s, b: n } = (0, i.hexToRgb)(e),
                        o = t === l.S.Light ? 0.15 : 0.7;
                    return 'rgba('.concat(a, ', ').concat(s, ', ').concat(n, ', ').concat(o, ')');
                }
            };
        },
        96151: (e, t, a) => {
            'use strict';
            var i;
            (a.d(t, { Q: () => i }),
                (function (e) {
                    ((e.FROM_ALBUM_COVER = 'from-album-cover'), (e.FROM_ARTIST_PHOTOS = 'from-artist-photos'), (e.PIC = 'pic'), (e.MOSAIC = 'mosaic'));
                })(i || (i = {})));
        },
        96434: (e, t, a) => {
            'use strict';
            a.d(t, { c: () => i });
            let i = (e) => {
                var t;
                if (null == e ? void 0 : e.isForeignAgent) return null == (t = e.resolvedForeignAgentData) ? void 0 : t.title;
            };
        },
        97404: (e) => {
            e.exports = { root: 'PlusPaywallButton_root__ftsxl', title: 'PlusPaywallButton_title__8PpX0', subtitle: 'PlusPaywallButton_subtitle__brC59' };
        },
        98252: (e) => {
            e.exports = { root: 'AlbumDonationMenuItem_root__Ajw_w', cover: 'AlbumDonationMenuItem_cover__Gg8_a', image: 'AlbumDonationMenuItem_image__AI5zU' };
        },
        98307: (e) => {
            e.exports = {
                root: 'DonationCarousel_root__Uejjw',
                controls: 'DonationCarousel_controls__anVvP',
                item: 'DonationCarousel_item__89_B6',
                important: 'DonationCarousel_important__Y52Es',
            };
        },
        98508: (e) => {
            e.exports = {
                meta: 'PageHeaderAlbumMeta_meta__zsMI8',
                artistCover: 'PageHeaderAlbumMeta_artistCover__L3jJ0',
                artistLabel: 'PageHeaderAlbumMeta_artistLabel__2WZSM',
                year: 'PageHeaderAlbumMeta_year__2X3NO',
                artists: 'PageHeaderAlbumMeta_artists__Nfdob',
                artistsSpoiler: 'PageHeaderAlbumMeta_artistsSpoiler__VOkfE',
                artistLink: 'PageHeaderAlbumMeta_artistLink__eTSrZ',
                year_dot: 'PageHeaderAlbumMeta_year_dot__TrSFr',
            };
        },
    },
]);
