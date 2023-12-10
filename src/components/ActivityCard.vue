<template>

    <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <img class="rounded-t-lg h-55 w-full" :src="data.thumbnail" :alt="data.title" />
        
        <div class="p-5 flex flex-col justify-between">
            
            <h5 class="mb-2 text-xl font-bold text-gray-900 dark:text-white" :class="showReadMore ? 'h-custom-ellipsis' : ''">{{ data.title }}</h5>
            
            <div class="flex flex-col gap-2">
                <p id="project_description" class="font-normal text-gray-700 dark:text-gray-400" :class="showReadMore ? 'p-custom-ellipsis' : ''">{{ data.description }}</p>

                <div class="flex items-center gap-2 mb-2 align-middle text-align-center">
                    <template v-for="date in data.date">

                        <template v-if="data.date.length === 1">
                            <span class="bg-green-100 text-green-800 px-2.5 py-0.5 rounded text-xs font-medium w-max">
                                {{ formatDate(date, true) }}
                            </span>
                        </template>

                        <template v-if="data.date.length === 2">
                            
                            <template v-if="Array.isArray(date)">
                                <template v-for="dt in date">
                                    <span class="bg-green-100 text-green-800 px-2.5 py-0.5 rounded text-xs font-medium w-max">
                                        {{ formatDate(dt, false) }}
                                    </span>
                                    <span v-if="date.indexOf(dt) === 0" class="text-gray-400 text-xs font-medium w-max">
                                        to
                                    </span>
                                </template>
                                <span class="text-gray-400 text-xs font-medium w-max">and</span>
                            </template>

                            <template v-else>
                                <span class="bg-green-100 text-green-800 px-2.5 py-0.5 rounded text-xs font-medium w-max">
                                    {{ formatDate(date, true) }}
                                </span>
                                <span v-if="data.date.indexOf(date) === 0" class="text-gray-400 text-xs font-medium w-max">
                                    to
                                </span>
                            </template>

                        </template>

                    </template>
                </div>
            </div>

            <div class="flex justify-between mt-5 gap-2 w-full">
                <button id="read_more" @click="showReadMore = !showReadMore" class="items-center px-3 py-2 text-sm font-medium text-white bg-blue-700 rounded hover:bg-blue-800 dark:bg-blue-600 w-1/2 text-center">
                    {{ showReadMore ? 'Read More' : 'Read Less' }}
                </button>

                <!-- <template v-if="data.url">
                    <a :href="data.url.link" target="_blank" class="items-center px-3 py-2 text-sm font-medium text-gray-700 border hover:bg-gray-100 rounded border-gray-700 w-1/2 text-center">
                        {{ data.tags.includes('Software') ? data.url.type === "source" ? 'GitHub Repo' : 'Live Demo' : '' }}
                    </a>
                </template> -->
                
            </div>

        </div>
    </div>

</template>

<script>
    export default {
        name: 'ActivityCard',
        props: {
            data: {
                type: Object,
                required: true
            },
            showReadMore: {
                type: Boolean,
                default: false
            }
        },
        methods: {
            formatDate(date, showYear) {
                let dateObj = new Date(date);
                let month = dateObj.toLocaleString('default', { month: 'short' });
                let day = dateObj.getDate().toString().padStart(2, '0');
                let year = dateObj.getFullYear();

                if(year) {
                
                    if(day) {
                        return showYear ? `${day} ${month} ${year}` : `${day} ${month}`;
                    } else {
                        return showYear ? `${month} ${year}` : `${month}`;
                    }

                } else {
                    return `${day} ${month}`;
                }

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
</style>