(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [7062],
    {
        5537: (e, t, i) => {
            'use strict';
            i.d(t, { N: () => l });
            var r = i(57594),
                a = i(79406);
            let l = () => {
                var e, t;
                let {
                    user: i,
                    settings: { browserInfo: l },
                    experiments: s,
                } = (0, r.g)();
                return (
                    !(null == l ? void 0 : l.isTouch) &&
                    i.isAuthorized &&
                    !i.hasPlus &&
                    (null == (t = s.getExperiment(a.z.WebNextDesktopWebFreemium)) || null == (e = t.value) ? void 0 : e.closeListening) === 'on'
                );
            };
        },
        8626: (e, t, i) => {
            'use strict';
            i.d(t, { m: () => r });
            let r = () => ({ year: 'numeric' });
        },
        11262: (e, t, i) => {
            'use strict';
            i.d(t, { X: () => d });
            var r = i(32290),
                a = i(55178),
                l = i(91027),
                s = i(71730),
                n = i(45477),
                o = i(75582),
                c = i(49399);
            let d = (e, t) => {
                let { notify: i, dismiss: d } = (0, o.l)(),
                    u = (0, a.useRef)(void 0),
                    m = (0, l.c)(() => {
                        var i;
                        (d({ notificationId: u.current }), (u.current = 0));
                        let r = [...(null != (i = e.lastRejectedPagesList) ? i : [])].reverse().filter((t) => {
                            var i;
                            return (null == (i = e.pageStates) ? void 0 : i[t]) === c.G.REJECT;
                        });
                        (e.resetRejectedPagesState(),
                            r.forEach((e) => {
                                t(e);
                            }));
                    });
                (0, a.useEffect)(() => {
                    e.rejectedPagesCount > 0 && !u.current && (u.current = i((0, r.jsx)(s.L, { reloadBlocks: m }), { containerId: n.u.ERROR, autoClose: !1 }));
                }, [d, m, i, e.rejectedPagesCount]);
            };
        },
        11675: (e) => {
            e.exports = {
                root: 'PlaylistCard_root__i3pR4',
                controls: 'PlaylistCard_controls__Ej8Rz',
                cover: 'PlaylistCard_cover__tpK5L',
                coverBlock: 'PlaylistCard_coverBlock__1slsN',
                image: 'PlaylistCard_image__Li6oy',
                titleLink: 'PlaylistCard_titleLink__H8qEc',
                artists: 'PlaylistCard_artists__HtVIF',
                artistLink: 'PlaylistCard_artistLink__jx3KB',
                playButton: 'PlaylistCard_playButton__eaduk',
                likeButton: 'PlaylistCard_likeButton__RYXJz',
                menuButton: 'PlaylistCard_menuButton__jFcWr',
                pinButton: 'PlaylistCard_pinButton__jhWnL',
                trailerButton: 'PlaylistCard_trailerButton__Qjg_U',
                control: 'PlaylistCard_control__73YUq',
            };
        },
        13931: (e, t, i) => {
            'use strict';
            i.d(t, { r: () => l });
            var r = i(55178),
                a = i(60900);
            let l = (e) => {
                let { formatMessage: t } = (0, a.A)();
                return (0, r.useMemo)(() => {
                    let i = '';
                    e.isLiked && !e.actualLikesCount
                        ? (i = t({ id: 'entity-names.has-your-like' }))
                        : 'number' == typeof e.actualLikesCount &&
                          (i =
                              e.actualLikesCount > 0
                                  ? t({ id: 'entity-names.likes-counter' }, { counter: e.actualLikesCount })
                                  : t({ id: 'entity-names.likes-counter-empty' }));
                    let r = t({ id: 'entity-names.playlist-name' }, { playlistName: e.title });
                    return ''.concat(r, ' ').concat(i);
                }, [t, e]);
            };
        },
        15559: (e, t, i) => {
            'use strict';
            i.d(t, { v: () => a });
            var r = i(79406);
            let a = (e) => {
                let { checkExperiment: t, getDisclaimerContent: i, getExplicitContent: a, userRegion: l } = e;
                return 'ru' === l && t(r.z.WebNextFooterDisclaimer, 'on') ? i() : a();
            };
        },
        16510: (e) => {
            e.exports = { root: 'ArtistItem_root__Q_mgJ', image: 'ArtistItem_image__5rKWF', cover: 'ArtistItem_cover__FTvHo' };
        },
        22492: (e) => {
            e.exports = { icon: 'CardLikes_icon__l95lW', root: 'CardLikes_root__g8ala' };
        },
        25049: (e, t, i) => {
            'use strict';
            i.d(t, { J: () => a });
            var r = i(96151);
            let a = (e) => {
                var t;
                return e
                    ? {
                          playlistUuid: e.uuid,
                          available: e.isAvailable,
                          uid: e.uid,
                          kind: e.kind,
                          title: e.title || '',
                          revision: e.revision || 0,
                          snapshot: 0,
                          trackCount: e.tracksCount || 0,
                          visibility: e.visibility || 'public',
                          collective: !1,
                          created: '',
                          modified: '',
                          isBanner: !1,
                          isPremiere: !1,
                          durationMs: 0,
                          cover: { uri: e.coverUri || '', type: r.Q.PIC, prefix: '', custom: !1 },
                          ogImage: e.coverUri || '',
                          tags: [],
                          likesCount: e.likesCount || 0,
                          generatedPlaylistType: e.generatedPlaylistType || '',
                          trailer: { available: !!(null == (t = e.trailer) ? void 0 : t.isAvailable) },
                      }
                    : {
                          playlistUuid: '',
                          available: !0,
                          uid: 0,
                          kind: 0,
                          title: '',
                          revision: 0,
                          snapshot: 0,
                          trackCount: 0,
                          visibility: 'public',
                          collective: !1,
                          created: '',
                          modified: '',
                          isBanner: !1,
                          isPremiere: !1,
                          durationMs: 0,
                          cover: { uri: '', type: r.Q.PIC, prefix: '', custom: !1 },
                          ogImage: '',
                          tags: [],
                          likesCount: 0,
                          generatedPlaylistType: '',
                          trailer: { available: !0 },
                      };
            };
        },
        29268: (e, t, i) => {
            'use strict';
            i.d(t, { k: () => u });
            var r = i(32290),
                a = i(55178),
                l = i(60900),
                s = i(21732),
                n = i(63423),
                o = i(82586),
                c = i(59576);
            let d = (e) => {
                    let {
                            variant: t,
                            withRipple: i,
                            size: a,
                            radius: d,
                            iconSize: u,
                            disabled: m,
                            onClick: _,
                            iconClassName: p,
                            className: h,
                            forwardRef: v,
                            style: x,
                            children: g,
                        } = e,
                        { formatMessage: C } = (0, l.A)(),
                        y = C({ id: 'trailer.button-aria-label' });
                    return (0, r.jsx)(n.$, {
                        className: h,
                        color: 'secondary',
                        radius: d,
                        size: a,
                        variant: t,
                        withRipple: i,
                        flexIcon: !0,
                        'aria-label': y,
                        onClick: _,
                        ref: v,
                        icon: (0, r.jsx)(o.I, { variant: 'trailer', size: u, className: p }),
                        disabled: m,
                        'data-intersection-property-id': c.N,
                        style: x,
                        'data-test-id': s.S7.TRAILER_BUTTON,
                        children: g,
                    });
                },
                u = (0, a.forwardRef)((e, t) => (0, r.jsx)(d, { forwardRef: t, ...e }));
        },
        31010: (e, t, i) => {
            'use strict';
            i.d(t, { H: () => a, P: () => l });
            var r = i(55178);
            let a = (0, r.createContext)(null),
                l = () => (0, r.useContext)(a);
        },
        32468: (e, t, i) => {
            'use strict';
            i.d(t, { A: () => s });
            var r = i(32290),
                a = i(77088),
                l = i.n(a);
            let s = (e) => {
                let { children: t } = e;
                return (0, r.jsx)('footer', { className: l().empty });
            };
        },
        34925: (e, t, i) => {
            'use strict';
            i.d(t, { n: () => s });
            var r = i(32290),
                a = i(60900),
                l = i(70280);
            let s = (e) => {
                let { children: t } = e,
                    { formatMessage: i } = (0, a.A)();
                return (0, r.jsx)(l.m_, {
                    placement: 'top',
                    offsetOptions: 8,
                    hoverSettings: { delay: { open: 500, close: 0 } },
                    text: i({ id: 'entity-names.trailer' }),
                    isFocusEnabled: !1,
                    children: t,
                });
            };
        },
        39684: (e) => {
            e.exports = {
                root: 'VirtualScroll_root__pCptn',
                root_scrolling: 'VirtualScroll_root_scrolling__dsQ6K',
                root_notScrolling: 'VirtualScroll_root_notScrolling__x4qdd',
                scroller_withFooter: 'VirtualScroll_scroller_withFooter__ntDaU',
                scroller_withHeader: 'VirtualScroll_scroller_withHeader__9yzCK',
                scroller_withForceScroll: 'VirtualScroll_scroller_withForceScroll__w7q1L',
            };
        },
        40484: (e) => {
            e.exports = {
                root_clamp: 'SeparatedArtists_root_clamp__SyvjM',
                root_variant_breakAll: 'SeparatedArtists_root_variant_breakAll__34YbW',
                root_variant_breakWord: 'SeparatedArtists_root_variant_breakWord__1sziE',
                ellipsis: 'SeparatedArtists_ellipsis__0SUCv',
            };
        },
        41677: (e, t, i) => {
            'use strict';
            i.d(t, { i: () => B });
            var r = i(32290),
                a = i(63618),
                l = i(96103),
                s = i(55178),
                n = i(70280),
                o = i(57594),
                c = i(53514),
                d = i(40484),
                u = i.n(d),
                m = i(60900),
                _ = i(99923),
                p = i(21732),
                h = i(91027),
                v = i(71926),
                x = i(47745),
                g = i(32641),
                C = i(28999),
                y = i(61258),
                f = i(19383);
            let k = (0, l.PA)((e) => {
                    let {
                            artist: t,
                            withLink: i = !0,
                            linkClassName: a,
                            captionClassName: l,
                            captionSize: s = 'm',
                            allArtistsTitle: c,
                            withCustomTooltip: d,
                            hoverSettings: u,
                        } = e,
                        { formatMessage: k } = (0, m.A)(),
                        {
                            track: S,
                            settings: { isMobile: N },
                        } = (0, o.g)(),
                        P = (0, g.Z)(t.url),
                        { sendNavigateSearchFeedback: A } = (0, C.z)(),
                        E = (0, x.N)(),
                        j = ((e) => {
                            let { artist: t, callback: i } = e,
                                { currentTrackInfo: r, fullscreenPlayer: a, fullscreenVideoPlayer: l } = (0, o.g)(),
                                { modal: s } = r;
                            return (0, f.l)({
                                entity: t,
                                callback: i,
                                onBeforeHandle: (e) => {
                                    (null == e || e.stopPropagation(), s.isOpened && (r.reset(), s.close()), a.modal.isOpened && a.modal.close());
                                },
                                onAfterHandled: () => {
                                    l.modal.isOpened && (l.modal.close(), l.reset());
                                },
                                preventDefaultWhenSafe: !0,
                            });
                        })({
                            artist: t,
                            callback: (0, h.c)((e) => {
                                (N && S.isOpened && S.close(), P(e));
                            }),
                        }),
                        L = (0, h.c)((e) => {
                            (E({ to: _.AppScreen.ArtistScreen }), null == A || A(), j(e));
                        });
                    return i && !t.various
                        ? (0, r.jsx)(y.N, {
                              'aria-label': k({ id: 'entity-names.artist-name' }, { artistName: t.name }),
                              className: a,
                              href: t.url,
                              onClick: L,
                              title: d ? void 0 : c || t.name,
                              'data-test-id': p.OA.artists.SEPARATED_ARTIST_TITLE,
                              children: (0, r.jsx)(n.m_, {
                                  enabled: !c && d,
                                  offsetOptions: 4,
                                  placement: 'top',
                                  text: c || t.name,
                                  hoverSettings: u,
                                  children: (0, r.jsx)(v.HL, { variant: 'span', type: 'entity', size: s, weight: 'medium', className: l, children: t.name }),
                              }),
                          })
                        : (0, r.jsx)(n.m_, {
                              enabled: !c && d,
                              offsetOptions: 4,
                              placement: 'top',
                              text: c || t.name,
                              hoverSettings: u,
                              children: (0, r.jsx)(v.HL, {
                                  variant: 'span',
                                  type: 'entity',
                                  size: s,
                                  weight: 'medium',
                                  className: l,
                                  title: d ? void 0 : c || t.name,
                                  'data-test-id': p.OA.artists.SEPARATED_ARTIST_TITLE,
                                  children: t.name,
                              }),
                          });
                }),
                S = (e) => {
                    let {
                            artist: t,
                            withLink: i = !0,
                            linkClassName: a,
                            captionClassName: l,
                            captionSize: n,
                            allArtistsTitle: o,
                            withCustomTooltip: c,
                            hoverSettings: d,
                            shouldUseSeparator: u = !0,
                        } = e,
                        m = (0, s.useMemo)(() => {
                            var e;
                            return null == (e = t.decomposed)
                                ? void 0
                                : e.reduce(
                                      (e, t) =>
                                          e.concat([
                                              u ? t.separator : '',
                                              (0, r.jsx)(
                                                  k,
                                                  {
                                                      artist: t,
                                                      withLink: i,
                                                      linkClassName: a,
                                                      captionClassName: l,
                                                      captionSize: n,
                                                      allArtistsTitle: o,
                                                      withCustomTooltip: c,
                                                      hoverSettings: d,
                                                  },
                                                  t.id,
                                              ),
                                          ]),
                                      [],
                                  );
                        }, [t.decomposed, u, i, a, l, n, o, c, d]);
                    return (0, r.jsxs)(r.Fragment, {
                        children: [
                            (0, r.jsx)(k, {
                                artist: t,
                                withLink: i,
                                linkClassName: a,
                                captionClassName: l,
                                captionSize: n,
                                allArtistsTitle: o,
                                withCustomTooltip: c,
                                hoverSettings: d,
                            }),
                            m,
                        ],
                    });
                };
            var N = i(39407),
                P = i(63887);
            let A = (e) => {
                let { spoilerArtistsCount: t, spoilerClassName: i, handleOnSpoilerClick: l } = e;
                return (0, r.jsxs)(r.Fragment, {
                    children: [
                        ' ',
                        (0, r.jsx)(P.N, {
                            role: 'button',
                            href: '',
                            className: (0, a.$)(u().spoiler, i),
                            onClick: l,
                            rel: 'nofollow',
                            'data-test-id': p.OA.artists.SEPARATED_ARTISTS_SPOILER,
                            children: (0, r.jsx)(N.A, { id: 'entity-names.number-of-more-artists', values: { counter: t } }),
                        }),
                    ],
                });
            };
            var E = i(8055),
                j = i(6752),
                L = i(78035),
                R = i(78176),
                T = i(83598),
                b = i.n(T);
            let I = (0, l.PA)((e) => {
                    let { label: t, artists: i, forwardRef: a } = e;
                    return (0, r.jsxs)(n.m_, {
                        enableAriaDescribedby: !1,
                        isFocusEnabled: !1,
                        placement: 'top',
                        hoverSettings: { delay: 200, handleClose: (0, L.safePolygon)({ blockPointerEvents: !0 }) },
                        children: [
                            (0, r.jsx)('div', { ref: a, children: t }),
                            (0, r.jsx)(n.ZI, { className: b().tooltipContent, children: i.map((e) => (0, r.jsx)(R.V, { artist: e, className: b().artistItem }, e.id)) }),
                        ],
                    });
                }),
                O = (0, s.forwardRef)((e, t) => (0, r.jsx)(I, { forwardRef: t, ...e }));
            var w = i(19740),
                M = i(52598),
                D = i.n(M);
            let F = (0, l.PA)((e) => {
                    let { label: t, artists: i } = e,
                        { formatMessage: l } = (0, m.A)();
                    return (0, r.jsx)(w.W1, {
                        isMobile: !0,
                        className: (0, a.$)(D().root, D().important),
                        label: t,
                        ariaLabel: l({ id: 'interface-actions.context-menu-artists' }),
                        children: i.map((e) => (0, r.jsx)(R.V, { artist: e }, e.id)),
                    });
                }),
                z = (0, l.PA)((e) => {
                    let { artists: t = [], label: i, labelRef: a } = e,
                        [l, n] = (0, s.useState)(!1),
                        {
                            settings: { isMobile: c },
                        } = (0, o.g)(),
                        d = (0, h.c)(() => {
                            let e = a.current;
                            e && n(e.scrollHeight > e.clientHeight || e.scrollWidth > e.clientWidth);
                        }),
                        u = (0, j.L)(() =>
                            (0, E.A)(() => {
                                d();
                            }, 100),
                        );
                    if (
                        ((0, s.useEffect)(
                            () => (
                                window.addEventListener('resize', u),
                                d(),
                                () => {
                                    window.removeEventListener('resize', u);
                                }
                            ),
                            [u, d],
                        ),
                        (0, s.useEffect)(() => {
                            d();
                        }, [t, d]),
                        0 !== t.length)
                    )
                        return (l || c) && (!c || 1 !== t.length) ? (c ? (0, r.jsx)(F, { artists: t, label: i }) : (0, r.jsx)(O, { artists: t, label: i })) : i;
                }),
                B = (0, l.PA)((e) => {
                    let {
                            className: t,
                            artists: i = [],
                            separator: l = ', ',
                            lineClamp: d,
                            visibleArtistsCount: m,
                            withLink: _ = !0,
                            spoilerClassName: p,
                            linkClassName: h,
                            captionClassName: v,
                            captionSize: x,
                            variant: g = 'breakAll',
                            withAllArtistsTitle: C = !0,
                            withComposer: y = !0,
                            spoilerComponent: f,
                            withCustomTooltip: k = !0,
                            artistIdWithoutLink: N,
                            withContextMenu: P,
                        } = e,
                        E = (0, s.useRef)(null),
                        [j, L] = (0, s.useState)(!1),
                        R = C
                            ? i
                                  .reduce(function () {
                                      let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
                                          t = arguments.length > 1 ? arguments[1] : void 0;
                                      if (t.decomposed) {
                                          let i = t.decomposed.reduce((e, t) => e.concat([t.name]), []);
                                          return e.length ? e.concat([t.name, ...i]) : [t.name, ...i];
                                      }
                                      return e.length ? (e.push(t.name), e) : [t.name];
                                  }, [])
                                  .join(l)
                            : '',
                        {
                            settings: { isMobile: T },
                        } = (0, o.g)(),
                        b = 1 === i.length,
                        I = (0, s.useCallback)((e) => {
                            (L(!0), e.preventDefault());
                        }, []),
                        O = (0, s.useMemo)(() => {
                            let e = i;
                            return (
                                m && !j && (e = i.slice(0, m)),
                                e.reduce((e, t) => {
                                    if (!y && t.isComposer) return e.length ? e : [];
                                    let i = (0, r.jsx)(
                                        S,
                                        {
                                            artist: t,
                                            linkClassName: h,
                                            captionClassName: v,
                                            withLink: _ && t.id !== N && (((!T || b) && P) || !P),
                                            captionSize: x,
                                            allArtistsTitle: R,
                                            withCustomTooltip: k,
                                            hoverSettings: c.V,
                                            shouldUseSeparator: !!l,
                                        },
                                        t.key,
                                    );
                                    return e.length ? e.concat([l, i]) : [i];
                                }, [])
                            );
                        }, [i, m, j, y, T, b, P, h, v, _, N, x, R, k, l]),
                        w = (0, s.useMemo)(() => {
                            if (!j && m && m < i.length) {
                                let e = i.length - m;
                                return (0, s.isValidElement)(f) ? f : (0, r.jsx)(A, { spoilerClassName: p, spoilerArtistsCount: e, handleOnSpoilerClick: I });
                            }
                        }, [i.length, I, j, p, f, m]),
                        M = (0, s.useMemo)(() => {
                            if (d) return { WebkitLineClamp: d };
                        }, [d]),
                        D = (0, r.jsx)(n.m_, {
                            referenceRef: E,
                            enabled: !!(C && R) && k && !P && !T,
                            offsetOptions: 4,
                            placement: 'top',
                            text: R,
                            hoverSettings: c.V,
                            children: (0, r.jsxs)('div', {
                                style: M,
                                className: (0, a.$)(u().root, u()['root_variant_'.concat(g)], { [u().root_clamp]: d && d > 0 }, { [u().ellipsis]: !d }, t),
                                title: C && R && !k && !P ? R : void 0,
                                children: [O, w],
                            }),
                        });
                    return P ? (0, r.jsx)(z, { labelRef: E, artists: i, label: D }) : D;
                });
        },
        45257: (e, t, i) => {
            'use strict';
            i.d(t, { $: () => v });
            var r = i(32290),
                a = i(63618),
                l = i(8055),
                s = i(55178);
            let n = (e) => {
                    let { style: t, forwardRef: i, context: a, ...l } = e,
                        s = (null == a ? void 0 : a.listAriaLabel) || void 0,
                        n = (null == a ? void 0 : a.listRole) || 'region';
                    return (0, r.jsx)('div', { 'aria-labelledby': 'virtual-grid-header', role: n, 'aria-label': s, style: { ...t }, ref: i, ...l });
                },
                o = (0, s.forwardRef)((e, t) => (0, r.jsx)(n, { forwardRef: t, ...e }));
            var c = i(39684),
                d = i.n(c);
            let u = (e) => {
                    let { style: t, forwardRef: i, withFooter: l, withHeader: s, withForceScroll: n, ...o } = e;
                    return (0, r.jsx)('div', {
                        className: (0, a.$)(d().scroller, { [d().scroller_withFooter]: l, [d().scroller_withHeader]: s, [d().scroller_withForceScroll]: n }),
                        style: { ...t },
                        ref: i,
                        ...o,
                        tabIndex: -1,
                    });
                },
                m = (0, s.forwardRef)((e, t) => (0, r.jsx)(u, { forwardRef: t, ...e }));
            var _ = i(62060),
                p = i(31417);
            let h = (e) => {
                    let {
                            pageSize: t,
                            onPageHandler: i,
                            onRangeHandler: a,
                            debounceDurationInMs: l = 100,
                            totalCount: n = 0,
                            shouldTriggerRangeChangedOn: o = [],
                            endReached: c,
                            virtuosoRef: d,
                            ...u
                        } = e,
                        [m, h] = (0, s.useState)(null),
                        v = (0, s.useMemo)(
                            () =>
                                (0, _.A)((e) => {
                                    if ((null == a || a(e), o.length > 0 && h(e), t && i)) {
                                        let r = Math.floor(e.endIndex / t) + 1,
                                            a = Math.floor(e.startIndex / t);
                                        for (let e = a; e < r; e++) i(e);
                                    }
                                }, l),
                            [l, a, t, i, o],
                        );
                    (0, s.useEffect)(() => {
                        o.length > 0 && m && v(m);
                    }, o);
                    let x = (0, s.useMemo)(() => {
                        if (c)
                            return (0, _.A)((e) => {
                                c(e);
                            }, l);
                    }, [c, l]);
                    return (0, r.jsx)(p.sN, { ref: d, rangeChanged: v, totalCount: n, endReached: x, ...u });
                },
                v = (e) => {
                    let {
                            className: t,
                            customComponents: i,
                            onGetDataByPage: n,
                            onGetDataByRange: c,
                            itemClassName: u,
                            itemContentCallback: _,
                            listClassName: p,
                            overscan: v = 700,
                            pageSize: x = 20,
                            totalCount: g,
                            totalRequests: C,
                            debounceDurationInMs: y,
                            initialItemCount: f,
                            minInitialItemCount: k = 20,
                            handleRef: S,
                            alwaysShowScrollbar: N = !1,
                            testId: P,
                            isMobileLayout: A = !1,
                            shouldTriggerRangeChangedOn: E,
                            ...j
                        } = e,
                        [L, R] = (0, s.useState)(!1),
                        T = (0, s.useMemo)(
                            () =>
                                (0, l.A)((e) => {
                                    R(e);
                                }, 100),
                            [],
                        ),
                        b = (0, s.useMemo)(() => {
                            var e, t;
                            return A
                                ? {
                                      Scroller: m,
                                      List: null != (e = null == i ? void 0 : i.List) ? e : o,
                                      Item: null == i ? void 0 : i.Item,
                                      ScrollSeekPlaceholder: null == i ? void 0 : i.ScrollSeekPlaceholder,
                                  }
                                : {
                                      Scroller: m,
                                      List: null != (t = null == i ? void 0 : i.List) ? t : o,
                                      Item: null == i ? void 0 : i.Item,
                                      Header: null == i ? void 0 : i.Header,
                                      Footer: null == i ? void 0 : i.Footer,
                                      ScrollSeekPlaceholder: null == i ? void 0 : i.ScrollSeekPlaceholder,
                                  };
                        }, [i, C, A]),
                        I = f ? Math.min(f, k) : void 0;
                    return (0, r.jsxs)('div', {
                        className: (0, a.$)(d().root, { [d().root_scrolling]: L || N, [d().root_notScrolling]: !L && !N }, t),
                        'data-test-id': P,
                        children: [
                            A && (null == i ? void 0 : i.Header) && i.Header(),
                            (0, r.jsx)(h, {
                                overscan: v,
                                components: b,
                                listClassName: p,
                                itemClassName: u,
                                isScrolling: T,
                                itemContent: _,
                                scrollerRef: S,
                                totalCount: g,
                                pageSize: x,
                                onPageHandler: n,
                                onRangeHandler: c,
                                debounceDurationInMs: y,
                                initialItemCount: I,
                                shouldTriggerRangeChangedOn: E,
                                ...j,
                            }),
                            A && (null == i ? void 0 : i.Footer) && i.Footer(),
                        ],
                    });
                };
        },
        50308: (e, t, i) => {
            'use strict';
            i.d(t, { e: () => l });
            var r = i(32290),
                a = i(89020);
            let l = (e) => {
                let {
                    isActive: t,
                    itemClassName: i,
                    round: l,
                    centered: s,
                    withInfo: n,
                    count: o = 10,
                    shimmerClassName: c,
                    linesCount: d,
                    'aria-label': u,
                    withSubcover: m,
                } = e;
                return Array.from(Array(o).keys()).map((e) =>
                    (0, r.jsx)(
                        a.V,
                        { isActive: t, linesCount: d, className: i, round: l, centered: s, withInfo: n, withSubcover: m, 'aria-label': u, shimmerClassName: c },
                        e,
                    ),
                );
            };
        },
        52598: (e) => {
            e.exports = { root: 'SeparatedArtistsWithContextMenuMobile_root__4BiJL', important: 'SeparatedArtistsWithContextMenuMobile_important__fSF1h' };
        },
        53514: (e, t, i) => {
            'use strict';
            i.d(t, { V: () => r });
            let r = { delay: { open: 1e3, close: 0 } };
        },
        57594: (e, t, i) => {
            'use strict';
            i.d(t, { P: () => l, g: () => s });
            var r = i(55178),
                a = i(25090);
            let l = (0, r.createContext)(null);
            function s() {
                let e = (0, r.useContext)(l);
                if (null === e) throw new a.t('Store cannot be null, please add a context provider', { code: 'E_CONTEXT_STORE_NULL' });
                return e;
            }
        },
        61376: (e, t, i) => {
            'use strict';
            i.d(t, { x: () => m });
            var r = i(32290),
                a = i(63618),
                l = i(60900),
                s = i(21732),
                n = i(63423),
                o = i(82586),
                c = i(71926),
                d = i(22492),
                u = i.n(d);
            let m = (e) => {
                let { className: t, isLiked: i, likesCount: d, handleLikeClick: m, ariaLabel: _ } = e,
                    { formatNumber: p } = (0, l.A)();
                return (0, r.jsx)(n.$, {
                    className: (0, a.$)(u().root, t),
                    onClick: m,
                    variant: 'text',
                    withRipple: !1,
                    icon: (0, r.jsx)(o.I, { variant: i ? 'likedVariant' : 'likeVariant', size: 'xxs', className: u().icon }),
                    'aria-label': _,
                    'data-test-id': s.S7.CARD_LIKES,
                    children: (0, r.jsx)(c.HL, { variant: 'div', size: 's', type: 'entity', weight: 'medium', children: p(d) }),
                });
            };
        },
        62376: (e, t, i) => {
            'use strict';
            i.d(t, { U: () => l });
            var r = i(70204),
                a = i(34186);
            let l = () => (0, a.N)().get(r.Zf);
        },
        69796: (e, t, i) => {
            'use strict';
            i.d(t, { El: () => n, I7: () => o, K$: () => s, cM: () => d, fZ: () => a, tA: () => l, vX: () => r, xi: () => c });
            let r = 16,
                a = 16,
                l = 315,
                s = 170,
                n = 270,
                o = 7,
                c = 30,
                d = 30;
        },
        70718: (e) => {
            e.exports = {
                root: 'NotificationReloadBlocks_root__qNd_1',
                important: 'NotificationReloadBlocks_important__QsAfb',
                text: 'NotificationReloadBlocks_text__TN_U0',
                icon: 'NotificationReloadBlocks_icon__vVN__',
                button: 'NotificationReloadBlocks_button__uXYiL',
                message: 'NotificationReloadBlocks_message__uQ1hC',
            };
        },
        71730: (e, t, i) => {
            'use strict';
            i.d(t, { L: () => p });
            var r = i(32290),
                a = i(63618),
                l = i(55178),
                s = i(60900),
                n = i(39407),
                o = i(63423),
                c = i(82586),
                d = i(71926),
                u = i(58534),
                m = i(70718),
                _ = i.n(m);
            let p = (e) => {
                let { reloadBlocks: t, closeToast: i } = e,
                    m = (0, l.useRef)(null),
                    { formatMessage: p } = (0, s.A)();
                (0, l.useEffect)(() => {
                    var e;
                    null == (e = m.current) || e.focus();
                }, []);
                let h = (0, l.useMemo)(
                    () =>
                        (0, r.jsxs)('div', {
                            className: _().message,
                            children: [
                                (0, r.jsx)(d.HL, {
                                    className: _().text,
                                    variant: 'div',
                                    type: 'controls',
                                    size: 'm',
                                    children: (0, r.jsx)(n.A, { id: 'error-messages.error-load-part-page' }),
                                }),
                                (0, r.jsx)(o.$, {
                                    ref: m,
                                    className: _().button,
                                    onClick: t,
                                    variant: 'text',
                                    'aria-label': p({ id: 'interface-actions.reload-part-page' }),
                                    icon: (0, r.jsx)(c.I, { variant: 'reset', size: 'xxs', className: _().icon }),
                                }),
                            ],
                        }),
                    [p, t],
                );
                return (0, r.jsx)(u.$, { className: (0, a.$)(_().root, _().important), message: h, closeToast: i });
            };
        },
        72560: (e, t, i) => {
            Promise.resolve().then(i.bind(i, 97554));
        },
        73141: (e, t, i) => {
            'use strict';
            i.d(t, { K: () => h });
            var r = i(32290),
                a = i(92708),
                l = i(55178),
                s = i(60900),
                n = i(63380),
                o = i(45477),
                c = i(75582),
                d = i(57594),
                u = i(90357),
                m = i(97647),
                _ = i(97755);
            let p = (e) => {
                    let { playlist: t, closeToast: i } = e;
                    return (0, r.jsx)(_.O, {
                        entityVariant: m.c.PLAYLIST,
                        entityUrl: t.url,
                        collectionUrl: '/collection',
                        entityTitle: t.title,
                        isLiked: t.isLiked,
                        closeToast: i,
                        coverUri: t.coverUri,
                    });
                },
                h = (e) => {
                    let { user: t } = (0, d.g)(),
                        { notify: i } = (0, c.l)(),
                        [m, _] = (0, l.useState)(!1),
                        { formatMessage: h } = (0, s.A)();
                    return (0, l.useCallback)(async () => {
                        if (!t.isAuthorized)
                            return void i((0, r.jsx)(u.h, { error: h({ id: 'authorization-messages.need-to-authorizate' }) }), { containerId: o.u.ERROR });
                        if (m) return;
                        let l = { ...(0, a.HO)(e), url: e.url, isLiked: !e.isLiked };
                        _(!0);
                        let s = await e.toggleLike();
                        (_(!1),
                            s === n.f.OK
                                ? i((0, r.jsx)(p, { playlist: l }), { containerId: o.u.INFO })
                                : i((0, r.jsx)(u.h, { error: h({ id: 'error-messages.error-during-action' }) }), { containerId: o.u.ERROR }));
                    }, [t.isAuthorized, m, e, h, i]);
                };
        },
        73192: (e, t, i) => {
            'use strict';
            i.d(t, { A: () => p });
            var r = i(32290),
                a = i(92708),
                l = i(55178),
                s = i(60900),
                n = i(45477),
                o = i(75582),
                c = i(57594),
                d = i(90357),
                u = i(97647),
                m = i(8097);
            let _ = (e) => {
                    let { playlist: t, closeToast: i } = e;
                    return (0, r.jsx)(m.k, {
                        closeToast: i,
                        entityVariant: u.c.PLAYLIST,
                        entityUrl: t.url,
                        coverUri: t.coverUri,
                        entityTitle: t.title,
                        isPinned: t.isPinned,
                        radius: 's',
                    });
                },
                p = (e) => {
                    let { user: t } = (0, c.g)(),
                        { notify: i } = (0, o.l)(),
                        { formatMessage: u } = (0, s.A)(),
                        [m, p] = (0, l.useState)(!1);
                    return (0, l.useCallback)(async () => {
                        if (!t.isAuthorized)
                            return void i((0, r.jsx)(d.h, { error: u({ id: 'authorization-messages.need-to-authorizate' }) }), { containerId: n.u.ERROR });
                        if (m) return;
                        let l = { ...(0, a.HO)(e), url: e.url, isPinned: !e.isPinned };
                        p(!0);
                        let s = await e.togglePin();
                        (p(!1),
                            s
                                ? i((0, r.jsx)(_, { playlist: l }), { containerId: n.u.INFO })
                                : i((0, r.jsx)(d.h, { error: u({ id: 'error-messages.error-during-action' }) }), { containerId: n.u.ERROR }));
                    }, [t.isAuthorized, m, e, i, u]);
                };
        },
        77088: (e) => {
            e.exports = {
                root: 'Footer_root__ugyur',
                root_withOffsetForDeeplink: 'Footer_root_withOffsetForDeeplink__qcs6U',
                important: 'Footer_important__mCXZp',
                links: 'Footer_links__3kOY7',
                list: 'Footer_list__0sCXQ',
                copyrights: 'Footer_copyrights__IsnbJ',
                link: 'Footer_link__av50q',
                copyrightLink: 'Footer_copyrightLink__6NOkg',
                yandexMusicLink: 'Footer_yandexMusicLink__k7ILf',
                explicitText: 'Footer_explicitText__Px3wr',
                text: 'Footer_text__lMPwl',
                empty: 'Footer_empty__RR_zf',
            };
        },
        78061: (e, t, i) => {
            'use strict';
            i.d(t, { Jt: () => l, TF: () => n, hZ: () => s });
            var r = function () {
                return (r =
                    Object.assign ||
                    function (e) {
                        for (var t, i = 1, r = arguments.length; i < r; i++)
                            for (var a in (t = arguments[i])) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                        return e;
                    }).apply(this, arguments);
            };
            function a(e, t) {
                if (!t) return '';
                var i = '; ' + e;
                return !0 === t ? i : i + '=' + t;
            }
            function l(e) {
                return (function (e) {
                    for (var t = {}, i = e ? e.split('; ') : [], r = 0; r < i.length; r++) {
                        var a = i[r].split('='),
                            l = a.slice(1).join('=');
                        '"' === l[0] && (l = l.slice(1, -1));
                        try {
                            t[decodeURIComponent(a[0])] = l.replace(/(%[\dA-F]{2})+/gi, decodeURIComponent);
                        } catch (e) {}
                    }
                    return t;
                })(document.cookie)[e];
            }
            function s(e, t, i) {
                var l;
                document.cookie =
                    ((l = r({ path: '/' }, i)),
                    encodeURIComponent(e)
                        .replace(/%(2[346B]|5E|60|7C)/g, decodeURIComponent)
                        .replace(/\(/g, '%28')
                        .replace(/\)/g, '%29') +
                        '=' +
                        encodeURIComponent(t).replace(/%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g, decodeURIComponent) +
                        (function (e) {
                            if ('number' == typeof e.expires) {
                                var t = new Date();
                                (t.setMilliseconds(t.getMilliseconds() + 864e5 * e.expires), (e.expires = t));
                            }
                            return (
                                a('Expires', e.expires ? e.expires.toUTCString() : '') +
                                a('Domain', e.domain) +
                                a('Path', e.path) +
                                a('Secure', e.secure) +
                                a('SameSite', e.sameSite)
                            );
                        })(l));
            }
            function n(e, t) {
                s(e, '', r(r({}, t), { expires: -1 }));
            }
        },
        78176: (e, t, i) => {
            'use strict';
            i.d(t, { V: () => C });
            var r = i(32290),
                a = i(63618),
                l = i(96103),
                s = i(55178),
                n = i(99923),
                o = i(21732),
                c = i(91027),
                d = i(50162),
                u = i(19740),
                m = i(86269),
                _ = i(71926),
                p = i(47745),
                h = i(32641),
                v = i(57594),
                x = i(16510),
                g = i.n(x);
            let C = (0, l.PA)((e) => {
                let { artist: t, className: i } = e,
                    { fullscreenPlayer: l } = (0, v.g)(),
                    x = (0, h.Z)(t.url),
                    y = (0, p.N)(),
                    f = (0, s.useMemo)(() => {
                        var e;
                        return (
                            'decomposed' in t &&
                            (null == (e = t.decomposed) ? void 0 : e.reduce((e, t) => (e.push((0, r.jsx)(C, { artist: t, className: i }, t.id)), e), []))
                        );
                    }, [t, i]),
                    k = (0, c.c)((e) => {
                        (l.modal.isOpened && l.modal.close(), y({ to: n.AppScreen.ArtistScreen }), x(e));
                    });
                return (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsxs)(u.Dr, {
                            className: (0, a.$)(g().root, i),
                            onClick: k,
                            'data-test-id': o.OA.artists.ARTIST_ITEM,
                            children: [
                                (0, r.jsx)(m.t, {
                                    radius: 'round',
                                    className: g().cover,
                                    children: (0, r.jsx)(d._V, { withAvatarReplace: !0, src: t.coverUri, size: 100, fit: 'contain', className: g().image }),
                                }),
                                (0, r.jsx)(_.HL, { variant: 'span', size: 'm', weight: 'medium', lineClamp: 1, children: t.name }),
                            ],
                        }),
                        f,
                    ],
                });
            });
        },
        80556: (e) => {
            e.exports = {
                root: 'EntityCardShimmer_root__Sh7ah',
                subcover: 'EntityCardShimmer_subcover__ESt3R',
                cover: 'EntityCardShimmer_cover__BXtjT',
                cover_round: 'EntityCardShimmer_cover_round__Ci3zW',
                cover_withSubcover: 'EntityCardShimmer_cover_withSubcover__v9l5y',
                infoContainer: 'EntityCardShimmer_infoContainer__22kYk',
                infoContainer_centered: 'EntityCardShimmer_infoContainer_centered__cxlPO',
                title: 'EntityCardShimmer_title__GQ2jX',
                title_withSubcover: 'EntityCardShimmer_title_withSubcover__lBHBC',
                content_linesCount_1: 'EntityCardShimmer_content_linesCount_1__JHlue',
                content_linesCount_2: 'EntityCardShimmer_content_linesCount_2__CMvO5',
                content_linesCount_3: 'EntityCardShimmer_content_linesCount_3__mPzav',
                content_linesCount_4: 'EntityCardShimmer_content_linesCount_4__8KtHO',
            };
        },
        83460: (e, t, i) => {
            'use strict';
            i.d(t, { B: () => Q });
            var r = i(32290),
                a = i(63618),
                l = i(96103),
                s = i(55178),
                n = i(60900),
                o = i(99923),
                c = i(21732),
                d = i(71483),
                u = i(91027),
                m = i(6752),
                _ = i(14934),
                p = i(82586),
                h = i(86269),
                v = i(71926),
                x = i(41677),
                g = i(73141),
                C = i(73192),
                y = i(71735),
                f = i(47745),
                k = i(2969),
                S = i(54391),
                N = i(23352),
                P = i(72396),
                A = i(5537),
                E = i(32641),
                j = i(28999),
                L = i(90169),
                R = i(57594),
                T = i(61376),
                b = i(11323),
                I = i(92744),
                O = i(61258),
                w = i(10180),
                M = i(90326),
                D = i(29268),
                F = i(34925),
                z = i(13931),
                B = i(19740),
                H = i(9017),
                Y = i(65477),
                U = i(46200),
                W = i(27120),
                V = i(95134),
                K = i(79406),
                X = i(58237),
                $ = i(56367),
                G = i(83755);
            let J = (0, l.PA)((e) => {
                var t;
                let { playlist: i, onOpenChange: a, open: l, ...s } = e,
                    { shouldShowBuySubscriptionModal: d, showBuySubscriptionModal: m } = (0, U.q)(),
                    {
                        experiments: _,
                        settings: { isMobile: p },
                        trailer: h,
                        user: v,
                    } = (0, R.g)(),
                    x = (0, g.K)(i),
                    f = (0, C.A)(i),
                    k = (0, S.F)(),
                    { formatMessage: N } = (0, n.A)(),
                    P = (0, y.P)(),
                    A = _.checkExperiment(K.z.WebEditorsFeatures, 'on'),
                    E = (0, H.A)({ entityVariant: V.D.PLAYLIST, urlParams: { id: i.uid, kind: i.kind } });
                (0, W.N)(l);
                let j = (0, u.c)(() => {
                    if (d) return void m();
                    P() || (h.openPlaylistTrailer(i.id), k(o.DomainObjectType.Playlist, i.id));
                });
                return (0, r.jsxs)(B.W1, {
                    title: i.title,
                    onOpenChange: a,
                    open: l,
                    offsetOptions: 10,
                    isMobile: p,
                    ariaLabel: N({ id: 'interface-actions.context-menu' }),
                    containerDataTestId: c.Kq.playlist.PLAYLIST_CONTEXT_MENU,
                    ...s,
                    children: [
                        A && (0, r.jsx)(Y.d, { entityVariant: V.D.PLAYLIST, adminUrl: i.isFavouritePlaylist ? void 0 : E }),
                        !p && (0, r.jsx)($.L, { onClick: f, isPinned: i.isPinned }),
                        !i.isFavouritePlaylist && (0, r.jsx)(X.T, { onClick: x, isLiked: i.isLiked, disabled: !v.isAuthorized }),
                        (null == (t = i.trailer) ? void 0 : t.isAvailable) && (0, r.jsx)(G.N, { onClick: j, disabled: !i.isAvailable }),
                    ],
                });
            });
            var q = i(11675),
                Z = i.n(q);
            let Q = (0, l.PA)((e) => {
                let { className: t, playlist: i, children: l, contentLinesCount: B, customDescription: H, onCoverMouseDown: Y } = e,
                    { ref: U, intersectionPropertyId: W } = (0, N.n)(),
                    {
                        trailer: V,
                        user: K,
                        paywall: { modal: X },
                    } = (0, R.g)(),
                    { from: $, utmLink: G } = (0, P.f)({ contextId: i.uuid, contextType: d.K.Playlist }),
                    { formatMessage: q } = (0, n.A)(),
                    { sendLikeSearchFeedback: Q, sendNavigateSearchFeedback: ee, sendPlaySearchFeedback: et } = (0, j.z)(),
                    [ei, er] = (0, s.useState)(!1),
                    [ea, el] = (0, s.useState)(!1),
                    [es, en] = (0, s.useState)(!1),
                    eo = (0, z.r)(i),
                    ec = (0, g.K)(i),
                    ed = (0, C.A)(i),
                    eu = (0, f.N)(),
                    em = (0, k.b)(),
                    e_ = (0, E.Z)(i.url),
                    ep = (0, S.F)(),
                    eh = (0, y.P)(),
                    ev = (0, u.c)((e) => {
                        if ((e.stopPropagation(), eh())) return void e.preventDefault();
                        (V.setUtmLink(G), V.openPlaylistTrailer(i.id), ep(o.DomainObjectType.Playlist, i.id));
                    }),
                    [ex, eg] = (0, s.useState)(!1),
                    { isPlaying: eC, togglePlay: ey } = (0, L.D)({
                        playContextParams: { contextData: { type: d.K.Playlist, meta: { id: i.id, uuid: i.uuid }, from: $, utmLink: G }, loadContextMeta: !0 },
                    }),
                    ef = (0, u.c)(() => {
                        (eu({ to: o.AppScreen.PlaylistScreen }), null == ee || ee());
                    }),
                    ek = (0, u.c)((e) => {
                        (ef(), e_(e));
                    }),
                    eS = (0, A.N)(),
                    eN = (0, u.c)(() => {
                        if (!eh()) {
                            if (eS) return void X.open();
                            (ei || eC || (er(!0), null == et || et()), ey(), em(!eC));
                        }
                    }),
                    eP = (0, u.c)(() => {
                        (ea || i.isLiked || (el(!0), null == Q || Q()), ec());
                    }),
                    eA = (0, u.c)((e) => {
                        (e.preventDefault(), e.stopPropagation());
                    }),
                    eE = (0, u.c)((e) => {
                        (en(e), eg(e));
                    }),
                    ej = (0, s.useMemo)(() => {
                        var e;
                        return H
                            ? (0, r.jsx)(v.HL, { variant: 'span', type: 'entity', size: 's', weight: 'medium', lineClamp: 2, children: H }, i.getKey('description'))
                            : (null == (e = i.artists) ? void 0 : e.length)
                              ? (0, r.jsx)(
                                    x.i,
                                    { className: Z().artists, artists: i.artists, lineClamp: 1, linkClassName: Z().artistLink, captionSize: 's' },
                                    i.getKey('description'),
                                )
                              : void 0;
                    }, [H, i]),
                    eL = (0, m.L)(() => {
                        if (!i.isFavouritePlaylist)
                            return (0, r.jsx)(
                                I.c,
                                {
                                    className: (0, a.$)(Z().likeButton, Z().control),
                                    isLiked: i.isLiked,
                                    onClick: eP,
                                    variant: 'default',
                                    size: 's',
                                    iconSize: 'xxs',
                                    disabled: !K.isAuthorized,
                                },
                                i.getKey('LikeButton'),
                            );
                    }),
                    eR = (0, s.useMemo)(() => {
                        var e;
                        if (null == i || null == (e = i.trailer) ? void 0 : e.isAvailable)
                            return (0, r.jsx)(
                                F.n,
                                {
                                    children: (0, r.jsx)(
                                        D.k,
                                        { className: (0, a.$)(Z().trailerButton, Z().control), radius: 'round', size: 's', iconSize: 'xxs', onClick: ev },
                                        i.getKey('TrailerButton'),
                                    ),
                                },
                                i.getKey('PlaylilstCardTrailerTooltip'),
                            );
                    }, [ev, i]),
                    eT = (0, s.useMemo)(
                        () =>
                            (0, r.jsx)(
                                w.O,
                                { onClick: ed, isPinned: i.isPinned, className: (0, a.$)(Z().pinButton, Z().control), withRipple: !1 },
                                i.getKey('PinButton'),
                            ),
                        [ed, i],
                    ),
                    eb = (0, s.useMemo)(
                        () =>
                            (0, r.jsx)(h.t, {
                                className: Z().cover,
                                radius: 's',
                                withShadow: !0,
                                'data-test-id': c.Kq.playlist.PLAYLIST_CARD,
                                children: (0, r.jsxs)('div', {
                                    className: Z().coverBlock,
                                    onClick: ek,
                                    onMouseDown: Y,
                                    children: [
                                        (0, r.jsx)(b.B, {
                                            className: Z().image,
                                            src: i.coverUri,
                                            size: 200,
                                            fit: 'cover',
                                            alt: eo,
                                            withAvatarReplace: !0,
                                            'aria-hidden': !0,
                                        }),
                                        (0, r.jsx)(_.hg, {
                                            isVisible: es || ex,
                                            className: Z().controls,
                                            playControl: (0, r.jsx)(
                                                M.D,
                                                {
                                                    className: (0, a.$)(Z().playButton, Z().control),
                                                    buttonVariant: 'default',
                                                    withHover: !1,
                                                    iconSize: 'xl',
                                                    variant: 'filled',
                                                    onClick: eN,
                                                    isPlaying: eC,
                                                    disabled: !i.isAvailable,
                                                },
                                                i.getKey('PlayButton'),
                                            ),
                                            likeControl: eL,
                                            menuControl: (0, r.jsx)(
                                                J,
                                                {
                                                    playlist: i,
                                                    onOpenChange: eE,
                                                    open: es,
                                                    onClick: eA,
                                                    className: (0, a.$)(Z().menuButton, Z().control),
                                                    icon: (0, r.jsx)(p.I, { size: 'xxs', variant: 'more' }),
                                                    size: 's',
                                                    'data-test-id': c.Kq.playlist.PLAYLIST_CONTEXT_MENU_BUTTON,
                                                },
                                                i.getKey('PlaylistContextMenu'),
                                            ),
                                            pinControl: eT,
                                            trailerControl: eR,
                                        }),
                                    ],
                                }),
                            }),
                        [ek, Y, i, eo, es, ex, eN, eC, eL, eE, eA, eT, eR],
                    ),
                    eI = !!i.actualLikesCount && !i.isLikesCountHidden;
                return (0, r.jsxs)(_.MN, {
                    ref: U,
                    'aria-label': eo,
                    className: (0, a.$)(Z().root, t),
                    title: (0, r.jsx)(v.HL, {
                        variant: 'div',
                        type: 'entity',
                        size: 's',
                        weight: 'medium',
                        lineClamp: 2,
                        'data-test-id': c.Kq.playlist.PLAYLIST_TITLE,
                        children: (0, r.jsx)(O.N, { className: Z().titleLink, href: i.url, onClick: ef, children: i.title }),
                    }),
                    srTitle: (0, r.jsx)(O.N, { href: i.url, onClick: ef, children: i.title }),
                    'data-intersection-property-id': W,
                    contentLinesCount: B,
                    view: eb,
                    description: ej,
                    'data-test-id': c.Kq.playlist.PLAYLIST_ITEM,
                    children: [
                        eI &&
                            (0, r.jsx)(T.x, {
                                ariaLabel: q({ id: 'entity-names.likes-counter' }, { counter: i.actualLikesCount }),
                                likesCount: i.actualLikesCount,
                                isLiked: i.isLiked,
                                handleLikeClick: ec,
                            }),
                        l,
                    ],
                });
            });
        },
        83598: (e) => {
            e.exports = {
                tooltipContent: 'SeparatedArtistsWithContextMenuDesktop_tooltipContent___PtDD',
                artistItem: 'SeparatedArtistsWithContextMenuDesktop_artistItem__Ggo_W',
            };
        },
        89020: (e, t, i) => {
            'use strict';
            i.d(t, { V: () => c });
            var r = i(32290),
                a = i(63618),
                l = i(21732),
                s = i(79856),
                n = i(80556),
                o = i.n(n);
            let c = (e) => {
                let {
                    isActive: t,
                    className: i,
                    shimmerClassName: n,
                    round: c,
                    'aria-label': d,
                    centered: u,
                    withInfo: m = !0,
                    linesCount: _ = 3,
                    withSubcover: p,
                    radius: h = 'l',
                } = e;
                return (0, r.jsxs)('div', {
                    'aria-label': d,
                    'aria-live': t ? 'polite' : 'off',
                    'aria-busy': t,
                    className: (0, a.$)(o().root, i),
                    'data-test-id': l.S7.ENTITY_CARD_SHIMMER,
                    children: [
                        p && (0, r.jsx)(s.W, { isActive: t, className: o().subcover, radius: 'l' }),
                        (0, r.jsx)(s.W, { isActive: t, className: (0, a.$)(o().cover, n, { [o().cover_round]: c, [o().cover_withSubcover]: p }), radius: h }),
                        m &&
                            (0, r.jsx)('div', {
                                className: (0, a.$)(o().infoContainer, o()['content_linesCount_'.concat(_)], { [o().infoContainer_centered]: u }),
                                children: (0, r.jsx)(s.W, { isActive: t, className: (0, a.$)(o().title, { [o().title_withSubcover]: p }), radius: 's' }),
                            }),
                    ],
                });
            };
        },
        95787: (e) => {
            e.exports = {
                root: 'GenrePlaylistsPage_root__WZwkl',
                scrollContainer: 'GenrePlaylistsPage_scrollContainer__N3BZw',
                important: 'GenrePlaylistsPage_important__986BX',
                shimmerScrollContainer: 'GenrePlaylistsPage_shimmerScrollContainer__3kUkA',
                footer: 'GenrePlaylistsPage_footer__aMDul',
                item: 'GenrePlaylistsPage_item__tUsqJ',
                content: 'GenrePlaylistsPage_content__2rKJY',
                shimmerTitle: 'GenrePlaylistsPage_shimmerTitle__s4_Kt',
            };
        },
        97554: (e, t, i) => {
            'use strict';
            (i.r(t), i.d(t, { default: () => X }));
            var r = i(32290),
                a = i(21916),
                l = i(55178),
                s = i(63618),
                n = i(96103),
                o = i(60900),
                c = i(21732),
                d = i(71926),
                u = i(64170),
                m = i(7999),
                _ = i(83460),
                p = i(48922),
                h = i(22714),
                v = i(83808),
                x = i(83920),
                g = i(3796),
                C = i(49259),
                y = i(45066),
                f = i(57594),
                k = i(11262),
                S = i(97841),
                N = i(32468),
                P = i(74694),
                A = i(89020),
                E = i(45257),
                j = i(69796),
                L = i(22556),
                R = i(44242),
                T = i(42125),
                b = i(44338),
                I = i(24535),
                O = i(47216),
                w = i(94821),
                M = i(26365),
                D = i(43993),
                F = i(49124);
            async function z(e, t) {
                let { locale: i, fullUrl: r, url: a, tld: l, host: s } = t,
                    n = await (0, T.W)(i),
                    o = e.title.fullTitle,
                    c = n({ id: 'metadata.genre-title' }, { genreTitle: o }),
                    d = (0, D.f)({ genreTitle: o, messageFormatter: n }),
                    u = F.env.ASSET_PREFIX || '',
                    m = ''.concat(s).concat(u, '/meta/og-image.png');
                return {
                    title: c,
                    description: d,
                    openGraph: (0, I.i)({
                        ogTitle: (0, b.N)(o),
                        ogDescription: d,
                        fullUrl: null != r ? r : '',
                        locale: i,
                        siteName: n({ id: 'metadata.yandex-music' }),
                        ogImage: m,
                    }),
                    twitter: (0, O.H)({ cardType: w.W.APP, title: c, url: null != a ? a : '', appName: n({ id: 'metadata.yandex-music' }) }),
                    appLinks: (0, R.X)({
                        additional: { tld: l, url: null != a ? a : '', fullUrl: null != r ? r : '', host: s },
                        appName: n({ id: 'metadata.yandex-music' }),
                    }),
                    alternates: (0, M.S)('/genre/:metatagId/playlists', t.tld, { params: { metatagId: e.id } }),
                };
            }
            var B = i(25049),
                H = i(95787),
                Y = i.n(H);
            let U = (0, n.PA)((e) => {
                let { metatagId: t, preloadedMeta: i } = e,
                    { playlistsSubpage: n } = (0, C.s)(y.n.GENRE),
                    {
                        settings: { isMobile: R },
                    } = (0, f.g)(),
                    { formatMessage: T } = (0, o.A)(),
                    { contentScrollRef: b, setContentScrollRef: I } = (0, x.g)(),
                    O = (0, v.W)(),
                    w = (0, l.useCallback)(
                        (e) => {
                            t && n.getData({ metatagId: t, page: e, pageSize: j.cM });
                        },
                        [n, t],
                    );
                ((0, k.X)(n.pagesLoader, w),
                    (0, l.useEffect)(
                        () => () => {
                            n.reset();
                        },
                        [n],
                    ),
                    n.isNotFound && (0, a.notFound)(),
                    (0, g.J)(n.isResolved),
                    ((e) => {
                        (0, l.useEffect)(() => {
                            e &&
                                z(
                                    ((e) => {
                                        var t, i, r;
                                        return {
                                            id: '',
                                            title: { title: '', fullTitle: e.fullTitle || '' },
                                            playlists: e.items.map(B.J),
                                            pager: {
                                                page: (null == (t = e.pagesLoader.pager) ? void 0 : t.page) || 0,
                                                perPage: (null == (i = e.pagesLoader.pager) ? void 0 : i.perPage) || 0,
                                                total: (null == (r = e.pagesLoader.pager) ? void 0 : r.total) || 0,
                                            },
                                        };
                                    })(e),
                                    { fullUrl: null, locale: null, url: null, tld: '', host: '' },
                                ).then((e) => {
                                    (0, L.j)(e);
                                });
                        }, [e]);
                    })(n));
                let M = (0, l.useMemo)(() => ({ Footer: () => (0, r.jsx)(N.A, { children: (0, r.jsx)(S.w, { className: Y().footer }) }) }), []);
                if ((t && n.isNeededToLoad && (0, l.use)(n.getData({ preloadedMeta: i, metatagId: t, page: 0, pageSize: j.cM })), n.isSomethingWrong))
                    return (0, r.jsx)(u.SomethingWentWrong, {});
                let D = n.isShimmerVisible ? 20 : n.totalCount;
                return (0, r.jsx)(h.n, {
                    pageId: p._Q.GENRE_PLAYLISTS,
                    children: (0, r.jsx)(m.h, {
                        scrollElement: b,
                        outerTitle: n.fullTitle,
                        children: (0, r.jsxs)('div', {
                            className: Y().root,
                            'data-test-id': c.Xk.genre.GENRE_PLAYLISTS_PAGE,
                            children: [
                                (0, r.jsx)(P.Y, {
                                    variant: P.V.TEXT,
                                    withForwardControl: !1,
                                    withBackwardControl: O.canBack,
                                    children: (0, r.jsx)(d.DZ, { variant: 'h2', weight: 'bold', size: 'xl', lineClamp: 1, children: n.fullTitle }),
                                }),
                                (0, r.jsx)(E.$, {
                                    className: (0, s.$)(Y().scrollContainer, Y().important),
                                    customComponents: M,
                                    itemContentCallback: (e) => {
                                        let t = n.items[e],
                                            i = T({ id: 'loading-messages.entity-is-loading' }, { entityName: T({ id: 'entity-names.playlist' }) });
                                        return t ? (0, r.jsx)(_.B, { playlist: t, contentLinesCount: 3 }, t.key) : (0, r.jsx)(A.V, { 'aria-label': i });
                                    },
                                    totalCount: D,
                                    initialItemCount: D,
                                    onGetDataByPage: w,
                                    pageSize: j.cM,
                                    totalRequests: n.requestsCount,
                                    listClassName: Y().content,
                                    itemClassName: Y().item,
                                    handleRef: I,
                                    context: { listAriaLabel: T({ id: 'mixes.playlists-list' }, { genreName: n.fullTitle || '' }) },
                                    isMobileLayout: R,
                                    useWindowScroll: R,
                                }),
                            ],
                        }),
                    }),
                });
            });
            var W = i(79856),
                V = i(50308);
            let K = () => {
                    let e = (0, v.W)(),
                        { formatMessage: t } = (0, o.A)(),
                        i = t({ id: 'loading-messages.entity-is-loading' }, { entityName: t({ id: 'entity-names.playlist' }) });
                    return (0, r.jsx)(m.h, {
                        scrollElement: null,
                        children: (0, r.jsxs)('div', {
                            className: Y().root,
                            children: [
                                (0, r.jsx)(P.Y, {
                                    variant: P.V.TEXT,
                                    withForwardControl: !1,
                                    withBackwardControl: e.canBack,
                                    children: (0, r.jsx)(W.W, { className: Y().shimmerTitle, radius: 'l' }),
                                }),
                                (0, r.jsx)('div', {
                                    className: (0, s.$)(Y().scrollContainer, Y().important, Y().shimmerScrollContainer),
                                    children: (0, r.jsx)('div', {
                                        className: Y().content,
                                        children: (0, r.jsx)(V.e, { isActive: !0, itemClassName: Y().item, 'aria-label': i, count: 20 }),
                                    }),
                                }),
                            ],
                        }),
                    });
                },
                X = () => {
                    let e = (0, a.useSearchParams)().get('metatagId');
                    return (e || (0, a.notFound)(), (0, r.jsx)(l.Suspense, { fallback: (0, r.jsx)(K, {}), children: (0, r.jsx)(U, { metatagId: e }) }));
                };
        },
        97841: (e, t, i) => {
            'use strict';
            i.d(t, { w: () => N });
            var r = i(32290),
                a = i(63618),
                l = i(96103),
                s = i(60900),
                n = i(31010),
                o = (function (e) {
                    return (
                        (e.YANDEX = 'YANDEX'),
                        (e.YANDEX_PROJECTS = 'YANDEX_PROJECTS'),
                        (e.COPYRIGHT_HOLDER = 'COPYRIGHT_HOLDER'),
                        (e.AGREEMENT = 'AGREEMENT'),
                        (e.RECOMMENDATION_RULES = 'RECOMMENDATION_RULES'),
                        (e.HELP = 'HELP'),
                        (e.PRIVACY_POLICY = 'PRIVACY_POLICY'),
                        e
                    );
                })({});
            let c = (e, t, i) => {
                    switch (e) {
                        case o.YANDEX:
                            if ('ru' === t) return 'https://ya.ru';
                            return;
                        case o.YANDEX_PROJECTS:
                            return 'https://yandex.'.concat(t, '/all?lang=').concat(i);
                        case o.COPYRIGHT_HOLDER:
                            return 'https://yandex.'.concat(t, '/support/music/performers-and-copyright-holders/copyright.html?lang=').concat(i);
                        case o.AGREEMENT:
                            return 'https://yandex.ru/legal/music_termsofuse?lang='.concat(i);
                        case o.RECOMMENDATION_RULES:
                            return 'https://music.yandex.ru/legal/recommendations/ru/#music';
                        case o.HELP:
                            return 'https://yandex.'.concat(t, '/support/music/index.html?lang=').concat(i);
                        case o.PRIVACY_POLICY:
                            return 'https://yandex.'.concat(t, '/legal/confidential/').concat(i);
                    }
                },
                d = (e) => {
                    let { formatMessage: t, language: i, tld: r, year: a } = e;
                    return {
                        year: a,
                        yandexMusic: { id: o.YANDEX, title: t({ id: 'footer.yandex-music' }), url: c(o.YANDEX, r, i) },
                        yandexProjects: { id: o.YANDEX_PROJECTS, title: t({ id: 'footer.yandex-project' }), url: c(o.YANDEX_PROJECTS, r, i) },
                    };
                };
            var u = i(15559),
                m = i(8626);
            let _ = (e) => e(new Date(), (0, m.m)());
            var p = i(61945),
                h = i(57594),
                v = i(77088),
                x = i.n(v),
                g = i(21732),
                C = i(71926),
                y = i(61258);
            let f = (e) => {
                    let { className: t, data: i } = e;
                    return (0, r.jsxs)('div', {
                        className: (0, a.$)(x().copyrights, t),
                        'data-test-id': g.S7.FOOTER_COPYRIGHTS,
                        children: [
                            (0, r.jsxs)(C.HL, {
                                variant: 'span',
                                type: 'text',
                                size: 's',
                                weight: 'medium',
                                className: x().text,
                                children: [
                                    '\xa9 ',
                                    i.year,
                                    ' \xa0',
                                    (0, r.jsx)(y.N, {
                                        target: '_blank',
                                        href: i.yandexMusic.url,
                                        className: (0, a.$)(x().copyrightLink, x().yandexMusicLink),
                                        'data-test-id': g.S7.FOOTER_YANDEX_MUSIC_LINK,
                                        children: i.yandexMusic.title,
                                    }),
                                ],
                            }),
                            (0, r.jsx)(C.HL, { variant: 'span', type: 'text', size: 's', weight: 'medium', children: ' • ' }),
                            (0, r.jsx)(y.N, {
                                target: '_blank',
                                href: i.yandexProjects.url,
                                className: x().copyrightLink,
                                'data-test-id': g.S7.FOOTER_YANDEX_PROJECT_LINK,
                                children: i.yandexProjects.title,
                            }),
                        ],
                    });
                },
                k = (e) => {
                    let { disclaimer: t, links: i } = e;
                    return (0, r.jsxs)('div', {
                        className: x().links,
                        children: [
                            (0, r.jsx)('ol', {
                                className: x().list,
                                'data-test-id': g.S7.FOOTER_LINKS_LIST,
                                children: i.map((e) => {
                                    let { id: t, title: i, url: a } = e;
                                    return (0, r.jsx)(
                                        'li',
                                        {
                                            className: x().item,
                                            children: (0, r.jsx)(y.N, { target: '_blank', href: a, className: x().link, 'data-test-id': g.S7.FOOTER_LINK, children: i }),
                                        },
                                        t,
                                    );
                                }),
                            }),
                            (0, r.jsx)(C.HL, {
                                variant: 'span',
                                type: 'text',
                                size: 'm',
                                weight: 'medium',
                                className: x().explicitText,
                                tabIndex: 0,
                                dangerouslySetInnerHTML: { __html: t },
                                'data-test-id': g.S7.FOOTER_DISCLAIMER_TEXT,
                            }),
                        ],
                    });
                },
                S = (e) => {
                    let { className: t, data: i } = e;
                    return (0, r.jsxs)('footer', {
                        className: (0, a.$)(x().root, x().important, t),
                        'data-test-id': g.S7.FOOTER,
                        children: [(0, r.jsx)(k, { links: i.links, disclaimer: i.disclaimer }), (0, r.jsx)(f, { data: i.copyrights })],
                    });
                };
            (0, l.PA)((e) => {
                let { className: t } = e,
                    { location: i } = (0, h.g)(),
                    { formatDate: a, formatMessage: l } = (0, s.A)(),
                    { language: n } = (0, p.h)(),
                    o = d({ formatMessage: l, language: n, tld: i.tld, year: _(a) });
                return (0, r.jsx)(f, { className: t, data: o });
            });
            let N = (0, l.PA)((e) => {
                var t;
                let { className: i } = e,
                    { experiments: l, location: m, user: v } = (0, h.g)(),
                    { formatDate: g, formatMessage: C } = (0, s.A)(),
                    { isEnabled: y } = null != (t = (0, n.P)()) ? t : {},
                    { language: f } = (0, p.h)(),
                    k = ((e) => {
                        let { checkExperiment: t, formatMessage: i, isWebApplication: r, language: a, tld: l, userRegion: s, year: n } = e;
                        return {
                            links: ((e) => {
                                let { formatMessage: t, isWebApplication: i, tld: r, language: a, userRegion: l } = e,
                                    s = { id: o.COPYRIGHT_HOLDER, title: t({ id: 'footer.links-copyright-holders' }), url: c(o.COPYRIGHT_HOLDER, r, a) },
                                    n = { id: o.PRIVACY_POLICY, title: t({ id: 'footer.links-privacy-policy' }), url: c(o.PRIVACY_POLICY, r, a) },
                                    d = { id: o.AGREEMENT, title: t({ id: 'footer.links-terms' }), url: c(o.AGREEMENT, r, a) },
                                    u = { id: o.RECOMMENDATION_RULES, title: t({ id: 'footer.links-recommendation-rules' }), url: c(o.RECOMMENDATION_RULES, r, a) },
                                    m = { id: o.HELP, title: t({ id: 'footer.links-help' }), url: c(o.HELP, r, a) },
                                    _ = [s, d, u];
                                return (i && 'ru' === l && _.push(n), _.push(m), _);
                            })({ formatMessage: i, isWebApplication: r, language: a, tld: l, userRegion: s }),
                            disclaimer: (0, u.v)({
                                checkExperiment: t,
                                getDisclaimerContent: () => i({ id: 'footer.disclaimer-content' }),
                                getExplicitContent: () => i({ id: 'footer.explicit-content' }),
                                userRegion: s,
                            }),
                            copyrights: d({ formatMessage: i, language: a, tld: l, year: n }),
                        };
                    })({
                        checkExperiment: (e, t) => l.checkExperiment(e, t),
                        formatMessage: C,
                        isWebApplication: !1,
                        tld: m.tld,
                        language: f,
                        userRegion: v.account.data.userSessionRegionIso,
                        year: _(g),
                    });
                return (0, r.jsx)(S, { className: (0, a.$)({ [x().root_withOffsetForDeeplink]: y }, i), data: k });
            });
        },
    },
    (e) => {
        (e.O(
            0,
            [
                1010, 7412, 7231, 2147, 4517, 9763, 1256, 3608, 1680, 6706, 1311, 5472, 8378, 900, 2536, 2146, 3353, 2474, 8035, 347, 2732, 1410, 1417, 3266, 8506, 6050,
                5806, 7702, 6874, 9155, 861, 4668, 9740, 1175, 4499, 8816, 9021, 4220, 9562, 7358,
            ],
            () => e((e.s = 72560)),
        ),
            (_N_E = e.O()));
    },
]);
