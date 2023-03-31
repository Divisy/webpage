<template>
    <div class="page-wrapper">
        <Navbar class="style1" />
        <MainBanner />
        <SmartBanking />
        <Feature />
        <BankingSecurity />
        <Services />
        <AppDownload />
        <Testimonials />
        <PricingPlan />
        <ContactUs />
        <Blog />
        <Footer />
    </div>
</template>

<script>
import Navbar from '../Layouts/Navbar'
import MainBanner from '../HomeThree/MainBanner'
import SmartBanking from '../HomeThree/SmartBanking'
import Feature from '../HomeThree/Feature'
import BankingSecurity from '../HomeThree/BankingSecurity'
import Services from '../HomeThree/Services'
import AppDownload from '../HomeThree/AppDownload'
import Testimonials from '../HomeThree/Testimonials'
import PricingPlan from '../HomeThree/PricingPlan'
import ContactUs from '../HomeThree/ContactUs'
import Blog from '../HomeThree/Blog'
import Footer from '../Layouts/Footer'

export default {
    name: 'HomeThreePage',
    components: {
        Navbar,
        MainBanner,
        SmartBanking,
        Feature,
        BankingSecurity,
        Services,
        AppDownload,
        Testimonials,
        PricingPlan,
        ContactUs,
        Blog,
        Footer,
    }
}
</script>