// import styled from "styled-components";
// import { motion } from "framer-motion";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const Cuisine = () => {
  const [cuisine, setCuisine] = useState([]);
  let params = useParams();

  const getCuisine = async (name) => {
    const data = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${
        import.meta.env.VITE_REACT_APP_API_KEY
      }&number=9&cuisine=${name}`
    );
    const recipes = await data.json();
    setCuisine(recipes.results);
  };

  useEffect(() => {
    // getCuisine(params.type);
    console.log(params);
  }, [params]);
  return (
    <div>
      <h2>Categories</h2>
    </div>
  );
};

export default Cuisine;
