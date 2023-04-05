<template>
  <div class="service-details-wrap ptb-100">
    <div class="container">
      <div class="row gx-5">
        <div class="col-xl-8 col-lg-12">
          <div class="service-desc">
            <lightgallery
              :settings="{ speed: 500, plugins: plugins }"
              :onInit="onInit"
              :onBeforeSlide="onBeforeSlide"
            >
              <a
                v-for="item in items"
                :key="item.id"
                :data-lg-size="item.size"
                :data-src="item.src"
              >
                <div class="service-img mb-25 d-block">
                  <img className="img-responsive" :src="item.thumb" />
                </div>
              </a>
            </lightgallery>
            <h2>Exchange cryptocurrencies</h2>
            <p>
              Welcome to our stablecoin exchange service! We offer a safe and reliable way to exchange your stablecoin cryptocurrencies such as USDT and USDC with competitive rates.
            </p>
            <p>
              Our stablecoin exchange service offers the best rates on the market. To exchange stablecoins, contact us with your request and we'll provide you with a quote based on the current market rates and the amount you wish to exchange. Once you agree with the quote, send the stablecoin to our designated wallet address and we'll send the exchanged stablecoin to your designated wallet address. Our service is fast, efficient, and secure, with most transactions completed within a few hours. 
            </p>
            <h2>Foreign Currency Transfers</h2>
            <p>
              Our platform provides a fast, secure, and cost-effective way to send money globally. Whether you need to send money to family and friends or make business payments, our platform makes it easy and convenient.
            </p>
            <p>
              Divisy offers the following steps: Sign up, complete verification, add funds using the indicated payment method, send money from Colombia to Spain, the receiver would have the money via transfer bank. The platform offers competitive exchange rates and low fees.
            </p>
            <h2>Digital Asset Management</h2>
            <p>
              Our digital assets management service provides a comprehensive solution for individuals and businesses looking to manage their digital assets. 
            </p>
            <p>
              We offer a range of services includes portfolio management, reporting and analytics, and tax reporting. We create customized portfolios, offer real-time insights into your portfolio, and assist with tax compliance. We provide top-notch customer service and support to help you make informed decisions about your digital assets.
            </p>
            <h2>NFT Marketplace</h2>
            <p>
              Our service offers investors the opportunity to invest in the fast-growing NFT marketplace industry. Our team of experts has extensive knowledge and experience in the NFT market and will help you create a customized investment plan that meets your specific goals and risk tolerance.
            </p>
            <ul class="content-feature-list style2 list-style">
              <li><i class="ri-check-line"></i>NFT Staking </li>
              <li><i class="ri-check-line"></i>Minimize risks</li>
              <li><i class="ri-check-line"></i>Maximize returns</li>
              <li><i class="ri-check-line"></i>Access to Exclusive NFTs</li>
            </ul>
            <p>
            </p>
            <h2>More Asked Question</h2>
            <div class="accordion" id="accordionExample">
              <div class="accordion-item">
                <h2 class="accordion-header" id="headingOne">
                  <button
                    class="accordion-button"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseOne"
                    aria-expanded="true"
                    aria-controls="collapseOne"
                  >
                    <span>
                      <i class="ri-arrow-down-s-line plus"></i>
                      <i class="ri-arrow-up-s-line minus"></i>
                    </span>
                    How do I get started with investing on Divisy?
                  </button>
                </h2>
                <div
                  id="collapseOne"
                  class="accordion-collapse collapse show"
                  aria-labelledby="headingOne"
                  data-bs-parent="#accordionExample"
                >
                  <div class="accordion-body">
                    <div class="single-product-text">
                      <p>
                        To get started with investing on Divisy, you will need to sign up for an account on the platform, complete the verification process, and schedule a meeting with one of our financial advisors in order to build an investment plan. Once you have funds in your account, you can start benefiting from the profit generated with Divisy.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header" id="headingTwo">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseTwo"
                    aria-expanded="false"
                    aria-controls="collapseTwo"
                  >
                    <span>
                      <i class="ri-arrow-down-s-line plus"></i>
                      <i class="ri-arrow-up-s-line minus"></i>
                    </span>
                    Is investing on Divisy safe?
                  </button>
                </h2>
                <div
                  id="collapseTwo"
                  class="accordion-collapse collapse"
                  aria-labelledby="headingTwo"
                  data-bs-parent="#accordionExample"
                >
                  <div class="accordion-body">
                    <p>
                      Investing in Divisy is safe due to its regulation in multiple jurisdictions and strong reputation in the industry. Additionally, Divisy has robust security measures such as two-factor authentication and KYC (Know Your Customer). It also offers insurance protection for users' funds, further enhancing the safety of investing.
                    </p>
                  </div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header" id="headingThree">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseThree"
                    aria-expanded="false"
                    aria-controls="collapseThree"
                  >
                    <span>
                      <i class="ri-arrow-down-s-line plus"></i>
                      <i class="ri-arrow-up-s-line minus"></i>
                    </span>
                    What fees should I expect when investing on Divisy?
                  </button>
                </h2>
                <div
                  id="collapseThree"
                  class="accordion-collapse collapse"
                  aria-labelledby="headingThree"
                  data-bs-parent="#accordionExample"
                >
                  <div class="accordion-body">
                    <p>
                     Divisy charges commissions for the service it provides when exchanging stablecoins for fiat.
                     <br>It assumes a risk when buying and selling currencies due to fluctuations in the market prices. Additionally, it incurs operating costs such as website maintenance and infrastructure required for providing our services. Therefore, the commissions charged cover these costs and generate profits. However, the commissions generated are lower than the returns that can be generated by investing in our platform.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-xl-4 col-lg-12">
          <div class="sidebar">
            <div class="sidebar-widget style2">
              <h4>All Services</h4>
              <div class="category-box style2">
                <ul class="list-style">
                  <li>
                    <router-link to="/service-details">
                      Exchange cryptocurrencies
                      <span><i class="flaticon-next"></i></span>
                    </router-link>
                  </li>
                  <li>
                    <router-link to="/service-details">
                      Foreign Currency Transfers
                      <span><i class="flaticon-next"></i></span>
                    </router-link>
                  </li>
                  <li>
                    <router-link to="/service-details">
                      Digital Asset Management
                      <span><i class="flaticon-next"></i></span>
                    </router-link>
                  </li>
                  <li>
                    <router-link to="/service-details">
                      NFT Marketplace
                      <span><i class="flaticon-next"></i></span>
                    </router-link>
                  </li>
                </ul>
              </div>
            </div>
            <div class="sidebar-widget style2">
              <h4>Business Hours</h4>
              <div class="schedule-widget">
                <ul class="list-style">
                  <li>
                    <h6>Mon-Fri</h6>
                    <p>10:00 AM - 6:00 PM</p>
                  </li>
                  <li>
                    <h6>Weekend</h6>
                    <p>Closed</p>
                  </li>
                </ul>
              </div>
            </div>
            <div class="sidebar-widget style3">
              <div class="contact-widget-form">
                <div class="overlay op-95 bg-rock"></div>
                <h4>Let's Talk!</h4>
                <form @submit.prevent>
                  <div class="form-group">
                    <input type="text" placeholder="Name" />
                  </div>
                  <div class="form-group">
                    <input type="email" placeholder="Email" />
                  </div>
                  <div class="form-group">
                    <input type="phone" placeholder="Phone" />
                  </div>
                  <div class="form-group">
                    <textarea
                      name="msg"
                      id="msg"
                      cols="30"
                      rows="10"
                      placeholder="Message"
                    ></textarea>
                  </div>
                  <button class="btn style1 d-block w-100" type="submit">
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Lightgallery from "lightgallery/vue";
import lgZoom from "lightgallery/plugins/zoom";
let lightGallery = null;

export default {
  name: "ServicesDetails",
  components: {
    Lightgallery,
  },
  watch: {
    items() {
      this.$nextTick(() => {
        lightGallery.refresh();
      });
    },
  },
  data: () => ({
    plugins: [lgZoom],
    items: [
      {
        id: "1",
        src: require("../../assets/images/service/single-service-1.jpg"),
        thumb: require("../../assets/images/service/single-service-1.jpg"),
      },
    ],
  }),
  methods: {
    onInit: (detail) => {
      lightGallery = detail.instance;
    },
    onBeforeSlide: () => {
      console.log("calling before slide");
    },
  },
};
</script>
<style lang="css">
@import url("https://cdn.jsdelivr.net/npm/lightgallery@2.1.0-beta.1/css/lightgallery.css");
@import url("https://cdn.jsdelivr.net/npm/lightgallery@2.1.0-beta.1/css/lg-zoom.css");
</style>
