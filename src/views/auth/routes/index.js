import ForgotPassword from '@/views/auth/ForgotPassword.vue';
import Login from '@/views/auth/Login.vue';
import Logout from '@/views/auth/Logout.vue';
// import Register from '@/views/auth/Register.vue';

export default [
  {
    path: "/forgot-password",
    name: "forgotPassword",
    component: ForgotPassword,
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
  // {
  //   path: "/register",
  //   name: "register",
  //   component: Register,
  // },
]
