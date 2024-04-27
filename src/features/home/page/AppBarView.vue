<template>
  <div class="app-bar d-flex align-center justify-center" style="margin: auto">
    <div class="d-flex align-center justify-center">
      <div class="d-flex align-center justify-center" style="width: 208px">
        <v-img :src="logo" style="padding: 24px 16px"></v-img>
      </div>
    </div>
    <!--  -->
    <div class="d-flex align-center justify-center">
      <div class="d-flex align-center justify-center" style="width: 175px; height: 40px">
        <p class="text-sell">Sell on Shopka</p>
      </div>
    </div>
    <!--  -->
    <div class="d-flex align-center justify-center">
      <div
        class="d-flex align-center justify-center"
        style="width: 112px; height: 40px; margin-right: 91px"
      >
        <p class="text-register">Register</p>
      </div>
    </div>
    <!--  -->
    <!-- append-inner-icon="mdi mdi-close" -->
    <v-text-field
      density="compact"
      variant="solo-filled"
      label="Tìm kiếm"
      style="max-width: 668px; border-radius: 30px !important"
      rounded
      prepend-inner-icon="mdi-magnify"
      v-model="props.search"
      clearable
      single-line
      flat
      hide-details
    ></v-text-field>
    <!-- <input type="text" style="max-width: 668px; height: 40px" /> -->
    <!--  -->
    <div class="d-flex align-center justify-center">
      <div
        class="d-flex align-center justify-center"
        style="width: 242px; height: 40px; margin-left: 14px"
      >
        <p class="consumer">Consumer Electronics</p>
      </div>
    </div>
    <!--  -->
    <!-- color="#9DC2FF" -->
    <div class="d-flex align-center justify-center">
      <v-btn
        variant="outlined"
        style="border: 1px solid #9dc2ff"
        flat
        width="104"
        height="40"
        class="text-btn-sign-in"
        >S
        <p class="text-lowercase">ign in</p></v-btn
      >
    </div>
    <!--  -->
    <div class="d-flex align-center justify-center">
      <!-- <v-btn
        style="margin-left: 21px; box-shadow: 1px 1px 2px 1px #9dc2ff"
        width="104"
        height="40"
        class="text-btn-sign-in"
        >M
        <p class="text-lowercase">y cart</p></v-btn
      > -->
      <v-badge content="5" class="mr-2" overlap color="red">
        <v-btn
          style="margin-left: 21px; box-shadow: 1px 1px 2px 1px #9dc2ff"
          width="104"
          height="40"
          class="text-btn-sign-in"
          >M
          <p class="text-lowercase">y cart</p></v-btn
        >
      </v-badge>
    </div>
    <div class="d-flex align-center justify-center ml-4">
      <v-img
        :src="AvatarUser"
        width="40"
        height="40"
        style="border-radius: 100px"
      ></v-img>
    </div>
  </div>
  <!--  -->
</template>

<script setup lang="ts">
import logo from '@/assets/images/Logo.png';
import avt from '@/assets/images/Photo.png';
// import { ref } from 'vue';

const AvatarUser = localStorage.getItem('AVATAR');

const props = defineProps<{
  search: string;
}>();

// const searchProduct = computed(() => {
//   const keyword = search.value.toLowerCase();
//   return products.value.filter((p) => p.name.toLowerCase().includes(keyword));
// });

// const search = ref('');
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@100..900&family=Quicksand:wght@300..700&display=swap');
.app-bar {
  max-width: 1920px;
  height: 88px;
}

.text-sell {
  font-family: 'Inter', sans-serif;
  font-weight: 500;
  font-size: 20px;
  line-height: 31.6px;
  color: #5a5b6a;
}
.text-register {
  font-family: 'Inter', sans-serif;
  font-weight: 400;
  font-size: 20px;
  line-height: 31.6px;
  color: #5a5b6a;
}
.consumer {
  font-family: 'Inter', sans-serif;
  font-weight: 400;
  font-size: 20px;
  line-height: 31.6px;
  color: #2264d1;
}
.text-btn-sign-in {
  font-family: 'Quicksand', sans-serif;
  font-weight: 700;
  font-size: 20px;
  line-height: 30px;
  color: #2264d1 !important;
}
</style>
