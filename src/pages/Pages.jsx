import Home from "./Home";
import { Routes, Route } from "react-router-dom";
import Cuisine from "./cuisine";

function Pages() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cuisine/:type" element={<Cuisine />} />
    </Routes>
  );
}

export default Pages;