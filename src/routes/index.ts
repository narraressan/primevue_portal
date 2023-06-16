import { createRouter, createWebHashHistory } from "vue-router";
import routes from "./names";

export default createRouter({
  history: createWebHashHistory(),
  routes,
});
