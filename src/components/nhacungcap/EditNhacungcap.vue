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
        Sửa thông tin nhà cung cấp
      </div>
      <div style="background-color: #f7f7f7; padding: 16px 20px 20px">
        <div
          style="color: #464f60"
          class="font-weight-bold font-weight-medium text-medium-emphasis d-flex align-center text-name mb-2"
        >
          Tên nhà cung cấp
          <p class="ml-1" style="color: #0f60ff">*</p>
        </div>
        <v-text-field
          density="compact"
          variant="solo"
          label="Nhập tên nhà cung cấp"
          single-line
          type="text"
          class="bg-white mb-5"
          v-model="nhacungcap.tennhacungcap"
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
          v-model="nhacungcap.diachi"
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
          v-model="nhacungcap.sodienthoai"
          hide-details
          style="border-radius: 6px; border: 1px solid rgb(231, 231, 231)"
          flat
        ></v-text-field>

        <div
          style="color: #464f60"
          class="font-weight-bold font-weight-medium text-medium-emphasis d-flex align-center text-name mb-2"
        >
          Email
          <p class="ml-1" style="color: #0f60ff">*</p>
        </div>
        <v-text-field
          density="compact"
          variant="solo"
          label="Nhập email"
          single-line
          type="text"
          class="bg-white mb-5"
          v-model="nhacungcap.email"
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
          margin-left: 0.5px;
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
            @click="updateKho"
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

import { serviceNhacungcap } from '../../layouts/components/nhacungcap/nhacungcap';
import { showErrorNotification, showSuccessNotification } from '../../common/helpers';
import { Nhacungcap } from '../../layouts/components/nhacungcap/interface';
const props = defineProps<{
  dialogEdit: boolean;
  currentNcc: Nhacungcap;
  idNcc: number;
}>();

const nhacungcap = ref<Nhacungcap>({
  tennhacungcap: '',
  diachi: '',
  sodienthoai: '',
  email: '',
});

const emits = defineEmits(['close', 'updateData']);

const updateKho = async () => {
  try {
    const formData = new FormData();
    formData.append('id', nhacungcap.value.id);
    formData.append('tennhacungcap', nhacungcap.value.tennhacungcap);
    formData.append('diachi', nhacungcap.value.diachi);
    formData.append('sodienthoai', nhacungcap.value.sodienthoai);
    formData.append('email', nhacungcap.value.email);

    const newItem = await serviceNhacungcap.editNhacungcap(props.idNcc, formData);
    console.log(formData);

    if (newItem.success) {
      emits('updateData');
      emits('close');
      showSuccessNotification('Sửa thông tin nhà cung cấp thành công');
    } else {
      showErrorNotification('Sửa thông tin nhà cung cấp thất bại!');
    }
  } catch (error) {
    console.error('Error: ', error);
  }
};

watchEffect(() => {
  nhacungcap.value.id = props.currentNcc.id;
  nhacungcap.value.tennhacungcap = props.currentNcc.tennhacungcap;
  nhacungcap.value.diachi = props.currentNcc.diachi;
  nhacungcap.value.sodienthoai = props.currentNcc.sodienthoai;
  nhacungcap.value.email = props.currentNcc.email;
  //   console.log(kho.value.tenkho);
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