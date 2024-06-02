<template>
  <div>
    <v-dialog
      class="mx-auto pb-6 mt-1"
      style="border-radius: 12px"
      max-width="1122px"
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
          <!-- {{ nhacungcapidField.value.value   }} -->
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
              :items="loaisanphams"
              item-value="id"
              item-title="tenloaisanpham"
              class="bg-white"
              v-model="loaisanphamidField.value.value"
              flat
              hide-details
              style="border-radius: 6px; border: 1px solid rgb(231, 231, 231)"
            ></v-select>
            <span class="error-message mt-1" style="position: absolute; right: 3%">{{
              nhacungcapidField.errorMessage
            }}</span></v-col
          >
        </v-row>

        <!-- <v-row>
          
        </v-row> -->

        <v-row>
          <v-col
            ><div
              class="text-medium-emphasis text-[14px] d-flex align-center font-weight-bold text-name mb-2"
            >
              Chọn kho
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
              v-model="khoidField.value.value"
              flat
              hide-details
              style="border-radius: 6px; border: 1px solid rgb(231, 231, 231)"
            ></v-select>
            <span class="error-message mt-1" style="position: absolute; right: 3%">{{
              nhacungcapidField.errorMessage
            }}</span></v-col
          >
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
              Chất liệu
              <p class="ml-1" style="color: #0f60ff">*</p>
            </div>

            <v-text-field
              density="compact"
              variant="solo"
              label="Nhập chất liệu"
              single-line
              v-model="chatlieuField.value.value"
              class="bg-white"
              hide-details
              flat
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
              Màu sắc
              <p class="ml-1" style="color: #0f60ff">*</p>
            </div>

            <v-text-field
              density="compact"
              variant="solo"
              label="Nhập màu sắc"
              single-line
              class="bg-white"
              v-model="mausacField.value.value"
              flat
              hide-details
              style="border-radius: 6px; border: 1px solid rgb(231, 231, 231)"
            ></v-text-field>
            <span class="error-message mt-1" style="position: absolute; right: 51%">{{
              mausacField.errorMessage
            }}</span></v-col
          >
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
          width: 1122px;
          margin-left: 0.4px;
          border-radius: 0 0 12px 12px;
        "
      >
        <v-col cols="9"></v-col>
        <v-col cols="3"
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
import { serviceLoaisanpham } from '../../layouts/components/loaisanpham/loaisanpham';
import { serviceKho } from '../../layouts/components/kho/kho';
import { serviceProduct } from '../../layouts/components/product/product';
import { servicePhieumuahang } from '../../layouts/components/phieumuahang/phieumuahang';
import { serviceChitietphieumuahang } from '../../layouts/components/chitietphieumuahang/chitietphieumuahang';
import { serviceCongnovoinhacungcap } from '../../layouts/components/congnovoinhacungcap/congnovoinhacungcap';
import { jwtDecode } from 'jwt-decode';

const props = defineProps<{
  dialogAdd: boolean;
}>();

const emits = defineEmits(['close', 'updateData']);

const nhacungcap = ref([]);
const nhacungcaps = ref([]);

const loaisanpham = ref([]);
const loaisanphams = ref([]);

const kho = ref([]);
const khos = ref([]);

const product = ref([]);
const products = ref([]);

const infoProduct = ref({});

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
  loaisanphamid: yup.string().required('Bạn chưa chọn loại sản phẩm'),
  khoid: yup.string().required('Bạn chưa chọn kho'),
  chatlieu: yup.string().required('Bạn chưa nhập chất liệu'),
  mausac: yup.string().required('Bạn chưa nhập màu sắc'),
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

const nhacungcapidField = useField('nhacungcapid');
const nhanvienidField = useField('nhanvienid');
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
const tenNhacungcapField = useField('tennhacungcap');
// tenNhacungcapField.value.value =

const loaisanphamidField = useField('loaisanphamid');
const khoidField = useField('khoid');
const chatlieuField = useField('chatlieu');
const mausacField = useField('mausac');
const baohanhField = useField('baohanh');
baohanhField.value.value = '3 năm';
const motaField = useField('mota');
motaField.value.value = 'Không';

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

const getNhacungcapById = (id) => {
  var lengthNhacungcap = Object.keys(nhacungcap.value).length;

  for (var i = 0; i < lengthNhacungcap; i++) {
    if (id === nhacungcap.value[i].id) {
      return nhacungcap.value[i].tennhacungcap;
    }
  }
};

const getAllNhacungcap = async () => {
  const res = await serviceNhacungcap.getAllNhacungcap();
  nhacungcap.value = res;
  var lengthNcc = Object.keys(nhacungcap.value).length;
  for (var i = 0; i < lengthNcc - 1; i++) {
    nhacungcaps.value.push(nhacungcap.value[i]);
  }
};

const getAllLoaisanpham = async () => {
  const res = await serviceLoaisanpham.getAllLoaisanpham();
  loaisanpham.value = res;
  var lengthLoaisanpham = Object.keys(loaisanpham.value).length;
  for (var i = 0; i < lengthLoaisanpham - 1; i++) {
    loaisanphams.value.push(loaisanpham.value[i]);
  }
};

const getAllKho = async () => {
  const res = await serviceKho.getAllKho();
  kho.value = res;
  var lengthKho = Object.keys(kho.value).length;
  for (var i = 0; i < lengthKho - 1; i++) {
    khos.value.push(kho.value[i]);
  }
};

