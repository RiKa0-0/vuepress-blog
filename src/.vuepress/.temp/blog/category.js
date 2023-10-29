export const categoryMap = {"category":{"/":{"path":"/category/","map":{"站点介绍":{"path":"/category/%E7%AB%99%E7%82%B9%E4%BB%8B%E7%BB%8D/","keys":["v-184f4da6"]}}}},"tag":{"/":{"path":"/tag/","map":{"站点介绍":{"path":"/tag/%E7%AB%99%E7%82%B9%E4%BB%8B%E7%BB%8D/","keys":["v-184f4da6"]},"站长介绍":{"path":"/tag/%E7%AB%99%E9%95%BF%E4%BB%8B%E7%BB%8D/","keys":["v-184f4da6"]}}}}};

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept();
  if (__VUE_HMR_RUNTIME__.updateBlogCategory)
    __VUE_HMR_RUNTIME__.updateBlogCategory(categoryMap);
}

if (import.meta.hot)
  import.meta.hot.accept(({ categoryMap }) => {
    __VUE_HMR_RUNTIME__.updateBlogCategory(categoryMap);
  });


