import { PageName } from '@/common/constants';
import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router';

import HomeView from './page/HomeView.vue'

const homeRouters: Array<RouteRecordRaw> = [
    {
        path: '/home',
        component: HomeView,
        children: [
            {
                path: '',
                name: 'home',
                component: HomeView,
                meta: {
                    public: true,
                },
            },
        ],
    },
];

export default homeRouters;

