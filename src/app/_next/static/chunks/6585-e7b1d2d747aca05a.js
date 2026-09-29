(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [6585],
    {
        2881: (e, t, i) => {
            'use strict';
            i.d(t, { F: () => o });
            var n = i(91945),
                a = i(16839),
                r = i(14600);
            class o {
                async openDatabase() {
                    return this.openIdb({ onBlocked: () => this.onBlockedHandler(), onTerminated: () => this.onTerminatedHandler() }).then((e) => {
                        this.idb = Promise.resolve(e);
                    });
                }
                isAvailable() {
                    return this.idbIsAvailable;
                }
                async deleteDatabase() {
                    let { dbName: e } = this.config;
                    return window.indexedDB
                        .databases()
                        .then((t) => (t.find((t) => e === t.name) ? new r.h(e).deleteDB({ onBlocked: a.A }) : Promise.resolve()))
                        .catch(a.A);
                }
                async executeTransaction(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    return this.idbIsAvailable && this.idb
                        ? this.idb.then((i) => (i ? e(i) : Promise.resolve(null == t ? void 0 : t.defaultValue)))
                        : Promise.resolve(null == t ? void 0 : t.defaultValue);
                }
                onBlockedHandler() {
                    this.closeConnection(this.idb).then(() => {
                        this.idb = this.openIdb({
                            onBlocked: () => {
                                this.closeConnection(this.idb);
                            },
                            onTerminated: () => this.onTerminatedHandler(),
                        });
                    });
                }
                onTerminatedHandler() {
                    ((this.idbIsAvailable = !1),
                        (this.idb = this.openIdb({
                            onBlocked: () => this.onBlockedHandler(),
                            onTerminated: () => {
                                this.idbIsAvailable = !1;
                            },
                        })));
                }
                async openIdb(e) {
                    let { dbName: t, dbVersion: i, onUpgrade: n } = this.config;
                    try {
                        let a = await new r.h(t).openDB(i, {
                            onBlocked: (t, i, n) => {
                                var a;
                                null == e || null == (a = e.onBlocked) || a.call(e, t, i, n);
                            },
                            onTerminated: () => {
                                var t;
                                null == e || null == (t = e.onTerminated) || t.call(e);
                            },
                            onUpgrade: (e) => {
                                n(e);
                            },
                        });
                        return ((this.idbIsAvailable = !0), a);
                    } catch (e) {
                        this.idbIsAvailable = !1;
                    }
                }
                async closeConnection(e) {
                    return ((this.idbIsAvailable = !1), (this.idb = void 0), e)
                        ? e
                              .then((e) => {
                                  e && e.close();
                              })
                              .catch(a.A)
                        : Promise.resolve();
                }
                constructor(e) {
                    ((0, n._)(this, 'config', void 0),
                        (0, n._)(this, 'idb', void 0),
                        (0, n._)(this, 'idbIsAvailable', void 0),
                        (this.config = e),
                        (this.idbIsAvailable = !1));
                }
            }
        },
        4529: (e) => {
            e.exports = {
                root: 'WordsCardPopoverDesktop_root__vm3hv',
                item: 'WordsCardPopoverDesktop_item__eZPj9',
                actionItem: 'WordsCardPopoverDesktop_actionItem__l25qD',
                actionItem_active: 'WordsCardPopoverDesktop_actionItem_active__BORi3',
                divider: 'WordsCardPopoverDesktop_divider__Vy2GN',
                sourceItem: 'WordsCardPopoverDesktop_sourceItem__fUPoo',
                sourceItem_withoutIcon: 'WordsCardPopoverDesktop_sourceItem_withoutIcon__earG1',
                sourceIcon: 'WordsCardPopoverDesktop_sourceIcon__QSr8h',
            };
        },
        8958: (e, t, i) => {
            'use strict';
            i.d(t, { X: () => n });
            let n = function (e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ', ';
                return e
                    .map((e) =>
                        e.decomposed
                            ? e.name +
                              e.decomposed
                                  .map((e) => {
                                      var t;
                                      return ''.concat(null != (t = e.separator) ? t : '').concat(e.name);
                                  })
                                  .join('')
                            : e.name,
                    )
                    .join(t);
            };
        },
        10598: (e) => {
            e.exports = {
                root: 'WizardIntroModal_root__P1uIH',
                root_mobile: 'WizardIntroModal_root_mobile__Ax8HO',
                header: 'WizardIntroModal_header__qtpcO',
                content: 'WizardIntroModal_content__0A1Ox',
                image: 'WizardIntroModal_image__SOJa7',
                text: 'WizardIntroModal_text___yvOo',
                title: 'WizardIntroModal_title__NWQaj',
                description: 'WizardIntroModal_description__rDfHs',
                button: 'WizardIntroModal_button__b9jJT',
            };
        },
        13591: (e) => {
            e.exports = {
                root: 'WordsCardPopoverMobile_root__iHBbJ',
                container: 'WordsCardPopoverMobile_container___Eq_i',
                text: 'WordsCardPopoverMobile_text__j52Bl',
                sources: 'WordsCardPopoverMobile_sources__fKNrx',
                sourceItem: 'WordsCardPopoverMobile_sourceItem__XBH1a',
                sourceItem_withoutIcon: 'WordsCardPopoverMobile_sourceItem_withoutIcon__QM7Ht',
                action: 'WordsCardPopoverMobile_action__c_FPQ',
                sourceIcon: 'WordsCardPopoverMobile_sourceIcon__aWdrm',
                feedbackSection: 'WordsCardPopoverMobile_feedbackSection__25RsC',
                feedbackQuestion: 'WordsCardPopoverMobile_feedbackQuestion__NKSto',
                feedbackButtons: 'WordsCardPopoverMobile_feedbackButtons__Cd9Yf',
                feedbackButton: 'WordsCardPopoverMobile_feedbackButton__tejta',
                feedbackButton_active: 'WordsCardPopoverMobile_feedbackButton_active__XJl7S',
            };
        },
        14600: (e, t, i) => {
            'use strict';
            i.d(t, { h: () => p });
            var n = i(62475);
            class a {
                get delete() {
                    var e;
                    return null == (e = this.cursor.delete) ? void 0 : e.bind(this.cursor);
                }
                get update() {
                    var e;
                    return null == (e = this.cursor.update) ? void 0 : e.bind(this.cursor);
                }
                [Symbol.asyncIterator]() {
                    return this.cursor[Symbol.asyncIterator]();
                }
                constructor(e) {
                    (Object.defineProperty(this, 'cursor', { enumerable: !0, configurable: !0, writable: !0, value: e }),
                        Object.defineProperty(this, 'key', { enumerable: !0, configurable: !0, writable: !0, value: void 0 }),
                        Object.defineProperty(this, 'direction', { enumerable: !0, configurable: !0, writable: !0, value: void 0 }),
                        Object.defineProperty(this, 'request', { enumerable: !0, configurable: !0, writable: !0, value: void 0 }),
                        Object.defineProperty(this, 'primaryKey', { enumerable: !0, configurable: !0, writable: !0, value: void 0 }),
                        Object.defineProperty(this, 'advance', { enumerable: !0, configurable: !0, writable: !0, value: void 0 }),
                        Object.defineProperty(this, 'continue', { enumerable: !0, configurable: !0, writable: !0, value: void 0 }),
                        Object.defineProperty(this, 'continuePrimaryKey', { enumerable: !0, configurable: !0, writable: !0, value: void 0 }),
                        (this.direction = e.direction),
                        (this.request = e.request),
                        (this.primaryKey = e.primaryKey),
                        (this.key = e.key),
                        (this.advance = e.advance.bind(e)),
                        (this.continue = e.continue.bind(e)),
                        (this.continuePrimaryKey = e.continuePrimaryKey.bind(e)));
                }
            }
            class r extends a {
                [Symbol.asyncIterator]() {
                    return this.cursor[Symbol.asyncIterator]();
                }
                constructor(e) {
                    (super(e),
                        Object.defineProperty(this, 'cursor', { enumerable: !0, configurable: !0, writable: !0, value: e }),
                        Object.defineProperty(this, 'value', { enumerable: !0, configurable: !0, writable: !0, value: void 0 }),
                        (this.value = e.value));
                }
            }
            var o = function (e, t, i, n) {
                return new (i || (i = Promise))(function (a, r) {
                    function o(e) {
                        try {
                            l(n.next(e));
                        } catch (e) {
                            r(e);
                        }
                    }
                    function s(e) {
                        try {
                            l(n.throw(e));
                        } catch (e) {
                            r(e);
                        }
                    }
                    function l(e) {
                        var t;
                        e.done
                            ? a(e.value)
                            : ((t = e.value) instanceof i
                                  ? t
                                  : new i(function (e) {
                                        e(t);
                                    })
                              ).then(o, s);
                    }
                    l((n = n.apply(e, t || [])).next());
                });
            };
            class s {
                get(e) {
                    return o(this, void 0, void 0, function* () {
                        return this.index.get(e);
                    });
                }
                getAll(e, t) {
                    return o(this, void 0, void 0, function* () {
                        return this.index.getAll(e, t);
                    });
                }
                getAllKeys(e, t) {
                    return o(this, void 0, void 0, function* () {
                        return this.index.getAllKeys(e, t);
                    });
                }
                getKey(e) {
                    return o(this, void 0, void 0, function* () {
                        return this.index.getKey(e);
                    });
                }
                count(e) {
                    return o(this, void 0, void 0, function* () {
                        return this.index.count(e);
                    });
                }
                openCursor(e, t) {
                    return o(this, void 0, void 0, function* () {
                        let i = yield this.index.openCursor(e, t);
                        return i && new r(i);
                    });
                }
                openKeyCursor(e, t) {
                    return o(this, void 0, void 0, function* () {
                        let i = yield this.index.openKeyCursor(e, t);
                        return i && new a(i);
                    });
                }
                [Symbol.asyncIterator]() {
                    return this.index[Symbol.asyncIterator]();
                }
                iterate(e, t) {
                    return this.index.iterate(e, t);
                }
                constructor(e) {
                    (Object.defineProperty(this, 'index', { enumerable: !0, configurable: !0, writable: !0, value: e }),
                        Object.defineProperty(this, 'keyPath', { enumerable: !0, configurable: !0, writable: !0, value: void 0 }),
                        Object.defineProperty(this, 'multiEntry', { enumerable: !0, configurable: !0, writable: !0, value: void 0 }),
                        Object.defineProperty(this, 'name', { enumerable: !0, configurable: !0, writable: !0, value: void 0 }),
                        Object.defineProperty(this, 'unique', { enumerable: !0, configurable: !0, writable: !0, value: void 0 }),
                        (this.keyPath = e.keyPath),
                        (this.multiEntry = e.multiEntry),
                        (this.name = e.name),
                        (this.unique = e.unique));
                }
            }
            var l = function (e, t, i, n) {
                return new (i || (i = Promise))(function (a, r) {
                    function o(e) {
                        try {
                            l(n.next(e));
                        } catch (e) {
                            r(e);
                        }
                    }
                    function s(e) {
                        try {
                            l(n.throw(e));
                        } catch (e) {
                            r(e);
                        }
                    }
                    function l(e) {
                        var t;
                        e.done
                            ? a(e.value)
                            : ((t = e.value) instanceof i
                                  ? t
                                  : new i(function (e) {
                                        e(t);
                                    })
                              ).then(o, s);
                    }
                    l((n = n.apply(e, t || [])).next());
                });
            };
            class c {
                get indexNames() {
                    return this.objectStore.indexNames;
                }
                get put() {
                    var e;
                    return null == (e = this.objectStore.put) ? void 0 : e.bind(this.objectStore);
                }
                get add() {
                    var e;
                    return null == (e = this.objectStore.add) ? void 0 : e.bind(this.objectStore);
                }
                get clear() {
                    var e;
                    return null == (e = this.objectStore.clear) ? void 0 : e.bind(this.objectStore);
                }
                get delete() {
                    var e;
                    return null == (e = this.objectStore.delete) ? void 0 : e.bind(this.objectStore);
                }
                createIndex(e, t, i) {
                    return this.objectStore.createIndex ? new s(this.objectStore.createIndex(e, t, i)) : null;
                }
                deleteIndex(e) {
                    return this.objectStore.deleteIndex(e);
                }
                count(e) {
                    return l(this, void 0, void 0, function* () {
                        return this.objectStore.count(e);
                    });
                }
                get(e) {
                    return l(this, void 0, void 0, function* () {
                        return this.objectStore.get(e);
                    });
                }
                getAll(e, t) {
                    return l(this, void 0, void 0, function* () {
                        return this.objectStore.getAll(e, t);
                    });
                }
                getAllKeys(e, t) {
                    return l(this, void 0, void 0, function* () {
                        return this.objectStore.getAllKeys(e, t);
                    });
                }
                getKey(e) {
                    return l(this, void 0, void 0, function* () {
                        return this.objectStore.getKey(e);
                    });
                }
                index(e) {
                    return new s(this.objectStore.index(e));
                }
                openKeyCursor(e, t) {
                    return l(this, void 0, void 0, function* () {
                        let i = yield this.objectStore.openKeyCursor(e, t);
                        return i && new a(i);
                    });
                }
                openCursor(e, t) {
                    return l(this, void 0, void 0, function* () {
                        let i = yield this.objectStore.openCursor(e, t);
                        return i && new r(i);
                    });
                }
                iterate(e, t) {
                    return this.objectStore.iterate(e, t);
                }
                [Symbol.asyncIterator]() {
                    return this.objectStore[Symbol.asyncIterator]();
                }
                constructor(e) {
                    (Object.defineProperty(this, 'objectStore', { enumerable: !0, configurable: !0, writable: !0, value: e }),
                        Object.defineProperty(this, 'autoIncrement', { enumerable: !0, configurable: !0, writable: !0, value: void 0 }),
                        Object.defineProperty(this, 'keyPath', { enumerable: !0, configurable: !0, writable: !0, value: void 0 }),
                        Object.defineProperty(this, 'name', { enumerable: !0, configurable: !0, writable: !0, value: void 0 }),
                        (this.autoIncrement = e.autoIncrement),
                        (this.keyPath = e.keyPath),
                        (this.name = e.name));
                }
            }
            class d {
                get error() {
                    return this.transaction.error;
                }
                get done() {
                    return this.transaction.done;
                }
                abort() {
                    return this.transaction.abort();
                }
                commit() {
                    return this.transaction.commit();
                }
                objectStore(e) {
                    return new c(this.transaction.objectStore(e));
                }
                addEventListener(e, t, i) {
                    return this.transaction.addEventListener(e, t, i);
                }
                removeEventListener(e, t, i) {
                    return this.transaction.removeEventListener(e, t, i);
                }
                set onabort(e) {
                    this.transaction.onabort = e;
                }
                set onerror(e) {
                    this.transaction.onerror = e;
                }
                set oncomplete(e) {
                    this.transaction.oncomplete = e;
                }
                dispatchEvent(e) {
                    return this.transaction.dispatchEvent(e);
                }
                constructor(e) {
                    (Object.defineProperty(this, 'transaction', { enumerable: !0, configurable: !0, writable: !0, value: e }),
                        Object.defineProperty(this, 'durability', { enumerable: !0, configurable: !0, writable: !0, value: void 0 }),
                        Object.defineProperty(this, 'mode', { enumerable: !0, configurable: !0, writable: !0, value: void 0 }),
                        Object.defineProperty(this, 'objectStoreNames', { enumerable: !0, configurable: !0, writable: !0, value: void 0 }),
                        (this.durability = e.durability),
                        (this.mode = e.mode),
                        (this.objectStoreNames = e.objectStoreNames));
                }
            }
            var u = function (e, t, i, n) {
                return new (i || (i = Promise))(function (a, r) {
                    function o(e) {
                        try {
                            l(n.next(e));
                        } catch (e) {
                            r(e);
                        }
                    }
                    function s(e) {
                        try {
                            l(n.throw(e));
                        } catch (e) {
                            r(e);
                        }
                    }
                    function l(e) {
                        var t;
                        e.done
                            ? a(e.value)
                            : ((t = e.value) instanceof i
                                  ? t
                                  : new i(function (e) {
                                        e(t);
                                    })
                              ).then(o, s);
                    }
                    l((n = n.apply(e, t || [])).next());
                });
            };
            class m {
                get objectStoreNames() {
                    return this.database.objectStoreNames;
                }
                transaction(e, t, i) {
                    return new d(this.database.transaction(e, t, i));
                }
                createObjectStore(e, t) {
                    return new c(this.database.createObjectStore(e, t));
                }
                deleteObjectStore(e) {
                    return this.database.deleteObjectStore(e);
                }
                get(e, t) {
                    return u(this, void 0, void 0, function* () {
                        return this.database.get(e, t);
                    });
                }
                getAll(e, t, i) {
                    return u(this, void 0, void 0, function* () {
                        return this.database.getAll(e, t, i);
                    });
                }
                add(e, t, i) {
                    return u(this, void 0, void 0, function* () {
                        return this.database.add(e, t, i);
                    });
                }
                put(e, t, i) {
                    return u(this, void 0, void 0, function* () {
                        return this.database.put(e, t, i);
                    });
                }
                delete(e, t) {
                    return u(this, void 0, void 0, function* () {
                        return this.database.delete(e, t);
                    });
                }
                clear(e) {
                    return u(this, void 0, void 0, function* () {
                        return this.database.clear(e);
                    });
                }
                count(e, t) {
                    return u(this, void 0, void 0, function* () {
                        return this.database.count(e, t);
                    });
                }
                getKey(e, t) {
                    return u(this, void 0, void 0, function* () {
                        return this.database.getKey(e, t);
                    });
                }
                getAllKeys(e, t, i) {
                    return u(this, void 0, void 0, function* () {
                        return this.database.getAllKeys(e, t, i);
                    });
                }
                countFromIndex(e, t, i) {
                    return u(this, void 0, void 0, function* () {
                        return this.database.countFromIndex(e, t, i);
                    });
                }
                getFromIndex(e, t, i) {
                    return u(this, void 0, void 0, function* () {
                        return this.database.getFromIndex(e, t, i);
                    });
                }
                getAllFromIndex(e, t, i, n) {
                    return u(this, void 0, void 0, function* () {
                        return this.database.getAllFromIndex(e, t, i, n);
                    });
                }
                getAllKeysFromIndex(e, t, i, n) {
                    return u(this, void 0, void 0, function* () {
                        return this.database.getAllKeysFromIndex(e, t, i, n);
                    });
                }
                getKeyFromIndex(e, t, i) {
                    return u(this, void 0, void 0, function* () {
                        return this.database.getKeyFromIndex(e, t, i);
                    });
                }
                addEventListener(e, t, i) {
                    this.database.addEventListener(e, t, i);
                }
                removeEventListener(e, t, i) {
                    this.database.removeEventListener(e, t, i);
                }
                set onabort(e) {
                    this.database.onabort = e;
                }
                set onclose(e) {
                    this.database.onclose = e;
                }
                set onerror(e) {
                    this.database.onerror = e;
                }
                set onversionchange(e) {
                    this.database.onversionchange = e;
                }
                close() {
                    return this.database.close();
                }
                dispatchEvent(e) {
                    return this.database.dispatchEvent(e);
                }
                constructor(e) {
                    (Object.defineProperty(this, 'database', { enumerable: !0, configurable: !0, writable: !0, value: e }),
                        Object.defineProperty(this, 'version', { enumerable: !0, configurable: !0, writable: !0, value: void 0 }),
                        Object.defineProperty(this, 'name', { enumerable: !0, configurable: !0, writable: !0, value: void 0 }),
                        (this.version = e.version),
                        (this.name = e.name));
                }
            }
            var b = function (e, t, i, n) {
                return new (i || (i = Promise))(function (a, r) {
                    function o(e) {
                        try {
                            l(n.next(e));
                        } catch (e) {
                            r(e);
                        }
                    }
                    function s(e) {
                        try {
                            l(n.throw(e));
                        } catch (e) {
                            r(e);
                        }
                    }
                    function l(e) {
                        var t;
                        e.done
                            ? a(e.value)
                            : ((t = e.value) instanceof i
                                  ? t
                                  : new i(function (e) {
                                        e(t);
                                    })
                              ).then(o, s);
                    }
                    l((n = n.apply(e, t || [])).next());
                });
            };
            class p {
                openDB(e) {
                    let { onBlocked: t, onBlocking: i, onTerminated: a, onUpgrade: r } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    return b(this, void 0, void 0, function* () {
                        let o = yield (0, n.P2)(this.name, e, {
                            blocked: t,
                            blocking: i,
                            terminated: a,
                            upgrade: (e, t, i, n, a) => {
                                let o = new m(e);
                                null == r || r(o, t, i, new d(n), a);
                            },
                        });
                        return new m(o);
                    });
                }
                deleteDB(e) {
                    let { onBlocked: t } = e;
                    return b(this, void 0, void 0, function* () {
                        yield (0, n.MR)(this.name, { blocked: t });
                    });
                }
                constructor(e) {
                    Object.defineProperty(this, 'name', { enumerable: !0, configurable: !0, writable: !0, value: e });
                }
            }
        },
        15248: (e) => {
            e.exports = { root: 'LoadingPhrase_root__0ML0A', 'gradient-sweep': 'LoadingPhrase_gradient-sweep__SncsP', text: 'LoadingPhrase_text__Ne1FD' };
        },
        17512: (e, t, i) => {
            'use strict';
            function n() {
                var e;
                return null == (e = window.musicDesktop) ? void 0 : e.runtime.version;
            }
            i.d(t, { B: () => n });
        },
        17593: (e, t, i) => {
            'use strict';
            i.d(t, { e: () => o });
            var n = i(91027),
                a = i(57594),
                r = i(79406);
            let o = () => {
                let { experiments: e, user: t, wizard: i, sonataState: o } = (0, a.g)(),
                    s = e.checkExperiment(r.z.WebNextNewWaveWizard, 'on'),
                    l = s && t.hasPlus && t.settings.showWizard && !o.entityMeta,
                    c = (0, n.c)(() => !!l && (i.introModal.open(), !0)),
                    d = (0, n.c)(() => {
                        s && i.introModal.open();
                    });
                return { isEnabled: s, shouldOpenIntroFromPlay: l, openIntroModalFromPlay: c, openWizard: d };
            };
        },
        19025: (e) => {
            e.exports = {
                root: 'VibePlayerControls_root__qr97B',
                skipButton: 'VibePlayerControls_skipButton__z57B_',
                playButtonIcon: 'VibePlayerControls_playButtonIcon__OXCWN',
                playButton: 'VibePlayerControls_playButton__vnoer',
                playButton_playing: 'VibePlayerControls_playButton_playing__qPeBv',
            };
        },
        19953: (e) => {
            e.exports = {
                root: 'VibePlayerbarMeta_root___dH5G',
                timecodeOverlay: 'VibePlayerbarMeta_timecodeOverlay__JhnCy',
                trackName: 'VibePlayerbarMeta_trackName__eyhTE',
                'fade-in': 'VibePlayerbarMeta_fade-in__rycjr',
                center: 'VibePlayerbarMeta_center__6kbMi',
                center_active: 'VibePlayerbarMeta_center_active__a1rFN',
                center_withTimecode: 'VibePlayerbarMeta_center_withTimecode__hoQVg',
                center_withExplicitMark: 'VibePlayerbarMeta_center_withExplicitMark__emag_',
                center_withExplicitMark_playing: 'VibePlayerbarMeta_center_withExplicitMark_playing__SCPvO',
                explicitMarkContainer: 'VibePlayerbarMeta_explicitMarkContainer__d0pfO',
                center_withoutExplicitMark: 'VibePlayerbarMeta_center_withoutExplicitMark__OrzGP',
                center_withoutExplicitMark_playing: 'VibePlayerbarMeta_center_withoutExplicitMark_playing__KnEhn',
                scrollingTrackName: 'VibePlayerbarMeta_scrollingTrackName__gl_Cl',
                trackNameText: 'VibePlayerbarMeta_trackNameText__9IgY2',
                artists: 'VibePlayerbarMeta_artists__2laQI',
                generativeTitle: 'VibePlayerbarMeta_generativeTitle__ksCD6',
                slider: 'VibePlayerbarMeta_slider__pyonb',
                slider_active: 'VibePlayerbarMeta_slider_active__H1uGz',
                explicitMark: 'VibePlayerbarMeta_explicitMark__G8dYl',
                generativeIcon: 'VibePlayerbarMeta_generativeIcon__Taac7',
            };
        },
        23028: (e) => {
            e.exports = {
                content: 'MainPage_content__kskSM',
                root: 'MainPage_root__STXqc',
                container: 'MainPage_container__CB86l',
                vibe: 'MainPage_vibe__XEBbh',
                landing: 'MainPage_landing___FGNm',
                actionsBar: 'MainPage_actionsBar__agoxp',
                actionsBar_desktop: 'MainPage_actionsBar_desktop__zctj6',
                userProfile: 'MainPage_userProfile__8JzS3',
                vibeWidgetContainer: 'MainPage_vibeWidgetContainer__i5T4X',
                beta: 'MainPage_beta__y32vb',
                beta_withReleaseNotes: 'MainPage_beta_withReleaseNotes__WOjUk',
                betaSlot: 'MainPage_betaSlot__JwbmM',
                betaSlot_newVibe: 'MainPage_betaSlot_newVibe__DGtXm',
                specialHeaderContainer: 'MainPage_specialHeaderContainer__L3C6E',
                specialHeader: 'MainPage_specialHeader__aqdvj',
                specialHeaderImage: 'MainPage_specialHeaderImage__4GlXq',
                footer: 'MainPage_footer__2rGy2',
                error: 'MainPage_error__u_UCm',
            };
        },
        24372: (e) => {
            e.exports = {
                root: 'AiBadge_root__EfKG1',
                root_dimmed: 'AiBadge_root_dimmed__XLGvP',
                glow: 'AiBadge_glow__R6cQa',
                icon: 'AiBadge_icon__dhZpE',
                icon_okniks: 'AiBadge_icon_okniks__HM5CC',
                icon_sparkles: 'AiBadge_icon_sparkles__cS_kL',
                sparkles: 'AiBadge_sparkles__Yua7j',
                sparkle: 'AiBadge_sparkle__5EMmQ',
                'sparkle-carousel': 'AiBadge_sparkle-carousel__fMVfW',
            };
        },
        25266: (e, t, i) => {
            'use strict';
            var n;
            (i.d(t, { a: () => n }),
                (function (e) {
                    ((e.LIKE = 'like'), (e.DISLIKE = 'dislike'), (e.NEUTRAL = 'neutral'));
                })(n || (n = {})));
        },
        27515: (e, t, i) => {
            'use strict';
            i.d(t, { z: () => n });
            let n = (e, t) => {
                let i = Number(t);
                return !Number.isNaN(i) && i > 0 && i < e.length ? i : 0;
            };
        },
        29025: (e) => {
            e.exports = { root: 'WordsCardPopoverDisclaimer_root__yyXMs', description: 'WordsCardPopoverDisclaimer_description__0RhrR' };
        },
        29207: (e) => {
            e.exports = {
                root: 'VibeResetButton_root__ju8pE',
                root_visible: 'VibeResetButton_root_visible__OHA1w',
                'fade-in': 'VibeResetButton_fade-in__4Dgxq',
                root_q2v: 'VibeResetButton_root_q2v__K9GdD',
                root_withFeedbackForm: 'VibeResetButton_root_withFeedbackForm__s6ltp',
                container: 'VibeResetButton_container__JO2j1',
                icon: 'VibeResetButton_icon__2FkgG',
                button: 'VibeResetButton_button__i8Cvy',
                button_q2v: 'VibeResetButton_button_q2v__NX6iG',
                context: 'VibeResetButton_context__hsTlv',
                context_q2v: 'VibeResetButton_context_q2v__OVhK6',
            };
        },
        30480: (e) => {
            e.exports = {
                root: 'WordsCardFullscreen_root__CiG4W',
                modalContent: 'WordsCardFullscreen_modalContent__1SYUO',
                closeButtonWrapper: 'WordsCardFullscreen_closeButtonWrapper__iH_IT',
                layout: 'WordsCardFullscreen_layout__KJMiD',
                contentArea: 'WordsCardFullscreen_contentArea__CKea4',
                contentArea_withMessageScroll: 'WordsCardFullscreen_contentArea_withMessageScroll__td5cI',
                content: 'WordsCardFullscreen_content__JA2fN',
                messageScroll: 'WordsCardFullscreen_messageScroll__uUYjh',
                message: 'WordsCardFullscreen_message__UmEx9',
                messageScroll_scrollable: 'WordsCardFullscreen_messageScroll_scrollable__CfU_t',
                primaryAction: 'WordsCardFullscreen_primaryAction__HxPI9',
                actions: 'WordsCardFullscreen_actions__cT5Cp',
                sourceItem: 'WordsCardFullscreen_sourceItem__WL48h',
                sourceItem_withoutIcon: 'WordsCardFullscreen_sourceItem_withoutIcon__os6rv',
                sourceIcon: 'WordsCardFullscreen_sourceIcon__IDX9f',
                actionText: 'WordsCardFullscreen_actionText__09dJk',
                feedback: 'WordsCardFullscreen_feedback__E7bsR',
                feedbackButton: 'WordsCardFullscreen_feedbackButton__HwM10',
                feedbackButton_active: 'WordsCardFullscreen_feedbackButton_active__fE5dO',
                feedbackDivider: 'WordsCardFullscreen_feedbackDivider__xBnSf',
                disclaimer: 'WordsCardFullscreen_disclaimer__NTfeR',
            };
        },
        37875: (e) => {
            e.exports = {
                root: 'WordsCardFullscreenShimmer_root__QYKVQ',
                topGroup: 'WordsCardFullscreenShimmer_topGroup__wA7gB',
                line: 'WordsCardFullscreenShimmer_line__5pJmz',
                topLinePrimary: 'WordsCardFullscreenShimmer_topLinePrimary__EZtz5',
                topLineSecondary: 'WordsCardFullscreenShimmer_topLineSecondary___ov_Y',
                main: 'WordsCardFullscreenShimmer_main__QGRY4',
                mainLine: 'WordsCardFullscreenShimmer_mainLine__alNOP',
                bottom: 'WordsCardFullscreenShimmer_bottom__1YoRA',
                bottomLine: 'WordsCardFullscreenShimmer_bottomLine__jTQt4',
            };
        },
        39868: (e) => {
            e.exports = { root: 'SpeedMenuItem_root__7j8VN', icon: 'SpeedMenuItem_icon__EyXPA' };
        },
        43315: (e) => {
            e.exports = { root: 'VibeArtistCover_root__LSPPQ', cover: 'VibeArtistCover_cover__AEtTV' };
        },
        47713: (e) => {
            e.exports = {
                root: 'VibePage_root__dGvPX',
                root_reshuffle: 'VibePage_root_reshuffle__gz97v',
                root_withoutPlus: 'VibePage_root_withoutPlus__xZ8r4',
                artistCover: 'VibePage_artistCover__RQee1',
                textContainer_withCover: 'VibePage_textContainer_withCover__U2z1l',
                freemiumBlock: 'VibePage_freemiumBlock__uhLoT',
                meta: 'VibePage_meta__kWwRE',
                meta_noPlus: 'VibePage_meta_noPlus__YtQX1',
                entityMeta: 'VibePage_entityMeta__dhDch',
                entityMetaBody: 'VibePage_entityMetaBody__EITDL',
                'meta-fade-in': 'VibePage_meta-fade-in__H0xeT',
                vibeAnimation: 'VibePage_vibeAnimation__qQ6ci',
                textContainer: 'VibePage_textContainer__odK0M',
                context: 'VibePage_context__CoYut',
                text: 'VibePage_text__sPFhf',
                important: 'VibePage_important__qFvbL',
                button: 'VibePage_button__ZWQxy',
                playerBlock: 'VibePage_playerBlock__b6ZRu',
                playerBlock_withFreemium: 'VibePage_playerBlock_withFreemium__8Avmc',
                words: 'VibePage_words__39Mii',
                wheel: 'VibePage_wheel__E_p8_',
                textContainer_playing: 'VibePage_textContainer_playing__xJphv',
            };
        },
        49492: (e) => {
            e.exports = { root: 'ArtistsMenu_root__j5U2g', menuList: 'ArtistsMenu_menuList__4v6Uo', menuItem: 'ArtistsMenu_menuItem__lievm' };
        },
        49723: (e) => {
            e.exports = {
                root: 'VibeSettings_root__ufZlV',
                popover: 'VibeSettings_popover__VKqUc',
                overlay: 'VibeSettings_overlay__pusb4',
                toggleSettingsButton: 'VibeSettings_toggleSettingsButton__j6fIU',
                header: 'VibeSettings_header__OAWe2',
                actions: 'VibeSettings_actions__ckbMt',
                swipeableArea: 'VibeSettings_swipeableArea__Xx0nx',
                ripple: 'VibeSettings_ripple__kmFX6',
            };
        },
        50905: (e) => {
            e.exports = {
                root: 'PromoButton_root__kDDyz',
                caption: 'PromoButton_caption__p6nwX',
                imageContainer: 'PromoButton_imageContainer__XIwZc',
                image: 'PromoButton_image__S8uoV',
            };
        },
        53255: (e) => {
            e.exports = { root: 'VibeDynamicArtists_root__Wbigy' };
        },
        56585: (e, t, i) => {
            'use strict';
            i.d(t, { MainPage: () => nY });
            var n,
                a,
                r,
                o,
                s,
                l,
                c = i(32290),
                d = i(63618),
                u = i(96103),
                m = i(21916),
                b = i(55178),
                p = i.t(b, 2),
                v = i(60900),
                _ = i(39407),
                h = i(21732),
                g = i(73474),
                f = i(91027),
                x = i(54862),
                y = i(6752),
                A = i(63423),
                C = i(50162),
                j = i(46049),
                S = i(70280),
                T = i(71926),
                k = i(40959),
                E = i(64170),
                P = i(42406),
                I = i(65493);
            let N = (0, b.lazy)(async () =>
                    Promise.all([i.e(321), i.e(8158)])
                        .then(i.bind(i, 88158))
                        .then((e) => ({ default: e.VibeFallbackAnimation })),
                ),
                w = (0, b.lazy)(async () =>
                    Promise.all([i.e(321), i.e(8672), i.e(7078), i.e(627), i.e(4546)])
                        .then(i.bind(i, 14546))
                        .then((e) => ({ default: e.VibeAnimation })),
                ),
                O = I.default.default(
                    () =>
                        Promise.all([i.e(321), i.e(1560)])
                            .then(i.bind(i, 11560))
                            .then((e) => ({ default: e.VibeWidgetFallbackAnimation })),
                    { ssr: !1 },
                ),
                M = I.default.default(
                    () =>
                        Promise.all([i.e(321), i.e(8672), i.e(7078), i.e(1013)])
                            .then(i.bind(i, 51013))
                            .then((e) => ({ default: e.VibeWidgetAnimation })),
                    { ssr: !1 },
                );
            var B = i(84782),
                R = i(37240),
                D = i(98740),
                V = i(70204),
                L = i(34186),
                W = i(43564),
                F = i(57594),
                U = i(79406),
                z = i(49399),
                H = i(15509),
                K = i(94218),
                q = i(82586),
                X = i(77322),
                G = i(83808),
                Y = i(66007),
                $ = i.n(Y);
            let Z = !0,
                Q = (0, u.PA)((e) => {
                    let { isPlaying: t, onClick: i, ariaDisabled: n, className: a } = e,
                        { vibe: r } = (0, F.g)(),
                        { formatMessage: o } = (0, v.A)(),
                        s = (0, G.W)(),
                        l = (0, X.D)(),
                        u = t ? 'pauseVibe' : 'playVibe',
                        m = t ? h.e8.vibe.MY_VIBE_PAUSE_BUTTON : h.e8.vibe.MY_VIBE_PLAY_BUTTON,
                        p = (0, b.useMemo)(() => (t ? o({ id: 'vibe-actions.aria-label-pause' }) : o({ id: 'vibe-actions.aria-label-play' })), [o, t]),
                        g = (0, b.useCallback)(
                            (e) => {
                                (r.isApplying || null == i || i(), e.stopPropagation(), e.preventDefault());
                            },
                            [i, r.isApplying],
                        );
                    return (
                        (0, b.useEffect)(() => {
                            if ('production' === l && 1 === s.length && Z) {
                                var e, t;
                                let i = Math.round(performance.now());
                                (null == (t = window.Ya) || null == (e = t.Rum) || e.sendTimeMark('my-vibe-button-loading-time', i), (Z = !1));
                            }
                        }, []),
                        (0, c.jsx)(A.$, {
                            className: (0, d.$)($().root, { [$().root_isVibeLoading]: r.isApplying }, a),
                            withRipple: !1,
                            withHover: !1,
                            onClick: g,
                            variant: 'text',
                            'aria-disabled': r.isApplying || n,
                            'aria-label': p,
                            icon: (0, c.jsx)(q.I, { size: 's', className: $().icon, variant: u }),
                            'data-test-id': m,
                            children: (0, c.jsx)(_.A, { id: 'entity-names.my-vibe' }),
                        })
                    );
                });
            Q.displayName = 'PlayButton';
            var J = i(88751),
                ee = i.n(J),
                et = {
                    4490: (e, t, i) => {
                        (i.r(t), i.d(t, { DOWN: () => s, LEFT: () => a, RIGHT: () => r, UP: () => o, useSwipeable: () => b }));
                        var n = i(810);
                        let a = 'Left',
                            r = 'Right',
                            o = 'Up',
                            s = 'Down',
                            l = {
                                delta: 10,
                                preventScrollOnSwipe: !1,
                                rotationAngle: 0,
                                trackMouse: !1,
                                trackTouch: !0,
                                swipeDuration: 1 / 0,
                                touchEventOptions: { passive: !0 },
                            },
                            c = { first: !0, initial: [0, 0], start: 0, swiping: !1, xy: [0, 0] },
                            d = 'mousemove',
                            u = 'mouseup';
                        function m(e, t) {
                            if (0 === t) return e;
                            let i = (Math.PI / 180) * t;
                            return [e[0] * Math.cos(i) + e[1] * Math.sin(i), e[1] * Math.cos(i) - e[0] * Math.sin(i)];
                        }
                        function b(e) {
                            var t, i, b;
                            let p,
                                { trackMouse: v } = e,
                                _ = n.useRef(Object.assign({}, c)),
                                h = n.useRef(Object.assign({}, l)),
                                g = n.useRef(Object.assign({}, h.current));
                            for (p in ((g.current = Object.assign({}, h.current)), (h.current = Object.assign(Object.assign({}, l), e)), l))
                                void 0 === h.current[p] && (h.current[p] = l[p]);
                            let [f, x] = n.useMemo(
                                () =>
                                    (function (e, t) {
                                        let i = (t) => {
                                                let i = 'touches' in t;
                                                (i && t.touches.length > 1) ||
                                                    e((e, a) => {
                                                        a.trackMouse && !i && (document.addEventListener(d, n), document.addEventListener(u, p));
                                                        let { clientX: r, clientY: o } = i ? t.touches[0] : t,
                                                            s = m([r, o], a.rotationAngle);
                                                        return (
                                                            a.onTouchStartOrOnMouseDown && a.onTouchStartOrOnMouseDown({ event: t }),
                                                            Object.assign(Object.assign(Object.assign({}, e), c), { initial: s.slice(), xy: s, start: t.timeStamp || 0 })
                                                        );
                                                    });
                                            },
                                            n = (t) => {
                                                e((e, i) => {
                                                    var n, c, d, u;
                                                    let b = 'touches' in t;
                                                    if (b && t.touches.length > 1) return e;
                                                    if (t.timeStamp - e.start > i.swipeDuration)
                                                        return e.swiping ? Object.assign(Object.assign({}, e), { swiping: !1 }) : e;
                                                    let { clientX: p, clientY: v } = b ? t.touches[0] : t,
                                                        [_, h] = m([p, v], i.rotationAngle),
                                                        g = _ - e.xy[0],
                                                        f = h - e.xy[1],
                                                        x = Math.abs(g),
                                                        y = Math.abs(f),
                                                        A = (t.timeStamp || 0) - e.start,
                                                        C = Math.sqrt(x * x + y * y) / (A || 1),
                                                        j = [g / (A || 1), f / (A || 1)],
                                                        S = ((n = x), (c = y), (d = g), (u = f), n > c ? (d > 0 ? r : a) : u > 0 ? s : o),
                                                        T = 'number' == typeof i.delta ? i.delta : i.delta[S.toLowerCase()] || l.delta;
                                                    if (x < T && y < T && !e.swiping) return e;
                                                    let k = {
                                                        absX: x,
                                                        absY: y,
                                                        deltaX: g,
                                                        deltaY: f,
                                                        dir: S,
                                                        event: t,
                                                        first: e.first,
                                                        initial: e.initial,
                                                        velocity: C,
                                                        vxvy: j,
                                                    };
                                                    (k.first && i.onSwipeStart && i.onSwipeStart(k), i.onSwiping && i.onSwiping(k));
                                                    let E = !1;
                                                    return (
                                                        (i.onSwiping || i.onSwiped || i['onSwiped'.concat(S)]) && (E = !0),
                                                        E && i.preventScrollOnSwipe && i.trackTouch && t.cancelable && t.preventDefault(),
                                                        Object.assign(Object.assign({}, e), { first: !1, eventData: k, swiping: !0 })
                                                    );
                                                });
                                            },
                                            b = (t) => {
                                                e((e, i) => {
                                                    let n;
                                                    if (e.swiping && e.eventData) {
                                                        if (t.timeStamp - e.start < i.swipeDuration) {
                                                            ((n = Object.assign(Object.assign({}, e.eventData), { event: t })), i.onSwiped && i.onSwiped(n));
                                                            let a = i['onSwiped'.concat(n.dir)];
                                                            a && a(n);
                                                        }
                                                    } else i.onTap && i.onTap({ event: t });
                                                    return (
                                                        i.onTouchEndOrOnMouseUp && i.onTouchEndOrOnMouseUp({ event: t }),
                                                        Object.assign(Object.assign(Object.assign({}, e), c), { eventData: n })
                                                    );
                                                });
                                            },
                                            p = (e) => {
                                                (document.removeEventListener(d, n), document.removeEventListener(u, p), b(e));
                                            },
                                            v = (e, t) => {
                                                let a = () => {};
                                                if (e && e.addEventListener) {
                                                    let r = Object.assign(Object.assign({}, l.touchEventOptions), t.touchEventOptions),
                                                        o = [
                                                            ['touchstart', i, r],
                                                            ['touchmove', n, Object.assign(Object.assign({}, r), t.preventScrollOnSwipe ? { passive: !1 } : {})],
                                                            ['touchend', b, r],
                                                        ];
                                                    (o.forEach((t) => {
                                                        let [i, n, a] = t;
                                                        return e.addEventListener(i, n, a);
                                                    }),
                                                        (a = () =>
                                                            o.forEach((t) => {
                                                                let [i, n] = t;
                                                                return e.removeEventListener(i, n);
                                                            })));
                                                }
                                                return a;
                                            },
                                            _ = {
                                                ref: (t) => {
                                                    null !== t &&
                                                        e((e, i) => {
                                                            if (e.el === t) return e;
                                                            let n = {};
                                                            return (
                                                                e.el && e.el !== t && e.cleanUpTouch && (e.cleanUpTouch(), (n.cleanUpTouch = void 0)),
                                                                i.trackTouch && t && (n.cleanUpTouch = v(t, i)),
                                                                Object.assign(Object.assign(Object.assign({}, e), { el: t }), n)
                                                            );
                                                        });
                                                },
                                            };
                                        return (t.trackMouse && (_.onMouseDown = i), [_, v]);
                                    })((e) => (_.current = e(_.current, h.current)), { trackMouse: v }),
                                [v],
                            );
                            return (
                                (t = _.current),
                                (i = h.current),
                                (b = g.current),
                                (_.current =
                                    i.trackTouch && t.el
                                        ? t.cleanUpTouch
                                            ? i.preventScrollOnSwipe !== b.preventScrollOnSwipe || i.touchEventOptions.passive !== b.touchEventOptions.passive
                                                ? (t.cleanUpTouch(), Object.assign(Object.assign({}, t), { cleanUpTouch: x(t.el, i) }))
                                                : t
                                            : Object.assign(Object.assign({}, t), { cleanUpTouch: x(t.el, i) })
                                        : (t.cleanUpTouch && t.cleanUpTouch(), Object.assign(Object.assign({}, t), { cleanUpTouch: void 0 }))),
                                f
                            );
                        }
                    },
                    792: (e, t, i) => {
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.useCallbackRef = void 0));
                        let n = i(810);
                        t.useCallbackRef = function (e) {
                            let t = (0, n.useRef)({
                                stableFn: function () {
                                    for (var e = arguments.length, i = Array(e), n = 0; n < e; n++) i[n] = arguments[n];
                                    return t.current.callback(...i);
                                },
                                callback: e,
                            });
                            return (
                                (0, n.useInsertionEffect)(() => {
                                    t.current.callback = e;
                                }),
                                t.current.stableFn
                            );
                        };
                    },
                    2458: (e, t, i) => {
                        var n;
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.useComponentSwipeable = t.SwipeablePlacement = void 0));
                        let a = i(4490),
                            r = i(792);
                        !(function (e) {
                            ((e.TOP = 'top'), (e.BOTTOM = 'bottom'), (e.RIGHT = 'right'), (e.LEFT = 'left'));
                        })(n || (t.SwipeablePlacement = n = {}));
                        let o = (e) => {
                                let { ref: t, deltaY: i, deltaX: a, placement: r } = e;
                                requestAnimationFrame(() => {
                                    t.current &&
                                        ((t.current.style.willChange = 'transform'),
                                        (t.current.style.transform =
                                            r === n.TOP || r === n.BOTTOM ? 'translateY('.concat(i || 0, 'px)') : 'translateX('.concat(a || 0, 'px)')));
                                });
                            },
                            s = (e) => {
                                requestAnimationFrame(() => {
                                    e.current && ((e.current.style.transition = 'none'), (e.current.style.willChange = ''), (e.current.style.transform = ''));
                                });
                            };
                        t.useComponentSwipeable = (e) => {
                            let { ref: t, swipeableProps: i = {}, onClose: l, disableSwipe: c, placement: d, threshold: u } = e,
                                m = (0, r.useCallbackRef)(() => {
                                    l && (s(t), l());
                                }),
                                b = (0, r.useCallbackRef)((e) => {
                                    c ||
                                        ((e) => {
                                            let { ref: t, deltaY: i, deltaX: a, placement: r } = e;
                                            switch (r) {
                                                case n.TOP:
                                                    i <= 0 && o({ ref: t, deltaY: i, deltaX: a, placement: r });
                                                    break;
                                                case n.RIGHT:
                                                    a >= 0 && o({ ref: t, deltaY: i, deltaX: a, placement: r });
                                                    break;
                                                case n.LEFT:
                                                    a <= 0 && o({ ref: t, deltaY: i, deltaX: a, placement: r });
                                                    break;
                                                default:
                                                    i >= 0 && o({ ref: t, deltaY: i, deltaX: a, placement: r });
                                            }
                                        })({ ref: t, deltaY: e.deltaY, deltaX: e.deltaX, placement: d });
                                }),
                                p = (0, r.useCallbackRef)((e) => {
                                    !c &&
                                        (((e) => {
                                            let { ref: t, deltaY: i, deltaX: a, placement: r, threshold: o = 25 } = e;
                                            if (!t.current) return !1;
                                            let s = (o / 100) * (r === n.TOP || r === n.BOTTOM ? t.current.offsetHeight : t.current.offsetWidth);
                                            switch (r) {
                                                case n.TOP:
                                                    return i < 0 && Math.abs(i) >= s;
                                                case n.RIGHT:
                                                    return a > 0 && a >= s;
                                                case n.LEFT:
                                                    return a < 0 && Math.abs(a) >= s;
                                                default:
                                                    return i > 0 && i >= s;
                                            }
                                        })({ ref: t, deltaY: e.deltaY, deltaX: e.deltaX, placement: d, threshold: u })
                                            ? l && (s(t), l())
                                            : s(t));
                                });
                            return { handlers: (0, a.useSwipeable)({ onSwiped: p, onSwiping: b, trackMouse: !0, trackTouch: !0, ...i }), onCloseCallback: m };
                        };
                    },
                    810: (e) => {
                        e.exports = p;
                    },
                },
                ei = {};
            function en(e) {
                var t = ei[e];
                if (void 0 !== t) return t.exports;
                var i = (ei[e] = { exports: {} });
                return (et[e](i, i.exports, en), i.exports);
            }
            ((en.d = (e, t) => {
                for (var i in t) en.o(t, i) && !en.o(e, i) && Object.defineProperty(e, i, { enumerable: !0, get: t[i] });
            }),
                (en.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
                (en.r = (e) => {
                    ('undefined' != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
                        Object.defineProperty(e, '__esModule', { value: !0 }));
                }));
            var ea = {};
            ((() => {
                (Object.defineProperty(ea, '__esModule', { value: !0 }), (ea.usePopoverSwipeable = void 0));
                let e = en(810),
                    t = en(2458);
                ea.usePopoverSwipeable = (i) => {
                    let { ref: n, swipeableProps: a = {}, onClose: r, disableSwipe: o, placement: s, threshold: l } = i,
                        c = (0, e.useMemo)(() => {
                            switch (s) {
                                case 'top':
                                case 'top-end':
                                case 'top-start':
                                    return t.SwipeablePlacement.TOP;
                                case 'right':
                                case 'right-end':
                                case 'right-start':
                                    return t.SwipeablePlacement.RIGHT;
                                case 'left':
                                case 'left-end':
                                case 'left-start':
                                    return t.SwipeablePlacement.LEFT;
                                default:
                                    return t.SwipeablePlacement.BOTTOM;
                            }
                        }, [s]);
                    return (0, t.useComponentSwipeable)({ ref: n, swipeableProps: a, onClose: r, disableSwipe: o, placement: c, threshold: l });
                };
            })(),
                ea.__esModule);
            var er = ea.usePopoverSwipeable,
                eo = i(44989),
                es = i(58359),
                el = i(48454),
                ec = i(83920),
                ed = i(8322);
            let eu = function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
                    [t, i] = (0, b.useState)(e),
                    { contentRef: n } = (0, ec.g)();
                return (
                    (0, b.useEffect)(() => {
                        let e = new ResizeObserver((e) => {
                            let [n] = e || [];
                            n && n.contentRect.height !== t && i(n.contentRect.height);
                        });
                        return (
                            n && e.observe(n),
                            () => {
                                e.disconnect();
                            }
                        );
                    }, [t, n]),
                    { contentHeight: t }
                );
            };
            var em = i(58625),
                eb = i(49723),
                ep = i.n(eb);
            let ev = (0, u.PA)(() => {
                var e, t, i, n;
                let { formatMessage: a } = (0, v.A)(),
                    {
                        vibe: r,
                        settings: { isMobile: o },
                        vibeSettings: s,
                    } = (0, F.g)(),
                    { pageId: l } = (0, R.$)(),
                    { blockIdForFrom: d } = (0, B.N)(),
                    u = (0, b.useRef)(null),
                    m = (0, b.useRef)(null),
                    p = (0, b.useRef)(null),
                    { resetContext: g } = (0, W.B)({ seeds: null != (n = null == (e = r.meta) ? void 0 : e.seeds) ? n : [], pageIdForFrom: l, blockIdForFrom: d }),
                    { contentRef: x } = (0, ec.g)(),
                    { contentHeight: y } = eu(0),
                    { state: C, setState: j, toggleFalse: k } = (0, eo.e)(!1);
                (0, b.useEffect)(
                    () => () => {
                        s.reset();
                    },
                    [s],
                );
                let E = (0, b.useMemo)(
                        () => (o ? { height: '88vh', transitionProperty: 'opacity' } : x ? { insetInlineEnd: 7, insetBlockStart: x.offsetTop + 7, height: y - 16 } : {}),
                        [y, x, o],
                    ),
                    P = !!(r.isApplying || r.isMyVibe),
                    I = (0, f.c)((e) => {
                        if (!r.isApplying) {
                            var t;
                            (u.current && (0, es.P)(e, ep().ripple, u.current), g(), null == (t = m.current) || t.focus());
                        }
                    }),
                    N = (0, b.useMemo)(() => {
                        var e, t;
                        if (
                            ((e) =>
                                !!e &&
                                e.some((e) => {
                                    let [t] = (null == e ? void 0 : e.split(':')) || [];
                                    return e === ed.M1 || (t && ed.UM.includes(t));
                                }))(null == (e = r.meta) ? void 0 : e.seeds)
                        )
                            return (null == (t = r.meta) ? void 0 : t.context)
                                ? (0, c.jsx)(A.$, {
                                      className: ep().toggleSettingsButton,
                                      size: 'm',
                                      radius: 'round',
                                      icon: (0, c.jsx)(q.I, { variant: 'filter', size: 'xs' }),
                                      'aria-label': a({ id: 'vibe-actions.aria-label-settings' }),
                                      'data-test-id': h.Kq.vibeSettings.VIBE_SETTINGS_BUTTON,
                                  })
                                : (0, c.jsx)(A.$, {
                                      className: ep().toggleSettingsButton,
                                      size: 'default',
                                      radius: 'xxxl',
                                      icon: (0, c.jsx)(q.I, { variant: 'filter', size: 'xxs' }),
                                      'aria-label': a({ id: 'vibe-actions.aria-label-settings' }),
                                      'data-test-id': h.Kq.vibeSettings.VIBE_SETTINGS_BUTTON,
                                      children: (0, c.jsx)(T.HL, {
                                          variant: 'span',
                                          type: 'controls',
                                          size: 'm',
                                          weight: 'medium',
                                          children: (0, c.jsx)(_.A, { id: 'interface-actions.configure-my-vibe' }),
                                      }),
                                  });
                    }, [a, null == (t = r.meta) ? void 0 : t.context, null == (i = r.meta) ? void 0 : i.seeds]),
                    { handlers: w } = er({ ref: p, onClose: k, placement: 'bottom', disableSwipe: !o, swipeableProps: { preventScrollOnSwipe: !0 } });
                return (0, c.jsxs)(el.AM, {
                    placement: o ? 'bottom' : 'right',
                    isMobile: o,
                    strategy: 'fixed',
                    transform: !1,
                    portalNode: x,
                    positionElement: x,
                    disableFloatingStyles: !o,
                    open: C,
                    onOpenChange: j,
                    style: E,
                    overlayClassName: ep().overlay,
                    popoverContentRef: p,
                    children: [
                        N,
                        (0, c.jsx)(el.hl, {
                            className: ep().popover,
                            ref: p,
                            'data-test-id': h.Kq.vibeSettings.VIBE_SETTINGS_BLOCK,
                            children: (0, c.jsxs)('div', {
                                className: ep().root,
                                children: [
                                    o && (0, c.jsx)('div', { ref: w.ref, onMouseDown: w.onMouseDown, className: ep().swipeableArea }),
                                    (0, c.jsxs)('div', {
                                        className: ep().header,
                                        children: [
                                            (0, c.jsx)(T.DZ, {
                                                variant: 'h3',
                                                size: 's',
                                                weight: 'bold',
                                                'data-test-id': h.Kq.vibeSettings.VIBE_SETTINGS_TITLE,
                                                children: (0, c.jsx)(_.A, { id: 'interface-actions.my-vibe-settings' }),
                                            }),
                                            (0, c.jsxs)('div', {
                                                className: ep().actions,
                                                children: [
                                                    (0, c.jsx)(S.m_, {
                                                        offsetOptions: 4,
                                                        placement: 'left',
                                                        text: a({ id: 'interface-actions.reset-my-vibe-settings' }),
                                                        children: (0, c.jsx)(A.$, {
                                                            variant: 'outline',
                                                            radius: 'round',
                                                            size: 'xxxs',
                                                            icon: (0, c.jsx)(q.I, { variant: 'reset', size: 'xxxs' }),
                                                            onClick: I,
                                                            disabled: !!r.isMyVibe,
                                                            'aria-hidden': !!r.isMyVibe,
                                                            'aria-disabled': P,
                                                            'aria-label': a({ id: 'interface-actions.reset-my-vibe-settings' }),
                                                            ref: u,
                                                            'data-test-id': h.Kq.vibeSettings.VIBE_SETTINGS_RESET_BUTTON,
                                                        }),
                                                    }),
                                                    (0, c.jsx)(A.$, {
                                                        radius: 'round',
                                                        color: 'secondary',
                                                        size: 'xxs',
                                                        icon: (0, c.jsx)(q.I, { variant: 'close', size: 'xxs' }),
                                                        onClick: k,
                                                        'aria-label': a({ id: 'interface-actions.close-my-vibe-settings' }),
                                                        ref: m,
                                                        'data-test-id': h.Kq.vibeSettings.VIBE_SETTINGS_CLOSE_BUTTON,
                                                    }),
                                                ],
                                            }),
                                        ],
                                    }),
                                    (0, c.jsx)(em.C, {}),
                                ],
                            }),
                        }),
                    ],
                });
            });
            var e_ = i(64089),
                eh = i(10180),
                eg = i(75225),
                ef = i.n(eg);
            let ex = (0, u.PA)((e) => {
                    var t;
                    let { context: i, onResetClick: n, className: a } = e,
                        {
                            vibe: r,
                            settings: { isMobile: o },
                            experiments: s,
                        } = (0, F.g)(),
                        { formatMessage: l } = (0, v.A)(),
                        u = (0, e_.A)(r.meta),
                        m = i && !o,
                        b = (0, y.L)(() => {
                            var e;
                            return s.checkExperiment(U.z.WebNextVibeDescription, 'on') && (null == (e = r.meta) ? void 0 : e.isMix)
                                ? l({ id: 'vibe-actions.vibe-context' }, { type: r.meta.type, name: i })
                                : i;
                        });
                    return (0, c.jsxs)('div', {
                        className: (0, d.$)(ef().root, a),
                        children: [
                            m &&
                                (0, c.jsx)(eh.O, {
                                    size: 'm',
                                    iconSize: 'xs',
                                    withScaleAnimation: !1,
                                    isPinned: null == (t = r.meta) ? void 0 : t.isPinned,
                                    onClick: u,
                                    className: ef().pinButton,
                                }),
                            (0, c.jsx)(ev, {}),
                            i &&
                                (0, c.jsxs)('div', {
                                    className: (0, d.$)(ef().context),
                                    'data-test-id': h.e8.vibe.VIBE_CONTEXT,
                                    children: [
                                        (0, c.jsx)(T.HL, { variant: 'span', type: 'controls', size: 'm', weight: 'medium', lineClamp: 1, children: b }),
                                        (0, c.jsx)(A.$, {
                                            className: ef().resetButton,
                                            variant: 'text',
                                            radius: 'round',
                                            withRipple: !1,
                                            icon: (0, c.jsx)(q.I, { variant: 'close', size: 'xxs' }),
                                            onClick: n,
                                            'aria-label': ''.concat(l({ id: 'vibe-actions.reset-settings' }), ' ').concat(b),
                                            'data-test-id': h.e8.vibe.RESET_VIBE_CONTEXT_BUTTON,
                                        }),
                                    ],
                                }),
                        ],
                    });
                }),
                ey = 'vibe-block',
                eA = 'vibe-block-controls',
                eC = (0, u.PA)((e) => {
                    var t, i, n, a;
                    let { className: r } = e,
                        o = (0, m.useRouter)(),
                        { vibe: s, experiments: l, user: u, freeAccess: p } = (0, F.g)(),
                        v = (0, b.useRef)(null),
                        [g, f] = (0, x.d)(),
                        { pageId: y } = (0, R.$)(),
                        { blockIdForFrom: A } = (0, B.N)(),
                        {
                            openPaymentWidgetModal: C,
                            isShimmerActive: j,
                            isShimmerVisible: S,
                            mainText: k,
                            mainTextA11y: E,
                            additionText: I,
                        } = (0, D.D)({ storeName: 'music', isEnabled: p.isVibeStartRestricted, offerElement: { element: g, intersectionPropertyId: eA } }),
                        { isIntersecting: O } = null != (n = (0, P.BL)([v], { preflightCheck: !1 }, !v.current)[ey]) ? n : {},
                        M = (0, L.N)().get(V.QG),
                        {
                            isVibeContext: q,
                            isPlaying: X,
                            togglePlay: G,
                            resetContext: Y,
                        } = (0, W.B)({ seeds: null != (a = null == (t = s.meta) ? void 0 : t.seeds) ? a : [], pageIdForFrom: y, blockIdForFrom: A }),
                        $ = l.checkExperiment(U.z.WebNextDisableVibeSettings, 'on') || p.isVibeStartRestricted || !u.isAuthorized,
                        Z = (0, b.useCallback)(() => {
                            q ? Y() : s.vibeResetLoadingState !== z.G.PENDING && s.vibeReset();
                        }, [q, s, Y]),
                        J = (0, b.useCallback)(() => {
                            if (!u.isAuthorized) {
                                if (!M.authorizationUrl) return;
                                o.push(M.authorizationUrl);
                                return;
                            }
                            p.isVibeStartRestricted && C();
                        }, [u.isAuthorized, M.authorizationUrl, o, p.isVibeStartRestricted, C]),
                        et = (0, b.useCallback)(
                            (e) => {
                                (e.stopPropagation(), e.preventDefault(), J());
                            },
                            [J],
                        ),
                        ei = (0, b.useCallback)(() => {
                            if (p.isVibeStartRestricted || !u.isAuthorized) return void J();
                            G();
                        }, [p.isVibeStartRestricted, u.isAuthorized, G, J]),
                        en = (0, b.useMemo)(
                            () =>
                                l.checkExperiment(U.z.WebNextShaderFallbackEnabled, 'on')
                                    ? (0, c.jsx)(N, { className: ee().vibeAnimation })
                                    : (0, c.jsx)(w, { isIntersecting: O, className: ee().vibeAnimation }),
                            [l, O],
                        ),
                        ea = (0, b.useMemo)(() => (0, c.jsx)(K.H, { size: 'l', className: ee().button }), []);
                    return (
                        (0, b.useEffect)(
                            () => () => {
                                s.reset();
                            },
                            [s],
                        ),
                        u.isAuthorized && s.isNeededToLoad && (0, b.use)(s.getLastVibe()),
                        (0, c.jsxs)('div', {
                            className: (0, d.$)(ee().root, { [ee().root_freemium]: p.isVibeStartRestricted || !u.isAuthorized }, r),
                            ref: v,
                            'data-intersection-property-id': ey,
                            'data-test-id': h.e8.vibe.VIBE_BLOCK,
                            children: [
                                en,
                                (0, c.jsxs)('div', {
                                    className: ee().controls,
                                    onClick: et,
                                    ref: f,
                                    'data-intersection-property-id': eA,
                                    children: [
                                        (0, c.jsx)(Q, {
                                            className: ee().playButton,
                                            isPlaying: X,
                                            ariaDisabled: p.isVibeStartRestricted || !u.isAuthorized,
                                            onClick: ei,
                                        }),
                                        !$ && (0, c.jsx)(ex, { className: ee().settingsButton, context: null == (i = s.meta) ? void 0 : i.context, onResetClick: Z }),
                                        (p.isVibeStartRestricted || !u.isAuthorized) &&
                                            (0, c.jsx)(T.HL, {
                                                className: ee().subscriptionText,
                                                variant: 'div',
                                                size: 'l',
                                                'data-test-id': h.e8.vibe.MY_VIBE_SUBSCRIPTION_TEXT,
                                                children: (0, c.jsx)(_.A, { id: 'vibe-freemium.available-in-plus', values: { br: (0, c.jsx)('br', {}) } }),
                                            }),
                                        !u.isAuthorized && ea,
                                        u.isAuthorized &&
                                            p.isVibeStartRestricted &&
                                            (0, c.jsx)(H.b, {
                                                isShimmerActive: j,
                                                isShimmerVisible: S,
                                                onClick: C,
                                                mainText: k,
                                                ariaLabel: E,
                                                additionText: I,
                                                className: ee().button,
                                                'data-test-id': h.e8.vibe.MY_VIBE_SUBSCRIPTION_BUTTON,
                                            }),
                                    ],
                                }),
                            ],
                        })
                    );
                });
            eC.displayName = 'VibeBlock';
            var ej = i(29130),
                eS = i(79671),
                eT = i(91724),
                ek = i(7999),
                eE = i(99872),
                eP = i(84427),
                eI = i(14177),
                eN = i(71768),
                ew = i(27246),
                eO = i(24116),
                eM = i(37862),
                eB = i(2125),
                eR = i(48922),
                eD = i(95226),
                eV = i(71610),
                eL = i(22714),
                eW = i(3796),
                eF = i(17512),
                eU = i(32641),
                ez = i(14257),
                eH = i(50),
                eK = i(97201),
                eq = i(68243),
                eX = i(80408),
                eG = i(97841),
                eY = i(32468),
                e$ = i(23028),
                eZ = i.n(e$),
                eQ = i(63887),
                eJ = i(50905),
                e0 = i.n(eJ);
            let e1 = (e) => {
                let { href: t, imageSrc: i, children: n, className: a } = e,
                    r = (0, eU.Z)(t);
                return (0, c.jsxs)(eQ.N, {
                    onClick: r,
                    className: (0, d.$)(e0().root, a),
                    children: [
                        (0, c.jsx)(T.HL, { className: e0().caption, lineClamp: 3, size: 'm', variant: 'span', weight: 'bold', children: n }),
                        (0, c.jsx)('div', {
                            className: e0().imageContainer,
                            children: (0, c.jsx)(C._V, { className: e0().image, fit: 'cover', src: i, withAvatarReplace: !0 }),
                        }),
                    ],
                });
            };
            var e2 = i(99923),
                e8 = i(53730),
                e5 = i(45303),
                e7 = i(80346),
                e6 = i(68535),
                e9 = i(92495),
                e4 = i(71735),
                e3 = i(78305),
                te = i(12350),
                tt = i(2969),
                ti = i(55332),
                tn = i(95329),
                ta = i(53022),
                tr = i(44128),
                to = i(41812),
                ts = i(92744),
                tl = i(90326),
                tc = i(30743),
                td = i(45219),
                tu = i(7462),
                tm = i(47745),
                tb = i(17593),
                tp = i(32156),
                tv = i(61258),
                t_ = i(90829),
                th = i(99711),
                tg = i.n(th);
            let tf = 'https://avatars.mds.yandex.net/get-music-misc/29541/img.698c9ec84f02b819695579e7/orig',
                tx = (0, u.PA)((e) => {
                    var t, i;
                    let { album: n } = e,
                        {
                            vibe: a,
                            sonataState: r,
                            advert: o,
                            freePlayerAccess: s,
                            fullscreenPlayer: l,
                            user: u,
                            settings: { isMobile: m },
                            freeAccess: p,
                        } = (0, F.g)(),
                        { openIntroModalFromPlay: _ } = (0, tb.e)(),
                        { formatMessage: g } = (0, v.A)(),
                        x = (0, tr.e)(),
                        j = (0, ta.z)(),
                        S = (0, e4.P)(),
                        T = (0, tt.b)(),
                        k = (0, e3.r)(),
                        E = (0, te.m)(),
                        P = (0, tm.N)(),
                        { pageId: I } = (0, R.$)(),
                        { togglePlay: N } = (0, W.B)({
                            seeds: null != (i = null == (t = a.meta) ? void 0 : t.seeds) ? i : [],
                            pageIdForFrom: I,
                            blockIdForFrom: ''.concat(e2.EntityTypes.MyWave, '-').concat(eM.U.RADIO),
                            onPlayInterrupted: () => s.showRestrictionModal(e9.W.Interrupted),
                        }),
                        w = (0, tu.r)(null == n ? void 0 : n.type),
                        O = (null == n ? void 0 : n.title) ? ''.concat(w, ' ').concat(n.title) : w,
                        M = r.entityMeta,
                        B = (0, f.c)((e) => {
                            (e.stopPropagation(), (0, es.P)(e, tg().ripple), null == x || x.moveForward(), E({ actionType: e2.ActionType.Skip }));
                        }),
                        D = (0, f.c)((e) => {
                            (e.stopPropagation(), (0, es.P)(e, tg().ripple), null == x || x.moveBackward(), E({ actionType: e2.ActionType.Backskip }));
                        }),
                        V = (0, f.c)(() => {
                            if (o.isAdvertShown) {
                                var e;
                                null == k || null == (e = k.audioAdvertPlayback) || e.togglePause();
                                return;
                            }
                            if (!_())
                                if (M) (null == x || x.togglePause(), E({ actionType: r.isPlaying ? e2.ActionType.Pause : e2.ActionType.Play }));
                                else {
                                    if (p.isVibeStartRestricted) return;
                                    (N(), T(!r.isPlaying));
                                }
                        }),
                        L = (0, f.c)(() => {
                            S() || V();
                        }),
                        U = !M && !u.hasPlus && p.isFreePlaybackDisabled,
                        z = (0, b.useCallback)(
                            () =>
                                (0, c.jsx)(tl.D, {
                                    className: (0, d.$)(tg().playButton, { [tg().playButton_playing]: r.isPlaying }),
                                    isPlaying: r.isPlaying,
                                    iconClassName: tg().playButtonIcon,
                                    color: 'secondary',
                                    onClick: L,
                                }),
                            [L, r.isPlaying],
                        ),
                        H = (0, b.useMemo)(
                            () =>
                                U
                                    ? u.isAuthorized
                                        ? (0, c.jsx)(tp.S, { isEnabled: p.isVibeStartRestricted, placement: 'top', textVariant: 'vibe', renderChildren: z })
                                        : (0, c.jsx)(t_.Z, { isEnabled: U, placement: 'top', textVariant: 'vibe', renderChildren: z })
                                    : z(),
                            [U, z, u.isAuthorized, p.isVibeStartRestricted],
                        ),
                        K = (0, f.c)(() => {
                            r.isGenerativeContext || (l.showFullscreenPlayerModal(), P({ to: e2.AppScreen.PlayerScreen }));
                        }),
                        X = (0, y.L)(() => {
                            if (M) return r.isGenerativeContext ? M.coverUri || tf : (null == n ? void 0 : n.coverUri) || tf;
                        }),
                        G = (0, f.c)(() => {
                            P({ to: e2.AppScreen.AlbumScreen });
                        }),
                        Y = (0, y.L)(() => {
                            var e, t, i, a;
                            return X
                                ? !m && (null == n ? void 0 : n.url)
                                    ? (0, c.jsx)(tv.N, {
                                          className: tg().link,
                                          href: n.url,
                                          'aria-label': O,
                                          onClick: G,
                                          children: (0, c.jsx)(
                                              C._V,
                                              {
                                                  src: X,
                                                  className: (0, d.$)(tg().cover, {
                                                      [tg().cover_hiddenOnCompactPause]: !r.isPlaying,
                                                      [tg().cover_generative]: r.isGenerativeContext,
                                                  }),
                                                  fit: 'cover',
                                                  size: 400,
                                                  withAvatarReplace: !0,
                                                  alt: O,
                                                  'aria-hidden': !0,
                                              },
                                              null != (a = null == (e = r.entityMeta) ? void 0 : e.idWithContext) ? a : 'default',
                                          ),
                                      })
                                    : (0, c.jsx)(
                                          C._V,
                                          {
                                              src: X,
                                              className: (0, d.$)(tg().cover, {
                                                  [tg().cover_hiddenOnCompactPause]: !r.isPlaying,
                                                  [tg().cover_generative]: r.isGenerativeContext,
                                              }),
                                              onClick: K,
                                              fit: 'cover',
                                              size: 400,
                                              withAvatarReplace: !0,
                                              alt: O,
                                              'aria-hidden': !0,
                                          },
                                          null != (i = null == (t = r.entityMeta) ? void 0 : t.idWithContext) ? i : 'default',
                                      )
                                : null;
                        });
                    return (
                        (0, b.useEffect)(
                            () => (
                                null == j || j.addShortcutsListener(tn.M.MAIN, ti.l.TOGGLE_PLAY, V),
                                () => {
                                    null == j || j.removeShortcutsListener(tn.M.MAIN, ti.l.TOGGLE_PLAY);
                                }
                            ),
                            [V, j],
                        ),
                        (0, c.jsxs)('div', {
                            className: tg().root,
                            'aria-label': r.isGenerativeContext ? void 0 : O,
                            children: [
                                !r.isGenerativeContext &&
                                    m &&
                                    (0, c.jsx)(A.$, {
                                        className: (0, d.$)(tg().button, tg().button_backward),
                                        variant: 'text',
                                        radius: 'round',
                                        disabled: !r.canMoveBackward,
                                        focusableWhenDisabled: !0,
                                        withRipple: !1,
                                        'aria-label': g({ id: 'player-actions.previous-track' }),
                                        icon: (0, c.jsx)(q.I, { variant: 'previous', size: 'xs' }),
                                        onClick: D,
                                        'data-test-id': h.Kq.sonata.PREVIOUS_TRACK_BUTTON,
                                    }),
                                (0, c.jsxs)('div', {
                                    className: tg().coverContainer,
                                    'data-test-id': h.e8.player.VIBE_ALBUM_COVER,
                                    children: [Y, m && !r.isPlaying && (0, c.jsx)('div', { className: tg().playButtonContainer, children: H })],
                                }),
                                !r.isGenerativeContext &&
                                    m &&
                                    (0, c.jsx)(A.$, {
                                        className: (0, d.$)(tg().button, tg().button_forward),
                                        variant: 'text',
                                        radius: 'round',
                                        disabled: !r.canMoveForward,
                                        focusableWhenDisabled: !0,
                                        withRipple: !1,
                                        'aria-label': g({ id: 'player-actions.next-track' }),
                                        icon: (0, c.jsx)(q.I, { variant: 'next', size: 'xs' }),
                                        onClick: B,
                                        'data-test-id': h.Kq.sonata.NEXT_TRACK_BUTTON,
                                    }),
                            ],
                        })
                    );
                });
            var ty = i(6612),
                tA = i(19740),
                tC = i(1613),
                tj = i(44782),
                tS = i(77035),
                tT = i(3707),
                tk = i(56117),
                tE = i(46200),
                tP = i(51675),
                tI = i(48027),
                tN = i(89384),
                tw = i(22369);
            let tO = (0, u.PA)((e) => {
                let { className: t, trackId: i, albumId: n } = e,
                    { track: a } = (0, F.g)(),
                    r = (0, f.c)(() => {
                        a.open({ trackId: i, albumId: n });
                    });
                return (0, c.jsx)(tA.Dr, {
                    className: t,
                    onClick: r,
                    icon: (0, c.jsx)(q.I, { variant: 'note', size: 'xxs' }),
                    'data-test-id': h.Kq.track.TRACK_CONTEXT_MENU_NAVIGATE_TO_TRACK,
                    children: (0, c.jsx)(_.A, { id: 'interface-actions.navigate-to-track' }),
                });
            });
            var tM = i(4914),
                tB = i(25160),
                tR = i(8484),
                tD = i(39868),
                tV = i.n(tD);
            let tL = (0, u.PA)((e) => {
                var t, i, n;
                let { className: a } = e,
                    r = (0, tr.e)(),
                    { formatMessage: o } = (0, v.A)(),
                    s = null != (t = null == r ? void 0 : r.state.playerState.speed.value) ? t : 1,
                    l = null != (i = tR.f_[s]) ? i : 0,
                    [u, m] = (0, b.useState)(l),
                    p = null != (n = tR.pp[u]) ? n : 1,
                    g = (0, f.c)(() => {
                        var e;
                        let t = (u + 1) % tR.pp.length;
                        (m(t), null == r || r.setSpeed(Number(null != (e = tR.pp[t]) ? e : 1)));
                    });
                return (
                    (0, b.useEffect)(() => {
                        let e =
                            null == r
                                ? void 0
                                : r.state.playerState.speed.onChange(() => {
                                      var e;
                                      let t = r.state.playerState.speed.value;
                                      m(null != (e = tR.f_[t]) ? e : 0);
                                  });
                        return () => {
                            null == e || e();
                        };
                    }, [r]),
                    (0, c.jsxs)(tA.Dr, {
                        className: (0, d.$)(tV().root, a),
                        onClick: g,
                        'aria-label': o({ id: 'interface-actions.speed' }, { speed: p }),
                        isSubMenu: !0,
                        'data-test-id': h.S7.CONTEXT_MENU_SPEED_BUTTON,
                        children: [
                            (0, c.jsx)(_.A, { id: 'player-actions.video-speed' }),
                            (0, c.jsx)(q.I, { variant: (0, tR.CU)(p, !1), size: 'l', className: tV().icon }),
                        ],
                    })
                );
            });
            var tW = i(62146),
                tF = i.n(tW);
            let tU = (0, u.PA)((e) => {
                let { onCloseMenu: t } = e,
                    { user: i, experiments: n, sonataState: a, fullscreenPlayer: r } = (0, F.g)(),
                    { formatMessage: o } = (0, v.A)(),
                    s = (0, tm.N)(),
                    l = null !== a.entityMeta,
                    d = !i.isAuthorized && n.checkExperiment(U.z.WebNextVibeQueueButtonLoginPopover, 'on'),
                    u = (0, f.c)(() => {
                        (r.showPlayQueue(), s({ to: e2.AppScreen.PlayerScreen }), t());
                    }),
                    m = (0, b.useCallback)(
                        (e) => {
                            let { isPopoverEnabled: t } = e;
                            return (0, c.jsx)(tA.Dr, {
                                'aria-label': o({ id: 'interface-actions.open-play-queue' }),
                                onClick: u,
                                disabled: !l || t,
                                icon: (0, c.jsx)(q.I, { variant: 'playQueue', size: 'xxs' }),
                                'data-test-id': h.e8.player.VIBE_CONTEXT_MENU_PLAY_QUEUE_ITEM,
                                children: (0, c.jsx)(_.A, { id: 'interface-actions.open-play-queue' }),
                            });
                        },
                        [o, l, u],
                    );
                return (0, c.jsx)(t_.Z, { isNested: !0, isEnabled: d, placement: 'right', textVariant: 'openQueue', renderChildren: m });
            });
            var tz = i(90593),
                tH = i.n(tz);
            let tK = (0, u.PA)((e) => {
                var t, i, n, a, r, o, s;
                let { buttonClassName: l } = e,
                    { sonataState: u, advert: m, fullscreenPlayer: b, quality: p, vibe: g, user: x } = (0, F.g)(),
                    { formatMessage: C } = (0, v.A)(),
                    j = (0, tS.e)(),
                    S = (0, tj.A)(),
                    T = (0, e_.A)(g.meta),
                    { state: k, setState: E, toggleFalse: P } = (0, eo.e)(!1),
                    I = (0, tm.N)(),
                    N = (0, te.m)(),
                    w = u.entityMeta,
                    O = (0, f.c)((e) => {
                        E(e);
                    }),
                    M = (0, f.c)(() => {
                        (p.modal.open(), P());
                    }),
                    B = (0, f.c)(() => {
                        (b.showSyncLyrics(), I({ to: e2.AppScreen.PlayerScreen }), P());
                    }),
                    R = (0, f.c)(() => {
                        (j(u), N({ actionType: e2.ActionType.ChangeShuffle }));
                    }),
                    D = (0, f.c)(() => {
                        (S(u), N({ actionType: e2.ActionType.ChangeRepeatSettings }));
                    }),
                    V = (0, f.c)(() => {
                        (T(), P());
                    }),
                    L = (0, f.c)((e) => {
                        ((0, es.P)(e, tF().ripple), M());
                    }),
                    U = (0, e4.P)(),
                    { shouldShowBuySubscriptionModal: z, showBuySubscriptionModal: H } = (0, tE.q)(),
                    { isPlaying: K, togglePlay: X } = (0, W.B)({
                        seeds: null != (r = null == w ? void 0 : w.seeds) ? r : [],
                        pageIdForFrom: eR._Q.RADIO,
                        blockIdForFrom: ''.concat(eM.U.TRACK, '-').concat(null == w ? void 0 : w.id),
                        parentContextId: (null == w || null == (t = w.mainAlbum) ? void 0 : t.id)
                            ? ''.concat(null == w ? void 0 : w.mainAlbum.id, ':').concat(null == w ? void 0 : w.id)
                            : null == w
                              ? void 0
                              : w.entityId,
                    }),
                    G = (0, f.c)(() => {
                        if (z && x.isAuthorized) return void H();
                        !U() && (K || X());
                    }),
                    Y = u.repeatMode === ty.pM.ONE ? 'repeat_one' : 'repeat',
                    $ = u.repeatMode !== ty.pM.NONE,
                    Z = u.shuffle,
                    Q = b.isSyncLyricsMode,
                    J = !!(null == (i = g.meta) ? void 0 : i.isPinned),
                    ee = !!(g.isMyVibe || g.isShuffleVibe),
                    et = !!g.meta && u.isVibeContext && !ee,
                    ei = u.canSpeed && ((null == w ? void 0 : w.isNonMusic) || (null == w || null == (n = w.mainAlbum) ? void 0 : n.isNonMusic)),
                    en = (null == w ? void 0 : w.isNonUserGenerated) && !(null == (a = w.mainAlbum) ? void 0 : a.isNonMusic),
                    ea = (null == w ? void 0 : w.albumId) ? '/album/:albumId/track/:trackId' : '/track/:trackId',
                    { shareLink: er, pathname: el } = (0, tN.b)(ea, {
                        params: { albumId: null != (o = null == w ? void 0 : w.albumId) ? o : '', trackId: null != (s = null == w ? void 0 : w.id) ? s : '' },
                    }),
                    ec = (0, y.L)(() => {
                        var e, t;
                        if (w)
                            return {
                                variant: tP.Y.TRACK,
                                id: w.id,
                                title: w.title,
                                path: el,
                                trackArtistName: null == (e = w.mainArtist) ? void 0 : e.name,
                                trackArtistId: null == (t = w.mainArtist) ? void 0 : t.id,
                                trackAlbumId: w.albumId,
                            };
                    }),
                    ed = ''.concat(C({ id: 'interface-actions.open-sync-lyrics' }), ' ').concat(C({ id: 'warning-messages.can-break-accessibility' })),
                    eu = (0, y.L)(() => {
                        let e = [];
                        return (ei && e.push((0, c.jsx)(tL, {}, 'speed')), e.length > 0 && e.push((0, c.jsx)('div', { className: tH().divider }, 'speed-divider')), e);
                    }),
                    em = (0, y.L)(() => {
                        let e = [];
                        return (
                            et &&
                                e.push(
                                    (0, c.jsx)(
                                        tA.Dr,
                                        {
                                            onClick: V,
                                            icon: (0, c.jsx)(q.I, { variant: J ? 'pin_filled' : 'pin', size: 'xxs' }),
                                            'data-test-id': h.e8.player.VIBE_CONTEXT_MENU_PIN_ITEM,
                                            children: J
                                                ? (0, c.jsx)(_.A, { id: 'interface-actions.unpin-my-vibe' })
                                                : (0, c.jsx)(_.A, { id: 'interface-actions.pin-my-vibe' }),
                                        },
                                        'pin',
                                    ),
                                ),
                            en && e.push((0, c.jsx)(tB.C, { variant: tI.I.TRACK, onClick: G, disabled: !x.isAuthorized, onOpenMenuChange: O }, 'vibe')),
                            e.length > 0 && e.push((0, c.jsx)('div', { className: tH().divider }, 'top-divider')),
                            e
                        );
                    }),
                    eb = (0, y.L)(() => {
                        let e = [];
                        if (w) {
                            var t, i, n, a, r;
                            (e.push((0, c.jsx)(tk.$, { track: w }, 'add-to-playlist')),
                                ec && w.isNonUserGenerated && e.push((0, c.jsx)(tM.H, { shareLink: er, entityMeta: ec }, 'share')),
                                w.isNonUserGenerated &&
                                    w.isTrackMusic &&
                                    (null == (t = w.mainAlbum) ? void 0 : t.id) &&
                                    e.push((0, c.jsx)(tO, { trackId: w.id, albumId: w.mainAlbum.id }, 'navigate-to-track')),
                                w.isNonUserGenerated &&
                                    (w.albums.length || w.mainAlbum) &&
                                    (null == (i = w.mainAlbum) ? void 0 : i.url) &&
                                    e.push((0, c.jsx)(tw.f, { albumUrl: w.mainAlbum.url, albumType: w.mainAlbum.type, trackType: w.type }, 'navigate-to-album')),
                                w.isNonUserGenerated &&
                                    (null == (n = w.artists) ? void 0 : n.length) &&
                                    ((null == (a = w.mainAlbum) ? void 0 : a.isAudiobook) ||
                                        (null == (r = w.mainAlbum) ? void 0 : r.isAlbum) ||
                                        w.isTrackAudiobook ||
                                        w.isTrackMusic) &&
                                    e.push((0, c.jsx)(tT.o, { artists: w.artists }, 'navigate-to-artist')));
                        }
                        return (e.length > 0 && e.unshift((0, c.jsx)('div', { className: tH().divider }, 'bottom-divider')), e);
                    });
                return u.isGenerativeContext
                    ? (0, c.jsx)(A.$, {
                          className: l,
                          radius: 'round',
                          size: 'xxxs',
                          variant: 'text',
                          withRipple: !1,
                          onClick: L,
                          'aria-label': C({ id: 'player-actions.audio-quality' }),
                          icon: (0, c.jsx)(q.I, { variant: 'settings', size: 'xs' }),
                      })
                    : (0, c.jsxs)(tA.W1, {
                          placement: 'top',
                          offsetOptions: 10,
                          open: k,
                          onOpenChange: O,
                          variant: 'text',
                          icon: (0, c.jsx)(q.I, { variant: 'more', size: 'xs' }),
                          radius: 'xxxl',
                          className: l,
                          ariaLabel: C({ id: 'interface-actions.context-menu' }),
                          containerDataTestId: h.e8.player.VIBE_CONTEXT_MENU,
                          'data-test-id': h.e8.player.VIBE_CONTEXT_MENU_BUTTON,
                          children: [
                              em,
                              eu,
                              u.canShuffle &&
                                  (0, c.jsx)(tA.Dr, {
                                      'aria-label': C({ id: 'player-actions.shuffle' }),
                                      onClick: R,
                                      icon: (0, c.jsx)(q.I, { variant: 'shuffle', size: 'xxs' }),
                                      className: (0, d.$)({ [tH().item_active]: Z }),
                                      isSubMenu: !0,
                                      'data-test-id': h.e8.player.VIBE_CONTEXT_MENU_SHUFFLE_ITEM,
                                      children: (0, c.jsx)(_.A, { id: 'player-actions.mix' }),
                                  }),
                              u.canChangeRepeatMode &&
                                  (0, c.jsx)(tA.Dr, {
                                      'aria-label': (0, tC.z)(u.repeatMode, C),
                                      onClick: D,
                                      icon: (0, c.jsx)(q.I, { variant: Y, size: 'xxs' }),
                                      className: (0, d.$)({ [tH().item_active]: $ }),
                                      isSubMenu: !0,
                                      'data-test-id': h.e8.player.VIBE_CONTEXT_MENU_REPEAT_ITEM,
                                      children: (0, c.jsx)(_.A, { id: 'player-actions.repeat-action' }),
                                  }),
                              !u.isGenerativeContext &&
                                  !m.isAdvertShown &&
                                  (null == w ? void 0 : w.isSyncLyricsAvailable) &&
                                  (0, c.jsx)(tA.Dr, {
                                      'aria-label': ed,
                                      onClick: B,
                                      icon: (0, c.jsx)(q.I, { variant: 'syncLyrics', size: 'xxs' }),
                                      className: (0, d.$)({ [tH().item_active]: Q }),
                                      'data-test-id': h.e8.player.VIBE_CONTEXT_MENU_SYNC_LYRICS_ITEM,
                                      children: (0, c.jsx)(_.A, { id: 'interface-actions.open-lyrics' }),
                                  }),
                              !u.isGenerativeContext && !m.isAdvertShown && (0, c.jsx)(tU, { onCloseMenu: P }),
                              (0, c.jsx)(tA.Dr, {
                                  onClick: M,
                                  icon: (0, c.jsx)(q.I, { variant: 'settings', size: 'xxs' }),
                                  'data-test-id': h.e8.player.VIBE_CONTEXT_MENU_AUDIO_QUALITY_ITEM,
                                  children: (0, c.jsx)(_.A, { id: 'player-actions.audio-quality' }),
                              }),
                              eb,
                          ],
                      });
            });
            var tq = i(62060),
                tX = {
                    5881: (e, t, i) => {
                        function n() {
                            for (var e, t, i = 0, n = ''; i < arguments.length;)
                                (e = arguments[i++]) &&
                                    (t = (function e(t) {
                                        var i,
                                            n,
                                            a = '';
                                        if ('string' == typeof t || 'number' == typeof t) a += t;
                                        else if ('object' == typeof t)
                                            if (Array.isArray(t)) for (i = 0; i < t.length; i++) t[i] && (n = e(t[i])) && (a && (a += ' '), (a += n));
                                            else for (i in t) t[i] && (a && (a += ' '), (a += i));
                                        return a;
                                    })(e)) &&
                                    (n && (n += ' '), (n += t));
                            return n;
                        }
                        (i.r(t), i.d(t, { clsx: () => n, default: () => a }));
                        let a = n;
                    },
                    973: (e, t, i) => {
                        (i.r(t), i.d(t, { default: () => n }));
                        let n = {
                            root: 'MoGQRtOtKDQCJc5HZNLw',
                            marquee: 'eYOrGFuz5P6VSNQ_IgdM',
                            content: 'eY9nVaCYr1nX7vFMBaaD',
                            content_static: 'NuV8xfAyyQwIpvv3W2Gy',
                            measure: 'CapcUKn78Iu2s1O6joam',
                        };
                    },
                    1269: (e, t, i) => {
                        Object.defineProperty(t, '__esModule', { value: !0 });
                        var n = i(810),
                            a = (function (e) {
                                return e && 'object' == typeof e && 'default' in e ? e : { default: e };
                            })(n);
                        (!(function (e) {
                            if (!e) return;
                            let t = document.createElement('style');
                            (t.setAttribute('type', 'text/css'), (t.innerHTML = e), document.head.appendChild(t));
                        })(
                            '.rfm-marquee-container {\n  overflow-x: hidden;\n  display: flex;\n  flex-direction: row;\n  position: relative;\n  width: var(--width);\n  transform: var(--transform);\n}\n.rfm-marquee-container:hover div {\n  animation-play-state: var(--pause-on-hover);\n}\n.rfm-marquee-container:active div {\n  animation-play-state: var(--pause-on-click);\n}\n\n.rfm-overlay {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n}\n.rfm-overlay::before, .rfm-overlay::after {\n  background: linear-gradient(to right, var(--gradient-color), rgba(255, 255, 255, 0));\n  content: "";\n  height: 100%;\n  position: absolute;\n  width: var(--gradient-width);\n  z-index: 2;\n  pointer-events: none;\n  touch-action: none;\n}\n.rfm-overlay::after {\n  right: 0;\n  top: 0;\n  transform: rotateZ(180deg);\n}\n.rfm-overlay::before {\n  left: 0;\n  top: 0;\n}\n\n.rfm-marquee {\n  flex: 0 0 auto;\n  min-width: var(--min-width);\n  z-index: 1;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  animation: scroll var(--duration) linear var(--delay) var(--iteration-count);\n  animation-play-state: var(--play);\n  animation-delay: var(--delay);\n  animation-direction: var(--direction);\n}\n@keyframes scroll {\n  0% {\n    transform: translateX(0%);\n  }\n  100% {\n    transform: translateX(-100%);\n  }\n}\n\n.rfm-initial-child-container {\n  flex: 0 0 auto;\n  display: flex;\n  min-width: auto;\n  flex-direction: row;\n  align-items: center;\n}\n\n.rfm-child {\n  transform: var(--transform);\n}',
                        ),
                            (t.default = n.forwardRef(function (e, t) {
                                let {
                                        style: i = {},
                                        className: r = '',
                                        autoFill: o = !1,
                                        play: s = !0,
                                        pauseOnHover: l = !1,
                                        pauseOnClick: c = !1,
                                        direction: d = 'left',
                                        speed: u = 50,
                                        delay: m = 0,
                                        loop: b = 0,
                                        gradient: p = !1,
                                        gradientColor: v = 'white',
                                        gradientWidth: _ = 200,
                                        onFinish: h,
                                        onCycleComplete: g,
                                        onMount: f,
                                        children: x,
                                    } = e,
                                    [y, A] = n.useState(0),
                                    [C, j] = n.useState(0),
                                    [S, T] = n.useState(1),
                                    [k, E] = n.useState(!1),
                                    P = n.useRef(null),
                                    I = t || P,
                                    N = n.useRef(null),
                                    w = n.useCallback(() => {
                                        if (N.current && I.current) {
                                            let e = I.current.getBoundingClientRect(),
                                                t = N.current.getBoundingClientRect(),
                                                i = e.width,
                                                n = t.width;
                                            (('up' === d || 'down' === d) && ((i = e.height), (n = t.height)),
                                                o && i && n ? T(n < i ? Math.ceil(i / n) : 1) : T(1),
                                                A(i),
                                                j(n));
                                        }
                                    }, [o, I, d]);
                                (n.useEffect(() => {
                                    if (k && (w(), N.current && I.current)) {
                                        let e = new ResizeObserver(() => w());
                                        return (
                                            e.observe(I.current),
                                            e.observe(N.current),
                                            () => {
                                                e && e.disconnect();
                                            }
                                        );
                                    }
                                }, [w, I, k]),
                                    n.useEffect(() => {
                                        w();
                                    }, [w, x]),
                                    n.useEffect(() => {
                                        E(!0);
                                    }, []),
                                    n.useEffect(() => {
                                        'function' == typeof f && f();
                                    }, []));
                                let O = n.useMemo(() => (o ? (C * S) / u : C < y ? y / u : C / u), [o, y, C, S, u]),
                                    M = n.useMemo(
                                        () =>
                                            Object.assign(Object.assign({}, i), {
                                                '--pause-on-hover': !s || l ? 'paused' : 'running',
                                                '--pause-on-click': !s || (l && !c) || c ? 'paused' : 'running',
                                                '--width': 'up' === d || 'down' === d ? '100vh' : '100%',
                                                '--transform': 'up' === d ? 'rotate(-90deg)' : 'down' === d ? 'rotate(90deg)' : 'none',
                                            }),
                                        [i, s, l, c, d],
                                    ),
                                    B = n.useMemo(() => ({ '--gradient-color': v, '--gradient-width': 'number' == typeof _ ? ''.concat(_, 'px') : _ }), [v, _]),
                                    R = n.useMemo(
                                        () => ({
                                            '--play': s ? 'running' : 'paused',
                                            '--direction': 'left' === d ? 'normal' : 'reverse',
                                            '--duration': ''.concat(O, 's'),
                                            '--delay': ''.concat(m, 's'),
                                            '--iteration-count': b ? ''.concat(b) : 'infinite',
                                            '--min-width': o ? 'auto' : '100%',
                                        }),
                                        [s, d, O, m, b, o],
                                    ),
                                    D = n.useMemo(() => ({ '--transform': 'up' === d ? 'rotate(90deg)' : 'down' === d ? 'rotate(-90deg)' : 'none' }), [d]),
                                    V = n.useCallback(
                                        (e) =>
                                            [...Array(Number.isFinite(e) && e >= 0 ? e : 0)].map((e, t) =>
                                                a.default.createElement(
                                                    n.Fragment,
                                                    { key: t },
                                                    n.Children.map(x, (e) => a.default.createElement('div', { style: D, className: 'rfm-child' }, e)),
                                                ),
                                            ),
                                        [D, x],
                                    );
                                return k
                                    ? a.default.createElement(
                                          'div',
                                          { ref: I, style: M, className: 'rfm-marquee-container ' + r },
                                          p && a.default.createElement('div', { style: B, className: 'rfm-overlay' }),
                                          a.default.createElement(
                                              'div',
                                              { className: 'rfm-marquee', style: R, onAnimationIteration: g, onAnimationEnd: h },
                                              a.default.createElement(
                                                  'div',
                                                  { className: 'rfm-initial-child-container', ref: N },
                                                  n.Children.map(x, (e) => a.default.createElement('div', { style: D, className: 'rfm-child' }, e)),
                                              ),
                                              V(S - 1),
                                          ),
                                          a.default.createElement('div', { className: 'rfm-marquee', style: R }, V(S)),
                                      )
                                    : null;
                            })));
                    },
                    9097: (e, t) => {
                        var i = Symbol.for('react.transitional.element');
                        function n(e, t, n) {
                            var a = null;
                            if ((void 0 !== n && (a = '' + n), void 0 !== t.key && (a = '' + t.key), 'key' in t))
                                for (var r in ((n = {}), t)) 'key' !== r && (n[r] = t[r]);
                            else n = t;
                            return { $$typeof: i, type: e, key: a, ref: void 0 !== (t = n.ref) ? t : null, props: n };
                        }
                        ((t.Fragment = Symbol.for('react.fragment')), (t.jsx = n), (t.jsxs = n));
                    },
                    4377: (e, t, i) => {
                        e.exports = i(9097);
                    },
                    7497: (e, t) => {
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.useReturnValue = void 0), (t.useReturnValue = (e) => e()));
                    },
                    7956: function (e, t, i) {
                        var n =
                            (this && this.__importDefault) ||
                            function (e) {
                                return e && e.__esModule ? e : { default: e };
                            };
                        (Object.defineProperty(t, '__esModule', { value: !0 }), (t.OverflowMarquee = void 0));
                        let a = i(4377),
                            r = i(5881),
                            o = i(810),
                            s = n(i(1269)),
                            l = i(7497),
                            c = n(i(973));
                        t.OverflowMarquee = (e) => {
                            let {
                                    children: t,
                                    className: i,
                                    contentClassName: n,
                                    scrollingClassName: d,
                                    speed: u = 50,
                                    delay: m = 0,
                                    pauseOnHover: b = !0,
                                    pauseOnClick: p = !1,
                                    loop: v = 0,
                                    direction: _ = 'left',
                                    autoFill: h = !1,
                                    gradient: g = !1,
                                    gradientColor: f,
                                    gradientWidth: x,
                                    gap: y = 12,
                                    ...A
                                } = e,
                                C = (0, o.useRef)(null),
                                j = (0, o.useRef)(null),
                                [S, T] = (0, o.useState)(!1),
                                [k, E] = (0, o.useState)(!1);
                            ((0, o.useEffect)(() => {
                                let e = window.matchMedia('(prefers-reduced-motion: reduce)'),
                                    t = () => {
                                        E(e.matches);
                                    };
                                return (
                                    t(),
                                    e.addEventListener('change', t),
                                    () => {
                                        e.removeEventListener('change', t);
                                    }
                                );
                            }, []),
                                (0, o.useEffect)(() => {
                                    let e = C.current,
                                        t = j.current;
                                    if (null === e || null === t) return;
                                    let i = () => {
                                        let i = e.clientWidth,
                                            n = t.scrollWidth;
                                        if (0 === i || 0 === n) return void T(!1);
                                        T(n > i);
                                    };
                                    if ((i(), 'undefined' == typeof ResizeObserver)) return;
                                    let n = new ResizeObserver(i);
                                    return (
                                        n.observe(e),
                                        n.observe(t),
                                        () => {
                                            n.disconnect();
                                        }
                                    );
                                }, []));
                            let P = S && !k,
                                I = P && void 0 !== y ? { marginInlineEnd: ''.concat(y, 'px') } : void 0,
                                N = (0, l.useReturnValue)(() =>
                                    P
                                        ? (0, a.jsx)(s.default, {
                                              className: c.default.marquee,
                                              play: P,
                                              speed: u,
                                              delay: m / 1e3,
                                              loop: v,
                                              direction: _,
                                              autoFill: h,
                                              pauseOnHover: b,
                                              pauseOnClick: p,
                                              gradient: g,
                                              gradientColor: f,
                                              gradientWidth: x,
                                              children: (0, a.jsx)('div', { className: (0, r.clsx)(c.default.content, n), style: I, children: t }),
                                          })
                                        : (0, a.jsx)('div', { className: (0, r.clsx)(c.default.content, c.default.content_static, n), style: I, children: t }),
                                );
                            return (0, a.jsxs)('div', {
                                ref: C,
                                className: (0, r.clsx)(c.default.root, i, P && d),
                                ...A,
                                children: [
                                    (0, a.jsx)('div', { ref: j, className: (0, r.clsx)(c.default.measure, c.default.content, n), 'aria-hidden': !0, children: t }),
                                    N,
                                ],
                            });
                        };
                    },
                    810: (e) => {
                        e.exports = p;
                    },
                },
                tG = {};
            function tY(e) {
                var t = tG[e];
                if (void 0 !== t) return t.exports;
                var i = (tG[e] = { exports: {} });
                return (tX[e].call(i.exports, i, i.exports, tY), i.exports);
            }
            ((tY.d = (e, t) => {
                for (var i in t) tY.o(t, i) && !tY.o(e, i) && Object.defineProperty(e, i, { enumerable: !0, get: t[i] });
            }),
                (tY.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
                (tY.r = (e) => {
                    ('undefined' != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
                        Object.defineProperty(e, '__esModule', { value: !0 }));
                }));
            var t$ = {};
            (() => {
                (Object.defineProperty(t$, 'X', { value: !0 }), (t$.W = void 0));
                var e = tY(7956);
                Object.defineProperty(t$, 'W', {
                    enumerable: !0,
                    get: function () {
                        return e.OverflowMarquee;
                    },
                });
            })();
            var tZ = t$.W;
            t$.X;
            var tQ = i(378),
                tJ = i(8958),
                t0 = i(52843),
                t1 = i(22191),
                t2 = i(13798),
                t8 = i(19953),
                t5 = i.n(t8);
            let t7 = (0, u.PA)(() => {
                var e, t, i, n, a;
                let {
                        experiments: r,
                        sonataState: o,
                        advert: s,
                        settings: { isMobile: l },
                    } = (0, F.g)(),
                    { formatMessage: u } = (0, v.A)(),
                    m = (0, tr.e)(),
                    p = o.entityMeta,
                    _ = !o.isPlaying && o.isVibeContext,
                    g = null != (i = o.position) ? i : 0,
                    x = null != (n = o.duration) ? n : 0,
                    [A, C] = (0, b.useState)(null),
                    j = (0, b.useRef)(!1),
                    { state: S, toggleTrue: T, toggleFalse: k } = (0, eo.e)(!1),
                    E = !!x && !o.isGenerativeContext && S,
                    P = j.current && null != A ? A : g,
                    I = x > 0 ? (Math.min(P, x) / x) * 100 : 0,
                    N = (0, t0.E)(Math.round(P), Math.round(x)),
                    w = (0, t0.E)(Math.round(x), Math.round(x)),
                    O = (0, t1.P)(P),
                    M = (0, t1.P)(x),
                    B = {
                        '--track-progress': ''.concat(I, '%'),
                        '--progress-transition-duration': ((e) => {
                            if ('default' !== e && void 0 !== e) return 'on1' === e ? '150ms' : '0ms';
                        })(null == (e = r.getExperiment(U.z.WebNextMainPlayerAnimation)) ? void 0 : e.group),
                        '--progress-transition': j.current ? 'none' : void 0,
                    },
                    R = (0, b.useMemo)(
                        () =>
                            (0, tq.A)(() => {
                                k();
                            }, 1e3),
                        [k],
                    ),
                    D = (0, f.c)((e, t) => {
                        s.isAdvertShown || ((j.current = !t), l && (T(), R.cancel(), R()), t ? null == m || m.setProgress(e) : C(e));
                    }),
                    V = (0, y.L)(() => {
                        if (o.isGenerativeContext)
                            return (null == p ? void 0 : p.title)
                                ? (0, c.jsxs)(c.Fragment, {
                                      children: [
                                          (0, c.jsx)('span', {
                                              className: t5().generativeIcon,
                                              children: (0, c.jsx)(q.I, { size: 'xs', variant: 'infinity', 'data-test-id': h.e8.player.VIBE_PLAYERBAR_NEUROMUSIC_ICON }),
                                          }),
                                          (0, c.jsx)('span', { className: t5().generativeTitle, children: p.title }),
                                      ],
                                  })
                                : (0, c.jsx)(q.I, { size: 'xs', variant: 'infinity', 'data-test-id': h.e8.player.VIBE_PLAYERBAR_NEUROMUSIC_ICON });
                        let e = [],
                            t = [];
                        return (
                            p && (e.push((0, tJ.X)(p.artists)), e.push('—')),
                            (null == p ? void 0 : p.title) && t.push(p.title),
                            !(null == p ? void 0 : p.isRemoved) && (null == p ? void 0 : p.version) && t.push('('.concat(p.version, ')')),
                            (0, c.jsxs)(c.Fragment, {
                                children: [e.length > 0 && _ && (0, c.jsx)('span', { className: t5().artists, children: e.join(' ') }), t.join(' ')],
                            })
                        );
                    });
                return (0, c.jsx)('div', {
                    className: t5().root,
                    style: B,
                    children: (0, c.jsxs)('div', {
                        className: (0, d.$)(t5().center, {
                            [t5().center_withExplicitMark]: null == p ? void 0 : p.explicitDisclaimer,
                            [t5().center_withExplicitMark_playing]: o.isPlaying,
                            [t5().center_withoutExplicitMark]: !(null == p ? void 0 : p.explicitDisclaimer),
                            [t5().center_withoutExplicitMark_playing]: o.isPlaying,
                            [t5().center_withTimecode]: E,
                            [t5().center_active]: !o.isGenerativeContext,
                        }),
                        onMouseEnter: T,
                        onMouseLeave: k,
                        'data-test-id': h.e8.player.VIBE_PLAYERBAR_TIMECODE_SLIDER,
                        children: [
                            (0, c.jsx)(
                                tZ,
                                {
                                    className: t5().trackName,
                                    scrollingClassName: t5().scrollingTrackName,
                                    contentClassName: t5().trackNameText,
                                    pauseOnHover: !1,
                                    speed: 35,
                                    gap: 32,
                                    'data-test-id': h.e8.player.VIBE_PLAYERBAR_TRACK_NAME,
                                    children: V,
                                },
                                ''.concat(null != (a = null == (t = o.entityMeta) ? void 0 : t.idWithContext) ? a : 'default', '-').concat(_),
                            ),
                            (null == p ? void 0 : p.explicitDisclaimer) &&
                                (0, c.jsx)(t2.N, {
                                    containerClassName: t5().explicitMarkContainer,
                                    getDescriptionTexts: p.getDescriptionTexts,
                                    size: 'xxxs',
                                    variant: p.explicitDisclaimer,
                                    className: t5().explicitMark,
                                    trackId: p.id,
                                }),
                            !o.isGenerativeContext &&
                                (0, c.jsx)('span', {
                                    className: t5().timecodeOverlay,
                                    'aria-hidden': !0,
                                    'data-test-id': h.e8.player.VIBE_PLAYERBAR_TIMECODE,
                                    children: ''.concat(N, ' / ').concat(w),
                                }),
                            !o.isGenerativeContext &&
                                (0, c.jsx)(tQ.A, {
                                    className: (0, d.$)(t5().slider, { [t5().slider_active]: !o.isGenerativeContext }),
                                    'aria-label': u({ id: 'player-actions.timecode-control' }),
                                    'aria-valuetext': ''.concat(O, ' / ').concat(M),
                                    disabled: !p || s.isAdvertShown,
                                    onChange: D,
                                    onFocus: T,
                                    onBlur: k,
                                    maxValue: Math.round(x),
                                    mode: 'deferred',
                                    value: Math.round(P),
                                    showThumbVariant: 'never',
                                    trackSize: 's',
                                    thumbSize: 's',
                                }),
                        ],
                    }),
                });
            });
            var t6 = i(59802),
                t9 = i(37108),
                t4 = i(19025),
                t3 = i.n(t4);
            let ie = (0, u.PA)(() => {
                    var e, t;
                    let { vibe: i, sonataState: n, advert: a, freePlayerAccess: r, freeAccess: o } = (0, F.g)(),
                        { openIntroModalFromPlay: s } = (0, tb.e)(),
                        { formatMessage: l } = (0, v.A)(),
                        u = (0, tr.e)(),
                        m = (0, e4.P)(),
                        p = (0, tt.b)(),
                        _ = (0, e3.r)(),
                        g = (0, te.m)(),
                        { pageId: x } = (0, R.$)();
                    (0, t6.e)();
                    let { togglePlay: C } = (0, W.B)({
                            seeds: null != (t = null == (e = i.meta) ? void 0 : e.seeds) ? t : [],
                            pageIdForFrom: x,
                            blockIdForFrom: ''.concat(e2.EntityTypes.MyWave, '-').concat(eM.U.RADIO),
                            onPlayInterrupted: () => r.showRestrictionModal(e9.W.Interrupted),
                        }),
                        j = n.entityMeta,
                        S = (0, f.c)((e) => {
                            (e.stopPropagation(), null == u || u.moveForward(), g({ actionType: e2.ActionType.Skip }));
                        }),
                        T = (0, f.c)((e) => {
                            (e.stopPropagation(), null == u || u.moveBackward(), g({ actionType: e2.ActionType.Backskip }));
                        }),
                        k = (0, f.c)(() => {
                            if (a.isAdvertShown) {
                                var e;
                                null == _ || null == (e = _.audioAdvertPlayback) || e.togglePause();
                                return;
                            }
                            if (!s())
                                if (j) (null == u || u.togglePause(), g({ actionType: n.isPlaying ? e2.ActionType.Pause : e2.ActionType.Play }));
                                else {
                                    if (o.isVibeStartRestricted) return void r.showRestrictionModal(e9.W.Interrupted);
                                    (C(), p(!n.isPlaying));
                                }
                        }),
                        E = (0, f.c)(() => {
                            m() || k();
                        }),
                        P = (0, f.c)((e) => {
                            e || r.hideRestrictionModal();
                        }),
                        I = (0, b.useCallback)(
                            () =>
                                (0, c.jsx)(tl.D, {
                                    className: (0, d.$)(t3().playButton, { [t3().playButton_playing]: n.isPlaying }),
                                    isPlaying: n.isPlaying,
                                    iconClassName: t3().playButtonIcon,
                                    color: 'secondary',
                                    onClick: E,
                                }),
                            [E, n.isPlaying],
                        ),
                        N = (0, y.L)(() => {
                            let e = j ? 'fullTracks' : 'vibe';
                            return r.shownRestrictionModal === t9.h.PlayerAuthorization
                                ? (0, c.jsx)(t_.Z, { isOpened: !0, placement: 'top', textVariant: e, transform: !1, onOpenChange: P, renderChildren: I })
                                : r.shownRestrictionModal === t9.h.PlayerSubscription
                                  ? (0, c.jsx)(tp.S, { isOpened: !0, placement: 'top', textVariant: e, transform: !1, onOpenChange: P, renderChildren: I })
                                  : I();
                        });
                    return (0, c.jsxs)('div', {
                        className: t3().root,
                        children: [
                            !n.isGenerativeContext &&
                                (0, c.jsx)(A.$, {
                                    className: t3().skipButton,
                                    variant: 'text',
                                    radius: 'round',
                                    disabled: !n.canMoveBackward,
                                    focusableWhenDisabled: !0,
                                    withRipple: !1,
                                    'aria-label': l({ id: 'player-actions.previous-track' }),
                                    icon: (0, c.jsx)(q.I, { variant: 'previous', size: 'xs' }),
                                    onClick: T,
                                    'data-test-id': h.Kq.sonata.PREVIOUS_TRACK_BUTTON,
                                }),
                            N,
                            !n.isGenerativeContext &&
                                (0, c.jsx)(A.$, {
                                    className: t3().skipButton,
                                    variant: 'text',
                                    radius: 'round',
                                    disabled: !n.canMoveForward,
                                    focusableWhenDisabled: !0,
                                    withRipple: !1,
                                    'aria-label': l({ id: 'player-actions.next-track' }),
                                    icon: (0, c.jsx)(q.I, { variant: 'next', size: 'xs' }),
                                    onClick: S,
                                    'data-test-id': h.Kq.sonata.NEXT_TRACK_BUTTON,
                                }),
                        ],
                    });
                }),
                it = (0, u.PA)(() => {
                    var e, t;
                    let {
                            vibe: i,
                            sonataState: n,
                            advert: a,
                            fullscreenPlayer: r,
                            settings: { isMobile: o },
                            freePlayerAccess: s,
                        } = (0, F.g)(),
                        { formatMessage: l } = (0, v.A)(),
                        u = (0, ta.z)(),
                        m = (0, e6.d)(),
                        { isLiked: p, handleLike: _, isDisliked: g, handleDislike: x } = (0, tc.f)(),
                        A = (0, tr.e)(),
                        C = (0, e4.P)(),
                        j = (0, tt.b)(),
                        S = (0, e3.r)(),
                        T = (0, te.m)(),
                        { pageId: k } = (0, R.$)(),
                        { togglePlay: E } = (0, W.B)({
                            seeds: null != (t = null == (e = i.meta) ? void 0 : e.seeds) ? t : [],
                            pageIdForFrom: k,
                            blockIdForFrom: ''.concat(e2.EntityTypes.MyWave, '-').concat(eM.U.RADIO),
                            onPlayInterrupted: () => s.showRestrictionModal(e9.W.Interrupted),
                        }),
                        P = n.entityMeta,
                        I = null == P ? void 0 : P.mainAlbum,
                        N = !n.isPlaying && !P,
                        w = (0, f.c)(() => {
                            if (n.entityMeta) {
                                if (r.modal.isOpened) return void r.modal.close();
                                r.modal.open();
                            }
                        });
                    (0, b.useEffect)(() => {
                        if (!n.isGenerativeContext)
                            return (
                                null == u || u.addShortcutsListener(tn.M.MAIN, ti.l.TOGGLE_FULLSCREEN_PLAYER, w),
                                null == u || u.addShortcutsListener(tn.M.MAIN, ti.l.LIKE, _),
                                null == u || u.addShortcutsListener(tn.M.MAIN, ti.l.DISLIKE, x),
                                () => {
                                    (null == u || u.removeShortcutsListener(tn.M.MAIN, ti.l.TOGGLE_FULLSCREEN_PLAYER),
                                        null == u || u.removeShortcutsListener(tn.M.MAIN, ti.l.LIKE),
                                        null == u || u.removeShortcutsListener(tn.M.MAIN, ti.l.DISLIKE));
                                }
                            );
                    }, [x, _, u, n.isGenerativeContext, n.entityMeta, w]);
                    let O = (0, f.c)(async (e, t) => {
                            (t && (0, es.P)(t, tF().ripple), await m(n, e));
                        }),
                        M = (0, f.c)((e) => {
                            ((0, es.P)(e, tF().ripple), x());
                        }),
                        B = (0, f.c)((e) => {
                            (e && !o && (0, es.P)(e, tF().ripple), _());
                        }),
                        D = (0, f.c)(() => {
                            if (a.isAdvertShown) {
                                var e;
                                null == S || null == (e = S.audioAdvertPlayback) || e.togglePause();
                                return;
                            }
                            P ? (null == A || A.togglePause(), T({ actionType: n.isPlaying ? e2.ActionType.Pause : e2.ActionType.Play })) : (E(), j(!n.isPlaying));
                        }),
                        V = (0, f.c)((e) => {
                            ((0, es.P)(e, tF().ripple), C() || D());
                        }),
                        L = (0, y.L)(() =>
                            o
                                ? null
                                : (0, c.jsx)(e7.r, {
                                      className: tF().changeVolume,
                                      buttonClassName: tF().button,
                                      verticalSliderClassName: tF().verticalSlider,
                                      variant: e5.q.VERTICAL,
                                      sonataVolume: n.volume,
                                      onVolumeClick: O,
                                  }),
                        ),
                        U = (0, y.L)(() =>
                            o && n.isPlaying
                                ? (0, c.jsx)(tl.D, { className: tF().button, isPlaying: n.isPlaying, color: 'secondary', onClick: V })
                                : o && !n.isPlaying
                                  ? null
                                  : (0, c.jsx)(to._, { className: tF().button, disabled: !P || a.isAdvertShown, isDisliked: g, onClick: M, iconSize: 'xs' }),
                        );
                    return (0, c.jsxs)('section', {
                        role: 'region',
                        'aria-label': l({ id: 'a11y-regions.player' }),
                        className: tF().root,
                        'data-test-id': h.e8.player.VIBE_PLAYERBAR,
                        children: [
                            (0, c.jsx)(tx, { album: I }),
                            (0, c.jsxs)('div', {
                                className: (0, d.$)(tF().progress, { [tF().progress_visible]: !N }),
                                children: [
                                    L,
                                    U,
                                    (0, c.jsx)(t7, {}),
                                    (0, c.jsx)(ts.c, {
                                        className: (0, d.$)(tF().button, { [tF().likeButton_mobilePaused]: o && !n.isPlaying }),
                                        disabled: !P || a.isAdvertShown,
                                        isLiked: p,
                                        onClick: B,
                                        iconSize: 'xs',
                                    }),
                                    !o &&
                                        (0, c.jsx)(tK, { buttonClassName: (0, d.$)(tF().button, tF().important), 'data-test-id': h.e8.player.VIBE_CONTEXT_MENU_BUTTON }),
                                    (0, c.jsx)(td.e, {}),
                                ],
                            }),
                            !o && (0, c.jsx)(ie, {}),
                        ],
                    });
                }),
                ii = { minFontSize: 24, maxFontSize: 64, maxLines: 2, lineHeight: 0.9 },
                ia = { minFontSize: 48, maxFontSize: 104, maxLines: 4, lineHeight: 0.9 },
                ir = { minFontSize: 48, maxFontSize: 104, maxLines: void 0, lineHeight: 1.1 },
                io = {
                    minFontSize: 14,
                    maxFontSize: 20,
                    lineHeight: 1,
                    styleVariants: [
                        { fontSize: 20, lineHeight: 1 },
                        { fontSize: 16, lineHeight: 1 },
                        { fontSize: 14, lineHeight: 16 / 14 },
                    ],
                };
            var is = i(43315),
                il = i.n(is);
            let ic = (0, u.PA)((e) => {
                var t;
                let { artist: i, withLink: n, onClick: a, featCoverUri: r } = e,
                    { formatMessage: o } = (0, v.A)(),
                    s = (0, tm.N)(),
                    l = null != r ? r : null == (t = i.cutoutCover) ? void 0 : t.uri,
                    d = o({ id: 'entity-names.artist-name' }, { artistName: i.name }),
                    u = (0, f.c)(() => {
                        s({ to: e2.AppScreen.ArtistScreen });
                    }),
                    m = (0, c.jsx)(C._V, {
                        className: il().cover,
                        fit: 'contain',
                        src: l,
                        size: 'orig',
                        withAvatarReplace: !0,
                        alt: d,
                        'aria-hidden': !0,
                        withLoadingIndicator: !1,
                    });
                return n
                    ? (0, c.jsx)(tv.N, { className: il().root, href: i.url, onClick: u, 'aria-hidden': !0, 'data-test-id': h.e8.vibe.VIBE_ARTIST_COVER, children: m })
                    : (0, c.jsx)('div', { className: il().root, onClick: a, 'aria-hidden': !0, 'data-test-id': h.e8.vibe.VIBE_ARTIST_COVER, children: m });
            });
            var id = i(70597);
            let iu = (e) => {
                var t;
                return null != (t = e.fallbackMaxLines) ? t : e.maxLines;
            };
            var im = i(53255),
                ib = i.n(im);
            let ip = (e) => {
                    let { textOptions: t, children: i } = e,
                        { setContainerRef: n, lineClamp: a } = ((e) => {
                            let [t, i] = (0, x.d)(),
                                [n, a] = (0, b.useState)(() => iu(e));
                            return (
                                (0, b.useEffect)(() => {
                                    a(iu(e));
                                }, [e.fallbackMaxLines, e.maxLines]),
                                (0, id.mf)(t, e, a),
                                { setContainerRef: i, lineClamp: n }
                            );
                        })(t);
                    return (0, c.jsx)('div', {
                        ref: n,
                        className: ib().root,
                        'data-test-id': h.e8.vibe.VIBE_DYNAMIC_ARTISTS,
                        children: (0, b.cloneElement)(i, { lineClamp: a }),
                    });
                },
                iv = {
                    src: '/_next/static/media/q2v-glow-w120.1677f964.png',
                    height: 256,
                    width: 400,
                    blurDataURL:
                        'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAMAAABPT11nAAAAJ1BMVEX/e//qkv/7XPX4vv/0UO/nYPj6UO7sP+beSvr6Ren/VvL8k/nrff8yHG/VAAAADHRSTlMBZCkReHVo/v3OUx1DIc6HAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAHklEQVR4nGNggANmRlYWNiYGBgZGHg52Ti5kESgAAAflAFodTC0aAAAAAElFTkSuQmCC',
                    blurWidth: 8,
                    blurHeight: 5,
                },
                i_ = {
                    src: '/_next/static/media/q2v-glow-w160.81b6098e.png',
                    height: 256,
                    width: 480,
                    blurDataURL:
                        'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAMAAACEE47CAAAAGFBMVEVMaXH/cf30Quf+Tu7ZTvDNZPvhlP/vdPdHyLt4AAAACHRSTlMADLtextdqZIlEHsoAAAAJcEhZcwAAFiUAABYlAUlSJPAAAAAdSURBVHicY2BgYGBgZGRkYGBgY2VhYmJmRGJApQAD1gA1KQvxbwAAAABJRU5ErkJggg==',
                    blurWidth: 8,
                    blurHeight: 4,
                },
                ih = {
                    src: '/_next/static/media/q2v-glow-w200.3dd3deeb.png',
                    height: 256,
                    width: 560,
                    blurDataURL:
                        'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAMAAACEE47CAAAAGFBMVEX/eftMaXH4P+X/T+3UUvTHZ/vflP/lS+7LLK/gAAAACHRSTlMIALNXwM9gvU78oPkAAAAJcEhZcwAAFiUAABYlAUlSJPAAAAAdSURBVHicY2BkZGRkYGBgZGBjZWFnYmJmQDBgUgAFNABFuS+NPAAAAABJRU5ErkJggg==',
                    blurWidth: 8,
                    blurHeight: 4,
                },
                ig = {
                    src: '/_next/static/media/q2v-glow-w240.520a1100.png',
                    height: 256,
                    width: 640,
                    blurDataURL:
                        'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAADCAMAAACZFr56AAAAIVBMVEX6UfH/Vf/haPn0P+bZjf/6RefTVPX///7NfP79Qub/X/R17Zh8AAAAC3RSTlMtAyrZGzfsB8+eGFOiud8AAAAJcEhZcwAAFiUAABYlAUlSJPAAAAAdSURBVHicY2BkYWJiYGVgZGDnYGNjZubkYoCJAAAEdABTyJLycgAAAABJRU5ErkJggg==',
                    blurWidth: 8,
                    blurHeight: 3,
                },
                ix = {
                    src: '/_next/static/media/q2v-glow-w280.b6e7b279.png',
                    height: 256,
                    width: 720,
                    blurDataURL:
                        'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAADCAMAAACZFr56AAAAIVBMVEX/Su7kZfryVfLyP+bUUvXZf/v/ZvXjqv/9POLfof/Fb/xpkARsAAAAC3RSTlMvJCrT4R4MBLkx67AUSkUAAAAJcEhZcwAAFiUAABYlAUlSJPAAAAAdSURBVHicY2BnZWRkYmBgY+DkYmFhZuZgYICJAAAE3wBW+41RHAAAAABJRU5ErkJggg==',
                    blurWidth: 8,
                    blurHeight: 3,
                },
                iy = {
                    src: '/_next/static/media/q2v-glow-w320.6a3648a7.png',
                    height: 256,
                    width: 800,
                    blurDataURL:
                        'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAADCAMAAACZFr56AAAAHlBMVEXAVtzfRsj2TcbFTtj+W8itbuvtQMWsa+uxWOTYQ83r0pUkAAAACnRSTlM6OjG2DjOtobi1kYtftgAAAAlwSFlzAAALEwAACxMBAJqcGAAAAB1JREFUeJxjYGVgYGBkZGJhYOdgZuZkY2NigIkAAAPUAEdB7RkuAAAAAElFTkSuQmCC',
                    blurWidth: 8,
                    blurHeight: 3,
                },
                iA = {
                    src: '/_next/static/media/q2v-glow-w360.fc3c68a3.png',
                    height: 256,
                    width: 880,
                    blurDataURL:
                        'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAACCAMAAABSSm3fAAAAD1BMVEXkQ8uxYOfFUtv/UsWsg/ZbnY/NAAAABXRSTlNxcHMfH3sDujAAAAAJcEhZcwAACxMAAAsTAQCanBgAAAAZSURBVHicBcEBAQAAAIIgs/5vDlgiUBYVegD3ABpDksaVAAAAAElFTkSuQmCC',
                    blurWidth: 8,
                    blurHeight: 2,
                },
                iC = {
                    src: '/_next/static/media/q2v-glow-w400.265dfc0a.png',
                    height: 256,
                    width: 960,
                    blurDataURL:
                        'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAACCAMAAABSSm3fAAAAD1BMVEXjQ8u+VOCtZ+v3UsOsf/DSwDGDAAAABXRSTlNsbWoiImB3+hEAAAAJcEhZcwAACxMAAAsTAQCanBgAAAATSURBVHicY2BhYmRkYGBgZoAxAADtABejooRHAAAAAElFTkSuQmCC',
                    blurWidth: 8,
                    blurHeight: 2,
                },
                ij = (e, t) => ({ '--q2v-glow-image': 'url('.concat(e.src, ')'), '--q2v-glow-aspect-ratio': t });
            var iS = i(29207),
                iT = i.n(iS);
            let ik = (0, u.PA)((e) => {
                    var t;
                    let { context: i, isResetAvailable: n, isHidden: a, onClick: r, className: o } = e,
                        { vibe: s, sonataState: l, experiments: u } = (0, F.g)(),
                        { formatMessage: m } = (0, v.A)(),
                        [p, _] = (0, x.d)(),
                        [g, C] = (0, x.d)(),
                        [j, S] = (0, b.useState)(null);
                    (0, id.mf)(p, io);
                    let k = (0, tt.b)(),
                        E = m({ id: 'interface-actions.reset-context' }, { context: i }),
                        P = (0, f.c)(() => {
                            (r(), k(!0));
                        }),
                        I = s.isShuffleVibe && l.isVibeContext,
                        N = u.checkExperiment(U.z.WebNextNewWaveTabFeedbackForm, 'on'),
                        w = !!(null == (t = s.meta) ? void 0 : t.isQ2V) && l.isVibeContext,
                        O = (0, y.L)(() => (I ? m({ id: 'entity-names.my-vibe' }) : i));
                    (0, b.useLayoutEffect)(() => {
                        if (!w || !n || null === g) return void S(null);
                        let e = () => {
                            let { width: e } = g.getBoundingClientRect();
                            e > 0 && S(e);
                        };
                        e();
                        let t = new ResizeObserver(e);
                        return (
                            t.observe(g),
                            () => {
                                t.disconnect();
                            }
                        );
                    }, [g, i, w, n, O]);
                    let M = (0, y.L)(() => {
                            if (j)
                                return ((e) =>
                                    e < 120
                                        ? ij(iv, '200 / 128')
                                        : e < 160
                                          ? ij(i_, '240 / 128')
                                          : e < 200
                                            ? ij(ih, '280 / 128')
                                            : e < 240
                                              ? ij(ig, '320 / 128')
                                              : e < 280
                                                ? ij(ix, '360 / 128')
                                                : e < 320
                                                  ? ij(iy, '400 / 128')
                                                  : e < 360
                                                    ? ij(iA, '440 / 128')
                                                    : ij(iC, '480 / 128'))(j);
                        }),
                        B = (0, y.L)(() =>
                            i
                                ? n
                                    ? (0, c.jsxs)(A.$, {
                                          ref: C,
                                          className: (0, d.$)(iT().button, { [iT().button_q2v]: w }),
                                          radius: 'xxxl',
                                          withHover: !0,
                                          withRipple: !w,
                                          onClick: P,
                                          'aria-label': E,
                                          'data-test-id': h.e8.vibe.RESET_VIBE_CONTEXT_BUTTON,
                                          children: [
                                              (0, c.jsx)(T.HL, {
                                                  variant: 'span',
                                                  className: (0, d.$)(iT().context, { [iT().context_q2v]: w }),
                                                  lineClamp: 2,
                                                  children: O,
                                              }),
                                              (0, c.jsx)(q.I, {
                                                  variant: 'close_filled',
                                                  size: 'xs',
                                                  className: iT().icon,
                                                  'data-test-id': h.e8.vibe.RESET_VIBE_CONTEXT_BUTTON_ICON,
                                              }),
                                          ],
                                      })
                                    : (0, c.jsx)('div', {
                                          className: iT().container,
                                          children: (0, c.jsx)(T.HL, {
                                              variant: 'span',
                                              className: iT().context,
                                              lineClamp: 2,
                                              'data-test-id': h.e8.vibe.RESET_VIBE_CONTEXT_STATIC_TEXT,
                                              children: O,
                                          }),
                                      })
                                : null,
                        );
                    return (0, c.jsx)('div', {
                        className: (0, d.$)(iT().root, o, { [iT().root_visible]: !a, [iT().root_q2v]: w && null !== j, [iT().root_withFeedbackForm]: N }),
                        style: M,
                        ref: _,
                        'aria-hidden': !!a,
                        children: B,
                    });
                }),
                iE = I.default.default(() =>
                    Promise.all([i.e(6582), i.e(2551), i.e(5898), i.e(825)])
                        .then(i.bind(i, 88481))
                        .then((e) => ({ default: e.Wheel })),
                );
            var iP = i(84638),
                iI = i(75314),
                iN = i(10598),
                iw = i.n(iN);
            let iO = (0, u.PA)(() => {
                let {
                        wizard: e,
                        settings: { isMobile: t },
                    } = (0, F.g)(),
                    { formatMessage: i } = (0, v.A)(),
                    n = (0, f.c)(() => {
                        (e.introModal.close(), e.modal.open());
                    });
                return (0, c.jsxs)(iP.a, {
                    className: (0, d.$)((0, iI.J)(ez.S.Dark), iw().root, { [iw().root_mobile]: t }),
                    headerClassName: iw().header,
                    contentClassName: iw().content,
                    size: 'fitContent',
                    placement: t ? 'default' : 'center',
                    enableSwipe: t,
                    overlayColor: 'full',
                    restoreFocus: !1,
                    labelClose: i({ id: 'interface-actions.close' }),
                    open: e.introModal.isOpened,
                    onOpenChange: e.introModal.onOpenChange,
                    onClose: e.introModal.close,
                    children: [
                        (0, c.jsx)(C._V, {
                            src: 'avatars.mds.yandex.net/get-music-misc/70850/img.6a15a60535ffcf283a9da9e0/%%',
                            srcSet: ''.concat('avatars.mds.yandex.net/get-music-misc/70683/img.6a15a60f5d36c3160a7fb52a/%%', ' 2x'),
                            className: iw().image,
                            size: 375,
                            withAvatarReplace: !0,
                            withAspectRatio: !0,
                            fit: 'contain',
                            alt: '',
                            'aria-hidden': !0,
                        }),
                        (0, c.jsxs)('div', {
                            className: iw().text,
                            children: [
                                (0, c.jsx)(T.DZ, { variant: 'h2', size: 'xl', className: iw().title, children: i({ id: 'wizard.title' }) }),
                                (0, c.jsx)(T.HL, { variant: 'span', size: 'm', className: iw().description, children: i({ id: 'wizard.description' }) }),
                            ],
                        }),
                        (0, c.jsx)(A.$, { className: iw().button, color: 'primary', size: 'm', radius: 'xxxl', onClick: n, children: i({ id: 'wizard.buttonText' }) }),
                    ],
                });
            });
            var iM = i(26042);
            let iB = new Set(Object.values(e2.DomainObjectType)),
                iR = (e) => (((e) => 'string' == typeof e && iB.has(e))(e) ? e : void 0);
            var iD = (function (e) {
                    return ((e.SleepingAlice = 'sleeping_alice'), (e.SleepTech = 'sleep_tech'), e);
                })({}),
                iV = i(72676);
            let iL = (e) => {
                    let { queueState: t, direction: i, batchSize: n } = e,
                        { trackIds: a, currentIndex: r } = t,
                        o = [],
                        s = 0,
                        l = 0;
                    'forward' === i ? ((s = r + 1), (l = Math.min(a.length - 1, s + n - 1))) : (s = Math.max(0, (l = r - 1) - n + 1));
                    for (let e = s; e <= l; e++) {
                        let t = a[e];
                        t && o.push(t);
                    }
                    return o;
                },
                iW = (e) => {
                    let { queueState: t, backwardSize: i, forwardSize: n } = e,
                        a = Math.max(0, t.currentIndex - i),
                        r = Math.min(t.trackIds.length - 1, t.currentIndex + n),
                        o = [];
                    for (let e = a; e <= r; e++) {
                        let i = t.trackIds[e];
                        i && o.push(i);
                    }
                    return o;
                },
                iF = (e) => {
                    let { queueState: t, direction: i, isRequested: n } = e,
                        a = 'forward' === i ? 1 : -1,
                        r = 0;
                    for (let e = t.currentIndex + a; e >= 0 && e < t.trackIds.length; e += a) {
                        let i = t.trackIds[e];
                        if (i && n(i)) r++;
                        else break;
                    }
                    return r <= 3;
                };
            var iU = i(91945),
                iz = i(16839),
                iH = i(2881);
            let iK = 'viewedCards',
                iq = 'viewedBigCards';
            class iX extends iH.F {
                async addViewedIds(e) {
                    return this.executeTransaction((t) => {
                        let i = t.transaction([iK], 'readwrite').objectStore(iK);
                        return Promise.all(e.map((e) => i.put({ uid: this.uid, cardId: e }))).then(() => i.index('uid').count(this.uid));
                    })
                        .then((e) => ('number' == typeof e && e > 30 ? this.evictViewedCardsOverLimit() : Promise.resolve()))
                        .catch(iz.A);
                }
                async addViewedBigCards(e) {
                    return this.executeTransaction((t) => {
                        let i = t.transaction([iq], 'readwrite').objectStore(iq);
                        return Promise.all(e.flatMap((e) => e.bigCardIds.map((t) => ({ uid: this.uid, cardId: e.cardId, bigCardId: t }))).map((e) => i.put(e))).then(() =>
                            i.index('uid').count(this.uid),
                        );
                    })
                        .then((e) => ('number' == typeof e && e > 30 ? this.evictViewedBigCardsOverLimit() : Promise.resolve()))
                        .catch(iz.A);
                }
                async getViewedIds() {
                    return this.executeTransaction((e) => e.getAllFromIndex(iK, 'uid', this.uid).then((e) => e.map((e) => e.cardId)), { defaultValue: [] }).catch(
                        () => [],
                    );
                }
                async getViewedBigCards() {
                    return this.executeTransaction(
                        (e) =>
                            e.getAllFromIndex(iq, 'uid', this.uid).then((e) => {
                                let t = new Map();
                                return (
                                    e.forEach((e) => {
                                        var i;
                                        let n = null != (i = t.get(e.cardId)) ? i : [];
                                        (n.push(e.bigCardId), t.set(e.cardId, n));
                                    }),
                                    Array.from(t.entries()).map((e) => {
                                        let [t, i] = e;
                                        return { cardId: t, bigCardIds: i };
                                    })
                                );
                            }),
                        { defaultValue: [] },
                    ).catch(() => []);
                }
                async clearSentIds(e) {
                    return this.executeTransaction((t) => {
                        let i = t.transaction([iK], 'readwrite').objectStore(iK);
                        return Promise.all(e.map((e) => i.delete([this.uid, e]))).then(iz.A);
                    }).catch(iz.A);
                }
                async clearSentBigCards(e) {
                    return this.executeTransaction((t) => {
                        let i = t.transaction([iq], 'readwrite').objectStore(iq);
                        return Promise.all(e.flatMap((e) => e.bigCardIds.map((t) => [this.uid, e.cardId, t])).map((e) => i.delete(e))).then(iz.A);
                    }).catch(iz.A);
                }
                async evictViewedCardsOverLimit() {
                    return this.executeTransaction((e) => {
                        let t = e.transaction([iK], 'readwrite').objectStore(iK).index('uid');
                        return t.count(this.uid).then((e) => {
                            if (e <= 30) return Promise.resolve();
                            let i = e - 30,
                                n = 0,
                                a = (e) =>
                                    !e || n >= i
                                        ? Promise.resolve()
                                        : (n++,
                                          e
                                              .delete()
                                              .then(() => e.continue())
                                              .then(a));
                            return t.openCursor(this.uid).then(a);
                        });
                    }).catch(iz.A);
                }
                async evictViewedBigCardsOverLimit() {
                    return this.executeTransaction((e) => {
                        let t = e.transaction([iq], 'readwrite').objectStore(iq).index('uid');
                        return t.count(this.uid).then((e) => {
                            if (e <= 30) return Promise.resolve();
                            let i = e - 30,
                                n = 0,
                                a = (e) =>
                                    !e || n >= i
                                        ? Promise.resolve()
                                        : (n++,
                                          e
                                              .delete()
                                              .then(() => e.continue())
                                              .then(a));
                            return t.openCursor(this.uid).then(a);
                        });
                    }).catch(iz.A);
                }
                constructor(e) {
                    (super({
                        dbName: 'music_words',
                        dbVersion: 2,
                        onUpgrade: (e) => {
                            (e.objectStoreNames.contains(iK) || e.createObjectStore(iK, { keyPath: ['uid', 'cardId'] }).createIndex('uid', 'uid', { unique: !1 }),
                                e.objectStoreNames.contains(iq) ||
                                    e.createObjectStore(iq, { keyPath: ['uid', 'cardId', 'bigCardId'] }).createIndex('uid', 'uid', { unique: !1 }));
                        },
                    }),
                        (0, iU._)(this, 'uid', void 0),
                        (this.uid = e));
                }
            }
            var iG = i(12989),
                iY = i(86562),
                i$ = i(25266),
                iZ = i(45477),
                iQ = i(75582),
                iJ = i(90357);
            let i0 = (e) => {
                let { card: t, onClose: i } = e,
                    { notify: n } = (0, iQ.l)(),
                    [a, r] = (0, b.useState)(!1),
                    [o, s] = (0, b.useState)(null),
                    { formatMessage: l } = (0, v.A)(),
                    d = (0, f.c)((e) => {
                        (s(e), setTimeout(() => s(null), 3e3));
                    }),
                    u = (0, f.c)(async (e, o) => {
                        if (t && !a) {
                            r(!0);
                            try {
                                (await t.sendFeedback(e), i(), o && d(o));
                            } catch (e) {
                                n((0, c.jsx)(iJ.h, { error: l({ id: 'error-messages.error-during-action' }) }), { containerId: iZ.u.ERROR });
                            } finally {
                                r(!1);
                            }
                        }
                    });
                return {
                    handleLike: (0, f.c)(async () => {
                        (null == t ? void 0 : t.isLiked) ? await u(i$.a.NEUTRAL) : await u(i$.a.LIKE, l({ id: 'words.like-feedback' }));
                    }),
                    handleDislike: (0, f.c)(async () => {
                        await u(i$.a.DISLIKE, l({ id: 'words.dislike-feedback' }));
                    }),
                    feedbackMessage: o,
                };
            };
            var i1 = i(24372),
                i2 = i.n(i1);
            function i8() {
                return (i8 = Object.assign
                    ? Object.assign.bind()
                    : function (e) {
                          for (var t = 1; t < arguments.length; t++) {
                              var i = arguments[t];
                              for (var n in i) ({}).hasOwnProperty.call(i, n) && (e[n] = i[n]);
                          }
                          return e;
                      }).apply(null, arguments);
            }
            let i5 = function (e) {
                return b.createElement(
                    'svg',
                    i8({ viewBox: '0 0 20 20', fill: 'none', xmlns: 'http://www.w3.org/2000/svg' }, e),
                    n ||
                        (n = b.createElement('path', {
                            d: 'M10.0002 0.3125C7.25741 0.3125 4.69896 2.90254 2.43499 6.67723C0.171015 10.4519 -0.760012 14.016 0.707594 16.2922C2.17517 18.5683 5.69374 19.6874 9.99984 19.6875L10.0002 19.6875C14.3063 19.6874 17.8248 18.5683 19.2924 16.2922C20.76 14.016 19.829 10.4519 17.565 6.67723C15.3011 2.90269 12.7429 0.3125 10.0002 0.3125Z',
                            fill: 'currentColor',
                        })),
                );
            };
            function i7() {
                return (i7 = Object.assign
                    ? Object.assign.bind()
                    : function (e) {
                          for (var t = 1; t < arguments.length; t++) {
                              var i = arguments[t];
                              for (var n in i) ({}).hasOwnProperty.call(i, n) && (e[n] = i[n]);
                          }
                          return e;
                      }).apply(null, arguments);
            }
            let i6 = function (e) {
                return b.createElement(
                    'svg',
                    i7({ width: 28, height: 28, viewBox: '0 0 28 28', fill: 'none', xmlns: 'http://www.w3.org/2000/svg' }, e),
                    a ||
                        (a = b.createElement('path', {
                            fillRule: 'evenodd',
                            clipRule: 'evenodd',
                            d: 'M9.42032 25.4019C9.14037 21.0934 5.66809 17.6882 1.42578 17.6882V16.5741C5.8511 16.5741 9.43853 12.8687 9.43853 8.29785H10.5171C10.5171 12.8687 14.1045 16.5741 18.5299 16.5741V17.6882C14.2876 17.6882 10.8153 21.0934 10.5353 25.4019H9.42032Z',
                            fill: 'currentColor',
                        })),
                    r ||
                        (r = b.createElement('path', {
                            d: 'M19.8267 3.83H21.4167L23.9567 11H22.7067L22.0467 9.12H19.0267L18.3667 11H17.2967L19.8267 3.83ZM21.6767 8.08L20.5367 4.85L19.3967 8.08H21.6767ZM27.0991 3.83V11H25.8891V3.83H27.0991Z',
                            fill: 'currentColor',
                        })),
                );
            };
            function i9() {
                return (i9 = Object.assign
                    ? Object.assign.bind()
                    : function (e) {
                          for (var t = 1; t < arguments.length; t++) {
                              var i = arguments[t];
                              for (var n in i) ({}).hasOwnProperty.call(i, n) && (e[n] = i[n]);
                          }
                          return e;
                      }).apply(null, arguments);
            }
            let i4 = function (e) {
                return b.createElement(
                    'svg',
                    i9({ viewBox: '0 0 12 12', fill: 'none', xmlns: 'http://www.w3.org/2000/svg' }, e),
                    o || (o = b.createElement('path', { d: 'M6 0C6 3.31 3.31 6 0 6C3.31 6 6 8.69 6 12C6 8.69 8.69 6 12 6C8.69 6 6 3.31 6 0Z', fill: 'currentColor' })),
                );
            };
            function i3() {
                return (i3 = Object.assign
                    ? Object.assign.bind()
                    : function (e) {
                          for (var t = 1; t < arguments.length; t++) {
                              var i = arguments[t];
                              for (var n in i) ({}).hasOwnProperty.call(i, n) && (e[n] = i[n]);
                          }
                          return e;
                      }).apply(null, arguments);
            }
            let ne = function (e) {
                    return b.createElement(
                        'svg',
                        i3({ width: 28, height: 28, viewBox: '0 0 28 28', fill: 'none', xmlns: 'http://www.w3.org/2000/svg' }, e),
                        s ||
                            (s = b.createElement('path', {
                                fillRule: 'evenodd',
                                clipRule: 'evenodd',
                                d: 'M9.42032 25.4029C9.14037 21.0944 5.66809 17.6891 1.42578 17.6891V16.5751C5.8511 16.5751 9.43853 12.8697 9.43853 8.29883H10.5171C10.5171 12.8697 14.1045 16.5751 18.5299 16.5751V17.6891C14.2876 17.6891 10.8153 21.0944 10.5353 25.4029H9.42032Z',
                                fill: 'currentColor',
                            })),
                        l ||
                            (l = b.createElement('path', {
                                fillRule: 'evenodd',
                                clipRule: 'evenodd',
                                d: 'M22.4961 12.0999C22.3406 9.70631 20.4115 7.81449 18.0547 7.81449V7.19557C20.5132 7.19557 22.5062 5.13701 22.5062 2.59766H23.1054C23.1054 5.13701 25.0984 7.19557 27.5569 7.19557V7.81449C25.2001 7.81449 23.2711 9.70631 23.1155 12.0999H22.4961Z',
                                fill: 'currentColor',
                            })),
                    );
                },
                nt = (0, u.PA)((e) => {
                    let { className: t, dimmed: i, isFact: n } = e,
                        { experiments: a } = (0, F.g)(),
                        r = a.checkExperiment(U.z.WebNextWaveScreenWordsInWave, 'on_with_onyx'),
                        o = a.checkExperiment(U.z.WebNextWaveScreenWordsInWave, 'on'),
                        s = r && i,
                        l = (0, y.L)(() =>
                            r
                                ? (0, c.jsx)(i5, { className: (0, d.$)(i2().icon, i2().icon_okniks) })
                                : o
                                  ? n && !i
                                      ? (0, c.jsx)(i6, { className: (0, d.$)(i2().icon, i2().icon_sparkles) })
                                      : (0, c.jsx)(ne, { className: (0, d.$)(i2().icon, i2().icon_sparkles) })
                                  : void 0,
                        );
                    return (0, c.jsxs)('div', {
                        className: (0, d.$)(i2().root, { [i2().root_dimmed]: i }, t),
                        'aria-hidden': !0,
                        'data-test-id': h.Kq.words.WORDS_AI_BADGE,
                        children: [
                            (0, c.jsx)(C._V, {
                                src: 'avatars.mds.yandex.net/get-music-misc/2413828/img.69c13075ab25d7410604f669/%%',
                                size: 200,
                                withAvatarReplace: !0,
                                withLoadingIndicator: !1,
                                className: i2().glow,
                            }),
                            l,
                            s &&
                                (0, c.jsxs)('div', {
                                    className: i2().sparkles,
                                    children: [
                                        (0, c.jsx)(i4, { className: i2().sparkle }),
                                        (0, c.jsx)(i4, { className: i2().sparkle }),
                                        (0, c.jsx)(i4, { className: i2().sparkle }),
                                        (0, c.jsx)(i4, { className: i2().sparkle }),
                                    ],
                                }),
                        ],
                    });
                });
            var ni = i(15248),
                nn = i.n(ni);
            let na = (e) => {
                let { children: t } = e;
                return (0, c.jsx)('div', {
                    className: nn().root,
                    children: (0, c.jsx)(T.HL, { variant: 'span', type: 'text', size: 'l', weight: 'medium', className: nn().text, children: t }),
                });
            };
            var nr = i(30480),
                no = i.n(nr),
                ns = i(84051);
            let nl = (e) => {
                    let { url: t, title: i, prevTitle: n, className: a, analyticObjectId: r } = e,
                        o = (0, iG.D)(),
                        s = (0, tm.N)();
                    (0, b.useEffect)(() => {
                        n.current !== i && ((n.current = i), o(!0, ''));
                    }, [n, o, i]);
                    let l = (0, f.c)((e) => {
                        (e.stopPropagation(), s({ to: e2.AppScreen.Link, deepLink: t, objectId: r, objectPosY: 1 }));
                    });
                    return (0, c.jsx)(tv.N, {
                        href: t,
                        className: a,
                        onClick: l,
                        onKeyDown: l,
                        'data-test-id': h.Kq.words.WORDS_CARD_ACTION,
                        children: (0, c.jsx)(T.HL, { variant: 'span', type: 'text', size: 'l', weight: 'medium', children: i }),
                    });
                },
                nc = (e) => {
                    let { actionType: t, onClick: i, children: n, ...a } = e,
                        r = (0, te.m)(),
                        o = (0, f.c)((e) => {
                            (r({ actionType: t }), null == i || i(e));
                        });
                    return (0, c.jsx)(A.$, { onClick: o, ...a, children: n });
                },
                nd = (e) => {
                    let { url: t, className: i, children: n } = e,
                        a = (0, tm.N)(),
                        r = (0, f.c)(() => {
                            a({ to: e2.AppScreen.Link, deepLink: t });
                        });
                    return (0, c.jsx)(tv.N, { href: t, className: i, onClick: r, 'data-test-id': h.Kq.words.WORDS_CARD_LINK, children: n });
                };
            var nu = i(29025),
                nm = i.n(nu);
            let nb = (e) => {
                let { className: t } = e;
                return (0, c.jsx)('div', {
                    className: (0, d.$)(nm().root, t),
                    'data-test-id': h.Kq.words.WORDS_CARD_POPOVER_DISCLAIMER,
                    children: (0, c.jsx)(T.HL, {
                        variant: 'div',
                        type: 'text',
                        size: 's',
                        weight: 'medium',
                        className: nm().description,
                        'data-test-id': h.Kq.words.WORDS_CARD_POPOVER_DISCLAIMER_AI_TEXT,
                        children: (0, c.jsx)(_.A, { id: 'words.ai-description' }),
                    }),
                });
            };
            var np = i(32496),
                nv = i(37875),
                n_ = i.n(nv);
            let nh = (e) => {
                    let { isActive: t } = e;
                    return (0, c.jsxs)('div', {
                        className: n_().root,
                        'aria-busy': t,
                        'aria-live': t ? 'polite' : 'off',
                        children: [
                            (0, c.jsxs)('div', {
                                className: n_().topGroup,
                                children: [
                                    (0, c.jsx)(np.n, { isActive: t, className: n_().line, textClassName: n_().topLinePrimary }),
                                    (0, c.jsx)(np.n, { isActive: t, className: n_().line, textClassName: n_().topLineSecondary }),
                                ],
                            }),
                            (0, c.jsx)(np.n, { isActive: t, className: n_().main, textClassName: n_().mainLine }),
                            (0, c.jsx)(np.n, { isActive: t, className: n_().bottom, textClassName: n_().bottomLine }),
                        ],
                    });
                },
                ng = (e) => {
                    let { text: t, forwardRef: i } = e,
                        n = (0, iG.D)();
                    return (
                        (0, b.useEffect)(() => {
                            n(!0, '');
                        }, []),
                        (0, c.jsx)(T.HL, { ref: i, variant: 'div', className: no().message, 'data-test-id': h.Kq.words.WORDS_CARD_FULLSCREEN_MESSAGE, children: t })
                    );
                },
                nf = (0, b.forwardRef)((e, t) => (0, c.jsx)(ng, { forwardRef: t, ...e })),
                nx = (0, u.PA)((e) => {
                    var t, i;
                    let { card: n, feedbackMessage: a, onLike: r, onDislike: o, onClose: s, onScreenClosed: l } = e,
                        { words: u } = (0, F.g)(),
                        { formatMessage: m } = (0, v.A)(),
                        p = (0, b.useRef)(null),
                        g = null != a ? a : null == (t = u.activeBigCard) ? void 0 : t.text,
                        x = null != (i = u.activeBigCardId) ? i : '',
                        j = (0, b.useRef)(null),
                        S = (0, b.useRef)(null),
                        [k, E] = (0, b.useState)(!1),
                        { pageEntityId: P } = (0, R.$)(),
                        I = (0, ns.l)({ mainObjectType: e2.DomainObjectType.Fact }),
                        N = (0, y.L)(() => {
                            var e, t, i;
                            return (null == (t = u.activeBigCard) || null == (e = t.actions) ? void 0 : e.length)
                                ? u.activeBigCard.actions
                                : null != (i = null == n ? void 0 : n.actions)
                                  ? i
                                  : [];
                        });
                    (0, b.useEffect)(
                        () => (
                            u.modal.isOpened && P && I(!0),
                            () => {
                                (I(!1), l());
                            }
                        ),
                        [l, P, I, u.modal.isOpened],
                    );
                    let w = (0, f.c)(() => {
                            s();
                        }),
                        O = (0, f.c)((e) => {
                            e.stopPropagation();
                        }),
                        M = (0, f.c)(() => {
                            let e = j.current;
                            if (!e) return void E(!1);
                            E(e.scrollHeight > e.clientHeight);
                        }),
                        B = (0, f.c)((e) => {
                            var t;
                            if (((j.current = e), null == (t = S.current) || t.disconnect(), (S.current = null), !e)) return void E(!1);
                            M();
                            let i = new ResizeObserver(M);
                            (i.observe(e), (S.current = i));
                        }),
                        D = (0, y.L)(() =>
                            u.isShimmerVisible
                                ? (0, c.jsx)('div', { className: no().content, onClick: O, children: (0, c.jsx)(nh, { isActive: u.isShimmerActive }) })
                                : (0, c.jsxs)('div', {
                                      className: no().content,
                                      onClick: O,
                                      children: [
                                          (0, c.jsx)('div', {
                                              className: (0, d.$)(no().messageScroll, { [no().messageScroll_scrollable]: k }),
                                              children: (0, c.jsx)(iM.B, {
                                                  objectType: e2.DomainObjectType.BigFact,
                                                  objectId: x,
                                                  objectPosX: 1,
                                                  objectPosY: 1,
                                                  objectsCount: 1,
                                                  children: (0, c.jsx)(nf, { ref: B, text: g }),
                                              }),
                                          }),
                                          (0, c.jsxs)('div', {
                                              className: no().actions,
                                              children: [
                                                  (null == n ? void 0 : n.action) &&
                                                      n.action.url &&
                                                      (0, c.jsx)(iM.B, {
                                                          objectType: e2.DomainObjectType.BigFact,
                                                          objectId: x,
                                                          objectPosX: 1,
                                                          objectPosY: 1,
                                                          objectsCount: 1,
                                                          children: (0, c.jsx)(nl, {
                                                              url: n.action.url,
                                                              title: n.action.title,
                                                              prevTitle: p,
                                                              className: no().primaryAction,
                                                              analyticObjectId: x,
                                                          }),
                                                      }),
                                                  N.length > 0 &&
                                                      N.map((e, t) =>
                                                          (0, c.jsx)(
                                                              iM.B,
                                                              {
                                                                  objectType: e2.DomainObjectType.Link,
                                                                  objectId: x,
                                                                  objectPosX: t + 1,
                                                                  objectPosY: 1,
                                                                  objectsCount: N.length,
                                                                  children: (0, c.jsxs)(nd, {
                                                                      url: e.url,
                                                                      className: (0, d.$)(no().sourceItem, { [no().sourceItem_withoutIcon]: !e.faviconUrl }),
                                                                      children: [
                                                                          e.faviconUrl &&
                                                                              (0, c.jsx)(C._V, {
                                                                                  src: e.faviconUrl,
                                                                                  fit: 'cover',
                                                                                  'aria-hidden': !0,
                                                                                  className: no().sourceIcon,
                                                                                  'data-test-id': h.Kq.words.WORDS_CARD_LINK_SOURCE_ICON,
                                                                              }),
                                                                          (0, c.jsx)(T.HL, {
                                                                              variant: 'span',
                                                                              type: 'text',
                                                                              size: 'l',
                                                                              weight: 'medium',
                                                                              lineClamp: 1,
                                                                              className: no().actionText,
                                                                              'data-test-id': h.Kq.words.WORDS_CARD_LINK_SOURCE_TEXT,
                                                                              children: e.title,
                                                                          }),
                                                                      ],
                                                                  }),
                                                              },
                                                              e.url,
                                                          ),
                                                      ),
                                              ],
                                          }),
                                          n &&
                                              (0, c.jsx)(iM.B, {
                                                  objectType: e2.DomainObjectType.BigFact,
                                                  objectId: x,
                                                  objectsCount: 2,
                                                  objectPosX: 1,
                                                  objectPosY: 1,
                                                  children: (0, c.jsxs)('div', {
                                                      className: no().feedback,
                                                      children: [
                                                          (0, c.jsxs)(nc, {
                                                              actionType: n.isLiked ? e2.ActionType.Unlike : e2.ActionType.Like,
                                                              variant: 'text',
                                                              withRipple: !1,
                                                              className: (0, d.$)(no().feedbackButton, { [no().feedbackButton_active]: n.isLiked }),
                                                              onClick: r,
                                                              'data-test-id': h.Kq.words.WORDS_CARD_FEEDBACK_BUTTON_THUMBS_UP,
                                                              children: [
                                                                  (0, c.jsx)(q.I, {
                                                                      variant: 'thumbUp',
                                                                      size: 'xxs',
                                                                      'data-test-id': h.Kq.words.WORDS_CARD_FEEDBACK_BUTTON_THUMBS_UP_ICON,
                                                                  }),
                                                                  (0, c.jsx)(T.HL, {
                                                                      variant: 'span',
                                                                      type: 'text',
                                                                      size: 'l',
                                                                      weight: 'medium',
                                                                      'data-test-id': h.Kq.words.WORDS_CARD_FEEDBACK_BUTTON_THUMBS_UP_TEXT,
                                                                      children: (0, c.jsx)(_.A, { id: 'words.like' }),
                                                                  }),
                                                              ],
                                                          }),
                                                          (0, c.jsx)('div', { className: no().feedbackDivider }),
                                                          (0, c.jsxs)(nc, {
                                                              actionType: e2.ActionType.Dislike,
                                                              variant: 'text',
                                                              withRipple: !1,
                                                              className: (0, d.$)(no().feedbackButton, { [no().feedbackButton_active]: n.isDisliked }),
                                                              onClick: o,
                                                              'data-test-id': h.Kq.words.WORDS_CARD_FEEDBACK_BUTTON_THUMBS_DOWN,
                                                              children: [
                                                                  (0, c.jsx)(q.I, {
                                                                      variant: 'thumbDown',
                                                                      size: 'xxs',
                                                                      'data-test-id': h.Kq.words.WORDS_CARD_FEEDBACK_BUTTON_THUMBS_DOWN_ICON,
                                                                  }),
                                                                  (0, c.jsx)(T.HL, {
                                                                      variant: 'span',
                                                                      type: 'text',
                                                                      size: 'l',
                                                                      weight: 'medium',
                                                                      'data-test-id': h.Kq.words.WORDS_CARD_FEEDBACK_BUTTON_THUMBS_DOWN_TEXT,
                                                                      children: (0, c.jsx)(_.A, { id: 'words.dislike' }),
                                                                  }),
                                                              ],
                                                          }),
                                                      ],
                                                  }),
                                              }),
                                      ],
                                  }),
                        );
                    return (
                        (0, b.useEffect)(() => {
                            M();
                        }, [g, M]),
                        (0, c.jsxs)(c.Fragment, {
                            children: [
                                (0, c.jsx)('div', {
                                    className: no().closeButtonWrapper,
                                    children: (0, c.jsx)(A.$, {
                                        radius: 'round',
                                        color: 'secondary',
                                        size: 'm',
                                        icon: (0, c.jsx)(q.I, { variant: 'close', size: 'xs' }),
                                        onClick: s,
                                        'aria-label': m({ id: 'interface-actions.close' }),
                                        'data-test-id': h.Kq.words.WORDS_CARD_FULLSCREEN_CLOSE_BUTTON,
                                    }),
                                }),
                                (0, c.jsxs)('div', {
                                    className: no().layout,
                                    children: [
                                        (0, c.jsx)('div', {
                                            className: (0, d.$)(no().contentArea, { [no().contentArea_withMessageScroll]: k }),
                                            onClick: w,
                                            children: D,
                                        }),
                                        (null == n ? void 0 : n.isFact) && (0, c.jsx)(nb, { className: no().disclaimer }),
                                    ],
                                }),
                            ],
                        })
                    );
                }),
                ny = (0, u.PA)((e) => {
                    let { card: t, feedbackMessage: i, onLike: n, onDislike: a, onClose: r, onScreenClosed: o } = e,
                        {
                            words: s,
                            settings: { isMobile: l },
                        } = (0, F.g)(),
                        d = (0, f.c)((e) => {
                            (s.modal.onOpenChange(e), e || r());
                        });
                    return (0, c.jsx)(iP.a, {
                        className: no().root,
                        open: s.modal.isOpened,
                        onOpenChange: d,
                        onClose: r,
                        size: 'fullscreen',
                        placement: 'center',
                        showHeader: !1,
                        isMobile: l,
                        contentClassName: no().modalContent,
                        'data-test-id': h.Kq.words.WORDS_CARD_FULLSCREEN_MODAL,
                        children: (0, c.jsx)(eD.F, {
                            blockId: e2.EntityTypes.WordsInWave,
                            blockType: e2.EntityTypes.WordsInWave,
                            blockPosX: 1,
                            blockPosY: 1,
                            mainObjectType: e2.DomainObjectType.Fact,
                            mainObjectId: null == t ? void 0 : t.id,
                            children: (0, c.jsx)(nx, { card: t, feedbackMessage: i, onLike: n, onDislike: a, onClose: r, onScreenClosed: o }),
                        }),
                    });
                });
            var nA = i(4529),
                nC = i.n(nA);
            let nj = (0, u.PA)((e) => {
                let { card: t, onLike: i, onDislike: n } = e,
                    a = (0, ns.l)({ mainObjectType: e2.DomainObjectType.Fact });
                return (
                    (0, b.useEffect)(
                        () => (
                            a(!0),
                            () => {
                                a(!1);
                            }
                        ),
                        [a],
                    ),
                    (0, c.jsxs)('div', {
                        className: nC().root,
                        'data-test-id': h.Kq.words.WORDS_CARD_POPOVER_DESKTOP,
                        children: [
                            t.actions &&
                                t.actions.length > 0 &&
                                (0, c.jsxs)(c.Fragment, {
                                    children: [
                                        t.actions.map((e, i) => {
                                            var n, a;
                                            return (0, c.jsx)(
                                                eD.F,
                                                {
                                                    blockId: e2.EntityTypes.WordsInWave,
                                                    blockType: e2.EntityTypes.WordsInWave,
                                                    blockPosX: 1,
                                                    blockPosY: 1,
                                                    mainObjectType: e2.DomainObjectType.Fact,
                                                    mainObjectId: t.id,
                                                    children: (0, c.jsx)(iM.B, {
                                                        objectType: e2.DomainObjectType.Link,
                                                        objectId: e.url,
                                                        objectPosX: i + 1,
                                                        objectPosY: 1,
                                                        objectsCount: null != (a = null == (n = t.actions) ? void 0 : n.length) ? a : 0,
                                                        children: (0, c.jsxs)(nd, {
                                                            url: e.url,
                                                            className: (0, d.$)(nC().item, nC().actionItem, nC().sourceItem, {
                                                                [nC().sourceItem_withoutIcon]: !e.faviconUrl,
                                                            }),
                                                            children: [
                                                                e.faviconUrl &&
                                                                    (0, c.jsx)(C._V, {
                                                                        src: e.faviconUrl,
                                                                        fit: 'cover',
                                                                        'aria-hidden': !0,
                                                                        className: nC().sourceIcon,
                                                                        'data-test-id': h.Kq.words.WORDS_CARD_LINK_SOURCE_ICON,
                                                                    }),
                                                                (0, c.jsx)(T.HL, {
                                                                    variant: 'span',
                                                                    type: 'text',
                                                                    size: 'l',
                                                                    weight: 'medium',
                                                                    lineClamp: 1,
                                                                    'data-test-id': h.Kq.words.WORDS_CARD_LINK_SOURCE_TEXT,
                                                                    children: e.title,
                                                                }),
                                                            ],
                                                        }),
                                                    }),
                                                },
                                                e.url,
                                            );
                                        }),
                                        (0, c.jsx)('div', { className: nC().divider }),
                                    ],
                                }),
                            (0, c.jsxs)(eD.F, {
                                blockId: e2.EntityTypes.WordsInWave,
                                blockType: e2.EntityTypes.WordsInWave,
                                blockPosX: 1,
                                blockPosY: 2,
                                mainObjectType: e2.DomainObjectType.Fact,
                                mainObjectId: t.id,
                                children: [
                                    (0, c.jsx)(iM.B, {
                                        objectType: e2.DomainObjectType.Fact,
                                        objectId: t.id,
                                        objectsCount: 2,
                                        objectPosX: 1,
                                        objectPosY: 1,
                                        children: (0, c.jsxs)(nc, {
                                            actionType: t.isLiked ? e2.ActionType.Unlike : e2.ActionType.Like,
                                            variant: 'text',
                                            withHover: !1,
                                            className: (0, d.$)(nC().item, nC().actionItem, { [nC().actionItem_active]: t.isLiked }),
                                            onClick: i,
                                            'data-test-id': h.Kq.words.WORDS_CARD_FEEDBACK_BUTTON_THUMBS_UP,
                                            children: [
                                                (0, c.jsx)(q.I, { variant: 'thumbUp', size: 'xs', 'data-test-id': h.Kq.words.WORDS_CARD_FEEDBACK_BUTTON_THUMBS_UP_ICON }),
                                                (0, c.jsx)(T.HL, {
                                                    variant: 'span',
                                                    type: 'text',
                                                    size: 'l',
                                                    weight: 'medium',
                                                    'data-test-id': h.Kq.words.WORDS_CARD_FEEDBACK_BUTTON_THUMBS_UP_TEXT,
                                                    children: (0, c.jsx)(_.A, { id: 'words.like' }),
                                                }),
                                            ],
                                        }),
                                    }),
                                    (0, c.jsx)(iM.B, {
                                        objectType: e2.DomainObjectType.Fact,
                                        objectId: t.id,
                                        objectsCount: 2,
                                        objectPosX: 1,
                                        objectPosY: 2,
                                        children: (0, c.jsxs)(nc, {
                                            actionType: e2.ActionType.Dislike,
                                            variant: 'text',
                                            withHover: !1,
                                            className: (0, d.$)(nC().item, nC().actionItem, { [nC().actionItem_active]: t.isDisliked }),
                                            onClick: n,
                                            'data-test-id': h.Kq.words.WORDS_CARD_FEEDBACK_BUTTON_THUMBS_DOWN,
                                            children: [
                                                (0, c.jsx)(q.I, {
                                                    variant: 'thumbDown',
                                                    size: 'xs',
                                                    'data-test-id': h.Kq.words.WORDS_CARD_FEEDBACK_BUTTON_THUMBS_DOWN_ICON,
                                                }),
                                                (0, c.jsx)(T.HL, {
                                                    variant: 'span',
                                                    type: 'text',
                                                    size: 'l',
                                                    weight: 'medium',
                                                    'data-test-id': h.Kq.words.WORDS_CARD_FEEDBACK_BUTTON_THUMBS_DOWN_TEXT,
                                                    children: (0, c.jsx)(_.A, { id: 'words.dislike' }),
                                                }),
                                            ],
                                        }),
                                    }),
                                ],
                            }),
                            t.isFact && (0, c.jsxs)(c.Fragment, { children: [(0, c.jsx)('div', { className: nC().divider }), (0, c.jsx)(nb, {})] }),
                        ],
                    })
                );
            });
            var nS = i(13591),
                nT = i.n(nS);
            let nk = (0, u.PA)((e) => {
                let { card: t, onLike: i, onDislike: n } = e,
                    { formatMessage: a } = (0, v.A)(),
                    r = (0, ns.l)({ mainObjectType: e2.DomainObjectType.Fact }),
                    o = a({ id: 'words.like' }),
                    s = a({ id: 'words.dislike' });
                return (
                    (0, b.useEffect)(
                        () => (
                            r(!0),
                            () => {
                                r(!1);
                            }
                        ),
                        [r],
                    ),
                    (0, c.jsxs)('div', {
                        className: nT().root,
                        'data-test-id': h.Kq.words.WORDS_CARD_POPOVER_MOBILE,
                        children: [
                            (0, c.jsxs)('div', {
                                className: nT().container,
                                children: [
                                    (0, c.jsx)(T.DZ, { variant: 'div', size: 'xs', weight: 'bold', lineClamp: 5, className: nT().text, children: t.text }),
                                    t.action &&
                                        t.action.url &&
                                        (0, c.jsx)(eD.F, {
                                            blockId: e2.EntityTypes.WordsInWave,
                                            blockType: e2.EntityTypes.WordsInWave,
                                            blockPosX: 1,
                                            blockPosY: 1,
                                            mainObjectType: e2.DomainObjectType.Fact,
                                            mainObjectId: t.id,
                                            children: (0, c.jsx)(iM.B, {
                                                objectType: e2.DomainObjectType.Link,
                                                objectId: t.action.url,
                                                objectPosX: 1,
                                                objectPosY: 1,
                                                objectsCount: 1,
                                                children: (0, c.jsx)(nd, {
                                                    url: t.action.url,
                                                    className: nT().action,
                                                    children: (0, c.jsx)(T.HL, {
                                                        variant: 'span',
                                                        type: 'text',
                                                        size: 'l',
                                                        weight: 'medium',
                                                        lineClamp: 2,
                                                        children: t.action.title,
                                                    }),
                                                }),
                                            }),
                                        }),
                                    t.actions &&
                                        t.actions.length > 0 &&
                                        (0, c.jsx)('div', {
                                            className: nT().sources,
                                            children: t.actions.map((e, i) => {
                                                var n, a;
                                                return (0, c.jsx)(
                                                    eD.F,
                                                    {
                                                        blockId: e2.EntityTypes.WordsInWave,
                                                        blockType: e2.EntityTypes.WordsInWave,
                                                        blockPosX: 1,
                                                        blockPosY: 2,
                                                        mainObjectType: e2.DomainObjectType.Fact,
                                                        mainObjectId: t.id,
                                                        children: (0, c.jsx)(iM.B, {
                                                            objectType: e2.DomainObjectType.Link,
                                                            objectId: e.url,
                                                            objectPosX: i + 1,
                                                            objectPosY: 1,
                                                            objectsCount: null != (a = null == (n = t.actions) ? void 0 : n.length) ? a : 0,
                                                            children: (0, c.jsxs)(nd, {
                                                                url: e.url,
                                                                className: (0, d.$)(nT().sourceItem, { [nT().sourceItem_withoutIcon]: !e.faviconUrl }),
                                                                children: [
                                                                    e.faviconUrl &&
                                                                        (0, c.jsx)(C._V, {
                                                                            src: e.faviconUrl,
                                                                            fit: 'cover',
                                                                            'aria-hidden': !0,
                                                                            className: nT().sourceIcon,
                                                                            'data-test-id': h.Kq.words.WORDS_CARD_LINK_SOURCE_ICON,
                                                                        }),
                                                                    (0, c.jsx)(T.HL, {
                                                                        variant: 'span',
                                                                        type: 'text',
                                                                        size: 'm',
                                                                        weight: 'medium',
                                                                        lineClamp: 1,
                                                                        'data-test-id': h.Kq.words.WORDS_CARD_LINK_SOURCE_TEXT,
                                                                        children: e.title,
                                                                    }),
                                                                ],
                                                            }),
                                                        }),
                                                    },
                                                    e.url,
                                                );
                                            }),
                                        }),
                                ],
                            }),
                            (0, c.jsxs)('div', {
                                children: [
                                    (0, c.jsxs)('div', {
                                        className: nT().feedbackSection,
                                        children: [
                                            (0, c.jsx)(T.HL, {
                                                variant: 'div',
                                                type: 'text',
                                                size: 'l',
                                                weight: 'medium',
                                                className: nT().feedbackQuestion,
                                                children: (0, c.jsx)(_.A, { id: 'words.show-more' }),
                                            }),
                                            (0, c.jsx)('div', {
                                                className: nT().feedbackButtons,
                                                children: (0, c.jsxs)(eD.F, {
                                                    blockId: e2.EntityTypes.WordsInWave,
                                                    blockType: e2.EntityTypes.WordsInWave,
                                                    blockPosX: 1,
                                                    blockPosY: 3,
                                                    mainObjectType: e2.DomainObjectType.Fact,
                                                    mainObjectId: t.id,
                                                    children: [
                                                        (0, c.jsx)(iM.B, {
                                                            objectType: e2.DomainObjectType.Fact,
                                                            objectId: t.id,
                                                            objectsCount: 2,
                                                            objectPosX: 1,
                                                            objectPosY: 1,
                                                            children: (0, c.jsx)(nc, {
                                                                actionType: t.isLiked ? e2.ActionType.Unlike : e2.ActionType.Like,
                                                                variant: 'text',
                                                                color: 'secondary',
                                                                size: 'l',
                                                                radius: 'round',
                                                                withRipple: !1,
                                                                className: (0, d.$)(nT().feedbackButton, { [nT().feedbackButton_active]: t.isLiked }),
                                                                'aria-label': o,
                                                                onClick: i,
                                                                'data-test-id': h.Kq.words.WORDS_CARD_FEEDBACK_BUTTON_THUMBS_UP,
                                                                children: (0, c.jsx)(q.I, {
                                                                    variant: 'thumbUp',
                                                                    size: 'xs',
                                                                    'data-test-id': h.Kq.words.WORDS_CARD_FEEDBACK_BUTTON_THUMBS_UP_ICON,
                                                                }),
                                                            }),
                                                        }),
                                                        (0, c.jsx)(iM.B, {
                                                            objectType: e2.DomainObjectType.Fact,
                                                            objectId: t.id,
                                                            objectsCount: 2,
                                                            objectPosX: 1,
                                                            objectPosY: 2,
                                                            children: (0, c.jsx)(nc, {
                                                                actionType: e2.ActionType.Dislike,
                                                                variant: 'text',
                                                                size: 'l',
                                                                radius: 'round',
                                                                withRipple: !1,
                                                                className: (0, d.$)(nT().feedbackButton, { [nT().feedbackButton_active]: t.isDisliked }),
                                                                'aria-label': s,
                                                                onClick: n,
                                                                'data-test-id': h.Kq.words.WORDS_CARD_FEEDBACK_BUTTON_THUMBS_DOWN,
                                                                children: (0, c.jsx)(q.I, {
                                                                    variant: 'thumbDown',
                                                                    size: 'xs',
                                                                    'data-test-id': h.Kq.words.WORDS_CARD_FEEDBACK_BUTTON_THUMBS_DOWN_ICON,
                                                                }),
                                                            }),
                                                        }),
                                                    ],
                                                }),
                                            }),
                                        ],
                                    }),
                                    t.isFact && (0, c.jsx)(nb, {}),
                                ],
                            }),
                        ],
                    })
                );
            });
            var nE = i(95180),
                nP = i.n(nE);
            let nI = (e) => {
                    let { text: t, prevText: i, className: n } = e,
                        a = (0, iG.D)();
                    return (
                        (0, b.useEffect)(() => {
                            i.current !== t && ((i.current = t), a(!0, ''));
                        }, [i, a, t]),
                        (0, c.jsx)(T.HL, {
                            variant: 'span',
                            type: 'text',
                            size: 'l',
                            weight: 'medium',
                            lineClamp: 3,
                            className: n,
                            'data-test-id': h.Kq.words.WORDS_CARD_TEXT,
                            children: t,
                        })
                    );
                },
                nN = (0, u.PA)((e) => {
                    var t, i, n, a;
                    let { card: r, trackId: o, isLoading: s, className: l } = e,
                        {
                            words: u,
                            settings: { isMobile: m },
                            experiments: p,
                        } = (0, F.g)(),
                        _ = (0, tm.N)(),
                        g = (0, iG.D)(),
                        x = (0, b.useRef)(null),
                        A = (0, b.useRef)(null),
                        [C, j] = (0, b.useState)(!1),
                        [S, k] = (0, b.useState)(void 0),
                        [E, P] = (0, b.useState)(),
                        [I, N] = (0, b.useState)(),
                        w = (0, b.useRef)(null),
                        O = ((e) => {
                            let { formatMessage: t } = (0, v.A)(),
                                i = (0, b.useMemo)(
                                    () => [
                                        t({ id: 'words.loading-phrase-collecting-interesting' }),
                                        t({ id: 'words.loading-phrase-tuning' }),
                                        t({ id: 'words.loading-phrase-catching' }),
                                        t({ id: 'words.loading-phrase-reading' }),
                                        t({ id: 'words.loading-phrase-studying' }),
                                    ],
                                    [t],
                                ),
                                n = (0, b.useRef)(0),
                                [a, r] = (0, b.useState)(() => {
                                    var t;
                                    if (!e) return null;
                                    let a = Math.floor(Math.random() * i.length);
                                    return ((n.current = a), null != (t = i[a]) ? t : null);
                                }),
                                o = (0, b.useRef)(e),
                                s = (0, b.useRef)(null),
                                l = (0, b.useRef)(e);
                            if (((o.current = e), e && !l.current)) {
                                var c;
                                let e = Math.floor(Math.random() * i.length);
                                ((n.current = e), r(null != (c = i[e]) ? c : null));
                            }
                            return (
                                (l.current = e),
                                (0, b.useEffect)(() => {
                                    if (null !== a && !s.current)
                                        return (
                                            (s.current = setTimeout(() => {
                                                if (((s.current = null), o.current)) {
                                                    var e;
                                                    ((n.current = (n.current + 1) % i.length), r(null != (e = i[n.current]) ? e : i[0]));
                                                    return;
                                                }
                                                r(null);
                                            }, 2500)),
                                            () => {
                                                s.current && (clearTimeout(s.current), (s.current = null));
                                            }
                                        );
                                }, [i, a]),
                                a
                            );
                        })(!!s),
                        M = null !== O,
                        B = p.checkExperiment(U.z.WebNextWaveScreenWordsInWave, 'on'),
                        R = p.checkExperiment(U.z.WebNextWaveScreenWordsInWaveBigReplica, 'on'),
                        D = R && !!(null == r ? void 0 : r.hasBigCard),
                        V = R && !!((null == r ? void 0 : r.hasBigCard) || (null == E ? void 0 : E.hasBigCard)),
                        L = p.checkExperiment(U.z.WebNextWaveScreenWordsInWaveDirectLinks, 'on') && !!(null == r ? void 0 : r.isInformer),
                        W = D || L,
                        z = null == (t = u.activeBigCard) ? void 0 : t.id,
                        H = (0, f.c)(() => {
                            j(!1);
                        }),
                        K = (0, f.c)(() => {
                            u.modal.close();
                        }),
                        q = (0, f.c)(() => {
                            (P(void 0), N(void 0));
                        });
                    ((0, b.useEffect)(() => {
                        u.modal.isOpened && u.bigCardLoadingState.isRejected && K();
                    }, [K, u.bigCardLoadingState.isRejected, u.modal.isOpened]),
                        (0, b.useEffect)(() => {
                            u.modal.isOpened && u.bigCardLoadingState.isResolved && E && I && z === I && u.markBigCardViewed(E.id, I);
                        }, [z, I, E, u, u.bigCardLoadingState.isResolved, u.modal.isOpened]));
                    let { handleLike: X, handleDislike: G, feedbackMessage: Y } = i0({ card: r, onClose: H }),
                        { handleLike: $, handleDislike: Z, feedbackMessage: Q } = i0({ card: E, onClose: K }),
                        J = !(r && (!(null == r ? void 0 : r.isDisliked) || Y || Q)) && !M,
                        ee = !r || (null == r ? void 0 : r.isDisliked) || !!(Y || Q) || M,
                        et = M ? 'loading' : 'content-'.concat(null == r ? void 0 : r.id);
                    (0, b.useEffect)(() => {
                        r || s || g(!0, '');
                    }, [r, s, g]);
                    let ei = (0, f.c)((e) => {
                            (!e || !ee) &&
                                ((e && L) ||
                                    (e && m && w.current && k(window.innerHeight - w.current.getBoundingClientRect().top + 12),
                                    e && _({ to: e2.AppScreen.FactScreen }),
                                    j(e)));
                        }),
                        en = (0, eU.Z)(null != (n = null == r || null == (i = r.action) ? void 0 : i.url) ? n : ''),
                        ea = (0, f.c)(() => {
                            var e;
                            (null == r || null == (e = r.action) ? void 0 : e.url) && (_({ to: e2.AppScreen.Link, deepLink: r.action.url }), en());
                        }),
                        er = (0, f.c)(() => {
                            if (!ee && r) {
                                if (r.isInformer) return void ea();
                                if (D) {
                                    var e;
                                    let t = Array.from(null != (e = r.bigCardIds) ? e : [])[0];
                                    if (!t) return;
                                    (N(t), P(r), _({ to: e2.AppScreen.FactScreen }), u.modal.open(), u.loadBigCard(t, o, r.id));
                                }
                            }
                        }),
                        eo = (0, f.c)((e) => {
                            e.target === e.currentTarget && (e.code === iY.v.SPACE || e.code === iY.v.ENTER) && (e.preventDefault(), er());
                        }),
                        es = (0, y.L)(() => {
                            var e, t;
                            if (M) return (0, c.jsx)(na, { children: O });
                            if (Y || Q)
                                return (0, c.jsx)(T.HL, {
                                    variant: 'span',
                                    type: 'text',
                                    size: 'l',
                                    weight: 'medium',
                                    lineClamp: 3,
                                    className: nP().text,
                                    'data-test-id': h.Kq.words.WORDS_CARD_FEEDBACK_MESSAGE,
                                    children: Y || Q,
                                });
                            if (null == r ? void 0 : r.isDisliked) return;
                            let i = iR(null == r ? void 0 : r.analyticObjectType);
                            return (0, c.jsxs)(c.Fragment, {
                                children: [
                                    (null == r ? void 0 : r.text) &&
                                        (0, c.jsx)(
                                            iM.B,
                                            {
                                                objectType: null != i ? i : e2.DomainObjectType.Fact,
                                                objectId: null != (e = null == r ? void 0 : r.analyticObjectId) ? e : '',
                                                objectPosX: 1,
                                                objectPosY: 1,
                                                objectsCount: (null == r ? void 0 : r.action) ? 2 : 1,
                                                children: (0, c.jsx)(nI, { text: r.text, prevText: x, className: nP().text }, et),
                                            },
                                            null == r ? void 0 : r.id,
                                        ),
                                    (null == r ? void 0 : r.action) &&
                                        r.action.url &&
                                        (0, c.jsx)(
                                            iM.B,
                                            {
                                                objectType: null != i ? i : e2.DomainObjectType.Link,
                                                objectId: r.action.url,
                                                objectPosX: 1,
                                                objectPosY: 2,
                                                objectsCount: (null == r ? void 0 : r.action) ? 2 : 1,
                                                children: (0, c.jsx)(
                                                    nl,
                                                    {
                                                        url: r.action.url,
                                                        title: r.action.title,
                                                        prevTitle: A,
                                                        className: nP().action,
                                                        analyticObjectId: null != (t = null == r ? void 0 : r.analyticObjectId) ? t : '',
                                                    },
                                                    ''.concat(et, '-action'),
                                                ),
                                            },
                                            r.action.url,
                                        ),
                                ],
                            });
                        }),
                        ec = (0, y.L)(() => {
                            if (m && S) return { '--words-popover-height': ''.concat(S, 'px') };
                        }),
                        ed = m ? nk : nj,
                        eu = (0, c.jsxs)('div', {
                            className: (0, d.$)(nP().root, { [nP().root_disabled]: ee }, l),
                            role: 'button',
                            tabIndex: 0,
                            onClick: W ? er : void 0,
                            onKeyDown: W ? eo : void 0,
                            'data-test-id': h.Kq.words.WORDS_CARD,
                            children: [
                                (0, c.jsx)(nt, {
                                    className: (0, d.$)(nP().badge, { [nP().badge_centered]: J, [nP().badge_centeredSparkles]: J && B, [nP().badge_loading]: M }),
                                    dimmed: J,
                                    isFact: (null == r ? void 0 : r.isFact) && !ee,
                                }),
                                (0, c.jsx)('div', { className: (0, d.$)(nP().content, { [nP().content_hidden]: J }), ref: w, children: es }),
                            ],
                        });
                    return V
                        ? (0, c.jsxs)(c.Fragment, {
                              children: [
                                  eu,
                                  (0, c.jsx)(eL.n, {
                                      pageId: eR._Q.FACT_SCREEN,
                                      pageEntityId: null != (a = null == E ? void 0 : E.id) ? a : '',
                                      pageStyle: e2.PageStyles.Fullscreen,
                                      pagePlacement: e2.PagePlacements.Fullscreen,
                                      children: (0, c.jsx)(ny, { card: E, feedbackMessage: Q, onLike: $, onDislike: Z, onClose: K, onScreenClosed: q }),
                                  }),
                              ],
                          })
                        : (0, c.jsxs)(el.AM, {
                              isMobile: m,
                              placement: m ? 'bottom' : 'top',
                              open: C,
                              onOpenChange: ei,
                              positionElement: m ? void 0 : w.current,
                              offsetOptions: m ? void 0 : 12,
                              style: ec,
                              children: [
                                  eu,
                                  (0, c.jsx)(el.hl, {
                                      className: nP().popoverContent,
                                      children: (0, c.jsx)(eL.n, {
                                          pageId: eR._Q.FACT_SCREEN,
                                          pageEntityId: null == r ? void 0 : r.id,
                                          pageStyle: m ? e2.PageStyles.Sheet : e2.PageStyles.Popup,
                                          pagePlacement: m ? e2.PagePlacements.Bottom : e2.PagePlacements.Floating,
                                          children: r && (0, c.jsx)(ed, { card: r, onLike: X, onDislike: G }),
                                      }),
                                  }),
                              ],
                          });
                }),
                nw = (0, u.PA)((e) => {
                    var t, i;
                    let { className: n, trackId: a } = e,
                        { words: r } = (0, F.g)(),
                        o = (() => {
                            let e = (0, L.N)();
                            return (0, b.useMemo)(() => {
                                let t = e.get(V.WA),
                                    i = null == t ? void 0 : t.getPassportUid();
                                if (!i) return;
                                let n = new iX(String(i));
                                return (n.openDatabase(), n);
                            }, [e]);
                        })();
                    (() => {
                        let e = (0, tr.e)(),
                            { words: t, sonataState: i } = (0, F.g)();
                        (0, b.useEffect)(() => {
                            if (!e) return;
                            let n = e.state.queueState,
                                a = () => {
                                    let e = n.entityList.value,
                                        t = n.order.value,
                                        i = n.index.value;
                                    return e && null != i
                                        ? ((e, t, i) => ({
                                              trackIds: Array.from({ length: t.length > 0 ? t.length : e.length }, (i, n) => {
                                                  var a, r, o, s, l;
                                                  let c =
                                                      null == (s = e[t.length > 0 && null != (l = t[n]) ? l : n]) ||
                                                      null == (o = s.entity) ||
                                                      null == (r = o.data) ||
                                                      null == (a = r.meta)
                                                          ? void 0
                                                          : a.id;
                                                  return void 0 !== c ? String(c) : void 0;
                                              }),
                                              currentIndex: i,
                                          }))(e, t || [], i)
                                        : null;
                                },
                                r = n.currentEntity.onChange((e) => {
                                    ((e) => {
                                        if (i.isGenerativeContext) return;
                                        let n = a();
                                        if (!n) return;
                                        let r = iW({ queueState: n, backwardSize: 3, forwardSize: 17 });
                                        t.evict(new Set(r));
                                        let o =
                                                e === iV.So.MOVE_FORWARD ||
                                                e === iV.So.DISLIKE_MOVE_FORWARD ||
                                                e === iV.So.AUTO_MOVE_FORWARD ||
                                                e === iV.So.ERROR_MOVE_FORWARD,
                                            s = e === iV.So.MOVE_BACKWARD,
                                            l = [];
                                        (o && iF({ queueState: n, direction: 'forward', isRequested: t.isTrackRequested })
                                            ? (l = iL({ queueState: n, direction: 'forward', batchSize: 17 }))
                                            : s && iF({ queueState: n, direction: 'backward', isRequested: t.isTrackRequested })
                                              ? (l = iL({ queueState: n, direction: 'backward', batchSize: 3 }))
                                              : o || s || (l = r),
                                            l.length > 0 && t.loadCards(l));
                                    })(null == e ? void 0 : e.lastChangeMethod);
                                }),
                                o = n.entityList.onChange(() => {
                                    (() => {
                                        if (i.isGenerativeContext) return;
                                        let e = a();
                                        if (!e) return;
                                        let n = iW({ queueState: e, backwardSize: 3, forwardSize: 17 });
                                        n.length > 0 && t.loadCards(n);
                                    })();
                                });
                            return () => {
                                (null == r || r(), null == o || o());
                            };
                        }, [e, i, t]);
                    })();
                    let s = r.getCardForTrack(a);
                    if (
                        ((0, b.useEffect)(() => {
                            r.setWordsViewedStore(o);
                        }, [r, o]),
                        (0, b.useEffect)(() => {
                            s && r.markCardViewed(s.id);
                        }, [s, r]),
                        !a)
                    )
                        return null;
                    let l = String(a),
                        d = !s && r.isLoading(l),
                        u = r.isTrackResolvedWithoutCard(l) ? iD.SleepingAlice : iD.SleepTech,
                        m = !s && !d,
                        p = null != (t = iR(null == s ? void 0 : s.analyticObjectType)) ? t : e2.DomainObjectType.SleepingAlice,
                        v = null != (i = null == s ? void 0 : s.analyticObjectId) ? i : e2.DomainObjectType.SleepingAlice;
                    return (0, c.jsx)(eD.F, {
                        blockId: e2.EntityTypes.WordsInWave,
                        blockType: e2.EntityTypes.WordsInWave,
                        blockPosX: 1,
                        blockPosY: 2,
                        mainObjectType: e2.DomainObjectType.Track,
                        mainObjectId: null != a ? a : void 0,
                        displayReasonId: m ? u : void 0,
                        children: (0, c.jsx)(iM.B, {
                            objectType: p,
                            objectId: v,
                            objectPosX: 1,
                            objectPosY: (null == s ? void 0 : s.action) && s.action.url ? 2 : 1,
                            objectsCount: (null == s ? void 0 : s.action) ? 2 : 1,
                            children: (0, c.jsx)(nN, { card: s, trackId: l, isLoading: d, className: n }),
                        }),
                    });
                });
            var nO = i(66249),
                nM = i(78176),
                nB = i(49492),
                nR = i.n(nB);
            let nD = (0, u.PA)((e) => {
                let { artists: t, open: i, positionElement: n, onOpenChange: a } = e,
                    { formatMessage: r } = (0, v.A)(),
                    {
                        settings: { isMobile: o },
                    } = (0, F.g)();
                return (0, c.jsxs)(el.AM, {
                    isMobile: o,
                    placement: o ? 'bottom' : 'top',
                    open: i,
                    onOpenChange: a,
                    positionElement: o ? void 0 : n,
                    transform: o,
                    customRoleProps: { role: 'menu' },
                    children: [
                        null,
                        (0, c.jsx)(el.hl, {
                            className: nR().root,
                            'aria-label': r({ id: 'interface-actions.context-menu-artists' }),
                            'data-test-id': h.OA.artists.ARTISTS_MENU,
                            children: (0, c.jsx)('div', {
                                className: nR().menuList,
                                children: t.map((e) => (0, c.jsx)(nM.V, { artist: e, className: nR().menuItem }, e.id)),
                            }),
                        }),
                    ],
                });
            });
            var nV = i(83778),
                nL = i(71483),
                nW = i(47713),
                nF = i.n(nW),
                nU = i(41677);
            let nz = (0, u.PA)((e) => {
                let {
                        lineClamp: t,
                        isVibePaused: i,
                        isNonMusic: n,
                        isGenerative: a,
                        withLink: r,
                        hasMultipleArtists: o,
                        mainAlbum: s,
                        entityTitle: l,
                        artists: u,
                        artistsRef: m,
                        isArtistsMenuOpen: b,
                        onArtistsMenuClick: p,
                    } = e,
                    { formatMessage: _ } = (0, v.A)();
                if (i)
                    return (0, c.jsx)(T.HL, {
                        variant: 'span',
                        className: (0, d.$)(nF().text, nF().important),
                        lineClamp: 1,
                        'data-test-id': h.Xk.vibe.VIBE_DYNAMIC_TITLE_VIBE,
                        children: _({ id: 'entity-names.my-vibe' }),
                    });
                if (n && s)
                    return (0, c.jsx)(tv.N, {
                        href: s.url,
                        className: (0, d.$)(nF().text, nF().important),
                        'data-test-id': h.Xk.vibe.VIBE_DYNAMIC_TITLE_NON_MUSIC_ENTITY_TITLE,
                        children: (0, c.jsx)(T.HL, { variant: 'span', className: (0, d.$)(nF().text, nF().important), lineClamp: t, children: s.title }),
                    });
                if (a && l)
                    return (0, c.jsx)(T.HL, {
                        variant: 'span',
                        className: (0, d.$)(nF().text, nF().important),
                        lineClamp: t,
                        'data-test-id': h.Xk.vibe.VIBE_DYNAMIC_TITLE_GENERATIVE,
                        children: l,
                    });
                if (u) {
                    let e = (0, c.jsx)(nU.i, {
                        artists: u,
                        captionClassName: (0, d.$)(nF().text, nF().important),
                        linkClassName: (0, d.$)(nF().text, nF().important),
                        className: (0, d.$)(nF().text, nF().important),
                        lineClamp: t,
                        withLink: r,
                        withCustomTooltip: !1,
                        variant: 'breakWord',
                    });
                    return o
                        ? (0, c.jsx)(A.$, {
                              className: nF().button,
                              variant: 'text',
                              'aria-label': _({ id: 'interface-actions.context-menu-artists' }),
                              'aria-haspopup': 'menu',
                              'aria-expanded': b,
                              withRipple: !1,
                              onClick: p,
                              ref: m,
                              'data-test-id': h.Xk.vibe.VIBE_DYNAMIC_TITLE_MULTIPLE_ARTISTS_BUTTON,
                              children: e,
                          })
                        : e;
                }
                return null;
            });
            var nH = i(91311),
                nK = i.n(nH);
            let nq = 'vibe-freemium-block',
                nX = (0, u.PA)((e) => {
                    let { className: t } = e,
                        { user: i } = (0, F.g)(),
                        [n, a] = (0, x.d)(),
                        {
                            openPaymentWidgetModal: r,
                            isShimmerActive: o,
                            isShimmerVisible: s,
                            mainText: l,
                            mainTextA11y: u,
                            additionText: m,
                        } = (0, D.D)({ storeName: 'music', isEnabled: i.isAuthorized && !i.hasPlus, offerElement: { element: n, intersectionPropertyId: nq } }),
                        b = (0, y.L)(() =>
                            i.isAuthorized
                                ? (0, c.jsx)(H.b, {
                                      ref: a,
                                      'data-intersection-property-id': nq,
                                      mainText: l,
                                      ariaLabel: u,
                                      additionText: m,
                                      isShimmerActive: o,
                                      isShimmerVisible: s,
                                      onClick: r,
                                      className: nK().button,
                                      mainTextClassName: nK().buttonMainText,
                                      additionTextClassName: nK().buttonAdditionText,
                                      'data-test-id': h.Xk.vibe.VIBE_FREEMIUM_BUTTON,
                                  })
                                : (0, c.jsx)(K.H, {
                                      size: 'l',
                                      variant: 'default',
                                      buttonText: (0, c.jsx)(T.HL, {
                                          variant: 'span',
                                          size: 'l',
                                          children: (0, c.jsx)(_.A, { id: 'authorization.enter-and-listen-button' }),
                                      }),
                                      className: nK().button,
                                  }),
                        );
                    return (0, c.jsxs)('div', {
                        className: (0, d.$)(nK().root, t),
                        'data-test-id': h.Xk.vibe.VIBE_FREEMIUM_BLOCK,
                        children: [
                            b,
                            (0, c.jsx)(T.HL, {
                                variant: 'span',
                                size: 'l',
                                className: nK().description,
                                'data-test-id': h.Xk.vibe.VIBE_FREEMIUM_BLOCK_DESCRIPTION,
                                children: (0, c.jsx)(_.A, { id: 'buy-subscription.new-vibe-description', values: { nbsp: ' ' } }),
                            }),
                        ],
                    });
                }),
                nG = (0, u.PA)(() => {
                    var e, t, i, n, a, r, o, s, l, u, m, p, _, g, x, A, C;
                    let {
                            sonataState: j,
                            experiments: S,
                            user: T,
                            paywall: { modal: k },
                            vibe: E,
                        } = (0, F.g)(),
                        { pageId: P, pageEntityId: I } = (0, R.$)(),
                        N = (0, ns.l)({ mainObjectType: e2.DomainObjectType.Track }),
                        { resetContext: w } = (0, W.B)({ seeds: [ed.M1], pageIdForFrom: P, blockIdForFrom: ''.concat(e2.EntityTypes.MyWave, '-').concat(eM.U.RADIO) }),
                        { isEnabled: B } = (0, tb.e)(),
                        D = (() => {
                            var e, t, i, n, a, r;
                            let { sonataState: o } = (0, F.g)(),
                                s = (0, tr.e)(),
                                { formatMessage: l } = (0, v.A)(),
                                c = null == s ? void 0 : s.state.currentContext.value,
                                d = null == s ? void 0 : s.state.queueState.currentEntity.value,
                                u = null == d ? void 0 : d.sourceContext;
                            if (!(null == c ? void 0 : c.data.type)) return;
                            let m = (function (e, t) {
                                switch (t) {
                                    case nV.h.SEARCH:
                                        return e({ id: 'entity-names.search' });
                                    case nV.h.MUSIC_HISTORY:
                                    case nV.h.MUSIC_HISTORY_SEARCH:
                                        return e({ id: 'entity-names.music-history' });
                                    case nV.h.DOWNLOADED_TRACKS:
                                    case nV.h.USER_TRACKS:
                                        return e({ id: 'entity-names.collection' });
                                    case nV.h.ARTIST_FAMILIAR_FROM_WAVE:
                                        return e({ id: 'page.familiar-vibe' });
                                    case nV.h.ARTIST_MY_COLLECTION:
                                        return e({ id: 'page.familiar-collection' });
                                    default:
                                        return;
                                }
                            })(l, null == u ? void 0 : u.data.sourceContextType);
                            if (m) return m;
                            switch (c.data.type) {
                                case nL.K.Album:
                                    if (null == (e = o.entityMeta) ? void 0 : e.isPodcast) return l({ id: 'entity-names.podcast' });
                                    if (null == (t = o.entityMeta) ? void 0 : t.isAudiobook) return l({ id: 'entity-names.book' });
                                    if (null == (i = o.entityMeta) ? void 0 : i.isFairyTale) return l({ id: 'entity-names.fairytale' });
                                    return c.data.meta.title;
                                case nL.K.Playlist:
                                    return c.data.meta.title;
                                case nL.K.Vibe: {
                                    let e = null == (n = c.data.meta.session) ? void 0 : n.wave;
                                    if ((null == e ? void 0 : e.seeds.length) === 1 && (null == e ? void 0 : e.seeds[0]) === ed.M1)
                                        return l({ id: 'entity-names.my-vibe' });
                                    return l({ id: 'vibe-actions.vibe-context' }, { type: null == e ? void 0 : e.type, name: null == e ? void 0 : e.name });
                                }
                                case nL.K.Artist:
                                    return l({ id: 'entity-names.artist-popular-tracks' });
                                case nL.K.Various:
                                    return null == (r = o.entityMeta) || null == (a = r.mainAlbum) ? void 0 : a.title;
                                case nL.K.Generative:
                                    return l({ id: 'entity-names.generative' });
                                default:
                                    return;
                            }
                        })(),
                        z = (() => {
                            let e = (0, tr.e)(),
                                t = null == e ? void 0 : e.state.currentContext.value;
                            if ((null == t ? void 0 : t.data.type) === nL.K.Vibe) {
                                var i, n;
                                let e = null == (i = t.data.meta.session) ? void 0 : i.wave;
                                if (
                                    ((null == e ? void 0 : e.seeds.length) === 1 && (null == e ? void 0 : e.seeds[0]) === ed.M1) ||
                                    ((null == e ? void 0 : e.seeds.length) === 1 && (null == e || null == (n = e.seeds[0]) ? void 0 : n.includes(ed.yx)))
                                )
                                    return !1;
                            }
                            return !0;
                        })(),
                        H = !j.isPlaying && (j.isVibeContext || !j.entityMeta),
                        K = !j.isPlaying && !z,
                        q = null == (e = j.entityMeta) ? void 0 : e.mainArtist,
                        X = null == (t = j.entityMeta) ? void 0 : t.mainAlbum,
                        G = null == (i = j.entityMeta) ? void 0 : i.artists,
                        Y = !!(null == (n = j.entityMeta) ? void 0 : n.isNonUserGenerated),
                        $ = !!(null == (a = j.entityMeta) ? void 0 : a.isNonMusic),
                        Z = j.isGenerativeContext,
                        Q = S.checkExperiment(U.z.WebNextNewWaveTabFeatCover, 'on')
                            ? null == (o = j.entityMeta) || null == (r = o.cutoutCover)
                                ? void 0
                                : r.uri
                            : void 0,
                        J = ((e) => {
                            let { artistCutoutCoverUri: t, hasMainArtist: i, releaseCutoutCoverUri: n } = e;
                            return i && (null != n ? n : t) ? (void 0 === n ? 'cutout_artist' : 'cutout_release') : 'text';
                        })({ artistCutoutCoverUri: null == q || null == (s = q.cutoutCover) ? void 0 : s.uri, hasMainArtist: !!q, releaseCutoutCoverUri: Q }),
                        ee = !!(null != Q ? Q : null == q || null == (l = q.cutoutCover) ? void 0 : l.uri) && !H,
                        et = ee && q,
                        ei = (0, nO.A)(null != G ? G : []) > 1,
                        en = Y && !ei,
                        ea = (0, b.useRef)(null),
                        {
                            isArtistsMenuOpen: er,
                            artistsMenuPosition: eo,
                            handleArtistsMenuClick: es,
                            handleArtistsMenuOpenChange: el,
                        } = ((e) => {
                            let { ref: t } = e,
                                [i, n] = (0, b.useState)(!1),
                                [a, r] = (0, b.useState)(null);
                            return {
                                isArtistsMenuOpen: i,
                                artistsMenuPosition: a,
                                handleArtistsMenuClick: (0, f.c)((e) => {
                                    if (e.detail > 0) {
                                        let { clientX: t, clientY: i } = e;
                                        r({ getBoundingClientRect: () => new DOMRect(t, i, 0, 0) });
                                    } else r(t.current);
                                    n(!0);
                                }),
                                handleArtistsMenuOpenChange: (0, f.c)((e) => {
                                    (n(e), e || r(null));
                                }),
                            };
                        })({ ref: ea });
                    ((e) => {
                        let { albumId: t, displayType: i, trackId: n } = e,
                            a = (0, L.N)(),
                            r = a.get(V.Zf),
                            o = a.get(V.UB),
                            s = (0, b.useRef)(void 0);
                        (0, b.useEffect)(() => {
                            if (!n) {
                                s.current = void 0;
                                return;
                            }
                            let e = ''.concat(n, ':').concat(i);
                            o &&
                                s.current !== e &&
                                ((s.current = e),
                                o
                                    .send(
                                        { name: 'TECH_EVENT_CUTOUT_PHOTO_SHOWN', data: { ...(void 0 === t ? {} : { albumId: String(t) }), displayType: i, trackId: n } },
                                        { topLevelParameter: 'tech-metrics' },
                                    )
                                    .catch((e) => {
                                        r.error(e instanceof Error ? e : String(e));
                                    }));
                        }, [t, i, r, n, o]);
                    })({ albumId: null == (u = j.entityMeta) ? void 0 : u.albumId, displayType: J, trackId: null == (m = j.entityMeta) ? void 0 : m.id });
                    let ec = !T.hasPlus || !T.isAuthorized,
                        eu = (0, y.L)(() => (H ? ir : ee ? ii : ia)),
                        em = (0, y.L)(() => (ec ? { ...eu, maxFontSize: Math.min(eu.maxFontSize, 72), fallbackMaxLines: 2 } : eu)),
                        eb =
                            T.hasPlus &&
                            (S.checkExperiment(U.z.WebNextWaveScreenWordsInWave, 'on') || S.checkExperiment(U.z.WebNextWaveScreenWordsInWave, 'on_with_onyx')),
                        ep = E.isShuffleVibe && j.isVibeContext,
                        ev = (0, e8.OH)(ep || null == (p = j.entityMeta) ? void 0 : p.averageColor);
                    ((0, b.useEffect)(() => {
                        ei || el(!1);
                    }, [el, ei]),
                        (0, b.useEffect)(() => {
                            I && N(!0);
                        }, [N, I]),
                        (0, b.useEffect)(
                            () => () => {
                                N(!1);
                            },
                            [N],
                        ));
                    let e_ = (0, y.L)(() =>
                            S.checkExperiment(U.z.WebNextShaderFallbackEnabled, 'on')
                                ? (0, c.jsx)(O, { className: nF().vibeAnimation })
                                : (0, c.jsx)(M, { className: nF().vibeAnimation, averageColor: ev.primary }),
                        ),
                        eh = (0, f.c)(() => {
                            (T.hasPlus, w());
                        }),
                        eg = (0, y.L)(() => {
                            let e = j.entityMeta,
                                t = (0, c.jsx)('div', {
                                    className: (0, d.$)(nF().textContainer, { [nF().textContainer_withCover]: ee && e, [nF().textContainer_playing]: !H }),
                                    children: (0, c.jsx)(ip, {
                                        textOptions: em,
                                        children: (0, c.jsx)(nz, {
                                            isVibePaused: H,
                                            isNonMusic: $,
                                            isGenerative: Z,
                                            withLink: en,
                                            hasMultipleArtists: ei,
                                            mainAlbum: X,
                                            entityTitle: null == e ? void 0 : e.title,
                                            artists: G,
                                            artistsRef: ea,
                                            isArtistsMenuOpen: er,
                                            onArtistsMenuClick: es,
                                        }),
                                    }),
                                });
                            return e
                                ? (0, c.jsx)(eD.F, {
                                      blockId: e2.EntityTypes.MyWave,
                                      blockType: e2.EntityTypes.MyWave,
                                      blockPosX: 1,
                                      blockPosY: 1,
                                      objectsCount: 1,
                                      mainObjectType: e2.DomainObjectType.Track,
                                      mainObjectId: e.id,
                                      children: (0, c.jsxs)(iM.B, {
                                          objectType: e2.DomainObjectType.Artist,
                                          objectId: e.id,
                                          objectPosX: 1,
                                          objectPosY: 1,
                                          objectsCount: 1,
                                          children: [
                                              t,
                                              et &&
                                                  (0, c.jsx)('div', {
                                                      className: nF().artistCover,
                                                      children: (0, c.jsx)(ic, { artist: q, withLink: en, onClick: es, featCoverUri: Q }),
                                                  }),
                                              G && ei && (0, c.jsx)(nD, { artists: G, open: er, onOpenChange: el, positionElement: eo }),
                                          ],
                                      }),
                                  })
                                : t;
                        });
                    return (0, c.jsxs)(eN.r, {
                        page: ew.l.HOME_SCREEN,
                        places: [eO.R.MY_WAVE],
                        children: [
                            B && (0, c.jsx)(iO, {}),
                            (0, c.jsxs)('div', {
                                className: (0, d.$)(nF().root, { [nF().root_reshuffle]: ep, [nF().root_withoutPlus]: !T.hasPlus }),
                                children: [
                                    (0, c.jsx)(iE, { className: nF().wheel }),
                                    (0, c.jsxs)('div', {
                                        className: (0, d.$)(nF().meta, { [nF().meta_noPlus]: !T.hasPlus }),
                                        'data-test-id': h.Xk.vibe.VIBE_META,
                                        children: [
                                            (0, c.jsx)(eD.F, {
                                                blockId: e2.EntityTypes.Toolbar,
                                                blockType: e2.EntityTypes.Toolbar,
                                                blockPosX: 1,
                                                blockPosY: 1,
                                                objectsCount: 1,
                                                children: (0, c.jsx)(iM.B, {
                                                    objectType: e2.DomainObjectType.Wave,
                                                    objectId: ed.M1,
                                                    objectPosX: 1,
                                                    objectPosY: 1,
                                                    objectsCount: 1,
                                                    children: (0, c.jsx)(ik, { className: nF().context, context: D, isResetAvailable: z, isHidden: K, onClick: eh }),
                                                }),
                                            }),
                                            (0, c.jsxs)('div', {
                                                className: nF().entityMeta,
                                                children: [
                                                    e_,
                                                    (0, c.jsx)(
                                                        'div',
                                                        { className: nF().entityMetaBody, children: eg },
                                                        ''.concat(null != (C = null == (_ = j.entityMeta) ? void 0 : _.idWithContext) ? C : 'default', '-').concat(H),
                                                    ),
                                                ],
                                            }),
                                            (0, c.jsxs)('div', {
                                                className: (0, d.$)(nF().playerBlock, { [nF().playerBlock_withFreemium]: !T.hasPlus }),
                                                children: [
                                                    (0, c.jsx)(eD.F, {
                                                        blockId: e2.EntityTypes.MyWave,
                                                        blockType: e2.EntityTypes.MyWave,
                                                        blockPosX: 1,
                                                        blockPosY: 1,
                                                        objectsCount: 1,
                                                        mainObjectType: e2.DomainObjectType.Track,
                                                        mainObjectId: null == (g = j.entityMeta) ? void 0 : g.id,
                                                        children: (0, c.jsx)(iM.B, {
                                                            objectType: e2.DomainObjectType.Track,
                                                            objectId: null == (x = j.entityMeta) ? void 0 : x.id,
                                                            objectPosX: 1,
                                                            objectPosY: 1,
                                                            objectsCount: 1,
                                                            children: (0, c.jsx)(it, {}),
                                                        }),
                                                    }),
                                                    eb &&
                                                        (0, c.jsx)('div', {
                                                            className: nF().words,
                                                            children: (0, c.jsx)(nw, { trackId: null == (A = j.entityMeta) ? void 0 : A.id }),
                                                        }),
                                                    !T.hasPlus && (0, c.jsx)(nX, { className: nF().freemiumBlock }),
                                                ],
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                        ],
                    });
                }),
                nY = (0, u.PA)((e) => {
                    var t, i;
                    let { withVideoModal: n } = e,
                        {
                            main: a,
                            user: r,
                            experiments: o,
                            releaseNotes: s,
                            fullscreenVideoPlayer: l,
                            sonataState: { entityMeta: u },
                            settings: { isMobile: p },
                        } = (0, F.g)(),
                        { formatMessage: P } = (0, v.A)(),
                        I = (0, eF.B)(),
                        { contentScrollRef: N, setContentScrollRef: w } = (0, ec.g)(),
                        [O, M] = (0, x.d)(),
                        B = (0, eP.d)(),
                        R = (0, eE.C)(),
                        { theme: D } = (0, eH.W)(),
                        V = o.checkExperiment(U.z.WebNextNewWaveTab, 'on') || o.checkExperiment(U.z.WebNextNewWaveTab, 'on1'),
                        L = (0, eU.Z)(null != (i = null == (t = a.specialHeader) ? void 0 : t.url) ? i : ''),
                        W = o.checkExperiment(U.z.WebNextNewWaveTabFeedbackForm, 'on'),
                        { href: z } = (0, eq.u)('/slides/special/:campaignId', { params: { campaignId: 'summer_2026' } });
                    ((0, b.useEffect)(() => {
                        var e, t;
                        if (!n || !B) return;
                        let i = (0, eX.j)(),
                            a = null != (e = null == i ? void 0 : i.get(eK.K.IDS)) ? e : null,
                            r = null != (t = null == i ? void 0 : i.get(eK.K.ACTIVE_INDEX)) ? t : null,
                            { clipIds: o, activeClipIndex: s } = (0, eS.V)(a, r);
                        (R(o, s), l.setOpenedFromMain());
                    }, [n, B, l, R]),
                        (0, b.useEffect)(
                            () => () => {
                                (a.reset(), V || a.landing.reset());
                            },
                            [a, a.landing, V],
                        ),
                        (0, eW.J)(a.landing.isResolved));
                    let H = o.checkExperiment(U.z.WebNextDisableVibe, 'on'),
                        K = (0, f.c)(() => {
                            s.isReady && s.modal.open();
                        }),
                        q = (0, b.useMemo)(() => (H ? { 'margin-block-start': '1vh' } : {}), [H]),
                        X = (0, b.useMemo)(() => {
                            if (o.checkExperiment(U.z.WebNextBetaLabel, 'off')) return null;
                            {
                                let e = o.checkExperiment(U.z.WebNextBetaLabel, 'version'),
                                    t = P({ id: 'desktop.app-version' }, { version: I }),
                                    i = e ? I : 'Beta';
                                return (0, c.jsxs)(S.m_, {
                                    placement: 'left',
                                    offsetOptions: 4,
                                    children: [
                                        (0, c.jsx)(A.$, {
                                            color: 'secondary',
                                            radius: 'xl',
                                            'aria-label': e ? t : 'Beta '.concat(t),
                                            className: (0, d.$)(eZ().beta, { [eZ().beta_withReleaseNotes]: s.isReady }),
                                            onClick: K,
                                            'data-test-id': h.Xk.main.RELEASE_NOTES_BUTTON,
                                            children: (0, c.jsx)(T.HL, { variant: 'div', type: 'text', size: 's', weight: 'medium', children: i }),
                                        }),
                                        (0, c.jsx)(S.ZI, { children: I }),
                                    ],
                                });
                            }
                        }, [o, P, K, !0, s.isReady, I]),
                        G = (0, b.useMemo)(
                            () =>
                                W
                                    ? (0, c.jsx)(e1, {
                                          href: z,
                                          imageSrc: 'avatars.mds.yandex.net/get-music-misc/70850/img.6a7d54bea0c2131932ceea77/orig',
                                          children: (0, c.jsx)(_.A, { id: 'page.summer_2026_title' }),
                                      })
                                    : null,
                            [W, z],
                        ),
                        Y = (0, d.$)(eZ().betaSlot, { [eZ().betaSlot_newVibe]: V }),
                        $ = (0, b.useMemo)(() => {
                            if (!a.specialHeader) return {};
                            let e = D === ez.S.Light ? a.specialHeader.lightTheme : a.specialHeader.darkTheme;
                            return { '--special-button-background': e.backgroundColor, '--special-button-color': e.textColor };
                        }, [a.specialHeader, D]),
                        Z = (0, y.L)(() => {
                            let e = o.checkExperiment(U.z.WebNextRewind2024, 'on');
                            return a.specialHeader
                                ? (0, c.jsxs)('div', {
                                      className: eZ().specialHeaderContainer,
                                      children: [
                                          e &&
                                              (0, c.jsx)(C._V, {
                                                  src: 'avatars.mds.yandex.net/get-music-misc/28052/img.69203c15cffc41172f18a125/orig',
                                                  withAvatarReplace: !0,
                                                  className: eZ().specialHeaderImage,
                                                  fit: 'contain',
                                              }),
                                          (0, c.jsx)(A.$, {
                                              color: 'secondary',
                                              size: 'default',
                                              radius: 'xxxl',
                                              role: 'link',
                                              className: eZ().specialHeader,
                                              withHover: !1,
                                              style: $,
                                              onClick: L,
                                              children: a.specialHeader.title,
                                          }),
                                      ],
                                  })
                                : null;
                        }),
                        Q = (0, y.L)(() =>
                            V
                                ? null
                                : o.checkExperiment(U.z.WebNextFooterDisclaimer, 'on')
                                  ? (0, c.jsx)(eG.w, { className: eZ().footer })
                                  : (0, c.jsx)(eY.A, { children: (0, c.jsx)(eG.w, { className: eZ().footer }) }),
                        ),
                        J = (0, f.c)(() => {
                            if (!a.landing.isLoaded) return;
                            let e = r.isAuthorized ? g.p.MAIN : g.p.MAIN_NOLOGIN;
                            return a.landing.getSkeleton({ id: e, showWizard: r.settings.showWizard }, { preloadBlocksCount: 2 });
                        }),
                        ee = (0, f.c)(() => {
                            if (a.landing.isLoaded) return a.landing.getSkeleton({ id: g.p.WEB_MAIN, showWizard: r.settings.showWizard }, { preloadBlocksCount: 2 });
                        });
                    if (((0, eT.y)(ee), a.landing.isNeededToLoad && !V)) {
                        let e = r.isAuthorized ? g.p.MAIN : g.p.MAIN_NOLOGIN,
                            t = [a.landing.getSkeleton({ id: e, showWizard: r.settings.showWizard }, { preloadBlocksCount: 2 }), a.getSpecialHeader()];
                        (0, b.use)(Promise.allSettled(t));
                    }
                    n && !B && (0, m.notFound)();
                    let et = (0, y.L)(() =>
                        V
                            ? (0, c.jsx)(eL.n, {
                                  pageId: eR._Q.WAVE_LANDING_SCREEN,
                                  pageEntityId: null == u ? void 0 : u.id,
                                  children: (0, c.jsx)(eV.j, {
                                      children: (0, c.jsxs)('div', {
                                          className: eZ().vibeWidgetContainer,
                                          'data-test-id': h.Xk.main.MAIN_PAGE,
                                          children: [
                                              (0, c.jsxs)('div', {
                                                  className: (0, d.$)(eZ().actionsBar, { [eZ().actionsBar_desktop]: !0 }),
                                                  children: [p && (0, c.jsx)(eI.F, { withMeta: !1, variant: 'mobile', className: eZ().userProfile }), G],
                                              }),
                                              (0, c.jsx)(nG, {}),
                                              (0, c.jsx)('div', { className: Y, children: X }),
                                          ],
                                      }),
                                  }),
                              })
                            : (0, c.jsx)(eL.n, {
                                  pageId: eR._Q.HOME,
                                  children: (0, c.jsx)(ek.h, {
                                      scrollElement: N,
                                      headerElement: O,
                                      children: (0, c.jsxs)(j.N, {
                                          className: eZ().root,
                                          containerClassName: eZ().content,
                                          ref: w,
                                          'data-test-id': h.Xk.main.MAIN_PAGE,
                                          children: [
                                              Z,
                                              (0, c.jsx)('div', { className: Y, children: X }),
                                              !H &&
                                                  (0, c.jsx)(eD.F, {
                                                      blockIdForFrom: eB.h.RUP_MAIN_RADIO,
                                                      blockId: eM.U.RUP,
                                                      blockType: eM.U.RUP,
                                                      blockPosX: 0,
                                                      blockPosY: 0,
                                                      objectsCount: 0,
                                                      children: (0, c.jsx)(eC, { className: eZ().vibe }),
                                                  }),
                                              (0, c.jsx)(k.E, {
                                                  landing: a.landing,
                                                  headerConcealerComponent: (0, c.jsx)('div', { ref: M }),
                                                  errorComponent: (0, c.jsx)(E.SomethingWentWrong, { className: eZ().error, withBackwardControl: !1 }),
                                                  containerClassName: eZ().landing,
                                                  containerStyle: q,
                                                  tabWithHeadingTitle: !0,
                                                  tabWithCovers: !0,
                                                  tabWithSubtitle: !0,
                                              }),
                                              Q,
                                          ],
                                      }),
                                  }),
                              }),
                    );
                    return (0, c.jsxs)(eN.r, { page: ew.l.HOME_SCREEN, places: [eO.R.MY_WAVE], children: [et, (0, c.jsx)(ej.p, { onFinishSuccess: J })] });
                });
        },
        62146: (e) => {
            e.exports = {
                root: 'VibePlayerBar_root__G3MOe',
                progress: 'VibePlayerBar_progress__Cri6E',
                progress_visible: 'VibePlayerBar_progress_visible__EfP1V',
                button: 'VibePlayerBar_button__GLhJ_',
                important: 'VibePlayerBar_important__XGV7k',
                ripple: 'VibePlayerBar_ripple__8YHn7',
                likeButton_mobilePaused: 'VibePlayerBar_likeButton_mobilePaused__ufI2D',
                changeVolume: 'VibePlayerBar_changeVolume__x7FHC',
                verticalSlider: 'VibePlayerBar_verticalSlider__JPDlB',
            };
        },
        62475: (e, t, i) => {
            'use strict';
            let n, a;
            i.d(t, { MR: () => b, P2: () => m });
            let r = (e, t) => t.some((t) => e instanceof t),
                o = new WeakMap(),
                s = new WeakMap(),
                l = new WeakMap(),
                c = {
                    get(e, t, i) {
                        if (e instanceof IDBTransaction) {
                            if ('done' === t) return o.get(e);
                            if ('store' === t) return i.objectStoreNames[1] ? void 0 : i.objectStore(i.objectStoreNames[0]);
                        }
                        return d(e[t]);
                    },
                    set: (e, t, i) => ((e[t] = i), !0),
                    has: (e, t) => (e instanceof IDBTransaction && ('done' === t || 'store' === t)) || t in e,
                };
            function d(e) {
                if (e instanceof IDBRequest) {
                    let t = new Promise((t, i) => {
                        let n = () => {
                                (e.removeEventListener('success', a), e.removeEventListener('error', r));
                            },
                            a = () => {
                                (t(d(e.result)), n());
                            },
                            r = () => {
                                (i(e.error), n());
                            };
                        (e.addEventListener('success', a), e.addEventListener('error', r));
                    });
                    return (l.set(t, e), t);
                }
                if (s.has(e)) return s.get(e);
                let t = (function (e) {
                    if ('function' == typeof e)
                        return (a || (a = [IDBCursor.prototype.advance, IDBCursor.prototype.continue, IDBCursor.prototype.continuePrimaryKey])).includes(e)
                            ? function (...t) {
                                  return (e.apply(u(this), t), d(this.request));
                              }
                            : function (...t) {
                                  return d(e.apply(u(this), t));
                              };
                    return (e instanceof IDBTransaction &&
                        (function (e) {
                            if (o.has(e)) return;
                            let t = new Promise((t, i) => {
                                let n = () => {
                                        (e.removeEventListener('complete', a), e.removeEventListener('error', r), e.removeEventListener('abort', r));
                                    },
                                    a = () => {
                                        (t(), n());
                                    },
                                    r = () => {
                                        (i(e.error || new DOMException('AbortError', 'AbortError')), n());
                                    };
                                (e.addEventListener('complete', a), e.addEventListener('error', r), e.addEventListener('abort', r));
                            });
                            o.set(e, t);
                        })(e),
                    r(e, n || (n = [IDBDatabase, IDBObjectStore, IDBIndex, IDBCursor, IDBTransaction])))
                        ? new Proxy(e, c)
                        : e;
                })(e);
                return (t !== e && (s.set(e, t), l.set(t, e)), t);
            }
            let u = (e) => l.get(e);
            function m(e, t, { blocked: i, upgrade: n, blocking: a, terminated: r } = {}) {
                let o = indexedDB.open(e, t),
                    s = d(o);
                return (
                    n &&
                        o.addEventListener('upgradeneeded', (e) => {
                            n(d(o.result), e.oldVersion, e.newVersion, d(o.transaction), e);
                        }),
                    i && o.addEventListener('blocked', (e) => i(e.oldVersion, e.newVersion, e)),
                    s
                        .then((e) => {
                            (r && e.addEventListener('close', () => r()), a && e.addEventListener('versionchange', (e) => a(e.oldVersion, e.newVersion, e)));
                        })
                        .catch(() => {}),
                    s
                );
            }
            function b(e, { blocked: t } = {}) {
                let i = indexedDB.deleteDatabase(e);
                return (t && i.addEventListener('blocked', (e) => t(e.oldVersion, e)), d(i).then(() => void 0));
            }
            let p = ['get', 'getKey', 'getAll', 'getAllKeys', 'count'],
                v = ['put', 'add', 'delete', 'clear'],
                _ = new Map();
            function h(e, t) {
                if (!(e instanceof IDBDatabase && !(t in e) && 'string' == typeof t)) return;
                if (_.get(t)) return _.get(t);
                let i = t.replace(/FromIndex$/, ''),
                    n = t !== i,
                    a = v.includes(i);
                if (!(i in (n ? IDBIndex : IDBObjectStore).prototype) || !(a || p.includes(i))) return;
                let r = async function (e, ...t) {
                    let r = this.transaction(e, a ? 'readwrite' : 'readonly'),
                        o = r.store;
                    return (n && (o = o.index(t.shift())), (await Promise.all([o[i](...t), a && r.done]))[0]);
                };
                return (_.set(t, r), r);
            }
            c = ((e) => ({ ...e, get: (t, i, n) => h(t, i) || e.get(t, i, n), has: (t, i) => !!h(t, i) || e.has(t, i) }))(c);
            let g = ['continue', 'continuePrimaryKey', 'advance'],
                f = {},
                x = new WeakMap(),
                y = new WeakMap(),
                A = {
                    get(e, t) {
                        if (!g.includes(t)) return e[t];
                        let i = f[t];
                        return (
                            i ||
                                (i = f[t] =
                                    function (...e) {
                                        x.set(this, y.get(this)[t](...e));
                                    }),
                            i
                        );
                    },
                };
            async function* C(...e) {
                let t = this;
                if ((t instanceof IDBCursor || (t = await t.openCursor(...e)), !t)) return;
                let i = new Proxy(t, A);
                for (y.set(i, t), l.set(i, u(t)); t;) (yield i, (t = await (x.get(i) || t.continue())), x.delete(i));
            }
            function j(e, t) {
                return (t === Symbol.asyncIterator && r(e, [IDBIndex, IDBObjectStore, IDBCursor])) || ('iterate' === t && r(e, [IDBIndex, IDBObjectStore]));
            }
            c = ((e) => ({ ...e, get: (t, i, n) => (j(t, i) ? C : e.get(t, i, n)), has: (t, i) => j(t, i) || e.has(t, i) }))(c);
        },
        66007: (e) => {
            e.exports = {
                root: 'PlayButton_root__nYKdN',
                root_isLoading: 'PlayButton_root_isLoading__925Sa',
                'applying-setting': 'PlayButton_applying-setting__3nbT9',
                icon: 'PlayButton_icon__t_THQ',
            };
        },
        70597: (e, t, i) => {
            'use strict';
            i.d(t, { mf: () => l });
            var n,
                a = i(55178),
                r = {
                    810: (e) => {
                        e.exports = n || (n = i.t(a, 2));
                    },
                },
                o = {},
                s = {};
            ((() => {
                (Object.defineProperty(s, '__esModule', { value: !0 }), (s.useDynamicText = s.findOptimalFontSize = void 0));
                let e = (function e(t) {
                        var i = o[t];
                        if (void 0 !== i) return i.exports;
                        var n = (o[t] = { exports: {} });
                        return (r[t](n, n.exports, e), n.exports);
                    })(810),
                    t = (e) => {
                        ((e.style.wordBreak = 'keep-all'),
                            (e.style.overflowWrap = 'normal'),
                            (e.style.maxHeight = 'none'),
                            (e.style.height = 'auto'),
                            (e.style.overflow = 'visible'),
                            Array.from(e.children).forEach((e) => {
                                e instanceof HTMLElement && t(e);
                            }));
                    },
                    i = (e, t, i, n, a, r) => {
                        (e.style.setProperty('--dynamic-font-size', ''.concat(n, 'px')), e.style.setProperty('--dynamic-line-height', String(a)));
                        let o = 'number' == typeof r ? e.scrollHeight <= Math.min(r * n * a, i) + 1 : e.scrollHeight <= i + 1,
                            s = e.scrollWidth <= t + 1;
                        return o && s;
                    },
                    n = (e) => {
                        let { container: n, containerWidth: a, containerHeight: r, minFontSize: o, maxFontSize: s, lineHeight: l, maxLines: c, styleVariants: d } = e,
                            u = ((e, i, n) => {
                                let a = e.cloneNode(!0);
                                return (
                                    (a.style.cssText =
                                        '\n        position: absolute !important;\n        visibility: hidden !important;\n        pointer-events: none !important;\n        width: '.concat(
                                            i,
                                            'px !important;\n    ',
                                        )),
                                    t(a),
                                    a.style.setProperty('--dynamic-line-height', String(n)),
                                    document.body.appendChild(a),
                                    a
                                );
                            })(n, a, l);
                        try {
                            if (null == d ? void 0 : d.length) {
                                var m;
                                let e = [...d].sort((e, t) => t.fontSize - e.fontSize),
                                    t = null != (m = e[e.length - 1]) ? m : { fontSize: o, lineHeight: l };
                                for (let t of e) if (i(u, a, r, t.fontSize, t.lineHeight, c)) return { ...t, fits: !0 };
                                return { ...t, fits: !1 };
                            }
                            let e = o,
                                t = s,
                                n = null;
                            for (; e <= t;) {
                                let o = Math.floor((e + t) / 2);
                                i(u, a, r, o, l, c) ? ((n = o), (e = o + 1)) : (t = o - 1);
                            }
                            if (null === n) return { fontSize: o, lineHeight: l, fits: !1 };
                            return { fontSize: Math.max(o, n - 1), lineHeight: l, fits: !0 };
                        } finally {
                            u.remove();
                        }
                    };
                ((s.findOptimalFontSize = (e) => n(e).fontSize),
                    (s.useDynamicText = (t, i, a) => {
                        let { minFontSize: r, maxFontSize: o, lineHeight: s, maxLines: l, fallbackMaxLines: c, styleVariants: d } = i;
                        (0, e.useLayoutEffect)(() => {
                            if (null === t) return;
                            t.style.setProperty('--dynamic-line-height', String(s));
                            let e = () => {
                                    let { width: e, height: i } = t.getBoundingClientRect(),
                                        u = t.childNodes.length > 0;
                                    if (0 === e || 0 === i || !u) return;
                                    let {
                                        maxLines: m,
                                        fontSize: b,
                                        lineHeight: p,
                                    } = ((e) => {
                                        let { fallbackMaxLines: t, maxLines: i } = e,
                                            a = n({ ...e, maxLines: i });
                                        if (void 0 === t || a.fits) return { maxLines: i, fontSize: a.fontSize, lineHeight: a.lineHeight };
                                        let r = n({ ...e, maxLines: t });
                                        return { maxLines: t, fontSize: r.fontSize, lineHeight: r.lineHeight };
                                    })({
                                        container: t,
                                        containerWidth: e,
                                        containerHeight: i,
                                        minFontSize: r,
                                        maxFontSize: o,
                                        lineHeight: s,
                                        maxLines: l,
                                        fallbackMaxLines: c,
                                        styleVariants: d,
                                    });
                                    (null == a || a(m),
                                        t.style.setProperty('--dynamic-font-size', ''.concat(b, 'px')),
                                        t.style.setProperty('--dynamic-line-height', String(p)));
                                },
                                i = new ResizeObserver(e),
                                u = new MutationObserver(e);
                            return (
                                i.observe(t),
                                u.observe(t, { childList: !0, characterData: !0, subtree: !0 }),
                                document.fonts.ready.then(e),
                                e(),
                                () => {
                                    (i.disconnect(), u.disconnect());
                                }
                            );
                        }, [t, a, c, s, o, l, r, d]);
                    }));
            })(),
                s.__esModule,
                s.findOptimalFontSize);
            var l = s.useDynamicText;
        },
        75225: (e) => {
            e.exports = {
                root: 'VibeContext_root__dbiNv',
                context: 'VibeContext_context__Z_82k',
                pinButton: 'VibeContext_pinButton__b6SNF',
                resetButton: 'VibeContext_resetButton__9KK4S',
            };
        },
        79671: (e, t, i) => {
            'use strict';
            i.d(t, { V: () => a });
            var n = i(27515);
            let a = (e, t) => {
                if (!e) return { clipIds: [], activeClipIndex: 0 };
                let i = e
                        .split(',')
                        .map(Number)
                        .filter((e) => e >= 0),
                    a = (0, n.z)(i, t);
                return { clipIds: i, activeClipIndex: a };
            };
        },
        88751: (e) => {
            e.exports = {
                vibeAnimation: 'VibeBlock_vibeAnimation__XVEE6',
                controls: 'VibeBlock_controls__BpDFL',
                root: 'VibeBlock_root__z7LtR',
                root_freemium: 'VibeBlock_root_freemium__4i2rV',
                playButton: 'VibeBlock_playButton__6xU55',
                settingsButton: 'VibeBlock_settingsButton__GeMtO',
                subscriptionText: 'VibeBlock_subscriptionText__ODUZN',
                button: 'VibeBlock_button__fWXM_',
            };
        },
        90593: (e) => {
            e.exports = { divider: 'VibeContextMenu_divider__45urL', item_active: 'VibeContextMenu_item_active__DnFoW' };
        },
        91311: (e) => {
            e.exports = {
                root: 'VibePageFreemiumBlock_root__HCPuh',
                button: 'VibePageFreemiumBlock_button__ULD2Z',
                description: 'VibePageFreemiumBlock_description__AaZUt',
            };
        },
        95180: (e) => {
            e.exports = {
                root: 'WordsCard_root__6r3u2',
                root_disabled: 'WordsCard_root_disabled__Kgxb_',
                badge: 'WordsCard_badge__Y5HRe',
                badge_centered: 'WordsCard_badge_centered__7GMKP',
                badge_centeredSparkles: 'WordsCard_badge_centeredSparkles__sebgi',
                badge_loading: 'WordsCard_badge_loading__pDoTb',
                pulse: 'WordsCard_pulse__sKXAl',
                content: 'WordsCard_content__AUDsR',
                content_hidden: 'WordsCard_content_hidden__WhUsT',
                text: 'WordsCard_text__ZquMQ',
                appear: 'WordsCard_appear__AISMP',
                action: 'WordsCard_action__v4Jp1',
                popoverContent: 'WordsCard_popoverContent__NHYuc',
            };
        },
        99711: (e) => {
            e.exports = {
                root: 'AlbumCover_root__hkDPz',
                coverContainer: 'AlbumCover_coverContainer__NOd_o',
                link: 'AlbumCover_link__5qqFN',
                cover: 'AlbumCover_cover__bif8b',
                'fade-in': 'AlbumCover_fade-in__5kJy7',
                cover_generative: 'AlbumCover_cover_generative__5siVB',
                cover_hiddenOnCompactPause: 'AlbumCover_cover_hiddenOnCompactPause__2BQxY',
                button: 'AlbumCover_button__mX59n',
                ripple: 'AlbumCover_ripple__q41JO',
                playButtonContainer: 'AlbumCover_playButtonContainer__rC_Wa',
                playButtonIcon: 'AlbumCover_playButtonIcon__2b7_R',
                playButton: 'AlbumCover_playButton__N2FOS',
                playButton_playing: 'AlbumCover_playButton_playing__W9Uib',
            };
        },
    },
]);
