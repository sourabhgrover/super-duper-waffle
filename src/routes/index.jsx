import { lazy } from "react";
import {  Outlet, createBrowserRouter } from "react-router-dom";
import Login from "../Login";
import DashboardLayout from "../layouts/dashboard";
import TableDetails from "../components/Dashboard/TableDetails";
// import Dashboard from "../Dashboard";

export const IndexPage = lazy(() => import('src/pages/dashboard'));

export const router = createBrowserRouter([
  {
    path: "/",
    element: (<DashboardLayout><Outlet /></DashboardLayout>),
  children: [
    { element: <IndexPage />, index: true },
    { path: 'table-details/66473e4ce9116cc75626cd48', element: <TableDetails /> },
  ],
  },
]);