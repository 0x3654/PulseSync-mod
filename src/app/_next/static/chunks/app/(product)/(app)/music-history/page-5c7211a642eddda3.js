(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [5507],
    {
        50: (e, t, a) => {
            'use strict';
            a.d(t, { D: () => r, W: () => s });
            var i = a(55178);
            let r = (0, i.createContext)({ theme: null, setTheme: () => {} }),
                s = () => (0, i.useContext)(r);
        },
        852: (e, t, a) => {
            'use strict';
            a.d(t, { MusicHistoryPage: () => eS });
            var i = a(32290),
                r = a(63618),
                s = a(96103),
                n = a(55178),
                l = a(39407),
                o = a(21732),
                c = a(46049),
                d = a(15299),
                u = a(71926),
                m = a(60900);
            let _ = () => {
                let { formatDate: e, formatRelativeTime: t } = (0, m.A)();
                return (0, n.useCallback)(
                    function (a) {
                        let i = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
                            r = new Date(a),
                            s = new Date();
                        (r.setHours(0, 0, 0, 0), s.setHours(0, 0, 0, 0));
                        let n = (r.getTime() - s.getTime()) / 864e5,
                            l = t(n, 'day', { numeric: 'auto' }),
                            o = e(a, { day: 'numeric', month: 'long' });
                        switch (n) {
                            case 0:
                            case -1:
                            case -2:
                                if (i) return ''.concat(l, ', ').concat(o);
                                return l;
                            default:
                                return o;
                        }
                    },
                    [e, t],
                );
            };
            var v = a(7189),
                p = a(3107),
                h = a(40053),
                x = a(49259),
                g = a(45066),
                y = a(57594);
            let C = (0, n.createContext)({ observeElement: () => {}, unobserveElement: () => {} });
            var A = a(71483),
                b = a(41677),
                f = a(72396),
                T = a(19620),
                k = a(26781);
            let S = (e) => {
                    let { entityId: t, from: a } = e;
                    return { contextData: { type: A.K.Various, meta: { id: t }, from: a }, queueParams: { index: 0 }, loadContextMeta: !0 };
                },
                E = (e) => {
                    let { id: t, tabIndex: a, blockIndex: i, trackIndex: r } = e,
                        s = (0, x.s)(g.n.MUSIC_HISTORY),
                        l = (0, n.useId)(),
                        o = (0, n.useRef)(null),
                        { observeElement: c, unobserveElement: d } = (0, n.useContext)(C);
                    return (
                        (0, n.useEffect)(() => {
                            let e = void 0 !== r ? ''.concat(a, '_').concat(i, '_').concat(r, '_').concat(t) : ''.concat(a, '_').concat(i, '_').concat(t),
                                n = s.indexesMap.get(e);
                            s.isInObservationRange(n) &&
                                c({
                                    elementRef: o,
                                    elementId: l,
                                    index: n,
                                    onShow() {
                                        (s.getItems(this.index), d(l));
                                    },
                                });
                        }, [i, t, l, s, c, a, r, d]),
                        { intersectionPropertyId: l, ref: o }
                    );
                };
            var I = a(2413),
                N = a(69951),
                L = a(98350),
                j = a(34223),
                R = a(38403),
                w = a.n(R);
            let M = (0, s.PA)((e) => {
                let { type: t, track: a, artists: r, tabIndex: s, blockIndex: n, trackIndex: l, playContextParams: o } = e,
                    { ref: c, intersectionPropertyId: d } = E({ id: a.id, tabIndex: s, blockIndex: n, trackIndex: l });
                return a.isShimmerVisible || !a.data
                    ? (0, i.jsx)('div', {
                          'data-intersection-property-id': d,
                          ref: c,
                          children: (0, i.jsx)(j.D, {
                              isActive: a.isShimmerActive,
                              'data-intersection-property-id': d,
                              className: w().trackShimmer,
                              variant: t === A.K.Album ? L.X.ALBUM : L.X.PLAYLIST,
                          }),
                      })
                    : t === A.K.Album
                      ? (0, i.jsx)(I.F, { track: a.data, position: a.data.index, albumArtists: r, playContextParams: o })
                      : (0, i.jsx)(N.K, { track: a.data, playContextParams: o });
            });
            var O = a(72069),
                P = a.n(O);
            let D = (0, s.PA)((e) => {
                    var t, a, s, c, d;
                    let { album: m, tabIndex: _, blockIndex: v } = e,
                        { ref: p, intersectionPropertyId: h } = E({ id: m.id, tabIndex: _, blockIndex: v }),
                        { from: x } = (0, f.f)({ blockId: 'album-'.concat(m.id) }),
                        g = (0, n.useMemo)(() => {
                            var e, t;
                            return m.available
                                ? (0, i.jsx)(b.i, {
                                      className: P().artists,
                                      linkClassName: P().artistLink,
                                      artists: null == (e = m.meta) ? void 0 : e.artists,
                                      lineClamp: 1,
                                  })
                                : null == (t = m.meta)
                                  ? void 0
                                  : t.artistNames;
                        }, [m.available, null == (t = m.meta) ? void 0 : t.artistNames, null == (a = m.meta) ? void 0 : a.artists]),
                        y = (0, n.useMemo)(() => {
                            var e, t, a;
                            return m.isShimmerVisible
                                ? (0, i.jsx)(k.M, { isActive: m.isShimmerActive, className: P().header, withDescription: !0 })
                                : (0, i.jsx)(T.T, {
                                      className: P().header,
                                      coverUrl: null == (e = m.meta) ? void 0 : e.coverUri,
                                      title: null == (t = m.meta) ? void 0 : t.title,
                                      titleSize: 'xs',
                                      titleLineClamp: 1,
                                      description: g,
                                      titleClassName: P().headerTitle,
                                      viewAllActionLink: null == (a = m.meta) ? void 0 : a.url,
                                      available: m.available,
                                      fallbackIconVariant: 'album',
                                      headingVariant: 'h4',
                                      withCover: !0,
                                      withDescription: !!g,
                                  });
                        }, [
                            m.available,
                            m.isShimmerActive,
                            m.isShimmerVisible,
                            null == (s = m.meta) ? void 0 : s.coverUri,
                            null == (c = m.meta) ? void 0 : c.title,
                            null == (d = m.meta) ? void 0 : d.url,
                            g,
                        ]),
                        C = (0, n.useMemo)(
                            () =>
                                m.tracks.map((e, t) => {
                                    var a;
                                    let r = S({ entityId: e.entityId, from: x });
                                    return (0, i.jsx)(
                                        M,
                                        { type: A.K.Album, track: e, playContextParams: r, tabIndex: _, blockIndex: v, trackIndex: t },
                                        null == (a = e.data) ? void 0 : a.getKey(t),
                                    );
                                }),
                            [m.tracks, x, _, v],
                        );
                    return (0, i.jsxs)('section', {
                        className: P().root,
                        ref: p,
                        'data-intersection-property-id': h,
                        'data-test-id': o.e8.musicHistory.MUSIC_HISTORY_TAB_ALBUM_BLOCK,
                        children: [
                            (0, i.jsx)(u.DZ, {
                                className: (0, r.$)(P().header, P().heading),
                                variant: 'h3',
                                'data-test-id': o.e8.musicHistory.MUSIC_HISTORY_TAB_BLOCK_TYPE_ALBUM,
                                children: (0, i.jsx)(l.A, { id: 'music-history.album' }),
                            }),
                            y,
                            (0, i.jsx)('div', { className: P().content, children: C }),
                        ],
                    });
                }),
                B = (0, s.PA)((e) => {
                    var t, a, s;
                    let { artist: c, tabIndex: d, blockIndex: m } = e,
                        { ref: _, intersectionPropertyId: v } = E({ id: c.id, tabIndex: d, blockIndex: m }),
                        { from: p } = (0, f.f)({ blockId: 'artist-'.concat(c.id) }),
                        h = (0, n.useMemo)(() => {
                            var e, t, a;
                            return c.isShimmerVisible
                                ? (0, i.jsx)(k.M, { isActive: c.isShimmerActive, className: P().header, coverRadius: 'round' })
                                : (0, i.jsx)(T.T, {
                                      titleSize: 'xs',
                                      titleLineClamp: 1,
                                      className: P().header,
                                      coverUrl: null == (e = c.meta) ? void 0 : e.coverUri,
                                      title: null == (t = c.meta) ? void 0 : t.name,
                                      titleClassName: P().headerTitle,
                                      viewAllActionLink: null == (a = c.meta) ? void 0 : a.url,
                                      available: c.available,
                                      withCover: !0,
                                      coverRadius: 'round',
                                      headingVariant: 'h4',
                                  });
                        }, [
                            c.available,
                            c.isShimmerActive,
                            c.isShimmerVisible,
                            null == (t = c.meta) ? void 0 : t.coverUri,
                            null == (a = c.meta) ? void 0 : a.name,
                            null == (s = c.meta) ? void 0 : s.url,
                        ]),
                        x = (0, n.useMemo)(
                            () =>
                                c.tracks.map((e, t) => {
                                    var a;
                                    let r = S({ entityId: e.entityId, from: p });
                                    return (0, i.jsx)(
                                        M,
                                        { type: A.K.Artist, track: e, playContextParams: r, tabIndex: d, blockIndex: m, trackIndex: t },
                                        null == (a = e.data) ? void 0 : a.getKey(t),
                                    );
                                }),
                            [c.tracks, p, d, m],
                        );
                    return (0, i.jsxs)('section', {
                        className: P().root,
                        ref: _,
                        'data-intersection-property-id': v,
                        'data-test-id': o.e8.musicHistory.MUSIC_HISTORY_TAB_ARTIST_BLOCK,
                        children: [
                            (0, i.jsx)(u.DZ, {
                                className: (0, r.$)(P().header, P().heading),
                                variant: 'h3',
                                'data-test-id': o.e8.musicHistory.MUSIC_HISTORY_TAB_BLOCK_TYPE_ARTIST,
                                children: (0, i.jsx)(l.A, { id: 'music-history.artist' }),
                            }),
                            h,
                            (0, i.jsx)('div', { className: P().content, children: x }),
                        ],
                    });
                });
            var H = a(59888),
                K = a(83778),
                U = a(46673);
            let V = (0, s.PA)((e) => {
                    let { common: t, tabIndex: a, blockIndex: s } = e,
                        { ref: c, intersectionPropertyId: d } = E({ id: t.id, tabIndex: a, blockIndex: s }),
                        { from: m } = (0, f.f)(),
                        _ = ((e) =>
                            (0, n.useMemo)(
                                () => (e === v.D.SEARCH ? (0, U.t)({ contextType: A.K.Various, contextId: '', entityContextType: K.h.MUSIC_HISTORY_SEARCH }) : null),
                                [e],
                            ))(t.type),
                        p = (0, n.useMemo)(
                            () =>
                                t.tracks.map((e, t) => {
                                    var r;
                                    let n = S({ entityId: e.entityId, from: m });
                                    return (0, i.jsx)(
                                        M,
                                        { playContextParams: n, type: A.K.Various, track: e, tabIndex: a, blockIndex: s, trackIndex: t },
                                        null == (r = e.data) ? void 0 : r.getKey(t),
                                    );
                                }),
                            [t.tracks, m, a, s],
                        ),
                        h = (0, n.useMemo)(() => {
                            switch (t.type) {
                                case v.D.OTHER:
                                    return (0, i.jsx)(l.A, { id: 'music-history.shuffle' });
                                case v.D.SEARCH:
                                    return (0, i.jsx)(l.A, { id: 'music-history.search' });
                            }
                        }, [t.type]);
                    return (0, i.jsx)(H._, {
                        sourceContextData: _,
                        children: (0, i.jsxs)('section', {
                            className: P().root,
                            ref: c,
                            'data-intersection-property-id': d,
                            'data-test-id': o.e8.musicHistory.MUSIC_HISTORY_TAB_COMMON_BLOCK,
                            children: [
                                (0, i.jsx)(u.DZ, {
                                    className: (0, r.$)(P().header, P().heading),
                                    variant: 'h3',
                                    'data-test-id': o.e8.musicHistory.MUSIC_HISTORY_TAB_BLOCK_TYPE_COMMON,
                                    children: h,
                                }),
                                (0, i.jsx)('div', { className: P().content, children: p }),
                            ],
                        }),
                    });
                }),
                W = (0, s.PA)((e) => {
                    var t, a, s, c, d;
                    let { playlist: _, tabIndex: v, blockIndex: p } = e,
                        { ref: h, intersectionPropertyId: x } = E({ id: _.id, tabIndex: v, blockIndex: p }),
                        { from: g } = (0, f.f)({ blockId: _.isResolved ? 'playlist-'.concat(null == (t = _.meta) ? void 0 : t.id) : '' }),
                        { formatMessage: y } = (0, m.A)(),
                        C = (0, n.useMemo)(() => {
                            var e, t, a, r;
                            return _.isShimmerVisible
                                ? (0, i.jsx)(k.M, { isActive: _.isShimmerActive, className: P().header, withDescription: !0 })
                                : (0, i.jsx)(T.T, {
                                      className: P().header,
                                      titleSize: 'xs',
                                      titleLineClamp: 1,
                                      coverUrl: null == (e = _.meta) ? void 0 : e.coverUri,
                                      title: null == (t = _.meta) ? void 0 : t.title,
                                      titleClassName: P().headerTitle,
                                      description: y({ id: 'entity-names.number-of-tracks' }, { counter: null == (a = _.meta) ? void 0 : a.tracksCount }),
                                      fallbackIconVariant: 'playlist',
                                      withCover: !0,
                                      viewAllActionLink: null == (r = _.meta) ? void 0 : r.url,
                                      headingVariant: 'h4',
                                      withDescription: !0,
                                  });
                        }, [
                            y,
                            _.isShimmerActive,
                            _.isShimmerVisible,
                            null == (a = _.meta) ? void 0 : a.coverUri,
                            null == (s = _.meta) ? void 0 : s.title,
                            null == (c = _.meta) ? void 0 : c.tracksCount,
                            null == (d = _.meta) ? void 0 : d.url,
                        ]),
                        b = (0, n.useMemo)(
                            () =>
                                _.tracks.map((e, t) => {
                                    var a;
                                    let r = S({ entityId: e.entityId, from: g });
                                    return (0, i.jsx)(
                                        M,
                                        { playContextParams: r, type: A.K.Playlist, track: e, tabIndex: v, blockIndex: p, trackIndex: t },
                                        null == (a = e.data) ? void 0 : a.getKey(t),
                                    );
                                }),
                            [_.tracks, g, v, p],
                        );
                    return (0, i.jsxs)('section', {
                        className: P().root,
                        ref: h,
                        'data-intersection-property-id': x,
                        'data-test-id': o.e8.musicHistory.MUSIC_HISTORY_TAB_PLAYLIST_BLOCK,
                        children: [
                            (0, i.jsx)(u.DZ, {
                                className: (0, r.$)(P().header, P().heading),
                                variant: 'h3',
                                'data-test-id': o.e8.musicHistory.MUSIC_HISTORY_TAB_BLOCK_TYPE_PLAYLIST,
                                children: (0, i.jsx)(l.A, { id: 'music-history.playlist' }),
                            }),
                            C,
                            (0, i.jsx)('div', { className: P().content, children: b }),
                        ],
                    });
                });
            var Y = a(2755),
                z = a(37862);
            let G = (0, s.PA)((e) => {
                let { requestAwakeLumenModal: t, vibe: a, blockIndex: s, tabIndex: l } = e,
                    { ref: c, intersectionPropertyId: d } = E({ id: a.id, blockIndex: s, tabIndex: l }),
                    { from: u } = (0, f.f)({ blockId: ''.concat(z.U.RADIO, '-').concat(z.U.Q2V, '-').concat(a.id) }),
                    m = (0, n.useMemo)(
                        () =>
                            a.tracks.map((e, t) => {
                                var a;
                                let r = S({ entityId: e.entityId, from: u });
                                return (0, i.jsx)(
                                    M,
                                    { playContextParams: r, type: A.K.Vibe, track: e, blockIndex: s, tabIndex: l, trackIndex: t },
                                    null == (a = e.data) ? void 0 : a.getKey(t),
                                );
                            }),
                        [a.tracks, u, l, s],
                    );
                return a.meta
                    ? (0, i.jsxs)('section', {
                          className: P().root,
                          ref: c,
                          'data-intersection-property-id': d,
                          'data-test-id': o.e8.musicHistory.MUSIC_HISTORY_TAB_QUERY_TO_VIBE_BLOCK,
                          children: [
                              (0, i.jsx)(Y.K, { className: (0, r.$)(P().queryToVibeHeader, P().heading), requestAwakeLumenModal: t, vibe: a.meta }),
                              (0, i.jsx)('div', { className: P().content, children: m }),
                          ],
                      })
                    : null;
            });
            var F = a(91027),
                $ = a(6752),
                X = a(19529),
                q = a(71735),
                Q = a(84782),
                J = a(37240),
                Z = a(43564),
                ee = a(79406),
                et = a(8322),
                ea = a(32156),
                ei = a(1444),
                er = a(40229);
            let es = (0, s.PA)((e) => {
                var t, a, s, c, d, m;
                let { vibe: _, blockIndex: v, tabIndex: p } = e,
                    {
                        experiments: h,
                        settings: { isMobile: x },
                        freeAccess: g,
                    } = (0, y.g)(),
                    { pageId: C } = (0, J.$)(),
                    { blockIdForFrom: b } = (0, Q.N)(),
                    I = (0, q.P)(),
                    [N, L] = (0, n.useState)(!1),
                    {
                        isPlaying: j,
                        togglePlay: R,
                        isCurrent: w,
                    } = (0, Z.B)({ seeds: (null == (t = _.meta) ? void 0 : t.seeds) || [et.M1], pageIdForFrom: C, blockIdForFrom: b }),
                    O = (0, n.useId)(),
                    D = h.checkExperiment(ee.z.WebNextVibeDescription, 'on'),
                    B = _.isMultivibe,
                    H = B ? 'xs' : 'm',
                    { ref: K, intersectionPropertyId: U } = E({ id: _.id, blockIndex: v, tabIndex: p }),
                    { from: V } = (0, f.f)({ blockId: 'wave-'.concat(_.id) }),
                    W = (0, F.c)(() => {
                        if (!I()) {
                            if (g.isVibeStartRestricted) return void L(!0);
                            R();
                        }
                    }),
                    Y = (0, F.c)((e) => {
                        if (x || 2 === e.detail) return void W();
                    }),
                    z = (0, $.L)(() => {
                        var e, t, a, i, r, s, n, l;
                        return D
                            ? {
                                  title: null == (e = _.meta) ? void 0 : e.title,
                                  description:
                                      null == (i = _.meta)
                                          ? void 0
                                          : i.getDescription(null != (l = null == (t = _.meta) ? void 0 : t.title) ? l : null == (a = _.meta) ? void 0 : a.description),
                              }
                            : { title: null != (n = null == (r = _.meta) ? void 0 : r.title) ? n : null == (s = _.meta) ? void 0 : s.description };
                    }),
                    G = (0, n.useCallback)(() => {
                        var e, t, a, s, n;
                        return (null == (e = _.meta) ? void 0 : e.shouldShowAgent) && (null == (t = _.meta) ? void 0 : t.agent)
                            ? (0, i.jsx)(X.n, {
                                  agent: _.meta.agent,
                                  isPlaying: j,
                                  isCurrent: w,
                                  onPlayButtonClick: W,
                                  className: (0, r.$)(P().vibeCover, { [P().multivibeContainer]: B }),
                                  playButtonIconSize: H,
                                  fallbackIconSize: H,
                                  coverClassName: (0, r.$)({ [P().multivibeCover]: B }),
                                  entityCoverClassName: (0, r.$)({ [P().multivibeAvatar]: B }),
                                  controlClassName: (0, r.$)({ [P().multivibeControl]: B }),
                              })
                            : (0, i.jsx)(er.q, {
                                  isCurrent: w,
                                  isPlaying: j,
                                  isAvailable: !0,
                                  onPlayButtonClick: W,
                                  title: null == (a = _.meta) ? void 0 : a.title,
                                  entityCoverStyle: { backgroundColor: null == (s = _.meta) ? void 0 : s.backgroundColor },
                                  ariaDescribedBy: O,
                                  coverUri: null == (n = _.meta) ? void 0 : n.imageUrl,
                                  radius: 'round',
                                  withLoadingIndicator: !1,
                                  className: (0, r.$)(P().vibeCover, { [P().multivibeContainer]: B }),
                                  playButtonIconSize: H,
                                  fallbackIconSize: H,
                                  coverClassName: (0, r.$)({ [P().multivibeCover]: B }),
                                  entityCoverClassName: (0, r.$)({ [P().multivibeAvatar]: B }),
                                  controlClassName: (0, r.$)({ [P().multivibeControl]: B }),
                              });
                    }, [
                        W,
                        w,
                        j,
                        O,
                        null == (a = _.meta) ? void 0 : a.agent,
                        null == (s = _.meta) ? void 0 : s.backgroundColor,
                        null == (c = _.meta) ? void 0 : c.imageUrl,
                        null == (d = _.meta) ? void 0 : d.shouldShowAgent,
                        null == (m = _.meta) ? void 0 : m.title,
                        B,
                        H,
                    ]),
                    es = (0, $.L)(() => {
                        var e;
                        return _.isShimmerVisible
                            ? (0, i.jsx)(k.M, { isActive: _.isShimmerActive, className: P().header, coverRadius: 'round' })
                            : (0, i.jsxs)(ei.C, {
                                  className: (0, r.$)(P().header, P().vibeHeader),
                                  onClick: Y,
                                  'data-test-id': o.e8.musicHistory.MUSIC_HISTORY_TAB_HEADER,
                                  children: [
                                      (0, i.jsx)(ea.S, {
                                          isOpened: N,
                                          onOpenChange: L,
                                          isEnabled: g.isVibeStartRestricted,
                                          placement: 'bottom',
                                          textVariant: 'vibe',
                                          vibeTextVariant: null == (e = _.meta) ? void 0 : e.stationType,
                                          renderChildren: G,
                                      }),
                                      (0, i.jsx)(T.T, { titleSize: 'xs', titleLineClamp: 1, headingVariant: 'h4', labeledForId: O, className: P().vibeTextBlock, ...z }),
                                  ],
                              });
                    }),
                    en = (0, n.useMemo)(
                        () =>
                            _.tracks.map((e, t) => {
                                var a;
                                let r = S({ entityId: e.entityId, from: V });
                                return (0, i.jsx)(
                                    M,
                                    { playContextParams: r, type: A.K.Vibe, track: e, blockIndex: v, tabIndex: p, trackIndex: t },
                                    null == (a = e.data) ? void 0 : a.getKey(t),
                                );
                            }),
                        [_.tracks, V, p, v],
                    );
                return (0, i.jsxs)('section', {
                    className: P().root,
                    ref: K,
                    'data-intersection-property-id': U,
                    'data-test-id': o.e8.musicHistory.MUSIC_HISTORY_TAB_VIBE_BLOCK,
                    children: [
                        !D &&
                            (0, i.jsx)(u.DZ, {
                                className: (0, r.$)(P().header, P().heading),
                                variant: 'h3',
                                'data-test-id': o.e8.musicHistory.MUSIC_HISTORY_TAB_BLOCK_TYPE_VIBE,
                                children: (0, i.jsx)(l.A, { id: 'music-history.my-vibe' }),
                            }),
                        es,
                        (0, i.jsx)('div', { className: P().content, children: en }),
                    ],
                });
            });
            var en = a(84507),
                el = a.n(en);
            let eo = (0, s.PA)((e) => {
                let { tab: t, tabIndex: a, onTabShowOrHide: r, shouldHideInactiveTab: s, ...l } = e,
                    { lumen: c } = (0, y.g)(),
                    d = (0, x.s)(g.n.MUSIC_HISTORY),
                    { awakeLumenModal: m, requestAwakeLumenModal: A } = (0, p.z)(),
                    b = (0, h.f)(),
                    f = (0, n.useMemo)(() => {
                        var e;
                        return null == (e = t.blocks)
                            ? void 0
                            : e
                                  .map((e, t) => {
                                      switch (e.type) {
                                          case v.D.ALBUM:
                                              return (0, i.jsx)(D, { album: e, blockIndex: t, tabIndex: a }, ''.concat(e.key, '_').concat(t));
                                          case v.D.PLAYLIST:
                                              return (0, i.jsx)(W, { playlist: e, blockIndex: t, tabIndex: a }, ''.concat(e.key, '_').concat(t));
                                          case v.D.MULTIVIBE_WAVE:
                                          case v.D.WAVE:
                                              return (0, i.jsx)(es, { vibe: e, blockIndex: t, tabIndex: a }, ''.concat(e.key, '_').concat(t));
                                          case v.D.ARTIST:
                                              return (0, i.jsx)(B, { artist: e, blockIndex: t, tabIndex: a }, ''.concat(e.key, '_').concat(t));
                                          case v.D.SEARCH:
                                          case v.D.OTHER:
                                              return (0, i.jsx)(V, { common: e, blockIndex: t, tabIndex: a }, ''.concat(e.key, '_').concat(t));
                                          case v.D.QUERY_TO_VIBE:
                                              return b
                                                  ? (0, i.jsx)(G, { requestAwakeLumenModal: A, vibe: e, blockIndex: t, tabIndex: a }, ''.concat(e.key, '_').concat(t))
                                                  : null;
                                          default:
                                              return null;
                                      }
                                  })
                                  .filter((e) => e);
                    }, [t.blocks, a, b, A]),
                    T = _(),
                    k = (0, n.useRef)(null),
                    { observeElement: S } = (0, n.useContext)(C),
                    E = d.datesMap.get(t.date);
                return (
                    (0, n.useEffect)(() => {
                        S({
                            elementId: t.date,
                            elementRef: k,
                            index: 0,
                            onShow: () => {
                                (d.setDatesMap(t.date, !0), r());
                            },
                            onHide: () => {
                                (d.setDatesMap(t.date, !1), r());
                            },
                        });
                    }, [d, d.datesMap, S, r, t.date]),
                    (0, n.useEffect)(() => {
                        c.isEnabled && c.getData();
                    }, [c]),
                    (0, i.jsxs)('div', {
                        'aria-hidden': !E && s,
                        ref: k,
                        'data-intersection-property-id': t.date,
                        className: el().root,
                        ...l,
                        ...{ inert: !!(!E && s) },
                        'data-test-id': o.e8.musicHistory.MUSIC_HISTORY_TAB,
                        children: [
                            m,
                            (0, i.jsx)(u.DZ, {
                                'data-date-anchor': t.date,
                                className: el().date,
                                variant: 'h2',
                                size: 'm',
                                'data-test-id': o.e8.musicHistory.MUSIC_HISTORY_TAB_DATE,
                                children: T(t.date),
                            }),
                            (0, i.jsx)('div', { className: el().content, children: f }),
                        ],
                    })
                );
            });
            var ec = a(64170),
                ed = a(48922),
                eu = a(22714),
                em = a(83920),
                e_ = a(3796),
                ev = a(28563),
                ep = a(97841),
                eh = a(32468),
                ex = a(12894),
                eg = a(45180),
                ey = a(8946),
                eC = a(42406);
            let eA = (e) => {
                    let { children: t } = e,
                        a = (0, n.useRef)({}),
                        r = (0, n.useMemo)(
                            () =>
                                (0, eC.Gv)((e) => {
                                    var t, i;
                                    let r = (0, eC.L5)(e.target),
                                        s = a.current[r];
                                    e.isIntersecting ? null == s || null == (t = s.onShow) || t.call(s) : null == s || null == (i = s.onHide) || i.call(s);
                                }),
                            [],
                        );
                    (0, n.useEffect)(() => () => (null == r ? void 0 : r.disconnect()), [r]);
                    let s = (0, n.useCallback)(
                            (e) => {
                                !a.current[e.elementId] && e.elementRef.current && (null == r || r.observe(e.elementRef.current), (a.current[e.elementId] = e));
                            },
                            [r],
                        ),
                        l = (0, n.useCallback)(
                            (e) => {
                                let t = a.current[e];
                                t && t.elementRef.current && (null == r || r.unobserve(t.elementRef.current));
                            },
                            [r],
                        ),
                        o = (0, n.useMemo)(() => ({ observeElement: s, unobserveElement: l }), [s, l]);
                    return (0, i.jsx)(C.Provider, { value: o, children: t });
                },
                eb = async (e, t) =>
                    new Promise((a) => {
                        if ('onscrollend' in window) {
                            var i;
                            let r = () => {
                                var e;
                                (a(), null == (e = t.current) || e.removeEventListener('scrollend', r));
                            };
                            (null == (i = t.current) || i.addEventListener('scrollend', r), e.scrollIntoView({ behavior: 'smooth' }));
                        } else (e.scrollIntoView({ behavior: 'smooth' }), window.setTimeout(a, 1e3));
                    });
            var ef = a(87461),
                eT = a.n(ef),
                ek = a(73354);
            let eS = (0, s.PA)(() => {
                let [e, t] = (0, n.useState)(!1),
                    a = (0, x.s)(g.n.MUSIC_HISTORY),
                    { contentScrollRef: s, setContentScrollRef: m } = (0, em.g)(),
                    v = (0, d.zb)(0),
                    p = (0, n.useRef)(!1),
                    h = (0, n.useRef)(null),
                    y = (0, n.useCallback)(
                        async (e) => {
                            var i;
                            t(!0);
                            let r = a.dates[e];
                            if (!r) return;
                            (null == (i = v.onTabChange) || i.call(v, e), (p.current = !0));
                            let n = document.querySelector('[data-date-anchor="'.concat(r, '"]'));
                            (n && ((h.current = s), await eb(n, h)), (p.current = !1));
                        },
                        [a.dates, v, s],
                    ),
                    C = (0, n.useCallback)(() => {
                        if (p.current) return;
                        let e = a.dates.findIndex((e) => a.datesMap.get(e));
                        if (e >= 0) {
                            var t;
                            null == (t = v.onTabChange) || t.call(v, e);
                        }
                    }, [a.dates, a.datesMap, v]);
                ((0, n.useEffect)(() => () => a.reset(), [a]), (0, e_.J)(a.isResolved));
                let A = (0, n.useMemo)(() => {
                        var t;
                        return a.isRejected
                            ? (0, i.jsx)(ec.SomethingWentWrong, { className: (0, r.$)(eT().error, eT().important), withBackwardControl: !1 })
                            : a.isShimmerVisible
                              ? (0, i.jsx)(ek.v, { isActive: a.isShimmerActive })
                              : a.isEmpty
                                ? (0, i.jsx)('div', {
                                      className: eT().empty,
                                      children: (0, i.jsx)(u.HL, {
                                          variant: 'div',
                                          size: 'm',
                                          weight: 'normal',
                                          children: (0, i.jsx)(l.A, { id: 'music-history.empty-title' }),
                                      }),
                                  })
                                : null == (t = a.tabs)
                                  ? void 0
                                  : t.map((t, a) =>
                                        (0, i.jsx)(eo, { onTabShowOrHide: C, 'data-intersection-property-id': t.date, tab: t, tabIndex: a, shouldHideInactiveTab: e }, a),
                                    );
                    }, [C, a.isEmpty, a.isRejected, a.isShimmerActive, a.isShimmerVisible, a.tabs, e]),
                    b = _(),
                    f = (0, n.useMemo)(
                        () =>
                            (0, i.jsx)(ey.wI, {
                                isShimmerVisible: a.isShimmerVisible,
                                className: eT().tabs,
                                ...v,
                                onTabChange: y,
                                shimmer: (0, i.jsx)(ey.zr, {
                                    className: eT().tabs,
                                    shimmerClassName: (0, r.$)(eT().tab, { [eT().tab_isLoading]: a.isShimmerVisible }),
                                    count: 5,
                                }),
                                children: a.dates.map((e, t) =>
                                    (0, i.jsx)(
                                        eg.o,
                                        {
                                            className: (0, r.$)(eT().tab, { [eT().tab_selected]: t === v.value }),
                                            titleClassName: eT().date,
                                            'aria-label': b(e, !1),
                                            title: b(e, !1),
                                            value: t,
                                        },
                                        t,
                                    ),
                                ),
                            }),
                        [b, y, a.dates, a.isShimmerVisible, v],
                    );
                return (
                    a.isNeededToLoad && (0, n.use)(a.getMusicHistory()),
                    (0, i.jsx)(eu.n, {
                        pageId: ed._Q.HISTORY,
                        children: (0, i.jsxs)('div', {
                            className: eT().root,
                            'data-test-id': o.Xk.musicHistory.MUSIC_HISTORY_PAGE,
                            children: [
                                (0, i.jsxs)('div', {
                                    className: eT().headerContainer,
                                    children: [
                                        (0, i.jsxs)('div', {
                                            className: eT().header,
                                            children: [
                                                (0, i.jsx)(ex.L, { withForwardControl: !1 }),
                                                (0, i.jsx)(u.DZ, {
                                                    variant: 'h1',
                                                    weight: 'bold',
                                                    size: 'xl',
                                                    lineClamp: 1,
                                                    children: (0, i.jsx)(l.A, { id: 'music-history.title' }),
                                                }),
                                            ],
                                        }),
                                        (0, i.jsx)(ev.F, { className: eT().carousel, carouselElement: f }),
                                    ],
                                }),
                                (0, i.jsxs)(c.N, {
                                    ref: m,
                                    className: eT().scroll,
                                    containerClassName: eT().scrollContainer,
                                    children: [
                                        (0, i.jsx)(eA, { children: (0, i.jsx)('div', { className: eT().content, children: A }) }),
                                        (0, i.jsx)(eh.A, { children: (0, i.jsx)(ep.w, { className: eT().footer }) }),
                                    ],
                                }),
                            ],
                        }),
                    })
                );
            });
        },
        1001: (e) => {
            e.exports = {
                iconContainer: 'QueryToVibeBase_iconContainer__AM7_Y',
                comet: 'QueryToVibeBase_comet__TR7wA',
                root: 'QueryToVibeBase_root__YPyW_',
                root_loading: 'QueryToVibeBase_root_loading__ATBRE',
                caption: 'QueryToVibeBase_caption__QUrL9',
                'caption-pulse': 'QueryToVibeBase_caption-pulse__OYj1G',
                iconPulse: 'QueryToVibeBase_iconPulse__113Fc',
                icon: 'QueryToVibeBase_icon__GNNz8',
                meta: 'QueryToVibeBase_meta__hQX1A',
            };
        },
        2413: (e, t, a) => {
            'use strict';
            a.d(t, { F: () => p });
            var i = a(32290),
                r = a(96103),
                s = a(55178),
                n = a(21732),
                l = a(90169),
                o = a(57594),
                c = a(8677),
                d = a(68912),
                u = a(83521),
                m = a(92102),
                _ = a(8200),
                v = a.n(_);
            let p = (0, r.PA)((e) => {
                let { track: t, albumArtists: a, position: r, playContextParams: _, withLightning: p } = e,
                    h = (0, l.D)({ playContextParams: _, entityId: t.entityId }),
                    {
                        settings: { isMobile: x },
                    } = (0, o.g)(),
                    g = (0, s.useCallback)((e) => (0, i.jsx)(u.G, { track: t, position: r, className: v().playButtonCell, ...e }), [t, r]);
                return (0, i.jsx)(m.C, {
                    track: t,
                    withLightning: p,
                    meta: (0, i.jsx)(d.j, { withArtistLink: !x, albumArtists: a, track: t, withSavingQueryParams: !0 }),
                    playButtonCellRender: g,
                    controls: (0, i.jsx)(c.Q, { withLightning: p, track: t, className: v().controlsBarCell, utmLink: _.contextData.utmLink }),
                    ...h,
                    'data-test-id': n.Kq.track.TRACK_ALBUM,
                });
            });
        },
        2755: (e, t, a) => {
            'use strict';
            a.d(t, { K: () => m });
            var i = a(32290),
                r = a(63618),
                s = a(57594),
                n = a(14257),
                l = a(90625),
                o = a(28301),
                c = a.n(o);
            let d = {
                    [n.S.Dark]: 'https://music-custom-wave-media.music.yandex.net/dark_q2v_history.lottie',
                    [n.S.Light]: 'https://music-custom-wave-media.music.yandex.net/light_q2v_history.lottie',
                },
                u = {
                    loading: {},
                    idle: { frameRange: { start: 0, end: 0 } },
                    playing: { frameRange: { start: 0 } },
                    paused: { frameRange: { start: 0 }, mode: 'reverse' },
                },
                m = (e) => {
                    let { className: t, ...a } = e,
                        { lumen: n } = (0, s.g)();
                    return (0, i.jsx)(l.D, {
                        className: (0, r.$)(c().root, t),
                        lumenImages: n.getFallbackImage(a.vibe.seeds[0]),
                        animationByTheme: d,
                        animationConfig: u,
                        ...a,
                    });
                };
        },
        3107: (e, t, a) => {
            'use strict';
            a.d(t, { z: () => R });
            var i = a(32290),
                r = a(55178),
                s = a(99923),
                n = a(91027),
                l = a(6752),
                o = a(48922),
                c = a(26042),
                d = a(22714),
                u = a(57594),
                m = a(63618),
                _ = a(96103),
                v = a(60900),
                p = a(21732),
                h = a(63423),
                x = a(84638),
                g = a(17811),
                y = a(90153),
                C = a(74416),
                A = a(62376),
                b = a(79374),
                f = a(2792),
                T = a(37240),
                k = a(84051),
                S = a(61945),
                E = a(75314),
                I = a(14257),
                N = a(61280),
                L = a.n(N);
            let j = (0, _.PA)((e) => {
                    let { requestAwakeLumenModalRef: t } = e,
                        {
                            lumen: a,
                            settings: { isMobile: l },
                        } = (0, u.g)(),
                        { formatMessage: c } = (0, v.A)(),
                        { language: d } = (0, S.h)(),
                        _ = (0, r.useRef)(null),
                        [N, j] = (0, r.useState)(!1),
                        [R, w] = (0, r.useState)(!1),
                        M = (() => {
                            let e = (0, C.st)(),
                                { hash: t } = (0, C.gf)(),
                                a = (0, A.U)(),
                                { pageId: i, pageStyle: r, pagePlacement: l } = (0, T.$)(),
                                { objectId: c = '', objectType: d } = (0, f.J)();
                            return (0, n.c)((n) => {
                                let { actionType: u, mainObjectType: m = d, mainObjectId: _ = c, userInteractionType: v = s.UserInteractionType.Tap } = n;
                                if (!e || !t || !i || !o.xK.includes(i) || !o.fD.includes(i)) return;
                                let p = b.W[i];
                                if (!p) return;
                                let h = (0, g.F)({
                                    params: {
                                        hash: t,
                                        pageId: p,
                                        pageStyle: r,
                                        pagePlacement: l,
                                        mainObjectType: m,
                                        mainObjectId: _,
                                        actionType: u,
                                        userInteractionType: v,
                                    },
                                    logger: a,
                                    context: 'useSendEventOnScreenActionPerformed',
                                });
                                h && (0, y.bv)(e.evgenInstance, h);
                            });
                        })(),
                        O = (0, k.l)({ mainObjectType: s.DomainObjectType.Lumen }),
                        P = (0, n.c)(async (e) => {
                            let t = a.isAwakened;
                            try {
                                e || (await a.getData(!0));
                            } finally {
                                (e || (!t && a.isAwakened && M({ actionType: s.ActionType.LumenAwakened }), O(!1), (_.current = null)), j(e));
                            }
                        }),
                        D = (0, n.c)(() => P(!1)),
                        B = (0, n.c)(() => {
                            var e;
                            (null == (e = _.current) || e.call(_), P(!1));
                        });
                    return (
                        (0, r.useEffect)(() => {
                            t.current = (e) => {
                                ((_.current = e), O(!0), j(!0));
                            };
                        }, [t, O]),
                        (0, r.useEffect)(() => {
                            if (!N) return void w(!1);
                            let e = window.setTimeout(() => w(!0), a.playButtonShowDelay);
                            return () => window.clearTimeout(e);
                        }, [N, a.playButtonShowDelay]),
                        (0, i.jsxs)(x.a, {
                            open: N,
                            onOpenChange: P,
                            onClose: D,
                            placement: l ? 'default' : 'center',
                            size: 'fitContent',
                            overlayColor: 'full',
                            className: (0, m.$)(L().root, (0, E.J)(I.S.Dark)),
                            headerClassName: L().header,
                            contentClassName: L().content,
                            closeOnOutsidePress: !0,
                            closeButtonDataTestId: p.S7.AWAKE_LUMEN_MODAL_CLOSE_BUTTON,
                            escapeKey: !0,
                            'data-test-id': p.S7.AWAKE_LUMEN_MODAL,
                            children: [
                                (0, i.jsx)('iframe', {
                                    referrerPolicy: 'no-referrer',
                                    sandbox: 'allow-forms allow-modals allow-popups allow-scripts allow-same-origin',
                                    className: L().iframe,
                                    src: ''.concat('https://lumen.yandex.ru/lumen/birth?utm_source=music&utm_medium=q2v', '&lang=').concat(d),
                                    'data-test-id': p.S7.AWAKE_LUMEN_MODAL_IFRAME,
                                }),
                                (0, i.jsx)(h.$, {
                                    className: (0, m.$)(L().playButton, R && L().playButtonVisible),
                                    radius: 'xxxl',
                                    size: 'default',
                                    variant: 'default',
                                    color: 'primary',
                                    onClick: B,
                                    'data-test-id': p.S7.AWAKE_LUMEN_MODAL_PLAY_BUTTON,
                                    children: c({ id: 'player-actions.listen' }),
                                }),
                            ],
                        })
                    );
                }),
                R = () => {
                    let { lumen: e } = (0, u.g)(),
                        t = (0, r.useRef)(() => void 0),
                        a = (0, n.c)((e) => t.current(e));
                    return {
                        awakeLumenModal: (0, l.L)(() => {
                            if (e.isEnabled)
                                return (0, i.jsx)(d.n, {
                                    pageEntityId: '',
                                    pageId: o._Q.LUMEN_AWAKENING_SCREEN,
                                    pageStyle: s.PageStyles.Sheet,
                                    pagePlacement: s.PagePlacements.Bottom,
                                    children: (0, i.jsx)(c.B, {
                                        objectId: '',
                                        objectType: s.DomainObjectType.Lumen,
                                        children: (0, i.jsx)(j, { requestAwakeLumenModalRef: t }),
                                    }),
                                });
                        }),
                        requestAwakeLumenModal: a,
                    };
                };
        },
        3796: (e, t, a) => {
            'use strict';
            a.d(t, { J: () => s });
            var i = a(21916),
                r = a(55178);
            let s = (e) => {
                let t = (0, i.usePathname)(),
                    [a, s] = (0, r.useState)(!1);
                ((0, r.useEffect)(() => {
                    (window.Ya.Rum.spa.makeSpaSubPage(t), window.Ya.Rum.spa.startDataLoading(t));
                }),
                    (0, r.useEffect)(() => {
                        window.Ya.Rum.spa.getLastSpaSubPage(t) && e && !a && (window.Ya.Rum.spa.finishDataLoading(t), window.Ya.Rum.spa.startDataRendering(t), s(!0));
                    }, [e, a, t]));
            };
        },
        4820: (e, t, a) => {
            'use strict';
            a.d(t, { C: () => c });
            var i = a(32290),
                r = a(55178),
                s = a(21732),
                n = a(71926),
                l = a(91624),
                o = a.n(l);
            let c = (e) => {
                let { getDescriptionTexts: t, entityId: a } = e,
                    [l, c] = (0, r.useState)(null);
                if (
                    ((0, r.useEffect)(() => {
                        t && t().then(c);
                    }, [t]),
                    l)
                )
                    return l.map((e, t) =>
                        (0, i.jsx)(
                            n.HL,
                            {
                                className: o().descriptionTextItem,
                                variant: 'div',
                                type: 'text',
                                size: 'm',
                                weight: 'normal',
                                'data-test-id': s.S7.DESCRIPTION_TEXT,
                                children: e,
                            },
                            ''.concat(a, '-descpription-text-').concat(t),
                        ),
                    );
            };
        },
        5537: (e, t, a) => {
            'use strict';
            a.d(t, { N: () => s });
            var i = a(57594),
                r = a(79406);
            let s = () => {
                var e, t;
                let {
                    user: a,
                    settings: { browserInfo: s },
                    experiments: n,
                } = (0, i.g)();
                return (
                    !(null == s ? void 0 : s.isTouch) &&
                    a.isAuthorized &&
                    !a.hasPlus &&
                    (null == (t = n.getExperiment(r.z.WebNextDesktopWebFreemium)) || null == (e = t.value) ? void 0 : e.closeListening) === 'on'
                );
            };
        },
        6676: (e) => {
            e.exports = {
                shimmersContainer: 'MusicHistoryPageContentShimmer_shimmersContainer__82cj6',
                dateShimmer: 'MusicHistoryPageContentShimmer_dateShimmer__d4_te',
                contextNameShimmer: 'MusicHistoryPageContentShimmer_contextNameShimmer__Tzbqr',
                contextHeaderShimmer: 'MusicHistoryPageContentShimmer_contextHeaderShimmer__Tq0PZ',
                trackListShimmers: 'MusicHistoryPageContentShimmer_trackListShimmers__4GSp8',
            };
        },
        7189: (e, t, a) => {
            'use strict';
            var i;
            (a.d(t, { D: () => i }),
                (function (e) {
                    ((e.TRACK = 'track'),
                        (e.WAVE = 'wave'),
                        (e.MULTIVIBE_WAVE = 'multivibe_wave'),
                        (e.QUERY_TO_VIBE = 'q2v_wave'),
                        (e.ARTIST = 'artist'),
                        (e.PLAYLIST = 'playlist'),
                        (e.ALBUM = 'album'),
                        (e.OTHER = 'other'),
                        (e.SEARCH = 'search'));
                })(i || (i = {})));
        },
        8200: (e) => {
            e.exports = { playButtonCell: 'TrackAlbum_playButtonCell__pLJte', controlsBarCell: 'TrackAlbum_controlsBarCell__XUUCc' };
        },
        8626: (e, t, a) => {
            'use strict';
            a.d(t, { m: () => i });
            let i = () => ({ year: 'numeric' });
        },
        8677: (e, t, a) => {
            'use strict';
            a.d(t, { Q: () => O });
            var i = a(32290),
                r = a(63618),
                s = a(96103),
                n = a(55178),
                l = a(60900),
                o = a(39407),
                c = a(99923),
                d = a(21732),
                u = a(91027),
                m = a(82586),
                _ = a(70280),
                v = a(71926),
                p = a(17705),
                h = a(63423);
            let x = (e) => {
                let { className: t, variant: a = 'text', onClick: r, iconClassName: s, iconSize: o, size: c = 's', ariaLabel: u } = e,
                    { formatMessage: _ } = (0, l.A)(),
                    v = null != u ? u : _({ id: 'play-queue.delete-from-queue' }),
                    p = (0, n.useCallback)(
                        (e) => {
                            (null == r || r(), e.stopPropagation());
                        },
                        [r],
                    );
                return (0, i.jsx)(h.$, {
                    className: t,
                    withRipple: !1,
                    variant: a,
                    size: c,
                    radius: 'round',
                    'aria-label': v,
                    onClick: p,
                    icon: (0, i.jsx)(m.I, { size: o, className: s, variant: 'bucket' }),
                    'data-test-id': d.OA.track.REMOVE_BUTTON,
                });
            };
            var g = a(71735),
                y = a(54391),
                C = a(22191),
                A = a(28999),
                b = a(57594),
                f = a(92744),
                T = a(29268),
                k = a(4008),
                S = a(53161),
                E = a(52843),
                I = a(39400),
                N = a(54714),
                L = a.n(N),
                j = a(38420),
                R = a(92565),
                w = a.n(R);
            let M = (0, s.PA)((e) => {
                    let { track: t } = e,
                        { formatMessage: a } = (0, l.A)();
                    return t.isDownloaded
                        ? (0, i.jsx)(m.I, {
                              size: 'xxs',
                              variant: 'downloaded',
                              'aria-label': a({ id: 'offline.track-downloaded' }),
                              'data-test-id': d.Kq.track.DOWNLOADED_TRACK_ICON,
                          })
                        : t.isDownloading
                          ? (0, i.jsx)(j.A, { value: t.downloadingProgress, size: 16, className: w().downloadingProgress, progressBarClassName: w().progress })
                          : null;
                }),
                O = (0, s.PA)((e) => {
                    var t, a;
                    let {
                            className: s,
                            track: h,
                            withLightning: N,
                            ignoreDislikedStyles: j,
                            onLikeClick: R,
                            utmLink: w,
                            withSecondaryColor: O,
                            handleRemove: P,
                            withTrailer: D = !0,
                            likeIconSize: B = 'xxs',
                            removeButtonAriaLabel: H,
                            hideControls: K,
                        } = e,
                        { user: U, trailer: V } = (0, b.g)(),
                        { formatMessage: W } = (0, l.A)(),
                        { sendLikeSearchFeedback: Y } = (0, A.z)(),
                        [z, G] = (0, n.useState)(!1),
                        [F, $] = (0, n.useState)(!1),
                        X = (0, g.P)(),
                        q = (0, p.K)(h),
                        Q = (0, C.P)(Math.round((null != (a = h.durationMs) ? a : 0) / 1e3)),
                        J = (0, y.F)(),
                        Z = U.hasPlus,
                        ee = !h.isRemoved && h.isAvailable && !K,
                        et = (0, u.c)(async () => {
                            (z || h.isLiked || (G(!0), null == Y || Y()), await q(), null == R || R(h.isLiked));
                        }),
                        ea = (0, u.c)((e) => {
                            e.stopPropagation();
                        }),
                        ei = (0, u.c)((e) => {
                            if ((e.stopPropagation(), X())) return void e.preventDefault();
                            (V.openTrackTrailer(h.id), J(c.DomainObjectType.Track, h.id));
                        }),
                        er = (0, n.useMemo)(() => {
                            if (ee)
                                return (0, i.jsx)('div', {
                                    onClick: ea,
                                    children: (0, i.jsx)(I._, {
                                        track: h,
                                        open: F,
                                        onOpenChange: $,
                                        placement: 'bottom',
                                        icon: (0, i.jsx)(m.I, { size: 'xs', variant: 'more' }),
                                        size: 'xs',
                                        utmLink: w,
                                        className: (0, r.$)(L().contextMenu, { [L().contextMenu_visible]: F }),
                                        handleRemove: P,
                                        withTrailer: D,
                                        'data-test-id': d.Kq.track.TRACK_CONTEXT_MENU_BUTTON,
                                    }),
                                });
                        }, [ea, P, F, ee, D, h, w]);
                    return (0, i.jsxs)('div', {
                        className: (0, r.$)(L().root, L().controls, s, {
                            [L().controls_dislikedControls]: h.isDisliked,
                            [L().controls_dislikedColors]: h.isDisliked && !j,
                            [L().controls_disabled]: !h.isAvailable,
                            [L().root_withSecondaryColor]: O,
                        }),
                        children: [
                            N &&
                                (0, i.jsx)(m.I, {
                                    'aria-label': W({ id: 'entity-names.popular-among-users' }),
                                    size: 'xxs',
                                    className: L().lightning,
                                    variant: 'lightning',
                                }),
                            h.isUGC &&
                                (0, i.jsxs)(_.m_, {
                                    placement: 'bottom',
                                    offsetOptions: 8,
                                    children: [
                                        (0, i.jsx)(m.I, {
                                            'aria-label': W({ id: 'ugc.track-description' }),
                                            size: 'xxs',
                                            className: L().ugcIcon,
                                            variant: 'eye_crossed',
                                            'data-test-id': d.Kq.track.UGC_TRACK_ICON,
                                        }),
                                        (0, i.jsx)(_.ZI, { children: (0, i.jsx)(o.A, { id: 'ugc.track-description' }) }),
                                    ],
                                }),
                            Z && (0, i.jsx)('div', { className: (0, r.$)(L().item, L().downloadIcon), children: (0, i.jsx)(M, { track: h }) }),
                            P && !K && (0, i.jsx)(x, { size: 'xs', iconSize: 'xxs', className: (0, r.$)(L().item, L().removeButton), onClick: P, ariaLabel: H }),
                            ee &&
                                (0, i.jsx)(k.WithOffline, {
                                    fallback: (0, i.jsx)(f.c, {
                                        size: 'xs',
                                        iconSize: B,
                                        className: (0, r.$)(L().item, L().likeIcon),
                                        isLiked: h.isLiked,
                                        onClick: et,
                                        disabled: !U.isAuthorized,
                                    }),
                                }),
                            (null == (t = h.trailer) ? void 0 : t.isAvailable) &&
                                h.isAvailable &&
                                (0, i.jsx)(k.WithOffline, {
                                    fallback: (0, i.jsx)(T.k, {
                                        className: (0, r.$)(L().item, L().trailerIcon),
                                        iconSize: 'xs',
                                        variant: 'text',
                                        onClick: ei,
                                        withRipple: !1,
                                    }),
                                }),
                            (0, i.jsxs)('div', {
                                className: (0, r.$)(L().item, L().contextMenuWrapper),
                                children: [
                                    'number' == typeof h.durationMs &&
                                        (0, i.jsx)(v.HL, {
                                            variant: 'span',
                                            className: (0, r.$)(L().duration, { [L().duration_hidden]: F && ee }),
                                            type: 'entity',
                                            size: 'm',
                                            weight: 'medium',
                                            'aria-label': Q,
                                            role: 'text',
                                            'data-test-id': d.Kq.track.TRACK_DURATION,
                                            children: (0, i.jsx)('span', {
                                                'aria-hidden': 'true',
                                                children: ((e) => {
                                                    let t = Math.round((e || 0) / S.k7);
                                                    return (0, E.E)(t);
                                                })(h.durationMs),
                                            }),
                                        }),
                                    er,
                                ],
                            }),
                        ],
                    });
                });
        },
        12894: (e, t, a) => {
            'use strict';
            a.d(t, { L: () => p });
            var i = a(32290),
                r = a(63618),
                s = a(96103),
                n = a(55178),
                l = a(60900),
                o = a(21732),
                c = a(91027),
                d = a(63423),
                u = a(82586),
                m = a(21935),
                _ = a(78842),
                v = a.n(_);
            let p = (0, s.PA)((e) => {
                let {
                        withBackwardControl: t = !0,
                        withForwardControl: a = !0,
                        shouldFocusOnMount: s = !0,
                        className: _,
                        withBackwardFallback: p,
                        buttonSize: h = 'xxs',
                    } = e,
                    { formatMessage: x } = (0, l.A)(),
                    { canBack: g, canForward: y, moveBack: C, moveForward: A } = (0, m.J)(p),
                    b = (0, n.useRef)(null),
                    f = (0, c.c)((e) => {
                        (e.stopPropagation(), C());
                    }),
                    T = (0, c.c)((e) => {
                        (e.stopPropagation(), A());
                    });
                return (
                    (0, n.useEffect)(() => {
                        s && b.current && g && b.current.focus();
                    }, [g]),
                    (0, i.jsxs)('div', {
                        className: (0, r.$)(v().root, _),
                        'data-test-id': o.Kq.navigation.NAVIGATION_CONTROLS,
                        children: [
                            t &&
                                (0, i.jsx)(d.$, {
                                    ref: b,
                                    'aria-label': x({ id: 'navigation.go-back' }),
                                    radius: 'round',
                                    disabled: !g,
                                    size: h,
                                    icon: (0, i.jsx)(u.I, { size: 'xxs', variant: 'arrowLeft' }),
                                    onClick: f,
                                    'data-test-id': o.Kq.navigation.NAVIGATION_BACKWARD_BUTTON,
                                }),
                            a &&
                                (0, i.jsx)(d.$, {
                                    'aria-label': x({ id: 'navigation.go-forward' }),
                                    radius: 'round',
                                    disabled: !y,
                                    size: h,
                                    icon: (0, i.jsx)(u.I, { size: 'xxs', variant: 'arrowRight' }),
                                    onClick: T,
                                    'data-test-id': o.Kq.navigation.NAVIGATION_FORWARD_BUTTON,
                                }),
                        ],
                    })
                );
            });
        },
        12989: (e, t, a) => {
            'use strict';
            a.d(t, { D: () => g });
            var i = a(55178),
                r = a(17811),
                s = a(92146),
                n = a(74416),
                l = a(6752),
                o = a(62376),
                c = a(1677),
                d = a(48922),
                u = a(84782),
                m = a(30915),
                _ = a(18746),
                v = a(2792),
                p = a(37240),
                h = a(51012),
                x = a(47498);
            let g = () => {
                let e = (0, o.U)(),
                    t = (0, n.st)(),
                    { hash: a } = (0, n.gf)(),
                    { pageId: g, displayReasonId: y } = (0, p.$)(),
                    { tabId: C, tabPos: A, isTabSelectedByDefault: b } = (0, x.R)(),
                    { offsetBlockPosY: f } = (0, m.u)(),
                    { blockType: T, blockId: k, blockPosX: S, blockPosY: E, mainObjectId: I, mainObjectType: N, displayReasonId: L } = (0, u.N)(),
                    { filterKey: j, filterValue: R, filterPos: w } = (0, _.G)(),
                    { objectType: M, objectsCount: O, objectId: P, objectPosX: D, objectPosY: B } = (0, v.J)(),
                    { skeleton: H } = (0, h.b)(),
                    K = null != L ? L : y,
                    U = (0, l.L)(() => (void 0 !== f && void 0 !== E ? f + E : E));
                return (0, i.useCallback)(
                    (i, n) => {
                        if (!t || !g || !d.xK.includes(g) || !d.fD.includes(g)) return;
                        let l = c.F[g];
                        if (!l) return;
                        let o = {
                            hash: a,
                            pageId: l,
                            entityType: T,
                            entityId: k,
                            entityPosX: S,
                            entityPosY: U,
                            objectsCount: O,
                            viewUuid: n,
                            objectType: M,
                            objectId: P,
                            objectPosX: D,
                            objectPosY: B,
                        };
                        (void 0 !== j && ((o.filterKey = j), (o.filterValue = R), (o.filterPos = w)),
                            d.qG.includes(g) && ((o.tabId = C), (o.tabPos = A), (o.isTabSelectedByDefault = b)),
                            H && (o.skeletonId = H),
                            'string' == typeof I && 'string' == typeof N && ((o.mainObjectType = N), (o.mainObjectId = I)),
                            K && (o.displayReasonId = K));
                        let u = (0, r.F)({ params: o, logger: e, context: 'useSendEventOnBlockShowedOrHidden' });
                        u && (i ? (0, s.Pf)(t.evgenInstance, u) : (0, s.nv)(t.evgenInstance, u));
                    },
                    [t, K, k, S, U, T, j, w, R, a, b, e, I, N, P, D, B, M, O, g, H, C, A],
                );
            };
        },
        13798: (e, t, a) => {
            'use strict';
            a.d(t, { N: () => h });
            var i = a(32290),
                r = a(63618),
                s = a(96103),
                n = a(55178),
                l = a(60900),
                o = a(80229),
                c = a(21732),
                d = a(6752),
                u = a(82586),
                m = a(57594),
                _ = a(60244),
                v = a(90006),
                p = a.n(v);
            let h = (0, s.PA)((e) => {
                let { className: t, getDescriptionTexts: a, trackId: s, containerClassName: v, variant: h, size: x = 'xxxs', ...g } = e,
                    { formatMessage: y } = (0, l.A)(),
                    {
                        settings: { isMobile: C },
                    } = (0, m.g)(),
                    [A, b] = (0, n.useState)(null),
                    f = (0, d.L)(() => {
                        switch (h) {
                            case o.JU.E:
                                return 'explicit';
                            case o.JU.AGE_12:
                            case o.JU.AGE_16:
                            case o.JU.AGE_18:
                                return 'adult';
                            case o.JU.EXCLAMATION:
                        }
                        return 'exclamation';
                    }),
                    T = (0, n.useMemo)(() => y({ id: 'extra-explicit.explicit-mark' }), [y]);
                (0, n.useEffect)(() => {
                    a && a().then(b);
                }, [a, s]);
                let k = (null == A ? void 0 : A.join('\n')) || '',
                    S = !!(null == A ? void 0 : A.length) && !C,
                    E = k.length > 0 ? k : T;
                return (0, i.jsx)(_.k, {
                    description: k,
                    placement: 'bottom-start',
                    enabled: S,
                    children: (0, i.jsx)('span', {
                        className: v,
                        children: (0, i.jsx)(u.I, {
                            className: (0, r.$)(p().explicitMark, t),
                            'aria-label': E,
                            variant: f,
                            size: x,
                            ...g,
                            'data-test-id': c.S7.EXPLICIT_MARK_ICON,
                        }),
                    }),
                });
            });
        },
        15559: (e, t, a) => {
            'use strict';
            a.d(t, { v: () => r });
            var i = a(79406);
            let r = (e) => {
                let { checkExperiment: t, getDisclaimerContent: a, getExplicitContent: r, userRegion: s } = e;
                return 'ru' === s && t(i.z.WebNextFooterDisclaimer, 'on') ? a() : r();
            };
        },
        16078: (e, t, a) => {
            'use strict';
            a.d(t, { z: () => n });
            var i = a(91027),
                r = a(57594),
                s = a(71670);
            let n = () => {
                let { location: e } = (0, r.g)(),
                    t = (0, s.X)();
                return (0, i.c)((a) => {
                    let i = new URL(window.location.href);
                    a.forEach((e) => i.searchParams.delete(e));
                    let r = i.toString();
                    (t(r), e.setHref(r), e.setSearchParams(i.searchParams.toString()));
                });
            };
        },
        16510: (e) => {
            e.exports = { root: 'ArtistItem_root__Q_mgJ', image: 'ArtistItem_image__5rKWF', cover: 'ArtistItem_cover__FTvHo' };
        },
        19529: (e, t, a) => {
            'use strict';
            a.d(t, { n: () => d });
            var i = a(32290),
                r = a(63618),
                s = a(52138),
                n = a(6752),
                l = a(40229),
                o = a(75487),
                c = a.n(o);
            let d = (e) => {
                let {
                        agent: t,
                        isPlaying: a,
                        isCurrent: o,
                        onPlayButtonClick: d,
                        shouldShowControl: u = !0,
                        playButtonIconSize: m,
                        alt: _,
                        className: v,
                        coverClassName: p,
                        entityCoverClassName: h,
                        controlClassName: x,
                        fallbackIconSize: g,
                    } = e,
                    y = (0, n.L)(() => {
                        if (t.entityType) return t.entityType === s.h.ARTIST ? 'round' : 'xs';
                    });
                return (0, i.jsx)(l.q, {
                    isAvailable: !0,
                    coverUri: t.cover.uri,
                    className: (0, r.$)(c().root, c()['root_radius_'.concat(y)], { [c().root_withShadow]: !!t.entityType }, v),
                    radius: y,
                    onPlayButtonClick: d,
                    isPlaying: a,
                    isCurrent: o,
                    alt: _,
                    withLoadingIndicator: !1,
                    shouldShowControl: u,
                    playButtonIconSize: m,
                    fallbackIconSize: g,
                    coverClassName: p,
                    entityCoverClassName: h,
                    controlClassName: x,
                });
            };
        },
        19620: (e, t, a) => {
            'use strict';
            a.d(t, { T: () => y });
            var i = a(32290),
                r = a(63618),
                s = a(55178),
                n = a(99923),
                l = a(21732),
                o = a(82586),
                c = a(50162),
                d = a(86269),
                u = a(79856),
                m = a(71926),
                _ = a(95481),
                v = a(47745),
                p = a(61258),
                h = a(69e3),
                x = a.n(h);
            let g = (e) => {
                    let {
                            className: t,
                            coverUrl: a,
                            labeledForId: h,
                            subTitle: g,
                            title: y,
                            description: C,
                            viewAllActionLink: A,
                            controls: b,
                            titleSize: f = 'm',
                            coverBackgroundColor: T,
                            coverRadius: k = 's',
                            titleClassName: S,
                            titleLineClamp: E,
                            fallbackIconVariant: I,
                            available: N = !0,
                            onViewAllAction: L,
                            titleChildren: j,
                            children: R,
                            headingRef: w,
                            coverContainerClassName: M,
                            headingVariant: O = 'h3',
                            withDescriptionWidthLimit: P = !0,
                            isShimmerVisible: D,
                            isShimmerActive: B,
                            withCover: H,
                            withDescription: K,
                            forwardRef: U,
                            shimmerCoverClassName: V,
                            shouldSendAnalyticsOnLoaded: W,
                            ...Y
                        } = e,
                        z = (0, _.f)(),
                        G = (0, s.useRef)(null),
                        F = a || H,
                        $ = C || K,
                        X = (0, s.useCallback)(() => {
                            G.current && 'focus' in G.current && G.current.focus();
                        }, []),
                        q = (0, v.N)(),
                        Q = (0, s.useCallback)(() => {
                            L ? L() : q({ to: n.AppScreen.Link });
                        }, [q, L]);
                    (0, s.useEffect)(() => {
                        W && z();
                    }, [W, z]);
                    let J = (0, s.useMemo)(
                            () =>
                                y && A && N
                                    ? (0, i.jsxs)(p.N, {
                                          className: x().title,
                                          containerClassName: x().linkContainer,
                                          textClassName: x().linkText,
                                          icon: (0, i.jsx)(o.I, { className: x().titleIcon, size: 'xs', variant: 'arrowRight' }),
                                          iconPosition: 'right',
                                          href: A,
                                          onClick: Q,
                                          'data-test-id': l.S7.BLOCK_HEADER_TITLE,
                                          children: [
                                              (0, i.jsx)(m.DZ, {
                                                  id: h,
                                                  className: (0, r.$)(x().heading, S),
                                                  variant: O,
                                                  size: f,
                                                  weight: 'bold',
                                                  lineClamp: E,
                                                  ref: w,
                                                  children: y,
                                              }),
                                              j,
                                          ],
                                      })
                                    : (0, i.jsxs)('div', {
                                          className: x().title,
                                          children: [
                                              (0, i.jsx)(m.DZ, {
                                                  id: h,
                                                  className: (0, r.$)(x().heading, S, { [x().heading_notAvailable]: !N }),
                                                  variant: O,
                                                  size: f,
                                                  weight: 'bold',
                                                  lineClamp: E,
                                                  ref: w,
                                                  'data-test-id': l.S7.BLOCK_HEADER_TITLE,
                                                  children: y,
                                              }),
                                              j,
                                          ],
                                      }),
                            [N, Q, w, O, h, y, S, E, f, A, j],
                        ),
                        Z = (0, s.useMemo)(() => (K && D ? (0, i.jsx)(u.W, { isActive: B, className: x().shimmerDescription }) : C), [K, D, C, B]),
                        ee = (0, s.useMemo)(
                            () =>
                                H && D
                                    ? (0, i.jsx)(u.W, { isActive: B, className: (0, r.$)(x().shimmerCover, V), radius: 's' })
                                    : (0, i.jsx)(c._V, {
                                          src: a,
                                          fallbackIconVariant: I,
                                          style: { backgroundColor: T },
                                          className: x().cover,
                                          ref: G,
                                          onClick: X,
                                          fit: 'cover',
                                          withAvatarReplace: !0,
                                          fallbackIconSize: 's',
                                          'aria-hidden': !0,
                                          'data-test-id': l.S7.BLOCK_HEADER_COVER,
                                      }),
                            [T, a, I, X, B, D, V, H],
                        );
                    return (0, i.jsxs)('div', {
                        className: (0, r.$)(x().root, t),
                        ref: U,
                        ...Y,
                        'data-test-id': l.S7.BLOCK_HEADER,
                        children: [
                            (0, i.jsxs)('div', {
                                className: x().start,
                                children: [
                                    F && (0, i.jsx)(d.t, { radius: k, className: (0, r.$)(x().coverContainer, M), children: ee }),
                                    (0, i.jsxs)('div', {
                                        className: x().textContainer,
                                        children: [
                                            g,
                                            J,
                                            $ &&
                                                (0, i.jsx)(m.HL, {
                                                    id: ''.concat(h, '-description'),
                                                    variant: 'span',
                                                    type: 'text',
                                                    size: 'm',
                                                    weight: 'medium',
                                                    lineClamp: P ? 2 : void 0,
                                                    className: (0, r.$)(x().description, { [x().description_widthLimit]: P }),
                                                    'data-test-id': l.S7.BLOCK_HEADER_DESCRIPTION,
                                                    children: Z,
                                                }),
                                        ],
                                    }),
                                ],
                            }),
                            b || R,
                        ],
                    });
                },
                y = (0, s.forwardRef)((e, t) => (0, i.jsx)(g, { forwardRef: t, ...e }));
        },
        20753: (e) => {
            e.exports = { root: 'DragAndDropIcon_root__OstQU', root_active: 'DragAndDropIcon_root_active__xOTKt' };
        },
        21935: (e, t, a) => {
            'use strict';
            a.d(t, { J: () => n });
            var i = a(62060),
                r = a(55178),
                s = a(83808);
            let n = (e) => {
                let t = (0, s.W)(),
                    a = (0, r.useMemo)(
                        () =>
                            (0, i.A)(() => {
                                if (e && !t.canBack) return void t.replaceState({ href: e });
                                null == t || t.back();
                            }, 200),
                        [t, e],
                    ),
                    n = (0, r.useMemo)(
                        () =>
                            (0, i.A)(() => {
                                null == t || t.forward();
                            }, 200),
                        [t],
                    );
                return { canBack: !!e || t.canBack, canForward: t.canForward, moveBack: a, moveForward: n };
            };
        },
        22714: (e, t, a) => {
            'use strict';
            a.d(t, { n: () => n });
            var i = a(32290),
                r = a(55178),
                s = a(1176);
            let n = (e) => {
                let { pageId: t, pageEntityId: a, displayReasonId: n, pageStyle: l, pagePlacement: o, children: c } = e,
                    d = (0, r.useMemo)(() => ({ pageId: t, pageEntityId: a, displayReasonId: n, pageStyle: l, pagePlacement: o }), [t, a, n, l, o]);
                return (0, i.jsx)(s.r.Provider, { value: d, children: c });
            };
        },
        23352: (e, t, a) => {
            'use strict';
            a.d(t, { n: () => n });
            var i = a(55178),
                r = a(12989),
                s = a(80536);
            let n = function () {
                let { callback: e, singleEvent: t, withViewUuid: a } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    n = (0, i.useRef)(null),
                    l = (0, r.D)(),
                    o = (0, i.useId)(),
                    c = (0, i.useContext)(s.B),
                    d = (0, i.useCallback)(
                        (i, r) => {
                            (e ? e(i, a ? r : void 0) : l(i, r), t && c.unobserveElement(o));
                        },
                        [e, c, o, l, t, a],
                    );
                return (
                    (0, i.useEffect)(
                        () => (
                            c.observeElement({ elementRef: n, elementId: o, callback: d }),
                            () => {
                                c.unobserveElement(o);
                            }
                        ),
                        [e, c, d, o, l],
                    ),
                    { ref: n, intersectionPropertyId: o }
                );
            };
        },
        26042: (e, t, a) => {
            'use strict';
            a.d(t, { B: () => n });
            var i = a(32290),
                r = a(55178),
                s = a(10936);
            let n = (e) => {
                let { objectId: t, objectPosX: a, objectPosY: n, objectPos: l, objectType: o, objectsCount: c, mainObjectId: d, mainObjectType: u, children: m } = e,
                    _ = (0, r.useMemo)(
                        () => ({ objectId: t, objectPosX: a, objectPosY: n, objectPos: l, objectType: o, objectsCount: c, mainObjectId: d, mainObjectType: u }),
                        [t, a, n, l, o, c, d, u],
                    );
                return (0, i.jsx)(s.l.Provider, { value: _, children: m });
            };
        },
        26781: (e, t, a) => {
            'use strict';
            a.d(t, { M: () => c });
            var i = a(32290),
                r = a(63618),
                s = a(86269),
                n = a(79856),
                l = a(69e3),
                o = a.n(l);
            let c = (e) => {
                let { isActive: t, coverRadius: a = 'm', withDescription: l, className: c } = e;
                return (0, i.jsxs)('div', {
                    className: (0, r.$)(o().start, c),
                    children: [
                        (0, i.jsx)(s.t, {
                            className: o().coverContainer,
                            radius: a,
                            children: (0, i.jsx)(n.W, { isActive: t, className: o().shimmerCover, radius: 'xl' }),
                        }),
                        (0, i.jsxs)('div', {
                            className: o().textShimmerContainer,
                            children: [
                                (0, i.jsx)(n.W, { isActive: t, className: o().shimmerTitle, radius: 'xl' }),
                                l && (0, i.jsx)(n.W, { isActive: t, className: o().shimmerDescription }),
                            ],
                        }),
                    ],
                });
            };
        },
        28301: (e) => {
            e.exports = { root: 'QueryToVibeSimple_root__fOVFG' };
        },
        28563: (e, t, a) => {
            'use strict';
            a.d(t, { F: () => b });
            var i = a(32290),
                r = a(63618),
                s = a(42157),
                n = a(96103),
                l = a(55178),
                o = a.t(l, 2),
                c = a(21732),
                d = a(45807),
                u = {
                    810: (e) => {
                        e.exports = o;
                    },
                },
                m = {},
                _ = {};
            ((() => {
                (Object.defineProperty(_, '__esModule', { value: !0 }), (_.useForwardRef = void 0));
                let e = (function e(t) {
                    var a = m[t];
                    if (void 0 !== a) return a.exports;
                    var i = (m[t] = { exports: {} });
                    return (u[t](i, i.exports, e), i.exports);
                })(810);
                _.useForwardRef = function (t, a) {
                    let i = (0, e.useRef)(a);
                    return (
                        (0, e.useEffect)(() => {
                            t && ('function' == typeof t ? t(i.current) : (t.current = i.current));
                        }, [t]),
                        i
                    );
                };
            })(),
                _.__esModule);
            var v = _.useForwardRef,
                p = a(54667),
                h = a(57594),
                x = a(49522),
                g = a(61954),
                y = a.n(g);
            let C = { [p.u.Desktop]: { start: 40, end: 20 }, [p.u.Mobile]: { start: 40, end: 40 } },
                A = (0, n.PA)((e) => {
                    let {
                            className: t,
                            carouselElement: a,
                            forwardRef: n,
                            scrollPadding: o,
                            isCarouselBetweenArrows: u = !1,
                            controlsWrapperClassName: m,
                            buttonSize: _,
                            buttonVariant: g,
                            withSecondaryColor: A,
                        } = e,
                        {
                            settings: { isMobile: b },
                        } = (0, h.g)(),
                        f = v(n, null),
                        { shouldBackwardButtonBeDisabled: T, shouldForwardButtonBeDisabled: k, shouldHideControls: S } = (0, d.Y)(f),
                        [E, I] = (0, l.useMemo)(() => {
                            let e = (0, s.A)(C, o);
                            return [b ? e[p.u.Mobile].start : e[p.u.Desktop].start, b ? e[p.u.Mobile].end : e[p.u.Desktop].end];
                        }, [o, b]),
                        N = (0, l.useCallback)(
                            (e) => {
                                var t;
                                let a = null == (t = f.current) ? void 0 : t.children[e],
                                    { current: i } = f;
                                if (!i || !(a instanceof HTMLElement)) return;
                                if (a.offsetLeft - i.scrollLeft < E) {
                                    i.scrollLeft = a.offsetLeft - E;
                                    return;
                                }
                                let r = i.scrollLeft + i.clientWidth - a.offsetLeft - a.offsetWidth;
                                r < I && (i.scrollLeft -= r - I);
                            },
                            [f, I, E],
                        ),
                        L = (0, l.useCallback)(
                            (e) => {
                                var t, i;
                                (N(e), null == (t = (i = a.props).onTabChange) || t.call(i, e));
                            },
                            [a, N],
                        ),
                        j = (0, l.cloneElement)(a, { forwardRef: f, className: (0, r.$)(y().wrapper, a.props.className, y().carousel, y().important), onTabChange: L });
                    return (0, i.jsxs)('div', {
                        className: (0, r.$)(
                            y().root,
                            {
                                [y().root_carouselBetweenArrows]: u,
                                [y().root_arrowLeft_hidden]: T,
                                [y().root_arrowRight_hidden]: k,
                                [y().root_arrow_hidden]: T && k && S,
                            },
                            t,
                        ),
                        'data-test-id': c.S7.CAROUSEL_WITH_ARROWS,
                        children: [
                            (0, i.jsx)('div', { className: y().list, children: j }),
                            !b &&
                                (0, i.jsx)(x.X, {
                                    className: (0, r.$)(y().buttons, m),
                                    carouselRef: f,
                                    backwardControlClassName: y().control,
                                    forwardControlClassName: y().control,
                                    withSecondaryColor: A,
                                    buttonSize: _,
                                    buttonVariant: g,
                                }),
                        ],
                    });
                }),
                b = (0, l.forwardRef)((e, t) => (0, i.jsx)(A, { forwardRef: t, ...e }));
        },
        29268: (e, t, a) => {
            'use strict';
            a.d(t, { k: () => u });
            var i = a(32290),
                r = a(55178),
                s = a(60900),
                n = a(21732),
                l = a(63423),
                o = a(82586),
                c = a(59576);
            let d = (e) => {
                    let {
                            variant: t,
                            withRipple: a,
                            size: r,
                            radius: d,
                            iconSize: u,
                            disabled: m,
                            onClick: _,
                            iconClassName: v,
                            className: p,
                            forwardRef: h,
                            style: x,
                            children: g,
                        } = e,
                        { formatMessage: y } = (0, s.A)(),
                        C = y({ id: 'trailer.button-aria-label' });
                    return (0, i.jsx)(l.$, {
                        className: p,
                        color: 'secondary',
                        radius: d,
                        size: r,
                        variant: t,
                        withRipple: a,
                        flexIcon: !0,
                        'aria-label': C,
                        onClick: _,
                        ref: h,
                        icon: (0, i.jsx)(o.I, { variant: 'trailer', size: u, className: v }),
                        disabled: m,
                        'data-intersection-property-id': c.N,
                        style: x,
                        'data-test-id': n.S7.TRAILER_BUTTON,
                        children: g,
                    });
                },
                u = (0, r.forwardRef)((e, t) => (0, i.jsx)(d, { forwardRef: t, ...e }));
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
        30542: (e, t, a) => {
            'use strict';
            a.d(t, { $: () => s });
            var i = a(60900),
                r = a(64605);
            let s = (e, t) => {
                let { formatMessage: a } = (0, i.A)();
                if (e)
                    switch (t) {
                        case r._.AUDIOBOOK:
                            return a({ id: 'non-music.shelf-unsubscribe' });
                        case r._.FAIRY_TALE:
                            return a({ id: 'interface-actions.do-not-like' });
                        default:
                            return a({ id: 'interface-actions.subscribed' });
                    }
                switch (t) {
                    case r._.AUDIOBOOK:
                        return a({ id: 'non-music.shelf-subscribe' });
                    case r._.FAIRY_TALE:
                        return a({ id: 'interface-actions.like' });
                    default:
                        return a({ id: 'interface-actions.subscribe' });
                }
            };
        },
        31010: (e, t, a) => {
            'use strict';
            a.d(t, { H: () => r, P: () => s });
            var i = a(55178);
            let r = (0, i.createContext)(null),
                s = () => (0, i.useContext)(r);
        },
        31640: (e) => {
            e.exports = {
                card_root: 'HorizontalCardContainer_root__YoAAP',
                root: 'EntityMeta_root__Zn4Th',
                root_disabled: 'EntityMeta_root_disabled__u3DaR',
                albumLink: 'EntityMeta_albumLink__vxRG7',
                artistCaption: 'EntityMeta_artistCaption__3JqiO',
                artistLink: 'EntityMeta_artistLink__rMKgI',
                description: 'EntityMeta_description__cSa2I',
                explicitMark: 'EntityMeta_explicitMark__wOyns',
                likesCount: 'EntityMeta_likesCount__cw2GN',
                subtitle: 'EntityMeta_subtitle__yE1NK',
                title: 'EntityMeta_title__6_ChR',
                titleContainer: 'EntityMeta_titleContainer__WMe1r',
                version: 'EntityMeta_version__7Z948',
                root_disliked: 'EntityMeta_root_disliked__PhzHW',
                title_withVersion: 'EntityMeta_title_withVersion__rbXWv',
                text: 'EntityMeta_text___lB4k',
                icon: 'EntityMeta_icon__tTxs3',
            };
        },
        32468: (e, t, a) => {
            'use strict';
            a.d(t, { A: () => n });
            var i = a(32290),
                r = a(77088),
                s = a.n(r);
            let n = (e) => {
                let { children: t } = e;
                return (0, i.jsx)('footer', { className: s().empty });
            };
        },
        34223: (e, t, a) => {
            'use strict';
            a.d(t, { D: () => p });
            var i = a(32290),
                r = a(98350),
                s = a(63618),
                n = a(55178),
                l = a(60900),
                o = a(79856),
                c = a(91063),
                d = a.n(c);
            let u = (e) => {
                let { isActive: t, className: a } = e,
                    { formatMessage: r } = (0, l.A)(),
                    c = (0, n.useMemo)(() => r({ id: 'loading-messages.entity-is-loading' }, { entityName: r({ id: 'entity-names.track' }) }), [r]);
                return (0, i.jsxs)('div', {
                    'aria-label': c,
                    'aria-live': t ? 'polite' : 'off',
                    'aria-busy': t,
                    className: (0, s.$)(d().root, a),
                    children: [
                        (0, i.jsxs)('div', {
                            className: d().infoContainer,
                            children: [
                                (0, i.jsx)('div', { className: d().coverContainer, children: (0, i.jsx)(o.W, { isActive: t, className: d().cover, radius: 'round' }) }),
                                (0, i.jsx)('div', { className: d().textContainer, children: (0, i.jsx)(o.W, { isActive: t, className: d().title, radius: 'l' }) }),
                            ],
                        }),
                        (0, i.jsx)(o.W, { isActive: t, className: d().action, radius: 'l' }),
                    ],
                });
            };
            var m = a(89661),
                _ = a.n(m);
            let v = (e) => {
                    let { isActive: t, className: a } = e,
                        { formatMessage: r } = (0, l.A)(),
                        c = (0, n.useMemo)(() => r({ id: 'loading-messages.entity-is-loading' }, { entityName: r({ id: 'entity-names.track' }) }), [r]);
                    return (0, i.jsxs)('div', {
                        'aria-label': c,
                        'aria-live': t ? 'polite' : 'off',
                        'aria-busy': t,
                        className: (0, s.$)(_().root, a),
                        children: [
                            (0, i.jsxs)('div', {
                                className: _().infoContainer,
                                children: [
                                    (0, i.jsx)(o.W, { isActive: t, className: _().cover, radius: 's' }),
                                    (0, i.jsx)('div', { className: _().textContainer, children: (0, i.jsx)(o.W, { isActive: t, className: _().title, radius: 'l' }) }),
                                ],
                            }),
                            (0, i.jsx)(o.W, { isActive: t, className: _().action, radius: 'l' }),
                        ],
                    });
                },
                p = (e) => {
                    let { isActive: t, variant: a, className: s } = e;
                    switch (a) {
                        case r.X.PLAYLIST:
                            return (0, i.jsx)(v, { isActive: t, className: s });
                        case r.X.ALBUM:
                            return (0, i.jsx)(u, { isActive: t, className: s });
                    }
                };
        },
        34783: (e) => {
            e.exports = {
                card_root: 'HorizontalCardContainer_root__YoAAP',
                root: 'PlayButtonWithPosition_root__H5FYg',
                playButton: 'PlayButtonWithPosition_playButton__7cfDQ',
                playButtonIcon: 'PlayButtonWithPosition_playButtonIcon___cLAL',
                playingAnimation: 'PlayButtonWithPosition_playingAnimation__Hy5rC',
                position: 'PlayButtonWithPosition_position__wk3OT',
                root_current: 'PlayButtonWithPosition_root_current__FCDLJ',
                root_playing: 'PlayButtonWithPosition_root_playing__RpnYU',
                root_disabled: 'PlayButtonWithPosition_root_disabled__PMV24',
                root_disliked: 'PlayButtonWithPosition_root_disliked__NIZzA',
                spinner: 'PlayButtonWithPosition_spinner__jNaNf',
            };
        },
        35587: (e) => {
            e.exports = {
                root: 'CommonTrack_root__i6shE',
                root_disabled: 'CommonTrack_root_disabled__vDyCm',
                root_current: 'CommonTrack_root_current__MNrpS',
                ripple: 'CommonTrack_ripple__wnpUs',
            };
        },
        35648: (e, t, a) => {
            (Promise.resolve().then(a.bind(a, 38698)), Promise.resolve().then(a.bind(a, 852)), Promise.resolve().then(a.bind(a, 83276)));
        },
        38403: (e) => {
            e.exports = { trackShimmer: 'MusicHistoryTrack_trackShimmer__yxcx9' };
        },
        38698: (e, t, a) => {
            'use strict';
            a.d(t, { MusicHistoryPageStoreProvider: () => G });
            var i = a(49259),
                r = a(45066),
                s = a(60754),
                n = a(7189),
                l = a(95732);
            let o = (e) => {
                var t, a, i, r;
                let { wave: n, agent: o } = e;
                return (0, s.wg)({
                    ...(0, l.e)({
                        title: n.name,
                        header: n.description,
                        seeds: n.seeds,
                        stationId: null != (r = null != (i = n.stationId) ? i : n.seeds[0]) ? r : '',
                        type: n.type,
                        agent: o,
                        imageUrl: null == o || null == (t = o.cover) ? void 0 : t.uri,
                    }),
                    backgroundColor: null == o || null == (a = o.cover) ? void 0 : a.color,
                });
            };
            var c = a(23361),
                d = a(49399),
                u = a(32012);
            let m = (e) => {
                    let { albumId: t, trackId: a } = e.data.itemId;
                    return t ? ''.concat(a, ':').concat(t) : a;
                },
                _ = (e) => {
                    if ('fullModel' in e.data) {
                        let { fullModel: t } = e.data;
                        return (0, s.wg)({ type: n.D.TRACK, id: m(e), loadingState: d.G.RESOLVE, data: (0, u.v)(t) });
                    }
                    return (0, s.wg)({ type: n.D.TRACK, id: m(e), data: null, loadingState: d.G.IDLE });
                };
            var v = a(74417),
                p = a(27576);
            let h = (e) => e.data.itemId.seeds.sort().join(',');
            var x = a(39031);
            let g = (e) => {
                let { uid: t, kind: a } = e.data.itemId;
                return ''.concat(t, ':').concat(a);
            };
            var y = a(91221);
            let C = (e) => e.data.itemId.seeds.sort().join(','),
                A = (e) => e.data.itemId.seeds.sort().join(','),
                b = (e) => {
                    var t, a;
                    let i =
                        null == (t = e.items)
                            ? void 0
                            : t
                                  .map((e) => {
                                      switch (e.context.type) {
                                          case n.D.ALBUM:
                                              return ((e, t) => {
                                                  let { data: a } = e;
                                                  if ('fullModel' in a) {
                                                      let { fullModel: i } = a;
                                                      return (0, s.wg)({
                                                          type: n.D.ALBUM,
                                                          available: i.available,
                                                          id: e.data.itemId.id,
                                                          meta: (0, c.s)({ album: i.album, artists: i.artists }),
                                                          loadingState: d.G.RESOLVE,
                                                          tracks: t.map(_),
                                                      });
                                                  }
                                                  return (0, s.wg)({
                                                      type: n.D.ALBUM,
                                                      available: !0,
                                                      id: e.data.itemId.id,
                                                      meta: null,
                                                      loadingState: d.G.IDLE,
                                                      tracks: t.map(_),
                                                  });
                                              })(e.context, e.tracks);
                                          case n.D.PLAYLIST:
                                              return ((e, t) => {
                                                  let { data: a, type: i } = e;
                                                  if ('fullModel' in a) {
                                                      let { fullModel: r } = a;
                                                      return (0, s.wg)({
                                                          type: i,
                                                          id: g(e),
                                                          meta: { ...(0, x.b)({ playlist: r.playlist }), tracksCount: r.tracksCount },
                                                          loadingState: d.G.RESOLVE,
                                                          tracks: t.map(_),
                                                      });
                                                  }
                                                  return (0, s.wg)({ type: n.D.PLAYLIST, id: g(e), meta: null, loadingState: d.G.IDLE, tracks: t.map(_) });
                                              })(e.context, e.tracks);
                                          case n.D.ARTIST:
                                              return ((e, t) => {
                                                  let { data: a, type: i } = e;
                                                  if ('fullModel' in a) {
                                                      let { fullModel: r } = a;
                                                      return (0, s.wg)({
                                                          type: i,
                                                          available: r.available,
                                                          id: e.data.itemId.id,
                                                          meta: (0, v.a)({ artist: r.artist }),
                                                          loadingState: d.G.RESOLVE,
                                                          tracks: t.map(_),
                                                      });
                                                  }
                                                  return (0, s.wg)({
                                                      type: i,
                                                      available: !0,
                                                      id: e.data.itemId.id,
                                                      meta: null,
                                                      loadingState: d.G.IDLE,
                                                      tracks: t.map(_),
                                                  });
                                              })(e.context, e.tracks);
                                          case n.D.WAVE:
                                              return ((e, t) => {
                                                  let { data: a, type: i } = e;
                                                  if ('fullModel' in a) {
                                                      let { fullModel: r } = a;
                                                      return (0, s.wg)({
                                                          type: i,
                                                          id: A(e),
                                                          meta: {
                                                              ...(0, l.e)(r.wave),
                                                              imageUrl: r.simpleWaveForegroundImageUrl,
                                                              backgroundColor: r.simpleWaveBackgroundColor,
                                                          },
                                                          loadingState: d.G.RESOLVE,
                                                          tracks: t.map(_),
                                                      });
                                                  }
                                                  return (0, s.wg)({ type: i, id: A(e), meta: null, loadingState: d.G.IDLE, tracks: t.map(_) });
                                              })(e.context, e.tracks);
                                          case n.D.MULTIVIBE_WAVE:
                                              return ((e, t) => {
                                                  let { data: a } = e;
                                                  return 'fullModel' in a
                                                      ? (0, s.wg)({
                                                            type: n.D.MULTIVIBE_WAVE,
                                                            id: h(e),
                                                            meta: o(a.fullModel),
                                                            loadingState: d.G.RESOLVE,
                                                            tracks: t.map(_),
                                                        })
                                                      : (0, s.wg)({ type: n.D.MULTIVIBE_WAVE, id: h(e), meta: null, loadingState: d.G.IDLE, tracks: t.map(_) });
                                              })(e.context, e.tracks);
                                          case n.D.SEARCH:
                                          case n.D.OTHER:
                                              return ((e, t) => {
                                                  let { type: a } = e;
                                                  return (0, s.wg)({ type: a, id: (0, p.A)(), tracks: t.map(_) });
                                              })(e.context, e.tracks);
                                          case n.D.QUERY_TO_VIBE:
                                              return ((e, t) => {
                                                  let { data: a } = e;
                                                  if ('fullModel' in a) {
                                                      let { fullModel: i } = a;
                                                      return (0, s.wg)({
                                                          type: n.D.QUERY_TO_VIBE,
                                                          id: C(e),
                                                          meta: { ...(0, y.l)(i.wave, i.agent) },
                                                          loadingState: d.G.RESOLVE,
                                                          tracks: t.map(_),
                                                      });
                                                  }
                                                  return (0, s.wg)({ type: n.D.QUERY_TO_VIBE, id: C(e), meta: null, loadingState: d.G.IDLE, tracks: t.map(_) });
                                              })(e.context, e.tracks);
                                          default:
                                              return null;
                                      }
                                  })
                                  .filter((e) => e);
                    return { date: e.date, blocks: null != (a = (0, s.wg)(i)) ? a : null };
                },
                f = (e) => (null == e ? void 0 : e.type) === n.D.WAVE || (null == e ? void 0 : e.type) === n.D.MULTIVIBE_WAVE;
            var T = a(73715);
            let k = s.gK.compose(
                s.gK.model({
                    id: s.gK.string,
                    type: s.gK.enumeration(Object.values(n.D)),
                    tabIndex: s.gK.number,
                    blockIndex: s.gK.number,
                    trackIndex: s.gK.maybeNull(s.gK.number),
                }),
                T.X,
            );
            var S = a(12388),
                E = a(72676);
            let I = (e) => ({ type: E.z4.Unloaded, meta: { id: e.entityId } });
            var N = a(99212);
            let L = s.gK
                    .compose(s.gK.model('MusicHistoryTrack', { type: s.gK.literal(n.D.TRACK), id: s.gK.string, data: s.gK.maybeNull(N.v) }), T.X)
                    .views((e) => ({
                        get key() {
                            return ''.concat(e.type, '_').concat(e.id);
                        },
                        get isShimmerVisible() {
                            return e.isNeededToLoad || e.isLoading || e.isRejected;
                        },
                        get isShimmerActive() {
                            return e.isLoading;
                        },
                        get entityId() {
                            var t;
                            if (!e.data) return e.id;
                            let { id: a, albums: i } = e.data,
                                r = null == (t = i[0]) ? void 0 : t.id;
                            return r ? ''.concat(a, ':').concat(r) : a;
                        },
                    }))
                    .named('MusicHistoryPlaylist'),
                j = s.gK.compose(s.gK.model('MusicHistoryBaseBlock', { id: s.gK.string, tracks: s.gK.array(L) }), T.X).views((e) => ({
                    get isShimmerVisible() {
                        return e.isNeededToLoad || e.isLoading || e.isRejected;
                    },
                    get isShimmerActive() {
                        return e.isLoading;
                    },
                    get contextId() {
                        return e.id;
                    },
                    get entitiesData() {
                        return e.tracks.map(I);
                    },
                })),
                R = j
                    .props({ type: s.gK.literal(n.D.ALBUM), available: s.gK.boolean, meta: s.gK.maybeNull(S.J) })
                    .views((e) => ({
                        get key() {
                            return ''.concat(e.type, '_').concat(e.id);
                        },
                        get autoflowSeeds() {
                            var t;
                            return ['album:'.concat(null == (t = e.meta) ? void 0 : t.id)];
                        },
                    }))
                    .named('MusicHistoryAlbum');
            var w = a(57367);
            let M = j
                    .props({ type: s.gK.literal(n.D.ARTIST), available: s.gK.boolean, meta: s.gK.maybeNull(w.P) })
                    .views((e) => ({
                        get key() {
                            return ''.concat(e.type, '_').concat(e.id);
                        },
                        get autoflowSeeds() {
                            var t;
                            return ['artist:'.concat(null == (t = e.meta) ? void 0 : t.id)];
                        },
                    }))
                    .named('MusicHistoryArtist'),
                O = s.gK
                    .model('MusicHistoryCommon', { id: s.gK.string, type: s.gK.union(s.gK.literal(n.D.OTHER), s.gK.literal(n.D.SEARCH)), tracks: s.gK.array(L) })
                    .views((e) => ({
                        get key() {
                            return ''.concat(e.type, '_').concat(e.id);
                        },
                        get contextId() {
                            return e.tracks.map((e) => e.id).join(',');
                        },
                        get entitiesData() {
                            return e.tracks.map(I);
                        },
                    }));
            var P = a(5482);
            let D = j
                .props({ type: s.gK.literal(n.D.PLAYLIST), meta: s.gK.maybeNull(P.I) })
                .views((e) => ({
                    get key() {
                        return ''.concat(e.type, '_').concat(e.id);
                    },
                    get autoflowSeeds() {
                        var t, a;
                        return ['playlist:'.concat(null == (t = e.meta) ? void 0 : t.uid, '_').concat(null == (a = e.meta) ? void 0 : a.kind)];
                    },
                }))
                .named('MusicHistoryPlaylist');
            var B = a(1052),
                H = a(8322);
            let K = j
                    .props({
                        id: s.gK.string,
                        type: s.gK.union(s.gK.literal(n.D.WAVE), s.gK.literal(n.D.MULTIVIBE_WAVE), s.gK.literal(n.D.QUERY_TO_VIBE)),
                        meta: s.gK.maybeNull(B.G),
                    })
                    .views((e) => ({
                        get key() {
                            return ''.concat(e.type, '_').concat(e.id);
                        },
                        get contextId() {
                            var t, a;
                            return null != (a = null == (t = e.meta) ? void 0 : t.stationId) ? a : H.M1;
                        },
                        get autoflowSeeds() {
                            var i;
                            return null == (i = e.meta) ? void 0 : i.seeds;
                        },
                        get isMultivibe() {
                            return e.type === n.D.MULTIVIBE_WAVE;
                        },
                    })),
                U = s.gK.union(R, M, D, K, O),
                V = s.gK.model('MusicHistoryTab', { date: s.gK.string, blocks: s.gK.maybeNull(s.gK.array(U)) }),
                W = s.gK
                    .compose(
                        s.gK.model('MusicHistoryPage', {
                            indexesMap: s.gK.map(s.gK.number),
                            items: s.gK.maybeNull(s.gK.array(k)),
                            datesMap: s.gK.map(s.gK.boolean),
                            tabs: s.gK.maybeNull(s.gK.array(V)),
                        }),
                        T.X,
                    )
                    .views((e) => {
                        let t = {
                            get isEmpty() {
                                var a;
                                return (e.isResolved || e.isRejected) && (null == (a = e.tabs) ? void 0 : a.length) === 0;
                            },
                            get isShimmerVisible() {
                                return e.isNeededToLoad || e.isLoading || e.isRejected;
                            },
                            get isShimmerActive() {
                                return e.isLoading;
                            },
                            getStartAndEndIndexes(t) {
                                var a, i;
                                let r = t,
                                    s = t + 1;
                                return (
                                    (null == (a = e.items) ? void 0 : a.slice(t - 25 + 1, t).some((e) => !e.isResolved)) && (r = t - 25 + 1),
                                    (null == (i = e.items) ? void 0 : i.slice(t, t + 25).some((e) => !e.isResolved)) && (s = t + 25),
                                    [r, s]
                                );
                            },
                            getItemsToLoad(a) {
                                var i, r;
                                let [s, n] = t.getStartAndEndIndexes(a);
                                return null != (r = null == (i = e.items) ? void 0 : i.slice(s, n).filter((e) => !e.isResolved)) ? r : [];
                            },
                            isInObservationRange(t) {
                                var a;
                                return (0 !== t && t % 25 == 0) || (e.items && t === (null == (a = e.items) ? void 0 : a.length) - 1);
                            },
                            get dates() {
                                var i, r;
                                return null != (r = null == (i = e.tabs) ? void 0 : i.map((e) => e.date)) ? r : [];
                            },
                        };
                        return t;
                    })
                    .actions((e) => {
                        let t = {
                            fillItemsAndIndexes() {
                                var t;
                                let a = 0;
                                ((e.items = (0, s.wg)([])),
                                    null == (t = e.tabs) ||
                                        t.forEach((t, i) => {
                                            var r;
                                            (e.datesMap.set(t.date, !1),
                                                null == (r = t.blocks) ||
                                                    r.forEach((t, r) => {
                                                        var s;
                                                        let n = t.id;
                                                        (e.indexesMap.set(''.concat(i, '_').concat(r, '_').concat(n), a),
                                                            null == (s = e.items) ||
                                                                s.push({
                                                                    id: n,
                                                                    type: t.type,
                                                                    tabIndex: i,
                                                                    blockIndex: r,
                                                                    trackIndex: null,
                                                                    loadingState: a < 25 ? d.G.RESOLVE : d.G.IDLE,
                                                                }),
                                                            ++a,
                                                            t.tracks.forEach((t, s) => {
                                                                var n;
                                                                (e.indexesMap.set(''.concat(i, '_').concat(r, '_').concat(s, '_').concat(t.id), a),
                                                                    null == (n = e.items) ||
                                                                        n.push({
                                                                            id: t.id,
                                                                            type: t.type,
                                                                            tabIndex: i,
                                                                            blockIndex: r,
                                                                            trackIndex: s,
                                                                            loadingState: a < 25 ? d.G.RESOLVE : d.G.IDLE,
                                                                        }),
                                                                    ++a);
                                                            }));
                                                    }));
                                        }));
                            },
                            setTrack(t, a) {
                                var i, r, s, n;
                                let { tabIndex: l, blockIndex: o, trackIndex: c } = t,
                                    { fullModel: m } = a.data;
                                if (null === c) return;
                                let _ = null == (n = e.tabs) || null == (s = n[l]) || null == (r = s.blocks) || null == (i = r[o]) ? void 0 : i.tracks[c];
                                _ && ((_.data = (0, u.v)(m)), (_.loadingState = d.G.RESOLVE));
                            },
                            setAlbum(t, a) {
                                var i, r, s;
                                let { tabIndex: l, blockIndex: o } = t,
                                    { fullModel: u } = a.data,
                                    m = null == (s = e.tabs) || null == (r = s[l]) || null == (i = r.blocks) ? void 0 : i[o];
                                (null == m ? void 0 : m.type) === n.D.ALBUM &&
                                    ((m.meta = (0, c.s)({ album: u.album, artists: u.artists })), (m.loadingState = d.G.RESOLVE));
                            },
                            setArtist(t, a) {
                                var i, r, s;
                                let { tabIndex: l, blockIndex: o } = t,
                                    { fullModel: c } = a.data,
                                    u = null == (s = e.tabs) || null == (r = s[l]) || null == (i = r.blocks) ? void 0 : i[o];
                                (null == u ? void 0 : u.type) === n.D.ARTIST && ((u.meta = (0, v.a)({ artist: c.artist })), (u.loadingState = d.G.RESOLVE));
                            },
                            setPlaylist(t, a) {
                                var i, r, s;
                                let { tabIndex: l, blockIndex: o } = t,
                                    { fullModel: c } = a.data,
                                    u = null == (s = e.tabs) || null == (r = s[l]) || null == (i = r.blocks) ? void 0 : i[o];
                                (null == u ? void 0 : u.type) === n.D.PLAYLIST &&
                                    ((u.meta = { ...(0, x.b)({ playlist: c.playlist }), tracksCount: c.tracksCount }), (u.loadingState = d.G.RESOLVE));
                            },
                            setVibe(t, a) {
                                var i, r, s;
                                let { tabIndex: n, blockIndex: o } = t,
                                    { fullModel: c } = a.data,
                                    u = null == (s = e.tabs) || null == (r = s[n]) || null == (i = r.blocks) ? void 0 : i[o];
                                f(u) &&
                                    ((u.meta = { ...(0, l.e)(c.wave), imageUrl: c.simpleWaveForegroundImageUrl, backgroundColor: c.simpleWaveBackgroundColor }),
                                    (u.loadingState = d.G.RESOLVE));
                            },
                            setMultivibe(t, a) {
                                var i, r, s;
                                let { tabIndex: n, blockIndex: l } = t,
                                    { fullModel: c } = a.data,
                                    u = null == (s = e.tabs) || null == (r = s[n]) || null == (i = r.blocks) ? void 0 : i[l];
                                f(u) && ((u.meta = o(c)), (u.loadingState = d.G.RESOLVE));
                            },
                            getMusicHistory: (0, s.L3)(function* () {
                                let { musicHistoryResource: a, modelActionsLogger: i } = (0, s._$)(e);
                                if (e.loadingState !== d.G.PENDING)
                                    try {
                                        e.loadingState = d.G.PENDING;
                                        let i = yield a.getMusicHistory({ fullModelsCount: 25 }),
                                            r = ((e) => {
                                                let t = { historyTabs: [] },
                                                    a = 0;
                                                for (let s of e.historyTabs) {
                                                    var i, r;
                                                    if (a > 1e3) break;
                                                    let e = { ...s, items: [] };
                                                    for (let t of null != (i = s.items) ? i : []) {
                                                        if (a > 1e3) break;
                                                        let i = { ...t, tracks: [] };
                                                        for (let e of t.tracks) {
                                                            if (a > 1e3) break;
                                                            (i.tracks.push(e), ++a);
                                                        }
                                                        null == (r = e.items) || r.push(i);
                                                    }
                                                    e.items && e.items.length > 0 && t.historyTabs.push(e);
                                                }
                                                return t;
                                            })(i);
                                        ((e.tabs = (0, s.wg)(r.historyTabs.map(b))), t.fillItemsAndIndexes(), (e.loadingState = d.G.RESOLVE));
                                    } catch (t) {
                                        (i.error(t), (e.loadingState = d.G.REJECT));
                                    }
                            }),
                            getItems: (0, s.L3)(function* (a) {
                                let { musicHistoryResource: i, modelActionsLogger: r } = (0, s._$)(e);
                                try {
                                    let r = e.getItemsToLoad(a);
                                    r.forEach((e) => {
                                        e.loadingState = d.G.RESOLVE;
                                    });
                                    let s = yield i.getMusicHistoryItems({
                                            items: r
                                                .map((e) => {
                                                    switch (e.type) {
                                                        case n.D.ARTIST:
                                                        case n.D.ALBUM:
                                                            return { type: e.type, data: { itemId: { id: e.id } } };
                                                        case n.D.PLAYLIST: {
                                                            let [t, a] = e.id.split(':');
                                                            return { type: e.type, data: { itemId: { uid: Number(t), kind: Number(a) } } };
                                                        }
                                                        case n.D.WAVE:
                                                        case n.D.MULTIVIBE_WAVE:
                                                            return { type: e.type, data: { itemId: { seeds: e.id.split(',') } } };
                                                        case n.D.TRACK: {
                                                            let [t, a] = e.id.split(':');
                                                            return { type: e.type, data: { itemId: { trackId: String(t), albumId: a } } };
                                                        }
                                                        default:
                                                            return null;
                                                    }
                                                })
                                                .filter((e) => e),
                                        }),
                                        l = r.reduce((e, t) => {
                                            let a = ''.concat(t.type, '_').concat(t.id);
                                            if (a in e) {
                                                var i;
                                                null == (i = e[a]) || i.push(t);
                                            } else e[a] = [t];
                                            return e;
                                        }, {});
                                    s.items.forEach((e) => {
                                        var a;
                                        null ==
                                            (a =
                                                l[
                                                    ((e) => {
                                                        switch (e.type) {
                                                            case n.D.ALBUM:
                                                                return ''.concat(e.type, '_').concat(e.data.itemId.id);
                                                            case n.D.TRACK:
                                                                return ''.concat(e.type, '_').concat(m(e));
                                                            case n.D.WAVE:
                                                                return ''.concat(e.type, '_').concat(A(e));
                                                            case n.D.MULTIVIBE_WAVE:
                                                                return ''.concat(e.type, '_').concat(h(e));
                                                            case n.D.PLAYLIST:
                                                                return ''.concat(e.type, '_').concat(g(e));
                                                            case n.D.ARTIST:
                                                                return ''.concat(e.type, '_').concat(e.data.itemId.id);
                                                            case n.D.QUERY_TO_VIBE:
                                                                return ''.concat(e.type, '_').concat(C(e));
                                                        }
                                                    })(e)
                                                ]) ||
                                            a.forEach((a) => {
                                                switch (e.type) {
                                                    case n.D.ALBUM:
                                                        t.setAlbum(a, e);
                                                        break;
                                                    case n.D.TRACK:
                                                        t.setTrack(a, e);
                                                        break;
                                                    case n.D.WAVE:
                                                        t.setVibe(a, e);
                                                        break;
                                                    case n.D.MULTIVIBE_WAVE:
                                                        t.setMultivibe(a, e);
                                                        break;
                                                    case n.D.PLAYLIST:
                                                        t.setPlaylist(a, e);
                                                        break;
                                                    case n.D.ARTIST:
                                                        t.setArtist(a, e);
                                                }
                                                a.loadingState = d.G.RESOLVE;
                                            });
                                    });
                                } catch (e) {
                                    r.error(e);
                                }
                            }),
                            setDatesMap(t, a) {
                                e.datesMap.set(t, a);
                            },
                            reset() {
                                ((e.items = null), (e.tabs = null), e.indexesMap.clear(), e.datesMap.clear(), (e.loadingState = d.G.IDLE));
                            },
                        };
                        return t;
                    }),
                Y = { loadingState: d.G.IDLE, indexesMap: {}, items: null, datesMap: {}, tabs: null },
                { pageStoreProvider: z } = (0, i.W)({ createStore: (e) => W.create(Y, e), patchKey: r.n.MUSIC_HISTORY }),
                G = z;
        },
        40053: (e, t, a) => {
            'use strict';
            a.d(t, { f: () => s });
            var i = a(57594),
                r = a(79406);
            let s = () => {
                let {
                        experiments: e,
                        user: { hasPlus: t, isLumenAvailable: a },
                    } = (0, i.g)(),
                    s = e.checkExperiment(r.z.WebNextQueryToVibeLumenOptionCheck, 'on');
                return t && e.checkExperiment(r.z.WebNextQueryToVibe, 'on') && (!s || !!a);
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
        41566: (e, t, a) => {
            'use strict';
            a.d(t, { U: () => d });
            var i = a(32290),
                r = a(96103),
                s = a(21732),
                n = a(82586),
                l = a(19740),
                o = a(30542),
                c = a(57594);
            let d = (0, r.PA)((e) => {
                let { isLiked: t, onClick: a, className: r, albumType: d, disabled: u } = e,
                    { user: m } = (0, c.g)(),
                    _ = t ? 'liked' : 'like',
                    v = (0, o.$)(t, d);
                return (0, i.jsx)(l.Dr, {
                    className: r,
                    onClick: a,
                    icon: (0, i.jsx)(n.I, { variant: _, size: 'xxs' }),
                    'aria-pressed': t,
                    disabled: u || !m.isAuthorized,
                    'data-test-id': s.S7.CONTEXT_MENU_SUBSCRIBE_BUTTON,
                    children: v,
                });
            });
        },
        41677: (e, t, a) => {
            'use strict';
            a.d(t, { i: () => K });
            var i = a(32290),
                r = a(63618),
                s = a(96103),
                n = a(55178),
                l = a(70280),
                o = a(57594),
                c = a(53514),
                d = a(40484),
                u = a.n(d),
                m = a(60900),
                _ = a(99923),
                v = a(21732),
                p = a(91027),
                h = a(71926),
                x = a(47745),
                g = a(32641),
                y = a(28999),
                C = a(61258),
                A = a(19383);
            let b = (0, s.PA)((e) => {
                    let {
                            artist: t,
                            withLink: a = !0,
                            linkClassName: r,
                            captionClassName: s,
                            captionSize: n = 'm',
                            allArtistsTitle: c,
                            withCustomTooltip: d,
                            hoverSettings: u,
                        } = e,
                        { formatMessage: b } = (0, m.A)(),
                        {
                            track: f,
                            settings: { isMobile: T },
                        } = (0, o.g)(),
                        k = (0, g.Z)(t.url),
                        { sendNavigateSearchFeedback: S } = (0, y.z)(),
                        E = (0, x.N)(),
                        I = ((e) => {
                            let { artist: t, callback: a } = e,
                                { currentTrackInfo: i, fullscreenPlayer: r, fullscreenVideoPlayer: s } = (0, o.g)(),
                                { modal: n } = i;
                            return (0, A.l)({
                                entity: t,
                                callback: a,
                                onBeforeHandle: (e) => {
                                    (null == e || e.stopPropagation(), n.isOpened && (i.reset(), n.close()), r.modal.isOpened && r.modal.close());
                                },
                                onAfterHandled: () => {
                                    s.modal.isOpened && (s.modal.close(), s.reset());
                                },
                                preventDefaultWhenSafe: !0,
                            });
                        })({
                            artist: t,
                            callback: (0, p.c)((e) => {
                                (T && f.isOpened && f.close(), k(e));
                            }),
                        }),
                        N = (0, p.c)((e) => {
                            (E({ to: _.AppScreen.ArtistScreen }), null == S || S(), I(e));
                        });
                    return a && !t.various
                        ? (0, i.jsx)(C.N, {
                              'aria-label': b({ id: 'entity-names.artist-name' }, { artistName: t.name }),
                              className: r,
                              href: t.url,
                              onClick: N,
                              title: d ? void 0 : c || t.name,
                              'data-test-id': v.OA.artists.SEPARATED_ARTIST_TITLE,
                              children: (0, i.jsx)(l.m_, {
                                  enabled: !c && d,
                                  offsetOptions: 4,
                                  placement: 'top',
                                  text: c || t.name,
                                  hoverSettings: u,
                                  children: (0, i.jsx)(h.HL, { variant: 'span', type: 'entity', size: n, weight: 'medium', className: s, children: t.name }),
                              }),
                          })
                        : (0, i.jsx)(l.m_, {
                              enabled: !c && d,
                              offsetOptions: 4,
                              placement: 'top',
                              text: c || t.name,
                              hoverSettings: u,
                              children: (0, i.jsx)(h.HL, {
                                  variant: 'span',
                                  type: 'entity',
                                  size: n,
                                  weight: 'medium',
                                  className: s,
                                  title: d ? void 0 : c || t.name,
                                  'data-test-id': v.OA.artists.SEPARATED_ARTIST_TITLE,
                                  children: t.name,
                              }),
                          });
                }),
                f = (e) => {
                    let {
                            artist: t,
                            withLink: a = !0,
                            linkClassName: r,
                            captionClassName: s,
                            captionSize: l,
                            allArtistsTitle: o,
                            withCustomTooltip: c,
                            hoverSettings: d,
                            shouldUseSeparator: u = !0,
                        } = e,
                        m = (0, n.useMemo)(() => {
                            var e;
                            return null == (e = t.decomposed)
                                ? void 0
                                : e.reduce(
                                      (e, t) =>
                                          e.concat([
                                              u ? t.separator : '',
                                              (0, i.jsx)(
                                                  b,
                                                  {
                                                      artist: t,
                                                      withLink: a,
                                                      linkClassName: r,
                                                      captionClassName: s,
                                                      captionSize: l,
                                                      allArtistsTitle: o,
                                                      withCustomTooltip: c,
                                                      hoverSettings: d,
                                                  },
                                                  t.id,
                                              ),
                                          ]),
                                      [],
                                  );
                        }, [t.decomposed, u, a, r, s, l, o, c, d]);
                    return (0, i.jsxs)(i.Fragment, {
                        children: [
                            (0, i.jsx)(b, {
                                artist: t,
                                withLink: a,
                                linkClassName: r,
                                captionClassName: s,
                                captionSize: l,
                                allArtistsTitle: o,
                                withCustomTooltip: c,
                                hoverSettings: d,
                            }),
                            m,
                        ],
                    });
                };
            var T = a(39407),
                k = a(63887);
            let S = (e) => {
                let { spoilerArtistsCount: t, spoilerClassName: a, handleOnSpoilerClick: s } = e;
                return (0, i.jsxs)(i.Fragment, {
                    children: [
                        ' ',
                        (0, i.jsx)(k.N, {
                            role: 'button',
                            href: '',
                            className: (0, r.$)(u().spoiler, a),
                            onClick: s,
                            rel: 'nofollow',
                            'data-test-id': v.OA.artists.SEPARATED_ARTISTS_SPOILER,
                            children: (0, i.jsx)(T.A, { id: 'entity-names.number-of-more-artists', values: { counter: t } }),
                        }),
                    ],
                });
            };
            var E = a(8055),
                I = a(6752),
                N = a(78035),
                L = a(78176),
                j = a(83598),
                R = a.n(j);
            let w = (0, s.PA)((e) => {
                    let { label: t, artists: a, forwardRef: r } = e;
                    return (0, i.jsxs)(l.m_, {
                        enableAriaDescribedby: !1,
                        isFocusEnabled: !1,
                        placement: 'top',
                        hoverSettings: { delay: 200, handleClose: (0, N.safePolygon)({ blockPointerEvents: !0 }) },
                        children: [
                            (0, i.jsx)('div', { ref: r, children: t }),
                            (0, i.jsx)(l.ZI, { className: R().tooltipContent, children: a.map((e) => (0, i.jsx)(L.V, { artist: e, className: R().artistItem }, e.id)) }),
                        ],
                    });
                }),
                M = (0, n.forwardRef)((e, t) => (0, i.jsx)(w, { forwardRef: t, ...e }));
            var O = a(19740),
                P = a(52598),
                D = a.n(P);
            let B = (0, s.PA)((e) => {
                    let { label: t, artists: a } = e,
                        { formatMessage: s } = (0, m.A)();
                    return (0, i.jsx)(O.W1, {
                        isMobile: !0,
                        className: (0, r.$)(D().root, D().important),
                        label: t,
                        ariaLabel: s({ id: 'interface-actions.context-menu-artists' }),
                        children: a.map((e) => (0, i.jsx)(L.V, { artist: e }, e.id)),
                    });
                }),
                H = (0, s.PA)((e) => {
                    let { artists: t = [], label: a, labelRef: r } = e,
                        [s, l] = (0, n.useState)(!1),
                        {
                            settings: { isMobile: c },
                        } = (0, o.g)(),
                        d = (0, p.c)(() => {
                            let e = r.current;
                            e && l(e.scrollHeight > e.clientHeight || e.scrollWidth > e.clientWidth);
                        }),
                        u = (0, I.L)(() =>
                            (0, E.A)(() => {
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
                        return (s || c) && (!c || 1 !== t.length) ? (c ? (0, i.jsx)(B, { artists: t, label: a }) : (0, i.jsx)(M, { artists: t, label: a })) : a;
                }),
                K = (0, s.PA)((e) => {
                    let {
                            className: t,
                            artists: a = [],
                            separator: s = ', ',
                            lineClamp: d,
                            visibleArtistsCount: m,
                            withLink: _ = !0,
                            spoilerClassName: v,
                            linkClassName: p,
                            captionClassName: h,
                            captionSize: x,
                            variant: g = 'breakAll',
                            withAllArtistsTitle: y = !0,
                            withComposer: C = !0,
                            spoilerComponent: A,
                            withCustomTooltip: b = !0,
                            artistIdWithoutLink: T,
                            withContextMenu: k,
                        } = e,
                        E = (0, n.useRef)(null),
                        [I, N] = (0, n.useState)(!1),
                        L = y
                            ? a
                                  .reduce(function () {
                                      let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
                                          t = arguments.length > 1 ? arguments[1] : void 0;
                                      if (t.decomposed) {
                                          let a = t.decomposed.reduce((e, t) => e.concat([t.name]), []);
                                          return e.length ? e.concat([t.name, ...a]) : [t.name, ...a];
                                      }
                                      return e.length ? (e.push(t.name), e) : [t.name];
                                  }, [])
                                  .join(s)
                            : '',
                        {
                            settings: { isMobile: j },
                        } = (0, o.g)(),
                        R = 1 === a.length,
                        w = (0, n.useCallback)((e) => {
                            (N(!0), e.preventDefault());
                        }, []),
                        M = (0, n.useMemo)(() => {
                            let e = a;
                            return (
                                m && !I && (e = a.slice(0, m)),
                                e.reduce((e, t) => {
                                    if (!C && t.isComposer) return e.length ? e : [];
                                    let a = (0, i.jsx)(
                                        f,
                                        {
                                            artist: t,
                                            linkClassName: p,
                                            captionClassName: h,
                                            withLink: _ && t.id !== T && (((!j || R) && k) || !k),
                                            captionSize: x,
                                            allArtistsTitle: L,
                                            withCustomTooltip: b,
                                            hoverSettings: c.V,
                                            shouldUseSeparator: !!s,
                                        },
                                        t.key,
                                    );
                                    return e.length ? e.concat([s, a]) : [a];
                                }, [])
                            );
                        }, [a, m, I, C, j, R, k, p, h, _, T, x, L, b, s]),
                        O = (0, n.useMemo)(() => {
                            if (!I && m && m < a.length) {
                                let e = a.length - m;
                                return (0, n.isValidElement)(A) ? A : (0, i.jsx)(S, { spoilerClassName: v, spoilerArtistsCount: e, handleOnSpoilerClick: w });
                            }
                        }, [a.length, w, I, v, A, m]),
                        P = (0, n.useMemo)(() => {
                            if (d) return { WebkitLineClamp: d };
                        }, [d]),
                        D = (0, i.jsx)(l.m_, {
                            referenceRef: E,
                            enabled: !!(y && L) && b && !k && !j,
                            offsetOptions: 4,
                            placement: 'top',
                            text: L,
                            hoverSettings: c.V,
                            children: (0, i.jsxs)('div', {
                                style: P,
                                className: (0, r.$)(u().root, u()['root_variant_'.concat(g)], { [u().root_clamp]: d && d > 0 }, { [u().ellipsis]: !d }, t),
                                title: y && L && !b && !k ? L : void 0,
                                children: [M, O],
                            }),
                        });
                    return k ? (0, i.jsx)(H, { labelRef: E, artists: a, label: D }) : D;
                });
        },
        43565: (e, t, a) => {
            'use strict';
            a.d(t, { O: () => o });
            var i = a(32290),
                r = a(63618),
                s = a(82586),
                n = a(20753),
                l = a.n(n);
            let o = (e) => {
                let { isDragging: t, className: a } = e;
                return (0, i.jsx)(s.I, { variant: 'dragDots', size: 'xxs', className: (0, r.$)(l().root, { [l().root_active]: t }, a), 'aria-hidden': !0 });
            };
        },
        45066: (e, t, a) => {
            'use strict';
            a.d(t, { n: () => i });
            let i = {
                MIXES: 'pages/mixes',
                TAG: 'pages/tag',
                GENRES: 'pages/genres',
                PROMOLANDING: 'pages/promolanding',
                MUSIC_HISTORY: 'pages/music-history',
                POST: 'pages/post',
                PLAYLIST_PERSONAL: 'pages/playlist-personal',
                MY_MUSIC: 'pages/my-music',
                FAVORITE_TRACKS: 'pages/favorite-tracks',
                CONCERTS_DETAILS: 'pages/concerts-details',
                LANDING_PROMO_PREVIEW: 'pages/landing-promo-preview',
                LABEL: 'pages/label',
                GENRE: 'pages/genre',
                CHART: 'pages/chart',
            };
        },
        45807: (e, t, a) => {
            'use strict';
            a.d(t, { Y: () => d });
            var i,
                r = a(95716),
                s = a(55178),
                n = {
                    352: (e) => {
                        e.exports = r;
                    },
                    810: (e) => {
                        e.exports = i || (i = a.t(s, 2));
                    },
                },
                l = {};
            function o(e) {
                var t = l[e];
                if (void 0 !== t) return t.exports;
                var a = (l[e] = { exports: {} });
                return (n[e](a, a.exports, o), a.exports);
            }
            var c = {};
            ((() => {
                (Object.defineProperty(c, 'X', { value: !0 }), (c.l = void 0));
                let e = o(810),
                    t = o(352);
                c.l = (a) => {
                    let [i, r] = (0, e.useState)(!0),
                        [s, n] = (0, e.useState)(!0),
                        l = () => {
                            let e = null == a ? void 0 : a.current;
                            e && (r(0 === e.scrollLeft), n(e.scrollWidth - e.scrollLeft <= e.offsetWidth + 10));
                        };
                    ((0, e.useEffect)(() => {
                        l();
                    }, [a, l]),
                        (0, e.useEffect)(() => {
                            let e = null == a ? void 0 : a.current;
                            return (
                                null == e || e.addEventListener('scroll', l),
                                window.addEventListener('resize', l),
                                () => {
                                    (null == e || e.removeEventListener('scroll', l), window.removeEventListener('resize', l));
                                }
                            );
                        }, [a, l]));
                    let o = (0, e.useMemo)(
                        () =>
                            (0, t.throttle)(
                                () => {
                                    a && a.current && (a.current.scrollLeft += a.current.offsetWidth / 2);
                                },
                                420,
                                { trailing: !1 },
                            ),
                        [a],
                    );
                    return {
                        swipeBackward: (0, e.useMemo)(
                            () =>
                                (0, t.throttle)(
                                    () => {
                                        a && a.current && (a.current.scrollLeft -= a.current.offsetWidth / 2);
                                    },
                                    420,
                                    { trailing: !1 },
                                ),
                            [a],
                        ),
                        swipeForward: o,
                        shouldBackwardButtonBeDisabled: i,
                        shouldForwardButtonBeDisabled: s,
                        shouldHideControls: i && s,
                    };
                };
            })(),
                c.X);
            var d = c.l;
        },
        48736: (e) => {
            e.exports = { root: 'TooltipWithTitle_root__7jLY3', text: 'TooltipWithTitle_text__ElBtq', description: 'TooltipWithTitle_description__HsGcR' };
        },
        49259: (e, t, a) => {
            'use strict';
            a.d(t, { W: () => h, s: () => x });
            var i = a(32290),
                r = a(96103),
                s = a(21916),
                n = a(55178),
                l = a(85472),
                o = a(25090),
                c = a(96218),
                d = a(5245),
                u = a(57594),
                m = a(31726);
            (0, r.eO)(!1);
            let _ = (0, n.createContext)(null),
                v = (e) => {
                    let { children: t, store: a, storeKey: r } = e,
                        s = (0, n.useMemo)(() => ({ store: a, storeKey: r }), [a, r]);
                    return (0, i.jsx)(_.Provider, { value: s, children: t });
                },
                p = (e) => {
                    let { nonce: t, patchKey: a, patchesRef: r } = e;
                    return (
                        (0, s.useServerInsertedHTML)(() => {
                            let e = r.current;
                            return ((r.current = []), 0 === e.length)
                                ? null
                                : (0, i.jsx)('script', {
                                      dangerouslySetInnerHTML: {
                                          __html: ((e, t) =>
                                              "\n        window.__PAGE_STATE_PATCHES__ = window.__PAGE_STATE_PATCHES__ || {};\n        window.__PAGE_STATE_PATCHES__['"
                                                  .concat(e, "'] =\n            window.__PAGE_STATE_PATCHES__['")
                                                  .concat(e, "'] || [];\n        window.__PAGE_STATE_PATCHES__['")
                                                  .concat(e, "'].push(")
                                                  .concat((0, l.stringifyJSONSafely)(t), ");\n        window.dispatchEvent(new Event('")
                                                  .concat(c.O, "'));\n    "))(a, e),
                                      },
                                      nonce: null != t ? t : void 0,
                                  });
                        }),
                        null
                    );
                },
                h = (e) => {
                    let { createStore: t, patchKey: a } = e,
                        r = () => {
                            var e, t;
                            let i = null != (t = null == (e = window.__PAGE_STATE_PATCHES__) ? void 0 : e[a]) ? t : [];
                            return (window.__PAGE_STATE_PATCHES__ && delete window.__PAGE_STATE_PATCHES__[a], i);
                        };
                    return {
                        pageStoreProvider: (e) => {
                            let { children: s, nonce: n } = e,
                                l = (0, m.Y)(),
                                o = (0, u.g)(),
                                { store: _, patchesRef: h } = (0, d.m)({
                                    createStore: () => t({ ...l, rootStore: o }),
                                    getPendingPatchBatches: r,
                                    patchesUpdatedEventName: c.O,
                                });
                            return (0, i.jsxs)(i.Fragment, {
                                children: [(0, i.jsx)(p, { nonce: n, patchKey: a, patchesRef: h }), (0, i.jsx)(v, { store: _, storeKey: a, children: s })],
                            });
                        },
                    };
                };
            function x(e) {
                let { throwOnAbsence: t = !0 } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    a = (0, n.useContext)(_);
                if (!a || a.storeKey !== e) {
                    var i;
                    if (!t) return null;
                    throw new o.t('Page store context is missing or has unexpected key', {
                        code: 'E_CONTEXT_PAGE_STORE_NULL',
                        data: { actualStoreKey: null != (i = null == a ? void 0 : a.storeKey) ? i : 'null', expectedStoreKey: e },
                    });
                }
                return a.store;
            }
        },
        49522: (e, t, a) => {
            'use strict';
            a.d(t, { X: () => m });
            var i = a(32290),
                r = a(63618),
                s = a(55178),
                n = a(21732),
                l = a(45807),
                o = a(63423),
                c = a(82586),
                d = a(60178),
                u = a.n(d);
            let m = (e) => {
                let {
                        carouselRef: t,
                        backwardControlClassName: a,
                        forwardControlClassName: d,
                        className: m,
                        withSecondaryColor: _,
                        buttonSize: v = 'xxxs',
                        buttonVariant: p = 'outline',
                    } = e,
                    { swipeBackward: h, swipeForward: x, shouldBackwardButtonBeDisabled: g, shouldForwardButtonBeDisabled: y, shouldHideControls: C } = (0, l.Y)(t),
                    A = (0, s.useCallback)(
                        (e) => {
                            (h(), e.stopPropagation());
                        },
                        [h],
                    ),
                    b = (0, s.useCallback)(
                        (e) => {
                            (x(), e.stopPropagation());
                        },
                        [x],
                    );
                return (0, i.jsxs)('div', {
                    className: (0, r.$)(u().root, m),
                    'data-test-id': n.S7.CAROUSEL_CONTROLS,
                    children: [
                        (0, i.jsx)(o.$, {
                            tabIndex: -1,
                            'aria-hidden': !0,
                            className: (0, r.$)(u().control, a, { [u().control_hidden]: C, [u().control_withSecondaryColor]: _ }),
                            onClick: A,
                            size: v,
                            radius: 'round',
                            variant: p,
                            withRipple: !1,
                            icon: (0, i.jsx)(c.I, { size: 'xxs', variant: 'arrowLeft' }),
                            disabled: g,
                            'data-test-id': n.S7.CAROUSEL_CONTROLS_BACKWARD_BUTTON,
                        }),
                        (0, i.jsx)(o.$, {
                            tabIndex: -1,
                            'aria-hidden': !0,
                            className: (0, r.$)(u().control, d, { [u().control_hidden]: C, [u().control_withSecondaryColor]: _ }),
                            onClick: b,
                            size: v,
                            radius: 'round',
                            variant: p,
                            withRipple: !1,
                            icon: (0, i.jsx)(c.I, { size: 'xxs', variant: 'arrowRight' }),
                            disabled: y,
                            'data-test-id': n.S7.CAROUSEL_CONTROLS_FORWARD_BUTTON,
                        }),
                    ],
                });
            };
        },
        50880: (e) => {
            e.exports = {
                buttonArrow: 'EntityCard_buttonArrow__ussa7',
                titleLink: 'EntityCard_titleLink__3ucPa',
                titleText: 'EntityCard_titleText___EU9t',
                root: 'EntityCard_root__HNsWx',
                root_disabled: 'EntityCard_root_disabled__qdBaH',
                ripple: 'EntityCard_ripple__iMHNo',
                playButtonCell: 'EntityCard_playButtonCell__AYoR5',
                controlsBarCell: 'EntityCard_controlsBarCell__GpbEX',
                text: 'EntityCard_text__hChwj',
            };
        },
        52138: (e, t, a) => {
            'use strict';
            var i;
            (a.d(t, { h: () => i }),
                (function (e) {
                    ((e.ALBUM = 'album'), (e.PLAYLIST = 'playlist'), (e.TRACK = 'track'), (e.ARTIST = 'artist'));
                })(i || (i = {})));
        },
        52598: (e) => {
            e.exports = { root: 'SeparatedArtistsWithContextMenuMobile_root__4BiJL', important: 'SeparatedArtistsWithContextMenuMobile_important__fSF1h' };
        },
        53514: (e, t, a) => {
            'use strict';
            a.d(t, { V: () => i });
            let i = { delay: { open: 1e3, close: 0 } };
        },
        54171: (e, t, a) => {
            'use strict';
            a.d(t, { w: () => s });
            var i = a(19383),
                r = a(85017);
            let s = (e) => {
                let { track: t, callback: a, disclaimerRejectHandler: s } = e;
                return (0, i.l)({ entity: t, entityType: r.n.TRACK, callback: a, onReject: s, preventDefaultWhenSafe: !1 });
            };
        },
        54714: (e) => {
            e.exports = {
                card_root: 'HorizontalCardContainer_root__YoAAP',
                root: 'CommonControlsBar_root__N8b0F',
                root_withSecondaryColor: 'CommonControlsBar_root_withSecondaryColor__4Y1P_',
                item: 'CommonControlsBar_item__qGErG',
                contextMenu: 'CommonControlsBar_contextMenu__EAq_c',
                contextMenu_visible: 'CommonControlsBar_contextMenu_visible__M0ry0',
                contextMenuWrapper: 'CommonControlsBar_contextMenuWrapper__XjkaL',
                lightning: 'CommonControlsBar_lightning__o7wrY',
                ugcIcon: 'CommonControlsBar_ugcIcon__OV0Cl',
                lightning_withOffset: 'CommonControlsBar_lightning_withOffset__LGvUS',
                duration: 'CommonControlsBar_duration__un38A',
                duration_hidden: 'CommonControlsBar_duration_hidden__noQ4S',
                alwaysVisibleDuration: 'CommonControlsBar_alwaysVisibleDuration__3V6gl',
                controls: 'CommonControlsBar_controls__QrogT',
                trailerIcon: 'CommonControlsBar_trailerIcon__ZHSBo',
                removeButton: 'CommonControlsBar_removeButton__35xHY',
                controls_disabled: 'CommonControlsBar_controls_disabled__0RmLo',
                explicitMark: 'CommonControlsBar_explicitMark__3I_Op',
                controls_dislikedControls: 'CommonControlsBar_controls_dislikedControls__mMjKC',
                likeIcon: 'CommonControlsBar_likeIcon__YqgZY',
                controls_dislikedColors: 'CommonControlsBar_controls_dislikedColors__h5lev',
                downloadIcon: 'CommonControlsBar_downloadIcon__2mM6m',
                popover: 'CommonControlsBar_popover__6bmNd',
            };
        },
        56008: (e, t, a) => {
            'use strict';
            a.d(t, { H: () => i });
            let i = (0, a(55178).createContext)({ pageAlbumId: void 0 });
        },
        59888: (e, t, a) => {
            'use strict';
            a.d(t, { _: () => n });
            var i = a(32290),
                r = a(55178),
                s = a(21183);
            let n = (e) => {
                let { sourceContextData: t, children: a } = e,
                    n = (0, r.useMemo)(() => ({ sourceContextData: t }), [t]);
                return (0, i.jsx)(s.l.Provider, { value: n, children: a });
            };
        },
        60178: (e) => {
            e.exports = {
                root: 'CarouselControls_root__E_hwc',
                control: 'CarouselControls_control__L8t4i',
                control_hidden: 'CarouselControls_control_hidden__pLrn6',
                control_withSecondaryColor: 'CarouselControls_control_withSecondaryColor__KqSEN',
            };
        },
        60244: (e, t, a) => {
            'use strict';
            a.d(t, { k: () => d });
            var i = a(32290),
                r = a(21732),
                s = a(70280),
                n = a(71926),
                l = a(48736),
                o = a.n(l);
            let c = { padding: 8 },
                d = (e) => {
                    let { description: t, enabled: a, title: l, placement: d = 'top', children: u } = e;
                    return (0, i.jsxs)(s.m_, {
                        enabled: a,
                        offsetOptions: 4,
                        shiftOptions: c,
                        flipOptions: c,
                        placement: d,
                        children: [
                            u,
                            (0, i.jsx)(s.ZI, {
                                className: o().root,
                                'data-test-id': r.S7.TOOLTIP_WITH_TITLE,
                                children: (0, i.jsxs)('div', {
                                    className: o().text,
                                    children: [
                                        l && (0, i.jsx)(n.HL, { variant: 'span', type: 'text', size: 's', weight: 'bold', children: l }),
                                        (0, i.jsx)(n.HL, { variant: 'span', type: 'text', size: 's', weight: 'normal', className: o().description, children: t }),
                                    ],
                                }),
                            }),
                        ],
                    });
                };
        },
        61280: (e) => {
            e.exports = {
                root: 'AwakeLumenModal_root__KutgH',
                header: 'AwakeLumenModal_header__uptVv',
                content: 'AwakeLumenModal_content__IGhwx',
                iframe: 'AwakeLumenModal_iframe__VUNuR',
                playButton: 'AwakeLumenModal_playButton__n3HTQ',
                playButtonVisible: 'AwakeLumenModal_playButtonVisible__wA_ri',
            };
        },
        61945: (e, t, a) => {
            'use strict';
            a.d(t, { h: () => n });
            var i = a(55178),
                r = a(70204),
                s = a(34186);
            let n = () => {
                let e = (0, s.N)().get(r.Xc),
                    t = e.getLanguage(),
                    a = e.getDefaultLanguage(),
                    n = e.getDictionary(),
                    l = e.getAvailableLanguages(),
                    o = (0, i.useCallback)(
                        (t) => {
                            e.setLanguage(t);
                        },
                        [t],
                    );
                return (0, i.useMemo)(() => ({ dictionary: n, language: t, defaultLanguage: a, availableLanguages: l, setLanguage: o }), [t, o]);
            };
        },
        61954: (e) => {
            e.exports = {
                control: 'CarouselWithArrows_control__3uyYB',
                list: 'CarouselWithArrows_list__2f6lz',
                buttons: 'CarouselWithArrows_buttons__fW_Dp',
                root: 'CarouselWithArrows_root__RreSk',
                root_arrowLeft_hidden: 'CarouselWithArrows_root_arrowLeft_hidden__WmoMn',
                root_arrowRight_hidden: 'CarouselWithArrows_root_arrowRight_hidden__sQTGA',
                root_arrow_hidden: 'CarouselWithArrows_root_arrow_hidden__sltkz',
                control_left: 'CarouselWithArrows_control_left__GrTcO',
                control_right: 'CarouselWithArrows_control_right__Si_BV',
                root_carouselBetweenArrows: 'CarouselWithArrows_root_carouselBetweenArrows___aN_d',
                wrapper: 'CarouselWithArrows_wrapper__Kezgl',
                carousel: 'CarouselWithArrows_carousel__gm5sM',
                important: 'CarouselWithArrows_important__ZFlvq',
            };
        },
        63363: (e, t, a) => {
            'use strict';
            a.d(t, { K: () => g });
            var i = a(32290),
                r = a(60900),
                s = a(91027),
                n = a(67732),
                l = a(45477),
                o = a(75582),
                c = a(57594),
                d = a(90357),
                u = a(92708),
                m = a(55178),
                _ = a(63380),
                v = a(96103),
                p = a(97755),
                h = a(79238);
            let x = (0, v.PA)((e) => {
                    let { album: t, closeToast: a, withLink: r } = e,
                        s = (0, h.b)(t);
                    return (0, i.jsx)(p.O, {
                        closeToast: a,
                        entityVariant: s,
                        coverUri: t.coverUri,
                        entityUrl: t.url,
                        collectionUrl: '/collection',
                        entityTitle: t.title,
                        isLiked: t.isLiked,
                        withLink: r,
                    });
                }),
                g = (e) => {
                    let {
                            user: t,
                            paywall: a,
                            albumCPA: { isPlusCPAEnabled: v },
                        } = (0, c.g)(),
                        { formatMessage: p } = (0, r.A)(),
                        { notify: h } = (0, o.l)(),
                        g = (() => {
                            let { notify: e } = (0, o.l)(),
                                [t, a] = (0, m.useState)(!1),
                                { formatMessage: n } = (0, r.A)();
                            return (0, s.c)(async (r) => {
                                let { album: s, withLink: o = !0, withNotification: c = !0 } = r;
                                if (t) return;
                                let m = { ...(0, u.HO)(s), url: s.url, isLiked: !s.isLiked };
                                a(!0);
                                let v = await s.toggleLike();
                                (a(!1),
                                    c &&
                                        (v === _.f.OK
                                            ? e((0, i.jsx)(x, { withLink: o, album: m }), { containerId: l.u.INFO })
                                            : e((0, i.jsx)(d.h, { error: n({ id: 'error-messages.error-during-action' }) }), { containerId: l.u.ERROR })));
                            });
                        })(),
                        { pageAlbumId: y } = (0, n.T)();
                    return (0, s.c)(async () => {
                        if (e)
                            return v({ pageAlbumId: y, albumId: e.id, isNonMusic: e.isNonMusic })
                                ? void a.openModal()
                                : t.isAuthorized
                                  ? g({ album: e })
                                  : void h((0, i.jsx)(d.h, { error: p({ id: 'authorization-messages.need-to-authorizate' }) }), { containerId: l.u.ERROR });
                    });
                };
        },
        64170: (e, t, a) => {
            'use strict';
            a.d(t, { SomethingWentWrong: () => f });
            var i = a(32290),
                r = a(63618),
                s = a(96103),
                n = a(55178),
                l = a(60900),
                o = a(39407),
                c = a(63423),
                d = a(82586),
                u = a(71926),
                m = a(17811),
                _ = a(99923),
                v = a(90153),
                p = a(74416),
                h = a(62376),
                x = a(37240),
                g = a(83920),
                y = a(20472),
                C = a(12894),
                A = a(30310),
                b = a.n(A);
            let f = (0, s.PA)((e) => {
                let { className: t, withBackwardControl: a = !0 } = e,
                    { formatMessage: s } = (0, l.A)(),
                    A = s({ id: 'error-messages.something-went-wrong' });
                !(function (e) {
                    let t = (0, p.st)(),
                        { hash: a } = (0, p.gf)(),
                        { pageId: i } = (0, x.$)(),
                        r = (0, h.U)();
                    (0, n.useEffect)(() => {
                        if (!t || !a || !i) return;
                        let s = (0, m.F)({
                            params: {
                                entityType: _.EntityTypes.Error,
                                entityId: _.EntityTypes.SomethingWrong,
                                errorMessage: e,
                                hash: a,
                                pageId: i,
                                pageStyle: _.PageStyles.Fullscreen,
                                pagePlacement: _.PagePlacements.Fullscreen,
                                mainObjectType: _.DomainObjectType.NonApplicable,
                                mainObjectId: _.DomainObjectType.NonApplicable,
                            },
                            logger: r,
                            context: 'useSendEventOnSomethingWentWrongShowed',
                        });
                        s && (0, v.z5)(t.evgenInstance, s);
                    }, [t, e, a, i, r]);
                })(A);
                let { sendRefreshEvent: f } = (function () {
                        let e = (0, p.st)(),
                            { hash: t } = (0, p.gf)(),
                            { pageId: a } = (0, x.$)(),
                            i = (0, h.U)();
                        return {
                            sendRefreshEvent: (0, n.useCallback)(() => {
                                if (!e || !t || !a) return;
                                let r = (0, m.F)({
                                    params: {
                                        actionType: _.ActionType.Refresh,
                                        userInteractionType: _.UserInteractionType.Tap,
                                        entityType: _.EntityTypes.Error,
                                        entityId: _.EntityTypes.SomethingWrong,
                                        hash: t,
                                        pageId: a,
                                        pageStyle: _.PageStyles.Fullscreen,
                                        pagePlacement: _.PagePlacements.Fullscreen,
                                        mainObjectType: _.DomainObjectType.NonApplicable,
                                        mainObjectId: _.DomainObjectType.NonApplicable,
                                    },
                                    logger: i,
                                    context: 'useSendEventOnSomethingWentWrongRefreshed',
                                });
                                r && (0, v.bv)(e.evgenInstance, r);
                            }, [e, t, a, i]),
                        };
                    })(),
                    T = (0, n.useCallback)(() => {
                        (f(), (window.location.href = y.Z.main.href));
                    }, [f]),
                    { contentRef: k } = (0, g.g)();
                return (0, i.jsxs)('div', {
                    className: (0, r.$)(b().root, t),
                    children: [
                        a &&
                            (0, i.jsx)(C.L, { withBackwardFallback: '/', className: (0, r.$)(b().navigation, { [b().navigation_desktop]: !k }), withForwardControl: !1 }),
                        (0, i.jsxs)('div', {
                            className: (0, r.$)(b().content, { [b().content_shrink]: !a }),
                            children: [
                                (0, i.jsx)(d.I, { className: b().icon, variant: 'attention', size: 'xxl' }),
                                (0, i.jsx)(u.DZ, { className: (0, r.$)(b().title, b().important), variant: 'h3', size: 'xs', children: A }),
                                (0, i.jsxs)(u.HL, {
                                    className: (0, r.$)(b().text, b().important),
                                    variant: 'span',
                                    type: 'text',
                                    size: 'l',
                                    weight: 'normal',
                                    children: [!1, (0, i.jsx)(o.A, { id: 'page-error.try-to-restart-app' })],
                                }),
                                (0, i.jsx)(c.$, {
                                    onClick: T,
                                    className: b().button,
                                    role: 'link',
                                    color: 'secondary',
                                    size: 'l',
                                    radius: 'xxxl',
                                    children: (0, i.jsxs)(u.HL, {
                                        type: 'controls',
                                        variant: 'span',
                                        size: 'm',
                                        children: [!1, (0, i.jsx)(o.A, { id: 'page-error.restart-app-button' })],
                                    }),
                                }),
                            ],
                        }),
                    ],
                });
            });
        },
        67732: (e, t, a) => {
            'use strict';
            a.d(t, { T: () => s });
            var i = a(55178),
                r = a(56008);
            function s() {
                return (0, i.useContext)(r.H);
            }
        },
        68912: (e, t, a) => {
            'use strict';
            a.d(t, { j: () => k });
            var i = a(32290),
                r = a(63618),
                s = a(96103),
                n = a(21916),
                l = a(55178),
                o = a(60900),
                c = a(39407),
                d = a(21732),
                u = a(70280),
                m = a(71926),
                _ = a(41677),
                v = a(28999),
                p = a(57594),
                h = a(53514),
                x = a(85017),
                g = a(13798),
                y = a(61258),
                C = a(25649),
                A = a(24760),
                b = a(84141),
                f = a(5856),
                T = a.n(f);
            let k = (0, s.PA)((e) => {
                let {
                        className: t,
                        titleContainerClassName: a,
                        track: s,
                        albumArtists: f,
                        withExplicitMark: k = !0,
                        withSecondaryColor: S,
                        captionSize: E = 'm',
                        explicitSize: I = 'xxxs',
                        withAllArtistsTitle: N,
                        textClassName: L,
                        artistsClassName: j,
                        ignoreDislikedStyles: R,
                        withCustomTooltip: w = !0,
                        hasLineClamp: M = !0,
                        withSavingQueryParams: O,
                        beforeTitle: P,
                        withArtistLink: D = !0,
                        withTrackLink: B = !0,
                        afterTitle: H,
                        withContextMenuArtists: K,
                    } = e,
                    { formatMessage: U } = (0, o.A)(),
                    { sendNavigateSearchFeedback: V } = (0, v.z)(),
                    {
                        settings: { isMobile: W },
                    } = (0, p.g)(),
                    Y = (0, A.$)({ withCustomTooltip: w }),
                    z = (0, n.useSearchParams)(),
                    G = s.getUrl(O ? Object.fromEntries(z) : void 0),
                    F = (0, l.useMemo)(() => {
                        var e;
                        let t = U({ id: 'entity-names.track-name' }, { trackName: s.title });
                        return ''.concat(t, ' ').concat(null != (e = s.version) ? e : '');
                    }, [U, s.title, s.version]),
                    $ = (0, b.O)({ track: s, onNavigate: V, withSavingQueryParams: O, entityType: x.n.TRACK }),
                    X = (0, l.useCallback)(
                        (e) => {
                            let t = ''.concat(s.title, ' ').concat(!s.isRemoved && s.version ? s.version : '');
                            return (0, i.jsx)(u.m_, {
                                enabled: Y && !W,
                                offsetOptions: 4,
                                placement: 'top',
                                text: t,
                                hoverSettings: h.V,
                                children: (0, i.jsx)(m.HL, {
                                    className: (0, r.$)(T().text, T().title),
                                    type: 'entity',
                                    size: E,
                                    weight: 'medium',
                                    variant: 'span',
                                    ...e,
                                    children: s.title,
                                }),
                            });
                        },
                        [W, Y, E, s.isRemoved, s.title, s.version],
                    ),
                    q = (0, l.useMemo)(() => {
                        let e = ''.concat(s.title, ' ').concat(!s.isRemoved && s.version ? s.version : '');
                        return s.isRemoved
                            ? (0, i.jsx)(u.m_, {
                                  enabled: Y && !W,
                                  offsetOptions: 4,
                                  placement: 'top',
                                  text: U({ id: 'track-title.error-not-found' }),
                                  hoverSettings: h.V,
                                  children: (0, i.jsx)(m.HL, {
                                      className: (0, r.$)(T().text, T().title),
                                      type: 'entity',
                                      size: E,
                                      weight: 'medium',
                                      variant: 'span',
                                      title: Y ? void 0 : U({ id: 'track-title.error-not-found' }),
                                      children: (0, i.jsx)(c.A, { id: 'track-title.error-not-found' }),
                                  }),
                              })
                            : s.hasTrackLink && B
                              ? (0, i.jsx)(y.N, {
                                    onClick: $,
                                    className: T().albumLink,
                                    href: G,
                                    'aria-label': F,
                                    title: Y ? void 0 : e,
                                    'data-test-id': d.Kq.track.TRACK_TITLE,
                                    children: X(),
                                })
                              : X({ 'data-test-id': d.Kq.track.TRACK_TITLE });
                    }, [W, s.title, s.isRemoved, s.version, s.hasTrackLink, X, Y, U, E, F, $, G, B]),
                    Q = (0, C.s)(s.artists, f),
                    J = (0, l.useMemo)(() => +!!M, [M]);
                return (0, i.jsx)('div', {
                    className: (0, r.$)(T().root, { [T().root_disabled]: !s.isAvailable, [T().root_disliked]: s.isDisliked && !R, [T().root_withSecondaryColor]: S }, t),
                    children: (0, i.jsxs)('div', {
                        className: T().metaContainer,
                        children: [
                            (0, i.jsxs)('div', {
                                className: (0, r.$)(T().titleContainer, { [T().titleContainer_withVersion]: s.version }, a),
                                children: [
                                    (0, i.jsxs)(m.HL, {
                                        className: (0, r.$)(T().text, L),
                                        type: 'entity',
                                        size: E,
                                        weight: 'medium',
                                        variant: 'div',
                                        lineClamp: 1,
                                        children: [
                                            P,
                                            q,
                                            !s.isRemoved &&
                                                s.version &&
                                                (0, i.jsxs)(m.HL, {
                                                    className: (0, r.$)(T().text, T().version),
                                                    type: 'entity',
                                                    size: E,
                                                    weight: 'medium',
                                                    variant: 'span',
                                                    title: Y ? void 0 : s.version,
                                                    'data-test-id': d.Kq.track.TRACK_VERSION,
                                                    children: ['\xa0', s.version],
                                                }),
                                        ],
                                    }),
                                    s.explicitDisclaimer &&
                                        k &&
                                        (0, i.jsx)(g.N, {
                                            containerClassName: T().explicitMarkContainer,
                                            getDescriptionTexts: s.getDescriptionTexts,
                                            size: I,
                                            variant: s.explicitDisclaimer,
                                            className: T().explicitMark,
                                            trackId: s.id,
                                        }),
                                    H,
                                ],
                            }),
                            Q.length > 0 &&
                                (0, i.jsx)(_.i, {
                                    className: (0, r.$)(T().text, { [T().artists]: M }, j, L),
                                    withAllArtistsTitle: N,
                                    linkClassName: (0, r.$)(T().text, T().link),
                                    captionClassName: (0, r.$)(T().text, T().artistCaption),
                                    artists: Q,
                                    withLink: s.isNonUserGenerated && D,
                                    lineClamp: J,
                                    captionSize: E,
                                    withContextMenu: K,
                                }),
                        ],
                    }),
                });
            });
        },
        69e3: (e) => {
            e.exports = {
                root: 'BlockHeader_root__j3mbg',
                titleIcon: 'BlockHeader_titleIcon__GQFEK',
                start: 'BlockHeader_start__ZrGP5',
                coverContainer: 'BlockHeader_coverContainer__lATZT',
                cover: 'BlockHeader_cover__koOXq',
                textContainer: 'BlockHeader_textContainer___2wn9',
                title: 'BlockHeader_title__5xlx6',
                description: 'BlockHeader_description__hAk9D',
                description_widthLimit: 'BlockHeader_description_widthLimit__CXxK1',
                linkContainer: 'BlockHeader_linkContainer__EuW_L',
                linkText: 'BlockHeader_linkText__Or6VB',
                heading: 'BlockHeader_heading__4iqvS',
                heading_notAvailable: 'BlockHeader_heading_notAvailable__r_dm1',
                shimmerCover: 'BlockHeader_shimmerCover__m2PJl',
                textShimmerContainer: 'BlockHeader_textShimmerContainer__hT_Zo',
                shimmerTitle: 'BlockHeader_shimmerTitle__kAkgm',
                shimmerDescription: 'BlockHeader_shimmerDescription__Bya4z',
            };
        },
        69951: (e, t, a) => {
            'use strict';
            a.d(t, { K: () => x });
            var i = a(32290),
                r = a(63618),
                s = a(96103),
                n = a(55178),
                l = a(21732),
                o = a(90169),
                c = a(57594),
                d = a(40229),
                u = a(43565),
                m = a(8677),
                _ = a(68912),
                v = a(92102),
                p = a(85673),
                h = a.n(p);
            let x = (0, s.PA)((e) => {
                var t;
                let {
                        track: a,
                        playContextParams: s,
                        className: p,
                        withDNDBlock: x,
                        isDragging: g,
                        draggingClassName: y,
                        ignoreDislikedStyles: C,
                        withSecondaryColor: A,
                        handleRemove: b,
                        withDislike: f,
                        withTrailer: T = !0,
                        beforeTitle: k,
                        removeButtonAriaLabel: S,
                        hideControls: E,
                    } = e,
                    I = (0, o.D)({ playContextParams: s, entityId: a.entityId }),
                    {
                        settings: { isMobile: N },
                    } = (0, c.g)(),
                    L = (0, n.useCallback)(
                        (e) =>
                            (0, i.jsx)(d.q, {
                                isAvailable: a.isAvailable,
                                isDisliked: a.isDisliked,
                                coverUri: a.coverUri,
                                title: a.title,
                                className: h().playButtonCell,
                                ignoreDislikedStyles: C,
                                radius: 'xs',
                                ...e,
                            }),
                        [C, a.coverUri, a.isAvailable, a.isDisliked, a.title],
                    );
                return (0, i.jsx)(v.C, {
                    className: (0, r.$)(p, { [h().trackWithDots]: x, [h().important]: x }),
                    track: a,
                    beforeBlock: x ? (0, i.jsx)(u.O, { className: (0, r.$)(h().dots, y), isDragging: g }) : void 0,
                    meta: (0, i.jsx)(_.j, { withArtistLink: !N, beforeTitle: k, track: a, ignoreDislikedStyles: C, withSecondaryColor: A }),
                    playButtonCellRender: L,
                    controls: (0, i.jsx)(m.Q, {
                        track: a,
                        className: h().controlsBarCell,
                        ignoreDislikedStyles: C,
                        utmLink: null == (t = s.contextData) ? void 0 : t.utmLink,
                        withSecondaryColor: A,
                        handleRemove: b,
                        withDislike: f,
                        withTrailer: T,
                        removeButtonAriaLabel: S,
                        hideControls: E,
                    }),
                    ...I,
                    'data-test-id': l.Kq.track.TRACK_PLAYLIST,
                });
            });
        },
        71670: (e, t, a) => {
            'use strict';
            a.d(t, { X: () => r });
            var i = a(55178);
            let r = () =>
                (0, i.useCallback)((e) => {
                    {
                        let t = window.history.state;
                        window.history.replaceState(t, '', e);
                    }
                }, []);
        },
        72069: (e) => {
            e.exports = {
                header: 'MusicHistoryBlock_header__sIFVC',
                queryToVibeHeader: 'MusicHistoryBlock_queryToVibeHeader__iRBjG',
                vibeHeader: 'MusicHistoryBlock_vibeHeader__HWzD5',
                vibeCover: 'MusicHistoryBlock_vibeCover__RnM_6',
                multivibeContainer: 'MusicHistoryBlock_multivibeContainer__GTbRL',
                multivibeCover: 'MusicHistoryBlock_multivibeCover__rzU94',
                multivibeAvatar: 'MusicHistoryBlock_multivibeAvatar__Tbme3',
                multivibeControl: 'MusicHistoryBlock_multivibeControl__J85EM',
                vibeTextBlock: 'MusicHistoryBlock_vibeTextBlock__nvhPk',
                heading: 'MusicHistoryBlock_heading__HEfmk',
                headerTitle: 'MusicHistoryBlock_headerTitle__Yhyst',
                content: 'MusicHistoryBlock_content__S9lfi',
                artists: 'MusicHistoryBlock_artists__AjuWP',
                artistLink: 'MusicHistoryBlock_artistLink__yFHPE',
                shimmerTitle: 'MusicHistoryBlock_shimmerTitle__Mx1IC',
            };
        },
        73354: (e, t, a) => {
            'use strict';
            a.d(t, { v: () => d });
            var i = a(32290),
                r = a(79856),
                s = a(98350),
                n = a(26781),
                l = a(34223),
                o = a(6676),
                c = a.n(o);
            let d = (e) => {
                let { isActive: t } = e,
                    a = (0, i.jsxs)('div', {
                        className: c().trackListShimmers,
                        children: [
                            (0, i.jsx)(l.D, { isActive: t, variant: s.X.PLAYLIST }),
                            (0, i.jsx)(l.D, { isActive: t, variant: s.X.PLAYLIST }),
                            (0, i.jsx)(l.D, { isActive: t, variant: s.X.PLAYLIST }),
                        ],
                    });
                return (0, i.jsxs)('div', {
                    className: c().shimmersContainer,
                    children: [
                        (0, i.jsx)(r.W, { isActive: t, className: c().dateShimmer }),
                        (0, i.jsx)(r.W, { isActive: t, className: c().contextNameShimmer }),
                        (0, i.jsx)(n.M, { withDescription: !0, className: c().contextHeaderShimmer }),
                        a,
                        (0, i.jsx)(r.W, { isActive: t, className: c().contextNameShimmer }),
                        (0, i.jsx)(n.M, { coverRadius: 'round', className: c().contextHeaderShimmer }),
                        a,
                    ],
                });
            };
        },
        75314: (e, t, a) => {
            'use strict';
            a.d(t, { J: () => s, o: () => r });
            var i = a(14257);
            let r = { [i.S.Dark]: 'ym-dark-theme', [i.S.Light]: 'ym-light-theme' },
                s = (e) => {
                    switch (e) {
                        case i.S.Light:
                        case i.S.Dark:
                            return r[e];
                        default:
                            return '';
                    }
                };
        },
        75487: (e) => {
            e.exports = {
                root: 'VibeSmallView_root__6IYFM',
                root_radius_xs: 'VibeSmallView_root_radius_xs__hrEG3',
                root_radius_round: 'VibeSmallView_root_radius_round__t4uAR',
                root_withShadow: 'VibeSmallView_root_withShadow__HU7NP',
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
        77322: (e, t, a) => {
            'use strict';
            a.d(t, { D: () => s });
            var i = a(70204),
                r = a(34186);
            let s = () => (0, r.N)().get(i.SX);
        },
        78176: (e, t, a) => {
            'use strict';
            a.d(t, { V: () => y });
            var i = a(32290),
                r = a(63618),
                s = a(96103),
                n = a(55178),
                l = a(99923),
                o = a(21732),
                c = a(91027),
                d = a(50162),
                u = a(19740),
                m = a(86269),
                _ = a(71926),
                v = a(47745),
                p = a(32641),
                h = a(57594),
                x = a(16510),
                g = a.n(x);
            let y = (0, s.PA)((e) => {
                let { artist: t, className: a } = e,
                    { fullscreenPlayer: s } = (0, h.g)(),
                    x = (0, p.Z)(t.url),
                    C = (0, v.N)(),
                    A = (0, n.useMemo)(() => {
                        var e;
                        return (
                            'decomposed' in t &&
                            (null == (e = t.decomposed) ? void 0 : e.reduce((e, t) => (e.push((0, i.jsx)(y, { artist: t, className: a }, t.id)), e), []))
                        );
                    }, [t, a]),
                    b = (0, c.c)((e) => {
                        (s.modal.isOpened && s.modal.close(), C({ to: l.AppScreen.ArtistScreen }), x(e));
                    });
                return (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsxs)(u.Dr, {
                            className: (0, r.$)(g().root, a),
                            onClick: b,
                            'data-test-id': o.OA.artists.ARTIST_ITEM,
                            children: [
                                (0, i.jsx)(m.t, {
                                    radius: 'round',
                                    className: g().cover,
                                    children: (0, i.jsx)(d._V, { withAvatarReplace: !0, src: t.coverUri, size: 100, fit: 'contain', className: g().image }),
                                }),
                                (0, i.jsx)(_.HL, { variant: 'span', size: 'm', weight: 'medium', lineClamp: 1, children: t.name }),
                            ],
                        }),
                        A,
                    ],
                });
            });
        },
        78570: (e, t, a) => {
            'use strict';
            a.d(t, { r: () => _ });
            var i = a(32290),
                r = a(63618),
                s = a(60900),
                n = a(21732),
                l = a(6752),
                o = a(82586),
                c = a(71926),
                d = a(13798),
                u = a(31640),
                m = a.n(u);
            let _ = (e) => {
                let {
                        isDisliked: t,
                        isDisabled: a,
                        description: u,
                        getDescriptionTexts: _,
                        explicitMarkVariant: v,
                        className: p,
                        version: h,
                        title: x,
                        artistsComponent: g,
                        likesCount: y,
                        isLiked: C,
                        releaseYear: A,
                        titleLineClamp: b = 1,
                    } = e,
                    { formatMessage: f, formatNumber: T } = (0, s.A)(),
                    k = (0, l.L)(() => {
                        let e = null == g ? void 0 : g((0, r.$)(m().text, m().artistLink), (0, r.$)(m().text, m().artistCaption));
                        if (!e && !y) return;
                        let t = (0, i.jsx)(c.HL, { variant: 'span', size: 'm', weight: 'medium', 'aria-hidden': !0, children: '•' });
                        return (0, i.jsxs)('div', {
                            className: m().subtitle,
                            'data-test-id': n.S7.ENTITY_CARD_ENTITY_META_SUBTITLE,
                            children: [
                                'number' == typeof y &&
                                    y > 0 &&
                                    (0, i.jsxs)('div', {
                                        className: m().likesCount,
                                        'aria-label': f({ id: 'entity-names.likes-counter' }, { counter: y }),
                                        'data-test-id': n.S7.ENTITY_CARD_ENTITY_META_SUBTITLE_LIKES_COUNT,
                                        children: [
                                            (0, i.jsx)(o.I, {
                                                className: m().icon,
                                                variant: C ? 'likedVariant' : 'likeVariant',
                                                size: 'xxs',
                                                'data-test-id': n.S7.ENTITY_CARD_ENTITY_META_SUBTITLE_LIKES_COUNT_ICON,
                                            }),
                                            (0, i.jsx)(c.HL, {
                                                variant: 'span',
                                                size: 'm',
                                                weight: 'medium',
                                                'aria-hidden': !0,
                                                'data-test-id': n.S7.ENTITY_CARD_ENTITY_META_SUBTITLE_LIKES_COUNT_TEXT,
                                                children: T(y),
                                            }),
                                        ],
                                    }),
                                !!y && e && t,
                                e,
                                !!A && e && t,
                                (0, i.jsx)(c.HL, { variant: 'span', size: 'm', weight: 'medium', children: A }),
                            ],
                        });
                    });
                return (0, i.jsxs)('div', {
                    className: (0, r.$)(m().root, { [m().root_disabled]: a, [m().root_disliked]: t }, p),
                    'data-test-id': n.S7.ENTITY_CARD_ENTITY_META,
                    children: [
                        (0, i.jsxs)('div', {
                            className: m().titleContainer,
                            children: [
                                (0, i.jsxs)(c.HL, {
                                    className: (0, r.$)(m().text, m().title, { [m().title_withVersion]: h }),
                                    size: 'm',
                                    variant: 'div',
                                    lineClamp: b,
                                    type: 'text',
                                    'data-test-id': n.S7.ENTITY_CARD_ENTITY_META_TITLE,
                                    children: [
                                        x,
                                        h &&
                                            (0, i.jsx)(c.HL, {
                                                className: (0, r.$)(m().text, m().version),
                                                size: 'm',
                                                variant: 'div',
                                                type: 'text',
                                                'data-test-id': n.S7.ENTITY_CARD_ENTITY_META_VERSION,
                                                children: ' '.concat(h),
                                            }),
                                    ],
                                }),
                                v && (0, i.jsx)(d.N, { className: m().explicitMark, getDescriptionTexts: _, variant: v }),
                            ],
                        }),
                        u &&
                            (0, i.jsx)(c.HL, {
                                className: (0, r.$)(m().text, m().description),
                                variant: 'span',
                                size: 'm',
                                weight: 'medium',
                                lineClamp: 1,
                                'data-test-id': n.S7.ENTITY_CARD_ENTITY_META_DESCRIPTION,
                                children: u,
                            }),
                        k,
                    ],
                });
            };
        },
        78842: (e) => {
            e.exports = { root: 'NavigationControls_root__V2A3_' };
        },
        79238: (e, t, a) => {
            'use strict';
            a.d(t, { b: () => s });
            var i = a(64605),
                r = a(97647);
            let s = (e) => {
                switch (e.type) {
                    case i._.PODCAST:
                        return r.c.PODCAST;
                    case i._.AUDIOBOOK:
                        return r.c.AUDIOBOOK;
                    case i._.FAIRY_TALE:
                        return r.c.FAIRY_TALE;
                    default:
                        return r.c.ALBUM;
                }
            };
        },
        79856: (e, t, a) => {
            'use strict';
            a.d(t, { W: () => l });
            var i = {
                    5881: (e, t, a) => {
                        function i() {
                            for (var e, t, a = 0, i = ''; a < arguments.length;)
                                (e = arguments[a++]) &&
                                    (t = (function e(t) {
                                        var a,
                                            i,
                                            r = '';
                                        if ('string' == typeof t || 'number' == typeof t) r += t;
                                        else if ('object' == typeof t)
                                            if (Array.isArray(t)) for (a = 0; a < t.length; a++) t[a] && (i = e(t[a])) && (r && (r += ' '), (r += i));
                                            else for (a in t) t[a] && (r && (r += ' '), (r += a));
                                        return r;
                                    })(e)) &&
                                    (i && (i += ' '), (i += t));
                            return i;
                        }
                        (a.r(t), a.d(t, { clsx: () => i, default: () => r }));
                        let r = i;
                    },
                    7998: (e, t, a) => {
                        (a.r(t), a.d(t, { default: () => i }));
                        let i = {
                            root: 'JD1RZC0EtdwegdYvGm6W',
                            root_active: 'K4G7ASZk9TWzXzAWMZKF',
                            'gradient-horizontal': 'GTZfWL5aq48rDurR2xQI',
                            root_radius_xs: 'PyJ4CgcZYC2CpTwW_q0e',
                            root_radius_s: 'Ig8cmdGxncIa4g0mjlzw',
                            root_radius_m: 'lJbeO5iovzBwUTpu7hFA',
                            root_radius_l: 'Gc3Wyk8uCohdTadkf7NR',
                            root_radius_xl: 'iKi9AOB1TOi3ZWzmbCkq',
                            root_radius_xxl: 'nYTL841hItMUZhvJq_ob',
                            root_radius_xxxl: 'LXGqiB6_V45plhG242mA',
                            root_radius_round: 'psTzstoF82tSOz1JHMB3',
                        };
                    },
                    9097: (e, t) => {
                        var a = Symbol.for('react.transitional.element');
                        function i(e, t, i) {
                            var r = null;
                            if ((void 0 !== i && (r = '' + i), void 0 !== t.key && (r = '' + t.key), 'key' in t))
                                for (var s in ((i = {}), t)) 'key' !== s && (i[s] = t[s]);
                            else i = t;
                            return { $$typeof: a, type: e, key: r, ref: void 0 !== (t = i.ref) ? t : null, props: i };
                        }
                        ((t.Fragment = Symbol.for('react.fragment')), (t.jsx = i), (t.jsxs = i));
                    },
                    4377: (e, t, a) => {
                        e.exports = a(9097);
                    },
                    7141: function (e, t, a) {
                        var i =
                            (this && this.__importDefault) ||
                            function (e) {
                                return e && e.__esModule ? e : { default: e };
                            };
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.Shimmer = void 0));
                        let r = a(4377),
                            s = a(5881),
                            n = i(a(7998));
                        t.Shimmer = function (e) {
                            let { isActive: t, className: a, radius: i = 'm', width: l, height: o, children: c, ...d } = e,
                                u = {};
                            return (
                                void 0 !== l && (u.width = 'string' == typeof l ? l : ''.concat(l, 'px')),
                                void 0 !== o && (u.height = 'string' == typeof o ? o : ''.concat(o, 'px')),
                                (0, r.jsx)('div', {
                                    className: (0, s.clsx)(n.default.root, n.default['root_radius_'.concat(i)], { [n.default.root_active]: t }, a),
                                    'aria-live': t ? 'polite' : 'off',
                                    'aria-busy': t,
                                    ...d,
                                    style: u,
                                    children: c,
                                })
                            );
                        };
                    },
                },
                r = {};
            function s(e) {
                var t = r[e];
                if (void 0 !== t) return t.exports;
                var a = (r[e] = { exports: {} });
                return (i[e].call(a.exports, a, a.exports, s), a.exports);
            }
            ((s.d = (e, t) => {
                for (var a in t) s.o(t, a) && !s.o(e, a) && Object.defineProperty(e, a, { enumerable: !0, get: t[a] });
            }),
                (s.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
                (s.r = (e) => {
                    ('undefined' != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
                        Object.defineProperty(e, '__esModule', { value: !0 }));
                }));
            var n = {};
            (() => {
                (Object.defineProperty(n, 'X', { value: !0 }), (n.q = void 0));
                var e = s(7141);
                Object.defineProperty(n, 'q', {
                    enumerable: !0,
                    get: function () {
                        return e.Shimmer;
                    },
                });
            })();
            var l = n.q;
            n.X;
        },
        80536: (e, t, a) => {
            'use strict';
            a.d(t, { B: () => i });
            let i = (0, a(55178).createContext)({ observeElement: () => {}, unobserveElement: () => {} });
        },
        83276: (e, t, a) => {
            'use strict';
            a.d(t, { MusicHistoryPageSuspenseLoader: () => p });
            var i = a(32290),
                r = a(39407),
                s = a(46049),
                n = a(71926),
                l = a(28563),
                o = a(97841),
                c = a(32468),
                d = a(12894),
                u = a(8946),
                m = a(87461),
                _ = a.n(m),
                v = a(73354);
            let p = () =>
                (0, i.jsxs)('div', {
                    className: _().root,
                    children: [
                        (0, i.jsxs)('div', {
                            className: _().headerContainer,
                            children: [
                                (0, i.jsxs)('div', {
                                    className: _().header,
                                    children: [
                                        (0, i.jsx)(d.L, { withForwardControl: !1 }),
                                        (0, i.jsx)(n.DZ, {
                                            variant: 'h1',
                                            weight: 'bold',
                                            size: 'xl',
                                            lineClamp: 1,
                                            children: (0, i.jsx)(r.A, { id: 'music-history.title' }),
                                        }),
                                    ],
                                }),
                                (0, i.jsx)(l.F, {
                                    className: _().carousel,
                                    carouselElement: (0, i.jsx)(u.zr, { isActive: !0, className: _().tabs, shimmerClassName: _().tab, count: 5 }),
                                }),
                            ],
                        }),
                        (0, i.jsxs)(s.N, {
                            className: _().scroll,
                            containerClassName: _().scrollContainer,
                            children: [
                                (0, i.jsx)('div', { className: _().content, children: (0, i.jsx)(v.v, { isActive: !0 }) }),
                                (0, i.jsx)(c.A, { children: (0, i.jsx)(o.w, { className: _().footer }) }),
                            ],
                        }),
                    ],
                });
        },
        83521: (e, t, a) => {
            'use strict';
            a.d(t, { G: () => v });
            var i = a(32290),
                r = a(63618),
                s = a(96103),
                n = a(21732),
                l = a(99902),
                o = a(71926),
                c = a(57594),
                d = a(90326),
                u = a(80195),
                m = a(34783),
                _ = a.n(m);
            let v = (0, s.PA)((e) => {
                let { className: t, track: a, position: s, onPlayButtonClick: m, isPlaying: v, isCurrent: p, withDislikeStyles: h = !0, isLoading: x } = e,
                    {
                        settings: { isMobile: g },
                    } = (0, c.g)();
                return (0, i.jsxs)('div', {
                    className: (0, r.$)(t, _().root, {
                        [_().root_disabled]: !a.isAvailable && !a.hasModalAccess,
                        [_().root_playing]: v,
                        [_().root_disliked]: a.isDisliked && h,
                        [_().root_current]: p,
                    }),
                    children: [
                        (a.isAvailable || a.hasModalAccess) &&
                            (0, i.jsxs)(i.Fragment, {
                                children: [
                                    !x && (0, i.jsx)(u.P, { stopAnimation: !v, className: _().playingAnimation }),
                                    x && g && (0, i.jsx)(l.y, { size: 'xs', className: _().spinner }),
                                    !g &&
                                        (0, i.jsx)(d.D, {
                                            variant: 'filled',
                                            className: _().playButton,
                                            iconClassName: _().playButtonIcon,
                                            isPlaying: v,
                                            onClick: m,
                                            iconSize: 'xs',
                                        }),
                                ],
                            }),
                        s &&
                            (0, i.jsx)(o.HL, {
                                variant: 'div',
                                className: _().position,
                                weight: 'normal',
                                type: 'entity',
                                size: 'm',
                                'data-test-id': n.Kq.track.TRACK_POSITION,
                                children: s,
                            }),
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
        83920: (e, t, a) => {
            'use strict';
            a.d(t, { M: () => r, g: () => s });
            var i = a(55178);
            let r = (0, i.createContext)({
                    contentRef: null,
                    defaultLayoutRef: null,
                    contentRootRef: null,
                    contentScrollRef: null,
                    sideBannerRef: null,
                    playlistStickyFiltersRef: null,
                    playlistStaticFiltersRef: null,
                    compositePlayerBarRef: null,
                    paywallRef: null,
                    setDefaultLayoutRef: () => {},
                    setContentRef: () => {},
                    setContentRootRef: () => {},
                    setSideBannerRef: () => {},
                    setContentScrollRef: () => {},
                    setPlaylistStickyFiltersRef: () => {},
                    setPlaylistStaticFiltersRef: () => {},
                    setCompositePlayerBarRef: () => {},
                    setPaywallRef: () => {},
                }),
                s = () => (0, i.useContext)(r);
        },
        84051: (e, t, a) => {
            'use strict';
            a.d(t, { l: () => _ });
            var i = a(55178),
                r = a(17811),
                s = a(99923),
                n = a(90153),
                l = a(74416),
                o = a(91027),
                c = a(62376),
                d = a(79374),
                u = a(37240),
                m = a(47498);
            let _ = (e) => {
                let { mainObjectType: t } = e,
                    a = (0, i.useRef)(!1),
                    _ = (0, i.useRef)(!1),
                    v = (0, l.st)(),
                    p = (0, c.U)(),
                    { hash: h } = (0, l.gf)(),
                    { pageId: x, pageEntityId: g, pageStyle: y, pagePlacement: C } = (0, u.$)(),
                    { tabId: A, tabPos: b, isTabSelectedByDefault: f } = (0, m.R)();
                return (0, o.c)((e) => {
                    if (!v || !x || 'string' != typeof g) return;
                    let i = {
                        hash: h,
                        pageId: d.W[x],
                        pageStyle: y || s.PageStyles.Fullscreen,
                        pagePlacement: C || s.PagePlacements.Fullscreen,
                        mainObjectType: t,
                        mainObjectId: g,
                    };
                    void 0 !== A && ((i.tabId = A), (i.tabPos = b), (i.isTabSelectedByDefault = f));
                    let l = (0, r.F)({ params: i, logger: p, context: 'useSendEventOnScreenOpenedOrClosed' });
                    l && (e && !a.current && ((0, n.w5)(v.evgenInstance, l), (a.current = !0)), e || _.current || ((0, n.XB)(v.evgenInstance, l), (_.current = !0)));
                });
            };
        },
        84507: (e) => {
            e.exports = { date: 'MusicHistoryTab_date__Fjy3P', content: 'MusicHistoryTab_content__Jt15j' };
        },
        85673: (e) => {
            e.exports = {
                playButtonCell: 'TrackPlaylist_playButtonCell__Q6YT_',
                controlsBarCell: 'TrackPlaylist_controlsBarCell__6clda',
                dots: 'TrackPlaylist_dots__nLYej',
                trackWithDots: 'TrackPlaylist_trackWithDots__EU6LD',
                important: 'TrackPlaylist_important__n8Tjb',
            };
        },
        86562: (e, t, a) => {
            'use strict';
            a.d(t, { v: () => i });
            var i = (function (e) {
                return ((e.SPACE = 'Space'), (e.ENTER = 'Enter'), (e.ESCAPE = 'Escape'), e);
            })({});
        },
        87461: (e) => {
            e.exports = {
                root: 'MusicHistoryPage_root__FYB2m',
                scroll: 'MusicHistoryPage_scroll__ykpDX',
                scrollContainer: 'MusicHistoryPage_scrollContainer__eemvg',
                headerContainer: 'MusicHistoryPage_headerContainer__QG0L3',
                header: 'MusicHistoryPage_header__dzEvD',
                content: 'MusicHistoryPage_content__j4evw',
                footer: 'MusicHistoryPage_footer__Vu7aC',
                empty: 'MusicHistoryPage_empty__fQRHA',
                carousel: 'MusicHistoryPage_carousel__jcl8l',
                tabs: 'MusicHistoryPage_tabs__v_5Zg',
                tab: 'MusicHistoryPage_tab__WDE1e',
                tab_isLoading: 'MusicHistoryPage_tab_isLoading__nNqd2',
                tab_selected: 'MusicHistoryPage_tab_selected__nmn8P',
                date: 'MusicHistoryPage_date__OV6rR',
                error: 'MusicHistoryPage_error__9f_8i',
                important: 'MusicHistoryPage_important__qNFO8',
            };
        },
        89661: (e) => {
            e.exports = {
                root: 'PlaylistTrackShimmer_root__nZ9KR',
                infoContainer: 'PlaylistTrackShimmer_infoContainer__xLd7a',
                textContainer: 'PlaylistTrackShimmer_textContainer__QI5cC',
                title: 'PlaylistTrackShimmer_title__MojYd',
                cover: 'PlaylistTrackShimmer_cover__xyDhR',
                action: 'PlaylistTrackShimmer_action__tT5xx',
            };
        },
        90006: (e) => {
            e.exports = { explicitMark: 'ExplicitMarkIcon_explicitMark__0BPeQ' };
        },
        90625: (e, t, a) => {
            'use strict';
            a.d(t, { D: () => V });
            var i = a(32290),
                r = a(90040),
                s = a(57249),
                n = a(63618),
                l = a(96103),
                o = a(65493),
                c = a(21916),
                d = a(55178),
                u = a(60900),
                m = a(99923),
                _ = a(21732),
                v = a(91027),
                p = a(50162),
                h = a(71926),
                x = a(95481),
                g = a(47745),
                y = a(2969),
                C = a(84782),
                A = a(23352),
                b = a(37240),
                f = a(28999),
                T = a(43564),
                k = a(57594),
                S = a(14257),
                E = a(50),
                I = a(86562),
                N = a(97201),
                L = a(16078),
                j = a(50880),
                R = a.n(j),
                w = a(78570),
                M = a(80195);
            let O = async (e, t) => {
                let { loop: a = !1, markerId: i, frameRange: r, mode: s = 'forward' } = t,
                    n = null,
                    l = null;
                if (i) {
                    let t = e.markers().find((e) => e.name === i);
                    if (!t) return;
                    ((n = t.time), (l = t.time + t.duration));
                } else if (r) {
                    var o;
                    ((n = r.start), (l = null != (o = r.end) ? o : e.totalFrames));
                }
                null !== n &&
                    null !== l &&
                    (await Promise.all([e.setLoop(a), e.setMode(s), e.setSegment(n, l), e.setFrame('reverse' === s ? l : n)]), n !== l && (await e.play()));
            };
            var P = a(1001),
                D = a.n(P),
                B = a(49124);
            let H = { align: [0, 0.5], fit: 'contain' },
                K = { autoResize: !0, freezeOnOffscreen: !1 },
                U = o.default.default(
                    () =>
                        Promise.resolve()
                            .then(a.bind(a, 90040))
                            .then((e) => e.DotLottieWorkerReact),
                    { ssr: !1 },
                );
            {
                let e = B.env.USE_CDN_FOR_STATIC ? 'https://yastatic-net.ru/s3/music-frontend-static/music/vundefined' : window.location.origin;
                (0, r.setWasmUrl)(new URL(s, e).href);
            }
            let V = (0, l.PA)((e) => {
                var t, a, r, s, l, o;
                let { animationByTheme: j, animationConfig: P, className: B, lumenImages: V, requestAwakeLumenModal: W, vibe: Y } = e,
                    { formatMessage: z } = (0, u.A)(),
                    G = (0, c.useSearchParams)(),
                    F = (0, L.z)(),
                    { pageId: $ } = (0, b.$)(),
                    { blockIdForFrom: X } = (0, C.N)(),
                    { sendPlaySearchFeedback: q } = (0, f.z)(),
                    Q = (0, y.b)(),
                    J = (0, g.N)(),
                    Z = (0, x.f)(),
                    { ref: ee, intersectionPropertyId: et } = (0, A.n)(),
                    ea = (0, E.W)(),
                    { lumen: ei } = (0, k.g)(),
                    er = 'true' === G.get(N.K.LUMEN_AWAKE_PARAM),
                    es = ei.isEnabled && !ei.isTriedToLoadData,
                    en = ei.isEnabled && !ei.isAwakened,
                    el = null != (a = ea.theme) ? a : S.S.Dark,
                    eo = ei.getFallbackImage(),
                    ec = (0, d.useRef)(!1),
                    ed = (0, d.useRef)(P[Y ? 'idle' : 'loading']),
                    eu = (0, d.useRef)(void 0),
                    [em, e_] = (0, d.useState)(null),
                    {
                        isPlaying: ev,
                        togglePlay: ep,
                        isCurrent: eh,
                    } = (0, T.B)({ blockIdForFrom: X, pageIdForFrom: $, seeds: null != (r = null == Y ? void 0 : Y.seeds) ? r : [] });
                ((0, d.useEffect)(() => Z(), [Z]),
                    (0, d.useEffect)(() => {
                        if (!em || ec.current) return;
                        let e = () => {
                            ((ec.current = !0), O(em, ed.current));
                        };
                        return (em.addEventListener('load', e), () => em.removeEventListener('load', e));
                    }, [em]),
                    (0, d.useEffect)(() => {
                        let e = ((e, t, a, i) =>
                            a || e === (null == i ? void 0 : i.loading)
                                ? t
                                    ? null == i
                                        ? void 0
                                        : i.playing
                                    : e === i.playing
                                      ? null == i
                                          ? void 0
                                          : i.paused
                                      : e === i.loading
                                        ? null == i
                                            ? void 0
                                            : i.idle
                                        : null
                                : null == i
                                  ? void 0
                                  : i.loading)(ed.current, ev, !!Y, P);
                        e && e !== ed.current && ((ed.current = e), em && ec.current && O(em, e));
                    }, [P, em, eh, ev, Y]));
                let ex = (0, v.c)(() => {
                    (eu.current === (null == Y ? void 0 : Y.seedsId) || ev || ((eu.current = null == Y ? void 0 : Y.seedsId), null == q || q()), ep(), Q(!0));
                });
                (0, d.useEffect)(() => {
                    er && !es && Y && (en && (null == W || W(ex)), F([N.K.LUMEN_AWAKE_PARAM]));
                }, [W, F, er, en, es, ex, Y]);
                let eg = (0, v.c)(() => {
                        if (Y) {
                            if (ev) {
                                (ep(), Q(!1));
                                return;
                            }
                            if (en) {
                                (J({ to: m.AppScreen.LumenAwakeningScreen }), null == W || W(ex));
                                return;
                            }
                            ex();
                        }
                    }),
                    ey = (0, v.c)((e) => {
                        (e.code === I.v.SPACE || e.code === I.v.ENTER) && (e.preventDefault(), eg());
                    }),
                    eC = null != (s = null == Y ? void 0 : Y.title) ? s : z({ id: 'entity-names.query-to-vibe-loading-title' }),
                    eA = null != (l = null == Y ? void 0 : Y.description) ? l : z({ id: 'entity-names.query-to-vibe-loading-description' }),
                    eb = !ei.isEnabled || ei.isTriedToLoadData,
                    ef = ei.isEnabled ? (null != (o = null == ei || null == (t = ei.themes) ? void 0 : t[el].uri) ? o : eo[el]) : (null != V ? V : eo)[el],
                    eT = Y ? _.OA.vibe.QUERY_TO_VIBE_BLOCK : _.OA.vibe.QUERY_TO_VIBE_LOADING_BLOCK,
                    ek = Y && (!ei.isEnabled || ei.isTriedToLoadData);
                return (0, i.jsxs)('div', {
                    'aria-label': eC,
                    'aria-description': eA,
                    className: (0, n.$)(R().root, D().root, { [D().root_loading]: !Y }, B),
                    tabIndex: 0,
                    onClick: eg,
                    onKeyDown: ey,
                    'data-test-id': eT,
                    children: [
                        (0, i.jsx)(U, { className: D().comet, layout: H, src: j[null != el ? el : S.S.Dark], renderConfig: K, dotLottieRefCallback: e_ }),
                        (0, i.jsxs)('div', {
                            className: D().iconContainer,
                            children: [
                                eh && (0, i.jsx)(M.P, { className: D().iconPulse, stopAnimation: !ev }),
                                eb && (0, i.jsx)(p._V, { className: D().icon, src: ef, fit: 'cover', withAvatarReplace: !0, withFallback: !1, withLoadingIndicator: !1 }),
                            ],
                        }),
                        (0, i.jsx)(w.r, {
                            className: D().meta,
                            title: (0, i.jsx)(h.HL, { className: (0, n.$)(R().text, R().titleText, D().caption), size: 'm', variant: 'div', type: 'text', children: eC }),
                            description: eA,
                            titleLineClamp: 2,
                        }),
                        ek && (0, i.jsx)('div', { ref: ee, 'data-intersection-property-id': et }),
                    ],
                });
            });
        },
        91063: (e) => {
            e.exports = {
                root: 'AlbumTrackShimmer_root__fBjbK',
                infoContainer: 'AlbumTrackShimmer_infoContainer__4fdAk',
                coverContainer: 'AlbumTrackShimmer_coverContainer__frW12',
                textContainer: 'AlbumTrackShimmer_textContainer__5wNPM',
                title: 'AlbumTrackShimmer_title__HC_Pa',
                cover: 'AlbumTrackShimmer_cover__36UkV',
                action: 'AlbumTrackShimmer_action__oI5t5',
            };
        },
        91624: (e) => {
            e.exports = { descriptionTextItem: 'DescriptionTextsDisclaimer_descriptionTextItem__XtzRU' };
        },
        92102: (e, t, a) => {
            'use strict';
            a.d(t, { C: () => b });
            var i = a(32290),
                r = a(63618),
                s = a(96103),
                n = a(55178),
                l = a(91027),
                o = a(58359),
                c = a(71735),
                d = a(2969),
                u = a(23352),
                m = a(46200),
                _ = a(5537),
                v = a(28999),
                p = a(72676),
                h = a(57594),
                x = a(1444),
                g = a(60900),
                y = a(54171),
                C = a(35587),
                A = a.n(C);
            let b = (0, s.PA)((e) => {
                var t;
                let {
                        className: a,
                        track: s,
                        meta: C,
                        beforeBlock: b,
                        controls: f,
                        playButtonCellRender: T,
                        withLightning: k,
                        isPlaying: S,
                        isCurrent: E,
                        togglePlay: I,
                        restartPlay: N,
                        onPlayClick: L,
                        playButtonIconSize: j,
                        skipFreemiumCloseListeningPaywall: R = !1,
                        ...w
                    } = e,
                    { shouldShowBuySubscriptionModal: M, showBuySubscriptionModal: O } = (0, m.q)(),
                    {
                        track: P,
                        fullscreenPlayer: D,
                        settings: { isMobile: B },
                        album: H,
                        albumCPA: { isPlusCPAPlayerBarEnabled: K },
                        paywall: { modal: U },
                    } = (0, h.g)(),
                    { ref: V, intersectionPropertyId: W } = (0, u.n)(),
                    Y = (0, d.b)(),
                    z = (0, c.P)(),
                    G = ((e) => {
                        let { track: t, withLightning: a } = e,
                            { formatMessage: i } = (0, g.A)();
                        return t.isAvailable
                            ? [t.artistsNames, t.title, t.version, a && i({ id: 'entity-names.popular-among-users' })].filter(Boolean).join(' ')
                            : ''
                                  .concat(i({ id: 'extra-explicit.play-unavailable' }), ' ')
                                  .concat(t.artistsNames, ' ')
                                  .concat(t.title);
                    })({ withLightning: k, track: s }),
                    F = ((e) => {
                        let { sonataState: t } = (0, h.g)(),
                            a = t.status === p.MT.LOADING_MEDIA_SOURCE || t.status === p.MT.BUFFERING;
                        if (e && t.entityMeta) {
                            let i = t.entityMeta.entityId;
                            return a && i === e;
                        }
                        return a;
                    })(s.entityId),
                    $ = K(H.id, null == (t = H.meta) ? void 0 : t.isNonMusic),
                    X = s.isAvailable && M && !$,
                    q = (0, _.N)(),
                    Q = s.isAvailable && q && !$ && !R,
                    J = (0, y.w)({ track: s, callback: I }),
                    Z = (0, l.c)(() => {
                        P.open({ trackId: s.id, albumId: s.albumId });
                    }),
                    ee = (0, y.w)({ track: s, callback: Z }),
                    { sendPlaySearchFeedback: et } = (0, v.z)(),
                    [ea, ei] = (0, n.useState)(!1),
                    er = (0, l.c)(() => {
                        if (!z()) {
                            if (X) return void O();
                            if (Q) return void U.open();
                            (ea || S || (ei(!0), null == et || et()), J(), Y(!S), null == L || L(!S));
                        }
                    }),
                    es = (0, l.c)(() => {
                        if (S) return void N();
                        er();
                    }),
                    en = (0, l.c)((e) => {
                        if (!s.isAvailable && !s.hasModalAccess) {
                            (M && s.isAvailableOnlyForPlus && O(), q && s.isAvailableOnlyForPlus && U.open());
                            return;
                        }
                        if (X) return void O();
                        let t = !B && (2 === e.detail || (1 === e.detail && s.hasTrackLink && !D.modal.isOpened));
                        return Q && !t
                            ? void U.open()
                            : ((0, o.P)(e, A().ripple), B)
                              ? void er()
                              : 2 === e.detail
                                ? void es()
                                : void (1 === e.detail && s.hasTrackLink && !D.modal.isOpened && (ee(), Q && U.open()));
                    }),
                    el = null == T ? void 0 : T({ onPlayButtonClick: er, isPlaying: S, isCurrent: E, isLoading: F, playButtonIconSize: j });
                return (0, i.jsxs)(x.C, {
                    ref: V,
                    'aria-label': G,
                    'data-intersection-property-id': W,
                    onClick: en,
                    className: (0, r.$)(A().root, { [A().root_disabled]: !s.isAvailable, [A().root_current]: E && B }, a),
                    ...w,
                    children: [b, el, C, f],
                });
            });
        },
        92565: (e) => {
            e.exports = { downloadingProgress: 'TrackDownloadControl_downloadingProgress__wNg2W', progress: 'TrackDownloadControl_progress__K_OhO' };
        },
        95481: (e, t, a) => {
            'use strict';
            a.d(t, { f: () => g });
            var i = a(55178),
                r = a(17811),
                s = a(92146),
                n = a(74416),
                l = a(6752),
                o = a(62376),
                c = a(1677),
                d = a(48922),
                u = a(84782),
                m = a(30915),
                _ = a(18746),
                v = a(37240),
                p = a(51012),
                h = a(47498);
            let x = [
                    d._Q.HOME,
                    d._Q.LANDING,
                    d._Q.NON_MUSIC,
                    d._Q.OWN_COLLECTION,
                    d._Q.SEARCH,
                    d._Q.ARTIST,
                    d._Q.CONCERTS,
                    d._Q.CONCERT,
                    d._Q.ALBUM,
                    d._Q.PLAYLIST,
                    d._Q.SLIDES_SCREEN,
                    d._Q.PROMOLANDING_ALBUM,
                    d._Q.WAVE_LANDING_SCREEN,
                ],
                g = () => {
                    let e = (0, i.useRef)(!1),
                        t = (0, n.st)(),
                        a = (0, o.U)(),
                        { hash: g } = (0, n.gf)(),
                        { pageId: y } = (0, v.$)(),
                        { tabId: C, tabPos: A, isTabSelectedByDefault: b } = (0, h.R)(),
                        { offsetBlockPosY: f } = (0, m.u)(),
                        { blockId: T, blockType: k, blockPosX: S, blockPosY: E, mainObjectType: I, mainObjectId: N, objectsCount: L } = (0, u.N)(),
                        { filterKey: j, filterValue: R, filterPos: w } = (0, _.G)(),
                        { skeleton: M } = (0, p.b)(),
                        O = (0, l.L)(() => (void 0 !== f && void 0 !== E ? f + E : E));
                    return (0, i.useCallback)(() => {
                        if (!t || !y || !d.xK.includes(y) || !x.includes(y) || e.current) return;
                        let i = { hash: g, pageId: c.F[y], entityType: k, entityId: T, entityPosX: S, entityPosY: O, objectsCount: L };
                        (void 0 !== j && ((i.filterKey = j), (i.filterValue = R), (i.filterPos = w)),
                            d.qG.includes(y) && ((i.tabId = C), (i.tabPos = A), (i.isTabSelectedByDefault = b)),
                            M && (i.skeletonId = M),
                            N && I && ((i.mainObjectType = I), (i.mainObjectId = N)));
                        let n = (0, r.F)({ params: i, logger: a, context: 'useSendEventOnBlockLoaded' });
                        n && ((0, s.uY)(t.evgenInstance, n), (e.current = !0));
                    }, [t, y, g, k, T, S, O, j, R, w, L, M, N, I, a, C, A, b]);
                };
        },
        97841: (e, t, a) => {
            'use strict';
            a.d(t, { w: () => T });
            var i = a(32290),
                r = a(63618),
                s = a(96103),
                n = a(60900),
                l = a(31010),
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
            let c = (e, t, a) => {
                    switch (e) {
                        case o.YANDEX:
                            if ('ru' === t) return 'https://ya.ru';
                            return;
                        case o.YANDEX_PROJECTS:
                            return 'https://yandex.'.concat(t, '/all?lang=').concat(a);
                        case o.COPYRIGHT_HOLDER:
                            return 'https://yandex.'.concat(t, '/support/music/performers-and-copyright-holders/copyright.html?lang=').concat(a);
                        case o.AGREEMENT:
                            return 'https://yandex.ru/legal/music_termsofuse?lang='.concat(a);
                        case o.RECOMMENDATION_RULES:
                            return 'https://music.yandex.ru/legal/recommendations/ru/#music';
                        case o.HELP:
                            return 'https://yandex.'.concat(t, '/support/music/index.html?lang=').concat(a);
                        case o.PRIVACY_POLICY:
                            return 'https://yandex.'.concat(t, '/legal/confidential/').concat(a);
                    }
                },
                d = (e) => {
                    let { formatMessage: t, language: a, tld: i, year: r } = e;
                    return {
                        year: r,
                        yandexMusic: { id: o.YANDEX, title: t({ id: 'footer.yandex-music' }), url: c(o.YANDEX, i, a) },
                        yandexProjects: { id: o.YANDEX_PROJECTS, title: t({ id: 'footer.yandex-project' }), url: c(o.YANDEX_PROJECTS, i, a) },
                    };
                };
            var u = a(15559),
                m = a(8626);
            let _ = (e) => e(new Date(), (0, m.m)());
            var v = a(61945),
                p = a(57594),
                h = a(77088),
                x = a.n(h),
                g = a(21732),
                y = a(71926),
                C = a(61258);
            let A = (e) => {
                    let { className: t, data: a } = e;
                    return (0, i.jsxs)('div', {
                        className: (0, r.$)(x().copyrights, t),
                        'data-test-id': g.S7.FOOTER_COPYRIGHTS,
                        children: [
                            (0, i.jsxs)(y.HL, {
                                variant: 'span',
                                type: 'text',
                                size: 's',
                                weight: 'medium',
                                className: x().text,
                                children: [
                                    '\xa9 ',
                                    a.year,
                                    ' \xa0',
                                    (0, i.jsx)(C.N, {
                                        target: '_blank',
                                        href: a.yandexMusic.url,
                                        className: (0, r.$)(x().copyrightLink, x().yandexMusicLink),
                                        'data-test-id': g.S7.FOOTER_YANDEX_MUSIC_LINK,
                                        children: a.yandexMusic.title,
                                    }),
                                ],
                            }),
                            (0, i.jsx)(y.HL, { variant: 'span', type: 'text', size: 's', weight: 'medium', children: ' • ' }),
                            (0, i.jsx)(C.N, {
                                target: '_blank',
                                href: a.yandexProjects.url,
                                className: x().copyrightLink,
                                'data-test-id': g.S7.FOOTER_YANDEX_PROJECT_LINK,
                                children: a.yandexProjects.title,
                            }),
                        ],
                    });
                },
                b = (e) => {
                    let { disclaimer: t, links: a } = e;
                    return (0, i.jsxs)('div', {
                        className: x().links,
                        children: [
                            (0, i.jsx)('ol', {
                                className: x().list,
                                'data-test-id': g.S7.FOOTER_LINKS_LIST,
                                children: a.map((e) => {
                                    let { id: t, title: a, url: r } = e;
                                    return (0, i.jsx)(
                                        'li',
                                        {
                                            className: x().item,
                                            children: (0, i.jsx)(C.N, { target: '_blank', href: r, className: x().link, 'data-test-id': g.S7.FOOTER_LINK, children: a }),
                                        },
                                        t,
                                    );
                                }),
                            }),
                            (0, i.jsx)(y.HL, {
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
                f = (e) => {
                    let { className: t, data: a } = e;
                    return (0, i.jsxs)('footer', {
                        className: (0, r.$)(x().root, x().important, t),
                        'data-test-id': g.S7.FOOTER,
                        children: [(0, i.jsx)(b, { links: a.links, disclaimer: a.disclaimer }), (0, i.jsx)(A, { data: a.copyrights })],
                    });
                };
            (0, s.PA)((e) => {
                let { className: t } = e,
                    { location: a } = (0, p.g)(),
                    { formatDate: r, formatMessage: s } = (0, n.A)(),
                    { language: l } = (0, v.h)(),
                    o = d({ formatMessage: s, language: l, tld: a.tld, year: _(r) });
                return (0, i.jsx)(A, { className: t, data: o });
            });
            let T = (0, s.PA)((e) => {
                var t;
                let { className: a } = e,
                    { experiments: s, location: m, user: h } = (0, p.g)(),
                    { formatDate: g, formatMessage: y } = (0, n.A)(),
                    { isEnabled: C } = null != (t = (0, l.P)()) ? t : {},
                    { language: A } = (0, v.h)(),
                    b = ((e) => {
                        let { checkExperiment: t, formatMessage: a, isWebApplication: i, language: r, tld: s, userRegion: n, year: l } = e;
                        return {
                            links: ((e) => {
                                let { formatMessage: t, isWebApplication: a, tld: i, language: r, userRegion: s } = e,
                                    n = { id: o.COPYRIGHT_HOLDER, title: t({ id: 'footer.links-copyright-holders' }), url: c(o.COPYRIGHT_HOLDER, i, r) },
                                    l = { id: o.PRIVACY_POLICY, title: t({ id: 'footer.links-privacy-policy' }), url: c(o.PRIVACY_POLICY, i, r) },
                                    d = { id: o.AGREEMENT, title: t({ id: 'footer.links-terms' }), url: c(o.AGREEMENT, i, r) },
                                    u = { id: o.RECOMMENDATION_RULES, title: t({ id: 'footer.links-recommendation-rules' }), url: c(o.RECOMMENDATION_RULES, i, r) },
                                    m = { id: o.HELP, title: t({ id: 'footer.links-help' }), url: c(o.HELP, i, r) },
                                    _ = [n, d, u];
                                return (a && 'ru' === s && _.push(l), _.push(m), _);
                            })({ formatMessage: a, isWebApplication: i, language: r, tld: s, userRegion: n }),
                            disclaimer: (0, u.v)({
                                checkExperiment: t,
                                getDisclaimerContent: () => a({ id: 'footer.disclaimer-content' }),
                                getExplicitContent: () => a({ id: 'footer.explicit-content' }),
                                userRegion: n,
                            }),
                            copyrights: d({ formatMessage: a, language: r, tld: s, year: l }),
                        };
                    })({
                        checkExperiment: (e, t) => s.checkExperiment(e, t),
                        formatMessage: y,
                        isWebApplication: !1,
                        tld: m.tld,
                        language: A,
                        userRegion: h.account.data.userSessionRegionIso,
                        year: _(g),
                    });
                return (0, i.jsx)(f, { className: (0, r.$)({ [x().root_withOffsetForDeeplink]: C }, a), data: b });
            });
        },
        98350: (e, t, a) => {
            'use strict';
            a.d(t, { X: () => i });
            var i = (function (e) {
                return ((e.PLAYLIST = 'playlist'), (e.ALBUM = 'album'), e);
            })({});
        },
    },
    (e) => {
        (e.O(
            0,
            [
                492, 7412, 3608, 1010, 7231, 2147, 9763, 4517, 8461, 4909, 1256, 3379, 3647, 1136, 6706, 1311, 5201, 5472, 8378, 900, 2536, 2146, 3353, 2474, 8035, 347,
                8758, 8506, 6050, 5806, 6241, 7702, 6874, 9155, 861, 9740, 4499, 8915, 6341, 4797, 4638, 1647, 5283, 4220, 9562, 7358,
            ],
            () => e((e.s = 35648)),
        ),
            (_N_E = e.O()));
    },
]);
