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
        Tạo mới đơn hàng
      </div>
      <div style="background-color: #f7f7f7; padding: 16px 20px 20px">
        <v-row>
          <!-- style="padding: 12px" -->
          <v-col
            ><div
              style="color: #464f60"
              class="font-weight-bold font-weight-medium text-medium-emphasis d-flex align-center text-name mb-2"
            >
              Ngày tạo đơn
              <p class="ml-1" style="color: #0f60ff">*</p>
            </div>
            <v-text-field
              type="date"
              density="compact"
              variant="solo"
              single-line
              class="bg-white"
              v-model="ngaytaodonField.value.value"
              flat
              hide-details
              style="border-radius: 6px; border: 1px solid rgb(231, 231, 231)"
            ></v-text-field>
            <p class="error-message mt-1" style="position: absolute; right: 51%">
              {{ ngaytaodonField.errorMessage }}
            </p></v-col
          >
          <v-col
            ><div
              class="text-medium-emphasis d-flex align-center font-weight-bold text-name mb-2"
            >
              Địa chỉ giao hàng
              <p class="ml-1" style="color: #0f60ff">*</p>
            </div>

            <v-text-field
              density="compact"
              variant="solo"
              label="Nhập giá sản phẩm"
              single-line
              v-model="diachigiaohangField.value.value"
              class="bg-white"
              hide-details
              flat
              style="border-radius: 6px; border: 1px solid rgb(231, 231, 231)"
            ></v-text-field>
            <span class="error-message mt-1" style="position: absolute; right: 3%">{{
              diachigiaohangField.errorMessage
            }}</span></v-col
          >
        </v-row>

        <v-row>
          <v-col
            ><div
              class="text-medium-emphasis text-[14px] d-flex align-center font-weight-bold text-name mb-2"
            >
              Khách hàng
              <p class="ml-1" style="color: #0f60ff">*</p>
            </div>

            <v-text-field
              density="compact"
              variant="solo"
              label="Nhập id khách hàng"
              single-line
              class="bg-white"
              v-model="khachhangidField.value.value"
              flat
              hide-details
              style="border-radius: 6px; border: 1px solid rgb(231, 231, 231)"
            ></v-text-field>
            <span class="error-message mt-1" style="position: absolute; right: 51%">{{
              khachhangidField.errorMessage
            }}</span></v-col
          >
          <v-col
            ><div
              class="text-medium-emphasis text-[14px] d-flex align-center font-weight-bold text-name mb-2"
            >
              Nhân viên
              <p class="ml-1" style="color: #0f60ff">*</p>
            </div>

            <v-text-field
              density="compact"
              variant="solo"
              label="Nhập số màu sắc sản phẩm"
              single-line
              class="bg-white"
              v-model="nhanvienidField.value.value"
              flat
              hide-details
              style="border-radius: 6px; border: 1px solid rgb(231, 231, 231)"
            ></v-text-field>
            <span class="error-message mt-1" style="position: absolute; right: 3%">{{
              nhanvienidField.errorMessage
            }}</span></v-col
          >
        </v-row>
        <v-row>
          <v-col
            ><div
              class="text-medium-emphasis text-[14px] d-flex align-center font-weight-bold text-name mb-2"
            >
              Tình trạng
              <p class="ml-1" style="color: #0f60ff">*</p>
            </div>

            <v-text-field
              density="compact"
              variant="solo"
              readonly
              label="Nhập số lượng sản phẩm"
              single-line
              class="bg-white"
              v-model="tinhtrangidField.value.value"
              flat
              hide-details
              style="border-radius: 6px; border: 1px solid rgb(231, 231, 231)"
            ></v-text-field>
            <span class="error-message mt-1" style="position: absolute; right: 51%">{{
              tinhtrangidField.errorMessage
            }}</span></v-col
          >
          <v-col
            ><div
              class="text-medium-emphasis text-[14px] d-flex align-center font-weight-bold text-name mb-2"
            >
              Thành tiền
              <p class="ml-1" style="color: #0f60ff">*</p>
            </div>

            <v-text-field
              density="compact"
              variant="solo"
              label="Thành tiền"
              single-line
              type="number"
              class="bg-white"
              v-model="thanhtienField.value.value"
              flat
              hide-details
              style="border-radius: 6px; border: 1px solid rgb(231, 231, 231)"
            ></v-text-field>
            <span class="error-message mt-1" style="position: absolute; right: 3%">{{
              thanhtienField.errorMessage
            }}</span></v-col
          >
        </v-row>
        <v-row>
          <v-col
            ><div
              class="text-medium-emphasis text-[14px] d-flex align-center font-weight-bold text-name mb-2"
            >
              Đã thanh toán
              <p class="ml-1" style="color: #0f60ff">*</p>
            </div>

            <v-text-field
              density="compact"
              variant="solo"
              label="Nhập số lượng tồn"
              type="number"
              single-line
              class="bg-white"
              v-model="dathanhtoanField.value.value"
              flat
              hide-details
              style="border-radius: 6px; border: 1px solid rgb(231, 231, 231)"
            ></v-text-field>
            <span class="error-message mt-1" style="position: absolute; right: 51%">{{
              dathanhtoanField.errorMessage
            }}</span></v-col
          >
          <v-col
            ><div
              class="text-medium-emphasis text-[14px] d-flex align-center font-weight-bold text-name mb-2"
            >
              Còn nợ
              <p class="ml-1" style="color: #0f60ff">*</p>
            </div>

            <v-text-field
              density="compact"
              variant="solo"
              single-line
              type="number"
              class="bg-white"
              v-model="connoField.value.value"
              flat
              hide-details
              style="border-radius: 6px; border: 1px solid rgb(231, 231, 231)"
            ></v-text-field>
            <span class="error-message mt-1" style="position: absolute; right: 3%">{{
              connoField.errorMessage
            }}</span></v-col
          >
        </v-row>
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

