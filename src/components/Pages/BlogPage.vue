<template>
    <div class="page-wrapper">
        <Navbar class="style1" />
        <div class="content-wrapper">
            <PageTitle pageTitle="Blog Grid" />
            <Blog />
        </div>
        <Footer />
    </div>
</template>

<script>
import Navbar from '../Layouts/Navbar'
import PageTitle from '../Common/PageTitle'
import Blog from '../Blog/Blog'
import Footer from '../Layouts/Footer'

export default {
    name: 'BlogPage',
    components: {
        Navbar,
        PageTitle,
        Blog,
        Footer,
    }
}
</script>