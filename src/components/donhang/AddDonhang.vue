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
              readonly
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
              class="text-medium-emphasis text-[14px] d-flex align-center font-weight-bold text-name mb-2"
            >
              Số điện thoại khách hàng
              <p class="ml-1" style="color: #0f60ff">*</p>
            </div>

            <v-text-field
              density="compact"
              variant="solo"
              label="Nhập số điện thoại khách hàng"
              single-line
              class="bg-white"
              v-model="dienthoaikhField.value.value"
              flat
              hide-details
              style="border-radius: 6px; border: 1px solid rgb(231, 231, 231)"
            ></v-text-field>
            <span class="error-message mt-1" style="position: absolute; right: 3%">{{
              dienthoaikhField.errorMessage
            }}</span></v-col
          >
        </v-row>

        <v-row>
          <v-col
            ><div
              class="text-medium-emphasis text-[14px] d-flex align-center font-weight-bold text-name mb-2"
            >
              Họ tên
              <p class="ml-1" style="color: #0f60ff">*</p>
            </div>

            <v-text-field
              density="compact"
              variant="solo"
              label="Nhập họ tên khách hàng"
              single-line
              class="bg-white"
              v-model="hotenkhachhangField.value.value"
              flat
              hide-details
              style="border-radius: 6px; border: 1px solid rgb(231, 231, 231)"
            ></v-text-field>
            <span class="error-message mt-1" style="position: absolute; right: 51%">{{
              hotenkhachhangField.errorMessage
            }}</span></v-col
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
              label="Nhập địa chỉ giao hàng"
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
              Chọn sản phẩm
              <p class="ml-1" style="color: #0f60ff">*</p>
            </div>

            <v-select
              density="compact"
              variant="solo"
              label="Chọn sản phẩm"
              single-line
              :items="sanphams"
              item-value="id"
              item-title="tensanpham"
              class="bg-white"
              v-model="sanphamidField.value.value"
              flat
              hide-details
              style="border-radius: 6px; border: 1px solid rgb(231, 231, 231)"
            ></v-select>
            <span class="error-message mt-1" style="position: absolute; right: 3%">{{
              sanphamidField.errorMessage
            }}</span></v-col
          >
          <v-col
            ><div
              class="text-medium-emphasis text-[14px] d-flex align-center font-weight-bold text-name mb-2"
            >
              Đơn giá
              <p class="ml-1" style="color: #0f60ff">*</p>
            </div>

            <v-text-field
              density="compact"
              variant="solo"
              type="number"
              readonly
              label="Nhập đơn giá sản phẩm"
              single-line
              class="bg-white"
              v-model="dongiaField.value.value"
              flat
              hide-details
              style="border-radius: 6px; border: 1px solid rgb(231, 231, 231)"
            ></v-text-field>
            <span class="error-message mt-1" style="position: absolute; right: 3%">{{
              dongiaField.errorMessage
            }}</span></v-col
          >
        </v-row>
        <v-row>
          <v-col>
            <div
              class="text-medium-emphasis text-[14px] d-flex align-center font-weight-bold text-name mb-2"
            >
              Số lượng
              <p class="ml-1" style="color: #0f60ff">*</p>
            </div>
            <!-- <v-btn>add</v-btn> -->
            <v-row class="mt-2">
              <v-btn
                class="mt-1"
                @click="handlerGiamsoluong(soluongField.value.value)"
                flat
                >-</v-btn
              >
              <v-text-field
                density="compact"
                variant="solo"
                type="number"
                label="Nhập số lượng sản phẩm"
                single-line
                readonly
                class="bg-white"
                v-model="soluongField.value.value"
                flat
                hide-details
                style="border-radius: 6px; border: 1px solid rgb(231, 231, 231)"
              ></v-text-field>
              <v-btn
                class="mt-1"
                @click="handlerTangsoluong(soluongField.value.value)"
                flat
                >+</v-btn
              >
            </v-row>

            <span class="error-message mt-1" style="position: absolute; right: 51%">{{
              soluongField.errorMessage
            }}</span>
          </v-col>
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
            @click="addNewDonHang"
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
import { ref, onMounted, watch } from 'vue';
import { useField, useForm } from 'vee-validate';
import * as yup from 'yup';
import { showErrorNotification, showSuccessNotification } from '@/common/helpers';
import { serviceKhachhang } from '../../layouts/components/khachhang/khachhang';
import { serviceDonhang } from '../../layouts/components/donhang/donhang';
import { serviceChitietdonhang } from '../../layouts/components/chitietdonhang/chitietdonhang';
import { serviceCongnocuakhachhang } from '../../layouts/components/congnocuakhachhang/congnocuakhachhang';
import numeral from 'numeral';
import { jwtDecode } from 'jwt-decode';

