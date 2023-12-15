
<template>
  <PublicLayout>
    

    
      <section class="bg-bgPrimary">
        <div class="flex flex-col lg:flex-row w-full mx-auto max-w-screen-xl p-4 items-center justify-center lg:py-14">
    
          <div class="w-full lg:w-1/3 py-4 lg:py-20">
            <img class="w-full h-full" src="../../public/assets/illustrations/activity.svg" alt="">
          </div>

          <div class="mx-auto max-w-screen-xl text-center w-full lg:w-2/3 py-4 lg:py-20">
            <h1 class="mb-4 text-4xl font-extrabold text-primary md:text-5xl lg:text-6xl">Innovation Unleashed Series</h1>
            <p class="mb-8 text-lg font-normal text-secondary lg:text-xl sm:px-16 lg:px-48">Dive into the archive of brilliance as we showcase the innovative workshops, dynamic bootcamps, and transformative internships from our past events!</p>
            
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
    
    
    
    
    
    
      <section class="lg:p-10 p-4 mb-5 lg:my-10">
    
    
        <div class="mx-auto max-w-screen-xl text-center w-full py-4">
          <h1 class="mb-4 text-2xl font-extrabold leading-none tracking-tight text-gray-900 md:text-3xl lg:text-4xl dark:text-white">
            🚀 Welcome to our Showcase of Events! 🌟
          </h1>
    
          <p class="text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
              We are presting our world of events infront of you 
          </p>
        </div>
    
    
    
        <div class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
    
          <div class="w-full flex items-center justify-center py-4 md:py-8 flex-wrap">
    
            <template v-for="tag in tags" :key="tag">
              <button
                type="button"
                class="border border-blue-600 rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3"
                :class="selectedTags === tag ? 'text-white bg-blue-700' : 'text-blue-700 bg-white hover:bg-blue-700 hover:text-white'"
                @click="selectTag(tag)"
              >
                {{ tag }}
              </button>
            </template>
    
          </div>
    
          <div class="grid grid-cols-1 gap-4 sm:grid-cols-4">
    
            <template v-for="Activity in filteredProjects" :key="Activity.id">
              <ActivityCard
                :data="Activity"
                :showReadMore="true"
              />
            </template>
    
          </div>
    
          </div>
    
    
      </section>
    
    
      
  </PublicLayout>  
</template>
    
    
  <script>
      import ActivityCard from "@/components/ActivityCard.vue";
      import PublicLayout from "@/layouts/PublicLayout.vue";
  
      import { getActivity } from "@/API/index.js";
    
      export default {
        name: 'ActivityView',
        components: {
          PublicLayout,
          ActivityCard,
        },
  
        data() {
          return {
            activities: [],
            tags: [],
            selectedTags: "All Events"
          }
        },
  
        async mounted() {
          await this.getActivity();
        },
  
        computed: {
          filteredProjects() {
            return this.updateEvents();
          }
        },
  
        methods: {
  
          async getActivity() {
            let response = await getActivity();
            this.activities = response.activities;
            this.tags = ["All Events", ...response.tags];

            this.activities.sort((a, b) => {
              return new Date(b.date[0]) - new Date(a.date[0]);
            });
          },
  
          selectTag(tag) {
            if (tag === "All Events") {
              this.selectedTags = "All Events";
            } else {
  
              if (this.selectedTags === "All Events") {
                this.selectedTags = [];
              }
  
              if (this.selectedTags === tag) {
                this.selectedTags = "All Events";
              } else {
                this.selectedTags = tag;
              }
  
            }
          },
  
          updateEvents() {
            if (this.selectedTags === "All Events") {
              return this.activities;
            } else {
              return this.activities.filter(Activity => {
                return Activity.tags.some(tag => this.selectedTags.includes(tag));
              });
            }
          }

        }
  
      }
  </script>
  