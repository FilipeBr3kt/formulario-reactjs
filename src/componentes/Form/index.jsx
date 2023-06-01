import React from "react";
import styled from "styled-components";
import Social from "../Social";
import Input from "../Inputs";
import Remember from "../Remember";
import Button from "../Button";

const Formulario = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 15vh;
  height: 600px;
  width: 400px;
  background-color: ${({ theme }) => theme.form};
  border-radius: 10px;
  box-shadow: 20px 20px 53px -5px rgba(0, 0, 0, 0.75);
`;

const Login = styled.h1`
  color: ${({ theme }) => theme.font};
  font-wheight: 400;
  font-size: 40px;
  margin-right: 10vw;
`;

export default function Form() {
  return (
    <Formulario>
      <Social />
      <div>
        <Login>Login</Login>
      </div>
      <Input />
      <Remember />
      <Button />
    </Formulario>
  );
}
