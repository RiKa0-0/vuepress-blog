import { defineClientConfig } from "@vuepress/client";
import { VPLink } from "C:/Users/muri0/WebstormProjects/vuepress-blog/node_modules/.pnpm/registry.npmmirror.com+vuepress-shared@2.0.0-beta.238_vuepress@2.0.0-beta.67/node_modules/vuepress-shared/lib/client/index.js";

import { HopeIcon, Layout, NotFound, useScrollPromise, injectDarkmode, setupDarkmode, setupSidebarItems } from "C:/Users/muri0/WebstormProjects/vuepress-blog/node_modules/.pnpm/registry.npmmirror.com+vuepress-theme-hope@2.0.0-beta.238_vuepress@2.0.0-beta.67/node_modules/vuepress-theme-hope/lib/bundle/export.js";

import { defineAutoCatalogIconComponent } from "C:/Users/muri0/WebstormProjects/vuepress-blog/node_modules/.pnpm/registry.npmmirror.com+vuepress-plugin-auto-catalog@2.0.0-beta.238_vuepress@2.0.0-beta.67/node_modules/vuepress-plugin-auto-catalog/lib/client/index.js"
import { BlogCategory, BlogHome, BlogType, BloggerInfo, Timeline, setupBlog } from "C:/Users/muri0/WebstormProjects/vuepress-blog/node_modules/.pnpm/registry.npmmirror.com+vuepress-theme-hope@2.0.0-beta.238_vuepress@2.0.0-beta.67/node_modules/vuepress-theme-hope/lib/bundle/modules/blog/export.js";
import "C:/Users/muri0/WebstormProjects/vuepress-blog/node_modules/.pnpm/registry.npmmirror.com+vuepress-theme-hope@2.0.0-beta.238_vuepress@2.0.0-beta.67/node_modules/vuepress-theme-hope/lib/bundle/modules/blog/styles/all.scss";
import { GlobalEncrypt, LocalEncrypt } from "C:/Users/muri0/WebstormProjects/vuepress-blog/node_modules/.pnpm/registry.npmmirror.com+vuepress-theme-hope@2.0.0-beta.238_vuepress@2.0.0-beta.67/node_modules/vuepress-theme-hope/lib/bundle/modules/encrypt/export.js";
import "C:/Users/muri0/WebstormProjects/vuepress-blog/node_modules/.pnpm/registry.npmmirror.com+vuepress-theme-hope@2.0.0-beta.238_vuepress@2.0.0-beta.67/node_modules/vuepress-theme-hope/lib/bundle/modules/encrypt/styles/all.scss"
import Slide from "C:/Users/muri0/WebstormProjects/vuepress-blog/node_modules/.pnpm/registry.npmmirror.com+vuepress-plugin-md-enhance@2.0.0-beta.238_vuepress@2.0.0-beta.67/node_modules/vuepress-plugin-md-enhance/lib/client/SlidePage.js";

import "C:/Users/muri0/WebstormProjects/vuepress-blog/node_modules/.pnpm/registry.npmmirror.com+vuepress-theme-hope@2.0.0-beta.238_vuepress@2.0.0-beta.67/node_modules/vuepress-theme-hope/lib/bundle/styles/all.scss";

defineAutoCatalogIconComponent(HopeIcon);

export default defineClientConfig({
  enhance: ({ app, router }) => {
    const { scrollBehavior } = router.options;

    router.options.scrollBehavior = async (...args) => {
      await useScrollPromise().wait();

      return scrollBehavior(...args);
    };

    // inject global properties
    injectDarkmode(app);

    // provide HopeIcon as global component
    app.component("HopeIcon", HopeIcon);
    // provide VPLink as global component
    app.component("VPLink", VPLink);

    app.component("BloggerInfo", BloggerInfo);
    app.component("GlobalEncrypt", GlobalEncrypt);
    app.component("LocalEncrypt", LocalEncrypt);
  },
  setup: () => {
    setupDarkmode();
    setupSidebarItems();
    setupBlog();
  },
  layouts: {
    Layout,
    NotFound,
    BlogCategory,
    BlogHome,
    BlogType,
    Timeline,
    Slide,
  }
});