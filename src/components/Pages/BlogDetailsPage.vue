<template>
    <div class="page-wrapper">
        <Navbar class="style1" />
        <div class="content-wrapper">
            <PageTitle pageTitle="Blog Details" />
            <BlogDetails />
        </div>
        <Footer />
    </div>
</template>

<script>
import Navbar from '../Layouts/Navbar'
import PageTitle from '../Common/PageTitle'
import BlogDetails from '../BlogDetails/BlogDetails'
import Footer from '../Layouts/Footer'

export default {
    name: 'BlogDetailsPage',
    components: {
        Navbar,
        PageTitle,
        BlogDetails,
        Footer,
    }
}
</script>