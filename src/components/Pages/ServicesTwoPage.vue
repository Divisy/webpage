<template>
    <div class="page-wrapper">
        <Navbar class="style1" />
        <div class="content-wrapper">
            <PageTitle pageTitle="Services" />
            <Services />
        </div>
        <Footer />
    </div>
</template>

<script>
import Navbar from '../Layouts/Navbar'
import PageTitle from '../Common/PageTitle'
import Services from '../ServicesTwo/Services'
import Footer from '../Layouts/Footer'

export default {
    name: 'ServicesTwoPage',
    components: {
        Navbar,
        PageTitle,
        Services,
        Footer,
    }
}
</script>