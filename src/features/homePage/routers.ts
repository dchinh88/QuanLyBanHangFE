import { PageName } from '@/common/constants';
import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router';

import HomePageView from './page/HomePageView.vue'

const homePageRouters: Array<RouteRecordRaw> = [
    {
        path: '/home-page',
        component: HomePageView,
        children: [
            {
                path: '',
                name: 'home-page',
                component: HomePageView,
                meta: {
                    public: true,
                },
            },
        ],
    },
];

export default homePageRouters;

