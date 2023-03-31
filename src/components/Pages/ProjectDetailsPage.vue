<template>
    <div class="page-wrapper">
        <Navbar class="style1" />
        <div class="content-wrapper">
            <PageTitle pageTitle="Project Details" />
            <ProjectDetails />
        </div>
        <Footer />
    </div>
</template>

<script>
import Navbar from '../Layouts/Navbar'
import PageTitle from '../Common/PageTitle'
import ProjectDetails from '../ProjectDetails/ProjectDetails'
import Footer from '../Layouts/Footer'

export default {
    name: 'ProjectDetailsPage',
    components: {
        Navbar,
        PageTitle,
        ProjectDetails,
        Footer,
    }
}
</script>