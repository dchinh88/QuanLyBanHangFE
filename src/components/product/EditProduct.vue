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
        <!-- <p
            class="title-addnew"
            style="font-weight: 500; padding: 17px 0 0 20px; color: #1a2240"
          >
            
          </p> -->
        Sửa sản phẩm
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
          class="bg-white"
          v-model="product.name"
          hide-details
          style="border-radius: 6px; border: 1px solid rgb(231, 231, 231)"
          flat
        ></v-text-field>
        <!-- <span class="text-left" style="color: red; font-size: 12px; float: right">{{
          errors.name
        }}</span> -->

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
          single-line
          type="number"
          class="bg-white"
          v-model="product.price"
          hide-details
          flat
          style="border-radius: 6px; border: 1px solid rgb(231, 231, 231)"
        ></v-text-field>
        <!-- :loading="loading" -->

        <!-- v-model="product.price"
          v-bind="priceAttrs" -->
        <!-- @click:append-inner="onClick" -->
        <!-- <span class="text-left" style="color: red; font-size: 12px; float: right">{{
          errors.price
        }}</span> -->
        <!-- {{ idProduct }} -->

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
          single-line
          class="bg-white"
          v-model="product.quantity"
          flat
          hide-details
          style="border-radius: 6px; border: 1px solid rgb(231, 231, 231)"
        ></v-text-field>
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
          v-model="product.description"
          class="text-area"
          style="
            margin-bottom: 16px;
            border-radius: 6px;
            border: 1px solid rgb(231, 231, 231);
          "
          flat
          hide-details
        ></v-textarea>
        <!-- <v-textarea label="Label" variant="solo" flat single-line></v-textarea> -->

        <div
          class="text-medium-emphasis text-[14px] d-flex align-center font-weight-bold text-name mb-2"
        >
          Ảnh sản phẩm
          <p class="ml-1" style="color: #0f60ff">*</p>
        </div>
        <!-- {{ idProduct }} -->

        <v-text-field
          density="compact"
          variant="solo"
          label="Nhập link ảnh sản phẩm"
          single-line
          class="bg-white mb-3"
          @change="handleImageChange"
          type="file"
          hide-details
          flat
          style="border-radius: 6px; border: 1px solid rgb(231, 231, 231)"
        ></v-text-field>

        <!-- <span class="text-left" style="color: red; font-size: 12px; float: right">{{
          errors.image
        }}</span> -->

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
import { ref, watchEffect } from 'vue';
import { Product } from '../../layouts/components/product/interface';
import { defineProps, defineEmits } from 'vue';

const props = defineProps<{
  dialogEdit: boolean;
  currentProduct: Product;
  idProduct: string;
}>();

const product = ref<Product>({
  name: '',
  price: 0,
  quantity: 0,
  description: '',
  image: null,
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
    formData.append('name', product.value.name);
    formData.append('price', product.value.price);
    formData.append('quantity', product.value.quantity);
    formData.append('description', product.value.description);
    formData.append('image', imageField.value);

    const newItem = await serviceProduct.editProduct(props.idProduct, formData);
    console.log(formData);

    if (newItem.success) {
      emits('updateData');
      emits('close');
    }
  } catch (error) {
    console.error('Error: ', error);
  }
};

watchEffect(() => {
  product.value.name = props.currentProduct.name;
  product.value.price = props.currentProduct.price;
  product.value.quantity = props.currentProduct.quantity;
  product.value.description = props.currentProduct.description;
  product.value.image = props.currentProduct.image;
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