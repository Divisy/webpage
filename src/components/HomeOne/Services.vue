<template>
  <div class="service-wrap style3 ptb-100 bg-rock">
    <div class="container">
      <img
        src="../../assets/images/service-shape-1.png"
        alt="Image"
        class="service-shape-one"
      />
      <img
        src="../../assets/images/service-shape-2.png"
        alt="Image"
        class="service-shape-two"
      />
      <div class="section-title style1 text-center mb-40">
        <span>Our Services</span>
        <h2 class="text-white">Our Platform Provides you:</h2>
      </div>
      <div class="row gx-5 align-items-center">
        <div class="col-md-6">
          <div class="service-card style3">
            <span class="service-icon">
              <i class="flaticon-payment-method"></i>
            </span>
            <div class="service-info">
              <h3>
                <router-link to="/service-details">Exchange cryptocurrencies</router-link>
              </h3>
              <p>
                Maximize the stability of your cryptocurrency portfolio with our top-quality stablecoins such as USDT, providing you with a reliable and secure way to hold your assets.
              </p>
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <div class="service-card style3">
            <span class="service-icon">
              <i class="flaticon-computer"></i>
            </span>
            <div class="service-info">
              <h3>
                <router-link to="/service-details">Digital Asset Management</router-link>
              </h3>
              <p>
                Take control of your portfolio with our customizable services. Whether you're a new or experienced investor, our platform offers a personalized support to help you achieve your financial goals.
              </p>
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <div class="service-card style3">
            <span class="service-icon">
              <i class="flaticon-credit-card"></i>
            </span>
            <div class="service-info">
              <h3>
                <router-link to="/service-details">Foreign Currency Transfers </router-link>
              </h3>
              <p>
                Fast, secure, and hassle-free way to send and receive money across borders with our cutting-edge remittance platform who provides you with an affordable way to transfer funds internationally.
              </p>
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <div class="service-card style3">
            <span class="service-icon">
              <i class="flaticon-loan-1"></i>
            </span>
            <div class="service-info">
              <h3>
                <router-link to="/service-details"
                  >NFT Marketplace</router-link
                >
              </h3>
              <p>
                Discover the exciting world of NFTs, featuring a wide range of unique and collectible digital assets for all budgets, our platform offers a seamless experience for buying, selling, and trading NFTs.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="text-center mt-20">
        <router-link to="/service-details" class="btn style1"
          >View All Services</router-link
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Services",
};
</script>
