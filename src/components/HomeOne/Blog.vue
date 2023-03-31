<template>
    <div class="blog-wrap pt-100 pb-75 bg-albastor">
        <div class="container">
            <div class="section-title style1 text-center mb-40">
                <span>Latest Insights From Ruxa</span>
                <h2>Our Latest Articles</h2>
            </div>
            <div class="row justify-content-center">
                <div class="col-xl-4 col-lg-6 col-md-6">
                    <div class="blog-card style1">
                        <div class="blog-img">
                            <img src="../../assets/images/blog/blog-1.jpg" alt="Image">
                        </div>
                        <div class="blog-info">
                            
                            <ul class="blog-metainfo  list-style">
                                <li><i class="flaticon-user"></i> <router-link to="/posts-by-author">Reanne Carnation</router-link></li>
                                <li><i class="flaticon-calendar"></i>02 Jan, 2022</li>
                            </ul>
                            <h3><router-link to="/blog-details-right-sidebar">5 Things To Know About Your Online Banking</router-link></h3>
                            <router-link to="/blog-details-right-sidebar" class="link style1">Read More
                                <i class="flaticon-right-arrow"></i>
                            </router-link>
                        </div>
                    </div>
                </div>
                <div class="col-xl-4 col-lg-6 col-md-6" >
                    <div class="blog-card style1">
                        <div class="blog-img">
                            <img src="../../assets/images/blog/blog-2.jpg" alt="Image">
                        </div>
                        <div class="blog-info">
                            <ul class="blog-metainfo  list-style">
                                <li><i class="flaticon-user"></i> <router-link to="/posts-by-author">Phil Heath</router-link></li>
                                <li><i class="flaticon-calendar"></i>12 Dec, 2021</li>
                            </ul>
                            <h3><router-link to="/blog-details-right-sidebar">Tips For Saving Money &amp; Better Investment Policy</router-link></h3>
                            <router-link to="/blog-details-right-sidebar" class="link style1">Read More
                                <i class="flaticon-right-arrow"></i>
                            </router-link>
                        </div>
                    </div>
                </div>
                <div class="col-xl-4 col-lg-6 col-md-6" >
                    <div class="blog-card style1">
                        <div class="blog-img">
                            <img src="../../assets/images/blog/blog-3.jpg" alt="Image">
                        </div>
                        <div class="blog-info">
                            <ul class="blog-metainfo  list-style">
                                <li><i class="flaticon-user"></i><router-link to="/posts-by-author">Phil Heath</router-link></li>
                                <li><i class="flaticon-calendar"></i>12 Dec, 2021</li>
                            </ul>
                            <h3><router-link to="/blog-details-right-sidebar">The Fedaral Bank Appoints New Director To The Board</router-link></h3>

                            <router-link to="/blog-details-right-sidebar" class="link style1">Read More
                                <i class="flaticon-right-arrow"></i>
                            </router-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Blog'
}
</script>