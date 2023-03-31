<template>
    <div class="page-wrapper">
        <Navbar class="style1" />
        <div class="content-wrapper">
            <PageTitle pageTitle="Apply Loan" />
            <Apply />
        </div>
        <Footer />
    </div>
</template>

<script>
import Navbar from '../Layouts/Navbar'
import PageTitle from '../Common/PageTitle'
import Apply from '../Apply/Apply'
import Footer from '../Layouts/Footer'

export default {
    name: 'ApplyPage',
    components: {
        Navbar,
        PageTitle,
        Apply,
        Footer,
    }
}
</script>