(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [6104],
    {
        50: (e, t, a) => {
            'use strict';
            a.d(t, { D: () => n, W: () => r });
            var i = a(55178);
            let n = (0, i.createContext)({ theme: null, setTheme: () => {} }),
                r = () => (0, i.useContext)(n);
        },
        912: (e) => {
            e.exports = {
                collapseButton: 'NavbarDesktop_collapseButton__XQh9d',
                root: 'NavbarDesktop_root__scYzp',
                logoWrapper: 'NavbarDesktop_logoWrapper__89ce6',
                navigation: 'NavbarDesktop_navigation__dLUGW',
                navigation_new: 'NavbarDesktop_navigation_new__0j8W5',
                navigation_gapFill: 'NavbarDesktop_navigation_gapFill__SsWxA',
                navigationGroup: 'NavbarDesktop_navigationGroup__eexLF',
                logoLink: 'NavbarDesktop_logoLink__KR0Dk',
                logo: 'NavbarDesktop_logo__Z4jGx',
                collapseButtonTooltip_hidden: 'NavbarDesktop_collapseButtonTooltip_hidden__tFoZZ',
                subTitle: 'NavbarDesktop_subTitle__Fqvr4',
                subTitle_withCursorPointer: 'NavbarDesktop_subTitle_withCursorPointer__VYJOh',
                title: 'NavbarDesktop_title__OrnHN',
                title_animate: 'NavbarDesktop_title_animate__XLxaQ',
                animation_show: 'NavbarDesktop_animation_show__pRFj9',
                title_collapsed: 'NavbarDesktop_title_collapsed__IH9Bc',
                animation_hide: 'NavbarDesktop_animation_hide__8VxPs',
                pinsList: 'NavbarDesktop_pinsList___jXIM',
                scrollableContainer: 'NavbarDesktop_scrollableContainer__HLc9D',
                scrollableContent: 'NavbarDesktop_scrollableContent__OyU4P',
                disabledNavigationItem: 'NavbarDesktop_disabledNavigationItem__Qp_hs',
                bestRecommendationsModal: 'NavbarDesktop_bestRecommendationsModal__l7GD2',
                bestRecommendationsModalHeader: 'NavbarDesktop_bestRecommendationsModalHeader__VSi5Y',
                bestRecommendationsModalContent: 'NavbarDesktop_bestRecommendationsModalContent__WhwfK',
                bestRecommendationsModalLogo: 'NavbarDesktop_bestRecommendationsModalLogo__QnXgm',
                bestRecommendationsModalText: 'NavbarDesktop_bestRecommendationsModalText__05Z3M',
            };
        },
        1147: (e) => {
            e.exports = {
                root: 'PinsList_root__LN_2Z',
                root_withScroll: 'PinsList_root_withScroll__g8x3V',
                root_hasPins: 'PinsList_root_hasPins__3LXlo',
                content: 'PinsList_content__9RG7s',
                pin_enter: 'PinsList_pin_enter__2p2_6',
                pin_enter_active: 'PinsList_pin_enter_active__eNGlc',
                'enter-fade': 'PinsList_enter-fade__G_QY8',
                'enter-move': 'PinsList_enter-move__DSAXH',
                pin_exit: 'PinsList_pin_exit__y_gcM',
                pin_exit_active: 'PinsList_pin_exit_active__rF5Je',
                'exit-fade': 'PinsList_exit-fade__M6fYX',
                'exit-move': 'PinsList_exit-move__Jtgi0',
            };
        },
        1439: (e) => {
            e.exports = {
                shuffleIcon_off: 'ShuffleButton_shuffleIcon_off___oqrr',
                shuffleIcon_on: 'ShuffleButton_shuffleIcon_on__qFJqV',
                shuffleIcon_disabled: 'ShuffleButton_shuffleIcon_disabled__fQsOo',
            };
        },
        1456: (e, t, a) => {
            'use strict';
            a.d(t, { Z: () => E });
            var i = a(32290),
                n = a(63618),
                r = a(96103),
                s = a(55178),
                o = a(60900),
                l = a(39407),
                d = a(21732),
                c = a(70280),
                u = a(71926),
                _ = a(41677),
                m = a(58294),
                p = a(57594),
                v = a(53514),
                h = a(85017),
                b = a(13798),
                x = a(61258),
                f = a(25649),
                g = a(24760),
                A = a(84141),
                N = a(14960),
                C = a(5856),
                y = a.n(C),
                S = a(50918),
                T = a.n(S);
            let E = (0, r.PA)((e) => {
                var t, a, r, C;
                let {
                        track: S,
                        className: E,
                        withAuthor: B = !1,
                        withSecondaryColor: I = !1,
                        withListeningProgress: j = !1,
                        captionSize: P = 'm',
                        explicitSize: k = 'xs',
                        withExplicitMark: w = !0,
                        titleContainerClassName: L,
                        textClassName: D,
                        playContextParams: O,
                        withTimeLeftText: R = !0,
                        ignoreDislikedStyles: M,
                        albumArtists: F,
                        withCustomTooltip: U = !0,
                        hasLineClamp: z = !0,
                        withSavingQueryParams: W,
                        beforeTitle: V,
                        afterTitle: H,
                        withContextMenuArtists: K,
                        withArtistLink: G = !0,
                    } = e,
                    {
                        sonataState: $,
                        settings: { isMobile: Y },
                    } = (0, p.g)(),
                    { formatMessage: q } = (0, o.A)(),
                    Z = (0, g.$)({ withCustomTooltip: U }),
                    X = (0, A.O)({ track: S, withSavingQueryParams: W, entityType: h.n.AUDIOBOOK }),
                    Q = !!(j && O && S.shouldRememberPosition && S.streamProgress && S.durationMs),
                    J =
                        S.id === (null == (t = $.entityMeta) ? void 0 : t.id) &&
                        (null == (r = $.entityMeta) || null == (a = r.streamProgress) ? void 0 : a.endPositionSec),
                    ee = (0, N.d)(Q, S.streamProgress, J),
                    et = (0, s.useMemo)(() => (0, f.s)(S.artists, F), [S.artists, F, S.id]),
                    ea = et.length > 0 && B && !ee,
                    ei = (0, s.useCallback)(
                        (e) =>
                            (0, i.jsx)(c.m_, {
                                enabled: Z && !Y,
                                offsetOptions: 4,
                                placement: 'top',
                                text: S.title,
                                hoverSettings: v.V,
                                children: (0, i.jsx)(u.HL, {
                                    className: y().title,
                                    type: 'entity',
                                    size: P,
                                    variant: 'span',
                                    title: Z ? void 0 : S.title,
                                    ...e,
                                    children: S.title,
                                }),
                            }),
                        [Y, Z, P, S.title],
                    ),
                    en = (0, s.useMemo)(() => {
                        if (S.isRemoved) return (0, i.jsx)(l.A, { id: 'track-title.audiobook-not-found' });
                        if (S.hasTrackLink) {
                            var e;
                            return (0, i.jsx)(x.N, {
                                'aria-label': q({ id: 'entity-names.audiobook-name' }, { bookName: null == (e = S.mainAlbum) ? void 0 : e.title }),
                                className: y().albumLink,
                                href: S.url,
                                title: Z ? void 0 : S.title,
                                onClick: X,
                                'data-test-id': d.Kq.track.TRACK_TITLE,
                                children: ei(),
                            });
                        }
                        return ei({ 'data-test-id': d.Kq.track.TRACK_TITLE });
                    }, [S.isRemoved, S.hasTrackLink, null == (C = S.mainAlbum) ? void 0 : C.title, S.title, S.url, ei, q, Z, X]),
                    er = (0, s.useMemo)(() => +!!z, [z]);
                return (0, i.jsx)('div', {
                    className: (0, n.$)(y().root, { [y().root_disabled]: !S.isAvailable, [y().root_disliked]: S.isDisliked && !M, [y().root_withSecondaryColor]: I }, E),
                    children: (0, i.jsxs)('div', {
                        className: (0, n.$)(y().metaContainer, T().metaContainer, { [T().metaContainer_oneLine]: !B }),
                        children: [
                            (0, i.jsxs)('div', {
                                className: (0, n.$)(y().titleContainer, L, T().titleContainer),
                                children: [
                                    (0, i.jsxs)(u.HL, {
                                        className: (0, n.$)(y().text, D),
                                        type: 'entity',
                                        size: P,
                                        variant: 'div',
                                        lineClamp: 1,
                                        children: [
                                            V,
                                            en,
                                            !S.isRemoved &&
                                                S.version &&
                                                (0, i.jsxs)(u.HL, {
                                                    className: (0, n.$)(y().text, y().version),
                                                    type: 'entity',
                                                    size: P,
                                                    weight: 'medium',
                                                    variant: 'span',
                                                    title: Z ? void 0 : S.version,
                                                    children: ['\xa0', S.version],
                                                }),
                                        ],
                                    }),
                                    S.explicitDisclaimer &&
                                        w &&
                                        (0, i.jsx)(b.N, {
                                            containerClassName: y().explicitMarkContainer,
                                            getDescriptionTexts: S.getDescriptionTexts,
                                            variant: S.explicitDisclaimer,
                                            className: y().explicitMark,
                                            size: k,
                                            trackId: S.id,
                                        }),
                                    H,
                                ],
                            }),
                            ea &&
                                (0, i.jsx)(u.HL, {
                                    type: 'entity',
                                    size: P,
                                    variant: 'div',
                                    lineClamp: 1,
                                    className: (0, n.$)(y().text, T().artists, D),
                                    children: (0, i.jsx)(_.i, {
                                        className: (0, n.$)(y().text, { [y().artists]: z }, D),
                                        linkClassName: (0, n.$)(y().text, y().link),
                                        captionClassName: (0, n.$)(y().text, y().artistCaption),
                                        artists: et,
                                        withLink: S.isNonUserGenerated && G,
                                        lineClamp: er,
                                        captionSize: P,
                                        withContextMenu: K,
                                    }),
                                }),
                            Q &&
                                S.streamProgress &&
                                O &&
                                (0, i.jsx)(m.B, {
                                    className: (0, n.$)(T().progress, { [T().progress_withPreviousInfo]: ea, [T().progress_disabled]: !S.isAvailable || S.isDisliked }),
                                    id: S.id,
                                    albumId: S.albumId,
                                    streamProgress: S.streamProgress,
                                    durationMs: S.durationMs || 0,
                                    playContextParams: O,
                                    withTimeLeftText: R,
                                }),
                        ],
                    }),
                });
            });
        },
        1757: (e, t, a) => {
            'use strict';
            a.d(t, { k: () => i });
            var i = (function (e) {
                return ((e.PLAYLIST_GRADIENT = 'branded_playlist_gradient'), (e.AXE_GRADIENT = 'branded_axe_gradient'), e);
            })({});
        },
        2125: (e, t, a) => {
            'use strict';
            a.d(t, { h: () => n });
            var i = a(37862),
                n = (function (e) {
                    return (
                        (e[(e.RUP_MAIN_RADIO = ''.concat(i.U.RUP, '_').concat(i.U.MAIN, '-').concat(i.U.RADIO))] = 'RUP_MAIN_RADIO'),
                        (e[(e.DISCOGRAPHY_CAROUSEL = ''.concat(i.U.DISCOGRAPHY, '_').concat(i.U.CAROUSEL))] = 'DISCOGRAPHY_CAROUSEL'),
                        (e[(e.ALBUMS_CAROUSEL = ''.concat(i.U.ALBUMS, '_').concat(i.U.CAROUSEL))] = 'ALBUMS_CAROUSEL'),
                        (e[(e.COMPILATIONS_CAROUSEL = ''.concat(i.U.COMPILATIONS, '_').concat(i.U.CAROUSEL))] = 'COMPILATIONS_CAROUSEL'),
                        (e[(e.PLAYLISTS_CAROUSEL = ''.concat(i.U.PLAYLISTS, '_').concat(i.U.CAROUSEL))] = 'PLAYLISTS_CAROUSEL'),
                        (e[(e.ARTISTS_CAROUSEL = ''.concat(i.U.ARTISTS, '_').concat(i.U.CAROUSEL))] = 'ARTISTS_CAROUSEL'),
                        (e[(e.CLIPS_CAROUSEL = ''.concat(i.U.CLIPS, '_').concat(i.U.CAROUSEL))] = 'CLIPS_CAROUSEL'),
                        (e[(e.DISCOVERY_BLOCK = ''.concat(i.U.DISCOVERY, '_').concat(i.U.BLOCK))] = 'DISCOVERY_BLOCK'),
                        (e[(e.PLAYLISTS_SIMILAR = ''.concat(i.U.PLAYLISTS, '_').concat(i.U.SIMILAR))] = 'PLAYLISTS_SIMILAR'),
                        (e[(e.SEARCH_HISTORY = ''.concat(i.U.SEARCH, '_').concat(i.U.HISTORY))] = 'SEARCH_HISTORY'),
                        (e[(e.PLAYLISTS_SIMILAR_PLAYLIST = ''.concat(i.U.PLAYLISTS, '_').concat(i.U.SIMILAR, '_').concat(i.U.PLAYLIST))] = 'PLAYLISTS_SIMILAR_PLAYLIST'),
                        (e[(e.SEARCH_BEST_RESULTS = ''.concat(i.U.SEARCH, '_').concat(i.U.BEST_RESULTS))] = 'SEARCH_BEST_RESULTS'),
                        (e[(e.SEARCH_OPEN_BEST_RESULTS = ''.concat(i.U.SEARCH, '_').concat(i.U.OPEN_BEST_RESULTS))] = 'SEARCH_OPEN_BEST_RESULTS'),
                        e
                    );
                })({});
        },
        3237: (e, t, a) => {
            'use strict';
            a.d(t, { $: () => s, E9: () => d, KZ: () => l, LB: () => o, RA: () => n, kz: () => r, r_: () => c, w_: () => i });
            let i = { pp: 'g', ps: 'clni', p2: 'jjwl', puid1: '', puid2: '', puid3: '' },
                n = { pp: 'g', ps: 'clni', p2: 'jjzh', puid1: '', puid2: '', puid3: '' },
                r = { p1: 'dkreo', p2: 'jozm', puid1: '', puid2: '', puid3: '' },
                s = { p1: 'dlnfl', p2: 'jpzb', puid1: '', puid2: '', puid3: '' },
                o = 'adfox_173998931315812570',
                l = 'adfox_174043316511852570',
                d = 'adfox_176504636866914259',
                c = 'adfox_176053846725924259';
        },
        3646: (e) => {
            e.exports = {
                headingContainer: 'BuySubscriptionBenefitsContent_headingContainer__euBSr',
                heading: 'BuySubscriptionBenefitsContent_heading__xx64Z',
                offerHeading: 'BuySubscriptionBenefitsContent_offerHeading__58HWj',
                entityCover: 'BuySubscriptionBenefitsContent_entityCover__0zowc',
                entityTitle: 'BuySubscriptionBenefitsContent_entityTitle__gA8J2',
                benefits: 'BuySubscriptionBenefitsContent_benefits__HK41W',
                benefitItem: 'BuySubscriptionBenefitsContent_benefitItem__sYkCL',
                benefitIcon: 'BuySubscriptionBenefitsContent_benefitIcon__VczZK',
                benefitImage: 'BuySubscriptionBenefitsContent_benefitImage__LVU2a',
                benefitText: 'BuySubscriptionBenefitsContent_benefitText__stotu',
                benefitDivider: 'BuySubscriptionBenefitsContent_benefitDivider__uELk3',
                button: 'BuySubscriptionBenefitsContent_button__vNi8i',
                loginContainer: 'BuySubscriptionBenefitsContent_loginContainer__ov5gH',
                bonusText: 'BuySubscriptionBenefitsContent_bonusText__nzIej',
                giftIcon: 'BuySubscriptionBenefitsContent_giftIcon__1bL51',
                oneClickDisclaimerText: 'BuySubscriptionBenefitsContent_oneClickDisclaimerText__k5W_A',
            };
        },
        4820: (e, t, a) => {
            'use strict';
            a.d(t, { C: () => d });
            var i = a(32290),
                n = a(55178),
                r = a(21732),
                s = a(71926),
                o = a(91624),
                l = a.n(o);
            let d = (e) => {
                let { getDescriptionTexts: t, entityId: a } = e,
                    [o, d] = (0, n.useState)(null);
                if (
                    ((0, n.useEffect)(() => {
                        t && t().then(d);
                    }, [t]),
                    o)
                )
                    return o.map((e, t) =>
                        (0, i.jsx)(
                            s.HL,
                            {
                                className: l().descriptionTextItem,
                                variant: 'div',
                                type: 'text',
                                size: 'm',
                                weight: 'normal',
                                'data-test-id': r.S7.DESCRIPTION_TEXT,
                                children: e,
                            },
                            ''.concat(a, '-descpription-text-').concat(t),
                        ),
                    );
            };
        },
        4823: (e, t, a) => {
            'use strict';
            a.d(t, { Q: () => r });
            var i = a(55178),
                n = a(88763);
            let r = () => (0, i.useContext)(n.G);
        },
        5619: (e) => {
            e.exports = {
                root: 'VibeSettingsModal_root__oX6Av',
                modalContent: 'VibeSettingsModal_modalContent__KObkt',
                overlay: 'VibeSettingsModal_overlay__qKFx_',
                content: 'VibeSettingsModal_content__Uchn7',
                header: 'VibeSettingsModal_header__J4FUk',
                actions: 'VibeSettingsModal_actions__hCGT7',
                ripple: 'VibeSettingsModal_ripple__zQXGo',
            };
        },
        7050: (e, t, a) => {
            'use strict';
            a.d(t, { m: () => i });
            let i = (e) => 'object' == typeof e && null !== e && !Array.isArray(e) && 'source' in e && 'adfox' === e.source && 'type' in e && 'payload' in e;
        },
        7462: (e, t, a) => {
            'use strict';
            a.d(t, { c: () => s, r: () => o });
            var i = a(55178),
                n = a(60900),
                r = a(64605),
                s = (function (e) {
                    return ((e.PIN = 'pin'), e);
                })({});
            let o = (e, t) => {
                let { formatMessage: a } = (0, n.A)();
                return (0, i.useMemo)(() => {
                    switch (e) {
                        case r._.SINGLE:
                            return a({ id: 'entity-names.single' });
                        case r._.PODCAST:
                            return a({ id: 'entity-names.podcast' });
                        case r._.AUDIOBOOK:
                            if ('pin' === t) return a({ id: 'entity-names.book' });
                            return a({ id: 'entity-names.audio' });
                        case r._.FAIRY_TALE:
                            return a({ id: 'entity-names.fairy-tale' });
                        default:
                            return a({ id: 'entity-names.album' });
                    }
                }, [e, a, t]);
            };
        },
        7939: (e) => {
            e.exports = {
                root: 'NavbarDesktopPlusBar_root__QgKqJ',
                logos: 'NavbarDesktopPlusBar_logos__kKKEl',
                addition: 'NavbarDesktopPlusBar_addition__vluXf',
                title: 'NavbarDesktopPlusBar_title__mMdem',
                buttons: 'NavbarDesktopPlusBar_buttons__40_1A',
            };
        },
        8097: (e, t, a) => {
            'use strict';
            a.d(t, { k: () => g });
            var i = a(32290),
                n = a(63618),
                r = a(55178),
                s = a(21732),
                o = a(50162),
                l = a(74196),
                d = a(71926),
                c = a(60900),
                u = a(39407),
                _ = a(91027),
                m = a(97647),
                p = a(57594),
                v = a(79406),
                h = a(61258),
                b = a(58534),
                x = a(70627),
                f = a.n(x);
            let g = (e) => {
                let {
                        closeToast: t,
                        className: a,
                        coverUri: x,
                        entityTitle: g,
                        entityDescription: A,
                        entityVariant: N,
                        entityUrl: C,
                        customCover: y,
                        radius: S,
                        isPinned: T,
                    } = e,
                    E = (() => {
                        let { formatMessage: e } = (0, c.A)(),
                            { experiments: t } = (0, p.g)();
                        return (0, _.c)((a) => {
                            let { entityVariant: n, values: r, entityTitle: s, entityDescription: o } = a;
                            switch (n) {
                                case m.c.ALBUM:
                                    return {
                                        caption: (0, i.jsx)(u.A, { id: 'notifications-info.album-pinned-in-menu', values: r }),
                                        ariaLabel: e({ id: 'notifications-info.album-pinned-in-menu' }, { entity: s }),
                                    };
                                case m.c.AUDIOBOOK:
                                    return {
                                        caption: (0, i.jsx)(u.A, { id: 'notifications-info.audiobook-pinned-in-menu', values: r }),
                                        ariaLabel: e({ id: 'notifications-info.audiobook-pinned-in-menu' }, { entity: s }),
                                    };
                                case m.c.FAIRY_TALE:
                                    return {
                                        caption: (0, i.jsx)(u.A, { id: 'notifications-info.fairytale-pinned-in-menu', values: r }),
                                        ariaLabel: e({ id: 'notifications-info.fairytale-pinned-in-menu' }, { entity: s }),
                                    };
                                case m.c.PODCAST:
                                    return {
                                        caption: (0, i.jsx)(u.A, { id: 'notifications-info.podcast-pinned-in-menu', values: r }),
                                        ariaLabel: e({ id: 'notifications-info.podcast-pinned-in-menu' }, { entity: s }),
                                    };
                                case m.c.PLAYLIST:
                                    return {
                                        caption: (0, i.jsx)(u.A, { id: 'notifications-info.playlist-pinned-in-menu', values: r }),
                                        ariaLabel: e({ id: 'notifications-info.playlist-pinned-in-menu' }, { entity: s }),
                                    };
                                case m.c.ARTIST:
                                    return {
                                        caption: (0, i.jsx)(u.A, { id: 'notifications-info.artist-pinned-in-menu', values: r }),
                                        ariaLabel: e({ id: 'notifications-info.artist-pinned-in-menu' }, { entity: s }),
                                    };
                                case m.c.VIBE:
                                    if (!t.checkExperiment(v.z.WebNextVibeDescription, 'on'))
                                        return {
                                            caption: (0, i.jsx)(u.A, { id: 'notifications-info.my-vibe-pinned-in-menu', values: r }),
                                            ariaLabel: e({ id: 'notifications-info.my-vibe-pinned-in-menu' }, { entity: s }),
                                        };
                                    return {
                                        caption: (0, i.jsx)(u.A, { id: 'notifications-info.entity-pinned-in-menu', values: r }),
                                        ariaLabel: e({ id: 'notifications-info.entity-pinned-in-menu' }, { entity: s, description: o }),
                                    };
                            }
                        });
                    })(),
                    B = (() => {
                        let { formatMessage: e } = (0, c.A)(),
                            { experiments: t } = (0, p.g)();
                        return (0, _.c)((a) => {
                            let { entityVariant: n, values: r, entityTitle: s, entityDescription: o } = a;
                            switch (n) {
                                case m.c.ALBUM:
                                    return {
                                        caption: (0, i.jsx)(u.A, { id: 'notifications-info.album-unpinned-from-menu', values: r }),
                                        ariaLabel: e({ id: 'notifications-info.album-unpinned-from-menu' }, { entity: s }),
                                    };
                                case m.c.AUDIOBOOK:
                                    return {
                                        caption: (0, i.jsx)(u.A, { id: 'notifications-info.audiobook-unpinned-from-menu', values: r }),
                                        ariaLabel: e({ id: 'notifications-info.audiobook-unpinned-from-menu' }, { entity: s }),
                                    };
                                case m.c.FAIRY_TALE:
                                    return {
                                        caption: (0, i.jsx)(u.A, { id: 'notifications-info.fairytale-unpinned-from-menu', values: r }),
                                        ariaLabel: e({ id: 'notifications-info.fairytale-unpinned-from-menu' }, { entity: s }),
                                    };
                                case m.c.PODCAST:
                                    return {
                                        caption: (0, i.jsx)(u.A, { id: 'notifications-info.podcast-unpinned-from-menu', values: r }),
                                        ariaLabel: e({ id: 'notifications-info.podcast-unpinned-from-menu' }, { entity: s }),
                                    };
                                case m.c.PLAYLIST:
                                    return {
                                        caption: (0, i.jsx)(u.A, { id: 'notifications-info.playlist-unpinned-from-menu', values: r }),
                                        ariaLabel: e({ id: 'notifications-info.playlist-unpinned-from-menu' }, { entity: s }),
                                    };
                                case m.c.ARTIST:
                                    return {
                                        caption: (0, i.jsx)(u.A, { id: 'notifications-info.artist-unpinned-from-menu', values: r }),
                                        ariaLabel: e({ id: 'notifications-info.artist-unpinned-from-menu' }, { entity: s }),
                                    };
                                case m.c.VIBE:
                                    if (!t.checkExperiment(v.z.WebNextVibeDescription, 'on'))
                                        return {
                                            caption: (0, i.jsx)(u.A, { id: 'notifications-info.my-vibe-unpinned-from-menu', values: r }),
                                            ariaLabel: e({ id: 'notifications-info.my-vibe-unpinned-from-menu' }, { entity: s }),
                                        };
                                    return {
                                        caption: (0, i.jsx)(u.A, { id: 'notifications-info.entity-unpinned-from-menu', values: r }),
                                        ariaLabel: e({ id: 'notifications-info.entity-unpinned-from-menu' }, { entity: s, description: o }),
                                    };
                            }
                        });
                    })(),
                    I = (0, r.useMemo)(
                        () =>
                            C
                                ? (0, i.jsx)(h.N, {
                                      className: f().link,
                                      href: C,
                                      title: g,
                                      children: (0, i.jsxs)(d.HL, {
                                          className: f().title,
                                          variant: 'span',
                                          type: 'controls',
                                          size: 'm',
                                          lineClamp: 1,
                                          children: ['\xa0', g, '\xa0'],
                                      }),
                                  })
                                : (0, i.jsxs)(d.HL, {
                                      className: f().title,
                                      variant: 'span',
                                      type: 'controls',
                                      size: 'm',
                                      lineClamp: 1,
                                      title: g,
                                      children: ['\xa0', g, '\xa0'],
                                  }),
                        [g, C],
                    ),
                    j = (0, r.useMemo)(
                        () => y || (0, i.jsx)(o._V, { className: f().image, src: x, size: 100, fit: 'cover', withAvatarReplace: !0, 'aria-hidden': !0 }),
                        [x, y],
                    ),
                    P = (0, r.useMemo)(() => {
                        let e = { entity: I, description: A };
                        return T
                            ? E({ entityVariant: N, values: e, entityTitle: g, entityDescription: A })
                            : B({ entityVariant: N, values: e, entityTitle: g, entityDescription: A });
                    }, [I, A, T, B, N, g, E]);
                return (0, i.jsx)(b.$, {
                    className: (0, n.$)(f().root, { [f().root_withLongText]: N === m.c.AUDIOBOOK }, a),
                    closeToast: t,
                    cover: j,
                    message: (0, i.jsxs)(i.Fragment, {
                        children: [
                            (0, i.jsx)(l.q, { children: (0, i.jsx)('p', { role: 'alert', 'aria-label': P.ariaLabel }) }),
                            (0, i.jsx)(d.HL, {
                                className: f().text,
                                variant: 'div',
                                type: 'controls',
                                size: 'm',
                                'data-test-id': s.S7.BASE_NOTIFICATION_PIN_TEXT,
                                'aria-hidden': !0,
                                children: P.caption,
                            }),
                        ],
                    }),
                    coverRadius: S,
                });
            };
        },
        8950: (e) => {
            e.exports = { root: 'NavbarMobile_root__NhKBQ', user: 'NavbarMobile_user__vTEb2', disabledNavigationItem: 'NavbarMobile_disabledNavigationItem__PA3EE' };
        },
        9536: (e, t, a) => {
            'use strict';
            a.d(t, { K: () => n });
            var i = a(85472);
            let n = (e) => ({
                '--player-average-color-background': ((e) => {
                    if (!e) return;
                    let { h: t, s: a } = (0, i.hexToHsl)(e);
                    return 'hsl('.concat(t, ', ').concat(a, '%, 20%)');
                })(null == e ? void 0 : e.averageColor),
            });
        },
        11272: (e) => {
            e.exports = { root: 'TopAdvertBanner_root__aAZ0o', root_hidden: 'TopAdvertBanner_root_hidden__l3FTx', advert: 'TopAdvertBanner_advert__LjAj_' };
        },
        11805: (e, t, a) => {
            'use strict';
            a.d(t, { $: () => V });
            var i = a(32290),
                n = a(96103),
                r = a(55178),
                s = a(91027),
                o = a(92495),
                l = a(71735),
                d = a(78305),
                c = a(2125),
                u = a(48922),
                _ = a(2969),
                m = a(55332),
                p = a(95329),
                v = a(53022),
                h = a(43564),
                b = a(44128),
                x = a(57594),
                f = a(44782),
                g = a(77035),
                A = a(90326);
            let N = (e) => {
                let { disabled: t, isPlaying: a, onClickPlayPause: n, className: r } = e;
                return (0, i.jsx)(A.D, { className: r, size: 's', iconSize: 'xs', disabled: t, isPlaying: a, onClick: n });
            };
            var C = a(25936),
                y = a(63618),
                S = a(60900),
                T = a(21732),
                E = a(63423),
                B = a(82586),
                I = a(30839),
                j = a(73021),
                P = a(56315),
                k = a.n(P);
            let w = (0, n.PA)((e) => {
                let {
                        disabled: t,
                        isPlaying: a,
                        repeatMode: n,
                        canMoveForward: r,
                        canMoveBackward: s,
                        canRewind: o,
                        canShuffle: l,
                        onClickNext: d,
                        onClickPrev: c,
                        onRewindBackwardsClick: u,
                        onRewindForwardClick: _,
                        onClickPlayPause: m,
                        canChangeRepeatMode: p,
                        shuffle: v,
                        className: h,
                        onRepeatClick: b,
                        onShuffleClick: x,
                    } = e,
                    { formatMessage: f } = (0, S.A)();
                return (0, i.jsxs)('div', {
                    className: (0, y.$)(k().root, h),
                    children: [
                        (0, i.jsxs)('div', {
                            className: k().buttonContainer,
                            children: [
                                (t || l) &&
                                    (0, i.jsx)(j.u, {
                                        className: k().sonataButton,
                                        size: 's',
                                        iconSize: 'xxs',
                                        color: 'secondary',
                                        isDisabled: t,
                                        shuffle: v,
                                        onClick: x,
                                        'data-test-id': T.Kq.sonata.SHUFFLE_BUTTON,
                                    }),
                                !t &&
                                    o &&
                                    (0, i.jsx)(E.$, {
                                        className: (0, y.$)(k().sonataButton, k().rewind),
                                        color: 'secondary',
                                        size: 'm',
                                        radius: 'round',
                                        withRipple: !1,
                                        'aria-label': f({ id: 'player-actions.rewind-backwards' }),
                                        icon: (0, i.jsx)(B.I, { variant: 'rewindBackwards', size: 'xxs' }),
                                        onClick: u,
                                        'data-test-id': T.Kq.sonata.REWIND_BACKWARDS_BUTTON,
                                    }),
                            ],
                        }),
                        (0, i.jsxs)('div', {
                            className: k().sonataButtons,
                            children: [
                                (0, i.jsx)(E.$, {
                                    className: k().sonataButton,
                                    color: 'secondary',
                                    size: 'm',
                                    radius: 'round',
                                    disabled: !s,
                                    focusableWhenDisabled: !0,
                                    withRipple: !1,
                                    'aria-label': f({ id: 'player-actions.previous-track' }),
                                    icon: (0, i.jsx)(B.I, { variant: 'previous', size: 'xxs' }),
                                    onClick: c,
                                    'data-test-id': T.Kq.sonata.PREVIOUS_TRACK_BUTTON,
                                }),
                                (0, i.jsx)(A.D, {
                                    className: (0, y.$)(k().sonataButton, k().sonataPlayButton),
                                    iconSize: 'm',
                                    size: 'l',
                                    radius: 'round',
                                    color: 'secondary',
                                    buttonVariant: 'default',
                                    isPlaying: a,
                                    iconClassName: k().playPauseButtonIcon,
                                    onClick: m,
                                }),
                                (0, i.jsx)(E.$, {
                                    className: k().sonataButton,
                                    radius: 'round',
                                    size: 'm',
                                    color: 'secondary',
                                    disabled: !r,
                                    focusableWhenDisabled: !0,
                                    withRipple: !1,
                                    'aria-label': f({ id: 'player-actions.next-track' }),
                                    icon: (0, i.jsx)(B.I, { variant: 'next', size: 'xxs' }),
                                    onClick: d,
                                    'data-test-id': T.Kq.sonata.NEXT_TRACK_BUTTON,
                                }),
                            ],
                        }),
                        (0, i.jsxs)('div', {
                            className: k().buttonContainer,
                            children: [
                                !t &&
                                    o &&
                                    (0, i.jsx)(E.$, {
                                        className: (0, y.$)(k().sonataButton, k().rewind),
                                        color: 'secondary',
                                        size: 'm',
                                        radius: 'round',
                                        withRipple: !1,
                                        'aria-label': f({ id: 'player-actions.rewind-forward' }),
                                        icon: (0, i.jsx)(B.I, { variant: 'rewindForward', size: 'xxs' }),
                                        onClick: _,
                                        'data-test-id': T.Kq.sonata.REWIND_FORWARD_BUTTON,
                                    }),
                                (t || p) &&
                                    (0, i.jsx)(I.s, {
                                        className: k().sonataButton,
                                        size: 's',
                                        color: 'secondary',
                                        isDisabled: t,
                                        iconSize: 'xxs',
                                        repeatMode: n,
                                        onClick: b,
                                    }),
                            ],
                        }),
                    ],
                });
            });
            var L = a(71483),
                D = a(75783),
                O = a(17705),
                R = a(41812),
                M = a(92744),
                F = a(4008),
                U = a(86103),
                z = a.n(U);
            let W = (0, n.PA)((e) => {
                    let {
                            isPlaying: t,
                            canMoveForward: a,
                            canMoveBackward: n,
                            canRewind: s,
                            onClickNext: o,
                            onClickPrev: l,
                            onRewindBackwardsClick: d,
                            onRewindForwardClick: c,
                            onClickPlayPause: u,
                            className: _,
                        } = e,
                        { formatMessage: h } = (0, S.A)(),
                        { user: b, sonataState: f } = (0, x.g)(),
                        g = (0, v.z)(),
                        N = f.entityMeta,
                        C = f.contextType === L.K.Generative,
                        I = b.isAuthorized && !C,
                        j = (0, O.K)(f.entityMeta),
                        P = (0, D.m)(f.entityMeta);
                    (0, r.useEffect)(() => {
                        if (!f.isGenerativeContext)
                            return (
                                null == g || g.addShortcutsListener(p.M.MAIN, m.l.LIKE, j),
                                null == g || g.addShortcutsListener(p.M.MAIN, m.l.DISLIKE, P),
                                () => {
                                    (null == g || g.removeShortcutsListener(p.M.MAIN, m.l.LIKE), null == g || g.removeShortcutsListener(p.M.MAIN, m.l.DISLIKE));
                                }
                            );
                    }, [P, j, g, f.isGenerativeContext]);
                    let k = (0, r.useMemo)(
                            () =>
                                s
                                    ? (0, i.jsx)(E.$, {
                                          className: z().sonataButton,
                                          variant: 'text',
                                          color: 'secondary',
                                          size: 'm',
                                          radius: 'round',
                                          withRipple: !1,
                                          'aria-label': h({ id: 'player-actions.rewind-backwards' }),
                                          icon: (0, i.jsx)(B.I, { variant: 'rewindBackwards', size: 'xs' }),
                                          onClick: d,
                                          'data-test-id': T.Kq.sonata.MOBILE_REWIND_BACKWARDS_BUTTON,
                                      })
                                    : (0, i.jsx)(E.$, {
                                          className: z().sonataButton,
                                          variant: 'text',
                                          color: 'secondary',
                                          size: 'm',
                                          radius: 'round',
                                          disabled: !n,
                                          focusableWhenDisabled: !0,
                                          withRipple: !1,
                                          'aria-label': h({ id: 'player-actions.previous-track' }),
                                          icon: (0, i.jsx)(B.I, { variant: 'previous', size: 'xs' }),
                                          onClick: l,
                                          'data-test-id': T.Kq.sonata.MOBILE_PREVIOUS_TRACK_BUTTON,
                                      }),
                            [s, n, h, l, d],
                        ),
                        w = (0, r.useMemo)(
                            () =>
                                s
                                    ? (0, i.jsx)(E.$, {
                                          className: z().sonataButton,
                                          variant: 'text',
                                          radius: 'round',
                                          size: 'm',
                                          color: 'secondary',
                                          disabled: !a,
                                          focusableWhenDisabled: !0,
                                          withRipple: !1,
                                          'aria-label': h({ id: 'player-actions.rewind-forward' }),
                                          icon: (0, i.jsx)(B.I, { variant: 'rewindForward', size: 'xs' }),
                                          onClick: c,
                                          'data-test-id': T.Kq.sonata.MOBILE_REWIND_FORWARD_BUTTON,
                                      })
                                    : (0, i.jsx)(E.$, {
                                          className: z().sonataButton,
                                          variant: 'text',
                                          radius: 'round',
                                          size: 'm',
                                          color: 'secondary',
                                          disabled: !a,
                                          focusableWhenDisabled: !0,
                                          withRipple: !1,
                                          'aria-label': h({ id: 'player-actions.next-track' }),
                                          icon: (0, i.jsx)(B.I, { variant: 'next', size: 'xs' }),
                                          onClick: o,
                                          'data-test-id': T.Kq.sonata.MOBILE_NEXT_TRACK_BUTTON,
                                      }),
                            [s, a, h, o, c],
                        );
                    return (0, i.jsxs)('div', {
                        className: (0, y.$)(z().root, _),
                        children: [
                            (0, i.jsx)('div', {
                                className: z().buttonContainer,
                                children: N && I && (0, i.jsx)(F.WithOffline, { fallback: (0, i.jsx)(R._, { isDisliked: N.isDisliked, iconSize: 'xs', onClick: P }) }),
                            }),
                            (0, i.jsxs)('div', {
                                className: z().sonataButtons,
                                children: [
                                    k,
                                    (0, i.jsx)(A.D, {
                                        className: z().sonataButton,
                                        iconSize: 'xxl',
                                        variant: 'filled',
                                        color: 'secondary',
                                        isPlaying: t,
                                        iconClassName: z().playPauseButtonIcon,
                                        onClick: u,
                                    }),
                                    w,
                                ],
                            }),
                            (0, i.jsx)('div', {
                                className: z().buttonContainer,
                                children:
                                    N &&
                                    I &&
                                    (0, i.jsx)(F.WithOffline, {
                                        fallback: (0, i.jsx)(M.c, { isLiked: N.isLiked, iconSize: 'xs', onClick: j, disabled: !b.isAuthorized }),
                                    }),
                            }),
                        ],
                    });
                }),
                V = (0, n.PA)((e) => {
                    var t, a;
                    let { isMobile: n, entityMeta: A, isFullscreen: y, className: S, withShuffle: T, withRepeat: E } = e,
                        { sonataState: B, vibe: I, advert: j, freePlayerAccess: P } = (0, x.g)(),
                        k = (0, v.z)(),
                        L = (0, b.e)(),
                        { rewindBackwards: D, rewindForward: O } = (() => {
                            let {
                                    sonataState: { entityMeta: e },
                                } = (0, x.g)(),
                                t = (0, b.e)();
                            return {
                                rewindBackwards: (0, r.useCallback)(() => {
                                    if (!t || !e || !e.durationMs) return;
                                    let a = t.state.playerState.progress.value.position - 15;
                                    t.setProgress(a < 0 ? 0 : a);
                                }, [e, t]),
                                rewindForward: (0, r.useCallback)(() => {
                                    if (!t || !e || !e.durationMs) return;
                                    let a = e.durationMs / 1e3,
                                        i = t.state.playerState.progress.value.position + 30;
                                    t.setProgress(i < a ? i : a);
                                }, [e, t]),
                            };
                        })(),
                        R = (0, d.r)(),
                        M = (0, _.b)(),
                        F = (null == A ? void 0 : A.isNonMusic) && !j.isAdvertShown,
                        U = (0, l.P)(),
                        { togglePlay: z } = (0, h.B)({
                            seeds: null != (a = null == (t = I.meta) ? void 0 : t.seeds) ? a : [],
                            pageIdForFrom: u._Q.HOME,
                            blockIdForFrom: c.h.RUP_MAIN_RADIO,
                            onPlayInterrupted: () => P.showRestrictionModal(o.W.Interrupted),
                        }),
                        V = (0, r.useMemo)(() => (j.isAdvertShown ? j.isAdvertPlaying : B.isPlaying), [j.isAdvertShown, j.isAdvertPlaying, B.isPlaying]),
                        H = (0, s.c)(() => {
                            if (j.isAdvertShown) {
                                var e;
                                null == R || null == (e = R.audioAdvertPlayback) || e.togglePause();
                                return;
                            }
                            A ? null == L || L.togglePause() : z();
                        }),
                        K = (0, s.c)(() => {
                            (y && U()) || (H(), M(!V));
                        }),
                        G = (0, s.c)(() => {
                            null == L || L.moveForward();
                        }),
                        $ = (0, s.c)(() => {
                            null == L || L.moveBackward();
                        }),
                        Y = (0, g.e)(),
                        q = (0, f.A)(),
                        Z = (0, s.c)(() => {
                            q(B);
                        }),
                        X = (0, s.c)(() => {
                            Y(B);
                        });
                    (0, r.useEffect)(() => {
                        if (!y && (null == k || k.addShortcutsListener(p.M.MAIN, m.l.TOGGLE_PLAY, H), !j.isAdvertShown))
                            return (
                                null == k || k.addShortcutsListener(p.M.MAIN, m.l.TOGGLE_REPEAT, Z),
                                null == k || k.addShortcutsListener(p.M.MAIN, m.l.TOGGLE_SHUFFLE, X),
                                () => {
                                    (null == k || k.removeShortcutsListener(p.M.MAIN, m.l.TOGGLE_PLAY),
                                        j.isAdvertShown ||
                                            (null == k || k.removeShortcutsListener(p.M.MAIN, m.l.TOGGLE_SHUFFLE),
                                            null == k || k.removeShortcutsListener(p.M.MAIN, m.l.TOGGLE_REPEAT)));
                                }
                            );
                    }, [y, H, Z, X, k, j.isAdvertShown]);
                    let Q = (0, r.useMemo)(() => (y ? (n ? W : w) : n ? N : C.Z), [n, y]);
                    return (0, i.jsx)(Q, {
                        className: S,
                        disabled: null === B.entityMeta || (j.isAdvertShown && !n),
                        isPlaying: V || !1,
                        canMoveBackward: B.canMoveBackward && !j.isAdvertShown,
                        canMoveForward: B.canMoveForward && !j.isAdvertShown,
                        withShuffle: T,
                        withRepeat: E,
                        canShuffle: B.canShuffle,
                        shuffle: B.shuffle,
                        onClickPlayPause: K,
                        onClickNext: G,
                        onClickPrev: $,
                        canRewind: F,
                        onRewindBackwardsClick: D,
                        onRewindForwardClick: O,
                        canChangeRepeatMode: B.canChangeRepeatMode,
                        repeatMode: B.repeatMode,
                        onRepeatClick: Z,
                        onShuffleClick: X,
                    });
                });
        },
        12528: (e) => {
            e.exports = {
                heading: 'BuySubscriptionBaseContent_heading__lQExw',
                buttons: 'BuySubscriptionBaseContent_buttons__1MZhL',
                button: 'BuySubscriptionBaseContent_button___DQII',
                buttonMainText: 'BuySubscriptionBaseContent_buttonMainText__kKEWL',
                buttonAdditionText: 'BuySubscriptionBaseContent_buttonAdditionText__lV_51',
            };
        },
        12623: (e, t, a) => {
            'use strict';
            a.d(t, { d: () => u });
            var i = a(32290),
                n = a(63618),
                r = a(55178),
                s = a(21732),
                o = a(71926),
                l = a(38125),
                d = a.n(l);
            let c = (e) => {
                    let { value: t, variant: a, className: r, forwardRef: l, ...c } = e,
                        u = 'start' === a ? s.Kq.changeTimecode.TIMECODE_TIME_START : s.Kq.changeTimecode.TIMECODE_TIME_END;
                    return (0, i.jsx)(o.HL, {
                        ref: l,
                        tabIndex: 0,
                        className: (0, n.$)(d().root, d()['root_'.concat(a)], r),
                        variant: 'span',
                        size: 's',
                        type: 'entity',
                        weight: 'medium',
                        ...c,
                        'data-test-id': u,
                        children: (0, i.jsx)('span', { 'aria-hidden': 'true', children: t }),
                    });
                },
                u = (0, r.forwardRef)((e, t) => (0, i.jsx)(c, { forwardRef: t, ...e }));
        },
        13166: (e) => {
            e.exports = {
                contextMenu: 'PinItem_contextMenu__VwiFp',
                contextMenu_visible: 'PinItem_contextMenu_visible__Zgwkh',
                root: 'PinItem_root__WSoCn',
                image: 'PinItem_image__Ow56U',
                cover: 'PinItem_cover__9TcjE',
                tooltip: 'PinItem_tooltip__BGwBw',
                multivibeContainer: 'PinItem_multivibeContainer__M3tj_',
                multivibeCover: 'PinItem_multivibeCover__QykrX',
                multivibeAvatar: 'PinItem_multivibeAvatar__2WWq4',
                multivibeControl: 'PinItem_multivibeControl__uw80u',
            };
        },
        13616: (e, t, a) => {
            'use strict';
            a.d(t, { K: () => n });
            var i = a(60754);
            let n = i.gK.model('CustomPlayerThumb', { href: i.gK.string, width: i.gK.number, height: i.gK.number });
        },
        13757: (e, t, a) => {
            'use strict';
            a.d(t, { r: () => n, L: () => r });
            let i = (e, t) => e.getDate() === t.getDate() && e.getMonth() === t.getMonth() && e.getFullYear() === t.getFullYear();
            var n = (function (e) {
                return ((e.TODAY = 'today'), (e.YESTERDAY = 'yesterday'), (e.DATE = 'date'), (e.DATE_WITH_YEAR = 'date-with-year'), e);
            })({});
            let r = (e) => {
                let t = new Date();
                if (i(t, e)) return 'today';
                let a = new Date();
                return (a.setDate(a.getDate() - 1), i(a, e)) ? 'yesterday' : t.getFullYear() !== e.getFullYear() ? 'date-with-year' : 'date';
            };
        },
        13798: (e, t, a) => {
            'use strict';
            a.d(t, { N: () => h });
            var i = a(32290),
                n = a(63618),
                r = a(96103),
                s = a(55178),
                o = a(60900),
                l = a(80229),
                d = a(21732),
                c = a(6752),
                u = a(82586),
                _ = a(57594),
                m = a(60244),
                p = a(90006),
                v = a.n(p);
            let h = (0, r.PA)((e) => {
                let { className: t, getDescriptionTexts: a, trackId: r, containerClassName: p, variant: h, size: b = 'xxxs', ...x } = e,
                    { formatMessage: f } = (0, o.A)(),
                    {
                        settings: { isMobile: g },
                    } = (0, _.g)(),
                    [A, N] = (0, s.useState)(null),
                    C = (0, c.L)(() => {
                        switch (h) {
                            case l.JU.E:
                                return 'explicit';
                            case l.JU.AGE_12:
                            case l.JU.AGE_16:
                            case l.JU.AGE_18:
                                return 'adult';
                            case l.JU.EXCLAMATION:
                        }
                        return 'exclamation';
                    }),
                    y = (0, s.useMemo)(() => f({ id: 'extra-explicit.explicit-mark' }), [f]);
                (0, s.useEffect)(() => {
                    a && a().then(N);
                }, [a, r]);
                let S = (null == A ? void 0 : A.join('\n')) || '',
                    T = !!(null == A ? void 0 : A.length) && !g,
                    E = S.length > 0 ? S : y;
                return (0, i.jsx)(m.k, {
                    description: S,
                    placement: 'bottom-start',
                    enabled: T,
                    children: (0, i.jsx)('span', {
                        className: p,
                        children: (0, i.jsx)(u.I, {
                            className: (0, n.$)(v().explicitMark, t),
                            'aria-label': E,
                            variant: C,
                            size: b,
                            ...x,
                            'data-test-id': d.S7.EXPLICIT_MARK_ICON,
                        }),
                    }),
                });
            });
        },
        14135: (e) => {
            e.exports = {
                root: 'NavbarDesktopUnauthorizedBar_root__uQZ9L',
                title: 'NavbarDesktopUnauthorizedBar_title__vf0W7',
                subtitle: 'NavbarDesktopUnauthorizedBar_subtitle__anNNQ',
                userProfile: 'NavbarDesktopUnauthorizedBar_userProfile__hAABb',
                userId: 'NavbarDesktopUnauthorizedBar_userId__m0jC6',
                buttons: 'NavbarDesktopUnauthorizedBar_buttons__94Y3N',
            };
        },
        14257: (e, t, a) => {
            'use strict';
            a.d(t, { S: () => i });
            var i = (function (e) {
                return ((e.Dark = 'dark'), (e.Light = 'light'), e);
            })({});
        },
        14960: (e, t, a) => {
            'use strict';
            a.d(t, { d: () => n });
            var i = a(57594);
            let n = (e, t, a) => {
                let {
                    settings: { isMobile: n },
                } = (0, i.g)();
                return !!(n && e && (((null == t ? void 0 : t.endPositionSec) && t.endPositionSec > 0) || (null == t ? void 0 : t.hasEverFinished) || (a && a > 0)));
            };
        },
        16510: (e) => {
            e.exports = { root: 'ArtistItem_root__Q_mgJ', image: 'ArtistItem_image__5rKWF', cover: 'ArtistItem_cover__FTvHo' };
        },
        19337: (e, t, a) => {
            'use strict';
            a.d(t, { f: () => i });
            let i = (e, t, a) => {
                var i, n, r;
                let s = null != (r = null == (n = document.getElementById(t)) || null == (i = n.querySelector('iframe')) ? void 0 : i.contentWindow) ? r : null;
                return null !== s && e.source === s && ('null' === window.location.origin || e.origin === window.location.origin) && a(e.data);
            };
        },
        19349: (e) => {
            e.exports = {
                root: 'NavbarDesktopAnimatedPlusBar_root___wH9W',
                button: 'NavbarDesktopAnimatedPlusBar_button__IX7L4',
                important: 'NavbarDesktopAnimatedPlusBar_important__7R916',
                icon: 'NavbarDesktopAnimatedPlusBar_icon__9lTgJ',
            };
        },
        19529: (e, t, a) => {
            'use strict';
            a.d(t, { n: () => c });
            var i = a(32290),
                n = a(63618),
                r = a(52138),
                s = a(6752),
                o = a(40229),
                l = a(75487),
                d = a.n(l);
            let c = (e) => {
                let {
                        agent: t,
                        isPlaying: a,
                        isCurrent: l,
                        onPlayButtonClick: c,
                        shouldShowControl: u = !0,
                        playButtonIconSize: _,
                        alt: m,
                        className: p,
                        coverClassName: v,
                        entityCoverClassName: h,
                        controlClassName: b,
                        fallbackIconSize: x,
                    } = e,
                    f = (0, s.L)(() => {
                        if (t.entityType) return t.entityType === r.h.ARTIST ? 'round' : 'xs';
                    });
                return (0, i.jsx)(o.q, {
                    isAvailable: !0,
                    coverUri: t.cover.uri,
                    className: (0, n.$)(d().root, d()['root_radius_'.concat(f)], { [d().root_withShadow]: !!t.entityType }, p),
                    radius: f,
                    onPlayButtonClick: c,
                    isPlaying: a,
                    isCurrent: l,
                    alt: m,
                    withLoadingIndicator: !1,
                    shouldShowControl: u,
                    playButtonIconSize: _,
                    fallbackIconSize: x,
                    coverClassName: v,
                    entityCoverClassName: h,
                    controlClassName: b,
                });
            };
        },
        20136: (e) => {
            e.exports = {
                timecode: 'ChangeTimecode_timecode__UScFt',
                root: 'ChangeTimecode_root__QxEw_',
                root_withTimecode: 'ChangeTimecode_root_withTimecode__eJhYI',
                root_mobile: 'ChangeTimecode_root_mobile__SzOdx',
                root_fullscreen: 'ChangeTimecode_root_fullscreen__FA6r0',
                slider: 'ChangeTimecode_slider__P4qmT',
            };
        },
        20669: (e) => {
            e.exports = {
                root: 'AdContainer_root__ti4rk',
                container: 'AdContainer_container__DLRij',
                title: 'AdContainer_title__AsPky',
                subtitle: 'AdContainer_subtitle__LIOif',
                info: 'AdContainer_info__EKKWS',
                favicon: 'AdContainer_favicon__ry_3I',
                buttonContainer: 'AdContainer_buttonContainer__SvDt3',
                button: 'AdContainer_button__nQcMg',
                linkButton: 'AdContainer_linkButton__rabLN',
            };
        },
        20982: (e, t, a) => {
            'use strict';
            a.d(t, { K: () => n });
            var i = a(55985);
            let n = (e) => {
                var t;
                if (e) return { animationUri: e.animationUri, cover: (0, i.p)(e.cover), entityType: null == (t = e.entity) ? void 0 : t.type };
            };
        },
        21878: (e) => {
            e.exports = {
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
        22266: (e, t, a) => {
            'use strict';
            a.d(t, { f: () => i });
            var i = (function (e) {
                return (
                    (e.VIDEO = 'VIDEO'),
                    (e.AUDIO = 'AUDIO'),
                    (e.TOP_BANNER = 'TOP_BANNER'),
                    (e.SIDE_BANNER = 'SIDE_BANNER'),
                    (e.TOUCH_BANNER = 'TOUCH_BANNER'),
                    (e.PLAYLIST_BRANDING = 'PLAYLIST_BRANDING'),
                    (e.AXE_ENTITY_BRANDING = 'AXE_ENTITY_BRANDING'),
                    (e.PLAYER_BRANDING = 'PLAYER_BRANDING'),
                    e
                );
            })({});
        },
        22714: (e, t, a) => {
            'use strict';
            a.d(t, { n: () => s });
            var i = a(32290),
                n = a(55178),
                r = a(1176);
            let s = (e) => {
                let { pageId: t, pageEntityId: a, displayReasonId: s, pageStyle: o, pagePlacement: l, children: d } = e,
                    c = (0, n.useMemo)(() => ({ pageId: t, pageEntityId: a, displayReasonId: s, pageStyle: o, pagePlacement: l }), [t, a, s, o, l]);
                return (0, i.jsx)(r.r.Provider, { value: c, children: d });
            };
        },
        24607: (e) => {
            e.exports = { root: 'MuzmarketTitle_root___tr35', badge: 'MuzmarketTitle_badge__d3Xuz' };
        },
        25936: (e, t, a) => {
            'use strict';
            a.d(t, { Z: () => S });
            var i = a(32290),
                n = a(96103),
                r = a(55178),
                s = a(91027),
                o = a(6752),
                l = a(37108),
                d = a(57594),
                c = a(32156),
                u = a(90829),
                _ = a(90326),
                m = a(59802),
                p = a(63618),
                v = a(60900),
                h = a(21732),
                b = a(63423),
                x = a(82586),
                f = a(30839),
                g = a(73021),
                A = a(45031),
                N = a.n(A);
            let C = (0, n.PA)((e) => {
                    let {
                            className: t,
                            withShuffle: a,
                            shuffle: n,
                            canMoveBackward: r,
                            canMoveForward: o,
                            onClickNext: l,
                            onClickPrev: d,
                            withRepeat: c,
                            repeatMode: u,
                            playButton: _,
                            isDisabledShuffle: m,
                            isDisabledRepeat: A,
                            onRepeatClick: C,
                            onShuffleClick: y,
                        } = e,
                        { formatMessage: S } = (0, v.A)(),
                        T = (0, s.c)(() => {
                            l();
                        }),
                        E = (0, s.c)(() => {
                            d();
                        });
                    return (0, i.jsxs)('div', {
                        className: (0, p.$)(N().root, t),
                        children: [
                            a &&
                                (0, i.jsx)('div', {
                                    className: N().buttonContainer,
                                    children: (0, i.jsx)(g.u, {
                                        className: N().sonataButton,
                                        size: 'xxxs',
                                        variant: 'text',
                                        iconSize: 'xs',
                                        isDisabled: m,
                                        shuffle: n,
                                        onClick: y,
                                        'data-test-id': h.Kq.sonata.SHUFFLE_BUTTON,
                                    }),
                                }),
                            (0, i.jsxs)('div', {
                                className: N().sonataButtons,
                                children: [
                                    (0, i.jsx)(b.$, {
                                        className: N().sonataButton,
                                        variant: 'text',
                                        size: 'm',
                                        radius: 'round',
                                        disabled: !r,
                                        focusableWhenDisabled: !0,
                                        withRipple: !1,
                                        'aria-label': S({ id: 'player-actions.previous-track' }),
                                        icon: (0, i.jsx)(x.I, { variant: 'previous', size: 'xxs' }),
                                        onClick: E,
                                        'data-test-id': h.Kq.sonata.PREVIOUS_TRACK_BUTTON,
                                    }),
                                    _,
                                    (0, i.jsx)(b.$, {
                                        className: N().sonataButton,
                                        radius: 'round',
                                        size: 'm',
                                        variant: 'text',
                                        disabled: !o,
                                        focusableWhenDisabled: !0,
                                        withRipple: !1,
                                        'aria-label': S({ id: 'player-actions.next-track' }),
                                        icon: (0, i.jsx)(x.I, { variant: 'next', size: 'xxs' }),
                                        onClick: T,
                                        'data-test-id': h.Kq.sonata.NEXT_TRACK_BUTTON,
                                    }),
                                ],
                            }),
                            c &&
                                (0, i.jsx)('div', {
                                    className: N().buttonContainer,
                                    children: (0, i.jsx)(f.s, {
                                        className: N().sonataButton,
                                        size: 'xxxs',
                                        variant: 'text',
                                        isDisabled: A,
                                        iconSize: 'xs',
                                        repeatMode: u,
                                        onClick: C,
                                    }),
                                }),
                        ],
                    });
                }),
                y = { mainAxis: 44 },
                S = (0, n.PA)((e) => {
                    let {
                            disabled: t,
                            isPlaying: a,
                            repeatMode: n,
                            canMoveForward: p,
                            canMoveBackward: v,
                            canShuffle: h,
                            shuffle: b,
                            onClickNext: x,
                            onClickPrev: f,
                            onClickPlayPause: g,
                            canChangeRepeatMode: A,
                            className: S,
                            withShuffle: T,
                            withRepeat: E,
                            onRepeatClick: B,
                            onShuffleClick: I,
                        } = e,
                        { advert: j, freePlayerAccess: P, freeAccess: k, user: w, paymentWidgetModal: L } = (0, d.g)();
                    (0, m.e)();
                    let D = (0, r.useCallback)(
                            () =>
                                (0, i.jsx)(_.D, {
                                    className: N().sonataButton,
                                    iconSize: 'l',
                                    variant: 'filled',
                                    isPlaying: a,
                                    iconClassName: N().playButtonIcon,
                                    onClick: g,
                                }),
                            [a, g],
                        ),
                        O = (0, s.c)((e) => {
                            e || P.hideRestrictionModal();
                        }),
                        R = (0, o.L)(() => {
                            let e = k.isFreeWebUser && w.isAuthorized && !k.limitedFreePlayback ? 'vibe' : 'fullTracks';
                            return P.shownRestrictionModal === l.h.PlayerAuthorization
                                ? (0, i.jsx)(u.Z, { isOpened: !0, placement: 'top', onOpenChange: O, offsetOptions: y, textVariant: e, renderChildren: D })
                                : L.modal.isOpened || P.shownRestrictionModal !== l.h.PlayerSubscription
                                  ? D()
                                  : (0, i.jsx)(c.S, { isOpened: !0, placement: 'top', onOpenChange: O, offsetOptions: y, textVariant: e, renderChildren: D });
                        });
                    return (0, i.jsx)(C, {
                        isDisabledRepeat: !A || t,
                        isDisabledShuffle: !h || t,
                        withShuffle: ((t || h) && !(null == j ? void 0 : j.isAdvertShown)) || !!T,
                        shuffle: b,
                        canMoveBackward: v,
                        canMoveForward: p,
                        onClickNext: x,
                        onClickPrev: f,
                        withRepeat: ((t || A) && !(null == j ? void 0 : j.isAdvertShown)) || !!E,
                        repeatMode: n,
                        className: S,
                        playButton: R,
                        onRepeatClick: B,
                        onShuffleClick: I,
                    });
                });
        },
        26749: (e, t, a) => {
            'use strict';
            a.d(t, { h: () => i });
            var i = (function (e) {
                return ((e.EMPTY = 'empty'), (e.DIRECT = 'direct'), (e.CREATIVE = 'creative'), (e.BRANDING = 'branding'), e);
            })({});
        },
        27616: (e, t, a) => {
            'use strict';
            a.d(t, { w: () => k });
            var i = a(32290),
                n = a(63618),
                r = a(96103),
                s = a(21916),
                o = a(55178),
                l = a(60900),
                d = a(39407),
                c = a(81354),
                u = a(21732),
                _ = a(91027),
                m = a(6752),
                p = a(70280),
                v = a(71926),
                h = a(58294),
                b = a(13757),
                x = a(19383),
                f = a(32641),
                g = a(57594),
                A = a(53514),
                N = a(85017),
                C = a(13798),
                y = a(61258),
                S = a(24760),
                T = a(84141),
                E = a(14960),
                B = a(5856),
                I = a.n(B),
                j = a(21878),
                P = a.n(j);
            let k = (0, r.PA)((e) => {
                var t, a, r, B, j, k;
                let {
                        track: w,
                        className: L,
                        withPodcastName: D = !1,
                        withDate: O = !0,
                        withSecondaryColor: R = !1,
                        withListeningProgress: M = !1,
                        captionSize: F = 'm',
                        explicitSize: U = 'xs',
                        withExplicitMark: z = !0,
                        titleContainerClassName: W,
                        textClassName: V,
                        playContextParams: H,
                        withTimeLeftText: K = !0,
                        ignoreDislikedStyles: G,
                        withCustomTooltip: $ = !0,
                        withSavingQueryParams: Y,
                        beforeTitle: q,
                        afterTitle: Z,
                        titleLineClamp: X = 1,
                        podcastMetaClassName: Q,
                        progressClassName: J,
                        withAlbumTitleLink: ee = !0,
                    } = e,
                    {
                        fullscreenPlayer: et,
                        sonataState: ea,
                        settings: { isMobile: ei },
                    } = (0, g.g)(),
                    { formatMessage: en } = (0, l.A)(),
                    er = (0, S.$)({ withCustomTooltip: $ }),
                    es = (0, s.useSearchParams)(),
                    eo = w.getUrl(Y ? Object.fromEntries(es) : void 0),
                    el = w.pubDate ? new Date(w.pubDate) : new Date(),
                    ed = (0, b.L)(el),
                    ec = !1,
                    eu = (0, f.Z)(null != (j = null == (t = w.mainAlbum) ? void 0 : t.url) ? j : ''),
                    e_ = (0, o.useMemo)(() => {
                        var e;
                        let t = en({ id: 'entity-names.podcast-name' }, { podcastName: w.title });
                        return ''.concat(t, ' ').concat(null != (e = w.version) ? e : '');
                    }, [en, w.title, w.version]),
                    em = !!(M && H && w.shouldRememberPosition && w.streamProgress && w.durationMs),
                    ep =
                        w.id === (null == (a = ea.entityMeta) ? void 0 : a.id) &&
                        (null == (B = ea.entityMeta) || null == (r = B.streamProgress) ? void 0 : r.endPositionSec),
                    ev = (0, E.d)(em, w.streamProgress, ep),
                    eh = w.mainAlbum && D && !ev,
                    eb = w.pubDate && O && !ev,
                    ex = (0, x.l)({ entity: null != (k = w.mainAlbum) ? k : null, entityType: N.n.PODCAST, callback: eu }),
                    ef = (0, _.c)((e) => {
                        (et.modal.isOpened && et.modal.close(), ex(e));
                    }),
                    eg = (0, T.O)({ track: w, withSavingQueryParams: Y, entityType: N.n.PODCAST }),
                    eA = (0, o.useCallback)(() => {
                        switch (ed) {
                            case b.r.TODAY:
                                return (0, i.jsx)(d.A, { id: 'interface-actions.date-today' });
                            case b.r.YESTERDAY:
                                return (0, i.jsx)(d.A, { id: 'interface-actions.date-yesterday' });
                            case b.r.DATE_WITH_YEAR:
                                return (0, i.jsx)(c.XU, { value: w.pubDate, month: 'long', day: 'numeric', year: 'numeric' });
                            default:
                                return (0, i.jsx)(c.XU, { value: w.pubDate, month: 'long', day: 'numeric' });
                        }
                    }, [w.pubDate, ed]);
                w.pubDate && O && (ec = [b.r.TODAY, b.r.YESTERDAY].includes(ed));
                let eN = (0, o.useCallback)(
                        (e) =>
                            (0, i.jsx)(p.m_, {
                                enabled: er && !ei,
                                offsetOptions: 4,
                                placement: 'top',
                                text: w.title,
                                hoverSettings: A.V,
                                children: (0, i.jsx)(v.HL, {
                                    className: I().title,
                                    type: 'entity',
                                    size: F,
                                    variant: 'span',
                                    title: er ? void 0 : w.title,
                                    ...e,
                                    children: w.title,
                                }),
                            }),
                        [ei, er, F, w.title],
                    ),
                    eC = (0, o.useMemo)(
                        () =>
                            w.isRemoved
                                ? (0, i.jsx)(p.m_, {
                                      enabled: er && !ei,
                                      offsetOptions: 4,
                                      placement: 'top',
                                      text: en({ id: 'track-title.podcast-not-found' }),
                                      hoverSettings: A.V,
                                      children: (0, i.jsx)('span', { children: (0, i.jsx)(d.A, { id: 'track-title.podcast-not-found' }) }),
                                  })
                                : w.hasTrackLink
                                  ? (0, i.jsx)(y.N, {
                                        onClick: eg,
                                        className: I().albumLink,
                                        href: eo,
                                        'aria-label': e_,
                                        title: er ? void 0 : w.title,
                                        'data-test-id': u.Kq.track.TRACK_TITLE,
                                        children: eN(),
                                    })
                                  : eN({ 'data-test-id': u.Kq.track.TRACK_TITLE }),
                        [ei, w.isRemoved, w.hasTrackLink, w.title, eN, er, en, eg, eo, e_],
                    ),
                    ey = (0, m.L)(() => {
                        var e;
                        if (!eh) return;
                        let t = (0, i.jsx)(p.m_, {
                            enabled: er && !ei,
                            offsetOptions: 4,
                            placement: 'top',
                            text: w.mainAlbum.title,
                            hoverSettings: A.V,
                            children: (0, i.jsx)(v.HL, { variant: 'span', type: 'entity', size: F, className: I().albumTitle, children: w.mainAlbum.title }),
                        });
                        return ee
                            ? (0, i.jsx)(y.N, {
                                  'aria-label': en({ id: 'entity-names.podcast-name' }, { podcastName: w.mainAlbum.title }),
                                  className: I().link,
                                  href: null == (e = w.mainAlbum) ? void 0 : e.url,
                                  title: er ? void 0 : w.mainAlbum.title,
                                  onClick: ef,
                                  'data-test-id': u.Kq.track.TRACK_PARENT_PODCAST_TITLE,
                                  children: t,
                              })
                            : (0, i.jsx)('span', { 'data-test-id': u.Kq.track.TRACK_PARENT_PODCAST_TITLE, children: t });
                    });
                return (0, i.jsx)('div', {
                    className: (0, n.$)(I().root, { [I().root_disabled]: !w.isAvailable, [I().root_disliked]: w.isDisliked && !G, [I().root_withSecondaryColor]: R }, L),
                    children: (0, i.jsxs)('div', {
                        className: (0, n.$)(I().metaContainer, P().podcastMetaContainer, Q),
                        children: [
                            em &&
                                H &&
                                w.streamProgress &&
                                (0, i.jsx)(h.B, {
                                    className: (0, n.$)(P().progress, J, {
                                        [P().progress_withPreviousInfo]: eh || eb,
                                        [P().progress_disabled]: !w.isAvailable || w.isDisliked,
                                    }),
                                    id: w.id,
                                    albumId: w.albumId,
                                    streamProgress: w.streamProgress,
                                    durationMs: w.durationMs || 0,
                                    playContextParams: H,
                                    withTimeLeftText: K,
                                }),
                            (0, i.jsxs)('div', {
                                className: (0, n.$)(I().titleContainer, W, P().podcastTitleContainer),
                                children: [
                                    (0, i.jsxs)(v.HL, {
                                        className: (0, n.$)(I().text, V),
                                        type: 'entity',
                                        size: F,
                                        variant: 'div',
                                        lineClamp: X,
                                        children: [
                                            q,
                                            eC,
                                            !w.isRemoved &&
                                                w.version &&
                                                (0, i.jsxs)(v.HL, {
                                                    className: (0, n.$)(I().text, I().version),
                                                    type: 'entity',
                                                    size: F,
                                                    weight: 'medium',
                                                    variant: 'span',
                                                    title: er ? void 0 : w.version,
                                                    children: ['\xa0', w.version],
                                                }),
                                        ],
                                    }),
                                    w.explicitDisclaimer &&
                                        z &&
                                        (0, i.jsx)(C.N, {
                                            containerClassName: I().explicitMarkContainer,
                                            getDescriptionTexts: w.getDescriptionTexts,
                                            variant: w.explicitDisclaimer,
                                            className: I().explicitMark,
                                            size: U,
                                            trackId: w.id,
                                        }),
                                    Z,
                                ],
                            }),
                            (eh || eb) &&
                                (0, i.jsxs)(v.HL, {
                                    type: 'entity',
                                    size: F,
                                    variant: 'div',
                                    lineClamp: 1,
                                    className: (0, n.$)(I().text, P().podcastName, V),
                                    children: [
                                        ey,
                                        eb &&
                                            (0, i.jsx)(v.HL, {
                                                variant: 'span',
                                                type: 'entity',
                                                size: F,
                                                className: (0, n.$)({
                                                    [P().dateWithName]: eh,
                                                    [P().soonDate]: ec,
                                                    [P().dateDisabled]: !w.isAvailable,
                                                    [P().dateDisliked]: w.isDisliked && !G,
                                                }),
                                                children: eA(),
                                            }),
                                    ],
                                }),
                        ],
                    }),
                });
            });
        },
        28015: (e, t, a) => {
            'use strict';
            a.d(t, { P: () => n, l: () => i });
            let i = 'yandex_rtb',
                n = 256152;
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
            a.d(t, { $: () => r });
            var i = a(60900),
                n = a(64605);
            let r = (e, t) => {
                let { formatMessage: a } = (0, i.A)();
                if (e)
                    switch (t) {
                        case n._.AUDIOBOOK:
                            return a({ id: 'non-music.shelf-unsubscribe' });
                        case n._.FAIRY_TALE:
                            return a({ id: 'interface-actions.do-not-like' });
                        default:
                            return a({ id: 'interface-actions.subscribed' });
                    }
                switch (t) {
                    case n._.AUDIOBOOK:
                        return a({ id: 'non-music.shelf-subscribe' });
                    case n._.FAIRY_TALE:
                        return a({ id: 'interface-actions.like' });
                    default:
                        return a({ id: 'interface-actions.subscribe' });
                }
            };
        },
        30839: (e, t, a) => {
            'use strict';
            a.d(t, { s: () => p });
            var i = a(32290),
                n = a(63618),
                r = a(60900),
                s = a(6612),
                o = a(91027),
                l = a(63423),
                d = a(82586),
                c = a(21732),
                u = a(1613),
                _ = a(76219),
                m = a.n(_);
            let p = (e) => {
                let {
                        isDisabled: t,
                        repeatMode: a,
                        className: _,
                        iconClassName: p,
                        size: v = 'xxxs',
                        iconSize: h = 'xs',
                        color: b,
                        variant: x = 'default',
                        onClick: f,
                    } = e,
                    { formatMessage: g } = (0, r.A)(),
                    A = t || a !== s.pM.ONE ? 'repeat' : 'repeat_one',
                    N = (0, u.z)(a, g, t),
                    C = (0, o.c)((e) => {
                        (null == f || f(), e.stopPropagation());
                    });
                return (0, i.jsx)(l.$, {
                    className: _,
                    radius: 'round',
                    size: v,
                    variant: x,
                    color: b,
                    disabled: t,
                    withRipple: !1,
                    'aria-hidden': t,
                    'aria-label': N,
                    'aria-pressed': !t && a !== s.pM.NONE,
                    onClick: C,
                    icon: (0, i.jsx)(d.I, {
                        size: h,
                        variant: A,
                        className: (0, n.$)(m().repeatIcon, m()['repeatIcon_'.concat(a)], { [m().repeatIcon_disabled]: t }, p),
                    }),
                    'data-test-id': ((e, t) =>
                        e === s.pM.NONE || t
                            ? c.Kq.sonata.REPEAT_BUTTON_NO_REPEAT
                            : e === s.pM.ONE
                              ? c.Kq.sonata.REPEAT_BUTTON_REPEAT_ONE
                              : c.Kq.sonata.REPEAT_BUTTON_REPEAT_CONTEXT)(a, t),
                });
            };
        },
        31010: (e, t, a) => {
            'use strict';
            a.d(t, { H: () => n, P: () => r });
            var i = a(55178);
            let n = (0, i.createContext)(null),
                r = () => (0, i.useContext)(n);
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
        32675: (e) => {
            e.exports = {
                root: 'CommonLayout_root__WC_W1',
                root_withAxeBanner: 'CommonLayout_root_withAxeBanner__2_ep2',
                content: 'CommonLayout_content__zy_Ja',
                content_withPlayerBar: 'CommonLayout_content_withPlayerBar__wTpoS',
                content_withAxeBanner: 'CommonLayout_content_withAxeBanner__gmyVS',
                playerBar: 'CommonLayout_playerBar__zXRxq',
                compositePlayerBar: 'CommonLayout_compositePlayerBar__hjZRp',
                compositePlayerBar_withNewVibe: 'CommonLayout_compositePlayerBar_withNewVibe__taMVb',
            };
        },
        34284: (e, t, a) => {
            'use strict';
            a.d(t, { z: () => d });
            var i = a(55178),
                n = a(42406),
                r = a(70204),
                s = a(34186),
                o = a(59576),
                l = a(46151);
            let d = (e) => {
                var t;
                let { id: a, ref: d } = e,
                    { config: c, isOnboardingOpened: u, setIsOnboardingOpened: _ } = (0, l.w)(),
                    m = (0, i.useRef)(!1),
                    p = (0, n.BL)([{ current: d }], !d),
                    { isIntersecting: v } = null != (t = p[o.N]) ? t : {},
                    h = (0, s.N)().get(r.U2);
                for (let { id: e, storageKey: t, enabled: n } of ((0, i.useEffect)(() => {
                    if (m.current && v) {
                        let e = c.find((e) => {
                            let { id: t } = e;
                            return t === a;
                        });
                        e && h.set(e.storageKey, !0, { expires: e.expires });
                    }
                }, [c, a, v, h, p, d]),
                c)) {
                    let i = h.get(t);
                    if (n) {
                        if (null == u ? void 0 : u.current) return !1;
                        if (a === e) {
                            if (i) return !1;
                            return ((m.current = !0), _(!0), !0);
                        }
                        if (!i) break;
                    }
                }
                return !1;
            };
        },
        34287: (e) => {
            e.exports = { root: 'BuySubscriptionModal_root__5LvlX', content: 'BuySubscriptionModal_content__v06Ju', header: 'BuySubscriptionModal_header__ho5hr' };
        },
        34883: (e, t, a) => {
            'use strict';
            a.d(t, { c: () => n });
            var i = a(19383);
            let n = (e) => {
                let { album: t, callback: a, shouldHistoryBack: n } = e;
                return (0, i.l)({ entity: t, callback: a, modalBehavior: void 0 === n ? void 0 : { shouldHistoryBack: n }, preventDefaultWhenSafe: !0 });
            };
        },
        35508: (e) => {
            e.exports = {
                root: 'WithBrandedEntityAxeBanner_root__aXh91',
                root_withCollapsedNavbar: 'WithBrandedEntityAxeBanner_root_withCollapsedNavbar__msb7M',
                creative: 'WithBrandedEntityAxeBanner_creative__Fp6Vg',
            };
        },
        37275: (e, t, a) => {
            'use strict';
            ((t.U0 = function (e, t) {
                let { skeletonId: a = '', mainObjectType: r = n.DomainObjectType.NonApplicable, mainObjectId: s = '' } = t,
                    o = (0, i.makeMetaParams)(2),
                    l = { ...t, skeletonId: a, mainObjectType: r, mainObjectId: s, _meta: o };
                e.trackEvent('Sidebar.Opened', l);
            }),
                (t.dL = function (e, t) {
                    let { skeletonId: a = '', mainObjectType: r = n.DomainObjectType.NonApplicable, mainObjectId: s = '' } = t,
                        o = (0, i.makeMetaParams)(1),
                        l = { ...t, skeletonId: a, mainObjectType: r, mainObjectId: s, _meta: o };
                    e.trackEvent('Sidebar.ActionPerformed', l);
                }),
                (t.qi = function (e, t) {
                    let { skeletonId: a = '', mainObjectType: r = n.DomainObjectType.NonApplicable, mainObjectId: s = '' } = t,
                        o = (0, i.makeMetaParams)(1),
                        l = { ...t, skeletonId: a, mainObjectType: r, mainObjectId: s, _meta: o };
                    e.trackEvent('Sidebar.Navigated', l);
                }),
                (t.cV = function (e, t) {
                    let { skeletonId: a = '', mainObjectType: r = n.DomainObjectType.NonApplicable, mainObjectId: s = '' } = t,
                        o = (0, i.makeMetaParams)(1),
                        l = { ...t, skeletonId: a, mainObjectType: r, mainObjectId: s, _meta: o };
                    e.trackEvent('Sidebar.Started', l);
                }));
            let i = a(92871),
                n = a(99923);
        },
        38125: (e) => {
            e.exports = { root: 'Timecode_root__TLT75', root_start: 'Timecode_root_start__pHG5N', root_end: 'Timecode_root_end__LLQsh' };
        },
        38819: (e) => {
            e.exports = {
                root: 'NotificationPin_root__DBEub',
                view: 'NotificationPin_view__daGc_',
                image: 'NotificationPin_image__o5F7B',
                multivibeContainer: 'NotificationPin_multivibeContainer__ZbXhn',
                multivibeCover: 'NotificationPin_multivibeCover__n_5EZ',
                multivibeAvatar: 'NotificationPin_multivibeAvatar__4P5gm',
                multivibeControl: 'NotificationPin_multivibeControl__iOOyQ',
            };
        },
        38936: (e, t, a) => {
            'use strict';
            a.d(t, { ErrorBoundary: () => d });
            var i = a(91945),
                n = a(32290),
                r = a(55178),
                s = a(70204),
                o = a(34186);
            class l extends r.Component {
                static getDerivedStateFromError(e) {
                    return { hasError: !0, error: e };
                }
                componentDidCatch(e, t) {
                    this.props.logger.error(e, { additional: t, type: 'error-boundary' });
                }
                render() {
                    let { hasError: e } = this.state,
                        { fallback: t, children: a } = this.props;
                    return e ? (0, n.jsx)(t, {}) : a;
                }
                constructor(...e) {
                    (super(...e), (0, i._)(this, 'state', { hasError: !1 }));
                }
            }
            let d = (function (e) {
                let t = (t) => {
                    let a = (0, o.N)().get(s.Zf);
                    return (0, n.jsx)(e, { ...t, logger: a });
                };
                return ((t.displayName = 'withContainer('.concat(e.displayName || e.name || 'Component', ')')), t);
            })(l);
        },
        39231: (e, t, a) => {
            'use strict';
            a.d(t, { q: () => n });
            var i = a(80408);
            let n = (e) => {
                var t, a;
                return null != (a = null == (t = (0, i.j)()) ? void 0 : t.get(e)) ? a : null;
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
        40996: (e, t, a) => {
            'use strict';
            a.d(t, { L: () => c });
            var i,
                n = a(95716),
                r = a(55178),
                s = {
                    8612: (e, t, a) => {
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.useDebouncedToggle = void 0));
                        let i = a(352),
                            n = a(810);
                        t.useDebouncedToggle = (e) => {
                            let { delay: t, initialState: a, throttleTimeout: r } = e,
                                s = (0, n.useRef)(null),
                                [o, l] = (0, n.useState)(!!a),
                                d = (0, n.useMemo)(
                                    () =>
                                        (0, i.throttle)(() => {
                                            (l(!a),
                                                s.current && window.clearTimeout(s.current),
                                                (s.current = window.setTimeout(() => {
                                                    l(!!a);
                                                }, t)));
                                        }, r),
                                    [t, a, r],
                                ),
                                c = (0, n.useCallback)(() => {
                                    (l(!!a), s.current && window.clearTimeout(s.current));
                                }, [a]);
                            return (
                                (0, n.useEffect)(
                                    () => () => {
                                        s.current && window.clearTimeout(s.current);
                                    },
                                    [],
                                ),
                                { state: o, handleDebouncedToggle: d, reset: c }
                            );
                        };
                    },
                    1848: (e, t) => {
                        (Object.defineProperty(t, '__esModule', { value: !0 }),
                            (t.getElementFromRefOrElement = void 0),
                            (t.getElementFromRefOrElement = (e) => {
                                if (void 0 !== e) {
                                    if (null === e || e instanceof HTMLElement) return e;
                                    if (null === e.current || e.current instanceof HTMLElement) return e.current;
                                }
                            }));
                    },
                    352: (e) => {
                        e.exports = n;
                    },
                    810: (e) => {
                        e.exports = i || (i = a.t(r, 2));
                    },
                },
                o = {};
            function l(e) {
                var t = o[e];
                if (void 0 !== t) return t.exports;
                var a = (o[e] = { exports: {} });
                return (s[e](a, a.exports, l), a.exports);
            }
            var d = {};
            ((() => {
                (Object.defineProperty(d, '__esModule', { value: !0 }), (d.useScroll = void 0));
                let e = l(810),
                    t = l(1848),
                    a = l(8612);
                d.useScroll = (i) => {
                    let { onScroll: n, listenIsScrolling: r, elementRef: s } = i,
                        { state: o, handleDebouncedToggle: l } = (0, a.useDebouncedToggle)({ delay: 1e3, throttleTimeout: 100 }),
                        d = (0, e.useCallback)(() => {
                            (r && l(), null == n || n());
                        }, [r, l, n]);
                    return (
                        (0, e.useEffect)(() => {
                            let e = (0, t.getElementFromRefOrElement)(s);
                            if (null === e) return;
                            let a = null != e ? e : window,
                                i = { capture: !0, passive: !0 };
                            return (a.addEventListener('scroll', d, i), () => a.removeEventListener('scroll', d, i));
                        }, [s, d]),
                        o
                    );
                };
            })(),
                d.__esModule);
            var c = d.useScroll;
        },
        41566: (e, t, a) => {
            'use strict';
            a.d(t, { U: () => c });
            var i = a(32290),
                n = a(96103),
                r = a(21732),
                s = a(82586),
                o = a(19740),
                l = a(30542),
                d = a(57594);
            let c = (0, n.PA)((e) => {
                let { isLiked: t, onClick: a, className: n, albumType: c, disabled: u } = e,
                    { user: _ } = (0, d.g)(),
                    m = t ? 'liked' : 'like',
                    p = (0, l.$)(t, c);
                return (0, i.jsx)(o.Dr, {
                    className: n,
                    onClick: a,
                    icon: (0, i.jsx)(s.I, { variant: m, size: 'xxs' }),
                    'aria-pressed': t,
                    disabled: u || !_.isAuthorized,
                    'data-test-id': r.S7.CONTEXT_MENU_SUBSCRIBE_BUTTON,
                    children: p,
                });
            });
        },
        41677: (e, t, a) => {
            'use strict';
            a.d(t, { i: () => U });
            var i = a(32290),
                n = a(63618),
                r = a(96103),
                s = a(55178),
                o = a(70280),
                l = a(57594),
                d = a(53514),
                c = a(40484),
                u = a.n(c),
                _ = a(60900),
                m = a(99923),
                p = a(21732),
                v = a(91027),
                h = a(71926),
                b = a(47745),
                x = a(32641),
                f = a(28999),
                g = a(61258),
                A = a(19383);
            let N = (0, r.PA)((e) => {
                    let {
                            artist: t,
                            withLink: a = !0,
                            linkClassName: n,
                            captionClassName: r,
                            captionSize: s = 'm',
                            allArtistsTitle: d,
                            withCustomTooltip: c,
                            hoverSettings: u,
                        } = e,
                        { formatMessage: N } = (0, _.A)(),
                        {
                            track: C,
                            settings: { isMobile: y },
                        } = (0, l.g)(),
                        S = (0, x.Z)(t.url),
                        { sendNavigateSearchFeedback: T } = (0, f.z)(),
                        E = (0, b.N)(),
                        B = ((e) => {
                            let { artist: t, callback: a } = e,
                                { currentTrackInfo: i, fullscreenPlayer: n, fullscreenVideoPlayer: r } = (0, l.g)(),
                                { modal: s } = i;
                            return (0, A.l)({
                                entity: t,
                                callback: a,
                                onBeforeHandle: (e) => {
                                    (null == e || e.stopPropagation(), s.isOpened && (i.reset(), s.close()), n.modal.isOpened && n.modal.close());
                                },
                                onAfterHandled: () => {
                                    r.modal.isOpened && (r.modal.close(), r.reset());
                                },
                                preventDefaultWhenSafe: !0,
                            });
                        })({
                            artist: t,
                            callback: (0, v.c)((e) => {
                                (y && C.isOpened && C.close(), S(e));
                            }),
                        }),
                        I = (0, v.c)((e) => {
                            (E({ to: m.AppScreen.ArtistScreen }), null == T || T(), B(e));
                        });
                    return a && !t.various
                        ? (0, i.jsx)(g.N, {
                              'aria-label': N({ id: 'entity-names.artist-name' }, { artistName: t.name }),
                              className: n,
                              href: t.url,
                              onClick: I,
                              title: c ? void 0 : d || t.name,
                              'data-test-id': p.OA.artists.SEPARATED_ARTIST_TITLE,
                              children: (0, i.jsx)(o.m_, {
                                  enabled: !d && c,
                                  offsetOptions: 4,
                                  placement: 'top',
                                  text: d || t.name,
                                  hoverSettings: u,
                                  children: (0, i.jsx)(h.HL, { variant: 'span', type: 'entity', size: s, weight: 'medium', className: r, children: t.name }),
                              }),
                          })
                        : (0, i.jsx)(o.m_, {
                              enabled: !d && c,
                              offsetOptions: 4,
                              placement: 'top',
                              text: d || t.name,
                              hoverSettings: u,
                              children: (0, i.jsx)(h.HL, {
                                  variant: 'span',
                                  type: 'entity',
                                  size: s,
                                  weight: 'medium',
                                  className: r,
                                  title: c ? void 0 : d || t.name,
                                  'data-test-id': p.OA.artists.SEPARATED_ARTIST_TITLE,
                                  children: t.name,
                              }),
                          });
                }),
                C = (e) => {
                    let {
                            artist: t,
                            withLink: a = !0,
                            linkClassName: n,
                            captionClassName: r,
                            captionSize: o,
                            allArtistsTitle: l,
                            withCustomTooltip: d,
                            hoverSettings: c,
                            shouldUseSeparator: u = !0,
                        } = e,
                        _ = (0, s.useMemo)(() => {
                            var e;
                            return null == (e = t.decomposed)
                                ? void 0
                                : e.reduce(
                                      (e, t) =>
                                          e.concat([
                                              u ? t.separator : '',
                                              (0, i.jsx)(
                                                  N,
                                                  {
                                                      artist: t,
                                                      withLink: a,
                                                      linkClassName: n,
                                                      captionClassName: r,
                                                      captionSize: o,
                                                      allArtistsTitle: l,
                                                      withCustomTooltip: d,
                                                      hoverSettings: c,
                                                  },
                                                  t.id,
                                              ),
                                          ]),
                                      [],
                                  );
                        }, [t.decomposed, u, a, n, r, o, l, d, c]);
                    return (0, i.jsxs)(i.Fragment, {
                        children: [
                            (0, i.jsx)(N, {
                                artist: t,
                                withLink: a,
                                linkClassName: n,
                                captionClassName: r,
                                captionSize: o,
                                allArtistsTitle: l,
                                withCustomTooltip: d,
                                hoverSettings: c,
                            }),
                            _,
                        ],
                    });
                };
            var y = a(39407),
                S = a(63887);
            let T = (e) => {
                let { spoilerArtistsCount: t, spoilerClassName: a, handleOnSpoilerClick: r } = e;
                return (0, i.jsxs)(i.Fragment, {
                    children: [
                        ' ',
                        (0, i.jsx)(S.N, {
                            role: 'button',
                            href: '',
                            className: (0, n.$)(u().spoiler, a),
                            onClick: r,
                            rel: 'nofollow',
                            'data-test-id': p.OA.artists.SEPARATED_ARTISTS_SPOILER,
                            children: (0, i.jsx)(y.A, { id: 'entity-names.number-of-more-artists', values: { counter: t } }),
                        }),
                    ],
                });
            };
            var E = a(8055),
                B = a(6752),
                I = a(78035),
                j = a(78176),
                P = a(83598),
                k = a.n(P);
            let w = (0, r.PA)((e) => {
                    let { label: t, artists: a, forwardRef: n } = e;
                    return (0, i.jsxs)(o.m_, {
                        enableAriaDescribedby: !1,
                        isFocusEnabled: !1,
                        placement: 'top',
                        hoverSettings: { delay: 200, handleClose: (0, I.safePolygon)({ blockPointerEvents: !0 }) },
                        children: [
                            (0, i.jsx)('div', { ref: n, children: t }),
                            (0, i.jsx)(o.ZI, { className: k().tooltipContent, children: a.map((e) => (0, i.jsx)(j.V, { artist: e, className: k().artistItem }, e.id)) }),
                        ],
                    });
                }),
                L = (0, s.forwardRef)((e, t) => (0, i.jsx)(w, { forwardRef: t, ...e }));
            var D = a(19740),
                O = a(52598),
                R = a.n(O);
            let M = (0, r.PA)((e) => {
                    let { label: t, artists: a } = e,
                        { formatMessage: r } = (0, _.A)();
                    return (0, i.jsx)(D.W1, {
                        isMobile: !0,
                        className: (0, n.$)(R().root, R().important),
                        label: t,
                        ariaLabel: r({ id: 'interface-actions.context-menu-artists' }),
                        children: a.map((e) => (0, i.jsx)(j.V, { artist: e }, e.id)),
                    });
                }),
                F = (0, r.PA)((e) => {
                    let { artists: t = [], label: a, labelRef: n } = e,
                        [r, o] = (0, s.useState)(!1),
                        {
                            settings: { isMobile: d },
                        } = (0, l.g)(),
                        c = (0, v.c)(() => {
                            let e = n.current;
                            e && o(e.scrollHeight > e.clientHeight || e.scrollWidth > e.clientWidth);
                        }),
                        u = (0, B.L)(() =>
                            (0, E.A)(() => {
                                c();
                            }, 100),
                        );
                    if (
                        ((0, s.useEffect)(
                            () => (
                                window.addEventListener('resize', u),
                                c(),
                                () => {
                                    window.removeEventListener('resize', u);
                                }
                            ),
                            [u, c],
                        ),
                        (0, s.useEffect)(() => {
                            c();
                        }, [t, c]),
                        0 !== t.length)
                    )
                        return (r || d) && (!d || 1 !== t.length) ? (d ? (0, i.jsx)(M, { artists: t, label: a }) : (0, i.jsx)(L, { artists: t, label: a })) : a;
                }),
                U = (0, r.PA)((e) => {
                    let {
                            className: t,
                            artists: a = [],
                            separator: r = ', ',
                            lineClamp: c,
                            visibleArtistsCount: _,
                            withLink: m = !0,
                            spoilerClassName: p,
                            linkClassName: v,
                            captionClassName: h,
                            captionSize: b,
                            variant: x = 'breakAll',
                            withAllArtistsTitle: f = !0,
                            withComposer: g = !0,
                            spoilerComponent: A,
                            withCustomTooltip: N = !0,
                            artistIdWithoutLink: y,
                            withContextMenu: S,
                        } = e,
                        E = (0, s.useRef)(null),
                        [B, I] = (0, s.useState)(!1),
                        j = f
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
                                  .join(r)
                            : '',
                        {
                            settings: { isMobile: P },
                        } = (0, l.g)(),
                        k = 1 === a.length,
                        w = (0, s.useCallback)((e) => {
                            (I(!0), e.preventDefault());
                        }, []),
                        L = (0, s.useMemo)(() => {
                            let e = a;
                            return (
                                _ && !B && (e = a.slice(0, _)),
                                e.reduce((e, t) => {
                                    if (!g && t.isComposer) return e.length ? e : [];
                                    let a = (0, i.jsx)(
                                        C,
                                        {
                                            artist: t,
                                            linkClassName: v,
                                            captionClassName: h,
                                            withLink: m && t.id !== y && (((!P || k) && S) || !S),
                                            captionSize: b,
                                            allArtistsTitle: j,
                                            withCustomTooltip: N,
                                            hoverSettings: d.V,
                                            shouldUseSeparator: !!r,
                                        },
                                        t.key,
                                    );
                                    return e.length ? e.concat([r, a]) : [a];
                                }, [])
                            );
                        }, [a, _, B, g, P, k, S, v, h, m, y, b, j, N, r]),
                        D = (0, s.useMemo)(() => {
                            if (!B && _ && _ < a.length) {
                                let e = a.length - _;
                                return (0, s.isValidElement)(A) ? A : (0, i.jsx)(T, { spoilerClassName: p, spoilerArtistsCount: e, handleOnSpoilerClick: w });
                            }
                        }, [a.length, w, B, p, A, _]),
                        O = (0, s.useMemo)(() => {
                            if (c) return { WebkitLineClamp: c };
                        }, [c]),
                        R = (0, i.jsx)(o.m_, {
                            referenceRef: E,
                            enabled: !!(f && j) && N && !S && !P,
                            offsetOptions: 4,
                            placement: 'top',
                            text: j,
                            hoverSettings: d.V,
                            children: (0, i.jsxs)('div', {
                                style: O,
                                className: (0, n.$)(u().root, u()['root_variant_'.concat(x)], { [u().root_clamp]: c && c > 0 }, { [u().ellipsis]: !c }, t),
                                title: f && j && !N && !S ? j : void 0,
                                children: [L, D],
                            }),
                        });
                    return S ? (0, i.jsx)(F, { labelRef: E, artists: a, label: R }) : R;
                });
        },
        41932: (e, t, a) => {
            'use strict';
            a.d(t, { v: () => f });
            var i = a(32290),
                n = a(63618),
                r = a(55178),
                s = a(60900),
                o = a(21732),
                l = a(91027),
                d = a(6752),
                c = a(378),
                u = a(78305),
                _ = a(52843),
                m = a(22191),
                p = a(44128),
                v = a(57594),
                h = a(20136),
                b = a.n(h),
                x = a(12623);
            let f = (e) => {
                var t, a, h, f;
                let {
                        className: g,
                        sliderClassName: A,
                        disabled: N,
                        isFullscreen: C,
                        isMobile: y,
                        showThumbVariant: S,
                        withTimecode: T = !0,
                        sonataPlaybackId: E,
                        customDuration: B,
                        canMoveForward: I,
                    } = e,
                    j = (0, p.e)(),
                    P = (C || !y) && T,
                    k = (0, r.useRef)(!1),
                    { sonataState: w } = (0, v.g)(),
                    [L, D] = (0, r.useState)(null != (h = w.position) ? h : 0),
                    [O, R] = (0, r.useState)(null != (f = w.duration) ? f : 0),
                    [M, F] = (0, r.useState)(0),
                    { formatMessage: U } = (0, s.A)(),
                    { advert: z } = (0, v.g)(),
                    W = (0, u.r)(),
                    V = L && O ? (100 * Math.min(L, O)) / O : 0,
                    H = null == j ? void 0 : j.getState(E),
                    K = (0, m.P)(L),
                    G = (0, _.E)(Math.round(L), Math.round(O)),
                    $ = (0, m.P)(O),
                    Y = B && L > B,
                    q = (0, l.c)((e, t) => {
                        z.isAdvertShown || ((k.current = !t), t ? null == j || j.setProgress(e, E) : D(e));
                    });
                (0, r.useEffect)(() => {
                    Y && (I ? null == j || j.moveForward(E) : (null == j || j.moveBackward(E), null == j || j.pause(E)));
                }, [I, Y, j, E]);
                let Z = (0, r.useCallback)(
                    (e) => {
                        e &&
                            (e.duration === 1 / 0
                                ? (R(0), D(0), F(0))
                                : (R(B && !z.isAdvertShown ? B : e.duration), D((t) => (k.current ? t : e.position)), F(e.loaded)));
                    },
                    [B, z.isAdvertShown],
                );
                (0, r.useEffect)(() => {
                    var e, t;
                    let a = null == W || null == (e = W.audioAdvertPlayback) ? void 0 : e.state.playerState.progress.onChange(Z),
                        i = null == H || null == (t = H.playerState) ? void 0 : t.progress.onChange(Z);
                    return () => {
                        (null == i || i(), null == a || a());
                    };
                }, [
                    null == W || null == (t = W.audioAdvertPlayback) ? void 0 : t.state.playerState.progress,
                    Z,
                    null == H || null == (a = H.playerState) ? void 0 : a.progress,
                ]);
                let X = (0, d.L)(() => {
                    if (0 !== O) return B && B <= O ? Math.round(B) : Math.round(O);
                });
                return (0, i.jsxs)('div', {
                    className: (0, n.$)(b().root, { [b().root_fullscreen]: C, [b().root_mobile]: y, [b().root_withTimecode]: T }, g),
                    style: { '--track-progress': ''.concat(V, '%') },
                    'data-test-id': o.Kq.changeTimecode.TIMECODE_WRAPPER,
                    children: [
                        P && (0, i.jsx)(x.d, { role: 'text', 'aria-label': K, value: G, variant: 'start', className: b().timecode }),
                        (0, i.jsx)(c.A, {
                            'aria-valuetext': K,
                            className: (0, n.$)(b().slider, { [b()['slider_thumbSize_'.concat(y ? 'xs' : 'm')]]: !0 }, A),
                            disabled: N,
                            thumbSize: y ? 'xs' : 's',
                            trackSize: y ? 'xs' : 's',
                            value: Math.round(L),
                            mode: 'deferred',
                            secondaryValue: Math.round(M),
                            maxValue: X,
                            onChange: q,
                            'aria-label': U({ id: 'player-actions.timecode-control' }),
                            showThumbVariant: S,
                            'data-test-id': o.Kq.changeTimecode.TIMECODE_SLIDER,
                        }),
                        P && (0, i.jsx)(x.d, { role: 'text', 'aria-label': $, value: (0, _.E)(Math.round(O), Math.round(O)), variant: 'end', className: b().timecode }),
                    ],
                });
            };
        },
        42498: (e) => {
            e.exports = { root: 'PlayerBar_root__cXUnU', adPopup: 'PlayerBar_adPopup__BrBC6' };
        },
        43334: (e) => {
            e.exports = {
                root: 'NavbarDesktopAnimatedDownloadBarEnlarged_root__5lnM0',
                closeButton: 'NavbarDesktopAnimatedDownloadBarEnlarged_closeButton__MSz9j',
                text: 'NavbarDesktopAnimatedDownloadBarEnlarged_text__fT36E',
                downloadButtonText: 'NavbarDesktopAnimatedDownloadBarEnlarged_downloadButtonText__3GqKa',
                textBright: 'NavbarDesktopAnimatedDownloadBarEnlarged_textBright__JA1nf',
                closeButtonIcon: 'NavbarDesktopAnimatedDownloadBarEnlarged_closeButtonIcon___xaoS',
                downloadButtonIcon: 'NavbarDesktopAnimatedDownloadBarEnlarged_downloadButtonIcon__oE_rc',
            };
        },
        43352: (e, t, a) => {
            'use strict';
            a.d(t, { Z: () => r });
            var i = a(75314),
                n = a(14257);
            let r = (e) => {
                (document.body.classList.remove(...Object.values(i.o)), e && Object.values(n.S).includes(e) && document.body.classList.add(i.o[e]));
            };
        },
        44482: (e) => {
            e.exports = {
                root: 'NotificationReloadPrefetchedRequests_root__90_4R',
                important: 'NotificationReloadPrefetchedRequests_important__ews9K',
                text: 'NotificationReloadPrefetchedRequests_text__oXCop',
                icon: 'NotificationReloadPrefetchedRequests_icon__Pg1_X',
                button: 'NotificationReloadPrefetchedRequests_button__lSehi',
                message: 'NotificationReloadPrefetchedRequests_message__i9Tx6',
            };
        },
        44989: (e, t, a) => {
            'use strict';
            a.d(t, { e: () => l });
            var i,
                n = a(55178),
                r = {
                    810: (e) => {
                        e.exports = i || (i = a.t(n, 2));
                    },
                },
                s = {},
                o = {};
            ((() => {
                (Object.defineProperty(o, '__esModule', { value: !0 }), (o.useToggle = void 0));
                let e = (function e(t) {
                    var a = s[t];
                    if (void 0 !== a) return a.exports;
                    var i = (s[t] = { exports: {} });
                    return (r[t](i, i.exports, e), i.exports);
                })(810);
                o.useToggle = (t) => {
                    let [a, i] = (0, e.useState)(t);
                    (0, e.useEffect)(() => {
                        i(t);
                    }, [t]);
                    let n = (0, e.useCallback)(() => {
                            i((e) => !e);
                        }, []),
                        r = (0, e.useCallback)(() => {
                            i(!0);
                        }, []),
                        s = (0, e.useCallback)(() => {
                            i(!1);
                        }, []);
                    return { state: a, toggle: n, setState: i, toggleTrue: r, toggleFalse: s };
                };
            })(),
                o.__esModule);
            var l = o.useToggle;
        },
        45031: (e) => {
            e.exports = {
                root: 'BaseSonataControlsDesktop_root__E6wjA',
                sonataButtons: 'BaseSonataControlsDesktop_sonataButtons__7vLtw',
                sonataButton: 'BaseSonataControlsDesktop_sonataButton__GbwFt',
                playButtonIcon: 'BaseSonataControlsDesktop_playButtonIcon__TlFqv',
                buttonContainer: 'BaseSonataControlsDesktop_buttonContainer__EB404',
            };
        },
        46151: (e, t, a) => {
            'use strict';
            a.d(t, { d: () => n, w: () => r });
            var i = a(55178);
            let n = (0, i.createContext)({ config: [], isOnboardingOpened: null, setIsOnboardingOpened: () => {} }),
                r = () => (0, i.useContext)(n);
        },
        48736: (e) => {
            e.exports = { root: 'TooltipWithTitle_root__7jLY3', text: 'TooltipWithTitle_text__ElBtq', description: 'TooltipWithTitle_description__HsGcR' };
        },
        48955: (e, t, a) => {
            'use strict';
            a.d(t, { b: () => h });
            var i = a(32290),
                n = a(63618),
                r = a(96103),
                s = a(55178),
                o = a(39407),
                l = a(63423),
                d = a(50162),
                c = a(71926),
                u = a(78305),
                _ = a(57594),
                m = a(61258),
                p = a(20669),
                v = a.n(p);
            let h = (0, r.PA)((e) => {
                let { className: t, data: a, mediaContent: r, linkClassName: p } = e,
                    {
                        settings: { isMobile: h },
                    } = (0, _.g)(),
                    b = (0, u.r)(),
                    x = (0, s.useMemo)(
                        () =>
                            (null == b ? void 0 : b.state.clickThrough)
                                ? (0, i.jsx)(l.$, {
                                      className: (0, n.$)(v().button, p),
                                      variant: 'default',
                                      radius: 'xxxl',
                                      onClick: b.state.clickThrough,
                                      children: (0, i.jsx)(o.A, { id: 'ads.learn-more' }),
                                  })
                                : (null == a ? void 0 : a.clickThroughUrl)
                                  ? (0, i.jsx)(m.N, {
                                        target: '_blank',
                                        href: a.clickThroughUrl,
                                        className: (0, n.$)(v().button, v().linkButton, p),
                                        children: (0, i.jsx)(o.A, { id: 'ads.learn-more' }),
                                    })
                                  : (0, i.jsx)(l.$, {
                                        className: (0, n.$)(v().button, p),
                                        variant: 'default',
                                        radius: 'xxxl',
                                        disabled: !0,
                                        children: (0, i.jsx)(o.A, { id: 'ads.learn-more' }),
                                    }),
                        [null == a ? void 0 : a.clickThroughUrl, null == b ? void 0 : b.state.clickThrough, p],
                    );
                return (0, i.jsxs)('div', {
                    className: (0, n.$)(v().root, t),
                    children: [
                        r,
                        (0, i.jsxs)('div', {
                            className: v().container,
                            children: [
                                (0, i.jsxs)('div', {
                                    className: v().info,
                                    children: [
                                        (0, i.jsx)(d._V, {
                                            className: v().favicon,
                                            withAspectRatio: !0,
                                            'aria-hidden': !0,
                                            fit: 'cover',
                                            src: (null == a ? void 0 : a.iconSrc) || '',
                                            alt: '',
                                            fallbackIconVariant: 'picture',
                                        }),
                                        (0, i.jsxs)('div', {
                                            className: v().text,
                                            children: [
                                                (0, i.jsx)(c.HL, {
                                                    variant: 'div',
                                                    type: 'text',
                                                    size: 'l',
                                                    weight: 'medium',
                                                    className: v().title,
                                                    lineClamp: h ? 5 : void 0,
                                                    children: null == a ? void 0 : a.adTitle,
                                                }),
                                                (0, i.jsx)(c.HL, {
                                                    variant: 'div',
                                                    type: 'text',
                                                    size: 'm',
                                                    weight: 'medium',
                                                    className: v().subtitle,
                                                    children: (0, i.jsx)(o.A, { id: 'ads.ad' }),
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                                (0, i.jsx)('div', { className: v().buttonContainer, children: x }),
                            ],
                        }),
                    ],
                });
            });
        },
        49388: (e) => {
            e.exports = {
                root: 'Content_root__IsH8s',
                root_newVibe: 'Content_root_newVibe__5S1qr',
                main: 'Content_main__8_wIa',
                main_newVibe: 'Content_main_newVibe__tfCx9',
                sideBanner_newVibe: 'Content_sideBanner_newVibe__VpnTX',
                sideBanner: 'Content_sideBanner__Na07D',
                adContainer: 'Content_adContainer__4t8fj',
                adBanner: 'Content_adBanner__hxXvf',
                withBrandedBanner: 'Content_withBrandedBanner__ipwOK',
            };
        },
        50918: (e) => {
            e.exports = {
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
        54578: (e, t, a) => {
            'use strict';
            a.d(t, { c: () => o });
            var i = {
                    5881: (e, t, a) => {
                        function i() {
                            for (var e, t, a = 0, i = ''; a < arguments.length;)
                                (e = arguments[a++]) &&
                                    (t = (function e(t) {
                                        var a,
                                            i,
                                            n = '';
                                        if ('string' == typeof t || 'number' == typeof t) n += t;
                                        else if ('object' == typeof t)
                                            if (Array.isArray(t)) for (a = 0; a < t.length; a++) t[a] && (i = e(t[a])) && (n && (n += ' '), (n += i));
                                            else for (a in t) t[a] && (n && (n += ' '), (n += a));
                                        return n;
                                    })(e)) &&
                                    (i && (i += ' '), (i += t));
                            return i;
                        }
                        (a.r(t), a.d(t, { clsx: () => i, default: () => n }));
                        let n = i;
                    },
                    6927: (e, t, a) => {
                        (a.r(t), a.d(t, { default: () => i }));
                        let i = { root: 'sLuudThzDxW_5ARYjgjx', horizontal: 'xd6ji7lvp0et4nirt0TL', hasLabel: 'abbPp8VtL2D_PdW0Q_Wc', vertical: 'sMz62rSqViFDkXAMfGeO' };
                    },
                    9097: (e, t) => {
                        var a = Symbol.for('react.transitional.element');
                        function i(e, t, i) {
                            var n = null;
                            if ((void 0 !== i && (n = '' + i), void 0 !== t.key && (n = '' + t.key), 'key' in t))
                                for (var r in ((i = {}), t)) 'key' !== r && (i[r] = t[r]);
                            else i = t;
                            return { $$typeof: a, type: e, key: n, ref: void 0 !== (t = i.ref) ? t : null, props: i };
                        }
                        ((t.Fragment = Symbol.for('react.fragment')), (t.jsx = i), (t.jsxs = i));
                    },
                    4377: (e, t, a) => {
                        e.exports = a(9097);
                    },
                    9791: function (e, t, a) {
                        var i =
                            (this && this.__importDefault) ||
                            function (e) {
                                return e && e.__esModule ? e : { default: e };
                            };
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.Divider = void 0));
                        let n = a(4377),
                            r = a(5881),
                            s = i(a(6927));
                        t.Divider = (e) => {
                            let { className: t, orientation: a = 'horizontal', children: i, ...o } = e,
                                l = i && (0, n.jsx)('span', { children: i });
                            return (0, n.jsx)('div', {
                                className: (0, r.clsx)(s.default.root, { [s.default[a]]: a, [s.default.hasLabel]: l }, t),
                                ...o,
                                role: 'separator',
                                'aria-orientation': a,
                                children: l,
                            });
                        };
                    },
                },
                n = {};
            function r(e) {
                var t = n[e];
                if (void 0 !== t) return t.exports;
                var a = (n[e] = { exports: {} });
                return (i[e].call(a.exports, a, a.exports, r), a.exports);
            }
            ((r.d = (e, t) => {
                for (var a in t) r.o(t, a) && !r.o(e, a) && Object.defineProperty(e, a, { enumerable: !0, get: t[a] });
            }),
                (r.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
                (r.r = (e) => {
                    ('undefined' != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
                        Object.defineProperty(e, '__esModule', { value: !0 }));
                }));
            var s = {};
            (() => {
                (Object.defineProperty(s, '__esModule', { value: !0 }), (s.Divider = void 0));
                var e = r(9791);
                Object.defineProperty(s, 'Divider', {
                    enumerable: !0,
                    get: function () {
                        return e.Divider;
                    },
                });
            })();
            var o = s.Divider;
            s.__esModule;
        },
        54773: (e) => {
            e.exports = {
                root: 'NavbarDesktopAnimatedBar_root__tTyvO',
                bar: 'NavbarDesktopAnimatedBar_bar__Wge_o',
                bar_enter: 'NavbarDesktopAnimatedBar_bar_enter__pUWOV',
                bar_enter_active: 'NavbarDesktopAnimatedBar_bar_enter_active__cYAzl',
                animation_show: 'NavbarDesktopAnimatedBar_animation_show__oAMq1',
                animation_scale: 'NavbarDesktopAnimatedBar_animation_scale__iOhup',
                bar_exit: 'NavbarDesktopAnimatedBar_bar_exit__Wq1AL',
                bar_exit_active: 'NavbarDesktopAnimatedBar_bar_exit_active__EZFDU',
                animation_hide: 'NavbarDesktopAnimatedBar_animation_hide__Eiu1e',
                animation_unscale: 'NavbarDesktopAnimatedBar_animation_unscale__gyZb6',
                button: 'NavbarDesktopAnimatedBar_button__T7n21',
                button_enter: 'NavbarDesktopAnimatedBar_button_enter__6v5a5',
                button_enter_active: 'NavbarDesktopAnimatedBar_button_enter_active__jZmtw',
                button_exit: 'NavbarDesktopAnimatedBar_button_exit__j8qXO',
                button_exit_active: 'NavbarDesktopAnimatedBar_button_exit_active__D5JJp',
            };
        },
        55165: (e) => {
            e.exports = {
                root: 'PlayerBarDesktopWithBackgroundProgressBar_root__bpmwN',
                important: 'PlayerBarDesktopWithBackgroundProgressBar_important__HzXrK',
                root_interactive: 'PlayerBarDesktopWithBackgroundProgressBar_root_interactive__GcrNw',
                ripple: 'PlayerBarDesktopWithBackgroundProgressBar_ripple__FcmrF',
                progressBar: 'PlayerBarDesktopWithBackgroundProgressBar_progressBar___Q6eK',
                slider: 'PlayerBarDesktopWithBackgroundProgressBar_slider__SezFn',
                thumb: 'PlayerBarDesktopWithBackgroundProgressBar_thumb__LHPFo',
                player: 'PlayerBarDesktopWithBackgroundProgressBar_player__ASKKs',
                playerBar: 'PlayerBarDesktopWithBackgroundProgressBar_playerBar__mp0p9',
                info: 'PlayerBarDesktopWithBackgroundProgressBar_info__YnvZ_',
                infoCard: 'PlayerBarDesktopWithBackgroundProgressBar_infoCard__i0cbW',
                coverContainer: 'PlayerBarDesktopWithBackgroundProgressBar_coverContainer__dkNCG',
                cover: 'PlayerBarDesktopWithBackgroundProgressBar_cover__MKmEt',
                description: 'PlayerBarDesktopWithBackgroundProgressBar_description__5jHke',
                artists: 'PlayerBarDesktopWithBackgroundProgressBar_artists__wKsF6',
                artistLink: 'PlayerBarDesktopWithBackgroundProgressBar_artistLink__l9Bk_',
                infoButtons: 'PlayerBarDesktopWithBackgroundProgressBar_infoButtons__OxPBy',
                sonata: 'PlayerBarDesktopWithBackgroundProgressBar_sonata__mGFb_',
                sonata_withReversedControls: 'PlayerBarDesktopWithBackgroundProgressBar_sonata_withReversedControls__9TjDN',
                meta: 'PlayerBarDesktopWithBackgroundProgressBar_meta__FhKTC',
                sonataControls: 'PlayerBarDesktopWithBackgroundProgressBar_sonataControls__rSmXQ',
                settingsButton: 'PlayerBarDesktopWithBackgroundProgressBar_settingsButton__HnCgK',
                trackContextMenuIcon: 'PlayerBarDesktopWithBackgroundProgressBar_trackContextMenuIcon__xBJxI',
                triggerModal: 'PlayerBarDesktopWithBackgroundProgressBar_triggerModal__EVv5d',
            };
        },
        55475: (e) => {
            e.exports = { root: 'PlusNavbarButton_root__kdY04', plusButtonShimmer: 'PlusNavbarButton_plusButtonShimmer__6t1go' };
        },
        55985: (e, t, a) => {
            'use strict';
            a.d(t, { p: () => n });
            var i = a(60754);
            let n = (e) => (0, i.wg)({ uri: e.uri, color: e.color });
        },
        56008: (e, t, a) => {
            'use strict';
            a.d(t, { H: () => i });
            let i = (0, a(55178).createContext)({ pageAlbumId: void 0 });
        },
        56267: (e) => {
            e.exports = {
                root: 'BrandedPlayerModal_root__hejJx',
                modalContent: 'BrandedPlayerModal_modalContent__xcXKK',
                image: 'BrandedPlayerModal_image__paBEA',
                closeButton: 'BrandedPlayerModal_closeButton__W3QRx',
                content: 'BrandedPlayerModal_content__b9e2P',
                actions: 'BrandedPlayerModal_actions__6aeD7',
                button: 'BrandedPlayerModal_button__WZTH7',
            };
        },
        56315: (e) => {
            e.exports = {
                root: 'SonataFullscreenControlsDesktop_root__ZCIGk',
                sonataButtons: 'SonataFullscreenControlsDesktop_sonataButtons__9y89g',
                sonataButton: 'SonataFullscreenControlsDesktop_sonataButton__69FFc',
                sonataPlayButton: 'SonataFullscreenControlsDesktop_sonataPlayButton__QXEEp',
                playPauseButtonIcon: 'SonataFullscreenControlsDesktop_playPauseButtonIcon__IkUNX',
                buttonContainer: 'SonataFullscreenControlsDesktop_buttonContainer__SpXWc',
            };
        },
        56367: (e, t, a) => {
            'use strict';
            a.d(t, { L: () => u });
            var i = a(32290),
                n = a(96103),
                r = a(55178),
                s = a(39407),
                o = a(21732),
                l = a(82586),
                d = a(19740),
                c = a(57594);
            let u = (0, n.PA)((e) => {
                let { isPinned: t, onClick: a, disabled: n, className: u } = e,
                    { user: _ } = (0, c.g)(),
                    m = t ? 'unpin' : 'pin',
                    p = t ? o.S7.CONTEXT_MENU_UNPIN_BUTTON : o.S7.CONTEXT_MENU_PIN_BUTTON,
                    v = (0, r.useMemo)(() => (t ? (0, i.jsx)(s.A, { id: 'interface-actions.unpin' }) : (0, i.jsx)(s.A, { id: 'interface-actions.pin' })), [t]);
                return (0, i.jsx)(d.Dr, {
                    className: u,
                    onClick: a,
                    icon: (0, i.jsx)(l.I, { variant: m, size: 'xxs' }),
                    'data-test-id': p,
                    disabled: n || !_.isAuthorized,
                    children: v,
                });
            });
        },
        58294: (e, t, a) => {
            'use strict';
            a.d(t, { B: () => g });
            var i = a(32290),
                n = a(63618),
                r = a(96103),
                s = a(55178),
                o = a(39407),
                l = a(21732),
                d = a(74924),
                c = a(82586),
                u = a(71926),
                _ = a(72676),
                m = a(90169),
                p = a(44128),
                v = a(57594),
                h = a(83557),
                b = a(66436),
                x = a(95082),
                f = a.n(x);
            let g = (0, r.PA)((e) => {
                var t, a, r, x, g, A, N, C, y;
                let { className: S, id: T, albumId: E, streamProgress: B, durationMs: I, playContextParams: j, withTimeLeftText: P = !0, isFinishedLabelHidden: k } = e,
                    w = (0, p.e)(),
                    { sonataState: L, album: D } = (0, v.g)(),
                    O = Math.floor(I / 1e3),
                    [R, M] = (0, s.useState)(!1),
                    F = (0, b.$)(),
                    { isPlaying: U, isCurrent: z } = (0, m.D)({ playContextParams: j, entityId: E ? ''.concat(T, ':').concat(E) : T });
                ((0, s.useEffect)(() => {
                    if (!z) return void M(!1);
                    let e =
                        null == w
                            ? void 0
                            : w.state.playerState.status.onChange(() => {
                                  (null == w ? void 0 : w.state.playerState.status.value) === _.MT.BUFFERING && M(!0);
                              });
                    return () => {
                        null == e || e();
                    };
                }, [w, B, z, U]),
                    (0, s.useEffect)(() => {
                        var e;
                        (null == D || null == (e = D.meta) ? void 0 : e.listeningFinished)
                            ? (B.updateEndPositionSec(0), B.updateEverFinished(!0))
                            : (null == D ? void 0 : D.allTracksUnfinished) && B.updateEverFinished(!1);
                    }, [B, null == D ? void 0 : D.allTracksUnfinished, null == D || null == (t = D.meta) ? void 0 : t.listeningFinished]),
                    (0, s.useEffect)(() => {
                        var e, t;
                        (z &&
                            (null == L || null == (e = L.entityMeta) ? void 0 : e.streamProgress) &&
                            B &&
                            L.entityMeta.streamProgress.hasEverFinished !== B.hasEverFinished &&
                            B.updateEverFinished(!!L.entityMeta.streamProgress.hasEverFinished),
                            O - ((null == B ? void 0 : B.endPositionSec) || 0) < 1 &&
                                ((null == L || null == (t = L.entityMeta) ? void 0 : t.streamProgress) &&
                                    z &&
                                    (L.entityMeta.streamProgress.updateEverFinished(!0), L.entityMeta.streamProgress.updateEndPositionSec(0)),
                                null == B || B.updateEverFinished(!0)));
                    }, [
                        z,
                        null == L || null == (a = L.entityMeta) ? void 0 : a.streamProgress,
                        null == L || null == (x = L.entityMeta) || null == (r = x.streamProgress) ? void 0 : r.hasEverFinished,
                        B,
                        B.hasEverFinished,
                        B.endPositionSec,
                        O,
                    ]),
                    (0, s.useEffect)(() => {
                        if (!z) return;
                        let e =
                            null == w
                                ? void 0
                                : w.state.playerState.progress.onChange(() => {
                                      var e;
                                      let t = w.state.playerState.progress.value,
                                          a = null == L || null == (e = L.entityMeta) ? void 0 : e.streamProgress;
                                      (0 !== t.position && R && B.updateEndPositionSec(t.position),
                                          z &&
                                              parseInt(''.concat(null == a ? void 0 : a.endPositionSec), 10) !== parseInt(''.concat(t.position), 10) &&
                                              (null == a || a.updateEndPositionSec(t.position)));
                                  });
                        return () => {
                            null == e || e();
                        };
                    }, [w, B, z, U, R, T, null == L ? void 0 : L.entityMeta]));
                let W = (z && (null == L || null == (A = L.entityMeta) || null == (g = A.streamProgress) ? void 0 : g.endPositionSec)) || B.endPositionSec,
                    V = (0, h.m)(null != W ? W : 0, O),
                    H = (0, s.useMemo)(() => {
                        var e, t, a;
                        if (
                            ((z && (null == L || null == (t = L.entityMeta) || null == (e = t.streamProgress) ? void 0 : e.hasEverFinished)) ||
                                (null == B ? void 0 : B.hasEverFinished) ||
                                (null == D || null == (a = D.meta) ? void 0 : a.listeningFinished)) &&
                            !k
                        )
                            return (0, i.jsxs)(i.Fragment, {
                                children: [
                                    (0, i.jsx)(u.HL, {
                                        lineClamp: 1,
                                        variant: 'div',
                                        className: (0, n.$)(f().text, { [f().text_withoutTimeLeft]: !P }),
                                        'data-test-id': l.OA.track.LISTENING_PROGRESS_FINISHED_TEXT,
                                        children: (0, i.jsx)(o.A, { id: 'time.finished' }),
                                    }),
                                    (0, i.jsx)(c.I, {
                                        size: 'xxs',
                                        variant: 'check',
                                        className: f().checkIcon,
                                        'data-test-id': l.OA.track.LISTENING_PROGRESS_FINISHED_ICON,
                                    }),
                                ],
                            });
                        if (!W || 0 === W) return;
                        let r = O - W,
                            s = F(r);
                        return (0, i.jsxs)(i.Fragment, {
                            children: [
                                (0, i.jsx)(u.HL, {
                                    lineClamp: 1,
                                    variant: 'div',
                                    className: (0, n.$)(f().text, { [f().text_withoutTimeLeft]: !P }),
                                    'data-test-id': l.OA.track.LISTENING_PROGRESS_TIMINGS_TEXT,
                                    children: s,
                                }),
                                r > 1 || k
                                    ? (0, i.jsx)(d.q, {
                                          'aria-valuetext': V,
                                          'aria-busy': z && U,
                                          value: W,
                                          max: O,
                                          'data-test-id': l.OA.track.LISTENING_PROGRESS_TIMINGS_PROGRESS,
                                      })
                                    : (0, i.jsx)(c.I, {
                                          size: 'xxs',
                                          variant: 'check',
                                          className: f().checkIcon,
                                          'data-test-id': l.OA.track.LISTENING_PROGRESS_TIMINGS_ICON,
                                      }),
                            ],
                        });
                    }, [
                        O,
                        null == B ? void 0 : B.hasEverFinished,
                        P,
                        F,
                        z,
                        U,
                        null == L || null == (C = L.entityMeta) || null == (N = C.streamProgress) ? void 0 : N.hasEverFinished,
                        null == D || null == (y = D.meta) ? void 0 : y.listeningFinished,
                        k,
                        W,
                        V,
                    ]);
                return (0, i.jsx)('div', { className: (0, n.$)(f().root, S), 'data-test-id': l.OA.track.LISTENING_PROGRESS, children: H });
            });
        },
        59518: (e, t, a) => {
            'use strict';
            a.d(t, { h: () => i });
            var i = (function (e) {
                return ((e.ARTIST_DONATION_BUTTON = 'artist_donation_button'), (e.TRAILER_BUTTON = 'trailer_button'), (e.CONCERTS_TAB = 'concerts_tab'), e);
            })({});
        },
        59564: (e, t, a) => {
            'use strict';
            a.d(t, { s: () => _ });
            var i = a(55178),
                n = a(91027);
            let r = null,
                s = [],
                o = function () {
                    for (var e = arguments.length, t = Array(e), a = 0; a < e; a++) t[a] = arguments[a];
                    if (null === r)
                        return void s.push((e) => {
                            e.context.AdvManager.render(...t);
                        });
                    r.context.AdvManager.render(...t);
                },
                l = function () {
                    for (var e, t = arguments.length, a = Array(t), i = 0; i < t; i++) a[i] = arguments[i];
                    let [n, ...o] = a;
                    if (null === r)
                        return void s.push((e) => {
                            var t;
                            e.code.create({ cspNonce: null != (t = null == r ? void 0 : r.cspNonce) ? t : void 0, ...n }, ...o);
                        });
                    r.code.create({ cspNonce: null != (e = r.cspNonce) ? e : void 0, ...n }, ...o);
                },
                d = function () {
                    for (var e = arguments.length, t = Array(e), a = 0; a < e; a++) t[a] = arguments[a];
                    if (null === r)
                        return void s.push((e) => {
                            e.code.reload(...t);
                        });
                    r.code.reload(...t);
                },
                c = function () {
                    for (var e = arguments.length, t = Array(e), a = 0; a < e; a++) t[a] = arguments[a];
                    if (null === r)
                        return void s.push((e) => {
                            e.code.destroy(...t);
                        });
                    r.code.destroy(...t);
                },
                u = function () {
                    for (var e = arguments.length, t = Array(e), a = 0; a < e; a++) t[a] = arguments[a];
                    if (null === r)
                        return void s.push((e) => {
                            e.code.initialize(...t);
                        });
                    r.code.initialize(...t);
                },
                _ = () => {
                    let [e, t] = (0, i.useState)(null !== r),
                        a = (0, n.c)((a) => {
                            var i, n, o;
                            let { cspNonce: l } = a;
                            void 0 === (null == (i = window) ? void 0 : i.Ya.Context) ||
                                void 0 === (null == (n = window) ? void 0 : n.Ya.adfoxCode) ||
                                e ||
                                ((window.yaContextCb = window.yaContextCb || []),
                                (r = { context: window.Ya.Context, code: window.Ya.adfoxCode, cspNonce: l }),
                                t(!0),
                                (o = r),
                                s.forEach((e) => {
                                    e(o);
                                }),
                                (s = []));
                        });
                    return { isLoaded: e, init: a, render: o, create: l, reload: d, destroy: c, initialize: u };
                };
        },
        60244: (e, t, a) => {
            'use strict';
            a.d(t, { k: () => c });
            var i = a(32290),
                n = a(21732),
                r = a(70280),
                s = a(71926),
                o = a(48736),
                l = a.n(o);
            let d = { padding: 8 },
                c = (e) => {
                    let { description: t, enabled: a, title: o, placement: c = 'top', children: u } = e;
                    return (0, i.jsxs)(r.m_, {
                        enabled: a,
                        offsetOptions: 4,
                        shiftOptions: d,
                        flipOptions: d,
                        placement: c,
                        children: [
                            u,
                            (0, i.jsx)(r.ZI, {
                                className: l().root,
                                'data-test-id': n.S7.TOOLTIP_WITH_TITLE,
                                children: (0, i.jsxs)('div', {
                                    className: l().text,
                                    children: [
                                        o && (0, i.jsx)(s.HL, { variant: 'span', type: 'text', size: 's', weight: 'bold', children: o }),
                                        (0, i.jsx)(s.HL, { variant: 'span', type: 'text', size: 's', weight: 'normal', className: l().description, children: t }),
                                    ],
                                }),
                            }),
                        ],
                    });
                };
        },
        60425: (e, t, a) => {
            'use strict';
            a.d(t, { A: () => x });
            var i = a(32290),
                n = a(96103),
                r = a(55178),
                s = a(91027),
                o = a(19337),
                l = a(26749),
                d = a(57594),
                c = a(50),
                u = a(88763),
                _ = a(14257);
            let m = (e, t) => (t === _.S.Dark ? Math.floor(0.8 * e) : Math.min(255, Math.floor(e + (255 - e) * 0.3))),
                p = (e) => e.toString(16).padStart(2, '0');
            var v = a(7050),
                h = a(1757);
            let b = (e) =>
                    (0, v.m)(e) &&
                    (e.type === h.k.PLAYLIST_GRADIENT || e.type === h.k.AXE_GRADIENT) &&
                    'object' == typeof e.payload &&
                    null !== e.payload &&
                    !Array.isArray(e.payload) &&
                    'color' in e.payload,
                x = (0, n.PA)((e) => {
                    let { children: t, containerId: a, expectedType: n } = e,
                        {
                            advertBanners: {
                                banners: { brandedPlaylistBanner: _, brandedEntityAxeBanner: v },
                            },
                        } = (0, d.g)(),
                        { theme: x } = (0, c.W)(),
                        f = (0, r.useContext)(u.G),
                        [g, A] = (0, r.useState)(null),
                        N = (0, s.c)((e) => {
                            (0, o.f)(e, a, b) && e.data.type === n && A(e.data);
                        });
                    (0, r.useEffect)(
                        () => (
                            window.addEventListener('message', N),
                            () => {
                                window.removeEventListener('message', N);
                            }
                        ),
                        [N],
                    );
                    let C = n === h.k.PLAYLIST_GRADIENT && _.isVisible && _.type !== l.h.EMPTY,
                        y = n === h.k.AXE_GRADIENT && v.isVisible && v.type !== l.h.EMPTY,
                        S = C || y,
                        T = (0, r.useMemo)(() => {
                            if ((null == g ? void 0 : g.payload.color) === void 0) return {};
                            let e = {
                                '--entity-branding-gradient-color-from':
                                    v.isVisible && v.type !== l.h.EMPTY && x
                                        ? ((e, t) => {
                                              let a = e.replace('#', '');
                                              if (
                                                  (3 === a.length &&
                                                      (a = a
                                                          .split('')
                                                          .map((e) => e + e)
                                                          .join('')),
                                                  6 !== a.length)
                                              )
                                                  return e;
                                              let i = parseInt(a.substring(0, 2), 16),
                                                  n = parseInt(a.substring(2, 4), 16),
                                                  r = parseInt(a.substring(4, 6), 16),
                                                  s = m(i, t),
                                                  o = m(n, t),
                                                  l = m(r, t);
                                              return '#'.concat(p(s)).concat(p(o)).concat(p(l));
                                          })(g.payload.color, x)
                                        : g.payload.color,
                                '--entity-branding-gradient-color-to': 'transparent',
                            };
                            return null === g.payload.button
                                ? e
                                : {
                                      ...e,
                                      '--entity-branding-button-background-color': g.payload.button.backgroundColor,
                                      '--entity-branding-button-text-color': g.payload.button.textColor,
                                  };
                        }, [null == g ? void 0 : g.payload.color, null == g ? void 0 : g.payload.button, x, v.isVisible, v.type]),
                        E = (0, r.useMemo)(() => (S && null !== g ? { data: { type: g.type, style: T, button: g.payload.button }, isEnabled: S } : f), [g, T, S, f]);
                    return (0, i.jsx)(u.G.Provider, { value: E, children: t });
                });
        },
        61251: (e) => {
            e.exports = {
                wrapper: 'RedAlert_wrapper__rGvGN',
                root: 'RedAlert_root__1VZOr',
                root_light: 'RedAlert_root_light__j7Kr3',
                text: 'RedAlert_text__UB_Bq',
                button: 'RedAlert_button__Ho43z',
            };
        },
        61334: (e, t, a) => {
            'use strict';
            a.d(t, { q: () => c });
            var i = a(21916),
                n = a(90432),
                r = a(91027),
                s = a(6752),
                o = a(67544),
                l = a(68243);
            let d = /[^\w\-./:?=&[\]%]/gi,
                c = (e) => {
                    let { browserInfo: t, login: a } = e,
                        c = (0, i.useSearchParams)(),
                        u = (0, s.L)(() => {
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
                    return (0, r.c)((e) =>
                        u && e
                            ? ((e, t, a) => {
                                  let i = e.get('deeplink_url'),
                                      r = e.get('channel'),
                                      s = e.get('tags'),
                                      o = { campaign: 'yamusicweb', channel: null != r ? r : 'musicmain', deep_link_value: t, af_dp: t };
                                  if ((a && (o.login = a), i)) {
                                      let e = ''.concat(n.ov).concat(i);
                                      ((o.deep_link_value = e), (o.af_dp = e), (o.deeplink_url = i));
                                  }
                                  s && (o.pid = s);
                                  let c = Object.keys(o).reduce((e, t) => {
                                          let a = o[t];
                                          if (void 0 !== a) {
                                              let i = ((e) => ('string' == typeof e ? e.replace(d, '') : ''))(a);
                                              i && (e[t] = i);
                                          }
                                          return e;
                                      }, {}),
                                      { href: u } = (0, l.u)('/', { query: c, options: { host: 'https://music.onelink.me/VkDa' } });
                                  return u;
                              })(c, e, a)
                            : ((e) => {
                                  if (e === o.j.IOS) {
                                      let { href: e } = (0, l.u)('/ru/app/andeks.muzyka/id520797969', {
                                          query: { mt: 8, uo: 4, at: '1000lqjf', ct: 'music' },
                                          options: { host: 'https://itunes.apple.com' },
                                      });
                                      return e;
                                  }
                                  if (e === o.j.ANDROID) {
                                      let { href: e } = (0, l.u)('/store/apps/details', {
                                          query: { id: 'ru.yandex.music' },
                                          options: { host: 'https://play.google.com' },
                                      });
                                      return e;
                                  }
                                  let { href: t } = (0, l.u)('/apps', { options: { host: 'https://music.yandex.ru' } });
                                  return t;
                              })(null == t ? void 0 : t.OSFamily),
                    );
                };
        },
        61748: (e, t, a) => {
            'use strict';
            a.d(t, { i: () => m });
            var i = a(32290),
                n = a(55178),
                r = a(60900),
                s = a(21732),
                o = a(91027),
                l = a(63423),
                d = a(82586),
                c = a(44128),
                u = a(8484);
            let _ = (e) => {
                    var t, a, _;
                    let {
                            className: m,
                            variant: p = 'text',
                            iconSize: v,
                            onClick: h,
                            iconClassName: b,
                            withRipple: x = !1,
                            size: f = 's',
                            forwardRef: g,
                            children: A,
                            color: N,
                            disabled: C = !1,
                            isIconCentered: y = !1,
                        } = e,
                        S = (0, c.e)(),
                        { formatMessage: T } = (0, r.A)(),
                        E = null != (t = null == S ? void 0 : S.state.playerState.speed.value) ? t : 1,
                        B = null != (a = u.f_[E]) ? a : 0,
                        [I, j] = (0, n.useState)(B),
                        P = null != (_ = u.pp[I]) ? _ : 1,
                        k = (0, o.c)(() => {
                            var e;
                            let t = (I + 1) % u.pp.length;
                            (j(t), null == S || S.setSpeed(Number(null != (e = u.pp[t]) ? e : 1)), null == h || h());
                        });
                    return (
                        (0, n.useEffect)(() => {
                            let e =
                                null == S
                                    ? void 0
                                    : S.state.playerState.speed.onChange(() => {
                                          var e;
                                          let t = S.state.playerState.speed.value;
                                          j(null != (e = u.f_[t]) ? e : 0);
                                      });
                            return () => {
                                null == e || e();
                            };
                        }, [S]),
                        (0, i.jsx)(l.$, {
                            className: m,
                            color: N,
                            withRipple: x,
                            variant: p,
                            size: f,
                            radius: 'xxxl',
                            'aria-label': T({ id: 'interface-actions.speed' }, { speed: P }),
                            onClick: k,
                            icon: (0, i.jsx)(d.I, { size: v, className: b, variant: (0, u.CU)(P, y) }),
                            ref: g,
                            disabled: C,
                            'data-test-id': s.S7.SPEED_BUTTON,
                            children: A,
                        })
                    );
                },
                m = (0, n.forwardRef)((e, t) => (0, i.jsx)(_, { forwardRef: t, ...e }));
        },
        63363: (e, t, a) => {
            'use strict';
            a.d(t, { K: () => x });
            var i = a(32290),
                n = a(60900),
                r = a(91027),
                s = a(67732),
                o = a(45477),
                l = a(75582),
                d = a(57594),
                c = a(90357),
                u = a(92708),
                _ = a(55178),
                m = a(63380),
                p = a(96103),
                v = a(97755),
                h = a(79238);
            let b = (0, p.PA)((e) => {
                    let { album: t, closeToast: a, withLink: n } = e,
                        r = (0, h.b)(t);
                    return (0, i.jsx)(v.O, {
                        closeToast: a,
                        entityVariant: r,
                        coverUri: t.coverUri,
                        entityUrl: t.url,
                        collectionUrl: '/collection',
                        entityTitle: t.title,
                        isLiked: t.isLiked,
                        withLink: n,
                    });
                }),
                x = (e) => {
                    let {
                            user: t,
                            paywall: a,
                            albumCPA: { isPlusCPAEnabled: p },
                        } = (0, d.g)(),
                        { formatMessage: v } = (0, n.A)(),
                        { notify: h } = (0, l.l)(),
                        x = (() => {
                            let { notify: e } = (0, l.l)(),
                                [t, a] = (0, _.useState)(!1),
                                { formatMessage: s } = (0, n.A)();
                            return (0, r.c)(async (n) => {
                                let { album: r, withLink: l = !0, withNotification: d = !0 } = n;
                                if (t) return;
                                let _ = { ...(0, u.HO)(r), url: r.url, isLiked: !r.isLiked };
                                a(!0);
                                let p = await r.toggleLike();
                                (a(!1),
                                    d &&
                                        (p === m.f.OK
                                            ? e((0, i.jsx)(b, { withLink: l, album: _ }), { containerId: o.u.INFO })
                                            : e((0, i.jsx)(c.h, { error: s({ id: 'error-messages.error-during-action' }) }), { containerId: o.u.ERROR })));
                            });
                        })(),
                        { pageAlbumId: f } = (0, s.T)();
                    return (0, r.c)(async () => {
                        if (e)
                            return p({ pageAlbumId: f, albumId: e.id, isNonMusic: e.isNonMusic })
                                ? void a.openModal()
                                : t.isAuthorized
                                  ? x({ album: e })
                                  : void h((0, i.jsx)(c.h, { error: v({ id: 'authorization-messages.need-to-authorizate' }) }), { containerId: o.u.ERROR });
                    });
                };
        },
        63919: (e) => {
            e.exports = { root: 'CustomPlayerThumb_root__hZTw6', container: 'CustomPlayerThumb_container__lBm2j' };
        },
        64089: (e, t, a) => {
            'use strict';
            a.d(t, { A: () => T });
            var i = a(32290),
                n = a(92708),
                r = a(55178),
                s = a(60900),
                o = a(90404),
                l = a(45477),
                d = a(75582),
                c = a(57594),
                u = a(90357),
                _ = a(63618),
                m = a(96103),
                p = a(21732),
                v = a(6752),
                h = a(50162),
                b = a(79406),
                x = a(8322),
                f = a(97647),
                g = a(8097),
                A = a(19529),
                N = a(38819),
                C = a.n(N);
            let y = (0, m.PA)((e) => {
                let { vibe: t, closeToast: a } = e,
                    { experiments: n } = (0, c.g)(),
                    r = n.checkExperiment(b.z.WebNextWaveAgentExperiment, 'on'),
                    s = t.type === x.q7,
                    o = (0, v.L)(() => {
                        var e;
                        return r && t.agent
                            ? (0, i.jsx)(A.n, {
                                  agent: t.agent,
                                  shouldShowControl: !1,
                                  className: (0, _.$)(C().view, { [C().multivibeContainer]: s }),
                                  coverClassName: (0, _.$)({ [C().multivibeCover]: s }),
                                  entityCoverClassName: (0, _.$)({ [C().multivibeAvatar]: s }),
                                  controlClassName: (0, _.$)({ [C().multivibeControl]: s }),
                              })
                            : (0, i.jsx)(h._V, {
                                  className: C().image,
                                  src: t.backgroundImageUrl,
                                  size: 100,
                                  fit: 'cover',
                                  withAvatarReplace: !0,
                                  'aria-hidden': !0,
                                  style: { backgroundColor: null == (e = t.colors) ? void 0 : e.average },
                                  withLoadingIndicator: !1,
                                  'data-test-id': p.S7.BASE_NOTIFICATION_PIN_VIBE_COVER,
                              });
                    }),
                    l = r && t.agent ? void 0 : 'round';
                return (0, i.jsx)(g.k, {
                    closeToast: a,
                    entityVariant: f.c.VIBE,
                    entityTitle: t.title,
                    entityDescription: t.getDescription(),
                    isPinned: t.isPinned,
                    customCover: o,
                    radius: l,
                    className: C().root,
                });
            });
            var S = a(20982);
            let T = (e) => {
                let { user: t, pinsCollection: a } = (0, c.g)(),
                    { notify: _ } = (0, d.l)(),
                    { formatMessage: m } = (0, s.A)(),
                    [p, v] = (0, r.useState)(!1);
                return (0, r.useCallback)(async () => {
                    if (!e) return;
                    if (!t.isAuthorized) return void _((0, i.jsx)(u.h, { error: m({ id: 'authorization-messages.need-to-authorizate' }) }), { containerId: l.u.ERROR });
                    if (p) return;
                    let r = { ...(0, n.HO)(e), isPinned: !e.isPinned, getDescription: e.getDescription },
                        s = a.get(e.pinId);
                    v(!0);
                    let d = await e.togglePin();
                    (v(!1),
                        s &&
                            s.type === o._.WAVE_ITEM &&
                            s.data.backgroundImageUrl &&
                            ((r.backgroundImageUrl = s.data.backgroundImageUrl), (r.colors = s.data.colors), (r.agent = s.data.agent)),
                        d &&
                            'object' == typeof d &&
                            'data' in d &&
                            (d.data.backgroundImageUrl && (r.backgroundImageUrl = d.data.backgroundImageUrl),
                            d.data.colors && (r.colors = { average: d.data.colors.average, waveText: d.data.colors.waveText }),
                            d.data.agent && (r.agent = (0, S.K)(d.data.agent))),
                        d
                            ? _((0, i.jsx)(y, { vibe: r }), { containerId: l.u.INFO })
                            : _((0, i.jsx)(u.h, { error: m({ id: 'error-messages.error-during-action' }) }), { containerId: l.u.ERROR }));
                }, [m, _, p, a, t.isAuthorized, e]);
            };
        },
        64170: (e, t, a) => {
            'use strict';
            a.d(t, { SomethingWentWrong: () => C });
            var i = a(32290),
                n = a(63618),
                r = a(96103),
                s = a(55178),
                o = a(60900),
                l = a(39407),
                d = a(63423),
                c = a(82586),
                u = a(71926),
                _ = a(17811),
                m = a(99923),
                p = a(90153),
                v = a(74416),
                h = a(62376),
                b = a(37240),
                x = a(83920),
                f = a(20472),
                g = a(12894),
                A = a(30310),
                N = a.n(A);
            let C = (0, r.PA)((e) => {
                let { className: t, withBackwardControl: a = !0 } = e,
                    { formatMessage: r } = (0, o.A)(),
                    A = r({ id: 'error-messages.something-went-wrong' });
                !(function (e) {
                    let t = (0, v.st)(),
                        { hash: a } = (0, v.gf)(),
                        { pageId: i } = (0, b.$)(),
                        n = (0, h.U)();
                    (0, s.useEffect)(() => {
                        if (!t || !a || !i) return;
                        let r = (0, _.F)({
                            params: {
                                entityType: m.EntityTypes.Error,
                                entityId: m.EntityTypes.SomethingWrong,
                                errorMessage: e,
                                hash: a,
                                pageId: i,
                                pageStyle: m.PageStyles.Fullscreen,
                                pagePlacement: m.PagePlacements.Fullscreen,
                                mainObjectType: m.DomainObjectType.NonApplicable,
                                mainObjectId: m.DomainObjectType.NonApplicable,
                            },
                            logger: n,
                            context: 'useSendEventOnSomethingWentWrongShowed',
                        });
                        r && (0, p.z5)(t.evgenInstance, r);
                    }, [t, e, a, i, n]);
                })(A);
                let { sendRefreshEvent: C } = (function () {
                        let e = (0, v.st)(),
                            { hash: t } = (0, v.gf)(),
                            { pageId: a } = (0, b.$)(),
                            i = (0, h.U)();
                        return {
                            sendRefreshEvent: (0, s.useCallback)(() => {
                                if (!e || !t || !a) return;
                                let n = (0, _.F)({
                                    params: {
                                        actionType: m.ActionType.Refresh,
                                        userInteractionType: m.UserInteractionType.Tap,
                                        entityType: m.EntityTypes.Error,
                                        entityId: m.EntityTypes.SomethingWrong,
                                        hash: t,
                                        pageId: a,
                                        pageStyle: m.PageStyles.Fullscreen,
                                        pagePlacement: m.PagePlacements.Fullscreen,
                                        mainObjectType: m.DomainObjectType.NonApplicable,
                                        mainObjectId: m.DomainObjectType.NonApplicable,
                                    },
                                    logger: i,
                                    context: 'useSendEventOnSomethingWentWrongRefreshed',
                                });
                                n && (0, p.bv)(e.evgenInstance, n);
                            }, [e, t, a, i]),
                        };
                    })(),
                    y = (0, s.useCallback)(() => {
                        (C(), (window.location.href = f.Z.main.href));
                    }, [C]),
                    { contentRef: S } = (0, x.g)();
                return (0, i.jsxs)('div', {
                    className: (0, n.$)(N().root, t),
                    children: [
                        a &&
                            (0, i.jsx)(g.L, { withBackwardFallback: '/', className: (0, n.$)(N().navigation, { [N().navigation_desktop]: !S }), withForwardControl: !1 }),
                        (0, i.jsxs)('div', {
                            className: (0, n.$)(N().content, { [N().content_shrink]: !a }),
                            children: [
                                (0, i.jsx)(c.I, { className: N().icon, variant: 'attention', size: 'xxl' }),
                                (0, i.jsx)(u.DZ, { className: (0, n.$)(N().title, N().important), variant: 'h3', size: 'xs', children: A }),
                                (0, i.jsxs)(u.HL, {
                                    className: (0, n.$)(N().text, N().important),
                                    variant: 'span',
                                    type: 'text',
                                    size: 'l',
                                    weight: 'normal',
                                    children: [!1, (0, i.jsx)(l.A, { id: 'page-error.try-to-restart-app' })],
                                }),
                                (0, i.jsx)(d.$, {
                                    onClick: y,
                                    className: N().button,
                                    role: 'link',
                                    color: 'secondary',
                                    size: 'l',
                                    radius: 'xxxl',
                                    children: (0, i.jsxs)(u.HL, {
                                        type: 'controls',
                                        variant: 'span',
                                        size: 'm',
                                        children: [!1, (0, i.jsx)(l.A, { id: 'page-error.restart-app-button' })],
                                    }),
                                }),
                            ],
                        }),
                    ],
                });
            });
        },
        64308: (e) => {
            e.exports = {
                backgroundProgressbar: 'ChangeTimecodeBackground_backgroundProgressbar__hT_QP',
                progressbar: 'ChangeTimecodeBackground_progressbar__M93Ie',
                timecodeGroup: 'ChangeTimecodeBackground_timecodeGroup__2VQ1N',
                thumb: 'ChangeTimecodeBackground_thumb__vx6J0',
                timecodeGroupCurrent: 'ChangeTimecodeBackground_timecodeGroupCurrent__aGlrB',
                important: 'ChangeTimecodeBackground_important__OSzLR',
                root_focusVisible: 'ChangeTimecodeBackground_root_focusVisible__RLp5i',
                root: 'ChangeTimecodeBackground_root__B89FS',
                root_isPlayingTrack: 'ChangeTimecodeBackground_root_isPlayingTrack__2naHL',
                brandedThumb: 'ChangeTimecodeBackground_brandedThumb__igXsO',
                slider: 'ChangeTimecodeBackground_slider__Jdu3l',
            };
        },
        65204: (e, t, a) => {
            'use strict';
            a.d(t, { O: () => u });
            var i = a(32290),
                n = a(96103),
                r = a(39407),
                s = a(63423),
                o = a(71926),
                l = a(61334),
                d = a(32641),
                c = a(57594);
            let u = (0, n.PA)((e) => {
                let { className: t, buttonText: a, isBlock: n = !1 } = e,
                    {
                        settings: { browserInfo: u },
                        user: { account: _ },
                    } = (0, c.g)(),
                    m = (0, l.q)({ browserInfo: u, login: _.data.login }),
                    p = (0, d.Z)(m());
                return (0, i.jsx)(s.$, {
                    role: 'link',
                    className: t,
                    isBlock: n,
                    color: 'primary',
                    variant: 'default',
                    size: 'l',
                    radius: 'xxxl',
                    onClick: p,
                    children: a || (0, i.jsx)(o.HL, { variant: 'div', size: 'm', lineClamp: 1, children: (0, i.jsx)(r.A, { id: 'download-mobile-app.listen-in-app' }) }),
                });
            });
        },
        65215: (e) => {
            e.exports = {
                root: 'NavbarDesktopPlusOptionsBar_root__2WZsH',
                addition: 'NavbarDesktopPlusOptionsBar_addition__DJOlV',
                title: 'NavbarDesktopPlusOptionsBar_title__wGODi',
                buttons: 'NavbarDesktopPlusOptionsBar_buttons__lzCHr',
                optionIcon: 'NavbarDesktopPlusOptionsBar_optionIcon__O1ccD',
            };
        },
        65337: (e) => {
            e.exports = {
                root: 'PlayerBarMobile_root__cdKy_',
                progressBar: 'PlayerBarMobile_progressBar___DmH8',
                info: 'PlayerBarMobile_info__WmdhZ',
                infoCard: 'PlayerBarMobile_infoCard__DCATu',
                coverContainer: 'PlayerBarMobile_coverContainer__a3JDF',
                cover: 'PlayerBarMobile_cover__pnJd1',
                description: 'PlayerBarMobile_description__IxQ9L',
                artists: 'PlayerBarMobile_artists__XVSBV',
                artistLink: 'PlayerBarMobile_artistLink__pieMq',
                infoButtons: 'PlayerBarMobile_infoButtons__JXxfv',
                sliderChangeTimeCode: 'PlayerBarMobile_sliderChangeTimeCode___2Vpu',
                backgroundProgress: 'PlayerBarMobile_backgroundProgress__jevhK',
                shimmerCover: 'PlayerBarMobile_shimmerCover__q1eXc',
                shimmerMeta: 'PlayerBarMobile_shimmerMeta__4vDEK',
                shimmerMetaTitle: 'PlayerBarMobile_shimmerMetaTitle__TsIb2',
                shimmerMetaDescription: 'PlayerBarMobile_shimmerMetaDescription__pIeAr',
            };
        },
        65476: (e, t, a) => {
            'use strict';
            a.d(t, { I: () => c });
            var i = a(55178),
                n = a(91027),
                r = a(57594);
            a(79406);
            var s = a(97201),
                o = a(68243),
                l = (a(39231), a(80408)),
                d = (a(31266), a(71670));
            let c = () => {
                let {
                        experiments: e,
                        user: {
                            account: {
                                data: { hasPlus: t },
                            },
                        },
                    } = (0, r.g)(),
                    a = (0, d.X)(),
                    c = (0, i.useCallback)(() => {}, [!1]),
                    u = (0, n.c)((e, t) => {}),
                    _ = (0, n.c)(() => {
                        let e = (0, l.j)();
                        if (null === e) return;
                        e.delete(s.K.CLID);
                        let t = new URL(window.location.href);
                        ((t.search = e.toString()), a(t.toString()));
                    }),
                    m = (0, n.c)((e, t) => {
                        if (!e || !t) return;
                        let a = c();
                        if (!a) return;
                        let { parsedClid: i } = a;
                        return t === i.albumId && e.clid === i.cpa.clid && e.artistId === i.cpa.artistId;
                    }),
                    p = (0, n.c)((e) => {
                        let t = c();
                        return (null == t ? void 0 : t.parsedClid.albumId) === e;
                    }),
                    v = (0, n.c)((e, t) => {
                        let a = c();
                        if (!a || a.parsedClid.albumId !== e) return t;
                        let { href: i } = (0, o.u)(t, { query: { [s.K.CLID]: a.queryClid } });
                        return i;
                    });
                return {
                    isCPAEnabled: !1,
                    getClidFromQuery: c,
                    setClidToQuery: u,
                    deleteClidFromQuery: _,
                    checkIsValidClid: m,
                    getAlbumUrlWithSavedClid: v,
                    checkIsCurrentAlbumPage: p,
                };
            };
        },
        65497: (e, t, a) => {
            'use strict';
            a.d(t, { J: () => n });
            var i = a(53161);
            let n = (e) => e.startsWith(i.nl);
        },
        66436: (e, t, a) => {
            'use strict';
            a.d(t, { $: () => r });
            var i = a(55178),
                n = a(60900);
            let r = () => {
                let { formatMessage: e } = (0, n.A)();
                return (0, i.useCallback)(
                    function (t) {
                        let a = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
                            i = Math.floor(t / 60),
                            n = function (t) {
                                let a = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                                    i = e({ id: 'time.minutes-left' }, { minutes: t });
                                return a ? ''.concat(e({ id: 'time.left' }, { time: t }), ' ').concat(i) : i;
                            };
                        if (t < 1) return e({ id: 'time.finished' });
                        if (t < 60)
                            return (function (t) {
                                let a = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                                    i = e({ id: 'time.seconds-left' }, { seconds: t });
                                return a ? ''.concat(e({ id: 'time.left' }, { time: t }), ' ').concat(i) : i;
                            })(Math.floor(t), a);
                        if (i < 60) return n(i, a);
                        let r = Math.floor(i / 60),
                            s = i % 60,
                            o = (function (t) {
                                let a = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                                return a ? e({ id: 'time.hours-left' }, { hours: t }) : e({ id: 'time.hours' }, { hours: t });
                            })(r, a);
                        return s > 0 ? ''.concat(o, ' ').concat(n(s)) : o;
                    },
                    [e],
                );
            };
        },
        67544: (e, t, a) => {
            'use strict';
            a.d(t, { j: () => i });
            var i = (function (e) {
                return ((e.ANDROID = 'Android'), (e.IOS = 'iOS'), (e.MACOS = 'MacOS'), (e.WINDOWS = 'Windows'), e);
            })({});
        },
        67732: (e, t, a) => {
            'use strict';
            a.d(t, { T: () => r });
            var i = a(55178),
                n = a(56008);
            function r() {
                return (0, i.useContext)(n.H);
            }
        },
        68912: (e, t, a) => {
            'use strict';
            a.d(t, { j: () => S });
            var i = a(32290),
                n = a(63618),
                r = a(96103),
                s = a(21916),
                o = a(55178),
                l = a(60900),
                d = a(39407),
                c = a(21732),
                u = a(70280),
                _ = a(71926),
                m = a(41677),
                p = a(28999),
                v = a(57594),
                h = a(53514),
                b = a(85017),
                x = a(13798),
                f = a(61258),
                g = a(25649),
                A = a(24760),
                N = a(84141),
                C = a(5856),
                y = a.n(C);
            let S = (0, r.PA)((e) => {
                let {
                        className: t,
                        titleContainerClassName: a,
                        track: r,
                        albumArtists: C,
                        withExplicitMark: S = !0,
                        withSecondaryColor: T,
                        captionSize: E = 'm',
                        explicitSize: B = 'xxxs',
                        withAllArtistsTitle: I,
                        textClassName: j,
                        artistsClassName: P,
                        ignoreDislikedStyles: k,
                        withCustomTooltip: w = !0,
                        hasLineClamp: L = !0,
                        withSavingQueryParams: D,
                        beforeTitle: O,
                        withArtistLink: R = !0,
                        withTrackLink: M = !0,
                        afterTitle: F,
                        withContextMenuArtists: U,
                    } = e,
                    { formatMessage: z } = (0, l.A)(),
                    { sendNavigateSearchFeedback: W } = (0, p.z)(),
                    {
                        settings: { isMobile: V },
                    } = (0, v.g)(),
                    H = (0, A.$)({ withCustomTooltip: w }),
                    K = (0, s.useSearchParams)(),
                    G = r.getUrl(D ? Object.fromEntries(K) : void 0),
                    $ = (0, o.useMemo)(() => {
                        var e;
                        let t = z({ id: 'entity-names.track-name' }, { trackName: r.title });
                        return ''.concat(t, ' ').concat(null != (e = r.version) ? e : '');
                    }, [z, r.title, r.version]),
                    Y = (0, N.O)({ track: r, onNavigate: W, withSavingQueryParams: D, entityType: b.n.TRACK }),
                    q = (0, o.useCallback)(
                        (e) => {
                            let t = ''.concat(r.title, ' ').concat(!r.isRemoved && r.version ? r.version : '');
                            return (0, i.jsx)(u.m_, {
                                enabled: H && !V,
                                offsetOptions: 4,
                                placement: 'top',
                                text: t,
                                hoverSettings: h.V,
                                children: (0, i.jsx)(_.HL, {
                                    className: (0, n.$)(y().text, y().title),
                                    type: 'entity',
                                    size: E,
                                    weight: 'medium',
                                    variant: 'span',
                                    ...e,
                                    children: r.title,
                                }),
                            });
                        },
                        [V, H, E, r.isRemoved, r.title, r.version],
                    ),
                    Z = (0, o.useMemo)(() => {
                        let e = ''.concat(r.title, ' ').concat(!r.isRemoved && r.version ? r.version : '');
                        return r.isRemoved
                            ? (0, i.jsx)(u.m_, {
                                  enabled: H && !V,
                                  offsetOptions: 4,
                                  placement: 'top',
                                  text: z({ id: 'track-title.error-not-found' }),
                                  hoverSettings: h.V,
                                  children: (0, i.jsx)(_.HL, {
                                      className: (0, n.$)(y().text, y().title),
                                      type: 'entity',
                                      size: E,
                                      weight: 'medium',
                                      variant: 'span',
                                      title: H ? void 0 : z({ id: 'track-title.error-not-found' }),
                                      children: (0, i.jsx)(d.A, { id: 'track-title.error-not-found' }),
                                  }),
                              })
                            : r.hasTrackLink && M
                              ? (0, i.jsx)(f.N, {
                                    onClick: Y,
                                    className: y().albumLink,
                                    href: G,
                                    'aria-label': $,
                                    title: H ? void 0 : e,
                                    'data-test-id': c.Kq.track.TRACK_TITLE,
                                    children: q(),
                                })
                              : q({ 'data-test-id': c.Kq.track.TRACK_TITLE });
                    }, [V, r.title, r.isRemoved, r.version, r.hasTrackLink, q, H, z, E, $, Y, G, M]),
                    X = (0, g.s)(r.artists, C),
                    Q = (0, o.useMemo)(() => +!!L, [L]);
                return (0, i.jsx)('div', {
                    className: (0, n.$)(y().root, { [y().root_disabled]: !r.isAvailable, [y().root_disliked]: r.isDisliked && !k, [y().root_withSecondaryColor]: T }, t),
                    children: (0, i.jsxs)('div', {
                        className: y().metaContainer,
                        children: [
                            (0, i.jsxs)('div', {
                                className: (0, n.$)(y().titleContainer, { [y().titleContainer_withVersion]: r.version }, a),
                                children: [
                                    (0, i.jsxs)(_.HL, {
                                        className: (0, n.$)(y().text, j),
                                        type: 'entity',
                                        size: E,
                                        weight: 'medium',
                                        variant: 'div',
                                        lineClamp: 1,
                                        children: [
                                            O,
                                            Z,
                                            !r.isRemoved &&
                                                r.version &&
                                                (0, i.jsxs)(_.HL, {
                                                    className: (0, n.$)(y().text, y().version),
                                                    type: 'entity',
                                                    size: E,
                                                    weight: 'medium',
                                                    variant: 'span',
                                                    title: H ? void 0 : r.version,
                                                    'data-test-id': c.Kq.track.TRACK_VERSION,
                                                    children: ['\xa0', r.version],
                                                }),
                                        ],
                                    }),
                                    r.explicitDisclaimer &&
                                        S &&
                                        (0, i.jsx)(x.N, {
                                            containerClassName: y().explicitMarkContainer,
                                            getDescriptionTexts: r.getDescriptionTexts,
                                            size: B,
                                            variant: r.explicitDisclaimer,
                                            className: y().explicitMark,
                                            trackId: r.id,
                                        }),
                                    F,
                                ],
                            }),
                            X.length > 0 &&
                                (0, i.jsx)(m.i, {
                                    className: (0, n.$)(y().text, { [y().artists]: L }, P, j),
                                    withAllArtistsTitle: I,
                                    linkClassName: (0, n.$)(y().text, y().link),
                                    captionClassName: (0, n.$)(y().text, y().artistCaption),
                                    artists: X,
                                    withLink: r.isNonUserGenerated && R,
                                    lineClamp: Q,
                                    captionSize: E,
                                    withContextMenu: U,
                                }),
                        ],
                    }),
                });
            });
        },
        69200: (e) => {
            e.exports = {
                root: 'NavbarDesktopAnimatedDownloadBarMinimized_root__nEPqZ',
                icon: 'NavbarDesktopAnimatedDownloadBarMinimized_icon__Y2hec',
                button: 'NavbarDesktopAnimatedDownloadBarMinimized_button__hesBw',
            };
        },
        70208: (e, t, a) => {
            'use strict';
            a.d(t, { T: () => i });
            var i = (function (e) {
                return ((e.BRANDED = 'branded'), (e.DEFAULT = 'default'), (e.DUCK = 'duck'), (e.CAR = 'car'), e);
            })({});
        },
        70314: (e, t, a) => {
            'use strict';
            a.d(t, { t: () => f });
            var i = a(32290),
                n = a(63618),
                r = a(96103),
                s = a(55178),
                o = a(21732),
                l = a(96764),
                d = a(91027),
                c = a(54862),
                u = a(6752),
                _ = a(63423),
                m = a(71926),
                p = a(98740),
                v = a(32641),
                h = a(57594),
                b = a(71904),
                x = a.n(b);
            let f = (0, r.PA)((e) => {
                var t, a, r, b;
                let { anchorId: f, screenId: g, button: A, buttonSize: N, buttonClassName: C, textClassName: y, feedbackToken: S, hide: T } = e,
                    { communication: E } = (0, h.g)(),
                    [B] = (0, c.d)(),
                    { openPaymentWidgetModal: I } = (0, p.D)({
                        storeName: 'music',
                        communicationId: null != (b = null == (t = A.action) ? void 0 : t.communicationId) ? b : '',
                        offerElement: { element: B, intersectionPropertyId: 'barbellow' },
                        isEnabled: !!(null == (a = A.action) ? void 0 : a.communicationId),
                    }),
                    j = ((null == (r = A.action) ? void 0 : r.type) === l.T.LINK && A.action.value) || '',
                    P = (0, v.Z)(j),
                    k = (0, d.c)((e) => {
                        if (A.action)
                            switch ((f && g && A.action.id && E.action(f, g, A.action.id, S), A.action.type)) {
                                case l.T.PAYWALL:
                                    (I(), null == T || T());
                                    return;
                                case l.T.LINK:
                                    A.action.value && (P(e), null == T || T());
                                    return;
                                case l.T.CLOSE:
                                    null == T || T();
                                    return;
                            }
                    }),
                    w = (0, s.useMemo)(() => {
                        if (A.textColor) return { color: A.textColor };
                    }, [A.textColor]),
                    L = (0, u.L)(() => {
                        var e;
                        switch (null == (e = A.action) ? void 0 : e.type) {
                            case l.T.LINK:
                                return o.OA.communicationButton.COMMUNICATION_BUTTON_LINK;
                            case l.T.CLOSE:
                                return o.OA.communicationButton.COMMUNICATION_BUTTON_CLOSE;
                            default:
                                return o.OA.communicationButton.COMMUNICATION_BUTTON_PAYWALL;
                        }
                    });
                return (0, i.jsx)(_.$, {
                    className: (0, n.$)(x().root, x()['root_'.concat(A.color)], C),
                    role: j ? 'link' : 'button',
                    color: A.color ? A.color : void 0,
                    radius: 'xxxl',
                    onClick: k,
                    size: N,
                    'data-test-id': L,
                    children: (0, i.jsx)(m.HL, { className: (0, n.$)(x().text, y), variant: 'div', type: 'text', size: 'm', style: w, children: A.text }),
                });
            });
        },
        70390: (e, t, a) => {
            'use strict';
            a.d(t, { A: () => p });
            var i = a(32290),
                n = a(92708),
                r = a(55178),
                s = a(60900),
                o = a(45477),
                l = a(75582),
                d = a(57594),
                c = a(90357),
                u = a(97647),
                _ = a(8097);
            let m = (e) => {
                    let { artist: t, closeToast: a } = e;
                    return (0, i.jsx)(_.k, {
                        closeToast: a,
                        entityVariant: u.c.ARTIST,
                        coverUri: t.coverUri,
                        entityUrl: t.url,
                        entityTitle: t.name,
                        isPinned: t.isPinned,
                        radius: 'round',
                    });
                },
                p = (e) => {
                    let { user: t } = (0, d.g)(),
                        { notify: a } = (0, l.l)(),
                        { formatMessage: u } = (0, s.A)(),
                        [_, p] = (0, r.useState)(!1);
                    return (0, r.useCallback)(async () => {
                        if (!e) return;
                        if (!t.isAuthorized)
                            return void a((0, i.jsx)(c.h, { error: u({ id: 'authorization-messages.need-to-authorizate' }) }), { containerId: o.u.ERROR });
                        if (_) return;
                        let r = { ...(0, n.HO)(e), isPinned: !e.isPinned };
                        p(!0);
                        let s = await e.togglePin();
                        (p(!1),
                            s
                                ? a((0, i.jsx)(m, { artist: r }), { containerId: o.u.INFO })
                                : a((0, i.jsx)(c.h, { error: u({ id: 'error-messages.error-during-action' }) }), { containerId: o.u.ERROR }));
                    }, [e, t.isAuthorized, _, u, a]);
                };
        },
        70583: (e) => {
            e.exports = {
                root: 'NavbarDesktopAnimatedPlusOptionsBar_root__dOEU7',
                button: 'NavbarDesktopAnimatedPlusOptionsBar_button__NRXbJ',
                important: 'NavbarDesktopAnimatedPlusOptionsBar_important__mltBe',
                icon: 'NavbarDesktopAnimatedPlusOptionsBar_icon__EKWgb',
                optionIcon: 'NavbarDesktopAnimatedPlusOptionsBar_optionIcon__gPbRm',
                popoverContent: 'NavbarDesktopAnimatedPlusOptionsBar_popoverContent__wSXo7',
            };
        },
        70627: (e) => {
            e.exports = {
                root_withLongText: 'BaseNotificationPin_root_withLongText__BKqhi',
                title: 'BaseNotificationPin_title__46xmX',
                link: 'BaseNotificationPin_link__4EvPj',
                capitalizedEntity: 'BaseNotificationPin_capitalizedEntity__HePYm',
                text: 'BaseNotificationPin_text__LF3L_',
                image: 'BaseNotificationPin_image__O7ptT',
            };
        },
        71670: (e, t, a) => {
            'use strict';
            a.d(t, { X: () => n });
            var i = a(55178);
            let n = () =>
                (0, i.useCallback)((e) => {
                    {
                        let t = window.history.state;
                        window.history.replaceState(t, '', e);
                    }
                }, []);
        },
        71904: (e) => {
            e.exports = {
                root_primary: 'CommunicationButton_root_primary__rrmax',
                root_plus: 'CommunicationButton_root_plus__d48MV',
                root_secondary: 'CommunicationButton_root_secondary__YQujH',
                text: 'CommunicationButton_text__kObnq',
            };
        },
        72054: (e) => {
            e.exports = {
                root: 'DeeplinkAndOnelinkContainer_root__69SNc',
                button: 'DeeplinkAndOnelinkContainer_button__QzMwG',
                buttonTitle: 'DeeplinkAndOnelinkContainer_buttonTitle__KmdNV',
                buttonIcon: 'DeeplinkAndOnelinkContainer_buttonIcon__U6JJv',
                musicIcon: 'DeeplinkAndOnelinkContainer_musicIcon__jIu2m',
                onelinkIcon: 'DeeplinkAndOnelinkContainer_onelinkIcon__ELZLH',
            };
        },
        73017: (e) => {
            e.exports = {
                root: 'DefaultLayout_root__7J0wo',
                root_applicationPreserveTitleBar: 'DefaultLayout_root_applicationPreserveTitleBar__ygJtq',
                root_withBarBelow: 'DefaultLayout_root_withBarBelow__jPsaV',
                rootNewVibe: 'DefaultLayout_rootNewVibe__MSDOn',
                rootNewVibe_withBarBelow: 'DefaultLayout_rootNewVibe_withBarBelow__82_qG',
                barBelow: 'DefaultLayout_barBelow__y6PFU',
                navbar: 'DefaultLayout_navbar__LIQWG',
                navbar_application_macos: 'DefaultLayout_navbar_application_macos__9dj3u',
                navbar_application_linux: 'DefaultLayout_navbar_application_linux__ejlGn',
                navbar_application_windows: 'DefaultLayout_navbar_application_windows__3hDQ_',
            };
        },
        73021: (e, t, a) => {
            'use strict';
            a.d(t, { u: () => _ });
            var i = a(32290),
                n = a(63618),
                r = a(60900),
                s = a(91027),
                o = a(63423),
                l = a(82586),
                d = a(21732),
                c = a(1439),
                u = a.n(c);
            let _ = (e) => {
                let { isDisabled: t, shuffle: a, className: c, size: _ = 'xxxs', variant: m = 'default', iconSize: p = 'xs', color: v, onClick: h } = e,
                    { formatMessage: b } = (0, r.A)(),
                    x = (0, s.c)((e) => {
                        (null == h || h(), e.stopPropagation());
                    });
                return (0, i.jsx)(o.$, {
                    className: c,
                    radius: 'round',
                    size: _,
                    variant: m,
                    color: v,
                    withRipple: !1,
                    disabled: t,
                    'aria-label': b({ id: 'player-actions.shuffle' }),
                    'aria-pressed': !t && a,
                    'aria-hidden': t,
                    icon: (0, i.jsx)(l.I, {
                        variant: 'shuffle',
                        size: p,
                        className: (0, n.$)(u().shuffleIcon, { [u().shuffleIcon_disabled]: t, [u().shuffleIcon_on]: !t && a, [u().shuffleIcon_off]: !t && !a }),
                    }),
                    onClick: x,
                    'data-test-id': !a || t ? d.Kq.sonata.SHUFFLE_BUTTON : d.Kq.sonata.SHUFFLE_BUTTON_ON,
                });
            };
        },
        73192: (e, t, a) => {
            'use strict';
            a.d(t, { A: () => p });
            var i = a(32290),
                n = a(92708),
                r = a(55178),
                s = a(60900),
                o = a(45477),
                l = a(75582),
                d = a(57594),
                c = a(90357),
                u = a(97647),
                _ = a(8097);
            let m = (e) => {
                    let { playlist: t, closeToast: a } = e;
                    return (0, i.jsx)(_.k, {
                        closeToast: a,
                        entityVariant: u.c.PLAYLIST,
                        entityUrl: t.url,
                        coverUri: t.coverUri,
                        entityTitle: t.title,
                        isPinned: t.isPinned,
                        radius: 's',
                    });
                },
                p = (e) => {
                    let { user: t } = (0, d.g)(),
                        { notify: a } = (0, l.l)(),
                        { formatMessage: u } = (0, s.A)(),
                        [_, p] = (0, r.useState)(!1);
                    return (0, r.useCallback)(async () => {
                        if (!t.isAuthorized)
                            return void a((0, i.jsx)(c.h, { error: u({ id: 'authorization-messages.need-to-authorizate' }) }), { containerId: o.u.ERROR });
                        if (_) return;
                        let r = { ...(0, n.HO)(e), url: e.url, isPinned: !e.isPinned };
                        p(!0);
                        let s = await e.togglePin();
                        (p(!1),
                            s
                                ? a((0, i.jsx)(m, { playlist: r }), { containerId: o.u.INFO })
                                : a((0, i.jsx)(c.h, { error: u({ id: 'error-messages.error-during-action' }) }), { containerId: o.u.ERROR }));
                    }, [t.isAuthorized, _, e, a, u]);
                };
        },
        73474: (e, t, a) => {
            'use strict';
            var i;
            (a.d(t, { p: () => i }),
                (function (e) {
                    ((e.WEB_MAIN = 'web_main'),
                        (e.MAIN = 'main'),
                        (e.WEB_COLLECTION = 'web_collection'),
                        (e.NON_MUSIC = 'non_music'),
                        (e.KIDS = 'kids'),
                        (e.MAIN_NOLOGIN = 'main_nologin'),
                        (e.SEARCH = 'Search'),
                        (e.ARTIST = 'artist_web'),
                        (e.CONCERTS = 'concerts'),
                        (e.CONCERT_PAGE = 'concert_page'));
                })(i || (i = {})));
        },
        74523: (e, t, a) => {
            'use strict';
            a.d(t, { C: () => i });
            let i = (e, t) => {
                let [a, i] = e.split('?'),
                    n = new URLSearchParams(i || '');
                for (let [e, a] of new URLSearchParams(t).entries()) n.set(e, a);
                let r = n.toString();
                return ''.concat(a).concat(r ? '?'.concat(r) : '');
            };
        },
        75314: (e, t, a) => {
            'use strict';
            a.d(t, { J: () => r, o: () => n });
            var i = a(14257);
            let n = { [i.S.Dark]: 'ym-dark-theme', [i.S.Light]: 'ym-light-theme' },
                r = (e) => {
                    switch (e) {
                        case i.S.Light:
                        case i.S.Dark:
                            return n[e];
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
        76171: (e, t, a) => {
            'use strict';
            a.d(t, { DefaultLayout: () => rx });
            var i,
                n,
                r,
                s,
                o,
                l,
                d,
                c,
                u,
                _,
                m = a(32290),
                p = a(63618),
                v = a(96103),
                h = a(21916),
                b = a(53730),
                x = a(55178),
                f = a.t(x, 2),
                g = a(60900),
                A = a(39407),
                N = a(21732),
                C = a(91027),
                y = a(58359),
                S = a(63423),
                T = a(82586),
                E = a(84638),
                B = a(70280),
                I = a(71926),
                j = a(84782),
                P = a(37240),
                k = a(83920),
                w = a(43564),
                L = a(57594),
                D = a(58625),
                O = a(5619),
                R = a.n(O);
            let M = (0, v.PA)(() => {
                var e, t;
                let { formatMessage: a } = (0, g.A)(),
                    {
                        vibe: i,
                        settings: { isMobile: n },
                        vibeSettings: r,
                    } = (0, L.g)(),
                    { pageId: s } = (0, P.$)(),
                    { blockIdForFrom: o } = (0, j.N)(),
                    l = (0, x.useRef)(null),
                    d = (0, x.useRef)(null),
                    { resetContext: c } = (0, w.B)({ seeds: null != (t = null == (e = i.meta) ? void 0 : e.seeds) ? t : [], pageIdForFrom: s, blockIdForFrom: o }),
                    { contentRef: u } = (0, k.g)();
                (0, x.useEffect)(
                    () => () => {
                        r.reset();
                    },
                    [r],
                );
                let _ = !!(i.isApplying || i.isMyVibe),
                    p = (0, C.c)((e) => {
                        var t;
                        i.isApplying || (l.current && (0, y.P)(e, R().ripple, l.current), c(), null == (t = d.current) || t.focus());
                    });
                return (0, m.jsx)(E.a, {
                    size: 'fitContent',
                    placement: n ? 'default' : 'right',
                    open: r.modal.isOpened,
                    onOpenChange: r.modal.onOpenChange,
                    onClose: r.modal.close,
                    className: R().root,
                    contentClassName: R().modalContent,
                    overlayClassName: R().overlay,
                    portalNode: n ? null : u,
                    showHeader: !1,
                    restoreFocus: !0,
                    closeOnOutsidePress: !0,
                    'data-test-id': N.Kq.vibeSettings.VIBE_SETTINGS_BLOCK,
                    children: (0, m.jsxs)('div', {
                        className: R().content,
                        children: [
                            (0, m.jsxs)('div', {
                                className: R().header,
                                children: [
                                    (0, m.jsx)(I.DZ, {
                                        variant: 'h3',
                                        size: 's',
                                        weight: 'bold',
                                        'data-test-id': N.Kq.vibeSettings.VIBE_SETTINGS_TITLE,
                                        children: (0, m.jsx)(A.A, { id: 'interface-actions.my-vibe-settings' }),
                                    }),
                                    (0, m.jsxs)('div', {
                                        className: R().actions,
                                        children: [
                                            (0, m.jsx)(B.m_, {
                                                offsetOptions: 4,
                                                placement: 'left',
                                                text: a({ id: 'interface-actions.reset-my-vibe-settings' }),
                                                children: (0, m.jsx)(S.$, {
                                                    variant: 'outline',
                                                    radius: 'round',
                                                    size: 'xxxs',
                                                    icon: (0, m.jsx)(T.I, { variant: 'reset', size: 'xxxs' }),
                                                    onClick: p,
                                                    disabled: !!i.isMyVibe,
                                                    'aria-hidden': !!i.isMyVibe,
                                                    'aria-disabled': _,
                                                    'aria-label': a({ id: 'interface-actions.reset-my-vibe-settings' }),
                                                    ref: l,
                                                    'data-test-id': N.Kq.vibeSettings.VIBE_SETTINGS_RESET_BUTTON,
                                                }),
                                            }),
                                            (0, m.jsx)(S.$, {
                                                radius: 'round',
                                                color: 'secondary',
                                                size: 'xxs',
                                                icon: (0, m.jsx)(T.I, { variant: 'close', size: 'xxs' }),
                                                onClick: r.modal.close,
                                                'aria-label': a({ id: 'interface-actions.close-my-vibe-settings' }),
                                                ref: d,
                                                'data-test-id': N.Kq.vibeSettings.VIBE_SETTINGS_CLOSE_BUTTON,
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                            (0, m.jsx)(D.C, {}),
                        ],
                    }),
                });
            });
            var F = a(20472),
                U = a(14257),
                z = a(43352),
                W = a(75314),
                V = a(50);
            let H = function (e) {
                let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
                    { theme: a } = (0, V.W)(),
                    i = (0, x.useRef)(a);
                ((0, x.useLayoutEffect)(() => {
                    i.current = a;
                }, [a]),
                    (0, x.useLayoutEffect)(() => {
                        if (!t || 'undefined' == typeof document) return;
                        let a = (0, W.J)(e),
                            n = () => {
                                document.body.classList.contains(a) || (0, z.Z)(e);
                            };
                        n();
                        let r = new MutationObserver(() => {
                            n();
                        });
                        return (
                            r.observe(document.body, { attributes: !0, attributeFilter: ['class'] }),
                            () => {
                                (r.disconnect(), (0, z.Z)(i.current));
                            }
                        );
                    }, [e, t]));
            };
            var K = a(79406),
                G = a(32675),
                $ = a.n(G),
                Y = a(6752);
            let q = () => {
                var e;
                let {
                    user: t,
                    settings: a,
                    advertBanners: {
                        banners: { sideAdvertBanner: i },
                    },
                    freeAccess: n,
                } = (0, L.g)();
                return !!i.isVisible && (null == (e = a.browserInfo) || !e.isTouch) && (!t.isAuthorized || n.isFreeWebUser);
            };
            var Z = a(28015),
                X = a(80792);
            let Q = { p1: 'bwvvu', p2: 'foom', puid1: '', puid2: '' };
            var J = a(92854),
                ee = a.n(J);
            let et = (0, v.PA)((e) => {
                    let { className: t, forwardRef: a, isWavePage: i } = e,
                        {
                            advertBanners: {
                                banners: { sideAdvertBanner: n },
                            },
                        } = (0, L.g)(),
                        { formatMessage: r } = (0, g.A)();
                    return (0, m.jsx)('section', {
                        className: (0, p.$)(ee().root, t, { [ee().root_vibePage]: i, [ee().root_hidden]: !n.isVisible }),
                        'aria-label': r({ id: 'advert.banner' }),
                        role: 'banner',
                        ref: a,
                        children: (0, m.jsx)('div', {
                            className: ee().contentWrapper,
                            children: (0, m.jsx)(X.N, {
                                className: ee().content,
                                ownerId: Z.P,
                                containerId: 'adfox_173831489302952769',
                                params: Q,
                                onLoad: n.setType,
                                onError: n.toggleHasErrorTrue,
                                onNoAds: n.toggleNoAdsTrue,
                            }),
                        }),
                    });
                }),
                ea = (0, x.forwardRef)((e, t) => (0, m.jsx)(et, { forwardRef: t, ...e }));
            var ei = a(26749),
                en = a(62376),
                er = a(59564),
                es = a(77322);
            let eo = (0, v.PA)((e) => {
                let { className: t, productionBlockId: a, testBlockId: i, onRender: n, onNoAds: r, onError: s, isAsync: o } = e,
                    { experiments: l } = (0, L.g)(),
                    { render: d } = (0, er.s)(),
                    c = (0, es.D)(),
                    u = (0, x.useMemo)(() => {
                        let e = l.checkExperiment(K.z.WebNextAdvertTest, 'on'),
                            t = 'production' === c;
                        return e || !t ? i : a;
                    }, [c, l, a, i]),
                    _ = ''.concat(Z.l, '_').concat(u);
                return (
                    (0, x.useEffect)(() => {
                        d(
                            {
                                blockId: u,
                                renderTo: _,
                                async: o,
                                onRender: () => {
                                    null == n || n(ei.h.DIRECT);
                                },
                                onError: s,
                            },
                            () => {
                                null == r || r();
                            },
                        );
                    }, [u, _, d, n, s, r, o]),
                    (0, m.jsx)('div', { id: _, className: t, tabIndex: -1, 'aria-hidden': !0 })
                );
            });
            var el = a(8055);
            let ed = () => (30 * window.innerHeight) / 100,
                ec = (e, t) => e > 0 && t > 0;
            var eu = a(49388),
                e_ = a.n(eu);
            let em = (0, v.PA)((e) => {
                    let { className: t, children: a } = e,
                        i = (0, h.usePathname)(),
                        { formatMessage: n } = (0, g.A)(),
                        { setContentRef: r, setContentRootRef: s, setSideBannerRef: o, paywallRef: l, contentScrollRef: d } = (0, k.g)(),
                        c = (0, en.U)(),
                        {
                            experiments: u,
                            user: _,
                            advertBanners: {
                                banners: { brandedEntityAxeBanner: v, topAdvertBanner: b },
                            },
                        } = (0, L.g)(),
                        f = q(),
                        A =
                            (i === F.Z.main.href || i === F.Z.video.href) &&
                            (u.checkExperiment(K.z.WebNextNewWaveTab, 'on') || u.checkExperiment(K.z.WebNextNewWaveTab, 'on1')),
                        N = v.isVisible && v.type === ei.h.BRANDING,
                        y = b.isTouchTopAdvertEnabled && !l && !_.hasPlus && !N,
                        S = 'R-I-16641233-2',
                        T = ((e) => {
                            let [t, a] = (0, x.useState)(ed),
                                i = (0, x.useRef)(null),
                                n = (0, x.useRef)(!1),
                                r = (0, x.useRef)(ed()),
                                s = (0, x.useRef)(ed()),
                                o = (0, C.c)((e) => {
                                    let t = e.scrollTop,
                                        a = e.scrollHeight,
                                        i = e.clientHeight,
                                        n = s.current,
                                        r = t <= 5;
                                    if (!ec(a, i)) return n;
                                    let o = a - i;
                                    return o <= 0 ? n : o >= n ? (r ? n : 0) : r ? n : Math.max(0, n - o);
                                }),
                                l = (0, C.c)((e) => {
                                    (a(Math.round(e)), (r.current = e));
                                }),
                                d = (0, C.c)(() => {
                                    s.current = ed();
                                }),
                                c = (0, C.c)((e) => {
                                    let t = i.current;
                                    (null !== t && cancelAnimationFrame(t),
                                        (i.current = requestAnimationFrame(() => {
                                            i.current = null;
                                            let t = o(e),
                                                a = Math.abs(t - r.current),
                                                n = s.current;
                                            (0 === t || t >= n || a >= 2) && l(t);
                                        })));
                                });
                            (0, x.useLayoutEffect)(() => {
                                if (!e) {
                                    let e = ed();
                                    ((s.current = e), l(e), (n.current = !1));
                                    return;
                                }
                                if (n.current) return;
                                n.current = !0;
                                let t = ed();
                                return ((s.current = t), e.scrollTop <= 50) ? void l(t) : ec(e.scrollHeight, e.clientHeight) ? void l(o(e)) : void l(t);
                            }, [e, l, o]);
                            let u = (0, x.useMemo)(
                                () =>
                                    e
                                        ? (0, el.A)(() => {
                                              (d(), c(e));
                                          }, 100)
                                        : null,
                                [e, c, d],
                            );
                            return (
                                (0, x.useEffect)(() => {
                                    if (!e || !u) return;
                                    c(e);
                                    let t = () => {
                                        c(e);
                                    };
                                    e.addEventListener('scroll', t, { passive: !0 });
                                    let a = new ResizeObserver(u);
                                    a.observe(e);
                                    let n = () => {
                                        (d(), u());
                                    };
                                    return (
                                        window.addEventListener('resize', n, { passive: !0 }),
                                        () => {
                                            u.cancel();
                                            let o = i.current;
                                            null !== o && (cancelAnimationFrame(o), (i.current = null));
                                            let l = ed();
                                            ((r.current = l),
                                                (s.current = l),
                                                e.removeEventListener('scroll', t),
                                                a.disconnect(),
                                                window.removeEventListener('resize', n));
                                        }
                                    );
                                }, [e, c, u, d]),
                                t
                            );
                        })(d),
                        E = (0, C.c)(() => {
                            c.error('Cannot render advert banner', { adBlockId: S });
                        }),
                        B = (0, Y.L)(() => {
                            if (y)
                                return (0, m.jsx)('div', {
                                    className: e_().adContainer,
                                    'aria-label': n({ id: 'advert.banner' }),
                                    role: 'banner',
                                    children: (0, m.jsx)(eo, { isAsync: !1, onError: E, productionBlockId: S, testBlockId: S, className: e_().adBanner }),
                                });
                        });
                    return (0, m.jsxs)('div', {
                        className: (0, p.$)(e_().root, t, { [e_().root_newVibe]: A }),
                        ref: s,
                        children: [
                            B,
                            (0, m.jsx)('main', {
                                className: (0, p.$)(e_().main, { [e_().main_newVibe]: A, [e_().withBrandedBanner]: N }),
                                style: N ? { marginBlockStart: ''.concat(T, 'px') } : void 0,
                                ref: r,
                                children: (0, m.jsx)(x.Suspense, { children: a }),
                            }),
                            f && (0, m.jsx)(ea, { className: (0, p.$)(e_().sideBanner, { [e_().sideBanner_newVibe]: A }), isWavePage: A, ref: o }),
                        ],
                    });
                }),
                ep = (e) => window.innerWidth < (e ? 1920 : 1024),
                ev = () => {
                    let { sideBannerRef: e } = (0, k.g)(),
                        {
                            advertBanners: {
                                banners: { sideAdvertBanner: t },
                            },
                        } = (0, L.g)(),
                        a = q(),
                        i = e ? !!(t.isVisible && e.clientWidth) : a,
                        [n, r] = (0, x.useState)(ep(i)),
                        s = (0, x.useMemo)(
                            () =>
                                (0, el.A)(
                                    () => {
                                        r(ep(i));
                                    },
                                    100,
                                    { trailing: !1 },
                                ),
                            [r, i],
                        );
                    return (
                        (0, x.useEffect)(
                            () => (
                                window.addEventListener('resize', s),
                                s(),
                                () => {
                                    window.removeEventListener('resize', s);
                                }
                            ),
                            [s],
                        ),
                        n
                    );
                };
            var eh = a(70204),
                eb = a(34186),
                ex = a(19379),
                ef = a(17811),
                eg = a(99923),
                eA = a(37275),
                eN = a(74416),
                eC = a(83439),
                ey = a.n(eC),
                eS = a(54862),
                eT = a(7276),
                eE = a(85472),
                eB = {
                    5881: (e, t, a) => {
                        function i() {
                            for (var e, t, a = 0, i = ''; a < arguments.length;)
                                (e = arguments[a++]) &&
                                    (t = (function e(t) {
                                        var a,
                                            i,
                                            n = '';
                                        if ('string' == typeof t || 'number' == typeof t) n += t;
                                        else if ('object' == typeof t)
                                            if (Array.isArray(t)) for (a = 0; a < t.length; a++) t[a] && (i = e(t[a])) && (n && (n += ' '), (n += i));
                                            else for (a in t) t[a] && (n && (n += ' '), (n += a));
                                        return n;
                                    })(e)) &&
                                    (i && (i += ' '), (i += t));
                            return i;
                        }
                        (a.r(t), a.d(t, { clsx: () => i, default: () => n }));
                        let n = i;
                    },
                    2678: (e, t, a) => {
                        (a.r(t), a.d(t, { default: () => i }));
                        let i = {
                            root: 'NGdj0oZ2Bt8qdZhP2Tzt',
                            root_collapsed: 'rece5errcONnjJeX0YW8',
                            root_direction_vertical: 'QilmoKKJwk6f0BdkYgrA',
                            root_direction_horizontal: 'AO4rWY4RLVh48fwQw5Qs',
                        };
                    },
                    8946: (e, t, a) => {
                        (a.r(t), a.d(t, { default: () => i }));
                        let i = { root: 'yuyI2hMAT7qyL1N14MAQ', root_direction_vertical: 'xfFtKQpgAYvC2jI1tBtS', root_direction_horizontal: 'OGlYJO0lZgpSOhfU2Iru' };
                    },
                    450: (e, t, a) => {
                        (a.r(t), a.d(t, { default: () => i }));
                        let i = {
                            root: 'Bp1d3U6W8Nrbqi3MRQS_',
                            root_direction_vertical: 'hYfgO_Y8c4rrQsZJWTDZ',
                            ripple: 'UiZ4QyGEVzfvZ3QfQqqA',
                            root_direction_horizontal: 'X_Lr5kqrhzMO6kX8v92s',
                            root_collapsed: 'Q3gGGaIXiJ_oQTiVZBfl',
                            root_variant_main: 'H4trq_Zx2d9qOnQgxmxr',
                            root_animate: 'Kr9rXeXGlqHee2euqH0u',
                            animation_width: 'k8zKIZRDy6LmoaIcEpo8',
                            item: 'A4bDkbQHkwWNGqxO9qhW',
                            item_selected: 'mAd9pgMkWVX5ktCgYINQ',
                            item_direction_vertical: 'Xx9Tg5ugzg1pkf8Zh421',
                            item_direction_horizontal: 'fQVXazc9HwT3NQ8dywCh',
                            iconContainer: 'zpkgiiHgDpbBThy6gavq',
                            textContainer: 'ZrkG6gNYcr4h3hfkhyT1',
                            textContainer_selected: 'xENlRAFvRskKnt8LUObC',
                            textContainer_direction_horizontal: 'xE5fIMRnjd8oSm5BOhpI',
                        };
                    },
                    9432: (e, t, a) => {
                        (a.r(t), a.d(t, { default: () => i }));
                        let i = {
                            root: 'HcfYy4VfnRHqgXzIdL7w',
                            root_direction_vertical: 'kRmUIkcHKD5AgtpPo8wT',
                            ripple: 'aHtf5XL4YejhYEJNUkYi',
                            root_direction_horizontal: 'ZxlCWb78gIBQ8izioAXa',
                            root_collapsed: 'e1KYSvMXXv0FD4s_yCuw',
                            item: 'ZfF8mQ3Iftpwu0aZgDtG',
                            item_selected: 'Eg3pt5lTL33sOlxorSbN',
                            item_direction_vertical: 'yWJHrpNsBvchs9Jjyokk',
                            item_direction_horizontal: 'bJ7YpssStK5UnpbuTtf2',
                            item_collapsed_vertical: 'uw57VJ37U4rAAHDs0zJR',
                            iconContainer: '_YzsXZGNK8KeaUFC4Ja1',
                            textContainer: 'nxMXCBiVfgH4oxds3f2y',
                            textContainer_selected: 'jhnLSZpmG69Hlxi8n6IO',
                            textContainer_direction_horizontal: 'FH36Kh9OP4VHc2Yv3bIc',
                        };
                    },
                    9097: (e, t) => {
                        var a = Symbol.for('react.transitional.element');
                        function i(e, t, i) {
                            var n = null;
                            if ((void 0 !== i && (n = '' + i), void 0 !== t.key && (n = '' + t.key), 'key' in t))
                                for (var r in ((i = {}), t)) 'key' !== r && (i[r] = t[r]);
                            else i = t;
                            return { $$typeof: a, type: e, key: n, ref: void 0 !== (t = i.ref) ? t : null, props: i };
                        }
                        ((t.Fragment = Symbol.for('react.fragment')), (t.jsx = i), (t.jsxs = i));
                    },
                    4377: (e, t, a) => {
                        e.exports = a(9097);
                    },
                    6384: (e, t) => {
                        (Object.defineProperty(t, '__esModule', { value: !0 }),
                            (t.findColorBucketByLightness = t.findColorBucketByHue = t.findColorBucketByName = t.LIGHTNESS_COLOR_BUCKETS = t.COLOR_BUCKETS = void 0),
                            (t.COLOR_BUCKETS = [
                                { name: 'coral', start: 2, end: 19, primary: '#F53700', secondary: '#FFD7CC' },
                                { name: 'tangerine', start: 20, end: 64, primary: '#F56E00', secondary: '#FFE3CC' },
                                { name: 'clover', start: 65, end: 149, primary: '#34C03E', secondary: '#D7F4D9' },
                                { name: 'emerald', start: 150, end: 164, primary: '#00C789', secondary: '#CCFFEF' },
                                { name: 'turquoise', start: 165, end: 179, primary: '#00C7A6', secondary: '#CCFFF7' },
                                { name: 'aquamarine', start: 180, end: 189, primary: '#00B2CC', secondary: '#CCF9FF' },
                                { name: 'glacier', start: 190, end: 204, primary: '#5C8E9B', secondary: '#DFE9EC' },
                                { name: 'slate', start: 205, end: 219, primary: '#4F6C9B', secondary: '#DDE4EE' },
                                { name: 'sapphire', start: 220, end: 234, primary: '#0C41E8', secondary: '#CFDAFC' },
                                { name: 'indigo', start: 235, end: 249, primary: '#160CE8', secondary: '#D1CFFC' },
                                { name: 'amethyst', start: 250, end: 259, primary: '#5035C0', secondary: '#DDD7F4' },
                                { name: 'plum', start: 260, end: 269, primary: '#7C35C0', secondary: '#E6D7F4' },
                                { name: 'orchid', start: 270, end: 299, primary: '#BB1ADB', secondary: '#F3D1FA' },
                                { name: 'raspberry', start: 300, end: 329, primary: '#DB1A7D', secondary: '#FAD1E6' },
                                { name: 'fuchsia', start: 330, end: 339, primary: '#F5007C', secondary: '#FFCCE6' },
                                { name: 'carmine', start: 340, end: 1, primary: '#F5002E', secondary: '#FFCCD6' },
                            ]),
                            (t.LIGHTNESS_COLOR_BUCKETS = [
                                { name: 'amethyst', start: 0, end: 22 },
                                { name: 'indigo', start: 22, end: 32 },
                                { name: 'clover', start: 32, end: 42 },
                                { name: 'raspberry', start: 42, end: 51 },
                                { name: 'aquamarine', start: 51, end: 100 },
                            ]),
                            (t.findColorBucketByName = (e) => t.COLOR_BUCKETS.find((t) => t.name === e)),
                            (t.findColorBucketByHue = (e) =>
                                t.COLOR_BUCKETS.find((t) => ((e, t) => (e.start > e.end ? t >= e.start || t <= e.end : t >= e.start && t <= e.end))(t, e))),
                            (t.findColorBucketByLightness = (e) => {
                                let a = t.LIGHTNESS_COLOR_BUCKETS.find((a, i) =>
                                    ((e, a, i) => (i === t.LIGHTNESS_COLOR_BUCKETS.length - 1 ? a >= e.start && a <= e.end : a >= e.start && a < e.end))(a, e, i),
                                );
                                return (0, t.findColorBucketByName)(null == a ? void 0 : a.name);
                            }));
                    },
                    2633: (e, t) => {
                        (Object.defineProperty(t, '__esModule', { value: !0 }),
                            (t.createRipple = void 0),
                            (t.createRipple = function (e, t, a) {
                                let i = null != a ? a : e.currentTarget,
                                    n = document.createElement('span'),
                                    r = Math.max(i.clientWidth, i.clientHeight),
                                    s = r / 2,
                                    o = i.getBoundingClientRect(),
                                    l = 0 === e.clientX ? Math.round(o.width / 2) : e.clientX - o.left,
                                    d = 0 === e.clientY ? Math.round(o.height / 2) : e.clientY - o.top;
                                ((n.style.width = ''.concat(r, 'px')),
                                    (n.style.height = ''.concat(r, 'px')),
                                    (n.style.left = 0 === e.clientX ? '0px' : ''.concat(l - s, 'px')),
                                    (n.style.top = ''.concat(d - s, 'px')),
                                    n.classList.add(t));
                                let c = i.getElementsByClassName(t)[0];
                                (c && c.remove(), i.insertBefore(n, i.firstChild));
                            }));
                    },
                    1848: (e, t) => {
                        (Object.defineProperty(t, '__esModule', { value: !0 }),
                            (t.getElementFromRefOrElement = void 0),
                            (t.getElementFromRefOrElement = (e) => {
                                if (void 0 !== e) {
                                    if (null === e || e instanceof HTMLElement) return e;
                                    if (null === e.current || e.current instanceof HTMLElement) return e.current;
                                }
                            }));
                    },
                    1888: (e, t, a) => {
                        (Object.defineProperty(t, '__esModule', { value: !0 }),
                            (t.getVibePaletteColors =
                                t.getVibeColorBucketSelection =
                                t.getVibePaletteByBucketName =
                                t.FALLBACK_PALETTE =
                                t.FALLBACK_NAME =
                                t.SECONDARY_GRADIENT_STOPS =
                                t.PRIMARY_GRADIENT_STOPS =
                                t.PRIMARY_DARK_IDLE_STOPS =
                                    void 0));
                        let i = a(2660),
                            n = a(6384);
                        ((t.PRIMARY_DARK_IDLE_STOPS = Array.from({ length: 16 }, () => '#000000')),
                            (t.PRIMARY_GRADIENT_STOPS = {
                                carmine: [
                                    '#F5002E',
                                    '#CF0027',
                                    '#AF0021',
                                    '#94001C',
                                    '#7C0017',
                                    '#690014',
                                    '#590011',
                                    '#4B000E',
                                    '#40000C',
                                    '#36000A',
                                    '#2D0008',
                                    '#250007',
                                    '#1D0005',
                                    '#140004',
                                    '#0B0002',
                                    '#000000',
                                ],
                                fuchsia: [
                                    '#F5007C',
                                    '#CF0069',
                                    '#AF0059',
                                    '#94004B',
                                    '#7C003F',
                                    '#690035',
                                    '#59002D',
                                    '#4B0026',
                                    '#400020',
                                    '#36001B',
                                    '#2D0017',
                                    '#250013',
                                    '#1D000F',
                                    '#14000A',
                                    '#0B0006',
                                    '#000000',
                                ],
                                coral: [
                                    '#F53700',
                                    '#CF2F00',
                                    '#AF2700',
                                    '#942100',
                                    '#7C1C00',
                                    '#691800',
                                    '#591400',
                                    '#4B1100',
                                    '#400E00',
                                    '#360C00',
                                    '#2D0A00',
                                    '#250800',
                                    '#1D0700',
                                    '#140400',
                                    '#0B0200',
                                    '#000000',
                                ],
                                tangerine: [
                                    '#F56E00',
                                    '#CF5D00',
                                    '#AF4F00',
                                    '#944200',
                                    '#7C3800',
                                    '#692F00',
                                    '#592800',
                                    '#4B2200',
                                    '#401D00',
                                    '#361800',
                                    '#2D1400',
                                    '#251100',
                                    '#1D0D00',
                                    '#140900',
                                    '#0B0500',
                                    '#000000',
                                ],
                                clover: [
                                    '#34C03E',
                                    '#2CA334',
                                    '#25892C',
                                    '#1F7425',
                                    '#1A621F',
                                    '#16521B',
                                    '#134516',
                                    '#103B13',
                                    '#0D3210',
                                    '#0B2A0E',
                                    '#0A230B',
                                    '#081D09',
                                    '#061707',
                                    '#041005',
                                    '#020903',
                                    '#000000',
                                ],
                                emerald: [
                                    '#00C789',
                                    '#00A874',
                                    '#008E62',
                                    '#007853',
                                    '#006545',
                                    '#00553B',
                                    '#004832',
                                    '#003D2A',
                                    '#003424',
                                    '#002C1E',
                                    '#002519',
                                    '#001E15',
                                    '#001810',
                                    '#00100B',
                                    '#000906',
                                    '#000000',
                                ],
                                turquoise: [
                                    '#00C7A6',
                                    '#00A88C',
                                    '#008E77',
                                    '#007864',
                                    '#006554',
                                    '#005547',
                                    '#00483C',
                                    '#003D33',
                                    '#00342B',
                                    '#002C25',
                                    '#00251E',
                                    '#001E19',
                                    '#001814',
                                    '#00100E',
                                    '#000907',
                                    '#000000',
                                ],
                                aquamarine: [
                                    '#00B2CC',
                                    '#0096AC',
                                    '#007F92',
                                    '#006C7B',
                                    '#005A67',
                                    '#004C57',
                                    '#00414A',
                                    '#00363E',
                                    '#002E35',
                                    '#00272D',
                                    '#002125',
                                    '#001B1F',
                                    '#001518',
                                    '#000F11',
                                    '#000809',
                                    '#000000',
                                ],
                                glacier: [
                                    '#5C8E9B',
                                    '#4E7883',
                                    '#42666F',
                                    '#37565D',
                                    '#2F484F',
                                    '#273D42',
                                    '#213338',
                                    '#1C2B2F',
                                    '#182528',
                                    '#141F22',
                                    '#111A1C',
                                    '#0E1517',
                                    '#0B1112',
                                    '#080C0D',
                                    '#040607',
                                    '#000000',
                                ],
                                slate: [
                                    '#4F6C9B',
                                    '#435B83',
                                    '#384D6F',
                                    '#30415D',
                                    '#28374F',
                                    '#222E42',
                                    '#1D2738',
                                    '#18212F',
                                    '#141C28',
                                    '#111822',
                                    '#0F141C',
                                    '#0C1017',
                                    '#090D12',
                                    '#07090D',
                                    '#040507',
                                    '#000000',
                                ],
                                sapphire: [
                                    '#0C41E8',
                                    '#0A37C4',
                                    '#092EA6',
                                    '#07278C',
                                    '#062176',
                                    '#051C63',
                                    '#041854',
                                    '#041447',
                                    '#03113C',
                                    '#030E33',
                                    '#020C2B',
                                    '#020A23',
                                    '#01081B',
                                    '#010513',
                                    '#01030A',
                                    '#000000',
                                ],
                                indigo: [
                                    '#160CE8',
                                    '#130AC4',
                                    '#1009A6',
                                    '#0D078C',
                                    '#0B0676',
                                    '#090563',
                                    '#080454',
                                    '#070447',
                                    '#06033C',
                                    '#050333',
                                    '#04022B',
                                    '#030223',
                                    '#03011B',
                                    '#020113',
                                    '#01010A',
                                    '#000000',
                                ],
                                amethyst: [
                                    '#5035C0',
                                    '#442DA3',
                                    '#392689',
                                    '#302074',
                                    '#291B62',
                                    '#221752',
                                    '#1D1345',
                                    '#18103B',
                                    '#150E32',
                                    '#120C2A',
                                    '#0F0A23',
                                    '#0C081D',
                                    '#090617',
                                    '#070410',
                                    '#040209',
                                    '#000000',
                                ],
                                plum: [
                                    '#7C35C0',
                                    '#692DA3',
                                    '#592689',
                                    '#4B2074',
                                    '#3F1B62',
                                    '#351752',
                                    '#2D1345',
                                    '#26103B',
                                    '#200E32',
                                    '#1B0C2A',
                                    '#170A23',
                                    '#13081D',
                                    '#0F0617',
                                    '#0A0410',
                                    '#060209',
                                    '#000000',
                                ],
                                orchid: [
                                    '#BB1ADB',
                                    '#9E16B9',
                                    '#86139D',
                                    '#711084',
                                    '#5F0D6F',
                                    '#500B5E',
                                    '#44094F',
                                    '#390843',
                                    '#310739',
                                    '#290630',
                                    '#220528',
                                    '#1C0421',
                                    '#16031A',
                                    '#100212',
                                    '#08010A',
                                    '#000000',
                                ],
                                raspberry: [
                                    '#DB1A7D',
                                    '#B9166A',
                                    '#9D1359',
                                    '#84104B',
                                    '#6F0D40',
                                    '#5E0B36',
                                    '#4F092D',
                                    '#430826',
                                    '#390720',
                                    '#30061B',
                                    '#280517',
                                    '#210413',
                                    '#1A030F',
                                    '#12020A',
                                    '#0A0106',
                                    '#000000',
                                ],
                            }),
                            (t.SECONDARY_GRADIENT_STOPS = {
                                carmine: [
                                    '#FFCCD6',
                                    '#D8ADB5',
                                    '#B69299',
                                    '#9A7B81',
                                    '#82686D',
                                    '#6D575C',
                                    '#5C4A4D',
                                    '#4E3E42',
                                    '#423538',
                                    '#382D2F',
                                    '#2F2527',
                                    '#261F20',
                                    '#1E1819',
                                    '#151112',
                                    '#0B090A',
                                    '#000000',
                                ],
                                fuchsia: [
                                    '#FFCCE6',
                                    '#D8ADC3',
                                    '#B692A4',
                                    '#9A7B8B',
                                    '#826875',
                                    '#6D5763',
                                    '#5C4A53',
                                    '#4E3E46',
                                    '#42353C',
                                    '#382D32',
                                    '#2F252A',
                                    '#261F23',
                                    '#1E181B',
                                    '#151113',
                                    '#0B090A',
                                    '#000000',
                                ],
                                coral: [
                                    '#FFD7CC',
                                    '#D8B6AD',
                                    '#B69A92',
                                    '#9A827B',
                                    '#826D68',
                                    '#6D5C57',
                                    '#5C4E4A',
                                    '#4E423E',
                                    '#423835',
                                    '#382F2D',
                                    '#2F2825',
                                    '#26201F',
                                    '#1E1918',
                                    '#151211',
                                    '#0B0A09',
                                    '#000000',
                                ],
                                tangerine: [
                                    '#FFE3CC',
                                    '#D8C0AD',
                                    '#B6A292',
                                    '#9A897B',
                                    '#827368',
                                    '#6D6157',
                                    '#5C524A',
                                    '#4E463E',
                                    '#423B35',
                                    '#38322D',
                                    '#2F2A25',
                                    '#26221F',
                                    '#1E1B18',
                                    '#151311',
                                    '#0B0A09',
                                    '#000000',
                                ],
                                clover: [
                                    '#D7F4D9',
                                    '#B6CFB8',
                                    '#9AAE9B',
                                    '#829383',
                                    '#6D7C6E',
                                    '#5C695D',
                                    '#4E584F',
                                    '#424B42',
                                    '#383F38',
                                    '#2F3630',
                                    '#282D28',
                                    '#202521',
                                    '#191D1A',
                                    '#121412',
                                    '#0A0B0A',
                                    '#000000',
                                ],
                                emerald: [
                                    '#CCFFEF',
                                    '#ADD8CA',
                                    '#92B6AB',
                                    '#7B9A90',
                                    '#688279',
                                    '#576D66',
                                    '#4A5C56',
                                    '#3E4E49',
                                    '#35423E',
                                    '#2D3834',
                                    '#252F2C',
                                    '#1F2624',
                                    '#181E1C',
                                    '#111514',
                                    '#090B0B',
                                    '#000000',
                                ],
                                turquoise: [
                                    '#CCFFF7',
                                    '#ADD8D1',
                                    '#92B6B1',
                                    '#7B9A95',
                                    '#68827D',
                                    '#576D6A',
                                    '#4A5C59',
                                    '#3E4E4C',
                                    '#354240',
                                    '#2D3836',
                                    '#252F2D',
                                    '#1F2625',
                                    '#181E1D',
                                    '#111515',
                                    '#090B0B',
                                    '#000000',
                                ],
                                aquamarine: [
                                    '#CCF9FF',
                                    '#ADD3D8',
                                    '#92B2B6',
                                    '#7B969A',
                                    '#687F82',
                                    '#576B6D',
                                    '#4A5A5C',
                                    '#3E4C4E',
                                    '#354142',
                                    '#2D3738',
                                    '#252E2F',
                                    '#1F2626',
                                    '#181D1E',
                                    '#111515',
                                    '#090B0B',
                                    '#000000',
                                ],
                                glacier: [
                                    '#DFE9EC',
                                    '#BDC5C8',
                                    '#9FA7A9',
                                    '#868C8E',
                                    '#717678',
                                    '#606465',
                                    '#515455',
                                    '#444748',
                                    '#3A3C3D',
                                    '#313334',
                                    '#292B2B',
                                    '#222324',
                                    '#1A1B1C',
                                    '#131314',
                                    '#0A0A0B',
                                    '#000000',
                                ],
                                slate: [
                                    '#DDE4EE',
                                    '#BBC1CA',
                                    '#9EA3AA',
                                    '#85898F',
                                    '#707479',
                                    '#5F6266',
                                    '#505256',
                                    '#444649',
                                    '#393B3E',
                                    '#303234',
                                    '#292A2C',
                                    '#212224',
                                    '#1A1B1C',
                                    '#121314',
                                    '#0A0A0B',
                                    '#000000',
                                ],
                                sapphire: [
                                    '#CFDAFC',
                                    '#AFB9D5',
                                    '#949CB4',
                                    '#7D8398',
                                    '#696F80',
                                    '#595D6C',
                                    '#4B4F5B',
                                    '#3F434D',
                                    '#363941',
                                    '#2D3037',
                                    '#26282E',
                                    '#1F2126',
                                    '#181A1E',
                                    '#111215',
                                    '#090A0B',
                                    '#000000',
                                ],
                                indigo: [
                                    '#D1CFFC',
                                    '#B1AFD5',
                                    '#9594B4',
                                    '#7E7D98',
                                    '#6A6980',
                                    '#5A596C',
                                    '#4C4B5B',
                                    '#403F4D',
                                    '#363641',
                                    '#2E2D37',
                                    '#26262E',
                                    '#1F1F26',
                                    '#19181E',
                                    '#111115',
                                    '#09090B',
                                    '#000000',
                                ],
                                amethyst: [
                                    '#DDD7F4',
                                    '#BBB6CF',
                                    '#9E9AAE',
                                    '#858293',
                                    '#706D7C',
                                    '#5F5C69',
                                    '#504E58',
                                    '#44424B',
                                    '#39383F',
                                    '#302F36',
                                    '#29282D',
                                    '#212025',
                                    '#1A191D',
                                    '#121214',
                                    '#0A0A0B',
                                    '#000000',
                                ],
                                plum: [
                                    '#E6D7F4',
                                    '#C3B6CF',
                                    '#A49AAE',
                                    '#8B8293',
                                    '#756D7C',
                                    '#635C69',
                                    '#534E58',
                                    '#46424B',
                                    '#3C383F',
                                    '#322F36',
                                    '#2A282D',
                                    '#232025',
                                    '#1B191D',
                                    '#131214',
                                    '#0A0A0B',
                                    '#000000',
                                ],
                                orchid: [
                                    '#F3D1FA',
                                    '#CEB1D4',
                                    '#AE95B3',
                                    '#937E97',
                                    '#7B6A7F',
                                    '#685A6B',
                                    '#584C5A',
                                    '#4A404D',
                                    '#3F3641',
                                    '#352E37',
                                    '#2D262E',
                                    '#251F26',
                                    '#1D191D',
                                    '#141115',
                                    '#0B090B',
                                    '#000000',
                                ],
                                raspberry: [
                                    '#FAD1E6',
                                    '#D4B1C3',
                                    '#B395A4',
                                    '#977E8B',
                                    '#7F6A75',
                                    '#6B5A63',
                                    '#5A4C53',
                                    '#4D4046',
                                    '#41363C',
                                    '#372E32',
                                    '#2E262A',
                                    '#261F23',
                                    '#1D191B',
                                    '#151113',
                                    '#0B090A',
                                    '#000000',
                                ],
                            }),
                            (t.FALLBACK_NAME = 'slate'),
                            (t.FALLBACK_PALETTE = {
                                primary: '#4F6C9B',
                                secondary: '#DDE4EE',
                                primaryStops: t.PRIMARY_GRADIENT_STOPS[t.FALLBACK_NAME],
                                secondaryStops: t.SECONDARY_GRADIENT_STOPS[t.FALLBACK_NAME],
                                primaryDarkIdleStops: t.PRIMARY_DARK_IDLE_STOPS,
                            }));
                        let r = (e) => ({
                            primary: e.primary,
                            secondary: e.secondary,
                            primaryStops: t.PRIMARY_GRADIENT_STOPS[e.name],
                            secondaryStops: t.SECONDARY_GRADIENT_STOPS[e.name],
                            primaryDarkIdleStops: t.PRIMARY_DARK_IDLE_STOPS,
                        });
                        ((t.getVibePaletteByBucketName = (e) => {
                            let a = (0, n.findColorBucketByName)(e);
                            return a ? r(a) : t.FALLBACK_PALETTE;
                        }),
                            (t.getVibeColorBucketSelection = (e) => {
                                let t = (0, i.hexToHsl)(e),
                                    a = t.s > 0 ? 'hue' : 'lightness';
                                return { bucket: 'hue' === a ? (0, n.findColorBucketByHue)(t.h) : (0, n.findColorBucketByLightness)(t.l), hsl: t, mode: a };
                            }),
                            (t.getVibePaletteColors = (e) => {
                                if (!e) return t.FALLBACK_PALETTE;
                                let { bucket: a } = (0, t.getVibeColorBucketSelection)(e);
                                return a ? r(a) : t.FALLBACK_PALETTE;
                            }));
                    },
                    6882: (e, t, a) => {
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.getVibePaletteColors = t.getElementFromRefOrElement = t.createRipple = void 0));
                        var i = a(2633);
                        Object.defineProperty(t, 'createRipple', {
                            enumerable: !0,
                            get: function () {
                                return i.createRipple;
                            },
                        });
                        var n = a(1848);
                        Object.defineProperty(t, 'getElementFromRefOrElement', {
                            enumerable: !0,
                            get: function () {
                                return n.getElementFromRefOrElement;
                            },
                        });
                        var r = a(1888);
                        Object.defineProperty(t, 'getVibePaletteColors', {
                            enumerable: !0,
                            get: function () {
                                return r.getVibePaletteColors;
                            },
                        });
                    },
                    8122: function (e, t, a) {
                        var i =
                            (this && this.__importDefault) ||
                            function (e) {
                                return e && e.__esModule ? e : { default: e };
                            };
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.Navigation = void 0));
                        let n = a(4377),
                            r = a(5881),
                            s = a(9779),
                            o = i(a(2678));
                        t.Navigation = function (e) {
                            let { className: t, children: a, collapsed: i = !1, direction: l = 'vertical', ...d } = e;
                            return (0, n.jsx)(s.NavigationProvider, {
                                collapsed: i,
                                direction: l,
                                children: (0, n.jsx)('nav', {
                                    className: (0, r.clsx)(o.default.root, o.default['root_direction_'.concat(l)], { [o.default.root_collapsed]: i }, t),
                                    'aria-label': d['aria-label'],
                                    ...d,
                                    children: a,
                                }),
                            });
                        };
                    },
                    9779: (e, t, a) => {
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.NavigationProvider = t.NavigationContext = void 0));
                        let i = a(4377),
                            n = a(810);
                        ((t.NavigationContext = (0, n.createContext)({ collapsed: !1, direction: 'vertical' })),
                            (t.NavigationProvider = (e) => {
                                let { collapsed: a, direction: r, children: s } = e,
                                    o = (0, n.useMemo)(() => ({ collapsed: a, direction: r }), [a, r]);
                                return (0, i.jsx)(t.NavigationContext.Provider, { value: o, children: s });
                            }));
                    },
                    2676: function (e, t, a) {
                        var i =
                            (this && this.__importDefault) ||
                            function (e) {
                                return e && e.__esModule ? e : { default: e };
                            };
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.NavigationGroup = void 0));
                        let n = a(4377),
                            r = a(810),
                            s = a(5881),
                            o = a(9779),
                            l = i(a(8946));
                        t.NavigationGroup = function (e) {
                            let { className: t, children: a, ...i } = e,
                                d = (0, r.createRef)(),
                                { direction: c } = (0, r.useContext)(o.NavigationContext);
                            return (0, n.jsx)('ol', { ref: d, className: (0, s.clsx)(l.default.root, l.default['root_direction_'.concat(c)], t), ...i, children: a });
                        };
                    },
                    9699: function (e, t, a) {
                        var i =
                            (this && this.__importDefault) ||
                            function (e) {
                                return e && e.__esModule ? e : { default: e };
                            };
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.NavigationItem = t.NavigationItemComponent = void 0));
                        let n = a(4377),
                            r = a(810),
                            s = a(5881),
                            o = a(9779),
                            l = a(6882),
                            d = i(a(450)),
                            c = i(a(9432));
                        function u(e) {
                            let {
                                    className: t = '',
                                    forwardRef: a,
                                    children: i,
                                    selected: u = !1,
                                    shownAnimation: _,
                                    withRipple: m = !1,
                                    variant: p = 'default',
                                    isNewVisualVersion: v,
                                    ...h
                                } = e,
                                { collapsed: b, direction: x } = (0, r.useContext)(o.NavigationContext),
                                f = v ? c.default : d.default,
                                g = (0, r.useCallback)(
                                    (e) => {
                                        m && (0, l.createRipple)(e, f.ripple);
                                    },
                                    [f.ripple, m],
                                ),
                                [A, N] = r.Children.toArray(i.props.children),
                                C = (0, r.useMemo)(
                                    () =>
                                        (0, n.jsxs)(n.Fragment, {
                                            children: [
                                                (0, n.jsx)('div', { className: f.iconContainer, children: A }),
                                                (0, n.jsx)('div', {
                                                    className: (0, s.clsx)(f.textContainer, f['textContainer_direction_'.concat(x)], { [f.textContainer_selected]: u }),
                                                    children: N,
                                                }),
                                            ],
                                        }),
                                    [f, A, x, u, N],
                                ),
                                y = (0, r.cloneElement)(i, {
                                    className: (0, s.clsx)(
                                        f.item,
                                        f['item_direction_'.concat(x)],
                                        { [f.item_selected]: u, [f['item_collapsed_'.concat(x)]]: b },
                                        i.props.className,
                                    ),
                                    children: C,
                                });
                            return (0, n.jsx)('li', {
                                ref: a,
                                className: (0, s.clsx)(
                                    f.root,
                                    f['root_direction_'.concat(x)],
                                    f['root_variant_'.concat(p)],
                                    { [f.root_animate]: _, [f.root_collapsed]: b },
                                    t,
                                ),
                                'aria-current': !!u && 'page',
                                onClick: g,
                                ...h,
                                children: y,
                            });
                        }
                        ((t.NavigationItemComponent = u), (t.NavigationItem = (0, r.forwardRef)((e, t) => (0, n.jsx)(u, { forwardRef: t, ...e }))));
                    },
                    2660: (e) => {
                        e.exports = eE;
                    },
                    810: (e) => {
                        e.exports = f;
                    },
                },
                eI = {};
            function ej(e) {
                var t = eI[e];
                if (void 0 !== t) return t.exports;
                var a = (eI[e] = { exports: {} });
                return (eB[e].call(a.exports, a, a.exports, ej), a.exports);
            }
            ((ej.d = (e, t) => {
                for (var a in t) ej.o(t, a) && !ej.o(e, a) && Object.defineProperty(e, a, { enumerable: !0, get: t[a] });
            }),
                (ej.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
                (ej.r = (e) => {
                    ('undefined' != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
                        Object.defineProperty(e, '__esModule', { value: !0 }));
                }));
            var eP = {};
            (() => {
                (Object.defineProperty(eP, 'X$', { value: !0 }), (eP.Dx = eP.KB = eP.W_ = void 0));
                var e = ej(8122);
                Object.defineProperty(eP, 'W_', {
                    enumerable: !0,
                    get: function () {
                        return e.Navigation;
                    },
                });
                var t = ej(2676);
                Object.defineProperty(eP, 'KB', {
                    enumerable: !0,
                    get: function () {
                        return t.NavigationGroup;
                    },
                });
                var a = ej(9699);
                Object.defineProperty(eP, 'Dx', {
                    enumerable: !0,
                    get: function () {
                        return a.NavigationItem;
                    },
                });
            })();
            var ek = eP.W_,
                ew = eP.KB,
                eL = eP.Dx;
            eP.X$;
            var eD = a(4823),
                eO = a(71768),
                eR = a(27246),
                eM = a(24116),
                eF = a(98740),
                eU = a(57197),
                ez = a(59576),
                eW = (function (e) {
                    return (
                        (e.SEARCH = 'SEARCH'),
                        (e.HOME = 'HOME'),
                        (e.FOR_YOU_AND_TRENDS = 'FOR_YOU_AND_TRENDS'),
                        (e.CONCERTS = 'CONCERTS'),
                        (e.NON_MUSIC = 'NON_MUSIC'),
                        (e.KIDS = 'KIDS'),
                        (e.COLLECTION = 'COLLECTION'),
                        (e.PLUS = 'PLUS'),
                        (e.MUZMARKET = 'MUZMARKET'),
                        e
                    );
                })({}),
                eV = a(59518),
                eH = a(73474),
                eK = a(68243);
            let eG = () => {
                let { user: e, experiments: t, location: a, slam: i, settings: n } = (0, L.g)(),
                    { formatMessage: r } = (0, g.A)(),
                    s = ((e) => {
                        let {
                                checkExperiment: t,
                                formatMessage: a,
                                hasPlus: i,
                                isAuthorized: n,
                                isChildModeEnabled: r,
                                isMobile: s,
                                isOfflineModeEnabled: o,
                                isWebApplication: l,
                                tld: d,
                            } = e,
                            c = [],
                            u = t(K.z.WebNextNewWaveTab, 'on') || t(K.z.WebNextNewWaveTab, 'on1');
                        if (
                            (t(K.z.WebNextDisableSearch, 'on') ||
                                c.push({ id: eW.SEARCH, path: F.Z.search.href, availablePaths: [F.Z.search.href], title: a({ id: 'navigation.search' }), isEnabled: !o }),
                            c.push({
                                id: eW.HOME,
                                path: F.Z.main.href,
                                availablePaths: [F.Z.main.href],
                                title: a(u ? { id: 'navigation.page-my-vibe' } : { id: 'navigation.page-main' }),
                                isEnabled: !o,
                            }),
                            u)
                        ) {
                            let e = n ? eH.p.MAIN : eH.p.MAIN_NOLOGIN,
                                t = (0, eK.u)('/landing/:skeleton', { params: { skeleton: e } }).href;
                            c.push({ id: eW.FOR_YOU_AND_TRENDS, path: t, availablePaths: [t], title: a({ id: 'navigation.page-for-you-and-trends' }), isEnabled: !o });
                        }
                        return (
                            t(K.z.WebNextConcertsTab, 'on') &&
                                !t(K.z.WebNextDisableConcertsTab, 'on') &&
                                i &&
                                c.push({
                                    id: eW.CONCERTS,
                                    path: F.Z.concerts.href,
                                    availablePaths: [F.Z.concerts.href],
                                    title: a({ id: 'entity-names.concerts' }),
                                    isEnabled: !o,
                                }),
                            t(K.z.WebNextDisableNonMusic, 'on') ||
                                c.push({
                                    id: eW.NON_MUSIC,
                                    path: '/non-music',
                                    availablePaths: ['/non-music'],
                                    title: a({ id: 'entity-names.podcasts-and-books' }),
                                    isEnabled: !o,
                                }),
                            !t(K.z.WebNextDisableKids, 'on') &&
                                r &&
                                c.push({ id: eW.KIDS, path: F.Z.kids.href, availablePaths: [F.Z.kids.href], title: a({ id: 'kids.for-kids' }), isEnabled: !o }),
                            !t(K.z.WebNextDisableCollection, 'on') &&
                                n &&
                                c.push({
                                    id: eW.COLLECTION,
                                    path: F.Z.collection.href,
                                    availablePaths: [F.Z.collection.href, F.Z.mymusic.href],
                                    title: a({ id: 'navigation.page-collection' }),
                                    isEnabled: !0,
                                }),
                            !t(K.z.WebNextDisablePlus, 'on') &&
                                t(K.z.WebNextPlusOptionsMarketplace, 'on') &&
                                l &&
                                !s &&
                                i &&
                                c.push({ id: eW.PLUS, path: '/plus', availablePaths: ['/plus'], title: a({ id: 'navigation.page-plus' }), isEnabled: !0 }),
                            t(K.z.WebNextMarketLanding, 'on') &&
                                'ru' === d &&
                                !s &&
                                n &&
                                c.push({
                                    id: eW.MUZMARKET,
                                    path: F.Z.muzmarket.href,
                                    availablePaths: [F.Z.muzmarket.href],
                                    title: a({ id: 'navigation.page-muzmarket' }),
                                    isEnabled: !o,
                                }),
                            c
                        );
                    })({
                        checkExperiment: (e, a) => t.checkExperiment(e, a),
                        formatMessage: r,
                        hasPlus: e.hasPlus,
                        isAuthorized: e.isAuthorized,
                        isChildModeEnabled: e.settings.isChildModeEnabled,
                        isMobile: !!n.isMobile,
                        isOfflineModeEnabled: !!i.isOfflineModeEnabled,
                        isWebApplication: !1,
                        tld: a.tld,
                    }),
                    o = t.checkExperiment(K.z.WebNextNewWaveTab, 'on') || t.checkExperiment(K.z.WebNextNewWaveTab, 'on1'),
                    l = {
                        [eW.SEARCH]: () => ({
                            icon: 'search',
                            iconSelected: 'search_selected',
                            iconNewVersion: 'navigationSearch',
                            iconNewVersionSelected: 'navigationSearch',
                            analyticsParams: { to: eg.AppScreen.SearchScreen, entityType: eg.EntityTypes.Search },
                        }),
                        [eW.HOME]: () => {
                            let e = o && t.checkExperiment(K.z.WebNextNdaLabelOnWaveTab, 'on') ? 'navigationMyVibeNDA' : 'navigationMyVibe';
                            return {
                                icon: 'home',
                                iconSelected: 'home_selected',
                                iconNewVersion: o ? e : 'navigationForYouAndTrends',
                                iconNewVersionSelected: o ? e : 'navigationForYouAndTrends_selected',
                                analyticsParams: { to: o ? eg.AppScreen.WaveLandingScreen : eg.AppScreen.MainScreen, entityType: eg.EntityTypes.Home },
                            };
                        },
                        [eW.FOR_YOU_AND_TRENDS]: () => ({
                            icon: 'home',
                            iconSelected: 'home_selected',
                            iconNewVersion: 'navigationForYouAndTrends',
                            iconNewVersionSelected: 'navigationForYouAndTrends_selected',
                            analyticsParams: { to: eg.AppScreen.ForYouScreen, entityType: eg.EntityTypes.Home },
                        }),
                        [eW.CONCERTS]: () => ({
                            icon: 'ticket',
                            iconSelected: 'ticket_selected',
                            iconNewVersion: 'navigationConcerts',
                            iconNewVersionSelected: 'navigationConcerts_selected',
                            analyticsParams: { to: eg.AppScreen.ConcertsLandingScreen, entityType: eg.EntityTypes.Concerts },
                            onboardingConfig: {
                                id: eV.h.CONCERTS_TAB,
                                text: r({ id: 'concerts.onboarding' }, { nbsp: '\xa0' }),
                                isEnabled: t.checkExperiment(K.z.WebNextConcertTabOnboarding, 'on'),
                            },
                        }),
                        [eW.NON_MUSIC]: () => ({
                            icon: 'non_music',
                            iconSelected: 'non_music_selected',
                            iconNewVersion: 'navigationNonMusic',
                            iconNewVersionSelected: 'navigationNonMusic_selected',
                            analyticsParams: { to: eg.AppScreen.NonmusicLandingScreen, entityType: eg.EntityTypes.NonMusic },
                        }),
                        [eW.KIDS]: () => ({
                            icon: 'kids',
                            iconSelected: 'kids_selected',
                            iconNewVersion: 'navigationKids',
                            iconNewVersionSelected: 'navigationKids_selected',
                            analyticsParams: { to: eg.AppScreen.KidsLandingScreen, entityType: eg.EntityTypes.Kids },
                        }),
                        [eW.COLLECTION]: () => ({
                            icon: 'collections',
                            iconSelected: 'collections_selected',
                            iconNewVersion: 'navigationCollection',
                            iconNewVersionSelected: 'navigationCollection_selected',
                            analyticsParams: { to: eg.AppScreen.CollectionLandingScreen, entityType: eg.EntityTypes.Collection },
                        }),
                        [eW.PLUS]: () => ({
                            icon: 'plusOutlined',
                            iconSelected: 'plusOutlined',
                            iconNewVersion: 'navigationPlus',
                            iconNewVersionSelected: 'navigationPlus',
                            analyticsParams: { to: eg.AppScreen.PlusScreen, entityType: eg.EntityTypes.Plus },
                        }),
                        [eW.MUZMARKET]: () => ({
                            icon: 'navigationMuzmarket',
                            iconSelected: 'navigationMuzmarket',
                            iconNewVersion: 'navigationMuzmarket',
                            iconNewVersionSelected: 'navigationMuzmarket',
                            analyticsParams: { to: eg.AppScreen.MuzmarketScreen, entityType: eg.EntityTypes.Muzmarket },
                        }),
                    };
                return s.map((e) => ({ ...e, ...l[e.id]() }));
            };
            var e$ = a(48322);
            let eY = () => {
                let e = (0, e$.D)(),
                    t = (0, h.usePathname)();
                return (0, x.useCallback)((a) => a.some((a) => (a === F.Z.main.href ? a === t : e.startsWith(a))), [e, t]);
            };
            var eq = a(32156),
                eZ = a(61258),
                eX = a(4008),
                eQ = a(90153);
            let eJ = () => {
                    let e = (0, eN.st)(),
                        { hash: t } = (0, eN.gf)(),
                        a = (0, en.U)(),
                        { location: i } = (0, L.g)();
                    return (0, x.useCallback)(
                        (n, r) => {
                            if (!e || !t) return;
                            let s = (0, ef.F)({
                                params: ((e) => {
                                    let { isNotFound: t, entityType: a, to: i, hash: n } = e;
                                    return t
                                        ? {
                                              entityType: eg.EntityTypes.Error,
                                              entityId: eg.EntityTypes.Error,
                                              hash: n,
                                              pageId: eg.AppScreen.PageNotFoundScreen,
                                              pageStyle: eg.PageStyles.Fullscreen,
                                              pagePlacement: eg.PagePlacements.Fullscreen,
                                              mainObjectType: eg.DomainObjectType.NonApplicable,
                                              mainObjectId: eg.DomainObjectType.NonApplicable,
                                              from: eg.AppScreen.PageNotFoundScreen,
                                              to: i,
                                          }
                                        : {
                                              entityType: a,
                                              entityId: a,
                                              hash: n,
                                              pageId: eg.AppScreen.Sidebar,
                                              pageStyle: eg.PageStyles.Bar,
                                              pagePlacement: eg.PagePlacements.Left,
                                              from: eg.AppScreen.Sidebar,
                                              to: i,
                                          };
                                })({ isNotFound: i.isNotFound, entityType: n, to: r, hash: t }),
                                logger: a,
                                context: 'useSendEventOnNavbarNavigated',
                            });
                            s && (0, eQ.ID)(e.evgenInstance, s);
                        },
                        [e, t, a, i.isNotFound],
                    );
                },
                e0 = {
                    [eW.SEARCH]: N.e8.navbar.NAVBAR_NAVIGATION_ITEM_SEARCH,
                    [eW.HOME]: N.e8.navbar.NAVBAR_NAVIGATION_ITEM_HOME,
                    [eW.FOR_YOU_AND_TRENDS]: N.e8.navbar.NAVBAR_NAVIGATION_ITEM_FOR_YOU_AND_TRENDS,
                    [eW.CONCERTS]: N.e8.navbar.NAVBAR_NAVIGATION_ITEM_CONCERTS,
                    [eW.NON_MUSIC]: N.e8.navbar.NAVBAR_NAVIGATION_ITEM_NON_MUSIC,
                    [eW.KIDS]: N.e8.navbar.NAVBAR_NAVIGATION_ITEM_KIDS,
                    [eW.COLLECTION]: N.e8.navbar.NAVBAR_NAVIGATION_ITEM_COLLECTION,
                    [eW.PLUS]: N.e8.navbar.NAVBAR_NAVIGATION_ITEM_PLUS,
                    [eW.MUZMARKET]: N.e8.navbar.NAVBAR_NAVIGATION_ITEM_MUZMARKET,
                },
                e1 = (e) => {
                    let { padding: t, placement: a } = e;
                    return { shiftOptions: { padding: t }, offsetOptions: t, flipOptions: { fallbackAxisSideDirection: 'start', padding: t }, placement: a };
                },
                e2 = e1({ placement: 'right', padding: 8 });
            var e5 = a(24607),
                e3 = a.n(e5);
            let e4 = (e) => {
                let { children: t } = e;
                return (0, m.jsxs)('span', {
                    className: e3().root,
                    children: [t, (0, m.jsx)(I.HL, { variant: 'span', type: 'controls', size: 'xxs', weight: 'medium', className: e3().badge, children: 'BETA' })],
                });
            };
            var e9 = a(34284),
                e6 = a(46151),
                e7 = a(89053),
                e8 = a.n(e7);
            let te = { width: 20, height: 8, tipRadius: 2, fill: 'var(--ym-background-color-primary-enabled-tooltip)' },
                tt = (0, v.PA)((e) => {
                    let { config: t, children: a } = e,
                        { formatMessage: i } = (0, g.A)(),
                        {
                            settings: { isMobile: n },
                        } = (0, L.g)(),
                        { compositePlayerBarRef: r } = (0, k.g)(),
                        { setIsOnboardingOpened: s } = (0, e6.w)(),
                        [o, l] = (0, eS.d)(),
                        d = (0, e9.z)({ id: t.id, ref: o }),
                        [c, u] = (0, x.useState)(d && t.isEnabled),
                        _ = (0, C.c)((e) => {
                            (null == e || e.stopPropagation(), u(!1), s(!1));
                        }),
                        p = (0, C.c)((e) => {
                            e || _();
                        });
                    return (0, m.jsxs)(B.m_, {
                        placement: n ? 'top' : 'right',
                        arrowProps: te,
                        offsetOptions: n ? 15 : -10,
                        isHoverEnabled: !1,
                        open: c,
                        onOpenChange: p,
                        enableAriaDescribedby: !0,
                        referenceRef: l,
                        children: [
                            a,
                            (0, m.jsxs)(B.ZI, {
                                className: e8().tooltip,
                                rootNode: n ? r : void 0,
                                children: [
                                    (0, m.jsx)(S.$, {
                                        icon: (0, m.jsx)(T.I, { variant: 'close', size: 'xxs' }),
                                        onClick: _,
                                        variant: 'text',
                                        withRipple: !1,
                                        className: e8().button,
                                        'aria-label': i({ id: 'interface-actions.close' }),
                                    }),
                                    (0, m.jsx)(I.HL, { className: e8().text, variant: 'span', children: t.text }),
                                ],
                            }),
                        ],
                    });
                }),
                ta = (e) => {
                    let { config: t, children: a } = e;
                    return t ? (0, m.jsx)(tt, { config: t, children: a }) : a;
                };
            var ti = a(68905),
                tn = a(28376),
                tr = a(2783),
                ts = a(89562);
            function to(e, t) {
                var a = Object.create(null);
                return (
                    e &&
                        x.Children.map(e, function (e) {
                            return e;
                        }).forEach(function (e) {
                            a[e.key] = t && (0, x.isValidElement)(e) ? t(e) : e;
                        }),
                    a
                );
            }
            function tl(e, t, a) {
                return null != a[t] ? a[t] : e.props[t];
            }
            var td =
                    Object.values ||
                    function (e) {
                        return Object.keys(e).map(function (t) {
                            return e[t];
                        });
                    },
                tc = (function (e) {
                    function t(t, a) {
                        var i = e.call(this, t, a) || this,
                            n = i.handleExited.bind(
                                (function (e) {
                                    if (void 0 === e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
                                    return e;
                                })(i),
                            );
                        return ((i.state = { contextValue: { isMounting: !0 }, handleExited: n, firstRender: !0 }), i);
                    }
                    (0, tr.A)(t, e);
                    var a = t.prototype;
                    return (
                        (a.componentDidMount = function () {
                            ((this.mounted = !0), this.setState({ contextValue: { isMounting: !1 } }));
                        }),
                        (a.componentWillUnmount = function () {
                            this.mounted = !1;
                        }),
                        (t.getDerivedStateFromProps = function (e, t) {
                            var a,
                                i,
                                n = t.children,
                                r = t.handleExited;
                            return {
                                children: t.firstRender
                                    ? to(e.children, function (t) {
                                          return (0, x.cloneElement)(t, {
                                              onExited: r.bind(null, t),
                                              in: !0,
                                              appear: tl(t, 'appear', e),
                                              enter: tl(t, 'enter', e),
                                              exit: tl(t, 'exit', e),
                                          });
                                      })
                                    : (Object.keys(
                                          (i = (function (e, t) {
                                              function a(a) {
                                                  return a in t ? t[a] : e[a];
                                              }
                                              ((e = e || {}), (t = t || {}));
                                              var i,
                                                  n = Object.create(null),
                                                  r = [];
                                              for (var s in e) s in t ? r.length && ((n[s] = r), (r = [])) : r.push(s);
                                              var o = {};
                                              for (var l in t) {
                                                  if (n[l])
                                                      for (i = 0; i < n[l].length; i++) {
                                                          var d = n[l][i];
                                                          o[n[l][i]] = a(d);
                                                      }
                                                  o[l] = a(l);
                                              }
                                              for (i = 0; i < r.length; i++) o[r[i]] = a(r[i]);
                                              return o;
                                          })(n, (a = to(e.children)))),
                                      ).forEach(function (t) {
                                          var s = i[t];
                                          if ((0, x.isValidElement)(s)) {
                                              var o = t in n,
                                                  l = t in a,
                                                  d = n[t],
                                                  c = (0, x.isValidElement)(d) && !d.props.in;
                                              l && (!o || c)
                                                  ? (i[t] = (0, x.cloneElement)(s, {
                                                        onExited: r.bind(null, s),
                                                        in: !0,
                                                        exit: tl(s, 'exit', e),
                                                        enter: tl(s, 'enter', e),
                                                    }))
                                                  : l || !o || c
                                                    ? l &&
                                                      o &&
                                                      (0, x.isValidElement)(d) &&
                                                      (i[t] = (0, x.cloneElement)(s, {
                                                          onExited: r.bind(null, s),
                                                          in: d.props.in,
                                                          exit: tl(s, 'exit', e),
                                                          enter: tl(s, 'enter', e),
                                                      }))
                                                    : (i[t] = (0, x.cloneElement)(s, { in: !1 }));
                                          }
                                      }),
                                      i),
                                firstRender: !1,
                            };
                        }),
                        (a.handleExited = function (e, t) {
                            var a = to(this.props.children);
                            e.key in a ||
                                (e.props.onExited && e.props.onExited(t),
                                this.mounted &&
                                    this.setState(function (t) {
                                        var a = (0, tn.A)({}, t.children);
                                        return (delete a[e.key], { children: a });
                                    }));
                        }),
                        (a.render = function () {
                            var e = this.props,
                                t = e.component,
                                a = e.childFactory,
                                i = (0, ti.A)(e, ['component', 'childFactory']),
                                n = this.state.contextValue,
                                r = td(this.state.children).map(a);
                            return (delete i.appear, delete i.enter, delete i.exit, null === t)
                                ? x.createElement(ts.A.Provider, { value: n }, r)
                                : x.createElement(ts.A.Provider, { value: n }, x.createElement(t, i, r));
                        }),
                        t
                    );
                })(x.Component);
            ((tc.propTypes = {}),
                (tc.defaultProps = {
                    component: 'div',
                    childFactory: function (e) {
                        return e;
                    },
                }));
            var tu = a(9612),
                t_ = a(90404),
                tm = a(50162),
                tp = a(86269),
                tv = a(64605),
                th = a(34883),
                tb = a(7462),
                tx = a(65476),
                tf = a(28816),
                tg = a(91253),
                tA = a(32641);
            let tN = () => {
                let e = (0, eN.st)(),
                    { hash: t } = (0, eN.gf)(),
                    a = (0, en.U)(),
                    {
                        settings: { isMobile: i },
                    } = (0, L.g)();
                return (0, x.useCallback)(
                    (n, r) => {
                        if (!e) return;
                        let s = (0, ef.F)({
                            params: {
                                hash: t,
                                pageId: eg.AppScreen.Sidebar,
                                sidebarSize: n || i ? eg.UIElementSizes.Small : eg.UIElementSizes.Medium,
                                from: eg.AppScreen.Sidebar,
                                to: r,
                            },
                            logger: a,
                            context: 'useSendEventOnSidebarNavigated',
                        });
                        s && (0, eA.qi)(e.evgenInstance, s);
                    },
                    [e, t, i, a],
                );
            };
            var tC = a(1444),
                ty = a(97153),
                tS = a.n(ty);
            let tT = (e) => {
                    let { children: t, entityUrl: a, ariaLabel: i, ...n } = e;
                    return a ? (0, m.jsx)(eZ.N, { href: a, className: tS().link, 'aria-label': i, ...n, children: t }) : t;
                },
                tE = (e) => {
                    let {
                            className: t,
                            cover: a,
                            title: i,
                            subtitle: n,
                            contextMenu: r,
                            isCollapsed: s,
                            withCollapseAnimation: o,
                            entityUrl: l,
                            onDoubleClick: d,
                            onClick: c,
                            forwardRef: u,
                            ariaLabel: _,
                        } = e,
                        v = eY(),
                        h = (0, x.useCallback)(
                            (e) => {
                                2 === e.detail
                                    ? null == d || d()
                                    : (e.target instanceof HTMLElement && 'IMG' !== e.target.tagName && (0, y.P)(e, tS().ripple), null == c || c(e));
                            },
                            [c, d],
                        ),
                        b = l && v([l]) ? void 0 : l;
                    return (0, m.jsxs)(tC.C, {
                        ref: u,
                        className: (0, p.$)(tS().root, { [tS().root_withoutLink]: !b }, t),
                        role: 'listitem',
                        'aria-label': b ? void 0 : _,
                        'data-test-id': N.e8.navbar.PIN_ITEM,
                        children: [
                            (0, m.jsxs)(tT, {
                                entityUrl: b,
                                ariaLabel: _,
                                onClick: h,
                                children: [
                                    (0, m.jsx)('div', { className: tS().cover, 'data-test-id': N.e8.navbar.PIN_COVER, children: a }),
                                    (0, m.jsx)('div', {
                                        className: tS().meta,
                                        children: (0, m.jsxs)('div', {
                                            className: (0, p.$)(tS().info, {
                                                [tS().info_collapsed]: s,
                                                [tS().info_animated]: o,
                                                [tS().info_withContextMenu]: (0, x.isValidElement)(r),
                                            }),
                                            children: [
                                                (0, m.jsx)(I.HL, {
                                                    'aria-hidden': !0,
                                                    className: tS().title,
                                                    variant: 'span',
                                                    type: 'controls',
                                                    size: 's',
                                                    lineClamp: 1,
                                                    'data-test-id': N.e8.navbar.PIN_TITLE,
                                                    children: i,
                                                }),
                                                (0, m.jsx)(I.HL, {
                                                    'aria-hidden': !0,
                                                    className: tS().subtitle,
                                                    variant: 'span',
                                                    type: 'controls',
                                                    size: 's',
                                                    lineClamp: 1,
                                                    'data-test-id': N.e8.navbar.PIN_SUBTITLE,
                                                    children: n,
                                                }),
                                            ],
                                        }),
                                    }),
                                ],
                            }),
                            (0, x.isValidElement)(r) &&
                                (0, m.jsx)('div', {
                                    className: (0, p.$)(tS().contextMenu, { [tS().contextMenu_hidden]: s }),
                                    'data-test-id': N.e8.navbar.PIN_CONTEXT_MENU_BUTTON,
                                    children: r,
                                }),
                        ],
                    });
                },
                tB = (0, x.forwardRef)((e, t) => (0, m.jsx)(tE, { forwardRef: t, ...e })),
                tI = (0, x.createContext)(null);
            var tj = a(13166),
                tP = a.n(tj),
                tk = a(19740),
                tw = a(27120),
                tL = a(56367);
            let tD = () => {
                    let e = (0, eN.st)(),
                        { hash: t } = (0, eN.gf)(),
                        a = (0, en.U)(),
                        {
                            settings: { isMobile: i },
                        } = (0, L.g)();
                    return (0, x.useCallback)(
                        (n) => {
                            let { actionType: r, isCollapsed: s, mainObjectType: o, mainObjectId: l } = n;
                            if (!e) return;
                            let d = {
                                hash: t,
                                actionType: r,
                                user_interaction_type: eg.UserInteractionType.Tap,
                                pageId: eg.AppScreen.Sidebar,
                                sidebarSize: s || i ? eg.UIElementSizes.Small : eg.UIElementSizes.Medium,
                            };
                            (o && (d.mainObjectType = o), l && (d.mainObjectId = l));
                            let c = (0, ef.F)({ params: d, logger: a, context: 'useSendEventOnSidebarActionPerformed' });
                            c && (0, eA.dL)(e.evgenInstance, c);
                        },
                        [e, t, i, a],
                    );
                },
                tO = (e) => {
                    let { onPinClick: t, isPinned: a } = e,
                        { formatMessage: i } = (0, g.A)(),
                        { isCollapsed: n } = (0, x.useContext)(tI) || {},
                        [r, s] = (0, x.useState)(!1),
                        o = tD(),
                        l = (0, x.useCallback)((e) => {
                            (e.preventDefault(), e.stopPropagation());
                        }, []),
                        d = (0, x.useCallback)(() => {
                            (t(), o({ actionType: eg.ActionType.Unpin, isCollapsed: null != n && n }));
                        }, [n, t, o]);
                    return (
                        (0, tw.N)(r),
                        (0, m.jsx)(tk.W1, {
                            className: (0, p.$)(tP().contextMenu, { [tP().contextMenu_visible]: r }),
                            onClick: l,
                            icon: (0, m.jsx)(T.I, { size: 'xxs', variant: 'more' }),
                            tabIndex: n ? -1 : 0,
                            'aria-hidden': n,
                            variant: 'text',
                            offsetOptions: 3,
                            open: r,
                            onOpenChange: s,
                            ariaLabel: i({ id: 'interface-actions.context-menu' }),
                            containerDataTestId: N.e8.navbar.PIN_CONTEXT_MENU,
                            children: (0, m.jsx)(tL.L, { onClick: d, isPinned: a }),
                        })
                    );
                },
                tR = (0, v.PA)((e) => {
                    var t;
                    let { className: a, album: i, forwardRef: n, tooltipOptions: r } = e,
                        { formatMessage: s } = (0, g.A)(),
                        { isCollapsed: o, withCollapseAnimation: l } = null != (t = (0, x.useContext)(tI)) ? t : {},
                        d = (0, tg.A)(i),
                        c = (0, tb.r)(i.type, tb.c.PIN),
                        u = tN(),
                        _ = ((e) =>
                            (0, x.useMemo)(() => {
                                switch (e) {
                                    case tv._.PODCAST:
                                        return eg.AppScreen.PodcastScreen;
                                    case tv._.AUDIOBOOK:
                                        return eg.AppScreen.AudiobookScreen;
                                    default:
                                        return eg.AppScreen.AlbumScreen;
                                }
                            }, [e]))(i.type),
                        v = (0, tA.Z)(i.url),
                        h = ((e) => {
                            let { albumId: t, albumUrl: a, callback: i } = e,
                                { getAlbumUrlWithSavedClid: n, checkIsCurrentAlbumPage: r } = (0, tx.I)(),
                                s = (0, tf.p)();
                            return (0, C.c)((e) => {
                                if (!t || !a) {
                                    null == i || i(e);
                                    return;
                                }
                                if (r(t)) {
                                    (null == e || e.preventDefault(), s(n(t, a)));
                                    return;
                                }
                                null == i || i(e);
                            });
                        })({ albumId: i.id, albumUrl: i.url, callback: v }),
                        b = (0, th.c)({ album: i, callback: h }),
                        f = (0, C.c)((e) => {
                            (u(null != o && o, _), b(e));
                        }),
                        A = (0, x.useMemo)(
                            () =>
                                (0, m.jsx)(tp.t, {
                                    className: tP().cover,
                                    radius: 'xs',
                                    children: (0, m.jsxs)(B.m_, {
                                        ...r,
                                        enabled: o,
                                        children: [
                                            (0, m.jsx)(tm._V, {
                                                className: tP().image,
                                                'aria-hidden': !0,
                                                src: i.coverUri,
                                                size: 100,
                                                fit: 'cover',
                                                withAvatarReplace: !0,
                                            }),
                                            (0, m.jsx)(B.ZI, {
                                                className: tP().tooltip,
                                                children: (0, m.jsx)(I.HL, {
                                                    variant: 'span',
                                                    type: 'text',
                                                    size: 's',
                                                    weight: 'medium',
                                                    lineClamp: 1,
                                                    children: i.title,
                                                }),
                                            }),
                                        ],
                                    }),
                                }),
                            [i.coverUri, i.title, o, r],
                        );
                    return (0, m.jsx)(tB, {
                        ref: n,
                        ariaLabel: s({ id: 'entity-names.album-name' }, { albumName: i.title }),
                        className: (0, p.$)(tP().root, a),
                        title: i.title,
                        entityUrl: i.url,
                        subtitle: c,
                        cover: A,
                        isCollapsed: !!o,
                        withCollapseAnimation: !!l,
                        contextMenu: (0, m.jsx)(tO, { onPinClick: d, isPinned: i.isPinned }),
                        onClick: f,
                    });
                }),
                tM = (0, x.forwardRef)((e, t) => (0, m.jsx)(tR, { forwardRef: t, ...e }));
            var tF = a(91853),
                tU = a(70390);
            let tz = (0, v.PA)((e) => {
                    var t;
                    let { className: a, artist: i, forwardRef: n, tooltipOptions: r } = e,
                        { formatMessage: s } = (0, g.A)(),
                        { isCollapsed: o, withCollapseAnimation: l } = null != (t = (0, x.useContext)(tI)) ? t : {},
                        d = (0, tU.A)(i),
                        c = tN(),
                        u = (0, tA.Z)(i.url),
                        _ = (0, tF.S)({ artist: i, callback: u }),
                        v = (0, C.c)((e) => {
                            (c(null != o && o, eg.AppScreen.ArtistScreen), _(e));
                        }),
                        h = (0, x.useMemo)(
                            () =>
                                (0, m.jsx)(tp.t, {
                                    className: tP().cover,
                                    radius: 'round',
                                    children: (0, m.jsxs)(B.m_, {
                                        ...r,
                                        enabled: o,
                                        children: [
                                            (0, m.jsx)(tm._V, {
                                                className: tP().image,
                                                'aria-hidden': !0,
                                                src: i.coverUri,
                                                size: 100,
                                                fit: 'cover',
                                                withAvatarReplace: !0,
                                            }),
                                            (0, m.jsx)(B.ZI, {
                                                className: tP().tooltip,
                                                children: (0, m.jsx)(I.HL, {
                                                    variant: 'span',
                                                    type: 'text',
                                                    size: 's',
                                                    weight: 'medium',
                                                    lineClamp: 1,
                                                    children: i.name,
                                                }),
                                            }),
                                        ],
                                    }),
                                }),
                            [i.coverUri, i.name, o, r],
                        );
                    return (0, m.jsx)(tB, {
                        ref: n,
                        ariaLabel: s({ id: 'entity-names.artist-name' }, { artistName: i.name }),
                        className: (0, p.$)(tP().root, a),
                        title: i.name,
                        entityUrl: i.url,
                        subtitle: (0, m.jsx)(A.A, { id: 'entity-names.artist' }),
                        cover: h,
                        isCollapsed: !!o,
                        withCollapseAnimation: !!l,
                        contextMenu: (0, m.jsx)(tO, { onPinClick: d, isPinned: i.isPinned }),
                        onClick: v,
                    });
                }),
                tW = (0, x.forwardRef)((e, t) => (0, m.jsx)(tz, { forwardRef: t, ...e }));
            var tV = a(73192);
            let tH = (e) => {
                    var t;
                    let { className: a, playlist: i, forwardRef: n, tooltipOptions: r } = e,
                        { formatMessage: s } = (0, g.A)(),
                        { isCollapsed: o, withCollapseAnimation: l } = null != (t = (0, x.useContext)(tI)) ? t : {},
                        d = (0, tV.A)(i),
                        c = tN(),
                        u = (0, C.c)(() => {
                            c(null != o && o, eg.AppScreen.PlaylistScreen);
                        }),
                        _ = (0, x.useMemo)(
                            () =>
                                (0, m.jsx)(tp.t, {
                                    className: tP().cover,
                                    radius: 'xs',
                                    children: (0, m.jsxs)(B.m_, {
                                        ...r,
                                        enabled: o,
                                        children: [
                                            (0, m.jsx)(tm._V, {
                                                'aria-hidden': !0,
                                                className: tP().image,
                                                src: i.coverUri,
                                                size: 100,
                                                fit: 'cover',
                                                withAvatarReplace: !0,
                                            }),
                                            (0, m.jsx)(B.ZI, {
                                                className: tP().tooltip,
                                                children: (0, m.jsx)(I.HL, {
                                                    variant: 'span',
                                                    type: 'text',
                                                    size: 's',
                                                    weight: 'medium',
                                                    lineClamp: 1,
                                                    children: i.title,
                                                }),
                                            }),
                                        ],
                                    }),
                                }),
                            [o, i.coverUri, i.title, r],
                        );
                    return (0, m.jsx)(tB, {
                        ref: n,
                        ariaLabel: s({ id: 'entity-names.playlist-name' }, { playlistName: i.title }),
                        className: (0, p.$)(tP().root, a),
                        title: i.title,
                        entityUrl: i.url,
                        subtitle: (0, m.jsx)(A.A, { id: 'entity-names.playlist' }),
                        cover: _,
                        isCollapsed: !!o,
                        withCollapseAnimation: !!l,
                        contextMenu: (0, m.jsx)(tO, { onPinClick: d, isPinned: i.isPinned }),
                        onClick: u,
                    });
                },
                tK = (0, x.forwardRef)((e, t) => (0, m.jsx)(tH, { forwardRef: t, ...e }));
            var tG = a(44989),
                t$ = a(64089),
                tY = a(19529),
                tq = a(71735),
                tZ = a(37862),
                tX = a(48922),
                tQ = a(2969),
                tJ = a(8322),
                t0 = a(40229);
            let t1 = (0, v.PA)((e) => {
                    var t;
                    let { className: a, vibe: i, forwardRef: n, tooltipOptions: r } = e,
                        s = (0, x.useId)(),
                        { formatMessage: o } = (0, g.A)(),
                        { isCollapsed: l, withCollapseAnimation: d } = null != (t = (0, x.useContext)(tI)) ? t : {},
                        [c, u] = (0, x.useState)(!1),
                        _ = (0, t$.A)(i),
                        { freeAccess: v } = (0, L.g)(),
                        { state: h, setState: b } = (0, tG.e)(!1),
                        f = (() => {
                            let e = (0, eN.st)(),
                                { hash: t } = (0, eN.gf)(),
                                a = (0, en.U)(),
                                {
                                    settings: { isMobile: i },
                                } = (0, L.g)();
                            return (0, x.useCallback)(
                                (n) => {
                                    let { isCollapsed: r, mainObjectId: s } = n;
                                    if (!e) return;
                                    let o = (0, ef.F)({
                                        params: {
                                            hash: t,
                                            pageId: eg.AppScreen.Sidebar,
                                            sidebarSize: r || i ? eg.UIElementSizes.Small : eg.UIElementSizes.Medium,
                                            mainObjectType: eg.DomainObjectType.Wave,
                                            mainObjectId: s,
                                        },
                                        logger: a,
                                        context: 'useSendEventOnSidebarStarted',
                                    });
                                    o && (0, eA.cV)(e.evgenInstance, o);
                                },
                                [e, t, i, a],
                            );
                        })(),
                        A = tD(),
                        N = (0, tQ.b)(),
                        y = (0, tq.P)(),
                        S = i.stationType === tJ.q7,
                        { isPlaying: T, togglePlay: E, isCurrent: j } = (0, w.B)({ seeds: i.seeds, pageIdForFrom: tX._Q.SIDEBAR, blockIdForFrom: tZ.U.RADIO }),
                        P = (0, C.c)(async () => {
                            var e, t;
                            return v.isVibeStartRestricted
                                ? void b(!0)
                                : (T
                                      ? A({
                                            actionType: eg.ActionType.Pause,
                                            isCollapsed: null != l && l,
                                            mainObjectType: eg.DomainObjectType.Wave,
                                            mainObjectId: null != (e = i.seeds[0]) ? e : '',
                                        })
                                      : f({ isCollapsed: null != l && l, mainObjectId: null != (t = i.seeds[0]) ? t : '' }),
                                  E());
                        }),
                        k = (0, C.c)(() => {
                            y() ||
                                (u(!0),
                                P().finally(() => {
                                    u(!1);
                                }),
                                N(!T));
                        }),
                        D = (0, x.useMemo)(
                            () => (0, m.jsx)(I.HL, { id: s, variant: 'span', type: 'controls', size: 's', lineClamp: 1, children: i.title }),
                            [s, i.title],
                        ),
                        O = (0, Y.L)(() => {
                            var e;
                            return i.shouldShowAgent && i.agent
                                ? (0, m.jsx)(tY.n, {
                                      agent: i.agent,
                                      isCurrent: j,
                                      isPlaying: T,
                                      onPlayButtonClick: k,
                                      className: (0, p.$)({ [tP().multivibeContainer]: S }),
                                      coverClassName: (0, p.$)({ [tP().multivibeCover]: S }),
                                      entityCoverClassName: (0, p.$)({ [tP().multivibeAvatar]: S }),
                                      controlClassName: (0, p.$)({ [tP().multivibeControl]: S }),
                                  })
                                : (0, m.jsx)(t0.q, {
                                      isCurrent: j,
                                      isPlaying: T,
                                      isAvailable: !0,
                                      isPlayButtonLoading: c,
                                      onPlayButtonClick: k,
                                      title: i.title,
                                      entityCoverStyle: { backgroundColor: null == (e = i.colors) ? void 0 : e.average },
                                      ariaDescribedBy: s,
                                      coverUri: i.backgroundImageUrl,
                                      radius: 'round',
                                      className: (0, p.$)({ [tP().multivibeContainer]: S }),
                                      withLoadingIndicator: !1,
                                      coverClassName: (0, p.$)({ [tP().multivibeCover]: S }),
                                      entityCoverClassName: (0, p.$)({ [tP().multivibeAvatar]: S }),
                                      controlClassName: (0, p.$)({ [tP().multivibeControl]: S }),
                                  });
                        }),
                        R = (0, Y.L)(() =>
                            (0, m.jsxs)(B.m_, {
                                ...r,
                                enabled: l,
                                children: [
                                    O,
                                    (0, m.jsx)(B.ZI, {
                                        className: tP().tooltip,
                                        children: (0, m.jsx)(I.HL, { variant: 'span', type: 'text', size: 's', weight: 'medium', lineClamp: 1, children: i.title }),
                                    }),
                                ],
                            }),
                        ),
                        M = (0, x.useCallback)(
                            () =>
                                (0, m.jsx)(tB, {
                                    ref: n,
                                    ariaLabel: o({ id: 'entity-names.vibe-name' }, { vibeName: i.title }),
                                    onDoubleClick: P,
                                    className: (0, p.$)(tP().root, a),
                                    isCollapsed: !!l,
                                    contextMenu: (0, m.jsx)(tO, { onPinClick: _, isPinned: i.isPinned }),
                                    withCollapseAnimation: !!d,
                                    title: D,
                                    subtitle: i.getDescription(o({ id: 'entity-names.my-vibe' })),
                                    cover: R,
                                }),
                            [n, P, a, l, _, i, d, D, o, R],
                        );
                    return (0, m.jsx)(eq.S, {
                        isEnabled: v.isVibeStartRestricted,
                        isOpened: h,
                        onOpenChange: b,
                        placement: 'right',
                        textVariant: 'vibe',
                        vibeTextVariant: i.stationType,
                        renderChildren: M,
                    });
                }),
                t2 = (0, x.forwardRef)((e, t) => (0, m.jsx)(t1, { forwardRef: t, ...e }));
            var t5 = a(1147),
                t3 = a.n(t5);
            let t4 = e1({ placement: 'right', padding: 20 }),
                t9 = { enter: t3().pin_enter, enterActive: t3().pin_enter_active, exit: t3().pin_exit, exitActive: t3().pin_exit_active },
                t6 = (0, v.PA)((e) => {
                    var t, a;
                    let { className: i, withCollapseAnimation: n, isCollapsed: r, style: s } = e,
                        { formatMessage: o } = (0, g.A)(),
                        { pinsCollection: l } = (0, L.g)(),
                        d = null == (t = l.items) ? void 0 : t.map(() => (0, x.createRef)()),
                        c = (0, x.useMemo)(() => ({ withCollapseAnimation: n, isCollapsed: r }), [r, n]),
                        u = l.items && l.items.length > 0,
                        _ = l.items && l.items.length >= 3;
                    return (0, m.jsx)(tI.Provider, {
                        value: c,
                        children: (0, m.jsx)('div', {
                            className: (0, p.$)(t3().root, { [t3().root_withScroll]: _, [t3().root_hasPins]: u }, i),
                            style: s,
                            'data-test-id': N.e8.navbar.PIN_LIST,
                            children: (0, m.jsx)('div', {
                                role: 'list',
                                'aria-label': o({ id: 'navigation.pins-list' }),
                                className: t3().content,
                                children: (0, m.jsx)(tc, {
                                    component: null,
                                    children:
                                        null == (a = l.items)
                                            ? void 0
                                            : a.map((e, t) => {
                                                  switch (e.type) {
                                                      case t_._.ALBUM_ITEM:
                                                          return (0, m.jsx)(
                                                              tu.A,
                                                              {
                                                                  classNames: t9,
                                                                  nodeRef: null == d ? void 0 : d[t],
                                                                  timeout: 270,
                                                                  children: (0, m.jsx)(tM, {
                                                                      className: t3().pin,
                                                                      tooltipOptions: t4,
                                                                      ref: null == d ? void 0 : d[t],
                                                                      album: e.data,
                                                                  }),
                                                              },
                                                              e.data.pinId,
                                                          );
                                                      case t_._.ARTIST_ITEM:
                                                          return (0, m.jsx)(
                                                              tu.A,
                                                              {
                                                                  classNames: t9,
                                                                  nodeRef: null == d ? void 0 : d[t],
                                                                  timeout: 270,
                                                                  children: (0, m.jsx)(tW, {
                                                                      className: t3().pin,
                                                                      tooltipOptions: t4,
                                                                      ref: null == d ? void 0 : d[t],
                                                                      artist: e.data,
                                                                  }),
                                                              },
                                                              e.data.pinId,
                                                          );
                                                      case t_._.PLAYLIST_ITEM:
                                                          return (0, m.jsx)(
                                                              tu.A,
                                                              {
                                                                  classNames: t9,
                                                                  nodeRef: null == d ? void 0 : d[t],
                                                                  timeout: 270,
                                                                  children: (0, m.jsx)(tK, {
                                                                      className: t3().pin,
                                                                      tooltipOptions: t4,
                                                                      ref: null == d ? void 0 : d[t],
                                                                      playlist: e.data,
                                                                  }),
                                                              },
                                                              e.data.pinId,
                                                          );
                                                      case t_._.WAVE_ITEM:
                                                          return (0, m.jsx)(
                                                              tu.A,
                                                              {
                                                                  classNames: t9,
                                                                  nodeRef: null == d ? void 0 : d[t],
                                                                  timeout: 270,
                                                                  children: (0, m.jsx)(t2, {
                                                                      className: t3().pin,
                                                                      tooltipOptions: t4,
                                                                      ref: null == d ? void 0 : d[t],
                                                                      vibe: e.data,
                                                                  }),
                                                              },
                                                              e.data.pinId,
                                                          );
                                                  }
                                              }),
                                }),
                            }),
                        }),
                    });
                }),
                t7 = { src: '/_next/static/media/ticket_dark.4e1b9044.png' },
                t8 = { src: '/_next/static/media/ticket_dark_selected.2b929060.png' },
                ae = { src: '/_next/static/media/ticket_light.6b4bb4f7.png' },
                at = { src: '/_next/static/media/ticket_light_selected.648fa420.png' };
            var aa = a(81501),
                ai = a.n(aa);
            let an = (e) => {
                    let { isSelected: t, forwardRef: a } = e,
                        { theme: i } = (0, V.W)(),
                        n = (0, Y.L)(() => {
                            switch (i) {
                                case U.S.Dark:
                                    if (t) return t8.src;
                                    return t7.src;
                                case U.S.Light:
                                    if (t) return at.src;
                                    return ae.src;
                            }
                        });
                    return (0, m.jsx)(tm._V, { ref: a, className: ai().root, fit: 'contain', withLoadingIndicator: !1, src: n });
                },
                ar = (0, x.forwardRef)((e, t) => (0, m.jsx)(an, { forwardRef: t, ...e }));
            var as = a(912),
                ao = a.n(as),
                al = a(82273),
                ad = (function (e) {
                    return ((e.WINDOWS = 'WINDOWS'), (e.MACOS = 'MACOS'), (e.UNKNOWN = 'UNKNOWN'), e);
                })({}),
                ac = a(54773),
                au = a.n(ac);
            let a_ = { exit: au().bar_exit, exitActive: au().bar_exit_active, enter: au().bar_enter, enterActive: au().bar_enter_active },
                am = { exit: au().button_exit, exitActive: au().button_exit_active, enter: au().button_enter, enterActive: au().button_enter_active },
                ap = (e) => {
                    let { className: t, children: a, button: i, isCollapsed: n, barClassName: r } = e,
                        s = (0, x.useRef)(null),
                        o = (0, x.useRef)(null);
                    return (0, m.jsxs)('div', {
                        className: (0, p.$)(au().root, t),
                        children: [
                            (0, m.jsx)(tu.A, {
                                nodeRef: o,
                                in: n,
                                timeout: 150,
                                classNames: am,
                                unmountOnExit: !0,
                                children: (0, m.jsx)('div', { className: (0, p.$)(au().button), ref: o, children: i }),
                            }),
                            (0, m.jsx)(tu.A, {
                                nodeRef: s,
                                in: !n,
                                timeout: 150,
                                classNames: a_,
                                unmountOnExit: !0,
                                children: (0, m.jsx)('div', { className: (0, p.$)(au().bar, r), ref: s, children: a }),
                            }),
                        ],
                    });
                },
                av = (e) => {
                    switch (e) {
                        case ad.MACOS:
                            return 'macos';
                        case ad.WINDOWS:
                            return 'windows';
                        default:
                            return 'musicLogo';
                    }
                },
                ah = (e) => {
                    let { formatMessage: t } = (0, g.A)();
                    switch (e) {
                        case ad.MACOS:
                            return t({ id: 'sidebar.download-macos' });
                        case ad.WINDOWS:
                            return t({ id: 'sidebar.download-windows' });
                        default:
                            return t({ id: 'sidebar.download-app' });
                    }
                };
            var ab = a(43334),
                ax = a.n(ab);
            let af = (e) => {
                    let { variant: t, forwardRef: a, onDownloadClick: i, onCloseClick: n } = e,
                        { formatMessage: r } = (0, g.A)(),
                        s = ah(t),
                        o = (0, x.useMemo)(() => {
                            let e = { span: (e) => (0, m.jsx)('span', { className: ax().textBright, children: e }) };
                            switch (t) {
                                case ad.MACOS:
                                    return r({ id: 'sidebar.download-macos-formatted' }, e);
                                case ad.WINDOWS:
                                    return r({ id: 'sidebar.download-windows-formatted' }, e);
                                default:
                                    return r({ id: 'sidebar.download-app-formatted' }, e);
                            }
                        }, [r, t]);
                    return (0, m.jsx)('section', {
                        ref: a,
                        'aria-label': s,
                        children: (0, m.jsxs)(tp.t, {
                            radius: 'm',
                            className: ax().root,
                            children: [
                                (0, m.jsx)(S.$, {
                                    color: 'secondary',
                                    radius: 'round',
                                    variant: 'text',
                                    size: 'xxxs',
                                    className: ax().closeButton,
                                    icon: (0, m.jsx)(T.I, { variant: 'close', size: 'xxs', className: ax().closeButtonIcon }),
                                    withRipple: !1,
                                    onClick: n,
                                    'aria-label': r({ id: 'interface-actions.close' }),
                                }),
                                (0, m.jsx)(I.HL, { variant: 'div', className: ax().text, size: 'm', children: o }),
                                (0, m.jsx)(S.$, {
                                    color: 'secondary',
                                    radius: 'xxxl',
                                    size: 'xs',
                                    variant: 'default',
                                    role: 'link',
                                    withRipple: !0,
                                    flexIcon: !0,
                                    'aria-label': s,
                                    onClick: i,
                                    icon: (0, m.jsx)(T.I, { variant: av(t), size: 'xxs', className: ax().downloadButtonIcon }),
                                    'data-test-id': N.e8.navbar.DOWNLOAD_APP_BUTTON_ENLARGED,
                                    children: (0, m.jsx)(I.HL, {
                                        variant: 'span',
                                        className: ax().downloadButtonText,
                                        size: 'm',
                                        children: (0, m.jsx)(A.A, { id: 'offline.download' }),
                                    }),
                                }),
                            ],
                        }),
                    });
                },
                ag = (0, x.forwardRef)((e, t) => (0, m.jsx)(af, { forwardRef: t, ...e }));
            var aA = a(69200),
                aN = a.n(aA);
            let aC = (e) => {
                    let { variant: t, onDownloadClick: a } = e,
                        i = ah(t),
                        n = (0, x.useMemo)(() => av(t), [t]);
                    return (0, m.jsxs)(tp.t, {
                        radius: 'm',
                        className: aN().root,
                        children: [
                            (0, m.jsx)(T.I, { variant: n, className: aN().icon }),
                            (0, m.jsxs)(B.m_, {
                                placement: 'left',
                                offsetOptions: 4,
                                children: [
                                    (0, m.jsx)(S.$, {
                                        className: aN().button,
                                        color: 'secondary',
                                        radius: 'round',
                                        size: 'xs',
                                        variant: 'default',
                                        role: 'link',
                                        withRipple: !0,
                                        flexIcon: !0,
                                        onClick: a,
                                        icon: (0, m.jsx)(T.I, { variant: 'download', size: 'xxs', className: aN().buttonIcon }),
                                        'aria-label': i,
                                        'data-test-id': N.e8.navbar.DOWNLOAD_APP_BUTTON_MINIMIZED,
                                    }),
                                    (0, m.jsx)(B.ZI, {
                                        children: (0, m.jsx)(I.HL, { variant: 'span', type: 'text', size: 's', weight: 'medium', lineClamp: 1, children: i }),
                                    }),
                                ],
                            }),
                        ],
                    });
                },
                ay = (0, v.PA)((e) => {
                    var t;
                    let { isCollapsed: a } = e,
                        { settings: i } = (0, L.g)(),
                        n = (0, eb.N)(),
                        r = n.get(eh.oo),
                        s = n.get(eh.V4),
                        [o, l] = (0, x.useState)(!1),
                        d = (() => {
                            let e = (0, eN.st)(),
                                { hash: t } = (0, eN.gf)(),
                                a = (0, en.U)();
                            return (0, x.useCallback)(() => {
                                if (!e || !t) return;
                                let i = (0, ef.F)({
                                    params: {
                                        entityType: eg.EntityTypes.Error,
                                        entityId: eg.EntityTypes.Error,
                                        hash: t,
                                        pageId: eg.AppScreen.PageNotFoundScreen,
                                        pageStyle: eg.PageStyles.Fullscreen,
                                        pagePlacement: eg.PagePlacements.Fullscreen,
                                        mainObjectType: eg.DomainObjectType.NonApplicable,
                                        mainObjectId: eg.DomainObjectType.NonApplicable,
                                        from: eg.AppScreen.PageNotFoundScreen,
                                        to: eg.AppScreen.AppDownloadScreen,
                                    },
                                    logger: a,
                                    context: 'useSendEventOnDownloadScreenNavigated',
                                });
                                i && (0, eQ.ID)(e.evgenInstance, i);
                            }, [e, t, a]);
                        })(),
                        c = (0, x.useMemo)(() => {
                            var e;
                            switch (null == (e = i.browserInfo) ? void 0 : e.OSFamily) {
                                case 'MacOS':
                                    return ad.MACOS;
                                case 'Windows':
                                    return ad.WINDOWS;
                                default:
                                    return ad.UNKNOWN;
                            }
                        }, [null == (t = i.browserInfo) ? void 0 : t.OSFamily]),
                        u = (0, al._)(s.downloadDesktop.url),
                        _ = (0, x.useCallback)(() => {
                            (d(), window.open(u, '_blank', 'noreferrer noopener'));
                        }, [d, u]),
                        p = (0, x.useCallback)(() => {
                            (r.set(ex.c.NavbarDownloadBarIsHidden, !0, { expires: 30 }), l(!0));
                        }, [r]);
                    return o
                        ? null
                        : (0, m.jsx)(ap, {
                              isCollapsed: a,
                              button: (0, m.jsx)(aC, { variant: c, onDownloadClick: _ }),
                              children: (0, m.jsx)(ag, { variant: c, onDownloadClick: _, onCloseClick: p }),
                          });
                });
            var aS = a(79856),
                aT = a(55475),
                aE = a.n(aT);
            let aB = 'PLUSBAR_BUTTON_INTERSECTION_PROPERTY_ID',
                aI = (0, v.PA)((e) => {
                    let { shouldFetchOffers: t, ...a } = e,
                        { user: i } = (0, L.g)(),
                        [n, r] = (0, eS.d)(),
                        { formatMessage: s } = (0, g.A)(),
                        {
                            mainText: o,
                            isShimmerVisible: l,
                            isShimmerActive: d,
                            openPaymentWidgetModal: c,
                            saveOfferAndAuthorize: u,
                        } = (0, eF.D)({ storeName: 'music', isEnabled: t, offerElement: { element: n, intersectionPropertyId: aB } }),
                        _ = (0, Y.L)(() => o || s({ id: 'authorization.start-button' })),
                        p = (0, C.c)(() => {
                            if (!i.isAuthorized) return void u();
                            c();
                        });
                    return l
                        ? (0, m.jsx)(aS.W, { className: aE().plusButtonShimmer, isActive: d, radius: 'xxxl' })
                        : (0, m.jsx)(S.$, {
                              className: aE().root,
                              isBlock: !0,
                              radius: 'xxxl',
                              size: 'm',
                              color: 'plus',
                              onClick: p,
                              ref: r,
                              'data-intersection-property-id': aB,
                              ...a,
                              children: (0, m.jsx)(I.HL, { variant: 'div', size: 's', lineClamp: 2, children: _ }),
                          });
                });
            function aj() {
                return (aj = Object.assign
                    ? Object.assign.bind()
                    : function (e) {
                          for (var t = 1; t < arguments.length; t++) {
                              var a = arguments[t];
                              for (var i in a) ({}).hasOwnProperty.call(a, i) && (e[i] = a[i]);
                          }
                          return e;
                      }).apply(null, arguments);
            }
            aI.displayName = 'PlusNavbarButton';
            let aP = function (e) {
                return x.createElement(
                    'svg',
                    aj({ viewBox: '0 0 58 24', fill: 'none', xmlns: 'http://www.w3.org/2000/svg' }, e),
                    x.createElement(
                        'g',
                        { clipPath: 'url(#clip0_2521_25547)' },
                        x.createElement(
                            'g',
                            { clipPath: 'url(#clip1_2521_25547)' },
                            i || (i = x.createElement('rect', { x: 33.5005, width: 24, height: 24, rx: 12, fill: 'white' })),
                            n ||
                                (n = x.createElement('path', {
                                    d: 'M40.4184 5.14279C41.6821 4.20644 43.1756 3.6404 44.7322 3.49976V6.07553C43.726 6.20598 42.765 6.59121 41.943 7.20031C40.9138 7.96298 40.1569 9.03624 39.7839 10.2618C39.411 11.4873 39.4419 12.8003 39.8719 14.007C40.3019 15.2137 41.1084 16.2502 42.1723 16.9637C43.2362 17.6773 44.5013 18.03 45.7809 17.9698C47.0605 17.9097 48.2869 17.4399 49.2792 16.6298C50.2716 15.8197 50.9773 14.712 51.2922 13.4703C51.5119 12.6042 51.5334 11.7049 51.3613 10.8378L53.5243 9.09892L53.5229 9.0849C54.1067 10.691 54.1959 12.4383 53.7744 14.1C53.3245 15.8738 52.3163 17.4561 50.8987 18.6135C49.4811 19.7708 47.7291 20.4419 45.9011 20.5278C44.0731 20.6137 42.2658 20.1099 40.7459 19.0906C39.2261 18.0713 38.074 16.5905 37.4597 14.8666C36.8453 13.1428 36.8013 11.2671 37.334 9.51633C37.8668 7.76555 38.948 6.23231 40.4184 5.14279Z',
                                    fill: '#FCCA00',
                                })),
                            r ||
                                (r = x.createElement('path', {
                                    d: 'M51.8934 6.34507L51.9025 6.36777L50.457 8.66347C49.9314 7.88453 49.227 7.23618 48.4027 6.77726V12.0016C48.4027 13.6044 47.1033 14.9038 45.5004 14.9038C43.8975 14.9038 42.5981 13.6044 42.5981 12.0016C42.5981 10.3987 43.8975 9.09931 45.5004 9.09931C46.1011 9.09931 46.6592 9.28181 47.1223 9.59441V3.61938C49.0065 3.98181 50.6703 4.96381 51.8934 6.34507Z',
                                    fill: '#FC3F1D',
                                })),
                            x.createElement(
                                'mask',
                                { id: 'mask0_2521_25547', style: { maskType: 'alpha' }, maskUnits: 'userSpaceOnUse', x: 33, y: 0, width: 25, height: 24 },
                                s || (s = x.createElement('circle', { cx: 45.5005, cy: 12, r: 12, fill: 'white' })),
                            ),
                            o || (o = x.createElement('g', { mask: 'url(#mask0_2521_25547)' })),
                            l ||
                                (l = x.createElement(
                                    'g',
                                    { clipPath: 'url(#clip2_2521_25547)' },
                                    x.createElement('rect', { width: 24, height: 24, transform: 'translate(33.5005)', fill: 'black' }),
                                    x.createElement('path', {
                                        d: 'M57.5002 3.59937L45.121 10.2255L51.5722 3.59937L47.9962 3.59937L43.6042 9.6956V3.59937L40.7002 3.59937V20.3994H43.6042V14.313L47.9962 20.3994H51.5722L45.2885 13.9815L57.5002 20.3994V17.2794L46.3623 12.811L57.5002 13.5594V10.4394L46.4328 11.1589L57.5002 6.71936V3.59937Z',
                                        fill: 'url(#paint0_radial_2521_25547)',
                                    }),
                                )),
                        ),
                    ),
                    d ||
                        (d = x.createElement(
                            'g',
                            { clipPath: 'url(#clip3_2521_25547)' },
                            x.createElement('rect', { x: 17.0005, width: 24, height: 24, rx: 12, fill: 'white' }),
                            x.createElement('path', {
                                fillRule: 'evenodd',
                                clipRule: 'evenodd',
                                d: 'M41.0005 12C41.0005 18.6274 35.6279 24 29.0005 24C22.3731 24 17.0005 18.6274 17.0005 12C17.0005 5.37258 22.3731 0 29.0005 0C30.2956 0 31.5427 0.205154 32.7112 0.584736L29.9763 9H21.9892L21.0132 12H29.0013L26.6613 19.2H29.9613L32.3013 12L41.0005 12ZM40.6224 9H33.2763L35.5662 1.95391C38.0324 3.56896 39.8677 6.06758 40.6224 9Z',
                                fill: 'url(#paint1_linear_2521_25547)',
                            }),
                        )),
                    c ||
                        (c = x.createElement('path', {
                            d: 'M12.5 24C19.1274 24 24.5 18.6274 24.5 12C24.5 5.37258 19.1274 0 12.5 0C5.87258 0 0.5 5.37258 0.5 12C0.5 18.6274 5.87258 24 12.5 24Z',
                            fill: 'black',
                        })),
                    u ||
                        (u = x.createElement('path', {
                            d: 'M18.2943 10.6431C18.2943 10.6431 21.283 14.8271 21.2703 14.8639C21.2143 15.024 21.154 15.1821 21.0895 15.338C21.0747 15.3735 17.35 12.1585 17.35 12.1585C17.35 12.1585 18.3728 19.0145 18.3525 19.0314C18.2041 19.1531 18.0528 19.2706 17.8972 19.383C17.8757 19.3986 15.6594 12.6669 15.6594 12.6669C15.6594 12.6669 12.5603 21.1641 12.5342 21.1646C12.4861 21.1654 12.4376 21.1658 12.3896 21.1658C12.2277 21.1658 12.0671 21.1616 11.9069 21.1536C11.8828 21.1523 13.7581 12.101 13.7581 12.101C13.7581 12.101 4.94181 17.5004 4.92916 17.4839C4.80269 17.3199 4.68169 17.1517 4.56617 16.9789C4.55395 16.9607 12.2686 10.4711 12.2686 10.4711C12.269 10.4716 3.15343 9.90658 3.15723 9.88756C3.19601 9.69233 3.2407 9.49879 3.29129 9.30821C3.29593 9.29003 12.0532 8.60038 12.0532 8.60038C12.0532 8.60038 5.65977 5.13649 5.67495 5.12085C5.80606 4.98689 5.94139 4.85674 6.08052 4.73039C6.09738 4.71517 13.1383 7.06726 13.1383 7.06726C13.1383 7.06726 10.9718 2.40366 11.011 2.39774C11.1691 2.3745 11.328 2.35506 11.4886 2.33985C11.5224 2.33689 15.1704 6.63623 15.1704 6.63623C15.1704 6.63623 16.3365 3.16388 16.3711 3.18036C16.5363 3.25811 16.6991 3.34009 16.8588 3.42672C16.8888 3.44278 16.9891 7.20502 16.9891 7.20502C16.9891 7.20502 19.8066 5.92333 19.8133 5.93178C19.9116 6.05814 20.0068 6.18702 20.0987 6.31887C20.1046 6.32732 18.0401 8.74829 18.0401 8.74829C18.0401 8.74829 21.6506 10.0397 21.6565 10.0735C21.6835 10.2261 21.7071 10.3794 21.7265 10.5341C21.7303 10.5658 18.2943 10.6431 18.2943 10.6431Z',
                            fill: '#FED42B',
                        })),
                    _ ||
                        (_ = x.createElement(
                            'defs',
                            null,
                            x.createElement(
                                'radialGradient',
                                {
                                    id: 'paint0_radial_2521_25547',
                                    cx: 0,
                                    cy: 0,
                                    r: 1,
                                    gradientUnits: 'userSpaceOnUse',
                                    gradientTransform: 'translate(40.7002 3.59937) rotate(45) scale(23.7588)',
                                },
                                x.createElement('stop', { offset: 0.5, stopColor: '#FF5500' }),
                                x.createElement('stop', { offset: 1, stopColor: '#BBFF00' }),
                            ),
                            x.createElement(
                                'linearGradient',
                                { id: 'paint1_linear_2521_25547', x1: 17.0005, y1: 10.4, x2: 41.0005, y2: 10.4, gradientUnits: 'userSpaceOnUse' },
                                x.createElement('stop', { stopColor: '#FF5C4D' }),
                                x.createElement('stop', { offset: 0.4, stopColor: '#EB469F' }),
                                x.createElement('stop', { offset: 1, stopColor: '#8341EF' }),
                            ),
                            x.createElement(
                                'clipPath',
                                { id: 'clip0_2521_25547' },
                                x.createElement('rect', { x: 33.5005, width: 24, height: 24, rx: 12, fill: 'white' }),
                            ),
                            x.createElement(
                                'clipPath',
                                { id: 'clip1_2521_25547' },
                                x.createElement('rect', { x: 33.5005, width: 24, height: 24, rx: 12, fill: 'white' }),
                            ),
                            x.createElement(
                                'clipPath',
                                { id: 'clip2_2521_25547' },
                                x.createElement('rect', { width: 24, height: 24, fill: 'white', transform: 'translate(33.5005)' }),
                            ),
                            x.createElement(
                                'clipPath',
                                { id: 'clip3_2521_25547' },
                                x.createElement('rect', { x: 17.0005, width: 24, height: 24, rx: 12, fill: 'white' }),
                            ),
                        )),
                );
            };
            var ak = a(7939),
                aw = a.n(ak);
            let aL = (e) => {
                    let { className: t, forwardRef: a, shouldFetchOffers: i } = e,
                        {
                            paywall: { modal: n },
                        } = (0, L.g)(),
                        { formatMessage: r } = (0, g.A)();
                    return (0, m.jsxs)('section', {
                        className: (0, p.$)(aw().root, t),
                        ref: a,
                        'aria-label': r({ id: 'plusbar.subscription-activation' }),
                        'data-test-id': N.e8.plusBar.PLUS_BAR,
                        children: [
                            (0, m.jsx)(aP, { className: aw().logos, 'aria-hidden': 'true' }),
                            (0, m.jsx)(I.HL, {
                                className: aw().title,
                                variant: 'div',
                                size: 'm',
                                weight: 'medium',
                                'data-test-id': N.e8.plusBar.PLUS_BAR_TITLE,
                                children: (0, m.jsx)(A.A, { id: 'plusbar.title', values: { br: '\n', nbsp: '\xa0' } }),
                            }),
                            (0, m.jsx)(I.HL, {
                                className: aw().addition,
                                variant: 'div',
                                size: 'xs',
                                weight: 'normal',
                                'data-test-id': N.e8.plusBar.PLUS_BAR_ADDITION,
                                children: (0, m.jsx)(A.A, { id: 'plusbar.text', values: { br: '\n', nbsp: '\xa0' } }),
                            }),
                            (0, m.jsxs)('div', {
                                className: aw().buttons,
                                children: [
                                    (0, m.jsx)(aI, { shouldFetchOffers: i, 'data-test-id': N.e8.plusBar.PLUS_BAR_OFFER_BUTTON }),
                                    (0, m.jsx)(S.$, {
                                        className: aw().button,
                                        isBlock: !0,
                                        radius: 'xxxl',
                                        size: 'm',
                                        variant: 'text',
                                        color: 'primary',
                                        withRipple: !1,
                                        onClick: n.open,
                                        'data-test-id': N.e8.plusBar.PLUS_BAR_PAYWALL_BUTTON,
                                        children: (0, m.jsx)(A.A, { id: 'interface-actions.more-details' }),
                                    }),
                                ],
                            }),
                        ],
                    });
                },
                aD = (0, x.forwardRef)((e, t) =>
                    (0, m.jsx)(eO.r, { page: eR.l.SIDEBAR, places: [eM.R.SIDEBAR_BANNER], children: (0, m.jsx)(aL, { forwardRef: t, ...e }) }),
                );
            var aO = a(19349),
                aR = a.n(aO);
            let aM = (0, v.PA)((e) => {
                let { isCollapsed: t, shouldFetchOffers: a } = e,
                    { formatMessage: i } = (0, g.A)(),
                    {
                        paywall: { modal: n },
                    } = (0, L.g)();
                return (0, m.jsx)(ap, {
                    className: aR().root,
                    isCollapsed: t,
                    button: (0, m.jsxs)(B.m_, {
                        ...e2,
                        enabled: t,
                        children: [
                            (0, m.jsx)(S.$, {
                                variant: 'text',
                                withRipple: !1,
                                size: 'xxs',
                                icon: (0, m.jsx)(T.I, { className: aR().icon, variant: 'plusOutlined' }),
                                className: (0, p.$)(aR().button, aR().important),
                                'aria-label': i({ id: 'plusbar.subscription-activation' }),
                                onClick: n.open,
                                'data-test-id': N.e8.navbar.PAYWALL_BUTTON_MINIMIZED,
                            }),
                            (0, m.jsx)(B.ZI, {
                                children: (0, m.jsx)(I.HL, {
                                    variant: 'span',
                                    type: 'text',
                                    size: 's',
                                    weight: 'medium',
                                    children: (0, m.jsx)(A.A, { id: 'plusbar.subscription-activation' }),
                                }),
                            }),
                        ],
                    }),
                    children: (0, m.jsx)(aD, { shouldFetchOffers: a }),
                });
            });
            aM.displayName = 'NavbarDesktopAnimatedPlusBar';
            var aF = a(48454),
                aU = a(65215),
                az = a.n(aU);
            let aW = (e) => {
                let { className: t, optionOffer: a } = e,
                    { formatMessage: i } = (0, g.A)(),
                    { subscriptionName: n, offerText: r, mainText: s, openPaymentWidgetModal: o } = a;
                return (0, m.jsxs)('section', {
                    className: (0, p.$)(az().root, t),
                    'aria-label': i({ id: 'plusbar.subscription-activation' }),
                    'data-test-id': N.e8.plusBar.PLUS_BAR,
                    children: [
                        (0, m.jsx)(tm._V, {
                            src: 'https://avatars.mds.yandex.net/get-music-misc/70683/img.693eab4a84d7e41b1102de79/orig',
                            alt: 'Option Icon',
                            className: az().optionIcon,
                        }),
                        (0, m.jsx)(I.HL, {
                            className: az().title,
                            variant: 'div',
                            size: 'm',
                            weight: 'medium',
                            'data-test-id': N.e8.plusBar.PLUS_BAR_TITLE,
                            children: n,
                        }),
                        (0, m.jsx)(I.HL, {
                            className: az().addition,
                            variant: 'div',
                            size: 'xs',
                            weight: 'normal',
                            'data-test-id': N.e8.plusBar.PLUS_BAR_ADDITION,
                            children: r,
                        }),
                        (0, m.jsx)('div', {
                            className: az().buttons,
                            children: (0, m.jsx)(S.$, {
                                className: az().button,
                                isBlock: !0,
                                radius: 'xxxl',
                                size: 'm',
                                variant: 'default',
                                color: 'secondary',
                                withRipple: !1,
                                onClick: o,
                                'data-test-id': N.e8.plusBar.PLUS_BAR_PAYMENT_WIDGET_BUTTON,
                                children: s,
                            }),
                        }),
                    ],
                });
            };
            var aV = a(70583),
                aH = a.n(aV);
            let aK = (0, v.PA)((e) => {
                let { optionOffer: t, isCollapsed: a, setForceUpdateElement: i } = e,
                    [n, r] = (0, x.useState)(!1),
                    s = (0, C.c)(() => {
                        r(!0);
                    }),
                    o = (0, C.c)(() => {
                        r(!1);
                    });
                return (0, m.jsx)(ap, {
                    className: aH().root,
                    isCollapsed: a,
                    button: (0, m.jsxs)(aF.AM, {
                        open: n,
                        onOpenChange: r,
                        placement: 'top',
                        offsetOptions: { mainAxis: -50, crossAxis: 0 },
                        children: [
                            (0, m.jsx)(S.$, {
                                type: 'button',
                                onMouseEnter: s,
                                onMouseLeave: o,
                                className: aH().button,
                                ref: i,
                                'data-intersection-property-id': 'PLUSBAR_OPTIONS_BUTTON_INTERSECTION_PROPERTY_ID',
                                children: (0, m.jsx)(tm._V, {
                                    src: 'https://avatars.mds.yandex.net/get-music-misc/70683/img.693eab4a84d7e41b1102de79/orig',
                                    alt: 'Option Icon',
                                    className: aH().optionIcon,
                                }),
                            }),
                            (0, m.jsx)(aF.hl, {
                                className: aH().popoverContent,
                                onMouseEnter: s,
                                onMouseLeave: o,
                                children: (0, m.jsx)(aW, { className: aH().popoverContent, optionOffer: t }),
                            }),
                        ],
                    }),
                    children: (0, m.jsx)(aW, { optionOffer: t }),
                });
            });
            aK.displayName = 'NavbarDesktopAnimatedPlusOptionsBar';
            var aG = a(89543),
                a$ = a.n(aG);
            let aY = (e) => {
                let { isCollapsed: t, isActive: a } = e;
                return (0, m.jsx)(ap, {
                    className: a$().root,
                    isCollapsed: t,
                    button: (0, m.jsx)(aS.W, { className: a$().buttonShimmer, isActive: a, radius: 'round' }),
                    children: (0, m.jsx)(aS.W, { className: a$().barShimmer, isActive: a, radius: 'xxxl' }),
                });
            };
            aY.displayName = 'NavbarDesktopAnimatedShimmerBar';
            var aq = a(14177),
                aZ = a(94218),
                aX = a(14135),
                aQ = a.n(aX);
            let aJ = () => {
                let { formatMessage: e } = (0, g.A)(),
                    t = e({ id: 'authorization.enter-title' }),
                    a = e({ id: 'authorization.enter-subtitle' });
                return (0, m.jsxs)('div', {
                    className: aQ().root,
                    'data-test-id': N.e8.unauthBar.UNAUTH_BAR,
                    children: [
                        (0, m.jsx)(x.Suspense, { children: (0, m.jsx)(aq.F, { className: aQ().userProfile, userIdClassName: aQ().userId, variant: 'desktop' }) }),
                        (0, m.jsx)(I.HL, {
                            className: aQ().title,
                            size: 'm',
                            variant: 'div',
                            weight: 'bold',
                            'data-test-id': N.e8.unauthBar.UNAUTH_BAR_TITLE,
                            children: t,
                        }),
                        (0, m.jsx)(I.HL, {
                            className: aQ().subtitle,
                            size: 'xs',
                            variant: 'div',
                            weight: 'medium',
                            'data-test-id': N.e8.unauthBar.UNAUTH_BAR_ADDITION,
                            children: a,
                        }),
                        (0, m.jsx)(aZ.H, { size: 's', isBlock: !0 }),
                    ],
                });
            };
            var a0 = a(91819),
                a1 = a.n(a0);
            let a2 = (0, v.PA)((e) => {
                let { isCollapsed: t, withUserProfileAnimation: a } = e,
                    { user: i } = (0, L.g)();
                return i.isAuthorized
                    ? (0, m.jsx)('div', {
                          className: a1().userProfileContainer,
                          children: (0, m.jsx)(aq.F, {
                              className: a1().userProfile,
                              userIdClassName: a1().userId,
                              metaClassName: (0, p.$)(a1().userMeta, { [a1().userMeta_withAnimation]: a, [a1().userMeta_collapsed]: t }),
                              withMeta: !0,
                          }),
                      })
                    : (0, m.jsx)(ap, {
                          barClassName: a1().unauthorizedBar,
                          isCollapsed: t,
                          button: (0, m.jsxs)(B.m_, {
                              ...e2,
                              enabled: t,
                              children: [
                                  (0, m.jsx)('div', { className: a1().userProfileContainer, children: (0, m.jsx)(aq.F, { className: a1().userProfile }) }),
                                  (0, m.jsx)(B.ZI, {
                                      children: (0, m.jsx)(I.HL, {
                                          variant: 'span',
                                          type: 'text',
                                          size: 's',
                                          weight: 'medium',
                                          children: (0, m.jsx)(A.A, { id: 'authorization.enter-tooltip' }),
                                      }),
                                  }),
                              ],
                          }),
                          children: (0, m.jsx)(aJ, {}),
                      });
            });
            a2.displayName = 'NavbarDesktopUserWidget';
            let a5 = (0, v.PA)((e) => {
                    var t, a, i, n, r;
                    let { className: s, forwardRef: o, isCollapsed: l, shownAnimation: d, handleClick: c } = e,
                        u = ev(),
                        _ = eY(),
                        { formatMessage: v } = (0, g.A)(),
                        h = (0, eU.j)(),
                        {
                            user: b,
                            experiments: f,
                            settings: N,
                            modals: { bestRecommedationModal: y },
                            advertBanners: {
                                banners: { brandedEntityAxeBanner: j },
                            },
                        } = (0, L.g)(),
                        [P, k] = (0, eS.d)(),
                        w = f.checkExperiment(K.z.WebNextPlusOptionsSidebar, 'on') && b.hasPlus,
                        D = (0, eF.D)({
                            storeName: 'music',
                            communicationId: 'mu-promo-kids-7d-web',
                            isEnabled: w,
                            offerElement: { element: P, intersectionPropertyId: 'PLUSBAR_OPTIONS_BUTTON_INTERSECTION_PROPERTY_ID' },
                        }),
                        O = eG(),
                        R = (0, eb.N)().get(eh.oo),
                        M = eJ(),
                        F = ((e) => {
                            let t = (0, eb.N)().get(eh.oo),
                                a = ev(),
                                [i, n] = (0, x.useState)(!1);
                            return (
                                (0, x.useEffect)(() => {
                                    !0 !== t.get(ex.c.NavbarCollapsed) && (((e || a) && !1 !== t.get(ex.c.NavbarCollapsed)) || n(!0));
                                }, [e, a, t]),
                                i
                            );
                        })(l),
                        U = b.isAuthorized && !b.hasPlus,
                        z = w && D.isShimmerVisible,
                        W = w && !D.isShimmerVisible && D.subscriptionName,
                        V = (0, eD.Q)(),
                        H = j.isVisible && j.type === ei.h.BRANDING && V.isEnabled ? (null == (t = V.data) ? void 0 : t.style) : void 0,
                        G = f.checkExperiment(K.z.WebNextPromoVeryBestRecommendations, 'on'),
                        $ = f.checkExperiment(K.z.WebNextNavbarExplicit, 'on'),
                        Y = !l && $,
                        q = (null == (a = N.browserInfo) || a.isTouch, R.get(ex.c.NavbarDownloadBarIsHidden)),
                        Z = f.checkExperiment(K.z.WebNextNewWaveTab, 'on') || f.checkExperiment(K.z.WebNextNewWaveTab, 'on1'),
                        X =
                            !(null == (i = N.browserInfo) ? void 0 : i.isTouch) &&
                            b.isAuthorized &&
                            !b.hasPlus &&
                            (null == (r = f.getExperiment(K.z.WebNextDesktopWebFreemium)) || null == (n = r.value) ? void 0 : n.closeCollection) === 'on',
                        [Q, J] = (0, x.useState)(!1),
                        [ee, et] = (0, x.useState)(null),
                        ea = (0, x.useMemo)(() => O.some((e) => e.id === eW.COLLECTION && e.isEnabled), [O]),
                        en = X && ea;
                    (0, x.useEffect)(() => {
                        X || J(!1);
                    }, [X]);
                    let er = (0, C.c)(() => (0, m.jsx)('span', { 'aria-hidden': !0 })),
                        es = (0, x.useMemo)(() => (l ? v({ id: 'sidebar.uncollapse' }) : v({ id: 'sidebar.collapse' })), [l, v]),
                        eo = (0, x.useCallback)(
                            (e, t) =>
                                e.id === eW.CONCERTS && f.checkExperiment(K.z.WebNextConcertsTicketIcon, 'on')
                                    ? (0, m.jsx)(ar, { isSelected: t })
                                    : Z
                                      ? (0, m.jsx)(T.I, { variant: t ? e.iconNewVersionSelected : e.iconNewVersion, size: 'xs' })
                                      : (0, m.jsx)(T.I, { variant: t ? e.iconSelected : e.icon, size: 'm' }),
                            [f, Z],
                        ),
                        el = (0, C.c)(() => {
                            Y && y.open();
                        }),
                        ed = (0, C.c)((e, t) => () => {
                            M(e, t);
                        }),
                        ec = (0, x.useMemo)(
                            () =>
                                (0, m.jsx)(
                                    ew,
                                    {
                                        className: (0, p.$)({ [ao().navigationGroup]: Z }),
                                        children: O.map((e) => {
                                            let t = _(e.availablePaths),
                                                a = ((e) => (e.id === eW.MUZMARKET ? (0, m.jsx)(e4, { children: e.title }) : e.title))(e),
                                                i = e.id === eW.COLLECTION && !!X && e.isEnabled,
                                                n = ed(e.analyticsParams.entityType, e.analyticsParams.to),
                                                r = !i && e.isEnabled && !t;
                                            return (0, m.jsx)(
                                                ta,
                                                {
                                                    config: e.onboardingConfig,
                                                    children: (0, m.jsx)(eL, {
                                                        'data-intersection-property-id': ez.N,
                                                        selected: t,
                                                        shownAnimation: d,
                                                        variant: 'main',
                                                        isNewVisualVersion: Z,
                                                        withRipple: Z && e.isEnabled && !t,
                                                        children: (0, m.jsxs)(eZ.N, {
                                                            ref: i ? et : void 0,
                                                            href: r ? e.path : void 0,
                                                            role: 'link',
                                                            'aria-disabled': !e.isEnabled,
                                                            tabIndex: e.isEnabled ? 0 : -1,
                                                            className: (0, p.$)({ [ao().disabledNavigationItem]: !e.isEnabled }),
                                                            onClick: i
                                                                ? (e) => {
                                                                      (e.preventDefault(), n(), J((e) => !e));
                                                                  }
                                                                : n,
                                                            'data-test-id': e0[e.id],
                                                            children: [
                                                                (0, m.jsxs)(B.m_, {
                                                                    ...e2,
                                                                    enabled: l,
                                                                    children: [
                                                                        eo(e, t),
                                                                        (0, m.jsx)(B.ZI, {
                                                                            children: (0, m.jsx)(I.HL, {
                                                                                variant: 'span',
                                                                                type: 'text',
                                                                                size: 's',
                                                                                weight: 'medium',
                                                                                children: a,
                                                                            }),
                                                                        }),
                                                                    ],
                                                                }),
                                                                (0, m.jsx)(I.HL, {
                                                                    variant: 'span',
                                                                    type: 'controls',
                                                                    size: 'm',
                                                                    weight: 'medium',
                                                                    lineClamp: 1,
                                                                    className: (0, p.$)({ [ao().title_animate]: d, [ao().title_collapsed]: l }),
                                                                    children: a,
                                                                }),
                                                            ],
                                                        }),
                                                    }),
                                                },
                                                e.id,
                                            );
                                        }),
                                    },
                                    'main',
                                ),
                            [_, l, f, f.loadingState, d, O, ed, eo, X, J],
                        ),
                        eu = (0, x.useMemo)(
                            () =>
                                u
                                    ? null
                                    : (0, x.createElement)(B.m_, {
                                          ...e2,
                                          key: 'collapseTooltip',
                                          enabled: l,
                                          isFocusEnabled: !1,
                                          children: [
                                              (0, m.jsx)(S.$, {
                                                  className: ao().collapseButton,
                                                  'aria-label': es,
                                                  radius: 'round',
                                                  color: 'secondary',
                                                  size: 'xs',
                                                  icon: (0, m.jsx)(T.I, { variant: l ? 'arrowRight' : 'arrowLeft', size: 'xxs' }),
                                                  onClick: c,
                                              }),
                                              (0, m.jsx)(B.ZI, { className: (0, p.$)({ [ao().collapseButtonTooltip_hidden]: !l }), children: es }),
                                          ],
                                      }),
                            [l, es, c, u],
                        );
                    return (0, m.jsxs)('div', {
                        className: (0, p.$)(ao().root, s),
                        style: H,
                        ref: o,
                        children: [
                            (0, m.jsxs)('div', {
                                className: ao().logoWrapper,
                                children: [
                                    (0, m.jsx)(eZ.N, {
                                        href: '/',
                                        className: ao().logoLink,
                                        'aria-label': v({ id: 'navigation.page-main' }),
                                        children: (0, m.jsx)(eT.gu, { className: ao().logo, collapsed: l, shownAnimation: d, lang: h }),
                                    }),
                                    eu,
                                ],
                            }),
                            G &&
                                (0, m.jsx)(I.HL, {
                                    variant: 'div',
                                    type: 'text',
                                    size: 'xs',
                                    weight: 'medium',
                                    className: (0, p.$)(ao().subTitle, { [ao().title_animate]: d, [ao().title_collapsed]: l, [ao().subTitle_withCursorPointer]: Y }),
                                    onClick: el,
                                    children: (0, m.jsx)(A.A, { id: 'navigation.best-recommendations' }),
                                }),
                            (0, m.jsx)('div', {
                                className: ao().scrollableContainer,
                                children: (0, m.jsxs)('div', {
                                    className: ao().scrollableContent,
                                    children: [
                                        (0, m.jsx)(ek, {
                                            className: (0, p.$)(ao().navigation, { [ao().navigation_new]: Z, [ao().navigation_gapFill]: !1 }),
                                            collapsed: l,
                                            'aria-label': v({ id: 'navigation.main-menu' }),
                                            children: ec,
                                        }),
                                        (0, m.jsx)(eX.WithOffline, {
                                            fallback: (0, m.jsx)(t6, { style: H, isCollapsed: l, withCollapseAnimation: !!d, className: ao().pinsList }),
                                        }),
                                        U && (0, m.jsx)(aM, { shouldFetchOffers: F, isCollapsed: l }),
                                        !q && !1,
                                        z && (0, m.jsx)(aY, { isCollapsed: l, isActive: D.isShimmerActive }),
                                        W && (0, m.jsx)(aK, { optionOffer: D, isCollapsed: l, setForceUpdateElement: k }),
                                    ],
                                }),
                            }),
                            (0, m.jsx)(a2, { withUserProfileAnimation: d, isCollapsed: l }),
                            en &&
                                null !== ee &&
                                (0, m.jsx)(eq.S, {
                                    isOpened: Q,
                                    onOpenChange: J,
                                    placement: 'right',
                                    positionElement: ee,
                                    textVariant: 'collectionFreemium',
                                    renderChildren: er,
                                }),
                            $ &&
                                (0, m.jsxs)(E.a, {
                                    className: ao().bestRecommendationsModal,
                                    headerClassName: ao().bestRecommendationsModalHeader,
                                    contentClassName: ao().bestRecommendationsModalContent,
                                    open: y.isOpened,
                                    onOpenChange: y.onOpenChange,
                                    onClose: y.close,
                                    size: 'fitContent',
                                    placement: 'center',
                                    overlayColor: 'full',
                                    labelClose: v({ id: 'interface-actions.close' }),
                                    children: [
                                        (0, m.jsx)(T.I, { variant: 'musicLogo', className: ao().bestRecommendationsModalLogo }),
                                        (0, m.jsx)(I.HL, {
                                            className: ao().bestRecommendationsModalText,
                                            variant: 'div',
                                            size: 'm',
                                            weight: 'normal',
                                            dangerouslySetInnerHTML: { __html: v({ id: 'about-app.explicit-content' }) },
                                        }),
                                    ],
                                }),
                        ],
                    });
                }),
                a3 = (0, x.forwardRef)((e, t) =>
                    (0, m.jsx)(eO.r, { page: eR.l.SIDEBAR, places: [eM.R.SIDEBAR_BANNER], children: (0, m.jsx)(a5, { forwardRef: t, ...e }) }),
                );
            var a4 = a(8950),
                a9 = a.n(a4);
            let a6 = (0, v.PA)((e) => {
                    let { className: t } = e,
                        { experiments: a } = (0, L.g)(),
                        i = eY(),
                        { formatMessage: n } = (0, g.A)(),
                        r = eG(),
                        s = n({ id: 'navigation.main-menu' }),
                        o = eJ(),
                        l = a.checkExperiment(K.z.WebNextNewWaveTab, 'on') || a.checkExperiment(K.z.WebNextNewWaveTab, 'on1'),
                        d = (0, x.useCallback)(
                            (e, t) =>
                                e.id === eW.CONCERTS && a.checkExperiment(K.z.WebNextConcertsTicketIcon, 'on')
                                    ? (0, m.jsx)(ar, { isSelected: t || l })
                                    : l
                                      ? (0, m.jsx)(T.I, { variant: t ? e.iconNewVersionSelected : e.iconNewVersion, size: 'xs' })
                                      : (0, m.jsx)(T.I, { variant: t ? e.iconSelected : e.icon, size: 'm' }),
                            [a, l],
                        ),
                        c = (0, C.c)((e, t) => () => {
                            o(e, t);
                        });
                    return (0, m.jsx)('div', {
                        className: (0, p.$)(a9().root, t),
                        children: (0, m.jsx)(ek, {
                            collapsed: !0,
                            direction: 'horizontal',
                            'aria-label': s,
                            children: (0, m.jsx)(ew, {
                                children: (0, m.jsxs)(m.Fragment, {
                                    children: [
                                        r.map((e) => {
                                            let t = i(e.availablePaths);
                                            return (0, m.jsx)(
                                                ta,
                                                {
                                                    config: e.onboardingConfig,
                                                    children: (0, m.jsx)(eL, {
                                                        'data-intersection-property-id': ez.N,
                                                        selected: t,
                                                        isNewVisualVersion: l,
                                                        children: (0, m.jsxs)(eZ.N, {
                                                            href: e.isEnabled && !t ? e.path : void 0,
                                                            role: 'link',
                                                            'aria-disabled': !e.isEnabled,
                                                            tabIndex: e.isEnabled ? 0 : -1,
                                                            className: (0, p.$)({ [a9().disabledNavigationItem]: !e.isEnabled }),
                                                            onClick: c(e.analyticsParams.entityType, e.analyticsParams.to),
                                                            'data-test-id': e0[e.id],
                                                            children: [
                                                                d(e, t),
                                                                (0, m.jsx)(I.HL, {
                                                                    variant: 'span',
                                                                    type: 'controls',
                                                                    size: 'm',
                                                                    weight: 'medium',
                                                                    lineClamp: 1,
                                                                    children: e.title,
                                                                }),
                                                            ],
                                                        }),
                                                    }),
                                                },
                                                e.id,
                                            );
                                        }),
                                        !l && (0, m.jsx)(eL, { children: (0, m.jsx)(aq.F, { className: a9().user, variant: 'mobile' }) }),
                                    ],
                                }),
                            }),
                        }),
                    });
                }),
                a7 = (0, v.PA)((e) => {
                    var t;
                    let { className: a, externalIsCollapsed: i, externalSetIsCollapsed: n } = e,
                        r = (0, eb.N)().get(eh.oo),
                        s = ev(),
                        {
                            settings: { isMobile: o },
                        } = (0, L.g)(),
                        [l, d] = (0, x.useState)(null != (t = r.get(ex.c.NavbarCollapsed)) ? t : s),
                        [c, u] = (0, x.useState)(!1),
                        _ = (() => {
                            let e = (0, eN.st)(),
                                { hash: t } = (0, eN.gf)(),
                                a = (0, en.U)(),
                                {
                                    settings: { isMobile: i },
                                } = (0, L.g)();
                            return (0, x.useCallback)(
                                (n) => {
                                    if (!e) return;
                                    let r = (0, ef.F)({
                                        params: {
                                            hash: t,
                                            pageId: eg.AppScreen.Sidebar,
                                            sidebarSize: n || i ? eg.UIElementSizes.Small : eg.UIElementSizes.Medium,
                                            sidebarPosition: i ? eg.UIPositions.Bottom : eg.UIPositions.Left,
                                        },
                                        logger: a,
                                        context: 'useSendEventOnSidebarOpened',
                                    });
                                    r && (0, eA.U0)(e.evgenInstance, r);
                                },
                                [e, t, i, a],
                            );
                        })(),
                        v = null != i ? i : l,
                        h = null != n ? n : d,
                        b = (0, x.useMemo)(() => (o ? a6 : a3), [o]),
                        f = (0, C.c)((e) => {
                            (e.stopPropagation(), e.preventDefault());
                            let t = !v;
                            (r.set(ex.c.NavbarCollapsed, t, { expires: 180 }), h(t), u(!0));
                        });
                    return (
                        (0, x.useEffect)(() => {
                            _(v || s);
                        }, [s, v, _]),
                        (0, m.jsx)('aside', {
                            className: (0, p.$)(ey().root, { [ey().root_collapsed]: v || s }, a),
                            'data-test-id': N.e8.navbar.NAVBAR,
                            children: (0, m.jsx)(b, { handleClick: f, isCollapsed: v || s, shownAnimation: c }),
                        })
                    );
                });
            var a8 = a(19337);
            let ie = { pp: 'g', ps: 'clni', p2: 'joqc', puid1: '', puid2: '', puid3: '' },
                it = 'adfox_175861261312993498';
            var ia = a(7050),
                ii = (function (e) {
                    return ((e.PLAYER = 'branded_player'), e);
                })({});
            let ir = (e) =>
                    (0, ia.m)(e) &&
                    e.type === ii.PLAYER &&
                    'object' == typeof e.payload &&
                    null !== e.payload &&
                    !Array.isArray(e.payload) &&
                    'thumb' in e.payload &&
                    ((e) =>
                        !!(
                            'object' == typeof e &&
                            null !== e &&
                            'href' in e &&
                            'string' == typeof e.href &&
                            'width' in e &&
                            'number' == typeof e.width &&
                            'height' in e &&
                            'number' == typeof e.height
                        ))(e.payload.thumb) &&
                    'modal' in e.payload &&
                    ((e) =>
                        null === e ||
                        !!(
                            'object' == typeof e &&
                            'imageUri' in e &&
                            'string' == typeof e.imageUri &&
                            'content' in e &&
                            'string' == typeof e.content &&
                            'primaryHref' in e &&
                            'string' == typeof e.primaryHref &&
                            'shouldShowSecondaryButton' in e &&
                            'boolean' == typeof e.shouldShowSecondaryButton &&
                            'secondaryText' in e &&
                            'string' == typeof e.secondaryText
                        ))(e.payload.modal),
                is = (0, v.PA)(() => {
                    let {
                            advertBanners: {
                                banners: { brandedPlayerBanner: e },
                            },
                        } = (0, L.g)(),
                        t = (0, C.c)(() => {
                            e.setType(ei.h.BRANDING);
                        }),
                        a = (0, C.c)((t) => {
                            (0, a8.f)(t, it, ir) && e.setPayload(t.data.payload);
                        });
                    return ((0, x.useEffect)(
                        () => () => {
                            e.reset();
                        },
                        [e],
                    ),
                    (0, x.useEffect)(
                        () => (
                            window.addEventListener('message', a),
                            () => {
                                window.removeEventListener('message', a);
                            }
                        ),
                        [a],
                    ),
                    e.isVisible)
                        ? (0, m.jsx)(X.N, { ownerId: Z.P, containerId: it, params: ie, onLoad: t, onError: e.toggleHasErrorTrue, onNoAds: e.toggleNoAdsTrue })
                        : null;
                });
            var io = a(55332),
                il = a(95329),
                id = a(53022),
                ic = a(30743),
                iu = a(48955),
                i_ = a(22266),
                im = a(88386),
                ip = a.n(im);
            let iv = (0, v.PA)((e) => {
                    let { advertData: t } = e,
                        {
                            settings: { isMobile: a },
                        } = (0, L.g)(),
                        { formatMessage: i } = (0, g.A)(),
                        n = !!t.advertiserInfoUrl || !!t.clientLegalInfo,
                        r = (0, x.useCallback)(() => {
                            window.open(t.advertiserInfoUrl, '_blank', 'noreferrer noopener');
                        }, [t.advertiserInfoUrl]);
                    return n
                        ? (0, m.jsxs)(tk.W1, {
                              className: ip().contextMenuButton,
                              size: 'xxs',
                              icon: (0, m.jsx)(T.I, { size: 'xxs', variant: 'more', className: ip().contextMenuIcon }),
                              isMobile: a,
                              ariaLabel: i({ id: 'interface-actions.context-menu' }),
                              children: [
                                  t.clientLegalInfo && (0, m.jsx)(I.HL, { variant: 'div', size: 's', className: ip().contextMenuHeader, children: t.clientLegalInfo }),
                                  t.advertiserInfoUrl &&
                                      (0, m.jsx)(tk.Dr, {
                                          onClick: r,
                                          icon: (0, m.jsx)(T.I, { variant: 'info', size: 'xxs' }),
                                          children: (0, m.jsx)(A.A, { id: 'ads.about-advertiser' }),
                                      }),
                              ],
                          })
                        : null;
                }),
                ih = (0, v.PA)((e) => {
                    var t, a, i;
                    let { className: n } = e,
                        { advert: r } = (0, L.g)();
                    return r.isAdvertDisabled(i_.f.AUDIO) || !(r.data && r.isAudioAdvert)
                        ? null
                        : (0, m.jsx)('div', {
                              className: n,
                              children: (0, m.jsx)(iu.b, {
                                  data: r.data,
                                  mediaContent: (0, m.jsxs)('div', {
                                      className: ip().imageContainer,
                                      children: [
                                          (0, m.jsx)(tm._V, {
                                              className: (0, p.$)(ip().image, { [ip().image_fallback]: !(null == (t = r.data) ? void 0 : t.iconSrc) }),
                                              'aria-hidden': !0,
                                              fit: 'cover',
                                              src: null == (a = r.data) ? void 0 : a.iconSrc,
                                              fallbackIconVariant: 'picture',
                                              alt: '',
                                          }),
                                          (0, m.jsx)(tm._V, {
                                              className: ip().backgroundImage,
                                              'aria-hidden': !0,
                                              fit: 'cover',
                                              src: null == (i = r.data) ? void 0 : i.iconSrc,
                                              fallbackIconVariant: 'picture',
                                              alt: '',
                                          }),
                                          (0, m.jsx)(iv, { advertData: r.data }),
                                      ],
                                  }),
                                  linkClassName: ip().linkButton,
                              }),
                          });
                });
            var ib = a(45219),
                ix = a(42498),
                ig = a.n(ix),
                iA = a(74196),
                iN = a(378),
                iC = a(72676),
                iy = a(99169),
                iS = a(90040),
                iT = a(57249),
                iE = a(65493),
                iB = a(65497),
                iI = a(63919),
                ij = a.n(iI),
                iP = a(49124);
            let ik = iE.default.default(
                () =>
                    Promise.resolve()
                        .then(a.bind(a, 90040))
                        .then((e) => e.DotLottieWorkerReact),
                { ssr: !1 },
            );
            {
                let e = iP.env.USE_CDN_FOR_STATIC ? 'https://yastatic-net.ru/s3/music-frontend-static/music/vundefined' : window.location.origin;
                (0, iS.setWasmUrl)(new URL(iT, e).href);
            }
            let iw = (0, v.PA)((e) => {
                let { className: t, thumbData: a, onThumbAction: i } = e,
                    { sonataState: n } = (0, L.g)(),
                    { formatMessage: r } = (0, g.A)(),
                    [s, o] = (0, x.useState)(null),
                    [l, d] = (0, x.useState)(null),
                    c = (0, x.useRef)(null),
                    u = (0, x.useRef)(null),
                    _ = (0, C.c)(() => {
                        n.status === iC.MT.PLAYING ? null == s || s.play() : null == s || s.pause();
                    });
                ((0, x.useEffect)(() => {
                    if (!a) return;
                    if ((0, iB.J)(a.href)) return void d(a.href);
                    let e = iy.z[a.href];
                    e
                        ? e().then((e) => {
                              (0, iB.J)(e) ? d(e) : d(''.concat(window.location.origin).concat(e));
                          })
                        : d(a.href);
                }, [a]),
                    (0, x.useEffect)(() => {
                        s && (s.setUseFrameInterpolation(!1), s.setRenderConfig({ devicePixelRatio: 0.1 }));
                    }, [s]),
                    (0, x.useEffect)(() => {
                        if (s)
                            return (
                                s.addEventListener('load', _),
                                () => {
                                    s.removeEventListener('load', _);
                                }
                            );
                    }, [s, _, n.status]),
                    (0, x.useEffect)(() => {
                        _();
                    }, [s, _, n.status]),
                    (0, x.useEffect)(
                        () => () => {
                            u.current && clearTimeout(u.current);
                        },
                        [],
                    ));
                let v = (0, C.c)(() => {
                        (u.current && (clearTimeout(u.current), (u.current = null)), null == i || i());
                    }),
                    h = (0, C.c)(() => {
                        i &&
                            (u.current && clearTimeout(u.current),
                            (u.current = setTimeout(() => {
                                (null == i || i(), (u.current = null));
                            }, 800)));
                    }),
                    b = (0, C.c)(() => {
                        u.current && (clearTimeout(u.current), (u.current = null));
                    }),
                    f = (0, Y.L)(() => {
                        if (a)
                            return { '--thumb-width': ''.concat(a.width, 'px'), '--thumb-height': ''.concat(a.height, 'px'), '--thumb-cursor': i ? 'pointer' : 'auto' };
                    });
                return l
                    ? i
                        ? (0, m.jsx)('div', {
                              className: ij().root,
                              style: f,
                              children: (0, m.jsx)(S.$, {
                                  ref: c,
                                  className: (0, p.$)(ij().container, t),
                                  onClick: v,
                                  onMouseEnter: h,
                                  onMouseLeave: b,
                                  withRipple: !1,
                                  'aria-label': r({ id: 'branded-player.branding-integration' }),
                                  children: (0, m.jsx)(ik, { src: l, loop: !0, dotLottieRefCallback: o, layout: { align: [0, 1] } }, l),
                              }),
                          })
                        : (0, m.jsx)('div', {
                              className: ij().root,
                              style: f,
                              children: (0, m.jsx)('div', {
                                  ref: c,
                                  className: (0, p.$)(ij().container, t),
                                  children: (0, m.jsx)(ik, { src: l, loop: !0, dotLottieRefCallback: o, layout: { align: [0, 1] } }, l),
                              }),
                          })
                    : null;
            });
            var iL = a(56267),
                iD = a.n(iL);
            let iO = (0, v.PA)((e) => {
                var t;
                let { modal: a } = e,
                    {
                        paywall: i,
                        advertBanners: {
                            banners: { brandedPlayerBanner: n },
                        },
                    } = (0, L.g)(),
                    { contentRootRef: r } = (0, k.g)(),
                    { formatMessage: s } = (0, g.A)(),
                    o = (0, tA.Z)(a.primaryHref),
                    l = (0, C.c)((e) => {
                        var t, a;
                        null == (t = (a = n.modal).onOpenChange) || t.call(a, e);
                    });
                ((e) => {
                    let { enabled: t, onChange: a } = e,
                        i = (0, h.usePathname)();
                    (0, x.useRef)(i);
                    let n = (0, C.c)(a);
                    return (
                        (0, x.useEffect)(() => {}, [t, n, i]),
                        (0, x.useEffect)(() => {
                            if (!t) return;
                            let e = window.navigation;
                            if (e)
                                return (
                                    e.addEventListener('navigate', n),
                                    () => {
                                        e.removeEventListener('navigate', n);
                                    }
                                );
                        }, [t, n])
                    );
                })({ enabled: n.modal.isOpened, onChange: n.modal.close });
                let d = { '--modal-bottom-offset': ''.concat(null == (t = n.payload) ? void 0 : t.thumb.height, 'px') };
                return (0, m.jsxs)(E.a, {
                    size: 'fitContent',
                    placement: 'default',
                    open: n.modal.isOpened,
                    onOpenChange: l,
                    className: iD().root,
                    contentClassName: iD().modalContent,
                    portalNode: r,
                    showHeader: !1,
                    closeOnOutsidePress: !1,
                    lockScroll: !1,
                    withOverlay: !1,
                    enableSwipe: !0,
                    style: d,
                    children: [
                        (0, m.jsxs)('header', {
                            children: [
                                a.imageUri && (0, m.jsx)(tm._V, { src: a.imageUri, className: iD().image }),
                                (0, m.jsx)(S.$, {
                                    className: iD().closeButton,
                                    color: 'primary',
                                    variant: 'text',
                                    radius: 'round',
                                    size: 'xxs',
                                    onClick: n.modal.close,
                                    icon: (0, m.jsx)(T.I, { variant: 'close', size: 'xs' }),
                                    'aria-label': s({ id: 'interface-actions.close' }),
                                }),
                            ],
                        }),
                        (0, m.jsx)(I.HL, { variant: 'span', className: iD().content, lineClamp: 2, children: a.content }),
                        (0, m.jsxs)('div', {
                            className: iD().actions,
                            children: [
                                (0, m.jsx)(S.$, {
                                    size: 's',
                                    color: 'primary',
                                    variant: 'default',
                                    radius: 'xxxl',
                                    onClick: o,
                                    className: iD().button,
                                    children: (0, m.jsx)(I.HL, {
                                        variant: 'span',
                                        size: 'm',
                                        lineClamp: 1,
                                        children: (0, m.jsx)(A.A, { id: 'branded-player.to-website' }),
                                    }),
                                }),
                                a.shouldShowSecondaryButton &&
                                    (0, m.jsx)(S.$, {
                                        size: 's',
                                        color: 'secondary',
                                        variant: 'default',
                                        radius: 'xxxl',
                                        onClick: i.openModal,
                                        className: iD().button,
                                        children: (0, m.jsx)(I.HL, {
                                            variant: 'span',
                                            size: 'm',
                                            lineClamp: 1,
                                            children: a.secondaryText || (0, m.jsx)(A.A, { id: 'branded-player.hide' }),
                                        }),
                                    }),
                            ],
                        }),
                    ],
                });
            });
            var iR = a(78305),
                iM = a(22191),
                iF = a(44128),
                iU = a(70208),
                iz = a(64308),
                iW = a.n(iz),
                iV = a(52843),
                iH = a(12623),
                iK = a(95731),
                iG = a.n(iK);
            let i$ = (e) => {
                    let { progress: t, position: a, duration: i, timecodeClassName: n, currentTimecodeClassName: r, progressElementWidth: s, shouldHoldTimecode: o } = e,
                        l = (0, iM.P)(a),
                        d = (0, iM.P)(i),
                        c = (0, x.useRef)(null),
                        [u, _] = (0, x.useState)(0),
                        v = (0, iV.E)(Math.round(i), Math.round(i));
                    (0, x.useEffect)(() => {
                        c.current && _(Math.round(c.current.getBoundingClientRect().width));
                    }, [v.length, s]);
                    let h = Math.round((t / 100) * s),
                        b = 0 !== s ? s - u : 0,
                        f = Math.min(Math.max(h - u / 2, 0), b),
                        g = (0, Y.L)(() => {
                            if (!o) return { '--timecode-position': ''.concat(f, 'px') };
                        });
                    return (0, m.jsxs)(m.Fragment, {
                        children: [
                            (0, m.jsx)(iH.d, {
                                role: 'text',
                                'aria-label': d,
                                value: v,
                                variant: 'end',
                                className: (0, p.$)(iG().timecode, n, iG().timecode_end, { [iG().timecode_end_hidden]: !(h < b - u / 2) }),
                            }),
                            (0, m.jsx)(iH.d, {
                                role: 'text',
                                'aria-label': l,
                                style: g,
                                ref: c,
                                value: (0, iV.E)(Math.round(a), Math.round(i)),
                                variant: 'start',
                                className: (0, p.$)(iG().timecode, iG().timecode_current, n, r, {
                                    [iG().timecode_current_animation]: u > 0,
                                    [iG().timecode_current_hidden]: o && !(h > 2 * u),
                                }),
                            }),
                        ],
                    });
                },
                iY = (0, v.PA)((e) => {
                    var t, a, i;
                    let {
                            sliderClassName: n,
                            disabled: r,
                            isMobile: s,
                            progressbarClassName: o,
                            thumbClassName: l,
                            showThumbVariant: d,
                            withTimecode: c,
                            sonataPlaybackId: u,
                        } = e,
                        _ = (0, iF.e)(),
                        v = null == _ ? void 0 : _.getState(u),
                        h = (0, x.useRef)(!1),
                        {
                            advert: b,
                            sonataState: f,
                            settings: A,
                            advertBanners: {
                                banners: { brandedPlayerBanner: y },
                            },
                        } = (0, L.g)(),
                        { formatMessage: S } = (0, g.A)(),
                        T = (0, iR.r)(),
                        [E, B] = (0, x.useState)(f.position),
                        [I, j] = (0, x.useState)(f.duration),
                        P = (0, iM.P)(Math.round(null != E ? E : 0)),
                        k = E && I ? (100 * Math.min(E, I)) / I : 0,
                        w = (0, x.useRef)(null),
                        [D, O] = (0, x.useState)(0),
                        R = D > 0,
                        { state: M, toggleTrue: F, toggleFalse: U } = (0, tG.e)(!1),
                        { state: z, toggleTrue: W, toggleFalse: V } = (0, tG.e)(!1),
                        { isVisibilityRestored: H } = (() => {
                            let { state: e, toggleTrue: t, toggleFalse: a } = (0, tG.e)(!1);
                            return (
                                (0, x.useEffect)(() => {
                                    let e = new AbortController();
                                    return (
                                        document.addEventListener(
                                            'visibilitychange',
                                            () => {
                                                document.hidden || t();
                                            },
                                            { signal: e.signal },
                                        ),
                                        () => {
                                            e.abort();
                                        }
                                    );
                                }, [t]),
                                (0, x.useEffect)(() => {
                                    if (!e) return;
                                    let t = requestAnimationFrame(() => {
                                        a();
                                    });
                                    return () => {
                                        cancelAnimationFrame(t);
                                    };
                                }, [e, a]),
                                { isVisibilityRestored: e }
                            );
                        })(),
                        K = (0, Y.L)(() => {
                            var e, t;
                            return y.isVisible && (null == (e = y.payload) ? void 0 : e.thumb)
                                ? { thumb: y.payload.thumb, onThumbAction: y.modal.open }
                                : A.selectedThumbId && A.selectedThumbId !== iU.T.DEFAULT
                                  ? { thumb: null == (t = (0, iy.r)(S).get(A.selectedThumbId)) ? void 0 : t.thumb }
                                  : void 0;
                        });
                    ((0, x.useEffect)(() => {
                        (null == _ ? void 0 : _.state.playerState.status.value) === iC.MT.PLAYING && V();
                    }, [V, null == _ ? void 0 : _.state.playerState.status.value]),
                        (0, x.useEffect)(() => {
                            let e = null == _ ? void 0 : _.state.queueState.currentEntity.onChange(W);
                            return (
                                V(),
                                () => {
                                    null == e || e();
                                }
                            );
                        }, [W, V, null == _ ? void 0 : _.state.queueState.currentEntity]));
                    let G = (0, C.c)((e, t) => {
                            b.isAdvertShown || ((h.current = !t), t ? null == _ || _.setProgress(e, u) : B(e));
                        }),
                        $ = (0, C.c)((e, t) => {
                            null !== e && null !== t && (e === 1 / 0 ? (j(0), B(0)) : (j(e), h.current || B(t)));
                        });
                    ((0, x.useEffect)(() => {
                        u || $(f.duration, f.position);
                    }, [f.duration, f.position, $, u]),
                        (0, x.useEffect)(() => {
                            var e;
                            if (!u) return;
                            let t =
                                null == v || null == (e = v.playerState)
                                    ? void 0
                                    : e.progress.onChange((e) => {
                                          e && $(e.duration, e.position);
                                      });
                            return () => {
                                null == t || t();
                            };
                        }, [u, null == v || null == (t = v.playerState) ? void 0 : t.progress, $]),
                        (0, x.useEffect)(() => {
                            var e;
                            let t =
                                null == T || null == (e = T.audioAdvertPlayback)
                                    ? void 0
                                    : e.state.playerState.progress.onChange((e) => {
                                          e && b.isAdvertShown && $(e.duration, e.position);
                                      });
                            return () => {
                                null == t || t();
                            };
                        }, [null == T || null == (a = T.audioAdvertPlayback) ? void 0 : a.state.playerState.progress, $, b.isAdvertShown]));
                    let q = (k / 100) * D - 6;
                    (0, x.useEffect)(() => {
                        let e = new ResizeObserver(() => {
                            var e, t;
                            O(Math.round(null != (t = null == (e = w.current) ? void 0 : e.clientWidth) ? t : 0));
                        });
                        return (
                            w.current && e.observe(w.current),
                            () => {
                                e.disconnect();
                            }
                        );
                    }, []);
                    let Z = {
                        '--size-thumb': ''.concat(12, 'px'),
                        '--track-progress': ''.concat(k, '%'),
                        '--thumb-position': ''.concat(q, 'px'),
                        ...((z || H) && { '--transition-disabled': 'none' }),
                    };
                    return (0, m.jsxs)('div', {
                        className: (0, p.$)(iW().root, { [iW().root_focusVisible]: M, [iW().root_isPlayingTrack]: !b.isAdvertShown }),
                        style: Z,
                        'data-test-id': N.Kq.changeTimecode.TIMECODE_WRAPPER,
                        children: [
                            !s &&
                                c &&
                                R &&
                                (0, m.jsx)(i$, {
                                    currentTimecodeClassName: K ? void 0 : (0, p.$)(iW().timecodeGroupCurrent, iW().important),
                                    timecodeClassName: iW().timecodeGroup,
                                    progress: k,
                                    position: null != E ? E : 0,
                                    duration: null != I ? I : 0,
                                    progressElementWidth: D,
                                    shouldHoldTimecode: !!K,
                                }),
                            (0, m.jsx)('div', { ref: w, className: (0, p.$)(iW().progressbar, o) }),
                            R && !K && (0, m.jsx)('div', { className: (0, p.$)(iW().thumb, l) }),
                            K &&
                                (0, m.jsx)(iw, {
                                    className: iW().brandedThumb,
                                    thumbData: null == K ? void 0 : K.thumb,
                                    onThumbAction: null == K ? void 0 : K.onThumbAction,
                                }),
                            (null == (i = y.payload) ? void 0 : i.modal) && (0, m.jsx)(iO, { modal: y.payload.modal }),
                            (0, m.jsx)(iN.A, {
                                'aria-valuetext': P,
                                onClick: U,
                                onBlur: U,
                                onFocus: F,
                                className: (0, p.$)(iW().slider, iW().important, n),
                                disabled: r || b.isAdvertShown,
                                'aria-label': S({ id: 'player-actions.timecode-control' }),
                                showThumbVariant: d,
                                onChange: G,
                                maxValue: I ? Math.round(I) : 0,
                                mode: 'deferred',
                                value: Math.round(null != E ? E : 0),
                                trackSize: 's',
                                thumbSize: 's',
                                'data-test-id': N.Kq.changeTimecode.TIMECODE_SLIDER,
                            }),
                            (0, m.jsx)('div', { className: iW().backgroundProgressbar }),
                        ],
                    });
                });
            var iq = a(45303),
                iZ = a(80346),
                iX = a(68535),
                iQ = a(11805),
                iJ = a(1456),
                i0 = a(27616),
                i1 = a(68912),
                i2 = a(39400),
                i5 = a(41812),
                i3 = a(11323),
                i4 = a(92744),
                i9 = a(90829),
                i6 = a(61748);
            let i7 = 'player-region';
            var i8 = a(9536),
                ne = a(99622),
                nt = a.n(ne);
            let na = (e) => {
                    let { className: t, ariaLabel: a, onClick: i, forwardRef: n } = e;
                    return (0, m.jsx)('div', {
                        ref: n,
                        className: (0, p.$)(nt().root, t),
                        children: (0, m.jsx)(S.$, {
                            className: nt().button,
                            radius: 'round',
                            size: 's',
                            color: 'secondary',
                            withRipple: !1,
                            'aria-label': a,
                            icon: (0, m.jsx)(T.I, { variant: 'fullscreen', size: 'xs' }),
                            onClick: i,
                            'data-test-id': N.e8.player.FULLSCREEN_PLAYER_BUTTON,
                        }),
                    });
                },
                ni = (0, x.forwardRef)((e, t) => (0, m.jsx)(na, { forwardRef: t, ...e }));
            var nn = a(10910),
                nr = a(55165),
                ns = a.n(nr);
            let no = (0, v.PA)((e) => {
                var t;
                let {
                        className: a,
                        entityMeta: i,
                        isLiked: n,
                        isDisliked: r,
                        onLikeClick: s,
                        onDislikeClick: o,
                        renderSonataControls: l,
                        withLike: d,
                        withDislike: c,
                        withExtraControls: u,
                        withFullscreen: _,
                        withContextMenu: v = !0,
                        withTrackAndArtistLinks: h = !0,
                        sonataPlaybackId: b,
                        sonataVolume: f,
                    } = e,
                    {
                        user: E,
                        sonataState: j,
                        fullscreenPlayer: P,
                        settings: { isMobileLandscapeHeight: k },
                        advert: w,
                        track: D,
                        experiments: O,
                    } = (0, L.g)(),
                    [R, M] = (0, x.useState)(!1),
                    [F, U] = (0, x.useState)(!1),
                    { formatMessage: z } = (0, g.A)(),
                    W = _ && !j.isGenerativeContext,
                    V = j.canSpeed && (null == i ? void 0 : i.isNonMusic),
                    H = (null == i ? void 0 : i.isTrackPodcast) || (null == i || null == (t = i.mainAlbum) ? void 0 : t.isPodcast),
                    G = null == i ? void 0 : i.isTrackAudiobook,
                    $ = (0, iX.d)(),
                    q = (0, i8.K)(i),
                    Z = (0, C.c)(() => {
                        D.open({ trackId: null == i ? void 0 : i.id, albumId: null == i ? void 0 : i.albumId });
                    }),
                    X = (0, C.c)((e) => {
                        e.stopPropagation();
                    }),
                    Q = (0, C.c)(async (e) => {
                        await $(j, e, b);
                    }),
                    J = (0, C.c)((e) => {
                        let t = e.target,
                            a = t instanceof Element && ['DIV', 'SECTION', 'SPAN'].includes(t.tagName);
                        i && W && a && !w.isAdvertShown && P.showFullscreenPlayerModal();
                    }),
                    ee = (0, C.c)((e) => {
                        if (!j.isGenerativeContext && i) {
                            if (((0, y.P)(e, ns().ripple), 2 === e.detail)) {
                                (D.close(), J(e));
                                return;
                            }
                            _ && 1 === e.detail && (null == i ? void 0 : i.hasTrackLink) && !P.modal.isOpened && Z();
                        }
                    }),
                    et = (0, x.useCallback)(
                        (e) => {
                            let { isPopoverEnabled: t } = e,
                                a = ''.concat(z({ id: 'interface-actions.open-sync-lyrics' }), ' ').concat(z({ id: 'warning-messages.can-break-accessibility' })),
                                n = t ? void 0 : P.showSyncLyrics;
                            return (0, m.jsx)(S.$, {
                                radius: 'round',
                                size: 'xxxs',
                                variant: 'text',
                                disabled: !(null == i ? void 0 : i.isSyncLyricsAvailableWithOfflineFeature) || k,
                                'aria-hidden': !(null == i ? void 0 : i.isSyncLyricsAvailableWithOfflineFeature),
                                withRipple: !1,
                                'aria-label': a,
                                icon: (0, m.jsx)(T.I, { variant: 'syncLyrics', size: 'xs' }),
                                onClick: n,
                                'data-test-id': N.e8.player.PLAYERBAR_DESKTOP_SYNC_LYRICS_BUTTON,
                            });
                        },
                        [z, P.showSyncLyrics, null == i ? void 0 : i.isSyncLyricsAvailableWithOfflineFeature, k],
                    ),
                    ea = (0, x.useMemo)(
                        () =>
                            (null == i ? void 0 : i.isNonMusic) || w.isAdvertShown
                                ? null
                                : E.isAuthorized && !E.hasPlus
                                  ? (0, m.jsx)(eq.S, { placement: 'top', textVariant: 'sync-lyrics', renderChildren: et })
                                  : (0, m.jsx)(i9.Z, { isEnabled: !E.isAuthorized, placement: 'top', textVariant: 'sync-lyrics', renderChildren: et }),
                        [null == i ? void 0 : i.isNonMusic, w.isAdvertShown, E.isAuthorized, et, E.hasPlus],
                    ),
                    ei = (0, x.useCallback)(
                        (e) => {
                            let { isPopoverEnabled: t } = e,
                                a = t ? void 0 : P.showPlayQueue;
                            return (0, m.jsx)(S.$, {
                                radius: 'round',
                                size: 'xxxs',
                                variant: 'text',
                                disabled: !i,
                                withRipple: !1,
                                'aria-label': z({ id: 'play-queue.title' }),
                                icon: (0, m.jsx)(T.I, { variant: 'playQueue', size: 'xs' }),
                                onClick: a,
                                'data-test-id': N.e8.player.PLAYERBAR_DESKTOP_PLAY_QUEUE_BUTTON,
                            });
                        },
                        [i, P.showPlayQueue, z],
                    ),
                    en = (0, x.useMemo)(
                        () => (w.isAdvertShown ? null : (0, m.jsx)(i9.Z, { isEnabled: !E.isAuthorized, placement: 'top', textVariant: 'openQueue', renderChildren: ei })),
                        [w.isAdvertShown, E.isAuthorized, ei],
                    ),
                    er = (0, x.useMemo)(() => {
                        if (v && i && !j.isGenerativeContext && !w.isAdvertShown)
                            return (0, m.jsx)('div', {
                                onDoubleClick: X,
                                children: (0, m.jsx)(i2._, {
                                    track: i,
                                    placement: 'top',
                                    className: ns().trackContextMenuIcon,
                                    open: R,
                                    onOpenChange: M,
                                    icon: (0, m.jsx)(T.I, { size: 'xxs', variant: 'more' }),
                                    size: 'xs',
                                    'data-test-id': N.e8.player.PLAYERBAR_DESKTOP_CONTEXT_MENU_BUTTON,
                                }),
                            });
                    }, [w.isAdvertShown, i, X, R, j.isGenerativeContext, v]),
                    es = (0, x.useMemo)(
                        () =>
                            i
                                ? G
                                    ? (0, m.jsx)(iJ.Z, {
                                          afterTitle: er,
                                          explicitSize: 'xxxs',
                                          track: i,
                                          withAuthor: !0,
                                          withSecondaryColor: !0,
                                          withArtistLink: h,
                                          withContextMenuArtists: !0,
                                      })
                                    : H
                                      ? (0, m.jsx)(i0.w, {
                                            afterTitle: er,
                                            explicitSize: 'xxxs',
                                            track: i,
                                            withDate: !1,
                                            withSecondaryColor: !0,
                                            withPodcastName: !0,
                                            withAlbumTitleLink: h,
                                        })
                                      : (0, m.jsx)(i1.j, {
                                            afterTitle: er,
                                            track: i,
                                            withSecondaryColor: !0,
                                            withAlbumLink: !1,
                                            withTrackLink: h && !j.isGenerativeContext,
                                            withArtistLink: h,
                                            withContextMenuArtists: !0,
                                        })
                                : null,
                        [er, i, G, H, j.isGenerativeContext, h],
                    ),
                    eo = (0, Y.L)(() =>
                        l
                            ? l({ isMobile: !1, entityMeta: i })
                            : (0, m.jsx)(iQ.$, {
                                  className: (0, p.$)(ns().sonataControls, ns().important),
                                  withRepeat: !0,
                                  withShuffle: !0,
                                  isMobile: !1,
                                  entityMeta: i,
                              }),
                    ),
                    el = O.checkExperiment(K.z.WebNextNewWaveTab, 'on') || O.checkExperiment(K.z.WebNextNewWaveTab, 'on1');
                return (0, m.jsx)('section', {
                    style: w.isAdvertShown ? void 0 : q,
                    className: (0, p.$)(ns().root, ns().important, a, { [ns().root_interactive]: _ }),
                    'data-test-id': N.e8.player.PLAYERBAR_DESKTOP,
                    'aria-labelledby': i7,
                    children: (0, m.jsxs)('div', {
                        className: ns().playerBar,
                        children: [
                            !j.isGenerativeContext &&
                                (0, m.jsx)(iY, {
                                    sliderClassName: ns().slider,
                                    progressbarClassName: ns().progressBar,
                                    thumbClassName: ns().thumb,
                                    disabled: !i,
                                    isMobile: !1,
                                    withTimecode: !0,
                                    sonataPlaybackId: b,
                                }),
                            (0, m.jsxs)('div', {
                                className: (0, p.$)(ns().player, { [ns().player_disabled]: !i }),
                                children: [
                                    _ && (0, m.jsx)('div', { onClick: ee, className: ns().triggerModal }),
                                    (0, m.jsx)(iA.q, { children: (0, m.jsx)(I.DZ, { variant: 'h3', id: i7, children: (0, m.jsx)(A.A, { id: 'a11y-regions.player' }) }) }),
                                    (0, m.jsx)('div', {
                                        className: ns().info,
                                        children: (0, m.jsx)('div', {
                                            className: ns().infoCard,
                                            children:
                                                i &&
                                                !w.isAdvertShown &&
                                                (0, m.jsxs)(m.Fragment, {
                                                    children: [
                                                        (0, m.jsxs)(tp.t, {
                                                            radius: 's',
                                                            className: ns().coverContainer,
                                                            'data-test-id': N.e8.player.PLAYERBAR_DESKTOP_COVER_CONTAINER,
                                                            children: [
                                                                (0, m.jsx)(i3.B, {
                                                                    className: ns().cover,
                                                                    src: i.coverUri,
                                                                    size: 100,
                                                                    fit: 'cover',
                                                                    withAvatarReplace: !0,
                                                                }),
                                                                W &&
                                                                    (0, m.jsxs)(B.m_, {
                                                                        placement: 'top',
                                                                        offsetOptions: 4,
                                                                        children: [
                                                                            (0, m.jsx)(ni, {
                                                                                ariaLabel: z({ id: 'player-actions.fullscreen-button' }),
                                                                                onClick: P.showFullscreenPlayerModal,
                                                                            }),
                                                                            (0, m.jsx)(B.ZI, { children: (0, m.jsx)(A.A, { id: 'player-actions.fullscreen' }) }),
                                                                        ],
                                                                    }),
                                                            ],
                                                        }),
                                                        (0, m.jsx)('div', { className: ns().description, children: es }),
                                                    ],
                                                }),
                                        }),
                                    }),
                                    (0, m.jsxs)('div', {
                                        className: (0, p.$)(ns().sonata, { [ns().sonata_withReversedControls]: el }),
                                        children: [
                                            d &&
                                                (0, m.jsx)(eX.WithOffline, {
                                                    fallback: (0, m.jsx)(i4.c, { disabled: !i || w.isAdvertShown, isLiked: n, onClick: s, iconSize: 'xs' }),
                                                }),
                                            eo,
                                            c &&
                                                (0, m.jsx)(eX.WithOffline, {
                                                    fallback: (0, m.jsx)(i5._, { disabled: !i || w.isAdvertShown, isDisliked: r, onClick: o, iconSize: 'xs' }),
                                                }),
                                        ],
                                    }),
                                    (0, m.jsxs)('div', {
                                        className: ns().meta,
                                        children: [
                                            u &&
                                                !j.isGenerativeContext &&
                                                !w.isAdvertShown &&
                                                (0, m.jsxs)(m.Fragment, {
                                                    children: [
                                                        V && (0, m.jsx)(i6.i, { iconSize: 'l' }),
                                                        ea,
                                                        en,
                                                        (0, m.jsx)(nn.p$, {
                                                            placement: 'bottom',
                                                            open: F,
                                                            onOpenChange: U,
                                                            icon: (0, m.jsx)(T.I, { variant: 'settings', size: 'xs' }),
                                                            size: 'xxxs',
                                                            referenceClassName: ns().settingsButton,
                                                        }),
                                                    ],
                                                }),
                                            (0, m.jsx)(iZ.r, { variant: iq.q.VERTICAL, sonataVolume: null != f ? f : j.volume, onVolumeClick: Q, playbackId: b }),
                                        ],
                                    }),
                                ],
                            }),
                        ],
                    }),
                });
            });
            var nl = a(41932),
                nd = a(65337),
                nc = a.n(nd);
            let nu = (0, v.PA)((e) => {
                    var t;
                    let { className: a, entityMeta: i, isLiked: n, onLikeClick: r, renderSonataControls: s, withLike: o, withFullscreen: l, sonataPlaybackId: d } = e,
                        { user: c, sonataState: u, fullscreenPlayer: _, advert: v } = (0, L.g)(),
                        h = c.isAuthorized && i && !v.isAdvertShown,
                        b = (null == i ? void 0 : i.isTrackPodcast) || (null == i || null == (t = i.mainAlbum) ? void 0 : t.isPodcast),
                        f = null == i ? void 0 : i.isTrackAudiobook,
                        g = (0, i8.K)(i),
                        C = (0, x.useCallback)(
                            (e) => {
                                if (v.isAdvertShown || !l) return;
                                let t = e.target,
                                    a = t instanceof Element && ['DIV', 'SECTION', 'IMG', 'SPAN'].includes(t.tagName);
                                i && a && !u.isGenerativeContext && _.showFullscreenPlayerModal();
                            },
                            [i, _, u.isGenerativeContext, v.isAdvertShown, l],
                        ),
                        y = (0, x.useMemo)(
                            () =>
                                v.isAdvertShown
                                    ? null
                                    : i
                                      ? f
                                          ? (0, m.jsx)(iJ.Z, { explicitSize: 'xxxs', track: i, withAuthor: !0, withSecondaryColor: !0, withArtistLink: !1 })
                                          : b
                                            ? (0, m.jsx)(i0.w, {
                                                  explicitSize: 'xxxs',
                                                  track: i,
                                                  withDate: !1,
                                                  withSecondaryColor: !0,
                                                  withPodcastName: !0,
                                                  withAlbumTitleLink: !1,
                                              })
                                            : (0, m.jsx)(i1.j, { withArtistLink: !1, track: i, withSecondaryColor: !0, withAlbumLink: !1 })
                                      : (0, m.jsxs)('div', {
                                            className: nc().shimmerMeta,
                                            children: [
                                                (0, m.jsx)(aS.W, { className: nc().shimmerMetaTitle }),
                                                (0, m.jsx)(aS.W, { className: nc().shimmerMetaDescription }),
                                            ],
                                        }),
                            [v.isAdvertShown, i, f, b],
                        ),
                        S = (0, Y.L)(() =>
                            v.isAdvertShown
                                ? (0, m.jsx)('div', { className: nc().infoCard })
                                : i
                                  ? (0, m.jsxs)('div', {
                                        className: nc().infoCard,
                                        children: [
                                            (0, m.jsx)(tp.t, {
                                                radius: 's',
                                                className: nc().coverContainer,
                                                children: (0, m.jsx)(i3.B, { className: nc().cover, src: i.coverUri, size: 50, fit: 'cover', withAvatarReplace: !0 }),
                                            }),
                                            (0, m.jsx)('div', { className: nc().description, children: y }),
                                        ],
                                    })
                                  : (0, m.jsxs)('div', {
                                        className: nc().infoCard,
                                        children: [
                                            (0, m.jsx)(tp.t, {
                                                radius: 's',
                                                className: nc().coverContainer,
                                                children: (0, m.jsx)(aS.W, { className: nc().shimmerCover }),
                                            }),
                                            (0, m.jsx)('div', { className: nc().description, children: y }),
                                        ],
                                    }),
                        ),
                        T = (0, Y.L)(() => (s ? s({ isMobile: !0, entityMeta: i }) : (0, m.jsx)(iQ.$, { isMobile: !0, entityMeta: i })));
                    return (0, m.jsxs)('section', {
                        style: v.isAdvertShown ? void 0 : g,
                        className: (0, p.$)(nc().root, a),
                        onClick: C,
                        'data-test-id': N.e8.player.MOBILE_PLAYERBAR,
                        children: [
                            (0, m.jsx)(iA.q, { children: (0, m.jsx)(I.DZ, { variant: 'h3', id: i7, children: (0, m.jsx)(A.A, { id: 'a11y-regions.player' }) }) }),
                            !u.isGenerativeContext &&
                                (0, m.jsx)(nl.v, {
                                    className: nc().backgroundProgress,
                                    sliderClassName: nc().sliderChangeTimeCode,
                                    isMobile: !0,
                                    isFullscreen: !1,
                                    disabled: !i,
                                    sonataPlaybackId: d,
                                }),
                            (0, m.jsxs)('div', {
                                className: nc().info,
                                children: [
                                    S,
                                    (0, m.jsxs)('div', {
                                        className: nc().infoButtons,
                                        children: [
                                            o &&
                                                i &&
                                                h &&
                                                !v.isAdvertShown &&
                                                (0, m.jsx)(eX.WithOffline, {
                                                    fallback: (0, m.jsx)(i4.c, { isLiked: n, iconSize: 'xs', onClick: r, disabled: !c.isAuthorized }),
                                                }),
                                            T,
                                        ],
                                    }),
                                ],
                            }),
                        ],
                    });
                }),
                n_ = (0, v.PA)((e) => {
                    let { className: t } = e,
                        {
                            settings: { isMobile: a },
                            sonataState: i,
                            fullscreenPlayer: n,
                        } = (0, L.g)(),
                        { isLiked: r, handleLike: s, isDisliked: o, handleDislike: l } = (0, ic.f)(),
                        d = (0, id.z)(),
                        c = (0, C.c)(() => {
                            if (i.entityMeta) {
                                if (n.modal.isOpened) return void n.modal.close();
                                n.modal.open();
                            }
                        });
                    (0, x.useEffect)(() => {
                        if (!i.isGenerativeContext)
                            return (
                                null == d || d.addShortcutsListener(il.M.MAIN, io.l.TOGGLE_FULLSCREEN_PLAYER, c),
                                null == d || d.addShortcutsListener(il.M.MAIN, io.l.LIKE, s),
                                null == d || d.addShortcutsListener(il.M.MAIN, io.l.DISLIKE, l),
                                () => {
                                    (null == d || d.removeShortcutsListener(il.M.MAIN, io.l.TOGGLE_FULLSCREEN_PLAYER),
                                        null == d || d.removeShortcutsListener(il.M.MAIN, io.l.LIKE),
                                        null == d || d.removeShortcutsListener(il.M.MAIN, io.l.DISLIKE));
                                }
                            );
                    }, [l, s, d, i.isGenerativeContext, i.entityMeta, c]);
                    let u = (0, Y.L)(() =>
                        a
                            ? (0, m.jsx)(nu, {
                                  className: (0, p.$)(t, ig().root),
                                  entityMeta: i.entityMeta,
                                  isLiked: r,
                                  onLikeClick: s,
                                  withLike: !0,
                                  withFullscreen: !0,
                              })
                            : (0, m.jsx)(no, {
                                  className: (0, p.$)(t, ig().root),
                                  entityMeta: i.entityMeta,
                                  isLiked: r,
                                  isDisliked: o,
                                  onDislikeClick: l,
                                  onLikeClick: s,
                                  withLike: !0,
                                  withDislike: !0,
                                  withExtraControls: !0,
                                  withFullscreen: !0,
                              }),
                    );
                    return (0, m.jsxs)(m.Fragment, { children: [u, (0, m.jsx)(ih, { className: ig().adPopup }), (0, m.jsx)(is, {}), (0, m.jsx)(ib.e, {})] });
                });
            var nm = a(61251),
                np = a.n(nm);
            let nv = (0, v.PA)((e) => {
                let { className: t } = e,
                    {
                        redAlert: { text: a, buttonText: i, href: n },
                    } = (0, L.g)(),
                    r = (0, tA.Z)(n),
                    { theme: s } = (0, V.W)();
                return (0, m.jsx)('div', {
                    className: (0, p.$)(np().wrapper, t),
                    'data-test-id': N.e8.redAlert.RED_ALERT,
                    children: (0, m.jsxs)('div', {
                        className: (0, p.$)(np().root, { [np().root_light]: s === U.S.Light }),
                        children: [
                            (0, m.jsx)(I.HL, {
                                className: np().text,
                                type: 'controls',
                                variant: 'p',
                                size: 'm',
                                weight: 'medium',
                                'data-test-id': N.e8.redAlert.RED_ALERT_TEXT,
                                children: a,
                            }),
                            (0, m.jsx)(S.$, {
                                className: np().button,
                                color: 'secondary',
                                size: 'm',
                                radius: 'xxxl',
                                onClick: r,
                                'data-test-id': N.e8.redAlert.RED_ALERT_BUTTON,
                                children: (0, m.jsx)(I.HL, { type: 'controls', variant: 'span', size: 'm', weight: 'medium', children: i }),
                            }),
                        ],
                    }),
                });
            });
            var nh = a(64170),
                nb = a(70314),
                nx = a(83278),
                nf = a.n(nx);
            let ng = (0, v.PA)((e) => {
                var t, a, i, n, r;
                let { className: s, barBelow: o } = e,
                    { formatMessage: l } = (0, g.A)(),
                    { experiments: d } = (0, L.g)(),
                    [c, u] = (0, x.useState)(!1),
                    _ = null == (t = o.barBelowItem) ? void 0 : t.content.advDisclaimer,
                    v = d.checkExperiment(K.z.WebNextErids, 'on'),
                    h = (0, x.useMemo)(() => {
                        let e = { title: {}, text: {}, bg: {}, disclaimerTrigger: {} };
                        if (!o.barBelowItem) return e;
                        let { titleColor: t, textColor: a, bgColor: i, bgUrl: n } = o.barBelowItem.content;
                        (t && (e.title.color = t), a && (e.text.color = a), i && (e.bg.backgroundColor = i), n && (e.bg.backgroundImage = 'url("'.concat(n, '")')));
                        let r = a || t;
                        return (r && (e.disclaimerTrigger['--adv-disclaimer-color'] = r), e);
                    }, [o]),
                    b = (0, x.useMemo)(() => {
                        var e;
                        return null == (e = o.barBelowItem)
                            ? void 0
                            : e.content.buttons.map((e) => {
                                  var t, a;
                                  return (0, m.jsx)(
                                      nb.t,
                                      {
                                          anchorId: null == (t = o.barBelowItem) ? void 0 : t.anchorId,
                                          screenId: null == (a = o.barBelowItem) ? void 0 : a.screenId,
                                          button: e,
                                          buttonSize: 'l',
                                          hide: o.hide,
                                          feedbackToken: o.barBelowItem ? o.barBelowItem.feedbackToken : null,
                                      },
                                      e.text,
                                  );
                              });
                    }, [o]),
                    f = (0, x.useCallback)(
                        (e) => {
                            e.animationName.includes('show') ? o.setAnimationAlreadyBeenShown() : e.animationName.includes('hide') && o.setAnimationAlreadyBeenHidden();
                        },
                        [o],
                    ),
                    C = (0, x.useCallback)(
                        (e) => {
                            e.animationName.includes('show') && o.setAnimationAlreadyBeenStarted();
                        },
                        [o],
                    );
                return (0, m.jsx)(eO.r, {
                    page: eR.l.MUSIC_DEEPLINK_SCREEN,
                    places: [eM.R.TOP_BUTTON],
                    children: (0, m.jsxs)('section', {
                        className: (0, p.$)(
                            nf().root,
                            { [nf().root_hidden]: !o.isVisible && !o.hideWithAnimation, [nf().root_show]: o.showWithAnimation, [nf().root_hide]: o.hideWithAnimation },
                            s,
                        ),
                        style: h.bg,
                        onAnimationStart: C,
                        onAnimationEnd: f,
                        'aria-label': l({ id: 'bar-below.section-name' }),
                        'data-test-id': N.Kq.barBelow.BAR_BELOW,
                        children: [
                            (null == (a = o.barBelowItem) ? void 0 : a.content.imageUrl) &&
                                (0, m.jsx)(tm._V, {
                                    className: nf().image,
                                    'aria-hidden': !0,
                                    src: null == (i = o.barBelowItem) ? void 0 : i.content.imageUrl,
                                    fit: 'contain',
                                    withAvatarReplace: !0,
                                    withAspectRatio: !0,
                                    'data-test-id': N.Kq.barBelow.BAR_BELOW_IMAGE,
                                }),
                            (0, m.jsxs)('div', {
                                className: nf().content,
                                children: [
                                    (null == (n = o.barBelowItem) ? void 0 : n.content.title) &&
                                        (0, m.jsx)(I.DZ, {
                                            className: nf().title,
                                            variant: 'h3',
                                            style: h.title,
                                            lineClamp: 2,
                                            'data-test-id': N.Kq.barBelow.BAR_BELOW_TITLE_TEXT,
                                            children: o.barBelowItem.content.title,
                                        }),
                                    (null == (r = o.barBelowItem) ? void 0 : r.content.text) &&
                                        (0, m.jsx)(I.DZ, {
                                            className: nf().text,
                                            variant: 'h4',
                                            size: 'xs',
                                            style: h.text,
                                            lineClamp: 2,
                                            'data-test-id': N.Kq.barBelow.BAR_BELOW_SECONDARY_TEXT,
                                            children: o.barBelowItem.content.text,
                                        }),
                                ],
                            }),
                            (0, m.jsx)('div', { className: nf().buttons, children: b }),
                            _ &&
                                v &&
                                (0, m.jsx)('div', {
                                    className: nf().advDisclaimer,
                                    children: (0, m.jsxs)(aF.AM, {
                                        placement: 'left-end',
                                        open: c,
                                        onOpenChange: u,
                                        offsetOptions: { mainAxis: 8 },
                                        transform: !1,
                                        children: [
                                            (0, m.jsx)('button', {
                                                type: 'button',
                                                className: nf().advDisclaimerTrigger,
                                                style: h.disclaimerTrigger,
                                                'data-test-id': N.Kq.barBelow.BAR_BELOW_ADV_DISCLAIMER_TRIGGER_BUTTON,
                                                children: (0, m.jsx)(A.A, { id: 'ads.ad' }),
                                            }),
                                            (0, m.jsx)(aF.hl, {
                                                className: nf().advDisclaimerContent,
                                                children: (0, m.jsx)('div', {
                                                    className: nf().advDisclaimerInner,
                                                    children: (0, m.jsx)(I.HL, {
                                                        className: nf().advDisclaimerText,
                                                        type: 'text',
                                                        variant: 'p',
                                                        size: 'xs',
                                                        weight: 'medium',
                                                        'data-test-id': N.Kq.barBelow.BAR_BELOW_ADV_DISCLAIMER_TEXT,
                                                        children: _,
                                                    }),
                                                }),
                                            }),
                                        ],
                                    }),
                                }),
                        ],
                    }),
                });
            });
            var nA = a(15509),
                nN = a(12528),
                nC = a.n(nN);
            let ny = 'buy-subscription-modal',
                nS = (0, v.PA)((e) => {
                    let { modal: t } = e,
                        a = (0, h.useRouter)(),
                        i = (0, eb.N)().get(eh.QG),
                        { user: n } = (0, L.g)(),
                        [r, s] = (0, eS.d)(),
                        {
                            openPaymentWidgetModal: o,
                            isShimmerActive: l,
                            isShimmerVisible: d,
                            mainText: c,
                            mainTextA11y: u,
                            additionText: _,
                            saveOfferAndAuthorize: p,
                        } = (0, eF.D)({ storeName: 'music', offerElement: { element: r, intersectionPropertyId: ny } }),
                        v = (0, C.c)(() => {
                            if ((t.close(), !n.isAuthorized)) return void p();
                            o();
                        }),
                        b = (0, C.c)(() => {
                            (t.close(), i.authorizationUrl && a.push(i.authorizationUrl));
                        });
                    return (0, m.jsxs)(m.Fragment, {
                        children: [
                            (0, m.jsx)(I.HL, {
                                className: nC().heading,
                                variant: 'div',
                                weight: 'bold',
                                'data-test-id': N.Kq.buySubscriptionModal.BUY_SUBSCRIPTION_BOTTOMSHEET_TITLE,
                                children: (0, m.jsx)(A.A, { id: 'buy-subscription.listen-without-restrictions', values: { nbsp: ' ' } }),
                            }),
                            (0, m.jsxs)('div', {
                                className: nC().buttons,
                                children: [
                                    (0, m.jsx)(nA.b, {
                                        ref: s,
                                        'data-intersection-property-id': ny,
                                        mainText: c,
                                        ariaLabel: u,
                                        additionText: _,
                                        isShimmerActive: l,
                                        isShimmerVisible: d,
                                        onClick: v,
                                        className: nC().button,
                                        mainTextClassName: nC().buttonMainText,
                                        additionTextClassName: nC().buttonAdditionText,
                                        'data-test-id': N.Kq.buySubscriptionModal.BUY_SUBSCRIPTION_BOTTOMSHEET_SUBSCRIPTION_BUTTON,
                                    }),
                                    (0, m.jsx)(S.$, {
                                        onClick: b,
                                        className: nC().button,
                                        isBlock: !0,
                                        color: 'secondary',
                                        variant: 'default',
                                        size: 'l',
                                        radius: 'xxxl',
                                        'data-test-id': N.Kq.buySubscriptionModal.BUY_SUBSCRIPTION_BOTTOMSHEET_ALREADY_IN_PLUS_BUTTON,
                                        children: (0, m.jsx)(I.HL, {
                                            className: nC().buttonMainText,
                                            variant: 'span',
                                            weight: 'bold',
                                            children: (0, m.jsx)(A.A, { id: 'buy-subscription.already-in-plus', values: { nbsp: '\xa0' } }),
                                        }),
                                    }),
                                ],
                            }),
                        ],
                    });
                });
            var nT = a(54578),
                nE = a(65204),
                nB = a(3646),
                nI = a.n(nB);
            let nj = 'buy-subscription-benefits-modal',
                nP = (0, v.PA)((e) => {
                    let { modal: t, entityTitle: a, entityCoverUri: i, isEntityAvailable: n, withRoundCover: r } = e,
                        {
                            user: s,
                            experiments: o,
                            settings: { browserInfo: l },
                        } = (0, L.g)(),
                        d = o.checkExperiment(K.z.WebNextFreeToApp, 'on-unauthorized') && l.isMobile,
                        [c, u] = (0, eS.d)(),
                        {
                            openPaymentWidgetModal: _,
                            isShimmerActive: p,
                            isShimmerVisible: v,
                            mainText: h,
                            mainTextA11y: b,
                            additionText: x,
                            oneClickAvailable: f,
                            oneClickDisclaimerText: g,
                            oneClickDisclaimerTextA11y: y,
                            buttonText: S,
                        } = (0, eF.D)({ storeName: 'music', offerElement: { element: c, intersectionPropertyId: nj } }),
                        E = !d && !!S && s.isAuthorized,
                        B = !s.isAuthorized,
                        j = s.isAuthorized && !s.hasPlus,
                        P = (0, C.c)(() => {
                            (t.close(), _());
                        });
                    return (0, m.jsxs)(m.Fragment, {
                        children: [
                            (0, m.jsx)(tp.t, {
                                radius: r ? 'round' : 'm',
                                className: nI().entityCover,
                                children: (0, m.jsx)(i3.B, {
                                    fit: 'cover',
                                    src: i || 'https://avatars.mds.yandex.net/get-music-misc/30221/img.69b3f718179e1659eceb7a5c/orig',
                                    size: 110,
                                    withAvatarReplace: !0,
                                    isAvailable: !i || n,
                                }),
                            }),
                            !!a &&
                                (0, m.jsx)(I.HL, {
                                    variant: 'span',
                                    className: nI().entityTitle,
                                    lineClamp: 2,
                                    'data-test-id': N.Kq.buySubscriptionModal.BUY_SUBSCRIPTION_BOTTOMSHEET_ENTITY_TITLE,
                                    children: a,
                                }),
                            (0, m.jsxs)('div', {
                                className: nI().headingContainer,
                                children: [
                                    (0, m.jsx)(I.HL, {
                                        className: nI().heading,
                                        variant: 'div',
                                        weight: 'bold',
                                        size: 's',
                                        'data-test-id': N.Kq.buySubscriptionModal.BUY_SUBSCRIPTION_BOTTOMSHEET_TITLE,
                                        children: d
                                            ? (0, m.jsx)(A.A, { id: 'download-mobile-app.use-service-in-app-without-restrictions', values: { nbsp: '\xa0' } })
                                            : (0, m.jsx)(A.A, { id: 'buy-subscription.listen-without-restrictions', values: { nbsp: '\xa0' } }),
                                    }),
                                    E &&
                                        (0, m.jsx)(I.HL, {
                                            className: nI().offerHeading,
                                            variant: 'div',
                                            weight: 'bold',
                                            size: 's',
                                            'data-test-id': N.Kq.buySubscriptionModal.BUY_SUBSCRIPTION_BOTTOMSHEET_OFFER_TITLE,
                                            children: (0, m.jsx)(A.A, {
                                                id: 'buy-subscription.offer-for-you',
                                                values: { offerText: null == S ? void 0 : S.toLowerCase() },
                                            }),
                                        }),
                                ],
                            }),
                            (0, m.jsxs)('div', {
                                className: nI().benefits,
                                'data-test-id': N.Kq.buySubscriptionModal.BUY_SUBSCRIPTION_BOTTOMSHEET_BENEFITS,
                                children: [
                                    (0, m.jsxs)('div', {
                                        className: nI().benefitItem,
                                        children: [
                                            (0, m.jsx)('div', {
                                                className: nI().benefitIcon,
                                                children: (0, m.jsx)(tm._V, {
                                                    src: 'https://avatars.mds.yandex.net/get-music-misc/40584/img.69a6b052d268e8685d597e08/orig',
                                                    srcSet: 'https://avatars.mds.yandex.net/get-music-misc/40584/img.69a6b0e4563d4e7d5eadc110/orig',
                                                    size: 30,
                                                    fit: 'cover',
                                                    className: nI().benefitImage,
                                                }),
                                            }),
                                            (0, m.jsx)(I.HL, {
                                                variant: 'span',
                                                className: nI().benefitText,
                                                children: (0, m.jsx)(A.A, { id: 'buy-subscription.plus-benefit-recommendations' }),
                                            }),
                                        ],
                                    }),
                                    (0, m.jsxs)('div', {
                                        className: nI().benefitItem,
                                        children: [
                                            (0, m.jsx)('div', {
                                                className: nI().benefitIcon,
                                                children: (0, m.jsx)(tm._V, {
                                                    src: 'https://avatars.mds.yandex.net/get-music-misc/28592/img.69a6b14722da017d15a4f2ec/orig',
                                                    srcSet: 'https://avatars.mds.yandex.net/get-music-misc/30221/img.69a6b14722da017d15a4f2eb/orig',
                                                    size: 30,
                                                    fit: 'cover',
                                                    className: nI().benefitImage,
                                                }),
                                            }),
                                            (0, m.jsx)(I.HL, {
                                                variant: 'span',
                                                className: nI().benefitText,
                                                children: (0, m.jsx)(A.A, { id: 'buy-subscription.plus-benefit-non-music', values: { nbsp: ' ' } }),
                                            }),
                                        ],
                                    }),
                                    (0, m.jsx)(nT.c, { className: nI().benefitDivider }),
                                    (0, m.jsx)(nT.c, { className: nI().benefitDivider }),
                                    (0, m.jsxs)('div', {
                                        className: nI().benefitItem,
                                        children: [
                                            (0, m.jsx)('div', {
                                                className: nI().benefitIcon,
                                                children: (0, m.jsx)(tm._V, {
                                                    src: 'https://avatars.mds.yandex.net/get-music-misc/28592/img.69a6b14822da017d15a4f2ee/orig',
                                                    srcSet: 'https://avatars.mds.yandex.net/get-music-misc/28592/img.69a6b14722da017d15a4f2ed/orig',
                                                    size: 30,
                                                    fit: 'cover',
                                                    className: nI().benefitImage,
                                                }),
                                            }),
                                            (0, m.jsx)(I.HL, {
                                                variant: 'span',
                                                className: nI().benefitText,
                                                children: (0, m.jsx)(A.A, { id: 'buy-subscription.plus-benefit-offline', values: { nbsp: ' ' } }),
                                            }),
                                        ],
                                    }),
                                    (0, m.jsxs)('div', {
                                        className: nI().benefitItem,
                                        children: [
                                            (0, m.jsx)('div', {
                                                className: nI().benefitIcon,
                                                children: (0, m.jsx)(tm._V, {
                                                    src: 'https://avatars.mds.yandex.net/get-music-misc/28592/img.69a6b1510974f922f316a6df/orig',
                                                    srcSet: 'https://avatars.mds.yandex.net/get-music-misc/2413828/img.69a6b1510974f922f316a6de/orig',
                                                    size: 30,
                                                    fit: 'cover',
                                                    className: nI().benefitImage,
                                                }),
                                            }),
                                            (0, m.jsx)(I.HL, {
                                                variant: 'span',
                                                className: nI().benefitText,
                                                children: (0, m.jsx)(A.A, { id: 'buy-subscription.plus-benefit-other-services', values: { nbsp: ' ' } }),
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                            B &&
                                (d
                                    ? (0, m.jsx)(nE.O, {
                                          isBlock: !0,
                                          className: nI().button,
                                          buttonText: (0, m.jsx)(I.HL, {
                                              variant: 'span',
                                              size: 'l',
                                              children: (0, m.jsx)(A.A, { id: 'download-mobile-app.listen-in-app' }),
                                          }),
                                      })
                                    : (0, m.jsxs)('div', {
                                          className: nI().loginContainer,
                                          children: [
                                              (0, m.jsx)(aZ.H, {
                                                  size: 'l',
                                                  variant: 'default',
                                                  buttonText: (0, m.jsx)(I.HL, {
                                                      variant: 'span',
                                                      size: 'l',
                                                      children: (0, m.jsx)(A.A, { id: 'authorization.enter-and-listen-button' }),
                                                  }),
                                                  className: nI().button,
                                                  'data-test-id': N.Kq.buySubscriptionModal.BUY_SUBSCRIPTION_BOTTOMSHEET_ALREADY_IN_PLUS_BUTTON,
                                              }),
                                              (0, m.jsxs)(I.HL, {
                                                  variant: 'div',
                                                  size: 'm',
                                                  weight: 'medium',
                                                  className: nI().bonusText,
                                                  'data-test-id': N.Kq.buySubscriptionModal.BUY_SUBSCRIPTION_BOTTOMSHEET_BONUS_TEXT,
                                                  children: [
                                                      (0, m.jsx)(T.I, { variant: 'gift', size: 'xxs', className: nI().giftIcon }),
                                                      (0, m.jsx)(A.A, { id: 'payment.learn-personal-bonus' }),
                                                  ],
                                              }),
                                          ],
                                      })),
                            j &&
                                (d
                                    ? (0, m.jsx)(nE.O, { isBlock: !0, className: nI().button })
                                    : (0, m.jsxs)(m.Fragment, {
                                          children: [
                                              (0, m.jsx)(nA.b, {
                                                  ref: u,
                                                  'data-intersection-property-id': nj,
                                                  mainText: h,
                                                  ariaLabel: b,
                                                  additionText: x,
                                                  isShimmerActive: p,
                                                  isShimmerVisible: v,
                                                  onClick: P,
                                                  className: nI().button,
                                                  mainTextClassName: nI().buttonMainText,
                                                  additionTextClassName: nI().buttonAdditionText,
                                                  color: 'primary',
                                                  'data-test-id': N.Kq.buySubscriptionModal.BUY_SUBSCRIPTION_BOTTOMSHEET_SUBSCRIPTION_BUTTON,
                                              }),
                                              f &&
                                                  (0, m.jsx)(I.HL, {
                                                      variant: 'div',
                                                      size: 's',
                                                      weight: 'normal',
                                                      'aria-label': y,
                                                      className: nI().oneClickDisclaimerText,
                                                      'data-test-id': N.Kq.buySubscriptionModal.BUY_SUBSCRIPTION_BOTTOMSHEET_DISCLAIMER_TEXT,
                                                      children: g,
                                                  }),
                                          ],
                                      })),
                        ],
                    });
                });
            var nk = a(34287),
                nw = a.n(nk);
            let nL = (0, v.PA)((e) => {
                let { modal: t, entityTitle: a, entityCoverUri: i, isEntityAvailable: n, isLegalRejected: r, withRoundCover: s } = e,
                    o = (0, Y.L)(() =>
                        r ? (0, m.jsx)(nS, { modal: t }) : (0, m.jsx)(nP, { modal: t, entityTitle: a, entityCoverUri: i, isEntityAvailable: n, withRoundCover: s }),
                    );
                return (0, m.jsx)(E.a, {
                    className: nw().root,
                    headerClassName: nw().header,
                    contentClassName: nw().content,
                    size: 'fitContent',
                    placement: 'default',
                    open: t.isOpened,
                    onOpenChange: t.onOpenChange,
                    onClose: t.close,
                    lockScroll: !0,
                    closeButtonDataTestId: N.Kq.buySubscriptionModal.BUY_SUBSCRIPTION_BOTTOMSHEET_CLOSE_BUTTON,
                    'data-test-id': N.Kq.buySubscriptionModal.BUY_SUBSCRIPTION_BOTTOMSHEET,
                    children: o,
                });
            });
            nL.displayName = 'BuySubscriptionModal';
            let nD = (0, x.createContext)(null);
            var nO = a(3237),
                nR = a(1757),
                nM = a(60425),
                nF = a(35508),
                nU = a.n(nF);
            let nz = (0, v.PA)((e) => {
                    var t, a;
                    let { children: i, className: n } = e,
                        { formatMessage: r } = (0, g.A)(),
                        {
                            advertBanners: {
                                banners: { brandedEntityAxeBanner: s },
                            },
                        } = (0, L.g)(),
                        o = (0, eD.Q)(),
                        l = (0, x.useContext)(nD),
                        d = null != (a = null == l ? void 0 : l.isCollapsed) && a,
                        c = (0, C.c)(() => {
                            s.setType(ei.h.BRANDING);
                        });
                    return ((0, x.useEffect)(
                        () => () => {
                            s.reset();
                        },
                        [s],
                    ),
                    s.isVisible)
                        ? (0, m.jsxs)('div', {
                              'aria-label': r({ id: 'advert.banner' }),
                              role: 'banner',
                              children: [
                                  (0, m.jsx)(X.N, {
                                      ownerId: Z.P,
                                      containerId: nO.E9,
                                      params: nO.$,
                                      onLoad: c,
                                      onError: s.toggleHasErrorTrue,
                                      onNoAds: s.toggleNoAdsTrue,
                                      className: (0, p.$)(nU().creative, { [nU().creative_withCollapsedNavbar]: d }),
                                  }),
                                  (0, m.jsx)(X.N, {
                                      ownerId: Z.P,
                                      containerId: nO.r_,
                                      params: nO.kz,
                                      onLoad: c,
                                      onError: s.toggleHasErrorTrue,
                                      onNoAds: s.toggleNoAdsTrue,
                                  }),
                                  (0, m.jsx)('div', {
                                      className: (0, p.$)(nU().root, n, { [nU().root_withCollapsedNavbar]: d }),
                                      style: null == (t = o.data) ? void 0 : t.style,
                                      children: i,
                                  }),
                              ],
                          })
                        : i;
                }),
                nW = (0, v.PA)((e) => {
                    let { children: t, className: a } = e;
                    return (0, m.jsx)(nM.A, { containerId: nO.r_, expectedType: nR.k.AXE_GRADIENT, children: (0, m.jsx)(nz, { className: a, children: t }) });
                });
            var nV = a(22714),
                nH = a(58534),
                nK = a(44482),
                nG = a.n(nK);
            let n$ = (e) => {
                let { refetchRequests: t, closeToast: a } = e,
                    { formatMessage: i } = (0, g.A)(),
                    n = (0, x.useMemo)(
                        () =>
                            (0, m.jsxs)('div', {
                                className: nG().message,
                                children: [
                                    (0, m.jsx)(I.HL, {
                                        className: nG().text,
                                        variant: 'div',
                                        type: 'controls',
                                        size: 'm',
                                        children: (0, m.jsx)(A.A, { id: 'error-messages.error-during-initial-loading' }),
                                    }),
                                    (0, m.jsx)(S.$, {
                                        className: nG().button,
                                        onClick: t,
                                        variant: 'text',
                                        'aria-label': i({ id: 'interface-actions.reload-part-page' }),
                                        icon: (0, m.jsx)(T.I, { variant: 'reset', size: 'xxs', className: nG().icon }),
                                    }),
                                ],
                            }),
                        [i, t],
                    );
                return (0, m.jsx)(nH.$, { className: (0, p.$)(nG().root, nG().important), message: n, closeToast: a });
            };
            var nY = a(45477),
                nq = a(75582),
                nZ = a(11541),
                nX = a(49399),
                nQ = a(61334),
                nJ = a(31010),
                n0 = a(67544),
                n1 = a(74523),
                n2 = a(97201),
                n5 = a(72054),
                n3 = a.n(n5);
            let n4 = 'noreferrer noopener',
                n9 = (0, v.PA)(() => {
                    var e;
                    let {
                            settings: { browserInfo: t },
                            user: { account: a },
                        } = (0, L.g)(),
                        { deeplink: i } = null != (e = (0, nJ.P)()) ? e : {},
                        n = (0, nQ.q)({ browserInfo: t, login: a.data.login }),
                        { shouldShow: r } = ((e) => {
                            let {
                                    enabled: t = !0,
                                    searchParamKey: a,
                                    storageKey: i,
                                    storageValue: n = 'true',
                                    storageMatcher: r = (e) => 'true' === e,
                                    useSessionStorage: s = !0,
                                    searchParamHideValue: o,
                                    shouldHideChecker: l,
                                } = e,
                                [d, c] = (0, x.useState)(!1),
                                [u, _] = (0, x.useState)(!1),
                                m = (0, h.useSearchParams)(),
                                p = (0, eb.N)(),
                                v = p.get(eh.vH),
                                b = p.get(eh.Zf),
                                f = (0, C.c)(l || (() => !1)),
                                g = ((e) => {
                                    switch (e.length) {
                                        case 0:
                                            return;
                                        case 1:
                                            return e[0];
                                        default:
                                            return e;
                                    }
                                })(m.getAll(a)),
                                A = (0, C.c)(() => {
                                    if (!s) return !1;
                                    try {
                                        let e = v.get(i);
                                        return r('string' == typeof e ? e : null);
                                    } catch (e) {
                                        return (b.error('Failed to get sessionStorage', { type: 'useSearchParamVisibility', storageKey: i }), !1);
                                    }
                                }),
                                N = (0, C.c)(() => {
                                    if (s)
                                        try {
                                            v.set(i, n);
                                        } catch (e) {
                                            b.error('Failed to set sessionStorage', { type: 'useSearchParamVisibility', storageKey: i });
                                        }
                                });
                            return (
                                (0, x.useEffect)(() => {
                                    c(!0);
                                }, []),
                                (0, x.useEffect)(() => {
                                    if (!d || !t) return void _(!1);
                                    let e =
                                            (!!o &&
                                                ((e, t) => {
                                                    if (!e || !t) return !1;
                                                    let a = t.toLowerCase();
                                                    return Array.isArray(e) ? e.some((e) => e.toLowerCase() === a) : e.toLowerCase() === a;
                                                })(g, o)) ||
                                            f(g),
                                        a = A();
                                    (e && N(), _(!(e || a)));
                                }, [g, o, s, d, t, f, A, N]),
                                { shouldShow: !!d && u, searchParamValue: g }
                            );
                        })({ searchParamKey: n2.K.UTM_SOURCE, storageKey: ex.c.HideDeeplinkAndOnelink, searchParamHideValue: 'bottomsheet' }),
                        s = (0, Y.L)(() =>
                            (null == t ? void 0 : t.hasHuaweiAppGallery) ? 'huaweiAppGallery' : (null == t ? void 0 : t.OSFamily) === n0.j.IOS ? 'macos' : 'googlePlay',
                        ),
                        o = (0, Y.L)(() =>
                            (null == t ? void 0 : t.hasHuaweiAppGallery)
                                ? (0, m.jsx)(A.A, { id: 'deeplinks.download-from-app-gallery' })
                                : (null == t ? void 0 : t.OSFamily) === n0.j.IOS
                                  ? (0, m.jsx)(A.A, { id: 'deeplinks.download-from-app-store' })
                                  : (0, m.jsx)(A.A, { id: 'deeplinks.download-from-google-play' }),
                        ),
                        l = (0, C.c)(() => {
                            if (!i) return;
                            let e = new URLSearchParams(window.location.search);
                            window.open((0, n1.C)(i, e), '_self', n4);
                        }),
                        d = (0, C.c)(() => {
                            let e = new URLSearchParams(window.location.search),
                                t = n(i && (0, n1.C)(i, e));
                            window.open(t, '_blank', n4);
                        });
                    return r
                        ? (0, m.jsxs)('div', {
                              className: n3().root,
                              children: [
                                  (0, m.jsx)(S.$, {
                                      withRipple: !1,
                                      withHover: !1,
                                      onClick: l,
                                      radius: 'xxxl',
                                      className: n3().button,
                                      role: 'link',
                                      icon: (0, m.jsx)(T.I, { className: (0, p.$)(n3().buttonIcon, n3().musicIcon), variant: 'musicLogo' }),
                                      children: (0, m.jsx)(I.HL, {
                                          className: n3().buttonTitle,
                                          variant: 'div',
                                          type: 'text',
                                          size: 'm',
                                          weight: 'normal',
                                          children: (0, m.jsx)(A.A, { id: 'deeplinks.listen-in-app' }),
                                      }),
                                  }),
                                  (0, m.jsx)(S.$, {
                                      withRipple: !1,
                                      withHover: !1,
                                      onClick: d,
                                      radius: 'xxxl',
                                      className: n3().button,
                                      role: 'link',
                                      icon: (0, m.jsx)(T.I, { className: (0, p.$)(n3().buttonIcon, n3().onelinkIcon), variant: s }),
                                      children: (0, m.jsx)(I.HL, { className: n3().buttonTitle, variant: 'div', type: 'text', size: 'm', weight: 'normal', children: o }),
                                  }),
                              ],
                          })
                        : null;
                });
            var n6 = a(90432);
            let n7 = (e) => {
                let { children: t, isEnabled: a } = e,
                    [i, n] = (0, x.useState)(n6.ov),
                    r = (0, C.c)((e) => {
                        let { href: t } = (0, eK.u)(null != e ? e : '', { options: { host: n6.ov } });
                        n(t);
                    }),
                    s = (0, x.useMemo)(() => ({ deeplink: i, setDeeplink: r, isEnabled: a }), [a, r, i]);
                return a ? (0, m.jsx)(nJ.H.Provider, { value: s, children: t }) : t;
            };
            var n8 = a(38936),
                re = a(40996);
            let rt = { p1: 'czmwt', p2: 'hsnu', puid1: '', puid2: '' };
            var ra = a(11272),
                ri = a.n(ra);
            let rn = (0, v.PA)((e) => {
                    let { className: t, forwardRef: a, onAdvertChange: i, ...n } = e,
                        {
                            advertBanners: {
                                banners: { topAdvertBanner: r },
                            },
                        } = (0, L.g)(),
                        { formatMessage: s } = (0, g.A)(),
                        o = (0, C.c)((e) => {
                            (void 0 !== e && r.setType(e), i());
                        });
                    return (0, m.jsx)('section', {
                        ref: a,
                        className: (0, p.$)(ri().root, t, { [ri().root_hidden]: !r.isVisible }),
                        'aria-label': s({ id: 'advert.banner' }),
                        role: 'banner',
                        ...n,
                        children: (0, m.jsx)(X.N, {
                            className: ri().advert,
                            ownerId: Z.P,
                            containerId: 'adfox_173831489272852769',
                            params: rt,
                            onLoad: r.setType,
                            onRender: o,
                            onError: r.toggleHasErrorTrue,
                            onNoAds: r.toggleNoAdsTrue,
                        }),
                    });
                }),
                rr = (0, x.forwardRef)((e, t) => (0, m.jsx)(rn, { forwardRef: t, ...e }));
            var rs = a(92881),
                ro = a.n(rs);
            let rl = (0, v.PA)((e) => {
                let { children: t } = e,
                    [a, i] = (0, x.useState)(!1),
                    [n, r] = (0, x.useState)(!0),
                    [s, o] = (0, x.useState)(!1),
                    { contentRef: l, contentScrollRef: d } = (0, k.g)(),
                    c = (0, x.useRef)(null),
                    {
                        user: u,
                        settings: { isMobile: _ },
                        advertBanners: {
                            banners: { topAdvertBanner: v },
                        },
                        freeAccess: h,
                    } = (0, L.g)(),
                    b = (!u.isAuthorized || h.isFreeWebUser) && v.isVisible,
                    f = (0, x.useCallback)(() => {
                        (r(!1), i(!0));
                    }, [r, i]),
                    g = (0, x.useCallback)(() => {
                        (r(!0), i(!1));
                    }, [r, i]),
                    A = (0, x.useCallback)(() => {
                        o(!1);
                    }, [o]),
                    N = (0, x.useMemo)(
                        () =>
                            b
                                ? (0, m.jsx)(rr, { className: (0, p.$)(ro().banner, { [ro().banner_canShow]: a }), onFocus: f, onBlur: g, onAdvertChange: A, ref: c })
                                : null,
                        [b, a, f, g, A],
                    ),
                    C = (0, x.useCallback)(() => (_ ? window.scrollY : null == d ? void 0 : d.scrollTop), [d, _]),
                    y = (0, x.useCallback)(() => {
                        if (!N) return;
                        let e = C();
                        if (void 0 === e) return void i(!0);
                        let t = e > 0;
                        if (!_ && l && d) {
                            var a;
                            let e = l.clientHeight + ((null == (a = c.current) ? void 0 : a.offsetHeight) || 0) < d.scrollHeight;
                            e ? r(!0) : !e && t && r(!1);
                        }
                        if (!n || (!t && s)) return;
                        let u = !t;
                        (i(u), u && o(!0));
                    }, [l, d, N, n, C, _, s, i, r, o]);
                (0, x.useEffect)(() => {
                    y();
                }, [y, d]);
                let S = (0, x.useMemo)(() => (0, el.A)(y, 200), [y]);
                return (
                    (0, re.L)(_ ? { onScroll: S } : { onScroll: S, elementRef: d }),
                    (0, m.jsxs)('div', { className: ro().root, children: [N, (0, m.jsx)('div', { className: ro().content, children: t })] })
                );
            });
            var rd = a(29680),
                rc = a(99937),
                ru = a.n(rc);
            let r_ = [{ id: nY.u.INFO }, { id: nY.u.ERROR, limit: 1 }],
                rm = () =>
                    r_.map((e) => {
                        let { id: t, limit: a } = e;
                        return (0, m.jsx)(rd.Notification, { className: ru().root, enableMultiContainer: !0, containerId: t, position: 'bottom-center', limit: a }, t);
                    }),
                rp = iE.default.default(
                    () =>
                        Promise.all([
                            a.e(3608),
                            a.e(6139),
                            a.e(8461),
                            a.e(7412),
                            a.e(5108),
                            a.e(4757),
                            a.e(1075),
                            a.e(1010),
                            a.e(2226),
                            a.e(2147),
                            a.e(1256),
                            a.e(8672),
                            a.e(3266),
                            a.e(2551),
                            a.e(9364),
                            a.e(7078),
                            a.e(6914),
                            a.e(3350),
                            a.e(4942),
                            a.e(627),
                            a.e(9195),
                            a.e(5833),
                        ])
                            .then(a.bind(a, 74951))
                            .then((e) => e.ProductLayoutClientOnlyModalsContent),
                    { ssr: !1 },
                ),
                rv = (0, v.PA)((e) => {
                    var t, a, i;
                    let { children: n, isNewWaveMainTabActive: r, layoutChromeStyles: s, rootClassName: o, rootStyle: l } = e,
                        d = (0, h.usePathname)(),
                        { setCompositePlayerBarRef: c } = (0, k.g)(),
                        u = (0, eb.N)().get(eh.oo),
                        _ = ev(),
                        {
                            settings: { browserInfo: v, isMobile: b, isWindowsApplication: f, isMacOSApplication: g, isLinuxApplication: A },
                            experiments: N,
                            communication: C,
                            user: y,
                            redAlert: S,
                            album: T,
                            albumCPA: { isPlusCPAPlayerBarEnabled: E, isHidePlusModalEnabled: B },
                            modals: { buySubscriptionModal: I },
                            advertBanners: {
                                banners: { brandedEntityAxeBanner: j },
                            },
                            freeAccess: P,
                        } = (0, L.g)(),
                        [w, D] = (0, x.useState)(null != (i = u.get(ex.c.NavbarCollapsed)) ? i : _),
                        O = (0, x.useMemo)(() => ({ isCollapsed: w || _, setIsCollapsed: D }), [w, _]);
                    (() => {
                        let { notify: e, dismiss: t } = (0, nq.l)(),
                            a = (0, x.useRef)(void 0),
                            { library: i, user: n } = (0, L.g)(),
                            r = (0, eb.N)().get(eh.U2),
                            [s, o] = (0, x.useState)(!0),
                            l = (0, x.useCallback)(async () => {
                                o(!1);
                                let e = [];
                                (n.settings.loadingState === nX.G.REJECT && e.push(n.getSettings()),
                                    i.loadingState === nX.G.REJECT && e.push(i.getData()),
                                    t({ notificationId: a.current, forceClose: !0 }),
                                    await Promise.allSettled(e),
                                    o(!0));
                            }, [t, i, n]);
                        ((0, x.useEffect)(() => {
                            let t = [n.settings.loadingState];
                            (0, nZ.g)(r) || t.push(i.loadingState);
                            let o = t.every((e) => e !== nX.G.PENDING);
                            s && o && t.includes(nX.G.REJECT) && (a.current = e((0, m.jsx)(n$, { refetchRequests: l }), { containerId: nY.u.IMPORTANT, autoClose: !1 }));
                        }, [e, l, s, i.loadingState, n.settings.loadingState, r]),
                            (0, x.useEffect)(
                                () => () => {
                                    t({ notificationId: a.current, forceClose: !0 });
                                },
                                [t],
                            ));
                    })();
                    let R = (!y.isAuthorized || P.isFreeWebUser) && (null == v ? void 0 : v.isTouch),
                        M = N.checkExperiment(K.z.WebNextDeeplinksToMobile, 'on') && y.hasPlus && !!(null == v ? void 0 : v.isMobile) && !1,
                        F = M && !r,
                        { setDefaultLayoutRef: U } = (0, k.g)(),
                        z = E(null == T ? void 0 : T.id, null == T || null == (t = T.meta) ? void 0 : t.isNonMusic),
                        W = B(null == T ? void 0 : T.id, null == T || null == (a = T.meta) ? void 0 : a.isNonMusic),
                        V = !R || z,
                        H = z && (null == v ? void 0 : v.isTouch);
                    return (
                        (0, x.useEffect)(() => {
                            W && I.close();
                        }, [W, I]),
                        (0, m.jsx)(nD.Provider, {
                            value: O,
                            children: (0, m.jsx)(rl, {
                                children: (0, m.jsx)(n7, {
                                    isEnabled: M,
                                    children: (0, m.jsx)(nW, {
                                        children: (0, m.jsxs)('div', {
                                            ref: U,
                                            className: o,
                                            style: l,
                                            children: [
                                                H && (0, m.jsx)(nL, { modal: I }),
                                                !b &&
                                                    V &&
                                                    (0, m.jsx)(a7, {
                                                        className: (0, p.$)(s.navbar, {
                                                            [s.navbar_application_windows]: f,
                                                            [s.navbar_application_macos]: g,
                                                            [s.navbar_application_linux]: A,
                                                        }),
                                                        externalIsCollapsed: w,
                                                        externalSetIsCollapsed: D,
                                                    }),
                                                (0, m.jsx)(em, {
                                                    className: (0, p.$)($().content, { [$().content_withPlayerBar]: b && !r, [$().content_withAxeBanner]: j.isVisible }),
                                                    children: (0, m.jsxs)(n8.ErrorBoundary, { fallback: nh.SomethingWentWrong, children: [n, (0, m.jsx)(rm, {})] }, d),
                                                }),
                                                !b && V && !r && (0, m.jsx)(nV.n, { pageId: tX._Q.PLAYER, children: (0, m.jsx)(n_, { className: $().playerBar }) }),
                                                b &&
                                                    V &&
                                                    (0, m.jsxs)('div', {
                                                        ref: c,
                                                        className: (0, p.$)($().compositePlayerBar, { [$().compositePlayerBar_withNewVibe]: r }),
                                                        children: [
                                                            F && (0, m.jsx)(n9, {}),
                                                            !r && (0, m.jsx)(nV.n, { pageId: tX._Q.PLAYER, children: (0, m.jsx)(n_, { className: $().playerBar }) }),
                                                            (0, m.jsx)(a7, {
                                                                className: (0, p.$)(s.navbar, {
                                                                    [s.navbar_application_windows]: f,
                                                                    [s.navbar_application_macos]: g,
                                                                    [s.navbar_application_linux]: A,
                                                                }),
                                                                externalIsCollapsed: w,
                                                                externalSetIsCollapsed: D,
                                                            }),
                                                        ],
                                                    }),
                                                S.isVisible && (0, m.jsx)(nv, { className: s.barBelow }),
                                                !S.isVisible && !b && C.list && (0, m.jsx)(ng, { className: s.barBelow, barBelow: C.list.barBelow }),
                                                (0, m.jsx)(rp, {}),
                                            ],
                                        }),
                                    }),
                                }),
                            }),
                        })
                    );
                });
            var rh = a(73017),
                rb = a.n(rh);
            let rx = (0, v.PA)((e) => {
                var t, a, i;
                let n,
                    { className: r, children: s } = e,
                    o = (0, h.usePathname)(),
                    {
                        settings: { isMobile: l, isWindowsApplication: d, isMacOSApplication: isMacOS, isLinuxApplication: c },
                        redAlert: u,
                        communication: _,
                        advertBanners: {
                            banners: { brandedEntityAxeBanner: v },
                        },
                        sonataState: x,
                        experiments: f,
                        vibe: g,
                    } = (0, L.g)(),
                    A =
                        (o === F.Z.main.href || o === F.Z.video.href) &&
                        (f.checkExperiment(K.z.WebNextNewWaveTab, 'on') || f.checkExperiment(K.z.WebNextNewWaveTab, 'on1'));
                H(U.S.Dark, A);
                let N =
                        u.isVisible ||
                        (!l && (null == (t = _.list) ? void 0 : t.barBelow.isVisible) && (null == (a = _.list) ? void 0 : a.barBelow.hasAnimationAlreadyBeenStarted)),
                    C = {
                        barBelow: rb().barBelow,
                        navbar: rb().navbar,
                        navbar_application_linux: rb().navbar_application_linux,
                        navbar_application_macos: rb().navbar_application_macos,
                        navbar_application_windows: rb().navbar_application_windows,
                    },
                    y = rb().root_withBarBelow,
                    S = rb().root;
                if (A) {
                    let e = g.isShuffleVibe && x.isVibeContext;
                    ((n = ((e) => {
                        let { palette: t, isPlaying: a } = e;
                        return (a ? t.primaryStops : t.primaryDarkIdleStops).reduce((e, t, a) => ((e['--vibe-gradient-stop-'.concat(a)] = t), e), {});
                    })({ palette: (0, b.OH)(e || null == (i = x.entityMeta) ? void 0 : i.averageColor), isPlaying: x.isPlaying })),
                        (y = rb().rootNewVibe_withBarBelow),
                        (S = rb().rootNewVibe));
                }
                let T = (0, p.$)($().root, S, { [rb().root_applicationPreserveTitleBar]: d || c || isMacOS, [y]: N, [$().root_withAxeBanner]: v.isVisible }, r);
                return (0, m.jsxs)(rv, { isNewWaveMainTabActive: A, layoutChromeStyles: C, rootClassName: T, rootStyle: n, children: [s, A && (0, m.jsx)(M, {})] });
            });
        },
        76219: (e) => {
            e.exports = {
                repeatIcon_none: 'RepeatButton_repeatIcon_none__2nb1J',
                repeatIcon_context: 'RepeatButton_repeatIcon_context__QwVY9',
                repeatIcon_one: 'RepeatButton_repeatIcon_one___mSkU',
                repeatIcon_disabled: 'RepeatButton_repeatIcon_disabled__LwHV_',
            };
        },
        78176: (e, t, a) => {
            'use strict';
            a.d(t, { V: () => f });
            var i = a(32290),
                n = a(63618),
                r = a(96103),
                s = a(55178),
                o = a(99923),
                l = a(21732),
                d = a(91027),
                c = a(50162),
                u = a(19740),
                _ = a(86269),
                m = a(71926),
                p = a(47745),
                v = a(32641),
                h = a(57594),
                b = a(16510),
                x = a.n(b);
            let f = (0, r.PA)((e) => {
                let { artist: t, className: a } = e,
                    { fullscreenPlayer: r } = (0, h.g)(),
                    b = (0, v.Z)(t.url),
                    g = (0, p.N)(),
                    A = (0, s.useMemo)(() => {
                        var e;
                        return (
                            'decomposed' in t &&
                            (null == (e = t.decomposed) ? void 0 : e.reduce((e, t) => (e.push((0, i.jsx)(f, { artist: t, className: a }, t.id)), e), []))
                        );
                    }, [t, a]),
                    N = (0, d.c)((e) => {
                        (r.modal.isOpened && r.modal.close(), g({ to: o.AppScreen.ArtistScreen }), b(e));
                    });
                return (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsxs)(u.Dr, {
                            className: (0, n.$)(x().root, a),
                            onClick: N,
                            'data-test-id': l.OA.artists.ARTIST_ITEM,
                            children: [
                                (0, i.jsx)(_.t, {
                                    radius: 'round',
                                    className: x().cover,
                                    children: (0, i.jsx)(c._V, { withAvatarReplace: !0, src: t.coverUri, size: 100, fit: 'contain', className: x().image }),
                                }),
                                (0, i.jsx)(m.HL, { variant: 'span', size: 'm', weight: 'medium', lineClamp: 1, children: t.name }),
                            ],
                        }),
                        A,
                    ],
                });
            });
        },
        79238: (e, t, a) => {
            'use strict';
            a.d(t, { b: () => r });
            var i = a(64605),
                n = a(97647);
            let r = (e) => {
                switch (e.type) {
                    case i._.PODCAST:
                        return n.c.PODCAST;
                    case i._.AUDIOBOOK:
                        return n.c.AUDIOBOOK;
                    case i._.FAIRY_TALE:
                        return n.c.FAIRY_TALE;
                    default:
                        return n.c.ALBUM;
                }
            };
        },
        80792: (e, t, a) => {
            'use strict';
            a.d(t, { N: () => m });
            var i = a(32290),
                n = a(96103),
                r = a(21916),
                s = a(55178),
                o = a(26749),
                l = a(59564),
                d = a(62376),
                c = a(57594),
                u = a(14257),
                _ = a(50);
            let m = (0, n.PA)((e) => {
                let { className: t, ownerId: a, containerId: n, params: m, onLoad: p, onRender: v, onNoAds: h, onError: b } = e,
                    { user: x } = (0, c.g)(),
                    f = (0, r.usePathname)(),
                    g = (0, r.useSearchParams)(),
                    { create: A, destroy: N, initialize: C } = (0, l.s)(),
                    { theme: y } = (0, _.W)(),
                    S = (0, d.U)(),
                    T = (0, s.useRef)(!0),
                    E = { ...m };
                return (
                    (E.puid1 = x.advertRole),
                    (0, s.useEffect)(() => {
                        A({
                            ownerId: a,
                            containerId: n,
                            params: E,
                            insertionCodeParams: { darkTheme: y === u.S.Dark, additionalClasses: y ? [y] : [] },
                            onClose: () => {
                                S.log('[AdvertBanner] Close');
                            },
                            onLoad: (e) => {
                                if ((S.log('[AdvertBanner] Load', { data: e }), void 0 === e)) {
                                    null == p || p(o.h.EMPTY);
                                    return;
                                }
                                if ((null == e ? void 0 : e.bundleName) === 'banner.direct') {
                                    null == p || p(o.h.DIRECT);
                                    return;
                                }
                                null == p || p(o.h.CREATIVE);
                            },
                            onRender: () => {
                                (S.log('[AdvertBanner] Render'), null == v || v());
                            },
                            onStub: () => {
                                (S.log('[AdvertBanner] Stub'), null == h || h());
                            },
                            onError: (e) => {
                                (S.log('[AdvertBanner] Error', { error: e }), null == b || b());
                            },
                        });
                    }, []),
                    (0, s.useEffect)(() => {
                        if (T.current) {
                            T.current = !1;
                            return;
                        }
                        (S.log('[AdvertBanner] Destroy'), N(n), S.log('[AdvertBanner] Initialize'), C(n));
                    }, [f, g, n, N, C, S]),
                    (0, i.jsx)('div', { id: n, className: t, tabIndex: -1, 'aria-hidden': !0 })
                );
            });
        },
        81501: (e) => {
            e.exports = { root: 'TicketImage_root__vTgWd' };
        },
        83278: (e) => {
            e.exports = {
                root: 'BarBelow_root__KFexT',
                root_hidden: 'BarBelow_root_hidden__eTKvU',
                root_show: 'BarBelow_root_show__yIQBX',
                show: 'BarBelow_show__5GQBP',
                root_hide: 'BarBelow_root_hide__d1a_5',
                hide: 'BarBelow_hide__a0dwD',
                image: 'BarBelow_image__GfExj',
                content: 'BarBelow_content__GWWbR',
                title: 'BarBelow_title__hBNPY',
                text: 'BarBelow_text__tU_Rm',
                buttons: 'BarBelow_buttons__XGwDQ',
                advDisclaimer: 'BarBelow_advDisclaimer__ZbpQU',
                advDisclaimerTrigger: 'BarBelow_advDisclaimerTrigger___O0bh',
                advDisclaimerContent: 'BarBelow_advDisclaimerContent__lKKit',
                advDisclaimerInner: 'BarBelow_advDisclaimerInner__1CyNr',
                advDisclaimerText: 'BarBelow_advDisclaimerText__wJgZZ',
            };
        },
        83439: (e) => {
            e.exports = { root: 'Navbar_root__chF4R', root_collapsed: 'Navbar_root_collapsed__pozJX' };
        },
        83557: (e, t, a) => {
            'use strict';
            a.d(t, { m: () => r });
            var i = a(60900),
                n = a(29913);
            let r = (e, t) => {
                let { formatMessage: a } = (0, i.A)(),
                    { hours: r, minutes: s, seconds: o } = (0, n.e)(e),
                    { hours: l, minutes: d, seconds: c } = (0, n.e)(t);
                return a(
                    { id: 'non-music.non-music-progress' },
                    { progress: Math.round((e / t) * 100), beginHours: r, beginMinutes: s, beginSeconds: o, endHours: l, endMinutes: d, endSeconds: c },
                );
            };
        },
        83598: (e) => {
            e.exports = {
                tooltipContent: 'SeparatedArtistsWithContextMenuDesktop_tooltipContent___PtDD',
                artistItem: 'SeparatedArtistsWithContextMenuDesktop_artistItem__Ggo_W',
            };
        },
        83920: (e, t, a) => {
            'use strict';
            a.d(t, { M: () => n, g: () => r });
            var i = a(55178);
            let n = (0, i.createContext)({
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
                r = () => (0, i.useContext)(n);
        },
        86103: (e) => {
            e.exports = {
                root: 'SonataFullscreenControlsMobile_root__H6MQ7',
                sonataButtons: 'SonataFullscreenControlsMobile_sonataButtons__hLf19',
                sonataButton: 'SonataFullscreenControlsMobile_sonataButton__UGQ_U',
                playPauseButtonIcon: 'SonataFullscreenControlsMobile_playPauseButtonIcon__e5ygU',
                buttonContainer: 'SonataFullscreenControlsMobile_buttonContainer__5ITqM',
            };
        },
        86806: (e, t, a) => {
            'use strict';
            a.d(t, { F: () => c });
            var i,
                n = a(95716),
                r = a(55178),
                s = {
                    352: (e) => {
                        e.exports = n;
                    },
                    810: (e) => {
                        e.exports = i || (i = a.t(r, 2));
                    },
                },
                o = {};
            function l(e) {
                var t = o[e];
                if (void 0 !== t) return t.exports;
                var a = (o[e] = { exports: {} });
                return (s[e](a, a.exports, l), a.exports);
            }
            var d = {};
            ((() => {
                (Object.defineProperty(d, '__esModule', { value: !0 }), (d.useDebouncedToggle = void 0));
                let e = l(352),
                    t = l(810);
                d.useDebouncedToggle = (a) => {
                    let { delay: i, initialState: n, throttleTimeout: r } = a,
                        s = (0, t.useRef)(null),
                        [o, l] = (0, t.useState)(!!n),
                        d = (0, t.useMemo)(
                            () =>
                                (0, e.throttle)(() => {
                                    (l(!n),
                                        s.current && window.clearTimeout(s.current),
                                        (s.current = window.setTimeout(() => {
                                            l(!!n);
                                        }, i)));
                                }, r),
                            [i, n, r],
                        ),
                        c = (0, t.useCallback)(() => {
                            (l(!!n), s.current && window.clearTimeout(s.current));
                        }, [n]);
                    return (
                        (0, t.useEffect)(
                            () => () => {
                                s.current && window.clearTimeout(s.current);
                            },
                            [],
                        ),
                        { state: o, handleDebouncedToggle: d, reset: c }
                    );
                };
            })(),
                d.__esModule);
            var c = d.useDebouncedToggle;
        },
        88386: (e) => {
            e.exports = {
                imageContainer: 'AudioAd_imageContainer__ZmZsg',
                image: 'AudioAd_image__f6DJR',
                image_fallback: 'AudioAd_image_fallback__7ufC3',
                backgroundImage: 'AudioAd_backgroundImage__aqvQd',
                contextMenuButton: 'AudioAd_contextMenuButton__fbb47',
                contextMenuIcon: 'AudioAd_contextMenuIcon__KTxE1',
                contextMenuHeader: 'AudioAd_contextMenuHeader__97XqU',
            };
        },
        88763: (e, t, a) => {
            'use strict';
            a.d(t, { G: () => i });
            let i = (0, a(55178).createContext)({ data: null, isEnabled: !1 });
        },
        89053: (e) => {
            e.exports = { tooltip: 'NavigationOnboarding_tooltip___xZni', text: 'NavigationOnboarding_text__YW93F', button: 'NavigationOnboarding_button__Vc_Ka' };
        },
        89543: (e) => {
            e.exports = {
                root: 'NavbarDesktopAnimatedShimmerBar_root__o3xBB',
                barShimmer: 'NavbarDesktopAnimatedShimmerBar_barShimmer__ejAhM',
                buttonShimmer: 'NavbarDesktopAnimatedShimmerBar_buttonShimmer___3Vz2',
            };
        },
        90006: (e) => {
            e.exports = { explicitMark: 'ExplicitMarkIcon_explicitMark__0BPeQ' };
        },
        90404: (e, t, a) => {
            'use strict';
            var i;
            (a.d(t, { _: () => i }),
                (function (e) {
                    ((e.ALBUM_ITEM = 'album_item'),
                        (e.ARTIST_ITEM = 'artist_item'),
                        (e.PLAYLIST_ITEM = 'playlist_item'),
                        (e.TRACK_ITEM = 'track_item'),
                        (e.LIKED_PLAYLIST_ITEM = 'liked_playlist_item'),
                        (e.PERSONAL_PLAYLIST_ITEM = 'personal_playlist_item'),
                        (e.WAVE_ITEM = 'wave_item'),
                        (e.WAVE_AGENT_ITEM = 'wave_agent_item'),
                        (e.MIX = 'mix'),
                        (e.MIX_CARD_ITEM = 'mix_card_item'),
                        (e.LIKED_ALBUM_ITEM = 'liked_album_item'),
                        (e.PRESAVED_ALBUM_ITEM = 'presaved_album_item'),
                        (e.CHART_ALBUM_ITEM = 'chart_album_item'),
                        (e.NON_MUSIC_ALBUM_ITEM = 'non_music_album_item'),
                        (e.MENU_ITEM = 'menu_item'),
                        (e.DONATION_ITEM = 'donation_item'),
                        (e.CLIP = 'clip'),
                        (e.CLIP_ITEM = 'clip_item'),
                        (e.CONCERT_ITEM = 'concert_item'),
                        (e.QUERY_TO_VIBE_ITEM = 'q2v_item'));
                })(i || (i = {})));
        },
        91253: (e, t, a) => {
            'use strict';
            a.d(t, { A: () => v });
            var i = a(32290),
                n = a(92708),
                r = a(55178),
                s = a(60900),
                o = a(45477),
                l = a(75582),
                d = a(57594),
                c = a(90357),
                u = a(96103),
                _ = a(8097),
                m = a(79238);
            let p = (0, u.PA)((e) => {
                    let { album: t, closeToast: a } = e,
                        n = (0, m.b)(t);
                    return (0, i.jsx)(_.k, {
                        closeToast: a,
                        entityVariant: n,
                        coverUri: t.coverUri,
                        entityUrl: t.url,
                        entityTitle: t.title,
                        isPinned: t.isPinned,
                        radius: 's',
                    });
                }),
                v = (e) => {
                    let { user: t } = (0, d.g)(),
                        { notify: a } = (0, l.l)(),
                        { formatMessage: u } = (0, s.A)(),
                        [_, m] = (0, r.useState)(!1);
                    return (0, r.useCallback)(async () => {
                        if (!t.isAuthorized)
                            return void a((0, i.jsx)(c.h, { error: u({ id: 'authorization-messages.need-to-authorizate' }) }), { containerId: o.u.ERROR });
                        if (_) return;
                        let r = { ...(0, n.HO)(e), url: e.url, isPinned: !e.isPinned };
                        m(!0);
                        let s = await e.togglePin();
                        (m(!1),
                            s
                                ? a((0, i.jsx)(p, { album: r }), { containerId: o.u.INFO })
                                : a((0, i.jsx)(c.h, { error: u({ id: 'error-messages.error-during-action' }) }), { containerId: o.u.ERROR }));
                    }, [e, u, a, _, t.isAuthorized]);
                };
        },
        91624: (e) => {
            e.exports = { descriptionTextItem: 'DescriptionTextsDisclaimer_descriptionTextItem__XtzRU' };
        },
        91819: (e) => {
            e.exports = {
                userProfileContainer: 'NavbarDesktopUserWidget_userProfileContainer__ha3Tm',
                userProfile: 'NavbarDesktopUserWidget_userProfile__vqeMC',
                userId: 'NavbarDesktopUserWidget_userId__ihL7U',
                userMeta_withAnimation: 'NavbarDesktopUserWidget_userMeta_withAnimation__rrz0Y',
                animation_show: 'NavbarDesktopUserWidget_animation_show__fadL3',
                userMeta_collapsed: 'NavbarDesktopUserWidget_userMeta_collapsed__cSARy',
                animation_hide: 'NavbarDesktopUserWidget_animation_hide__tO81o',
                unauthorizedBar: 'NavbarDesktopUserWidget_unauthorizedBar__HE5Yu',
            };
        },
        91853: (e, t, a) => {
            'use strict';
            a.d(t, { S: () => n });
            var i = a(19383);
            let n = (e) => {
                let { artist: t, callback: a, shouldHistoryBack: n } = e;
                return (0, i.l)({ entity: t, callback: a, modalBehavior: void 0 === n ? void 0 : { shouldHistoryBack: n }, preventDefaultWhenSafe: !0 });
            };
        },
        92013: (e, t, a) => {
            'use strict';
            var i;
            (a.d(t, { T: () => i }),
                (function (e) {
                    ((e.OK = 'ok'), (e.ERROR = 'error'));
                })(i || (i = {})));
        },
        92854: (e) => {
            e.exports = {
                root: 'SideAdvertBanner_root__hT1jJ',
                root_vibePage: 'SideAdvertBanner_root_vibePage__PLY_P',
                root_hidden: 'SideAdvertBanner_root_hidden__Yg__R',
                contentWrapper: 'SideAdvertBanner_contentWrapper__5255E',
                content: 'SideAdvertBanner_content__nDGWG',
            };
        },
        92881: (e) => {
            e.exports = {
                root: 'WithTopBanner_root__P__x3',
                banner: 'WithTopBanner_banner__x1Ia2',
                banner_canShow: 'WithTopBanner_banner_canShow__5KA30',
                content: 'WithTopBanner_content__6Vh7a',
            };
        },
        95082: (e) => {
            e.exports = {
                root: 'ListeningProgress_root__Rvlcn',
                text_withoutTimeLeft: 'ListeningProgress_text_withoutTimeLeft__eAmOF',
                checkIcon: 'ListeningProgress_checkIcon___yh49',
            };
        },
        95731: (e) => {
            e.exports = {
                timecode: 'TimecodeGroup_timecode__IJXpy',
                timecode_current: 'TimecodeGroup_timecode_current__wv9pb',
                timecode_current_animation: 'TimecodeGroup_timecode_current_animation__kZUW_',
                timecode_current_hidden: 'TimecodeGroup_timecode_current_hidden__D88_K',
                timecode_end: 'TimecodeGroup_timecode_end__kzP5g',
                timecode_end_hidden: 'TimecodeGroup_timecode_end_hidden__BxQ5h',
            };
        },
        96764: (e, t, a) => {
            'use strict';
            var i;
            (a.d(t, { T: () => i }),
                (function (e) {
                    ((e.CLOSE = 'close'), (e.LINK = 'link'), (e.PAYWALL = 'paywall'));
                })(i || (i = {})));
        },
        97153: (e) => {
            e.exports = {
                root: 'Pin_root__UyplT',
                ripple: 'Pin_ripple__Vzpzs',
                link: 'Pin_link__nz6I7',
                root_withoutLink: 'Pin_root_withoutLink__fr1XH',
                info: 'Pin_info__x_7Zx',
                info_withContextMenu: 'Pin_info_withContextMenu__7HX5A',
                info_collapsed: 'Pin_info_collapsed__bF9ac',
                info_animated: 'Pin_info_animated__AQQZk',
                show: 'Pin_show__xSkOa',
                hide: 'Pin_hide__RCc9X',
                meta: 'Pin_meta__MzX_7',
                contextMenu: 'Pin_contextMenu__WGmhp',
                contextMenu_hidden: 'Pin_contextMenu_hidden__xksGY',
                title: 'Pin_title__Jw5WW',
                subtitle: 'Pin_subtitle__rb8Gq',
                cover: 'Pin_cover__7ofYY',
                cover_withAnimation: 'Pin_cover_withAnimation__2Z2n6',
                show_and_scale: 'Pin_show_and_scale__VdNfj',
            };
        },
        99169: (e, t, a) => {
            'use strict';
            a.d(t, { z: () => o, r: () => l });
            var i = a(70208),
                n = a(60754),
                r = a(13616);
            let s = n.gK.model('CustomPlayerThumbItem', { id: n.gK.enumeration(Object.values(i.T)), name: n.gK.string, thumb: r.K }),
                o = {
                    [i.T.DUCK]: () =>
                        a
                            .e(8962)
                            .then(a.t.bind(a, 68962, 17))
                            .then((e) => e.default),
                    [i.T.CAR]: () =>
                        a
                            .e(8765)
                            .then(a.t.bind(a, 68765, 17))
                            .then((e) => e.default),
                },
                l = (e) =>
                    new Map([
                        [i.T.DUCK, s.create({ id: i.T.DUCK, name: e({ id: 'branded-player.duck' }), thumb: { href: i.T.DUCK, width: 50, height: 50 } })],
                        [i.T.CAR, s.create({ id: i.T.CAR, name: e({ id: 'branded-player.car' }), thumb: { href: i.T.CAR, width: 143, height: 38 } })],
                    ]);
        },
        99622: (e) => {
            e.exports = { root: 'FullscreenPlayerDesktopButton_root__qGgoC', button: 'FullscreenPlayerDesktopButton_button__7NEl6' };
        },
        99937: (e) => {
            e.exports = { root: 'LayoutNotificationContainers_root__5HClw' };
        },
    },
]);
