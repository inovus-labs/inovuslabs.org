<template>

    <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 w-full">
        <div class="p-5 flex flex-col">
            
            <div class="flex flex-row gap-2 mb-2">
                <template v-for="category in data.category">
                    <span class="items-center px-2.5 py-0.5 rounded text-xs font-medium" :class="tagColors[Math.floor(Math.random() * tagColors.length)] + ' dark:text-white'">
                        {{ category }}
                    </span>
                </template>
            </div>

            <h5 class="text-xl pt-2 font-bold text-gray-900 dark:text-white" :class="data.lang ? 'malayalam-font' : ''">{{ data.title }}</h5>

            <p id="project_description" class="font-normal py-3 text-gray-500 dark:text-gray-400">{{ data.description }}</p>

            <div class="flex flex-row gap-3">
                <template v-for="resource in data.resources">
                    <a :href="resource.url" target="_blank" class="justify-center items-center py-1.5 px-4 font-medium text-center text-white rounded bg-primary">
                        {{ resource.type }}
                    </a>
                </template>
            </div>

            <div class="flex flex-row gap-2 mt-3">
                <span class="text-gray-500 dark:text-gray-400 text-xs">Posted {{ getFormattedDate(data.date) }}</span>
            </div>

        </div>
    </div>

</template>

<script>
    import * as timeago from 'timeago.js';
    
    export default {
        name: 'ResourceCard',
        props: {
            data: {
                type: Object,
                required: true
            }
        },
        data() {
            return {
                tagColors: [
                    'bg-green-100 text-green-800',
                    'bg-blue-100 text-blue-800',
                    'bg-yellow-100 text-yellow-800',
                    'bg-red-100 text-red-800',
                    'bg-indigo-100 text-indigo-800',
                    'bg-pink-100 text-pink-800',
                    'bg-purple-100 text-purple-800',
                    'bg-gray-100 text-gray-800',
                ],
                timeago: timeago
            }
        },
        methods: {
            getFormattedDate(date) {
                return this.timeago.format(date);
            }
        }
    }
</script>
