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
        <!-- <p
            class="title-addnew"
            style="font-weight: 500; padding: 17px 0 0 20px; color: #1a2240"
          >
            
          </p> -->
        Tạo mới người dùng
      </div>
      <div style="background-color: #f7f7f7; padding: 16px 20px">
        <div
          style="color: #464f60"
          class="font-weight-bold font-weight-medium text-medium-emphasis d-flex align-center text-name mb-2"
        >
          Tên người dùng
          <p class="ml-1" style="color: #0f60ff">*</p>
        </div>
        <v-text-field
          density="compact"
          variant="solo"
          label="Nhập tên người dùng"
          single-line
          type="text"
          class="bg-white"
          v-model="nameField.value.value"
          hide-details
          style="border-radius: 6px; border: 1px solid rgb(231, 231, 231)"
          flat
        ></v-text-field>
        <span class="error-message">{{ nameField.errorMessage }}</span>

        <div
          class="text-medium-emphasis d-flex align-center font-weight-bold text-name mb-2 mt-4"
        >
          Email
          <p class="ml-1" style="color: #0f60ff">*</p>
        </div>

        <v-text-field
          density="compact"
          variant="solo"
          label="Nhập email"
          single-line
          class="bg-white"
          v-model="emailField.value.value"
          hide-details
          flat
          style="border-radius: 6px; border: 1px solid rgb(231, 231, 231)"
        ></v-text-field>
        <span class="error-message">{{ emailField.errorMessage }}</span>

        <div
          class="text-medium-emphasis d-flex align-center font-weight-bold text-name mb-2 mt-4"
        >
          Password
          <p class="ml-1" style="color: #0f60ff">*</p>
        </div>

        <v-text-field
          density="compact"
          variant="solo"
          label="Nhập password"
          single-line
          type="password"
          class="bg-white"
          v-model="passwordField.value.value"
          hide-details
          flat
          style="border-radius: 6px; border: 1px solid rgb(231, 231, 231)"
        ></v-text-field>
        <span class="error-message">{{ passwordField.errorMessage }}</span>

        <div
          class="text-medium-emphasis d-flex align-center font-weight-bold text-name mb-2 mt-4"
        >
          Ngày sinh
          <p class="ml-1" style="color: #0f60ff">*</p>
        </div>

        <v-text-field
          type="date"
          density="compact"
          variant="solo"
          single-line
          class="bg-white"
          v-model="birthdayField.value.value"
          flat
          hide-details
          style="border-radius: 6px; border: 1px solid rgb(231, 231, 231)"
        ></v-text-field>
        <!-- <span class="error-message">{{ birthdayField.errorMessage }}</span> -->

        <div
          class="text-medium-emphasis mt-4 d-flex align-center font-weight-bold text-name mb-2"
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
          v-model="phoneField.value.value"
          class="bg-white mb-3"
          hide-details
          flat
          style="border-radius: 6px; border: 1px solid rgb(231, 231, 231)"
        ></v-text-field>
        <span class="error-message">{{ phoneField.errorMessage }}</span>
        <!-- <v-textarea label="Label" variant="solo" flat single-line></v-textarea> -->

        <div
          class="text-medium-emphasis mt-4 d-flex align-center font-weight-bold text-name mb-2"
        >
          Quyền của người dùng
        </div>

        <v-text-field
          density="compact"
          variant="solo"
          label="Nhập quyền"
          single-line
          v-model="roleField.value.value"
          class="bg-white mb-3"
          hide-details
          flat
          style="border-radius: 6px; border: 1px solid rgb(231, 231, 231)"
        ></v-text-field>
        <!-- <span class="error-message">{{ phoneField.errorMessage }}</span> -->

        <div
          class="text-medium-emphasis text-[14px] d-flex align-center font-weight-bold text-name mb-2"
        >
          Avartar
          <p class="ml-1" style="color: #0f60ff">*</p>
        </div>

        <v-text-field
          density="compact"
          variant="solo"
          label="Nhập link ảnh avartar"
          single-line
          class="bg-white mb-3"
          @change="handleImageChange"
          type="file"
          accept="image/*"
          hide-details
          flat
          style="border-radius: 6px; border: 1px solid rgb(231, 231, 231)"
        ></v-text-field>

        <!-- <v-card class="mb-12" color="surface-variant" variant="tonal"> </v-card> -->
      </div>
      <v-row
        style="
          padding-top: 8px;
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
            class="text-capitalize mr-4"
            @click="emits('close')"
            style="border-radius: 6px; border: 1px solid rgb(222, 222, 222)"
            >Hủy</v-btn
          >
          <v-btn
            width="105"
            color="#0f60ff"
            class="text-capitalize"
            @click="addUser"
            flat
            style="border-radius: 6px; border: 1px solid rgb(231, 231, 231)"
            >Tạo
            <p class="text-lowercase">mới</p>
          </v-btn></v-col
        >
      </v-row>
    </v-dialog>
  </div>
