import localStorageAuthService from '@/common/storages/authStorage';
import { defineStore } from 'pinia';
import { authApi } from '../services/auth.api';
import type { IBodyLogin } from '../interfaces';
import { computed } from 'vue';
import dayjs from '@/plugins/dayjs';
import { logout } from '@/plugins/axios';

export const useAuthStore = defineStore('authStore', () => {
  // profile name, email, etc

  async function logoutAction() {
    await authApi.logout();
    logout();
  }

  async function login(body: IBodyLogin) {
    const res = await authApi.login(body);
    console.log(res);

    if (res.success) {
      localStorageAuthService.setAccessToken(res.user.accessToken.token);
      localStorageAuthService.setAccessTokenExpiredAt(res.user.accessToken.expires);

      localStorageAuthService.setRefreshToken(res.user.refreshToken.token)
      localStorageAuthService.setRefreshTokenExpiredAt(res.user.refreshToken.expiresIn)


      localStorageAuthService.setUserRole(res.user.accessToken.role)
      localStorageAuthService.setUserAvatar(res.user.accessToken.avatar)
      // console.log(res.user.accessToken.avatar);


      // localStorageAuthService.setUserAvatar(res.user.accessToken.avatar)

    }
    return res;
  }

  const isAuthenticated = computed(() => {
    const token = localStorageAuthService.getAccessToken();
    const expiredAt = localStorageAuthService.getAccessTokenExpiredAt();
    return Boolean(token && expiredAt && !dayjs(dayjs(expiredAt)).isBefore());
  });
  const hasToken = computed(() => {
    return !!localStorageAuthService.getAccessToken();
  });
  return {
    login,
    logoutAction,
    hasToken,
    isAuthenticated,
  };
});
