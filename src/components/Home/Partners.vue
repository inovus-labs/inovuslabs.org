<template>

    <section class="bg-bgPrimary">
        <div class="py-8 lg:py-16 mx-auto max-w-screen-xl px-4">

            <div class="flex flex-wrap lg:justify-between items-center justify-center">

                <swiper :modules="modules" :slides-per-view="isMobile ? 1 : 4" :space-between="30" :loop="true"
                    :autoplay="{
                    delay: 2000,
                    disableOnInteraction: false,
                }" @swiper="onSwiper" @slideChange="onSlideChange">

                    <template v-for="partner in partners">
                    
                    <swiper-slide>
                        <a :href="partner.url" target="_blank">
                            <div class="flex justify-center items-center">
                                <img class="partner_logo max-h-24" :src="'../../assets/logos/' + partner.logo"
                                    :alt="partner.name" />
                            </div>
                        </a>
                    </swiper-slide>

                    </template>

                </swiper>

            </div>

        </div>
    </section>

</template>


<script>

    import { Swiper, SwiperSlide } from 'swiper/vue';
    import 'swiper/scss';
    import 'swiper/scss/autoplay';
    import { Autoplay } from 'swiper/modules';

    export default {
        name: 'Partners',
        components: {
            Swiper,
            SwiperSlide,
        },
        setup() {
            return {
                modules: [Autoplay],
            };
        },
        mounted() {
            this.checkMobile();
            window.addEventListener('resize', this.checkMobile);
        },
        beforeDestroy() {
            window.removeEventListener('resize', this.checkMobile);
        },
        data() {
            return {
                isMobile: false,
                partners: [
                    {
                        name: 'Kerala Startup Mission',
                        logo: 'ksum.png',
                        url: 'https://startupmission.kerala.gov.in/'
                    },
                    {
                        name: 'Innovation and Entrepreneurship Development Centre',
                        logo: 'iedc.png',
                        url: 'https://iedc.startupmission.in/'
                    },
                    {
                        name: 'Kristu Jyoti College of Management and Technology',
                        logo: 'kjcmt.png',
                        url: 'https://kjcmt.ac.in/'
                    },
                    {
                        name: 'ICT Academy of Kerala',
                        logo: 'ict_academy.png',
                        url: '#'
                    },
                    {
                        name: 'Institution\'s Innovation Council',
                        logo: 'iic.png',
                        url: 'https://iic.mic.gov.in/'
                    },
                    {
                        name: 'TibkerHub Foundation',
                        logo: 'tinkerhub.png',
                        url: 'https://www.tinkerhub.org/'
                    },
                    {
                        name: 'GTech µLearn',
                        logo: 'Mulearnkjcmt.png',
                        url: 'https://mulearn.org/'
                    },
                    {
                        name: 'Hack Club',
                        logo: 'hackclub.png',
                        url: 'https://hackclub.com/'
                    }
                ]
            }
        },
        methods: {

            onSwiper(swiper) {

            },
            onSlideChange() {

            },
            checkMobile() {
                if (window.innerWidth <= 768) {
                    this.isMobile = true;
                } else {
                    this.isMobile = false;
                }
            },
        }
    }
</script>


<style>
.partner_logo {
    filter: grayscale(100%);
    transition: all 0.3s ease-in-out;
    aspect-ratio: 3/1.5;
    object-fit: contain;
    /* mix-blend-mode: color-burn; */
}

.partner_logo:hover {
    filter: grayscale(0%);
}
</style>