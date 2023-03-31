<template>
    <div class="page-wrapper">
        <Navbar class="style1" />
        <div class="content-wrapper">
            <PageTitle pageTitle="Service Details" />
            <ServicesDetails />
        </div>
        <Footer />
    </div>
</template>

<script>
import Navbar from '../Layouts/Navbar'
import PageTitle from '../Common/PageTitle'
import ServicesDetails from '../ServicesDetails/ServicesDetails'
import Footer from '../Layouts/Footer'

export default {
    name: 'ServicesDetailsPage',
    components: {
        Navbar,
        PageTitle,
        ServicesDetails,
        Footer,
    }
}
</script>