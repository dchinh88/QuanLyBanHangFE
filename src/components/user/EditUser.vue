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
        Sửa người dùng
      </div>
      <div style="background-color: #f7f7f7; padding: 16px 20px 30px 20px">
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
          label="Nhập tên user"
          single-line
          class="bg-white"
          v-model="user.tennhanvien"
          hide-details
          style="border-radius: 6px; border: 1px solid rgb(231, 231, 231)"
          flat
        ></v-text-field>

        <!-- <div
          style="color: #464f60"
          class="font-weight-bold font-weight-medium mt-4 text-medium-emphasis d-flex align-center text-name mb-2"
        >
          Password
          <p class="ml-1" style="color: #0f60ff">*</p>
        </div>
        <v-text-field
          density="compact"
          variant="solo"
          label="Nhập password"
          single-line
          class="bg-white"
          v-model="user.password"
          hide-details
          style="border-radius: 6px; border: 1px solid rgb(231, 231, 231)"
          flat
        ></v-text-field> -->

        <div
          style="color: #464f60"
          class="font-weight-bold font-weight-medium mt-4 text-medium-emphasis d-flex align-center text-name mb-2"
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
          v-model="user.email"
          hide-details
          style="border-radius: 6px; border: 1px solid rgb(231, 231, 231)"
          flat
        ></v-text-field>

        <div
          style="color: #464f60"
          class="font-weight-bold font-weight-medium mt-4 text-medium-emphasis d-flex align-center text-name mb-2"
        >
          Ngày sinh
          <p class="ml-1" style="color: #0f60ff">*</p>
        </div>
        <v-text-field
          density="compact"
          variant="solo"
          label="Chọn ngày sinh"
          type="date"
          single-line
          class="bg-white"
          v-model="formattedBirthday"
          hide-details
          style="border-radius: 6px; border: 1px solid rgb(231, 231, 231)"
          flat
        ></v-text-field>

        <div
          style="color: #464f60"
          class="font-weight-bold font-weight-medium mt-4 text-medium-emphasis d-flex align-center text-name mb-2"
        >
          Số điện thoại
          <p class="ml-1" style="color: #0f60ff">*</p>
        </div>
        <v-text-field
          density="compact"
          variant="solo"
          label="Nhập số điện thoại"
          single-line
          class="bg-white"
          v-model="user.sodienthoai"
          hide-details
          style="border-radius: 6px; border: 1px solid rgb(231, 231, 231)"
          flat
        ></v-text-field>

        <div
          style="color: #464f60"
          class="font-weight-bold font-weight-medium mt-4 text-medium-emphasis d-flex align-center text-name mb-2"
        >
          Địa chỉ
          <p class="ml-1" style="color: #0f60ff">*</p>
        </div>
        <v-text-field
          density="compact"
          variant="solo"
          single-line
          class="bg-white"
          v-model="user.diachi"
          hide-details
          style="border-radius: 6px; border: 1px solid rgb(231, 231, 231)"
          flat
        ></v-text-field>
        <div
          style="color: #464f60"
          class="font-weight-bold font-weight-medium mt-4 text-medium-emphasis d-flex align-center text-name mb-2"
        >
          Quyền của người dùng
          <p class="ml-1" style="color: #0f60ff">*</p>
        </div>
        <v-text-field
          density="compact"
          variant="solo"
          single-line
          class="bg-white"
          v-model="user.chucvu"
          hide-details
          style="border-radius: 6px; border: 1px solid rgb(231, 231, 231)"
          flat
        ></v-text-field>
        <!-- {{ user.roles }} -->

        <!-- <div
          style="color: #464f60"
          class="font-weight-bold font-weight-medium mt-4 text-medium-emphasis d-flex align-center text-name mb-2"
        >
          Avatar
          <p class="ml-1" style="color: #0f60ff">*</p>
        </div>
        <v-text-field
          density="compact"
          variant="solo"
          label="Avatar"
          single-line
          class="bg-white"
          @change="handleImageChange"
          type="file"
          hide-details
          style="border-radius: 6px; border: 1px solid rgb(231, 231, 231)"
          flat
        ></v-text-field> -->
      </div>
      <v-row
        class=""
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
            @click="emits('close')"
            flat
            class="text-capitalize mr-4"
            style="border-radius: 6px; border: 1px solid rgb(222, 222, 222)"
            >Hủy</v-btn
          >
          <v-btn
            width="105"
            color="#0f60ff"
            class="text-capitalize"
            @click="updateUser"
            flat
            style="border-radius: 6px; border: 1px solid rgb(231, 231, 231)"
            >Cập
            <p class="text-lowercase">nhật</p>
          </v-btn></v-col
        >
      </v-row>
      <!-- {{ userUpdate.name }} -->
    </v-dialog>
  </div>
</template>

<script setup lang="ts">
import { ref, watchEffect } from 'vue';
import { User } from '../../layouts/components/user/interface';
import { serviceUser } from '../../layouts/components/user/user';
import moment from 'moment';
import { showSuccessNotification } from '@/common/helpers';

const props = defineProps<{
  dialogEdit: boolean;
  currentUser: User;
  idUser: string;
}>();

const formattedBirthday = ref<string>('');

const emits = defineEmits(['close', 'updateData']);

const user = ref<User>({
  tennhanvien: '',
  matkhau: '',
  email: '',
  ngaysinh: new Date(),
  sodienthoai: '',
  diachi: '',
  chucvu: '',
});

const imageField = ref(null);
const handleImageChange = (e) => {
  const image = e.target.files[0];
  imageField.value = image;
};

const updateUser = async () => {
  try {
    const formData = new FormData();
    formData.append('id', user.value.id);
    formData.append('tennhanvien', user.value.tennhanvien);
    formData.append('diachi', user.value.diachi);
    formData.append('ngaysinh', user.value.ngaysinh);
    formData.append('sodienthoai', user.value.sodienthoai);
    formData.append('email', user.value.email);
    formData.append('matkhau', user.value.matkhau);
    // formData.append('avatar', imageField.value);
    formData.append('chucvu', user.value.chucvu);

    const newItem = await serviceUser.editUser(props.idUser, formData);
    console.log(formData);

    if (newItem.success) {
      showSuccessNotification('Update thành công');
      emits('updateData');
      emits('close');
    }
  } catch (error) {
    console.error('Error: ', error);
  }
};

const birthdayString = moment(props.currentUser.ngaysinh).format('YYYY-MM-DD');

formattedBirthday.value = birthdayString;

watchEffect(() => {
  user.value.id = props.currentUser.id;
  user.value.tennhanvien = props.currentUser.tennhanvien;
  user.value.matkhau = props.currentUser.matkhau;
  user.value.email = props.currentUser.email;
  user.value.ngaysinh = formattedBirthday.value;
  // user.value.ngaysinh = props.currentUser.ngaysinh;
  user.value.sodienthoai = props.currentUser.sodienthoai;
  user.value.diachi = props.currentUser.diachi;
  user.value.chucvu = props.currentUser.chucvu;
  // console.log(props.currentUser.ngaysinh);
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



