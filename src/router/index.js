import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '@/views/HomeView.vue'
import Splash from '@/views/SplashScreen.vue'

// About pages
import AboutView from '@/views/AboutView.vue'
import GalleryView from '@/views/GalleryView.vue'
import OurTeamView from '@/views/OurTeamView.vue'
import NewsView from '@/views/NewsView.vue'
import SocialsView from '@/views/SocialsView.vue'
import ReportsView from '@/views/ReportsView.vue'
import BuggyNews from '@/views/BuggyNews.vue'

import NowView from '@/views/NowView.vue'

// Initiatives pages
import MiniIotLabView from '@/views/MiniIotLabView.vue'
import ActivityView from '@/views/ActivityView.vue'
import NanodegreeView from '@/views/NanodegreeView.vue'
import ProjectView from '@/views/ProjectView.vue'
import BlogView from '@/views/BlogView.vue'
import PodcastView from '@/views/PodcastView.vue'
import ReccuringEventsView from '@/views/ReccuringEventsView.vue'
import OutreachView from '@/views/OutreachView.vue'
import ProductsView from '@/views/ProductsView.vue'

// Contact page
import ResourcesView from '@/views/ResourcesView.vue'
import ContactView from '@/views/ContactView.vue'

// Guideline pages
import GuidelinesView from '@/views/GuidelinesView.vue'

