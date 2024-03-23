
<template>
    <PublicLayout>

        

        <section class="bg-bgPrimary">
            <div class="flex flex-col lg:flex-row w-full mx-auto max-w-screen-xl p-4 items-center justify-center lg:py-14">

                
                <div class="mx-auto max-w-screen-xl text-left w-full lg:w-2/3 py-4 lg:py-20">
                    <h1 class="mb-4 text-4xl font-semibold text-primary md:text-5xl lg:text-6xl">
                        InoRa: Amplifying Ideas, Empowering Minds
                    </h1>
                    <p class="mb-8 text-lg font-light text-secondary lg:text-xl">
                        Discover Inspiring Stories of Impact – Tune into <span class="font-bold">The Inovus Radio</span> for Conversations with Society's Change Agents.
                    </p>
                    <div class="flex flex-col space-y-4 sm:flex-row sm:justify-left sm:space-y-0 sm:space-x-4">
                        <a href="https://open.spotify.com/show/4QXEeK8ZWxewcXuLKCRR8R" target="_blank"
                        class="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded bg-primary">
                        Start listening now
                        <svg class="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                        </svg>
                    </a>
                </div>
            </div>
            
            <div class="w-full lg:w-1/3 py-4 lg:py-20">
                <img class="w-full h-full" src="../../public/assets/illustrations/podcast.svg" alt="Podcast" />
            </div>
        </div>
    </section>




        <section class="border-b lg:p-10 p-4 my-10">
            <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
                <div class="text-gray-500 sm:text-lg dark:text-gray-400">
                    
                    <div class="mb-12">
                        <h2 class="text-4xl tracking-tight font-semibold text-gray-900 dark:text-white mb-2">Welcome to InoRa: The Inovus Radio! 🎙️</h2>
                        <h3>A Bi-Monthly Spotify Podcast by Inovus – 🌐 Unveiling Stories, 💡 Inspiring Conversations, and 🚀 Shaping the Future of Auditory Exploration</h3>
                    </div>

                    <p class="text-justify mb-4 font-light"><a href="https://open.spotify.com/show/4QXEeK8ZWxewcXuLKCRR8R" target="_blank" class="font-medium text-primary">InoRa: The Inovus Radio</a> is not just a podcast; it's an auditory journey crafted with purpose and passion. Formed as a bi-monthly Spotify podcast, INORA stands as a testament to the belief that storytelling and meaningful conversations transcend boundaries, connecting individuals through the power of shared narratives.</p>
                    <p class="text-justify font-light"><a href="https://open.spotify.com/show/4QXEeK8ZWxewcXuLKCRR8R" target="_blank" class="font-medium text-primary">InoRa</a> was born from the desire to create a platform that goes beyond mere entertainment. It was conceived with the vision of providing a space for thought-provoking discussions, insightful interviews, and engaging stories that inspire and resonate. The podcast is a medium through which Inovus seeks to amplify diverse voices, share knowledge, and build a community that thrives on curiosity and exploration.</p>
                    <!-- <p class="text-justify font-light">It serves as a bridge between ideas and audiences. It is a platform that not only entertains but also educates, stimulates critical thinking, and fosters a sense of connection. The podcast covers a spectrum of topics ranging from industry insights and innovation to personal journeys and societal reflections. INORA is a space where diverse perspectives converge, offering listeners an opportunity to broaden their horizons and be a part of a global conversation.</p> -->

                </div>
            </div>
        </section>




        <section class="lg:p-10 p-4 mt-10">

            <div class="mx-auto max-w-screen-xl text-left w-full p-4 lg:mb-4">
                <h1 class="mb-4 text-2xl font-semibold leading-none tracking-tight text-gray-900 md:text-3xl lg:text-4xl dark:text-white">
                    🎙️ Meet the maestros behind the mic! ✨
                </h1>

                <p class="mb-6 text-lg font-light text-gray-500 lg:text-xl dark:text-gray-400">
                    🎙️ Get acquainted with the talented individuals shaping Inora: The Inovus Radio. Discover the faces, voices, and stories that bring our narrative to life. Join us on this behind-the-scenes journey. 🌟🎧
                </p>
                
                
                
                <div class="py-8 mx-auto max-w-screen-xl text-center lg:py-12 lg:px-6">
                    <div class="grid gap-8 lg:gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-end">
                        
                        <template v-for="member in team">
                            <div class="relative rounded-lg overflow-hidden h-max">
                                <div class="rounded-lg relative">
                                    <img :src="member.image" :alt="member.name" />
                                </div>
                                <div class="absolute inset-0 bg-black bg-opacity-10 flex flex-col items-center justify-end pb-4">
                                    <h1 class="text-white text-xl font-bold">{{ member.name }}</h1>
                                    <p class="text-gray-100 text-sm">{{ member.role }}</p>
                                </div>
                            </div>
                        </template>
                        
                    </div>  
                </div>
                
            </div>

        </section>




        <StatsCounter :stats="podcastStats" />




        <section class="lg:p-10 p-4 my-10">

            <div class="mx-auto max-w-screen-xl text-left w-full p-4 lg:mb-4">
                <h1 class="mb-4 text-2xl font-semibold leading-none tracking-tight text-gray-900 md:text-3xl lg:text-4xl dark:text-white">
                    🎙️ Welcome to The Inovus Radio Experience. 🌐
                </h1>

                <p class="mb-6 text-lg font-light text-gray-500 lg:text-xl dark:text-gray-400">
                    🎧 Tune in for a unique audio experience that transcends boundaries, brought to you by Inovus Radio on the world's leading streaming platform. Discover, engage, and enjoy the best of our curated podcasts right here! ✨
                </p>
            </div>


            <div class="px-4 mx-auto max-w-screen-xl lg:px-6">
                <div class="grid gap-8 lg:grid-cols-2">
                    
                    <template v-for="podcast in podcasts">
                        <PodcastCard :data="podcast" />
                    </template>

                </div>  
            </div>

        </section>


        
    </PublicLayout>
