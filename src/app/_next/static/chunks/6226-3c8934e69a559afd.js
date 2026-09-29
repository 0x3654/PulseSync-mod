(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [6226],
    {
        1456: (t, e, i) => {
            'use strict';
            i.d(e, { Z: () => f });
            var a = i(32290),
                s = i(63618),
                r = i(96103),
                o = i(55178),
                n = i(60900),
                l = i(39407),
                d = i(21732),
                c = i(70280),
                u = i(71926),
                m = i(41677),
                _ = i(58294),
                p = i(57594),
                x = i(53514),
                h = i(85017),
                v = i(13798),
                k = i(61258),
                C = i(25649),
                g = i(24760),
                y = i(84141),
                A = i(14960),
                N = i(5856),
                P = i.n(N),
                T = i(50918),
                b = i.n(T);
            let f = (0, r.PA)((t) => {
                var e, i, r, N;
                let {
                        track: T,
                        className: f,
                        withAuthor: E = !1,
                        withSecondaryColor: D = !1,
                        withListeningProgress: I = !1,
                        captionSize: M = 'm',
                        explicitSize: j = 'xs',
                        withExplicitMark: L = !0,
                        titleContainerClassName: S,
                        textClassName: O,
                        playContextParams: R,
                        withTimeLeftText: w = !0,
                        ignoreDislikedStyles: B,
                        albumArtists: F,
                        withCustomTooltip: Y = !0,
                        hasLineClamp: z = !0,
                        withSavingQueryParams: H,
                        beforeTitle: $,
                        afterTitle: K,
                        withContextMenuArtists: G,
                        withArtistLink: U = !0,
                    } = t,
                    {
                        sonataState: W,
                        settings: { isMobile: q },
                    } = (0, p.g)(),
                    { formatMessage: X } = (0, n.A)(),
                    V = (0, g.$)({ withCustomTooltip: Y }),
                    Q = (0, y.O)({ track: T, withSavingQueryParams: H, entityType: h.n.AUDIOBOOK }),
                    Z = !!(I && R && T.shouldRememberPosition && T.streamProgress && T.durationMs),
                    J =
                        T.id === (null == (e = W.entityMeta) ? void 0 : e.id) &&
                        (null == (r = W.entityMeta) || null == (i = r.streamProgress) ? void 0 : i.endPositionSec),
                    tt = (0, A.d)(Z, T.streamProgress, J),
                    te = (0, o.useMemo)(() => (0, C.s)(T.artists, F), [T.artists, F, T.id]),
                    ti = te.length > 0 && E && !tt,
                    ta = (0, o.useCallback)(
                        (t) =>
                            (0, a.jsx)(c.m_, {
                                enabled: V && !q,
                                offsetOptions: 4,
                                placement: 'top',
                                text: T.title,
                                hoverSettings: x.V,
                                children: (0, a.jsx)(u.HL, {
                                    className: P().title,
                                    type: 'entity',
                                    size: M,
                                    variant: 'span',
                                    title: V ? void 0 : T.title,
                                    ...t,
                                    children: T.title,
                                }),
                            }),
                        [q, V, M, T.title],
                    ),
                    ts = (0, o.useMemo)(() => {
                        if (T.isRemoved) return (0, a.jsx)(l.A, { id: 'track-title.audiobook-not-found' });
                        if (T.hasTrackLink) {
                            var t;
                            return (0, a.jsx)(k.N, {
                                'aria-label': X({ id: 'entity-names.audiobook-name' }, { bookName: null == (t = T.mainAlbum) ? void 0 : t.title }),
                                className: P().albumLink,
                                href: T.url,
                                title: V ? void 0 : T.title,
                                onClick: Q,
                                'data-test-id': d.Kq.track.TRACK_TITLE,
                                children: ta(),
                            });
                        }
                        return ta({ 'data-test-id': d.Kq.track.TRACK_TITLE });
                    }, [T.isRemoved, T.hasTrackLink, null == (N = T.mainAlbum) ? void 0 : N.title, T.title, T.url, ta, X, V, Q]),
                    tr = (0, o.useMemo)(() => +!!z, [z]);
                return (0, a.jsx)('div', {
                    className: (0, s.$)(P().root, { [P().root_disabled]: !T.isAvailable, [P().root_disliked]: T.isDisliked && !B, [P().root_withSecondaryColor]: D }, f),
                    children: (0, a.jsxs)('div', {
                        className: (0, s.$)(P().metaContainer, b().metaContainer, { [b().metaContainer_oneLine]: !E }),
                        children: [
                            (0, a.jsxs)('div', {
                                className: (0, s.$)(P().titleContainer, S, b().titleContainer),
                                children: [
                                    (0, a.jsxs)(u.HL, {
                                        className: (0, s.$)(P().text, O),
                                        type: 'entity',
                                        size: M,
                                        variant: 'div',
                                        lineClamp: 1,
                                        children: [
                                            $,
                                            ts,
                                            !T.isRemoved &&
                                                T.version &&
                                                (0, a.jsxs)(u.HL, {
                                                    className: (0, s.$)(P().text, P().version),
                                                    type: 'entity',
                                                    size: M,
                                                    weight: 'medium',
                                                    variant: 'span',
                                                    title: V ? void 0 : T.version,
                                                    children: ['\xa0', T.version],
                                                }),
                                        ],
                                    }),
                                    T.explicitDisclaimer &&
                                        L &&
                                        (0, a.jsx)(v.N, {
                                            containerClassName: P().explicitMarkContainer,
                                            getDescriptionTexts: T.getDescriptionTexts,
                                            variant: T.explicitDisclaimer,
                                            className: P().explicitMark,
                                            size: j,
                                            trackId: T.id,
                                        }),
                                    K,
                                ],
                            }),
                            ti &&
                                (0, a.jsx)(u.HL, {
                                    type: 'entity',
                                    size: M,
                                    variant: 'div',
                                    lineClamp: 1,
                                    className: (0, s.$)(P().text, b().artists, O),
                                    children: (0, a.jsx)(m.i, {
                                        className: (0, s.$)(P().text, { [P().artists]: z }, O),
                                        linkClassName: (0, s.$)(P().text, P().link),
                                        captionClassName: (0, s.$)(P().text, P().artistCaption),
                                        artists: te,
                                        withLink: T.isNonUserGenerated && U,
                                        lineClamp: tr,
                                        captionSize: M,
                                        withContextMenu: G,
                                    }),
                                }),
                            Z &&
                                T.streamProgress &&
                                R &&
                                (0, a.jsx)(_.B, {
                                    className: (0, s.$)(b().progress, { [b().progress_withPreviousInfo]: ti, [b().progress_disabled]: !T.isAvailable || T.isDisliked }),
                                    id: T.id,
                                    albumId: T.albumId,
                                    streamProgress: T.streamProgress,
                                    durationMs: T.durationMs || 0,
                                    playContextParams: R,
                                    withTimeLeftText: w,
                                }),
                        ],
                    }),
                });
            });
        },
        8626: (t, e, i) => {
            'use strict';
            i.d(e, { m: () => a });
            let a = () => ({ year: 'numeric' });
        },
        8677: (t, e, i) => {
            'use strict';
            i.d(e, { Q: () => O });
            var a = i(32290),
                s = i(63618),
                r = i(96103),
                o = i(55178),
                n = i(60900),
                l = i(39407),
                d = i(99923),
                c = i(21732),
                u = i(91027),
                m = i(82586),
                _ = i(70280),
                p = i(71926),
                x = i(17705),
                h = i(63423);
            let v = (t) => {
                let { className: e, variant: i = 'text', onClick: s, iconClassName: r, iconSize: l, size: d = 's', ariaLabel: u } = t,
                    { formatMessage: _ } = (0, n.A)(),
                    p = null != u ? u : _({ id: 'play-queue.delete-from-queue' }),
                    x = (0, o.useCallback)(
                        (t) => {
                            (null == s || s(), t.stopPropagation());
                        },
                        [s],
                    );
                return (0, a.jsx)(h.$, {
                    className: e,
                    withRipple: !1,
                    variant: i,
                    size: d,
                    radius: 'round',
                    'aria-label': p,
                    onClick: x,
                    icon: (0, a.jsx)(m.I, { size: l, className: r, variant: 'bucket' }),
                    'data-test-id': c.OA.track.REMOVE_BUTTON,
                });
            };
            var k = i(71735),
                C = i(54391),
                g = i(22191),
                y = i(28999),
                A = i(57594),
                N = i(92744),
                P = i(29268),
                T = i(4008),
                b = i(53161),
                f = i(52843),
                E = i(39400),
                D = i(54714),
                I = i.n(D),
                M = i(38420),
                j = i(92565),
                L = i.n(j);
            let S = (0, r.PA)((t) => {
                    let { track: e } = t,
                        { formatMessage: i } = (0, n.A)();
                    return e.isDownloaded
                        ? (0, a.jsx)(m.I, {
                              size: 'xxs',
                              variant: 'downloaded',
                              'aria-label': i({ id: 'offline.track-downloaded' }),
                              'data-test-id': c.Kq.track.DOWNLOADED_TRACK_ICON,
                          })
                        : e.isDownloading
                          ? (0, a.jsx)(M.A, { value: e.downloadingProgress, size: 16, className: L().downloadingProgress, progressBarClassName: L().progress })
                          : null;
                }),
                O = (0, r.PA)((t) => {
                    var e, i;
                    let {
                            className: r,
                            track: h,
                            withLightning: D,
                            ignoreDislikedStyles: M,
                            onLikeClick: j,
                            utmLink: L,
                            withSecondaryColor: O,
                            handleRemove: R,
                            withTrailer: w = !0,
                            likeIconSize: B = 'xxs',
                            removeButtonAriaLabel: F,
                            hideControls: Y,
                        } = t,
                        { user: z, trailer: H } = (0, A.g)(),
                        { formatMessage: $ } = (0, n.A)(),
                        { sendLikeSearchFeedback: K } = (0, y.z)(),
                        [G, U] = (0, o.useState)(!1),
                        [W, q] = (0, o.useState)(!1),
                        X = (0, k.P)(),
                        V = (0, x.K)(h),
                        Q = (0, g.P)(Math.round((null != (i = h.durationMs) ? i : 0) / 1e3)),
                        Z = (0, C.F)(),
                        J = z.hasPlus,
                        tt = !h.isRemoved && h.isAvailable && !Y,
                        te = (0, u.c)(async () => {
                            (G || h.isLiked || (U(!0), null == K || K()), await V(), null == j || j(h.isLiked));
                        }),
                        ti = (0, u.c)((t) => {
                            t.stopPropagation();
                        }),
                        ta = (0, u.c)((t) => {
                            if ((t.stopPropagation(), X())) return void t.preventDefault();
                            (H.openTrackTrailer(h.id), Z(d.DomainObjectType.Track, h.id));
                        }),
                        ts = (0, o.useMemo)(() => {
                            if (tt)
                                return (0, a.jsx)('div', {
                                    onClick: ti,
                                    children: (0, a.jsx)(E._, {
                                        track: h,
                                        open: W,
                                        onOpenChange: q,
                                        placement: 'bottom',
                                        icon: (0, a.jsx)(m.I, { size: 'xs', variant: 'more' }),
                                        size: 'xs',
                                        utmLink: L,
                                        className: (0, s.$)(I().contextMenu, { [I().contextMenu_visible]: W }),
                                        handleRemove: R,
                                        withTrailer: w,
                                        'data-test-id': c.Kq.track.TRACK_CONTEXT_MENU_BUTTON,
                                    }),
                                });
                        }, [ti, R, W, tt, w, h, L]);
                    return (0, a.jsxs)('div', {
                        className: (0, s.$)(I().root, I().controls, r, {
                            [I().controls_dislikedControls]: h.isDisliked,
                            [I().controls_dislikedColors]: h.isDisliked && !M,
                            [I().controls_disabled]: !h.isAvailable,
                            [I().root_withSecondaryColor]: O,
                        }),
                        children: [
                            D &&
                                (0, a.jsx)(m.I, {
                                    'aria-label': $({ id: 'entity-names.popular-among-users' }),
                                    size: 'xxs',
                                    className: I().lightning,
                                    variant: 'lightning',
                                }),
                            h.isUGC &&
                                (0, a.jsxs)(_.m_, {
                                    placement: 'bottom',
                                    offsetOptions: 8,
                                    children: [
                                        (0, a.jsx)(m.I, {
                                            'aria-label': $({ id: 'ugc.track-description' }),
                                            size: 'xxs',
                                            className: I().ugcIcon,
                                            variant: 'eye_crossed',
                                            'data-test-id': c.Kq.track.UGC_TRACK_ICON,
                                        }),
                                        (0, a.jsx)(_.ZI, { children: (0, a.jsx)(l.A, { id: 'ugc.track-description' }) }),
                                    ],
                                }),
                            J && (0, a.jsx)('div', { className: (0, s.$)(I().item, I().downloadIcon), children: (0, a.jsx)(S, { track: h }) }),
                            R && !Y && (0, a.jsx)(v, { size: 'xs', iconSize: 'xxs', className: (0, s.$)(I().item, I().removeButton), onClick: R, ariaLabel: F }),
                            tt &&
                                (0, a.jsx)(T.WithOffline, {
                                    fallback: (0, a.jsx)(N.c, {
                                        size: 'xs',
                                        iconSize: B,
                                        className: (0, s.$)(I().item, I().likeIcon),
                                        isLiked: h.isLiked,
                                        onClick: te,
                                        disabled: !z.isAuthorized,
                                    }),
                                }),
                            (null == (e = h.trailer) ? void 0 : e.isAvailable) &&
                                h.isAvailable &&
                                (0, a.jsx)(T.WithOffline, {
                                    fallback: (0, a.jsx)(P.k, {
                                        className: (0, s.$)(I().item, I().trailerIcon),
                                        iconSize: 'xs',
                                        variant: 'text',
                                        onClick: ta,
                                        withRipple: !1,
                                    }),
                                }),
                            (0, a.jsxs)('div', {
                                className: (0, s.$)(I().item, I().contextMenuWrapper),
                                children: [
                                    'number' == typeof h.durationMs &&
                                        (0, a.jsx)(p.HL, {
                                            variant: 'span',
                                            className: (0, s.$)(I().duration, { [I().duration_hidden]: W && tt }),
                                            type: 'entity',
                                            size: 'm',
                                            weight: 'medium',
                                            'aria-label': Q,
                                            role: 'text',
                                            'data-test-id': c.Kq.track.TRACK_DURATION,
                                            children: (0, a.jsx)('span', {
                                                'aria-hidden': 'true',
                                                children: ((t) => {
                                                    let e = Math.round((t || 0) / b.k7);
                                                    return (0, f.E)(e);
                                                })(h.durationMs),
                                            }),
                                        }),
                                    ts,
                                ],
                            }),
                        ],
                    });
                });
        },
        13757: (t, e, i) => {
            'use strict';
            i.d(e, { r: () => s, L: () => r });
            let a = (t, e) => t.getDate() === e.getDate() && t.getMonth() === e.getMonth() && t.getFullYear() === e.getFullYear();
            var s = (function (t) {
                return ((t.TODAY = 'today'), (t.YESTERDAY = 'yesterday'), (t.DATE = 'date'), (t.DATE_WITH_YEAR = 'date-with-year'), t);
            })({});
            let r = (t) => {
                let e = new Date();
                if (a(e, t)) return 'today';
                let i = new Date();
                return (i.setDate(i.getDate() - 1), a(i, t)) ? 'yesterday' : e.getFullYear() !== t.getFullYear() ? 'date-with-year' : 'date';
            };
        },
        14960: (t, e, i) => {
            'use strict';
            i.d(e, { d: () => s });
            var a = i(57594);
            let s = (t, e, i) => {
                let {
                    settings: { isMobile: s },
                } = (0, a.g)();
                return !!(s && t && (((null == e ? void 0 : e.endPositionSec) && e.endPositionSec > 0) || (null == e ? void 0 : e.hasEverFinished) || (i && i > 0)));
            };
        },
        15559: (t, e, i) => {
            'use strict';
            i.d(e, { v: () => s });
            var a = i(79406);
            let s = (t) => {
                let { checkExperiment: e, getDisclaimerContent: i, getExplicitContent: s, userRegion: r } = t;
                return 'ru' === r && e(a.z.WebNextFooterDisclaimer, 'on') ? i() : s();
            };
        },
        20753: (t) => {
            t.exports = { root: 'DragAndDropIcon_root__OstQU', root_active: 'DragAndDropIcon_root_active__xOTKt' };
        },
        21878: (t) => {
            t.exports = {
                card_root: 'HorizontalCardContainer_root__YoAAP',
                dateWithName: 'PodcastMeta_dateWithName__cKy0o',
                podcastMetaContainer: 'PodcastMeta_podcastMetaContainer__pFASj',
                podcastTitleContainer: 'PodcastMeta_podcastTitleContainer__p9Zja',
                podcastName: 'PodcastMeta_podcastName__iQeNK',
                progress: 'PodcastMeta_progress__5DqlO',
                progress_disabled: 'PodcastMeta_progress_disabled__KX04q',
                progress_withPreviousInfo: 'PodcastMeta_progress_withPreviousInfo__eOrCi',
                soonDate: 'PodcastMeta_soonDate__zGuG9',
                dateDisabled: 'PodcastMeta_dateDisabled__DxjtJ',
                dateDisliked: 'PodcastMeta_dateDisliked__95MlL',
            };
        },
        27616: (t, e, i) => {
            'use strict';
            i.d(e, { w: () => j });
            var a = i(32290),
                s = i(63618),
                r = i(96103),
                o = i(21916),
                n = i(55178),
                l = i(60900),
                d = i(39407),
                c = i(81354),
                u = i(21732),
                m = i(91027),
                _ = i(6752),
                p = i(70280),
                x = i(71926),
                h = i(58294),
                v = i(13757),
                k = i(19383),
                C = i(32641),
                g = i(57594),
                y = i(53514),
                A = i(85017),
                N = i(13798),
                P = i(61258),
                T = i(24760),
                b = i(84141),
                f = i(14960),
                E = i(5856),
                D = i.n(E),
                I = i(21878),
                M = i.n(I);
            let j = (0, r.PA)((t) => {
                var e, i, r, E, I, j;
                let {
                        track: L,
                        className: S,
                        withPodcastName: O = !1,
                        withDate: R = !0,
                        withSecondaryColor: w = !1,
                        withListeningProgress: B = !1,
                        captionSize: F = 'm',
                        explicitSize: Y = 'xs',
                        withExplicitMark: z = !0,
                        titleContainerClassName: H,
                        textClassName: $,
                        playContextParams: K,
                        withTimeLeftText: G = !0,
                        ignoreDislikedStyles: U,
                        withCustomTooltip: W = !0,
                        withSavingQueryParams: q,
                        beforeTitle: X,
                        afterTitle: V,
                        titleLineClamp: Q = 1,
                        podcastMetaClassName: Z,
                        progressClassName: J,
                        withAlbumTitleLink: tt = !0,
                    } = t,
                    {
                        fullscreenPlayer: te,
                        sonataState: ti,
                        settings: { isMobile: ta },
                    } = (0, g.g)(),
                    { formatMessage: ts } = (0, l.A)(),
                    tr = (0, T.$)({ withCustomTooltip: W }),
                    to = (0, o.useSearchParams)(),
                    tn = L.getUrl(q ? Object.fromEntries(to) : void 0),
                    tl = L.pubDate ? new Date(L.pubDate) : new Date(),
                    td = (0, v.L)(tl),
                    tc = !1,
                    tu = (0, C.Z)(null != (I = null == (e = L.mainAlbum) ? void 0 : e.url) ? I : ''),
                    tm = (0, n.useMemo)(() => {
                        var t;
                        let e = ts({ id: 'entity-names.podcast-name' }, { podcastName: L.title });
                        return ''.concat(e, ' ').concat(null != (t = L.version) ? t : '');
                    }, [ts, L.title, L.version]),
                    t_ = !!(B && K && L.shouldRememberPosition && L.streamProgress && L.durationMs),
                    tp =
                        L.id === (null == (i = ti.entityMeta) ? void 0 : i.id) &&
                        (null == (E = ti.entityMeta) || null == (r = E.streamProgress) ? void 0 : r.endPositionSec),
                    tx = (0, f.d)(t_, L.streamProgress, tp),
                    th = L.mainAlbum && O && !tx,
                    tv = L.pubDate && R && !tx,
                    tk = (0, k.l)({ entity: null != (j = L.mainAlbum) ? j : null, entityType: A.n.PODCAST, callback: tu }),
                    tC = (0, m.c)((t) => {
                        (te.modal.isOpened && te.modal.close(), tk(t));
                    }),
                    tg = (0, b.O)({ track: L, withSavingQueryParams: q, entityType: A.n.PODCAST }),
                    ty = (0, n.useCallback)(() => {
                        switch (td) {
                            case v.r.TODAY:
                                return (0, a.jsx)(d.A, { id: 'interface-actions.date-today' });
                            case v.r.YESTERDAY:
                                return (0, a.jsx)(d.A, { id: 'interface-actions.date-yesterday' });
                            case v.r.DATE_WITH_YEAR:
                                return (0, a.jsx)(c.XU, { value: L.pubDate, month: 'long', day: 'numeric', year: 'numeric' });
                            default:
                                return (0, a.jsx)(c.XU, { value: L.pubDate, month: 'long', day: 'numeric' });
                        }
                    }, [L.pubDate, td]);
                L.pubDate && R && (tc = [v.r.TODAY, v.r.YESTERDAY].includes(td));
                let tA = (0, n.useCallback)(
                        (t) =>
                            (0, a.jsx)(p.m_, {
                                enabled: tr && !ta,
                                offsetOptions: 4,
                                placement: 'top',
                                text: L.title,
                                hoverSettings: y.V,
                                children: (0, a.jsx)(x.HL, {
                                    className: D().title,
                                    type: 'entity',
                                    size: F,
                                    variant: 'span',
                                    title: tr ? void 0 : L.title,
                                    ...t,
                                    children: L.title,
                                }),
                            }),
                        [ta, tr, F, L.title],
                    ),
                    tN = (0, n.useMemo)(
                        () =>
                            L.isRemoved
                                ? (0, a.jsx)(p.m_, {
                                      enabled: tr && !ta,
                                      offsetOptions: 4,
                                      placement: 'top',
                                      text: ts({ id: 'track-title.podcast-not-found' }),
                                      hoverSettings: y.V,
                                      children: (0, a.jsx)('span', { children: (0, a.jsx)(d.A, { id: 'track-title.podcast-not-found' }) }),
                                  })
                                : L.hasTrackLink
                                  ? (0, a.jsx)(P.N, {
                                        onClick: tg,
                                        className: D().albumLink,
                                        href: tn,
                                        'aria-label': tm,
                                        title: tr ? void 0 : L.title,
                                        'data-test-id': u.Kq.track.TRACK_TITLE,
                                        children: tA(),
                                    })
                                  : tA({ 'data-test-id': u.Kq.track.TRACK_TITLE }),
                        [ta, L.isRemoved, L.hasTrackLink, L.title, tA, tr, ts, tg, tn, tm],
                    ),
                    tP = (0, _.L)(() => {
                        var t;
                        if (!th) return;
                        let e = (0, a.jsx)(p.m_, {
                            enabled: tr && !ta,
                            offsetOptions: 4,
                            placement: 'top',
                            text: L.mainAlbum.title,
                            hoverSettings: y.V,
                            children: (0, a.jsx)(x.HL, { variant: 'span', type: 'entity', size: F, className: D().albumTitle, children: L.mainAlbum.title }),
                        });
                        return tt
                            ? (0, a.jsx)(P.N, {
                                  'aria-label': ts({ id: 'entity-names.podcast-name' }, { podcastName: L.mainAlbum.title }),
                                  className: D().link,
                                  href: null == (t = L.mainAlbum) ? void 0 : t.url,
                                  title: tr ? void 0 : L.mainAlbum.title,
                                  onClick: tC,
                                  'data-test-id': u.Kq.track.TRACK_PARENT_PODCAST_TITLE,
                                  children: e,
                              })
                            : (0, a.jsx)('span', { 'data-test-id': u.Kq.track.TRACK_PARENT_PODCAST_TITLE, children: e });
                    });
                return (0, a.jsx)('div', {
                    className: (0, s.$)(D().root, { [D().root_disabled]: !L.isAvailable, [D().root_disliked]: L.isDisliked && !U, [D().root_withSecondaryColor]: w }, S),
                    children: (0, a.jsxs)('div', {
                        className: (0, s.$)(D().metaContainer, M().podcastMetaContainer, Z),
                        children: [
                            t_ &&
                                K &&
                                L.streamProgress &&
                                (0, a.jsx)(h.B, {
                                    className: (0, s.$)(M().progress, J, {
                                        [M().progress_withPreviousInfo]: th || tv,
                                        [M().progress_disabled]: !L.isAvailable || L.isDisliked,
                                    }),
                                    id: L.id,
                                    albumId: L.albumId,
                                    streamProgress: L.streamProgress,
                                    durationMs: L.durationMs || 0,
                                    playContextParams: K,
                                    withTimeLeftText: G,
                                }),
                            (0, a.jsxs)('div', {
                                className: (0, s.$)(D().titleContainer, H, M().podcastTitleContainer),
                                children: [
                                    (0, a.jsxs)(x.HL, {
                                        className: (0, s.$)(D().text, $),
                                        type: 'entity',
                                        size: F,
                                        variant: 'div',
                                        lineClamp: Q,
                                        children: [
                                            X,
                                            tN,
                                            !L.isRemoved &&
                                                L.version &&
                                                (0, a.jsxs)(x.HL, {
                                                    className: (0, s.$)(D().text, D().version),
                                                    type: 'entity',
                                                    size: F,
                                                    weight: 'medium',
                                                    variant: 'span',
                                                    title: tr ? void 0 : L.version,
                                                    children: ['\xa0', L.version],
                                                }),
                                        ],
                                    }),
                                    L.explicitDisclaimer &&
                                        z &&
                                        (0, a.jsx)(N.N, {
                                            containerClassName: D().explicitMarkContainer,
                                            getDescriptionTexts: L.getDescriptionTexts,
                                            variant: L.explicitDisclaimer,
                                            className: D().explicitMark,
                                            size: Y,
                                            trackId: L.id,
                                        }),
                                    V,
                                ],
                            }),
                            (th || tv) &&
                                (0, a.jsxs)(x.HL, {
                                    type: 'entity',
                                    size: F,
                                    variant: 'div',
                                    lineClamp: 1,
                                    className: (0, s.$)(D().text, M().podcastName, $),
                                    children: [
                                        tP,
                                        tv &&
                                            (0, a.jsx)(x.HL, {
                                                variant: 'span',
                                                type: 'entity',
                                                size: F,
                                                className: (0, s.$)({
                                                    [M().dateWithName]: th,
                                                    [M().soonDate]: tc,
                                                    [M().dateDisabled]: !L.isAvailable,
                                                    [M().dateDisliked]: L.isDisliked && !U,
                                                }),
                                                children: ty(),
                                            }),
                                    ],
                                }),
                        ],
                    }),
                });
            });
        },
        31010: (t, e, i) => {
            'use strict';
            i.d(e, { H: () => s, P: () => r });
            var a = i(55178);
            let s = (0, a.createContext)(null),
                r = () => (0, a.useContext)(s);
        },
        32468: (t, e, i) => {
            'use strict';
            i.d(e, { A: () => o });
            var a = i(32290),
                s = i(77088),
                r = i.n(s);
            let o = (t) => {
                let { children: e } = t;
                return (0, a.jsx)('footer', { className: r().empty });
            };
        },
        34223: (t, e, i) => {
            'use strict';
            i.d(e, { D: () => x });
            var a = i(32290),
                s = i(98350),
                r = i(63618),
                o = i(55178),
                n = i(60900),
                l = i(79856),
                d = i(91063),
                c = i.n(d);
            let u = (t) => {
                let { isActive: e, className: i } = t,
                    { formatMessage: s } = (0, n.A)(),
                    d = (0, o.useMemo)(() => s({ id: 'loading-messages.entity-is-loading' }, { entityName: s({ id: 'entity-names.track' }) }), [s]);
                return (0, a.jsxs)('div', {
                    'aria-label': d,
                    'aria-live': e ? 'polite' : 'off',
                    'aria-busy': e,
                    className: (0, r.$)(c().root, i),
                    children: [
                        (0, a.jsxs)('div', {
                            className: c().infoContainer,
                            children: [
                                (0, a.jsx)('div', { className: c().coverContainer, children: (0, a.jsx)(l.W, { isActive: e, className: c().cover, radius: 'round' }) }),
                                (0, a.jsx)('div', { className: c().textContainer, children: (0, a.jsx)(l.W, { isActive: e, className: c().title, radius: 'l' }) }),
                            ],
                        }),
                        (0, a.jsx)(l.W, { isActive: e, className: c().action, radius: 'l' }),
                    ],
                });
            };
            var m = i(89661),
                _ = i.n(m);
            let p = (t) => {
                    let { isActive: e, className: i } = t,
                        { formatMessage: s } = (0, n.A)(),
                        d = (0, o.useMemo)(() => s({ id: 'loading-messages.entity-is-loading' }, { entityName: s({ id: 'entity-names.track' }) }), [s]);
                    return (0, a.jsxs)('div', {
                        'aria-label': d,
                        'aria-live': e ? 'polite' : 'off',
                        'aria-busy': e,
                        className: (0, r.$)(_().root, i),
                        children: [
                            (0, a.jsxs)('div', {
                                className: _().infoContainer,
                                children: [
                                    (0, a.jsx)(l.W, { isActive: e, className: _().cover, radius: 's' }),
                                    (0, a.jsx)('div', { className: _().textContainer, children: (0, a.jsx)(l.W, { isActive: e, className: _().title, radius: 'l' }) }),
                                ],
                            }),
                            (0, a.jsx)(l.W, { isActive: e, className: _().action, radius: 'l' }),
                        ],
                    });
                },
                x = (t) => {
                    let { isActive: e, variant: i, className: r } = t;
                    switch (i) {
                        case s.X.PLAYLIST:
                            return (0, a.jsx)(p, { isActive: e, className: r });
                        case s.X.ALBUM:
                            return (0, a.jsx)(u, { isActive: e, className: r });
                    }
                };
        },
        34783: (t) => {
            t.exports = {
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
        35587: (t) => {
            t.exports = {
                root: 'CommonTrack_root__i6shE',
                root_disabled: 'CommonTrack_root_disabled__vDyCm',
                root_current: 'CommonTrack_root_current__MNrpS',
                ripple: 'CommonTrack_ripple__wnpUs',
            };
        },
        43565: (t, e, i) => {
            'use strict';
            i.d(e, { O: () => l });
            var a = i(32290),
                s = i(63618),
                r = i(82586),
                o = i(20753),
                n = i.n(o);
            let l = (t) => {
                let { isDragging: e, className: i } = t;
                return (0, a.jsx)(r.I, { variant: 'dragDots', size: 'xxs', className: (0, s.$)(n().root, { [n().root_active]: e }, i), 'aria-hidden': !0 });
            };
        },
        50918: (t) => {
            t.exports = {
                card_root: 'HorizontalCardContainer_root__YoAAP',
                explicitMark: 'AudiobookMeta_explicitMark__1rN7x',
                metaContainer: 'AudiobookMeta_metaContainer__F7d9X',
                metaContainer_oneLine: 'AudiobookMeta_metaContainer_oneLine__D9CQh',
                titleContainer: 'AudiobookMeta_titleContainer__GIY6Q',
                artists: 'AudiobookMeta_artists__ScMoq',
                progress: 'AudiobookMeta_progress__i3_kS',
                progress_disabled: 'AudiobookMeta_progress_disabled__D_7E9',
                progress_withPreviousInfo: 'AudiobookMeta_progress_withPreviousInfo__97Hxr',
            };
        },
        54171: (t, e, i) => {
            'use strict';
            i.d(e, { w: () => r });
            var a = i(19383),
                s = i(85017);
            let r = (t) => {
                let { track: e, callback: i, disclaimerRejectHandler: r } = t;
                return (0, a.l)({ entity: e, entityType: s.n.TRACK, callback: i, onReject: r, preventDefaultWhenSafe: !1 });
            };
        },
        54714: (t) => {
            t.exports = {
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
        58294: (t, e, i) => {
            'use strict';
            i.d(e, { B: () => g });
            var a = i(32290),
                s = i(63618),
                r = i(96103),
                o = i(55178),
                n = i(39407),
                l = i(21732),
                d = i(74924),
                c = i(82586),
                u = i(71926),
                m = i(72676),
                _ = i(90169),
                p = i(44128),
                x = i(57594),
                h = i(83557),
                v = i(66436),
                k = i(95082),
                C = i.n(k);
            let g = (0, r.PA)((t) => {
                var e, i, r, k, g, y, A, N, P;
                let { className: T, id: b, albumId: f, streamProgress: E, durationMs: D, playContextParams: I, withTimeLeftText: M = !0, isFinishedLabelHidden: j } = t,
                    L = (0, p.e)(),
                    { sonataState: S, album: O } = (0, x.g)(),
                    R = Math.floor(D / 1e3),
                    [w, B] = (0, o.useState)(!1),
                    F = (0, v.$)(),
                    { isPlaying: Y, isCurrent: z } = (0, _.D)({ playContextParams: I, entityId: f ? ''.concat(b, ':').concat(f) : b });
                ((0, o.useEffect)(() => {
                    if (!z) return void B(!1);
                    let t =
                        null == L
                            ? void 0
                            : L.state.playerState.status.onChange(() => {
                                  (null == L ? void 0 : L.state.playerState.status.value) === m.MT.BUFFERING && B(!0);
                              });
                    return () => {
                        null == t || t();
                    };
                }, [L, E, z, Y]),
                    (0, o.useEffect)(() => {
                        var t;
                        (null == O || null == (t = O.meta) ? void 0 : t.listeningFinished)
                            ? (E.updateEndPositionSec(0), E.updateEverFinished(!0))
                            : (null == O ? void 0 : O.allTracksUnfinished) && E.updateEverFinished(!1);
                    }, [E, null == O ? void 0 : O.allTracksUnfinished, null == O || null == (e = O.meta) ? void 0 : e.listeningFinished]),
                    (0, o.useEffect)(() => {
                        var t, e;
                        (z &&
                            (null == S || null == (t = S.entityMeta) ? void 0 : t.streamProgress) &&
                            E &&
                            S.entityMeta.streamProgress.hasEverFinished !== E.hasEverFinished &&
                            E.updateEverFinished(!!S.entityMeta.streamProgress.hasEverFinished),
                            R - ((null == E ? void 0 : E.endPositionSec) || 0) < 1 &&
                                ((null == S || null == (e = S.entityMeta) ? void 0 : e.streamProgress) &&
                                    z &&
                                    (S.entityMeta.streamProgress.updateEverFinished(!0), S.entityMeta.streamProgress.updateEndPositionSec(0)),
                                null == E || E.updateEverFinished(!0)));
                    }, [
                        z,
                        null == S || null == (i = S.entityMeta) ? void 0 : i.streamProgress,
                        null == S || null == (k = S.entityMeta) || null == (r = k.streamProgress) ? void 0 : r.hasEverFinished,
                        E,
                        E.hasEverFinished,
                        E.endPositionSec,
                        R,
                    ]),
                    (0, o.useEffect)(() => {
                        if (!z) return;
                        let t =
                            null == L
                                ? void 0
                                : L.state.playerState.progress.onChange(() => {
                                      var t;
                                      let e = L.state.playerState.progress.value,
                                          i = null == S || null == (t = S.entityMeta) ? void 0 : t.streamProgress;
                                      (0 !== e.position && w && E.updateEndPositionSec(e.position),
                                          z &&
                                              parseInt(''.concat(null == i ? void 0 : i.endPositionSec), 10) !== parseInt(''.concat(e.position), 10) &&
                                              (null == i || i.updateEndPositionSec(e.position)));
                                  });
                        return () => {
                            null == t || t();
                        };
                    }, [L, E, z, Y, w, b, null == S ? void 0 : S.entityMeta]));
                let H = (z && (null == S || null == (y = S.entityMeta) || null == (g = y.streamProgress) ? void 0 : g.endPositionSec)) || E.endPositionSec,
                    $ = (0, h.m)(null != H ? H : 0, R),
                    K = (0, o.useMemo)(() => {
                        var t, e, i;
                        if (
                            ((z && (null == S || null == (e = S.entityMeta) || null == (t = e.streamProgress) ? void 0 : t.hasEverFinished)) ||
                                (null == E ? void 0 : E.hasEverFinished) ||
                                (null == O || null == (i = O.meta) ? void 0 : i.listeningFinished)) &&
                            !j
                        )
                            return (0, a.jsxs)(a.Fragment, {
                                children: [
                                    (0, a.jsx)(u.HL, {
                                        lineClamp: 1,
                                        variant: 'div',
                                        className: (0, s.$)(C().text, { [C().text_withoutTimeLeft]: !M }),
                                        'data-test-id': l.OA.track.LISTENING_PROGRESS_FINISHED_TEXT,
                                        children: (0, a.jsx)(n.A, { id: 'time.finished' }),
                                    }),
                                    (0, a.jsx)(c.I, {
                                        size: 'xxs',
                                        variant: 'check',
                                        className: C().checkIcon,
                                        'data-test-id': l.OA.track.LISTENING_PROGRESS_FINISHED_ICON,
                                    }),
                                ],
                            });
                        if (!H || 0 === H) return;
                        let r = R - H,
                            o = F(r);
                        return (0, a.jsxs)(a.Fragment, {
                            children: [
                                (0, a.jsx)(u.HL, {
                                    lineClamp: 1,
                                    variant: 'div',
                                    className: (0, s.$)(C().text, { [C().text_withoutTimeLeft]: !M }),
                                    'data-test-id': l.OA.track.LISTENING_PROGRESS_TIMINGS_TEXT,
                                    children: o,
                                }),
                                r > 1 || j
                                    ? (0, a.jsx)(d.q, {
                                          'aria-valuetext': $,
                                          'aria-busy': z && Y,
                                          value: H,
                                          max: R,
                                          'data-test-id': l.OA.track.LISTENING_PROGRESS_TIMINGS_PROGRESS,
                                      })
                                    : (0, a.jsx)(c.I, {
                                          size: 'xxs',
                                          variant: 'check',
                                          className: C().checkIcon,
                                          'data-test-id': l.OA.track.LISTENING_PROGRESS_TIMINGS_ICON,
                                      }),
                            ],
                        });
                    }, [
                        R,
                        null == E ? void 0 : E.hasEverFinished,
                        M,
                        F,
                        z,
                        Y,
                        null == S || null == (N = S.entityMeta) || null == (A = N.streamProgress) ? void 0 : A.hasEverFinished,
                        null == O || null == (P = O.meta) ? void 0 : P.listeningFinished,
                        j,
                        H,
                        $,
                    ]);
                return (0, a.jsx)('div', { className: (0, s.$)(C().root, T), 'data-test-id': l.OA.track.LISTENING_PROGRESS, children: K });
            });
        },
        62134: (t, e, i) => {
            'use strict';
            i.d(e, { D: () => a });
            var a = (function (t) {
                return ((t.ALBUM = 'album'), (t.PLAYLIST = 'playlist'), t);
            })({});
        },
        66436: (t, e, i) => {
            'use strict';
            i.d(e, { $: () => r });
            var a = i(55178),
                s = i(60900);
            let r = () => {
                let { formatMessage: t } = (0, s.A)();
                return (0, a.useCallback)(
                    function (e) {
                        let i = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
                            a = Math.floor(e / 60),
                            s = function (e) {
                                let i = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                                    a = t({ id: 'time.minutes-left' }, { minutes: e });
                                return i ? ''.concat(t({ id: 'time.left' }, { time: e }), ' ').concat(a) : a;
                            };
                        if (e < 1) return t({ id: 'time.finished' });
                        if (e < 60)
                            return (function (e) {
                                let i = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                                    a = t({ id: 'time.seconds-left' }, { seconds: e });
                                return i ? ''.concat(t({ id: 'time.left' }, { time: e }), ' ').concat(a) : a;
                            })(Math.floor(e), i);
                        if (a < 60) return s(a, i);
                        let r = Math.floor(a / 60),
                            o = a % 60,
                            n = (function (e) {
                                let i = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                                return i ? t({ id: 'time.hours-left' }, { hours: e }) : t({ id: 'time.hours' }, { hours: e });
                            })(r, i);
                        return o > 0 ? ''.concat(n, ' ').concat(s(o)) : n;
                    },
                    [t],
                );
            };
        },
        73585: (t) => {
            t.exports = {
                playButtonCell: 'TrackNonMusic_playButtonCell__HaJrc',
                controlsBarCell: 'TrackNonMusic_controlsBarCell__zWt44',
                dots: 'TrackNonMusic_dots__Wom40',
                trackWithDots: 'TrackNonMusic_trackWithDots__v2VbZ',
                important: 'TrackNonMusic_important__u29Uj',
            };
        },
        77088: (t) => {
            t.exports = {
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
        83521: (t, e, i) => {
            'use strict';
            i.d(e, { G: () => p });
            var a = i(32290),
                s = i(63618),
                r = i(96103),
                o = i(21732),
                n = i(99902),
                l = i(71926),
                d = i(57594),
                c = i(90326),
                u = i(80195),
                m = i(34783),
                _ = i.n(m);
            let p = (0, r.PA)((t) => {
                let { className: e, track: i, position: r, onPlayButtonClick: m, isPlaying: p, isCurrent: x, withDislikeStyles: h = !0, isLoading: v } = t,
                    {
                        settings: { isMobile: k },
                    } = (0, d.g)();
                return (0, a.jsxs)('div', {
                    className: (0, s.$)(e, _().root, {
                        [_().root_disabled]: !i.isAvailable && !i.hasModalAccess,
                        [_().root_playing]: p,
                        [_().root_disliked]: i.isDisliked && h,
                        [_().root_current]: x,
                    }),
                    children: [
                        (i.isAvailable || i.hasModalAccess) &&
                            (0, a.jsxs)(a.Fragment, {
                                children: [
                                    !v && (0, a.jsx)(u.P, { stopAnimation: !p, className: _().playingAnimation }),
                                    v && k && (0, a.jsx)(n.y, { size: 'xs', className: _().spinner }),
                                    !k &&
                                        (0, a.jsx)(c.D, {
                                            variant: 'filled',
                                            className: _().playButton,
                                            iconClassName: _().playButtonIcon,
                                            isPlaying: p,
                                            onClick: m,
                                            iconSize: 'xs',
                                        }),
                                ],
                            }),
                        r &&
                            (0, a.jsx)(l.HL, {
                                variant: 'div',
                                className: _().position,
                                weight: 'normal',
                                type: 'entity',
                                size: 'm',
                                'data-test-id': o.Kq.track.TRACK_POSITION,
                                children: r,
                            }),
                    ],
                });
            });
        },
        83557: (t, e, i) => {
            'use strict';
            i.d(e, { m: () => r });
            var a = i(60900),
                s = i(29913);
            let r = (t, e) => {
                let { formatMessage: i } = (0, a.A)(),
                    { hours: r, minutes: o, seconds: n } = (0, s.e)(t),
                    { hours: l, minutes: d, seconds: c } = (0, s.e)(e);
                return i(
                    { id: 'non-music.non-music-progress' },
                    { progress: Math.round((t / e) * 100), beginHours: r, beginMinutes: o, beginSeconds: n, endHours: l, endMinutes: d, endSeconds: c },
                );
            };
        },
        89661: (t) => {
            t.exports = {
                root: 'PlaylistTrackShimmer_root__nZ9KR',
                infoContainer: 'PlaylistTrackShimmer_infoContainer__xLd7a',
                textContainer: 'PlaylistTrackShimmer_textContainer__QI5cC',
                title: 'PlaylistTrackShimmer_title__MojYd',
                cover: 'PlaylistTrackShimmer_cover__xyDhR',
                action: 'PlaylistTrackShimmer_action__tT5xx',
            };
        },
        91063: (t) => {
            t.exports = {
                root: 'AlbumTrackShimmer_root__fBjbK',
                infoContainer: 'AlbumTrackShimmer_infoContainer__4fdAk',
                coverContainer: 'AlbumTrackShimmer_coverContainer__frW12',
                textContainer: 'AlbumTrackShimmer_textContainer__5wNPM',
                title: 'AlbumTrackShimmer_title__HC_Pa',
                cover: 'AlbumTrackShimmer_cover__36UkV',
                action: 'AlbumTrackShimmer_action__oI5t5',
            };
        },
        92102: (t, e, i) => {
            'use strict';
            i.d(e, { C: () => A });
            var a = i(32290),
                s = i(63618),
                r = i(96103),
                o = i(55178),
                n = i(91027),
                l = i(58359),
                d = i(71735),
                c = i(2969),
                u = i(23352),
                m = i(46200),
                _ = i(5537),
                p = i(28999),
                x = i(72676),
                h = i(57594),
                v = i(1444),
                k = i(60900),
                C = i(54171),
                g = i(35587),
                y = i.n(g);
            let A = (0, r.PA)((t) => {
                var e;
                let {
                        className: i,
                        track: r,
                        meta: g,
                        beforeBlock: A,
                        controls: N,
                        playButtonCellRender: P,
                        withLightning: T,
                        isPlaying: b,
                        isCurrent: f,
                        togglePlay: E,
                        restartPlay: D,
                        onPlayClick: I,
                        playButtonIconSize: M,
                        skipFreemiumCloseListeningPaywall: j = !1,
                        ...L
                    } = t,
                    { shouldShowBuySubscriptionModal: S, showBuySubscriptionModal: O } = (0, m.q)(),
                    {
                        track: R,
                        fullscreenPlayer: w,
                        settings: { isMobile: B },
                        album: F,
                        albumCPA: { isPlusCPAPlayerBarEnabled: Y },
                        paywall: { modal: z },
                    } = (0, h.g)(),
                    { ref: H, intersectionPropertyId: $ } = (0, u.n)(),
                    K = (0, c.b)(),
                    G = (0, d.P)(),
                    U = ((t) => {
                        let { track: e, withLightning: i } = t,
                            { formatMessage: a } = (0, k.A)();
                        return e.isAvailable
                            ? [e.artistsNames, e.title, e.version, i && a({ id: 'entity-names.popular-among-users' })].filter(Boolean).join(' ')
                            : ''
                                  .concat(a({ id: 'extra-explicit.play-unavailable' }), ' ')
                                  .concat(e.artistsNames, ' ')
                                  .concat(e.title);
                    })({ withLightning: T, track: r }),
                    W = ((t) => {
                        let { sonataState: e } = (0, h.g)(),
                            i = e.status === x.MT.LOADING_MEDIA_SOURCE || e.status === x.MT.BUFFERING;
                        if (t && e.entityMeta) {
                            let a = e.entityMeta.entityId;
                            return i && a === t;
                        }
                        return i;
                    })(r.entityId),
                    q = Y(F.id, null == (e = F.meta) ? void 0 : e.isNonMusic),
                    X = r.isAvailable && S && !q,
                    V = (0, _.N)(),
                    Q = r.isAvailable && V && !q && !j,
                    Z = (0, C.w)({ track: r, callback: E }),
                    J = (0, n.c)(() => {
                        R.open({ trackId: r.id, albumId: r.albumId });
                    }),
                    tt = (0, C.w)({ track: r, callback: J }),
                    { sendPlaySearchFeedback: te } = (0, p.z)(),
                    [ti, ta] = (0, o.useState)(!1),
                    ts = (0, n.c)(() => {
                        if (!G()) {
                            if (X) return void O();
                            if (Q) return void z.open();
                            (ti || b || (ta(!0), null == te || te()), Z(), K(!b), null == I || I(!b));
                        }
                    }),
                    tr = (0, n.c)(() => {
                        if (b) return void D();
                        ts();
                    }),
                    to = (0, n.c)((t) => {
                        if (!r.isAvailable && !r.hasModalAccess) {
                            (S && r.isAvailableOnlyForPlus && O(), V && r.isAvailableOnlyForPlus && z.open());
                            return;
                        }
                        if (X) return void O();
                        let e = !B && (2 === t.detail || (1 === t.detail && r.hasTrackLink && !w.modal.isOpened));
                        return Q && !e
                            ? void z.open()
                            : ((0, l.P)(t, y().ripple), B)
                              ? void ts()
                              : 2 === t.detail
                                ? void tr()
                                : void (1 === t.detail && r.hasTrackLink && !w.modal.isOpened && (tt(), Q && z.open()));
                    }),
                    tn = null == P ? void 0 : P({ onPlayButtonClick: ts, isPlaying: b, isCurrent: f, isLoading: W, playButtonIconSize: M });
                return (0, a.jsxs)(v.C, {
                    ref: H,
                    'aria-label': U,
                    'data-intersection-property-id': $,
                    onClick: to,
                    className: (0, s.$)(y().root, { [y().root_disabled]: !r.isAvailable, [y().root_current]: f && B }, i),
                    ...L,
                    children: [A, tn, g, N],
                });
            });
        },
        92565: (t) => {
            t.exports = { downloadingProgress: 'TrackDownloadControl_downloadingProgress__wNg2W', progress: 'TrackDownloadControl_progress__K_OhO' };
        },
        94631: (t, e, i) => {
            'use strict';
            i.d(e, { K: () => A });
            var a = i(32290),
                s = i(96103),
                r = i(63618),
                o = i(55178),
                n = i(21732),
                l = i(90169),
                d = i(57594),
                c = i(40229),
                u = i(43565),
                m = i(8677),
                _ = i(1456),
                p = i(83521),
                x = i(92102),
                h = i(73585),
                v = i.n(h),
                k = i(62134);
            let C = (0, s.PA)((t) => {
                let {
                        track: e,
                        playContextParams: i,
                        className: s,
                        withDNDBlock: h,
                        isDragging: C,
                        draggingClassName: g,
                        withTimeLeftText: y,
                        ignoreDislikedStyles: A,
                        viewType: N = k.D.PLAYLIST,
                        position: P,
                        beforeTitle: T,
                        handleRemove: b,
                        removeButtonAriaLabel: f,
                    } = t,
                    E = (0, l.D)({ playContextParams: i, entityId: e.entityId }),
                    {
                        settings: { isMobile: D },
                    } = (0, d.g)(),
                    I = (0, o.useCallback)(
                        (t) =>
                            N === k.D.ALBUM
                                ? (0, a.jsx)(p.G, { track: e, position: P, className: v().playButtonCell, ...t })
                                : (0, a.jsx)(c.q, {
                                      isAvailable: e.isAvailable,
                                      isDisliked: e.isDisliked,
                                      coverUri: e.coverUri,
                                      title: e.title,
                                      className: v().playButtonCell,
                                      ignoreDislikedStyles: A,
                                      radius: 'xs',
                                      ...t,
                                  }),
                        [A, P, N, e],
                    );
                return (0, a.jsx)(x.C, {
                    className: (0, r.$)(s, { [v().trackWithDots]: h, [v().important]: h }),
                    track: e,
                    meta: (0, a.jsx)(_.Z, {
                        beforeTitle: T,
                        withAuthor: N === k.D.PLAYLIST,
                        explicitSize: 'xxxs',
                        track: e,
                        playContextParams: i,
                        withListeningProgress: !0,
                        withTimeLeftText: y,
                        ignoreDislikedStyles: A,
                        withSavingQueryParams: !0,
                        withArtistLink: !D,
                    }),
                    playButtonCellRender: I,
                    controls: (0, a.jsx)(m.Q, {
                        track: e,
                        className: v().controlsBarCell,
                        ignoreDislikedStyles: A,
                        utmLink: i.contextData.utmLink,
                        handleRemove: b,
                        removeButtonAriaLabel: f,
                    }),
                    beforeBlock: h ? (0, a.jsx)(u.O, { className: (0, r.$)(v().dots, g), isDragging: C }) : void 0,
                    ...E,
                    'data-test-id': n.Kq.track.TRACK_AUDIOBOOK,
                });
            });
            var g = i(27616);
            let y = (0, s.PA)((t) => {
                    let {
                            track: e,
                            playContextParams: i,
                            withPodcastName: s = !1,
                            className: _,
                            withDNDBlock: p,
                            isDragging: h,
                            draggingClassName: k,
                            handleRemove: C,
                            withTimeLeftText: y,
                            ignoreDislikedStyles: A,
                            beforeTitle: N,
                            removeButtonAriaLabel: P,
                        } = t,
                        T = (0, l.D)({ playContextParams: i, entityId: e.entityId }),
                        {
                            settings: { isMobile: b },
                        } = (0, d.g)(),
                        f = (0, o.useCallback)(
                            (t) =>
                                (0, a.jsx)(c.q, {
                                    isAvailable: e.isAvailable,
                                    isDisliked: e.isDisliked,
                                    coverUri: e.coverUri,
                                    title: e.title,
                                    className: v().playButtonCell,
                                    ignoreDislikedStyles: A,
                                    radius: 'xs',
                                    ...t,
                                }),
                            [A, e.coverUri, e.isAvailable, e.isDisliked, e.title],
                        );
                    return (0, a.jsx)(x.C, {
                        className: (0, r.$)(_, { [v().trackWithDots]: p, [v().important]: p }),
                        track: e,
                        meta: (0, a.jsx)(g.w, {
                            beforeTitle: N,
                            track: e,
                            playContextParams: i,
                            withPodcastName: s,
                            withListeningProgress: !0,
                            withTimeLeftText: y,
                            ignoreDislikedStyles: A,
                            explicitSize: 'xxxs',
                            withAlbumTitleLink: !b,
                        }),
                        playButtonCellRender: f,
                        controls: (0, a.jsx)(m.Q, {
                            handleRemove: C,
                            track: e,
                            className: v().controlsBarCell,
                            ignoreDislikedStyles: A,
                            utmLink: i.contextData.utmLink,
                            removeButtonAriaLabel: P,
                        }),
                        beforeBlock: p ? (0, a.jsx)(u.O, { className: (0, r.$)(v().dots, k), isDragging: h }) : void 0,
                        ...T,
                        'data-test-id': n.Kq.track.TRACK_PODCAST,
                    });
                }),
                A = (0, s.PA)((t) => {
                    let e = t.track;
                    return e.isTrackAudiobook || e.isTrackFairyTale ? (0, a.jsx)(C, { ...t }) : (0, a.jsx)(y, { ...t });
                });
        },
        95082: (t) => {
            t.exports = {
                root: 'ListeningProgress_root__Rvlcn',
                text_withoutTimeLeft: 'ListeningProgress_text_withoutTimeLeft__eAmOF',
                checkIcon: 'ListeningProgress_checkIcon___yh49',
            };
        },
        97841: (t, e, i) => {
            'use strict';
            i.d(e, { w: () => P });
            var a = i(32290),
                s = i(63618),
                r = i(96103),
                o = i(60900),
                n = i(31010),
                l = (function (t) {
                    return (
                        (t.YANDEX = 'YANDEX'),
                        (t.YANDEX_PROJECTS = 'YANDEX_PROJECTS'),
                        (t.COPYRIGHT_HOLDER = 'COPYRIGHT_HOLDER'),
                        (t.AGREEMENT = 'AGREEMENT'),
                        (t.RECOMMENDATION_RULES = 'RECOMMENDATION_RULES'),
                        (t.HELP = 'HELP'),
                        (t.PRIVACY_POLICY = 'PRIVACY_POLICY'),
                        t
                    );
                })({});
            let d = (t, e, i) => {
                    switch (t) {
                        case l.YANDEX:
                            if ('ru' === e) return 'https://ya.ru';
                            return;
                        case l.YANDEX_PROJECTS:
                            return 'https://yandex.'.concat(e, '/all?lang=').concat(i);
                        case l.COPYRIGHT_HOLDER:
                            return 'https://yandex.'.concat(e, '/support/music/performers-and-copyright-holders/copyright.html?lang=').concat(i);
                        case l.AGREEMENT:
                            return 'https://yandex.ru/legal/music_termsofuse?lang='.concat(i);
                        case l.RECOMMENDATION_RULES:
                            return 'https://music.yandex.ru/legal/recommendations/ru/#music';
                        case l.HELP:
                            return 'https://yandex.'.concat(e, '/support/music/index.html?lang=').concat(i);
                        case l.PRIVACY_POLICY:
                            return 'https://yandex.'.concat(e, '/legal/confidential/').concat(i);
                    }
                },
                c = (t) => {
                    let { formatMessage: e, language: i, tld: a, year: s } = t;
                    return {
                        year: s,
                        yandexMusic: { id: l.YANDEX, title: e({ id: 'footer.yandex-music' }), url: d(l.YANDEX, a, i) },
                        yandexProjects: { id: l.YANDEX_PROJECTS, title: e({ id: 'footer.yandex-project' }), url: d(l.YANDEX_PROJECTS, a, i) },
                    };
                };
            var u = i(15559),
                m = i(8626);
            let _ = (t) => t(new Date(), (0, m.m)());
            var p = i(61945),
                x = i(57594),
                h = i(77088),
                v = i.n(h),
                k = i(21732),
                C = i(71926),
                g = i(61258);
            let y = (t) => {
                    let { className: e, data: i } = t;
                    return (0, a.jsxs)('div', {
                        className: (0, s.$)(v().copyrights, e),
                        'data-test-id': k.S7.FOOTER_COPYRIGHTS,
                        children: [
                            (0, a.jsxs)(C.HL, {
                                variant: 'span',
                                type: 'text',
                                size: 's',
                                weight: 'medium',
                                className: v().text,
                                children: [
                                    '\xa9 ',
                                    i.year,
                                    ' \xa0',
                                    (0, a.jsx)(g.N, {
                                        target: '_blank',
                                        href: i.yandexMusic.url,
                                        className: (0, s.$)(v().copyrightLink, v().yandexMusicLink),
                                        'data-test-id': k.S7.FOOTER_YANDEX_MUSIC_LINK,
                                        children: i.yandexMusic.title,
                                    }),
                                ],
                            }),
                            (0, a.jsx)(C.HL, { variant: 'span', type: 'text', size: 's', weight: 'medium', children: ' • ' }),
                            (0, a.jsx)(g.N, {
                                target: '_blank',
                                href: i.yandexProjects.url,
                                className: v().copyrightLink,
                                'data-test-id': k.S7.FOOTER_YANDEX_PROJECT_LINK,
                                children: i.yandexProjects.title,
                            }),
                        ],
                    });
                },
                A = (t) => {
                    let { disclaimer: e, links: i } = t;
                    return (0, a.jsxs)('div', {
                        className: v().links,
                        children: [
                            (0, a.jsx)('ol', {
                                className: v().list,
                                'data-test-id': k.S7.FOOTER_LINKS_LIST,
                                children: i.map((t) => {
                                    let { id: e, title: i, url: s } = t;
                                    return (0, a.jsx)(
                                        'li',
                                        {
                                            className: v().item,
                                            children: (0, a.jsx)(g.N, { target: '_blank', href: s, className: v().link, 'data-test-id': k.S7.FOOTER_LINK, children: i }),
                                        },
                                        e,
                                    );
                                }),
                            }),
                            (0, a.jsx)(C.HL, {
                                variant: 'span',
                                type: 'text',
                                size: 'm',
                                weight: 'medium',
                                className: v().explicitText,
                                tabIndex: 0,
                                dangerouslySetInnerHTML: { __html: e },
                                'data-test-id': k.S7.FOOTER_DISCLAIMER_TEXT,
                            }),
                        ],
                    });
                },
                N = (t) => {
                    let { className: e, data: i } = t;
                    return (0, a.jsxs)('footer', {
                        className: (0, s.$)(v().root, v().important, e),
                        'data-test-id': k.S7.FOOTER,
                        children: [(0, a.jsx)(A, { links: i.links, disclaimer: i.disclaimer }), (0, a.jsx)(y, { data: i.copyrights })],
                    });
                };
            (0, r.PA)((t) => {
                let { className: e } = t,
                    { location: i } = (0, x.g)(),
                    { formatDate: s, formatMessage: r } = (0, o.A)(),
                    { language: n } = (0, p.h)(),
                    l = c({ formatMessage: r, language: n, tld: i.tld, year: _(s) });
                return (0, a.jsx)(y, { className: e, data: l });
            });
            let P = (0, r.PA)((t) => {
                var e;
                let { className: i } = t,
                    { experiments: r, location: m, user: h } = (0, x.g)(),
                    { formatDate: k, formatMessage: C } = (0, o.A)(),
                    { isEnabled: g } = null != (e = (0, n.P)()) ? e : {},
                    { language: y } = (0, p.h)(),
                    A = ((t) => {
                        let { checkExperiment: e, formatMessage: i, isWebApplication: a, language: s, tld: r, userRegion: o, year: n } = t;
                        return {
                            links: ((t) => {
                                let { formatMessage: e, isWebApplication: i, tld: a, language: s, userRegion: r } = t,
                                    o = { id: l.COPYRIGHT_HOLDER, title: e({ id: 'footer.links-copyright-holders' }), url: d(l.COPYRIGHT_HOLDER, a, s) },
                                    n = { id: l.PRIVACY_POLICY, title: e({ id: 'footer.links-privacy-policy' }), url: d(l.PRIVACY_POLICY, a, s) },
                                    c = { id: l.AGREEMENT, title: e({ id: 'footer.links-terms' }), url: d(l.AGREEMENT, a, s) },
                                    u = { id: l.RECOMMENDATION_RULES, title: e({ id: 'footer.links-recommendation-rules' }), url: d(l.RECOMMENDATION_RULES, a, s) },
                                    m = { id: l.HELP, title: e({ id: 'footer.links-help' }), url: d(l.HELP, a, s) },
                                    _ = [o, c, u];
                                return (i && 'ru' === r && _.push(n), _.push(m), _);
                            })({ formatMessage: i, isWebApplication: a, language: s, tld: r, userRegion: o }),
                            disclaimer: (0, u.v)({
                                checkExperiment: e,
                                getDisclaimerContent: () => i({ id: 'footer.disclaimer-content' }),
                                getExplicitContent: () => i({ id: 'footer.explicit-content' }),
                                userRegion: o,
                            }),
                            copyrights: c({ formatMessage: i, language: s, tld: r, year: n }),
                        };
                    })({
                        checkExperiment: (t, e) => r.checkExperiment(t, e),
                        formatMessage: C,
                        isWebApplication: !1,
                        tld: m.tld,
                        language: y,
                        userRegion: h.account.data.userSessionRegionIso,
                        year: _(k),
                    });
                return (0, a.jsx)(N, { className: (0, s.$)({ [v().root_withOffsetForDeeplink]: g }, i), data: A });
            });
        },
        98350: (t, e, i) => {
            'use strict';
            i.d(e, { X: () => a });
            var a = (function (t) {
                return ((t.PLAYLIST = 'playlist'), (t.ALBUM = 'album'), t);
            })({});
        },
    },
]);
