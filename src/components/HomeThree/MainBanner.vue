<template>
  <div class="hero-wrap style1 bg-spring">
    <img
      src="../../assets/images/hero/hero-shape-1.png"
      alt="Image"
      class="hero-shape-one"
    />
    <img
      src="../../assets/images/hero/hero-shape-2.png"
      alt="Image"
      class="hero-shape-two"
    />
    <img
      src="../../assets/images/hero/hero-shape-3.png"
      alt="Image"
      class="hero-shape-three"
    />
    <img
      src="../../assets/images/hero/hero-shape-4.png"
      alt="Image"
      class="hero-shape-four md-none"
    />
    <div class="hero-slider-two">
      <carousel>
        <Slide v-for="slide in carouselItems" :key="slide.id">
          <div class="hero-slide-item">
            <div class="container-fluid">
              <div class="row align-items-center">
                <div class="col-lg-6">
                  <div class="hero-content">
                    <span>{{ slide.subtitle }}</span>
                    <h1>{{ slide.heading }}</h1>
                    <p>{{ slide.desc }}</p>
                    <router-link to="/services" class="btn style1"
                      >Get Started</router-link
                    >
                  </div>
                </div>
                <div class="col-lg-6">
                  <div class="hero-img-wrap">
                    <img :src="slide.image" alt="Image" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Slide>

        <template #addons>
          <navigation>
            <template #next>
              <i class="flaticon-next"></i>
            </template>
            <template #prev>
              <i class="flaticon-left-arrow-1"></i>
            </template>
          </navigation>
        </template>
      </carousel>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { Carousel, Slide, Navigation } from "vue3-carousel";

import "vue3-carousel/dist/carousel.css";

export default defineComponent({
  name: "MainBanner",
  components: {
    Carousel,
    Slide,
    Navigation,
  },
  data: () => ({
    carouselItems: [
      {
        id: 1,
        subtitle: "Simple. Transparent. Secure",
        heading: "Fast & Secure Online Money Transfer",
        desc: "Dea of denouncing pleasure and praising pain was born and lete system, and expound the ac teachings aitems to sed quia non numquam amet sit dolor.",
        image: require("../../assets/images/hero/hero-slide-4.png"),
      },
      {
        id: 2,
        subtitle: "Reliable. Zero Service Charge",
        heading: "Move Your Money In Easy Secured Steps",
        desc: "Dea of denouncing pleasure and praising pain was born and lete system, and expound the ac teachings aitems to sed quia non numquam amet sit dolor.",
        image: require("../../assets/images/hero/hero-slide-5.png"),
      },
      {
        id: 3,
        subtitle: "Easy. Fastest . Secure",
        heading: "Secured &amp; Easy Online Payment Solution",
        desc: "Dea of denouncing pleasure and praising pain was born and lete system, and expound the ac teachings aitems to sed quia non numquam amet sit dolor.",
        image: require("../../assets/images/hero/hero-slide-6.png"),
      },
    ],
  }),
});
</script>
