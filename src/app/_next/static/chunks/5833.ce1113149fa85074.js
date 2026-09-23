(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [5833],
    {
        421: (e, t, a) => {
            'use strict';
            var i;
            (a.d(t, { o: () => i }),
                (function (e) {
                    ((e.ARTIST = 'artist'), (e.COMPOSER = 'composer'));
                })(i || (i = {})));
        },
        771: (e) => {
            e.exports = {
                root: 'TopSectionDesktop_root__lDNkV',
                wrapper: 'TopSectionDesktop_wrapper__sEPZr',
                content: 'TopSectionDesktop_content__356Uk',
                title: 'TopSectionDesktop_title__JFo6R',
                label: 'TopSectionDesktop_label__JmilG',
                buySubscriptionBlock: 'TopSectionDesktop_buySubscriptionBlock__dhv3Z',
            };
        },
        2527: (e, t, a) => {
            'use strict';
            a.d(t, { s: () => i });
            var i = (function (e) {
                return ((e.VIDEO = 'video-ad-player'), (e.SLOT = 'video-ad-container'), e);
            })({});
        },
        3192: (e) => {
            e.exports = {
                imageContainer: 'MultivibeInviteModal_imageContainer__PYWbp',
                multivibeCover: 'MultivibeInviteModal_multivibeCover__CCkS0',
                multivibeAvatar: 'MultivibeInviteModal_multivibeAvatar__kBvGN',
                multivibeControl: 'MultivibeInviteModal_multivibeControl__hoO93',
                guestAvatar: 'MultivibeInviteModal_guestAvatar__pIobb',
                spinnerWrapper: 'MultivibeInviteModal_spinnerWrapper__KyeNf',
            };
        },
        3311: (e) => {
            e.exports = { root: 'PaywallFAQCollapse_root___gwrQ', root_collapsed: 'PaywallFAQCollapse_root_collapsed__gx8IK' };
        },
        3313: (e, t, a) => {
            'use strict';
            a.d(t, { Y: () => c });
            var i = a(11386),
                l = a(49364),
                n = a(55178),
                s = a(86562),
                r = a(91945);
            class o extends i.uN {}
            (0, r._)(o, 'activators', [
                {
                    eventName: 'onKeyDown',
                    handler: (e) => {
                        let { nativeEvent: t } = e;
                        return (!(t.target instanceof HTMLElement) || 'button' !== t.target.tagName.toLowerCase()) && t.code === s.v.ENTER;
                    },
                },
            ]);
            let c = () => {
                let [e, t] = (0, n.useState)(null),
                    a = (0, n.useCallback)((e) => {
                        let { active: a } = e;
                        t(a.id);
                    }, []);
                return {
                    activeId: e,
                    handleDragStart: a,
                    handleDragCancel: (0, n.useCallback)(() => {
                        t(null);
                    }, []),
                    sensors: (0, i.FR)(
                        (0, i.MS)(i.cA, { activationConstraint: { distance: { y: 1 }, tolerance: 5 } }),
                        (0, i.MS)(i.IG, { activationConstraint: { delay: 250, tolerance: 5 } }),
                        (0, i.MS)(o, { coordinateGetter: l.JR, keyboardCodes: { start: [s.v.ENTER], cancel: [s.v.ESCAPE], end: [s.v.ENTER] } }),
                    ),
                };
            };
        },
        3410: (e, t, a) => {
            'use strict';
            a.d(t, { D: () => d });
            var i = a(32290),
                l = a(96103),
                n = a(71926),
                s = a(57594),
                r = a(61258),
                o = a(7925),
                c = a.n(o);
            let d = (0, l.PA)((e) => {
                let { children: t, href: a, className: l } = e,
                    {
                        currentTrackInfo: { modal: o },
                    } = (0, s.g)();
                return a
                    ? (0, i.jsx)(r.N, {
                          className: c().link,
                          href: a,
                          onClick: o.close,
                          children: (0, i.jsx)(n.HL, { className: l, variant: 'div', size: 'l', children: t }),
                      })
                    : (0, i.jsx)(n.HL, { className: l, variant: 'div', size: 'l', children: t });
            });
        },
        3466: (e) => {
            e.exports = {
                root: 'DownloadMobileApp_root__RU7VS',
                closeButton: 'DownloadMobileApp_closeButton__t38Rw',
                text: 'DownloadMobileApp_text__bCbs3',
                subtitle: 'DownloadMobileApp_subtitle__vPtiS',
                buttons: 'DownloadMobileApp_buttons__mL4w1',
                button: 'DownloadMobileApp_button__r0E7Z',
                stayButton: 'DownloadMobileApp_stayButton__k3Ot8',
            };
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
        3856: (e) => {
            e.exports = { topSection: 'PaywallBYDesktop_topSection__AS3Pv' };
        },
        3991: (e) => {
            e.exports = {
                root: 'MainSectionDesktop_root__MjgTL',
                headingContainer: 'MainSectionDesktop_headingContainer__IaoRT',
                contentContainer: 'MainSectionDesktop_contentContainer__L4OlR',
            };
        },
        3992: (e) => {
            e.exports = {
                icon: 'PlayQueueButton_icon__7fc0G',
                icon_active: 'PlayQueueButton_icon_active__4A8H2',
                animation_scaled: 'PlayQueueButton_animation_scaled__w_Wir',
                scale: 'PlayQueueButton_scale__dXShR',
                animation_unscaled: 'PlayQueueButton_animation_unscaled__Lt_j9',
                unscale: 'PlayQueueButton_unscale__BlmKQ',
            };
        },
        4408: (e, t, a) => {
            'use strict';
            a.d(t, { s: () => i });
            let i = RegExp('(px|%)$');
        },
        5537: (e, t, a) => {
            'use strict';
            a.d(t, { N: () => n });
            var i = a(57594),
                l = a(79406);
            let n = () => {
                var e, t;
                let {
                    user: a,
                    settings: { browserInfo: n },
                    experiments: s,
                } = (0, i.g)();
                return (
                    !(null == n ? void 0 : n.isTouch) &&
                    a.isAuthorized &&
                    !a.hasPlus &&
                    (null == (t = s.getExperiment(l.z.WebNextDesktopWebFreemium)) || null == (e = t.value) ? void 0 : e.closeListening) === 'on'
                );
            };
        },
        5874: (e) => {
            e.exports = {
                root: 'TrailerError_root__GwuKR',
                textContainer: 'TrailerError_textContainer__lF7RZ',
                title: 'TrailerError_title__Q52Pa',
                description: 'TrailerError_description__60UJ6',
            };
        },
        6054: (e) => {
            e.exports = {
                root: 'VideoAd_root__e7gla',
                root_hidden: 'VideoAd_root_hidden__78CPl',
                videoBlock: 'VideoAd_videoBlock__bqNRq',
                video: 'VideoAd_video__j1f_y',
                content: 'VideoAd_content__QroDp',
                close: 'VideoAd_close__sMGlV',
                notifyClose: 'VideoAd_notifyClose__w82mE',
                cover: 'VideoAd_cover__kQwxh',
                important: 'VideoAd_important__VZkA_',
                icon: 'VideoAd_icon__o_Hzn',
                text: 'VideoAd_text__rjKqZ',
            };
        },
        6074: (e, t, a) => {
            'use strict';
            a.d(t, { _: () => i });
            var i = (function (e) {
                return ((e.INFO = 'INFO'), (e.SUCCESS = 'SUCCESS'), e);
            })({});
        },
        6488: (e) => {
            e.exports = {
                root: 'TrackModalSimilarTracks_root__EAOmg',
                title: 'TrackModalSimilarTracks_title__0WPaJ',
                item: 'TrackModalSimilarTracks_item__BGQWd',
                important: 'TrackModalSimilarTracks_important__mGqEv',
                tracksContainer: 'TrackModalSimilarTracks_tracksContainer__E55ep',
            };
        },
        6759: (e, t, a) => {
            'use strict';
            a.d(t, { m: () => s });
            var i = a(14257),
                l = a(50),
                n = a(55509);
            let s = (e) => {
                let { theme: t } = (0, l.W)(),
                    a = t === i.S.Light ? 0.48 : 0.4;
                return { '--cover-color': (0, n.e)(e, 0.8, a) };
            };
        },
        6820: (e) => {
            e.exports = {
                root: 'ArtistAboutModal_root__bmUo9',
                modalContent: 'ArtistAboutModal_modalContent__RGkJk',
                header: 'ArtistAboutModal_header__yLnAj',
                overlay: 'ArtistAboutModal_overlay__6hToT',
                closeButton: 'ArtistAboutModal_closeButton__Gnz25',
            };
        },
        7448: (e) => {
            e.exports = { growContainer: 'FamilyInviteStepInfo_growContainer__y0xmo', important: 'FamilyInviteStepInfo_important__YvkpI' };
        },
        7925: (e) => {
            e.exports = { root: 'InfoBlock_root__2D2Mj', infoTitle: 'InfoBlock_infoTitle___At72', link: 'InfoBlock_link__iA21Q' };
        },
        8200: (e) => {
            e.exports = { playButtonCell: 'TrackAlbum_playButtonCell__pLJte', controlsBarCell: 'TrackAlbum_controlsBarCell__XUUCc' };
        },
        8606: (e) => {
            e.exports = {
                root: 'TrackModalAlbumShimmer_root__iGoUU',
                title: 'TrackModalAlbumShimmer_title__2jt8z',
                coverBlock: 'TrackModalAlbumShimmer_coverBlock__PQFDQ',
                cover: 'TrackModalAlbumShimmer_cover__AI0zt',
                linkBlock: 'TrackModalAlbumShimmer_linkBlock__yBLL4',
                link: 'TrackModalAlbumShimmer_link__7_gHs',
                description: 'TrackModalAlbumShimmer_description__63Pnt',
            };
        },
        8626: (e, t, a) => {
            'use strict';
            a.d(t, { m: () => i });
            let i = () => ({ year: 'numeric' });
        },
        8653: (e) => {
            e.exports = {
                root: 'ClipAboutModalDesktop_root__F8UU5',
                root_withFullscreen: 'ClipAboutModalDesktop_root_withFullscreen__nTO1X',
                root_withWindows: 'ClipAboutModalDesktop_root_withWindows__kl4sc',
                header: 'ClipAboutModalDesktop_header__at6X6',
                modalContent: 'ClipAboutModalDesktop_modalContent__Rp_ON',
                explicitMark: 'ClipAboutModalDesktop_explicitMark__SLwRj',
                important: 'ClipAboutModalDesktop_important__LkqWo',
                content: 'ClipAboutModalDesktop_content__0dUY1',
                titleShimmer: 'ClipAboutModalDesktop_titleShimmer__zTtu_',
            };
        },
        8677: (e, t, a) => {
            'use strict';
            a.d(t, { Q: () => w });
            var i = a(32290),
                l = a(63618),
                n = a(96103),
                s = a(55178),
                r = a(60900),
                o = a(39407),
                c = a(99923),
                d = a(21732),
                u = a(91027),
                _ = a(82586),
                m = a(70280),
                p = a(71926),
                v = a(17705),
                x = a(63423);
            let y = (e) => {
                let { className: t, variant: a = 'text', onClick: l, iconClassName: n, iconSize: o, size: c = 's', ariaLabel: u } = e,
                    { formatMessage: m } = (0, r.A)(),
                    p = null != u ? u : m({ id: 'play-queue.delete-from-queue' }),
                    v = (0, s.useCallback)(
                        (e) => {
                            (null == l || l(), e.stopPropagation());
                        },
                        [l],
                    );
                return (0, i.jsx)(x.$, {
                    className: t,
                    withRipple: !1,
                    variant: a,
                    size: c,
                    radius: 'round',
                    'aria-label': p,
                    onClick: v,
                    icon: (0, i.jsx)(_.I, { size: o, className: n, variant: 'bucket' }),
                    'data-test-id': d.OA.track.REMOVE_BUTTON,
                });
            };
            var h = a(71735),
                C = a(54391),
                g = a(22191),
                A = a(28999),
                b = a(57594),
                f = a(92744),
                j = a(29268),
                N = a(4008),
                T = a(53161),
                S = a(52843),
                I = a(39400),
                k = a(54714),
                L = a.n(k),
                E = a(38420),
                M = a(92565),
                P = a.n(M);
            let O = (0, n.PA)((e) => {
                    let { track: t } = e,
                        { formatMessage: a } = (0, r.A)();
                    return t.isDownloaded
                        ? (0, i.jsx)(_.I, {
                              size: 'xxs',
                              variant: 'downloaded',
                              'aria-label': a({ id: 'offline.track-downloaded' }),
                              'data-test-id': d.Kq.track.DOWNLOADED_TRACK_ICON,
                          })
                        : t.isDownloading
                          ? (0, i.jsx)(E.A, { value: t.downloadingProgress, size: 16, className: P().downloadingProgress, progressBarClassName: P().progress })
                          : null;
                }),
                w = (0, n.PA)((e) => {
                    var t, a;
                    let {
                            className: n,
                            track: x,
                            withLightning: k,
                            ignoreDislikedStyles: E,
                            onLikeClick: M,
                            utmLink: P,
                            withSecondaryColor: w,
                            handleRemove: R,
                            withTrailer: D = !0,
                            likeIconSize: B = 'xxs',
                            removeButtonAriaLabel: F,
                            hideControls: U,
                        } = e,
                        { user: z, trailer: W } = (0, b.g)(),
                        { formatMessage: K } = (0, r.A)(),
                        { sendLikeSearchFeedback: H } = (0, A.z)(),
                        [V, Y] = (0, s.useState)(!1),
                        [q, Q] = (0, s.useState)(!1),
                        $ = (0, h.P)(),
                        G = (0, v.K)(x),
                        Z = (0, g.P)(Math.round((null != (a = x.durationMs) ? a : 0) / 1e3)),
                        X = (0, C.F)(),
                        J = z.hasPlus,
                        ee = !x.isRemoved && x.isAvailable && !U,
                        et = (0, u.c)(async () => {
                            (V || x.isLiked || (Y(!0), null == H || H()), await G(), null == M || M(x.isLiked));
                        }),
                        ea = (0, u.c)((e) => {
                            e.stopPropagation();
                        }),
                        ei = (0, u.c)((e) => {
                            if ((e.stopPropagation(), $())) return void e.preventDefault();
                            (W.openTrackTrailer(x.id), X(c.DomainObjectType.Track, x.id));
                        }),
                        el = (0, s.useMemo)(() => {
                            if (ee)
                                return (0, i.jsx)('div', {
                                    onClick: ea,
                                    children: (0, i.jsx)(I._, {
                                        track: x,
                                        open: q,
                                        onOpenChange: Q,
                                        placement: 'bottom',
                                        icon: (0, i.jsx)(_.I, { size: 'xs', variant: 'more' }),
                                        size: 'xs',
                                        utmLink: P,
                                        className: (0, l.$)(L().contextMenu, { [L().contextMenu_visible]: q }),
                                        handleRemove: R,
                                        withTrailer: D,
                                        'data-test-id': d.Kq.track.TRACK_CONTEXT_MENU_BUTTON,
                                    }),
                                });
                        }, [ea, R, q, ee, D, x, P]);
                    return (0, i.jsxs)('div', {
                        className: (0, l.$)(L().root, L().controls, n, {
                            [L().controls_dislikedControls]: x.isDisliked,
                            [L().controls_dislikedColors]: x.isDisliked && !E,
                            [L().controls_disabled]: !x.isAvailable,
                            [L().root_withSecondaryColor]: w,
                        }),
                        children: [
                            k &&
                                (0, i.jsx)(_.I, {
                                    'aria-label': K({ id: 'entity-names.popular-among-users' }),
                                    size: 'xxs',
                                    className: L().lightning,
                                    variant: 'lightning',
                                }),
                            x.isUGC &&
                                (0, i.jsxs)(m.m_, {
                                    placement: 'bottom',
                                    offsetOptions: 8,
                                    children: [
                                        (0, i.jsx)(_.I, {
                                            'aria-label': K({ id: 'ugc.track-description' }),
                                            size: 'xxs',
                                            className: L().ugcIcon,
                                            variant: 'eye_crossed',
                                            'data-test-id': d.Kq.track.UGC_TRACK_ICON,
                                        }),
                                        (0, i.jsx)(m.ZI, { children: (0, i.jsx)(o.A, { id: 'ugc.track-description' }) }),
                                    ],
                                }),
                            J && (0, i.jsx)('div', { className: (0, l.$)(L().item, L().downloadIcon), children: (0, i.jsx)(O, { track: x }) }),
                            R && !U && (0, i.jsx)(y, { size: 'xs', iconSize: 'xxs', className: (0, l.$)(L().item, L().removeButton), onClick: R, ariaLabel: F }),
                            ee &&
                                (0, i.jsx)(N.WithOffline, {
                                    fallback: (0, i.jsx)(f.c, {
                                        size: 'xs',
                                        iconSize: B,
                                        className: (0, l.$)(L().item, L().likeIcon),
                                        isLiked: x.isLiked,
                                        onClick: et,
                                        disabled: !z.isAuthorized,
                                    }),
                                }),
                            (null == (t = x.trailer) ? void 0 : t.isAvailable) &&
                                x.isAvailable &&
                                (0, i.jsx)(N.WithOffline, {
                                    fallback: (0, i.jsx)(j.k, {
                                        className: (0, l.$)(L().item, L().trailerIcon),
                                        iconSize: 'xs',
                                        variant: 'text',
                                        onClick: ei,
                                        withRipple: !1,
                                    }),
                                }),
                            (0, i.jsxs)('div', {
                                className: (0, l.$)(L().item, L().contextMenuWrapper),
                                children: [
                                    'number' == typeof x.durationMs &&
                                        (0, i.jsx)(p.HL, {
                                            variant: 'span',
                                            className: (0, l.$)(L().duration, { [L().duration_hidden]: q && ee }),
                                            type: 'entity',
                                            size: 'm',
                                            weight: 'medium',
                                            'aria-label': Z,
                                            role: 'text',
                                            'data-test-id': d.Kq.track.TRACK_DURATION,
                                            children: (0, i.jsx)('span', {
                                                'aria-hidden': 'true',
                                                children: ((e) => {
                                                    let t = Math.round((e || 0) / T.k7);
                                                    return (0, S.E)(t);
                                                })(x.durationMs),
                                            }),
                                        }),
                                    el,
                                ],
                            }),
                        ],
                    });
                });
        },
        9152: (e, t, a) => {
            'use strict';
            a.d(t, { F: () => l });
            var i = a(71483);
            function l(e) {
                return (null == e ? void 0 : e.data.type) === i.K.Album;
            }
        },
        9316: (e) => {
            e.exports = {
                content_ru: 'PlusSectionDesktop_content_ru__85q1P',
                content_by: 'PlusSectionDesktop_content_by__UBg10',
                card: 'PlusSectionDesktop_card__h8LmR',
                logo_ru: 'PlusSectionDesktop_logo_ru__G2AkZ',
                logo_en: 'PlusSectionDesktop_logo_en__gn4qE',
            };
        },
        10734: (e) => {
            e.exports = {
                root: 'EditContentModal_root__spGT4',
                modalContent: 'EditContentModal_modalContent__uk5Di',
                header: 'EditContentModal_header__F6BJQ',
                title: 'EditContentModal_title__OFu19',
                content: 'EditContentModal_content__6yEGM',
                field: 'EditContentModal_field__rexIL',
                label: 'EditContentModal_label__Cf3Kp',
                input: 'EditContentModal_input__8O8GH',
                input_error: 'EditContentModal_input_error__fxTOr',
                buttons: 'EditContentModal_buttons__bHzfS',
                button: 'EditContentModal_button__usS1Z',
            };
        },
        11260: (e, t, a) => {
            'use strict';
            a.d(t, { L: () => g });
            var i = a(32290),
                l = a(96103),
                n = a(55178),
                s = a(60900),
                r = a(39407),
                o = a(54862),
                c = a(63423),
                d = a(82586),
                u = a(70280),
                _ = a(71926),
                m = a(83920),
                p = a(59518),
                v = a(34284),
                x = a(46151),
                y = a(68104),
                h = a.n(y);
            let C = { width: 20, height: 8, tipRadius: 2, fill: 'var(--ym-background-color-primary-enabled-tooltip)' },
                g = (0, l.PA)((e) => {
                    let { children: t, customMessage: a, shouldForceOpenTooltip: l } = e,
                        { formatMessage: y } = (0, s.A)(),
                        { contentRef: g } = (0, m.g)(),
                        { setIsOnboardingOpened: A } = (0, x.w)(),
                        [b, f] = (0, o.d)(),
                        j = (0, v.z)({ id: p.h.TRAILER_BUTTON, ref: b }) || !!l,
                        [N, T] = (0, n.useState)(j),
                        S = (0, n.useCallback)(
                            (e) => {
                                (null == e || e.stopPropagation(), T(!1), A(!1));
                            },
                            [A],
                        ),
                        I = (0, n.useCallback)(
                            (e) => {
                                e || S();
                            },
                            [S],
                        );
                    return (0, i.jsxs)(u.m_, {
                        placement: 'bottom',
                        arrowProps: C,
                        offsetOptions: 14,
                        isHoverEnabled: !1,
                        open: N,
                        onOpenChange: I,
                        enableAriaDescribedby: !0,
                        referenceRef: f,
                        children: [
                            t,
                            (0, i.jsxs)(u.ZI, {
                                className: h().root,
                                rootNode: g,
                                children: [
                                    (0, i.jsx)(c.$, {
                                        icon: (0, i.jsx)(d.I, { variant: 'close', size: 'xxs' }),
                                        onClick: S,
                                        variant: 'text',
                                        className: h().close,
                                        withRipple: !1,
                                        'aria-label': y({ id: 'interface-actions.close' }),
                                    }),
                                    (0, i.jsx)(_.HL, {
                                        variant: 'span',
                                        className: h().text,
                                        children: a || (0, i.jsx)(r.A, { id: 'onboarding.trailer', values: { br: (0, i.jsx)('br', {}) } }),
                                    }),
                                ],
                            }),
                        ],
                    });
                });
        },
        11909: (e) => {
            e.exports = {
                root: 'MainSectionMobile_root__l2R5l',
                headingContainer: 'MainSectionMobile_headingContainer__6mJvx',
                contentContainer: 'MainSectionMobile_contentContainer__vmaD5',
            };
        },
        12944: (e) => {
            e.exports = { root: 'TrackModalAlbum_root__ux7J4', title: 'TrackModalAlbum_title__CtM2_' };
        },
        12989: (e, t, a) => {
            'use strict';
            a.d(t, { D: () => h });
            var i = a(55178),
                l = a(17811),
                n = a(92146),
                s = a(74416),
                r = a(6752),
                o = a(62376),
                c = a(1677),
                d = a(48922),
                u = a(84782),
                _ = a(30915),
                m = a(18746),
                p = a(2792),
                v = a(37240),
                x = a(51012),
                y = a(47498);
            let h = () => {
                let e = (0, o.U)(),
                    t = (0, s.st)(),
                    { hash: a } = (0, s.gf)(),
                    { pageId: h, displayReasonId: C } = (0, v.$)(),
                    { tabId: g, tabPos: A, isTabSelectedByDefault: b } = (0, y.R)(),
                    { offsetBlockPosY: f } = (0, _.u)(),
                    { blockType: j, blockId: N, blockPosX: T, blockPosY: S, mainObjectId: I, mainObjectType: k, displayReasonId: L } = (0, u.N)(),
                    { filterKey: E, filterValue: M, filterPos: P } = (0, m.G)(),
                    { objectType: O, objectsCount: w, objectId: R, objectPosX: D, objectPosY: B } = (0, p.J)(),
                    { skeleton: F } = (0, x.b)(),
                    U = null != L ? L : C,
                    z = (0, r.L)(() => (void 0 !== f && void 0 !== S ? f + S : S));
                return (0, i.useCallback)(
                    (i, s) => {
                        if (!t || !h || !d.xK.includes(h) || !d.fD.includes(h)) return;
                        let r = c.F[h];
                        if (!r) return;
                        let o = {
                            hash: a,
                            pageId: r,
                            entityType: j,
                            entityId: N,
                            entityPosX: T,
                            entityPosY: z,
                            objectsCount: w,
                            viewUuid: s,
                            objectType: O,
                            objectId: R,
                            objectPosX: D,
                            objectPosY: B,
                        };
                        (void 0 !== E && ((o.filterKey = E), (o.filterValue = M), (o.filterPos = P)),
                            d.qG.includes(h) && ((o.tabId = g), (o.tabPos = A), (o.isTabSelectedByDefault = b)),
                            F && (o.skeletonId = F),
                            'string' == typeof I && 'string' == typeof k && ((o.mainObjectType = k), (o.mainObjectId = I)),
                            U && (o.displayReasonId = U));
                        let u = (0, l.F)({ params: o, logger: e, context: 'useSendEventOnBlockShowedOrHidden' });
                        u && (i ? (0, n.Pf)(t.evgenInstance, u) : (0, n.nv)(t.evgenInstance, u));
                    },
                    [t, U, N, T, z, j, E, P, M, a, b, e, I, k, R, D, B, O, w, h, F, g, A],
                );
            };
        },
        14459: (e, t, a) => {
            'use strict';
            function i() {
                return { appId: '117328825040925' };
            }
            a.d(t, { k: () => i });
        },
        14934: (e, t, a) => {
            'use strict';
            a.d(t, { MN: () => d, hg: () => c });
            var i,
                l = a(55178),
                n = {
                    5881: (e, t, a) => {
                        function i() {
                            for (var e, t, a = 0, i = ''; a < arguments.length;)
                                (e = arguments[a++]) &&
                                    (t = (function e(t) {
                                        var a,
                                            i,
                                            l = '';
                                        if ('string' == typeof t || 'number' == typeof t) l += t;
                                        else if ('object' == typeof t)
                                            if (Array.isArray(t)) for (a = 0; a < t.length; a++) t[a] && (i = e(t[a])) && (l && (l += ' '), (l += i));
                                            else for (a in t) t[a] && (l && (l += ' '), (l += a));
                                        return l;
                                    })(e)) &&
                                    (i && (i += ' '), (i += t));
                            return i;
                        }
                        (a.r(t), a.d(t, { clsx: () => i, default: () => l }));
                        let l = i;
                    },
                    8765: (e, t, a) => {
                        (a.r(t), a.d(t, { default: () => i }));
                        let i = {
                            root: 'KL50tMDvfAdw_9MzcVht',
                            bottom: 'bL0wE1Bui8zpIZbvMVL3',
                            top: 'P6gOmyFtXyetUz0dqhF3',
                            bottom_left: 'RvWjZle1erRBXzJEF9Zj',
                            bottom_right: 'bBh7lvgdfF7bqNqlK78Q',
                            label: 'FgncHYHPDU14dLddn0wF',
                            controls: 'PBhQ1krUFiAybu_BS2YE',
                            controls_radius_default: 'cSCPJSa6Lx6OnpM4ljX9',
                            controls_radius_round: 'kHUOlGxOaBwL4P3jEBXU',
                            controls_visible: 'QZC5vQL9p11QsEkdkTtZ',
                        };
                    },
                    3550: (e, t, a) => {
                        (a.r(t), a.d(t, { default: () => i }));
                        let i = {
                            root: 'laBJlJAaqEVS0i_4Ot3l',
                            titleContainer: 'LmhA6nlLyzxwYIX31gYa',
                            wrapper: 'IO4kvpDGNI2J0CHwcKSf',
                            content: 'l8SktNpJd30JWp1owp_b',
                            content_left: 'Mb33JzAWx9EjbQAeScFt',
                            description: 'kbcBH9meMfY6Du_xQNnI',
                            content_center: 'Dp41JRuLGzwV3MHBYHMC',
                            content_right: 'eOsuNCgUirwAw16iUKLu',
                            title: 'FAmeEGy52GX1k0xZuPDn',
                            content_linesCount_1: 'Cfj1Wkh1bvQMCfk1mZwK',
                            content_linesCount_2: 'lV4OXsCTURC5K1s9Q5mx',
                            content_linesCount_3: 'PVBDIXF2RTUThmbNT9sV',
                            content_linesCount_4: 'ND4XIwkIYtNoU89EOISr',
                        };
                    },
                    4353: (e, t, a) => {
                        (a.r(t), a.d(t, { default: () => i }));
                        let i = { root: 'LizdJ2L0HW7JWOvPrfly' };
                    },
                    7319: (e, t, a) => {
                        (a.r(t), a.d(t, { default: () => i }));
                        let i = { root: 'eaYyesBmJL_NbkgoYR1c', focusable: 'uL1dD5rxgI4bPmfyMMe7' };
                    },
                    1246: (e, t, a) => {
                        (a.r(t), a.d(t, { default: () => i }));
                        let i = {
                            root_controls_xxs: 'tRaaBpDMg9Qu8v6gKjtn',
                            root_entity_xxs: 'M9zvtlcpLUVn6DKdcHhj',
                            root_text_xxs: 'ln0PYYwDmFnfYxCDJsFU',
                            root_controls_xs: 'n5AeWEsJC3_AYXcbK4Lt',
                            root_entity_xs: '__hrMKGmNbw54T54IUyh',
                            root_text_xs: 'SehSa7OyRpC2nzYTVb2Q',
                            root_controls_s: '_oBLf5gprWsKjCw4Ce58',
                            root_entity_s: 'mxSPe5xpZnie9gpIqacd',
                            root_text_s: 'Ai2iRN9elHpk_u5splD6',
                            root_controls_m: 'tk7ahHRDYXJMMB879KUA',
                            root_entity_m: 'Z_WIr2W8JU4MPQek3hgR',
                            root_text_m: 'g3qWNP6xl__7qxNmtrvd',
                            root_controls_l: 'grvxapJE3vGArOKDWf6n',
                            root_entity_l: 'Esj5A1UeSi4xV4tZ839D',
                            root_text_l: 'V3WU123oO65AxsprotU9',
                            root_weight_normal: 'ZYV27jeWd30QDXu4GhaH',
                            root_weight_medium: '_3_Mxw7Si7j2g4kWjlpR',
                            root_weight_bold: 'Vi7Rd0SZWqD17F0872TB',
                        };
                    },
                    2445: (e, t, a) => {
                        (a.r(t), a.d(t, { default: () => i }));
                        let i = {
                            root_size_xs: 'qJJ288377iHlWN_RXeEE',
                            root_size_s: '_sd8Q9d_Ttn0Ufe4ISWS',
                            root_size_m: 'Ctk8dbecq31Qh7isOJPQ',
                            root_size_l: 'M_Djh6ppIkCO3A2k_BTA',
                            root_size_xl: 'dtxlzGQMPAbM2MEndXWX',
                            root_size_xxl: 'IUb9XLplTAoZqne9rNUL',
                            root_size_xxxl: 'ZYZamUwql_rfFR4RpI2B',
                            root_size_xxxxl: 'ZBZyxow5njdq8z5dnRPY',
                            root_size_xxxxxl: 'WdvQQNwdDNCdRSwRkAtT',
                            root_weight_bold: 'nSU6fV9y80WrZEfafvww',
                            root_weight_black: 'KBeGPPK4DinQzAP41Y_N',
                        };
                    },
                    61: (e, t, a) => {
                        (a.r(t), a.d(t, { default: () => i }));
                        let i = {
                            root: '_MWOVuZRvUQdXKTMcOPx',
                            root_clamp: 'LezmJlldtbHWqU7l1950',
                            root_clamp_oneline: 'oyQL2RSmoNbNQf3Vc6YI',
                            root_clamp_multiline: 'jMyoZB5J9iZbzJmWOrF0',
                        };
                    },
                    9097: (e, t) => {
                        var a = Symbol.for('react.transitional.element');
                        function i(e, t, i) {
                            var l = null;
                            if ((void 0 !== i && (l = '' + i), void 0 !== t.key && (l = '' + t.key), 'key' in t))
                                for (var n in ((i = {}), t)) 'key' !== n && (i[n] = t[n]);
                            else i = t;
                            return { $$typeof: a, type: e, key: l, ref: void 0 !== (t = i.ref) ? t : null, props: i };
                        }
                        ((t.Fragment = Symbol.for('react.fragment')), (t.jsx = i), (t.jsxs = i));
                    },
                    4377: (e, t, a) => {
                        e.exports = a(9097);
                    },
                    7742: function (e, t, a) {
                        var i =
                            (this && this.__importDefault) ||
                            function (e) {
                                return e && e.__esModule ? e : { default: e };
                            };
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.CardControls = void 0));
                        let l = a(4377),
                            n = a(5881),
                            s = a(8532),
                            r = i(a(8765));
                        t.CardControls = (e) => {
                            let {
                                    className: t,
                                    playControl: a,
                                    likeControl: i,
                                    menuControl: o,
                                    pinControl: c,
                                    trailerControl: d,
                                    isVisible: u,
                                    radius: _ = 'default',
                                    bottomContainerClassName: m,
                                    labelText: p,
                                } = e,
                                v = d || a,
                                x = o || i;
                            return (0, l.jsxs)('div', {
                                className: (0, n.clsx)(
                                    r.default.root,
                                    r.default.controls,
                                    { [r.default.controls_visible]: u },
                                    r.default['controls_radius_'.concat(_)],
                                    t,
                                ),
                                children: [
                                    (0, l.jsx)('div', { className: r.default.top, children: c }),
                                    (0, l.jsxs)('div', {
                                        className: (0, n.clsx)(r.default.bottom, m),
                                        children: [
                                            v && (0, l.jsxs)('div', { className: r.default.bottom_left, children: [d, a] }),
                                            x && (0, l.jsxs)('div', { className: r.default.bottom_right, children: [o, i] }),
                                        ],
                                    }),
                                    !!p && (0, l.jsx)(s.Label, { className: r.default.label, children: p }),
                                ],
                            });
                        };
                    },
                    7093: function (e, t, a) {
                        var i =
                            (this && this.__importDefault) ||
                            function (e) {
                                return e && e.__esModule ? e : { default: e };
                            };
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.EntityCard = void 0));
                        let l = a(4377),
                            n = a(810),
                            s = a(5881),
                            r = a(8903),
                            o = a(6530),
                            c = i(a(3550)),
                            d = (e) => {
                                let {
                                    forwardRef: t,
                                    view: a,
                                    className: i,
                                    textPosition: n = 'left',
                                    contentLinesCount: d = 2,
                                    title: u,
                                    description: _,
                                    explicitMarkComponent: m,
                                    chart: p,
                                    children: v,
                                    srTitle: x,
                                    wrapperClassName: y,
                                    ...h
                                } = e;
                                return (0, l.jsxs)('div', {
                                    className: (0, s.clsx)(c.default.root, i),
                                    ref: t,
                                    ...h,
                                    children: [
                                        (0, l.jsx)(o.SROnly, { tabIndex: -1, children: null != x ? x : u }),
                                        (0, l.jsx)('div', { className: c.default.viewContainer, children: a }),
                                        (0, l.jsxs)('div', {
                                            className: (0, s.clsx)(c.default.wrapper, y),
                                            children: [
                                                p,
                                                (0, l.jsxs)('div', {
                                                    className: (0, s.clsx)(
                                                        c.default.content,
                                                        c.default['content_'.concat(n)],
                                                        c.default['content_linesCount_'.concat(d)],
                                                    ),
                                                    children: [
                                                        u &&
                                                            (0, l.jsxs)('div', {
                                                                className: c.default.titleContainer,
                                                                children: [
                                                                    (0, l.jsx)(r.Caption, {
                                                                        className: c.default.title,
                                                                        variant: 'div',
                                                                        type: 'entity',
                                                                        size: 's',
                                                                        weight: 'medium',
                                                                        lineClamp: 2,
                                                                        children: u,
                                                                    }),
                                                                    m,
                                                                ],
                                                            }),
                                                        _,
                                                        v,
                                                    ],
                                                }),
                                            ],
                                        }),
                                    ],
                                });
                            };
                        t.EntityCard = (0, n.forwardRef)((e, t) => (0, l.jsx)(d, { forwardRef: t, ...e }));
                    },
                    2018: function (e, t, a) {
                        var i =
                            (this && this.__importDefault) ||
                            function (e) {
                                return e && e.__esModule ? e : { default: e };
                            };
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.Label = void 0));
                        let l = a(4377),
                            n = a(5881),
                            s = a(8903),
                            r = i(a(4353));
                        t.Label = (e) => {
                            let { children: t, className: a, size: i = 's', ...o } = e;
                            return (0, l.jsx)(s.Caption, {
                                variant: 'div',
                                type: 'text',
                                size: i,
                                lineClamp: 1,
                                className: (0, n.clsx)(r.default.root, a),
                                ...o,
                                children: t,
                            });
                        };
                    },
                    8532: (e, t, a) => {
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.Label = void 0));
                        var i = a(2018);
                        Object.defineProperty(t, 'Label', {
                            enumerable: !0,
                            get: function () {
                                return i.Label;
                            },
                        });
                    },
                    5531: function (e, t, a) {
                        var i =
                            (this && this.__importDefault) ||
                            function (e) {
                                return e && e.__esModule ? e : { default: e };
                            };
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.SROnly = void 0));
                        let l = a(4377),
                            n = a(5881),
                            s = a(810),
                            r = i(a(7319));
                        t.SROnly = (e) => {
                            let { className: t, focusable: a, children: i, ...o } = e,
                                c = (0, n.clsx)(r.default.root, { [r.default.focusable]: a }, t);
                            return (0, s.isValidElement)(i)
                                ? (0, s.cloneElement)(i, { ...o, className: (0, n.clsx)(c, i.props.className) })
                                : (0, l.jsx)('span', { className: c, ...o, children: i });
                        };
                    },
                    6530: (e, t, a) => {
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.SROnly = void 0));
                        var i = a(5531);
                        Object.defineProperty(t, 'SROnly', {
                            enumerable: !0,
                            get: function () {
                                return i.SROnly;
                            },
                        });
                    },
                    3412: function (e, t, a) {
                        var i =
                            (this && this.__importDefault) ||
                            function (e) {
                                return e && e.__esModule ? e : { default: e };
                            };
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.Caption = t.CaptionComponent = void 0));
                        let l = a(4377),
                            n = a(5881),
                            s = a(810),
                            r = a(5987),
                            o = i(a(1246));
                        ((t.CaptionComponent = (e) => {
                            let { forwardRef: t, variant: a, type: i = 'text', size: s = 's', className: c, children: d, weight: u = 'medium', ..._ } = e;
                            return (0, l.jsx)(r.Typography, {
                                variant: a,
                                ref: t,
                                className: (0, n.clsx)(o.default.root, o.default['root_'.concat(i, '_').concat(s)], o.default['root_weight_'.concat(u)], c),
                                ..._,
                                children: d,
                            });
                        }),
                            (t.Caption = (0, s.forwardRef)((e, a) => (0, l.jsx)(t.CaptionComponent, { forwardRef: a, ...e }))));
                    },
                    1641: function (e, t, a) {
                        var i =
                            (this && this.__importDefault) ||
                            function (e) {
                                return e && e.__esModule ? e : { default: e };
                            };
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.Heading = t.HeadingComponent = void 0));
                        let l = a(4377),
                            n = a(5881),
                            s = a(810),
                            r = a(5987),
                            o = i(a(2445));
                        ((t.HeadingComponent = (e) => {
                            let { forwardRef: t, variant: a, weight: i = 'bold', size: s = 's', className: c, children: d, ...u } = e;
                            return (0, l.jsx)(r.Typography, {
                                variant: a,
                                ref: t,
                                className: (0, n.clsx)(o.default.root, o.default['root_size_'.concat(s)], o.default['root_weight_'.concat(i)], c),
                                ...u,
                                children: d,
                            });
                        }),
                            (t.Heading = (0, s.forwardRef)((e, a) => (0, l.jsx)(t.HeadingComponent, { forwardRef: a, ...e }))));
                    },
                    5987: function (e, t, a) {
                        var i =
                            (this && this.__importDefault) ||
                            function (e) {
                                return e && e.__esModule ? e : { default: e };
                            };
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.Typography = t.TypographyComponent = void 0));
                        let l = a(4377),
                            n = a(5881),
                            s = a(810),
                            r = i(a(61));
                        function o(e) {
                            let { forwardRef: t, style: a, className: i, children: s, variant: o, lineClamp: c, ...d } = e,
                                u = c && 'string' == typeof s ? s : void 0;
                            return (0, l.jsx)(o, {
                                style: { ...a, WebkitLineClamp: c },
                                ref: t,
                                title: u,
                                className: (0, n.clsx)(
                                    r.default.root,
                                    { [r.default.root_clamp]: c && c > 0, [r.default.root_clamp_oneline]: c && 1 === c, [r.default.root_clamp_multiline]: c && c > 1 },
                                    i,
                                ),
                                ...d,
                                children: s,
                            });
                        }
                        ((t.TypographyComponent = o), (t.Typography = (0, s.forwardRef)((e, t) => (0, l.jsx)(o, { forwardRef: t, ...e }))));
                    },
                    8903: (e, t, a) => {
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.Heading = t.Caption = void 0));
                        var i = a(3412);
                        Object.defineProperty(t, 'Caption', {
                            enumerable: !0,
                            get: function () {
                                return i.Caption;
                            },
                        });
                        var l = a(1641);
                        Object.defineProperty(t, 'Heading', {
                            enumerable: !0,
                            get: function () {
                                return l.Heading;
                            },
                        });
                    },
                    810: (e) => {
                        e.exports = i || (i = a.t(l, 2));
                    },
                },
                s = {};
            function r(e) {
                var t = s[e];
                if (void 0 !== t) return t.exports;
                var a = (s[e] = { exports: {} });
                return (n[e].call(a.exports, a, a.exports, r), a.exports);
            }
            ((r.d = (e, t) => {
                for (var a in t) r.o(t, a) && !r.o(e, a) && Object.defineProperty(e, a, { enumerable: !0, get: t[a] });
            }),
                (r.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
                (r.r = (e) => {
                    ('undefined' != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
                        Object.defineProperty(e, '__esModule', { value: !0 }));
                }));
            var o = {};
            (() => {
                (Object.defineProperty(o, 'X$', { value: !0 }), (o.kk = o.m7 = void 0));
                var e = r(7093);
                Object.defineProperty(o, 'm7', {
                    enumerable: !0,
                    get: function () {
                        return e.EntityCard;
                    },
                });
                var t = r(7742);
                Object.defineProperty(o, 'kk', {
                    enumerable: !0,
                    get: function () {
                        return t.CardControls;
                    },
                });
            })();
            var c = o.kk,
                d = o.m7;
            o.X$;
        },
        15358: (e, t, a) => {
            'use strict';
            a.d(t, { r: () => r });
            var i = a(32290),
                l = a(85472);
            let n = /\[([^([\])]+)\]\(((?:https?:\/)?\/[^(()\s)]+)\)/g,
                s = /\[[^([\])]+\]\((?:https?:\/)?\/[^(()\s)]+\)/,
                r = function (e, t) {
                    let a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                    if (!e || !t) return [];
                    let r = (0, l.sanitizeDOM)(e).toString(),
                        o = [...r.matchAll(n)];
                    return r.split(s).reduce((e, l, n) => {
                        e.push(l);
                        let { 1: s, 2: r } = o[n] || [];
                        return (s && r && e.push((0, i.jsx)(t, { href: r, ...a, children: s })), e);
                    }, []);
                };
        },
        15560: (e) => {
            e.exports = {
                root: 'MultivibeModalTextBlock_root__6narg',
                title: 'MultivibeModalTextBlock_title___y6xs',
                title_withSubtitle: 'MultivibeModalTextBlock_title_withSubtitle__LrAqj',
                subtitle: 'MultivibeModalTextBlock_subtitle__IAqG4',
                description: 'MultivibeModalTextBlock_description__ffMAv',
            };
        },
        16754: (e) => {
            e.exports = {
                root: 'TrailerHeader_root__n8XkZ',
                coverContainer: 'TrailerHeader_coverContainer__4R_jG',
                cover: 'TrailerHeader_cover__G6BRb',
                iconContainer: 'TrailerHeader_iconContainer__QXR64',
                icon: 'TrailerHeader_icon__5T0JT',
                textContainer: 'TrailerHeader_textContainer__LR03v',
                text: 'TrailerHeader_text__BWMLw',
                link: 'TrailerHeader_link__kObd5',
                title: 'TrailerHeader_title__GuIe0',
                playButton: 'TrailerHeader_playButton__MGmhZ',
                playButtonIcon: 'TrailerHeader_playButtonIcon__JFbl_',
                shimmerContainer: 'TrailerHeader_shimmerContainer__cOsas',
                titleShimmer: 'TrailerHeader_titleShimmer__KKn7b',
                descriptionShimmer: 'TrailerHeader_descriptionShimmer__WOlY5',
                share: 'TrailerHeader_share__5lxh7',
            };
        },
        17330: (e, t, a) => {
            'use strict';
            a.d(t, { y: () => i });
            let i = (e) => (e ? e.replace('-', '_') : null);
        },
        17416: (e) => {
            e.exports = { root: 'SyncLyricsFooter_root__STCKQ', major: 'SyncLyricsFooter_major__QMZmT', writers: 'SyncLyricsFooter_writers__c7zhj' };
        },
        18076: (e) => {
            e.exports = {
                root: 'PaywallFooter_root__L_WxQ',
                link: 'PaywallFooter_link__rbIbe',
                important: 'PaywallFooter_important__bAbYb',
                list: 'PaywallFooter_list__WeuCr',
                list_primary: 'PaywallFooter_list_primary__A6hNR',
                list_secondary: 'PaywallFooter_list_secondary__QH2qi',
                item: 'PaywallFooter_item__4rY_9',
                ageRestriction: 'PaywallFooter_ageRestriction__bOKoH',
            };
        },
        18106: (e) => {
            e.exports = { root: 'ShareIframeModal_root__t_NbK', content: 'ShareIframeModal_content__jcq_o' };
        },
        18238: (e) => {
            e.exports = {
                root: 'PlayQueueDnDTrackWrapper_root__CithE',
                inner: 'PlayQueueDnDTrackWrapper_inner__xq3xM',
                dragging: 'PlayQueueDnDTrackWrapper_dragging__Tk9uP',
                dragOverlay: 'PlayQueueDnDTrackWrapper_dragOverlay__ulF2W',
            };
        },
        18440: (e) => {
            e.exports = { writers: 'Lyrics_writers__xvrNp' };
        },
        19158: (e, t, a) => {
            'use strict';
            a.d(t, { C: () => i });
            var i = (function (e) {
                return (
                    (e.SUBSCRIPTION_IS_NOT_AVAILABLE = 'SUBSCRIPTION_IS_NOT_AVAILABLE'),
                    (e.INVITATION_IS_INVALID = 'INVITATION_IS_INVALID'),
                    (e.UNKNOWN = 'UNKNOWN'),
                    e
                );
            })({});
        },
        19620: (e, t, a) => {
            'use strict';
            a.d(t, { T: () => C });
            var i = a(32290),
                l = a(63618),
                n = a(55178),
                s = a(99923),
                r = a(21732),
                o = a(82586),
                c = a(50162),
                d = a(86269),
                u = a(79856),
                _ = a(71926),
                m = a(95481),
                p = a(47745),
                v = a(61258),
                x = a(69e3),
                y = a.n(x);
            let h = (e) => {
                    let {
                            className: t,
                            coverUrl: a,
                            labeledForId: x,
                            subTitle: h,
                            title: C,
                            description: g,
                            viewAllActionLink: A,
                            controls: b,
                            titleSize: f = 'm',
                            coverBackgroundColor: j,
                            coverRadius: N = 's',
                            titleClassName: T,
                            titleLineClamp: S,
                            fallbackIconVariant: I,
                            available: k = !0,
                            onViewAllAction: L,
                            titleChildren: E,
                            children: M,
                            headingRef: P,
                            coverContainerClassName: O,
                            headingVariant: w = 'h3',
                            withDescriptionWidthLimit: R = !0,
                            isShimmerVisible: D,
                            isShimmerActive: B,
                            withCover: F,
                            withDescription: U,
                            forwardRef: z,
                            shimmerCoverClassName: W,
                            shouldSendAnalyticsOnLoaded: K,
                            ...H
                        } = e,
                        V = (0, m.f)(),
                        Y = (0, n.useRef)(null),
                        q = a || F,
                        Q = g || U,
                        $ = (0, n.useCallback)(() => {
                            Y.current && 'focus' in Y.current && Y.current.focus();
                        }, []),
                        G = (0, p.N)(),
                        Z = (0, n.useCallback)(() => {
                            L ? L() : G({ to: s.AppScreen.Link });
                        }, [G, L]);
                    (0, n.useEffect)(() => {
                        K && V();
                    }, [K, V]);
                    let X = (0, n.useMemo)(
                            () =>
                                C && A && k
                                    ? (0, i.jsxs)(v.N, {
                                          className: y().title,
                                          containerClassName: y().linkContainer,
                                          textClassName: y().linkText,
                                          icon: (0, i.jsx)(o.I, { className: y().titleIcon, size: 'xs', variant: 'arrowRight' }),
                                          iconPosition: 'right',
                                          href: A,
                                          onClick: Z,
                                          'data-test-id': r.S7.BLOCK_HEADER_TITLE,
                                          children: [
                                              (0, i.jsx)(_.DZ, {
                                                  id: x,
                                                  className: (0, l.$)(y().heading, T),
                                                  variant: w,
                                                  size: f,
                                                  weight: 'bold',
                                                  lineClamp: S,
                                                  ref: P,
                                                  children: C,
                                              }),
                                              E,
                                          ],
                                      })
                                    : (0, i.jsxs)('div', {
                                          className: y().title,
                                          children: [
                                              (0, i.jsx)(_.DZ, {
                                                  id: x,
                                                  className: (0, l.$)(y().heading, T, { [y().heading_notAvailable]: !k }),
                                                  variant: w,
                                                  size: f,
                                                  weight: 'bold',
                                                  lineClamp: S,
                                                  ref: P,
                                                  'data-test-id': r.S7.BLOCK_HEADER_TITLE,
                                                  children: C,
                                              }),
                                              E,
                                          ],
                                      }),
                            [k, Z, P, w, x, C, T, S, f, A, E],
                        ),
                        J = (0, n.useMemo)(() => (U && D ? (0, i.jsx)(u.W, { isActive: B, className: y().shimmerDescription }) : g), [U, D, g, B]),
                        ee = (0, n.useMemo)(
                            () =>
                                F && D
                                    ? (0, i.jsx)(u.W, { isActive: B, className: (0, l.$)(y().shimmerCover, W), radius: 's' })
                                    : (0, i.jsx)(c._V, {
                                          src: a,
                                          fallbackIconVariant: I,
                                          style: { backgroundColor: j },
                                          className: y().cover,
                                          ref: Y,
                                          onClick: $,
                                          fit: 'cover',
                                          withAvatarReplace: !0,
                                          fallbackIconSize: 's',
                                          'aria-hidden': !0,
                                          'data-test-id': r.S7.BLOCK_HEADER_COVER,
                                      }),
                            [j, a, I, $, B, D, W, F],
                        );
                    return (0, i.jsxs)('div', {
                        className: (0, l.$)(y().root, t),
                        ref: z,
                        ...H,
                        'data-test-id': r.S7.BLOCK_HEADER,
                        children: [
                            (0, i.jsxs)('div', {
                                className: y().start,
                                children: [
                                    q && (0, i.jsx)(d.t, { radius: N, className: (0, l.$)(y().coverContainer, O), children: ee }),
                                    (0, i.jsxs)('div', {
                                        className: y().textContainer,
                                        children: [
                                            h,
                                            X,
                                            Q &&
                                                (0, i.jsx)(_.HL, {
                                                    id: ''.concat(x, '-description'),
                                                    variant: 'span',
                                                    type: 'text',
                                                    size: 'm',
                                                    weight: 'medium',
                                                    lineClamp: R ? 2 : void 0,
                                                    className: (0, l.$)(y().description, { [y().description_widthLimit]: R }),
                                                    'data-test-id': r.S7.BLOCK_HEADER_DESCRIPTION,
                                                    children: J,
                                                }),
                                        ],
                                    }),
                                ],
                            }),
                            b || M,
                        ],
                    });
                },
                C = (0, n.forwardRef)((e, t) => (0, i.jsx)(h, { forwardRef: t, ...e }));
        },
        19681: (e) => {
            e.exports = {
                root: 'ShareIframeEditor_root__LALvp',
                controls: 'ShareIframeEditor_controls__k8vT_',
                iframeCodeInputContainer: 'ShareIframeEditor_iframeCodeInputContainer__b4Klq',
                settings: 'ShareIframeEditor_settings__UWt51',
                copyButton: 'ShareIframeEditor_copyButton___jOz_',
                sizeInputContainer: 'ShareIframeEditor_sizeInputContainer__s6PMW',
                iframeCodeInput: 'ShareIframeEditor_iframeCodeInput__M9w6E',
                iframeContainer: 'ShareIframeEditor_iframeContainer__pgdr5',
                iframe: 'ShareIframeEditor_iframe__ky5_o',
            };
        },
        20142: (e) => {
            e.exports = {
                bottomRightButtonsWrapper: 'FullscreenPlayerDesktopControls_bottomRightButtonsWrapper__EvGiZ',
                root: 'FullscreenPlayerDesktopControls_root__tviu4',
                root_visible: 'FullscreenPlayerDesktopControls_root_visible__1b9xD',
                sonataControls: 'FullscreenPlayerDesktopControls_sonataControls__9AIki',
                menuWrapper: 'FullscreenPlayerDesktopControls_menuWrapper__ifxNx',
                syncLyricsButton: 'FullscreenPlayerDesktopControls_syncLyricsButton__g6E6g',
                playQueueButton: 'FullscreenPlayerDesktopControls_playQueueButton__reNOW',
                speedButton: 'FullscreenPlayerDesktopControls_speedButton__uTbyy',
                likeButton: 'FullscreenPlayerDesktopControls_likeButton__vpJ7S',
                menuButton: 'FullscreenPlayerDesktopControls_menuButton__R4cXl',
                likeButton_active: 'FullscreenPlayerDesktopControls_likeButton_active__XltBK',
                menuButton_active: 'FullscreenPlayerDesktopControls_menuButton_active__YZ8M8',
                playQueueButton_active: 'FullscreenPlayerDesktopControls_playQueueButton_active___SA85',
                speedButton_active: 'FullscreenPlayerDesktopControls_speedButton_active__H_EXl',
                syncLyricsButton_active: 'FullscreenPlayerDesktopControls_syncLyricsButton_active__VMvEH',
                fullscreenPlayerButton: 'FullscreenPlayerDesktopControls_fullscreenPlayerButton__0UjpS',
                fullscreenPlayerButton_visible: 'FullscreenPlayerDesktopControls_fullscreenPlayerButton_visible__qjQ0X',
            };
        },
        20418: (e) => {
            e.exports = {
                line: 'SyncLyricsScroller_line__Vh6WN',
                counter: 'SyncLyricsScroller_counter__B2E7K',
                counterLine: 'SyncLyricsScroller_counterLine__NpBT4',
                root: 'SyncLyricsScroller_root__amiLm',
                root_withVisibleUpperLyrics: 'SyncLyricsScroller_root_withVisibleUpperLyrics__d7noO',
                root_withVisibleScrolledLyrics: 'SyncLyricsScroller_root_withVisibleScrolledLyrics__lowGE',
                root_intro: 'SyncLyricsScroller_root_intro__13gls',
                root_outro: 'SyncLyricsScroller_root_outro__XlDH5',
                line_last: 'SyncLyricsScroller_line_last__liS_1',
                root_prepare: 'SyncLyricsScroller_root_prepare__h0Gf1',
                line_active: 'SyncLyricsScroller_line_active__6lLvH',
            };
        },
        20698: (e, t, a) => {
            'use strict';
            function i(e) {
                return e.map((e) => e.name).join(', ');
            }
            a.d(t, { j: () => i });
        },
        20753: (e) => {
            e.exports = { root: 'DragAndDropIcon_root__OstQU', root_active: 'DragAndDropIcon_root_active__xOTKt' };
        },
        20959: (e) => {
            e.exports = {
                root: 'FullscreenPlayerDesktop_root___8vo1',
                important: 'FullscreenPlayerDesktop_important__dGfiL',
                header: 'FullscreenPlayerDesktop_header__OBhzq',
                modalContent: 'FullscreenPlayerDesktop_modalContent__Zs_LC',
                notification: 'FullscreenPlayerDesktop_notification__luD_J',
                closeButton: 'FullscreenPlayerDesktop_closeButton__MQ64s',
            };
        },
        20979: (e, t, a) => {
            'use strict';
            a.d(t, { u: () => i });
            var i = (function (e) {
                return ((e.SYNC_LYRICS = 'syncLyrics'), (e.PLAY_QUEUE = 'playQueue'), e);
            })({});
        },
        20994: (e) => {
            e.exports = { text: 'FreePlayerLoginNotification_text__u7Wr5', loginButton: 'FreePlayerLoginNotification_loginButton__ogYTA' };
        },
        21260: (e) => {
            e.exports = {
                content_ru: 'PlusSectionMobile_content_ru__OvJV0',
                content_by: 'PlusSectionMobile_content_by__d5iGm',
                card: 'PlusSectionMobile_card__QbwGe',
                logo_ru: 'PlusSectionMobile_logo_ru___FFew',
                logo_en: 'PlusSectionMobile_logo_en__u_HSO',
            };
        },
        21325: (e) => {
            e.exports = {
                root: 'PlayQueueVibeBlock_root__cVjcM',
                ripple: 'PlayQueueVibeBlock_ripple__Ig_pb',
                vibeCover: 'PlayQueueVibeBlock_vibeCover__THxKz',
                title: 'PlayQueueVibeBlock_title__G3kir',
                vibeTitle: 'PlayQueueVibeBlock_vibeTitle__C5fWp',
            };
        },
        21875: (e) => {
            e.exports = {
                root: 'PaywallModal_root__HIYOy',
                header: 'PaywallModal_header__3oCYF',
                closeButton: 'PaywallModal_closeButton__rkLNM',
                content: 'PaywallModal_content__mVxnz',
            };
        },
        22333: (e) => {
            e.exports = {
                root: 'FullscreenPlayerMobile_root__Sqyh0',
                important: 'FullscreenPlayerMobile_important__1lAN3',
                header: 'FullscreenPlayerMobile_header__8KH28',
                headerCenter: 'FullscreenPlayerMobile_headerCenter___EqSP',
                modalContent: 'FullscreenPlayerMobile_modalContent__m2cbB',
                castButton: 'FullscreenPlayerMobile_castButton__3ZgER',
                footer: 'FullscreenPlayerMobile_footer__LRvhK',
                footerContainer: 'FullscreenPlayerMobile_footerContainer__aupK1',
                playQueueButton_active: 'FullscreenPlayerMobile_playQueueButton_active__CG2s8',
                syncLyricsButton_active: 'FullscreenPlayerMobile_syncLyricsButton_active__6L4YF',
                notification: 'FullscreenPlayerMobile_notification__V1cxP',
            };
        },
        23352: (e, t, a) => {
            'use strict';
            a.d(t, { n: () => s });
            var i = a(55178),
                l = a(12989),
                n = a(80536);
            let s = function () {
                let { callback: e, singleEvent: t, withViewUuid: a } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    s = (0, i.useRef)(null),
                    r = (0, l.D)(),
                    o = (0, i.useId)(),
                    c = (0, i.useContext)(n.B),
                    d = (0, i.useCallback)(
                        (i, l) => {
                            (e ? e(i, a ? l : void 0) : r(i, l), t && c.unobserveElement(o));
                        },
                        [e, c, o, r, t, a],
                    );
                return (
                    (0, i.useEffect)(
                        () => (
                            c.observeElement({ elementRef: s, elementId: o, callback: d }),
                            () => {
                                c.unobserveElement(o);
                            }
                        ),
                        [e, c, d, o, r],
                    ),
                    { ref: s, intersectionPropertyId: o }
                );
            };
        },
        23791: (e) => {
            e.exports = {
                root: 'FamilyInviteInviter_root__2XR_p',
                icon: 'FamilyInviteInviter_icon__e5pZe',
                important: 'FamilyInviteInviter_important__wl_l1',
                iconShimmer: 'FamilyInviteInviter_iconShimmer__Dbxw_',
                root_mobile: 'FamilyInviteInviter_root_mobile__LRDAo',
                name: 'FamilyInviteInviter_name__0E0QC',
                nameShimmer: 'FamilyInviteInviter_nameShimmer__Zzoa1',
            };
        },
        24554: (e) => {
            e.exports = {
                icon: 'SyncLyricsButton_icon__m0Gdk',
                icon_active: 'SyncLyricsButton_icon_active__6WcWG',
                animation_scaled: 'SyncLyricsButton_animation_scaled__vwsc_',
                scale: 'SyncLyricsButton_scale__FGAYV',
                animation_unscaled: 'SyncLyricsButton_animation_unscaled__eM1Wb',
                unscale: 'SyncLyricsButton_unscale__ceLQu',
            };
        },
        25122: (e) => {
            e.exports = {
                root: 'ArtistAboutModalContent_root__XGW1F',
                header: 'ArtistAboutModalContent_header__ws7Ap',
                title: 'ArtistAboutModalContent_title__hMO2k',
                subtitle: 'ArtistAboutModalContent_subtitle__OpssN',
                descriptionWrapper: 'ArtistAboutModalContent_descriptionWrapper__jNL4G',
                description: 'ArtistAboutModalContent_description__KlWvL',
                readMoreButton: 'ArtistAboutModalContent_readMoreButton__1ageU',
                bandlinkScanner: 'ArtistAboutModalContent_bandlinkScanner__Fwv2x',
            };
        },
        26143: (e) => {
            e.exports = {
                root: 'TrackModalTitleShimmer_root__woixY',
                entityName: 'TrackModalTitleShimmer_entityName__9NMYB',
                title: 'TrackModalTitleShimmer_title__PXJfS',
                artists: 'TrackModalTitleShimmer_artists__mz6q9',
                important: 'TrackModalTitleShimmer_important__uBJ8_',
                artist: 'TrackModalTitleShimmer_artist__fre6F',
                controls: 'TrackModalTitleShimmer_controls__0kNh8',
                playButton: 'TrackModalTitleShimmer_playButton__PYklv',
                button: 'TrackModalTitleShimmer_button__j5_GI',
            };
        },
        27202: (e) => {
            e.exports = { root: 'PlayQueue_root__ponhw', content: 'PlayQueue_content__zIUvd', scrollContent: 'PlayQueue_scrollContent__2dI0v' };
        },
        27478: (e, t, a) => {
            'use strict';
            a.d(t, { R: () => s });
            var i = a(14257),
                l = a(50),
                n = a(55509);
            let s = (e) => {
                let { theme: t } = (0, l.W)(),
                    a = t === i.S.Light ? 0.6 : 0.35;
                return { '--trailer-color': (0, n.e)(e, 0.8, a) };
            };
        },
        27515: (e, t, a) => {
            'use strict';
            a.d(t, { z: () => i });
            let i = (e, t) => {
                let a = Number(t);
                return !Number.isNaN(a) && a > 0 && a < e.length ? a : 0;
            };
        },
        27923: (e) => {
            e.exports = { image: 'FamilyInviteStepSuccess_image__kDBnc', image_mobile: 'FamilyInviteStepSuccess_image_mobile__PyiXK' };
        },
        27940: (e) => {
            e.exports = {
                card_root: 'HorizontalCardContainer_root__YoAAP',
                artistCaption: 'ClipMeta_artistCaption__8RrCD',
                link: 'ClipMeta_link__6QadT',
                root: 'ClipMeta_root__pqZ6s',
                root_withSecondaryColor: 'ClipMeta_root_withSecondaryColor__va_JM',
                explicitMark: 'ClipMeta_explicitMark__TmCzw',
                metaContainer: 'ClipMeta_metaContainer__023Bj',
                titleContainer: 'ClipMeta_titleContainer__dtIm1',
                title: 'ClipMeta_title__L6Nwk',
            };
        },
        28230: (e) => {
            e.exports = {
                root: 'TrackModalLyrics_root__JABJp',
                title: 'TrackModalLyrics_title__zjWl_',
                button: 'TrackModalLyrics_button__YqxIm',
                lyrics: 'TrackModalLyrics_lyrics__naoEF',
            };
        },
        28488: (e) => {
            e.exports = {
                root: 'PlusModal_root__RA4rI',
                root_error: 'PlusModal_root_error__BYJfM',
                root_mobile: 'PlusModal_root_mobile__pEOEu',
                header: 'PlusModal_header__Xj_1a',
                content: 'PlusModal_content__QHgFY',
                contentWrapper: 'PlusModal_contentWrapper__dYFpI',
                growContainer: 'PlusModal_growContainer__eDnbY',
                growContainer_withoutPaddings: 'PlusModal_growContainer_withoutPaddings__H4fPH',
                buttons: 'PlusModal_buttons___Gy1Y',
                text: 'PlusModal_text__ioQgs',
                title: 'PlusModal_title__znUSU',
                description: 'PlusModal_description__PjqMm',
                link: 'PlusModal_link__va_hh',
                linkContainer: 'PlusModal_linkContainer__5NaN1',
                linkArrow: 'PlusModal_linkArrow__xDKKi',
            };
        },
        28724: (e, t, a) => {
            'use strict';
            a.d(t, { M: () => f });
            var i = a(32290),
                l = a(63618),
                n = a(96103),
                s = a(55178),
                r = a(39407),
                o = a(21732),
                c = a(91027),
                d = a(63423),
                u = a(71926),
                _ = a(70204),
                m = a(34186),
                p = a(83808),
                v = a(20472),
                x = a(32641),
                y = a(85017),
                h = a(19379),
                C = a(61258),
                g = a(76768),
                A = a.n(g);
            let b = {
                    [y.n.ALBUM]: (0, i.jsx)(r.A, { id: 'extra-explicit.confirm-unsafe-album' }),
                    [y.n.PODCAST]: (0, i.jsx)(r.A, { id: 'extra-explicit.confirm-unsafe-podcast' }),
                    [y.n.ARTIST]: (0, i.jsx)(r.A, { id: 'extra-explicit.confirm-unsafe-artist' }),
                    [y.n.TRACK]: (0, i.jsx)(r.A, { id: 'extra-explicit.confirm-unsafe-track' }),
                    [y.n.AUDIOBOOK]: (0, i.jsx)(r.A, { id: 'extra-explicit.confirm-unsafe-audiobook' }),
                    [y.n.CLIP]: (0, i.jsx)(r.A, { id: 'extra-explicit.confirm-unsafe-clip' }),
                },
                f = (0, n.PA)((e) => {
                    var t;
                    let { modalState: a, data: n, onClose: g, className: f } = e,
                        j = null != n ? n : null == a ? void 0 : a.modalData,
                        N = (0, p.W)(),
                        T = (0, x.Z)(v.Z.main.href),
                        S = (0, m.N)().get(_.U2),
                        I = (0, c.c)(() => {
                            if (g) return g();
                            (N.canBack && N.back(), T());
                        }),
                        k = (null == j || null == (t = j.details) ? void 0 : t.url) && j.details.text,
                        L = (0, c.c)(() => {
                            var e;
                            null == a || a.setConfirmUnsafeDisclaimer(!0);
                            let t = S.get(h.c.ExEx),
                                i = new Date(),
                                l = i.setMinutes(i.getMinutes() + 15),
                                n =
                                    null != (e = null == a ? void 0 : a.entityKey)
                                        ? e
                                        : ''.concat(null == a ? void 0 : a.entityType, '_').concat(null == a ? void 0 : a.entityId);
                            (t ? S.set(h.c.ExEx, [...t, n], { expires: new Date(l) }) : S.set(h.c.ExEx, [n], { expires: new Date(l) }),
                                null == g || g(),
                                (null == a ? void 0 : a.onDisclaimerConfirmHandler) && a.onDisclaimerConfirmHandler());
                        }),
                        E = (0, c.c)(() => {
                            ((null == a ? void 0 : a.shouldHistoryBack) ? (null == g || g(), N.canBack && N.back(), T()) : null == g || g(),
                                (null == a ? void 0 : a.onDisclaimerRejectHandler) && a.onDisclaimerRejectHandler());
                        });
                    (0, s.useEffect)(
                        () => () => {
                            null == a || a.reset();
                        },
                        [a],
                    );
                    let M = (0, s.useMemo)(() => {
                            if (j) {
                                var e, t;
                                return (0, i.jsxs)(i.Fragment, {
                                    children: [
                                        (0, i.jsx)(u.DZ, {
                                            variant: 'h4',
                                            size: 'l',
                                            className: (0, l.$)(A().title, A().text),
                                            'data-test-id': o.OA.disclaimer.DISCLAIMER_TITLE,
                                            children: j.title,
                                        }),
                                        (0, i.jsx)(u.HL, {
                                            variant: 'div',
                                            size: 'l',
                                            weight: 'normal',
                                            className: A().text,
                                            'data-test-id': o.OA.disclaimer.DISCLAIMER_DESCRIPTION,
                                            children: j.description,
                                        }),
                                        k &&
                                            (0, i.jsx)(C.N, {
                                                href: null == (e = j.details) ? void 0 : e.url,
                                                className: A().link,
                                                children: (0, i.jsx)(u.HL, {
                                                    variant: 'span',
                                                    size: 'l',
                                                    weight: 'normal',
                                                    children: null == (t = j.details) ? void 0 : t.text,
                                                }),
                                            }),
                                    ],
                                });
                            }
                            return null;
                        }, [j, k]),
                        P = (0, s.useMemo)(
                            () =>
                                (null == a ? void 0 : a.type) === y.Z.UNSAFE
                                    ? (0, i.jsxs)('div', {
                                          className: A().buttons,
                                          children: [
                                              (0, i.jsx)(d.$, {
                                                  color: 'primary',
                                                  onClick: E,
                                                  size: 'l',
                                                  radius: 'xxxl',
                                                  className: A().button,
                                                  'data-test-id': o.OA.disclaimer.DISCLAIMER_REJECT_BUTTON,
                                                  children: (0, i.jsx)(r.A, { id: 'extra-explicit.reject-unsafe-entity' }),
                                              }),
                                              (0, i.jsx)(d.$, {
                                                  color: 'secondary',
                                                  onClick: L,
                                                  size: 'l',
                                                  radius: 'xxxl',
                                                  className: A().button,
                                                  'data-test-id': o.OA.disclaimer.DISCLAIMER_CONFIRM_BUTTON,
                                                  children: a.entityType && b[a.entityType],
                                              }),
                                          ],
                                      })
                                    : (0, i.jsx)('div', {
                                          className: A().buttons,
                                          children: (0, i.jsx)(d.$, {
                                              color: 'primary',
                                              onClick: I,
                                              size: 'l',
                                              radius: 'xxxl',
                                              className: A().button,
                                              'data-test-id': o.OA.disclaimer.DISCLAIMER_REJECT_BUTTON,
                                              children: (0, i.jsx)(r.A, { id: 'interface-actions.confirm' }),
                                          }),
                                      }),
                            [L, null == a ? void 0 : a.entityType, null == a ? void 0 : a.type, I, E],
                        );
                    return (0, i.jsx)('div', {
                        className: (0, l.$)(A().root, f),
                        'data-test-id': o.OA.disclaimer.DISCLAIMER_CONTENT,
                        children: (0, i.jsxs)('div', { className: A().container, children: [M, P] }),
                    });
                });
        },
        29268: (e, t, a) => {
            'use strict';
            a.d(t, { k: () => u });
            var i = a(32290),
                l = a(55178),
                n = a(60900),
                s = a(21732),
                r = a(63423),
                o = a(82586),
                c = a(59576);
            let d = (e) => {
                    let {
                            variant: t,
                            withRipple: a,
                            size: l,
                            radius: d,
                            iconSize: u,
                            disabled: _,
                            onClick: m,
                            iconClassName: p,
                            className: v,
                            forwardRef: x,
                            style: y,
                            children: h,
                        } = e,
                        { formatMessage: C } = (0, n.A)(),
                        g = C({ id: 'trailer.button-aria-label' });
                    return (0, i.jsx)(r.$, {
                        className: v,
                        color: 'secondary',
                        radius: d,
                        size: l,
                        variant: t,
                        withRipple: a,
                        flexIcon: !0,
                        'aria-label': g,
                        onClick: m,
                        ref: x,
                        icon: (0, i.jsx)(o.I, { variant: 'trailer', size: u, className: p }),
                        disabled: _,
                        'data-intersection-property-id': c.N,
                        style: y,
                        'data-test-id': s.S7.TRAILER_BUTTON,
                        children: h,
                    });
                },
                u = (0, l.forwardRef)((e, t) => (0, i.jsx)(d, { forwardRef: t, ...e }));
        },
        30492: (e) => {
            e.exports = {
                root: 'TopSectionRU_root__DP9u2',
                main: 'TopSectionRU_main__PbltM',
                logo: 'TopSectionRU_logo__LgT8M',
                moreInfoChildren: 'TopSectionRU_moreInfoChildren__d82Ha',
                title: 'TopSectionRU_title__csPE2',
                services: 'TopSectionRU_services__cmjFp',
                service: 'TopSectionRU_service__Q0dCS',
                serviceLogo: 'TopSectionRU_serviceLogo___Xpo_',
                serviceLabel: 'TopSectionRU_serviceLabel__Q3O8n',
                buySubscriptionBlock: 'TopSectionRU_buySubscriptionBlock__VBGT5',
                goHomeLink: 'TopSectionRU_goHomeLink__zWv2w',
            };
        },
        30858: (e) => {
            e.exports = {
                root: 'BuySubscriptionBlock_root__vcGLK',
                text_main: 'BuySubscriptionBlock_text_main__fU5RA',
                text_addition: 'BuySubscriptionBlock_text_addition__bbHYT',
                text_secondary: 'BuySubscriptionBlock_text_secondary__ZT9ke',
                buttonContainer: 'BuySubscriptionBlock_buttonContainer__Tu2hm',
                buttonContainer_columnLayout: 'BuySubscriptionBlock_buttonContainer_columnLayout__MH7PE',
                root_withSecondButton: 'BuySubscriptionBlock_root_withSecondButton___v2dL',
                button: 'BuySubscriptionBlock_button__EqUAg',
                stickyContainer: 'BuySubscriptionBlock_stickyContainer__yA50y',
                stickyContainer_enter: 'BuySubscriptionBlock_stickyContainer_enter__50hEo',
                stickyContainer_enter_active: 'BuySubscriptionBlock_stickyContainer_enter_active__4vFVC',
                'animation-show': 'BuySubscriptionBlock_animation-show__xlvuU',
                stickyContainer_exit: 'BuySubscriptionBlock_stickyContainer_exit__9Axef',
                stickyContainer_exit_active: 'BuySubscriptionBlock_stickyContainer_exit_active__HjXVn',
                'animation-hide': 'BuySubscriptionBlock_animation-hide__gnUki',
            };
        },
        34223: (e, t, a) => {
            'use strict';
            a.d(t, { D: () => v });
            var i = a(32290),
                l = a(98350),
                n = a(63618),
                s = a(55178),
                r = a(60900),
                o = a(79856),
                c = a(91063),
                d = a.n(c);
            let u = (e) => {
                let { isActive: t, className: a } = e,
                    { formatMessage: l } = (0, r.A)(),
                    c = (0, s.useMemo)(() => l({ id: 'loading-messages.entity-is-loading' }, { entityName: l({ id: 'entity-names.track' }) }), [l]);
                return (0, i.jsxs)('div', {
                    'aria-label': c,
                    'aria-live': t ? 'polite' : 'off',
                    'aria-busy': t,
                    className: (0, n.$)(d().root, a),
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
            var _ = a(89661),
                m = a.n(_);
            let p = (e) => {
                    let { isActive: t, className: a } = e,
                        { formatMessage: l } = (0, r.A)(),
                        c = (0, s.useMemo)(() => l({ id: 'loading-messages.entity-is-loading' }, { entityName: l({ id: 'entity-names.track' }) }), [l]);
                    return (0, i.jsxs)('div', {
                        'aria-label': c,
                        'aria-live': t ? 'polite' : 'off',
                        'aria-busy': t,
                        className: (0, n.$)(m().root, a),
                        children: [
                            (0, i.jsxs)('div', {
                                className: m().infoContainer,
                                children: [
                                    (0, i.jsx)(o.W, { isActive: t, className: m().cover, radius: 's' }),
                                    (0, i.jsx)('div', { className: m().textContainer, children: (0, i.jsx)(o.W, { isActive: t, className: m().title, radius: 'l' }) }),
                                ],
                            }),
                            (0, i.jsx)(o.W, { isActive: t, className: m().action, radius: 'l' }),
                        ],
                    });
                },
                v = (e) => {
                    let { isActive: t, variant: a, className: n } = e;
                    switch (a) {
                        case l.X.PLAYLIST:
                            return (0, i.jsx)(p, { isActive: t, className: n });
                        case l.X.ALBUM:
                            return (0, i.jsx)(u, { isActive: t, className: n });
                    }
                };
        },
        34698: (e) => {
            e.exports = {
                root: 'ArtistAboutModalShimmer_root__RWCDi',
                entityName: 'ArtistAboutModalShimmer_entityName__eBJym',
                title: 'ArtistAboutModalShimmer_title__0uj5d',
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
        35433: (e) => {
            e.exports = {
                root: 'TrackModal_root__QrFg6',
                header: 'TrackModal_header__hjfRd',
                closeButton: 'TrackModal_closeButton__VLm_R',
                modalContent: 'TrackModal_modalContent__AzQPF',
                content: 'TrackModal_content__9qH7W',
                container: 'TrackModal_container__JaG86',
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
        35623: (e) => {
            e.exports = {
                root: 'PaywallFAQItem_root__008Hj',
                questionCollapse: 'PaywallFAQItem_questionCollapse__dN7g9',
                questionContainer: 'PaywallFAQItem_questionContainer__gOalt',
                answer: 'PaywallFAQItem_answer__mgvr2',
                answerContainer: 'PaywallFAQItem_answerContainer__z_P3g',
                answerContainer_enter: 'PaywallFAQItem_answerContainer_enter__zAisZ',
                answerContainer_enter_active: 'PaywallFAQItem_answerContainer_enter_active__N5iad',
                'animation-show': 'PaywallFAQItem_animation-show__YWHaS',
                answerContainer_exit: 'PaywallFAQItem_answerContainer_exit__y_3_j',
                answerContainer_exit_active: 'PaywallFAQItem_answerContainer_exit_active__IUs7C',
                'animation-hide': 'PaywallFAQItem_animation-hide__Eqrf5',
            };
        },
        36504: (e, t, a) => {
            'use strict';
            a.d(t, { N: () => n });
            var i = a(96151),
                l = a(87151);
            let n = (e) => {
                var t, a, n, s, r;
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
                              alsoAlbums: (null == (n = e.counts) ? void 0 : n.compilations) || 0,
                              tracks: (null == (s = e.counts) ? void 0 : s.tracks) || 0,
                              alsoTracks: 0,
                          },
                          trailer: { available: !!(null == (r = e.trailer) ? void 0 : r.isAvailable) },
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
        36894: (e) => {
            e.exports = {
                root: 'PlayQueueAfterPlayingBlock_root__A7_wI',
                title: 'PlayQueueAfterPlayingBlock_title__nS_nG',
                title_withDnD: 'PlayQueueAfterPlayingBlock_title_withDnD__jsVTk',
                prevTrack: 'PlayQueueAfterPlayingBlock_prevTrack__wDAPP',
                animatedContent: 'PlayQueueAfterPlayingBlock_animatedContent__6rvOT',
                animatedContent_moveToTop: 'PlayQueueAfterPlayingBlock_animatedContent_moveToTop__bW549',
                'move-to-top': 'PlayQueueAfterPlayingBlock_move-to-top__c_AzJ',
                animatedContent_moveFromTop: 'PlayQueueAfterPlayingBlock_animatedContent_moveFromTop__ZLgMV',
                'move-from-top': 'PlayQueueAfterPlayingBlock_move-from-top___8bwu',
                'move-prev-track-from-top': 'PlayQueueAfterPlayingBlock_move-prev-track-from-top__XY1VA',
                animatedContent_moveFromTopSingleTrack: 'PlayQueueAfterPlayingBlock_animatedContent_moveFromTopSingleTrack__rrewW',
                'move-from-top-single-track': 'PlayQueueAfterPlayingBlock_move-from-top-single-track__8po97',
                'move-prev-track-from-top-single-track': 'PlayQueueAfterPlayingBlock_move-prev-track-from-top-single-track__ySSca',
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
                    n = 'PT';
                return (a > 0 && (n += ''.concat(a, 'H')), i > 0 && (n += ''.concat(i, 'M')), (l > 0 || 'PT' === n) && (n += ''.concat(l, 'S')), n);
            };
        },
        37934: (e) => {
            e.exports = {
                content_ru: 'BooksSectionDesktop_content_ru__Yauyu',
                content_by: 'BooksSectionDesktop_content_by___eqCQ',
                card: 'BooksSectionDesktop_card__blMRo',
                logo_ru: 'BooksSectionDesktop_logo_ru__SRY4d',
                logo_en: 'BooksSectionDesktop_logo_en__Szpr_',
            };
        },
        38129: (e) => {
            e.exports = {
                content_ru: 'KinopoiskSectionMobile_content_ru__CCtkX',
                content_by: 'KinopoiskSectionMobile_content_by__XjQaB',
                card1: 'KinopoiskSectionMobile_card1__JCIyK',
                card2: 'KinopoiskSectionMobile_card2__jTtnr',
                card3: 'KinopoiskSectionMobile_card3__wTJCh',
                card4: 'KinopoiskSectionMobile_card4__wi_RO',
                card4_by: 'KinopoiskSectionMobile_card4_by__8ehWE',
                logo_ru: 'KinopoiskSectionMobile_logo_ru__8alc5',
                logo_en: 'KinopoiskSectionMobile_logo_en__A673z',
            };
        },
        38306: (e) => {
            e.exports = {
                root: 'Trailer_root__c8eG3',
                header: 'Trailer_header__FBFMi',
                trackShimmer: 'Trailer_trackShimmer__qmCN3',
                albumShimmer: 'Trailer_albumShimmer__8RxuC',
                footer: 'Trailer_footer__POMTS',
            };
        },
        38776: (e) => {
            e.exports = { root: 'MultivibeBaseModal_root__UBSBT', header: 'MultivibeBaseModal_header__h0xoz', content: 'MultivibeBaseModal_content__MlO_s' };
        },
        41190: (e, t, a) => {
            'use strict';
            a.d(t, { $: () => l });
            var i = a(72676);
            let l = (e) => ({ type: i.z4.Unloaded, meta: { id: e.entityId } });
        },
        43565: (e, t, a) => {
            'use strict';
            a.d(t, { O: () => o });
            var i = a(32290),
                l = a(63618),
                n = a(82586),
                s = a(20753),
                r = a.n(s);
            let o = (e) => {
                let { isDragging: t, className: a } = e;
                return (0, i.jsx)(n.I, { variant: 'dragDots', size: 'xxs', className: (0, l.$)(r().root, { [r().root_active]: t }, a), 'aria-hidden': !0 });
            };
        },
        43592: (e, t, a) => {
            'use strict';
            function i(e, t) {
                return e.map((e) => 'https://'.concat(t, '/artist/').concat(e.id));
            }
            a.d(t, { x: () => i });
        },
        43922: (e, t, a) => {
            'use strict';
            a.d(t, { IR: () => l, JQ: () => i, bL: () => s, ew: () => n });
            let i = 220,
                l = 88,
                n = 'px',
                s = '{lang}';
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
        44855: (e) => {
            e.exports = { image: 'FamilyInviteErrorView_image__OyVA_', image_small: 'FamilyInviteErrorView_image_small__uczsu' };
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
        45807: (e, t, a) => {
            'use strict';
            a.d(t, { Y: () => d });
            var i,
                l = a(95716),
                n = a(55178),
                s = {
                    352: (e) => {
                        e.exports = l;
                    },
                    810: (e) => {
                        e.exports = i || (i = a.t(n, 2));
                    },
                },
                r = {};
            function o(e) {
                var t = r[e];
                if (void 0 !== t) return t.exports;
                var a = (r[e] = { exports: {} });
                return (s[e](a, a.exports, o), a.exports);
            }
            var c = {};
            ((() => {
                (Object.defineProperty(c, 'X', { value: !0 }), (c.l = void 0));
                let e = o(810),
                    t = o(352);
                c.l = (a) => {
                    let [i, l] = (0, e.useState)(!0),
                        [n, s] = (0, e.useState)(!0),
                        r = () => {
                            let e = null == a ? void 0 : a.current;
                            e && (l(0 === e.scrollLeft), s(e.scrollWidth - e.scrollLeft <= e.offsetWidth + 10));
                        };
                    ((0, e.useEffect)(() => {
                        r();
                    }, [a, r]),
                        (0, e.useEffect)(() => {
                            let e = null == a ? void 0 : a.current;
                            return (
                                null == e || e.addEventListener('scroll', r),
                                window.addEventListener('resize', r),
                                () => {
                                    (null == e || e.removeEventListener('scroll', r), window.removeEventListener('resize', r));
                                }
                            );
                        }, [a, r]));
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
                        shouldForwardButtonBeDisabled: n,
                        shouldHideControls: i && n,
                    };
                };
            })(),
                c.X);
            var d = c.l;
        },
        46062: (e) => {
            e.exports = {
                root: 'PlayQueueDnDDraggableTrack_root__ysTVY',
                dots: 'PlayQueueDnDDraggableTrack_dots__enjOX',
                noHoverItem: 'PlayQueueDnDDraggableTrack_noHoverItem__uHRh1',
            };
        },
        46552: (e) => {
            e.exports = { root: 'MainCardMobile_root__AXTwk', image: 'MainCardMobile_image__DZHrE', text: 'MainCardMobile_text__rli4d' };
        },
        47435: (e) => {
            e.exports = { button: 'CrackdownModal_button__IWTpu', important: 'CrackdownModal_important__eKBtD', buttonMainText: 'CrackdownModal_buttonMainText__pAlET' };
        },
        47492: (e) => {
            e.exports = {
                cover: 'FreePlayerPlusNotification_cover__UiPL1',
                important: 'FreePlayerPlusNotification_important__ybkIx',
                icon: 'FreePlayerPlusNotification_icon__8kTww',
                text: 'FreePlayerPlusNotification_text__BMu7d',
                tryButton: 'FreePlayerPlusNotification_tryButton__DNc4D',
            };
        },
        47976: (e) => {
            e.exports = {
                root: 'MainCardDesktop_root__qa00U',
                root_horizontal: 'MainCardDesktop_root_horizontal__Fy_E0',
                textContainer: 'MainCardDesktop_textContainer__mzWGu',
                imageContainer: 'MainCardDesktop_imageContainer__81MQy',
                image: 'MainCardDesktop_image__nUJz3',
                root_vertical: 'MainCardDesktop_root_vertical__KGeJ2',
                imageContainer_align_center: 'MainCardDesktop_imageContainer_align_center__kEU_O',
                imageContainer_align_right: 'MainCardDesktop_imageContainer_align_right__T12Qo',
                text: 'MainCardDesktop_text__omw7l',
            };
        },
        48980: (e) => {
            e.exports = {
                root: 'TopSectionRUWithBenefits_root__wF1_n',
                main: 'TopSectionRUWithBenefits_main__0igzf',
                logo: 'TopSectionRUWithBenefits_logo__PbF2i',
                moreInfoChildren: 'TopSectionRUWithBenefits_moreInfoChildren__9OEAu',
                title: 'TopSectionRUWithBenefits_title__pXmdX',
                benefits: 'TopSectionRUWithBenefits_benefits__GweJJ',
                benefit: 'TopSectionRUWithBenefits_benefit__12ENa',
                benefit_recommendation: 'TopSectionRUWithBenefits_benefit_recommendation__PMApk',
                benefitLogo: 'TopSectionRUWithBenefits_benefitLogo__ntii8',
                benefitLabelDesktop: 'TopSectionRUWithBenefits_benefitLabelDesktop__eITJ5',
                benefitLabelMobile: 'TopSectionRUWithBenefits_benefitLabelMobile__ndVcr',
                buySubscriptionBlock: 'TopSectionRUWithBenefits_buySubscriptionBlock___AM6p',
                goHomeLink: 'TopSectionRUWithBenefits_goHomeLink__EJjJD',
            };
        },
        49175: (e) => {
            e.exports = {
                root: 'Paywall_root__XE_NC',
                section: 'Paywall_section__Y30nd',
                section_faq: 'Paywall_section_faq__43qaB',
                overlayScroll_desktop: 'Paywall_overlayScroll_desktop__P46WF',
            };
        },
        49522: (e, t, a) => {
            'use strict';
            a.d(t, { X: () => _ });
            var i = a(32290),
                l = a(63618),
                n = a(55178),
                s = a(21732),
                r = a(45807),
                o = a(63423),
                c = a(82586),
                d = a(60178),
                u = a.n(d);
            let _ = (e) => {
                let {
                        carouselRef: t,
                        backwardControlClassName: a,
                        forwardControlClassName: d,
                        className: _,
                        withSecondaryColor: m,
                        buttonSize: p = 'xxxs',
                        buttonVariant: v = 'outline',
                    } = e,
                    { swipeBackward: x, swipeForward: y, shouldBackwardButtonBeDisabled: h, shouldForwardButtonBeDisabled: C, shouldHideControls: g } = (0, r.Y)(t),
                    A = (0, n.useCallback)(
                        (e) => {
                            (x(), e.stopPropagation());
                        },
                        [x],
                    ),
                    b = (0, n.useCallback)(
                        (e) => {
                            (y(), e.stopPropagation());
                        },
                        [y],
                    );
                return (0, i.jsxs)('div', {
                    className: (0, l.$)(u().root, _),
                    'data-test-id': s.S7.CAROUSEL_CONTROLS,
                    children: [
                        (0, i.jsx)(o.$, {
                            tabIndex: -1,
                            'aria-hidden': !0,
                            className: (0, l.$)(u().control, a, { [u().control_hidden]: g, [u().control_withSecondaryColor]: m }),
                            onClick: A,
                            size: p,
                            radius: 'round',
                            variant: v,
                            withRipple: !1,
                            icon: (0, i.jsx)(c.I, { size: 'xxs', variant: 'arrowLeft' }),
                            disabled: h,
                            'data-test-id': s.S7.CAROUSEL_CONTROLS_BACKWARD_BUTTON,
                        }),
                        (0, i.jsx)(o.$, {
                            tabIndex: -1,
                            'aria-hidden': !0,
                            className: (0, l.$)(u().control, d, { [u().control_hidden]: g, [u().control_withSecondaryColor]: m }),
                            onClick: b,
                            size: p,
                            radius: 'round',
                            variant: v,
                            withRipple: !1,
                            icon: (0, i.jsx)(c.I, { size: 'xxs', variant: 'arrowRight' }),
                            disabled: C,
                            'data-test-id': s.S7.CAROUSEL_CONTROLS_FORWARD_BUTTON,
                        }),
                    ],
                });
            };
        },
        49582: (e) => {
            e.exports = {
                root: 'FullscreenPlayerMobileContent_root__RITqv',
                wrapper: 'FullscreenPlayerMobileContent_wrapper__JPmBe',
                syncLyrics: 'FullscreenPlayerMobileContent_syncLyrics__HKUm0',
                trackInfoCoverContainer: 'FullscreenPlayerMobileContent_trackInfoCoverContainer__Y2hly',
                trackInfoCover: 'FullscreenPlayerMobileContent_trackInfoCover__zsEEq',
                contentContainer: 'FullscreenPlayerMobileContent_contentContainer__ILyg5',
                contentContainer_withSplitMode: 'FullscreenPlayerMobileContent_contentContainer_withSplitMode__Rdv5T',
                trackInfo: 'FullscreenPlayerMobileContent_trackInfo__IPGjo',
                metaContainer: 'FullscreenPlayerMobileContent_metaContainer__B2vTr',
                infoBlock: 'FullscreenPlayerMobileContent_infoBlock__ZcRdn',
                infoBlock_withExpandedSyncLyrics: 'FullscreenPlayerMobileContent_infoBlock_withExpandedSyncLyrics__qlbKX',
                coverWrapper: 'FullscreenPlayerMobileContent_coverWrapper___Y6ll',
                coverWrapper_enter: 'FullscreenPlayerMobileContent_coverWrapper_enter__oFtHh',
                coverWrapper_enter_active: 'FullscreenPlayerMobileContent_coverWrapper_enter_active__GM_of',
                'enter-fade': 'FullscreenPlayerMobileContent_enter-fade__Q0KNn',
                coverWrapper_exit: 'FullscreenPlayerMobileContent_coverWrapper_exit__QDk1i',
                coverWrapper_exit_active: 'FullscreenPlayerMobileContent_coverWrapper_exit_active__9S_wE',
                'exit-fade': 'FullscreenPlayerMobileContent_exit-fade__uS0jT',
                cover: 'FullscreenPlayerMobileContent_cover__W6pz2',
                metaText: 'FullscreenPlayerMobileContent_metaText__Fr74D',
                timeline: 'FullscreenPlayerMobileContent_timeline__Pta9W',
                content: 'FullscreenPlayerMobileContent_content__EAteH',
                syncLyricsContent: 'FullscreenPlayerMobileContent_syncLyricsContent__qhWG_',
                syncLyricsLoader: 'FullscreenPlayerMobileContent_syncLyricsLoader__0_W2j',
                syncLyricsScroller: 'FullscreenPlayerMobileContent_syncLyricsScroller__EqiCL',
                syncLyricsFooter: 'FullscreenPlayerMobileContent_syncLyricsFooter__bi9vY',
                syncLyricsCounter: 'FullscreenPlayerMobileContent_syncLyricsCounter___wm5g',
            };
        },
        49630: (e) => {
            e.exports = {
                root: 'TrailerFooter_root__LKXby',
                playButtonShimmer: 'TrailerFooter_playButtonShimmer__5QwPi',
                linkButtonShimmer: 'TrailerFooter_linkButtonShimmer__ZV1s1',
            };
        },
        51416: (e) => {
            e.exports = {
                root: 'TopSectionRUFamilyOffer_root__ttMJK',
                main: 'TopSectionRUFamilyOffer_main___eUj8',
                logo: 'TopSectionRUFamilyOffer_logo__p5tOO',
                logoWrap: 'TopSectionRUFamilyOffer_logoWrap__6UZ9F',
                moreInfoChildren: 'TopSectionRUFamilyOffer_moreInfoChildren__R1KUC',
                title: 'TopSectionRUFamilyOffer_title__ZQb6e',
                subtitle: 'TopSectionRUFamilyOffer_subtitle__kADi2',
                video: 'TopSectionRUFamilyOffer_video__qI7Fa',
                buySubscriptionBlock: 'TopSectionRUFamilyOffer_buySubscriptionBlock___9pDB',
                textBlock: 'TopSectionRUFamilyOffer_textBlock__O_tTl',
                goHomeLink: 'TopSectionRUFamilyOffer_goHomeLink__dMPtg',
            };
        },
        51728: (e) => {
            e.exports = { root: 'PaywallRU_root__X8j2f' };
        },
        51776: (e) => {
            e.exports = {
                root: 'PlayingNow_root__0lQa8',
                textBlock: 'PlayingNow_textBlock___CfRh',
                title: 'PlayingNow_title__82csz',
                subTitle: 'PlayingNow_subTitle__JNJfh',
                link: 'PlayingNow_link__4gLK9',
            };
        },
        52311: (e) => {
            e.exports = {
                content: 'MusicSectionDesktop_content__uCWAp',
                card: 'MusicSectionDesktop_card__YurZs',
                logo_ru: 'MusicSectionDesktop_logo_ru__Tiwfx',
                logo_en: 'MusicSectionDesktop_logo_en__dbYCi',
            };
        },
        52719: (e, t, a) => {
            'use strict';
            a.d(t, { O: () => c });
            var i = a(32290),
                l = a(63618),
                n = a(85472),
                s = a(71926),
                r = a(7925),
                o = a.n(r);
            let c = (e) => {
                let { title: t, className: a, titleClassName: r, infoDescription: c, ...d } = e;
                return (0, i.jsxs)('div', {
                    className: (0, l.$)(o().root, a),
                    ...(0, n.getDataAttrFromProps)(d),
                    children: [t && (0, i.jsx)(s.DZ, { variant: 'h4', className: (0, l.$)(o().infoTitle, r), children: t }), c],
                });
            };
        },
        52930: (e) => {
            e.exports = { root: 'SyncLyricsLine_root__r62BN' };
        },
        53209: (e) => {
            e.exports = { root: 'PaywallFAQQuestion_root__pS9KT' };
        },
        53512: (e, t, a) => {
            'use strict';
            a.d(t, { T: () => l });
            var i = a(71483);
            function l(e) {
                return (null == e ? void 0 : e.data.type) === i.K.Artist;
            }
        },
        53985: (e) => {
            e.exports = {
                root: 'TrackModalLyricsShimmer_root__t88sX',
                title: 'TrackModalLyricsShimmer_title__lIyk4',
                lyrics: 'TrackModalLyricsShimmer_lyrics__BSM_Q',
                important: 'TrackModalLyricsShimmer_important__U1BbD',
                button: 'TrackModalLyricsShimmer_button__uAG_w',
            };
        },
        54171: (e, t, a) => {
            'use strict';
            a.d(t, { w: () => n });
            var i = a(19383),
                l = a(85017);
            let n = (e) => {
                let { track: t, callback: a, disclaimerRejectHandler: n } = e;
                return (0, i.l)({ entity: t, entityType: l.n.TRACK, callback: a, onReject: n, preventDefaultWhenSafe: !1 });
            };
        },
        54692: (e) => {
            e.exports = { root: 'DisclaimerModal_root__l96Bq', overlay: 'DisclaimerModal_overlay__5w3NO', content: 'DisclaimerModal_content__rPx5x' };
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
        55482: (e) => {
            e.exports = { root: 'FullscreenPlayerDesktopPoster_root__d__YD', cover: 'FullscreenPlayerDesktopPoster_cover__CDmhM' };
        },
        55509: (e, t, a) => {
            'use strict';
            a.d(t, { e: () => l });
            var i = a(47078);
            let l = (e, t, a) => {
                let l = null != t ? t : i.wT,
                    n = null != a ? a : i.by,
                    s = (0, i.de)((0, i.aq)(e), l, n),
                    r = Math.round(255 * s[0]),
                    o = Math.round(255 * s[1]),
                    c = Math.round(255 * s[2]);
                return 'rgb('.concat(r, ', ').concat(o, ', ').concat(c, ')');
            };
        },
        56461: (e) => {
            e.exports = {
                root: 'TrackAboutModalDesktop_root__NHeeO',
                root_withFullscreen: 'TrackAboutModalDesktop_root_withFullscreen__jOu4X',
                root_withCustomControls: 'TrackAboutModalDesktop_root_withCustomControls__b2JDR',
                header: 'TrackAboutModalDesktop_header__7Zl2n',
                modalContent: 'TrackAboutModalDesktop_modalContent__yf4i5',
                explicitMark: 'TrackAboutModalDesktop_explicitMark__tgVyh',
                important: 'TrackAboutModalDesktop_important__tCPvh',
                version: 'TrackAboutModalDesktop_version__m0z2v',
                explicit: 'TrackAboutModalDesktop_explicit__FGMHf',
                content: 'TrackAboutModalDesktop_content__eEGZu',
                artistLink: 'TrackAboutModalDesktop_artistLink__ao_zU',
                artists: 'TrackAboutModalDesktop_artists__2SlTA',
                overlay: 'TrackAboutModalDesktop_overlay__7cEGE',
                textShimmer: 'TrackAboutModalDesktop_textShimmer__r5_AA',
                text: 'TrackAboutModalDesktop_text__zcpo0',
            };
        },
        57234: (e) => {
            e.exports = {
                root: 'PlusModalLogoBlock_root__cKh28',
                icon: 'PlusModalLogoBlock_icon__fMixB',
                icon_ru: 'PlusModalLogoBlock_icon_ru__JAn4U',
                icon_en: 'PlusModalLogoBlock_icon_en__OmrOY',
            };
        },
        57297: (e) => {
            e.exports = {
                root: 'TopSectionMobile_root__bl_XJ',
                image: 'TopSectionMobile_image__t_hCH',
                content: 'TopSectionMobile_content__sqstr',
                title: 'TopSectionMobile_title__O_Zx0',
                buySubscriptionBlock: 'TopSectionMobile_buySubscriptionBlock__NSVnY',
                moreInfoLink: 'TopSectionMobile_moreInfoLink__zjcOO',
            };
        },
        58178: (e) => {
            e.exports = { root: 'SyncLyrics_root__6KZg4', content: 'SyncLyrics_content__lbkWP' };
        },
        59170: (e, t, a) => {
            'use strict';
            a.d(t, { H: () => i });
            var i = (function (e) {
                return ((e.ALBUM = 'album'), (e.ARTIST = 'artist'), (e.PLAYLIST = 'playlist'), (e.TRACK = 'track'), e);
            })({});
        },
        59449: (e) => {
            e.exports = {
                root: 'PaywallFAQAnswer_root__IGMDE',
                list: 'PaywallFAQAnswer_list__rPZmm',
                listItem: 'PaywallFAQAnswer_listItem__5UQmO',
                link: 'PaywallFAQAnswer_link__WM9Xr',
            };
        },
        59976: (e) => {
            e.exports = { root: 'DownloadMobileAppModal_root__nD7fo', content: 'DownloadMobileAppModal_content__4ZW2F' };
        },
        60178: (e) => {
            e.exports = {
                root: 'CarouselControls_root__E_hwc',
                control: 'CarouselControls_control__L8t4i',
                control_hidden: 'CarouselControls_control_hidden__pLrn6',
                control_withSecondaryColor: 'CarouselControls_control_withSecondaryColor__KqSEN',
            };
        },
        61341: (e, t, a) => {
            'use strict';
            a.d(t, { c: () => i });
            var i = (function (e) {
                return ((e.IDLE = 'idle'), (e.SUCCESS = 'success'), (e.ERROR = 'error'), e);
            })({});
        },
        61802: (e) => {
            e.exports = {
                root: 'FullscreenPlayerDesktopContent_root__tKNGK',
                fullscreenContent: 'FullscreenPlayerDesktopContent_fullscreenContent__Nvety',
                fullscreenContent_enter: 'FullscreenPlayerDesktopContent_fullscreenContent_enter__xMN2Y',
                'enter-fade-fullscreen-content': 'FullscreenPlayerDesktopContent_enter-fade-fullscreen-content__eOCyM',
                fullscreenContent_leave: 'FullscreenPlayerDesktopContent_fullscreenContent_leave__6HeZ_',
                'leave-fade-fullscreen-content': 'FullscreenPlayerDesktopContent_leave-fade-fullscreen-content__kswW5',
                fullscreenContent_withDisabledInsetTransition: 'FullscreenPlayerDesktopContent_fullscreenContent_withDisabledInsetTransition___gd__',
                additionalContent: 'FullscreenPlayerDesktopContent_additionalContent__tuuy7',
                additionalContent_enter: 'FullscreenPlayerDesktopContent_additionalContent_enter__WQmXC',
                additionalContent_enter_active: 'FullscreenPlayerDesktopContent_additionalContent_enter_active__a3nOf',
                'enter-fade-additional-content': 'FullscreenPlayerDesktopContent_enter-fade-additional-content__awk7_',
                additionalContent_exit: 'FullscreenPlayerDesktopContent_additionalContent_exit__aM4Or',
                additionalContent_exit_active: 'FullscreenPlayerDesktopContent_additionalContent_exit_active__vokVE',
                'leave-fade-additional-content': 'FullscreenPlayerDesktopContent_leave-fade-additional-content__dlFhp',
                additionalContent_withDisabledInsetTransition: 'FullscreenPlayerDesktopContent_additionalContent_withDisabledInsetTransition__kvSmh',
                info: 'FullscreenPlayerDesktopContent_info__Dq69p',
                artists: 'FullscreenPlayerDesktopContent_artists__a_2G3',
                nonMusicAuthors: 'FullscreenPlayerDesktopContent_nonMusicAuthors__JhhPY',
                meta: 'FullscreenPlayerDesktopContent_meta__3jDTy',
                title: 'FullscreenPlayerDesktopContent_title__I2JrP',
                meta_isSplitMode: 'FullscreenPlayerDesktopContent_meta_isSplitMode__zPC2S',
                ellipsis: 'FullscreenPlayerDesktopContent_ellipsis__2Qk2b',
                sliderContainer: 'FullscreenPlayerDesktopContent_sliderContainer__FtBZ7',
                slider: 'FullscreenPlayerDesktopContent_slider__FJscl',
                syncLyrics: 'FullscreenPlayerDesktopContent_syncLyrics__6dTfH',
                syncLyricsContent: 'FullscreenPlayerDesktopContent_syncLyricsContent__H_enX',
                syncLyricsLoader: 'FullscreenPlayerDesktopContent_syncLyricsLoader__EQ8o9',
                syncLyricsScroller: 'FullscreenPlayerDesktopContent_syncLyricsScroller__JslVK',
                syncLyricsFooter: 'FullscreenPlayerDesktopContent_syncLyricsFooter__HS8JZ',
                syncLyricsCounter: 'FullscreenPlayerDesktopContent_syncLyricsCounter__CnB_k',
            };
        },
        62230: (e) => {
            e.exports = {
                button: 'PlusModalButton_button__Ayw3M',
                shimmer: 'PlusModalButton_shimmer__JDPqE',
                button_mobile: 'PlusModalButton_button_mobile__V2Et4',
                shimmer_mobile: 'PlusModalButton_shimmer_mobile__ndcfv',
                text: 'PlusModalButton_text__GRAK7',
            };
        },
        63911: (e) => {
            e.exports = { topSection: 'PaywallOtherMobile_topSection__Pscnw' };
        },
        64347: (e) => {
            e.exports = {
                content_ru: 'KinopoiskSectionDesktop_content_ru__gILD5',
                content_by: 'KinopoiskSectionDesktop_content_by__31QvZ',
                card1: 'KinopoiskSectionDesktop_card1__nlqOH',
                card2: 'KinopoiskSectionDesktop_card2__ZMW4Z',
                card3: 'KinopoiskSectionDesktop_card3__n9_1i',
                card4: 'KinopoiskSectionDesktop_card4__TpOZ7',
                logo_ru: 'KinopoiskSectionDesktop_logo_ru__f6OLB',
                logo_en: 'KinopoiskSectionDesktop_logo_en__2oXnD',
            };
        },
        65024: (e, t, a) => {
            'use strict';
            a.d(t, { C: () => l });
            let i = new Set(Object.values(a(3785).M)),
                l = (e) => 'string' == typeof e && i.has(e);
        },
        65068: (e, t, a) => {
            'use strict';
            a.d(t, { p: () => l });
            var i = a(71483);
            function l(e) {
                return (null == e ? void 0 : e.data.type) === i.K.Various;
            }
        },
        65297: (e) => {
            e.exports = { root: 'PaywallOtherDesktop_root__c19Ht', topSection: 'PaywallOtherDesktop_topSection__d1CVV' };
        },
        65804: (e) => {
            e.exports = {
                root: 'PlayQueueBeforePlayingBlock_root__QIIfB',
                prevTrack: 'PlayQueueBeforePlayingBlock_prevTrack__5b6o4',
                animatedContent: 'PlayQueueBeforePlayingBlock_animatedContent__C04_K',
                animatedContent_moveToBottom: 'PlayQueueBeforePlayingBlock_animatedContent_moveToBottom__2gKF7',
                'move-to-bottom': 'PlayQueueBeforePlayingBlock_move-to-bottom__7EZIY',
                animatedContent_moveFromBottom: 'PlayQueueBeforePlayingBlock_animatedContent_moveFromBottom__0kTuW',
                'move-from-bottom': 'PlayQueueBeforePlayingBlock_move-from-bottom__8mDwi',
                'move-prev-track-from-bottom': 'PlayQueueBeforePlayingBlock_move-prev-track-from-bottom__mFqMq',
                animatedContent_moveFromBottomSingleTrack: 'PlayQueueBeforePlayingBlock_animatedContent_moveFromBottomSingleTrack__MIEIc',
                'move-from-bottom-single-track': 'PlayQueueBeforePlayingBlock_move-from-bottom-single-track__YhsMT',
                'move-prev-track-from-bottom-single-track': 'PlayQueueBeforePlayingBlock_move-prev-track-from-bottom-single-track__NGI9j',
            };
        },
        66086: (e) => {
            e.exports = { root: 'PaywallFAQ_root__lDVk4', title: 'PaywallFAQ_title__G44Rp', content: 'PaywallFAQ_content__QJL9h' };
        },
        66666: (e) => {
            e.exports = {
                root: 'ImageSliderModal_root__AZO_D',
                root_mobile: 'ImageSliderModal_root_mobile__lBg8o',
                modalContent: 'ImageSliderModal_modalContent__R7c_w',
                closeButton: 'ImageSliderModal_closeButton__mabus',
                content: 'ImageSliderModal_content__Gjm6N',
                image: 'ImageSliderModal_image__ZUYEL',
                image_loading: 'ImageSliderModal_image_loading__1Fyyn',
                leftArrowWrapper: 'ImageSliderModal_leftArrowWrapper__2d5RO',
                rightArrowWrapper: 'ImageSliderModal_rightArrowWrapper__vSPiO',
                slider: 'ImageSliderModal_slider__gDVWR',
                wrapper: 'ImageSliderModal_wrapper__s31SU',
                slide: 'ImageSliderModal_slide__4VnYF',
                loadingIndicator: 'ImageSliderModal_loadingIndicator__3yfbk',
                loadingIndicator_showed: 'ImageSliderModal_loadingIndicator_showed__Ec0yW',
            };
        },
        66872: (e) => {
            e.exports = { root: 'MoreInfoLink_root___TgXc', content: 'MoreInfoLink_content__Rjqj_' };
        },
        67288: (e) => {
            e.exports = {
                root: 'PlayQueueTitle_root__E2XOW',
                root_withDnD: 'PlayQueueTitle_root_withDnD__8kctq',
                linkContainer: 'PlayQueueTitle_linkContainer__xqLIj',
                titleIcon: 'PlayQueueTitle_titleIcon__z1B_p',
                title: 'PlayQueueTitle_title__q3ppG',
                linkText: 'PlayQueueTitle_linkText__9mgvM',
                heading: 'PlayQueueTitle_heading__JrzQq',
                heading_withOffset: 'PlayQueueTitle_heading_withOffset__ZRyEr',
                subTitle: 'PlayQueueTitle_subTitle__RzrJA',
                modeTitle: 'PlayQueueTitle_modeTitle__KixWV',
            };
        },
        68104: (e) => {
            e.exports = { root: 'TrailerOnboarding_root__I3fd0', text: 'TrailerOnboarding_text__HU4RO', close: 'TrailerOnboarding_close__ywMIK' };
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
        70009: (e) => {
            e.exports = {
                modalHeader: 'CommunicationModal_modalHeader__TnzU6',
                modalContent: 'CommunicationModal_modalContent__d8REH',
                container: 'CommunicationModal_container__BIgb7',
                wrapper: 'CommunicationModal_wrapper__SRy17',
                imageWrapper: 'CommunicationModal_imageWrapper__LOr5C',
                imageWrapper_content: 'CommunicationModal_imageWrapper_content__PfjQl',
                imageWrapper_header: 'CommunicationModal_imageWrapper_header__8wsRZ',
                image: 'CommunicationModal_image__qzXK8',
                title: 'CommunicationModal_title__yvFAn',
                text: 'CommunicationModal_text__gGaLU',
                buttons: 'CommunicationModal_buttons__MDmp2',
                disclaimerWrapper: 'CommunicationModal_disclaimerWrapper__pMRYf',
                disclaimer: 'CommunicationModal_disclaimer__NJJSA',
                disclaimerLink: 'CommunicationModal_disclaimerLink__8yuBO',
                root: 'CommunicationModal_root__1dOYE',
                root_modal: 'CommunicationModal_root_modal__u_igG',
                button: 'CommunicationModal_button__qysqU',
                root_fullscreen: 'CommunicationModal_root_fullscreen__41Y5Y',
                gradientOverlay: 'CommunicationModal_gradientOverlay__MOg5g',
                buttonText: 'CommunicationModal_buttonText__2XS8u',
                closeButton: 'CommunicationModal_closeButton__EP7ay',
                closeButtonIcon: 'CommunicationModal_closeButtonIcon__ujXug',
                advDisclaimerTrigger: 'CommunicationModal_advDisclaimerTrigger__otvUP',
                advDisclaimerTrigger_modal: 'CommunicationModal_advDisclaimerTrigger_modal__osiyy',
                advDisclaimerTrigger_fullscreen: 'CommunicationModal_advDisclaimerTrigger_fullscreen__F4N7r',
                advDisclaimerPopover: 'CommunicationModal_advDisclaimerPopover__gu0oV',
                advDisclaimerText: 'CommunicationModal_advDisclaimerText__hiNjI',
            };
        },
        70042: (e) => {
            e.exports = {
                root: 'TrackModalControls_root__alpd3',
                controlsContainer: 'TrackModalControls_controlsContainer__UeQb4',
                menuWrapper: 'TrackModalControls_menuWrapper__tDLID',
                menuButton: 'TrackModalControls_menuButton__V6L4c',
                disabledButtonByDisclaimer: 'TrackModalControls_disabledButtonByDisclaimer__qfCvg',
            };
        },
        71354: (e) => {
            e.exports = {
                title: 'OtherServicesSectionDesktop_title__TmiIR',
                content_ru: 'OtherServicesSectionDesktop_content_ru__tShm1',
                content_by: 'OtherServicesSectionDesktop_content_by__GAt4T',
                card: 'OtherServicesSectionDesktop_card__HqmGz',
                logo_ru: 'OtherServicesSectionDesktop_logo_ru__tox8Q',
                logo_en: 'OtherServicesSectionDesktop_logo_en__xuJro',
            };
        },
        73905: () => {},
        74696: (e) => {
            e.exports = {
                root: 'VideoPlayerBarDesktop_root__OxypO',
                info: 'VideoPlayerBarDesktop_info__ulYvU',
                infoCard: 'VideoPlayerBarDesktop_infoCard__mE___',
                coverContainer: 'VideoPlayerBarDesktop_coverContainer__xV_VP',
                cover: 'VideoPlayerBarDesktop_cover__Nf4WW',
                description: 'VideoPlayerBarDesktop_description__sAiwG',
                artists: 'VideoPlayerBarDesktop_artists__PNY62',
                artistLink: 'VideoPlayerBarDesktop_artistLink__FgFZ8',
                infoButtons: 'VideoPlayerBarDesktop_infoButtons__9xWZ3',
                sonata: 'VideoPlayerBarDesktop_sonata__VrtGS',
                meta: 'VideoPlayerBarDesktop_meta__KlPBv',
                slider: 'VideoPlayerBarDesktop_slider__xULTh',
                important: 'VideoPlayerBarDesktop_important__HR9Xf',
            };
        },
        74951: (e, t, a) => {
            'use strict';
            (a.r(t), a.d(t, { ProductLayoutClientOnlyModalsContent: () => dL }));
            var i,
                l,
                n,
                s,
                r,
                o,
                c,
                d,
                u,
                _,
                m,
                p,
                v,
                x,
                y = a(32290),
                h = a(96103),
                C = a(99923),
                g = a(55178),
                A = a.t(g, 2),
                b = a(91027),
                f = a(84638),
                j = a(83920),
                N = a(57594),
                T = a(79406),
                S = a(44936),
                I = a(96333),
                k = a(36504),
                L = a(22556),
                E = a(44242),
                M = a(42125),
                P = a(43592),
                O = a(44338),
                w = a(24535),
                R = a(47216),
                D = a(94821),
                B = a(26365),
                F = a(53161),
                U = a(52843),
                z = a(20698),
                W = a(31995);
            async function K(e, t, a) {
                var i, l, n, s, r, o, c;
                if (!e || !t) return { title: '', description: '', openGraph: {}, twitter: {}, appLinks: {}, other: {} };
                let d = await (0, M.W)(a.locale),
                    u = (0, O.N)(null != (i = e.title) ? i : '');
                return a.isNotFound
                    ? { robots: { index: !1 } }
                    : {
                          title:
                              null != (l = a.disclaimerTitle)
                                  ? l
                                  : (function (e) {
                                        var t;
                                        let { trackMeta: a, messageFormatter: i } = e,
                                            l = (0, z.j)(null != (t = a.artists) ? t : []);
                                        return i({ id: 'metadata.track-title' }, { trackTitle: a.title, artistsNames: l });
                                    })({ trackMeta: e, messageFormatter: d }),
                          description: (function (e) {
                              var t, a;
                              let { trackMeta: i, albumMeta: l, messageFormatter: n } = e,
                                  s = (0, z.j)(null != (a = i.artists) ? a : []),
                                  r = Math.round((i.durationMs || 0) / F.k7);
                              return n(
                                  { id: 'metadata.track-description' },
                                  {
                                      type: (null == (t = i.type) ? void 0 : t.replace('-', '_')) || null,
                                      artistsNames: s || null,
                                      trackTitle: i.title,
                                      albumTitle: (null == l ? void 0 : l.title) || null,
                                      duration: (0, U.E)(r),
                                      year: (null == l ? void 0 : l.year) || null,
                                  },
                              );
                          })({ trackMeta: e, albumMeta: t, messageFormatter: d }),
                          openGraph: (0, w.i)({
                              ogTitle: u,
                              ogDescription: (function (e) {
                                  var t, a;
                                  let { trackMeta: i, albumMeta: l, messageFormatter: n } = e,
                                      s = (0, W.Y)((0, z.j)(null != (a = i.artists) ? a : []), 96, !1);
                                  return n(
                                      { id: 'metadata.track-og-description' },
                                      {
                                          type: (null == (t = i.type) ? void 0 : t.replace('-', '_')) || null,
                                          artistsNames: s || null,
                                          year: (null == l ? void 0 : l.year) || null,
                                      },
                                  );
                              })({ trackMeta: e, albumMeta: t, messageFormatter: d }),
                              fullUrl: null != (n = a.fullUrl) ? n : '',
                              locale: a.locale,
                              ogImage: null != (s = e.ogImage) ? s : '',
                              siteName: d({ id: 'metadata.yandex-music' }),
                          }),
                          twitter: (0, R.H)({ cardType: D.W.APP, title: u, url: a.url, appName: d({ id: 'metadata.yandex-music' }) }),
                          appLinks: (0, E.X)({
                              additional: { ...a, url: null != (r = a.url) ? r : '', fullUrl: null != (o = a.fullUrl) ? o : '', host: a.host },
                              appName: d({ id: 'metadata.yandex-music' }),
                          }),
                          other: { 'music:musician': (0, P.x)(null != (c = null == e ? void 0 : e.artists) ? c : [], a.host) },
                          alternates: (0, B.S)('/album/:albumId/track/:trackId', a.tld, { params: { albumId: t.id, trackId: e.id } }),
                      };
            }
            var H = a(35433),
                V = a.n(H),
                Y = a(60900),
                q = a(21732),
                Q = a(63423),
                $ = a(82586),
                G = a(54171),
                Z = a(85472),
                X = a(70204),
                J = a(34186),
                ee = a(37495),
                et = a(82273),
                ea = a(90048);
            let ei = (0, h.PA)((e) => {
                var t, a;
                let { user: i, track: l } = e,
                    n = (0, J.N)().get(X.V4),
                    s = (0, et._)(n.oldWebHost);
                if (i.isAuthorized) return null;
                let r = { host: 'https://'.concat(s) },
                    { href: o } = l.albumId
                        ? (0, Z.getLinkAttributesBase)('/album/:albumId/track/:trackId', { params: { albumId: l.albumId, trackId: l.id }, options: r })
                        : (0, Z.getLinkAttributesBase)('/track/:trackId', { params: { trackId: l.id }, options: r }),
                    c = l.mainArtist ? (0, Z.getLinkAttributesBase)('/artist/:artistId', { params: { artistId: l.mainArtist.id }, options: r }).href : void 0,
                    d = l.mainAlbum ? (0, Z.getLinkAttributesBase)('/album/:albumId', { params: { albumId: l.mainAlbum.id }, options: r }).href : void 0;
                return (0, y.jsx)(ea.S, {
                    value: {
                        '@type': 'MusicRecording',
                        name: l.title,
                        url: o,
                        thumbnailUrl: l.coverUri ? (0, Z.createAvatarUrl)(l.coverUri, 'orig') : void 0,
                        duration: (0, ee.F)(null != (t = l.durationMs) ? t : 0),
                        genre: null != (a = l.genre) ? a : void 0,
                        datePublished: l.pubDate,
                        description: l.shortDescription,
                        byArtist: l.mainArtist ? { '@type': 'MusicGroup', name: l.mainArtist.name, url: c } : void 0,
                        inAlbum: l.mainAlbum
                            ? {
                                  '@type': 'MusicAlbum',
                                  name: l.mainAlbum.title,
                                  url: d,
                                  thumbnailUrl: l.mainAlbum.coverUri ? (0, Z.createAvatarUrl)(l.mainAlbum.coverUri, 'orig') : void 0,
                              }
                            : void 0,
                        potentialAction: {
                            '@type': 'ListenAction',
                            expectsAcceptanceOf: { '@type': 'Offer', category: 'free', target: { '@type': 'EntryPoint', actionPlatform: o } },
                        },
                    },
                });
            });
            var el = a(45477),
                en = a(75582),
                es = a(90357),
                er = a(71926),
                eo = a(17330),
                ec = a(19620),
                ed = a(12944),
                eu = a.n(ed),
                e_ = a(79856),
                em = a(8606),
                ep = a.n(em);
            let ev = (e) => {
                    let { isShimmerActive: t } = e;
                    return (0, y.jsxs)('div', {
                        className: ep().root,
                        children: [
                            (0, y.jsx)(e_.W, { className: ep().title, isActive: t }),
                            (0, y.jsxs)('div', {
                                className: ep().coverBlock,
                                children: [
                                    (0, y.jsx)(e_.W, { className: ep().cover, isActive: t }),
                                    (0, y.jsxs)('div', {
                                        className: ep().linkBlock,
                                        children: [
                                            (0, y.jsx)(e_.W, { className: ep().link, isActive: t }),
                                            (0, y.jsx)(e_.W, { className: ep().description, isActive: t }),
                                        ],
                                    }),
                                ],
                            }),
                        ],
                    });
                },
                ex = (0, h.PA)((e) => {
                    var t;
                    let { onModalClose: a } = e,
                        { formatMessage: i } = (0, Y.A)(),
                        {
                            settings: { isMobile: l },
                            track: n,
                            fullscreenPlayer: s,
                        } = (0, N.g)(),
                        r = (0, b.c)(() => {
                            (s.modal.isOpened && s.modal.close(), l && a());
                        }),
                        o = null == (t = n.meta) ? void 0 : t.mainAlbum,
                        c = (0, g.useMemo)(() => {
                            if (!o) return;
                            let e = o.trackCount;
                            return o.isAudiobook || o.isFairyTale
                                ? i({ id: 'entity-names.number-of-chapters' }, { counter: e })
                                : o.isPodcast
                                  ? i({ id: 'entity-names.number-of-episodes' }, { counter: e })
                                  : i({ id: 'entity-names.number-of-tracks' }, { counter: e });
                        }, [o, i]);
                    return n.isShimmerVisible
                        ? (0, y.jsx)(ev, { isShimmerActive: n.isLoading })
                        : o
                          ? (0, y.jsxs)('div', {
                                className: eu().root,
                                'data-test-id': q.Xk.track.TRACK_PAGE_ALBUM,
                                children: [
                                    (0, y.jsx)(er.DZ, {
                                        variant: 'h2',
                                        size: 'm',
                                        lineClamp: 1,
                                        className: eu().title,
                                        'data-test-id': q.Xk.track.TRACK_PAGE_ALBUM_TITLE,
                                        children: i({ id: 'track-modal.album-heading' }, { type: (0, eo.y)(o.type) }),
                                    }),
                                    (0, y.jsx)(ec.T, {
                                        title: null == o ? void 0 : o.title,
                                        coverUrl: null == o ? void 0 : o.coverUri,
                                        description: c,
                                        viewAllActionLink: null == o ? void 0 : o.url,
                                        onViewAllAction: r,
                                        titleLineClamp: 1,
                                        available: o.isAvailable,
                                        titleSize: 'xs',
                                        withDescription: !!c,
                                    }),
                                ],
                            })
                          : null;
                });
            var ey = a(44989),
                eh = a(95716),
                eC = {
                    5881: (e, t, a) => {
                        function i() {
                            for (var e, t, a = 0, i = ''; a < arguments.length;)
                                (e = arguments[a++]) &&
                                    (t = (function e(t) {
                                        var a,
                                            i,
                                            l = '';
                                        if ('string' == typeof t || 'number' == typeof t) l += t;
                                        else if ('object' == typeof t)
                                            if (Array.isArray(t)) for (a = 0; a < t.length; a++) t[a] && (i = e(t[a])) && (l && (l += ' '), (l += i));
                                            else for (a in t) t[a] && (l && (l += ' '), (l += a));
                                        return l;
                                    })(e)) &&
                                    (i && (i += ' '), (i += t));
                            return i;
                        }
                        (a.r(t), a.d(t, { clsx: () => i, default: () => l }));
                        let l = i;
                    },
                    2850: (e, t, a) => {
                        (a.r(t), a.d(t, { default: () => i }));
                        let i = {
                            contentContainer: 'JjlbHZ4FaP9EAcR_1DxF',
                            contentContainer_block: 'iOlzvyUREgDkthkrx7Sf',
                            flexIcon: 'WsKeF73pWotx9W1tWdYY',
                            root: 'cpeagBA1_PblpJn8Xgtv',
                            root_withoutBorder: 'qU2apWBO1yyEK0lZ3lPO',
                            root_radius_xs: 'MmZbSs387gu2qrJ1lDWd',
                            root_radius_s: 'mlcrraysn7mW6xrBXSBF',
                            root_radius_m: 'dgV08FKVLZKFsucuiryn',
                            root_radius_l: 'S97_5dtzhpxo_amtfYRg',
                            root_radius_xl: 'nNBJnDHRlyLTniWosJhk',
                            root_radius_xxxl: 'zIMibMuH7wcqUoW7KH1B',
                            root_radius_round: 'uwk3hfWzB2VT7kE13SQk',
                            root_size: 'IlG7b1K0AD7E7AMx6F5p',
                            root_size_default: 'C_QGmfTz6UFX93vfPt6Z',
                            root_size_xxxs: 'eQt33MLDiQ6DRSuLaYEp',
                            root_size_xxs: 'oR11LfCBVqMbUJiAgknd',
                            root_size_xs: 'j1jXIVckFgZECecFzZMe',
                            root_size_s: 'WtFdWDF44egSVM_YiMUX',
                            root_size_m: 'Y2uqxoU7xa_AZ8FUCVOW',
                            root_size_l: 'SGYcNjvjmMsXeEVGUV2Z',
                            root_icon_left: 'kc5CjvU5hT9KEj0iTt3C',
                            root_icon_right: 'et24Jf7pT_X9Fvc7TznR',
                            root_primary: 'fXlFz1qMkliFUWOkHo8T',
                            root_primary_default: '_eTRQi5ADZCUvUKMZqJU',
                            ripple: 'spMT3NcRD9Yb0ntNaNct',
                            root_primary_outline: 'fCUSh2B0Ye9kEvceE8zc',
                            root_primary_text: 'qlPp6CSQQEMVZPqtqLiQ',
                            root_primary_withHover: 'KZF6_4K1p_Y_GMIAxaAn',
                            root_primary_withHover_default: 'rWukOKAJh5Ga7JuIp62L',
                            root_primary_withHover_outline: 'fdwWCJKgUqml5wNqrRcN',
                            root_primary_withHover_text: 'IgYbZLnYjW0nMahgpkus',
                            root_secondary: '_T4p_w41oaq6L4sztSdw',
                            root_secondary_default: 'iJVAJMgccD4vj4E4o068',
                            root_secondary_outline: 'pnM3iSP9keZOELI2oohr',
                            root_secondary_text: 'UDMYhpDjiAFT3xUx268O',
                            root_secondary_withHover: 'qUbrkhZIOVrvM0roV1QF',
                            root_secondary_withHover_default: 'nHWc2sto1C6Gm0Dpw_l0',
                            root_secondary_withHover_outline: 'i5WuBm5mfG0mflk_1jH_',
                            root_secondary_withHover_text: 'HbaqudSqu7Q3mv3zMPGr',
                            root_plus: 'ixLRsIJ2FvXO2k04n_QY',
                            root_plus_default: 'yRHwHzEGfDgRXGzYJqw2',
                            root_plus_outline: 'e777irPFmyQFFrURLF_U',
                            root_plus_text: 'vRqDhvmt3gt8TFp45_Zw',
                            root_plus_withHover: 'TZif6q3I2RwBEYXwK_iA',
                            root_plus_withHover_default: 'k3DhvmzpnM_Fb9oFdE4q',
                            root_plus_withHover_outline: 'RiDWYwGIxqbrUPR699DM',
                            root_plus_withHover_text: 'hC_mMCzWjkTn2j9xZzGc',
                            root_accent: 'jqD2jMT6n7F0WKyqwMsn',
                            root_accent_default: 'bDp0r9MtoYECZ8ObMoCh',
                            root_accent_outline: 'rXNyGp8NBAw2MUjACZNj',
                            root_accent_text: 'hmV4ERaXWAJc4uPLZL30',
                            root_accent_withHover: 'uKuxXu1N4TP5cWaEK5Ke',
                            root_accent_withHover_default: 't_hequUaUgAMhFuxizLb',
                            root_accent_withHover_outline: 'Oy9sPFTxNTo1_E29U4aF',
                            root_accent_withHover_text: 'LcKRSd3DLoh7k60Oqox8',
                            root_withActiveSpinner: 'nAGvO87rLs15SJgft6Hh',
                            block: 'BbCxxIjBGupN28bq2lSP',
                            icon: 'J9wTKytjOWG73QMoN5WP',
                            icon_position_left: 'elJfazUBui03YWZgHCbW',
                            icon_position_right: 'RBoEbyJKP5rEtLsXM1ji',
                            icon_withButtonSize: 'cE17_kCWJgx8kzQEkeVr',
                            spinnerContainer: 'STbBDGqYjUEcLuNvhu9w',
                        };
                    },
                    1733: (e, t, a) => {
                        (a.r(t), a.d(t, { default: () => i }));
                        let i = {
                            root: 'BnN6sQIg6NahNBun6fkP',
                            fade: 'MM8MKXCw0gMkVvq7C1YS',
                            fade_active: 'MsLY_qiKofQrwKAr98EC',
                            button: 'Dp6n_Y0cfUyPQT1Z6uIm',
                            text: 'bfmUuyonXAK7HKYtDzUK',
                        };
                    },
                    9097: (e, t) => {
                        var a = Symbol.for('react.transitional.element');
                        function i(e, t, i) {
                            var l = null;
                            if ((void 0 !== i && (l = '' + i), void 0 !== t.key && (l = '' + t.key), 'key' in t))
                                for (var n in ((i = {}), t)) 'key' !== n && (i[n] = t[n]);
                            else i = t;
                            return { $$typeof: a, type: e, key: l, ref: void 0 !== (t = i.ref) ? t : null, props: i };
                        }
                        ((t.Fragment = Symbol.for('react.fragment')), (t.jsx = i), (t.jsxs = i));
                    },
                    4377: (e, t, a) => {
                        e.exports = a(9097);
                    },
                    1676: (e, t, a) => {
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.useToggle = void 0));
                        let i = a(810);
                        t.useToggle = (e) => {
                            let [t, a] = (0, i.useState)(e);
                            (0, i.useEffect)(() => {
                                a(e);
                            }, [e]);
                            let l = (0, i.useCallback)(() => {
                                    a((e) => !e);
                                }, []),
                                n = (0, i.useCallback)(() => {
                                    a(!0);
                                }, []),
                                s = (0, i.useCallback)(() => {
                                    a(!1);
                                }, []);
                            return { state: t, toggle: l, setState: a, toggleTrue: n, toggleFalse: s };
                        };
                    },
                    2111: (e, t, a) => {
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.useTruncate = void 0));
                        let i = a(352),
                            l = a(810),
                            n = a(1676);
                        t.useTruncate = (e) => {
                            let [t, a] = (0, l.useState)(0),
                                { state: s, toggleTrue: r, toggleFalse: o } = (0, n.useToggle)(!1),
                                c = (0, l.useMemo)(
                                    () =>
                                        (0, i.throttle)(() => {
                                            let { offsetHeight: a, scrollHeight: i } = (null == e ? void 0 : e.current) || {};
                                            a && i && t < i ? r() : o();
                                        }, 100),
                                    [t, e, o, r],
                                );
                            return (
                                (0, l.useEffect)(() => {
                                    var i, l;
                                    !t && (null == (i = e.current) ? void 0 : i.offsetHeight) && a(null == (l = e.current) ? void 0 : l.offsetHeight);
                                }, [t, e]),
                                (0, l.useEffect)(
                                    () => (
                                        c(),
                                        window.addEventListener('resize', c),
                                        () => {
                                            window.removeEventListener('resize', c);
                                        }
                                    ),
                                    [c],
                                ),
                                { isTruncated: s }
                            );
                        };
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
                                    l = document.createElement('span'),
                                    n = Math.max(i.clientWidth, i.clientHeight),
                                    s = n / 2,
                                    r = i.getBoundingClientRect(),
                                    o = 0 === e.clientX ? Math.round(r.width / 2) : e.clientX - r.left,
                                    c = 0 === e.clientY ? Math.round(r.height / 2) : e.clientY - r.top;
                                ((l.style.width = ''.concat(n, 'px')),
                                    (l.style.height = ''.concat(n, 'px')),
                                    (l.style.left = 0 === e.clientX ? '0px' : ''.concat(o - s, 'px')),
                                    (l.style.top = ''.concat(c - s, 'px')),
                                    l.classList.add(t));
                                let d = i.getElementsByClassName(t)[0];
                                (d && d.remove(), i.insertBefore(l, i.firstChild));
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
                            l = a(6384);
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
                        let n = (e) => ({
                            primary: e.primary,
                            secondary: e.secondary,
                            primaryStops: t.PRIMARY_GRADIENT_STOPS[e.name],
                            secondaryStops: t.SECONDARY_GRADIENT_STOPS[e.name],
                            primaryDarkIdleStops: t.PRIMARY_DARK_IDLE_STOPS,
                        });
                        ((t.getVibePaletteByBucketName = (e) => {
                            let a = (0, l.findColorBucketByName)(e);
                            return a ? n(a) : t.FALLBACK_PALETTE;
                        }),
                            (t.getVibeColorBucketSelection = (e) => {
                                let t = (0, i.hexToHsl)(e),
                                    a = t.s > 0 ? 'hue' : 'lightness';
                                return { bucket: 'hue' === a ? (0, l.findColorBucketByHue)(t.h) : (0, l.findColorBucketByLightness)(t.l), hsl: t, mode: a };
                            }),
                            (t.getVibePaletteColors = (e) => {
                                if (!e) return t.FALLBACK_PALETTE;
                                let { bucket: a } = (0, t.getVibeColorBucketSelection)(e);
                                return a ? n(a) : t.FALLBACK_PALETTE;
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
                        var l = a(1848);
                        Object.defineProperty(t, 'getElementFromRefOrElement', {
                            enumerable: !0,
                            get: function () {
                                return l.getElementFromRefOrElement;
                            },
                        });
                        var n = a(1888);
                        Object.defineProperty(t, 'getVibePaletteColors', {
                            enumerable: !0,
                            get: function () {
                                return n.getVibePaletteColors;
                            },
                        });
                    },
                    7291: function (e, t, a) {
                        var i =
                            (this && this.__importDefault) ||
                            function (e) {
                                return e && e.__esModule ? e : { default: e };
                            };
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.Button = void 0));
                        let l = a(4377),
                            n = a(810),
                            s = a(5881),
                            r = a(6882),
                            o = i(a(2850)),
                            c = (e) => {
                                let {
                                        forwardRef: t,
                                        isBlock: a,
                                        iconPosition: i = 'left',
                                        children: c,
                                        className: d,
                                        color: u = 'secondary',
                                        flexIcon: _,
                                        icon: m,
                                        spinner: p,
                                        role: v,
                                        onClick: x,
                                        radius: y = 'm',
                                        size: h,
                                        type: C = 'button',
                                        variant: g = 'default',
                                        withRipple: A = !0,
                                        withHover: b = !0,
                                        withBorder: f = !1,
                                        disabled: j,
                                        focusableWhenDisabled: N,
                                        'aria-disabled': T,
                                        iconClassName: S,
                                        contentContainerClassName: I,
                                        ...k
                                    } = e,
                                    L = (0, n.useId)(),
                                    E = !n.Children.toArray(c).filter(Boolean).length,
                                    M = 'left' === i,
                                    P = null,
                                    O = (0, n.isValidElement)(p);
                                if (m) {
                                    var w, R;
                                    P = (0, n.cloneElement)(m, {
                                        className: (0, s.clsx)(
                                            o.default.icon,
                                            {
                                                [o.default['icon_position_'.concat(i)]]: i && !E,
                                                [o.default.icon_withButtonSize]: !(null == (w = m.props) ? void 0 : w.size),
                                            },
                                            null == (R = m.props) ? void 0 : R.className,
                                            S,
                                        ),
                                        key: L,
                                    });
                                }
                                let D = (0, n.useMemo)(() => (O ? (0, l.jsx)('div', { className: o.default.spinnerContainer, children: p }) : null), [O, p]),
                                    B = (0, n.useCallback)(
                                        (e) => {
                                            if (j) {
                                                (e.preventDefault(), e.stopPropagation());
                                                return;
                                            }
                                            O || (A && (0, r.createRipple)(e, o.default.ripple), null == x || x(e));
                                        },
                                        [j, O, x, A],
                                    );
                                return (0, l.jsx)('button', {
                                    ref: t,
                                    className: (0, s.clsx)(
                                        o.default.root,
                                        o.default['root_'.concat(u, '_').concat(g)],
                                        o.default['root_radius_'.concat(y)],
                                        o.default.root_size,
                                        {
                                            [o.default['root_'.concat(u, '_withHover_').concat(g)]]: b && !j && !O,
                                            [o.default['root_size_'.concat(h)]]: h,
                                            [o.default.root_withoutBorder]: !f,
                                            [o.default.root_withActiveSpinner]: O,
                                            [o.default.block]: a,
                                            [o.default.flexIcon]: _,
                                            [o.default.iconOnly]: E,
                                            [o.default.root_icon_left]: m && !E && M,
                                            [o.default.root_icon_right]: m && !E && !M,
                                        },
                                        d,
                                    ),
                                    type: C,
                                    role: v,
                                    onClick: B,
                                    ...k,
                                    disabled: j && !N,
                                    'aria-disabled': (j && N) || T,
                                    'data-disabled': j || void 0,
                                    'aria-live': O ? 'polite' : 'off',
                                    'aria-busy': O,
                                    children:
                                        m || O
                                            ? (0, l.jsxs)('span', {
                                                  className: (0, s.clsx)(o.default.contentContainer, { [o.default.contentContainer_block]: a }, I),
                                                  children: [m && M && P, !E && c, m && !M && P, D],
                                              })
                                            : c,
                                });
                            };
                        t.Button = (0, n.forwardRef)((e, t) => (0, l.jsx)(c, { forwardRef: t, ...e }));
                    },
                    7642: function (e, t, a) {
                        var i =
                            (this && this.__importDefault) ||
                            function (e) {
                                return e && e.__esModule ? e : { default: e };
                            };
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.CollapsableText = void 0));
                        let l = a(4377),
                            n = a(5881),
                            s = a(810),
                            r = a(2111),
                            o = a(7291),
                            c = i(a(1733));
                        t.CollapsableText = (e) => {
                            var t;
                            let {
                                    className: a,
                                    children: i,
                                    lineClamp: d,
                                    moreText: u,
                                    lessText: _,
                                    buttonClassName: m,
                                    buttonProps: p,
                                    withFade: v,
                                    initialOpen: x = !1,
                                    open: y,
                                    onOpenChange: h,
                                    ...C
                                } = e,
                                [g, A] = (0, s.useState)(x),
                                b = (0, s.useRef)(null),
                                { isTruncated: f } = (0, r.useTruncate)(b),
                                j = null != y ? y : g,
                                N = null != h ? h : A,
                                T = (0, s.cloneElement)(i, {
                                    ref: b,
                                    lineClamp: (!j && d) || void 0,
                                    className: (0, n.clsx)(null == (t = i.props) ? void 0 : t.className, c.default.text),
                                }),
                                S = (0, s.useMemo)(
                                    () => (v && f ? (0, l.jsx)('div', { className: (0, n.clsx)(c.default.fade, { [c.default.fade_active]: !j }), children: T }) : T),
                                    [f, j, T, v],
                                ),
                                I = (0, s.useCallback)(() => {
                                    N(!j);
                                }, [j, N]),
                                k = j ? _ : u;
                            return (0, l.jsxs)('div', {
                                className: (0, n.clsx)(c.default.root, a),
                                ...C,
                                children: [
                                    S,
                                    f &&
                                        k &&
                                        (0, l.jsx)(o.Button, {
                                            ...p,
                                            variant: 'text',
                                            withRipple: !1,
                                            onClick: I,
                                            className: (0, n.clsx)(c.default.button, m),
                                            color: 'primary',
                                            children: k,
                                        }),
                                ],
                            });
                        };
                    },
                    2660: (e) => {
                        e.exports = Z;
                    },
                    352: (e) => {
                        e.exports = eh;
                    },
                    810: (e) => {
                        e.exports = A;
                    },
                },
                eg = {};
            function eA(e) {
                var t = eg[e];
                if (void 0 !== t) return t.exports;
                var a = (eg[e] = { exports: {} });
                return (eC[e].call(a.exports, a, a.exports, eA), a.exports);
            }
            ((eA.d = (e, t) => {
                for (var a in t) eA.o(t, a) && !eA.o(e, a) && Object.defineProperty(e, a, { enumerable: !0, get: t[a] });
            }),
                (eA.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
                (eA.r = (e) => {
                    ('undefined' != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
                        Object.defineProperty(e, '__esModule', { value: !0 }));
                }));
            var eb = {};
            (() => {
                (Object.defineProperty(eb, 'X', { value: !0 }), (eb.f = void 0));
                var e = eA(7642);
                Object.defineProperty(eb, 'f', {
                    enumerable: !0,
                    get: function () {
                        return e.CollapsableText;
                    },
                });
            })();
            var ef = eb.f;
            eb.X;
            var ej = a(81448),
                eN = a(18440),
                eT = a.n(eN);
            let eS = (e) => {
                let { lyrics: t, authors: a, source: i, isShimmerVisible: l, isShimmerActive: n } = e,
                    { formatMessage: s } = (0, Y.A)();
                return l
                    ? (0, y.jsx)(ej.q, { count: 25, isActive: n })
                    : (0, y.jsxs)(y.Fragment, {
                          children: [
                              t,
                              (0, y.jsxs)('div', {
                                  className: eT().writers,
                                  children: [
                                      a.length > 0 &&
                                          (0, y.jsx)(er.HL, {
                                              variant: 'div',
                                              size: 'l',
                                              weight: 'medium',
                                              'data-test-id': q.e8.content.TRACK_LYRICS_AUTHORS,
                                              children: s({ id: 'entity-names.authors' }, { authors: a }),
                                          }),
                                      i &&
                                          (0, y.jsx)(er.HL, {
                                              variant: 'div',
                                              size: 'l',
                                              weight: 'medium',
                                              'data-test-id': q.e8.content.TRACK_LYRICS_SOURCE,
                                              children: s({ id: 'entity-names.source' }, { source: i }),
                                          }),
                                  ],
                              }),
                          ],
                      });
            };
            var eI = a(28230),
                ek = a.n(eI),
                eL = a(63618),
                eE = a(53985),
                eM = a.n(eE);
            let eP = (e) => {
                    let { isShimmerActive: t } = e;
                    return (0, y.jsxs)('div', {
                        className: eM().root,
                        children: [
                            (0, y.jsx)(e_.W, { className: eM().title, isActive: t }),
                            (0, y.jsx)(ej.q, { className: (0, eL.$)(eM().lyrics, eM().important), count: 4, isActive: t }),
                            (0, y.jsx)(e_.W, { className: eM().button, isActive: t }),
                        ],
                    });
                },
                eO = (0, h.PA)((e) => {
                    var t, a, i, l;
                    let { track: n } = e,
                        { formatMessage: s } = (0, Y.A)(),
                        { notify: r } = (0, en.l)(),
                        { track: o, trackLyrics: c } = (0, N.g)(),
                        { state: d, setState: u } = (0, ey.e)(!1),
                        _ = c.currentTrackId !== (null == (t = o.meta) ? void 0 : t.id),
                        m = o.isResolved && (null == (a = o.meta) ? void 0 : a.isLyricsAvailable);
                    ((0, g.useEffect)(() => {
                        var e;
                        (null == (e = o.meta) ? void 0 : e.id) && m && _ && c.getLyrics(o.meta.id);
                    }, [_, m, c, null == (i = o.meta) ? void 0 : i.id]),
                        c.shouldShowErrorNotification &&
                            (r((0, y.jsx)(es.h, { error: s({ id: 'error-messages.error-during-action' }) }), { containerId: el.u.ERROR }), c.resetShouldShowError()));
                    let p = (0, b.c)((e) => {
                        (u(e), e && n && c.sendViews({ trackId: n.id, albumId: n.albumId }));
                    });
                    return c.isShimmerVisible || !c.lyrics || o.isShimmerVisible
                        ? (0, y.jsx)(eP, { isShimmerActive: c.isLoading || o.isLoading })
                        : (0, y.jsxs)('div', {
                              className: ek().root,
                              'data-test-id': q.Xk.track.TRACK_PAGE_LYRICS,
                              children: [
                                  (0, y.jsx)(er.DZ, {
                                      variant: 'h2',
                                      size: 'm',
                                      lineClamp: 1,
                                      className: ek().title,
                                      'data-test-id': q.e8.content.TRACK_LYRICS_TITLE,
                                      children: s({ id: 'entity-names.text' }),
                                  }),
                                  (0, y.jsx)(ef, {
                                      moreText: s({ id: 'track-modal.read-more' }),
                                      buttonClassName: ek().button,
                                      buttonProps: { 'data-test-id': q.e8.content.TRACK_LYRICS_TITLE_READ_MORE_BUTTON },
                                      open: d,
                                      onOpenChange: p,
                                      lineClamp: 4,
                                      withFade: !0,
                                      children: (0, y.jsx)(
                                          er.HL,
                                          {
                                              variant: 'div',
                                              className: ek().lyrics,
                                              size: 'l',
                                              weight: 'medium',
                                              'data-test-id': q.e8.content.TRACK_LYRICS_TEXT,
                                              children: (0, y.jsx)(eS, {
                                                  lyrics: c.lyrics,
                                                  authors: c.writersNames,
                                                  source: null == (l = c.major) ? void 0 : l.prettyName,
                                                  isShimmerVisible: c.isShimmerVisible,
                                                  isShimmerActive: c.isLoading,
                                              }),
                                          },
                                          null == n ? void 0 : n.getKey('lyrics'),
                                      ),
                                  }),
                              ],
                          });
                });
            var ew = a(71483),
                eR = a(41190),
                eD = a(69951),
                eB = a(72396),
                eF = a(98350),
                eU = a(49518),
                ez = a(34223),
                eW = a(6488),
                eK = a.n(eW);
            let eH = (0, h.PA)((e) => {
                let { tracks: t, contextId: a, isShimmerVisible: i, isShimmerActive: l, autoflowSeeds: n, shouldResetCarouselScroll: s } = e,
                    { formatMessage: r } = (0, Y.A)(),
                    { from: o } = (0, eB.f)({ contextId: a, contextType: ew.K.Various }),
                    c = (0, b.c)((e, a) => ({
                        contextData: { type: ew.K.Various, meta: { id: e.entityId }, from: o, overrideAutoflowSeeds: n },
                        queueParams: { index: a },
                        loadContextMeta: !1,
                        entitiesData: t.map(eR.$),
                    }));
                return (0, y.jsx)(eU.$, {
                    className: eK().root,
                    shimmer: (0, y.jsx)(ez.D, { variant: eF.X.PLAYLIST, isActive: l }),
                    maxColumnsCount: eU.D.TWO,
                    itemsCountPerColumn: 4,
                    blockHeaderTitle: r({ id: 'track-modal.similar-tracks' }),
                    blockHeaderHeadingVariant: 'h2',
                    isShimmerVisible: i,
                    isShimmerActive: l,
                    carouselItemClassName: (0, eL.$)(eK().item, eK().important),
                    blockHeaderClassName: eK().title,
                    carouselClassName: eK().tracksContainer,
                    shouldResetCarouselScroll: s,
                    'data-test-id': q.Xk.track.TRACK_PAGE_SIMILAR_TRACKS,
                    children: t.map((e, t) => (0, y.jsx)(eD.K, { track: e, playContextParams: c(e, t), withDislike: !1, withTrailer: !1 }, e.id)),
                });
            });
            var eV = a(73395),
                eY = a(41677),
                eq = a(13798),
                eQ = a(39407),
                e$ = a(87863),
                eG = a(39400),
                eZ = a(17705),
                eX = a(71735),
                eJ = a(2969),
                e0 = a(46200),
                e1 = a(5537),
                e2 = a(90169),
                e4 = a(92744),
                e3 = a(90326),
                e6 = a(97404),
                e5 = a.n(e6);
            let e8 = (e) => {
                let { className: t, text: a, analyticsNavigatedCallback: i } = e,
                    {
                        settings: { isMobile: l },
                        paywall: n,
                    } = (0, N.g)(),
                    s = (0, b.c)((e) => {
                        (n.openModal(), e.stopPropagation(), null == i || i());
                    });
                return l
                    ? (0, y.jsx)(Q.$, {
                          onClick: s,
                          className: (0, eL.$)(e5().root, t),
                          color: 'plus',
                          size: 'l',
                          radius: 'xxxl',
                          children: (0, y.jsx)(er.HL, { className: e5().title, weight: 'bold', variant: 'div', size: 'l', children: a }),
                      })
                    : (0, y.jsx)(Q.$, {
                          onClick: s,
                          className: (0, eL.$)(e5().root, t),
                          color: 'plus',
                          size: 'm',
                          radius: 'xxxl',
                          'data-test-id': q.S7.PLUS_PAYWALL_BUTTON,
                          children: (0, y.jsx)(er.HL, { className: e5().title, weight: 'bold', variant: 'div', size: 'm', children: a }),
                      });
            };
            var e9 = a(17811),
                e7 = a(92146),
                te = a(74416),
                tt = a(79374),
                ta = a(48922),
                ti = a(62376),
                tl = a(70042),
                tn = a.n(tl);
            let ts = (0, h.PA)((e) => {
                var t, a, i;
                let { track: l } = e,
                    { shouldShowBuySubscriptionModal: n, showBuySubscriptionModal: s } = (0, e0.q)(),
                    { from: r, utmLink: o } = (0, eB.f)({ contextId: l.id, contextType: ew.K.Various }),
                    {
                        user: c,
                        settings: { isMobile: d },
                        track: { shouldSendEventOnPlusButtonShowed: u, setShouldSendEventOnPlusButtonShowed: _, isOpened: m },
                        albumCPA: { isPlusCPAPlayerBarEnabled: p },
                        paywall: { modal: v },
                    } = (0, N.g)(),
                    x = (0, eJ.b)(),
                    h = ((e) => {
                        let t = (0, te.st)(),
                            a = (0, ti.U)(),
                            { hash: i } = (0, te.gf)();
                        return (0, b.c)(() => {
                            if (!t) return;
                            let l = {
                                    hash: i,
                                    pageId: tt.W[ta._Q.TRACK_SCREEN],
                                    mainObjectType: C.DomainObjectType.Track,
                                    mainObjectId: e.objectId,
                                    entityId: 'buy_subscription_button',
                                    pageStyle: C.PageStyles.Sheet,
                                    pagePlacement: C.PagePlacements.Right,
                                    from: tt.W[ta._Q.TRACK_SCREEN],
                                    to: tt.W[ta._Q.PAYWALL],
                                    tabId: '',
                                    tabPos: 0,
                                },
                                n = (0, e9.F)({ params: l, logger: a, context: 'useSendEventOnTrackModalPlusButtonNavigated' });
                            n && (0, e7.QS)(t.evgenInstance, n);
                        });
                    })({ objectId: l.id }),
                    A = ((e) => {
                        let t = (0, te.st)(),
                            a = (0, ti.U)(),
                            { hash: i } = (0, te.gf)();
                        return (0, b.c)(() => {
                            if (!t) return;
                            let l = {
                                    hash: i,
                                    pageId: tt.W[ta._Q.TRACK_SCREEN],
                                    mainObjectType: C.DomainObjectType.Track,
                                    mainObjectId: e.objectId,
                                    entityId: 'buy_subscription_button',
                                    pageStyle: C.PageStyles.Sheet,
                                    pagePlacement: C.PagePlacements.Right,
                                    tabId: '',
                                    tabPos: 0,
                                },
                                n = (0, e9.F)({ params: l, logger: a, context: 'useSendEventOnTrackModalPlusButtonShowed' });
                            n && (0, e7.Pf)(t.evgenInstance, n);
                        });
                    })({ objectId: l.id }),
                    f = (0, eX.P)(),
                    j = !c.hasPlus && l.isTrackMusic && ((l.isAvailable && !l.hasModalAccess) || (null == (t = l.mainAlbum) ? void 0 : t.isAvailableOnlyForPlus)),
                    T = (0, e1.N)(),
                    S = p(null == (a = l.mainAlbum) ? void 0 : a.id, null == (i = l.mainAlbum) ? void 0 : i.isNonMusic),
                    I = l.isAvailable && T && !S,
                    { iconSize: k, controlSize: L } = (0, e$.q)(d),
                    [E, M] = (0, g.useState)(!1),
                    { isPlaying: P, togglePlay: O } = (0, e2.D)({
                        playContextParams: { contextData: { type: ew.K.Various, meta: { id: l.entityId }, from: r, utmLink: o }, loadContextMeta: !0 },
                        entityId: l.entityId,
                    }),
                    w = (0, G.w)({ track: l, callback: O }),
                    R = (0, b.c)(() => {
                        if (!f()) {
                            if (n && !S) return void s();
                            if (I) return void v.open();
                            (w(), x(!P));
                        }
                    }),
                    D = (0, eZ.K)(l),
                    B = (0, b.c)((e) => {
                        e.stopPropagation();
                    });
                (0, g.useEffect)(() => {
                    u && j && m && (A(), _(!1));
                }, [A, j, u, _, m]);
                let F = (0, g.useMemo)(() => {
                        if (j) return (0, y.jsx)(e8, { text: (0, y.jsx)(eQ.A, { id: 'payment.high-quality-offer-button-title' }), analyticsNavigatedCallback: h });
                    }, [j, h]),
                    U = j ? 'secondary' : 'primary';
                return (0, y.jsxs)('div', {
                    className: tn().root,
                    children: [
                        F,
                        (0, y.jsxs)('div', {
                            className: tn().controlsContainer,
                            children: [
                                (0, y.jsx)(e3.D, {
                                    className: (0, eL.$)({ [tn().disabledButtonByDisclaimer]: !l.isAvailable && l.hasModalAccess }),
                                    withRipple: l.isAvailable,
                                    buttonVariant: 'default',
                                    radius: 'xxxl',
                                    size: L,
                                    color: U,
                                    iconSize: k,
                                    isPlaying: P,
                                    onClick: R,
                                    disabled: !l.isAvailable && !l.hasModalAccess,
                                    children: !d && (0, y.jsx)(eQ.A, { id: 'player-actions.listen' }),
                                }),
                                (0, y.jsx)(e4.c, {
                                    isLiked: l.isLiked,
                                    onClick: D,
                                    variant: 'default',
                                    size: L,
                                    iconSize: k,
                                    withRipple: !d,
                                    disabled: !l.isAvailable || !c.isAuthorized,
                                }),
                                l.isAvailable &&
                                    (0, y.jsx)(eG._, {
                                        track: l,
                                        open: E,
                                        onOpenChange: M,
                                        size: L,
                                        icon: (0, y.jsx)($.I, { variant: 'more', size: k }),
                                        className: (0, eL.$)(tn().menuButton, { [tn().menuButton_active]: E }),
                                        wrapperClassName: tn().menuWrapper,
                                        onClick: B,
                                        withTrailer: !1,
                                        'data-test-id': q.e8.pageHeader.TRACK_HEADER_CONTEXT_MENU_BUTTON,
                                    }),
                            ],
                        }),
                    ],
                });
            });
            var tr = a(93372),
                to = a.n(tr),
                tc = a(26143),
                td = a.n(tc);
            let tu = (e) => {
                    let { isShimmerActive: t } = e;
                    return (0, y.jsxs)('div', {
                        className: td().root,
                        children: [
                            (0, y.jsx)(e_.W, { className: td().entityName, isActive: t }),
                            (0, y.jsx)(e_.W, { className: td().title, isActive: t }),
                            (0, y.jsx)(ej.q, {
                                className: (0, eL.$)(td().artists, td().important),
                                shimmerClassName: td().artist,
                                count: 3,
                                minWidth: 10,
                                maxWidth: 30,
                                isActive: t,
                            }),
                            (0, y.jsxs)('div', {
                                className: td().controls,
                                children: [
                                    (0, y.jsx)(e_.W, { className: td().playButton, isActive: t }),
                                    (0, y.jsx)(e_.W, { className: td().button, isActive: t }),
                                    (0, y.jsx)(e_.W, { className: td().button, isActive: t }),
                                    (0, y.jsx)(e_.W, { className: td().button, isActive: t }),
                                ],
                            }),
                        ],
                    });
                },
                t_ = (0, h.PA)((e) => {
                    let { track: t, isShimmerVisible: a, isShimmerActive: i, isTrackPage: l } = e,
                        { formatMessage: n } = (0, Y.A)(),
                        {
                            settings: { isMobile: s },
                        } = (0, N.g)(),
                        r = null == t ? void 0 : t.explicitDisclaimer,
                        o = (0, g.useMemo)(() => {
                            if (r)
                                return (0, y.jsx)(eq.N, {
                                    className: (0, eL.$)(to().explicitMark, to().important),
                                    getDescriptionTexts: t.getDescriptionTexts,
                                    size: 'xxs',
                                    variant: r,
                                });
                        }, [r, null == t ? void 0 : t.getDescriptionTexts]);
                    return a
                        ? (0, y.jsx)(tu, { isShimmerActive: i })
                        : t
                          ? (0, y.jsx)(eV.k, {
                                entityName: n({ id: 'entity-names.track-type' }, { type: (0, eo.y)(t.type) }),
                                entityNameIcon: o,
                                controls: (0, y.jsx)(ts, { track: t }),
                                meta: (0, y.jsx)(eY.i, {
                                    className: (0, eL.$)(to().text, to().important),
                                    linkClassName: to().link,
                                    captionClassName: to().artistCaption,
                                    artists: t.artists,
                                    variant: 'breakWord',
                                    separator: s ? '' : void 0,
                                }),
                                title: t.title,
                                version: t.version,
                                headingVariant: l ? 'h1' : 'div',
                                titleClassName: (0, eL.$)(to().title, to().important),
                                metaClassName: (0, eL.$)(to().meta, to().important),
                                contentClassName: (0, eL.$)(to().content, to().important),
                                withHeadingClamp: !1,
                                entityNameClassName: to().entityName,
                            })
                          : null;
                }),
                tm = (0, h.PA)(() => {
                    var e, t, a, i, l, n, s, r;
                    let { formatMessage: o } = (0, Y.A)(),
                        { notify: c } = (0, en.l)(),
                        {
                            user: d,
                            track: u,
                            albumCPA: { isPlusCPAPlayerBarEnabled: _ },
                        } = (0, N.g)(),
                        m = _(
                            null == (t = u.meta) || null == (e = t.mainAlbum) ? void 0 : e.id,
                            null == (i = u.meta) || null == (a = i.mainAlbum) ? void 0 : a.isNonMusic,
                        ),
                        p = u.similarTracks && u.similarTracks.length > 0 && (null == (l = u.meta) ? void 0 : l.isTrackMusic) && !m,
                        v = (0, b.c)(() => {
                            (u.setAnimationState(!0), u.close(), u.reset());
                        }),
                        x = (0, G.w)({ track: u.meta, disclaimerRejectHandler: v });
                    return (
                        (0, g.useEffect)(() => {
                            var e;
                            u.isOpened && (null == (e = u.meta) ? void 0 : e.isLegalRejected) && u.close();
                        }, [u, u.isOpened, null == (n = u.meta) ? void 0 : n.isLegalRejected]),
                        (0, g.useEffect)(() => {
                            x();
                        }, [x]),
                        u.isRejected && c((0, y.jsx)(es.h, { error: o({ id: 'error-messages.error-during-action' }) }), { containerId: el.u.ERROR }),
                        (0, y.jsxs)('div', {
                            'data-test-id': q.Xk.track.TRACK_PAGE,
                            children: [
                                (0, y.jsxs)('header', {
                                    className: V().header,
                                    children: [
                                        (0, y.jsx)(Q.$, {
                                            radius: 'round',
                                            color: 'secondary',
                                            size: 'xxs',
                                            icon: (0, y.jsx)($.I, { variant: 'close', size: 'xxs' }),
                                            className: V().closeButton,
                                            onClick: v,
                                            'aria-label': o({ id: 'interface-actions.close' }),
                                            'data-test-id': q.Xk.track.TRACK_PAGE_CLOSE_BUTTON,
                                        }),
                                        (0, y.jsx)(t_, { track: u.meta, isShimmerVisible: u.isShimmerVisible, isShimmerActive: u.isLoading, isTrackPage: u.isTrackPage }),
                                    ],
                                }),
                                (0, y.jsxs)('div', {
                                    className: V().content,
                                    'data-test-id': q.Xk.track.TRACK_PAGE_CONTENT,
                                    children: [
                                        (0, y.jsx)(ex, { onModalClose: v }),
                                        (null == (s = u.meta) ? void 0 : s.isLyricsAvailable) && (0, y.jsx)(eO, { track: u.meta }, u.meta.id),
                                        p &&
                                            u.similarTracks &&
                                            (0, y.jsx)(eH, {
                                                tracks: u.similarTracks,
                                                contextId: null == (r = u.meta) ? void 0 : r.entityId,
                                                isShimmerVisible: u.isShimmerVisible,
                                                isShimmerActive: u.isLoading,
                                                autoflowSeeds: u.seeds,
                                                shouldResetCarouselScroll: u.shouldReloadMeta,
                                            }),
                                    ],
                                }),
                                u.meta && (0, y.jsx)(ei, { user: d, track: u.meta }),
                            ],
                        })
                    );
                }),
                tp = (0, h.PA)(() => {
                    let { contentRef: e } = (0, j.g)(),
                        {
                            album: t,
                            track: a,
                            settings: { isMobile: i },
                            experiments: l,
                        } = (0, N.g)(),
                        n = l.checkExperiment(T.z.WebNextTrackModalCloseOnNavigate, 'on');
                    (a.trackId && a.albumId && a.isOpened && a.getData(),
                        (0, g.useEffect)(
                            () => () => {
                                a.reset();
                            },
                            [a],
                        ),
                        (0, g.useEffect)(() => {
                            a.isOpened && a.setAnimationState(!1);
                        }, [a]),
                        ((e, t) => {
                            (0, g.useEffect)(() => {
                                if (!e || !t || t.isLegalRejected) return;
                                let a = (0, S.f)(e);
                                K(
                                    ((e) =>
                                        e
                                            ? { id: e.id, artists: e.artists.map(k.N), durationMs: e.durationMs, title: e.title, type: e.type }
                                            : { id: 0, artists: [], durationMs: 0, title: '', type: I.S.TRACK })(t),
                                    a,
                                    { fullUrl: null, locale: null, url: null, tld: '', host: '' },
                                ).then((e) => {
                                    (0, L.j)(e);
                                });
                            }, [e, null == e ? void 0 : e.title, t, null == t ? void 0 : t.isLegalRejected, null == t ? void 0 : t.title]);
                        })(t.meta, a.meta));
                    let s = (0, b.c)((e) => {
                        var t;
                        null == (t = a.onOpenChange) || t.call(a, e);
                    });
                    return (0, y.jsx)(f.a, {
                        size: 'fitContent',
                        placement: i ? 'default' : 'right',
                        open: a.isOpened,
                        onOpenChange: s,
                        className: V().root,
                        contentClassName: V().modalContent,
                        portalNode: i ? null : e,
                        showHeader: !1,
                        withOverlay: n || i,
                        closeOnOutsidePress: n,
                        withAnimation: n || a.withAnimation,
                        isMobile: i,
                        lockScroll: i,
                        children: (0, y.jsx)(tm, {}),
                    });
                });
            var tv = a(52719),
                tx = a(3410),
                ty = a(8653),
                th = a.n(ty);
            let tC = (0, h.PA)(() => {
                    let { formatMessage: e } = (0, Y.A)(),
                        { notify: t } = (0, en.l)(),
                        { contentRef: a } = (0, j.g)(),
                        {
                            currentClipInfo: i,
                            settings: { isMobile: l, isWindowsApplication: n },
                            fullscreenVideoPlayer: s,
                        } = (0, N.g)(),
                        { modal: r, clip: o } = i;
                    (!o && i.isClipIdle && i.getClip(), !i.credits && i.isCreditsIdle && i.getCreditsInfo());
                    let c = null == o ? void 0 : o.title,
                        d = null == o ? void 0 : o.explicitDisclaimer,
                        u = (0, g.useMemo)(
                            () =>
                                i.isClipLoading || i.isClipRejected
                                    ? (0, y.jsx)(ej.q, { className: th().titleShimmer, count: 1 })
                                    : o
                                      ? (0, y.jsxs)('span', {
                                            children: [
                                                c,
                                                d &&
                                                    (0, y.jsx)(eq.N, {
                                                        getDescriptionTexts: o.getDescriptionTexts,
                                                        className: (0, eL.$)(th().explicitMark, th().important),
                                                        size: 'xxs',
                                                        variant: d,
                                                    }),
                                            ],
                                        })
                                      : void 0,
                            [o, c, d, i.isClipLoading, i.isClipRejected],
                        );
                    (0, g.useEffect)(
                        () => () => {
                            (r.close(), i.reset());
                        },
                        [i, r],
                    );
                    let _ = (0, g.useCallback)(() => {
                            (r.close(), i.reset());
                        }, [i, r]),
                        m = (0, g.useCallback)(
                            (e) => {
                                var t;
                                (e || i.reset(), null == (t = r.onOpenChange) || t.call(r, e));
                            },
                            [i, r],
                        );
                    i.isRejected && (_(), t((0, y.jsx)(es.h, { error: e({ id: 'error-messages.error-during-action' }) }), { containerId: el.u.ERROR }));
                    let p = (0, g.useMemo)(() => {
                        var e;
                        return i.isCreditsLoading || i.isCreditsRejected
                            ? (0, y.jsx)(ej.q, {})
                            : (null == (e = i.credits) ? void 0 : e.length)
                              ? i.credits.map((e) => {
                                    let t = (0, y.jsx)(tx.D, { children: e.value });
                                    return (0, y.jsx)(tv.O, { infoDescription: t, title: e.title }, e.title);
                                })
                              : null;
                    }, [i.credits, i.isCreditsLoading, i.isCreditsRejected]);
                    return (0, y.jsx)(f.a, {
                        'data-test-id': q.Kq.clip.CLIP_ABOUT_MODAL,
                        placement: l ? 'default' : 'right',
                        open: r.isOpened,
                        onClose: _,
                        contentClassName: th().modalContent,
                        title: u,
                        headerClassName: th().header,
                        className: (0, eL.$)(th().root, { [th().root_withFullscreen]: s.modal.isOpened, [th().root_withWindows]: n }),
                        onOpenChange: m,
                        labelClose: e({ id: 'interface-actions.close' }),
                        portalNode: l || s.modal.isOpened ? null : a,
                        children: (0, y.jsx)('div', { className: th().content, children: p }),
                    });
                }),
                tg = (0, h.PA)(() => {
                    let {
                        settings: { isMobile: e },
                    } = (0, N.g)();
                    return e ? null : (0, y.jsx)(tC, {});
                });
            var tA = a(32496),
                tb = a(6752);
            let tf = (0, h.PA)(() => {
                let { formatMessage: e } = (0, Y.A)(),
                    { currentTrackInfo: t } = (0, N.g)(),
                    { fullTrack: a } = t,
                    i = (0, tb.L)(() => {
                        var t, i, l;
                        if (!(null == a || null == (t = a.mainAlbum) ? void 0 : t.title)) return;
                        let n = (0, y.jsx)(tx.D, {
                            href: null == a || null == (i = a.mainAlbum) ? void 0 : i.url,
                            children: null == a || null == (l = a.mainAlbum) ? void 0 : l.title,
                        });
                        return (0, y.jsx)(tv.O, { title: e({ id: 'entity-names.audiobook' }), infoDescription: n });
                    }),
                    l = (0, tb.L)(() => {
                        if (!(null == a ? void 0 : a.shortDescription)) return;
                        let e = (0, y.jsx)(tx.D, { children: null == a ? void 0 : a.shortDescription });
                        return (0, y.jsx)(tv.O, { infoDescription: e });
                    });
                return (0, y.jsxs)(y.Fragment, { children: [l, i] });
            });
            var tj = a(56461),
                tN = a.n(tj);
            let tT = (0, h.PA)(() => {
                    let { formatMessage: e } = (0, Y.A)(),
                        { currentTrackInfo: t } = (0, N.g)(),
                        a = t.fullTrack,
                        i = (0, g.useMemo)(
                            () =>
                                t.fullDescription
                                    ? (0, y.jsx)('span', { className: tN().text, dangerouslySetInnerHTML: { __html: (0, Z.sanitizeDOM)(t.fullDescription) } })
                                    : null == a
                                      ? void 0
                                      : a.shortDescription,
                            [null == a ? void 0 : a.shortDescription, t.fullDescription],
                        ),
                        l = (0, tb.L)(() => {
                            if (!i) return;
                            let e = (0, y.jsx)(tx.D, { children: i });
                            return (0, y.jsx)(tv.O, { infoDescription: e });
                        }),
                        n = (0, tb.L)(() => {
                            var t, i, l;
                            if (!(null == a || null == (t = a.mainAlbum) ? void 0 : t.title)) return;
                            let n = (0, y.jsx)(tx.D, {
                                href: null == a || null == (i = a.mainAlbum) ? void 0 : i.url,
                                children: null == a || null == (l = a.mainAlbum) ? void 0 : l.title,
                            });
                            return (0, y.jsx)(tv.O, { title: e({ id: 'entity-names.podcast' }), infoDescription: n });
                        });
                    return (0, y.jsxs)(y.Fragment, { children: [l, n] });
                }),
                tS = (0, h.PA)(() => {
                    var e, t, a, i, l;
                    let { formatMessage: n } = (0, Y.A)(),
                        { notify: s } = (0, en.l)(),
                        { contentRef: r } = (0, j.g)(),
                        {
                            currentTrackInfo: o,
                            settings: { isMobile: c, isWindowsApplication: d, isLinuxApplication: u },
                            fullscreenPlayer: _,
                            experiments: m,
                        } = (0, N.g)(),
                        { modal: p } = o,
                        v = o.isUGC,
                        x = m.checkExperiment(T.z.WebEditorsFeatures, 'on');
                    (v && o.isTrackIdle && o.getTrackMeta(),
                        o.fullTrack || !o.isTrackIdle || v || o.getFullTrack(),
                        !o.credits && o.isCreditsIdle && o.getCreditsInfo(),
                        ((null == (e = o.fullTrack) ? void 0 : e.isTrackPodcast) || (null == (a = o.fullTrack) || null == (t = a.mainAlbum) ? void 0 : t.isPodcast)) &&
                            o.getFullDescription(),
                        (0, g.useEffect)(
                            () => () => {
                                (p.close(), o.reset());
                            },
                            [o, p],
                        ));
                    let h = (0, g.useCallback)(() => {
                            (p.close(), o.reset());
                        }, [o, p]),
                        C = (0, g.useCallback)(
                            (e) => {
                                var t;
                                (e || o.reset(), null == (t = p.onOpenChange) || t.call(p, e));
                            },
                            [o, p],
                        );
                    o.isRejected && (h(), s((0, y.jsx)(es.h, { error: n({ id: 'error-messages.error-during-action' }) }), { containerId: el.u.ERROR }));
                    let A = o.fullTrack,
                        b = null == A ? void 0 : A.explicitDisclaimer,
                        S = (0, g.useMemo)(() => {
                            var e;
                            if (A)
                                return (0, y.jsxs)('span', {
                                    children: [
                                        A.title,
                                        A.version && (0, y.jsx)('span', { className: tN().version, children: A.version }),
                                        b &&
                                            (0, y.jsx)(eq.N, {
                                                className: (0, eL.$)(tN().explicitMark, tN().important, { [tN().explicit]: !A.isTrackNonMusic }),
                                                getDescriptionTexts: null == (e = o.fullTrack) ? void 0 : e.getDescriptionTexts,
                                                size: 'xxs',
                                                variant: b,
                                            }),
                                    ],
                                });
                        }, [A, b, null == (i = o.fullTrack) ? void 0 : i.getDescriptionTexts]),
                        k = (0, g.useMemo)(() => {
                            var e;
                            return (null == A ? void 0 : A.type) === I.S.AUDIOBOOK
                                ? (0, y.jsx)(tf, {})
                                : (null == A ? void 0 : A.isTrackPodcast) || (null == A || null == (e = A.mainAlbum) ? void 0 : e.isPodcast)
                                  ? (0, y.jsx)(tT, {})
                                  : void 0;
                        }, [A]),
                        L = (0, g.useMemo)(() => {
                            var e;
                            return (null == (e = o.credits) ? void 0 : e.length)
                                ? o.credits.map((e) => {
                                      let { title: t, value: a } = e,
                                          i = (0, y.jsx)(tx.D, { children: a });
                                      return (0, y.jsx)(tv.O, { title: t, infoDescription: i }, t);
                                  })
                                : null;
                        }, [o.credits]),
                        E = (0, g.useMemo)(() => {
                            var e;
                            if ((null == (e = o.fullTrack) ? void 0 : e.major) && x) {
                                let e = o.fullTrack.major.name;
                                if (e) {
                                    let t = (0, y.jsx)(tx.D, { children: e });
                                    return (0, y.jsx)(tv.O, { title: 'Major', infoDescription: t }, e);
                                }
                            }
                            return null;
                        }, [null == (l = o.fullTrack) ? void 0 : l.major, x]);
                    return (0, y.jsx)(f.a, {
                        placement: c ? 'default' : 'right',
                        open: p.isOpened,
                        onClose: h,
                        contentClassName: tN().modalContent,
                        title: S,
                        headerClassName: tN().header,
                        className: (0, eL.$)(tN().root, { [tN().root_withFullscreen]: _.modal.isOpened, [tN().root_withCustomControls]: d || u }),
                        overlayClassName: tN().overlay,
                        onOpenChange: C,
                        labelClose: n({ id: 'interface-actions.close' }),
                        portalNode: c || _.modal.isOpened ? null : r,
                        'data-test-id': q.Xk.track.TRACK_ABOUT_MODAL,
                        closeButtonDataTestId: q.Xk.track.TRACK_ABOUT_MODAL_CLOSE_BUTTON,
                        children: (0, y.jsxs)('div', {
                            className: tN().content,
                            children: [
                                (o.isTrackLoading || o.isTrackRejected) && (0, y.jsx)(tA.n, { textClassName: tN().textShimmer }),
                                k,
                                (o.isCreditsLoading || o.isCreditsRejected) && (0, y.jsx)(tA.n, { textClassName: tN().textShimmer }),
                                L,
                                E,
                            ],
                        }),
                    });
                }),
                tI = (0, h.PA)(() => {
                    let {
                        settings: { isMobile: e },
                    } = (0, N.g)();
                    return e ? null : (0, y.jsx)(tS, {});
                });
            var tk = a(61945),
                tL = a(14257),
                tE = a(50),
                tM = a(98736),
                tP = a.n(tM);
            let tO = (0, h.PA)(() => {
                let e = (0, g.useRef)(null),
                    t = (0, g.useRef)(null),
                    { formatMessage: a } = (0, Y.A)(),
                    { language: i } = (0, tk.h)(),
                    { contentRef: l } = (0, j.g)(),
                    { theme: n } = (0, tE.W)(),
                    s = (0, J.N)().get(X.V4),
                    r = (0, et._)(s.feedbackForm.host),
                    {
                        trackComplaint: o,
                        settings: { isMobile: c },
                        fullscreenPlayer: d,
                        slam: u,
                    } = (0, N.g)(),
                    { modal: _, trackId: m } = o,
                    p = (0, g.useCallback)(() => {
                        null !== t.current && (window.clearTimeout(t.current), (t.current = null));
                    }, []),
                    v = (0, g.useCallback)(() => {
                        (p(),
                            (t.current = window.setTimeout(() => {
                                (_.isOpened || o.reset(), (t.current = null));
                            }, 300)));
                    }, [p, _, o]),
                    x = (0, g.useCallback)(() => {
                        (_.close(), v());
                    }, [_, v]),
                    h = (0, g.useCallback)(
                        (e) => {
                            (e ? p() : v(), _.onOpenChange(e));
                        },
                        [p, _, v],
                    );
                ((0, g.useEffect)(() => {
                    u.isOfflineModeEnabled && _.isOpened && x();
                }, [x, _.isOpened, u.isOfflineModeEnabled]),
                    (0, g.useEffect)(
                        () => () => {
                            (p(), _.close(), o.reset());
                        },
                        [p, _, o],
                    ),
                    (0, g.useEffect)(() => {
                        if (!_.isOpened) return;
                        let t = new URL(r).origin,
                            a = (a) => {
                                var i, l;
                                ((e) => {
                                    let { data: t, origin: a, source: i, expectedOrigin: l, expectedSource: n } = e;
                                    if (a !== l || null === n || i !== n || 'string' != typeof t) return !1;
                                    let s = (0, Z.parseJSONSafely)(t);
                                    return 'object' == typeof s && null !== s && 'COMPLAINT_RESULT' === s.postMessageType && 'close' === s.action;
                                })({
                                    data: a.data,
                                    origin: a.origin,
                                    source: a.source,
                                    expectedOrigin: t,
                                    expectedSource: null != (l = null == (i = e.current) ? void 0 : i.contentWindow) ? l : null,
                                }) && x();
                            };
                        return (
                            window.addEventListener('message', a),
                            () => {
                                window.removeEventListener('message', a);
                            }
                        );
                    }, [r, x, _.isOpened]));
                let C = (0, g.useMemo)(
                    () =>
                        m
                            ? ((e) => {
                                  let { contentId: t, host: a, lang: i, theme: l } = e,
                                      n = new URL('/complaint', a);
                                  return (n.searchParams.set('contentId', t), n.searchParams.set('theme', l), n.searchParams.set('lang', i), n.toString());
                              })({ contentId: m, host: r, lang: i, theme: n === tL.S.Light ? 'white' : 'black' })
                            : null,
                    [r, i, n, m],
                );
                return (0, y.jsx)(f.a, {
                    className: (0, eL.$)(tP().root, { [tP().root_mobile]: c }),
                    contentClassName: tP().content,
                    open: _.isOpened,
                    size: c ? 'fullscreen' : 'fitContent',
                    placement: 'center',
                    showHeader: !1,
                    isMobile: c,
                    onClose: x,
                    onOpenChange: h,
                    portalNode: c || d.modal.isOpened ? null : l,
                    restoreFocus: !1,
                    transitionDuration: 300,
                    children: C && (0, y.jsx)('iframe', { ref: e, className: tP().iframe, src: C, title: a({ id: 'interface-actions.report-problem' }) }),
                });
            });
            var tw = a(95910),
                tR = a.n(tw);
            let tD = (0, h.PA)(() => {
                var e;
                let { formatMessage: t } = (0, Y.A)(),
                    { notify: a } = (0, en.l)(),
                    { contentRef: i } = (0, j.g)(),
                    {
                        trackLyrics: l,
                        settings: { isMobile: n },
                        fullscreenPlayer: s,
                    } = (0, N.g)(),
                    { modal: r, track: o } = l,
                    c = null == o ? void 0 : o.explicitDisclaimer;
                ((0, g.useEffect)(() => {
                    o && o.isLyricsAvailable && l.modal.isOpened && l.getLyrics(o.id);
                }, [o, l, l.modal.isOpened]),
                    (0, g.useEffect)(() => {
                        r.isOpened && o && l.isResolved && l.sendViews({ trackId: o.id, albumId: o.albumId });
                    }, [o, l, l.isResolved, r.isOpened]));
                let d = (0, g.useCallback)(
                    (e) => {
                        var t;
                        null == (t = r.onOpenChange) || t.call(r, e);
                    },
                    [r],
                );
                l.isRejected && l.modal.isOpened && a((0, y.jsx)(es.h, { error: t({ id: 'error-messages.error-during-action' }) }), { containerId: el.u.ERROR });
                let u = (0, g.useMemo)(() => {
                    if (o)
                        return (0, y.jsxs)('span', {
                            'data-test-id': q.e8.content.TRACK_LYRICS_TITLE,
                            children: [
                                o.title,
                                o.version && (0, y.jsx)('span', { className: tR().version, children: o.version }),
                                c &&
                                    (0, y.jsx)(eq.N, {
                                        className: (0, eL.$)(tR().explicitMark, tR().important),
                                        getDescriptionTexts: o.getDescriptionTexts,
                                        size: 'xxs',
                                        variant: c,
                                    }),
                            ],
                        });
                }, [o, null == o ? void 0 : o.title, null == o ? void 0 : o.version, c]);
                return (0, y.jsx)(f.a, {
                    size: 'fitContent',
                    placement: n ? 'default' : 'right',
                    open: r.isOpened,
                    onOpenChange: d,
                    onClose: r.close,
                    className: tR().root,
                    contentClassName: tR().modalContent,
                    portalNode: n || s.modal.isOpened ? null : i,
                    title: u,
                    headerClassName: tR().header,
                    overlayClassName: tR().overlay,
                    labelClose: t({ id: 'interface-actions.close' }),
                    restoreFocus: !0,
                    'data-test-id': q.e8.content.TRACK_LYRICS_MODAL,
                    closeButtonDataTestId: q.e8.content.TRACK_LYRICS_CLOSE_BUTTON,
                    lockScroll: n,
                    children: (0, y.jsx)('div', {
                        className: tR().content,
                        'data-test-id': q.e8.content.TRACK_LYRICS_TEXT,
                        children: (0, y.jsx)(eS, {
                            lyrics: l.lyrics,
                            authors: l.writersNames,
                            source: null == (e = l.major) ? void 0 : e.prettyName,
                            isShimmerVisible: l.isShimmerVisible,
                            isShimmerActive: l.isLoading,
                        }),
                    }),
                });
            });
            var tB = a(54862),
                tF = a(50162),
                tU = a(74196),
                tz = a(71768),
                tW = a(27246),
                tK = a(24116),
                tH = a(98740),
                tV = a(28488),
                tY = a.n(tV),
                tq = a(57197),
                tQ = a(57234),
                t$ = a.n(tQ);
            let tG = () => {
                    let e = (0, tq.j)();
                    return (0, y.jsx)('div', {
                        className: t$().root,
                        'data-test-id': q.e8.crackdownModal.CRACKDOWN_MODAL_LOGO,
                        children: (0, y.jsx)($.I, { variant: 'yandexPlus'.concat(e), className: (0, eL.$)(t$().icon, t$()['icon_'.concat(e.toLocaleLowerCase())]) }),
                    });
                },
                tZ = (0, h.PA)((e) => {
                    let { hasError: t, children: a, ...i } = e,
                        {
                            settings: { isMobile: l },
                        } = (0, N.g)(),
                        { formatMessage: n } = (0, Y.A)();
                    return (0, y.jsxs)(f.a, {
                        size: 'fitContent',
                        placement: l ? 'default' : 'center',
                        labelClose: n({ id: 'interface-actions.close' }),
                        className: (0, eL.$)(tY().root, { [tY().root_mobile]: l, [tY().root_error]: t }),
                        headerClassName: tY().header,
                        contentClassName: tY().content,
                        ...i,
                        closeButtonDataTestId: q.e8.crackdownModal.CRACKDOWN_MODAL_CLOSE_BUTTON,
                        children: [!l && (0, y.jsx)(tG, {}), (0, y.jsx)('div', { className: tY().contentWrapper, children: a })],
                    });
                });
            var tX = a(99902),
                tJ = a(62230),
                t0 = a.n(tJ);
            let t1 = (e) => {
                    let { children: t, forwardRef: a, text: i, isMobile: l, showSpinner: n, size: s = 'm', className: r, ...o } = e;
                    return (0, y.jsx)(Q.$, {
                        className: (0, eL.$)(t0().button, { [t0().button_mobile]: l }, r),
                        isBlock: !0,
                        radius: 'xxxl',
                        size: s,
                        ref: a,
                        spinner: n ? (0, y.jsx)(tX.y, {}) : null,
                        ...o,
                        children: null != t ? t : (0, y.jsx)(er.HL, { className: t0().text, variant: 'div', size: 'm', children: i }),
                    });
                },
                t2 = (0, g.forwardRef)((e, t) => (0, y.jsx)(t1, { forwardRef: t, ...e })),
                t4 = (e) => {
                    let { isMobile: t, isActive: a, className: i } = e;
                    return (0, y.jsx)(e_.W, { className: (0, eL.$)(t0().shimmer, { [t0().shimmer_mobile]: t }, i), isActive: a, radius: 'xxxl' });
                };
            var t3 = a(21916),
                t6 = a(47435),
                t5 = a.n(t6);
            let t8 = (0, h.PA)(() => {
                    let {
                            modals: { crackdownModal: e },
                        } = (0, N.g)(),
                        t = (0, t3.useRouter)(),
                        a = (0, J.N)().get(X.QG),
                        i = (0, b.c)(() => {
                            (e.close(), a.authorizationUrl && t.push(a.authorizationUrl));
                        });
                    return (0, y.jsx)(Q.$, {
                        className: (0, eL.$)(t5().button, t5().important),
                        variant: 'default',
                        color: 'secondary',
                        isBlock: !0,
                        radius: 'xxxl',
                        size: 'xs',
                        onClick: i,
                        'data-test-id': q.e8.crackdownModal.CRACKDOWN_MODAL_ALREADY_IN_PLUS_BUTTON,
                        children: (0, y.jsx)(er.HL, {
                            className: t5().buttonMainText,
                            variant: 'span',
                            children: (0, y.jsx)(eQ.A, { id: 'buy-subscription.already-in-plus', values: { nbsp: '\xa0' } }),
                        }),
                    });
                }),
                t9 = 'crackdown-buy-subscription-button',
                t7 = (0, h.PA)((e) => {
                    let { withAlreadyInPlusButton: t } = e,
                        {
                            user: a,
                            modals: { crackdownModal: i },
                        } = (0, N.g)(),
                        [l, n] = (0, tB.d)(),
                        [s, r] = (0, g.useState)(i.isOpened),
                        {
                            mainText: o,
                            mainTextA11y: c,
                            additionText: d,
                            isShimmerVisible: u,
                            isShimmerActive: _,
                            openPaymentWidgetModal: m,
                            saveOfferAndAuthorize: p,
                        } = (0, tH.D)({ storeName: 'music', isEnabled: s, offerElement: { element: l, intersectionPropertyId: t9 } }),
                        v = (0, b.c)(() => {
                            if ((i.close(), !a.isAuthorized)) return void p();
                            m();
                        }),
                        x = (0, tb.L)(() =>
                            u
                                ? (0, y.jsx)(t4, { className: (0, eL.$)(t5().button, t5().important), isActive: _ })
                                : (0, y.jsxs)(t2, {
                                      className: (0, eL.$)(t5().button, t5().important),
                                      color: 'plus',
                                      size: 'xs',
                                      ref: n,
                                      'data-intersection-property-id': t9,
                                      onClick: v,
                                      'aria-label': c,
                                      'data-test-id': q.e8.crackdownModal.CRACKDOWN_MODAL_SUBSCRIPTION_BUTTON,
                                      children: [
                                          (0, y.jsx)(er.HL, { variant: 'div', className: t5().buttonMainText, children: o }),
                                          d && (0, y.jsx)(er.HL, { variant: 'div', size: 'm', weight: 'normal', children: d }),
                                      ],
                                  }),
                        );
                    return (
                        (0, g.useEffect)(() => {
                            setTimeout(() => {
                                r(!0);
                            }, 2500);
                        }, []),
                        (0, y.jsxs)(tZ, {
                            open: i.isOpened,
                            onClose: i.close,
                            'data-test-id': q.e8.crackdownModal.CRACKDOWN_MODAL,
                            children: [
                                (0, y.jsx)('div', {
                                    className: tY().growContainer,
                                    'data-test-id': q.e8.crackdownModal.CRACKDOWN_MODAL_PICTURE,
                                    children: (0, y.jsx)(tF._V, {
                                        src: 'https://avatars.mds.yandex.net/get-music-misc/70850/img.672491383c0f014022130e5b/orig',
                                        srcSet: 'https://avatars.mds.yandex.net/get-music-misc/2419084/img.6724913d3c0f014022130e5e/orig 2x',
                                    }),
                                }),
                                (0, y.jsxs)('div', {
                                    className: tY().text,
                                    'aria-hidden': !0,
                                    children: [
                                        (0, y.jsx)(er.DZ, {
                                            variant: 'h1',
                                            size: 'xl',
                                            className: tY().title,
                                            'data-test-id': q.e8.crackdownModal.CRACKDOWN_MODAL_TITLE_TEXT,
                                            children: (0, y.jsx)(eQ.A, { id: 'crackdown.title', values: { br: (0, y.jsx)('br', {}), nbsp: '\xa0' } }),
                                        }),
                                        (0, y.jsx)(er.HL, {
                                            variant: 'span',
                                            size: 'm',
                                            className: tY().description,
                                            'data-test-id': q.e8.crackdownModal.CRACKDOWN_MODAL_DESCRIPTION_TEXT,
                                            children: (0, y.jsx)(eQ.A, { id: 'crackdown.description', values: { br: (0, y.jsx)('br', {}), nbsp: '\xa0' } }),
                                        }),
                                    ],
                                }),
                                (0, y.jsxs)(tU.q, {
                                    children: [
                                        (0, y.jsx)(er.DZ, { variant: 'h1', children: (0, y.jsx)(eQ.A, { id: 'crackdown.title', values: { br: ' ', nbsp: '\xa0' } }) }),
                                        (0, y.jsx)(er.HL, {
                                            variant: 'div',
                                            children: (0, y.jsx)(eQ.A, { id: 'crackdown.description', values: { br: ' ', nbsp: '\xa0' } }),
                                        }),
                                    ],
                                }),
                                (0, y.jsxs)('div', { className: tY().buttons, children: [x, t && (0, y.jsx)(t8, {})] }),
                            ],
                        })
                    );
                });
            t7.displayName = 'CrackdownModalComponent';
            let ae = (e) => (0, y.jsx)(tz.r, { page: tW.l.CRACKDOWN_SCREEN, places: [tK.R.TOP_BUTTON], children: (0, y.jsx)(t7, { ...e }) });
            var at = a(61334),
                aa = a(32641),
                ai = a(75314),
                al = a(3466),
                an = a.n(al);
            let as = (0, h.PA)(() => {
                let { downloadMobileApp: e, user: t, settings: a } = (0, N.g)(),
                    { formatMessage: i } = (0, Y.A)(),
                    l = (0, at.q)({ browserInfo: a.browserInfo, login: t.account.data.login }),
                    n = (0, aa.Z)(l());
                return (0, y.jsxs)('div', {
                    className: (0, eL.$)(an().root, (0, ai.J)(tL.S.Dark)),
                    children: [
                        (0, y.jsx)(Q.$, {
                            className: an().closeButton,
                            radius: 'round',
                            size: 'xxs',
                            icon: (0, y.jsx)($.I, { variant: 'close', size: 'xxs' }),
                            'aria-label': i({ id: 'interface-actions.close' }),
                            onClick: e.modal.close,
                        }),
                        (0, y.jsxs)('div', {
                            className: an().text,
                            children: [
                                (0, y.jsx)(er.DZ, {
                                    variant: 'h1',
                                    size: 'xl',
                                    weight: 'bold',
                                    children: (0, y.jsx)(eQ.A, { id: 'download-mobile-app.title', values: { nbsp: '\xa0' } }),
                                }),
                                (0, y.jsx)(er.HL, {
                                    className: an().subtitle,
                                    variant: 'p',
                                    size: 'l',
                                    weight: 'bold',
                                    children: (0, y.jsx)(eQ.A, { id: 'download-mobile-app.subtitle', values: { nbsp: '\xa0' } }),
                                }),
                            ],
                        }),
                        (0, y.jsxs)('div', {
                            className: an().buttons,
                            children: [
                                (0, y.jsx)(Q.$, {
                                    role: 'link',
                                    className: an().button,
                                    color: 'primary',
                                    size: 'm',
                                    radius: 'xxxl',
                                    onClick: n,
                                    children: (0, y.jsx)(er.HL, {
                                        variant: 'span',
                                        size: 'm',
                                        weight: 'medium',
                                        children: (0, y.jsx)(eQ.A, { id: 'download-mobile-app.listen-in-app' }),
                                    }),
                                }),
                                (0, y.jsx)(Q.$, {
                                    className: (0, eL.$)(an().button, an().stayButton),
                                    variant: 'text',
                                    size: 'm',
                                    color: 'secondary',
                                    radius: 'xxxl',
                                    onClick: e.modal.close,
                                    children: (0, y.jsx)(er.HL, {
                                        variant: 'span',
                                        size: 'm',
                                        weight: 'medium',
                                        children: (0, y.jsx)(eQ.A, { id: 'download-mobile-app.stay' }),
                                    }),
                                }),
                            ],
                        }),
                    ],
                });
            });
            var ar = a(59976),
                ao = a.n(ar);
            let ac = (0, h.PA)(() => {
                let { downloadMobileApp: e } = (0, N.g)();
                return (0, y.jsx)(f.a, {
                    className: ao().root,
                    contentClassName: ao().content,
                    open: e.modal.isOpened,
                    size: 'fullscreen',
                    placement: 'center',
                    showHeader: !1,
                    closeOnOutsidePress: !1,
                    overlayColor: 'full',
                    onOpenChange: e.modal.onOpenChange,
                    onClose: e.modal.close,
                    children: (0, y.jsx)(as, {}),
                });
            });
            var ad = a(6074);
            let au = () => {
                let {
                    familyInvite: { modal: e, isSuccess: t, reset: a },
                } = (0, N.g)();
                return (0, g.useCallback)(() => {
                    if ((e.close(), t)) return void window.location.reload();
                    a();
                }, [e, t, a]);
            };
            var a_ = a(19158),
                am = a(44855),
                ap = a.n(am);
            let av = (0, h.PA)(() => {
                    let { formatMessage: e } = (0, Y.A)(),
                        {
                            settings: { isMobile: t },
                        } = (0, N.g)(),
                        a = au();
                    return (0, y.jsxs)(y.Fragment, {
                        children: [
                            (0, y.jsxs)('div', {
                                className: tY().text,
                                children: [
                                    (0, y.jsx)(er.DZ, {
                                        variant: 'h1',
                                        size: 'xl',
                                        className: tY().title,
                                        'data-test-id': q.e8.familyInvite.FAMILY_INVITE_MODAL_STEP_ERROR_TITLE,
                                        children: (0, y.jsx)(eQ.A, { id: 'family.invitation-error-title' }),
                                    }),
                                    (0, y.jsx)(er.HL, {
                                        variant: 'span',
                                        size: 'm',
                                        className: tY().description,
                                        'data-test-id': q.e8.familyInvite.FAMILY_INVITE_MODAL_STEP_ERROR_DESCRIPTION,
                                        children: (0, y.jsx)(eQ.A, { id: 'family.invitation-error-description' }),
                                    }),
                                ],
                            }),
                            (0, y.jsx)('div', {
                                className: tY().buttons,
                                children: (0, y.jsx)(t2, {
                                    color: 'primary',
                                    isMobile: t,
                                    text: e({ id: 'interface-actions.confirm' }),
                                    onClick: a,
                                    'data-test-id': q.e8.familyInvite.FAMILY_INVITE_MODAL_STEP_ERROR_INVITATION_ERROR_BUTTON_CONFIRM,
                                }),
                            }),
                        ],
                    });
                }),
                ax = (0, h.PA)(() => {
                    let { formatMessage: e } = (0, Y.A)(),
                        {
                            settings: { isMobile: t },
                            paywall: { modal: a },
                        } = (0, N.g)(),
                        i = au(),
                        l = (0, g.useCallback)(() => {
                            (i(), a.open());
                        }, [i, a]);
                    return (0, y.jsxs)(y.Fragment, {
                        children: [
                            (0, y.jsxs)('div', {
                                className: tY().text,
                                children: [
                                    (0, y.jsx)(er.DZ, {
                                        variant: 'h1',
                                        size: 'xl',
                                        className: tY().title,
                                        'data-test-id': q.e8.familyInvite.FAMILY_INVITE_MODAL_STEP_ERROR_TITLE,
                                        children: (0, y.jsx)(eQ.A, { id: 'family.subscription-error-title' }),
                                    }),
                                    (0, y.jsx)(er.HL, {
                                        variant: 'span',
                                        size: 'm',
                                        className: tY().description,
                                        'data-test-id': q.e8.familyInvite.FAMILY_INVITE_MODAL_STEP_ERROR_DESCRIPTION,
                                        children: (0, y.jsx)(eQ.A, { id: 'family.subscription-error-description' }),
                                    }),
                                ],
                            }),
                            (0, y.jsxs)('div', {
                                className: tY().buttons,
                                children: [
                                    (0, y.jsx)(t2, {
                                        color: 'primary',
                                        isMobile: t,
                                        text: e({ id: 'family.about1' }),
                                        onClick: l,
                                        'data-test-id': q.e8.familyInvite.FAMILY_INVITE_MODAL_STEP_ERROR_SUBSCRIPTION_ERROR_BUTTON_ABOUT,
                                    }),
                                    (0, y.jsx)(t2, {
                                        color: 'secondary',
                                        isMobile: t,
                                        text: (0, y.jsx)(eQ.A, { id: 'family.later' }),
                                        onClick: i,
                                        'data-test-id': q.e8.familyInvite.FAMILY_INVITE_MODAL_STEP_ERROR_SUBSCRIPTION_ERROR_BUTTON_LATER,
                                    }),
                                ],
                            }),
                        ],
                    });
                }),
                ay = (0, h.PA)(() => {
                    let { formatMessage: e } = (0, Y.A)(),
                        {
                            familyInvite: { retry: t },
                        } = (0, N.g)();
                    return (0, y.jsxs)(y.Fragment, {
                        children: [
                            (0, y.jsxs)('div', {
                                className: tY().text,
                                children: [
                                    (0, y.jsx)(er.DZ, {
                                        variant: 'h1',
                                        size: 'xl',
                                        className: tY().title,
                                        'data-test-id': q.e8.familyInvite.FAMILY_INVITE_MODAL_STEP_ERROR_TITLE,
                                        children: (0, y.jsx)(eQ.A, { id: 'family.unknown-error-title' }),
                                    }),
                                    (0, y.jsx)(er.HL, {
                                        variant: 'span',
                                        size: 'm',
                                        className: tY().description,
                                        'data-test-id': q.e8.familyInvite.FAMILY_INVITE_MODAL_STEP_ERROR_DESCRIPTION,
                                        children: (0, y.jsx)(eQ.A, { id: 'family.unknown-error-description' }),
                                    }),
                                ],
                            }),
                            (0, y.jsx)('div', {
                                className: tY().buttons,
                                children: (0, y.jsx)(t2, {
                                    color: 'primary',
                                    text: e({ id: 'family.retry' }),
                                    onClick: t,
                                    'data-test-id': q.e8.familyInvite.FAMILY_INVITE_MODAL_STEP_ERROR_UNKNOWN_ERROR_BUTTON_RETRY,
                                }),
                            }),
                        ],
                    });
                }),
                ah = { [a_.C.INVITATION_IS_INVALID]: (0, y.jsx)(av, {}), [a_.C.SUBSCRIPTION_IS_NOT_AVAILABLE]: (0, y.jsx)(ax, {}), [a_.C.UNKNOWN]: (0, y.jsx)(ay, {}) },
                aC = (0, h.PA)(() => {
                    let {
                            familyInvite: { error: e },
                            settings: { isMobile: t },
                        } = (0, N.g)(),
                        a = t || e === a_.C.SUBSCRIPTION_IS_NOT_AVAILABLE;
                    return (0, y.jsxs)(y.Fragment, {
                        children: [
                            (0, y.jsx)('div', {
                                className: (0, eL.$)(tY().growContainer, tY().growContainer_withoutPaddings),
                                children: (0, y.jsx)(tF._V, {
                                    className: (0, eL.$)(ap().image, { [ap().image_small]: a }),
                                    src: 'https://avatars.mds.yandex.net/get-music-misc/49997/img.6724b88e3c0f01402213116b/orig',
                                    srcSet: 'https://avatars.mds.yandex.net/get-music-misc/70850/img.6724b88c3c0f01402213116a/orig 2x',
                                    fit: 'contain',
                                    'aria-hidden': !0,
                                }),
                            }),
                            ah[null != e ? e : a_.C.UNKNOWN],
                        ],
                    });
                });
            var ag = a(61258),
                aA = a(79163),
                ab = a(23791),
                af = a.n(ab);
            let aj = (e) => {
                    let { avatarSrc: t, name: a, isMobile: i } = e;
                    return (0, y.jsxs)('div', {
                        className: (0, eL.$)(af().root, { [af().root_mobile]: i }),
                        children: [
                            (0, y.jsx)(aA.n, {
                                className: (0, eL.$)(af().icon, af().important),
                                avatarSrc: t,
                                hasPlus: !0,
                                'data-test-id': q.e8.familyInvite.FAMILY_INVITE_MODAL_STEP_INFO_INVITER_AVATAR,
                            }),
                            (0, y.jsx)(er.HL, {
                                className: af().name,
                                variant: 'div',
                                size: 'm',
                                'data-test-id': q.e8.familyInvite.FAMILY_INVITE_MODAL_STEP_INFO_INVITER_NAME,
                                children: a,
                            }),
                        ],
                    });
                },
                aN = (e) => {
                    let { isActive: t, isMobile: a } = e;
                    return (0, y.jsxs)('div', {
                        className: (0, eL.$)(af().root, { [af().root_mobile]: a }),
                        children: [
                            (0, y.jsx)(e_.W, { className: af().iconShimmer, isActive: t, radius: 'round' }),
                            (0, y.jsx)(e_.W, { className: af().nameShimmer, isActive: t, radius: 'xs' }),
                        ],
                    });
                };
            var aT = a(7448),
                aS = a.n(aT);
            let aI = (0, h.PA)(() => {
                let {
                        user: e,
                        location: t,
                        settings: { isMobile: a },
                        familyInvite: {
                            isInfoShimmerVisible: i,
                            isInfoShimmerActive: l,
                            isAcceptanceActive: n,
                            info: { data: s },
                            acceptInvite: r,
                        },
                    } = (0, N.g)(),
                    { name: o = '', avatarUrl: c = '' } = s || {},
                    d = (0, J.N)(),
                    u = (0, t3.useRouter)(),
                    _ = d.get(X.QG),
                    m = au(),
                    p = (0, g.useCallback)(() => {
                        if (!e.isAuthorized) {
                            _.authorizationUrl && u.push(_.authorizationUrl);
                            return;
                        }
                        r();
                    }, [_.authorizationUrl, u, e.isAuthorized, r]),
                    v = (0, g.useMemo)(
                        () => (i ? (0, y.jsx)(aN, { isActive: l, isMobile: a }) : (0, y.jsx)(aj, { avatarSrc: c, name: o, isMobile: a })),
                        [i, l, a, c, o],
                    ),
                    x = (0, g.useMemo)(
                        () =>
                            i
                                ? (0, y.jsx)(t4, { isActive: l, isMobile: a })
                                : (0, y.jsx)(t2, {
                                      color: 'plus',
                                      isMobile: a,
                                      text: (0, y.jsx)(eQ.A, { id: 'family.accept' }),
                                      onClick: p,
                                      showSpinner: n,
                                      'data-test-id': q.e8.familyInvite.FAMILY_INVITE_MODAL_STEP_INFO_BUTTON_ACCEPT,
                                  }),
                        [i, l, n, a, p],
                    );
                return (0, y.jsxs)(y.Fragment, {
                    children: [
                        (0, y.jsx)('div', { className: (0, eL.$)(tY().growContainer, aS().growContainer, aS().important), children: v }),
                        (0, y.jsxs)('div', {
                            className: tY().text,
                            children: [
                                (0, y.jsx)(er.DZ, {
                                    variant: 'h1',
                                    size: 'xl',
                                    className: tY().title,
                                    'data-test-id': q.e8.familyInvite.FAMILY_INVITE_MODAL_STEP_INFO_TITLE,
                                    children: (0, y.jsx)(eQ.A, { id: 'family.info-title', values: { br: '\n' } }),
                                }),
                                (0, y.jsx)(er.HL, {
                                    variant: 'span',
                                    size: 'm',
                                    className: tY().description,
                                    'data-test-id': q.e8.familyInvite.FAMILY_INVITE_MODAL_STEP_INFO_DESCRIPTION,
                                    children: (0, y.jsx)(eQ.A, { id: 'family.info-description', values: { br: '\n' } }),
                                }),
                                (0, y.jsx)(ag.N, {
                                    target: '_blank',
                                    href: 'https://yandex.'.concat(t.tld, '/legal/yandex_plus_conditions/'),
                                    icon: (0, y.jsx)($.I, { variant: 'arrowRight', size: 'xxxs', className: tY().linkArrow }),
                                    iconPosition: 'right',
                                    className: tY().link,
                                    containerClassName: tY().linkContainer,
                                    'data-test-id': q.e8.familyInvite.FAMILY_INVITE_MODAL_STEP_INFO_TERMS,
                                    children: (0, y.jsx)(er.HL, { type: 'controls', variant: 'span', size: 'm', children: (0, y.jsx)(eQ.A, { id: 'family.terms' }) }),
                                }),
                            ],
                        }),
                        (0, y.jsxs)('div', {
                            className: tY().buttons,
                            children: [
                                x,
                                (0, y.jsx)(t2, {
                                    color: 'secondary',
                                    isMobile: a,
                                    text: (0, y.jsx)(eQ.A, { id: 'family.reject' }),
                                    onClick: m,
                                    'data-test-id': q.e8.familyInvite.FAMILY_INVITE_MODAL_STEP_INFO_BUTTON_REJECT,
                                }),
                            ],
                        }),
                    ],
                });
            });
            var ak = a(27923),
                aL = a.n(ak);
            let aE = (0, h.PA)(() => {
                    let {
                            location: e,
                            settings: { isMobile: t },
                        } = (0, N.g)(),
                        a = au();
                    return (0, y.jsxs)(y.Fragment, {
                        children: [
                            (0, y.jsx)('div', {
                                className: tY().growContainer,
                                children: (0, y.jsx)(tF._V, {
                                    className: (0, eL.$)(aL().image, { [aL().image_mobile]: t }),
                                    src: 'https://avatars.mds.yandex.net/get-music-misc/2406661/img.6724a5445724776f278ec59d/orig',
                                    srcSet: 'https://avatars.mds.yandex.net/get-music-misc/2406661/img.6724a5445724776f278ec59d/orig 2x',
                                    fit: 'contain',
                                    'aria-hidden': !0,
                                }),
                            }),
                            (0, y.jsxs)('div', {
                                className: tY().text,
                                children: [
                                    (0, y.jsx)(er.DZ, {
                                        variant: 'h1',
                                        size: 'xl',
                                        className: tY().title,
                                        'data-test-id': q.e8.familyInvite.FAMILY_INVITE_MODAL_STEP_SUCCESS_TITLE,
                                        children: (0, y.jsx)(eQ.A, { id: 'family.success-title' }),
                                    }),
                                    (0, y.jsx)(er.HL, {
                                        variant: 'span',
                                        size: 'm',
                                        className: tY().description,
                                        'data-test-id': q.e8.familyInvite.FAMILY_INVITE_MODAL_STEP_SUCCESS_DESCRIPTION,
                                        children: (0, y.jsx)(eQ.A, { id: 'family.success-description', values: { br: '\n' } }),
                                    }),
                                    (0, y.jsx)(ag.N, {
                                        target: '_blank',
                                        href: 'https://plus.yandex.'.concat(e.tld, '/'),
                                        icon: (0, y.jsx)($.I, { variant: 'arrowRight', size: 'xxxs', className: tY().linkArrow }),
                                        iconPosition: 'right',
                                        className: tY().link,
                                        containerClassName: tY().linkContainer,
                                        'data-test-id': q.e8.familyInvite.FAMILY_INVITE_MODAL_STEP_SUCCESS_ABOUT,
                                        children: (0, y.jsx)(er.HL, { type: 'controls', variant: 'span', size: 'm', children: (0, y.jsx)(eQ.A, { id: 'family.about' }) }),
                                    }),
                                ],
                            }),
                            (0, y.jsx)('div', {
                                className: tY().buttons,
                                children: (0, y.jsx)(t2, {
                                    color: 'plus',
                                    isMobile: t,
                                    text: (0, y.jsx)(eQ.A, { id: 'family.go-to-music' }),
                                    onClick: a,
                                    'data-test-id': q.e8.familyInvite.FAMILY_INVITE_MODAL_STEP_SUCCESS_BUTTON_FINISH,
                                }),
                            }),
                        ],
                    });
                }),
                aM = { [ad._.INFO]: (0, y.jsx)(aI, {}), [ad._.SUCCESS]: (0, y.jsx)(aE, {}) },
                aP = (0, h.PA)(() => {
                    let {
                            familyInvite: { modal: e, step: t, hasError: a },
                        } = (0, N.g)(),
                        i = au(),
                        l = (0, g.useCallback)(
                            (t) => {
                                (t || i(), e.onOpenChange(t));
                            },
                            [i, e],
                        ),
                        n = (0, g.useMemo)(() => (a ? (0, y.jsx)(aC, {}) : aM[t]), [a, t]);
                    return (0, y.jsx)(tZ, {
                        open: e.isOpened,
                        hasError: a,
                        onOpenChange: l,
                        onClose: i,
                        'data-test-id': q.e8.familyInvite.FAMILY_INVITE_MODAL,
                        children: n,
                    });
                });
            var aO = a(44128),
                aw = a(84942),
                aR = a(65650),
                aD = (function (e) {
                    return ((e.RU = 'ru'), (e.BY = 'by'), (e.KZ = 'kz'), (e.UZ = 'uz'), (e.KG = 'kg'), (e.AZ = 'az'), (e.AM = 'am'), (e.GE = 'ge'), (e.TR = 'tr'), e);
                })({}),
                aB = (function (e) {
                    return ((e.RU = 'ru'), (e.BY = 'by'), (e.OTHER = 'other'), e);
                })({});
            let aF = { [aD.RU]: aB.RU, [aD.BY]: aB.BY };
            var aU = a(49175),
                az = a.n(aU),
                aW = a(98e3),
                aK = a.n(aW),
                aH = a(66086),
                aV = a.n(aH);
            let aY = (e) => {
                let { className: t, children: a, ...i } = e;
                return (0, y.jsxs)('section', {
                    className: (0, eL.$)(aV().root, t),
                    ...i,
                    children: [
                        (0, y.jsx)(er.DZ, {
                            className: aV().title,
                            variant: 'h2',
                            size: 'xxl',
                            children: (0, y.jsx)(eQ.A, { id: 'faq.title', values: { nbsp: '\xa0' } }),
                        }),
                        (0, y.jsx)('div', { className: aV().content, children: a }),
                    ],
                });
            };
            var aq = a(59449),
                aQ = a.n(aq);
            let a$ = (e) => {
                let { children: t } = e;
                return (0, y.jsx)(er.HL, { className: aQ().root, variant: 'span', size: 'l', weight: 'normal', children: t });
            };
            var aG = a(9612),
                aZ = a(3311),
                aX = a.n(aZ);
            let aJ = (e) => {
                let { className: t, isCollapsed: a } = e;
                return (0, y.jsx)('div', { className: (0, eL.$)(aX().root, { [aX().root_collapsed]: a }, t) });
            };
            var a0 = a(35623),
                a1 = a.n(a0);
            let a2 = {
                    exit: a1().answerContainer_exit,
                    exitActive: a1().answerContainer_exit_active,
                    enter: a1().answerContainer_enter,
                    enterActive: a1().answerContainer_enter_active,
                },
                a4 = (e) => {
                    let { question: t, answer: a, questionDataTestId: i, answerDataTestId: l } = e,
                        { state: n, toggle: s } = (0, ey.e)(!0),
                        r = (0, g.useRef)(null);
                    return (0, y.jsxs)('div', {
                        className: a1().root,
                        children: [
                            (0, y.jsxs)(Q.$, {
                                className: a1().questionContainer,
                                withRipple: !1,
                                withHover: !1,
                                variant: 'text',
                                onClick: s,
                                'aria-expanded': !n,
                                'data-test-id': i,
                                children: [t, (0, y.jsx)(aJ, { className: a1().questionCollapse, isCollapsed: n })],
                            }),
                            (0, y.jsx)(aG.A, {
                                nodeRef: r,
                                in: !n,
                                timeout: 300,
                                classNames: a2,
                                unmountOnExit: !0,
                                children: (0, y.jsx)('div', {
                                    className: a1().answerContainer,
                                    ref: r,
                                    'data-test-id': l,
                                    children: (0, y.jsx)('div', { className: a1().answer, children: a }),
                                }),
                            }),
                        ],
                    });
                };
            var a3 = a(53209),
                a6 = a.n(a3);
            let a5 = (e) => {
                    let { children: t } = e;
                    return (0, y.jsx)(er.HL, { className: a6().root, variant: 'span', size: 'm', children: t });
                },
                a8 = (e) => {
                    let { className: t, faqProps: a, variant: i } = e,
                        { location: l } = (0, N.g)(),
                        n = {
                            cancelUntilEndQuestion: (0, y.jsx)(eQ.A, { id: 'paywall.faq-question-cancel-until-end-other-countries', values: { nbsp: ' ' } }),
                            cancelUntilEndStep1Link: (0, y.jsx)(eQ.A, { id: 'paywall.faq-answer-cancel-until-end-step-1-link-other-countries' }),
                            cancelUntilEndStep2: (0, y.jsx)(eQ.A, { id: 'paywall.faq-answer-cancel-until-end-step-2-other-countries', values: { nbsp: ' ' } }),
                            afraidForgetCancel: (0, y.jsx)(eQ.A, { id: 'paywall.faq-question-afraid-forget-cancel-other-countries', values: { nbsp: ' ' } }),
                            whereElseSubscribe: (0, y.jsx)(eQ.A, { id: 'paywall.faq-question-where-else-subscribe-other-countries', values: { nbsp: ' ' } }),
                        };
                    i === aB.RU &&
                        ((n.cancelUntilEndQuestion = (0, y.jsx)(eQ.A, { id: 'paywall.faq-question-cancel-until-end', values: { nbsp: ' ' } })),
                        (n.cancelUntilEndStep1Link = (0, y.jsx)(eQ.A, { id: 'paywall.faq-answer-cancel-until-end-step-1-link' })),
                        (n.cancelUntilEndStep2 = (0, y.jsx)(eQ.A, { id: 'paywall.faq-answer-cancel-until-end-step-2', values: { nbsp: ' ' } })),
                        (n.afraidForgetCancel = (0, y.jsx)(eQ.A, { id: 'paywall.faq-question-afraid-forget-cancel', values: { nbsp: ' ' } })),
                        (n.whereElseSubscribe = (0, y.jsx)(eQ.A, { id: 'paywall.faq-question-where-else-subscribe', values: { nbsp: ' ' } })));
                    let s = {
                        nbsp: '\xa0',
                        steps: (0, y.jsxs)('ul', {
                            className: aQ().list,
                            children: [
                                (0, y.jsx)('li', {
                                    className: aQ().listITem,
                                    children: (0, y.jsx)(eQ.A, {
                                        id: 'paywall.faq-answer-cancel-until-end-step-1',
                                        values: {
                                            link: (0, y.jsx)(ag.N, {
                                                className: aQ().link,
                                                href: 'http://plus.yandex.'.concat(l.tld, '/my'),
                                                target: '_blank',
                                                children: n.cancelUntilEndStep1Link,
                                            }),
                                        },
                                    }),
                                }),
                                (0, y.jsx)('li', { className: aQ().listITem, children: n.cancelUntilEndStep2 }),
                            ],
                        }),
                    };
                    return (0, y.jsxs)(aY, {
                        className: t,
                        ...a,
                        'data-test-id': q.e8.paywall.PAYWALL_FAQ_SECTION,
                        children: [
                            (0, y.jsx)(a4, {
                                question: (0, y.jsx)(a5, { children: (0, y.jsx)(eQ.A, { id: 'paywall.faq-question-without-card-binding' }) }),
                                answer: (0, y.jsx)(a$, { children: (0, y.jsx)(eQ.A, { id: 'paywall.faq-answer-without-card-binding', values: { nbsp: '\xa0' } }) }),
                                questionDataTestId: q.e8.paywall.PAYWALL_FAQ_ITEM_DEMO_PERIOD_QUESTION,
                                answerDataTestId: q.e8.paywall.PAYWALL_FAQ_ITEM_DEMO_PERIOD_ANSWER,
                            }),
                            (0, y.jsx)(a4, {
                                question: (0, y.jsx)(a5, { children: n.afraidForgetCancel }),
                                answer: (0, y.jsx)(a$, { children: (0, y.jsx)(eQ.A, { id: 'paywall.faq-answer-afraid-forget-cancel', values: { nbsp: '\xa0' } }) }),
                                questionDataTestId: q.e8.paywall.PAYWALL_FAQ_ITEM_FORGET_CANCEL_SUB_QUESTION,
                                answerDataTestId: q.e8.paywall.PAYWALL_FAQ_ITEM_FORGET_CANCEL_SUB_ANSWER,
                            }),
                            (0, y.jsx)(a4, {
                                question: (0, y.jsx)(a5, { children: n.cancelUntilEndQuestion }),
                                answer: (0, y.jsx)(a$, {
                                    children:
                                        i === aB.RU
                                            ? (0, y.jsx)(eQ.A, { id: 'paywall.faq-answer-cancel-until-end', values: s })
                                            : (0, y.jsx)(eQ.A, { id: 'paywall.faq-answer-cancel-until-end-other-countries', values: s }),
                                }),
                                questionDataTestId: q.e8.paywall.PAYWALL_FAQ_ITEM_CAN_CANCEL_SUB_QUESTION,
                                answerDataTestId: q.e8.paywall.PAYWALL_FAQ_ITEM_CAN_CANCEL_SUB_ANSWER,
                            }),
                            !1,
                        ],
                    });
                };
            var a9 = a(8626),
                a7 = a(18076),
                ie = a.n(a7);
            let it = (0, h.PA)((e) => {
                    let { links: t, ageRestriction: a } = e,
                        { location: i } = (0, N.g)(),
                        { language: l } = (0, tk.h)(),
                        { formatDate: n } = (0, Y.A)();
                    return (0, y.jsxs)('footer', {
                        className: ie().root,
                        'data-test-id': q.e8.paywall.PAYWALL_FOOTER,
                        children: [
                            (0, y.jsx)('ul', {
                                className: (0, eL.$)(ie().list, ie().list_primary),
                                children: t.map((e, t) => {
                                    let { href: a, text: i, testId: l } = e;
                                    return (0, y.jsx)(
                                        'li',
                                        {
                                            className: ie().item,
                                            'data-test-id': l,
                                            children: (0, y.jsx)(ag.N, {
                                                className: (0, eL.$)(ie().link, ie().important),
                                                href: a,
                                                children: (0, y.jsx)(er.HL, { type: 'controls', variant: 'span', size: 'l', weight: 'medium', children: i }),
                                            }),
                                        },
                                        t,
                                    );
                                }),
                            }),
                            (0, y.jsxs)('ul', {
                                className: (0, eL.$)(ie().list, ie().list_secondary),
                                children: [
                                    (0, y.jsx)('li', {
                                        className: ie().item,
                                        'data-test-id': q.e8.paywall.PAYWALL_FOOTER_ITEM_YANDEX_LINK,
                                        children: (0, y.jsx)(ag.N, {
                                            className: (0, eL.$)(ie().link, ie().important),
                                            target: '_blank',
                                            href: 'https://ya.'.concat(i.tld),
                                            children: (0, y.jsxs)(er.HL, {
                                                type: 'controls',
                                                variant: 'span',
                                                size: 'l',
                                                weight: 'medium',
                                                children: ['\xa9', ' 2018–', n(new Date(), (0, a9.m)()), '\xa0', (0, y.jsx)(eQ.A, { id: 'footer.yandex-music' })],
                                            }),
                                        }),
                                    }),
                                    (0, y.jsxs)('li', {
                                        className: ie().item,
                                        'data-test-id': q.e8.paywall.PAYWALL_FOOTER_ITEM_ALL_PROJECTS_LINK,
                                        children: [
                                            (0, y.jsx)(ag.N, {
                                                className: (0, eL.$)(ie().link, ie().important),
                                                target: '_blank',
                                                href: 'https://yandex.'.concat(i.tld, '/all?lang=').concat(l),
                                                children: (0, y.jsx)(er.HL, {
                                                    type: 'controls',
                                                    variant: 'span',
                                                    size: 'l',
                                                    weight: 'medium',
                                                    children: (0, y.jsx)(eQ.A, { id: 'footer.yandex-project' }),
                                                }),
                                            }),
                                            (0, y.jsx)(er.HL, {
                                                className: (0, eL.$)(ie().item, ie().ageRestriction),
                                                type: 'controls',
                                                variant: 'span',
                                                size: 'l',
                                                weight: 'medium',
                                                children: a,
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                        ],
                    });
                }),
                ia = (0, h.PA)((e) => {
                    let { variant: t } = e,
                        { location: a } = (0, N.g)(),
                        i =
                            t === aB.RU
                                ? (0, y.jsx)(eQ.A, { id: 'paywall-footer.subscription-terms-link' })
                                : (0, y.jsx)(eQ.A, { id: 'paywall-footer.subscription-terms-link-other-countries' });
                    return (0, y.jsx)(it, {
                        ageRestriction: '0+',
                        links: [
                            { href: 'https://yandex.'.concat(a.tld, '/legal/yandex_plus_conditions/'), text: i, testId: q.e8.paywall.PAYWALL_FOOTER_ITEM_CONDITIONS_SUB },
                            {
                                href: 'https://yandex.'.concat(a.tld, '/legal/yandex_plus_privilege_list'),
                                text: (0, y.jsx)(eQ.A, { id: 'paywall-footer.privileges-terms-link' }),
                                testId: q.e8.paywall.PAYWALL_FOOTER_ITEM_CONDITIONS_PRIVILEGE,
                            },
                            {
                                href: 'https://yandex.'.concat(a.tld, '/legal/plus_loyalty/'),
                                text: (0, y.jsx)(eQ.A, { id: 'paywall-footer.cashback-terms-link' }),
                                testId: q.e8.paywall.PAYWALL_FOOTER_ITEM_CONDITIONS_CASHBACK,
                            },
                            {
                                href: 'https://yandex.'.concat(a.tld, '/legal/plus_generalrules/'),
                                text: (0, y.jsx)(eQ.A, { id: 'paywall-footer.promotion-terms-link' }),
                                testId: q.e8.paywall.PAYWALL_FOOTER_ITEM_CONDITIONS_PROMO,
                            },
                            {
                                href: 'https://yandex.'.concat(a.tld, '/support/plus'),
                                text: (0, y.jsx)(eQ.A, { id: 'paywall-footer.support-link' }),
                                testId: q.e8.paywall.PAYWALL_FOOTER_ITEM_SUPPORT,
                            },
                        ],
                    });
                });
            var ii = a(47976),
                il = a.n(ii);
            let is = (e) => {
                let { variant: t = 'horizontal', className: a, text: i, imageAlign: l = 'center', imageSrc: n, image2xSrc: s, ...r } = e;
                return (0, y.jsxs)('div', {
                    className: (0, eL.$)(il().root, il()['root_'.concat(t)], a),
                    ...(0, Z.getDataAttrFromProps)(r),
                    children: [
                        (0, y.jsx)('div', {
                            className: il().textContainer,
                            children: (0, y.jsx)(er.DZ, { variant: 'h3', size: 'xl', className: il().text, children: i }),
                        }),
                        (0, y.jsx)('div', {
                            className: (0, eL.$)(il().imageContainer, il()['imageContainer_align_'.concat(l)]),
                            children: (0, y.jsx)(tF._V, {
                                className: il().image,
                                src: n,
                                srcSet: s ? ''.concat(s, ' 2x') : void 0,
                                fit: 'horizontal' === t ? 'cover' : 'none',
                                'aria-hidden': !0,
                            }),
                        }),
                    ],
                });
            };
            var ir = a(3991),
                io = a.n(ir);
            let ic = (e) => {
                let { id: t, className: a, contentClassName: i, heading: l, content: n, ...s } = e;
                return (0, y.jsxs)('section', {
                    className: (0, eL.$)(io().root, a),
                    id: t,
                    ...(0, Z.getDataAttrFromProps)(s),
                    children: [
                        (0, y.jsx)('div', { className: io().headingContainer, children: l }),
                        (0, y.jsx)('div', { className: (0, eL.$)(io().contentContainer, i), children: n }),
                    ],
                });
            };
            var id = a(64347),
                iu = a.n(id);
            let i_ = {
                    [aB.RU]: 'https://avatars.mds.yandex.net/get-music-misc/69699/img.66743ac814d05542b9b518b4/orig',
                    [aB.BY]: 'https://avatars.mds.yandex.net/get-music-misc/69699/img.66b2317aaf6bde7f5d486c61/orig',
                },
                im = {
                    [aB.RU]: 'https://avatars.mds.yandex.net/get-music-misc/30221/img.66743aea14d05542b9b518b6/orig',
                    [aB.BY]: 'https://avatars.mds.yandex.net/get-music-misc/49997/img.66b2317caf6bde7f5d486c62/orig',
                },
                ip = (e) => {
                    let { className: t, variant: a = aB.RU } = e,
                        i = (0, tq.j)();
                    return (0, y.jsx)(ic, {
                        className: t,
                        contentClassName: iu()['content_'.concat(a)],
                        heading: (0, y.jsxs)(y.Fragment, {
                            children: [
                                (0, y.jsx)($.I, { variant: 'kinopoisk'.concat(i), className: iu()['logo_'.concat(i.toLocaleLowerCase())] }),
                                (0, y.jsx)(tU.q, { children: (0, y.jsx)(er.DZ, { variant: 'h2', children: (0, y.jsx)(eQ.A, { id: 'paywall.kinopoisk-part-title' }) }) }),
                            ],
                        }),
                        content: (0, y.jsxs)(y.Fragment, {
                            children: [
                                (0, y.jsx)(is, {
                                    className: iu().card1,
                                    variant: 'vertical',
                                    text: (0, y.jsx)(eQ.A, { id: 'paywall.kinopoisk-part-benefit-movies', values: { br: '\n', nbsp: '\xa0' } }),
                                    imageSrc: i_[a],
                                    image2xSrc: im[a],
                                    'data-test-id': q.e8.paywall.PAYWALL_SECTION_CARD_CHOOSE_FILM,
                                }),
                                (0, y.jsx)(is, {
                                    className: iu().card2,
                                    text: (0, y.jsx)(eQ.A, { id: 'paywall.kinopoisk-part-benefit-exclusive', values: { br: '\n', nbsp: '\xa0' } }),
                                    imageSrc: 'https://avatars.mds.yandex.net/get-music-misc/70850/img.66743b78de307e536b5852ba/orig',
                                    image2xSrc: 'https://avatars.mds.yandex.net/get-music-misc/49997/img.66743b96de307e536b5852bc/orig',
                                    'data-test-id': q.e8.paywall.PAYWALL_SECTION_CARD_WATCH_EXCLUSIVES,
                                }),
                                a === aB.RU &&
                                    (0, y.jsx)(is, {
                                        className: iu().card3,
                                        text: (0, y.jsx)(eQ.A, { id: 'paywall.kinopoisk-part-benefit-sport', values: { br: '\n', nbsp: '\xa0' } }),
                                        imageSrc: 'https://avatars.mds.yandex.net/get-music-misc/2413828/img.66743e3514d05542b9b518ff/orig',
                                        image2xSrc: 'https://avatars.mds.yandex.net/get-music-misc/34161/img.66743e5514d05542b9b51902/orig',
                                        'data-test-id': q.e8.paywall.PAYWALL_SECTION_CARD_WATCH_SPORT,
                                    }),
                                (0, y.jsx)(is, {
                                    className: iu().card4,
                                    variant: 'vertical',
                                    text: (0, y.jsx)(eQ.A, { id: 'paywall.kinopoisk-part-benefit-channels', values: { br: '\n', nbsp: '\xa0' } }),
                                    imageAlign: 'right',
                                    imageSrc: 'https://avatars.mds.yandex.net/get-music-misc/2419084/img.66743c3c14d05542b9b518f8/orig',
                                    image2xSrc: 'https://avatars.mds.yandex.net/get-music-misc/70683/img.66743c5514d05542b9b518fa/orig',
                                    'data-test-id': q.e8.paywall.PAYWALL_SECTION_CARD_MANY_CHANNELS,
                                }),
                            ],
                        }),
                        'data-test-id': q.e8.paywall.PAYWALL_KINOPOISK_SECTION,
                    });
                };
            var iv = a(63887),
                ix = a(66872),
                iy = a.n(ix);
            let ih = 'content-anchor',
                iC = (e) => {
                    let { className: t, shouldShowLabel: a = !0, anchorId: i = ih, children: l } = e;
                    return (0, y.jsxs)(iv.N, {
                        className: (0, eL.$)(iy().root, t),
                        href: '#'.concat(i),
                        role: 'button',
                        children: [
                            (0, y.jsx)('div', { className: iy().content, children: l }),
                            a && (0, y.jsx)(er.HL, { variant: 'span', children: (0, y.jsx)(eQ.A, { id: 'paywall.more-info', values: { nbsp: '\xa0' } }) }),
                            (0, y.jsx)($.I, { variant: 'arrowDown', size: 'xs' }),
                        ],
                    });
                };
            var ig = a(52311),
                iA = a.n(ig);
            let ib = (e) => {
                let { className: t, variant: a = aB.RU } = e,
                    i = (0, tq.j)(),
                    l = (0, g.useMemo)(
                        () =>
                            a === aB.RU
                                ? (0, y.jsx)(eQ.A, { id: 'paywall.music-part-benefit-books', values: { br: '\n', nbsp: '\xa0' } })
                                : (0, y.jsx)(eQ.A, { id: 'paywall.music-part-benefit-books-alternative', values: { br: '\n', nbsp: '\xa0' } }),
                        [a],
                    );
                return (0, y.jsx)(ic, {
                    id: ih,
                    className: t,
                    contentClassName: iA().content,
                    heading: (0, y.jsxs)(y.Fragment, {
                        children: [
                            (0, y.jsx)($.I, { variant: 'musicLogoCenter'.concat(i), className: iA()['logo_'.concat(i.toLocaleLowerCase())] }),
                            (0, y.jsx)(tU.q, {
                                children: (0, y.jsx)(er.DZ, { variant: 'h2', children: (0, y.jsx)(eQ.A, { id: 'paywall.music-part-title', values: { nbsp: '\xa0' } }) }),
                            }),
                        ],
                    }),
                    content: (0, y.jsxs)(y.Fragment, {
                        children: [
                            (0, y.jsx)(is, {
                                className: iA().card,
                                variant: 'vertical',
                                text: (0, y.jsx)(eQ.A, { id: 'paywall.music-part-benefit-recommendations', values: { br: '\n', nbsp: '\xa0' } }),
                                imageSrc: 'https://avatars.mds.yandex.net/get-music-misc/2413828/img.6672d19b5a94b319a48169ce/orig',
                                image2xSrc: 'https://avatars.mds.yandex.net/get-music-misc/34161/img.6672b094f164645e9c012622/orig',
                                'data-test-id': q.e8.paywall.PAYWALL_SECTION_CARD_FIND_INTERESTING,
                            }),
                            (0, y.jsx)(is, {
                                className: iA().card,
                                text: (0, y.jsx)(eQ.A, { id: 'paywall.music-part-benefit-many-devices', values: { br: '\n', nbsp: '\xa0' } }),
                                imageSrc: 'https://avatars.mds.yandex.net/get-music-misc/30221/img.6672d53cef7546320ecbe015/orig',
                                image2xSrc: 'https://avatars.mds.yandex.net/get-music-misc/69699/img.6672d45cff447523654b51a4/orig',
                                'data-test-id': q.e8.paywall.PAYWALL_SECTION_CARD_SMART_RECOMENDATIONS,
                            }),
                            (0, y.jsx)(is, {
                                className: iA().card,
                                text: (0, y.jsx)(eQ.A, { id: 'paywall.music-part-benefit-without-internet', values: { br: '\n', nbsp: '\xa0' } }),
                                imageSrc: 'https://avatars.mds.yandex.net/get-music-misc/69699/img.6703f9237733220b25bd3744/orig',
                                image2xSrc: 'https://avatars.mds.yandex.net/get-music-misc/2406661/img.6703f91a37dd1d4ade86c11a/orig',
                                'data-test-id': q.e8.paywall.PAYWALL_SECTION_CARD_LISTEN_WITHOUT_INTERNET,
                            }),
                            (0, y.jsx)(is, {
                                className: iA().card,
                                text: (0, y.jsx)(eQ.A, { id: 'paywall.music-part-benefit-playlists', values: { br: '\n', nbsp: '\xa0' } }),
                                imageSrc: 'https://avatars.mds.yandex.net/get-music-misc/2413828/img.66740bd5ff447523654b56e3/orig',
                                image2xSrc: 'https://avatars.mds.yandex.net/get-music-misc/2413828/img.66740bb7ff447523654b56b7/orig',
                                'data-test-id': q.e8.paywall.PAYWALL_SECTION_CARD_MAKE_COLLECTIONS,
                            }),
                            (0, y.jsx)(is, {
                                className: iA().card,
                                variant: 'vertical',
                                text: l,
                                imageSrc: 'https://avatars.mds.yandex.net/get-music-misc/34161/img.6674522214d05542b9b51983/orig',
                                image2xSrc: 'https://avatars.mds.yandex.net/get-music-misc/70850/img.6674527a14d05542b9b51985/orig',
                                'data-test-id': q.e8.paywall.PAYWALL_SECTION_CARD_LISTEN_AUDIOBOKS,
                            }),
                        ],
                    }),
                    'data-test-id': q.e8.paywall.PAYWALL_MUSIC_SECTION,
                });
            };
            var ij = a(9316),
                iN = a.n(ij);
            let iT = (e) => {
                let { className: t, variant: a = aB.RU } = e,
                    i = (0, tq.j)();
                return (0, y.jsx)(ic, {
                    className: t,
                    contentClassName: iN()['content_'.concat(a)],
                    heading: (0, y.jsxs)(y.Fragment, {
                        children: [
                            (0, y.jsx)($.I, { variant: 'yandexPlus'.concat(i), className: iN()['logo_'.concat(i.toLocaleLowerCase())] }),
                            (0, y.jsx)(tU.q, {
                                children: (0, y.jsx)(er.DZ, { variant: 'h2', children: (0, y.jsx)(eQ.A, { id: 'paywall.plus-part-title', values: { nbsp: '\xa0' } }) }),
                            }),
                        ],
                    }),
                    content: (0, y.jsxs)(y.Fragment, {
                        children: [
                            (0, y.jsx)(is, {
                                className: iN().card,
                                text: (0, y.jsx)(eQ.A, { id: 'paywall.plus-part-benefit-family', values: { br: '\n', nbsp: '\xa0' } }),
                                imageSrc: 'https://avatars.mds.yandex.net/get-music-misc/28052/img.66756428fda47e2147b8b478/orig',
                                image2xSrc: 'https://avatars.mds.yandex.net/get-music-misc/28592/img.66756449fda47e2147b8b47a/orig',
                                'data-test-id': q.e8.paywall.PAYWALL_SECTION_CARD_ADD_CLOSES,
                            }),
                            (0, y.jsx)(is, {
                                className: iN().card,
                                variant: 'vertical',
                                text: (0, y.jsx)(eQ.A, { id: 'paywall.plus-part-benefit-devices', values: { br: '\n' } }),
                                imageAlign: 'right',
                                imageSrc: 'https://avatars.mds.yandex.net/get-music-misc/30221/img.66f29c21b8a7ae33ed006e72/orig',
                                image2xSrc: 'https://avatars.mds.yandex.net/get-music-misc/29541/img.66f292cc89f5b04b855a8040/orig',
                                'data-test-id': q.e8.paywall.PAYWALL_SECTION_CARD_ADD_CLOSES,
                            }),
                            a === aB.RU &&
                                (0, y.jsxs)(y.Fragment, {
                                    children: [
                                        (0, y.jsx)(is, {
                                            className: iN().card,
                                            variant: 'vertical',
                                            text: (0, y.jsx)(eQ.A, { id: 'paywall.plus-part-spend-points', values: { br: '\n', nbsp: '\xa0' } }),
                                            imageAlign: 'right',
                                            imageSrc: 'https://avatars.mds.yandex.net/get-music-misc/28592/img.68eebcc48f03fb5a1cf861dd/orig',
                                            image2xSrc: 'https://avatars.mds.yandex.net/get-music-misc/28592/img.68eebcd66fc33b70f1711a33/orig',
                                            'data-test-id': q.e8.paywall.PAYWALL_SECTION_CARD_SPEND_POINTS,
                                        }),
                                        (0, y.jsx)(is, {
                                            className: iN().card,
                                            text: (0, y.jsx)(eQ.A, { id: 'paywall.plus-part-benefit-options', values: { br: '\n', nbsp: '\xa0' } }),
                                            imageSrc: 'https://avatars.mds.yandex.net/get-music-misc/49997/img.68eebd405566813399938420/orig',
                                            image2xSrc: 'https://avatars.mds.yandex.net/get-music-misc/69699/img.68eebd498f03fb5a1cf861df/orig',
                                            'data-test-id': q.e8.paywall.PAYWALL_SECTION_CARD_BENEFIT_OPTIONS,
                                        }),
                                    ],
                                }),
                        ],
                    }),
                    'data-test-id': q.e8.paywall.PAYWALL_PLUS_SECTION,
                });
            };
            var iS = a(51767),
                iI = a(42406),
                ik = a(30858),
                iL = a.n(ik);
            let iE = {
                    exit: iL().stickyContainer_exit,
                    exitActive: iL().stickyContainer_exit_active,
                    enter: iL().stickyContainer_enter,
                    enterActive: iL().stickyContainer_enter_active,
                },
                iM = 'buy-subscription-block-button-container',
                iP = 'buy-subscription-block-first-button',
                iO = 'buy-subscription-block-second-button',
                iw = (0, h.PA)((e) => {
                    var t;
                    let { className: a, shouldShowFixed: i, place: l, hasColumnLayout: n } = e,
                        s = (0, g.useRef)(null),
                        r = (0, g.useRef)(null),
                        o = (0, g.useRef)(null),
                        { user: c, experiments: d } = (0, N.g)(),
                        u = d.checkExperiment(T.z.WebNextPaywallSecondButton, 'on'),
                        _ = (0, tH.D)({ storeName: 'music', place: l || tK.R.BLOCK_1, offerElement: { element: r.current, intersectionPropertyId: iP } }),
                        m = (0, tH.D)({ storeName: 'music', place: tK.R.BLOCK_2, offerElement: { element: o.current, intersectionPropertyId: iO }, isEnabled: u }),
                        p = (0, g.useRef)(null),
                        [v, x] = (0, g.useState)(),
                        [h, C] = (0, g.useState)(!1),
                        { isIntersecting: A } = null != (t = (0, iI.BL)([s], { preflightCheck: !1 }, !i)[iM]) ? t : {},
                        b = (0, g.useCallback)(() => {
                            if (!c.isAuthorized) return void _.saveOfferAndAuthorize();
                            _.openPaymentWidgetModal();
                        }, [c.isAuthorized, _]),
                        f = (0, g.useCallback)(() => {
                            if (!c.isAuthorized) return void m.saveOfferAndAuthorize();
                            m.openPaymentWidgetModal();
                        }, [c.isAuthorized, m]);
                    ((0, g.useEffect)(() => {
                        if (!A) {
                            var e;
                            x(null == (e = s.current) ? void 0 : e.closest('[data-buy-subscription-block-portal]'));
                        }
                    }, [A]),
                        (0, g.useEffect)(() => {
                            i &&
                                setTimeout(() => {
                                    C(!0);
                                }, 300);
                        }, [i, C]));
                    let j = i && v,
                        S = !!(j && !A && h);
                    return (0, y.jsxs)('div', {
                        className: (0, eL.$)(iL().root, a, { [iL().root_withSecondButton]: u }),
                        children: [
                            (0, y.jsxs)('div', {
                                ref: s,
                                className: (0, eL.$)(iL().buttonContainer, { [iL().buttonContainer_columnLayout]: n }),
                                'data-intersection-property-id': iM,
                                children: [
                                    (0, y.jsxs)(Q.$, {
                                        isBlock: !0,
                                        radius: 'xxxl',
                                        size: 'l',
                                        color: 'plus',
                                        className: iL().button,
                                        ref: r,
                                        onClick: b,
                                        'aria-label': _.mainTextA11y,
                                        'data-intersection-property-id': iP,
                                        'data-test-id': q.e8.paywall.PAYWALL_OFFER_BUTTON,
                                        children: [
                                            (0, y.jsx)(er.HL, { className: iL().text_main, variant: 'div', size: 'l', children: _.mainText }),
                                            _.additionText && (0, y.jsx)(er.HL, { className: iL().text_addition, variant: 'div', size: 'm', children: _.additionText }),
                                        ],
                                    }),
                                    u &&
                                        !m.oneClickAvailable &&
                                        (0, y.jsxs)(Q.$, {
                                            isBlock: !0,
                                            radius: 'xxxl',
                                            size: 'l',
                                            color: 'secondary',
                                            className: iL().button,
                                            ref: o,
                                            onClick: f,
                                            'aria-label': m.mainTextA11y,
                                            'data-intersection-property-id': iO,
                                            'data-test-id': q.e8.paywall.PAYWALL_SECOND_OFFER_BUTTON,
                                            children: [
                                                (0, y.jsx)(er.HL, { className: iL().text_main, variant: 'div', size: 'l', children: m.mainText }),
                                                m.additionText &&
                                                    (0, y.jsx)(er.HL, { className: iL().text_addition, variant: 'div', size: 'm', children: m.additionText }),
                                            ],
                                        }),
                                ],
                            }),
                            _.oneClickAvailable &&
                                (0, y.jsx)(er.HL, {
                                    className: iL().text_secondary,
                                    variant: 'div',
                                    size: 's',
                                    weight: 'normal',
                                    'aria-label': _.oneClickDisclaimerTextA11y,
                                    children: _.oneClickDisclaimerText,
                                }),
                            j &&
                                (0, iS.createPortal)(
                                    (0, y.jsx)(aG.A, {
                                        in: S,
                                        nodeRef: p,
                                        timeout: 300,
                                        classNames: iE,
                                        unmountOnExit: !0,
                                        'data-test-id': q.e8.paywall.PAYWALL_BUY_SUBSCRIPTION_BLOCK_FLOATING,
                                        children: (0, y.jsx)('div', {
                                            className: iL().stickyContainer,
                                            'aria-hidden': !0,
                                            ref: p,
                                            children: (0, y.jsx)(iw, { place: tK.R.BOTTOM_BUTTON }),
                                        }),
                                    }),
                                    v,
                                ),
                        ],
                    });
                });
            iw.displayName = 'BuySubscriptionBlock';
            var iR = a(771),
                iD = a.n(iR);
            let iB = (e) => {
                let { className: t } = e;
                return (0, y.jsx)('section', {
                    className: (0, eL.$)(iD().root, t),
                    children: (0, y.jsx)('div', {
                        className: iD().wrapper,
                        children: (0, y.jsxs)('div', {
                            className: iD().content,
                            children: [
                                (0, y.jsx)(er.DZ, {
                                    variant: 'h1',
                                    size: 'xxl',
                                    className: iD().title,
                                    children: (0, y.jsx)(eQ.A, { id: 'paywall.music-on-many-devices', values: { nbsp: '\xa0' } }),
                                }),
                                (0, y.jsx)(er.HL, {
                                    variant: 'div',
                                    size: 'l',
                                    weight: 'normal',
                                    className: iD().label,
                                    children: (0, y.jsx)(eQ.A, { id: 'paywall.recommendations-on-devices', values: { nbsp: '\xa0' } }),
                                }),
                                (0, y.jsx)(iw, { className: iD().buySubscriptionBlock, shouldShowFixed: !0, hasColumnLayout: !0 }),
                            ],
                        }),
                    }),
                });
            };
            var iF = a(3856),
                iU = a.n(iF);
            let iz = () =>
                (0, y.jsxs)(y.Fragment, {
                    children: [
                        (0, y.jsx)(iB, { className: iU().topSection }),
                        (0, y.jsx)(ib, { className: az().section, variant: aB.BY }),
                        (0, y.jsx)(ip, { className: az().section, variant: aB.BY }),
                        (0, y.jsx)(iT, { className: az().section, variant: aB.BY }),
                        (0, y.jsx)(a8, { className: az().section_faq }),
                        (0, y.jsx)(ia, {}),
                    ],
                });
            var iW = a(46552),
                iK = a.n(iW);
            let iH = (e) => {
                let { className: t, text: a, imageSrc: i, image2xSrc: l } = e;
                return (0, y.jsxs)('div', {
                    className: (0, eL.$)(iK().root, t),
                    children: [
                        (0, y.jsx)(tF._V, { className: iK().image, src: i, srcSet: l ? ''.concat(l, ' 2x') : void 0, fit: 'cover', 'aria-hidden': !0 }),
                        (0, y.jsx)(er.HL, { className: iK().text, variant: 'span', size: 'l', weight: 'medium', children: a }),
                    ],
                });
            };
            var iV = a(11909),
                iY = a.n(iV);
            let iq = (e) => {
                let { id: t, className: a, contentClassName: i, heading: l, content: n } = e;
                return (0, y.jsxs)('section', {
                    className: (0, eL.$)(iY().root, a),
                    id: t,
                    children: [
                        (0, y.jsx)('div', { className: iY().headingContainer, children: l }),
                        (0, y.jsx)('div', { className: (0, eL.$)(iY().contentContainer, i), children: n }),
                    ],
                });
            };
            var iQ = a(38129),
                i$ = a.n(iQ);
            let iG = {
                    [aB.RU]: 'https://avatars.mds.yandex.net/get-music-misc/30221/img.66743f6a14d05542b9b51906/orig',
                    [aB.BY]: 'https://avatars.mds.yandex.net/get-music-misc/28052/img.66b240550e8bdd7a18b0d48f/orig',
                },
                iZ = {
                    [aB.RU]: 'https://avatars.mds.yandex.net/get-music-misc/70683/img.667440e414d05542b9b5192c/orig',
                    [aB.BY]: 'https://avatars.mds.yandex.net/get-music-misc/28052/img.66b240560e8bdd7a18b0d490/orig',
                },
                iX = {
                    [aB.RU]: 'https://avatars.mds.yandex.net/get-music-misc/2419084/img.66744288699ba338f5126199/orig',
                    [aB.BY]: 'https://avatars.mds.yandex.net/get-music-misc/69699/img.66b240db0e8bdd7a18b0d493/orig',
                },
                iJ = {
                    [aB.RU]: 'https://avatars.mds.yandex.net/get-music-misc/2419084/img.667442a8699ba338f512619b/orig',
                    [aB.BY]: 'https://avatars.mds.yandex.net/get-music-misc/70850/img.66b240da0e8bdd7a18b0d492/orig',
                },
                i0 = (e) => {
                    let { className: t, variant: a = aB.RU } = e,
                        i = (0, tq.j)();
                    return (0, y.jsx)('div', {
                        'data-test-id': q.e8.paywall.MOBILE_PAYWALL_KINOPOISK_SECTION,
                        children: (0, y.jsx)(iq, {
                            className: t,
                            contentClassName: i$()['content_'.concat(a)],
                            heading: (0, y.jsxs)(y.Fragment, {
                                children: [
                                    (0, y.jsx)($.I, { variant: 'kinopoisk'.concat(i), className: i$()['logo_'.concat(i.toLocaleLowerCase())] }),
                                    (0, y.jsx)(tU.q, {
                                        children: (0, y.jsx)(er.DZ, { variant: 'h2', children: (0, y.jsx)(eQ.A, { id: 'paywall.kinopoisk-part-title' }) }),
                                    }),
                                ],
                            }),
                            content: (0, y.jsxs)(y.Fragment, {
                                children: [
                                    (0, y.jsx)(iH, {
                                        className: i$().card1,
                                        text: (0, y.jsx)(eQ.A, { id: 'paywall.kinopoisk-part-benefit-movies', values: { br: '\n', nbsp: '\xa0' } }),
                                        imageSrc: iG[a],
                                        image2xSrc: iZ[a],
                                    }),
                                    (0, y.jsx)(iH, {
                                        className: i$().card2,
                                        text: (0, y.jsx)(eQ.A, { id: 'paywall.kinopoisk-part-benefit-exclusive', values: { br: '\n', nbsp: '\xa0' } }),
                                        imageSrc: 'https://avatars.mds.yandex.net/get-music-misc/28592/img.667441724ca5c169150d1473/orig',
                                        image2xSrc: 'https://avatars.mds.yandex.net/get-music-misc/28592/img.667441934ca5c169150d1475/orig',
                                    }),
                                    a === aB.RU &&
                                        (0, y.jsx)(iH, {
                                            className: i$().card3,
                                            text: (0, y.jsx)(eQ.A, { id: 'paywall.kinopoisk-part-benefit-sport', values: { br: '\n', nbsp: '\xa0' } }),
                                            imageSrc: 'https://avatars.mds.yandex.net/get-music-misc/2413828/img.667441e54ca5c169150d1477/orig',
                                            image2xSrc: 'https://avatars.mds.yandex.net/get-music-misc/40584/img.667441ff4ca5c169150d1479/orig',
                                        }),
                                    (0, y.jsx)(iH, {
                                        className: (0, eL.$)(i$().card4, i$()['card4_'.concat(a)]),
                                        text: (0, y.jsx)(eQ.A, { id: 'paywall.kinopoisk-part-benefit-channels', values: { br: '\n', nbsp: '\xa0' } }),
                                        imageSrc: iX[a],
                                        image2xSrc: iJ[a],
                                    }),
                                ],
                            }),
                        }),
                    });
                };
            var i1 = a(83237),
                i2 = a.n(i1);
            let i4 = (e) => {
                let { className: t, variant: a = aB.RU } = e,
                    i = (0, tq.j)(),
                    l = (0, g.useMemo)(
                        () =>
                            a === aB.RU
                                ? (0, y.jsx)(eQ.A, { id: 'paywall.music-part-benefit-books', values: { br: '\n', nbsp: '\xa0' } })
                                : (0, y.jsx)(eQ.A, { id: 'paywall.music-part-benefit-books-alternative', values: { br: '\n', nbsp: '\xa0' } }),
                        [a],
                    );
                return (0, y.jsx)('div', {
                    'data-test-id': q.e8.paywall.MOBILE_PAYWALL_MUSIC_SECTION,
                    children: (0, y.jsx)(iq, {
                        id: ih,
                        className: t,
                        contentClassName: i2().content,
                        heading: (0, y.jsxs)(y.Fragment, {
                            children: [
                                (0, y.jsx)($.I, { variant: 'musicLogoCenter'.concat(i), className: i2()['logo_'.concat(i.toLocaleLowerCase())] }),
                                (0, y.jsx)(tU.q, {
                                    children: (0, y.jsx)(er.DZ, {
                                        variant: 'h2',
                                        children: (0, y.jsx)(eQ.A, { id: 'paywall.music-part-title', values: { nbsp: '\xa0' } }),
                                    }),
                                }),
                            ],
                        }),
                        content: (0, y.jsxs)(y.Fragment, {
                            children: [
                                (0, y.jsx)(iH, {
                                    className: i2().card,
                                    text: (0, y.jsx)(eQ.A, { id: 'paywall.music-part-benefit-recommendations', values: { br: '\n', nbsp: '\xa0' } }),
                                    imageSrc: 'https://avatars.mds.yandex.net/get-music-misc/40584/img.667415134ca5c169150d135d/orig',
                                    image2xSrc: 'https://avatars.mds.yandex.net/get-music-misc/70850/img.667415424ca5c169150d135f/orig',
                                }),
                                (0, y.jsx)(iH, {
                                    className: i2().card,
                                    text: (0, y.jsx)(eQ.A, { id: 'paywall.music-part-benefit-many-devices', values: { br: '\n', nbsp: '\xa0' } }),
                                    imageSrc: 'https://avatars.mds.yandex.net/get-music-misc/70850/img.6674157e4ca5c169150d1361/orig',
                                    image2xSrc: 'https://avatars.mds.yandex.net/get-music-misc/28052/img.667415a74ca5c169150d1364/orig',
                                }),
                                (0, y.jsx)(iH, {
                                    className: i2().card,
                                    text: (0, y.jsx)(eQ.A, { id: 'paywall.music-part-benefit-playlists', values: { br: '\n', nbsp: '\xa0' } }),
                                    imageSrc: 'https://avatars.mds.yandex.net/get-music-misc/2406661/img.667415d64ca5c169150d1366/orig',
                                    image2xSrc: 'https://avatars.mds.yandex.net/get-music-misc/28052/img.667415f44ca5c169150d1368/orig',
                                }),
                                (0, y.jsx)(iH, {
                                    className: i2().card,
                                    text: (0, y.jsx)(eQ.A, { id: 'paywall.music-part-benefit-without-internet-mobile', values: { br: '\n', nbsp: '\xa0' } }),
                                    imageSrc: 'https://avatars.mds.yandex.net/get-music-misc/40584/img.667417c14ca5c169150d1382/orig',
                                    image2xSrc: 'https://avatars.mds.yandex.net/get-music-misc/40584/img.667417e14ca5c169150d1384/orig',
                                }),
                                (0, y.jsx)(iH, {
                                    className: i2().card,
                                    text: l,
                                    imageSrc: 'https://avatars.mds.yandex.net/get-music-misc/2406661/img.667418304ca5c169150d1386/orig',
                                    image2xSrc: 'https://avatars.mds.yandex.net/get-music-misc/28052/img.6674184e4ca5c169150d1388/orig',
                                }),
                            ],
                        }),
                    }),
                });
            };
            var i3 = a(21260),
                i6 = a.n(i3);
            let i5 = (e) => {
                let { className: t, variant: a = aB.RU } = e,
                    i = (0, tq.j)();
                return (0, y.jsx)('div', {
                    'data-test-id': q.e8.paywall.MOBILE_PAYWALL_PLUS_SECTION,
                    children: (0, y.jsx)(iq, {
                        className: t,
                        contentClassName: i6()['content_'.concat(a)],
                        heading: (0, y.jsxs)(y.Fragment, {
                            children: [
                                (0, y.jsx)($.I, { variant: 'yandexPlus'.concat(i), className: i6()['logo_'.concat(i.toLocaleLowerCase())] }),
                                (0, y.jsx)(tU.q, {
                                    children: (0, y.jsx)(er.DZ, {
                                        variant: 'h2',
                                        children: (0, y.jsx)(eQ.A, { id: 'paywall.plus-part-title', values: { nbsp: '\xa0' } }),
                                    }),
                                }),
                            ],
                        }),
                        content: (0, y.jsxs)(y.Fragment, {
                            children: [
                                (0, y.jsx)(iH, {
                                    className: i6().card,
                                    text: (0, y.jsx)(eQ.A, { id: 'paywall.plus-part-benefit-family', values: { br: '\n', nbsp: '\xa0' } }),
                                    imageSrc: 'https://avatars.mds.yandex.net/get-music-misc/29541/img.667566fbcc842022e134a7ac/orig',
                                    image2xSrc: 'https://avatars.mds.yandex.net/get-music-misc/40584/img.66756714cc842022e134a7ae/orig',
                                }),
                                (0, y.jsx)(iH, {
                                    className: i6().card,
                                    text: (0, y.jsx)(eQ.A, { id: 'paywall.plus-part-benefit-devices', values: { br: '\n' } }),
                                    imageSrc: 'https://avatars.mds.yandex.net/get-music-misc/34161/img.67cade4deeed590a0d455116/orig',
                                    image2xSrc: 'https://avatars.mds.yandex.net/get-music-misc/28052/img.67cade4beeed590a0d455115/orig',
                                }),
                            ],
                        }),
                    }),
                });
            };
            var i8 = a(57297),
                i9 = a.n(i8);
            let i7 = (e) => {
                let { className: t, moreInfoLinkProps: a } = e;
                return (0, y.jsxs)('section', {
                    className: (0, eL.$)(i9().root, t),
                    children: [
                        (0, y.jsx)('div', { className: i9().image }),
                        (0, y.jsxs)('div', {
                            className: i9().content,
                            children: [
                                (0, y.jsx)(er.DZ, {
                                    className: i9().title,
                                    variant: 'h1',
                                    size: 'xl',
                                    weight: 'bold',
                                    children: (0, y.jsx)(eQ.A, { id: 'paywall.music-on-many-devices', values: { nbsp: '\xa0' } }),
                                }),
                                (0, y.jsx)(er.HL, {
                                    variant: 'div',
                                    size: 'l',
                                    children: (0, y.jsx)(eQ.A, { id: 'paywall.recommendations-on-devices', values: { nbsp: '\xa0' } }),
                                }),
                                (0, y.jsx)(iw, { className: i9().buySubscriptionBlock, shouldShowFixed: !0, hasColumnLayout: !0 }),
                                (0, y.jsx)(iC, { ...a, className: (0, eL.$)(i9().moreInfoLink, null == a ? void 0 : a.className) }),
                            ],
                        }),
                    ],
                });
            };
            var le = a(81208),
                lt = a.n(le);
            let la = () =>
                    (0, y.jsxs)(y.Fragment, {
                        children: [
                            (0, y.jsx)(i7, { className: lt().topSection }),
                            (0, y.jsx)(i4, { className: az().section, variant: aB.BY }),
                            (0, y.jsx)(i0, { className: az().section, variant: aB.BY }),
                            (0, y.jsx)(i5, { className: az().section, variant: aB.BY }),
                            (0, y.jsx)(a8, { className: az().section_faq }),
                            (0, y.jsx)(ia, {}),
                        ],
                    }),
                li = (0, h.PA)(() => {
                    let {
                        settings: { isMobile: e },
                    } = (0, N.g)();
                    return (0, y.jsx)('div', { className: aK().root, children: e ? (0, y.jsx)(la, {}) : (0, y.jsx)(iz, {}) });
                });
            var ll = a(65297),
                ln = a.n(ll);
            let ls = () =>
                (0, y.jsxs)('div', {
                    className: ln().root,
                    children: [(0, y.jsx)(iB, { className: ln().topSection }), (0, y.jsx)(a8, { className: az().section_faq }), (0, y.jsx)(ia, {})],
                });
            var lr = a(63911),
                lo = a.n(lr);
            let lc = () =>
                    (0, y.jsxs)(y.Fragment, {
                        children: [
                            (0, y.jsx)(i7, { className: lo().topSection, moreInfoLinkProps: { shouldShowLabel: !1 } }),
                            (0, y.jsx)(a8, { faqProps: { id: ih } }),
                            (0, y.jsx)(ia, {}),
                        ],
                    }),
                ld = (0, h.PA)(() => {
                    let {
                        settings: { isMobile: e },
                    } = (0, N.g)();
                    return e ? (0, y.jsx)(lc, {}) : (0, y.jsx)(ls, {});
                });
            var lu = a(51728),
                l_ = a.n(lu),
                lm = a(97201);
            let lp = () => {
                let { experiments: e } = (0, N.g)(),
                    t = (0, t3.useSearchParams)().get(lm.K.UTM_MEDIUM),
                    a = e.checkExperiment(T.z.WebNextPaidPerformancePaywallTopSection, 'music_benefits') && 'paid_performance' === t;
                return e.checkExperiment(T.z.WebNextPaywallTopSection, 'music_benefits') || a;
            };
            var lv = a(37934),
                lx = a.n(lv);
            let ly = (e) => {
                let { className: t, variant: a = aB.RU } = e,
                    i = (0, tq.j)();
                return (0, y.jsx)(ic, {
                    className: t,
                    contentClassName: lx()['content_'.concat(a)],
                    heading: (0, y.jsxs)(y.Fragment, {
                        children: [
                            (0, y.jsx)($.I, { variant: 'yandexBooks'.concat(i), className: lx()['logo_'.concat(i.toLocaleLowerCase())] }),
                            (0, y.jsx)(tU.q, {
                                children: (0, y.jsx)(er.DZ, { variant: 'h2', children: (0, y.jsx)(eQ.A, { id: 'paywall.books-part-title', values: { nbsp: '\xa0' } }) }),
                            }),
                        ],
                    }),
                    content: (0, y.jsxs)(y.Fragment, {
                        children: [
                            (0, y.jsx)(is, {
                                className: lx().card,
                                text: (0, y.jsx)(eQ.A, { id: 'paywall.books-part-benefit-app-desktop', values: { nbsp: '\xa0' } }),
                                imageSrc: 'https://avatars.mds.yandex.net/get-music-misc/28592/img.68c02cb364560d354cb53936/orig',
                                image2xSrc: 'https://avatars.mds.yandex.net/get-music-misc/28052/img.68c02ce6cccb5e758b864480/orig',
                                'data-test-id': q.e8.paywall.PAYWALL_SECTION_CARD_READ_IN_APP,
                            }),
                            (0, y.jsx)(is, {
                                className: lx().card,
                                variant: 'vertical',
                                text: (0, y.jsx)(eQ.A, { id: 'paywall.books-part-benefit-follow-desktop', values: { nbsp: '\xa0' } }),
                                imageAlign: 'right',
                                imageSrc: 'https://avatars.mds.yandex.net/get-music-misc/40584/img.66f6a89798264a4b59f3a749/orig',
                                image2xSrc: 'https://avatars.mds.yandex.net/get-music-misc/30221/img.66f6a890ed792c3f4a135a74/orig',
                                'data-test-id': q.e8.paywall.PAYWALL_SECTION_CARD_FIND_NEWS,
                            }),
                            (0, y.jsx)(is, {
                                className: lx().card,
                                variant: 'vertical',
                                text: (0, y.jsx)(eQ.A, { id: 'paywall.books-part-benefit-download-desktop', values: { nbsp: '\xa0' } }),
                                imageAlign: 'right',
                                imageSrc: 'https://avatars.mds.yandex.net/get-music-misc/30221/img.66f6a8c8caf72c4bc9eaea8c/orig',
                                image2xSrc: 'https://avatars.mds.yandex.net/get-music-misc/2406661/img.66f6a8bf4e6e980968aa844d/orig',
                                'data-test-id': q.e8.paywall.PAYWALL_SECTION_CARD_DOWNLOAD_BOOKS,
                            }),
                            (0, y.jsx)(is, {
                                className: lx().card,
                                text: (0, y.jsx)(eQ.A, { id: 'paywall.books-part-benefit-speed-desktop', values: { br: '\n' } }),
                                imageSrc: 'https://avatars.mds.yandex.net/get-music-misc/70850/img.68c02cbc9daf1b03347faca5/orig',
                                image2xSrc: 'https://avatars.mds.yandex.net/get-music-misc/28592/img.68c02cdccccb5e758b86447e/orig',
                                'data-test-id': q.e8.paywall.PAYWALL_SECTION_CARD_CHOOSE_PASE,
                            }),
                        ],
                    }),
                    'data-test-id': q.e8.paywall.PAYWALL_BOOKS_SECTION,
                });
            };
            var lh = a(71354),
                lC = a.n(lh);
            let lg = (e) => {
                let { className: t, variant: a = aB.RU } = e;
                return (0, y.jsx)(ic, {
                    className: t,
                    contentClassName: lC()['content_'.concat(a)],
                    heading: (0, y.jsx)(er.DZ, {
                        variant: 'h2',
                        className: lC().title,
                        children: (0, y.jsx)(eQ.A, { id: 'paywall.other-services-part-title', values: { nbsp: '\xa0' } }),
                    }),
                    content: (0, y.jsxs)(y.Fragment, {
                        children: [
                            (0, y.jsx)(is, {
                                className: lC().card,
                                variant: 'vertical',
                                imageAlign: 'right',
                                text: (0, y.jsx)(eQ.A, { id: 'paywall.other-services-part-benefit-maps', values: { nbsp: '\xa0' } }),
                                imageSrc: 'https://avatars.mds.yandex.net/get-music-misc/70850/img.68eec5170c5fe5082085b079/orig',
                                image2xSrc: 'https://avatars.mds.yandex.net/get-music-misc/28592/img.68eec52e94053d016bcd7bf3/orig',
                                'data-test-id': q.e8.paywall.PAYWALL_SECTION_CARD_MAPS,
                            }),
                            (0, y.jsx)(is, {
                                className: lC().card,
                                text: (0, y.jsx)(eQ.A, { id: 'paywall.other-services-part-benefit-your-plus', values: { nbsp: '\xa0' } }),
                                imageAlign: 'right',
                                imageSrc: 'https://avatars.mds.yandex.net/get-music-misc/28592/img.68eec5408fcfeb05fbb439ec/orig',
                                image2xSrc: 'https://avatars.mds.yandex.net/get-music-misc/28592/img.68eec547b510f9053778b2d0/orig',
                                'data-test-id': q.e8.paywall.PAYWALL_SECTION_CARD_YOUR_PLUS,
                            }),
                            (0, y.jsx)(is, {
                                className: lC().card,
                                text: (0, y.jsx)(eQ.A, { id: 'paywall.pay-part-benefit-split-desktop', values: { nbsp: '\xa0' } }),
                                imageAlign: 'right',
                                imageSrc: 'https://avatars.mds.yandex.net/get-music-misc/28592/img.68eec5516fc33b70f1711a3a/orig',
                                image2xSrc: 'https://avatars.mds.yandex.net/get-music-misc/70850/img.68eec558b510f9053778b2d2/orig',
                                'data-test-id': q.e8.paywall.PAYWALL_SECTION_CARD_DIVIDE_PAYMENT,
                            }),
                            (0, y.jsx)(is, {
                                className: lC().card,
                                variant: 'vertical',
                                imageAlign: 'right',
                                text: (0, y.jsx)(eQ.A, { id: 'paywall.other-services-part-save', values: { nbsp: '\xa0' } }),
                                imageSrc: 'https://avatars.mds.yandex.net/get-music-misc/70683/img.68eec565d57d6359e4120722/orig',
                                image2xSrc: 'https://avatars.mds.yandex.net/get-music-misc/70683/img.68eec56e6fc33b70f1711a3c/orig',
                                'data-test-id': q.e8.paywall.PAYWALL_SECTION_CARD_TAKE_SAVES,
                            }),
                        ],
                    }),
                    'data-test-id': q.e8.paywall.PAYWALL_OTHER_SERVICES_SECTION,
                });
            };
            var lA = a(20472);
            function lb() {
                return (lb = Object.assign
                    ? Object.assign.bind()
                    : function (e) {
                          for (var t = 1; t < arguments.length; t++) {
                              var a = arguments[t];
                              for (var i in a) ({}).hasOwnProperty.call(a, i) && (e[i] = a[i]);
                          }
                          return e;
                      }).apply(null, arguments);
            }
            let lf = function (e) {
                return g.createElement(
                    'svg',
                    lb({ width: 64, height: 64, viewBox: '0 0 64 64', fill: 'none', xmlns: 'http://www.w3.org/2000/svg' }, e),
                    g.createElement(
                        'mask',
                        { id: 'mask0_1016_316950', style: { maskType: 'alpha' }, maskUnits: 'userSpaceOnUse', x: -1, y: 0, width: 65, height: 64 },
                        i || (i = g.createElement('circle', { cx: 31.6934, cy: 32, r: 32, fill: '#D9D9D9' })),
                    ),
                    l ||
                        (l = g.createElement(
                            'g',
                            { mask: 'url(#mask0_1016_316950)' },
                            g.createElement('path', { d: 'M17.9864 0V29.0933L0 16V0H17.9864Z', fill: 'url(#paint0_linear_1016_316950)' }),
                            g.createElement('path', { d: 'M58.2771 0L36.0641 16.04L17.9844 29.0933V0H58.2771Z', fill: 'url(#paint1_linear_1016_316950)' }),
                            g.createElement('path', { d: 'M63.9993 0V31.88L36.0664 39.36V16.04L58.2794 0H63.9993Z', fill: 'url(#paint2_linear_1016_316950)' }),
                            g.createElement('path', { d: 'M63.9993 31.8789V60.5189L36.0664 53.0389V39.3589L63.9993 31.8789Z', fill: 'url(#paint3_linear_1016_316950)' }),
                            g.createElement('path', { d: 'M63.9993 60.5191V63.9991H36.0664V53.0391L63.9993 60.5191Z', fill: 'url(#paint4_linear_1016_316950)' }),
                            g.createElement('path', { d: 'M36.0661 16.04V64H0V16L17.9864 29.0933L36.0661 16.04Z', fill: '#FFDAEA' }),
                            g.createElement('path', {
                                d: 'M27.0129 47.8395C24.8663 51.4394 21.5197 53.0261 18.013 53.0261C10.9998 53.0261 5.75991 48.0928 5.75991 40.6796C5.75991 40.6796 5.77324 39.6396 5.79991 39.3063L36.0661 39.3463V16.04L17.9864 29.0931L0 16V63.9992H36.0661V53.0394C32.5728 53.0261 29.3995 51.4394 27.0129 47.8528V47.8395ZM18.013 49.0128C21.5463 49.0128 23.7063 47.1862 23.9996 43.0662H11.1598C11.7198 46.7728 14.5864 49.0128 18.0264 49.0128H18.013ZM30.0262 43.0662H43.026C42.466 46.7728 39.4394 49.0128 35.9994 49.0128C32.5595 49.0128 30.3062 47.1862 30.0128 43.0662H30.0262Z',
                                fill: '#4D0000',
                            }),
                        )),
                    n ||
                        (n = g.createElement(
                            'defs',
                            null,
                            g.createElement(
                                'linearGradient',
                                { id: 'paint0_linear_1016_316950', x1: 8.99319, y1: 29.0933, x2: 8.99319, y2: -2.64766, gradientUnits: 'userSpaceOnUse' },
                                g.createElement('stop', { stopColor: '#FFDAEA' }),
                                g.createElement('stop', { offset: 0.6, stopColor: '#FFB56F' }),
                                g.createElement('stop', { offset: 0.9, stopColor: '#FF5D5D' }),
                            ),
                            g.createElement(
                                'linearGradient',
                                { id: 'paint1_linear_1016_316950', x1: 38.1307, y1: 29.0933, x2: 38.1307, y2: 0, gradientUnits: 'userSpaceOnUse' },
                                g.createElement('stop', { stopColor: '#FFDAEA' }),
                                g.createElement('stop', { offset: 0.4, stopColor: '#FFB56F' }),
                                g.createElement('stop', { offset: 0.9, stopColor: '#FF5D5D' }),
                            ),
                            g.createElement(
                                'linearGradient',
                                { id: 'paint2_linear_1016_316950', x1: 36.0664, y1: 19.68, x2: 63.9993, y2: 19.68, gradientUnits: 'userSpaceOnUse' },
                                g.createElement('stop', { stopColor: '#FFDAEA' }),
                                g.createElement('stop', { offset: 0.4, stopColor: '#FFB56F' }),
                                g.createElement('stop', { offset: 0.9, stopColor: '#FF5D5D' }),
                            ),
                            g.createElement(
                                'linearGradient',
                                { id: 'paint3_linear_1016_316950', x1: 36.0664, y1: 46.1989, x2: 67.0254, y2: 46.1989, gradientUnits: 'userSpaceOnUse' },
                                g.createElement('stop', { stopColor: '#FFDAEA' }),
                                g.createElement('stop', { offset: 0.6, stopColor: '#FFB56F' }),
                                g.createElement('stop', { offset: 0.9, stopColor: '#FF5D5D' }),
                            ),
                            g.createElement(
                                'linearGradient',
                                { id: 'paint4_linear_1016_316950', x1: 36.0664, y1: 58.5191, x2: 63.9993, y2: 58.5191, gradientUnits: 'userSpaceOnUse' },
                                g.createElement('stop', { stopColor: '#FFDAEA' }),
                                g.createElement('stop', { offset: 0.4, stopColor: '#FFB56F' }),
                                g.createElement('stop', { offset: 0.9, stopColor: '#FF5D5D' }),
                            ),
                        )),
                );
            };
            function lj() {
                return (lj = Object.assign
                    ? Object.assign.bind()
                    : function (e) {
                          for (var t = 1; t < arguments.length; t++) {
                              var a = arguments[t];
                              for (var i in a) ({}).hasOwnProperty.call(a, i) && (e[i] = a[i]);
                          }
                          return e;
                      }).apply(null, arguments);
            }
            let lN = function (e) {
                return g.createElement(
                    'svg',
                    lj({ xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 64 65', fill: 'none' }, e),
                    g.createElement(
                        'g',
                        { clipPath: 'url(#clip0_4165_10094)' },
                        s || (s = g.createElement('rect', { y: 0.5, width: 64, height: 64, rx: 32, fill: 'white' })),
                        r ||
                            (r = g.createElement('path', {
                                d: 'M18.4483 14.2142C21.818 11.7173 25.8007 10.2079 29.9516 9.83281V16.7015C27.2684 17.0494 24.7059 18.0767 22.5139 19.7009C19.7692 21.7347 17.7508 24.5968 16.7563 27.8649C15.7619 31.133 15.8441 34.6342 16.9909 37.8521C18.1376 41.0699 20.2881 43.8341 23.1252 45.7368C25.9624 47.6395 29.3359 48.58 32.7482 48.4197C36.1605 48.2594 39.4309 47.0066 42.0771 44.8462C44.7233 42.6859 46.6052 39.7322 47.4451 36.421C48.031 34.1114 48.0883 31.7131 47.6293 29.4009L53.3973 24.7639L53.3935 24.7265C54.9505 29.0095 55.1883 33.669 54.0643 38.1001C52.8644 42.8304 50.1761 47.0498 46.3958 50.1361C42.6155 53.2223 37.9434 55.012 33.0687 55.241C28.194 55.4701 23.3747 54.1264 19.3216 51.4083C15.2686 48.6901 12.1964 44.7414 10.5583 40.1444C8.92008 35.5475 8.80263 30.5458 10.2232 25.877C11.6438 21.2082 14.5273 17.1196 18.4483 14.2142Z',
                                fill: '#FCCA00',
                            })),
                        o ||
                            (o = g.createElement('path', {
                                d: 'M49.048 17.4203L49.0722 17.4808L45.2177 23.6027C43.8161 21.5255 41.9377 19.7966 39.7395 18.5728V32.5043C39.7395 36.7786 36.2744 40.2436 32.0001 40.2436C27.7258 40.2436 24.2607 36.7786 24.2607 32.5043C24.2607 28.2299 27.7258 24.7649 32.0001 24.7649C33.602 24.7649 35.0903 25.2516 36.325 26.0852V10.1518C41.3497 11.1183 45.7865 13.7369 49.048 17.4203Z',
                                fill: '#FC3F1D',
                            })),
                        g.createElement(
                            'mask',
                            { id: 'mask0_4165_10094', style: { maskType: 'alpha' }, maskUnits: 'userSpaceOnUse', x: 0, y: 0, width: 64, height: 65 },
                            c || (c = g.createElement('ellipse', { cx: 32, cy: 32.5, rx: 32, ry: 32, fill: 'white' })),
                        ),
                        d || (d = g.createElement('g', { mask: 'url(#mask0_4165_10094)' })),
                        u ||
                            (u = g.createElement(
                                'g',
                                { clipPath: 'url(#clip1_4165_10094)' },
                                g.createElement('rect', { width: 63.9999, height: 63.9999, transform: 'translate(0 0.5)', fill: 'black' }),
                                g.createElement('path', {
                                    d: 'M63.9999 10.0984L30.9887 27.7682L48.1919 10.0984L38.6559 10.0984L26.9439 26.3551V10.0984H19.2L19.2 54.8984H26.9439L26.9439 38.668L38.6559 54.8984H48.1919L31.4355 37.7842L63.9999 54.8984V46.5784L34.2988 34.6629L63.9999 36.6584V28.3384L34.487 30.2571L63.9999 18.4184V10.0984Z',
                                    fill: 'url(#paint0_radial_4165_10094)',
                                }),
                            )),
                    ),
                    _ ||
                        (_ = g.createElement(
                            'defs',
                            null,
                            g.createElement(
                                'radialGradient',
                                {
                                    id: 'paint0_radial_4165_10094',
                                    cx: 0,
                                    cy: 0,
                                    r: 1,
                                    gradientUnits: 'userSpaceOnUse',
                                    gradientTransform: 'translate(19.2 10.0984) rotate(45) scale(63.3567 63.3567)',
                                },
                                g.createElement('stop', { offset: 0.5, stopColor: '#FF5500' }),
                                g.createElement('stop', { offset: 1, stopColor: '#BBFF00' }),
                            ),
                            g.createElement('clipPath', { id: 'clip0_4165_10094' }, g.createElement('rect', { y: 0.5, width: 64, height: 64, rx: 32, fill: 'white' })),
                            g.createElement(
                                'clipPath',
                                { id: 'clip1_4165_10094' },
                                g.createElement('rect', { width: 63.9999, height: 63.9999, fill: 'white', transform: 'translate(0 0.5)' }),
                            ),
                        )),
                );
            };
            function lT() {
                return (lT = Object.assign
                    ? Object.assign.bind()
                    : function (e) {
                          for (var t = 1; t < arguments.length; t++) {
                              var a = arguments[t];
                              for (var i in a) ({}).hasOwnProperty.call(a, i) && (e[i] = a[i]);
                          }
                          return e;
                      }).apply(null, arguments);
            }
            let lS = function (e) {
                return g.createElement(
                    'svg',
                    lT({ xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 64 65', fill: 'none' }, e),
                    m ||
                        (m = g.createElement('path', {
                            d: 'M32 64.5C49.6731 64.5 64 50.1731 64 32.5C64 14.8269 49.6731 0.5 32 0.5C14.3269 0.5 0 14.8269 0 32.5C0 50.1731 14.3269 64.5 32 64.5Z',
                            fill: 'black',
                        })),
                    p ||
                        (p = g.createElement('path', {
                            d: 'M47.4516 28.882C47.4516 28.882 55.4213 40.0392 55.3875 40.1373C55.238 40.5644 55.0773 40.9858 54.9052 41.4016C54.8659 41.4963 44.9333 32.923 44.9333 32.923C44.9333 32.923 47.6607 51.2055 47.6067 51.2506C47.211 51.5751 46.8074 51.8884 46.3925 52.1882C46.3352 52.2298 40.4251 34.2786 40.4251 34.2786C40.4251 34.2786 32.1609 56.938 32.0912 56.9391C31.963 56.9413 31.8337 56.9425 31.7055 56.9425C31.2738 56.9425 30.8455 56.9312 30.4183 56.9098C30.3542 56.9064 35.3548 32.7697 35.3548 32.7697C35.3548 32.7697 11.8448 47.1679 11.8111 47.1239C11.4738 46.6867 11.1512 46.2382 10.8431 45.7773C10.8105 45.7289 31.3829 28.4233 31.3829 28.4233C31.384 28.4245 7.07582 26.9178 7.08594 26.8671C7.18937 26.3465 7.30854 25.8304 7.44345 25.3221C7.45581 25.2737 30.8084 23.4346 30.8084 23.4346C30.8084 23.4346 13.7594 14.1976 13.7999 14.1559C14.1495 13.7986 14.5104 13.4516 14.8814 13.1146C14.9264 13.0741 33.7022 19.3463 33.7022 19.3463C33.7022 19.3463 27.9247 6.91001 28.0293 6.89423C28.4509 6.83225 28.8747 6.78042 29.3031 6.73985C29.393 6.73196 39.121 18.1969 39.121 18.1969C39.121 18.1969 42.2306 8.93727 42.3228 8.98122C42.7635 9.18857 43.1975 9.40718 43.6236 9.63819C43.7034 9.68101 43.9709 19.7136 43.9709 19.7136C43.9709 19.7136 51.4842 16.2958 51.5022 16.3184C51.7641 16.6553 52.0182 16.999 52.2633 17.3506C52.279 17.3731 46.7737 23.829 46.7737 23.829C46.7737 23.829 56.4016 27.2728 56.4173 27.3629C56.4893 27.7697 56.5523 28.1788 56.604 28.5912C56.6141 28.6757 47.4516 28.882 47.4516 28.882Z',
                            fill: '#FED42B',
                        })),
                );
            };
            function lI() {
                return (lI = Object.assign
                    ? Object.assign.bind()
                    : function (e) {
                          for (var t = 1; t < arguments.length; t++) {
                              var a = arguments[t];
                              for (var i in a) ({}).hasOwnProperty.call(a, i) && (e[i] = a[i]);
                          }
                          return e;
                      }).apply(null, arguments);
            }
            let lk = function (e) {
                return g.createElement(
                    'svg',
                    lI({ xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 64 65', fill: 'none' }, e),
                    v ||
                        (v = g.createElement(
                            'g',
                            { clipPath: 'url(#clip0_4032_54517)' },
                            g.createElement('rect', { y: 0.5, width: 64, height: 64, rx: 32, fill: 'white' }),
                            g.createElement('path', {
                                fillRule: 'evenodd',
                                clipRule: 'evenodd',
                                d: 'M64 32.5C64 50.1731 49.6731 64.5 32 64.5C14.3269 64.5 0 50.1731 0 32.5C0 14.8269 14.3269 0.5 32 0.5C35.4533 0.5 38.7788 1.04699 41.8946 2.05907L34.6013 24.5H13.303L10.7003 32.5H32.0013L25.7613 51.7H34.5613L40.8013 32.5H64ZM62.9919 24.5H43.4013L49.508 5.71001C56.0847 10.0168 60.9791 16.68 62.9919 24.5Z',
                                fill: 'url(#paint0_linear_4032_54517)',
                            }),
                        )),
                    x ||
                        (x = g.createElement(
                            'defs',
                            null,
                            g.createElement(
                                'linearGradient',
                                { id: 'paint0_linear_4032_54517', x1: -253254e-12, y1: 28.2333, x2: 64, y2: 28.2333, gradientUnits: 'userSpaceOnUse' },
                                g.createElement('stop', { stopColor: '#FF5C4D' }),
                                g.createElement('stop', { offset: 0.4, stopColor: '#EB469F' }),
                                g.createElement('stop', { offset: 1, stopColor: '#8341EF' }),
                            ),
                            g.createElement('clipPath', { id: 'clip0_4032_54517' }, g.createElement('rect', { y: 0.5, width: 64, height: 64, rx: 32, fill: 'white' })),
                        )),
                );
            };
            var lL = a(30492),
                lE = a.n(lL);
            let lM = () =>
                    (0, y.jsxs)('ul', {
                        className: lE().services,
                        children: [
                            (0, y.jsxs)('li', {
                                className: lE().service,
                                children: [
                                    (0, y.jsx)(lS, { className: lE().serviceLogo, 'aria-hidden': !0 }),
                                    (0, y.jsx)(er.DZ, {
                                        variant: 'h2',
                                        size: 'm',
                                        className: lE().serviceLabel,
                                        children: (0, y.jsx)(eQ.A, { id: 'paywall.plus-benefit-music', values: { br: '\n', nbsp: '\xa0' } }),
                                    }),
                                ],
                            }),
                            (0, y.jsxs)('li', {
                                className: lE().service,
                                children: [
                                    (0, y.jsx)(lN, { className: lE().serviceLogo, 'aria-hidden': !0 }),
                                    (0, y.jsx)(er.DZ, {
                                        variant: 'h2',
                                        size: 'm',
                                        className: lE().serviceLabel,
                                        children: (0, y.jsx)(eQ.A, { id: 'paywall.plus-benefit-kinopoisk', values: { br: '\n', nbsp: '\xa0' } }),
                                    }),
                                ],
                            }),
                            (0, y.jsxs)('li', {
                                className: lE().service,
                                children: [
                                    (0, y.jsx)(lf, { className: lE().serviceLogo, 'aria-hidden': !0 }),
                                    (0, y.jsx)(er.DZ, {
                                        variant: 'h2',
                                        size: 'm',
                                        className: lE().serviceLabel,
                                        children: (0, y.jsx)(eQ.A, { id: 'paywall.plus-benefit-books', values: { br: '\n' } }),
                                    }),
                                ],
                            }),
                            (0, y.jsxs)('li', {
                                className: lE().service,
                                children: [
                                    (0, y.jsx)(lk, { className: lE().serviceLogo, 'aria-hidden': !0 }),
                                    (0, y.jsx)(er.DZ, {
                                        variant: 'h2',
                                        size: 'm',
                                        className: lE().serviceLabel,
                                        children: (0, y.jsx)(eQ.A, { id: 'paywall.plus-benefit-cashback', values: { br: '\n', nbsp: '\xa0' } }),
                                    }),
                                ],
                            }),
                        ],
                    }),
                lP = (e) => {
                    let { className: t } = e,
                        {
                            settings: { browserInfo: a },
                            paywall: i,
                        } = (0, N.g)(),
                        l = (0, tq.j)(),
                        n = (0, t3.usePathname)(),
                        s = !a.isTouch && (n === lA.Z.pay.href || i.freemiumCollectionBarrier);
                    return (0, y.jsxs)('section', {
                        className: (0, eL.$)(lE().root, t),
                        'data-test-id': q.e8.paywall.PAYWALL_TOP_SECTION,
                        children: [
                            (0, y.jsxs)('div', {
                                className: lE().main,
                                children: [
                                    (0, y.jsx)($.I, { variant: 'yandexPlus'.concat(l), className: (0, eL.$)(lE().logo, lE()['logo_'.concat(l.toLowerCase())]) }),
                                    (0, y.jsx)(er.DZ, {
                                        variant: 'h1',
                                        size: 'xxxl',
                                        weight: 'bold',
                                        className: lE().title,
                                        children: (0, y.jsx)(eQ.A, { id: 'paywall.open-plus-benefits', values: { br: '\n', nbsp: '\xa0' } }),
                                    }),
                                    (0, y.jsx)(lM, {}),
                                    (0, y.jsx)(iw, { className: lE().buySubscriptionBlock, shouldShowFixed: !0 }),
                                    s &&
                                        (0, y.jsx)(iv.N, {
                                            className: lE().goHomeLink,
                                            href: '/',
                                            children: (0, y.jsx)(er.HL, {
                                                variant: 'span',
                                                size: 'm',
                                                weight: 'medium',
                                                children: (0, y.jsx)(eQ.A, { id: 'navigation.go-home' }),
                                            }),
                                        }),
                                ],
                            }),
                            (0, y.jsx)(iC, {
                                'data-test-id': q.e8.paywall.PAYWALL_MORE_INFO_LINK,
                                children: (0, y.jsx)(tF._V, {
                                    src: 'https://avatars.mds.yandex.net/get-music-misc/49997/img.68eeb31b8fcfeb05fbb439da/orig',
                                    srcSet: 'https://avatars.mds.yandex.net/get-music-misc/49997/img.68eeb33c5566813399938412/orig',
                                    fit: 'contain',
                                    className: lE().moreInfoChildren,
                                    'aria-hidden': !0,
                                    'data-test-id': q.e8.paywall.PAYWALL_MORE_INFO_LINK,
                                }),
                            }),
                        ],
                    });
                };
            var lO = a(51416),
                lw = a.n(lO),
                lR = a(49124);
            let lD = (e) => {
                let { className: t } = e,
                    {
                        settings: { browserInfo: a },
                        paywall: i,
                    } = (0, N.g)(),
                    l = (0, tq.j)(),
                    n = (0, t3.usePathname)(),
                    s = !a.isTouch && (n === lA.Z.pay.href || i.freemiumCollectionBarrier),
                    r = lR.env.ASSET_PREFIX || '',
                    o = ''.concat(r, '/media/paywall_family_offer/family_offer.mp4'),
                    c = ''.concat(r, '/media/paywall_family_offer/family_offer.png');
                return (0, y.jsxs)('section', {
                    className: (0, eL.$)(lw().root, t),
                    'data-test-id': q.e8.paywall.PAYWALL_TOP_SECTION,
                    children: [
                        (0, y.jsxs)('div', {
                            className: lw().main,
                            children: [
                                (0, y.jsx)('div', {
                                    className: lw().logoWrap,
                                    children: (0, y.jsx)($.I, {
                                        variant: 'musicLogoCenter'.concat(l),
                                        className: (0, eL.$)(lw().logo, lw()['logo_'.concat(l.toLowerCase())]),
                                    }),
                                }),
                                (0, y.jsx)('video', {
                                    preload: 'metadata',
                                    loop: !0,
                                    autoPlay: !0,
                                    muted: !0,
                                    playsInline: !0,
                                    disablePictureInPicture: !0,
                                    width: 1e3,
                                    height: 1e3,
                                    src: o,
                                    poster: c,
                                    className: lw().video,
                                }),
                                (0, y.jsxs)('div', {
                                    className: lw().textBlock,
                                    children: [
                                        (0, y.jsx)(er.DZ, {
                                            variant: 'h1',
                                            size: 'xxxl',
                                            weight: 'bold',
                                            className: lw().title,
                                            children: (0, y.jsx)(eQ.A, { id: 'paywall.family-offer-title', values: { br: '\n', nbsp: '\xa0' } }),
                                        }),
                                        (0, y.jsx)(er.HL, {
                                            variant: 'p',
                                            size: 'm',
                                            weight: 'bold',
                                            className: lw().subtitle,
                                            children: (0, y.jsx)(eQ.A, { id: 'paywall.family-offer-text', values: { br: '\n' } }),
                                        }),
                                        (0, y.jsx)(iw, { className: lw().buySubscriptionBlock, shouldShowFixed: !0, hasColumnLayout: !0 }),
                                        s &&
                                            (0, y.jsx)(iv.N, {
                                                className: lw().goHomeLink,
                                                href: '/',
                                                children: (0, y.jsx)(er.HL, {
                                                    variant: 'span',
                                                    size: 'm',
                                                    weight: 'medium',
                                                    children: (0, y.jsx)(eQ.A, { id: 'navigation.go-home' }),
                                                }),
                                            }),
                                    ],
                                }),
                            ],
                        }),
                        (0, y.jsx)(iC, {
                            'data-test-id': q.e8.paywall.PAYWALL_MORE_INFO_LINK,
                            children: (0, y.jsx)(tF._V, {
                                src: 'https://avatars.mds.yandex.net/get-music-misc/49997/img.68eeb31b8fcfeb05fbb439da/orig',
                                srcSet: 'https://avatars.mds.yandex.net/get-music-misc/49997/img.68eeb33c5566813399938412/orig',
                                fit: 'contain',
                                className: lw().moreInfoChildren,
                                'aria-hidden': !0,
                                'data-test-id': q.e8.paywall.PAYWALL_MORE_INFO_LINK,
                            }),
                        }),
                    ],
                });
            };
            var lB = a(48980),
                lF = a.n(lB);
            let lU = (e) => {
                    let { children: t } = e,
                        {
                            settings: { isMobile: a, browserInfo: i },
                        } = (0, N.g)();
                    return a || i.isTablet
                        ? (0, y.jsx)(er.HL, { variant: 'span', size: 'm', className: lF().benefitLabelMobile, children: t })
                        : (0, y.jsx)(er.DZ, { variant: 'h2', size: 'm', className: lF().benefitLabelDesktop, children: t });
                },
                lz = () => {
                    let {
                            settings: { isMobile: e, browserInfo: t },
                        } = (0, N.g)(),
                        { formatMessage: a } = (0, Y.A)(),
                        i = a(e || t.isTablet ? { id: 'paywall.music-benefit-all-in-one-mobile' } : { id: 'paywall.music-benefit-all-in-one-desktop' }, {
                            br: '\n',
                            nbsp: '\xa0',
                        });
                    return (0, y.jsxs)('ul', {
                        className: lF().benefits,
                        children: [
                            (0, y.jsxs)('li', {
                                className: lF().benefit,
                                children: [
                                    (0, y.jsx)(tF._V, {
                                        className: lF().benefitLogo,
                                        src: 'https://avatars.mds.yandex.net/get-music-misc/2413828/img.693ad41840fb42546cc35e13/orig',
                                        srcSet: 'https://avatars.mds.yandex.net/get-music-misc/28592/img.693ad43c40fb42546cc35e15/orig',
                                    }),
                                    (0, y.jsx)(lU, { children: (0, y.jsx)(eQ.A, { id: 'paywall.music-benefit-audio', values: { nbsp: '\xa0' } }) }),
                                ],
                            }),
                            (0, y.jsxs)('li', {
                                className: (0, eL.$)(lF().benefit, lF().benefit_recommendation),
                                children: [
                                    (0, y.jsx)(tF._V, {
                                        className: lF().benefitLogo,
                                        src: 'https://avatars.mds.yandex.net/get-music-misc/40584/img.693ad52e40fb42546cc35e1a/orig',
                                        srcSet: 'https://avatars.mds.yandex.net/get-music-misc/40584/img.693ad53793461475f95b4f50/orig',
                                    }),
                                    (0, y.jsx)(lU, { children: (0, y.jsx)(eQ.A, { id: 'paywall.music-benefit-recommendation', values: { nbsp: '\xa0' } }) }),
                                ],
                            }),
                            (0, y.jsxs)('li', {
                                className: lF().benefit,
                                children: [
                                    (0, y.jsx)(tF._V, {
                                        className: lF().benefitLogo,
                                        src: 'https://avatars.mds.yandex.net/get-music-misc/2413828/img.693ad56040fb42546cc35e1c/orig',
                                        srcSet: 'https://avatars.mds.yandex.net/get-music-misc/2413828/img.693ad56640fb42546cc35e1e/orig',
                                    }),
                                    (0, y.jsx)(lU, { children: (0, y.jsx)(eQ.A, { id: 'paywall.music-benefit-without-network', values: { nbsp: '\xa0' } }) }),
                                ],
                            }),
                            (0, y.jsxs)('li', {
                                className: lF().benefit,
                                children: [
                                    (0, y.jsx)(tF._V, {
                                        className: lF().benefitLogo,
                                        src: 'https://avatars.mds.yandex.net/get-music-misc/28592/img.693ad56e621a600def9091d8/orig',
                                        srcSet: 'https://avatars.mds.yandex.net/get-music-misc/28592/img.693ad57632413276cc433bf8/orig',
                                    }),
                                    (0, y.jsx)(lU, { children: i }),
                                ],
                            }),
                        ],
                    });
                },
                lW = (e) => {
                    let { className: t } = e,
                        {
                            settings: { browserInfo: a },
                            paywall: i,
                        } = (0, N.g)(),
                        l = (0, tq.j)(),
                        n = (0, t3.usePathname)(),
                        s = !a.isTouch && (n === lA.Z.pay.href || i.freemiumCollectionBarrier);
                    return (0, y.jsxs)('section', {
                        className: (0, eL.$)(lF().root, t),
                        'data-test-id': q.e8.paywall.PAYWALL_TOP_SECTION,
                        children: [
                            (0, y.jsxs)('div', {
                                className: lF().main,
                                children: [
                                    (0, y.jsx)($.I, { variant: 'musicLogoCenter'.concat(l), className: (0, eL.$)(lF().logo, lF()['logo_'.concat(l.toLowerCase())]) }),
                                    (0, y.jsx)(er.DZ, {
                                        variant: 'h1',
                                        size: 'xxxl',
                                        weight: 'bold',
                                        className: lF().title,
                                        children: (0, y.jsx)(eQ.A, { id: 'paywall.music-benefits-title', values: { br: '\n', nbsp: '\xa0' } }),
                                    }),
                                    (0, y.jsx)(lz, {}),
                                    (0, y.jsx)(iw, { className: lF().buySubscriptionBlock, shouldShowFixed: !0 }),
                                    s &&
                                        (0, y.jsx)(iv.N, {
                                            className: lF().goHomeLink,
                                            href: '/',
                                            children: (0, y.jsx)(er.HL, {
                                                variant: 'span',
                                                size: 'm',
                                                weight: 'medium',
                                                children: (0, y.jsx)(eQ.A, { id: 'navigation.go-home' }),
                                            }),
                                        }),
                                ],
                            }),
                            (0, y.jsx)(iC, {
                                'data-test-id': q.e8.paywall.PAYWALL_MORE_INFO_LINK,
                                children: (0, y.jsx)(tF._V, {
                                    src: 'https://avatars.mds.yandex.net/get-music-misc/49997/img.68eeb31b8fcfeb05fbb439da/orig',
                                    srcSet: 'https://avatars.mds.yandex.net/get-music-misc/49997/img.68eeb33c5566813399938412/orig',
                                    fit: 'contain',
                                    className: lF().moreInfoChildren,
                                    'aria-hidden': !0,
                                    'data-test-id': q.e8.paywall.PAYWALL_MORE_INFO_LINK,
                                }),
                            }),
                        ],
                    });
                },
                lK = { family_offer: (0, y.jsx)(lD, {}), default: (0, y.jsx)(lP, {}) },
                lH = () => {
                    var e;
                    let t = lp(),
                        { experiments: a } = (0, N.g)(),
                        i = (null == (e = a.getExperiment(T.z.WebNextPaywallTopSection)) ? void 0 : e.group) || 'default';
                    return (0, y.jsxs)(y.Fragment, {
                        children: [
                            t ? (0, y.jsx)(lW, {}) : lK[i] || lK.default,
                            (0, y.jsx)(ib, { className: az().section }),
                            (0, y.jsx)(ip, { className: az().section }),
                            (0, y.jsx)(ly, { className: az().section }),
                            (0, y.jsx)(iT, { className: az().section }),
                            (0, y.jsx)(lg, { className: az().section }),
                            (0, y.jsx)(a8, { className: az().section_faq, variant: aB.RU }),
                            (0, y.jsx)(ia, { variant: aB.RU }),
                        ],
                    });
                };
            var lV = a(97030),
                lY = a.n(lV);
            let lq = (e) => {
                    let { className: t, variant: a = aB.RU } = e,
                        i = (0, tq.j)();
                    return (0, y.jsx)('div', {
                        'data-test-id': q.e8.paywall.MOBILE_PAYWALL_BOOKS_SECTION,
                        children: (0, y.jsx)(iq, {
                            className: t,
                            contentClassName: lY()['content_'.concat(a)],
                            heading: (0, y.jsxs)(y.Fragment, {
                                children: [
                                    (0, y.jsx)($.I, { variant: 'yandexBooks'.concat(i), className: lY()['logo_'.concat(i.toLocaleLowerCase())] }),
                                    (0, y.jsx)(tU.q, {
                                        children: (0, y.jsx)(er.DZ, {
                                            variant: 'h2',
                                            children: (0, y.jsx)(eQ.A, { id: 'paywall.books-part-title', values: { nbsp: '\xa0' } }),
                                        }),
                                    }),
                                ],
                            }),
                            content: (0, y.jsxs)(y.Fragment, {
                                children: [
                                    (0, y.jsx)(iH, {
                                        className: lY().card,
                                        text: (0, y.jsx)(eQ.A, { id: 'paywall.books-part-benefit-switch-mobile', values: { nbsp: '\xa0' } }),
                                        imageSrc: 'https://avatars.mds.yandex.net/get-music-misc/69699/img.68c0128ad8f3372f64a885b4/orig',
                                        image2xSrc: 'https://avatars.mds.yandex.net/get-music-misc/28052/img.68c012b2fbed8f7a98fb1441/orig',
                                    }),
                                    (0, y.jsx)(iH, {
                                        className: lY().card,
                                        text: (0, y.jsx)(eQ.A, { id: 'paywall.books-part-benefit-read-mobile', values: { nbsp: '\xa0' } }),
                                        imageSrc: 'https://avatars.mds.yandex.net/get-music-misc/40584/img.66f6ac99ed792c3f4a135afd/orig',
                                        image2xSrc: 'https://avatars.mds.yandex.net/get-music-misc/28592/img.66f6ac924e6e980968aa8463/orig',
                                    }),
                                    (0, y.jsx)(iH, {
                                        className: lY().card,
                                        text: (0, y.jsx)(eQ.A, { id: 'paywall.books-part-benefit-download-mobile', values: { nbsp: '\xa0' } }),
                                        imageSrc: 'https://avatars.mds.yandex.net/get-music-misc/40584/img.66f6aca698264a4b59f3a7be/orig',
                                        image2xSrc: 'https://avatars.mds.yandex.net/get-music-misc/70850/img.66f6ac9fcaf72c4bc9eaeaab/orig',
                                    }),
                                    (0, y.jsx)(iH, {
                                        className: lY().card,
                                        text: (0, y.jsx)(eQ.A, { id: 'paywall.books-part-benefit-speed-mobile', values: { nbsp: '\xa0' } }),
                                        imageSrc: 'https://avatars.mds.yandex.net/get-music-misc/30221/img.68c01296fbed8f7a98fb143c/orig',
                                        image2xSrc: 'https://avatars.mds.yandex.net/get-music-misc/70850/img.68c012bbd8f3372f64a885b9/orig',
                                    }),
                                ],
                            }),
                        }),
                    });
                },
                lQ = { family_offer: (0, y.jsx)(lD, {}), default: (0, y.jsx)(lP, {}) },
                l$ = () => {
                    var e;
                    let t = lp(),
                        { experiments: a } = (0, N.g)(),
                        i = (null == (e = a.getExperiment(T.z.WebNextPaywallTopSection)) ? void 0 : e.group) || 'default';
                    return (0, y.jsxs)(y.Fragment, {
                        children: [
                            t ? (0, y.jsx)(lW, {}) : lQ[i] || lQ.default,
                            (0, y.jsx)(i4, { className: az().section }),
                            (0, y.jsx)(i0, { className: az().section }),
                            (0, y.jsx)(lq, { className: az().section }),
                            (0, y.jsx)(i5, { className: az().section }),
                            (0, y.jsx)(a8, { className: az().section_faq, variant: aB.RU }),
                            (0, y.jsx)(ia, { variant: aB.RU }),
                        ],
                    });
                },
                lG = (0, h.PA)(() => {
                    let {
                        settings: { isMobile: e },
                    } = (0, N.g)();
                    return (0, y.jsx)('div', { className: l_().root, children: e ? (0, y.jsx)(l$, {}) : (0, y.jsx)(lH, {}) });
                }),
                lZ = { [aB.RU]: (0, y.jsx)(lG, {}), [aB.BY]: (0, y.jsx)(li, {}), [aB.OTHER]: (0, y.jsx)(ld, {}) },
                lX = (0, h.PA)((e) => {
                    let { useOverlayScroll: t = !0 } = e,
                        { user: a, experiments: i } = (0, N.g)(),
                        l = (0, aR.j)(),
                        n = (0, tb.L)(() =>
                            (0, y.jsx)('div', {
                                'data-buy-subscription-block-portal': !0,
                                className: az().root,
                                'data-test-id': q.e8.paywall.PAYWALL,
                                children: lZ[((e) => (e && aF[e]) || aB.OTHER)(a.account.data.geoRegionIso)],
                            }),
                        ),
                        s = (0, g.useMemo)(() => {
                            if (l.isContextDefined) return n;
                            let e = i.checkExperiment(T.z.WebNextPaywallSecondButton, 'on')
                                ? [tK.R.BLOCK_1, tK.R.BLOCK_2, tK.R.BOTTOM_BUTTON]
                                : [tK.R.BLOCK_1, tK.R.BOTTOM_BUTTON];
                            return (0, y.jsx)(tz.r, { page: tW.l.MUSIC_PAYWALL_SCREEN, places: e, children: n });
                        }, [l.isContextDefined, n, i]);
                    return t ? (0, y.jsx)(aw.C, { className: (0, eL.$)(az().overlayScroll, { [az().overlayScroll_desktop]: !0 }), children: s }) : s;
                });
            var lJ = a(21875),
                l0 = a.n(lJ);
            let l1 = (0, h.PA)(() => {
                let { paywall: e } = (0, N.g)(),
                    { formatMessage: t } = (0, Y.A)(),
                    a = (0, aO.e)(),
                    i = e.freemiumCollectionBarrier;
                return (
                    (0, g.useEffect)(() => {
                        e.modal.isOpened && (null == a || a.pause());
                    }, [e.modal.isOpened, a, !0]),
                    (0, y.jsxs)(f.a, {
                        open: e.modal.isOpened,
                        size: 'fullscreen',
                        placement: 'center',
                        showHeader: !1,
                        onClose: i ? void 0 : e.closeModal,
                        onOpenChange: e.onOpenChange,
                        closeOnOutsidePress: !1,
                        escapeKey: !i,
                        className: l0().root,
                        contentClassName: l0().content,
                        overlayColor: 'full',
                        'data-test-id': q.e8.paywallModal.PAYWALL_MODAL,
                        children: [
                            !i &&
                                (0, y.jsx)('header', {
                                    className: l0().header,
                                    children: (0, y.jsx)(Q.$, {
                                        radius: 'round',
                                        color: 'secondary',
                                        size: 'xxs',
                                        icon: (0, y.jsx)($.I, { variant: 'close', size: 'xxs' }),
                                        className: l0().closeButton,
                                        onClick: e.closeModal,
                                        'aria-label': t({ id: 'interface-actions.close' }),
                                        'data-test-id': q.e8.paywallModal.PAYWALL_MODAL_CLOSE_BUTTON,
                                    }),
                                }),
                            (0, y.jsx)(lX, {}),
                        ],
                    })
                );
            });
            var l2 = a(54667),
                l4 = a(29680),
                l3 = a(9536),
                l6 = a(37108),
                l5 = a(58534),
                l8 = a(94218),
                l9 = a(20994),
                l7 = a.n(l9);
            let ne = () =>
                (0, y.jsx)(l5.$, {
                    message: (0, y.jsx)(er.HL, {
                        className: l7().text,
                        variant: 'div',
                        type: 'controls',
                        size: 'm',
                        children: (0, y.jsx)(eQ.A, { id: 'onboarding.authorize-to-listen-full', values: { br: '\n', nbsp: ' ' } }),
                    }),
                    withDefaultCloseButton: !1,
                    closeButton: (0, y.jsx)(l8.H, {
                        className: l7().loginButton,
                        variant: 'text',
                        size: 'xxs',
                        withRipple: !1,
                        buttonText: (0, y.jsx)(eQ.A, { id: 'authorization.enter-button' }),
                    }),
                });
            var nt = a(47492),
                na = a.n(nt);
            let ni = (0, h.PA)((e) => {
                    let { closeToast: t } = e,
                        {
                            paywall: { modal: a },
                        } = (0, N.g)(),
                        i = (0, g.useCallback)(() => {
                            (a.open(), null == t || t());
                        }, [a, t]);
                    return (0, y.jsx)(l5.$, {
                        message: (0, y.jsx)(er.HL, {
                            className: na().text,
                            variant: 'div',
                            type: 'controls',
                            size: 'm',
                            children: (0, y.jsx)(eQ.A, { id: 'onboarding.try-plus-to-listen-full', values: { br: '\n', nbsp: ' ' } }),
                        }),
                        cover: (0, y.jsx)($.I, { className: na().icon, variant: 'plusColor' }),
                        coverRadius: 'round',
                        coverClassName: (0, eL.$)(na().cover, na().important),
                        withDefaultCloseButton: !1,
                        closeButton: (0, y.jsx)(Q.$, {
                            className: na().tryButton,
                            variant: 'text',
                            color: 'primary',
                            size: 'xxs',
                            onClick: i,
                            withRipple: !1,
                            children: (0, y.jsx)(eQ.A, { id: 'payment.try-button' }),
                        }),
                    });
                }),
                nl = () => {
                    let { freePlayerAccess: e } = (0, N.g)(),
                        { notify: t } = (0, en.l)();
                    (0, g.useEffect)(() => {
                        switch (e.shownRestrictionModal) {
                            case l6.h.FullscreenSubscription:
                                t((0, y.jsx)(ni, {}), { containerId: el.u.FULLSCREEN_INFO });
                                break;
                            case l6.h.FullscreenUnauthorized:
                                t((0, y.jsx)(ne, {}), { containerId: el.u.FULLSCREEN_INFO });
                                break;
                            default:
                                return;
                        }
                        e.hideRestrictionModal();
                    }, [e, e.shownRestrictionModal, t]);
                };
            var nn = a(20959),
                ns = a.n(nn),
                nr = a(86806),
                no = a(41932),
                nc = a(1456),
                nd = a(27616),
                nu = a(68912),
                n_ = a(20979);
            let nm = (0, g.createContext)({ difference: 0, isSingleTrackSwitch: !1 }),
                np = () => (0, g.useContext)(nm);
            var nv = a(27202),
                nx = a.n(nv),
                ny = a(49364);
            let nh = (0, h.PA)((e) => {
                let { children: t } = e,
                    {
                        fullscreenPlayer: {
                            playQueue: { itemsKeys: a, isDragAndDropEnabled: i },
                        },
                    } = (0, N.g)();
                return i ? (0, y.jsx)(ny.gB, { items: a, strategy: ny._G, children: t }) : t;
            });
            var nC = a(9480),
                ng = a(2355);
            let nA = (e) => {
                let t = (0, aO.e)(),
                    {
                        fullscreenPlayer: {
                            playQueue: { trackMap: a },
                        },
                    } = (0, N.g)(),
                    i = null == t ? void 0 : t.state.queueState.entityList.value,
                    l = null == i ? void 0 : i[e];
                if (!l) return null;
                let {
                        context: { data: n },
                    } = l,
                    s = a.get(String(l.entity.data.meta.id));
                return s ? { track: s, playContextParams: { contextData: n, queueParams: { index: e } } } : null;
            };
            var nb = a(18238),
                nf = a.n(nb);
            let nj = (0, h.PA)(
                    (0, g.forwardRef)((e, t) => {
                        let { children: a, 'data-index': i, className: l, ...n } = e,
                            { isDragging: s, listeners: r, setNodeRef: o, transform: c, transition: d, attributes: u } = (0, ny.gl)({ id: String(i) }),
                            _ = (0, g.useCallback)(
                                (e) => {
                                    (o(e), 'function' == typeof t && t(e));
                                },
                                [t, o],
                            ),
                            m = { transition: d, '--translate-y': c ? ''.concat(Math.round(c.y), 'px') : void 0 };
                        return (0, y.jsx)('div', {
                            ref: _,
                            'data-index': i,
                            style: m,
                            ...n,
                            className: (0, eL.$)(nf().root, l),
                            children: (0, y.jsx)('div', { ref: t, className: (0, eL.$)(nf().inner, { [nf().dragging]: s }), ...r, ...u, role: 'listitem', children: a }),
                        });
                    }),
                ),
                nN = (e) => {
                    let { index: t, isDragAndDropEnabled: a, blockRef: i, className: l, isRemoveAvailable: n, hideControls: s } = e,
                        r = (0, aO.e)(),
                        o = a && !s,
                        c = (0, g.useMemo)(() => {
                            let e = null == r ? void 0 : r.state.queueState.order.value.indexOf(t);
                            return 'number' == typeof e ? [e] : [];
                        }, [t, null == r ? void 0 : r.state.queueState.order.value]),
                        d = nA(t),
                        u = null == d ? void 0 : d.track,
                        _ = null == d ? void 0 : d.playContextParams,
                        m = (0, ng.i)(null != u ? u : null, nC.N.HIDE, c),
                        p = (0, b.c)(() => {
                            (m(), (null == i ? void 0 : i.current) && i.current.focus());
                        }),
                        v = (0, tb.L)(() =>
                            u && _
                                ? (0, y.jsx)(eD.K, {
                                      track: u,
                                      playContextParams: _,
                                      className: l,
                                      withDNDBlock: o,
                                      handleRemove: n ? p : void 0,
                                      withSecondaryColor: !0,
                                      hideControls: s,
                                  })
                                : null,
                        );
                    return v ? (o ? (0, y.jsx)(nj, { 'data-index': t, children: v }) : v) : null;
                };
            var nT = a(36894),
                nS = a.n(nT),
                nI = a(58359),
                nk = a(19529),
                nL = a(62386),
                nE = a(65068),
                nM = a(64605),
                nP = a(52138),
                nO = a(20982),
                nw = a(68243),
                nR = a(83778),
                nD = a(9152),
                nB = a(53512),
                nF = a(92382);
            let nU = (e) => !!(e && 'object' == typeof e && ('playlistUuid' in e || 'playlistTitle' in e));
            var nz = (function (e) {
                return ((e.Artist = 'artist'), (e.Playlist = 'playlist'), (e.Album = 'album'), (e.Track = 'track'), e);
            })({});
            let nW = () => {
                    let { formatMessage: e } = (0, Y.A)(),
                        {
                            experiments: t,
                            sonataState: { entityMeta: a },
                            vibe: i,
                        } = (0, N.g)(),
                        l = (0, aO.e)(),
                        n = null == l ? void 0 : l.state.currentContext.value,
                        s = null == n ? void 0 : n.data.meta,
                        r = null == l ? void 0 : l.state.queueState.currentEntity.value,
                        o = null == a ? void 0 : a.mainArtist,
                        c = (null == n ? void 0 : n.data.type) === ew.K.Artist ? n.data.meta.artist : void 0,
                        d = (null == c ? void 0 : c.name) ? c : o,
                        u = null == a ? void 0 : a.mainAlbum,
                        _ = null == a ? void 0 : a.isPodcast,
                        m = (function () {
                            let e = (0, aO.e)(),
                                t = null == e ? void 0 : e.state.queueState.currentEntity.value;
                            return (0, g.useMemo)(
                                () =>
                                    (function (e) {
                                        if (!e) return { title: void 0, type: void 0, sourceContextType: void 0 };
                                        let t = e.data.sourceContextType;
                                        if ((0, nD.F)(e)) {
                                            let a = e.data.meta.title;
                                            if (a) return { title: a, type: ew.K.Album, sourceContextType: t };
                                        }
                                        if ((0, nF.K)(e)) {
                                            let a = e.data.meta.title;
                                            if (a) return { title: a, type: ew.K.Playlist, sourceContextType: t };
                                        }
                                        if ((0, nB.T)(e)) {
                                            var a;
                                            let i = null == (a = e.data.meta.artist) ? void 0 : a.name;
                                            if (i) return { title: i, type: ew.K.Artist, sourceContextType: t };
                                        }
                                        return { title: void 0, type: void 0, sourceContextType: t };
                                    })(null == t ? void 0 : t.sourceContext),
                                [null == t ? void 0 : t.sourceContext],
                            );
                        })(),
                        p = (0, tb.L)(() => {
                            if (m.type)
                                return (function (e) {
                                    let { sourceType: t, sourceContext: a } = e;
                                    if (a)
                                        switch (t) {
                                            case ew.K.Album: {
                                                if (!(0, nD.F)(a)) return;
                                                let e = a.data.meta.id;
                                                if (!e) return;
                                                let { href: t } = (0, nw.u)('/album/:albumId', { params: { albumId: String(e) } });
                                                return t;
                                            }
                                            case ew.K.Artist: {
                                                if (!(0, nB.T)(a)) return;
                                                let e = a.data.meta.id;
                                                if (!e) return;
                                                let { href: t } = (0, nw.u)('/artist/:artistId', { params: { artistId: String(e) } });
                                                return t;
                                            }
                                            case ew.K.Playlist: {
                                                if (!(0, nF.K)(a)) return;
                                                let e = a.data.meta.playlistUuid;
                                                if (!e) return;
                                                let { href: t } = (0, nw.u)('/playlists/:playlistUuid', { params: { playlistUuid: e } });
                                                return t;
                                            }
                                            default:
                                                return;
                                        }
                                })({ sourceType: m.type, sourceContext: null == r ? void 0 : r.sourceContext });
                            switch (null == n ? void 0 : n.data.type) {
                                case ew.K.Vibe:
                                    var e;
                                    return ((e, t) => {
                                        var a, i;
                                        let l = (0, nL.i)(t) ? (null == t ? void 0 : t.data.parentContext) : null,
                                            n = (0, nL.i)(t) ? (null == t ? void 0 : t.data.parentContextId) : null;
                                        if (l || n)
                                            switch (e) {
                                                case nz.Artist: {
                                                    let { href: e } = (0, nw.u)('/artist/:artistId', {
                                                        params: { artistId: (null != (a = null == l ? void 0 : l.data.meta.id) ? a : n) || '' },
                                                    });
                                                    return e;
                                                }
                                                case nz.Playlist: {
                                                    let e = null == l ? void 0 : l.data.meta,
                                                        t = nU(e) ? e.playlistUuid : n;
                                                    if (!t) return;
                                                    let { href: a } = (0, nw.u)('/playlists/:playlistUuid', { params: { playlistUuid: String(t) } });
                                                    return a;
                                                }
                                                case nz.Album: {
                                                    if (!(null == l ? void 0 : l.data.meta.id) && !n) return;
                                                    let { href: e } = (0, nw.u)('/album/:albumId', {
                                                        params: { albumId: (null != (i = null == l ? void 0 : l.data.meta.id) ? i : n) || '' },
                                                    });
                                                    return e;
                                                }
                                                case nz.Track: {
                                                    if (!n) return;
                                                    if (String(n).includes(':')) {
                                                        let [e, t] = String(n).split(':'),
                                                            { href: a } = (0, nw.u)('/album/:albumId/track/:trackId', { params: { albumId: e || '', trackId: t || '' } });
                                                        return a;
                                                    }
                                                    let { href: e } = (0, nw.u)('/track/:trackId', { params: { trackId: n } });
                                                    return e;
                                                }
                                                default:
                                                    return;
                                            }
                                    })(null == i || null == (e = i.meta) ? void 0 : e.stationType, n);
                                case ew.K.Artist: {
                                    if (!(null == d ? void 0 : d.id)) return;
                                    let { href: e } = (0, nw.u)('/artist/:artistId', { params: { artistId: String(d.id) } });
                                    return e;
                                }
                                case ew.K.Playlist: {
                                    if (!nU(s)) return;
                                    let { href: e } = (0, nw.u)('/playlists/:playlistUuid', { params: { playlistUuid: null == s ? void 0 : s.playlistUuid } });
                                    return e;
                                }
                                case ew.K.Album: {
                                    if (!(null == u ? void 0 : u.id)) return;
                                    let { href: e } = (0, nw.u)('/album/:albumId', { params: { albumId: u.id } });
                                    return e;
                                }
                                default:
                                    return;
                            }
                        }),
                        v = (0, tb.L)(() => {
                            if (m.title) return m.title;
                            switch (null == n ? void 0 : n.data.type) {
                                case ew.K.Vibe:
                                    var e, t;
                                    return ((e, t) => (t && e ? t : (0, y.jsx)(eQ.A, { id: 'entity-names.my-vibe' })))(
                                        null == i || null == (e = i.meta) ? void 0 : e.stationType,
                                        null == i || null == (t = i.meta) ? void 0 : t.title,
                                    );
                                case ew.K.Artist:
                                    return null == d ? void 0 : d.name;
                                case ew.K.Playlist:
                                    if (!nU(s)) return;
                                    return null == s ? void 0 : s.title;
                                case ew.K.Album:
                                    return null == u ? void 0 : u.title;
                                case ew.K.Various:
                                    return (0, y.jsx)(eQ.A, { id: 'play-queue.now-playing' });
                                default:
                                    return (0, y.jsx)(eQ.A, { id: 'entity-names.my-vibe' });
                            }
                        }),
                        x = (0, tb.L)(() => {
                            if (m.type) {
                                let e = (function (e) {
                                    let { sourceType: t, sourceContext: a, sourceContextType: i } = e,
                                        l = (function (e) {
                                            switch (e) {
                                                case nR.h.SEARCH:
                                                    return (0, y.jsx)(eQ.A, { id: 'play-queue.now-playing-from-search' });
                                                case nR.h.DOWNLOADED_TRACKS:
                                                    return (0, y.jsx)(eQ.A, { id: 'play-queue.now-playing-from-downloads' });
                                                case nR.h.MUSIC_HISTORY:
                                                    return (0, y.jsx)(eQ.A, { id: 'play-queue.now-playing-from-history' });
                                                case nR.h.MUSIC_HISTORY_SEARCH:
                                                    return (0, y.jsx)(eQ.A, { id: 'play-queue.now-playing-from-history-search' });
                                                case nR.h.ARTIST_MY_COLLECTION:
                                                    return (0, y.jsx)(eQ.A, { id: 'play-queue.now-playing-from-artist-collection' });
                                                case nR.h.ARTIST_FAMILIAR_FROM_WAVE:
                                                    return (0, y.jsx)(eQ.A, { id: 'play-queue.now-playing-from-artist-wave' });
                                                default:
                                                    return;
                                            }
                                        })(i);
                                    if (l) return l;
                                    if (i === nR.h.BASED_ON_ENTITY_BY_DEFAULT || void 0 === i)
                                        switch (t) {
                                            case ew.K.Album:
                                                if ((0, nD.F)(a) && a.data.meta.type === nM._.PODCAST)
                                                    return (0, y.jsx)(eQ.A, { id: 'play-queue.now-playing-from-podcast' });
                                                return (0, y.jsx)(eQ.A, { id: 'play-queue.now-playing-from-album' });
                                            case ew.K.Artist:
                                                return (0, y.jsx)(eQ.A, { id: 'play-queue.now-playing-from-artist-popular-tracks' });
                                            case ew.K.Playlist:
                                                return (0, y.jsx)(eQ.A, { id: 'play-queue.now-playing-from-playlist' });
                                        }
                                })({ sourceType: m.type, sourceContext: null == r ? void 0 : r.sourceContext, sourceContextType: m.sourceContextType });
                                if (e) return e;
                            }
                            switch (null == n ? void 0 : n.data.type) {
                                case ew.K.Vibe:
                                    var a, l;
                                    if (!t.checkExperiment(T.z.WebNextVibeDescription, 'on') || void 0 === (null == i || null == (a = i.meta) ? void 0 : a.description))
                                        return ((e, t) => {
                                            let a = (0, nL.i)(t) ? (null == t ? void 0 : t.data.parentContext) : null;
                                            switch (e) {
                                                case nz.Artist:
                                                    return (0, y.jsx)(eQ.A, { id: 'play-queue.now-playing-my-wave-by-artist' });
                                                case nz.Playlist:
                                                    return (0, y.jsx)(eQ.A, { id: 'play-queue.now-playing-my-wave-by-playlist' });
                                                case nz.Album:
                                                    if ((null == a ? void 0 : a.data.type) === nM._.PODCAST)
                                                        return (0, y.jsx)(eQ.A, { id: 'play-queue.now-playing-my-wave-by-podcast' });
                                                    return (0, y.jsx)(eQ.A, { id: 'play-queue.now-playing-my-wave-by-album' });
                                                case nz.Track:
                                                    return (0, y.jsx)(eQ.A, { id: 'play-queue.now-playing-my-wave-by-track' });
                                                default:
                                                    return (0, y.jsx)(eQ.A, { id: 'play-queue.now-playing' });
                                            }
                                        })(null == i || null == (l = i.meta) ? void 0 : l.stationType, n);
                                    if (null == i ? void 0 : i.isMyVibe) return e({ id: 'play-queue.now-playing' });
                                    return e({ id: 'play-queue.now-playing-by-entity' }, { entity: null == i ? void 0 : i.meta.getDescription() });
                                case ew.K.Artist:
                                    return (0, y.jsx)(eQ.A, { id: 'play-queue.now-playing-from-artist-popular-tracks' });
                                case ew.K.Playlist:
                                    return (0, y.jsx)(eQ.A, { id: 'play-queue.now-playing-from-playlist' });
                                case ew.K.Album:
                                    if (_) return (0, y.jsx)(eQ.A, { id: 'play-queue.now-playing-from-podcast' });
                                    return (0, y.jsx)(eQ.A, { id: 'play-queue.now-playing-from-album' });
                                default:
                                    return;
                            }
                        }),
                        h = (0, tb.L)(() => ((0, nE.p)(n) ? (0, y.jsx)(eQ.A, { id: 'entity-names.my-vibe' }) : v));
                    return {
                        url: p,
                        title: v,
                        subTitle: x,
                        vibeBlockTitle: h,
                        vibeBlockSubTitle: (0, tb.L)(() => {
                            switch (null == n ? void 0 : n.data.type) {
                                case ew.K.Artist:
                                    return (0, y.jsx)(eQ.A, { id: 'play-queue.my-wave-by-artist' });
                                case ew.K.Playlist:
                                    return (0, y.jsx)(eQ.A, { id: 'play-queue.my-wave-by-playlist' });
                                case ew.K.Album:
                                    return (0, y.jsx)(eQ.A, { id: 'play-queue.my-wave-by-album' });
                                default:
                                    return;
                            }
                        }),
                        vibeBlockAgent: (0, tb.L)(() => {
                            var e, t, a;
                            switch (null == n ? void 0 : n.data.type) {
                                case ew.K.Album:
                                    return (0, nO.K)({ animationUri: '', cover: { uri: n.data.meta.coverUri }, entity: { type: nP.h.ALBUM } });
                                case ew.K.Artist:
                                    return (0, nO.K)({
                                        animationUri: '',
                                        cover: { uri: null == (t = n.data.meta.artist) || null == (e = t.cover) ? void 0 : e.uri },
                                        entity: { type: nP.h.ARTIST },
                                    });
                                case ew.K.Playlist:
                                    return (0, nO.K)({
                                        animationUri: '',
                                        cover: { uri: null == (a = n.data.meta.cover) ? void 0 : a.uri },
                                        entity: { type: nP.h.PLAYLIST },
                                    });
                                case ew.K.Various:
                                    return (0, nO.K)({
                                        animationUri: '',
                                        cover: { uri: 'avatars.mds.yandex.net/get-music-misc/2419084/img.686688add03ee35062c02822/%%' },
                                        entity: { type: nP.h.TRACK },
                                    });
                            }
                        }),
                    };
                },
                nK = { src: '/_next/static/media/vibeCover.c55d574d.png' };
            var nH = a(21325),
                nV = a.n(nH);
            let nY = (0, h.PA)(() => {
                    let { experiments: e } = (0, N.g)(),
                        t = (0, aO.e)(),
                        { vibeBlockTitle: a, vibeBlockSubTitle: i, vibeBlockAgent: l } = nW(),
                        n = (0, g.useCallback)(
                            (e) => {
                                ((0, nI.P)(e, nV().ripple), null == t || t.moveForward());
                            },
                            [t],
                        ),
                        s = (0, tb.L)(() =>
                            e.checkExperiment(T.z.WebNextWaveAgentExperiment, 'on') && l
                                ? (0, y.jsx)(nk.n, { agent: l, shouldShowControl: !1 })
                                : (0, y.jsx)(tF._V, {
                                      src: nK.src,
                                      className: nV().vibeCover,
                                      fit: 'cover',
                                      'aria-hidden': !0,
                                      'data-test-id': q.e8.player.PLAY_QUEUE_VIBE_BLOCK_IMAGE,
                                  }),
                        );
                    return (0, y.jsxs)('div', {
                        className: nV().root,
                        onClick: n,
                        'data-test-id': q.e8.player.PLAY_QUEUE_VIBE_BLOCK,
                        children: [
                            s,
                            (0, y.jsxs)('div', {
                                children: [
                                    (0, y.jsx)(er.HL, {
                                        variant: 'div',
                                        size: 'm',
                                        className: nV().title,
                                        'data-test-id': q.e8.player.PLAY_QUEUE_VIBE_BLOCK_TITLE,
                                        children: a,
                                    }),
                                    (0, y.jsx)(er.HL, {
                                        variant: 'div',
                                        size: 'm',
                                        className: nV().vibeTitle,
                                        'data-test-id': q.e8.player.PLAY_QUEUE_VIBE_BLOCK_VIBE_TITLE,
                                        children: i,
                                    }),
                                ],
                            }),
                        ],
                    });
                }),
                nq = (0, h.PA)(() => {
                    var e;
                    let {
                            fullscreenPlayer: {
                                playQueue: { afterTracksIds: t, isVibeBlockShowed: a, isDragAndDropEnabled: i, currentIndex: l },
                            },
                            sonataState: { isContextRepeatMode: n, isVibeContext: s },
                        } = (0, N.g)(),
                        r = (0, aO.e)(),
                        o = null == r ? void 0 : r.state.queueState.order.value,
                        c = null != (e = null == r ? void 0 : r.state.queueState.livePlayableIndex.value) ? e : 0,
                        d = null == r ? void 0 : r.state.queueState.entityList.value,
                        { isMovingForward: u, isMovingBackward: _, difference: m, isSingleTrackSwitch: p } = np(),
                        v = l - m,
                        x = (0, g.useId)(),
                        h = (0, g.useRef)(null);
                    return n && 0 === t.length
                        ? (0, y.jsx)('div', { className: nS().root, 'data-test-id': q.e8.player.PLAY_QUEUE_AFTER_PLAYING_BLOCK })
                        : (0, y.jsxs)('div', {
                              className: nS().root,
                              'data-test-id': q.e8.player.PLAY_QUEUE_AFTER_PLAYING_BLOCK,
                              children: [
                                  (0, y.jsx)(er.HL, {
                                      variant: 'div',
                                      size: 'm',
                                      className: (0, eL.$)(nS().title, { [nS().title_withDnD]: i }),
                                      'data-test-id': q.e8.player.PLAY_QUEUE_AFTER_PLAYING_BLOCK_TITLE,
                                      children: (0, y.jsx)(eQ.A, { id: 'play-queue.next-in' }),
                                  }),
                                  (0, y.jsx)(nh, {
                                      children: (0, y.jsxs)('div', {
                                          tabIndex: 0,
                                          ref: h,
                                          className: (0, eL.$)(nS().animatedContent, {
                                              [nS().animatedContent_moveToTop]: u,
                                              [nS().animatedContent_moveFromTop]: _ && !p,
                                              [nS().animatedContent_moveFromTopSingleTrack]: _ && p,
                                          }),
                                          children: [
                                              t.map((e) => {
                                                  let t = ((e) => {
                                                      var t, a;
                                                      let { index: i, order: l, livePlayableIndex: n, isVibeContext: s, entityList: r } = e,
                                                          o = null != (a = null == l ? void 0 : l.indexOf(i)) ? a : -1,
                                                          c = !!(null == r || null == (t = r[i]) ? void 0 : t.sourceContext);
                                                      return s && o > n && !c;
                                                  })({ index: e, order: o, livePlayableIndex: c, isVibeContext: s, entityList: d });
                                                  return (null == o ? void 0 : o[v]) === e
                                                      ? (0, y.jsx)(
                                                            'div',
                                                            {
                                                                className: nS().prevTrack,
                                                                children: (0, y.jsx)(
                                                                    nN,
                                                                    { index: e, isDragAndDropEnabled: i, isRemoveAvailable: !0, hideControls: t },
                                                                    e,
                                                                ),
                                                            },
                                                            x,
                                                        )
                                                      : (0, y.jsx)(nN, { index: e, isDragAndDropEnabled: i, blockRef: h, isRemoveAvailable: !0, hideControls: t }, e);
                                              }),
                                              a && (0, y.jsx)(nY, {}),
                                          ],
                                      }),
                                  }),
                              ],
                          });
                });
            var nQ = a(65804),
                n$ = a.n(nQ);
            let nG = (0, h.PA)((e) => {
                    let { forwardRef: t, scrollToNowPlayingBlock: a } = e,
                        {
                            fullscreenPlayer: {
                                playQueue: { beforeTracksIds: i, isDragAndDropEnabled: l, currentIndex: n },
                            },
                        } = (0, N.g)(),
                        s = (0, aO.e)(),
                        r = null == s ? void 0 : s.state.queueState.order.value;
                    (0, g.useEffect)(() => {
                        a();
                        let e = new ResizeObserver(() => a());
                        return (
                            'function' != typeof t && (null == t ? void 0 : t.current) && e.observe(t.current),
                            () => {
                                e.disconnect();
                            }
                        );
                    }, [t, a]);
                    let { isMovingForward: o, isMovingBackward: c, difference: d, isSingleTrackSwitch: u } = np(),
                        _ = n - d,
                        m = (0, g.useId)();
                    return (0, y.jsx)('div', {
                        className: n$().root,
                        ref: t,
                        children: (0, y.jsx)(nh, {
                            children: (0, y.jsx)('div', {
                                className: (0, eL.$)(n$().animatedContent, {
                                    [n$().animatedContent_moveToBottom]: c,
                                    [n$().animatedContent_moveFromBottom]: o && !u,
                                    [n$().animatedContent_moveFromBottomSingleTrack]: o && u,
                                }),
                                'data-test-id': q.e8.player.PLAY_QUEUE_BEFORE_PLAYING_BLOCK,
                                children:
                                    null == i
                                        ? void 0
                                        : i.map((e) =>
                                              (null == r ? void 0 : r[_]) === e
                                                  ? (0, y.jsx)(
                                                        'div',
                                                        {
                                                            className: n$().prevTrack,
                                                            children: (0, y.jsx)(nN, { index: e, isDragAndDropEnabled: l, isRemoveAvailable: !0 }, e),
                                                        },
                                                        m,
                                                    )
                                                  : (0, y.jsx)(nN, { index: e, isDragAndDropEnabled: l, isRemoveAvailable: !0 }, e),
                                          ),
                            }),
                        }),
                    });
                }),
                nZ = (0, g.forwardRef)((e, t) => (0, y.jsx)(nG, { forwardRef: t, ...e }));
            var nX = a(11386),
                nJ = a(79259),
                n0 = a(3313),
                n1 = a(46062),
                n2 = a.n(n1);
            let n4 = (e) => {
                    let { index: t } = e,
                        a = nA(t),
                        i = null == a ? void 0 : a.track,
                        l = null == a ? void 0 : a.playContextParams;
                    return i && l
                        ? (0, y.jsx)('div', {
                              className: n2().root,
                              children: (0, y.jsx)(eD.K, {
                                  track: i,
                                  playContextParams: l,
                                  draggingClassName: n2().dots,
                                  className: n2().noHoverItem,
                                  withDNDBlock: !0,
                                  isDragging: !0,
                                  withSecondaryColor: !0,
                              }),
                          })
                        : null;
                },
                n3 = (0, h.PA)((e) => {
                    let { children: t } = e,
                        {
                            fullscreenPlayer: {
                                playQueue: { isDragAndDropEnabled: a },
                            },
                        } = (0, N.g)(),
                        { activeId: i, handleDragStart: l, handleDragCancel: n, sensors: s } = (0, n0.Y)(),
                        r = (0, g.useCallback)((e) => {
                            let { active: t, over: a } = e;
                            if (!t.id || !(null == a ? void 0 : a.id)) return;
                        }, []),
                        o = (0, g.useMemo)(() => {
                            if (i)
                                return (0, iS.createPortal)(
                                    (0, y.jsx)(nX.Hd, { dropAnimation: { duration: 0 }, children: (0, y.jsx)(n4, { index: Number(i) }) }),
                                    window.document.body,
                                );
                        }, [i]);
                    return a
                        ? (0, y.jsxs)(nX.Mp, {
                              sensors: s,
                              collisionDetection: nX.fp,
                              onDragStart: l,
                              onDragEnd: r,
                              onDragCancel: n,
                              modifiers: [nJ.FN],
                              children: [t, o],
                          })
                        : t;
                });
            var n6 = a(33323),
                n5 = a(67288),
                n8 = a.n(n5);
            let n9 = (0, h.PA)(() => {
                let {
                        fullscreenPlayer: {
                            modal: e,
                            playQueue: { isDragAndDropEnabled: t },
                        },
                        sonataState: { isContextRepeatMode: a, isOneRepeatMode: i, shuffle: l },
                    } = (0, N.g)(),
                    { formatMessage: n } = (0, Y.A)(),
                    { url: s, title: r, subTitle: o } = nW(),
                    c = (0, n6.C)({ onClick: e.close }),
                    d = (0, g.useMemo)(() => {
                        let e = (0, y.jsx)(er.DZ, {
                            variant: 'h2',
                            size: 'm',
                            weight: 'bold',
                            lineClamp: 1,
                            className: (0, eL.$)(n8().heading, { [n8().heading_withOffset]: !o }),
                            'data-test-id': s ? void 0 : q.e8.player.PLAY_QUEUE_NOW_PLAYING_BLOCK_TITLE,
                            children: r,
                        });
                        return s
                            ? (0, y.jsx)(ag.N, {
                                  className: n8().title,
                                  containerClassName: n8().linkContainer,
                                  textClassName: n8().linkText,
                                  icon: (0, y.jsx)($.I, { className: n8().titleIcon, size: 'xs', variant: 'arrowRight' }),
                                  iconPosition: 'right',
                                  href: s,
                                  onClick: c,
                                  'data-test-id': q.e8.player.PLAY_QUEUE_NOW_PLAYING_BLOCK_TITLE,
                                  children: e,
                              })
                            : e;
                    }, [c, o, r, s]),
                    u = (0, tb.L)(() =>
                        a ? n({ id: 'play-queue.repeat-context' }) : i ? n({ id: 'play-queue.repeat-one' }) : l ? n({ id: 'play-queue.shuffle' }) : null,
                    );
                return (0, y.jsxs)('div', {
                    className: (0, eL.$)(n8().root, { [n8().root_withDnD]: t }),
                    children: [
                        (0, y.jsx)(er.HL, {
                            variant: 'div',
                            size: 'm',
                            className: n8().subTitle,
                            'data-test-id': q.e8.player.PLAY_QUEUE_NOW_PLAYING_BLOCK_SUBTITLE,
                            children: o,
                        }),
                        d,
                        (0, y.jsx)(er.HL, {
                            variant: 'div',
                            size: 'm',
                            className: n8().modeTitle,
                            'data-test-id': q.e8.player.PLAY_QUEUE_NOW_PLAYING_BLOCK_MODE_TITLE,
                            children: u,
                        }),
                    ],
                });
            });
            var n7 = a(90558),
                se = a.n(n7);
            let st = (0, h.PA)(() => {
                    var e, t;
                    let { from: a } = (0, eB.f)(),
                        {
                            fullscreenPlayer: {
                                playQueue: { currentIndex: i, isDragAndDropEnabled: l },
                            },
                            sonataState: { entityMeta: n },
                        } = (0, N.g)(),
                        { isMovingForward: s, isMovingBackward: r } = np(),
                        o = (0, aO.e)(),
                        c = null == o || null == (t = o.state.currentContext) || null == (e = t.value) ? void 0 : e.data;
                    if (!c || !n) return null;
                    let d = { contextData: { ...c, from: a }, queueParams: { index: i, entityId: n.id } };
                    return (0, y.jsxs)('div', {
                        className: se().root,
                        'data-test-id': q.e8.player.PLAY_QUEUE_NOW_PLAYING_BLOCK,
                        children: [
                            (0, y.jsx)(n9, {}),
                            (0, y.jsx)(eD.K, {
                                track: n,
                                playContextParams: d,
                                className: (0, eL.$)(se().track, se().important, {
                                    [se().track_withDnD]: l,
                                    [se().track_moveFromTop]: r,
                                    [se().track_moveFromBottom]: s,
                                }),
                                withSecondaryColor: !0,
                            }),
                        ],
                    });
                }),
                sa = () => {
                    let { style: e, contextValue: t } = (() => {
                            var e;
                            let {
                                    fullscreenPlayer: {
                                        playQueue: { updateTracks: t, hiddenTrackIds: a },
                                    },
                                } = (0, N.g)(),
                                i = (0, aO.e)(),
                                [l, n] = (0, g.useState)(),
                                s = (0, g.useRef)(void 0),
                                r = (0, g.useRef)(void 0),
                                o = (0, g.useRef)(void 0),
                                { state: c, handleDebouncedToggle: d } = (0, nr.F)({ delay: 600, throttleTimeout: 600 }),
                                { state: u, handleDebouncedToggle: _ } = (0, nr.F)({ delay: 600, throttleTimeout: 600 }),
                                m = (0, b.c)(() => {
                                    var e;
                                    let a = null == i ? void 0 : i.state.queueState.entityList.value,
                                        l = null == i ? void 0 : i.state.queueState.index.value,
                                        n = null == i ? void 0 : i.state.queueState.order.value,
                                        s = null == i || null == (e = i.state.currentContext.value) ? void 0 : e.data.type;
                                    a && 'number' == typeof l && n && s && t(a, l, n, s);
                                }),
                                p = (0, b.c)(() => {
                                    var e;
                                    let t = null == i ? void 0 : i.state.queueState.index.value,
                                        l = null == i || null == (e = i.state.currentContext.value) ? void 0 : e.data.type,
                                        c = s.current;
                                    if ('number' == typeof t && 'number' == typeof c) {
                                        let e = a.reduce((e, t) => (t < c ? e + 1 : e - 1), 0),
                                            i = t - c;
                                        o.current = i;
                                        let s = l !== r.current,
                                            u = 1 === Math.abs(i) ? i : i + e;
                                        i > 0 || s ? (d(), n(s ? 1 : u)) : i < 0 && (_(), n(u));
                                    }
                                    ((s.current = t), (r.current = l));
                                });
                            ((0, g.useEffect)(() => {
                                let e =
                                    null == i
                                        ? void 0
                                        : i.state.queueState.index.onChange(() => {
                                              (m(), p());
                                          });
                                return () => {
                                    null == e || e();
                                };
                            }, [p, m, null == i ? void 0 : i.state.queueState.index]),
                                (0, g.useEffect)(() => {
                                    let e = null == i ? void 0 : i.state.queueState.shuffle.onChange(m),
                                        t = null == i ? void 0 : i.state.queueState.entityList.onChange(m),
                                        a = null == i ? void 0 : i.state.queueState.order.onChange(m);
                                    return () => {
                                        (null == e || e(), null == t || t(), null == a || a());
                                    };
                                }, [
                                    m,
                                    null == i ? void 0 : i.state.queueState.entityList,
                                    null == i ? void 0 : i.state.queueState.index,
                                    null == i ? void 0 : i.state.queueState.order,
                                    null == i ? void 0 : i.state.queueState.shuffle,
                                ]));
                            let v = (0, g.useMemo)(() => {
                                    let e = 56 * (l || 1);
                                    return {
                                        '--play-queue-transition-duration-s': ''.concat(0.6, 's'),
                                        '--now-playing-title-height-px': ''.concat(90, 'px'),
                                        '--next-in-title-height-px': ''.concat(52, 'px'),
                                        '--track-height-px': ''.concat(56, 'px'),
                                        '--move-to-top-start-position': ''.concat(e, 'px'),
                                        '--move-from-top-start-position': ''.concat(e - 142, 'px'),
                                        '--move-to-bottom-start-position': ''.concat(e, 'px'),
                                        '--move-from-bottom-start-position': ''.concat(e + 52 + 90, 'px'),
                                        '--move-from-top-now-playing-block-start-position': ''.concat(e - 90, 'px'),
                                        '--move-from-bottom-now-playing-block-start-position': ''.concat(e + 52, 'px'),
                                    };
                                }, [l]),
                                x = 1 === Math.abs(null != l ? l : 0);
                            return {
                                style: v,
                                contextValue: { isMovingForward: c, isMovingBackward: u, difference: null != (e = o.current) ? e : 0, isSingleTrackSwitch: x },
                            };
                        })(),
                        a = (0, g.useRef)(null),
                        i = (0, g.useRef)(null),
                        { state: l, handleDebouncedToggle: n, reset: s } = (0, nr.F)({ delay: 1e4, throttleTimeout: 2e3 }),
                        r = (0, g.useCallback)(function () {
                            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 'instant';
                            if (i.current && a.current) {
                                let t = i.current.clientHeight;
                                a.current.scrollTo({ top: t, behavior: e });
                            }
                        }, []);
                    return (
                        (0, g.useEffect)(() => {
                            l || (r('smooth'), s());
                        }, [l, s, r]),
                        (0, g.useEffect)(() => {
                            let e = a.current;
                            return (
                                null == e || e.addEventListener('scroll', n),
                                () => {
                                    null == e || e.removeEventListener('scroll', n);
                                }
                            );
                        }, [n]),
                        (0, y.jsx)(n3, {
                            children: (0, y.jsx)(nm.Provider, {
                                value: t,
                                children: (0, y.jsx)('div', {
                                    className: nx().root,
                                    style: e,
                                    'data-test-id': q.e8.player.PLAY_QUEUE,
                                    children: (0, y.jsx)('div', {
                                        className: nx().content,
                                        ref: a,
                                        children: (0, y.jsxs)('div', {
                                            className: nx().scrollContent,
                                            children: [(0, y.jsx)(nZ, { ref: i, scrollToNowPlayingBlock: r }), (0, y.jsx)(st, {}), (0, y.jsx)(nq, {})],
                                        }),
                                    }),
                                }),
                            }),
                        })
                    );
                },
                si = (0, g.createContext)({});
            var sl = a(58178),
                sn = a.n(sl),
                ss = a(95520),
                sr = a.n(ss);
            let so = (0, h.PA)((e) => {
                let { className: t, icon: a } = e,
                    { sonataState: i } = (0, N.g)(),
                    l = (0, g.useCallback)(
                        (e) => {
                            let t = { animationDelay: ''.concat((e + 1) * 0.275, 's'), animationDuration: ''.concat(1.1, 's, ').concat(1.1, 's') };
                            return a
                                ? (0, g.cloneElement)(a, {
                                      className: (0, eL.$)(sr().element, sr().element_withIcon, { [sr().element_paused]: i.isPaused }),
                                      key: e,
                                      style: t,
                                  })
                                : (0, y.jsx)(
                                      'div',
                                      { className: (0, eL.$)(sr().element, sr().element_withDefaultElement, { [sr().element_paused]: i.isPaused }), style: t },
                                      e,
                                  );
                        },
                        [a, i],
                    );
                return (0, y.jsx)('div', { className: (0, eL.$)(sr().root, t), children: Array.from({ length: 4 }, (e, t) => l(t)) });
            });
            var sc = a(6005),
                sd = a(15875),
                su = a(81933),
                s_ = (function (e) {
                    return ((e.INTRO = 'intro'), (e.PREPARE = 'prepare'), (e.PLAYING = 'playing'), (e.OUTRO = 'outro'), e);
                })({}),
                sm = a(72676),
                sp = a(17416),
                sv = a.n(sp);
            let sx = (0, h.PA)(() => {
                var e, t, a;
                let { formatMessage: i } = (0, Y.A)(),
                    {
                        fullscreenPlayer: { syncLyrics: l },
                    } = (0, N.g)();
                return (0, y.jsxs)('footer', {
                    className: sv().root,
                    children: [
                        l.hasWriters &&
                            (0, y.jsx)(er.HL, {
                                className: sv().writers,
                                variant: 'div',
                                size: 'l',
                                weight: 'medium',
                                children: i({ id: 'entity-names.authors' }, { authors: null == (e = l.writers) ? void 0 : e.join(', ') }),
                            }),
                        (null == (t = l.major) ? void 0 : t.prettyName) &&
                            (0, y.jsx)(er.HL, {
                                className: sv().major,
                                variant: 'div',
                                size: 'l',
                                weight: 'medium',
                                children: i({ id: 'entity-names.source' }, { source: null == (a = l.major) ? void 0 : a.prettyName }),
                            }),
                    ],
                });
            });
            var sy = a(52930),
                sh = a.n(sy);
            let sC = (e) => {
                let { className: t, text: a } = e;
                return (0, y.jsx)('span', { className: (0, eL.$)(sh().root, t), children: a });
            };
            var sg = a(20418),
                sA = a.n(sg);
            let sb = (0, h.PA)((e) => {
                var t, a;
                let { state: i, progressPosition: l, shouldShowScrolledLyrics: n, setProgressPosition: s } = e,
                    r = (0, aO.e)(),
                    o = (0, sd.Mn)(),
                    {
                        fullscreenPlayer: { syncLyrics: c },
                    } = (0, N.g)(),
                    d = (0, g.useCallback)(
                        (e) => (t) => {
                            n &&
                                (t.stopPropagation(),
                                s(e + 0.01),
                                null == r ||
                                    r.setProgress(e + 0.01).catch(() => {
                                        s(l);
                                    }));
                        },
                        [l, s, n, r],
                    ),
                    u = c.getActiveLineIndex(l);
                return (
                    ((e) => {
                        let t = (0, g.useRef)(0),
                            {
                                fullscreenPlayer: { syncLyrics: a },
                                sonataState: { contextId: i, contextType: l },
                            } = (0, N.g)();
                        (0, g.useEffect)(() => {
                            !a.hasLyricsViewed &&
                                null !== e &&
                                'visible' === document.visibilityState &&
                                (t.current++, t.current >= 2 && a.sendViews({ contextId: i, contextType: l }));
                        }, [e, i, l, a]);
                    })(u),
                    (0, g.useEffect)(() => {
                        if (!n) {
                            if (((i === s_.INTRO || i === s_.PREPARE) && o.slideTo(0), i === s_.OUTRO)) {
                                var e;
                                o.slideTo(Number(null == (e = c.lines) ? void 0 : e.length));
                            }
                            null !== u && o.slideTo(u + 1);
                        }
                    }, [u, n, i, o, null == (t = c.lines) ? void 0 : t.length]),
                    null == (a = c.lines)
                        ? void 0
                        : a.map((e, t) => {
                              var a;
                              return (0, y.jsx)(
                                  sd.qr,
                                  {
                                      onClickCapture: d(e.fromSec),
                                      className: (0, eL.$)(sA().line, {
                                          [sA().line_last]: t === Number(null == (a = c.lines) ? void 0 : a.length) - 1 && !n,
                                          [sA().line_active]: t === u && !n,
                                      }),
                                      'data-test-id': q.e8.player.SYNC_LYRICS_LINE,
                                      children: (0, y.jsx)(sC, { text: e.text }),
                                  },
                                  e.key,
                              );
                          })
                );
            });
            sb.displayName = 'SwiperSlide';
            let sf = { forceToAxis: !0 },
                sj = (0, h.PA)(() => {
                    let {
                            fullscreenPlayer: { syncLyrics: e },
                            settings: { isMobile: t },
                        } = (0, N.g)(),
                        { progressPosition: a, setProgressPosition: i } = (() => {
                            var e;
                            let t = (0, aO.e)(),
                                [a, i] = (0, g.useState)(null != (e = null == t ? void 0 : t.state.playerState.progress.value.position) ? e : 0),
                                l = (0, g.useCallback)((e) => {
                                    i(e);
                                }, []);
                            return (
                                (0, g.useEffect)(() => {
                                    let e =
                                        null == t
                                            ? void 0
                                            : t.state.playerState.progress.onChange(() => {
                                                  i(t.state.playerState.progress.value.position);
                                              });
                                    return () => {
                                        null == e || e();
                                    };
                                }, [t]),
                                { progressPosition: a, setProgressPosition: l }
                            );
                        })(),
                        { state: l } = ((e) => {
                            let { position: t } = e,
                                {
                                    fullscreenPlayer: { syncLyrics: a },
                                } = (0, N.g)();
                            return {
                                state: (0, g.useMemo)(() => {
                                    let { startSec: e, endSec: i } = a;
                                    return e && e >= 3 && e - t > 0 && e - t <= 3 ? s_.PREPARE : e && e > t ? s_.INTRO : i && t > i ? s_.OUTRO : s_.PLAYING;
                                }, [t, a]),
                            };
                        })({ position: a }),
                        { scrollerClassName: n, footerClassName: s, counterClassName: r } = (0, g.useContext)(si),
                        { state: o, handleDebouncedToggle: c, reset: d } = (0, nr.F)({ delay: 3e3, throttleTimeout: 300 }),
                        { state: u, handleDebouncedToggle: _, reset: m } = (0, nr.F)({ delay: 3e3, throttleTimeout: 300 }),
                        p = (0, g.useCallback)(() => {
                            u || c();
                        }, [c, u]),
                        v = (0, g.useCallback)(() => {
                            (o && d(), _());
                        }, [_, d, o]),
                        x = (0, g.useCallback)(
                            (e) => {
                                switch (e.code) {
                                    case su.Y.KEY_L:
                                    case su.Y.KEY_J:
                                    case su.Y.ARROW_LEFT:
                                    case su.Y.ARROW_RIGHT:
                                        c();
                                }
                            },
                            [c],
                        ),
                        h = (0, g.useMemo)(() => (l === s_.PREPARE ? Math.ceil(Number(e.startSec) - a) : null), [a, l, e.startSec]),
                        C = (0, g.useMemo)(
                            () => (l === s_.PREPARE ? (0, y.jsx)(sC, { className: sA().counterLine, text: h }) : l === s_.INTRO ? (0, y.jsx)(so, {}) : null),
                            [h, l],
                        );
                    return (
                        ((e) => {
                            let { onSetProgressEventChange: t } = e,
                                a = (0, aO.e)();
                            (0, g.useEffect)(() => {
                                let e =
                                    null == a
                                        ? void 0
                                        : a.state.playerState.event.onChange((e) => {
                                              e === sm.Iu.SET_PROGRESS && t();
                                          });
                                return () => {
                                    null == e || e();
                                };
                            }, [t, a]);
                        })({ onSetProgressEventChange: m }),
                        (0, g.useEffect)(
                            () => (
                                window.addEventListener('keydown', x),
                                () => {
                                    window.removeEventListener('keydown', x);
                                }
                            ),
                            [x],
                        ),
                        (0, g.useEffect)(
                            () => (
                                window.addEventListener('mousemove', p),
                                () => {
                                    window.removeEventListener('mousemove', p);
                                }
                            ),
                            [p],
                        ),
                        (0, y.jsxs)(sd.RC, {
                            className: (0, eL.$)(
                                sA().root,
                                { [sA()['root_'.concat(l)]]: !u, [sA().root_withVisibleUpperLyrics]: o, [sA().root_withVisibleScrolledLyrics]: u },
                                n,
                            ),
                            modules: [sc.FJ, sc.U1],
                            slidesPerView: 'auto',
                            spaceBetween: 32,
                            direction: 'vertical',
                            mousewheel: sf,
                            freeMode: !0,
                            onScroll: v,
                            onTouchMove: t ? v : void 0,
                            allowTouchMove: t,
                            children: [
                                (0, y.jsx)(sd.qr, { className: (0, eL.$)(sA().counter, r), children: C }),
                                (0, y.jsx)(sb, { setProgressPosition: i, shouldShowScrolledLyrics: u, state: l, progressPosition: a }),
                                (0, y.jsx)(sd.qr, { className: s, children: (0, y.jsx)(sx, {}) }),
                            ],
                        })
                    );
                }),
                sN = (0, h.PA)((e) => {
                    let { className: t, counterClassName: a, footerClassName: i, scrollerClassName: l, contentClassName: n, loaderClassName: s } = e,
                        r = (0, g.useRef)(null),
                        {
                            sonataState: { entityMeta: o },
                            fullscreenPlayer: { syncLyrics: c, hideSyncLyrics: d },
                        } = (0, N.g)();
                    (0, g.useEffect)(() => {
                        c.currentTrackId !== (null == o ? void 0 : o.id) && (null == o ? void 0 : o.isSyncLyricsAvailable) && c.getData(null == o ? void 0 : o.id);
                    }, [null == o ? void 0 : o.isSyncLyricsAvailable, null == o ? void 0 : o.id, c]);
                    let u = (0, g.useMemo)(
                            () => (c.isResolved ? (0, y.jsx)(sj, {}) : ((c.isRejected || c.hasInvalidLyrics) && d(), (0, y.jsx)(so, { className: s }))),
                            [c.isResolved, c.isRejected, c.hasInvalidLyrics, c.setInvisible, s],
                        ),
                        _ = (0, g.useMemo)(() => ({ counterClassName: a, scrollerClassName: l, footerClassName: i }), [a, i, l]);
                    return (0, y.jsx)(si.Provider, {
                        value: _,
                        children: (0, y.jsx)('div', {
                            ref: r,
                            className: (0, eL.$)(sn().root, t),
                            children: (0, y.jsx)('div', { className: (0, eL.$)(sn().content, n), 'data-test-id': q.e8.player.SYNC_LYRICS_CONTENT, children: u }),
                        }),
                    });
                });
            var sT = a(11805),
                sS = a(61748),
                sI = a(4008),
                sk = a(85433),
                sL = a(3992),
                sE = a.n(sL);
            let sM = (0, h.PA)((e) => {
                    let {
                            className: t,
                            variant: a = 'text',
                            iconSize: i,
                            iconClassName: l,
                            withRipple: n = !1,
                            size: s = 's',
                            forwardRef: r,
                            children: o,
                            color: c,
                            disabled: d = !1,
                        } = e,
                        { formatMessage: u } = (0, Y.A)(),
                        {
                            fullscreenPlayer: { isPlayQueueMode: _, hidePlayQueue: m, showPlayQueue: p },
                        } = (0, N.g)(),
                        v = (0, g.useCallback)(() => (_ ? m() : p()), [m, _, p]),
                        { scaleAnimation: x, unscaleAnimation: h, handleAnimationEnd: C, handleClick: A } = (0, sk.C)({ shouldStartFromUnscale: _, onClick: v });
                    return (0, y.jsx)(Q.$, {
                        className: (0, eL.$)(sE().root, { [sE().animation_scaled]: x, [sE().animation_unscaled]: h }, t),
                        color: c,
                        onAnimationEnd: C,
                        withRipple: n,
                        variant: a,
                        size: s,
                        radius: 'xxxl',
                        'aria-label': u({ id: 'play-queue.title' }),
                        'aria-pressed': _,
                        onClick: A,
                        icon: (0, y.jsx)($.I, { size: i, className: (0, eL.$)(sE().icon, l, { [sE().icon_active]: _ }), variant: 'playQueue' }),
                        ref: r,
                        disabled: d,
                        'data-test-id': q.e8.player.FULLSCREEN_PLAYER_QUEUE_BUTTON,
                        children: o,
                    });
                }),
                sP = (0, g.forwardRef)((e, t) => (0, y.jsx)(sM, { forwardRef: t, ...e }));
            var sO = a(24554),
                sw = a.n(sO);
            let sR = (0, h.PA)((e) => {
                    let {
                            className: t,
                            variant: a = 'text',
                            iconSize: i,
                            iconClassName: l,
                            withRipple: n = !1,
                            size: s = 's',
                            forwardRef: r,
                            children: o,
                            color: c,
                            disabled: d = !1,
                        } = e,
                        { formatMessage: u } = (0, Y.A)(),
                        {
                            fullscreenPlayer: { isSyncLyricsMode: _, hideSyncLyrics: m, showSyncLyrics: p },
                        } = (0, N.g)(),
                        v = (0, g.useCallback)(() => (_ ? m() : p()), [m, _, p]),
                        { scaleAnimation: x, unscaleAnimation: h, handleAnimationEnd: C, handleClick: A } = (0, sk.C)({ shouldStartFromUnscale: _, onClick: v }),
                        b = ''.concat(u({ id: 'interface-actions.open-sync-lyrics' }), ' ').concat(u({ id: 'warning-messages.can-break-accessibility' }));
                    return (0, y.jsx)(Q.$, {
                        className: (0, eL.$)(sw().root, { [sw().animation_scaled]: x, [sw().animation_unscaled]: h }, t),
                        color: c,
                        onAnimationEnd: C,
                        withRipple: n,
                        variant: a,
                        size: s,
                        radius: 'xxxl',
                        'aria-label': b,
                        'aria-pressed': _,
                        onClick: A,
                        icon: (0, y.jsx)($.I, { size: i, className: (0, eL.$)(sw().icon, l, { [sw().icon_active]: _ }), variant: 'syncLyrics' }),
                        ref: r,
                        disabled: d,
                        'data-test-id': q.e8.player.PLAYERBAR_DESKTOP_SYNC_LYRICS_BUTTON,
                        children: o,
                    });
                }),
                sD = (0, g.forwardRef)((e, t) => (0, y.jsx)(sR, { forwardRef: t, ...e }));
            var sB = a(20142),
                sF = a.n(sB);
            let sU = (0, h.PA)(() => {
                var e;
                let [t, a] = (0, g.useState)(!1),
                    { sonataState: i, user: l } = (0, N.g)(),
                    { entityMeta: n } = i,
                    { handleDebouncedToggle: s } = (0, nr.F)({ delay: 1500, throttleTimeout: 300 }),
                    r = i.canSpeed && ((null == n ? void 0 : n.isNonMusic) || (null == n || null == (e = n.mainAlbum) ? void 0 : e.isNonMusic)),
                    o = (0, eZ.K)(n),
                    c = (0, g.useCallback)((e) => {
                        e.stopPropagation();
                    }, []),
                    d = (0, tb.L)(() => {
                        if ((null == n || !n.isRemoved) && (null == n ? void 0 : n.isAvailable))
                            return (0, y.jsx)(eG._, {
                                dismissSettings: { bubbles: { escapeKey: !1 } },
                                track: n,
                                open: t,
                                onOpenChange: a,
                                placement: 'left',
                                icon: (0, y.jsx)($.I, { variant: 'more', size: 'm' }),
                                className: (0, eL.$)(sF().menuButton, { [sF().menuButton_active]: t }),
                                wrapperClassName: sF().menuWrapper,
                                onClick: c,
                                size: 'l',
                                'data-test-id': q.e8.player.FULLSCREEN_PLAYER_CONTEXT_MENU_BUTTON,
                            });
                    }),
                    u = (0, g.useMemo)(() => {
                        if (null == n ? void 0 : n.isSyncLyricsAvailable)
                            return (0, y.jsx)(sD, {
                                className: sF().syncLyricsButton,
                                iconSize: 'm',
                                size: 'l',
                                variant: 'default',
                                color: 'secondary',
                                disabled: !l.isAuthorized,
                            });
                    }, [null == n ? void 0 : n.isSyncLyricsAvailable, l.isAuthorized]);
                return (
                    (0, g.useEffect)(
                        () => (
                            window.addEventListener('mousemove', s),
                            () => {
                                window.removeEventListener('mousemove', s);
                            }
                        ),
                        [s],
                    ),
                    (0, y.jsxs)('div', {
                        className: (0, eL.$)(sF().root, { [sF().root_visible]: t }),
                        children: [
                            (0, y.jsx)(sP, {
                                className: sF().playQueueButton,
                                iconSize: 'm',
                                size: 'l',
                                variant: 'default',
                                color: 'secondary',
                                disabled: !l.isAuthorized,
                            }),
                            (0, y.jsx)(sT.$, { className: sF().sonataControls, isMobile: !1, entityMeta: n, isFullscreen: !0 }),
                            d,
                            u,
                            (0, y.jsxs)('div', {
                                className: sF().bottomRightButtonsWrapper,
                                children: [
                                    r && (0, y.jsx)(sS.i, { className: sF().speedButton, size: 'l', iconSize: 'm', isIconCentered: !0 }),
                                    (0, y.jsx)(sI.WithOffline, {
                                        fallback: (0, y.jsx)(e4.c, {
                                            className: sF().likeButton,
                                            isLiked: null == n ? void 0 : n.isLiked,
                                            onClick: o,
                                            iconSize: 'm',
                                            size: 'l',
                                            variant: 'default',
                                            color: 'secondary',
                                            disabled: !l.isAuthorized,
                                        }),
                                    }),
                                ],
                            }),
                        ],
                    })
                );
            });
            var sz = a(86269),
                sW = a(11323),
                sK = a(55482),
                sH = a.n(sK);
            let sV = (e) => {
                let { className: t, children: a, coverUri: i } = e;
                return (0, y.jsxs)(sz.t, {
                    radius: 'm',
                    className: (0, eL.$)(sH().root, t),
                    'data-test-id': q.e8.player.FULLSCREEN_PLAYER_POSTER_CONTENT,
                    children: [(0, y.jsx)(sW.B, { className: sH().cover, src: i, size: 400, fit: 'cover', withAvatarReplace: !0 }), a],
                });
            };
            var sY = a(61802),
                sq = a.n(sY);
            let sQ = {
                    enter: sq().additionalContent_enter,
                    enterActive: sq().additionalContent_enter_active,
                    exit: sq().additionalContent_exit,
                    exitActive: sq().additionalContent_exit_active,
                    appear: sq().additionalContent_enter,
                    appearActive: sq().additionalContent_enter_active,
                },
                s$ = (e) => {
                    let { isModeActive: t, shouldDisableInsetTransition: a, children: i } = e,
                        l = (0, g.useRef)(null);
                    return (0, y.jsx)(aG.A, {
                        in: t,
                        nodeRef: l,
                        timeout: 800,
                        unmountOnExit: !0,
                        appear: !0,
                        classNames: sQ,
                        children: (0, y.jsx)('div', {
                            ref: l,
                            className: (0, eL.$)(sq().additionalContent, { [sq().additionalContent_withDisabledInsetTransition]: a }),
                            children: i,
                        }),
                    });
                },
                sG = (0, h.PA)(() => {
                    var e;
                    let { state: t, handleDebouncedToggle: a } = (0, nr.F)({ delay: 150, throttleTimeout: 100 }),
                        {
                            sonataState: { entityMeta: i },
                            fullscreenPlayer: l,
                        } = (0, N.g)(),
                        { state: n, toggleTrue: s } = (0, ey.e)(!1),
                        r = (null == i ? void 0 : i.isTrackPodcast) || (null == i || null == (e = i.mainAlbum) ? void 0 : e.isPodcast),
                        o = null == i ? void 0 : i.isTrackAudiobook,
                        c = {
                            [n_.u.PLAY_QUEUE]: { component: (0, y.jsx)(sa, {}), isActive: l.isPlayQueueMode },
                            [n_.u.SYNC_LYRICS]: {
                                component: (0, y.jsx)(sN, {
                                    className: sq().syncLyrics,
                                    loaderClassName: sq().syncLyricsLoader,
                                    contentClassName: sq().syncLyricsContent,
                                    scrollerClassName: sq().syncLyricsScroller,
                                    counterClassName: sq().syncLyricsCounter,
                                    footerClassName: sq().syncLyricsFooter,
                                }),
                                isActive: l.isSyncLyricsMode,
                            },
                        },
                        d = (0, g.useMemo)(
                            () =>
                                i
                                    ? o
                                        ? (0, y.jsx)(nc.Z, {
                                              hasLineClamp: !1,
                                              className: (0, eL.$)(sq().meta, { [sq().meta_isSplitMode]: l.isSplitMode }),
                                              titleContainerClassName: sq().title,
                                              track: i,
                                              withSecondaryColor: !0,
                                              captionSize: 'l',
                                              explicitSize: 'xs',
                                              withAuthor: !0,
                                              textClassName: (0, eL.$)(sq().nonMusicAuthors, sq().ellipsis),
                                              withContextMenuArtists: !0,
                                          })
                                        : r
                                          ? (0, y.jsx)(nd.w, {
                                                className: (0, eL.$)(sq().meta, { [sq().meta_isSplitMode]: l.isSplitMode }),
                                                titleContainerClassName: sq().title,
                                                track: i,
                                                withSecondaryColor: !0,
                                                withDate: !1,
                                                captionSize: 'l',
                                                explicitSize: 'xs',
                                                withPodcastName: !0,
                                                textClassName: sq().nonMusicAuthors,
                                            })
                                          : (0, y.jsx)(nu.j, {
                                                hasLineClamp: !1,
                                                className: (0, eL.$)(sq().meta, { [sq().meta_isSplitMode]: l.isSplitMode }),
                                                titleContainerClassName: sq().title,
                                                track: i,
                                                withSecondaryColor: !0,
                                                withAlbumLink: !1,
                                                captionSize: 'l',
                                                explicitSize: 'xs',
                                                withAllArtistsTitle: !0,
                                                artistsClassName: sq().artists,
                                                textClassName: sq().ellipsis,
                                                withContextMenuArtists: !0,
                                            })
                                    : null,
                            [i, null == i ? void 0 : i.id, r, o, l.isSplitMode],
                        );
                    return (
                        (0, g.useEffect)(
                            () => (
                                window.addEventListener('resize', a),
                                () => {
                                    window.removeEventListener('resize', a);
                                }
                            ),
                            [a],
                        ),
                        (0, g.useEffect)(() => {
                            l.isSplitMode && s();
                        }, [l.isSplitMode, l.mode, s]),
                        (0, g.useEffect)(
                            () => () => {
                                (l.reset(), l.playQueue.reset());
                            },
                            [l],
                        ),
                        (0, y.jsxs)('div', {
                            className: sq().root,
                            children: [
                                (0, y.jsxs)('div', {
                                    className: (0, eL.$)(sq().fullscreenContent, {
                                        [sq().fullscreenContent_withDisabledInsetTransition]: t,
                                        [sq().fullscreenContent_enter]: l.isSplitMode,
                                        [sq().fullscreenContent_leave]: !l.isSplitMode && n,
                                    }),
                                    'data-test-id': q.e8.player.FULLSCREEN_PLAYER_FULLSCREEN_CONTENT,
                                    children: [
                                        (0, y.jsx)(sV, {
                                            className: (0, eL.$)(sq().poster, sq().important),
                                            coverUri: null == i ? void 0 : i.coverUri,
                                            children: (0, y.jsx)(sU, {}),
                                        }),
                                        (0, y.jsxs)('div', {
                                            className: sq().info,
                                            children: [
                                                d,
                                                (0, y.jsx)(no.v, {
                                                    className: sq().sliderContainer,
                                                    sliderClassName: sq().slider,
                                                    disabled: !i,
                                                    isMobile: !1,
                                                    isFullscreen: l.isSplitMode,
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                                Object.entries(c).map((e) => {
                                    let [a, { component: i, isActive: l }] = e;
                                    return (0, y.jsx)(s$, { isModeActive: l, shouldDisableInsetTransition: t, children: i }, a);
                                }),
                            ],
                        })
                    );
                }),
                sZ = (0, h.PA)(() => {
                    let { formatMessage: e } = (0, Y.A)(),
                        {
                            currentTrackInfo: { modal: t },
                            sonataState: { entityMeta: a },
                            fullscreenPlayer: i,
                            fullscreenVideoPlayer: l,
                            advert: n,
                        } = (0, N.g)(),
                        s = (0, l3.K)(a);
                    (nl(),
                        (0, g.useEffect)(() => {
                            n.isAdvertShown && i.modal.close();
                        }, [n.isAdvertShown, i.modal]));
                    let r = !t.isOpened && !l.modal.isOpened;
                    return (0, y.jsxs)(f.a, {
                        className: (0, eL.$)(ns().root, ns().important),
                        open: i.modal.isOpened,
                        onOpenChange: r ? i.modal.onOpenChange : void 0,
                        onClose: i.modal.close,
                        size: 'fullscreen',
                        placement: 'center',
                        showHeader: !1,
                        style: s,
                        contentClassName: ns().modalContent,
                        closeOnOutsidePress: !1,
                        'data-test-id': q.e8.player.FULLSCREEN_PLAYER_MODAL,
                        children: [
                            (0, y.jsx)('header', {
                                className: ns().header,
                                children: (0, y.jsx)(Q.$, {
                                    className: ns().closeButton,
                                    radius: 'round',
                                    color: 'secondary',
                                    size: 'm',
                                    icon: (0, y.jsx)($.I, { variant: 'arrowDown', size: 'xs' }),
                                    onClick: i.modal.close,
                                    'aria-label': e({ id: 'interface-actions.close' }),
                                    'data-test-id': q.e8.player.FULLSCREEN_PLAYER_CLOSE_BUTTON,
                                }),
                            }),
                            (0, y.jsx)(sG, {}),
                            (0, y.jsx)(l4.Notification, {
                                className: ns().notification,
                                enableMultiContainer: !0,
                                containerId: el.u.FULLSCREEN_INFO,
                                position: 'bottom-center',
                            }),
                            (0, y.jsx)(l4.Notification, {
                                className: ns().notification,
                                enableMultiContainer: !0,
                                containerId: el.u.FULLSCREEN_ERROR,
                                position: 'bottom-center',
                            }),
                        ],
                    });
                });
            var sX = a(22333),
                sJ = a.n(sX),
                s0 = a(44782),
                s1 = a(77035),
                s2 = a(30839),
                s4 = a(73021),
                s3 = a(10910);
            let s6 = (0, h.PA)((e) => {
                var t, a, i, l;
                let { className: n, onSyncLyricsButtonClick: s } = e,
                    {
                        sonataState: r,
                        settings: { isLandscape: o },
                        fullscreenPlayer: { isSyncLyricsMode: c },
                        user: { hasPlus: d },
                    } = (0, N.g)(),
                    { formatMessage: u } = (0, Y.A)(),
                    [_, m] = (0, g.useState)(!1),
                    p = (0, s0.A)(),
                    v = (0, s1.e)(),
                    x = null === r.entityMeta,
                    h = (null == (t = r.entityMeta) ? void 0 : t.isNonMusic) || (null == (i = r.entityMeta) || null == (a = i.mainAlbum) ? void 0 : a.isNonMusic),
                    C = r.canSpeed && h,
                    A = (0, b.c)(() => {
                        v(r);
                    }),
                    f = (0, b.c)(() => {
                        p(r);
                    }),
                    j = (0, g.useMemo)(() => {
                        var e;
                        if (h) return;
                        let t = ''.concat(u({ id: 'interface-actions.open-sync-lyrics' }), ' ').concat(u({ id: 'warning-messages.can-break-accessibility' }));
                        return (0, y.jsx)(Q.$, {
                            className: (0, eL.$)(sJ().syncLyricsButton, { [sJ().syncLyricsButton_active]: c }),
                            radius: 'round',
                            size: 'xxxs',
                            variant: 'text',
                            disabled: !(null == (e = r.entityMeta) ? void 0 : e.isSyncLyricsAvailable) || o,
                            withRipple: !1,
                            withHover: !1,
                            'aria-label': t,
                            icon: (0, y.jsx)($.I, { variant: 'syncLyrics', size: 'xs' }),
                            onClick: s,
                        });
                    }, [u, h, c, s, o, null == (l = r.entityMeta) ? void 0 : l.isSyncLyricsAvailable]);
                return (0, y.jsx)('div', {
                    className: (0, eL.$)(sJ().footer, n),
                    children: (0, y.jsxs)('div', {
                        className: sJ().footerContainer,
                        children: [
                            (x || r.canChangeRepeatMode) && (0, y.jsx)(s2.s, { onClick: f, isDisabled: x, repeatMode: r.repeatMode, variant: 'text' }),
                            C && (0, y.jsx)(sS.i, { size: 'xxxs', iconSize: 'l' }),
                            (0, y.jsx)(s3.p$, { open: _, onOpenChange: m, icon: (0, y.jsx)($.I, { variant: 'settings', size: 'xs' }), size: 'xxxs', disabled: !d }),
                            j,
                            (x || r.canShuffle) && (0, y.jsx)(s4.u, { onClick: A, isDisabled: x, shuffle: r.shuffle, variant: 'text' }),
                        ],
                    }),
                });
            });
            var s5 = a(49582),
                s8 = a.n(s5);
            let s9 = {
                    enter: s8().coverWrapper_enter,
                    enterActive: s8().coverWrapper_enter_active,
                    exit: s8().coverWrapper_exit,
                    exitActive: s8().coverWrapper_exit_active,
                },
                s7 = (0, h.PA)((e) => {
                    var t;
                    let { className: a } = e,
                        i = (0, g.useRef)(null),
                        [l, n] = (0, g.useState)(!1),
                        { state: s, handleDebouncedToggle: r, reset: o } = (0, nr.F)({ delay: 7e3, throttleTimeout: 0 }),
                        {
                            fullscreenPlayer: { isSplitMode: c, isSyncLyricsMode: d, showSyncLyrics: u, hideSyncLyrics: _, isPlayQueueMode: m, syncLyrics: p },
                            sonataState: { entityMeta: v },
                            settings: { isLandscape: x },
                        } = (0, N.g)(),
                        h = (null == v ? void 0 : v.isTrackPodcast) || (null == v || null == (t = v.mainAlbum) ? void 0 : t.isPodcast),
                        C = null == v ? void 0 : v.isTrackAudiobook,
                        A = (s || !c || x) && !m,
                        b = (0, g.useCallback)(() => {
                            d && !x && (s ? o() : r());
                        }, [d, s, o, r, x]),
                        f = (0, g.useCallback)(() => {
                            d && !x && s && r();
                        }, [r, d, s, x]),
                        j = (0, g.useCallback)(() => {
                            if (null == v ? void 0 : v.isSyncLyricsAvailable) return d ? _() : u();
                        }, [null == v ? void 0 : v.isSyncLyricsAvailable, _, d, u]),
                        T = (0, g.useMemo)(() => {
                            if (v)
                                return C
                                    ? (0, y.jsx)(nc.Z, {
                                          textClassName: s8().metaText,
                                          track: v,
                                          withSecondaryColor: !0,
                                          captionSize: 'l',
                                          explicitSize: 'xs',
                                          withAuthor: !0,
                                          withContextMenuArtists: !0,
                                      })
                                    : h
                                      ? (0, y.jsx)(nd.w, {
                                            textClassName: s8().metaText,
                                            track: v,
                                            withSecondaryColor: !0,
                                            withDate: !1,
                                            captionSize: 'l',
                                            explicitSize: 'xs',
                                            withPodcastName: !0,
                                        })
                                      : (0, y.jsx)(nu.j, {
                                            textClassName: s8().metaText,
                                            track: v,
                                            withSecondaryColor: !0,
                                            withAlbumLink: !1,
                                            captionSize: 'l',
                                            explicitSize: 'xs',
                                            withAllArtistsTitle: !0,
                                            withContextMenuArtists: !0,
                                        });
                        }, [v, C, h]);
                    return (
                        (0, g.useEffect)(() => {
                            d && x && p.setInvisible();
                        }, [x, d, p]),
                        (0, g.useLayoutEffect)(() => {
                            d && !x && r();
                        }, [r, d, x]),
                        (0, y.jsxs)('div', {
                            onTouchEnd: f,
                            className: (0, eL.$)(s8().root, a),
                            children: [
                                (0, y.jsx)('div', {
                                    className: s8().content,
                                    children: (0, y.jsxs)('div', {
                                        className: s8().wrapper,
                                        children: [
                                            (0, y.jsxs)('div', {
                                                className: (0, eL.$)(s8().infoBlock, { [s8().infoBlock_withExpandedSyncLyrics]: !s && d && !x }),
                                                children: [
                                                    (0, y.jsxs)('div', {
                                                        onClick: b,
                                                        className: (0, eL.$)(s8().contentContainer, { [s8().contentContainer_withSplitMode]: c }),
                                                        children: [
                                                            d &&
                                                                !x &&
                                                                (0, y.jsx)(sN, {
                                                                    className: s8().syncLyrics,
                                                                    scrollerClassName: s8().syncLyricsScroller,
                                                                    contentClassName: s8().syncLyricsContent,
                                                                    loaderClassName: s8().syncLyricsLoader,
                                                                    footerClassName: s8().syncLyricsFooter,
                                                                    counterClassName: s8().syncLyricsCounter,
                                                                }),
                                                            m && (0, y.jsx)(sa, {}),
                                                            (0, y.jsx)(aG.A, {
                                                                in: !c || (x && d),
                                                                nodeRef: i,
                                                                timeout: 200,
                                                                unmountOnExit: !0,
                                                                classNames: s9,
                                                                children: (0, y.jsx)(sz.t, {
                                                                    ref: i,
                                                                    radius: 'm',
                                                                    className: s8().coverWrapper,
                                                                    children: (0, y.jsx)(sW.B, {
                                                                        className: s8().cover,
                                                                        src: null == v ? void 0 : v.coverUri,
                                                                        size: 400,
                                                                        fit: 'cover',
                                                                        withAvatarReplace: !0,
                                                                    }),
                                                                }),
                                                            }),
                                                        ],
                                                    }),
                                                    !m &&
                                                        (0, y.jsxs)('div', {
                                                            className: s8().trackInfo,
                                                            children: [
                                                                !s &&
                                                                    d &&
                                                                    !x &&
                                                                    (0, y.jsx)(sz.t, {
                                                                        className: s8().trackInfoCoverContainer,
                                                                        radius: 'xs',
                                                                        children: (0, y.jsx)(sW.B, {
                                                                            className: s8().trackInfoCover,
                                                                            src: null == v ? void 0 : v.coverUri,
                                                                            size: 200,
                                                                            fit: 'cover',
                                                                            withAvatarReplace: !0,
                                                                        }),
                                                                    }),
                                                                (0, y.jsxs)('div', {
                                                                    className: s8().metaContainer,
                                                                    children: [
                                                                        T,
                                                                        !(null == v ? void 0 : v.isRemoved) &&
                                                                            (null == v ? void 0 : v.isAvailable) &&
                                                                            (0, y.jsx)(eG._, {
                                                                                className: (0, eL.$)(s8().contextMenu, { [s8().contextMenu_visible]: l }),
                                                                                track: v,
                                                                                open: l,
                                                                                onOpenChange: n,
                                                                                placement: 'bottom',
                                                                                isFullscreenMobile: !0,
                                                                                size: 'xs',
                                                                                icon: (0, y.jsx)($.I, { variant: 'more', size: 'xxs' }),
                                                                                'data-test-id': q.e8.player.MOBILE_FULLSCREEN_PLAYER_CONTEXT_MENU_BUTTON,
                                                                            }),
                                                                    ],
                                                                }),
                                                            ],
                                                        }),
                                                ],
                                            }),
                                            A && (0, y.jsx)(no.v, { className: s8().timeline, disabled: !v, isMobile: !0, isFullscreen: !0, showThumbVariant: 'always' }),
                                            A && (0, y.jsx)(sT.$, { className: s8().buttonsBlock, isMobile: !0, entityMeta: v, isFullscreen: !0 }),
                                        ],
                                    }),
                                }),
                                A && (0, y.jsx)(s6, { onSyncLyricsButtonClick: j }),
                            ],
                        })
                    );
                });
            var re = a(60244),
                rt = a(51776),
                ra = a.n(rt);
            let ri = (0, h.PA)((e) => {
                    let { children: t, className: a } = e,
                        { url: i, title: l, subTitle: n } = nW(),
                        { fullscreenPlayer: s } = (0, N.g)(),
                        r = (0, b.c)((e) => {
                            (e.stopPropagation(), s.modal.isOpened && s.modal.close());
                        }),
                        o = (0, g.useMemo)(() => {
                            let e = (0, y.jsx)(er.HL, {
                                variant: 'span',
                                size: 'm',
                                className: ra().title,
                                lineClamp: 1,
                                'data-test-id': q.e8.player.MOBILE_PLAY_QUEUE_NOW_PLAYING_BLOCK_TITLE,
                                children: l,
                            });
                            return i ? (0, y.jsx)(ag.N, { href: i, target: '_self', onClick: r, className: ra().link, children: e }) : e;
                        }, [r, l, i]);
                    return (0, y.jsxs)('div', {
                        className: (0, eL.$)(ra().root, a),
                        'data-test-id': q.e8.player.MOBILE_PLAY_QUEUE_NOW_PLAYING_BLOCK,
                        children: [
                            (0, y.jsxs)('div', {
                                className: ra().textBlock,
                                children: [
                                    (0, y.jsx)(er.HL, {
                                        variant: 'span',
                                        size: 's',
                                        weight: 'normal',
                                        className: ra().subTitle,
                                        'data-test-id': q.e8.player.MOBILE_PLAY_QUEUE_NOW_PLAYING_BLOCK_SUBTITLE,
                                        children: n,
                                    }),
                                    o,
                                ],
                            }),
                            t,
                        ],
                    });
                }),
                rl = (0, h.PA)(() => {
                    let { formatMessage: e } = (0, Y.A)(),
                        {
                            fullscreenPlayer: { modal: t, showPlayQueue: a, isPlayQueueMode: i, hidePlayQueue: l },
                            user: n,
                        } = (0, N.g)(),
                        s = (0, g.useCallback)(() => (i ? l() : a()), [l, i, a]);
                    return (0, y.jsxs)('header', {
                        className: sJ().header,
                        children: [
                            (0, y.jsx)(Q.$, {
                                radius: 'round',
                                color: 'secondary',
                                size: 's',
                                variant: 'text',
                                icon: (0, y.jsx)($.I, { variant: 'arrowDown', size: 'xs' }),
                                onClick: t.close,
                                'aria-label': e({ id: 'interface-actions.close' }),
                                'data-test-id': q.e8.player.MOBILE_FULLSCREEN_PLAYER_CLOSE_BUTTON,
                            }),
                            (0, y.jsx)(ri, {
                                className: sJ().headerCenter,
                                children: (0, y.jsx)(re.k, {
                                    title: e({ id: 'player-actions.cast' }),
                                    description: e({ id: 'future-feature.message' }),
                                    children: (0, y.jsx)(Q.$, {
                                        className: sJ().castButton,
                                        radius: 'round',
                                        size: 's',
                                        variant: 'text',
                                        disabled: !0,
                                        withRipple: !1,
                                        'aria-label': e({ id: 'player-actions.cast' }),
                                        icon: (0, y.jsx)($.I, { variant: 'cast', size: 'xs' }),
                                    }),
                                }),
                            }),
                            (0, y.jsx)(Q.$, {
                                className: (0, eL.$)(sJ().playQueueButton, { [sJ().playQueueButton_active]: i }),
                                radius: 'round',
                                size: 's',
                                variant: 'text',
                                withRipple: !1,
                                withHover: !1,
                                'aria-label': e({ id: 'play-queue.title' }),
                                onClick: s,
                                icon: (0, y.jsx)($.I, { variant: 'playQueue', size: 'xs' }),
                                disabled: !n.isAuthorized,
                                'data-test-id': q.e8.player.MOBILE_FULLSCREEN_PLAYER_QUEUE_BUTTON,
                            }),
                        ],
                    });
                }),
                rn = (0, h.PA)(() => {
                    let {
                            sonataState: { entityMeta: e },
                            fullscreenPlayer: t,
                            advert: a,
                            settings: { isMobile: i },
                        } = (0, N.g)(),
                        l = (0, l3.K)(e);
                    return (
                        nl(),
                        (0, g.useEffect)(() => {
                            a.isAdvertShown && t.modal.close();
                        }, [a.isAdvertShown, t.modal]),
                        (0, y.jsxs)(f.a, {
                            className: (0, eL.$)(sJ().root, sJ().important),
                            open: t.modal.isOpened,
                            onOpenChange: t.modal.onOpenChange,
                            size: 'fullscreen',
                            placement: 'center',
                            showHeader: !1,
                            style: l,
                            contentClassName: sJ().modalContent,
                            lockScroll: i,
                            'data-test-id': q.e8.player.MOBILE_FULLSCREEN_PLAYER_MODAL,
                            children: [
                                (0, y.jsx)(rl, {}),
                                (0, y.jsx)(s7, {}),
                                (0, y.jsx)(l4.Notification, {
                                    className: sJ().notification,
                                    enableMultiContainer: !0,
                                    containerId: el.u.FULLSCREEN_INFO,
                                    position: 'bottom-center',
                                }),
                                (0, y.jsx)(l4.Notification, {
                                    className: sJ().notification,
                                    enableMultiContainer: !0,
                                    containerId: el.u.FULLSCREEN_ERROR,
                                    position: 'bottom-center',
                                }),
                            ],
                        })
                    );
                }),
                rs = (0, h.PA)(() => {
                    let {
                            settings: { isMobileLandscapeHeight: e, layout: t },
                        } = (0, N.g)(),
                        a = t === l2.u.Mobile;
                    return (!a && e) || a ? (0, y.jsx)(rn, {}) : (0, y.jsx)(sZ, {});
                });
            var rr = a(48955),
                ro = a(78305),
                rc = a(55332),
                rd = a(95329),
                ru = a(53022),
                r_ = a(22266),
                rm = a(2527),
                rp = a(6054),
                rv = a.n(rp);
            let rx = (0, h.PA)((e) => {
                let { className: t } = e,
                    {
                        advert: a,
                        user: i,
                        paywall: { modal: l },
                    } = (0, N.g)(),
                    n = a.isAdvertDisabled(r_.f.VIDEO),
                    { notify: s, dismiss: r } = (0, en.l)(),
                    { formatMessage: o } = (0, Y.A)(),
                    c = (0, ru.z)(),
                    d = (0, ro.r)(),
                    [u, _] = (0, g.useState)(!1),
                    m = (0, g.useRef)(null),
                    p = (0, g.useCallback)(
                        (e) => {
                            (e.stopPropagation(), e.preventDefault(), l.open(), _(!0), null == d || d.pauseVideoAdvert(), r());
                        },
                        [d, r, l],
                    );
                (0, g.useEffect)(() => {
                    u && !l.isOpened && (_(!1), null == d || d.resumeVideoAdvert());
                }, [d, u, l.isOpened]);
                let v = (0, g.useCallback)(() => {
                    s(
                        (0, y.jsx)(l5.$, {
                            className: rv().notify,
                            message: (0, y.jsx)(er.HL, {
                                className: rv().text,
                                variant: 'div',
                                type: 'controls',
                                size: 'm',
                                children: (0, y.jsx)(eQ.A, { id: 'ads.notification' }),
                            }),
                            cover: (0, y.jsx)($.I, { className: rv().icon, variant: 'plusColor' }),
                            coverRadius: 'round',
                            withDefaultCloseButton: !1,
                            coverClassName: (0, eL.$)(rv().cover, rv().important),
                            closeButton: (0, y.jsx)(Q.$, {
                                className: rv().notifyClose,
                                variant: 'text',
                                color: 'primary',
                                size: 'xxs',
                                onClick: p,
                                withRipple: !1,
                                ref: m,
                                'data-intersection-property-id': 'video-ad-button',
                                children: (0, y.jsx)(eQ.A, { id: 'ads.disable-ads' }),
                            }),
                        }),
                        { containerId: el.u.AD_INFO },
                    );
                }, [p, s]);
                if (
                    ((0, g.useEffect)(() => {
                        if (!i.hasPlus && !n)
                            return (
                                null == c ||
                                    c.addShortcutsListener(rd.M.MAIN, rc.l.CLOSE, () => {
                                        a.isAdvertShown && a.isVideoAdvert && v();
                                    }),
                                () => {
                                    null == c || c.removeShortcutsListener(rd.M.MAIN, rc.l.CLOSE);
                                }
                            );
                    }, [v, c, a.isAdvertShown, a.isVideoAdvert, i.hasPlus, n]),
                    i.hasPlus || n)
                )
                    return;
                let x = a.isAdvertShown && a.isVideoAdvert;
                return (0, y.jsxs)(y.Fragment, {
                    children: [
                        (0, y.jsx)(f.a, {
                            className: (0, eL.$)(rv().root, { [rv().root_hidden]: !x }, t),
                            contentClassName: rv().content,
                            placement: 'center',
                            showHeader: !1,
                            closeOnOutsidePress: !1,
                            escapeKey: !1,
                            withOverlay: x,
                            open: !0,
                            lockScroll: x,
                            overlayColor: 'full',
                            disableGuards: !x,
                            disableFocusTrap: !x,
                            'data-test-id': q.e8.ad.VIDEO_AD,
                            children: (0, y.jsxs)(y.Fragment, {
                                children: [
                                    (0, y.jsx)(Q.$, {
                                        className: rv().close,
                                        radius: 'round',
                                        color: 'secondary',
                                        size: 'xxs',
                                        icon: (0, y.jsx)($.I, { variant: 'close', size: 'xxs' }),
                                        onClick: v,
                                        'aria-label': o({ id: 'interface-actions.close-ad' }),
                                        withRipple: !1,
                                    }),
                                    (0, y.jsx)(rr.b, {
                                        data: a.data,
                                        mediaContent: (0, y.jsx)('div', {
                                            className: rv().videoBlock,
                                            id: rm.s.SLOT,
                                            children: (0, y.jsx)('video', { id: rm.s.VIDEO, className: rv().video }),
                                        }),
                                    }),
                                ],
                            }),
                        }),
                        (0, y.jsx)(l4.Notification, { enableMultiContainer: !0, containerId: el.u.AD_INFO, position: 'bottom-center' }),
                    ],
                });
            });
            rx.displayName = 'VideoAd';
            var ry = a(56755),
                rh = a(90153),
                rC = a(37240);
            let rg = () => {
                let e = (0, te.st)(),
                    t = (0, ti.U)(),
                    { hash: a } = (0, te.gf)(),
                    { pageId: i } = (0, rC.$)();
                return (0, g.useCallback)(
                    (l) => {
                        if (!e || !i) return;
                        let n = { hash: a, pageId: tt.W[i], mainObjectType: C.DomainObjectType.Trailer, mainObjectId: l },
                            s = (0, e9.F)({ params: n, logger: t, context: 'useSendEventOnTrailerClosed' });
                        s && (0, rh.XB)(e.evgenInstance, s);
                    },
                    [e, a, t, i],
                );
            };
            var rA = a(75783),
                rb = a(27576),
                rf = a(37862),
                rj = a(95226),
                rN = a(26042);
            let rT = () => {
                let e = (0, te.st)(),
                    t = (0, ti.U)(),
                    { hash: a } = (0, te.gf)(),
                    { pageId: i } = (0, rC.$)();
                return (0, g.useCallback)(
                    (l, n) => {
                        if (!e || !i) return;
                        let s = { hash: a, pageId: tt.W[i], mainObjectType: C.DomainObjectType.Trailer, mainObjectId: l };
                        n && ((s.actionType = C.ActionType.Pause), (s.userInteractionType = C.UserInteractionType.Tap));
                        let r = (0, e9.F)({ params: s, logger: t, context: 'useSendEventOnTrailerStarted' });
                        r &&
                            (n && ((e) => 'object' == typeof e && null !== e && 'actionType' in e && 'mainObjectId' in e)(r)
                                ? (0, rh.bv)(e.evgenInstance, r)
                                : (0, rh.e7)(e.evgenInstance, r));
                    },
                    [e, a, t, i],
                );
            };
            var rS = a(59170);
            let rI = (e) => {
                    let { variant: t, blockId: a, meta: i } = e,
                        l = ((e) => {
                            switch (e) {
                                case rS.H.ALBUM:
                                    return ta._Q.ALBUM;
                                case rS.H.ARTIST:
                                    return ta._Q.ARTIST;
                                case rS.H.PLAYLIST:
                                    return ta._Q.PLAYLIST;
                                case rS.H.TRACK:
                                    return ta._Q.TRACK;
                            }
                        })(t),
                        n = ((e) => {
                            switch (e) {
                                case rS.H.ALBUM:
                                    return ew.K.Album;
                                case rS.H.ARTIST:
                                    return ew.K.Artist;
                                case rS.H.PLAYLIST:
                                    return ew.K.Playlist;
                                case rS.H.TRACK:
                                default:
                                    return ew.K.Various;
                            }
                        })(t),
                        s = (null == i ? void 0 : i.uuid) || (null == i ? void 0 : i.id);
                    return (0, eB.f)({ pageId: l, blockId: a, contextId: s, contextType: n, pageEntityId: s });
                },
                rk = (e) => {
                    let { variant: t, id: a, from: i, uuid: l, utmLink: n } = e;
                    switch (t) {
                        case rS.H.ALBUM:
                            return { type: ew.K.Album, trailer: !0, meta: { id: Number(a) }, from: i, utmLink: n };
                        case rS.H.ARTIST:
                            return { type: ew.K.Artist, trailer: !0, meta: { id: String(a) }, from: i, utmLink: n };
                        case rS.H.PLAYLIST:
                            return { type: ew.K.Playlist, trailer: !0, meta: { id: String(a), uuid: l }, from: i, utmLink: n };
                        case rS.H.TRACK:
                            return { type: ew.K.Various, trailer: !0, meta: { id: String(a) }, from: i, utmLink: n };
                    }
                };
            var rL = a(5874),
                rE = a.n(rL);
            let rM = (0, h.PA)(() => {
                    let { trailer: e } = (0, N.g)(),
                        { variant: t, id: a } = e,
                        i = (0, g.useCallback)(() => {
                            if (t && a)
                                switch (t) {
                                    case rS.H.ALBUM:
                                        e.getAlbumTrailer(Number(a));
                                        break;
                                    case rS.H.ARTIST:
                                        e.getArtistTrailer(a);
                                        break;
                                    case rS.H.PLAYLIST:
                                        e.getPlaylistTrailer(a);
                                        break;
                                    case rS.H.TRACK:
                                        e.getTrackTrailer(a);
                                }
                        }, [a, e, t]);
                    return (0, y.jsxs)('div', {
                        className: rE().root,
                        children: [
                            (0, y.jsxs)('div', {
                                className: rE().textContainer,
                                children: [
                                    (0, y.jsx)(er.DZ, {
                                        variant: 'h2',
                                        className: rE().title,
                                        size: 'xs',
                                        weight: 'bold',
                                        children: (0, y.jsx)(eQ.A, { id: 'error-messages.something-went-wrong' }),
                                    }),
                                    (0, y.jsx)(er.HL, {
                                        className: rE().description,
                                        variant: 'span',
                                        type: 'text',
                                        size: 'l',
                                        weight: 'normal',
                                        children: (0, y.jsx)(eQ.A, { id: 'trailer.something-went-wrong-description' }),
                                    }),
                                ],
                            }),
                            (0, y.jsx)(Q.$, {
                                onClick: i,
                                color: 'secondary',
                                size: 'default',
                                radius: 'xxxl',
                                children: (0, y.jsx)(er.HL, { type: 'controls', variant: 'span', size: 'm', children: (0, y.jsx)(eQ.A, { id: 'page-error.reload' }) }),
                            }),
                        ],
                    });
                }),
                rP = () =>
                    (0, y.jsx)('div', {
                        className: rE().root,
                        children: (0, y.jsxs)('div', {
                            className: rE().textContainer,
                            children: [
                                (0, y.jsx)(er.DZ, {
                                    variant: 'h2',
                                    className: rE().title,
                                    size: 'xs',
                                    weight: 'bold',
                                    children: (0, y.jsx)(eQ.A, { id: 'trailer.not-found-title' }),
                                }),
                                (0, y.jsx)(er.HL, {
                                    className: rE().description,
                                    variant: 'span',
                                    type: 'text',
                                    size: 'l',
                                    weight: 'normal',
                                    children: (0, y.jsx)(eQ.A, { id: 'trailer.not-found-description' }),
                                }),
                            ],
                        }),
                    }),
                rO = () => {
                    let e = (0, te.st)(),
                        t = (0, ti.U)(),
                        { hash: a } = (0, te.gf)(),
                        { pageId: i } = (0, rC.$)();
                    return (0, g.useCallback)(
                        (l, n) => {
                            if (!e || !i) return;
                            let s = {
                                    hash: a,
                                    pageId: tt.W[i],
                                    mainObjectType: C.DomainObjectType.Trailer,
                                    mainObjectId: l,
                                    from: C.AppScreen.TrailerScreen,
                                    to: tt.W[n],
                                },
                                r = (0, e9.F)({ params: s, logger: t, context: 'useSendEventOnTrailerNavigated' });
                            r && (0, rh.Mu)(e.evgenInstance, r);
                        },
                        [e, a, t, i],
                    );
                },
                rw = {
                    [rS.H.ALBUM]: C.DomainObjectType.Album,
                    [rS.H.ARTIST]: C.DomainObjectType.Artist,
                    [rS.H.PLAYLIST]: C.DomainObjectType.Playlist,
                    [rS.H.TRACK]: C.DomainObjectType.Track,
                },
                rR = { [rS.H.ALBUM]: ta._Q.ALBUM, [rS.H.ARTIST]: ta._Q.ARTIST, [rS.H.PLAYLIST]: ta._Q.PLAYLIST };
            var rD = a(49630),
                rB = a.n(rD);
            let rF = (0, h.PA)((e) => {
                var t, a;
                let { variant: i, isShimmerVisible: l, isShimmerActive: n, className: s } = e,
                    {
                        trailer: { state: r, meta: o, modal: c, objectId: d, resetUtmLink: u, tracks: _ },
                        albumCPA: { isPlusCPAPlayerBarEnabled: m },
                        paywall: { modal: p },
                    } = (0, N.g)(),
                    v = (0, e1.N)(),
                    x = (0, aO.e)(),
                    { from: h } = rI({ variant: i, blockId: rf.U.TRAILER }),
                    C = rO(),
                    A = rg(),
                    b = (() => {
                        let e = (0, te.st)(),
                            t = (0, ti.U)(),
                            { hash: a } = (0, te.gf)(),
                            { pageId: i } = (0, rC.$)();
                        return (0, g.useCallback)(
                            (l, n) => {
                                if (!e || !i) return;
                                let s = { hash: a, pageId: tt.W[i], mainObjectType: l, mainObjectId: n },
                                    r = (0, e9.F)({ params: s, logger: t, context: 'useSendEventOnTrailerEntityStarted' });
                                r && (0, rh.e7)(e.evgenInstance, r);
                            },
                            [e, a, t, i],
                        );
                    })(),
                    f = (0, aa.Z)(null != (a = null == o ? void 0 : o.url) ? a : ''),
                    j = (0, g.useCallback)(() => {
                        f();
                        let e = rR[i];
                        e && C(d, e);
                    }, [f, d, C, i]),
                    T = ((e) => {
                        let {
                            trailer: { meta: t },
                            artist: a,
                            album: i,
                            playlist: l,
                        } = (0, N.g)();
                        switch (e) {
                            case rS.H.ALBUM:
                                return i.id === Number(null == t ? void 0 : t.id);
                            case rS.H.ARTIST:
                                return a.id === (null == t ? void 0 : t.id);
                            case rS.H.PLAYLIST:
                                return l.uuid === (null == t ? void 0 : t.uuid);
                            case rS.H.TRACK:
                                return !1;
                        }
                    })(i),
                    S = !T && i !== rS.H.TRACK,
                    I = m(
                        (function (e, t, a) {
                            if (e === rS.H.ALBUM && (null == t ? void 0 : t.id)) return Number(t.id);
                            if (e === rS.H.TRACK) {
                                var i;
                                return null == a || null == (i = a[0]) ? void 0 : i.albumId;
                            }
                        })(i, o, _),
                    ),
                    k = (0, g.useCallback)(() => {
                        var e, t, a, l;
                        if (v && !I) return void p.open();
                        let n =
                            null == x || null == (a = x.playbackController.activePlayback.value) || null == (t = a.state) || null == (e = t.currentContext.value)
                                ? void 0
                                : e.utmLink;
                        (null == x || x.stop(ry.V.TRAILER), u(), c.close(), A(d), S && j());
                        let s = r.status !== sm.MT.PLAYING || i === rS.H.ALBUM ? { index: 0 } : { entityId: null == (l = r.entityMeta) ? void 0 : l.id },
                            _ = ((e) => {
                                let { variant: t, id: a, from: i, uuid: l, utmLink: n } = e;
                                switch (t) {
                                    case rS.H.ALBUM:
                                        return { type: ew.K.Album, meta: { id: Number(a) }, from: i, utmLink: n };
                                    case rS.H.ARTIST:
                                        return { type: ew.K.Artist, meta: { id: String(a) }, from: i, utmLink: n };
                                    case rS.H.PLAYLIST:
                                        return { type: ew.K.Playlist, meta: { id: String(a), uuid: l }, from: i, utmLink: n };
                                    case rS.H.TRACK:
                                        return { type: ew.K.Various, meta: { id: String(a) }, from: i, utmLink: n };
                                }
                            })({ variant: i, id: null == o ? void 0 : o.id, uuid: null == o ? void 0 : o.uuid, from: h, utmLink: n });
                        null == x ||
                            x.playContext({ contextData: _, queueParams: s }).then(() => {
                                (null == o ? void 0 : o.id) && b(rw[i], o.id);
                            });
                    }, [
                        x,
                        u,
                        c,
                        A,
                        d,
                        S,
                        r.status,
                        null == (t = r.entityMeta) ? void 0 : t.id,
                        i,
                        null == o ? void 0 : o.id,
                        null == o ? void 0 : o.uuid,
                        h,
                        j,
                        b,
                        v,
                        I,
                        p,
                    ]),
                    L = (0, g.useMemo)(
                        () =>
                            (0, y.jsxs)('div', {
                                className: (0, eL.$)(rB().root, s),
                                children: [
                                    (0, y.jsx)(Q.$, {
                                        radius: 'xxxl',
                                        size: 'default',
                                        color: 'secondary',
                                        icon: (0, y.jsx)($.I, { variant: 'play', size: 'xxxs' }),
                                        className: rB().button,
                                        onClick: k,
                                        'data-test-id': q.e8.trailer.TRAILER_LISTEN_FULL_VERSION_BUTTON,
                                        children: (0, y.jsx)(eQ.A, { id: 'trailer.listen-full-version' }),
                                    }),
                                    S &&
                                        (0, y.jsx)(Q.$, {
                                            radius: 'xxxl',
                                            size: 'default',
                                            color: 'secondary',
                                            onClick: j,
                                            className: rB().button,
                                            'data-test-id': q.e8.trailer.TRAILER_NAVIGATE_TO_ENTITY_BUTTON,
                                            children: (0, y.jsx)(eQ.A, { id: 'trailer.navigate' }),
                                        }),
                                ],
                            }),
                        [s, k, j, S],
                    );
                return l
                    ? ((e) => {
                          let { isActive: t, className: a, isCurrentEntityPage: i } = e;
                          return (0, y.jsxs)('div', {
                              className: (0, eL.$)(rB().root, a),
                              children: [
                                  (0, y.jsx)(e_.W, { isActive: t, radius: 'xxxl', className: rB().playButtonShimmer }),
                                  i && (0, y.jsx)(e_.W, { isActive: t, radius: 'xxxl', className: rB().linkButtonShimmer }),
                              ],
                          });
                      })({ isActive: n, isCurrentEntityPage: T, className: s })
                    : L;
            });
            var rU = a(6759),
                rz = a(27478),
                rW = a(89384),
                rK = a(59833),
                rH = a(11260),
                rV = a(51675),
                rY = a(16754),
                rq = a.n(rY);
            let rQ = (0, h.PA)((e) => {
                var t;
                let { variant: a, isShimmerVisible: i, isShimmerActive: l, className: n } = e,
                    {
                        trailer: { meta: s, objectId: r, utmLink: o, personalColor: c, shareable: d, title: u, state: _ },
                        playlist: { shouldShowTrailerOnboarding: m, isRewind2024Playlist: p },
                    } = (0, N.g)(),
                    { from: v } = rI({ variant: a, blockId: rf.U.TRAILER, meta: s }),
                    x = rO(),
                    h = rT(),
                    C = (0, eJ.b)(),
                    A = a === rS.H.ARTIST ? 'round' : 's',
                    { notify: f } = (0, en.l)(),
                    j = (0, eX.P)(),
                    T = (0, y.jsx)(eQ.A, { id: 'onboarding.rewind-trailer', values: { br: (0, y.jsx)('br', {}) } }),
                    { togglePlay: S, isPlaying: I } = (0, e2.D)({
                        playContextParams: {
                            contextData: rk({ variant: a, id: null == s ? void 0 : s.id, uuid: null == s ? void 0 : s.uuid, from: v, utmLink: o }),
                            loadContextMeta: !0,
                        },
                        sonataState: _,
                        playbackId: ry.V.TRAILER,
                    }),
                    k = (0, b.c)(() => {
                        j() || (h(r, I), S(), C(!I));
                    }),
                    L = (0, g.useCallback)(() => {
                        let e = rR[a];
                        e && x(r, e);
                    }, [r, x, a]),
                    E = (0, rz.R)(c || 0),
                    M = (0, rU.m)(c || 0),
                    P = (0, g.useMemo)(() => {
                        let e, t;
                        return (
                            'number' == typeof c ? ((e = E), (t = M)) : (e = { '--trailer-color': null == s ? void 0 : s.averageColor }),
                            (0, y.jsxs)('div', {
                                className: rq().coverContainer,
                                'data-test-id': q.e8.trailer.TRAILER_COVER,
                                children: [
                                    (0, y.jsx)(sz.t, {
                                        radius: A,
                                        className: rq().cover,
                                        style: t,
                                        withShadow: !0,
                                        children: (0, y.jsx)(tF._V, {
                                            'aria-hidden': !0,
                                            src: null == s ? void 0 : s.coverUri,
                                            size: 100,
                                            fit: 'cover',
                                            withAvatarReplace: !0,
                                        }),
                                    }),
                                    (0, y.jsx)('div', {
                                        className: rq().iconContainer,
                                        style: e,
                                        children: (0, y.jsx)($.I, { variant: 'trailer', size: 'xs', className: rq().icon }),
                                    }),
                                ],
                            })
                        );
                    }, [A, null == s ? void 0 : s.coverUri, M, null == s ? void 0 : s.averageColor, c, E]),
                    O = (0, g.useMemo)(() => {
                        let e = null == s ? void 0 : s.url;
                        return e
                            ? (0, y.jsx)(ag.N, {
                                  href: e,
                                  className: rq().link,
                                  onClick: L,
                                  'data-test-id': q.e8.trailer.TRAILER_ENTITY_TITLE,
                                  children: (0, y.jsx)(er.HL, {
                                      variant: 'span',
                                      type: 'controls',
                                      lineClamp: 1,
                                      className: rq().text,
                                      children: null == s ? void 0 : s.title,
                                  }),
                              })
                            : (0, y.jsx)(er.HL, {
                                  variant: 'span',
                                  type: 'controls',
                                  lineClamp: 1,
                                  className: rq().text,
                                  'data-test-id': q.e8.trailer.TRAILER_ENTITY_TITLE,
                                  children: null == s ? void 0 : s.title,
                              });
                    }, [L, s]),
                    w = (0, g.useMemo)(
                        () =>
                            (0, y.jsxs)('div', {
                                className: rq().textContainer,
                                children: [
                                    (0, y.jsx)(er.DZ, {
                                        variant: 'h1',
                                        className: (0, eL.$)(rq().text, rq().title),
                                        lineClamp: 1,
                                        'data-test-id': q.e8.trailer.TRAILER_MODAL_TITLE,
                                        children: u,
                                    }),
                                    O,
                                ],
                            }),
                        [O, u],
                    ),
                    { pattern: R, params: D } = null != (t = null == s ? void 0 : s.getSharingProps(a)) ? t : { pattern: lA.Z.main.href, params: {} },
                    { shareLink: B } = (0, rW.b)(R, { params: D, query: { [lm.K.OPEN_TRAILER]: 'true' } }),
                    F = (0, g.useCallback)(async () => {
                        (await window.navigator.clipboard.writeText(B),
                            f(
                                (0, y.jsx)(rK.D, {
                                    entityTitle: null == s ? void 0 : s.title,
                                    entityVariant: ((e) => {
                                        switch (e) {
                                            case rS.H.ALBUM:
                                                return rV.Y.ALBUM;
                                            case rS.H.ARTIST:
                                                return rV.Y.ARTIST;
                                            case rS.H.PLAYLIST:
                                                return rV.Y.PLAYLIST;
                                            case rS.H.TRACK:
                                                return rV.Y.TRACK;
                                        }
                                    })(a),
                                }),
                                { containerId: el.u.INFO },
                            ));
                    }, [B, f, null == s ? void 0 : s.title, a]);
                return (0, y.jsxs)('div', {
                    className: (0, eL.$)(rq().root, n),
                    'data-test-id': q.e8.trailer.TRAILER_HEADER,
                    children: [
                        i ? (0, y.jsx)('div', { className: rq().coverContainer, children: (0, y.jsx)(e_.W, { isActive: l, radius: A, className: rq().cover }) }) : P,
                        i
                            ? ((e) =>
                                  (0, y.jsxs)('div', {
                                      className: rq().textContainer,
                                      children: [
                                          (0, y.jsx)('div', {
                                              className: rq().shimmerContainer,
                                              children: (0, y.jsx)(e_.W, { isActive: e, radius: 'xl', className: rq().titleShimmer }),
                                          }),
                                          (0, y.jsx)('div', {
                                              className: rq().shimmerContainer,
                                              children: (0, y.jsx)(e_.W, { isActive: e, radius: 'xl', className: rq().descriptionShimmer }),
                                          }),
                                      ],
                                  }))(l)
                            : w,
                        !i &&
                            d &&
                            (0, y.jsx)(Q.$, {
                                className: rq().share,
                                icon: (0, y.jsx)($.I, { variant: 'share', size: 'xxs' }),
                                onClick: F,
                                variant: 'text',
                                withRipple: !1,
                                withHover: !1,
                            }),
                        !i &&
                            (0, y.jsx)(rH.L, {
                                customMessage: p ? T : void 0,
                                shouldForceOpenTooltip: !!m,
                                children: (0, y.jsx)(e3.D, {
                                    className: rq().playButton,
                                    iconSize: 'm',
                                    variant: 'filled',
                                    isPlaying: I,
                                    iconClassName: rq().playButtonIcon,
                                    onClick: k,
                                }),
                            }),
                    ],
                });
            });
            var r$ = a(8677),
                rG = a(83521),
                rZ = a(92102),
                rX = a(8200),
                rJ = a.n(rX);
            let r0 = (0, h.PA)((e) => {
                let { track: t, albumArtists: a, position: i, playContextParams: l, withLightning: n, onPlayClick: s, onLikeClick: r, onDislikeClick: o } = e,
                    {
                        trailer: c,
                        settings: { isMobile: d },
                        album: u,
                    } = (0, N.g)(),
                    _ = (0, e2.D)({ playContextParams: l, entityId: t.entityId, sonataState: c.state, playbackId: ry.V.TRAILER }),
                    m = (0, g.useCallback)((e) => (0, y.jsx)(rG.G, { track: t, position: i, className: rJ().playButtonCell, ...e }), [t, i]);
                return (0, y.jsx)(rZ.C, {
                    track: t,
                    withLightning: n,
                    meta: (0, y.jsx)(nu.j, { withArtistLink: !d, albumArtists: a, track: t, withSavingQueryParams: u.id === t.albumId }),
                    playButtonCellRender: m,
                    onPlayClick: s,
                    controls: (0, y.jsx)(r$.Q, { withLightning: n, track: t, className: rJ().controlsBarCell, onLikeClick: r, onDislikeClick: o }),
                    skipFreemiumCloseListeningPaywall: !0,
                    ..._,
                    'data-test-id': q.Kq.track.TRACK_ALBUM,
                });
            });
            var r1 = a(40229),
                r2 = a(85673),
                r4 = a.n(r2);
            let r3 = (0, h.PA)((e) => {
                let { track: t, playContextParams: a, onPlayClick: i, onLikeClick: l, onDislikeClick: n } = e,
                    {
                        trailer: s,
                        settings: { isMobile: r },
                    } = (0, N.g)(),
                    o = (0, e2.D)({ playContextParams: a, entityId: t.entityId, sonataState: s.state, playbackId: ry.V.TRAILER }),
                    c = (0, g.useCallback)(
                        (e) =>
                            (0, y.jsx)(r1.q, {
                                isAvailable: t.isAvailable,
                                isDisliked: t.isDisliked,
                                coverUri: t.coverUri,
                                title: t.title,
                                className: r4().playButtonCell,
                                radius: 'xs',
                                ...e,
                            }),
                        [t],
                    );
                return (0, y.jsx)(rZ.C, {
                    track: t,
                    meta: (0, y.jsx)(nu.j, { withArtistLink: !r, track: t }),
                    playButtonCellRender: c,
                    onPlayClick: i,
                    controls: (0, y.jsx)(r$.Q, { track: t, className: r4().controlsBarCell, onLikeClick: l, onDislikeClick: n }),
                    skipFreemiumCloseListeningPaywall: !0,
                    ...o,
                    'data-test-id': q.Kq.track.TRACK_PLAYLIST,
                });
            });
            var r6 = a(84782),
                r5 = a(2792),
                r8 = a(95736),
                r9 = a.n(r8);
            let r7 = (0, h.PA)((e) => {
                let { variant: t, track: a, playContextParams: i, viewUuid: l } = e,
                    {
                        trailer: { meta: n, objectId: s, shouldSendEventOnTracksShowed: r, setShouldSendEventOnTracksShowed: o },
                    } = (0, N.g)(),
                    c = t === rS.H.ALBUM ? r0 : r3,
                    { isActive: d, progress: u } = ((e, t) => {
                        var a;
                        let i = (0, aO.e)(),
                            {
                                trailer: { state: l },
                            } = (0, N.g)(),
                            [n, s] = (0, g.useState)(0),
                            r = (null == (a = l.entityMeta) ? void 0 : a.id) === e;
                        return (
                            (0, g.useEffect)(() => {
                                let e =
                                    null == i
                                        ? void 0
                                        : i.getState(ry.V.TRAILER).playerState.progress.onChange(() => {
                                              let e,
                                                  a = i.getState(ry.V.TRAILER).playerState,
                                                  l = a.progress.value;
                                              ((e = t ? t / 1e3 : l.duration), r || s(0), a.status.value === sm.MT.PLAYING && r && s((l.position / e) * 100));
                                          });
                                return () => {
                                    null == e || e();
                                };
                            }, [t, r, i]),
                            { isActive: r, progress: n }
                        );
                    })(a.id, a.durationMs),
                    _ = ((e, t) => {
                        let a = (0, ti.U)(),
                            i = (0, te.st)(),
                            { hash: l } = (0, te.gf)(),
                            { pageId: n } = (0, rC.$)(),
                            { blockType: s, blockId: r, blockPosX: o, blockPosY: c } = (0, r6.N)(),
                            { objectType: d, objectsCount: u, objectId: _, objectPosX: m, objectPosY: p } = (0, r5.J)();
                        return (0, g.useCallback)(() => {
                            if (!i || !n) return;
                            let v = tt.W[n];
                            if (!v) return;
                            let x = {
                                    hash: l,
                                    pageId: v,
                                    mainObjectType: C.DomainObjectType.Trailer,
                                    mainObjectId: e,
                                    entityType: s,
                                    entityId: r,
                                    entityPosX: o,
                                    entityPosY: c,
                                    objectsCount: u,
                                    viewUuid: t,
                                    objectType: d,
                                    objectId: _,
                                    objectPosX: m,
                                    objectPosY: p,
                                },
                                y = (0, e9.F)({ params: x, logger: a, context: 'useSendEventOnSmartPreviewShowed' });
                            y && (0, e7.Pf)(i.evgenInstance, y);
                        }, [i, r, o, c, s, l, a, e, _, m, p, d, u, n, t]);
                    })(s, l),
                    m = ((e) => {
                        let t = (0, ti.U)(),
                            a = (0, te.st)(),
                            { hash: i } = (0, te.gf)(),
                            { pageId: l } = (0, rC.$)(),
                            { blockType: n, blockId: s, blockPosX: r, blockPosY: o } = (0, r6.N)(),
                            { objectType: c, objectsCount: d, objectId: u, objectPosX: _, objectPosY: m } = (0, r5.J)();
                        return (0, g.useCallback)(
                            (p) => {
                                if (!a || !l) return;
                                let v = tt.W[l];
                                if (!v) return;
                                let x = {
                                    hash: i,
                                    pageId: v,
                                    mainObjectType: C.DomainObjectType.Trailer,
                                    mainObjectId: e,
                                    entityType: n,
                                    entityId: s,
                                    entityPosX: r,
                                    entityPosY: o,
                                    objectsCount: d,
                                    objectType: c,
                                    objectId: u,
                                    objectPosX: _,
                                    objectPosY: m,
                                };
                                p || ((x.actionType = C.ActionType.Pause), (x.userInteractionType = C.UserInteractionType.Tap));
                                let y = (0, e9.F)({ params: x, logger: t, context: 'useSendEventOnSmartPreviewStarted' });
                                y &&
                                    (!p && ((e) => 'object' == typeof e && null !== e && 'actionType' in e && 'mainObjectId' in e)(y)
                                        ? (0, e7.h_)(a.evgenInstance, y)
                                        : (0, e7.er)(a.evgenInstance, y));
                            },
                            [a, s, r, o, n, i, t, e, u, _, m, c, d, l],
                        );
                    })(s),
                    p = ((e) => {
                        let t = (0, ti.U)(),
                            a = (0, te.st)(),
                            { hash: i } = (0, te.gf)(),
                            { pageId: l } = (0, rC.$)(),
                            { blockType: n, blockId: s, blockPosX: r, blockPosY: o } = (0, r6.N)(),
                            { objectType: c, objectsCount: d, objectId: u, objectPosX: _, objectPosY: m } = (0, r5.J)();
                        return (0, g.useCallback)(
                            (p) => {
                                if (!a || !l) return;
                                let v = tt.W[l];
                                if (!v) return;
                                let x = {
                                    hash: i,
                                    pageId: v,
                                    mainObjectType: C.DomainObjectType.Trailer,
                                    mainObjectId: e,
                                    entityType: n,
                                    entityId: s,
                                    entityPosX: r,
                                    entityPosY: o,
                                    objectsCount: d,
                                    objectType: c,
                                    objectId: u,
                                    objectPosX: _,
                                    objectPosY: m,
                                    userInteractionType: C.UserInteractionType.Tap,
                                };
                                p ? (x.actionType = C.ActionType.Like) : (x.actionType = C.ActionType.Unlike);
                                let y = (0, e9.F)({ params: x, logger: t, context: 'useSendEventOnSmartPreviewLike' });
                                y && (0, e7.h_)(a.evgenInstance, y);
                            },
                            [a, s, r, o, n, i, t, e, u, _, m, c, d, l],
                        );
                    })(s),
                    v = ((e) => {
                        let t = (0, ti.U)(),
                            a = (0, te.st)(),
                            { hash: i } = (0, te.gf)(),
                            { pageId: l } = (0, rC.$)(),
                            { blockType: n, blockId: s, blockPosX: r, blockPosY: o } = (0, r6.N)(),
                            { objectType: c, objectsCount: d, objectId: u, objectPosX: _, objectPosY: m } = (0, r5.J)();
                        return (0, g.useCallback)(
                            (p) => {
                                if (!a || !l) return;
                                let v = tt.W[l];
                                if (!v) return;
                                let x = {
                                    hash: i,
                                    pageId: v,
                                    mainObjectType: C.DomainObjectType.Trailer,
                                    mainObjectId: e,
                                    entityType: n,
                                    entityId: s,
                                    entityPosX: r,
                                    entityPosY: o,
                                    objectsCount: d,
                                    objectType: c,
                                    objectId: u,
                                    objectPosX: _,
                                    objectPosY: m,
                                    userInteractionType: C.UserInteractionType.Tap,
                                };
                                p ? (x.actionType = C.ActionType.Dislike) : (x.actionType = C.ActionType.Undislike);
                                let y = (0, e9.F)({ params: x, logger: t, context: 'useSendEventOnSmartPreviewDislike' });
                                y && (0, e7.h_)(a.evgenInstance, y);
                            },
                            [a, s, r, o, n, i, t, e, u, _, m, c, d, l],
                        );
                    })(s);
                (0, g.useEffect)(() => {
                    r && (_(), o(!1));
                }, [_, o, r]);
                let x = (0, g.useMemo)(() => ({ '--track-progress': ''.concat(u || 0, '%') }), [u]);
                return (0, y.jsx)('div', {
                    className: (0, eL.$)(r9().root, { [r9().root_active]: d }),
                    style: x,
                    children: (0, y.jsx)(c, {
                        position: a.positionInAlbum,
                        withLightning: !!(null == a ? void 0 : a.isBest),
                        track: a,
                        playContextParams: i,
                        albumArtists: null == n ? void 0 : n.albumArtists,
                        onPlayClick: m,
                        onLikeClick: p,
                        onDislikeClick: v,
                    }),
                });
            });
            var oe = a(38306),
                ot = a.n(oe);
            let oa = (0, h.PA)((e) => {
                let { variant: t } = e,
                    {
                        trailer: a,
                        playlist: { setShouldShowTrailerOnboarding: i },
                    } = (0, N.g)(),
                    {
                        isLoading: l,
                        isRejected: n,
                        tracks: s,
                        meta: r,
                        state: o,
                        shouldAutoStartPlaying: c,
                        setShouldAutoStartPlaying: d,
                        isNotFound: u,
                        modal: _,
                        utmLink: m,
                    } = a,
                    p = (0, aO.e)(),
                    { from: v } = rI({ variant: t, blockId: rf.U.TRAILER, meta: r }),
                    x = (() => {
                        let e = (0, te.st)(),
                            t = (0, ti.U)(),
                            { hash: a } = (0, te.gf)(),
                            { pageId: i } = (0, rC.$)();
                        return (0, g.useCallback)(
                            (l) => {
                                if (!e || !i) return;
                                let n = { hash: a, pageId: tt.W[i], mainObjectType: C.DomainObjectType.Trailer, mainObjectId: l },
                                    s = (0, e9.F)({ params: n, logger: t, context: 'useSendEventOnTrailerOpened' });
                                s && (0, rh.w5)(e.evgenInstance, s);
                            },
                            [e, a, t, i],
                        );
                    })(),
                    h = rT(),
                    [A, b] = (0, g.useState)(!1),
                    f = (0, g.useRef)((0, rb.A)()),
                    j = l || n,
                    { isPlaying: T } = (0, e2.D)({
                        playContextParams: {
                            contextData: rk({ variant: t, id: null == r ? void 0 : r.id, uuid: null == r ? void 0 : r.uuid, from: v, utmLink: m }),
                            loadContextMeta: !0,
                        },
                        sonataState: a.state,
                        playbackId: ry.V.TRAILER,
                    });
                ((0, g.useEffect)(() => {
                    _.isOpened &&
                        (null == r ? void 0 : r.id) &&
                        c &&
                        (x(a.objectId),
                        null == p ||
                            p
                                .playContext(
                                    {
                                        contextData: rk({ variant: t, id: null == r ? void 0 : r.id, uuid: null == r ? void 0 : r.uuid, from: v, utmLink: m }),
                                        queueParams: { index: 0 },
                                        loadContextMeta: !0,
                                    },
                                    ry.V.TRAILER,
                                )
                                .then(() => {
                                    b(!0);
                                }),
                        d(!1));
                }, [v, null == r ? void 0 : r.id, null == r ? void 0 : r.uuid, _.isOpened, x, h, d, c, p, o.status, a.objectId, t, m, T]),
                    (0, g.useEffect)(() => {
                        A && (T ? (h(a.objectId), b(!1)) : i(!0));
                    }, [A, T, h, a.objectId, i]));
                let S = (0, g.useCallback)(
                        (e) => ({
                            contextData: rk({ variant: t, id: null == r ? void 0 : r.id, uuid: null == r ? void 0 : r.uuid, from: v, utmLink: m }),
                            queueParams: { index: e },
                            loadContextMeta: !0,
                        }),
                        [v, null == r ? void 0 : r.id, null == r ? void 0 : r.uuid, t, m],
                    ),
                    I = (0, g.useMemo)(
                        () =>
                            j
                                ? ((e, t) => {
                                      let a = t === rS.H.ALBUM ? eF.X.ALBUM : eF.X.PLAYLIST;
                                      return Array.from({ length: t === rS.H.TRACK ? 1 : 5 }, (t, i) =>
                                          (0, y.jsx)(
                                              'div',
                                              {
                                                  className: ot().trackContainer,
                                                  children: (0, y.jsx)(ez.D, {
                                                      isActive: e,
                                                      className: (0, eL.$)(ot().trackShimmer, { [ot().albumShimmer]: a === eF.X.ALBUM }),
                                                      variant: a,
                                                  }),
                                              },
                                              i,
                                          ),
                                      );
                                  })(l, t)
                                : null == s
                                  ? void 0
                                  : s.map((e, a) =>
                                        (0, y.jsx)(
                                            rj.F,
                                            {
                                                blockType: C.DomainObjectType.SmartPreview,
                                                blockId: e.id,
                                                blockPosX: 1,
                                                blockPosY: 1,
                                                children: (0, y.jsx)(rN.B, {
                                                    objectType: C.DomainObjectType.SmartPreview,
                                                    objectId: e.id,
                                                    objectPosX: 1,
                                                    objectPosY: a + 1,
                                                    objectsCount: s.length,
                                                    children: (0, y.jsx)(r7, { variant: t, track: e, playContextParams: S(a), viewUuid: f.current }),
                                                }),
                                            },
                                            e.id,
                                        ),
                                    ),
                        [S, l, j, s, t],
                    );
                return n
                    ? u
                        ? (0, y.jsx)(rP, {})
                        : (0, y.jsx)(rM, {})
                    : (0, y.jsxs)('div', {
                          className: ot().root,
                          children: [
                              (0, y.jsx)(rQ, { isShimmerVisible: j, isShimmerActive: l, variant: t, className: ot().header }),
                              I,
                              (0, y.jsx)(rF, { isShimmerVisible: j, isShimmerActive: l, variant: t, className: ot().footer }),
                          ],
                      });
            });
            var oi = a(82856),
                ol = a.n(oi);
            let on = (0, h.PA)(() => {
                let {
                        settings: { isMobile: e },
                        trailer: t,
                        sonataState: a,
                        fullscreenPlayer: i,
                    } = (0, N.g)(),
                    l = (0, aO.e)(),
                    { contentRef: n } = (0, j.g)(),
                    { formatMessage: s } = (0, Y.A)(),
                    r = rg();
                ((() => {
                    let { trailer: e } = (0, N.g)(),
                        t = (0, aO.e)(),
                        a = (0, ru.z)(),
                        i = (0, eZ.K)(e.state.entityMeta),
                        l = (0, rA.m)(e.state.entityMeta);
                    ((0, g.useEffect)(() => {
                        e.modal.isOpened
                            ? (null == a || a.disable(rd.M.MAIN),
                              null == a || a.enable(rd.M.MAIN, rc.l.TOGGLE_MUTE),
                              null == a || a.enable(rd.M.MAIN, rc.l.INCREASE_VOLUME),
                              null == a || a.enable(rd.M.MAIN, rc.l.DECREASE_VOLUME),
                              null == a || a.enable(rd.M.MAIN, rc.l.TOGGLE_FULLSCREEN_PLAYER),
                              null == a || a.enable(rd.M.TRAILER))
                            : (null == a || a.disable(rd.M.TRAILER), null == a || a.enable(rd.M.MAIN));
                    }, [a, e.modal.isOpened]),
                        (0, g.useEffect)(
                            () => (
                                null == a ||
                                    a.addShortcutsListener(rd.M.TRAILER, rc.l.TOGGLE_PLAY, () => {
                                        null == t || t.togglePause(ry.V.TRAILER);
                                    }),
                                null == a || a.addShortcutsListener(rd.M.TRAILER, rc.l.LIKE, i),
                                null == a || a.addShortcutsListener(rd.M.TRAILER, rc.l.DISLIKE, l),
                                null == a ||
                                    a.addShortcutsListener(rd.M.TRAILER, rc.l.MOVE_FORWARD, async () => {
                                        var e;
                                        (null == t || null == (e = t.getState(ry.V.TRAILER).currentContext.value) ? void 0 : e.availableActions.moveForward.value) &&
                                            (await (null == t ? void 0 : t.moveForward(ry.V.TRAILER)));
                                    }),
                                null == a ||
                                    a.addShortcutsListener(rd.M.TRAILER, rc.l.MOVE_BACKWARD, async () => {
                                        var e;
                                        (null == t || null == (e = t.getState(ry.V.TRAILER).currentContext.value) ? void 0 : e.availableActions.moveBackward.value) &&
                                            (await (null == t ? void 0 : t.moveBackward(ry.V.TRAILER)));
                                    }),
                                null == a ||
                                    a.addShortcutsListener(rd.M.TRAILER, rc.l.SLIDE_FORWARD, async () => {
                                        (null == t ? void 0 : t.getState(ry.V.TRAILER).playerState.progress.value.duration) &&
                                            (await (null == t ? void 0 : t.slideForward(1, ry.V.TRAILER)));
                                    }),
                                null == a ||
                                    a.addShortcutsListener(rd.M.TRAILER, rc.l.SLIDE_BACKWARD, async () => {
                                        (null == t ? void 0 : t.getState(ry.V.TRAILER).playerState.progress.value.duration) &&
                                            (await (null == t ? void 0 : t.slideBackward(1, ry.V.TRAILER)));
                                    }),
                                () => {
                                    (null == a || a.removeShortcutsListener(rd.M.TRAILER, rc.l.TOGGLE_PLAY),
                                        null == a || a.removeShortcutsListener(rd.M.TRAILER, rc.l.LIKE),
                                        null == a || a.removeShortcutsListener(rd.M.TRAILER, rc.l.DISLIKE),
                                        null == a || a.removeShortcutsListener(rd.M.TRAILER, rc.l.MOVE_FORWARD),
                                        null == a || a.removeShortcutsListener(rd.M.TRAILER, rc.l.MOVE_BACKWARD),
                                        null == a || a.removeShortcutsListener(rd.M.TRAILER, rc.l.SLIDE_FORWARD),
                                        null == a || a.removeShortcutsListener(rd.M.TRAILER, rc.l.SLIDE_BACKWARD));
                                }
                            ),
                            [l, i, a, t],
                        ));
                })(),
                    (0, g.useEffect)(() => {
                        let e =
                                null == l
                                    ? void 0
                                    : l.getState(ry.V.TRAILER).queueState.currentEntity.onChange((e) => {
                                          var a;
                                          let i = null == e ? void 0 : e.context.data.type,
                                              l = null == e ? void 0 : e.context.data.meta.id;
                                          (t.state.setEntityMeta(null != (a = null == e ? void 0 : e.entity) ? a : null),
                                              i && t.state.setContextType(i),
                                              l && t.state.setContextId(l));
                                      }),
                            a =
                                null == l
                                    ? void 0
                                    : l.getState(ry.V.TRAILER).playerState.status.onChange((e) => {
                                          e && t.state.setStatus(e);
                                      });
                        return () => {
                            (null == e || e(), null == a || a());
                        };
                    }, [l, t.state]));
                let o = (0, g.useCallback)(() => {
                        null == l ||
                            l.stop(ry.V.TRAILER).finally(() => {
                                (t.sonataStatusBeforeTrailerStart !== sm.MT.PLAYING || t.isManuallyPaused || null == l || l.resume(),
                                    t.setAnimationState(!0),
                                    t.resetUtmLink(),
                                    t.modal.close(),
                                    r(t.objectId));
                            });
                    }, [r, l, t]),
                    c = (0, g.useCallback)(
                        (e) => {
                            (t.modal.onOpenChange(e), e || o());
                        },
                        [o, t.modal],
                    );
                return (
                    (0, g.useEffect)(() => {
                        t.modal.isOpened && t.isResolved && a.status === sm.MT.PLAYING && o();
                    }, [o, a.status, t, t.modal.isOpened]),
                    (0, g.useEffect)(() => {
                        t.modal.isOpened && t.isResolved && t.setAnimationState(!1);
                    }, [t]),
                    (0, g.useEffect)(() => {
                        i.modal.isOpened && t.modal.isOpened && o();
                    }, [i.modal.isOpened, o, t.modal.isOpened]),
                    (0, y.jsxs)(f.a, {
                        size: 'fitContent',
                        placement: e ? 'default' : 'right',
                        open: t.modal.isOpened,
                        onOpenChange: c,
                        onClose: o,
                        className: ol().root,
                        contentClassName: ol().modalContent,
                        portalNode: e ? null : n,
                        showHeader: !1,
                        withOverlay: e,
                        closeOnOutsidePress: e,
                        'data-test-id': q.e8.trailer.TRAILER_MODAL,
                        withAnimation: t.withAnimation,
                        isMobile: e,
                        lockScroll: e,
                        overlayColor: 'full',
                        enableSwipe: !0,
                        children: [
                            !e &&
                                (0, y.jsx)('div', {
                                    className: ol().header,
                                    children: (0, y.jsx)(Q.$, {
                                        radius: 'round',
                                        color: 'secondary',
                                        size: 'xxs',
                                        icon: (0, y.jsx)($.I, { variant: 'close', size: 'xxs' }),
                                        onClick: o,
                                        'aria-label': s({ id: 'trailer.close' }),
                                        'data-test-id': q.e8.trailer.TRAILER_CLOSE_BUTTON,
                                    }),
                                }),
                            t.variant && (0, y.jsx)(oa, { variant: t.variant }),
                        ],
                    })
                );
            });
            var os = a(79671),
                or = a(14459),
                oo = a(83992);
            async function oc(e) {
                var t;
                let a = await (0, M.W)(e.locale),
                    i = a({ id: 'metadata.main-description' }),
                    l = a({ id: 'metadata.main-title' });
                return {
                    title: l,
                    description: i,
                    openGraph: (0, w.i)({
                        ogTitle: l,
                        ogDescription: i,
                        ogType: 'website',
                        fullUrl: null != (t = e.fullUrl) ? t : '',
                        locale: e.locale,
                        siteName: a({ id: 'metadata.yandex-music' }),
                        customImage: (0, oo.v)({ tld: e.tld }),
                    }),
                    facebook: (0, or.k)(),
                    twitter: (0, R.H)({ cardType: D.W.SUMMARY_LARGE_IMAGE, title: l, description: i }),
                    alternates: (0, B.S)(lA.Z.main.href, e.tld),
                };
            }
            var od = a(39231),
                ou = a(28816),
                o_ = a(87151),
                om = a(65024);
            async function op(e) {
                var t, a, i, l, n, s, r;
                let o,
                    c,
                    { clipMeta: d, additional: u } = e,
                    _ = await (0, M.W)(u.locale);
                return (
                    d
                        ? ((o = _(
                              { id: 'metadata.clips-title' },
                              { clipTitle: d.title, clipArtists: null == (a = d.artists) || null == (t = a.map((e) => e.name)) ? void 0 : t.join(', ') },
                          )),
                          (c = _(
                              { id: 'metadata.clips-description' },
                              { clipTitle: d.title, clipArtists: null == (l = d.artists) || null == (i = l.map((e) => e.name)) ? void 0 : i.join(', ') },
                          )))
                        : ((o = _({ id: 'metadata.clips-title-default' })), (c = _({ id: 'metadata.clips-description-default' }))),
                    {
                        title: o,
                        description: c,
                        openGraph: (0, w.i)({
                            ogTitle: o,
                            ogDescription: c,
                            ogType: 'website',
                            fullUrl: null != (n = u.fullUrl) ? n : '',
                            locale: u.locale,
                            customImage: (0, oo.v)({ tld: u.tld }),
                            siteName: _({ id: 'metadata.yandex-music' }),
                        }),
                        twitter: (0, R.H)({ cardType: D.W.SUMMARY_LARGE_IMAGE, title: o, description: c }),
                        facebook: (0, or.k)(),
                        appLinks: (0, E.X)({
                            additional: { ...u, url: null != (s = u.url) ? s : '', fullUrl: null != (r = u.fullUrl) ? r : '', host: u.host },
                            appName: _({ id: 'metadata.yandex-music' }),
                        }),
                    }
                );
            }
            var ov = a(46789),
                ox = a(62060),
                oy = a(29869),
                oh = a(2125),
                oC = a(28563),
                og = a(80346),
                oA = a(57223),
                ob = a(68535),
                of = a(6612),
                oj = a(63415),
                oN = a(25936);
            let oT = (0, h.PA)((e) => {
                let { className: t } = e,
                    { fullscreenVideoPlayer: a } = (0, N.g)(),
                    i = (0, aO.e)(),
                    { from: l } = (0, eB.f)({ pageId: ta._Q.VIDEO_PLAYER, contextId: a.state.contextId, contextType: ew.K.Various }),
                    n = (0, b.c)(() => {
                        null == i || i.moveForward(ry.V.CLIP);
                    }),
                    s = (0, b.c)(() => {
                        null == i || i.moveBackward(ry.V.CLIP);
                    }),
                    { isPlaying: r, togglePlay: o } = (0, e2.D)({
                        playContextParams: { contextData: { type: ew.K.Various, meta: { id: oj.H.VARIOUS_CLIP_CONTEXT }, from: l }, loadContextMeta: !0 },
                        sonataState: a.state,
                        playbackId: ry.V.CLIP,
                    });
                return (0, y.jsx)(oN.Z, {
                    className: t,
                    isPlaying: r,
                    canMoveBackward: a.state.canMoveBackward,
                    canMoveForward: a.state.canMoveForward,
                    canShuffle: !1,
                    onClickPlayPause: o,
                    onClickNext: n,
                    onClickPrev: s,
                    canChangeRepeatMode: !1,
                    shuffle: !1,
                    repeatMode: of.pM.NONE,
                });
            });
            var oS = a(70280),
                oI = a(25649),
                ok = a(24760),
                oL = a(53514),
                oE = a(27940),
                oM = a.n(oE);
            let oP = (0, h.PA)((e) => {
                let {
                        className: t,
                        clip: a,
                        withExplicitMark: i = !0,
                        withSecondaryColor: l,
                        captionSize: n = 'm',
                        explicitSize: s = 'xxxs',
                        withAllArtistsTitle: r,
                        withCustomTooltip: o = !0,
                        hasLineClamp: c = !0,
                        withArtistLink: d = !0,
                    } = e,
                    u = (0, ok.$)({ withCustomTooltip: o }),
                    _ = (0, g.useCallback)(
                        (e) => {
                            let t = String(a.title);
                            return (0, y.jsx)(oS.m_, {
                                enabled: u,
                                offsetOptions: 4,
                                placement: 'top',
                                text: t,
                                hoverSettings: oL.V,
                                children: (0, y.jsx)(er.HL, {
                                    className: (0, eL.$)(oM().text, oM().title),
                                    type: 'entity',
                                    size: n,
                                    weight: 'medium',
                                    variant: 'span',
                                    'data-test-id': e,
                                    children: a.title,
                                }),
                            });
                        },
                        [u, n, a.title],
                    ),
                    m = (0, g.useMemo)(() => _(q.Kq.clip.CLIP_META_TITLE), [_]),
                    p = (0, oI.s)(a.artists);
                return (0, y.jsx)('div', {
                    className: (0, eL.$)(oM().root, { [oM().root_withSecondaryColor]: l }, t),
                    children: (0, y.jsxs)('div', {
                        className: oM().metaContainer,
                        children: [
                            (0, y.jsxs)('div', {
                                className: oM().titleContainer,
                                children: [
                                    (0, y.jsx)(er.HL, { type: 'entity', size: n, weight: 'medium', variant: 'div', lineClamp: 1, children: m }),
                                    a.explicitDisclaimer &&
                                        i &&
                                        (0, y.jsx)(eq.N, {
                                            getDescriptionTexts: a.getDescriptionTexts,
                                            size: s,
                                            variant: a.explicitDisclaimer,
                                            className: oM().explicitMark,
                                            trackId: String(a.clipId),
                                        }),
                                ],
                            }),
                            p.length > 0 &&
                                (0, y.jsx)(eY.i, {
                                    linkClassName: oM().link,
                                    captionClassName: oM().artistCaption,
                                    artists: p,
                                    withLink: d,
                                    lineClamp: +!!c,
                                    captionSize: n,
                                    withAllArtistsTitle: r,
                                    withCustomTooltip: u,
                                }),
                        ],
                    }),
                });
            });
            var oO = a(74696),
                ow = a.n(oO);
            let oR = (0, h.PA)((e) => {
                    let { entityMeta: t, onLikeClick: a, onContextMenuOpenChange: i, isContextMenuOpened: l } = e,
                        { user: n, sonataState: s, fullscreenVideoPlayer: r, freeAccess: o } = (0, N.g)(),
                        c = (0, ob.d)(),
                        d = (0, b.c)(async (e) => {
                            await c(s, e);
                        }),
                        u = (0, g.useMemo)(
                            () =>
                                t
                                    ? (0, y.jsx)('div', { className: ow().description, children: (0, y.jsx)(oP, { captionSize: 'l', clip: t, withSecondaryColor: !0 }) })
                                    : null,
                            [t],
                        );
                    return (0, y.jsxs)('section', {
                        className: ow().root,
                        children: [
                            (0, y.jsxs)('div', {
                                className: ow().info,
                                children: [
                                    (0, y.jsx)('div', { className: ow().infoCard, children: u }),
                                    (0, y.jsxs)('div', {
                                        className: ow().infoButtons,
                                        children: [
                                            r.clipActive &&
                                                (0, y.jsx)(oA.z, {
                                                    placement: 'top-start',
                                                    icon: (0, y.jsx)($.I, { variant: 'more', size: 'm' }),
                                                    size: 'l',
                                                    clip: r.clipActive,
                                                    onOpenChange: i,
                                                    open: l,
                                                    'data-test-id': q.Kq.clip.CLIP_CONTEXT_MENU_BUTTON,
                                                }),
                                            t &&
                                                (0, y.jsx)(e4.c, {
                                                    className: ow().likeButton,
                                                    isLiked: t.isLiked,
                                                    iconSize: 'xs',
                                                    onClick: a,
                                                    disabled: !n.isAuthorized,
                                                }),
                                        ],
                                    }),
                                ],
                            }),
                            (0, y.jsxs)('div', {
                                className: ow().sonata,
                                children: [
                                    (0, y.jsx)(oT, {}),
                                    (0, y.jsx)(no.v, {
                                        sliderClassName: (0, eL.$)(ow().slider, ow().important),
                                        disabled: !t,
                                        isMobile: !1,
                                        isFullscreen: !1,
                                        canMoveForward: r.state.canMoveForward,
                                        customDuration: (null == n ? void 0 : n.isAuthorized) && !o.isFreeDesktopUser ? void 0 : 29,
                                        sonataPlaybackId: ry.V.CLIP,
                                    }),
                                ],
                            }),
                            (0, y.jsx)('div', {
                                className: ow().meta,
                                children: (0, y.jsx)(og.r, {
                                    sonataVolume: s.volume,
                                    onVolumeClick: d,
                                    horizontalSliderClassName: (0, eL.$)(ow().slider, ow().important),
                                }),
                            }),
                        ],
                    });
                }),
                oD = (0, h.PA)((e) => {
                    let { className: t, isSettingsMenuOpened: a, onSettingsMenuOpenChange: i, isContextMenuOpened: l, onContextMenuOpenChange: n } = e,
                        { fullscreenVideoPlayer: s } = (0, N.g)(),
                        r = (0, ov.K)(s.state.entityMeta),
                        {
                            settings: { isMobile: o },
                        } = (0, N.g)();
                    return o
                        ? null
                        : (0, y.jsx)(oR, {
                              className: t,
                              onLikeClick: r,
                              entityMeta: s.state.entityMeta,
                              isSettingsMenuOpened: a,
                              onSettingsMenuOpenChange: i,
                              isContextMenuOpened: l,
                              onContextMenuOpenChange: n,
                          });
                });
            var oB = a(77837),
                oF = a.n(oB);
            let oU = (0, h.PA)(() => {
                    let { fullscreenVideoPlayer: e } = (0, N.g)(),
                        { state: t, toggleTrue: a, toggleFalse: i } = (0, ey.e)(!1),
                        { state: l, toggleTrue: n, toggleFalse: s } = (0, ey.e)(!1),
                        { state: r, toggleTrue: o, toggleFalse: c } = (0, ey.e)(!1),
                        d = (0, g.useRef)(null),
                        [u, _] = (0, g.useState)(!1),
                        [m, p] = (0, g.useState)(!1),
                        v = m || u,
                        x = (0, g.useMemo)(
                            () =>
                                (0, ox.A)(() => {
                                    (i(), s());
                                }, 1500),
                            [s, i],
                        ),
                        h = (0, g.useMemo)(
                            () =>
                                (0, ox.A)(() => {
                                    s();
                                }, 1500),
                            [s],
                        ),
                        C = (0, b.c)(() => {
                            (h.cancel(), n(), o());
                        }),
                        A = (0, b.c)(() => {
                            (h(), c());
                        }),
                        f = (0, b.c)(() => {
                            u || m || x();
                        }),
                        j = (0, b.c)((e) => {
                            (e.stopPropagation(), x.cancel(), h.cancel(), a(), n(), x());
                        }),
                        T = (0, b.c)((e) => {
                            (e.stopPropagation(), x.cancel(), h.cancel(), a(), x());
                        }),
                        S = (0, b.c)(() => {
                            (t ? x.cancel() : a(), x());
                        });
                    ((0, g.useEffect)(
                        () => (
                            window.addEventListener('mousemove', S),
                            () => {
                                window.removeEventListener('mousemove', S);
                            }
                        ),
                        [S],
                    ),
                        (0, g.useEffect)(() => {
                            t || s();
                        }, [s, t]));
                    let I = e.state.status !== sm.MT.PLAYING,
                        k = (0, g.useMemo)(
                            () =>
                                (0, y.jsx)(oy.t, {
                                    className: oF().carousel,
                                    containerClassName: oF().carouselBlock,
                                    clipCardTitleClassName: (0, eL.$)(oF().clipCardTitle, oF().important),
                                    clipCardArtistLinkClassName: (0, eL.$)(oF().clipCardArtist, oF().important),
                                    isShimmerVisible: e.isLoading,
                                    isShimmerActive: !0,
                                    clips: e.clips,
                                    shouldOpenModalOnCardClick: !1,
                                    itemCounter: 5,
                                    ref: d,
                                }),
                            [e.clips, e.isLoading, d],
                        );
                    return (
                        (0, g.useEffect)(() => {
                            (l || r) && (a(), n());
                        }, [r, l, n, a]),
                        (0, y.jsxs)('div', {
                            className: (0, eL.$)(oF().root, { [oF().root_visible]: t || I || r || v, [oF().root_withHoveredCarousel]: l }),
                            onMouseEnter: a,
                            onMouseLeave: f,
                            onFocus: T,
                            children: [
                                (0, y.jsx)(oD, { isSettingsMenuOpened: u, onSettingsMenuOpenChange: _, isContextMenuOpened: m, onContextMenuOpenChange: p }),
                                (0, y.jsx)(rj.F, {
                                    blockId: oh.h.CLIPS_CAROUSEL,
                                    blockType: oh.h.CLIPS_CAROUSEL,
                                    blockPosX: 1,
                                    blockPosY: 1,
                                    objectsCount: e.clips.length,
                                    children: (0, y.jsx)('div', {
                                        className: oF().carouselContainer,
                                        onMouseEnter: C,
                                        onMouseLeave: A,
                                        onFocus: j,
                                        children: (0, y.jsx)(oC.F, {
                                            className: oF().carouselWrapper,
                                            carouselElement: k,
                                            ref: d,
                                            isCarouselBetweenArrows: !0,
                                            controlsWrapperClassName: oF().carouselControls,
                                            buttonSize: 'xs',
                                            buttonVariant: 'default',
                                            withSecondaryColor: !0,
                                        }),
                                    }),
                                }),
                            ],
                        })
                    );
                }),
                oz = (0, h.PA)(() => {
                    let {
                        settings: { isMobile: e },
                    } = (0, N.g)();
                    return e ? null : (0, y.jsx)(oU, {});
                });
            var oW = a(73325),
                oK = a(27515),
                oH = a(94315),
                oV = a(71670),
                oY = a(88040),
                oq = a.n(oY);
            let oQ = (0, h.PA)((e) => {
                let { closeModal: t, withAdaptiveAspectRatio: a } = e,
                    i = (0, g.useRef)(null),
                    l = (0, aO.e)(),
                    {
                        sonataState: { isVHCoreRegistered: n },
                        fullscreenVideoPlayer: s,
                        advert: r,
                    } = (0, N.g)(),
                    { from: o } = (0, eB.f)({ pageId: ta._Q.VIDEO_PLAYER, contextId: s.state.contextId, contextType: ew.K.Various }),
                    c = (0, oV.X)(),
                    { state: d, toggleFalse: u } = (0, ey.e)(!0),
                    { togglePlay: _ } = (0, e2.D)({
                        playContextParams: { contextData: { type: ew.K.Various, meta: { id: oj.H.VARIOUS_CLIP_CONTEXT }, from: o }, loadContextMeta: !0 },
                        sonataState: s.state,
                        playbackId: ry.V.CLIP,
                    }),
                    m = (0, oW.X)({ clip: s.clips[s.clipActiveIndex], callback: _, disclaimerRejectHandler: t });
                return (
                    (0, g.useEffect)(() => {
                        let e, t, a;
                        if (i.current && l && n) {
                            let n, d;
                            (s.setSonataStatusBeforeClipStart(),
                                l.setVideoCoreContainer({ container: i.current, playbackId: ry.V.CLIP }),
                                l
                                    .setContext(
                                        {
                                            contextData: { type: ew.K.Various, meta: { id: oj.H.VARIOUS_CLIP_CONTEXT }, from: o },
                                            entitiesData: s.entitiesData,
                                            queueParams: { index: s.clipActiveIndex },
                                            loadContextMeta: !1,
                                        },
                                        ry.V.CLIP,
                                    )
                                    .then(() => {
                                        r.isAdvertShown || m();
                                    }));
                            let u = l.getState(ry.V.CLIP);
                            ((e = u.queueState.currentEntity.onChange((e) => {
                                var t;
                                let a = null == e ? void 0 : e.context.data.type,
                                    i = null == e ? void 0 : e.context.data.meta.id,
                                    l = null == e ? void 0 : e.entity.data.meta.id;
                                if (l) {
                                    let e = (0, oK.z)(s.ids, s.ids.indexOf(Number(l)));
                                    (s.setClipIndex(e), c((0, oH.J)(s.ids, e)));
                                }
                                (s.state.setEntityMeta(null != (t = null == e ? void 0 : e.entity) ? t : null),
                                    a && s.state.setContextType(a),
                                    i && s.state.setContextId(i));
                            })),
                                (t = u.playerState.status.onChange((e) => {
                                    e && s.state.setStatus(e);
                                })),
                                (a = u.currentContext.onChange((e) => {
                                    (null == n || n(),
                                        null == d || d(),
                                        (n =
                                            null == e
                                                ? void 0
                                                : e.availableActions.moveBackward.onChange((e) => {
                                                      s.state.setCanMoveBackward(!!e);
                                                  })),
                                        (d =
                                            null == e
                                                ? void 0
                                                : e.availableActions.moveForward.onChange((e) => {
                                                      s.state.setCanMoveForward(!!e);
                                                  })));
                                })));
                        }
                        return () => {
                            (null == l || l.destroyVideoCore(ry.V.CLIP),
                                s.isPlayingSonataStatusBeforeClipStart && (null == l || l.resume()),
                                null == e || e(),
                                null == t || t(),
                                null == a || a());
                        };
                    }, [l, n, s, o, c, _, m, r.isAdvertShown]),
                    (0, g.useEffect)(() => {
                        s.state.status === sm.MT.PLAYING && u();
                    }, [s.state.status, u]),
                    (0, y.jsxs)('div', {
                        className: oq().root,
                        children: [
                            (0, y.jsx)('div', { onClick: _, ref: i, className: (0, eL.$)(oq().container, { [oq().container_adaptiveAspectRatio]: a }) }),
                            (0, y.jsx)('div', {
                                className: (0, eL.$)(oq().loadingIndicator, { [oq().loadingIndicator_showed]: d }),
                                children: (0, y.jsx)(tX.y, { size: 'm' }),
                            }),
                        ],
                    })
                );
            });
            var o$ = a(83218),
                oG = a.n(o$);
            let oZ = (0, h.PA)(() => {
                    let { formatMessage: e } = (0, Y.A)(),
                        {
                            advertBanners: {
                                banners: { topAdvertBanner: t },
                            },
                            fullscreenVideoPlayer: a,
                            modals: { disclaimerModal: i },
                        } = (0, N.g)(),
                        { defaultLayoutRef: l } = (0, j.g)(),
                        n = (0, g.useCallback)(() => {
                            window.history.back();
                        }, []),
                        s = (0, ou.p)(),
                        { notify: r } = (0, en.l)(),
                        o = (0, aO.e)(),
                        c = (0, tq.j)(),
                        d = (() => {
                            let e = (0, te.st)(),
                                { hash: t } = (0, te.gf)(),
                                a = (0, ti.U)();
                            return (0, b.c)((i) => {
                                if (!e) return;
                                let l = { hash: t, pageId: C.AppScreen.VideoScreen, mainObjectType: C.DomainObjectType.Video, mainObjectId: i },
                                    n = (0, e9.F)({ params: l, logger: a, context: 'useSendEventOnClipOpened' });
                                n && (0, rh.w5)(e.evgenInstance, n);
                            });
                        })(),
                        u = (() => {
                            let e = (0, te.st)(),
                                { hash: t } = (0, te.gf)(),
                                a = (0, ti.U)();
                            return (0, b.c)((i) => {
                                if (!e) return;
                                let l = { hash: t, pageId: C.AppScreen.VideoScreen, mainObjectType: C.DomainObjectType.Video, mainObjectId: i },
                                    n = (0, e9.F)({ params: l, logger: a, context: 'useSendEventOnClipClosed' });
                                n && (0, rh.XB)(e.evgenInstance, n);
                            });
                        })(),
                        [_] = a.ids,
                        m = (0, b.c)(() => {
                            let e = (0, od.q)(lm.K.IDS),
                                t = (0, od.q)(lm.K.ACTIVE_INDEX),
                                { clipIds: i, activeClipIndex: l } = (0, os.V)(e, t);
                            i.length
                                ? (a.setIds(i), a.setClipIndex(l), a.setAnimationState(!1), null == o || o.setEntityByIndex(a.clipActiveIndex, ry.V.CLIP), a.modal.open())
                                : (a.modal.close(), a.reset());
                        }),
                        p = (0, b.c)(() => {
                            if (a.modal.isOpened && !i.isOpened) {
                                if ((a.setAnimationState(!0), _ && u(String(_)), a.isOpenedFromMain)) {
                                    (s(lA.Z.main.href),
                                        oc({ fullUrl: null, locale: null, url: null, tld: '', host: '' }).then((e) => {
                                            (0, L.j)(e);
                                        }),
                                        a.modal.close(),
                                        a.reset());
                                    return;
                                }
                                n();
                            }
                        });
                    (((e) => {
                        let { fullscreenVideoPlayer: t, advert: a } = (0, N.g)(),
                            i = (0, aO.e)(),
                            l = (0, ru.z)(),
                            n = (0, ov.K)(t.state.entityMeta);
                        (0, g.useEffect)(() => {
                            if (a.isAdvertShown) {
                                null == l || l.disable(rd.M.VIDEO_PLAYER);
                                return;
                            }
                            t.modal.isOpened
                                ? (null == l || l.disable(rd.M.MAIN),
                                  null == l || l.enable(rd.M.MAIN, rc.l.TOGGLE_MUTE),
                                  null == l || l.enable(rd.M.MAIN, rc.l.INCREASE_VOLUME),
                                  null == l || l.enable(rd.M.MAIN, rc.l.DECREASE_VOLUME),
                                  null == l || l.enable(rd.M.VIDEO_PLAYER))
                                : (null == l || l.disable(rd.M.VIDEO_PLAYER), null == l || l.enable(rd.M.MAIN));
                        }, [l, t.modal.isOpened, a.isAdvertShown]);
                        let s = null == i ? void 0 : i.getState(ry.V.CLIP);
                        (0, g.useEffect)(
                            () => (
                                null == l || l.addShortcutsListener(rd.M.VIDEO_PLAYER, rc.l.CLOSE, e),
                                null == l ||
                                    l.addShortcutsListener(rd.M.VIDEO_PLAYER, rc.l.TOGGLE_PLAY, () => {
                                        null == i || i.togglePause(ry.V.CLIP);
                                    }),
                                null == l || l.addShortcutsListener(rd.M.VIDEO_PLAYER, rc.l.LIKE, n),
                                null == l ||
                                    l.addShortcutsListener(rd.M.VIDEO_PLAYER, rc.l.MOVE_FORWARD, async () => {
                                        var e;
                                        (null == s || null == (e = s.currentContext.value) ? void 0 : e.availableActions.moveForward.value) &&
                                            (await (null == i ? void 0 : i.moveForward(ry.V.CLIP)));
                                    }),
                                null == l ||
                                    l.addShortcutsListener(rd.M.VIDEO_PLAYER, rc.l.MOVE_BACKWARD, async () => {
                                        var e;
                                        (null == s || null == (e = s.currentContext.value) ? void 0 : e.availableActions.moveBackward.value) &&
                                            (await (null == i ? void 0 : i.moveBackward(ry.V.CLIP)));
                                    }),
                                null == l ||
                                    l.addShortcutsListener(rd.M.VIDEO_PLAYER, rc.l.SLIDE_FORWARD, async () => {
                                        (null == s ? void 0 : s.playerState.progress.value.duration) && (await (null == i ? void 0 : i.slideForward(1, ry.V.CLIP)));
                                    }),
                                null == l ||
                                    l.addShortcutsListener(rd.M.VIDEO_PLAYER, rc.l.SLIDE_BACKWARD, async () => {
                                        (null == s ? void 0 : s.playerState.progress.value.duration) && (await (null == i ? void 0 : i.slideBackward(1, ry.V.CLIP)));
                                    }),
                                () => {
                                    (null == l || l.removeShortcutsListener(rd.M.VIDEO_PLAYER, rc.l.CLOSE),
                                        null == l || l.removeShortcutsListener(rd.M.VIDEO_PLAYER, rc.l.TOGGLE_PLAY),
                                        null == l || l.removeShortcutsListener(rd.M.VIDEO_PLAYER, rc.l.LIKE),
                                        null == l || l.removeShortcutsListener(rd.M.VIDEO_PLAYER, rc.l.MOVE_FORWARD),
                                        null == l || l.removeShortcutsListener(rd.M.VIDEO_PLAYER, rc.l.MOVE_BACKWARD),
                                        null == l || l.removeShortcutsListener(rd.M.VIDEO_PLAYER, rc.l.SLIDE_FORWARD),
                                        null == l || l.removeShortcutsListener(rd.M.VIDEO_PLAYER, rc.l.SLIDE_BACKWARD));
                                }
                            ),
                            [l, t.ids, e, n, i, s, a.isAdvertShown],
                        );
                    })(p),
                        0 === a.ids.length && p(),
                        (0, g.useEffect)(
                            () => () => {
                                (a.reset(), t.setIsShowBanner(!0));
                            },
                            [a, t, t.setIsShowBanner],
                        ),
                        (0, g.useEffect)(() => {
                            a.modal.isOpened ? t.setIsShowBanner(!1) : t.setIsShowBanner(!0);
                        }, [a.modal.isOpened, t, t.setIsShowBanner]));
                    let v = (0, b.c)(() => {
                        (a.setAnimationState(!0), _ && u(String(_)), s(lA.Z.main.href), a.modal.close(), a.reset());
                    });
                    return (
                        (0, g.useEffect)(() => {
                            if (a.isNotFound || a.isSomethingWrong) {
                                p();
                                let t = a.modal.isOpened ? el.u.FULLSCREEN_ERROR : el.u.ERROR;
                                r((0, y.jsx)(es.h, { error: e({ id: 'error-messages.something-went-wrong' }) }), { containerId: t });
                            }
                        }, [a.isNotFound, a.isSomethingWrong, a.modal.isOpened, p, e, r]),
                        (0, g.useEffect)(() => {
                            a.modal.isOpened && _ && d(String(_));
                        }, [a.modal.isOpened, d, _]),
                        (0, g.useEffect)(
                            () => (
                                window.addEventListener('popstate', m),
                                () => {
                                    window.removeEventListener('popstate', m);
                                }
                            ),
                            [m],
                        ),
                        ((e) => {
                            (0, g.useEffect)(() => {
                                (null == e ? void 0 : e.clips) &&
                                    0 !== e.clips.length &&
                                    !e.isLoading &&
                                    op({
                                        clipMeta: ((e) => {
                                            var t;
                                            if (!e)
                                                return { clipId: 0, title: '', artists: [], thumbnail: '', previewUrl: '', duration: 0, disclaimers: [], trackIds: [] };
                                            let a = [];
                                            return (
                                                (null == (t = e.disclaimers) ? void 0 : t.every((e) => (0, om.C)(e))) && (a = (0, o_.H)(e.disclaimers)),
                                                {
                                                    clipId: e.clipId,
                                                    title: e.title,
                                                    thumbnail: e.thumbnail,
                                                    previewUrl: e.previewUrl,
                                                    duration: e.duration,
                                                    disclaimers: a,
                                                    version: e.version,
                                                    artists: e.artists.map((e) => {
                                                        let t = (0, k.N)(e),
                                                            a = Number(t.id);
                                                        return { ...t, id: isNaN(a) ? 0 : a };
                                                    }),
                                                    trackIds: [],
                                                }
                                            );
                                        })(e.clips[0]),
                                        additional: { fullUrl: null, locale: null, url: null, tld: '', host: '' },
                                    }).then((e) => {
                                        (0, L.j)(e);
                                    });
                            }, [null == e ? void 0 : e.clips, null == e ? void 0 : e.isLoading]);
                        })(a),
                        (0, g.useEffect)(() => {
                            a.isNeededToLoad && a.modal.isOpened && _ && a.getClips();
                        }, [a, a.isNeededToLoad, a.modal.isOpened, _]),
                        (0, y.jsxs)(f.a, {
                            className: (0, eL.$)(oG().root, oG().important),
                            open: a.modal.isOpened,
                            onOpenChange: a.modal.onOpenChange,
                            onClose: p,
                            portalNode: l,
                            size: 'fullscreen',
                            placement: 'center',
                            showHeader: !1,
                            contentClassName: oG().modalContent,
                            closeOnOutsidePress: !1,
                            escapeKey: !1,
                            transitionDuration: 300 * !!a.withAnimation,
                            'data-test-id': q.e8.videoPlayer.FULLSCREEN_VIDEO_PLAYER_MODAL,
                            children: [
                                (0, y.jsxs)('header', {
                                    className: oG().header,
                                    children: [
                                        (0, y.jsx)(Q.$, {
                                            className: oG().closeButton,
                                            radius: 'round',
                                            color: 'secondary',
                                            size: 'm',
                                            icon: (0, y.jsx)($.I, { variant: 'arrowDown', size: 'xs' }),
                                            onClick: p,
                                            'aria-label': e({ id: 'interface-actions.close' }),
                                            'data-test-id': q.e8.videoPlayer.FULLSCREEN_VIDEO_PLAYER_CLOSE_BUTTON,
                                        }),
                                        (0, y.jsx)(ag.N, {
                                            className: oG().logoLink,
                                            href: '/',
                                            onClick: v,
                                            'aria-label': e({ id: 'navigation.page-main' }),
                                            'data-test-id': q.e8.videoPlayer.FULLSCREEN_VIDEO_PLAYER_LABEL_BUTTON,
                                            children: (0, y.jsx)($.I, { variant: 'musicLogoCenter'.concat(c), className: oG()['logo_'.concat(c.toLocaleLowerCase())] }),
                                        }),
                                    ],
                                }),
                                (0, y.jsx)(oQ, { closeModal: p, withAdaptiveAspectRatio: !0 }),
                                (0, y.jsx)(oz, {}),
                                (0, y.jsx)(l4.Notification, {
                                    className: oG().notification,
                                    enableMultiContainer: !0,
                                    containerId: el.u.FULLSCREEN_INFO,
                                    position: 'bottom-center',
                                }),
                                (0, y.jsx)(l4.Notification, {
                                    className: oG().notification,
                                    enableMultiContainer: !0,
                                    containerId: el.u.FULLSCREEN_ERROR,
                                    position: 'bottom-center',
                                }),
                            ],
                        })
                    );
                }),
                oX = (0, h.PA)(() => {
                    let {
                        settings: { isMobile: e },
                    } = (0, N.g)();
                    return e ? null : (0, y.jsx)(oZ, {});
                });
            var oJ = a(6820),
                o0 = a.n(oJ),
                o1 = a(421),
                o2 = a(91448),
                o4 = a.n(o2);
            let o3 = (e) => {
                let { className: t, artistId: a, artistName: i } = e;
                return (0, y.jsxs)(ag.N, {
                    href: 'https://band.link/scanner?search='.concat(a, '&type=artist_id&service=yandex_music'),
                    className: (0, eL.$)(o4().root, t),
                    'data-test-id': q.e8.content.ARTIST_ABOUT_BANDLINK_SCANNER,
                    children: [
                        (0, y.jsx)($.I, { className: o4().icon, variant: 'bandlink' }),
                        (0, y.jsxs)('div', {
                            className: o4().description,
                            children: [
                                (0, y.jsxs)('div', {
                                    className: o4().descriptionTitle,
                                    children: [
                                        (0, y.jsx)(er.HL, {
                                            variant: 'div',
                                            size: 'l',
                                            weight: 'medium',
                                            className: o4().descriptionTitleText,
                                            children: (0, y.jsx)(eQ.A, { id: 'artist.artist-in-playlists' }),
                                        }),
                                        (0, y.jsx)($.I, { variant: 'link', size: 'xxs', className: o4().descriptionTitleButton }),
                                    ],
                                }),
                                (0, y.jsx)(er.HL, { variant: 'div', size: 'l', weight: 'medium', className: o4().descriptionArtist, children: null != i ? i : '' }),
                            ],
                        }),
                    ],
                });
            };
            var o6 = a(47745),
                o5 = a(23352),
                o8 = a(87356),
                o9 = a.n(o8);
            let o7 = (e) => {
                    var t;
                    let { link: a, artistName: i, shouldSendAnalyticsOnNavigate: l } = e,
                        { formatMessage: n } = (0, Y.A)(),
                        s = (0, o6.N)(),
                        { ref: r, intersectionPropertyId: o } = (0, o5.n)(),
                        c = (0, b.c)(() => {
                            var e;
                            l && s({ to: C.AppScreen.Link, deepLink: null != (e = a.url) ? e : void 0 });
                        });
                    return (0, y.jsx)('div', {
                        ref: r,
                        'data-intersection-property-id': o,
                        children: (0, y.jsx)(ag.N, {
                            href: a.url,
                            className: o9().link,
                            target: '_blank',
                            'aria-label': n({ id: 'artist.artist-links-label' }, { artistName: i, linkName: a.title }),
                            onClick: c,
                            children: (0, y.jsx)(tF._V, {
                                fit: 'contain',
                                className: o9().icon,
                                size: 100,
                                src: null != (t = a.imgUrl) ? t : void 0,
                                fallbackIconVariant: 'site',
                                fallbackIconSize: 'xs',
                                withAvatarReplace: !0,
                            }),
                        }),
                    });
                },
                ce = (e) => {
                    let { links: t, artistName: a, shouldSendAnalyticsOnNavigate: i, albumId: l } = e;
                    return (0, y.jsx)('div', {
                        className: o9().root,
                        'data-test-id': q.e8.content.ARTIST_ABOUT_SOCIAL_LINKS,
                        children: t.map((e, n) =>
                            (0, y.jsx)(
                                rN.B,
                                {
                                    objectType: C.DomainObjectType.Link,
                                    objectId: String(e.url),
                                    objectPosX: n + 1,
                                    objectPosY: 1,
                                    objectsCount: t.length,
                                    mainObjectType: C.DomainObjectType.Link,
                                    mainObjectId: l,
                                    children: (0, y.jsx)(o7, { link: e, artistName: a, shouldSendAnalyticsOnNavigate: i }, e.url),
                                },
                                e.url,
                            ),
                        ),
                    });
                };
            var ct = a(98924),
                ca = a.n(ct);
            let ci = (e) => {
                let { lastMonthListeners: t, lastMonthListenersDelta: a } = e,
                    i = (0, g.useMemo)(() => {
                        let e = (0, y.jsx)('br', {});
                        if (0 === a) return (0, y.jsx)(eQ.A, { id: 'artist.stats-same-listeners-per-month', values: { br: e } });
                        let t = (0, y.jsx)(er.HL, {
                            variant: 'span',
                            className: (0, eL.$)({ [ca().statsNumber_positive]: a > 0, [ca().statsNumber_negative]: a < 0 }),
                            size: 'l',
                            weight: 'medium',
                            children: Math.abs(a).toLocaleString('ru'),
                        });
                        return a > 0
                            ? (0, y.jsx)(eQ.A, { id: 'artist.stats-more-listeners-per-month', values: { number: t, br: e, nbsp: '\xa0' } })
                            : (0, y.jsx)(eQ.A, { id: 'artist.stats-less-listeners-per-month', values: { number: t, br: e, nbsp: '\xa0' } });
                    }, [a]);
                return (0, y.jsxs)('div', {
                    'data-test-id': q.e8.content.ARTIST_ABOUT_STATS,
                    children: [
                        (0, y.jsx)(er.HL, {
                            variant: 'div',
                            className: ca().title,
                            size: 'l',
                            weight: 'medium',
                            'data-test-id': q.e8.content.ARTIST_ABOUT_STATS_TITLE,
                            children: (0, y.jsx)(eQ.A, { id: 'artist.stats-listeners-per-month' }),
                        }),
                        (0, y.jsx)(er.DZ, {
                            size: 'xxl',
                            variant: 'div',
                            className: ca().count,
                            'data-test-id': q.e8.content.ARTIST_ABOUT_STATS_COUNT,
                            children: t.toLocaleString('ru'),
                        }),
                        (0, y.jsx)(er.HL, {
                            variant: 'div',
                            className: ca().stats,
                            size: 'l',
                            weight: 'medium',
                            'data-test-id': q.e8.content.ARTIST_ABOUT_STATS_DYNAMIC,
                            children: i,
                        }),
                    ],
                });
            };
            var cl = a(89214),
                cn = a.n(cl);
            let cs = (0, h.PA)((e) => {
                let { covers: t } = e,
                    { formatMessage: a } = (0, Y.A)(),
                    {
                        modals: { imageSliderModal: i, artistAboutModal: l },
                    } = (0, N.g)(),
                    n = t.slice(0, 1),
                    s = t.length - 2 + 1,
                    r = (0, b.c)((e) => () => {
                        (l.close(), i.openImages({ images: t, initialSlideIndex: e }));
                    });
                return (0, y.jsxs)('div', {
                    className: cn().root,
                    'data-test-id': q.e8.content.ARTIST_ABOUT_IMAGE_SLIDER,
                    children: [
                        n.map((e, t) =>
                            (0, y.jsx)(
                                Q.$,
                                {
                                    className: cn().button,
                                    onClick: r(t),
                                    'aria-label': a({ id: 'slider.view-artist-covers' }),
                                    'data-test-id': q.e8.content.ARTIST_ABOUT_IMAGE_SLIDER_BUTTON,
                                    children: (0, y.jsx)(tF._V, { fit: 'contain', className: cn().image, src: e, size: 400, withAvatarReplace: !0 }),
                                },
                                t,
                            ),
                        ),
                        t[1] &&
                            (0, y.jsxs)(Q.$, {
                                className: cn().button,
                                onClick: r(1),
                                'aria-label': a({ id: 'slider.view-artist-covers' }),
                                'data-test-id': q.e8.content.ARTIST_ABOUT_IMAGE_SLIDER_BUTTON,
                                children: [
                                    (0, y.jsx)(tF._V, { fit: 'contain', className: cn().image, src: t[1], size: 400, withAvatarReplace: !0 }),
                                    (0, y.jsx)('div', {
                                        className: cn().moreCovers,
                                        children: (0, y.jsx)(er.HL, {
                                            variant: 'span',
                                            className: cn().moreCoversText,
                                            size: 'm',
                                            weight: 'medium',
                                            children: (0, y.jsx)(eQ.A, { id: 'slider.images-left-count', values: { imagesLeft: s } }),
                                        }),
                                    }),
                                ],
                            }),
                    ],
                });
            });
            var cr = a(25122),
                co = a.n(cr);
            let cc = (0, h.PA)(() => {
                var e, t, a, i, l, n, s, r;
                let { formatMessage: o } = (0, Y.A)(),
                    {
                        modals: { artistAboutModal: c },
                    } = (0, N.g)(),
                    { state: d, setState: u } = (0, ey.e)(!1),
                    _ = ((e) => {
                        let { formatMessage: t } = (0, Y.A)();
                        return t(e === o1.o.COMPOSER ? { id: 'entity-names.composer' } : { id: 'entity-names.singer' });
                    })(c.artistType);
                return (0, y.jsxs)('div', {
                    className: co().root,
                    children: [
                        c.isResolved &&
                            (0, y.jsxs)('header', {
                                className: co().header,
                                'data-test-id': q.e8.content.ARTIST_ABOUT_HEADER,
                                children: [
                                    (0, y.jsx)(er.HL, {
                                        variant: 'div',
                                        type: 'text',
                                        size: 'm',
                                        weight: 'medium',
                                        className: co().subtitle,
                                        'data-test-id': q.e8.content.ARTIST_ABOUT_HEADER_SUBTITLE,
                                        children: _,
                                    }),
                                    (0, y.jsx)(er.DZ, {
                                        size: 'xxl',
                                        variant: 'div',
                                        className: co().title,
                                        'data-test-id': q.e8.content.ARTIST_ABOUT_HEADER_TITLE,
                                        children: null == (e = c.artist) ? void 0 : e.name,
                                    }),
                                ],
                            }),
                        c.description &&
                            (0, y.jsx)(ef, {
                                moreText: o({ id: 'track-modal.read-more' }),
                                className: co().descriptionWrapper,
                                buttonClassName: co().readMoreButton,
                                buttonProps: { 'data-test-id': q.e8.content.ARTIST_ABOUT_DESCRIPTION_READ_MORE_BUTTON },
                                open: d,
                                onOpenChange: u,
                                lineClamp: 7,
                                withFade: !0,
                                'data-test-id': q.e8.content.ARTIST_ABOUT_DESCRIPTION,
                                children: (0, y.jsx)(
                                    er.HL,
                                    {
                                        variant: 'div',
                                        className: co().description,
                                        size: 'l',
                                        weight: 'medium',
                                        'data-test-id': q.e8.content.ARTIST_ABOUT_DESCRIPTION_TEXT,
                                        children: c.description,
                                    },
                                    null == (t = c.artist) ? void 0 : t.getKey('description'),
                                ),
                            }),
                        c.isArtistStatsAvailable &&
                            (0, y.jsx)(ci, { lastMonthListeners: null != (s = c.lastMonthListeners) ? s : 0, lastMonthListenersDelta: c.lastMonthListenersDelta }),
                        c.isResolved &&
                            (0, y.jsx)(o3, {
                                className: co().bandlinkScanner,
                                artistId: null == (a = c.artist) ? void 0 : a.id,
                                artistName: null == (i = c.artist) ? void 0 : i.name,
                            }),
                        c.links &&
                            (null == (l = c.links) ? void 0 : l.length) > 0 &&
                            (0, y.jsx)(ce, { links: c.links, artistName: null != (r = null == (n = c.artist) ? void 0 : n.name) ? r : '' }),
                        c.covers && c.covers.length > 0 && (0, y.jsx)(cs, { covers: c.covers }),
                    ],
                });
            });
            var cd = a(34698),
                cu = a.n(cd);
            let c_ = () =>
                    (0, y.jsxs)('div', {
                        className: cu().root,
                        children: [(0, y.jsx)(e_.W, { className: cu().entityName }), (0, y.jsx)(e_.W, { className: cu().title }), (0, y.jsx)(ej.q, { count: 4 })],
                    }),
                cm = (0, h.PA)(() => {
                    let { formatMessage: e } = (0, Y.A)(),
                        { notify: t } = (0, en.l)(),
                        { contentRef: a } = (0, j.g)(),
                        {
                            modals: { artistAboutModal: i },
                            settings: { isMobile: l },
                        } = (0, N.g)();
                    (0, g.useEffect)(() => {
                        i.isRejected &&
                            (t((0, y.jsx)(es.h, { error: e({ id: 'artist-errors.error-during-loading-artist-info' }) }), { containerId: el.u.ERROR }), i.close());
                    }, [i, i.isRejected, e, t]);
                    let n = (0, tb.L)(() => (i.isLoading ? (0, y.jsx)(c_, {}) : (0, y.jsx)(cc, {})));
                    return (0, y.jsxs)(f.a, {
                        placement: l ? 'default' : 'right',
                        size: l ? 'fullscreen' : 'fitContent',
                        open: i.modal.isOpened,
                        onClose: i.close,
                        contentClassName: o0().modalContent,
                        headerClassName: o0().header,
                        className: o0().root,
                        overlayClassName: o0().overlay,
                        onOpenChange: i.onOpenChange,
                        labelClose: e({ id: 'interface-actions.close' }),
                        portalNode: l ? null : a,
                        showHeader: !1,
                        'data-test-id': q.Xk.artist.ARTIST_ABOUT_MODAL,
                        children: [
                            (0, y.jsx)(Q.$, {
                                radius: 'round',
                                color: 'secondary',
                                size: 'xxs',
                                icon: (0, y.jsx)($.I, { variant: 'close', size: 'xxs' }),
                                className: o0().closeButton,
                                onClick: i.close,
                                'aria-label': e({ id: 'interface-actions.close' }),
                                'data-test-id': q.Xk.artist.ARTIST_ABOUT_MODAL_CLOSE_BUTTON,
                            }),
                            n,
                        ],
                    });
                });
            var cp = a(48454),
                cv = a(70314),
                cx = a(15358),
                cy = a(70009),
                ch = a.n(cy);
            let cC = (0, h.PA)((e) => {
                var t, a, i, l, n, s, r;
                let { modal: o } = e,
                    { formatMessage: c } = (0, Y.A)(),
                    { communication: d, experiments: u } = (0, N.g)(),
                    _ = null == (t = o.modalItem) ? void 0 : t.content.isModal,
                    m = u.checkExperiment(T.z.WebNextErids, 'on'),
                    p = null == (a = o.modalItem) ? void 0 : a.content.advDisclaimer,
                    [v, x] = (0, g.useState)(!1),
                    h = (0, g.useMemo)(() => {
                        var e;
                        return null == (e = o.modalItem)
                            ? void 0
                            : e.content.buttons.map((e) => {
                                  var t;
                                  return (0, y.jsx)(
                                      cv.t,
                                      {
                                          screenId: null == (t = o.modalItem) ? void 0 : t.screenId,
                                          anchorId: o.anchorId,
                                          button: e,
                                          buttonSize: 'default',
                                          buttonClassName: ch().button,
                                          textClassName: ch().buttonText,
                                          hide: o.close,
                                          feedbackToken: o.modalItem ? o.modalItem.feedbackToken : null,
                                      },
                                      e.text,
                                  );
                              });
                    }, [o]),
                    C = (0, g.useMemo)(() => {
                        let e = { bg: {}, title: {}, text: {}, disclaimer: {} };
                        if (!o.modalItem) return e;
                        let { bgUrl: t, bgUrlLarge: a, bgColor: i, titleColor: l, textColor: n, disclaimerColor: s } = o.modalItem.content;
                        return (
                            t && (e.bg['--bg-url'] = 'url("'.concat(t, '")')),
                            a && (e.bg['--bg-url-large'] = 'url("'.concat(a, '")')),
                            i && (e.bg.backgroundColor = i),
                            l && (e.title.color = l),
                            n && (e.text.color = n),
                            s && (e.disclaimer['--disclaimer-color'] = s),
                            e
                        );
                    }, [o]),
                    A = (0, g.useCallback)(() => {
                        (o.modalItem &&
                            o.modalItem.content.closeActionId &&
                            d.action(o.modalItem.anchorId, o.modalItem.screenId, o.modalItem.content.closeActionId, o.modalItem.feedbackToken),
                            o.close());
                    }, [o, d]),
                    b = (0, g.useMemo)(() => {
                        var e;
                        if (null == (e = o.modalItem) ? void 0 : e.content.logoUrl)
                            return (0, y.jsx)(tF._V, {
                                className: ch().image,
                                withAvatarReplace: !0,
                                withFallback: !1,
                                src: o.modalItem.content.logoUrl,
                                withAspectRatio: !0,
                                size: 400,
                                fit: 'cover',
                            });
                    }, [o]),
                    j = (0, g.useMemo)(() => {
                        var e;
                        return (
                            (null == (e = o.modalItem) ? void 0 : e.content.disclaimer) &&
                            (0, cx.r)(o.modalItem.content.disclaimer, ag.N, { className: ch().disclaimerLink, style: C.disclaimer, target: '_blank' })
                        );
                    }, [o, C]);
                return (0, y.jsxs)(f.a, {
                    style: C.bg,
                    className: (0, eL.$)(ch().root, _ ? ch().root_modal : ch().root_fullscreen),
                    headerClassName: ch().modalHeader,
                    contentClassName: ch().modalContent,
                    header:
                        b &&
                        (0, y.jsx)('div', {
                            className: (0, eL.$)(ch().imageWrapper, ch().imageWrapper_header),
                            'data-test-id': q.Kq.communicationModal.COMMUNICATION_MODAL_HEADER_LOGO,
                            children: b,
                        }),
                    open: o.isOpened,
                    onOpenChange: o.onOpenChange,
                    onClose: A,
                    closeOnOutsidePress: !1,
                    size: _ ? 'fitContent' : 'fullscreen',
                    overlayColor: _ ? 'full' : 'transparent',
                    placement: 'center',
                    labelClose: c({ id: 'interface-actions.close' }),
                    customCloseButton: (0, y.jsx)(
                        Q.$,
                        {
                            radius: 'round',
                            size: 'xxs',
                            icon: (0, y.jsx)($.I, { className: ch().closeButtonIcon, variant: 'close', size: 'xxs' }),
                            onClick: A,
                            'aria-label': c({ id: 'interface-actions.close' }),
                            className: ch().closeButton,
                            withHover: !1,
                            'data-test-id': q.Kq.communicationModal.COMMUNICATION_MODAL_CLOSE_CROSS_BUTTON,
                        },
                        ''.concat(null == (i = o.modalItem) ? void 0 : i.anchorId, '-').concat(null == (l = o.modalItem) ? void 0 : l.content.closeActionId),
                    ),
                    'data-test-id': q.Kq.communicationModal.COMMUNICATION_MODAL,
                    children: [
                        (0, y.jsxs)('div', {
                            className: ch().container,
                            children: [
                                (0, y.jsxs)('div', {
                                    className: ch().wrapper,
                                    children: [
                                        b &&
                                            (0, y.jsx)('div', {
                                                className: (0, eL.$)(ch().imageWrapper, ch().imageWrapper_content),
                                                'data-test-id': q.Kq.communicationModal.COMMUNICATION_MODAL_CONTENT_LOGO,
                                                children: b,
                                            }),
                                        (null == (n = o.modalItem) ? void 0 : n.content.title) &&
                                            (0, y.jsx)(er.DZ, {
                                                className: ch().title,
                                                style: C.title,
                                                size: 'xl',
                                                weight: 'black',
                                                variant: 'h1',
                                                lineClamp: 3,
                                                'data-test-id': q.Kq.communicationModal.COMMUNICATION_MODAL_TITLE_TEXT,
                                                children: o.modalItem.content.title,
                                            }),
                                        (null == (s = o.modalItem) ? void 0 : s.content.text) &&
                                            (0, y.jsx)(er.DZ, {
                                                className: ch().text,
                                                style: C.text,
                                                size: 'xs',
                                                variant: 'h2',
                                                lineClamp: 4,
                                                'data-test-id': q.Kq.communicationModal.COMMUNICATION_MODAL_CONTENT_TEXT,
                                                children: o.modalItem.content.text,
                                            }),
                                        (0, y.jsx)(tz.r, {
                                            page: tW.l.MUSIC_DEEPLINK_SCREEN,
                                            places: [tK.R.TOP_BUTTON],
                                            children: (0, y.jsx)('div', { className: ch().buttons, children: h }),
                                        }),
                                    ],
                                }),
                                (0, y.jsxs)('div', {
                                    className: ch().disclaimerWrapper,
                                    style: C.disclaimer,
                                    children: [
                                        (0, y.jsx)(er.HL, {
                                            className: ch().disclaimer,
                                            type: 'text',
                                            variant: 'div',
                                            size: 'xs',
                                            weight: 'normal',
                                            'data-test-id': q.Kq.communicationModal.COMMUNICATION_MODAL_DISCLAIMER,
                                            children: j,
                                        }),
                                        m &&
                                            p &&
                                            (0, y.jsxs)(cp.AM, {
                                                placement: _ ? 'top' : 'top-start',
                                                open: v,
                                                onOpenChange: x,
                                                offsetOptions: 8,
                                                transform: !1,
                                                children: [
                                                    (0, y.jsxs)(Q.$, {
                                                        variant: 'text',
                                                        color: 'secondary',
                                                        withHover: !1,
                                                        withRipple: !1,
                                                        className: (0, eL.$)(
                                                            ch().advDisclaimerTrigger,
                                                            _ ? ch().advDisclaimerTrigger_modal : ch().advDisclaimerTrigger_fullscreen,
                                                        ),
                                                        'data-test-id': q.Kq.communicationModal.COMMUNICATION_MODAL_ADV_DISCLAIMER_TRIGGER_BUTTON,
                                                        children: [
                                                            (0, y.jsx)(eQ.A, { id: 'ads.ad' }),
                                                            (0, y.jsx)($.I, { variant: 'moreOutlined', size: _ ? 'xxxs' : 'xxs' }),
                                                        ],
                                                    }),
                                                    (0, y.jsx)(cp.hl, {
                                                        className: ch().advDisclaimerPopover,
                                                        children: (0, y.jsx)(er.HL, {
                                                            className: ch().advDisclaimerText,
                                                            variant: 'p',
                                                            type: 'text',
                                                            size: 'xs',
                                                            weight: 'medium',
                                                            'data-test-id': q.Kq.communicationModal.COMMUNICATION_MODAL_ADV_DISCLAIMER_TEXT,
                                                            children: p,
                                                        }),
                                                    }),
                                                ],
                                            }),
                                    ],
                                }),
                            ],
                        }),
                        !_ && (null == (r = o.modalItem) ? void 0 : r.content.withShadow) && (0, y.jsx)('div', { className: ch().gradientOverlay }),
                    ],
                });
            });
            a(73905);
            var cg = a(66666),
                cA = a.n(cg);
            let cb = (0, h.PA)(() => {
                var e, t, a, i;
                let {
                        settings: { isMobile: l },
                        modals: { imageSliderModal: n },
                    } = (0, N.g)(),
                    { formatMessage: s } = (0, Y.A)(),
                    { contentRef: r } = (0, j.g)(),
                    o = (0, ru.z)(),
                    c = (0, g.useRef)(null),
                    [d, u] = (0, g.useState)(!0),
                    [_, m] = (0, g.useState)(!1),
                    [p, v] = (0, g.useState)(0),
                    x = (null != (i = null == (e = n.images) ? void 0 : e.length) ? i : 0) > 1,
                    h = (0, b.c)(() => {
                        var e;
                        null == (e = c.current) || e.swiper.slideNext();
                    }),
                    C = (0, b.c)(() => {
                        var e;
                        null == (e = c.current) || e.swiper.slidePrev();
                    }),
                    A = (0, b.c)((e) => {
                        (u(e.isBeginning), m(e.isEnd), v(e.activeIndex));
                    });
                return (
                    (0, g.useEffect)(() => {
                        setTimeout(() => {
                            var e, t, a;
                            (null == (e = c.current) ? void 0 : e.swiper) &&
                                (u(0 === c.current.swiper.activeIndex),
                                m(c.current.swiper.activeIndex === (null != (a = null == (t = n.images) ? void 0 : t.length) ? a : 0) - 1),
                                v(c.current.swiper.activeIndex));
                        });
                    }, [null == (t = n.images) ? void 0 : t.length, l]),
                    (0, g.useEffect)(() => {
                        n.modal.isOpened
                            ? (null == o || o.disable(rd.M.MAIN, rc.l.CLOSE),
                              null == o || o.disable(rd.M.MAIN, rc.l.SLIDE_BACKWARD),
                              null == o || o.disable(rd.M.MAIN, rc.l.SLIDE_FORWARD),
                              null == o || o.enable(rd.M.IMAGE_SLIDER, rc.l.CLOSE))
                            : (null == o || o.disable(rd.M.IMAGE_SLIDER, rc.l.CLOSE),
                              null == o || o.enable(rd.M.MAIN, rc.l.CLOSE),
                              null == o || o.enable(rd.M.MAIN, rc.l.SLIDE_BACKWARD),
                              null == o || o.enable(rd.M.MAIN, rc.l.SLIDE_FORWARD));
                    }, [o, n.modal.isOpened]),
                    (0, g.useEffect)(
                        () => (
                            null == o ||
                                o.addShortcutsListener(rd.M.IMAGE_SLIDER, rc.l.CLOSE, () => {
                                    n.modal.isOpened && n.close();
                                }),
                            () => {
                                (null == o || o.removeShortcutsListener(rd.M.IMAGE_SLIDER, rc.l.CLOSE),
                                    null == o || o.disable(rd.M.IMAGE_SLIDER, rc.l.CLOSE),
                                    null == o || o.enable(rd.M.MAIN, rc.l.CLOSE),
                                    null == o || o.enable(rd.M.MAIN, rc.l.SLIDE_BACKWARD),
                                    null == o || o.enable(rd.M.MAIN, rc.l.SLIDE_FORWARD),
                                    n.close());
                            }
                        ),
                        [o, n],
                    ),
                    (0, y.jsxs)(f.a, {
                        className: (0, eL.$)(cA().root, { [cA().root_mobile]: l }),
                        contentClassName: cA().modalContent,
                        open: n.modal.isOpened,
                        size: l ? 'fullscreen' : 'fitContent',
                        placement: 'center',
                        showHeader: !1,
                        isMobile: l,
                        onClose: n.close,
                        escapeKey: !1,
                        onOpenChange: n.modal.onOpenChange,
                        portalNode: l ? null : r,
                        withAnimation: !n.modal.isOpened,
                        'data-test-id': q.e8.imageSlider.IMAGE_SLIDER_MODAL,
                        children: [
                            (0, y.jsx)('div', {
                                className: cA().leftArrowWrapper,
                                children:
                                    x &&
                                    (0, y.jsx)(Q.$, {
                                        radius: 'round',
                                        color: 'secondary',
                                        size: 'xxs',
                                        icon: (0, y.jsx)($.I, { variant: 'arrowLeft', size: 'xxs' }),
                                        onClick: C,
                                        disabled: d,
                                        'aria-label': s({ id: 'slider.prev-image' }),
                                        'data-test-id': q.e8.imageSlider.IMAGE_SLIDER_MODAL_PREV_SLIDE_BUTTON,
                                    }),
                            }),
                            (0, y.jsx)('div', {
                                className: cA().rightArrowWrapper,
                                children:
                                    x &&
                                    (0, y.jsx)(Q.$, {
                                        radius: 'round',
                                        color: 'secondary',
                                        size: 'xxs',
                                        icon: (0, y.jsx)($.I, { variant: 'arrowRight', size: 'xxs' }),
                                        onClick: h,
                                        disabled: _,
                                        'aria-label': s({ id: 'slider.next-image' }),
                                        'data-test-id': q.e8.imageSlider.IMAGE_SLIDER_MODAL_NEXT_SLIDE_BUTTON,
                                    }),
                            }),
                            (0, y.jsx)(Q.$, {
                                radius: 'round',
                                color: 'secondary',
                                size: 'xxs',
                                icon: (0, y.jsx)($.I, { variant: 'close', size: 'xxs' }),
                                className: cA().closeButton,
                                onClick: n.close,
                                'aria-label': s({ id: 'slider.close-image-modal' }),
                                'data-test-id': q.e8.imageSlider.IMAGE_SLIDER_MODAL_CLOSE_BUTTON,
                            }),
                            (0, y.jsx)('div', {
                                className: cA().content,
                                children: (0, y.jsx)(sd.RC, {
                                    initialSlide: n.initialSlideIndex,
                                    className: cA().slider,
                                    wrapperClass: cA().wrapper,
                                    ref: c,
                                    onActiveIndexChange: A,
                                    a11y: { enabled: !0, containerMessage: s({ id: 'slider.image-slider-modal' }) },
                                    pagination: { dynamicBullets: !0, dynamicMainBullets: 4 },
                                    modules: [sc.dK, sc.s3],
                                    keyboard: !0,
                                    children:
                                        null == (a = n.images)
                                            ? void 0
                                            : a.map((e, t) => {
                                                  var a, i;
                                                  let l = ((e, t) => e >= t - 5 && e <= t + 5)(t, p) ? e : void 0;
                                                  return (0, y.jsxs)(
                                                      sd.qr,
                                                      {
                                                          className: cA().slide,
                                                          'data-test-id': q.e8.imageSlider.IMAGE_SLIDER_MODAL_SLIDE,
                                                          children: [
                                                              (0, y.jsx)(tF._V, {
                                                                  fit: 'contain',
                                                                  className: (0, eL.$)(cA().image, { [cA().image_loading]: !n.isImageLoaded(l) }),
                                                                  src: l,
                                                                  size: n.sizeImage,
                                                                  tabIndex: t === p ? 0 : -1,
                                                                  'aria-roledescription': s({ id: 'slider.slide' }),
                                                                  'aria-label': s(
                                                                      { id: 'slider.image-counter' },
                                                                      { index: t + 1, count: null != (i = null == (a = n.images) ? void 0 : a.length) ? i : 0 },
                                                                  ),
                                                                  onLoadBySrc: n.setImageIsLoaded,
                                                                  withLoadingIndicator: !1,
                                                                  withSrcSet: !1,
                                                                  withAvatarReplace: !0,
                                                                  withAspectRatio: n.withAspectRatio,
                                                              }),
                                                              t === p &&
                                                                  (0, y.jsx)('div', {
                                                                      className: (0, eL.$)(cA().loadingIndicator, {
                                                                          [cA().loadingIndicator_showed]: !n.isImageLoaded(l),
                                                                      }),
                                                                      children: (0, y.jsx)(tX.y, { size: 'm' }),
                                                                  }),
                                                          ],
                                                      },
                                                      t,
                                                  );
                                              }),
                                }),
                            }),
                        ],
                    })
                );
            });
            var cf = a(84051),
                cj = a(42530),
                cN = a(38776),
                cT = a.n(cN);
            let cS = (0, h.PA)((e) => {
                let { modalModel: t, children: a } = e,
                    {
                        settings: { isMobile: i },
                        multivibe: l,
                    } = (0, N.g)(),
                    { contentRef: n } = (0, j.g)(),
                    { formatMessage: s } = (0, Y.A)();
                return (0, y.jsx)(f.a, {
                    className: cT().root,
                    contentClassName: cT().content,
                    header: l.isNDAEnabled && (0, y.jsx)(cj.b, {}),
                    headerClassName: cT().header,
                    size: 'fitContent',
                    placement: i ? 'default' : 'right',
                    portalNode: i ? void 0 : n,
                    isMobile: i,
                    enableSwipe: i,
                    withOverlay: !0,
                    overlayColor: 'transparent',
                    labelClose: s({ id: 'interface-actions.close' }),
                    open: t.isOpened,
                    onOpenChange: t.onOpenChange,
                    onClose: t.close,
                    showHeader: !0,
                    closeButtonProps: i && { hidden: !0 },
                    closeButtonDataTestId: q.Kq.multivibe.MULTIVIBE_MODAL_CLOSE_BUTTON,
                    'data-test-id': q.Kq.multivibe.MULTIVIBE_MODAL,
                    children: a,
                });
            });
            var cI = a(12350),
                ck = a(82585),
                cL = a(57586),
                cE = a(73478),
                cM = a(15560),
                cP = a.n(cM);
            let cO = (e) => {
                    let { title: t, description: a, withSubtitle: i } = e;
                    return (0, y.jsxs)('div', {
                        className: cP().root,
                        children: [
                            (0, y.jsx)(er.DZ, {
                                variant: 'h1',
                                size: 'l',
                                weight: 'bold',
                                className: (0, eL.$)(cP().title, { [cP().title_withSubtitle]: i }),
                                dangerouslySetInnerHTML: { __html: (0, Z.sanitizeDOM)(t) },
                                'data-test-id': q.Kq.multivibe.MULTIVIBE_MODAL_TITLE,
                            }),
                            i &&
                                (0, y.jsx)(er.HL, {
                                    variant: 'div',
                                    type: 'entity',
                                    size: 'l',
                                    weight: 'medium',
                                    className: cP().subtitle,
                                    children: (0, y.jsx)(eQ.A, { id: 'multivibe.modal-subtitle' }),
                                }),
                            (0, y.jsx)(er.HL, {
                                variant: 'div',
                                type: 'text',
                                size: 'l',
                                weight: 'medium',
                                className: cP().description,
                                dangerouslySetInnerHTML: { __html: (0, Z.sanitizeDOM)(a) },
                                'data-test-id': q.Kq.multivibe.MULTIVIBE_MODAL_DESCRIPTION,
                            }),
                        ],
                    });
                },
                cw = (0, h.PA)((e) => {
                    let { roomId: t, onClose: a } = e,
                        { formatMessage: i } = (0, Y.A)(),
                        { initCopyVibeRoomInviteLink: l } = (0, ck.r)({ onSuccess: a }),
                        n = (0, cI.m)(),
                        s = (0, b.c)(() => {
                            n({
                                actionType: C.ActionType.Copied,
                                userInteractionType: C.UserInteractionType.Tap,
                                objectType: C.DomainObjectType.Link,
                                objectPosX: 1,
                                objectPosY: 1,
                                objectCount: 0,
                                objectId: '',
                            });
                            let { copy: e } = l();
                            e(t);
                        });
                    return (0, y.jsxs)(y.Fragment, {
                        children: [
                            (0, y.jsx)(cE.t, { src: 'avatars.mds.yandex.net/get-music-misc/28052/img.6a58b7c30bdb737c087aeab4/%%' }),
                            (0, y.jsx)(cO, { title: i({ id: 'multivibe.only-member-modal-title' }), description: i({ id: 'multivibe.only-member-modal-description' }) }),
                            (0, y.jsx)(Q.$, {
                                color: 'primary',
                                size: 'default',
                                onClick: s,
                                radius: 'xxxl',
                                isBlock: !0,
                                'data-test-id': q.Kq.multivibe.MULTIVIBE_COPY_LINK_BUTTON,
                                children: i({ id: 'interface-actions.copy-link' }),
                            }),
                            (0, y.jsx)(cL.j, {}),
                        ],
                    });
                }),
                cR = (0, h.PA)((e) => {
                    let { roomId: t } = e,
                        { multivibe: a } = (0, N.g)(),
                        { resetDisabledRoomId: i, disabledRoomInfoModal: l } = a,
                        n = (0, cf.l)({ mainObjectType: C.DomainObjectType.NonApplicable });
                    return (
                        (0, g.useEffect)(() => () => i(), [i]),
                        (0, g.useEffect)(() => {
                            if (l.isOpened)
                                return (
                                    n(!0),
                                    () => {
                                        n(!1);
                                    }
                                );
                        }, [n, l.isOpened]),
                        (0, y.jsx)(cS, { modalModel: l, children: (0, y.jsx)(cw, { roomId: t, onClose: l.close }) })
                    );
                });
            var cD = a(22714),
                cB = a(14537);
            let cF = (0, h.PA)((e) => {
                let { onLinkCreateSuccess: t } = e,
                    { formatMessage: a } = (0, Y.A)();
                return (0, y.jsxs)(y.Fragment, {
                    children: [
                        (0, y.jsx)(cE.t, { src: 'avatars.mds.yandex.net/get-music-misc/28052/img.6a58b7c40bdb737c087aeab5/%%' }),
                        (0, y.jsx)(cO, {
                            title: a({ id: 'multivibe.invite-modal-invalid-title' }),
                            description: a({ id: 'multivibe.invite-modal-invalid-description' }),
                        }),
                        (0, y.jsx)(cB.M, { isBlock: !0, title: a({ id: 'multivibe.invite-modal-invalid-button-text' }), onSuccess: t }),
                        (0, y.jsx)(cL.j, {}),
                    ],
                });
            });
            var cU = a(43564);
            let cz = (0, h.PA)((e) => {
                let { seeds: t } = e,
                    { formatMessage: a } = (0, Y.A)(),
                    { pageId: i } = (0, rC.$)(),
                    l = (0, eJ.b)(),
                    { togglePlay: n, isPlaying: s } = (0, cU.B)({ seeds: t, pageIdForFrom: i, blockIdForFrom: C.EntityTypes.Multiwave }),
                    r = (0, b.c)(() => {
                        (l(!s), n());
                    });
                return (0, y.jsxs)(y.Fragment, {
                    children: [
                        (0, y.jsx)(cE.t, {}),
                        (0, y.jsx)(cO, { title: a({ id: 'multivibe.enabled-room-modal-title' }), description: a({ id: 'multivibe.enabled-room-modal-description' }) }),
                        (0, y.jsx)(Q.$, {
                            color: 'primary',
                            size: 'default',
                            onClick: r,
                            radius: 'xxxl',
                            isBlock: !0,
                            'data-test-id': q.Kq.multivibe.MULTIVIBE_PLAY_ROOM_BUTTON,
                            children: a({ id: 'multivibe.enabled-room-modal-button-text' }),
                        }),
                        (0, y.jsx)(cL.j, {}),
                    ],
                });
            });
            var cW = a(3961),
                cK = a(58008),
                cH = a(3192),
                cV = a.n(cH);
            let cY = (0, h.PA)((e) => {
                let { room: t, member: a } = e,
                    { formatMessage: i } = (0, Y.A)(),
                    { enterVibeRoom: l, isPending: n } = ((e) => {
                        var t, a;
                        let { room: i } = e,
                            { multivibe: l } = (0, N.g)(),
                            { notify: n } = (0, en.l)(),
                            { formatMessage: s } = (0, Y.A)(),
                            { pageId: r } = (0, rC.$)(),
                            o = (0, eJ.b)(),
                            { resetContext: c, isPlaying: d } = (0, cU.B)({
                                seeds: null != (a = null == (t = i.wave) ? void 0 : t.seeds) ? a : [],
                                pageIdForFrom: r,
                                blockIdForFrom: C.EntityTypes.Multiwave,
                            }),
                            [u, _] = (0, g.useState)(!1),
                            m = (0, g.useRef)(!1);
                        return {
                            enterVibeRoom: (0, b.c)(async () => {
                                if (m.current) return;
                                (_(!0), (m.current = !0));
                                let e = await l.enterRoom({ roomId: i.id }),
                                    t = l.duplicateRoomId;
                                if ((t && e === cK.F.ERROR && l.errorName === cW.z.ROOM_DUPLICATION && (e = await l.enterRoom({ roomId: t })), e === cK.F.ERROR))
                                    n((0, y.jsx)(es.h, { error: s({ id: 'error-messages.error-during-action' }) }), { containerId: el.u.ERROR });
                                else {
                                    var a, r, u;
                                    let e = l.invitationRoom,
                                        t = null != (u = null == e || null == (a = e.wave) ? void 0 : a.seeds) ? u : [];
                                    (await c(t), o(!d, null == e || null == (r = e.wave) ? void 0 : r.seedsId));
                                }
                                (_(!1), (m.current = !1));
                            }),
                            isPending: u,
                        };
                    })({ room: t }),
                    s = (0, b.c)(() => l()),
                    { name: r, cover: o } = a;
                return (0, y.jsxs)(y.Fragment, {
                    children: [
                        (0, y.jsx)('div', {
                            className: cV().imageContainer,
                            children: (0, y.jsx)(cE.t, {
                                src: o.uri,
                                className: (0, eL.$)(cV().multivibeCover, cV().guestAvatar),
                                imageClassName: cV().multivibeAvatar,
                                withSrcSet: !1,
                                withAspectRatio: !1,
                                withTopSpace: !1,
                            }),
                        }),
                        (0, y.jsx)(cO, {
                            title: i({ id: 'multivibe.invite-modal-valid-title' }, { name: r }),
                            description: i({ id: 'multivibe.invite-modal-valid-description' }),
                        }),
                        (0, y.jsx)(Q.$, {
                            color: 'primary',
                            size: 'default',
                            onClick: s,
                            disabled: n,
                            spinner: n ? (0, y.jsx)(tX.y, { size: 'xs' }) : void 0,
                            radius: 'xxxl',
                            isBlock: !0,
                            'data-test-id': q.Kq.multivibe.MULTIVIBE_JOIN_ROOM_BUTTON,
                            children: i({ id: 'multivibe.invite-modal-valid-button-text' }),
                        }),
                        (0, y.jsx)(cL.j, {}),
                    ],
                });
            });
            var cq = a(95982);
            let cQ = (0, h.PA)((e) => {
                let { onButtonClick: t } = e,
                    { formatMessage: a } = (0, Y.A)();
                return (0, y.jsxs)(y.Fragment, {
                    children: [
                        (0, y.jsx)(cE.t, {}),
                        (0, y.jsx)(cO, { title: a({ id: 'multivibe.invite-modal-draft-title' }), description: a({ id: 'multivibe.invite-modal-draft-description' }) }),
                        (0, y.jsx)(cq.m, { onButtonClick: t }),
                        (0, y.jsx)(cL.j, {}),
                    ],
                });
            });
            var c$ = a(77156);
            let cG = (0, h.PA)((e) => {
                    var t, a;
                    let { children: i } = e,
                        { multivibe: l, vibe: n } = (0, N.g)(),
                        { invitationRoom: s, inviteModal: r, isGetRoomByIdLoading: o } = l,
                        c = (0, cf.l)({ mainObjectType: C.DomainObjectType.NonApplicable });
                    (0, g.useEffect)(() => {
                        if (r.isOpened)
                            return (
                                c(!0),
                                () => {
                                    c(!1);
                                }
                            );
                    }, [c, r.isOpened]);
                    let d = ((e) => {
                        var t, a;
                        let { sonataState: i, vibe: l } = (0, N.g)();
                        return i.isVibeContext && (0, c$._)(null != (a = null == (t = l.meta) ? void 0 : t.seeds) ? a : [], e) && i.isPlaying;
                    })(null != (a = null == s || null == (t = s.wave) ? void 0 : t.seeds) ? a : []);
                    return ((0, g.useEffect)(() => {
                        d && r.close();
                    }, [d, r]),
                    o || n.isApplying || d)
                        ? (0, y.jsx)('div', { className: cV().spinnerWrapper, children: (0, y.jsx)(tX.y, { size: 'xl' }) })
                        : i;
                }),
                cZ = (0, h.PA)(() => {
                    var e, t;
                    let { multivibe: a, user: i } = (0, N.g)(),
                        { inviteModal: l, invitationRoom: n } = a,
                        s = l.close,
                        r = null != (t = null == n || null == (e = n.wave) ? void 0 : e.seedsId) ? t : '',
                        { blockType: o, content: c } = (0, tb.L)(() => {
                            var e, t;
                            if (!n) return { blockType: C.EntityTypes.MultivibeInvalidInvitation, content: (0, y.jsx)(cF, { onLinkCreateSuccess: s }) };
                            let { isDraft: a, isDisabled: l, isEnabled: r, owner: o, members: c } = n,
                                d = o.uid && o.uid === i.puid,
                                u = c[0],
                                _ = o.isActive ? o : u,
                                m = (null == _ ? void 0 : _.uid) && _.uid === i.puid,
                                p = null != (t = null == (e = n.wave) ? void 0 : e.seeds) ? t : [];
                            return r
                                ? { blockType: C.EntityTypes.MultivibeAlreadyExists, content: (0, y.jsx)(cz, { seeds: p }) }
                                : a && d
                                  ? { blockType: C.EntityTypes.MultivibePendingInvitation, content: (0, y.jsx)(cQ, { onButtonClick: s }) }
                                  : a && !d && o
                                    ? { blockType: C.EntityTypes.MultivibeAcceptingInvitation, content: (0, y.jsx)(cY, { room: n, member: o }) }
                                    : l && m
                                      ? { blockType: C.EntityTypes.MultivibeAlone, content: (0, y.jsx)(cw, { roomId: n.id, onClose: s }) }
                                      : l && !m && _
                                        ? { blockType: C.EntityTypes.MultivibeAcceptingInvitation, content: (0, y.jsx)(cY, { room: n, member: _ }) }
                                        : { blockType: C.EntityTypes.MultivibeInvalidInvitation, content: (0, y.jsx)(cF, { onLinkCreateSuccess: s }) };
                        });
                    return (0, y.jsx)(cD.n, {
                        pageId: ta._Q.MULTIVIBE_UNIFIED_SCREEN,
                        pageStyle: C.PageStyles.Sheet,
                        pagePlacement: C.PagePlacements.Bottom,
                        pageEntityId: '',
                        children: (0, y.jsx)(cS, {
                            modalModel: l,
                            children: (0, y.jsx)(rj.F, {
                                blockId: '',
                                blockType: o,
                                blockPosX: 1,
                                blockPosY: 1,
                                children: (0, y.jsx)(rN.B, {
                                    objectId: r,
                                    objectsCount: 0,
                                    objectPosX: 1,
                                    objectPosY: 1,
                                    objectType: C.DomainObjectType.Wave,
                                    children: (0, y.jsx)(cG, { children: c }),
                                }),
                            }),
                        }),
                    });
                });
            var cX = a(78920),
                cJ = a.n(cX);
            let c0 = (0, h.PA)(() => {
                let { multivibe: e } = (0, N.g)(),
                    { formatMessage: t } = (0, Y.A)(),
                    { promoModal: a } = e,
                    i = (0, cf.l)({ mainObjectType: C.DomainObjectType.NonApplicable });
                return (
                    (0, g.useEffect)(() => {
                        if (a.isOpened)
                            return (
                                i(!0),
                                () => {
                                    i(!1);
                                }
                            );
                    }, [a.isOpened, i]),
                    (0, y.jsxs)(cS, {
                        modalModel: a,
                        children: [
                            (0, y.jsx)(cE.t, {
                                src: 'avatars.mds.yandex.net/get-music-misc/28052/img.6a4e4cb644dcec5277bcec98/%%',
                                className: cJ().imageWrapper,
                                size: 400,
                                withTopSpace: !1,
                            }),
                            (0, y.jsx)(cO, {
                                title: t({ id: 'multivibe.promo-modal-title' }),
                                description: t({ id: 'multivibe.promo-modal-description' }),
                                withSubtitle: !0,
                            }),
                            (0, y.jsx)(cB.M, { isBlock: !0, title: t({ id: 'interface-actions.copy-link' }), onSuccess: a.close }),
                            (0, y.jsx)(cL.j, {}),
                        ],
                    })
                );
            });
            var c1 = a(30627),
                c2 = a(43922),
                c4 = a(4408);
            let c3 = (e, t) => (c4.s.test(e) ? e : 0 === e.trim().length ? ''.concat(t, 'px') : ''.concat(Math.max(Number(e), t), 'px'));
            var c6 = a(86085),
                c5 = a.n(c6);
            let c8 = (e) => {
                let { closeToast: t } = e;
                return (0, y.jsx)(l5.$, {
                    closeToast: t,
                    cover: (0, y.jsx)($.I, { className: c5().icon, size: 'xs', variant: 'chain' }),
                    message: (0, y.jsx)(er.HL, {
                        className: c5().message,
                        variant: 'div',
                        type: 'controls',
                        size: 'm',
                        children: (0, y.jsx)(eQ.A, { id: 'notifications-info.html-code-copied' }),
                    }),
                    coverRadius: 's',
                });
            };
            var c9 = a(19681),
                c7 = a.n(c9);
            let de = (0, h.PA)((e) => {
                let { entity: t } = e,
                    { formatMessage: a } = (0, Y.A)(),
                    { language: i } = (0, tk.h)(),
                    { notify: l } = (0, en.l)();
                (0, g.useEffect)(() => {
                    t.setListenMessage((e) => a({ id: 'share.iframe-listen' }, { html: e }));
                }, [t, a]);
                let n = (0, b.c)((e) => {
                        let {
                            target: { value: a },
                        } = e;
                        t.setWidth(a);
                    }),
                    s = (0, b.c)((e) => {
                        let {
                            target: { value: a },
                        } = e;
                        !c4.s.test(a) && (0 === a.length || Number.isNaN(Number(a)) || Number(a) < c2.JQ) && t.setWidth(String(c2.JQ));
                    }),
                    r = (0, b.c)((e) => {
                        let {
                            target: { value: a },
                        } = e;
                        t.setHeight(a);
                    }),
                    o = (0, b.c)((e) => {
                        let {
                            target: { value: a },
                        } = e;
                        !c4.s.test(a) && (0 === a.length || Number.isNaN(Number(a)) || Number(a) < c2.IR) && t.setHeight(String(c2.IR));
                    }),
                    c = { width: c3(t.width, c2.JQ), height: c3(t.height, c2.IR) },
                    d = t.iframeUri.replace(c2.bL, i),
                    u = t.iframeCode.replace(c2.bL, i),
                    _ = (0, b.c)(async () => {
                        (await window.navigator.clipboard.writeText(u), l((0, y.jsx)(c8, {}), { containerId: el.u.INFO }));
                    });
                return (0, y.jsxs)('div', {
                    className: c7().root,
                    'data-test-id': q.Kq.shareIframe.SHARE_IFRAME_EDITOR,
                    children: [
                        (0, y.jsxs)('form', {
                            className: c7().controls,
                            children: [
                                (0, y.jsxs)('div', {
                                    className: c7().settings,
                                    children: [
                                        (0, y.jsx)(c1.p, {
                                            containerClassName: c7().sizeInputContainer,
                                            size: 'xxxs',
                                            value: t.width,
                                            variant: 'secondary',
                                            pattern: '^\\d+(px|%)?$',
                                            min: c2.JQ,
                                            required: !0,
                                            onChange: n,
                                            onBlur: s,
                                            'aria-label': a({ id: 'share.iframe-editor-width' }),
                                            'data-test-id': q.Kq.shareIframe.SHARE_IFRAME_EDITOR_WIDTH_INPUT,
                                        }),
                                        (0, y.jsx)($.I, { size: 'xs', variant: 'close' }),
                                        (0, y.jsx)(c1.p, {
                                            containerClassName: c7().sizeInputContainer,
                                            size: 'xxxs',
                                            value: t.height,
                                            pattern: '^\\d+(px|%)?$',
                                            variant: 'secondary',
                                            min: c2.IR,
                                            required: !0,
                                            onChange: r,
                                            onBlur: o,
                                            'aria-label': a({ id: 'share.iframe-editor-height' }),
                                            'data-test-id': q.Kq.shareIframe.SHARE_IFRAME_EDITOR_HEIGHT_INPUT,
                                        }),
                                    ],
                                }),
                                (0, y.jsx)(c1.p, {
                                    inputClassName: c7().iframeCodeInput,
                                    containerClassName: c7().iframeCodeInputContainer,
                                    type: 'text',
                                    size: 'xxxs',
                                    variant: 'secondary',
                                    value: u,
                                    required: !0,
                                    readOnly: !0,
                                    'aria-label': a({ id: 'share.iframe-editor-code' }),
                                    'data-test-id': q.Kq.shareIframe.SHARE_IFRAME_EDITOR_CODE_INPUT,
                                }),
                                (0, y.jsx)(Q.$, {
                                    color: 'primary',
                                    className: c7().copyButton,
                                    size: 'l',
                                    radius: 'xxxl',
                                    onClick: _,
                                    'data-test-id': q.Kq.shareIframe.SHARE_IFRAME_EDITOR_COPY_BUTTON,
                                    children: (0, y.jsx)(er.HL, {
                                        type: 'text',
                                        variant: 'div',
                                        size: 'm',
                                        weight: 'medium',
                                        lineClamp: 1,
                                        children: (0, y.jsx)(eQ.A, { id: 'share.iframe-copy' }),
                                    }),
                                }),
                            ],
                        }),
                        (0, y.jsx)('div', {
                            className: c7().iframeContainer,
                            style: c,
                            'data-test-id': q.Kq.shareIframe.SHARE_IFRAME_EDITOR_PREVIEW,
                            children: (0, y.jsx)('iframe', { className: c7().iframe, src: d, title: a({ id: 'share.iframe-editor-preview' }) }),
                        }),
                    ],
                });
            });
            var dt = a(18106),
                da = a.n(dt);
            let di = (0, h.PA)(() => {
                let {
                        shareIframe: e,
                        settings: { isMobile: t },
                    } = (0, N.g)(),
                    { formatMessage: a } = (0, Y.A)();
                return e.entity
                    ? (0, y.jsx)(f.a, {
                          className: da().root,
                          contentClassName: da().content,
                          open: e.modal.isOpened,
                          onOpenChange: e.modal.onOpenChange,
                          placement: t ? 'default' : 'center',
                          size: 'fitContent',
                          title: a({ id: 'share.iframe-modal-title' }),
                          labelClose: a({ id: 'interface-actions.close' }),
                          onClose: e.closeModal,
                          overlayColor: 'full',
                          'data-test-id': q.Kq.shareIframe.SHARE_IFRAME_MODAL,
                          closeButtonDataTestId: q.Kq.shareIframe.SHARE_IFRAME_MODAL_CLOSE_BUTTON,
                          children: (0, y.jsx)(de, { entity: e.entity }),
                      })
                    : null;
            });
            var dl = a(10734),
                dn = a.n(dl);
            let ds = (e) => {
                    let t = e.value.trim().length;
                    return ('number' == typeof e.minLength && !!(t < e.minLength)) || ('number' == typeof e.maxLength && !!(t > e.maxLength));
                },
                dr = (0, h.PA)((e) => {
                    let { open: t, title: a, content: i, onClose: l, onChange: n } = e,
                        {
                            settings: { isMobile: s },
                        } = (0, N.g)(),
                        { formatMessage: r } = (0, Y.A)(),
                        [o, c] = (0, g.useState)(i),
                        [d, u] = (0, g.useState)(!1),
                        _ = (0, g.useCallback)(
                            (e) => (t) => {
                                let a = t.target.value,
                                    i = o.find((t) => t.key === e);
                                (i && (i.value = a), c([...o]), u(!1));
                            },
                            [o],
                        ),
                        m = (0, g.useCallback)(() => {
                            if (o.some(ds)) return void u(!0);
                            n(o);
                        }, [n, o]),
                        p = (0, g.useMemo)(
                            () =>
                                o.map((e) => {
                                    let t = _(e.key),
                                        a = d && ds(e);
                                    return (0, y.jsxs)(
                                        'div',
                                        {
                                            className: dn().field,
                                            children: [
                                                (0, y.jsx)(er.HL, { variant: 'div', size: 'm', className: dn().label, children: e.title }),
                                                (0, y.jsx)(c1.p, {
                                                    value: e.value,
                                                    containerClassName: (0, eL.$)(dn().input, { [dn().input_error]: a }),
                                                    placeholder: e.title,
                                                    onChange: t,
                                                    minLength: e.minLength,
                                                    maxLength: e.maxLength,
                                                }),
                                            ],
                                        },
                                        e.key,
                                    );
                                }),
                            [_, d, o],
                        );
                    return (0, y.jsxs)(f.a, {
                        size: 'fitContent',
                        placement: s ? 'default' : 'center',
                        open: t,
                        className: dn().root,
                        contentClassName: dn().modalContent,
                        showHeader: !1,
                        escapeKey: !1,
                        closeOnOutsidePress: !1,
                        isMobile: s,
                        'data-test-id': q.e8.ugc.UGC_EDIT_MODAL,
                        overlayColor: 'full',
                        children: [
                            (0, y.jsxs)('div', {
                                className: dn().header,
                                children: [
                                    (0, y.jsx)(er.DZ, { variant: 'h4', size: 'm', weight: 'bold', className: dn().title, children: a }),
                                    (0, y.jsx)(Q.$, {
                                        radius: 'round',
                                        color: 'secondary',
                                        size: 'xxs',
                                        icon: (0, y.jsx)($.I, { variant: 'close', size: 'xxs' }),
                                        onClick: l,
                                        'aria-label': r({ id: 'ugc.close-edit-popup' }),
                                        'data-test-id': q.e8.ugc.UGC_EDIT_MODAL_CLOSE_BUTTON,
                                    }),
                                ],
                            }),
                            (0, y.jsxs)('div', {
                                className: dn().content,
                                children: [
                                    p,
                                    (0, y.jsxs)('div', {
                                        className: dn().buttons,
                                        children: [
                                            (0, y.jsx)(Q.$, {
                                                radius: 'xxxl',
                                                color: 'secondary',
                                                size: s ? 'l' : 'm',
                                                className: dn().button,
                                                onClick: l,
                                                children: (0, y.jsx)(eQ.A, { id: 'interface-actions.cancel' }),
                                            }),
                                            (0, y.jsx)(Q.$, {
                                                radius: 'xxxl',
                                                color: 'primary',
                                                size: s ? 'l' : 'm',
                                                className: dn().button,
                                                onClick: m,
                                                children: (0, y.jsx)(eQ.A, { id: 'interface-actions.save' }),
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                        ],
                    });
                });
            var dc = (function (e) {
                return ((e.TITLE = 'title'), (e.ARTIST = 'artist'), e);
            })({});
            let dd = (0, h.PA)(() => {
                let {
                        modals: { ugcTrackEditModal: e },
                        fullscreenPlayer: t,
                    } = (0, N.g)(),
                    { notify: a } = (0, en.l)(),
                    { formatMessage: i } = (0, Y.A)(),
                    l = (0, g.useMemo)(
                        () => [
                            { key: dc.TITLE, title: i({ id: 'track-modal.track-name' }), value: e.trackTitle, minLength: 1, maxLength: 200 },
                            { key: dc.ARTIST, title: i({ id: 'entity-names.singer' }), value: e.trackArtist, minLength: 0, maxLength: 200 },
                        ],
                        [i, e.trackArtist, e.trackTitle],
                    ),
                    n = (0, b.c)(async (l) => {
                        let { title: n, artist: s } = ((e) => {
                            var t, a;
                            let i = null == (t = e.find((e) => e.key === dc.TITLE)) ? void 0 : t.value,
                                l = null == (a = e.find((e) => e.key === dc.ARTIST)) ? void 0 : a.value;
                            return { title: (i = i ? i.trim() : ''), artist: (l = l ? l.trim() : '') };
                        })(l);
                        (e.track &&
                            (await e.track.changeTrackInfo(n, s)) === cK.F.ERROR &&
                            a((0, y.jsx)(es.h, { error: i({ id: 'ugc.editing-failed' }) }), { containerId: t.modal.isOpened ? el.u.FULLSCREEN_ERROR : el.u.ERROR }),
                            e.close());
                    });
                return e.modal.isOpened
                    ? (0, y.jsx)(dr, { open: e.modal.isOpened, title: i({ id: 'entity-names.track' }), content: l, onClose: e.close, onChange: n })
                    : null;
            });
            var du = a(84427);
            let d_ = null,
                dm = [],
                dp = function () {
                    for (var e = arguments.length, t = Array(e), a = 0; a < e; a++) t[a] = arguments[a];
                    if (null === d_)
                        return void dm.push((e) => {
                            e.add(...t);
                        });
                    d_.add(...t);
                },
                dv = 'google-adwords',
                dx = '10983745785',
                dy = [aD.KZ, aD.UZ, aD.KG, aD.AZ, aD.AM, aD.GE, aD.TR];
            var dh = a(61341),
                dC = a(65476),
                dg = a(5701);
            let dA = null,
                db = (0, h.PA)((e) => {
                    let {
                            className: t,
                            target: a,
                            silent: i,
                            serviceSessionId: l,
                            tariffOfferName: n,
                            offersBatchId: s,
                            offersPositionIds: r,
                            onLoad: o,
                            onSuccess: c,
                            onError: d,
                            onClose: u,
                        } = e,
                        _ = (0, g.useRef)(null),
                        { theme: m } = (0, tE.W)(),
                        { pwTools: p } = (0, dg.q)(),
                        v = (() => {
                            let { albumCPA: e } = (0, N.g)(),
                                { getClidFromQuery: t, checkIsValidClid: a } = (0, dC.I)();
                            return (0, g.useCallback)(async () => {
                                let i = t();
                                if (!i || !e.albumId) return;
                                let { parsedClid: l, queryClid: n } = i;
                                if ((l && (await e.getCpa({ albumId: l.albumId })), a(e.cpa, e.albumId))) return n;
                            }, [e, t, a]);
                        })(),
                        x = (0, b.c)((e) => {
                            'purchase_data' === e.type && (null == c || c());
                        }),
                        h = (0, b.c)(() => {
                            null == d || d();
                        }),
                        C = (0, b.c)(() => {
                            null == u || u();
                        }),
                        A = (0, b.c)((e) => {
                            'loaded' === e.data.status && (null == o || o());
                        }),
                        f = (0, g.useCallback)(async () => {
                            if (!p || !_.current) return;
                            let { lang: e, mode: t, platform: o, widgetServiceName: c, authMethod: d } = p.options;
                            if (!dA)
                                try {
                                    dA = await p.loadManager();
                                } catch (e) {
                                    C();
                                    return;
                                }
                            dA.send({
                                type: 'init',
                                options: {
                                    lang: e,
                                    mode: t,
                                    platform: o,
                                    widgetServiceName: c,
                                    authMethod: d,
                                    silent: i,
                                    usePlusHost: !0,
                                    theme: m,
                                    onSuccess: x,
                                    onError: h,
                                    onReport: A,
                                    onClose: C,
                                },
                            });
                            let u = {
                                    target: a,
                                    eventSessionId: l,
                                    tariffOfferName: n,
                                    offersBatchId: s,
                                    offersPositionIds: r,
                                    targetNode: _.current,
                                    isTarifficator: !0,
                                },
                                y = await v();
                            (null !== y && (u.clid = y), dA.send({ type: 'open', options: u }));
                        }, [m, p, a, i, n, l, s, r, x, h, A, C, v]);
                    return (
                        (0, g.useEffect)(
                            () => (
                                f(),
                                () => {
                                    null == dA || dA.send({ type: 'close' });
                                }
                            ),
                            [f],
                        ),
                        (0, y.jsx)('div', { className: t, ref: _ })
                    );
                });
            var df = a(91738),
                dj = a.n(df);
            let dN = (0, h.PA)(() => {
                let { paymentWidgetModal: e, advert: t } = (0, N.g)(),
                    a = (0, J.N)().get(X.vg),
                    { state: i, toggleTrue: l } = (0, ey.e)(!1),
                    n = (() => {
                        let { user: e } = (0, N.g)(),
                            { add: t } = (() => {
                                let [e, t] = (0, g.useState)(null !== d_);
                                return {
                                    init: (0, g.useCallback)(() => {
                                        var a, i;
                                        void 0 === (null == (a = window) ? void 0 : a.Ya.yanalytics) ||
                                            e ||
                                            ((d_ = window.Ya.yanalytics),
                                            t(!0),
                                            (i = d_),
                                            dm.forEach((e) => {
                                                e(i);
                                            }),
                                            (dm = []));
                                    }, [e]),
                                    add: dp,
                                };
                            })(),
                            [a, i] = (0, g.useState)(!1);
                        return (
                            (0, g.useEffect)(() => {
                                void 0 !== e.account.data.geoRegionIso &&
                                    dy.includes(e.account.data.geoRegionIso) &&
                                    (t({ alias: dv, action: 'init', params: { provider: 'google-adwords', id: 'AW-'.concat(dx) } }), i(!0));
                            }, [e.account.data.geoRegionIso, t]),
                            {
                                track: (0, g.useCallback)(
                                    (e) => {
                                        a && t({ alias: dv, action: 'track', params: { id: dx, ...e } });
                                    },
                                    [a, t],
                                ),
                            }
                        );
                    })();
                (0, g.useEffect)(
                    () => () => {
                        e.reset();
                    },
                    [e],
                );
                let s = (0, g.useCallback)(() => {
                        (e.setStatus(dh.c.SUCCESS), n.track({ label: 'WCvtCKnr84oYEPnRuvUo' }), a.reachGoal('PAYMENT_COMPLETED'));
                    }, [e, n, a]),
                    r = (0, g.useCallback)(() => {
                        (e.modal.close(), e.isSuccess && window.location.reload(), e.reset());
                    }, [e]),
                    o = (0, g.useCallback)(() => {
                        e.setStatus(dh.c.ERROR);
                    }, [e]);
                return (0, y.jsx)(f.a, {
                    open: e.modal.isOpened,
                    size: 'fitContent',
                    placement: 'center',
                    showHeader: !1,
                    withAnimation: !1,
                    className: (0, eL.$)(dj().root, { [dj().root_loaded]: i, [dj().root_level_up]: t.isAdvertShown }),
                    'data-test-id': q.OA.paymentWidget.PAYMENT_WIDGET,
                    contentClassName: dj().content,
                    overlayColor: 'full',
                    onOpenChange: e.onModalOpenChange,
                    children: (0, y.jsx)(db, {
                        className: dj().widget,
                        target: e.target,
                        silent: e.isSilent,
                        serviceSessionId: e.serviceSessionId,
                        tariffOfferName: e.tariffOfferName,
                        offersBatchId: e.offersBatchId,
                        offersPositionIds: e.offersPositionIds,
                        onLoad: l,
                        onSuccess: s,
                        onError: o,
                        onClose: r,
                    }),
                });
            });
            var dT = a(28724),
                dS = a(54692),
                dI = a.n(dS);
            let dk = (0, h.PA)(() => {
                    let {
                        disclaimerModalState: e,
                        modals: { disclaimerModal: t },
                    } = (0, N.g)();
                    return (0, y.jsx)(f.a, {
                        size: 'fitContent',
                        placement: 'center',
                        open: t.isOpened,
                        onOpenChange: t.onOpenChange,
                        onClose: t.close,
                        showHeader: !1,
                        className: dI().root,
                        contentClassName: dI().content,
                        overlayClassName: dI().overlay,
                        overlayColor: 'full',
                        'data-test-id': q.OA.disclaimer.DISCLAIMER_MODAL,
                        closeOnOutsidePress: e.shouldCloseModalOnOutsidePress,
                        escapeKey: e.shouldCloseModalOnEscape,
                        children: (0, y.jsx)(dT.M, { modalState: e, onClose: t.close }),
                    });
                }),
                dL = (0, h.PA)(() => {
                    var e;
                    let { communication: t, experiments: a, user: i, multivibe: l } = (0, N.g)(),
                        n = (0, du.d)(),
                        s = a.checkExperiment(T.z.WebNextArtistInfo, 'on'),
                        { isEnabled: r, disabledRoomId: o } = l,
                        c = r && i.hasPlus;
                    return (0, y.jsxs)(y.Fragment, {
                        children: [
                            (null == (e = t.list) ? void 0 : e.modal) && (0, y.jsx)(cC, { modal: t.list.modal }),
                            (0, y.jsx)(cD.n, { pageId: ta._Q.PLAYER, children: (0, y.jsx)(rs, {}) }),
                            n && (0, y.jsx)(cD.n, { pageId: ta._Q.VIDEO_PLAYER, children: (0, y.jsx)(oX, {}) }),
                            (0, y.jsx)(dk, {}),
                            (0, y.jsx)(cD.n, { pageId: ta._Q.TRAILER, children: (0, y.jsx)(on, {}) }),
                            n && (0, y.jsx)(tg, {}),
                            (0, y.jsx)(tI, {}),
                            (0, y.jsx)(tO, {}),
                            s && (0, y.jsx)(cm, {}),
                            !i.hasPlus && (0, y.jsxs)(y.Fragment, { children: [(0, y.jsx)(l1, {}), (0, y.jsx)(ae, {}), (0, y.jsx)(rx, {})] }),
                            !i.hasPlus && (0, y.jsx)(aP, {}),
                            (0, y.jsx)(di, {}),
                            (0, y.jsx)(tD, {}),
                            (0, y.jsx)(tp, {}),
                            (0, y.jsx)(dN, {}),
                            (0, y.jsx)(dd, {}),
                            (0, y.jsx)(ac, {}),
                            (0, y.jsx)(cb, {}),
                            c &&
                                (0, y.jsxs)(y.Fragment, {
                                    children: [
                                        (0, y.jsx)(cD.n, {
                                            pageId: ta._Q.MULTIVIBE_SENDING_INVITATION_SCREEN,
                                            pageStyle: C.PageStyles.Sheet,
                                            pagePlacement: C.PagePlacements.Bottom,
                                            pageEntityId: '',
                                            children: (0, y.jsx)(rj.F, { blockId: '', blockType: '', blockPosX: 1, blockPosY: 1, children: (0, y.jsx)(c0, {}) }),
                                        }),
                                        (0, y.jsx)(cZ, {}),
                                        o &&
                                            (0, y.jsx)(cD.n, {
                                                pageId: ta._Q.MULTIVIBE_UNIFIED_SCREEN,
                                                pageStyle: C.PageStyles.Sheet,
                                                pagePlacement: C.PagePlacements.Bottom,
                                                pageEntityId: '',
                                                children: (0, y.jsx)(rj.F, {
                                                    blockId: '',
                                                    blockType: '',
                                                    blockPosX: 1,
                                                    blockPosY: 1,
                                                    children: (0, y.jsx)(cR, { roomId: o }),
                                                }),
                                            }),
                                    ],
                                }),
                        ],
                    });
                });
        },
        75245: (e, t, a) => {
            'use strict';
            a.d(t, { F: () => c });
            var i,
                l = a(55178),
                n = {
                    5881: (e, t, a) => {
                        function i() {
                            for (var e, t, a = 0, i = ''; a < arguments.length;)
                                (e = arguments[a++]) &&
                                    (t = (function e(t) {
                                        var a,
                                            i,
                                            l = '';
                                        if ('string' == typeof t || 'number' == typeof t) l += t;
                                        else if ('object' == typeof t)
                                            if (Array.isArray(t)) for (a = 0; a < t.length; a++) t[a] && (i = e(t[a])) && (l && (l += ' '), (l += i));
                                            else for (a in t) t[a] && (l && (l += ' '), (l += a));
                                        return l;
                                    })(e)) &&
                                    (i && (i += ' '), (i += t));
                            return i;
                        }
                        (a.r(t), a.d(t, { clsx: () => i, default: () => l }));
                        let l = i;
                    },
                    2876: (e, t, a) => {
                        (a.r(t), a.d(t, { default: () => i }));
                        let i = { root: 'IZnFMW4gXBshJODnvB1P', item: 'VJ9IexhAEuYSCyGiMfN4' };
                    },
                    9097: (e, t) => {
                        var a = Symbol.for('react.transitional.element');
                        function i(e, t, i) {
                            var l = null;
                            if ((void 0 !== i && (l = '' + i), void 0 !== t.key && (l = '' + t.key), 'key' in t))
                                for (var n in ((i = {}), t)) 'key' !== n && (i[n] = t[n]);
                            else i = t;
                            return { $$typeof: a, type: e, key: l, ref: void 0 !== (t = i.ref) ? t : null, props: i };
                        }
                        ((t.Fragment = Symbol.for('react.fragment')), (t.jsx = i), (t.jsxs = i));
                    },
                    4377: (e, t, a) => {
                        e.exports = a(9097);
                    },
                    4014: function (e, t, a) {
                        var i =
                            (this && this.__importDefault) ||
                            function (e) {
                                return e && e.__esModule ? e : { default: e };
                            };
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.Carousel = void 0));
                        let l = a(4377),
                            n = a(5881),
                            s = a(810),
                            r = i(a(2876)),
                            o = (e) => {
                                let { className: t, itemClassName: a, children: i, forwardRef: o, role: c, ...d } = e;
                                return (0, l.jsx)('ol', {
                                    ref: o,
                                    className: (0, n.clsx)(r.default.root, t),
                                    ...d,
                                    role: null != c ? c : 'list',
                                    children: s.Children.map(i, (e) => (0, l.jsx)('li', { className: (0, n.clsx)(r.default.item, a), children: e })),
                                });
                            };
                        t.Carousel = (0, s.forwardRef)((e, t) => (0, l.jsx)(o, { forwardRef: t, ...e }));
                    },
                    810: (e) => {
                        e.exports = i || (i = a.t(l, 2));
                    },
                },
                s = {};
            function r(e) {
                var t = s[e];
                if (void 0 !== t) return t.exports;
                var a = (s[e] = { exports: {} });
                return (n[e].call(a.exports, a, a.exports, r), a.exports);
            }
            ((r.d = (e, t) => {
                for (var a in t) r.o(t, a) && !r.o(e, a) && Object.defineProperty(e, a, { enumerable: !0, get: t[a] });
            }),
                (r.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
                (r.r = (e) => {
                    ('undefined' != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
                        Object.defineProperty(e, '__esModule', { value: !0 }));
                }));
            var o = {};
            (() => {
                (Object.defineProperty(o, 'X', { value: !0 }), (o.l = void 0));
                var e = r(4014);
                Object.defineProperty(o, 'l', {
                    enumerable: !0,
                    get: function () {
                        return e.Carousel;
                    },
                });
            })();
            var c = o.l;
            o.X;
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
        77837: (e) => {
            e.exports = {
                root: 'VideoPlayerBarContainerDesktop_root__Aw4GO',
                root_visible: 'VideoPlayerBarContainerDesktop_root_visible__F_7vs',
                root_withHoveredCarousel: 'VideoPlayerBarContainerDesktop_root_withHoveredCarousel__2gzlW',
                carouselWrapper: 'VideoPlayerBarContainerDesktop_carouselWrapper__HN1rc',
                carousel: 'VideoPlayerBarContainerDesktop_carousel__15RwT',
                carouselBlock: 'VideoPlayerBarContainerDesktop_carouselBlock__8prtL',
                carouselControls: 'VideoPlayerBarContainerDesktop_carouselControls__OwWar',
                clipCardTitle: 'VideoPlayerBarContainerDesktop_clipCardTitle__4wJ1A',
                important: 'VideoPlayerBarContainerDesktop_important__PBP47',
                clipCardArtist: 'VideoPlayerBarContainerDesktop_clipCardArtist__XegP0',
            };
        },
        78920: (e) => {
            e.exports = { imageWrapper: 'MultivibePromoModal_imageWrapper___P4Nx', button: 'MultivibePromoModal_button__8vUYb' };
        },
        79259: (e, t, a) => {
            'use strict';
            (a.d(t, { FN: () => l, gj: () => i }), a(81829));
            let i = (e) => {
                    let { containerNodeRect: t, draggingNodeRect: a, transform: i } = e;
                    return a && t
                        ? (function (e, t, a) {
                              let i = { ...e };
                              return (
                                  t.top + e.y <= a.top ? (i.y = a.top - t.top) : t.bottom + e.y >= a.top + a.height && (i.y = a.top + a.height - t.bottom),
                                  t.left + e.x <= a.left ? (i.x = a.left - t.left) : t.right + e.x >= a.left + a.width && (i.x = a.left + a.width - t.right),
                                  i
                              );
                          })(i, a, t)
                        : i;
                },
                l = (e) => {
                    let { transform: t } = e;
                    return { ...t, x: 0 };
                };
        },
        79671: (e, t, a) => {
            'use strict';
            a.d(t, { V: () => l });
            var i = a(27515);
            let l = (e, t) => {
                if (!e) return { clipIds: [], activeClipIndex: 0 };
                let a = e
                        .split(',')
                        .map(Number)
                        .filter((e) => e >= 0),
                    l = (0, i.z)(a, t);
                return { clipIds: a, activeClipIndex: l };
            };
        },
        80536: (e, t, a) => {
            'use strict';
            a.d(t, { B: () => i });
            let i = (0, a(55178).createContext)({ observeElement: () => {}, unobserveElement: () => {} });
        },
        81208: (e) => {
            e.exports = { topSection: 'PaywallBYMobile_topSection__sQ_sw' };
        },
        81933: (e, t, a) => {
            'use strict';
            a.d(t, { Y: () => i });
            var i = (function (e) {
                return (
                    (e.KEY_P = 'KeyP'),
                    (e.KEY_F = 'KeyF'),
                    (e.KEY_D = 'KeyD'),
                    (e.KEY_L = 'KeyL'),
                    (e.KEY_J = 'KeyJ'),
                    (e.KEY_K = 'KeyK'),
                    (e.KEY_H = 'KeyH'),
                    (e.KEY_M = 'KeyM'),
                    (e.KEY_N = 'KeyN'),
                    (e.KEY_S = 'KeyS'),
                    (e.KEY_R = 'KeyR'),
                    (e.KEY_W = 'KeyW'),
                    (e.ESC = 'Escape'),
                    (e.SPACE = 'Space'),
                    (e.ARROW_LEFT = 'ArrowLeft'),
                    (e.ARROW_RIGHT = 'ArrowRight'),
                    (e.ARROW_UP = 'ArrowUp'),
                    (e.ARROW_DOWN = 'ArrowDown'),
                    (e.COMMA = 'Comma'),
                    (e.PERIOD = 'Period'),
                    (e.MINUS = 'Minus'),
                    (e.EQUAL = 'Equal'),
                    (e.DIGIT_0 = 'Digit0'),
                    e
                );
            })({});
        },
        82856: (e) => {
            e.exports = { root: 'TrailerModal_root__T4ZJ8', modalContent: 'TrailerModal_modalContent__ZSNFe', header: 'TrailerModal_header__0h1zj' };
        },
        83218: (e) => {
            e.exports = {
                root: 'FullscreenVideoPlayerDesktop_root__a69Pd',
                important: 'FullscreenVideoPlayerDesktop_important__NvXzL',
                header: 'FullscreenVideoPlayerDesktop_header__oiftJ',
                modalContent: 'FullscreenVideoPlayerDesktop_modalContent__YeGCV',
                closeButton: 'FullscreenVideoPlayerDesktop_closeButton__OqSFs',
                logoLink: 'FullscreenVideoPlayerDesktop_logoLink__o92zi',
                logo_ru: 'FullscreenVideoPlayerDesktop_logo_ru__uRbpz',
                logo_en: 'FullscreenVideoPlayerDesktop_logo_en__mBcdF',
            };
        },
        83237: (e) => {
            e.exports = {
                content: 'MusicSectionMobile_content__lAARM',
                card: 'MusicSectionMobile_card__f5Xnr',
                logo_ru: 'MusicSectionMobile_logo_ru__itG4j',
                logo_en: 'MusicSectionMobile_logo_en__Tv2yd',
            };
        },
        83521: (e, t, a) => {
            'use strict';
            a.d(t, { G: () => p });
            var i = a(32290),
                l = a(63618),
                n = a(96103),
                s = a(21732),
                r = a(99902),
                o = a(71926),
                c = a(57594),
                d = a(90326),
                u = a(80195),
                _ = a(34783),
                m = a.n(_);
            let p = (0, n.PA)((e) => {
                let { className: t, track: a, position: n, onPlayButtonClick: _, isPlaying: p, isCurrent: v, withDislikeStyles: x = !0, isLoading: y } = e,
                    {
                        settings: { isMobile: h },
                    } = (0, c.g)();
                return (0, i.jsxs)('div', {
                    className: (0, l.$)(t, m().root, {
                        [m().root_disabled]: !a.isAvailable && !a.hasModalAccess,
                        [m().root_playing]: p,
                        [m().root_disliked]: a.isDisliked && x,
                        [m().root_current]: v,
                    }),
                    children: [
                        (a.isAvailable || a.hasModalAccess) &&
                            (0, i.jsxs)(i.Fragment, {
                                children: [
                                    !y && (0, i.jsx)(u.P, { stopAnimation: !p, className: m().playingAnimation }),
                                    y && h && (0, i.jsx)(r.y, { size: 'xs', className: m().spinner }),
                                    !h &&
                                        (0, i.jsx)(d.D, {
                                            variant: 'filled',
                                            className: m().playButton,
                                            iconClassName: m().playButtonIcon,
                                            isPlaying: p,
                                            onClick: _,
                                            iconSize: 'xs',
                                        }),
                                ],
                            }),
                        n &&
                            (0, i.jsx)(o.HL, {
                                variant: 'div',
                                className: m().position,
                                weight: 'normal',
                                type: 'entity',
                                size: 'm',
                                'data-test-id': s.Kq.track.TRACK_POSITION,
                                children: n,
                            }),
                    ],
                });
            });
        },
        83992: (e, t, a) => {
            'use strict';
            function i(e) {
                let { tld: t, url: a } = e;
                return a || 'https://music.yandex.'.concat(t, '/pages/main/i/og/home.png?webp=false');
            }
            a.d(t, { v: () => i });
        },
        85377: (e, t, a) => {
            'use strict';
            a.d(t, { B: () => i });
            let i = (0, a(55178).createContext)({
                title: null,
                setTitle: () => {},
                titleElement: null,
                scrollElement: null,
                setTitleElement: () => {},
                child: null,
                setChild: () => {},
                childElement: null,
                setChildElement: () => {},
                isScrolledChild: !1,
                isScrolledTitle: !1,
                isScrolling: !1,
                isHeaderHidden: !1,
            });
        },
        86085: (e) => {
            e.exports = { icon: 'NotificationHtmlCodeCopied_icon__qJMbi', message: 'NotificationHtmlCodeCopied_message__ivRvX' };
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
        87356: (e) => {
            e.exports = { root: 'ArtistSocialLinks_root__9wQxA', link: 'ArtistSocialLinks_link__UFvCL', icon: 'ArtistSocialLinks_icon__Y9VLu' };
        },
        88040: (e) => {
            e.exports = {
                root: 'VideoPlayerContainer_root__GHDoi',
                container: 'VideoPlayerContainer_container__pZe41',
                container_adaptiveAspectRatio: 'VideoPlayerContainer_container_adaptiveAspectRatio__mBFoR',
                loadingIndicator: 'VideoPlayerContainer_loadingIndicator__qDxPV',
                loadingIndicator_showed: 'VideoPlayerContainer_loadingIndicator_showed__KQCNf',
            };
        },
        89214: (e) => {
            e.exports = {
                root: 'ArtistAboutModalImageSlider_root__L18Xb',
                button: 'ArtistAboutModalImageSlider_button__GPXyc',
                image: 'ArtistAboutModalImageSlider_image__3CTLr',
                moreCovers: 'ArtistAboutModalImageSlider_moreCovers__7oDPM',
                moreCoversText: 'ArtistAboutModalImageSlider_moreCoversText__W_P8L',
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
        90048: (e, t, a) => {
            'use strict';
            a.d(t, { S: () => n });
            var i = a(32290),
                l = a(85472);
            let n = (e) => {
                let { value: t } = e,
                    a = { '@context': 'https://schema.org', ...t };
                return (0, i.jsx)('script', { type: 'application/ld+json', dangerouslySetInnerHTML: { __html: (0, l.stringifyJSONSafely)(a) } });
            };
        },
        90558: (e) => {
            e.exports = {
                root: 'PlayQueueNowPlayingBlock_root__aJSb8',
                important: 'PlayQueueNowPlayingBlock_important__sxxvA',
                track: 'PlayQueueNowPlayingBlock_track__ClZLs',
                track_withDnD: 'PlayQueueNowPlayingBlock_track_withDnD__D8h0r',
                track_moveFromTop: 'PlayQueueNowPlayingBlock_track_moveFromTop__pBBJt',
                'move-from-top': 'PlayQueueNowPlayingBlock_move-from-top__O5e0S',
                track_moveFromBottom: 'PlayQueueNowPlayingBlock_track_moveFromBottom__Jj2UO',
                'move-from-bottom': 'PlayQueueNowPlayingBlock_move-from-bottom__Cz7lV',
            };
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
        91448: (e) => {
            e.exports = {
                root: 'ArtistBandlinkScanner_root__D3cAC',
                descriptionTitleButton: 'ArtistBandlinkScanner_descriptionTitleButton__0M8Ag',
                icon: 'ArtistBandlinkScanner_icon__n5ntO',
                description: 'ArtistBandlinkScanner_description__n8ypX',
                descriptionTitle: 'ArtistBandlinkScanner_descriptionTitle__9Z1MT',
                descriptionTitleText: 'ArtistBandlinkScanner_descriptionTitleText__xWvIS',
                descriptionArtist: 'ArtistBandlinkScanner_descriptionArtist__7ZvJo',
            };
        },
        91738: (e) => {
            e.exports = {
                root: 'PaymentWidgetModal_root__I6Hrp',
                root_loaded: 'PaymentWidgetModal_root_loaded__Rzltj',
                root_level_up: 'PaymentWidgetModal_root_level_up__pj52G',
                content: 'PaymentWidgetModal_content__ifRry',
                widget: 'PaymentWidgetModal_widget__cu_gr',
            };
        },
        92102: (e, t, a) => {
            'use strict';
            a.d(t, { C: () => b });
            var i = a(32290),
                l = a(63618),
                n = a(96103),
                s = a(55178),
                r = a(91027),
                o = a(58359),
                c = a(71735),
                d = a(2969),
                u = a(23352),
                _ = a(46200),
                m = a(5537),
                p = a(28999),
                v = a(72676),
                x = a(57594),
                y = a(1444),
                h = a(60900),
                C = a(54171),
                g = a(35587),
                A = a.n(g);
            let b = (0, n.PA)((e) => {
                var t;
                let {
                        className: a,
                        track: n,
                        meta: g,
                        beforeBlock: b,
                        controls: f,
                        playButtonCellRender: j,
                        withLightning: N,
                        isPlaying: T,
                        isCurrent: S,
                        togglePlay: I,
                        restartPlay: k,
                        onPlayClick: L,
                        playButtonIconSize: E,
                        skipFreemiumCloseListeningPaywall: M = !1,
                        ...P
                    } = e,
                    { shouldShowBuySubscriptionModal: O, showBuySubscriptionModal: w } = (0, _.q)(),
                    {
                        track: R,
                        fullscreenPlayer: D,
                        settings: { isMobile: B },
                        album: F,
                        albumCPA: { isPlusCPAPlayerBarEnabled: U },
                        paywall: { modal: z },
                    } = (0, x.g)(),
                    { ref: W, intersectionPropertyId: K } = (0, u.n)(),
                    H = (0, d.b)(),
                    V = (0, c.P)(),
                    Y = ((e) => {
                        let { track: t, withLightning: a } = e,
                            { formatMessage: i } = (0, h.A)();
                        return t.isAvailable
                            ? [t.artistsNames, t.title, t.version, a && i({ id: 'entity-names.popular-among-users' })].filter(Boolean).join(' ')
                            : ''
                                  .concat(i({ id: 'extra-explicit.play-unavailable' }), ' ')
                                  .concat(t.artistsNames, ' ')
                                  .concat(t.title);
                    })({ withLightning: N, track: n }),
                    q = ((e) => {
                        let { sonataState: t } = (0, x.g)(),
                            a = t.status === v.MT.LOADING_MEDIA_SOURCE || t.status === v.MT.BUFFERING;
                        if (e && t.entityMeta) {
                            let i = t.entityMeta.entityId;
                            return a && i === e;
                        }
                        return a;
                    })(n.entityId),
                    Q = U(F.id, null == (t = F.meta) ? void 0 : t.isNonMusic),
                    $ = n.isAvailable && O && !Q,
                    G = (0, m.N)(),
                    Z = n.isAvailable && G && !Q && !M,
                    X = (0, C.w)({ track: n, callback: I }),
                    J = (0, r.c)(() => {
                        R.open({ trackId: n.id, albumId: n.albumId });
                    }),
                    ee = (0, C.w)({ track: n, callback: J }),
                    { sendPlaySearchFeedback: et } = (0, p.z)(),
                    [ea, ei] = (0, s.useState)(!1),
                    el = (0, r.c)(() => {
                        if (!V()) {
                            if ($) return void w();
                            if (Z) return void z.open();
                            (ea || T || (ei(!0), null == et || et()), X(), H(!T), null == L || L(!T));
                        }
                    }),
                    en = (0, r.c)(() => {
                        if (T) return void k();
                        el();
                    }),
                    es = (0, r.c)((e) => {
                        if (!n.isAvailable && !n.hasModalAccess) {
                            (O && n.isAvailableOnlyForPlus && w(), G && n.isAvailableOnlyForPlus && z.open());
                            return;
                        }
                        if ($) return void w();
                        let t = !B && (2 === e.detail || (1 === e.detail && n.hasTrackLink && !D.modal.isOpened));
                        return Z && !t
                            ? void z.open()
                            : ((0, o.P)(e, A().ripple), B)
                              ? void el()
                              : 2 === e.detail
                                ? void en()
                                : void (1 === e.detail && n.hasTrackLink && !D.modal.isOpened && (ee(), Z && z.open()));
                    }),
                    er = null == j ? void 0 : j({ onPlayButtonClick: el, isPlaying: T, isCurrent: S, isLoading: q, playButtonIconSize: E });
                return (0, i.jsxs)(y.C, {
                    ref: W,
                    'aria-label': Y,
                    'data-intersection-property-id': K,
                    onClick: es,
                    className: (0, l.$)(A().root, { [A().root_disabled]: !n.isAvailable, [A().root_current]: S && B }, a),
                    ...P,
                    children: [b, er, g, f],
                });
            });
        },
        92382: (e, t, a) => {
            'use strict';
            a.d(t, { K: () => l });
            var i = a(71483);
            function l(e) {
                return (null == e ? void 0 : e.data.type) === i.K.Playlist;
            }
        },
        92565: (e) => {
            e.exports = { downloadingProgress: 'TrackDownloadControl_downloadingProgress__wNg2W', progress: 'TrackDownloadControl_progress__K_OhO' };
        },
        93372: (e) => {
            e.exports = {
                title: 'TrackModalTitle_title__3zfNn',
                important: 'TrackModalTitle_important__qNVlq',
                content: 'TrackModalTitle_content__mtQKw',
                explicitMark: 'TrackModalTitle_explicitMark__aRT_I',
                text: 'TrackModalTitle_text__3iWX4',
                artistCaption: 'TrackModalTitle_artistCaption__Sj1CR',
                link: 'TrackModalTitle_link__kzVsl',
                meta: 'TrackModalTitle_meta__xlEgt',
                entityName: 'TrackModalTitle_entityName__BRnTV',
            };
        },
        95481: (e, t, a) => {
            'use strict';
            a.d(t, { f: () => h });
            var i = a(55178),
                l = a(17811),
                n = a(92146),
                s = a(74416),
                r = a(6752),
                o = a(62376),
                c = a(1677),
                d = a(48922),
                u = a(84782),
                _ = a(30915),
                m = a(18746),
                p = a(37240),
                v = a(51012),
                x = a(47498);
            let y = [
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
                h = () => {
                    let e = (0, i.useRef)(!1),
                        t = (0, s.st)(),
                        a = (0, o.U)(),
                        { hash: h } = (0, s.gf)(),
                        { pageId: C } = (0, p.$)(),
                        { tabId: g, tabPos: A, isTabSelectedByDefault: b } = (0, x.R)(),
                        { offsetBlockPosY: f } = (0, _.u)(),
                        { blockId: j, blockType: N, blockPosX: T, blockPosY: S, mainObjectType: I, mainObjectId: k, objectsCount: L } = (0, u.N)(),
                        { filterKey: E, filterValue: M, filterPos: P } = (0, m.G)(),
                        { skeleton: O } = (0, v.b)(),
                        w = (0, r.L)(() => (void 0 !== f && void 0 !== S ? f + S : S));
                    return (0, i.useCallback)(() => {
                        if (!t || !C || !d.xK.includes(C) || !y.includes(C) || e.current) return;
                        let i = { hash: h, pageId: c.F[C], entityType: N, entityId: j, entityPosX: T, entityPosY: w, objectsCount: L };
                        (void 0 !== E && ((i.filterKey = E), (i.filterValue = M), (i.filterPos = P)),
                            d.qG.includes(C) && ((i.tabId = g), (i.tabPos = A), (i.isTabSelectedByDefault = b)),
                            O && (i.skeletonId = O),
                            k && I && ((i.mainObjectType = I), (i.mainObjectId = k)));
                        let s = (0, l.F)({ params: i, logger: a, context: 'useSendEventOnBlockLoaded' });
                        s && ((0, n.uY)(t.evgenInstance, s), (e.current = !0));
                    }, [t, C, h, N, j, T, w, E, M, P, L, O, k, I, a, g, A, b]);
                };
        },
        95520: (e) => {
            e.exports = {
                root: 'SyncLyricsLoader_root__I2hTe',
                element: 'SyncLyricsLoader_element___Luwv',
                pulse: 'SyncLyricsLoader_pulse__5AqRf',
                'change-opacity': 'SyncLyricsLoader_change-opacity__vscya',
                element_withIcon: 'SyncLyricsLoader_element_withIcon__iiSBo',
                element_withDefaultElement: 'SyncLyricsLoader_element_withDefaultElement__WmP80',
                element_paused: 'SyncLyricsLoader_element_paused__LFpD0',
            };
        },
        95736: (e) => {
            e.exports = { root: 'TrailerTrack_root__0UIP4', root_active: 'TrailerTrack_root_active__F_8Iw' };
        },
        95910: (e) => {
            e.exports = {
                root: 'TrackLyricsModal_root__KsVRf',
                header: 'TrackLyricsModal_header__nWar3',
                modalContent: 'TrackLyricsModal_modalContent__uYdL2',
                content: 'TrackLyricsModal_content__Cstzi',
                explicitMark: 'TrackLyricsModal_explicitMark__eL04d',
                important: 'TrackLyricsModal_important__0Ie9h',
                version: 'TrackLyricsModal_version__l9sxZ',
                overlay: 'TrackLyricsModal_overlay__0Ehwu',
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
        97030: (e) => {
            e.exports = {
                content_ru: 'BooksSectionMobile_content_ru__xiiQh',
                content_by: 'BooksSectionMobile_content_by__t_UNK',
                card: 'BooksSectionMobile_card__t6bb7',
                logo_ru: 'BooksSectionMobile_logo_ru__cnYJJ',
                logo_en: 'BooksSectionMobile_logo_en__wcgiD',
            };
        },
        97404: (e) => {
            e.exports = { root: 'PlusPaywallButton_root__ftsxl', title: 'PlusPaywallButton_title__8PpX0', subtitle: 'PlusPaywallButton_subtitle__brC59' };
        },
        98e3: (e) => {
            e.exports = { root: 'PaywallBY_root__XMtUB' };
        },
        98350: (e, t, a) => {
            'use strict';
            a.d(t, { X: () => i });
            var i = (function (e) {
                return ((e.PLAYLIST = 'playlist'), (e.ALBUM = 'album'), e);
            })({});
        },
        98736: (e) => {
            e.exports = {
                root: 'TrackComplaintModal_root__vMG5q',
                root_mobile: 'TrackComplaintModal_root_mobile__B470z',
                content: 'TrackComplaintModal_content__kFsQz',
                iframe: 'TrackComplaintModal_iframe__qp1Jv',
            };
        },
        98924: (e) => {
            e.exports = {
                title: 'ArtistStats_title__Yxyh1',
                count: 'ArtistStats_count__8h5zM',
                stats: 'ArtistStats_stats__Hammf',
                statsNumber_positive: 'ArtistStats_statsNumber_positive__GlukF',
                statsNumber_negative: 'ArtistStats_statsNumber_negative__C0bH5',
            };
        },
    },
]);
