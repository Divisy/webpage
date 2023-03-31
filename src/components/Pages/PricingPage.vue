<template>
    <div class="page-wrapper">
        <Navbar class="style1" />
        <div class="content-wrapper">
            <PageTitle pageTitle="Pricing Plan" />
            <Pricing />
        </div>
        <Footer />
    </div>
</template>

<script>
import Navbar from '../Layouts/Navbar'
import PageTitle from '../Common/PageTitle'
import Pricing from '../Pricing/Pricing'
import Footer from '../Layouts/Footer'

export default {
    name: 'PricingPage',
    components: {
        Navbar,
        PageTitle,
        Pricing,
        Footer,
    }
}
</script>