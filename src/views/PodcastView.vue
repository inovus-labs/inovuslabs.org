

<template>

    <Navbar />

    <section class="bg-bgPrimary">
        <div class="flex flex-col lg:flex-row w-full mx-auto max-w-screen-xl p-4 items-center justify-center lg:py-14">

        <div class="w-full lg:w-1/3 py-4 lg:py-20">
            <img class="w-full h-full" src="../../public/assets/illustrations/podcast.svg" />
        </div>

        <div class="mx-auto max-w-screen-xl text-center w-full lg:w-2/3 py-4 lg:py-20">
            <h1 class="mb-4 text-4xl font-extrabold text-primary md:text-5xl lg:text-6xl">
                InoRa: Amplifying Ideas, Empowering Minds
            </h1>
            <p class="mb-8 text-lg font-normal text-secondary lg:text-xl sm:px-16 lg:px-46">
                Discover Inspiring Stories of Impact – Tune into <span class="font-bold">The Inovus Radio</span> for Conversations with Society's Change Agents.
            </p>
            <div class="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
                <a href="https://open.spotify.com/show/4QXEeK8ZWxewcXuLKCRR8R" target="_blank"
                    class="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded bg-primary">
                    Start listening now
                    <svg class="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                    </svg>
                </a>
            </div>
        </div>

        </div>
    </section>




    <section class="lg:p-10 p-4 mt-10">

        <div class="mx-auto max-w-screen-xl text-center w-full p-4 lg:mb-4">
            <h1 class="mb-4 text-2xl font-extrabold leading-none tracking-tight text-gray-900 md:text-3xl lg:text-4xl dark:text-white">
                🎙️ Meet the maestros behind the mic! ✨
            </h1>

            <p class="mb-6 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
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

        <div class="mx-auto max-w-screen-xl text-center w-full p-4 lg:mb-4">
            <h1 class="mb-4 text-2xl font-extrabold leading-none tracking-tight text-gray-900 md:text-3xl lg:text-4xl dark:text-white">
                🎙️ Welcome to The Inovus Radio Experience. 🌐
            </h1>

            <p class="mb-6 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
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


  <Footer />

</template>


<script>
    import Navbar from "@/components/reusable/Navbar.vue";
    import Footer from "@/components/reusable/Footer.vue";
    import PodcastCard from "@/components/PodcastCard.vue";
    import StatsCounter from "@/components/reusable/StatsCounter.vue";

    import { getPodcasts } from "@/API/index.js";

    export default {
        name: 'PodcastView',
        components: {
            Navbar,
            Footer,
            PodcastCard,
            StatsCounter
        },

        data() {
            return {
                podcasts: [],
                podcastStats: [
                    {
                        title: "Episodes",
                        value: 2,
                        mode: "accurate"
                    },
                    {
                        title: "Months",
                        value: 4,
                        mode: "accurate"
                    },
                    {
                        title: "Spotify Followers",
                        value: 60,
                        mode: "approximate"
                    },
                    {
                        title: "All-time Plays",
                        value: 250,
                        mode: "approximate"
                    },
                    {
                        title: "Monthly Impressions",
                        value: 8000,
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
                        name: "Alita Mariyam",
                        role: "Host",
                        image: "/assets/inora/_alita.jpeg"
                    },
                    {
                        name: "Amenda",
                        role: "Editor",
                        image: "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png"
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
                        role: "Teachnical Crew",
                        image: "/assets/team/2024/NikilTDas.jpeg"
                    },
                    {
                        name: "Abhishek V Gopal",
                        role: "Teachnical Crew",
                        image: "/assets/team/2024/Abhishek.jpg"
                    },
                    {
                        name: "Badhusha Shaji",
                        role: "Teachnical Crew",
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