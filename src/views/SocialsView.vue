
<template>
    <PublicLayout>



        <section class="bg-bgPrimary">
            <div class="flex flex-col lg:flex-row w-full mx-auto max-w-screen-xl p-4 items-center justify-center lg:py-14">

                
                <div class="mx-auto max-w-screen-xl text-left w-full lg:w-2/3 py-4 lg:py-20">
                    <h1 class="mb-4 text-4xl font-semibold text-primary md:text-5xl lg:text-6xl">
                        Inovus Connects: Follow the Buzz Across Platforms!
                    </h1>
                    <p class="mb-8 text-lg font-light text-secondary lg:text-xl">
                        Follow Us for a Digital Journey – Stay Updated with Featured Posts, Trends, and Tech Brilliance from Inovus Labs IEDC.
                    </p>
                    <div class="flex flex-col space-y-4 sm:flex-row sm:justify-left sm:space-y-0 sm:space-x-4">
                        <a href="#" class="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded bg-primary">
                            Get started
                            <svg class="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                            </svg>
                        </a>
                        <a href="#" class="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-secondary rounded border border-secondary">
                            Learn more
                        </a>  
                    </div>
                </div>
                
                <div class="w-full lg:w-1/3 py-4 lg:py-20">
                    <img class="w-full h-full" src="https://storage.googleapis.com/inovuslabs-cdn.appspot.com/assets/illustrations/social-ideas-animate.svg" alt="Socials" />
                </div>
            </div>
        </section>
        
        


        <section class="lg:p-10 p-4 my-10">

            <div class="mx-auto max-w-screen-xl text-left w-full p-4 lg:mb-4">
                <h1 class="mb-4 text-2xl font-semibold leading-none tracking-tight text-gray-900 md:text-3xl lg:text-4xl dark:text-white">
                     Explore our Social Media universe! 
                </h1>

                <p class="mb-6 text-lg font-light text-gray-500 lg:text-xl dark:text-gray-400">
                     Immerse yourself in a curated collection of Instagram snapshots, Twitter updates, and insightful threads. Click, scroll, and stay connected with our latest updates and engaging content across platforms. 
                </p>
            </div>




            
        <section class="lg:p-10 p-4">
            <div class="mx-auto max-w-screen-xl text-center w-full p-4 lg:mb-4 ">


                <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
                    <template v-for="platform in socialMedia">

                        <a :href="platform.url" target="_blank">
                            <div class="flex flex-col items-center justify-center w-full cursor-pointer text-primary hover:text-blue-500 border-2 border-gray-200 dark:border-gray-700 rounded-lg py-10">
                                <div v-html="isMobile ? platform.mobleIcon : platform.icon"></div>
                                <p class="text-lg pt-3 font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">{{ platform.name }}</p>
                            </div>
                        </a>
                        
                    </template>
                </div>
            </div>

        </section>


            



            <!-- ----------------- Start : Instagram ----------------- -->

            <section class="bg-white dark:bg-gray-900">
                <div class="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
                    <div class="max-w-screen-md">
                        <h2 class="mb-4 text-4xl tracking-tight font-semibold text-gray-900 dark:text-white">Dive into our Instagram world!</h2>
                        <p class="font-light text-gray-500 sm:text-xl dark:text-gray-400"> Explore the essence of our journey through captivating visuals and moments. Scroll through our curated Instagram feed below for a glimpse into the stories we share. </p>
                    </div>
                </div>
            </section>

            <div class=" mx-auto max-w-screen-xl lg:px-6">
                <div class="grid gap-8 lg:grid-cols-3">

                    <template v-for="post in instagramPosts">
                        <InstagramCard
                            :url="post.url"
                        />
                    </template>
                    
                </div>  
            </div>

            <!-- ----------------- End : Instagram ----------------- -->



            <!-- ----------------- Start : Linkedin ----------------- -->

            <section class="bg-white dark:bg-gray-900">
                <div class="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
                    <div class="max-w-screen-md">
                        <h2 class="mb-4 text-4xl tracking-tight font-semibold text-gray-900 dark:text-white">Discover our professional pulse on LinkedIn!</h2>
                        <p class="font-light text-gray-500 sm:text-xl dark:text-gray-400"> Scroll through a collection of curated insights, updates, and industry highlights. Engage with our network and explore the business side of our narrative. </p>
                    </div>
                </div>
            </section>

            <div class=" mx-auto max-w-screen-xl lg:px-6">
                <div class="grid gap-8 lg:grid-cols-3">

                    <template v-for="post in linkedinPosts">
                        <LinkedinCard
                            :url="post.url"
                        />
                    </template>

                </div>  
            </div>

            <!-- ----------------- End : Linkedin ----------------- -->



            <!-- ----------------- Start : YouTube ----------------- -->

            <section class="bg-white dark:bg-gray-900">
                <div class="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
                    <div class="max-w-screen-md">
                        <h2 class="mb-4 text-4xl tracking-tight font-semibold text-gray-900 dark:text-white">Lights, camera, action!</h2>
                        <p class="font-light text-gray-500 sm:text-xl dark:text-gray-400"> Immerse yourself in our YouTube channel's curated showcase. From captivating stories to insightful discussions, explore the visual essence of our narrative. Hit play and join us on the screen. </p>
                    </div>
                </div>
            </section>

            <div class=" mx-auto max-w-screen-xl lg:px-6">
                <div class="grid gap-8 lg:grid-cols-3">

                    <template v-for="post in youtubePosts">
                        <YoutubeCard
                            :url="post.url"
                        />
                    </template>

                </div>  
            </div>

            <!-- ----------------- End : YouTube ----------------- -->



            <!-- ----------------- Start : Threads ----------------- -->

            <section class="bg-white dark:bg-gray-900">
                <div class="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
                    <div class="max-w-screen-md">
                        <h2 class="mb-4 text-4xl tracking-tight font-semibold text-gray-900 dark:text-white">Unravel the threads of our discourse!</h2>
                        <p class="font-light text-gray-500 sm:text-xl dark:text-gray-400"> Dive into insightful conversations and deep dives encapsulated in our Threads platform posts. Explore a tapestry of ideas, opinions, and discussions that define our narrative. </p>
                    </div>
                </div>
            </section>

            <div class="px-4 mx-auto max-w-screen-xl lg:px-6">
                <div class="grid gap-8 lg:grid-cols-3">
                    
                    <template v-for="post in threadsPosts">
                        <ThreadsCard
                        :url="post.url"
                        />
                    </template>
                    
                </div>  
            </div>

            <!-- ----------------- End : Threads ----------------- -->



            <!-- ----------------- Start : Twitter ----------------- -->

            <section class="bg-white dark:bg-gray-900">
                <div class="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
                    <div class="max-w-screen-md">
                        <h2 class="mb-4 text-4xl tracking-tight font-semibold text-gray-900 dark:text-white">Chirp into our Twitterverse!</h2>
                        <p class="font-light text-gray-500 sm:text-xl dark:text-gray-400"> Scroll through a curated collection of tweets that capture the essence of our thoughts in 280 characters or less. Join the conversation and stay updated with our bite-sized insights. </p>
                    </div>
                </div>
            </section>

            <div class="px-4 mx-auto max-w-screen-xl lg:px-6">
                <div class="grid gap-8 lg:grid-cols-3">

                    <template v-for="post in twitterPosts">
                        <TwitterCard
                            :url="post.url"
                        />
                    </template>
                    
                </div>  
            </div>

            <!-- ----------------- End : Twitter ----------------- -->


            
        </section>


        
    </PublicLayout>