const props = defineProps<{
  dialogAdd: boolean;
}>();

const emits = defineEmits(['close', 'updateData']);

const khachhang = ref({});
const donhang = ref([]);
const donhangs = ref([]);
const sanpham = ref([]);
const sanphams = ref([]);
const sp = ref({});

const slt = ref({});

const kh = ref([]);

const schema = yup.object({
  ngaytaodon: yup.date().required('Ngày tạo đơn là bắt buộc'),
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
    .required('Bạn chưa nhập số tiền đã thanh toán')
    .min(0, 'Đã thanh toán không nhỏ hơn 0'),
  conno: yup.string().required('Còn nợ là bắt buộc').min(0, 'Còn nợ không nhỏ hơn 0'),

  // dongia: yup.string().required('Đơn giá là bắt buộc').min(1, 'Đơn giá không nhỏ hơn 1'),
  soluong: yup
    .string()
    .required('Số lượng là bắt buộc')
    .min(1, 'Số lượng không nhỏ hơn 1'),
  sanphamid: yup.string().required('Bạn chưa chọn sản phẩm'),
  // soluong: yup.string().required('Bạn chưa nhập số lượng'),
});

const formatMoney = (money) => {
  return numeral(money).format('0,0') + ' ₫';
};

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

// const IdUser = localStorage.getItem('IDUSER');

const ngaytaodonField = useField('ngaytaodon');
const time = new Date();
ngaytaodonField.value.value = formatTime(time);
const diachigiaohangField = useField('diachigiaohang');
const khachhangidField = useField('khachhangid');
const nhanvienidField = useField('nhanvienid');
// nhanvienidField.value.value = IdUser;
// nhanvienidField.value.value = decodeToken(token);
const tinhtrangidField = useField('tinhtrangid');
tinhtrangidField.value.value = 1;
const thanhtienField = useField('thanhtien');
const dathanhtoanField = useField('dathanhtoan');
const connoField = useField('conno');

const dienthoaikhField = useField('dienthoaikh');
const hotenkhachhangField = useField('hotenkh');
const diachikhachhangField = useField('diachikh');

const donhangidField = useField('donhangid');
const sanphamidField = useField('sanphamid');
const soluongField = useField('soluong');
soluongField.value.value = 0;
const dongiaField = useField('dongia');
// formatMoney(dongiaField.value.value);

const iddonhangField = useField('iddonhang');
const hotenField = useField('hoten');
const tienphaithanhtoanField = useField('tienphaithanhtoan');
const tiendathanhtoanField = useField('tiendathanhtoan');
const tienconnoField = useField('tienconno');
const hanphaithanhtoanField = useField('hanphaithanhtoan');

hanphaithanhtoanField.value.value = formatTimeThanhtoan(time);
// tiendathanhtoanField.value.value = dathanhtoanField.value.value;

// thanhtienField.value.value = dongiaField * soluongField;

const token = localStorage.getItem('ACCESS_TOKEN');

const decodeToken = async (token) => {
  try {
    const decode = jwtDecode(token);
    if (decode) {
      nhanvienidField.value.value = decode.sub;

      console.log(decode.sub);
    }
  } catch (error) {
    console.error('Failed to decode token: ', error);
  }
};

