<template>
  <div>
    <v-dialog
      class="mx-auto pb-6 mt-1"
      style="border-radius: 12px"
      max-width="448px"
      v-model="props.dialogEdit"
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
        Sửa khách hàng sản phẩm
      </div>
      <div style="background-color: #f7f7f7; padding: 16px 20px 20px">
        <div
          style="color: #464f60"
          class="font-weight-bold font-weight-medium text-medium-emphasis d-flex align-center text-name mb-2"
        >
          Tên khách hàng
          <p class="ml-1" style="color: #0f60ff">*</p>
        </div>
        <v-text-field
          density="compact"
          variant="solo"
          label="Nhập tên khách hàng"
          single-line
          type="text"
          class="bg-white mb-5"
          v-model="khachhang.hoten"
          hide-details
          style="border-radius: 6px; border: 1px solid rgb(231, 231, 231)"
          flat
        ></v-text-field>

        <div
          style="color: #464f60"
          class="font-weight-bold font-weight-medium text-medium-emphasis d-flex align-center text-name mb-2"
        >
          Địa chỉ
          <p class="ml-1" style="color: #0f60ff">*</p>
        </div>
        <v-text-field
          density="compact"
          variant="solo"
          label="Nhập địa chỉ"
          single-line
          type="text"
          class="bg-white mb-5"
          v-model="khachhang.diachi"
          hide-details
          style="border-radius: 6px; border: 1px solid rgb(231, 231, 231)"
          flat
        ></v-text-field>

        <div
          style="color: #464f60"
          class="font-weight-bold font-weight-medium text-medium-emphasis d-flex align-center text-name mb-2"
        >
          Số điện thoại
          <p class="ml-1" style="color: #0f60ff">*</p>
        </div>
        <v-text-field
          density="compact"
          variant="solo"
          label="Nhập số điện thoại"
          single-line
          type="text"
          class="bg-white mb-5"
          v-model="khachhang.sodienthoai"
          hide-details
          style="border-radius: 6px; border: 1px solid rgb(231, 231, 231)"
          flat
        ></v-text-field>
      </div>
      <v-row
        style="
          padding-top: 6px;
          background-color: white;
          width: 448px;
          margin-left: 0.4px;
          border-radius: 0 0 12px 12px;
        "
      >
        <v-col cols="6"></v-col>
        <v-col cols="6"
          ><v-btn
            width="70"
            flat
            @click="emits('close')"
            class="text-capitalize mr-4"
            style="border-radius: 6px; border: 1px solid rgb(222, 222, 222)"
            >Hủy</v-btn
          >
          <v-btn
            width="105"
            color="#0f60ff"
            class="text-capitalize"
            @click="updateKhachhang"
            flat
            style="border-radius: 6px; border: 1px solid rgb(231, 231, 231)"
            >Cập
            <p class="text-lowercase">nhật</p>
          </v-btn></v-col
        >
        <!-- {{ product.name }} -->
      </v-row>
    </v-dialog>
  </div>
</template>
      
      <script setup lang="ts">
import { ref, watchEffect } from 'vue';
import { defineProps, defineEmits } from 'vue';

import { showErrorNotification, showSuccessNotification } from '../../common/helpers';

import { serviceKhachhang } from '@/layouts/components/khachhang/khachhang';
import { Khachhang } from '../../layouts/components/khachhang/interface';
const props = defineProps<{
  dialogEdit: boolean;
  currentKh: Khachhang;
  idKh: number;
}>();

const khachhang = ref<Khachhang>({
  hoten: '',
  diachi: '',
  sodienthoai: '',
});

const emits = defineEmits(['close', 'updateData']);

const updateKhachhang = async () => {
  try {
    const formData = new FormData();
    formData.append('id', khachhang.value.id);
    formData.append('hoten', khachhang.value.hoten);
    formData.append('diachi', khachhang.value.diachi);
    formData.append('sodienthoai', khachhang.value.sodienthoai);

    const newItem = await serviceKhachhang.editKhachhang(props.idKh, formData);
    console.log(formData);

    if (newItem.success) {
      emits('updateData');
      emits('close');
      showSuccessNotification('Sửa khách hàng thành công');
    } else {
      showErrorNotification('Sửa khách hàng thất bại!');
    }
  } catch (error) {
    console.error('Error: ', error);
  }
};

watchEffect(() => {
  khachhang.value.id = props.currentKh.id;
  khachhang.value.hoten = props.currentKh.hoten;
  khachhang.value.diachi = props.currentKh.diachi;
  khachhang.value.sodienthoai = props.currentKh.sodienthoai;
});
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
</style>