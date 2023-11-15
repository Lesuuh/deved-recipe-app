import { useEffect, useState } from "react";
import { styled } from "styled-components";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { Link } from "react-router-dom";

export const Popular = () => {
  const [popular, setPopular] = useState([]);
  useEffect(() => {
    getPopular();
  }, []);
  const getPopular = async () => {
    const getFromLocalStorage = localStorage.getItem("popular");
    if (getFromLocalStorage) {
      setPopular(JSON.parse(getFromLocalStorage));
    } else {
      const api = await fetch(
        `https://api.spoonacular.com/recipes/random?apiKey=${
          import.meta.env.VITE_REACT_APP_API_KEY
        }&number=16`
      );
      const data = await api.json();
      // console.log(data);
      setPopular(data.recipes);
      localStorage.setItem("popular", JSON.stringify(data.recipes));
    }
  };

  return (
    <Wrapper>
      <h3>Popular picks</h3>
      <Splide
        options={{
          perPage: 4,
          drag: "free",
          arrows: false,
          pagination: false,
          gap: "2rem",
        }}
      >
        {popular.map((recipe) => {
          return (
            <SplideSlide key={recipe.id}>
              <Card>
                <Link to={"/recipes/" + recipe.id}>
                  <p>{recipe.title}</p>
                  <div>
                    <img src={recipe.image} alt={recipe.title} />
                  </div>
                  <Gradient />
                </Link>
              </Card>
            </SplideSlide>
          );
        })}
      </Splide>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin: 4rem 0rem;
`;

const Card = styled.div`
  height: 15rem;
  width: 12rem;
  /* border-radius: 2rem; */
  overflow: hidden;
  position: relative;
  img {
    border-radius: 2rem;
    object-fit: cover;
    height: 100%;
    width: 100%;
    position: absolute;

    left: 0;
  }
  p {
    position: absolute;
    width: 100%;
    left: 50%;
    bottom: 0;
    transform: translate(-50%, 0);
    color: white;
    z-index: 10;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    height: 40%;
    font-weight: 600;
  }
`;

const Gradient = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 3;
  background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5));
`;
