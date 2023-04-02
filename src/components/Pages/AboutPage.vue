<template>
    <div class="page-wrapper">
        <Navbar class="style1" />
        <div class="content-wrapper">
            <PageTitle pageTitle="About Us" />
            <SmartBanking />
            <GoalSettings />
        </div>
        <Footer />
    </div>
</template>

<script>
import Navbar from '../Layouts/Navbar'
import PageTitle from '../Common/PageTitle'
import SmartBanking from '../About/SmartBanking'
import Services from '../About/Services'
import OnlineShopping from '../About/OnlineShopping'
import GoalSettings from '../About/GoalSettings'
import Testimonials from '../About/Testimonials'
import BankingSecurity from '../About/BankingSecurity'
import Footer from '../Layouts/Footer'

export default {
    name: 'AboutPage',
    components: {
        Navbar,
        PageTitle,
        SmartBanking,
        Services,
        OnlineShopping,
        GoalSettings,
        Testimonials,
        BankingSecurity,
        Footer,
    }
}
</script>