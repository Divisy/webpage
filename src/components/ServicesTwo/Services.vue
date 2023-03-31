<template>
  <div class="service-wrap ptb-100">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-xl-4 col-lg-6 col-md-6">
          <div class="service-card style1">
            <span class="service-icon">
              <img
                src="../../assets/images/service/service-icon-1.png"
                alt="Image"
              />
            </span>
            <h3>
              <router-link to="/service-details"
                >Deadline Reminders</router-link
              >
            </h3>
            <p>
              Lorem ipsum dolor sit ametus situlo consec tetur adicingus
              elittque coris sapite illo sit.
            </p>
          </div>
        </div>
        <div class="col-xl-4 col-lg-6 col-md-6">
          <div class="service-card style1">
            <span class="service-icon">
              <img
                src="../../assets/images/service/service-icon-2.png"
                alt="Image"
              />
            </span>
            <h3>
              <router-link to="/service-details"
                >Drag Functionality</router-link
              >
            </h3>
            <p>
              Lorem ipsum dolor sit ametus situlo consec tetur adicingus
              elittque coris sapite illo sit.
            </p>
          </div>
        </div>
        <div class="col-xl-4 col-lg-6 col-md-6">
          <div class="service-card style1">
            <span class="service-icon">
              <img
                src="../../assets/images/service/service-icon-3.png"
                alt="Image"
              />
            </span>
            <h3>
              <router-link to="/service-details">Simple Dashboard</router-link>
            </h3>
            <p>
              Lorem ipsum dolor sit ametus situlo consec tetur adicingus
              elittque coris sapite illo sit.
            </p>
          </div>
        </div>
        <div class="col-xl-4 col-lg-6 col-md-6">
          <div class="service-card style1">
            <span class="service-icon">
              <img
                src="../../assets/images/service/service-icon-4.png"
                alt="Image"
              />
            </span>
            <h3>
              <router-link to="/service-details"
                >Email Notification</router-link
              >
            </h3>
            <p>
              Lorem ipsum dolor sit ametus situlo consec tetur adicingus
              elittque coris sapite illo sit.
            </p>
          </div>
        </div>
        <div class="col-xl-4 col-lg-6 col-md-6">
          <div class="service-card style1">
            <span class="service-icon">
              <img
                src="../../assets/images/service/service-icon-5.png"
                alt="Image"
              />
            </span>
            <h3>
              <router-link to="/service-details"
                >Secured Transaction</router-link
              >
            </h3>
            <p>
              Lorem ipsum dolor sit ametus situlo consec tetur adicingus
              elittque coris sapite illo sit.
            </p>
          </div>
        </div>
        <div class="col-xl-4 col-lg-6 col-md-6">
          <div class="service-card style1">
            <span class="service-icon">
              <img
                src="../../assets/images/service/service-icon-6.png"
                alt="Image"
              />
            </span>
            <h3>
              <router-link to="/service-details">Verified Account</router-link>
            </h3>
            <p>
              Lorem ipsum dolor sit ametus situlo consec tetur adicingus
              elittque coris sapite illo sit.
            </p>
          </div>
        </div>
      </div>
      <ul class="page-nav list-style mt-20">
        <li>
          <a href="/services"><i class="flaticon-back"></i></a>
        </li>
        <li><a class="active" href="/services">1</a></li>
        <li><a href="/services">2</a></li>
        <li><a href="/services">3</a></li>
        <li>
          <a href="/services"><i class="flaticon-next-1"></i></a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "Services",
};
</script>
