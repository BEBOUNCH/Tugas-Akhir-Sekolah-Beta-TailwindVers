<template>
  <div id="app">
    <HeaderFirst />
    <Nuxt />
    <NavBar />
  </div>
</template>
<script>
// Memanggil component sesuai lokasi masing - masing file
import HeaderFirst from '~/components/HeaderFirst.vue'
import NavBar from '~/components/NavBar.vue'
export default {
// Dideklarasikan agar dapat diakses oleh template
  components: {
    HeaderFirst,
    NavBar
  }
}
</script>
<style>
</style>
