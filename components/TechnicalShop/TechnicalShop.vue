<template>
  <div class="w-full px-8 sm:px-4 sm:w-1/2 xl:w-1/3">
    <div class="bg-white rounded-xl overflow-hidden shadow-lg mb-10">
      <img :src="card.img" alt="" class="w-full">
      <div class="py-4 px-4">
        <a :href="card.link" class="block mb-2 font-semibold text-base md:text-xl text-dark hover:text-primary trancate" target="_blank"><h3>{{card.title}}</h3></a>
        <p class="font-normal text-secondary text-sm md:text-base mb-4 h-20">{{card.description}}</p>
        <a :href="card.link" class="font-medium text-sm md:text-base bg-primary py-2 px-4 rounded-lg text-white hover:opacity-80" target="_blank">Continue Learning</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    card: {
      type: Object,
      default: () => {}
    }
  }
}
</script>