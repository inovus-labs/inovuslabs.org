
<template>
    <iframe width="560" height="315" :src="url"
        title="YouTube video player" frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
    ></iframe>
</template>

<script>
export default {
    name: 'YoutubeCard',
    props: {
        url: {
            type: String,
            required: true
        }
    },

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
}</style>