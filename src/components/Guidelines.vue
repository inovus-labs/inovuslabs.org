
<template>
    <div class="p-8 border rounded-lg fit-content">

        <div class="flex items-center justify-center mb-4">
            <img :src="item.image" :alt="item.title" class="w-96 h-96 mb-4" />
        </div>

        <h3 class="flex items-center mb-4 text-lg font-bold text-gray-900 dark:text-white uppercase">
            <svg class="flex-shrink-0 font-semibold mr-2 w-6 h-6 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd"></path></svg>
            {{ item.title }}
        </h3>

        <div :class="showReadMore ? 'custom-ellipsis' : ''" class="pl-7">
            <ol class="list-decimal list-outside">
                <template v-for="desc in item.description" :key="desc">
                    <li class="text-gray-500 dark:text-gray-400">{{ desc }}</li>
                </template>
            </ol>
        </div>

        <div class="flex justify-end mt-5 gap-2 w-full">
            <button id="read_more" @click="showReadMore = !showReadMore" class="w-1/3 items-center px-3 py-2 text-sm font-medium text-white bg-primary rounded hover:bg-blue-500 dark:bg-blue-600 w-1/2 text-center">
                {{ showReadMore ? 'Read More' : 'Read Less' }}
            </button>
        </div>

    </div>
</template>


<script>
    export default {
        name: 'Guidelines',
        components: {
        },
        props: {
            item: {
                type: Object,
                required: true
            },
            showReadMore: {
                type: Boolean,
                default: false
            }
        },
    }
</script>


<style scoped>
    .custom-ellipsis {
        display: -webkit-box;
        -webkit-line-clamp: 8;
        -webkit-box-orient: vertical;
        overflow: hidden;
        height: 195px;
    }
    .fit-content {
        height: fit-content;
    }
</style>