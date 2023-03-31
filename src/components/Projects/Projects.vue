<template>
    <div class="project-wrap ptb-100">
        <div class="container">
            <lightgallery
                :settings="{ speed: 500, plugins: plugins }"
                :onInit="onInit"
                :onBeforeSlide="onBeforeSlide"
                class="row"
            >
                <a
                    v-for="item in items"
                    :key="item.id"
                    :data-lg-size="item.size"
                    className="gallery-item"
                    :data-src="item.src"
                    class="col-xl-4 col-lg-6 col-md-6"
                >
                    <div class="project-card">
                        <img className="img-responsive" :src="item.thumb" />
                        <div class="project-info">
                            <a class="project-gallery" data-fancybox="gallery" :href="item.thumb">
                                <i class="ri-add-line"></i>
                            </a>
                            <h3><router-link to="/project-details">{{item.title}}</router-link></h3>
                        </div>
                    </div>
                </a>
            </lightgallery>
            <ul class="page-nav list-style mt-20">
                <li><a href="/projects"><i class="flaticon-back"></i></a></li>
                <li><a class="active" href="/projects">1</a></li>
                <li><a href="/projects">2</a></li>
                <li><a href="/projects">3</a></li>
                <li><a href="/projects"><i class="flaticon-next-1"></i></a></li>
            </ul>
        </div>
    </div>
</template>

<script>
import Lightgallery from 'lightgallery/vue';
import lgZoom from 'lightgallery/plugins/zoom';
let lightGallery= null;

export default {
    name: 'Projects',
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
                src: require('../../assets/images/project/project-1.jpg'),
                thumb: require('../../assets/images/project/project-1.jpg'),
                title: 'Financial Loan'
            },
            {
                id: '2',
                src: require('../../assets/images/project/project-2.jpg'),
                thumb: require('../../assets/images/project/project-2.jpg'),
                title: 'Mobile Banking'
            },
            {
                id: '3',
                src: require('../../assets/images/project/project-3.jpg'),
                thumb: require('../../assets/images/project/project-3.jpg'),
                title: 'Online payment'
            },
            {
                id: '4',
                src: require('../../assets/images/project/project-4.jpg'),
                thumb: require('../../assets/images/project/project-4.jpg'),
                title: 'Tax Processing'
            },
            {
                id: '5',
                src: require('../../assets/images/project/project-5.jpg'),
                thumb: require('../../assets/images/project/project-5.jpg'),
                title: 'Home Loan'
            },
            {
                id: '6',
                src: require('../../assets/images/project/project-6.jpg'),
                thumb: require('../../assets/images/project/project-6.jpg'),
                title: 'Budget Planning'
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