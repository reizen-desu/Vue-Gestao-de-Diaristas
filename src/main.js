import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import router from "./router";
// import axios from "axios";
import VueSweetalert2 from "vue-sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";

// Import externall bootstrap versions
import "./assets/styles/fontawesome.min.css";
import "./assets/styles/font-awesome.min.css";
import "./assets/styles/main.css";
import "./assets/styles/style.css";

// We're using Bootstrap 5
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";

// Vue.prototype.$http = axios;

axios.defaults.withCredentials = true;
axios.defaults.baseURL = "http://127.0.0.1:8000/api";
axios.defaults.headers["Authorization"] =
	"Bearer " + localStorage.getItem("token");

// Vue.use(Vuex);
const pinia = createPinia();
const app = createApp(App);
app.use(router);
app.use(pinia);
app.use(VueSweetalert2);
app.mount("#app");
