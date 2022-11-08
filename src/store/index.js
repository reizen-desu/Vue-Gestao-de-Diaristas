import axios from "axios";
import router from "../router/index.js";
import Vuex from "vuex";

export default new Vuex.Store({
	state: {
		authenticated: false,
		user: null,
		token: null,
	},

	mutations: {
		authenticateUser(state, data) {
			state.authenticated = true;
			state.token = data.token;
			state.user = data.user;
		},
	},
	actions: {
		async login({ commit }, credentials) {
			await axios.get("sanctum/csrf-cookie");
			const res = await axios.post(
				"http://127.0.0.1:8000/api/visitante/login",
				credentials
			);
			commit("authenticateUser", res.data);
			router.push("/");
		},
	},
	getters: {
		isAuthenticated(state) {
			return state.authenticated;
		},
		user(state) {
			return state.user;
		},
		userToken(state) {
			return state.token;
		},
	},
	modules: {},
});
