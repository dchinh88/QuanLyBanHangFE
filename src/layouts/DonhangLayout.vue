<script setup>
import { computed, onMounted, ref, watch } from 'vue';
import { DEFAULT_LIMIT_FOR_PAGINATION } from '@/common/constants';
import { showSuccessNotification } from '@/common/helpers';
import { useDonhang } from './components/donhang/donhang.store';
import { serviceDonhang } from './components/donhang/donhang';
import numeral from 'numeral';
import { useKhachhang } from './components/khachhang/khachhang.store';
import { serviceKhachhang } from './components/khachhang/khachhang';
// import { serviceNhanvien } from './components/nhanvien/nhanvien';
import { serviceUser } from '../layouts/components/user/user';
import { serviceProduct } from '../layouts/components/product/product';
import { serviceChitietdonhang } from '../layouts/components/chitietdonhang/chitietdonhang';
import { serviceCongnocuakhachhang } from '../layouts/components/congnocuakhachhang/congnocuakhachhang';

import AddDonhang from '../components/donhang/AddDonhang.vue';
import DetailDonhang from '../components/donhang/DetailDonhang.vue';
import { getIn } from 'yup';
// import EditKho from '../components/kho/EditKho.vue';

const { fetchDonhang, query } = useDonhang();
// const { fetchKhachhang } = useKhachhang();

const page = ref(1);
const dialogAdd = ref(false);
const dialogEdit = ref(false);
const dialogDelete = ref(false);
const dialogDetail = ref(false);

// const currentDonhang = ref('');
// const idDonhang = ref('');
const ctdh = ref([]);
// const cthds = ref([]);
const cnkh = ref([]);

// const idDetail = ref(null);

const infochitietdh = ref({});
const infoProduct = ref({});

const totalItems = ref('');

const infoDonhang = ref({});
const infoChitietdonhang = ref({});
const listProduct = ref([]);

const donhang = ref([]);
const khachhang = ref([]);
const nhanvien = ref([]);

const id = ref(null);
const search = ref('');

const lengthPage = ref(1);
const selectedValue = ref(DEFAULT_LIMIT_FOR_PAGINATION);

onMounted(async () => {
  try {
    getAllDonhang();
    getKhachhang();
    getNhanvien();
    getAllChitietdonhang();
    getAllCongnocuakhachhang();
    getAllProduct();
  } catch (error) {
    console.log(error);
  }
});

const getAllDonhang = async () => {
  const res = await fetchDonhang();
  donhang.value = res.data;
  lengthPage.value = Math.ceil(res.totalItems / selectedValue.value);
  totalItems.value = res?.totalItems;
  //   console.log(typeof donhang);
  // console.log(donhang.value.length);
};

const getKhachhang = async () => {
  const res = await serviceKhachhang.getAllKhachhang();
  khachhang.value = res;
  console.log(khachhang.value);
};

const getNhanvien = async () => {
  const res = await serviceUser.getAllUser();
  nhanvien.value = res;
  console.log(nhanvien.value);
};