</template>


<script>
    import InstagramCard from "@/components/Socials/InstagramCard.vue";
    import LinkedinCard from "@/components/Socials/LinkedinCard.vue";
    import YoutubeCard from "@/components/Socials/YoutubeCard.vue";
    import TwitterCard from "@/components/Socials/TwitterCard.vue";
    import ThreadsCard from "@/components/Socials/ThreadsCard.vue";
    
    import PublicLayout from "@/layouts/PublicLayout.vue";

    import { getSocialPosts } from "@/API/index.js";

    export default {
        name: 'SocialsView',
        components: {
            InstagramCard,
            LinkedinCard,
            YoutubeCard,
            TwitterCard,
            ThreadsCard,
            PublicLayout
        },
        data() {
            return {
                instagramPosts: [],
                linkedinPosts: [],
                youtubePosts: [],
                twitterPosts: [],
                threadsPosts: [],
                socialMedia: [
                    {
                        name: "Instagram",
                        icon: `<svg class="h-24 w-24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" /></svg>`,
                        mobleIcon: `<svg class="h-16 w-16"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" /></svg>`,
                        url: "https://www.instagram.com/inovuslabs/"
                    },
                    {
                        name: "Linkedin",
                        icon: `<svg class="h-24 w-24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />  <rect x="2" y="9" width="4" height="12" />  <circle cx="4" cy="4" r="2" /></svg>`,
                        mobleIcon: `<svg class="h-16 w-16"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />  <rect x="2" y="9" width="4" height="12" />  <circle cx="4" cy="4" r="2" /></svg>`,
                        url: "https://www.linkedin.com/company/inovuslabs"
                    },
                    {
                        name: "Twitter",
                        icon: `<svg class="h-24 w-24"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <path d="M22 4.01c-1 .49-1.98.689-3 .99-1.121-1.265-2.783-1.335-4.38-.737S11.977 6.323 12 8v1c-3.245.083-6.135-1.395-8-4 0 0-4.182 7.433 4 11-1.872 1.247-3.739 2.088-6 2 3.308 1.803 6.913 2.423 10.034 1.517 3.58-1.04 6.522-3.723 7.651-7.742a13.84 13.84 0 0 0 .497 -3.753C20.18 7.773 21.692 5.25 22 4.009z" /></svg>`,
                        mobleIcon: `<svg class="h-16 w-16"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <path d="M22 4.01c-1 .49-1.98.689-3 .99-1.121-1.265-2.783-1.335-4.38-.737S11.977 6.323 12 8v1c-3.245.083-6.135-1.395-8-4 0 0-4.182 7.433 4 11-1.872 1.247-3.739 2.088-6 2 3.308 1.803 6.913 2.423 10.034 1.517 3.58-1.04 6.522-3.723 7.651-7.742a13.84 13.84 0 0 0 .497 -3.753C20.18 7.773 21.692 5.25 22 4.009z" /></svg>`,
                        url: "https://twitter.com/inovuslabs"
                    },
                    {
                        name: "GitHub",
                        icon: `<svg class="h-24 w-24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" /></svg>`,
                        mobleIcon: `<svg class="h-16 w-16"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" /></svg>`,
                        url: "https://github.com/inovus-labs"
                    }
                    ,
                    {
                        name: "YouTube",
                        icon: `<svg class="h-24 w-24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />  <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" /></svg>`,
                        mobleIcon: `<svg class="h-16 w-16"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />  <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" /></svg>`,
                        url: "https://www.youtube.com/@inovuslabs_official"
                    },
                    {
                        name: "Threads",
                        // icon: `<svg class="h-24 w-24" fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round" viewBox="0 0 192 192" xmlns="http://www.w3.org/2000/svg"><path class="x19hqcy" d="M141.537 88.9883C140.71 88.5919 139.87 88.2104 139.019 87.8451C137.537 60.5382 122.616 44.905 97.5619 44.745C97.4484 44.7443 97.3355 44.7443 97.222 44.7443C82.2364 44.7443 69.7731 51.1409 62.102 62.7807L75.881 72.2328C81.6116 63.5383 90.6052 61.6848 97.2286 61.6848C97.3051 61.6848 97.3819 61.6848 97.4576 61.6855C105.707 61.7381 111.932 64.1366 115.961 68.814C118.893 72.2193 120.854 76.925 121.825 82.8638C114.511 81.6207 106.601 81.2385 98.145 81.7233C74.3247 83.0954 59.0111 96.9879 60.0396 116.292C60.5615 126.084 65.4397 134.508 73.775 140.011C80.8224 144.663 89.899 146.938 99.3323 146.423C111.79 145.74 121.563 140.987 128.381 132.296C133.559 125.696 136.834 117.143 138.28 106.366C144.217 109.949 148.617 114.664 151.047 120.332C155.179 129.967 155.42 145.8 142.501 158.708C131.182 170.016 117.576 174.908 97.0135 175.059C74.2042 174.89 56.9538 167.575 45.7381 153.317C35.2355 139.966 29.8077 120.682 29.6052 96C29.8077 71.3178 35.2355 52.0336 45.7381 38.6827C56.9538 24.4249 74.2039 17.11 97.0132 16.9405C119.988 17.1113 137.539 24.4614 149.184 38.788C154.894 45.8136 159.199 54.6488 162.037 64.9503L178.184 60.6422C174.744 47.9622 169.331 37.0357 161.965 27.974C147.036 9.60668 125.202 0.195148 97.0695 0H96.9569C68.8816 0.19447 47.2921 9.6418 32.7883 28.0793C19.8819 44.4864 13.2244 67.3157 13.0007 95.9325L13 96L13.0007 96.0675C13.2244 124.684 19.8819 147.514 32.7883 163.921C47.2921 182.358 68.8816 191.806 96.9569 192H97.0695C122.03 191.827 139.624 185.292 154.118 170.811C173.081 151.866 172.51 128.119 166.26 113.541C161.776 103.087 153.227 94.5962 141.537 88.9883ZM98.4405 129.507C88.0005 130.095 77.1544 125.409 76.6196 115.372C76.2232 107.93 81.9158 99.626 99.0812 98.6368C101.047 98.5234 102.976 98.468 104.871 98.468C111.106 98.468 116.939 99.0737 122.242 100.233C120.264 124.935 108.662 128.946 98.4405 129.507Z"></path></svg>`,
                        // mobleIcon: `<svg class="h-16 w-16" aria-label="Threads" viewBox="0 0 192 192" xmlns="http://www.w3.org/2000/svg"><path class="x19hqcy" d="M141.537 88.9883C140.71 88.5919 139.87 88.2104 139.019 87.8451C137.537 60.5382 122.616 44.905 97.5619 44.745C97.4484 44.7443 97.3355 44.7443 97.222 44.7443C82.2364 44.7443 69.7731 51.1409 62.102 62.7807L75.881 72.2328C81.6116 63.5383 90.6052 61.6848 97.2286 61.6848C97.3051 61.6848 97.3819 61.6848 97.4576 61.6855C105.707 61.7381 111.932 64.1366 115.961 68.814C118.893 72.2193 120.854 76.925 121.825 82.8638C114.511 81.6207 106.601 81.2385 98.145 81.7233C74.3247 83.0954 59.0111 96.9879 60.0396 116.292C60.5615 126.084 65.4397 134.508 73.775 140.011C80.8224 144.663 89.899 146.938 99.3323 146.423C111.79 145.74 121.563 140.987 128.381 132.296C133.559 125.696 136.834 117.143 138.28 106.366C144.217 109.949 148.617 114.664 151.047 120.332C155.179 129.967 155.42 145.8 142.501 158.708C131.182 170.016 117.576 174.908 97.0135 175.059C74.2042 174.89 56.9538 167.575 45.7381 153.317C35.2355 139.966 29.8077 120.682 29.6052 96C29.8077 71.3178 35.2355 52.0336 45.7381 38.6827C56.9538 24.4249 74.2039 17.11 97.0132 16.9405C119.988 17.1113 137.539 24.4614 149.184 38.788C154.894 45.8136 159.199 54.6488 162.037 64.9503L178.184 60.6422C174.744 47.9622 169.331 37.0357 161.965 27.974C147.036 9.60668 125.202 0.195148 97.0695 0H96.9569C68.8816 0.19447 47.2921 9.6418 32.7883 28.0793C19.8819 44.4864 13.2244 67.3157 13.0007 95.9325L13 96L13.0007 96.0675C13.2244 124.684 19.8819 147.514 32.7883 163.921C47.2921 182.358 68.8816 191.806 96.9569 192H97.0695C122.03 191.827 139.624 185.292 154.118 170.811C173.081 151.866 172.51 128.119 166.26 113.541C161.776 103.087 153.227 94.5962 141.537 88.9883ZM98.4405 129.507C88.0005 130.095 77.1544 125.409 76.6196 115.372C76.2232 107.93 81.9158 99.626 99.0812 98.6368C101.047 98.5234 102.976 98.468 104.871 98.468C111.106 98.468 116.939 99.0737 122.242 100.233C120.264 124.935 108.662 128.946 98.4405 129.507Z"></path></svg>`,
                        icon: `<svg class="h-24 w-24 threads-icon" fill="currentColor" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 192 192" xmlns="http://www.w3.org/2000/svg"><path class="x19hqcy" d="M141.537 88.9883C140.71 88.5919 139.87 88.2104 139.019 87.8451C137.537 60.5382 122.616 44.905 97.5619 44.745C97.4484 44.7443 97.3355 44.7443 97.222 44.7443C82.2364 44.7443 69.7731 51.1409 62.102 62.7807L75.881 72.2328C81.6116 63.5383 90.6052 61.6848 97.2286 61.6848C97.3051 61.6848 97.3819 61.6848 97.4576 61.6855C105.707 61.7381 111.932 64.1366 115.961 68.814C118.893 72.2193 120.854 76.925 121.825 82.8638C114.511 81.6207 106.601 81.2385 98.145 81.7233C74.3247 83.0954 59.0111 96.9879 60.0396 116.292C60.5615 126.084 65.4397 134.508 73.775 140.011C80.8224 144.663 89.899 146.938 99.3323 146.423C111.79 145.74 121.563 140.987 128.381 132.296C133.559 125.696 136.834 117.143 138.28 106.366C144.217 109.949 148.617 114.664 151.047 120.332C155.179 129.967 155.42 145.8 142.501 158.708C131.182 170.016 117.576 174.908 97.0135 175.059C74.2042 174.89 56.9538 167.575 45.7381 153.317C35.2355 139.966 29.8077 120.682 29.6052 96C29.8077 71.3178 35.2355 52.0336 45.7381 38.6827C56.9538 24.4249 74.2039 17.11 97.0132 16.9405C119.988 17.1113 137.539 24.4614 149.184 38.788C154.894 45.8136 159.199 54.6488 162.037 64.9503L178.184 60.6422C174.744 47.9622 169.331 37.0357 161.965 27.974C147.036 9.60668 125.202 0.195148 97.0695 0H96.9569C68.8816 0.19447 47.2921 9.6418 32.7883 28.0793C19.8819 44.4864 13.2244 67.3157 13.0007 95.9325L13 96L13.0007 96.0675C13.2244 124.684 19.8819 147.514 32.7883 163.921C47.2921 182.358 68.8816 191.806 96.9569 192H97.0695C122.03 191.827 139.624 185.292 154.118 170.811C173.081 151.866 172.51 128.119 166.26 113.541C161.776 103.087 153.227 94.5962 141.537 88.9883ZM98.4405 129.507C88.0005 130.095 77.1544 125.409 76.6196 115.372C76.2232 107.93 81.9158 99.626 99.0812 98.6368C101.047 98.5234 102.976 98.468 104.871 98.468C111.106 98.468 116.939 99.0737 122.242 100.233C120.264 124.935 108.662 128.946 98.4405 129.507Z"></path></svg>`, 
                        mobleIcon: `<svg class="h-16 w-16 threads-icon" aria-label="Threads" fill="black" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 192 192" xmlns="http://www.w3.org/2000/svg"><path class="x19hqcy" d="M141.537 88.9883C140.71 88.5919 139.87 88.2104 139.019 87.8451C137.537 60.5382 122.616 44.905 97.5619 44.745C97.4484 44.7443 97.3355 44.7443 97.222 44.7443C82.2364 44.7443 69.7731 51.1409 62.102 62.7807L75.881 72.2328C81.6116 63.5383 90.6052 61.6848 97.2286 61.6848C97.3051 61.6848 97.3819 61.6848 97.4576 61.6855C105.707 61.7381 111.932 64.1366 115.961 68.814C118.893 72.2193 120.854 76.925 121.825 82.8638C114.511 81.6207 106.601 81.2385 98.145 81.7233C74.3247 83.0954 59.0111 96.9879 60.0396 116.292C60.5615 126.084 65.4397 134.508 73.775 140.011C80.8224 144.663 89.899 146.938 99.3323 146.423C111.79 145.74 121.563 140.987 128.381 132.296C133.559 125.696 136.834 117.143 138.28 106.366C144.217 109.949 148.617 114.664 151.047 120.332C155.179 129.967 155.42 145.8 142.501 158.708C131.182 170.016 117.576 174.908 97.0135 175.059C74.2042 174.89 56.9538 167.575 45.7381 153.317C35.2355 139.966 29.8077 120.682 29.6052 96C29.8077 71.3178 35.2355 52.0336 45.7381 38.6827C56.9538 24.4249 74.2039 17.11 97.0132 16.9405C119.988 17.1113 137.539 24.4614 149.184 38.788C154.894 45.8136 159.199 54.6488 162.037 64.9503L178.184 60.6422C174.744 47.9622 169.331 37.0357 161.965 27.974C147.036 9.60668 125.202 0.195148 97.0695 0H96.9569C68.8816 0.19447 47.2921 9.6418 32.7883 28.0793C19.8819 44.4864 13.2244 67.3157 13.0007 95.9325L13 96L13.0007 96.0675C13.2244 124.684 19.8819 147.514 32.7883 163.921C47.2921 182.358 68.8816 191.806 96.9569 192H97.0695C122.03 191.827 139.624 185.292 154.118 170.811C173.081 151.866 172.51 128.119 166.26 113.541C161.776 103.087 153.227 94.5962 141.537 88.9883ZM98.4405 129.507C88.0005 130.095 77.1544 125.409 76.6196 115.372C76.2232 107.93 81.9158 99.626 99.0812 98.6368C101.047 98.5234 102.976 98.468 104.871 98.468C111.106 98.468 116.939 99.0737 122.242 100.233C120.264 124.935 108.662 128.946 98.4405 129.507Z"></path></svg>`,
                        url: "https://www.threads.net/@inovuslabs"
                    },

                ],
                deviceWidth: null,
                isMobile: false,
            }
        },
        async created() {
            const posts = await getSocialPosts();

            this.instagramPosts = posts.instagram;
            this.linkedinPosts = posts.linkedin;
            this.youtubePosts = posts.youtube;
            this.twitterPosts = posts.twitter;
            this.threadsPosts = posts.threads;
        },
        methods: {
            checkDeviceWidth() {
                this.deviceWidth = window.innerWidth;
                if (this.deviceWidth < 768) {
                    this.isMobile = true;
                } else {
                    this.isMobile = false;
                }
            },
        },
        mounted() {
            this.checkDeviceWidth();
            window.addEventListener("resize", this.checkDeviceWidth);
        },
    }
</script>
