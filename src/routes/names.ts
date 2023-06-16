import { RouteRecordRaw } from "vue-router";

import LoginPage from "../pages/Login.vue";
import RegisterPage from "../pages/Register.vue";
import ResetPasswordPage from "../pages/ResetPassword.vue";
import Map from "../pages/Map.vue";
import InternalErrorPage from "../pages/500.vue";
import NotFoundErrorPage from "../pages/404.vue";

export const ROUTE_NAMES: Record<string, RouteRecordRaw> = {
  HOME: {
    path: "/",
    name: "Home",
    component: LoginPage,
  },
  LOGIN: {
    path: "/login",
    name: "Login",
    component: LoginPage,
  },
  REGISTER: {
    path: "/register",
    name: "Register",
    component: RegisterPage,
  },
  RESET_PASSWORD: {
    path: "/reset-password",
    name: "ResetPassword",
    component: ResetPasswordPage,
  },
  MAP: {
    path: "/map",
    name: "Map",
    component: Map,
  },
  PAGE_NOT_FOUND: {
    path: "/404",
    name: "NotFound",
    component: NotFoundErrorPage,
  },
  INTERNAL_ERROR: {
    path: "/500",
    name: "InternalError",
    component: InternalErrorPage,
  },
  UNKNOWN_URL: {
    path: "/:pathMatch(.*)*",
    name: "UnknownPage",
    component: NotFoundErrorPage,
  },
};

export default [...Object.values(ROUTE_NAMES)];
