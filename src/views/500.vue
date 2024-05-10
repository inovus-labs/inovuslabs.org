
<template>
    <ErrorLayout>


        <section class="bg-bgPrimary">
            <div class="flex h-screen mx-auto w-screen p-4 items-center justify-center">

                <div class="w-full lg:w-1/3">
                    <img class="w-full h-full" src="https://storage.googleapis.com/inovuslabs-cdn.appspot.com/assets/illustrations/500.svg" alt="500" />
                </div>

            </div>
        </section>

        
    </ErrorLayout>
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