

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


                                


            </div>  
        </div>

    </section>


  <Footer />

</template>


<script>
    import Navbar from "@/components/reusable/Navbar.vue";
    import Footer from "@/components/reusable/Footer.vue";

    export default {
        name: 'NewsView',
        components: {
            Navbar,
            Footer
        }
    }
</script>