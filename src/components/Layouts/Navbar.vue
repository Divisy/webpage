<template>
  <div :class="['header-wrap', { sticky: isSticky }]">
    <!-- Top Header -->
    <div class="header-top" :class="{ open: open }">
      <button type="button" class="close-sidebar" @click="open = !open">
        <i class="ri-close-fill"></i>
      </button>
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-8 col-md-9">
            <div class="header-top-left">
              <ul class="contact-info list-style">
                <li>
                  <i class="flaticon-call"></i>
                  <a href="tel:034633941770">(+34) 633 941 770</a>
                </li>
                <li>
                  <i class="flaticon-email-1"></i>
                  <a href="mailto:rts@divisy.co">rts@divisy.co</a>
                </li>
                <li>
                  <i class="flaticon-pin"></i>
                  <p>Barcelona, Spain</p>
                </li>
              </ul>
            </div>
          </div>

          <div class="col-lg-4 col-md-3">
            <div class="header-top-right">
              <ul class="header-top-menu list-style">
                <!--<li><router-link to="/contact">Support</router-link></li>-->
                <li><router-link to="/contact">Help</router-link></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- End Top Header -->

    <!-- Navbar -->
    <div class="header-bottom">
      <div class="container">
        <nav class="navbar navbar-expand-md navbar-light">
          <router-link class="navbar-brand" to="/">
            <img
              class="logo-light"
              src="../../assets/images/logo.png"
              alt="logo"
            />
            <img
              class="logo-dark"
              src="../../assets/images/logo-white.png"
              alt="logo"
            />
          </router-link>

          <div class="collapse navbar-collapse" :class="{ show: active }">
            <ul class="navbar-nav ms-auto">
              <!--<li class="nav-item has-dropdown">
                <a href="#" class="nav-link">
                  Home
                  <i class="ri-arrow-down-s-line"></i>
                </a>
                <ul class="dropdown-menu">
                  <li class="nav-item">
                    <router-link to="/" class="nav-link">Home One</router-link>
                  </li>
                  <li class="nav-item">
                    <router-link to="/home-two" class="nav-link">Home Two</router-link>
                  </li>
                  <li class="nav-item">
                    <router-link to="/home-three" class="nav-link">Home Three</router-link>
                  </li>
                </ul>
              </li>-->

              <li class="nav-item">
                <router-link to="/about" class="nav-link">About</router-link>
              </li>

              <li class="nav-item">
                    <router-link to="/service-details" class="nav-link">Services</router-link>
                  </li>

              <!--<li class="nav-item has-dropdown">
                <a href="#" class="nav-link">
                  Services
                  <i class="ri-arrow-down-s-line"></i>
                </a>
                <ul class="dropdown-menu">
                  <li class="nav-item">
                    <router-link to="/services" class="nav-link">Service One</router-link>
                  </li>
                  <li class="nav-item">
                    <router-link to="/services-two" class="nav-link">Service Two</router-link>
                  </li>
                  <li class="nav-item">
                    <router-link to="/service-details" class="nav-link">Service Details</router-link>
                  </li>
                </ul>
              </li>-->

              <!--<li class="nav-item has-dropdown">
                <a href="#" class="nav-link">
                  Pages
                  <i class="ri-arrow-down-s-line"></i>
                </a>
                <ul class="dropdown-menu">
                  <li class="nav-item">
                    <a href="#" class="nav-link">
                      Project
                      <i class="ri-arrow-down-s-line"></i>
                    </a>
                    <ul class="dropdown-menu">
                      <li class="nav-item">
                        <router-link to="/projects" class="nav-link">Our Project</router-link>
                      </li>
                      <li class="nav-item">
                        <router-link to="/project-details" class="nav-link">Single Project</router-link>
                      </li>
                    </ul>
                  </li>
                  <li class="nav-item">
                    <router-link to="/team" class="nav-link">Our Team</router-link>
                  </li>
                  <li class="nav-item">
                    <router-link to="/open-account" class="nav-link">Open Account</router-link>
                  </li>
                  <li class="nav-item">
                    <router-link to="/apply-loan" class="nav-link">Apply Loan</router-link>
                  </li>
                  <li class="nav-item">
                    <router-link to="/pricing" class="nav-link">Pricing Plan</router-link>
                  </li>
                  <li class="nav-item">
                    <router-link to="/faq" class="nav-link">FAQ</router-link>
                  </li>
                  <li class="nav-item">
                    <router-link to="/testimonials" class="nav-link">Testimonials</router-link>
                  </li>

                  <li class="nav-item">
                    <a href="#" class="nav-link">
                      User Pages
                      <i class="ri-arrow-down-s-line"></i>
                    </a>
                    <ul class="dropdown-menu">
                      <li class="nav-item">
                        <router-link to="/my-account" class="nav-link">My Account</router-link>
                      </li>
                      <li class="nav-item">
                        <router-link to="/login" class="nav-link">Login</router-link>
                      </li>
                      <li class="nav-item">
                        <router-link to="/register" class="nav-link">Register</router-link>
                      </li>
                      <li class="nav-item">
                        <router-link to="/recover-password" class="nav-link">Recover Password</router-link>
                      </li>
                    </ul>
                  </li>

                  <li class="nav-item">
                    <router-link to="/terms-of-service" class="nav-link">Terms of Service</router-link>
                  </li>

                  <li class="nav-item">
                    <router-link to="/privacy-policy" class="nav-link">Privacy Policy</router-link>
                  </li>
                </ul>
              </li>-->

              <!--<li class="nav-item has-dropdown">
                <a href="#" class="nav-link">
                  Blog
                  <i class="ri-arrow-down-s-line"></i>
                </a>
                <ul class="dropdown-menu">
                  <li class="nav-item">
                    <a href="#" class="nav-link">
                      Blog Layout
                      <i class="ri-arrow-down-s-line"></i>
                    </a>
                    <ul class="dropdown-menu">
                      <li class="nav-item">
                        <router-link to="/blog" class="nav-link">Blog Grid</router-link>
                      </li>
                      <li class="nav-item">
                        <router-link to="/blog-left-sidebar" class="nav-link">Blog Left Sidebar</router-link>
                      </li>
                      <li class="nav-item">
                        <router-link to="/blog-right-sidebar" class="nav-link">Blog Right Sidebar</router-link>
                      </li>
                    </ul>
                  </li>
                  
                  <li class="nav-item">
                    <a href="#" class="nav-link">
                      Single Blog
                      <i class="ri-arrow-down-s-line"></i>
                    </a>
                    <ul class="dropdown-menu">
                      <li class="nav-item">
                        <router-link to="/blog-details" class="nav-link">Blog Details No Sidebar</router-link>
                      </li>
                      <li class="nav-item">
                        <router-link
                          to="/blog-details-left-sidebar"
                          class="nav-link">Blog Details Left Sidebar</router-link>
                      </li>
                      <li class="nav-item">
                        <router-link to="/blog-details-right-sidebar" class="nav-link">Blog Details Right Sidebar</router-link>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>-->

              <li class="nav-item">
                <router-link to="/contact" class="nav-link">Contact</router-link>
              </li>
            </ul>

            <div class="others-options d-flex align-items-cente">
              <button
                class="searchbtn"
                type="button"
                @click="search = !search"
                :aria-pressed="search ? 'true' : 'false'"
                v-bind:class="{ search: button_search_state }"
                v-on:click="button_search_state = !button_search_state"
              >
                <i class="flaticon-search"></i>
              </button>
              <div class="searchbox">
                <input type="text" placeholder="Search" />
                <button type="button">
                  <i class="flaticon-search"></i>
                </button>
              </div>
              <div class="header-btn">
                <router-link to="/register" class="btn style1"
                  >Register Now</router-link
                >
              </div>
            </div>
          </div>

          <div class="mobile-bar-wrap">
            <div
              class="mobile-sidebar"
              @click="open = !open"
              :aria-pressed="open ? 'true' : 'false'"
              v-bind:class="{ open: button_open_state }"
              v-on:click="button_open_state = !button_open_state"
            >
              <i class="ri-menu-4-line"></i>
            </div>
            <button
              class="searchbtn"
              type="button"
              @click="search = !search"
              :aria-pressed="search ? 'true' : 'false'"
              v-bind:class="{ search: button_search_state }"
              v-on:click="button_search_state = !button_search_state"
            >
              <i class="flaticon-search"></i>
            </button>
            <div
              class="navbar-toggler mobile-menu xl-none"
              @click="active = !active"
              :aria-pressed="active ? 'true' : 'false'"
              v-bind:class="{ active: button_active_state }"
              v-on:click="button_active_state = !button_active_state"
            >
              <a href="javascript:void(0);">
                <i class="ri-menu-line"></i>
                <i class="ri-close-line"></i>
              </a>
            </div>
          </div>
        </nav>
      </div>

      <!-- Search Modal -->
      <div class="search-area" :class="{ search: search }">
        <div class="container">
          <form @submit.prevent>
            <div class="form-group">
              <input type="search" placeholder="Search Here" autofocus />
            </div>
          </form>
          <button
            type="button"
            class="close-searchbox"
            @click="search = !search"
          >
            <i class="ri-close-line"></i>
          </button>
        </div>
      </div>
    </div>
    <!-- End Navbar -->
  </div>
</template>

<script>
export default {
  name: "Navbar",
  data: () => ({
    isSticky: false,
    active: false,
    button_active_state: false,
    search: false,
    button_search_state: false,
    open: false,
    button_open_state: false,
  }),
  mounted() {
    const that = this;
    window.addEventListener("scroll", () => {
      let scrollPos = window.scrollY;
      if (scrollPos >= 100) {
        that.isSticky = true;
      } else {
        that.isSticky = false;
      }
    });
  },
};
</script>
