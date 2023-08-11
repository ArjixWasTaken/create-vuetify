import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'

import router from './router'
import Vuetify from './vuetify.conf'

createApp(App).use(router).use(Vuetify).mount('#app')
