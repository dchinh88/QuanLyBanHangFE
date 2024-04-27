import dashboardRouters from '@/features/dashboard/routers';
import authRouters from '../../features/auth/routers';
import homeRouters from '../../features/home/routers';
import adminRouter from '@/features/admin/router';
import homePageRouters from '@/features/homePage/routers';

export const routers = [...authRouters, ...dashboardRouters, ...homeRouters, ...adminRouter, ...homePageRouters];
