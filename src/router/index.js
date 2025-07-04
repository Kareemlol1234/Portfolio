import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ServicsView from '@/views/ServicsView.vue'
import ContactView from '@/views/ContactView.vue'
import SkillsView from '@/views/SkillsView.vue'

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
    path: "/ServicsView",
    name: "ServicsView",
    component: ServicsView
  },
  {
    path: "/ContactView",
    name: "ContactView",
    component: ContactView
  },
  {
    path: "/SkillsView",
    name: "SkillsView",
    component: SkillsView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
