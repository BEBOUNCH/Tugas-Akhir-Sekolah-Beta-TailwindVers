<template>
  <div id="app">
    <HeaderSecond />
    <Nuxt />
    <NavBar />
  </div>
</template>
<script>
// Memanggil component sesuai lokasi masing - masing file
import HeaderSecond from '@/components/HeaderSecond.vue'
import NavBar from '@/components/NavBar.vue'
export default {
// Dideklarasikan agar dapat diakses oleh template
  components: {
    HeaderSecond,
    NavBar
  }
}
</script>
<style>
</style>
