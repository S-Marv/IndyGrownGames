import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import PageNotFoundView from '@/views/PageNotFoundView.vue'


const menubarRoutes = [
  {
    path: '/games',
    name: 'games',
    component: () => import('../views/GamesView.vue'),
  },
  {
    path: '/education',
    name: 'education',
    component: () => import('../views/EducationView.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    menubarRoutes[0],
    menubarRoutes[1],
    { 
      path: '/:pathMatch(.*)*', 
      name: "404",
      component:  PageNotFoundView}
  ],
  scrollBehavior(to) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth',
      }
    }
  },
})

export {router, menubarRoutes}
