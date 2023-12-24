
<template>
    <PublicLayout>

        

        <section class="bg-bgPrimary">
            <div class="flex flex-col lg:flex-row w-full mx-auto max-w-screen-xl p-4 items-center justify-center lg:py-14">

            <div class="w-full lg:w-1/3 py-4 lg:py-20">
                <img class="w-full h-full" src="../../public/assets/illustrations/iot-lab.svg" alt="IoT Lab" />
            </div>

            <div class="mx-auto max-w-screen-xl text-center w-full lg:w-2/3 py-4 lg:py-20">
                <h1 class="mb-4 text-4xl font-extrabold text-primary md:text-5xl lg:text-6xl">
                    Ignite the Future: Inovus Mini IoT Lab Showcase
                </h1>
                <p class="mb-8 text-lg font-normal text-secondary lg:text-xl sm:px-16 lg:px-46">
                    Small Space, Big Ideas – Immerse Yourself in the Future with Inovus Labs IEDC's Mini IoT Lab.
                </p>
                <div class="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
                    <a href="/" target="_blank"
                        class="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded bg-primary">
                        Explore now
                        <svg class="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                        </svg>
                    </a>
                </div>
            </div>

            </div>
        </section>


        
        <section class="py-10">
            <div class="lg:p-10 p-4">
                <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
                    <div class="text-gray-500 sm:text-lg dark:text-gray-400">
                        <h2 class="mb-8 text-4xl tracking-tight font-bold text-gray-900 dark:text-white">Welcome to Mini IoT Lab: Where Innovation & Possibilities Unfold! ✨🚀</h2>
                        <p class="text-justify mb-4 font-medium">Our <span class="text-primary">Mini IoT Lab</span> is a compact, hands-on learning environment designed to introduce individuals, students, and enthusiasts to the fascinating world of the Internet of Things (IoT). This portable lab provides an accessible and give experience for understanding, experimenting, and building IoT projects, making it an ideal resource for educational institutions, workshops, and DIY enthusiasts.</p>
                        <p class="text-justify mb-4 font-medium"> The lab comes with a user-friendly programming environment, allowing users to write and upload code to control and monitor IoT devices. Whether you are a newbie or an experienced developer, the platform supports various programming languages, making it adaptable to different skill levels.</p>
                        <p class="text-justify font-medium">Looking ahead, the Mini IoT Lab is poised to be a catalyst for innovation and creativity. We're planning to expand the lab's capabilities and features, including the addition of new devices, sensors and machinery.</p>
                    </div>
                </div>
            </div>
        </section>




        <section class="border bg-bgPrimary py-10 cursor-not-allowed opacity-50">
            <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
                <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
                    
                    <SearchPanel />
    
                </div>
            </div>
        </section>



        
        <section class="lg:p-10 p-4 mb-5 lg:my-10">
            <div class="py-8">


                <div class="mx-auto max-w-screen-xl text-center w-full pb-4">
                    <h1 class="mb-4 text-2xl font-extrabold leading-none tracking-tight text-gray-900 md:text-3xl lg:text-4xl dark:text-white">
                        🎉 Some random clicks from our IoT Lab 🎉
                    </h1>

                    <p class="mb-6 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
                        <!-- Celebrate with us as we reminisce about the incredible journey we've embarked on over the past year. Dive into a visual feast of significant moments that have shaped our story, from exciting milestones to heartwarming memories. -->
                        Just a few clicks from our IoT Lab. We are working on it to make it more interactive and user friendly. Stay tuned for more updates. 
                    </p>
                </div>

                <div class="mx-auto max-w-screen-2xl text-center w-full">
                    <div id="image-gallery" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">

                        <PhotoSwipe 
                        gallery="image-gallery"
                        :images="images" 
                        v-if="proceed > 0" 
                        />
                        
                    </div>
                </div>


            
            </div>
        </section>


        
    </PublicLayout>
</template>


<script>
    import PublicLayout from "@/layouts/PublicLayout.vue";
    import PhotoSwipe from "@/components/PhotoSwipe.vue";
    import SearchPanel from "../components/IoT/SearchPanel.vue";

    import { getIotGalleryAssets } from "@/API/index.js";

    export default {
        name: 'MiniIotLabView',
        components: {
            PublicLayout,
            SearchPanel,
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

            this.images = await getIotGalleryAssets();

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