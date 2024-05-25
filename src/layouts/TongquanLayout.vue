<script setup lang="ts">
import { computed, onMounted, ref, watch } from 'vue';
import numeral from 'numeral';
import { serviceLoaisanpham } from './components/loaisanpham/loaisanpham';
import { serviceProduct } from './components/product/product';
import { serviceUser } from './components/user/user';
import { serviceKhachhang } from './components/khachhang/khachhang';
import { serviceKho } from './components/kho/kho';
import { serviceNhacungcap } from './components/nhacungcap/nhacungcap';
import { serviceDonhang } from './components/donhang/donhang';
import { servicePhieumuahang } from './components/phieumuahang/phieumuahang';

import { serviceCongnocuakhachhang } from './components/congnocuakhachhang/congnocuakhachhang';
import { serviceCongnovoinhacungcap } from './components/congnovoinhacungcap/congnovoinhacungcap';

const loaisanpham = ref([]);
const tongsoLoaisanpham = ref(0);

const sanpham = ref([]);
const tongsoSanpham = ref(0);

const nhanvien = ref([]);
const tongsoNhanvien = ref(0);

const khachhang = ref([]);
const tongsoKhachhang = ref(0);

const phieumuahang = ref([]);
const tongsoPhieumuahang = ref(0);

const kho = ref([]);
const tongsoKho = ref(0);

const nhacungcap = ref([]);
const tongsoNhacungcap = ref(0);

const donhang = ref([]);
const tongsoDonhang = ref(0);

const congnocuakhachhang = ref([]);
const tongcono = ref(0);

const congnovoinhacungcap = ref([]);
const tongcongno = ref(0);

onMounted(async () => {
  try {
    getAllLoaisanpham();
    getAllSanpham();
    getAllNhanvien();
    getAllKhachhang();
    getAllKho();
    getAllNhacungcap();
    getAllDonhang();
    getAllCongnocuakhachhang();
    getAllPhieumuahang();
    getAllCongnovoinhacungcap();
  } catch (error) {
    console.log(error);
  }
});

const getAllLoaisanpham = async () => {
  const res = await serviceLoaisanpham.getAllLoaisanpham();
  loaisanpham.value = res;
  tongsoLoaisanpham.value = Object.keys(loaisanpham.value).length - 1;
};

const getAllSanpham = async () => {
  const res = await serviceProduct.getAllProduct();
  sanpham.value = res;
  tongsoSanpham.value = Object.keys(sanpham.value).length - 1;
};

const getAllNhanvien = async () => {
  const res = await serviceUser.getAllUser();
  // nhanvien.value = res;
  // tongsoNhanvien.value = Object.keys(nhanvien.value).length - 1;
  tongsoNhanvien.value = res.totalItems;
  // console.log(res.totalItems);
};

const getAllKhachhang = async () => {
  const res = await serviceKhachhang.getAllKhachhang();
  khachhang.value = res;
  tongsoKhachhang.value = Object.keys(khachhang.value).length - 1;
};

const getAllKho = async () => {
  const res = await serviceKho.getAllKho();
  kho.value = res;
  tongsoKho.value = Object.keys(kho.value).length - 1;
};

const getAllNhacungcap = async () => {
  const res = await serviceNhacungcap.getAllNhacungcap();
  nhacungcap.value = res;
  tongsoNhacungcap.value = Object.keys(nhacungcap.value).length - 1;
};

const getAllDonhang = async () => {
  const res = await serviceDonhang.getAllDonhang();
  donhang.value = res;
  tongsoDonhang.value = Object.keys(donhang.value).length - 1;
};

const getAllPhieumuahang = async () => {
  const res = await servicePhieumuahang.getAllPhieumuahang();
  phieumuahang.value = res;
  tongsoPhieumuahang.value = Object.keys(phieumuahang.value).length - 1;
};

const getAllCongnocuakhachhang = async () => {
  const res = await serviceCongnocuakhachhang.getAllCongnocuaKH();
  congnocuakhachhang.value = res;
  const lengthCongno = Object.keys(congnocuakhachhang.value).length - 1;
  for (var i = 0; i < lengthCongno; i++) {
    tongcono.value += congnocuakhachhang.value[i].sotienconno;
  }
};

const getAllCongnovoinhacungcap = async () => {
  const res = await serviceCongnovoinhacungcap.getAllCongnovoinhacungcap();
  congnovoinhacungcap.value = res;
  const lengthCongno = Object.keys(congnovoinhacungcap.value).length - 1;
  for (var i = 0; i < lengthCongno; i++) {
    tongcongno.value += congnovoinhacungcap.value[i].sotienconno;
  }
};

const formatMoney = (money) => {
  return numeral(money).format('0,0') + ' ₫';
};
</script>

