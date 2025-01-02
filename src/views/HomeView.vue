<template>
  <PublicLayout>
    <section>
      <div class="flex flex-col lg:flex-row w-full mx-auto max-w-screen-xl p-4 items-center justify-center lg:py-14">
        <div class="mx-auto max-w-screen-xl text-left w-full lg:w-2/3 py-4 lg:py-20">
          <h1 class="mb-4 text-4xl font-semibold text-primary md:text-5xl lg:text-6xl">Sparking Tomorrow's Innovations.</h1>
          <p class="mb-8 text-lg font-light text-secondary lg:text-xl">Welcome all to the inovus community, a bunch of 21st century human beings. We provide the walls and you're the artist. Come join us to be a part of this journey of relevation.</p>
          <div class="flex flex-col space-y-4 sm:flex-row sm:justify-left sm:space-y-0 sm:space-x-4">
            <a href="#latest" class="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded bg-primary hover:bg-secondary">
             Get Latest events
              <svg class="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
              </svg>
            </a>
            <a href="#" class="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-secondary rounded border border-secondary hover:bg-secondary hover:text-white">
              Learn more
            </a>
          </div>
        </div>
        <div class="w-full lg:w-1/3 py-4 lg:py-20">
          <img class="w-full h-full" src="https://storage.googleapis.com/inovuslabs-cdn.appspot.com/assets/illustrations/innovation-animate.svg" alt="Gallery" />
        </div>
      </div>
    </section>

    <About />
    <div id="latest">
    <ActiveEvents />
  </div>
    <Partners />

    <Features />

    <HomeTeam />

    <StatsCounter :stats="inovusStats" />

    <section class="my-8 bg-white dark:bg-gray-900 py-10 px-4">
      <div class="mx-auto max-w-screen-xl text-left w-full py-4">
        <h1 class="mb-4 text-2xl font-semibold leading-none tracking-tight md:text-3xl lg:text-4xl dark:text-white">Unveiling the Seeds of Innovation!</h1>
        <p class="mb-6 text-lg font-light text-secondary lg:text-xl dark:text-gray-400">Explore the business ideas and non-profit initiatives nurtured in the fertile grounds of Inovus Labs IEDC. From inception to fruition, witness the evolution of groundbreaking concepts and entrepreneurial ventures that redefine the landscape.</p>
      </div>

      <section class="mx-auto max-w-screen-2xl w-full py-4 lg:pt-10">
        <swiper :modules="modules" :slides-per-view="isMobile ? 1 : 2" :space-between="30" :speed="1000" :loop="true" :autoplay="{
            delay: 3000,
            disableOnInteraction: true,
          }" @swiper="onSwiper" @slideChange="onSlideChange">
          <template v-for="startup in startUps" :key="startup.id">
            <swiper-slide>
              <div class="bg-white border border-gray-200 rounded-lg dark:bg-gray-800 dark:border-gray-700 w-full" :class="isMobile ? '' : 'fit-content mx-auto flex flex-row justify-between'">
                <div class="relative overflow-hidden border-gray-200 dark:border-gray-800 p-4 m-auto" :class="isMobile ? 'w-full my-2' : 'w-1/4'">
                  <div class="relative h-40 overflow-hidden transform transition duration-500 hover:scale-105">
                    <img class="w-full h-full object-contain" :src="startup.image" :alt="startup.name" />
                  </div>
                </div>

                <div class="p-5 flex flex-col m-auto" :class="isMobile ? 'border-t w-full' : 'border-l w-3/4'">
                  <h5 class="mb-2 text-xl font-semibold text-gray-900 dark:text-white">{{ startup.name }}</h5>
                  <div class="flex flex-col gap-2">
                    <p id="project_description" class="font-light text- dark:secondary text-gray-400">{{ startup.description }}</p>
                  </div>
                </div>
              </div>
            </swiper-slide>
          </template>
        </swiper>
      </section>
    </section>

    <div class="border-b border-gray-300 dark:border-gray-800">
      <Testimonial />
    </div>
  </PublicLayout>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/scss';
import 'swiper/scss/autoplay';
import { Autoplay } from 'swiper/modules';

import PublicLayout from "@/layouts/PublicLayout.vue";

