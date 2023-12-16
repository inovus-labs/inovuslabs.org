
<template>

    <SnowFall />

    <slot />

</template>


<script>
    import SnowFall from "@/components/Overlay/SnowFall.vue";

    export default {
        name: 'ErrorLayout',
        components: {
            SnowFall,
        }
    }
</script>