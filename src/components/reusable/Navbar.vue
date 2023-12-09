<template>




    <nav class="bg-white">
        <div class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
            <a href="/" class="flex items-center">
                <img src="/assets/logo.svg" class="lg:h-12 h-10 mr-3" alt="Inovus Labs Logo" />
                <!-- <span class="self-center text-2xl font-semibold whitespace-nowrap text-secondary">Inovus Labs</span> -->
            </a>
            

            <template v-if="!maintainance">

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
            
            </template>


            <template v-if="!isMobile || maintainance">
                <div class="flex items-center md:order-2 gap-2">

                    <!-- <button class="flex items-center justify-center w-9 h-9 mr-2 text-gray-500 border rounded-full bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 hover:text-gray-600 dark:hover:text-gray-400">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                          <path stroke-linecap="round" stroke-linejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0M3.124 7.5A8.969 8.969 0 015.292 3m13.416 0a8.969 8.969 0 012.168 4.5" />
                        </svg>
                    </button> -->

                    <a href="#" class="text-white bg-primary font-medium rounded text-sm px-4 py-2 md:px-5 md:py-2.5 hover:bg-opacity-90">Join Inovus Labs</a>

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

                                    <div :class="isMobile && subitem.disabled ? 'hidden' : ''">
                                        <div :class="isMobile ? 'border-b border-gray-100 dark:border-gray-700' : ''">
                                            
                                            <a :href="subitem.disabled ? null : subitem.link" class="block p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700" :class="{'opacity-50 cursor-not-allowed': subitem.disabled}">
                                                <div class="font-semibold" :class="{'text-primary dark:text-blue-400': subitem.featured}">
                                                    {{ subitem.name }}
                                                </div>
                                                <span v-if="!isMobile" class="text-sm text-gray-500 dark:text-gray-400">{{ subitem.description }}</span>
                                            </a>
                                            
                                        </div>
                                    </div>

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
        props: {
            maintainance: {
                type: Boolean,
                default: false
            }
        },
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
                                    description: 'Who we are and what we do. Know more about us.'
                                },
                                {
                                    name: 'Gallery',
                                    link: '/gallery',
                                    description: 'Framed memories of our journey so far.'
                                },
                                {
                                    name: 'Socials',
                                    link: '/socials',
                                    description: 'Let\'s connect on social media. We\'re everywhere.'
                                }
                            ],
                            [
                                {
                                    name: 'Our Team',
                                    link: '/team',
                                    description: 'The people who make it all happen. Meet our team.'
                                },
                                {
                                    name: 'News',
                                    link: '/news',
                                    description: 'Collection of our news and press releases.'
                                },
                                {
                                    name: 'Learning Stories',
                                    link: '/learning-stories',
                                    description: 'Something one of a kind. Coming soon...',
                                    disabled: true
                                }
                            ],
                            [
                                {
                                    name: 'Community',
                                    link: '/community',
                                    description: 'Our community of students and alumni. Join us.'
                                },
                                {
                                    name: 'Reports (Annual / Activity)',
                                    link: '/reports',
                                    description: 'Reports of our activities and annual reports.'
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
                                    description: 'A mini IoT lab for students to learn and explore.'
                                },
                                {
                                    name: 'Bootcamps / Workshops / Session',
                                    link: '/events',
                                    description: 'Curated list of our events, sessions & workshops.'
                                },
                                {
                                    name: 'Nano Degree Program',
                                    link: '/nanodegree',
                                    description: 'Self paced learning program for students.',
                                },
                                {
                                    name: 'Other Events',
                                    link: '/other-events',
                                    description: 'Events that we take-up and cooridinate.'
                                }
                            ],
                            [
                                {
                                    name: 'Inovus Blogs',
                                    link: '/blog',
                                    description: 'The place where we share our thoughts and ideas.',
                                    featured: true
                                },
                                {
                                    name: 'Inovus Radio (Inora)',
                                    link: '/inora',
                                    description: 'Podcasts and audio stories by Inovus Labs.',
                                    featured: true
                                },
                                {
                                    name: 'Inovus Profiles',
                                    link: '/',
                                    description: 'Something one of a kind. Coming soon...',
                                    disabled: true,
                                },
                                {
                                    name: 'Inovus Scrapbook',
                                    link: '/scrapbook',
                                    description: 'Something one of a kind. Coming soon...',
                                    disabled: true,
                                }
                            ],
                            [
                                {
                                    name: 'Opensource Projects',
                                    link: '/projects',
                                    description: 'Showcase of our opensource projects. Check them out.'
                                },
                                {
                                    name: 'Reccuring Events',
                                    link: '/reccuring-events',
                                    description: 'Here are some of our events that happen on a regular basis.'
                                },
                                {
                                    name: 'Outreach Programs',
                                    link: '/outreach',
                                    description: 'Events and programs that we conduct outside our campus.'
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