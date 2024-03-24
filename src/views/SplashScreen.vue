<template>
    <div class="wrap">
  <div class="loading">
    <div class="flex flex-col items-center"><img src="https://storage.googleapis.com/inovuslabs-cdn.appspot.com/assets/logo_inovus.png" class="h-36 p-6" alt="">
        <div class="bounceball"></div>
        <div class="text">Welcome to Inovus Labs IEDC</div>
    </div>
    </div>
</div>
</template>
<script>
export default{
    name: 'SplashScreen',
    mounted() {
    setTimeout(() => {
      this.loading = false
      this.$router.push('/home')
    }, 3000)
  }
}
</script>