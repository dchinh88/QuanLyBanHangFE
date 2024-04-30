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
        Thêm mới nhà cung cấp
      </div>
      <div style="background-color: #f7f7f7; padding: 16px 20px 30px">
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
          class="bg-white"
          v-model="tenhacungcapField.value.value"
          hide-details
          style="border-radius: 6px; border: 1px solid rgb(231, 231, 231)"
          flat
        ></v-text-field>
        <p class="error-message mt-1" style="position: absolute; right: 4%">
          {{ tenhacungcapField.errorMessage }}
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
          label="Nhập địa chỉ"
          single-line
          type="text"
          class="bg-white"
          v-model="sodienthoaiField.value.value"
          hide-details
          style="border-radius: 6px; border: 1px solid rgb(231, 231, 231)"
          flat
        ></v-text-field>
        <p class="error-message mt-1" style="position: absolute; right: 4%">
          {{ sodienthoaiField.errorMessage }}
        </p>

        <div
          style="color: #464f60"
          class="font-weight-bold font-weight-medium text-medium-emphasis d-flex align-center text-name mb-2 mt-4"
        >
          Email
          <p class="ml-1" style="color: #0f60ff">*</p>
        </div>
        <v-text-field
          density="compact"
          variant="solo"
          label="Nhập địa chỉ"
          single-line
          type="text"
          class="bg-white"
          v-model="emailField.value.value"
          hide-details
          style="border-radius: 6px; border: 1px solid rgb(231, 231, 231)"
          flat
        ></v-text-field>
        <p class="error-message mt-1" style="position: absolute; right: 4%">
          {{ emailField.errorMessage }}
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
            @click="addNhacungcap"
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
import { serviceNhacungcap } from '@/layouts/components/nhacungcap/nhacungcap';
import * as yup from 'yup';
import { showErrorNotification, showSuccessNotification } from '@/common/helpers';

const props = defineProps<{
  dialogAdd: boolean;
}>();

const emits = defineEmits(['close', 'updateData']);

const schema = yup.object({
  tennhacungcap: yup.string().required('Tên nhà cung cấp là bắt buộc'),
  diachi: yup.string().required('Địa chỉ là bắt buộc'),
  sodienthoai: yup.string().required('Số điện thoại là bắt buộc'),
  email: yup.string().required('Email là bắt buộc'),
});

const { handleSubmit } = useForm({
  validationSchema: schema,
});
const tenhacungcapField = useField('tennhacungcap');
const diachiField = useField('diachi');
const sodienthoaiField = useField('sodienthoai');
const emailField = useField('email');

const addNhacungcap = handleSubmit(async () => {
  try {
    const formData = new FormData();
    formData.append('tennhacungcap', tenhacungcapField.value.value);
    formData.append('diachi', diachiField.value.value);
    formData.append('sodienthoai', sodienthoaiField.value.value);
    formData.append('email', emailField.value.value);

    const response = await serviceNhacungcap.addNhacungcap(formData);

    console.log(response);

    if (response.success) {
      tenhacungcapField.value.value = '';
      diachiField.value.value = '';
      sodienthoaiField.value.value = '';
      emailField.value.value = '';

      emits('close');
      emits('updateData');

      showSuccessNotification('Thêm nhà cung cấp thành công');
    } else {
      showErrorNotification('Thêm nhà cung cấp thất bại');
    }
  } catch (error) {
    showErrorNotification('Thêm nhà cung cấp thất bại');
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