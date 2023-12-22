
<template>

    <div class="flex flex-col items-center justify-center">

        <!-- <div class="flex items-center justify-center w-full lg:w-2/3 mb-6">
            <h1 class="text-3xl font-bold text-gray-700">Component Search Engine</h1>
        </div> -->

        <div class="flex items-center lg:w-2/3 w-full justify-center">
            
            <div class="relative w-full">

                <div class="relative">
                    <input type="text" class="w-full px-6 py-3 text-gray-500 placeholder-gray-400 border border-r-transparent rounded-l-full border-gray-300 focus:outline-none focus:ring-0 focus:border-primary" placeholder="Search for a component..." v-model="search" @input="openSuggestions = true" />
                    
                    <template v-if="search.length > 0">
                        <button class="absolute top-0 right-0 mt-3 mr-4" @click="clearSearch">
                            <svg class="w-6 h-6 text-gray-400 cursor-pointer hover:text-gray-500" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" stroke="currentColor" viewBox="0 0 24 24">
                                <path d="M6 18L18 6M6 6l12 12"></path>
                            </svg>
                        </button>
                    </template>

                </div>


                <template v-if="openSuggestions && suggestions.length > 0">
                    <div class="absolute z-10 bg-white w-full rounded-t-none shadow-lg border border-gray-300">
                        <ul class="max-h-64 overflow-y-auto">

                            <template v-for="(suggestion, index) in suggestions">
                                <li class="px-6 py-3 border-b border-gray-300 hover:bg-gray-100">
                                    <button class="flex items-center w-full focus:outline-none" @click="selectSuggession(suggestion)">
                                        <img src="https://www.arduino.cc/en/uploads/Trademark/ArduinoCommunityLogo.png" class="h-8 mr-3" alt="Arduino Logo" />
                                        <span class="text-gray-500">{{ suggestion }}</span>
                                    </button>
                                </li>
                            </template>

                        </ul>
                    </div>
                </template>

            </div>

            <button class="lg:w-44 bg-primary hover:bg-blue-500 text-white font-medium py-3 px-6 rounded-r-full border border-primary hover:border-blue-500">Search</button>

        </div>

        <!-- <div class="flex items-center justify-center w-full lg:w-2/3 mt-6">
            <p class="text-gray-500">This functionality is currently a work in progress and cannot be accessed at the moment.</p>
        </div> -->

    </div>


</template>


<script>
    import { SearchComponent } from "@/API/index.js";

    export default {
        name: 'SearchPanel',
        data() {
            return {
                openSuggestions: false,
                search: '',
                suggestions: []
            }
        },

        methods: {
            
            selectSuggession(suggestion) {
                console.log(suggestion);
                this.openSuggestions = false;
            },

            async getSearchResults() {
                if (this.search.length > 0) {
                    this.suggestions = await SearchComponent(this.search);
                } else {
                    this.suggestions = [];
                }
            },

            clearSearch() {
                this.search = '';
                this.openSuggestions = false;
            }

        },

        watch: {
            search() {
                this.getSearchResults();
            }
        }
        
    }
</script>


<style scoped>

    /* custom scrollbar */
    ::-webkit-scrollbar {
        width: 8px;
    }

    ::-webkit-scrollbar-track {
        background: #f1f1f1;
    }

    ::-webkit-scrollbar-thumb {
        background: #4CA3FF;
        border-radius: 4px;
        height: 50px;
    }

    ::-webkit-scrollbar-thumb:hover {
        background: #1586ff;
    }



</style>