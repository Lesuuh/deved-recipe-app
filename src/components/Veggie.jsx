import { useEffect, useState } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { styled } from "styled-components";
import { Link } from "react-router-dom";

export const Veggie = () => {
  const [veggie, setVeggie] = useState([]);

  useEffect(() => {
    getVeggie();
  }, []);

  const getVeggie = async () => {
    const getDataFromLocalStorage = localStorage.getItem("veggie");
    if (getDataFromLocalStorage) {
      setVeggie(JSON.parse(getDataFromLocalStorage));
    } else {
      const api = await fetch(
        `https://api.spoonacular.com/recipes/random?apiKey=${
          import.meta.env.VITE_REACT_APP_API_KEY
        }&number=16&tags=vegetarian`
      );
      const data = await api.json();
      setVeggie(data.recipes);
      localStorage.setItem("veggie", JSON.stringify(data.recipes));
    }
  };

  return (
    <Wrapper>
      <h3>Vegatarian</h3>
      <Splide
        options={{
          perPage: 3,
          arrows: false,
          pagination: false,
          gap: "4rem",
        }}
      >
        {veggie.map((veg) => (
          <SplideSlide key={veg.id}>
            <Card>
              <Link to={"/recipes/" + veg.id}>
                <p>{veg.title}</p>
                <div>
                  <img src={veg.image} alt={veg.title} />
                </div>
                <Gradient />
              </Link>
            </Card>
          </SplideSlide>
        ))}
      </Splide>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin: 4rem 0;
`;

const Card = styled.div`
  position: relative;
  overflow: hidden;
  height: 15rem;
  width: 20rem;
  img {
    border-radius: 2rem;
    width: 100%;
    height: 100%;
    object-fit: cover;
    position: absolute;
    left: 0;
  }

  p {
    position: absolute;
    width: 100%;
    font-size: 1rem;
    z-index: 10;
    color: white;
    font-weight: 600;
    bottom: 0;
    left: 50%;
    transform: translate(-50%, 0);
    display: flex;
    justify-content: center;
    text-align: center;
    align-items: center;
    height: 40%;
  }
`;

const Gradient = styled.div`
  position: absolute;
  z-index: 3;
  width: 100%;
  height: 100%;
  background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5));
`;
