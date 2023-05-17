import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import EmployeeList from "./components/EmployeeList";
import Login from "./components/Login";
import Details from "./components/Details";
import ManagerList from "./components/ManagerList";
import EmpListing from "./components/EmpListing";
import EmpCreate from "./components/EmpCreate";
import EmpEdit from "./components/EmpEdit";
import EmpDetails from "./components/EmpDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/details",
    element: <Details />,
  },
  {
    path: "/employeeList",
    element: <EmployeeList />,
  },
  {
    path: "/managerList",
    element: <ManagerList />,
  },
  {
    path: "/SD1",
    element: <EmpListing />,
  },
  {
    path: "/employee/create",
    element: <EmpCreate />,
  },
  {
    path: "/employee/edit",
    element: <EmpEdit />,
  },
  {
    path: "/employee/details",
    element: <EmpDetails />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
