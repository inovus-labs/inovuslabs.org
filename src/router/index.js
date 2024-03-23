import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '@/views/HomeView.vue'

// About pages
import AboutView from '@/views/AboutView.vue'
import GalleryView from '@/views/GalleryView.vue'
import TeamView from '@/views/TeamView.vue'
import NewsView from '@/views/NewsView.vue'
import SocialsView from '@/views/SocialsView.vue'
import ReportsView from '@/views/ReportsView.vue'
import LearningStories from '@/views/LearningStoriesView.vue'

import NowView from '@/views/NowView.vue'

// Initiatives pages
import MiniIotLabView from '@/views/MiniIotLabView.vue'
import ActivityView from '@/views/ActivityView.vue'
import NanodegreeView from '@/views/NanodegreeView.vue'
import OtherEventsView from '@/views/OtherEventsView.vue'
import ProjectView from '@/views/ProjectView.vue'
import BlogView from '@/views/BlogView.vue'
import PodcastView from '@/views/PodcastView.vue'
import ReccuringEventsView from '@/views/ReccuringEventsView.vue'
import OutreachView from '@/views/OutreachView.vue'
import BuggyNews from '@/views/BuggyNews.vue'

// Contact page
import ResourcesView from '@/views/ResourcesView.vue'
import ContactView from '@/views/ContactView.vue'

// Guideline pages
import GuidelinesView from '@/views/GuidelinesView.vue'
import CodeOfConductView from '@/views/CodeOfConductView.vue'

import NotFoundView from '@/views/404.vue'
import MaintainanceView from '@/views/MaintainanceView.vue'

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
      path: '/learning-stories',
      name: 'learning-stories',
      component: LearningStories,
      meta: { title: 'Learning Stories' }
    },

    // Navbar : Initiatives pages
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
      path: '/other-events',
      name: 'other-events',
      component: OtherEventsView,
      meta: { title: 'Other Events' }
    },
    {
      path: '/news',
      name: 'news',
      component: NewsView,
      meta: { title: 'News' }
    },{
      path: '/buggy',
      name: 'Buggy',
      component: BuggyNews,
      meta: { title: 'Buggy' }
    },
    {
      path: '/reports',
      name: 'reports',
      component: ReportsView,
      meta: { title: 'Reports' }
    },

    {
      path: '/iot-lab',
      name: 'iot-lab',
      component: MiniIotLabView,
      meta: { title: 'IoT Lab' }
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
      path: '/outreach',
      name: 'outreach',
      component: OutreachView,
      meta: { title: 'Outreach Programs' }
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
      path: '/now',
      name: 'now',
      component: NowView,
      meta: { title: 'Now' }
    },

    // Contact page
    {
      path: '/contact',
      name: 'contact',
      component: ContactView,
      meta: { title: 'Contact' }
    },

    // Resources page
    {
      path: '/resources',
      name: 'resources',
      component: ResourcesView,
      meta: { title: 'Resources' }
    },

    // Contact page
    {
      path: '/iedc-guidelines',
      name: 'iedc-guidelines',
      component: GuidelinesView,
      meta: { title: 'IEDC Guidelines' }
    },
    {
      path: '/code-of-conduct',
      name: 'code-of-conduct',
      component: CodeOfConductView,
      meta: { title: 'Code of Conduct' }
    },

    {
      path: '/:pathMatch(.*)*',
      name: '404',
      component: NotFoundView,
      meta: { title: '404' }
    },

    // Maintainance page
    // {
    //   path: '/',
    //   name: 'maintainance',
    //   component: MaintainanceView,
    //   meta: { title: 'Maintainance' }
    // },
  ]
})


// Change page title on route change
router.beforeEach((to, from, next) => {
  document.title = `${to.meta.title} - Inovus Labs IEDC` || 'Inovus Labs IEDC'
  next()
})


export default router
