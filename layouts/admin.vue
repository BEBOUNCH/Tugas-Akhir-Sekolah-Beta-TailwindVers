<template>
  <div id="app">
    <HeaderSecond />
    <Nuxt />
    <NavbarSecond />
  </div>
</template>
<script>
// Memanggil component sesuai lokasi masing - masing file
import HeaderSecond from '@/components/HeaderSecond.vue'
import NavbarSecond from '@/components/NavbarSecond.vue'
export default {
// Dideklarasikan agar dapat diakses oleh template
  components: {
    HeaderSecond,
    NavbarSecond
  }
}
</script>
<style>
</style>
