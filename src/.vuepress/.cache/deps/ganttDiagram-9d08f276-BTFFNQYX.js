import {
  On,
  Xn,
  Zn,
  nn,
  wn
} from "./chunk-XM2D4LVC.js";
import {
  t
} from "./chunk-ZLNEJVJK.js";
import {
  Ct,
  Es,
  Ft,
  Hy,
  In,
  L,
  Py,
  Ry,
  Sl,
  Us,
  Vs,
  Wy,
  Xe,
  Zb,
  ah,
  ft,
  hh,
  hi,
  hu,
  jy,
  kn,
  qy,
  sh,
  zy
} from "./chunk-AMDGFOT2.js";

// node_modules/.pnpm/registry.npmmirror.com+mermaid@10.5.0/node_modules/mermaid/dist/ganttDiagram-9d08f276.js
function Jn(t2, e) {
  let n;
  if (e === void 0)
    for (const r of t2)
      r != null && (n < r || n === void 0 && r >= r) && (n = r);
  else {
    let r = -1;
    for (let i of t2)
      (i = e(i, ++r, t2)) != null && (n < i || n === void 0 && i >= i) && (n = i);
  }
  return n;
}
function Kn(t2, e) {
  let n;
  if (e === void 0)
    for (const r of t2)
      r != null && (n > r || n === void 0 && r >= r) && (n = r);
  else {
    let r = -1;
    for (let i of t2)
      (i = e(i, ++r, t2)) != null && (n > i || n === void 0 && i >= i) && (n = i);
  }
  return n;
}
function tr(t2) {
  return t2;
}
var Ht = 1;
var te = 2;
var le = 3;
var Nt = 4;
var Le = 1e-6;
function er(t2) {
  return "translate(" + t2 + ",0)";
}
function nr(t2) {
  return "translate(0," + t2 + ")";
}
function rr(t2) {
  return (e) => +t2(e);
}
function ir(t2, e) {
  return e = Math.max(0, t2.bandwidth() - e * 2) / 2, t2.round() && (e = Math.round(e)), (n) => +t2(n) + e;
}
function ar() {
  return !this.__axis;
}
function Qe(t2, e) {
  var n = [], r = null, i = null, a = 6, s = 6, y = 3, _ = typeof window < "u" && window.devicePixelRatio > 1 ? 0 : 0.5, k = t2 === Ht || t2 === Nt ? -1 : 1, D = t2 === Nt || t2 === te ? "x" : "y", U = t2 === Ht || t2 === le ? er : nr;
  function w(x) {
    var q = r ?? (e.ticks ? e.ticks.apply(e, n) : e.domain()), g = i ?? (e.tickFormat ? e.tickFormat.apply(e, n) : tr), L2 = Math.max(a, 0) + y, O = e.range(), W = +O[0] + _, B = +O[O.length - 1] + _, Z = (e.bandwidth ? ir : rr)(e.copy(), _), Q = x.selection ? x.selection() : x, v = Q.selectAll(".domain").data([null]), A = Q.selectAll(".tick").data(q, e).order(), T = A.exit(), F = A.enter().append("g").attr("class", "tick"), C = A.select("line"), b = A.select("text");
    v = v.merge(v.enter().insert("path", ".tick").attr("class", "domain").attr("stroke", "currentColor")), A = A.merge(F), C = C.merge(F.append("line").attr("stroke", "currentColor").attr(D + "2", k * a)), b = b.merge(F.append("text").attr("fill", "currentColor").attr(D, k * L2).attr("dy", t2 === Ht ? "0em" : t2 === le ? "0.71em" : "0.32em")), x !== Q && (v = v.transition(x), A = A.transition(x), C = C.transition(x), b = b.transition(x), T = T.transition(x).attr("opacity", Le).attr("transform", function(o) {
      return isFinite(o = Z(o)) ? U(o + _) : this.getAttribute("transform");
    }), F.attr("opacity", Le).attr("transform", function(o) {
      var d = this.parentNode.__axis;
      return U((d && isFinite(d = d(o)) ? d : Z(o)) + _);
    })), T.remove(), v.attr("d", t2 === Nt || t2 === te ? s ? "M" + k * s + "," + W + "H" + _ + "V" + B + "H" + k * s : "M" + _ + "," + W + "V" + B : s ? "M" + W + "," + k * s + "V" + _ + "H" + B + "V" + k * s : "M" + W + "," + _ + "H" + B), A.attr("opacity", 1).attr("transform", function(o) {
      return U(Z(o) + _);
    }), C.attr(D + "2", k * a), b.attr(D, k * L2).text(g), Q.filter(ar).attr("fill", "none").attr("font-size", 10).attr("font-family", "sans-serif").attr("text-anchor", t2 === te ? "start" : t2 === Nt ? "end" : "middle"), Q.each(function() {
      this.__axis = Z;
    });
  }
  return w.scale = function(x) {
    return arguments.length ? (e = x, w) : e;
  }, w.ticks = function() {
    return n = Array.from(arguments), w;
  }, w.tickArguments = function(x) {
    return arguments.length ? (n = x == null ? [] : Array.from(x), w) : n.slice();
  }, w.tickValues = function(x) {
    return arguments.length ? (r = x == null ? null : Array.from(x), w) : r && r.slice();
  }, w.tickFormat = function(x) {
    return arguments.length ? (i = x, w) : i;
  }, w.tickSize = function(x) {
    return arguments.length ? (a = s = +x, w) : a;
  }, w.tickSizeInner = function(x) {
    return arguments.length ? (a = +x, w) : a;
  }, w.tickSizeOuter = function(x) {
    return arguments.length ? (s = +x, w) : s;
  }, w.tickPadding = function(x) {
    return arguments.length ? (y = +x, w) : y;
  }, w.offset = function(x) {
    return arguments.length ? (_ = +x, w) : _;
  }, w;
}
function sr(t2) {
  return Qe(Ht, t2);
}
function or(t2) {
  return Qe(le, t2);
}
var cr = Math.PI / 180;
var ur = 180 / Math.PI;
var Bt = 18;
var $e = 0.96422;
var Je = 1;
var Ke = 0.82521;
var tn = 4 / 29;
var bt = 6 / 29;
var en = 3 * bt * bt;
var lr = bt * bt * bt;
function nn2(t2) {
  if (t2 instanceof ot)
    return new ot(t2.l, t2.a, t2.b, t2.opacity);
  if (t2 instanceof lt)
    return rn(t2);
  t2 instanceof ft || (t2 = hu(t2));
  var e = ie(t2.r), n = ie(t2.g), r = ie(t2.b), i = ee((0.2225045 * e + 0.7168786 * n + 0.0606169 * r) / Je), a, s;
  return e === n && n === r ? a = s = i : (a = ee((0.4360747 * e + 0.3850649 * n + 0.1430804 * r) / $e), s = ee((0.0139322 * e + 0.0971045 * n + 0.7141733 * r) / Ke)), new ot(116 * i - 16, 500 * (a - i), 200 * (i - s), t2.opacity);
}
function fr(t2, e, n, r) {
  return arguments.length === 1 ? nn2(t2) : new ot(t2, e, n, r ?? 1);
}
function ot(t2, e, n, r) {
  this.l = +t2, this.a = +e, this.b = +n, this.opacity = +r;
}
kn(ot, fr, Us(hi, {
  brighter(t2) {
    return new ot(this.l + Bt * (t2 ?? 1), this.a, this.b, this.opacity);
  },
  darker(t2) {
    return new ot(this.l - Bt * (t2 ?? 1), this.a, this.b, this.opacity);
  },
  rgb() {
    var t2 = (this.l + 16) / 116, e = isNaN(this.a) ? t2 : t2 + this.a / 500, n = isNaN(this.b) ? t2 : t2 - this.b / 200;
    return e = $e * ne(e), t2 = Je * ne(t2), n = Ke * ne(n), new ft(
      re(3.1338561 * e - 1.6168667 * t2 - 0.4906146 * n),
      re(-0.9787684 * e + 1.9161415 * t2 + 0.033454 * n),
      re(0.0719453 * e - 0.2289914 * t2 + 1.4052427 * n),
      this.opacity
    );
  }
}));
function ee(t2) {
  return t2 > lr ? Math.pow(t2, 1 / 3) : t2 / en + tn;
}
function ne(t2) {
  return t2 > bt ? t2 * t2 * t2 : en * (t2 - tn);
}
function re(t2) {
  return 255 * (t2 <= 31308e-7 ? 12.92 * t2 : 1.055 * Math.pow(t2, 1 / 2.4) - 0.055);
}
function ie(t2) {
  return (t2 /= 255) <= 0.04045 ? t2 / 12.92 : Math.pow((t2 + 0.055) / 1.055, 2.4);
}
function hr(t2) {
  if (t2 instanceof lt)
    return new lt(t2.h, t2.c, t2.l, t2.opacity);
  if (t2 instanceof ot || (t2 = nn2(t2)), t2.a === 0 && t2.b === 0)
    return new lt(NaN, 0 < t2.l && t2.l < 100 ? 0 : NaN, t2.l, t2.opacity);
  var e = Math.atan2(t2.b, t2.a) * ur;
  return new lt(e < 0 ? e + 360 : e, Math.sqrt(t2.a * t2.a + t2.b * t2.b), t2.l, t2.opacity);
}
function fe(t2, e, n, r) {
  return arguments.length === 1 ? hr(t2) : new lt(t2, e, n, r ?? 1);
}
function lt(t2, e, n, r) {
  this.h = +t2, this.c = +e, this.l = +n, this.opacity = +r;
}
function rn(t2) {
  if (isNaN(t2.h))
    return new ot(t2.l, 0, 0, t2.opacity);
  var e = t2.h * cr;
  return new ot(t2.l, Math.cos(e) * t2.c, Math.sin(e) * t2.c, t2.opacity);
}
kn(lt, fe, Us(hi, {
  brighter(t2) {
    return new lt(this.h, this.c, this.l + Bt * (t2 ?? 1), this.opacity);
  },
  darker(t2) {
    return new lt(this.h, this.c, this.l - Bt * (t2 ?? 1), this.opacity);
  },
  rgb() {
    return rn(this).rgb();
  }
}));
function dr(t2) {
  return function(e, n) {
    var r = t2((e = fe(e)).h, (n = fe(n)).h), i = Vs(e.c, n.c), a = Vs(e.l, n.l), s = Vs(e.opacity, n.opacity);
    return function(y) {
      return e.h = r(y), e.c = i(y), e.l = a(y), e.opacity = s(y), e + "";
    };
  };
}
var mr = dr(Zb);
function gr(t2, e) {
  t2 = t2.slice();
  var n = 0, r = t2.length - 1, i = t2[n], a = t2[r], s;
  return a < i && (s = n, n = r, r = s, s = i, i = a, a = s), t2[n] = e.floor(i), t2[r] = e.ceil(a), t2;
}
var ae = /* @__PURE__ */ new Date();
var se = /* @__PURE__ */ new Date();
function nt(t2, e, n, r) {
  function i(a) {
    return t2(a = arguments.length === 0 ? /* @__PURE__ */ new Date() : /* @__PURE__ */ new Date(+a)), a;
  }
  return i.floor = function(a) {
    return t2(a = /* @__PURE__ */ new Date(+a)), a;
  }, i.ceil = function(a) {
    return t2(a = new Date(a - 1)), e(a, 1), t2(a), a;
  }, i.round = function(a) {
    var s = i(a), y = i.ceil(a);
    return a - s < y - a ? s : y;
  }, i.offset = function(a, s) {
    return e(a = /* @__PURE__ */ new Date(+a), s == null ? 1 : Math.floor(s)), a;
  }, i.range = function(a, s, y) {
    var _ = [], k;
    if (a = i.ceil(a), y = y == null ? 1 : Math.floor(y), !(a < s) || !(y > 0))
      return _;
    do
      _.push(k = /* @__PURE__ */ new Date(+a)), e(a, y), t2(a);
    while (k < a && a < s);
    return _;
  }, i.filter = function(a) {
    return nt(function(s) {
      if (s >= s)
        for (; t2(s), !a(s); )
          s.setTime(s - 1);
    }, function(s, y) {
      if (s >= s)
        if (y < 0)
          for (; ++y <= 0; )
            for (; e(s, -1), !a(s); )
              ;
        else
          for (; --y >= 0; )
            for (; e(s, 1), !a(s); )
              ;
    });
  }, n && (i.count = function(a, s) {
    return ae.setTime(+a), se.setTime(+s), t2(ae), t2(se), Math.floor(n(ae, se));
  }, i.every = function(a) {
    return a = Math.floor(a), !isFinite(a) || !(a > 0) ? null : a > 1 ? i.filter(r ? function(s) {
      return r(s) % a === 0;
    } : function(s) {
      return i.count(0, s) % a === 0;
    }) : i;
  }), i;
}
var Zt = nt(function() {
}, function(t2, e) {
  t2.setTime(+t2 + e);
}, function(t2, e) {
  return e - t2;
});
Zt.every = function(t2) {
  return t2 = Math.floor(t2), !isFinite(t2) || !(t2 > 0) ? null : t2 > 1 ? nt(function(e) {
    e.setTime(Math.floor(e / t2) * t2);
  }, function(e, n) {
    e.setTime(+e + n * t2);
  }, function(e, n) {
    return (n - e) / t2;
  }) : Zt;
};
var he = Zt;
Zt.range;
var ft2 = 1e3;
var at = ft2 * 60;
var ht = at * 60;
var mt = ht * 24;
var Te = mt * 7;
var Ee = mt * 30;
var oe = mt * 365;
var an = nt(function(t2) {
  t2.setTime(t2 - t2.getMilliseconds());
}, function(t2, e) {
  t2.setTime(+t2 + e * ft2);
}, function(t2, e) {
  return (e - t2) / ft2;
}, function(t2) {
  return t2.getUTCSeconds();
});
var dt = an;
an.range;
var sn = nt(function(t2) {
  t2.setTime(t2 - t2.getMilliseconds() - t2.getSeconds() * ft2);
}, function(t2, e) {
  t2.setTime(+t2 + e * at);
}, function(t2, e) {
  return (e - t2) / at;
}, function(t2) {
  return t2.getMinutes();
});
var Xt = sn;
sn.range;
var on = nt(function(t2) {
  t2.setTime(t2 - t2.getMilliseconds() - t2.getSeconds() * ft2 - t2.getMinutes() * at);
}, function(t2, e) {
  t2.setTime(+t2 + e * ht);
}, function(t2, e) {
  return (e - t2) / ht;
}, function(t2) {
  return t2.getHours();
});
var qt = on;
on.range;
var cn = nt(
  (t2) => t2.setHours(0, 0, 0, 0),
  (t2, e) => t2.setDate(t2.getDate() + e),
  (t2, e) => (e - t2 - (e.getTimezoneOffset() - t2.getTimezoneOffset()) * at) / mt,
  (t2) => t2.getDate() - 1
);
var wt = cn;
cn.range;
function kt(t2) {
  return nt(function(e) {
    e.setDate(e.getDate() - (e.getDay() + 7 - t2) % 7), e.setHours(0, 0, 0, 0);
  }, function(e, n) {
    e.setDate(e.getDate() + n * 7);
  }, function(e, n) {
    return (n - e - (n.getTimezoneOffset() - e.getTimezoneOffset()) * at) / Te;
  });
}
var Et = kt(0);
var Ut = kt(1);
var un = kt(2);
var ln = kt(3);
var gt = kt(4);
var fn = kt(5);
var hn = kt(6);
Et.range;
Ut.range;
un.range;
ln.range;
gt.range;
fn.range;
hn.range;
var dn = nt(function(t2) {
  t2.setDate(1), t2.setHours(0, 0, 0, 0);
}, function(t2, e) {
  t2.setMonth(t2.getMonth() + e);
}, function(t2, e) {
  return e.getMonth() - t2.getMonth() + (e.getFullYear() - t2.getFullYear()) * 12;
}, function(t2) {
  return t2.getMonth();
});
var Gt = dn;
dn.range;
var ve = nt(function(t2) {
  t2.setMonth(0, 1), t2.setHours(0, 0, 0, 0);
}, function(t2, e) {
  t2.setFullYear(t2.getFullYear() + e);
}, function(t2, e) {
  return e.getFullYear() - t2.getFullYear();
}, function(t2) {
  return t2.getFullYear();
});
ve.every = function(t2) {
  return !isFinite(t2 = Math.floor(t2)) || !(t2 > 0) ? null : nt(function(e) {
    e.setFullYear(Math.floor(e.getFullYear() / t2) * t2), e.setMonth(0, 1), e.setHours(0, 0, 0, 0);
  }, function(e, n) {
    e.setFullYear(e.getFullYear() + n * t2);
  });
};
var yt = ve;
ve.range;
var mn = nt(function(t2) {
  t2.setUTCHours(0, 0, 0, 0);
}, function(t2, e) {
  t2.setUTCDate(t2.getUTCDate() + e);
}, function(t2, e) {
  return (e - t2) / mt;
}, function(t2) {
  return t2.getUTCDate() - 1;
});
var gn = mn;
mn.range;
function pt(t2) {
  return nt(function(e) {
    e.setUTCDate(e.getUTCDate() - (e.getUTCDay() + 7 - t2) % 7), e.setUTCHours(0, 0, 0, 0);
  }, function(e, n) {
    e.setUTCDate(e.getUTCDate() + n * 7);
  }, function(e, n) {
    return (n - e) / Te;
  });
}
var yn = pt(0);
var jt = pt(1);
var yr = pt(2);
var kr = pt(3);
var Dt = pt(4);
var pr = pt(5);
var Tr = pt(6);
yn.range;
jt.range;
yr.range;
kr.range;
Dt.range;
pr.range;
Tr.range;
var be = nt(function(t2) {
  t2.setUTCMonth(0, 1), t2.setUTCHours(0, 0, 0, 0);
}, function(t2, e) {
  t2.setUTCFullYear(t2.getUTCFullYear() + e);
}, function(t2, e) {
  return e.getUTCFullYear() - t2.getUTCFullYear();
}, function(t2) {
  return t2.getUTCFullYear();
});
be.every = function(t2) {
  return !isFinite(t2 = Math.floor(t2)) || !(t2 > 0) ? null : nt(function(e) {
    e.setUTCFullYear(Math.floor(e.getUTCFullYear() / t2) * t2), e.setUTCMonth(0, 1), e.setUTCHours(0, 0, 0, 0);
  }, function(e, n) {
    e.setUTCFullYear(e.getUTCFullYear() + n * t2);
  });
};
var Lt = be;
be.range;
function vr(t2, e, n, r, i, a) {
  const s = [
    [dt, 1, ft2],
    [dt, 5, 5 * ft2],
    [dt, 15, 15 * ft2],
    [dt, 30, 30 * ft2],
    [a, 1, at],
    [a, 5, 5 * at],
    [a, 15, 15 * at],
    [a, 30, 30 * at],
    [i, 1, ht],
    [i, 3, 3 * ht],
    [i, 6, 6 * ht],
    [i, 12, 12 * ht],
    [r, 1, mt],
    [r, 2, 2 * mt],
    [n, 1, Te],
    [e, 1, Ee],
    [e, 3, 3 * Ee],
    [t2, 1, oe]
  ];
  function y(k, D, U) {
    const w = D < k;
    w && ([k, D] = [D, k]);
    const x = U && typeof U.range == "function" ? U : _(k, D, U), q = x ? x.range(k, +D + 1) : [];
    return w ? q.reverse() : q;
  }
  function _(k, D, U) {
    const w = Math.abs(D - k) / U, x = nn(([, , L2]) => L2).right(s, w);
    if (x === s.length)
      return t2.every(wn(k / oe, D / oe, U));
    if (x === 0)
      return he.every(Math.max(wn(k, D, U), 1));
    const [q, g] = s[w / s[x - 1][2] < s[x][2] / w ? x - 1 : x];
    return q.every(g);
  }
  return [y, _];
}
var [br, xr] = vr(yt, Gt, Et, wt, qt, Xt);
function ce(t2) {
  if (0 <= t2.y && t2.y < 100) {
    var e = new Date(-1, t2.m, t2.d, t2.H, t2.M, t2.S, t2.L);
    return e.setFullYear(t2.y), e;
  }
  return new Date(t2.y, t2.m, t2.d, t2.H, t2.M, t2.S, t2.L);
}
function ue(t2) {
  if (0 <= t2.y && t2.y < 100) {
    var e = new Date(Date.UTC(-1, t2.m, t2.d, t2.H, t2.M, t2.S, t2.L));
    return e.setUTCFullYear(t2.y), e;
  }
  return new Date(Date.UTC(t2.y, t2.m, t2.d, t2.H, t2.M, t2.S, t2.L));
}
function _t(t2, e, n) {
  return { y: t2, m: e, d: n, H: 0, M: 0, S: 0, L: 0 };
}
function wr(t2) {
  var e = t2.dateTime, n = t2.date, r = t2.time, i = t2.periods, a = t2.days, s = t2.shortDays, y = t2.months, _ = t2.shortMonths, k = Yt(i), D = Ft2(i), U = Yt(a), w = Ft2(a), x = Yt(s), q = Ft2(s), g = Yt(y), L2 = Ft2(y), O = Yt(_), W = Ft2(_), B = {
    a: c,
    A: X,
    b: f,
    B: h,
    c: null,
    d: Ne,
    e: Ne,
    f: Xr,
    g: ni,
    G: ii,
    H: Rr,
    I: Br,
    j: Zr,
    L: kn2,
    m: qr,
    M: Gr,
    p: Y,
    q: G,
    Q: Pe,
    s: Re,
    S: jr,
    u: Qr,
    U: $r,
    V: Jr,
    w: Kr,
    W: ti,
    x: null,
    X: null,
    y: ei,
    Y: ri,
    Z: ai,
    "%": Ve
  }, Z = {
    a: z,
    A: H,
    b: I,
    B: V,
    c: null,
    d: He,
    e: He,
    f: ui,
    g: Ti,
    G: bi,
    H: si,
    I: oi,
    j: ci,
    L: Tn,
    m: li,
    M: fi,
    p: it,
    q: rt,
    Q: Pe,
    s: Re,
    S: hi2,
    u: di,
    U: mi,
    V: gi,
    w: yi,
    W: ki,
    x: null,
    X: null,
    y: pi,
    Y: vi,
    Z: xi,
    "%": Ve
  }, Q = {
    a: C,
    A: b,
    b: o,
    B: d,
    c: m,
    d: Oe,
    e: Oe,
    f: Nr,
    g: We,
    G: Ie,
    H: ze,
    I: ze,
    j: Ir,
    L: zr,
    m: Ar,
    M: Wr,
    p: F,
    q: Er,
    Q: Vr,
    s: Pr,
    S: Or,
    u: _r,
    U: Yr,
    V: Fr,
    w: Sr,
    W: Ur,
    x: l,
    X: S,
    y: We,
    Y: Ie,
    Z: Lr,
    "%": Hr
  };
  B.x = v(n, B), B.X = v(r, B), B.c = v(e, B), Z.x = v(n, Z), Z.X = v(r, Z), Z.c = v(e, Z);
  function v(p, E) {
    return function(M) {
      var u = [], R = -1, N = 0, j = p.length, $, tt, St;
      for (M instanceof Date || (M = /* @__PURE__ */ new Date(+M)); ++R < j; )
        p.charCodeAt(R) === 37 && (u.push(p.slice(N, R)), (tt = Ae[$ = p.charAt(++R)]) != null ? $ = p.charAt(++R) : tt = $ === "e" ? " " : "0", (St = E[$]) && ($ = St(M, tt)), u.push($), N = R + 1);
      return u.push(p.slice(N, R)), u.join("");
    };
  }
  function A(p, E) {
    return function(M) {
      var u = _t(1900, void 0, 1), R = T(u, p, M += "", 0), N, j;
      if (R != M.length)
        return null;
      if ("Q" in u)
        return new Date(u.Q);
      if ("s" in u)
        return new Date(u.s * 1e3 + ("L" in u ? u.L : 0));
      if (E && !("Z" in u) && (u.Z = 0), "p" in u && (u.H = u.H % 12 + u.p * 12), u.m === void 0 && (u.m = "q" in u ? u.q : 0), "V" in u) {
        if (u.V < 1 || u.V > 53)
          return null;
        "w" in u || (u.w = 1), "Z" in u ? (N = ue(_t(u.y, 0, 1)), j = N.getUTCDay(), N = j > 4 || j === 0 ? jt.ceil(N) : jt(N), N = gn.offset(N, (u.V - 1) * 7), u.y = N.getUTCFullYear(), u.m = N.getUTCMonth(), u.d = N.getUTCDate() + (u.w + 6) % 7) : (N = ce(_t(u.y, 0, 1)), j = N.getDay(), N = j > 4 || j === 0 ? Ut.ceil(N) : Ut(N), N = wt.offset(N, (u.V - 1) * 7), u.y = N.getFullYear(), u.m = N.getMonth(), u.d = N.getDate() + (u.w + 6) % 7);
      } else
        ("W" in u || "U" in u) && ("w" in u || (u.w = "u" in u ? u.u % 7 : "W" in u ? 1 : 0), j = "Z" in u ? ue(_t(u.y, 0, 1)).getUTCDay() : ce(_t(u.y, 0, 1)).getDay(), u.m = 0, u.d = "W" in u ? (u.w + 6) % 7 + u.W * 7 - (j + 5) % 7 : u.w + u.U * 7 - (j + 6) % 7);
      return "Z" in u ? (u.H += u.Z / 100 | 0, u.M += u.Z % 100, ue(u)) : ce(u);
    };
  }
  function T(p, E, M, u) {
    for (var R = 0, N = E.length, j = M.length, $, tt; R < N; ) {
      if (u >= j)
        return -1;
      if ($ = E.charCodeAt(R++), $ === 37) {
        if ($ = E.charAt(R++), tt = Q[$ in Ae ? E.charAt(R++) : $], !tt || (u = tt(p, M, u)) < 0)
          return -1;
      } else if ($ != M.charCodeAt(u++))
        return -1;
    }
    return u;
  }
  function F(p, E, M) {
    var u = k.exec(E.slice(M));
    return u ? (p.p = D.get(u[0].toLowerCase()), M + u[0].length) : -1;
  }
  function C(p, E, M) {
    var u = x.exec(E.slice(M));
    return u ? (p.w = q.get(u[0].toLowerCase()), M + u[0].length) : -1;
  }
  function b(p, E, M) {
    var u = U.exec(E.slice(M));
    return u ? (p.w = w.get(u[0].toLowerCase()), M + u[0].length) : -1;
  }
  function o(p, E, M) {
    var u = O.exec(E.slice(M));
    return u ? (p.m = W.get(u[0].toLowerCase()), M + u[0].length) : -1;
  }
  function d(p, E, M) {
    var u = g.exec(E.slice(M));
    return u ? (p.m = L2.get(u[0].toLowerCase()), M + u[0].length) : -1;
  }
  function m(p, E, M) {
    return T(p, e, E, M);
  }
  function l(p, E, M) {
    return T(p, n, E, M);
  }
  function S(p, E, M) {
    return T(p, r, E, M);
  }
  function c(p) {
    return s[p.getDay()];
  }
  function X(p) {
    return a[p.getDay()];
  }
  function f(p) {
    return _[p.getMonth()];
  }
  function h(p) {
    return y[p.getMonth()];
  }
  function Y(p) {
    return i[+(p.getHours() >= 12)];
  }
  function G(p) {
    return 1 + ~~(p.getMonth() / 3);
  }
  function z(p) {
    return s[p.getUTCDay()];
  }
  function H(p) {
    return a[p.getUTCDay()];
  }
  function I(p) {
    return _[p.getUTCMonth()];
  }
  function V(p) {
    return y[p.getUTCMonth()];
  }
  function it(p) {
    return i[+(p.getUTCHours() >= 12)];
  }
  function rt(p) {
    return 1 + ~~(p.getUTCMonth() / 3);
  }
  return {
    format: function(p) {
      var E = v(p += "", B);
      return E.toString = function() {
        return p;
      }, E;
    },
    parse: function(p) {
      var E = A(p += "", false);
      return E.toString = function() {
        return p;
      }, E;
    },
    utcFormat: function(p) {
      var E = v(p += "", Z);
      return E.toString = function() {
        return p;
      }, E;
    },
    utcParse: function(p) {
      var E = A(p += "", true);
      return E.toString = function() {
        return p;
      }, E;
    }
  };
}
var Ae = { "-": "", _: " ", 0: "0" };
var K = /^\s*\d+/;
var Dr = /^%/;
var Cr = /[\\^$*+?|[\]().{}]/g;
function P(t2, e, n) {
  var r = t2 < 0 ? "-" : "", i = (r ? -t2 : t2) + "", a = i.length;
  return r + (a < n ? new Array(n - a + 1).join(e) + i : i);
}
function Mr(t2) {
  return t2.replace(Cr, "\\$&");
}
function Yt(t2) {
  return new RegExp("^(?:" + t2.map(Mr).join("|") + ")", "i");
}
function Ft2(t2) {
  return new Map(t2.map((e, n) => [e.toLowerCase(), n]));
}
function Sr(t2, e, n) {
  var r = K.exec(e.slice(n, n + 1));
  return r ? (t2.w = +r[0], n + r[0].length) : -1;
}
function _r(t2, e, n) {
  var r = K.exec(e.slice(n, n + 1));
  return r ? (t2.u = +r[0], n + r[0].length) : -1;
}
function Yr(t2, e, n) {
  var r = K.exec(e.slice(n, n + 2));
  return r ? (t2.U = +r[0], n + r[0].length) : -1;
}
function Fr(t2, e, n) {
  var r = K.exec(e.slice(n, n + 2));
  return r ? (t2.V = +r[0], n + r[0].length) : -1;
}
function Ur(t2, e, n) {
  var r = K.exec(e.slice(n, n + 2));
  return r ? (t2.W = +r[0], n + r[0].length) : -1;
}
function Ie(t2, e, n) {
  var r = K.exec(e.slice(n, n + 4));
  return r ? (t2.y = +r[0], n + r[0].length) : -1;
}
function We(t2, e, n) {
  var r = K.exec(e.slice(n, n + 2));
  return r ? (t2.y = +r[0] + (+r[0] > 68 ? 1900 : 2e3), n + r[0].length) : -1;
}
function Lr(t2, e, n) {
  var r = /^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(e.slice(n, n + 6));
  return r ? (t2.Z = r[1] ? 0 : -(r[2] + (r[3] || "00")), n + r[0].length) : -1;
}
function Er(t2, e, n) {
  var r = K.exec(e.slice(n, n + 1));
  return r ? (t2.q = r[0] * 3 - 3, n + r[0].length) : -1;
}
function Ar(t2, e, n) {
  var r = K.exec(e.slice(n, n + 2));
  return r ? (t2.m = r[0] - 1, n + r[0].length) : -1;
}
function Oe(t2, e, n) {
  var r = K.exec(e.slice(n, n + 2));
  return r ? (t2.d = +r[0], n + r[0].length) : -1;
}
function Ir(t2, e, n) {
  var r = K.exec(e.slice(n, n + 3));
  return r ? (t2.m = 0, t2.d = +r[0], n + r[0].length) : -1;
}
function ze(t2, e, n) {
  var r = K.exec(e.slice(n, n + 2));
  return r ? (t2.H = +r[0], n + r[0].length) : -1;
}
function Wr(t2, e, n) {
  var r = K.exec(e.slice(n, n + 2));
  return r ? (t2.M = +r[0], n + r[0].length) : -1;
}
function Or(t2, e, n) {
  var r = K.exec(e.slice(n, n + 2));
  return r ? (t2.S = +r[0], n + r[0].length) : -1;
}
function zr(t2, e, n) {
  var r = K.exec(e.slice(n, n + 3));
  return r ? (t2.L = +r[0], n + r[0].length) : -1;
}
function Nr(t2, e, n) {
  var r = K.exec(e.slice(n, n + 6));
  return r ? (t2.L = Math.floor(r[0] / 1e3), n + r[0].length) : -1;
}
function Hr(t2, e, n) {
  var r = Dr.exec(e.slice(n, n + 1));
  return r ? n + r[0].length : -1;
}
function Vr(t2, e, n) {
  var r = K.exec(e.slice(n));
  return r ? (t2.Q = +r[0], n + r[0].length) : -1;
}
function Pr(t2, e, n) {
  var r = K.exec(e.slice(n));
  return r ? (t2.s = +r[0], n + r[0].length) : -1;
}
function Ne(t2, e) {
  return P(t2.getDate(), e, 2);
}
function Rr(t2, e) {
  return P(t2.getHours(), e, 2);
}
function Br(t2, e) {
  return P(t2.getHours() % 12 || 12, e, 2);
}
function Zr(t2, e) {
  return P(1 + wt.count(yt(t2), t2), e, 3);
}
function kn2(t2, e) {
  return P(t2.getMilliseconds(), e, 3);
}
function Xr(t2, e) {
  return kn2(t2, e) + "000";
}
function qr(t2, e) {
  return P(t2.getMonth() + 1, e, 2);
}
function Gr(t2, e) {
  return P(t2.getMinutes(), e, 2);
}
function jr(t2, e) {
  return P(t2.getSeconds(), e, 2);
}
function Qr(t2) {
  var e = t2.getDay();
  return e === 0 ? 7 : e;
}
function $r(t2, e) {
  return P(Et.count(yt(t2) - 1, t2), e, 2);
}
function pn(t2) {
  var e = t2.getDay();
  return e >= 4 || e === 0 ? gt(t2) : gt.ceil(t2);
}
function Jr(t2, e) {
  return t2 = pn(t2), P(gt.count(yt(t2), t2) + (yt(t2).getDay() === 4), e, 2);
}
function Kr(t2) {
  return t2.getDay();
}
function ti(t2, e) {
  return P(Ut.count(yt(t2) - 1, t2), e, 2);
}
function ei(t2, e) {
  return P(t2.getFullYear() % 100, e, 2);
}
function ni(t2, e) {
  return t2 = pn(t2), P(t2.getFullYear() % 100, e, 2);
}
function ri(t2, e) {
  return P(t2.getFullYear() % 1e4, e, 4);
}
function ii(t2, e) {
  var n = t2.getDay();
  return t2 = n >= 4 || n === 0 ? gt(t2) : gt.ceil(t2), P(t2.getFullYear() % 1e4, e, 4);
}
function ai(t2) {
  var e = t2.getTimezoneOffset();
  return (e > 0 ? "-" : (e *= -1, "+")) + P(e / 60 | 0, "0", 2) + P(e % 60, "0", 2);
}
function He(t2, e) {
  return P(t2.getUTCDate(), e, 2);
}
function si(t2, e) {
  return P(t2.getUTCHours(), e, 2);
}
function oi(t2, e) {
  return P(t2.getUTCHours() % 12 || 12, e, 2);
}
function ci(t2, e) {
  return P(1 + gn.count(Lt(t2), t2), e, 3);
}
function Tn(t2, e) {
  return P(t2.getUTCMilliseconds(), e, 3);
}
function ui(t2, e) {
  return Tn(t2, e) + "000";
}
function li(t2, e) {
  return P(t2.getUTCMonth() + 1, e, 2);
}
function fi(t2, e) {
  return P(t2.getUTCMinutes(), e, 2);
}
function hi2(t2, e) {
  return P(t2.getUTCSeconds(), e, 2);
}
function di(t2) {
  var e = t2.getUTCDay();
  return e === 0 ? 7 : e;
}
function mi(t2, e) {
  return P(yn.count(Lt(t2) - 1, t2), e, 2);
}
function vn(t2) {
  var e = t2.getUTCDay();
  return e >= 4 || e === 0 ? Dt(t2) : Dt.ceil(t2);
}
function gi(t2, e) {
  return t2 = vn(t2), P(Dt.count(Lt(t2), t2) + (Lt(t2).getUTCDay() === 4), e, 2);
}
function yi(t2) {
  return t2.getUTCDay();
}
function ki(t2, e) {
  return P(jt.count(Lt(t2) - 1, t2), e, 2);
}
function pi(t2, e) {
  return P(t2.getUTCFullYear() % 100, e, 2);
}
function Ti(t2, e) {
  return t2 = vn(t2), P(t2.getUTCFullYear() % 100, e, 2);
}
function vi(t2, e) {
  return P(t2.getUTCFullYear() % 1e4, e, 4);
}
function bi(t2, e) {
  var n = t2.getUTCDay();
  return t2 = n >= 4 || n === 0 ? Dt(t2) : Dt.ceil(t2), P(t2.getUTCFullYear() % 1e4, e, 4);
}
function xi() {
  return "+0000";
}
function Ve() {
  return "%";
}
function Pe(t2) {
  return +t2;
}
function Re(t2) {
  return Math.floor(+t2 / 1e3);
}
var Tt;
var Qt;
wi({
  dateTime: "%x, %X",
  date: "%-m/%-d/%Y",
  time: "%-I:%M:%S %p",
  periods: ["AM", "PM"],
  days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
  shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
  shortMonths: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
});
function wi(t2) {
  return Tt = wr(t2), Qt = Tt.format, Tt.parse, Tt.utcFormat, Tt.utcParse, Tt;
}
function Di(t2) {
  return new Date(t2);
}
function Ci(t2) {
  return t2 instanceof Date ? +t2 : +/* @__PURE__ */ new Date(+t2);
}
function bn(t2, e, n, r, i, a, s, y, _, k) {
  var D = Xn(), U = D.invert, w = D.domain, x = k(".%L"), q = k(":%S"), g = k("%I:%M"), L2 = k("%I %p"), O = k("%a %d"), W = k("%b %d"), B = k("%B"), Z = k("%Y");
  function Q(v) {
    return (_(v) < v ? x : y(v) < v ? q : s(v) < v ? g : a(v) < v ? L2 : r(v) < v ? i(v) < v ? O : W : n(v) < v ? B : Z)(v);
  }
  return D.invert = function(v) {
    return new Date(U(v));
  }, D.domain = function(v) {
    return arguments.length ? w(Array.from(v, Ci)) : w().map(Di);
  }, D.ticks = function(v) {
    var A = w();
    return t2(A[0], A[A.length - 1], v ?? 10);
  }, D.tickFormat = function(v, A) {
    return A == null ? Q : k(A);
  }, D.nice = function(v) {
    var A = w();
    return (!v || typeof v.range != "function") && (v = e(A[0], A[A.length - 1], v ?? 10)), v ? w(gr(A, v)) : D;
  }, D.copy = function() {
    return On(D, bn(t2, e, n, r, i, a, s, y, _, k));
  }, D;
}
function Mi() {
  return t.apply(bn(br, xr, yt, Gt, Et, wt, qt, Xt, dt, Qt).domain([new Date(2e3, 0, 1), new Date(2e3, 0, 2)]), arguments);
}
var de = function() {
  var t2 = function(b, o, d, m) {
    for (d = d || {}, m = b.length; m--; d[b[m]] = o)
      ;
    return d;
  }, e = [6, 8, 10, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 30, 32, 33, 35, 37], n = [1, 25], r = [1, 26], i = [1, 27], a = [1, 28], s = [1, 29], y = [1, 30], _ = [1, 31], k = [1, 9], D = [1, 10], U = [1, 11], w = [1, 12], x = [1, 13], q = [1, 14], g = [1, 15], L2 = [1, 16], O = [1, 18], W = [1, 19], B = [1, 20], Z = [1, 21], Q = [1, 22], v = [1, 24], A = [1, 32], T = {
    trace: function() {
    },
    yy: {},
    symbols_: { error: 2, start: 3, gantt: 4, document: 5, EOF: 6, line: 7, SPACE: 8, statement: 9, NL: 10, weekday: 11, weekday_monday: 12, weekday_tuesday: 13, weekday_wednesday: 14, weekday_thursday: 15, weekday_friday: 16, weekday_saturday: 17, weekday_sunday: 18, dateFormat: 19, inclusiveEndDates: 20, topAxis: 21, axisFormat: 22, tickInterval: 23, excludes: 24, includes: 25, todayMarker: 26, title: 27, acc_title: 28, acc_title_value: 29, acc_descr: 30, acc_descr_value: 31, acc_descr_multiline_value: 32, section: 33, clickStatement: 34, taskTxt: 35, taskData: 36, click: 37, callbackname: 38, callbackargs: 39, href: 40, clickStatementDebug: 41, $accept: 0, $end: 1 },
    terminals_: { 2: "error", 4: "gantt", 6: "EOF", 8: "SPACE", 10: "NL", 12: "weekday_monday", 13: "weekday_tuesday", 14: "weekday_wednesday", 15: "weekday_thursday", 16: "weekday_friday", 17: "weekday_saturday", 18: "weekday_sunday", 19: "dateFormat", 20: "inclusiveEndDates", 21: "topAxis", 22: "axisFormat", 23: "tickInterval", 24: "excludes", 25: "includes", 26: "todayMarker", 27: "title", 28: "acc_title", 29: "acc_title_value", 30: "acc_descr", 31: "acc_descr_value", 32: "acc_descr_multiline_value", 33: "section", 35: "taskTxt", 36: "taskData", 37: "click", 38: "callbackname", 39: "callbackargs", 40: "href" },
    productions_: [0, [3, 3], [5, 0], [5, 2], [7, 2], [7, 1], [7, 1], [7, 1], [11, 1], [11, 1], [11, 1], [11, 1], [11, 1], [11, 1], [11, 1], [9, 1], [9, 1], [9, 1], [9, 1], [9, 1], [9, 1], [9, 1], [9, 1], [9, 1], [9, 1], [9, 2], [9, 2], [9, 1], [9, 1], [9, 1], [9, 2], [34, 2], [34, 3], [34, 3], [34, 4], [34, 3], [34, 4], [34, 2], [41, 2], [41, 3], [41, 3], [41, 4], [41, 3], [41, 4], [41, 2]],
    performAction: function(o, d, m, l, S, c, X) {
      var f = c.length - 1;
      switch (S) {
        case 1:
          return c[f - 1];
        case 2:
          this.$ = [];
          break;
        case 3:
          c[f - 1].push(c[f]), this.$ = c[f - 1];
          break;
        case 4:
        case 5:
          this.$ = c[f];
          break;
        case 6:
        case 7:
          this.$ = [];
          break;
        case 8:
          l.setWeekday("monday");
          break;
        case 9:
          l.setWeekday("tuesday");
          break;
        case 10:
          l.setWeekday("wednesday");
          break;
        case 11:
          l.setWeekday("thursday");
          break;
        case 12:
          l.setWeekday("friday");
          break;
        case 13:
          l.setWeekday("saturday");
          break;
        case 14:
          l.setWeekday("sunday");
          break;
        case 15:
          l.setDateFormat(c[f].substr(11)), this.$ = c[f].substr(11);
          break;
        case 16:
          l.enableInclusiveEndDates(), this.$ = c[f].substr(18);
          break;
        case 17:
          l.TopAxis(), this.$ = c[f].substr(8);
          break;
        case 18:
          l.setAxisFormat(c[f].substr(11)), this.$ = c[f].substr(11);
          break;
        case 19:
          l.setTickInterval(c[f].substr(13)), this.$ = c[f].substr(13);
          break;
        case 20:
          l.setExcludes(c[f].substr(9)), this.$ = c[f].substr(9);
          break;
        case 21:
          l.setIncludes(c[f].substr(9)), this.$ = c[f].substr(9);
          break;
        case 22:
          l.setTodayMarker(c[f].substr(12)), this.$ = c[f].substr(12);
          break;
        case 24:
          l.setDiagramTitle(c[f].substr(6)), this.$ = c[f].substr(6);
          break;
        case 25:
          this.$ = c[f].trim(), l.setAccTitle(this.$);
          break;
        case 26:
        case 27:
          this.$ = c[f].trim(), l.setAccDescription(this.$);
          break;
        case 28:
          l.addSection(c[f].substr(8)), this.$ = c[f].substr(8);
          break;
        case 30:
          l.addTask(c[f - 1], c[f]), this.$ = "task";
          break;
        case 31:
          this.$ = c[f - 1], l.setClickEvent(c[f - 1], c[f], null);
          break;
        case 32:
          this.$ = c[f - 2], l.setClickEvent(c[f - 2], c[f - 1], c[f]);
          break;
        case 33:
          this.$ = c[f - 2], l.setClickEvent(c[f - 2], c[f - 1], null), l.setLink(c[f - 2], c[f]);
          break;
        case 34:
          this.$ = c[f - 3], l.setClickEvent(c[f - 3], c[f - 2], c[f - 1]), l.setLink(c[f - 3], c[f]);
          break;
        case 35:
          this.$ = c[f - 2], l.setClickEvent(c[f - 2], c[f], null), l.setLink(c[f - 2], c[f - 1]);
          break;
        case 36:
          this.$ = c[f - 3], l.setClickEvent(c[f - 3], c[f - 1], c[f]), l.setLink(c[f - 3], c[f - 2]);
          break;
        case 37:
          this.$ = c[f - 1], l.setLink(c[f - 1], c[f]);
          break;
        case 38:
        case 44:
          this.$ = c[f - 1] + " " + c[f];
          break;
        case 39:
        case 40:
        case 42:
          this.$ = c[f - 2] + " " + c[f - 1] + " " + c[f];
          break;
        case 41:
        case 43:
          this.$ = c[f - 3] + " " + c[f - 2] + " " + c[f - 1] + " " + c[f];
          break;
      }
    },
    table: [{ 3: 1, 4: [1, 2] }, { 1: [3] }, t2(e, [2, 2], { 5: 3 }), { 6: [1, 4], 7: 5, 8: [1, 6], 9: 7, 10: [1, 8], 11: 17, 12: n, 13: r, 14: i, 15: a, 16: s, 17: y, 18: _, 19: k, 20: D, 21: U, 22: w, 23: x, 24: q, 25: g, 26: L2, 27: O, 28: W, 30: B, 32: Z, 33: Q, 34: 23, 35: v, 37: A }, t2(e, [2, 7], { 1: [2, 1] }), t2(e, [2, 3]), { 9: 33, 11: 17, 12: n, 13: r, 14: i, 15: a, 16: s, 17: y, 18: _, 19: k, 20: D, 21: U, 22: w, 23: x, 24: q, 25: g, 26: L2, 27: O, 28: W, 30: B, 32: Z, 33: Q, 34: 23, 35: v, 37: A }, t2(e, [2, 5]), t2(e, [2, 6]), t2(e, [2, 15]), t2(e, [2, 16]), t2(e, [2, 17]), t2(e, [2, 18]), t2(e, [2, 19]), t2(e, [2, 20]), t2(e, [2, 21]), t2(e, [2, 22]), t2(e, [2, 23]), t2(e, [2, 24]), { 29: [1, 34] }, { 31: [1, 35] }, t2(e, [2, 27]), t2(e, [2, 28]), t2(e, [2, 29]), { 36: [1, 36] }, t2(e, [2, 8]), t2(e, [2, 9]), t2(e, [2, 10]), t2(e, [2, 11]), t2(e, [2, 12]), t2(e, [2, 13]), t2(e, [2, 14]), { 38: [1, 37], 40: [1, 38] }, t2(e, [2, 4]), t2(e, [2, 25]), t2(e, [2, 26]), t2(e, [2, 30]), t2(e, [2, 31], { 39: [1, 39], 40: [1, 40] }), t2(e, [2, 37], { 38: [1, 41] }), t2(e, [2, 32], { 40: [1, 42] }), t2(e, [2, 33]), t2(e, [2, 35], { 39: [1, 43] }), t2(e, [2, 34]), t2(e, [2, 36])],
    defaultActions: {},
    parseError: function(o, d) {
      if (d.recoverable)
        this.trace(o);
      else {
        var m = new Error(o);
        throw m.hash = d, m;
      }
    },
    parse: function(o) {
      var d = this, m = [0], l = [], S = [null], c = [], X = this.table, f = "", h = 0, Y = 0, G = 2, z = 1, H = c.slice.call(arguments, 1), I = Object.create(this.lexer), V = { yy: {} };
      for (var it in this.yy)
        Object.prototype.hasOwnProperty.call(this.yy, it) && (V.yy[it] = this.yy[it]);
      I.setInput(o, V.yy), V.yy.lexer = I, V.yy.parser = this, typeof I.yylloc > "u" && (I.yylloc = {});
      var rt = I.yylloc;
      c.push(rt);
      var p = I.options && I.options.ranges;
      typeof V.yy.parseError == "function" ? this.parseError = V.yy.parseError : this.parseError = Object.getPrototypeOf(this).parseError;
      function E() {
        var ct;
        return ct = l.pop() || I.lex() || z, typeof ct != "number" && (ct instanceof Array && (l = ct, ct = l.pop()), ct = d.symbols_[ct] || ct), ct;
      }
      for (var M, u, R, N, j = {}, $, tt, St, Ot; ; ) {
        if (u = m[m.length - 1], this.defaultActions[u] ? R = this.defaultActions[u] : ((M === null || typeof M > "u") && (M = E()), R = X[u] && X[u][M]), typeof R > "u" || !R.length || !R[0]) {
          var Jt = "";
          Ot = [];
          for ($ in X[u])
            this.terminals_[$] && $ > G && Ot.push("'" + this.terminals_[$] + "'");
          I.showPosition ? Jt = "Parse error on line " + (h + 1) + `:
` + I.showPosition() + `
Expecting ` + Ot.join(", ") + ", got '" + (this.terminals_[M] || M) + "'" : Jt = "Parse error on line " + (h + 1) + ": Unexpected " + (M == z ? "end of input" : "'" + (this.terminals_[M] || M) + "'"), this.parseError(Jt, {
            text: I.match,
            token: this.terminals_[M] || M,
            line: I.yylineno,
            loc: rt,
            expected: Ot
          });
        }
        if (R[0] instanceof Array && R.length > 1)
          throw new Error("Parse Error: multiple actions possible at state: " + u + ", token: " + M);
        switch (R[0]) {
          case 1:
            m.push(M), S.push(I.yytext), c.push(I.yylloc), m.push(R[1]), M = null, Y = I.yyleng, f = I.yytext, h = I.yylineno, rt = I.yylloc;
            break;
          case 2:
            if (tt = this.productions_[R[1]][1], j.$ = S[S.length - tt], j._$ = {
              first_line: c[c.length - (tt || 1)].first_line,
              last_line: c[c.length - 1].last_line,
              first_column: c[c.length - (tt || 1)].first_column,
              last_column: c[c.length - 1].last_column
            }, p && (j._$.range = [
              c[c.length - (tt || 1)].range[0],
              c[c.length - 1].range[1]
            ]), N = this.performAction.apply(j, [
              f,
              Y,
              h,
              V.yy,
              R[1],
              S,
              c
            ].concat(H)), typeof N < "u")
              return N;
            tt && (m = m.slice(0, -1 * tt * 2), S = S.slice(0, -1 * tt), c = c.slice(0, -1 * tt)), m.push(this.productions_[R[1]][0]), S.push(j.$), c.push(j._$), St = X[m[m.length - 2]][m[m.length - 1]], m.push(St);
            break;
          case 3:
            return true;
        }
      }
      return true;
    }
  }, F = function() {
    var b = {
      EOF: 1,
      parseError: function(d, m) {
        if (this.yy.parser)
          this.yy.parser.parseError(d, m);
        else
          throw new Error(d);
      },
      // resets the lexer, sets new input
      setInput: function(o, d) {
        return this.yy = d || this.yy || {}, this._input = o, this._more = this._backtrack = this.done = false, this.yylineno = this.yyleng = 0, this.yytext = this.matched = this.match = "", this.conditionStack = ["INITIAL"], this.yylloc = {
          first_line: 1,
          first_column: 0,
          last_line: 1,
          last_column: 0
        }, this.options.ranges && (this.yylloc.range = [0, 0]), this.offset = 0, this;
      },
      // consumes and returns one char from the input
      input: function() {
        var o = this._input[0];
        this.yytext += o, this.yyleng++, this.offset++, this.match += o, this.matched += o;
        var d = o.match(/(?:\r\n?|\n).*/g);
        return d ? (this.yylineno++, this.yylloc.last_line++) : this.yylloc.last_column++, this.options.ranges && this.yylloc.range[1]++, this._input = this._input.slice(1), o;
      },
      // unshifts one char (or a string) into the input
      unput: function(o) {
        var d = o.length, m = o.split(/(?:\r\n?|\n)/g);
        this._input = o + this._input, this.yytext = this.yytext.substr(0, this.yytext.length - d), this.offset -= d;
        var l = this.match.split(/(?:\r\n?|\n)/g);
        this.match = this.match.substr(0, this.match.length - 1), this.matched = this.matched.substr(0, this.matched.length - 1), m.length - 1 && (this.yylineno -= m.length - 1);
        var S = this.yylloc.range;
        return this.yylloc = {
          first_line: this.yylloc.first_line,
          last_line: this.yylineno + 1,
          first_column: this.yylloc.first_column,
          last_column: m ? (m.length === l.length ? this.yylloc.first_column : 0) + l[l.length - m.length].length - m[0].length : this.yylloc.first_column - d
        }, this.options.ranges && (this.yylloc.range = [S[0], S[0] + this.yyleng - d]), this.yyleng = this.yytext.length, this;
      },
      // When called from action, caches matched text and appends it on next action
      more: function() {
        return this._more = true, this;
      },
      // When called from action, signals the lexer that this rule fails to match the input, so the next matching rule (regex) should be tested instead.
      reject: function() {
        if (this.options.backtrack_lexer)
          this._backtrack = true;
        else
          return this.parseError("Lexical error on line " + (this.yylineno + 1) + `. You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).
` + this.showPosition(), {
            text: "",
            token: null,
            line: this.yylineno
          });
        return this;
      },
      // retain first n characters of the match
      less: function(o) {
        this.unput(this.match.slice(o));
      },
      // displays already matched input, i.e. for error messages
      pastInput: function() {
        var o = this.matched.substr(0, this.matched.length - this.match.length);
        return (o.length > 20 ? "..." : "") + o.substr(-20).replace(/\n/g, "");
      },
      // displays upcoming input, i.e. for error messages
      upcomingInput: function() {
        var o = this.match;
        return o.length < 20 && (o += this._input.substr(0, 20 - o.length)), (o.substr(0, 20) + (o.length > 20 ? "..." : "")).replace(/\n/g, "");
      },
      // displays the character position where the lexing error occurred, i.e. for error messages
      showPosition: function() {
        var o = this.pastInput(), d = new Array(o.length + 1).join("-");
        return o + this.upcomingInput() + `
` + d + "^";
      },
      // test the lexed token: return FALSE when not a match, otherwise return token
      test_match: function(o, d) {
        var m, l, S;
        if (this.options.backtrack_lexer && (S = {
          yylineno: this.yylineno,
          yylloc: {
            first_line: this.yylloc.first_line,
            last_line: this.last_line,
            first_column: this.yylloc.first_column,
            last_column: this.yylloc.last_column
          },
          yytext: this.yytext,
          match: this.match,
          matches: this.matches,
          matched: this.matched,
          yyleng: this.yyleng,
          offset: this.offset,
          _more: this._more,
          _input: this._input,
          yy: this.yy,
          conditionStack: this.conditionStack.slice(0),
          done: this.done
        }, this.options.ranges && (S.yylloc.range = this.yylloc.range.slice(0))), l = o[0].match(/(?:\r\n?|\n).*/g), l && (this.yylineno += l.length), this.yylloc = {
          first_line: this.yylloc.last_line,
          last_line: this.yylineno + 1,
          first_column: this.yylloc.last_column,
          last_column: l ? l[l.length - 1].length - l[l.length - 1].match(/\r?\n?/)[0].length : this.yylloc.last_column + o[0].length
        }, this.yytext += o[0], this.match += o[0], this.matches = o, this.yyleng = this.yytext.length, this.options.ranges && (this.yylloc.range = [this.offset, this.offset += this.yyleng]), this._more = false, this._backtrack = false, this._input = this._input.slice(o[0].length), this.matched += o[0], m = this.performAction.call(this, this.yy, this, d, this.conditionStack[this.conditionStack.length - 1]), this.done && this._input && (this.done = false), m)
          return m;
        if (this._backtrack) {
          for (var c in S)
            this[c] = S[c];
          return false;
        }
        return false;
      },
      // return next match in input
      next: function() {
        if (this.done)
          return this.EOF;
        this._input || (this.done = true);
        var o, d, m, l;
        this._more || (this.yytext = "", this.match = "");
        for (var S = this._currentRules(), c = 0; c < S.length; c++)
          if (m = this._input.match(this.rules[S[c]]), m && (!d || m[0].length > d[0].length)) {
            if (d = m, l = c, this.options.backtrack_lexer) {
              if (o = this.test_match(m, S[c]), o !== false)
                return o;
              if (this._backtrack) {
                d = false;
                continue;
              } else
                return false;
            } else if (!this.options.flex)
              break;
          }
        return d ? (o = this.test_match(d, S[l]), o !== false ? o : false) : this._input === "" ? this.EOF : this.parseError("Lexical error on line " + (this.yylineno + 1) + `. Unrecognized text.
` + this.showPosition(), {
          text: "",
          token: null,
          line: this.yylineno
        });
      },
      // return next match that has a token
      lex: function() {
        var d = this.next();
        return d || this.lex();
      },
      // activates a new lexer condition state (pushes the new lexer condition state onto the condition stack)
      begin: function(d) {
        this.conditionStack.push(d);
      },
      // pop the previously active lexer condition state off the condition stack
      popState: function() {
        var d = this.conditionStack.length - 1;
        return d > 0 ? this.conditionStack.pop() : this.conditionStack[0];
      },
      // produce the lexer rule set which is active for the currently active lexer condition state
      _currentRules: function() {
        return this.conditionStack.length && this.conditionStack[this.conditionStack.length - 1] ? this.conditions[this.conditionStack[this.conditionStack.length - 1]].rules : this.conditions.INITIAL.rules;
      },
      // return the currently active lexer condition state; when an index argument is provided it produces the N-th previous condition state, if available
      topState: function(d) {
        return d = this.conditionStack.length - 1 - Math.abs(d || 0), d >= 0 ? this.conditionStack[d] : "INITIAL";
      },
      // alias for begin(condition)
      pushState: function(d) {
        this.begin(d);
      },
      // return the number of states currently on the stack
      stateStackSize: function() {
        return this.conditionStack.length;
      },
      options: { "case-insensitive": true },
      performAction: function(d, m, l, S) {
        switch (l) {
          case 0:
            return this.begin("open_directive"), "open_directive";
          case 1:
            return this.begin("acc_title"), 28;
          case 2:
            return this.popState(), "acc_title_value";
          case 3:
            return this.begin("acc_descr"), 30;
          case 4:
            return this.popState(), "acc_descr_value";
          case 5:
            this.begin("acc_descr_multiline");
            break;
          case 6:
            this.popState();
            break;
          case 7:
            return "acc_descr_multiline_value";
          case 8:
            break;
          case 9:
            break;
          case 10:
            break;
          case 11:
            return 10;
          case 12:
            break;
          case 13:
            break;
          case 14:
            break;
          case 15:
            this.begin("href");
            break;
          case 16:
            this.popState();
            break;
          case 17:
            return 40;
          case 18:
            this.begin("callbackname");
            break;
          case 19:
            this.popState();
            break;
          case 20:
            this.popState(), this.begin("callbackargs");
            break;
          case 21:
            return 38;
          case 22:
            this.popState();
            break;
          case 23:
            return 39;
          case 24:
            this.begin("click");
            break;
          case 25:
            this.popState();
            break;
          case 26:
            return 37;
          case 27:
            return 4;
          case 28:
            return 19;
          case 29:
            return 20;
          case 30:
            return 21;
          case 31:
            return 22;
          case 32:
            return 23;
          case 33:
            return 25;
          case 34:
            return 24;
          case 35:
            return 26;
          case 36:
            return 12;
          case 37:
            return 13;
          case 38:
            return 14;
          case 39:
            return 15;
          case 40:
            return 16;
          case 41:
            return 17;
          case 42:
            return 18;
          case 43:
            return "date";
          case 44:
            return 27;
          case 45:
            return "accDescription";
          case 46:
            return 33;
          case 47:
            return 35;
          case 48:
            return 36;
          case 49:
            return ":";
          case 50:
            return 6;
          case 51:
            return "INVALID";
        }
      },
      rules: [/^(?:%%\{)/i, /^(?:accTitle\s*:\s*)/i, /^(?:(?!\n||)*[^\n]*)/i, /^(?:accDescr\s*:\s*)/i, /^(?:(?!\n||)*[^\n]*)/i, /^(?:accDescr\s*\{\s*)/i, /^(?:[\}])/i, /^(?:[^\}]*)/i, /^(?:%%(?!\{)*[^\n]*)/i, /^(?:[^\}]%%*[^\n]*)/i, /^(?:%%*[^\n]*[\n]*)/i, /^(?:[\n]+)/i, /^(?:\s+)/i, /^(?:#[^\n]*)/i, /^(?:%[^\n]*)/i, /^(?:href[\s]+["])/i, /^(?:["])/i, /^(?:[^"]*)/i, /^(?:call[\s]+)/i, /^(?:\([\s]*\))/i, /^(?:\()/i, /^(?:[^(]*)/i, /^(?:\))/i, /^(?:[^)]*)/i, /^(?:click[\s]+)/i, /^(?:[\s\n])/i, /^(?:[^\s\n]*)/i, /^(?:gantt\b)/i, /^(?:dateFormat\s[^#\n;]+)/i, /^(?:inclusiveEndDates\b)/i, /^(?:topAxis\b)/i, /^(?:axisFormat\s[^#\n;]+)/i, /^(?:tickInterval\s[^#\n;]+)/i, /^(?:includes\s[^#\n;]+)/i, /^(?:excludes\s[^#\n;]+)/i, /^(?:todayMarker\s[^\n;]+)/i, /^(?:weekday\s+monday\b)/i, /^(?:weekday\s+tuesday\b)/i, /^(?:weekday\s+wednesday\b)/i, /^(?:weekday\s+thursday\b)/i, /^(?:weekday\s+friday\b)/i, /^(?:weekday\s+saturday\b)/i, /^(?:weekday\s+sunday\b)/i, /^(?:\d\d\d\d-\d\d-\d\d\b)/i, /^(?:title\s[^#\n;]+)/i, /^(?:accDescription\s[^#\n;]+)/i, /^(?:section\s[^#:\n;]+)/i, /^(?:[^#:\n;]+)/i, /^(?::[^#\n;]+)/i, /^(?::)/i, /^(?:$)/i, /^(?:.)/i],
      conditions: { acc_descr_multiline: { rules: [6, 7], inclusive: false }, acc_descr: { rules: [4], inclusive: false }, acc_title: { rules: [2], inclusive: false }, callbackargs: { rules: [22, 23], inclusive: false }, callbackname: { rules: [19, 20, 21], inclusive: false }, href: { rules: [16, 17], inclusive: false }, click: { rules: [25, 26], inclusive: false }, INITIAL: { rules: [0, 1, 3, 5, 8, 9, 10, 11, 12, 13, 14, 15, 18, 24, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51], inclusive: true } }
    };
    return b;
  }();
  T.lexer = F;
  function C() {
    this.yy = {};
  }
  return C.prototype = T, T.Parser = C, new C();
}();
de.parser = de;
var Si = de;
var xn = { exports: {} };
(function(t2, e) {
  (function(n, r) {
    t2.exports = r();
  })(sh, function() {
    var n = "day";
    return function(r, i, a) {
      var s = function(k) {
        return k.add(4 - k.isoWeekday(), n);
      }, y = i.prototype;
      y.isoWeekYear = function() {
        return s(this).year();
      }, y.isoWeek = function(k) {
        if (!this.$utils().u(k))
          return this.add(7 * (k - this.isoWeek()), n);
        var D, U, w, x, q = s(this), g = (D = this.isoWeekYear(), U = this.$u, w = (U ? a.utc : a)().year(D).startOf("year"), x = 4 - w.isoWeekday(), w.isoWeekday() > 4 && (x += 7), w.add(x, n));
        return q.diff(g, "week") + 1;
      }, y.isoWeekday = function(k) {
        return this.$utils().u(k) ? this.day() || 7 : this.day(this.day() % 7 ? k : k - 7);
      };
      var _ = y.startOf;
      y.startOf = function(k, D) {
        var U = this.$utils(), w = !!U.u(D) || D;
        return U.p(k) === "isoweek" ? w ? this.date(this.date() - (this.isoWeekday() - 1)).startOf("day") : this.date(this.date() - 1 - (this.isoWeekday() - 1) + 7).endOf("day") : _.bind(this)(k, D);
      };
    };
  });
})(xn);
var _i = xn.exports;
var Yi = ah(_i);
var wn2 = { exports: {} };
(function(t2, e) {
  (function(n, r) {
    t2.exports = r();
  })(sh, function() {
    var n = { LTS: "h:mm:ss A", LT: "h:mm A", L: "MM/DD/YYYY", LL: "MMMM D, YYYY", LLL: "MMMM D, YYYY h:mm A", LLLL: "dddd, MMMM D, YYYY h:mm A" }, r = /(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|YYYY|YY?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g, i = /\d\d/, a = /\d\d?/, s = /\d*[^-_:/,()\s\d]+/, y = {}, _ = function(g) {
      return (g = +g) + (g > 68 ? 1900 : 2e3);
    }, k = function(g) {
      return function(L2) {
        this[g] = +L2;
      };
    }, D = [/[+-]\d\d:?(\d\d)?|Z/, function(g) {
      (this.zone || (this.zone = {})).offset = function(L2) {
        if (!L2 || L2 === "Z")
          return 0;
        var O = L2.match(/([+-]|\d\d)/g), W = 60 * O[1] + (+O[2] || 0);
        return W === 0 ? 0 : O[0] === "+" ? -W : W;
      }(g);
    }], U = function(g) {
      var L2 = y[g];
      return L2 && (L2.indexOf ? L2 : L2.s.concat(L2.f));
    }, w = function(g, L2) {
      var O, W = y.meridiem;
      if (W) {
        for (var B = 1; B <= 24; B += 1)
          if (g.indexOf(W(B, 0, L2)) > -1) {
            O = B > 12;
            break;
          }
      } else
        O = g === (L2 ? "pm" : "PM");
      return O;
    }, x = { A: [s, function(g) {
      this.afternoon = w(g, false);
    }], a: [s, function(g) {
      this.afternoon = w(g, true);
    }], S: [/\d/, function(g) {
      this.milliseconds = 100 * +g;
    }], SS: [i, function(g) {
      this.milliseconds = 10 * +g;
    }], SSS: [/\d{3}/, function(g) {
      this.milliseconds = +g;
    }], s: [a, k("seconds")], ss: [a, k("seconds")], m: [a, k("minutes")], mm: [a, k("minutes")], H: [a, k("hours")], h: [a, k("hours")], HH: [a, k("hours")], hh: [a, k("hours")], D: [a, k("day")], DD: [i, k("day")], Do: [s, function(g) {
      var L2 = y.ordinal, O = g.match(/\d+/);
      if (this.day = O[0], L2)
        for (var W = 1; W <= 31; W += 1)
          L2(W).replace(/\[|\]/g, "") === g && (this.day = W);
    }], M: [a, k("month")], MM: [i, k("month")], MMM: [s, function(g) {
      var L2 = U("months"), O = (U("monthsShort") || L2.map(function(W) {
        return W.slice(0, 3);
      })).indexOf(g) + 1;
      if (O < 1)
        throw new Error();
      this.month = O % 12 || O;
    }], MMMM: [s, function(g) {
      var L2 = U("months").indexOf(g) + 1;
      if (L2 < 1)
        throw new Error();
      this.month = L2 % 12 || L2;
    }], Y: [/[+-]?\d+/, k("year")], YY: [i, function(g) {
      this.year = _(g);
    }], YYYY: [/\d{4}/, k("year")], Z: D, ZZ: D };
    function q(g) {
      var L2, O;
      L2 = g, O = y && y.formats;
      for (var W = (g = L2.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g, function(F, C, b) {
        var o = b && b.toUpperCase();
        return C || O[b] || n[b] || O[o].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g, function(d, m, l) {
          return m || l.slice(1);
        });
      })).match(r), B = W.length, Z = 0; Z < B; Z += 1) {
        var Q = W[Z], v = x[Q], A = v && v[0], T = v && v[1];
        W[Z] = T ? { regex: A, parser: T } : Q.replace(/^\[|\]$/g, "");
      }
      return function(F) {
        for (var C = {}, b = 0, o = 0; b < B; b += 1) {
          var d = W[b];
          if (typeof d == "string")
            o += d.length;
          else {
            var m = d.regex, l = d.parser, S = F.slice(o), c = m.exec(S)[0];
            l.call(C, c), F = F.replace(c, "");
          }
        }
        return function(X) {
          var f = X.afternoon;
          if (f !== void 0) {
            var h = X.hours;
            f ? h < 12 && (X.hours += 12) : h === 12 && (X.hours = 0), delete X.afternoon;
          }
        }(C), C;
      };
    }
    return function(g, L2, O) {
      O.p.customParseFormat = true, g && g.parseTwoDigitYear && (_ = g.parseTwoDigitYear);
      var W = L2.prototype, B = W.parse;
      W.parse = function(Z) {
        var Q = Z.date, v = Z.utc, A = Z.args;
        this.$u = v;
        var T = A[1];
        if (typeof T == "string") {
          var F = A[2] === true, C = A[3] === true, b = F || C, o = A[2];
          C && (o = A[2]), y = this.$locale(), !F && o && (y = O.Ls[o]), this.$d = function(S, c, X) {
            try {
              if (["x", "X"].indexOf(c) > -1)
                return new Date((c === "X" ? 1e3 : 1) * S);
              var f = q(c)(S), h = f.year, Y = f.month, G = f.day, z = f.hours, H = f.minutes, I = f.seconds, V = f.milliseconds, it = f.zone, rt = /* @__PURE__ */ new Date(), p = G || (h || Y ? 1 : rt.getDate()), E = h || rt.getFullYear(), M = 0;
              h && !Y || (M = Y > 0 ? Y - 1 : rt.getMonth());
              var u = z || 0, R = H || 0, N = I || 0, j = V || 0;
              return it ? new Date(Date.UTC(E, M, p, u, R, N, j + 60 * it.offset * 1e3)) : X ? new Date(Date.UTC(E, M, p, u, R, N, j)) : new Date(E, M, p, u, R, N, j);
            } catch {
              return /* @__PURE__ */ new Date("");
            }
          }(Q, T, v), this.init(), o && o !== true && (this.$L = this.locale(o).$L), b && Q != this.format(T) && (this.$d = /* @__PURE__ */ new Date("")), y = {};
        } else if (T instanceof Array)
          for (var d = T.length, m = 1; m <= d; m += 1) {
            A[1] = T[m - 1];
            var l = O.apply(this, A);
            if (l.isValid()) {
              this.$d = l.$d, this.$L = l.$L, this.init();
              break;
            }
            m === d && (this.$d = /* @__PURE__ */ new Date(""));
          }
        else
          B.call(this, Z);
      };
    };
  });
})(wn2);
var Fi = wn2.exports;
var Ui = ah(Fi);
var Dn = { exports: {} };
(function(t2, e) {
  (function(n, r) {
    t2.exports = r();
  })(sh, function() {
    return function(n, r) {
      var i = r.prototype, a = i.format;
      i.format = function(s) {
        var y = this, _ = this.$locale();
        if (!this.isValid())
          return a.bind(this)(s);
        var k = this.$utils(), D = (s || "YYYY-MM-DDTHH:mm:ssZ").replace(/\[([^\]]+)]|Q|wo|ww|w|WW|W|zzz|z|gggg|GGGG|Do|X|x|k{1,2}|S/g, function(U) {
          switch (U) {
            case "Q":
              return Math.ceil((y.$M + 1) / 3);
            case "Do":
              return _.ordinal(y.$D);
            case "gggg":
              return y.weekYear();
            case "GGGG":
              return y.isoWeekYear();
            case "wo":
              return _.ordinal(y.week(), "W");
            case "w":
            case "ww":
              return k.s(y.week(), U === "w" ? 1 : 2, "0");
            case "W":
            case "WW":
              return k.s(y.isoWeek(), U === "W" ? 1 : 2, "0");
            case "k":
            case "kk":
              return k.s(String(y.$H === 0 ? 24 : y.$H), U === "k" ? 1 : 2, "0");
            case "X":
              return Math.floor(y.$d.getTime() / 1e3);
            case "x":
              return y.$d.getTime();
            case "z":
              return "[" + y.offsetName() + "]";
            case "zzz":
              return "[" + y.offsetName("long") + "]";
            default:
              return U;
          }
        });
        return a.bind(this)(D);
      };
    };
  });
})(Dn);
var Li = Dn.exports;
var Ei = ah(Li);
hh.extend(Yi);
hh.extend(Ui);
hh.extend(Ei);
var st = "";
var xe = "";
var we;
var De = "";
var At = [];
var It = [];
var Ce = {};
var Me = [];
var $t = [];
var Ct2 = "";
var Se = "";
var Cn = ["active", "done", "crit", "milestone"];
var _e = [];
var Wt = false;
var Ye = false;
var Fe = "sunday";
var me = 0;
var Ai = function() {
  Me = [], $t = [], Ct2 = "", _e = [], Vt = 0, ye = void 0, Pt = void 0, J = [], st = "", xe = "", Se = "", we = void 0, De = "", At = [], It = [], Wt = false, Ye = false, me = 0, Ce = {}, Ry(), Fe = "sunday";
};
var Ii = function(t2) {
  xe = t2;
};
var Wi = function() {
  return xe;
};
var Oi = function(t2) {
  we = t2;
};
var zi = function() {
  return we;
};
var Ni = function(t2) {
  De = t2;
};
var Hi = function() {
  return De;
};
var Vi = function(t2) {
  st = t2;
};
var Pi = function() {
  Wt = true;
};
var Ri = function() {
  return Wt;
};
var Bi = function() {
  Ye = true;
};
var Zi = function() {
  return Ye;
};
var Xi = function(t2) {
  Se = t2;
};
var qi = function() {
  return Se;
};
var Gi = function() {
  return st;
};
var ji = function(t2) {
  At = t2.toLowerCase().split(/[\s,]+/);
};
var Qi = function() {
  return At;
};
var $i = function(t2) {
  It = t2.toLowerCase().split(/[\s,]+/);
};
var Ji = function() {
  return It;
};
var Ki = function() {
  return Ce;
};
var ta = function(t2) {
  Ct2 = t2, Me.push(t2);
};
var ea = function() {
  return Me;
};
var na = function() {
  let t2 = Be();
  const e = 10;
  let n = 0;
  for (; !t2 && n < e; )
    t2 = Be(), n++;
  return $t = J, $t;
};
var Mn = function(t2, e, n, r) {
  return r.includes(t2.format(e.trim())) ? false : t2.isoWeekday() >= 6 && n.includes("weekends") || n.includes(t2.format("dddd").toLowerCase()) ? true : n.includes(t2.format(e.trim()));
};
var ra = function(t2) {
  Fe = t2;
};
var ia = function() {
  return Fe;
};
var Sn = function(t2, e, n, r) {
  if (!n.length || t2.manualEndTime)
    return;
  let i;
  t2.startTime instanceof Date ? i = hh(t2.startTime) : i = hh(t2.startTime, e, true), i = i.add(1, "d");
  let a;
  t2.endTime instanceof Date ? a = hh(t2.endTime) : a = hh(t2.endTime, e, true);
  const [s, y] = aa(
    i,
    a,
    e,
    n,
    r
  );
  t2.endTime = s.toDate(), t2.renderEndTime = y;
};
var aa = function(t2, e, n, r, i) {
  let a = false, s = null;
  for (; t2 <= e; )
    a || (s = e.toDate()), a = Mn(t2, n, r, i), a && (e = e.add(1, "d")), t2 = t2.add(1, "d");
  return [e, s];
};
var ge = function(t2, e, n) {
  n = n.trim();
  const i = /^after\s+([\d\w- ]+)/.exec(n.trim());
  if (i !== null) {
    let s = null;
    if (i[1].split(" ").forEach(function(y) {
      let _ = Mt(y);
      _ !== void 0 && (s ? _.endTime > s.endTime && (s = _) : s = _);
    }), s)
      return s.endTime;
    {
      const y = /* @__PURE__ */ new Date();
      return y.setHours(0, 0, 0, 0), y;
    }
  }
  let a = hh(n, e.trim(), true);
  if (a.isValid())
    return a.toDate();
  {
    L.debug("Invalid date:" + n), L.debug("With date format:" + e.trim());
    const s = new Date(n);
    if (s === void 0 || isNaN(s.getTime()) || // WebKit browsers can mis-parse invalid dates to be ridiculously
    // huge numbers, e.g. new Date('202304') gets parsed as January 1, 202304.
    // This can cause virtually infinite loops while rendering, so for the
    // purposes of Gantt charts we'll just treat any date beyond 10,000 AD/BC as
    // invalid.
    s.getFullYear() < -1e4 || s.getFullYear() > 1e4)
      throw new Error("Invalid date:" + n);
    return s;
  }
};
var _n = function(t2) {
  const e = /^(\d+(?:\.\d+)?)([Mdhmswy]|ms)$/.exec(t2.trim());
  return e !== null ? [Number.parseFloat(e[1]), e[2]] : [NaN, "ms"];
};
var Yn = function(t2, e, n, r = false) {
  n = n.trim();
  let i = hh(n, e.trim(), true);
  if (i.isValid())
    return r && (i = i.add(1, "d")), i.toDate();
  let a = hh(t2);
  const [s, y] = _n(n);
  if (!Number.isNaN(s)) {
    const _ = a.add(s, y);
    _.isValid() && (a = _);
  }
  return a.toDate();
};
var Vt = 0;
var xt = function(t2) {
  return t2 === void 0 ? (Vt = Vt + 1, "task" + Vt) : t2;
};
var sa = function(t2, e) {
  let n;
  e.substr(0, 1) === ":" ? n = e.substr(1, e.length) : n = e;
  const r = n.split(","), i = {};
  En(r, i, Cn);
  for (let s = 0; s < r.length; s++)
    r[s] = r[s].trim();
  let a = "";
  switch (r.length) {
    case 1:
      i.id = xt(), i.startTime = t2.endTime, a = r[0];
      break;
    case 2:
      i.id = xt(), i.startTime = ge(void 0, st, r[0]), a = r[1];
      break;
    case 3:
      i.id = xt(r[0]), i.startTime = ge(void 0, st, r[1]), a = r[2];
      break;
  }
  return a && (i.endTime = Yn(i.startTime, st, a, Wt), i.manualEndTime = hh(a, "YYYY-MM-DD", true).isValid(), Sn(i, st, It, At)), i;
};
var oa = function(t2, e) {
  let n;
  e.substr(0, 1) === ":" ? n = e.substr(1, e.length) : n = e;
  const r = n.split(","), i = {};
  En(r, i, Cn);
  for (let a = 0; a < r.length; a++)
    r[a] = r[a].trim();
  switch (r.length) {
    case 1:
      i.id = xt(), i.startTime = {
        type: "prevTaskEnd",
        id: t2
      }, i.endTime = {
        data: r[0]
      };
      break;
    case 2:
      i.id = xt(), i.startTime = {
        type: "getStartDate",
        startData: r[0]
      }, i.endTime = {
        data: r[1]
      };
      break;
    case 3:
      i.id = xt(r[0]), i.startTime = {
        type: "getStartDate",
        startData: r[1]
      }, i.endTime = {
        data: r[2]
      };
      break;
  }
  return i;
};
var ye;
var Pt;
var J = [];
var Fn = {};
var ca = function(t2, e) {
  const n = {
    section: Ct2,
    type: Ct2,
    processed: false,
    manualEndTime: false,
    renderEndTime: null,
    raw: { data: e },
    task: t2,
    classes: []
  }, r = oa(Pt, e);
  n.raw.startTime = r.startTime, n.raw.endTime = r.endTime, n.id = r.id, n.prevTaskId = Pt, n.active = r.active, n.done = r.done, n.crit = r.crit, n.milestone = r.milestone, n.order = me, me++;
  const i = J.push(n);
  Pt = n.id, Fn[n.id] = i - 1;
};
var Mt = function(t2) {
  const e = Fn[t2];
  return J[e];
};
var ua = function(t2, e) {
  const n = {
    section: Ct2,
    type: Ct2,
    description: t2,
    task: t2,
    classes: []
  }, r = sa(ye, e);
  n.startTime = r.startTime, n.endTime = r.endTime, n.id = r.id, n.active = r.active, n.done = r.done, n.crit = r.crit, n.milestone = r.milestone, ye = n, $t.push(n);
};
var Be = function() {
  const t2 = function(n) {
    const r = J[n];
    let i = "";
    switch (J[n].raw.startTime.type) {
      case "prevTaskEnd": {
        const a = Mt(r.prevTaskId);
        r.startTime = a.endTime;
        break;
      }
      case "getStartDate":
        i = ge(void 0, st, J[n].raw.startTime.startData), i && (J[n].startTime = i);
        break;
    }
    return J[n].startTime && (J[n].endTime = Yn(
      J[n].startTime,
      st,
      J[n].raw.endTime.data,
      Wt
    ), J[n].endTime && (J[n].processed = true, J[n].manualEndTime = hh(
      J[n].raw.endTime.data,
      "YYYY-MM-DD",
      true
    ).isValid(), Sn(J[n], st, It, At))), J[n].processed;
  };
  let e = true;
  for (const [n, r] of J.entries())
    t2(n), e = e && r.processed;
  return e;
};
var la = function(t2, e) {
  let n = e;
  Ft().securityLevel !== "loose" && (n = Es(e)), t2.split(",").forEach(function(r) {
    Mt(r) !== void 0 && (Ln(r, () => {
      window.open(n, "_self");
    }), Ce[r] = n);
  }), Un(t2, "clickable");
};
var Un = function(t2, e) {
  t2.split(",").forEach(function(n) {
    let r = Mt(n);
    r !== void 0 && r.classes.push(e);
  });
};
var fa = function(t2, e, n) {
  if (Ft().securityLevel !== "loose" || e === void 0)
    return;
  let r = [];
  if (typeof n == "string") {
    r = n.split(/,(?=(?:(?:[^"]*"){2})*[^"]*$)/);
    for (let a = 0; a < r.length; a++) {
      let s = r[a].trim();
      s.charAt(0) === '"' && s.charAt(s.length - 1) === '"' && (s = s.substr(1, s.length - 2)), r[a] = s;
    }
  }
  r.length === 0 && r.push(t2), Mt(t2) !== void 0 && Ln(t2, () => {
    Xe.runFunc(e, ...r);
  });
};
var Ln = function(t2, e) {
  _e.push(
    function() {
      const n = document.querySelector(`[id="${t2}"]`);
      n !== null && n.addEventListener("click", function() {
        e();
      });
    },
    function() {
      const n = document.querySelector(`[id="${t2}-text"]`);
      n !== null && n.addEventListener("click", function() {
        e();
      });
    }
  );
};
var ha = function(t2, e, n) {
  t2.split(",").forEach(function(r) {
    fa(r, e, n);
  }), Un(t2, "clickable");
};
var da = function(t2) {
  _e.forEach(function(e) {
    e(t2);
  });
};
var ma = {
  getConfig: () => Ft().gantt,
  clear: Ai,
  setDateFormat: Vi,
  getDateFormat: Gi,
  enableInclusiveEndDates: Pi,
  endDatesAreInclusive: Ri,
  enableTopAxis: Bi,
  topAxisEnabled: Zi,
  setAxisFormat: Ii,
  getAxisFormat: Wi,
  setTickInterval: Oi,
  getTickInterval: zi,
  setTodayMarker: Ni,
  getTodayMarker: Hi,
  setAccTitle: Py,
  getAccTitle: qy,
  setDiagramTitle: Hy,
  getDiagramTitle: jy,
  setDisplayMode: Xi,
  getDisplayMode: qi,
  setAccDescription: zy,
  getAccDescription: Wy,
  addSection: ta,
  getSections: ea,
  getTasks: na,
  addTask: ca,
  findTaskById: Mt,
  addTaskOrg: ua,
  setIncludes: ji,
  getIncludes: Qi,
  setExcludes: $i,
  getExcludes: Ji,
  setClickEvent: ha,
  setLink: la,
  getLinks: Ki,
  bindFunctions: da,
  parseDuration: _n,
  isInvalidDate: Mn,
  setWeekday: ra,
  getWeekday: ia
};
function En(t2, e, n) {
  let r = true;
  for (; r; )
    r = false, n.forEach(function(i) {
      const a = "^\\s*" + i + "\\s*$", s = new RegExp(a);
      t2[0].match(s) && (e[i] = true, t2.shift(1), r = true);
    });
}
var ga = function() {
  L.debug("Something is calling, setConf, remove the call");
};
var Ze = {
  monday: Ut,
  tuesday: un,
  wednesday: ln,
  thursday: gt,
  friday: fn,
  saturday: hn,
  sunday: Et
};
var ya = (t2, e) => {
  let n = [...t2].map(() => -1 / 0), r = [...t2].sort((a, s) => a.startTime - s.startTime || a.order - s.order), i = 0;
  for (const a of r)
    for (let s = 0; s < n.length; s++)
      if (a.startTime >= n[s]) {
        n[s] = a.endTime, a.order = s + e, s > i && (i = s);
        break;
      }
  return i;
};
var ut;
var ka = function(t2, e, n, r) {
  const i = Ft().gantt, a = Ft().securityLevel;
  let s;
  a === "sandbox" && (s = Ct("#i" + e));
  const y = a === "sandbox" ? Ct(s.nodes()[0].contentDocument.body) : Ct("body"), _ = a === "sandbox" ? s.nodes()[0].contentDocument : document, k = _.getElementById(e);
  ut = k.parentElement.offsetWidth, ut === void 0 && (ut = 1200), i.useWidth !== void 0 && (ut = i.useWidth);
  const D = r.db.getTasks();
  let U = [];
  for (const T of D)
    U.push(T.type);
  U = A(U);
  const w = {};
  let x = 2 * i.topPadding;
  if (r.db.getDisplayMode() === "compact" || i.displayMode === "compact") {
    const T = {};
    for (const C of D)
      T[C.section] === void 0 ? T[C.section] = [C] : T[C.section].push(C);
    let F = 0;
    for (const C of Object.keys(T)) {
      const b = ya(T[C], F) + 1;
      F += b, x += b * (i.barHeight + i.barGap), w[C] = b;
    }
  } else {
    x += D.length * (i.barHeight + i.barGap);
    for (const T of U)
      w[T] = D.filter((F) => F.type === T).length;
  }
  k.setAttribute("viewBox", "0 0 " + ut + " " + x);
  const q = y.select(`[id="${e}"]`), g = Mi().domain([
    Kn(D, function(T) {
      return T.startTime;
    }),
    Jn(D, function(T) {
      return T.endTime;
    })
  ]).rangeRound([0, ut - i.leftPadding - i.rightPadding]);
  function L2(T, F) {
    const C = T.startTime, b = F.startTime;
    let o = 0;
    return C > b ? o = 1 : C < b && (o = -1), o;
  }
  D.sort(L2), O(D, ut, x), Sl(q, x, ut, i.useMaxWidth), q.append("text").text(r.db.getDiagramTitle()).attr("x", ut / 2).attr("y", i.titleTopMargin).attr("class", "titleText");
  function O(T, F, C) {
    const b = i.barHeight, o = b + i.barGap, d = i.topPadding, m = i.leftPadding, l = Zn().domain([0, U.length]).range(["#00B9FA", "#F95002"]).interpolate(mr);
    B(
      o,
      d,
      m,
      F,
      C,
      T,
      r.db.getExcludes(),
      r.db.getIncludes()
    ), Z(m, d, F, C), W(T, o, d, m, b, l, F), Q(o, d), v(m, d, F, C);
  }
  function W(T, F, C, b, o, d, m) {
    const S = [...new Set(T.map((h) => h.order))].map((h) => T.find((Y) => Y.order === h));
    q.append("g").selectAll("rect").data(S).enter().append("rect").attr("x", 0).attr("y", function(h, Y) {
      return Y = h.order, Y * F + C - 2;
    }).attr("width", function() {
      return m - i.rightPadding / 2;
    }).attr("height", F).attr("class", function(h) {
      for (const [Y, G] of U.entries())
        if (h.type === G)
          return "section section" + Y % i.numberSectionStyles;
      return "section section0";
    });
    const c = q.append("g").selectAll("rect").data(T).enter(), X = r.db.getLinks();
    if (c.append("rect").attr("id", function(h) {
      return h.id;
    }).attr("rx", 3).attr("ry", 3).attr("x", function(h) {
      return h.milestone ? g(h.startTime) + b + 0.5 * (g(h.endTime) - g(h.startTime)) - 0.5 * o : g(h.startTime) + b;
    }).attr("y", function(h, Y) {
      return Y = h.order, Y * F + C;
    }).attr("width", function(h) {
      return h.milestone ? o : g(h.renderEndTime || h.endTime) - g(h.startTime);
    }).attr("height", o).attr("transform-origin", function(h, Y) {
      return Y = h.order, (g(h.startTime) + b + 0.5 * (g(h.endTime) - g(h.startTime))).toString() + "px " + (Y * F + C + 0.5 * o).toString() + "px";
    }).attr("class", function(h) {
      const Y = "task";
      let G = "";
      h.classes.length > 0 && (G = h.classes.join(" "));
      let z = 0;
      for (const [I, V] of U.entries())
        h.type === V && (z = I % i.numberSectionStyles);
      let H = "";
      return h.active ? h.crit ? H += " activeCrit" : H = " active" : h.done ? h.crit ? H = " doneCrit" : H = " done" : h.crit && (H += " crit"), H.length === 0 && (H = " task"), h.milestone && (H = " milestone " + H), H += z, H += " " + G, Y + H;
    }), c.append("text").attr("id", function(h) {
      return h.id + "-text";
    }).text(function(h) {
      return h.task;
    }).attr("font-size", i.fontSize).attr("x", function(h) {
      let Y = g(h.startTime), G = g(h.renderEndTime || h.endTime);
      h.milestone && (Y += 0.5 * (g(h.endTime) - g(h.startTime)) - 0.5 * o), h.milestone && (G = Y + o);
      const z = this.getBBox().width;
      return z > G - Y ? G + z + 1.5 * i.leftPadding > m ? Y + b - 5 : G + b + 5 : (G - Y) / 2 + Y + b;
    }).attr("y", function(h, Y) {
      return Y = h.order, Y * F + i.barHeight / 2 + (i.fontSize / 2 - 2) + C;
    }).attr("text-height", o).attr("class", function(h) {
      const Y = g(h.startTime);
      let G = g(h.endTime);
      h.milestone && (G = Y + o);
      const z = this.getBBox().width;
      let H = "";
      h.classes.length > 0 && (H = h.classes.join(" "));
      let I = 0;
      for (const [it, rt] of U.entries())
        h.type === rt && (I = it % i.numberSectionStyles);
      let V = "";
      return h.active && (h.crit ? V = "activeCritText" + I : V = "activeText" + I), h.done ? h.crit ? V = V + " doneCritText" + I : V = V + " doneText" + I : h.crit && (V = V + " critText" + I), h.milestone && (V += " milestoneText"), z > G - Y ? G + z + 1.5 * i.leftPadding > m ? H + " taskTextOutsideLeft taskTextOutside" + I + " " + V : H + " taskTextOutsideRight taskTextOutside" + I + " " + V + " width-" + z : H + " taskText taskText" + I + " " + V + " width-" + z;
    }), Ft().securityLevel === "sandbox") {
      let h;
      h = Ct("#i" + e);
      const Y = h.nodes()[0].contentDocument;
      c.filter(function(G) {
        return X[G.id] !== void 0;
      }).each(function(G) {
        var z = Y.querySelector("#" + G.id), H = Y.querySelector("#" + G.id + "-text");
        const I = z.parentNode;
        var V = Y.createElement("a");
        V.setAttribute("xlink:href", X[G.id]), V.setAttribute("target", "_top"), I.appendChild(V), V.appendChild(z), V.appendChild(H);
      });
    }
  }
  function B(T, F, C, b, o, d, m, l) {
    if (m.length === 0 && l.length === 0)
      return;
    let S, c;
    for (const { startTime: z, endTime: H } of d)
      (S === void 0 || z < S) && (S = z), (c === void 0 || H > c) && (c = H);
    if (!S || !c)
      return;
    if (hh(c).diff(hh(S), "year") > 5) {
      L.warn(
        "The difference between the min and max time is more than 5 years. This will cause performance issues. Skipping drawing exclude days."
      );
      return;
    }
    const X = r.db.getDateFormat(), f = [];
    let h = null, Y = hh(S);
    for (; Y.valueOf() <= c; )
      r.db.isInvalidDate(Y, X, m, l) ? h ? h.end = Y : h = {
        start: Y,
        end: Y
      } : h && (f.push(h), h = null), Y = Y.add(1, "d");
    q.append("g").selectAll("rect").data(f).enter().append("rect").attr("id", function(z) {
      return "exclude-" + z.start.format("YYYY-MM-DD");
    }).attr("x", function(z) {
      return g(z.start) + C;
    }).attr("y", i.gridLineStartPadding).attr("width", function(z) {
      const H = z.end.add(1, "day");
      return g(H) - g(z.start);
    }).attr("height", o - F - i.gridLineStartPadding).attr("transform-origin", function(z, H) {
      return (g(z.start) + C + 0.5 * (g(z.end) - g(z.start))).toString() + "px " + (H * T + 0.5 * o).toString() + "px";
    }).attr("class", "exclude-range");
  }
  function Z(T, F, C, b) {
    let o = or(g).tickSize(-b + F + i.gridLineStartPadding).tickFormat(Qt(r.db.getAxisFormat() || i.axisFormat || "%Y-%m-%d"));
    const m = /^([1-9]\d*)(millisecond|second|minute|hour|day|week|month)$/.exec(
      r.db.getTickInterval() || i.tickInterval
    );
    if (m !== null) {
      const l = m[1], S = m[2], c = r.db.getWeekday() || i.weekday;
      switch (S) {
        case "millisecond":
          o.ticks(he.every(l));
          break;
        case "second":
          o.ticks(dt.every(l));
          break;
        case "minute":
          o.ticks(Xt.every(l));
          break;
        case "hour":
          o.ticks(qt.every(l));
          break;
        case "day":
          o.ticks(wt.every(l));
          break;
        case "week":
          o.ticks(Ze[c].every(l));
          break;
        case "month":
          o.ticks(Gt.every(l));
          break;
      }
    }
    if (q.append("g").attr("class", "grid").attr("transform", "translate(" + T + ", " + (b - 50) + ")").call(o).selectAll("text").style("text-anchor", "middle").attr("fill", "#000").attr("stroke", "none").attr("font-size", 10).attr("dy", "1em"), r.db.topAxisEnabled() || i.topAxis) {
      let l = sr(g).tickSize(-b + F + i.gridLineStartPadding).tickFormat(Qt(r.db.getAxisFormat() || i.axisFormat || "%Y-%m-%d"));
      if (m !== null) {
        const S = m[1], c = m[2], X = r.db.getWeekday() || i.weekday;
        switch (c) {
          case "millisecond":
            l.ticks(he.every(S));
            break;
          case "second":
            l.ticks(dt.every(S));
            break;
          case "minute":
            l.ticks(Xt.every(S));
            break;
          case "hour":
            l.ticks(qt.every(S));
            break;
          case "day":
            l.ticks(wt.every(S));
            break;
          case "week":
            l.ticks(Ze[X].every(S));
            break;
          case "month":
            l.ticks(Gt.every(S));
            break;
        }
      }
      q.append("g").attr("class", "grid").attr("transform", "translate(" + T + ", " + F + ")").call(l).selectAll("text").style("text-anchor", "middle").attr("fill", "#000").attr("stroke", "none").attr("font-size", 10);
    }
  }
  function Q(T, F) {
    let C = 0;
    const b = Object.keys(w).map((o) => [o, w[o]]);
    q.append("g").selectAll("text").data(b).enter().append(function(o) {
      const d = o[0].split(In.lineBreakRegex), m = -(d.length - 1) / 2, l = _.createElementNS("http://www.w3.org/2000/svg", "text");
      l.setAttribute("dy", m + "em");
      for (const [S, c] of d.entries()) {
        const X = _.createElementNS("http://www.w3.org/2000/svg", "tspan");
        X.setAttribute("alignment-baseline", "central"), X.setAttribute("x", "10"), S > 0 && X.setAttribute("dy", "1em"), X.textContent = c, l.appendChild(X);
      }
      return l;
    }).attr("x", 10).attr("y", function(o, d) {
      if (d > 0)
        for (let m = 0; m < d; m++)
          return C += b[d - 1][1], o[1] * T / 2 + C * T + F;
      else
        return o[1] * T / 2 + F;
    }).attr("font-size", i.sectionFontSize).attr("class", function(o) {
      for (const [d, m] of U.entries())
        if (o[0] === m)
          return "sectionTitle sectionTitle" + d % i.numberSectionStyles;
      return "sectionTitle";
    });
  }
  function v(T, F, C, b) {
    const o = r.db.getTodayMarker();
    if (o === "off")
      return;
    const d = q.append("g").attr("class", "today"), m = /* @__PURE__ */ new Date(), l = d.append("line");
    l.attr("x1", g(m) + T).attr("x2", g(m) + T).attr("y1", i.titleTopMargin).attr("y2", b - i.titleTopMargin).attr("class", "today"), o !== "" && l.attr("style", o.replace(/,/g, ";"));
  }
  function A(T) {
    const F = {}, C = [];
    for (let b = 0, o = T.length; b < o; ++b)
      Object.prototype.hasOwnProperty.call(F, T[b]) || (F[T[b]] = true, C.push(T[b]));
    return C;
  }
};
var pa = {
  setConf: ga,
  draw: ka
};
var Ta = (t2) => `
  .mermaid-main-font {
    font-family: "trebuchet ms", verdana, arial, sans-serif;
    font-family: var(--mermaid-font-family);
  }
  .exclude-range {
    fill: ${t2.excludeBkgColor};
  }

  .section {
    stroke: none;
    opacity: 0.2;
  }

  .section0 {
    fill: ${t2.sectionBkgColor};
  }

  .section2 {
    fill: ${t2.sectionBkgColor2};
  }

  .section1,
  .section3 {
    fill: ${t2.altSectionBkgColor};
    opacity: 0.2;
  }

  .sectionTitle0 {
    fill: ${t2.titleColor};
  }

  .sectionTitle1 {
    fill: ${t2.titleColor};
  }

  .sectionTitle2 {
    fill: ${t2.titleColor};
  }

  .sectionTitle3 {
    fill: ${t2.titleColor};
  }

  .sectionTitle {
    text-anchor: start;
    // font-size: ${t2.ganttFontSize};
    // text-height: 14px;
    font-family: 'trebuchet ms', verdana, arial, sans-serif;
    font-family: var(--mermaid-font-family);

  }


  /* Grid and axis */

  .grid .tick {
    stroke: ${t2.gridColor};
    opacity: 0.8;
    shape-rendering: crispEdges;
    text {
      font-family: ${t2.fontFamily};
      fill: ${t2.textColor};
    }
  }

  .grid path {
    stroke-width: 0;
  }


  /* Today line */

  .today {
    fill: none;
    stroke: ${t2.todayLineColor};
    stroke-width: 2px;
  }


  /* Task styling */

  /* Default task */

  .task {
    stroke-width: 2;
  }

  .taskText {
    text-anchor: middle;
    font-family: 'trebuchet ms', verdana, arial, sans-serif;
    font-family: var(--mermaid-font-family);
  }

  // .taskText:not([font-size]) {
  //   font-size: ${t2.ganttFontSize};
  // }

  .taskTextOutsideRight {
    fill: ${t2.taskTextDarkColor};
    text-anchor: start;
    // font-size: ${t2.ganttFontSize};
    font-family: 'trebuchet ms', verdana, arial, sans-serif;
    font-family: var(--mermaid-font-family);

  }

  .taskTextOutsideLeft {
    fill: ${t2.taskTextDarkColor};
    text-anchor: end;
    // font-size: ${t2.ganttFontSize};
  }

  /* Special case clickable */
  .task.clickable {
    cursor: pointer;
  }
  .taskText.clickable {
    cursor: pointer;
    fill: ${t2.taskTextClickableColor} !important;
    font-weight: bold;
  }

  .taskTextOutsideLeft.clickable {
    cursor: pointer;
    fill: ${t2.taskTextClickableColor} !important;
    font-weight: bold;
  }

  .taskTextOutsideRight.clickable {
    cursor: pointer;
    fill: ${t2.taskTextClickableColor} !important;
    font-weight: bold;
  }

  /* Specific task settings for the sections*/

  .taskText0,
  .taskText1,
  .taskText2,
  .taskText3 {
    fill: ${t2.taskTextColor};
  }

  .task0,
  .task1,
  .task2,
  .task3 {
    fill: ${t2.taskBkgColor};
    stroke: ${t2.taskBorderColor};
  }

  .taskTextOutside0,
  .taskTextOutside2
  {
    fill: ${t2.taskTextOutsideColor};
  }

  .taskTextOutside1,
  .taskTextOutside3 {
    fill: ${t2.taskTextOutsideColor};
  }


  /* Active task */

  .active0,
  .active1,
  .active2,
  .active3 {
    fill: ${t2.activeTaskBkgColor};
    stroke: ${t2.activeTaskBorderColor};
  }

  .activeText0,
  .activeText1,
  .activeText2,
  .activeText3 {
    fill: ${t2.taskTextDarkColor} !important;
  }


  /* Completed task */

  .done0,
  .done1,
  .done2,
  .done3 {
    stroke: ${t2.doneTaskBorderColor};
    fill: ${t2.doneTaskBkgColor};
    stroke-width: 2;
  }

  .doneText0,
  .doneText1,
  .doneText2,
  .doneText3 {
    fill: ${t2.taskTextDarkColor} !important;
  }


  /* Tasks on the critical line */

  .crit0,
  .crit1,
  .crit2,
  .crit3 {
    stroke: ${t2.critBorderColor};
    fill: ${t2.critBkgColor};
    stroke-width: 2;
  }

  .activeCrit0,
  .activeCrit1,
  .activeCrit2,
  .activeCrit3 {
    stroke: ${t2.critBorderColor};
    fill: ${t2.activeTaskBkgColor};
    stroke-width: 2;
  }

  .doneCrit0,
  .doneCrit1,
  .doneCrit2,
  .doneCrit3 {
    stroke: ${t2.critBorderColor};
    fill: ${t2.doneTaskBkgColor};
    stroke-width: 2;
    cursor: pointer;
    shape-rendering: crispEdges;
  }

  .milestone {
    transform: rotate(45deg) scale(0.8,0.8);
  }

  .milestoneText {
    font-style: italic;
  }
  .doneCritText0,
  .doneCritText1,
  .doneCritText2,
  .doneCritText3 {
    fill: ${t2.taskTextDarkColor} !important;
  }

  .activeCritText0,
  .activeCritText1,
  .activeCritText2,
  .activeCritText3 {
    fill: ${t2.taskTextDarkColor} !important;
  }

  .titleText {
    text-anchor: middle;
    font-size: 18px;
    fill: ${t2.textColor}    ;
    font-family: 'trebuchet ms', verdana, arial, sans-serif;
    font-family: var(--mermaid-font-family);
  }
`;
var va = Ta;
var Da = {
  parser: Si,
  db: ma,
  renderer: pa,
  styles: va
};
export {
  Da as diagram
};
//# sourceMappingURL=ganttDiagram-9d08f276-BTFFNQYX.js.map
