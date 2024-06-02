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
import { serviceChitietdonhang } from './components/chitietdonhang/chitietdonhang';

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
const doanhthu = ref(0);
const phinhap = ref(0);

const chitietdonhang = ref([]);
const chitietdonhangs = ref([]);
const bestSelleingProduct = ref([]);

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
    getTopSellingProducts();
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
  for (var i = 0; i < tongsoDonhang.value; i++) {
    doanhthu.value += donhang.value[i].thanhtien;
  }
};

const getAllPhieumuahang = async () => {
  const res = await servicePhieumuahang.getAllPhieumuahang();
  phieumuahang.value = res;
  tongsoPhieumuahang.value = Object.keys(phieumuahang.value).length - 1;
  for (var i = 0; i < tongsoPhieumuahang.value; i++) {
    phinhap.value += phieumuahang.value[i].tongtien;
  }
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

// const getBestSellingProduct = async () => {
//   try {
//     const res = await serviceChitietdonhang.getAllChitietdonhang();
//     chitietdonhang.value = res;

//     const productSales = {};
//     chitietdonhang.value.forEach((item) => {
//       if (!productSales[item.sanphamid]) {
//         productSales[item.sanphamid] = 0;
//       }
//       productSales[item.sanphamid] += item.soluong;
//     });
//   } catch (error) {
//     console.error('Error: ', error);
//   }
// };
const getTopSellingProducts = async () => {
  try {
    // Lấy tất cả chi tiết đơn hàng
    const res = await serviceChitietdonhang.getAllChitietdonhang();
    chitietdonhang.value = res;

    // Tính tổng số lượng bán ra của từng sản phẩm
    const productSales = {};
    var length = Object.keys(chitietdonhang.value).length;
    for (var i = 0; i < length - 1; i++) {
      chitietdonhangs.value.push(chitietdonhang.value[i]);
    }
    chitietdonhangs.value.forEach((item) => {
      if (!productSales[item.sanphamid]) {
        productSales[item.sanphamid] = 0;
      }
      productSales[item.sanphamid] += item.soluong;
    });

    // Chuyển đổi đối tượng thành mảng và sắp xếp theo tổng số lượng bán ra
    const sortedProductSales = Object.entries(productSales)
      .sort(([, salesA], [, salesB]) => salesB - salesA)
      .slice(0, 5); // Lấy ra 5 sản phẩm có số lượng bán ra cao nhất

    // Lấy thông tin chi tiết của các sản phẩm bán chạy nhất
    bestSelleingProduct.value = await Promise.all(
      sortedProductSales.map(async ([productId]) => {
        const product = await serviceProduct.getProductDetail(productId);
        return product;
      }),
    );

    console.log('Top Selling Products:', bestSelleingProduct.value);
    return bestSelleingProduct.value;
  } catch (error) {
    console.error('Error: ', error);
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

      <v-col cols="12" md="4">
        <v-card class="mx-auto text-name-user" title="Doanh thu">
          <template v-slot:append>
            <v-icon color="success" icon="mdi-currency-usd"></v-icon>
          </template>
          <v-card-text class="text-price-user text-success">{{
            formatMoney(doanhthu)
          }}</v-card-text>
        </v-card>
      </v-col>

      <v-col cols="12" md="4">
        <v-card class="mx-auto text-name-user" title="Phí nhập hàng">
          <template v-slot:append>
            <v-icon color="success" icon="mdi-cash-100"></v-icon>
          </template>
          <v-card-text class="text-price-user text-success">{{
            formatMoney(phinhap)
          }}</v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <v-row align="center" class="text-price-user text-success mt-4 mb-4" dense>
      Top 5 sản phẩm bán chạy </v-row
    ><v-table style="border-radius: 12px 12px 0 0">
      <thead>
        <tr>
          <th style="height: 47px" class="text-table text-uppercase">STT</th>
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
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, i) in bestSelleingProduct" :key="i">
          <td style="padding: 18px 0 18px 18px" class="text-price-product">
            {{ ++i }}
          </td>
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
          <td class="text-left text-price-product">{{ item.macsac }}</td>
        </tr>
      </tbody>
    </v-table>
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

.text-price-product {
  font-family: 'Public Sans', sans-serif;
  font-weight: 400;
  font-size: 15px;
  line-height: 22px;
}
.text-name-product {
  font-family: 'Public Sans', sans-serif;
  font-weight: 600;
  font-size: 15px;
  line-height: 22px;
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
