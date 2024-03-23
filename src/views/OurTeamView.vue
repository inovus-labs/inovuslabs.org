<template>
    <PublicLayout>



        <section class="bg-bgPrimary">
            <div
                class="flex flex-col lg:flex-row w-full mx-auto max-w-screen-xl p-4 items-center justify-center lg:py-14">

                <div class="w-full lg:w-1/3 py-4 lg:py-20">
                    <img class="w-full h-full" src="../../public/assets/illustrations/team.svg" alt="Team" />
                </div>

                <div class="mx-auto max-w-screen-xl text-center w-full lg:w-2/3 py-4 lg:py-20">
                    <h1 class="mb-4 text-4xl font-extrabold text-primary md:text-5xl lg:text-6xl">Our Story: Fueling
                        Innovation at Inovus Labs.</h1>
                    <p class="mb-8 text-lg font-normal text-secondary lg:text-xl sm:px-16 lg:px-48">Discover the
                        genesis, purpose, and vision that fuels Inovus Labs IEDC's commitment to innovation and
                        entrepreneurship.</p>
                    <div class="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
                        <a href="#"
                            class="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded bg-primary">
                            Get started
                            <svg class="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                                fill="none" viewBox="0 0 14 10">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                    stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
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
                <h1
                    class="mb-4 text-2xl font-extrabold leading-none tracking-tight text-gray-900 md:text-3xl lg:text-4xl dark:text-white">
                    🚀 Dive into the evolution of leadership! ✨</h1>
                <p class="mb-6 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">🌟
                    Explore the Execom Teams section, a glimpse into the dynamic individuals who have steered our course
                    over the years. Discover the faces and minds that have shaped our journey, each team contributing to
                    the vibrant tapestry of Inovus.🚀👥</p>
            </div>


            <div
                class="flex flex-col lg:flex-row w-full mx-auto max-w-screen-xl p-4 items-center justify-center lg:py-10">
                <ol class="relative border-l border-gray-200 dark:border-gray-700">

                    <OurTeamCard v-for="item in team" :key="item.title" :title="item.title" :date="item.date"
                        :members="item.members" :showTeam="item.showTeam" @click="toggleTeam(item)" />

                </ol>

            </div>
        </section>



    </PublicLayout>
</template>


<script>
import OurTeamCard from "@/components/OurTeamCard.vue";
import PublicLayout from "@/layouts/PublicLayout.vue";

import { getTeamMembers } from "@/API/index.js";

export default {
    name: 'AboutView',
    components: {
        OurTeamCard,
        PublicLayout
    },

    methods: {
        toggleTeam(item) {

            this.team.forEach((item) => {
                item.showTeam = false
            })

            item.showTeam = !item.showTeam
        }
    },

    data() {
        return {
            team: [],
        }
    },

    async mounted() {
        this.team = await getTeamMembers();
    },
}
</script>