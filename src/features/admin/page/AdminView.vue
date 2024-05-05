<template>
  <v-app id="inspire" style="background-color: #f5f5f9">
    <div v-if="ROLE == 'admin'" style="background-color: #f5f5f9">
      <v-navigation-drawer
        class="sidebar"
        v-model:rail="rail"
        :rail-width="60"
        :permanent="true"
        :width="width"
        @click="toggleCollapse"
        style="border: none"
      >
        <!--  -->
        <v-list-item title="" subtitle="" class="align-center justify-center">
          <v-img
            :src="logo_shop"
            :lazy-src="logo_shop"
            :width="140"
            style="padding: 20px 0 20px 0"
          ></v-img>
          <!-- <v-icon icon="mdi-chevron-left"></v-icon> -->
        </v-list-item>
        <v-list-item
          class="text-uppercase text-manager"
          @click="rail = true"
          link
          title=""
          disabled
          :class="rail == true ? 'none' : ''"
          >quản lý sản phẩm</v-list-item
        >
        <v-list-item
          link
          prepend-icon="mdi mdi-home"
          title="Tổng quan"
          @click="showHome"
          :class="option == 0 ? 'option' : 'non-option'"
          style="max-width: 232px; height: 40px; border-radius: 6px; margin: auto"
        ></v-list-item>
        <v-list-item
          link
          prepend-icon="mdi mdi-dropbox"
          title="Loại sản phẩm"
          @click="showCategory"
          :class="option == 1 ? 'option' : 'non-option'"
          style="max-width: 232px; height: 40px; border-radius: 6px; margin: auto"
        ></v-list-item>
        <v-list-item
          link
          prepend-icon="mdi mdi-package-variant-closed"
          title="Sản phẩm"
          @click="showProduct"
          :class="option == 2 ? 'option' : 'non-option'"
          style="max-width: 232px; height: 40px; border-radius: 6px; margin: auto"
        ></v-list-item>
        <!-- margin-left: 14px; -->

        <v-list-item
          prepend-icon="mdi mdi-account-group"
          @click="showUser"
          link
          title="Nhân viên"
          class="text-option"
          :class="option == 3 ? 'option' : 'non-option'"
          style="max-width: 232px; height: 40px; border-radius: 6px; margin: auto"
        ></v-list-item>
        <v-list-item
          link
          prepend-icon="mdi mdi-account-tie"
          title="Khách hàng"
          @click="showCustomer"
          :class="option == 4 ? 'option' : 'non-option'"
          style="max-width: 232px; height: 40px; border-radius: 6px; margin: auto"
        ></v-list-item>

        <v-list-item
          link
          prepend-icon="mdi mdi-warehouse"
          title="Kho"
          @click="showWarehouse"
          :class="option == 5 ? 'option' : 'non-option'"
          style="max-width: 232px; height: 40px; border-radius: 6px; margin: auto"
        ></v-list-item>
        <v-list-item
          link
          prepend-icon="mdi mdi-charity"
          title="Nhà cung cấp"
          @click="showCharity"
          :class="option == 6 ? 'option' : 'non-option'"
          style="max-width: 232px; height: 40px; border-radius: 6px; margin: auto"
        ></v-list-item>
        <v-list-item
          link
          prepend-icon="mdi mdi-cart-variant"
          title="Đơn hàng"
          @click="showCart"
          :class="option == 7 ? 'option' : 'non-option'"
          style="max-width: 232px; height: 40px; border-radius: 6px; margin: auto"
        ></v-list-item>
        <v-list-item
          link
          prepend-icon="mdi mdi-card-bulleted-outline"
          title="Phiếu mua hàng"
          @click="showBulleted"
          :class="option == 8 ? 'option' : 'non-option'"
          style="max-width: 232px; height: 40px; border-radius: 6px; margin: auto"
        ></v-list-item>
        <v-list-item
          link
          prepend-icon="mdi mdi-account-credit-card-outline"
          title="Công nợ với nhà cung cấp"
          @click="showCongnovoincc"
          :class="option == 9 ? 'option' : 'non-option'"
          style="max-width: 232px; height: 40px; border-radius: 6px; margin: auto"
        ></v-list-item>
        <v-list-item
          link
          prepend-icon="mdi mdi-account-credit-card-outline"
          title="Công nợ của khách hàng"
          @click="showCongnocuakh"
          :class="option == 10 ? 'option' : 'non-option'"
          style="max-width: 232px; height: 40px; border-radius: 6px; margin: auto"
        ></v-list-item>
      </v-navigation-drawer>

      <v-app-bar flat style="background-color: #f5f5f9">
        <!-- <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon> -->

        <!-- <v-app-bar-title class="title-admin ml-5">{{
          showProductList == true ? 'Danh sách sản phẩm' : 'Danh sách người dùng'
        }}</v-app-bar-title> -->
        <v-app-bar-title
          class="title-admin ml-5 align-center justify-center"
          style="height: 60px"
          >{{ returnTitle(option) }}</v-app-bar-title
        >
        <v-badge content="4" class="mr-2" overlap color="red">
          <v-icon icon="mdi mdi-bell-outline"></v-icon>
        </v-badge>
        <!-- <v-badge class="ml-4 mr-8" offset-x="50%" offset-y="50%" overlap color="green" dot>
        <v-avatar @click="dialogProfile = true">
          <v-img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John"></v-img>
        </v-avatar>
      </v-badge> -->

        <v-menu open-on-hover>
          <template v-slot:activator="{ props }">
            <v-badge
              v-bind="props"
              class="ml-4 mr-8"
              offset-x="50%"
              offset-y="50%"
              overlap
              color="green"
              dot
            >
              <v-avatar @click="dialogProfile = true">
                <v-img :src="AvatarUser" alt="John"></v-img>
              </v-avatar>
            </v-badge>
            <!-- <v-btn color="primary" v-bind="props"> Dropdown </v-btn> -->
          </template>

          <v-list>
            <!-- <v-list-item v-for="(item, index) in items" :key="index">
            <v-list-item-title style="cursor: pointer">{{
              item.title
            }}</v-list-item-title>
          </v-list-item> -->
            <v-list-item style="padding: 0">
              <v-list-item-title class="item-title d-flex align-center justify-center"
                >Xem profile</v-list-item-title
              >
              <v-list-item-title
                class="item-title d-flex align-center justify-center"
                @click="logout"
                >Đăng xuất</v-list-item-title
              >
            </v-list-item>
          </v-list>
        </v-menu>
      </v-app-bar>

      <v-main style="background-color: #f5f5f9">
        <!--  -->
        <loaisanpham-layout v-if="option == 1" />
        <main-layout v-if="option == 2" />
        <secondary-layout v-if="option == 3" />
        <khachhang-layout v-if="option == 4" />
        <kho-layout v-if="option == 5" />
        <nhacungcap-layout v-if="option == 6" />
        <donhang-layout v-if="option == 7" />
        <congnocuakhachhang-layout v-if="option == 10" />
        <!-- <main-layout v-if="showProductList" />
        <secondary-layout v-else /> -->
      </v-main>
    </div>
    <div v-else>
      <Page403 />
    </div>
  </v-app>
