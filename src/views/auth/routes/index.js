import Register from '@/views/auth/Register.vue';
import Login from '@/views/auth/Login.vue';
import Logout from '@/views/auth/Logout.vue';
import ForgotPassword from '@/views/auth/ForgotPassword.vue';

export default [
  {
    path: "/register",
    name: "register",
    component: Register,
  },
  {
    path: "/login",
    name: "login",
    component: Login,
  },
  {
    path: "/logout",
    name: "logout",
    component: Logout,
  },
  {
    path: "/forgot-password",
    name: "forgotPassword",
    component: ForgotPassword,
  },
]
