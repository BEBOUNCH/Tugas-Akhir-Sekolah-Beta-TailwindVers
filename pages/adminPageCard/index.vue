<template>
  <div class="container py-24 mx-auto w-3/4">
    <h3 class="text-primary text-2xl font-semibold mb-2">Administrator Cards</h3>
    <div class="d-grid gap-2">
      <nuxt-link to="/adminPageCard/form/TambahImage" class="w-full block mb-2 font-medium text-center text-lg bg-primary py-1 rounded-md text-white md:text-md hover:opacity-80">Set Image</nuxt-link>
    </div>
    <div class="container flex flex-wrap justify-evenly my-4 mx-auto">
      <TechnicalAdmin
          v-for="(card, idx) in cards"
          :key="idx"
          :title="card?.title"
          :description="card?.description"
          :card-id="card?.id"
          :img="card?.img"
          :link="card?.link"
        />
    </div>
    <div class="d-grid gap-2">
      <nuxt-link to="/adminPageCard/form/TambahCard" class="w-full block font-medium text-center text-lg bg-darkcyan py-1 rounded-md text-white md:text-md hover:opacity-80">Add Card</nuxt-link>
    </div>
  </div>
</template>
<script>
import TechnicalAdmin from "@/components/adminPage/TechnicalAdmin/TechnicalAdmin.vue"
export default {
  components: {
    TechnicalAdmin
  },
  layout: 'admin',
  data() {
    return {
      // Daftar Item
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
    },
  }
</script>
