// node_modules/.pnpm/registry.npmmirror.com+mermaid@10.5.0/node_modules/mermaid/dist/mermaid-e4a58915.js
function oh(t9) {
  for (var e = [], i = 1; i < arguments.length; i++)
    e[i - 1] = arguments[i];
  var r = Array.from(typeof t9 == "string" ? [t9] : t9);
  r[r.length - 1] = r[r.length - 1].replace(/\r?\n([\t ]*)$/, "");
  var n = r.reduce(function(a, l) {
    var h = l.match(/\n([\t ]+|(?!\s).)/g);
    return h ? a.concat(h.map(function(c) {
      var f, g;
      return (g = (f = c.match(/[\t ]/g)) === null || f === void 0 ? void 0 : f.length) !== null && g !== void 0 ? g : 0;
    })) : a;
  }, []);
  if (n.length) {
    var o = new RegExp(`
[	 ]{` + Math.min.apply(Math, n) + "}", "g");
    r = r.map(function(a) {
      return a.replace(o, `
`);
    });
  }
  r[0] = r[0].replace(/^\r?\n/, "");
  var s = r[0];
  return e.forEach(function(a, l) {
    var h = s.match(/(?:^|\n)( *)$/), c = h ? h[1] : "", f = a;
    typeof a == "string" && a.includes(`
`) && (f = String(a).split(`
`).map(function(g, p) {
      return p === 0 ? g : "" + c + g;
    }).join(`
`)), s += f + r[l + 1];
  }), s;
}
var sh = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function ah(t9) {
  return t9 && t9.__esModule && Object.prototype.hasOwnProperty.call(t9, "default") ? t9.default : t9;
}
var As = { exports: {} };
(function(t9, e) {
  (function(i, r) {
    t9.exports = r();
  })(sh, function() {
    var i = 1e3, r = 6e4, n = 36e5, o = "millisecond", s = "second", a = "minute", l = "hour", h = "day", c = "week", f = "month", g = "quarter", p = "year", _ = "date", k = "Invalid Date", M = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, q = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, v = { name: "en", weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), ordinal: function(E) {
      var S = ["th", "st", "nd", "rd"], C = E % 100;
      return "[" + E + (S[(C - 20) % 10] || S[C] || S[0]) + "]";
    } }, z = function(E, S, C) {
      var O = String(E);
      return !O || O.length >= S ? E : "" + Array(S + 1 - O.length).join(C) + E;
    }, Q = { s: z, z: function(E) {
      var S = -E.utcOffset(), C = Math.abs(S), O = Math.floor(C / 60), x = C % 60;
      return (S <= 0 ? "+" : "-") + z(O, 2, "0") + ":" + z(x, 2, "0");
    }, m: function E(S, C) {
      if (S.date() < C.date())
        return -E(C, S);
      var O = 12 * (C.year() - S.year()) + (C.month() - S.month()), x = S.clone().add(O, f), D = C - x < 0, T = S.clone().add(O + (D ? -1 : 1), f);
      return +(-(O + (C - x) / (D ? x - T : T - x)) || 0);
    }, a: function(E) {
      return E < 0 ? Math.ceil(E) || 0 : Math.floor(E);
    }, p: function(E) {
      return { M: f, y: p, w: c, d: h, D: _, h: l, m: a, s, ms: o, Q: g }[E] || String(E || "").toLowerCase().replace(/s$/, "");
    }, u: function(E) {
      return E === void 0;
    } }, X = "en", G = {};
    G[X] = v;
    var W = function(E) {
      return E instanceof Nt;
    }, Vt = function E(S, C, O) {
      var x;
      if (!S)
        return X;
      if (typeof S == "string") {
        var D = S.toLowerCase();
        G[D] && (x = D), C && (G[D] = C, x = D);
        var T = S.split("-");
        if (!x && T.length > 1)
          return E(T[0]);
      } else {
        var H = S.name;
        G[H] = S, x = H;
      }
      return !O && x && (X = x), x || !O && X;
    }, K = function(E, S) {
      if (W(E))
        return E.clone();
      var C = typeof S == "object" ? S : {};
      return C.date = E, C.args = arguments, new Nt(C);
    }, I = Q;
    I.l = Vt, I.i = W, I.w = function(E, S) {
      return K(E, { locale: S.$L, utc: S.$u, x: S.$x, $offset: S.$offset });
    };
    var Nt = function() {
      function E(C) {
        this.$L = Vt(C.locale, null, true), this.parse(C);
      }
      var S = E.prototype;
      return S.parse = function(C) {
        this.$d = function(O) {
          var x = O.date, D = O.utc;
          if (x === null)
            return /* @__PURE__ */ new Date(NaN);
          if (I.u(x))
            return /* @__PURE__ */ new Date();
          if (x instanceof Date)
            return new Date(x);
          if (typeof x == "string" && !/Z$/i.test(x)) {
            var T = x.match(M);
            if (T) {
              var H = T[2] - 1 || 0, R = (T[7] || "0").substring(0, 3);
              return D ? new Date(Date.UTC(T[1], H, T[3] || 1, T[4] || 0, T[5] || 0, T[6] || 0, R)) : new Date(T[1], H, T[3] || 1, T[4] || 0, T[5] || 0, T[6] || 0, R);
            }
          }
          return new Date(x);
        }(C), this.$x = C.x || {}, this.init();
      }, S.init = function() {
        var C = this.$d;
        this.$y = C.getFullYear(), this.$M = C.getMonth(), this.$D = C.getDate(), this.$W = C.getDay(), this.$H = C.getHours(), this.$m = C.getMinutes(), this.$s = C.getSeconds(), this.$ms = C.getMilliseconds();
      }, S.$utils = function() {
        return I;
      }, S.isValid = function() {
        return this.$d.toString() !== k;
      }, S.isSame = function(C, O) {
        var x = K(C);
        return this.startOf(O) <= x && x <= this.endOf(O);
      }, S.isAfter = function(C, O) {
        return K(C) < this.startOf(O);
      }, S.isBefore = function(C, O) {
        return this.endOf(O) < K(C);
      }, S.$g = function(C, O, x) {
        return I.u(C) ? this[O] : this.set(x, C);
      }, S.unix = function() {
        return Math.floor(this.valueOf() / 1e3);
      }, S.valueOf = function() {
        return this.$d.getTime();
      }, S.startOf = function(C, O) {
        var x = this, D = !!I.u(O) || O, T = I.p(C), H = function(Pt, it) {
          var st = I.w(x.$u ? Date.UTC(x.$y, it, Pt) : new Date(x.$y, it, Pt), x);
          return D ? st : st.endOf(h);
        }, R = function(Pt, it) {
          return I.w(x.toDate()[Pt].apply(x.toDate("s"), (D ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(it)), x);
        }, U = this.$W, P = this.$M, ct = this.$D, pt = "set" + (this.$u ? "UTC" : "");
        switch (T) {
          case p:
            return D ? H(1, 0) : H(31, 11);
          case f:
            return D ? H(1, P) : H(0, P + 1);
          case c:
            var Xt = this.$locale().weekStart || 0, Rt = (U < Xt ? U + 7 : U) - Xt;
            return H(D ? ct - Rt : ct + (6 - Rt), P);
          case h:
          case _:
            return R(pt + "Hours", 0);
          case l:
            return R(pt + "Minutes", 1);
          case a:
            return R(pt + "Seconds", 2);
          case s:
            return R(pt + "Milliseconds", 3);
          default:
            return this.clone();
        }
      }, S.endOf = function(C) {
        return this.startOf(C, false);
      }, S.$set = function(C, O) {
        var x, D = I.p(C), T = "set" + (this.$u ? "UTC" : ""), H = (x = {}, x[h] = T + "Date", x[_] = T + "Date", x[f] = T + "Month", x[p] = T + "FullYear", x[l] = T + "Hours", x[a] = T + "Minutes", x[s] = T + "Seconds", x[o] = T + "Milliseconds", x)[D], R = D === h ? this.$D + (O - this.$W) : O;
        if (D === f || D === p) {
          var U = this.clone().set(_, 1);
          U.$d[H](R), U.init(), this.$d = U.set(_, Math.min(this.$D, U.daysInMonth())).$d;
        } else
          H && this.$d[H](R);
        return this.init(), this;
      }, S.set = function(C, O) {
        return this.clone().$set(C, O);
      }, S.get = function(C) {
        return this[I.p(C)]();
      }, S.add = function(C, O) {
        var x, D = this;
        C = Number(C);
        var T = I.p(O), H = function(P) {
          var ct = K(D);
          return I.w(ct.date(ct.date() + Math.round(P * C)), D);
        };
        if (T === f)
          return this.set(f, this.$M + C);
        if (T === p)
          return this.set(p, this.$y + C);
        if (T === h)
          return H(1);
        if (T === c)
          return H(7);
        var R = (x = {}, x[a] = r, x[l] = n, x[s] = i, x)[T] || 1, U = this.$d.getTime() + C * R;
        return I.w(U, this);
      }, S.subtract = function(C, O) {
        return this.add(-1 * C, O);
      }, S.format = function(C) {
        var O = this, x = this.$locale();
        if (!this.isValid())
          return x.invalidDate || k;
        var D = C || "YYYY-MM-DDTHH:mm:ssZ", T = I.z(this), H = this.$H, R = this.$m, U = this.$M, P = x.weekdays, ct = x.months, pt = function(it, st, St, Kt) {
          return it && (it[st] || it(O, D)) || St[st].slice(0, Kt);
        }, Xt = function(it) {
          return I.s(H % 12 || 12, it, "0");
        }, Rt = x.meridiem || function(it, st, St) {
          var Kt = it < 12 ? "AM" : "PM";
          return St ? Kt.toLowerCase() : Kt;
        }, Pt = { YY: String(this.$y).slice(-2), YYYY: this.$y, M: U + 1, MM: I.s(U + 1, 2, "0"), MMM: pt(x.monthsShort, U, ct, 3), MMMM: pt(ct, U), D: this.$D, DD: I.s(this.$D, 2, "0"), d: String(this.$W), dd: pt(x.weekdaysMin, this.$W, P, 2), ddd: pt(x.weekdaysShort, this.$W, P, 3), dddd: P[this.$W], H: String(H), HH: I.s(H, 2, "0"), h: Xt(1), hh: Xt(2), a: Rt(H, R, true), A: Rt(H, R, false), m: String(R), mm: I.s(R, 2, "0"), s: String(this.$s), ss: I.s(this.$s, 2, "0"), SSS: I.s(this.$ms, 3, "0"), Z: T };
        return D.replace(q, function(it, st) {
          return st || Pt[it] || T.replace(":", "");
        });
      }, S.utcOffset = function() {
        return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
      }, S.diff = function(C, O, x) {
        var D, T = I.p(O), H = K(C), R = (H.utcOffset() - this.utcOffset()) * r, U = this - H, P = I.m(this, H);
        return P = (D = {}, D[p] = P / 12, D[f] = P, D[g] = P / 3, D[c] = (U - R) / 6048e5, D[h] = (U - R) / 864e5, D[l] = U / n, D[a] = U / r, D[s] = U / i, D)[T] || U, x ? P : I.a(P);
      }, S.daysInMonth = function() {
        return this.endOf(f).$D;
      }, S.$locale = function() {
        return G[this.$L];
      }, S.locale = function(C, O) {
        if (!C)
          return this.$L;
        var x = this.clone(), D = Vt(C, O, true);
        return D && (x.$L = D), x;
      }, S.clone = function() {
        return I.w(this.$d, this);
      }, S.toDate = function() {
        return new Date(this.valueOf());
      }, S.toJSON = function() {
        return this.isValid() ? this.toISOString() : null;
      }, S.toISOString = function() {
        return this.$d.toISOString();
      }, S.toString = function() {
        return this.$d.toUTCString();
      }, E;
    }(), At = Nt.prototype;
    return K.prototype = At, [["$ms", o], ["$s", s], ["$m", a], ["$H", l], ["$W", h], ["$M", f], ["$y", p], ["$D", _]].forEach(function(E) {
      At[E[1]] = function(S) {
        return this.$g(S, E[0], E[1]);
      };
    }), K.extend = function(E, S) {
      return E.$i || (E(S, Nt, K), E.$i = true), K;
    }, K.locale = Vt, K.isDayjs = W, K.unix = function(E) {
      return K(1e3 * E);
    }, K.en = G[X], K.Ls = G, K.p = {}, K;
  });
})(As);
var lh = As.exports;
var hh = ah(lh);
var Wt = {
  trace: 0,
  debug: 1,
  info: 2,
  warn: 3,
  error: 4,
  fatal: 5
};
var L = {
  trace: (...t9) => {
  },
  debug: (...t9) => {
  },
  info: (...t9) => {
  },
  warn: (...t9) => {
  },
  error: (...t9) => {
  },
  fatal: (...t9) => {
  }
};
var bn = function(t9 = "fatal") {
  let e = Wt.fatal;
  typeof t9 == "string" ? (t9 = t9.toLowerCase(), t9 in Wt && (e = Wt[t9])) : typeof t9 == "number" && (e = t9), L.trace = () => {
  }, L.debug = () => {
  }, L.info = () => {
  }, L.warn = () => {
  }, L.error = () => {
  }, L.fatal = () => {
  }, e <= Wt.fatal && (L.fatal = console.error ? console.error.bind(console, yt("FATAL"), "color: orange") : console.log.bind(console, "\x1B[35m", yt("FATAL"))), e <= Wt.error && (L.error = console.error ? console.error.bind(console, yt("ERROR"), "color: orange") : console.log.bind(console, "\x1B[31m", yt("ERROR"))), e <= Wt.warn && (L.warn = console.warn ? console.warn.bind(console, yt("WARN"), "color: orange") : console.log.bind(console, "\x1B[33m", yt("WARN"))), e <= Wt.info && (L.info = console.info ? console.info.bind(console, yt("INFO"), "color: lightblue") : console.log.bind(console, "\x1B[34m", yt("INFO"))), e <= Wt.debug && (L.debug = console.debug ? console.debug.bind(console, yt("DEBUG"), "color: lightgreen") : console.log.bind(console, "\x1B[32m", yt("DEBUG"))), e <= Wt.trace && (L.trace = console.debug ? console.debug.bind(console, yt("TRACE"), "color: lightgreen") : console.log.bind(console, "\x1B[32m", yt("TRACE")));
};
var yt = (t9) => `%c${hh().format("ss.SSS")} : ${t9} : `;
var Tn = {};
Object.defineProperty(Tn, "__esModule", { value: true });
var Es = Tn.sanitizeUrl = void 0;
var ch = /^([^\w]*)(javascript|data|vbscript)/im;
var uh = /&#(\w+)(^\w|;)?/g;
var fh = /&(newline|tab);/gi;
var dh = /[\u0000-\u001F\u007F-\u009F\u2000-\u200D\uFEFF]/gim;
var ph = /^.+(:|&colon;)/gim;
var gh = [".", "/"];
function mh(t9) {
  return gh.indexOf(t9[0]) > -1;
}
function _h(t9) {
  return t9.replace(uh, function(e, i) {
    return String.fromCharCode(i);
  });
}
function yh(t9) {
  var e = _h(t9 || "").replace(fh, "").replace(dh, "").trim();
  if (!e)
    return "about:blank";
  if (mh(e))
    return e;
  var i = e.match(ph);
  if (!i)
    return e;
  var r = i[0];
  return ch.test(r) ? "about:blank" : e;
}
Es = Tn.sanitizeUrl = yh;
var Ch = { value: () => {
} };
function Ms() {
  for (var t9 = 0, e = arguments.length, i = {}, r; t9 < e; ++t9) {
    if (!(r = arguments[t9] + "") || r in i || /[\s.]/.test(r))
      throw new Error("illegal type: " + r);
    i[r] = [];
  }
  return new Fi(i);
}
function Fi(t9) {
  this._ = t9;
}
function xh(t9, e) {
  return t9.trim().split(/^|\s+/).map(function(i) {
    var r = "", n = i.indexOf(".");
    if (n >= 0 && (r = i.slice(n + 1), i = i.slice(0, n)), i && !e.hasOwnProperty(i))
      throw new Error("unknown type: " + i);
    return { type: i, name: r };
  });
}
Fi.prototype = Ms.prototype = {
  constructor: Fi,
  on: function(t9, e) {
    var i = this._, r = xh(t9 + "", i), n, o = -1, s = r.length;
    if (arguments.length < 2) {
      for (; ++o < s; )
        if ((n = (t9 = r[o]).type) && (n = bh(i[n], t9.name)))
          return n;
      return;
    }
    if (e != null && typeof e != "function")
      throw new Error("invalid callback: " + e);
    for (; ++o < s; )
      if (n = (t9 = r[o]).type)
        i[n] = yo(i[n], t9.name, e);
      else if (e == null)
        for (n in i)
          i[n] = yo(i[n], t9.name, null);
    return this;
  },
  copy: function() {
    var t9 = {}, e = this._;
    for (var i in e)
      t9[i] = e[i].slice();
    return new Fi(t9);
  },
  call: function(t9, e) {
    if ((n = arguments.length - 2) > 0)
      for (var i = new Array(n), r = 0, n, o; r < n; ++r)
        i[r] = arguments[r + 2];
    if (!this._.hasOwnProperty(t9))
      throw new Error("unknown type: " + t9);
    for (o = this._[t9], r = 0, n = o.length; r < n; ++r)
      o[r].value.apply(e, i);
  },
  apply: function(t9, e, i) {
    if (!this._.hasOwnProperty(t9))
      throw new Error("unknown type: " + t9);
    for (var r = this._[t9], n = 0, o = r.length; n < o; ++n)
      r[n].value.apply(e, i);
  }
};
function bh(t9, e) {
  for (var i = 0, r = t9.length, n; i < r; ++i)
    if ((n = t9[i]).name === e)
      return n.value;
}
function yo(t9, e, i) {
  for (var r = 0, n = t9.length; r < n; ++r)
    if (t9[r].name === e) {
      t9[r] = Ch, t9 = t9.slice(0, r).concat(t9.slice(r + 1));
      break;
    }
  return i != null && t9.push({ name: e, value: i }), t9;
}
var Zr = "http://www.w3.org/1999/xhtml";
var Co = {
  svg: "http://www.w3.org/2000/svg",
  xhtml: Zr,
  xlink: "http://www.w3.org/1999/xlink",
  xml: "http://www.w3.org/XML/1998/namespace",
  xmlns: "http://www.w3.org/2000/xmlns/"
};
function ar(t9) {
  var e = t9 += "", i = e.indexOf(":");
  return i >= 0 && (e = t9.slice(0, i)) !== "xmlns" && (t9 = t9.slice(i + 1)), Co.hasOwnProperty(e) ? { space: Co[e], local: t9 } : t9;
}
function Th(t9) {
  return function() {
    var e = this.ownerDocument, i = this.namespaceURI;
    return i === Zr && e.documentElement.namespaceURI === Zr ? e.createElement(t9) : e.createElementNS(i, t9);
  };
}
function Sh(t9) {
  return function() {
    return this.ownerDocument.createElementNS(t9.space, t9.local);
  };
}
function Os(t9) {
  var e = ar(t9);
  return (e.local ? Sh : Th)(e);
}
function vh() {
}
function Sn(t9) {
  return t9 == null ? vh : function() {
    return this.querySelector(t9);
  };
}
function kh(t9) {
  typeof t9 != "function" && (t9 = Sn(t9));
  for (var e = this._groups, i = e.length, r = new Array(i), n = 0; n < i; ++n)
    for (var o = e[n], s = o.length, a = r[n] = new Array(s), l, h, c = 0; c < s; ++c)
      (l = o[c]) && (h = t9.call(l, l.__data__, c, o)) && ("__data__" in l && (h.__data__ = l.__data__), a[c] = h);
  return new mt(r, this._parents);
}
function wh(t9) {
  return t9 == null ? [] : Array.isArray(t9) ? t9 : Array.from(t9);
}
function Bh() {
  return [];
}
function $s(t9) {
  return t9 == null ? Bh : function() {
    return this.querySelectorAll(t9);
  };
}
function Fh(t9) {
  return function() {
    return wh(t9.apply(this, arguments));
  };
}
function Lh(t9) {
  typeof t9 == "function" ? t9 = Fh(t9) : t9 = $s(t9);
  for (var e = this._groups, i = e.length, r = [], n = [], o = 0; o < i; ++o)
    for (var s = e[o], a = s.length, l, h = 0; h < a; ++h)
      (l = s[h]) && (r.push(t9.call(l, l.__data__, h, s)), n.push(l));
  return new mt(r, n);
}
function Is(t9) {
  return function() {
    return this.matches(t9);
  };
}
function Ds(t9) {
  return function(e) {
    return e.matches(t9);
  };
}
var Ah = Array.prototype.find;
function Eh(t9) {
  return function() {
    return Ah.call(this.children, t9);
  };
}
function Mh() {
  return this.firstElementChild;
}
function Oh(t9) {
  return this.select(t9 == null ? Mh : Eh(typeof t9 == "function" ? t9 : Ds(t9)));
}
var $h = Array.prototype.filter;
function Ih() {
  return Array.from(this.children);
}
function Dh(t9) {
  return function() {
    return $h.call(this.children, t9);
  };
}
function Nh(t9) {
  return this.selectAll(t9 == null ? Ih : Dh(typeof t9 == "function" ? t9 : Ds(t9)));
}
function Rh(t9) {
  typeof t9 != "function" && (t9 = Is(t9));
  for (var e = this._groups, i = e.length, r = new Array(i), n = 0; n < i; ++n)
    for (var o = e[n], s = o.length, a = r[n] = [], l, h = 0; h < s; ++h)
      (l = o[h]) && t9.call(l, l.__data__, h, o) && a.push(l);
  return new mt(r, this._parents);
}
function Ns(t9) {
  return new Array(t9.length);
}
function Ph() {
  return new mt(this._enter || this._groups.map(Ns), this._parents);
}
function Ri(t9, e) {
  this.ownerDocument = t9.ownerDocument, this.namespaceURI = t9.namespaceURI, this._next = null, this._parent = t9, this.__data__ = e;
}
Ri.prototype = {
  constructor: Ri,
  appendChild: function(t9) {
    return this._parent.insertBefore(t9, this._next);
  },
  insertBefore: function(t9, e) {
    return this._parent.insertBefore(t9, e);
  },
  querySelector: function(t9) {
    return this._parent.querySelector(t9);
  },
  querySelectorAll: function(t9) {
    return this._parent.querySelectorAll(t9);
  }
};
function qh(t9) {
  return function() {
    return t9;
  };
}
function zh(t9, e, i, r, n, o) {
  for (var s = 0, a, l = e.length, h = o.length; s < h; ++s)
    (a = e[s]) ? (a.__data__ = o[s], r[s] = a) : i[s] = new Ri(t9, o[s]);
  for (; s < l; ++s)
    (a = e[s]) && (n[s] = a);
}
function Wh(t9, e, i, r, n, o, s) {
  var a, l, h = /* @__PURE__ */ new Map(), c = e.length, f = o.length, g = new Array(c), p;
  for (a = 0; a < c; ++a)
    (l = e[a]) && (g[a] = p = s.call(l, l.__data__, a, e) + "", h.has(p) ? n[a] = l : h.set(p, l));
  for (a = 0; a < f; ++a)
    p = s.call(t9, o[a], a, o) + "", (l = h.get(p)) ? (r[a] = l, l.__data__ = o[a], h.delete(p)) : i[a] = new Ri(t9, o[a]);
  for (a = 0; a < c; ++a)
    (l = e[a]) && h.get(g[a]) === l && (n[a] = l);
}
function Hh(t9) {
  return t9.__data__;
}
function jh(t9, e) {
  if (!arguments.length)
    return Array.from(this, Hh);
  var i = e ? Wh : zh, r = this._parents, n = this._groups;
  typeof t9 != "function" && (t9 = qh(t9));
  for (var o = n.length, s = new Array(o), a = new Array(o), l = new Array(o), h = 0; h < o; ++h) {
    var c = r[h], f = n[h], g = f.length, p = Uh(t9.call(c, c && c.__data__, h, r)), _ = p.length, k = a[h] = new Array(_), M = s[h] = new Array(_), q = l[h] = new Array(g);
    i(c, f, k, M, q, p, e);
    for (var v = 0, z = 0, Q, X; v < _; ++v)
      if (Q = k[v]) {
        for (v >= z && (z = v + 1); !(X = M[z]) && ++z < _; )
          ;
        Q._next = X || null;
      }
  }
  return s = new mt(s, r), s._enter = a, s._exit = l, s;
}
function Uh(t9) {
  return typeof t9 == "object" && "length" in t9 ? t9 : Array.from(t9);
}
function Yh() {
  return new mt(this._exit || this._groups.map(Ns), this._parents);
}
function Gh(t9, e, i) {
  var r = this.enter(), n = this, o = this.exit();
  return typeof t9 == "function" ? (r = t9(r), r && (r = r.selection())) : r = r.append(t9 + ""), e != null && (n = e(n), n && (n = n.selection())), i == null ? o.remove() : i(o), r && n ? r.merge(n).order() : n;
}
function Vh(t9) {
  for (var e = t9.selection ? t9.selection() : t9, i = this._groups, r = e._groups, n = i.length, o = r.length, s = Math.min(n, o), a = new Array(n), l = 0; l < s; ++l)
    for (var h = i[l], c = r[l], f = h.length, g = a[l] = new Array(f), p, _ = 0; _ < f; ++_)
      (p = h[_] || c[_]) && (g[_] = p);
  for (; l < n; ++l)
    a[l] = i[l];
  return new mt(a, this._parents);
}
function Xh() {
  for (var t9 = this._groups, e = -1, i = t9.length; ++e < i; )
    for (var r = t9[e], n = r.length - 1, o = r[n], s; --n >= 0; )
      (s = r[n]) && (o && s.compareDocumentPosition(o) ^ 4 && o.parentNode.insertBefore(s, o), o = s);
  return this;
}
function Kh(t9) {
  t9 || (t9 = Zh);
  function e(f, g) {
    return f && g ? t9(f.__data__, g.__data__) : !f - !g;
  }
  for (var i = this._groups, r = i.length, n = new Array(r), o = 0; o < r; ++o) {
    for (var s = i[o], a = s.length, l = n[o] = new Array(a), h, c = 0; c < a; ++c)
      (h = s[c]) && (l[c] = h);
    l.sort(e);
  }
  return new mt(n, this._parents).order();
}
function Zh(t9, e) {
  return t9 < e ? -1 : t9 > e ? 1 : t9 >= e ? 0 : NaN;
}
function Jh() {
  var t9 = arguments[0];
  return arguments[0] = this, t9.apply(null, arguments), this;
}
function Qh() {
  return Array.from(this);
}
function tc() {
  for (var t9 = this._groups, e = 0, i = t9.length; e < i; ++e)
    for (var r = t9[e], n = 0, o = r.length; n < o; ++n) {
      var s = r[n];
      if (s)
        return s;
    }
  return null;
}
function ec() {
  let t9 = 0;
  for (const e of this)
    ++t9;
  return t9;
}
function ic() {
  return !this.node();
}
function rc(t9) {
  for (var e = this._groups, i = 0, r = e.length; i < r; ++i)
    for (var n = e[i], o = 0, s = n.length, a; o < s; ++o)
      (a = n[o]) && t9.call(a, a.__data__, o, n);
  return this;
}
function nc(t9) {
  return function() {
    this.removeAttribute(t9);
  };
}
function oc(t9) {
  return function() {
    this.removeAttributeNS(t9.space, t9.local);
  };
}
function sc(t9, e) {
  return function() {
    this.setAttribute(t9, e);
  };
}
function ac(t9, e) {
  return function() {
    this.setAttributeNS(t9.space, t9.local, e);
  };
}
function lc(t9, e) {
  return function() {
    var i = e.apply(this, arguments);
    i == null ? this.removeAttribute(t9) : this.setAttribute(t9, i);
  };
}
function hc(t9, e) {
  return function() {
    var i = e.apply(this, arguments);
    i == null ? this.removeAttributeNS(t9.space, t9.local) : this.setAttributeNS(t9.space, t9.local, i);
  };
}
function cc(t9, e) {
  var i = ar(t9);
  if (arguments.length < 2) {
    var r = this.node();
    return i.local ? r.getAttributeNS(i.space, i.local) : r.getAttribute(i);
  }
  return this.each((e == null ? i.local ? oc : nc : typeof e == "function" ? i.local ? hc : lc : i.local ? ac : sc)(i, e));
}
function Rs(t9) {
  return t9.ownerDocument && t9.ownerDocument.defaultView || t9.document && t9 || t9.defaultView;
}
function uc(t9) {
  return function() {
    this.style.removeProperty(t9);
  };
}
function fc(t9, e, i) {
  return function() {
    this.style.setProperty(t9, e, i);
  };
}
function dc(t9, e, i) {
  return function() {
    var r = e.apply(this, arguments);
    r == null ? this.style.removeProperty(t9) : this.style.setProperty(t9, r, i);
  };
}
function pc(t9, e, i) {
  return arguments.length > 1 ? this.each((e == null ? uc : typeof e == "function" ? dc : fc)(t9, e, i ?? "")) : Fe(this.node(), t9);
}
function Fe(t9, e) {
  return t9.style.getPropertyValue(e) || Rs(t9).getComputedStyle(t9, null).getPropertyValue(e);
}
function gc(t9) {
  return function() {
    delete this[t9];
  };
}
function mc(t9, e) {
  return function() {
    this[t9] = e;
  };
}
function _c(t9, e) {
  return function() {
    var i = e.apply(this, arguments);
    i == null ? delete this[t9] : this[t9] = i;
  };
}
function yc(t9, e) {
  return arguments.length > 1 ? this.each((e == null ? gc : typeof e == "function" ? _c : mc)(t9, e)) : this.node()[t9];
}
function Ps(t9) {
  return t9.trim().split(/^|\s+/);
}
function vn(t9) {
  return t9.classList || new qs(t9);
}
function qs(t9) {
  this._node = t9, this._names = Ps(t9.getAttribute("class") || "");
}
qs.prototype = {
  add: function(t9) {
    var e = this._names.indexOf(t9);
    e < 0 && (this._names.push(t9), this._node.setAttribute("class", this._names.join(" ")));
  },
  remove: function(t9) {
    var e = this._names.indexOf(t9);
    e >= 0 && (this._names.splice(e, 1), this._node.setAttribute("class", this._names.join(" ")));
  },
  contains: function(t9) {
    return this._names.indexOf(t9) >= 0;
  }
};
function zs(t9, e) {
  for (var i = vn(t9), r = -1, n = e.length; ++r < n; )
    i.add(e[r]);
}
function Ws(t9, e) {
  for (var i = vn(t9), r = -1, n = e.length; ++r < n; )
    i.remove(e[r]);
}
function Cc(t9) {
  return function() {
    zs(this, t9);
  };
}
function xc(t9) {
  return function() {
    Ws(this, t9);
  };
}
function bc(t9, e) {
  return function() {
    (e.apply(this, arguments) ? zs : Ws)(this, t9);
  };
}
function Tc(t9, e) {
  var i = Ps(t9 + "");
  if (arguments.length < 2) {
    for (var r = vn(this.node()), n = -1, o = i.length; ++n < o; )
      if (!r.contains(i[n]))
        return false;
    return true;
  }
  return this.each((typeof e == "function" ? bc : e ? Cc : xc)(i, e));
}
function Sc() {
  this.textContent = "";
}
function vc(t9) {
  return function() {
    this.textContent = t9;
  };
}
function kc(t9) {
  return function() {
    var e = t9.apply(this, arguments);
    this.textContent = e ?? "";
  };
}
function wc(t9) {
  return arguments.length ? this.each(t9 == null ? Sc : (typeof t9 == "function" ? kc : vc)(t9)) : this.node().textContent;
}
function Bc() {
  this.innerHTML = "";
}
function Fc(t9) {
  return function() {
    this.innerHTML = t9;
  };
}
function Lc(t9) {
  return function() {
    var e = t9.apply(this, arguments);
    this.innerHTML = e ?? "";
  };
}
function Ac(t9) {
  return arguments.length ? this.each(t9 == null ? Bc : (typeof t9 == "function" ? Lc : Fc)(t9)) : this.node().innerHTML;
}
function Ec() {
  this.nextSibling && this.parentNode.appendChild(this);
}
function Mc() {
  return this.each(Ec);
}
function Oc() {
  this.previousSibling && this.parentNode.insertBefore(this, this.parentNode.firstChild);
}
function $c() {
  return this.each(Oc);
}
function Ic(t9) {
  var e = typeof t9 == "function" ? t9 : Os(t9);
  return this.select(function() {
    return this.appendChild(e.apply(this, arguments));
  });
}
function Dc() {
  return null;
}
function Nc(t9, e) {
  var i = typeof t9 == "function" ? t9 : Os(t9), r = e == null ? Dc : typeof e == "function" ? e : Sn(e);
  return this.select(function() {
    return this.insertBefore(i.apply(this, arguments), r.apply(this, arguments) || null);
  });
}
function Rc() {
  var t9 = this.parentNode;
  t9 && t9.removeChild(this);
}
function Pc() {
  return this.each(Rc);
}
function qc() {
  var t9 = this.cloneNode(false), e = this.parentNode;
  return e ? e.insertBefore(t9, this.nextSibling) : t9;
}
function zc() {
  var t9 = this.cloneNode(true), e = this.parentNode;
  return e ? e.insertBefore(t9, this.nextSibling) : t9;
}
function Wc(t9) {
  return this.select(t9 ? zc : qc);
}
function Hc(t9) {
  return arguments.length ? this.property("__data__", t9) : this.node().__data__;
}
function jc(t9) {
  return function(e) {
    t9.call(this, e, this.__data__);
  };
}
function Uc(t9) {
  return t9.trim().split(/^|\s+/).map(function(e) {
    var i = "", r = e.indexOf(".");
    return r >= 0 && (i = e.slice(r + 1), e = e.slice(0, r)), { type: e, name: i };
  });
}
function Yc(t9) {
  return function() {
    var e = this.__on;
    if (e) {
      for (var i = 0, r = -1, n = e.length, o; i < n; ++i)
        o = e[i], (!t9.type || o.type === t9.type) && o.name === t9.name ? this.removeEventListener(o.type, o.listener, o.options) : e[++r] = o;
      ++r ? e.length = r : delete this.__on;
    }
  };
}
function Gc(t9, e, i) {
  return function() {
    var r = this.__on, n, o = jc(e);
    if (r) {
      for (var s = 0, a = r.length; s < a; ++s)
        if ((n = r[s]).type === t9.type && n.name === t9.name) {
          this.removeEventListener(n.type, n.listener, n.options), this.addEventListener(n.type, n.listener = o, n.options = i), n.value = e;
          return;
        }
    }
    this.addEventListener(t9.type, o, i), n = { type: t9.type, name: t9.name, value: e, listener: o, options: i }, r ? r.push(n) : this.__on = [n];
  };
}
function Vc(t9, e, i) {
  var r = Uc(t9 + ""), n, o = r.length, s;
  if (arguments.length < 2) {
    var a = this.node().__on;
    if (a) {
      for (var l = 0, h = a.length, c; l < h; ++l)
        for (n = 0, c = a[l]; n < o; ++n)
          if ((s = r[n]).type === c.type && s.name === c.name)
            return c.value;
    }
    return;
  }
  for (a = e ? Gc : Yc, n = 0; n < o; ++n)
    this.each(a(r[n], e, i));
  return this;
}
function Hs(t9, e, i) {
  var r = Rs(t9), n = r.CustomEvent;
  typeof n == "function" ? n = new n(e, i) : (n = r.document.createEvent("Event"), i ? (n.initEvent(e, i.bubbles, i.cancelable), n.detail = i.detail) : n.initEvent(e, false, false)), t9.dispatchEvent(n);
}
function Xc(t9, e) {
  return function() {
    return Hs(this, t9, e);
  };
}
function Kc(t9, e) {
  return function() {
    return Hs(this, t9, e.apply(this, arguments));
  };
}
function Zc(t9, e) {
  return this.each((typeof e == "function" ? Kc : Xc)(t9, e));
}
function* Jc() {
  for (var t9 = this._groups, e = 0, i = t9.length; e < i; ++e)
    for (var r = t9[e], n = 0, o = r.length, s; n < o; ++n)
      (s = r[n]) && (yield s);
}
var js = [null];
function mt(t9, e) {
  this._groups = t9, this._parents = e;
}
function li() {
  return new mt([[document.documentElement]], js);
}
function Qc() {
  return this;
}
mt.prototype = li.prototype = {
  constructor: mt,
  select: kh,
  selectAll: Lh,
  selectChild: Oh,
  selectChildren: Nh,
  filter: Rh,
  data: jh,
  enter: Ph,
  exit: Yh,
  join: Gh,
  merge: Vh,
  selection: Qc,
  order: Xh,
  sort: Kh,
  call: Jh,
  nodes: Qh,
  node: tc,
  size: ec,
  empty: ic,
  each: rc,
  attr: cc,
  style: pc,
  property: yc,
  classed: Tc,
  text: wc,
  html: Ac,
  raise: Mc,
  lower: $c,
  append: Ic,
  insert: Nc,
  remove: Pc,
  clone: Wc,
  datum: Hc,
  on: Vc,
  dispatch: Zc,
  [Symbol.iterator]: Jc
};
function Ct(t9) {
  return typeof t9 == "string" ? new mt([[document.querySelector(t9)]], [document.documentElement]) : new mt([[t9]], js);
}
function kn(t9, e, i) {
  t9.prototype = e.prototype = i, i.constructor = t9;
}
function Us(t9, e) {
  var i = Object.create(t9.prototype);
  for (var r in e)
    i[r] = e[r];
  return i;
}
function hi() {
}
var Ze = 0.7;
var Pi = 1 / Ze;
var Be = "\\s*([+-]?\\d+)\\s*";
var Je = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*";
var Mt = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*";
var tu = /^#([0-9a-f]{3,8})$/;
var eu = new RegExp(`^rgb\\(${Be},${Be},${Be}\\)$`);
var iu = new RegExp(`^rgb\\(${Mt},${Mt},${Mt}\\)$`);
var ru = new RegExp(`^rgba\\(${Be},${Be},${Be},${Je}\\)$`);
var nu = new RegExp(`^rgba\\(${Mt},${Mt},${Mt},${Je}\\)$`);
var ou = new RegExp(`^hsl\\(${Je},${Mt},${Mt}\\)$`);
var su = new RegExp(`^hsla\\(${Je},${Mt},${Mt},${Je}\\)$`);
var xo = {
  aliceblue: 15792383,
  antiquewhite: 16444375,
  aqua: 65535,
  aquamarine: 8388564,
  azure: 15794175,
  beige: 16119260,
  bisque: 16770244,
  black: 0,
  blanchedalmond: 16772045,
  blue: 255,
  blueviolet: 9055202,
  brown: 10824234,
  burlywood: 14596231,
  cadetblue: 6266528,
  chartreuse: 8388352,
  chocolate: 13789470,
  coral: 16744272,
  cornflowerblue: 6591981,
  cornsilk: 16775388,
  crimson: 14423100,
  cyan: 65535,
  darkblue: 139,
  darkcyan: 35723,
  darkgoldenrod: 12092939,
  darkgray: 11119017,
  darkgreen: 25600,
  darkgrey: 11119017,
  darkkhaki: 12433259,
  darkmagenta: 9109643,
  darkolivegreen: 5597999,
  darkorange: 16747520,
  darkorchid: 10040012,
  darkred: 9109504,
  darksalmon: 15308410,
  darkseagreen: 9419919,
  darkslateblue: 4734347,
  darkslategray: 3100495,
  darkslategrey: 3100495,
  darkturquoise: 52945,
  darkviolet: 9699539,
  deeppink: 16716947,
  deepskyblue: 49151,
  dimgray: 6908265,
  dimgrey: 6908265,
  dodgerblue: 2003199,
  firebrick: 11674146,
  floralwhite: 16775920,
  forestgreen: 2263842,
  fuchsia: 16711935,
  gainsboro: 14474460,
  ghostwhite: 16316671,
  gold: 16766720,
  goldenrod: 14329120,
  gray: 8421504,
  green: 32768,
  greenyellow: 11403055,
  grey: 8421504,
  honeydew: 15794160,
  hotpink: 16738740,
  indianred: 13458524,
  indigo: 4915330,
  ivory: 16777200,
  khaki: 15787660,
  lavender: 15132410,
  lavenderblush: 16773365,
  lawngreen: 8190976,
  lemonchiffon: 16775885,
  lightblue: 11393254,
  lightcoral: 15761536,
  lightcyan: 14745599,
  lightgoldenrodyellow: 16448210,
  lightgray: 13882323,
  lightgreen: 9498256,
  lightgrey: 13882323,
  lightpink: 16758465,
  lightsalmon: 16752762,
  lightseagreen: 2142890,
  lightskyblue: 8900346,
  lightslategray: 7833753,
  lightslategrey: 7833753,
  lightsteelblue: 11584734,
  lightyellow: 16777184,
  lime: 65280,
  limegreen: 3329330,
  linen: 16445670,
  magenta: 16711935,
  maroon: 8388608,
  mediumaquamarine: 6737322,
  mediumblue: 205,
  mediumorchid: 12211667,
  mediumpurple: 9662683,
  mediumseagreen: 3978097,
  mediumslateblue: 8087790,
  mediumspringgreen: 64154,
  mediumturquoise: 4772300,
  mediumvioletred: 13047173,
  midnightblue: 1644912,
  mintcream: 16121850,
  mistyrose: 16770273,
  moccasin: 16770229,
  navajowhite: 16768685,
  navy: 128,
  oldlace: 16643558,
  olive: 8421376,
  olivedrab: 7048739,
  orange: 16753920,
  orangered: 16729344,
  orchid: 14315734,
  palegoldenrod: 15657130,
  palegreen: 10025880,
  paleturquoise: 11529966,
  palevioletred: 14381203,
  papayawhip: 16773077,
  peachpuff: 16767673,
  peru: 13468991,
  pink: 16761035,
  plum: 14524637,
  powderblue: 11591910,
  purple: 8388736,
  rebeccapurple: 6697881,
  red: 16711680,
  rosybrown: 12357519,
  royalblue: 4286945,
  saddlebrown: 9127187,
  salmon: 16416882,
  sandybrown: 16032864,
  seagreen: 3050327,
  seashell: 16774638,
  sienna: 10506797,
  silver: 12632256,
  skyblue: 8900331,
  slateblue: 6970061,
  slategray: 7372944,
  slategrey: 7372944,
  snow: 16775930,
  springgreen: 65407,
  steelblue: 4620980,
  tan: 13808780,
  teal: 32896,
  thistle: 14204888,
  tomato: 16737095,
  turquoise: 4251856,
  violet: 15631086,
  wheat: 16113331,
  white: 16777215,
  whitesmoke: 16119285,
  yellow: 16776960,
  yellowgreen: 10145074
};
kn(hi, Qe, {
  copy(t9) {
    return Object.assign(new this.constructor(), this, t9);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: bo,
  // Deprecated! Use color.formatHex.
  formatHex: bo,
  formatHex8: au,
  formatHsl: lu,
  formatRgb: To,
  toString: To
});
function bo() {
  return this.rgb().formatHex();
}
function au() {
  return this.rgb().formatHex8();
}
function lu() {
  return Ys(this).formatHsl();
}
function To() {
  return this.rgb().formatRgb();
}
function Qe(t9) {
  var e, i;
  return t9 = (t9 + "").trim().toLowerCase(), (e = tu.exec(t9)) ? (i = e[1].length, e = parseInt(e[1], 16), i === 6 ? So(e) : i === 3 ? new ft(e >> 8 & 15 | e >> 4 & 240, e >> 4 & 15 | e & 240, (e & 15) << 4 | e & 15, 1) : i === 8 ? Ci(e >> 24 & 255, e >> 16 & 255, e >> 8 & 255, (e & 255) / 255) : i === 4 ? Ci(e >> 12 & 15 | e >> 8 & 240, e >> 8 & 15 | e >> 4 & 240, e >> 4 & 15 | e & 240, ((e & 15) << 4 | e & 15) / 255) : null) : (e = eu.exec(t9)) ? new ft(e[1], e[2], e[3], 1) : (e = iu.exec(t9)) ? new ft(e[1] * 255 / 100, e[2] * 255 / 100, e[3] * 255 / 100, 1) : (e = ru.exec(t9)) ? Ci(e[1], e[2], e[3], e[4]) : (e = nu.exec(t9)) ? Ci(e[1] * 255 / 100, e[2] * 255 / 100, e[3] * 255 / 100, e[4]) : (e = ou.exec(t9)) ? wo(e[1], e[2] / 100, e[3] / 100, 1) : (e = su.exec(t9)) ? wo(e[1], e[2] / 100, e[3] / 100, e[4]) : xo.hasOwnProperty(t9) ? So(xo[t9]) : t9 === "transparent" ? new ft(NaN, NaN, NaN, 0) : null;
}
function So(t9) {
  return new ft(t9 >> 16 & 255, t9 >> 8 & 255, t9 & 255, 1);
}
function Ci(t9, e, i, r) {
  return r <= 0 && (t9 = e = i = NaN), new ft(t9, e, i, r);
}
function hu(t9) {
  return t9 instanceof hi || (t9 = Qe(t9)), t9 ? (t9 = t9.rgb(), new ft(t9.r, t9.g, t9.b, t9.opacity)) : new ft();
}
function Jr(t9, e, i, r) {
  return arguments.length === 1 ? hu(t9) : new ft(t9, e, i, r ?? 1);
}
function ft(t9, e, i, r) {
  this.r = +t9, this.g = +e, this.b = +i, this.opacity = +r;
}
kn(ft, Jr, Us(hi, {
  brighter(t9) {
    return t9 = t9 == null ? Pi : Math.pow(Pi, t9), new ft(this.r * t9, this.g * t9, this.b * t9, this.opacity);
  },
  darker(t9) {
    return t9 = t9 == null ? Ze : Math.pow(Ze, t9), new ft(this.r * t9, this.g * t9, this.b * t9, this.opacity);
  },
  rgb() {
    return this;
  },
  clamp() {
    return new ft(he(this.r), he(this.g), he(this.b), qi(this.opacity));
  },
  displayable() {
    return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
  },
  hex: vo,
  // Deprecated! Use color.formatHex.
  formatHex: vo,
  formatHex8: cu,
  formatRgb: ko,
  toString: ko
}));
function vo() {
  return `#${le(this.r)}${le(this.g)}${le(this.b)}`;
}
function cu() {
  return `#${le(this.r)}${le(this.g)}${le(this.b)}${le((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function ko() {
  const t9 = qi(this.opacity);
  return `${t9 === 1 ? "rgb(" : "rgba("}${he(this.r)}, ${he(this.g)}, ${he(this.b)}${t9 === 1 ? ")" : `, ${t9})`}`;
}
function qi(t9) {
  return isNaN(t9) ? 1 : Math.max(0, Math.min(1, t9));
}
function he(t9) {
  return Math.max(0, Math.min(255, Math.round(t9) || 0));
}
function le(t9) {
  return t9 = he(t9), (t9 < 16 ? "0" : "") + t9.toString(16);
}
function wo(t9, e, i, r) {
  return r <= 0 ? t9 = e = i = NaN : i <= 0 || i >= 1 ? t9 = e = NaN : e <= 0 && (t9 = NaN), new kt(t9, e, i, r);
}
function Ys(t9) {
  if (t9 instanceof kt)
    return new kt(t9.h, t9.s, t9.l, t9.opacity);
  if (t9 instanceof hi || (t9 = Qe(t9)), !t9)
    return new kt();
  if (t9 instanceof kt)
    return t9;
  t9 = t9.rgb();
  var e = t9.r / 255, i = t9.g / 255, r = t9.b / 255, n = Math.min(e, i, r), o = Math.max(e, i, r), s = NaN, a = o - n, l = (o + n) / 2;
  return a ? (e === o ? s = (i - r) / a + (i < r) * 6 : i === o ? s = (r - e) / a + 2 : s = (e - i) / a + 4, a /= l < 0.5 ? o + n : 2 - o - n, s *= 60) : a = l > 0 && l < 1 ? 0 : s, new kt(s, a, l, t9.opacity);
}
function uu(t9, e, i, r) {
  return arguments.length === 1 ? Ys(t9) : new kt(t9, e, i, r ?? 1);
}
function kt(t9, e, i, r) {
  this.h = +t9, this.s = +e, this.l = +i, this.opacity = +r;
}
kn(kt, uu, Us(hi, {
  brighter(t9) {
    return t9 = t9 == null ? Pi : Math.pow(Pi, t9), new kt(this.h, this.s, this.l * t9, this.opacity);
  },
  darker(t9) {
    return t9 = t9 == null ? Ze : Math.pow(Ze, t9), new kt(this.h, this.s, this.l * t9, this.opacity);
  },
  rgb() {
    var t9 = this.h % 360 + (this.h < 0) * 360, e = isNaN(t9) || isNaN(this.s) ? 0 : this.s, i = this.l, r = i + (i < 0.5 ? i : 1 - i) * e, n = 2 * i - r;
    return new ft(
      Ir(t9 >= 240 ? t9 - 240 : t9 + 120, n, r),
      Ir(t9, n, r),
      Ir(t9 < 120 ? t9 + 240 : t9 - 120, n, r),
      this.opacity
    );
  },
  clamp() {
    return new kt(Bo(this.h), xi(this.s), xi(this.l), qi(this.opacity));
  },
  displayable() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
  },
  formatHsl() {
    const t9 = qi(this.opacity);
    return `${t9 === 1 ? "hsl(" : "hsla("}${Bo(this.h)}, ${xi(this.s) * 100}%, ${xi(this.l) * 100}%${t9 === 1 ? ")" : `, ${t9})`}`;
  }
}));
function Bo(t9) {
  return t9 = (t9 || 0) % 360, t9 < 0 ? t9 + 360 : t9;
}
function xi(t9) {
  return Math.max(0, Math.min(1, t9 || 0));
}
function Ir(t9, e, i) {
  return (t9 < 60 ? e + (i - e) * t9 / 60 : t9 < 180 ? i : t9 < 240 ? e + (i - e) * (240 - t9) / 60 : e) * 255;
}
var wn = (t9) => () => t9;
function Gs(t9, e) {
  return function(i) {
    return t9 + i * e;
  };
}
function fu(t9, e, i) {
  return t9 = Math.pow(t9, i), e = Math.pow(e, i) - t9, i = 1 / i, function(r) {
    return Math.pow(t9 + r * e, i);
  };
}
function Zb(t9, e) {
  var i = e - t9;
  return i ? Gs(t9, i > 180 || i < -180 ? i - 360 * Math.round(i / 360) : i) : wn(isNaN(t9) ? e : t9);
}
function du(t9) {
  return (t9 = +t9) == 1 ? Vs : function(e, i) {
    return i - e ? fu(e, i, t9) : wn(isNaN(e) ? i : e);
  };
}
function Vs(t9, e) {
  var i = e - t9;
  return i ? Gs(t9, i) : wn(isNaN(t9) ? e : t9);
}
var Fo = function t(e) {
  var i = du(e);
  function r(n, o) {
    var s = i((n = Jr(n)).r, (o = Jr(o)).r), a = i(n.g, o.g), l = i(n.b, o.b), h = Vs(n.opacity, o.opacity);
    return function(c) {
      return n.r = s(c), n.g = a(c), n.b = l(c), n.opacity = h(c), n + "";
    };
  }
  return r.gamma = t, r;
}(1);
function Qt(t9, e) {
  return t9 = +t9, e = +e, function(i) {
    return t9 * (1 - i) + e * i;
  };
}
var Qr = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g;
var Dr = new RegExp(Qr.source, "g");
function pu(t9) {
  return function() {
    return t9;
  };
}
function gu(t9) {
  return function(e) {
    return t9(e) + "";
  };
}
function mu(t9, e) {
  var i = Qr.lastIndex = Dr.lastIndex = 0, r, n, o, s = -1, a = [], l = [];
  for (t9 = t9 + "", e = e + ""; (r = Qr.exec(t9)) && (n = Dr.exec(e)); )
    (o = n.index) > i && (o = e.slice(i, o), a[s] ? a[s] += o : a[++s] = o), (r = r[0]) === (n = n[0]) ? a[s] ? a[s] += n : a[++s] = n : (a[++s] = null, l.push({ i: s, x: Qt(r, n) })), i = Dr.lastIndex;
  return i < e.length && (o = e.slice(i), a[s] ? a[s] += o : a[++s] = o), a.length < 2 ? l[0] ? gu(l[0].x) : pu(e) : (e = l.length, function(h) {
    for (var c = 0, f; c < e; ++c)
      a[(f = l[c]).i] = f.x(h);
    return a.join("");
  });
}
var Lo = 180 / Math.PI;
var tn = {
  translateX: 0,
  translateY: 0,
  rotate: 0,
  skewX: 0,
  scaleX: 1,
  scaleY: 1
};
function Xs(t9, e, i, r, n, o) {
  var s, a, l;
  return (s = Math.sqrt(t9 * t9 + e * e)) && (t9 /= s, e /= s), (l = t9 * i + e * r) && (i -= t9 * l, r -= e * l), (a = Math.sqrt(i * i + r * r)) && (i /= a, r /= a, l /= a), t9 * r < e * i && (t9 = -t9, e = -e, l = -l, s = -s), {
    translateX: n,
    translateY: o,
    rotate: Math.atan2(e, t9) * Lo,
    skewX: Math.atan(l) * Lo,
    scaleX: s,
    scaleY: a
  };
}
var bi;
function _u(t9) {
  const e = new (typeof DOMMatrix == "function" ? DOMMatrix : WebKitCSSMatrix)(t9 + "");
  return e.isIdentity ? tn : Xs(e.a, e.b, e.c, e.d, e.e, e.f);
}
function yu(t9) {
  return t9 == null || (bi || (bi = document.createElementNS("http://www.w3.org/2000/svg", "g")), bi.setAttribute("transform", t9), !(t9 = bi.transform.baseVal.consolidate())) ? tn : (t9 = t9.matrix, Xs(t9.a, t9.b, t9.c, t9.d, t9.e, t9.f));
}
function Ks(t9, e, i, r) {
  function n(h) {
    return h.length ? h.pop() + " " : "";
  }
  function o(h, c, f, g, p, _) {
    if (h !== f || c !== g) {
      var k = p.push("translate(", null, e, null, i);
      _.push({ i: k - 4, x: Qt(h, f) }, { i: k - 2, x: Qt(c, g) });
    } else
      (f || g) && p.push("translate(" + f + e + g + i);
  }
  function s(h, c, f, g) {
    h !== c ? (h - c > 180 ? c += 360 : c - h > 180 && (h += 360), g.push({ i: f.push(n(f) + "rotate(", null, r) - 2, x: Qt(h, c) })) : c && f.push(n(f) + "rotate(" + c + r);
  }
  function a(h, c, f, g) {
    h !== c ? g.push({ i: f.push(n(f) + "skewX(", null, r) - 2, x: Qt(h, c) }) : c && f.push(n(f) + "skewX(" + c + r);
  }
  function l(h, c, f, g, p, _) {
    if (h !== f || c !== g) {
      var k = p.push(n(p) + "scale(", null, ",", null, ")");
      _.push({ i: k - 4, x: Qt(h, f) }, { i: k - 2, x: Qt(c, g) });
    } else
      (f !== 1 || g !== 1) && p.push(n(p) + "scale(" + f + "," + g + ")");
  }
  return function(h, c) {
    var f = [], g = [];
    return h = t9(h), c = t9(c), o(h.translateX, h.translateY, c.translateX, c.translateY, f, g), s(h.rotate, c.rotate, f, g), a(h.skewX, c.skewX, f, g), l(h.scaleX, h.scaleY, c.scaleX, c.scaleY, f, g), h = c = null, function(p) {
      for (var _ = -1, k = g.length, M; ++_ < k; )
        f[(M = g[_]).i] = M.x(p);
      return f.join("");
    };
  };
}
var Cu = Ks(_u, "px, ", "px)", "deg)");
var xu = Ks(yu, ", ", ")", ")");
var Le = 0;
var We = 0;
var Re = 0;
var Zs = 1e3;
var zi;
var He;
var Wi = 0;
var fe = 0;
var lr = 0;
var ti = typeof performance == "object" && performance.now ? performance : Date;
var Js = typeof window == "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(t9) {
  setTimeout(t9, 17);
};
function Bn() {
  return fe || (Js(bu), fe = ti.now() + lr);
}
function bu() {
  fe = 0;
}
function Hi() {
  this._call = this._time = this._next = null;
}
Hi.prototype = Qs.prototype = {
  constructor: Hi,
  restart: function(t9, e, i) {
    if (typeof t9 != "function")
      throw new TypeError("callback is not a function");
    i = (i == null ? Bn() : +i) + (e == null ? 0 : +e), !this._next && He !== this && (He ? He._next = this : zi = this, He = this), this._call = t9, this._time = i, en();
  },
  stop: function() {
    this._call && (this._call = null, this._time = 1 / 0, en());
  }
};
function Qs(t9, e, i) {
  var r = new Hi();
  return r.restart(t9, e, i), r;
}
function Tu() {
  Bn(), ++Le;
  for (var t9 = zi, e; t9; )
    (e = fe - t9._time) >= 0 && t9._call.call(void 0, e), t9 = t9._next;
  --Le;
}
function Ao() {
  fe = (Wi = ti.now()) + lr, Le = We = 0;
  try {
    Tu();
  } finally {
    Le = 0, vu(), fe = 0;
  }
}
function Su() {
  var t9 = ti.now(), e = t9 - Wi;
  e > Zs && (lr -= e, Wi = t9);
}
function vu() {
  for (var t9, e = zi, i, r = 1 / 0; e; )
    e._call ? (r > e._time && (r = e._time), t9 = e, e = e._next) : (i = e._next, e._next = null, e = t9 ? t9._next = i : zi = i);
  He = t9, en(r);
}
function en(t9) {
  if (!Le) {
    We && (We = clearTimeout(We));
    var e = t9 - fe;
    e > 24 ? (t9 < 1 / 0 && (We = setTimeout(Ao, t9 - ti.now() - lr)), Re && (Re = clearInterval(Re))) : (Re || (Wi = ti.now(), Re = setInterval(Su, Zs)), Le = 1, Js(Ao));
  }
}
function Eo(t9, e, i) {
  var r = new Hi();
  return e = e == null ? 0 : +e, r.restart((n) => {
    r.stop(), t9(n + e);
  }, e, i), r;
}
var ku = Ms("start", "end", "cancel", "interrupt");
var wu = [];
var ta = 0;
var Mo = 1;
var rn = 2;
var Li = 3;
var Oo = 4;
var nn = 5;
var Ai = 6;
function hr(t9, e, i, r, n, o) {
  var s = t9.__transition;
  if (!s)
    t9.__transition = {};
  else if (i in s)
    return;
  Bu(t9, i, {
    name: e,
    index: r,
    // For context during callback.
    group: n,
    // For context during callback.
    on: ku,
    tween: wu,
    time: o.time,
    delay: o.delay,
    duration: o.duration,
    ease: o.ease,
    timer: null,
    state: ta
  });
}
function Fn(t9, e) {
  var i = Lt(t9, e);
  if (i.state > ta)
    throw new Error("too late; already scheduled");
  return i;
}
function It(t9, e) {
  var i = Lt(t9, e);
  if (i.state > Li)
    throw new Error("too late; already running");
  return i;
}
function Lt(t9, e) {
  var i = t9.__transition;
  if (!i || !(i = i[e]))
    throw new Error("transition not found");
  return i;
}
function Bu(t9, e, i) {
  var r = t9.__transition, n;
  r[e] = i, i.timer = Qs(o, 0, i.time);
  function o(h) {
    i.state = Mo, i.timer.restart(s, i.delay, i.time), i.delay <= h && s(h - i.delay);
  }
  function s(h) {
    var c, f, g, p;
    if (i.state !== Mo)
      return l();
    for (c in r)
      if (p = r[c], p.name === i.name) {
        if (p.state === Li)
          return Eo(s);
        p.state === Oo ? (p.state = Ai, p.timer.stop(), p.on.call("interrupt", t9, t9.__data__, p.index, p.group), delete r[c]) : +c < e && (p.state = Ai, p.timer.stop(), p.on.call("cancel", t9, t9.__data__, p.index, p.group), delete r[c]);
      }
    if (Eo(function() {
      i.state === Li && (i.state = Oo, i.timer.restart(a, i.delay, i.time), a(h));
    }), i.state = rn, i.on.call("start", t9, t9.__data__, i.index, i.group), i.state === rn) {
      for (i.state = Li, n = new Array(g = i.tween.length), c = 0, f = -1; c < g; ++c)
        (p = i.tween[c].value.call(t9, t9.__data__, i.index, i.group)) && (n[++f] = p);
      n.length = f + 1;
    }
  }
  function a(h) {
    for (var c = h < i.duration ? i.ease.call(null, h / i.duration) : (i.timer.restart(l), i.state = nn, 1), f = -1, g = n.length; ++f < g; )
      n[f].call(t9, c);
    i.state === nn && (i.on.call("end", t9, t9.__data__, i.index, i.group), l());
  }
  function l() {
    i.state = Ai, i.timer.stop(), delete r[e];
    for (var h in r)
      return;
    delete t9.__transition;
  }
}
function Fu(t9, e) {
  var i = t9.__transition, r, n, o = true, s;
  if (i) {
    e = e == null ? null : e + "";
    for (s in i) {
      if ((r = i[s]).name !== e) {
        o = false;
        continue;
      }
      n = r.state > rn && r.state < nn, r.state = Ai, r.timer.stop(), r.on.call(n ? "interrupt" : "cancel", t9, t9.__data__, r.index, r.group), delete i[s];
    }
    o && delete t9.__transition;
  }
}
function Lu(t9) {
  return this.each(function() {
    Fu(this, t9);
  });
}
function Au(t9, e) {
  var i, r;
  return function() {
    var n = It(this, t9), o = n.tween;
    if (o !== i) {
      r = i = o;
      for (var s = 0, a = r.length; s < a; ++s)
        if (r[s].name === e) {
          r = r.slice(), r.splice(s, 1);
          break;
        }
    }
    n.tween = r;
  };
}
function Eu(t9, e, i) {
  var r, n;
  if (typeof i != "function")
    throw new Error();
  return function() {
    var o = It(this, t9), s = o.tween;
    if (s !== r) {
      n = (r = s).slice();
      for (var a = { name: e, value: i }, l = 0, h = n.length; l < h; ++l)
        if (n[l].name === e) {
          n[l] = a;
          break;
        }
      l === h && n.push(a);
    }
    o.tween = n;
  };
}
function Mu(t9, e) {
  var i = this._id;
  if (t9 += "", arguments.length < 2) {
    for (var r = Lt(this.node(), i).tween, n = 0, o = r.length, s; n < o; ++n)
      if ((s = r[n]).name === t9)
        return s.value;
    return null;
  }
  return this.each((e == null ? Au : Eu)(i, t9, e));
}
function Ln(t9, e, i) {
  var r = t9._id;
  return t9.each(function() {
    var n = It(this, r);
    (n.value || (n.value = {}))[e] = i.apply(this, arguments);
  }), function(n) {
    return Lt(n, r).value[e];
  };
}
function ea(t9, e) {
  var i;
  return (typeof e == "number" ? Qt : e instanceof Qe ? Fo : (i = Qe(e)) ? (e = i, Fo) : mu)(t9, e);
}
function Ou(t9) {
  return function() {
    this.removeAttribute(t9);
  };
}
function $u(t9) {
  return function() {
    this.removeAttributeNS(t9.space, t9.local);
  };
}
function Iu(t9, e, i) {
  var r, n = i + "", o;
  return function() {
    var s = this.getAttribute(t9);
    return s === n ? null : s === r ? o : o = e(r = s, i);
  };
}
function Du(t9, e, i) {
  var r, n = i + "", o;
  return function() {
    var s = this.getAttributeNS(t9.space, t9.local);
    return s === n ? null : s === r ? o : o = e(r = s, i);
  };
}
function Nu(t9, e, i) {
  var r, n, o;
  return function() {
    var s, a = i(this), l;
    return a == null ? void this.removeAttribute(t9) : (s = this.getAttribute(t9), l = a + "", s === l ? null : s === r && l === n ? o : (n = l, o = e(r = s, a)));
  };
}
function Ru(t9, e, i) {
  var r, n, o;
  return function() {
    var s, a = i(this), l;
    return a == null ? void this.removeAttributeNS(t9.space, t9.local) : (s = this.getAttributeNS(t9.space, t9.local), l = a + "", s === l ? null : s === r && l === n ? o : (n = l, o = e(r = s, a)));
  };
}
function Pu(t9, e) {
  var i = ar(t9), r = i === "transform" ? xu : ea;
  return this.attrTween(t9, typeof e == "function" ? (i.local ? Ru : Nu)(i, r, Ln(this, "attr." + t9, e)) : e == null ? (i.local ? $u : Ou)(i) : (i.local ? Du : Iu)(i, r, e));
}
function qu(t9, e) {
  return function(i) {
    this.setAttribute(t9, e.call(this, i));
  };
}
function zu(t9, e) {
  return function(i) {
    this.setAttributeNS(t9.space, t9.local, e.call(this, i));
  };
}
function Wu(t9, e) {
  var i, r;
  function n() {
    var o = e.apply(this, arguments);
    return o !== r && (i = (r = o) && zu(t9, o)), i;
  }
  return n._value = e, n;
}
function Hu(t9, e) {
  var i, r;
  function n() {
    var o = e.apply(this, arguments);
    return o !== r && (i = (r = o) && qu(t9, o)), i;
  }
  return n._value = e, n;
}
function ju(t9, e) {
  var i = "attr." + t9;
  if (arguments.length < 2)
    return (i = this.tween(i)) && i._value;
  if (e == null)
    return this.tween(i, null);
  if (typeof e != "function")
    throw new Error();
  var r = ar(t9);
  return this.tween(i, (r.local ? Wu : Hu)(r, e));
}
function Uu(t9, e) {
  return function() {
    Fn(this, t9).delay = +e.apply(this, arguments);
  };
}
function Yu(t9, e) {
  return e = +e, function() {
    Fn(this, t9).delay = e;
  };
}
function Gu(t9) {
  var e = this._id;
  return arguments.length ? this.each((typeof t9 == "function" ? Uu : Yu)(e, t9)) : Lt(this.node(), e).delay;
}
function Vu(t9, e) {
  return function() {
    It(this, t9).duration = +e.apply(this, arguments);
  };
}
function Xu(t9, e) {
  return e = +e, function() {
    It(this, t9).duration = e;
  };
}
function Ku(t9) {
  var e = this._id;
  return arguments.length ? this.each((typeof t9 == "function" ? Vu : Xu)(e, t9)) : Lt(this.node(), e).duration;
}
function Zu(t9, e) {
  if (typeof e != "function")
    throw new Error();
  return function() {
    It(this, t9).ease = e;
  };
}
function Ju(t9) {
  var e = this._id;
  return arguments.length ? this.each(Zu(e, t9)) : Lt(this.node(), e).ease;
}
function Qu(t9, e) {
  return function() {
    var i = e.apply(this, arguments);
    if (typeof i != "function")
      throw new Error();
    It(this, t9).ease = i;
  };
}
function tf(t9) {
  if (typeof t9 != "function")
    throw new Error();
  return this.each(Qu(this._id, t9));
}
function ef(t9) {
  typeof t9 != "function" && (t9 = Is(t9));
  for (var e = this._groups, i = e.length, r = new Array(i), n = 0; n < i; ++n)
    for (var o = e[n], s = o.length, a = r[n] = [], l, h = 0; h < s; ++h)
      (l = o[h]) && t9.call(l, l.__data__, h, o) && a.push(l);
  return new Yt(r, this._parents, this._name, this._id);
}
function rf(t9) {
  if (t9._id !== this._id)
    throw new Error();
  for (var e = this._groups, i = t9._groups, r = e.length, n = i.length, o = Math.min(r, n), s = new Array(r), a = 0; a < o; ++a)
    for (var l = e[a], h = i[a], c = l.length, f = s[a] = new Array(c), g, p = 0; p < c; ++p)
      (g = l[p] || h[p]) && (f[p] = g);
  for (; a < r; ++a)
    s[a] = e[a];
  return new Yt(s, this._parents, this._name, this._id);
}
function nf(t9) {
  return (t9 + "").trim().split(/^|\s+/).every(function(e) {
    var i = e.indexOf(".");
    return i >= 0 && (e = e.slice(0, i)), !e || e === "start";
  });
}
function of(t9, e, i) {
  var r, n, o = nf(e) ? Fn : It;
  return function() {
    var s = o(this, t9), a = s.on;
    a !== r && (n = (r = a).copy()).on(e, i), s.on = n;
  };
}
function sf(t9, e) {
  var i = this._id;
  return arguments.length < 2 ? Lt(this.node(), i).on.on(t9) : this.each(of(i, t9, e));
}
function af(t9) {
  return function() {
    var e = this.parentNode;
    for (var i in this.__transition)
      if (+i !== t9)
        return;
    e && e.removeChild(this);
  };
}
function lf() {
  return this.on("end.remove", af(this._id));
}
function hf(t9) {
  var e = this._name, i = this._id;
  typeof t9 != "function" && (t9 = Sn(t9));
  for (var r = this._groups, n = r.length, o = new Array(n), s = 0; s < n; ++s)
    for (var a = r[s], l = a.length, h = o[s] = new Array(l), c, f, g = 0; g < l; ++g)
      (c = a[g]) && (f = t9.call(c, c.__data__, g, a)) && ("__data__" in c && (f.__data__ = c.__data__), h[g] = f, hr(h[g], e, i, g, h, Lt(c, i)));
  return new Yt(o, this._parents, e, i);
}
function cf(t9) {
  var e = this._name, i = this._id;
  typeof t9 != "function" && (t9 = $s(t9));
  for (var r = this._groups, n = r.length, o = [], s = [], a = 0; a < n; ++a)
    for (var l = r[a], h = l.length, c, f = 0; f < h; ++f)
      if (c = l[f]) {
        for (var g = t9.call(c, c.__data__, f, l), p, _ = Lt(c, i), k = 0, M = g.length; k < M; ++k)
          (p = g[k]) && hr(p, e, i, k, g, _);
        o.push(g), s.push(c);
      }
  return new Yt(o, s, e, i);
}
var uf = li.prototype.constructor;
function ff() {
  return new uf(this._groups, this._parents);
}
function df(t9, e) {
  var i, r, n;
  return function() {
    var o = Fe(this, t9), s = (this.style.removeProperty(t9), Fe(this, t9));
    return o === s ? null : o === i && s === r ? n : n = e(i = o, r = s);
  };
}
function ia(t9) {
  return function() {
    this.style.removeProperty(t9);
  };
}
function pf(t9, e, i) {
  var r, n = i + "", o;
  return function() {
    var s = Fe(this, t9);
    return s === n ? null : s === r ? o : o = e(r = s, i);
  };
}
function gf(t9, e, i) {
  var r, n, o;
  return function() {
    var s = Fe(this, t9), a = i(this), l = a + "";
    return a == null && (l = a = (this.style.removeProperty(t9), Fe(this, t9))), s === l ? null : s === r && l === n ? o : (n = l, o = e(r = s, a));
  };
}
function mf(t9, e) {
  var i, r, n, o = "style." + e, s = "end." + o, a;
  return function() {
    var l = It(this, t9), h = l.on, c = l.value[o] == null ? a || (a = ia(e)) : void 0;
    (h !== i || n !== c) && (r = (i = h).copy()).on(s, n = c), l.on = r;
  };
}
function _f(t9, e, i) {
  var r = (t9 += "") == "transform" ? Cu : ea;
  return e == null ? this.styleTween(t9, df(t9, r)).on("end.style." + t9, ia(t9)) : typeof e == "function" ? this.styleTween(t9, gf(t9, r, Ln(this, "style." + t9, e))).each(mf(this._id, t9)) : this.styleTween(t9, pf(t9, r, e), i).on("end.style." + t9, null);
}
function yf(t9, e, i) {
  return function(r) {
    this.style.setProperty(t9, e.call(this, r), i);
  };
}
function Cf(t9, e, i) {
  var r, n;
  function o() {
    var s = e.apply(this, arguments);
    return s !== n && (r = (n = s) && yf(t9, s, i)), r;
  }
  return o._value = e, o;
}
function xf(t9, e, i) {
  var r = "style." + (t9 += "");
  if (arguments.length < 2)
    return (r = this.tween(r)) && r._value;
  if (e == null)
    return this.tween(r, null);
  if (typeof e != "function")
    throw new Error();
  return this.tween(r, Cf(t9, e, i ?? ""));
}
function bf(t9) {
  return function() {
    this.textContent = t9;
  };
}
function Tf(t9) {
  return function() {
    var e = t9(this);
    this.textContent = e ?? "";
  };
}
function Sf(t9) {
  return this.tween("text", typeof t9 == "function" ? Tf(Ln(this, "text", t9)) : bf(t9 == null ? "" : t9 + ""));
}
function vf(t9) {
  return function(e) {
    this.textContent = t9.call(this, e);
  };
}
function kf(t9) {
  var e, i;
  function r() {
    var n = t9.apply(this, arguments);
    return n !== i && (e = (i = n) && vf(n)), e;
  }
  return r._value = t9, r;
}
function wf(t9) {
  var e = "text";
  if (arguments.length < 1)
    return (e = this.tween(e)) && e._value;
  if (t9 == null)
    return this.tween(e, null);
  if (typeof t9 != "function")
    throw new Error();
  return this.tween(e, kf(t9));
}
function Bf() {
  for (var t9 = this._name, e = this._id, i = ra(), r = this._groups, n = r.length, o = 0; o < n; ++o)
    for (var s = r[o], a = s.length, l, h = 0; h < a; ++h)
      if (l = s[h]) {
        var c = Lt(l, e);
        hr(l, t9, i, h, s, {
          time: c.time + c.delay + c.duration,
          delay: 0,
          duration: c.duration,
          ease: c.ease
        });
      }
  return new Yt(r, this._parents, t9, i);
}
function Ff() {
  var t9, e, i = this, r = i._id, n = i.size();
  return new Promise(function(o, s) {
    var a = { value: s }, l = { value: function() {
      --n === 0 && o();
    } };
    i.each(function() {
      var h = It(this, r), c = h.on;
      c !== t9 && (e = (t9 = c).copy(), e._.cancel.push(a), e._.interrupt.push(a), e._.end.push(l)), h.on = e;
    }), n === 0 && o();
  });
}
var Lf = 0;
function Yt(t9, e, i, r) {
  this._groups = t9, this._parents = e, this._name = i, this._id = r;
}
function ra() {
  return ++Lf;
}
var Ht = li.prototype;
Yt.prototype = {
  constructor: Yt,
  select: hf,
  selectAll: cf,
  selectChild: Ht.selectChild,
  selectChildren: Ht.selectChildren,
  filter: ef,
  merge: rf,
  selection: ff,
  transition: Bf,
  call: Ht.call,
  nodes: Ht.nodes,
  node: Ht.node,
  size: Ht.size,
  empty: Ht.empty,
  each: Ht.each,
  on: sf,
  attr: Pu,
  attrTween: ju,
  style: _f,
  styleTween: xf,
  text: Sf,
  textTween: wf,
  remove: lf,
  tween: Mu,
  delay: Gu,
  duration: Ku,
  ease: Ju,
  easeVarying: tf,
  end: Ff,
  [Symbol.iterator]: Ht[Symbol.iterator]
};
function Af(t9) {
  return ((t9 *= 2) <= 1 ? t9 * t9 * t9 : (t9 -= 2) * t9 * t9 + 2) / 2;
}
var Ef = {
  time: null,
  // Set on use.
  delay: 0,
  duration: 250,
  ease: Af
};
function Mf(t9, e) {
  for (var i; !(i = t9.__transition) || !(i = i[e]); )
    if (!(t9 = t9.parentNode))
      throw new Error(`transition ${e} not found`);
  return i;
}
function Of(t9) {
  var e, i;
  t9 instanceof Yt ? (e = t9._id, t9 = t9._name) : (e = ra(), (i = Ef).time = Bn(), t9 = t9 == null ? null : t9 + "");
  for (var r = this._groups, n = r.length, o = 0; o < n; ++o)
    for (var s = r[o], a = s.length, l, h = 0; h < a; ++h)
      (l = s[h]) && hr(l, t9, e, h, s, i || Mf(l, e));
  return new Yt(r, this._parents, t9, e);
}
li.prototype.interrupt = Lu;
li.prototype.transition = Of;
var Jb = Math.abs;
var Qb = Math.atan2;
var t1 = Math.cos;
var e1 = Math.max;
var i1 = Math.min;
var r1 = Math.sin;
var n1 = Math.sqrt;
var $o = 1e-12;
var An = Math.PI;
var Io = An / 2;
var o1 = 2 * An;
function s1(t9) {
  return t9 > 1 ? 0 : t9 < -1 ? An : Math.acos(t9);
}
function a1(t9) {
  return t9 >= 1 ? Io : t9 <= -1 ? -Io : Math.asin(t9);
}
function na(t9) {
  this._context = t9;
}
na.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._point = 0;
  },
  lineEnd: function() {
    (this._line || this._line !== 0 && this._point === 1) && this._context.closePath(), this._line = 1 - this._line;
  },
  point: function(t9, e) {
    switch (t9 = +t9, e = +e, this._point) {
      case 0:
        this._point = 1, this._line ? this._context.lineTo(t9, e) : this._context.moveTo(t9, e);
        break;
      case 1:
        this._point = 2;
      default:
        this._context.lineTo(t9, e);
        break;
    }
  }
};
function $f(t9) {
  return new na(t9);
}
var oa = class {
  constructor(e, i) {
    this._context = e, this._x = i;
  }
  areaStart() {
    this._line = 0;
  }
  areaEnd() {
    this._line = NaN;
  }
  lineStart() {
    this._point = 0;
  }
  lineEnd() {
    (this._line || this._line !== 0 && this._point === 1) && this._context.closePath(), this._line = 1 - this._line;
  }
  point(e, i) {
    switch (e = +e, i = +i, this._point) {
      case 0: {
        this._point = 1, this._line ? this._context.lineTo(e, i) : this._context.moveTo(e, i);
        break;
      }
      case 1:
        this._point = 2;
      default: {
        this._x ? this._context.bezierCurveTo(this._x0 = (this._x0 + e) / 2, this._y0, this._x0, i, e, i) : this._context.bezierCurveTo(this._x0, this._y0 = (this._y0 + i) / 2, e, this._y0, e, i);
        break;
      }
    }
    this._x0 = e, this._y0 = i;
  }
};
function If(t9) {
  return new oa(t9, true);
}
function Df(t9) {
  return new oa(t9, false);
}
function ie() {
}
function ji(t9, e, i) {
  t9._context.bezierCurveTo(
    (2 * t9._x0 + t9._x1) / 3,
    (2 * t9._y0 + t9._y1) / 3,
    (t9._x0 + 2 * t9._x1) / 3,
    (t9._y0 + 2 * t9._y1) / 3,
    (t9._x0 + 4 * t9._x1 + e) / 6,
    (t9._y0 + 4 * t9._y1 + i) / 6
  );
}
function cr(t9) {
  this._context = t9;
}
cr.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x0 = this._x1 = this._y0 = this._y1 = NaN, this._point = 0;
  },
  lineEnd: function() {
    switch (this._point) {
      case 3:
        ji(this, this._x1, this._y1);
      case 2:
        this._context.lineTo(this._x1, this._y1);
        break;
    }
    (this._line || this._line !== 0 && this._point === 1) && this._context.closePath(), this._line = 1 - this._line;
  },
  point: function(t9, e) {
    switch (t9 = +t9, e = +e, this._point) {
      case 0:
        this._point = 1, this._line ? this._context.lineTo(t9, e) : this._context.moveTo(t9, e);
        break;
      case 1:
        this._point = 2;
        break;
      case 2:
        this._point = 3, this._context.lineTo((5 * this._x0 + this._x1) / 6, (5 * this._y0 + this._y1) / 6);
      default:
        ji(this, t9, e);
        break;
    }
    this._x0 = this._x1, this._x1 = t9, this._y0 = this._y1, this._y1 = e;
  }
};
function Nf(t9) {
  return new cr(t9);
}
function sa(t9) {
  this._context = t9;
}
sa.prototype = {
  areaStart: ie,
  areaEnd: ie,
  lineStart: function() {
    this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = NaN, this._point = 0;
  },
  lineEnd: function() {
    switch (this._point) {
      case 1: {
        this._context.moveTo(this._x2, this._y2), this._context.closePath();
        break;
      }
      case 2: {
        this._context.moveTo((this._x2 + 2 * this._x3) / 3, (this._y2 + 2 * this._y3) / 3), this._context.lineTo((this._x3 + 2 * this._x2) / 3, (this._y3 + 2 * this._y2) / 3), this._context.closePath();
        break;
      }
      case 3: {
        this.point(this._x2, this._y2), this.point(this._x3, this._y3), this.point(this._x4, this._y4);
        break;
      }
    }
  },
  point: function(t9, e) {
    switch (t9 = +t9, e = +e, this._point) {
      case 0:
        this._point = 1, this._x2 = t9, this._y2 = e;
        break;
      case 1:
        this._point = 2, this._x3 = t9, this._y3 = e;
        break;
      case 2:
        this._point = 3, this._x4 = t9, this._y4 = e, this._context.moveTo((this._x0 + 4 * this._x1 + t9) / 6, (this._y0 + 4 * this._y1 + e) / 6);
        break;
      default:
        ji(this, t9, e);
        break;
    }
    this._x0 = this._x1, this._x1 = t9, this._y0 = this._y1, this._y1 = e;
  }
};
function Rf(t9) {
  return new sa(t9);
}
function aa(t9) {
  this._context = t9;
}
aa.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x0 = this._x1 = this._y0 = this._y1 = NaN, this._point = 0;
  },
  lineEnd: function() {
    (this._line || this._line !== 0 && this._point === 3) && this._context.closePath(), this._line = 1 - this._line;
  },
  point: function(t9, e) {
    switch (t9 = +t9, e = +e, this._point) {
      case 0:
        this._point = 1;
        break;
      case 1:
        this._point = 2;
        break;
      case 2:
        this._point = 3;
        var i = (this._x0 + 4 * this._x1 + t9) / 6, r = (this._y0 + 4 * this._y1 + e) / 6;
        this._line ? this._context.lineTo(i, r) : this._context.moveTo(i, r);
        break;
      case 3:
        this._point = 4;
      default:
        ji(this, t9, e);
        break;
    }
    this._x0 = this._x1, this._x1 = t9, this._y0 = this._y1, this._y1 = e;
  }
};
function Pf(t9) {
  return new aa(t9);
}
function la(t9, e) {
  this._basis = new cr(t9), this._beta = e;
}
la.prototype = {
  lineStart: function() {
    this._x = [], this._y = [], this._basis.lineStart();
  },
  lineEnd: function() {
    var t9 = this._x, e = this._y, i = t9.length - 1;
    if (i > 0)
      for (var r = t9[0], n = e[0], o = t9[i] - r, s = e[i] - n, a = -1, l; ++a <= i; )
        l = a / i, this._basis.point(
          this._beta * t9[a] + (1 - this._beta) * (r + l * o),
          this._beta * e[a] + (1 - this._beta) * (n + l * s)
        );
    this._x = this._y = null, this._basis.lineEnd();
  },
  point: function(t9, e) {
    this._x.push(+t9), this._y.push(+e);
  }
};
var qf = function t2(e) {
  function i(r) {
    return e === 1 ? new cr(r) : new la(r, e);
  }
  return i.beta = function(r) {
    return t2(+r);
  }, i;
}(0.85);
function Ui(t9, e, i) {
  t9._context.bezierCurveTo(
    t9._x1 + t9._k * (t9._x2 - t9._x0),
    t9._y1 + t9._k * (t9._y2 - t9._y0),
    t9._x2 + t9._k * (t9._x1 - e),
    t9._y2 + t9._k * (t9._y1 - i),
    t9._x2,
    t9._y2
  );
}
function En(t9, e) {
  this._context = t9, this._k = (1 - e) / 6;
}
En.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN, this._point = 0;
  },
  lineEnd: function() {
    switch (this._point) {
      case 2:
        this._context.lineTo(this._x2, this._y2);
        break;
      case 3:
        Ui(this, this._x1, this._y1);
        break;
    }
    (this._line || this._line !== 0 && this._point === 1) && this._context.closePath(), this._line = 1 - this._line;
  },
  point: function(t9, e) {
    switch (t9 = +t9, e = +e, this._point) {
      case 0:
        this._point = 1, this._line ? this._context.lineTo(t9, e) : this._context.moveTo(t9, e);
        break;
      case 1:
        this._point = 2, this._x1 = t9, this._y1 = e;
        break;
      case 2:
        this._point = 3;
      default:
        Ui(this, t9, e);
        break;
    }
    this._x0 = this._x1, this._x1 = this._x2, this._x2 = t9, this._y0 = this._y1, this._y1 = this._y2, this._y2 = e;
  }
};
var zf = function t3(e) {
  function i(r) {
    return new En(r, e);
  }
  return i.tension = function(r) {
    return t3(+r);
  }, i;
}(0);
function Mn(t9, e) {
  this._context = t9, this._k = (1 - e) / 6;
}
Mn.prototype = {
  areaStart: ie,
  areaEnd: ie,
  lineStart: function() {
    this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._x5 = this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = this._y5 = NaN, this._point = 0;
  },
  lineEnd: function() {
    switch (this._point) {
      case 1: {
        this._context.moveTo(this._x3, this._y3), this._context.closePath();
        break;
      }
      case 2: {
        this._context.lineTo(this._x3, this._y3), this._context.closePath();
        break;
      }
      case 3: {
        this.point(this._x3, this._y3), this.point(this._x4, this._y4), this.point(this._x5, this._y5);
        break;
      }
    }
  },
  point: function(t9, e) {
    switch (t9 = +t9, e = +e, this._point) {
      case 0:
        this._point = 1, this._x3 = t9, this._y3 = e;
        break;
      case 1:
        this._point = 2, this._context.moveTo(this._x4 = t9, this._y4 = e);
        break;
      case 2:
        this._point = 3, this._x5 = t9, this._y5 = e;
        break;
      default:
        Ui(this, t9, e);
        break;
    }
    this._x0 = this._x1, this._x1 = this._x2, this._x2 = t9, this._y0 = this._y1, this._y1 = this._y2, this._y2 = e;
  }
};
var Wf = function t4(e) {
  function i(r) {
    return new Mn(r, e);
  }
  return i.tension = function(r) {
    return t4(+r);
  }, i;
}(0);
function On(t9, e) {
  this._context = t9, this._k = (1 - e) / 6;
}
On.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN, this._point = 0;
  },
  lineEnd: function() {
    (this._line || this._line !== 0 && this._point === 3) && this._context.closePath(), this._line = 1 - this._line;
  },
  point: function(t9, e) {
    switch (t9 = +t9, e = +e, this._point) {
      case 0:
        this._point = 1;
        break;
      case 1:
        this._point = 2;
        break;
      case 2:
        this._point = 3, this._line ? this._context.lineTo(this._x2, this._y2) : this._context.moveTo(this._x2, this._y2);
        break;
      case 3:
        this._point = 4;
      default:
        Ui(this, t9, e);
        break;
    }
    this._x0 = this._x1, this._x1 = this._x2, this._x2 = t9, this._y0 = this._y1, this._y1 = this._y2, this._y2 = e;
  }
};
var Hf = function t5(e) {
  function i(r) {
    return new On(r, e);
  }
  return i.tension = function(r) {
    return t5(+r);
  }, i;
}(0);
function $n(t9, e, i) {
  var r = t9._x1, n = t9._y1, o = t9._x2, s = t9._y2;
  if (t9._l01_a > $o) {
    var a = 2 * t9._l01_2a + 3 * t9._l01_a * t9._l12_a + t9._l12_2a, l = 3 * t9._l01_a * (t9._l01_a + t9._l12_a);
    r = (r * a - t9._x0 * t9._l12_2a + t9._x2 * t9._l01_2a) / l, n = (n * a - t9._y0 * t9._l12_2a + t9._y2 * t9._l01_2a) / l;
  }
  if (t9._l23_a > $o) {
    var h = 2 * t9._l23_2a + 3 * t9._l23_a * t9._l12_a + t9._l12_2a, c = 3 * t9._l23_a * (t9._l23_a + t9._l12_a);
    o = (o * h + t9._x1 * t9._l23_2a - e * t9._l12_2a) / c, s = (s * h + t9._y1 * t9._l23_2a - i * t9._l12_2a) / c;
  }
  t9._context.bezierCurveTo(r, n, o, s, t9._x2, t9._y2);
}
function ha(t9, e) {
  this._context = t9, this._alpha = e;
}
ha.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN, this._l01_a = this._l12_a = this._l23_a = this._l01_2a = this._l12_2a = this._l23_2a = this._point = 0;
  },
  lineEnd: function() {
    switch (this._point) {
      case 2:
        this._context.lineTo(this._x2, this._y2);
        break;
      case 3:
        this.point(this._x2, this._y2);
        break;
    }
    (this._line || this._line !== 0 && this._point === 1) && this._context.closePath(), this._line = 1 - this._line;
  },
  point: function(t9, e) {
    if (t9 = +t9, e = +e, this._point) {
      var i = this._x2 - t9, r = this._y2 - e;
      this._l23_a = Math.sqrt(this._l23_2a = Math.pow(i * i + r * r, this._alpha));
    }
    switch (this._point) {
      case 0:
        this._point = 1, this._line ? this._context.lineTo(t9, e) : this._context.moveTo(t9, e);
        break;
      case 1:
        this._point = 2;
        break;
      case 2:
        this._point = 3;
      default:
        $n(this, t9, e);
        break;
    }
    this._l01_a = this._l12_a, this._l12_a = this._l23_a, this._l01_2a = this._l12_2a, this._l12_2a = this._l23_2a, this._x0 = this._x1, this._x1 = this._x2, this._x2 = t9, this._y0 = this._y1, this._y1 = this._y2, this._y2 = e;
  }
};
var jf = function t6(e) {
  function i(r) {
    return e ? new ha(r, e) : new En(r, 0);
  }
  return i.alpha = function(r) {
    return t6(+r);
  }, i;
}(0.5);
function ca(t9, e) {
  this._context = t9, this._alpha = e;
}
ca.prototype = {
  areaStart: ie,
  areaEnd: ie,
  lineStart: function() {
    this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._x5 = this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = this._y5 = NaN, this._l01_a = this._l12_a = this._l23_a = this._l01_2a = this._l12_2a = this._l23_2a = this._point = 0;
  },
  lineEnd: function() {
    switch (this._point) {
      case 1: {
        this._context.moveTo(this._x3, this._y3), this._context.closePath();
        break;
      }
      case 2: {
        this._context.lineTo(this._x3, this._y3), this._context.closePath();
        break;
      }
      case 3: {
        this.point(this._x3, this._y3), this.point(this._x4, this._y4), this.point(this._x5, this._y5);
        break;
      }
    }
  },
  point: function(t9, e) {
    if (t9 = +t9, e = +e, this._point) {
      var i = this._x2 - t9, r = this._y2 - e;
      this._l23_a = Math.sqrt(this._l23_2a = Math.pow(i * i + r * r, this._alpha));
    }
    switch (this._point) {
      case 0:
        this._point = 1, this._x3 = t9, this._y3 = e;
        break;
      case 1:
        this._point = 2, this._context.moveTo(this._x4 = t9, this._y4 = e);
        break;
      case 2:
        this._point = 3, this._x5 = t9, this._y5 = e;
        break;
      default:
        $n(this, t9, e);
        break;
    }
    this._l01_a = this._l12_a, this._l12_a = this._l23_a, this._l01_2a = this._l12_2a, this._l12_2a = this._l23_2a, this._x0 = this._x1, this._x1 = this._x2, this._x2 = t9, this._y0 = this._y1, this._y1 = this._y2, this._y2 = e;
  }
};
var Uf = function t7(e) {
  function i(r) {
    return e ? new ca(r, e) : new Mn(r, 0);
  }
  return i.alpha = function(r) {
    return t7(+r);
  }, i;
}(0.5);
function ua(t9, e) {
  this._context = t9, this._alpha = e;
}
ua.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN, this._l01_a = this._l12_a = this._l23_a = this._l01_2a = this._l12_2a = this._l23_2a = this._point = 0;
  },
  lineEnd: function() {
    (this._line || this._line !== 0 && this._point === 3) && this._context.closePath(), this._line = 1 - this._line;
  },
  point: function(t9, e) {
    if (t9 = +t9, e = +e, this._point) {
      var i = this._x2 - t9, r = this._y2 - e;
      this._l23_a = Math.sqrt(this._l23_2a = Math.pow(i * i + r * r, this._alpha));
    }
    switch (this._point) {
      case 0:
        this._point = 1;
        break;
      case 1:
        this._point = 2;
        break;
      case 2:
        this._point = 3, this._line ? this._context.lineTo(this._x2, this._y2) : this._context.moveTo(this._x2, this._y2);
        break;
      case 3:
        this._point = 4;
      default:
        $n(this, t9, e);
        break;
    }
    this._l01_a = this._l12_a, this._l12_a = this._l23_a, this._l01_2a = this._l12_2a, this._l12_2a = this._l23_2a, this._x0 = this._x1, this._x1 = this._x2, this._x2 = t9, this._y0 = this._y1, this._y1 = this._y2, this._y2 = e;
  }
};
var Yf = function t8(e) {
  function i(r) {
    return e ? new ua(r, e) : new On(r, 0);
  }
  return i.alpha = function(r) {
    return t8(+r);
  }, i;
}(0.5);
function fa(t9) {
  this._context = t9;
}
fa.prototype = {
  areaStart: ie,
  areaEnd: ie,
  lineStart: function() {
    this._point = 0;
  },
  lineEnd: function() {
    this._point && this._context.closePath();
  },
  point: function(t9, e) {
    t9 = +t9, e = +e, this._point ? this._context.lineTo(t9, e) : (this._point = 1, this._context.moveTo(t9, e));
  }
};
function Gf(t9) {
  return new fa(t9);
}
function Do(t9) {
  return t9 < 0 ? -1 : 1;
}
function No(t9, e, i) {
  var r = t9._x1 - t9._x0, n = e - t9._x1, o = (t9._y1 - t9._y0) / (r || n < 0 && -0), s = (i - t9._y1) / (n || r < 0 && -0), a = (o * n + s * r) / (r + n);
  return (Do(o) + Do(s)) * Math.min(Math.abs(o), Math.abs(s), 0.5 * Math.abs(a)) || 0;
}
function Ro(t9, e) {
  var i = t9._x1 - t9._x0;
  return i ? (3 * (t9._y1 - t9._y0) / i - e) / 2 : e;
}
function Nr(t9, e, i) {
  var r = t9._x0, n = t9._y0, o = t9._x1, s = t9._y1, a = (o - r) / 3;
  t9._context.bezierCurveTo(r + a, n + a * e, o - a, s - a * i, o, s);
}
function Yi(t9) {
  this._context = t9;
}
Yi.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x0 = this._x1 = this._y0 = this._y1 = this._t0 = NaN, this._point = 0;
  },
  lineEnd: function() {
    switch (this._point) {
      case 2:
        this._context.lineTo(this._x1, this._y1);
        break;
      case 3:
        Nr(this, this._t0, Ro(this, this._t0));
        break;
    }
    (this._line || this._line !== 0 && this._point === 1) && this._context.closePath(), this._line = 1 - this._line;
  },
  point: function(t9, e) {
    var i = NaN;
    if (t9 = +t9, e = +e, !(t9 === this._x1 && e === this._y1)) {
      switch (this._point) {
        case 0:
          this._point = 1, this._line ? this._context.lineTo(t9, e) : this._context.moveTo(t9, e);
          break;
        case 1:
          this._point = 2;
          break;
        case 2:
          this._point = 3, Nr(this, Ro(this, i = No(this, t9, e)), i);
          break;
        default:
          Nr(this, this._t0, i = No(this, t9, e));
          break;
      }
      this._x0 = this._x1, this._x1 = t9, this._y0 = this._y1, this._y1 = e, this._t0 = i;
    }
  }
};
function da(t9) {
  this._context = new pa(t9);
}
(da.prototype = Object.create(Yi.prototype)).point = function(t9, e) {
  Yi.prototype.point.call(this, e, t9);
};
function pa(t9) {
  this._context = t9;
}
pa.prototype = {
  moveTo: function(t9, e) {
    this._context.moveTo(e, t9);
  },
  closePath: function() {
    this._context.closePath();
  },
  lineTo: function(t9, e) {
    this._context.lineTo(e, t9);
  },
  bezierCurveTo: function(t9, e, i, r, n, o) {
    this._context.bezierCurveTo(e, t9, r, i, o, n);
  }
};
function Vf(t9) {
  return new Yi(t9);
}
function Xf(t9) {
  return new da(t9);
}
function ga(t9) {
  this._context = t9;
}
ga.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x = [], this._y = [];
  },
  lineEnd: function() {
    var t9 = this._x, e = this._y, i = t9.length;
    if (i)
      if (this._line ? this._context.lineTo(t9[0], e[0]) : this._context.moveTo(t9[0], e[0]), i === 2)
        this._context.lineTo(t9[1], e[1]);
      else
        for (var r = Po(t9), n = Po(e), o = 0, s = 1; s < i; ++o, ++s)
          this._context.bezierCurveTo(r[0][o], n[0][o], r[1][o], n[1][o], t9[s], e[s]);
    (this._line || this._line !== 0 && i === 1) && this._context.closePath(), this._line = 1 - this._line, this._x = this._y = null;
  },
  point: function(t9, e) {
    this._x.push(+t9), this._y.push(+e);
  }
};
function Po(t9) {
  var e, i = t9.length - 1, r, n = new Array(i), o = new Array(i), s = new Array(i);
  for (n[0] = 0, o[0] = 2, s[0] = t9[0] + 2 * t9[1], e = 1; e < i - 1; ++e)
    n[e] = 1, o[e] = 4, s[e] = 4 * t9[e] + 2 * t9[e + 1];
  for (n[i - 1] = 2, o[i - 1] = 7, s[i - 1] = 8 * t9[i - 1] + t9[i], e = 1; e < i; ++e)
    r = n[e] / o[e - 1], o[e] -= r, s[e] -= r * s[e - 1];
  for (n[i - 1] = s[i - 1] / o[i - 1], e = i - 2; e >= 0; --e)
    n[e] = (s[e] - n[e + 1]) / o[e];
  for (o[i - 1] = (t9[i] + n[i - 1]) / 2, e = 0; e < i - 1; ++e)
    o[e] = 2 * t9[e + 1] - n[e + 1];
  return [n, o];
}
function Kf(t9) {
  return new ga(t9);
}
function ur(t9, e) {
  this._context = t9, this._t = e;
}
ur.prototype = {
  areaStart: function() {
    this._line = 0;
  },
  areaEnd: function() {
    this._line = NaN;
  },
  lineStart: function() {
    this._x = this._y = NaN, this._point = 0;
  },
  lineEnd: function() {
    0 < this._t && this._t < 1 && this._point === 2 && this._context.lineTo(this._x, this._y), (this._line || this._line !== 0 && this._point === 1) && this._context.closePath(), this._line >= 0 && (this._t = 1 - this._t, this._line = 1 - this._line);
  },
  point: function(t9, e) {
    switch (t9 = +t9, e = +e, this._point) {
      case 0:
        this._point = 1, this._line ? this._context.lineTo(t9, e) : this._context.moveTo(t9, e);
        break;
      case 1:
        this._point = 2;
      default: {
        if (this._t <= 0)
          this._context.lineTo(this._x, e), this._context.lineTo(t9, e);
        else {
          var i = this._x * (1 - this._t) + t9 * this._t;
          this._context.lineTo(i, this._y), this._context.lineTo(i, e);
        }
        break;
      }
    }
    this._x = t9, this._y = e;
  }
};
function Zf(t9) {
  return new ur(t9, 0.5);
}
function Jf(t9) {
  return new ur(t9, 0);
}
function Qf(t9) {
  return new ur(t9, 1);
}
function je(t9, e, i) {
  this.k = t9, this.x = e, this.y = i;
}
je.prototype = {
  constructor: je,
  scale: function(t9) {
    return t9 === 1 ? this : new je(this.k * t9, this.x, this.y);
  },
  translate: function(t9, e) {
    return t9 === 0 & e === 0 ? this : new je(this.k, this.x + this.k * t9, this.y + this.k * e);
  },
  apply: function(t9) {
    return [t9[0] * this.k + this.x, t9[1] * this.k + this.y];
  },
  applyX: function(t9) {
    return t9 * this.k + this.x;
  },
  applyY: function(t9) {
    return t9 * this.k + this.y;
  },
  invert: function(t9) {
    return [(t9[0] - this.x) / this.k, (t9[1] - this.y) / this.k];
  },
  invertX: function(t9) {
    return (t9 - this.x) / this.k;
  },
  invertY: function(t9) {
    return (t9 - this.y) / this.k;
  },
  rescaleX: function(t9) {
    return t9.copy().domain(t9.range().map(this.invertX, this).map(t9.invert, t9));
  },
  rescaleY: function(t9) {
    return t9.copy().domain(t9.range().map(this.invertY, this).map(t9.invert, t9));
  },
  toString: function() {
    return "translate(" + this.x + "," + this.y + ") scale(" + this.k + ")";
  }
};
je.prototype;
var {
  entries: ma,
  setPrototypeOf: qo,
  isFrozen: td,
  getPrototypeOf: ed,
  getOwnPropertyDescriptor: id
} = Object;
var {
  freeze: ht,
  seal: Bt,
  create: rd
} = Object;
var {
  apply: on,
  construct: sn
} = typeof Reflect < "u" && Reflect;
on || (on = function(e, i, r) {
  return e.apply(i, r);
});
ht || (ht = function(e) {
  return e;
});
Bt || (Bt = function(e) {
  return e;
});
sn || (sn = function(e, i) {
  return new e(...i);
});
var nd = bt(Array.prototype.forEach);
var zo = bt(Array.prototype.pop);
var Pe = bt(Array.prototype.push);
var Ei = bt(String.prototype.toLowerCase);
var Rr = bt(String.prototype.toString);
var od = bt(String.prototype.match);
var vt = bt(String.prototype.replace);
var sd = bt(String.prototype.indexOf);
var ad = bt(String.prototype.trim);
var gt = bt(RegExp.prototype.test);
var qe = ld(TypeError);
function bt(t9) {
  return function(e) {
    for (var i = arguments.length, r = new Array(i > 1 ? i - 1 : 0), n = 1; n < i; n++)
      r[n - 1] = arguments[n];
    return on(t9, e, r);
  };
}
function ld(t9) {
  return function() {
    for (var e = arguments.length, i = new Array(e), r = 0; r < e; r++)
      i[r] = arguments[r];
    return sn(t9, i);
  };
}
function N(t9, e, i) {
  var r;
  i = (r = i) !== null && r !== void 0 ? r : Ei, qo && qo(t9, null);
  let n = e.length;
  for (; n--; ) {
    let o = e[n];
    if (typeof o == "string") {
      const s = i(o);
      s !== o && (td(e) || (e[n] = s), o = s);
    }
    t9[o] = true;
  }
  return t9;
}
function Se(t9) {
  const e = rd(null);
  for (const [i, r] of ma(t9))
    e[i] = r;
  return e;
}
function Ti(t9, e) {
  for (; t9 !== null; ) {
    const r = id(t9, e);
    if (r) {
      if (r.get)
        return bt(r.get);
      if (typeof r.value == "function")
        return bt(r.value);
    }
    t9 = ed(t9);
  }
  function i(r) {
    return console.warn("fallback value for", r), null;
  }
  return i;
}
var Wo = ht(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "section", "select", "shadow", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]);
var Pr = ht(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]);
var qr = ht(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]);
var hd = ht(["animate", "color-profile", "cursor", "discard", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]);
var zr = ht(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover", "mprescripts"]);
var cd = ht(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]);
var Ho = ht(["#text"]);
var jo = ht(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "pattern", "placeholder", "playsinline", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "xmlns", "slot"]);
var Wr = ht(["accent-height", "accumulate", "additive", "alignment-baseline", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dur", "edgemode", "elevation", "end", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]);
var Uo = ht(["accent", "accentunder", "align", "bevelled", "close", "columnsalign", "columnlines", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lspace", "lquote", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]);
var Si = ht(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]);
var ud = Bt(/\{\{[\w\W]*|[\w\W]*\}\}/gm);
var fd = Bt(/<%[\w\W]*|[\w\W]*%>/gm);
var dd = Bt(/\${[\w\W]*}/gm);
var pd = Bt(/^data-[\-\w.\u00B7-\uFFFF]/);
var gd = Bt(/^aria-[\-\w]+$/);
var _a = Bt(
  /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i
  // eslint-disable-line no-useless-escape
);
var md = Bt(/^(?:\w+script|data):/i);
var _d = Bt(
  /[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g
  // eslint-disable-line no-control-regex
);
var ya = Bt(/^html$/i);
var Yo = Object.freeze({
  __proto__: null,
  MUSTACHE_EXPR: ud,
  ERB_EXPR: fd,
  TMPLIT_EXPR: dd,
  DATA_ATTR: pd,
  ARIA_ATTR: gd,
  IS_ALLOWED_URI: _a,
  IS_SCRIPT_OR_DATA: md,
  ATTR_WHITESPACE: _d,
  DOCTYPE_NAME: ya
});
var yd = () => typeof window > "u" ? null : window;
var Cd = function(e, i) {
  if (typeof e != "object" || typeof e.createPolicy != "function")
    return null;
  let r = null;
  const n = "data-tt-policy-suffix";
  i && i.hasAttribute(n) && (r = i.getAttribute(n));
  const o = "dompurify" + (r ? "#" + r : "");
  try {
    return e.createPolicy(o, {
      createHTML(s) {
        return s;
      },
      createScriptURL(s) {
        return s;
      }
    });
  } catch {
    return console.warn("TrustedTypes policy " + o + " could not be created."), null;
  }
};
function Ca() {
  let t9 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : yd();
  const e = (w) => Ca(w);
  if (e.version = "3.0.5", e.removed = [], !t9 || !t9.document || t9.document.nodeType !== 9)
    return e.isSupported = false, e;
  const i = t9.document, r = i.currentScript;
  let {
    document: n
  } = t9;
  const {
    DocumentFragment: o,
    HTMLTemplateElement: s,
    Node: a,
    Element: l,
    NodeFilter: h,
    NamedNodeMap: c = t9.NamedNodeMap || t9.MozNamedAttrMap,
    HTMLFormElement: f,
    DOMParser: g,
    trustedTypes: p
  } = t9, _ = l.prototype, k = Ti(_, "cloneNode"), M = Ti(_, "nextSibling"), q = Ti(_, "childNodes"), v = Ti(_, "parentNode");
  if (typeof s == "function") {
    const w = n.createElement("template");
    w.content && w.content.ownerDocument && (n = w.content.ownerDocument);
  }
  let z, Q = "";
  const {
    implementation: X,
    createNodeIterator: G,
    createDocumentFragment: W,
    getElementsByTagName: Vt
  } = n, {
    importNode: K
  } = i;
  let I = {};
  e.isSupported = typeof ma == "function" && typeof v == "function" && X && X.createHTMLDocument !== void 0;
  const {
    MUSTACHE_EXPR: Nt,
    ERB_EXPR: At,
    TMPLIT_EXPR: E,
    DATA_ATTR: S,
    ARIA_ATTR: C,
    IS_SCRIPT_OR_DATA: O,
    ATTR_WHITESPACE: x
  } = Yo;
  let {
    IS_ALLOWED_URI: D
  } = Yo, T = null;
  const H = N({}, [...Wo, ...Pr, ...qr, ...zr, ...Ho]);
  let R = null;
  const U = N({}, [...jo, ...Wr, ...Uo, ...Si]);
  let P = Object.seal(Object.create(null, {
    tagNameCheck: {
      writable: true,
      configurable: false,
      enumerable: true,
      value: null
    },
    attributeNameCheck: {
      writable: true,
      configurable: false,
      enumerable: true,
      value: null
    },
    allowCustomizedBuiltInElements: {
      writable: true,
      configurable: false,
      enumerable: true,
      value: false
    }
  })), ct = null, pt = null, Xt = true, Rt = true, Pt = false, it = true, st = false, St = false, Kt = false, wr = false, ye = false, di = false, pi = false, eo = true, io = false;
  const Kl = "user-content-";
  let Br = true, Ne = false, Ce = {}, xe = null;
  const ro = N({}, ["annotation-xml", "audio", "colgroup", "desc", "foreignobject", "head", "iframe", "math", "mi", "mn", "mo", "ms", "mtext", "noembed", "noframes", "noscript", "plaintext", "script", "style", "svg", "template", "thead", "title", "video", "xmp"]);
  let no = null;
  const oo = N({}, ["audio", "video", "img", "source", "image", "track"]);
  let Fr = null;
  const so = N({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]), gi = "http://www.w3.org/1998/Math/MathML", mi = "http://www.w3.org/2000/svg", qt = "http://www.w3.org/1999/xhtml";
  let be = qt, Lr = false, Ar = null;
  const Zl = N({}, [gi, mi, qt], Rr);
  let oe;
  const Jl = ["application/xhtml+xml", "text/html"], Ql = "text/html";
  let tt, Te = null;
  const th = n.createElement("form"), ao = function(u) {
    return u instanceof RegExp || u instanceof Function;
  }, Er = function(u) {
    if (!(Te && Te === u)) {
      if ((!u || typeof u != "object") && (u = {}), u = Se(u), oe = // eslint-disable-next-line unicorn/prefer-includes
      Jl.indexOf(u.PARSER_MEDIA_TYPE) === -1 ? oe = Ql : oe = u.PARSER_MEDIA_TYPE, tt = oe === "application/xhtml+xml" ? Rr : Ei, T = "ALLOWED_TAGS" in u ? N({}, u.ALLOWED_TAGS, tt) : H, R = "ALLOWED_ATTR" in u ? N({}, u.ALLOWED_ATTR, tt) : U, Ar = "ALLOWED_NAMESPACES" in u ? N({}, u.ALLOWED_NAMESPACES, Rr) : Zl, Fr = "ADD_URI_SAFE_ATTR" in u ? N(
        Se(so),
        // eslint-disable-line indent
        u.ADD_URI_SAFE_ATTR,
        // eslint-disable-line indent
        tt
        // eslint-disable-line indent
      ) : so, no = "ADD_DATA_URI_TAGS" in u ? N(
        Se(oo),
        // eslint-disable-line indent
        u.ADD_DATA_URI_TAGS,
        // eslint-disable-line indent
        tt
        // eslint-disable-line indent
      ) : oo, xe = "FORBID_CONTENTS" in u ? N({}, u.FORBID_CONTENTS, tt) : ro, ct = "FORBID_TAGS" in u ? N({}, u.FORBID_TAGS, tt) : {}, pt = "FORBID_ATTR" in u ? N({}, u.FORBID_ATTR, tt) : {}, Ce = "USE_PROFILES" in u ? u.USE_PROFILES : false, Xt = u.ALLOW_ARIA_ATTR !== false, Rt = u.ALLOW_DATA_ATTR !== false, Pt = u.ALLOW_UNKNOWN_PROTOCOLS || false, it = u.ALLOW_SELF_CLOSE_IN_ATTR !== false, st = u.SAFE_FOR_TEMPLATES || false, St = u.WHOLE_DOCUMENT || false, ye = u.RETURN_DOM || false, di = u.RETURN_DOM_FRAGMENT || false, pi = u.RETURN_TRUSTED_TYPE || false, wr = u.FORCE_BODY || false, eo = u.SANITIZE_DOM !== false, io = u.SANITIZE_NAMED_PROPS || false, Br = u.KEEP_CONTENT !== false, Ne = u.IN_PLACE || false, D = u.ALLOWED_URI_REGEXP || _a, be = u.NAMESPACE || qt, P = u.CUSTOM_ELEMENT_HANDLING || {}, u.CUSTOM_ELEMENT_HANDLING && ao(u.CUSTOM_ELEMENT_HANDLING.tagNameCheck) && (P.tagNameCheck = u.CUSTOM_ELEMENT_HANDLING.tagNameCheck), u.CUSTOM_ELEMENT_HANDLING && ao(u.CUSTOM_ELEMENT_HANDLING.attributeNameCheck) && (P.attributeNameCheck = u.CUSTOM_ELEMENT_HANDLING.attributeNameCheck), u.CUSTOM_ELEMENT_HANDLING && typeof u.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements == "boolean" && (P.allowCustomizedBuiltInElements = u.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements), st && (Rt = false), di && (ye = true), Ce && (T = N({}, [...Ho]), R = [], Ce.html === true && (N(T, Wo), N(R, jo)), Ce.svg === true && (N(T, Pr), N(R, Wr), N(R, Si)), Ce.svgFilters === true && (N(T, qr), N(R, Wr), N(R, Si)), Ce.mathMl === true && (N(T, zr), N(R, Uo), N(R, Si))), u.ADD_TAGS && (T === H && (T = Se(T)), N(T, u.ADD_TAGS, tt)), u.ADD_ATTR && (R === U && (R = Se(R)), N(R, u.ADD_ATTR, tt)), u.ADD_URI_SAFE_ATTR && N(Fr, u.ADD_URI_SAFE_ATTR, tt), u.FORBID_CONTENTS && (xe === ro && (xe = Se(xe)), N(xe, u.FORBID_CONTENTS, tt)), Br && (T["#text"] = true), St && N(T, ["html", "head", "body"]), T.table && (N(T, ["tbody"]), delete ct.tbody), u.TRUSTED_TYPES_POLICY) {
        if (typeof u.TRUSTED_TYPES_POLICY.createHTML != "function")
          throw qe('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');
        if (typeof u.TRUSTED_TYPES_POLICY.createScriptURL != "function")
          throw qe('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');
        z = u.TRUSTED_TYPES_POLICY, Q = z.createHTML("");
      } else
        z === void 0 && (z = Cd(p, r)), z !== null && typeof Q == "string" && (Q = z.createHTML(""));
      ht && ht(u), Te = u;
    }
  }, lo = N({}, ["mi", "mo", "mn", "ms", "mtext"]), ho = N({}, ["foreignobject", "desc", "title", "annotation-xml"]), eh = N({}, ["title", "style", "font", "a", "script"]), _i = N({}, Pr);
  N(_i, qr), N(_i, hd);
  const Mr = N({}, zr);
  N(Mr, cd);
  const ih = function(u) {
    let m = v(u);
    (!m || !m.tagName) && (m = {
      namespaceURI: be,
      tagName: "template"
    });
    const b = Ei(u.tagName), j = Ei(m.tagName);
    return Ar[u.namespaceURI] ? u.namespaceURI === mi ? m.namespaceURI === qt ? b === "svg" : m.namespaceURI === gi ? b === "svg" && (j === "annotation-xml" || lo[j]) : !!_i[b] : u.namespaceURI === gi ? m.namespaceURI === qt ? b === "math" : m.namespaceURI === mi ? b === "math" && ho[j] : !!Mr[b] : u.namespaceURI === qt ? m.namespaceURI === mi && !ho[j] || m.namespaceURI === gi && !lo[j] ? false : !Mr[b] && (eh[b] || !_i[b]) : !!(oe === "application/xhtml+xml" && Ar[u.namespaceURI]) : false;
  }, se = function(u) {
    Pe(e.removed, {
      element: u
    });
    try {
      u.parentNode.removeChild(u);
    } catch {
      u.remove();
    }
  }, Or = function(u, m) {
    try {
      Pe(e.removed, {
        attribute: m.getAttributeNode(u),
        from: m
      });
    } catch {
      Pe(e.removed, {
        attribute: null,
        from: m
      });
    }
    if (m.removeAttribute(u), u === "is" && !R[u])
      if (ye || di)
        try {
          se(m);
        } catch {
        }
      else
        try {
          m.setAttribute(u, "");
        } catch {
        }
  }, co = function(u) {
    let m, b;
    if (wr)
      u = "<remove></remove>" + u;
    else {
      const _t = od(u, /^[\r\n\t ]+/);
      b = _t && _t[0];
    }
    oe === "application/xhtml+xml" && be === qt && (u = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + u + "</body></html>");
    const j = z ? z.createHTML(u) : u;
    if (be === qt)
      try {
        m = new g().parseFromString(j, oe);
      } catch {
      }
    if (!m || !m.documentElement) {
      m = X.createDocument(be, "template", null);
      try {
        m.documentElement.innerHTML = Lr ? Q : j;
      } catch {
      }
    }
    const et = m.body || m.documentElement;
    return u && b && et.insertBefore(n.createTextNode(b), et.childNodes[0] || null), be === qt ? Vt.call(m, St ? "html" : "body")[0] : St ? m.documentElement : et;
  }, uo = function(u) {
    return G.call(
      u.ownerDocument || u,
      u,
      // eslint-disable-next-line no-bitwise
      h.SHOW_ELEMENT | h.SHOW_COMMENT | h.SHOW_TEXT,
      null,
      false
    );
  }, rh = function(u) {
    return u instanceof f && (typeof u.nodeName != "string" || typeof u.textContent != "string" || typeof u.removeChild != "function" || !(u.attributes instanceof c) || typeof u.removeAttribute != "function" || typeof u.setAttribute != "function" || typeof u.namespaceURI != "string" || typeof u.insertBefore != "function" || typeof u.hasChildNodes != "function");
  }, yi = function(u) {
    return typeof a == "object" ? u instanceof a : u && typeof u == "object" && typeof u.nodeType == "number" && typeof u.nodeName == "string";
  }, zt = function(u, m, b) {
    I[u] && nd(I[u], (j) => {
      j.call(e, m, b, Te);
    });
  }, fo = function(u) {
    let m;
    if (zt("beforeSanitizeElements", u, null), rh(u))
      return se(u), true;
    const b = tt(u.nodeName);
    if (zt("uponSanitizeElement", u, {
      tagName: b,
      allowedTags: T
    }), u.hasChildNodes() && !yi(u.firstElementChild) && (!yi(u.content) || !yi(u.content.firstElementChild)) && gt(/<[/\w]/g, u.innerHTML) && gt(/<[/\w]/g, u.textContent))
      return se(u), true;
    if (!T[b] || ct[b]) {
      if (!ct[b] && go(b) && (P.tagNameCheck instanceof RegExp && gt(P.tagNameCheck, b) || P.tagNameCheck instanceof Function && P.tagNameCheck(b)))
        return false;
      if (Br && !xe[b]) {
        const j = v(u) || u.parentNode, et = q(u) || u.childNodes;
        if (et && j) {
          const _t = et.length;
          for (let V = _t - 1; V >= 0; --V)
            j.insertBefore(k(et[V], true), M(u));
        }
      }
      return se(u), true;
    }
    return u instanceof l && !ih(u) || (b === "noscript" || b === "noembed" || b === "noframes") && gt(/<\/no(script|embed|frames)/i, u.innerHTML) ? (se(u), true) : (st && u.nodeType === 3 && (m = u.textContent, m = vt(m, Nt, " "), m = vt(m, At, " "), m = vt(m, E, " "), u.textContent !== m && (Pe(e.removed, {
      element: u.cloneNode()
    }), u.textContent = m)), zt("afterSanitizeElements", u, null), false);
  }, po = function(u, m, b) {
    if (eo && (m === "id" || m === "name") && (b in n || b in th))
      return false;
    if (!(Rt && !pt[m] && gt(S, m))) {
      if (!(Xt && gt(C, m))) {
        if (!R[m] || pt[m]) {
          if (
            // First condition does a very basic check if a) it's basically a valid custom element tagname AND
            // b) if the tagName passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
            // and c) if the attribute name passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.attributeNameCheck
            !(go(u) && (P.tagNameCheck instanceof RegExp && gt(P.tagNameCheck, u) || P.tagNameCheck instanceof Function && P.tagNameCheck(u)) && (P.attributeNameCheck instanceof RegExp && gt(P.attributeNameCheck, m) || P.attributeNameCheck instanceof Function && P.attributeNameCheck(m)) || // Alternative, second condition checks if it's an `is`-attribute, AND
            // the value passes whatever the user has configured for CUSTOM_ELEMENT_HANDLING.tagNameCheck
            m === "is" && P.allowCustomizedBuiltInElements && (P.tagNameCheck instanceof RegExp && gt(P.tagNameCheck, b) || P.tagNameCheck instanceof Function && P.tagNameCheck(b)))
          )
            return false;
        } else if (!Fr[m]) {
          if (!gt(D, vt(b, x, ""))) {
            if (!((m === "src" || m === "xlink:href" || m === "href") && u !== "script" && sd(b, "data:") === 0 && no[u])) {
              if (!(Pt && !gt(O, vt(b, x, "")))) {
                if (b)
                  return false;
              }
            }
          }
        }
      }
    }
    return true;
  }, go = function(u) {
    return u.indexOf("-") > 0;
  }, mo = function(u) {
    let m, b, j, et;
    zt("beforeSanitizeAttributes", u, null);
    const {
      attributes: _t
    } = u;
    if (!_t)
      return;
    const V = {
      attrName: "",
      attrValue: "",
      keepAttr: true,
      allowedAttributes: R
    };
    for (et = _t.length; et--; ) {
      m = _t[et];
      const {
        name: Et,
        namespaceURI: $r
      } = m;
      if (b = Et === "value" ? m.value : ad(m.value), j = tt(Et), V.attrName = j, V.attrValue = b, V.keepAttr = true, V.forceKeepAttr = void 0, zt("uponSanitizeAttribute", u, V), b = V.attrValue, V.forceKeepAttr || (Or(Et, u), !V.keepAttr))
        continue;
      if (!it && gt(/\/>/i, b)) {
        Or(Et, u);
        continue;
      }
      st && (b = vt(b, Nt, " "), b = vt(b, At, " "), b = vt(b, E, " "));
      const _o = tt(u.nodeName);
      if (po(_o, j, b)) {
        if (io && (j === "id" || j === "name") && (Or(Et, u), b = Kl + b), z && typeof p == "object" && typeof p.getAttributeType == "function" && !$r)
          switch (p.getAttributeType(_o, j)) {
            case "TrustedHTML": {
              b = z.createHTML(b);
              break;
            }
            case "TrustedScriptURL": {
              b = z.createScriptURL(b);
              break;
            }
          }
        try {
          $r ? u.setAttributeNS($r, Et, b) : u.setAttribute(Et, b), zo(e.removed);
        } catch {
        }
      }
    }
    zt("afterSanitizeAttributes", u, null);
  }, nh = function w(u) {
    let m;
    const b = uo(u);
    for (zt("beforeSanitizeShadowDOM", u, null); m = b.nextNode(); )
      zt("uponSanitizeShadowNode", m, null), !fo(m) && (m.content instanceof o && w(m.content), mo(m));
    zt("afterSanitizeShadowDOM", u, null);
  };
  return e.sanitize = function(w) {
    let u = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, m, b, j, et;
    if (Lr = !w, Lr && (w = "<!-->"), typeof w != "string" && !yi(w))
      if (typeof w.toString == "function") {
        if (w = w.toString(), typeof w != "string")
          throw qe("dirty is not a string, aborting");
      } else
        throw qe("toString is not a function");
    if (!e.isSupported)
      return w;
    if (Kt || Er(u), e.removed = [], typeof w == "string" && (Ne = false), Ne) {
      if (w.nodeName) {
        const Et = tt(w.nodeName);
        if (!T[Et] || ct[Et])
          throw qe("root node is forbidden and cannot be sanitized in-place");
      }
    } else if (w instanceof a)
      m = co("<!---->"), b = m.ownerDocument.importNode(w, true), b.nodeType === 1 && b.nodeName === "BODY" || b.nodeName === "HTML" ? m = b : m.appendChild(b);
    else {
      if (!ye && !st && !St && // eslint-disable-next-line unicorn/prefer-includes
      w.indexOf("<") === -1)
        return z && pi ? z.createHTML(w) : w;
      if (m = co(w), !m)
        return ye ? null : pi ? Q : "";
    }
    m && wr && se(m.firstChild);
    const _t = uo(Ne ? w : m);
    for (; j = _t.nextNode(); )
      fo(j) || (j.content instanceof o && nh(j.content), mo(j));
    if (Ne)
      return w;
    if (ye) {
      if (di)
        for (et = W.call(m.ownerDocument); m.firstChild; )
          et.appendChild(m.firstChild);
      else
        et = m;
      return (R.shadowroot || R.shadowrootmode) && (et = K.call(i, et, true)), et;
    }
    let V = St ? m.outerHTML : m.innerHTML;
    return St && T["!doctype"] && m.ownerDocument && m.ownerDocument.doctype && m.ownerDocument.doctype.name && gt(ya, m.ownerDocument.doctype.name) && (V = "<!DOCTYPE " + m.ownerDocument.doctype.name + `>
` + V), st && (V = vt(V, Nt, " "), V = vt(V, At, " "), V = vt(V, E, " ")), z && pi ? z.createHTML(V) : V;
  }, e.setConfig = function(w) {
    Er(w), Kt = true;
  }, e.clearConfig = function() {
    Te = null, Kt = false;
  }, e.isValidAttribute = function(w, u, m) {
    Te || Er({});
    const b = tt(w), j = tt(u);
    return po(b, j, m);
  }, e.addHook = function(w, u) {
    typeof u == "function" && (I[w] = I[w] || [], Pe(I[w], u));
  }, e.removeHook = function(w) {
    if (I[w])
      return zo(I[w]);
  }, e.removeHooks = function(w) {
    I[w] && (I[w] = []);
  }, e.removeAllHooks = function() {
    I = {};
  }, e;
}
var Gi = Ca();
var fr = /<br\s*\/?>/gi;
var xd = (t9) => t9 ? ba(t9).replace(/\\n/g, "#br#").split("#br#") : [""];
var xa = (t9) => Gi.sanitize(t9);
var Go = (t9, e) => {
  var i;
  if (((i = e.flowchart) == null ? void 0 : i.htmlLabels) !== false) {
    const r = e.securityLevel;
    r === "antiscript" || r === "strict" ? t9 = xa(t9) : r !== "loose" && (t9 = ba(t9), t9 = t9.replace(/</g, "&lt;").replace(/>/g, "&gt;"), t9 = t9.replace(/=/g, "&equals;"), t9 = vd(t9));
  }
  return t9;
};
var ei = (t9, e) => t9 && (e.dompurifyConfig ? t9 = Gi.sanitize(Go(t9, e), e.dompurifyConfig).toString() : t9 = Gi.sanitize(Go(t9, e), {
  FORBID_TAGS: ["style"]
}).toString(), t9);
var bd = (t9, e) => typeof t9 == "string" ? ei(t9, e) : t9.flat().map((i) => ei(i, e));
var Td = (t9) => fr.test(t9);
var Sd = (t9) => t9.split(fr);
var vd = (t9) => t9.replace(/#br#/g, "<br/>");
var ba = (t9) => t9.replace(fr, "#br#");
var kd = (t9) => {
  let e = "";
  return t9 && (e = window.location.protocol + "//" + window.location.host + window.location.pathname + window.location.search, e = e.replaceAll(/\(/g, "\\("), e = e.replaceAll(/\)/g, "\\)")), e;
};
var Ta = (t9) => !(t9 === false || ["false", "null", "0"].includes(String(t9).trim().toLowerCase()));
var wd = function(...t9) {
  const e = t9.filter((i) => !isNaN(i));
  return Math.max(...e);
};
var Bd = function(...t9) {
  const e = t9.filter((i) => !isNaN(i));
  return Math.min(...e);
};
var l1 = function(t9) {
  const e = t9.split(/(,)/), i = [];
  for (let r = 0; r < e.length; r++) {
    let n = e[r];
    if (n === "," && r > 0 && r + 1 < e.length) {
      const o = e[r - 1], s = e[r + 1];
      Fd(o, s) && (n = o + "," + s, r++, i.pop());
    }
    i.push(Ld(n));
  }
  return i.join("");
};
var an = (t9, e) => Math.max(0, t9.split(e).length - 1);
var Fd = (t9, e) => {
  const i = an(t9, "~"), r = an(e, "~");
  return i === 1 && r === 1;
};
var Ld = (t9) => {
  const e = an(t9, "~");
  let i = false;
  if (e <= 1)
    return t9;
  e % 2 !== 0 && t9.startsWith("~") && (t9 = t9.substring(1), i = true);
  const r = [...t9];
  let n = r.indexOf("~"), o = r.lastIndexOf("~");
  for (; n !== -1 && o !== -1 && n !== o; )
    r[n] = "<", r[o] = ">", n = r.indexOf("~"), o = r.lastIndexOf("~");
  return i && r.unshift("~"), r.join("");
};
var In = {
  getRows: xd,
  sanitizeText: ei,
  sanitizeTextOrArray: bd,
  hasBreaks: Td,
  splitBreaks: Sd,
  lineBreakRegex: fr,
  removeScript: xa,
  getUrl: kd,
  evaluate: Ta,
  getMax: wd,
  getMin: Bd
};
var Mi = {
  /* CLAMP */
  min: {
    r: 0,
    g: 0,
    b: 0,
    s: 0,
    l: 0,
    a: 0
  },
  max: {
    r: 255,
    g: 255,
    b: 255,
    h: 360,
    s: 100,
    l: 100,
    a: 1
  },
  clamp: {
    r: (t9) => t9 >= 255 ? 255 : t9 < 0 ? 0 : t9,
    g: (t9) => t9 >= 255 ? 255 : t9 < 0 ? 0 : t9,
    b: (t9) => t9 >= 255 ? 255 : t9 < 0 ? 0 : t9,
    h: (t9) => t9 % 360,
    s: (t9) => t9 >= 100 ? 100 : t9 < 0 ? 0 : t9,
    l: (t9) => t9 >= 100 ? 100 : t9 < 0 ? 0 : t9,
    a: (t9) => t9 >= 1 ? 1 : t9 < 0 ? 0 : t9
  },
  /* CONVERSION */
  //SOURCE: https://planetcalc.com/7779
  toLinear: (t9) => {
    const e = t9 / 255;
    return t9 > 0.03928 ? Math.pow((e + 0.055) / 1.055, 2.4) : e / 12.92;
  },
  //SOURCE: https://gist.github.com/mjackson/5311256
  hue2rgb: (t9, e, i) => (i < 0 && (i += 1), i > 1 && (i -= 1), i < 1 / 6 ? t9 + (e - t9) * 6 * i : i < 1 / 2 ? e : i < 2 / 3 ? t9 + (e - t9) * (2 / 3 - i) * 6 : t9),
  hsl2rgb: ({ h: t9, s: e, l: i }, r) => {
    if (!e)
      return i * 2.55;
    t9 /= 360, e /= 100, i /= 100;
    const n = i < 0.5 ? i * (1 + e) : i + e - i * e, o = 2 * i - n;
    switch (r) {
      case "r":
        return Mi.hue2rgb(o, n, t9 + 1 / 3) * 255;
      case "g":
        return Mi.hue2rgb(o, n, t9) * 255;
      case "b":
        return Mi.hue2rgb(o, n, t9 - 1 / 3) * 255;
    }
  },
  rgb2hsl: ({ r: t9, g: e, b: i }, r) => {
    t9 /= 255, e /= 255, i /= 255;
    const n = Math.max(t9, e, i), o = Math.min(t9, e, i), s = (n + o) / 2;
    if (r === "l")
      return s * 100;
    if (n === o)
      return 0;
    const a = n - o, l = s > 0.5 ? a / (2 - n - o) : a / (n + o);
    if (r === "s")
      return l * 100;
    switch (n) {
      case t9:
        return ((e - i) / a + (e < i ? 6 : 0)) * 60;
      case e:
        return ((i - t9) / a + 2) * 60;
      case i:
        return ((t9 - e) / a + 4) * 60;
      default:
        return -1;
    }
  }
};
var Ad = Mi;
var Ed = {
  /* API */
  clamp: (t9, e, i) => e > i ? Math.min(e, Math.max(i, t9)) : Math.min(i, Math.max(e, t9)),
  round: (t9) => Math.round(t9 * 1e10) / 1e10
};
var Md = Ed;
var Od = {
  /* API */
  dec2hex: (t9) => {
    const e = Math.round(t9).toString(16);
    return e.length > 1 ? e : `0${e}`;
  }
};
var $d = Od;
var Id = {
  channel: Ad,
  lang: Md,
  unit: $d
};
var $ = Id;
var Jt = {};
for (let t9 = 0; t9 <= 255; t9++)
  Jt[t9] = $.unit.dec2hex(t9);
var rt = {
  ALL: 0,
  RGB: 1,
  HSL: 2
};
var Dd = class {
  constructor() {
    this.type = rt.ALL;
  }
  /* API */
  get() {
    return this.type;
  }
  set(e) {
    if (this.type && this.type !== e)
      throw new Error("Cannot change both RGB and HSL channels at the same time");
    this.type = e;
  }
  reset() {
    this.type = rt.ALL;
  }
  is(e) {
    return this.type === e;
  }
};
var Nd = Dd;
var Rd = class {
  /* CONSTRUCTOR */
  constructor(e, i) {
    this.color = i, this.changed = false, this.data = e, this.type = new Nd();
  }
  /* API */
  set(e, i) {
    return this.color = i, this.changed = false, this.data = e, this.type.type = rt.ALL, this;
  }
  /* HELPERS */
  _ensureHSL() {
    const e = this.data, { h: i, s: r, l: n } = e;
    i === void 0 && (e.h = $.channel.rgb2hsl(e, "h")), r === void 0 && (e.s = $.channel.rgb2hsl(e, "s")), n === void 0 && (e.l = $.channel.rgb2hsl(e, "l"));
  }
  _ensureRGB() {
    const e = this.data, { r: i, g: r, b: n } = e;
    i === void 0 && (e.r = $.channel.hsl2rgb(e, "r")), r === void 0 && (e.g = $.channel.hsl2rgb(e, "g")), n === void 0 && (e.b = $.channel.hsl2rgb(e, "b"));
  }
  /* GETTERS */
  get r() {
    const e = this.data, i = e.r;
    return !this.type.is(rt.HSL) && i !== void 0 ? i : (this._ensureHSL(), $.channel.hsl2rgb(e, "r"));
  }
  get g() {
    const e = this.data, i = e.g;
    return !this.type.is(rt.HSL) && i !== void 0 ? i : (this._ensureHSL(), $.channel.hsl2rgb(e, "g"));
  }
  get b() {
    const e = this.data, i = e.b;
    return !this.type.is(rt.HSL) && i !== void 0 ? i : (this._ensureHSL(), $.channel.hsl2rgb(e, "b"));
  }
  get h() {
    const e = this.data, i = e.h;
    return !this.type.is(rt.RGB) && i !== void 0 ? i : (this._ensureRGB(), $.channel.rgb2hsl(e, "h"));
  }
  get s() {
    const e = this.data, i = e.s;
    return !this.type.is(rt.RGB) && i !== void 0 ? i : (this._ensureRGB(), $.channel.rgb2hsl(e, "s"));
  }
  get l() {
    const e = this.data, i = e.l;
    return !this.type.is(rt.RGB) && i !== void 0 ? i : (this._ensureRGB(), $.channel.rgb2hsl(e, "l"));
  }
  get a() {
    return this.data.a;
  }
  /* SETTERS */
  set r(e) {
    this.type.set(rt.RGB), this.changed = true, this.data.r = e;
  }
  set g(e) {
    this.type.set(rt.RGB), this.changed = true, this.data.g = e;
  }
  set b(e) {
    this.type.set(rt.RGB), this.changed = true, this.data.b = e;
  }
  set h(e) {
    this.type.set(rt.HSL), this.changed = true, this.data.h = e;
  }
  set s(e) {
    this.type.set(rt.HSL), this.changed = true, this.data.s = e;
  }
  set l(e) {
    this.type.set(rt.HSL), this.changed = true, this.data.l = e;
  }
  set a(e) {
    this.changed = true, this.data.a = e;
  }
};
var Pd = Rd;
var qd = new Pd({ r: 0, g: 0, b: 0, a: 0 }, "transparent");
var dr = qd;
var Sa = {
  /* VARIABLES */
  re: /^#((?:[a-f0-9]{2}){2,4}|[a-f0-9]{3})$/i,
  /* API */
  parse: (t9) => {
    if (t9.charCodeAt(0) !== 35)
      return;
    const e = t9.match(Sa.re);
    if (!e)
      return;
    const i = e[1], r = parseInt(i, 16), n = i.length, o = n % 4 === 0, s = n > 4, a = s ? 1 : 17, l = s ? 8 : 4, h = o ? 0 : -1, c = s ? 255 : 15;
    return dr.set({
      r: (r >> l * (h + 3) & c) * a,
      g: (r >> l * (h + 2) & c) * a,
      b: (r >> l * (h + 1) & c) * a,
      a: o ? (r & c) * a / 255 : 1
    }, t9);
  },
  stringify: (t9) => {
    const { r: e, g: i, b: r, a: n } = t9;
    return n < 1 ? `#${Jt[Math.round(e)]}${Jt[Math.round(i)]}${Jt[Math.round(r)]}${Jt[Math.round(n * 255)]}` : `#${Jt[Math.round(e)]}${Jt[Math.round(i)]}${Jt[Math.round(r)]}`;
  }
};
var Ue = Sa;
var Oi = {
  /* VARIABLES */
  re: /^hsla?\(\s*?(-?(?:\d+(?:\.\d+)?|(?:\.\d+))(?:e-?\d+)?(?:deg|grad|rad|turn)?)\s*?(?:,|\s)\s*?(-?(?:\d+(?:\.\d+)?|(?:\.\d+))(?:e-?\d+)?%)\s*?(?:,|\s)\s*?(-?(?:\d+(?:\.\d+)?|(?:\.\d+))(?:e-?\d+)?%)(?:\s*?(?:,|\/)\s*?\+?(-?(?:\d+(?:\.\d+)?|(?:\.\d+))(?:e-?\d+)?(%)?))?\s*?\)$/i,
  hueRe: /^(.+?)(deg|grad|rad|turn)$/i,
  /* HELPERS */
  _hue2deg: (t9) => {
    const e = t9.match(Oi.hueRe);
    if (e) {
      const [, i, r] = e;
      switch (r) {
        case "grad":
          return $.channel.clamp.h(parseFloat(i) * 0.9);
        case "rad":
          return $.channel.clamp.h(parseFloat(i) * 180 / Math.PI);
        case "turn":
          return $.channel.clamp.h(parseFloat(i) * 360);
      }
    }
    return $.channel.clamp.h(parseFloat(t9));
  },
  /* API */
  parse: (t9) => {
    const e = t9.charCodeAt(0);
    if (e !== 104 && e !== 72)
      return;
    const i = t9.match(Oi.re);
    if (!i)
      return;
    const [, r, n, o, s, a] = i;
    return dr.set({
      h: Oi._hue2deg(r),
      s: $.channel.clamp.s(parseFloat(n)),
      l: $.channel.clamp.l(parseFloat(o)),
      a: s ? $.channel.clamp.a(a ? parseFloat(s) / 100 : parseFloat(s)) : 1
    }, t9);
  },
  stringify: (t9) => {
    const { h: e, s: i, l: r, a: n } = t9;
    return n < 1 ? `hsla(${$.lang.round(e)}, ${$.lang.round(i)}%, ${$.lang.round(r)}%, ${n})` : `hsl(${$.lang.round(e)}, ${$.lang.round(i)}%, ${$.lang.round(r)}%)`;
  }
};
var vi = Oi;
var $i = {
  /* VARIABLES */
  colors: {
    aliceblue: "#f0f8ff",
    antiquewhite: "#faebd7",
    aqua: "#00ffff",
    aquamarine: "#7fffd4",
    azure: "#f0ffff",
    beige: "#f5f5dc",
    bisque: "#ffe4c4",
    black: "#000000",
    blanchedalmond: "#ffebcd",
    blue: "#0000ff",
    blueviolet: "#8a2be2",
    brown: "#a52a2a",
    burlywood: "#deb887",
    cadetblue: "#5f9ea0",
    chartreuse: "#7fff00",
    chocolate: "#d2691e",
    coral: "#ff7f50",
    cornflowerblue: "#6495ed",
    cornsilk: "#fff8dc",
    crimson: "#dc143c",
    cyanaqua: "#00ffff",
    darkblue: "#00008b",
    darkcyan: "#008b8b",
    darkgoldenrod: "#b8860b",
    darkgray: "#a9a9a9",
    darkgreen: "#006400",
    darkgrey: "#a9a9a9",
    darkkhaki: "#bdb76b",
    darkmagenta: "#8b008b",
    darkolivegreen: "#556b2f",
    darkorange: "#ff8c00",
    darkorchid: "#9932cc",
    darkred: "#8b0000",
    darksalmon: "#e9967a",
    darkseagreen: "#8fbc8f",
    darkslateblue: "#483d8b",
    darkslategray: "#2f4f4f",
    darkslategrey: "#2f4f4f",
    darkturquoise: "#00ced1",
    darkviolet: "#9400d3",
    deeppink: "#ff1493",
    deepskyblue: "#00bfff",
    dimgray: "#696969",
    dimgrey: "#696969",
    dodgerblue: "#1e90ff",
    firebrick: "#b22222",
    floralwhite: "#fffaf0",
    forestgreen: "#228b22",
    fuchsia: "#ff00ff",
    gainsboro: "#dcdcdc",
    ghostwhite: "#f8f8ff",
    gold: "#ffd700",
    goldenrod: "#daa520",
    gray: "#808080",
    green: "#008000",
    greenyellow: "#adff2f",
    grey: "#808080",
    honeydew: "#f0fff0",
    hotpink: "#ff69b4",
    indianred: "#cd5c5c",
    indigo: "#4b0082",
    ivory: "#fffff0",
    khaki: "#f0e68c",
    lavender: "#e6e6fa",
    lavenderblush: "#fff0f5",
    lawngreen: "#7cfc00",
    lemonchiffon: "#fffacd",
    lightblue: "#add8e6",
    lightcoral: "#f08080",
    lightcyan: "#e0ffff",
    lightgoldenrodyellow: "#fafad2",
    lightgray: "#d3d3d3",
    lightgreen: "#90ee90",
    lightgrey: "#d3d3d3",
    lightpink: "#ffb6c1",
    lightsalmon: "#ffa07a",
    lightseagreen: "#20b2aa",
    lightskyblue: "#87cefa",
    lightslategray: "#778899",
    lightslategrey: "#778899",
    lightsteelblue: "#b0c4de",
    lightyellow: "#ffffe0",
    lime: "#00ff00",
    limegreen: "#32cd32",
    linen: "#faf0e6",
    magenta: "#ff00ff",
    maroon: "#800000",
    mediumaquamarine: "#66cdaa",
    mediumblue: "#0000cd",
    mediumorchid: "#ba55d3",
    mediumpurple: "#9370db",
    mediumseagreen: "#3cb371",
    mediumslateblue: "#7b68ee",
    mediumspringgreen: "#00fa9a",
    mediumturquoise: "#48d1cc",
    mediumvioletred: "#c71585",
    midnightblue: "#191970",
    mintcream: "#f5fffa",
    mistyrose: "#ffe4e1",
    moccasin: "#ffe4b5",
    navajowhite: "#ffdead",
    navy: "#000080",
    oldlace: "#fdf5e6",
    olive: "#808000",
    olivedrab: "#6b8e23",
    orange: "#ffa500",
    orangered: "#ff4500",
    orchid: "#da70d6",
    palegoldenrod: "#eee8aa",
    palegreen: "#98fb98",
    paleturquoise: "#afeeee",
    palevioletred: "#db7093",
    papayawhip: "#ffefd5",
    peachpuff: "#ffdab9",
    peru: "#cd853f",
    pink: "#ffc0cb",
    plum: "#dda0dd",
    powderblue: "#b0e0e6",
    purple: "#800080",
    rebeccapurple: "#663399",
    red: "#ff0000",
    rosybrown: "#bc8f8f",
    royalblue: "#4169e1",
    saddlebrown: "#8b4513",
    salmon: "#fa8072",
    sandybrown: "#f4a460",
    seagreen: "#2e8b57",
    seashell: "#fff5ee",
    sienna: "#a0522d",
    silver: "#c0c0c0",
    skyblue: "#87ceeb",
    slateblue: "#6a5acd",
    slategray: "#708090",
    slategrey: "#708090",
    snow: "#fffafa",
    springgreen: "#00ff7f",
    tan: "#d2b48c",
    teal: "#008080",
    thistle: "#d8bfd8",
    transparent: "#00000000",
    turquoise: "#40e0d0",
    violet: "#ee82ee",
    wheat: "#f5deb3",
    white: "#ffffff",
    whitesmoke: "#f5f5f5",
    yellow: "#ffff00",
    yellowgreen: "#9acd32"
  },
  /* API */
  parse: (t9) => {
    t9 = t9.toLowerCase();
    const e = $i.colors[t9];
    if (e)
      return Ue.parse(e);
  },
  stringify: (t9) => {
    const e = Ue.stringify(t9);
    for (const i in $i.colors)
      if ($i.colors[i] === e)
        return i;
  }
};
var Vo = $i;
var va = {
  /* VARIABLES */
  re: /^rgba?\(\s*?(-?(?:\d+(?:\.\d+)?|(?:\.\d+))(?:e\d+)?(%?))\s*?(?:,|\s)\s*?(-?(?:\d+(?:\.\d+)?|(?:\.\d+))(?:e\d+)?(%?))\s*?(?:,|\s)\s*?(-?(?:\d+(?:\.\d+)?|(?:\.\d+))(?:e\d+)?(%?))(?:\s*?(?:,|\/)\s*?\+?(-?(?:\d+(?:\.\d+)?|(?:\.\d+))(?:e\d+)?(%?)))?\s*?\)$/i,
  /* API */
  parse: (t9) => {
    const e = t9.charCodeAt(0);
    if (e !== 114 && e !== 82)
      return;
    const i = t9.match(va.re);
    if (!i)
      return;
    const [, r, n, o, s, a, l, h, c] = i;
    return dr.set({
      r: $.channel.clamp.r(n ? parseFloat(r) * 2.55 : parseFloat(r)),
      g: $.channel.clamp.g(s ? parseFloat(o) * 2.55 : parseFloat(o)),
      b: $.channel.clamp.b(l ? parseFloat(a) * 2.55 : parseFloat(a)),
      a: h ? $.channel.clamp.a(c ? parseFloat(h) / 100 : parseFloat(h)) : 1
    }, t9);
  },
  stringify: (t9) => {
    const { r: e, g: i, b: r, a: n } = t9;
    return n < 1 ? `rgba(${$.lang.round(e)}, ${$.lang.round(i)}, ${$.lang.round(r)}, ${$.lang.round(n)})` : `rgb(${$.lang.round(e)}, ${$.lang.round(i)}, ${$.lang.round(r)})`;
  }
};
var ki = va;
var zd = {
  /* VARIABLES */
  format: {
    keyword: Vo,
    hex: Ue,
    rgb: ki,
    rgba: ki,
    hsl: vi,
    hsla: vi
  },
  /* API */
  parse: (t9) => {
    if (typeof t9 != "string")
      return t9;
    const e = Ue.parse(t9) || ki.parse(t9) || vi.parse(t9) || Vo.parse(t9);
    if (e)
      return e;
    throw new Error(`Unsupported color format: "${t9}"`);
  },
  stringify: (t9) => !t9.changed && t9.color ? t9.color : t9.type.is(rt.HSL) || t9.data.r === void 0 ? vi.stringify(t9) : t9.a < 1 || !Number.isInteger(t9.r) || !Number.isInteger(t9.g) || !Number.isInteger(t9.b) ? ki.stringify(t9) : Ue.stringify(t9)
};
var $t = zd;
var Wd = (t9, e) => {
  const i = $t.parse(t9);
  for (const r in e)
    i[r] = $.channel.clamp[r](e[r]);
  return $t.stringify(i);
};
var ka = Wd;
var Hd = (t9, e, i = 0, r = 1) => {
  if (typeof t9 != "number")
    return ka(t9, { a: e });
  const n = dr.set({
    r: $.channel.clamp.r(t9),
    g: $.channel.clamp.g(e),
    b: $.channel.clamp.b(i),
    a: $.channel.clamp.a(r)
  });
  return $t.stringify(n);
};
var Ye = Hd;
var jd = (t9) => {
  const { r: e, g: i, b: r } = $t.parse(t9), n = 0.2126 * $.channel.toLinear(e) + 0.7152 * $.channel.toLinear(i) + 0.0722 * $.channel.toLinear(r);
  return $.lang.round(n);
};
var Ud = jd;
var Yd = (t9) => Ud(t9) >= 0.5;
var Gd = Yd;
var Vd = (t9) => !Gd(t9);
var ci = Vd;
var Xd = (t9, e, i) => {
  const r = $t.parse(t9), n = r[e], o = $.channel.clamp[e](n + i);
  return n !== o && (r[e] = o), $t.stringify(r);
};
var wa = Xd;
var Kd = (t9, e) => wa(t9, "l", e);
var B = Kd;
var Zd = (t9, e) => wa(t9, "l", -e);
var A = Zd;
var Jd = (t9, e) => {
  const i = $t.parse(t9), r = {};
  for (const n in e)
    e[n] && (r[n] = i[n] + e[n]);
  return ka(t9, r);
};
var d = Jd;
var Qd = (t9, e, i = 50) => {
  const { r, g: n, b: o, a: s } = $t.parse(t9), { r: a, g: l, b: h, a: c } = $t.parse(e), f = i / 100, g = f * 2 - 1, p = s - c, k = ((g * p === -1 ? g : (g + p) / (1 + g * p)) + 1) / 2, M = 1 - k, q = r * k + a * M, v = n * k + l * M, z = o * k + h * M, Q = s * f + c * (1 - f);
  return Ye(q, v, z, Q);
};
var tp = Qd;
var ep = (t9, e = 100) => {
  const i = $t.parse(t9);
  return i.r = 255 - i.r, i.g = 255 - i.g, i.b = 255 - i.b, tp(i, t9, e);
};
var y = ep;
var lt = (t9, e) => e ? d(t9, { s: -40, l: 10 }) : d(t9, { s: -40, l: -10 });
var pr = "#ffffff";
var gr = "#f2f2f2";
var ip = class {
  constructor() {
    this.background = "#f4f4f4", this.primaryColor = "#fff4dd", this.noteBkgColor = "#fff5ad", this.noteTextColor = "#333", this.THEME_COLOR_LIMIT = 12, this.fontFamily = '"trebuchet ms", verdana, arial, sans-serif', this.fontSize = "16px";
  }
  updateColors() {
    if (this.primaryTextColor = this.primaryTextColor || (this.darkMode ? "#eee" : "#333"), this.secondaryColor = this.secondaryColor || d(this.primaryColor, { h: -120 }), this.tertiaryColor = this.tertiaryColor || d(this.primaryColor, { h: 180, l: 5 }), this.primaryBorderColor = this.primaryBorderColor || lt(this.primaryColor, this.darkMode), this.secondaryBorderColor = this.secondaryBorderColor || lt(this.secondaryColor, this.darkMode), this.tertiaryBorderColor = this.tertiaryBorderColor || lt(this.tertiaryColor, this.darkMode), this.noteBorderColor = this.noteBorderColor || lt(this.noteBkgColor, this.darkMode), this.noteBkgColor = this.noteBkgColor || "#fff5ad", this.noteTextColor = this.noteTextColor || "#333", this.secondaryTextColor = this.secondaryTextColor || y(this.secondaryColor), this.tertiaryTextColor = this.tertiaryTextColor || y(this.tertiaryColor), this.lineColor = this.lineColor || y(this.background), this.arrowheadColor = this.arrowheadColor || y(this.background), this.textColor = this.textColor || this.primaryTextColor, this.border2 = this.border2 || this.tertiaryBorderColor, this.nodeBkg = this.nodeBkg || this.primaryColor, this.mainBkg = this.mainBkg || this.primaryColor, this.nodeBorder = this.nodeBorder || this.primaryBorderColor, this.clusterBkg = this.clusterBkg || this.tertiaryColor, this.clusterBorder = this.clusterBorder || this.tertiaryBorderColor, this.defaultLinkColor = this.defaultLinkColor || this.lineColor, this.titleColor = this.titleColor || this.tertiaryTextColor, this.edgeLabelBackground = this.edgeLabelBackground || (this.darkMode ? A(this.secondaryColor, 30) : this.secondaryColor), this.nodeTextColor = this.nodeTextColor || this.primaryTextColor, this.actorBorder = this.actorBorder || this.primaryBorderColor, this.actorBkg = this.actorBkg || this.mainBkg, this.actorTextColor = this.actorTextColor || this.primaryTextColor, this.actorLineColor = this.actorLineColor || "grey", this.labelBoxBkgColor = this.labelBoxBkgColor || this.actorBkg, this.signalColor = this.signalColor || this.textColor, this.signalTextColor = this.signalTextColor || this.textColor, this.labelBoxBorderColor = this.labelBoxBorderColor || this.actorBorder, this.labelTextColor = this.labelTextColor || this.actorTextColor, this.loopTextColor = this.loopTextColor || this.actorTextColor, this.activationBorderColor = this.activationBorderColor || A(this.secondaryColor, 10), this.activationBkgColor = this.activationBkgColor || this.secondaryColor, this.sequenceNumberColor = this.sequenceNumberColor || y(this.lineColor), this.sectionBkgColor = this.sectionBkgColor || this.tertiaryColor, this.altSectionBkgColor = this.altSectionBkgColor || "white", this.sectionBkgColor = this.sectionBkgColor || this.secondaryColor, this.sectionBkgColor2 = this.sectionBkgColor2 || this.primaryColor, this.excludeBkgColor = this.excludeBkgColor || "#eeeeee", this.taskBorderColor = this.taskBorderColor || this.primaryBorderColor, this.taskBkgColor = this.taskBkgColor || this.primaryColor, this.activeTaskBorderColor = this.activeTaskBorderColor || this.primaryColor, this.activeTaskBkgColor = this.activeTaskBkgColor || B(this.primaryColor, 23), this.gridColor = this.gridColor || "lightgrey", this.doneTaskBkgColor = this.doneTaskBkgColor || "lightgrey", this.doneTaskBorderColor = this.doneTaskBorderColor || "grey", this.critBorderColor = this.critBorderColor || "#ff8888", this.critBkgColor = this.critBkgColor || "red", this.todayLineColor = this.todayLineColor || "red", this.taskTextColor = this.taskTextColor || this.textColor, this.taskTextOutsideColor = this.taskTextOutsideColor || this.textColor, this.taskTextLightColor = this.taskTextLightColor || this.textColor, this.taskTextColor = this.taskTextColor || this.primaryTextColor, this.taskTextDarkColor = this.taskTextDarkColor || this.textColor, this.taskTextClickableColor = this.taskTextClickableColor || "#003163", this.personBorder = this.personBorder || this.primaryBorderColor, this.personBkg = this.personBkg || this.mainBkg, this.transitionColor = this.transitionColor || this.lineColor, this.transitionLabelColor = this.transitionLabelColor || this.textColor, this.stateLabelColor = this.stateLabelColor || this.stateBkg || this.primaryTextColor, this.stateBkg = this.stateBkg || this.mainBkg, this.labelBackgroundColor = this.labelBackgroundColor || this.stateBkg, this.compositeBackground = this.compositeBackground || this.background || this.tertiaryColor, this.altBackground = this.altBackground || this.tertiaryColor, this.compositeTitleBackground = this.compositeTitleBackground || this.mainBkg, this.compositeBorder = this.compositeBorder || this.nodeBorder, this.innerEndBackground = this.nodeBorder, this.errorBkgColor = this.errorBkgColor || this.tertiaryColor, this.errorTextColor = this.errorTextColor || this.tertiaryTextColor, this.transitionColor = this.transitionColor || this.lineColor, this.specialStateColor = this.lineColor, this.cScale0 = this.cScale0 || this.primaryColor, this.cScale1 = this.cScale1 || this.secondaryColor, this.cScale2 = this.cScale2 || this.tertiaryColor, this.cScale3 = this.cScale3 || d(this.primaryColor, { h: 30 }), this.cScale4 = this.cScale4 || d(this.primaryColor, { h: 60 }), this.cScale5 = this.cScale5 || d(this.primaryColor, { h: 90 }), this.cScale6 = this.cScale6 || d(this.primaryColor, { h: 120 }), this.cScale7 = this.cScale7 || d(this.primaryColor, { h: 150 }), this.cScale8 = this.cScale8 || d(this.primaryColor, { h: 210, l: 150 }), this.cScale9 = this.cScale9 || d(this.primaryColor, { h: 270 }), this.cScale10 = this.cScale10 || d(this.primaryColor, { h: 300 }), this.cScale11 = this.cScale11 || d(this.primaryColor, { h: 330 }), this.darkMode)
      for (let i = 0; i < this.THEME_COLOR_LIMIT; i++)
        this["cScale" + i] = A(this["cScale" + i], 75);
    else
      for (let i = 0; i < this.THEME_COLOR_LIMIT; i++)
        this["cScale" + i] = A(this["cScale" + i], 25);
    for (let i = 0; i < this.THEME_COLOR_LIMIT; i++)
      this["cScaleInv" + i] = this["cScaleInv" + i] || y(this["cScale" + i]);
    for (let i = 0; i < this.THEME_COLOR_LIMIT; i++)
      this.darkMode ? this["cScalePeer" + i] = this["cScalePeer" + i] || B(this["cScale" + i], 10) : this["cScalePeer" + i] = this["cScalePeer" + i] || A(this["cScale" + i], 10);
    this.scaleLabelColor = this.scaleLabelColor || this.labelTextColor;
    for (let i = 0; i < this.THEME_COLOR_LIMIT; i++)
      this["cScaleLabel" + i] = this["cScaleLabel" + i] || this.scaleLabelColor;
    const e = this.darkMode ? -4 : -1;
    for (let i = 0; i < 5; i++)
      this["surface" + i] = this["surface" + i] || d(this.mainBkg, { h: 180, s: -15, l: e * (5 + i * 3) }), this["surfacePeer" + i] = this["surfacePeer" + i] || d(this.mainBkg, { h: 180, s: -15, l: e * (8 + i * 3) });
    this.classText = this.classText || this.textColor, this.fillType0 = this.fillType0 || this.primaryColor, this.fillType1 = this.fillType1 || this.secondaryColor, this.fillType2 = this.fillType2 || d(this.primaryColor, { h: 64 }), this.fillType3 = this.fillType3 || d(this.secondaryColor, { h: 64 }), this.fillType4 = this.fillType4 || d(this.primaryColor, { h: -64 }), this.fillType5 = this.fillType5 || d(this.secondaryColor, { h: -64 }), this.fillType6 = this.fillType6 || d(this.primaryColor, { h: 128 }), this.fillType7 = this.fillType7 || d(this.secondaryColor, { h: 128 }), this.pie1 = this.pie1 || this.primaryColor, this.pie2 = this.pie2 || this.secondaryColor, this.pie3 = this.pie3 || this.tertiaryColor, this.pie4 = this.pie4 || d(this.primaryColor, { l: -10 }), this.pie5 = this.pie5 || d(this.secondaryColor, { l: -10 }), this.pie6 = this.pie6 || d(this.tertiaryColor, { l: -10 }), this.pie7 = this.pie7 || d(this.primaryColor, { h: 60, l: -10 }), this.pie8 = this.pie8 || d(this.primaryColor, { h: -60, l: -10 }), this.pie9 = this.pie9 || d(this.primaryColor, { h: 120, l: 0 }), this.pie10 = this.pie10 || d(this.primaryColor, { h: 60, l: -20 }), this.pie11 = this.pie11 || d(this.primaryColor, { h: -60, l: -20 }), this.pie12 = this.pie12 || d(this.primaryColor, { h: 120, l: -10 }), this.pieTitleTextSize = this.pieTitleTextSize || "25px", this.pieTitleTextColor = this.pieTitleTextColor || this.taskTextDarkColor, this.pieSectionTextSize = this.pieSectionTextSize || "17px", this.pieSectionTextColor = this.pieSectionTextColor || this.textColor, this.pieLegendTextSize = this.pieLegendTextSize || "17px", this.pieLegendTextColor = this.pieLegendTextColor || this.taskTextDarkColor, this.pieStrokeColor = this.pieStrokeColor || "black", this.pieStrokeWidth = this.pieStrokeWidth || "2px", this.pieOuterStrokeWidth = this.pieOuterStrokeWidth || "2px", this.pieOuterStrokeColor = this.pieOuterStrokeColor || "black", this.pieOpacity = this.pieOpacity || "0.7", this.quadrant1Fill = this.quadrant1Fill || this.primaryColor, this.quadrant2Fill = this.quadrant2Fill || d(this.primaryColor, { r: 5, g: 5, b: 5 }), this.quadrant3Fill = this.quadrant3Fill || d(this.primaryColor, { r: 10, g: 10, b: 10 }), this.quadrant4Fill = this.quadrant4Fill || d(this.primaryColor, { r: 15, g: 15, b: 15 }), this.quadrant1TextFill = this.quadrant1TextFill || this.primaryTextColor, this.quadrant2TextFill = this.quadrant2TextFill || d(this.primaryTextColor, { r: -5, g: -5, b: -5 }), this.quadrant3TextFill = this.quadrant3TextFill || d(this.primaryTextColor, { r: -10, g: -10, b: -10 }), this.quadrant4TextFill = this.quadrant4TextFill || d(this.primaryTextColor, { r: -15, g: -15, b: -15 }), this.quadrantPointFill = this.quadrantPointFill || ci(this.quadrant1Fill) ? B(this.quadrant1Fill) : A(this.quadrant1Fill), this.quadrantPointTextFill = this.quadrantPointTextFill || this.primaryTextColor, this.quadrantXAxisTextFill = this.quadrantXAxisTextFill || this.primaryTextColor, this.quadrantYAxisTextFill = this.quadrantYAxisTextFill || this.primaryTextColor, this.quadrantInternalBorderStrokeFill = this.quadrantInternalBorderStrokeFill || this.primaryBorderColor, this.quadrantExternalBorderStrokeFill = this.quadrantExternalBorderStrokeFill || this.primaryBorderColor, this.quadrantTitleFill = this.quadrantTitleFill || this.primaryTextColor, this.requirementBackground = this.requirementBackground || this.primaryColor, this.requirementBorderColor = this.requirementBorderColor || this.primaryBorderColor, this.requirementBorderSize = this.requirementBorderSize || "1", this.requirementTextColor = this.requirementTextColor || this.primaryTextColor, this.relationColor = this.relationColor || this.lineColor, this.relationLabelBackground = this.relationLabelBackground || (this.darkMode ? A(this.secondaryColor, 30) : this.secondaryColor), this.relationLabelColor = this.relationLabelColor || this.actorTextColor, this.git0 = this.git0 || this.primaryColor, this.git1 = this.git1 || this.secondaryColor, this.git2 = this.git2 || this.tertiaryColor, this.git3 = this.git3 || d(this.primaryColor, { h: -30 }), this.git4 = this.git4 || d(this.primaryColor, { h: -60 }), this.git5 = this.git5 || d(this.primaryColor, { h: -90 }), this.git6 = this.git6 || d(this.primaryColor, { h: 60 }), this.git7 = this.git7 || d(this.primaryColor, { h: 120 }), this.darkMode ? (this.git0 = B(this.git0, 25), this.git1 = B(this.git1, 25), this.git2 = B(this.git2, 25), this.git3 = B(this.git3, 25), this.git4 = B(this.git4, 25), this.git5 = B(this.git5, 25), this.git6 = B(this.git6, 25), this.git7 = B(this.git7, 25)) : (this.git0 = A(this.git0, 25), this.git1 = A(this.git1, 25), this.git2 = A(this.git2, 25), this.git3 = A(this.git3, 25), this.git4 = A(this.git4, 25), this.git5 = A(this.git5, 25), this.git6 = A(this.git6, 25), this.git7 = A(this.git7, 25)), this.gitInv0 = this.gitInv0 || y(this.git0), this.gitInv1 = this.gitInv1 || y(this.git1), this.gitInv2 = this.gitInv2 || y(this.git2), this.gitInv3 = this.gitInv3 || y(this.git3), this.gitInv4 = this.gitInv4 || y(this.git4), this.gitInv5 = this.gitInv5 || y(this.git5), this.gitInv6 = this.gitInv6 || y(this.git6), this.gitInv7 = this.gitInv7 || y(this.git7), this.branchLabelColor = this.branchLabelColor || (this.darkMode ? "black" : this.labelTextColor), this.gitBranchLabel0 = this.gitBranchLabel0 || this.branchLabelColor, this.gitBranchLabel1 = this.gitBranchLabel1 || this.branchLabelColor, this.gitBranchLabel2 = this.gitBranchLabel2 || this.branchLabelColor, this.gitBranchLabel3 = this.gitBranchLabel3 || this.branchLabelColor, this.gitBranchLabel4 = this.gitBranchLabel4 || this.branchLabelColor, this.gitBranchLabel5 = this.gitBranchLabel5 || this.branchLabelColor, this.gitBranchLabel6 = this.gitBranchLabel6 || this.branchLabelColor, this.gitBranchLabel7 = this.gitBranchLabel7 || this.branchLabelColor, this.tagLabelColor = this.tagLabelColor || this.primaryTextColor, this.tagLabelBackground = this.tagLabelBackground || this.primaryColor, this.tagLabelBorder = this.tagBorder || this.primaryBorderColor, this.tagLabelFontSize = this.tagLabelFontSize || "10px", this.commitLabelColor = this.commitLabelColor || this.secondaryTextColor, this.commitLabelBackground = this.commitLabelBackground || this.secondaryColor, this.commitLabelFontSize = this.commitLabelFontSize || "10px", this.attributeBackgroundColorOdd = this.attributeBackgroundColorOdd || pr, this.attributeBackgroundColorEven = this.attributeBackgroundColorEven || gr;
  }
  calculate(e) {
    if (typeof e != "object") {
      this.updateColors();
      return;
    }
    const i = Object.keys(e);
    i.forEach((r) => {
      this[r] = e[r];
    }), this.updateColors(), i.forEach((r) => {
      this[r] = e[r];
    });
  }
};
var rp = (t9) => {
  const e = new ip();
  return e.calculate(t9), e;
};
var np = class {
  constructor() {
    this.background = "#333", this.primaryColor = "#1f2020", this.secondaryColor = B(this.primaryColor, 16), this.tertiaryColor = d(this.primaryColor, { h: -160 }), this.primaryBorderColor = y(this.background), this.secondaryBorderColor = lt(this.secondaryColor, this.darkMode), this.tertiaryBorderColor = lt(this.tertiaryColor, this.darkMode), this.primaryTextColor = y(this.primaryColor), this.secondaryTextColor = y(this.secondaryColor), this.tertiaryTextColor = y(this.tertiaryColor), this.lineColor = y(this.background), this.textColor = y(this.background), this.mainBkg = "#1f2020", this.secondBkg = "calculated", this.mainContrastColor = "lightgrey", this.darkTextColor = B(y("#323D47"), 10), this.lineColor = "calculated", this.border1 = "#81B1DB", this.border2 = Ye(255, 255, 255, 0.25), this.arrowheadColor = "calculated", this.fontFamily = '"trebuchet ms", verdana, arial, sans-serif', this.fontSize = "16px", this.labelBackground = "#181818", this.textColor = "#ccc", this.THEME_COLOR_LIMIT = 12, this.nodeBkg = "calculated", this.nodeBorder = "calculated", this.clusterBkg = "calculated", this.clusterBorder = "calculated", this.defaultLinkColor = "calculated", this.titleColor = "#F9FFFE", this.edgeLabelBackground = "calculated", this.actorBorder = "calculated", this.actorBkg = "calculated", this.actorTextColor = "calculated", this.actorLineColor = "calculated", this.signalColor = "calculated", this.signalTextColor = "calculated", this.labelBoxBkgColor = "calculated", this.labelBoxBorderColor = "calculated", this.labelTextColor = "calculated", this.loopTextColor = "calculated", this.noteBorderColor = "calculated", this.noteBkgColor = "#fff5ad", this.noteTextColor = "calculated", this.activationBorderColor = "calculated", this.activationBkgColor = "calculated", this.sequenceNumberColor = "black", this.sectionBkgColor = A("#EAE8D9", 30), this.altSectionBkgColor = "calculated", this.sectionBkgColor2 = "#EAE8D9", this.excludeBkgColor = A(this.sectionBkgColor, 10), this.taskBorderColor = Ye(255, 255, 255, 70), this.taskBkgColor = "calculated", this.taskTextColor = "calculated", this.taskTextLightColor = "calculated", this.taskTextOutsideColor = "calculated", this.taskTextClickableColor = "#003163", this.activeTaskBorderColor = Ye(255, 255, 255, 50), this.activeTaskBkgColor = "#81B1DB", this.gridColor = "calculated", this.doneTaskBkgColor = "calculated", this.doneTaskBorderColor = "grey", this.critBorderColor = "#E83737", this.critBkgColor = "#E83737", this.taskTextDarkColor = "calculated", this.todayLineColor = "#DB5757", this.personBorder = this.primaryBorderColor, this.personBkg = this.mainBkg, this.labelColor = "calculated", this.errorBkgColor = "#a44141", this.errorTextColor = "#ddd";
  }
  updateColors() {
    this.secondBkg = B(this.mainBkg, 16), this.lineColor = this.mainContrastColor, this.arrowheadColor = this.mainContrastColor, this.nodeBkg = this.mainBkg, this.nodeBorder = this.border1, this.clusterBkg = this.secondBkg, this.clusterBorder = this.border2, this.defaultLinkColor = this.lineColor, this.edgeLabelBackground = B(this.labelBackground, 25), this.actorBorder = this.border1, this.actorBkg = this.mainBkg, this.actorTextColor = this.mainContrastColor, this.actorLineColor = this.mainContrastColor, this.signalColor = this.mainContrastColor, this.signalTextColor = this.mainContrastColor, this.labelBoxBkgColor = this.actorBkg, this.labelBoxBorderColor = this.actorBorder, this.labelTextColor = this.mainContrastColor, this.loopTextColor = this.mainContrastColor, this.noteBorderColor = this.secondaryBorderColor, this.noteBkgColor = this.secondBkg, this.noteTextColor = this.secondaryTextColor, this.activationBorderColor = this.border1, this.activationBkgColor = this.secondBkg, this.altSectionBkgColor = this.background, this.taskBkgColor = B(this.mainBkg, 23), this.taskTextColor = this.darkTextColor, this.taskTextLightColor = this.mainContrastColor, this.taskTextOutsideColor = this.taskTextLightColor, this.gridColor = this.mainContrastColor, this.doneTaskBkgColor = this.mainContrastColor, this.taskTextDarkColor = this.darkTextColor, this.transitionColor = this.transitionColor || this.lineColor, this.transitionLabelColor = this.transitionLabelColor || this.textColor, this.stateLabelColor = this.stateLabelColor || this.stateBkg || this.primaryTextColor, this.stateBkg = this.stateBkg || this.mainBkg, this.labelBackgroundColor = this.labelBackgroundColor || this.stateBkg, this.compositeBackground = this.compositeBackground || this.background || this.tertiaryColor, this.altBackground = this.altBackground || "#555", this.compositeTitleBackground = this.compositeTitleBackground || this.mainBkg, this.compositeBorder = this.compositeBorder || this.nodeBorder, this.innerEndBackground = this.primaryBorderColor, this.specialStateColor = "#f4f4f4", this.errorBkgColor = this.errorBkgColor || this.tertiaryColor, this.errorTextColor = this.errorTextColor || this.tertiaryTextColor, this.fillType0 = this.primaryColor, this.fillType1 = this.secondaryColor, this.fillType2 = d(this.primaryColor, { h: 64 }), this.fillType3 = d(this.secondaryColor, { h: 64 }), this.fillType4 = d(this.primaryColor, { h: -64 }), this.fillType5 = d(this.secondaryColor, { h: -64 }), this.fillType6 = d(this.primaryColor, { h: 128 }), this.fillType7 = d(this.secondaryColor, { h: 128 }), this.cScale1 = this.cScale1 || "#0b0000", this.cScale2 = this.cScale2 || "#4d1037", this.cScale3 = this.cScale3 || "#3f5258", this.cScale4 = this.cScale4 || "#4f2f1b", this.cScale5 = this.cScale5 || "#6e0a0a", this.cScale6 = this.cScale6 || "#3b0048", this.cScale7 = this.cScale7 || "#995a01", this.cScale8 = this.cScale8 || "#154706", this.cScale9 = this.cScale9 || "#161722", this.cScale10 = this.cScale10 || "#00296f", this.cScale11 = this.cScale11 || "#01629c", this.cScale12 = this.cScale12 || "#010029", this.cScale0 = this.cScale0 || this.primaryColor, this.cScale1 = this.cScale1 || this.secondaryColor, this.cScale2 = this.cScale2 || this.tertiaryColor, this.cScale3 = this.cScale3 || d(this.primaryColor, { h: 30 }), this.cScale4 = this.cScale4 || d(this.primaryColor, { h: 60 }), this.cScale5 = this.cScale5 || d(this.primaryColor, { h: 90 }), this.cScale6 = this.cScale6 || d(this.primaryColor, { h: 120 }), this.cScale7 = this.cScale7 || d(this.primaryColor, { h: 150 }), this.cScale8 = this.cScale8 || d(this.primaryColor, { h: 210 }), this.cScale9 = this.cScale9 || d(this.primaryColor, { h: 270 }), this.cScale10 = this.cScale10 || d(this.primaryColor, { h: 300 }), this.cScale11 = this.cScale11 || d(this.primaryColor, { h: 330 });
    for (let e = 0; e < this.THEME_COLOR_LIMIT; e++)
      this["cScaleInv" + e] = this["cScaleInv" + e] || y(this["cScale" + e]);
    for (let e = 0; e < this.THEME_COLOR_LIMIT; e++)
      this["cScalePeer" + e] = this["cScalePeer" + e] || B(this["cScale" + e], 10);
    for (let e = 0; e < 5; e++)
      this["surface" + e] = this["surface" + e] || d(this.mainBkg, { h: 30, s: -30, l: -(-10 + e * 4) }), this["surfacePeer" + e] = this["surfacePeer" + e] || d(this.mainBkg, { h: 30, s: -30, l: -(-7 + e * 4) });
    this.scaleLabelColor = this.scaleLabelColor || (this.darkMode ? "black" : this.labelTextColor);
    for (let e = 0; e < this.THEME_COLOR_LIMIT; e++)
      this["cScaleLabel" + e] = this["cScaleLabel" + e] || this.scaleLabelColor;
    for (let e = 0; e < this.THEME_COLOR_LIMIT; e++)
      this["pie" + e] = this["cScale" + e];
    this.pieTitleTextSize = this.pieTitleTextSize || "25px", this.pieTitleTextColor = this.pieTitleTextColor || this.taskTextDarkColor, this.pieSectionTextSize = this.pieSectionTextSize || "17px", this.pieSectionTextColor = this.pieSectionTextColor || this.textColor, this.pieLegendTextSize = this.pieLegendTextSize || "17px", this.pieLegendTextColor = this.pieLegendTextColor || this.taskTextDarkColor, this.pieStrokeColor = this.pieStrokeColor || "black", this.pieStrokeWidth = this.pieStrokeWidth || "2px", this.pieOuterStrokeWidth = this.pieOuterStrokeWidth || "2px", this.pieOuterStrokeColor = this.pieOuterStrokeColor || "black", this.pieOpacity = this.pieOpacity || "0.7", this.quadrant1Fill = this.quadrant1Fill || this.primaryColor, this.quadrant2Fill = this.quadrant2Fill || d(this.primaryColor, { r: 5, g: 5, b: 5 }), this.quadrant3Fill = this.quadrant3Fill || d(this.primaryColor, { r: 10, g: 10, b: 10 }), this.quadrant4Fill = this.quadrant4Fill || d(this.primaryColor, { r: 15, g: 15, b: 15 }), this.quadrant1TextFill = this.quadrant1TextFill || this.primaryTextColor, this.quadrant2TextFill = this.quadrant2TextFill || d(this.primaryTextColor, { r: -5, g: -5, b: -5 }), this.quadrant3TextFill = this.quadrant3TextFill || d(this.primaryTextColor, { r: -10, g: -10, b: -10 }), this.quadrant4TextFill = this.quadrant4TextFill || d(this.primaryTextColor, { r: -15, g: -15, b: -15 }), this.quadrantPointFill = this.quadrantPointFill || ci(this.quadrant1Fill) ? B(this.quadrant1Fill) : A(this.quadrant1Fill), this.quadrantPointTextFill = this.quadrantPointTextFill || this.primaryTextColor, this.quadrantXAxisTextFill = this.quadrantXAxisTextFill || this.primaryTextColor, this.quadrantYAxisTextFill = this.quadrantYAxisTextFill || this.primaryTextColor, this.quadrantInternalBorderStrokeFill = this.quadrantInternalBorderStrokeFill || this.primaryBorderColor, this.quadrantExternalBorderStrokeFill = this.quadrantExternalBorderStrokeFill || this.primaryBorderColor, this.quadrantTitleFill = this.quadrantTitleFill || this.primaryTextColor, this.classText = this.primaryTextColor, this.requirementBackground = this.requirementBackground || this.primaryColor, this.requirementBorderColor = this.requirementBorderColor || this.primaryBorderColor, this.requirementBorderSize = this.requirementBorderSize || "1", this.requirementTextColor = this.requirementTextColor || this.primaryTextColor, this.relationColor = this.relationColor || this.lineColor, this.relationLabelBackground = this.relationLabelBackground || (this.darkMode ? A(this.secondaryColor, 30) : this.secondaryColor), this.relationLabelColor = this.relationLabelColor || this.actorTextColor, this.git0 = B(this.secondaryColor, 20), this.git1 = B(this.pie2 || this.secondaryColor, 20), this.git2 = B(this.pie3 || this.tertiaryColor, 20), this.git3 = B(this.pie4 || d(this.primaryColor, { h: -30 }), 20), this.git4 = B(this.pie5 || d(this.primaryColor, { h: -60 }), 20), this.git5 = B(this.pie6 || d(this.primaryColor, { h: -90 }), 10), this.git6 = B(this.pie7 || d(this.primaryColor, { h: 60 }), 10), this.git7 = B(this.pie8 || d(this.primaryColor, { h: 120 }), 20), this.gitInv0 = this.gitInv0 || y(this.git0), this.gitInv1 = this.gitInv1 || y(this.git1), this.gitInv2 = this.gitInv2 || y(this.git2), this.gitInv3 = this.gitInv3 || y(this.git3), this.gitInv4 = this.gitInv4 || y(this.git4), this.gitInv5 = this.gitInv5 || y(this.git5), this.gitInv6 = this.gitInv6 || y(this.git6), this.gitInv7 = this.gitInv7 || y(this.git7), this.gitBranchLabel0 = this.gitBranchLabel0 || y(this.labelTextColor), this.gitBranchLabel1 = this.gitBranchLabel1 || this.labelTextColor, this.gitBranchLabel2 = this.gitBranchLabel2 || this.labelTextColor, this.gitBranchLabel3 = this.gitBranchLabel3 || y(this.labelTextColor), this.gitBranchLabel4 = this.gitBranchLabel4 || this.labelTextColor, this.gitBranchLabel5 = this.gitBranchLabel5 || this.labelTextColor, this.gitBranchLabel6 = this.gitBranchLabel6 || this.labelTextColor, this.gitBranchLabel7 = this.gitBranchLabel7 || this.labelTextColor, this.tagLabelColor = this.tagLabelColor || this.primaryTextColor, this.tagLabelBackground = this.tagLabelBackground || this.primaryColor, this.tagLabelBorder = this.tagBorder || this.primaryBorderColor, this.tagLabelFontSize = this.tagLabelFontSize || "10px", this.commitLabelColor = this.commitLabelColor || this.secondaryTextColor, this.commitLabelBackground = this.commitLabelBackground || this.secondaryColor, this.commitLabelFontSize = this.commitLabelFontSize || "10px", this.attributeBackgroundColorOdd = this.attributeBackgroundColorOdd || B(this.background, 12), this.attributeBackgroundColorEven = this.attributeBackgroundColorEven || B(this.background, 2);
  }
  calculate(e) {
    if (typeof e != "object") {
      this.updateColors();
      return;
    }
    const i = Object.keys(e);
    i.forEach((r) => {
      this[r] = e[r];
    }), this.updateColors(), i.forEach((r) => {
      this[r] = e[r];
    });
  }
};
var op = (t9) => {
  const e = new np();
  return e.calculate(t9), e;
};
var sp = class {
  constructor() {
    this.background = "#f4f4f4", this.primaryColor = "#ECECFF", this.secondaryColor = d(this.primaryColor, { h: 120 }), this.secondaryColor = "#ffffde", this.tertiaryColor = d(this.primaryColor, { h: -160 }), this.primaryBorderColor = lt(this.primaryColor, this.darkMode), this.secondaryBorderColor = lt(this.secondaryColor, this.darkMode), this.tertiaryBorderColor = lt(this.tertiaryColor, this.darkMode), this.primaryTextColor = y(this.primaryColor), this.secondaryTextColor = y(this.secondaryColor), this.tertiaryTextColor = y(this.tertiaryColor), this.lineColor = y(this.background), this.textColor = y(this.background), this.background = "white", this.mainBkg = "#ECECFF", this.secondBkg = "#ffffde", this.lineColor = "#333333", this.border1 = "#9370DB", this.border2 = "#aaaa33", this.arrowheadColor = "#333333", this.fontFamily = '"trebuchet ms", verdana, arial, sans-serif', this.fontSize = "16px", this.labelBackground = "#e8e8e8", this.textColor = "#333", this.THEME_COLOR_LIMIT = 12, this.nodeBkg = "calculated", this.nodeBorder = "calculated", this.clusterBkg = "calculated", this.clusterBorder = "calculated", this.defaultLinkColor = "calculated", this.titleColor = "calculated", this.edgeLabelBackground = "calculated", this.actorBorder = "calculated", this.actorBkg = "calculated", this.actorTextColor = "black", this.actorLineColor = "grey", this.signalColor = "calculated", this.signalTextColor = "calculated", this.labelBoxBkgColor = "calculated", this.labelBoxBorderColor = "calculated", this.labelTextColor = "calculated", this.loopTextColor = "calculated", this.noteBorderColor = "calculated", this.noteBkgColor = "#fff5ad", this.noteTextColor = "calculated", this.activationBorderColor = "#666", this.activationBkgColor = "#f4f4f4", this.sequenceNumberColor = "white", this.sectionBkgColor = "calculated", this.altSectionBkgColor = "calculated", this.sectionBkgColor2 = "calculated", this.excludeBkgColor = "#eeeeee", this.taskBorderColor = "calculated", this.taskBkgColor = "calculated", this.taskTextLightColor = "calculated", this.taskTextColor = this.taskTextLightColor, this.taskTextDarkColor = "calculated", this.taskTextOutsideColor = this.taskTextDarkColor, this.taskTextClickableColor = "calculated", this.activeTaskBorderColor = "calculated", this.activeTaskBkgColor = "calculated", this.gridColor = "calculated", this.doneTaskBkgColor = "calculated", this.doneTaskBorderColor = "calculated", this.critBorderColor = "calculated", this.critBkgColor = "calculated", this.todayLineColor = "calculated", this.sectionBkgColor = Ye(102, 102, 255, 0.49), this.altSectionBkgColor = "white", this.sectionBkgColor2 = "#fff400", this.taskBorderColor = "#534fbc", this.taskBkgColor = "#8a90dd", this.taskTextLightColor = "white", this.taskTextColor = "calculated", this.taskTextDarkColor = "black", this.taskTextOutsideColor = "calculated", this.taskTextClickableColor = "#003163", this.activeTaskBorderColor = "#534fbc", this.activeTaskBkgColor = "#bfc7ff", this.gridColor = "lightgrey", this.doneTaskBkgColor = "lightgrey", this.doneTaskBorderColor = "grey", this.critBorderColor = "#ff8888", this.critBkgColor = "red", this.todayLineColor = "red", this.personBorder = this.primaryBorderColor, this.personBkg = this.mainBkg, this.labelColor = "black", this.errorBkgColor = "#552222", this.errorTextColor = "#552222", this.updateColors();
  }
  updateColors() {
    this.cScale0 = this.cScale0 || this.primaryColor, this.cScale1 = this.cScale1 || this.secondaryColor, this.cScale2 = this.cScale2 || this.tertiaryColor, this.cScale3 = this.cScale3 || d(this.primaryColor, { h: 30 }), this.cScale4 = this.cScale4 || d(this.primaryColor, { h: 60 }), this.cScale5 = this.cScale5 || d(this.primaryColor, { h: 90 }), this.cScale6 = this.cScale6 || d(this.primaryColor, { h: 120 }), this.cScale7 = this.cScale7 || d(this.primaryColor, { h: 150 }), this.cScale8 = this.cScale8 || d(this.primaryColor, { h: 210 }), this.cScale9 = this.cScale9 || d(this.primaryColor, { h: 270 }), this.cScale10 = this.cScale10 || d(this.primaryColor, { h: 300 }), this.cScale11 = this.cScale11 || d(this.primaryColor, { h: 330 }), this["cScalePeer1"] = this["cScalePeer1"] || A(this.secondaryColor, 45), this["cScalePeer2"] = this["cScalePeer2"] || A(this.tertiaryColor, 40);
    for (let e = 0; e < this.THEME_COLOR_LIMIT; e++)
      this["cScale" + e] = A(this["cScale" + e], 10), this["cScalePeer" + e] = this["cScalePeer" + e] || A(this["cScale" + e], 25);
    for (let e = 0; e < this.THEME_COLOR_LIMIT; e++)
      this["cScaleInv" + e] = this["cScaleInv" + e] || d(this["cScale" + e], { h: 180 });
    for (let e = 0; e < 5; e++)
      this["surface" + e] = this["surface" + e] || d(this.mainBkg, { h: 30, l: -(5 + e * 5) }), this["surfacePeer" + e] = this["surfacePeer" + e] || d(this.mainBkg, { h: 30, l: -(7 + e * 5) });
    if (this.scaleLabelColor = this.scaleLabelColor !== "calculated" && this.scaleLabelColor ? this.scaleLabelColor : this.labelTextColor, this.labelTextColor !== "calculated") {
      this.cScaleLabel0 = this.cScaleLabel0 || y(this.labelTextColor), this.cScaleLabel3 = this.cScaleLabel3 || y(this.labelTextColor);
      for (let e = 0; e < this.THEME_COLOR_LIMIT; e++)
        this["cScaleLabel" + e] = this["cScaleLabel" + e] || this.labelTextColor;
    }
    this.nodeBkg = this.mainBkg, this.nodeBorder = this.border1, this.clusterBkg = this.secondBkg, this.clusterBorder = this.border2, this.defaultLinkColor = this.lineColor, this.titleColor = this.textColor, this.edgeLabelBackground = this.labelBackground, this.actorBorder = B(this.border1, 23), this.actorBkg = this.mainBkg, this.labelBoxBkgColor = this.actorBkg, this.signalColor = this.textColor, this.signalTextColor = this.textColor, this.labelBoxBorderColor = this.actorBorder, this.labelTextColor = this.actorTextColor, this.loopTextColor = this.actorTextColor, this.noteBorderColor = this.border2, this.noteTextColor = this.actorTextColor, this.taskTextColor = this.taskTextLightColor, this.taskTextOutsideColor = this.taskTextDarkColor, this.transitionColor = this.transitionColor || this.lineColor, this.transitionLabelColor = this.transitionLabelColor || this.textColor, this.stateLabelColor = this.stateLabelColor || this.stateBkg || this.primaryTextColor, this.stateBkg = this.stateBkg || this.mainBkg, this.labelBackgroundColor = this.labelBackgroundColor || this.stateBkg, this.compositeBackground = this.compositeBackground || this.background || this.tertiaryColor, this.altBackground = this.altBackground || "#f0f0f0", this.compositeTitleBackground = this.compositeTitleBackground || this.mainBkg, this.compositeBorder = this.compositeBorder || this.nodeBorder, this.innerEndBackground = this.nodeBorder, this.specialStateColor = this.lineColor, this.errorBkgColor = this.errorBkgColor || this.tertiaryColor, this.errorTextColor = this.errorTextColor || this.tertiaryTextColor, this.transitionColor = this.transitionColor || this.lineColor, this.classText = this.primaryTextColor, this.fillType0 = this.primaryColor, this.fillType1 = this.secondaryColor, this.fillType2 = d(this.primaryColor, { h: 64 }), this.fillType3 = d(this.secondaryColor, { h: 64 }), this.fillType4 = d(this.primaryColor, { h: -64 }), this.fillType5 = d(this.secondaryColor, { h: -64 }), this.fillType6 = d(this.primaryColor, { h: 128 }), this.fillType7 = d(this.secondaryColor, { h: 128 }), this.pie1 = this.pie1 || this.primaryColor, this.pie2 = this.pie2 || this.secondaryColor, this.pie3 = this.pie3 || d(this.tertiaryColor, { l: -40 }), this.pie4 = this.pie4 || d(this.primaryColor, { l: -10 }), this.pie5 = this.pie5 || d(this.secondaryColor, { l: -30 }), this.pie6 = this.pie6 || d(this.tertiaryColor, { l: -20 }), this.pie7 = this.pie7 || d(this.primaryColor, { h: 60, l: -20 }), this.pie8 = this.pie8 || d(this.primaryColor, { h: -60, l: -40 }), this.pie9 = this.pie9 || d(this.primaryColor, { h: 120, l: -40 }), this.pie10 = this.pie10 || d(this.primaryColor, { h: 60, l: -40 }), this.pie11 = this.pie11 || d(this.primaryColor, { h: -90, l: -40 }), this.pie12 = this.pie12 || d(this.primaryColor, { h: 120, l: -30 }), this.pieTitleTextSize = this.pieTitleTextSize || "25px", this.pieTitleTextColor = this.pieTitleTextColor || this.taskTextDarkColor, this.pieSectionTextSize = this.pieSectionTextSize || "17px", this.pieSectionTextColor = this.pieSectionTextColor || this.textColor, this.pieLegendTextSize = this.pieLegendTextSize || "17px", this.pieLegendTextColor = this.pieLegendTextColor || this.taskTextDarkColor, this.pieStrokeColor = this.pieStrokeColor || "black", this.pieStrokeWidth = this.pieStrokeWidth || "2px", this.pieOuterStrokeWidth = this.pieOuterStrokeWidth || "2px", this.pieOuterStrokeColor = this.pieOuterStrokeColor || "black", this.pieOpacity = this.pieOpacity || "0.7", this.quadrant1Fill = this.quadrant1Fill || this.primaryColor, this.quadrant2Fill = this.quadrant2Fill || d(this.primaryColor, { r: 5, g: 5, b: 5 }), this.quadrant3Fill = this.quadrant3Fill || d(this.primaryColor, { r: 10, g: 10, b: 10 }), this.quadrant4Fill = this.quadrant4Fill || d(this.primaryColor, { r: 15, g: 15, b: 15 }), this.quadrant1TextFill = this.quadrant1TextFill || this.primaryTextColor, this.quadrant2TextFill = this.quadrant2TextFill || d(this.primaryTextColor, { r: -5, g: -5, b: -5 }), this.quadrant3TextFill = this.quadrant3TextFill || d(this.primaryTextColor, { r: -10, g: -10, b: -10 }), this.quadrant4TextFill = this.quadrant4TextFill || d(this.primaryTextColor, { r: -15, g: -15, b: -15 }), this.quadrantPointFill = this.quadrantPointFill || ci(this.quadrant1Fill) ? B(this.quadrant1Fill) : A(this.quadrant1Fill), this.quadrantPointTextFill = this.quadrantPointTextFill || this.primaryTextColor, this.quadrantXAxisTextFill = this.quadrantXAxisTextFill || this.primaryTextColor, this.quadrantYAxisTextFill = this.quadrantYAxisTextFill || this.primaryTextColor, this.quadrantInternalBorderStrokeFill = this.quadrantInternalBorderStrokeFill || this.primaryBorderColor, this.quadrantExternalBorderStrokeFill = this.quadrantExternalBorderStrokeFill || this.primaryBorderColor, this.quadrantTitleFill = this.quadrantTitleFill || this.primaryTextColor, this.requirementBackground = this.requirementBackground || this.primaryColor, this.requirementBorderColor = this.requirementBorderColor || this.primaryBorderColor, this.requirementBorderSize = this.requirementBorderSize || "1", this.requirementTextColor = this.requirementTextColor || this.primaryTextColor, this.relationColor = this.relationColor || this.lineColor, this.relationLabelBackground = this.relationLabelBackground || this.labelBackground, this.relationLabelColor = this.relationLabelColor || this.actorTextColor, this.git0 = this.git0 || this.primaryColor, this.git1 = this.git1 || this.secondaryColor, this.git2 = this.git2 || this.tertiaryColor, this.git3 = this.git3 || d(this.primaryColor, { h: -30 }), this.git4 = this.git4 || d(this.primaryColor, { h: -60 }), this.git5 = this.git5 || d(this.primaryColor, { h: -90 }), this.git6 = this.git6 || d(this.primaryColor, { h: 60 }), this.git7 = this.git7 || d(this.primaryColor, { h: 120 }), this.darkMode ? (this.git0 = B(this.git0, 25), this.git1 = B(this.git1, 25), this.git2 = B(this.git2, 25), this.git3 = B(this.git3, 25), this.git4 = B(this.git4, 25), this.git5 = B(this.git5, 25), this.git6 = B(this.git6, 25), this.git7 = B(this.git7, 25)) : (this.git0 = A(this.git0, 25), this.git1 = A(this.git1, 25), this.git2 = A(this.git2, 25), this.git3 = A(this.git3, 25), this.git4 = A(this.git4, 25), this.git5 = A(this.git5, 25), this.git6 = A(this.git6, 25), this.git7 = A(this.git7, 25)), this.gitInv0 = this.gitInv0 || A(y(this.git0), 25), this.gitInv1 = this.gitInv1 || y(this.git1), this.gitInv2 = this.gitInv2 || y(this.git2), this.gitInv3 = this.gitInv3 || y(this.git3), this.gitInv4 = this.gitInv4 || y(this.git4), this.gitInv5 = this.gitInv5 || y(this.git5), this.gitInv6 = this.gitInv6 || y(this.git6), this.gitInv7 = this.gitInv7 || y(this.git7), this.gitBranchLabel0 = this.gitBranchLabel0 || y(this.labelTextColor), this.gitBranchLabel1 = this.gitBranchLabel1 || this.labelTextColor, this.gitBranchLabel2 = this.gitBranchLabel2 || this.labelTextColor, this.gitBranchLabel3 = this.gitBranchLabel3 || y(this.labelTextColor), this.gitBranchLabel4 = this.gitBranchLabel4 || this.labelTextColor, this.gitBranchLabel5 = this.gitBranchLabel5 || this.labelTextColor, this.gitBranchLabel6 = this.gitBranchLabel6 || this.labelTextColor, this.gitBranchLabel7 = this.gitBranchLabel7 || this.labelTextColor, this.tagLabelColor = this.tagLabelColor || this.primaryTextColor, this.tagLabelBackground = this.tagLabelBackground || this.primaryColor, this.tagLabelBorder = this.tagBorder || this.primaryBorderColor, this.tagLabelFontSize = this.tagLabelFontSize || "10px", this.commitLabelColor = this.commitLabelColor || this.secondaryTextColor, this.commitLabelBackground = this.commitLabelBackground || this.secondaryColor, this.commitLabelFontSize = this.commitLabelFontSize || "10px", this.attributeBackgroundColorOdd = this.attributeBackgroundColorOdd || pr, this.attributeBackgroundColorEven = this.attributeBackgroundColorEven || gr;
  }
  calculate(e) {
    if (typeof e != "object") {
      this.updateColors();
      return;
    }
    const i = Object.keys(e);
    i.forEach((r) => {
      this[r] = e[r];
    }), this.updateColors(), i.forEach((r) => {
      this[r] = e[r];
    });
  }
};
var ap = (t9) => {
  const e = new sp();
  return e.calculate(t9), e;
};
var lp = class {
  constructor() {
    this.background = "#f4f4f4", this.primaryColor = "#cde498", this.secondaryColor = "#cdffb2", this.background = "white", this.mainBkg = "#cde498", this.secondBkg = "#cdffb2", this.lineColor = "green", this.border1 = "#13540c", this.border2 = "#6eaa49", this.arrowheadColor = "green", this.fontFamily = '"trebuchet ms", verdana, arial, sans-serif', this.fontSize = "16px", this.tertiaryColor = B("#cde498", 10), this.primaryBorderColor = lt(this.primaryColor, this.darkMode), this.secondaryBorderColor = lt(this.secondaryColor, this.darkMode), this.tertiaryBorderColor = lt(this.tertiaryColor, this.darkMode), this.primaryTextColor = y(this.primaryColor), this.secondaryTextColor = y(this.secondaryColor), this.tertiaryTextColor = y(this.primaryColor), this.lineColor = y(this.background), this.textColor = y(this.background), this.THEME_COLOR_LIMIT = 12, this.nodeBkg = "calculated", this.nodeBorder = "calculated", this.clusterBkg = "calculated", this.clusterBorder = "calculated", this.defaultLinkColor = "calculated", this.titleColor = "#333", this.edgeLabelBackground = "#e8e8e8", this.actorBorder = "calculated", this.actorBkg = "calculated", this.actorTextColor = "black", this.actorLineColor = "grey", this.signalColor = "#333", this.signalTextColor = "#333", this.labelBoxBkgColor = "calculated", this.labelBoxBorderColor = "#326932", this.labelTextColor = "calculated", this.loopTextColor = "calculated", this.noteBorderColor = "calculated", this.noteBkgColor = "#fff5ad", this.noteTextColor = "calculated", this.activationBorderColor = "#666", this.activationBkgColor = "#f4f4f4", this.sequenceNumberColor = "white", this.sectionBkgColor = "#6eaa49", this.altSectionBkgColor = "white", this.sectionBkgColor2 = "#6eaa49", this.excludeBkgColor = "#eeeeee", this.taskBorderColor = "calculated", this.taskBkgColor = "#487e3a", this.taskTextLightColor = "white", this.taskTextColor = "calculated", this.taskTextDarkColor = "black", this.taskTextOutsideColor = "calculated", this.taskTextClickableColor = "#003163", this.activeTaskBorderColor = "calculated", this.activeTaskBkgColor = "calculated", this.gridColor = "lightgrey", this.doneTaskBkgColor = "lightgrey", this.doneTaskBorderColor = "grey", this.critBorderColor = "#ff8888", this.critBkgColor = "red", this.todayLineColor = "red", this.personBorder = this.primaryBorderColor, this.personBkg = this.mainBkg, this.labelColor = "black", this.errorBkgColor = "#552222", this.errorTextColor = "#552222";
  }
  updateColors() {
    this.actorBorder = A(this.mainBkg, 20), this.actorBkg = this.mainBkg, this.labelBoxBkgColor = this.actorBkg, this.labelTextColor = this.actorTextColor, this.loopTextColor = this.actorTextColor, this.noteBorderColor = this.border2, this.noteTextColor = this.actorTextColor, this.cScale0 = this.cScale0 || this.primaryColor, this.cScale1 = this.cScale1 || this.secondaryColor, this.cScale2 = this.cScale2 || this.tertiaryColor, this.cScale3 = this.cScale3 || d(this.primaryColor, { h: 30 }), this.cScale4 = this.cScale4 || d(this.primaryColor, { h: 60 }), this.cScale5 = this.cScale5 || d(this.primaryColor, { h: 90 }), this.cScale6 = this.cScale6 || d(this.primaryColor, { h: 120 }), this.cScale7 = this.cScale7 || d(this.primaryColor, { h: 150 }), this.cScale8 = this.cScale8 || d(this.primaryColor, { h: 210 }), this.cScale9 = this.cScale9 || d(this.primaryColor, { h: 270 }), this.cScale10 = this.cScale10 || d(this.primaryColor, { h: 300 }), this.cScale11 = this.cScale11 || d(this.primaryColor, { h: 330 }), this["cScalePeer1"] = this["cScalePeer1"] || A(this.secondaryColor, 45), this["cScalePeer2"] = this["cScalePeer2"] || A(this.tertiaryColor, 40);
    for (let e = 0; e < this.THEME_COLOR_LIMIT; e++)
      this["cScale" + e] = A(this["cScale" + e], 10), this["cScalePeer" + e] = this["cScalePeer" + e] || A(this["cScale" + e], 25);
    for (let e = 0; e < this.THEME_COLOR_LIMIT; e++)
      this["cScaleInv" + e] = this["cScaleInv" + e] || d(this["cScale" + e], { h: 180 });
    this.scaleLabelColor = this.scaleLabelColor !== "calculated" && this.scaleLabelColor ? this.scaleLabelColor : this.labelTextColor;
    for (let e = 0; e < this.THEME_COLOR_LIMIT; e++)
      this["cScaleLabel" + e] = this["cScaleLabel" + e] || this.scaleLabelColor;
    for (let e = 0; e < 5; e++)
      this["surface" + e] = this["surface" + e] || d(this.mainBkg, { h: 30, s: -30, l: -(5 + e * 5) }), this["surfacePeer" + e] = this["surfacePeer" + e] || d(this.mainBkg, { h: 30, s: -30, l: -(8 + e * 5) });
    this.nodeBkg = this.mainBkg, this.nodeBorder = this.border1, this.clusterBkg = this.secondBkg, this.clusterBorder = this.border2, this.defaultLinkColor = this.lineColor, this.taskBorderColor = this.border1, this.taskTextColor = this.taskTextLightColor, this.taskTextOutsideColor = this.taskTextDarkColor, this.activeTaskBorderColor = this.taskBorderColor, this.activeTaskBkgColor = this.mainBkg, this.transitionColor = this.transitionColor || this.lineColor, this.transitionLabelColor = this.transitionLabelColor || this.textColor, this.stateLabelColor = this.stateLabelColor || this.stateBkg || this.primaryTextColor, this.stateBkg = this.stateBkg || this.mainBkg, this.labelBackgroundColor = this.labelBackgroundColor || this.stateBkg, this.compositeBackground = this.compositeBackground || this.background || this.tertiaryColor, this.altBackground = this.altBackground || "#f0f0f0", this.compositeTitleBackground = this.compositeTitleBackground || this.mainBkg, this.compositeBorder = this.compositeBorder || this.nodeBorder, this.innerEndBackground = this.primaryBorderColor, this.specialStateColor = this.lineColor, this.errorBkgColor = this.errorBkgColor || this.tertiaryColor, this.errorTextColor = this.errorTextColor || this.tertiaryTextColor, this.transitionColor = this.transitionColor || this.lineColor, this.classText = this.primaryTextColor, this.fillType0 = this.primaryColor, this.fillType1 = this.secondaryColor, this.fillType2 = d(this.primaryColor, { h: 64 }), this.fillType3 = d(this.secondaryColor, { h: 64 }), this.fillType4 = d(this.primaryColor, { h: -64 }), this.fillType5 = d(this.secondaryColor, { h: -64 }), this.fillType6 = d(this.primaryColor, { h: 128 }), this.fillType7 = d(this.secondaryColor, { h: 128 }), this.pie1 = this.pie1 || this.primaryColor, this.pie2 = this.pie2 || this.secondaryColor, this.pie3 = this.pie3 || this.tertiaryColor, this.pie4 = this.pie4 || d(this.primaryColor, { l: -30 }), this.pie5 = this.pie5 || d(this.secondaryColor, { l: -30 }), this.pie6 = this.pie6 || d(this.tertiaryColor, { h: 40, l: -40 }), this.pie7 = this.pie7 || d(this.primaryColor, { h: 60, l: -10 }), this.pie8 = this.pie8 || d(this.primaryColor, { h: -60, l: -10 }), this.pie9 = this.pie9 || d(this.primaryColor, { h: 120, l: 0 }), this.pie10 = this.pie10 || d(this.primaryColor, { h: 60, l: -50 }), this.pie11 = this.pie11 || d(this.primaryColor, { h: -60, l: -50 }), this.pie12 = this.pie12 || d(this.primaryColor, { h: 120, l: -50 }), this.pieTitleTextSize = this.pieTitleTextSize || "25px", this.pieTitleTextColor = this.pieTitleTextColor || this.taskTextDarkColor, this.pieSectionTextSize = this.pieSectionTextSize || "17px", this.pieSectionTextColor = this.pieSectionTextColor || this.textColor, this.pieLegendTextSize = this.pieLegendTextSize || "17px", this.pieLegendTextColor = this.pieLegendTextColor || this.taskTextDarkColor, this.pieStrokeColor = this.pieStrokeColor || "black", this.pieStrokeWidth = this.pieStrokeWidth || "2px", this.pieOuterStrokeWidth = this.pieOuterStrokeWidth || "2px", this.pieOuterStrokeColor = this.pieOuterStrokeColor || "black", this.pieOpacity = this.pieOpacity || "0.7", this.quadrant1Fill = this.quadrant1Fill || this.primaryColor, this.quadrant2Fill = this.quadrant2Fill || d(this.primaryColor, { r: 5, g: 5, b: 5 }), this.quadrant3Fill = this.quadrant3Fill || d(this.primaryColor, { r: 10, g: 10, b: 10 }), this.quadrant4Fill = this.quadrant4Fill || d(this.primaryColor, { r: 15, g: 15, b: 15 }), this.quadrant1TextFill = this.quadrant1TextFill || this.primaryTextColor, this.quadrant2TextFill = this.quadrant2TextFill || d(this.primaryTextColor, { r: -5, g: -5, b: -5 }), this.quadrant3TextFill = this.quadrant3TextFill || d(this.primaryTextColor, { r: -10, g: -10, b: -10 }), this.quadrant4TextFill = this.quadrant4TextFill || d(this.primaryTextColor, { r: -15, g: -15, b: -15 }), this.quadrantPointFill = this.quadrantPointFill || ci(this.quadrant1Fill) ? B(this.quadrant1Fill) : A(this.quadrant1Fill), this.quadrantPointTextFill = this.quadrantPointTextFill || this.primaryTextColor, this.quadrantXAxisTextFill = this.quadrantXAxisTextFill || this.primaryTextColor, this.quadrantYAxisTextFill = this.quadrantYAxisTextFill || this.primaryTextColor, this.quadrantInternalBorderStrokeFill = this.quadrantInternalBorderStrokeFill || this.primaryBorderColor, this.quadrantExternalBorderStrokeFill = this.quadrantExternalBorderStrokeFill || this.primaryBorderColor, this.quadrantTitleFill = this.quadrantTitleFill || this.primaryTextColor, this.requirementBackground = this.requirementBackground || this.primaryColor, this.requirementBorderColor = this.requirementBorderColor || this.primaryBorderColor, this.requirementBorderSize = this.requirementBorderSize || "1", this.requirementTextColor = this.requirementTextColor || this.primaryTextColor, this.relationColor = this.relationColor || this.lineColor, this.relationLabelBackground = this.relationLabelBackground || this.edgeLabelBackground, this.relationLabelColor = this.relationLabelColor || this.actorTextColor, this.git0 = this.git0 || this.primaryColor, this.git1 = this.git1 || this.secondaryColor, this.git2 = this.git2 || this.tertiaryColor, this.git3 = this.git3 || d(this.primaryColor, { h: -30 }), this.git4 = this.git4 || d(this.primaryColor, { h: -60 }), this.git5 = this.git5 || d(this.primaryColor, { h: -90 }), this.git6 = this.git6 || d(this.primaryColor, { h: 60 }), this.git7 = this.git7 || d(this.primaryColor, { h: 120 }), this.darkMode ? (this.git0 = B(this.git0, 25), this.git1 = B(this.git1, 25), this.git2 = B(this.git2, 25), this.git3 = B(this.git3, 25), this.git4 = B(this.git4, 25), this.git5 = B(this.git5, 25), this.git6 = B(this.git6, 25), this.git7 = B(this.git7, 25)) : (this.git0 = A(this.git0, 25), this.git1 = A(this.git1, 25), this.git2 = A(this.git2, 25), this.git3 = A(this.git3, 25), this.git4 = A(this.git4, 25), this.git5 = A(this.git5, 25), this.git6 = A(this.git6, 25), this.git7 = A(this.git7, 25)), this.gitInv0 = this.gitInv0 || y(this.git0), this.gitInv1 = this.gitInv1 || y(this.git1), this.gitInv2 = this.gitInv2 || y(this.git2), this.gitInv3 = this.gitInv3 || y(this.git3), this.gitInv4 = this.gitInv4 || y(this.git4), this.gitInv5 = this.gitInv5 || y(this.git5), this.gitInv6 = this.gitInv6 || y(this.git6), this.gitInv7 = this.gitInv7 || y(this.git7), this.gitBranchLabel0 = this.gitBranchLabel0 || y(this.labelTextColor), this.gitBranchLabel1 = this.gitBranchLabel1 || this.labelTextColor, this.gitBranchLabel2 = this.gitBranchLabel2 || this.labelTextColor, this.gitBranchLabel3 = this.gitBranchLabel3 || y(this.labelTextColor), this.gitBranchLabel4 = this.gitBranchLabel4 || this.labelTextColor, this.gitBranchLabel5 = this.gitBranchLabel5 || this.labelTextColor, this.gitBranchLabel6 = this.gitBranchLabel6 || this.labelTextColor, this.gitBranchLabel7 = this.gitBranchLabel7 || this.labelTextColor, this.tagLabelColor = this.tagLabelColor || this.primaryTextColor, this.tagLabelBackground = this.tagLabelBackground || this.primaryColor, this.tagLabelBorder = this.tagBorder || this.primaryBorderColor, this.tagLabelFontSize = this.tagLabelFontSize || "10px", this.commitLabelColor = this.commitLabelColor || this.secondaryTextColor, this.commitLabelBackground = this.commitLabelBackground || this.secondaryColor, this.commitLabelFontSize = this.commitLabelFontSize || "10px", this.attributeBackgroundColorOdd = this.attributeBackgroundColorOdd || pr, this.attributeBackgroundColorEven = this.attributeBackgroundColorEven || gr;
  }
  calculate(e) {
    if (typeof e != "object") {
      this.updateColors();
      return;
    }
    const i = Object.keys(e);
    i.forEach((r) => {
      this[r] = e[r];
    }), this.updateColors(), i.forEach((r) => {
      this[r] = e[r];
    });
  }
};
var hp = (t9) => {
  const e = new lp();
  return e.calculate(t9), e;
};
var cp = class {
  constructor() {
    this.primaryColor = "#eee", this.contrast = "#707070", this.secondaryColor = B(this.contrast, 55), this.background = "#ffffff", this.tertiaryColor = d(this.primaryColor, { h: -160 }), this.primaryBorderColor = lt(this.primaryColor, this.darkMode), this.secondaryBorderColor = lt(this.secondaryColor, this.darkMode), this.tertiaryBorderColor = lt(this.tertiaryColor, this.darkMode), this.primaryTextColor = y(this.primaryColor), this.secondaryTextColor = y(this.secondaryColor), this.tertiaryTextColor = y(this.tertiaryColor), this.lineColor = y(this.background), this.textColor = y(this.background), this.mainBkg = "#eee", this.secondBkg = "calculated", this.lineColor = "#666", this.border1 = "#999", this.border2 = "calculated", this.note = "#ffa", this.text = "#333", this.critical = "#d42", this.done = "#bbb", this.arrowheadColor = "#333333", this.fontFamily = '"trebuchet ms", verdana, arial, sans-serif', this.fontSize = "16px", this.THEME_COLOR_LIMIT = 12, this.nodeBkg = "calculated", this.nodeBorder = "calculated", this.clusterBkg = "calculated", this.clusterBorder = "calculated", this.defaultLinkColor = "calculated", this.titleColor = "calculated", this.edgeLabelBackground = "white", this.actorBorder = "calculated", this.actorBkg = "calculated", this.actorTextColor = "calculated", this.actorLineColor = "calculated", this.signalColor = "calculated", this.signalTextColor = "calculated", this.labelBoxBkgColor = "calculated", this.labelBoxBorderColor = "calculated", this.labelTextColor = "calculated", this.loopTextColor = "calculated", this.noteBorderColor = "calculated", this.noteBkgColor = "calculated", this.noteTextColor = "calculated", this.activationBorderColor = "#666", this.activationBkgColor = "#f4f4f4", this.sequenceNumberColor = "white", this.sectionBkgColor = "calculated", this.altSectionBkgColor = "white", this.sectionBkgColor2 = "calculated", this.excludeBkgColor = "#eeeeee", this.taskBorderColor = "calculated", this.taskBkgColor = "calculated", this.taskTextLightColor = "white", this.taskTextColor = "calculated", this.taskTextDarkColor = "calculated", this.taskTextOutsideColor = "calculated", this.taskTextClickableColor = "#003163", this.activeTaskBorderColor = "calculated", this.activeTaskBkgColor = "calculated", this.gridColor = "calculated", this.doneTaskBkgColor = "calculated", this.doneTaskBorderColor = "calculated", this.critBkgColor = "calculated", this.critBorderColor = "calculated", this.todayLineColor = "calculated", this.personBorder = this.primaryBorderColor, this.personBkg = this.mainBkg, this.labelColor = "black", this.errorBkgColor = "#552222", this.errorTextColor = "#552222";
  }
  updateColors() {
    this.secondBkg = B(this.contrast, 55), this.border2 = this.contrast, this.actorBorder = B(this.border1, 23), this.actorBkg = this.mainBkg, this.actorTextColor = this.text, this.actorLineColor = this.lineColor, this.signalColor = this.text, this.signalTextColor = this.text, this.labelBoxBkgColor = this.actorBkg, this.labelBoxBorderColor = this.actorBorder, this.labelTextColor = this.text, this.loopTextColor = this.text, this.noteBorderColor = "#999", this.noteBkgColor = "#666", this.noteTextColor = "#fff", this.cScale0 = this.cScale0 || "#555", this.cScale1 = this.cScale1 || "#F4F4F4", this.cScale2 = this.cScale2 || "#555", this.cScale3 = this.cScale3 || "#BBB", this.cScale4 = this.cScale4 || "#777", this.cScale5 = this.cScale5 || "#999", this.cScale6 = this.cScale6 || "#DDD", this.cScale7 = this.cScale7 || "#FFF", this.cScale8 = this.cScale8 || "#DDD", this.cScale9 = this.cScale9 || "#BBB", this.cScale10 = this.cScale10 || "#999", this.cScale11 = this.cScale11 || "#777";
    for (let e = 0; e < this.THEME_COLOR_LIMIT; e++)
      this["cScaleInv" + e] = this["cScaleInv" + e] || y(this["cScale" + e]);
    for (let e = 0; e < this.THEME_COLOR_LIMIT; e++)
      this.darkMode ? this["cScalePeer" + e] = this["cScalePeer" + e] || B(this["cScale" + e], 10) : this["cScalePeer" + e] = this["cScalePeer" + e] || A(this["cScale" + e], 10);
    this.scaleLabelColor = this.scaleLabelColor || (this.darkMode ? "black" : this.labelTextColor), this.cScaleLabel0 = this.cScaleLabel0 || this.cScale1, this.cScaleLabel2 = this.cScaleLabel2 || this.cScale1;
    for (let e = 0; e < this.THEME_COLOR_LIMIT; e++)
      this["cScaleLabel" + e] = this["cScaleLabel" + e] || this.scaleLabelColor;
    for (let e = 0; e < 5; e++)
      this["surface" + e] = this["surface" + e] || d(this.mainBkg, { l: -(5 + e * 5) }), this["surfacePeer" + e] = this["surfacePeer" + e] || d(this.mainBkg, { l: -(8 + e * 5) });
    this.nodeBkg = this.mainBkg, this.nodeBorder = this.border1, this.clusterBkg = this.secondBkg, this.clusterBorder = this.border2, this.defaultLinkColor = this.lineColor, this.titleColor = this.text, this.sectionBkgColor = B(this.contrast, 30), this.sectionBkgColor2 = B(this.contrast, 30), this.taskBorderColor = A(this.contrast, 10), this.taskBkgColor = this.contrast, this.taskTextColor = this.taskTextLightColor, this.taskTextDarkColor = this.text, this.taskTextOutsideColor = this.taskTextDarkColor, this.activeTaskBorderColor = this.taskBorderColor, this.activeTaskBkgColor = this.mainBkg, this.gridColor = B(this.border1, 30), this.doneTaskBkgColor = this.done, this.doneTaskBorderColor = this.lineColor, this.critBkgColor = this.critical, this.critBorderColor = A(this.critBkgColor, 10), this.todayLineColor = this.critBkgColor, this.transitionColor = this.transitionColor || "#000", this.transitionLabelColor = this.transitionLabelColor || this.textColor, this.stateLabelColor = this.stateLabelColor || this.stateBkg || this.primaryTextColor, this.stateBkg = this.stateBkg || this.mainBkg, this.labelBackgroundColor = this.labelBackgroundColor || this.stateBkg, this.compositeBackground = this.compositeBackground || this.background || this.tertiaryColor, this.altBackground = this.altBackground || "#f4f4f4", this.compositeTitleBackground = this.compositeTitleBackground || this.mainBkg, this.stateBorder = this.stateBorder || "#000", this.innerEndBackground = this.primaryBorderColor, this.specialStateColor = "#222", this.errorBkgColor = this.errorBkgColor || this.tertiaryColor, this.errorTextColor = this.errorTextColor || this.tertiaryTextColor, this.classText = this.primaryTextColor, this.fillType0 = this.primaryColor, this.fillType1 = this.secondaryColor, this.fillType2 = d(this.primaryColor, { h: 64 }), this.fillType3 = d(this.secondaryColor, { h: 64 }), this.fillType4 = d(this.primaryColor, { h: -64 }), this.fillType5 = d(this.secondaryColor, { h: -64 }), this.fillType6 = d(this.primaryColor, { h: 128 }), this.fillType7 = d(this.secondaryColor, { h: 128 });
    for (let e = 0; e < this.THEME_COLOR_LIMIT; e++)
      this["pie" + e] = this["cScale" + e];
    this.pie12 = this.pie0, this.pieTitleTextSize = this.pieTitleTextSize || "25px", this.pieTitleTextColor = this.pieTitleTextColor || this.taskTextDarkColor, this.pieSectionTextSize = this.pieSectionTextSize || "17px", this.pieSectionTextColor = this.pieSectionTextColor || this.textColor, this.pieLegendTextSize = this.pieLegendTextSize || "17px", this.pieLegendTextColor = this.pieLegendTextColor || this.taskTextDarkColor, this.pieStrokeColor = this.pieStrokeColor || "black", this.pieStrokeWidth = this.pieStrokeWidth || "2px", this.pieOuterStrokeWidth = this.pieOuterStrokeWidth || "2px", this.pieOuterStrokeColor = this.pieOuterStrokeColor || "black", this.pieOpacity = this.pieOpacity || "0.7", this.quadrant1Fill = this.quadrant1Fill || this.primaryColor, this.quadrant2Fill = this.quadrant2Fill || d(this.primaryColor, { r: 5, g: 5, b: 5 }), this.quadrant3Fill = this.quadrant3Fill || d(this.primaryColor, { r: 10, g: 10, b: 10 }), this.quadrant4Fill = this.quadrant4Fill || d(this.primaryColor, { r: 15, g: 15, b: 15 }), this.quadrant1TextFill = this.quadrant1TextFill || this.primaryTextColor, this.quadrant2TextFill = this.quadrant2TextFill || d(this.primaryTextColor, { r: -5, g: -5, b: -5 }), this.quadrant3TextFill = this.quadrant3TextFill || d(this.primaryTextColor, { r: -10, g: -10, b: -10 }), this.quadrant4TextFill = this.quadrant4TextFill || d(this.primaryTextColor, { r: -15, g: -15, b: -15 }), this.quadrantPointFill = this.quadrantPointFill || ci(this.quadrant1Fill) ? B(this.quadrant1Fill) : A(this.quadrant1Fill), this.quadrantPointTextFill = this.quadrantPointTextFill || this.primaryTextColor, this.quadrantXAxisTextFill = this.quadrantXAxisTextFill || this.primaryTextColor, this.quadrantYAxisTextFill = this.quadrantYAxisTextFill || this.primaryTextColor, this.quadrantInternalBorderStrokeFill = this.quadrantInternalBorderStrokeFill || this.primaryBorderColor, this.quadrantExternalBorderStrokeFill = this.quadrantExternalBorderStrokeFill || this.primaryBorderColor, this.quadrantTitleFill = this.quadrantTitleFill || this.primaryTextColor, this.requirementBackground = this.requirementBackground || this.primaryColor, this.requirementBorderColor = this.requirementBorderColor || this.primaryBorderColor, this.requirementBorderSize = this.requirementBorderSize || "1", this.requirementTextColor = this.requirementTextColor || this.primaryTextColor, this.relationColor = this.relationColor || this.lineColor, this.relationLabelBackground = this.relationLabelBackground || this.edgeLabelBackground, this.relationLabelColor = this.relationLabelColor || this.actorTextColor, this.git0 = A(this.pie1, 25) || this.primaryColor, this.git1 = this.pie2 || this.secondaryColor, this.git2 = this.pie3 || this.tertiaryColor, this.git3 = this.pie4 || d(this.primaryColor, { h: -30 }), this.git4 = this.pie5 || d(this.primaryColor, { h: -60 }), this.git5 = this.pie6 || d(this.primaryColor, { h: -90 }), this.git6 = this.pie7 || d(this.primaryColor, { h: 60 }), this.git7 = this.pie8 || d(this.primaryColor, { h: 120 }), this.gitInv0 = this.gitInv0 || y(this.git0), this.gitInv1 = this.gitInv1 || y(this.git1), this.gitInv2 = this.gitInv2 || y(this.git2), this.gitInv3 = this.gitInv3 || y(this.git3), this.gitInv4 = this.gitInv4 || y(this.git4), this.gitInv5 = this.gitInv5 || y(this.git5), this.gitInv6 = this.gitInv6 || y(this.git6), this.gitInv7 = this.gitInv7 || y(this.git7), this.branchLabelColor = this.branchLabelColor || this.labelTextColor, this.gitBranchLabel0 = this.branchLabelColor, this.gitBranchLabel1 = "white", this.gitBranchLabel2 = this.branchLabelColor, this.gitBranchLabel3 = "white", this.gitBranchLabel4 = this.branchLabelColor, this.gitBranchLabel5 = this.branchLabelColor, this.gitBranchLabel6 = this.branchLabelColor, this.gitBranchLabel7 = this.branchLabelColor, this.tagLabelColor = this.tagLabelColor || this.primaryTextColor, this.tagLabelBackground = this.tagLabelBackground || this.primaryColor, this.tagLabelBorder = this.tagBorder || this.primaryBorderColor, this.tagLabelFontSize = this.tagLabelFontSize || "10px", this.commitLabelColor = this.commitLabelColor || this.secondaryTextColor, this.commitLabelBackground = this.commitLabelBackground || this.secondaryColor, this.commitLabelFontSize = this.commitLabelFontSize || "10px", this.attributeBackgroundColorOdd = this.attributeBackgroundColorOdd || pr, this.attributeBackgroundColorEven = this.attributeBackgroundColorEven || gr;
  }
  calculate(e) {
    if (typeof e != "object") {
      this.updateColors();
      return;
    }
    const i = Object.keys(e);
    i.forEach((r) => {
      this[r] = e[r];
    }), this.updateColors(), i.forEach((r) => {
      this[r] = e[r];
    });
  }
};
var up = (t9) => {
  const e = new cp();
  return e.calculate(t9), e;
};
var Ut = {
  base: {
    getThemeVariables: rp
  },
  dark: {
    getThemeVariables: op
  },
  default: {
    getThemeVariables: ap
  },
  forest: {
    getThemeVariables: hp
  },
  neutral: {
    getThemeVariables: up
  }
};
var Zt = {
  flowchart: {
    useMaxWidth: true,
    titleTopMargin: 25,
    diagramPadding: 8,
    htmlLabels: true,
    nodeSpacing: 50,
    rankSpacing: 50,
    curve: "basis",
    padding: 15,
    defaultRenderer: "dagre-wrapper",
    wrappingWidth: 200
  },
  sequence: {
    useMaxWidth: true,
    hideUnusedParticipants: false,
    activationWidth: 10,
    diagramMarginX: 50,
    diagramMarginY: 10,
    actorMargin: 50,
    width: 150,
    height: 65,
    boxMargin: 10,
    boxTextMargin: 5,
    noteMargin: 10,
    messageMargin: 35,
    messageAlign: "center",
    mirrorActors: true,
    forceMenus: false,
    bottomMarginAdj: 1,
    rightAngles: false,
    showSequenceNumbers: false,
    actorFontSize: 14,
    actorFontFamily: '"Open Sans", sans-serif',
    actorFontWeight: 400,
    noteFontSize: 14,
    noteFontFamily: '"trebuchet ms", verdana, arial, sans-serif',
    noteFontWeight: 400,
    noteAlign: "center",
    messageFontSize: 16,
    messageFontFamily: '"trebuchet ms", verdana, arial, sans-serif',
    messageFontWeight: 400,
    wrap: false,
    wrapPadding: 10,
    labelBoxWidth: 50,
    labelBoxHeight: 20
  },
  gantt: {
    useMaxWidth: true,
    titleTopMargin: 25,
    barHeight: 20,
    barGap: 4,
    topPadding: 50,
    rightPadding: 75,
    leftPadding: 75,
    gridLineStartPadding: 35,
    fontSize: 11,
    sectionFontSize: 11,
    numberSectionStyles: 4,
    axisFormat: "%Y-%m-%d",
    topAxis: false,
    displayMode: "",
    weekday: "sunday"
  },
  journey: {
    useMaxWidth: true,
    diagramMarginX: 50,
    diagramMarginY: 10,
    leftMargin: 150,
    width: 150,
    height: 50,
    boxMargin: 10,
    boxTextMargin: 5,
    noteMargin: 10,
    messageMargin: 35,
    messageAlign: "center",
    bottomMarginAdj: 1,
    rightAngles: false,
    taskFontSize: 14,
    taskFontFamily: '"Open Sans", sans-serif',
    taskMargin: 50,
    activationWidth: 10,
    textPlacement: "fo",
    actorColours: [
      "#8FBC8F",
      "#7CFC00",
      "#00FFFF",
      "#20B2AA",
      "#B0E0E6",
      "#FFFFE0"
    ],
    sectionFills: [
      "#191970",
      "#8B008B",
      "#4B0082",
      "#2F4F4F",
      "#800000",
      "#8B4513",
      "#00008B"
    ],
    sectionColours: [
      "#fff"
    ]
  },
  class: {
    useMaxWidth: true,
    titleTopMargin: 25,
    arrowMarkerAbsolute: false,
    dividerMargin: 10,
    padding: 5,
    textHeight: 10,
    defaultRenderer: "dagre-wrapper",
    htmlLabels: false
  },
  state: {
    useMaxWidth: true,
    titleTopMargin: 25,
    dividerMargin: 10,
    sizeUnit: 5,
    padding: 8,
    textHeight: 10,
    titleShift: -15,
    noteMargin: 10,
    forkWidth: 70,
    forkHeight: 7,
    miniPadding: 2,
    fontSizeFactor: 5.02,
    fontSize: 24,
    labelHeight: 16,
    edgeLengthFactor: "20",
    compositTitleSize: 35,
    radius: 5,
    defaultRenderer: "dagre-wrapper"
  },
  er: {
    useMaxWidth: true,
    titleTopMargin: 25,
    diagramPadding: 20,
    layoutDirection: "TB",
    minEntityWidth: 100,
    minEntityHeight: 75,
    entityPadding: 15,
    stroke: "gray",
    fill: "honeydew",
    fontSize: 12
  },
  pie: {
    useMaxWidth: true,
    textPosition: 0.75
  },
  quadrantChart: {
    useMaxWidth: true,
    chartWidth: 500,
    chartHeight: 500,
    titleFontSize: 20,
    titlePadding: 10,
    quadrantPadding: 5,
    xAxisLabelPadding: 5,
    yAxisLabelPadding: 5,
    xAxisLabelFontSize: 16,
    yAxisLabelFontSize: 16,
    quadrantLabelFontSize: 16,
    quadrantTextTopPadding: 5,
    pointTextPadding: 5,
    pointLabelFontSize: 12,
    pointRadius: 5,
    xAxisPosition: "top",
    yAxisPosition: "left",
    quadrantInternalBorderStrokeWidth: 1,
    quadrantExternalBorderStrokeWidth: 2
  },
  requirement: {
    useMaxWidth: true,
    rect_fill: "#f9f9f9",
    text_color: "#333",
    rect_border_size: "0.5px",
    rect_border_color: "#bbb",
    rect_min_width: 200,
    rect_min_height: 200,
    fontSize: 14,
    rect_padding: 10,
    line_height: 20
  },
  mindmap: {
    useMaxWidth: true,
    padding: 10,
    maxNodeWidth: 200
  },
  timeline: {
    useMaxWidth: true,
    diagramMarginX: 50,
    diagramMarginY: 10,
    leftMargin: 150,
    width: 150,
    height: 50,
    boxMargin: 10,
    boxTextMargin: 5,
    noteMargin: 10,
    messageMargin: 35,
    messageAlign: "center",
    bottomMarginAdj: 1,
    rightAngles: false,
    taskFontSize: 14,
    taskFontFamily: '"Open Sans", sans-serif',
    taskMargin: 50,
    activationWidth: 10,
    textPlacement: "fo",
    actorColours: [
      "#8FBC8F",
      "#7CFC00",
      "#00FFFF",
      "#20B2AA",
      "#B0E0E6",
      "#FFFFE0"
    ],
    sectionFills: [
      "#191970",
      "#8B008B",
      "#4B0082",
      "#2F4F4F",
      "#800000",
      "#8B4513",
      "#00008B"
    ],
    sectionColours: [
      "#fff"
    ],
    disableMulticolor: false
  },
  gitGraph: {
    useMaxWidth: true,
    titleTopMargin: 25,
    diagramPadding: 8,
    nodeLabel: {
      width: 75,
      height: 100,
      x: -25,
      y: 0
    },
    mainBranchName: "main",
    mainBranchOrder: 0,
    showCommitLabel: true,
    showBranches: true,
    rotateCommitLabel: true,
    arrowMarkerAbsolute: false
  },
  c4: {
    useMaxWidth: true,
    diagramMarginX: 50,
    diagramMarginY: 10,
    c4ShapeMargin: 50,
    c4ShapePadding: 20,
    width: 216,
    height: 60,
    boxMargin: 10,
    c4ShapeInRow: 4,
    nextLinePaddingX: 0,
    c4BoundaryInRow: 2,
    personFontSize: 14,
    personFontFamily: '"Open Sans", sans-serif',
    personFontWeight: "normal",
    external_personFontSize: 14,
    external_personFontFamily: '"Open Sans", sans-serif',
    external_personFontWeight: "normal",
    systemFontSize: 14,
    systemFontFamily: '"Open Sans", sans-serif',
    systemFontWeight: "normal",
    external_systemFontSize: 14,
    external_systemFontFamily: '"Open Sans", sans-serif',
    external_systemFontWeight: "normal",
    system_dbFontSize: 14,
    system_dbFontFamily: '"Open Sans", sans-serif',
    system_dbFontWeight: "normal",
    external_system_dbFontSize: 14,
    external_system_dbFontFamily: '"Open Sans", sans-serif',
    external_system_dbFontWeight: "normal",
    system_queueFontSize: 14,
    system_queueFontFamily: '"Open Sans", sans-serif',
    system_queueFontWeight: "normal",
    external_system_queueFontSize: 14,
    external_system_queueFontFamily: '"Open Sans", sans-serif',
    external_system_queueFontWeight: "normal",
    boundaryFontSize: 14,
    boundaryFontFamily: '"Open Sans", sans-serif',
    boundaryFontWeight: "normal",
    messageFontSize: 12,
    messageFontFamily: '"Open Sans", sans-serif',
    messageFontWeight: "normal",
    containerFontSize: 14,
    containerFontFamily: '"Open Sans", sans-serif',
    containerFontWeight: "normal",
    external_containerFontSize: 14,
    external_containerFontFamily: '"Open Sans", sans-serif',
    external_containerFontWeight: "normal",
    container_dbFontSize: 14,
    container_dbFontFamily: '"Open Sans", sans-serif',
    container_dbFontWeight: "normal",
    external_container_dbFontSize: 14,
    external_container_dbFontFamily: '"Open Sans", sans-serif',
    external_container_dbFontWeight: "normal",
    container_queueFontSize: 14,
    container_queueFontFamily: '"Open Sans", sans-serif',
    container_queueFontWeight: "normal",
    external_container_queueFontSize: 14,
    external_container_queueFontFamily: '"Open Sans", sans-serif',
    external_container_queueFontWeight: "normal",
    componentFontSize: 14,
    componentFontFamily: '"Open Sans", sans-serif',
    componentFontWeight: "normal",
    external_componentFontSize: 14,
    external_componentFontFamily: '"Open Sans", sans-serif',
    external_componentFontWeight: "normal",
    component_dbFontSize: 14,
    component_dbFontFamily: '"Open Sans", sans-serif',
    component_dbFontWeight: "normal",
    external_component_dbFontSize: 14,
    external_component_dbFontFamily: '"Open Sans", sans-serif',
    external_component_dbFontWeight: "normal",
    component_queueFontSize: 14,
    component_queueFontFamily: '"Open Sans", sans-serif',
    component_queueFontWeight: "normal",
    external_component_queueFontSize: 14,
    external_component_queueFontFamily: '"Open Sans", sans-serif',
    external_component_queueFontWeight: "normal",
    wrap: true,
    wrapPadding: 10,
    person_bg_color: "#08427B",
    person_border_color: "#073B6F",
    external_person_bg_color: "#686868",
    external_person_border_color: "#8A8A8A",
    system_bg_color: "#1168BD",
    system_border_color: "#3C7FC0",
    system_db_bg_color: "#1168BD",
    system_db_border_color: "#3C7FC0",
    system_queue_bg_color: "#1168BD",
    system_queue_border_color: "#3C7FC0",
    external_system_bg_color: "#999999",
    external_system_border_color: "#8A8A8A",
    external_system_db_bg_color: "#999999",
    external_system_db_border_color: "#8A8A8A",
    external_system_queue_bg_color: "#999999",
    external_system_queue_border_color: "#8A8A8A",
    container_bg_color: "#438DD5",
    container_border_color: "#3C7FC0",
    container_db_bg_color: "#438DD5",
    container_db_border_color: "#3C7FC0",
    container_queue_bg_color: "#438DD5",
    container_queue_border_color: "#3C7FC0",
    external_container_bg_color: "#B3B3B3",
    external_container_border_color: "#A6A6A6",
    external_container_db_bg_color: "#B3B3B3",
    external_container_db_border_color: "#A6A6A6",
    external_container_queue_bg_color: "#B3B3B3",
    external_container_queue_border_color: "#A6A6A6",
    component_bg_color: "#85BBF0",
    component_border_color: "#78A8D8",
    component_db_bg_color: "#85BBF0",
    component_db_border_color: "#78A8D8",
    component_queue_bg_color: "#85BBF0",
    component_queue_border_color: "#78A8D8",
    external_component_bg_color: "#CCCCCC",
    external_component_border_color: "#BFBFBF",
    external_component_db_bg_color: "#CCCCCC",
    external_component_db_border_color: "#BFBFBF",
    external_component_queue_bg_color: "#CCCCCC",
    external_component_queue_border_color: "#BFBFBF"
  },
  sankey: {
    useMaxWidth: true,
    width: 600,
    height: 400,
    linkColor: "gradient",
    nodeAlignment: "justify",
    showValues: true,
    prefix: "",
    suffix: ""
  },
  theme: "default",
  maxTextSize: 5e4,
  darkMode: false,
  fontFamily: '"trebuchet ms", verdana, arial, sans-serif;',
  logLevel: 5,
  securityLevel: "strict",
  startOnLoad: true,
  arrowMarkerAbsolute: false,
  secure: [
    "secure",
    "securityLevel",
    "startOnLoad",
    "maxTextSize"
  ],
  deterministicIds: false,
  fontSize: 16
};
var Ba = {
  ...Zt,
  // Set, even though they're `undefined` so that `configKeys` finds these keys
  // TODO: Should we replace these with `null` so that they can go in the JSON Schema?
  deterministicIDSeed: void 0,
  themeCSS: void 0,
  // add non-JSON default config values
  themeVariables: Ut.default.getThemeVariables(),
  sequence: {
    ...Zt.sequence,
    messageFont: function() {
      return {
        fontFamily: this.messageFontFamily,
        fontSize: this.messageFontSize,
        fontWeight: this.messageFontWeight
      };
    },
    noteFont: function() {
      return {
        fontFamily: this.noteFontFamily,
        fontSize: this.noteFontSize,
        fontWeight: this.noteFontWeight
      };
    },
    actorFont: function() {
      return {
        fontFamily: this.actorFontFamily,
        fontSize: this.actorFontSize,
        fontWeight: this.actorFontWeight
      };
    }
  },
  gantt: {
    ...Zt.gantt,
    tickInterval: void 0,
    useWidth: void 0
    // can probably be removed since `configKeys` already includes this
  },
  c4: {
    ...Zt.c4,
    useWidth: void 0,
    personFont: function() {
      return {
        fontFamily: this.personFontFamily,
        fontSize: this.personFontSize,
        fontWeight: this.personFontWeight
      };
    },
    external_personFont: function() {
      return {
        fontFamily: this.external_personFontFamily,
        fontSize: this.external_personFontSize,
        fontWeight: this.external_personFontWeight
      };
    },
    systemFont: function() {
      return {
        fontFamily: this.systemFontFamily,
        fontSize: this.systemFontSize,
        fontWeight: this.systemFontWeight
      };
    },
    external_systemFont: function() {
      return {
        fontFamily: this.external_systemFontFamily,
        fontSize: this.external_systemFontSize,
        fontWeight: this.external_systemFontWeight
      };
    },
    system_dbFont: function() {
      return {
        fontFamily: this.system_dbFontFamily,
        fontSize: this.system_dbFontSize,
        fontWeight: this.system_dbFontWeight
      };
    },
    external_system_dbFont: function() {
      return {
        fontFamily: this.external_system_dbFontFamily,
        fontSize: this.external_system_dbFontSize,
        fontWeight: this.external_system_dbFontWeight
      };
    },
    system_queueFont: function() {
      return {
        fontFamily: this.system_queueFontFamily,
        fontSize: this.system_queueFontSize,
        fontWeight: this.system_queueFontWeight
      };
    },
    external_system_queueFont: function() {
      return {
        fontFamily: this.external_system_queueFontFamily,
        fontSize: this.external_system_queueFontSize,
        fontWeight: this.external_system_queueFontWeight
      };
    },
    containerFont: function() {
      return {
        fontFamily: this.containerFontFamily,
        fontSize: this.containerFontSize,
        fontWeight: this.containerFontWeight
      };
    },
    external_containerFont: function() {
      return {
        fontFamily: this.external_containerFontFamily,
        fontSize: this.external_containerFontSize,
        fontWeight: this.external_containerFontWeight
      };
    },
    container_dbFont: function() {
      return {
        fontFamily: this.container_dbFontFamily,
        fontSize: this.container_dbFontSize,
        fontWeight: this.container_dbFontWeight
      };
    },
    external_container_dbFont: function() {
      return {
        fontFamily: this.external_container_dbFontFamily,
        fontSize: this.external_container_dbFontSize,
        fontWeight: this.external_container_dbFontWeight
      };
    },
    container_queueFont: function() {
      return {
        fontFamily: this.container_queueFontFamily,
        fontSize: this.container_queueFontSize,
        fontWeight: this.container_queueFontWeight
      };
    },
    external_container_queueFont: function() {
      return {
        fontFamily: this.external_container_queueFontFamily,
        fontSize: this.external_container_queueFontSize,
        fontWeight: this.external_container_queueFontWeight
      };
    },
    componentFont: function() {
      return {
        fontFamily: this.componentFontFamily,
        fontSize: this.componentFontSize,
        fontWeight: this.componentFontWeight
      };
    },
    external_componentFont: function() {
      return {
        fontFamily: this.external_componentFontFamily,
        fontSize: this.external_componentFontSize,
        fontWeight: this.external_componentFontWeight
      };
    },
    component_dbFont: function() {
      return {
        fontFamily: this.component_dbFontFamily,
        fontSize: this.component_dbFontSize,
        fontWeight: this.component_dbFontWeight
      };
    },
    external_component_dbFont: function() {
      return {
        fontFamily: this.external_component_dbFontFamily,
        fontSize: this.external_component_dbFontSize,
        fontWeight: this.external_component_dbFontWeight
      };
    },
    component_queueFont: function() {
      return {
        fontFamily: this.component_queueFontFamily,
        fontSize: this.component_queueFontSize,
        fontWeight: this.component_queueFontWeight
      };
    },
    external_component_queueFont: function() {
      return {
        fontFamily: this.external_component_queueFontFamily,
        fontSize: this.external_component_queueFontSize,
        fontWeight: this.external_component_queueFontWeight
      };
    },
    boundaryFont: function() {
      return {
        fontFamily: this.boundaryFontFamily,
        fontSize: this.boundaryFontSize,
        fontWeight: this.boundaryFontWeight
      };
    },
    messageFont: function() {
      return {
        fontFamily: this.messageFontFamily,
        fontSize: this.messageFontSize,
        fontWeight: this.messageFontWeight
      };
    }
  },
  pie: {
    ...Zt.pie,
    useWidth: 984
  },
  requirement: {
    ...Zt.requirement,
    useWidth: void 0
  },
  gitGraph: {
    ...Zt.gitGraph,
    // TODO: This is a temporary override for `gitGraph`, since every other
    //       diagram does have `useMaxWidth`, but instead sets it to `true`.
    //       Should we set this to `true` instead?
    useMaxWidth: false
  },
  sankey: {
    ...Zt.sankey,
    // this is false, unlike every other diagram (other than gitGraph)
    // TODO: can we make this default to `true` instead?
    useMaxWidth: false
  }
};
var Fa = (t9, e = "") => Object.keys(t9).reduce((i, r) => Array.isArray(t9[r]) ? i : typeof t9[r] == "object" && t9[r] !== null ? [...i, e + r, ...Fa(t9[r], "")] : [...i, e + r], []);
var fp = new Set(Fa(Ba, ""));
var dp = Ba;
var Vi = (t9) => {
  if (L.debug("sanitizeDirective called with", t9), !(typeof t9 != "object" || t9 == null)) {
    if (Array.isArray(t9)) {
      t9.forEach((e) => Vi(e));
      return;
    }
    for (const e of Object.keys(t9)) {
      if (L.debug("Checking key", e), e.startsWith("__") || e.includes("proto") || e.includes("constr") || !fp.has(e) || t9[e] == null) {
        L.debug("sanitize deleting key: ", e), delete t9[e];
        continue;
      }
      if (typeof t9[e] == "object") {
        L.debug("sanitizing object", e), Vi(t9[e]);
        continue;
      }
      const i = ["themeCSS", "fontFamily", "altFontFamily"];
      for (const r of i)
        e.includes(r) && (L.debug("sanitizing css option", e), t9[e] = pp(t9[e]));
    }
    if (t9.themeVariables)
      for (const e of Object.keys(t9.themeVariables)) {
        const i = t9.themeVariables[e];
        i != null && i.match && !i.match(/^[\d "#%(),.;A-Za-z]+$/) && (t9.themeVariables[e] = "");
      }
    L.debug("After sanitization", t9);
  }
};
var pp = (t9) => {
  let e = 0, i = 0;
  for (const r of t9) {
    if (e < i)
      return "{ /* ERROR: Unbalanced CSS */ }";
    r === "{" ? e++ : r === "}" && i++;
  }
  return e !== i ? "{ /* ERROR: Unbalanced CSS */ }" : t9;
};
var La = /^-{3}\s*[\n\r](.*?)[\n\r]-{3}\s*[\n\r]+/s;
var Ge = /%{2}{\s*(?:(\w+)\s*:|(\w+))\s*(?:(\w+)|((?:(?!}%{2}).|\r?\n)*))?\s*(?:}%{2})?/gi;
var gp = /\s*%%.*\n/gm;
var Aa = class extends Error {
  constructor(e) {
    super(e), this.name = "UnknownDiagramError";
  }
};
var Ae = {};
var mr = function(t9, e) {
  t9 = t9.replace(La, "").replace(Ge, "").replace(gp, `
`);
  for (const [i, { detector: r }] of Object.entries(Ae))
    if (r(t9, e))
      return i;
  throw new Aa(
    `No diagram type detected matching given configuration for text: ${t9}`
  );
};
var Ea = (...t9) => {
  for (const { id: e, detector: i, loader: r } of t9)
    Ma(e, i, r);
};
var Ma = (t9, e, i) => {
  Ae[t9] ? L.error(`Detector with key ${t9} already exists`) : Ae[t9] = { detector: e, loader: i }, L.debug(`Detector with key ${t9} added${i ? " with loader" : ""}`);
};
var mp = (t9) => Ae[t9].loader;
var ln = (t9, e, { depth: i = 2, clobber: r = false } = {}) => {
  const n = { depth: i, clobber: r };
  return Array.isArray(e) && !Array.isArray(t9) ? (e.forEach((o) => ln(t9, o, n)), t9) : Array.isArray(e) && Array.isArray(t9) ? (e.forEach((o) => {
    t9.includes(o) || t9.push(o);
  }), t9) : t9 === void 0 || i <= 0 ? t9 != null && typeof t9 == "object" && typeof e == "object" ? Object.assign(t9, e) : e : (e !== void 0 && typeof t9 == "object" && typeof e == "object" && Object.keys(e).forEach((o) => {
    typeof e[o] == "object" && (t9[o] === void 0 || typeof t9[o] == "object") ? (t9[o] === void 0 && (t9[o] = Array.isArray(e[o]) ? [] : {}), t9[o] = ln(t9[o], e[o], { depth: i - 1, clobber: r })) : (r || typeof t9[o] != "object" && typeof e[o] != "object") && (t9[o] = e[o]);
  }), t9);
};
var nt = ln;
var _p = typeof global == "object" && global && global.Object === Object && global;
var Oa = _p;
var yp = typeof self == "object" && self && self.Object === Object && self;
var Cp = Oa || yp || Function("return this")();
var Dt = Cp;
var xp = Dt.Symbol;
var Xi = xp;
var $a = Object.prototype;
var bp = $a.hasOwnProperty;
var Tp = $a.toString;
var ze = Xi ? Xi.toStringTag : void 0;
function Sp(t9) {
  var e = bp.call(t9, ze), i = t9[ze];
  try {
    t9[ze] = void 0;
    var r = true;
  } catch {
  }
  var n = Tp.call(t9);
  return r && (e ? t9[ze] = i : delete t9[ze]), n;
}
var vp = Object.prototype;
var kp = vp.toString;
function wp(t9) {
  return kp.call(t9);
}
var Bp = "[object Null]";
var Fp = "[object Undefined]";
var Xo = Xi ? Xi.toStringTag : void 0;
function $e(t9) {
  return t9 == null ? t9 === void 0 ? Fp : Bp : Xo && Xo in Object(t9) ? Sp(t9) : wp(t9);
}
function ge(t9) {
  var e = typeof t9;
  return t9 != null && (e == "object" || e == "function");
}
var Lp = "[object AsyncFunction]";
var Ap = "[object Function]";
var Ep = "[object GeneratorFunction]";
var Mp = "[object Proxy]";
function Dn(t9) {
  if (!ge(t9))
    return false;
  var e = $e(t9);
  return e == Ap || e == Ep || e == Lp || e == Mp;
}
var Op = Dt["__core-js_shared__"];
var Hr = Op;
var Ko = function() {
  var t9 = /[^.]+$/.exec(Hr && Hr.keys && Hr.keys.IE_PROTO || "");
  return t9 ? "Symbol(src)_1." + t9 : "";
}();
function $p(t9) {
  return !!Ko && Ko in t9;
}
var Ip = Function.prototype;
var Dp = Ip.toString;
function me(t9) {
  if (t9 != null) {
    try {
      return Dp.call(t9);
    } catch {
    }
    try {
      return t9 + "";
    } catch {
    }
  }
  return "";
}
var Np = /[\\^$.*+?()[\]{}|]/g;
var Rp = /^\[object .+?Constructor\]$/;
var Pp = Function.prototype;
var qp = Object.prototype;
var zp = Pp.toString;
var Wp = qp.hasOwnProperty;
var Hp = RegExp(
  "^" + zp.call(Wp).replace(Np, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function jp(t9) {
  if (!ge(t9) || $p(t9))
    return false;
  var e = Dn(t9) ? Hp : Rp;
  return e.test(me(t9));
}
function Up(t9, e) {
  return t9 == null ? void 0 : t9[e];
}
function _e(t9, e) {
  var i = Up(t9, e);
  return jp(i) ? i : void 0;
}
var Yp = _e(Object, "create");
var ii = Yp;
function Gp() {
  this.__data__ = ii ? ii(null) : {}, this.size = 0;
}
function Vp(t9) {
  var e = this.has(t9) && delete this.__data__[t9];
  return this.size -= e ? 1 : 0, e;
}
var Xp = "__lodash_hash_undefined__";
var Kp = Object.prototype;
var Zp = Kp.hasOwnProperty;
function Jp(t9) {
  var e = this.__data__;
  if (ii) {
    var i = e[t9];
    return i === Xp ? void 0 : i;
  }
  return Zp.call(e, t9) ? e[t9] : void 0;
}
var Qp = Object.prototype;
var tg = Qp.hasOwnProperty;
function eg(t9) {
  var e = this.__data__;
  return ii ? e[t9] !== void 0 : tg.call(e, t9);
}
var ig = "__lodash_hash_undefined__";
function rg(t9, e) {
  var i = this.__data__;
  return this.size += this.has(t9) ? 0 : 1, i[t9] = ii && e === void 0 ? ig : e, this;
}
function de(t9) {
  var e = -1, i = t9 == null ? 0 : t9.length;
  for (this.clear(); ++e < i; ) {
    var r = t9[e];
    this.set(r[0], r[1]);
  }
}
de.prototype.clear = Gp;
de.prototype.delete = Vp;
de.prototype.get = Jp;
de.prototype.has = eg;
de.prototype.set = rg;
function ng() {
  this.__data__ = [], this.size = 0;
}
function _r(t9, e) {
  return t9 === e || t9 !== t9 && e !== e;
}
function yr(t9, e) {
  for (var i = t9.length; i--; )
    if (_r(t9[i][0], e))
      return i;
  return -1;
}
var og = Array.prototype;
var sg = og.splice;
function ag(t9) {
  var e = this.__data__, i = yr(e, t9);
  if (i < 0)
    return false;
  var r = e.length - 1;
  return i == r ? e.pop() : sg.call(e, i, 1), --this.size, true;
}
function lg(t9) {
  var e = this.__data__, i = yr(e, t9);
  return i < 0 ? void 0 : e[i][1];
}
function hg(t9) {
  return yr(this.__data__, t9) > -1;
}
function cg(t9, e) {
  var i = this.__data__, r = yr(i, t9);
  return r < 0 ? (++this.size, i.push([t9, e])) : i[r][1] = e, this;
}
function Gt(t9) {
  var e = -1, i = t9 == null ? 0 : t9.length;
  for (this.clear(); ++e < i; ) {
    var r = t9[e];
    this.set(r[0], r[1]);
  }
}
Gt.prototype.clear = ng;
Gt.prototype.delete = ag;
Gt.prototype.get = lg;
Gt.prototype.has = hg;
Gt.prototype.set = cg;
var ug = _e(Dt, "Map");
var ri = ug;
function fg() {
  this.size = 0, this.__data__ = {
    hash: new de(),
    map: new (ri || Gt)(),
    string: new de()
  };
}
function dg(t9) {
  var e = typeof t9;
  return e == "string" || e == "number" || e == "symbol" || e == "boolean" ? t9 !== "__proto__" : t9 === null;
}
function Cr(t9, e) {
  var i = t9.__data__;
  return dg(e) ? i[typeof e == "string" ? "string" : "hash"] : i.map;
}
function pg(t9) {
  var e = Cr(this, t9).delete(t9);
  return this.size -= e ? 1 : 0, e;
}
function gg(t9) {
  return Cr(this, t9).get(t9);
}
function mg(t9) {
  return Cr(this, t9).has(t9);
}
function _g(t9, e) {
  var i = Cr(this, t9), r = i.size;
  return i.set(t9, e), this.size += i.size == r ? 0 : 1, this;
}
function ne(t9) {
  var e = -1, i = t9 == null ? 0 : t9.length;
  for (this.clear(); ++e < i; ) {
    var r = t9[e];
    this.set(r[0], r[1]);
  }
}
ne.prototype.clear = fg;
ne.prototype.delete = pg;
ne.prototype.get = gg;
ne.prototype.has = mg;
ne.prototype.set = _g;
var yg = "Expected a function";
function ui(t9, e) {
  if (typeof t9 != "function" || e != null && typeof e != "function")
    throw new TypeError(yg);
  var i = function() {
    var r = arguments, n = e ? e.apply(this, r) : r[0], o = i.cache;
    if (o.has(n))
      return o.get(n);
    var s = t9.apply(this, r);
    return i.cache = o.set(n, s) || o, s;
  };
  return i.cache = new (ui.Cache || ne)(), i;
}
ui.Cache = ne;
function Cg() {
  this.__data__ = new Gt(), this.size = 0;
}
function xg(t9) {
  var e = this.__data__, i = e.delete(t9);
  return this.size = e.size, i;
}
function bg(t9) {
  return this.__data__.get(t9);
}
function Tg(t9) {
  return this.__data__.has(t9);
}
var Sg = 200;
function vg(t9, e) {
  var i = this.__data__;
  if (i instanceof Gt) {
    var r = i.__data__;
    if (!ri || r.length < Sg - 1)
      return r.push([t9, e]), this.size = ++i.size, this;
    i = this.__data__ = new ne(r);
  }
  return i.set(t9, e), this.size = i.size, this;
}
function Ie(t9) {
  var e = this.__data__ = new Gt(t9);
  this.size = e.size;
}
Ie.prototype.clear = Cg;
Ie.prototype.delete = xg;
Ie.prototype.get = bg;
Ie.prototype.has = Tg;
Ie.prototype.set = vg;
var kg = function() {
  try {
    var t9 = _e(Object, "defineProperty");
    return t9({}, "", {}), t9;
  } catch {
  }
}();
var Ki = kg;
function Nn(t9, e, i) {
  e == "__proto__" && Ki ? Ki(t9, e, {
    configurable: true,
    enumerable: true,
    value: i,
    writable: true
  }) : t9[e] = i;
}
function hn(t9, e, i) {
  (i !== void 0 && !_r(t9[e], i) || i === void 0 && !(e in t9)) && Nn(t9, e, i);
}
function wg(t9) {
  return function(e, i, r) {
    for (var n = -1, o = Object(e), s = r(e), a = s.length; a--; ) {
      var l = s[t9 ? a : ++n];
      if (i(o[l], l, o) === false)
        break;
    }
    return e;
  };
}
var Bg = wg();
var Fg = Bg;
var Ia = typeof exports == "object" && exports && !exports.nodeType && exports;
var Zo = Ia && typeof module == "object" && module && !module.nodeType && module;
var Lg = Zo && Zo.exports === Ia;
var Jo = Lg ? Dt.Buffer : void 0;
var Qo = Jo ? Jo.allocUnsafe : void 0;
function Ag(t9, e) {
  if (e)
    return t9.slice();
  var i = t9.length, r = Qo ? Qo(i) : new t9.constructor(i);
  return t9.copy(r), r;
}
var Eg = Dt.Uint8Array;
var ts = Eg;
function Mg(t9) {
  var e = new t9.constructor(t9.byteLength);
  return new ts(e).set(new ts(t9)), e;
}
function Og(t9, e) {
  var i = e ? Mg(t9.buffer) : t9.buffer;
  return new t9.constructor(i, t9.byteOffset, t9.length);
}
function $g(t9, e) {
  var i = -1, r = t9.length;
  for (e || (e = Array(r)); ++i < r; )
    e[i] = t9[i];
  return e;
}
var es = Object.create;
var Ig = function() {
  function t9() {
  }
  return function(e) {
    if (!ge(e))
      return {};
    if (es)
      return es(e);
    t9.prototype = e;
    var i = new t9();
    return t9.prototype = void 0, i;
  };
}();
var Dg = Ig;
function Da(t9, e) {
  return function(i) {
    return t9(e(i));
  };
}
var Ng = Da(Object.getPrototypeOf, Object);
var Na = Ng;
var Rg = Object.prototype;
function xr(t9) {
  var e = t9 && t9.constructor, i = typeof e == "function" && e.prototype || Rg;
  return t9 === i;
}
function Pg(t9) {
  return typeof t9.constructor == "function" && !xr(t9) ? Dg(Na(t9)) : {};
}
function fi(t9) {
  return t9 != null && typeof t9 == "object";
}
var qg = "[object Arguments]";
function is(t9) {
  return fi(t9) && $e(t9) == qg;
}
var Ra = Object.prototype;
var zg = Ra.hasOwnProperty;
var Wg = Ra.propertyIsEnumerable;
var Hg = is(function() {
  return arguments;
}()) ? is : function(t9) {
  return fi(t9) && zg.call(t9, "callee") && !Wg.call(t9, "callee");
};
var Zi = Hg;
var jg = Array.isArray;
var Ji = jg;
var Ug = 9007199254740991;
function Pa(t9) {
  return typeof t9 == "number" && t9 > -1 && t9 % 1 == 0 && t9 <= Ug;
}
function br(t9) {
  return t9 != null && Pa(t9.length) && !Dn(t9);
}
function Yg(t9) {
  return fi(t9) && br(t9);
}
function Gg() {
  return false;
}
var qa = typeof exports == "object" && exports && !exports.nodeType && exports;
var rs = qa && typeof module == "object" && module && !module.nodeType && module;
var Vg = rs && rs.exports === qa;
var ns = Vg ? Dt.Buffer : void 0;
var Xg = ns ? ns.isBuffer : void 0;
var Kg = Xg || Gg;
var Rn = Kg;
var Zg = "[object Object]";
var Jg = Function.prototype;
var Qg = Object.prototype;
var za = Jg.toString;
var tm = Qg.hasOwnProperty;
var em = za.call(Object);
function im(t9) {
  if (!fi(t9) || $e(t9) != Zg)
    return false;
  var e = Na(t9);
  if (e === null)
    return true;
  var i = tm.call(e, "constructor") && e.constructor;
  return typeof i == "function" && i instanceof i && za.call(i) == em;
}
var rm = "[object Arguments]";
var nm = "[object Array]";
var om = "[object Boolean]";
var sm = "[object Date]";
var am = "[object Error]";
var lm = "[object Function]";
var hm = "[object Map]";
var cm = "[object Number]";
var um = "[object Object]";
var fm = "[object RegExp]";
var dm = "[object Set]";
var pm = "[object String]";
var gm = "[object WeakMap]";
var mm = "[object ArrayBuffer]";
var _m = "[object DataView]";
var ym = "[object Float32Array]";
var Cm = "[object Float64Array]";
var xm = "[object Int8Array]";
var bm = "[object Int16Array]";
var Tm = "[object Int32Array]";
var Sm = "[object Uint8Array]";
var vm = "[object Uint8ClampedArray]";
var km = "[object Uint16Array]";
var wm = "[object Uint32Array]";
var Y = {};
Y[ym] = Y[Cm] = Y[xm] = Y[bm] = Y[Tm] = Y[Sm] = Y[vm] = Y[km] = Y[wm] = true;
Y[rm] = Y[nm] = Y[mm] = Y[om] = Y[_m] = Y[sm] = Y[am] = Y[lm] = Y[hm] = Y[cm] = Y[um] = Y[fm] = Y[dm] = Y[pm] = Y[gm] = false;
function Bm(t9) {
  return fi(t9) && Pa(t9.length) && !!Y[$e(t9)];
}
function Fm(t9) {
  return function(e) {
    return t9(e);
  };
}
var Wa = typeof exports == "object" && exports && !exports.nodeType && exports;
var Ve = Wa && typeof module == "object" && module && !module.nodeType && module;
var Lm = Ve && Ve.exports === Wa;
var jr = Lm && Oa.process;
var Am = function() {
  try {
    var t9 = Ve && Ve.require && Ve.require("util").types;
    return t9 || jr && jr.binding && jr.binding("util");
  } catch {
  }
}();
var os = Am;
var ss = os && os.isTypedArray;
var Em = ss ? Fm(ss) : Bm;
var Pn = Em;
function cn(t9, e) {
  if (!(e === "constructor" && typeof t9[e] == "function") && e != "__proto__")
    return t9[e];
}
var Mm = Object.prototype;
var Om = Mm.hasOwnProperty;
function $m(t9, e, i) {
  var r = t9[e];
  (!(Om.call(t9, e) && _r(r, i)) || i === void 0 && !(e in t9)) && Nn(t9, e, i);
}
function Im(t9, e, i, r) {
  var n = !i;
  i || (i = {});
  for (var o = -1, s = e.length; ++o < s; ) {
    var a = e[o], l = r ? r(i[a], t9[a], a, i, t9) : void 0;
    l === void 0 && (l = t9[a]), n ? Nn(i, a, l) : $m(i, a, l);
  }
  return i;
}
function Dm(t9, e) {
  for (var i = -1, r = Array(t9); ++i < t9; )
    r[i] = e(i);
  return r;
}
var Nm = 9007199254740991;
var Rm = /^(?:0|[1-9]\d*)$/;
function Ha(t9, e) {
  var i = typeof t9;
  return e = e ?? Nm, !!e && (i == "number" || i != "symbol" && Rm.test(t9)) && t9 > -1 && t9 % 1 == 0 && t9 < e;
}
var Pm = Object.prototype;
var qm = Pm.hasOwnProperty;
function zm(t9, e) {
  var i = Ji(t9), r = !i && Zi(t9), n = !i && !r && Rn(t9), o = !i && !r && !n && Pn(t9), s = i || r || n || o, a = s ? Dm(t9.length, String) : [], l = a.length;
  for (var h in t9)
    (e || qm.call(t9, h)) && !(s && // Safari 9 has enumerable `arguments.length` in strict mode.
    (h == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    n && (h == "offset" || h == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    o && (h == "buffer" || h == "byteLength" || h == "byteOffset") || // Skip index properties.
    Ha(h, l))) && a.push(h);
  return a;
}
function Wm(t9) {
  var e = [];
  if (t9 != null)
    for (var i in Object(t9))
      e.push(i);
  return e;
}
var Hm = Object.prototype;
var jm = Hm.hasOwnProperty;
function Um(t9) {
  if (!ge(t9))
    return Wm(t9);
  var e = xr(t9), i = [];
  for (var r in t9)
    r == "constructor" && (e || !jm.call(t9, r)) || i.push(r);
  return i;
}
function ja(t9) {
  return br(t9) ? zm(t9, true) : Um(t9);
}
function Ym(t9) {
  return Im(t9, ja(t9));
}
function Gm(t9, e, i, r, n, o, s) {
  var a = cn(t9, i), l = cn(e, i), h = s.get(l);
  if (h) {
    hn(t9, i, h);
    return;
  }
  var c = o ? o(a, l, i + "", t9, e, s) : void 0, f = c === void 0;
  if (f) {
    var g = Ji(l), p = !g && Rn(l), _ = !g && !p && Pn(l);
    c = l, g || p || _ ? Ji(a) ? c = a : Yg(a) ? c = $g(a) : p ? (f = false, c = Ag(l, true)) : _ ? (f = false, c = Og(l, true)) : c = [] : im(l) || Zi(l) ? (c = a, Zi(a) ? c = Ym(a) : (!ge(a) || Dn(a)) && (c = Pg(l))) : f = false;
  }
  f && (s.set(l, c), n(c, l, r, o, s), s.delete(l)), hn(t9, i, c);
}
function Ua(t9, e, i, r, n) {
  t9 !== e && Fg(e, function(o, s) {
    if (n || (n = new Ie()), ge(o))
      Gm(t9, e, s, i, Ua, r, n);
    else {
      var a = r ? r(cn(t9, s), o, s + "", t9, e, n) : void 0;
      a === void 0 && (a = o), hn(t9, s, a);
    }
  }, ja);
}
function Ya(t9) {
  return t9;
}
function Vm(t9, e, i) {
  switch (i.length) {
    case 0:
      return t9.call(e);
    case 1:
      return t9.call(e, i[0]);
    case 2:
      return t9.call(e, i[0], i[1]);
    case 3:
      return t9.call(e, i[0], i[1], i[2]);
  }
  return t9.apply(e, i);
}
var as = Math.max;
function Xm(t9, e, i) {
  return e = as(e === void 0 ? t9.length - 1 : e, 0), function() {
    for (var r = arguments, n = -1, o = as(r.length - e, 0), s = Array(o); ++n < o; )
      s[n] = r[e + n];
    n = -1;
    for (var a = Array(e + 1); ++n < e; )
      a[n] = r[n];
    return a[e] = i(s), Vm(t9, this, a);
  };
}
function Km(t9) {
  return function() {
    return t9;
  };
}
var Zm = Ki ? function(t9, e) {
  return Ki(t9, "toString", {
    configurable: true,
    enumerable: false,
    value: Km(e),
    writable: true
  });
} : Ya;
var Jm = Zm;
var Qm = 800;
var t0 = 16;
var e0 = Date.now;
function i0(t9) {
  var e = 0, i = 0;
  return function() {
    var r = e0(), n = t0 - (r - i);
    if (i = r, n > 0) {
      if (++e >= Qm)
        return arguments[0];
    } else
      e = 0;
    return t9.apply(void 0, arguments);
  };
}
var r0 = i0(Jm);
var n0 = r0;
function o0(t9, e) {
  return n0(Xm(t9, e, Ya), t9 + "");
}
function s0(t9, e, i) {
  if (!ge(i))
    return false;
  var r = typeof e;
  return (r == "number" ? br(i) && Ha(e, i.length) : r == "string" && e in i) ? _r(i[e], t9) : false;
}
function a0(t9) {
  return o0(function(e, i) {
    var r = -1, n = i.length, o = n > 1 ? i[n - 1] : void 0, s = n > 2 ? i[2] : void 0;
    for (o = t9.length > 3 && typeof o == "function" ? (n--, o) : void 0, s && s0(i[0], i[1], s) && (o = n < 3 ? void 0 : o, n = 1), e = Object(e); ++r < n; ) {
      var a = i[r];
      a && t9(e, a, r, o);
    }
    return e;
  });
}
var l0 = a0(function(t9, e, i) {
  Ua(t9, e, i);
});
var h0 = l0;
var c0 = "​";
var u0 = {
  curveBasis: Nf,
  curveBasisClosed: Rf,
  curveBasisOpen: Pf,
  curveBumpX: If,
  curveBumpY: Df,
  curveBundle: qf,
  curveCardinalClosed: Wf,
  curveCardinalOpen: Hf,
  curveCardinal: zf,
  curveCatmullRomClosed: Uf,
  curveCatmullRomOpen: Yf,
  curveCatmullRom: jf,
  curveLinear: $f,
  curveLinearClosed: Gf,
  curveMonotoneX: Vf,
  curveMonotoneY: Xf,
  curveNatural: Kf,
  curveStep: Zf,
  curveStepAfter: Qf,
  curveStepBefore: Jf
};
var f0 = /\s*(?:(\w+)(?=:):|(\w+))\s*(?:(\w+)|((?:(?!}%{2}).|\r?\n)*))?\s*(?:}%{2})?/gi;
var d0 = function(t9, e) {
  const i = Ga(t9, /(?:init\b)|(?:initialize\b)/);
  let r = {};
  if (Array.isArray(i)) {
    const s = i.map((a) => a.args);
    Vi(s), r = nt(r, [...s]);
  } else
    r = i.args;
  if (!r)
    return;
  let n = mr(t9, e);
  const o = "config";
  return r[o] !== void 0 && (n === "flowchart-v2" && (n = "flowchart"), r[n] = r[o], delete r[o]), r;
};
var Ga = function(t9, e = null) {
  try {
    const i = new RegExp(
      `[%]{2}(?![{]${f0.source})(?=[}][%]{2}).*
`,
      "ig"
    );
    t9 = t9.trim().replace(i, "").replace(/'/gm, '"'), L.debug(
      `Detecting diagram directive${e !== null ? " type:" + e : ""} based on the text:${t9}`
    );
    let r;
    const n = [];
    for (; (r = Ge.exec(t9)) !== null; )
      if (r.index === Ge.lastIndex && Ge.lastIndex++, r && !e || e && r[1] && r[1].match(e) || e && r[2] && r[2].match(e)) {
        const o = r[1] ? r[1] : r[2], s = r[3] ? r[3].trim() : r[4] ? JSON.parse(r[4].trim()) : null;
        n.push({ type: o, args: s });
      }
    return n.length === 0 ? { type: t9, args: null } : n.length === 1 ? n[0] : n;
  } catch (i) {
    return L.error(
      `ERROR: ${i.message} - Unable to parse directive type: '${e}' based on the text: '${t9}'`
    ), { type: void 0, args: null };
  }
};
var p0 = function(t9) {
  return t9.replace(Ge, "");
};
var g0 = function(t9, e) {
  for (const [i, r] of e.entries())
    if (r.match(t9))
      return i;
  return -1;
};
function m0(t9, e) {
  if (!t9)
    return e;
  const i = `curve${t9.charAt(0).toUpperCase() + t9.slice(1)}`;
  return u0[i] ?? e;
}
function _0(t9, e) {
  const i = t9.trim();
  if (i)
    return e.securityLevel !== "loose" ? Es(i) : i;
}
var y0 = (t9, ...e) => {
  const i = t9.split("."), r = i.length - 1, n = i[r];
  let o = window;
  for (let s = 0; s < r; s++)
    if (o = o[i[s]], !o) {
      L.error(`Function name: ${t9} not found in window`);
      return;
    }
  o[n](...e);
};
function Va(t9, e) {
  return !t9 || !e ? 0 : Math.sqrt(Math.pow(e.x - t9.x, 2) + Math.pow(e.y - t9.y, 2));
}
function C0(t9) {
  let e, i = 0;
  t9.forEach((n) => {
    i += Va(n, e), e = n;
  });
  const r = i / 2;
  return qn(t9, r);
}
function x0(t9) {
  return t9.length === 1 ? t9[0] : C0(t9);
}
var ls = (t9, e = 2) => {
  const i = Math.pow(10, e);
  return Math.round(t9 * i) / i;
};
var qn = (t9, e) => {
  let i, r = e;
  for (const n of t9) {
    if (i) {
      const o = Va(n, i);
      if (o < r)
        r -= o;
      else {
        const s = r / o;
        if (s <= 0)
          return i;
        if (s >= 1)
          return { x: n.x, y: n.y };
        if (s > 0 && s < 1)
          return {
            x: ls((1 - s) * i.x + s * n.x, 5),
            y: ls((1 - s) * i.y + s * n.y, 5)
          };
      }
    }
    i = n;
  }
  throw new Error("Could not find a suitable point for the given distance");
};
var b0 = (t9, e, i) => {
  L.info(`our points ${JSON.stringify(e)}`), e[0] !== i && (e = e.reverse());
  const n = qn(e, 25), o = t9 ? 10 : 5, s = Math.atan2(e[0].y - n.y, e[0].x - n.x), a = { x: 0, y: 0 };
  return a.x = Math.sin(s) * o + (e[0].x + n.x) / 2, a.y = -Math.cos(s) * o + (e[0].y + n.y) / 2, a;
};
function T0(t9, e, i) {
  const r = structuredClone(i);
  L.info("our points", r), e !== "start_left" && e !== "start_right" && r.reverse();
  const n = 25 + t9, o = qn(r, n), s = 10 + t9 * 0.5, a = Math.atan2(r[0].y - o.y, r[0].x - o.x), l = { x: 0, y: 0 };
  return e === "start_left" ? (l.x = Math.sin(a + Math.PI) * s + (r[0].x + o.x) / 2, l.y = -Math.cos(a + Math.PI) * s + (r[0].y + o.y) / 2) : e === "end_right" ? (l.x = Math.sin(a - Math.PI) * s + (r[0].x + o.x) / 2 - 5, l.y = -Math.cos(a - Math.PI) * s + (r[0].y + o.y) / 2 - 5) : e === "end_left" ? (l.x = Math.sin(a) * s + (r[0].x + o.x) / 2 - 5, l.y = -Math.cos(a) * s + (r[0].y + o.y) / 2 - 5) : (l.x = Math.sin(a) * s + (r[0].x + o.x) / 2, l.y = -Math.cos(a) * s + (r[0].y + o.y) / 2), l;
}
function S0(t9) {
  let e = "", i = "";
  for (const r of t9)
    r !== void 0 && (r.startsWith("color:") || r.startsWith("text-align:") ? i = i + r + ";" : e = e + r + ";");
  return { style: e, labelStyle: i };
}
var hs = 0;
var v0 = () => (hs++, "id-" + Math.random().toString(36).substr(2, 12) + "-" + hs);
function k0(t9) {
  let e = "";
  const i = "0123456789abcdef", r = i.length;
  for (let n = 0; n < t9; n++)
    e += i.charAt(Math.floor(Math.random() * r));
  return e;
}
var w0 = (t9) => k0(t9.length);
var B0 = function() {
  return {
    x: 0,
    y: 0,
    fill: void 0,
    anchor: "start",
    style: "#666",
    width: 100,
    height: 100,
    textMargin: 0,
    rx: 0,
    ry: 0,
    valign: void 0,
    text: ""
  };
};
var F0 = function(t9, e) {
  const i = e.text.replace(In.lineBreakRegex, " "), [, r] = Wn(e.fontSize), n = t9.append("text");
  n.attr("x", e.x), n.attr("y", e.y), n.style("text-anchor", e.anchor), n.style("font-family", e.fontFamily), n.style("font-size", r), n.style("font-weight", e.fontWeight), n.attr("fill", e.fill), e.class !== void 0 && n.attr("class", e.class);
  const o = n.append("tspan");
  return o.attr("x", e.x + e.textMargin * 2), o.attr("fill", e.fill), o.text(i), n;
};
var L0 = ui(
  (t9, e, i) => {
    if (!t9 || (i = Object.assign(
      { fontSize: 12, fontWeight: 400, fontFamily: "Arial", joinWith: "<br/>" },
      i
    ), In.lineBreakRegex.test(t9)))
      return t9;
    const r = t9.split(" "), n = [];
    let o = "";
    return r.forEach((s, a) => {
      const l = Qi(`${s} `, i), h = Qi(o, i);
      if (l > e) {
        const { hyphenatedStrings: g, remainingWord: p } = A0(s, e, "-", i);
        n.push(o, ...g), o = p;
      } else
        h + l >= e ? (n.push(o), o = s) : o = [o, s].filter(Boolean).join(" ");
      a + 1 === r.length && n.push(o);
    }), n.filter((s) => s !== "").join(i.joinWith);
  },
  (t9, e, i) => `${t9}${e}${i.fontSize}${i.fontWeight}${i.fontFamily}${i.joinWith}`
);
var A0 = ui(
  (t9, e, i = "-", r) => {
    r = Object.assign(
      { fontSize: 12, fontWeight: 400, fontFamily: "Arial", margin: 0 },
      r
    );
    const n = [...t9], o = [];
    let s = "";
    return n.forEach((a, l) => {
      const h = `${s}${a}`;
      if (Qi(h, r) >= e) {
        const f = l + 1, g = n.length === f, p = `${h}${i}`;
        o.push(g ? h : p), s = "";
      } else
        s = h;
    }), { hyphenatedStrings: o, remainingWord: s };
  },
  (t9, e, i = "-", r) => `${t9}${e}${i}${r.fontSize}${r.fontWeight}${r.fontFamily}`
);
function E0(t9, e) {
  return zn(t9, e).height;
}
function Qi(t9, e) {
  return zn(t9, e).width;
}
var zn = ui(
  (t9, e) => {
    const { fontSize: i = 12, fontFamily: r = "Arial", fontWeight: n = 400 } = e;
    if (!t9)
      return { width: 0, height: 0 };
    const [, o] = Wn(i), s = ["sans-serif", r], a = t9.split(In.lineBreakRegex), l = [], h = Ct("body");
    if (!h.remove)
      return { width: 0, height: 0, lineHeight: 0 };
    const c = h.append("svg");
    for (const g of s) {
      let p = 0;
      const _ = { width: 0, height: 0, lineHeight: 0 };
      for (const k of a) {
        const M = B0();
        M.text = k || c0;
        const q = F0(c, M).style("font-size", o).style("font-weight", n).style("font-family", g), v = (q._groups || q)[0][0].getBBox();
        if (v.width === 0 && v.height === 0)
          throw new Error("svg element not in render tree");
        _.width = Math.round(Math.max(_.width, v.width)), p = Math.round(v.height), _.height += p, _.lineHeight = Math.round(Math.max(_.lineHeight, p));
      }
      l.push(_);
    }
    c.remove();
    const f = isNaN(l[1].height) || isNaN(l[1].width) || isNaN(l[1].lineHeight) || l[0].height > l[1].height && l[0].width > l[1].width && l[0].lineHeight > l[1].lineHeight ? 0 : 1;
    return l[f];
  },
  (t9, e) => `${t9}${e.fontSize}${e.fontWeight}${e.fontFamily}`
);
var M0 = class {
  constructor(e = false, i) {
    this.count = 0, this.count = i ? i.length : 0, this.next = e ? () => this.count++ : () => Date.now();
  }
};
var wi;
var O0 = function(t9) {
  return wi = wi || document.createElement("div"), t9 = escape(t9).replace(/%26/g, "&").replace(/%23/g, "#").replace(/%3B/g, ";"), wi.innerHTML = t9, unescape(wi.textContent);
};
function Xa(t9) {
  return "str" in t9;
}
var $0 = (t9, e, i, r) => {
  var o;
  if (!r)
    return;
  const n = (o = t9.node()) == null ? void 0 : o.getBBox();
  n && t9.append("text").text(r).attr("x", n.x + n.width / 2).attr("y", -i).attr("class", e);
};
var Wn = (t9) => {
  if (typeof t9 == "number")
    return [t9, t9 + "px"];
  const e = parseInt(t9 ?? "", 10);
  return Number.isNaN(e) ? [void 0, void 0] : t9 === String(e) ? [e, t9 + "px"] : [e, t9];
};
function Ka(t9, e) {
  return h0({}, t9, e);
}
var Xe = {
  assignWithDepth: nt,
  wrapLabel: L0,
  calculateTextHeight: E0,
  calculateTextWidth: Qi,
  calculateTextDimensions: zn,
  cleanAndMerge: Ka,
  detectInit: d0,
  detectDirective: Ga,
  isSubstringInArray: g0,
  interpolateToCurve: m0,
  calcLabelPosition: x0,
  calcCardinalityPosition: b0,
  calcTerminalLabelPosition: T0,
  formatUrl: _0,
  getStylesFromArray: S0,
  generateId: v0,
  random: w0,
  runFunc: y0,
  entityDecode: O0,
  insertTitle: $0,
  parseFontSize: Wn,
  InitIDGenerator: M0
};
var Za = "comm";
var Ja = "rule";
var Qa = "decl";
var I0 = "@import";
var D0 = "@keyframes";
var N0 = Math.abs;
var Hn = String.fromCharCode;
function tl(t9) {
  return t9.trim();
}
function un(t9, e, i) {
  return t9.replace(e, i);
}
function R0(t9, e) {
  return t9.indexOf(e);
}
function ni(t9, e) {
  return t9.charCodeAt(e) | 0;
}
function oi(t9, e, i) {
  return t9.slice(e, i);
}
function te(t9) {
  return t9.length;
}
function el(t9) {
  return t9.length;
}
function Bi(t9, e) {
  return e.push(t9), t9;
}
var Tr = 1;
var Ee = 1;
var il = 0;
var Tt = 0;
var Z = 0;
var De = "";
function jn(t9, e, i, r, n, o, s) {
  return { value: t9, root: e, parent: i, type: r, props: n, children: o, line: Tr, column: Ee, length: s, return: "" };
}
function P0() {
  return Z;
}
function q0() {
  return Z = Tt > 0 ? ni(De, --Tt) : 0, Ee--, Z === 10 && (Ee = 1, Tr--), Z;
}
function wt() {
  return Z = Tt < il ? ni(De, Tt++) : 0, Ee++, Z === 10 && (Ee = 1, Tr++), Z;
}
function ce() {
  return ni(De, Tt);
}
function Ii() {
  return Tt;
}
function Sr(t9, e) {
  return oi(De, t9, e);
}
function fn(t9) {
  switch (t9) {
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
      return 5;
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    case 59:
    case 123:
    case 125:
      return 4;
    case 58:
      return 3;
    case 34:
    case 39:
    case 40:
    case 91:
      return 2;
    case 41:
    case 93:
      return 1;
  }
  return 0;
}
function z0(t9) {
  return Tr = Ee = 1, il = te(De = t9), Tt = 0, [];
}
function W0(t9) {
  return De = "", t9;
}
function Ur(t9) {
  return tl(Sr(Tt - 1, dn(t9 === 91 ? t9 + 2 : t9 === 40 ? t9 + 1 : t9)));
}
function H0(t9) {
  for (; (Z = ce()) && Z < 33; )
    wt();
  return fn(t9) > 2 || fn(Z) > 3 ? "" : " ";
}
function j0(t9, e) {
  for (; --e && wt() && !(Z < 48 || Z > 102 || Z > 57 && Z < 65 || Z > 70 && Z < 97); )
    ;
  return Sr(t9, Ii() + (e < 6 && ce() == 32 && wt() == 32));
}
function dn(t9) {
  for (; wt(); )
    switch (Z) {
      case t9:
        return Tt;
      case 34:
      case 39:
        t9 !== 34 && t9 !== 39 && dn(Z);
        break;
      case 40:
        t9 === 41 && dn(t9);
        break;
      case 92:
        wt();
        break;
    }
  return Tt;
}
function U0(t9, e) {
  for (; wt() && t9 + Z !== 47 + 10; )
    if (t9 + Z === 42 + 42 && ce() === 47)
      break;
  return "/*" + Sr(e, Tt - 1) + "*" + Hn(t9 === 47 ? t9 : wt());
}
function Y0(t9) {
  for (; !fn(ce()); )
    wt();
  return Sr(t9, Tt);
}
function G0(t9) {
  return W0(Di("", null, null, null, [""], t9 = z0(t9), 0, [0], t9));
}
function Di(t9, e, i, r, n, o, s, a, l) {
  for (var h = 0, c = 0, f = s, g = 0, p = 0, _ = 0, k = 1, M = 1, q = 1, v = 0, z = "", Q = n, X = o, G = r, W = z; M; )
    switch (_ = v, v = wt()) {
      case 40:
        if (_ != 108 && ni(W, f - 1) == 58) {
          R0(W += un(Ur(v), "&", "&\f"), "&\f") != -1 && (q = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        W += Ur(v);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        W += H0(_);
        break;
      case 92:
        W += j0(Ii() - 1, 7);
        continue;
      case 47:
        switch (ce()) {
          case 42:
          case 47:
            Bi(V0(U0(wt(), Ii()), e, i), l);
            break;
          default:
            W += "/";
        }
        break;
      case 123 * k:
        a[h++] = te(W) * q;
      case 125 * k:
      case 59:
      case 0:
        switch (v) {
          case 0:
          case 125:
            M = 0;
          case 59 + c:
            p > 0 && te(W) - f && Bi(p > 32 ? us(W + ";", r, i, f - 1) : us(un(W, " ", "") + ";", r, i, f - 2), l);
            break;
          case 59:
            W += ";";
          default:
            if (Bi(G = cs(W, e, i, h, c, n, a, z, Q = [], X = [], f), o), v === 123)
              if (c === 0)
                Di(W, e, G, G, Q, o, f, a, X);
              else
                switch (g === 99 && ni(W, 3) === 110 ? 100 : g) {
                  case 100:
                  case 109:
                  case 115:
                    Di(t9, G, G, r && Bi(cs(t9, G, G, 0, 0, n, a, z, n, Q = [], f), X), n, X, f, a, r ? Q : X);
                    break;
                  default:
                    Di(W, G, G, G, [""], X, 0, a, X);
                }
        }
        h = c = p = 0, k = q = 1, z = W = "", f = s;
        break;
      case 58:
        f = 1 + te(W), p = _;
      default:
        if (k < 1) {
          if (v == 123)
            --k;
          else if (v == 125 && k++ == 0 && q0() == 125)
            continue;
        }
        switch (W += Hn(v), v * k) {
          case 38:
            q = c > 0 ? 1 : (W += "\f", -1);
            break;
          case 44:
            a[h++] = (te(W) - 1) * q, q = 1;
            break;
          case 64:
            ce() === 45 && (W += Ur(wt())), g = ce(), c = f = te(z = W += Y0(Ii())), v++;
            break;
          case 45:
            _ === 45 && te(W) == 2 && (k = 0);
        }
    }
  return o;
}
function cs(t9, e, i, r, n, o, s, a, l, h, c) {
  for (var f = n - 1, g = n === 0 ? o : [""], p = el(g), _ = 0, k = 0, M = 0; _ < r; ++_)
    for (var q = 0, v = oi(t9, f + 1, f = N0(k = s[_])), z = t9; q < p; ++q)
      (z = tl(k > 0 ? g[q] + " " + v : un(v, /&\f/g, g[q]))) && (l[M++] = z);
  return jn(t9, e, i, n === 0 ? Ja : a, l, h, c);
}
function V0(t9, e, i) {
  return jn(t9, e, i, Za, Hn(P0()), oi(t9, 2, -2), 0);
}
function us(t9, e, i, r) {
  return jn(t9, e, i, Qa, oi(t9, 0, r), oi(t9, r + 1, -1), r);
}
function pn(t9, e) {
  for (var i = "", r = el(t9), n = 0; n < r; n++)
    i += e(t9[n], n, t9, e) || "";
  return i;
}
function X0(t9, e, i, r) {
  switch (t9.type) {
    case I0:
    case Qa:
      return t9.return = t9.return || t9.value;
    case Za:
      return "";
    case D0:
      return t9.return = t9.value + "{" + pn(t9.children, r) + "}";
    case Ja:
      t9.value = t9.props.join(",");
  }
  return te(i = pn(t9.children, r)) ? t9.return = t9.value + "{" + i + "}" : "";
}
var fs = "10.5.0";
var si = Object.freeze(dp);
var ut = nt({}, si);
var rl;
var Me = [];
var Ke = nt({}, si);
var vr = (t9, e) => {
  let i = nt({}, t9), r = {};
  for (const n of e)
    ol(n), r = nt(r, n);
  if (i = nt(i, r), r.theme && r.theme in Ut) {
    const n = nt({}, rl), o = nt(
      n.themeVariables || {},
      r.themeVariables
    );
    i.theme && i.theme in Ut && (i.themeVariables = Ut[i.theme].getThemeVariables(o));
  }
  return Ke = i, sl(Ke), Ke;
};
var K0 = (t9) => (ut = nt({}, si), ut = nt(ut, t9), t9.theme && Ut[t9.theme] && (ut.themeVariables = Ut[t9.theme].getThemeVariables(t9.themeVariables)), vr(ut, Me), ut);
var Z0 = (t9) => {
  rl = nt({}, t9);
};
var J0 = (t9) => (ut = nt(ut, t9), vr(ut, Me), ut);
var nl = () => nt({}, ut);
var Q0 = (t9) => (sl(t9), nt(Ke, t9), Ft());
var Ft = () => nt({}, Ke);
var ol = (t9) => {
  t9 && (["secure", ...ut.secure ?? []].forEach((e) => {
    Object.hasOwn(t9, e) && (L.debug(`Denied attempt to modify a secure key ${e}`, t9[e]), delete t9[e]);
  }), Object.keys(t9).forEach((e) => {
    e.startsWith("__") && delete t9[e];
  }), Object.keys(t9).forEach((e) => {
    typeof t9[e] == "string" && (t9[e].includes("<") || t9[e].includes(">") || t9[e].includes("url(data:")) && delete t9[e], typeof t9[e] == "object" && ol(t9[e]);
  }));
};
var t_ = (t9) => {
  Vi(t9), t9.fontFamily && (!t9.themeVariables || !t9.themeVariables.fontFamily) && (t9.themeVariables = { fontFamily: t9.fontFamily }), Me.push(t9), vr(ut, Me);
};
var tr = (t9 = ut) => {
  Me = [], vr(t9, Me);
};
var e_ = {
  LAZY_LOAD_DEPRECATED: "The configuration options lazyLoadedDiagrams and loadExternalDiagramsAtStartup are deprecated. Please use registerExternalDiagrams instead."
};
var ds = {};
var i_ = (t9) => {
  ds[t9] || (L.warn(e_[t9]), ds[t9] = true);
};
var sl = (t9) => {
  t9 && (t9.lazyLoadedDiagrams || t9.loadExternalDiagramsAtStartup) && i_("LAZY_LOAD_DEPRECATED");
};
var al = "c4";
var r_ = (t9) => /^\s*C4Context|C4Container|C4Component|C4Dynamic|C4Deployment/.test(t9);
var n_ = async () => {
  const { diagram: t9 } = await import("./c4Diagram-be6d31b5-UMFVCJJX.js");
  return { id: al, diagram: t9 };
};
var o_ = {
  id: al,
  detector: r_,
  loader: n_
};
var s_ = o_;
var ll = "flowchart";
var a_ = (t9, e) => {
  var i, r;
  return ((i = e == null ? void 0 : e.flowchart) == null ? void 0 : i.defaultRenderer) === "dagre-wrapper" || ((r = e == null ? void 0 : e.flowchart) == null ? void 0 : r.defaultRenderer) === "elk" ? false : /^\s*graph/.test(t9);
};
var l_ = async () => {
  const { diagram: t9 } = await import("./flowDiagram-2527b41f-EIQECUDK.js");
  return { id: ll, diagram: t9 };
};
var h_ = {
  id: ll,
  detector: a_,
  loader: l_
};
var c_ = h_;
var hl = "flowchart-v2";
var u_ = (t9, e) => {
  var i, r, n;
  return ((i = e == null ? void 0 : e.flowchart) == null ? void 0 : i.defaultRenderer) === "dagre-d3" || ((r = e == null ? void 0 : e.flowchart) == null ? void 0 : r.defaultRenderer) === "elk" ? false : /^\s*graph/.test(t9) && ((n = e == null ? void 0 : e.flowchart) == null ? void 0 : n.defaultRenderer) === "dagre-wrapper" ? true : /^\s*flowchart/.test(t9);
};
var f_ = async () => {
  const { diagram: t9 } = await import("./flowDiagram-v2-596664fa-2KRXDJ6F.js");
  return { id: hl, diagram: t9 };
};
var d_ = {
  id: hl,
  detector: u_,
  loader: f_
};
var p_ = d_;
var cl = "er";
var g_ = (t9) => /^\s*erDiagram/.test(t9);
var m_ = async () => {
  const { diagram: t9 } = await import("./erDiagram-5298a456-SNAQHZLH.js");
  return { id: cl, diagram: t9 };
};
var __ = {
  id: cl,
  detector: g_,
  loader: m_
};
var y_ = __;
var ul = "gitGraph";
var C_ = (t9) => /^\s*gitGraph/.test(t9);
var x_ = async () => {
  const { diagram: t9 } = await import("./gitGraphDiagram-0775767f-NLTVBWIA.js");
  return { id: ul, diagram: t9 };
};
var b_ = {
  id: ul,
  detector: C_,
  loader: x_
};
var T_ = b_;
var fl = "gantt";
var S_ = (t9) => /^\s*gantt/.test(t9);
var v_ = async () => {
  const { diagram: t9 } = await import("./ganttDiagram-9d08f276-BTFFNQYX.js");
  return { id: fl, diagram: t9 };
};
var k_ = {
  id: fl,
  detector: S_,
  loader: v_
};
var w_ = k_;
var dl = "info";
var B_ = (t9) => /^\s*info/.test(t9);
var F_ = async () => {
  const { diagram: t9 } = await import("./infoDiagram-121d662e-7FOB5EEH.js");
  return { id: dl, diagram: t9 };
};
var L_ = {
  id: dl,
  detector: B_,
  loader: F_
};
var pl = "pie";
var A_ = (t9) => /^\s*pie/.test(t9);
var E_ = async () => {
  const { diagram: t9 } = await import("./pieDiagram-eb4af4ec-VMH5EDCD.js");
  return { id: pl, diagram: t9 };
};
var M_ = {
  id: pl,
  detector: A_,
  loader: E_
};
var gl = "quadrantChart";
var O_ = (t9) => /^\s*quadrantChart/.test(t9);
var $_ = async () => {
  const { diagram: t9 } = await import("./quadrantDiagram-d3fede19-XNQX4JQP.js");
  return { id: gl, diagram: t9 };
};
var I_ = {
  id: gl,
  detector: O_,
  loader: $_
};
var D_ = I_;
var ml = "requirement";
var N_ = (t9) => /^\s*requirement(Diagram)?/.test(t9);
var R_ = async () => {
  const { diagram: t9 } = await import("./requirementDiagram-3865c41f-QY5MWOZM.js");
  return { id: ml, diagram: t9 };
};
var P_ = {
  id: ml,
  detector: N_,
  loader: R_
};
var q_ = P_;
var _l = "sequence";
var z_ = (t9) => /^\s*sequenceDiagram/.test(t9);
var W_ = async () => {
  const { diagram: t9 } = await import("./sequenceDiagram-a000a341-JPMKXMUT.js");
  return { id: _l, diagram: t9 };
};
var H_ = {
  id: _l,
  detector: z_,
  loader: W_
};
var j_ = H_;
var yl = "class";
var U_ = (t9, e) => {
  var i;
  return ((i = e == null ? void 0 : e.class) == null ? void 0 : i.defaultRenderer) === "dagre-wrapper" ? false : /^\s*classDiagram/.test(t9);
};
var Y_ = async () => {
  const { diagram: t9 } = await import("./classDiagram-ad76bf5a-FDJJQYMO.js");
  return { id: yl, diagram: t9 };
};
var G_ = {
  id: yl,
  detector: U_,
  loader: Y_
};
var V_ = G_;
var Cl = "classDiagram";
var X_ = (t9, e) => {
  var i;
  return /^\s*classDiagram/.test(t9) && ((i = e == null ? void 0 : e.class) == null ? void 0 : i.defaultRenderer) === "dagre-wrapper" ? true : /^\s*classDiagram-v2/.test(t9);
};
var K_ = async () => {
  const { diagram: t9 } = await import("./classDiagram-v2-6e58f5b0-4BBMLKXF.js");
  return { id: Cl, diagram: t9 };
};
var Z_ = {
  id: Cl,
  detector: X_,
  loader: K_
};
var J_ = Z_;
var xl = "state";
var Q_ = (t9, e) => {
  var i;
  return ((i = e == null ? void 0 : e.state) == null ? void 0 : i.defaultRenderer) === "dagre-wrapper" ? false : /^\s*stateDiagram/.test(t9);
};
var ty = async () => {
  const { diagram: t9 } = await import("./stateDiagram-c0051853-56C3IKM7.js");
  return { id: xl, diagram: t9 };
};
var ey = {
  id: xl,
  detector: Q_,
  loader: ty
};
var iy = ey;
var bl = "stateDiagram";
var ry = (t9, e) => {
  var i;
  return !!(/^\s*stateDiagram-v2/.test(t9) || /^\s*stateDiagram/.test(t9) && ((i = e == null ? void 0 : e.state) == null ? void 0 : i.defaultRenderer) === "dagre-wrapper");
};
var ny = async () => {
  const { diagram: t9 } = await import("./stateDiagram-v2-056072cc-TIILTP6H.js");
  return { id: bl, diagram: t9 };
};
var oy = {
  id: bl,
  detector: ry,
  loader: ny
};
var sy = oy;
var Tl = "journey";
var ay = (t9) => /^\s*journey/.test(t9);
var ly = async () => {
  const { diagram: t9 } = await import("./journeyDiagram-943d6037-E6P4RYYE.js");
  return { id: Tl, diagram: t9 };
};
var hy = {
  id: Tl,
  detector: ay,
  loader: ly
};
var cy = hy;
var uy = (t9) => {
  var n;
  const { securityLevel: e } = Ft();
  let i = Ct("body");
  if (e === "sandbox") {
    const s = ((n = Ct(`#i${t9}`).node()) == null ? void 0 : n.contentDocument) ?? document;
    i = Ct(s.body);
  }
  return i.select(`#${t9}`);
};
var fy = function(t9, e) {
  for (let i of e)
    t9.attr(i[0], i[1]);
};
var dy = function(t9, e, i) {
  let r = /* @__PURE__ */ new Map();
  return i ? (r.set("width", "100%"), r.set("style", `max-width: ${e}px;`)) : (r.set("height", t9), r.set("width", e)), r;
};
var Sl = function(t9, e, i, r) {
  const n = dy(e, i, r);
  fy(t9, n);
};
var py = function(t9, e, i, r) {
  const n = e.node().getBBox(), o = n.width, s = n.height;
  L.info(`SVG bounds: ${o}x${s}`, n);
  let a = 0, l = 0;
  L.info(`Graph bounds: ${a}x${l}`, t9), a = o + i * 2, l = s + i * 2, L.info(`Calculated bounds: ${a}x${l}`), Sl(e, l, a, r);
  const h = `${n.x - i} ${n.y - i} ${n.width + 2 * i} ${n.height + 2 * i}`;
  e.attr("viewBox", h);
};
var gy = (t9, e, i) => {
  L.debug(`renering svg for syntax error
`);
  const r = uy(e);
  r.attr("viewBox", "0 0 2412 512"), Sl(r, 100, 512, true);
  const n = r.append("g");
  n.append("path").attr("class", "error-icon").attr(
    "d",
    "m411.313,123.313c6.25-6.25 6.25-16.375 0-22.625s-16.375-6.25-22.625,0l-32,32-9.375,9.375-20.688-20.688c-12.484-12.5-32.766-12.5-45.25,0l-16,16c-1.261,1.261-2.304,2.648-3.31,4.051-21.739-8.561-45.324-13.426-70.065-13.426-105.867,0-192,86.133-192,192s86.133,192 192,192 192-86.133 192-192c0-24.741-4.864-48.327-13.426-70.065 1.402-1.007 2.79-2.049 4.051-3.31l16-16c12.5-12.492 12.5-32.758 0-45.25l-20.688-20.688 9.375-9.375 32.001-31.999zm-219.313,100.687c-52.938,0-96,43.063-96,96 0,8.836-7.164,16-16,16s-16-7.164-16-16c0-70.578 57.422-128 128-128 8.836,0 16,7.164 16,16s-7.164,16-16,16z"
  ), n.append("path").attr("class", "error-icon").attr(
    "d",
    "m459.02,148.98c-6.25-6.25-16.375-6.25-22.625,0s-6.25,16.375 0,22.625l16,16c3.125,3.125 7.219,4.688 11.313,4.688 4.094,0 8.188-1.563 11.313-4.688 6.25-6.25 6.25-16.375 0-22.625l-16.001-16z"
  ), n.append("path").attr("class", "error-icon").attr(
    "d",
    "m340.395,75.605c3.125,3.125 7.219,4.688 11.313,4.688 4.094,0 8.188-1.563 11.313-4.688 6.25-6.25 6.25-16.375 0-22.625l-16-16c-6.25-6.25-16.375-6.25-22.625,0s-6.25,16.375 0,22.625l15.999,16z"
  ), n.append("path").attr("class", "error-icon").attr(
    "d",
    "m400,64c8.844,0 16-7.164 16-16v-32c0-8.836-7.156-16-16-16-8.844,0-16,7.164-16,16v32c0,8.836 7.156,16 16,16z"
  ), n.append("path").attr("class", "error-icon").attr(
    "d",
    "m496,96.586h-32c-8.844,0-16,7.164-16,16 0,8.836 7.156,16 16,16h32c8.844,0 16-7.164 16-16 0-8.836-7.156-16-16-16z"
  ), n.append("path").attr("class", "error-icon").attr(
    "d",
    "m436.98,75.605c3.125,3.125 7.219,4.688 11.313,4.688 4.094,0 8.188-1.563 11.313-4.688l32-32c6.25-6.25 6.25-16.375 0-22.625s-16.375-6.25-22.625,0l-32,32c-6.251,6.25-6.251,16.375-0.001,22.625z"
  ), n.append("text").attr("class", "error-text").attr("x", 1440).attr("y", 250).attr("font-size", "150px").style("text-anchor", "middle").text("Syntax error in text"), n.append("text").attr("class", "error-text").attr("x", 1250).attr("y", 400).attr("font-size", "100px").style("text-anchor", "middle").text(`mermaid version ${i}`);
};
var vl = { draw: gy };
var my = vl;
var _y = {
  db: {},
  renderer: vl,
  parser: {
    parser: { yy: {} },
    parse: () => {
    }
  }
};
var yy = _y;
var kl = "flowchart-elk";
var Cy = (t9, e) => {
  var i;
  return (
    // If diagram explicitly states flowchart-elk
    !!(/^\s*flowchart-elk/.test(t9) || // If a flowchart/graph diagram has their default renderer set to elk
    /^\s*flowchart|graph/.test(t9) && ((i = e == null ? void 0 : e.flowchart) == null ? void 0 : i.defaultRenderer) === "elk")
  );
};
var xy = async () => {
  const { diagram: t9 } = await import("./flowchart-elk-definition-8cd0f1e2-PP6ZH376.js");
  return { id: kl, diagram: t9 };
};
var by = {
  id: kl,
  detector: Cy,
  loader: xy
};
var Ty = by;
var wl = "timeline";
var Sy = (t9) => /^\s*timeline/.test(t9);
var vy = async () => {
  const { diagram: t9 } = await import("./timeline-definition-5dc05eb7-4J6G2D6B.js");
  return { id: wl, diagram: t9 };
};
var ky = {
  id: wl,
  detector: Sy,
  loader: vy
};
var wy = ky;
var Bl = "mindmap";
var By = (t9) => /^\s*mindmap/.test(t9);
var Fy = async () => {
  const { diagram: t9 } = await import("./mindmap-definition-5c6cc2b2-XM2EIVBR.js");
  return { id: Bl, diagram: t9 };
};
var Ly = {
  id: Bl,
  detector: By,
  loader: Fy
};
var Ay = Ly;
var Fl = "sankey";
var Ey = (t9) => /^\s*sankey-beta/.test(t9);
var My = async () => {
  const { diagram: t9 } = await import("./sankeyDiagram-f71fea45-AICVHGA5.js");
  return { id: Fl, diagram: t9 };
};
var Oy = {
  id: Fl,
  detector: Ey,
  loader: My
};
var $y = Oy;
var Ni = {};
var Iy = (t9, e, i) => {
  let r = "";
  return t9 in Ni && Ni[t9] ? r = Ni[t9](i) : L.warn(`No theme found for ${t9}`), ` & {
    font-family: ${i.fontFamily};
    font-size: ${i.fontSize};
    fill: ${i.textColor}
  }

  /* Classes common for multiple diagrams */

  & .error-icon {
    fill: ${i.errorBkgColor};
  }
  & .error-text {
    fill: ${i.errorTextColor};
    stroke: ${i.errorTextColor};
  }

  & .edge-thickness-normal {
    stroke-width: 2px;
  }
  & .edge-thickness-thick {
    stroke-width: 3.5px
  }
  & .edge-pattern-solid {
    stroke-dasharray: 0;
  }

  & .edge-pattern-dashed{
    stroke-dasharray: 3;
  }
  .edge-pattern-dotted {
    stroke-dasharray: 2;
  }

  & .marker {
    fill: ${i.lineColor};
    stroke: ${i.lineColor};
  }
  & .marker.cross {
    stroke: ${i.lineColor};
  }

  & svg {
    font-family: ${i.fontFamily};
    font-size: ${i.fontSize};
  }

  ${r}

  ${e}
`;
};
var Dy = (t9, e) => {
  e !== void 0 && (Ni[t9] = e);
};
var Ny = Iy;
var Un = "";
var Yn = "";
var Gn = "";
var Vn = (t9) => ei(t9, Ft());
var Ry = () => {
  Un = "", Gn = "", Yn = "";
};
var Py = (t9) => {
  Un = Vn(t9).replace(/^\s+/g, "");
};
var qy = () => Un;
var zy = (t9) => {
  Gn = Vn(t9).replace(/\n\s+/g, `
`);
};
var Wy = () => Gn;
var Hy = (t9) => {
  Yn = Vn(t9);
};
var jy = () => Yn;
var Uy = Object.freeze(Object.defineProperty({
  __proto__: null,
  clear: Ry,
  getAccDescription: Wy,
  getAccTitle: qy,
  getDiagramTitle: jy,
  setAccDescription: zy,
  setAccTitle: Py,
  setDiagramTitle: Hy
}, Symbol.toStringTag, { value: "Module" }));
var Yy = L;
var Gy = bn;
var Ll = Ft;
var Vy = (t9) => ei(t9, Ll());
var Xy = py;
var Ky = () => Uy;
var er = {};
var ir = (t9, e, i) => {
  var r;
  if (er[t9])
    throw new Error(`Diagram ${t9} already registered.`);
  er[t9] = e, i && Ma(t9, i), Dy(t9, e.styles), (r = e.injectUtils) == null || r.call(
    e,
    Yy,
    Gy,
    Ll,
    Vy,
    Xy,
    Ky(),
    () => {
    }
  );
};
var Xn = (t9) => {
  if (t9 in er)
    return er[t9];
  throw new Zy(t9);
};
var Zy = class extends Error {
  constructor(e) {
    super(`Diagram ${e} not found.`);
  }
};
var ps = false;
var Kn = () => {
  ps || (ps = true, ir("error", yy, (t9) => t9.toLowerCase().trim() === "error"), ir(
    "---",
    // --- diagram type may appear if YAML front-matter is not parsed correctly
    {
      db: {
        clear: () => {
        }
      },
      styles: {},
      // should never be used
      renderer: {
        draw: () => {
        }
      },
      parser: {
        parser: { yy: {} },
        parse: () => {
          throw new Error(
            "Diagrams beginning with --- are not valid. If you were trying to use a YAML front-matter, please ensure that you've correctly opened and closed the YAML front-matter with un-indented `---` blocks"
          );
        }
      },
      init: () => null
      // no op
    },
    (t9) => t9.toLowerCase().trimStart().startsWith("---")
  ), Ea(
    s_,
    J_,
    V_,
    y_,
    w_,
    L_,
    M_,
    q_,
    j_,
    Ty,
    p_,
    c_,
    Ay,
    wy,
    T_,
    sy,
    iy,
    cy,
    D_,
    $y
  ));
};
var Al = class {
  constructor(e, i = {}) {
    this.text = e, this.metadata = i, this.type = "graph", this.text += `
`;
    const r = Ft();
    try {
      this.type = mr(e, r);
    } catch (o) {
      this.type = "error", this.detectError = o;
    }
    const n = Xn(this.type);
    L.debug("Type " + this.type), this.db = n.db, this.renderer = n.renderer, this.parser = n.parser, this.parser.parser.yy = this.db, this.init = n.init, this.parse();
  }
  parse() {
    var i, r, n, o, s;
    if (this.detectError)
      throw this.detectError;
    (r = (i = this.db).clear) == null || r.call(i);
    const e = Ft();
    (n = this.init) == null || n.call(this, e), this.metadata.title && ((s = (o = this.db).setDiagramTitle) == null || s.call(o, this.metadata.title)), this.parser.parse(this.text);
  }
  async render(e, i) {
    await this.renderer.draw(this.text, e, i, this);
  }
  getParser() {
    return this.parser;
  }
  getType() {
    return this.type;
  }
};
var Zn = async (t9, e = {}) => {
  const i = mr(t9, Ft());
  try {
    Xn(i);
  } catch {
    const n = mp(i);
    if (!n)
      throw new Aa(`Diagram ${i} not found.`);
    const { id: o, diagram: s } = await n();
    ir(o, s);
  }
  return new Al(t9, e);
};
var gn = [];
var d1 = (t9) => {
  gn.push(t9);
};
var Jy = () => {
  gn.forEach((t9) => {
    t9();
  }), gn = [];
};
var Qy = Da(Object.keys, Object);
var tC = Qy;
var eC = Object.prototype;
var iC = eC.hasOwnProperty;
function rC(t9) {
  if (!xr(t9))
    return tC(t9);
  var e = [];
  for (var i in Object(t9))
    iC.call(t9, i) && i != "constructor" && e.push(i);
  return e;
}
var nC = _e(Dt, "DataView");
var mn = nC;
var oC = _e(Dt, "Promise");
var _n = oC;
var sC = _e(Dt, "Set");
var yn = sC;
var aC = _e(Dt, "WeakMap");
var Cn = aC;
var gs = "[object Map]";
var lC = "[object Object]";
var ms = "[object Promise]";
var _s = "[object Set]";
var ys = "[object WeakMap]";
var Cs = "[object DataView]";
var hC = me(mn);
var cC = me(ri);
var uC = me(_n);
var fC = me(yn);
var dC = me(Cn);
var ae = $e;
(mn && ae(new mn(new ArrayBuffer(1))) != Cs || ri && ae(new ri()) != gs || _n && ae(_n.resolve()) != ms || yn && ae(new yn()) != _s || Cn && ae(new Cn()) != ys) && (ae = function(t9) {
  var e = $e(t9), i = e == lC ? t9.constructor : void 0, r = i ? me(i) : "";
  if (r)
    switch (r) {
      case hC:
        return Cs;
      case cC:
        return gs;
      case uC:
        return ms;
      case fC:
        return _s;
      case dC:
        return ys;
    }
  return e;
});
var pC = ae;
var gC = "[object Map]";
var mC = "[object Set]";
var _C = Object.prototype;
var yC = _C.hasOwnProperty;
function Yr(t9) {
  if (t9 == null)
    return true;
  if (br(t9) && (Ji(t9) || typeof t9 == "string" || typeof t9.splice == "function" || Rn(t9) || Pn(t9) || Zi(t9)))
    return !t9.length;
  var e = pC(t9);
  if (e == gC || e == mC)
    return !t9.size;
  if (xr(t9))
    return !rC(t9).length;
  for (var i in t9)
    if (yC.call(t9, i))
      return false;
  return true;
}
var CC = "graphics-document document";
function xC(t9, e) {
  t9.attr("role", CC), e !== "" && t9.attr("aria-roledescription", e);
}
function bC(t9, e, i, r) {
  if (t9.insert !== void 0) {
    if (i) {
      const n = `chart-desc-${r}`;
      t9.attr("aria-describedby", n), t9.insert("desc", ":first-child").attr("id", n).text(i);
    }
    if (e) {
      const n = `chart-title-${r}`;
      t9.attr("aria-labelledby", n), t9.insert("title", ":first-child").attr("id", n).text(e);
    }
  }
}
var TC = (t9) => t9.replace(/^\s*%%(?!{)[^\n]+\n?/gm, "").trimStart();
function El(t9) {
  return typeof t9 > "u" || t9 === null;
}
function SC(t9) {
  return typeof t9 == "object" && t9 !== null;
}
function vC(t9) {
  return Array.isArray(t9) ? t9 : El(t9) ? [] : [t9];
}
function kC(t9, e) {
  var i, r, n, o;
  if (e)
    for (o = Object.keys(e), i = 0, r = o.length; i < r; i += 1)
      n = o[i], t9[n] = e[n];
  return t9;
}
function wC(t9, e) {
  var i = "", r;
  for (r = 0; r < e; r += 1)
    i += t9;
  return i;
}
function BC(t9) {
  return t9 === 0 && Number.NEGATIVE_INFINITY === 1 / t9;
}
var FC = El;
var LC = SC;
var AC = vC;
var EC = wC;
var MC = BC;
var OC = kC;
var at = {
  isNothing: FC,
  isObject: LC,
  toArray: AC,
  repeat: EC,
  isNegativeZero: MC,
  extend: OC
};
function Ml(t9, e) {
  var i = "", r = t9.reason || "(unknown reason)";
  return t9.mark ? (t9.mark.name && (i += 'in "' + t9.mark.name + '" '), i += "(" + (t9.mark.line + 1) + ":" + (t9.mark.column + 1) + ")", !e && t9.mark.snippet && (i += `

` + t9.mark.snippet), r + " " + i) : r;
}
function ai(t9, e) {
  Error.call(this), this.name = "YAMLException", this.reason = t9, this.mark = e, this.message = Ml(this, false), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack || "";
}
ai.prototype = Object.create(Error.prototype);
ai.prototype.constructor = ai;
ai.prototype.toString = function(e) {
  return this.name + ": " + Ml(this, e);
};
var jt = ai;
function Gr(t9, e, i, r, n) {
  var o = "", s = "", a = Math.floor(n / 2) - 1;
  return r - e > a && (o = " ... ", e = r - a + o.length), i - r > a && (s = " ...", i = r + a - s.length), {
    str: o + t9.slice(e, i).replace(/\t/g, "→") + s,
    pos: r - e + o.length
    // relative position
  };
}
function Vr(t9, e) {
  return at.repeat(" ", e - t9.length) + t9;
}
function $C(t9, e) {
  if (e = Object.create(e || null), !t9.buffer)
    return null;
  e.maxLength || (e.maxLength = 79), typeof e.indent != "number" && (e.indent = 1), typeof e.linesBefore != "number" && (e.linesBefore = 3), typeof e.linesAfter != "number" && (e.linesAfter = 2);
  for (var i = /\r?\n|\r|\0/g, r = [0], n = [], o, s = -1; o = i.exec(t9.buffer); )
    n.push(o.index), r.push(o.index + o[0].length), t9.position <= o.index && s < 0 && (s = r.length - 2);
  s < 0 && (s = r.length - 1);
  var a = "", l, h, c = Math.min(t9.line + e.linesAfter, n.length).toString().length, f = e.maxLength - (e.indent + c + 3);
  for (l = 1; l <= e.linesBefore && !(s - l < 0); l++)
    h = Gr(
      t9.buffer,
      r[s - l],
      n[s - l],
      t9.position - (r[s] - r[s - l]),
      f
    ), a = at.repeat(" ", e.indent) + Vr((t9.line - l + 1).toString(), c) + " | " + h.str + `
` + a;
  for (h = Gr(t9.buffer, r[s], n[s], t9.position, f), a += at.repeat(" ", e.indent) + Vr((t9.line + 1).toString(), c) + " | " + h.str + `
`, a += at.repeat("-", e.indent + c + 3 + h.pos) + `^
`, l = 1; l <= e.linesAfter && !(s + l >= n.length); l++)
    h = Gr(
      t9.buffer,
      r[s + l],
      n[s + l],
      t9.position - (r[s] - r[s + l]),
      f
    ), a += at.repeat(" ", e.indent) + Vr((t9.line + l + 1).toString(), c) + " | " + h.str + `
`;
  return a.replace(/\n$/, "");
}
var IC = $C;
var DC = [
  "kind",
  "multi",
  "resolve",
  "construct",
  "instanceOf",
  "predicate",
  "represent",
  "representName",
  "defaultStyle",
  "styleAliases"
];
var NC = [
  "scalar",
  "sequence",
  "mapping"
];
function RC(t9) {
  var e = {};
  return t9 !== null && Object.keys(t9).forEach(function(i) {
    t9[i].forEach(function(r) {
      e[String(r)] = i;
    });
  }), e;
}
function PC(t9, e) {
  if (e = e || {}, Object.keys(e).forEach(function(i) {
    if (DC.indexOf(i) === -1)
      throw new jt('Unknown option "' + i + '" is met in definition of "' + t9 + '" YAML type.');
  }), this.options = e, this.tag = t9, this.kind = e.kind || null, this.resolve = e.resolve || function() {
    return true;
  }, this.construct = e.construct || function(i) {
    return i;
  }, this.instanceOf = e.instanceOf || null, this.predicate = e.predicate || null, this.represent = e.represent || null, this.representName = e.representName || null, this.defaultStyle = e.defaultStyle || null, this.multi = e.multi || false, this.styleAliases = RC(e.styleAliases || null), NC.indexOf(this.kind) === -1)
    throw new jt('Unknown kind "' + this.kind + '" is specified for "' + t9 + '" YAML type.');
}
var ot = PC;
function xs(t9, e) {
  var i = [];
  return t9[e].forEach(function(r) {
    var n = i.length;
    i.forEach(function(o, s) {
      o.tag === r.tag && o.kind === r.kind && o.multi === r.multi && (n = s);
    }), i[n] = r;
  }), i;
}
function qC() {
  var t9 = {
    scalar: {},
    sequence: {},
    mapping: {},
    fallback: {},
    multi: {
      scalar: [],
      sequence: [],
      mapping: [],
      fallback: []
    }
  }, e, i;
  function r(n) {
    n.multi ? (t9.multi[n.kind].push(n), t9.multi.fallback.push(n)) : t9[n.kind][n.tag] = t9.fallback[n.tag] = n;
  }
  for (e = 0, i = arguments.length; e < i; e += 1)
    arguments[e].forEach(r);
  return t9;
}
function xn(t9) {
  return this.extend(t9);
}
xn.prototype.extend = function(e) {
  var i = [], r = [];
  if (e instanceof ot)
    r.push(e);
  else if (Array.isArray(e))
    r = r.concat(e);
  else if (e && (Array.isArray(e.implicit) || Array.isArray(e.explicit)))
    e.implicit && (i = i.concat(e.implicit)), e.explicit && (r = r.concat(e.explicit));
  else
    throw new jt("Schema.extend argument should be a Type, [ Type ], or a schema definition ({ implicit: [...], explicit: [...] })");
  i.forEach(function(o) {
    if (!(o instanceof ot))
      throw new jt("Specified list of YAML types (or a single Type object) contains a non-Type object.");
    if (o.loadKind && o.loadKind !== "scalar")
      throw new jt("There is a non-scalar type in the implicit list of a schema. Implicit resolving of such types is not supported.");
    if (o.multi)
      throw new jt("There is a multi type in the implicit list of a schema. Multi tags can only be listed as explicit.");
  }), r.forEach(function(o) {
    if (!(o instanceof ot))
      throw new jt("Specified list of YAML types (or a single Type object) contains a non-Type object.");
  });
  var n = Object.create(xn.prototype);
  return n.implicit = (this.implicit || []).concat(i), n.explicit = (this.explicit || []).concat(r), n.compiledImplicit = xs(n, "implicit"), n.compiledExplicit = xs(n, "explicit"), n.compiledTypeMap = qC(n.compiledImplicit, n.compiledExplicit), n;
};
var zC = xn;
var WC = new ot("tag:yaml.org,2002:str", {
  kind: "scalar",
  construct: function(t9) {
    return t9 !== null ? t9 : "";
  }
});
var HC = new ot("tag:yaml.org,2002:seq", {
  kind: "sequence",
  construct: function(t9) {
    return t9 !== null ? t9 : [];
  }
});
var jC = new ot("tag:yaml.org,2002:map", {
  kind: "mapping",
  construct: function(t9) {
    return t9 !== null ? t9 : {};
  }
});
var UC = new zC({
  explicit: [
    WC,
    HC,
    jC
  ]
});
function YC(t9) {
  if (t9 === null)
    return true;
  var e = t9.length;
  return e === 1 && t9 === "~" || e === 4 && (t9 === "null" || t9 === "Null" || t9 === "NULL");
}
function GC() {
  return null;
}
function VC(t9) {
  return t9 === null;
}
var XC = new ot("tag:yaml.org,2002:null", {
  kind: "scalar",
  resolve: YC,
  construct: GC,
  predicate: VC,
  represent: {
    canonical: function() {
      return "~";
    },
    lowercase: function() {
      return "null";
    },
    uppercase: function() {
      return "NULL";
    },
    camelcase: function() {
      return "Null";
    },
    empty: function() {
      return "";
    }
  },
  defaultStyle: "lowercase"
});
function KC(t9) {
  if (t9 === null)
    return false;
  var e = t9.length;
  return e === 4 && (t9 === "true" || t9 === "True" || t9 === "TRUE") || e === 5 && (t9 === "false" || t9 === "False" || t9 === "FALSE");
}
function ZC(t9) {
  return t9 === "true" || t9 === "True" || t9 === "TRUE";
}
function JC(t9) {
  return Object.prototype.toString.call(t9) === "[object Boolean]";
}
var QC = new ot("tag:yaml.org,2002:bool", {
  kind: "scalar",
  resolve: KC,
  construct: ZC,
  predicate: JC,
  represent: {
    lowercase: function(t9) {
      return t9 ? "true" : "false";
    },
    uppercase: function(t9) {
      return t9 ? "TRUE" : "FALSE";
    },
    camelcase: function(t9) {
      return t9 ? "True" : "False";
    }
  },
  defaultStyle: "lowercase"
});
function tx(t9) {
  return 48 <= t9 && t9 <= 57 || 65 <= t9 && t9 <= 70 || 97 <= t9 && t9 <= 102;
}
function ex(t9) {
  return 48 <= t9 && t9 <= 55;
}
function ix(t9) {
  return 48 <= t9 && t9 <= 57;
}
function rx(t9) {
  if (t9 === null)
    return false;
  var e = t9.length, i = 0, r = false, n;
  if (!e)
    return false;
  if (n = t9[i], (n === "-" || n === "+") && (n = t9[++i]), n === "0") {
    if (i + 1 === e)
      return true;
    if (n = t9[++i], n === "b") {
      for (i++; i < e; i++)
        if (n = t9[i], n !== "_") {
          if (n !== "0" && n !== "1")
            return false;
          r = true;
        }
      return r && n !== "_";
    }
    if (n === "x") {
      for (i++; i < e; i++)
        if (n = t9[i], n !== "_") {
          if (!tx(t9.charCodeAt(i)))
            return false;
          r = true;
        }
      return r && n !== "_";
    }
    if (n === "o") {
      for (i++; i < e; i++)
        if (n = t9[i], n !== "_") {
          if (!ex(t9.charCodeAt(i)))
            return false;
          r = true;
        }
      return r && n !== "_";
    }
  }
  if (n === "_")
    return false;
  for (; i < e; i++)
    if (n = t9[i], n !== "_") {
      if (!ix(t9.charCodeAt(i)))
        return false;
      r = true;
    }
  return !(!r || n === "_");
}
function nx(t9) {
  var e = t9, i = 1, r;
  if (e.indexOf("_") !== -1 && (e = e.replace(/_/g, "")), r = e[0], (r === "-" || r === "+") && (r === "-" && (i = -1), e = e.slice(1), r = e[0]), e === "0")
    return 0;
  if (r === "0") {
    if (e[1] === "b")
      return i * parseInt(e.slice(2), 2);
    if (e[1] === "x")
      return i * parseInt(e.slice(2), 16);
    if (e[1] === "o")
      return i * parseInt(e.slice(2), 8);
  }
  return i * parseInt(e, 10);
}
function ox(t9) {
  return Object.prototype.toString.call(t9) === "[object Number]" && t9 % 1 === 0 && !at.isNegativeZero(t9);
}
var sx = new ot("tag:yaml.org,2002:int", {
  kind: "scalar",
  resolve: rx,
  construct: nx,
  predicate: ox,
  represent: {
    binary: function(t9) {
      return t9 >= 0 ? "0b" + t9.toString(2) : "-0b" + t9.toString(2).slice(1);
    },
    octal: function(t9) {
      return t9 >= 0 ? "0o" + t9.toString(8) : "-0o" + t9.toString(8).slice(1);
    },
    decimal: function(t9) {
      return t9.toString(10);
    },
    /* eslint-disable max-len */
    hexadecimal: function(t9) {
      return t9 >= 0 ? "0x" + t9.toString(16).toUpperCase() : "-0x" + t9.toString(16).toUpperCase().slice(1);
    }
  },
  defaultStyle: "decimal",
  styleAliases: {
    binary: [2, "bin"],
    octal: [8, "oct"],
    decimal: [10, "dec"],
    hexadecimal: [16, "hex"]
  }
});
var ax = new RegExp(
  // 2.5e4, 2.5 and integers
  "^(?:[-+]?(?:[0-9][0-9_]*)(?:\\.[0-9_]*)?(?:[eE][-+]?[0-9]+)?|\\.[0-9_]+(?:[eE][-+]?[0-9]+)?|[-+]?\\.(?:inf|Inf|INF)|\\.(?:nan|NaN|NAN))$"
);
function lx(t9) {
  return !(t9 === null || !ax.test(t9) || // Quick hack to not allow integers end with `_`
  // Probably should update regexp & check speed
  t9[t9.length - 1] === "_");
}
function hx(t9) {
  var e, i;
  return e = t9.replace(/_/g, "").toLowerCase(), i = e[0] === "-" ? -1 : 1, "+-".indexOf(e[0]) >= 0 && (e = e.slice(1)), e === ".inf" ? i === 1 ? Number.POSITIVE_INFINITY : Number.NEGATIVE_INFINITY : e === ".nan" ? NaN : i * parseFloat(e, 10);
}
var cx = /^[-+]?[0-9]+e/;
function ux(t9, e) {
  var i;
  if (isNaN(t9))
    switch (e) {
      case "lowercase":
        return ".nan";
      case "uppercase":
        return ".NAN";
      case "camelcase":
        return ".NaN";
    }
  else if (Number.POSITIVE_INFINITY === t9)
    switch (e) {
      case "lowercase":
        return ".inf";
      case "uppercase":
        return ".INF";
      case "camelcase":
        return ".Inf";
    }
  else if (Number.NEGATIVE_INFINITY === t9)
    switch (e) {
      case "lowercase":
        return "-.inf";
      case "uppercase":
        return "-.INF";
      case "camelcase":
        return "-.Inf";
    }
  else if (at.isNegativeZero(t9))
    return "-0.0";
  return i = t9.toString(10), cx.test(i) ? i.replace("e", ".e") : i;
}
function fx(t9) {
  return Object.prototype.toString.call(t9) === "[object Number]" && (t9 % 1 !== 0 || at.isNegativeZero(t9));
}
var dx = new ot("tag:yaml.org,2002:float", {
  kind: "scalar",
  resolve: lx,
  construct: hx,
  predicate: fx,
  represent: ux,
  defaultStyle: "lowercase"
});
var Ol = UC.extend({
  implicit: [
    XC,
    QC,
    sx,
    dx
  ]
});
var px = Ol;
var $l = new RegExp(
  "^([0-9][0-9][0-9][0-9])-([0-9][0-9])-([0-9][0-9])$"
);
var Il = new RegExp(
  "^([0-9][0-9][0-9][0-9])-([0-9][0-9]?)-([0-9][0-9]?)(?:[Tt]|[ \\t]+)([0-9][0-9]?):([0-9][0-9]):([0-9][0-9])(?:\\.([0-9]*))?(?:[ \\t]*(Z|([-+])([0-9][0-9]?)(?::([0-9][0-9]))?))?$"
);
function gx(t9) {
  return t9 === null ? false : $l.exec(t9) !== null || Il.exec(t9) !== null;
}
function mx(t9) {
  var e, i, r, n, o, s, a, l = 0, h = null, c, f, g;
  if (e = $l.exec(t9), e === null && (e = Il.exec(t9)), e === null)
    throw new Error("Date resolve error");
  if (i = +e[1], r = +e[2] - 1, n = +e[3], !e[4])
    return new Date(Date.UTC(i, r, n));
  if (o = +e[4], s = +e[5], a = +e[6], e[7]) {
    for (l = e[7].slice(0, 3); l.length < 3; )
      l += "0";
    l = +l;
  }
  return e[9] && (c = +e[10], f = +(e[11] || 0), h = (c * 60 + f) * 6e4, e[9] === "-" && (h = -h)), g = new Date(Date.UTC(i, r, n, o, s, a, l)), h && g.setTime(g.getTime() - h), g;
}
function _x(t9) {
  return t9.toISOString();
}
var yx = new ot("tag:yaml.org,2002:timestamp", {
  kind: "scalar",
  resolve: gx,
  construct: mx,
  instanceOf: Date,
  represent: _x
});
function Cx(t9) {
  return t9 === "<<" || t9 === null;
}
var xx = new ot("tag:yaml.org,2002:merge", {
  kind: "scalar",
  resolve: Cx
});
var Jn = `ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=
\r`;
function bx(t9) {
  if (t9 === null)
    return false;
  var e, i, r = 0, n = t9.length, o = Jn;
  for (i = 0; i < n; i++)
    if (e = o.indexOf(t9.charAt(i)), !(e > 64)) {
      if (e < 0)
        return false;
      r += 6;
    }
  return r % 8 === 0;
}
function Tx(t9) {
  var e, i, r = t9.replace(/[\r\n=]/g, ""), n = r.length, o = Jn, s = 0, a = [];
  for (e = 0; e < n; e++)
    e % 4 === 0 && e && (a.push(s >> 16 & 255), a.push(s >> 8 & 255), a.push(s & 255)), s = s << 6 | o.indexOf(r.charAt(e));
  return i = n % 4 * 6, i === 0 ? (a.push(s >> 16 & 255), a.push(s >> 8 & 255), a.push(s & 255)) : i === 18 ? (a.push(s >> 10 & 255), a.push(s >> 2 & 255)) : i === 12 && a.push(s >> 4 & 255), new Uint8Array(a);
}
function Sx(t9) {
  var e = "", i = 0, r, n, o = t9.length, s = Jn;
  for (r = 0; r < o; r++)
    r % 3 === 0 && r && (e += s[i >> 18 & 63], e += s[i >> 12 & 63], e += s[i >> 6 & 63], e += s[i & 63]), i = (i << 8) + t9[r];
  return n = o % 3, n === 0 ? (e += s[i >> 18 & 63], e += s[i >> 12 & 63], e += s[i >> 6 & 63], e += s[i & 63]) : n === 2 ? (e += s[i >> 10 & 63], e += s[i >> 4 & 63], e += s[i << 2 & 63], e += s[64]) : n === 1 && (e += s[i >> 2 & 63], e += s[i << 4 & 63], e += s[64], e += s[64]), e;
}
function vx(t9) {
  return Object.prototype.toString.call(t9) === "[object Uint8Array]";
}
var kx = new ot("tag:yaml.org,2002:binary", {
  kind: "scalar",
  resolve: bx,
  construct: Tx,
  predicate: vx,
  represent: Sx
});
var wx = Object.prototype.hasOwnProperty;
var Bx = Object.prototype.toString;
function Fx(t9) {
  if (t9 === null)
    return true;
  var e = [], i, r, n, o, s, a = t9;
  for (i = 0, r = a.length; i < r; i += 1) {
    if (n = a[i], s = false, Bx.call(n) !== "[object Object]")
      return false;
    for (o in n)
      if (wx.call(n, o))
        if (!s)
          s = true;
        else
          return false;
    if (!s)
      return false;
    if (e.indexOf(o) === -1)
      e.push(o);
    else
      return false;
  }
  return true;
}
function Lx(t9) {
  return t9 !== null ? t9 : [];
}
var Ax = new ot("tag:yaml.org,2002:omap", {
  kind: "sequence",
  resolve: Fx,
  construct: Lx
});
var Ex = Object.prototype.toString;
function Mx(t9) {
  if (t9 === null)
    return true;
  var e, i, r, n, o, s = t9;
  for (o = new Array(s.length), e = 0, i = s.length; e < i; e += 1) {
    if (r = s[e], Ex.call(r) !== "[object Object]" || (n = Object.keys(r), n.length !== 1))
      return false;
    o[e] = [n[0], r[n[0]]];
  }
  return true;
}
function Ox(t9) {
  if (t9 === null)
    return [];
  var e, i, r, n, o, s = t9;
  for (o = new Array(s.length), e = 0, i = s.length; e < i; e += 1)
    r = s[e], n = Object.keys(r), o[e] = [n[0], r[n[0]]];
  return o;
}
var $x = new ot("tag:yaml.org,2002:pairs", {
  kind: "sequence",
  resolve: Mx,
  construct: Ox
});
var Ix = Object.prototype.hasOwnProperty;
function Dx(t9) {
  if (t9 === null)
    return true;
  var e, i = t9;
  for (e in i)
    if (Ix.call(i, e) && i[e] !== null)
      return false;
  return true;
}
function Nx(t9) {
  return t9 !== null ? t9 : {};
}
var Rx = new ot("tag:yaml.org,2002:set", {
  kind: "mapping",
  resolve: Dx,
  construct: Nx
});
var Px = px.extend({
  implicit: [
    yx,
    xx
  ],
  explicit: [
    kx,
    Ax,
    $x,
    Rx
  ]
});
var re = Object.prototype.hasOwnProperty;
var rr = 1;
var Dl = 2;
var Nl = 3;
var nr = 4;
var Xr = 1;
var qx = 2;
var bs = 3;
var zx = /[\x00-\x08\x0B\x0C\x0E-\x1F\x7F-\x84\x86-\x9F\uFFFE\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/;
var Wx = /[\x85\u2028\u2029]/;
var Hx = /[,\[\]\{\}]/;
var Rl = /^(?:!|!!|![a-z\-]+!)$/i;
var Pl = /^(?:!|[^,\[\]\{\}])(?:%[0-9a-f]{2}|[0-9a-z\-#;\/\?:@&=\+\$,_\.!~\*'\(\)\[\]])*$/i;
function Ts(t9) {
  return Object.prototype.toString.call(t9);
}
function Ot(t9) {
  return t9 === 10 || t9 === 13;
}
function ue(t9) {
  return t9 === 9 || t9 === 32;
}
function dt(t9) {
  return t9 === 9 || t9 === 32 || t9 === 10 || t9 === 13;
}
function ke(t9) {
  return t9 === 44 || t9 === 91 || t9 === 93 || t9 === 123 || t9 === 125;
}
function jx(t9) {
  var e;
  return 48 <= t9 && t9 <= 57 ? t9 - 48 : (e = t9 | 32, 97 <= e && e <= 102 ? e - 97 + 10 : -1);
}
function Ux(t9) {
  return t9 === 120 ? 2 : t9 === 117 ? 4 : t9 === 85 ? 8 : 0;
}
function Yx(t9) {
  return 48 <= t9 && t9 <= 57 ? t9 - 48 : -1;
}
function Ss(t9) {
  return t9 === 48 ? "\0" : t9 === 97 ? "\x07" : t9 === 98 ? "\b" : t9 === 116 || t9 === 9 ? "	" : t9 === 110 ? `
` : t9 === 118 ? "\v" : t9 === 102 ? "\f" : t9 === 114 ? "\r" : t9 === 101 ? "\x1B" : t9 === 32 ? " " : t9 === 34 ? '"' : t9 === 47 ? "/" : t9 === 92 ? "\\" : t9 === 78 ? "" : t9 === 95 ? " " : t9 === 76 ? "\u2028" : t9 === 80 ? "\u2029" : "";
}
function Gx(t9) {
  return t9 <= 65535 ? String.fromCharCode(t9) : String.fromCharCode(
    (t9 - 65536 >> 10) + 55296,
    (t9 - 65536 & 1023) + 56320
  );
}
var ql = new Array(256);
var zl = new Array(256);
for (ve = 0; ve < 256; ve++)
  ql[ve] = Ss(ve) ? 1 : 0, zl[ve] = Ss(ve);
var ve;
function Vx(t9, e) {
  this.input = t9, this.filename = e.filename || null, this.schema = e.schema || Px, this.onWarning = e.onWarning || null, this.legacy = e.legacy || false, this.json = e.json || false, this.listener = e.listener || null, this.implicitTypes = this.schema.compiledImplicit, this.typeMap = this.schema.compiledTypeMap, this.length = t9.length, this.position = 0, this.line = 0, this.lineStart = 0, this.lineIndent = 0, this.firstTabInLine = -1, this.documents = [];
}
function Wl(t9, e) {
  var i = {
    name: t9.filename,
    buffer: t9.input.slice(0, -1),
    // omit trailing \0
    position: t9.position,
    line: t9.line,
    column: t9.position - t9.lineStart
  };
  return i.snippet = IC(i), new jt(e, i);
}
function F(t9, e) {
  throw Wl(t9, e);
}
function or(t9, e) {
  t9.onWarning && t9.onWarning.call(null, Wl(t9, e));
}
var vs = {
  YAML: function(e, i, r) {
    var n, o, s;
    e.version !== null && F(e, "duplication of %YAML directive"), r.length !== 1 && F(e, "YAML directive accepts exactly one argument"), n = /^([0-9]+)\.([0-9]+)$/.exec(r[0]), n === null && F(e, "ill-formed argument of the YAML directive"), o = parseInt(n[1], 10), s = parseInt(n[2], 10), o !== 1 && F(e, "unacceptable YAML version of the document"), e.version = r[0], e.checkLineBreaks = s < 2, s !== 1 && s !== 2 && or(e, "unsupported YAML version of the document");
  },
  TAG: function(e, i, r) {
    var n, o;
    r.length !== 2 && F(e, "TAG directive accepts exactly two arguments"), n = r[0], o = r[1], Rl.test(n) || F(e, "ill-formed tag handle (first argument) of the TAG directive"), re.call(e.tagMap, n) && F(e, 'there is a previously declared suffix for "' + n + '" tag handle'), Pl.test(o) || F(e, "ill-formed tag prefix (second argument) of the TAG directive");
    try {
      o = decodeURIComponent(o);
    } catch {
      F(e, "tag prefix is malformed: " + o);
    }
    e.tagMap[n] = o;
  }
};
function ee(t9, e, i, r) {
  var n, o, s, a;
  if (e < i) {
    if (a = t9.input.slice(e, i), r)
      for (n = 0, o = a.length; n < o; n += 1)
        s = a.charCodeAt(n), s === 9 || 32 <= s && s <= 1114111 || F(t9, "expected valid JSON character");
    else
      zx.test(a) && F(t9, "the stream contains non-printable characters");
    t9.result += a;
  }
}
function ks(t9, e, i, r) {
  var n, o, s, a;
  for (at.isObject(i) || F(t9, "cannot merge mappings; the provided source object is unacceptable"), n = Object.keys(i), s = 0, a = n.length; s < a; s += 1)
    o = n[s], re.call(e, o) || (e[o] = i[o], r[o] = true);
}
function we(t9, e, i, r, n, o, s, a, l) {
  var h, c;
  if (Array.isArray(n))
    for (n = Array.prototype.slice.call(n), h = 0, c = n.length; h < c; h += 1)
      Array.isArray(n[h]) && F(t9, "nested arrays are not supported inside keys"), typeof n == "object" && Ts(n[h]) === "[object Object]" && (n[h] = "[object Object]");
  if (typeof n == "object" && Ts(n) === "[object Object]" && (n = "[object Object]"), n = String(n), e === null && (e = {}), r === "tag:yaml.org,2002:merge")
    if (Array.isArray(o))
      for (h = 0, c = o.length; h < c; h += 1)
        ks(t9, e, o[h], i);
    else
      ks(t9, e, o, i);
  else
    !t9.json && !re.call(i, n) && re.call(e, n) && (t9.line = s || t9.line, t9.lineStart = a || t9.lineStart, t9.position = l || t9.position, F(t9, "duplicated mapping key")), n === "__proto__" ? Object.defineProperty(e, n, {
      configurable: true,
      enumerable: true,
      writable: true,
      value: o
    }) : e[n] = o, delete i[n];
  return e;
}
function Qn(t9) {
  var e;
  e = t9.input.charCodeAt(t9.position), e === 10 ? t9.position++ : e === 13 ? (t9.position++, t9.input.charCodeAt(t9.position) === 10 && t9.position++) : F(t9, "a line break is expected"), t9.line += 1, t9.lineStart = t9.position, t9.firstTabInLine = -1;
}
function J(t9, e, i) {
  for (var r = 0, n = t9.input.charCodeAt(t9.position); n !== 0; ) {
    for (; ue(n); )
      n === 9 && t9.firstTabInLine === -1 && (t9.firstTabInLine = t9.position), n = t9.input.charCodeAt(++t9.position);
    if (e && n === 35)
      do
        n = t9.input.charCodeAt(++t9.position);
      while (n !== 10 && n !== 13 && n !== 0);
    if (Ot(n))
      for (Qn(t9), n = t9.input.charCodeAt(t9.position), r++, t9.lineIndent = 0; n === 32; )
        t9.lineIndent++, n = t9.input.charCodeAt(++t9.position);
    else
      break;
  }
  return i !== -1 && r !== 0 && t9.lineIndent < i && or(t9, "deficient indentation"), r;
}
function kr(t9) {
  var e = t9.position, i;
  return i = t9.input.charCodeAt(e), !!((i === 45 || i === 46) && i === t9.input.charCodeAt(e + 1) && i === t9.input.charCodeAt(e + 2) && (e += 3, i = t9.input.charCodeAt(e), i === 0 || dt(i)));
}
function to(t9, e) {
  e === 1 ? t9.result += " " : e > 1 && (t9.result += at.repeat(`
`, e - 1));
}
function Xx(t9, e, i) {
  var r, n, o, s, a, l, h, c, f = t9.kind, g = t9.result, p;
  if (p = t9.input.charCodeAt(t9.position), dt(p) || ke(p) || p === 35 || p === 38 || p === 42 || p === 33 || p === 124 || p === 62 || p === 39 || p === 34 || p === 37 || p === 64 || p === 96 || (p === 63 || p === 45) && (n = t9.input.charCodeAt(t9.position + 1), dt(n) || i && ke(n)))
    return false;
  for (t9.kind = "scalar", t9.result = "", o = s = t9.position, a = false; p !== 0; ) {
    if (p === 58) {
      if (n = t9.input.charCodeAt(t9.position + 1), dt(n) || i && ke(n))
        break;
    } else if (p === 35) {
      if (r = t9.input.charCodeAt(t9.position - 1), dt(r))
        break;
    } else {
      if (t9.position === t9.lineStart && kr(t9) || i && ke(p))
        break;
      if (Ot(p))
        if (l = t9.line, h = t9.lineStart, c = t9.lineIndent, J(t9, false, -1), t9.lineIndent >= e) {
          a = true, p = t9.input.charCodeAt(t9.position);
          continue;
        } else {
          t9.position = s, t9.line = l, t9.lineStart = h, t9.lineIndent = c;
          break;
        }
    }
    a && (ee(t9, o, s, false), to(t9, t9.line - l), o = s = t9.position, a = false), ue(p) || (s = t9.position + 1), p = t9.input.charCodeAt(++t9.position);
  }
  return ee(t9, o, s, false), t9.result ? true : (t9.kind = f, t9.result = g, false);
}
function Kx(t9, e) {
  var i, r, n;
  if (i = t9.input.charCodeAt(t9.position), i !== 39)
    return false;
  for (t9.kind = "scalar", t9.result = "", t9.position++, r = n = t9.position; (i = t9.input.charCodeAt(t9.position)) !== 0; )
    if (i === 39)
      if (ee(t9, r, t9.position, true), i = t9.input.charCodeAt(++t9.position), i === 39)
        r = t9.position, t9.position++, n = t9.position;
      else
        return true;
    else
      Ot(i) ? (ee(t9, r, n, true), to(t9, J(t9, false, e)), r = n = t9.position) : t9.position === t9.lineStart && kr(t9) ? F(t9, "unexpected end of the document within a single quoted scalar") : (t9.position++, n = t9.position);
  F(t9, "unexpected end of the stream within a single quoted scalar");
}
function Zx(t9, e) {
  var i, r, n, o, s, a;
  if (a = t9.input.charCodeAt(t9.position), a !== 34)
    return false;
  for (t9.kind = "scalar", t9.result = "", t9.position++, i = r = t9.position; (a = t9.input.charCodeAt(t9.position)) !== 0; ) {
    if (a === 34)
      return ee(t9, i, t9.position, true), t9.position++, true;
    if (a === 92) {
      if (ee(t9, i, t9.position, true), a = t9.input.charCodeAt(++t9.position), Ot(a))
        J(t9, false, e);
      else if (a < 256 && ql[a])
        t9.result += zl[a], t9.position++;
      else if ((s = Ux(a)) > 0) {
        for (n = s, o = 0; n > 0; n--)
          a = t9.input.charCodeAt(++t9.position), (s = jx(a)) >= 0 ? o = (o << 4) + s : F(t9, "expected hexadecimal character");
        t9.result += Gx(o), t9.position++;
      } else
        F(t9, "unknown escape sequence");
      i = r = t9.position;
    } else
      Ot(a) ? (ee(t9, i, r, true), to(t9, J(t9, false, e)), i = r = t9.position) : t9.position === t9.lineStart && kr(t9) ? F(t9, "unexpected end of the document within a double quoted scalar") : (t9.position++, r = t9.position);
  }
  F(t9, "unexpected end of the stream within a double quoted scalar");
}
function Jx(t9, e) {
  var i = true, r, n, o, s = t9.tag, a, l = t9.anchor, h, c, f, g, p, _ = /* @__PURE__ */ Object.create(null), k, M, q, v;
  if (v = t9.input.charCodeAt(t9.position), v === 91)
    c = 93, p = false, a = [];
  else if (v === 123)
    c = 125, p = true, a = {};
  else
    return false;
  for (t9.anchor !== null && (t9.anchorMap[t9.anchor] = a), v = t9.input.charCodeAt(++t9.position); v !== 0; ) {
    if (J(t9, true, e), v = t9.input.charCodeAt(t9.position), v === c)
      return t9.position++, t9.tag = s, t9.anchor = l, t9.kind = p ? "mapping" : "sequence", t9.result = a, true;
    i ? v === 44 && F(t9, "expected the node content, but found ','") : F(t9, "missed comma between flow collection entries"), M = k = q = null, f = g = false, v === 63 && (h = t9.input.charCodeAt(t9.position + 1), dt(h) && (f = g = true, t9.position++, J(t9, true, e))), r = t9.line, n = t9.lineStart, o = t9.position, Oe(t9, e, rr, false, true), M = t9.tag, k = t9.result, J(t9, true, e), v = t9.input.charCodeAt(t9.position), (g || t9.line === r) && v === 58 && (f = true, v = t9.input.charCodeAt(++t9.position), J(t9, true, e), Oe(t9, e, rr, false, true), q = t9.result), p ? we(t9, a, _, M, k, q, r, n, o) : f ? a.push(we(t9, null, _, M, k, q, r, n, o)) : a.push(k), J(t9, true, e), v = t9.input.charCodeAt(t9.position), v === 44 ? (i = true, v = t9.input.charCodeAt(++t9.position)) : i = false;
  }
  F(t9, "unexpected end of the stream within a flow collection");
}
function Qx(t9, e) {
  var i, r, n = Xr, o = false, s = false, a = e, l = 0, h = false, c, f;
  if (f = t9.input.charCodeAt(t9.position), f === 124)
    r = false;
  else if (f === 62)
    r = true;
  else
    return false;
  for (t9.kind = "scalar", t9.result = ""; f !== 0; )
    if (f = t9.input.charCodeAt(++t9.position), f === 43 || f === 45)
      Xr === n ? n = f === 43 ? bs : qx : F(t9, "repeat of a chomping mode identifier");
    else if ((c = Yx(f)) >= 0)
      c === 0 ? F(t9, "bad explicit indentation width of a block scalar; it cannot be less than one") : s ? F(t9, "repeat of an indentation width identifier") : (a = e + c - 1, s = true);
    else
      break;
  if (ue(f)) {
    do
      f = t9.input.charCodeAt(++t9.position);
    while (ue(f));
    if (f === 35)
      do
        f = t9.input.charCodeAt(++t9.position);
      while (!Ot(f) && f !== 0);
  }
  for (; f !== 0; ) {
    for (Qn(t9), t9.lineIndent = 0, f = t9.input.charCodeAt(t9.position); (!s || t9.lineIndent < a) && f === 32; )
      t9.lineIndent++, f = t9.input.charCodeAt(++t9.position);
    if (!s && t9.lineIndent > a && (a = t9.lineIndent), Ot(f)) {
      l++;
      continue;
    }
    if (t9.lineIndent < a) {
      n === bs ? t9.result += at.repeat(`
`, o ? 1 + l : l) : n === Xr && o && (t9.result += `
`);
      break;
    }
    for (r ? ue(f) ? (h = true, t9.result += at.repeat(`
`, o ? 1 + l : l)) : h ? (h = false, t9.result += at.repeat(`
`, l + 1)) : l === 0 ? o && (t9.result += " ") : t9.result += at.repeat(`
`, l) : t9.result += at.repeat(`
`, o ? 1 + l : l), o = true, s = true, l = 0, i = t9.position; !Ot(f) && f !== 0; )
      f = t9.input.charCodeAt(++t9.position);
    ee(t9, i, t9.position, false);
  }
  return true;
}
function ws(t9, e) {
  var i, r = t9.tag, n = t9.anchor, o = [], s, a = false, l;
  if (t9.firstTabInLine !== -1)
    return false;
  for (t9.anchor !== null && (t9.anchorMap[t9.anchor] = o), l = t9.input.charCodeAt(t9.position); l !== 0 && (t9.firstTabInLine !== -1 && (t9.position = t9.firstTabInLine, F(t9, "tab characters must not be used in indentation")), !(l !== 45 || (s = t9.input.charCodeAt(t9.position + 1), !dt(s)))); ) {
    if (a = true, t9.position++, J(t9, true, -1) && t9.lineIndent <= e) {
      o.push(null), l = t9.input.charCodeAt(t9.position);
      continue;
    }
    if (i = t9.line, Oe(t9, e, Nl, false, true), o.push(t9.result), J(t9, true, -1), l = t9.input.charCodeAt(t9.position), (t9.line === i || t9.lineIndent > e) && l !== 0)
      F(t9, "bad indentation of a sequence entry");
    else if (t9.lineIndent < e)
      break;
  }
  return a ? (t9.tag = r, t9.anchor = n, t9.kind = "sequence", t9.result = o, true) : false;
}
function tb(t9, e, i) {
  var r, n, o, s, a, l, h = t9.tag, c = t9.anchor, f = {}, g = /* @__PURE__ */ Object.create(null), p = null, _ = null, k = null, M = false, q = false, v;
  if (t9.firstTabInLine !== -1)
    return false;
  for (t9.anchor !== null && (t9.anchorMap[t9.anchor] = f), v = t9.input.charCodeAt(t9.position); v !== 0; ) {
    if (!M && t9.firstTabInLine !== -1 && (t9.position = t9.firstTabInLine, F(t9, "tab characters must not be used in indentation")), r = t9.input.charCodeAt(t9.position + 1), o = t9.line, (v === 63 || v === 58) && dt(r))
      v === 63 ? (M && (we(t9, f, g, p, _, null, s, a, l), p = _ = k = null), q = true, M = true, n = true) : M ? (M = false, n = true) : F(t9, "incomplete explicit mapping pair; a key node is missed; or followed by a non-tabulated empty line"), t9.position += 1, v = r;
    else {
      if (s = t9.line, a = t9.lineStart, l = t9.position, !Oe(t9, i, Dl, false, true))
        break;
      if (t9.line === o) {
        for (v = t9.input.charCodeAt(t9.position); ue(v); )
          v = t9.input.charCodeAt(++t9.position);
        if (v === 58)
          v = t9.input.charCodeAt(++t9.position), dt(v) || F(t9, "a whitespace character is expected after the key-value separator within a block mapping"), M && (we(t9, f, g, p, _, null, s, a, l), p = _ = k = null), q = true, M = false, n = false, p = t9.tag, _ = t9.result;
        else if (q)
          F(t9, "can not read an implicit mapping pair; a colon is missed");
        else
          return t9.tag = h, t9.anchor = c, true;
      } else if (q)
        F(t9, "can not read a block mapping entry; a multiline key may not be an implicit key");
      else
        return t9.tag = h, t9.anchor = c, true;
    }
    if ((t9.line === o || t9.lineIndent > e) && (M && (s = t9.line, a = t9.lineStart, l = t9.position), Oe(t9, e, nr, true, n) && (M ? _ = t9.result : k = t9.result), M || (we(t9, f, g, p, _, k, s, a, l), p = _ = k = null), J(t9, true, -1), v = t9.input.charCodeAt(t9.position)), (t9.line === o || t9.lineIndent > e) && v !== 0)
      F(t9, "bad indentation of a mapping entry");
    else if (t9.lineIndent < e)
      break;
  }
  return M && we(t9, f, g, p, _, null, s, a, l), q && (t9.tag = h, t9.anchor = c, t9.kind = "mapping", t9.result = f), q;
}
function eb(t9) {
  var e, i = false, r = false, n, o, s;
  if (s = t9.input.charCodeAt(t9.position), s !== 33)
    return false;
  if (t9.tag !== null && F(t9, "duplication of a tag property"), s = t9.input.charCodeAt(++t9.position), s === 60 ? (i = true, s = t9.input.charCodeAt(++t9.position)) : s === 33 ? (r = true, n = "!!", s = t9.input.charCodeAt(++t9.position)) : n = "!", e = t9.position, i) {
    do
      s = t9.input.charCodeAt(++t9.position);
    while (s !== 0 && s !== 62);
    t9.position < t9.length ? (o = t9.input.slice(e, t9.position), s = t9.input.charCodeAt(++t9.position)) : F(t9, "unexpected end of the stream within a verbatim tag");
  } else {
    for (; s !== 0 && !dt(s); )
      s === 33 && (r ? F(t9, "tag suffix cannot contain exclamation marks") : (n = t9.input.slice(e - 1, t9.position + 1), Rl.test(n) || F(t9, "named tag handle cannot contain such characters"), r = true, e = t9.position + 1)), s = t9.input.charCodeAt(++t9.position);
    o = t9.input.slice(e, t9.position), Hx.test(o) && F(t9, "tag suffix cannot contain flow indicator characters");
  }
  o && !Pl.test(o) && F(t9, "tag name cannot contain such characters: " + o);
  try {
    o = decodeURIComponent(o);
  } catch {
    F(t9, "tag name is malformed: " + o);
  }
  return i ? t9.tag = o : re.call(t9.tagMap, n) ? t9.tag = t9.tagMap[n] + o : n === "!" ? t9.tag = "!" + o : n === "!!" ? t9.tag = "tag:yaml.org,2002:" + o : F(t9, 'undeclared tag handle "' + n + '"'), true;
}
function ib(t9) {
  var e, i;
  if (i = t9.input.charCodeAt(t9.position), i !== 38)
    return false;
  for (t9.anchor !== null && F(t9, "duplication of an anchor property"), i = t9.input.charCodeAt(++t9.position), e = t9.position; i !== 0 && !dt(i) && !ke(i); )
    i = t9.input.charCodeAt(++t9.position);
  return t9.position === e && F(t9, "name of an anchor node must contain at least one character"), t9.anchor = t9.input.slice(e, t9.position), true;
}
function rb(t9) {
  var e, i, r;
  if (r = t9.input.charCodeAt(t9.position), r !== 42)
    return false;
  for (r = t9.input.charCodeAt(++t9.position), e = t9.position; r !== 0 && !dt(r) && !ke(r); )
    r = t9.input.charCodeAt(++t9.position);
  return t9.position === e && F(t9, "name of an alias node must contain at least one character"), i = t9.input.slice(e, t9.position), re.call(t9.anchorMap, i) || F(t9, 'unidentified alias "' + i + '"'), t9.result = t9.anchorMap[i], J(t9, true, -1), true;
}
function Oe(t9, e, i, r, n) {
  var o, s, a, l = 1, h = false, c = false, f, g, p, _, k, M;
  if (t9.listener !== null && t9.listener("open", t9), t9.tag = null, t9.anchor = null, t9.kind = null, t9.result = null, o = s = a = nr === i || Nl === i, r && J(t9, true, -1) && (h = true, t9.lineIndent > e ? l = 1 : t9.lineIndent === e ? l = 0 : t9.lineIndent < e && (l = -1)), l === 1)
    for (; eb(t9) || ib(t9); )
      J(t9, true, -1) ? (h = true, a = o, t9.lineIndent > e ? l = 1 : t9.lineIndent === e ? l = 0 : t9.lineIndent < e && (l = -1)) : a = false;
  if (a && (a = h || n), (l === 1 || nr === i) && (rr === i || Dl === i ? k = e : k = e + 1, M = t9.position - t9.lineStart, l === 1 ? a && (ws(t9, M) || tb(t9, M, k)) || Jx(t9, k) ? c = true : (s && Qx(t9, k) || Kx(t9, k) || Zx(t9, k) ? c = true : rb(t9) ? (c = true, (t9.tag !== null || t9.anchor !== null) && F(t9, "alias node should not have any properties")) : Xx(t9, k, rr === i) && (c = true, t9.tag === null && (t9.tag = "?")), t9.anchor !== null && (t9.anchorMap[t9.anchor] = t9.result)) : l === 0 && (c = a && ws(t9, M))), t9.tag === null)
    t9.anchor !== null && (t9.anchorMap[t9.anchor] = t9.result);
  else if (t9.tag === "?") {
    for (t9.result !== null && t9.kind !== "scalar" && F(t9, 'unacceptable node kind for !<?> tag; it should be "scalar", not "' + t9.kind + '"'), f = 0, g = t9.implicitTypes.length; f < g; f += 1)
      if (_ = t9.implicitTypes[f], _.resolve(t9.result)) {
        t9.result = _.construct(t9.result), t9.tag = _.tag, t9.anchor !== null && (t9.anchorMap[t9.anchor] = t9.result);
        break;
      }
  } else if (t9.tag !== "!") {
    if (re.call(t9.typeMap[t9.kind || "fallback"], t9.tag))
      _ = t9.typeMap[t9.kind || "fallback"][t9.tag];
    else
      for (_ = null, p = t9.typeMap.multi[t9.kind || "fallback"], f = 0, g = p.length; f < g; f += 1)
        if (t9.tag.slice(0, p[f].tag.length) === p[f].tag) {
          _ = p[f];
          break;
        }
    _ || F(t9, "unknown tag !<" + t9.tag + ">"), t9.result !== null && _.kind !== t9.kind && F(t9, "unacceptable node kind for !<" + t9.tag + '> tag; it should be "' + _.kind + '", not "' + t9.kind + '"'), _.resolve(t9.result, t9.tag) ? (t9.result = _.construct(t9.result, t9.tag), t9.anchor !== null && (t9.anchorMap[t9.anchor] = t9.result)) : F(t9, "cannot resolve a node with !<" + t9.tag + "> explicit tag");
  }
  return t9.listener !== null && t9.listener("close", t9), t9.tag !== null || t9.anchor !== null || c;
}
function nb(t9) {
  var e = t9.position, i, r, n, o = false, s;
  for (t9.version = null, t9.checkLineBreaks = t9.legacy, t9.tagMap = /* @__PURE__ */ Object.create(null), t9.anchorMap = /* @__PURE__ */ Object.create(null); (s = t9.input.charCodeAt(t9.position)) !== 0 && (J(t9, true, -1), s = t9.input.charCodeAt(t9.position), !(t9.lineIndent > 0 || s !== 37)); ) {
    for (o = true, s = t9.input.charCodeAt(++t9.position), i = t9.position; s !== 0 && !dt(s); )
      s = t9.input.charCodeAt(++t9.position);
    for (r = t9.input.slice(i, t9.position), n = [], r.length < 1 && F(t9, "directive name must not be less than one character in length"); s !== 0; ) {
      for (; ue(s); )
        s = t9.input.charCodeAt(++t9.position);
      if (s === 35) {
        do
          s = t9.input.charCodeAt(++t9.position);
        while (s !== 0 && !Ot(s));
        break;
      }
      if (Ot(s))
        break;
      for (i = t9.position; s !== 0 && !dt(s); )
        s = t9.input.charCodeAt(++t9.position);
      n.push(t9.input.slice(i, t9.position));
    }
    s !== 0 && Qn(t9), re.call(vs, r) ? vs[r](t9, r, n) : or(t9, 'unknown document directive "' + r + '"');
  }
  if (J(t9, true, -1), t9.lineIndent === 0 && t9.input.charCodeAt(t9.position) === 45 && t9.input.charCodeAt(t9.position + 1) === 45 && t9.input.charCodeAt(t9.position + 2) === 45 ? (t9.position += 3, J(t9, true, -1)) : o && F(t9, "directives end mark is expected"), Oe(t9, t9.lineIndent - 1, nr, false, true), J(t9, true, -1), t9.checkLineBreaks && Wx.test(t9.input.slice(e, t9.position)) && or(t9, "non-ASCII line breaks are interpreted as content"), t9.documents.push(t9.result), t9.position === t9.lineStart && kr(t9)) {
    t9.input.charCodeAt(t9.position) === 46 && (t9.position += 3, J(t9, true, -1));
    return;
  }
  if (t9.position < t9.length - 1)
    F(t9, "end of the stream or a document separator is expected");
  else
    return;
}
function Hl(t9, e) {
  t9 = String(t9), e = e || {}, t9.length !== 0 && (t9.charCodeAt(t9.length - 1) !== 10 && t9.charCodeAt(t9.length - 1) !== 13 && (t9 += `
`), t9.charCodeAt(0) === 65279 && (t9 = t9.slice(1)));
  var i = new Vx(t9, e), r = t9.indexOf("\0");
  for (r !== -1 && (i.position = r, F(i, "null byte is not allowed in input")), i.input += "\0"; i.input.charCodeAt(i.position) === 32; )
    i.lineIndent += 1, i.position += 1;
  for (; i.position < i.length - 1; )
    nb(i);
  return i.documents;
}
function ob(t9, e, i) {
  e !== null && typeof e == "object" && typeof i > "u" && (i = e, e = null);
  var r = Hl(t9, i);
  if (typeof e != "function")
    return r;
  for (var n = 0, o = r.length; n < o; n += 1)
    e(r[n]);
}
function sb(t9, e) {
  var i = Hl(t9, e);
  if (i.length !== 0) {
    if (i.length === 1)
      return i[0];
    throw new jt("expected a single document in the stream, but found more");
  }
}
var ab = ob;
var lb = sb;
var hb = {
  loadAll: ab,
  load: lb
};
var cb = Ol;
var ub = hb.load;
function fb(t9) {
  const e = t9.match(La);
  if (!e)
    return {
      text: t9,
      metadata: {}
    };
  let i = ub(e[1], {
    // To support config, we need JSON schema.
    // https://www.yaml.org/spec/1.2/spec.html#id2803231
    schema: cb
  }) ?? {};
  i = typeof i == "object" && !Array.isArray(i) ? i : {};
  const r = {};
  return i.displayMode && (r.displayMode = i.displayMode.toString()), i.title && (r.title = i.title.toString()), i.config && (r.config = i.config), {
    text: t9.slice(e[0].length),
    metadata: r
  };
}
var db = (t9) => t9.replace(/\r\n?/g, `
`).replace(
  /<(\w+)([^>]*)>/g,
  (e, i, r) => "<" + i + r.replace(/="([^"]*)"/g, "='$1'") + ">"
);
var pb = (t9) => {
  const { text: e, metadata: i } = fb(t9), { displayMode: r, title: n, config: o = {} } = i;
  return r && (o.gantt || (o.gantt = {}), o.gantt.displayMode = r), { title: n, config: o, text: e };
};
var gb = (t9) => {
  const e = Xe.detectInit(t9) ?? {}, i = Xe.detectDirective(t9, "wrap");
  return Array.isArray(i) ? e.wrap = i.some(({ type: r }) => {
  }) : (i == null ? void 0 : i.type) === "wrap" && (e.wrap = true), {
    text: p0(t9),
    directive: e
  };
};
function mb(t9) {
  const e = db(t9), i = pb(e), r = gb(i.text), n = Ka(i.config, r.directive);
  return t9 = TC(r.text), {
    code: t9,
    title: i.title,
    config: n
  };
}
var _b = 5e4;
var yb = "graph TB;a[Maximum text size in diagram exceeded];style a fill:#faa";
var Cb = "sandbox";
var xb = "loose";
var bb = "http://www.w3.org/2000/svg";
var Tb = "http://www.w3.org/1999/xlink";
var Sb = "http://www.w3.org/1999/xhtml";
var vb = "100%";
var kb = "100%";
var wb = "border:0;margin:0;";
var Bb = "margin:0";
var Fb = "allow-top-navigation-by-user-activation allow-popups";
var Lb = 'The "iframe" tag is not supported by your browser.';
var Ab = ["foreignobject"];
var Eb = ["dominant-baseline"];
function jl(t9) {
  const e = mb(t9);
  return tr(), t_(e.config ?? {}), e;
}
async function Mb(t9, e) {
  Kn(), t9 = jl(t9).code;
  try {
    await Zn(t9);
  } catch (i) {
    if (e != null && e.suppressErrors)
      return false;
    throw i;
  }
  return true;
}
var Ob = function(t9) {
  let e = t9;
  return e = e.replace(/style.*:\S*#.*;/g, function(i) {
    return i.substring(0, i.length - 1);
  }), e = e.replace(/classDef.*:\S*#.*;/g, function(i) {
    return i.substring(0, i.length - 1);
  }), e = e.replace(/#\w+;/g, function(i) {
    const r = i.substring(1, i.length - 1);
    return /^\+?\d+$/.test(r) ? "ﬂ°°" + r + "¶ß" : "ﬂ°" + r + "¶ß";
  }), e;
};
var $b = function(t9) {
  return t9.replace(/ﬂ°°/g, "&#").replace(/ﬂ°/g, "&").replace(/¶ß/g, ";");
};
var Bs = (t9, e, i = []) => `
.${t9} ${e} { ${i.join(" !important; ")} !important; }`;
var Ib = (t9, e = {}) => {
  var r;
  let i = "";
  if (t9.themeCSS !== void 0 && (i += `
${t9.themeCSS}`), t9.fontFamily !== void 0 && (i += `
:root { --mermaid-font-family: ${t9.fontFamily}}`), t9.altFontFamily !== void 0 && (i += `
:root { --mermaid-alt-font-family: ${t9.altFontFamily}}`), !Yr(e)) {
    const a = t9.htmlLabels || ((r = t9.flowchart) == null ? void 0 : r.htmlLabels) ? ["> *", "span"] : ["rect", "polygon", "ellipse", "circle", "path"];
    for (const l in e) {
      const h = e[l];
      Yr(h.styles) || a.forEach((c) => {
        i += Bs(h.id, c, h.styles);
      }), Yr(h.textStyles) || (i += Bs(h.id, "tspan", h.textStyles));
    }
  }
  return i;
};
var Db = (t9, e, i, r) => {
  const n = Ib(t9, i), o = Ny(e, n, t9.themeVariables);
  return pn(G0(`${r}{${o}}`), X0);
};
var Nb = (t9 = "", e, i) => {
  let r = t9;
  return !i && !e && (r = r.replace(
    /marker-end="url\([\d+./:=?A-Za-z-]*?#/g,
    'marker-end="url(#'
  )), r = $b(r), r = r.replace(/<br>/g, "<br/>"), r;
};
var Rb = (t9 = "", e) => {
  var n, o;
  const i = (o = (n = e == null ? void 0 : e.viewBox) == null ? void 0 : n.baseVal) != null && o.height ? e.viewBox.baseVal.height + "px" : kb, r = btoa('<body style="' + Bb + '">' + t9 + "</body>");
  return `<iframe style="width:${vb};height:${i};${wb}" src="data:text/html;base64,${r}" sandbox="${Fb}">
  ${Lb}
</iframe>`;
};
var Fs = (t9, e, i, r, n) => {
  const o = t9.append("div");
  o.attr("id", i), r && o.attr("style", r);
  const s = o.append("svg").attr("id", e).attr("width", "100%").attr("xmlns", bb);
  return n && s.attr("xmlns:xlink", n), s.append("g"), t9;
};
function Ls(t9, e) {
  return t9.append("iframe").attr("id", e).attr("style", "width: 100%; height: 100%;").attr("sandbox", "");
}
var Pb = (t9, e, i, r) => {
  var n, o, s;
  (n = t9.getElementById(e)) == null || n.remove(), (o = t9.getElementById(i)) == null || o.remove(), (s = t9.getElementById(r)) == null || s.remove();
};
var qb = async function(t9, e, i) {
  var E, S, C, O, x, D;
  Kn();
  const r = jl(e);
  e = r.code;
  const n = Ft();
  L.debug(n), e.length > ((n == null ? void 0 : n.maxTextSize) ?? _b) && (e = yb);
  const o = "#" + t9, s = "i" + t9, a = "#" + s, l = "d" + t9, h = "#" + l;
  let c = Ct("body");
  const f = n.securityLevel === Cb, g = n.securityLevel === xb, p = n.fontFamily;
  if (i !== void 0) {
    if (i && (i.innerHTML = ""), f) {
      const T = Ls(Ct(i), s);
      c = Ct(T.nodes()[0].contentDocument.body), c.node().style.margin = 0;
    } else
      c = Ct(i);
    Fs(c, t9, l, `font-family: ${p}`, Tb);
  } else {
    if (Pb(document, t9, l, s), f) {
      const T = Ls(Ct("body"), s);
      c = Ct(T.nodes()[0].contentDocument.body), c.node().style.margin = 0;
    } else
      c = Ct("body");
    Fs(c, t9, l);
  }
  e = Ob(e);
  let _, k;
  try {
    _ = await Zn(e, { title: r.title });
  } catch (T) {
    _ = new Al("error"), k = T;
  }
  const M = c.select(h).node(), q = _.type, v = M.firstChild, z = v.firstChild, Q = (S = (E = _.renderer).getClasses) == null ? void 0 : S.call(E, e, _), X = Db(n, q, Q, o), G = document.createElement("style");
  G.innerHTML = X, v.insertBefore(G, z);
  try {
    await _.renderer.draw(e, t9, fs, _);
  } catch (T) {
    throw my.draw(e, t9, fs), T;
  }
  const W = c.select(`${h} svg`), Vt = (O = (C = _.db).getAccTitle) == null ? void 0 : O.call(C), K = (D = (x = _.db).getAccDescription) == null ? void 0 : D.call(x);
  Wb(q, W, Vt, K), c.select(`[id="${t9}"]`).selectAll("foreignobject > *").attr("xmlns", Sb);
  let I = c.select(h).node().innerHTML;
  if (L.debug("config.arrowMarkerAbsolute", n.arrowMarkerAbsolute), I = Nb(I, f, Ta(n.arrowMarkerAbsolute)), f) {
    const T = c.select(h + " svg").node();
    I = Rb(I, T);
  } else
    g || (I = Gi.sanitize(I, {
      ADD_TAGS: Ab,
      ADD_ATTR: Eb
    }));
  if (Jy(), k)
    throw k;
  const At = Ct(f ? a : h).node();
  return At && "remove" in At && At.remove(), {
    svg: I,
    bindFunctions: _.db.bindFunctions
  };
};
function zb(t9 = {}) {
  var i;
  t9 != null && t9.fontFamily && !((i = t9.themeVariables) != null && i.fontFamily) && (t9.themeVariables || (t9.themeVariables = {}), t9.themeVariables.fontFamily = t9.fontFamily), Z0(t9), t9 != null && t9.theme && t9.theme in Ut ? t9.themeVariables = Ut[t9.theme].getThemeVariables(
    t9.themeVariables
  ) : t9 && (t9.themeVariables = Ut.default.getThemeVariables(t9.themeVariables));
  const e = typeof t9 == "object" ? K0(t9) : nl();
  bn(e.logLevel), Kn();
}
function Wb(t9, e, i, r) {
  xC(e, t9), bC(e, i, r, e.attr("id"));
}
var pe = Object.freeze({
  render: qb,
  parse: Mb,
  getDiagramFromText: Zn,
  initialize: zb,
  getConfig: Ft,
  setConfig: Q0,
  getSiteConfig: nl,
  updateSiteConfig: J0,
  reset: () => {
    tr();
  },
  globalReset: () => {
    tr(si);
  },
  defaultConfig: si
});
bn(Ft().logLevel);
tr(Ft());
var Hb = async () => {
  L.debug("Loading registered diagrams");
  const e = (await Promise.allSettled(
    Object.entries(Ae).map(async ([i, { detector: r, loader: n }]) => {
      if (n)
        try {
          Xn(i);
        } catch {
          try {
            const { diagram: s, id: a } = await n();
            ir(a, s, r);
          } catch (s) {
            throw L.error(`Failed to load external diagram with key ${i}. Removing from detectors.`), delete Ae[i], s;
          }
        }
    })
  )).filter((i) => i.status === "rejected");
  if (e.length > 0) {
    L.error(`Failed to load ${e.length} external diagrams`);
    for (const i of e)
      L.error(i);
    throw new Error(`Failed to load ${e.length} external diagrams`);
  }
};
var jb = (t9, e, i) => {
  L.warn(t9), Xa(t9) ? (i && i(t9.str, t9.hash), e.push({ ...t9, message: t9.str, error: t9 })) : (i && i(t9), t9 instanceof Error && e.push({
    str: t9.message,
    message: t9.message,
    hash: t9.name,
    error: t9
  }));
};
var Ul = async function(t9 = {
  querySelector: ".mermaid"
}) {
  try {
    await Ub(t9);
  } catch (e) {
    if (Xa(e) && L.error(e.str), xt.parseError && xt.parseError(e), !t9.suppressErrors)
      throw L.error("Use the suppressErrors option to suppress these errors"), e;
  }
};
var Ub = async function({ postRenderCallback: t9, querySelector: e, nodes: i } = {
  querySelector: ".mermaid"
}) {
  const r = pe.getConfig();
  L.debug(`${t9 ? "" : "No "}Callback function found`);
  let n;
  if (i)
    n = i;
  else if (e)
    n = document.querySelectorAll(e);
  else
    throw new Error("Nodes and querySelector are both undefined");
  L.debug(`Found ${n.length} diagrams`), (r == null ? void 0 : r.startOnLoad) !== void 0 && (L.debug("Start On Load: " + (r == null ? void 0 : r.startOnLoad)), pe.updateSiteConfig({ startOnLoad: r == null ? void 0 : r.startOnLoad }));
  const o = new Xe.InitIDGenerator(r.deterministicIds, r.deterministicIDSeed);
  let s;
  const a = [];
  for (const l of Array.from(n)) {
    L.info("Rendering diagram: " + l.id);
    if (l.getAttribute("data-processed"))
      continue;
    l.setAttribute("data-processed", "true");
    const h = `mermaid-${o.next()}`;
    s = l.innerHTML, s = oh(Xe.entityDecode(s)).trim().replace(/<br\s*\/?>/gi, "<br/>");
    const c = Xe.detectInit(s);
    c && L.debug("Detected early reinit: ", c);
    try {
      const { svg: f, bindFunctions: g } = await Xl(h, s, l);
      l.innerHTML = f, t9 && await t9(h), g && g(l);
    } catch (f) {
      jb(f, a, xt.parseError);
    }
  }
  if (a.length > 0)
    throw a[0];
};
var Yl = function(t9) {
  pe.initialize(t9);
};
var Yb = async function(t9, e, i) {
  L.warn("mermaid.init is deprecated. Please use run instead."), t9 && Yl(t9);
  const r = { postRenderCallback: i, querySelector: ".mermaid" };
  typeof e == "string" ? r.querySelector = e : e && (e instanceof HTMLElement ? r.nodes = [e] : r.nodes = e), await Ul(r);
};
var Gb = async (t9, {
  lazyLoad: e = true
} = {}) => {
  Ea(...t9), e === false && await Hb();
};
var Gl = function() {
  if (xt.startOnLoad) {
    const { startOnLoad: t9 } = pe.getConfig();
    t9 && xt.run().catch((e) => L.error("Mermaid failed to initialize", e));
  }
};
if (typeof document < "u") {
  window.addEventListener("load", Gl, false);
}
var Vb = function(t9) {
  xt.parseError = t9;
};
var sr = [];
var Kr = false;
var Vl = async () => {
  if (!Kr) {
    for (Kr = true; sr.length > 0; ) {
      const t9 = sr.shift();
      if (t9)
        try {
          await t9();
        } catch (e) {
          L.error("Error executing queue", e);
        }
    }
    Kr = false;
  }
};
var Xb = async (t9, e) => new Promise((i, r) => {
  const n = () => new Promise((o, s) => {
    pe.parse(t9, e).then(
      (a) => {
        o(a), i(a);
      },
      (a) => {
        var l;
        L.error("Error parsing", a), (l = xt.parseError) == null || l.call(xt, a), s(a), r(a);
      }
    );
  });
  sr.push(n), Vl().catch(r);
});
var Xl = (t9, e, i) => new Promise((r, n) => {
  const o = () => new Promise((s, a) => {
    pe.render(t9, e, i).then(
      (l) => {
        s(l), r(l);
      },
      (l) => {
        var h;
        L.error("Error parsing", l), (h = xt.parseError) == null || h.call(xt, l), a(l), n(l);
      }
    );
  });
  sr.push(o), Vl().catch(n);
});
var xt = {
  startOnLoad: true,
  mermaidAPI: pe,
  parse: Xb,
  render: Xl,
  init: Yb,
  run: Ul,
  registerExternalDiagrams: Gb,
  initialize: Yl,
  parseError: void 0,
  contentLoaded: Gl,
  setParseErrorHandler: Vb,
  detectType: mr
};

export {
  oh,
  sh,
  ah,
  hh,
  L,
  Es,
  wh,
  js,
  mt,
  Ct,
  kn,
  Us,
  hi,
  Qe,
  hu,
  ft,
  wn,
  Zb,
  Vs,
  Fo,
  Qt,
  mu,
  Jb,
  Qb,
  t1,
  e1,
  i1,
  r1,
  n1,
  $o,
  An,
  Io,
  o1,
  s1,
  a1,
  $f,
  Nf,
  fr,
  ei,
  Ta,
  l1,
  In,
  $,
  $t,
  Ye,
  ci,
  B,
  A,
  ap,
  dp,
  nt,
  Dt,
  Xi,
  $e,
  ge,
  Dn,
  _r,
  ne,
  ui,
  Ie,
  Nn,
  Fg,
  Ag,
  ts,
  Mg,
  Og,
  $g,
  Na,
  Pg,
  fi,
  Zi,
  Ji,
  Pa,
  br,
  Yg,
  Rn,
  im,
  Fm,
  os,
  Pn,
  $m,
  Im,
  Ha,
  zm,
  ja,
  Ya,
  Xm,
  Km,
  n0,
  o0,
  s0,
  h0,
  c0,
  m0,
  S0,
  v0,
  w0,
  L0,
  E0,
  Qi,
  Wn,
  Ka,
  Xe,
  si,
  Q0,
  Ft,
  uy,
  Sl,
  py,
  Ry,
  Py,
  qy,
  zy,
  Wy,
  Hy,
  jy,
  Uy,
  Ll,
  Xy,
  d1,
  rC,
  yn,
  pC,
  Yr,
  $b,
  xt
};
/*! Bundled license information:

mermaid/dist/mermaid-e4a58915.js:
  (*! @license DOMPurify 3.0.5 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/3.0.5/LICENSE *)
  (*! js-yaml 4.1.0 https://github.com/nodeca/js-yaml @license MIT *)
  (*! Check if previously processed *)
  (*!
   * Wait for document loaded before starting the execution
   *)
*/
//# sourceMappingURL=chunk-AMDGFOT2.js.map
