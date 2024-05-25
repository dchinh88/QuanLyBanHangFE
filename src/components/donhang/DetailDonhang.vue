<template>
  <div>
    <v-dialog
      class="mx-auto pb-6 mt-1"
      style="border-radius: 12px"
      max-width="748px"
      v-model="props.dialogDetail"
    >
      <div
        style="
          background-color: white;
          padding: 17px 0 17px 20px;
          border-radius: 12px 12px 0 0;
        "
        class="text-left title-addnew"
      >
        <!-- <p
            class="title-addnew"
            style="font-weight: 500; padding: 17px 0 0 20px; color: #1a2240"
          >
            
          </p> -->
        Tạo mới đơn hàng
      </div>
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
              v-model="donhang.ngaytaodon"
              flat
              hide-details
              style="border-radius: 6px; border: 1px solid rgb(231, 231, 231)"
            ></v-text-field
          ></v-col>
          <v-col
            ><div
              class="text-medium-emphasis text-[14px] d-flex align-center font-weight-bold text-name mb-2"
            >
              Số điện thoại khách hàng
              <p class="ml-1" style="color: #0f60ff">*</p>
            </div>

            <v-text-field
              density="compact"
              variant="solo"
              label="Nhập số điện thoại khách hàng"
              single-line
              class="bg-white"
              v-model="donhang.diachigiaohang"
              flat
              hide-details
              style="border-radius: 6px; border: 1px solid rgb(231, 231, 231)"
            ></v-text-field
          ></v-col>
        </v-row>

        <!-- <v-row>
          <v-col
            ><div
              class="text-medium-emphasis text-[14px] d-flex align-center font-weight-bold text-name mb-2"
            >
              Họ tên
              <p class="ml-1" style="color: #0f60ff">*</p>
            </div>

            <v-text-field
              density="compact"
              variant="solo"
              label="Nhập họ tên khách hàng"
              single-line
              class="bg-white"
              v-model="hotenkhachhangField.value.value"
              flat
              hide-details
              style="border-radius: 6px; border: 1px solid rgb(231, 231, 231)"
            ></v-text-field>
            <span class="error-message mt-1" style="position: absolute; right: 51%">{{
              hotenkhachhangField.errorMessage
            }}</span></v-col
          >
          <v-col
            ><div
              class="text-medium-emphasis d-flex align-center font-weight-bold text-name mb-2"
            >
              Địa chỉ giao hàng
              <p class="ml-1" style="color: #0f60ff">*</p>
            </div>

            <v-text-field
              density="compact"
              variant="solo"
              label="Nhập địa chỉ giao hàng"
              single-line
              v-model="diachigiaohangField.value.value"
              class="bg-white"
              hide-details
              flat
              style="border-radius: 6px; border: 1px solid rgb(231, 231, 231)"
            ></v-text-field>
            <span class="error-message mt-1" style="position: absolute; right: 3%">{{
              diachigiaohangField.errorMessage
            }}</span></v-col
          >
        </v-row> -->
        <!-- <v-row>
          <v-col
            ><div
              class="text-medium-emphasis text-[14px] d-flex align-center font-weight-bold text-name mb-2"
            >
              Chọn sản phẩm
              <p class="ml-1" style="color: #0f60ff">*</p>
            </div>

            <v-select
              density="compact"
              variant="solo"
              label="Chọn sản phẩm"
              single-line
              :items="sanphams"
              item-value="id"
              item-title="tensanpham"
              class="bg-white"
              v-model="sanphamidField.value.value"
              flat
              hide-details
              style="border-radius: 6px; border: 1px solid rgb(231, 231, 231)"
            ></v-select>
            <span class="error-message mt-1" style="position: absolute; right: 3%">{{
              sanphamidField.errorMessage
            }}</span></v-col
          >
          <v-col
            ><div
              class="text-medium-emphasis text-[14px] d-flex align-center font-weight-bold text-name mb-2"
            >
              Đơn giá
              <p class="ml-1" style="color: #0f60ff">*</p>
            </div>

            <v-text-field
              density="compact"
              variant="solo"
              type="number"
              readonly
              label="Nhập đơn giá sản phẩm"
              single-line
              class="bg-white"
              v-model="dongiaField.value.value"
              flat
              hide-details
              style="border-radius: 6px; border: 1px solid rgb(231, 231, 231)"
            ></v-text-field>
            <span class="error-message mt-1" style="position: absolute; right: 3%">{{
              dongiaField.errorMessage
            }}</span></v-col
          >
        </v-row> -->
        <!-- <v-row>
          <v-col>
            <div
              class="text-medium-emphasis text-[14px] d-flex align-center font-weight-bold text-name mb-2"
            >
              Số lượng
              <p class="ml-1" style="color: #0f60ff">*</p>
            </div>
            <v-row class="mt-2">
              <v-btn
                class="mt-1"
                @click="handlerGiamsoluong(soluongField.value.value)"
                flat
                >-</v-btn
              >
              <v-text-field
                density="compact"
                variant="solo"
                type="number"
                label="Nhập số lượng sản phẩm"
                single-line
                readonly
                class="bg-white"
                v-model="soluongField.value.value"
                flat
                hide-details
                style="border-radius: 6px; border: 1px solid rgb(231, 231, 231)"
              ></v-text-field>
              <v-btn
                class="mt-1"
                @click="handlerTangsoluong(soluongField.value.value)"
                flat
                >+</v-btn
              >
            </v-row>

            <span class="error-message mt-1" style="position: absolute; right: 51%">{{
              soluongField.errorMessage
            }}</span>
          </v-col>
          <v-col
            ><div
              class="text-medium-emphasis text-[14px] d-flex align-center font-weight-bold text-name mb-2"
            >
              Thành tiền
              <p class="ml-1" style="color: #0f60ff">*</p>
            </div>

            <v-text-field
              density="compact"
              variant="solo"
              label="Thành tiền"
              single-line
              type="number"
              class="bg-white"
              v-model="thanhtienField.value.value"
              flat
              hide-details
              style="border-radius: 6px; border: 1px solid rgb(231, 231, 231)"
            ></v-text-field>
            <span class="error-message mt-1" style="position: absolute; right: 3%">{{
              thanhtienField.errorMessage
            }}</span></v-col
          >
        </v-row> -->
        <!-- <v-row>
          <v-col
            ><div
              class="text-medium-emphasis text-[14px] d-flex align-center font-weight-bold text-name mb-2"
            >
              Đã thanh toán
              <p class="ml-1" style="color: #0f60ff">*</p>
            </div>

            <v-text-field
              density="compact"
              variant="solo"
              label="Nhập số tiền đã thanh toán"
              type="number"
              single-line
              class="bg-white"
              v-model="dathanhtoanField.value.value"
              flat
              hide-details
              style="border-radius: 6px; border: 1px solid rgb(231, 231, 231)"
            ></v-text-field>
            <span class="error-message mt-1" style="position: absolute; right: 51%">{{
              dathanhtoanField.errorMessage
            }}</span></v-col
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
              single-line
              label="Còn nợ"
              type="number"
              class="bg-white"
              v-model="connoField.value.value"
              flat
              hide-details
              style="border-radius: 6px; border: 1px solid rgb(231, 231, 231)"
            ></v-text-field>
            <span class="error-message mt-1" style="position: absolute; right: 3%">{{
              connoField.errorMessage
            }}</span></v-col
          >
        </v-row> -->
      </div>
      <v-row
        style="
          padding-top: 6px;
          background-color: white;
          width: 748px;
          margin-left: 0.4px;
          border-radius: 0 0 12px 12px;
        "
      >
        <v-col cols="8"></v-col>
        <v-col cols="4"
          ><v-btn
            width="70"
            flat
            @click="emits('close')"
            class="text-capitalize mr-4"
            style="border-radius: 6px; border: 1px solid rgb(222, 222, 222)"
            >Hủy</v-btn
          >
          <!-- <v-btn
            width="105"
            color="#0f60ff"
            class="text-capitalize"
            @click="addNewDonHang"
            flat
            style="border-radius: 6px; border: 1px solid rgb(231, 231, 231)"
            >Tạo
            <p class="text-lowercase">mới</p>
          </v-btn> -->
        </v-col>
        <!-- {{ product.name }} -->
      </v-row>
    </v-dialog>
  </div>
</template>
  
  <script setup lang="ts">
import { serviceProduct } from '../../layouts/components/product/product';
import { ref, onMounted, watch } from 'vue';
import { useField, useForm } from 'vee-validate';
import * as yup from 'yup';
import { showErrorNotification, showSuccessNotification } from '@/common/helpers';
import { serviceKhachhang } from '../../layouts/components/khachhang/khachhang';
import { serviceDonhang } from '../../layouts/components/donhang/donhang';
import { serviceChitietdonhang } from '../../layouts/components/chitietdonhang/chitietdonhang';
import { serviceCongnocuakhachhang } from '../../layouts/components/congnocuakhachhang/congnocuakhachhang';
import numeral from 'numeral';

const props = defineProps<{
  dialogDetail: boolean;
  idDetail: number;
}>();

const emits = defineEmits(['close']);

const donhang = ref({});

// onMounted(async () => {
//   try {
//     await getDonhangById();
//   } catch (error) {
//     console.log(error);
//   }
// });

const getDonhangById = async () => {
  const res = await serviceDonhang.getDetailDonhang(props.idDetail);
  donhang.value = res;
  //   console.log(props.idDetail);
};
</script>
  
  
  <style scoped>
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