<template>
  <div>
    <AppBarView :search="search" />
    <TopNav />

    {{ search }}

    <div style="max-width: 1492px; margin: auto">
      <Department style="max-width: 355px; float: left" />

      <div style="width: 1114px; float: right" class="mt-10">
        <!-- <v-container> -->
        <v-card class="custom-shadow">
          <v-row class="ml-3 mt-3">
            <v-row class="mt-3">
              <v-select
                class="ml-4"
                v-model="SelectedCategory"
                density="compact"
                label="SORT BY"
                style="max-width: 136px"
                :items="['All', 'Quần', 'Áo']"
                variant="outlined"
              ></v-select>
              <v-select
                class="ml-4"
                v-model="selectedSort"
                style="max-width: 112px"
                label="Giá"
                density="compact"
                :items="['Từ cao -> thấp', 'Từ thấp -> cao']"
                variant="outlined"
              ></v-select>
              <v-select
                class="ml-4"
                style="max-width: 152px"
                density="compact"
                :items="[
                  'California',
                  'Colorado',
                  'Florida',
                  'Georgia',
                  'Texas',
                  'Wyoming',
                ]"
                variant="outlined"
              ></v-select>
            </v-row>
            <v-col cols="12" sm="6" md="6" lg="6" class="text-right">
              <v-btn
                class="text-capitalize"
                @click="s = 1"
                :class="s == 1 ? 'selectAction' : 'notSelect'"
                flat
              >
                Show all
              </v-btn>
              <v-btn
                class="text-capitalize"
                @click="s = 2"
                :class="s == 2 ? 'selectAction' : 'notSelect'"
                flat
              >
                Action
              </v-btn>
              <v-btn
                class="text-capitalize"
                @click="s = 3"
                :class="s == 3 ? 'selectAction' : 'notSelect'"
                flat
              >
                Buy now
              </v-btn>
              <v-btn
                class="ml-6"
                @click="ss = 1"
                :class="ss == 1 ? 'selectAction' : 'notSelect'"
              >
                <v-icon>mdi mdi-menu</v-icon>
              </v-btn>
              <v-btn
                class="mr-5"
                @click="ss = 2"
                :class="ss == 2 ? 'selectAction' : 'notSelect'"
              >
                <v-icon>mdi mdi-microsoft</v-icon>
              </v-btn>
            </v-col>
          </v-row>
          <v-row class="mr-3 mt-10">
            <v-col cols="12">
              <v-chip class="text-relate mr-1 ml-4" style="padding: 0" variant="text"
                >Related</v-chip
              >
              <v-chip class="mr-2 text-chip"> worldwide shipping </v-chip>
              <v-chip class="mr-2 text-chip"> under $50 </v-chip>
              <v-chip class="mr-2 text-chip"> kitten </v-chip>
              <v-chip class="mr-2 text-chip"> plastic plugs </v-chip>
              <v-chip class="mr-2 text-chip"> pucker shoes </v-chip>
              <v-chip class="mr-2 text-chip"> vintage typewriter </v-chip>
            </v-col>
          </v-row>
          <v-row class="mr-3 ml-3 mt-1">
            <v-col
              class="d-flex flex-column justify-center align-center"
              v-for="item in products.value"
              :key="item"
              cols="12"
              sm="6"
              md="4"
              lg="3"
            >
              <v-card
                hover
                variant="flat"
                width="259px"
                style="min-height: 472px"
                class="mb-3 my-card"
              >
                <v-img
                  class="mx-auto mt-2"
                  width="227px"
                  height="224px"
                  :src="item.image"
                  style="border-radius: 4px"
                  alt="Product Image"
                ></v-img>
                <v-card-text
                  class="text-name-product"
                  style="
                    font-size: 16px;
                    line-height: 24px;
                    height: 84px;
                    padding: 12px 16px 8px 16px;
                  "
                >
                  {{ item.name }}</v-card-text
                >
                <v-card-text class="text-price-product" style="padding: 16px">
                  {{ formatMoney(item.price) }}
                </v-card-text>
                <p class="mt-2 ml-4 text-description mr-4">
                  {{ item.description }}
                </p>
                <v-row style="margin-top: 5px">
                  <v-col class="ml-4 mt-1" cols="5" style="display: flex">
                    <div class="rating">
                      <input type="radio" id="star-1" name="star-radio" value="star-1" />
                      <label for="star-1">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                          <path
                            pathLength="360"
                            d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z"
                          ></path>
                        </svg>
                      </label>
                      <input type="radio" id="star-2" name="star-radio" value="star-1" />
                      <label for="star-2">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                          <path
                            pathLength="360"
                            d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z"
                          ></path>
                        </svg>
                      </label>
                      <input type="radio" id="star-3" name="star-radio" value="star-1" />
                      <label for="star-3">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                          <path
                            pathLength="360"
                            d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z"
                          ></path>
                        </svg>
                      </label>
                      <input type="radio" id="star-4" name="star-radio" value="star-1" />
                      <label for="star-4">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                          <path
                            pathLength="360"
                            d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z"
                          ></path>
                        </svg>
                      </label>
                      <input type="radio" id="star-5" name="star-radio" value="star-1" />
                      <label for="star-5">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                          <path
                            pathLength="360"
                            d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z"
                          ></path>
                        </svg>
                      </label>
                    </div>
                    <p class="text-rating" style="margin-top: 2px; margin-left: 2px">
                      4.05
                    </p>
                  </v-col>
                  <v-col class="text-right" cols="6">
                    <v-btn
                      width="88"
                      height="32"
                      class="text-capitalize text-btn-watch mr-2"
                      color="primary"
                      size="small"
                      prepend-icon="mdi-heart-outline"
                      variant="outlined"
                    >
                      Watch
                    </v-btn>
                  </v-col>
                </v-row>
              </v-card>
            </v-col>
          </v-row>
        </v-card>
        <v-row class="ma-1">
          <v-col cols="12" sm="12" md="12" lg="4">
            <v-card
              class="pa-5 d-flex flex-column justify-center align-center rounded-1"
              style="min-height: 156px; background-color: #ededf0"
            >
              <img width="80" height="80" :src="footer1" />
              <v-card-title class="text-center">Clear & Usable user flows</v-card-title>
              <v-card-subtitle class="text-center"
                >Let’s boost your marketplace</v-card-subtitle
              >
            </v-card>
          </v-col>
          <v-col cols="12" sm="12" md="12" lg="4">
            <v-card
              class="pa-5 d-flex flex-column justify-center align-center rounded-1"
              style="min-height: 156px; background-color: #ededf0"
            >
              <img width="80" height="80" @click="logValue" :src="footer2" />
              <v-card-title class="text-center">Fine & Styled components</v-card-title>
              <v-card-subtitle class="text-center"
                >Speed up with Setproduct templates</v-card-subtitle
              >
            </v-card>
          </v-col>
          <v-col cols="12" sm="12" md="12" lg="4">
            <v-card
              class="pa-5 d-flex flex-column justify-center align-center rounded-1"
              style="min-height: 156px; background-color: #ededf0"
            >
              <img width="80" height="80" :src="footer3" />
              <v-card-title class="text-center">Customizable & Reusable</v-card-title>
              <v-card-subtitle class="text-center"
                >Take our UX patterns and rebuild</v-card-subtitle
              >
            </v-card>
          </v-col>
        </v-row>
        <!-- </v-container> -->
      </div>
    </div>
  </div>
