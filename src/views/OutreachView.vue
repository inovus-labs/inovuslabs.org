
<template>
  <PublicLayout>  

    
    
    <section class="bg-bgPrimary">
      <div class="flex flex-col lg:flex-row w-full mx-auto max-w-screen-xl p-4 items-center justify-center lg:py-14">

        <div class="mx-auto max-w-screen-xl text-left w-full lg:w-2/3 py-4 lg:py-20">
          <h1 class="mb-4 text-4xl font-semibold text-primary md:text-5xl lg:text-6xl">Beyond the Campus: Outsourcing Adventures Await!</h1>
          <p class="mb-8 text-lg font-light text-secondary lg:text-xl">Step Outside, Dive In - Curated Programs Tailored for Experiential Learning Beyond College Walls.</p>
          <div class="flex flex-col space-y-4 sm:flex-row sm:justify-left sm:space-y-0 sm:space-x-4">
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
        
        <div class="w-full lg:w-1/3 py-4 lg:py-20">
          <img class="w-full h-full" src="https://storage.googleapis.com/inovuslabs-cdn.appspot.com/assets/illustrations/new-team-members-animate.svg" alt="Outreach" />
        </div>
      </div>
    </section>




    <!-- <section class="py-10 border-b border-gray-200 dark:border-gray-700">
      <div class="lg:p-10 p-4">
        <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
          <div class="text-gray-500 sm:text-lg dark:text-gray-400">
            <h2 class="mb-8 text-4xl tracking-tight font-bold text-gray-900 dark:text-white">Welcome to Mini IoT Lab: Where Innovation & Possibilities Unfold! ✨🚀</h2>
            <p class="text-justify mb-4 font-medium">Our <span class="text-primary">Mini IoT Lab</span> is a compact, hands-on learning environment designed to introduce individuals, students, and enthusiasts to the fascinating world of the Internet of Things (IoT). This portable lab provides an accessible and give experience for understanding, experimenting, and building IoT projects, making it an ideal resource for educational institutions, workshops, and DIY enthusiasts.</p>
            <p class="text-justify mb-4 font-medium"> The lab comes with a user-friendly programming environment, allowing users to write and upload code to control and monitor IoT devices. Whether you are a newbie or an experienced developer, the platform supports various programming languages, making it adaptable to different skill levels.</p>
            <p class="text-justify font-medium">Looking ahead, the Mini IoT Lab is poised to be a catalyst for innovation and creativity. We're planning to expand the lab's capabilities and features, including the addition of new devices, sensors and machinery.</p>
          </div>
        </div>
      </div>
    </section> -->






    <section class="lg:p-10 p-4 mb-5 lg:my-10">


      <div class="mx-auto max-w-screen-xl text-left w-full py-4">
        <h1 class="mb-4 text-2xl font-semibold leading-none tracking-tight text-gray-900 md:text-3xl lg:text-4xl dark:text-white">
           Beyond campus borders, embracing the community! 
        </h1>

        <p class="text-lg font-light text-gray-500 lg:text-xl dark:text-gray-400">
           Explore the Outreach Programs section to discover how we're making a positive impact beyond our walls. Dive into our efforts to foster growth, education, and innovation in the broader community. 
        </p>
      </div>



      <div class="flex flex-wrap justify-between mt-6 items-center mx-auto max-w-screen-xl">
        <div class="grid grid-cols-1 gap-4 sm:grid-cols-4">

          <template v-for="Outreach in outreachEvents">
            <OutreachCard
              :data="Outreach"
              :showReadMore="true"
            />
          </template>

        </div>
      </div>

    </section>


    
  </PublicLayout>
</template>
  
  
<script>
    import OutreachCard from "@/components/OutreachCard.vue";
    import PublicLayout from "@/layouts/PublicLayout.vue";

    import { getOutreachEvents } from "@/API/index.js";
  
    export default {
      name: 'ReccuringEventsView',
      components: {
        PublicLayout,
        OutreachCard,
      },

      data() {
        return {
          outreachEvents: [],
        }
      },

      async mounted() {
        this.outreachEvents = await getOutreachEvents();
        this.outreachEvents.reverse();
      },

    }
</script>