<template>
  <component :is="Component" />
  <div class="ml-5 mr-4">
    <v-row align="center" justify="center" dense>
      <v-col cols="12" md="4">
        <v-card class="mx-auto text-name-user" title="Số loại sản phẩm">
          <template v-slot:append>
            <v-icon color="success" icon="mdi mdi-dropbox"></v-icon>
          </template>
          <v-card-text class="text-price-user text-success">{{
            tongsoLoaisanpham
          }}</v-card-text>
        </v-card>
      </v-col>

      <v-col cols="12" md="4">
        <v-card class="mx-auto text-name-user" title="Số sản phẩm">
          <template v-slot:append>
            <v-icon color="success" icon="mdi mdi-package-variant-closed"></v-icon>
          </template>
          <v-card-text class="text-price-user text-success">{{
            tongsoSanpham
          }}</v-card-text>
        </v-card>
      </v-col>

      <v-col cols="12" md="4">
        <v-card class="mx-auto text-name-user" title="Số nhân viên">
          <template v-slot:append>
            <v-icon color="success" icon="mdi mdi-account-group"></v-icon>
          </template>
          <v-card-text class="text-price-user text-success">{{
            tongsoNhanvien
          }}</v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <!-- ------------------------------------------------------------------------------------------------------- -->
    <v-row align="center" justify="center" dense>
      <v-col cols="12" md="4">
        <v-card class="mx-auto text-name-user" title="Số khách hàng">
          <template v-slot:append>
            <v-icon color="success" icon="mdi mdi-account-tie"></v-icon>
          </template>
          <v-card-text class="text-price-user text-success">{{
            tongsoKhachhang
          }}</v-card-text>
        </v-card>
      </v-col>

      <v-col cols="12" md="4">
        <v-card class="mx-auto text-name-user" title="Số kho">
          <template v-slot:append>
            <v-icon color="success" icon="mdi mdi-warehouse"></v-icon>
          </template>
          <v-card-text class="text-price-user text-success">{{ tongsoKho }}</v-card-text>
        </v-card>
      </v-col>

      <v-col cols="12" md="4">
        <v-card class="mx-auto text-name-user" title="Số nhà cung cấp">
          <template v-slot:append>
            <v-icon color="success" icon="mdi mdi-charity"></v-icon>
          </template>
          <v-card-text class="text-price-user text-success">{{
            tongsoNhacungcap
          }}</v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <!-- --------------------------------------------------------------------- -->
    <v-row align="center" justify="center" dense>
      <v-col cols="12" md="4">
        <v-card class="mx-auto text-name-user" title="Số đơn hàng">
          <template v-slot:append>
            <v-icon color="success" icon="mdi mdi-cart-variant"></v-icon>
          </template>
          <v-card-text class="text-price-user text-success">{{
            tongsoDonhang
          }}</v-card-text>
        </v-card>
      </v-col>

      <v-col cols="12" md="4">
        <v-card class="mx-auto text-name-user" title="Số phiếu mua hàng">
          <template v-slot:append>
            <v-icon color="success" icon="mdi mdi-card-bulleted-outline"></v-icon>
          </template>
          <v-card-text class="text-price-user text-success">{{
            tongsoPhieumuahang
          }}</v-card-text>
        </v-card>
      </v-col>

      <v-col cols="12" md="4">
        <v-card class="mx-auto text-name-user" title="Tổng công nợ với nhà cung cấp">
          <template v-slot:append>
            <v-icon color="success" icon="mdi mdi-account-group"></v-icon>
          </template>
          <v-card-text class="text-price-user text-success">{{
            formatMoney(tongcongno)
          }}</v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <!-- --------------------------------------------------------- -->
    <v-row align="center" justify="center" dense>
      <v-col cols="12" md="4">
        <v-card class="mx-auto text-name-user" title="Tổng công nợ của khách hàng">
          <template v-slot:append>
            <v-icon color="success" icon="mdi mdi-account-credit-card-outline"></v-icon>
          </template>
          <v-card-text class="text-price-user text-success">{{
            formatMoney(tongcono)
          }}</v-card-text>
        </v-card>
      </v-col>

      <!-- <v-col cols="12" md="4">
        <v-card class="mx-auto text-name-user" title="Số phiếu mua hàng">
          <template v-slot:append>
            <v-icon color="success" icon="mdi mdi-card-bulleted-outline"></v-icon>
          </template>
          <v-card-text class="text-price-user text-success">{{}}</v-card-text>
        </v-card>
      </v-col>

      <v-col cols="12" md="4">
        <v-card class="mx-auto text-name-user" title="Tổng công nợ với nhà cung cấp">
          <template v-slot:append>
            <v-icon color="success" icon="mdi mdi-account-group"></v-icon>
          </template>
          <v-card-text class="text-price-user text-success">{{}}</v-card-text>
        </v-card>
      </v-col> -->
    </v-row>
    <!-- <v-row>
      <v-col cols="12" md="4">
        <v-card class="mx-auto text-name-user" title="Tổng công nợ của khách hàng">
          <template v-slot:append>
            <v-icon color="success" icon="mdi mdi-account-credit-card-outline"></v-icon>
          </template>
          <v-card-text class="text-price-user text-success">{{
            formatMoney(tongcono)
          }}</v-card-text>
        </v-card>
      </v-col>
    </v-row> -->
  </div>
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
}
#description {
  white-space: nowrap;
  width: 50px;
  overflow: hidden;
  text-overflow: ellipsis;
}

.text-name-user {
  font-family: 'Public Sans', sans-serif;
  font-weight: 600;
  font-size: 15px;
  line-height: 22px;
}
.text-price-user {
  font-family: 'Public Sans', sans-serif;
  font-weight: 600;
  font-size: 25px;
  line-height: 22px;
}
</style>
