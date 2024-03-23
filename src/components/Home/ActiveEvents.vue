<template>
    <div class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
      <div class="w-full flex items-center justify-center py-4 md:py-8 flex-wrap">
        <!-- Add your content here -->
      </div>
      <div class="grid grid-cols-1 gap-4 sm:grid-cols-4 md:grid-cols-4">

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
            <template v-for="Activity in filteredProjects" :key="Activity.id">

                <swiper-slide>
                    <ActiveCard :data="Activity" :showReadMore="true" :isCompleted="isEventCompleted(Activity.date[0])" />
                </swiper-slide>

            </template>
        </swiper>

      </div>
    </div>

   

  </template>
  
  <script>
    import { Swiper, SwiperSlide } from 'swiper/vue';
    import 'swiper/scss';
    import 'swiper/scss/autoplay';  
    import { Autoplay } from 'swiper/modules';
  
    import ActiveCard from "@/components/ActiveCard.vue";
    import { getActiveEvents } from "@/API/index.js";
  
  export default {
    name: 'ActiveView',
    components: {
      ActiveCard,
      Swiper,
      SwiperSlide
    },
    setup() {
        return {
            modules: [Autoplay],
        };
    },
    data() {
      return {
        isMobile: false,
        activities: [],
        tags: [],
        selectedTags: "All Events"
      }
    },
    async mounted() {
      await this.getActiveEvents();this.checkMobile();
            window.addEventListener('resize', this.checkMobile);
        },
        beforeDestroy() {
            window.removeEventListener('resize', this.checkMobile);
        },
    computed: {
      filteredProjects() {
        return this.updateEvents();
      }
    },
    methods: {
      async getActiveEvents() {
        let response = await getActiveEvents();
        this.activities = response.activities;
        this.tags = ["All Events", ...response.tags];
  
        this.activities.sort((a, b) => {
          return new Date(b.date[0]) - new Date(a.date[0]);
        });
      },
      checkMobile() {
                if (window.innerWidth <= 768) {
                    this.isMobile = true;
                } else {
                    this.isMobile = false;
                }
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
      },
  
      isEventCompleted(eventDate) {
        const currentDate = new Date();
        const eventDateObj = new Date(eventDate);
        return eventDateObj < currentDate;
      }
    }
  }
  </script>
  
  <style lang="scss" scoped>
  /* Add your custom styles here */
  .grid {
    @media (max-width: 767px) {
      grid-template-columns: 1fr;
    }
  }
  </style>
  