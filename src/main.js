import { createApp } from 'vue'
import App from './App.vue'
import router from "./routes.js";

// Creation de l'app et "binding" des routes
createApp(App)
    .use(router)
    .mount('#app')
