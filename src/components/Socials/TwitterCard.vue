
<template>
    <iframe 
        border=0 
        frameborder=0 
        height=500 
        width=100%
        :src="processedUrl"
    ></iframe>
</template>

<script>
export default {
    name: 'TwitterCard',
    props: {
        url: {
            type: String,
            required: true
        }
    },
    methods: {
        processTwitterPost() {
            let encodedUrl = encodeURIComponent(this.url);
            return "https://twitframe.com/show?url=" + encodedUrl;
        }
    },
    computed: {
        processedUrl() {
            return this.processTwitterPost();
        },
    }
}
</script>
