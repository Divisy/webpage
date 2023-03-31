<template>
    <div class="simple-wrap style2 pb-100 bg-stratos">
        <img src="../../assets/images/section-shape-2.png" alt="Image" class="section-shape-two">
        <div class="container">
            <div class="row gx-5 align-items-center">
                <div class="col-lg-6 col-12">
                    <div class="simple-img-wrap">
                        <img src="../../assets/images/about/simple-shape-1.png" alt="Image" class="simple-shape-one bounce">
                        <img src="../../assets/images/about/simple-shape-2.png" alt="Image" class="simple-shape-two moveHorizontal">
                        <img src="../../assets/images/about/simple-img-2.png" alt="Image">
                    </div>
                </div>
                <div class="col-lg-6 col-12">
                    <div class="simple-content">
                        <img src="../../assets/images/about/simple-shape-3.png" alt="Image" class="simple-shape-three bounce">
                        <div class="content-title style2">
                            <span>Protect Your Money</span>
                            <h2>We Do Our Best To Keep Customer's Money Safe</h2>
                            <p>There are many variations of passages of Lorem Ipsum amet avoilble but majority have suffered alteration in some form, by injected humur or randomise words which don't sure amet sit dolor quras alto lorem.</p>
                        </div>
                        <ul class="content-feature-list list-style">
                            <li><i class="ri-checkbox-multiple-fill"></i>Security In Bank Level</li>
                            <li><i class="ri-checkbox-multiple-fill"></i>Investments Best In Class</li>
                            <li><i class="ri-checkbox-multiple-fill"></i>Secure Watch Asset</li>
                            <li><i class="ri-checkbox-multiple-fill"></i>Address Information</li>
                            <li><i class="ri-checkbox-multiple-fill"></i>Personal Details</li>
                            <li><i class="ri-checkbox-multiple-fill"></i>Identification</li>
                        </ul>
                        <router-link to="/register" class="btn style1">Create Account</router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ProtectMoney'
}
</script>