const getAllPhieumuahang = async () => {
  const res = await servicePhieumuahang.getAllPhieumuahang();
  phieumuahang.value = res;

  try {
    var lengthPhieumuahang = Object.keys(phieumuahang.value).length;
    phieumuahangidField.value.value = phieumuahang.value[lengthPhieumuahang - 2].id;
    for (var i = 0; i < lengthPhieumuahang; i++) {
      if (getNhacungcapById(phieumuahang.value[i].nhacungcapid)) {
        tenNhacungcapField.value.value = getNhacungcapById(
          phieumuahang.value[i].nhacungcapid,
        );
      }
    }
  } catch (error) {
    console.error('Error: ', error);
  }
};

const getAllProduct = async () => {
  const res = await serviceProduct.getAllProduct();
  product.value = res;
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
    getAllLoaisanpham();
    getAllProduct();
    getAllKho();
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

const addProduct = handleSubmit(async () => {
  try {
    const formData = new FormData();
    formData.append('loaisanphamid', loaisanphamidField.value.value);
    formData.append('tensanpham', tensanphamField.value.value);
    formData.append('giaban', dongiaField.value.value);
    formData.append('chatlieu', chatlieuField.value.value);
    formData.append('macsac', mausacField.value.value);
    formData.append('baohanh', baohanhField.value.value);
    formData.append('mota', motaField.value.value);
    formData.append('khoid', khoidField.value.value);
    formData.append('soluongton', soluongField.value.value);

    const response = await serviceProduct.addProduct(formData);
    await addChitietphieumuahang();
    if (response.success) {
      loaisanphamidField.value.value = '';
      tensanphamField.value.value = '';
      dongiaField.value.value = '';
      chatlieuField.value.value = '';
      mausacField.value.value = '';
      baohanhField.value.value = '';
      motaField.value.value = '';
      khoidField.value.value = '';
      soluongField.value.value = '';
      console.log('daa add san pham moi');
    }
  } catch (error) {}
});

const getProductByName = (name) => {
  const res = serviceProduct.getProductByName(name);
  infoProduct.value = res;
};

const editSoluongProduct = async () => {
  try {
    getProductByName(tensanphamField.value.value);
    infoProduct.value.soluongton =
      infoProduct.value.soluongton + soluongField.value.value;
    const formData = new FormData();
    formData.append('id', infoProduct.value.id);
    formData.append('loaisanphamid', infoProduct.value.loaisanphamid);
    formData.append('tensanpham', infoProduct.value.tensanpham);
    formData.append('giaban', infoProduct.value.giaban);
    formData.append('chatlieu', infoProduct.value.chatlieu);
    formData.append('macsac', infoProduct.value.mausac);
    formData.append('baohanh', infoProduct.value.baohanh);
    formData.append('mota', infoProduct.value.mota);
    formData.append('khoid', infoProduct.value.khoid);
    formData.append('soluongton', infoProduct.value.soluongton);

    const response = await serviceProduct.editProduct(infoProduct.value.id, formData);
    await addChitietphieumuahang();

    console.log(response);
  } catch (error) {
    console.error('Error: ', error);
  }
};

const addCongnovoinhacungcap = handleSubmit(async () => {
  try {
    const formData = new FormData();
    formData.append('phieumuahangid', phieumuahangidField.value.value + 1);
    formData.append('tennhacungcap', tenNhacungcapField.value.value);
    formData.append('tongtienphaithanhtoa', tongtienField.value.value);
    formData.append('sotiendathanhtoan', dathanhtoanField.value.value);
    formData.append('sotienconno', connoField.value.value);
    formData.append('hanthanhtoan', hanphaithanhtoanField.value.value);

    const response = await serviceCongnovoinhacungcap.addCongnovoinhacungcap(formData);
    if (response.success) {
      phieumuahangidField.value.value = '';
      tenNhacungcapField.value.value = '';
      tongtienField.value.value = '';
      dathanhtoanField.value.value = '';
      connoField.value.value = '';
      hanphaithanhtoanField.value.value = '';
    }
  } catch (error) {
    console.error('Error: ', error);
  }
});

const addChitietphieumuahang = handleSubmit(async () => {
  try {
    const formData = new FormData();
    formData.append('phieumuahangid', phieumuahangidField.value.value + 1);
    formData.append('tensanpham', tensanphamField.value.value);
    formData.append('soluong', soluongField.value.value);
    formData.append('dongia', dongiaField.value.value);

    const response = await serviceChitietphieumuahang.addChitietphieumuahang(formData);
    if (connoField.value.value > 0) {
      await addCongnovoinhacungcap();
    }
    if (response.success) {
      phieumuahangidField.value.value = '';
      tensanphamField.value.value = '';
      soluongField.value.value = '';
      dongiaField.value.value = '';
    }
  } catch (error) {
    console.error('Error', error);
  }
});

const addPhieumuahang = handleSubmit(async () => {
  try {
    const formData = new FormData();
    formData.append('nhacungcapid', nhacungcapidField.value.value);
    formData.append('nhanvienid', nhanvienidField.value.value);
    formData.append('ngaymuahang', ngaymuahangField.value.value);
    formData.append('tongtien', tongtienField.value.value);

    const response = await servicePhieumuahang.addPhieumuahang(formData);

    var lengProduct = Object.keys(product.value).length;
    for (var i = 0; i < lengProduct - 1; i++) {
      products.value.push(product.value[i]);
      if (
        products.value[i].tensanpham !== tensanphamField.value.value &&
        products.value[i].loaisanphamid !== loaisanphamidField.value.value
      ) {
        await addProduct();
      } else {
        await editSoluongProduct();
      }
    }

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
  addPhieumuahang();
  await getAllPhieumuahang();
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