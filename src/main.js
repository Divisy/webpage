import { createApp } from "vue";
import { createGtm } from '@gtm-support/vue-gtm';
import App from "./App.vue";
import router from "./router";
import AOS from "aos";
import BootstrapVue3 from "bootstrap-vue-3";

import "aos/dist/aos.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue-3/dist/bootstrap-vue-3.css";

import "./assets/custom.scss";
import './gtm.js';

const app = createApp(App).use(router);
app.use(BootstrapVue3);
app.use(AOS.init());
app.mount("#app");

app.use(
    createGtm({
      id: 'GTM-MFBDR7G', // Your GTM single container ID, array of container ids ['GTM-xxxxxx', 'GTM-yyyyyy'] or array of objects [{id: 'GTM-xxxxxx', queryParams: { gtm_auth: 'abc123', gtm_preview: 'env-4', gtm_cookies_win: 'x'}}, {id: 'GTM-yyyyyy', queryParams: {gtm_auth: 'abc234', gtm_preview: 'env-5', gtm_cookies_win: 'x'}}], // Your GTM single container ID or array of container ids ['GTM-xxxxxx', 'GTM-yyyyyy']
      queryParams: {
        // Add URL query string when loading gtm.js with GTM ID (required when using custom environments)
        gtm_auth: '',
        gtm_preview: 'env-4',
        gtm_cookies_win: 'x',
      }
    })
  );