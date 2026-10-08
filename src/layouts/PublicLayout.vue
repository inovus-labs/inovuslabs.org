
<template>

    <a href="#main-content" class="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-50 focus:px-4 focus:py-2 focus:bg-black focus:text-white focus:rounded focus:outline-none focus:ring-2 focus:ring-primary">
        Skip to main content
    </a>

    <Navbar :maintainance = "maintainance" />

    <!-- <SnowFall /> -->
    
    <main id="main-content" role="main" class="min-h-[calc(100vh-200px)]">
        <slot />
    </main>

    <Footer />

</template>


<script>
    import Navbar from "@/components/reusable/Navbar.vue";
    import Footer from "@/components/reusable/Footer.vue";
    // import SnowFall from "@/components/Overlay/SnowFall.vue";

    export default {
        name: 'PublicLayout',
        components: {
            Navbar,
            // SnowFall,
            Footer
        },
        props: {
            maintainance: {
                type: Boolean,
                default: false
            }
        },
    }
</script>