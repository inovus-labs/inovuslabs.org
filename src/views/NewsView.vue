<template>
<PublicLayout>

    <section class="bg-bgPrimary">
        <div class="flex flex-col lg:flex-row w-full mx-auto max-w-screen-xl p-4 items-center justify-center lg:py-14">


            
            <div class="mx-auto max-w-screen-xl text-left w-full lg:w-2/3 py-4 lg:py-20">
                <h1 class="mb-4 text-4xl font-semibold text-primary md:text-5xl lg:text-6xl">
                    Inovus Insights: Unveiling Our Impact in Every Byte!
                </h1>
                <p class="mb-8 text-lg font-light text-secondary lg:text-xl">
                    Stay Informed with the Latest News, Bytes, and Reports – Navigate the Innovation Landscape with Inovus Labs IEDC.
                </p>
                <div class="flex flex-col space-y-4 sm:flex-row sm:justify-left sm:space-y-0 sm:space-x-4">
                    <a href="#" class="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded bg-primary">
                        Start streaming now
                        <svg class="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                        </svg>
                    </a>
                </div>
            </div>
            
            <div class="w-full lg:w-1/3 py-4 lg:py-20">
                <img class="w-full h-full" src="../../public/assets/illustrations/news.svg" alt="News" />
            </div>
        </div>
    </section>


        <section class="lg:p-10 p-4 my-10">

            <div class="mx-auto max-w-screen-xl text-left w-full p-4 lg:mb-4">
                <h1 class="mb-4 text-2xl font-semibold leading-none tracking-tight text-gray-900 md:text-3xl lg:text-4xl dark:text-white">
                    🚀 Dive into the latest buzz about us! 🌐
                </h1>

                <p class="mb-6 text-lg font-light text-gray-500 lg:text-xl dark:text-gray-400">
                    Explore news, bytes, and reports that spotlight our journey, innovations, and impact. Stay in the loop with dynamic updates and narratives that shape our narrative in the wider world. 📰✨
                </p>
            </div>

        <div class="px-4 mx-auto max-w-screen-xl lg:px-6">
            <div class="grid gap-8 lg:grid-cols-2">

                <template v-for="item in news">

                    <a href="/buggy" class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xxl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                        <img class="object-cover w-full rounded-t-lg p-2 h-auto md:h-auto md:w-72 md:rounded-none md:rounded-s-lg" :src="item.imgSrc" :alt="item.title" >
                        <div class="flex flex-col justify-between p-4 leading-normal">
                            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{{item.title}}</h5>
                            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{{item.discription}}.</p>
                        </div>
                    </a>
                </template>

            </div>
        </div>

    </section>

</PublicLayout>
</template>

<script>
import PublicLayout from "@/layouts/PublicLayout.vue";

import {
    getNewsReports
} from "@/API/index.js";

export default {
    name: 'NewsView',
    components: {
        PublicLayout,
    },
    data() {
        return {
            news: []
        }
    },
    async mounted() {
        this.news = await getNewsReports();
    }
}
</script>
