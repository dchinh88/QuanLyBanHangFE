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
        Sửa thông tin kho
      </div>
      <div style="background-color: #f7f7f7; padding: 16px 20px 20px">
        <div
          style="color: #464f60"
          class="font-weight-bold font-weight-medium text-medium-emphasis d-flex align-center text-name mb-2"
        >
          Tên kho
          <p class="ml-1" style="color: #0f60ff">*</p>
        </div>
        <v-text-field
          density="compact"
          variant="solo"
          label="Nhập tên kho"
          single-line
          type="text"
          class="bg-white mb-5"
          v-model="kho.tenkho"
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
          v-model="kho.diachi"
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

import { serviceKho } from '../../layouts/components/kho/kho';
import { showErrorNotification, showSuccessNotification } from '../../common/helpers';
import { Kho } from '../../layouts/components/kho/interface';
const props = defineProps<{
  dialogEdit: boolean;
  currentKho: Kho;
  idKho: number;
}>();

const kho = ref<Kho>({
  tenkho: '',
  diachi: '',
});

const emits = defineEmits(['close', 'updateData']);

const updateKho = async () => {
  try {
    const formData = new FormData();
    formData.append('id', kho.value.id);
    formData.append('tenkho', kho.value.tenkho);
    formData.append('diachi', kho.value.diachi);

    const newItem = await serviceKho.editKho(props.idKho, formData);
    console.log(formData);

    if (newItem.success) {
      emits('updateData');
      emits('close');
      showSuccessNotification('Sửa thông tin kho thành công');
    } else {
      showErrorNotification('Sửa thông tin kho thất bại!');
    }
  } catch (error) {
    console.error('Error: ', error);
  }
};

watchEffect(() => {
  kho.value.id = props.currentKho.id;
  kho.value.tenkho = props.currentKho.tenkho;
  kho.value.diachi = props.currentKho.diachi;
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