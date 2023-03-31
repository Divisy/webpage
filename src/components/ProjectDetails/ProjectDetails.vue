<template>
    <div class="project-details-wrap ptb-100">
        <div class="container">
            <div class="row gx-5">
                <div class="col-xl-8 col-lg-12">
                    <div class="project-desc">
                        <lightgallery
                            :settings="{ speed: 500, plugins: plugins }"
                            :onInit="onInit"
                            :onBeforeSlide="onBeforeSlide"
                        >
                            <a
                                v-for="item in items"
                                :key="item.id"
                                :data-lg-size="item.size"
                                :data-src="item.src"
                            >
                                <div class="service-img mb-25 d-block">
                                    <img className="img-responsive" :src="item.thumb" />
                                </div>
                            </a>
                        </lightgallery>
                        <h2>Mobile Financial Service</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing, elit. Quasi, porro expedita dolores quas nesciunt repellat sed. Nostrum sunt obcaecati totam distinctio libero ea aliquam hic a consectetur, et facere rem repudiandae maxime dolorem ad, saepe harum blanditiis.</p>
                        <p>Consectetur, et facere rem repudiandae maxime dolorem ad, saepe harum blanditiis laborum voluptatum amet sit Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates odio omnis dolor numquam dignissimos consectetur amet sit lorem ipsum dolor sit amet consec.</p>
                        <h2>Feature Of This Project</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates odio omnis dolor numquam dignissimos enim assumenda itaque nemo tenetur dolores incidunt, animi quo quae odit corporis, nihil architecto inventore. </p>
                        <ul class="content-feature-list style2 list-style">
                            <li><i class="ri-check-line"></i>Opening accounts </li>
                            <li><i class="ri-check-line"></i>Transferring funds </li>
                            <li><i class="ri-check-line"></i>Applying for loans </li>
                            <li><i class="ri-check-line"></i>Depositing checks </li>
                            <li><i class="ri-check-line"></i>Staying informed  </li>
                            <li><i class="ri-check-line"></i>24/7 on time services </li> 
                        </ul>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates odio omnis dolor numquam dignissimos enim assumenda itaque nemo tenetur dolores incidunt, animi quo quae odit corporis, nihil architecto inventore. </p>
                    </div>
                </div>
                <div class="col-xl-4 col-lg-12">
                    <div class="sidebar">
                        <div class="sidebar-widget style3">
                            <div class="project-info-widget">
                                <div class="overlay op-95 bg-rock"></div>
                                <h4>Project Information</h4>
                                <ul class="project-info-list list-style">
                                    <li>
                                        <p><i class="ri-calendar-check-line"></i>Date</p>
                                        <span>Jan 20, 2022</span>
                                    </li>
                                    <li>
                                        <p><i class="ri-map-pin-user-line"></i>Client</p>
                                        <span>Louis Fonsi</span>
                                    </li>
                                    <li>
                                        <p><i class="ri-bookmark-line"></i>Category</p>
                                        <span>Marketing</span>
                                    </li>
                                    <li>
                                        <p><i class="ri-map-pin-line"></i>Location</p>
                                        <span>South Wales, USA</span>
                                    </li>
                                    <li>
                                        <p><i class="ri-money-dollar-circle-line"></i>Value</p>
                                        <span>$5000</span>
                                    </li>
                                </ul>
                                <div class="project-share">
                                    <p><i class="ri-share-line"></i>Share Now</p>
                                    <ul class="social-profile list-style style1">
                                        <li>
                                            <a target="_blank" href="https://facebook.com">
                                                <i class="ri-facebook-fill"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a target="_blank" href="https://linkedin.com">
                                                <i class="ri-linkedin-fill"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a target="_blank" href="https://twitter.com">
                                                <i class="ri-twitter-fill"></i>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Lightgallery from 'lightgallery/vue';
import lgZoom from 'lightgallery/plugins/zoom';
let lightGallery= null;

export default {
    name: 'ProjectDetails',
    components: {
        Lightgallery,
    },
    watch: {
        items() {
            this.$nextTick(() => {
                lightGallery.refresh();
            });
        },
    },
    data: () => ({
        plugins: [lgZoom],
        items: [
            {
                id: '1',
                src: require('../../assets/images/project/single-project-1.jpg'),
                thumb: require('../../assets/images/project/single-project-1.jpg'),
            },
        ],
    }),
    methods: {
        onInit: (detail) => {
            lightGallery = detail.instance;
        },
        onBeforeSlide: () => {
            console.log('calling before slide');
        },
    },
};
</script>
<style lang="css">
@import url('https://cdn.jsdelivr.net/npm/lightgallery@2.1.0-beta.1/css/lightgallery.css');
@import url('https://cdn.jsdelivr.net/npm/lightgallery@2.1.0-beta.1/css/lg-zoom.css');
</style>