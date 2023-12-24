
<template>
    <PublicLayout>


        <section class="lg:p-10 p-4 my-10">
            <div class="mx-auto max-w-screen-xl text-center w-full p-4 lg:mb-4">

                <iframe 
                    class="airtable-embed" 
                    :src="isMobile ? 'https://airtable.com/embed/appm83FkPnhnn2sxa/shr0vmrqSvtnwG8XJ?backgroundColor=blue' : 'https://airtable.com/embed/appm83FkPnhnn2sxa/shrJQxKHL0JZ5g4bw?backgroundColor=blue'"
                    onmousewheel=""
                ></iframe>

            </div>
        </section>

    </PublicLayout>
</template>


<script>
import PublicLayout from "@/layouts/PublicLayout.vue";

export default {
    name: 'ReportsView',
    components: {
        PublicLayout,
    },
    data() {
        return {
            isMobile: false,
        }
    },
    methods: {
        checkMobile() {
            if (window.innerWidth <= 768) {
                this.isMobile = true;
            } else {
                this.isMobile = false;
            }
        }
    },
    mounted() {
        this.checkMobile();
        window.addEventListener('resize', this.checkMobile);
    },
    beforeDestroy() {
        window.removeEventListener('resize', this.checkMobile);
    }

}
</script>

<style scoped>
.airtable-embed {
    background: transparent;
    border: 1px solid #ccc;
    height: 720px;
    width: 100%;
}
</style>