import ActiveEvents from "@/components/Home/ActiveEvents.vue";
import Testimonial from "@/components/Home/Testimonial.vue";
import Features from "@/components/Home/Features.vue";
import Partners from "@/components/Home/Partners.vue";
import About from "@/components/Home/About.vue";
import StatsCounter from "@/components/reusable/StatsCounter.vue";
import HomeTeam from "@/components/Home/HomeTeam.vue";

export default {
  name: 'HomeView',
  components: {
    Swiper,
    SwiperSlide,

    PublicLayout,

    Testimonial,
    Features,
    Partners,
    About,
    StatsCounter,
    HomeTeam,
    ActiveEvents,
  },

  data() {
  return {
    isMobile: false,
    inovusStats: [
      {
        title: "Years",
        value: 6,
        mode: "approximate"
      },
      {
        title: "Initiatives",
        value: 20,
        mode: "approximate"
      },
      {
        title: "Projects Completed",
        value: 100,
        mode: "approximate"
      },
      {
        title: "Members",
        value: 250,
        mode: "approximate"
      },
      {
        title: "Events Conducted",
        value: 200,
        mode: "approximate"
      },
      {
        title: "Students Impacted",
        value: 2000,
        mode: "approximate"
      }
    ],

    startUps: [
      {
        id: 1,
        name: "Entinker Technology Solutions Pvt. Ltd.",
        incubators: ["Jithin Shah M A", "Joseph Sabu"],
        image: "https://storage.googleapis.com/inovuslabs-cdn.appspot.com/assets/logos/entinker.png",
        description: "One pistop solution for all your technological barriers.   Entinker",
        link: "https://inovuslabs.com/"
      },
      {
        id: 2,
        name: "Simple Print",
        incubators: ["Freddy Jetty Johnson"],
        image: "https://storage.googleapis.com/inovuslabs-cdn.appspot.com/assets/logos/simple_print_black.png",
        description: "Simpleprint is an online print service system that will serve to be a huge releif to the inefficient print media services available at present. It is an aggregator service and connects customers with Print Service Providers, thereby acting as an interface between them.",
        link: "https://inovuslabs.com/"
      },
      {
        id: 3,
        name: "Eduknow Techno Solutions",
        incubators: ["Jithin Shah M A"],
        image: "https://storage.googleapis.com/inovuslabs-cdn.appspot.com/assets/logos/eduknow.png",
        description: "Eduknow is an engagement and marketing tool for educational institutions. It helps in updating the parents with relevant information of activities related with their ward and educational institution.",
        link: "https://inovuslabs.com/"
      },
      {
        id: 4,
        name: "DevMorphix",
        incubators: ["Badusha Shaji", "Abhishek V Gopal", "Arjun A Acharry", ""],
        image: "https://storage.googleapis.com/inovuslabs-cdn.appspot.com/assets/logos/DevMorphix.png",
        description: "Welcome to the digital revolution! Elevate your business with our innovative web development, IoT solutions, automations, design, and captivating kiosk displays.",
        link: "https://devmorphix.com/"
      },
      {
        id: 5,
        name: "EduNext Community",
        incubators: ["Nikhil T Das"],
        image: "https://storage.googleapis.com/inovuslabs-cdn.appspot.com/assets/logos/EDUNEXT COMMUNITY LOGO.png",
        description: "Edunext is a non-profit initiative aimed to develop interpersonal skills in school students through workshops,bootcamps, fireside and analytical chats",
        link: "https://inovuslabs.com/"
      },
      {
        id: 6,
        name: "Herba Soap",
        incubators: ["Tom Thomas"],
        image: "https://storage.googleapis.com/inovuslabs-cdn.appspot.com/assets/logos/EDUNEXT COMMUNITY LOGO.png",
        description: "Hebra Soap is a self-driven startup dedicated to crafting high-quality handmade soaps.",
        link: "https://inovuslabs.com/"
      }
    ],

  }
},
  mounted() {
    this.checkMobile();
    window.addEventListener('resize', this.checkMobile);
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.checkMobile);
  },

  setup() {
    return {
      modules: [Autoplay],
    };
  },

  methods: {
    onSwiper(swiper) {

    },
    onSlideChange() {

    },
    checkMobile() {
      if (window.innerWidth <= 768) {
        this.isMobile = true;
      } else {
        this.isMobile = false;
      }
    },
  }
}
</script>

