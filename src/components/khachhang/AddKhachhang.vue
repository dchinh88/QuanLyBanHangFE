<template>
  <div>
    <v-dialog
      class="mx-auto pb-6 mt-1"
      style="border-radius: 12px"
      max-width="448px"
      v-model="props.dialogAdd"
    >
      <div
        style="
          background-color: white;
          padding: 17px 0 17px 20px;
          border-radius: 12px 12px 0 0;
        "
        class="text-left title-addnew"
      >
        Tạo mới khách hàng
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
          class="bg-white"
          v-model="tenkhachhangField.value.value"
          hide-details
          style="border-radius: 6px; border: 1px solid rgb(231, 231, 231)"
          flat
        ></v-text-field>
        <p class="error-message mt-1" style="position: absolute; right: 4%">
          {{ tenkhachhangField.errorMessage }}
        </p>

        <div
          style="color: #464f60"
          class="font-weight-bold font-weight-medium text-medium-emphasis d-flex align-center text-name mb-2 mt-4"
        >
          ĐỊa chỉ
          <p class="ml-1" style="color: #0f60ff">*</p>
        </div>
        <v-text-field
          density="compact"
          variant="solo"
          label="Nhập địa chỉ"
          single-line
          type="text"
          class="bg-white"
          v-model="diachiField.value.value"
          hide-details
          style="border-radius: 6px; border: 1px solid rgb(231, 231, 231)"
          flat
        ></v-text-field>
        <p class="error-message mt-1" style="position: absolute; right: 4%">
          {{ diachiField.errorMessage }}
        </p>

        <div
          style="color: #464f60"
          class="font-weight-bold font-weight-medium text-medium-emphasis d-flex align-center text-name mb-2 mt-4"
        >
          Số điện thoại
          <p class="ml-1" style="color: #0f60ff">*</p>
        </div>
        <v-text-field
          density="compact"
          variant="solo"
          label="Nhập số điện thoại"
          single-line
          type="number"
          class="bg-white"
          v-model="sodienthoaiField.value.value"
          hide-details
          style="border-radius: 6px; border: 1px solid rgb(231, 231, 231)"
          flat
        ></v-text-field>
        <p class="error-message mt-1" style="position: absolute; right: 4%">
          {{ sodienthoaiField.errorMessage }}
        </p>
      </div>
      <div class="mb-3" style="background-color: #f7f7f7"></div>
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
            @click="addCustommer"
            flat
            style="border-radius: 6px; border: 1px solid rgb(231, 231, 231)"
            >Tạo
            <p class="text-lowercase">mới</p>
          </v-btn></v-col
        >
        <!-- {{ product.name }} -->
      </v-row>
    </v-dialog>
  </div>
</template>
    
    <script setup lang="ts">
import { useField, useForm } from 'vee-validate';
import * as yup from 'yup';
import { showErrorNotification, showSuccessNotification } from '@/common/helpers';
import { serviceKhachhang } from '../../layouts/components/khachhang/khachhang';

const props = defineProps<{
  dialogAdd: boolean;
}>();

const emits = defineEmits(['close', 'updateData']);

const schema = yup.object({
  tenkhachhang: yup.string().required('Tên khách hàng là bắt buộc'),
  diachi: yup.string().required('Địa chỉ là bắt buộc'),
  sodienthoai: yup.string().required('Số điện thoại là bắt buộc'),
});

const { handleSubmit } = useForm({
  validationSchema: schema,
});
const tenkhachhangField = useField('tenkhachhang');
const diachiField = useField('diachi');
const sodienthoaiField = useField('sodienthoai');

const addCustommer = handleSubmit(async () => {
  try {
    const formData = new FormData();
    formData.append('hoten', tenkhachhangField.value.value);
    formData.append('diachi', diachiField.value.value);
    formData.append('sodienthoai', sodienthoaiField.value.value);

    const response = await serviceKhachhang.addKhachhang(formData);

    console.log(response);

    if (response.success) {
      tenkhachhangField.value.value = '';
      diachiField.value.value = '';
      sodienthoaiField.value.value = '';

      emits('close');
      emits('updateData');

      showSuccessNotification('Thêm loại sản phẩm thành công');
    } else {
      showErrorNotification('Thêm loại sản phẩm thất bại');
    }
  } catch (error) {
    showErrorNotification('Thêm loại sản phẩm thất bại');
    console.error('Error', error);
  }
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
.error-message {
  float: right;
  font-size: 12px;
  color: red;
}
</style>