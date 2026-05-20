import { createApp } from 'vue'
import { Quasar } from 'quasar'
import router from '@/router' // Import the router
import './style.css'

import 'quasar/src/css/index.sass'
import '@quasar/extras/material-icons/material-icons.css'
import '@quasar/extras/fontawesome-v5/fontawesome-v5.css'

import App from './App.vue'

const app = createApp(App)

app.use(Quasar, { plugins: {} })
app.use(router) // Use the router

app.mount('#app')