import {  Outlet, createBrowserRouter } from "react-router-dom";
import Login from "../Login";
import DashboardLayout from "../layouts/dashboard";

export const router = createBrowserRouter([
  {
    path: "/",
    element: (<DashboardLayout><Outlet /></DashboardLayout>),
  children: [
    { element: <Login />, index: true }
  ],
  },
]);