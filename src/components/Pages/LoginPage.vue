<template>
    <div class="page-wrapper">
        <Navbar class="style1" />
        <div class="content-wrapper">
            <PageTitle pageTitle="Login" />
            <Login />
        </div>
        <Footer />
    </div>
</template>

<script>
import Navbar from '../Layouts/Navbar'
import PageTitle from '../Common/PageTitle'
import Login from '../Login/Login'
import Footer from '../Layouts/Footer'

export default {
    name: 'LoginPage',
    components: {
        Navbar,
        PageTitle,
        Login,
        Footer,
    }
}
</script>