
<template>
    <PublicLayout>



        <section class="bg-white dark:bg-gray-900  p-4">
        <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
            <div class="max-w-screen-lg text-gray-500 sm:text-lg dark:text-gray-400">
                <h2 class="mb-4 text-4xl tracking-tight font-semibold text-gray-900 dark:text-white">ATOM <span class="text-primary">EV</span>.</h2>
                <p class="mb-4 font-light">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                <p class="mb-4 font-light">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>

            </div>
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


        
    </PublicLayout>
</template>


<script>
    import PublicLayout from "@/layouts/PublicLayout.vue";

    import { Buggy } from "@/API/index.js";

    export default {
        name: 'BuggyNews',
        components: {
            PublicLayout,
        },
        data() {
            return {
                news: []
            }
        },
        async mounted() {
            this.news = await Buggy();
        }
    }
</script>