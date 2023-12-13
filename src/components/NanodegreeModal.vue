
<template>

    <div class="fixed inset-0 z-50 overflow-hidden" :class="show ? 'block' : 'hidden'">
        <div class="absolute flex items-center justify-center h-full inset-0 bg-gray-500 bg-opacity-75 transition-opacity" @click.self="closeModal" @keydown.escape="closeModal">

            <div id="container" class="relative bg-white rounded-lg shadow dark:bg-gray-700 max-w-7xl sm:w-full mx-4 overflow-y-auto" style="max-height: 80vh;">

                <div class="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                    <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
                        {{ data.title }}
                    </h3>

                    <template v-if="!isMobile">
                        <button type="button" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" @click="closeModal">
                            <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                            </svg>
                            <span class="sr-only">Close modal</span>
                        </button>
                    </template>
                </div>


                <div>

                    <div class="p-4 md:p-5 space-y-4">
                        <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400 text-justify">
                            {{ data.description }}
                        </p>
                    </div>
                    
    
                    <template v-if="data.syllabus && showSyllabus">
                        <div class="p-4 md:p-5">



                            <template v-for="chapter in data.syllabus">
                                <div :id="'accordion-collapse-' + chapter.id">

                                    <h2 :id="'accordion-collapse-heading-' + chapter.id">
                                        <button type="button" class="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-gray-200 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3" :class="chapter.id == 1 ? 'rounded-t-xl' : '', chapter.id == data.syllabus.length ? 'rounded-b-xl' : 'border-b-0'" @click="openAccordion(chapter.id)">
                                        <span class="text-left">{{ chapter.title }}</span>
                                        <svg class="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6" :id="'data-accordion-icon-' + chapter.id">
                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5"/>
                                        </svg>
                                        </button>
                                    </h2>

                                    <div :id="'accordion-collapse-body-' + chapter.id" class="hidden">
                                        <div class="p-5 border border-b-0 border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900">
                                            
                                            <div :class="isMobile ? '' : 'border rounded p-4' " class="bg-white">
                                                <p v-if="!isMobile" class="underline pb-3 text-gray-500 dark:text-gray-400">Areas to explore</p>
                                                <ol class="list-decimal" :class="isMobile ? 'list-outside pl-6' : 'list-inside'">
                                                    <template v-for="lesson in chapter.lessons">
                                                        <li class="text-gray-400 dark:text-gray-400 py-1">{{ lesson }}</li>
                                                    </template>
                                                </ol>
                                            </div>


                                            <template v-if="chapter.resources && !isMobile">
                                                <div class="border p-5 pb-3 mt-3 rounded bg-white">
                                                    <p class="underline pb-3 text-gray-500 dark:text-gray-400">Basic Resources</p>
                                                    <div class="flex justify-between">
                                                        <template v-for="resource in chapter.resources">
        
                                                            <YoutubeCard
                                                                :url="resource"
                                                            />
        
                                                        </template>
                                                    </div>
                                                </div>
                                            </template>


                                            <template v-if="chapter.tasks && !isMobile">
                                                <div class="mt-4 p-4 rounded border bg-white">
                                                    
                                                    <p class="underline pb-3 text-gray-500 dark:text-gray-400">Tasks</p>

                                                    <div class="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                                                        <template v-for="task in chapter.tasks">
                                                            <div class="border rounded flex items-center justify-center gap-2 align-middle text-center bg-gray-50">
                                                                <p class="text-gray-500 dark:text-gray-400 text-sm p-3 text-center">{{ task.title }}</p>
                                                            </div>
                                                        </template>
                                                    </div>
    
                                                </div>
                                            </template>

                                        </div>
                                    </div>
                                    
                                </div>
                            </template>
                            


                            <!-- <template v-if="data.projects">
                                <div class="my-4 border rounded-xl p-4">
                                    <div>

                                        <p class="underline pb-3 text-gray-500 dark:text-gray-400">Projects</p>

                                        <div class="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
                                            <template v-for="project in data.projects">

                                                <div class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                                                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{{ project.title }}</h5>
                                                    <p class="font-normal text-gray-700 dark:text-gray-400">{{ project.description.length > 135 ? data.description.substring(0, 135) + '...' : project.description }}</p>
                                                    <p class="font-normal text-gray-700 dark:text-gray-400">{{ project.description }}</p>
                                                </div>

                                            </template>
                                        </div>
                                        
                                    </div>
                                </div>
                            </template> -->



                        </div>
                    </template>

                </div>


                <div class="flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600">
                    <button type="button" class="text-white bg-primary hover:bg-blue-500 font-medium rounded text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 cursor-not-allowed opacity-50" disabled>Enroll Now</button>
                    <button type="button" class="ms-3 text-gray-500 bg-white hover:bg-gray-100 rounded border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600" @click="showSyllabus = !showSyllabus">
                        <span v-if="showSyllabus">Hide</span>
                        <span v-else>Show</span>
                        Syllabus
                    </button>
                </div>
    
            </div>

        </div>



        
    </div>

</template>


<script>
    import YoutubeCard from "@/components/Socials/YoutubeCard.vue";

    export default {
        name: 'NanodegreeModal',

        components: {
            YoutubeCard
        },
        
        data() {
            return {
                showModal: false,
                modalData: {},
                isMobile: false,
                showSyllabus: false
            }
        },

        props: {
            data: {
                type: Object,
                required: true
            },
            show: {
                type: Boolean,
                required: true
            }
        },

        methods: {
            closeModal() {
                this.$emit('closeModal');
            },
            checkMobile() {
                if (window.innerWidth <= 768) {
                    this.isMobile = true;
                } else {
                    this.isMobile = false;
                }
            },
            openAccordion(id) {
                const accordionBody = document.getElementById('accordion-collapse-body-' + id);
                const accordionIcon = document.getElementById('data-accordion-icon-' + id);

                if (accordionBody.classList.contains('hidden')) {
                    accordionBody.classList.remove('hidden');
                    accordionIcon.classList.remove('rotate-180');
                } else {
                    accordionBody.classList.add('hidden');
                    accordionIcon.classList.add('rotate-180');
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


<style>

    #container {
        -ms-overflow-style: none;  /* Internet Explorer 10+ */
        scrollbar-width: none;  /* Firefox */
    }
    #container::-webkit-scrollbar { 
        display: none;  /* Safari and Chrome */
    }

</style>