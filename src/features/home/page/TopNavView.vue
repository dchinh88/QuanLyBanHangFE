

<template>
  <div class="top-nav mt-2">
    <div class="tabs">
      <v-btn
        variant="text"
        width="144"
        height="56"
        @click="selected = 0"
        :class="selected == 0 ? 'text-tabs-selected' : 'text-tabs'"
      >
        <p><v-icon size="20">mdi mdi-hanger</v-icon><br />Clothing & Shoes</p>
      </v-btn>
      <!--  -->
      <v-btn
        variant="text"
        width="124"
        height="56"
        @click="selected = 1"
        :class="selected == 1 ? 'text-tabs-selected' : 'text-tabs'"
      >
        <p><v-icon size="20">mdi mdi-filmstrip</v-icon><br />Entertaiment</p>
      </v-btn>
      <!--  -->
      <v-btn
        variant="text"
        width="72"
        height="56"
        @click="selected = 2"
        :class="selected == 2 ? 'text-tabs-selected' : 'text-tabs'"
      >
        <p><v-icon size="20">mdi mdi-music</v-icon><br />Music</p>
      </v-btn>
      <!--  -->
      <v-btn
        variant="text"
        width="138"
        height="56"
        @click="selected = 3"
        :class="selected == 3 ? 'text-tabs-selected' : 'text-tabs'"
      >
        <p><v-icon size="20">mdi mdi-dumbbell</v-icon><br />Sport & Lifestyle</p>
      </v-btn>
      <!--  -->
      <v-btn
        variant="text"
        width="64"
        height="56"
        @click="selected = 4"
        :class="selected == 4 ? 'text-tabs-selected' : 'text-tabs'"
      >
        <p><v-icon size="20">mdi mdi-bone</v-icon><br />Pets</p>
      </v-btn>
      <!--  -->
      <v-btn
        variant="text"
        width="162"
        height="56"
        @click="selected = 5"
        :class="selected == 5 ? 'text-tabs-selected' : 'text-tabs'"
      >
        <p>
          <v-icon size="20">mdi mdi-silverware-variant</v-icon><br />Kitchen Accessories
        </p>
      </v-btn>
      <!--  -->
      <v-btn
        variant="text"
        width="144"
        height="56"
        @click="selected = 6"
        :class="selected == 6 ? 'text-tabs-selected' : 'text-tabs'"
      >
        <p><v-icon size="20">mdi mdi-binoculars</v-icon><br />Travel Equipment</p>
      </v-btn>
      <!--  -->
      <v-btn
        variant="text"
        width="148"
        height="56"
        @click="selected = 7"
        :class="selected == 7 ? 'text-tabs-selected' : 'text-tabs'"
      >
        <p><v-icon size="20">mdi mdi-barley</v-icon><br />Growing & Garden</p>
      </v-btn>
      <!--  -->
      <v-btn
        variant="text"
        width="130"
        height="56"
        @click="selected = 8"
        :class="selected == 8 ? 'text-tabs-selected' : 'text-tabs'"
      >
        <p><v-icon size="20">mdi mdi-flash-outline</v-icon><br />Electrical Tools</p>
      </v-btn>
      <!--  -->
      <v-btn
        variant="text"
        width="114"
        height="56"
        @click="selected = 9"
        :class="selected == 9 ? 'text-tabs-selected' : 'text-tabs'"
      >
        <p><v-icon size="20">mdi mdi-baby-carriage</v-icon><br />Mother Care</p>
      </v-btn>
      <!--  -->
      <v-btn
        variant="text"
        width="172"
        height="56"
        @click="selected = 10"
        :class="selected == 10 ? 'text-tabs-selected' : 'text-tabs'"
      >
        <p><v-icon size="20">mdi mdi-radioactive</v-icon><br />Toys & Entertainment</p>
      </v-btn>
      <!--  -->
      <v-btn
        variant="text"
        width="80"
        height="56"
        @click="selected = 11"
        :class="selected == 11 ? 'text-tabs-selected' : 'text-tabs'"
      >
        <p><v-icon size="20">mdi mdi-ship-wheel</v-icon><br />Vintage</p>
      </v-btn>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
let selected = ref(0);
</script>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap');

.top-nav {
  max-width: 1920px;
  max-height: 64px;
  margin: auto;
}
.tabs {
  max-width: 1492px;
  max-height: 56px;
  margin: auto;
}
.text-tabs-selected {
  font-family: 'Inter', sans-serif;
  font-weight: 500;
  font-size: 11px;
  line-height: 20.02px;
  color: #2979ff;
  background-color: #ebf2ff;
}
.text-tabs {
  font-family: 'Inter', sans-serif;
  font-weight: 400;
  font-size: 11px;
  line-height: 20.02px;
  color: #787885;
}
</style>