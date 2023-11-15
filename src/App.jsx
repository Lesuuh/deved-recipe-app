import { Categories } from "./components/Categories";
import { Search } from "./components/Search";
import { Pages } from "./pages/Pages";
import { BrowserRouter, Link } from "react-router-dom";
import { GiForkKnifeSpoon } from "react-icons/gi";
import { styled } from "styled-components";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Header>
          <Link to={"/"}>
            <GiForkKnifeSpoon />
            Delicious
          </Link>
        </Header>
        <Search />
        <Categories />
        <Pages />
      </BrowserRouter>
    </div>
  );
};

export default App;

const Header = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;
  a {
    text-decoration: none;
    font-size: 1.5rem;
  }
`;
