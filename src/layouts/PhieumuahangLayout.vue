<script setup lang="ts">
import { computed, onMounted, ref, watch } from 'vue';
import { DEFAULT_LIMIT_FOR_PAGINATION } from '@/common/constants';
import { showSuccessNotification } from '@/common/helpers';
import { usePhieumuahang } from './components/phieumuahang/phieumuahang.store';
import { serviceDonhang } from './components/donhang/donhang';
import numeral from 'numeral';
import { serviceKhachhang } from './components/khachhang/khachhang';
import { serviceNhacungcap } from './components/nhacungcap/nhacungcap';
// import { serviceNhanvien } from './components/nhanvien/nhanvien';
import { serviceUser } from '../layouts/components/user/user';
import { serviceChitietdonhang } from '../layouts/components/chitietdonhang/chitietdonhang';
import { serviceCongnocuakhachhang } from '../layouts/components/congnocuakhachhang/congnocuakhachhang';
import { serviceChitietphieumuahang } from '../layouts/components/chitietphieumuahang/chitietphieumuahang';
import { servicePhieumuahang } from '../layouts/components/phieumuahang/phieumuahang';

import AddPhieumuahang from '../components/phieumuahang/AddPhieumuahang.vue';
// import EditKho from '../components/kho/EditKho.vue';

// const { fetchDonhang, query } = useDonhang();
const { fetchPhieumuahang, query } = usePhieumuahang();

const page = ref(1);
const dialogAdd = ref(false);
const dialogEdit = ref(false);
const dialogDelete = ref(false);

const ctdh = ref([]);
const cthds = ref([]);
const cnkh = ref([]);

const idChitietpmh = ref([]);

const chitietphieumuahang = ref([]);

const phieumuahang = ref([]);

const totalItems = ref('');

const nhacungcap = ref([]);

const donhang = ref([]);
const khachhang = ref([]);
const nhanvien = ref([]);

const id = ref(null);
const search = ref('');

const lengthPage = ref(1);
const selectedValue = ref(DEFAULT_LIMIT_FOR_PAGINATION);

onMounted(async () => {
  try {
    getAllPhieummuahang();
    getAllChitietphieumuahang();
    getNhanvien();
    getNhacungcap();
  } catch (error) {
    console.log(error);
  }
});

const getAllPhieummuahang = async () => {
  const res = await fetchPhieumuahang();
  phieumuahang.value = res.data;
  lengthPage.value = Math.ceil(res.totalItems / selectedValue.value);
  totalItems.value = res?.totalItems;
  console.log(phieumuahang.value);
};

const getNhacungcap = async () => {
  const res = await serviceNhacungcap.getAllNhacungcap();
  nhacungcap.value = res;
  console.log(nhacungcap.value);
};

const getNhanvien = async () => {
  const res = await serviceUser.getAllUser();
  nhanvien.value = res;
  console.log(nhanvien.value);
};

const getNhacungcapById = (id) => {
  var lengthNhacungcap = Object.keys(nhacungcap.value).length;

  for (var i = 0; i < lengthNhacungcap; i++) {
    if (id === nhacungcap.value[i].id) {
      return nhacungcap.value[i].tennhacungcap;
    }
  }
};

const getNameNhanvienById = (id) => {
  var lengthNhanvien = Object.keys(nhanvien.value).length;

  for (var i = 0; i < lengthNhanvien; i++) {
    if (id === nhanvien.value.items[i].id) {
      return nhanvien.value.items[i].tennhanvien;
    }
  }
};

// const getIdCongnocuakhachhang = (id) => {
//   var lengthCongnno = Object.keys(cnkh.value).length;
//   for (var i = 0; i < lengthCongnno - 1; i++) {
//     if (id === cnkh.value[i].donhangid) {
//       return cnkh.value[i].id;
//     }
//   }
// };

watch(selectedValue, (newVal) => {
  query.limit = newVal;
  query.page = 1;
  page.value = 1;
  getAllPhieummuahang();
});

watch(page, (newVal) => {
  query.page = newVal;
  getAllPhieummuahang();
});

