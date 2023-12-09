
<template>



  <Navbar />

  

  <section class="bg-bgPrimary">
    <div class="flex flex-col lg:flex-row w-full mx-auto max-w-screen-xl p-4 items-center justify-center lg:py-14">

      <div class="w-full lg:w-1/3 py-4 lg:py-20">
        <img class="w-full h-full" src="../../public/assets/illustrations/bg.svg" />
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


  
  <Partners />  
  
  
  
  <Features />



  <StatsCounter :stats="inovusStats" />



  <section class="bg-white dark:bg-gray-900 py-10 px-4">
    
    <div class="mx-auto max-w-screen-xl text-center w-full py-4 lg:pt-10">
      <h1 class="mb-4 text-2xl font-extrabold leading-none tracking-tight text-gray-900 md:text-3xl lg:text-4xl dark:text-white">We invest in the world’s potential</h1>
      <p class="mb-6 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">Here at Flowbite we focus on markets where technology, innovation, and capital can unlock long-term value and drive economic growth.</p>
    </div>


    <div class="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:px-6">
      <div class="font-light text-gray-500 sm:text-lg dark:text-gray-400">
          <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">We didn't reinvent the wheel</h2>
          <p class="mb-4">We are strategists, designers and developers. Innovators and problem solvers. Small enough to be simple and quick, but big enough to deliver the scope you want at the pace you need. Small enough to be simple and quick, but big enough to deliver the scope you want at the pace you need.</p>
          <p>We are strategists, designers and developers. Innovators and problem solvers. Small enough to be simple and quick.</p>
      </div>
      <div class="grid grid-cols-2 gap-4 mt-8">
          <img class="w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-2.png" alt="office content 1">
          <img class="mt-4 w-full lg:mt-10 rounded-lg" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-1.png" alt="office content 2">
      </div>
    </div>


    
  </section>



  <Testimonial />



  <section class="bg-white dark:bg-gray-900">
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
  </section>



  <Footer />



</template>


<script>
  import Navbar from "@/components/reusable/Navbar.vue";
  import Footer from "@/components/reusable/Footer.vue";

  import Testimonial from "@/components/Home/Testimonial.vue";
  import Features from "@/components/Home/Features.vue";
  import Partners from "@/components/Home/Partners.vue";
  import About from "@/components/Home/About.vue";
  import StatsCounter from "@/components/reusable/StatsCounter.vue";

  export default {
    name: 'HomeView',
    components: {
      Navbar,
      Footer,

      Testimonial,
      Features,
      Partners,
      About,
      StatsCounter
    },

    data() {
      return {
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
        ]
      }
    },
  }
</script>