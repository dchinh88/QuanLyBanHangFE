<template>
  <div class="box">
    <div class="black-line-top d-flex align-center justify-center">
      <div class="text-line-top mr-1">Sign up and get 20% off to your first order.</div>
      <div class="text-sign-up-now">Sign Up Now</div>
    </div>
    <div class="nav-bar d-flex align-center justify-center mt-6 mb-6">
      <div class="logo">
        <v-img :src="SHOPCO" style="width: 160px; height: 22px"></v-img>
      </div>
      <div class="frame2 ml-10 mr-10 d-flex align-center justify-center">
        <div class="shop mr-6">Shop <v-icon size="16">mdi mdi-chevron-down</v-icon></div>
        <div class="on-sale mr-6">On Sale</div>
        <div class="new-arivals mr-6">New Arrivals</div>
        <div class="brands">Brands</div>
      </div>
      <!-- <div class="frame3 d-flex align-center justify-center"> -->
      <v-text-field
        class="align-center justify-center"
        density="compact"
        variant="solo-filled"
        label="Search for product..."
        style="max-width: 577px; height: 48px; border-radius: 30px !important"
        rounded
        prepend-inner-icon="mdi-magnify"
        clearable
        single-line
        flat
        hide-details
      ></v-text-field>
      <div class="frame5 ml-10 d-flex align-center justify-center">
        <v-icon size="24">mdi mdi-cart-outline</v-icon>
        <v-icon size="24" class="ml-3">mdi mdi-account-circle-outline</v-icon>
      </div>
      <!-- </div> -->
    </div>
    <div class="rectangle">
      <v-img :src="Rectangle2" class="rectangle2"></v-img>
      <div class="find-clothes">FIND CLOTHES THAT MATCHES YOUR STYLE</div>
      <div class="browse">
        Browse through our diverse range of meticulously crafted garments, designed to
        bring out your individuality and cater to your sense of style.
      </div>
      <div class="btn-shop-now">
        <v-btn width="210" height="52" style="border-radius: 62px" color="black"
          ><p class="text-capitalize text-btn">Shop Now</p></v-btn
        >
      </div>
    </div>
    <!--  -->

    <div class="frame57 d-flex align-center justify-center">
      <div class="hai-tram mr-8">
        <p class="text-200">200+</p>
        <p class="text-inner-200">International Brands</p>
      </div>
      <v-divider vertical class="w-100"></v-divider>
      <div class="hai-nghin ml-8 mr-8">
        <p class="text-200">2000+</p>
        <p class="text-inner-200">High-Quality Products</p>
      </div>
      <v-divider vertical style="max-height: 74px"></v-divider>
      <div class="ba-muoi-nghin ml-8">
        <p class="text-200">30,000+</p>
        <p class="text-inner-200">Happy Customers</p>
      </div>
    </div>
    <!--  -->
    <div class="rectangle3 d-flex align-center justify-center">
      <div style="margin-right: 106px">
        <v-img :src="versace" width="166" height="36"></v-img>
      </div>
      <div style="margin-right: 106px">
        <v-img :src="zara" width="91" height="36"></v-img>
      </div>
      <div style="margin-right: 106px">
        <v-img :src="gucci" width="156" height="36"></v-img>
      </div>
      <div style="margin-right: 106px">
        <v-img :src="prada" width="194" height="36"></v-img>
      </div>
      <div><v-img :src="calvin" width="206" height="36"></v-img></div>
    </div>
    <!--  -->
    <div class="new-arrivals">
      <p class="text-new-arrivals d-flex align-center justify-center text-uppercase">
        New Arrivals
      </p>
      <div class="some-products d-flex align-center justify-center">
        <!--  -->
        <div class="product mr-5">
          <v-img
            :src="product1"
            width="295"
            height="298"
            style="border-radius: 20px"
          ></v-img>
          <p class="name-product mt-4">T-SHIRT WITH TAPE DETAILS</p>
          <div
            class="rating d-flex align-center justify-center mt-2"
            style="width: 120px; height: 19px"
          >
            <input value="1" name="rate" id="star1" type="radio" />
            <label title="text" for="star1"></label>
            <input value="2" name="rate" id="star2" type="radio" />
            <label title="text" for="star2"></label>
            <input value="3" name="rate" id="star3" type="radio" checked="" />
            <label title="text" for="star3"></label>
            <input value="4" name="rate" id="star4" type="radio" />
            <label title="text" for="star4"></label>
            <input value="5" name="rate" id="star5" type="radio" />
            <label title="text" for="star5"></label>
            <div class="rating-point mt-1">4/5</div>
          </div>

          <div class="price mt-2">$120</div>
        </div>
        <!--  -->
        <div class="product mr-5">
          <v-img
            :src="product1"
            width="295"
            height="298"
            style="border-radius: 20px"
          ></v-img>
          <p class="name-product mt-4">T-SHIRT WITH TAPE DETAILS</p>
          <div
            class="rating d-flex align-center justify-center mt-2"
            style="width: 120px; height: 19px"
          >
            <input value="1" name="rate" id="star1" type="radio" />
            <label title="text" for="star1"></label>
            <input value="2" name="rate" id="star2" type="radio" />
            <label title="text" for="star2"></label>
            <input value="3" name="rate" id="star3" type="radio" checked="" />
            <label title="text" for="star3"></label>
            <input value="4" name="rate" id="star4" type="radio" />
            <label title="text" for="star4"></label>
            <input value="5" name="rate" id="star5" type="radio" />
            <label title="text" for="star5"></label>
            <div class="rating-point mt-1">4/5</div>
          </div>

          <div class="d-flex align-center justify-left">
            <div class="price mt-2" style="margin-right: 10px">$120</div>
            <div
              class="old-price mt-2 text-decoration-line-through"
              style="margin-right: 10px"
            >
              $150
            </div>
            <div class="sales mt-2 d-flex align-center justify-center">-20%</div>
          </div>
        </div>
        <!--  -->

        <!--  -->
        <div class="product mr-5">
          <v-img
            :src="product1"
            width="295"
            height="298"
            style="border-radius: 20px"
          ></v-img>
          <p class="name-product mt-4">T-SHIRT WITH TAPE DETAILS</p>
          <div
            class="rating d-flex align-center justify-center mt-2"
            style="width: 120px; height: 19px"
          >
            <input value="1" name="rate" id="star1" type="radio" />
            <label title="text" for="star1"></label>
            <input value="2" name="rate" id="star2" type="radio" />
            <label title="text" for="star2"></label>
            <input value="3" name="rate" id="star3" type="radio" checked="" />
            <label title="text" for="star3"></label>
            <input value="4" name="rate" id="star4" type="radio" />
            <label title="text" for="star4"></label>
            <input value="5" name="rate" id="star5" type="radio" />
            <label title="text" for="star5"></label>
            <div class="rating-point mt-1">4/5</div>
          </div>

          <div class="price mt-2">$120</div>
        </div>
        <!--  -->
        <div class="product">
          <v-img
            :src="product1"
            width="295"
            height="298"
            style="border-radius: 20px"
          ></v-img>
          <p class="name-product mt-4">T-SHIRT WITH TAPE DETAILS</p>
          <div
            class="rating d-flex align-center justify-center mt-2"
            style="width: 120px; height: 19px"
          >
            <input value="1" name="rate" id="star1" type="radio" />
            <label title="text" for="star1"></label>
            <input value="2" name="rate" id="star2" type="radio" />
            <label title="text" for="star2"></label>
            <input value="3" name="rate" id="star3" type="radio" checked="" />
            <label title="text" for="star3"></label>
            <input value="4" name="rate" id="star4" type="radio" />
            <label title="text" for="star4"></label>
            <input value="5" name="rate" id="star5" type="radio" />
            <label title="text" for="star5"></label>
            <div class="rating-point mt-1">4/5</div>
          </div>

          <div class="d-flex align-center justify-left">
            <div class="price mt-2" style="margin-right: 10px">$120</div>
            <div
              class="old-price mt-2 text-decoration-line-through"
              style="margin-right: 10px"
            >
              $150
            </div>
            <div class="sales mt-2 d-flex align-center justify-center">-20%</div>
          </div>
        </div>
        <!--  -->
      </div>
      <v-btn
        class="mt-9 mb-16"
        variant="outlined"
        width="218"
        height="52"
        color="#0000001A"
        style="border-radius: 62px; left: 611px"
        ><p class="text-btn-view-all text-capitalize">View All</p></v-btn
      >
      <v-divider class="mb-16" style="width: 1240px; margin-left: 100px"></v-divider>
    </div>
    <!--  -->
    <div class="new-arrivals">
      <p class="text-new-arrivals d-flex align-center justify-center text-uppercase">
        Top Selling
      </p>
      <div class="some-products d-flex align-center justify-center">
        <!--  -->
        <div class="product mr-5">
          <v-img
            :src="product1"
            width="295"
            height="298"
            style="border-radius: 20px"
          ></v-img>
          <p class="name-product mt-4">T-SHIRT WITH TAPE DETAILS</p>
          <div
            class="rating d-flex align-center justify-center mt-2"
            style="width: 120px; height: 19px"
          >
            <input value="1" name="rate" id="star1" type="radio" />
            <label title="text" for="star1"></label>
            <input value="2" name="rate" id="star2" type="radio" />
            <label title="text" for="star2"></label>
            <input value="3" name="rate" id="star3" type="radio" checked="" />
            <label title="text" for="star3"></label>
            <input value="4" name="rate" id="star4" type="radio" />
            <label title="text" for="star4"></label>
            <input value="5" name="rate" id="star5" type="radio" />
            <label title="text" for="star5"></label>
            <div class="rating-point mt-1">4/5</div>
          </div>

          <div class="price mt-2">$120</div>
        </div>
        <!--  -->
        <div class="product mr-5">
          <v-img
            :src="product1"
            width="295"
            height="298"
            style="border-radius: 20px"
          ></v-img>
          <p class="name-product mt-4">T-SHIRT WITH TAPE DETAILS</p>
          <div
            class="rating d-flex align-center justify-center mt-2"
            style="width: 120px; height: 19px"
          >
            <input value="1" name="rate" id="star1" type="radio" />
            <label title="text" for="star1"></label>
            <input value="2" name="rate" id="star2" type="radio" />
            <label title="text" for="star2"></label>
            <input value="3" name="rate" id="star3" type="radio" checked="" />
            <label title="text" for="star3"></label>
            <input value="4" name="rate" id="star4" type="radio" />
            <label title="text" for="star4"></label>
            <input value="5" name="rate" id="star5" type="radio" />
            <label title="text" for="star5"></label>
            <div class="rating-point mt-1">4/5</div>
          </div>

          <div class="d-flex align-center justify-left">
            <div class="price mt-2" style="margin-right: 10px">$120</div>
            <div
              class="old-price mt-2 text-decoration-line-through"
              style="margin-right: 10px"
            >
              $150
            </div>
            <div class="sales mt-2 d-flex align-center justify-center">-20%</div>
          </div>
        </div>
        <!--  -->

        <!--  -->
        <div class="product mr-5">
          <v-img
            :src="product1"
            width="295"
            height="298"
            style="border-radius: 20px"
          ></v-img>
          <p class="name-product mt-4">T-SHIRT WITH TAPE DETAILS</p>
          <div
            class="rating d-flex align-center justify-center mt-2"
            style="width: 120px; height: 19px"
          >
            <input value="1" name="rate" id="star1" type="radio" />
            <label title="text" for="star1"></label>
            <input value="2" name="rate" id="star2" type="radio" />
            <label title="text" for="star2"></label>
            <input value="3" name="rate" id="star3" type="radio" checked="" />
            <label title="text" for="star3"></label>
            <input value="4" name="rate" id="star4" type="radio" />
            <label title="text" for="star4"></label>
            <input value="5" name="rate" id="star5" type="radio" />
            <label title="text" for="star5"></label>
            <div class="rating-point mt-1">4/5</div>
          </div>

          <div class="price mt-2">$120</div>
        </div>
        <!--  -->
        <div class="product">
          <v-img
            :src="product1"
            width="295"
            height="298"
            style="border-radius: 20px"
          ></v-img>
          <p class="name-product mt-4">T-SHIRT WITH TAPE DETAILS</p>
          <div
            class="rating d-flex align-center justify-center mt-2"
            style="width: 120px; height: 19px"
          >
            <input value="1" name="rate" id="star1" type="radio" />
            <label title="text" for="star1"></label>
            <input value="2" name="rate" id="star2" type="radio" />
            <label title="text" for="star2"></label>
            <input value="3" name="rate" id="star3" type="radio" checked="" />
            <label title="text" for="star3"></label>
            <input value="4" name="rate" id="star4" type="radio" />
            <label title="text" for="star4"></label>
            <input value="5" name="rate" id="star5" type="radio" />
            <label title="text" for="star5"></label>
            <div class="rating-point mt-1">4/5</div>
          </div>

          <div class="d-flex align-center justify-left">
            <div class="price mt-2" style="margin-right: 10px">$120</div>
            <div
              class="old-price mt-2 text-decoration-line-through"
              style="margin-right: 10px"
            >
              $150
            </div>
            <div class="sales mt-2 d-flex align-center justify-center">-20%</div>
          </div>
        </div>
        <!--  -->
      </div>
      <v-btn
        class="mt-9 mb-16"
        variant="outlined"
        width="218"
        height="52"
        color="#0000001A"
        style="border-radius: 62px; left: 611px"
        ><p class="text-btn-view-all text-capitalize">View All</p></v-btn
      >
      <!-- <v-divider class="mb-16" style="width: 1240px; margin-left: 100px"></v-divider> -->
    </div>
  </div>
