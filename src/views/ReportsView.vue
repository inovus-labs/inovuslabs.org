
<template>
    <PublicLayout>



        <section class="bg-bgPrimary">
            <div class="flex flex-col lg:flex-row w-full mx-auto max-w-screen-xl p-4 items-center justify-center lg:py-14">

                
                <div class="mx-auto max-w-screen-xl text-left w-full lg:w-2/3 py-4 lg:py-20">
                    <h1 class="mb-4 text-4xl font-extrabold text-primary md:text-5xl lg:text-6xl">
                        Inovus Impact Unveiled: Annual Reports Hub!
                    </h1>
                    <p class="mb-8 text-lg font-normal text-secondary lg:text-xl">
                        A Year in Innovation – Dive into our Annual Reports for a Glimpse of Progress, Achievements, and Future Endeavors.
                    </p>
                    <div class="flex flex-col space-y-4 sm:flex-row sm:justify-left sm:space-y-0 sm:space-x-4">
                        <a href="#reports"
                        class="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded bg-primary">
                        Read More
                        <svg class="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                        </svg>
                    </a>
                </div>
            </div>
            
            <div class="w-full lg:w-1/3 py-4 lg:py-20">
                <img class="w-full h-full" src="../../public/assets/illustrations/reports.svg" alt="Reports" />
            </div>
        </div>
    </section>




        <section id="reports" class="lg:p-10 p-4 my-10">

            <div class="mx-auto max-w-screen-xl text-left w-full p-4 lg:mb-6">
                <h1 class="mb-4 text-2xl font-extrabold leading-none tracking-tight text-gray-900 md:text-3xl lg:text-4xl dark:text-white">
                    📊 Explore our journey, year by year! 🌐
                </h1>

                <p class="mb-8 text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">
                    📈 Dive into the Annual Reports section for a snapshot of our milestones, achievements, and growth. Discover the data that defines our narrative and showcases our commitment to excellence. ✨
                </p>
            </div>


            <div class="px-4 mx-auto max-w-screen-xl lg:px-6">
                <div class="grid gap-8 lg:grid-cols-3 sm:max-w-sm sm:mx-auto lg:max-w-full">

                    <ReportCard v-for="report in reports" :key="report.id" :data="report" />

                </div>  
            </div>

        </section>

        

    </PublicLayout>
</template>


<script>
    import PublicLayout from "@/layouts/PublicLayout.vue";
    import ReportCard from "@/components/ReportCard.vue";

    import { getReports } from "@/API/index.js";

    export default {
        name: 'ReportsView',
        components: {
            PublicLayout,
            ReportCard
        },
        data() {
            return {
                reports: []
            }
        },
        async mounted() {
            this.reports = await getReports();
        },
    }
</script>