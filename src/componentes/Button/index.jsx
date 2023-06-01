import React from "react";
import { Btn } from "../../UI";
import styled from "styled-components";

const Container = styled.div`
  margin-top: 2vh;
`;

export default function Button() {
  return (
    <Container>
      <Btn>Login</Btn>
    </Container>
  );
}
