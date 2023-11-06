import React from "react";

//login
import Login from "../pages/Authentication/Login";
import Dashboard from "../pages/Dashboard/Dashboard";

// import ForgetPasswordPage from "../pages/Authentication/ForgetPassword";
// import Logout from "../pages/Authentication/Logout";
// import Register from "../pages/Authentication/Register";

const publicRoutes = [
  // Authentication Page
  //   { path: "/logout", component: <Logout /> },
  { path: "/", component: <Login /> },
  { path: "/dashboard", component: <Dashboard /> },
  //   { path: "/forgot-password", component: <ForgetPasswordPage /> },
  //   { path: "/register", component: <Register /> }
];

export { publicRoutes };
