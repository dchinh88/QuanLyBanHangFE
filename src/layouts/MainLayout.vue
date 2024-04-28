<script setup lang="ts">
import { computed, onMounted, ref, watch } from 'vue';
import AddNew from '../components/product/AddNew.vue';
import EditProduct from '../components/product/EditProduct.vue';
import { serviceProduct } from '../layouts/components/product/product';
import numeral from 'numeral';
import { DEFAULT_LIMIT_FOR_PAGINATION } from '@/common/constants';
import { useProduct } from '../layouts/components/product/product.store';
import { showSuccessNotification } from '@/common/helpers';
import { serviceKho } from '../layouts/components/kho/kho';

const { fetchProducts, query } = useProduct();

const page = ref(1);
const dialogAdd = ref(false);
const dialogEdit = ref(false);
const dialogDelete = ref(false);

const currentProduct = ref('');
const idProduct = ref('');

const totalItems = ref('');

const products = ref([]);
const khos = ref([]);
const id = ref(null);
const search = ref('');

const lengthPage = ref(1);
const selectedValue = ref(DEFAULT_LIMIT_FOR_PAGINATION);

// onMounted(async () => {
//   try {
//     getAllProduct();
//     GetAllKho();
//   } catch (error) {
//     console.log(error);
//   }
// });

onMounted(async () => {
  try {
    getAllProduct();
    GetAllKho();
  } catch (error) {
    console.log(error);
  }
});

const GetAllKho = async () => {
  const res = await serviceKho.getAllKho();
  khos.value = res;
  // console.log(typeof khos.value);
  // console.log(khos.value);
};
const getAllProduct = async () => {
  const res = await fetchProducts();
  products.value = res.data;
  lengthPage.value = Math.ceil(res.totalItems / selectedValue.value);
  totalItems.value = res?.totalItems;
};

// const getAllProduct = async () => {
//   const productList = await serviceProduct.getAllProduct();
//   lengthPage.value = Math.ceil(productList.data.totalItems / selectedValue.value);
//   products.value = productList.data.items;
// };

watch(selectedValue, (newVal) => {
  query.limit = newVal;
  query.page = 1;
  page.value = 1;
  getAllProduct();
  // GetAllKho();
});

watch(page, (newVal) => {
  query.page = newVal;
  getAllProduct();
  // GetAllKho();
});

const searchProduct = computed(() => {
  const keyword = search.value.toLowerCase();
  return products.value.filter((p) => p.tensanpham.toLowerCase().includes(keyword));
});

const closeDialogEdit = () => {
  dialogEdit.value = false;
};

const deleteProduct = async () => {
  try {
    if (!id.value) {
      console.error('not found!');
      return;
    }
    const response = await serviceProduct.deleteProduct(id.value);
    dialogDelete.value = false;
    getAllProduct();
    showSuccessNotification('Xóa sản phẩm thành công');

    console.log('Da xoa: ', response);
  } catch (error) {
    console.error('Loiiiiiiiiiiiiiiiiiiiiii!');
  } finally {
    id.value = null;
  }
};

const getTenkho = (id) => {
  // if (!Array.isArray(khos.value)) {
  //   console.error('khos.value is not an array');
  //   return ''; // Trả về chuỗi rỗng hoặc giá trị mặc định khác
  // }
  // const tk = khos.value.find((i) => i.id === id);
  // return tk ? tk.diachi : '';
  const n = 10;
  for (var i = 0; i < n; i++) {
    if (khos.value[i].id === id) {
      return khos.value[i].tenkho;
    }
  }
};

const formatMoney = (money) => {
  return numeral(money).format('0,0') + ' ₫';
};
//
</script>

