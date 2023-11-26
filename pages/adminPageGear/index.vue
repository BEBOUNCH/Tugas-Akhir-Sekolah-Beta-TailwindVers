<template>
  <div class="container py-24 mx-auto w-3/4">
    <h3 class="text-primary text-2xl font-semibold mb-2">Administrator Gears</h3>
    <nuxt-link to="/adminPageGear/form/TambahImage" class="w-full block mb-2 font-medium text-center text-lg bg-primary py-1 rounded-md text-white md:text-md hover:opacity-80">Set Image</nuxt-link>
    <div class='w-full flex flex-wrap mb-2'>
        <GearItemAdmin
          v-for="(item, index) in items"
          :key="index"
          :title="item?.title"
          :img="item?.img"
          :main-des="item?.mainDes"
          :price="item?.price"
          :item-id="item?.id"
        />
    </div>
      <nuxt-link to="/adminPageGear/form/TambahGear" class="w-full block font-medium text-center text-lg bg-darkcyan py-1 rounded-md text-white md:text-md hover:opacity-80">Add Gear</nuxt-link>
  </div>
</template>
<script>
import GearItemAdmin from "@/components/adminPage/GearAdmin/GearItemAdmin.vue"
export default {
  components: {
    GearItemAdmin
  },
  layout: 'admin',
  data () {
    return {
      items: []
    }
  },
  mounted() {
    this.getCards();
  },
  methods: {
    async getCards() {
      const response = await this.$axios.get("/rest/v1/items", {
        headers: {
          apikey: process.env.supabaseKey
        }
      })
      this.items = response?.data
    },
  },
}
</script>