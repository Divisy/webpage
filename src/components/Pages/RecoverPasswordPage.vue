<template>
    <div class="page-wrapper">
        <Navbar class="style1" />
        <div class="content-wrapper">
            <PageTitle pageTitle="Recover Password" />
            <RecoverPassword />
        </div>
        <Footer />
    </div>
</template>

<script>
import Navbar from '../Layouts/Navbar'
import PageTitle from '../Common/PageTitle'
import RecoverPassword from '../RecoverPassword/RecoverPassword'
import Footer from '../Layouts/Footer'

export default {
    name: 'RecoverPasswordPage',
    components: {
        Navbar,
        PageTitle,
        RecoverPassword,
        Footer,
    }
}
</script>