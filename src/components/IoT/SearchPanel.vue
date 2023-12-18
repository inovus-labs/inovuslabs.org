
<template>

    <!-- a google search bar like component to search for a specific device -->
    <div class="flex flex-col items-center justify-center">

        <div class="flex items-center lg:w-2/3 w-full justify-center">
            <input type="text" class="w-full px-6 py-3 text-gray-500 placeholder-gray-400 border border-r-transparent rounded-l-full border-gray-300 focus:outline-none focus:ring-0 focus:border-primary" placeholder="Search for a device" />
            <button class="lg:w-44 bg-primary hover:bg-blue-500 text-white font-medium py-3 px-6 rounded-r-full border border-primary hover:border-blue-500">Search</button>
        </div>

    </div>

</template>


<script>
    export default {
        name: 'SearchPanel',
    }
</script>


<style scoped>



</style>