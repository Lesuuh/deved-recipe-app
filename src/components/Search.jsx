import { styled } from "styled-components";
import { FaSearch } from "react-icons/fa";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Search = () => {
    const [input, setInput] = useState("")
    const navigate = useNavigate()

    const handleChange = (e)=> {
        setInput(e.target.value)
        
    }

    const handleSubmit = (e)=> {
        e.preventDefault()
        navigate("/searched/" + input)
    }
    // console.log(input)
  return (
    <FormStyle onSubmit={handleSubmit}>
      <div>
        <FaSearch />
        <input type="text" onChange={handleChange} value={input}/>
      </div>
    </FormStyle>
  );
};

const FormStyle = styled.form`
  display:flex;
  justify-content:center;
  align-items: center;
  margin-top: 50px;

  div {
    position: relative;
    width: 450px;
  }

  input {
    width: 100%;
    padding: 1rem 2.5rem;
    outline: none;
    border: none;
    background: linear-gradient(45deg, #494949, #313131);
    border-radius: 2rem;
    color: white;
    font-size: 1rem;
}

    svg {
      position: absolute;
      top: 50%;
      left: 0%;
      transform: translate(100%, -50%);
      color:white;
    }

`;
