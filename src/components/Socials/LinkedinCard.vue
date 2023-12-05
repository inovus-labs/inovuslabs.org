
<template>
    <iframe 
        :src="processedUrl"
        height="500"
        width="100%"
        frameborder="0" 
        allowfullscreen="" 
        title="Embedded post"
    ></iframe>
</template>

<script>
export default {
    name: 'LinkedinCard',
    props: {
        url: {
            type: String,
            required: true
        }
    },
    methods: {
        processLinkedInPost() {
            return this.url.replace("linkedin.com/feed/update", "linkedin.com/embed/feed/update");
        }
    },
    computed: {
        processedUrl() {
            return this.processLinkedInPost();
        },
    }

}
</script>

<style scoped>
    iframe {
        background: white;
        max-width: 540px;
        width: calc(100% - 2px);
        border-radius: 3px;
        border: 1px solid rgb(219, 219, 219);
        box-shadow: none;
        display: block;
        margin: 0px 0px 12px;
        min-width: 326px;
        padding: 0px;
    }
</style>