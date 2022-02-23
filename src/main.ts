import { createApp } from 'vue'
import App from './App.vue'
import './index.css'       
import "./assets/styles/tailwind.css";
import router from "./router";


const app = createApp(App)
app.use(router)
app.mount('#app')
