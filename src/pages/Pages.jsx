import { Routes, Route } from "react-router-dom";
import { Home } from "./Home";
import { Cuisine } from "./Cuisine";
import { Searched } from "../components/Searched";
import { Recipes } from "../components/Recipes";

export const Pages = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cuisine/:type" element={<Cuisine />} />
        <Route path="/searched/:search" element={<Searched />} />
        <Route path="/recipes/:name" element={<Recipes />} />
      </Routes>
    </div>
  );
};
