import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/LoginView'
import SignUpView from '../views/SignUpView'
import UserProfile from '../views/User/UserProfile'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView
  },{
    path: '/signup',
    name: 'signup',
    component: SignUpView
  },
  {
    path: '/userprofile',
    name: 'userprofile',
    component: UserProfile
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
