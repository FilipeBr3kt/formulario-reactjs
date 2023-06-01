import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
`;
const Text = styled.h4`
  color: ${({ theme }) => theme.font};
  margin-left: 20px;
  font-weight: 400;
  text-decoration: underline;
`;

export default function Remember() {
  return (
    <Container>
      <Text>Remember-me</Text>
      <Text>Forgot password?</Text>
    </Container>
  );
}
