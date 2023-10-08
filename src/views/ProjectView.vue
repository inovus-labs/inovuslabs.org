
<template>
  
  <Navbar />




  

  
  <section class="bg-center bg-no-repeat bg-[url('https://flowbite.s3.amazonaws.com/docs/jumbotron/conference.jpg')] bg-gray-700 bg-blend-multiply">
    <div class="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56">
        <h1 class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">Innovate. Inspire. Illuminate</h1>
        <p class="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48">Embark on a journey through our diverse portfolio of IoT, Hardware, and Software ventures, pioneering solutions for the Digital Age.</p>
        <div class="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
            <a href="#" class="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
                Get started
                <svg class="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                </svg>
            </a>
            <a href="#" class="inline-flex justify-center hover:text-gray-900 items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg border border-white hover:bg-gray-100 focus:ring-4 focus:ring-gray-400">
                Learn more
            </a>  
        </div>
    </div>
  </section>






  <div class="bg-white border-gray-200 dark:border-gray-600 dark:bg-gray-900">
    <div class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">

      <div class="grid grid-cols-1 gap-4 sm:grid-cols-4">


        <!-- loop using projects array -->
        <template v-for="project in projects" :key="project.id">
          <ProjectCard
            :data="project"
          />
        </template>

      </div>

    </div>
  </div>


  <Footer />
  
</template>
  
  
<script>
    import Navbar from "@/components/reusable/Navbar.vue";
    import ProjectCard from "@/components/ProjectCard.vue";
    import Footer from "@/components/reusable/Footer.vue";

    import { getProjects } from "../API";
  
    export default {
      name: 'ProjectView',
      components: {
        Navbar,
        ProjectCard,
        Footer
      },

      data() {
        return {
          projects: []
        }
      },

      async mounted() {
        this.projects = await getProjects();
      }

    }
</script>