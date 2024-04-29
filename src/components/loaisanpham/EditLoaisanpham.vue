<template>
  <div>
    <v-dialog
      class="mx-auto pb-6 mt-1"
      style="border-radius: 12px"
      max-width="748px"
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
        Sửa loại sản phẩm
      </div>
      <div style="background-color: #f7f7f7; padding: 16px 20px 20px">
        <div
          style="color: #464f60"
          class="font-weight-bold font-weight-medium text-medium-emphasis d-flex align-center text-name mb-2"
        >
          Tên loại sản phẩm
          <p class="ml-1" style="color: #0f60ff">*</p>
        </div>
        <v-text-field
          density="compact"
          variant="solo"
          label="Nhập tên sản phẩm"
          single-line
          type="text"
          class="bg-white mb-5"
          v-model="loaisanpham.tenloaisanpham"
          hide-details
          style="border-radius: 6px; border: 1px solid rgb(231, 231, 231)"
          flat
        ></v-text-field>
        <!-- <p class="error-message mt-1" style="position: absolute; right: 51%">
          {{ tenloaisanphamField.errorMessage }}
        </p> -->
      </div>
      <v-row
        style="
          padding-top: 6px;
          background-color: white;
          width: 748px;
          margin-left: 0.5px;
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
          <v-btn
            width="105"
            color="#0f60ff"
            class="text-capitalize"
            @click="updateLoaisanpham"
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

import { serviceLoaisanpham } from '../../layouts/components/loaisanpham/loaisanpham';
import { showErrorNotification, showSuccessNotification } from '../../common/helpers';
import { Loaisanpham } from '../../layouts/components/loaisanpham/interface';
const props = defineProps<{
  dialogEdit: boolean;
  currentLsp: Loaisanpham;
  idLsp: string;
}>();

const loaisanpham = ref<Loaisanpham>({
  tenloaisanpham: '',
});

const emits = defineEmits(['close', 'updateData']);

const updateLoaisanpham = async () => {
  try {
    const formData = new FormData();
    formData.append('id', loaisanpham.value.id);
    formData.append('tenloaisanpham', loaisanpham.value.tenloaisanpham);

    const newItem = await serviceLoaisanpham.editLoaisanpham(props.idLsp, formData);
    console.log(formData);

    if (newItem.success) {
      emits('updateData');
      emits('close');
      showSuccessNotification('Sửa loại sản phẩm thành công');
    } else {
      showErrorNotification('Sửa loại sản phẩm thất bại!');
    }
  } catch (error) {
    console.error('Error: ', error);
  }
};

watchEffect(() => {
  loaisanpham.value.id = props.currentLsp.id;
  loaisanpham.value.tenloaisanpham = props.currentLsp.tenloaisanpham;
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