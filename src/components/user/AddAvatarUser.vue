<template>
  <div>
    <v-dialog
      class="mx-auto pb-6 mt-1"
      style="border-radius: 12px"
      max-width="448px"
      v-model="dialog"
    >
      <div
        style="
          background-color: white;
          padding: 17px 0 17px 20px;
          border-radius: 12px 12px 0 0;
        "
        class="text-left title-addnew"
      >
        Thêm avatar người dùng
      </div>
      <div style="background-color: #f7f7f7; padding: 16px 20px">
        <div
          class="text-medium-emphasis mt-4 d-flex align-center font-weight-bold text-name mb-2"
        >
          Id User
          <p class="ml-1" style="color: #0f60ff">*</p>
        </div>

        <v-text-field
          density="compact"
          variant="solo"
          single-line
          v-model="this.idUser"
          class="bg-white mb-3"
          hide-details
          flat
          style="border-radius: 6px; border: 1px solid rgb(231, 231, 231)"
        ></v-text-field>

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
          type="file"
          accept="image/*"
          @change="handleImageChange"
          hide-details
          flat
          style="border-radius: 6px; border: 1px solid rgb(231, 231, 231)"
        ></v-text-field>
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
            @click="this.$emit('close')"
            style="border-radius: 6px; border: 1px solid rgb(222, 222, 222)"
            >Hủy</v-btn
          >
          <v-btn
            width="105"
            color="#0f60ff"
            class="text-capitalize"
            @click="uploadImages"
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
  
  <script>
// import { computed, ref } from 'vue';
// import { showSuccessNotification } from '../../common/helpers';
// import { serviceAvatar } from '../../layouts/components/uploadAvatar/uploadAvatar';

// const props = defineProps<{
//   dialogAddAvatar: boolean;
//   idUser: string;
// }>();
// const emits = defineEmits(['close', 'updateData']);
// // const files = ref(null);
// // const handleImageChange = (e) => {
// //   const image = e.target.files[0];
// //   files.value = image;
// // };
// const imageField = ref(null);
// const handleImageChange = (e) => {
//   const image = e.target.files[0];
//   imageField.value = image;
// };

// const uploadImages = async () => {
//   try {
//     if (!imageField.value) {
//       console.error('No image selected');
//       return;
//     }
//     const formData = new FormData();

//     formData.append('formFiles', imageField.value);

//     formData.append('id', props.idUser);
//     // console.log(imageField.value);

//     const response = await serviceAvatar.addAvatar(formData);
//     if (response.success) {
//       imageField.value = '';
//       emits('close');
//       emits('updateData');
//       showSuccessNotification('Upload Avatar thành công');
//     } else {
//       showSuccessNotification('Upload Avatar không thành công!');
//     }
//   } catch (error) {
//     console.error(error);
//   }
// };
// ////////////////////////////////////////////

import axios from 'axios';
import { serviceAvatar } from '../../layouts/components/uploadAvatar/uploadAvatar';
import { showSuccessNotification } from '../../common/helpers';

export default {
  props: ['dialogAddAvatar', 'idUser'],
  data() {
    return {
      files: null,
      user: {
        id: '',
      },
    };
  },
  computed: {
    dialog: {
      get() {
        return this.dialogAddAvatar;
      },
      set(value) {
        if (!value) {
          this.$emit('close');
        }
      },
    },
  },
  methods: {
    uploadImages() {
      const formData = new FormData();
      formData.append('formFiles', this.files);
      formData.append('id', this.idUser);
      try {
        // const response = serviceAvatar.addAvatar(formData);
        // if (response.success) {
        //   this.$emit('close');
        //   this.$emit('updateData');
        //   this.files = null;
        //   showSuccessNotification('Upload Avatar thành công');
        // } else {
        //   showSuccessNotification('Upload Avatar không thành công!');
        // }
        axios
          .put('https://localhost:7031/api/UploadAvatar/UploadAvatar', formData)
          .then((res) => {
            console.log(res.status);
            this.$emit('close');
            this.$emit('updateData');
            this.files = null;
            showSuccessNotification('Upload Avatar thành công');
          })
          .catch((e) => e);
      } catch (error) {
        console.log(error);
        this.$toast.error('Failed to upload images');
        showSuccessNotification('Upload Avatar không thành công!');
      }
    },
    //     const imageField = ref(null);
    handleImageChange(e) {
      const image = e.target.files[0];
      this.files = image;
    },
  },
};
</script>
  
  <style>
</style>