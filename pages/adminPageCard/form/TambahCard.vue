<template>
  <div class="container py-24 mx-auto w-3/4">
    <form @submit.prevent="onFormSubmit">
      <div class="my-2">
        <label for="title" class="text-primary text-base font-semibold">Judul Artikel</label>
        <input id="title" type="text" class="p-1 border-2 border-paletorange rounded-md focus:outline-none focus:border-darkcyan w-full" name="title">
      </div>
      <div class="my-2">
        <label for="description" class="text-primary text-base font-semibold">Description</label>
        <textarea id="description" class="p-1 border-2 border-paletorange rounded-md focus:outline-none focus:border-darkcyan w-full" name="description" rows="3"></textarea>
      </div>
      <div class="my-2">
        <label for="img" class="text-primary text-base font-semibold">Link Image</label>
        <input id="img" v-model="img" type="text" class="p-1 border-2 border-paletorange rounded-md focus:outline-none focus:border-darkcyan w-full" name="img">
      </div>
      <div class="my-2">
        <label for="link" class="text-primary text-base font-semibold">Link Web</label>
        <input id="link" type="text" class="p-1 border-2 border-paletorange rounded-md focus:outline-none focus:border-darkcyan w-full" name="link">
      </div>
        <button class="w-full block font-medium text-center text-base bg-primary py-1 rounded-md text-white hover:opacity-80" type="submit">Tambah Article</button>
    </form>
  </div>
</template>

<script>
export default {
  layout: 'admin',
  data() {
    return{
      img: `${process.env.supabaseApi}/storage/v1/object/public/photoCard/`
    }
  },
  methods: {
    async onFormSubmit () {
      const dataForm = {
        title: document.getElementById("title").value,
        description: document.getElementById("description").value,
        img: document.getElementById("img").value,
        link: document.getElementById("link").value,
      }
      const response = await fetch(process.env.supabaseApi + '/rest/v1/cards', {
        method: 'POST',
        headers: {
          apikey: process.env.supabaseKey,
          "Content-Type": "application/json",
          Prefer: "return=representation"
        },
        body: JSON.stringify(dataForm)
      })
      const data = await response?.json()
      this.$router.push(`/adminPageCard/detail/${data[0]?.id}`)
      // console.log(data)
    }
  }
}
</script>