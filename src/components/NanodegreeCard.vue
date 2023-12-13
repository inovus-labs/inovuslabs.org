
<template>
    
    <article class="h-full bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
        
        <div class="p-6 h-full relative overflow-hidden rounded-lg">
            
            <template v-if="!data.status">
                <div class="absolute h-full inset-0 bg-white opacity-75 m-auto rounded-lg cursor-not-allowed"></div>
            </template>


            <div class="flex justify-between items-center mb-5 text-gray-500">
                <span class="bg-primary text-white text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-primary-200 dark:text-primary-800">
                    {{ data.level }}
                </span>
                <span class="text-white text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded" :class="data.status ? 'bg-green-400' : 'bg-gray-500'">
                    {{ data.status  ? 'Enroll Now' : 'Coming Soon' }}
                </span>
            </div>
            <h2 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"><a href="#">
                {{ data.title }}
            </a></h2>
            <p class="mb-5 font-light text-gray-500 dark:text-gray-400">
                {{ data.description ? (data.description.length > 200 ? data.description.substring(0, 200) + '...' : data.description) : (data.excerpt.length > 200 ? data.excerpt.substring(0, 200) + '...' : data.excerpt) }}
            </p>
    
            <div class="flex justify-between items-center">
                <div></div>
                <button class="inline-flex items-center font-medium text-primary dark:text-primary-500 hover:underline" @click="$emit('openModal', data)">
                    Read more
                    <svg class="ml-2 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                </button>
            </div>
            
        </div>

    </article> 

</template>


<script>
    export default {
        name: 'NanodegreeCard',
        
        data() {
            return {}
        },

        props: {
            data: {
                type: Object,
                required: true
            }
        },
    }
</script>