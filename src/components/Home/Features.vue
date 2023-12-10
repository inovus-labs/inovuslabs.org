
<template>


    <section class="bg-white dark:bg-gray-900">
        <div class="my-8 py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
            <div class="max-w-screen-md mb-8 lg:mb-16">
                <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">What we do at <span class="text-primary">Inovus Labs</span>.</h2>
                <p class="text-gray-500 sm:text-xl dark:text-gray-400">We are strategists, designers and developers. Innovators and problem solvers. Small enough to be simple and quick, but big enough to deliver the scope you want at the pace you need.</p>
            </div>
            <div class="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0">
                
                <template v-for="feature in features">
                    <div>
                        <div class="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary lg:h-12 lg:w-12 dark:bg-primary-900">
                            <!-- <svg class="w-5 h-5 text-white lg:w-6 lg:h-6 dark:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 0l-2 2a1 1 0 101.414 1.414L8 10.414l1.293 1.293a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg> -->
                            <div v-html="feature.icon"></div>
                        </div>
                        <h3 class="mb-2 text-xl font-bold dark:text-white">{{ feature.title }}</h3>
                        <p class="text-gray-500 dark:text-gray-400">{{ feature.description }}</p>
                    </div>
                </template>

            </div>
        </div>
    </section>


</template>


<script>
    export default {
        name: 'Features',
        data() {
            return {
                features: [
                    {
                        title: 'Funding Support',
                        description: 'Every year we provides financial support to a good number of students for developing innovative products. Up to one lakh rupees is made available for each idea.',
                        icon: '<svg class="w-5 h-5 text-white lg:w-6 lg:h-6 dark:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 0l-2 2a1 1 0 101.414 1.414L8 10.414l1.293 1.293a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>'
                    },
                    {
                        title: 'Internships',
                        description: 'Certified Internships provided helps our fellows to explore and learn some career challenging skills like Node.js, Machine Learning 101, Arduino 101 and Graphics Designing 101.',
                        icon: '<svg class="w-5 h-5 text-white lg:w-6 lg:h-6 dark:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 0l-2 2a1 1 0 101.414 1.414L8 10.414l1.293 1.293a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>'
                    },
                    {
                        title: 'Nano Degree Certification',
                        description: 'We associate with Kasperob Robotics, Google, Mozilla, Amazon, Vive and GitHub to help our fellows to answer a query in most interviews; "What you have in extra".',
                        icon: '<svg class="w-5 h-5 text-white lg:w-6 lg:h-6 dark:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 0l-2 2a1 1 0 101.414 1.414L8 10.414l1.293 1.293a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>'

                    },
                    {
                        title: 'IoT Worklab',
                        description: 'Inovus is the hub for someone who loves to try something really crazy with circuits and makes mistakes, as we know that today\'s stupidity is tomorrow\'s wonder.',
                        icon: '<svg class="w-5 h-5 text-white lg:w-6 lg:h-6 dark:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 0l-2 2a1 1 0 101.414 1.414L8 10.414l1.293 1.293a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>'
                    },
                    {
                        title: 'Technical Support',
                        description: 'Mentoring and Infrastructural support are provided to nurish the projects to be independent Start-Ups. Also, we arrange Workshops and classes to promote technology based innovation and entrepreneurship among the students.',
                        icon: '<svg class="w-5 h-5 text-white lg:w-6 lg:h-6 dark:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 0l-2 2a1 1 0 101.414 1.414L8 10.414l1.293 1.293a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>'
                    },
                    {
                        title: 'Other Activities',
                        description: 'Android Development, Women Empowerment programs, Idea Contests, Fire-Side Chats, Funding for attending premium events, Idea brain-storming Workshops, Technical support of all events conducted in the college .',
                        icon: '<svg class="w-5 h-5 text-white lg:w-6 lg:h-6 dark:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 0l-2 2a1 1 0 101.414 1.414L8 10.414l1.293 1.293a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>'
                    }
                ]
            }
        },
    }
</script>