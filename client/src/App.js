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
// const Profile = lazy(() => import("./routes/Profile"));

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
  // {
  //   path: "/profile",
  //   element: <Profile />,
  //   errorElement: <ErrorPage />,
  // },
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
