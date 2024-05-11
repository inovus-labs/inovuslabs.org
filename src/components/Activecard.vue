<template>
    <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 fit-content">
        <div class="p-5 flex flex-col justify-between">
            <h5 class="mb-2 text-xl font-bold text-gray-900 dark:text-white" :class="showReadMore ? 'h-custom-ellipsis' : ''">{{ data.title }}</h5>
            <div class="flex flex-col gap-2">
                <p id="project_description" class="font-normal text-gray-700 dark:text-gray-400" :class="showReadMore ? 'p-custom-ellipsis' : ''">{{ data.description }}</p>

                <div class="flex items-center gap-2 mb-2 align-middle text-align-center">
                    <span class="bg-green-100 text-green-800 px-2.5 py-0.5 rounded text-xs font-medium w-max">
                        {{ formatDate(nearestDate, true) }}
                    </span>
                    <span v-if="isCompleted" class="bg-green-100 text-green-800 px-2.5 py-0.5 rounded text-xs font-medium w-max">Completed</span>
                <span v-else class="bg-red-100 text-red-800 px-2.5 py-0.5 rounded text-xs font-medium w-max">In Progress</span>
                </div>
                
            </div>

            <div class="flex justify-between mt-5 gap-2 w-full">
                <button id="read_more" @click="showReadMore = !showReadMore" class="items-center px-3 py-2 text-sm font-medium text-white bg-primary rounded hover:bg-secondary dark:bg-blue-600 w-1/2 text-center">
                    {{ showReadMore ? 'Read More' : 'Read Less' }}
                </button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Activecard',
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
    computed: {
        isCompleted() {
            const currentDate = new Date();
            const endDate = this.nearestDate;
            if (Array.isArray(endDate)) {
                return endDate.every(date => new Date(date) < currentDate);
            } else {
                return new Date(endDate) < currentDate;
            }
        },
        nearestDate() {
            const currentDate = new Date();
            const dates = this.data.date.flat();
            const sortedDates = dates.sort((a, b) => {
                const dateA = new Date(a);
                const dateB = new Date(b);
                return dateA - dateB;
            });
            const nearestDate = sortedDates.find(date => new Date(date) >= currentDate);
            return nearestDate || sortedDates[sortedDates.length - 1];
        }
    },
    methods: {
        formatDate(date, showYear) {
            let dateObj = new Date(date);
            let month = dateObj.toLocaleString('default', { month: 'short' });
            let day = dateObj.getDate().toString().padStart(2, '0');
            let year = dateObj.getFullYear();
            if (showYear) {
                return `${day} ${month} ${year}`;
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
.fit-content {
    height: fit-content;
}
</style>