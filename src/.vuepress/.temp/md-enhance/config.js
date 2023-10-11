import { defineClientConfig } from "@vuepress/client";
import ChartJS from "E:/workspace/vuepress-blog/node_modules/.pnpm/registry.npmmirror.com+vuepress-plugin-md-enhance@2.0.0-beta.238_vuepress@2.0.0-beta.67/node_modules/vuepress-plugin-md-enhance/lib/client/components/ChartJS.js";
import CodeTabs from "E:/workspace/vuepress-blog/node_modules/.pnpm/registry.npmmirror.com+vuepress-plugin-md-enhance@2.0.0-beta.238_vuepress@2.0.0-beta.67/node_modules/vuepress-plugin-md-enhance/lib/client/components/CodeTabs.js";
import { hasGlobalComponent } from "E:/workspace/vuepress-blog/node_modules/.pnpm/registry.npmmirror.com+vuepress-shared@2.0.0-beta.238_vuepress@2.0.0-beta.67/node_modules/vuepress-shared/lib/client/index.js";
import { CodeGroup, CodeGroupItem } from "E:/workspace/vuepress-blog/node_modules/.pnpm/registry.npmmirror.com+vuepress-plugin-md-enhance@2.0.0-beta.238_vuepress@2.0.0-beta.67/node_modules/vuepress-plugin-md-enhance/lib/client/compact/index.js";
import "E:/workspace/vuepress-blog/node_modules/.pnpm/registry.npmmirror.com+vuepress-plugin-md-enhance@2.0.0-beta.238_vuepress@2.0.0-beta.67/node_modules/vuepress-plugin-md-enhance/lib/client/styles/container/index.scss";
import CodeDemo from "E:/workspace/vuepress-blog/node_modules/.pnpm/registry.npmmirror.com+vuepress-plugin-md-enhance@2.0.0-beta.238_vuepress@2.0.0-beta.67/node_modules/vuepress-plugin-md-enhance/lib/client/components/CodeDemo.js";
import ECharts from "E:/workspace/vuepress-blog/node_modules/.pnpm/registry.npmmirror.com+vuepress-plugin-md-enhance@2.0.0-beta.238_vuepress@2.0.0-beta.67/node_modules/vuepress-plugin-md-enhance/lib/client/components/ECharts.js";
import "E:/workspace/vuepress-blog/node_modules/.pnpm/registry.npmmirror.com+vuepress-plugin-md-enhance@2.0.0-beta.238_vuepress@2.0.0-beta.67/node_modules/vuepress-plugin-md-enhance/lib/client/styles/figure.scss";
import FlowChart from "E:/workspace/vuepress-blog/node_modules/.pnpm/registry.npmmirror.com+vuepress-plugin-md-enhance@2.0.0-beta.238_vuepress@2.0.0-beta.67/node_modules/vuepress-plugin-md-enhance/lib/client/components/FlowChart.js";
import "E:/workspace/vuepress-blog/node_modules/.pnpm/registry.npmmirror.com+vuepress-plugin-md-enhance@2.0.0-beta.238_vuepress@2.0.0-beta.67/node_modules/vuepress-plugin-md-enhance/lib/client/styles/footnote.scss";
import "E:/workspace/vuepress-blog/node_modules/.pnpm/registry.npmmirror.com+vuepress-plugin-md-enhance@2.0.0-beta.238_vuepress@2.0.0-beta.67/node_modules/vuepress-plugin-md-enhance/lib/client/styles/image-mark.scss"
import Mermaid from "E:/workspace/vuepress-blog/node_modules/.pnpm/registry.npmmirror.com+vuepress-plugin-md-enhance@2.0.0-beta.238_vuepress@2.0.0-beta.67/node_modules/vuepress-plugin-md-enhance/lib/client/components/Mermaid.js";
import { injectMermaidConfig } from "E:/workspace/vuepress-blog/node_modules/.pnpm/registry.npmmirror.com+vuepress-plugin-md-enhance@2.0.0-beta.238_vuepress@2.0.0-beta.67/node_modules/vuepress-plugin-md-enhance/lib/client//index.js";
import "E:/workspace/vuepress-blog/node_modules/.pnpm/registry.npmmirror.com+reveal.js@4.6.1/node_modules/reveal.js/dist/reveal.css";
import RevealJs from "E:/workspace/vuepress-blog/node_modules/.pnpm/registry.npmmirror.com+vuepress-plugin-md-enhance@2.0.0-beta.238_vuepress@2.0.0-beta.67/node_modules/vuepress-plugin-md-enhance/lib/client/components/RevealJs.js";
import { injectRevealJsConfig } from "E:/workspace/vuepress-blog/node_modules/.pnpm/registry.npmmirror.com+vuepress-plugin-md-enhance@2.0.0-beta.238_vuepress@2.0.0-beta.67/node_modules/vuepress-plugin-md-enhance/lib/client/index.js";
import Playground from "E:/workspace/vuepress-blog/node_modules/.pnpm/registry.npmmirror.com+vuepress-plugin-md-enhance@2.0.0-beta.238_vuepress@2.0.0-beta.67/node_modules/vuepress-plugin-md-enhance/lib/client/components/Playground.js";
import Tabs from "E:/workspace/vuepress-blog/node_modules/.pnpm/registry.npmmirror.com+vuepress-plugin-md-enhance@2.0.0-beta.238_vuepress@2.0.0-beta.67/node_modules/vuepress-plugin-md-enhance/lib/client/components/Tabs.js";
import "E:/workspace/vuepress-blog/node_modules/.pnpm/registry.npmmirror.com+vuepress-plugin-md-enhance@2.0.0-beta.238_vuepress@2.0.0-beta.67/node_modules/vuepress-plugin-md-enhance/lib/client/styles/tasklist.scss";
import "E:/workspace/vuepress-blog/node_modules/.pnpm/registry.npmmirror.com+katex@0.16.9/node_modules/katex/dist/katex.min.css";
import "E:/workspace/vuepress-blog/node_modules/.pnpm/registry.npmmirror.com+vuepress-plugin-md-enhance@2.0.0-beta.238_vuepress@2.0.0-beta.67/node_modules/vuepress-plugin-md-enhance/lib/client/styles/katex.scss";
import { defineAsyncComponent } from "vue";
import { injectVuePlaygroundConfig } from "E:/workspace/vuepress-blog/node_modules/.pnpm/registry.npmmirror.com+vuepress-plugin-md-enhance@2.0.0-beta.238_vuepress@2.0.0-beta.67/node_modules/vuepress-plugin-md-enhance/lib/client/index.js";

export default defineClientConfig({
  enhance: ({ app }) => {
    app.component("ChartJS", ChartJS)
    app.component("CodeTabs", CodeTabs);
    if(!hasGlobalComponent("CodeGroup", app)) app.component("CodeGroup", CodeGroup);
    if(!hasGlobalComponent("CodeGroupItem", app)) app.component("CodeGroupItem", CodeGroupItem);
    app.component("CodeDemo", CodeDemo);
    app.component("ECharts", ECharts);
    app.component("FlowChart", FlowChart);
    injectMermaidConfig(app);
    app.component("Mermaid", Mermaid);
    injectRevealJsConfig(app);
    app.component("RevealJs", RevealJs);
    app.component("Playground", Playground);
    app.component("Tabs", Tabs);
    injectVuePlaygroundConfig(app);
    app.component("VuePlayground", defineAsyncComponent(() => import("E:/workspace/vuepress-blog/node_modules/.pnpm/registry.npmmirror.com+vuepress-plugin-md-enhance@2.0.0-beta.238_vuepress@2.0.0-beta.67/node_modules/vuepress-plugin-md-enhance/lib/client/components/VuePlayground.js")));
  },
  setup: () => {

  }
});