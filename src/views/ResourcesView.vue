
<template>

    <Navbar />

    <section class="bg-bgPrimary">
        <div class="flex flex-col lg:flex-row w-full mx-auto max-w-screen-xl p-4 items-center justify-center lg:py-14">

        <div class="w-full lg:w-1/3 py-4 lg:py-20">
            <img class="w-full h-full" src="../../public/assets/illustrations/resources.svg" />
        </div>

        <div class="mx-auto max-w-screen-xl text-center w-full lg:w-2/3 py-4 lg:py-20">
            <h1 class="mb-4 text-4xl font-extrabold text-primary md:text-5xl lg:text-6xl">
                Knowledge Nexus: Learning Resources Await You!
            </h1>
            <p class="mb-8 text-lg font-normal text-secondary lg:text-xl sm:px-16 lg:px-46">
                Your Gateway to Varied Knowledge - Dive into Curated Learning Resources Spanning Different Tech Stacks for a Holistic Learning Experience.
            </p>
            <div class="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
                <a href="#masonary-container" class="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded bg-primary">
                    Start learning now
                    <svg class="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                    </svg>
                </a>
            </div>
        </div>

        </div>
    </section>




    <section class="lg:p-10 p-4 my-10">

        <div class="mx-auto max-w-screen-xl text-center w-full p-4 lg:mb-4">
            <h1 class="mb-4 text-2xl font-extrabold leading-none tracking-tight text-gray-900 md:text-3xl lg:text-4xl dark:text-white">
                💻 Unlock a treasure trove of knowledge! 📚
            </h1>

            <p class="mb-6 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
                🚀 Dive into the Learning Resources section, where we share a curated collection of educational gems across different stacks. Elevate your skills across a spectrum of disciplines with our handpicked resources. ✨
            </p>
        </div>


        <div class="mx-auto max-w-screen-xl lg:px-6">
            <div id="masonary-container" class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">

                <template v-for="resource in resources">
                    <div :class="isMobile ? '' : 'masonary-item'">
                        <ResourceCard :data="resource" />
                    </div>
                </template>

            </div>
        </div>


    </section>


  <Footer />

</template>


<script>
    import Navbar from "@/components/Reusable/Navbar.vue";
    import Footer from "@/components/Reusable/Footer.vue";
    import ResourceCard from "@/components/ResourceCard.vue";
    
    import { getLearningResources } from "@/API/index.js";

    export default {
        name: 'ResourcesView',
        components: {
            Navbar,
            ResourceCard,
            Footer
        },

        data() {
            return {
                resources: [],
                isMobile: false
            }
        },

        methods: {
            checkMobile() {
                if (window.innerWidth <= 768) {
                    this.isMobile = true;
                } else {
                    this.isMobile = false;
                }
            },
            changeMasonaryLayout() {
                if (this.isMobile) {
                    document.getElementById('masonary-container').removeAttribute('data-masonry');
                } else {
                    document.getElementById('masonary-container').setAttribute('data-masonry', '{ "itemSelector": ".masonary-item" }');
                }
            }
        },

        async mounted() {
            this.checkMobile();
            this.changeMasonaryLayout();
            
            window.addEventListener('resize', this.checkMobile);
            window.addEventListener('resize', this.changeMasonaryLayout);
            
            this.resources = await getLearningResources();
            this.resources.sort((a, b) => {
                return new Date(b.date) - new Date(a.date);
            });
        },

        beforeDestroy() {
            window.removeEventListener('resize', this.checkMobile);
            window.removeEventListener('resize', this.changeMasonaryLayout);
        },

    }
</script>


<style scoped>
    .masonary-item {
        margin: 10px;
    }
</style>