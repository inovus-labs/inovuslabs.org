

<template>

    <Navbar />

    <section class="bg-bgPrimary">
        <div class="flex flex-col lg:flex-row w-full mx-auto max-w-screen-xl p-4 items-center justify-center lg:py-14">

        <div class="w-full lg:w-1/3 py-4 lg:py-20">
            <img class="w-full h-full" src="../../public/blog.svg" />
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



    <section class="py-10 px-4">

        
        <div class="mx-auto max-w-screen-xl text-center w-full py-4 lg:pt-10">
          <h1 class="mb-4 text-2xl font-extrabold leading-none tracking-tight text-gray-900 md:text-3xl lg:text-4xl dark:text-white">We invest in the world’s potential</h1>
          <p class="mb-6 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">Here at Flowbite we focus on markets where technology, innovation, and capital can unlock long-term value and drive economic growth.</p>
        </div>



        

        <div class="bg-white border-gray-200 dark:border-gray-600 dark:bg-gray-900">
            <div class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
                <div class="grid grid-cols-1 gap-4 sm:grid-cols-3">


                    <div class="max-w-sm p-6 bg-white border text-center border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                        <h5 class="mb-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
                        <p class="font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                    </div>
                    

                </div>
            </div>
        </div>



    </section>



  <Footer />

</template>


<script>
    import Navbar from "@/components/reusable/Navbar.vue";
    import Footer from "@/components/reusable/Footer.vue";

    export default {
        name: 'BlogView',
        components: {
            Navbar,
            Footer
        },
    }
</script>