<template>
  <!-- <v-app :full-height="true"> -->
  <!-- <SideBar /> -->
  <!-- <v-main> -->
  <!-- <router-view v-slot="{ Component }"> -->
  <component :is="Component" />
  <div class="ml-5 mr-4">
    <v-row>
      <v-col cols="4" class="mt-4">
        <v-text-field
          density="compact"
          variant="solo"
          v-model="search"
          label="Tìm kiếm"
          style="max-width: 316px"
          append-inner-icon="mdi-magnify"
          single-line
          hide-details
        ></v-text-field>
      </v-col>
      <v-col class="text-right mr-4 mt-3">
        <v-btn
          class="text-capitalize text-button"
          color="#0F60FF"
          width="112"
          height="40"
          @click="dialogAdd = true"
        >
          + Tạo
          <p class="text-lowercase">mới</p>
        </v-btn>
      </v-col>
    </v-row>

    <v-row class="mr-2">
      <v-col cols="12">
        <v-table style="border-radius: 12px 12px 0 0">
          <thead>
            <tr>
              <th
                class="text-table text-uppercase"
                style="padding: 0 0 0 36px; height: 47px; max-width: 200px"
              >
                Tên sản phẩm
              </th>
              <th
                style="height: 47px; max-width: 165px !important"
                class="text-table text-uppercase"
              >
                Giá
              </th>
              <th
                style="height: 47px; max-width: 165px !important"
                class="text-table text-uppercase"
              >
                Chất liệu
              </th>
              <th
                style="height: 47px; max-width: 165px !important"
                class="text-table text-uppercase"
              >
                Màu sắc
              </th>
              <th
                style="height: 47px; max-width: 165px !important"
                class="text-table text-uppercase"
              >
                Mô tả
              </th>
              <th
                style="height: 47px; max-width: 165px !important"
                class="text-table text-uppercase"
              >
                Bảo hành
              </th>
              <th
                style="height: 47px; max-width: 127px"
                class="text-table text-uppercase"
              >
                Số lượng tồn
              </th>
              <th
                style="height: 47px; max-width: 165px !important"
                class="text-table text-uppercase"
              >
                Kho
              </th>
              <th
                style="height: 47px; max-width: 165px !important"
                class="text-table text-uppercase"
              >
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, i) in searchProduct" :key="i">
              <td
                class="text-left text-name-product"
                style="
                  height: 58px;
                  padding: 0 36px 0 36px;
                  max-width: 250px;
                  overflow: hidden;
                  text-overflow: ellipsis;
                "
              >
                <!-- white-space: nowrap; -->

                {{ item.tensanpham }}
              </td>

              <td class="text-left text-price-product" style="max-width: 165px">
                {{ formatMoney(item.giaban) }}
              </td>
              <td class="text-left text-price-product">{{ item.chatlieu }}</td>
              <!-- <td
                id="description"
                class="text-left text-price-product"
                colspan="3"
                style="
                  white-space: nowrap;
                  max-width: 150px;
                  overflow: hidden;
                  text-overflow: ellipsis;
                "
              >
                {{ item.macsac }}
              </td> -->
              <td class="text-left text-price-product">{{ item.macsac }}</td>

              <td class="text-left text-price-product">{{ item.mota }}</td>
              <td class="text-left text-price-product">{{ item.baohanh }}</td>
              <td class="text-left text-price-product">{{ item.soluongton }}</td>
              <!-- <td class="text-left text-price-product">
                {{ getTenkho(item.khoid) }}
              </td> -->
              <td class="text-left text-price-product">
                {{ item.khoid }}
              </td>
              <!-- <td class="text-left text-price-product">{{ khos.value.target.id }}</td> -->

              <!-- <td class="text-left">
                <v-img
                  style="height: 35px; width: 35px; border-radius: 2px"
                  :src="item.image"
                ></v-img>
              </td> -->
              <td class="text-left">
                <v-btn
                  icon
                  size="small"
                  flat
                  @click="
                    (dialogEdit = true), (currentProduct = item), (idProduct = item.id)
                  "
                >
                  <v-icon color="#8B909A" icon="mdi mdi-square-edit-outline"></v-icon>
                </v-btn>
                <v-btn
                  icon
                  size="small"
                  flat
                  @click="(dialogDelete = true), (id = item.id)"
                >
                  <v-icon color="#8B909A" icon="mdi mdi-trash-can-outline"> </v-icon>
                </v-btn>
              </td>
              <hr />
            </tr>
          </tbody>
        </v-table>
      </v-col>
    </v-row>
    <v-divider class="pa-1 w-100"></v-divider>
    <div style="background-color: white; border-radius: 0 0 12px 12px" class="mr-5 mb-10">
      <v-row>
        <v-col cols="7">
          <v-row>
            <p class="mt-5 ml-6 showing" style="padding-left: 24px">Showing</p>
            <v-col>
              <v-row>
                <v-select
                  class="mt-3 ml-3 mr-3"
                  v-model="selectedValue"
                  :items="['10', '20', '30', 'All']"
                  density="compact"
                  single-line
                  style="max-width: 85px"
                  label="10"
                  variant="outlined"
                ></v-select>
                <p class="mt-5 showing">of {{ totalItems }}</p>
              </v-row>
            </v-col>
          </v-row>
        </v-col>
        <v-col cols="1"></v-col>
        <v-col cols="4">
          <div class="text-xs-center">
            <v-pagination
              :length="lengthPage"
              active-color="#0F60FF"
              color="#F1F2F6"
              v-model="page"
              density="compact"
              variant="flat"
            ></v-pagination>
          </div>
        </v-col>
      </v-row>
    </div>
  </div>
  <!-- </router-view> -->
  <!-- </v-main> -->
  <add-new
    :dialogAdd="dialogAdd"
    @close="dialogAdd = false"
    @updateData="getAllProduct()"
  />
  <edit-product
    :dialogEdit="dialogEdit"
    :idProduct="idProduct"
    :currentProduct="currentProduct"
    @close="closeDialogEdit"
    @updateData="getAllProduct()"
  />

  <v-dialog max-width="450px" v-model="dialogDelete">
    <v-card>
      <v-alert type="warning">
        <v-row align="center">
          <v-col cols="11" class="text-center"> Bạn có muốn xóa không? </v-col>
        </v-row>
        <v-row align="center">
          <v-spacer></v-spacer>
          <v-col cols="5" variant="text">
            <v-btn @click="deleteProduct">Đồng ý</v-btn>
          </v-col>
          <v-col cols="6" variant="text">
            <v-btn @click="dialogDelete = false">Hủy bỏ</v-btn>
          </v-col>
        </v-row>
      </v-alert>
    </v-card>
  </v-dialog>
  <!-- </v-app> -->
