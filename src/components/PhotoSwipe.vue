
<template>
  <a
    v-for="(image, key) in imagesData"
    :key="key"
    :href="image.largeURL"
    :data-pswp-width="image.width"
    :data-pswp-height="image.height"
    target="_blank"
    rel="noreferrer"
  >

    <div class="relative h-48 md:h-64 lg:h-80 xl:h-96 overflow-hidden rounded-lg shadow-md">
      <img :src="image.thumbnailURL || image.largeURL" :alt="image.thumbnailURL" class="w-full h-full object-cover rounded-lg shadow-md" />
      
      <div v-if="image.title || image.description" class="absolute inset-0 bg-black bg-opacity-50 rounded-lg shadow-md flex items-center justify-center opacity-0 hover:opacity-100 transition duration-300 ease-in-out">
        <div class="text-center">
          <h3 v-if="image.title" class="text-white text-lg font-semibold mb-2">{{ image.title }}</h3>
          <p v-if="image.description" class="text-gray-300 text-sm">{{ image.description }}</p>
        </div>
      </div>

    </div>

  </a>
</template>
  
<script>
  import PhotoSwipeLightbox from 'photoswipe/lightbox';
  import 'photoswipe/style.css';
  
  export default {
    name: 'PhotoSwipe',
    props: {
      images: {
        type: Array,
        required: true,
      },
      gallery: {
        type: String,
        required: true,
      },
    },
    setup(props) {
      return {
        imagesData: props.images,
      };
    },
    mounted() {
      if (!this.lightbox) {
        this.lightbox = new PhotoSwipeLightbox({

          gallery: `#${this.gallery}`,
          children: 'a',
          loop: true,
          wheelToZoom: true,
          closeOnVerticalDrag: true,
          
          pswpModule: () => import('photoswipe'),

        });
        this.lightbox.init();
      } else {
        this.lightbox.update();
      }
    },
    unmounted() {
      if (this.lightbox) {
        this.lightbox.destroy();
        this.lightbox = null;
      }
    },
    data() {
      return {
        lightbox: null,
      };
    },
    methods: {},
  };
</script>
  