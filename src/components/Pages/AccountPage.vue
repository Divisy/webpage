<template>
    <div class="page-wrapper">
        <Navbar class="style1" />
        <div class="content-wrapper">
            <PageTitle pageTitle="Open Account" />
            <Account />
        </div>
        <Footer />
    </div>
</template>

<script>
import Navbar from '../Layouts/Navbar'
import PageTitle from '../Common/PageTitle'
import Account from '../Account/Account'
import Footer from '../Layouts/Footer'

export default {
    name: 'AccountPage',
    components: {
        Navbar,
        PageTitle,
        Account,
        Footer,
    }
}
</script>