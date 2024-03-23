
<template>

    <section class="bg-bgPrimary">
        <div class="max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-14 lg:px-6">
            <dl class="grid gap-8 mx-auto text-gray-900 grid-cols-2 dark:text-white lg:grid-cols-6">

                <template v-for="item, index in stats" :key="index">
                    <div class="flex flex-col items-center justify-center">
                        <div class="flex items-center justify-center">
                            <dt v-if="item.mode !== 'string'" class="statsCounter_value mb-2 text-3xl md:text-4xl font-bold" :data-target="item.value">0</dt>
                            <dt v-if="item.mode == 'string'" class="mb-2 text-3xl md:text-4xl font-extrabold">{{ item.value }}</dt>
                            <dt v-if="item.mode === 'approximate'" class="mb-2 text-3xl md:text-4xl font-extrabold">+</dt>
                        </div>
                        <dd class="statsCounter_title font-light text-gray-500 dark:text-gray-400">{{ item.title }}</dd>
                    </div>
                </template>
                
            </dl>
        </div>
    </section>

</template>


<script>
    export default {
        props: {
            stats: {
                type: Array,
                required: true
            }
        },
        mounted() {
            this.startCounter()
        },
        methods: {
            startCounter() {
                const counters = document.querySelectorAll('.statsCounter_value')
                const speed = 200

                counters.forEach(counter => {
                    const updateCount = () => {
                        const target = +counter.getAttribute('data-target')
                        const count = +counter.innerText

                        const inc = target / speed

                        if (count < target) {
                            counter.innerText = Math.ceil(count + inc)
                            setTimeout(updateCount, 10)
                        } else {
                            // count.innerText = target
                        }
                    }

                    updateCount()
                })
            }
        }
    }
</script>