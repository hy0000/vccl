import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import routes from 'voie-pages'
import App from "./App.vue"

import 'element-plus/lib/theme-chalk/index.css';
import ElementPlus from 'element-plus'

/*使用vue-router*/
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  /*
  👇关于在vue-router4中使用锚点
  https://next.router.vuejs.org/guide/advanced/scroll-behavior.html
  */
  scrollBehavior (to, from, savedPosition) {
      if (to.hash) {
          return {
              el: to.hash,
              behavior: 'smooth'
          }
      }
      return {top:0}
  }
});

createApp(App).use(router).use(ElementPlus).mount('#app')