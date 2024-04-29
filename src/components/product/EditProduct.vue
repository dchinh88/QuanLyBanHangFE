<template>
  <div>
    <v-dialog
      class="mx-auto pb-6 mt-1"
      style="border-radius: 12px"
      max-width="748px"
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
        <!-- <p
            class="title-addnew"
            style="font-weight: 500; padding: 17px 0 0 20px; color: #1a2240"
          >
            
          </p> -->
        Sửa sản phẩm
      </div>
      <div style="background-color: #f7f7f7; padding: 16px 20px">
        <v-row>
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
              class="bg-white"
              v-model="product.tensanpham"
              hide-details
              style="border-radius: 6px; border: 1px solid rgb(231, 231, 231)"
              flat
            ></v-text-field
          ></v-col>
          <v-col
            ><div
              class="text-medium-emphasis d-flex align-center font-weight-bold text-name mb-2"
            >
              Giá
              <p class="ml-1" style="color: #0f60ff">*</p>
            </div>

            <v-text-field
              density="compact"
              variant="solo"
              label="Nhập giá sản phẩm"
              single-line
              type="number"
              class="bg-white"
              v-model="product.giaban"
              hide-details
              flat
              style="border-radius: 6px; border: 1px solid rgb(231, 231, 231)"
            ></v-text-field
          ></v-col>
        </v-row>

        <!-- <span class="text-left" style="color: red; font-size: 12px; float: right">{{
          errors.name
        }}</span> -->

        <!-- :loading="loading" -->

        <!-- v-model="product.price"
          v-bind="priceAttrs" -->
        <!-- @click:append-inner="onClick" -->
        <!-- <span class="text-left" style="color: red; font-size: 12px; float: right">{{
          errors.price
        }}</span> -->
        <!-- {{ idProduct }} -->

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
              label="Nhập số lượng sản phẩm"
              single-line
              class="bg-white"
              v-model="product.chatlieu"
              flat
              hide-details
              style="border-radius: 6px; border: 1px solid rgb(231, 231, 231)"
            ></v-text-field
          ></v-col>
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
              label="Nhập số lượng sản phẩm"
              single-line
              class="bg-white"
              v-model="product.macsac"
              flat
              hide-details
              style="border-radius: 6px; border: 1px solid rgb(231, 231, 231)"
            ></v-text-field
          ></v-col>
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
              v-model="product.baohanh"
              flat
              hide-details
              style="border-radius: 6px; border: 1px solid rgb(231, 231, 231)"
            ></v-text-field
          ></v-col>
          <v-col>
            <div
              class="text-medium-emphasis text-[14px] d-flex align-center font-weight-bold text-name mb-2"
            >
              Kho
              <p class="ml-1" style="color: #0f60ff">*</p>
            </div>
            <!-- <v-text-field
              density="compact"
              variant="solo"
              label="Nhập số lượng sản phẩm"
              single-line
              class="bg-white"
              v-model="product.khoId"
              flat
              hide-details
              style="border-radius: 6px; border: 1px solid rgb(231, 231, 231)"
            ></v-text-field>
            {{ product.khoId }} -->

            <v-select
              density="compact"
              variant="solo"
              label="Chọn kho"
              single-line
              :items="khos"
              item-value="id"
              item-title="tenkho"
              class="bg-white"
              v-model="product.khoid"
              flat
              hide-details
              style="border-radius: 6px; border: 1px solid rgb(231, 231, 231)"
            ></v-select>
          </v-col>
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
              v-model="product.soluongton"
              flat
              hide-details
              style="border-radius: 6px; border: 1px solid rgb(231, 231, 231)"
            ></v-text-field>
          </v-col>
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
              v-model="product.loaisanphamid"
              flat
              hide-details
              style="border-radius: 6px; border: 1px solid rgb(231, 231, 231)"
            ></v-select
          ></v-col>
        </v-row>

        <!-- <span class="text-left" style="color: red; font-size: 12px; float: right">{{
          errors.quantity
        }}</span> -->

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
          v-model="product.mota"
          class="text-area"
          style="
            margin-bottom: 16px;
            border-radius: 6px;
            border: 1px solid rgb(231, 231, 231);
          "
          flat
          hide-details
        ></v-textarea>
      </div>
      <v-row
        style="
          padding-top: 8px;
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
            @click="updateProduct"
            flat
            style="border-radius: 6px; border: 1px solid rgb(231, 231, 231)"
            >Cập
            <p class="text-lowercase">nhật</p>
          </v-btn></v-col
        >
      </v-row>
    </v-dialog>
  </div>
</template>
  
  <script setup lang="ts">
import { serviceProduct } from '../../layouts/components/product/product';
import { onMounted, ref, watchEffect } from 'vue';
import { Product } from '../../layouts/components/product/interface';
import { defineProps, defineEmits } from 'vue';

import { serviceKho } from '../../layouts/components/kho/kho';
import { serviceLoaisanpham } from '../../layouts/components/loaisanpham/loaisanpham';
import { number } from 'yup';
import { showErrorNotification, showSuccessNotification } from '../../common/helpers';

const props = defineProps<{
  dialogEdit: boolean;
  currentProduct: Product;
  idProduct: string;
}>();

const kho = ref([]);
const khos = ref([]);

const lsp = ref([]);
const loaisanpham = ref([]);

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

const product = ref<Product>({
  loaisanphamid: Number(),
  tensanpham: '',
  giaban: Number(),
  chatlieu: '',
  macsac: '',
  baohanh: '',
  mota: '',
  khoid: Number(),
  soluongton: Number(),
  // image: null,
});

// const handleImageChange = (e: Event) => {
//   const target = e.target as HTMLInputElement;
//   if (target.files && target.files[0]) {
//     product.value.image = target.files[0];
//   }
// };

const imageField = ref(null);

const handleImageChange = (e) => {
  const image = e.target.files[0];
  imageField.value = image;
};

const emits = defineEmits(['close', 'updateData']);

const updateProduct = async () => {
  try {
    const formData = new FormData();
    formData.append('id', product.value.id);
    formData.append('loaisanphamid', product.value.loaisanphamid);
    formData.append('tensanpham', product.value.tensanpham);
    formData.append('giaban', product.value.giaban);
    formData.append('chatlieu', product.value.chatlieu);
    formData.append('macsac', product.value.macsac);
    formData.append('baohanh', product.value.baohanh);
    formData.append('mota', product.value.mota);
    formData.append('khoid', product.value.khoid);
    formData.append('soluongton', product.value.soluongton);

    const newItem = await serviceProduct.editProduct(props.idProduct, formData);
    console.log(formData);

    if (newItem.success) {
      emits('updateData');
      emits('close');
      showSuccessNotification('Sửa sản phẩm thành công');
    } else {
      showErrorNotification('Sửa sản phẩm thất bại!');
    }
  } catch (error) {
    console.error('Error: ', error);
  }
};

watchEffect(() => {
  product.value.id = props.currentProduct.id;
  product.value.loaisanphamid = props.currentProduct.loaisanphamid;
  product.value.tensanpham = props.currentProduct.tensanpham;
  product.value.giaban = props.currentProduct.giaban;
  product.value.chatlieu = props.currentProduct.chatlieu;
  product.value.macsac = props.currentProduct.macsac;
  product.value.baohanh = props.currentProduct.baohanh;
  product.value.mota = props.currentProduct.mota;
  product.value.khoid = props.currentProduct.khoid;
  product.value.soluongton = props.currentProduct.soluongton;
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