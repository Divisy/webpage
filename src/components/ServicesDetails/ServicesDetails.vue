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
            <h2>Mobile Banking</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing, elit. Quasi,
              porro expedita dolores quas nesciunt repellat sed. Nostrum sunt
              obcaecati totam distinctio libero ea aliquam hic a consectetur, et
              facere rem repudiandae maxime dolorem ad, saepe harum blanditiis.
            </p>
            <p>
              Consectetur, et facere rem repudiandae maxime dolorem ad, saepe
              harum blanditiis laborum voluptatum amet sit Lorem ipsum dolor sit
              amet consectetur adipisicing elit. Voluptates odio omnis dolor
              numquam dignissimos consectetur amet sit lorem ipsum dolor sit
              amet consec.
            </p>
            <h2>How Online Banking Works</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptates odio omnis dolor numquam dignissimos enim assumenda
              itaque nemo tenetur dolores incidunt, animi quo quae odit
              corporis, nihil architecto inventore.
            </p>
            <ul class="content-feature-list style2 list-style">
              <li><i class="ri-check-line"></i>Opening accounts</li>
              <li><i class="ri-check-line"></i>Transferring funds</li>
              <li><i class="ri-check-line"></i>Applying for loans</li>
              <li><i class="ri-check-line"></i>Depositing checks</li>
              <li><i class="ri-check-line"></i>Staying informed</li>
              <li><i class="ri-check-line"></i>24/7 on time services</li>
            </ul>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptates odio omnis dolor numquam dignissimos enim assumenda
              itaque nemo tenetur dolores incidunt, animi quo quae odit
              corporis, nihil architecto inventore.
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
                    What Is Bank Account?
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
                        It is a long established fact that a reader will be
                        distracted by the readable conten of a page when looking
                        at its layout. The point of using Lorem Ipsum is that it
                        has a more-or-less no content here', making it look like
                        readable English.
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
                    How Do I Activate My Card?
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
                      It is a long established fact that a reader will be
                      distracted by the readable conten of a page when looking
                      at its layout. The point of using Lorem Ipsum is that it
                      has a more-or-less no content here', making it look like
                      readable English.
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
                    How Do I Change My Passwoed?
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
                      It is a long established fact that a reader will be
                      distracted by the readable conten of a page when looking
                      at its layout. The point of using Lorem Ipsum is that it
                      has a more-or-less no content here', making it look like
                      readable English.
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
                      Mobile Banking
                      <span><i class="flaticon-next"></i></span>
                    </router-link>
                  </li>
                  <li>
                    <router-link to="/service-details">
                      Personal Loans
                      <span><i class="flaticon-next"></i></span>
                    </router-link>
                  </li>
                  <li>
                    <router-link to="/service-details">
                      Merchant Banking
                      <span><i class="flaticon-next"></i></span>
                    </router-link>
                  </li>
                  <li>
                    <router-link to="/service-details">
                      Credit Cards
                      <span><i class="flaticon-next"></i></span>
                    </router-link>
                  </li>
                  <li>
                    <router-link to="/service-details">
                      Online Payment
                      <span><i class="flaticon-next"></i></span>
                    </router-link>
                  </li>
                  <li>
                    <router-link to="/service-details">
                      Corporate Banking
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
                    <h6>Mon-Thurs</h6>
                    <p>8:00 AM - 5:00 PM</p>
                  </li>
                  <li>
                    <h6>Fri-Sat</h6>
                    <p>8:00 AM - 3:00 PM</p>
                  </li>
                  <li>
                    <h6>Sun</h6>
                    <p>Closed</p>
                  </li>
                </ul>
              </div>
            </div>
            <div class="sidebar-widget style3">
              <div class="contact-widget-form">
                <div class="overlay op-95 bg-rock"></div>
                <h4>Lets Talk</h4>
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
