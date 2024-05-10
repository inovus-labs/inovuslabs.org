
<template>



        <section class="bg-bgPrimary">
            <div class="flex h-screen mx-auto w-screen p-4 items-center justify-center">

                <div class="w-full lg:w-1/3">
                    <img class="w-full h-full" src="https://storage.googleapis.com/inovuslabs-cdn.appspot.com/assets/illustrations/404.svg" alt="" />
                </div>

            </div>
        </section>



</template>


<script>
    import ErrorLayout from "@/layouts/ErrorLayout.vue"
    export default {
        name: '404',
        components: {
            ErrorLayout,
        }
    }
</script>