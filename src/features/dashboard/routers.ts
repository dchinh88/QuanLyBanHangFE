import { PageName } from '@/common/constants';
import MainLayout from '@/layouts/MainLayout.vue';
import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router';
import DashboardPage from './pages/DashboardPage.vue';
import SecondaryLayout from '@/layouts/SecondaryLayout.vue'
import { computed, onMounted, reactive, ref, watch, watchEffect } from 'vue';

let defaultPage = ref(SecondaryLayout)


export function setDashboardContent(component: any) {
  defaultPage.value = component;
  // console.log(defaultPage.value.__name);
  // return defaultPage.value.__name;

}


const dashboardRouters: Array<RouteRecordRaw> = [
  {
    path: '/dashboard',
    component: () => defaultPage.value,
    children: [
      {
        path: '',
        name: PageName.DASHBOARD_PAGE,
        // component: SecondaryLayout,
        component: DashboardPage,
        meta: {
          public: true,
        },
      },
    ],
  },
];

watch(defaultPage, (newValue, oldValue) => {
  console.log('old value: ', oldValue.__name);
  console.log('new value: ', newValue.__name);

});

export default dashboardRouters;

