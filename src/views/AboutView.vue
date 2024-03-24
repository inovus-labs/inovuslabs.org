
<template>
  <PublicLayout>


    
    <section class="bg-bgPrimary">
      <div class="flex flex-col lg:flex-row w-full mx-auto max-w-screen-xl p-4 items-center justify-center lg:py-14">


        <div class="mx-auto max-w-screen-xl text-left w-full lg:w-2/3 py-4 lg:py-20">
          <h1 class="mb-4 text-4xl font-semibold text-primary md:text-5xl lg:text-5xl">Our Story: Fueling Innovation at Inovus Labs.</h1>
          <p class="mb-8 text-lg font-light text-secondary lg:text-xl">Discover the genesis, purpose, and vision that fuels Inovus Labs IEDC's commitment to innovation and entrepreneurship.</p>
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
          <img class="w-full h-full" src="https://storage.googleapis.com/inovuslabs-cdn.appspot.com/assets/illustrations/about-us-page-animate.svg" alt="About" />
        </div>
      </div>
    </section>



    
    
    
    <section class="bg-white dark:bg-gray-900 pb-10 px-4">

      <div class="items-center px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:px-6">
        
        <div class="w-full" :class="{'hidden': !isMobile}">
          <img src="https://storage.googleapis.com/inovuslabs-cdn.appspot.com/assets/illustrations/Mission Impossible-bro.svg" alt="office content 1">
        </div>
        
        <div class="font-light text-gray-500 sm:text-lg dark:text-gray-400">
          <h2 class="mb-4 text-4xl tracking-tight font-semibold text-gray-900 dark:text-white">Mission</h2>
          <p class="mb-4 text-justify font-light">To create an innovation culture among Innovators by introducing them the State-of-the-art technologies and positioning the Institution as a Learning and Innovation Platform by delivering technically competent and skilled Entrepreneurs.</p>
          <!-- <p class="mb-4 text-justify">Inovus Labs IEDC is dedicated to inspiring, supporting, and propelling the next generation of innovators and entrepreneurs. Our mission is to provide a conducive environment where aspiring minds can explore, ideate, and execute groundbreaking solutions.</p>
          <p class="mb-4 text-justify">We aim to be the catalyst for a sustainable and thriving entrepreneurial community by offering comprehensive resources, mentorship, and a platform for the development of cutting-edge ideas.</p> -->
        </div>

        <div class="w-full" :class="{'hidden': isMobile}">
          <img src="https://storage.googleapis.com/inovuslabs-cdn.appspot.com/assets/illustrations/Mission Impossible-bro.svg" alt="office content 1">
        </div>

      </div>






      <div class="items-center px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:px-6">
        
        <div class="w-full" :class="{'pr-16': !isMobile, 'my-12': isMobile}">
          <img class="" src="https://storage.googleapis.com/inovuslabs-cdn.appspot.com/assets/illustrations/Creative writing-pana.svg" alt="office content 1">
        </div>
        
        <div class="font-light text-gray-500 sm:text-lg dark:text-gray-400">
          <h2 class="mb-4 text-4xl tracking-tight font-semibold font-bold text-gray-900 dark:text-white">Vision</h2>
          <p class="mb-4 text-justify font-light">To create IEDC as an Innovation Platform and to create future founders by promoting Innovation, Technology and Business Learning among student community.</p>
          <!-- <p class="mb-4 text-justify">Our vision at Inovus Labs IEDC is to be a global hub for innovation and entrepreneurship, contributing to the creation of a better world through pioneering solutions.</p>
          <p class="mb-4 text-justify">We aspire to be the go-to destination for individuals and teams seeking to bring about meaningful change by providing unparalleled support, fostering groundbreaking collaborations, and building a community that transcends geographical boundaries.</p> -->
        </div>

      </div>






      <div class="items-center px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:px-6 lg:pt-24 mb-12">
        
        <div class="w-full" :class="{'hidden': !isMobile, 'my-12': isMobile}">
          <img src="../../public/assets/illustrations/about/objective.svg" alt="office content 1">
        </div>
        
        <div class="font-light text-gray-500 sm:text-lg dark:text-gray-400">
          <h2 class="mb-4 text-4xl tracking-tight font-semibold text-gray-900 dark:text-white">Objective</h2>

          <p class="mb-4 text-justify font-light">To foster an entrepreneurial spirit and an innovative way of thinking in students. To augment self-sufficiency and self-reliance in students. To provide financial support to feasible innovative 
projects. To organize workshops and classes to promote technology-based innovation and 
entrepreneurship among the students.</p>
          <!-- <p class="mb-4 text-justify"><span class="text-primary font-medium">Empowerment:</span> Empower individuals with the skills, knowledge, and resources necessary to transform innovative ideas into successful ventures.</p>
          <p class="mb-4 text-justify"><span class="text-primary font-medium">Collaboration:</span> Foster a collaborative ecosystem by facilitating partnerships between industry experts, mentors, and aspiring entrepreneurs, promoting knowledge exchange and mutual growth.</p>
          <p class="mb-4 text-justify"><span class="text-primary font-medium">Resource Accessibility:</span> Provide comprehensive resources, including funding, workspace, technology, and mentorship, to eliminate barriers hindering the realization of innovative projects.</p>
          <p class="mb-4 text-justify"><span class="text-primary font-medium">Community Building:</span> Cultivate a vibrant and inclusive community of innovators, entrepreneurs, and mentors, fostering a culture of support, encouragement, and shared success.</p>
          <p class="mb-4 text-justify"><span class="text-primary font-medium">Global Impact:</span> Encourage the development of solutions with a global perspective, aiming to address societal challenges and contribute to the betterment of communities worldwide.</p>
          <p class="mb-4 text-justify"><span class="text-primary font-medium">Sustainability: </span>Promote environmentally and socially responsible innovation, encouraging the development of solutions that align with sustainable practices and contribute to a positive impact on the planet.</p>
          <p class="mb-4 text-justify"><span class="text-primary font-medium">Continuous Learning:</span> Facilitate a culture of continuous learning and adaptation, staying at the forefront of emerging trends and technologies to provide our community with the most relevant and valuable resources.</p> -->
        </div>

        <div class="w-full" :class="{'hidden': isMobile}">
          <img class="pl-16" src="https://storage.googleapis.com/inovuslabs-cdn.appspot.com/assets/illustrations/Shared goals-amico.svg" alt="office content 1">
        </div>

      </div>

    </section>
    


  </PublicLayout>
</template>


<script>
  import PublicLayout from "@/layouts/PublicLayout.vue";

  export default {
    name: 'AboutView',
    components: {
      PublicLayout,
    },
    data() {
      return {
        isMobile: false,
      }
    },
    methods: {
      checkMobile() {
        if (window.innerWidth <= 768) {
          this.isMobile = true;
        } else {
          this.isMobile = false;
        }
      }
    },
    mounted() {
      this.checkMobile();
      window.addEventListener('resize', this.checkMobile);
    },
    beforeDestroy() {
      window.removeEventListener('resize', this.checkMobile);
    }
  }
</script>