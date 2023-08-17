
<template>
  
  <Navbar />


  <div class="bg-white border-gray-200 dark:border-gray-600 dark:bg-gray-900">
    <div class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">

      <div class="grid grid-cols-1 gap-4 sm:grid-cols-4">

        <template v-for="n in 12">
          <ProjectCard />
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
  
    export default {
      name: 'ProjectView',
      components: {
        Navbar,
        ProjectCard,
        Footer
      }
    }
</script>