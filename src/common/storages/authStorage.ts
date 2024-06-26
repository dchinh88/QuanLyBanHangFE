import type { IUserProfile } from '@/features/auth/interfaces';
import { DEFAULT_LANGUAGE, SupportLanguage } from '../constants';
import { isStringify } from '../helpers';
import { type IUserRole } from '../interfaces';
import { storage } from './localStorage';

const BUFFER_TIME = 60 * 1000; // 60s

export const enum AUTH_SERVICE_KEY {
  ACCESS_TOKEN = 'ACCESS_TOKEN',
  REFRESH_TOKEN = 'REFRESH_TOKEN',
  USER = 'USER',
  ROLE = 'ROLE',
  LANGUAGE = 'LANGUAGE',
  ACCESS_TOKEN_EXPIRED_AT = 'ACCESS_TOKEN_EXPIRED_AT',
  REFRESH_TOKEN_EXPIRED_AT = 'REFRESH_TOKEN_EXPIRED_AT',
  AVATAR = 'AVATAR',
  IDUSER = 'IDUSER'
}
class LocalStorageAuthService {
  //ROLE
  setUserRole(role: string): void {
    return storage.setLocalStorage(AUTH_SERVICE_KEY.ROLE, role)
  }

  //
  setUserAvatar(avatar: string): void {
    return storage.setLocalStorage(AUTH_SERVICE_KEY.AVATAR, avatar)
  }
  getUserAvatar(): string {
    return storage.getLocalStorage(AUTH_SERVICE_KEY.AVATAR)
  }

  setIdUser(id: string): void {
    return storage.setLocalStorage(AUTH_SERVICE_KEY.IDUSER, id)
  }

  getIdUser(): string {
    return storage.getLocalStorage(AUTH_SERVICE_KEY.IDUSER)
  }



  // getUserRole():string {
  //   return storage.getLocalStorage(AUTH_SERVICE_KEY.ROLE)
  // }
  // ACCESS_TOKEN
  setAccessToken(token: string): void {
    storage.setLocalStorage(AUTH_SERVICE_KEY.ACCESS_TOKEN, token);
  }
  getAccessToken(): string {
    return storage.getLocalStorage(AUTH_SERVICE_KEY.ACCESS_TOKEN);
  }
  resetAccessToken(): void {
    storage.setLocalStorage(AUTH_SERVICE_KEY.ACCESS_TOKEN, '');
  }
  // ACCESS_TOKEN_EXPIRED_AT
  getAccessTokenExpiredAt(): number {
    return +storage.getLocalStorage(AUTH_SERVICE_KEY.ACCESS_TOKEN_EXPIRED_AT);
  }
  setAccessTokenExpiredAt(expiredIn: number): void {
    const expiredAt = new Date().getTime() + expiredIn * 1000 - BUFFER_TIME;
    storage.setLocalStorage(AUTH_SERVICE_KEY.ACCESS_TOKEN_EXPIRED_AT, String(expiredAt));
  }

  setRefreshTokenExpiredAt(expiredIn: number): void {
    const expiredAt = new Date().getTime() + expiredIn * 1000 - BUFFER_TIME;
    storage.setLocalStorage(AUTH_SERVICE_KEY.REFRESH_TOKEN_EXPIRED_AT, String(expiredAt));
  }


  resetAccessTokenExpiredAt(): void {
    storage.setLocalStorage(AUTH_SERVICE_KEY.ACCESS_TOKEN_EXPIRED_AT, '');
  }

  setRefreshToken(token: string): void {
    storage.setLocalStorage(AUTH_SERVICE_KEY.REFRESH_TOKEN, token);
  }

  getRefreshToken(): string {
    return storage.getLocalStorage(AUTH_SERVICE_KEY.REFRESH_TOKEN);
  }

  setRefresh_TokenExpiredAt(expiredIn: number): void {
    const expiredAt = new Date().getTime() + expiredIn * 1000 - BUFFER_TIME;
    storage.setLocalStorage(AUTH_SERVICE_KEY.REFRESH_TOKEN_EXPIRED_AT, String(expiredAt));
  }


  // LANGUAGE
  setLanguage(value: SupportLanguage): void {
    storage.setLocalStorage(AUTH_SERVICE_KEY.LANGUAGE, value);
  }
  getLanguage(): SupportLanguage {
    return (storage.getLocalStorage(AUTH_SERVICE_KEY.LANGUAGE) ||
      DEFAULT_LANGUAGE) as SupportLanguage;
  }

  // LOGIN USER
  setLoginUser(user: null | IUserProfile, role: IUserRole | null): void {
    if (!user) {
      storage.setLocalStorage(AUTH_SERVICE_KEY.USER, '');
    }
    if (!isStringify(user)) {
      return;
    }
    storage.setLocalStorage(AUTH_SERVICE_KEY.USER, JSON.stringify(user));
    storage.setLocalStorage(AUTH_SERVICE_KEY.ROLE, JSON.stringify(role));
  }
  getLoginUser(): IUserProfile {
    return storage.getObjectFromKey(AUTH_SERVICE_KEY.USER) as IUserProfile;
  }

  // getLoginUser(): IUserProfile {
  //   return storage.getObjectFromKey(AUTH_SERVICE_KEY.USER) as IUserProfile;
  // }

  getUserRole() {
    return storage.getObjectFromKey(AUTH_SERVICE_KEY.ROLE);
  }

  getHeader() {
    return {
      Authorization: `Bearer ${this.getAccessToken()}`,
      'Accept-Language': this.getLanguage() || DEFAULT_LANGUAGE,
    };
  }

  getAuthorizationHeader() {
    return {
      Authorization: `Bearer ${this.getAccessToken()}`,
    };
  }

  getHeadersNoAuthorization() {
    return {
      'Accept-Language': this.getLanguage() || DEFAULT_LANGUAGE,
    };
  }

  resetAll(): void {
    this.resetAccessToken();
    this.resetAccessTokenExpiredAt();
    this.setLoginUser(null, null);
  }
}

export const localStorageAuthService = new LocalStorageAuthService();
export default localStorageAuthService;
