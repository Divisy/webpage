<template>
    <div class="page-wrapper">
        <Navbar class="style1" />
        <div class="content-wrapper">
            <PageTitle pageTitle="Team" />
            <Team />
        </div>
        <Footer />
    </div>
</template>

<script>
import Navbar from '../Layouts/Navbar'
import PageTitle from '../Common/PageTitle'
import Team from '../Team/Team'
import Footer from '../Layouts/Footer'

export default {
    name: 'TeamPage',
    components: {
        Navbar,
        PageTitle,
        Team,
        Footer,
    }
}
</script>