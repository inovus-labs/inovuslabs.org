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
            
            <li>
                <a :href="data.social.instagram " class="hover:text-gray-900 dark:hover:text-white dark:text-gray-300" >
                    <svg viewBox="0 0 512 512" width="24" height="24" xmlns="http://www.w3.org/2000/svg">
    <!-- Background gradient with border radius -->
    <defs>
        <linearGradient id="bg-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style="stop-color:#F58529; stop-opacity:1" />
            <stop offset="25%" style="stop-color:#DD2A7B; stop-opacity:1" />
            <stop offset="50%" style="stop-color:#8134AF; stop-opacity:1" />
            <stop offset="75%" style="stop-color:#515BD4; stop-opacity:1" />
            <stop offset="100%" style="stop-color:#515BD4; stop-opacity:1" />
        </linearGradient>
        <mask id="border-mask">
            <rect x="0" y="0" width="512" height="512" rx="80" fill="white" />
        </mask>
    </defs>
    <rect x="0" y="0" width="512" height="512" fill="url(#bg-gradient)" mask="url(#border-mask)" />

    <!-- Main content (icons) with increased stroke width -->
    <g fill="#FFF" stroke="#FFF" stroke-width="10">
        <path d="M349.33,69.33h-186.67c-51.2,0-93.33,42.13-93.33,93.33v186.67c0,51.2,42.13,93.33,93.33,93.33h186.67
            c51.2,0,93.33-42.13,93.33-93.33v-186.67c0-51.2-42.13-93.33-93.33-93.33z M464,349.33c0,63.4-51.27,114.67-114.67,114.67h-186.67
            c-63.4,0-114.67-51.27-114.67-114.67v-186.67c0-63.4,51.27-114.67,114.67-114.67h186.67c63.4,0,114.67,51.27,114.67,114.67v186.67
            h0z"
        />
        <path d="M256,165.33c-49.76,0-90.67,40.91-90.67,90.67s40.91,90.67,90.67,90.67s90.67-40.91,90.67-90.67
            S305.76,165.33,256,165.33z M256,322.67c-36.97,0-66.67-29.7-66.67-66.67s29.7-66.67,66.67-66.67s66.67,29.7,66.67,66.67
            S292.97,322.67,256,322.67z"
        />
        <circle cx="390.67" cy="121.33" r="20.27" />
    </g>
</svg>

                </a>
            </li>
            <li>
                <a :href="data.social.github " class="text-gray-900 hover:text-gray-900 dark:hover:text-white dark:text-gray-300">
                    <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd" /></svg>
                </a>
            </li>
            <li>
                <a :href="data.social.linkedin" class="group">
                    <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 26 20" >
                        <g transform="scale(0.24)">
                        <!-- Default state -->
                        <rect width="90" height="90" fill="#0077B5" />
                        <path d="M20.485 29.151c4.74 0 7.691-3.121 7.691-7.021-0.088-3.988-2.95-7.022-7.601-7.022-4.65 0-7.69 3.034-7.69 7.022 0 3.9 2.95 7.021 7.512 7.021h0.088zM27.282 75.339v-40.64H13.688v40.64h13.594z" fill="#FFFFFF"/>
                        <path d="M34.804 75.339h13.594V52.644c0-1.215 0.088-2.428 0.447-3.296 0.983-2.427 3.219-4.94 6.975-4.94 4.919 0 6.887 3.727 6.887 9.19v21.741h13.592V52.037c0-12.483-6.706-18.291-15.65-18.291-7.333 0-10.553 4.073-12.342 6.847h0.091v-5.894H34.804v29.315z" fill="#FFFFFF"/>
                        </g>
                        <g transform="scale(0.245)" class="hidden group-hover:block">
                        <!-- Hover state -->
                        <rect width="90" height="90" fill="white" />
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