import NotFoundView from '@/views/404.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: '',
      component: Splash,
      meta: {
        title: 'Home',
        description: "Welcome to Inovus Labs IEDC at Kristu Jyoti College, Changanassery. Sparking tomorrow's innovations through maker culture, IoT, tech learning, and student entrepreneurship.",
        keywords: "Inovus Labs, Innovus Labs, Innovuslabs, IEDC, KJCMT, Innovation Hub, Student Startups, Changanassery, Kerala Startup Mission",
        ogType: "website"
      }
    },
    {
      path: '/home',
      name: 'home',
      component: HomeView,
      meta: {
        title: 'Home',
        description: "Explore the innovation ecosystem of Inovus Labs IEDC at Kristu Jyoti College, Changanassery. Discover active events, partners, testimonials, and student tech culture.",
        keywords: "Inovus Labs Home, Innovus Labs, Innovuslabs, IEDC Kerala, Maker Hub, IoT Prototyping, Startup Incubation, KJCMT",
        ogType: "website"
      }
    },

    // Navbar : About pages
    {
      path: '/about',
      name: 'about',
      component: AboutView,
      meta: {
        title: 'About Us',
        description: "Learn about Inovus Labs IEDC, our journey, mission, and vision to build a thriving culture of technological creativity and entrepreneurship at KJCMT.",
        keywords: "About Inovus Labs, IEDC Mission, Vision, College Innovation Cell, Kristu Jyoti College",
        ogType: "website"
      }
    },
    {
      path: '/gallery',
      name: 'gallery',
      component: GalleryView,
      meta: {
        title: 'Gallery',
        description: "Browse high-resolution photographs and highlights from workshops, hackathons, speaker sessions, and community events at Inovus Labs IEDC.",
        keywords: "Inovus Labs Gallery, Event Photos, Hackathon Pictures, Tech Meetup Photos, KJCMT Innovation Gallery",
        ogType: "website"
      }
    },
    {
      path: '/socials',
      name: 'socials',
      component: SocialsView,
      meta: {
        title: 'Socials & Community',
        description: "Connect with Inovus Labs across all community platforms: LinkedIn, Instagram, Twitter/X, GitHub, YouTube, and Threads.",
        keywords: "Inovus Labs Socials, Follow Inovus, Student Community, LinkedIn, Instagram, GitHub, Twitter",
        ogType: "website"
      }
    },
    {
      path: '/team',
      alias: ['/teams'],
      name: 'team',
      component: OurTeamView,
      meta: {
        title: 'Our Team',
        description: "Meet the executive committee, technical leads, creative strategists, and faculty coordinators behind Inovus Labs IEDC.",
        keywords: "Inovus Labs Team, Student Leads, Executive Committee, Coordinators, Mentors, KJCMT IEDC",
        ogType: "profile"
      }
    },

    // Navbar : Initiatives pages
    {
      path: '/events',
      name: 'events',
      component: ActivityView,
      meta: {
        title: 'Events & Activities',
        description: "Discover upcoming hackathons, tech bootcamps, maker workshops, and startup summits hosted by Inovus Labs IEDC.",
        keywords: "Inovus Labs Events, Tech Workshops, Hackathons Kerala, Startup Summits, College Bootcamps",
        ogType: "website"
      }
    },
    {
      path: '/nanodegree',
      name: 'nanodegree',
      component: NanodegreeView,
      meta: {
        title: 'Nano Degree Program',
        description: "Inovus Labs Nano Degree is an intensive hands-on cohort program designed to transform students into job-ready software engineers and makers.",
        keywords: "Nano Degree, Inovus Labs Cohort, Web Engineering, Practical Skills, Student Upskilling Kerala",
        ogType: "website"
      }
    },
    {
      path: '/buggy',
      name: 'BuggyNews',
      component: BuggyNews,
      meta: {
        title: 'BuggyNews',
        description: "BuggyNews: Tech highlights, student developer insights, open-source discoveries, and curated engineering news from Inovus Labs.",
        keywords: "BuggyNews, Inovus News, Tech Newsletter, Student Developer Stories, Engineering Highlights",
        author: "BuggyNews Editorial",
        ogType: "article"
      }
    },
    {
      path: '/news',
      name: 'news',
      component: NewsView,
      meta: {
        title: 'News & Press',
        description: "Official press releases, media coverage, awards, and milestones achieved by Inovus Labs IEDC and its student founders.",
        keywords: "Inovus Labs News, Press Coverage, Startup Awards, College Milestones, Tech Announcements",
        author: "Inovus Labs IEDC",
        ogType: "website"
      }
    },
    {
      path: '/reports',
      name: 'reports',
      component: ReportsView,
      meta: {
        title: 'Annual & Activity Reports',
        description: "Access transparent annual reports, metric reviews, and comprehensive activity documentation of Inovus Labs IEDC.",
        keywords: "Inovus Labs Reports, Annual Report, Activity Documentation, IEDC Kerala Audits",
        author: "Inovus Labs IEDC",
        ogType: "website"
      }
    },

    {
      path: '/iot-lab',
      name: 'iot-lab',
      component: MiniIotLabView,
      meta: {
        title: 'Mini IoT Lab',
        description: "Explore the Inovus Labs Mini IoT Lab: A dedicated maker hardware space featuring microcontrollers, sensors, 3D prototyping, and development boards.",
        keywords: "Mini IoT Lab, Hardware Prototyping, Arduino, ESP32, Raspberry Pi, Sensors Kerala, Maker Lab",
        author: "Inovus Labs IEDC",
        ogType: "website"
      }
    },
    {
      path: '/projects',
      name: 'project',
      component: ProjectView,
      meta: {
        title: 'Student Projects & Inventions',
        description: "Showcase of innovative hardware prototypes, web applications, and software tools built by student makers at Inovus Labs.",
        keywords: "Inovus Projects, Student Innovations, Hardware MVPs, Open Source Projects, College Tech Inventions",
        author: "Inovus Labs IEDC",
        ogType: "website"
      }
    },
    {
      path: '/reccuring-events',
      name: 'reccuring-events',
      component: ReccuringEventsView,
      meta: {
        title: 'Recurring Events',
        description: "Regular weekly coding meetups, hardware tinkering circles, and community building sessions conducted by Inovus Labs.",
        keywords: "Recurring Events, Weekly Coding Sprints, Maker Circles, Regular Workshops, Inovus Community",
        author: "Inovus Labs IEDC",
        ogType: "website"
      }
    },
    {
      path: '/outreach',
      name: 'outreach',
      component: OutreachView,
      meta: {
        title: 'Outreach Programs',
        description: "Social impact programs, digital literacy initiatives, and school workshops conducted by Inovus Labs to democratize technology education.",
        keywords: "Outreach Programs, Social Innovation, School Tech Workshops, Community Service Kerala, Inovus Outreach",
        author: "Inovus Labs IEDC",
        ogType: "website"
      }
    },
    {
      path: '/blog',
      name: 'blog',
      component: BlogView,
      meta: {
        title: 'Blogs & Insights',
        description: "Read technical articles, engineering guides, thought leadership, and maker reflections written by students and mentors at Inovus Labs.",
        keywords: "Inovus Labs Blog, Tech Articles, Maker Guides, Student Perspectives, Engineering Insights",
        author: "Inovus Labs Community",
        ogType: "article"
      }
    },
    {
      path: '/inora',
      name: 'inora',
      component: PodcastView,
      meta: {
        title: 'Inora Podcast',
        description: "Listen to Inora, the flagship podcast by Inovus Labs exploring dialogues with passionate technologists, founders, and innovators.",
        keywords: "Inora Podcast, Inovus Podcast, Tech Dialogues, Student Founders, Entrepreneurship Audio",
        author: "Inora Podcast Team",
        ogType: "website"
      }
    },

    // Products & Ventures page
    {
      path: '/products',
      name: 'products',
      component: ProductsView,
      meta: {
        title: 'Products & Platforms',
        description: "Discover live products and SaaS platforms built at Inovus Labs IEDC: Nodrix IoT Cloud, SyncBatch bulk contact sync, DocGen AI report generator, InoMail, and Inovus Certificate.",
        keywords: "Inovus Labs Products, Nodrix, SyncBatch, DocGen, InoMail, Inovus Certificate, IoT Cloud, Bulk Contact Sync, AI Report Generator",
        author: "Inovus Labs IEDC",
        ogType: "website"
      }
    },

    {
      path: '/now',
      name: 'now',
      component: NowView,
      meta: {
        title: 'Now',
        description: "What Inovus Labs is actively working on right now — current cohorts, upcoming hackathons, ongoing prototyping sprints, and focus areas.",
        keywords: "Inovus Now, Active Sprints, What We Are Doing Now, Current Initiatives",
        ogType: "website"
      }
    },

    // Contact page
    {
      path: '/contact',
      name: 'contact',
      component: ContactView,
      meta: {
        title: 'Contact Us',
        description: "Get in touch with Inovus Labs IEDC at Kristu Jyoti College of Management & Technology, Changanassery, Kerala. Email: info@inovuslabs.org | Tel: +91 94000 57152.",
        keywords: "Contact Inovus Labs, Address, Phone, Email, Kristu Jyoti College Changanassery Kerala",
        ogType: "website"
      }
    },

    // Resources page
    {
      path: '/resources',
      name: 'resources',
      component: ResourcesView,
      meta: {
        title: 'Resources & Inventory',
        description: "Curated learning roadmaps, developer documentation, hardware component stock lists, and toolkits for student creators.",
        keywords: "Inovus Resources, Hardware Stock, Microcontroller Inventory, Maker Toolkits, Learning Guides",
        ogType: "website"
      }
    },

    // Guidelines page
    {
      path: '/iedc-guidelines',
      name: 'iedc-guidelines',
      component: GuidelinesView,
      meta: {
        title: 'IEDC Guidelines & Policies',
        description: "Official guidelines, funding norms, student eligibility criteria, and operational policies for Inovus Labs IEDC.",
        keywords: "IEDC Guidelines, Kerala Startup Mission Policies, Student Startup Norms, Innovation Rules",
        ogType: "website"
      }
    },

    {
      path: '/:pathMatch(.*)*',
      name: '404',
      component: NotFoundView,
      meta: {
        title: '404 - Page Not Found',
        description: "The page you are looking for does not exist. Return to the Inovus Labs IEDC homepage.",
        ogType: "website"
      }
    },
  ]
})


