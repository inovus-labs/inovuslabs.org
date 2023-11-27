import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '@/views/HomeView.vue'

// Navbar : About pages
import AboutView from '@/views/AboutView.vue'
import GalleryView from '@/views/GalleryView.vue'
import TeamView from '@/views/TeamView.vue'


import ProjectView from '@/views/ProjectView.vue'

import NotFoundView from '@/views/404.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },

    // Navbar : About pages
    {
      path: '/about',
      name: 'about',
      component: AboutView
    },
    {
      path: '/gallery',
      name: 'gallery',
      component: GalleryView
    },
    {
      path: '/team',
      name: 'team',
      component: TeamView
    },
    

    {
      path: '/projects',
      name: 'project',
      component: ProjectView
    },
    {
      path: '/:pathMatch(.*)*',
      name: '404',
      component: NotFoundView
    }
  ]
})

export default router
