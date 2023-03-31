<template>
    <div class="page-wrapper">
        <Navbar class="style1" />
        <div class="content-wrapper">
            <PageTitle pageTitle="Register" />
            <Register />
        </div>
        <Footer />
    </div>
</template>

<script>
import Navbar from '../Layouts/Navbar'
import PageTitle from '../Common/PageTitle'
import Register from '../Register/Register'
import Footer from '../Layouts/Footer'

export default {
    name: 'RegisterPage',
    components: {
        Navbar,
        PageTitle,
        Register,
        Footer,
    }
}
</script>