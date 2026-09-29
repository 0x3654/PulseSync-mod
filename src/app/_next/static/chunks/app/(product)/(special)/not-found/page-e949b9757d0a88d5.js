(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [2717],
    {
        7748: (e, n, t) => {
            'use strict';
            (t.r(n), t.d(n, { NotFound: () => P }));
            var o = t(32290),
                a = t(63618),
                i = t(96103),
                r = t(39407),
                s = t(63423),
                c = t(82586),
                l = t(46049),
                p = t(71926),
                d = t(55178),
                u = t(17811),
                _ = t(99923),
                m = t(90153),
                N = t(74416),
                g = t(62376),
                F = t(27576),
                b = t(83920),
                y = t(20472),
                x = t(32641),
                j = t(27120),
                v = t(12894),
                S = t(57594),
                h = t(55365),
                O = t.n(h);
            let P = (0, i.PA)((e) => {
                let { className: n, title: t, description: i, iconVariant: h = 'musicLogo', iconClassName: P, iconSize: f } = e,
                    { contentRef: A, setContentScrollRef: k } = (0, b.g)(),
                    E = (0, x.Z)(y.Z.main.href);
                !(function () {
                    let e = (0, N.st)(),
                        { hash: n } = (0, N.gf)(),
                        t = (0, g.U)(),
                        o = (0, d.useRef)(void 0);
                    (0, d.useEffect)(() => {
                        if (!e || !n) return;
                        o.current = (0, F.A)();
                        let a = (0, u.F)({
                            params: {
                                hash: n,
                                pageId: _.AppScreen.PageNotFoundScreen,
                                pageStyle: _.PageStyles.Fullscreen,
                                pagePlacement: _.PagePlacements.Fullscreen,
                                mainObjectType: _.DomainObjectType.NonApplicable,
                                mainObjectId: _.DomainObjectType.NonApplicable,
                                viewUuid: o.current,
                            },
                            logger: t,
                            context: 'useSendEventOnNotFoundShowedOrHidden.open',
                        });
                        return (
                            a && (0, m.w5)(e.evgenInstance, a),
                            () => {
                                let a = (0, u.F)({
                                    params: {
                                        hash: n,
                                        pageId: _.AppScreen.PageNotFoundScreen,
                                        pageStyle: _.PageStyles.Fullscreen,
                                        pagePlacement: _.PagePlacements.Fullscreen,
                                        mainObjectType: _.DomainObjectType.NonApplicable,
                                        mainObjectId: _.DomainObjectType.NonApplicable,
                                        viewUuid: o.current,
                                    },
                                    logger: t,
                                    context: 'useSendEventOnNotFoundShowedOrHidden.close',
                                });
                                a && (0, m.XB)(e.evgenInstance, a);
                            }
                        );
                    }, [e, n, t]);
                })();
                let { handleNavigateToMain: T } = (function (e) {
                    let n = (0, N.st)(),
                        { hash: t } = (0, N.gf)(),
                        o = (0, g.U)();
                    return {
                        handleNavigateToMain: (0, d.useCallback)(() => {
                            if (!n || !t) return;
                            let a = (0, u.F)({
                                params: {
                                    hash: t,
                                    pageId: _.AppScreen.PageNotFoundScreen,
                                    pageStyle: _.PageStyles.Fullscreen,
                                    pagePlacement: _.PagePlacements.Fullscreen,
                                    mainObjectType: _.DomainObjectType.NonApplicable,
                                    mainObjectId: _.DomainObjectType.NonApplicable,
                                    from: _.AppScreen.PageNotFoundScreen,
                                    to: _.AppScreen.MainScreen,
                                    entityType: _.EntityTypes.Error,
                                    entityId: _.EntityTypes.Error,
                                },
                                logger: o,
                                context: 'useSendEventOnNotFoundNavigated',
                            });
                            (a && (0, m.Mu)(n.evgenInstance, a), e());
                        }, [n, t, o, e]),
                    };
                })(E);
                return (
                    (0, j.N)(!0),
                    !(function () {
                        let { location: e } = (0, S.g)();
                        (0, d.useEffect)(
                            () => (
                                e.setNotFound(!0),
                                () => {
                                    e.setNotFound(!1);
                                }
                            ),
                            [e],
                        );
                    })(),
                    (0, o.jsxs)(l.N, {
                        className: (0, a.$)(O().root, { [O().root_desktop]: !A }, n),
                        containerClassName: O().container,
                        ref: k,
                        children: [
                            (0, o.jsx)(v.L, { withBackwardFallback: '/', className: O().navigation, withForwardControl: !1 }),
                            (0, o.jsxs)('div', {
                                className: O().content,
                                children: [
                                    (0, o.jsx)(c.I, { className: (0, a.$)(O().icon, P), variant: h, size: f }),
                                    (0, o.jsx)(p.DZ, {
                                        className: (0, a.$)(O().title, O().important),
                                        variant: 'h3',
                                        size: 'xs',
                                        children: t || (0, o.jsx)(r.A, { id: 'page-error.page-does-not-exist' }),
                                    }),
                                    (0, o.jsx)(p.HL, {
                                        className: (0, a.$)(O().text, O().important),
                                        variant: 'span',
                                        type: 'text',
                                        size: 'l',
                                        weight: 'normal',
                                        children: i || (0, o.jsx)(r.A, { id: 'page-error.page-does-not-exist-description' }),
                                    }),
                                    (0, o.jsx)(s.$, {
                                        onClick: T,
                                        className: O().button,
                                        role: 'link',
                                        color: 'secondary',
                                        size: 'l',
                                        radius: 'xxxl',
                                        children: (0, o.jsx)(p.HL, {
                                            type: 'controls',
                                            variant: 'span',
                                            size: 'm',
                                            children: (0, o.jsx)(r.A, { id: 'navigation.page-main' }),
                                        }),
                                    }),
                                ],
                            }),
                        ],
                    })
                );
            });
        },
        41132: (e, n, t) => {
            (Promise.resolve().then(t.bind(t, 76171)), Promise.resolve().then(t.bind(t, 7748)));
        },
        55365: (e) => {
            e.exports = {
                root: 'NotFound_root__47ZX6',
                root_desktop: 'NotFound_root_desktop___QqSb',
                container: 'NotFound_container__h1XeE',
                navigation: 'NotFound_navigation__q8rIW',
                content: 'NotFound_content__3kry_',
                icon: 'NotFound_icon___Wa9y',
                title: 'NotFound_title__akG_o',
                important: 'NotFound_important__z1LWl',
                text: 'NotFound_text__oxDZv',
                button: 'NotFound_button__jF4uH',
            };
        },
    },
    (e) => {
        (e.O(
            0,
            [
                1010, 7412, 4517, 7231, 8461, 2147, 6732, 8420, 9030, 1256, 6184, 9763, 5314, 6706, 1311, 5201, 5472, 8378, 900, 2536, 2146, 3353, 2474, 8035, 347, 2732,
                6861, 6108, 8506, 6050, 5806, 6241, 7702, 6874, 9155, 861, 4668, 9740, 4499, 8915, 6341, 4638, 6758, 5774, 8303, 1993, 8242, 6104, 4220, 9562, 7358,
            ],
            () => e((e.s = 41132)),
        ),
            (_N_E = e.O()));
    },
]);
