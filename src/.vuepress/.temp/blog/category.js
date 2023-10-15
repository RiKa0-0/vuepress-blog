export const categoryMap = {"category":{"/":{"path":"/category/","map":{"使用指南":{"path":"/category/%E4%BD%BF%E7%94%A8%E6%8C%87%E5%8D%97/","keys":["v-6e19edb7","v-4e65ec78","v-c151bf32","v-438ffe52","v-1473bf53"]},"苹果":{"path":"/category/%E8%8B%B9%E6%9E%9C/","keys":["v-6cd750ef","v-6b227850","v-696d9fb1","v-67b8c712"]},"水果":{"path":"/category/%E6%B0%B4%E6%9E%9C/","keys":["v-6cd750ef","v-6b227850"]}}}},"tag":{"/":{"path":"/tag/","map":{"禁用":{"path":"/tag/%E7%A6%81%E7%94%A8/","keys":["v-4e65ec78"]},"文章加密":{"path":"/tag/%E6%96%87%E7%AB%A0%E5%8A%A0%E5%AF%86/","keys":["v-c151bf32"]},"Markdown":{"path":"/tag/markdown/","keys":["v-438ffe52"]},"页面配置":{"path":"/tag/%E9%A1%B5%E9%9D%A2%E9%85%8D%E7%BD%AE/","keys":["v-6e19edb7"]},"使用指南":{"path":"/tag/%E4%BD%BF%E7%94%A8%E6%8C%87%E5%8D%97/","keys":["v-6e19edb7"]},"红":{"path":"/tag/%E7%BA%A2/","keys":["v-6cd750ef","v-6b227850","v-696d9fb1","v-67b8c712"]},"大":{"path":"/tag/%E5%A4%A7/","keys":["v-6cd750ef","v-6b227850","v-696d9fb1","v-67b8c712"]},"圆":{"path":"/tag/%E5%9C%86/","keys":["v-6cd750ef","v-6b227850","v-696d9fb1","v-67b8c712"]}}}}};

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept();
  if (__VUE_HMR_RUNTIME__.updateBlogCategory)
    __VUE_HMR_RUNTIME__.updateBlogCategory(categoryMap);
}

if (import.meta.hot)
  import.meta.hot.accept(({ categoryMap }) => {
    __VUE_HMR_RUNTIME__.updateBlogCategory(categoryMap);
  });