</template>
  
  <script setup>
import { ref } from 'vue';
import logo_ngang from '@/assets/images/ttlab-logo_ngang.svg';
import logo_shop from '@/assets/images/logo_shop.png';
import { useSidebarStore } from '@/common/stores';
import SecondaryLayout from '@/layouts/SecondaryLayout.vue';
// import MainLayout from '@/layouts/SecondaryLayout.vue';
import MainLayout from '@/layouts/MainLayout.vue';
import LoaisanphamLayout from '@/layouts/LoaisanphamLayout.vue';
import KhachhangLayout from '@/layouts/KhachhangLayout.vue';
import KhoLayout from '@/layouts/KhoLayout.vue';
import NhacungcapLayout from '@/layouts/NhacungcapLayout.vue';
import DonhangLayout from '@/layouts/DonhangLayout.vue';
import CongnocuakhachhangLayout from '@/layouts/CongnocuakhachhangLayout.vue';
import router from '@/plugins/vue-router';
import Page403 from './Page403.vue';

const drawer = ref(null);

const showProductList = ref(true);
const showUserList = ref(false);

const option = ref(2);

const Profile = ref(false);

const items = ref([{ title: 'Xem profile' }, { title: 'Đăng xuất' }]);

const ROLE = localStorage.getItem('ROLE');
const AvatarUser = localStorage.getItem('AVATAR');

