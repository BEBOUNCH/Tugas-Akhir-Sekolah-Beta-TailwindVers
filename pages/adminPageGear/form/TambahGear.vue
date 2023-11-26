<template>
  <div class="container py-24 mx-auto w-3/4">
    <form @submit.prevent="onFormSubmit">
      <div class="my-2">
        <label for="title" class="text-primary text-base font-semibold">Product Name: </label>
        <input id="title" type="text" class="p-1 border-2 border-paletorange rounded-md focus:outline-none focus:border-darkcyan w-full" name="title">
      </div>
      <div class="my-2">
        <label for="mainDes" class="text-primary text-base font-semibold">Main Description: </label>
        <br>
        <textarea id="mainDes" class="p-1 border-2 border-paletorange rounded-md focus:outline-none focus:border-darkcyan w-full" name="mainDes" rows="3"></textarea>
      </div>
      <div class="my-2">
        <label for="img" class="text-primary text-base font-semibold">Link Image: </label>
        <input id="img" v-model="img" type="text" class="p-1 border-2 border-paletorange rounded-md focus:outline-none focus:border-darkcyan w-full" name="img">
      </div>
      <div class="my-2">
        <label for="amount" class="text-primary text-base font-semibold">Amount / Product: </label>
        <input id="amount" type="text" class="p-1 border-2 border-paletorange rounded-md focus:outline-none focus:border-darkcyan w-full" name="amount">
      </div>
      <div class="my-2">
        <label for="price" class="text-primary text-base font-semibold">Price: </label>
        <input id="price" type="text" class="p-1 border-2 border-paletorange rounded-md focus:outline-none focus:border-darkcyan w-full" name="price">
      </div>
        <button class="w-full block font-medium text-center text-base bg-primary py-1 rounded-md text-white hover:opacity-80" type="submit">Add Item Gear</button>
    </form>
  </div>
</template>

<script>
export default {
  layout: 'admin',
  data() {
    return{
      img: `${process.env.supabaseApi}/storage/v1/object/public/photoItems/`
    }
  },
  methods: {
    async onFormSubmit () {
      const dataForm = {
        title: document.getElementById("title").value,
        mainDes: document.getElementById("mainDes").value,
        img: document.getElementById("img").value,
        amount: document.getElementById("amount").value,
        price: document.getElementById("price").value,
      }
      const response = await fetch(process.env.supabaseApi + '/rest/v1/items', {
        method: 'POST',
        headers: {
          apikey: process.env.supabaseKey,
          "Content-Type": "application/json",
          Prefer: "return=representation"
        },
        body: JSON.stringify(dataForm)
      })
      const data = await response?.json()
      this.$router.push(`/adminPageGear/detail/${data[0]?.id}`)
      // console.log(data)
    }
  }
}
</script>