const getKhachhangByPhone = async () => {
  const res = await serviceKhachhang.getKhachhangByPhone(dienthoaikhField.value.value);
  khachhang.value = res;
  khachhangidField.value.value = khachhang.value.id;
  hotenField.value.value = hotenkhachhangField.value.value = khachhang.value.hoten;
  diachigiaohangField.value.value = diachikhachhangField.value.value =
    khachhang.value.diachi;
  console.log(res.success);
};

const getAllDonhang = async () => {
  const res = await serviceDonhang.getAllDonhang();
  donhang.value = res;
  var lengthDonhang = Object.keys(donhang.value).length;
  for (var i = 0; i < lengthDonhang - 1; i++) {
    donhangs.value.push(donhang.value[i]);
    // console.log(donhang.value[0].id);
  }
  // console.log(lengthDonhang - 2);

  console.log(donhang.value[lengthDonhang - 2].id);
  iddonhangField.value.value = donhangidField.value.value =
    donhang.value[lengthDonhang - 2].id;
  // console.log(donhangidField.value.value);
};

const getAllSanpham = async () => {
  const res = await serviceProduct.getAllProduct();
  sanpham.value = res;
  // console.log(sanpham.value);

  var lengthSanpham = Object.keys(sanpham.value).length;
  for (var i = 0; i < lengthSanpham - 1; i++) {
    sanphams.value.push(sanpham.value[i]);
  }
  dongiaField.value.value = sanpham.value.dongia;
  // console.log(lengthSanpham);

  // console.log(sanphams.value);
};

const getSanphamById = async () => {
  const res = await serviceProduct.getProductDetail(sanphamidField.value.value);
  sp.value = res;
  // console.log(sp.value.giaban);

  dongiaField.value.value = sp.value.giaban;
  // return formatMoney(dongiaField.value.value);
};

const tinhTongtien = async () => {
  let tongtien = await (dongiaField.value.value * soluongField.value.value);
  // return (thanhtienField.value.value = tongtien);
  return (tienphaithanhtoanField.value.value = thanhtienField.value.value = tongtien);
};

const tinhSono = async () => {
  let sono = await (thanhtienField.value.value - dathanhtoanField.value.value);
  // let format = formatMoney(sono);
  return (tienconnoField.value.value = connoField.value.value = sono);
};