const returnTitle = (op) => {
  if (op === 1) {
    return 'Quản lý loại sản phẩm';
  } else if (op === 2) {
    return 'Quản lý sản phẩm';
  } else if (op === 3) {
    return 'Quản lý nhân viên';
  } else if (op === 4) {
    return 'Quản lý khách hàng';
  } else if (op === 5) {
    return 'Quản lý kho';
  } else if (op === 6) {
    return 'Quản lý nhà cung cấp';
  } else if (op === 7) {
    return 'Quản lý đơn hàng';
  } else if (op === 8) {
    return 'Quản lý phiếu mua hàng';
  } else if (op === 9) {
    return 'Quản lý công nợ với nhà cung cấp';
  } else if (op === 10) {
    return 'Quản lý công nợ của khách hàng';
  } else if (op === 0) {
    return 'Tổng quan';
  }
};

const showHome = () => {
  rail.value = true;
  option.value = 0;
};

const showCategory = () => {
  rail.value = true;
  option.value = 1;
};

const showCustomer = () => {
  rail.value = true;
  option.value = 4;
};

const showWarehouse = () => {
  rail.value = true;
  option.value = 5;
};

const showCharity = () => {
  rail.value = true;
  option.value = 6;
};
const showCart = () => {
  rail.value = true;
  option.value = 7;
};
const showBulleted = () => {
  rail.value = true;
  option.value = 8;
};
const showCongnovoincc = () => {
  rail.value = true;
  option.value = 9;
};
const showCongnocuakh = () => {
  rail.value = true;
  option.value = 10;
};
const showProduct = () => {
  showProductList.value = true;
  showUserList.value = false;
  rail.value = true;
  option.value = 2;
  // console.log(showProductList.value, showUserList.value);
};

const showUser = () => {
  rail.value = true;
  showProductList.value = false;
  showUserList.value = true;
  option.value = 3;
  // console.log(showProductList.value, showUserList.value);
};

const sidebarStore = useSidebarStore();
const rail = ref(sidebarStore.rail);
const width = ref(260);
const toggleCollapse = () => {
  if (!rail.value) {
    width.value = 60;
    setTimeout(() => {
      rail.value = !rail.value;
    }, 240);
  } else {
    width.value = 260;
    rail.value = !rail.value;
  }
  sidebarStore.setRail(rail.value);
};

const logout = async () => {
  router.push('/login');
  localStorage.clear();
};
</script>
  
  <script>
export default {
  data: () => ({ drawer: null }),
};
</script>

<style scoped lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Public+Sans&display=swap');
.sidebar {
  position: relative;
  text-align: left;
  transition: all 0.24s linear !important;

  .sidebar-collapse {
    position: absolute;
    width: 26px;
    height: 26px;
    top: 17px;
    right: 0;
    display: flex;
    align-items: center;
    border-radius: 50%;
    transform: translateX(50%);
    background-color: $color-white;
    border: 1px solid #e1e3e9;
    box-shadow: 0px 1px 3px 0px #130a2e21, 0px 3px 14px 0px #130a2e08,
      0px 8px 32px 0px #130a2e12, 0px 30px 84px 0px #130a2e14 !important;
    transition: all 0.4s ease-in;
    cursor: pointer;
    &:hover {
      transform: scale(1.2) translateX(40%);
    }
  }
}

:deep(.v-list-item) {
  color: $color-text-black;
}
.user-info {
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 60px;
  background-color: $color-white;
  box-shadow: 0px 1px 3px 0px #130a2e21, 0px 3px 14px 0px #130a2e08,
    0px 8px 32px 0px #130a2e12, 0px 30px 84px 0px #130a2e14 !important;
}

.none {
  display: none;
}
.text-manager {
  font-family: 'Public Sans', sans-serif;
  font-weight: 400;
  font-size: 11px;
  line-height: 14px;
  color: #8b909a;
  padding-left: 30px;
}
.title-admin {
  font-family: 'Public Sans', sans-serif;
  font-weight: 600;
  font-size: 24px;
  line-height: 22px;
  padding: 20px 0;
}

.option {
  background-color: #f3f4f8;
}
.non-option {
  color: #8b909a;
}

.list-item {
  max-width: 232px;
  height: 40px;
  margin-left: 14px;
  border-radius: 6px;
}

.text-option {
  font-family: 'Public Sans', sans-serif;
  font-weight: 600;
  font-size: 15px;
  line-height: 22px;
}
.item-title {
  cursor: pointer;
  height: 37px;
  font-family: 'Public Sans', sans-serif;
  font-weight: 400;
  font-size: 15px;
  padding: 0 15px;
}
.item-title:hover {
  background-color: #e1e3e9;
}
</style>