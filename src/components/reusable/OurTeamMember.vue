<template>

    <section class="bg-white dark:bg-gray-900">
        <div class="px-4 max-w-screen-xl lg:px-6">
            <div class="max-w-screen-lg text-gray-500 sm:text-lg dark:text-gray-400">
                <div
        class="relative w-full max-w-2xl flex flex-col items-start space-y-4 sm:flex-row sm:space-y-0 sm:space-x-6 p-4 border-gray-400 dark:border-gray-400 shadow-lg rounded-lg">

        <div class="w-full flex justify-center sm:justify-start sm:w-auto">
            <img class="object-cover w-32 h-32 mt-3 mr-3 rounded-full" :src="data.avatar" :alt="data.name">
        </div>

        <div class="w-full sm:w-auto flex flex-col items-center sm:items-start">

            <p class="font-display mb-1 text-2xl text-primary font-bold dark:text-gray-200" itemprop="author">
                {{ data.name }}
            </p>
            <p class="font-display mb-2 text-lg font-semibold dark:text-gray-200" itemprop="author">
                {{ data.position }}
            </p>


            <!-- Add discription -->
            <!-- <div class="mb-4 text-sm text-gray-400">
                           <p>{{ data.description.split(' ').slice(0, 6).join(' ') }}{{ data.description.split(' ').length > 10 ? '...' : '' }}</p>
                       </div> -->
            

        <ul class="flex justify-center mt-4 space-x-4">

            <!--Instagram-->
                <li>
                    <a :href="data.social.instagram" class="hover:text-gray-900 dark:hover:text-white dark:text-gray-300">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="24" viewBox="0 0 16 16" onmouseover="this.querySelector('path').setAttribute('fill', 'black');" onmouseout="this.querySelector('path').setAttribute('fill', 'url(#instagramGradient)');">
                            <defs>
                                <linearGradient id="instagramGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                    <stop offset="0%" style="stop-color:#FEDA77;stop-opacity:1" />
                                    <stop offset="24%" style="stop-color:#F58529;stop-opacity:1" />
                                    <stop offset="51%" style="stop-color:#DD2A7B;stop-opacity:1" />
                                    <stop offset="78%" style="stop-color:#8134AF;stop-opacity:1" />
                                    <stop offset="100%" style="stop-color:#515BD4;stop-opacity:1" />
                                </linearGradient>
                            </defs>
                            <path fill="url(#instagramGradient)" d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334"/>
                        </svg>
                    </a>
                </li>
                
            <!--Github-->
                <li>
                    <a :href="data.social.github " class="text-gray-900 hover:text-gray-900 dark:hover:text-white dark:text-gray-300">
                        <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd" /></svg>
                    </a>
                </li>

            <!--LinkedIn-->
            <li> 
                <a :href="data.social.linkedin" class="group">
                    <svg class="w-6 h-6" viewBox="0 0 26 20">
                        <g transform="scale(0.24)" class="group-hover:hidden">
                            <!-- Default state -->
                            <rect width="90" height="90" fill="#0077B5" />
                            <path d="M20.485 29.151c4.74 0 7.691-3.121 7.691-7.021-0.088-3.988-2.95-7.022-7.601-7.022-4.65 0-7.69 3.034-7.69 7.022 0 3.9 2.95 7.021 7.512 7.021h0.088zM27.282 75.339v-40.64H13.688v40.64h13.594z" fill="#FFFFFF"/>
                            <path d="M34.804 75.339h13.594V52.644c0-1.215 0.088-2.428 0.447-3.296 0.983-2.427 3.219-4.94 6.975-4.94 4.919 0 6.887 3.727 6.887 9.19v21.741h13.592V52.037c0-12.483-6.706-18.291-15.65-18.291-7.333 0-10.553 4.073-12.342 6.847h0.091v-5.894H34.804v29.315z" fill="#FFFFFF"/>
                        </g>
                        <g transform="scale(0.24)" class="hidden group-hover:block">
                            <!-- Hover state -->
                            <path d="M20.485 29.151c4.74 0 7.691-3.121 7.691-7.021-0.088-3.988-2.95-7.022-7.601-7.022-4.65 0-7.69 3.034-7.69 7.022 0 3.9 2.95 7.021 7.512 7.021h0.088zM27.282 75.339v-40.64H13.688v40.64h13.594z" fill="#000000"/>
                            <path d="M34.804 75.339h13.594V52.644c0-1.215 0.088-2.428 0.447-3.296 0.983-2.427 3.219-4.94 6.975-4.94 4.919 0 6.887 3.727 6.887 9.19v21.741h13.592V52.037c0-12.483-6.706-18.291-15.65-18.291-7.333 0-10.553 4.073-12.342 6.847h0.091v-5.894H34.804v29.315z" fill="#000000"/>
                        </g>
                    </svg>
                </a>
            </li>
        </ul>

            <!-- <div class="flex gap-4">

                <a title="youtube url" href="https://www.youtube.com/@mcqmate" target="_blank"
                    rel="noopener noreferrer">
                    <svg class="h-6 w-6 dark:text-gray-300" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                        fill="none">
                        <path fill-rule="evenodd" clip-rule="evenodd"
                            d="M20.5949 4.45999C21.5421 4.71353 22.2865 5.45785 22.54 6.40501C22.9982 8.12001 23 11.7004 23 11.7004C23 11.7004 23 15.2807 22.54 16.9957C22.2865 17.9429 21.5421 18.6872 20.5949 18.9407C18.88 19.4007 12 19.4007 12 19.4007C12 19.4007 5.12001 19.4007 3.405 18.9407C2.45785 18.6872 1.71353 17.9429 1.45999 16.9957C1 15.2807 1 11.7004 1 11.7004C1 11.7004 1 8.12001 1.45999 6.40501C1.71353 5.45785 2.45785 4.71353 3.405 4.45999C5.12001 4 12 4 12 4C12 4 18.88 4 20.5949 4.45999ZM15.5134 11.7007L9.79788 15.0003V8.40101L15.5134 11.7007Z"
                            stroke="currentColor" stroke-linejoin="round"></path>
                    </svg>
                </a>

                <a title="website url" href="https://mcqmate.com/" target="_blank" rel="noopener noreferrer">
                    <svg class="h-6 w-6 dark:text-gray-300" xmlns="http://www.w3.org/2000/svg" fill="none"
                        viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418">
                        </path>
                    </svg>
                </a>

            </div> -->

        </div>

    </div>
            </div>
        </div>
    </section>

</template>

<script>
    export default {
        name: 'OurTeamMember',
        props: {
            data: {
                type: Object,
                required: true
            }
        }
    }
</script>


