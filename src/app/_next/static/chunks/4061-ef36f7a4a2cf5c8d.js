(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [4061],
    {
        3377: (e, t, i) => {
            'use strict';
            i.d(t, { WithAuth: () => h });
            var r = i(32290),
                s = i(96103),
                l = i(21916),
                a = i(63618),
                n = i(39407),
                o = i(71926),
                c = i(94218),
                d = i(55556),
                u = i.n(d);
            let _ = (0, s.PA)(() =>
                (0, r.jsxs)('div', {
                    className: u().root,
                    children: [
                        (0, r.jsx)(o.DZ, {
                            className: (0, a.$)(u().title, u().important),
                            variant: 'h3',
                            size: 'xs',
                            children: (0, r.jsx)(n.A, { id: 'authorization.enter-title' }),
                        }),
                        (0, r.jsx)(o.HL, {
                            className: (0, a.$)(u().text, u().important),
                            variant: 'span',
                            type: 'text',
                            size: 'l',
                            weight: 'normal',
                            children: (0, r.jsx)(n.A, { id: 'authorization.enter-text' }),
                        }),
                        (0, r.jsx)(c.H, { size: 'l', className: u().button }),
                    ],
                }),
            );
            var m = i(20472),
                p = i(57594);
            let h = (0, s.PA)((e) => {
                let { children: t, withRedirectToMainPage: i } = e,
                    { user: s } = (0, p.g)();
                return s.isAuthorized ? t : (i && (0, l.redirect)(m.Z.main.href), (0, r.jsx)(_, {}));
            });
        },
        5537: (e, t, i) => {
            'use strict';
            i.d(t, { N: () => l });
            var r = i(57594),
                s = i(79406);
            let l = () => {
                var e, t;
                let {
                    user: i,
                    settings: { browserInfo: l },
                    experiments: a,
                } = (0, r.g)();
                return (
                    !(null == l ? void 0 : l.isTouch) &&
                    i.isAuthorized &&
                    !i.hasPlus &&
                    (null == (t = a.getExperiment(s.z.WebNextDesktopWebFreemium)) || null == (e = t.value) ? void 0 : e.closeListening) === 'on'
                );
            };
        },
        8246: (e, t, i) => {
            'use strict';
            var r;
            (i.d(t, { x: () => r }),
                (function (e) {
                    ((e.ASC = 'asc'), (e.DESC = 'desc'));
                })(r || (r = {})));
        },
        8626: (e, t, i) => {
            'use strict';
            i.d(t, { m: () => r });
            let r = () => ({ year: 'numeric' });
        },
        10398: (e, t, i) => {
            'use strict';
            var r;
            (i.d(t, { S: () => r }),
                (function (e) {
                    ((e.MUSIC = 'music'), (e.CHILDREN = 'children'));
                })(r || (r = {})));
        },
        10733: (e, t, i) => {
            'use strict';
            i.d(t, { G: () => l });
            var r = i(91945),
                s = i(50891);
            class l extends s.m {
                constructor(e, t) {
                    (super(e, { code: 'E_HTTP_CLIENT_NON_2XX_3XX_RESPONSE', cause: t.cause }),
                        (0, r._)(this, 'name', 'HttpErrorException'),
                        (0, r._)(this, 'statusCode', void 0),
                        (this.statusCode = t.statusCode),
                        Object.setPrototypeOf(this, l.prototype));
                }
            }
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
                s = i(60900);
            let l = (e) => {
                let { formatMessage: t } = (0, s.A)();
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
            i.d(t, { v: () => s });
            var r = i(79406);
            let s = (e) => {
                let { checkExperiment: t, getDisclaimerContent: i, getExplicitContent: s, userRegion: l } = e;
                return 'ru' === l && t(r.z.WebNextFooterDisclaimer, 'on') ? i() : s();
            };
        },
        16510: (e) => {
            e.exports = { root: 'ArtistItem_root__Q_mgJ', image: 'ArtistItem_image__5rKWF', cover: 'ArtistItem_cover__FTvHo' };
        },
        20472: (e, t, i) => {
            'use strict';
            i.d(t, { Z: () => s });
            var r = i(68243);
            let s = {
                main: (0, r.u)('/'),
                chart: (0, r.u)('/chart'),
                chartPodcasts: (0, r.u)('/chart/podcasts'),
                collection: (0, r.u)('/collection'),
                collectionAlbums: (0, r.u)('/collection/albums'),
                collectionArtists: (0, r.u)('/collection/artists'),
                collectionClips: (0, r.u)('/collection/clips'),
                collectionDislikes: (0, r.u)('/collection/dislikes'),
                collectionKids: (0, r.u)('/collection/kids'),
                collectionKidsAlbums: (0, r.u)('/collection/kids/albums'),
                collectionKidsPlaylists: (0, r.u)('/collection/kids/playlists'),
                collectionKidsTracks: (0, r.u)('/collection/kids/tracks'),
                collectionNonMusic: (0, r.u)('/collection/non-music'),
                collectionNonMusicLiked: (0, r.u)('/collection/non-music/liked'),
                collectionVibeRooms: (0, r.u)('/collection/multivibes'),
                collectionPlaylists: (0, r.u)('/collection/playlists'),
                collectionPlaylistsCreated: (0, r.u)('/collection/playlists/created'),
                collectionPlaylistsLiked: (0, r.u)('/collection/playlists/liked'),
                collectionShelf: (0, r.u)('/collection/shelf'),
                collectionShelfLiked: (0, r.u)('/collection/shelf/liked'),
                collectionShelfNewEpisodes: (0, r.u)('/collection/shelf/new-episodes'),
                collectionShelfRecentlyPlayed: (0, r.u)('/collection/shelf/recently-played'),
                concerts: (0, r.u)('/concerts'),
                kids: (0, r.u)('/kids'),
                mixes: (0, r.u)('/mixes'),
                musicHistory: (0, r.u)('/music-history'),
                muzmarket: (0, r.u)('/muzmarket'),
                mymusic: (0, r.u)('/mymusic'),
                mymusicDownloadsTracks: (0, r.u)('/mymusic/downloads/tracks'),
                multivibe: (0, r.u)('/multivibe'),
                nonMusic: (0, r.u)('/non-music'),
                pay: (0, r.u)('/pay'),
                userSlides: (0, r.u)('/slides/user'),
                search: (0, r.u)('/search'),
                searchHistory: (0, r.u)('/search/history'),
                settings: (0, r.u)('/settings'),
                video: (0, r.u)('/video'),
            };
        },
        22492: (e) => {
            e.exports = { icon: 'CardLikes_icon__l95lW', root: 'CardLikes_root__g8ala' };
        },
        29268: (e, t, i) => {
            'use strict';
            i.d(t, { k: () => u });
            var r = i(32290),
                s = i(55178),
                l = i(60900),
                a = i(21732),
                n = i(63423),
                o = i(82586),
                c = i(59576);
            let d = (e) => {
                    let {
                            variant: t,
                            withRipple: i,
                            size: s,
                            radius: d,
                            iconSize: u,
                            disabled: _,
                            onClick: m,
                            iconClassName: p,
                            className: h,
                            forwardRef: x,
                            style: v,
                            children: C,
                        } = e,
                        { formatMessage: y } = (0, l.A)(),
                        E = y({ id: 'trailer.button-aria-label' });
                    return (0, r.jsx)(n.$, {
                        className: h,
                        color: 'secondary',
                        radius: d,
                        size: s,
                        variant: t,
                        withRipple: i,
                        flexIcon: !0,
                        'aria-label': E,
                        onClick: m,
                        ref: x,
                        icon: (0, r.jsx)(o.I, { variant: 'trailer', size: u, className: p }),
                        disabled: _,
                        'data-intersection-property-id': c.N,
                        style: v,
                        'data-test-id': a.S7.TRAILER_BUTTON,
                        children: C,
                    });
                },
                u = (0, s.forwardRef)((e, t) => (0, r.jsx)(d, { forwardRef: t, ...e }));
        },
        31010: (e, t, i) => {
            'use strict';
            i.d(t, { H: () => s, P: () => l });
            var r = i(55178);
            let s = (0, r.createContext)(null),
                l = () => (0, r.useContext)(s);
        },
        32468: (e, t, i) => {
            'use strict';
            i.d(t, { A: () => a });
            var r = i(32290),
                s = i(77088),
                l = i.n(s);
            let a = (e) => {
                let { children: t } = e;
                return (0, r.jsx)('footer', { className: l().empty });
            };
        },
        33898: (e, t, i) => {
            'use strict';
            var r;
            (i.d(t, { Z: () => r }),
                (function (e) {
                    ((e.METHOD_NOT_SUPPORTED = 'E_BEACON_METHOD_NOT_SUPPORTED'),
                        (e.NOT_AVAILABLE = 'E_BEACON_NOT_AVAILABLE'),
                        (e.QUEUE_FAILED = 'E_BEACON_QUEUE_FAILED'),
                        (e.NO_RESPONSE_DATA = 'E_BEACON_NO_RESPONSE_DATA'),
                        (e.RETRY_EXHAUSTED = 'E_BEACON_RETRY_EXHAUSTED'));
                })(r || (r = {})));
        },
        34925: (e, t, i) => {
            'use strict';
            i.d(t, { n: () => a });
            var r = i(32290),
                s = i(60900),
                l = i(70280);
            let a = (e) => {
                let { children: t } = e,
                    { formatMessage: i } = (0, s.A)();
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
            i.d(t, { i: () => F });
            var r = i(32290),
                s = i(63618),
                l = i(96103),
                a = i(55178),
                n = i(70280),
                o = i(57594),
                c = i(53514),
                d = i(40484),
                u = i.n(d),
                _ = i(60900),
                m = i(99923),
                p = i(21732),
                h = i(91027),
                x = i(71926),
                v = i(47745),
                C = i(32641),
                y = i(28999),
                E = i(61258),
                N = i(19383);
            let A = (0, l.PA)((e) => {
                    let {
                            artist: t,
                            withLink: i = !0,
                            linkClassName: s,
                            captionClassName: l,
                            captionSize: a = 'm',
                            allArtistsTitle: c,
                            withCustomTooltip: d,
                            hoverSettings: u,
                        } = e,
                        { formatMessage: A } = (0, _.A)(),
                        {
                            track: f,
                            settings: { isMobile: S },
                        } = (0, o.g)(),
                        k = (0, C.Z)(t.url),
                        { sendNavigateSearchFeedback: g } = (0, y.z)(),
                        L = (0, v.N)(),
                        T = ((e) => {
                            let { artist: t, callback: i } = e,
                                { currentTrackInfo: r, fullscreenPlayer: s, fullscreenVideoPlayer: l } = (0, o.g)(),
                                { modal: a } = r;
                            return (0, N.l)({
                                entity: t,
                                callback: i,
                                onBeforeHandle: (e) => {
                                    (null == e || e.stopPropagation(), a.isOpened && (r.reset(), a.close()), s.modal.isOpened && s.modal.close());
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
                        P = (0, h.c)((e) => {
                            (L({ to: m.AppScreen.ArtistScreen }), null == g || g(), T(e));
                        });
                    return i && !t.various
                        ? (0, r.jsx)(E.N, {
                              'aria-label': A({ id: 'entity-names.artist-name' }, { artistName: t.name }),
                              className: s,
                              href: t.url,
                              onClick: P,
                              title: d ? void 0 : c || t.name,
                              'data-test-id': p.OA.artists.SEPARATED_ARTIST_TITLE,
                              children: (0, r.jsx)(n.m_, {
                                  enabled: !c && d,
                                  offsetOptions: 4,
                                  placement: 'top',
                                  text: c || t.name,
                                  hoverSettings: u,
                                  children: (0, r.jsx)(x.HL, { variant: 'span', type: 'entity', size: a, weight: 'medium', className: l, children: t.name }),
                              }),
                          })
                        : (0, r.jsx)(n.m_, {
                              enabled: !c && d,
                              offsetOptions: 4,
                              placement: 'top',
                              text: c || t.name,
                              hoverSettings: u,
                              children: (0, r.jsx)(x.HL, {
                                  variant: 'span',
                                  type: 'entity',
                                  size: a,
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
                            linkClassName: s,
                            captionClassName: l,
                            captionSize: n,
                            allArtistsTitle: o,
                            withCustomTooltip: c,
                            hoverSettings: d,
                            shouldUseSeparator: u = !0,
                        } = e,
                        _ = (0, a.useMemo)(() => {
                            var e;
                            return null == (e = t.decomposed)
                                ? void 0
                                : e.reduce(
                                      (e, t) =>
                                          e.concat([
                                              u ? t.separator : '',
                                              (0, r.jsx)(
                                                  A,
                                                  {
                                                      artist: t,
                                                      withLink: i,
                                                      linkClassName: s,
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
                        }, [t.decomposed, u, i, s, l, n, o, c, d]);
                    return (0, r.jsxs)(r.Fragment, {
                        children: [
                            (0, r.jsx)(A, {
                                artist: t,
                                withLink: i,
                                linkClassName: s,
                                captionClassName: l,
                                captionSize: n,
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
            let g = (e) => {
                let { spoilerArtistsCount: t, spoilerClassName: i, handleOnSpoilerClick: l } = e;
                return (0, r.jsxs)(r.Fragment, {
                    children: [
                        ' ',
                        (0, r.jsx)(k.N, {
                            role: 'button',
                            href: '',
                            className: (0, s.$)(u().spoiler, i),
                            onClick: l,
                            rel: 'nofollow',
                            'data-test-id': p.OA.artists.SEPARATED_ARTISTS_SPOILER,
                            children: (0, r.jsx)(S.A, { id: 'entity-names.number-of-more-artists', values: { counter: t } }),
                        }),
                    ],
                });
            };
            var L = i(8055),
                T = i(6752),
                P = i(78035),
                O = i(78176),
                j = i(83598),
                R = i.n(j);
            let I = (0, l.PA)((e) => {
                    let { label: t, artists: i, forwardRef: s } = e;
                    return (0, r.jsxs)(n.m_, {
                        enableAriaDescribedby: !1,
                        isFocusEnabled: !1,
                        placement: 'top',
                        hoverSettings: { delay: 200, handleClose: (0, P.safePolygon)({ blockPointerEvents: !0 }) },
                        children: [
                            (0, r.jsx)('div', { ref: s, children: t }),
                            (0, r.jsx)(n.ZI, { className: R().tooltipContent, children: i.map((e) => (0, r.jsx)(O.V, { artist: e, className: R().artistItem }, e.id)) }),
                        ],
                    });
                }),
                b = (0, a.forwardRef)((e, t) => (0, r.jsx)(I, { forwardRef: t, ...e }));
            var D = i(19740),
                w = i(52598),
                M = i.n(w);
            let H = (0, l.PA)((e) => {
                    let { label: t, artists: i } = e,
                        { formatMessage: l } = (0, _.A)();
                    return (0, r.jsx)(D.W1, {
                        isMobile: !0,
                        className: (0, s.$)(M().root, M().important),
                        label: t,
                        ariaLabel: l({ id: 'interface-actions.context-menu-artists' }),
                        children: i.map((e) => (0, r.jsx)(O.V, { artist: e }, e.id)),
                    });
                }),
                z = (0, l.PA)((e) => {
                    let { artists: t = [], label: i, labelRef: s } = e,
                        [l, n] = (0, a.useState)(!1),
                        {
                            settings: { isMobile: c },
                        } = (0, o.g)(),
                        d = (0, h.c)(() => {
                            let e = s.current;
                            e && n(e.scrollHeight > e.clientHeight || e.scrollWidth > e.clientWidth);
                        }),
                        u = (0, T.L)(() =>
                            (0, L.A)(() => {
                                d();
                            }, 100),
                        );
                    if (
                        ((0, a.useEffect)(
                            () => (
                                window.addEventListener('resize', u),
                                d(),
                                () => {
                                    window.removeEventListener('resize', u);
                                }
                            ),
                            [u, d],
                        ),
                        (0, a.useEffect)(() => {
                            d();
                        }, [t, d]),
                        0 !== t.length)
                    )
                        return (l || c) && (!c || 1 !== t.length) ? (c ? (0, r.jsx)(H, { artists: t, label: i }) : (0, r.jsx)(b, { artists: t, label: i })) : i;
                }),
                F = (0, l.PA)((e) => {
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
                            captionSize: v,
                            variant: C = 'breakAll',
                            withAllArtistsTitle: y = !0,
                            withComposer: E = !0,
                            spoilerComponent: N,
                            withCustomTooltip: A = !0,
                            artistIdWithoutLink: S,
                            withContextMenu: k,
                        } = e,
                        L = (0, a.useRef)(null),
                        [T, P] = (0, a.useState)(!1),
                        O = y
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
                            settings: { isMobile: j },
                        } = (0, o.g)(),
                        R = 1 === i.length,
                        I = (0, a.useCallback)((e) => {
                            (P(!0), e.preventDefault());
                        }, []),
                        b = (0, a.useMemo)(() => {
                            let e = i;
                            return (
                                _ && !T && (e = i.slice(0, _)),
                                e.reduce((e, t) => {
                                    if (!E && t.isComposer) return e.length ? e : [];
                                    let i = (0, r.jsx)(
                                        f,
                                        {
                                            artist: t,
                                            linkClassName: h,
                                            captionClassName: x,
                                            withLink: m && t.id !== S && (((!j || R) && k) || !k),
                                            captionSize: v,
                                            allArtistsTitle: O,
                                            withCustomTooltip: A,
                                            hoverSettings: c.V,
                                            shouldUseSeparator: !!l,
                                        },
                                        t.key,
                                    );
                                    return e.length ? e.concat([l, i]) : [i];
                                }, [])
                            );
                        }, [i, _, T, E, j, R, k, h, x, m, S, v, O, A, l]),
                        D = (0, a.useMemo)(() => {
                            if (!T && _ && _ < i.length) {
                                let e = i.length - _;
                                return (0, a.isValidElement)(N) ? N : (0, r.jsx)(g, { spoilerClassName: p, spoilerArtistsCount: e, handleOnSpoilerClick: I });
                            }
                        }, [i.length, I, T, p, N, _]),
                        w = (0, a.useMemo)(() => {
                            if (d) return { WebkitLineClamp: d };
                        }, [d]),
                        M = (0, r.jsx)(n.m_, {
                            referenceRef: L,
                            enabled: !!(y && O) && A && !k && !j,
                            offsetOptions: 4,
                            placement: 'top',
                            text: O,
                            hoverSettings: c.V,
                            children: (0, r.jsxs)('div', {
                                style: w,
                                className: (0, s.$)(u().root, u()['root_variant_'.concat(C)], { [u().root_clamp]: d && d > 0 }, { [u().ellipsis]: !d }, t),
                                title: y && O && !A && !k ? O : void 0,
                                children: [b, D],
                            }),
                        });
                    return k ? (0, r.jsx)(z, { labelRef: L, artists: i, label: M }) : M;
                });
        },
        42464: (e, t, i) => {
            'use strict';
            i.d(t, { N: () => r });
            let r = (e) => 'object' == typeof e && null !== e && 'request' in e && null !== e.request;
        },
        45257: (e, t, i) => {
            'use strict';
            i.d(t, { $: () => x });
            var r = i(32290),
                s = i(63618),
                l = i(8055),
                a = i(55178);
            let n = (e) => {
                    let { style: t, forwardRef: i, context: s, ...l } = e,
                        a = (null == s ? void 0 : s.listAriaLabel) || void 0,
                        n = (null == s ? void 0 : s.listRole) || 'region';
                    return (0, r.jsx)('div', { 'aria-labelledby': 'virtual-grid-header', role: n, 'aria-label': a, style: { ...t }, ref: i, ...l });
                },
                o = (0, a.forwardRef)((e, t) => (0, r.jsx)(n, { forwardRef: t, ...e }));
            var c = i(39684),
                d = i.n(c);
            let u = (e) => {
                    let { style: t, forwardRef: i, withFooter: l, withHeader: a, withForceScroll: n, ...o } = e;
                    return (0, r.jsx)('div', {
                        className: (0, s.$)(d().scroller, { [d().scroller_withFooter]: l, [d().scroller_withHeader]: a, [d().scroller_withForceScroll]: n }),
                        style: { ...t },
                        ref: i,
                        ...o,
                        tabIndex: -1,
                    });
                },
                _ = (0, a.forwardRef)((e, t) => (0, r.jsx)(u, { forwardRef: t, ...e }));
            var m = i(62060),
                p = i(31417);
            let h = (e) => {
                    let {
                            pageSize: t,
                            onPageHandler: i,
                            onRangeHandler: s,
                            debounceDurationInMs: l = 100,
                            totalCount: n = 0,
                            shouldTriggerRangeChangedOn: o = [],
                            endReached: c,
                            virtuosoRef: d,
                            ...u
                        } = e,
                        [_, h] = (0, a.useState)(null),
                        x = (0, a.useMemo)(
                            () =>
                                (0, m.A)((e) => {
                                    if ((null == s || s(e), o.length > 0 && h(e), t && i)) {
                                        let r = Math.floor(e.endIndex / t) + 1,
                                            s = Math.floor(e.startIndex / t);
                                        for (let e = s; e < r; e++) i(e);
                                    }
                                }, l),
                            [l, s, t, i, o],
                        );
                    (0, a.useEffect)(() => {
                        o.length > 0 && _ && x(_);
                    }, o);
                    let v = (0, a.useMemo)(() => {
                        if (c)
                            return (0, m.A)((e) => {
                                c(e);
                            }, l);
                    }, [c, l]);
                    return (0, r.jsx)(p.sN, { ref: d, rangeChanged: x, totalCount: n, endReached: v, ...u });
                },
                x = (e) => {
                    let {
                            className: t,
                            customComponents: i,
                            onGetDataByPage: n,
                            onGetDataByRange: c,
                            itemClassName: u,
                            itemContentCallback: m,
                            listClassName: p,
                            overscan: x = 700,
                            pageSize: v = 20,
                            totalCount: C,
                            totalRequests: y,
                            debounceDurationInMs: E,
                            initialItemCount: N,
                            minInitialItemCount: A = 20,
                            handleRef: f,
                            alwaysShowScrollbar: S = !1,
                            testId: k,
                            isMobileLayout: g = !1,
                            shouldTriggerRangeChangedOn: L,
                            ...T
                        } = e,
                        [P, O] = (0, a.useState)(!1),
                        j = (0, a.useMemo)(
                            () =>
                                (0, l.A)((e) => {
                                    O(e);
                                }, 100),
                            [],
                        ),
                        R = (0, a.useMemo)(() => {
                            var e, t;
                            return g
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
                        }, [i, y, g]),
                        I = N ? Math.min(N, A) : void 0;
                    return (0, r.jsxs)('div', {
                        className: (0, s.$)(d().root, { [d().root_scrolling]: P || S, [d().root_notScrolling]: !P && !S }, t),
                        'data-test-id': k,
                        children: [
                            g && (null == i ? void 0 : i.Header) && i.Header(),
                            (0, r.jsx)(h, {
                                overscan: x,
                                components: R,
                                listClassName: p,
                                itemClassName: u,
                                isScrolling: j,
                                itemContent: m,
                                scrollerRef: f,
                                totalCount: C,
                                pageSize: v,
                                onPageHandler: n,
                                onRangeHandler: c,
                                debounceDurationInMs: E,
                                initialItemCount: I,
                                shouldTriggerRangeChangedOn: L,
                                ...T,
                            }),
                            g && (null == i ? void 0 : i.Footer) && i.Footer(),
                        ],
                    });
                };
        },
        50891: (e, t, i) => {
            'use strict';
            i.d(t, { m: () => l });
            var r = i(91945),
                s = i(25090);
            class l extends s.t {
                constructor(e = 'Http Client error', { code: t = 'E_HTTP_CLIENT', ...i } = {}) {
                    (super(e, { code: t, ...i }), (0, r._)(this, 'name', 'HttpException'), Object.setPrototypeOf(this, l.prototype));
                }
            }
        },
        50961: (e, t, i) => {
            'use strict';
            var r;
            (i.d(t, { X: () => r }),
                (function (e) {
                    ((e[(e.NOT_MODIFIED = 304)] = 'NOT_MODIFIED'),
                        (e[(e.NOT_FOUND = 404)] = 'NOT_FOUND'),
                        (e[(e.BAD_REQUEST = 400)] = 'BAD_REQUEST'),
                        (e[(e.REQUEST_TIMEOUT = 408)] = 'REQUEST_TIMEOUT'),
                        (e[(e.PRECONDITION_FAILED = 412)] = 'PRECONDITION_FAILED'),
                        (e[(e.TEAPOT = 418)] = 'TEAPOT'));
                })(r || (r = {})));
        },
        52598: (e) => {
            e.exports = { root: 'SeparatedArtistsWithContextMenuMobile_root__4BiJL', important: 'SeparatedArtistsWithContextMenuMobile_important__fSF1h' };
        },
        53514: (e, t, i) => {
            'use strict';
            i.d(t, { V: () => r });
            let r = { delay: { open: 1e3, close: 0 } };
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
        57594: (e, t, i) => {
            'use strict';
            i.d(t, { P: () => l, g: () => a });
            var r = i(55178),
                s = i(25090);
            let l = (0, r.createContext)(null);
            function a() {
                let e = (0, r.useContext)(l);
                if (null === e) throw new s.t('Store cannot be null, please add a context provider', { code: 'E_CONTEXT_STORE_NULL' });
                return e;
            }
        },
        61376: (e, t, i) => {
            'use strict';
            i.d(t, { x: () => _ });
            var r = i(32290),
                s = i(63618),
                l = i(60900),
                a = i(21732),
                n = i(63423),
                o = i(82586),
                c = i(71926),
                d = i(22492),
                u = i.n(d);
            let _ = (e) => {
                let { className: t, isLiked: i, likesCount: d, handleLikeClick: _, ariaLabel: m } = e,
                    { formatNumber: p } = (0, l.A)();
                return (0, r.jsx)(n.$, {
                    className: (0, s.$)(u().root, t),
                    onClick: _,
                    variant: 'text',
                    withRipple: !1,
                    icon: (0, r.jsx)(o.I, { variant: i ? 'likedVariant' : 'likeVariant', size: 'xxs', className: u().icon }),
                    'aria-label': m,
                    'data-test-id': a.S7.CARD_LIKES,
                    children: (0, r.jsx)(c.HL, { variant: 'div', size: 's', type: 'entity', weight: 'medium', children: p(d) }),
                });
            };
        },
        62376: (e, t, i) => {
            'use strict';
            i.d(t, { U: () => l });
            var r = i(70204),
                s = i(34186);
            let l = () => (0, s.N)().get(r.Zf);
        },
        73141: (e, t, i) => {
            'use strict';
            i.d(t, { K: () => h });
            var r = i(32290),
                s = i(92708),
                l = i(55178),
                a = i(60900),
                n = i(63380),
                o = i(45477),
                c = i(75582),
                d = i(57594),
                u = i(90357),
                _ = i(97647),
                m = i(97755);
            let p = (e) => {
                    let { playlist: t, closeToast: i } = e;
                    return (0, r.jsx)(m.O, {
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
                        { formatMessage: h } = (0, a.A)();
                    return (0, l.useCallback)(async () => {
                        if (!t.isAuthorized)
                            return void i((0, r.jsx)(u.h, { error: h({ id: 'authorization-messages.need-to-authorizate' }) }), { containerId: o.u.ERROR });
                        if (_) return;
                        let l = { ...(0, s.HO)(e), url: e.url, isLiked: !e.isLiked };
                        m(!0);
                        let a = await e.toggleLike();
                        (m(!1),
                            a === n.f.OK
                                ? i((0, r.jsx)(p, { playlist: l }), { containerId: o.u.INFO })
                                : i((0, r.jsx)(u.h, { error: h({ id: 'error-messages.error-during-action' }) }), { containerId: o.u.ERROR }));
                    }, [t.isAuthorized, _, e, h, i]);
                };
        },
        73192: (e, t, i) => {
            'use strict';
            i.d(t, { A: () => p });
            var r = i(32290),
                s = i(92708),
                l = i(55178),
                a = i(60900),
                n = i(45477),
                o = i(75582),
                c = i(57594),
                d = i(90357),
                u = i(97647),
                _ = i(8097);
            let m = (e) => {
                    let { playlist: t, closeToast: i } = e;
                    return (0, r.jsx)(_.k, {
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
                        { formatMessage: u } = (0, a.A)(),
                        [_, p] = (0, l.useState)(!1);
                    return (0, l.useCallback)(async () => {
                        if (!t.isAuthorized)
                            return void i((0, r.jsx)(d.h, { error: u({ id: 'authorization-messages.need-to-authorizate' }) }), { containerId: n.u.ERROR });
                        if (_) return;
                        let l = { ...(0, s.HO)(e), url: e.url, isPinned: !e.isPinned };
                        p(!0);
                        let a = await e.togglePin();
                        (p(!1),
                            a
                                ? i((0, r.jsx)(m, { playlist: l }), { containerId: n.u.INFO })
                                : i((0, r.jsx)(d.h, { error: u({ id: 'error-messages.error-during-action' }) }), { containerId: n.u.ERROR }));
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
            i.d(t, { V: () => y });
            var r = i(32290),
                s = i(63618),
                l = i(96103),
                a = i(55178),
                n = i(99923),
                o = i(21732),
                c = i(91027),
                d = i(50162),
                u = i(19740),
                _ = i(86269),
                m = i(71926),
                p = i(47745),
                h = i(32641),
                x = i(57594),
                v = i(16510),
                C = i.n(v);
            let y = (0, l.PA)((e) => {
                let { artist: t, className: i } = e,
                    { fullscreenPlayer: l } = (0, x.g)(),
                    v = (0, h.Z)(t.url),
                    E = (0, p.N)(),
                    N = (0, a.useMemo)(() => {
                        var e;
                        return (
                            'decomposed' in t &&
                            (null == (e = t.decomposed) ? void 0 : e.reduce((e, t) => (e.push((0, r.jsx)(y, { artist: t, className: i }, t.id)), e), []))
                        );
                    }, [t, i]),
                    A = (0, c.c)((e) => {
                        (l.modal.isOpened && l.modal.close(), E({ to: n.AppScreen.ArtistScreen }), v(e));
                    });
                return (0, r.jsxs)(r.Fragment, {
                    children: [
                        (0, r.jsxs)(u.Dr, {
                            className: (0, s.$)(C().root, i),
                            onClick: A,
                            'data-test-id': o.OA.artists.ARTIST_ITEM,
                            children: [
                                (0, r.jsx)(_.t, {
                                    radius: 'round',
                                    className: C().cover,
                                    children: (0, r.jsx)(d._V, { withAvatarReplace: !0, src: t.coverUri, size: 100, fit: 'contain', className: C().image }),
                                }),
                                (0, r.jsx)(m.HL, { variant: 'span', size: 'm', weight: 'medium', lineClamp: 1, children: t.name }),
                            ],
                        }),
                        N,
                    ],
                });
            });
        },
        78648: (e, t, i) => {
            'use strict';
            i.d(t, { C8: () => l, UC: () => a, dM: () => n, uV: () => o });
            var r = i(87953),
                s = i(42464);
            let l = (e) => {
                    if (void 0 === e || '' === e) return 'missing';
                    let t = Number(e);
                    return !Number.isFinite(t) || t < 0 ? 'invalid' : t < 86400 ? 'lt-1d' : t <= 2592e3 ? '1-30d' : 'gt-30d';
                },
                a = (e) => (e.uid ? 'authorized' : 'no-uid'),
                n = (e) => {
                    if (!(e instanceof r.m5) || !(0, s.N)(e.cause)) return 'unexpected';
                    let t = ((e) => {
                        if (!(0, s.N)(e.cause)) return;
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
            var r = i(32290),
                s = i(63618),
                l = i(96103),
                a = i(55178),
                n = i(60900),
                o = i(99923),
                c = i(21732),
                d = i(71483),
                u = i(91027),
                _ = i(6752),
                m = i(14934),
                p = i(82586),
                h = i(86269),
                x = i(71926),
                v = i(41677),
                C = i(73141),
                y = i(73192),
                E = i(71735),
                N = i(47745),
                A = i(2969),
                f = i(54391),
                S = i(23352),
                k = i(72396),
                g = i(5537),
                L = i(32641),
                T = i(28999),
                P = i(90169),
                O = i(57594),
                j = i(61376),
                R = i(11323),
                I = i(92744),
                b = i(61258),
                D = i(10180),
                w = i(90326),
                M = i(29268),
                H = i(34925),
                z = i(13931),
                F = i(19740),
                U = i(9017),
                Y = i(65477),
                B = i(46200),
                V = i(27120),
                K = i(95134),
                X = i(79406),
                W = i(58237),
                $ = i(56367),
                G = i(83755);
            let q = (0, l.PA)((e) => {
                var t;
                let { playlist: i, onOpenChange: s, open: l, ...a } = e,
                    { shouldShowBuySubscriptionModal: d, showBuySubscriptionModal: _ } = (0, B.q)(),
                    {
                        experiments: m,
                        settings: { isMobile: p },
                        trailer: h,
                        user: x,
                    } = (0, O.g)(),
                    v = (0, C.K)(i),
                    N = (0, y.A)(i),
                    A = (0, f.F)(),
                    { formatMessage: S } = (0, n.A)(),
                    k = (0, E.P)(),
                    g = m.checkExperiment(X.z.WebEditorsFeatures, 'on'),
                    L = (0, U.A)({ entityVariant: K.D.PLAYLIST, urlParams: { id: i.uid, kind: i.kind } });
                (0, V.N)(l);
                let T = (0, u.c)(() => {
                    if (d) return void _();
                    k() || (h.openPlaylistTrailer(i.id), A(o.DomainObjectType.Playlist, i.id));
                });
                return (0, r.jsxs)(F.W1, {
                    title: i.title,
                    onOpenChange: s,
                    open: l,
                    offsetOptions: 10,
                    isMobile: p,
                    ariaLabel: S({ id: 'interface-actions.context-menu' }),
                    containerDataTestId: c.Kq.playlist.PLAYLIST_CONTEXT_MENU,
                    ...a,
                    children: [
                        g && (0, r.jsx)(Y.d, { entityVariant: K.D.PLAYLIST, adminUrl: i.isFavouritePlaylist ? void 0 : L }),
                        !p && (0, r.jsx)($.L, { onClick: N, isPinned: i.isPinned }),
                        !i.isFavouritePlaylist && (0, r.jsx)(W.T, { onClick: v, isLiked: i.isLiked, disabled: !x.isAuthorized }),
                        (null == (t = i.trailer) ? void 0 : t.isAvailable) && (0, r.jsx)(G.N, { onClick: T, disabled: !i.isAvailable }),
                    ],
                });
            });
            var Z = i(11675),
                Q = i.n(Z);
            let J = (0, l.PA)((e) => {
                let { className: t, playlist: i, children: l, contentLinesCount: F, customDescription: U, onCoverMouseDown: Y } = e,
                    { ref: B, intersectionPropertyId: V } = (0, S.n)(),
                    {
                        trailer: K,
                        user: X,
                        paywall: { modal: W },
                    } = (0, O.g)(),
                    { from: $, utmLink: G } = (0, k.f)({ contextId: i.uuid, contextType: d.K.Playlist }),
                    { formatMessage: Z } = (0, n.A)(),
                    { sendLikeSearchFeedback: J, sendNavigateSearchFeedback: ee, sendPlaySearchFeedback: et } = (0, T.z)(),
                    [ei, er] = (0, a.useState)(!1),
                    [es, el] = (0, a.useState)(!1),
                    [ea, en] = (0, a.useState)(!1),
                    eo = (0, z.r)(i),
                    ec = (0, C.K)(i),
                    ed = (0, y.A)(i),
                    eu = (0, N.N)(),
                    e_ = (0, A.b)(),
                    em = (0, L.Z)(i.url),
                    ep = (0, f.F)(),
                    eh = (0, E.P)(),
                    ex = (0, u.c)((e) => {
                        if ((e.stopPropagation(), eh())) return void e.preventDefault();
                        (K.setUtmLink(G), K.openPlaylistTrailer(i.id), ep(o.DomainObjectType.Playlist, i.id));
                    }),
                    [ev, eC] = (0, a.useState)(!1),
                    { isPlaying: ey, togglePlay: eE } = (0, P.D)({
                        playContextParams: { contextData: { type: d.K.Playlist, meta: { id: i.id, uuid: i.uuid }, from: $, utmLink: G }, loadContextMeta: !0 },
                    }),
                    eN = (0, u.c)(() => {
                        (eu({ to: o.AppScreen.PlaylistScreen }), null == ee || ee());
                    }),
                    eA = (0, u.c)((e) => {
                        (eN(), em(e));
                    }),
                    ef = (0, g.N)(),
                    eS = (0, u.c)(() => {
                        if (!eh()) {
                            if (ef) return void W.open();
                            (ei || ey || (er(!0), null == et || et()), eE(), e_(!ey));
                        }
                    }),
                    ek = (0, u.c)(() => {
                        (es || i.isLiked || (el(!0), null == J || J()), ec());
                    }),
                    eg = (0, u.c)((e) => {
                        (e.preventDefault(), e.stopPropagation());
                    }),
                    eL = (0, u.c)((e) => {
                        (en(e), eC(e));
                    }),
                    eT = (0, a.useMemo)(() => {
                        var e;
                        return U
                            ? (0, r.jsx)(x.HL, { variant: 'span', type: 'entity', size: 's', weight: 'medium', lineClamp: 2, children: U }, i.getKey('description'))
                            : (null == (e = i.artists) ? void 0 : e.length)
                              ? (0, r.jsx)(
                                    v.i,
                                    { className: Q().artists, artists: i.artists, lineClamp: 1, linkClassName: Q().artistLink, captionSize: 's' },
                                    i.getKey('description'),
                                )
                              : void 0;
                    }, [U, i]),
                    eP = (0, _.L)(() => {
                        if (!i.isFavouritePlaylist)
                            return (0, r.jsx)(
                                I.c,
                                {
                                    className: (0, s.$)(Q().likeButton, Q().control),
                                    isLiked: i.isLiked,
                                    onClick: ek,
                                    variant: 'default',
                                    size: 's',
                                    iconSize: 'xxs',
                                    disabled: !X.isAuthorized,
                                },
                                i.getKey('LikeButton'),
                            );
                    }),
                    eO = (0, a.useMemo)(() => {
                        var e;
                        if (null == i || null == (e = i.trailer) ? void 0 : e.isAvailable)
                            return (0, r.jsx)(
                                H.n,
                                {
                                    children: (0, r.jsx)(
                                        M.k,
                                        { className: (0, s.$)(Q().trailerButton, Q().control), radius: 'round', size: 's', iconSize: 'xxs', onClick: ex },
                                        i.getKey('TrailerButton'),
                                    ),
                                },
                                i.getKey('PlaylilstCardTrailerTooltip'),
                            );
                    }, [ex, i]),
                    ej = (0, a.useMemo)(
                        () =>
                            (0, r.jsx)(
                                D.O,
                                { onClick: ed, isPinned: i.isPinned, className: (0, s.$)(Q().pinButton, Q().control), withRipple: !1 },
                                i.getKey('PinButton'),
                            ),
                        [ed, i],
                    ),
                    eR = (0, a.useMemo)(
                        () =>
                            (0, r.jsx)(h.t, {
                                className: Q().cover,
                                radius: 's',
                                withShadow: !0,
                                'data-test-id': c.Kq.playlist.PLAYLIST_CARD,
                                children: (0, r.jsxs)('div', {
                                    className: Q().coverBlock,
                                    onClick: eA,
                                    onMouseDown: Y,
                                    children: [
                                        (0, r.jsx)(R.B, {
                                            className: Q().image,
                                            src: i.coverUri,
                                            size: 200,
                                            fit: 'cover',
                                            alt: eo,
                                            withAvatarReplace: !0,
                                            'aria-hidden': !0,
                                        }),
                                        (0, r.jsx)(m.hg, {
                                            isVisible: ea || ev,
                                            className: Q().controls,
                                            playControl: (0, r.jsx)(
                                                w.D,
                                                {
                                                    className: (0, s.$)(Q().playButton, Q().control),
                                                    buttonVariant: 'default',
                                                    withHover: !1,
                                                    iconSize: 'xl',
                                                    variant: 'filled',
                                                    onClick: eS,
                                                    isPlaying: ey,
                                                    disabled: !i.isAvailable,
                                                },
                                                i.getKey('PlayButton'),
                                            ),
                                            likeControl: eP,
                                            menuControl: (0, r.jsx)(
                                                q,
                                                {
                                                    playlist: i,
                                                    onOpenChange: eL,
                                                    open: ea,
                                                    onClick: eg,
                                                    className: (0, s.$)(Q().menuButton, Q().control),
                                                    icon: (0, r.jsx)(p.I, { size: 'xxs', variant: 'more' }),
                                                    size: 's',
                                                    'data-test-id': c.Kq.playlist.PLAYLIST_CONTEXT_MENU_BUTTON,
                                                },
                                                i.getKey('PlaylistContextMenu'),
                                            ),
                                            pinControl: ej,
                                            trailerControl: eO,
                                        }),
                                    ],
                                }),
                            }),
                        [eA, Y, i, eo, ea, ev, eS, ey, eP, eL, eg, ej, eO],
                    ),
                    eI = !!i.actualLikesCount && !i.isLikesCountHidden;
                return (0, r.jsxs)(m.MN, {
                    ref: B,
                    'aria-label': eo,
                    className: (0, s.$)(Q().root, t),
                    title: (0, r.jsx)(x.HL, {
                        variant: 'div',
                        type: 'entity',
                        size: 's',
                        weight: 'medium',
                        lineClamp: 2,
                        'data-test-id': c.Kq.playlist.PLAYLIST_TITLE,
                        children: (0, r.jsx)(b.N, { className: Q().titleLink, href: i.url, onClick: eN, children: i.title }),
                    }),
                    srTitle: (0, r.jsx)(b.N, { href: i.url, onClick: eN, children: i.title }),
                    'data-intersection-property-id': V,
                    contentLinesCount: F,
                    view: eR,
                    description: eT,
                    'data-test-id': c.Kq.playlist.PLAYLIST_ITEM,
                    children: [
                        eI &&
                            (0, r.jsx)(j.x, {
                                ariaLabel: Z({ id: 'entity-names.likes-counter' }, { counter: i.actualLikesCount }),
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
        87953: (e, t, i) => {
            'use strict';
            i.d(t, { GX: () => l.G, X1: () => r.X, m5: () => s.m });
            var r = i(50961),
                s = i(50891),
                l = i(10733);
            i(33898);
        },
        89020: (e, t, i) => {
            'use strict';
            i.d(t, { V: () => c });
            var r = i(32290),
                s = i(63618),
                l = i(21732),
                a = i(79856),
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
                    withInfo: _ = !0,
                    linesCount: m = 3,
                    withSubcover: p,
                    radius: h = 'l',
                } = e;
                return (0, r.jsxs)('div', {
                    'aria-label': d,
                    'aria-live': t ? 'polite' : 'off',
                    'aria-busy': t,
                    className: (0, s.$)(o().root, i),
                    'data-test-id': l.S7.ENTITY_CARD_SHIMMER,
                    children: [
                        p && (0, r.jsx)(a.W, { isActive: t, className: o().subcover, radius: 'l' }),
                        (0, r.jsx)(a.W, { isActive: t, className: (0, s.$)(o().cover, n, { [o().cover_round]: c, [o().cover_withSubcover]: p }), radius: h }),
                        _ &&
                            (0, r.jsx)('div', {
                                className: (0, s.$)(o().infoContainer, o()['content_linesCount_'.concat(m)], { [o().infoContainer_centered]: u }),
                                children: (0, r.jsx)(a.W, { isActive: t, className: (0, s.$)(o().title, { [o().title_withSubcover]: p }), radius: 's' }),
                            }),
                    ],
                });
            };
        },
        94218: (e, t, i) => {
            'use strict';
            i.d(t, { H: () => m });
            var r = i(32290),
                s = i(21916),
                l = i(39407),
                a = i(21732),
                n = i(91027),
                o = i(63423),
                c = i(71926),
                d = i(78648),
                u = i(70204),
                _ = i(34186);
            let m = (e) => {
                let { size: t = 'm', variant: i = 'default', color: m = 'primary', withRipple: p = !0, buttonText: h, isBlock: x, key: v, className: C } = e,
                    y = (0, s.useRouter)(),
                    E = (0, _.N)().get(u.QG),
                    N = (0, n.c)(() => {
                        E.authorizationUrl && ((0, d.uV)({ stage: 'attempt-start', trigger: 'user' }), y.push(E.authorizationUrl));
                    });
                return (0, r.jsx)(
                    o.$,
                    {
                        onClick: N,
                        className: C,
                        isBlock: x,
                        color: m,
                        variant: i,
                        size: t,
                        radius: 'xxxl',
                        withRipple: p,
                        'data-test-id': a.S7.UNAUTHORIZED_BUTTON,
                        children: h || (0, r.jsx)(c.HL, { variant: 'div', size: 'l', lineClamp: 1, children: (0, r.jsx)(l.A, { id: 'authorization.enter-button' }) }),
                    },
                    v,
                );
            };
        },
        97841: (e, t, i) => {
            'use strict';
            i.d(t, { w: () => S });
            var r = i(32290),
                s = i(63618),
                l = i(96103),
                a = i(60900),
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
                    let { formatMessage: t, language: i, tld: r, year: s } = e;
                    return {
                        year: s,
                        yandexMusic: { id: o.YANDEX, title: t({ id: 'footer.yandex-music' }), url: c(o.YANDEX, r, i) },
                        yandexProjects: { id: o.YANDEX_PROJECTS, title: t({ id: 'footer.yandex-project' }), url: c(o.YANDEX_PROJECTS, r, i) },
                    };
                };
            var u = i(15559),
                _ = i(8626);
            let m = (e) => e(new Date(), (0, _.m)());
            var p = i(61945),
                h = i(57594),
                x = i(77088),
                v = i.n(x),
                C = i(21732),
                y = i(71926),
                E = i(61258);
            let N = (e) => {
                    let { className: t, data: i } = e;
                    return (0, r.jsxs)('div', {
                        className: (0, s.$)(v().copyrights, t),
                        'data-test-id': C.S7.FOOTER_COPYRIGHTS,
                        children: [
                            (0, r.jsxs)(y.HL, {
                                variant: 'span',
                                type: 'text',
                                size: 's',
                                weight: 'medium',
                                className: v().text,
                                children: [
                                    '\xa9 ',
                                    i.year,
                                    ' \xa0',
                                    (0, r.jsx)(E.N, {
                                        target: '_blank',
                                        href: i.yandexMusic.url,
                                        className: (0, s.$)(v().copyrightLink, v().yandexMusicLink),
                                        'data-test-id': C.S7.FOOTER_YANDEX_MUSIC_LINK,
                                        children: i.yandexMusic.title,
                                    }),
                                ],
                            }),
                            (0, r.jsx)(y.HL, { variant: 'span', type: 'text', size: 's', weight: 'medium', children: ' • ' }),
                            (0, r.jsx)(E.N, {
                                target: '_blank',
                                href: i.yandexProjects.url,
                                className: v().copyrightLink,
                                'data-test-id': C.S7.FOOTER_YANDEX_PROJECT_LINK,
                                children: i.yandexProjects.title,
                            }),
                        ],
                    });
                },
                A = (e) => {
                    let { disclaimer: t, links: i } = e;
                    return (0, r.jsxs)('div', {
                        className: v().links,
                        children: [
                            (0, r.jsx)('ol', {
                                className: v().list,
                                'data-test-id': C.S7.FOOTER_LINKS_LIST,
                                children: i.map((e) => {
                                    let { id: t, title: i, url: s } = e;
                                    return (0, r.jsx)(
                                        'li',
                                        {
                                            className: v().item,
                                            children: (0, r.jsx)(E.N, { target: '_blank', href: s, className: v().link, 'data-test-id': C.S7.FOOTER_LINK, children: i }),
                                        },
                                        t,
                                    );
                                }),
                            }),
                            (0, r.jsx)(y.HL, {
                                variant: 'span',
                                type: 'text',
                                size: 'm',
                                weight: 'medium',
                                className: v().explicitText,
                                tabIndex: 0,
                                dangerouslySetInnerHTML: { __html: t },
                                'data-test-id': C.S7.FOOTER_DISCLAIMER_TEXT,
                            }),
                        ],
                    });
                },
                f = (e) => {
                    let { className: t, data: i } = e;
                    return (0, r.jsxs)('footer', {
                        className: (0, s.$)(v().root, v().important, t),
                        'data-test-id': C.S7.FOOTER,
                        children: [(0, r.jsx)(A, { links: i.links, disclaimer: i.disclaimer }), (0, r.jsx)(N, { data: i.copyrights })],
                    });
                };
            (0, l.PA)((e) => {
                let { className: t } = e,
                    { location: i } = (0, h.g)(),
                    { formatDate: s, formatMessage: l } = (0, a.A)(),
                    { language: n } = (0, p.h)(),
                    o = d({ formatMessage: l, language: n, tld: i.tld, year: m(s) });
                return (0, r.jsx)(N, { className: t, data: o });
            });
            let S = (0, l.PA)((e) => {
                var t;
                let { className: i } = e,
                    { experiments: l, location: _, user: x } = (0, h.g)(),
                    { formatDate: C, formatMessage: y } = (0, a.A)(),
                    { isEnabled: E } = null != (t = (0, n.P)()) ? t : {},
                    { language: N } = (0, p.h)(),
                    A = ((e) => {
                        let { checkExperiment: t, formatMessage: i, isWebApplication: r, language: s, tld: l, userRegion: a, year: n } = e;
                        return {
                            links: ((e) => {
                                let { formatMessage: t, isWebApplication: i, tld: r, language: s, userRegion: l } = e,
                                    a = { id: o.COPYRIGHT_HOLDER, title: t({ id: 'footer.links-copyright-holders' }), url: c(o.COPYRIGHT_HOLDER, r, s) },
                                    n = { id: o.PRIVACY_POLICY, title: t({ id: 'footer.links-privacy-policy' }), url: c(o.PRIVACY_POLICY, r, s) },
                                    d = { id: o.AGREEMENT, title: t({ id: 'footer.links-terms' }), url: c(o.AGREEMENT, r, s) },
                                    u = { id: o.RECOMMENDATION_RULES, title: t({ id: 'footer.links-recommendation-rules' }), url: c(o.RECOMMENDATION_RULES, r, s) },
                                    _ = { id: o.HELP, title: t({ id: 'footer.links-help' }), url: c(o.HELP, r, s) },
                                    m = [a, d, u];
                                return (i && 'ru' === l && m.push(n), m.push(_), m);
                            })({ formatMessage: i, isWebApplication: r, language: s, tld: l, userRegion: a }),
                            disclaimer: (0, u.v)({
                                checkExperiment: t,
                                getDisclaimerContent: () => i({ id: 'footer.disclaimer-content' }),
                                getExplicitContent: () => i({ id: 'footer.explicit-content' }),
                                userRegion: a,
                            }),
                            copyrights: d({ formatMessage: i, language: s, tld: l, year: n }),
                        };
                    })({
                        checkExperiment: (e, t) => l.checkExperiment(e, t),
                        formatMessage: y,
                        isWebApplication: !1,
                        tld: _.tld,
                        language: N,
                        userRegion: x.account.data.userSessionRegionIso,
                        year: m(C),
                    });
                return (0, r.jsx)(f, { className: (0, s.$)({ [v().root_withOffsetForDeeplink]: E }, i), data: A });
            });
        },
    },
]);
