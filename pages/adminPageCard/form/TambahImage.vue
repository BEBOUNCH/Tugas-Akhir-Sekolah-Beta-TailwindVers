<template>
  <div class="container py-24 mx-auto w-3/4 flex flex-wrap">
    <div class="w-full mb-10">
      <form ref="imageForm" enctype="multipart/form-data" @submit.prevent="onFormSubmit">
        <label for="file" class="text-primary text-base font-semibol">Upload Image:</label>
        <br>
        <input id="file" ref="fileInput" name="file" type="file" class="my-2">
        <br>
        <button class="w-full block font-medium text-center text-base bg-primary py-1 rounded-md text-white md:text-md hover:opacity-80" type="submit">Add Image</button>
      </form>
    </div>
    <div class="w-full">
      <form @submit.prevent="onFormDelete">
        <label for="img" class="text-primary text-base font-semibol">Delete Image:</label>
        <br>
        <input id="img" name="img" type="text" class="p-1 my-2 border-2 border-paletorange rounded-md w-full focus:outline-none focus:border-darkcyan">
        <br>
        <button class="w-full block font-medium text-center text-base bg-darkcyan py-1 rounded-md text-white md:text-md hover:opacity-80" type="submit">Delete Image</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'admin',
  data() {
    return {
    }
  },
  methods: {
    async onFormSubmit () {
      const input = this.$refs.fileInput;
      const dataForm = input.files[0].name
      const data = new FormData(this.$refs?.imageForm)
      await fetch(process.env.supabaseApi + '/storage/v1/object/photoCard/' + dataForm, {
        method: 'POST',
        headers: {
          'Authorization': 'Bearer ' + process.env.supabaseKey, 
        },
        body: data
      })
      location.reload();
    },
    onFormDelete () {
      const link = document.getElementById("img").value
      // console.log(link)
      fetch(process.env.supabaseApi + '/storage/v1/object/photoCard/' + link, {
        method: 'DELETE',
        headers: {
          'Authorization': 'Bearer ' + process.env.supabaseKey, 
        }
      })
      location.reload();
    }
  }
}
</script>