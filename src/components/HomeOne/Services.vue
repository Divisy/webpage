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
        <h2 class="text-white">Get Your Ruxa online Banking</h2>
      </div>
      <div class="row gx-5 align-items-center">
        <div class="col-md-6">
          <div class="service-card style3">
            <span class="service-icon">
              <i class="flaticon-payment-method"></i>
            </span>
            <div class="service-info">
              <h3>
                <router-link to="/service-details">Mobile Banking</router-link>
              </h3>
              <p>
                Is simply dummy text of the printing and setting type the
                industry's standard dummy text ever since then nowpri nter took
                a galley alto.
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
                <router-link to="/service-details">Secure Payment</router-link>
              </h3>
              <p>
                Is simply dummy text of the printing and setting type the
                industry's standard dummy text ever since then nowpri nter took
                a galley alto.
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
                <router-link to="/service-details">Saving Account</router-link>
              </h3>
              <p>
                Is simply dummy text of the printing and setting type the
                industry's standard dummy text ever since then nowpri nter took
                a galley alto.
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
                  >Personal Savings</router-link
                >
              </h3>
              <p>
                Is simply dummy text of the printing and setting type the
                industry's standard dummy text ever since then nowpri nter took
                a galley alto.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="text-center mt-20">
        <router-link to="/services" class="btn style1"
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
