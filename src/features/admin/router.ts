import { PageName } from '@/common/constants';
import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router';
import AdminView from './page/AdminView.vue'


const adminRouter: Array<RouteRecordRaw> = [
    {
        path: '/admin',
        component: AdminView,
        children: [
            {
                path: '',
                name: 'home',
                component: AdminView,
                meta: {
                    public: true,
                },
            },
        ],
    },
];

export default adminRouter;

