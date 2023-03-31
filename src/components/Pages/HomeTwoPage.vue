<template>
    <div class="page-wrapper">
        <Navbar class="style2" />
        <MainBanner />
        <Services />
        <PaymentPlatform />
        <Currency />
        <ProtectMoney />
        <FinancialPlanning />
        <GlobalFeatures />
        <ContactUs />
        <AppDownload />
        <Blog />
        <FooterStyleTwo />
    </div>
</template>

<script>
import Navbar from '../Layouts/Navbar'
import MainBanner from '../HomeTwo/MainBanner'
import Services from '../HomeTwo/Services'
import PaymentPlatform from '../HomeTwo/PaymentPlatform'
import Currency from '../HomeTwo/Currency'
import ProtectMoney from '../HomeTwo/ProtectMoney'
import FinancialPlanning from '../HomeTwo/FinancialPlanning'
import GlobalFeatures from '../HomeTwo/GlobalFeatures'
import ContactUs from '../HomeTwo/ContactUs'
import AppDownload from '../HomeTwo/AppDownload'
import Blog from '../HomeTwo/Blog'
import FooterStyleTwo from '../Layouts/FooterStyleTwo'

export default {
    name: 'HomeTwoPage',
    components: {
        Navbar,
        MainBanner,
        Services,
        PaymentPlatform,
        Currency,
        ProtectMoney,
        FinancialPlanning,
        GlobalFeatures,
        ContactUs,
        AppDownload,
        Blog,
        FooterStyleTwo,
    }
}
</script>