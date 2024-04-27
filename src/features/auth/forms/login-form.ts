import { showErrorNotification, showSuccessNotification } from '@/common/helpers';
import { useField, useForm } from 'vee-validate';
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';
import { LoginProvider } from '../auth.constants';
import { loginWithPasswordSchema } from '../schema';
import { useAuthStore } from '../stores';
import router from '@/plugins/vue-router';
import { isEmpty } from 'lodash';
import jwt from 'jsonwebtoken'
import { localStorageAuthService } from '@/common/storages';
import { Role } from '@/common/constants';

// const jwt = require('jsonwebtoken')

export const useLoginForm = () => {

  const authStore = useAuthStore();
  const { t } = useI18n();
  const {
    handleSubmit,
    values: formValue,
    setValues,
    meta,
    validate,
  } = useForm({
    validationSchema: loginWithPasswordSchema,
  });

  const {
    value: email,
    setValue: setEmail,
    errorMessage: emailError,
  } = useField<string>('email')
  const {
    value: password,
    setValue: setPassword,
    errorMessage: passwordError,
  } = useField<string>('password');





  const handleLogin = handleSubmit(async (values) => {
    const res = await authStore.login({
      email: values.email,
      password: values.password,
      provider: LoginProvider.EMAIL,
    });

    if (res.success) {
      const ROLE = localStorage.getItem('ROLE')
      if (ROLE === 'admin') {
        showSuccessNotification(t('auth.success.login'));
        router.push('/admin');
      } else {
        showSuccessNotification(t('auth.success.login'));
        router.push('/home');
      }

      // if (localStorageAuthService.getUserRole() === Role.ADMIN) {
      //   showSuccessNotification(t('auth.success.login'));
      //   router.push('/admin');
      // }
      // else {
      //   showSuccessNotification(t('auth.success.login'));
      //   router.push('/home');
      // }

      // const token = localStorage.getItem('ACCESS_TOKEN');
      // console.log(token);
      // console.log(localStorageAuthService.getUserRole());


      // showSuccessNotification(t('auth.success.login'));
      // router.push('/admin');
      // return true;

    }
    else {
      showErrorNotification(t('auth.error.login'));
    }
    return false;
  });

  const isValidForm = computed(() => meta.value.valid);

  return {
    handleLogin,
    formValue,
    isValidForm,
    validate,
    setValues,
    email,
    setEmail,
    emailError,
    password,
    setPassword,
    passwordError,
  };
};
