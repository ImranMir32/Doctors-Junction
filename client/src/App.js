import "./styles/app.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import React, { lazy, Suspense } from "react";
import Loading from "./components/Loading";

const Home = lazy(() => import("./routes/Home"));

function App() {
  return (
    <Router>
      <Toaster />
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="*" element={<Error />} /> */}
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
