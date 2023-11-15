import { FaPizzaSlice, FaHamburger } from "react-icons/fa";
import { GiNoodles, GiChopsticks } from "react-icons/gi";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Categories = () => {
  return (
    <List>
      <Slink to={"/cuisine/Italian"}>
        <FaPizzaSlice />
        <h4>Italian</h4>
      </Slink>
      <Slink to={"/cuisine/American"}>
        <FaHamburger />
        <h4>American</h4>
      </Slink>
      <Slink to={"/cuisine/Japanese"}>
        <GiNoodles />
        <h4>Japanese</h4>
      </Slink>
      <Slink to={"/cuisine/Thai"}>
        <GiChopsticks />
        <h4>Thai</h4>
      </Slink>
    </List>
  );
};

const List = styled.div`
margin-top: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`;


const Slink = styled(NavLink)`
  width: 5rem;
  height: 5rem;
 margin-right: 2rem;
  background: linear-gradient(45deg, #494949, #313131);
  cursor: pointer;
  color: white;
  border-radius: 100%;
  text-decoration: none;
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  transform : scale(0.8);
  h4{
    font-size: 0.8rem;
    color: white;
  }svg{
    font-size: 1.5rem;
    color: white;
  }&.active{
    background: linear-gradient(to right, #f27121, #e94057);
    svg{
      color: white;
    }
    h4{
      color:white;
    }
  }
`