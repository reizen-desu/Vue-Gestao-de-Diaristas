import { createRouter, createWebHashHistory } from "vue-router";
import LandingPage from "../views/LandingPage.vue";
import AboutPage from "../views/AboutPage.vue";
import NotFoundPage from "../views/NotFoundPage.vue";
import TelaVisitante from "../views/TelaVisitante.vue";

// Configure Vue Router
const routes = [
	{
		path: "/",
		name: "Home",
		component: LandingPage,
	},
	{
		path: "/about",
		name: "About",
		component: AboutPage,
	},
	{
		path: "/:pathMatch(.*)*",
		name: "Not-found",
		component: NotFoundPage,
	},

	{
		path: "/diaristas",
		name: "Diaristas",
		component: TelaVisitante,
	},
];

const router = createRouter({
	history: createWebHashHistory(),
	routes,
});

export default router;
