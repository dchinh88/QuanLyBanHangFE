<script setup>
import { computed, onMounted, ref, watch } from 'vue';
import { DEFAULT_LIMIT_FOR_PAGINATION } from '@/common/constants';
import { showSuccessNotification } from '@/common/helpers';
import { useKho } from './components/kho/kho.store';
import { serviceKho } from './components/kho/kho';
import AddKho from '../components/kho/AddKho.vue';
import EditKho from '../components/kho/EditKho.vue';

const { fetchKho, query } = useKho();

const page = ref(1);
const dialogAdd = ref(false);
const dialogEdit = ref(false);
const dialogDelete = ref(false);

const currentKho = ref('');
const idKho = ref('');

const totalItems = ref('');

const kho = ref([]);
const id = ref(null);
const search = ref('');

const lengthPage = ref(1);
const selectedValue = ref(DEFAULT_LIMIT_FOR_PAGINATION);

onMounted(async () => {
  try {
    getAllKho();
  } catch (error) {
    console.log(error);
  }
});

const getAllKho = async () => {
  const res = await fetchKho();
  kho.value = res.data;
  lengthPage.value = Math.ceil(res.totalItems / selectedValue.value);
  totalItems.value = res?.totalItems;
};

watch(selectedValue, (newVal) => {
  query.limit = newVal;
  query.page = 1;
  page.value = 1;
  getAllKho();
});

watch(page, (newVal) => {
  query.page = newVal;
  getAllKho();
});

const searchLoaisanpham = computed(() => {
  const keyword = search.value.toLowerCase();
  return kho.value.filter((p) => p.tenkho.toLowerCase().includes(keyword));
});

const deleteLoaisanpham = async () => {
  try {
    if (!id.value) {
      console.error('not found!');
      return;
    }
    const response = await serviceKho.deleteKho(id.value);
    dialogDelete.value = false;
    getAllKho();
    showSuccessNotification('Xóa loại sản phẩm thành công');
    console.log('Đã xóa: ', response);
  } catch (error) {
    console.error('Error!');
  } finally {
    id.value = null;
  }
};
</script>

