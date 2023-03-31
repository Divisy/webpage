<template>
    <div class="page-wrapper">
        <Navbar class="style1" />
        <div class="content-wrapper">
            <PageTitle pageTitle="Blog Left Sidebar" />
            <BlogLeftSidebar />
        </div>
        <Footer />
    </div>
</template>

<script>
import Navbar from '../Layouts/Navbar'
import PageTitle from '../Common/PageTitle'
import BlogLeftSidebar from '../BlogLeftSidebar/BlogLeftSidebar'
import Footer from '../Layouts/Footer'

export default {
    name: 'BlogLeftSidebarPage',
    components: {
        Navbar,
        PageTitle,
        BlogLeftSidebar,
        Footer,
    }
}
</script>