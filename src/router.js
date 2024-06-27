import { createRouter, createWebHistory } from "vue-router";

import IamPage from "./pages/IamPage.vue";
import HomePage from "./pages/HomePage.vue";
import SingleProject from "./pages/SingleProject.vue";

import App from "./App.vue"

const router = createRouter({
  history: createWebHistory(),

  routes: [
    {
      path: "/",
      name: "home",
      component: HomePage,
    },
    {
      path: "/WhoIAm",
      name: "iam",
      component: IamPage,
    },
    {
      path: "/projects/:slug",
      name: "single-project",
      component: SingleProject,
    },
  ],
});

export { router };