</template>
  

<script setup lang="ts">
import { useField, useForm } from 'vee-validate';
import { ref } from 'vue';
import * as yup from 'yup';
import { serviceUser } from '../../layouts/components/user/user';
import { showErrorNotification, showSuccessNotification } from '@/common/helpers';

const props = defineProps<{
  dialogAdd: boolean;
}>();

const emits = defineEmits(['close', 'updateData']);

const schema = yup.object({
  name: yup
    .string()
    .required('Tên người dùng là bắt buộc')
    .min(10, 'Name tối thiểu 10 kí tự'),
  // .matches(
  //   FORM_VALIDATION.codeRegExp,
  //   'Không được chứa khoảng trắng và kí tự đặc biệt',
  // ),
  email: yup.string().email('Email không đúng định dạng').required('Email là bắt buộc'),
  birthday: yup
    .date()
    .required('Ngày sinh không được để trống')
    .test('Ngày sinh không hợp lệ', (value) => {
      const birthday = new Date(value);
      const currentime = new Date();
      return birthday <= currentime;
    }),
  phone: yup
    .string()
    .required('Phone không được để trống')
    .matches(/^0\d{9,10}$/, 'Phone không hợp lệ'),
  password: yup
    .string()
    .required('Password là bắt buộc')
    .min(8, 'Password tối thiểu 8 ký tự')
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).*$/,
      'Password phải chứa chữ cái thường, chữ in hoa và số',
    ),
});

const { handleSubmit } = useForm({
  validationSchema: schema,
});

const nameField = useField('name', '');
const emailField = useField('email', '');
const birthdayField = useField('birthday');
const phoneField = useField('phone', '');
const passwordField = useField('password', '');

const roleField = useField('role');

const resetForm = () => {
  nameField.value = '';
  emailField.value = '';
  birthdayField.value = '';
  phoneField.value = '';
  passwordField.value = '';
};

const imageField = ref(null);
const handleImageChange = (e) => {
  const image = e.target.files[0];
  imageField.value = image;
};

const addUser = handleSubmit(async () => {
  try {
    const formData = new FormData();
    formData.append('name', nameField.value.value);
    formData.append('password', passwordField.value.value);
    formData.append('email', emailField.value.value);
    formData.append('birthday', birthdayField.value.value);
    formData.append('phone', phoneField.value.value);
    formData.append('avatar', imageField.value);
    formData.append('roles', roleField.value.value);

    const response = await serviceUser.addUser(formData);
    if (response.success) {
      console.log(response);

      nameField.value.value = '';
      passwordField.value.value = '';
      emailField.value.value = '';
      birthdayField.value.value = '';
      passwordField.value.value = '';
      phoneField.value.value = '';
      imageField.value = null;
      roleField.value.value = '';

      emits('close');
      emits('updateData');
      showSuccessNotification('Thêm người dùng thành công');
    } else {
      showErrorNotification('Thêm người dùng thất bại');
    }
  } catch (error) {
    console.log('Error: ', error);
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