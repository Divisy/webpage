<template>
    <div class="page-wrapper">
        <Navbar class="style1" />
        <div class="content-wrapper">
            <PageTitle pageTitle="Testimonials" />
            <Testimonials />
        </div>
        <Footer />
    </div>
</template>

<script>
import Navbar from '../Layouts/Navbar'
import PageTitle from '../Common/PageTitle'
import Testimonials from '../Testimonials/Testimonials'
import Footer from '../Layouts/Footer'

export default {
    name: 'TestimonialsPage',
    components: {
        Navbar,
        PageTitle,
        Testimonials,
        Footer,
    }
}
</script>