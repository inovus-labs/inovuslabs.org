
<template>
  <PublicLayout >

    

    <section class="bg-bgPrimary">
      <div class="flex flex-col lg:flex-row w-full mx-auto max-w-screen-xl p-4 items-center justify-center lg:py-14">

        <div class="w-full lg:w-1/3 py-4 lg:py-20">
          <img class="w-full h-full" src="../../public/assets/illustrations/bg.svg" alt="Gallery" />
        </div>
        <div class="mx-auto max-w-screen-xl text-center w-full lg:w-2/3 py-4 lg:py-20">
          <h1 class="mb-4 text-4xl font-extrabold text-primary md:text-5xl lg:text-6xl">Igniting Innovation, Transforming Tomorrow.</h1>
          <p class="mb-8 text-lg font-normal text-secondary lg:text-xl sm:px-16 lg:px-48">Join our vibrant community of creators, thinkers, and innovators, and be part of something extraordinary.</p>
          <div class="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
              <a href="#" class="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded bg-primary">
                  Get started
                  <svg class="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                  </svg>
              </a>
              <a href="#" class="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-secondary rounded border border-secondary">
                  Learn more
              </a>  
          </div>
        </div>
      
      </div>
    </section>

    <About />

    <ActiveEvents />
    
    <Partners />  
    
    
    
    <Features />



    <StatsCounter :stats="inovusStats" />



    <section class="my-8 bg-white dark:bg-gray-900 py-10 px-4">
      
      <div class="mx-auto max-w-screen-xl text-center w-full py-4">
        <h1 class="mb-4 text-2xl font-extrabold leading-none tracking-tight text-gray-900 md:text-3xl lg:text-4xl dark:text-white">🌱 Unveiling the Seeds of Innovation! ✨</h1>
        <p class="mb-6 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">💼 Explore the business ideas and non-profit initiatives nurtured in the fertile grounds of Inovus Labs IEDC. From inception to fruition, witness the evolution of groundbreaking concepts and entrepreneurial ventures that redefine the landscape. 💡</p>
      </div>


      <section class="mx-auto max-w-screen-2xl w-full py-4 lg:pt-10">
          
        <swiper
          :modules="modules"
          :slides-per-view="isMobile ? 1 : 2"
          :space-between="30"
          :speed="1000"
          :loop="true"
          :autoplay="{
            delay: 3000,
            disableOnInteraction: true,
          }"
          @swiper="onSwiper"
          @slideChange="onSlideChange"
        >
        
          <template
            v-for="startup in startUps"
            :key="startup.id"
          >
              
            <swiper-slide>

              <div class="bg-white border border-gray-200 rounded-lg dark:bg-gray-800 dark:border-gray-700 w-full" :class="isMobile ? '' : 'fit-content mx-auto flex flex-row justify-between'">
          
                <div class="relative overflow-hidden border-gray-200 dark:border-gray-800 p-4 m-auto" :class="isMobile ? 'w-full my-2' : 'w-1/4'">
                  <div class="relative h-40 overflow-hidden transform transition duration-500 hover:scale-105">
                    <img class="w-full h-full object-contain" :src="startup.image" :alt="startup.name" />
                  </div>
                </div>
                
                <div class="p-5 flex flex-col m-auto" :class="isMobile ? 'border-t w-full' : 'border-l w-3/4'">
                  <h5 class="mb-2 text-xl font-bold text-gray-900 dark:text-white">{{ startup.name }}</h5>
                  <div class="flex flex-col gap-2">
                    <p id="project_description" class="font-normal text-gray-700 dark:text-gray-400">{{ startup.description }}</p>
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



    <!-- <section class="bg-white dark:bg-gray-900">
      <div class="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
          
        <img class="w-full dark:hidden" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/cta/cta-dashboard-mockup.svg" alt="dashboard image">
        <img class="w-full hidden dark:block" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/cta/cta-dashboard-mockup-dark.svg" alt="dashboard image">

        <div class="mt-4 md:mt-0">
          <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Let's create more tools and ideas that brings us together.</h2>
          <p class="mb-6 font-light text-gray-500 md:text-lg dark:text-gray-400">Flowbite helps you connect with friends and communities of people who share your interests. Connecting with your friends and family as well as discovering new ones is easy with features like Groups.</p>
          <a href="#" class="inline-flex items-center text-white bg-primary hover:bg-primary focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-primary-900">
              Get started
              <svg class="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
          </a>
        </div>
      </div>
    </section> -->

    
    
  </PublicLayout>
</template>


<script>
  
  import { Swiper, SwiperSlide } from 'swiper/vue';
  import 'swiper/scss';
  import 'swiper/scss/autoplay';
  import { Autoplay } from 'swiper/modules';

  import PublicLayout from "@/layouts/PublicLayout.vue";

  import Testimonial from "@/components/Home/Testimonial.vue";
  import Features from "@/components/Home/Features.vue";
  import Partners from "@/components/Home/Partners.vue";
  import About from "@/components/Home/About.vue";
  import StatsCounter from "@/components/reusable/StatsCounter.vue";
  import ActiveEvents from "@/components/Home/ActiveEvents.vue";

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
      ActiveEvents
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
            image: "/assets/logos/entinker.png",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, molestie ipsum et, consequat nibh. Etiam non elit dui. Nullam vel eros sit amet arcu vestibulum accumsan in in leo.",
            link: "https://inovuslabs.com/"
          },
          {
            id: 2,
            name: "Simple Print",
            incubators: ["Freddy Jetty Johnson"],
            image: "/assets/logos/simple_print_black.png",
            description: "Simpleprint is an online print service system that will serve to be a huge releif to the inefficient print media services available at present. It is an aggregator service and connects customers with Print Service Providers, thereby acting as an interface between them.",
            link: "https://inovuslabs.com/"
          },
          {
            id: 3,
            name: "Eduknow Techno Solutions",
            incubators: ["Jithin Shah M A"],
            image: "/assets/logos/eduknow.png",
            description: "Eduknow is an engagement and marketing tool for educational institutions. It helps in updating the parents with relevant information of activities related with their ward and educational institution.",
            link: "https://inovuslabs.com/"
          },
          {
            id: 4,
            name: "DevMorphix",
            incubators: ["Badusha Shaji", "Abhishek V Gopal", "Arjun A Acharry", ""],
            image: "/assets/no-image.png",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, molestie ipsum et, consequat nibh. Etiam non elit dui. Nullam vel eros sit amet arcu vestibulum accumsan in in leo.",
            link: "https://inovuslabs.com/"
          },
          {
            id: 5,
            name: "EduNext Community",
            incubators: ["Nikhil T Das"],
            image: "/assets/no-image.png",
            description: "Edunext is a non-profit initiative aimed to develop interpersonal skills in school students through workshops,bootcamps, fireside and analytical chats",
            link: "https://inovuslabs.com/"
          },
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