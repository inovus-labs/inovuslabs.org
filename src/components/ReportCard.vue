<template>

    <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 fit-content">
        <a :href="data.url" target="_blank" rel="noopener noreferrer">
        
            <div class="relative rounded-t-lg overflow-hidden border border-gray-200 dark:border-gray-800 h-44">
                <div class="relative h-full overflow-hidden transform transition duration-500 hover:scale-105">
                    <img class="h-full object-cover w-full" src="../../public/assets/illustrations/reports/_report.svg" :alt="data.title" />
                </div>
            </div>
            
            
            <div class="p-5 flex flex-col justify-between">
                <h5 class="mb-2 text-xl font-bold text-gray-900 dark:text-white">{{ data.title }}</h5>
                
                <div class="flex flex-col gap-2">
                    <div class="flex items-center gap-2 mb-2 align-middle text-align-center">
                        <span class="text-sm font-medium text-gray-900 dark:text-gray-100">{{ data.year }}</span>
                    </div>
                </div>
            </div>
                
        </a>
    </div>

</template>

<script>
    export default {
        name: 'ProjectCard',
        props: {
            data: {
                type: Object,
                required: true
            }
        }
    }
</script>