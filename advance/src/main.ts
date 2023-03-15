import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
import {createPinia} from "pinia";
import axios from "axios"

createApp(App)
    .use(router)
    .use(createPinia())
    .mount('#app')
