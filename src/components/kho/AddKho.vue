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
        Thêm mới kho
      </div>
      <div style="background-color: #f7f7f7; padding: 16px 20px 30px">
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
          class="bg-white"
          v-model="tenKhoField.value.value"
          hide-details
          style="border-radius: 6px; border: 1px solid rgb(231, 231, 231)"
          flat
        ></v-text-field>
        <p class="error-message mt-1" style="position: absolute; right: 4%">
          {{ tenKhoField.errorMessage }}
        </p>

        <div
          style="color: #464f60"
          class="font-weight-bold font-weight-medium text-medium-emphasis d-flex align-center text-name mb-2 mt-4"
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
          class="bg-white"
          v-model="diachiField.value.value"
          hide-details
          style="border-radius: 6px; border: 1px solid rgb(231, 231, 231)"
          flat
        ></v-text-field>
        <p class="error-message mt-1" style="position: absolute; right: 4%">
          {{ diachiField.errorMessage }}
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
            @click="addProduct"
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
import { serviceKho } from '@/layouts/components/kho/kho';
import * as yup from 'yup';
import { showErrorNotification, showSuccessNotification } from '@/common/helpers';

const props = defineProps<{
  dialogAdd: boolean;
}>();

const emits = defineEmits(['close', 'updateData']);

const schema = yup.object({
  tenkho: yup.string().required('Tên kho là bắt buộc'),
  diachi: yup.string().required('Địa chỉ là bắt buộc'),
});

const { handleSubmit } = useForm({
  validationSchema: schema,
});
const tenKhoField = useField('tenkho');
const diachiField = useField('diachi');

const addProduct = handleSubmit(async () => {
  try {
    const formData = new FormData();
    formData.append('tenkho', tenKhoField.value.value);
    formData.append('diachi', diachiField.value.value);

    const response = await serviceKho.addKho(formData);

    console.log(response);

    if (response.success) {
      tenKhoField.value.value = '';
      diachiField.value.value = '';

      emits('close');
      emits('updateData');

      showSuccessNotification('Thêm kho thành công');
    } else {
      showErrorNotification('Thêm kho thất bại');
    }
  } catch (error) {
    showErrorNotification('Thêm kho thất bại');
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