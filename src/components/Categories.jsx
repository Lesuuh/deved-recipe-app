import { FaPizzaSlice, FaHamburger } from "react-icons/fa";
import { GiNoodles, GiChopsticks } from "react-icons/gi";
import { Link } from "react-router-dom";
import styled from "styled-components";
// import { NavLink } from "react-router-dom/cjs/react-router-dom.min";

const Category = () => {
  return (
    <List className="list">
      <Link to="/cuisine/italian">
        <FaPizzaSlice />
        <h4>Italian</h4>
      </Link>
      <Link to="/cuisine/american">
        <FaHamburger />
        <h4>American</h4>
      </Link>
      <Link to="/cuisines/thai">
        <GiNoodles />
        <h4>Thai</h4>
      </Link>
      <Link to="/cuisine/japanese">
        <GiChopsticks />
        <h4>Japanese</h4>
      </Link>
    </List>
  );
};

const List = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 2rem 0;
`;



export default Category;
