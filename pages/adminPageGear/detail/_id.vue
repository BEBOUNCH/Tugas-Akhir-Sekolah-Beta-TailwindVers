<template>
  <div class="container py-24 mx-auto w-2/5">
    <button class="w-full block font-medium text-center text-base bg-darkcyan py-1 rounded-md text-white hover:opacity-80" to="/adminPageGear/form/TambahGear" @click="onEdit">Edit Item Gear</button>
    <div class="container text-center my-2">
      <h5 class="font-semibold text-lg text-primary">{{ title }}</h5>
      <p class="font-normal text-darkcyan text-md">{{ mainDes }}</p>
      <img :src="img" class="mx-auto" alt="err">
      <p class="font-light text-darkcyan text-xs">{{ img }}</p>
      <br>
      <p class="font-normal text-darkcyan text-md">{{ amount }}</p>
      <p class="font-normal text-darkcyan text-md">{{ price }}</p>
    </div>
    <button class="w-full block font-medium text-center text-base bg-primary py-1 rounded-md text-white hover:opacity-80 mb-2" to="/adminPageGear" @click="onEnd">Finish</button>
    <button type="button" class="w-full block font-medium text-center text-base bg-red-500 py-1 rounded-md text-white hover:opacity-80" @click="deleteCard">Delete</button>
  </div>
</template>

<script>
export default {
  layout: 'admin',
  data() {
    return {
      title: '',
      mainDes: '',
      img: '',
      amount: '',
      price: '',
      itemId: ''
    }
  },
  mounted() {
    const params = this.$route.params
    this.getDetailData(params?.id)
  },
  methods: {
    async getDetailData (itemId) {
      const response = await fetch(process.env.supabaseApi + '/rest/v1/items?id=eq.' + itemId, {
        headers: {
          apikey: process.env.supabaseKey
        }
      })

      const data = await response.json()

      this.title = data[0]?.title
      this.mainDes = data[0]?.mainDes
      this.img = data[0]?.img
      this.link = data[0]?.link
      this.itemId = data[0]?.id
    },
    onEdit() {
      this.$router.push(`/adminPageGear/form/${this.itemId}/edit`)
    },
    onEnd() {
      this.$router.push(`/adminPageGear`)
    },
    deleteCard() {
      this.deleteCards()
    },
    async deleteCards() {
      const response = await this.$axios.delete("/rest/v1/items?id=eq." + this.itemId, {
        headers: {
          apikey: process.env.supabaseKey
        }
      })
      this.cards = response?.data
      this.$router.push(`/adminPageGear`)
    }
  }
}
</script>
