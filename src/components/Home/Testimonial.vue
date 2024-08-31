<template>
    <section class=" dark:bg-gray-900 lg:py-1 py-8">

        <swiper :modules="modules" :slides-per-view="1" :space-between="0" :speed="1000" :loop="true"
            :centeredSlides="true" :autoplay="{
            delay: 3000,
            disableOnInteraction: false,
        }" @swiper="onSwiper" @slideChange="onSlideChange">

            <template v-for="testimonial in testimonials" :key="testimonial.id">

                <swiper-slide>

                    <!-- <div class="max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-16 lg:px-6">
                        <figure class="max-w-screen-md mx-auto">
                            <svg class="h-12 mx-auto mb-3 text-gray-400 dark:text-gray-600" viewBox="0 0 24 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z" fill="currentColor"/>
                            </svg> 
                            <blockquote>
                                <p class="text-2xl font-medium text-gray-900 dark:text-white">{{ testimonial.text }}</p>
                            </blockquote>
                            <figcaption class="flex items-center justify-center mt-6 space-x-3">
                                <img class="w-6 h-6 rounded-full" :src="testimonial.image" :alt="testimonial.name" />
                                <div class="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
                                    <div class="pr-3 font-medium text-gray-900 dark:text-white">{{ testimonial.name }}</div>
                                    <div class="pl-3 text-sm font-light text-gray-500 dark:text-gray-400">{{ testimonial.position }}</div>
                                </div>
                            </figcaption>
                        </figure>   
                    </div> -->


                    <div class="flex flex-col items-center pb-10 ">
                        <div
                            class="p-6 w-9/12 h-64 bg-white border border-gray-200 rounded-lg flex items-center shadow dark:bg-gray-800 dark:border-gray-700 ">
                            <div class="flex flex-col items-center ">
                                <p class="mb-3 font-light text-center text-gray-500 dark:text-gray-400">{{
            testimonial.text }}</p>
                                <img class="w-6 h-6 place-content-center rounded-full" :src="testimonial.image"
                                    :alt="testimonial.name" />
                                <div class="font-medium text-gray-900 dark:text-white">{{ testimonial.name }}</div>
                                <div class="text-sm font-light text-gray-500 dark:text-gray-400">{{ testimonial.position
                                    }}</div>
                            </div>
                        </div>
                    </div>


                </swiper-slide>

            </template>

        </swiper>

    </section>
</template>


<script>

    import { Swiper, SwiperSlide } from 'swiper/vue';
    import 'swiper/scss';
    import 'swiper/scss/autoplay';
    import { Autoplay } from 'swiper/modules';

    const BASE_URL = "https://storage.googleapis.com/inovuslabs-cdn.appspot.com";

    export default {
        name: 'Testimonial',
        components: {
            Swiper,
            SwiperSlide,
        },
        setup() {
            return {
                modules: [Autoplay],
            };
        },
        data() {
            return {
                testimonials: [
                    {
                        id: 1,
                        name: 'Roji Thomas',
                        position: 'Nodal Officer',
                        image: BASE_URL + '/assets/Testimonials/rojithomas.jpg',
                        text: 'Inovus Labs is a platform for developing entrepreneurial culture in our college. We here are not teaching to see the dreams, but to fulfill them.'
                    },
                    {
                        id: 2,
                        name: 'Jithin Shah M A',
                        position: 'Founder',
                        image: BASE_URL + '/assets/Testimonials/jithinshah.jpg',
                        text: 'We at Inovus Labs not only activate people to their full potential, but also develop a personalized experience that make our collegues feel more at home.'
                    },
                    {
                        id: 3,
                        name: 'Arjun Krishna',
                        position: 'Mentor',
                        image: BASE_URL + '/assets/Testimonials/arjunkrishna.jpg',
                        text: 'We encourage our fellows to think out of the box in every sort of activities and promote stupid ideas, as, today\'s stupidity is tomorrow\'s wonder.'
                    },
                    {
                        id: 4,
                        name: 'Dr. Thomas George',
                        position: 'Chairman, LEAD College of Management',
                        image: BASE_URL + '/assets/Testimonials/thomman.jpg',
                        text: 'Special Congratulations to team Inovus Labs IEDC of Kristu Jyoti. The students are highly motivated and ambitious.They are open to learn and ready to implement their creativity. The faculty members and college management are highly supportive'
                    },
                    {
                        id: 5,
                        name: 'Gopika Sali',
                        position: 'Assistant Professor, Department of Geology, Kristu Jyoti College',
                        image: BASE_URL + '/assets/Testimonials/',
                        text: 'Excellent initative by the students of Inovus Labs. Sincere appreciation for your effort.'
                    },
                    {
                        id: 6,
                        name: 'Luna Johny',
                        position: 'Assistant Professor, Department of Geology, Kristu Jyoti College',
                        image: BASE_URL + '/assets/Testimonials/',
                        text: 'I appreciate the initative by the students of Inovus. Keep up the hardwork. Best Wishes'
                    },
                    {
                        id: 7,
                        name: 'Maria John',
                        position: `Assistant Professor, Department of Geology, Kristu Jyoti College`,
                        image: BASE_URL + '/assets/Testimonials/',
                        text: 'Brillinat effort from the students of Inovus Club. Great Appreciation for your hardwork. Let this be useful(especially the report generating software) to all. Looking forward for more innovations. Best Wishes'
                    },
                    {
                        id: 8,
                        name: 'Shihabudeen M',
                        position: 'Assistant Professor, Department of Commerce, Kristu Jyoti College',
                        image: BASE_URL + '/assets/Testimonials/',
                        text: 'Docgen: From INOVUS LABS, great initiative about this web. More effective for the departments of the college. Congratulations to all members behind this project. Best wishes for your endeavors.'
                    }
                ]
            }
        },
        methods: {

            onSwiper(swiper) {

            },
            onSlideChange() {

            },
        },
    }
</script>