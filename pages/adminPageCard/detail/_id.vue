<template>
  <div class="container py-24 mx-auto w-2/5">
    <div class="card 0">
      <button class="w-full block font-medium text-center text-base bg-darkcyan py-1 rounded-md text-white hover:opacity-80" to="/adminPageCard/form/TambahCard" @click="onEdit">Edit Artikel</button>
      <div class="container text-center my-2">
        <h5 class="font-semibold text-lg text-primary">{{ title }}</h5>
        <p class="font-normal text-darkcyan text-md">{{ description }}</p>
        <p class="font-light text-darkcyan text-xs mb-1">{{ link }}</p>
      <img :src="img" class="mx-auto" alt="err">
        <p class="font-light text-darkcyan text-xs">{{ img }}</p>
      </div>
      <button class="w-full block font-medium text-center text-base bg-primary py-1 rounded-md text-white hover:opacity-80 mb-2" to="/adminPageCard" @click="onEnd">Finish</button>
      <button type="button" class="w-full block font-medium text-center text-base bg-red-500 py-1 rounded-md text-white hover:opacity-80" @click="deleteCard">Delete</button>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'admin',
  data() {
    return {
      title: '',
      description: '',
      img: '',
      link: '',
      cardId: ''
    }
  },
  mounted() {
    const params = this.$route.params
    this.getDetailData(params?.id)
  },
  methods: {
    async getDetailData (cardId) {
      const response = await fetch(process.env.supabaseApi + '/rest/v1/cards?id=eq.' + cardId, {
        headers: {
          apikey: process.env.supabaseKey
        }
      })

      const data = await response.json()

      this.title = data[0]?.title
      this.description = data[0]?.description
      this.img = data[0]?.img
      this.link = data[0]?.link
      this.cardId = data[0]?.id
    },
    onEdit() {
      this.$router.push(`/adminPageCard/form/${this.cardId}/edit`)
    },
    onEnd() {
      this.$router.push(`/adminPageCard`)
    },
    deleteCard() {
      this.deleteCards()
    },
    async deleteCards() {
      const response = await this.$axios.delete("/rest/v1/cards?id=eq." + this.cardId, {
        headers: {
          apikey: process.env.supabaseKey
        }
      })
      this.cards = response?.data
      this.$router.push(`/adminPageCard`)
    }
  }
}
</script>
