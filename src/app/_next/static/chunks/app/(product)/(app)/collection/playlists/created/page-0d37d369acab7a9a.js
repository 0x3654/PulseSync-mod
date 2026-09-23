(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [6696],
    {
        3377: (e, t, i) => {
            'use strict';
            i.d(t, { WithAuth: () => h });
            var s = i(32290),
                r = i(96103),
                l = i(21916),
                a = i(63618),
                o = i(39407),
                n = i(71926),
                c = i(94218),
                d = i(55556),
                u = i.n(d);
            let _ = (0, r.PA)(() =>
                (0, s.jsxs)('div', {
                    className: u().root,
                    children: [
                        (0, s.jsx)(n.DZ, {
                            className: (0, a.$)(u().title, u().important),
                            variant: 'h3',
                            size: 'xs',
                            children: (0, s.jsx)(o.A, { id: 'authorization.enter-title' }),
                        }),
                        (0, s.jsx)(n.HL, {
                            className: (0, a.$)(u().text, u().important),
                            variant: 'span',
                            type: 'text',
                            size: 'l',
                            weight: 'normal',
                            children: (0, s.jsx)(o.A, { id: 'authorization.enter-text' }),
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
                    experiments: a,
                } = (0, s.g)();
                return (
                    !(null == l ? void 0 : l.isTouch) &&
                    i.isAuthorized &&
                    !i.hasPlus &&
                    (null == (t = a.getExperiment(r.z.WebNextDesktopWebFreemium)) || null == (e = t.value) ? void 0 : e.closeListening) === 'on'
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
                a = i(71730),
                o = i(45477),
                n = i(75582),
                c = i(49399);
            let d = (e, t) => {
                let { notify: i, dismiss: d } = (0, n.l)(),
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
                    e.rejectedPagesCount > 0 && !u.current && (u.current = i((0, s.jsx)(a.L, { reloadBlocks: _ }), { containerId: o.u.ERROR, autoClose: !1 }));
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
                a = i(21732),
                o = i(63423),
                n = i(82586),
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
                            style: C,
                            children: v,
                        } = e,
                        { formatMessage: y } = (0, l.A)(),
                        E = y({ id: 'trailer.button-aria-label' });
                    return (0, s.jsx)(o.$, {
                        className: h,
                        color: 'secondary',
                        radius: d,
                        size: r,
                        variant: t,
                        withRipple: i,
                        flexIcon: !0,
                        'aria-label': E,
                        onClick: m,
                        ref: x,
                        icon: (0, s.jsx)(n.I, { variant: 'trailer', size: u, className: p }),
                        disabled: _,
                        'data-intersection-property-id': c.N,
                        style: C,
                        'data-test-id': a.S7.TRAILER_BUTTON,
                        children: v,
                    });
                },
                u = (0, r.forwardRef)((e, t) => (0, s.jsx)(d, { forwardRef: t, ...e }));
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
            i.d(t, { A: () => a });
            var s = i(32290),
                r = i(77088),
                l = i.n(r);
            let a = (e) => {
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
        34925: (e, t, i) => {
            'use strict';
            i.d(t, { n: () => a });
            var s = i(32290),
                r = i(60900),
                l = i(70280);
            let a = (e) => {
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
            i.d(t, { i: () => F });
            var s = i(32290),
                r = i(63618),
                l = i(96103),
                a = i(55178),
                o = i(70280),
                n = i(57594),
                c = i(53514),
                d = i(40484),
                u = i.n(d),
                _ = i(60900),
                m = i(99923),
                p = i(21732),
                h = i(91027),
                x = i(71926),
                C = i(47745),
                v = i(32641),
                y = i(28999),
                E = i(61258),
                g = i(19383);
            let N = (0, l.PA)((e) => {
                    let {
                            artist: t,
                            withLink: i = !0,
                            linkClassName: r,
                            captionClassName: l,
                            captionSize: a = 'm',
                            allArtistsTitle: c,
                            withCustomTooltip: d,
                            hoverSettings: u,
                        } = e,
                        { formatMessage: N } = (0, _.A)(),
                        {
                            track: f,
                            settings: { isMobile: A },
                        } = (0, n.g)(),
                        k = (0, v.Z)(t.url),
                        { sendNavigateSearchFeedback: S } = (0, y.z)(),
                        L = (0, C.N)(),
                        P = ((e) => {
                            let { artist: t, callback: i } = e,
                                { currentTrackInfo: s, fullscreenPlayer: r, fullscreenVideoPlayer: l } = (0, n.g)(),
                                { modal: a } = s;
                            return (0, g.l)({
                                entity: t,
                                callback: i,
                                onBeforeHandle: (e) => {
                                    (null == e || e.stopPropagation(), a.isOpened && (s.reset(), a.close()), r.modal.isOpened && r.modal.close());
                                },
                                onAfterHandled: () => {
                                    l.modal.isOpened && (l.modal.close(), l.reset());
                                },
                                preventDefaultWhenSafe: !0,
                            });
                        })({
                            artist: t,
                            callback: (0, h.c)((e) => {
                                (A && f.isOpened && f.close(), k(e));
                            }),
                        }),
                        T = (0, h.c)((e) => {
                            (L({ to: m.AppScreen.ArtistScreen }), null == S || S(), P(e));
                        });
                    return i && !t.various
                        ? (0, s.jsx)(E.N, {
                              'aria-label': N({ id: 'entity-names.artist-name' }, { artistName: t.name }),
                              className: r,
                              href: t.url,
                              onClick: T,
                              title: d ? void 0 : c || t.name,
                              'data-test-id': p.OA.artists.SEPARATED_ARTIST_TITLE,
                              children: (0, s.jsx)(o.m_, {
                                  enabled: !c && d,
                                  offsetOptions: 4,
                                  placement: 'top',
                                  text: c || t.name,
                                  hoverSettings: u,
                                  children: (0, s.jsx)(x.HL, { variant: 'span', type: 'entity', size: a, weight: 'medium', className: l, children: t.name }),
                              }),
                          })
                        : (0, s.jsx)(o.m_, {
                              enabled: !c && d,
                              offsetOptions: 4,
                              placement: 'top',
                              text: c || t.name,
                              hoverSettings: u,
                              children: (0, s.jsx)(x.HL, {
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
                            linkClassName: r,
                            captionClassName: l,
                            captionSize: o,
                            allArtistsTitle: n,
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
                                              (0, s.jsx)(
                                                  N,
                                                  {
                                                      artist: t,
                                                      withLink: i,
                                                      linkClassName: r,
                                                      captionClassName: l,
                                                      captionSize: o,
                                                      allArtistsTitle: n,
                                                      withCustomTooltip: c,
                                                      hoverSettings: d,
                                                  },
                                                  t.id,
                                              ),
                                          ]),
                                      [],
                                  );
                        }, [t.decomposed, u, i, r, l, o, n, c, d]);
                    return (0, s.jsxs)(s.Fragment, {
                        children: [
                            (0, s.jsx)(N, {
                                artist: t,
                                withLink: i,
                                linkClassName: r,
                                captionClassName: l,
                                captionSize: o,
                                allArtistsTitle: n,
                                withCustomTooltip: c,
                                hoverSettings: d,
                            }),
                            _,
                        ],
                    });
                };
            var A = i(39407),
                k = i(63887);
            let S = (e) => {
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
                            children: (0, s.jsx)(A.A, { id: 'entity-names.number-of-more-artists', values: { counter: t } }),
                        }),
                    ],
                });
            };
            var L = i(8055),
                P = i(6752),
                T = i(78035),
                j = i(78176),
                R = i(83598),
                O = i.n(R);
            let b = (0, l.PA)((e) => {
                    let { label: t, artists: i, forwardRef: r } = e;
                    return (0, s.jsxs)(o.m_, {
                        enableAriaDescribedby: !1,
                        isFocusEnabled: !1,
                        placement: 'top',
                        hoverSettings: { delay: 200, handleClose: (0, T.safePolygon)({ blockPointerEvents: !0 }) },
                        children: [
                            (0, s.jsx)('div', { ref: r, children: t }),
                            (0, s.jsx)(o.ZI, { className: O().tooltipContent, children: i.map((e) => (0, s.jsx)(j.V, { artist: e, className: O().artistItem }, e.id)) }),
                        ],
                    });
                }),
                I = (0, a.forwardRef)((e, t) => (0, s.jsx)(b, { forwardRef: t, ...e }));
            var D = i(19740),
                w = i(52598),
                M = i.n(w);
            let z = (0, l.PA)((e) => {
                    let { label: t, artists: i } = e,
                        { formatMessage: l } = (0, _.A)();
                    return (0, s.jsx)(D.W1, {
                        isMobile: !0,
                        className: (0, r.$)(M().root, M().important),
                        label: t,
                        ariaLabel: l({ id: 'interface-actions.context-menu-artists' }),
                        children: i.map((e) => (0, s.jsx)(j.V, { artist: e }, e.id)),
                    });
                }),
                H = (0, l.PA)((e) => {
                    let { artists: t = [], label: i, labelRef: r } = e,
                        [l, o] = (0, a.useState)(!1),
                        {
                            settings: { isMobile: c },
                        } = (0, n.g)(),
                        d = (0, h.c)(() => {
                            let e = r.current;
                            e && o(e.scrollHeight > e.clientHeight || e.scrollWidth > e.clientWidth);
                        }),
                        u = (0, P.L)(() =>
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
                        return (l || c) && (!c || 1 !== t.length) ? (c ? (0, s.jsx)(z, { artists: t, label: i }) : (0, s.jsx)(I, { artists: t, label: i })) : i;
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
                            captionSize: C,
                            variant: v = 'breakAll',
                            withAllArtistsTitle: y = !0,
                            withComposer: E = !0,
                            spoilerComponent: g,
                            withCustomTooltip: N = !0,
                            artistIdWithoutLink: A,
                            withContextMenu: k,
                        } = e,
                        L = (0, a.useRef)(null),
                        [P, T] = (0, a.useState)(!1),
                        j = y
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
                            settings: { isMobile: R },
                        } = (0, n.g)(),
                        O = 1 === i.length,
                        b = (0, a.useCallback)((e) => {
                            (T(!0), e.preventDefault());
                        }, []),
                        I = (0, a.useMemo)(() => {
                            let e = i;
                            return (
                                _ && !P && (e = i.slice(0, _)),
                                e.reduce((e, t) => {
                                    if (!E && t.isComposer) return e.length ? e : [];
                                    let i = (0, s.jsx)(
                                        f,
                                        {
                                            artist: t,
                                            linkClassName: h,
                                            captionClassName: x,
                                            withLink: m && t.id !== A && (((!R || O) && k) || !k),
                                            captionSize: C,
                                            allArtistsTitle: j,
                                            withCustomTooltip: N,
                                            hoverSettings: c.V,
                                            shouldUseSeparator: !!l,
                                        },
                                        t.key,
                                    );
                                    return e.length ? e.concat([l, i]) : [i];
                                }, [])
                            );
                        }, [i, _, P, E, R, O, k, h, x, m, A, C, j, N, l]),
                        D = (0, a.useMemo)(() => {
                            if (!P && _ && _ < i.length) {
                                let e = i.length - _;
                                return (0, a.isValidElement)(g) ? g : (0, s.jsx)(S, { spoilerClassName: p, spoilerArtistsCount: e, handleOnSpoilerClick: b });
                            }
                        }, [i.length, b, P, p, g, _]),
                        w = (0, a.useMemo)(() => {
                            if (d) return { WebkitLineClamp: d };
                        }, [d]),
                        M = (0, s.jsx)(o.m_, {
                            referenceRef: L,
                            enabled: !!(y && j) && N && !k && !R,
                            offsetOptions: 4,
                            placement: 'top',
                            text: j,
                            hoverSettings: c.V,
                            children: (0, s.jsxs)('div', {
                                style: w,
                                className: (0, r.$)(u().root, u()['root_variant_'.concat(v)], { [u().root_clamp]: d && d > 0 }, { [u().ellipsis]: !d }, t),
                                title: y && j && !N && !k ? j : void 0,
                                children: [I, D],
                            }),
                        });
                    return k ? (0, s.jsx)(H, { labelRef: L, artists: i, label: M }) : M;
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
                a = i(55178);
            let o = (e) => {
                    let { style: t, forwardRef: i, context: r, ...l } = e,
                        a = (null == r ? void 0 : r.listAriaLabel) || void 0,
                        o = (null == r ? void 0 : r.listRole) || 'region';
                    return (0, s.jsx)('div', { 'aria-labelledby': 'virtual-grid-header', role: o, 'aria-label': a, style: { ...t }, ref: i, ...l });
                },
                n = (0, a.forwardRef)((e, t) => (0, s.jsx)(o, { forwardRef: t, ...e }));
            var c = i(39684),
                d = i.n(c);
            let u = (e) => {
                    let { style: t, forwardRef: i, withFooter: l, withHeader: a, withForceScroll: o, ...n } = e;
                    return (0, s.jsx)('div', {
                        className: (0, r.$)(d().scroller, { [d().scroller_withFooter]: l, [d().scroller_withHeader]: a, [d().scroller_withForceScroll]: o }),
                        style: { ...t },
                        ref: i,
                        ...n,
                        tabIndex: -1,
                    });
                },
                _ = (0, a.forwardRef)((e, t) => (0, s.jsx)(u, { forwardRef: t, ...e }));
            var m = i(62060),
                p = i(31417);
            let h = (e) => {
                    let {
                            pageSize: t,
                            onPageHandler: i,
                            onRangeHandler: r,
                            debounceDurationInMs: l = 100,
                            totalCount: o = 0,
                            shouldTriggerRangeChangedOn: n = [],
                            endReached: c,
                            virtuosoRef: d,
                            ...u
                        } = e,
                        [_, h] = (0, a.useState)(null),
                        x = (0, a.useMemo)(
                            () =>
                                (0, m.A)((e) => {
                                    if ((null == r || r(e), n.length > 0 && h(e), t && i)) {
                                        let s = Math.floor(e.endIndex / t) + 1,
                                            r = Math.floor(e.startIndex / t);
                                        for (let e = r; e < s; e++) i(e);
                                    }
                                }, l),
                            [l, r, t, i, n],
                        );
                    (0, a.useEffect)(() => {
                        n.length > 0 && _ && x(_);
                    }, n);
                    let C = (0, a.useMemo)(() => {
                        if (c)
                            return (0, m.A)((e) => {
                                c(e);
                            }, l);
                    }, [c, l]);
                    return (0, s.jsx)(p.sN, { ref: d, rangeChanged: x, totalCount: o, endReached: C, ...u });
                },
                x = (e) => {
                    let {
                            className: t,
                            customComponents: i,
                            onGetDataByPage: o,
                            onGetDataByRange: c,
                            itemClassName: u,
                            itemContentCallback: m,
                            listClassName: p,
                            overscan: x = 700,
                            pageSize: C = 20,
                            totalCount: v,
                            totalRequests: y,
                            debounceDurationInMs: E,
                            initialItemCount: g,
                            minInitialItemCount: N = 20,
                            handleRef: f,
                            alwaysShowScrollbar: A = !1,
                            testId: k,
                            isMobileLayout: S = !1,
                            shouldTriggerRangeChangedOn: L,
                            ...P
                        } = e,
                        [T, j] = (0, a.useState)(!1),
                        R = (0, a.useMemo)(
                            () =>
                                (0, l.A)((e) => {
                                    j(e);
                                }, 100),
                            [],
                        ),
                        O = (0, a.useMemo)(() => {
                            var e, t;
                            return S
                                ? {
                                      Scroller: _,
                                      List: null != (e = null == i ? void 0 : i.List) ? e : n,
                                      Item: null == i ? void 0 : i.Item,
                                      ScrollSeekPlaceholder: null == i ? void 0 : i.ScrollSeekPlaceholder,
                                  }
                                : {
                                      Scroller: _,
                                      List: null != (t = null == i ? void 0 : i.List) ? t : n,
                                      Item: null == i ? void 0 : i.Item,
                                      Header: null == i ? void 0 : i.Header,
                                      Footer: null == i ? void 0 : i.Footer,
                                      ScrollSeekPlaceholder: null == i ? void 0 : i.ScrollSeekPlaceholder,
                                  };
                        }, [i, y, S]),
                        b = g ? Math.min(g, N) : void 0;
                    return (0, s.jsxs)('div', {
                        className: (0, r.$)(d().root, { [d().root_scrolling]: T || A, [d().root_notScrolling]: !T && !A }, t),
                        'data-test-id': k,
                        children: [
                            S && (null == i ? void 0 : i.Header) && i.Header(),
                            (0, s.jsx)(h, {
                                overscan: x,
                                components: O,
                                listClassName: p,
                                itemClassName: u,
                                isScrolling: R,
                                itemContent: m,
                                scrollerRef: f,
                                totalCount: v,
                                pageSize: C,
                                onPageHandler: o,
                                onRangeHandler: c,
                                debounceDurationInMs: E,
                                initialItemCount: b,
                                shouldTriggerRangeChangedOn: L,
                                ...P,
                            }),
                            S && (null == i ? void 0 : i.Footer) && i.Footer(),
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
        56502: (e) => {
            e.exports = {
                root: 'CollectionPlaylistsCreatedPage_root__o77CF',
                scrollContainer: 'CollectionPlaylistsCreatedPage_scrollContainer__Spb2M',
                important: 'CollectionPlaylistsCreatedPage_important__DLkOq',
                content: 'CollectionPlaylistsCreatedPage_content___qalr',
                footer: 'CollectionPlaylistsCreatedPage_footer__I2jJa',
                item: 'CollectionPlaylistsCreatedPage_item__2RmBg',
            };
        },
        57594: (e, t, i) => {
            'use strict';
            i.d(t, { P: () => l, g: () => a });
            var s = i(55178),
                r = i(25090);
            let l = (0, s.createContext)(null);
            function a() {
                let e = (0, s.useContext)(l);
                if (null === e) throw new r.t('Store cannot be null, please add a context provider', { code: 'E_CONTEXT_STORE_NULL' });
                return e;
            }
        },
        61376: (e, t, i) => {
            'use strict';
            i.d(t, { x: () => _ });
            var s = i(32290),
                r = i(63618),
                l = i(60900),
                a = i(21732),
                o = i(63423),
                n = i(82586),
                c = i(71926),
                d = i(22492),
                u = i.n(d);
            let _ = (e) => {
                let { className: t, isLiked: i, likesCount: d, handleLikeClick: _, ariaLabel: m } = e,
                    { formatNumber: p } = (0, l.A)();
                return (0, s.jsx)(o.$, {
                    className: (0, r.$)(u().root, t),
                    onClick: _,
                    variant: 'text',
                    withRipple: !1,
                    icon: (0, s.jsx)(n.I, { variant: i ? 'likedVariant' : 'likeVariant', size: 'xxs', className: u().icon }),
                    'aria-label': m,
                    'data-test-id': a.S7.CARD_LIKES,
                    children: (0, s.jsx)(c.HL, { variant: 'div', size: 's', type: 'entity', weight: 'medium', children: p(d) }),
                });
            };
        },
        62376: (e, t, i) => {
            'use strict';
            i.d(t, { U: () => l });
            var s = i(70204),
                r = i(34186);
            let l = () => (0, r.N)().get(s.Zf);
        },
        67910: (e, t, i) => {
            (Promise.resolve().then(i.bind(i, 3377)), Promise.resolve().then(i.bind(i, 69114)));
        },
        69114: (e, t, i) => {
            'use strict';
            i.d(t, { CollectionPlaylistsCreatedPage: () => L });
            var s = i(32290),
                r = i(63618),
                l = i(96103),
                a = i(55178),
                o = i(60900),
                n = i(39407),
                c = i(21732),
                d = i(71926),
                u = i(7999),
                _ = i(83460),
                m = i(48922),
                p = i(22714),
                h = i(83808),
                x = i(83920),
                C = i(3796),
                v = i(57594),
                y = i(11262),
                E = i(97841),
                g = i(32468),
                N = i(74694),
                f = i(89020),
                A = i(45257),
                k = i(56502),
                S = i.n(k);
            let L = (0, l.PA)(() => {
                let {
                        user: e,
                        collection: {
                            playlists: { playlistsCreated: t },
                        },
                        settings: { isMobile: i },
                    } = (0, v.g)(),
                    { formatMessage: l } = (0, o.A)(),
                    { contentScrollRef: k, setContentScrollRef: L } = (0, x.g)(),
                    P = (0, h.W)(),
                    T = (0, a.useMemo)(() => ({ Footer: () => (0, s.jsx)(g.A, { children: (0, s.jsx)(E.w, { className: S().footer }) }) }), []);
                (0, C.J)(t.isResolved);
                let j = (0, a.useCallback)(
                    (i) => {
                        e.account.data.uid && t.getData({ userId: e.account.data.uid, page: i, pageSize: 20 });
                    },
                    [t, e.account.data.uid],
                );
                ((0, y.X)(t.pagesLoader, j),
                    (0, a.useEffect)(
                        () => () => {
                            t.reset();
                        },
                        [t],
                    ),
                    e.account.data.uid && t.isNeededToLoad && (0, a.use)(t.getData({ userId: e.account.data.uid, page: 0, pageSize: 20 })));
                let R = t.isShimmerVisible ? 20 : t.items.length;
                return (0, s.jsx)(p.n, {
                    pageId: m._Q.OWN_PLAYLISTS,
                    children: (0, s.jsx)(u.h, {
                        scrollElement: k,
                        outerTitle: l({ id: 'entity-names.my-playlists' }),
                        children: (0, s.jsxs)('div', {
                            className: S().root,
                            'data-test-id': c.Xk.collection.COLLECTION_PLAYLISTS_CREATED_PAGE,
                            children: [
                                (0, s.jsx)(N.Y, {
                                    variant: N.V.TEXT,
                                    withForwardControl: !1,
                                    withBackwardControl: P.canBack,
                                    children: (0, s.jsx)(d.DZ, {
                                        id: 'collection-playlistsCreated-header',
                                        variant: 'h2',
                                        weight: 'bold',
                                        size: 'xl',
                                        lineClamp: 1,
                                        children: (0, s.jsx)(n.A, { id: 'entity-names.my-playlists' }),
                                    }),
                                }),
                                (0, s.jsx)(A.$, {
                                    className: (0, r.$)(S().scrollContainer, S().important),
                                    customComponents: T,
                                    itemContentCallback: (e) => {
                                        let i = t.items[e],
                                            r = l({ id: 'loading-messages.entity-is-loading' }, { entityName: l({ id: 'entity-names.playlist' }) });
                                        return i ? (0, s.jsx)(_.B, { playlist: i, contentLinesCount: 3 }, i.key) : (0, s.jsx)(f.V, { 'aria-label': r });
                                    },
                                    totalCount: R,
                                    onGetDataByPage: j,
                                    pageSize: 20,
                                    totalRequests: t.requestsCount,
                                    listClassName: S().content,
                                    itemClassName: S().item,
                                    handleRef: L,
                                    context: { listAriaLabel: l({ id: 'collection.created-playlists-list' }) },
                                    isMobileLayout: i,
                                    useWindowScroll: i,
                                }),
                            ],
                        }),
                    }),
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
                a = i(60900),
                o = i(39407),
                n = i(63423),
                c = i(82586),
                d = i(71926),
                u = i(58534),
                _ = i(70718),
                m = i.n(_);
            let p = (e) => {
                let { reloadBlocks: t, closeToast: i } = e,
                    _ = (0, l.useRef)(null),
                    { formatMessage: p } = (0, a.A)();
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
                                    children: (0, s.jsx)(o.A, { id: 'error-messages.error-load-part-page' }),
                                }),
                                (0, s.jsx)(n.$, {
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
                a = i(60900),
                o = i(63380),
                n = i(45477),
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
                        { formatMessage: h } = (0, a.A)();
                    return (0, l.useCallback)(async () => {
                        if (!t.isAuthorized)
                            return void i((0, s.jsx)(u.h, { error: h({ id: 'authorization-messages.need-to-authorizate' }) }), { containerId: n.u.ERROR });
                        if (_) return;
                        let l = { ...(0, r.HO)(e), url: e.url, isLiked: !e.isLiked };
                        m(!0);
                        let a = await e.toggleLike();
                        (m(!1),
                            a === o.f.OK
                                ? i((0, s.jsx)(p, { playlist: l }), { containerId: n.u.INFO })
                                : i((0, s.jsx)(u.h, { error: h({ id: 'error-messages.error-during-action' }) }), { containerId: n.u.ERROR }));
                    }, [t.isAuthorized, _, e, h, i]);
                };
        },
        73192: (e, t, i) => {
            'use strict';
            i.d(t, { A: () => p });
            var s = i(32290),
                r = i(92708),
                l = i(55178),
                a = i(60900),
                o = i(45477),
                n = i(75582),
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
                        { notify: i } = (0, n.l)(),
                        { formatMessage: u } = (0, a.A)(),
                        [_, p] = (0, l.useState)(!1);
                    return (0, l.useCallback)(async () => {
                        if (!t.isAuthorized)
                            return void i((0, s.jsx)(d.h, { error: u({ id: 'authorization-messages.need-to-authorizate' }) }), { containerId: o.u.ERROR });
                        if (_) return;
                        let l = { ...(0, r.HO)(e), url: e.url, isPinned: !e.isPinned };
                        p(!0);
                        let a = await e.togglePin();
                        (p(!1),
                            a
                                ? i((0, s.jsx)(m, { playlist: l }), { containerId: o.u.INFO })
                                : i((0, s.jsx)(d.h, { error: u({ id: 'error-messages.error-during-action' }) }), { containerId: o.u.ERROR }));
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
            var s = i(32290),
                r = i(63618),
                l = i(96103),
                a = i(55178),
                o = i(99923),
                n = i(21732),
                c = i(91027),
                d = i(50162),
                u = i(19740),
                _ = i(86269),
                m = i(71926),
                p = i(47745),
                h = i(32641),
                x = i(57594),
                C = i(16510),
                v = i.n(C);
            let y = (0, l.PA)((e) => {
                let { artist: t, className: i } = e,
                    { fullscreenPlayer: l } = (0, x.g)(),
                    C = (0, h.Z)(t.url),
                    E = (0, p.N)(),
                    g = (0, a.useMemo)(() => {
                        var e;
                        return (
                            'decomposed' in t &&
                            (null == (e = t.decomposed) ? void 0 : e.reduce((e, t) => (e.push((0, s.jsx)(y, { artist: t, className: i }, t.id)), e), []))
                        );
                    }, [t, i]),
                    N = (0, c.c)((e) => {
                        (l.modal.isOpened && l.modal.close(), E({ to: o.AppScreen.ArtistScreen }), C(e));
                    });
                return (0, s.jsxs)(s.Fragment, {
                    children: [
                        (0, s.jsxs)(u.Dr, {
                            className: (0, r.$)(v().root, i),
                            onClick: N,
                            'data-test-id': n.OA.artists.ARTIST_ITEM,
                            children: [
                                (0, s.jsx)(_.t, {
                                    radius: 'round',
                                    className: v().cover,
                                    children: (0, s.jsx)(d._V, { withAvatarReplace: !0, src: t.coverUri, size: 100, fit: 'contain', className: v().image }),
                                }),
                                (0, s.jsx)(m.HL, { variant: 'span', size: 'm', weight: 'medium', lineClamp: 1, children: t.name }),
                            ],
                        }),
                        g,
                    ],
                });
            });
        },
        78648: (e, t, i) => {
            'use strict';
            i.d(t, { C8: () => l, UC: () => a, dM: () => o, uV: () => n });
            var s = i(87953),
                r = i(42464);
            let l = (e) => {
                    if (void 0 === e || '' === e) return 'missing';
                    let t = Number(e);
                    return !Number.isFinite(t) || t < 0 ? 'invalid' : t < 86400 ? 'lt-1d' : t <= 2592e3 ? '1-30d' : 'gt-30d';
                },
                a = (e) => (e.uid ? 'authorized' : 'no-uid'),
                o = (e) => {
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
                n = (e) => {
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
                a = i(55178),
                o = i(60900),
                n = i(99923),
                c = i(21732),
                d = i(71483),
                u = i(91027),
                _ = i(6752),
                m = i(14934),
                p = i(82586),
                h = i(86269),
                x = i(71926),
                C = i(41677),
                v = i(73141),
                y = i(73192),
                E = i(71735),
                g = i(47745),
                N = i(2969),
                f = i(54391),
                A = i(23352),
                k = i(72396),
                S = i(5537),
                L = i(32641),
                P = i(28999),
                T = i(90169),
                j = i(57594),
                R = i(61376),
                O = i(11323),
                b = i(92744),
                I = i(61258),
                D = i(10180),
                w = i(90326),
                M = i(29268),
                z = i(34925),
                H = i(13931),
                F = i(19740),
                B = i(9017),
                U = i(65477),
                Y = i(46200),
                V = i(27120),
                X = i(95134),
                K = i(79406),
                $ = i(58237),
                W = i(56367),
                q = i(83755);
            let G = (0, l.PA)((e) => {
                var t;
                let { playlist: i, onOpenChange: r, open: l, ...a } = e,
                    { shouldShowBuySubscriptionModal: d, showBuySubscriptionModal: _ } = (0, Y.q)(),
                    {
                        experiments: m,
                        settings: { isMobile: p },
                        trailer: h,
                        user: x,
                    } = (0, j.g)(),
                    C = (0, v.K)(i),
                    g = (0, y.A)(i),
                    N = (0, f.F)(),
                    { formatMessage: A } = (0, o.A)(),
                    k = (0, E.P)(),
                    S = m.checkExperiment(K.z.WebEditorsFeatures, 'on'),
                    L = (0, B.A)({ entityVariant: X.D.PLAYLIST, urlParams: { id: i.uid, kind: i.kind } });
                (0, V.N)(l);
                let P = (0, u.c)(() => {
                    if (d) return void _();
                    k() || (h.openPlaylistTrailer(i.id), N(n.DomainObjectType.Playlist, i.id));
                });
                return (0, s.jsxs)(F.W1, {
                    title: i.title,
                    onOpenChange: r,
                    open: l,
                    offsetOptions: 10,
                    isMobile: p,
                    ariaLabel: A({ id: 'interface-actions.context-menu' }),
                    containerDataTestId: c.Kq.playlist.PLAYLIST_CONTEXT_MENU,
                    ...a,
                    children: [
                        S && (0, s.jsx)(U.d, { entityVariant: X.D.PLAYLIST, adminUrl: i.isFavouritePlaylist ? void 0 : L }),
                        !p && (0, s.jsx)(W.L, { onClick: g, isPinned: i.isPinned }),
                        !i.isFavouritePlaylist && (0, s.jsx)($.T, { onClick: C, isLiked: i.isLiked, disabled: !x.isAuthorized }),
                        (null == (t = i.trailer) ? void 0 : t.isAvailable) && (0, s.jsx)(q.N, { onClick: P, disabled: !i.isAvailable }),
                    ],
                });
            });
            var Q = i(11675),
                Z = i.n(Q);
            let J = (0, l.PA)((e) => {
                let { className: t, playlist: i, children: l, contentLinesCount: F, customDescription: B, onCoverMouseDown: U } = e,
                    { ref: Y, intersectionPropertyId: V } = (0, A.n)(),
                    {
                        trailer: X,
                        user: K,
                        paywall: { modal: $ },
                    } = (0, j.g)(),
                    { from: W, utmLink: q } = (0, k.f)({ contextId: i.uuid, contextType: d.K.Playlist }),
                    { formatMessage: Q } = (0, o.A)(),
                    { sendLikeSearchFeedback: J, sendNavigateSearchFeedback: ee, sendPlaySearchFeedback: et } = (0, P.z)(),
                    [ei, es] = (0, a.useState)(!1),
                    [er, el] = (0, a.useState)(!1),
                    [ea, eo] = (0, a.useState)(!1),
                    en = (0, H.r)(i),
                    ec = (0, v.K)(i),
                    ed = (0, y.A)(i),
                    eu = (0, g.N)(),
                    e_ = (0, N.b)(),
                    em = (0, L.Z)(i.url),
                    ep = (0, f.F)(),
                    eh = (0, E.P)(),
                    ex = (0, u.c)((e) => {
                        if ((e.stopPropagation(), eh())) return void e.preventDefault();
                        (X.setUtmLink(q), X.openPlaylistTrailer(i.id), ep(n.DomainObjectType.Playlist, i.id));
                    }),
                    [eC, ev] = (0, a.useState)(!1),
                    { isPlaying: ey, togglePlay: eE } = (0, T.D)({
                        playContextParams: { contextData: { type: d.K.Playlist, meta: { id: i.id, uuid: i.uuid }, from: W, utmLink: q }, loadContextMeta: !0 },
                    }),
                    eg = (0, u.c)(() => {
                        (eu({ to: n.AppScreen.PlaylistScreen }), null == ee || ee());
                    }),
                    eN = (0, u.c)((e) => {
                        (eg(), em(e));
                    }),
                    ef = (0, S.N)(),
                    eA = (0, u.c)(() => {
                        if (!eh()) {
                            if (ef) return void $.open();
                            (ei || ey || (es(!0), null == et || et()), eE(), e_(!ey));
                        }
                    }),
                    ek = (0, u.c)(() => {
                        (er || i.isLiked || (el(!0), null == J || J()), ec());
                    }),
                    eS = (0, u.c)((e) => {
                        (e.preventDefault(), e.stopPropagation());
                    }),
                    eL = (0, u.c)((e) => {
                        (eo(e), ev(e));
                    }),
                    eP = (0, a.useMemo)(() => {
                        var e;
                        return B
                            ? (0, s.jsx)(x.HL, { variant: 'span', type: 'entity', size: 's', weight: 'medium', lineClamp: 2, children: B }, i.getKey('description'))
                            : (null == (e = i.artists) ? void 0 : e.length)
                              ? (0, s.jsx)(
                                    C.i,
                                    { className: Z().artists, artists: i.artists, lineClamp: 1, linkClassName: Z().artistLink, captionSize: 's' },
                                    i.getKey('description'),
                                )
                              : void 0;
                    }, [B, i]),
                    eT = (0, _.L)(() => {
                        if (!i.isFavouritePlaylist)
                            return (0, s.jsx)(
                                b.c,
                                {
                                    className: (0, r.$)(Z().likeButton, Z().control),
                                    isLiked: i.isLiked,
                                    onClick: ek,
                                    variant: 'default',
                                    size: 's',
                                    iconSize: 'xxs',
                                    disabled: !K.isAuthorized,
                                },
                                i.getKey('LikeButton'),
                            );
                    }),
                    ej = (0, a.useMemo)(() => {
                        var e;
                        if (null == i || null == (e = i.trailer) ? void 0 : e.isAvailable)
                            return (0, s.jsx)(
                                z.n,
                                {
                                    children: (0, s.jsx)(
                                        M.k,
                                        { className: (0, r.$)(Z().trailerButton, Z().control), radius: 'round', size: 's', iconSize: 'xxs', onClick: ex },
                                        i.getKey('TrailerButton'),
                                    ),
                                },
                                i.getKey('PlaylilstCardTrailerTooltip'),
                            );
                    }, [ex, i]),
                    eR = (0, a.useMemo)(
                        () =>
                            (0, s.jsx)(
                                D.O,
                                { onClick: ed, isPinned: i.isPinned, className: (0, r.$)(Z().pinButton, Z().control), withRipple: !1 },
                                i.getKey('PinButton'),
                            ),
                        [ed, i],
                    ),
                    eO = (0, a.useMemo)(
                        () =>
                            (0, s.jsx)(h.t, {
                                className: Z().cover,
                                radius: 's',
                                withShadow: !0,
                                'data-test-id': c.Kq.playlist.PLAYLIST_CARD,
                                children: (0, s.jsxs)('div', {
                                    className: Z().coverBlock,
                                    onClick: eN,
                                    onMouseDown: U,
                                    children: [
                                        (0, s.jsx)(O.B, {
                                            className: Z().image,
                                            src: i.coverUri,
                                            size: 200,
                                            fit: 'cover',
                                            alt: en,
                                            withAvatarReplace: !0,
                                            'aria-hidden': !0,
                                        }),
                                        (0, s.jsx)(m.hg, {
                                            isVisible: ea || eC,
                                            className: Z().controls,
                                            playControl: (0, s.jsx)(
                                                w.D,
                                                {
                                                    className: (0, r.$)(Z().playButton, Z().control),
                                                    buttonVariant: 'default',
                                                    withHover: !1,
                                                    iconSize: 'xl',
                                                    variant: 'filled',
                                                    onClick: eA,
                                                    isPlaying: ey,
                                                    disabled: !i.isAvailable,
                                                },
                                                i.getKey('PlayButton'),
                                            ),
                                            likeControl: eT,
                                            menuControl: (0, s.jsx)(
                                                G,
                                                {
                                                    playlist: i,
                                                    onOpenChange: eL,
                                                    open: ea,
                                                    onClick: eS,
                                                    className: (0, r.$)(Z().menuButton, Z().control),
                                                    icon: (0, s.jsx)(p.I, { size: 'xxs', variant: 'more' }),
                                                    size: 's',
                                                    'data-test-id': c.Kq.playlist.PLAYLIST_CONTEXT_MENU_BUTTON,
                                                },
                                                i.getKey('PlaylistContextMenu'),
                                            ),
                                            pinControl: eR,
                                            trailerControl: ej,
                                        }),
                                    ],
                                }),
                            }),
                        [eN, U, i, en, ea, eC, eA, ey, eT, eL, eS, eR, ej],
                    ),
                    eb = !!i.actualLikesCount && !i.isLikesCountHidden;
                return (0, s.jsxs)(m.MN, {
                    ref: Y,
                    'aria-label': en,
                    className: (0, r.$)(Z().root, t),
                    title: (0, s.jsx)(x.HL, {
                        variant: 'div',
                        type: 'entity',
                        size: 's',
                        weight: 'medium',
                        lineClamp: 2,
                        'data-test-id': c.Kq.playlist.PLAYLIST_TITLE,
                        children: (0, s.jsx)(I.N, { className: Z().titleLink, href: i.url, onClick: eg, children: i.title }),
                    }),
                    srTitle: (0, s.jsx)(I.N, { href: i.url, onClick: eg, children: i.title }),
                    'data-intersection-property-id': V,
                    contentLinesCount: F,
                    view: eO,
                    description: eP,
                    'data-test-id': c.Kq.playlist.PLAYLIST_ITEM,
                    children: [
                        eb &&
                            (0, s.jsx)(R.x, {
                                ariaLabel: Q({ id: 'entity-names.likes-counter' }, { counter: i.actualLikesCount }),
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
                a = i(79856),
                o = i(80556),
                n = i.n(o);
            let c = (e) => {
                let {
                    isActive: t,
                    className: i,
                    shimmerClassName: o,
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
                    className: (0, r.$)(n().root, i),
                    'data-test-id': l.S7.ENTITY_CARD_SHIMMER,
                    children: [
                        p && (0, s.jsx)(a.W, { isActive: t, className: n().subcover, radius: 'l' }),
                        (0, s.jsx)(a.W, { isActive: t, className: (0, r.$)(n().cover, o, { [n().cover_round]: c, [n().cover_withSubcover]: p }), radius: h }),
                        _ &&
                            (0, s.jsx)('div', {
                                className: (0, r.$)(n().infoContainer, n()['content_linesCount_'.concat(m)], { [n().infoContainer_centered]: u }),
                                children: (0, s.jsx)(a.W, { isActive: t, className: (0, r.$)(n().title, { [n().title_withSubcover]: p }), radius: 's' }),
                            }),
                    ],
                });
            };
        },
        94218: (e, t, i) => {
            'use strict';
            i.d(t, { H: () => m });
            var s = i(32290),
                r = i(21916),
                l = i(39407),
                a = i(21732),
                o = i(91027),
                n = i(63423),
                c = i(71926),
                d = i(78648),
                u = i(70204),
                _ = i(34186);
            let m = (e) => {
                let { size: t = 'm', variant: i = 'default', color: m = 'primary', withRipple: p = !0, buttonText: h, isBlock: x, key: C, className: v } = e,
                    y = (0, r.useRouter)(),
                    E = (0, _.N)().get(u.QG),
                    g = (0, o.c)(() => {
                        E.authorizationUrl && ((0, d.uV)({ stage: 'attempt-start', trigger: 'user' }), y.push(E.authorizationUrl));
                    });
                return (0, s.jsx)(
                    n.$,
                    {
                        onClick: g,
                        className: v,
                        isBlock: x,
                        color: m,
                        variant: i,
                        size: t,
                        radius: 'xxxl',
                        withRipple: p,
                        'data-test-id': a.S7.UNAUTHORIZED_BUTTON,
                        children: h || (0, s.jsx)(c.HL, { variant: 'div', size: 'l', lineClamp: 1, children: (0, s.jsx)(l.A, { id: 'authorization.enter-button' }) }),
                    },
                    C,
                );
            };
        },
        97841: (e, t, i) => {
            'use strict';
            i.d(t, { w: () => A });
            var s = i(32290),
                r = i(63618),
                l = i(96103),
                a = i(60900),
                o = i(31010),
                n = (function (e) {
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
                        case n.YANDEX:
                            if ('ru' === t) return 'https://ya.ru';
                            return;
                        case n.YANDEX_PROJECTS:
                            return 'https://yandex.'.concat(t, '/all?lang=').concat(i);
                        case n.COPYRIGHT_HOLDER:
                            return 'https://yandex.'.concat(t, '/support/music/performers-and-copyright-holders/copyright.html?lang=').concat(i);
                        case n.AGREEMENT:
                            return 'https://yandex.ru/legal/music_termsofuse?lang='.concat(i);
                        case n.RECOMMENDATION_RULES:
                            return 'https://music.yandex.ru/legal/recommendations/ru/#music';
                        case n.HELP:
                            return 'https://yandex.'.concat(t, '/support/music/index.html?lang=').concat(i);
                        case n.PRIVACY_POLICY:
                            return 'https://yandex.'.concat(t, '/legal/confidential/').concat(i);
                    }
                },
                d = (e) => {
                    let { formatMessage: t, language: i, tld: s, year: r } = e;
                    return {
                        year: r,
                        yandexMusic: { id: n.YANDEX, title: t({ id: 'footer.yandex-music' }), url: c(n.YANDEX, s, i) },
                        yandexProjects: { id: n.YANDEX_PROJECTS, title: t({ id: 'footer.yandex-project' }), url: c(n.YANDEX_PROJECTS, s, i) },
                    };
                };
            var u = i(15559),
                _ = i(8626);
            let m = (e) => e(new Date(), (0, _.m)());
            var p = i(61945),
                h = i(57594),
                x = i(77088),
                C = i.n(x),
                v = i(21732),
                y = i(71926),
                E = i(61258);
            let g = (e) => {
                    let { className: t, data: i } = e;
                    return (0, s.jsxs)('div', {
                        className: (0, r.$)(C().copyrights, t),
                        'data-test-id': v.S7.FOOTER_COPYRIGHTS,
                        children: [
                            (0, s.jsxs)(y.HL, {
                                variant: 'span',
                                type: 'text',
                                size: 's',
                                weight: 'medium',
                                className: C().text,
                                children: [
                                    '\xa9 ',
                                    i.year,
                                    ' \xa0',
                                    (0, s.jsx)(E.N, {
                                        target: '_blank',
                                        href: i.yandexMusic.url,
                                        className: (0, r.$)(C().copyrightLink, C().yandexMusicLink),
                                        'data-test-id': v.S7.FOOTER_YANDEX_MUSIC_LINK,
                                        children: i.yandexMusic.title,
                                    }),
                                ],
                            }),
                            (0, s.jsx)(y.HL, { variant: 'span', type: 'text', size: 's', weight: 'medium', children: ' • ' }),
                            (0, s.jsx)(E.N, {
                                target: '_blank',
                                href: i.yandexProjects.url,
                                className: C().copyrightLink,
                                'data-test-id': v.S7.FOOTER_YANDEX_PROJECT_LINK,
                                children: i.yandexProjects.title,
                            }),
                        ],
                    });
                },
                N = (e) => {
                    let { disclaimer: t, links: i } = e;
                    return (0, s.jsxs)('div', {
                        className: C().links,
                        children: [
                            (0, s.jsx)('ol', {
                                className: C().list,
                                'data-test-id': v.S7.FOOTER_LINKS_LIST,
                                children: i.map((e) => {
                                    let { id: t, title: i, url: r } = e;
                                    return (0, s.jsx)(
                                        'li',
                                        {
                                            className: C().item,
                                            children: (0, s.jsx)(E.N, { target: '_blank', href: r, className: C().link, 'data-test-id': v.S7.FOOTER_LINK, children: i }),
                                        },
                                        t,
                                    );
                                }),
                            }),
                            (0, s.jsx)(y.HL, {
                                variant: 'span',
                                type: 'text',
                                size: 'm',
                                weight: 'medium',
                                className: C().explicitText,
                                tabIndex: 0,
                                dangerouslySetInnerHTML: { __html: t },
                                'data-test-id': v.S7.FOOTER_DISCLAIMER_TEXT,
                            }),
                        ],
                    });
                },
                f = (e) => {
                    let { className: t, data: i } = e;
                    return (0, s.jsxs)('footer', {
                        className: (0, r.$)(C().root, C().important, t),
                        'data-test-id': v.S7.FOOTER,
                        children: [(0, s.jsx)(N, { links: i.links, disclaimer: i.disclaimer }), (0, s.jsx)(g, { data: i.copyrights })],
                    });
                };
            (0, l.PA)((e) => {
                let { className: t } = e,
                    { location: i } = (0, h.g)(),
                    { formatDate: r, formatMessage: l } = (0, a.A)(),
                    { language: o } = (0, p.h)(),
                    n = d({ formatMessage: l, language: o, tld: i.tld, year: m(r) });
                return (0, s.jsx)(g, { className: t, data: n });
            });
            let A = (0, l.PA)((e) => {
                var t;
                let { className: i } = e,
                    { experiments: l, location: _, user: x } = (0, h.g)(),
                    { formatDate: v, formatMessage: y } = (0, a.A)(),
                    { isEnabled: E } = null != (t = (0, o.P)()) ? t : {},
                    { language: g } = (0, p.h)(),
                    N = ((e) => {
                        let { checkExperiment: t, formatMessage: i, isWebApplication: s, language: r, tld: l, userRegion: a, year: o } = e;
                        return {
                            links: ((e) => {
                                let { formatMessage: t, isWebApplication: i, tld: s, language: r, userRegion: l } = e,
                                    a = { id: n.COPYRIGHT_HOLDER, title: t({ id: 'footer.links-copyright-holders' }), url: c(n.COPYRIGHT_HOLDER, s, r) },
                                    o = { id: n.PRIVACY_POLICY, title: t({ id: 'footer.links-privacy-policy' }), url: c(n.PRIVACY_POLICY, s, r) },
                                    d = { id: n.AGREEMENT, title: t({ id: 'footer.links-terms' }), url: c(n.AGREEMENT, s, r) },
                                    u = { id: n.RECOMMENDATION_RULES, title: t({ id: 'footer.links-recommendation-rules' }), url: c(n.RECOMMENDATION_RULES, s, r) },
                                    _ = { id: n.HELP, title: t({ id: 'footer.links-help' }), url: c(n.HELP, s, r) },
                                    m = [a, d, u];
                                return (i && 'ru' === l && m.push(o), m.push(_), m);
                            })({ formatMessage: i, isWebApplication: s, language: r, tld: l, userRegion: a }),
                            disclaimer: (0, u.v)({
                                checkExperiment: t,
                                getDisclaimerContent: () => i({ id: 'footer.disclaimer-content' }),
                                getExplicitContent: () => i({ id: 'footer.explicit-content' }),
                                userRegion: a,
                            }),
                            copyrights: d({ formatMessage: i, language: r, tld: l, year: o }),
                        };
                    })({
                        checkExperiment: (e, t) => l.checkExperiment(e, t),
                        formatMessage: y,
                        isWebApplication: !1,
                        tld: _.tld,
                        language: g,
                        userRegion: x.account.data.userSessionRegionIso,
                        year: m(v),
                    });
                return (0, s.jsx)(f, { className: (0, r.$)({ [C().root_withOffsetForDeeplink]: E }, i), data: N });
            });
        },
    },
    (e) => {
        (e.O(
            0,
            [
                7412, 1010, 7231, 2147, 4517, 9763, 1256, 3608, 2225, 6706, 5472, 8378, 900, 2536, 2146, 3353, 2474, 8035, 347, 2732, 1410, 1417, 8506, 6050, 5806, 7702,
                6874, 9155, 861, 4668, 9740, 1175, 4499, 8816, 4220, 9562, 7358,
            ],
            () => e((e.s = 67910)),
        ),
            (_N_E = e.O()));
    },
]);
