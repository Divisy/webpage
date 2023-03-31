<template>
    <div class="blog-wrap ptb-100">
        <div class="container">
            <div class="row gx-5">
                <div class="col-xl-4 col-lg-12 order-xl-1 order-lg-2 order-md-2 order-2">
                    <BlogSidebar />
                </div>
                <div class="col-xl-8 col-lg-12 order-xl-2 order-lg-1 order-md-1 order-1">
                    <div class="row justify-content-center">
                        <div class="col-lg-6 col-md-6">
                            <div class="blog-card style1">
                                <div class="blog-img">
                                    <img src="../../assets/images/blog/blog-1.jpg" alt="Image">
                                </div>
                                <div class="blog-info">
                                    
                                    <ul class="blog-metainfo  list-style">
                                        <li><i class="flaticon-user"></i> <router-link to="/blog">Reanne Carnation</router-link></li>
                                        <li><i class="flaticon-calendar"></i>02 Jan, 2022</li>
                                    </ul>
                                    <h3><router-link to="blog-details-left-sidebar">5 Things To Know About Your Online Banking</router-link></h3>
                                    <router-link to="blog-details-left-sidebar" class="link style1">Read More
                                        <i class="flaticon-right-arrow"></i>
                                    </router-link>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-6 col-md-6" >
                            <div class="blog-card style1">
                                <div class="blog-img">
                                    <img src="../../assets/images/blog/blog-2.jpg" alt="Image">
                                </div>
                                <div class="blog-info">
                                    <ul class="blog-metainfo  list-style">
                                        <li><i class="flaticon-user"></i> <router-link to="/blog">Phil Heath</router-link></li>
                                        <li><i class="flaticon-calendar"></i>12 Dec, 2021</li>
                                    </ul>
                                    <h3><router-link to="blog-details-left-sidebar">Tips For Saving Money &amp; Better Investment Policy</router-link></h3>
                                    <router-link to="blog-details-left-sidebar" class="link style1">Read More
                                        <i class="flaticon-right-arrow"></i>
                                    </router-link>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-6 col-md-6" >
                            <div class="blog-card style1">
                                <div class="blog-img">
                                    <img src="../../assets/images/blog/blog-8.jpg" alt="Image">
                                </div>
                                <div class="blog-info">
                                    <ul class="blog-metainfo  list-style">
                                        <li><i class="flaticon-user"></i><router-link to="/blog">Phil Heath</router-link></li>
                                        <li><i class="flaticon-calendar"></i>12 Dec, 2021</li>
                                    </ul>
                                    <h3><router-link to="blog-details-left-sidebar">The Fedaral Bank Appoints New Director To Board</router-link></h3>

                                    <router-link to="blog-details-left-sidebar" class="link style1">Read More
                                        <i class="flaticon-right-arrow"></i>
                                    </router-link>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-6 col-md-6">
                            <div class="blog-card style1">
                                <div class="blog-img">
                                    <img src="../../assets/images/blog/blog-7.jpg" alt="Image">
                                </div>
                                <div class="blog-info">
                                    
                                    <ul class="blog-metainfo  list-style">
                                        <li><i class="flaticon-user"></i> <router-link to="/blog">Reanne Carnation</router-link></li>
                                        <li><i class="flaticon-calendar"></i>02 Jan, 2022</li>
                                    </ul>
                                    <h3><router-link to="blog-details-left-sidebar">15 Tips For Every Startup To Be Successful</router-link></h3>
                                    <router-link to="blog-details-left-sidebar" class="link style1">Read More
                                        <i class="flaticon-right-arrow"></i>
                                    </router-link>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-6 col-md-6" >
                            <div class="blog-card style1">
                                <div class="blog-img">
                                    <img src="../../assets/images/blog/blog-3.jpg" alt="Image">
                                </div>
                                <div class="blog-info">
                                    <ul class="blog-metainfo  list-style">
                                        <li><i class="flaticon-user"></i> <router-link to="/blog">Phil Heath</router-link></li>
                                        <li><i class="flaticon-calendar"></i>12 Dec, 2021</li>
                                    </ul>
                                    <h3><router-link to="blog-details-left-sidebar">What Consumer Expect From Commercial Loan</router-link></h3>
                                    <router-link to="blog-details-left-sidebar" class="link style1">Read More
                                        <i class="flaticon-right-arrow"></i>
                                    </router-link>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-6 col-md-6" >
                            <div class="blog-card style1">
                                <div class="blog-img">
                                    <img src="../../assets/images/blog/blog-9.jpg" alt="Image">
                                </div>
                                <div class="blog-info">
                                    <ul class="blog-metainfo  list-style">
                                        <li><i class="flaticon-user"></i><router-link to="/blog">Phil Heath</router-link></li>
                                        <li><i class="flaticon-calendar"></i>12 Dec, 2021</li>
                                    </ul>
                                    <h3><router-link to="blog-details-left-sidebar">NSI Bank Will Close Their ATM From Tomorrow</router-link></h3>
                                    <router-link to="blog-details-left-sidebar" class="link style1">Read More
                                        <i class="flaticon-right-arrow"></i>
                                    </router-link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <ul class="page-nav list-style mt-10">
                        <li><a href="/blog-left-sidebar"><i class="flaticon-back"></i></a></li>
                        <li><a class="active" href="/blog-left-sidebar">1</a></li>
                        <li><a href="/blog-left-sidebar">2</a></li>
                        <li><a href="/blog-left-sidebar">3</a></li>
                        <li><a href="/blog-left-sidebar"><i class="flaticon-next-1"></i></a></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import BlogSidebar from '../Common/BlogSidebar'

export default {
    name: 'BlogLeftSidebar',
    components: {
        BlogSidebar
    }
}
</script>