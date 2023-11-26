<template>
  <div class="containter p-0.5 w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5 xl:w-1/6">
    <div class="bg-white rounded-lg overflow-hidden shadow-lg p-1">
      <h2 class="mb-0.5 font-semibold text-sm text-primary md:text-md"><h3>{{item.title}}</h3></h2>
      <img :src="item.img" alt="" class="w-full rounded">
      <div class="p-1">
        <p class="font-normal text-secondary text-xs mb-2 h-14">{{item.mainDes}}</p>
        <div class="mt-1">
          <p class="text-xs text-primary font-semibold text-right mb-1 md:text-sm">Rp{{item.price}} / Day</p>
          <button type="button" href="#" class="w-full block font-medium text-center text-sm bg-primary p-1 rounded-md text-white md:text-md hover:opacity-80" @click="triggerAddCart">Add to cart</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      default: () => {
        return {}
      }
    },
    index: {
      type: Number,
      required: true
    }
  },
  methods: {
    triggerAddCart() {
      this.$emit('handleButtonClick', this.index)
    }
  }
}
</script>