<script setup lang="ts">
import { computed } from 'vue';
import { useRouter, type RouteLocationRaw } from 'vue-router';

const router = useRouter();

const props = withDefaults(
  defineProps<{
    hasExtension?: boolean;
    title?: string;
    height?: string;
    extHeight?: string;
    backTo?: RouteLocationRaw;
    isCapitalize?: boolean;
    isHideBack?: boolean;
    isHideProfile?: boolean;
  }>(),
  {
    hasExtension: false,
    height: '60',
    extHeight: '40',
  },
);

const isAbleToBack = computed(() => {
  const matched = router.currentRoute.value.matched;
  if (props?.isHideBack) return false;
  return (
    (matched.length > 1 && matched[0].path !== matched[matched.length - 1].path) ||
    !!props.backTo
  );
});

const onClickBack = async (route?: RouteLocationRaw) => {
  if (route) return router.replace(route);
  if (!window.history.state.back) {
    const parentRoute = router.currentRoute.value.matched[0];
    return router.replace(parentRoute.path);
  }
  return router.go(-1);
};
</script>

<template>
  <v-app-bar class="header-container" flat :height="height" :extension-height="extHeight">
    <v-app-bar-title
      class="fw-600 fz-5 text--black"
      :class="[isAbleToBack ? 'ms-2' : 'ms-4', isCapitalize ? 'text-capitalize' : '']"
    >
      <slot name="title">{{ title }}</slot>
    </v-app-bar-title>
    <template v-if="isAbleToBack" #prepend>
      <v-icon
        class="ms-1 text--black"
        icon="mdi-chevron-left"
        @click="onClickBack(backTo)"
        size="32"
      ></v-icon>
    </template>
    <template #append>
      <slot name="append">
        <v-badge content="4" overlap color="red">
          <v-icon icon="mdi mdi-bell-outline"></v-icon>
        </v-badge>
        <v-badge
          class="ml-4 mr-4"
          offset-x="50%"
          offset-y="50%"
          overlap
          color="green"
          dot
        >
          <v-avatar>
            <v-img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John"></v-img>
          </v-avatar>
        </v-badge>
      </slot>
    </template>
    <template v-if="hasExtension" #extension>
      <slot name="extension"></slot>
    </template>
  </v-app-bar>
</template>

<style lang="scss" scoped>
.header-container {
  border: 1px solid transparent;
  border-bottom-color: $color-neutral-6 !important;
  border-right-color: $color-neutral-6 !important;
  transition: all 0.24s linear !important;
}

.user-header {
  border-bottom: 1px solid $color-neutral-6;
}

.user-profile {
  display: flex;
  align-items: center;
  gap: 8px;
}

:global(.user-header .v-toolbar__append),
:global(.header-container .v-toolbar__append) {
  margin-inline-end: 16px !important;
}
</style>
