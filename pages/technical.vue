<template>
  <div class="pt-16 md:pt-20 xl:pt-0">
    <div class="pb-7">
      <img src="~/static/technical/camera.jpg" alt="err" class="brightness-50">
      <div class="absolute top-20 mx-2 sm:top-28 md:top-32 md:ml-4 lg:top-40">
        <h2 class="z-90 text-base font-semibold text-white sm:text-lg md:text-xl lg:text-2xl">Hi! 👋</h2>
        <h2 class="z-90 leading-6 font-bold text-white text-xl sm:text-3xl md:text-4xl lg:text-5xl">Welcome To My Rentals <span class="text-primary">PixelGear 📸</span></h2>
        <h6 class="mt-2 text-[8px] md:text-xs lg:text-base lg:mt-3 font-normal text-slate-100">✨What Makes PixelGear Unique?</h6>
        <p class="mt-0.5 leading-3 font-light text-[7px] md:text-[10] md:1 md:pr-8 lg:text-sm text-slate-100">PixelGear is not just a rental platform. We are your creative travel companion, taking you to a world where every moment can be captured perfectly. With a collection of the latest and most trusted camera equipment, we give you the freedom to explore the unlimited potential of your creativity.</p>
      </div>
    </div>
    <div class="px-2 sm:absolute sm:top-64 md:top-72 lg:top-96">
      <h2 class="font-bold text-dark text-xl text-center mb-2.5 sm:text-white sm:text-2xl md:text-3xl lg:text-4xl">Basics Of Photography Must Be You Know:</h2>
      <a href="#blog" class="w-full font-medium text-center text-sm lg:text-lg bg-primary py-1 rounded-md text-white hover:opacity-80 hidden sm:block transition ease-in-out delay-150 hover:-translate-y-1 hover:translate-x-4 hover:scale-110 hover:bg-purple-500 duration-300">Click Here 🎬</a>
    </div>
    <div id="blog" class="container flex flex-wrap justify-evenly px-4 mx-auto pt-2 sm:pt-16 pb-10">
      <TechnicalShop
        v-for="(card, i) in cards"
        :key="i"
        :card="card"
      />
    </div>
  </div>
</template>

<script>
import TechnicalShop from '~/components/TechnicalShop/TechnicalShop.vue'
export default {
  components: {
    TechnicalShop
  },
  layout: 'second',
  data() {
    return {
      // Daftar Blog
      cards: []
    }
  },
  mounted() {
      this.getCards();
    },
  methods: {
    async getCards() {
      const response = await this.$axios.get("/rest/v1/cards", {
        headers: {
          apikey: process.env.supabaseKey
        }
      })
      this.cards = response?.data
    },
  }
}
</script>