const getNameKhachhangById = (id) => {
  var lengthKhachhang = Object.keys(khachhang.value).length;
  for (var i = 0; i < lengthKhachhang; i++) {
    if (id === khachhang.value[i].id) {
      return khachhang.value[i].hoten;
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

const getIdChitiethoadon = (id) => {
  var lengCTDonhang = Object.keys(ctdh.value).length;
  for (var i = 0; i < lengCTDonhang - 1; i++) {
    if (id === ctdh.value[i].donhangid) {
      return ctdh.value[i].id;
    }
  }
};

const getIdCongnocuakhachhang = (id) => {
  var lengthCongnno = Object.keys(cnkh.value).length;
  for (var i = 0; i < lengthCongnno - 1; i++) {
    if (id === cnkh.value[i].donhangid) {
      return cnkh.value[i].id;
    }
  }
};
const getAllProduct = async () => {
  const res = await serviceProduct.getAllProduct();
  listProduct.value = res;
};

const getNameProductById = (id) => {
  var lengthProduct = Object.keys(listProduct.value).length;
  for (var i = 0; i < lengthProduct - 1; i++) {
    if (id === listProduct.value[i].id) {
      // console.log(listProduct.value[i].tensanpham);
      return listProduct.value[i].tensanpham;
    }
  }
};

const getInfoChitietdh = async (id) => {
  const res = await serviceChitietdonhang.getDetailChitietdonhang(id);
  infochitietdh.value = res;
  console.log('da di qua 1');
  console.log(infochitietdh.value.sanphamid);
};

const getProductByIdChitietHD = async (id) => {
  const res = await serviceProduct.getProductDetail(id);
  infoProduct.value = res;
  console.log('da di qua 2');
};

watch(selectedValue, (newVal) => {
  query.limit = newVal;
  query.page = 1;
  page.value = 1;
  getAllDonhang();
});

watch(page, (newVal) => {
  query.page = newVal;
  getAllDonhang();
});
const getAllChitietdonhang = async () => {
  try {
    const response = await serviceChitietdonhang.getAllChitietdonhang();
    ctdh.value = response;
  } catch (error) {
    console.error('Error: ', error);
  }
};

const getAllCongnocuakhachhang = async () => {
  try {
    const response = await serviceCongnocuakhachhang.getAllCongnocuaKH();
    cnkh.value = response;
    // console.log(cnkh.value);
  } catch (error) {
    console.error('Error: ', error);
  }
};

const updateSoluongton = async () => {
  try {
    await getInfoChitietdh(getIdChitiethoadon(id.value));
    await getProductByIdChitietHD(infochitietdh.value.sanphamid);
    // slt.value.soluongton = slt.value.soluongton - soluongField.value.value;
    infoProduct.value.soluongton =
      infoProduct.value.soluongton + infochitietdh.value.soluong;
    const formData = new FormData();
    formData.append('id', infoProduct.value.id);
    formData.append('loaisanphamid', infoProduct.value.loaisanphamid);
    formData.append('tensanpham', infoProduct.value.tensanpham);
    formData.append('giaban', infoProduct.value.giaban);
    formData.append('chatlieu', infoProduct.value.chatlieu);
    formData.append('macsac', infoProduct.value.macsac);
    formData.append('baohanh', infoProduct.value.baohanh);
    formData.append('mota', infoProduct.value.mota);
    formData.append('khoid', infoProduct.value.khoid);
    formData.append('soluongton', infoProduct.value.soluongton);
    const response = await serviceProduct.editProduct(infoProduct.value.id, formData);
    console.log(response);
  } catch (error) {
    console.error('Error: ', error);
  }
};

const deleteDonhang = async () => {
  try {
    if (!id.value) {
      console.error('not found!');
      return;
    }
    if (getIdChitiethoadon(id.value) && getIdCongnocuakhachhang(id.value)) {
      await updateSoluongton();
      const deleteCtDonhang = await serviceChitietdonhang.deleteChitietdonhang(
        getIdChitiethoadon(id.value),
      );
      const deleteCongnoKH = await serviceCongnocuakhachhang.deleteCongnocuaKH(
        getIdCongnocuakhachhang(id.value),
      );
      console.log(deleteCtDonhang);
      console.log(deleteCongnoKH);
      const response = await serviceDonhang.deleteDonhang(id.value);
      console.log(response);
    } else if (getIdChitiethoadon(id.value)) {
      await updateSoluongton();
      const deleteCtDonhang = await serviceChitietdonhang.deleteChitietdonhang(
        getIdChitiethoadon(id.value),
      );
      console.log(deleteCtDonhang);

      const response = await serviceDonhang.deleteDonhang(id.value);
      console.log(response);
    } else {
      const response = await serviceDonhang.deleteDonhang(id.value);
      console.log(response);
    }

    dialogDelete.value = false;
    getAllDonhang();
    showSuccessNotification('Xóa đơn hàng thành công');
    console.log('Đã xóa: ', response);
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

const getDonhangById = async (i) => {
  dialogDetail.value = true;
  const res = await serviceDonhang.getDetailDonhang(i);
  infoDonhang.value = res;
  const res1 = await serviceChitietdonhang.getDetailChitietdonhang(
    getIdChitiethoadon(infoDonhang.value.id),
  );
  infoChitietdonhang.value = res1;
};

const getTinhtrang = (id) => {
  if (id == 1) {
    return 'Chờ Xác Nhận';
  } else if (id == 2) {
    return 'Đã Xác Nhận';
  } else if (id == 3) {
    return 'Đang Xử Lý';
  } else if (id == 4) {
    return 'Đã Giao Hàng';
  } else if (id == 5) {
    return 'Hoàn Thành';
  } else if (id == 6) {
    return 'Hủy Bỏ';
  }
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
              <th style="height: 47px" class="text-table text-uppercase">Ngày tạo đơn</th>
              <th style="height: 47px" class="text-table text-uppercase">
                Địa chỉ giao hàng
              </th>
              <th style="height: 47px" class="text-table text-uppercase">Khách hàng</th>
              <th style="height: 47px" class="text-table text-uppercase">
                Nhân viên tạo đơn
              </th>
              <!-- <th style="height: 47px" class="text-table text-uppercase">Tình trạng</th> -->
              <th style="height: 47px" class="text-table text-uppercase">Thành tiền</th>
              <th style="height: 47px" class="text-table text-uppercase">
                Đã thanh toán
              </th>
              <th style="height: 47px" class="text-table text-uppercase">Còn nợ</th>
              <th style="height: 47px" class="text-table text-uppercase"></th>

              <th style="height: 47px" class="text-table text-uppercase text-left">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, i) in donhang" :key="i">
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
                {{ formatTime(item.ngaytaodon) }}
              </td>
              <td style="padding: 18px 0 18px 18px" class="text-price-user">
                {{ item.diachigiaohang }}
              </td>
              <td style="padding: 18px 0 18px 18px" class="text-price-user">
                {{ getNameKhachhangById(item.khachhangid) }}
              </td>
              <td style="padding: 18px 0 18px 18px" class="text-price-user">
                {{ getNameNhanvienById(item.nhanvienid) }}
              </td>
              <!-- <td style="padding: 18px 0 18px 18px" class="text-price-user">
                {{ getTinhtrang(item.tinhtrangid) }}
              </td> -->
              <td style="padding: 18px 0 18px 18px" class="text-price-user">
                {{ formatMoney(item.thanhtien) }}
              </td>
              <td style="padding: 18px 0 18px 18px" class="text-price-user">
                {{ formatMoney(item.dathanhtoan) }}
              </td>
              <td style="padding: 18px 0 18px 18px" class="text-price-user">
                {{ formatMoney(item.conno) }}
              </td>
              <td style="padding: 18px 0 18px 18px" class="text-price-user">
                <!-- <a
                  href=""
                  class="text-decoration-none"
                  @click="(dialogDetail = true), (idDetail = item.id)"
                  >Xem chi tiết</a
                > -->
                <v-btn
                  @click="getDonhangById(item.id)"
                  class="text-caption"
                  variant="text"
                  >Xem chi tiết</v-btn
                >
              </td>
              <td class="text-left">
                <!-- <v-btn
                  icon
                  size="small"
                  flat
                  @click="(dialogEdit = true), (currentKho = item), (idKho = item.id)"
                >
                  <v-icon color="#8B909A" icon="mdi mdi-square-edit-outline"></v-icon>
                </v-btn> -->
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

    <add-donhang
      :dialogAdd="dialogAdd"
      @close="dialogAdd = false"
      @updateData="getAllDonhang()"
    />

    <!-- <detail-donhang
      :dialogDetail="dialogDetail"
      @close="dialogDetail = false"
      :idDetail="idDetail"
    /> -->

    <!-- <edit-kho
      :dialogEdit="dialogEdit"
      :currentKho="currentKho"
      :idKho="idKho"
      @close="dialogEdit = false"
      @updateData="getAllKho()"
    /> -->

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

  <v-dialog max-width="1050px" v-model="dialogDetail">
    <v-card class="text-table" title="Chi tiết đơn hàng">
      <div style="background-color: #f7f7f7; padding: 16px 20px 20px">
        <v-row>
          <!-- style="padding: 12px" -->
          <v-col
            ><div
              style="color: #464f60"
              class="font-weight-bold font-weight-medium text-medium-emphasis d-flex align-center text-name mb-2"
            >
              Ngày tạo đơn
              <p class="ml-1" style="color: #0f60ff">*</p>
            </div>
            <v-text-field
              readonly
              density="compact"
              variant="solo"
              single-line
              class="bg-white"
              flat
              hide-details
              style="border-radius: 6px; border: 1px solid rgb(231, 231, 231)"
              >{{ formatTime(infoDonhang.ngaytaodon) }}</v-text-field
            ></v-col
          >
          <v-col
            ><div
              style="color: #464f60"
              class="font-weight-bold font-weight-medium text-medium-emphasis d-flex align-center text-name mb-2"
            >
              Tên khách hàng
              <p class="ml-1" style="color: #0f60ff">*</p>
            </div>
            <v-text-field
              readonly
              density="compact"
              variant="solo"
              single-line
              class="bg-white"
              flat
              hide-details
              style="border-radius: 6px; border: 1px solid rgb(231, 231, 231)"
              >{{ infoDonhang.khachhangid }}</v-text-field
            ></v-col
          >
          <v-col
            ><div
              class="text-medium-emphasis text-[14px] d-flex align-center font-weight-bold text-name mb-2"
            >
              Địa chỉ giao hàng
              <p class="ml-1" style="color: #0f60ff">*</p>
            </div>

            <v-text-field
              density="compact"
              variant="solo"
              readonly
              single-line
              class="bg-white"
              flat
              hide-details
              style="border-radius: 6px; border: 1px solid rgb(231, 231, 231)"
              >{{ infoDonhang.diachigiaohang }}</v-text-field
            ></v-col
          >
        </v-row>
        <!-- jj----------------------------------------------------------------------- -->
        <v-row>
          <!-- style="padding: 12px" -->
          <v-col
            ><div
              style="color: #464f60"
              class="font-weight-bold font-weight-medium text-medium-emphasis d-flex align-center text-name mb-2"
            >
              Nhân viên tạo đơn hàng
              <p class="ml-1" style="color: #0f60ff">*</p>
            </div>
            <v-text-field
              readonly
              density="compact"
              variant="solo"
              single-line
              class="bg-white"
              flat
              hide-details
              style="border-radius: 6px; border: 1px solid rgb(231, 231, 231)"
              >{{ getNameNhanvienById(infoDonhang.nhanvienid) }}</v-text-field
            ></v-col
          >
          <v-col
            ><div
              style="color: #464f60"
              class="font-weight-bold font-weight-medium text-medium-emphasis d-flex align-center text-name mb-2"
            >
              Tên sản phẩm
              <p class="ml-1" style="color: #0f60ff">*</p>
            </div>
            <v-text-field
              readonly
              density="compact"
              variant="solo"
              single-line
              class="bg-white"
              flat
              hide-details
              style="border-radius: 6px; border: 1px solid rgb(231, 231, 231)"
              >{{ getNameProductById(infoChitietdonhang.sanphamid) }}</v-text-field
            ></v-col
          >
          <!-- <v-col>
            <div
              class="text-medium-emphasis text-[14px] d-flex align-center font-weight-bold text-name mb-2"
            >
              Tình trạng
              <p class="ml-1" style="color: #0f60ff">*</p>
            </div>

            <v-text-field
              density="compact"
              variant="solo"
              readonly
              single-line
              class="bg-white"
              flat
              hide-details
              style="border-radius: 6px; border: 1px solid rgb(231, 231, 231)"
              >{{ getTinhtrang(infoDonhang.tinhtrangid) }}</v-text-field
            >
          </v-col> -->
        </v-row>
        <!-- kk--------------------------------------------------------------------- -->
        <v-row>
          <!-- style="padding: 12px" -->
          <v-col
            ><div
              style="color: #464f60"
              class="font-weight-bold font-weight-medium text-medium-emphasis d-flex align-center text-name mb-2"
            >
              Số lượng
              <p class="ml-1" style="color: #0f60ff">*</p>
            </div>
            <v-text-field
              readonly
              density="compact"
              variant="solo"
              single-line
              class="bg-white"
              flat
              hide-details
              style="border-radius: 6px; border: 1px solid rgb(231, 231, 231)"
              >{{ infoChitietdonhang.soluong }}</v-text-field
            ></v-col
          >
          <v-col
            ><div
              style="color: #464f60"
              class="font-weight-bold font-weight-medium text-medium-emphasis d-flex align-center text-name mb-2"
            >
              Đơn giá
              <p class="ml-1" style="color: #0f60ff">*</p>
            </div>
            <v-text-field
              readonly
              density="compact"
              variant="solo"
              single-line
              class="bg-white"
              flat
              hide-details
              style="border-radius: 6px; border: 1px solid rgb(231, 231, 231)"
              >{{ formatMoney(infoChitietdonhang.dongia) }}</v-text-field
            ></v-col
          >
        </v-row>
        <!-- ll------------------------------------------------------------------------------------ -->
        <v-row>
          <!-- style="padding: 12px" -->
          <v-col
            ><div
              style="color: #464f60"
              class="font-weight-bold font-weight-medium text-medium-emphasis d-flex align-center text-name mb-2"
            >
              Thành tiền
              <p class="ml-1" style="color: #0f60ff">*</p>
            </div>
            <v-text-field
              readonly
              density="compact"
              variant="solo"
              single-line
              class="bg-white"
              flat
              hide-details
              style="border-radius: 6px; border: 1px solid rgb(231, 231, 231)"
              >{{ formatMoney(infoDonhang.thanhtien) }}</v-text-field
            ></v-col
          >
          <v-col
            ><div
              style="color: #464f60"
              class="font-weight-bold font-weight-medium text-medium-emphasis d-flex align-center text-name mb-2"
            >
              Đã thanh toán
              <p class="ml-1" style="color: #0f60ff">*</p>
            </div>
            <v-text-field
              readonly
              density="compact"
              variant="solo"
              single-line
              class="bg-white"
              flat
              hide-details
              style="border-radius: 6px; border: 1px solid rgb(231, 231, 231)"
              >{{ formatMoney(infoDonhang.dathanhtoan) }}</v-text-field
            ></v-col
          >
          <v-col
            ><div
              class="text-medium-emphasis text-[14px] d-flex align-center font-weight-bold text-name mb-2"
            >
              Còn nợ
              <p class="ml-1" style="color: #0f60ff">*</p>
            </div>

            <v-text-field
              density="compact"
              variant="solo"
              readonly
              single-line
              class="bg-white"
              flat
              hide-details
              style="border-radius: 6px; border: 1px solid rgb(231, 231, 231)"
              >{{ formatMoney(infoDonhang.conno) }}</v-text-field
            ></v-col
          >
        </v-row>
      </div>
      <v-row align="center">
        <!-- <v-col></v-col> -->
        <v-col class="text-right mr-5"
          ><v-btn class="mb-5 mt-5" @click="dialogDetail = false">Close</v-btn></v-col
        >
      </v-row>
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

@import url('https://fonts.googleapis.com/css2?family=Public+Sans:wght@500&display=swap');
.title-addnew {
  font-family: 'Public Sans', sans-serif;
  font-size: 18px;
  font-weight: 500;
}
.text-name {
  font-family: 'Public Sans', sans-serif;
  font-size: 14px;
}
.error-message {
  float: right;
  font-size: 12px;
  color: red;
}
</style>