</template>
  
  <script setup>
import { ref, reactive, computed, onMounted } from 'vue';
import footer1 from '@/assets/footer1.png';
import footer2 from '@/assets/footer2.png';
import footer3 from '@/assets/footer3.png';
import AppBarView from './AppBarView.vue';
import TopNav from './TopNavView.vue';
import Department from './DepartmentView.vue';

import numeral from 'numeral';
import { useProduct } from '@/layouts/components/product/product.store';

const { fetchProducts, query } = useProduct();

const search = ref('');

const searchProduct = computed(() => {
  const keyword = search.value.toLowerCase();
  return products.value.filter((p) => p.name.toLowerCase().includes(keyword));
});

let s = ref(2);
let ss = ref(2);

const products = reactive([]);

onMounted(async () => {
  try {
    getAllProduct();
  } catch (error) {
    console.log(error);
  }
});

const getAllProduct = async () => {
  const res = await fetchProducts();
  products.value = res.data;
  console.log(products.value);
};

const logValue = () => {
  console.log(products.value);
};

const formatMoney = (money) => {
  return '$' + numeral(money).format('0,0');
  // return numeral(money).format('0,0') + ' ₫';
};
const SelectedCategory = ref('All');
const selectedSort = ref(null);
const filteredProducts = computed(() => {
  let filtered = [];

  if (SelectedCategory.value === 'All') {
    filtered = [...products];
  } else {
    filtered = products.filter((product) =>
      product.name.includes(SelectedCategory.value),
    );
  }
  if (selectedSort.value === 'Từ cao -> thấp') {
    return filtered.sort((a, b) => b.price - a.price);
  } else {
    return filtered.sort((a, b) => a.price - b.price);
  }
});
</script>
  
  <style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap');

