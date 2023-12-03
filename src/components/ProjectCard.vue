<template>

    <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <img class="rounded-t-lg h-44 w-full" :src="data.thumbnail" :alt="data.title" />
        
        <div class="p-5 flex flex-col justify-between">
            
            <h5 class="mb-2 text-xl font-bold text-gray-900 dark:text-white">{{ data.title }}</h5>
            
            <div class="flex flex-col gap-2">
                <p id="project_description" class="font-normal text-gray-700 dark:text-gray-400" :class="showReadMore ? 'custom-ellipsis' : ''">{{ data.description }}</p>
                <div class="flex items-center gap-2 mb-2 align-middle text-align-center">
                    <span class="text-sm font-medium text-gray-900 dark:text-gray-100">Status:</span>
                    <span :class="data.status === 'Completed' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'" class="inline-flex items-center px-2.5 py-0.5 rounded text-xs font-medium capitalize">
                        {{ data.status === 'Completed' ? 'Completed' : 'In Progress' }}
                    </span>
                </div>
            </div>

            <div class="flex justify-between mt-5 gap-2">
                <button id="read_more" @click="showReadMore = !showReadMore" class="items-center px-3 py-2 text-sm font-medium text-white bg-blue-700 rounded hover:bg-blue-800 dark:bg-blue-600 w-full text-center">
                    {{ showReadMore ? 'Read More' : 'Read Less' }}
                </button>

                <a href="#" class="items-center px-3 py-2 text-sm font-medium text-white bg-gray-700 rounded hover:bg-gray-800 dark:bg-gray-600 w-full text-center">
                    View Demo
                </a>
            </div>

        </div>
    </div>

</template>

<script>
    export default {
        name: 'ProjectCard',
        props: {
            data: {
                type: Object,
                required: true
            },
            showReadMore: {
                type: Boolean,
                default: false
            }
        }
    }
</script>


<style scoped>
    .custom-ellipsis {
        display: -webkit-box;
        -webkit-line-clamp: 5;
        -webkit-box-orient: vertical;
        overflow: hidden;
    }
</style>