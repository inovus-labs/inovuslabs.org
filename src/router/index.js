import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '@/views/HomeView.vue'

// About pages
import AboutView from '@/views/AboutView.vue'
import GalleryView from '@/views/GalleryView.vue'
import TeamView from '@/views/TeamView.vue'
import NewsView from '@/views/NewsView.vue'
import SocialsView from '@/views/SocialsView.vue'


// Initiatives pages
import ActivityView from '@/views/ActivityView.vue'
import NanodegreeView from '@/views/NanodegreeView.vue'
import ProjectView from '@/views/ProjectView.vue'
import BlogView from '@/views/BlogView.vue'
import PodcastView from '@/views/PodcastView.vue'
import ReccuringEventsView from '@/views/ReccuringEventsView.vue'

// Contact page
import ContactView from '@/views/ContactView.vue'

import NotFoundView from '@/views/404.vue'
import MaintainanceView from '@/views/MaintainanceView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/home',
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
      path: '/socials',
      name: 'socials',
      component: SocialsView,
      meta: { title: 'Socials' }
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
      path: '/nanodegree',
      name: 'nanodegree',
      component: NanodegreeView,
      meta: { title: 'Nano Degree' }
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

    // Contact page
    {
      path: '/contact',
      name: 'contact',
      component: ContactView,
      meta: { title: 'Contact' }
    },

    {
      path: '/:pathMatch(.*)*',
      name: '404',
      component: NotFoundView,
      meta: { title: '404' }
    },

    // Maintainance page
    {
      path: '/',
      name: 'maintainance',
      component: MaintainanceView,
      meta: { title: 'Maintainance' }
    },
  ]
})


// Change page title on route change
router.beforeEach((to, from, next) => {
  document.title = `${to.meta.title} - Inovus Labs IEDC` || 'Inovus Labs IEDC'
  next()
})


export default router
