<template>
  <PublicLayout>
    <!-- Standard Hero Section with Illustration -->
    <section class="bg-bgPrimary">
      <div class="flex flex-col lg:flex-row w-full mx-auto max-w-screen-xl p-4 items-center justify-center lg:py-14">
        <div class="mx-auto max-w-screen-xl text-left w-full lg:w-2/3 py-4 lg:py-20">
          <h1 class="mb-4 text-4xl font-semibold text-primary md:text-5xl lg:text-6xl">
            Products & Ventures
          </h1>
          <p class="mb-8 text-lg font-light text-secondary lg:text-xl">
            Explore production-ready platforms, edge cloud backends, and AI utilities conceptualized, engineered, and incubated at Inovus Labs IEDC.
          </p>
          <div class="flex flex-col space-y-4 sm:flex-row sm:justify-left sm:space-y-0 sm:space-x-4">
            <a 
              href="#products-showcase" 
              class="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded bg-primary hover:bg-secondary transition-colors"
            >
              Explore Products
              <svg class="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
              </svg>
            </a>
            <router-link 
              to="/projects" 
              class="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-secondary rounded border border-secondary hover:bg-gray-50 transition-colors"
            >
              Student Projects
            </router-link>
          </div>
        </div>

        <div class="w-full lg:w-1/3 py-4 lg:py-20 flex justify-center">
          <img 
            class="w-full h-full max-h-80 object-contain" 
            src="/assets/illustrations/products-amico.svg" 
            alt="Inovus Labs Products and Software Platforms" 
          />
        </div>
      </div>
    </section>

    <!-- Main Showcase Section -->
    <section id="products-showcase" class="lg:p-10 p-4 mb-5 lg:my-10">
      <div class="mx-auto max-w-screen-xl text-left w-full py-4">
        <h1 class="mb-4 text-2xl font-semibold leading-none tracking-tight text-gray-900 md:text-3xl lg:text-4xl dark:text-white">
          Our Software & Cloud Ventures
        </h1>
        <p class="text-lg font-light text-gray-500 lg:text-xl dark:text-gray-400">
          From serverless edge IoT platforms to high-volume contact sync engines and AI reporting tools, discover the digital products crafted by our fellows.
        </p>
      </div>

      <div class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
        <!-- Tag Filter Pills -->
        <div class="w-full flex items-center justify-center py-4 md:py-8 flex-wrap">
          <template v-for="tag in tags" :key="tag">
            <button
              type="button"
              class="border border-primary rounded-full text-base font-medium px-5 py-2.5 text-center me-3 mb-3 transition-colors"
              :class="selectedTag === tag ? 'text-white bg-primary' : 'text-primary bg-white hover:bg-primary hover:text-white'"
              @click="selectTag(tag)"
            >
              {{ tag }}
            </button>
          </template>
        </div>

        <!-- Product Image Cards Grid -->
        <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 w-full">
          <template v-for="product in filteredProducts" :key="product.id">
            <ProductCard :data="product" />
          </template>
        </div>
      </div>
    </section>
  </PublicLayout>
</template>

<script>
import PublicLayout from "@/layouts/PublicLayout.vue";
import ProductCard from "@/components/ProductCard.vue";
import { getProducts } from "@/API/index.js";

export default {
  name: "ProductsView",
  components: {
    PublicLayout,
    ProductCard
  },
  data() {
    return {
      products: [],
      selectedTag: "All",
      tags: ["All", "Live Platforms", "Coming Soon", "IoT & Cloud", "AI & Productivity"]
    };
  },
  computed: {
    filteredProducts() {
      if (this.selectedTag === "All") {
        return this.products;
      }
      if (this.selectedTag === "Live Platforms") {
        return this.products.filter(p => p.status === "live");
      }
      if (this.selectedTag === "Coming Soon") {
        return this.products.filter(p => p.status === "coming_soon");
      }
      if (this.selectedTag === "IoT & Cloud") {
        return this.products.filter(p => p.category === "IoT & Cloud");
      }
      if (this.selectedTag === "AI & Productivity") {
        return this.products.filter(p => p.category.includes("AI") || p.category.includes("Productivity"));
      }
      return this.products;
    }
  },
  async mounted() {
    window.scrollTo(0, 0);
    this.products = await getProducts();
  },
  methods: {
    selectTag(tag) {
      this.selectedTag = tag;
    }
  }
};
</script>
