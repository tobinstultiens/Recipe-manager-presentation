/* eslint-disable */
import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/views/Home.vue";
import Login from "@/views/Login.vue";
import Register from "@/views/Register.vue";
import firebase from "firebase";
import Recipe from "@/views/Recipe.vue";
import RecipeAdd from "@/views/RecipeAdd.vue";
import RecipeUpdate from "@/views/RecipeUpdate.vue";

Vue.use(VueRouter);

const routes = [
	{
		path: "/",
		name: "Home",
		component: Home,
		meta: {
			requiresAuth: true
		}
	},
	{
		path: "/login",
		name: "Login",
		component: Login,
		meta: {
			guest: true,
			hideNavigation: true
		}
	},
	{
		path: "/register",
		name: "Register",
		component: Register,
		meta: {
			guest: true,
			hideNavigation: true 
		}
	},
	{
		path: "/recipe/get/:recipeId",
		name: "Recipe",
		component: Recipe,
		props: true,
		meta: {
			requiresAuth: true
		}
	},
	{
		path: "/recipe/update/:recipeId",
		name: "RecipeUpdate",
		component: RecipeUpdate,
		props: true,
		meta: {
			requiresAuth: true
		}
	},
	{
		path: "/recipe/add",
		name: "RecipeAdd",
		component: RecipeAdd,
		meta: {
			requiresAuth: true
		}
	}
];

const router = new VueRouter({
	mode: "history",
	base: process.env.BASE_URL,
	routes
});

router.beforeEach(async (to, from, next) => {
	const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
	firebase.auth().onAuthStateChanged(function(user: any) {
		if (requiresAuth && !user) {
			next("Login");
		} else {
			next();
		}
	});
});

export default router;
