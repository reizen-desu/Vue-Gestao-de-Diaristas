// import { createApp } from 'vue'
// import App from './App.vue'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'


// Import externall bootstrap versions
import './assets/styles/fontawesome.min.css'
import './assets/styles/font-awesome.min.css'
import './assets/styles/main.css'
import './assets/styles/style.css'

// We're using Bootstrap 5
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'


createApp(App).use(router).mount('#app')