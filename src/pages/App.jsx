import React, { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./Home";
import Generator from "./Generator";
import Contributors from "./Contributors";
import NotFound from "./NotFound";

function App() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/generator" element={<Generator />} />
      <Route path="/contributors" element={<Contributors />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
