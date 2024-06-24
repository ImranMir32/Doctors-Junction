import "./styles/app.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import React, { lazy, Suspense } from "react";

import Loading from "./components/Loading";
import Login from "./routes/Login";
import Register from "./routes/Register";
import ErrorPage from "./error.page";

import { GlobalStateProvider } from "./Context/Global_Context";
import { GlobalMethodsProvider } from "./Context/GlobalMethodsContext";

const Home = lazy(() => import("./routes/Home"));
const Profile = lazy(() => import("./routes/Profile"));
const Doctors = lazy(() => import("./routes/Doctors"));
const ApplyDoctors = lazy(() => import("./routes/DoctorApply"));

// admin
const Dashboard = lazy(() => import("./routes/Dashboard"));
// const AdminUsers = lazy(() => import("./routes/Admin/adminUsers"));
// const AdminDoctors = lazy(() => import("./routes/Admin/adminDoctors"));
const AdminApplicants = lazy(() =>
  import("./components/Admin/adminApplicants")
);
// const AdminAppointments = lazy(() =>
//   import("./routes/Admin/adminAppointments")
// );

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/register",
    element: <Register />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/login",
    element: <Login />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/profile",
    element: <Profile />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/doctors",
    element: <Doctors />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/apply",
    element: <ApplyDoctors />,
    errorElement: <ErrorPage />,
  },

  {
    path: "/dashboard",
    element: <Dashboard />,
    errorElement: <ErrorPage />,
  },

  // {
  //   path: "/dashboard/users",
  //   element: <AdminUsers />,
  //   errorElement: <ErrorPage />,
  // },
  // {
  //   path: "/dashboard/doctors",
  //   element: <AdminDoctors />,
  //   errorElement: <ErrorPage />,
  // },
  // {
  //   path: "/dashboard/appointments",
  //   element: <AdminAppointments />,
  //   errorElement: <ErrorPage />,
  // },
  {
    path: "/dashboard/applications",
    element: <AdminApplicants />,
    errorElement: <ErrorPage />,
  },
]);

function App() {
  return (
    <GlobalStateProvider>
      <GlobalMethodsProvider>
        <Toaster />
        <Suspense fallback={<Loading />}>
          <RouterProvider router={router} />
        </Suspense>
      </GlobalMethodsProvider>
    </GlobalStateProvider>
  );
}

export default App;
