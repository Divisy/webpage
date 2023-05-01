<template>
    <Preloader v-if="isLoading" />
    <router-view v-slot="{ Component }">
        <transition 
            enter-active-class="animated fadeIn" 
            leave-active-class="animated fadeOut" 
            mode="out-in" 
            :duration="600" 
            @after-leave="$root.$emit('triggerScroll')"
        >
            <component :is="Component" />
        </transition>
    </router-view>
    <BackToTop />
</template>

<script>
import Preloader from './components/Layouts/Preloader'
import BackToTop from './components/Layouts/BackToTop'

export default {
    name: 'App',
    components: {
        Preloader,
        BackToTop,
    },
    data() {
        return {
            isLoading: true
        }
    },
    mounted() {
        setTimeout(() => {
            this.isLoading = false
        }, 2000)
    }
}
</script>
<!-- Google Tag Manager (noscript) -->
<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-MFBDR7G"
    height="0" width="0" style="display:none;visibility:hidden"></iframe>
</noscript>
<!-- End Google Tag Manager (noscript) -->