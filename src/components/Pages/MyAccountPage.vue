<template>
    <div class="page-wrapper">
        <Navbar class="style1" />
        <div class="content-wrapper">
            <PageTitle pageTitle="My Account" />
            <MyAccount />
        </div>
        <Footer />
    </div>
</template>

<script>
import Navbar from '../Layouts/Navbar'
import PageTitle from '../Common/PageTitle'
import MyAccount from '../MyAccount/MyAccount'
import Footer from '../Layouts/Footer'

export default {
    name: 'MyAccountPage',
    components: {
        Navbar,
        PageTitle,
        MyAccount,
        Footer,
    }
}
</script>