</template>

<script setup>
import SHOPCO from '../../../assets/images/SHOP.CO.png';
import Rectangle2 from '../../../assets/images/Rectangle 2.png';
import versace from '../../../assets/Group.png';
import zara from '../../../assets/zara-logo-1 1.png';
import gucci from '../../../assets/gucci-logo-1 1.png';
import prada from '../../../assets/prada-logo-1 1.png';
import calvin from '../../../assets/Group (1).png';
import product1 from '../../../assets/Frame 32.png';
</script>

<style scoped>
@import url('https://fonts.cdnfonts.com/css/satoshi');
/* @import url('https://fonts.googleapis.com/css2?family=Integral+CF&display=swap'); */
@import url('https://globalfonts.pro/font/integral-cf');
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@100..900&family=Quicksand:wght@300..700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@100..900&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');

.box {
  max-width: 1440px;
  margin: auto;
  position: relative;
}
.black-line-top {
  width: 100%;
  height: 38px;
  background-color: #000000;
}
.text-line-top {
  font-family: 'Satoshi', sans-serif;
  font-weight: 400;
  font-size: 14px;
  line-height: 18.9px;
  color: #ffffff;
}
.text-sign-up-now {
  font-family: 'Satoshi', sans-serif;
  font-weight: 500;
  font-size: 14px;
  line-height: 18.9px;
  color: #ffffff;
}
.nav-bar {
  max-width: 1240px;
  height: 48px;
  margin: auto;
}
.logo {
  font-family: 'Integral CF', sans-serif;
  font-weight: 700;
  font-size: 32px;
  line-height: 38.4px;
  color: #000000;
}
.frame2 {
  max-width: 321px;
}
.shop {
  font-family: 'Satoshi', sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 21.6px;
  color: #000000;
  width: 57px;
  height: 22px;
}
.on-sale {
  font-family: 'Satoshi', sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 21.6px;
  color: #000000;
  width: 56px;
  height: 22px;
}
.new-arivals {
  font-family: 'Satoshi', sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 21.6px;
  color: #000000;
  width: 87px;
  height: 22px;
}
.brands {
  font-family: 'Satoshi', sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 21.6px;
  color: #000000;
  width: 49pxpx;
  height: 22px;
}
.frame3 {
  max-width: 577px;
  height: 48px;
}
.rectangle2 {
  height: 663px;
  position: relative;
}
.find-clothes {
  position: absolute;
  font-weight: 900;
  top: 237px;
  left: 100px;
  font-size: 64px;
  width: 577px;
  height: 173px;
  line-height: 64px;
  font-family: 'Poppins', sans-serif;

  letter-spacing: 0em;
  /* text-align: left; */
}
.browse {
  font-family: 'Satoshi', sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;
  color: #00000099;
  width: 545px;
  height: 33px;
  position: absolute;
  top: 442px;
  left: 100px;
}
.btn-shop-now {
  position: absolute;
  top: 507px;
  left: 100px;
}
.text-btn {
  font-family: 'Satoshi', sans-serif;
  font-weight: 500;
  font-size: 16px;
  line-height: 21.6px;
  color: #ffffff;
}
.frame57 {
  position: absolute;
  max-width: 596px;
  height: 47px;
  top: 607px;
  left: 100px;
}
.hai-tram {
  width: 141px;
  height: 74px;
}
.text-200 {
  font-family: 'Satoshi', sans-serif;
  font-weight: 700;
  font-size: 40px;
  line-height: 54px;
  color: #000000;
}
.text-inner-200 {
  font-family: 'Satoshi', sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 22px;
  color: #00000099;
}

