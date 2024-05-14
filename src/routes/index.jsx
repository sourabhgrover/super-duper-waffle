import {  Outlet, createBrowserRouter } from "react-router-dom";
import Login from "../Login";
import DashboardLayout from "../layouts/dashboard";
import Dashboard from "../Dashboard";

export const router = createBrowserRouter([
  {
    path: "/",
    element: (<DashboardLayout><Outlet /></DashboardLayout>),
  children: [
    { element: <Dashboard />, index: true }
  ],
  },
]);