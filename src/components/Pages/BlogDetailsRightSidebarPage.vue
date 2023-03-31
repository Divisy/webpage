<template>
    <div class="page-wrapper">
        <Navbar class="style1" />
        <div class="content-wrapper">
            <PageTitle pageTitle="Blog Details Right  Sidebar" />
            <BlogDetailsRightSidebar />
        </div>
        <Footer />
    </div>
</template>

<script>
import Navbar from '../Layouts/Navbar'
import PageTitle from '../Common/PageTitle'
import BlogDetailsRightSidebar from '../BlogDetailsRightSidebar/BlogDetailsRightSidebar'
import Footer from '../Layouts/Footer'

export default {
    name: 'BlogDetailsRightSidebarPage',
    components: {
        Navbar,
        PageTitle,
        BlogDetailsRightSidebar,
        Footer,
    }
}
</script>