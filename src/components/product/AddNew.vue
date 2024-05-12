<template>
  <div>
    <v-dialog
      class="mx-auto pb-6 mt-1"
      style="border-radius: 12px"
      max-width="748px"
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
      <div style="background-color: #f7f7f7; padding: 16px 20px 20px">
        <v-row>
          <!-- style="padding: 12px" -->
          <v-col
            ><div
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
              v-model="tensanphamField.value.value"
              hide-details
              style="border-radius: 6px; border: 1px solid rgb(231, 231, 231)"
              flat
            ></v-text-field>
            <!-- {{ nameField.value }} -->
            <p class="error-message mt-1" style="position: absolute; right: 51%">
              {{ tensanphamField.errorMessage }}
            </p></v-col
          >
          <v-col
            ><div
              class="text-medium-emphasis d-flex align-center font-weight-bold text-name mb-2"
            >
              Giá bán
              <p class="ml-1" style="color: #0f60ff">*</p>
            </div>

            <v-text-field
              density="compact"
              variant="solo"
              label="Nhập giá sản phẩm"
              type="number"
              single-line
              v-model="giabanField.value.value"
              class="bg-white"
              hide-details
              flat
              style="border-radius: 6px; border: 1px solid rgb(231, 231, 231)"
            ></v-text-field>
            <span class="error-message mt-1" style="position: absolute; right: 3%">{{
              giabanField.errorMessage
            }}</span></v-col
          >
        </v-row>

        <!-- <span class="text-left" style="color: red; font-size: 12px; float: right">{{
          errors.price
        }}</span> -->
        <v-row>
          <v-col
            ><div
              class="text-medium-emphasis text-[14px] d-flex align-center font-weight-bold text-name mb-2"
            >
              Chất liệu
              <p class="ml-1" style="color: #0f60ff">*</p>
            </div>

            <v-text-field
              density="compact"
              variant="solo"
              label="Nhập chất liệu sản phẩm"
              single-line
              class="bg-white"
              v-model="chatlieuField.value.value"
              flat
              hide-details
              style="border-radius: 6px; border: 1px solid rgb(231, 231, 231)"
            ></v-text-field>
            <span class="error-message mt-1" style="position: absolute; right: 51%">{{
              chatlieuField.errorMessage
            }}</span></v-col
          >
          <v-col
            ><div
              class="text-medium-emphasis text-[14px] d-flex align-center font-weight-bold text-name mb-2"
            >
              Màu sắc
              <p class="ml-1" style="color: #0f60ff">*</p>
            </div>

            <v-text-field
              density="compact"
              variant="solo"
              label="Nhập số màu sắc sản phẩm"
              single-line
              class="bg-white"
              v-model="mausacField.value.value"
              flat
              hide-details
              style="border-radius: 6px; border: 1px solid rgb(231, 231, 231)"
            ></v-text-field>
            <span class="error-message mt-1" style="position: absolute; right: 3%">{{
              mausacField.errorMessage
            }}</span></v-col
          >
        </v-row>
        <v-row>
          <v-col
            ><div
              class="text-medium-emphasis text-[14px] d-flex align-center font-weight-bold text-name mb-2"
            >
              Bảo hành
              <p class="ml-1" style="color: #0f60ff">*</p>
            </div>

            <v-text-field
              density="compact"
              variant="solo"
              label="Nhập số lượng sản phẩm"
              single-line
              class="bg-white"
              v-model="baohanhField.value.value"
              flat
              hide-details
              style="border-radius: 6px; border: 1px solid rgb(231, 231, 231)"
            ></v-text-field>
            <span class="error-message mt-1" style="position: absolute; right: 51%">{{
              baohanhField.errorMessage
            }}</span></v-col
          >
          <v-col
            ><div
              class="text-medium-emphasis text-[14px] d-flex align-center font-weight-bold text-name mb-2"
            >
              Kho
              <p class="ml-1" style="color: #0f60ff">*</p>
            </div>

            <v-select
              density="compact"
              variant="solo"
              label="Chọn kho"
              single-line
              :items="khos"
              item-value="id"
              item-title="tenkho"
              class="bg-white"
              v-model="khoField.value.value"
              flat
              hide-details
              style="border-radius: 6px; border: 1px solid rgb(231, 231, 231)"
            ></v-select>
            <span class="error-message mt-1" style="position: absolute; right: 3%">{{
              khoField.errorMessage
            }}</span></v-col
          >
        </v-row>
        <v-row>
          <v-col
            ><div
              class="text-medium-emphasis text-[14px] d-flex align-center font-weight-bold text-name mb-2"
            >
              Số lượng tồn
              <p class="ml-1" style="color: #0f60ff">*</p>
            </div>

            <v-text-field
              density="compact"
              variant="solo"
              label="Nhập số lượng tồn"
              type="number"
              single-line
              class="bg-white"
              v-model="soluongtonField.value.value"
              flat
              hide-details
              style="border-radius: 6px; border: 1px solid rgb(231, 231, 231)"
            ></v-text-field>
            <span class="error-message mt-1" style="position: absolute; right: 51%">{{
              soluongtonField.errorMessage
            }}</span></v-col
          >
          <v-col
            ><div
              class="text-medium-emphasis text-[14px] d-flex align-center font-weight-bold text-name mb-2"
            >
              Loại sản phẩm
              <p class="ml-1" style="color: #0f60ff">*</p>
            </div>

            <v-select
              density="compact"
              variant="solo"
              label="Chọn loại sản phẩm"
              single-line
              :items="loaisanpham"
              item-value="id"
              item-title="tenloaisanpham"
              class="bg-white"
              v-model="loaisanphamField.value.value"
              flat
              hide-details
              style="border-radius: 6px; border: 1px solid rgb(231, 231, 231)"
            ></v-select>
            <span class="error-message mt-1" style="position: absolute; right: 3%">{{
              loaisanphamField.errorMessage
            }}</span></v-col
          >
        </v-row>

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
          v-model="motaField.value.value"
          class="text-area"
          style="
            margin-bottom: 16px;
            border-radius: 6px;
            border: 1px solid rgb(231, 231, 231);
          "
          flat
          hide-details
        ></v-textarea>
        <span class="error-message" style="position: absolute; right: 3%; top: 89.5%">{{
          motaField.errorMessage
        }}</span>

        <!-- <div
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
        ></v-text-field> -->
        <!-- <span class="error-message">{{ imageField.errorMessage }}</span> -->
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
import { ref, onMounted } from 'vue';
import { useField, useForm } from 'vee-validate';
import * as yup from 'yup';
import { showErrorNotification, showSuccessNotification } from '@/common/helpers';
import { serviceKho } from '../../layouts/components/kho/kho';
import { serviceLoaisanpham } from '../../layouts/components/loaisanpham/loaisanpham';

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

