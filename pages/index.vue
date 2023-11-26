<template>
  <div class="container mx-auto">
    <HeaderFirst @hasilInput="eksekusiHasilInput"/>
      <div id="listCart" class="z-50 bg-fourth top-0 left-0 w-1/2 h-full fixed overflow-auto border-r-2 border-paletorange sm:w-2/6 md:w-1/4 xl:1/5 hidden">
        <div class="fixed w-1/2 h-9 z-50 bg-white flex justify-between items-center border-r-2 border-paletorange sm:w-2/6 md:w-1/4 xl:1/5">
          <h1 class="text-darkcyan font-medium text-sm mx-2 lg:text-lg">You Cart</h1>
          <button style="button" class="w-1/5 font-semibold rotate-45 text-2xl absolute right-0 z-10 text-darkcyan md:text-3xl lg:text-4xl xl-text-5xl hover:opacity-80" @click="closeCart">+</button>
        </div>
        <div class="w-full px-0.5 pt-11 pb-16">
          <CartShop
            v-for="(isiCart, index) in isiCarts"
            :key="index"
            :isi-cart="isiCart"
            :index="index"
            @resetItemCart="resetItemCart"
            @incrementCounter="incrementCounter"
            @decrementCounter="decrementCounter"
          />
        </div>
        <div class="fixed w-1/2 h-24 left-0 bottom-0 border-r-2 border-paletorange sm:w-2/6 md:w-1/4 xl:1/5 z-50">
          <div class=" bg-slate-100 h-3/5 px-1 flex flex-wrap justify-between items-center border-2 border-darkcyan">
            <h6 class="text-darkcyan font-medium text-xs sm:text-sm lg:text-base">Price Total:</h6>
            <div class="flex justify-center">
              <button type="button" class="font-medium text-base text-darkcyan mx-1 md:text-xl lg:text-2xl xl:text-3x hover:opacity-80" @click="incrementDay">+</button>
              <button type="button" class="font-medium text-lg text-darkcyan mx-1 md:text-xl lg:text-2xl xl:text-3x hover:opacity-80" @click="decrementDay">-</button>
            </div>
            <h6 class="text-darkcyan font-medium text-xs sm:text-sm lg:text-base w-full">Rp<strong>{{total}}</strong> for <strong>{{daysBorrow}} Day</strong></h6>
          </div>
          <div class="bg-darkcyan h-2/5 hover:opacity-80">
            <button type="button" class="text-white font-medium text-xs w-full h-full lg:text-lg" @click="checkout">Checkout</button>
          </div>
        </div>
      </div>
    <div class="py-14">
      <div class="w-full pt-2 flex flex-wrap md:pt-7">
        <GearShop
          v-for="(item, index) in resultQuery"
          :key="index"
          :item="item"
          :index="index"
          @handleButtonClick="handleButtonClick"
        />
      </div>
    </div>
  </div>
</template>

<script>
import GearShop from "~/components/GearShop/GearShop.vue"
import HeaderFirst from "~/components/HeaderFirst.vue"
import CartShop from "~/components/CartShop/CartShop.vue"
export default {
  components: {
    GearShop,
    HeaderFirst,
    CartShop
  },
  data() {
    return {
      // Daftar task
      items: [],
      // Variabel penampung teks pencarian
      filterQuery: '',
      // Penampung cart
      isiCarts: [],
      // Penampung keterangan lama meminjam
      daysBorrow: 1
    }
  },
  computed: {
    resultQuery() {
      if (this.filterQuery) {
        return this.items.filter((gear) => {
          return this.filterQuery
            .toLowerCase()
            .split(" ")
            .every((v) => gear.title.toLowerCase().includes(v));
        });
    }
      else {
        return this.items
      }
    },
    total() {
      const total = this.isiCarts.reduce((total, item) => total + (item.price * item.amount), 0); 
      return total * this.daysBorrow
    },
  },
  mounted() {
    this.getGearItems();
  },
  methods: {
    async getGearItems() {
        const response = await this.$axios.get("/rest/v1/items", {
          headers: {
            apikey: process.env.supabaseKey
          }
        })
        this.items = response?.data
      },
    eksekusiHasilInput(text) {
      this.filterQuery = text;
    },
    handleButtonClick(dataIndex) {
      for (let i = 0; i < this.isiCarts.length; i++) {
        if (this.isiCarts[i].title === this.items[dataIndex].title) {
          return this.isiCarts[i].amount++
        }
      }
      this.isiCarts.push(this.items[dataIndex])
    },
    resetItemCart(dataIndex) {
      this.isiCarts.splice([dataIndex], 1)
    },
    incrementCounter(dataIndex) {
      this.isiCarts[dataIndex].amount++
    },
    decrementCounter(dataIndex) {
      if (this.isiCarts[dataIndex].amount === 1) {
        return alert('The Minimum Amount Of Item Must Be 1')
      }
      this.isiCarts[dataIndex].amount--
    },
    incrementDay() {
      this.daysBorrow++
    },
    decrementDay() {
      if (this.daysBorrow === 1) {
        return alert('The Minimum Amount day to borrow is 1 day')
      }
      this.daysBorrow--
    },
    closeCart() {
      const listCart = document.querySelector('#listCart');
      listCart.classList.add('hidden')
    },
    checkout() {
      this.isiCarts = []
      alert('Your cart has been checked out!!. But it is dummy...' )
    }
  }
}
</script>
