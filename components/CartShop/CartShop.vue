<template>
  <div class="bg-darkcyan overflow-hidden shadow-lg pt-px pb-1 px-0.5 mb-1 flex flex-wrap">
    <div class="w-full flex items-center mb-0.5">
      <h2 class="font-medium text-xs text-fourth sm:text-sm lg:text-base">{{isiCart.title}}</h2>
      <button style="button" class="w-1/5 font-semibold rotate-45 text-2xl absolute right-0 z-10 text-fourth md:text-3xl lg:text-4xl xl-text-5xl hover:opacity-80" @click="resetItemCart">+</button>
    </div>
    <div class="w-full flex">
      <img :src="isiCart.img" alt="" class="w-2/5 pr-0.5 rounded">
        <div class="w-3/5 flex flex-wrap content-start ml-0.5">
          <div class="h-1/2 w-full">
            <p class="font-normal text-fourth text-[9px] sm:text-xs lg:text-sm">Rp{{isiCart.price}} /Day</p>
            <p class="font-normal text-fourth text-[9px] sm:text-xs lg:text-sm"><strong class="font-semibold text-fourth text-[9px] sm:text-xs lg:text-sm">Amount:</strong> {{isiCart.amount}}</p>
          </div>
          <div class="flex justify-evenly items-start h-1/2 w-full">
            <button type="button" class="font-medium text-lg text-fourth md:text-xl lg:text-2xl hover:opacity-80" @click="incrementCounter">+</button>
            <button type="button" class="font-medium text-lg text-fourth md:text-xl lg:text-2xl hover:opacity-80" @click="decrementCounter">-</button>
          </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    isiCart: {
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
    resetItemCart() {
      this.$emit('resetItemCart', this.index)
    },
    incrementCounter() {
      this.$emit('incrementCounter', this.index)
    },
    decrementCounter() {
      this.$emit('decrementCounter', this.index)
    },
  }
}
</script>