const kho = ref([]);
const khos = ref([]);

const lsp = ref([]);
const loaisanpham = ref([]);

const schema = yup.object({
  tensanpham: yup.string().required('Tên sản phẩm là bắt buộc'),
  // .matches(
  //   FORM_VALIDATION.codeRegExp,
  //   'Không được chứa khoảng trắng và kí tự đặc biệt',
  // ),
  giaban: yup
    .string()
    .required('Giá sản phẩm là bắt buộc')
    .min(1, 'Giá sản phẩm không nhỏ hơn 1'),
  soluongton: yup
    .string()
    .required('Số lượng sản phẩm là bắt buộc')
    .min(1, 'Số lượng không được nhỏ hơn 0'),
  mota: yup.string().required('Mô tả là bắt buộc').max(500, 'Mô tả tối đa 500 kí tự!'),
  chatlieu: yup.string().required('Chất liệu là bắt buộc'),
  macsac: yup.string().required('Màu sắc là bắt buộc'),
  baohanh: yup.string().required('Bảo hành là bắt buộc'),
  kho: yup.string().required('Kho là bắt buộc'),
  loaisanpham: yup.string().required('Loại sản phẩm là bắt buộc'),
});

const { handleSubmit } = useForm({
  validationSchema: schema,
});

// const nameField = useField('name', {
//   initialValues: product.value.name,
// });
const loaisanphamField = useField('loaisanpham');
const tensanphamField = useField('tensanpham');
const giabanField = useField('giaban');
const chatlieuField = useField('chatlieu');
const mausacField = useField('macsac');
const baohanhField = useField('baohanh');
const motaField = useField('mota');
const khoField = useField('kho');
const soluongtonField = useField('soluongton');

const imageFile = ref(null);

const handleImageChange = (event) => {
  const image = event.target.files[0];
  imageFile.value = image;
};

const getKho = async () => {
  const res = await serviceKho.getAllKho();
  kho.value = res;
  var lengthKho = Object.keys(kho.value).length;

  for (var i = 0; i < lengthKho - 1; i++) {
    khos.value.push(kho.value[i]);
  }
  console.log(Object.keys(kho.value).length);
};

const getLoaisanpham = async () => {
  const res = await serviceLoaisanpham.getAllLoaisanpham();
  lsp.value = res;
  var lengthLsp = Object.keys(lsp.value).length;
  for (var i = 0; i < lengthLsp - 1; i++) {
    loaisanpham.value.push(lsp.value[i]);
  }
};

onMounted(async () => {
  getKho();
  getLoaisanpham();
});

const addProduct = handleSubmit(async () => {
  try {
    const formData = new FormData();
    formData.append('loaisanphamid', loaisanphamField.value.value);
    formData.append('tensanpham', tensanphamField.value.value);
    formData.append('giaban', giabanField.value.value);
    formData.append('chatlieu', chatlieuField.value.value);
    formData.append('macsac', mausacField.value.value);
    formData.append('baohanh', baohanhField.value.value);
    formData.append('mota', motaField.value.value);
    formData.append('khoid', khoField.value.value);
    formData.append('soluongton', soluongtonField.value.value);
    // formData.append('image', imageFile.value);

    const response = await serviceProduct.addProduct(formData);

    console.log(response);

    if (response.success) {
      loaisanphamField.value.value = '';
      tensanphamField.value.value = '';
      giabanField.value.value = '';
      chatlieuField.value.value = '';
      mausacField.value.value = '';
      baohanhField.value.value = '';
      motaField.value.value = '';
      khoField.value.value = '';
      soluongtonField.value.value = '';
      // imageFile.value = null;
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