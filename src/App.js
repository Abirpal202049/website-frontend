import React from "react";
import { Routes, Route } from "react-router-dom";

import GlobalProvider from "./components/GlobalProvider";
import ScrollToTop from "./components/ScrollToTop";

import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

const App = () => {
  return (
    <GlobalProvider>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </GlobalProvider>
  );
};

export default App;