</template>

<style lang="scss" scoped>
:deep(v-layout),
:deep(.v-navigation-drawer) {
  height: 100vh !important;
  border-right: 1px solid #e9e9eb;
}

:deep(.v-navigation-drawer) {
  position: fixed !important;
}
:deep(.v-main) {
  background-color: $color-background-1;
  transition: all 0.24s linear !important;
  transition: 0.24s cubic-bezier(0.4, 0, 0.2, 1);
}

@import url('https://fonts.googleapis.com/css2?family=Public+Sans&display=swap');
.text-table {
  font-family: 'Public Sans', sans-serif;
  font-weight: 500 !important;
  font-size: 13px;
  line-height: 15.28px;
  color: #8b909a !important;
}

.text-button {
  font-family: 'Public Sans', sans-serif;
  font-size: 14px;
  font-weight: 600;
  line-height: 16px;
  color: #ffffff;
}
#description {
  white-space: nowrap;
  width: 50px;
  overflow: hidden;
  text-overflow: ellipsis;
}

.text-name-product {
  font-family: 'Public Sans', sans-serif;
  font-weight: 600;
  font-size: 15px;
  line-height: 22px;
}
.text-price-product {
  font-family: 'Public Sans', sans-serif;
  font-weight: 400;
  font-size: 15px;
  line-height: 22px;
}
</style>