<template>
  <component :is="Component" />
  <div class="ml-5 mr-4">
    <v-row>
      <v-col cols="4" class="mt-4">
        <v-text-field
          density="compact"
          variant="solo"
          v-model="search"
          label="Tìm kiếm"
          style="max-width: 316px"
          append-inner-icon="mdi-magnify"
          single-line
          hide-details
        ></v-text-field>
      </v-col>
      <v-col class="text-right mr-4 mt-3">
        <v-btn
          class="text-capitalize text-button"
          color="#0F60FF"
          width="112"
          height="40"
          @click="dialogAdd = true"
        >
          + Tạo
          <p class="text-lowercase">mới</p>
        </v-btn>
      </v-col>
    </v-row>

    <v-row class="mr-2">
      <v-col cols="12">
        <v-table style="border-radius: 12px 12px 0 0">
          <thead>
            <tr>
              <th style="height: 47px" class="text-table text-uppercase">STT</th>
              <th style="height: 47px" class="text-table text-uppercase">Tên kho</th>
              <th style="height: 47px" class="text-table text-uppercase">Địa chỉ</th>
              <th style="height: 47px" class="text-table text-uppercase text-left">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, i) in searchLoaisanpham" :key="i">
              <td style="padding: 18px 0 18px 18px" class="text-price-user">
                {{ ++i }}
              </td>
              <td
                class="text-name-user"
                style="
                  padding: 18px 0 18px 18px;
                  white-space: nowrap;
                  max-width: 100px;
                  overflow: hidden;
                  text-overflow: ellipsis;
                "
              >
                {{ item.tenkho }}
              </td>
              <td style="padding: 18px 0 18px 18px" class="text-price-user">
                {{ item.diachi }}
              </td>
              <td class="text-left">
                <v-btn
                  icon
                  size="small"
                  flat
                  @click="(dialogEdit = true), (currentKho = item), (idKho = item.id)"
                >
                  <v-icon color="#8B909A" icon="mdi mdi-square-edit-outline"></v-icon>
                </v-btn>
                <v-btn
                  icon
                  size="small"
                  flat
                  @click="(dialogDelete = true), (id = item.id)"
                >
                  <v-icon color="#8B909A" icon="mdi mdi-trash-can-outline"> </v-icon>
                </v-btn>
              </td>
            </tr>
          </tbody>
        </v-table>
      </v-col>
    </v-row>
    <v-divider class="pa-1 w-100"></v-divider>

    <div style="background-color: white; border-radius: 0 0 12px 12px" class="mr-5 mb-10">
      <v-row>
        <v-col cols="7">
          <v-row>
            <p class="mt-5 ml-6 showing" style="padding-left: 24px">Showing</p>
            <v-col>
              <v-row>
                <v-select
                  class="mt-3 ml-3 mr-3"
                  v-model="selectedValue"
                  :items="['10', '20', '30', 'All']"
                  density="compact"
                  single-line
                  style="max-width: 85px"
                  label="10"
                  variant="outlined"
                ></v-select>
                <p class="mt-5 showing">of {{ totalItems }}</p>
              </v-row>
            </v-col>
          </v-row>
        </v-col>
        <v-col cols="1"></v-col>
        <v-col cols="4">
          <div class="text-xs-center">
            <v-pagination
              :length="lengthPage"
              active-color="#0F60FF"
              color="#F1F2F6"
              v-model="page"
              density="compact"
              variant="flat"
            ></v-pagination>
          </div>
        </v-col>
      </v-row>
    </div>

    <add-kho
      :dialogAdd="dialogAdd"
      @close="dialogAdd = false"
      @updateData="getAllKho()"
    />

    <edit-kho
      :dialogEdit="dialogEdit"
      :currentKho="currentKho"
      :idKho="idKho"
      @close="dialogEdit = false"
      @updateData="getAllKho()"
    />

    <!-- <h1>haha</h1> -->
  </div>

  <v-dialog max-width="450px" v-model="dialogDelete">
    <v-card>
      <v-alert type="warning">
        <v-row align="center">
          <v-col cols="11" class="text-center"> Bạn có muốn xóa không? </v-col>
        </v-row>
        <v-row align="center">
          <v-spacer></v-spacer>
          <v-col cols="5" variant="text">
            <v-btn @click="deleteLoaisanpham">Đồng ý</v-btn>
          </v-col>
          <v-col cols="6" variant="text">
            <v-btn @click="dialogDelete = false">Hủy bỏ</v-btn>
          </v-col>
        </v-row>
      </v-alert>
    </v-card>
  </v-dialog>
</template>

<style lang="scss" scoped>
:deep(v-layout),
:deep(.v-navigation-drawer) {
  height: 100vh !important;
  border-right: 1px solid #e9e9eb;
}

:deep(.v-navigation-drawer) {
  position: fixed !important;
}
:deep(.v-main) {
  background-color: $color-background-1;
  transition: all 0.24s linear !important;
  transition: 0.24s cubic-bezier(0.4, 0, 0.2, 1);
}

@import url('https://fonts.googleapis.com/css2?family=Public+Sans&display=swap');
.text-table {
  font-family: 'Public Sans', sans-serif;
  font-weight: 500 !important;
  font-size: 13px;
  line-height: 15.28px;
  color: #8b909a !important;
}
.text-button {
  font-family: 'Public Sans', sans-serif;
  font-size: 14px;
  font-weight: 600;
  line-height: 16px;
}
#description {
  white-space: nowrap;
  width: 50px;
  overflow: hidden;
  text-overflow: ellipsis;
}

.text-name-user {
  font-family: 'Public Sans', sans-serif;
  font-weight: 600;
  font-size: 15px;
  line-height: 22px;
}
.text-price-user {
  font-family: 'Public Sans', sans-serif;
  font-weight: 400;
  font-size: 15px;
  line-height: 22px;
}
</style>
