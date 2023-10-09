<template>




    <nav class="bg-white">
        <div class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
            <a href="/" class="flex items-center">
                <img src="/logo.svg" class="h-10 mr-3" alt="Inovus Labs Logo" />
                <!-- <span class="self-center text-2xl font-semibold whitespace-nowrap text-secondary">Inovus Labs</span> -->
            </a>
            <button data-collapse-toggle="mega-menu-full" type="button"
                class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                aria-controls="mega-menu-full" aria-expanded="false">
                <span class="sr-only">Open main menu</span>
                <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M1 1h15M1 7h15M1 13h15" />
                </svg>
            </button>


            <div id="mega-menu-full" class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1">
                <ul class="flex flex-col mt-4 font-medium md:flex-row md:space-x-8 md:mt-0">
                    <li>
                        <a href="#"
                            class="block py-2 pl-3 pr-4 text-gray-900 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700"
                            aria-current="page">Home</a>
                    </li>
                    <li>
                        <button id="about-menu-dropdown-button" data-collapse-toggle="about-menu-dropdown"
                            class="flex items-center justify-between w-full py-2 pl-3 pr-4 font-medium text-gray-900 border-b border-gray-100 md:w-auto hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-600 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700">About
                            <svg class="w-2.5 h-2.5 ml-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                                fill="none" viewBox="0 0 10 6">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="m1 1 4 4 4-4" />
                            </svg>
                        </button>
                    </li>
                    <li>
                        <button id="initiatives-menu-dropdown-button" data-collapse-toggle="initiatives-menu-dropdown"
                            class="flex items-center justify-between w-full py-2 pl-3 pr-4 font-medium text-gray-900 border-b border-gray-100 md:w-auto hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-600 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700">Initiatives
                            <svg class="w-2.5 h-2.5 ml-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                                fill="none" viewBox="0 0 10 6">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="m1 1 4 4 4-4" />
                            </svg>
                        </button>
                    </li>
                    <li>
                        <a href="#"
                            class="block py-2 pl-3 pr-4 text-gray-900 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700">Resources</a>
                    </li>
                    <li>
                        <a href="#"
                            class="block py-2 pl-3 pr-4 text-gray-900 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700">Contact</a>
                    </li>
                </ul>
            </div>


            <div id="column-3" class="flex items-center md:order-2">
                <!-- <a href="#" class="text-secondary border border-secondary font-medium rounded text-sm px-4 py-2 md:px-5 md:py-2.5 mr-1 md:mr-2">Login</a> -->
                <a href="#" class="text-white bg-primary font-medium rounded text-sm px-4 py-2 md:px-5 md:py-2.5 mr-1 md:mr-2">Join Inovus Labs</a>
            </div>


        </div>


        <div id="about-menu-dropdown"
            class="absolute w-full bg-white border-gray-200 shadow-sm border-y dark:bg-gray-800 dark:border-gray-600 hidden">
            <div
                class="grid max-w-screen-xl px-4 py-5 mx-auto text-gray-900 dark:text-white sm:grid-cols-2 md:grid-cols-3 md:px-6">
                <ul aria-labelledby="about-menu-dropdown-button">
                    <li>
                        <a href="#" class="block p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700">
                            <div class="font-semibold">About us</div>
                            <span class="text-sm text-gray-500 dark:text-gray-400">Connect with third-party tools that
                                you're already using.</span>
                        </a>
                    </li>
                    <li>
                        <a href="#" class="block p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700">
                            <div class="font-semibold">Gallery</div>
                            <span class="text-sm text-gray-500 dark:text-gray-400">Connect with third-party tools that
                                you're already using.</span>
                        </a>
                    </li>
                </ul>
                <ul>
                    <li>
                        <a href="#" class="block p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700">
                            <div class="font-semibold">Our Team</div>
                            <span class="text-sm text-gray-500 dark:text-gray-400">Connect with third-party tools that
                                you're already using.</span>
                        </a>
                    </li>
                    <li>
                        <a href="#" class="block p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700">
                            <div class="font-semibold">News</div>
                            <span class="text-sm text-gray-500 dark:text-gray-400">Connect with third-party tools that
                                you're already using.</span>
                        </a>
                    </li>
                </ul>
                <ul class="hidden md:block">
                    <li>
                        <a href="#" class="block p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700">
                            <div class="font-semibold">Community</div>
                            <span class="text-sm text-gray-500 dark:text-gray-400">Connect with third-party tools that
                                you're already using.</span>
                        </a>
                    </li>
                    <li>
                        <a href="#" class="block p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700">
                            <div class="font-semibold">Reports (Annual / Activity)</div>
                            <span class="text-sm text-gray-500 dark:text-gray-400">Connect with third-party tools that
                                you're already using.</span>
                        </a>
                    </li>
                </ul>
            </div>
        </div>


        <div id="initiatives-menu-dropdown"
            class="absolute w-full bg-white border-gray-200 shadow-sm border-y dark:bg-gray-800 dark:border-gray-600 hidden">
            <div
                class="grid max-w-screen-xl px-4 py-5 mx-auto text-gray-900 dark:text-white sm:grid-cols-2 md:grid-cols-3 md:px-6">
                <ul aria-labelledby="initiatives-menu-dropdown-button">
                    <li>
                        <a href="#" class="block p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700">
                            <div class="font-semibold">Mini IoT Lab</div>
                            <span class="text-sm text-gray-500 dark:text-gray-400">Connect with third-party tools that
                                you're already using.</span>
                        </a>
                    </li>
                    <li>
                        <a href="#" class="block p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700">
                            <div class="font-semibold">Bootcamps / Workshops / Session</div>
                            <span class="text-sm text-gray-500 dark:text-gray-400">Connect with third-party tools that
                                you're already using.</span>
                        </a>
                    </li>
                    <li>
                        <a href="#" class="block p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700">
                            <div class="font-semibold">Nano Degree Program</div>
                            <span class="text-sm text-gray-500 dark:text-gray-400">Connect with third-party tools that
                                you're already using.</span>
                        </a>
                    </li>
                </ul>
                <ul>
                    <li>
                        <a href="#" class="block p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700">
                            <div class="font-semibold">Inovus Blogs</div>
                            <span class="text-sm text-gray-500 dark:text-gray-400">Connect with third-party tools that
                                you're already using.</span>
                        </a>
                    </li>
                    <li>
                        <a href="#" class="block p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700">
                            <div class="font-semibold">Inovus Profiles</div>
                            <span class="text-sm text-gray-500 dark:text-gray-400">Connect with third-party tools that
                                you're already using.</span>
                        </a>
                    </li>
                    <li>
                        <a href="#" class="block p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700">
                            <div class="font-semibold">Inovus Radio (Inora)</div>
                            <span class="text-sm text-gray-500 dark:text-gray-400">Connect with third-party tools that
                                you're already using.</span>
                        </a>
                    </li>
                </ul>
                <ul class="hidden md:block">
                    <li>
                        <a href="/projects" class="block p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700">
                            <div class="font-semibold">Opensource Projects</div>
                            <span class="text-sm text-gray-500 dark:text-gray-400">Connect with third-party tools that
                                you're already using.</span>
                        </a>
                    </li>
                    <li>
                        <a href="#" class="block p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700">
                            <div class="font-semibold">Reccuring Events</div>
                            <span class="text-sm text-gray-500 dark:text-gray-400">Connect with third-party tools that
                                you're already using.</span>
                        </a>
                    </li>
                    <!-- <li>
                        <a href="#" class="block p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700">
                            <div class="font-semibold">Marketing Automation</div>
                            <span class="text-sm text-gray-500 dark:text-gray-400">Connect with third-party tools that
                            you're already using.</span>
                        </a>
                    </li> -->
                </ul>
            </div>
        </div>

    </nav>




</template>


<script>
    export default {
        name: 'Navbar',
        data() {
            return {
                deviceWidth: null,
            }
        },

        mounted() {
            this.deviceWidth = window.innerWidth;

            if (this.deviceWidth < 768) {
                document.getElementById('column-3').classList.add('hidden');
            } else {
                document.getElementById('column-3').classList.remove('hidden');
            }
        },

    }
</script>