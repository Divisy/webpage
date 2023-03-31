<template>
    <div class="page-wrapper">
        <Navbar class="style1" />
        <div class="content-wrapper">
            <PageTitle pageTitle="Blog Right Sidebar" />
            <BlogRightSidebar />
        </div>
        <Footer />
    </div>
</template>

<script>
import Navbar from '../Layouts/Navbar'
import PageTitle from '../Common/PageTitle'
import BlogRightSidebar from '../BlogRightSidebar/BlogRightSidebar'
import Footer from '../Layouts/Footer'

export default {
    name: 'BlogRightSidebarPage',
    components: {
        Navbar,
        PageTitle,
        BlogRightSidebar,
        Footer,
    }
}
</script>