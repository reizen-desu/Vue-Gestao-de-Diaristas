// import * as Vue from "vue";
import { createApp } from "vue";
import { createStore } from "vuex";
import App from "./App.vue";
import router from "./router";
// import axios from "axios";
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';

// Import externall bootstrap versions
import "./assets/styles/fontawesome.min.css";
import "./assets/styles/font-awesome.min.css";
import "./assets/styles/main.css";
import "./assets/styles/style.css";

// We're using Bootstrap 5
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";

// Vue.prototype.$http = axios;
// createApp(App).use(router).mount("#app");

// Create a new store instance.
const store = createStore({
	state() {
		return {
			count: 0,
		};
	},
	mutations: {
		increment(state) {
			state.count++;
		},
	},
});

const app = createApp(App);
app.use(router);
app.use(store);
app.use(VueSweetalert2);
app.mount("#app");
