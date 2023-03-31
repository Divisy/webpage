<template>
    <div class="testimonial-wrap ptb-100  bg-albastor">
        <div class="container">
            <div class="row">
                <div class="col-xl-6 offset-xl-3 col-lg-8 offset-lg-2">
                    <div class="section-title style1 text-center mb-40">
                        <span>Our Testimonials</span>
                        <h2>What Our Client Says</h2>
                    </div>
                </div>
            </div>
            <div class="testimonial-slider-three">
                <carousel
                    :autoplay="5000"
                    :wrap-around="true"
                >
                    <Slide v-for="slide in carouselItems" :key="slide.id">
                        <div class="testimonial-card style3">
                            <span class="quote-icon">
                                <i class="flaticon-quotation-mark"></i>
                            </span>
                            <p class="client-quote">{{slide.description}}</p>
                            <div class="testimonial-card-thumb">
                                <div class="client-info-wrap">
                                    <div class="client-img">
                                        <img :src="slide.image" alt="Image">
                                    </div>
                                    <div class="client-info">
                                        <h4>{{slide.name}}</h4>
                                        <span>{{slide.position}}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Slide>

                    <template #addons>
                        <navigation>
                            <template #next>
                                <i class='flaticon-next'></i>
                            </template>
                            <template #prev>
                                <i class='flaticon-left-arrow-1'></i>
                            </template>
                        </navigation>
                    </template>
                </carousel>
            </div>
        </div>
    </div> 
</template>

<script>
import { defineComponent } from 'vue';
import { Carousel, Slide, Navigation  } from 'vue3-carousel';

import 'vue3-carousel/dist/carousel.css';

export default defineComponent ({
    name: 'Testimonials',
    components: {
        Carousel,
        Slide,
        Navigation,
    },
    data: () => ({
        carouselItems: [
            {
                id: 1,
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua enim minim veniam, quis nostrud exercise amet loremtation amet ullamco laboris nisi ut aliquip ex eacoo consequat. Duisaute irure dolor in reprehen ametderit in voluptate velit esse cillum dolore eu fugiat.',
                image: require('../../assets/images/testimonials/client-1.jpg'),
                name: 'Shonda Leer',
                position: 'Director, BAT',
            },
            {
                id: 2,
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua enim minim veniam, quis nostrud exercise amet loremtation amet ullamco laboris nisi ut aliquip ex eacoo consequat. Duisaute irure dolor in reprehen ametderit in voluptate velit esse cillum dolore eu fugiat.',
                image: require('../../assets/images/testimonials/client-2.jpg'),
                name: 'Alex Cruis',
                position: 'CEO, IBAC',
            },
            {
                id: 3,
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua enim minim veniam, quis nostrud exercise amet loremtation amet ullamco laboris nisi ut aliquip ex eacoo consequat. Duisaute irure dolor in reprehen ametderit in voluptate velit esse cillum dolore eu fugiat.',
                image: require('../../assets/images/testimonials/client-3.jpg'),
                name: 'Marion Ott',
                position: 'Founder, Olleo',
            },
            {
                id: 4,
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua enim minim veniam, quis nostrud exercise amet loremtation amet ullamco laboris nisi ut aliquip ex eacoo consequat. Duisaute irure dolor in reprehen ametderit in voluptate velit esse cillum dolore eu fugiat.',
                image: require('../../assets/images/testimonials/client-4.jpg'),
                name: 'Harry Jackson',
                position: 'Enterpreneur',
            },
            {
                id: 5,
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua enim minim veniam, quis nostrud exercise amet loremtation amet ullamco laboris nisi ut aliquip ex eacoo consequat. Duisaute irure dolor in reprehen ametderit in voluptate velit esse cillum dolore eu fugiat.',
                image: require('../../assets/images/testimonials/client-5.jpg'),
                name: 'Brock Lee',
                position: 'Developer',
            },
        ],
    }),
})
</script>