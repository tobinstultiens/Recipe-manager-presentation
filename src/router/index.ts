/* eslint-disable */
import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue'
import Login from '@/views/Login.vue'
import Register from '@/views/Register.vue'
import firebase from 'firebase'
import Recipe from '@/views/Recipe.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
    meta: {
      guest: true
    }
  },
  {
    path: '/register',
    name: 'Register',
    component: Register,
    meta:{
      guest:true
    }
  },
  {
    path: '/recipe',
    name: 'Recipe',
    component: Recipe,
    meta:{
      requiresAuth: true
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach(async (to, from, next) => {
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
  firebase.auth().onAuthStateChanged(function (user: any) {
    if (requiresAuth && !user) {
      next('login');
    } else {
      next();
    }
  });
});

export default router
