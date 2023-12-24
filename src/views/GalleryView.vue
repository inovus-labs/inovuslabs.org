
<template>
  <PublicLayout>

    

    <section class="bg-bgPrimary">
      <div class="flex flex-col lg:flex-row w-full mx-auto max-w-screen-xl p-4 items-center justify-center lg:py-14">

        <div class="w-full lg:w-1/3 py-4 lg:py-20">
          <img class="w-full h-full" src="../../public/assets/illustrations/gallery.svg" alt="Gallery" />
        </div>

        <div class="mx-auto max-w-screen-xl text-center w-full lg:w-2/3 py-4 lg:py-20">
          <h1 class="mb-4 text-4xl font-extrabold text-primary md:text-5xl lg:text-6xl">A Pictorial Chronicle of Innovation.
          </h1>
          <p class="mb-8 text-lg font-normal text-secondary lg:text-xl sm:px-16 lg:px-48">Witness the spirit of creativity,
            experimentation, and collaboration through our visual stories.</p>
          <div class="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
            <a href="#"
              class="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded bg-primary">
              Get started
              <svg class="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9" />
              </svg>
            </a>
            <a href="#"
              class="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-secondary rounded border border-secondary">
              Learn more
            </a>
          </div>
        </div>

      </div>
    </section>





    <section class="lg:p-10 p-4 mb-5 lg:my-10">


      <div class="mx-auto max-w-screen-xl text-center w-full py-4">
        <h1 class="mb-4 text-2xl font-extrabold leading-none tracking-tight text-gray-900 md:text-3xl lg:text-4xl dark:text-white">
          🎉 Welcome to our Gallery! 📸
        </h1>

        <p class="mb-6 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
          Celebrate with us as we reminisce about the incredible journey we've embarked on over the past year. Dive into a visual feast of significant moments that have shaped our story, from exciting milestones to heartwarming memories.
        </p>
      </div>

      <div class="mx-auto max-w-screen-2xl text-center w-full">
        <PhotoSwipe :images="images" v-if="proceed > 0" />
      </div>


    </section>

  

    
  </PublicLayout>
</template>


<script>
  import PhotoSwipe from "@/components/PhotoSwipe.vue";
  import PublicLayout from "@/layouts/PublicLayout.vue";

  import { getGalleryAssets } from "@/API/index.js";

  export default {
    name: 'GalleryView',
    components: {
      PublicLayout,
      PhotoSwipe
    },
    data() {
      return {
        proceed: false,
        images: [],
      };
    },
    methods: {
      // get the width and height of the image
      async getImageSize(image) {
        return new Promise((resolve, reject) => {
          const img = new Image();
          img.onload = () => {
            resolve({
              width: img.width,
              height: img.height,
            });
          };
          img.onerror = reject;
          img.src = image.largeURL;
        });
      },
    },

    async mounted() {

      this.images = await getGalleryAssets();

      const images = await Promise.all(
        this.images.map(async (image) => {
          const { width, height } = await this.getImageSize(image);
          return {
            ...image,
            width,
            height,
          };
        })
      );

      this.images = images;
      this.proceed = true;
    },

  };

</script>