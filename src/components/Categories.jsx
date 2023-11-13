import { FaPizzaSlice, FaHamburger } from "react-icons/fa";
import { GiNoodles, GiChopsticks } from "react-icons/gi";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Categories = () => {
  return (
    <List>
      <NavLink to={"/cuisine/Italian"}>
        <FaPizzaSlice />
        <h4>Italian</h4>
      </NavLink>
      <NavLink to={"/cuisine/American"}>
        <FaHamburger />
        <h4>American</h4>
      </NavLink>
      <NavLink to={"/cuisine/Japanese"}>
        <GiNoodles />
        <h4>Japanese</h4>
      </NavLink>
      <NavLink to={"/cuisine/Thai"}>
        <GiChopsticks />
        <h4>Thai</h4>
      </NavLink>
    </List>
  );
};

const List = styled.div`
margin-top: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
