import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { styled } from "styled-components";

export const Recipes = () => {
  const [details, setDetails] = useState();
  const [activeTab, SetActiveTab] = useState("instructions");
  let params = useParams();

  const getDetails = async () => {
    const data = await fetch(
      `https://api.spoonacular.com/recipes/${params.name}/information?apiKey=${
        import.meta.env.VITE_REACT_APP_API_KEY
      }`
    );
    const detailsData = await data.json();
    setDetails(detailsData);
  };

  useEffect(() => {
    getDetails();
  }, [params.name]);
  return (
    <>
      <DetailsWrapper>
        {details && (
          <div>
            <h2>{details.title}</h2>
            <img src={details.image} alt={details.title} />
            <Info>
              <Button
                onClick={() => SetActiveTab("instructions")}
                className={activeTab === "instructions" ? "active" : ""}
              >
                Instructions
              </Button>
              <Button
                onClick={() => SetActiveTab("ingredients")}
                className={activeTab === "ingredients" ? "active" : ""}
              >
                Ingredients
              </Button>
              {activeTab === "instructions" && (
                <div>
                  <h3
                    dangerouslySetInnerHTML={{ __html: details.summary }}
                  ></h3>
                  <h3
                    dangerouslySetInnerHTML={{ __html: details.instructions }}
                  ></h3>
                </div>
              )}

              {activeTab === "ingredients" && (
                <ul>
                  {details.extendedIngredients.map((ingredients) => {
                    return <li key={ingredients.id}>{ingredients.original}</li>;
                  })}
                </ul>
              )}
            </Info>
          </div>
        )}
      </DetailsWrapper>
    </>
  );
};

const DetailsWrapper = styled.div`
  margin-top: 10rem;
  margin-bottom: 5rem;
  display: flex;
  .active {
    background: linear-gradient(35deg, #494949, #313131);
    color: white;
  }
  h2 {
    margin-bottom: 2rem;
  }
  ul {
    margin-top: 2rem;
  }
  li {
    font-size: 1.2rem;
    line-height: 2.5rem;
  }
`;

const Button = styled.button`
  padding: 1rem 2rem;
  color: #313131;
  background: white;
  margin-right: 2rem;
  font-weight: 600;
  border: 2px solid black;
  cursor: pointer;
`;

const Info = styled.div`
  margin-left: 10rem;
`;
