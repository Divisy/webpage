import { createApp } from "vue";
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
      },
      source: 'https://divisy.co/gtm.js', // Add your own serverside GTM script
      defer: false, // Script can be set to `defer` to speed up page load at the cost of less accurate results (in case visitor leaves before script is loaded, which is unlikely but possible). Defaults to false, so the script is loaded `async` by default
      compatibility: false, // Will add `async` and `defer` to the script tag to not block requests for old browsers that do not support `async`
      nonce: '7777', // Will add `nonce` to the script tag
      enabled: true, // defaults to true. Plugin can be disabled by setting this to false for Ex: enabled: !!GDPR_Cookie (optional)
      debug: true, // Whether or not display console logs debugs (optional)
      loadScript: true, // Whether or not to load the GTM Script (Helpful if you are including GTM manually, but need the dataLayer functionality in your components) (optional)
      trackOnNextTick: false, // Whether or not call trackView in Vue.nextTick
    }),
  );