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
        Tạo mới phiếu mua hàng
      </div>
      <div style="background-color: #f7f7f7; padding: 16px 20px 20px">
        <v-row>
          <!-- style="padding: 12px" -->
          <v-col
            ><div
              style="color: #464f60"
              class="font-weight-bold font-weight-medium text-medium-emphasis d-flex align-center text-name mb-2"
            >
              Ngày mua hàng
              <p class="ml-1" style="color: #0f60ff">*</p>
            </div>
            <v-text-field
              readonly
              density="compact"
              variant="solo"
              single-line
              class="bg-white"
              v-model="ngaymuahangField.value.value"
              flat
              hide-details
              style="border-radius: 6px; border: 1px solid rgb(231, 231, 231)"
            ></v-text-field>
            <p class="error-message mt-1" style="position: absolute; right: 51%">
              {{ ngaymuahangField.errorMessage }}
            </p></v-col
          >
          <v-col
            ><div
              class="text-medium-emphasis text-[14px] d-flex align-center font-weight-bold text-name mb-2"
            >
              Nhà cung cấp
              <p class="ml-1" style="color: #0f60ff">*</p>
            </div>

            <v-select
              density="compact"
              variant="solo"
              label="Chọn nhà cung cấp"
              single-line
              :items="nhacungcaps"
              item-value="id"
              item-title="tennhacungcap"
              class="bg-white"
              v-model="nhacungcapidField.value.value"
              flat
              hide-details
              style="border-radius: 6px; border: 1px solid rgb(231, 231, 231)"
            ></v-select>
            <span class="error-message mt-1" style="position: absolute; right: 3%">{{
              nhacungcapidField.errorMessage
            }}</span></v-col
          >
        </v-row>

        <v-row>
          <v-col
            ><div
              class="text-medium-emphasis text-[14px] d-flex align-center font-weight-bold text-name mb-2"
            >
              Tên sản phẩm
              <p class="ml-1" style="color: #0f60ff">*</p>
            </div>

            <v-text-field
              density="compact"
              variant="solo"
              label="Nhập tên sản phẩm"
              single-line
              class="bg-white"
              v-model="tensanphamField.value.value"
              flat
              hide-details
              style="border-radius: 6px; border: 1px solid rgb(231, 231, 231)"
            ></v-text-field>
            <span class="error-message mt-1" style="position: absolute; right: 51%">{{
              tensanphamField.errorMessage
            }}</span></v-col
          >
          <v-col
            ><div
              class="text-medium-emphasis d-flex align-center font-weight-bold text-name mb-2"
            >
              Đơn giá
              <p class="ml-1" style="color: #0f60ff">*</p>
            </div>

            <v-text-field
              density="compact"
              variant="solo"
              type="number"
              label="Nhập đơn giá"
              single-line
              v-model="dongiaField.value.value"
              class="bg-white"
              hide-details
              flat
              style="border-radius: 6px; border: 1px solid rgb(231, 231, 231)"
            ></v-text-field>
            <span class="error-message mt-1" style="position: absolute; right: 3%">{{
              dongiaField.errorMessage
            }}</span></v-col
          >
        </v-row>
        <v-row>
          <v-col
            ><div
              class="text-medium-emphasis text-[14px] d-flex align-center font-weight-bold text-name mb-2"
            >
              Nhập số lượng
              <p class="ml-1" style="color: #0f60ff">*</p>
            </div>

            <v-text-field
              density="compact"
              variant="solo"
              label="Nhập số lượng"
              type="number"
              single-line
              v-model="soluongField.value.value"
              class="bg-white"
              hide-details
              flat
              style="border-radius: 6px; border: 1px solid rgb(231, 231, 231)"
            ></v-text-field>
            <span class="error-message mt-1" style="position: absolute; right: 51%">{{
              soluongField.errorMessage
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
              type="number"
              readonly
              label="Thành tiền"
              single-line
              class="bg-white"
              v-model="tongtienField.value.value"
              flat
              hide-details
              style="border-radius: 6px; border: 1px solid rgb(231, 231, 231)"
            ></v-text-field>
            <span class="error-message mt-1" style="position: absolute; right: 3%">{{
              tongtienField.errorMessage
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
              label="Nhập số tiền đã thanh toán"
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
              label="Còn nợ"
              type="number"
              readonly
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
          margin-left: 0.4px;
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
            @click="addNewPhieumuahang"
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
import { ref, onMounted, watch } from 'vue';
import { useField, useForm } from 'vee-validate';
import * as yup from 'yup';
import { showErrorNotification, showSuccessNotification } from '@/common/helpers';
import { serviceNhacungcap } from '../../layouts/components/nhacungcap/nhacungcap';
import { servicePhieumuahang } from '../../layouts/components/phieumuahang/phieumuahang';
import { serviceChitietphieumuahang } from '../../layouts/components/chitietphieumuahang/chitietphieumuahang';

const props = defineProps<{
  dialogAdd: boolean;
}>();

const emits = defineEmits(['close', 'updateData']);

const nhacungcap = ref([]);
const nhacungcaps = ref([]);

const phieumuahang = ref([]);

const schema = yup.object({
  nhacungcapid: yup.string().required('Bạn chưa chọn nhà cung cấp'),
  nhanvienid: yup.string().required('id nhân viên là bắt buộc'),
  ngaymuahang: yup.date().required('Ngày mua hàng là bắt buộc'),
  tongtien: yup.string().required('Tổng tiền là bắt buộc'),
  phieumuahangid: yup.string().required('id phiếu mua hàng là bắt buộc'),
  tensanpham: yup.string().required('Bạn chưa nhập tên sản phẩm'),
  soluong: yup.string().required('Bạn chưa nhập số lượng'),
  dongia: yup.string().required('Bạn chưa nhập đơn giá'),
  dathanhtoan: yup.string().required('Bạn chưa nhập số tiền đã thanh toán'),
  conno: yup.string().required('Còn nợ'),
});

const { handleSubmit } = useForm({
  validationSchema: schema,
});

const formatTime = (time) => {
  const day = new Date(time).getDate();
  const month = new Date(time).getMonth() + 1;
  const year = new Date(time).getFullYear();
  // return `${year}/${month}/${day}`;
  const formatMonth = month >= 10 ? month : '0' + month;
  const formatDay = day >= 10 ? day : '0' + day;
  return year + '-' + formatMonth + '-' + formatDay;
};

const formatTimeThanhtoan = (time) => {
  const day = new Date(time).getDate();
  const month = new Date(time).getMonth() + 4;
  const year = new Date(time).getFullYear();
  // return `${year}/${month}/${day}`;
  const formatMonth = month >= 10 ? month : '0' + month;
  const formatDay = day >= 10 ? day : '0' + day;
  return year + '-' + formatMonth + '-' + formatDay;
};

const IdUser = localStorage.getItem('IDUSER');

const nhacungcapidField = useField('nhacungcapid');
const nhanvienidField = useField('nhanvienid');
nhanvienidField.value.value = IdUser;
const ngaymuahangField = useField('ngaymuahang');
const time = new Date();
ngaymuahangField.value.value = formatTime(time);
const tongtienField = useField('tongtien');
const phieumuahangidField = useField('phieumuahangid');
const tensanphamField = useField('tensanpham');
const soluongField = useField('soluong');
const dongiaField = useField('dongia');
const dathanhtoanField = useField('dathanhtoan');
const connoField = useField('conno');
const hanphaithanhtoanField = useField('hanphaithanhtoan');
hanphaithanhtoanField.value.value = formatTimeThanhtoan(time);

const getAllNhacungcap = async () => {
  const res = await serviceNhacungcap.getAllNhacungcap();
  nhacungcap.value = res;
  var lengthNcc = Object.keys(nhacungcap.value).length;
  for (var i = 0; i < lengthNcc - 1; i++) {
    nhacungcaps.value.push(nhacungcap.value[i]);
  }
};

const getAllPhieumuahang = async () => {
  const res = await servicePhieumuahang.getAllPhieumuahang();
  phieumuahang.value = res;

  var lengthPhieumuahang = Object.keys(phieumuahang.value).length;
  phieumuahangidField.value.value = phieumuahang.value[lengthPhieumuahang - 2].id;
};

const tinhTongtien = async () => {
  let tongtien = await (dongiaField.value.value * soluongField.value.value);
  return (tongtienField.value.value = tongtien);
};

const tinhSono = async () => {
  let sono = await (tongtienField.value.value - dathanhtoanField.value.value);
  return (connoField.value.value = sono);
};

onMounted(async () => {
  try {
    getAllNhacungcap();
    getAllPhieumuahang();
  } catch (error) {
    console.log(error);
  }
});

watch(
  () => soluongField.value.value,
  async (newVal, oldValue) => {
    if (newVal !== oldValue) {
      await tinhTongtien();
    }
  },
);

watch(
  () => dathanhtoanField.value.value,
  async (newVal, oldVal) => {
    if (newVal !== oldVal) {
      await tinhSono();
    }
  },
);

// const addCongnocuakhachhang = handleSubmit(async () => {
//   try {
//     const formData = new FormData();
//     formData.append('donhangid', iddonhangField.value.value + 1);
//     formData.append('hoten', hotenField.value.value);
//     formData.append('tongtienphaithanhtoa', tienphaithanhtoanField.value.value);
//     formData.append('sotiendathanhtoan', dathanhtoanField.value.value);
//     formData.append('sotienconno', tienconnoField.value.value);
//     formData.append('hanthanhtoan', hanphaithanhtoanField.value.value);

//     const response = await serviceCongnocuakhachhang.addCongnocuaKH(formData);
//     console.log(response);
//     if (response.success) {
//       iddonhangField.value.value = '';
//       hotenField.value.value = '';
//       tienphaithanhtoanField.value.value = '';
//       // tiendathanhtoanField.value.value = '';
//       tienconnoField.value.value = '';
//       hanphaithanhtoanField.value.value = '';
//     }
//   } catch (error) {
//     console.error('Error: ', error);
//   }
// });

const addChitietdonhang = handleSubmit(async () => {
  try {
    const formData = new FormData();
    formData.append('phieumuahangid', phieumuahangidField.value.value + 1);
    formData.append('tensanpham', tensanphamField.value.value);
    formData.append('soluong', soluongField.value.value);
    formData.append('dongia', dongiaField.value.value);

    const response = await serviceChitietphieumuahang.addChitietphieumuahang(formData);
    console.log(response);
    if (response.success) {
      phieumuahangidField.value.value = '';
      tensanphamField.value.value = '';
      soluongField.value.value = '';
      dongiaField.value.value = '';
      // showSuccessNotification()
    }
  } catch (error) {
    console.error('Error', error);
  }
});

const addDonhang = handleSubmit(async () => {
  try {
    const formData = new FormData();
    formData.append('nhacungcapid', nhacungcapidField.value.value);
    formData.append('nhanvienid', nhanvienidField.value.value);
    formData.append('ngaymuahang', ngaymuahangField.value.value);
    formData.append('tongtien', tongtienField.value.value);

    const response = await servicePhieumuahang.addPhieumuahang(formData);
    // if (connoField.value.value > 0) {
    //   await addCongnocuakhachhang();
    // }

    if (response.success) {
      nhacungcapidField.value.value = '';
      nhanvienidField.value.value = '';
      ngaymuahangField.value.value = '';
      tongtienField.value.value = '';

      emits('close');
      emits('updateData');

      showSuccessNotification('Thêm  hàng thành công');
    } else {
      showErrorNotification('Thêm  hàng thất bại');
    }
  } catch (error) {
    showErrorNotification('Thêm  hàng thất bại');
    console.error('Error', error);
  }
});

const addNewPhieumuahang = async () => {
  // console.log('bf');

  addDonhang();
  // console.log('at');
  await getAllPhieumuahang();
  await addChitietdonhang();
  // await addCongnocuakhachhang();
};
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