<template>




    <nav class="bg-white">
        <div class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
            <a href="/" class="flex items-center">
                <img src="/logo.svg" class="lg:h-12 h-10 mr-3" alt="Inovus Labs Logo" />
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
                    <template v-for="item in navbar">

                        <template v-if="item.dropdown">
                            
                            <button @click="toggleDropdown(item.name)" class="flex items-center justify-between w-full py-2 pl-3 pr-4 font-medium text-gray-900 border-b border-gray-100 md:w-auto hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-600 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700">
                                {{ item.name }}

                                <template v-if="item.dropdown">
                                    <svg class="w-2.5 h-2.5 ml-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                                        fill="none" viewBox="0 0 10 6">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                            stroke-width="2" d="m1 1 4 4 4-4" />
                                    </svg>
                                </template>

                            </button>

                        </template>
                        <template v-else>
                            <a :href="item.link" class="flex items-center justify-between w-full py-2 pl-3 pr-4 font-medium text-gray-900 border-b border-gray-100 md:w-auto hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-600 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700">
                                {{ item.name }}
                            </a>
                        </template>

                    </template>
                </ul>
            </div>


            <template v-if="!isMobile">
                <div class="flex items-center md:order-2">
                    <!-- <a href="#" class="text-secondary border border-secondary font-medium rounded text-sm px-4 py-2 md:px-5 md:py-2.5 mr-1 md:mr-2">Login</a> -->
                    <a href="#" class="text-white bg-primary font-medium rounded text-sm px-4 py-2 md:px-5 md:py-2.5 mr-1 md:mr-2">Join Inovus Labs</a>
                </div>
            </template>


        </div>


        <template v-for="item in navbar">
            <template v-if="item.dropdown">

                <div @mouseleave="toggleDropdown(item.name)" :id="`${item.name.toLowerCase()}-menu-dropdown`" class="absolute w-full bg-white border-gray-200 shadow-sm border-y dark:bg-gray-800 dark:border-gray-600 hidden">
                    <div class="grid max-w-screen-xl px-4 py-5 mx-auto text-gray-900 dark:text-white sm:grid-cols-2 md:grid-cols-3 md:px-6">
                        
                        <template v-for="column in item.dropdown">
                            <ul>
                                <li v-for="subitem in column">
                                    <a :href="subitem.link" class="block p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700">
                                        <div class="font-semibold">{{ subitem.name }}</div>
                                        <span v-if="!isMobile" class="text-sm text-gray-500 dark:text-gray-400">{{ subitem.description }}</span>
                                    </a>
                                </li>
                            </ul>
                        </template>

                    </div>
                </div>
                
            </template>
        </template>


    </nav>




</template>


<script>
    export default {
        name: 'Navbar',
        data() {
            return {
                deviceWidth: null,
                isMobile: false,
                openDropdown: null,
                navbar: [
                    {
                        name: 'Home',
                        link: '/'
                    },
                    {
                        name: 'About',
                        link: '/about',
                        dropdown: [
                            [
                                {
                                    name: 'About Us',
                                    link: '/about',
                                    description: 'Connect with third-party tools that you\'re already using.'
                                },
                                {
                                    name: 'Gallery',
                                    link: '/gallery',
                                    description: 'Connect with third-party tools that you\'re already using.'
                                }
                            ],
                            [
                                {
                                    name: 'Our Team',
                                    link: '/team',
                                    description: 'Connect with third-party tools that you\'re already using.'
                                },
                                {
                                    name: 'News',
                                    link: '/news',
                                    description: 'Connect with third-party tools that you\'re already using.'
                                }
                            ],
                            [
                                {
                                    name: 'Community',
                                    link: '/community',
                                    description: 'Connect with third-party tools that you\'re already using.'
                                },
                                {
                                    name: 'Reports (Annual / Activity)',
                                    link: '/reports',
                                    description: 'Connect with third-party tools that you\'re already using.'
                                }
                            ]
                        ]
                    },
                    {
                        name: 'Initiatives',
                        link: '/initiatives',
                        dropdown: [
                            [
                                {
                                    name: 'Mini IoT Lab',
                                    link: '/iot-lab',
                                    description: 'Connect with third-party tools that you\'re already using.'
                                },
                                {
                                    name: 'Bootcamps / Workshops / Session',
                                    link: '/events',
                                    description: 'Connect with third-party tools that you\'re already using.'
                                },
                                {
                                    name: 'Nano Degree Program',
                                    link: '/nanodegree',
                                    description: 'Connect with third-party tools that you\'re already using.'
                                }
                            ],
                            [
                                {
                                    name: 'Inovus Blogs',
                                    link: '/blog',
                                    description: 'Connect with third-party tools that you\'re already using.'
                                },
                                {
                                    name: 'Inovus Profiles',
                                    link: 'https://profile.inovuslabs.org',
                                    description: 'Connect with third-party tools that you\'re already using.'
                                },
                                {
                                    name: 'Inovus Radio (Inora)',
                                    link: '/inora',
                                    description: 'Connect with third-party tools that you\'re already using.'
                                }
                            ],
                            [
                                {
                                    name: 'Opensource Projects',
                                    link: '/projects',
                                    description: 'Connect with third-party tools that you\'re already using.'
                                },
                                {
                                    name: 'Reccuring Events',
                                    link: '/reccuring-events',
                                    description: 'Connect with third-party tools that you\'re already using.'
                                }
                            ]
                        ]
                    },
                    {
                        name: 'Resources',
                        link: '/resources'
                    },
                    {
                        name: 'Contact',
                        link: '/contact'
                    }
                ]
            }
        },
        methods: {
            checkDeviceWidth() {
                this.deviceWidth = window.innerWidth;
                if (this.deviceWidth < 768) {
                    this.isMobile = true;
                } else {
                    this.isMobile = false;
                }
            },
            toggleDropdown(name) {
                if (this.openDropdown) {
                    const dropdown = document.getElementById(`${this.openDropdown.toLowerCase()}-menu-dropdown`);
                    dropdown.classList.add('hidden');
                }
                if (this.openDropdown === name) {
                    this.openDropdown = null;
                } else {
                    this.openDropdown = name;
                    const dropdown = document.getElementById(`${name.toLowerCase()}-menu-dropdown`);
                    dropdown.classList.remove('hidden');
                }
            }
        },
        mounted() {
            this.checkDeviceWidth();
            window.addEventListener('resize', this.checkDeviceWidth);
        }

    }
</script>