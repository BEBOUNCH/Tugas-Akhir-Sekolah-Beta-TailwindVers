<template>
  <div class="containter p-0.5 w-1/5">
    <div class="bg-white rounded-lg overflow-hidden shadow-lg p-1">
      <h2 class="mb-0.5 font-semibold text-sm text-primary md:text-md"><h3>{{title}}</h3></h2>
      <img :src="img" alt="" class="w-full rounded">
      <div class="p-1">
        <p class="font-normal text-secondary text-xs mb-1 h-14">{{mainDes}}</p>
        <div class="mt-1">
          <p class="text-xs text-primary font-semibold text-right mb-1 md:text-sm">Rp{{price}} / Day</p>
          <nuxt-link :to="`/adminPageGear/detail/${itemId}`" class="w-full block font-medium text-center text-sm bg-primary p-1 rounded-md text-white md:text-md hover:opacity-80">Edit This</nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: ""
    },
    mainDes: {
      type: String,
      default: ""
    },
    img: {
      type: String,
      default: ""
    },
    price: {
      type: Number,
      default: Number
    },
    itemId: {
      type: String,
      default: ""
    }
  }
}
</script>
