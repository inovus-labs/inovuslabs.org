import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '@/views/HomeView.vue'

// Navbar : About pages
import AboutView from '@/views/AboutView.vue'
import GalleryView from '@/views/GalleryView.vue'
import TeamView from '@/views/TeamView.vue'
import ActivityView from '@/views/ActivityView.vue'
import NewsView from '@/views/NewsView.vue'


// Navbar : Initiatives pages
import ProjectView from '@/views/ProjectView.vue'
import ReccuringEventsView from '@/views/ReccuringEventsView.vue'
import BlogView from '@/views/BlogView.vue'
import PodcastView from '@/views/PodcastView.vue'

import NotFoundView from '@/views/404.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: {
        title: 'Home'
      }
    },

    // Navbar : About pages
    {
      path: '/about',
      name: 'about',
      component: AboutView,
      meta: { title: 'About' }
    },
    {
      path: '/gallery',
      name: 'gallery',
      component: GalleryView,
      meta: { title: 'Gallery' }
    },
    {
      path: '/team',
      name: 'team',
      component: TeamView,
      meta: { title: 'Team' }
    },
    {
      path: '/events',
      name: 'events',
      component: ActivityView,
      meta: { title: 'Events' }
    },
    {
      path: '/news',
      name: 'news',
      component: NewsView,
      meta: { title: 'News' }
    },

    {
      path: '/projects',
      name: 'project',
      component: ProjectView,
      meta: { title: 'Projects' }
    },
    {
      path: '/reccuring-events',
      name: 'reccuring-events',
      component: ReccuringEventsView,
      meta: { title: 'Reccuring Events' }
    },
    {
      path: '/blog',
      name: 'blog',
      component: BlogView,
      meta: { title: 'Blogs' }
    },
    {
      path: '/inora',
      name: 'inora',
      component: PodcastView,
      meta: { title: 'Inora' }
    },
    {
      path: '/:pathMatch(.*)*',
      name: '404',
      component: NotFoundView,
      meta: { title: '404' }
    }
  ]
})


// Change page title on route change
router.beforeEach((to, from, next) => {
  document.title = `${to.meta.title} - Inovus Labs IEDC` || 'Inovus Labs IEDC'
  next()
})


export default router
