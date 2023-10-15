import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  // locales: {
  //   "/": {
  //     lang: "zh-CN",
  //     title: "日暮之地",
  //     description: "暮里写的些许文集",
  //   },
  //   "/zh/": {
  //     lang: "zh-CN",
  //     title: "日暮之地",
  //     description: "暮里写的些许文集",
  //   }
  // },

  theme,

  // Enable it with pwa
  // shouldPrefetch: false,
});
