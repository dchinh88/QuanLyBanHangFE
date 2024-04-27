<script lang="ts" setup>
// import logo from '@/assets/images/logo.svg';
import logon from '@/assets/images/ttlab-logo.svg';
import { LoadingOverlay } from '@/components';
import { computed, reactive, ref } from 'vue';
import { useLoginForm } from '../../forms/login-form.ts';
import { isEmpty } from 'lodash';
import isEmail from 'validator/lib/isEmail';
import logo_shop from '@/assets/images/logo_shop.png';
// import { useForm } from 'vee-validate';
// import * as yup from 'yup';
const loginForm = reactive(useLoginForm());

const loading = ref(false);

const visible = ref(false);

// const validateEmail = computed(() => {
//   if (isEmpty(loginForm.email)) {
//     return 'Không được để trống';
//   } else if (isEmail(loginForm.email)) {
//     return 'Email không đúng định dạng';
//   }
// });
</script>
<template>
  <LoadingOverlay :loading="loading" bg-color="#FFF" :opacity="1" />
  <div class="h-100 d-flex align-center justify-center">
    <v-card width="426" height="476" flat rounded="lg" class="pb-5">
      <v-card-title>
        <v-img :src="logo_shop" :lazy-src="logo_shop" :height="80"></v-img>
        <p class="mt-2 text-center text-title">Đăng nhập</p>
      </v-card-title>

      <v-card-text style="padding: 0 1px">
        <div
          class="text-email text-medium-emphasis mb-1 font-weight-bold d-flex align-center justify-space-between"
        >
          Email
        </div>
        <v-text-field
          v-model="loginForm.email"
          variant="outlined"
          density="compact"
          color="primary"
          type="email"
          :label="$t('auth.form.email')"
          :placeholder="$t('auth.form.placeholder.email')"
          :error="!!loginForm.emailError"
          single-line
          hide-details
        ></v-text-field>
        <p
          class=""
          style="color: red; float: right; padding: 0; font-size: 12px"
          v-if="loginForm.emailError"
        >
          {{ isEmail(loginForm.email) ? '' : 'Email không đúng định dạng' }}
        </p>

        <div
          class="text-email text-medium-emphasis mb-1 mt-5 font-weight-bold d-flex align-center justify-space-between"
        >
          Mật khẩu
        </div>
        <v-text-field
          v-model="loginForm.password"
          color="primary"
          density="compact"
          :label="$t('auth.form.password')"
          :error="!!loginForm.passwordError"
          :append-inner-icon="visible ? 'mdi-eye' : 'mdi-eye-off'"
          :type="visible ? 'text' : 'password'"
          placeholder="••••••••••••••"
          variant="outlined"
          @click:append-inner="visible = !visible"
          single-line
          hide-details
        ></v-text-field>
        <p
          class=""
          style="color: red; float: right; padding: 0; font-size: 12px"
          v-if="loginForm.passwordError"
        >
          {{
            isEmpty(loginForm.password)
              ? 'Không được để trống'
              : '' || !/(?=.*\d)(?=.*[a-zA-Z])/.test(loginForm.password)
              ? 'Mật khẩu phải chứa ít nhất một chữ cái và một số'
              : ''
          }}
        </p>

        <v-row class="mt-5">
          <v-checkbox label="Ghi nhớ Đăng nhập" class="font-weight-bold"></v-checkbox>

          <p class="forgot-pass mt-5 mr-4" style="cursor: pointer">Quên mật khẩu?</p>
        </v-row>

        <div class="text-center">
          <v-btn
            color="#0f60ff"
            :width="426"
            class="text-login text-capitalize"
            :text="$t('auth.button.login')"
            @click="loginForm.handleLogin"
            @enter="loginForm.handleLogin"
          />
        </div>

        <v-card-text
          class="d-flex justify-center align-center"
          style="display: flex; margin: auto"
        >
          <!-- <v-row> -->
          <p class="cctk">Bạn chưa có tài khoản?</p>
          <p class="ml-2 register" style="cursor: pointer">Đăng ký</p>
          <!-- </v-row> -->
        </v-card-text>
      </v-card-text>
    </v-card>
  </div>
</template>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Public+Sans&display=swap');
.text-title {
  font-family: 'Public Sans', sans-serif;
  font-size: 32px;
  font-weight: 600;
  line-height: 48px;
}
.text-email {
  font-family: 'Public Sans', sans-serif;
  font-size: 14px;
  font-weight: 500;
  color: #464f60;
  line-height: 20px;
}
.forgot-pass {
  font-family: 'Public Sans', sans-serif;
  font-weight: 600;
  font-size: 14px;
  line-height: 20px;
  color: #0f60ff;
}
.text-login {
  font-family: 'Public Sans', sans-serif;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
}
.cctk {
  font-family: 'Public Sans', sans-serif;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: #5a5c6f;
}
.register {
  font-family: 'Public Sans', sans-serif;
  font-weight: 600;
  font-size: 14px;
  line-height: 20px;
  color: #0f60ff;
}
</style>
