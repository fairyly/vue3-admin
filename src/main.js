import { createApp } from 'vue'
import App from './App.vue'
import router from "./router";
import store from "./store";
import ElementPlus from 'element-plus'

import 'virtual:windi.css'
import 'element-plus/dist/index.css'
import 'normalize.css'

const app = createApp(App)
app.use(ElementPlus)
app.use(router)
app.use(store)

app.mount('#app')
