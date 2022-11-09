import { createRouter, createWebHashHistory } from "vue-router";
import LandingPage from "../views/LandingPage.vue";
import AboutPage from "../views/AboutPage.vue";
import NotFoundPage from "../views/NotFoundPage.vue";
import TelaVisitante from "../views/TelaVisitante.vue";

// Configure Vue Router
const routes = [
	{
		path: "/",
		// name: 'home',
		component: LandingPage,
	},
	{
		path: "/about",
		// name: 'about',
		component: AboutPage,
	},
	{
		path: "/:pathMatch(.*)*",
		// name: 'not-found',
		component: NotFoundPage,
	},

	{
		path: "/diaristas",
		name: "diaristas",
		component: TelaVisitante,
	},
];

const router = createRouter({
	history: createWebHashHistory(),
	routes,
});

export default router;
