<template>
    <div class="service-wrap ptb-100  bg-stratos">
        <div class="container">
            <div class="section-title style1 text-center mb-40">
                <span>Our Services</span>
                <h2 class="text-white">Payment Services Worldwide</h2>
            </div>
            <div class="service-slider-one">
                <carousel
                    :autoplay="5000"
                    :settings='settings'
                    :breakpoints="breakpoints"
                >
                    <Slide v-for="slide in carouselItems" :key="slide.id">
                        <div class="service-card style2">
                            <div class="service-info">
                                <div class="service-title">
                                    <span><i :class="slide.icon"></i></span>
                                    <h3><router-link to="/service-details">{{slide.title}}</router-link></h3>
                                </div>
                                <p>{{slide.desc}}</p>
                                <router-link to="/service-details" class="link style1">Learn More <i class="flaticon-right-arrow-1"></i></router-link>
                            </div>
                        </div>
                    </Slide>

                    <template #addons>
                        <Pagination />
                    </template> 
                </carousel>
            </div>
        </div>
    </div>
</template>

<script>
import { defineComponent } from 'vue';
import { Carousel, Slide, Pagination  } from 'vue3-carousel';

import 'vue3-carousel/dist/carousel.css';

export default defineComponent ({
    name: 'Services',
    components: {
        Carousel,
        Slide,
        Pagination,
    },
    data: () => ({
        settings: {
            itemsToShow: 1,
            snapAlign: 'center',
        },
        carouselItems: [
            {
                id: 1,
                icon: 'flaticon-payment-method',
                title: 'Fraud Detection',
                desc: 'Lorem ipsum dolor sit amet dolor alut const slice elit aliquid dolor ametin perfer endis velit sed fuga volup tation sit praising pain.',
            },
            {
                id: 2,
                icon: 'flaticon-computer',
                title: 'Account Updater',
                desc: 'Lorem ipsum dolor sit amet dolor alut const slice elit aliquid dolor ametin perfer endis velit sed fuga volup tation sit praising pain.',
            },
            {
                id: 3,
                icon: 'flaticon-loan-1',
                title: 'Payment Invoice',
                desc: 'Lorem ipsum dolor sit amet dolor alut const slice elit aliquid dolor ametin perfer endis velit sed fuga volup tation sit praising pain.',
            },
            {
                id: 4,
                icon: 'flaticon-secure-shield',
                title: 'Secure Payment',
                desc: 'Lorem ipsum dolor sit amet dolor alut const slice elit aliquid dolor ametin perfer endis velit sed fuga volup tation sit praising pain.',
            },
            {
                id: 5,
                icon: 'flaticon-mortarboard',
                title: 'Education Loan',
                desc: 'Lorem ipsum dolor sit amet dolor alut const slice elit aliquid dolor ametin perfer endis velit sed fuga volup tation sit praising pain.',
            },
            {
                id: 6,
                icon: 'flaticon-loan',
                title: 'Home Loan',
                desc: 'Lorem ipsum dolor sit amet dolor alut const slice elit aliquid dolor ametin perfer endis velit sed fuga volup tation sit praising pain.',
            },
        ],
        breakpoints: {
            0: {
                itemsToShow: 1,
			},
            576: {
                itemsToShow: 1,
                snapAlign: 'center',
            },
            768: {
                itemsToShow: 2,
                snapAlign: 'center',
            },
            1200: {
                itemsToShow: 3,
                snapAlign: 'center',
            },
        },
    }),
})
</script>