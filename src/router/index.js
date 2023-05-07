import { createWebHistory, createRouter } from "vue-router";

import HomeOnePage from "../components/Pages/HomeOnePage";
import HomeTwoPage from "../components/Pages/HomeTwoPage";
import HomeThreePage from "../components/Pages/HomeThreePage";
import AboutPage from "../components/Pages/AboutPage";
import ServicesPage from "../components/Pages/ServicesPage";
import ServicesTwoPage from "../components/Pages/ServicesTwoPage";
import ServicesDetailsPage from "../components/Pages/ServicesDetailsPage";
import ProjectPage from "../components/Pages/ProjectPage";
import ProjectDetailsPage from "../components/Pages/ProjectDetailsPage";
import TeamPage from "../components/Pages/TeamPage";
import AccountPage from "../components/Pages/AccountPage";
import ApplyPage from "../components/Pages/ApplyPage";
import PricingPage from "../components/Pages/PricingPage";
import FaqPage from "../components/Pages/FaqPage";
import TestimonialsPage from "../components/Pages/TestimonialsPage";
import MyAccountPage from "../components/Pages/MyAccountPage";
import LoginPage from "../components/Pages/LoginPage";
import RegisterPage from "../components/Pages/RegisterPage";
import RecoverPasswordPage from "../components/Pages/RecoverPasswordPage";
import TermsOfServicePage from "../components/Pages/TermsOfServicePage";
import PrivacyPolicyPage from "../components/Pages/PrivacyPolicyPage";
import ErrorPage from "../components/Pages/ErrorPage";
import BlogPage from "../components/Pages/BlogPage";
import BlogLeftSidebarPage from "../components/Pages/BlogLeftSidebarPage";
import BlogRightSidebarPage from "../components/Pages/BlogRightSidebarPage";
import BlogDetailsPage from "../components/Pages/BlogDetailsPage";
import BlogDetailsLeftSidebarPage from "../components/Pages/BlogDetailsLeftSidebarPage";
import BlogDetailsRightSidebarPage from "../components/Pages/BlogDetailsRightSidebarPage";
import ContactUsPage from "../components/Pages/ContactUsPage";


const routes = [
  { path: "/", name: "HomeOnePage", component: HomeOnePage },
  { path: "/home-two", name: "HomeTwoPage", component: HomeTwoPage },
  { path: "/home-three", name: "HomeThreePage", component: HomeThreePage },
  { path: "/about", name: "AboutPage", component: AboutPage },
  { path: "/services", name: "ServicesPage", component: ServicesPage },
  {
    path: "/services-two",
    name: "ServicesTwoPage",
    component: ServicesTwoPage,
  },
  {
    path: "/service-details",
    name: "ServicesDetailsPage",
    component: ServicesDetailsPage,
  },
  { path: "/projects", name: "ProjectPage", component: ProjectPage },
  {
    path: "/project-details",
    name: "ProjectDetailsPage",
    component: ProjectDetailsPage,
  },
  { path: "/team", name: "TeamPage", component: TeamPage },
  { path: "/open-account", name: "AccountPage", component: AccountPage },
  { path: "/apply-loan", name: "ApplyPage", component: ApplyPage },
  { path: "/pricing", name: "PricingPage", component: PricingPage },
  { path: "/faq", name: "FaqPage", component: FaqPage },
  {
    path: "/testimonials",
    name: "TestimonialsPage",
    component: TestimonialsPage,
  },
  { path: "/my-account", name: "MyAccountPage", component: MyAccountPage },
  { path: "/login", name: "LoginPage", component: LoginPage },
  { path: "/register", name: "RegisterPage", component: RegisterPage },
  {
    path: "/recover-password",
    name: "RecoverPasswordPage",
    component: RecoverPasswordPage,
  },
  {
    path: "/terms-of-service",
    name: "TermsOfServicePage",
    component: TermsOfServicePage,
  },
  {
    path: "/privacy-policy",
    name: "PrivacyPolicyPage",
    component: PrivacyPolicyPage,
  },
  { path: "/:pathMatch(.*)*", name: "ErrorPage", component: ErrorPage },
  { path: "/blog", name: "BlogPage", component: BlogPage },
  {
    path: "/blog-left-sidebar",
    name: "BlogLeftSidebarPage",
    component: BlogLeftSidebarPage,
  },
  {
    path: "/blog-right-sidebar",
    name: "BlogRightSidebarPage",
    component: BlogRightSidebarPage,
  },
  {
    path: "/blog-details",
    name: "BlogDetailsPage",
    component: BlogDetailsPage,
  },
  {
    path: "/blog-details-left-sidebar",
    name: "BlogDetailsLeftSidebarPage",
    component: BlogDetailsLeftSidebarPage,
  },
  {
    path: "/blog-details-right-sidebar",
    name: "BlogDetailsRightSidebarPage",
    component: BlogDetailsRightSidebarPage,
  },
  { path: "/contact", name: "ContactUsPage", component: ContactUsPage },
];

const router = createRouter({
  history: createWebHistory(),
  linkExactActiveClass: "active",
  routes,
  scrollBehavior() {
    return { top: 0, behavior: "smooth" };
  },
});

export default router;
