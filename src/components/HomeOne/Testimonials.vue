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
                description: 'I am extremely satisfied with my purchase, and I highly recommend this NFT marketplace to anyone looking to acquire unique and valuable NFTs for their collection.',
                image: require('../../assets/images/testimonials/client-1.jpg'),
                name: 'Jordi Puig',
                position: 'Twicher',
            },
            {
                id: 2,
                description: 'I was pleasantly surprised by the rates they offered, which were significantly better than other services I had used previously.',
                image: require('../../assets/images/testimonials/client-2.jpg'),
                name: 'Alexis Cruz',
                position: 'Soccer Player',
            },
            {
                id: 3,
                description: 'The transaction process was also very straightforward, and I was able to transfer money to my family abroad quickly and easily.',
                image: require('../../assets/images/testimonials/client-3.jpg'),
                name: 'Mariana Padilla',
                position: 'Office Manager',
            },
            {
                id: 4,
                description: '"I am extremely happy with the profits I have earned through my investments with this company. Their expert team of analysts and traders have provided me with sound advice and guidance, helping me make informed decisions with my investments.',
                image: require('../../assets/images/testimonials/client-4.jpg'),
                name: 'Tony Jackson',
                position: 'Enterpreneur',
            },
            {
                id: 5,
                description: 'Thanks to their strategy, I have been able to achieve impressive returns on my investments, and I feel confident in the security and stability of my portfolio. I highly recommend this company to anyone looking to invest in digital assets.',
                image: require('../../assets/images/testimonials/client-5.jpg'),
                name: 'Brock Thomson',
                position: 'Developer',
            },
        ],
    }),
})
</script>