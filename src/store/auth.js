import axios from "axios";
// import router from "../router";

export default {
	namespaced: true,
	state: {
		authenticated: false,
		user: {},
	},
	getters: {
		authenticated(state) {
			return state.authenticated;
		},
		user(state) {
			return state.user;
		},
	},
	mutations: {
		SET_AUTHENTICATED(state, value) {
			state.authenticated = value;
		},
		SET_USER(state, value) {
			state.user = value;
		},
	},
	actions: {
		async login({ dispatch }, credentials) {
			await axios.get("/sanctum/csrf-cookie");
			await axios.post("/visitantes/login", credentials);

			return dispatch("me");
		},

		async logout({ dispatch }) {
			await axios.post("/visitantes/logout");

			return dispatch("me");
		},

		me({ commit }) {
			return axios
				.get("/user")
				.then((response) => {
					commit("SET_AUTHENTICATED", true);
					commit("SET_USER", response.data);
				})
				.catch(() => {
					commit("SET_AUTHENTICATED", false);
					commit("SET_USER", null);
				});
		},

		/* login({ commit }) {
			return axios
				.get("/visitantes/profile")
				.then(({ data }) => {
					commit("SET_USER", data);
					commit("SET_AUTHENTICATED", true);
					router.push({ name: "dashboard" });
				})
				.catch(({ response: { data } }) => {
					commit("SET_USER", {});
					commit("SET_AUTHENTICATED", false);
				});
		},
		logout({ commit }) {
			commit("SET_USER", {});
			commit("SET_AUTHENTICATED", false);
		}, */
	},
};
