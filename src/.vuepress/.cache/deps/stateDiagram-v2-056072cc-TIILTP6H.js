import {
  Ae,
  Ce,
  De,
  Et,
  It,
  Le,
  _t,
  te
} from "./chunk-C4OSH267.js";
import {
  xt
} from "./chunk-AWYAQWWP.js";
import "./chunk-R4JH2WRA.js";
import "./chunk-VHF5LZTF.js";
import {
  L
} from "./chunk-YVPW2NKM.js";
import "./chunk-LJRF2VVP.js";
import "./chunk-2BU6QNK6.js";
import "./chunk-WZ65DE63.js";
import {
  Ct,
  Ft,
  In,
  L as L2,
  Sl,
  Xe
} from "./chunk-AMDGFOT2.js";

// node_modules/.pnpm/registry.npmmirror.com+mermaid@10.5.0/node_modules/mermaid/dist/stateDiagram-v2-056072cc.js
var h = "rect";
var C = "rectWithTitle";
var nt = "start";
var ct = "end";
var it = "divider";
var rt = "roundedWithTitle";
var lt = "note";
var at = "noteGroup";
var _ = "statediagram";
var dt = "state";
var Et2 = `${_}-${dt}`;
var U = "transition";
var St = "note";
var Tt = "note-edge";
var pt = `${U} ${Tt}`;
var _t2 = `${_}-${St}`;
var ut = "cluster";
var ft = `${_}-${ut}`;
var Dt = "cluster-alt";
var bt = `${_}-${Dt}`;
var V = "parent";
var Y = "note";
var At = "state";
var N = "----";
var ht = `${N}${Y}`;
var v = `${N}${V}`;
var z = "fill:none";
var W = "fill: #333";
var m = "c";
var j = "text";
var q = "normal";
var y = {};
var d = 0;
var yt = function(t) {
  const n = Object.keys(t);
  for (const e of n)
    t[e];
};
var gt = function(t, n) {
  return n.db.extract(n.db.getRootDocV2()), n.db.getClasses();
};
function xt2(t) {
  return t == null ? "" : t.classes ? t.classes.join(" ") : "";
}
function R(t = "", n = 0, e = "", c = N) {
  const i = e !== null && e.length > 0 ? `${c}${e}` : "";
  return `${At}-${t}${i}-${n}`;
}
var A = (t, n, e, c, i, r) => {
  const o = e.id, u = xt2(c[o]);
  if (o !== "root") {
    let T = h;
    e.start === true && (T = nt), e.start === false && (T = ct), e.type !== Et && (T = e.type), y[o] || (y[o] = {
      id: o,
      shape: T,
      description: In.sanitizeText(o, Ft()),
      classes: `${u} ${Et2}`
    });
    const s = y[o];
    e.description && (Array.isArray(s.description) ? (s.shape = C, s.description.push(e.description)) : s.description.length > 0 ? (s.shape = C, s.description === o ? s.description = [e.description] : s.description = [s.description, e.description]) : (s.shape = h, s.description = e.description), s.description = In.sanitizeTextOrArray(s.description, Ft())), s.description.length === 1 && s.shape === C && (s.shape = h), !s.type && e.doc && (L2.info("Setting cluster for ", o, G(e)), s.type = "group", s.dir = G(e), s.shape = e.type === te ? it : rt, s.classes = s.classes + " " + ft + " " + (r ? bt : ""));
    const p = {
      labelStyle: "",
      shape: s.shape,
      labelText: s.description,
      // typeof newNode.description === 'object'
      //   ? newNode.description[0]
      //   : newNode.description,
      classes: s.classes,
      style: "",
      //styles.style,
      id: o,
      dir: s.dir,
      domId: R(o, d),
      type: s.type,
      padding: 15
      //getConfig().flowchart.padding
    };
    if (p.centerLabel = true, e.note) {
      const l = {
        labelStyle: "",
        shape: lt,
        labelText: e.note.text,
        classes: _t2,
        // useHtmlLabels: false,
        style: "",
        // styles.style,
        id: o + ht + "-" + d,
        domId: R(o, d, Y),
        type: s.type,
        padding: 15
        //getConfig().flowchart.padding
      }, a = {
        labelStyle: "",
        shape: at,
        labelText: e.note.text,
        classes: s.classes,
        style: "",
        // styles.style,
        id: o + v,
        domId: R(o, d, V),
        type: "group",
        padding: 0
        //getConfig().flowchart.padding
      };
      d++;
      const f = o + v;
      t.setNode(f, a), t.setNode(l.id, l), t.setNode(o, p), t.setParent(o, f), t.setParent(l.id, f);
      let S = o, D = l.id;
      e.note.position === "left of" && (S = l.id, D = o), t.setEdge(S, D, {
        arrowhead: "none",
        arrowType: "",
        style: z,
        labelStyle: "",
        classes: pt,
        arrowheadStyle: W,
        labelpos: m,
        labelType: j,
        thickness: q
      });
    } else
      t.setNode(o, p);
  }
  n && n.id !== "root" && (L2.trace("Setting node ", o, " to be child of its parent ", n.id), t.setParent(o, n.id)), e.doc && (L2.trace("Adding nodes children "), $t(t, e, e.doc, c, i, !r));
};
var $t = (t, n, e, c, i, r) => {
  L2.trace("items", e), e.forEach((o) => {
    switch (o.stmt) {
      case _t:
        A(t, n, o, c, i, r);
        break;
      case Et:
        A(t, n, o, c, i, r);
        break;
      case It:
        {
          A(t, n, o.state1, c, i, r), A(t, n, o.state2, c, i, r);
          const u = {
            id: "edge" + d,
            arrowhead: "normal",
            arrowTypeEnd: "arrow_barb",
            style: z,
            labelStyle: "",
            label: In.sanitizeText(o.description, Ft()),
            arrowheadStyle: W,
            labelpos: m,
            labelType: j,
            thickness: q,
            classes: U
          };
          t.setEdge(o.state1.id, o.state2.id, u, d), d++;
        }
        break;
    }
  });
};
var G = (t, n = Ce) => {
  let e = n;
  if (t.doc)
    for (let c = 0; c < t.doc.length; c++) {
      const i = t.doc[c];
      i.stmt === "dir" && (e = i.value);
    }
  return e;
};
var Ct2 = async function(t, n, e, c) {
  L2.info("Drawing state diagram (v2)", n), y = {}, c.db.getDirection();
  const { securityLevel: i, state: r } = Ft(), o = r.nodeSpacing || 50, u = r.rankSpacing || 50;
  L2.info(c.db.getRootDocV2()), c.db.extract(c.db.getRootDocV2()), L2.info(c.db.getRootDocV2());
  const T = c.db.getStates(), s = new L({
    multigraph: true,
    compound: true
  }).setGraph({
    rankdir: G(c.db.getRootDocV2()),
    nodesep: o,
    ranksep: u,
    marginx: 8,
    marginy: 8
  }).setDefaultEdgeLabel(function() {
    return {};
  });
  A(s, void 0, c.db.getRootDocV2(), T, c.db, true);
  let p;
  i === "sandbox" && (p = Ct("#i" + n));
  const l = i === "sandbox" ? Ct(p.nodes()[0].contentDocument.body) : Ct("body"), a = l.select(`[id="${n}"]`), f = l.select("#" + n + " g");
  await xt(f, s, ["barb"], _, n);
  const S = 8;
  Xe.insertTitle(a, "statediagramTitleText", r.titleTopMargin, c.db.getDiagramTitle());
  const D = a.node().getBBox(), L3 = D.width + S * 2, P = D.height + S * 2;
  a.attr("class", _);
  const O = a.node().getBBox();
  Sl(a, P, L3, r.useMaxWidth);
  const k = `${O.x - S} ${O.y - S} ${L3} ${P}`;
  L2.debug(`viewBox ${k}`), a.attr("viewBox", k);
  const K = document.querySelectorAll('[id="' + n + '"] .edgeLabel .label');
  for (const x of K) {
    const B = x.getBBox(), b = document.createElementNS("http://www.w3.org/2000/svg", h);
    b.setAttribute("rx", 0), b.setAttribute("ry", 0), b.setAttribute("width", B.width), b.setAttribute("height", B.height), x.insertBefore(b, x.firstChild);
  }
};
var Rt = {
  setConf: yt,
  getClasses: gt,
  draw: Ct2
};
var vt = {
  parser: De,
  db: Ae,
  renderer: Rt,
  styles: Le,
  init: (t) => {
    t.state || (t.state = {}), t.state.arrowMarkerAbsolute = t.arrowMarkerAbsolute, Ae.clear();
  }
};
export {
  vt as diagram
};
//# sourceMappingURL=stateDiagram-v2-056072cc-TIILTP6H.js.map
