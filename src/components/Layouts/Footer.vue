<template>
  <footer class="footer-wrap bg-rock">
    <div class="container">
      <img
        src="../../assets/images/footer-shape-1.png"
        alt="Image"
        class="footer-shape-one"
      />
      <img
        src="../../assets/images/footer-shape-2.png"
        alt="Image"
        class="footer-shape-two"
      />
      <div class="row pt-100 pb-75">
        <div class="col-xl-4 col-lg-4 col-md-6 col-sm-6">
          <div class="footer-widget">
            <router-link to="/" class="footer-logo">
              <img src="../../assets/images/logo-white.png" alt="Image" />
            </router-link>
            <p class="comp-desc">
              We are a company regulated and supervised by the SFC Financial Conduct Authority operating within the regulatory framework as digital asset management.
              <br>Divisy operates as a digital asset exchange service provider and cryptoasset exchange platform.
            </p>
            <div class="social-link">
              <ul class="social-profile list-style style1">
                <li>
                  <a target="_blank" href="https://facebook.com">
                    <i class="ri-facebook-fill"></i>
                  </a>
                </li>
                <li>
                  <a target="_blank" href="https://twitter.com">
                    <i class="ri-twitter-fill"></i>
                  </a>
                </li>
                <li>
                  <a target="_blank" href="https://linkedin.com">
                    <i class="ri-linkedin-fill"></i>
                  </a>
                </li>
                <li>
                  <a target="_blank" href="https://instagram.com">
                    <i class="ri-pinterest-fill"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="col-xl-3 col-lg-3 col-md-6 col-sm-6">
          <div class="footer-widget">
            <h3 class="footer-widget-title">Our Company</h3>
            <ul class="footer-menu list-style">
              <!--<li>
                <router-link to="/about">
                  <i class="flaticon-next"></i>
                  Company &amp; Team
                </router-link>
              </li>-->
              <li>
                <router-link to="/service-details">
                  <i class="flaticon-next"></i>
                  Our Services
                </router-link>
              </li>
              <!--<li>
                <router-link to="/team">
                  <i class="flaticon-next"></i>
                  News &amp; Blog
                </router-link>
              </li>-->
              <!--<li>
                <router-link to="/pricing">
                  <i class="flaticon-next"></i>
                  Pricing Plan
                </router-link>
              </li>-->
              <li>
                <router-link to="/contact">
                  <i class="flaticon-next"></i>
                  Contact Us
                </router-link>
              </li>
              <!--<li>
                <router-link to="/privacy-policy">
                  <i class="flaticon-next"></i>
                  Privacy Policy
                </router-link>
              </li>-->
            </ul>
          </div>
        </div>
        <!--<div class="col-xl-2 col-lg-2 col-md-6 col-sm-6">
          <div class="footer-widget">
            <h3 class="footer-widget-title">Products</h3>
            <ul class="footer-menu list-style">
              <li>
                <router-link to="/services">
                  <i class="flaticon-next"></i>
                  Online Payment
                </router-link>
              </li>
              <li>
                <router-link to="/services">
                  <i class="flaticon-next"></i>
                  Deposit Skim
                </router-link>
              </li>
              <li>
                <router-link to="/services">
                  <i class="flaticon-next"></i>
                  Online Shopping
                </router-link>
              </li>
              <li>
                <router-link to="/services">
                  <i class="flaticon-next"></i>
                  Master Card
                </router-link>
              </li>
              <li>
                <router-link to="/services">
                  <i class="flaticon-next"></i>
                  Receive Money
                </router-link>
              </li>
              <li>
                <router-link to="/services">
                  <i class="flaticon-next"></i>
                  Affiliate Program
                </router-link>
              </li>
            </ul>
          </div>
        </div>-->
        <div class="col-xl-3 col-lg-3 col-md-6 col-sm-6">
          <div class="footer-widget">
            <h3 class="footer-widget-title">Subscribe</h3>
            <p class="newsletter-text">
              Join us:
            </p>
            <form @submit.prevent class="newsletter-form">
              <input type="email" placeholder="Your Email" />
              <button type="button">Subscribe</button>
            </form>
          </div>
        </div>
      </div>
    </div>
    <div class="copyright-text">
      <p>
        <i class="ri-copyright-line"></i>{{ currentYear }} Divisy. All Rights Reserved
      </p>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer",
  data() {
    return {
      currentYear: new Date().getFullYear(),
    };
  },
};
</script>
