import {
  Lt,
  Nt,
  vt
} from "./chunk-5RRNMU4F.js";
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
  $f,
  Ct,
  Ft,
  In,
  L as L2,
  S0,
  Xe,
  m0,
  py
} from "./chunk-AMDGFOT2.js";

// node_modules/.pnpm/registry.npmmirror.com+mermaid@10.5.0/node_modules/mermaid/dist/classDiagram-v2-6e58f5b0.js
var S = (o) => In.sanitizeText(o, Ft());
var v = {
  dividerMargin: 10,
  padding: 5,
  textHeight: 10,
  curve: void 0
};
var $ = function(o, t, p, n) {
  const e = Object.keys(o);
  L2.info("keys:", e), L2.info(o), e.forEach(function(s) {
    var y, d;
    const l = o[s], i = {
      shape: "rect",
      id: l.id,
      domId: l.domId,
      labelText: S(l.id),
      labelStyle: "",
      style: "fill: none; stroke: black",
      // TODO V10: Flowchart ? Keeping flowchart for backwards compatibility. Remove in next major release
      padding: ((y = Ft().flowchart) == null ? void 0 : y.padding) ?? ((d = Ft().class) == null ? void 0 : d.padding)
    };
    t.setNode(l.id, i), I(l.classes, t, p, n, l.id), L2.info("setNode", i);
  });
};
var I = function(o, t, p, n, e) {
  const s = Object.keys(o);
  L2.info("keys:", s), L2.info(o), s.filter((l) => o[l].parent == e).forEach(function(l) {
    var h, u;
    const a = o[l], i = a.cssClasses.join(" "), y = { labelStyle: "", style: "" }, d = a.label ?? a.id, f = 0, m = "class_box", b = {
      labelStyle: y.labelStyle,
      shape: m,
      labelText: S(d),
      classData: a,
      rx: f,
      ry: f,
      class: i,
      style: y.style,
      id: a.id,
      domId: a.domId,
      tooltip: n.db.getTooltip(a.id, e) || "",
      haveCallback: a.haveCallback,
      link: a.link,
      width: a.type === "group" ? 500 : void 0,
      type: a.type,
      // TODO V10: Flowchart ? Keeping flowchart for backwards compatibility. Remove in next major release
      padding: ((h = Ft().flowchart) == null ? void 0 : h.padding) ?? ((u = Ft().class) == null ? void 0 : u.padding)
    };
    t.setNode(a.id, b), e && t.setParent(a.id, e), L2.info("setNode", b);
  });
};
var F = function(o, t, p, n) {
  L2.info(o), o.forEach(function(e, s) {
    var u, x;
    const l = e, a = "", i = { labelStyle: "", style: "" }, y = l.text, d = 0, f = "note", m = {
      labelStyle: i.labelStyle,
      shape: f,
      labelText: S(y),
      noteData: l,
      rx: d,
      ry: d,
      class: a,
      style: i.style,
      id: l.id,
      domId: l.id,
      tooltip: "",
      type: "note",
      // TODO V10: Flowchart ? Keeping flowchart for backwards compatibility. Remove in next major release
      padding: ((u = Ft().flowchart) == null ? void 0 : u.padding) ?? ((x = Ft().class) == null ? void 0 : x.padding)
    };
    if (t.setNode(l.id, m), L2.info("setNode", m), !l.class || !(l.class in n))
      return;
    const b = p + s, h = {
      id: `edgeNote${b}`,
      //Set relationship style and line type
      classes: "relation",
      pattern: "dotted",
      // Set link type for rendering
      arrowhead: "none",
      //Set edge extra labels
      startLabelRight: "",
      endLabelLeft: "",
      //Set relation arrow types
      arrowTypeStart: "none",
      arrowTypeEnd: "none",
      style: "fill:none",
      labelStyle: "",
      curve: m0(v.curve, $f)
    };
    t.setEdge(l.id, l.class, h, b);
  });
};
var H = function(o, t) {
  const p = Ft().flowchart;
  let n = 0;
  o.forEach(function(e) {
    var l;
    n++;
    const s = {
      //Set relationship style and line type
      classes: "relation",
      pattern: e.relation.lineType == 1 ? "dashed" : "solid",
      id: "id" + n,
      // Set link type for rendering
      arrowhead: e.type === "arrow_open" ? "none" : "normal",
      //Set edge extra labels
      startLabelRight: e.relationTitle1 === "none" ? "" : e.relationTitle1,
      endLabelLeft: e.relationTitle2 === "none" ? "" : e.relationTitle2,
      //Set relation arrow types
      arrowTypeStart: D(e.relation.type1),
      arrowTypeEnd: D(e.relation.type2),
      style: "fill:none",
      labelStyle: "",
      curve: m0(p == null ? void 0 : p.curve, $f)
    };
    if (L2.info(s, e), e.style !== void 0) {
      const a = S0(e.style);
      s.style = a.style, s.labelStyle = a.labelStyle;
    }
    e.text = e.title, e.text === void 0 ? e.style !== void 0 && (s.arrowheadStyle = "fill: #333") : (s.arrowheadStyle = "fill: #333", s.labelpos = "c", ((l = Ft().flowchart) == null ? void 0 : l.htmlLabels) ?? Ft().htmlLabels ? (s.labelType = "html", s.label = '<span class="edgeLabel">' + e.text + "</span>") : (s.labelType = "text", s.label = e.text.replace(In.lineBreakRegex, `
`), e.style === void 0 && (s.style = s.style || "stroke: #333; stroke-width: 1.5px;fill:none"), s.labelStyle = s.labelStyle.replace("color:", "fill:"))), t.setEdge(e.id1, e.id2, s, n);
  });
};
var V = function(o) {
  v = {
    ...v,
    ...o
  };
};
var W = async function(o, t, p, n) {
  L2.info("Drawing class - ", t);
  const e = Ft().flowchart ?? Ft().class, s = Ft().securityLevel;
  L2.info("config:", e);
  const l = (e == null ? void 0 : e.nodeSpacing) ?? 50, a = (e == null ? void 0 : e.rankSpacing) ?? 50, i = new L({
    multigraph: true,
    compound: true
  }).setGraph({
    rankdir: n.db.getDirection(),
    nodesep: l,
    ranksep: a,
    marginx: 8,
    marginy: 8
  }).setDefaultEdgeLabel(function() {
    return {};
  }), y = n.db.getNamespaces(), d = n.db.getClasses(), f = n.db.getRelations(), m = n.db.getNotes();
  L2.info(f), $(y, i, t, n), I(d, i, t, n), H(f, i), F(m, i, f.length + 1, d);
  let b;
  s === "sandbox" && (b = Ct("#i" + t));
  const h = s === "sandbox" ? Ct(b.nodes()[0].contentDocument.body) : Ct("body"), u = h.select(`[id="${t}"]`), x = h.select("#" + t + " g");
  if (await xt(
    x,
    i,
    ["aggregation", "extension", "composition", "dependency", "lollipop"],
    "classDiagram",
    t
  ), Xe.insertTitle(u, "classTitleText", (e == null ? void 0 : e.titleTopMargin) ?? 5, n.db.getDiagramTitle()), py(i, u, e == null ? void 0 : e.diagramPadding, e == null ? void 0 : e.useMaxWidth), !(e != null && e.htmlLabels)) {
    const T = s === "sandbox" ? b.nodes()[0].contentDocument : document, M = T.querySelectorAll('[id="' + t + '"] .edgeLabel .label');
    for (const w of M) {
      const L3 = w.getBBox(), g = T.createElementNS("http://www.w3.org/2000/svg", "rect");
      g.setAttribute("rx", 0), g.setAttribute("ry", 0), g.setAttribute("width", L3.width), g.setAttribute("height", L3.height), w.insertBefore(g, w.firstChild);
    }
  }
};
function D(o) {
  let t;
  switch (o) {
    case 0:
      t = "aggregation";
      break;
    case 1:
      t = "extension";
      break;
    case 2:
      t = "composition";
      break;
    case 3:
      t = "dependency";
      break;
    case 4:
      t = "lollipop";
      break;
    default:
      t = "none";
  }
  return t;
}
var J = {
  setConf: V,
  draw: W
};
var te = {
  parser: Nt,
  db: vt,
  renderer: J,
  styles: Lt,
  init: (o) => {
    o.class || (o.class = {}), o.class.arrowMarkerAbsolute = o.arrowMarkerAbsolute, vt.clear();
  }
};
export {
  te as diagram
};
//# sourceMappingURL=classDiagram-v2-6e58f5b0-4BBMLKXF.js.map
