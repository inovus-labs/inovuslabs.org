<template>

    <div class="max-w-sm bg-white fit-content border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <img class="rounded-t-lg h-55 w-full" :src="data.thumbnail" :alt="data.title" />
        
        <div class="p-5 flex flex-col justify-between">
            
            <h5 class="mb-2 text-xl font-bold text-gray-900 dark:text-white" :class="showReadMore ? 'h-custom-ellipsis' : ''">{{ data.title }}</h5>
            
            <div class="flex flex-col gap-2">

                <div class="flex items-center gap-2 mb-2 align-middle text-align-center">
                    <span class="bg-green-100 text-green-800 px-2.5 py-0.5 rounded text-xs font-medium w-max">
                        {{ data.date }}
                    </span>
                </div>
            </div>

        </div>
    </div>

</template>

<script>
    export default {
        name: 'ReccuringEventsCard',
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