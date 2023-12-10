<template>

    <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 fit-content">
        
        <div class="relative rounded-t-lg overflow-hidden border border-gray-200 dark:border-gray-800" :class="showReadMore ? 'h-44' : ''">
            <div class="relative h-full overflow-hidden transform transition duration-500 hover:scale-105">
                <img class="h-full object-cover w-full" :src="data.thumbnail" :alt="data.title" />
            </div>
        </div>

        
        <div class="p-5 flex flex-col justify-between">
            
            <h5 class="mb-2 text-xl font-bold text-gray-900 dark:text-white" :class="showReadMore ? 'h-custom-ellipsis' : ''">{{ data.title }}</h5>
            
            <div class="flex flex-col gap-2">
                <p id="project_description" class="font-normal text-gray-700 dark:text-gray-400" :class="showReadMore ? 'p-custom-ellipsis' : ''">{{ data.description }}</p>
                <div class="flex items-center gap-2 mb-2 align-middle text-align-center">
                    <span class="text-sm font-medium text-gray-900 dark:text-gray-100">Status:</span>
                    <span :class="data.status === 'Completed' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'" class="inline-flex items-center px-2.5 py-0.5 rounded text-xs font-medium capitalize">
                        {{ data.status === 'Completed' ? 'Completed' : 'In Progress' }}
                    </span>
                </div>
            </div>

            <div class="flex justify-between mt-5 gap-2 w-full">
                <button id="read_more" @click="showReadMore = !showReadMore" class="items-center px-3 py-2 text-sm font-medium text-white bg-blue-700 rounded hover:bg-blue-800 dark:bg-blue-600 w-1/2 text-center">
                    {{ showReadMore ? 'Read More' : 'Read Less' }}
                </button>

                <template v-if="data.url">
                    <a :href="data.url.link" target="_blank" class="items-center px-3 py-2 text-sm font-medium text-gray-700 border hover:bg-gray-100 rounded border-gray-700 w-1/2 text-center">
                        {{ data.tags.includes('Software') ? data.url.type === "source" ? 'GitHub Repo' : 'Live Demo' : '' }}
                    </a>
                </template>
                
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
    .p-custom-ellipsis {
        display: -webkit-box;
        -webkit-line-clamp: 4;
        -webkit-box-orient: vertical;
        overflow: hidden;
        height: 96px;
    }
    .h-custom-ellipsis {
        display: -webkit-box;
        -webkit-line-clamp: 1;
        -webkit-box-orient: vertical;
        overflow: hidden;
    }
    .fit-content {
        height: fit-content;
    }
</style>