// Synchronize document title, canonical link, OpenGraph, Twitter, and meta tags dynamically
router.afterEach((to) => {
  const pageTitle = to.meta && to.meta.title
    ? `${to.meta.title} - Inovus Labs IEDC`
    : "Inovus Labs IEDC - Sparking Tomorrow's Innovations"
  document.title = pageTitle

  const description = to.meta && to.meta.description
    ? to.meta.description
    : "Inovus Labs IEDC is the innovation and maker hub at Kristu Jyoti College of Management & Technology (KJCMT), Changanassery, Kerala."

  let descMeta = document.querySelector('meta[name="description"]')
  if (!descMeta) {
    descMeta = document.createElement('meta')
    descMeta.setAttribute('name', 'description')
    document.head.appendChild(descMeta)
  }
  descMeta.setAttribute('content', description)

  if (to.meta && to.meta.keywords) {
    let kwMeta = document.querySelector('meta[name="keywords"]')
    if (!kwMeta) {
      kwMeta = document.createElement('meta')
      kwMeta.setAttribute('name', 'keywords')
      document.head.appendChild(kwMeta)
    }
    kwMeta.setAttribute('content', to.meta.keywords)
  }

  const canonicalUrl = `https://inovuslabs.org${to.path === '/' ? '' : to.path}`
  let canonical = document.querySelector('link[rel="canonical"]')
  if (!canonical) {
    canonical = document.createElement('link')
    canonical.setAttribute('rel', 'canonical')
    document.head.appendChild(canonical)
  }
  canonical.setAttribute('href', canonicalUrl)

  const updateMeta = (attr, key, content) => {
    let el = document.querySelector(`meta[${attr}="${key}"]`)
    if (!el) {
      el = document.createElement('meta')
      el.setAttribute(attr, key)
      document.head.appendChild(el)
    }
    el.setAttribute('content', content)
  }

  updateMeta('property', 'og:title', pageTitle)
  updateMeta('property', 'og:description', description)
  updateMeta('property', 'og:url', canonicalUrl)
  updateMeta('property', 'og:type', (to.meta && to.meta.ogType) || 'website')

  const ogImage = (to.meta && to.meta.image) || 'https://inovuslabs.org/og-image.png'
  const ogImageAlt = (to.meta && to.meta.imageAlt) || `${pageTitle} - Inovus Labs IEDC`
  updateMeta('property', 'og:image', ogImage)
  updateMeta('property', 'og:image:secure_url', ogImage)
  updateMeta('property', 'og:image:alt', ogImageAlt)
  updateMeta('property', 'og:image:width', '1200')
  updateMeta('property', 'og:image:height', '630')

  updateMeta('name', 'twitter:title', pageTitle)
  updateMeta('name', 'twitter:description', description)
  updateMeta('name', 'twitter:image', ogImage)
  updateMeta('name', 'twitter:image:alt', ogImageAlt)
  updateMeta('name', 'twitter:site', '@inovuslabs')
  updateMeta('name', 'twitter:creator', (to.meta && to.meta.creator) || '@inovuslabs')

  // Authors & Publishing Metadata
  const authorName = (to.meta && to.meta.author) || 'Inovus Labs IEDC'
  updateMeta('name', 'author', authorName)
  if (to.meta && to.meta.ogType === 'article') {
    updateMeta('property', 'article:author', authorName)
    updateMeta('property', 'article:publisher', 'https://inovuslabs.org/#organization')
  }

  // Dynamic Route-specific Schema.org JSON-LD (AEO & SEO)
  const breadcrumbItems = [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://inovuslabs.org/"
    }
  ]
  if (to.path !== '/' && to.path !== '/home') {
    breadcrumbItems.push({
      "@type": "ListItem",
      "position": 2,
      "name": (to.meta && to.meta.title) || to.name || "Page",
      "item": canonicalUrl
    })
  }

  const routeGraph = [
    {
      "@type": "BreadcrumbList",
      "@id": `${canonicalUrl}#breadcrumb`,
      "itemListElement": breadcrumbItems
    }
  ]

  // Add specialized entity schema per route
  if (to.path === '/about') {
    routeGraph.push({
      "@type": "AboutPage",
      "@id": `${canonicalUrl}#about`,
      "url": canonicalUrl,
      "name": pageTitle,
      "description": description,
      "mainEntity": { "@id": "https://inovuslabs.org/#organization" }
    })
  } else if (to.path === '/contact') {
    routeGraph.push({
      "@type": "ContactPage",
      "@id": `${canonicalUrl}#contact`,
      "url": canonicalUrl,
      "name": pageTitle,
      "description": description,
      "mainEntity": {
        "@type": "ContactPoint",
        "contactType": "General Inquiries & Admissions",
        "email": "info@inovuslabs.org",
        "telephone": "+919400057152",
        "availableLanguage": ["English", "Malayalam"]
      }
    })
  } else if (to.path === '/events') {
    routeGraph.push({
      "@type": "CollectionPage",
      "@id": `${canonicalUrl}#events`,
      "url": canonicalUrl,
      "name": pageTitle,
      "description": description,
      "about": {
        "@type": "Thing",
        "name": "Hackathons, Tech Bootcamps, Maker Sprints and Innovation Workshops"
      }
    })
  } else if (to.path === '/nanodegree') {
    routeGraph.push({
      "@type": "EducationalOccupationalProgram",
      "@id": `${canonicalUrl}#program`,
      "name": "Inovus Labs Nano Degree",
      "description": description,
      "provider": { "@id": "https://inovuslabs.org/#organization" },
      "educationalProgramMode": "Blended",
      "timeToComplete": "P3M"
    })
  } else if (to.path === '/iot-lab') {
    routeGraph.push({
      "@type": "Place",
      "@id": `${canonicalUrl}#lab`,
      "name": "Inovus Labs Mini IoT Lab",
      "description": description,
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Kristu Jyoti College of Management & Technology, Chethipuzha",
        "addressLocality": "Changanassery",
        "addressRegion": "Kerala",
        "postalCode": "686104",
        "addressCountry": "IN"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 9.4533,
        "longitude": 76.5415
      }
    })
  } else if (to.path === '/inora') {
    routeGraph.push({
      "@type": "PodcastSeries",
      "@id": `${canonicalUrl}#podcast`,
      "name": "Inora Podcast",
      "description": description,
      "url": canonicalUrl,
      "author": { "@id": "https://inovuslabs.org/#organization" },
      "inLanguage": "en"
    })
  } else if (to.path === '/blog') {
    routeGraph.push({
      "@type": "Blog",
      "@id": `${canonicalUrl}#blog`,
      "name": "Inovus Labs Technical Blog",
      "description": description,
      "url": canonicalUrl,
      "publisher": { "@id": "https://inovuslabs.org/#organization" }
    })
  } else if (to.path === '/team' || to.path === '/teams') {
    routeGraph.push({
      "@type": "AboutPage",
      "@id": `${canonicalUrl}#team`,
      "url": canonicalUrl,
      "name": pageTitle,
      "description": description,
      "mainEntity": {
        "@type": "ItemList",
        "name": "Inovus Labs Executive Leadership & Technical Leads"
      }
    })
  } else if (to.path === '/products') {
    routeGraph.push({
      "@type": "CollectionPage",
      "@id": `${canonicalUrl}#products`,
      "url": canonicalUrl,
      "name": pageTitle,
      "description": description,
      "about": {
        "@type": "ItemList",
        "name": "Production Platforms and SaaS Tools Built at Inovus Labs",
        "itemListElement": [
          {
            "@type": "SoftwareApplication",
            "name": "Nodrix",
            "url": "https://nodrix.live",
            "applicationCategory": "IoT Platform",
            "operatingSystem": "Cloudflare Edge"
          },
          {
            "@type": "SoftwareApplication",
            "name": "SyncBatch",
            "url": "https://syncbatch.inovuslabs.org",
            "applicationCategory": "ProductivityApplication",
            "operatingSystem": "Web / Mobile"
          },
          {
            "@type": "SoftwareApplication",
            "name": "DocGen",
            "url": "https://docgen.inovuslabs.org",
            "applicationCategory": "BusinessApplication",
            "operatingSystem": "Web"
          }
        ]
      }
    })
  }

  let routeScript = document.getElementById('route-schema')
  if (!routeScript) {
    routeScript = document.createElement('script')
    routeScript.id = 'route-schema'
    routeScript.type = 'application/ld+json'
    document.head.appendChild(routeScript)
  }
  routeScript.textContent = JSON.stringify({
    "@context": "https://schema.org",
    "@graph": routeGraph
  })
})


export default router
