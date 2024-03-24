  <template>
    <div class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
      <div class="w-full flex items-center justify-center py-4 md:py-8 flex-wrap">
        <!-- Add your content here -->
      </div>
      <div class="grid grid-cols-1 gap-4 md:grid-cols-4">
        <template v-for="Activity in filteredProjects.slice(0, 4)" :key="Activity.id">
          <ActiveCard :data="Activity" :showReadMore="true" :isCompleted="isEventCompleted(Activity.date[0])" />
        </template>
      </div>
      <div class="md:hidden">
        <div class="carousel relative overflow-hidden">
          <div class="carousel-inner relative w-full overflow-hidden">
            <template v-for="(Activity, index) in filteredProjects.slice(0, 4)" :key="Activity.id">
              <div class="carousel-item absolute transition-transform duration-1000" :class="{'active': index === currentSlide, 'slide-left': index === currentSlide - 1 || (currentSlide === 0 && index === filteredProjects.slice(0, 4).length - 1), 'slide-right': index === currentSlide + 1 || (currentSlide === filteredProjects.slice(0, 4).length - 1 && index === 0)}">
                <ActiveCard :data="Activity" :showReadMore="true" :isCompleted="isEventCompleted(Activity.date[0])" />
              </div>
            </template>
          </div>
          <button class="carousel-control-prev absolute top-0 bottom-0 left-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev" @click="prevSlide">
            <span class="carousel-control-prev-icon inline-block bg-no-repeat bg-center" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next absolute top-0 bottom-0 right-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next" @click="nextSlide">
            <span class="carousel-control-next-icon inline-block bg-no-repeat bg-center" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </div>
  </template>

  <script>
  import ActiveCard from "@/components/ActiveCard.vue";
  import { getActivity } from "@/API/index.js";

  export default {
    name: 'ActiveEvents',
    components: {
      ActiveCard
    },
    data() {
      return {
        activities: [],
        currentSlide: 0
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
        this.activities.sort((a, b) => {
          const aDate = new Date(a.date[0]);
          const bDate = new Date(b.date[0]);
          return bDate - aDate;
        });
      },
      updateEvents() {
        return this.activities;
      },
      isEventCompleted(eventDate) {
        const currentDate = new Date();
        const eventDateObj = new Date(eventDate);
        return eventDateObj < currentDate;
      },
      prevSlide() {
        this.currentSlide = (this.currentSlide - 1 + this.filteredProjects.slice(0, 4).length) % this.filteredProjects.slice(0, 4).length;
      },
      nextSlide() {
        this.currentSlide = (this.currentSlide + 1) % this.filteredProjects.slice(0, 4).length;
      }
    }
  }
  </script>

  <style scoped>
  .carousel {
    @apply w-full h-[500px] relative overflow-hidden;
  }

  .carousel-inner {
    @apply h-full relative w-full overflow-hidden;
  }

  .carousel-item {
    @apply absolute w-full h-full left-0 opacity-100 transition-transform duration-1000;
  }

  .carousel-item.active {
    @apply translate-x-0;
  }

  .carousel-item.slide-left {
    @apply -translate-x-full;
  }

  .carousel-item.slide-right {
    @apply translate-x-full;
  }

  .carousel-control-prev,
  .carousel-control-next {
    @apply absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline;
  }

  .carousel-control-prev {
    @apply left-0;
  }

  .carousel-control-next {
    @apply right-0;
  }

  .carousel-control-prev-icon,
  .carousel-control-next-icon {
    @apply inline-block bg-no-repeat bg-center w-5 h-5;
  }

  .carousel-control-prev-icon {
    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23fff'%3e%3cpath d='M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z'/%3e%3c/svg%3e");
  }

  .carousel-control-next-icon {
    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23fff'%3e%3cpath d='M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z'/%3e%3c/svg%3e");
  }
  </style>