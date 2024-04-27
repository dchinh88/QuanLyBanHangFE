<script setup lang="ts">
import { computed, onMounted, ref, watch } from 'vue';
import { DEFAULT_LIMIT_FOR_PAGINATION } from '@/common/constants';
import { useUser } from '../layouts/components/user/user.store';
import { serviceUser } from '../layouts/components/user/user';
import EditUser from '../components/user/EditUser.vue';
import AddUser from '../components/user/AddUser.vue';
import { showSuccessNotification } from '@/common/helpers';

const { fetchUser, query } = useUser();

const page = ref(1);
const dialogAdd = ref(false);
const dialogEdit = ref(false);
const dialogDelete = ref(false);

const currentUser = ref('');
const idUser = ref('');

const totalItems = ref('');

const user = ref([]);
const id = ref(null);
const search = ref('');

const lengthPage = ref(1);
const selectedValue = ref(DEFAULT_LIMIT_FOR_PAGINATION);

onMounted(async () => {
  try {
    getAllUser();
  } catch (error) {
    console.log(error);
  }
});

const getAllUser = async () => {
  const res = await fetchUser();
  user.value = res.data;
  lengthPage.value = Math.ceil(res.totalItems / selectedValue.value);
  totalItems.value = res?.totalItems;
};

watch(selectedValue, (newVal) => {
  query.limit = newVal;
  query.page = 1;
  page.value = 1;
  getAllUser();
});

watch(page, (newVal) => {
  query.page = newVal;
  getAllUser();
});

const formatTime = (time) => {
  const day = new Date(time).getDate();
  const month = new Date(time).getMonth() + 1;
  const year = new Date(time).getFullYear();
  // return `${year}/${month}/${day}`;
  const formatMonth = month >= 10 ? month : '0' + month;
  const formatDay = day >= 10 ? day : '0' + day;
  return year + '/' + formatMonth + '/' + formatDay;
};

const searchUser = computed(() => {
  const keyword = search.value.toLowerCase();
  return user.value.filter((p) => p.name.toLowerCase().includes(keyword));
});

const deleteUser = async () => {
  try {
    if (!id.value) {
      console.error('not found!');
      return;
    }
    const response = await serviceUser.deleteUSer(id.value);
    dialogDelete.value = false;
    getAllUser();
    showSuccessNotification('Xóa người dùng thành công');
    console.log('Da xoa: ', response);
  } catch (error) {
    console.error('Loiiiiiiiiiiiiiiiiiiiiii!');
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
              <th
                class="text-table text-uppercase"
                style="padding: 16px 0 16px 36px; height: 47px"
              >
                Avartar
              </th>
              <th style="height: 47px" class="text-table text-uppercase">
                Tên người dùng
              </th>
              <th style="height: 47px" class="text-table text-uppercase">Email</th>
              <th style="height: 47px" class="text-table text-uppercase">Ngày sinh</th>
              <th style="height: 47px" class="text-table text-uppercase">
                Số điện thoại
              </th>
              <th style="height: 47px" class="text-table text-uppercase">Hành động</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, i) in searchUser" :key="i">
              <td class="">
                <v-img
                  class="ml-4"
                  style="width: 35px; height: 35px; border-radius: 2px"
                  :src="item.avatar"
                ></v-img>
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
                {{ item.name }}
              </td>
              <td style="padding: 18px 0 18px 18px" class="text-price-user">
                {{ item.email }}
              </td>
              <td style="padding: 18px 0 18px 18px" class="text-price-user">
                {{ formatTime(item.birthday) }}
              </td>
              <td
                class="text-price-user"
                style="
                  padding: 18px 0 18px 18px;
                  white-space: nowrap;
                  max-width: 100px;
                  overflow: hidden;
                  text-overflow: ellipsis;
                "
              >
                {{ item.phone }}
              </td>
              <td class="text-left">
                <v-btn
                  icon
                  size="small"
                  flat
                  @click="(dialogEdit = true), (currentUser = item), (idUser = item.id)"
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

    <add-user
      :dialogAdd="dialogAdd"
      @close="dialogAdd = false"
      @updateData="getAllUser()"
    />

    <edit-user
      :dialogEdit="dialogEdit"
      :currentUser="currentUser"
      :idUser="idUser"
      @close="dialogEdit = false"
      @updateData="getAllUser()"
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
            <v-btn @click="deleteUser">Đồng ý</v-btn>
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
