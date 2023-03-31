<template>
    <div class="page-wrapper">
        <Navbar class="style1" />
        <div class="content-wrapper">
            <PageTitle pageTitle="Blog Details Left Sidebar" />
            <BlogDetailsLeftSidebar />
        </div>
        <Footer />
    </div>
</template>

<script>
import Navbar from '../Layouts/Navbar'
import PageTitle from '../Common/PageTitle'
import BlogDetailsLeftSidebar from '../BlogDetailsLeftSidebar/BlogDetailsLeftSidebar'
import Footer from '../Layouts/Footer'

export default {
    name: 'BlogDetailsLeftSidebarPage',
    components: {
        Navbar,
        PageTitle,
        BlogDetailsLeftSidebar,
        Footer,
    }
}
</script>