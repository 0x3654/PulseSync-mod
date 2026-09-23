(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [453],
    {
        3377: (e, t, i) => {
            'use strict';
            i.d(t, { WithAuth: () => h });
            var s = i(32290),
                r = i(96103),
                l = i(21916),
                n = i(63618),
                a = i(39407),
                o = i(71926),
                c = i(94218),
                d = i(55556),
                u = i.n(d);
            let _ = (0, r.PA)(() =>
                (0, s.jsxs)('div', {
                    className: u().root,
                    children: [
                        (0, s.jsx)(o.DZ, {
                            className: (0, n.$)(u().title, u().important),
                            variant: 'h3',
                            size: 'xs',
                            children: (0, s.jsx)(a.A, { id: 'authorization.enter-title' }),
                        }),
                        (0, s.jsx)(o.HL, {
                            className: (0, n.$)(u().text, u().important),
                            variant: 'span',
                            type: 'text',
                            size: 'l',
                            weight: 'normal',
                            children: (0, s.jsx)(a.A, { id: 'authorization.enter-text' }),
                        }),
                        (0, s.jsx)(c.H, { size: 'l', className: u().button }),
                    ],
                }),
            );
            var m = i(20472),
                p = i(57594);
            let h = (0, r.PA)((e) => {
                let { children: t, withRedirectToMainPage: i } = e,
                    { user: r } = (0, p.g)();
                return r.isAuthorized ? t : (i && (0, l.redirect)(m.Z.main.href), (0, s.jsx)(_, {}));
            });
        },
        5537: (e, t, i) => {
            'use strict';
            i.d(t, { N: () => l });
            var s = i(57594),
                r = i(79406);
            let l = () => {
                var e, t;
                let {
                    user: i,
                    settings: { browserInfo: l },
                    experiments: n,
                } = (0, s.g)();
                return (
                    !(null == l ? void 0 : l.isTouch) &&
                    i.isAuthorized &&
                    !i.hasPlus &&
                    (null == (t = n.getExperiment(r.z.WebNextDesktopWebFreemium)) || null == (e = t.value) ? void 0 : e.closeListening) === 'on'
                );
            };
        },
        8626: (e, t, i) => {
            'use strict';
            i.d(t, { m: () => s });
            let s = () => ({ year: 'numeric' });
        },
        10733: (e, t, i) => {
            'use strict';
            i.d(t, { G: () => l });
            var s = i(91945),
                r = i(50891);
            class l extends r.m {
                constructor(e, t) {
                    (super(e, { code: 'E_HTTP_CLIENT_NON_2XX_3XX_RESPONSE', cause: t.cause }),
                        (0, s._)(this, 'name', 'HttpErrorException'),
                        (0, s._)(this, 'statusCode', void 0),
                        (this.statusCode = t.statusCode),
                        Object.setPrototypeOf(this, l.prototype));
                }
            }
        },
        11262: (e, t, i) => {
            'use strict';
            i.d(t, { X: () => d });
            var s = i(32290),
                r = i(55178),
                l = i(91027),
                n = i(71730),
                a = i(45477),
                o = i(75582),
                c = i(49399);
            let d = (e, t) => {
                let { notify: i, dismiss: d } = (0, o.l)(),
                    u = (0, r.useRef)(void 0),
                    _ = (0, l.c)(() => {
                        var i;
                        (d({ notificationId: u.current }), (u.current = 0));
                        let s = [...(null != (i = e.lastRejectedPagesList) ? i : [])].reverse().filter((t) => {
                            var i;
                            return (null == (i = e.pageStates) ? void 0 : i[t]) === c.G.REJECT;
                        });
                        (e.resetRejectedPagesState(),
                            s.forEach((e) => {
                                t(e);
                            }));
                    });
                (0, r.useEffect)(() => {
                    e.rejectedPagesCount > 0 && !u.current && (u.current = i((0, s.jsx)(n.L, { reloadBlocks: _ }), { containerId: a.u.ERROR, autoClose: !1 }));
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
            i.d(t, { r: () => l });
            var s = i(55178),
                r = i(60900);
            let l = (e) => {
                let { formatMessage: t } = (0, r.A)();
                return (0, s.useMemo)(() => {
                    let i = '';
                    e.isLiked && !e.actualLikesCount
                        ? (i = t({ id: 'entity-names.has-your-like' }))
                        : 'number' == typeof e.actualLikesCount &&
                          (i =
                              e.actualLikesCount > 0
                                  ? t({ id: 'entity-names.likes-counter' }, { counter: e.actualLikesCount })
                                  : t({ id: 'entity-names.likes-counter-empty' }));
                    let s = t({ id: 'entity-names.playlist-name' }, { playlistName: e.title });
                    return ''.concat(s, ' ').concat(i);
                }, [t, e]);
            };
        },
        15559: (e, t, i) => {
            'use strict';
            i.d(t, { v: () => r });
            var s = i(79406);
            let r = (e) => {
                let { checkExperiment: t, getDisclaimerContent: i, getExplicitContent: r, userRegion: l } = e;
                return 'ru' === l && t(s.z.WebNextFooterDisclaimer, 'on') ? i() : r();
            };
        },
        16510: (e) => {
            e.exports = { root: 'ArtistItem_root__Q_mgJ', image: 'ArtistItem_image__5rKWF', cover: 'ArtistItem_cover__FTvHo' };
        },
        20472: (e, t, i) => {
            'use strict';
            i.d(t, { Z: () => r });
            var s = i(68243);
            let r = {
                main: (0, s.u)('/'),
                chart: (0, s.u)('/chart'),
                chartPodcasts: (0, s.u)('/chart/podcasts'),
                collection: (0, s.u)('/collection'),
                collectionAlbums: (0, s.u)('/collection/albums'),
                collectionArtists: (0, s.u)('/collection/artists'),
                collectionClips: (0, s.u)('/collection/clips'),
                collectionDislikes: (0, s.u)('/collection/dislikes'),
                collectionKids: (0, s.u)('/collection/kids'),
                collectionKidsAlbums: (0, s.u)('/collection/kids/albums'),
                collectionKidsPlaylists: (0, s.u)('/collection/kids/playlists'),
                collectionKidsTracks: (0, s.u)('/collection/kids/tracks'),
                collectionNonMusic: (0, s.u)('/collection/non-music'),
                collectionNonMusicLiked: (0, s.u)('/collection/non-music/liked'),
                collectionVibeRooms: (0, s.u)('/collection/multivibes'),
                collectionPlaylists: (0, s.u)('/collection/playlists'),
                collectionPlaylistsCreated: (0, s.u)('/collection/playlists/created'),
                collectionPlaylistsLiked: (0, s.u)('/collection/playlists/liked'),
                collectionShelf: (0, s.u)('/collection/shelf'),
                collectionShelfLiked: (0, s.u)('/collection/shelf/liked'),
                collectionShelfNewEpisodes: (0, s.u)('/collection/shelf/new-episodes'),
                collectionShelfRecentlyPlayed: (0, s.u)('/collection/shelf/recently-played'),
                concerts: (0, s.u)('/concerts'),
                kids: (0, s.u)('/kids'),
                mixes: (0, s.u)('/mixes'),
                musicHistory: (0, s.u)('/music-history'),
                muzmarket: (0, s.u)('/muzmarket'),
                mymusic: (0, s.u)('/mymusic'),
                mymusicDownloadsTracks: (0, s.u)('/mymusic/downloads/tracks'),
                multivibe: (0, s.u)('/multivibe'),
                nonMusic: (0, s.u)('/non-music'),
                pay: (0, s.u)('/pay'),
                userSlides: (0, s.u)('/slides/user'),
                search: (0, s.u)('/search'),
                searchHistory: (0, s.u)('/search/history'),
                settings: (0, s.u)('/settings'),
                video: (0, s.u)('/video'),
            };
        },
        22492: (e) => {
            e.exports = { icon: 'CardLikes_icon__l95lW', root: 'CardLikes_root__g8ala' };
        },
        29268: (e, t, i) => {
            'use strict';
            i.d(t, { k: () => u });
            var s = i(32290),
                r = i(55178),
                l = i(60900),
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
                            forwardRef: x,
                            style: g,
                            children: y,
                        } = e,
                        { formatMessage: v } = (0, l.A)(),
                        C = v({ id: 'trailer.button-aria-label' });
                    return (0, s.jsx)(a.$, {
                        className: h,
                        color: 'secondary',
                        radius: d,
                        size: r,
                        variant: t,
                        withRipple: i,
                        flexIcon: !0,
                        'aria-label': C,
                        onClick: m,
                        ref: x,
                        icon: (0, s.jsx)(o.I, { variant: 'trailer', size: u, className: p }),
                        disabled: _,
                        'data-intersection-property-id': c.N,
                        style: g,
                        'data-test-id': n.S7.TRAILER_BUTTON,
                        children: y,
                    });
                },
                u = (0, r.forwardRef)((e, t) => (0, s.jsx)(d, { forwardRef: t, ...e }));
        },
        30294: (e, t, i) => {
            'use strict';
            i.d(t, { c: () => s });
            let s = 20;
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
            i.d(t, { H: () => r, P: () => l });
            var s = i(55178);
            let r = (0, s.createContext)(null),
                l = () => (0, s.useContext)(r);
        },
        32468: (e, t, i) => {
            'use strict';
            i.d(t, { A: () => n });
            var s = i(32290),
                r = i(77088),
                l = i.n(r);
            let n = (e) => {
                let { children: t } = e;
                return (0, s.jsx)('footer', { className: l().empty });
            };
        },
        33898: (e, t, i) => {
            'use strict';
            var s;
            (i.d(t, { Z: () => s }),
                (function (e) {
                    ((e.METHOD_NOT_SUPPORTED = 'E_BEACON_METHOD_NOT_SUPPORTED'),
                        (e.NOT_AVAILABLE = 'E_BEACON_NOT_AVAILABLE'),
                        (e.QUEUE_FAILED = 'E_BEACON_QUEUE_FAILED'),
                        (e.NO_RESPONSE_DATA = 'E_BEACON_NO_RESPONSE_DATA'),
                        (e.RETRY_EXHAUSTED = 'E_BEACON_RETRY_EXHAUSTED'));
                })(s || (s = {})));
        },
        33960: (e) => {
            e.exports = {
                root: 'CollectionKidsSubPageEmpty_root__53xVY',
                scrollableContainer: 'CollectionKidsSubPageEmpty_scrollableContainer__Dh6Sp',
                content: 'CollectionKidsSubPageEmpty_content__VZZg5',
                icon: 'CollectionKidsSubPageEmpty_icon__IQAON',
                title: 'CollectionKidsSubPageEmpty_title__t9H4h',
                button: 'CollectionKidsSubPageEmpty_button__26EKY',
                footer: 'CollectionKidsSubPageEmpty_footer__XQnAw',
            };
        },
        34925: (e, t, i) => {
            'use strict';
            i.d(t, { n: () => n });
            var s = i(32290),
                r = i(60900),
                l = i(70280);
            let n = (e) => {
                let { children: t } = e,
                    { formatMessage: i } = (0, r.A)();
                return (0, s.jsx)(l.m_, {
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
            i.d(t, { i: () => H });
            var s = i(32290),
                r = i(63618),
                l = i(96103),
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
                x = i(71926),
                g = i(47745),
                y = i(32641),
                v = i(28999),
                C = i(61258),
                E = i(19383);
            let N = (0, l.PA)((e) => {
                    let {
                            artist: t,
                            withLink: i = !0,
                            linkClassName: r,
                            captionClassName: l,
                            captionSize: n = 'm',
                            allArtistsTitle: c,
                            withCustomTooltip: d,
                            hoverSettings: u,
                        } = e,
                        { formatMessage: N } = (0, _.A)(),
                        {
                            track: f,
                            settings: { isMobile: S },
                        } = (0, o.g)(),
                        k = (0, y.Z)(t.url),
                        { sendNavigateSearchFeedback: A } = (0, v.z)(),
                        j = (0, g.N)(),
                        P = ((e) => {
                            let { artist: t, callback: i } = e,
                                { currentTrackInfo: s, fullscreenPlayer: r, fullscreenVideoPlayer: l } = (0, o.g)(),
                                { modal: n } = s;
                            return (0, E.l)({
                                entity: t,
                                callback: i,
                                onBeforeHandle: (e) => {
                                    (null == e || e.stopPropagation(), n.isOpened && (s.reset(), n.close()), r.modal.isOpened && r.modal.close());
                                },
                                onAfterHandled: () => {
                                    l.modal.isOpened && (l.modal.close(), l.reset());
                                },
                                preventDefaultWhenSafe: !0,
                            });
                        })({
                            artist: t,
                            callback: (0, h.c)((e) => {
                                (S && f.isOpened && f.close(), k(e));
                            }),
                        }),
                        T = (0, h.c)((e) => {
                            (j({ to: m.AppScreen.ArtistScreen }), null == A || A(), P(e));
                        });
                    return i && !t.various
                        ? (0, s.jsx)(C.N, {
                              'aria-label': N({ id: 'entity-names.artist-name' }, { artistName: t.name }),
                              className: r,
                              href: t.url,
                              onClick: T,
                              title: d ? void 0 : c || t.name,
                              'data-test-id': p.OA.artists.SEPARATED_ARTIST_TITLE,
                              children: (0, s.jsx)(a.m_, {
                                  enabled: !c && d,
                                  offsetOptions: 4,
                                  placement: 'top',
                                  text: c || t.name,
                                  hoverSettings: u,
                                  children: (0, s.jsx)(x.HL, { variant: 'span', type: 'entity', size: n, weight: 'medium', className: l, children: t.name }),
                              }),
                          })
                        : (0, s.jsx)(a.m_, {
                              enabled: !c && d,
                              offsetOptions: 4,
                              placement: 'top',
                              text: c || t.name,
                              hoverSettings: u,
                              children: (0, s.jsx)(x.HL, {
                                  variant: 'span',
                                  type: 'entity',
                                  size: n,
                                  weight: 'medium',
                                  className: l,
                                  title: d ? void 0 : c || t.name,
                                  'data-test-id': p.OA.artists.SEPARATED_ARTIST_TITLE,
                                  children: t.name,
                              }),
                          });
                }),
                f = (e) => {
                    let {
                            artist: t,
                            withLink: i = !0,
                            linkClassName: r,
                            captionClassName: l,
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
                                              (0, s.jsx)(
                                                  N,
                                                  {
                                                      artist: t,
                                                      withLink: i,
                                                      linkClassName: r,
                                                      captionClassName: l,
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
                        }, [t.decomposed, u, i, r, l, a, o, c, d]);
                    return (0, s.jsxs)(s.Fragment, {
                        children: [
                            (0, s.jsx)(N, {
                                artist: t,
                                withLink: i,
                                linkClassName: r,
                                captionClassName: l,
                                captionSize: a,
                                allArtistsTitle: o,
                                withCustomTooltip: c,
                                hoverSettings: d,
                            }),
                            _,
                        ],
                    });
                };
            var S = i(39407),
                k = i(63887);
            let A = (e) => {
                let { spoilerArtistsCount: t, spoilerClassName: i, handleOnSpoilerClick: l } = e;
                return (0, s.jsxs)(s.Fragment, {
                    children: [
                        ' ',
                        (0, s.jsx)(k.N, {
                            role: 'button',
                            href: '',
                            className: (0, r.$)(u().spoiler, i),
                            onClick: l,
                            rel: 'nofollow',
                            'data-test-id': p.OA.artists.SEPARATED_ARTISTS_SPOILER,
                            children: (0, s.jsx)(S.A, { id: 'entity-names.number-of-more-artists', values: { counter: t } }),
                        }),
                    ],
                });
            };
            var j = i(8055),
                P = i(6752),
                T = i(78035),
                L = i(78176),
                b = i(83598),
                O = i.n(b);
            let R = (0, l.PA)((e) => {
                    let { label: t, artists: i, forwardRef: r } = e;
                    return (0, s.jsxs)(a.m_, {
                        enableAriaDescribedby: !1,
                        isFocusEnabled: !1,
                        placement: 'top',
                        hoverSettings: { delay: 200, handleClose: (0, T.safePolygon)({ blockPointerEvents: !0 }) },
                        children: [
                            (0, s.jsx)('div', { ref: r, children: t }),
                            (0, s.jsx)(a.ZI, { className: O().tooltipContent, children: i.map((e) => (0, s.jsx)(L.V, { artist: e, className: O().artistItem }, e.id)) }),
                        ],
                    });
                }),
                I = (0, n.forwardRef)((e, t) => (0, s.jsx)(R, { forwardRef: t, ...e }));
            var w = i(19740),
                D = i(52598),
                z = i.n(D);
            let M = (0, l.PA)((e) => {
                    let { label: t, artists: i } = e,
                        { formatMessage: l } = (0, _.A)();
                    return (0, s.jsx)(w.W1, {
                        isMobile: !0,
                        className: (0, r.$)(z().root, z().important),
                        label: t,
                        ariaLabel: l({ id: 'interface-actions.context-menu-artists' }),
                        children: i.map((e) => (0, s.jsx)(L.V, { artist: e }, e.id)),
                    });
                }),
                F = (0, l.PA)((e) => {
                    let { artists: t = [], label: i, labelRef: r } = e,
                        [l, a] = (0, n.useState)(!1),
                        {
                            settings: { isMobile: c },
                        } = (0, o.g)(),
                        d = (0, h.c)(() => {
                            let e = r.current;
                            e && a(e.scrollHeight > e.clientHeight || e.scrollWidth > e.clientWidth);
                        }),
                        u = (0, P.L)(() =>
                            (0, j.A)(() => {
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
                        return (l || c) && (!c || 1 !== t.length) ? (c ? (0, s.jsx)(M, { artists: t, label: i }) : (0, s.jsx)(I, { artists: t, label: i })) : i;
                }),
                H = (0, l.PA)((e) => {
                    let {
                            className: t,
                            artists: i = [],
                            separator: l = ', ',
                            lineClamp: d,
                            visibleArtistsCount: _,
                            withLink: m = !0,
                            spoilerClassName: p,
                            linkClassName: h,
                            captionClassName: x,
                            captionSize: g,
                            variant: y = 'breakAll',
                            withAllArtistsTitle: v = !0,
                            withComposer: C = !0,
                            spoilerComponent: E,
                            withCustomTooltip: N = !0,
                            artistIdWithoutLink: S,
                            withContextMenu: k,
                        } = e,
                        j = (0, n.useRef)(null),
                        [P, T] = (0, n.useState)(!1),
                        L = v
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
                            settings: { isMobile: b },
                        } = (0, o.g)(),
                        O = 1 === i.length,
                        R = (0, n.useCallback)((e) => {
                            (T(!0), e.preventDefault());
                        }, []),
                        I = (0, n.useMemo)(() => {
                            let e = i;
                            return (
                                _ && !P && (e = i.slice(0, _)),
                                e.reduce((e, t) => {
                                    if (!C && t.isComposer) return e.length ? e : [];
                                    let i = (0, s.jsx)(
                                        f,
                                        {
                                            artist: t,
                                            linkClassName: h,
                                            captionClassName: x,
                                            withLink: m && t.id !== S && (((!b || O) && k) || !k),
                                            captionSize: g,
                                            allArtistsTitle: L,
                                            withCustomTooltip: N,
                                            hoverSettings: c.V,
                                            shouldUseSeparator: !!l,
                                        },
                                        t.key,
                                    );
                                    return e.length ? e.concat([l, i]) : [i];
                                }, [])
                            );
                        }, [i, _, P, C, b, O, k, h, x, m, S, g, L, N, l]),
                        w = (0, n.useMemo)(() => {
                            if (!P && _ && _ < i.length) {
                                let e = i.length - _;
                                return (0, n.isValidElement)(E) ? E : (0, s.jsx)(A, { spoilerClassName: p, spoilerArtistsCount: e, handleOnSpoilerClick: R });
                            }
                        }, [i.length, R, P, p, E, _]),
                        D = (0, n.useMemo)(() => {
                            if (d) return { WebkitLineClamp: d };
                        }, [d]),
                        z = (0, s.jsx)(a.m_, {
                            referenceRef: j,
                            enabled: !!(v && L) && N && !k && !b,
                            offsetOptions: 4,
                            placement: 'top',
                            text: L,
                            hoverSettings: c.V,
                            children: (0, s.jsxs)('div', {
                                style: D,
                                className: (0, r.$)(u().root, u()['root_variant_'.concat(y)], { [u().root_clamp]: d && d > 0 }, { [u().ellipsis]: !d }, t),
                                title: v && L && !N && !k ? L : void 0,
                                children: [I, w],
                            }),
                        });
                    return k ? (0, s.jsx)(F, { labelRef: j, artists: i, label: z }) : z;
                });
        },
        42464: (e, t, i) => {
            'use strict';
            i.d(t, { N: () => s });
            let s = (e) => 'object' == typeof e && null !== e && 'request' in e && null !== e.request;
        },
        45257: (e, t, i) => {
            'use strict';
            i.d(t, { $: () => x });
            var s = i(32290),
                r = i(63618),
                l = i(8055),
                n = i(55178);
            let a = (e) => {
                    let { style: t, forwardRef: i, context: r, ...l } = e,
                        n = (null == r ? void 0 : r.listAriaLabel) || void 0,
                        a = (null == r ? void 0 : r.listRole) || 'region';
                    return (0, s.jsx)('div', { 'aria-labelledby': 'virtual-grid-header', role: a, 'aria-label': n, style: { ...t }, ref: i, ...l });
                },
                o = (0, n.forwardRef)((e, t) => (0, s.jsx)(a, { forwardRef: t, ...e }));
            var c = i(39684),
                d = i.n(c);
            let u = (e) => {
                    let { style: t, forwardRef: i, withFooter: l, withHeader: n, withForceScroll: a, ...o } = e;
                    return (0, s.jsx)('div', {
                        className: (0, r.$)(d().scroller, { [d().scroller_withFooter]: l, [d().scroller_withHeader]: n, [d().scroller_withForceScroll]: a }),
                        style: { ...t },
                        ref: i,
                        ...o,
                        tabIndex: -1,
                    });
                },
                _ = (0, n.forwardRef)((e, t) => (0, s.jsx)(u, { forwardRef: t, ...e }));
            var m = i(62060),
                p = i(31417);
            let h = (e) => {
                    let {
                            pageSize: t,
                            onPageHandler: i,
                            onRangeHandler: r,
                            debounceDurationInMs: l = 100,
                            totalCount: a = 0,
                            shouldTriggerRangeChangedOn: o = [],
                            endReached: c,
                            virtuosoRef: d,
                            ...u
                        } = e,
                        [_, h] = (0, n.useState)(null),
                        x = (0, n.useMemo)(
                            () =>
                                (0, m.A)((e) => {
                                    if ((null == r || r(e), o.length > 0 && h(e), t && i)) {
                                        let s = Math.floor(e.endIndex / t) + 1,
                                            r = Math.floor(e.startIndex / t);
                                        for (let e = r; e < s; e++) i(e);
                                    }
                                }, l),
                            [l, r, t, i, o],
                        );
                    (0, n.useEffect)(() => {
                        o.length > 0 && _ && x(_);
                    }, o);
                    let g = (0, n.useMemo)(() => {
                        if (c)
                            return (0, m.A)((e) => {
                                c(e);
                            }, l);
                    }, [c, l]);
                    return (0, s.jsx)(p.sN, { ref: d, rangeChanged: x, totalCount: a, endReached: g, ...u });
                },
                x = (e) => {
                    let {
                            className: t,
                            customComponents: i,
                            onGetDataByPage: a,
                            onGetDataByRange: c,
                            itemClassName: u,
                            itemContentCallback: m,
                            listClassName: p,
                            overscan: x = 700,
                            pageSize: g = 20,
                            totalCount: y,
                            totalRequests: v,
                            debounceDurationInMs: C,
                            initialItemCount: E,
                            minInitialItemCount: N = 20,
                            handleRef: f,
                            alwaysShowScrollbar: S = !1,
                            testId: k,
                            isMobileLayout: A = !1,
                            shouldTriggerRangeChangedOn: j,
                            ...P
                        } = e,
                        [T, L] = (0, n.useState)(!1),
                        b = (0, n.useMemo)(
                            () =>
                                (0, l.A)((e) => {
                                    L(e);
                                }, 100),
                            [],
                        ),
                        O = (0, n.useMemo)(() => {
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
                        R = E ? Math.min(E, N) : void 0;
                    return (0, s.jsxs)('div', {
                        className: (0, r.$)(d().root, { [d().root_scrolling]: T || S, [d().root_notScrolling]: !T && !S }, t),
                        'data-test-id': k,
                        children: [
                            A && (null == i ? void 0 : i.Header) && i.Header(),
                            (0, s.jsx)(h, {
                                overscan: x,
                                components: O,
                                listClassName: p,
                                itemClassName: u,
                                isScrolling: b,
                                itemContent: m,
                                scrollerRef: f,
                                totalCount: y,
                                pageSize: g,
                                onPageHandler: a,
                                onRangeHandler: c,
                                debounceDurationInMs: C,
                                initialItemCount: R,
                                shouldTriggerRangeChangedOn: j,
                                ...P,
                            }),
                            A && (null == i ? void 0 : i.Footer) && i.Footer(),
                        ],
                    });
                };
        },
        50891: (e, t, i) => {
            'use strict';
            i.d(t, { m: () => l });
            var s = i(91945),
                r = i(25090);
            class l extends r.t {
                constructor(e = 'Http Client error', { code: t = 'E_HTTP_CLIENT', ...i } = {}) {
                    (super(e, { code: t, ...i }), (0, s._)(this, 'name', 'HttpException'), Object.setPrototypeOf(this, l.prototype));
                }
            }
        },
        50961: (e, t, i) => {
            'use strict';
            var s;
            (i.d(t, { X: () => s }),
                (function (e) {
                    ((e[(e.NOT_MODIFIED = 304)] = 'NOT_MODIFIED'),
                        (e[(e.NOT_FOUND = 404)] = 'NOT_FOUND'),
                        (e[(e.BAD_REQUEST = 400)] = 'BAD_REQUEST'),
                        (e[(e.REQUEST_TIMEOUT = 408)] = 'REQUEST_TIMEOUT'),
                        (e[(e.PRECONDITION_FAILED = 412)] = 'PRECONDITION_FAILED'),
                        (e[(e.TEAPOT = 418)] = 'TEAPOT'));
                })(s || (s = {})));
        },
        52598: (e) => {
            e.exports = { root: 'SeparatedArtistsWithContextMenuMobile_root__4BiJL', important: 'SeparatedArtistsWithContextMenuMobile_important__fSF1h' };
        },
        53514: (e, t, i) => {
            'use strict';
            i.d(t, { V: () => s });
            let s = { delay: { open: 1e3, close: 0 } };
        },
        55556: (e) => {
            e.exports = {
                root: 'Login_root__VtFg_',
                title: 'Login_title__dqQz1',
                important: 'Login_important__Z8S9I',
                text: 'Login_text__1uju5',
                button: 'Login_button__ZYvZY',
            };
        },
        61376: (e, t, i) => {
            'use strict';
            i.d(t, { x: () => _ });
            var s = i(32290),
                r = i(63618),
                l = i(60900),
                n = i(21732),
                a = i(63423),
                o = i(82586),
                c = i(71926),
                d = i(22492),
                u = i.n(d);
            let _ = (e) => {
                let { className: t, isLiked: i, likesCount: d, handleLikeClick: _, ariaLabel: m } = e,
                    { formatNumber: p } = (0, l.A)();
                return (0, s.jsx)(a.$, {
                    className: (0, r.$)(u().root, t),
                    onClick: _,
                    variant: 'text',
                    withRipple: !1,
                    icon: (0, s.jsx)(o.I, { variant: i ? 'likedVariant' : 'likeVariant', size: 'xxs', className: u().icon }),
                    'aria-label': m,
                    'data-test-id': n.S7.CARD_LIKES,
                    children: (0, s.jsx)(c.HL, { variant: 'div', size: 's', type: 'entity', weight: 'medium', children: p(d) }),
                });
            };
        },
        61500: (e, t, i) => {
            'use strict';
            i.d(t, { i: () => E });
            var s = i(32290),
                r = i(96103),
                l = i(39407),
                n = i(63423),
                a = i(82586),
                o = i(46049),
                c = i(71926),
                d = i(7999),
                u = i(83808),
                _ = i(83920),
                m = i(20472),
                p = i(32641),
                h = i(57594),
                x = i(97841),
                g = i(32468),
                y = i(74694),
                v = i(33960),
                C = i.n(v);
            let E = (0, r.PA)((e) => {
                let { title: t } = e,
                    {
                        settings: { isMobile: i },
                    } = (0, h.g)(),
                    { contentScrollRef: r, setContentScrollRef: v } = (0, _.g)(),
                    E = (0, u.W)(),
                    N = (0, p.Z)(m.Z.collectionKids.href);
                return (0, s.jsxs)(d.h, {
                    scrollElement: r,
                    outerTitle: t,
                    children: [
                        (0, s.jsx)(y.Y, {
                            variant: y.V.TEXT,
                            withForwardControl: !1,
                            withBackwardControl: E.canBack,
                            children: (0, s.jsx)(c.DZ, { variant: 'h2', weight: 'bold', size: i ? 'm' : 'xl', lineClamp: 2, children: t }),
                        }),
                        (0, s.jsxs)(o.N, {
                            ref: v,
                            containerClassName: C().scrollableContainer,
                            className: C().root,
                            children: [
                                (0, s.jsxs)('div', {
                                    className: C().content,
                                    children: [
                                        (0, s.jsx)('div', { className: C().icon, children: (0, s.jsx)(a.I, { variant: 'like', size: 'l' }) }),
                                        (0, s.jsx)(c.DZ, {
                                            className: C().title,
                                            variant: 'h3',
                                            size: 'xs',
                                            children: (0, s.jsx)(l.A, { id: 'error-messages.empty-collection-kids-sub-page-title' }),
                                        }),
                                        (0, s.jsx)(n.$, {
                                            onClick: N,
                                            className: C().button,
                                            role: 'link',
                                            color: 'secondary',
                                            size: 's',
                                            radius: 'xxxl',
                                            children: (0, s.jsx)(c.HL, {
                                                type: 'controls',
                                                variant: 'span',
                                                size: 'm',
                                                children: (0, s.jsx)(l.A, { id: 'error-messages.empty-collection-kids-sub-page-link' }),
                                            }),
                                        }),
                                    ],
                                }),
                                (0, s.jsx)(g.A, { children: (0, s.jsx)(x.w, { className: C().footer }) }),
                            ],
                        }),
                    ],
                });
            });
        },
        64170: (e, t, i) => {
            'use strict';
            i.d(t, { SomethingWentWrong: () => f });
            var s = i(32290),
                r = i(63618),
                l = i(96103),
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
                x = i(62376),
                g = i(37240),
                y = i(83920),
                v = i(20472),
                C = i(12894),
                E = i(30310),
                N = i.n(E);
            let f = (0, l.PA)((e) => {
                let { className: t, withBackwardControl: i = !0 } = e,
                    { formatMessage: l } = (0, a.A)(),
                    E = l({ id: 'error-messages.something-went-wrong' });
                !(function (e) {
                    let t = (0, h.st)(),
                        { hash: i } = (0, h.gf)(),
                        { pageId: s } = (0, g.$)(),
                        r = (0, x.U)();
                    (0, n.useEffect)(() => {
                        if (!t || !i || !s) return;
                        let l = (0, _.F)({
                            params: {
                                entityType: m.EntityTypes.Error,
                                entityId: m.EntityTypes.SomethingWrong,
                                errorMessage: e,
                                hash: i,
                                pageId: s,
                                pageStyle: m.PageStyles.Fullscreen,
                                pagePlacement: m.PagePlacements.Fullscreen,
                                mainObjectType: m.DomainObjectType.NonApplicable,
                                mainObjectId: m.DomainObjectType.NonApplicable,
                            },
                            logger: r,
                            context: 'useSendEventOnSomethingWentWrongShowed',
                        });
                        l && (0, p.z5)(t.evgenInstance, l);
                    }, [t, e, i, s, r]);
                })(E);
                let { sendRefreshEvent: f } = (function () {
                        let e = (0, h.st)(),
                            { hash: t } = (0, h.gf)(),
                            { pageId: i } = (0, g.$)(),
                            s = (0, x.U)();
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
                                    logger: s,
                                    context: 'useSendEventOnSomethingWentWrongRefreshed',
                                });
                                r && (0, p.bv)(e.evgenInstance, r);
                            }, [e, t, i, s]),
                        };
                    })(),
                    S = (0, n.useCallback)(() => {
                        (f(), (window.location.href = v.Z.main.href));
                    }, [f]),
                    { contentRef: k } = (0, y.g)();
                return (0, s.jsxs)('div', {
                    className: (0, r.$)(N().root, t),
                    children: [
                        i &&
                            (0, s.jsx)(C.L, { withBackwardFallback: '/', className: (0, r.$)(N().navigation, { [N().navigation_desktop]: !k }), withForwardControl: !1 }),
                        (0, s.jsxs)('div', {
                            className: (0, r.$)(N().content, { [N().content_shrink]: !i }),
                            children: [
                                (0, s.jsx)(d.I, { className: N().icon, variant: 'attention', size: 'xxl' }),
                                (0, s.jsx)(u.DZ, { className: (0, r.$)(N().title, N().important), variant: 'h3', size: 'xs', children: E }),
                                (0, s.jsxs)(u.HL, {
                                    className: (0, r.$)(N().text, N().important),
                                    variant: 'span',
                                    type: 'text',
                                    size: 'l',
                                    weight: 'normal',
                                    children: [!1, (0, s.jsx)(o.A, { id: 'page-error.try-to-restart-app' })],
                                }),
                                (0, s.jsx)(c.$, {
                                    onClick: S,
                                    className: N().button,
                                    role: 'link',
                                    color: 'secondary',
                                    size: 'l',
                                    radius: 'xxxl',
                                    children: (0, s.jsxs)(u.HL, {
                                        type: 'controls',
                                        variant: 'span',
                                        size: 'm',
                                        children: [!1, (0, s.jsx)(o.A, { id: 'page-error.restart-app-button' })],
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
            var s = i(32290),
                r = i(63618),
                l = i(55178),
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
                    _ = (0, l.useRef)(null),
                    { formatMessage: p } = (0, n.A)();
                (0, l.useEffect)(() => {
                    var e;
                    null == (e = _.current) || e.focus();
                }, []);
                let h = (0, l.useMemo)(
                    () =>
                        (0, s.jsxs)('div', {
                            className: m().message,
                            children: [
                                (0, s.jsx)(d.HL, {
                                    className: m().text,
                                    variant: 'div',
                                    type: 'controls',
                                    size: 'm',
                                    children: (0, s.jsx)(a.A, { id: 'error-messages.error-load-part-page' }),
                                }),
                                (0, s.jsx)(o.$, {
                                    ref: _,
                                    className: m().button,
                                    onClick: t,
                                    variant: 'text',
                                    'aria-label': p({ id: 'interface-actions.reload-part-page' }),
                                    icon: (0, s.jsx)(c.I, { variant: 'reset', size: 'xxs', className: m().icon }),
                                }),
                            ],
                        }),
                    [p, t],
                );
                return (0, s.jsx)(u.$, { className: (0, r.$)(m().root, m().important), message: h, closeToast: i });
            };
        },
        73141: (e, t, i) => {
            'use strict';
            i.d(t, { K: () => h });
            var s = i(32290),
                r = i(92708),
                l = i(55178),
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
                    return (0, s.jsx)(m.O, {
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
                        [_, m] = (0, l.useState)(!1),
                        { formatMessage: h } = (0, n.A)();
                    return (0, l.useCallback)(async () => {
                        if (!t.isAuthorized)
                            return void i((0, s.jsx)(u.h, { error: h({ id: 'authorization-messages.need-to-authorizate' }) }), { containerId: o.u.ERROR });
                        if (_) return;
                        let l = { ...(0, r.HO)(e), url: e.url, isLiked: !e.isLiked };
                        m(!0);
                        let n = await e.toggleLike();
                        (m(!1),
                            n === a.f.OK
                                ? i((0, s.jsx)(p, { playlist: l }), { containerId: o.u.INFO })
                                : i((0, s.jsx)(u.h, { error: h({ id: 'error-messages.error-during-action' }) }), { containerId: o.u.ERROR }));
                    }, [t.isAuthorized, _, e, h, i]);
                };
        },
        73192: (e, t, i) => {
            'use strict';
            i.d(t, { A: () => p });
            var s = i(32290),
                r = i(92708),
                l = i(55178),
                n = i(60900),
                a = i(45477),
                o = i(75582),
                c = i(57594),
                d = i(90357),
                u = i(97647),
                _ = i(8097);
            let m = (e) => {
                    let { playlist: t, closeToast: i } = e;
                    return (0, s.jsx)(_.k, {
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
                        [_, p] = (0, l.useState)(!1);
                    return (0, l.useCallback)(async () => {
                        if (!t.isAuthorized)
                            return void i((0, s.jsx)(d.h, { error: u({ id: 'authorization-messages.need-to-authorizate' }) }), { containerId: a.u.ERROR });
                        if (_) return;
                        let l = { ...(0, r.HO)(e), url: e.url, isPinned: !e.isPinned };
                        p(!0);
                        let n = await e.togglePin();
                        (p(!1),
                            n
                                ? i((0, s.jsx)(m, { playlist: l }), { containerId: a.u.INFO })
                                : i((0, s.jsx)(d.h, { error: u({ id: 'error-messages.error-during-action' }) }), { containerId: a.u.ERROR }));
                    }, [t.isAuthorized, _, e, i, u]);
                };
        },
        75405: (e, t, i) => {
            (Promise.resolve().then(i.bind(i, 3377)), Promise.resolve().then(i.bind(i, 94056)));
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
            var s = i(32290),
                r = i(63618),
                l = i(96103),
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
                x = i(57594),
                g = i(16510),
                y = i.n(g);
            let v = (0, l.PA)((e) => {
                let { artist: t, className: i } = e,
                    { fullscreenPlayer: l } = (0, x.g)(),
                    g = (0, h.Z)(t.url),
                    C = (0, p.N)(),
                    E = (0, n.useMemo)(() => {
                        var e;
                        return (
                            'decomposed' in t &&
                            (null == (e = t.decomposed) ? void 0 : e.reduce((e, t) => (e.push((0, s.jsx)(v, { artist: t, className: i }, t.id)), e), []))
                        );
                    }, [t, i]),
                    N = (0, c.c)((e) => {
                        (l.modal.isOpened && l.modal.close(), C({ to: a.AppScreen.ArtistScreen }), g(e));
                    });
                return (0, s.jsxs)(s.Fragment, {
                    children: [
                        (0, s.jsxs)(u.Dr, {
                            className: (0, r.$)(y().root, i),
                            onClick: N,
                            'data-test-id': o.OA.artists.ARTIST_ITEM,
                            children: [
                                (0, s.jsx)(_.t, {
                                    radius: 'round',
                                    className: y().cover,
                                    children: (0, s.jsx)(d._V, { withAvatarReplace: !0, src: t.coverUri, size: 100, fit: 'contain', className: y().image }),
                                }),
                                (0, s.jsx)(m.HL, { variant: 'span', size: 'm', weight: 'medium', lineClamp: 1, children: t.name }),
                            ],
                        }),
                        E,
                    ],
                });
            });
        },
        78648: (e, t, i) => {
            'use strict';
            i.d(t, { C8: () => l, UC: () => n, dM: () => a, uV: () => o });
            var s = i(87953),
                r = i(42464);
            let l = (e) => {
                    if (void 0 === e || '' === e) return 'missing';
                    let t = Number(e);
                    return !Number.isFinite(t) || t < 0 ? 'invalid' : t < 86400 ? 'lt-1d' : t <= 2592e3 ? '1-30d' : 'gt-30d';
                },
                n = (e) => (e.uid ? 'authorized' : 'no-uid'),
                a = (e) => {
                    if (!(e instanceof s.m5) || !(0, r.N)(e.cause)) return 'unexpected';
                    let t = ((e) => {
                        if (!(0, r.N)(e.cause)) return;
                        let t = e.cause.response;
                        if ('object' == typeof t && null !== t) {
                            if ('statusCode' in t && 'number' == typeof t.statusCode) return t.statusCode;
                            if ('status' in t && 'number' == typeof t.status) return t.status;
                        }
                    })(e);
                    return void 0 === t ? 'transport' : 401 === t ? '401' : t >= 400 && t < 500 ? '4xx' : t >= 500 && t < 600 ? '5xx' : 'unexpected';
                },
                o = (e) => {
                    try {
                        var t;
                        null == (t = window.musicDesktop) || t.authorization.reportDiagnostic(e);
                    } catch (e) {}
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
            i.d(t, { B: () => J });
            var s = i(32290),
                r = i(63618),
                l = i(96103),
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
                x = i(71926),
                g = i(41677),
                y = i(73141),
                v = i(73192),
                C = i(71735),
                E = i(47745),
                N = i(2969),
                f = i(54391),
                S = i(23352),
                k = i(72396),
                A = i(5537),
                j = i(32641),
                P = i(28999),
                T = i(90169),
                L = i(57594),
                b = i(61376),
                O = i(11323),
                R = i(92744),
                I = i(61258),
                w = i(10180),
                D = i(90326),
                z = i(29268),
                M = i(34925),
                F = i(13931),
                H = i(19740),
                W = i(9017),
                B = i(65477),
                Y = i(46200),
                K = i(27120),
                U = i(95134),
                V = i(79406),
                $ = i(58237),
                X = i(56367),
                G = i(83755);
            let Z = (0, l.PA)((e) => {
                var t;
                let { playlist: i, onOpenChange: r, open: l, ...n } = e,
                    { shouldShowBuySubscriptionModal: d, showBuySubscriptionModal: _ } = (0, Y.q)(),
                    {
                        experiments: m,
                        settings: { isMobile: p },
                        trailer: h,
                        user: x,
                    } = (0, L.g)(),
                    g = (0, y.K)(i),
                    E = (0, v.A)(i),
                    N = (0, f.F)(),
                    { formatMessage: S } = (0, a.A)(),
                    k = (0, C.P)(),
                    A = m.checkExperiment(V.z.WebEditorsFeatures, 'on'),
                    j = (0, W.A)({ entityVariant: U.D.PLAYLIST, urlParams: { id: i.uid, kind: i.kind } });
                (0, K.N)(l);
                let P = (0, u.c)(() => {
                    if (d) return void _();
                    k() || (h.openPlaylistTrailer(i.id), N(o.DomainObjectType.Playlist, i.id));
                });
                return (0, s.jsxs)(H.W1, {
                    title: i.title,
                    onOpenChange: r,
                    open: l,
                    offsetOptions: 10,
                    isMobile: p,
                    ariaLabel: S({ id: 'interface-actions.context-menu' }),
                    containerDataTestId: c.Kq.playlist.PLAYLIST_CONTEXT_MENU,
                    ...n,
                    children: [
                        A && (0, s.jsx)(B.d, { entityVariant: U.D.PLAYLIST, adminUrl: i.isFavouritePlaylist ? void 0 : j }),
                        !p && (0, s.jsx)(X.L, { onClick: E, isPinned: i.isPinned }),
                        !i.isFavouritePlaylist && (0, s.jsx)($.T, { onClick: g, isLiked: i.isLiked, disabled: !x.isAuthorized }),
                        (null == (t = i.trailer) ? void 0 : t.isAvailable) && (0, s.jsx)(G.N, { onClick: P, disabled: !i.isAvailable }),
                    ],
                });
            });
            var q = i(11675),
                Q = i.n(q);
            let J = (0, l.PA)((e) => {
                let { className: t, playlist: i, children: l, contentLinesCount: H, customDescription: W, onCoverMouseDown: B } = e,
                    { ref: Y, intersectionPropertyId: K } = (0, S.n)(),
                    {
                        trailer: U,
                        user: V,
                        paywall: { modal: $ },
                    } = (0, L.g)(),
                    { from: X, utmLink: G } = (0, k.f)({ contextId: i.uuid, contextType: d.K.Playlist }),
                    { formatMessage: q } = (0, a.A)(),
                    { sendLikeSearchFeedback: J, sendNavigateSearchFeedback: ee, sendPlaySearchFeedback: et } = (0, P.z)(),
                    [ei, es] = (0, n.useState)(!1),
                    [er, el] = (0, n.useState)(!1),
                    [en, ea] = (0, n.useState)(!1),
                    eo = (0, F.r)(i),
                    ec = (0, y.K)(i),
                    ed = (0, v.A)(i),
                    eu = (0, E.N)(),
                    e_ = (0, N.b)(),
                    em = (0, j.Z)(i.url),
                    ep = (0, f.F)(),
                    eh = (0, C.P)(),
                    ex = (0, u.c)((e) => {
                        if ((e.stopPropagation(), eh())) return void e.preventDefault();
                        (U.setUtmLink(G), U.openPlaylistTrailer(i.id), ep(o.DomainObjectType.Playlist, i.id));
                    }),
                    [eg, ey] = (0, n.useState)(!1),
                    { isPlaying: ev, togglePlay: eC } = (0, T.D)({
                        playContextParams: { contextData: { type: d.K.Playlist, meta: { id: i.id, uuid: i.uuid }, from: X, utmLink: G }, loadContextMeta: !0 },
                    }),
                    eE = (0, u.c)(() => {
                        (eu({ to: o.AppScreen.PlaylistScreen }), null == ee || ee());
                    }),
                    eN = (0, u.c)((e) => {
                        (eE(), em(e));
                    }),
                    ef = (0, A.N)(),
                    eS = (0, u.c)(() => {
                        if (!eh()) {
                            if (ef) return void $.open();
                            (ei || ev || (es(!0), null == et || et()), eC(), e_(!ev));
                        }
                    }),
                    ek = (0, u.c)(() => {
                        (er || i.isLiked || (el(!0), null == J || J()), ec());
                    }),
                    eA = (0, u.c)((e) => {
                        (e.preventDefault(), e.stopPropagation());
                    }),
                    ej = (0, u.c)((e) => {
                        (ea(e), ey(e));
                    }),
                    eP = (0, n.useMemo)(() => {
                        var e;
                        return W
                            ? (0, s.jsx)(x.HL, { variant: 'span', type: 'entity', size: 's', weight: 'medium', lineClamp: 2, children: W }, i.getKey('description'))
                            : (null == (e = i.artists) ? void 0 : e.length)
                              ? (0, s.jsx)(
                                    g.i,
                                    { className: Q().artists, artists: i.artists, lineClamp: 1, linkClassName: Q().artistLink, captionSize: 's' },
                                    i.getKey('description'),
                                )
                              : void 0;
                    }, [W, i]),
                    eT = (0, _.L)(() => {
                        if (!i.isFavouritePlaylist)
                            return (0, s.jsx)(
                                R.c,
                                {
                                    className: (0, r.$)(Q().likeButton, Q().control),
                                    isLiked: i.isLiked,
                                    onClick: ek,
                                    variant: 'default',
                                    size: 's',
                                    iconSize: 'xxs',
                                    disabled: !V.isAuthorized,
                                },
                                i.getKey('LikeButton'),
                            );
                    }),
                    eL = (0, n.useMemo)(() => {
                        var e;
                        if (null == i || null == (e = i.trailer) ? void 0 : e.isAvailable)
                            return (0, s.jsx)(
                                M.n,
                                {
                                    children: (0, s.jsx)(
                                        z.k,
                                        { className: (0, r.$)(Q().trailerButton, Q().control), radius: 'round', size: 's', iconSize: 'xxs', onClick: ex },
                                        i.getKey('TrailerButton'),
                                    ),
                                },
                                i.getKey('PlaylilstCardTrailerTooltip'),
                            );
                    }, [ex, i]),
                    eb = (0, n.useMemo)(
                        () =>
                            (0, s.jsx)(
                                w.O,
                                { onClick: ed, isPinned: i.isPinned, className: (0, r.$)(Q().pinButton, Q().control), withRipple: !1 },
                                i.getKey('PinButton'),
                            ),
                        [ed, i],
                    ),
                    eO = (0, n.useMemo)(
                        () =>
                            (0, s.jsx)(h.t, {
                                className: Q().cover,
                                radius: 's',
                                withShadow: !0,
                                'data-test-id': c.Kq.playlist.PLAYLIST_CARD,
                                children: (0, s.jsxs)('div', {
                                    className: Q().coverBlock,
                                    onClick: eN,
                                    onMouseDown: B,
                                    children: [
                                        (0, s.jsx)(O.B, {
                                            className: Q().image,
                                            src: i.coverUri,
                                            size: 200,
                                            fit: 'cover',
                                            alt: eo,
                                            withAvatarReplace: !0,
                                            'aria-hidden': !0,
                                        }),
                                        (0, s.jsx)(m.hg, {
                                            isVisible: en || eg,
                                            className: Q().controls,
                                            playControl: (0, s.jsx)(
                                                D.D,
                                                {
                                                    className: (0, r.$)(Q().playButton, Q().control),
                                                    buttonVariant: 'default',
                                                    withHover: !1,
                                                    iconSize: 'xl',
                                                    variant: 'filled',
                                                    onClick: eS,
                                                    isPlaying: ev,
                                                    disabled: !i.isAvailable,
                                                },
                                                i.getKey('PlayButton'),
                                            ),
                                            likeControl: eT,
                                            menuControl: (0, s.jsx)(
                                                Z,
                                                {
                                                    playlist: i,
                                                    onOpenChange: ej,
                                                    open: en,
                                                    onClick: eA,
                                                    className: (0, r.$)(Q().menuButton, Q().control),
                                                    icon: (0, s.jsx)(p.I, { size: 'xxs', variant: 'more' }),
                                                    size: 's',
                                                    'data-test-id': c.Kq.playlist.PLAYLIST_CONTEXT_MENU_BUTTON,
                                                },
                                                i.getKey('PlaylistContextMenu'),
                                            ),
                                            pinControl: eb,
                                            trailerControl: eL,
                                        }),
                                    ],
                                }),
                            }),
                        [eN, B, i, eo, en, eg, eS, ev, eT, ej, eA, eb, eL],
                    ),
                    eR = !!i.actualLikesCount && !i.isLikesCountHidden;
                return (0, s.jsxs)(m.MN, {
                    ref: Y,
                    'aria-label': eo,
                    className: (0, r.$)(Q().root, t),
                    title: (0, s.jsx)(x.HL, {
                        variant: 'div',
                        type: 'entity',
                        size: 's',
                        weight: 'medium',
                        lineClamp: 2,
                        'data-test-id': c.Kq.playlist.PLAYLIST_TITLE,
                        children: (0, s.jsx)(I.N, { className: Q().titleLink, href: i.url, onClick: eE, children: i.title }),
                    }),
                    srTitle: (0, s.jsx)(I.N, { href: i.url, onClick: eE, children: i.title }),
                    'data-intersection-property-id': K,
                    contentLinesCount: H,
                    view: eO,
                    description: eP,
                    'data-test-id': c.Kq.playlist.PLAYLIST_ITEM,
                    children: [
                        eR &&
                            (0, s.jsx)(b.x, {
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
        84296: (e) => {
            e.exports = {
                root: 'CollectionKidsPlaylistsPage_root__RXH06',
                scrollContainer: 'CollectionKidsPlaylistsPage_scrollContainer__F_oj2',
                important: 'CollectionKidsPlaylistsPage_important__5V_zc',
                footer: 'CollectionKidsPlaylistsPage_footer__R41Ol',
                item: 'CollectionKidsPlaylistsPage_item__ht83l',
                content: 'CollectionKidsPlaylistsPage_content__6Oo1m',
            };
        },
        87953: (e, t, i) => {
            'use strict';
            i.d(t, { GX: () => l.G, X1: () => s.X, m5: () => r.m });
            var s = i(50961),
                r = i(50891),
                l = i(10733);
            i(33898);
        },
        89020: (e, t, i) => {
            'use strict';
            i.d(t, { V: () => c });
            var s = i(32290),
                r = i(63618),
                l = i(21732),
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
                return (0, s.jsxs)('div', {
                    'aria-label': d,
                    'aria-live': t ? 'polite' : 'off',
                    'aria-busy': t,
                    className: (0, r.$)(o().root, i),
                    'data-test-id': l.S7.ENTITY_CARD_SHIMMER,
                    children: [
                        p && (0, s.jsx)(n.W, { isActive: t, className: o().subcover, radius: 'l' }),
                        (0, s.jsx)(n.W, { isActive: t, className: (0, r.$)(o().cover, a, { [o().cover_round]: c, [o().cover_withSubcover]: p }), radius: h }),
                        _ &&
                            (0, s.jsx)('div', {
                                className: (0, r.$)(o().infoContainer, o()['content_linesCount_'.concat(m)], { [o().infoContainer_centered]: u }),
                                children: (0, s.jsx)(n.W, { isActive: t, className: (0, r.$)(o().title, { [o().title_withSubcover]: p }), radius: 's' }),
                            }),
                    ],
                });
            };
        },
        94056: (e, t, i) => {
            'use strict';
            i.d(t, { CollectionKidsPlaylistsPage: () => L });
            var s = i(32290),
                r = i(63618),
                l = i(96103),
                n = i(55178),
                a = i(60900),
                o = i(39407),
                c = i(21732),
                d = i(71926),
                u = i(64170),
                _ = i(7999),
                m = i(83460),
                p = i(48922),
                h = i(22714),
                x = i(83808),
                g = i(83920),
                y = i(3796),
                v = i(57594),
                C = i(11262),
                E = i(97841),
                N = i(32468),
                f = i(74694),
                S = i(89020),
                k = i(45257),
                A = i(30294),
                j = i(61500),
                P = i(84296),
                T = i.n(P);
            let L = (0, l.PA)(() => {
                let {
                        settings: { isMobile: e },
                        collection: {
                            kids: { playlists: t },
                        },
                    } = (0, v.g)(),
                    { contentScrollRef: i, setContentScrollRef: l } = (0, g.g)(),
                    P = (0, x.W)(),
                    { formatMessage: L } = (0, a.A)(),
                    b = (0, n.useCallback)(
                        (e) => {
                            t.getData({ page: e, pageSize: A.c });
                        },
                        [t],
                    );
                (0, C.X)(t.pagesLoader, b);
                let O = (0, n.useMemo)(() => ({ Footer: () => (0, s.jsx)(N.A, { children: (0, s.jsx)(E.w, { className: T().footer }) }) }), []),
                    R = t.isShimmerVisible ? 20 : t.items.length;
                return ((0, n.useEffect)(
                    () => () => {
                        t.reset();
                    },
                    [t],
                ),
                (0, y.J)(t.isResolved),
                t.isNeededToLoad && (0, n.use)(t.getData({ pageSize: A.c })),
                t.isRejected)
                    ? (0, s.jsx)(u.SomethingWentWrong, {})
                    : t.isEmpty
                      ? (0, s.jsx)(j.i, { title: L({ id: 'entity-names.artist-playlist' }) })
                      : (0, s.jsx)(h.n, {
                            pageId: p._Q.COLLECTION_KIDS_PLAYLISTS,
                            children: (0, s.jsx)(_.h, {
                                scrollElement: i,
                                outerTitle: L({ id: 'entity-names.artist-playlist' }),
                                children: (0, s.jsxs)('div', {
                                    className: T().root,
                                    'data-test-id': c.Xk.collection.COLLECTION_KIDS_PLAYLISTS_PAGE,
                                    children: [
                                        (0, s.jsx)(f.Y, {
                                            variant: f.V.TEXT,
                                            withForwardControl: !1,
                                            withBackwardControl: P.canBack,
                                            children: (0, s.jsx)(d.DZ, {
                                                variant: 'h2',
                                                weight: 'bold',
                                                size: 'xl',
                                                lineClamp: 1,
                                                children: (0, s.jsx)(o.A, { id: 'entity-names.artist-playlist' }),
                                            }),
                                        }),
                                        (0, s.jsx)(k.$, {
                                            className: (0, r.$)(T().scrollContainer, T().important),
                                            customComponents: O,
                                            itemContentCallback: (e) => {
                                                let i = t.items[e],
                                                    r = L({ id: 'loading-messages.entity-is-loading' }, { entityName: L({ id: 'entity-names.album' }) });
                                                return i
                                                    ? (0, s.jsx)(m.B, { playlist: i, contentLinesCount: 3 }, i.id)
                                                    : (0, s.jsx)(S.V, { 'aria-label': r, linesCount: 3 });
                                            },
                                            initialItemCount: R,
                                            totalCount: R,
                                            onGetDataByPage: b,
                                            totalRequests: t.requestsCount,
                                            pageSize: A.c,
                                            listClassName: T().content,
                                            itemClassName: T().item,
                                            handleRef: l,
                                            context: { listAriaLabel: L({ id: 'entity-names.albums' }) },
                                            isMobileLayout: e,
                                            useWindowScroll: e,
                                        }),
                                    ],
                                }),
                            }),
                        });
            });
        },
        94218: (e, t, i) => {
            'use strict';
            i.d(t, { H: () => m });
            var s = i(32290),
                r = i(21916),
                l = i(39407),
                n = i(21732),
                a = i(91027),
                o = i(63423),
                c = i(71926),
                d = i(78648),
                u = i(70204),
                _ = i(34186);
            let m = (e) => {
                let { size: t = 'm', variant: i = 'default', color: m = 'primary', withRipple: p = !0, buttonText: h, isBlock: x, key: g, className: y } = e,
                    v = (0, r.useRouter)(),
                    C = (0, _.N)().get(u.QG),
                    E = (0, a.c)(() => {
                        C.authorizationUrl && ((0, d.uV)({ stage: 'attempt-start', trigger: 'user' }), v.push(C.authorizationUrl));
                    });
                return (0, s.jsx)(
                    o.$,
                    {
                        onClick: E,
                        className: y,
                        isBlock: x,
                        color: m,
                        variant: i,
                        size: t,
                        radius: 'xxxl',
                        withRipple: p,
                        'data-test-id': n.S7.UNAUTHORIZED_BUTTON,
                        children: h || (0, s.jsx)(c.HL, { variant: 'div', size: 'l', lineClamp: 1, children: (0, s.jsx)(l.A, { id: 'authorization.enter-button' }) }),
                    },
                    g,
                );
            };
        },
        97841: (e, t, i) => {
            'use strict';
            i.d(t, { w: () => S });
            var s = i(32290),
                r = i(63618),
                l = i(96103),
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
                    let { formatMessage: t, language: i, tld: s, year: r } = e;
                    return {
                        year: r,
                        yandexMusic: { id: o.YANDEX, title: t({ id: 'footer.yandex-music' }), url: c(o.YANDEX, s, i) },
                        yandexProjects: { id: o.YANDEX_PROJECTS, title: t({ id: 'footer.yandex-project' }), url: c(o.YANDEX_PROJECTS, s, i) },
                    };
                };
            var u = i(15559),
                _ = i(8626);
            let m = (e) => e(new Date(), (0, _.m)());
            var p = i(61945),
                h = i(57594),
                x = i(77088),
                g = i.n(x),
                y = i(21732),
                v = i(71926),
                C = i(61258);
            let E = (e) => {
                    let { className: t, data: i } = e;
                    return (0, s.jsxs)('div', {
                        className: (0, r.$)(g().copyrights, t),
                        'data-test-id': y.S7.FOOTER_COPYRIGHTS,
                        children: [
                            (0, s.jsxs)(v.HL, {
                                variant: 'span',
                                type: 'text',
                                size: 's',
                                weight: 'medium',
                                className: g().text,
                                children: [
                                    '\xa9 ',
                                    i.year,
                                    ' \xa0',
                                    (0, s.jsx)(C.N, {
                                        target: '_blank',
                                        href: i.yandexMusic.url,
                                        className: (0, r.$)(g().copyrightLink, g().yandexMusicLink),
                                        'data-test-id': y.S7.FOOTER_YANDEX_MUSIC_LINK,
                                        children: i.yandexMusic.title,
                                    }),
                                ],
                            }),
                            (0, s.jsx)(v.HL, { variant: 'span', type: 'text', size: 's', weight: 'medium', children: ' • ' }),
                            (0, s.jsx)(C.N, {
                                target: '_blank',
                                href: i.yandexProjects.url,
                                className: g().copyrightLink,
                                'data-test-id': y.S7.FOOTER_YANDEX_PROJECT_LINK,
                                children: i.yandexProjects.title,
                            }),
                        ],
                    });
                },
                N = (e) => {
                    let { disclaimer: t, links: i } = e;
                    return (0, s.jsxs)('div', {
                        className: g().links,
                        children: [
                            (0, s.jsx)('ol', {
                                className: g().list,
                                'data-test-id': y.S7.FOOTER_LINKS_LIST,
                                children: i.map((e) => {
                                    let { id: t, title: i, url: r } = e;
                                    return (0, s.jsx)(
                                        'li',
                                        {
                                            className: g().item,
                                            children: (0, s.jsx)(C.N, { target: '_blank', href: r, className: g().link, 'data-test-id': y.S7.FOOTER_LINK, children: i }),
                                        },
                                        t,
                                    );
                                }),
                            }),
                            (0, s.jsx)(v.HL, {
                                variant: 'span',
                                type: 'text',
                                size: 'm',
                                weight: 'medium',
                                className: g().explicitText,
                                tabIndex: 0,
                                dangerouslySetInnerHTML: { __html: t },
                                'data-test-id': y.S7.FOOTER_DISCLAIMER_TEXT,
                            }),
                        ],
                    });
                },
                f = (e) => {
                    let { className: t, data: i } = e;
                    return (0, s.jsxs)('footer', {
                        className: (0, r.$)(g().root, g().important, t),
                        'data-test-id': y.S7.FOOTER,
                        children: [(0, s.jsx)(N, { links: i.links, disclaimer: i.disclaimer }), (0, s.jsx)(E, { data: i.copyrights })],
                    });
                };
            (0, l.PA)((e) => {
                let { className: t } = e,
                    { location: i } = (0, h.g)(),
                    { formatDate: r, formatMessage: l } = (0, n.A)(),
                    { language: a } = (0, p.h)(),
                    o = d({ formatMessage: l, language: a, tld: i.tld, year: m(r) });
                return (0, s.jsx)(E, { className: t, data: o });
            });
            let S = (0, l.PA)((e) => {
                var t;
                let { className: i } = e,
                    { experiments: l, location: _, user: x } = (0, h.g)(),
                    { formatDate: y, formatMessage: v } = (0, n.A)(),
                    { isEnabled: C } = null != (t = (0, a.P)()) ? t : {},
                    { language: E } = (0, p.h)(),
                    N = ((e) => {
                        let { checkExperiment: t, formatMessage: i, isWebApplication: s, language: r, tld: l, userRegion: n, year: a } = e;
                        return {
                            links: ((e) => {
                                let { formatMessage: t, isWebApplication: i, tld: s, language: r, userRegion: l } = e,
                                    n = { id: o.COPYRIGHT_HOLDER, title: t({ id: 'footer.links-copyright-holders' }), url: c(o.COPYRIGHT_HOLDER, s, r) },
                                    a = { id: o.PRIVACY_POLICY, title: t({ id: 'footer.links-privacy-policy' }), url: c(o.PRIVACY_POLICY, s, r) },
                                    d = { id: o.AGREEMENT, title: t({ id: 'footer.links-terms' }), url: c(o.AGREEMENT, s, r) },
                                    u = { id: o.RECOMMENDATION_RULES, title: t({ id: 'footer.links-recommendation-rules' }), url: c(o.RECOMMENDATION_RULES, s, r) },
                                    _ = { id: o.HELP, title: t({ id: 'footer.links-help' }), url: c(o.HELP, s, r) },
                                    m = [n, d, u];
                                return (i && 'ru' === l && m.push(a), m.push(_), m);
                            })({ formatMessage: i, isWebApplication: s, language: r, tld: l, userRegion: n }),
                            disclaimer: (0, u.v)({
                                checkExperiment: t,
                                getDisclaimerContent: () => i({ id: 'footer.disclaimer-content' }),
                                getExplicitContent: () => i({ id: 'footer.explicit-content' }),
                                userRegion: n,
                            }),
                            copyrights: d({ formatMessage: i, language: r, tld: l, year: a }),
                        };
                    })({
                        checkExperiment: (e, t) => l.checkExperiment(e, t),
                        formatMessage: v,
                        isWebApplication: !1,
                        tld: _.tld,
                        language: E,
                        userRegion: x.account.data.userSessionRegionIso,
                        year: m(y),
                    });
                return (0, s.jsx)(f, { className: (0, r.$)({ [g().root_withOffsetForDeeplink]: C }, i), data: N });
            });
        },
    },
    (e) => {
        (e.O(
            0,
            [
                7412, 1010, 7231, 2147, 4517, 9763, 1256, 3608, 3907, 2456, 6706, 5472, 8378, 900, 2536, 2146, 3353, 2474, 8035, 347, 2732, 1410, 1417, 8506, 6050, 5806,
                6241, 7702, 6874, 9155, 861, 4668, 9740, 1175, 4499, 8816, 4220, 9562, 7358,
            ],
            () => e((e.s = 75405)),
        ),
            (_N_E = e.O()));
    },
]);
