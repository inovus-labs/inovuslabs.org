
<template>
    <PublicLayout>



        <section class="bg-bgPrimary">
            <div class="flex flex-col lg:flex-row w-full mx-auto max-w-screen-xl p-4 items-center justify-center lg:py-14">

            <div class="w-full lg:w-1/3 py-4 lg:py-20">
                <img class="w-full h-full" src="../../public/assets/illustrations/blog.svg" />
            </div>

            <div class="mx-auto max-w-screen-xl text-center w-full lg:w-2/3 py-4 lg:py-20">
                <h1 class="mb-4 text-4xl font-extrabold text-primary md:text-5xl lg:text-6xl">
                    Blog Odyssey: Navigating Ideas and Insights
                </h1>
                <p class="mb-8 text-lg font-normal text-secondary lg:text-xl sm:px-16 lg:px-46">
                    Dive into a world of ideas with our curated collection of blogs - where knowledge meets creativity, and every post is a journey of discovery!
                </p>
                <div class="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
                <a href="https://blog.inovuslabs.org/" target="_blank"
                    class="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded bg-primary">
                    Start reading
                    <svg class="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                    </svg>
                </a>
                <!-- <a href="#"
                    class="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-secondary rounded border border-secondary">
                    Learn more
                </a> -->
                </div>
            </div>

            </div>
        </section>




        <section class="border-b lg:p-10 p-4 my-10">
            <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
                <div class="text-gray-500 sm:text-lg dark:text-gray-400">
                    <h2 class="mb-8 text-4xl tracking-tight font-bold text-gray-900 dark:text-white">Welcome to Inovus Blogs – where words come to life! 🚀✨</h2>
                    <p class="text-justify mb-4 font-light"><a href="https://blog.inovuslabs.org/" target="_blank" class="font-medium text-primary">Inovus Blogs</a> emerged from a vision to create a dynamic space where ideas thrive and conversations flourish. Formed with the purpose of fostering a digital haven for insightful content, Inovus Blogs aims to serve as a thought-provoking platform where diverse perspectives, stories, and expertise converge. We believe in the power of words to inspire, educate, and connect.</p>
                    <p class="text-justify mb-4 font-medium">Our journey began with a commitment to providing valuable, engaging, and relevant content across a spectrum of topics. Whether it's industry insights, creative narratives, or informative pieces, Inovus Blogs is designed to be a hub where knowledge meets curiosity. We aspire to cultivate a community that not only consumes but actively participates in the exchange of ideas.</p>
                    <p class="text-justify font-medium">Looking ahead, the future of Inovus Blogs is vibrant and evolving. We are dedicated to expanding our content horizons, embracing emerging trends, and staying at the forefront of meaningful discourse. As we continue to grow, our commitment remains steadfast – to enrich, enlighten, and contribute to the ever-expanding landscape of digital content.</p>
                </div>
            </div>
        </section>



        <!-- <section class="lg:p-10 p-4 my-10"></section> -->

        <section class="lg:p-10 p-4 my-10">

            <div class="mx-auto max-w-screen-xl text-center w-full p-4 lg:mb-4">
                <h1 class="mb-4 text-2xl font-extrabold leading-none tracking-tight text-gray-900 md:text-3xl lg:text-4xl dark:text-white">
                    🌐 Dive into the minds shaping our narrative! 📖
                </h1>

                <p class="mb-6 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
                    📚 Explore the Top Authors section to discover the brilliant voices behind Inovus Blogs. From industry experts to creative minds, these authors craft the stories that inspire and inform. Join us in celebrating the diverse perspectives that make our digital space vibrant. 🌟🖋️
                </p>
            </div>


            <div class="py-8 mx-auto max-w-screen-xl text-center lg:py-12 lg:px-6">
                <div class="grid gap-8 lg:gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-end">
                    
                    <template v-for="author in authors">
                        <div class="relative rounded-lg overflow-hidden h-80 border border-gray-200 dark:border-gray-800">
                            
                            <div class="rounded-lg relative h-full overflow-hidden transform transition duration-500">
                                <img class="h-full object-cover w-full" :src="author.profile_image || default_image" :alt="author.name" />
                            </div>

                            <a :href="author.url" target="_blank">
                                <div class="absolute inset-0 bg-gray-900 bg-opacity-75 transition duration-500 ease-in-out opacity-0 hover:opacity-100 cursor-pointer">
                                    <div class="relative h-full flex flex-col justify-center items-center text-center">
                                        <div class="px-4">
                                            <h3 class="text-lg font-medium text-white mb-2">{{ author.name }}</h3>
                                            <!-- <p class="text-sm text-gray-300">{{ author.bio }}</p> -->
                                        </div>
                                    </div>
                                </div>
                            </a>

                        </div>
                    </template>
                    
                </div>  
            </div>


        </section>




        <StatsCounter :stats="blogStats" />




        <section class="lg:p-10 p-4 my-10">

            <div class="mx-auto max-w-screen-xl text-center w-full p-4 lg:mb-4">
                <h1 class="mb-4 text-2xl font-extrabold leading-none tracking-tight text-gray-900 md:text-3xl lg:text-4xl dark:text-white">
                    🌐 Featured Blog Posts 📖
                </h1>

                <p class="mb-6 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
                    From expert perspectives to personal reflections, our featured blog posts offer a diverse tapestry of knowledge and inspiration. Join us on this intellectual journey, where each click unveils a new realm of ideas waiting to be discovered.
                </p>
            </div>


            <div class="px-4 mx-auto max-w-screen-xl lg:px-6">
                <div class="grid gap-8 lg:grid-cols-2">
                    
                    <template v-for="project in projects" :key="project.id">
                        <BlogCard
                            :data="project"
                        />
                    </template>

                </div>  
            </div>

        </section>


        
    </PublicLayout>
</template>


<script>
    import BlogCard from "@/components/BlogCard.vue";
    import StatsCounter from "../components/Reusable/StatsCounter.vue";

    import PublicLayout from "@/layouts/PublicLayout.vue";

    import { getBlogPosts, getBlogAuthors } from "@/API/index.js";

    export default {
        name: 'BlogView',
        components: {
            PublicLayout,
            BlogCard,
            StatsCounter
        },

        data() {
            return {
                projects: [],
                authors: [],
                blogStats: [
                    {
                        title: "Months",
                        value: 11,
                        mode: "accurate"
                    },
                    {
                        title: "Frequent Authors",
                        value: 10,
                        mode: "approximate"
                    },
                    {
                        title: "Blogs Published",
                        value: 25,
                        mode: "approximate"
                    },
                    {
                        title: "Active Users",
                        value: 800,
                        mode: "approximate"
                    },
                    {
                        title: "Unique Views",
                        value: 5000,
                        mode: "approximate"
                    },
                    {
                        title: "Engagements",
                        value: 11600,
                        mode: "approximate"
                    }
                ],
                default_image: "/assets/no-image.png",
            }
        },

        async mounted() {
            this.projects = await getBlogPosts();
            this.authors = await getBlogAuthors();
        },
    }
</script>