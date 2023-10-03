import { useEffect, useState } from "react";
import styled from "styled-components";
import { Splide, SplideSlide } from "@splidejs/react-splide";
// Default theme
import "@splidejs/react-splide/css";

// or only core styles
import "@splidejs/react-splide/css/core";

const Veggie = () => {
  const [veggie, setVeggie] = useState([]);
  useEffect(() => {
    getVeggie();
  }, []);
  const getVeggie = async () => {
    const check = localStorage.getItem("veggie");
    if (check) {
      setVeggie(JSON.parse(check));
    } else {
      const api = await fetch(
        `https://api.spoonacular.com/recipes/random?apiKey=${
          import.meta.env.VITE_REACT_APP_API_KEY
        }&number=9&tags=vegetarian`
      );
      const data = await api.json();
      localStorage.setItem("veggie", JSON.stringify(data.recipes));
      setVeggie(data.recipes);
    }
  };
  return (
    <div>
      <Wrapper>
        <h3>Vegetarian picks</h3>

        <Splide
          options={{
            perPage: 3,
            perMove: 2,
            arrows: false,
            pagination: false,
            drag: "free",
            gap: "5rem",
          }}
        >
          {veggie.map((recipe) => {
            return (
              <SplideSlide key={recipe.id}>
                <Card>
                  <p>{recipe.title}</p>
                  <img src={recipe.image} alt="recipe-image" />
                  <Gradient />
                </Card>
              </SplideSlide>
            );
          })}
        </Splide>
      </Wrapper>
    </div>
  );
};

const Wrapper = styled.div`
  margin: 4rem 0rem;
`;

const Card = styled.div`
  min-height: 10rem;
  min-width: 10rem;
  border-radius: 2rem;
  overflow: hidden;
  position: relative;

  img {
    border-radius: 2rem;
    position: absolute;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  p {
    position: absolute;
    z-index: 10;
    left: 50%;
    bottom: 0;
    transform: translate(-50%, 0%);
    color: white;
    font-size: 1rem;
    font-weight: 600;
    text-align: center;
    display: flex;
    justify-content: center;
    width: 100%;
    align-items: center;
    height: 40%;
  }
`;

const Gradient = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 3;
  background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5));
`;

export default Veggie;