const getAllChitietphieumuahang = async () => {
  try {
    const response = await serviceChitietphieumuahang.getAllChitietphieumuahang();
    chitietphieumuahang.value = response;
  } catch (error) {
    console.error('Error: ', error);
  }
};

const getTensanphamById = (id) => {
  var lengthChitietphieumuahang = Object.keys(chitietphieumuahang.value).length;
  for (var i = 0; i < lengthChitietphieumuahang - 1; i++) {
    if (id === chitietphieumuahang.value[i].phieumuahangid) {
      return chitietphieumuahang.value[i].tensanpham;
    }
  }
};
const getIdChitietphieumuahang = (id) => {
  var lengCTPhieumuahanghang = Object.keys(chitietphieumuahang.value).length;
  for (var i = 0; i < lengCTPhieumuahanghang - 1; i++) {
    if (id === chitietphieumuahang.value[i].phieumuahangid) {
      return chitietphieumuahang.value[i].id;
    }
  }
};
const getDongiaById = (id) => {
  var lengthChitietphieumuahang = Object.keys(chitietphieumuahang.value).length;
  for (var i = 0; i < lengthChitietphieumuahang - 1; i++) {
    if (id === chitietphieumuahang.value[i].phieumuahangid) {
      return chitietphieumuahang.value[i].dongia;
    }
  }
};

const getSoluongById = (id) => {
  var lengthChitietphieumuahang = Object.keys(chitietphieumuahang.value).length;
  for (var i = 0; i < lengthChitietphieumuahang - 1; i++) {
    if (id === chitietphieumuahang.value[i].phieumuahangid) {
      return chitietphieumuahang.value[i].soluong;
    }
  }
};

const deleteDonhang = async () => {
  try {
    if (!id.value) {
      console.error('not found!');
      return;
    }
    // if (getIdChitiethoadon(id.value) && getIdCongnocuakhachhang(id.value)) {
    //   const deleteCtDonhang = await serviceChitietdonhang.deleteChitietdonhang(
    //     getIdChitiethoadon(id.value),
    //   );
    //   const deleteCongnoKH = await serviceCongnocuakhachhang.deleteCongnocuaKH(
    //     getIdCongnocuakhachhang(id.value),
    //   );
    //   console.log(deleteCtDonhang);
    //   console.log(deleteCongnoKH);
    //   const response = await serviceDonhang.deleteDonhang(id.value);
    //   console.log(response);
    // } else
    if (getIdChitietphieumuahang(id.value)) {
      const deleteCtPhieumuahang =
        await serviceChitietphieumuahang.deleteChitietphieumuahang(
          getIdChitietphieumuahang(id.value),
        );
      console.log(deleteCtPhieumuahang);

      const response = await servicePhieumuahang.deletePhieumuahang(id.value);
      console.log(response);
    } else {
      const response = await servicePhieumuahang.deletePhieumuahang(id.value);
      console.log(response);
    }
    // const deleteCtPhieumuahang =
    //   await serviceChitietphieumuahang.deleteChitietphieumuahang(
    //     getIdChitietphieumuahang(id.value),
    //   );
    // console.log(deleteCtPhieumuahang);

    // const response = await servicePhieumuahang.deletePhieumuahang(id.value);
    // console.log(response);

    dialogDelete.value = false;
    getAllChitietphieumuahang();
    getAllPhieummuahang();
    showSuccessNotification('Xóa phiếu mua hàng thành công');
    // console.log('Đã xóa: ', response);
  } catch (error) {
    console.error('Error!');
  } finally {
    id.value = null;
  }
};

const formatTime = (time) => {
  const day = new Date(time).getDate();
  const month = new Date(time).getMonth() + 1;
  const year = new Date(time).getFullYear();
  // return `${year}/${month}/${day}`;
  const formatMonth = month >= 10 ? month : '0' + month;
  const formatDay = day >= 10 ? day : '0' + day;
  return year + '/' + formatMonth + '/' + formatDay;
};

const formatMoney = (money) => {
  return numeral(money).format('0,0') + ' ₫';
};
</script>