</template>


<script>
    import PodcastCard from "@/components/PodcastCard.vue";
    import StatsCounter from "@/components/reusable/StatsCounter.vue";

    import PublicLayout from "@/layouts/PublicLayout.vue";

    import { getPodcasts } from "@/API/index.js";

    export default {
        name: 'PodcastView',
        components: {
            PublicLayout,
            PodcastCard,
            StatsCounter
        },

        data() {
            return {
                podcasts: [],
                podcastStats: [
                    {
                        title: "Episodes",
                        value: 3,
                        mode: "accurate"
                    },
                    {
                        title: "Months",
                        value: 6,
                        mode: "accurate"
                    },
                    {
                        title: "Spotify Followers",
                        value: 70,
                        mode: "approximate"
                    },
                    {
                        title: "All-time Plays",
                        value: 400,
                        mode: "approximate"
                    },
                    {
                        title: "Monthly Impressions",
                        value: 15000,
                        mode: "approximate"
                    },
                    {
                        title: "Happy Faces",
                        value: "∞",
                        mode: "string"
                    },
                ],
                team: [
                    {
                        name: "Alita Mariam Varghese",
                        role: "Host",
                        image: "/assets/inora/_alita.jpeg"
                    },
                    {
                        name: "Amenda Maria Johnson",
                        role: "Editor",
                        image: "/assets/inora/amenda.jpeg"
                    },
                    {
                        name: "Arjun A Acharry",
                        role: "Creative Support",
                        image: "/assets/team/2024/ArjunAcharry.JPG"
                    },
                    {
                        name: "Joel Jacob Thomas",
                        role: "Creative Support",
                        image: "/assets/team/2024/JoelJacob.jpg"
                    },
                    {
                        name: "Nikhil T Das",
                        role: "Technical Crew",
                        image: "/assets/team/2024/NikilTDas.jpeg"
                    },
                    {
                        name: "Abhishek V Gopal",
                        role: "Technical Crew",
                        image: "/assets/team/2024/Abhishek.jpg"
                    },
                    {
                        name: "Badhusha Shaji",
                        role: "Technical Crew",
                        image: "/assets/team/2024/BadhushaShaji.jpeg"
                    },
                ]
            }
        },

        async mounted() {
            this.podcasts = await getPodcasts();
        }
    }
</script>