onMounted(async () => {
  try {
    getAllDonhang();
    getAllSanpham();
    decodeToken(token);
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

watch(
  () => sanphamidField.value.value,
  async (newVal, oldVal) => {
    if (newVal !== oldVal) {
      await getSanphamById();
      soluongField.value.value = 0;
      // console.log(sanphamidField.value.value);
    }
  },
);

watch(
  () => dienthoaikhField.value.value,
  async (newVal, oldVal) => {
    // Kiểm tra nếu giá trị mới khác giá trị cũ
    if (newVal !== oldVal) {
      await setTimeout(() => {
        getKhachhangByPhone();
        // console.log(khachhang.value.hoten);
      }, 2000);
    }
  },
);

const handlerGiamsoluong = (soluong) => {
  if (soluong < 1) {
    return (soluongField.value.value = soluong);
  }
  return (soluongField.value.value -= 1);
};

// const getSoluongton = async () => {

// }

const handlerTangsoluong = async (soluong) => {
  // getSanphamById();
  const res = await serviceProduct.getProductDetail(sanphamidField.value.value);
  slt.value = res;
  // console.log(res);

  console.log(slt.value.soluongton);
  console.log(slt.value.tensanpham);
  console.log(slt.value.chatlieu);

  if (soluong === slt.value.soluongton) {
    return (soluongField.value.value = soluong);
  }
  return (soluongField.value.value += 1);
};

const updateSoluongton = async () => {
  try {
    slt.value.soluongton = slt.value.soluongton - soluongField.value.value;
    const formData = new FormData();
    formData.append('id', slt.value.id);
    formData.append('loaisanphamid', slt.value.loaisanphamid);
    formData.append('tensanpham', slt.value.tensanpham);
    formData.append('giaban', slt.value.giaban);
    formData.append('chatlieu', slt.value.chatlieu);
    formData.append('macsac', slt.value.macsac);
    formData.append('baohanh', slt.value.baohanh);
    formData.append('mota', slt.value.mota);
    formData.append('khoid', slt.value.khoid);
    formData.append('soluongton', slt.value.soluongton);
    const response = await serviceProduct.editProduct(slt.value.id, formData);
    console.log(response);
  } catch (error) {
    console.error('Error: ', error);
  }
};
const addKhachhangWhenNotExists = handleSubmit(async () => {
  try {
    const formData = new FormData();
    formData.append('hoten', hotenkhachhangField.value.value);
    formData.append('diachi', diachikhachhangField.value.value);
    formData.append('sodienthoai', dienthoaikhField.value.value);

    const response = await serviceKhachhang.addKhachhang(formData);
    if (response.success) {
      hotenkhachhangField.value.value = '';
      diachikhachhangField.value.value = '';
      dienthoaikhField.value.value = '';
      // showSuccessNotification('Thêm đơn hàng thành công');
    }
  } catch (error) {
    console.error('Error: ', error);
  }
});
const addCongnocuakhachhang = handleSubmit(async () => {
  try {
    const formData = new FormData();
    formData.append('donhangid', iddonhangField.value.value + 1);
    formData.append('hoten', hotenField.value.value);
    formData.append('tongtienphaithanhtoa', tienphaithanhtoanField.value.value);
    formData.append('sotiendathanhtoan', dathanhtoanField.value.value);
    formData.append('sotienconno', tienconnoField.value.value);
    formData.append('hanthanhtoan', hanphaithanhtoanField.value.value);

    const response = await serviceCongnocuakhachhang.addCongnocuaKH(formData);
    console.log(response);
    if (response.success) {
      iddonhangField.value.value = '';
      hotenField.value.value = '';
      tienphaithanhtoanField.value.value = '';
      // tiendathanhtoanField.value.value = '';
      tienconnoField.value.value = '';
      hanphaithanhtoanField.value.value = '';
    }
  } catch (error) {
    console.error('Error: ', error);
  }
});

const addChitietdonhang = handleSubmit(async () => {
  try {
    const formData = new FormData();
    formData.append('donhangid', donhangidField.value.value + 1);
    formData.append('sanphamid', sanphamidField.value.value);
    formData.append('soluong', soluongField.value.value);
    formData.append('dongia', dongiaField.value.value);

    const response = await serviceChitietdonhang.addChitietdonhang(formData);
    await updateSoluongton();
    console.log(response);
    if (response.success) {
      donhangidField.value.value = '';
      sanphamidField.value.value = '';
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
    formData.append('ngaytaodon', ngaytaodonField.value.value);
    formData.append('diachigiaohang', diachigiaohangField.value.value);
    formData.append('khachhangid', khachhangidField.value.value);
    formData.append('nhanvienid', nhanvienidField.value.value);
    formData.append('tinhtrangid', tinhtrangidField.value.value);
    formData.append('thanhtien', thanhtienField.value.value);
    formData.append('dathanhtoan', dathanhtoanField.value.value);
    formData.append('conno', connoField.value.value);
    // formData.append('image', imageFile.value);

    const response = await serviceDonhang.addDonhang(formData);
    if (connoField.value.value > 0) {
      await addCongnocuakhachhang();
    }

    console.log(response);

    if (response.success) {
      // if (connoField.value.value > 0) {
      //   addCongnocuakhachhang();
      // }
      // getAllDonhang();
      diachigiaohangField.value.value = '';
      khachhangidField.value.value = '';
      nhanvienidField.value.value = '';
      tinhtrangidField.value.value = '';
      thanhtienField.value.value = '';
      dathanhtoanField.value.value = '';
      connoField.value.value = '';

      emits('close');
      emits('updateData');

      showSuccessNotification('Thêm đơn hàng thành công');
    } else {
      showErrorNotification('Thêm đơn hàng thất bại');
    }
  } catch (error) {
    showErrorNotification('Thêm đơn hàng thất bại');
    console.error('Error', error);
  }
});

const addNewDonHang = async () => {
  addDonhang();
  // addCongnocuakhachhang();
  await getAllDonhang();
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