<template>
  <div class="container py-24 mx-auto w-3/4">
    <form @submit.prevent="onFormSubmit">
      <!-- <input id="id" v-model="title" type="hidden" class="p-1 border-2 border-paletorange rounded-md focus:outline-none focus:border-darkcyan w-full" name="id"> -->
      <div class="form-group my-2">
        <label for="title" class="text-primary text-base font-semibold">Judul Artikel</label>
        <input id="title" v-model="title" type="text" class="p-1 border-2 border-paletorange rounded-md focus:outline-none focus:border-darkcyan w-full" name="title">
      </div>
      <div class="form-group my-2">
        <label for="description" class="text-primary text-base font-semibold">Description</label>
        <textarea id="description" v-model="description" class="p-1 border-2 border-paletorange rounded-md focus:outline-none focus:border-darkcyan w-full" name="description" rows="3"></textarea>
      </div>
      <div class="form-group my-2">
        <label for="img" class="text-primary text-base font-semibold">Link Image</label>
        <input id="img" v-model="img" type="text" class="p-1 border-2 border-paletorange rounded-md focus:outline-none focus:border-darkcyan w-full" name="img">
      </div>
      <div class="form-group my-2">
        <label for="link" class="text-primary text-base font-semibold">Link Web</label>
        <input id="link" v-model="link" type="text" class="p-1 border-2 border-paletorange rounded-md focus:outline-none focus:border-darkcyan w-full" name="link">
      </div>
      <button class="w-full block font-medium text-center text-base bg-primary py-1 rounded-md text-white hover:opacity-80 mb-2" type="submit">Finish</button>
    </form>
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
    async onFormSubmit() {
      const dataForm = {
        title: document.getElementById("title").value,
        description: document.getElementById("description").value,
        img: document.getElementById("img").value,
        link: document.getElementById("link").value,
      }
      const response = await fetch(process.env.supabaseApi + '/rest/v1/cards?id=eq.' + this.cardId, {
        method: 'PATCH',
        headers: {
          apikey: process.env.supabaseKey,
          "Content-Type": "application/json",
          Prefer: "return=representation"
        },
        body: JSON.stringify(dataForm)
      })
      const data = await response?.json()
      this.$router.push(`/adminPageCard/detail/${data[0]?.id}`)
    }
  }

}
</script>