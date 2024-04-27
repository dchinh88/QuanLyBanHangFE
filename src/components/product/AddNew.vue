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
        Tạo mới sản phẩm
      </div>
      <div style="background-color: #f7f7f7; padding: 16px 20px">
        <div
          style="color: #464f60"
          class="font-weight-bold font-weight-medium text-medium-emphasis d-flex align-center text-name mb-2"
        >
          Tên sản phẩm
          <p class="ml-1" style="color: #0f60ff">*</p>
        </div>
        <v-text-field
          density="compact"
          variant="solo"
          label="Nhập tên sản phẩm"
          single-line
          type="text"
          class="bg-white"
          v-model="nameField.value.value"
          hide-details
          style="border-radius: 6px; border: 1px solid rgb(231, 231, 231)"
          flat
        ></v-text-field>
        <!-- {{ nameField.value }} -->
        <span class="error-message">{{ nameField.errorMessage }}</span>

        <div
          class="text-medium-emphasis d-flex align-center font-weight-bold text-name mb-2 mt-4"
        >
          Giá
          <p class="ml-1" style="color: #0f60ff">*</p>
        </div>

        <v-text-field
          density="compact"
          variant="solo"
          label="Nhập giá sản phẩm"
          type="number"
          single-line
          v-model="priceField.value.value"
          class="bg-white"
          hide-details
          flat
          style="border-radius: 6px; border: 1px solid rgb(231, 231, 231)"
        ></v-text-field>
        <span class="error-message">{{ priceField.errorMessage }}</span>
        <!-- <span class="text-left" style="color: red; font-size: 12px; float: right">{{
          errors.price
        }}</span> -->

        <div
          class="text-medium-emphasis text-[14px] d-flex align-center font-weight-bold text-name mb-2 mt-4"
        >
          Số lượng
          <p class="ml-1" style="color: #0f60ff">*</p>
        </div>

        <v-text-field
          density="compact"
          variant="solo"
          label="Nhập số lượng sản phẩm"
          type="number"
          single-line
          class="bg-white"
          v-model="quantityField.value.value"
          flat
          hide-details
          style="border-radius: 6px; border: 1px solid rgb(231, 231, 231)"
        ></v-text-field>
        <span class="error-message">{{ quantityField.errorMessage }}</span>

        <div
          class="text-medium-emphasis text-[14px] d-flex align-center font-weight-bold text-name mb-2 mt-4"
        >
          Mô tả
        </div>
        <v-textarea
          label="Nhập mô tả"
          variant="solo"
          placeholder="Nhập mô tả"
          single-line
          v-model="descriptionField.value.value"
          class="text-area"
          style="
            margin-bottom: 16px;
            border-radius: 6px;
            border: 1px solid rgb(231, 231, 231);
          "
          flat
          hide-details
        ></v-textarea>
        <span class="error-message">{{ descriptionField.errorMessage }}</span>

        <div
          class="text-medium-emphasis text-[14px] d-flex align-center font-weight-bold text-name mb-2"
        >
          Ảnh sản phẩm
          <p class="ml-1" style="color: #0f60ff">*</p>
        </div>

        <v-text-field
          density="compact"
          variant="solo"
          label="Nhập link ảnh sản phẩm"
          single-line
          @change="handleImageChange"
          class="bg-white mb-3"
          type="file"
          accept="image/*"
          hide-details
          flat
          style="border-radius: 6px; border: 1px solid rgb(231, 231, 231)"
        ></v-text-field>
        <!-- <span class="error-message">{{ imageField.errorMessage }}</span> -->
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
import { serviceProduct } from '../../layouts/components/product/product';
import { Product } from '../../layouts/components/product/interface';
import { ref } from 'vue';
import { useField, useForm } from 'vee-validate';
import * as yup from 'yup';
import { showErrorNotification, showSuccessNotification } from '@/common/helpers';

const props = defineProps<{
  dialogAdd: boolean;
}>();

const emits = defineEmits(['close', 'updateData']);

const product = ref<Product>({
  name: '',
  price: 0,
  quantity: 0,
  description: '',
  image: null,
});

const schema = yup.object({
  name: yup.string().required('Tên sản phẩm là bắt buộc'),
  // .matches(
  //   FORM_VALIDATION.codeRegExp,
  //   'Không được chứa khoảng trắng và kí tự đặc biệt',
  // ),
  price: yup
    .string()
    .required('Giá sản phẩm là bắt buộc')
    .min(1, 'Giá sản phẩm không nhỏ hơn 1'),
  quantity: yup
    .string()
    .required('Số lượng sản phẩm là bắt buộc')
    .min(1, 'Số lượng không được nhỏ hơn 0'),
  description: yup
    .string()
    .required('Mô tả là bắt buộc')
    .min(10, 'Mô tả tối thiểu là 10 kí tự!')
    .max(500, 'Mô tả tối đa 500 kí tự!'),
});

const { handleSubmit } = useForm({
  validationSchema: schema,
});

// const nameField = useField('name', {
//   initialValues: product.value.name,
// });
const nameField = useField('name');
const priceField = useField('price');
const quantityField = useField('quantity');
const descriptionField = useField('description');

const imageFile = ref(null);

const handleImageChange = (event) => {
  const image = event.target.files[0];
  imageFile.value = image;
};

const addProduct = handleSubmit(async () => {
  try {
    const formData = new FormData();
    formData.append('name', nameField.value.value);
    formData.append('price', priceField.value.value);
    formData.append('quantity', quantityField.value.value);
    formData.append('description', descriptionField.value.value);
    formData.append('image', imageFile.value);

    const response = await serviceProduct.addProduct(formData);

    console.log(response);

    if (response.success) {
      nameField.value.value = '';
      priceField.value.value = '';
      quantityField.value.value = '';
      descriptionField.value.value = '';
      imageFile.value = null;
      // emptyForm();

      emits('close');
      emits('updateData');

      showSuccessNotification('Thêm sản phẩm thành công');
    } else {
      showErrorNotification('Thêm sản phẩm thất bại');
    }
  } catch (error) {
    showErrorNotification('Thêm sản phẩm thất bại');
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