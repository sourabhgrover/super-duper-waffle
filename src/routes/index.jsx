import { lazy } from "react";
import {  Outlet, createBrowserRouter } from "react-router-dom";
import Login from "../Login";
import DashboardLayout from "../layouts/dashboard";
import TableDetails from "../components/Dashboard/TableDetails";
import SchemaDetails from "../components/Dashboard/SchemaDetails";
// import Dashboard from "../Dashboard";

export const IndexPage = lazy(() => import('src/pages/dashboard'));

export const router = createBrowserRouter([
  {
    path: "/",
    element: (<DashboardLayout><Outlet /></DashboardLayout>),
  children: [
    { element: <IndexPage />, index: true },
    { path: 'table-details', element: <TableDetails /> },
    { path: 'schema-details/:schemaId', element: <SchemaDetails /> },
  ],
  },
]);