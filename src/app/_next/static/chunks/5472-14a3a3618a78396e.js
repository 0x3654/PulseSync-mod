(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [5472],
    {
        2668: (t) => {
            'use strict';
            var e = (function () {
                    for (var t = crypto.getRandomValues(new Uint8Array(16)), e = '', r = 0; r < 16; ++r) e += t[r].toString(16);
                    return e;
                })(),
                r = RegExp('(\\\\)?"@__(F|R|D|M|S|A|U|I|B|L)-' + e + '-(\\d+)__@"', 'g'),
                i = /\{\s*\[native code\]\s*\}/g,
                n = /function.*?\(/,
                o = /.*?=>.*?/,
                s = /[<>\/\u2028\u2029]/g,
                a = /<\/script[^>]*>/gi,
                l = ['*', 'async'],
                c = { '<': '\\u003C', '>': '\\u003E', '/': '\\u002F', '\u2028': '\\u2028', '\u2029': '\\u2029' };
            function u(t) {
                return c[t];
            }
            t.exports = function t(c, f) {
                (f || (f = {}), ('number' == typeof f || 'string' == typeof f) && (f = { space: f }));
                var g,
                    d = [],
                    p = [],
                    h = [],
                    m = [],
                    b = [],
                    v = [],
                    y = [],
                    A = [],
                    w = [],
                    x = [];
                return (f.ignoreFunction && 'function' == typeof c && (c = void 0), void 0 === c)
                    ? String(c)
                    : 'string' !=
                        typeof (g =
                            f.isJSON && !f.space
                                ? JSON.stringify(c)
                                : JSON.stringify(
                                      c,
                                      f.isJSON
                                          ? null
                                          : function (t, r) {
                                                if (
                                                    (f.ignoreFunction &&
                                                        (function (t) {
                                                            var e = [];
                                                            for (var r in t) 'function' == typeof t[r] && e.push(r);
                                                            for (var i = 0; i < e.length; i++) delete t[e[i]];
                                                        })(r),
                                                    !r && void 0 !== r && r !== BigInt(0))
                                                )
                                                    return r;
                                                var i = this[t],
                                                    n = typeof i;
                                                if ('object' === n) {
                                                    if (i instanceof RegExp) return '@__R-' + e + '-' + (p.push(i) - 1) + '__@';
                                                    if (i instanceof Date) return '@__D-' + e + '-' + (h.push(i) - 1) + '__@';
                                                    if (i instanceof Map) return '@__M-' + e + '-' + (m.push(i) - 1) + '__@';
                                                    if (i instanceof Set) return '@__S-' + e + '-' + (b.push(i) - 1) + '__@';
                                                    if (Array.isArray(i) && Object.keys(i).length !== i.length) return '@__A-' + e + '-' + (v.push(i) - 1) + '__@';
                                                    if (i instanceof URL) return '@__L-' + e + '-' + (x.push(i) - 1) + '__@';
                                                }
                                                return 'function' === n
                                                    ? '@__F-' + e + '-' + (d.push(i) - 1) + '__@'
                                                    : 'undefined' === n
                                                      ? '@__U-' + e + '-' + (y.push(i) - 1) + '__@'
                                                      : 'number' !== n || isNaN(i) || isFinite(i)
                                                        ? 'bigint' === n
                                                            ? '@__B-' + e + '-' + (w.push(i) - 1) + '__@'
                                                            : r
                                                        : '@__I-' + e + '-' + (A.push(i) - 1) + '__@';
                                            },
                                      f.space,
                                  ))
                      ? String(g)
                      : (!0 !== f.unsafe && (g = g.replace(s, u)),
                          0 === d.length &&
                              0 === p.length &&
                              0 === h.length &&
                              0 === m.length &&
                              0 === b.length &&
                              0 === v.length &&
                              0 === y.length &&
                              0 === A.length &&
                              0 === w.length &&
                              0 === x.length)
                        ? g
                        : g.replace(r, function (e, r, s, c) {
                              if (r) return e;
                              if ('D' === s) {
                                  var u = String(h[c].toISOString());
                                  if (!/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(\.\d{3})?Z$/.test(u)) throw TypeError('Invalid Date ISO string');
                                  return 'new Date("' + u + '")';
                              }
                              if ('R' === s) {
                                  var g = String(p[c].flags).replace(/[^gimsuydv]/g, ''),
                                      y = p[c].source;
                                  if ('string' != typeof y) throw TypeError('RegExp.source must be a string');
                                  return 'new RegExp(' + t(y) + ', "' + g + '")';
                              }
                              if ('M' === s) return 'new Map(' + t(Array.from(m[c].entries()), f) + ')';
                              if ('S' === s) return 'new Set(' + t(Array.from(b[c].values()), f) + ')';
                              if ('A' === s) return 'Array.prototype.slice.call(' + t(Object.assign({ length: v[c].length }, v[c]), f) + ')';
                              if ('U' === s) return 'undefined';
                              if ('I' === s) return A[c];
                              if ('B' === s) return 'BigInt("' + w[c] + '")';
                              if ('L' === s) {
                                  var k = x[c].toString();
                                  if ('string' != typeof k) throw TypeError('URL.toString() must return a string');
                                  return 'new URL(' + t(k, f) + ')';
                              }
                              var S = d[c],
                                  T = f,
                                  I = S.toString();
                              if (i.test(I)) throw TypeError('Serializing native function: ' + S.name);
                              if (
                                  (T &&
                                      !0 !== T.unsafe &&
                                      (I = I.replace(a, function (t) {
                                          return t.replace(/</g, '\\u003C').replace(/\//g, '\\u002F').replace(/>/g, '\\u003E');
                                      })
                                          .replace(/\u2028/g, '\\u2028')
                                          .replace(/\u2029/g, '\\u2029')),
                                  n.test(I) || o.test(I))
                              )
                                  return I;
                              var L = I.indexOf('('),
                                  _ = I.substr(0, L)
                                      .trim()
                                      .split(' ')
                                      .filter(function (t) {
                                          return t.length > 0;
                                      });
                              return _.filter(function (t) {
                                  return -1 === l.indexOf(t);
                              }).length > 0
                                  ? (_.indexOf('async') > -1 ? 'async ' : '') + 'function' + (_.join('').indexOf('*') > -1 ? '*' : '') + I.substr(L)
                                  : I;
                          });
            };
        },
        11148: (t, e) => {
            function r() {
                var t = {};
                return (
                    (t['align-content'] = !1),
                    (t['align-items'] = !1),
                    (t['align-self'] = !1),
                    (t['alignment-adjust'] = !1),
                    (t['alignment-baseline'] = !1),
                    (t.all = !1),
                    (t['anchor-point'] = !1),
                    (t.animation = !1),
                    (t['animation-delay'] = !1),
                    (t['animation-direction'] = !1),
                    (t['animation-duration'] = !1),
                    (t['animation-fill-mode'] = !1),
                    (t['animation-iteration-count'] = !1),
                    (t['animation-name'] = !1),
                    (t['animation-play-state'] = !1),
                    (t['animation-timing-function'] = !1),
                    (t.azimuth = !1),
                    (t['backface-visibility'] = !1),
                    (t.background = !0),
                    (t['background-attachment'] = !0),
                    (t['background-clip'] = !0),
                    (t['background-color'] = !0),
                    (t['background-image'] = !0),
                    (t['background-origin'] = !0),
                    (t['background-position'] = !0),
                    (t['background-repeat'] = !0),
                    (t['background-size'] = !0),
                    (t['baseline-shift'] = !1),
                    (t.binding = !1),
                    (t.bleed = !1),
                    (t['bookmark-label'] = !1),
                    (t['bookmark-level'] = !1),
                    (t['bookmark-state'] = !1),
                    (t.border = !0),
                    (t['border-bottom'] = !0),
                    (t['border-bottom-color'] = !0),
                    (t['border-bottom-left-radius'] = !0),
                    (t['border-bottom-right-radius'] = !0),
                    (t['border-bottom-style'] = !0),
                    (t['border-bottom-width'] = !0),
                    (t['border-collapse'] = !0),
                    (t['border-color'] = !0),
                    (t['border-image'] = !0),
                    (t['border-image-outset'] = !0),
                    (t['border-image-repeat'] = !0),
                    (t['border-image-slice'] = !0),
                    (t['border-image-source'] = !0),
                    (t['border-image-width'] = !0),
                    (t['border-left'] = !0),
                    (t['border-left-color'] = !0),
                    (t['border-left-style'] = !0),
                    (t['border-left-width'] = !0),
                    (t['border-radius'] = !0),
                    (t['border-right'] = !0),
                    (t['border-right-color'] = !0),
                    (t['border-right-style'] = !0),
                    (t['border-right-width'] = !0),
                    (t['border-spacing'] = !0),
                    (t['border-style'] = !0),
                    (t['border-top'] = !0),
                    (t['border-top-color'] = !0),
                    (t['border-top-left-radius'] = !0),
                    (t['border-top-right-radius'] = !0),
                    (t['border-top-style'] = !0),
                    (t['border-top-width'] = !0),
                    (t['border-width'] = !0),
                    (t.bottom = !1),
                    (t['box-decoration-break'] = !0),
                    (t['box-shadow'] = !0),
                    (t['box-sizing'] = !0),
                    (t['box-snap'] = !0),
                    (t['box-suppress'] = !0),
                    (t['break-after'] = !0),
                    (t['break-before'] = !0),
                    (t['break-inside'] = !0),
                    (t['caption-side'] = !1),
                    (t.chains = !1),
                    (t.clear = !0),
                    (t.clip = !1),
                    (t['clip-path'] = !1),
                    (t['clip-rule'] = !1),
                    (t.color = !0),
                    (t['color-interpolation-filters'] = !0),
                    (t['column-count'] = !1),
                    (t['column-fill'] = !1),
                    (t['column-gap'] = !1),
                    (t['column-rule'] = !1),
                    (t['column-rule-color'] = !1),
                    (t['column-rule-style'] = !1),
                    (t['column-rule-width'] = !1),
                    (t['column-span'] = !1),
                    (t['column-width'] = !1),
                    (t.columns = !1),
                    (t.contain = !1),
                    (t.content = !1),
                    (t['counter-increment'] = !1),
                    (t['counter-reset'] = !1),
                    (t['counter-set'] = !1),
                    (t.crop = !1),
                    (t.cue = !1),
                    (t['cue-after'] = !1),
                    (t['cue-before'] = !1),
                    (t.cursor = !1),
                    (t.direction = !1),
                    (t.display = !0),
                    (t['display-inside'] = !0),
                    (t['display-list'] = !0),
                    (t['display-outside'] = !0),
                    (t['dominant-baseline'] = !1),
                    (t.elevation = !1),
                    (t['empty-cells'] = !1),
                    (t.filter = !1),
                    (t.flex = !1),
                    (t['flex-basis'] = !1),
                    (t['flex-direction'] = !1),
                    (t['flex-flow'] = !1),
                    (t['flex-grow'] = !1),
                    (t['flex-shrink'] = !1),
                    (t['flex-wrap'] = !1),
                    (t.float = !1),
                    (t['float-offset'] = !1),
                    (t['flood-color'] = !1),
                    (t['flood-opacity'] = !1),
                    (t['flow-from'] = !1),
                    (t['flow-into'] = !1),
                    (t.font = !0),
                    (t['font-family'] = !0),
                    (t['font-feature-settings'] = !0),
                    (t['font-kerning'] = !0),
                    (t['font-language-override'] = !0),
                    (t['font-size'] = !0),
                    (t['font-size-adjust'] = !0),
                    (t['font-stretch'] = !0),
                    (t['font-style'] = !0),
                    (t['font-synthesis'] = !0),
                    (t['font-variant'] = !0),
                    (t['font-variant-alternates'] = !0),
                    (t['font-variant-caps'] = !0),
                    (t['font-variant-east-asian'] = !0),
                    (t['font-variant-ligatures'] = !0),
                    (t['font-variant-numeric'] = !0),
                    (t['font-variant-position'] = !0),
                    (t['font-weight'] = !0),
                    (t.grid = !1),
                    (t['grid-area'] = !1),
                    (t['grid-auto-columns'] = !1),
                    (t['grid-auto-flow'] = !1),
                    (t['grid-auto-rows'] = !1),
                    (t['grid-column'] = !1),
                    (t['grid-column-end'] = !1),
                    (t['grid-column-start'] = !1),
                    (t['grid-row'] = !1),
                    (t['grid-row-end'] = !1),
                    (t['grid-row-start'] = !1),
                    (t['grid-template'] = !1),
                    (t['grid-template-areas'] = !1),
                    (t['grid-template-columns'] = !1),
                    (t['grid-template-rows'] = !1),
                    (t['hanging-punctuation'] = !1),
                    (t.height = !0),
                    (t.hyphens = !1),
                    (t.icon = !1),
                    (t['image-orientation'] = !1),
                    (t['image-resolution'] = !1),
                    (t['ime-mode'] = !1),
                    (t['initial-letters'] = !1),
                    (t['inline-box-align'] = !1),
                    (t['justify-content'] = !1),
                    (t['justify-items'] = !1),
                    (t['justify-self'] = !1),
                    (t.left = !1),
                    (t['letter-spacing'] = !0),
                    (t['lighting-color'] = !0),
                    (t['line-box-contain'] = !1),
                    (t['line-break'] = !1),
                    (t['line-grid'] = !1),
                    (t['line-height'] = !1),
                    (t['line-snap'] = !1),
                    (t['line-stacking'] = !1),
                    (t['line-stacking-ruby'] = !1),
                    (t['line-stacking-shift'] = !1),
                    (t['line-stacking-strategy'] = !1),
                    (t['list-style'] = !0),
                    (t['list-style-image'] = !0),
                    (t['list-style-position'] = !0),
                    (t['list-style-type'] = !0),
                    (t.margin = !0),
                    (t['margin-bottom'] = !0),
                    (t['margin-left'] = !0),
                    (t['margin-right'] = !0),
                    (t['margin-top'] = !0),
                    (t['marker-offset'] = !1),
                    (t['marker-side'] = !1),
                    (t.marks = !1),
                    (t.mask = !1),
                    (t['mask-box'] = !1),
                    (t['mask-box-outset'] = !1),
                    (t['mask-box-repeat'] = !1),
                    (t['mask-box-slice'] = !1),
                    (t['mask-box-source'] = !1),
                    (t['mask-box-width'] = !1),
                    (t['mask-clip'] = !1),
                    (t['mask-image'] = !1),
                    (t['mask-origin'] = !1),
                    (t['mask-position'] = !1),
                    (t['mask-repeat'] = !1),
                    (t['mask-size'] = !1),
                    (t['mask-source-type'] = !1),
                    (t['mask-type'] = !1),
                    (t['max-height'] = !0),
                    (t['max-lines'] = !1),
                    (t['max-width'] = !0),
                    (t['min-height'] = !0),
                    (t['min-width'] = !0),
                    (t['move-to'] = !1),
                    (t['nav-down'] = !1),
                    (t['nav-index'] = !1),
                    (t['nav-left'] = !1),
                    (t['nav-right'] = !1),
                    (t['nav-up'] = !1),
                    (t['object-fit'] = !1),
                    (t['object-position'] = !1),
                    (t.opacity = !1),
                    (t.order = !1),
                    (t.orphans = !1),
                    (t.outline = !1),
                    (t['outline-color'] = !1),
                    (t['outline-offset'] = !1),
                    (t['outline-style'] = !1),
                    (t['outline-width'] = !1),
                    (t.overflow = !1),
                    (t['overflow-wrap'] = !1),
                    (t['overflow-x'] = !1),
                    (t['overflow-y'] = !1),
                    (t.padding = !0),
                    (t['padding-bottom'] = !0),
                    (t['padding-left'] = !0),
                    (t['padding-right'] = !0),
                    (t['padding-top'] = !0),
                    (t.page = !1),
                    (t['page-break-after'] = !1),
                    (t['page-break-before'] = !1),
                    (t['page-break-inside'] = !1),
                    (t['page-policy'] = !1),
                    (t.pause = !1),
                    (t['pause-after'] = !1),
                    (t['pause-before'] = !1),
                    (t.perspective = !1),
                    (t['perspective-origin'] = !1),
                    (t.pitch = !1),
                    (t['pitch-range'] = !1),
                    (t['play-during'] = !1),
                    (t.position = !1),
                    (t['presentation-level'] = !1),
                    (t.quotes = !1),
                    (t['region-fragment'] = !1),
                    (t.resize = !1),
                    (t.rest = !1),
                    (t['rest-after'] = !1),
                    (t['rest-before'] = !1),
                    (t.richness = !1),
                    (t.right = !1),
                    (t.rotation = !1),
                    (t['rotation-point'] = !1),
                    (t['ruby-align'] = !1),
                    (t['ruby-merge'] = !1),
                    (t['ruby-position'] = !1),
                    (t['shape-image-threshold'] = !1),
                    (t['shape-outside'] = !1),
                    (t['shape-margin'] = !1),
                    (t.size = !1),
                    (t.speak = !1),
                    (t['speak-as'] = !1),
                    (t['speak-header'] = !1),
                    (t['speak-numeral'] = !1),
                    (t['speak-punctuation'] = !1),
                    (t['speech-rate'] = !1),
                    (t.stress = !1),
                    (t['string-set'] = !1),
                    (t['tab-size'] = !1),
                    (t['table-layout'] = !1),
                    (t['text-align'] = !0),
                    (t['text-align-last'] = !0),
                    (t['text-combine-upright'] = !0),
                    (t['text-decoration'] = !0),
                    (t['text-decoration-color'] = !0),
                    (t['text-decoration-line'] = !0),
                    (t['text-decoration-skip'] = !0),
                    (t['text-decoration-style'] = !0),
                    (t['text-emphasis'] = !0),
                    (t['text-emphasis-color'] = !0),
                    (t['text-emphasis-position'] = !0),
                    (t['text-emphasis-style'] = !0),
                    (t['text-height'] = !0),
                    (t['text-indent'] = !0),
                    (t['text-justify'] = !0),
                    (t['text-orientation'] = !0),
                    (t['text-overflow'] = !0),
                    (t['text-shadow'] = !0),
                    (t['text-space-collapse'] = !0),
                    (t['text-transform'] = !0),
                    (t['text-underline-position'] = !0),
                    (t['text-wrap'] = !0),
                    (t.top = !1),
                    (t.transform = !1),
                    (t['transform-origin'] = !1),
                    (t['transform-style'] = !1),
                    (t.transition = !1),
                    (t['transition-delay'] = !1),
                    (t['transition-duration'] = !1),
                    (t['transition-property'] = !1),
                    (t['transition-timing-function'] = !1),
                    (t['unicode-bidi'] = !1),
                    (t['vertical-align'] = !1),
                    (t.visibility = !1),
                    (t['voice-balance'] = !1),
                    (t['voice-duration'] = !1),
                    (t['voice-family'] = !1),
                    (t['voice-pitch'] = !1),
                    (t['voice-range'] = !1),
                    (t['voice-rate'] = !1),
                    (t['voice-stress'] = !1),
                    (t['voice-volume'] = !1),
                    (t.volume = !1),
                    (t['white-space'] = !1),
                    (t.widows = !1),
                    (t.width = !0),
                    (t['will-change'] = !1),
                    (t['word-break'] = !0),
                    (t['word-spacing'] = !0),
                    (t['word-wrap'] = !0),
                    (t['wrap-flow'] = !1),
                    (t['wrap-through'] = !1),
                    (t['writing-mode'] = !1),
                    (t['z-index'] = !1),
                    t
                );
            }
            var i = /javascript\s*\:/gim;
            ((e.whiteList = r()),
                (e.getDefaultWhiteList = r),
                (e.onAttr = function (t, e, r) {}),
                (e.onIgnoreAttr = function (t, e, r) {}),
                (e.safeAttrValue = function (t, e) {
                    return i.test(e) ? '' : e;
                }));
        },
        15107: (t, e, r) => {
            var i = r(35418),
                n = r(50994),
                o = r(97773);
            function s(t, e) {
                return new o(e).process(t);
            }
            for (var a in (((e = t.exports = s).filterXSS = s), (e.FilterXSS = o), i)) e[a] = i[a];
            for (var l in n) e[l] = n[l];
            ('undefined' != typeof window && (window.filterXSS = t.exports),
                'undefined' != typeof self &&
                    'undefined' != typeof DedicatedWorkerGlobalScope &&
                    self instanceof DedicatedWorkerGlobalScope &&
                    (self.filterXSS = t.exports));
        },
        16713: (t, e, r) => {
            'use strict';
            r.d(e, { A: () => n });
            var i = /\s/;
            let n = function (t) {
                for (var e = t.length; e-- && i.test(t.charAt(e)););
                return e;
            };
        },
        25426: (t, e, r) => {
            var i = r(11148),
                n = r(32784);
            function o(t) {
                (((t = (function (t) {
                    var e = {};
                    for (var r in t) e[r] = t[r];
                    return e;
                })(t || {})).whiteList = t.whiteList || i.whiteList),
                    (t.onAttr = t.onAttr || i.onAttr),
                    (t.onIgnoreAttr = t.onIgnoreAttr || i.onIgnoreAttr),
                    (t.safeAttrValue = t.safeAttrValue || i.safeAttrValue),
                    (this.options = t));
            }
            (r(29783),
                (o.prototype.process = function (t) {
                    if (!(t = (t = t || '').toString())) return '';
                    var e = this.options,
                        r = e.whiteList,
                        i = e.onAttr,
                        o = e.onIgnoreAttr,
                        s = e.safeAttrValue;
                    return n(t, function (t, e, n, a, l) {
                        var c = r[n],
                            u = !1;
                        if ((!0 === c ? (u = c) : 'function' == typeof c ? (u = c(a)) : c instanceof RegExp && (u = c.test(a)), !0 !== u && (u = !1), (a = s(n, a)))) {
                            var f = { position: e, sourcePosition: t, source: l, isWhite: u };
                            if (u) {
                                var g = i(n, a, f);
                                return null == g ? n + ':' + a : g;
                            }
                            var g = o(n, a, f);
                            if (null != g) return g;
                        }
                    });
                }),
                (t.exports = o));
        },
        28025: (t, e, r) => {
            'use strict';
            r.d(e, { A: () => o });
            var i = r(16713),
                n = /^\s+/;
            let o = function (t) {
                return t ? t.slice(0, (0, i.A)(t) + 1).replace(n, '') : t;
            };
        },
        29783: (t) => {
            t.exports = {
                indexOf: function (t, e) {
                    var r, i;
                    if (Array.prototype.indexOf) return t.indexOf(e);
                    for (r = 0, i = t.length; r < i; r++) if (t[r] === e) return r;
                    return -1;
                },
                forEach: function (t, e, r) {
                    var i, n;
                    if (Array.prototype.forEach) return t.forEach(e, r);
                    for (i = 0, n = t.length; i < n; i++) e.call(r, t[i], i, t);
                },
                trim: function (t) {
                    return String.prototype.trim ? t.trim() : t.replace(/(^\s*)|(\s*$)/g, '');
                },
                trimRight: function (t) {
                    return String.prototype.trimRight ? t.trimRight() : t.replace(/(\s*$)/g, '');
                },
            };
        },
        31534: (t, e, r) => {
            'use strict';
            r.d(e, { A: () => s });
            var i = r(60058),
                n = r(47256),
                o = r(83107);
            let s = function (t) {
                return 'string' == typeof t || (!(0, n.A)(t) && (0, o.A)(t) && '[object String]' == (0, i.A)(t));
            };
        },
        32024: (t, e, r) => {
            'use strict';
            r.d(e, { A: () => i });
            let i = r(75492).A.Symbol;
        },
        32784: (t, e, r) => {
            var i = r(29783);
            t.exports = function (t, e) {
                ';' !== (t = i.trimRight(t))[t.length - 1] && (t += ';');
                var r = t.length,
                    n = !1,
                    o = 0,
                    s = 0,
                    a = '';
                function l() {
                    if (!n) {
                        var r = i.trim(t.slice(o, s)),
                            l = r.indexOf(':');
                        if (-1 !== l) {
                            var c = i.trim(r.slice(0, l)),
                                u = i.trim(r.slice(l + 1));
                            if (c) {
                                var f = e(o, a.length, c, u, r);
                                f && (a += f + '; ');
                            }
                        }
                    }
                    o = s + 1;
                }
                for (; s < r; s++) {
                    var c = t[s];
                    if ('/' === c && '*' === t[s + 1]) {
                        var u = t.indexOf('*/', s + 2);
                        if (-1 === u) break;
                        ((o = (s = u + 1) + 1), (n = !1));
                    } else '(' === c ? (n = !0) : ')' === c ? (n = !1) : ';' === c ? n || l() : '\n' === c && l();
                }
                return i.trim(a);
            };
        },
        35418: (t, e, r) => {
            var i = r(47181).FilterCSS,
                n = r(47181).getDefaultWhiteList,
                o = r(82869);
            function s() {
                return {
                    a: ['target', 'href', 'title'],
                    abbr: ['title'],
                    address: [],
                    area: ['shape', 'coords', 'href', 'alt'],
                    article: [],
                    aside: [],
                    audio: ['autoplay', 'controls', 'crossorigin', 'loop', 'muted', 'preload', 'src'],
                    b: [],
                    bdi: ['dir'],
                    bdo: ['dir'],
                    big: [],
                    blockquote: ['cite'],
                    br: [],
                    caption: [],
                    center: [],
                    cite: [],
                    code: [],
                    col: ['align', 'valign', 'span', 'width'],
                    colgroup: ['align', 'valign', 'span', 'width'],
                    dd: [],
                    del: ['datetime'],
                    details: ['open'],
                    div: [],
                    dl: [],
                    dt: [],
                    em: [],
                    figcaption: [],
                    figure: [],
                    font: ['color', 'size', 'face'],
                    footer: [],
                    h1: [],
                    h2: [],
                    h3: [],
                    h4: [],
                    h5: [],
                    h6: [],
                    header: [],
                    hr: [],
                    i: [],
                    img: ['src', 'alt', 'title', 'width', 'height', 'loading'],
                    ins: ['datetime'],
                    kbd: [],
                    li: [],
                    mark: [],
                    nav: [],
                    ol: [],
                    p: [],
                    pre: [],
                    s: [],
                    section: [],
                    small: [],
                    span: [],
                    sub: [],
                    summary: [],
                    sup: [],
                    strong: [],
                    strike: [],
                    table: ['width', 'border', 'align', 'valign'],
                    tbody: ['align', 'valign'],
                    td: ['width', 'rowspan', 'colspan', 'align', 'valign'],
                    tfoot: ['align', 'valign'],
                    th: ['width', 'rowspan', 'colspan', 'align', 'valign'],
                    thead: ['align', 'valign'],
                    tr: ['rowspan', 'align', 'valign'],
                    tt: [],
                    u: [],
                    ul: [],
                    video: ['autoplay', 'controls', 'crossorigin', 'loop', 'muted', 'playsinline', 'poster', 'preload', 'src', 'height', 'width'],
                };
            }
            var a = new i();
            function l(t) {
                return t.replace(c, '&lt;').replace(u, '&gt;');
            }
            var c = /</g,
                u = />/g,
                f = /"/g,
                g = /&quot;/g,
                d = /&#([a-zA-Z0-9]*);?/gim,
                p = /&colon;?/gim,
                h = /&newline;?/gim,
                m = /((j\s*a\s*v\s*a|v\s*b|l\s*i\s*v\s*e)\s*s\s*c\s*r\s*i\s*p\s*t\s*|m\s*o\s*c\s*h\s*a):/gi,
                b = /e\s*x\s*p\s*r\s*e\s*s\s*s\s*i\s*o\s*n\s*\(.*/gi,
                v = /u\s*r\s*l\s*\(.*/gi;
            function y(t) {
                return t.replace(f, '&quot;');
            }
            function A(t) {
                return t.replace(g, '"');
            }
            function w(t) {
                return t.replace(d, function (t, e) {
                    return 'x' === e[0] || 'X' === e[0] ? String.fromCharCode(parseInt(e.substr(1), 16)) : String.fromCharCode(parseInt(e, 10));
                });
            }
            function x(t) {
                return t.replace(p, ':').replace(h, ' ');
            }
            function k(t) {
                for (var e = '', r = 0, i = t.length; r < i; r++) e += 32 > t.charCodeAt(r) ? ' ' : t.charAt(r);
                return o.trim(e);
            }
            function S(t) {
                return (t = k((t = x((t = w((t = A(t))))))));
            }
            function T(t) {
                return (t = l((t = y(t))));
            }
            ((e.whiteList = s()),
                (e.getDefaultWhiteList = s),
                (e.onTag = function (t, e, r) {}),
                (e.onIgnoreTag = function (t, e, r) {}),
                (e.onTagAttr = function (t, e, r) {}),
                (e.onIgnoreTagAttr = function (t, e, r) {}),
                (e.safeAttrValue = function (t, e, r, i) {
                    if (((r = S(r)), 'href' === e || 'src' === e)) {
                        if ('#' === (r = o.trim(r))) return '#';
                        if (
                            'http://' !== r.substr(0, 7) &&
                            'https://' !== r.substr(0, 8) &&
                            'mailto:' !== r.substr(0, 7) &&
                            'tel:' !== r.substr(0, 4) &&
                            'data:image/' !== r.substr(0, 11) &&
                            'ftp://' !== r.substr(0, 6) &&
                            './' !== r.substr(0, 2) &&
                            '../' !== r.substr(0, 3) &&
                            '#' !== r[0] &&
                            '/' !== r[0]
                        )
                            return '';
                    } else if ('background' === e) {
                        if (((m.lastIndex = 0), m.test(r))) return '';
                    } else if ('style' === e) {
                        if (((b.lastIndex = 0), b.test(r) || ((v.lastIndex = 0), v.test(r) && ((m.lastIndex = 0), m.test(r))))) return '';
                        !1 !== i && (r = (i = i || a).process(r));
                    }
                    return (r = T(r));
                }),
                (e.escapeHtml = l),
                (e.escapeQuote = y),
                (e.unescapeQuote = A),
                (e.escapeHtmlEntities = w),
                (e.escapeDangerHtml5Entities = x),
                (e.clearNonPrintableCharacter = k),
                (e.friendlyAttrValue = S),
                (e.escapeAttrValue = T),
                (e.onIgnoreTagStripAll = function () {
                    return '';
                }),
                (e.StripTagBody = function (t, e) {
                    'function' != typeof e && (e = function () {});
                    var r = !Array.isArray(t),
                        i = [],
                        n = !1;
                    return {
                        onIgnoreTag: function (s, a, l) {
                            if (r ? 0 : -1 === o.indexOf(t, s)) return e(s, a, l);
                            if (!l.isClosing) return (n || (n = l.position), '[removed]');
                            var c = '[/removed]',
                                u = l.position + c.length;
                            return (i.push([!1 !== n ? n : l.position, u]), (n = !1), c);
                        },
                        remove: function (t) {
                            var e = '',
                                r = 0;
                            return (
                                o.forEach(i, function (i) {
                                    ((e += t.slice(r, i[0])), (r = i[1]));
                                }),
                                (e += t.slice(r))
                            );
                        },
                    };
                }),
                (e.stripCommentTag = function (t) {
                    for (var e = '', r = 0; r < t.length;) {
                        var i = t.indexOf('\x3c!--', r);
                        if (-1 === i) {
                            e += t.slice(r);
                            break;
                        }
                        e += t.slice(r, i);
                        var n = t.indexOf('--\x3e', i);
                        if (-1 === n) break;
                        r = n + 3;
                    }
                    return e;
                }),
                (e.stripBlankChar = function (t) {
                    var e = t.split('');
                    return (e = e.filter(function (t) {
                        var e = t.charCodeAt(0);
                        return 127 !== e && (!(e <= 31) || 10 === e || 13 === e);
                    })).join('');
                }),
                (e.attributeWrapSign = '"'),
                (e.cssFilter = a),
                (e.getDefaultCSSWhiteList = n));
        },
        47181: (t, e, r) => {
            var i = r(11148),
                n = r(25426);
            for (var o in (((e = t.exports =
                function (t, e) {
                    return new n(e).process(t);
                }).FilterCSS = n),
            i))
                e[o] = i[o];
            'undefined' != typeof window && (window.filterCSS = t.exports);
        },
        47256: (t, e, r) => {
            'use strict';
            r.d(e, { A: () => i });
            let i = Array.isArray;
        },
        50994: (t, e, r) => {
            var i = r(82869),
                n = /[^a-zA-Z0-9\\_:.-]/gim;
            function o(t) {
                return ('"' === t[0] && '"' === t[t.length - 1]) || ("'" === t[0] && "'" === t[t.length - 1]) ? t.substr(1, t.length - 2) : t;
            }
            ((e.parseTag = function (t, e, r) {
                'use strict';
                var n = '',
                    o = 0,
                    s = !1,
                    a = !1,
                    l = 0,
                    c = t.length,
                    u = '',
                    f = '';
                t: for (l = 0; l < c; l++) {
                    var g = t.charAt(l);
                    if (!1 === s) {
                        if ('<' === g) {
                            s = l;
                            continue;
                        }
                    } else if (!1 === a) {
                        if ('<' === g) {
                            ((n += r(t.slice(o, l))), (s = l), (o = l));
                            continue;
                        }
                        if ('>' === g || l === c - 1) {
                            ((n += r(t.slice(o, s))),
                                (u = (function (t) {
                                    var e,
                                        r = i.spaceIndex(t);
                                    return (
                                        (e = -1 === r ? t.slice(1, -1) : t.slice(1, r + 1)),
                                        '/' === (e = i.trim(e).toLowerCase()).slice(0, 1) && (e = e.slice(1)),
                                        '/' === e.slice(-1) && (e = e.slice(0, -1)),
                                        e
                                    );
                                })((f = t.slice(s, l + 1)))),
                                (n += e(s, n.length, u, f, '</' === f.slice(0, 2))),
                                (o = l + 1),
                                (s = !1));
                            continue;
                        }
                        if ('"' === g || "'" === g)
                            for (var d = 1, p = t.charAt(l - d); '' === p.trim() || '=' === p;) {
                                if ('=' === p) {
                                    a = g;
                                    continue t;
                                }
                                p = t.charAt(l - ++d);
                            }
                    } else if (g === a) {
                        a = !1;
                        continue;
                    }
                }
                return (o < c && (n += r(t.substr(o))), n);
            }),
                (e.parseAttr = function (t, e) {
                    'use strict';
                    var r = 0,
                        s = 0,
                        a = [],
                        l = !1,
                        c = t.length;
                    function u(t, r) {
                        if (!((t = (t = i.trim(t)).replace(n, '').toLowerCase()).length < 1)) {
                            var o = e(t, r || '');
                            o && a.push(o);
                        }
                    }
                    for (var f = 0; f < c; f++) {
                        var g,
                            d = t.charAt(f);
                        if (!1 === l && '=' === d) {
                            ((l = t.slice(r, f)),
                                (r = f + 1),
                                (s =
                                    '"' === t.charAt(r) || "'" === t.charAt(r)
                                        ? r
                                        : (function (t, e) {
                                              for (; e < t.length; e++) {
                                                  var r = t[e];
                                                  if (' ' !== r) {
                                                      if ("'" === r || '"' === r) return e;
                                                      return -1;
                                                  }
                                              }
                                          })(t, f + 1)));
                            continue;
                        }
                        if (!1 !== l && f === s) {
                            if (-1 === (g = t.indexOf(d, f + 1))) break;
                            (u(l, i.trim(t.slice(s + 1, g))), (l = !1), (r = (f = g) + 1));
                            continue;
                        }
                        if (/\s|\n|\t/.test(d)) {
                            if (((t = t.replace(/\s|\n|\t/g, ' ')), !1 === l)) {
                                if (
                                    -1 ===
                                    (g = (function (t, e) {
                                        for (; e < t.length; e++) {
                                            var r = t[e];
                                            if (' ' !== r) {
                                                if ('=' === r) return e;
                                                return -1;
                                            }
                                        }
                                    })(t, f))
                                ) {
                                    (u(i.trim(t.slice(r, f))), (l = !1), (r = f + 1));
                                    continue;
                                }
                                f = g - 1;
                                continue;
                            }
                            if (
                                -1 !==
                                (g = (function (t, e) {
                                    for (; e > 0; e--) {
                                        var r = t[e];
                                        if (' ' !== r) {
                                            if ('=' === r) return e;
                                            return -1;
                                        }
                                    }
                                })(t, f - 1))
                            )
                                continue;
                            (u(l, o(i.trim(t.slice(r, f)))), (l = !1), (r = f + 1));
                            continue;
                        }
                    }
                    return (r < t.length && (!1 === l ? u(t.slice(r)) : u(l, o(i.trim(t.slice(r))))), i.trim(a.join(' ')));
                }));
        },
        52911: (t, e, r) => {
            'use strict';
            r.d(e, { A: () => f });
            var i = r(28025),
                n = r(83556),
                o = r(86867),
                s = 0 / 0,
                a = /^[-+]0x[0-9a-f]+$/i,
                l = /^0b[01]+$/i,
                c = /^0o[0-7]+$/i,
                u = parseInt;
            let f = function (t) {
                if ('number' == typeof t) return t;
                if ((0, o.A)(t)) return s;
                if ((0, n.A)(t)) {
                    var e = 'function' == typeof t.valueOf ? t.valueOf() : t;
                    t = (0, n.A)(e) ? e + '' : e;
                }
                if ('string' != typeof t) return 0 === t ? t : +t;
                t = (0, i.A)(t);
                var r = l.test(t);
                return r || c.test(t) ? u(t.slice(2), r ? 2 : 8) : a.test(t) ? s : +t;
            };
        },
        60058: (t, e, r) => {
            'use strict';
            r.d(e, { A: () => f });
            var i = r(32024),
                n = Object.prototype,
                o = n.hasOwnProperty,
                s = n.toString,
                a = i.A ? i.A.toStringTag : void 0;
            let l = function (t) {
                var e = o.call(t, a),
                    r = t[a];
                try {
                    t[a] = void 0;
                    var i = !0;
                } catch (t) {}
                var n = s.call(t);
                return (i && (e ? (t[a] = r) : delete t[a]), n);
            };
            var c = Object.prototype.toString,
                u = i.A ? i.A.toStringTag : void 0;
            let f = function (t) {
                return null == t ? (void 0 === t ? '[object Undefined]' : '[object Null]') : u && u in Object(t) ? l(t) : c.call(t);
            };
        },
        62060: (t, e, r) => {
            'use strict';
            r.d(e, { A: () => l });
            var i = r(83556),
                n = r(67853),
                o = r(52911),
                s = Math.max,
                a = Math.min;
            let l = function (t, e, r) {
                var l,
                    c,
                    u,
                    f,
                    g,
                    d,
                    p = 0,
                    h = !1,
                    m = !1,
                    b = !0;
                if ('function' != typeof t) throw TypeError('Expected a function');
                function v(e) {
                    var r = l,
                        i = c;
                    return ((l = c = void 0), (p = e), (f = t.apply(i, r)));
                }
                function y(t) {
                    var r = t - d,
                        i = t - p;
                    return void 0 === d || r >= e || r < 0 || (m && i >= u);
                }
                function A() {
                    var t,
                        r,
                        i,
                        o = (0, n.A)();
                    if (y(o)) return w(o);
                    g = setTimeout(A, ((t = o - d), (r = o - p), (i = e - t), m ? a(i, u - r) : i));
                }
                function w(t) {
                    return ((g = void 0), b && l) ? v(t) : ((l = c = void 0), f);
                }
                function x() {
                    var t,
                        r = (0, n.A)(),
                        i = y(r);
                    if (((l = arguments), (c = this), (d = r), i)) {
                        if (void 0 === g) return ((p = t = d), (g = setTimeout(A, e)), h ? v(t) : f);
                        if (m) return (clearTimeout(g), (g = setTimeout(A, e)), v(d));
                    }
                    return (void 0 === g && (g = setTimeout(A, e)), f);
                }
                return (
                    (e = (0, o.A)(e) || 0),
                    (0, i.A)(r) && ((h = !!r.leading), (u = (m = 'maxWait' in r) ? s((0, o.A)(r.maxWait) || 0, e) : u), (b = 'trailing' in r ? !!r.trailing : b)),
                    (x.cancel = function () {
                        (void 0 !== g && clearTimeout(g), (p = 0), (l = d = c = g = void 0));
                    }),
                    (x.flush = function () {
                        return void 0 === g ? f : w((0, n.A)());
                    }),
                    x
                );
            };
        },
        62385: (t, e, r) => {
            'use strict';
            r.d(e, { A: () => i });
            let i = 'object' == typeof global && global && global.Object === Object && global;
        },
        67853: (t, e, r) => {
            'use strict';
            r.d(e, { A: () => n });
            var i = r(75492);
            let n = function () {
                return i.A.Date.now();
            };
        },
        75492: (t, e, r) => {
            'use strict';
            r.d(e, { A: () => o });
            var i = r(62385),
                n = 'object' == typeof self && self && self.Object === Object && self;
            let o = i.A || n || Function('return this')();
        },
        82869: (t) => {
            t.exports = {
                indexOf: function (t, e) {
                    var r, i;
                    if (Array.prototype.indexOf) return t.indexOf(e);
                    for (r = 0, i = t.length; r < i; r++) if (t[r] === e) return r;
                    return -1;
                },
                forEach: function (t, e, r) {
                    var i, n;
                    if (Array.prototype.forEach) return t.forEach(e, r);
                    for (i = 0, n = t.length; i < n; i++) e.call(r, t[i], i, t);
                },
                trim: function (t) {
                    return String.prototype.trim ? t.trim() : t.replace(/(^\s*)|(\s*$)/g, '');
                },
                spaceIndex: function (t) {
                    var e = /\s|\n|\t/.exec(t);
                    return e ? e.index : -1;
                },
            };
        },
        83107: (t, e, r) => {
            'use strict';
            r.d(e, { A: () => i });
            let i = function (t) {
                return null != t && 'object' == typeof t;
            };
        },
        83556: (t, e, r) => {
            'use strict';
            r.d(e, { A: () => i });
            let i = function (t) {
                var e = typeof t;
                return null != t && ('object' == e || 'function' == e);
            };
        },
        85472: (t, e, r) => {
            'use strict';
            (r.r(e),
                r.d(e, {
                    AVATAR_DEFAULT_SIZE: () => w,
                    BurstDebounce: () => P,
                    TLD_MARK: () => u,
                    UrlPolicyRejectionReason: () => i,
                    UrlProtocol: () => n,
                    createAvatarUrl: () => k,
                    createAvatarVideoUrl: () => L,
                    createBurstDebounceDebugLogger: () => N,
                    createObjectFromError: () =>
                        function t(e, r = new WeakSet()) {
                            try {
                                if ('object' == typeof e && null !== e) {
                                    if (r.has(e)) return { '[Circular]': !0 };
                                    r.add(e);
                                    let i = O.reduce((i, n) => {
                                        let o = e[n];
                                        return (
                                            void 0 === o || (('cause' === n || 'error' === n) && 'object' == typeof o && null !== o ? (i[n] = t(o, r)) : (i[n] = o)),
                                            i
                                        );
                                    }, {});
                                    return ((i.ownProperties = Object.getOwnPropertyNames(e).reduce((t, r) => (O.includes(r) || (t[r] = e[r]), t), {})), i);
                                }
                                return { error: e };
                            } catch (r) {
                                let t = { name: '', message: '' };
                                return (r instanceof Error && ((t.name = r.name), (t.message = r.message)), { error: e, serializationError: t });
                            }
                        },
                    createVsid: () => _,
                    getDataAttrFromProps: () => $,
                    getLinkAttributesBase: () => C,
                    getPathnameFromUrl: () => f,
                    getTldFromHost: () => c,
                    getTldHost: () => l,
                    hexToHsl: () => F,
                    hexToRgb: () => U,
                    httpsReplacer: () => A,
                    isRecord: () => W,
                    isSafeDecodedPathname: () => p,
                    isSafeUrlPathnameAfterDecode: () => h,
                    mergeTestIds: () => j,
                    parseJSONSafely: () => E,
                    resolveUrlByPolicy: () => V,
                    sanitizeDOM: () => y,
                    stringifyJSONSafely: () => b,
                    toBoolean: () => a,
                }));
            var i,
                n,
                o = r(31534);
            let s = ['1', 'true', 'on', 'yes'];
            function a(t) {
                return !!(!0 === t || 1 === t || ((0, o.A)(t) && s.includes(t.trim().toLowerCase())));
            }
            let l = (t, e, r) => t.replace(r, e),
                c = (t) => {
                    let e = t?.split(':')[0];
                    return (e?.includes('.') && e?.split('.').pop()) || '';
                },
                u = '{tld}';
            function f(t) {
                return t.split(/[?#]/)[0] ?? '';
            }
            let g = /%(?:25|2e|2f|5c)/i,
                d = /(^|[\\/])\.\.([\\/]|$)/;
            function p(t) {
                return !d.test(t) && !g.test(t);
            }
            function h(t) {
                let e,
                    r = f(t);
                try {
                    e = decodeURIComponent(r);
                } catch {
                    return !1;
                }
                return p(e);
            }
            var m = r(2668);
            function b(t, e = !0) {
                return m(t, { isJSON: e });
            }
            var v = r(15107);
            function y(t, e = { whiteList: { a: ['href', 'target', 'rel'], br: [], strong: [], em: [], sup: [], sub: [], p: [], span: ['class'], div: ['class'] } }) {
                return v(t, e);
            }
            let A = (t) => `https://${t.replace(/^(https*:\/\/)/, '')}`,
                w = 100,
                x = [30, 50, 80, 100, 200, 300, 400, 600, 800, 1e3],
                k = (t, e, r) => {
                    let i;
                    if ('orig' === e) i = 'orig';
                    else {
                        let t = e ? ((t) => [...x].sort((e, r) => Math.abs(t - e) - Math.abs(t - r))[0] || w)(e) : w;
                        i = r ? `m${t}x${t}` : `${t}x${t}`;
                    }
                    return A(t.replace('%%', i));
                },
                S = [
                    { width: 400, height: 300 },
                    { width: 1280, height: 720 },
                    { width: 1920, height: 1080 },
                ],
                T = S[0],
                I = (t) => `${t.width}x${t.height}`,
                L = (t, e) => {
                    let r;
                    return (
                        (r = 'orig' === e ? 'orig' : e ? ((t) => I([...S].sort((e, r) => Math.abs(t - e.height) - Math.abs(t - r.height))[0] || T))(e) : I(T)),
                        A(t.replace('%%', r))
                    );
                };
            function _(t, e) {
                let r = '';
                for (; r.length < 44;) r += (Math.random() + 1).toString(36).substring(3);
                r = r.slice(0, 44);
                let i = t.toString().slice(0, 10);
                return `${r}x${e}x0001x${i}`;
            }
            let O = ['name', 'message', 'stack', 'cause', 'colno', 'lineno', 'filename', 'error', 'data', 'code', 'type', 'detail'],
                C = (t, e) => {
                    let r,
                        { params: i = {}, query: n = {}, options: o = {} } = e ?? {},
                        { isExternalLink: s, host: a, linkType: l, lang: c } = o;
                    if (((r = Object.entries(i).reduce((t, [e, r]) => t.replace(`:${e}`, encodeURIComponent(String(r))), t)), Object.keys(n).length && !l)) {
                        let [t, ...e] = r.split('#'),
                            i = e.length > 0 ? `#${e.join('#')}` : '',
                            o = ((t, e) => {
                                let r = {};
                                for (let [e, i] of Object.entries(t)) r[e] = String(i);
                                let i = new URLSearchParams(r).toString();
                                return i ? (e ? `&${i}` : `?${i}`) : '';
                            })(n, t?.includes('?'));
                        r = `${t}${o}${i}`;
                    }
                    let u = !a;
                    u || (a.endsWith('/') && (r = r.startsWith('/') ? r.substring(1) : r), (r = `${a}${r}`));
                    let f = s ?? !u,
                        g = {
                            href: r,
                            target: ((t, e) => {
                                if (!t) return e ? '_blank' : '_self';
                            })(l, f),
                            rel: ((t, e) => t || (e ? 'noreferrer noopener' : ''))(l, f),
                        };
                    return ('alternate' === l && c && (g.hrefLang = c), g);
                };
            function E(t, e = console) {
                if (!t) return null;
                try {
                    return JSON.parse(t);
                } catch (t) {
                    return ((t instanceof Error || 'string' == typeof t) && e.error(t), null);
                }
            }
            function j(t, e) {
                return [
                    ...(t || []),
                    ...(e || '')
                        .split(';')
                        .map((t) => {
                            let e = t.trim();
                            if (!e) return;
                            let r = e.split(/[,:]/)[0];
                            if (!r) return;
                            let i = Number(r);
                            return Number.isNaN(i) ? void 0 : i;
                        })
                        .filter((t) => void 0 !== t),
                ];
            }
            let D = /^data-[a-zA-Z0-9-_]+$/,
                $ = (t) => Object.entries(t).reduce((t, [e, r]) => (D.test(e) && 'string' == typeof r && (t[e] = r), t), {});
            var R = r(62060);
            let B = '[BurstDebounce]',
                M = { event: 'color: #0891B2; font-weight: 700', state: 'color: #7C3AED; font-weight: 600', lifecycle: 'color: #D97706; font-weight: 700' };
            function N(t = !1) {
                return {
                    logGroup: function (e, r, i) {
                        if (!t) return;
                        let n = M[i?.type ?? 'state'];
                        (i?.collapsed ? console.groupCollapsed(`%c${B} ${e}`, n) : console.group(`%c${B} ${e}`, n),
                            r && (Object.values(r).some((t) => null !== t && 'object' == typeof t) ? console.log(`%c${B}`, 'color: #6B7280', r) : console.table(r)),
                            console.groupEnd());
                    },
                };
            }
            class P {
                callback;
                config;
                recentTimestamps = [];
                isBurstMode = !1;
                lastInvokeAt = 0;
                debouncedCallback;
                isPendingState = !1;
                debugLogger;
                constructor({ callback: t, config: e, enableDebugLogging: r = !1 }) {
                    if (!Number.isInteger(e.burstThreshold) || e.burstThreshold < 1)
                        throw RangeError(`BurstDebounce config.burstThreshold must be a positive integer, got ${e.burstThreshold}`);
                    ((this.callback = t),
                        (this.config = e),
                        (this.debugLogger = N(r)),
                        this.logLifecycle('created', { ...this.config }),
                        (this.debouncedCallback = (0, R.A)(() => {
                            ((this.isPendingState = !1), this.logEvent('debounced callback execute'), this.callback());
                        }, e.delay)));
                }
                invoke() {
                    let t = Date.now();
                    if ((this.refreshBurstIdle(t), this.registerAndCheckBurst(t), this.isBurstMode)) {
                        ((this.isPendingState = !0), this.logEvent('invoke -> schedule debounced callback'), this.debouncedCallback());
                        return;
                    }
                    (this.logEvent('invoke -> execute callback immediately'), this.callback());
                }
                cancel() {
                    ((this.isPendingState = !1), this.debouncedCallback.cancel(), this.logLifecycle('cancel pending callback'));
                }
                get isPending() {
                    return this.isPendingState;
                }
                dispose() {
                    ((this.isPendingState = !1),
                        this.debouncedCallback.cancel(),
                        (this.recentTimestamps = []),
                        (this.isBurstMode = !1),
                        (this.lastInvokeAt = 0),
                        this.logLifecycle('dispose instance state'));
                }
                refreshBurstIdle(t) {
                    this.isBurstMode &&
                        t - this.lastInvokeAt > this.config.burstExitIdleMs &&
                        ((this.isBurstMode = !1), (this.recentTimestamps = []), this.logState('burst mode reset by idle timeout'));
                }
                logEvent(t) {
                    this.debugLogger.logGroup(`event: ${t}`, this.getDebugSnapshot(), { type: 'event' });
                }
                logState(t) {
                    this.debugLogger.logGroup(`state: ${t}`, this.getDebugSnapshot(), { type: 'state' });
                }
                logLifecycle(t, e) {
                    this.debugLogger.logGroup(`lifecycle: ${t}`, e ?? this.getDebugSnapshot(), { type: 'lifecycle' });
                }
                getDebugSnapshot() {
                    let t = Date.now();
                    return {
                        isBurstMode: this.isBurstMode,
                        pending: this.isPendingState,
                        recentTimestampsLength: this.recentTimestamps.length,
                        msSinceLastInvoke: 0 === this.lastInvokeAt ? null : t - this.lastInvokeAt,
                    };
                }
                registerAndCheckBurst(t) {
                    let e = this.config.burstThreshold;
                    for (this.recentTimestamps.push(t); this.recentTimestamps.length > e;) this.recentTimestamps.shift();
                    if (this.recentTimestamps.length === e) {
                        let e = this.recentTimestamps[0];
                        void 0 !== e && t - e <= this.config.burstWindowMs && (this.isBurstMode = !0);
                    }
                    this.lastInvokeAt = t;
                }
            }
            let U = (t) => ({ r: parseInt(t.slice(1, 3), 16), g: parseInt(t.slice(3, 5), 16), b: parseInt(t.slice(5, 7), 16) }),
                F = (t) => {
                    let { r: e, g: r, b: i } = U(t),
                        n = Math.min((e /= 255), (r /= 255), (i /= 255)),
                        o = Math.max(e, r, i),
                        s = o - n,
                        a = 0,
                        l = 0,
                        c = (n + o) / 2;
                    return (
                        (a = Math.round(60 * (a = 0 === s ? 0 : o === e ? ((r - i) / s) % 6 : o === r ? (i - e) / s + 2 : (e - r) / s + 4))) < 0 && (a += 360),
                        0 !== s && (l = s / (1 - Math.abs(2 * c - 1))),
                        { h: a, s: Number((100 * l).toFixed(1)), l: Number((100 * c).toFixed(1)) }
                    );
                },
                W = (t) => 'object' == typeof t && null !== t && !Array.isArray(t);
            !(function (t) {
                ((t.INVALID_URL = 'invalid-url'), (t.DISALLOWED_PROTOCOL = 'disallowed-protocol'), (t.CREDENTIALS_NOT_ALLOWED = 'credentials-not-allowed'));
            })(i || (i = {}));
            let V = (t, e) => {
                let r;
                try {
                    r = void 0 === e.baseUrl ? new URL(t) : new URL(t, e.baseUrl);
                } catch {
                    return { isAllowed: !1, reason: i.INVALID_URL };
                }
                return e.allowedProtocols.has(r.protocol)
                    ? e.allowCredentials || ('' === r.username && '' === r.password)
                        ? { isAllowed: !0, url: r }
                        : { isAllowed: !1, reason: i.CREDENTIALS_NOT_ALLOWED }
                    : { isAllowed: !1, reason: i.DISALLOWED_PROTOCOL };
            };
            !(function (t) {
                ((t.HTTP = 'http:'), (t.HTTPS = 'https:'), (t.MAILTO = 'mailto:'), (t.TEL = 'tel:'));
            })(n || (n = {}));
        },
        86867: (t, e, r) => {
            'use strict';
            r.d(e, { A: () => o });
            var i = r(60058),
                n = r(83107);
            let o = function (t) {
                return 'symbol' == typeof t || ((0, n.A)(t) && '[object Symbol]' == (0, i.A)(t));
            };
        },
        97773: (t, e, r) => {
            var i = r(47181).FilterCSS,
                n = r(35418),
                o = r(50994),
                s = o.parseTag,
                a = o.parseAttr,
                l = r(82869);
            function c(t) {
                ((t = (function (t) {
                    var e = {};
                    for (var r in t) e[r] = t[r];
                    return e;
                })(t || {})).stripIgnoreTag &&
                    (t.onIgnoreTag && console.error('Notes: cannot use these two options "stripIgnoreTag" and "onIgnoreTag" at the same time'),
                    (t.onIgnoreTag = n.onIgnoreTagStripAll)),
                    t.whiteList || t.allowList
                        ? (t.whiteList = (function (t) {
                              var e = {};
                              for (var r in t)
                                  Array.isArray(t[r])
                                      ? (e[r.toLowerCase()] = t[r].map(function (t) {
                                            return t.toLowerCase();
                                        }))
                                      : (e[r.toLowerCase()] = t[r]);
                              return e;
                          })(t.whiteList || t.allowList))
                        : (t.whiteList = n.whiteList),
                    (this.attributeWrapSign = !0 === t.singleQuotedAttributeValue ? "'" : n.attributeWrapSign),
                    (t.onTag = t.onTag || n.onTag),
                    (t.onTagAttr = t.onTagAttr || n.onTagAttr),
                    (t.onIgnoreTag = t.onIgnoreTag || n.onIgnoreTag),
                    (t.onIgnoreTagAttr = t.onIgnoreTagAttr || n.onIgnoreTagAttr),
                    (t.safeAttrValue = t.safeAttrValue || n.safeAttrValue),
                    (t.escapeHtml = t.escapeHtml || n.escapeHtml),
                    (this.options = t),
                    !1 === t.css ? (this.cssFilter = !1) : ((t.css = t.css || {}), (this.cssFilter = new i(t.css))));
            }
            ((c.prototype.process = function (t) {
                if (!(t = (t = t || '').toString())) return '';
                var e = this.options,
                    r = e.whiteList,
                    i = e.onTag,
                    o = e.onIgnoreTag,
                    c = e.onTagAttr,
                    u = e.onIgnoreTagAttr,
                    f = e.safeAttrValue,
                    g = e.escapeHtml,
                    d = this.attributeWrapSign,
                    p = this.cssFilter;
                (e.stripBlankChar && (t = n.stripBlankChar(t)), e.allowCommentTag || (t = n.stripCommentTag(t)));
                var h = !1;
                e.stripIgnoreTagBody && (o = (h = n.StripTagBody(e.stripIgnoreTagBody, o)).onIgnoreTag);
                var m = s(
                    t,
                    function (t, e, n, s, h) {
                        var m = { sourcePosition: t, position: e, isClosing: h, isWhite: Object.prototype.hasOwnProperty.call(r, n) },
                            b = i(n, s, m);
                        if (null != b) return b;
                        if (m.isWhite) {
                            if (m.isClosing) return '</' + n + '>';
                            var v = (function (t) {
                                    var e = l.spaceIndex(t);
                                    if (-1 === e) return { html: '', closing: '/' === t[t.length - 2] };
                                    var r = '/' === (t = l.trim(t.slice(e + 1, -1)))[t.length - 1];
                                    return (r && (t = l.trim(t.slice(0, -1))), { html: t, closing: r });
                                })(s),
                                y = r[n],
                                A = a(v.html, function (t, e) {
                                    var r = -1 !== l.indexOf(y, t),
                                        i = c(n, t, e, r);
                                    return null != i ? i : r ? ((e = f(n, t, e, p)) ? t + '=' + d + e + d : t) : null != (i = u(n, t, e, r)) ? i : void 0;
                                });
                            return ((s = '<' + n), A && (s += ' ' + A), v.closing && (s += ' /'), (s += '>'));
                        }
                        return null != (b = o(n, s, m)) ? b : g(s);
                    },
                    g,
                );
                return (h && (m = h.remove(m)), m);
            }),
                (t.exports = c));
        },
    },
]);
