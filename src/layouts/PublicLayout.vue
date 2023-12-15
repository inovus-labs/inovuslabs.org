
<template>

    <Navbar :maintainance = "maintainance" />

    <SnowFall />
    
    <slot />

    <Footer />

</template>


<script>
    import Navbar from "@/components/Reusable/Navbar.vue";
    import Footer from "@/components/Reusable/Footer.vue";
    import SnowFall from "@/components/Overlay/SnowFall.vue";

    export default {
        name: 'PublicLayout',
        components: {
            Navbar,
            SnowFall,
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