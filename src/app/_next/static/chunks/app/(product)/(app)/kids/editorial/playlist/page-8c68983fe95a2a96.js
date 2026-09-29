(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [5063],
    {
        5537: (e, t, i) => {
            'use strict';
            i.d(t, { N: () => s });
            var l = i(57594),
                r = i(79406);
            let s = () => {
                var e, t;
                let {
                    user: i,
                    settings: { browserInfo: s },
                    experiments: n,
                } = (0, l.g)();
                return (
                    !(null == s ? void 0 : s.isTouch) &&
                    i.isAuthorized &&
                    !i.hasPlus &&
                    (null == (t = n.getExperiment(r.z.WebNextDesktopWebFreemium)) || null == (e = t.value) ? void 0 : e.closeListening) === 'on'
                );
            };
        },
        8626: (e, t, i) => {
            'use strict';
            i.d(t, { m: () => l });
            let l = () => ({ year: 'numeric' });
        },
        11262: (e, t, i) => {
            'use strict';
            i.d(t, { X: () => d });
            var l = i(32290),
                r = i(55178),
                s = i(91027),
                n = i(71730),
                a = i(45477),
                o = i(75582),
                c = i(49399);
            let d = (e, t) => {
                let { notify: i, dismiss: d } = (0, o.l)(),
                    u = (0, r.useRef)(void 0),
                    _ = (0, s.c)(() => {
                        var i;
                        (d({ notificationId: u.current }), (u.current = 0));
                        let l = [...(null != (i = e.lastRejectedPagesList) ? i : [])].reverse().filter((t) => {
                            var i;
                            return (null == (i = e.pageStates) ? void 0 : i[t]) === c.G.REJECT;
                        });
                        (e.resetRejectedPagesState(),
                            l.forEach((e) => {
                                t(e);
                            }));
                    });
                (0, r.useEffect)(() => {
                    e.rejectedPagesCount > 0 && !u.current && (u.current = i((0, l.jsx)(n.L, { reloadBlocks: _ }), { containerId: a.u.ERROR, autoClose: !1 }));
                }, [d, _, i, e.rejectedPagesCount]);
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
            i.d(t, { r: () => s });
            var l = i(55178),
                r = i(60900);
            let s = (e) => {
                let { formatMessage: t } = (0, r.A)();
                return (0, l.useMemo)(() => {
                    let i = '';
                    e.isLiked && !e.actualLikesCount
                        ? (i = t({ id: 'entity-names.has-your-like' }))
                        : 'number' == typeof e.actualLikesCount &&
                          (i =
                              e.actualLikesCount > 0
                                  ? t({ id: 'entity-names.likes-counter' }, { counter: e.actualLikesCount })
                                  : t({ id: 'entity-names.likes-counter-empty' }));
                    let l = t({ id: 'entity-names.playlist-name' }, { playlistName: e.title });
                    return ''.concat(l, ' ').concat(i);
                }, [t, e]);
            };
        },
        15559: (e, t, i) => {
            'use strict';
            i.d(t, { v: () => r });
            var l = i(79406);
            let r = (e) => {
                let { checkExperiment: t, getDisclaimerContent: i, getExplicitContent: r, userRegion: s } = e;
                return 'ru' === s && t(l.z.WebNextFooterDisclaimer, 'on') ? i() : r();
            };
        },
        16510: (e) => {
            e.exports = { root: 'ArtistItem_root__Q_mgJ', image: 'ArtistItem_image__5rKWF', cover: 'ArtistItem_cover__FTvHo' };
        },
        18897: (e, t, i) => {
            Promise.resolve().then(i.bind(i, 86159));
        },
        20472: (e, t, i) => {
            'use strict';
            i.d(t, { Z: () => r });
            var l = i(68243);
            let r = {
                main: (0, l.u)('/'),
                chart: (0, l.u)('/chart'),
                chartPodcasts: (0, l.u)('/chart/podcasts'),
                collection: (0, l.u)('/collection'),
                collectionAlbums: (0, l.u)('/collection/albums'),
                collectionArtists: (0, l.u)('/collection/artists'),
                collectionClips: (0, l.u)('/collection/clips'),
                collectionDislikes: (0, l.u)('/collection/dislikes'),
                collectionKids: (0, l.u)('/collection/kids'),
                collectionKidsAlbums: (0, l.u)('/collection/kids/albums'),
                collectionKidsPlaylists: (0, l.u)('/collection/kids/playlists'),
                collectionKidsTracks: (0, l.u)('/collection/kids/tracks'),
                collectionNonMusic: (0, l.u)('/collection/non-music'),
                collectionNonMusicLiked: (0, l.u)('/collection/non-music/liked'),
                collectionVibeRooms: (0, l.u)('/collection/multivibes'),
                collectionPlaylists: (0, l.u)('/collection/playlists'),
                collectionPlaylistsCreated: (0, l.u)('/collection/playlists/created'),
                collectionPlaylistsLiked: (0, l.u)('/collection/playlists/liked'),
                collectionShelf: (0, l.u)('/collection/shelf'),
                collectionShelfLiked: (0, l.u)('/collection/shelf/liked'),
                collectionShelfNewEpisodes: (0, l.u)('/collection/shelf/new-episodes'),
                collectionShelfRecentlyPlayed: (0, l.u)('/collection/shelf/recently-played'),
                concerts: (0, l.u)('/concerts'),
                kids: (0, l.u)('/kids'),
                mixes: (0, l.u)('/mixes'),
                musicHistory: (0, l.u)('/music-history'),
                muzmarket: (0, l.u)('/muzmarket'),
                mymusic: (0, l.u)('/mymusic'),
                mymusicDownloadsTracks: (0, l.u)('/mymusic/downloads/tracks'),
                multivibe: (0, l.u)('/multivibe'),
                nonMusic: (0, l.u)('/non-music'),
                pay: (0, l.u)('/pay'),
                userSlides: (0, l.u)('/slides/user'),
                search: (0, l.u)('/search'),
                searchHistory: (0, l.u)('/search/history'),
                settings: (0, l.u)('/settings'),
                video: (0, l.u)('/video'),
            };
        },
        22492: (e) => {
            e.exports = { icon: 'CardLikes_icon__l95lW', root: 'CardLikes_root__g8ala' };
        },
        29268: (e, t, i) => {
            'use strict';
            i.d(t, { k: () => u });
            var l = i(32290),
                r = i(55178),
                s = i(60900),
                n = i(21732),
                a = i(63423),
                o = i(82586),
                c = i(59576);
            let d = (e) => {
                    let {
                            variant: t,
                            withRipple: i,
                            size: r,
                            radius: d,
                            iconSize: u,
                            disabled: _,
                            onClick: m,
                            iconClassName: p,
                            className: h,
                            forwardRef: g,
                            style: x,
                            children: y,
                        } = e,
                        { formatMessage: v } = (0, s.A)(),
                        C = v({ id: 'trailer.button-aria-label' });
                    return (0, l.jsx)(a.$, {
                        className: h,
                        color: 'secondary',
                        radius: d,
                        size: r,
                        variant: t,
                        withRipple: i,
                        flexIcon: !0,
                        'aria-label': C,
                        onClick: m,
                        ref: g,
                        icon: (0, l.jsx)(o.I, { variant: 'trailer', size: u, className: p }),
                        disabled: _,
                        'data-intersection-property-id': c.N,
                        style: x,
                        'data-test-id': n.S7.TRAILER_BUTTON,
                        children: y,
                    });
                },
                u = (0, r.forwardRef)((e, t) => (0, l.jsx)(d, { forwardRef: t, ...e }));
        },
        30310: (e) => {
            e.exports = {
                root: 'SomethingWentWrong_root__d77VJ',
                content: 'SomethingWentWrong_content__8_YkJ',
                content_shrink: 'SomethingWentWrong_content_shrink__GOR_7',
                navigation: 'SomethingWentWrong_navigation__a8eMG',
                navigation_desktop: 'SomethingWentWrong_navigation_desktop__WGGBX',
                icon: 'SomethingWentWrong_icon__f15_y',
                title: 'SomethingWentWrong_title__Kn89B',
                important: 'SomethingWentWrong_important__namIb',
                text: 'SomethingWentWrong_text__KEfGc',
                button: 'SomethingWentWrong_button__dmh7t',
            };
        },
        31010: (e, t, i) => {
            'use strict';
            i.d(t, { H: () => r, P: () => s });
            var l = i(55178);
            let r = (0, l.createContext)(null),
                s = () => (0, l.useContext)(r);
        },
        32468: (e, t, i) => {
            'use strict';
            i.d(t, { A: () => n });
            var l = i(32290),
                r = i(77088),
                s = i.n(r);
            let n = (e) => {
                let { children: t } = e;
                return (0, l.jsx)('footer', { className: s().empty });
            };
        },
        34925: (e, t, i) => {
            'use strict';
            i.d(t, { n: () => n });
            var l = i(32290),
                r = i(60900),
                s = i(70280);
            let n = (e) => {
                let { children: t } = e,
                    { formatMessage: i } = (0, r.A)();
                return (0, l.jsx)(s.m_, {
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
            i.d(t, { i: () => W });
            var l = i(32290),
                r = i(63618),
                s = i(96103),
                n = i(55178),
                a = i(70280),
                o = i(57594),
                c = i(53514),
                d = i(40484),
                u = i.n(d),
                _ = i(60900),
                m = i(99923),
                p = i(21732),
                h = i(91027),
                g = i(71926),
                x = i(47745),
                y = i(32641),
                v = i(28999),
                C = i(61258),
                f = i(19383);
            let k = (0, s.PA)((e) => {
                    let {
                            artist: t,
                            withLink: i = !0,
                            linkClassName: r,
                            captionClassName: s,
                            captionSize: n = 'm',
                            allArtistsTitle: c,
                            withCustomTooltip: d,
                            hoverSettings: u,
                        } = e,
                        { formatMessage: k } = (0, _.A)(),
                        {
                            track: S,
                            settings: { isMobile: N },
                        } = (0, o.g)(),
                        E = (0, y.Z)(t.url),
                        { sendNavigateSearchFeedback: A } = (0, v.z)(),
                        P = (0, x.N)(),
                        j = ((e) => {
                            let { artist: t, callback: i } = e,
                                { currentTrackInfo: l, fullscreenPlayer: r, fullscreenVideoPlayer: s } = (0, o.g)(),
                                { modal: n } = l;
                            return (0, f.l)({
                                entity: t,
                                callback: i,
                                onBeforeHandle: (e) => {
                                    (null == e || e.stopPropagation(), n.isOpened && (l.reset(), n.close()), r.modal.isOpened && r.modal.close());
                                },
                                onAfterHandled: () => {
                                    s.modal.isOpened && (s.modal.close(), s.reset());
                                },
                                preventDefaultWhenSafe: !0,
                            });
                        })({
                            artist: t,
                            callback: (0, h.c)((e) => {
                                (N && S.isOpened && S.close(), E(e));
                            }),
                        }),
                        L = (0, h.c)((e) => {
                            (P({ to: m.AppScreen.ArtistScreen }), null == A || A(), j(e));
                        });
                    return i && !t.various
                        ? (0, l.jsx)(C.N, {
                              'aria-label': k({ id: 'entity-names.artist-name' }, { artistName: t.name }),
                              className: r,
                              href: t.url,
                              onClick: L,
                              title: d ? void 0 : c || t.name,
                              'data-test-id': p.OA.artists.SEPARATED_ARTIST_TITLE,
                              children: (0, l.jsx)(a.m_, {
                                  enabled: !c && d,
                                  offsetOptions: 4,
                                  placement: 'top',
                                  text: c || t.name,
                                  hoverSettings: u,
                                  children: (0, l.jsx)(g.HL, { variant: 'span', type: 'entity', size: n, weight: 'medium', className: s, children: t.name }),
                              }),
                          })
                        : (0, l.jsx)(a.m_, {
                              enabled: !c && d,
                              offsetOptions: 4,
                              placement: 'top',
                              text: c || t.name,
                              hoverSettings: u,
                              children: (0, l.jsx)(g.HL, {
                                  variant: 'span',
                                  type: 'entity',
                                  size: n,
                                  weight: 'medium',
                                  className: s,
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
                            linkClassName: r,
                            captionClassName: s,
                            captionSize: a,
                            allArtistsTitle: o,
                            withCustomTooltip: c,
                            hoverSettings: d,
                            shouldUseSeparator: u = !0,
                        } = e,
                        _ = (0, n.useMemo)(() => {
                            var e;
                            return null == (e = t.decomposed)
                                ? void 0
                                : e.reduce(
                                      (e, t) =>
                                          e.concat([
                                              u ? t.separator : '',
                                              (0, l.jsx)(
                                                  k,
                                                  {
                                                      artist: t,
                                                      withLink: i,
                                                      linkClassName: r,
                                                      captionClassName: s,
                                                      captionSize: a,
                                                      allArtistsTitle: o,
                                                      withCustomTooltip: c,
                                                      hoverSettings: d,
                                                  },
                                                  t.id,
                                              ),
                                          ]),
                                      [],
                                  );
                        }, [t.decomposed, u, i, r, s, a, o, c, d]);
                    return (0, l.jsxs)(l.Fragment, {
                        children: [
                            (0, l.jsx)(k, {
                                artist: t,
                                withLink: i,
                                linkClassName: r,
                                captionClassName: s,
                                captionSize: a,
                                allArtistsTitle: o,
                                withCustomTooltip: c,
                                hoverSettings: d,
                            }),
                            _,
                        ],
                    });
                };
            var N = i(39407),
                E = i(63887);
            let A = (e) => {
                let { spoilerArtistsCount: t, spoilerClassName: i, handleOnSpoilerClick: s } = e;
                return (0, l.jsxs)(l.Fragment, {
                    children: [
                        ' ',
                        (0, l.jsx)(E.N, {
                            role: 'button',
                            href: '',
                            className: (0, r.$)(u().spoiler, i),
                            onClick: s,
                            rel: 'nofollow',
                            'data-test-id': p.OA.artists.SEPARATED_ARTISTS_SPOILER,
                            children: (0, l.jsx)(N.A, { id: 'entity-names.number-of-more-artists', values: { counter: t } }),
                        }),
                    ],
                });
            };
            var P = i(8055),
                j = i(6752),
                L = i(78035),
                T = i(78176),
                R = i(83598),
                b = i.n(R);
            let I = (0, s.PA)((e) => {
                    let { label: t, artists: i, forwardRef: r } = e;
                    return (0, l.jsxs)(a.m_, {
                        enableAriaDescribedby: !1,
                        isFocusEnabled: !1,
                        placement: 'top',
                        hoverSettings: { delay: 200, handleClose: (0, L.safePolygon)({ blockPointerEvents: !0 }) },
                        children: [
                            (0, l.jsx)('div', { ref: r, children: t }),
                            (0, l.jsx)(a.ZI, { className: b().tooltipContent, children: i.map((e) => (0, l.jsx)(T.V, { artist: e, className: b().artistItem }, e.id)) }),
                        ],
                    });
                }),
                O = (0, n.forwardRef)((e, t) => (0, l.jsx)(I, { forwardRef: t, ...e }));
            var w = i(19740),
                D = i(52598),
                M = i.n(D);
            let z = (0, s.PA)((e) => {
                    let { label: t, artists: i } = e,
                        { formatMessage: s } = (0, _.A)();
                    return (0, l.jsx)(w.W1, {
                        isMobile: !0,
                        className: (0, r.$)(M().root, M().important),
                        label: t,
                        ariaLabel: s({ id: 'interface-actions.context-menu-artists' }),
                        children: i.map((e) => (0, l.jsx)(T.V, { artist: e }, e.id)),
                    });
                }),
                F = (0, s.PA)((e) => {
                    let { artists: t = [], label: i, labelRef: r } = e,
                        [s, a] = (0, n.useState)(!1),
                        {
                            settings: { isMobile: c },
                        } = (0, o.g)(),
                        d = (0, h.c)(() => {
                            let e = r.current;
                            e && a(e.scrollHeight > e.clientHeight || e.scrollWidth > e.clientWidth);
                        }),
                        u = (0, j.L)(() =>
                            (0, P.A)(() => {
                                d();
                            }, 100),
                        );
                    if (
                        ((0, n.useEffect)(
                            () => (
                                window.addEventListener('resize', u),
                                d(),
                                () => {
                                    window.removeEventListener('resize', u);
                                }
                            ),
                            [u, d],
                        ),
                        (0, n.useEffect)(() => {
                            d();
                        }, [t, d]),
                        0 !== t.length)
                    )
                        return (s || c) && (!c || 1 !== t.length) ? (c ? (0, l.jsx)(z, { artists: t, label: i }) : (0, l.jsx)(O, { artists: t, label: i })) : i;
                }),
                W = (0, s.PA)((e) => {
                    let {
                            className: t,
                            artists: i = [],
                            separator: s = ', ',
                            lineClamp: d,
                            visibleArtistsCount: _,
                            withLink: m = !0,
                            spoilerClassName: p,
                            linkClassName: h,
                            captionClassName: g,
                            captionSize: x,
                            variant: y = 'breakAll',
                            withAllArtistsTitle: v = !0,
                            withComposer: C = !0,
                            spoilerComponent: f,
                            withCustomTooltip: k = !0,
                            artistIdWithoutLink: N,
                            withContextMenu: E,
                        } = e,
                        P = (0, n.useRef)(null),
                        [j, L] = (0, n.useState)(!1),
                        T = v
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
                                  .join(s)
                            : '',
                        {
                            settings: { isMobile: R },
                        } = (0, o.g)(),
                        b = 1 === i.length,
                        I = (0, n.useCallback)((e) => {
                            (L(!0), e.preventDefault());
                        }, []),
                        O = (0, n.useMemo)(() => {
                            let e = i;
                            return (
                                _ && !j && (e = i.slice(0, _)),
                                e.reduce((e, t) => {
                                    if (!C && t.isComposer) return e.length ? e : [];
                                    let i = (0, l.jsx)(
                                        S,
                                        {
                                            artist: t,
                                            linkClassName: h,
                                            captionClassName: g,
                                            withLink: m && t.id !== N && (((!R || b) && E) || !E),
                                            captionSize: x,
                                            allArtistsTitle: T,
                                            withCustomTooltip: k,
                                            hoverSettings: c.V,
                                            shouldUseSeparator: !!s,
                                        },
                                        t.key,
                                    );
                                    return e.length ? e.concat([s, i]) : [i];
                                }, [])
                            );
                        }, [i, _, j, C, R, b, E, h, g, m, N, x, T, k, s]),
                        w = (0, n.useMemo)(() => {
                            if (!j && _ && _ < i.length) {
                                let e = i.length - _;
                                return (0, n.isValidElement)(f) ? f : (0, l.jsx)(A, { spoilerClassName: p, spoilerArtistsCount: e, handleOnSpoilerClick: I });
                            }
                        }, [i.length, I, j, p, f, _]),
                        D = (0, n.useMemo)(() => {
                            if (d) return { WebkitLineClamp: d };
                        }, [d]),
                        M = (0, l.jsx)(a.m_, {
                            referenceRef: P,
                            enabled: !!(v && T) && k && !E && !R,
                            offsetOptions: 4,
                            placement: 'top',
                            text: T,
                            hoverSettings: c.V,
                            children: (0, l.jsxs)('div', {
                                style: D,
                                className: (0, r.$)(u().root, u()['root_variant_'.concat(y)], { [u().root_clamp]: d && d > 0 }, { [u().ellipsis]: !d }, t),
                                title: v && T && !k && !E ? T : void 0,
                                children: [O, w],
                            }),
                        });
                    return E ? (0, l.jsx)(F, { labelRef: P, artists: i, label: M }) : M;
                });
        },
        45257: (e, t, i) => {
            'use strict';
            i.d(t, { $: () => g });
            var l = i(32290),
                r = i(63618),
                s = i(8055),
                n = i(55178);
            let a = (e) => {
                    let { style: t, forwardRef: i, context: r, ...s } = e,
                        n = (null == r ? void 0 : r.listAriaLabel) || void 0,
                        a = (null == r ? void 0 : r.listRole) || 'region';
                    return (0, l.jsx)('div', { 'aria-labelledby': 'virtual-grid-header', role: a, 'aria-label': n, style: { ...t }, ref: i, ...s });
                },
                o = (0, n.forwardRef)((e, t) => (0, l.jsx)(a, { forwardRef: t, ...e }));
            var c = i(39684),
                d = i.n(c);
            let u = (e) => {
                    let { style: t, forwardRef: i, withFooter: s, withHeader: n, withForceScroll: a, ...o } = e;
                    return (0, l.jsx)('div', {
                        className: (0, r.$)(d().scroller, { [d().scroller_withFooter]: s, [d().scroller_withHeader]: n, [d().scroller_withForceScroll]: a }),
                        style: { ...t },
                        ref: i,
                        ...o,
                        tabIndex: -1,
                    });
                },
                _ = (0, n.forwardRef)((e, t) => (0, l.jsx)(u, { forwardRef: t, ...e }));
            var m = i(62060),
                p = i(31417);
            let h = (e) => {
                    let {
                            pageSize: t,
                            onPageHandler: i,
                            onRangeHandler: r,
                            debounceDurationInMs: s = 100,
                            totalCount: a = 0,
                            shouldTriggerRangeChangedOn: o = [],
                            endReached: c,
                            virtuosoRef: d,
                            ...u
                        } = e,
                        [_, h] = (0, n.useState)(null),
                        g = (0, n.useMemo)(
                            () =>
                                (0, m.A)((e) => {
                                    if ((null == r || r(e), o.length > 0 && h(e), t && i)) {
                                        let l = Math.floor(e.endIndex / t) + 1,
                                            r = Math.floor(e.startIndex / t);
                                        for (let e = r; e < l; e++) i(e);
                                    }
                                }, s),
                            [s, r, t, i, o],
                        );
                    (0, n.useEffect)(() => {
                        o.length > 0 && _ && g(_);
                    }, o);
                    let x = (0, n.useMemo)(() => {
                        if (c)
                            return (0, m.A)((e) => {
                                c(e);
                            }, s);
                    }, [c, s]);
                    return (0, l.jsx)(p.sN, { ref: d, rangeChanged: g, totalCount: a, endReached: x, ...u });
                },
                g = (e) => {
                    let {
                            className: t,
                            customComponents: i,
                            onGetDataByPage: a,
                            onGetDataByRange: c,
                            itemClassName: u,
                            itemContentCallback: m,
                            listClassName: p,
                            overscan: g = 700,
                            pageSize: x = 20,
                            totalCount: y,
                            totalRequests: v,
                            debounceDurationInMs: C,
                            initialItemCount: f,
                            minInitialItemCount: k = 20,
                            handleRef: S,
                            alwaysShowScrollbar: N = !1,
                            testId: E,
                            isMobileLayout: A = !1,
                            shouldTriggerRangeChangedOn: P,
                            ...j
                        } = e,
                        [L, T] = (0, n.useState)(!1),
                        R = (0, n.useMemo)(
                            () =>
                                (0, s.A)((e) => {
                                    T(e);
                                }, 100),
                            [],
                        ),
                        b = (0, n.useMemo)(() => {
                            var e, t;
                            return A
                                ? {
                                      Scroller: _,
                                      List: null != (e = null == i ? void 0 : i.List) ? e : o,
                                      Item: null == i ? void 0 : i.Item,
                                      ScrollSeekPlaceholder: null == i ? void 0 : i.ScrollSeekPlaceholder,
                                  }
                                : {
                                      Scroller: _,
                                      List: null != (t = null == i ? void 0 : i.List) ? t : o,
                                      Item: null == i ? void 0 : i.Item,
                                      Header: null == i ? void 0 : i.Header,
                                      Footer: null == i ? void 0 : i.Footer,
                                      ScrollSeekPlaceholder: null == i ? void 0 : i.ScrollSeekPlaceholder,
                                  };
                        }, [i, v, A]),
                        I = f ? Math.min(f, k) : void 0;
                    return (0, l.jsxs)('div', {
                        className: (0, r.$)(d().root, { [d().root_scrolling]: L || N, [d().root_notScrolling]: !L && !N }, t),
                        'data-test-id': E,
                        children: [
                            A && (null == i ? void 0 : i.Header) && i.Header(),
                            (0, l.jsx)(h, {
                                overscan: g,
                                components: b,
                                listClassName: p,
                                itemClassName: u,
                                isScrolling: R,
                                itemContent: m,
                                scrollerRef: S,
                                totalCount: y,
                                pageSize: x,
                                onPageHandler: a,
                                onRangeHandler: c,
                                debounceDurationInMs: C,
                                initialItemCount: I,
                                shouldTriggerRangeChangedOn: P,
                                ...j,
                            }),
                            A && (null == i ? void 0 : i.Footer) && i.Footer(),
                        ],
                    });
                };
        },
        52598: (e) => {
            e.exports = { root: 'SeparatedArtistsWithContextMenuMobile_root__4BiJL', important: 'SeparatedArtistsWithContextMenuMobile_important__fSF1h' };
        },
        53514: (e, t, i) => {
            'use strict';
            i.d(t, { V: () => l });
            let l = { delay: { open: 1e3, close: 0 } };
        },
        57594: (e, t, i) => {
            'use strict';
            i.d(t, { P: () => s, g: () => n });
            var l = i(55178),
                r = i(25090);
            let s = (0, l.createContext)(null);
            function n() {
                let e = (0, l.useContext)(s);
                if (null === e) throw new r.t('Store cannot be null, please add a context provider', { code: 'E_CONTEXT_STORE_NULL' });
                return e;
            }
        },
        61376: (e, t, i) => {
            'use strict';
            i.d(t, { x: () => _ });
            var l = i(32290),
                r = i(63618),
                s = i(60900),
                n = i(21732),
                a = i(63423),
                o = i(82586),
                c = i(71926),
                d = i(22492),
                u = i.n(d);
            let _ = (e) => {
                let { className: t, isLiked: i, likesCount: d, handleLikeClick: _, ariaLabel: m } = e,
                    { formatNumber: p } = (0, s.A)();
                return (0, l.jsx)(a.$, {
                    className: (0, r.$)(u().root, t),
                    onClick: _,
                    variant: 'text',
                    withRipple: !1,
                    icon: (0, l.jsx)(o.I, { variant: i ? 'likedVariant' : 'likeVariant', size: 'xxs', className: u().icon }),
                    'aria-label': m,
                    'data-test-id': n.S7.CARD_LIKES,
                    children: (0, l.jsx)(c.HL, { variant: 'div', size: 's', type: 'entity', weight: 'medium', children: p(d) }),
                });
            };
        },
        62376: (e, t, i) => {
            'use strict';
            i.d(t, { U: () => s });
            var l = i(70204),
                r = i(34186);
            let s = () => (0, r.N)().get(l.Zf);
        },
        64170: (e, t, i) => {
            'use strict';
            i.d(t, { SomethingWentWrong: () => S });
            var l = i(32290),
                r = i(63618),
                s = i(96103),
                n = i(55178),
                a = i(60900),
                o = i(39407),
                c = i(63423),
                d = i(82586),
                u = i(71926),
                _ = i(17811),
                m = i(99923),
                p = i(90153),
                h = i(74416),
                g = i(62376),
                x = i(37240),
                y = i(83920),
                v = i(20472),
                C = i(12894),
                f = i(30310),
                k = i.n(f);
            let S = (0, s.PA)((e) => {
                let { className: t, withBackwardControl: i = !0 } = e,
                    { formatMessage: s } = (0, a.A)(),
                    f = s({ id: 'error-messages.something-went-wrong' });
                !(function (e) {
                    let t = (0, h.st)(),
                        { hash: i } = (0, h.gf)(),
                        { pageId: l } = (0, x.$)(),
                        r = (0, g.U)();
                    (0, n.useEffect)(() => {
                        if (!t || !i || !l) return;
                        let s = (0, _.F)({
                            params: {
                                entityType: m.EntityTypes.Error,
                                entityId: m.EntityTypes.SomethingWrong,
                                errorMessage: e,
                                hash: i,
                                pageId: l,
                                pageStyle: m.PageStyles.Fullscreen,
                                pagePlacement: m.PagePlacements.Fullscreen,
                                mainObjectType: m.DomainObjectType.NonApplicable,
                                mainObjectId: m.DomainObjectType.NonApplicable,
                            },
                            logger: r,
                            context: 'useSendEventOnSomethingWentWrongShowed',
                        });
                        s && (0, p.z5)(t.evgenInstance, s);
                    }, [t, e, i, l, r]);
                })(f);
                let { sendRefreshEvent: S } = (function () {
                        let e = (0, h.st)(),
                            { hash: t } = (0, h.gf)(),
                            { pageId: i } = (0, x.$)(),
                            l = (0, g.U)();
                        return {
                            sendRefreshEvent: (0, n.useCallback)(() => {
                                if (!e || !t || !i) return;
                                let r = (0, _.F)({
                                    params: {
                                        actionType: m.ActionType.Refresh,
                                        userInteractionType: m.UserInteractionType.Tap,
                                        entityType: m.EntityTypes.Error,
                                        entityId: m.EntityTypes.SomethingWrong,
                                        hash: t,
                                        pageId: i,
                                        pageStyle: m.PageStyles.Fullscreen,
                                        pagePlacement: m.PagePlacements.Fullscreen,
                                        mainObjectType: m.DomainObjectType.NonApplicable,
                                        mainObjectId: m.DomainObjectType.NonApplicable,
                                    },
                                    logger: l,
                                    context: 'useSendEventOnSomethingWentWrongRefreshed',
                                });
                                r && (0, p.bv)(e.evgenInstance, r);
                            }, [e, t, i, l]),
                        };
                    })(),
                    N = (0, n.useCallback)(() => {
                        (S(), (window.location.href = v.Z.main.href));
                    }, [S]),
                    { contentRef: E } = (0, y.g)();
                return (0, l.jsxs)('div', {
                    className: (0, r.$)(k().root, t),
                    children: [
                        i &&
                            (0, l.jsx)(C.L, { withBackwardFallback: '/', className: (0, r.$)(k().navigation, { [k().navigation_desktop]: !E }), withForwardControl: !1 }),
                        (0, l.jsxs)('div', {
                            className: (0, r.$)(k().content, { [k().content_shrink]: !i }),
                            children: [
                                (0, l.jsx)(d.I, { className: k().icon, variant: 'attention', size: 'xxl' }),
                                (0, l.jsx)(u.DZ, { className: (0, r.$)(k().title, k().important), variant: 'h3', size: 'xs', children: f }),
                                (0, l.jsxs)(u.HL, {
                                    className: (0, r.$)(k().text, k().important),
                                    variant: 'span',
                                    type: 'text',
                                    size: 'l',
                                    weight: 'normal',
                                    children: [!1, (0, l.jsx)(o.A, { id: 'page-error.try-to-restart-app' })],
                                }),
                                (0, l.jsx)(c.$, {
                                    onClick: N,
                                    className: k().button,
                                    role: 'link',
                                    color: 'secondary',
                                    size: 'l',
                                    radius: 'xxxl',
                                    children: (0, l.jsxs)(u.HL, {
                                        type: 'controls',
                                        variant: 'span',
                                        size: 'm',
                                        children: [!1, (0, l.jsx)(o.A, { id: 'page-error.restart-app-button' })],
                                    }),
                                }),
                            ],
                        }),
                    ],
                });
            });
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
            var l = i(32290),
                r = i(63618),
                s = i(55178),
                n = i(60900),
                a = i(39407),
                o = i(63423),
                c = i(82586),
                d = i(71926),
                u = i(58534),
                _ = i(70718),
                m = i.n(_);
            let p = (e) => {
                let { reloadBlocks: t, closeToast: i } = e,
                    _ = (0, s.useRef)(null),
                    { formatMessage: p } = (0, n.A)();
                (0, s.useEffect)(() => {
                    var e;
                    null == (e = _.current) || e.focus();
                }, []);
                let h = (0, s.useMemo)(
                    () =>
                        (0, l.jsxs)('div', {
                            className: m().message,
                            children: [
                                (0, l.jsx)(d.HL, {
                                    className: m().text,
                                    variant: 'div',
                                    type: 'controls',
                                    size: 'm',
                                    children: (0, l.jsx)(a.A, { id: 'error-messages.error-load-part-page' }),
                                }),
                                (0, l.jsx)(o.$, {
                                    ref: _,
                                    className: m().button,
                                    onClick: t,
                                    variant: 'text',
                                    'aria-label': p({ id: 'interface-actions.reload-part-page' }),
                                    icon: (0, l.jsx)(c.I, { variant: 'reset', size: 'xxs', className: m().icon }),
                                }),
                            ],
                        }),
                    [p, t],
                );
                return (0, l.jsx)(u.$, { className: (0, r.$)(m().root, m().important), message: h, closeToast: i });
            };
        },
        73141: (e, t, i) => {
            'use strict';
            i.d(t, { K: () => h });
            var l = i(32290),
                r = i(92708),
                s = i(55178),
                n = i(60900),
                a = i(63380),
                o = i(45477),
                c = i(75582),
                d = i(57594),
                u = i(90357),
                _ = i(97647),
                m = i(97755);
            let p = (e) => {
                    let { playlist: t, closeToast: i } = e;
                    return (0, l.jsx)(m.O, {
                        entityVariant: _.c.PLAYLIST,
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
                        [_, m] = (0, s.useState)(!1),
                        { formatMessage: h } = (0, n.A)();
                    return (0, s.useCallback)(async () => {
                        if (!t.isAuthorized)
                            return void i((0, l.jsx)(u.h, { error: h({ id: 'authorization-messages.need-to-authorizate' }) }), { containerId: o.u.ERROR });
                        if (_) return;
                        let s = { ...(0, r.HO)(e), url: e.url, isLiked: !e.isLiked };
                        m(!0);
                        let n = await e.toggleLike();
                        (m(!1),
                            n === a.f.OK
                                ? i((0, l.jsx)(p, { playlist: s }), { containerId: o.u.INFO })
                                : i((0, l.jsx)(u.h, { error: h({ id: 'error-messages.error-during-action' }) }), { containerId: o.u.ERROR }));
                    }, [t.isAuthorized, _, e, h, i]);
                };
        },
        73192: (e, t, i) => {
            'use strict';
            i.d(t, { A: () => p });
            var l = i(32290),
                r = i(92708),
                s = i(55178),
                n = i(60900),
                a = i(45477),
                o = i(75582),
                c = i(57594),
                d = i(90357),
                u = i(97647),
                _ = i(8097);
            let m = (e) => {
                    let { playlist: t, closeToast: i } = e;
                    return (0, l.jsx)(_.k, {
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
                        { formatMessage: u } = (0, n.A)(),
                        [_, p] = (0, s.useState)(!1);
                    return (0, s.useCallback)(async () => {
                        if (!t.isAuthorized)
                            return void i((0, l.jsx)(d.h, { error: u({ id: 'authorization-messages.need-to-authorizate' }) }), { containerId: a.u.ERROR });
                        if (_) return;
                        let s = { ...(0, r.HO)(e), url: e.url, isPinned: !e.isPinned };
                        p(!0);
                        let n = await e.togglePin();
                        (p(!1),
                            n
                                ? i((0, l.jsx)(m, { playlist: s }), { containerId: a.u.INFO })
                                : i((0, l.jsx)(d.h, { error: u({ id: 'error-messages.error-during-action' }) }), { containerId: a.u.ERROR }));
                    }, [t.isAuthorized, _, e, i, u]);
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
        78176: (e, t, i) => {
            'use strict';
            i.d(t, { V: () => v });
            var l = i(32290),
                r = i(63618),
                s = i(96103),
                n = i(55178),
                a = i(99923),
                o = i(21732),
                c = i(91027),
                d = i(50162),
                u = i(19740),
                _ = i(86269),
                m = i(71926),
                p = i(47745),
                h = i(32641),
                g = i(57594),
                x = i(16510),
                y = i.n(x);
            let v = (0, s.PA)((e) => {
                let { artist: t, className: i } = e,
                    { fullscreenPlayer: s } = (0, g.g)(),
                    x = (0, h.Z)(t.url),
                    C = (0, p.N)(),
                    f = (0, n.useMemo)(() => {
                        var e;
                        return (
                            'decomposed' in t &&
                            (null == (e = t.decomposed) ? void 0 : e.reduce((e, t) => (e.push((0, l.jsx)(v, { artist: t, className: i }, t.id)), e), []))
                        );
                    }, [t, i]),
                    k = (0, c.c)((e) => {
                        (s.modal.isOpened && s.modal.close(), C({ to: a.AppScreen.ArtistScreen }), x(e));
                    });
                return (0, l.jsxs)(l.Fragment, {
                    children: [
                        (0, l.jsxs)(u.Dr, {
                            className: (0, r.$)(y().root, i),
                            onClick: k,
                            'data-test-id': o.OA.artists.ARTIST_ITEM,
                            children: [
                                (0, l.jsx)(_.t, {
                                    radius: 'round',
                                    className: y().cover,
                                    children: (0, l.jsx)(d._V, { withAvatarReplace: !0, src: t.coverUri, size: 100, fit: 'contain', className: y().image }),
                                }),
                                (0, l.jsx)(m.HL, { variant: 'span', size: 'm', weight: 'medium', lineClamp: 1, children: t.name }),
                            ],
                        }),
                        f,
                    ],
                });
            });
        },
        78635: (e) => {
            e.exports = {
                root: 'KidsEditorialPlaylistsPage_root__HeHqc',
                scrollContainer: 'KidsEditorialPlaylistsPage_scrollContainer__Hy6HY',
                important: 'KidsEditorialPlaylistsPage_important__283cd',
                footer: 'KidsEditorialPlaylistsPage_footer___UaP5',
                item: 'KidsEditorialPlaylistsPage_item__0wBk2',
                content: 'KidsEditorialPlaylistsPage_content__6wWkP',
            };
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
            var l = i(32290),
                r = i(63618),
                s = i(96103),
                n = i(55178),
                a = i(60900),
                o = i(99923),
                c = i(21732),
                d = i(71483),
                u = i(91027),
                _ = i(6752),
                m = i(14934),
                p = i(82586),
                h = i(86269),
                g = i(71926),
                x = i(41677),
                y = i(73141),
                v = i(73192),
                C = i(71735),
                f = i(47745),
                k = i(2969),
                S = i(54391),
                N = i(23352),
                E = i(72396),
                A = i(5537),
                P = i(32641),
                j = i(28999),
                L = i(90169),
                T = i(57594),
                R = i(61376),
                b = i(11323),
                I = i(92744),
                O = i(61258),
                w = i(10180),
                D = i(90326),
                M = i(29268),
                z = i(34925),
                F = i(13931),
                W = i(19740),
                H = i(9017),
                Y = i(65477),
                B = i(46200),
                K = i(27120),
                $ = i(95134),
                U = i(79406),
                V = i(58237),
                X = i(56367),
                G = i(83755);
            let q = (0, s.PA)((e) => {
                var t;
                let { playlist: i, onOpenChange: r, open: s, ...n } = e,
                    { shouldShowBuySubscriptionModal: d, showBuySubscriptionModal: _ } = (0, B.q)(),
                    {
                        experiments: m,
                        settings: { isMobile: p },
                        trailer: h,
                        user: g,
                    } = (0, T.g)(),
                    x = (0, y.K)(i),
                    f = (0, v.A)(i),
                    k = (0, S.F)(),
                    { formatMessage: N } = (0, a.A)(),
                    E = (0, C.P)(),
                    A = m.checkExperiment(U.z.WebEditorsFeatures, 'on'),
                    P = (0, H.A)({ entityVariant: $.D.PLAYLIST, urlParams: { id: i.uid, kind: i.kind } });
                (0, K.N)(s);
                let j = (0, u.c)(() => {
                    if (d) return void _();
                    E() || (h.openPlaylistTrailer(i.id), k(o.DomainObjectType.Playlist, i.id));
                });
                return (0, l.jsxs)(W.W1, {
                    title: i.title,
                    onOpenChange: r,
                    open: s,
                    offsetOptions: 10,
                    isMobile: p,
                    ariaLabel: N({ id: 'interface-actions.context-menu' }),
                    containerDataTestId: c.Kq.playlist.PLAYLIST_CONTEXT_MENU,
                    ...n,
                    children: [
                        A && (0, l.jsx)(Y.d, { entityVariant: $.D.PLAYLIST, adminUrl: i.isFavouritePlaylist ? void 0 : P }),
                        !p && (0, l.jsx)(X.L, { onClick: f, isPinned: i.isPinned }),
                        !i.isFavouritePlaylist && (0, l.jsx)(V.T, { onClick: x, isLiked: i.isLiked, disabled: !g.isAuthorized }),
                        (null == (t = i.trailer) ? void 0 : t.isAvailable) && (0, l.jsx)(G.N, { onClick: j, disabled: !i.isAvailable }),
                    ],
                });
            });
            var J = i(11675),
                Z = i.n(J);
            let Q = (0, s.PA)((e) => {
                let { className: t, playlist: i, children: s, contentLinesCount: W, customDescription: H, onCoverMouseDown: Y } = e,
                    { ref: B, intersectionPropertyId: K } = (0, N.n)(),
                    {
                        trailer: $,
                        user: U,
                        paywall: { modal: V },
                    } = (0, T.g)(),
                    { from: X, utmLink: G } = (0, E.f)({ contextId: i.uuid, contextType: d.K.Playlist }),
                    { formatMessage: J } = (0, a.A)(),
                    { sendLikeSearchFeedback: Q, sendNavigateSearchFeedback: ee, sendPlaySearchFeedback: et } = (0, j.z)(),
                    [ei, el] = (0, n.useState)(!1),
                    [er, es] = (0, n.useState)(!1),
                    [en, ea] = (0, n.useState)(!1),
                    eo = (0, F.r)(i),
                    ec = (0, y.K)(i),
                    ed = (0, v.A)(i),
                    eu = (0, f.N)(),
                    e_ = (0, k.b)(),
                    em = (0, P.Z)(i.url),
                    ep = (0, S.F)(),
                    eh = (0, C.P)(),
                    eg = (0, u.c)((e) => {
                        if ((e.stopPropagation(), eh())) return void e.preventDefault();
                        ($.setUtmLink(G), $.openPlaylistTrailer(i.id), ep(o.DomainObjectType.Playlist, i.id));
                    }),
                    [ex, ey] = (0, n.useState)(!1),
                    { isPlaying: ev, togglePlay: eC } = (0, L.D)({
                        playContextParams: { contextData: { type: d.K.Playlist, meta: { id: i.id, uuid: i.uuid }, from: X, utmLink: G }, loadContextMeta: !0 },
                    }),
                    ef = (0, u.c)(() => {
                        (eu({ to: o.AppScreen.PlaylistScreen }), null == ee || ee());
                    }),
                    ek = (0, u.c)((e) => {
                        (ef(), em(e));
                    }),
                    eS = (0, A.N)(),
                    eN = (0, u.c)(() => {
                        if (!eh()) {
                            if (eS) return void V.open();
                            (ei || ev || (el(!0), null == et || et()), eC(), e_(!ev));
                        }
                    }),
                    eE = (0, u.c)(() => {
                        (er || i.isLiked || (es(!0), null == Q || Q()), ec());
                    }),
                    eA = (0, u.c)((e) => {
                        (e.preventDefault(), e.stopPropagation());
                    }),
                    eP = (0, u.c)((e) => {
                        (ea(e), ey(e));
                    }),
                    ej = (0, n.useMemo)(() => {
                        var e;
                        return H
                            ? (0, l.jsx)(g.HL, { variant: 'span', type: 'entity', size: 's', weight: 'medium', lineClamp: 2, children: H }, i.getKey('description'))
                            : (null == (e = i.artists) ? void 0 : e.length)
                              ? (0, l.jsx)(
                                    x.i,
                                    { className: Z().artists, artists: i.artists, lineClamp: 1, linkClassName: Z().artistLink, captionSize: 's' },
                                    i.getKey('description'),
                                )
                              : void 0;
                    }, [H, i]),
                    eL = (0, _.L)(() => {
                        if (!i.isFavouritePlaylist)
                            return (0, l.jsx)(
                                I.c,
                                {
                                    className: (0, r.$)(Z().likeButton, Z().control),
                                    isLiked: i.isLiked,
                                    onClick: eE,
                                    variant: 'default',
                                    size: 's',
                                    iconSize: 'xxs',
                                    disabled: !U.isAuthorized,
                                },
                                i.getKey('LikeButton'),
                            );
                    }),
                    eT = (0, n.useMemo)(() => {
                        var e;
                        if (null == i || null == (e = i.trailer) ? void 0 : e.isAvailable)
                            return (0, l.jsx)(
                                z.n,
                                {
                                    children: (0, l.jsx)(
                                        M.k,
                                        { className: (0, r.$)(Z().trailerButton, Z().control), radius: 'round', size: 's', iconSize: 'xxs', onClick: eg },
                                        i.getKey('TrailerButton'),
                                    ),
                                },
                                i.getKey('PlaylilstCardTrailerTooltip'),
                            );
                    }, [eg, i]),
                    eR = (0, n.useMemo)(
                        () =>
                            (0, l.jsx)(
                                w.O,
                                { onClick: ed, isPinned: i.isPinned, className: (0, r.$)(Z().pinButton, Z().control), withRipple: !1 },
                                i.getKey('PinButton'),
                            ),
                        [ed, i],
                    ),
                    eb = (0, n.useMemo)(
                        () =>
                            (0, l.jsx)(h.t, {
                                className: Z().cover,
                                radius: 's',
                                withShadow: !0,
                                'data-test-id': c.Kq.playlist.PLAYLIST_CARD,
                                children: (0, l.jsxs)('div', {
                                    className: Z().coverBlock,
                                    onClick: ek,
                                    onMouseDown: Y,
                                    children: [
                                        (0, l.jsx)(b.B, {
                                            className: Z().image,
                                            src: i.coverUri,
                                            size: 200,
                                            fit: 'cover',
                                            alt: eo,
                                            withAvatarReplace: !0,
                                            'aria-hidden': !0,
                                        }),
                                        (0, l.jsx)(m.hg, {
                                            isVisible: en || ex,
                                            className: Z().controls,
                                            playControl: (0, l.jsx)(
                                                D.D,
                                                {
                                                    className: (0, r.$)(Z().playButton, Z().control),
                                                    buttonVariant: 'default',
                                                    withHover: !1,
                                                    iconSize: 'xl',
                                                    variant: 'filled',
                                                    onClick: eN,
                                                    isPlaying: ev,
                                                    disabled: !i.isAvailable,
                                                },
                                                i.getKey('PlayButton'),
                                            ),
                                            likeControl: eL,
                                            menuControl: (0, l.jsx)(
                                                q,
                                                {
                                                    playlist: i,
                                                    onOpenChange: eP,
                                                    open: en,
                                                    onClick: eA,
                                                    className: (0, r.$)(Z().menuButton, Z().control),
                                                    icon: (0, l.jsx)(p.I, { size: 'xxs', variant: 'more' }),
                                                    size: 's',
                                                    'data-test-id': c.Kq.playlist.PLAYLIST_CONTEXT_MENU_BUTTON,
                                                },
                                                i.getKey('PlaylistContextMenu'),
                                            ),
                                            pinControl: eR,
                                            trailerControl: eT,
                                        }),
                                    ],
                                }),
                            }),
                        [ek, Y, i, eo, en, ex, eN, ev, eL, eP, eA, eR, eT],
                    ),
                    eI = !!i.actualLikesCount && !i.isLikesCountHidden;
                return (0, l.jsxs)(m.MN, {
                    ref: B,
                    'aria-label': eo,
                    className: (0, r.$)(Z().root, t),
                    title: (0, l.jsx)(g.HL, {
                        variant: 'div',
                        type: 'entity',
                        size: 's',
                        weight: 'medium',
                        lineClamp: 2,
                        'data-test-id': c.Kq.playlist.PLAYLIST_TITLE,
                        children: (0, l.jsx)(O.N, { className: Z().titleLink, href: i.url, onClick: ef, children: i.title }),
                    }),
                    srTitle: (0, l.jsx)(O.N, { href: i.url, onClick: ef, children: i.title }),
                    'data-intersection-property-id': K,
                    contentLinesCount: W,
                    view: eb,
                    description: ej,
                    'data-test-id': c.Kq.playlist.PLAYLIST_ITEM,
                    children: [
                        eI &&
                            (0, l.jsx)(R.x, {
                                ariaLabel: J({ id: 'entity-names.likes-counter' }, { counter: i.actualLikesCount }),
                                likesCount: i.actualLikesCount,
                                isLiked: i.isLiked,
                                handleLikeClick: ec,
                            }),
                        s,
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
        86159: (e, t, i) => {
            'use strict';
            (i.r(t), i.d(t, { default: () => R }));
            var l = i(32290),
                r = i(21916),
                s = i(63618),
                n = i(96103),
                a = i(55178),
                o = i(60900),
                c = i(21732),
                d = i(91027),
                u = i(6752),
                _ = i(71926),
                m = i(64170),
                p = i(7999),
                h = i(83460),
                g = i(48922),
                x = i(22714),
                y = i(83808),
                v = i(83920),
                C = i(3796),
                f = i(57594),
                k = i(11262),
                S = i(97841),
                N = i(32468),
                E = i(74694),
                A = i(89020),
                P = i(45257),
                j = i(78635),
                L = i.n(j);
            let T = (0, n.PA)((e) => {
                    var t, i, n;
                    let { id: j } = e,
                        {
                            kids: { kidsEditorialPlaylistSubpage: T },
                            settings: { isMobile: R },
                        } = (0, f.g)(),
                        b = (0, y.W)(),
                        { contentScrollRef: I, setContentScrollRef: O } = (0, v.g)(),
                        { formatMessage: w } = (0, o.A)(),
                        D = (0, d.c)((e) => {
                            T.getPlaylists({ page: e, pageSize: 20 });
                        });
                    (T.isNotFound && (0, r.notFound)(),
                        (0, a.useEffect)(
                            () => () => {
                                T.reset();
                            },
                            [T],
                        ));
                    let M = (0, u.L)(() => ({ Footer: () => (0, l.jsx)(N.A, { children: (0, l.jsx)(S.w, { className: L().footer }) }) }));
                    if (
                        ((0, C.J)(T.isResolved),
                        (0, k.X)(T.pagesLoader, D),
                        T.isNeededToLoad && (0, a.use)(T.getData({ id: j, page: 0, pageSize: 20 })),
                        T.isSomethingWrong)
                    )
                        return (0, l.jsx)(m.SomethingWentWrong, {});
                    let z = T.isLoading ? 20 : null != (i = null == (t = T.pagesLoader.pager) ? void 0 : t.total) ? i : 0;
                    return (0, l.jsx)(x.n, {
                        pageId: g._Q.KIDS_EDITORIAL_PLAYLISTS,
                        children: (0, l.jsx)(p.h, {
                            scrollElement: I,
                            outerTitle: T.title,
                            children: (0, l.jsxs)('div', {
                                className: L().root,
                                'data-test-id': c.Xk.kids.KIDS_EDITORIAL_PLAYLISTS,
                                children: [
                                    (0, l.jsx)(E.Y, {
                                        variant: E.V.TEXT,
                                        withForwardControl: !1,
                                        withBackwardControl: b.canBack,
                                        children: (0, l.jsx)(_.DZ, { variant: 'h2', weight: 'bold', size: 'xl', lineClamp: 1, children: T.title }),
                                    }),
                                    (0, l.jsx)(P.$, {
                                        context: { listAriaLabel: w({ id: 'mixes.playlists-list' }, { genreName: T.title || '' }) },
                                        className: (0, s.$)(L().scrollContainer, L().important),
                                        customComponents: M,
                                        itemContentCallback: (e) => {
                                            let t = T.playlists[e],
                                                i = w({ id: 'loading-messages.entity-is-loading' }, { entityName: w({ id: 'entity-names.playlist' }) });
                                            return t ? (0, l.jsx)(h.B, { playlist: t, contentLinesCount: 3 }, t.key) : (0, l.jsx)(A.V, { isActive: !0, 'aria-label': i });
                                        },
                                        totalCount: z,
                                        onGetDataByPage: D,
                                        pageSize: 20,
                                        totalRequests: null != (n = T.pagesLoader.requestsCount) ? n : 0,
                                        listClassName: L().content,
                                        itemClassName: L().item,
                                        handleRef: O,
                                        isMobileLayout: R,
                                        useWindowScroll: R,
                                    }),
                                ],
                            }),
                        }),
                    });
                }),
                R = () => {
                    let e = (0, r.useSearchParams)().get('id');
                    return (e || (0, r.notFound)(), (0, l.jsx)(T, { id: e }));
                };
        },
        89020: (e, t, i) => {
            'use strict';
            i.d(t, { V: () => c });
            var l = i(32290),
                r = i(63618),
                s = i(21732),
                n = i(79856),
                a = i(80556),
                o = i.n(a);
            let c = (e) => {
                let {
                    isActive: t,
                    className: i,
                    shimmerClassName: a,
                    round: c,
                    'aria-label': d,
                    centered: u,
                    withInfo: _ = !0,
                    linesCount: m = 3,
                    withSubcover: p,
                    radius: h = 'l',
                } = e;
                return (0, l.jsxs)('div', {
                    'aria-label': d,
                    'aria-live': t ? 'polite' : 'off',
                    'aria-busy': t,
                    className: (0, r.$)(o().root, i),
                    'data-test-id': s.S7.ENTITY_CARD_SHIMMER,
                    children: [
                        p && (0, l.jsx)(n.W, { isActive: t, className: o().subcover, radius: 'l' }),
                        (0, l.jsx)(n.W, { isActive: t, className: (0, r.$)(o().cover, a, { [o().cover_round]: c, [o().cover_withSubcover]: p }), radius: h }),
                        _ &&
                            (0, l.jsx)('div', {
                                className: (0, r.$)(o().infoContainer, o()['content_linesCount_'.concat(m)], { [o().infoContainer_centered]: u }),
                                children: (0, l.jsx)(n.W, { isActive: t, className: (0, r.$)(o().title, { [o().title_withSubcover]: p }), radius: 's' }),
                            }),
                    ],
                });
            };
        },
        97841: (e, t, i) => {
            'use strict';
            i.d(t, { w: () => N });
            var l = i(32290),
                r = i(63618),
                s = i(96103),
                n = i(60900),
                a = i(31010),
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
                    let { formatMessage: t, language: i, tld: l, year: r } = e;
                    return {
                        year: r,
                        yandexMusic: { id: o.YANDEX, title: t({ id: 'footer.yandex-music' }), url: c(o.YANDEX, l, i) },
                        yandexProjects: { id: o.YANDEX_PROJECTS, title: t({ id: 'footer.yandex-project' }), url: c(o.YANDEX_PROJECTS, l, i) },
                    };
                };
            var u = i(15559),
                _ = i(8626);
            let m = (e) => e(new Date(), (0, _.m)());
            var p = i(61945),
                h = i(57594),
                g = i(77088),
                x = i.n(g),
                y = i(21732),
                v = i(71926),
                C = i(61258);
            let f = (e) => {
                    let { className: t, data: i } = e;
                    return (0, l.jsxs)('div', {
                        className: (0, r.$)(x().copyrights, t),
                        'data-test-id': y.S7.FOOTER_COPYRIGHTS,
                        children: [
                            (0, l.jsxs)(v.HL, {
                                variant: 'span',
                                type: 'text',
                                size: 's',
                                weight: 'medium',
                                className: x().text,
                                children: [
                                    '\xa9 ',
                                    i.year,
                                    ' \xa0',
                                    (0, l.jsx)(C.N, {
                                        target: '_blank',
                                        href: i.yandexMusic.url,
                                        className: (0, r.$)(x().copyrightLink, x().yandexMusicLink),
                                        'data-test-id': y.S7.FOOTER_YANDEX_MUSIC_LINK,
                                        children: i.yandexMusic.title,
                                    }),
                                ],
                            }),
                            (0, l.jsx)(v.HL, { variant: 'span', type: 'text', size: 's', weight: 'medium', children: ' • ' }),
                            (0, l.jsx)(C.N, {
                                target: '_blank',
                                href: i.yandexProjects.url,
                                className: x().copyrightLink,
                                'data-test-id': y.S7.FOOTER_YANDEX_PROJECT_LINK,
                                children: i.yandexProjects.title,
                            }),
                        ],
                    });
                },
                k = (e) => {
                    let { disclaimer: t, links: i } = e;
                    return (0, l.jsxs)('div', {
                        className: x().links,
                        children: [
                            (0, l.jsx)('ol', {
                                className: x().list,
                                'data-test-id': y.S7.FOOTER_LINKS_LIST,
                                children: i.map((e) => {
                                    let { id: t, title: i, url: r } = e;
                                    return (0, l.jsx)(
                                        'li',
                                        {
                                            className: x().item,
                                            children: (0, l.jsx)(C.N, { target: '_blank', href: r, className: x().link, 'data-test-id': y.S7.FOOTER_LINK, children: i }),
                                        },
                                        t,
                                    );
                                }),
                            }),
                            (0, l.jsx)(v.HL, {
                                variant: 'span',
                                type: 'text',
                                size: 'm',
                                weight: 'medium',
                                className: x().explicitText,
                                tabIndex: 0,
                                dangerouslySetInnerHTML: { __html: t },
                                'data-test-id': y.S7.FOOTER_DISCLAIMER_TEXT,
                            }),
                        ],
                    });
                },
                S = (e) => {
                    let { className: t, data: i } = e;
                    return (0, l.jsxs)('footer', {
                        className: (0, r.$)(x().root, x().important, t),
                        'data-test-id': y.S7.FOOTER,
                        children: [(0, l.jsx)(k, { links: i.links, disclaimer: i.disclaimer }), (0, l.jsx)(f, { data: i.copyrights })],
                    });
                };
            (0, s.PA)((e) => {
                let { className: t } = e,
                    { location: i } = (0, h.g)(),
                    { formatDate: r, formatMessage: s } = (0, n.A)(),
                    { language: a } = (0, p.h)(),
                    o = d({ formatMessage: s, language: a, tld: i.tld, year: m(r) });
                return (0, l.jsx)(f, { className: t, data: o });
            });
            let N = (0, s.PA)((e) => {
                var t;
                let { className: i } = e,
                    { experiments: s, location: _, user: g } = (0, h.g)(),
                    { formatDate: y, formatMessage: v } = (0, n.A)(),
                    { isEnabled: C } = null != (t = (0, a.P)()) ? t : {},
                    { language: f } = (0, p.h)(),
                    k = ((e) => {
                        let { checkExperiment: t, formatMessage: i, isWebApplication: l, language: r, tld: s, userRegion: n, year: a } = e;
                        return {
                            links: ((e) => {
                                let { formatMessage: t, isWebApplication: i, tld: l, language: r, userRegion: s } = e,
                                    n = { id: o.COPYRIGHT_HOLDER, title: t({ id: 'footer.links-copyright-holders' }), url: c(o.COPYRIGHT_HOLDER, l, r) },
                                    a = { id: o.PRIVACY_POLICY, title: t({ id: 'footer.links-privacy-policy' }), url: c(o.PRIVACY_POLICY, l, r) },
                                    d = { id: o.AGREEMENT, title: t({ id: 'footer.links-terms' }), url: c(o.AGREEMENT, l, r) },
                                    u = { id: o.RECOMMENDATION_RULES, title: t({ id: 'footer.links-recommendation-rules' }), url: c(o.RECOMMENDATION_RULES, l, r) },
                                    _ = { id: o.HELP, title: t({ id: 'footer.links-help' }), url: c(o.HELP, l, r) },
                                    m = [n, d, u];
                                return (i && 'ru' === s && m.push(a), m.push(_), m);
                            })({ formatMessage: i, isWebApplication: l, language: r, tld: s, userRegion: n }),
                            disclaimer: (0, u.v)({
                                checkExperiment: t,
                                getDisclaimerContent: () => i({ id: 'footer.disclaimer-content' }),
                                getExplicitContent: () => i({ id: 'footer.explicit-content' }),
                                userRegion: n,
                            }),
                            copyrights: d({ formatMessage: i, language: r, tld: s, year: a }),
                        };
                    })({
                        checkExperiment: (e, t) => s.checkExperiment(e, t),
                        formatMessage: v,
                        isWebApplication: !1,
                        tld: _.tld,
                        language: f,
                        userRegion: g.account.data.userSessionRegionIso,
                        year: m(y),
                    });
                return (0, l.jsx)(S, { className: (0, r.$)({ [x().root_withOffsetForDeeplink]: C }, i), data: k });
            });
        },
    },
    (e) => {
        (e.O(
            0,
            [
                1010, 7412, 7231, 2147, 4517, 9763, 1256, 3608, 5904, 6706, 5472, 8378, 900, 2536, 2146, 3353, 2474, 8035, 347, 2732, 1410, 1417, 8506, 6050, 5806, 7702,
                6874, 9155, 861, 4668, 9740, 1175, 4499, 8816, 4220, 9562, 7358,
            ],
            () => e((e.s = 18897)),
        ),
            (_N_E = e.O()));
    },
]);
