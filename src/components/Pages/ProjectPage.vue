<template>
    <div class="page-wrapper">
        <Navbar class="style1" />
        <div class="content-wrapper">
            <PageTitle pageTitle="Project" />
            <Projects />
        </div>
        <Footer />
    </div>
</template>

<script>
import Navbar from '../Layouts/Navbar'
import PageTitle from '../Common/PageTitle'
import Projects from '../Projects/Projects'
import Footer from '../Layouts/Footer'

export default {
    name: 'ProjectPage',
    components: {
        Navbar,
        PageTitle,
        Projects,
        Footer,
    }
}
</script>