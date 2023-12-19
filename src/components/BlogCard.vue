<template>


    <article class="p-6 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
        <div class="flex justify-between items-center mb-5 text-gray-500">
            <span class="bg-primary text-white text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-primary-200 dark:text-primary-800">
                {{ data.tags[0].name }}
            </span>
            <span class="text-sm">{{ getFormattedDate(data.published_at) }}</span>
        </div>
        <h2 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white" :class="!isMobile ? 'custom-ellipsis' : ''"><a :href="data.url" target="_blank">{{ data.title }}</a></h2>
        <p class="mb-5 font-light text-gray-500 dark:text-gray-400">{{ data.custom_excerpt ? (data.custom_excerpt.length > 135 ? data.custom_excerpt.substring(0, 135) + '...' : data.custom_excerpt) : (data.excerpt.length > 135 ? data.excerpt.substring(0, 135) + '...' : data.excerpt) }}</p>
        <div class="flex justify-between items-center">
            <div class="flex items-center space-x-4">
                <img v-if="data.authors[0].profile_image" class="w-7 h-7 rounded-full" :src="data.authors[0].profile_image" alt="Avatar of Jonathan Reinink">
                
                <div class="flex flex-col">
                    <p class="text-sm font-bold text-gray-900 dark:text-white">{{ data.authors[0].name }}</p>
                    <span class="text-sm text-gray-500 dark:text-white">{{ data.reading_time }} min read</span>
                </div>
                

            </div>
            <a :href="data.url" target="_blank" class="inline-flex items-center font-medium text-primary dark:text-primary-500 hover:underline">
                Read more
                <svg class="ml-2 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
            </a>
        </div>
    </article> 


</template>


<script>
    
    import * as timeago from 'timeago.js';

    export default {
        name: 'BlogCard',
        props: {
            data: {
                type: Object,
                required: true
            }
        },
        data() {
            return {
                timeago: timeago,
                isMobile: false
            }
        },
        methods: {
            getFormattedDate(date) {
                return this.timeago.format(date);
            },
            checkMobile() {
                if (window.innerWidth <= 768) {
                    this.isMobile = true;
                } else {
                    this.isMobile = false;
                }
            }
        },
        mounted() {
            this.checkMobile();
            window.addEventListener('resize', this.checkMobile);
        },
        beforeDestroy() {
            window.removeEventListener('resize', this.checkMobile);
        },
    }
</script>


<style scoped lang="scss">
    .custom-ellipsis {
        display: -webkit-box;
        -webkit-line-clamp: 1;
        -webkit-box-orient: vertical;  
        overflow: hidden;
    }
</style>