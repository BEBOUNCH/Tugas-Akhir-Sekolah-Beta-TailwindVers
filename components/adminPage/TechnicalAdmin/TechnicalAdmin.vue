<template>
<div class="w-1/3 p-2">
    <div class="bg-white rounded-xl overflow-hidden shadow-lg">
      <img :src="img" alt="" class="w-full">
      <div class="py-4 px-4">
        <a :href="link" class="block mb-2 font-semibold text-base md:text-xl text-dark hover:text-primary trancate" target="_blank"><h3>{{title}}</h3></a>
        <p class="font-normal text-secondary text-sm md:text-base mb-4 h-20">{{description}}</p>
        <a :href="link" class="font-medium text-sm md:text-base bg-primary py-2 px-4 rounded-lg text-white hover:opacity-80" target="_blank">Continue Learning</a>
        <nuxt-link :to="`/adminPageCard/detail/${cardId}`" class="w-full block font-medium text-center text-sm bg-darkcyan p-1 mt-4 rounded-md text-white md:text-md hover:opacity-80">Edit This</nuxt-link>
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
    description: {
      type: String,
      default: ""
    },
    cardId: {
      type: String,
      default: ""
    },
    img: {
      type: String,
      default: ""
    },
    link: {
      type: String,
      default: ""
    }
  }
}
</script>
