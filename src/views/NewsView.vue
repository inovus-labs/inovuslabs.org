

<template>

    <Navbar />

    <section class="bg-bgPrimary">
        <div class="flex flex-col lg:flex-row w-full mx-auto max-w-screen-xl p-4 items-center justify-center lg:py-14">

        <div class="w-full lg:w-1/3 py-4 lg:py-20">
            <img class="w-full h-full" src="../../public/assets/illustrations/news.svg" />
        </div>

        <div class="mx-auto max-w-screen-xl text-center w-full lg:w-2/3 py-4 lg:py-20">
            <h1 class="mb-4 text-4xl font-extrabold text-primary md:text-5xl lg:text-6xl">
                Inovus Insights: Unveiling Our Impact in Every Byte!
            </h1>
            <p class="mb-8 text-lg font-normal text-secondary lg:text-xl sm:px-16 lg:px-46">
                Stay Informed with the Latest News, Bytes, and Reports – Navigate the Innovation Landscape with Inovus Labs IEDC.
            </p>
            <div class="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
                <a href="#"
                    class="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded bg-primary">
                    Start streaming now
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
                🚀 Dive into the latest buzz about us! 🌐
            </h1>

            <p class="mb-6 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
                Explore news, bytes, and reports that spotlight our journey, innovations, and impact. Stay in the loop with dynamic updates and narratives that shape our narrative in the wider world. 📰✨
            </p>
        </div>


        <div class="px-4 mx-auto max-w-screen-xl lg:px-6">
            <div class="grid gap-8 lg:grid-cols-2">


                <template v-for="item in news">
                    <div class="flex flex-col items-center justify-center border rounded-lg p-8 bg-gray-50 hover:bg-gray-100">
                        <div class=" border flex justify-center items-center mb-2 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                            <svg class="w-5 h-5 text-primary-600 lg:w-6 lg:h-6 dark:text-primary-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"></path></svg>
                        </div>
                        <h3 class="mb-2 text-xl font-bold dark:text-white">{{ item.date }}</h3>
                        <p class="text-gray-500 text-center dark:text-gray-400">{{ item.type }} {{ item.edition }} {{ item.platform }}</p>
                        
                        <template v-if="item.type == 'YouTube'">
                            <iframe class="w-full h-full" :src="item.url" frameborder="0" allowfullscreen></iframe>
                        </template>
                        <template v-else-if="item.type == 'Newspaper' || item.type == 'Newsletter'">
                            <div class="w-full h-full">
                                <img  :src="item.url" />
                            </div>
                        </template>

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

    export default {
        name: 'NewsView',
        components: {
            Navbar,
            Footer
        },
        data() {
            return {
                news: [
                    {
                        date: "28 Oct 2022",
                        type: "YouTube",
                        platform: "Manorama News",
                        url: "https://www.youtube.com/embed/FwNgw0Rff6I?si=e5U_ct0dVZKQDkYF"
                    },
                    {
                        date: "20 Oct 2022",
                        type: "Newspaper",
                        edition: "Kottayam Edition",
                        platform: "Deepika",
                        url: "/assets/news/deepika.jpeg"
                    },
                    {
                        date: "22 Oct 2022",
                        type: "Newspaper",
                        edition: "Kottayam Edition",
                        platform: "Malayala Manorama",
                        url: "/assets/news/manorama.jpeg"
                    },
                    {
                        date: "22 Oct 2022",
                        type: "Newsletter",
                        platform: "IEDC Monthly Newsletter",
                        url: "/assets/news/iedc_newsletter.jpeg"
                    },
                ]
            }
        }
    }
</script>