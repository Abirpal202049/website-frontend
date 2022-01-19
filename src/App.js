import React from "react";
import "animate.css/animate.min.css";
import { Routes, Route } from "react-router-dom";
import "react-notifications-component/dist/theme.css";
import ReactNotification from "react-notifications-component";

import GlobalProvider from "./components/GlobalProvider";
import ScrollToTop from "./components/ScrollToTop";

import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

const App = () => {
  return (
    <GlobalProvider>
      <ReactNotification isMobile={true} breakpoint={468} />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </GlobalProvider>
  );
};

export default App;
