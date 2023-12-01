
<template>

    <section class="bg-bgPrimary">
        <div class="py-8 lg:py-16 mx-auto max-w-screen-xl px-4">
        
        <!-- <h2 class="mb-8 lg:mb-16 text-3xl font-extrabold tracking-tight leading-tight text-center text-gray-900 dark:text-white md:text-4xl">We’ve Worked With Big And Small Alike.</h2> -->
        <div class="flex flex-wrap lg:justify-between items-center justify-center">
            
            <template v-for="partner in partners">
            <a href="#">
                <div class="flex justify-center items-center">
                <img class="h-24" :src="'../../logos/' + partner.logo" :alt="partner.name" />
                </div>
            </a>
            </template>                       

        </div>
            
        </div>
    </section>

</template>


<script>
    export default {
        name: 'Partners',
        data() {
            return {
                partners: [
                    {
                        name: 'Kerala Startup Mission',
                        logo: 'ksum.png',
                        url: '#'
                    },
                    {
                        name: 'Innovation and Entrepreneurship Development Centre',
                        logo: 'iedc.png',
                        url: '#'
                    },
                    {
                        name: 'Kristu Jyoti College of Management and Technology',
                        logo: 'kjcmt.png',
                        url: '#'
                    },
                    {
                        name: 'ICT Academy of Kerala',
                        logo: 'ict_academy.png',
                        url: '#'
                    },
                    {
                        name: 'Institution\'s Innovation Council',
                        logo: 'iic.png',
                        url: '#'
                    }
                ]
            }
        },
    }
</script>