<template>
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
              <!-- <th style="height: 47px" class="text-table text-uppercase">STT</th> -->
              <th style="height: 47px" class="text-table text-uppercase">
                Ngày mua hàng
              </th>
              <th style="height: 47px" class="text-table text-uppercase">
                Nhân viên nhập hàng
              </th>
              <th style="height: 47px" class="text-table text-uppercase">Nhà cung cấp</th>
              <th style="height: 47px" class="text-table text-uppercase">Tên sản phẩm</th>
              <th style="height: 47px" class="text-table text-uppercase">Số lượng</th>
              <th style="height: 47px" class="text-table text-uppercase">Đơn giá</th>
              <th style="height: 47px" class="text-table text-uppercase">Tổng tiền</th>
              <!-- <th style="height: 47px" class="text-table text-uppercase">Tình trạng</th>
              <th style="height: 47px" class="text-table text-uppercase">Thành tiền</th>
              <th style="height: 47px" class="text-table text-uppercase">
                Đã thanh toán
              </th>
              <th style="height: 47px" class="text-table text-uppercase">Còn nợ</th>
              <th style="height: 47px" class="text-table text-uppercase"></th> -->

              <th style="height: 47px" class="text-table text-uppercase text-left">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, i) in phieumuahang" :key="i">
              <!-- <td style="padding: 18px 0 18px 18px" class="text-price-user">
                {{ i }}
              </td> -->
              <td
                class="text-name-user"
                style="
                  padding: 18px 0 18px 18px;
                  white-space: nowrap;
                  max-width: 100px;
                  overflow: hidden;
                  text-overflow: ellipsis;
                "
              >
                {{ formatTime(item.ngaymuahang) }}
              </td>
              <td style="padding: 18px 0 18px 18px" class="text-price-user">
                {{ getNameNhanvienById(item.nhanvienid) }}
              </td>
              <td style="padding: 18px 0 18px 18px" class="text-price-user">
                {{ getNhacungcapById(item.nhacungcapid) }}
              </td>
              <td style="padding: 18px 0 18px 18px" class="text-price-user">
                {{ getTensanphamById(item.id) }}
              </td>
              <td style="padding: 18px 0 18px 18px" class="text-price-user">
                {{ getSoluongById(item.id) }}
              </td>
              <td style="padding: 18px 0 18px 18px" class="text-price-user">
                {{ getDongiaById(item.id) }}
              </td>

              <td style="padding: 18px 0 18px 18px" class="text-price-user">
                {{ formatMoney(item.tongtien) }}
              </td>
              <!-- <td style="padding: 18px 0 18px 18px" class="text-price-user">
                {{ formatMoney(item.thanhtien) }}
              </td>
              <td style="padding: 18px 0 18px 18px" class="text-price-user">
                {{ formatMoney(item.dathanhtoan) }}
              </td>
              <td style="padding: 18px 0 18px 18px" class="text-price-user">
                {{ formatMoney(item.conno) }}
              </td> -->
              <!-- <td style="padding: 18px 0 18px 18px" class="text-price-user">
                <a href="">Xem chi tiết</a>
              </td> -->
              <td class="text-left">
                <v-btn
                  icon
                  size="small"
                  flat
                  @click="(dialogEdit = true), (currentKho = item), (idKho = item.id)"
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

    <add-phieumuahang
      :dialogAdd="dialogAdd"
      @close="dialogAdd = false"
      @updateData="getAllPhieummuahang(), getAllChitietphieumuahang()"
    />

    <!-- <h1>haha</h1> -->
  </div>

  <v-dialog max-width="450px" v-model="dialogDelete">
    <v-card>
      <v-alert type="warning">
        <v-row align="center">
          <v-col cols="11" class="text-center"> Bạn có muốn xóa không? </v-col>
        </v-row>
        <v-row align="center">
          <v-spacer></v-spacer>
          <v-col cols="5" variant="text">
            <v-btn @click="deleteDonhang">Đồng ý</v-btn>
          </v-col>
          <v-col cols="6" variant="text">
            <v-btn @click="dialogDelete = false">Hủy bỏ</v-btn>
          </v-col>
        </v-row>
      </v-alert>
    </v-card>
  </v-dialog>
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
  font-weight: 400;
  font-size: 15px;
  line-height: 22px;
}
</style>
