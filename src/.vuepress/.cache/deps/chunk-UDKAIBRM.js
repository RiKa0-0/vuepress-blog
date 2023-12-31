import {
  C,
  E
} from "./chunk-WZ65DE63.js";
import {
  $o,
  An,
  Io,
  Jb,
  Qb,
  a1,
  e1,
  i1,
  n1,
  o1,
  r1,
  s1,
  t1
} from "./chunk-AMDGFOT2.js";

// node_modules/.pnpm/registry.npmmirror.com+mermaid@10.5.0/node_modules/mermaid/dist/arc-dcf06dea.js
function fn(l) {
  return l.innerRadius;
}
function cn(l) {
  return l.outerRadius;
}
function yn(l) {
  return l.startAngle;
}
function gn(l) {
  return l.endAngle;
}
function mn(l) {
  return l && l.padAngle;
}
function pn(l, x, w, W, h, v, Y, a) {
  var s = w - l, n = W - x, m = Y - h, i = a - v, r = i * s - m * n;
  if (!(r * r < $o))
    return r = (m * (x - v) - i * (l - h)) / r, [l + r * s, x + r * n];
}
function K(l, x, w, W, h, v, Y) {
  var a = l - w, s = x - W, n = (Y ? v : -v) / n1(a * a + s * s), m = n * s, i = -n * a, r = l + m, f = x + i, c = w + m, D = W + i, o = (r + c) / 2, E2 = (f + D) / 2, p = c - r, g = D - f, A = p * p + g * g, I = h - v, b = r * D - c * f, O = (g < 0 ? -1 : 1) * n1(e1(0, I * I * A - b * b)), S = (b * g - p * O) / A, d = (-b * p - g * O) / A, R = (b * g + p * O) / A, T = (-b * p + g * O) / A, e = S - o, u = d - E2, Z = R - o, $ = T - E2;
  return e * e + u * u > Z * Z + $ * $ && (S = R, d = T), {
    cx: S,
    cy: d,
    x01: -m,
    y01: -i,
    x11: S * (h / I - 1),
    y11: d * (h / I - 1)
  };
}
function hn() {
  var l = fn, x = cn, w = E(0), W = null, h = yn, v = gn, Y = mn, a = null;
  function s() {
    var n, m, i = +l.apply(this, arguments), r = +x.apply(this, arguments), f = h.apply(this, arguments) - Io, c = v.apply(this, arguments) - Io, D = Jb(c - f), o = c > f;
    if (a || (a = n = C()), r < i && (m = r, r = i, i = m), !(r > $o))
      a.moveTo(0, 0);
    else if (D > o1 - $o)
      a.moveTo(r * t1(f), r * r1(f)), a.arc(0, 0, r, f, c, !o), i > $o && (a.moveTo(i * t1(c), i * r1(c)), a.arc(0, 0, i, c, f, o));
    else {
      var E2 = f, p = c, g = f, A = c, I = D, b = D, O = Y.apply(this, arguments) / 2, S = O > $o && (W ? +W.apply(this, arguments) : n1(i * i + r * r)), d = i1(Jb(r - i) / 2, +w.apply(this, arguments)), R = d, T = d, e, u;
      if (S > $o) {
        var Z = a1(S / i * r1(O)), $ = a1(S / r * r1(O));
        (I -= Z * 2) > $o ? (Z *= o ? 1 : -1, g += Z, A -= Z) : (I = 0, g = A = (f + c) / 2), (b -= $ * 2) > $o ? ($ *= o ? 1 : -1, E2 += $, p -= $) : (b = 0, E2 = p = (f + c) / 2);
      }
      var z = r * t1(E2), B = r * r1(E2), F = i * t1(A), G = i * r1(A);
      if (d > $o) {
        var H = r * t1(p), J = r * r1(p), L = i * t1(g), M = i * r1(g), q;
        if (D < An && (q = pn(z, B, L, M, H, J, F, G))) {
          var N = z - q[0], Q = B - q[1], U = H - q[0], V = J - q[1], _ = 1 / r1(s1((N * U + Q * V) / (n1(N * N + Q * Q) * n1(U * U + V * V))) / 2), nn = n1(q[0] * q[0] + q[1] * q[1]);
          R = i1(d, (i - nn) / (_ - 1)), T = i1(d, (r - nn) / (_ + 1));
        }
      }
      b > $o ? T > $o ? (e = K(L, M, z, B, r, T, o), u = K(H, J, F, G, r, T, o), a.moveTo(e.cx + e.x01, e.cy + e.y01), T < d ? a.arc(e.cx, e.cy, T, Qb(e.y01, e.x01), Qb(u.y01, u.x01), !o) : (a.arc(e.cx, e.cy, T, Qb(e.y01, e.x01), Qb(e.y11, e.x11), !o), a.arc(0, 0, r, Qb(e.cy + e.y11, e.cx + e.x11), Qb(u.cy + u.y11, u.cx + u.x11), !o), a.arc(u.cx, u.cy, T, Qb(u.y11, u.x11), Qb(u.y01, u.x01), !o))) : (a.moveTo(z, B), a.arc(0, 0, r, E2, p, !o)) : a.moveTo(z, B), !(i > $o) || !(I > $o) ? a.lineTo(F, G) : R > $o ? (e = K(F, G, H, J, i, -R, o), u = K(z, B, L, M, i, -R, o), a.lineTo(e.cx + e.x01, e.cy + e.y01), R < d ? a.arc(e.cx, e.cy, R, Qb(e.y01, e.x01), Qb(u.y01, u.x01), !o) : (a.arc(e.cx, e.cy, R, Qb(e.y01, e.x01), Qb(e.y11, e.x11), !o), a.arc(0, 0, i, Qb(e.cy + e.y11, e.cx + e.x11), Qb(u.cy + u.y11, u.cx + u.x11), o), a.arc(u.cx, u.cy, R, Qb(u.y11, u.x11), Qb(u.y01, u.x01), !o))) : a.arc(0, 0, i, A, g, o);
    }
    if (a.closePath(), n)
      return a = null, n + "" || null;
  }
  return s.centroid = function() {
    var n = (+l.apply(this, arguments) + +x.apply(this, arguments)) / 2, m = (+h.apply(this, arguments) + +v.apply(this, arguments)) / 2 - An / 2;
    return [t1(m) * n, r1(m) * n];
  }, s.innerRadius = function(n) {
    return arguments.length ? (l = typeof n == "function" ? n : E(+n), s) : l;
  }, s.outerRadius = function(n) {
    return arguments.length ? (x = typeof n == "function" ? n : E(+n), s) : x;
  }, s.cornerRadius = function(n) {
    return arguments.length ? (w = typeof n == "function" ? n : E(+n), s) : w;
  }, s.padRadius = function(n) {
    return arguments.length ? (W = n == null ? null : typeof n == "function" ? n : E(+n), s) : W;
  }, s.startAngle = function(n) {
    return arguments.length ? (h = typeof n == "function" ? n : E(+n), s) : h;
  }, s.endAngle = function(n) {
    return arguments.length ? (v = typeof n == "function" ? n : E(+n), s) : v;
  }, s.padAngle = function(n) {
    return arguments.length ? (Y = typeof n == "function" ? n : E(+n), s) : Y;
  }, s.context = function(n) {
    return arguments.length ? (a = n ?? null, s) : a;
  }, s;
}

export {
  hn
};
//# sourceMappingURL=chunk-UDKAIBRM.js.map
