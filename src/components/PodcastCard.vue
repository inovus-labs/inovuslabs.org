<template>

    <iframe 
        style="border-radius:12px" 
        :src="`https://open.spotify.com/embed/episode/${data.id}?utm_source=generator&theme=0&t=0`"
        width="100%" 
        height="352" 
        frameBorder="1" 
        allowfullscreen="" 
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
        loading="lazy"
    ></iframe>

</template>


<script>
    export default {
        name: 'PodcastCard',
        props: {
            data: {
                type: Object,
                required: true
            }
        }
    }
</script>