.rectangle3 {
  height: 122px;
  background-color: #000000;
}

.text-new-arrivals {
  font-family: 'Poppins', sans-serif;
  font-weight: 700;
  font-size: 48px;
  line-height: 57.6px;
  margin-top: 72px;
}
.some-products {
  margin-top: 55px;
}

.name-product {
  font-family: 'Satoshi', sans-serif;
  font-weight: 700;
  font-size: 17px;
  line-height: 27px;
  color: #000000;
}

.rating:not(:checked) > input {
  position: absolute;
  appearance: none;
}

.rating:not(:checked) > label {
  /* float: right; */
  cursor: pointer;
  font-size: 20px;
  color: #666;
}

.rating:not(:checked) > label:before {
  content: '★';
}

.rating > input:checked + label:hover,
.rating > input:checked + label:hover ~ label,
.rating > input:checked ~ label:hover,
.rating > input:checked ~ label:hover ~ label,
.rating > label:hover ~ input:checked ~ label {
  color: #e58e09;
}

.rating:not(:checked) > label:hover,
.rating:not(:checked) > label:hover ~ label {
  color: #ff9e0b;
}

.rating > input:checked ~ label {
  color: #ffa723;
}

.rating-point {
  font-family: 'Satoshi', sans-serif;
  font-weight: 400;
  font-size: 14px;
  line-height: 18.9px;
  margin-left: 13px;
}
.price {
  font-family: 'Satoshi', sans-serif;
  font-weight: 700;
  font-size: 24px;
  line-height: 32.4px;
  color: #000000;
}
.old-price {
  font-family: 'Satoshi', sans-serif;
  font-weight: 700;
  font-size: 24px;
  line-height: 32.4px;
  color: #00000066;
}

.sales {
  font-family: 'Satoshi', sans-serif;
  font-weight: 500;
  font-size: 12px;
  line-height: 16.2px;
  color: #ff3333;
  background-color: #ff33331a;
  width: 58px;
  height: 28px;
  border-radius: 62px;
}
.text-btn-view-all {
  font-family: 'Satoshi', sans-serif;
  font-weight: 500;
  font-size: 16px;
  line-height: 21.6px;
  color: #000000;
}
</style>