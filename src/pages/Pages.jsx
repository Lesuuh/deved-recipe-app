import { Routes, Route } from "react-router-dom";
import { Home } from "./Home";
import { Cuisine } from "./Cuisine";

export const Pages = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cuisine" element={<Cuisine />} />
      </Routes>
    </div>
  );
};
