
<template>
    <PublicLayout>



        <section class="bg-bgPrimary">
            <div class="flex flex-col lg:flex-row w-full mx-auto max-w-screen-xl p-4 items-center justify-center lg:py-14">

            <div class="w-full lg:w-1/3 py-4 lg:py-20">
                <img class="w-full h-full" src="../../public/assets/illustrations/nanodegree.svg" />
            </div>

            <div class="mx-auto max-w-screen-xl text-center w-full lg:w-2/3 py-4 lg:py-20">
                <h1 class="mb-4 text-4xl font-extrabold text-primary md:text-5xl lg:text-6xl">
                    Nano Degrees, Infinite Possibilities!
                </h1>
                <p class="mb-8 text-lg font-normal text-secondary lg:text-xl sm:px-16 lg:px-46">
                    Unlock Micro Learning Marvels - Explore Cutting-Edge Nano Degree Programs Tailored for Tomorrow's Innovators.
                </p>
                <div class="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
                    <a href="#knowmore" class="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded bg-primary">
                        Start learning now
                        <svg class="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                        </svg>
                    </a>
                </div>
            </div>

            </div>
        </section>




        <section class="border-b lg:p-10 p-4 my-10">
            <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
                <div class="text-gray-500 sm:text-lg dark:text-gray-400">
                    <h2 class="mb-8 text-4xl tracking-tight font-bold text-gray-900 dark:text-white">Explore Nanodegree Excellence with Inovus Labs! 🎓</h2>
                    <p class="text-justify mb-4 font-light">On a wider perspective, a <span class="text-primary">Nanodegree program</span> is a project and skill-based educational credential program. It is a compact, specialized educational program designed to empower individuals with targeted skills in emerging fields.</p>
                    <p class="text-justify mb-4 font-light">At Inovus Labs, our nanodegree programs are meticulously crafted to provide a transformative learning experience that aligns with the dynamic landscape of technology and innovation. These programs are tailored to equip participants with practical, industry-relevant knowledge and hands-on expertise, enabling them to navigate the evolving demands of the professional world.</p>
                    <p class="text-justify font-medium">In essence, a nanodegree from Inovus Labs is more than just a certification; it is a passport to a future-ready skill set, empowering individuals to thrive in the fast-paced and ever-evolving realms of technology and entrepreneurship. Join us on a journey where learning is immersive, practical, and geared towards shaping the innovators of tomorrow.</p>
                </div>
            </div>
        </section>





        <section id="knowmore" class="lg:p-10 p-4 my-10">

            <div class="mx-auto max-w-screen-xl text-center w-full p-4 lg:mb-4">
                <h1 class="mb-4 text-2xl font-extrabold leading-none tracking-tight text-gray-900 md:text-3xl lg:text-4xl dark:text-white">
                    ✨ Embark on a journey of skill enhancement 🚀
                </h1>

                <p class="mb-6 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
                    📚 Explore our Nanodegree Programs section, where we offer a range of transformative courses. Discover the roadmap to success in our published syllabi, crafted to empower learners with comprehensive skills. Elevate your expertise with us! ✨
                </p>
            </div>


            <div class="px-4 mx-auto max-w-screen-xl lg:px-6">
                <div class="grid gap-8 lg:grid-cols-2">

                    <NanodegreeCard
                        v-for="nanodegree in nanodegrees"
                        :key="nanodegree.id"
                        :data="nanodegree"
                        @openModal="openModal(nanodegree)"
                    />

                </div>  
            </div>

            <NanodegreeModal
                :data="modalData"
                :show="showModal"
                @closeModal="closeModal"
            />

        </section>


        
    </PublicLayout>
</template>


<script>
    import NanodegreeCard from "@/components/NanodegreeCard.vue";
    import NanodegreeModal from "@/components/NanodegreeModal.vue";

    import PublicLayout from "@/layouts/PublicLayout.vue";

    import { getNanoDegreeDetails } from "@/API/index.js";

    export default {
        name: 'NanodegreeView',
        components: {
            PublicLayout,
            NanodegreeCard,
            NanodegreeModal,
        },

        data() {
            return {
                nanodegrees: [],
                showModal: false,
                modalData: {}
            }
        },

        async mounted() {
            this.nanodegrees = await getNanoDegreeDetails();
        },

        methods: {
            openModal(data) {
                this.modalData = data;
                this.showModal = true;
            },

            closeModal() {
                this.showModal = false;
            }
        },
        
    }
</script>