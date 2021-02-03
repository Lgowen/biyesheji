import { createApp } from 'vue'
import { ElButton, ElRow, ElCol, ElMenu, ElMenuItem } from 'element-plus'
import App from './App.vue'
import router from './router'
import store from './store'
import 'element-plus/lib/theme-chalk/index.css'
import './assets/css/reset.css'
import './assets/iconfont/iconfont.css'
import './assets/iconfont2/iconfont.css'
import './assets/iconfont3/iconfont.css'
import './assets/iconfont4/iconfont.css'
import './assets/iconfont5/iconfont.css'

const app = createApp(App)
app.use(ElButton).use(ElRow).use(ElCol).use(ElMenu).use(ElMenuItem)

// 分环境处理
if (process.env.NODE_ENV === 'development') {
    // if ('__VUE_DEVTOOLS_GLOBAL_HOOK__' in window) {
    // // 这里__VUE_DEVTOOLS_GLOBAL_HOOK__.Vue赋值一个createApp实例
    //   window.__VUE_DEVTOOLS_GLOBAL_HOOK__.Vue = app
    // }
    app.config.devtools = true
  }
  

app.use(router).use(store).mount('#app')


