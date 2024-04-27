<script lang="ts" setup>
import { useSidebarStore } from '@/common/stores';
import { reactive, ref } from 'vue';
import { sidebarItems } from './sidebar';
import logo_ngang from '@/assets/images/ttlab-logo_ngang.svg';
// import { setDashboardRouteComponent } from '../../../features/dashboard/routers';
import { setDashboardContent } from '../../../features/dashboard/routers';
import SecondaryLayout from '@/layouts/SecondaryLayout.vue';
import MainLayout from '@/layouts/MainLayout.vue';
import { useRouter } from 'vue-router';

// const router = useRouter();
// const changComponent = (component) => {
//   // console.log(component);

//   setDashboardContent(component);
//   router.push('/dashboard');
// };

const sidebarStore = useSidebarStore();
const rail = ref(sidebarStore.rail);
const width = ref(260);
const sidebar = reactive(sidebarItems());

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

// const router = useRouter();

// const changeComponent = (path) => {
//   router.push(path);
// };
</script>

<template>
  <v-navigation-drawer
    class="sidebar"
    v-model:rail="rail"
    :rail-width="60"
    :permanent="true"
    :width="width"
    @click="toggleCollapse"
  >
    <v-list-item title="" subtitle="" class="align-center justify-center">
      <v-img
        class=""
        :src="logo_ngang"
        :lazy-src="logo_ngang"
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
    <!-- <v-divider></v-divider> -->
    <v-list-item
      link
      prepend-icon="mdi mdi-package-variant-closed"
      title="Sản phẩm"
      @click="(rail = true), setDashboardContent(MainLayout)"
    ></v-list-item>
    <v-list-item
      prepend-icon="mdi mdi-account-group"
      link
      title="User"
      @click="(rail = true), setDashboardContent(SecondaryLayout)"
    ></v-list-item>

    <!-- <v-icon
      class="sidebar-collapse"
      :icon="rail ? 'mdi-chevron-right' : 'mdi-chevron-left'"
      size="24"
      @click="toggleCollapse"
    /> -->
  </v-navigation-drawer>
</template>
<style lang="scss" scoped>
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
}
</style>