const kho = ref([]);
const khos = ref([]);

const lsp = ref([]);
const loaisanpham = ref([]);

const schema = yup.object({
  ngaytaodon: yup
    .date()
    .required('Ngày tạo đơn là bắt buộc')
    .test('Ngày tạo đơn không hợp lệ', (value) => {
      const ngaytao = new Date(value);
      const currenttime = new Date();
      return ngaytao <= currenttime;
    }),
  diachigiaohang: yup.string().required('Địa chỉ giao hàng là bắt buộc'),
  khachhangid: yup.string().required('id khách hàng là bắt buộc'),
  nhanvienid: yup.string().required('id nhân viên là bắt buộc'),
  tinhtrangid: yup.string().required('tình trạng là bắt buộc'),
  thanhtien: yup
    .string()
    .required('Thành tiền là bắt buộc')
    .min(1, 'Thành tiền không nhỏ hơn 1'),
  dathanhtoan: yup
    .string()
    .required('Đã thanh toán là bắt buộc')
    .min(0, 'Đã thanh toán không nhỏ hơn 0'),
  conno: yup.string().required('Còn nợ là bắt buộc').min(0, 'Còn nợ không nhỏ hơn 0'),
});

const { handleSubmit } = useForm({
  validationSchema: schema,
});

// const nameField = useField('name', {
//   initialValues: product.value.name,
// });
const ngaytaodonField = useField('ngaytaodon');
const currentTime = new Date();
ngaytaodonField.value.value = currentTime.toISOString();
const diachigiaohangField = useField('diachigiaohang');
const khachhangidField = useField('khachhangid');
const nhanvienidField = useField('nhanvienid');
const tinhtrangidField = useField('tinhtrangid');
tinhtrangidField.value.value = 1;
const thanhtienField = useField('thanhtien');
const dathanhtoanField = useField('dathanhtoan');
const connoField = useField('conno');

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