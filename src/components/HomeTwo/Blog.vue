<template>
    <div class="blog-wrap pt-100 pb-75 bg-alco">
        <div class="container">
            <div class="section-title style1 text-center mb-40">
                <span>Latest Insights From Ruxa</span>
                <h2 class="text-white">Our Latest Articles</h2>
            </div>
            <div class="row justify-content-center">
                <div class="col-xl-4 col-lg-6 col-md-6">
                    <div class="blog-card style2">
                        <div class="blog-img">
                            <img src="../../assets/images/blog/blog-4.jpg" alt="Image">
                        </div>
                        <div class="blog-info">
                            <ul class="blog-metainfo  list-style">
                                <li><i class="flaticon-user"></i> <a href="#">Admin</a></li>
                                <li><i class="flaticon-calendar"></i>12 Dec, 2021</li>
                                <li><i class="flaticon-chat-comment-oval-speech-bubble-with-text-lines"></i>2 Comment</li>
                            </ul>
                            <h3><router-link to="/blog-details-right-sidebar">Why You Should Open Bank Account To Pay Online</router-link></h3>
                        </div>
                    </div>
                </div>
                <div class="col-xl-4 col-lg-6 col-md-6" >
                    <div class="blog-card style2">
                        <div class="blog-img">
                            <img src="../../assets/images/blog/blog-5.jpg" alt="Image">
                        </div>
                        <div class="blog-info">
                            <ul class="blog-metainfo  list-style">
                                <li><i class="flaticon-user"></i> <a href="#">Admin</a></li>
                                <li><i class="flaticon-calendar"></i>12 Dec, 2021</li>
                                <li><i class="flaticon-chat-comment-oval-speech-bubble-with-text-lines"></i>2 Comment</li>
                            </ul>
                            <h3><router-link to="/blog-details-right-sidebar">The Benefits That We Get Through Credit Cards</router-link></h3>
                        </div>
                    </div>
                </div>
                <div class="col-xl-4 col-lg-6 col-md-6" >
                    <div class="blog-card style2">
                        <div class="blog-img">
                            <img src="../../assets/images/blog/blog-3.jpg" alt="Image">
                        </div>
                        <div class="blog-info">
                            <ul class="blog-metainfo  list-style">
                                <li><i class="flaticon-user"></i> <a href="#">Admin</a></li>
                                <li><i class="flaticon-calendar"></i>12 Dec, 2021</li>
                                <li><i class="flaticon-chat-comment-oval-speech-bubble-with-text-lines"></i>1 Comment</li>
                            </ul>
                            <h3><router-link to="/blog-details-right-sidebar">You Can Trust Me And Business With Together</router-link></h3>
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