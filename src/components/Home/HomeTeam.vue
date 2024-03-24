<template>




        <section class="py-10 px-4 my-8 py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">

            <div class="max-w-screen-md mb-8 lg:mb-16">
                <h2 class="mb-4 text-4xl tracking-tight font-semibold text-gray-900 dark:text-white text-secondary">Our <span class="text-primary">Team</span>.</h2>
                <p class="text-gray-500 sm:text-xl font-light dark:text-gray-400">We’re excited in providing assistance could be either financial or infrastructure for new initiatives and ideas which seems impossible for majority.</p>
            </div>
            <div
                class="flex flex-col lg:flex-row w-full mx-auto max-w-screen-xl p-4 items-center justify-center lg:py-10">
                <ol class="relative border-l border-gray-200 dark:border-gray-700">

                    <OurTeamCard v-for="item in team" 
                        :members="item.members" :showTeam="item.showTeam"  />

                </ol>

            </div>
        </section>




</template>


<script>
import OurTeamCard from "@/components/OurTeamCard.vue";
import PublicLayout from "@/layouts/PublicLayout.vue";

import { getcurrentTeam } from "@/API/index.js";

export default {
    name: 'HomeTeam',
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
        this.team = await getcurrentTeam();
    },
}
</script>