.selectAction {
  font-weight: bold;
  color: #2264d1;
  background-color: white;
  box-shadow: 2px 2px 10px rgba(97, 158, 255, 0.1);
  border: solid 1px #e4e2e2;
}
.notSelect {
  background-color: #e9effe;
  color: #4d4d50;
}

.custom-shadow {
  margin-top: 16px;
  /* box-shadow: 0px 5px 0px 0px rgba(0, 0, 0, 0.2); */
}
.my-card {
  max-height: 200px; /* Đặt chiều cao tối đa của thẻ */
  overflow: hidden; /* Ẩn phần nội dung vượt quá chiều cao */
}

.my-card-text {
  overflow-y: hidden;
}

.rating {
  display: flex;
  flex-direction: row-reverse;
  gap: 0.1rem;
  --stroke: #666;
  --fill: #ffc73a;
}

.rating input {
  appearance: unset;
}

.rating label {
  cursor: pointer;
}

.rating svg {
  width: 0.9rem;
  height: 0.9rem;
  overflow: visible;
  fill: transparent;
  stroke: var(--stroke);
  stroke-linejoin: bevel;
  stroke-dasharray: 12;
  animation: idle 4s linear infinite;
  transition: stroke 0.2s, fill 0.5s;
}

@keyframes idle {
  from {
    stroke-dashoffset: 24;
  }
}

.rating label:hover svg {
  stroke: var(--fill);
}

.rating input:checked ~ label svg {
  transition: 0s;
  animation: idle 4s linear infinite, yippee 0.75s backwards;
  fill: var(--fill);
  stroke: var(--fill);
  stroke-opacity: 0;
  stroke-dasharray: 0;
  stroke-linejoin: miter;
  stroke-width: 8px;
}

@keyframes yippee {
  0% {
    transform: scale(1);
    fill: var(--fill);
    fill-opacity: 0;
    stroke-opacity: 1;
    stroke: var(--stroke);
    stroke-dasharray: 10;
    stroke-width: 1px;
    stroke-linejoin: bevel;
  }

  30% {
    transform: scale(0);
    fill: var(--fill);
    fill-opacity: 0;
    stroke-opacity: 1;
    stroke: var(--stroke);
    stroke-dasharray: 10;
    stroke-width: 1px;
    stroke-linejoin: bevel;
  }

  30.1% {
    stroke: var(--fill);
    stroke-dasharray: 0;
    stroke-linejoin: miter;
    stroke-width: 8px;
  }

  60% {
    transform: scale(1.2);
    fill: var(--fill);
  }
}

.text-relate {
  font-family: 'Inter', sans-serif;
  font-weight: 500;
  font-size: 14px;
  line-height: 20.02px;
}
.text-chip {
  font-family: 'Inter', sans-serif;
  font-weight: 400;
  font-size: 14px;
  line-height: 20.02px;
  text-align: center;
  color: #4a4b57;
}

.text-name-product {
  font-family: 'Inter', sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  overflow-y: hidden;
}
.text-price-product {
  font-family: 'Inter', sans-serif;
  font-weight: 700;
  font-size: 24px;
  line-height: 36px;
  color: #000000;
}
.text-description {
  font-family: 'Inter', sans-serif;
  font-weight: 400;
  font-size: 14px;
  line-height: 20.02px;
  color: #787885;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.text-rating {
  font-family: 'Inter', sans-serif;
  font-weight: 500;
  font-size: 14px;
  line-height: 22px;
  color: #5e6366;
}
.text-btn-watch {
  font-family: 'Inter', sans-serif;
  font-weight: 500;
  font-size: 14px;
  line-height: 20.02px;
  color: #2264d1;
}
</style>