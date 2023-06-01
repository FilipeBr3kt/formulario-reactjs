import React from "react";
import { FaUser, FaKey, FaEnvelope } from "react-icons/fa";
import styled from "styled-components";

const Container = styled.div`
  margin-top: 2vh;
`;

const Inputs = styled.input`
  margin-bottom: 2vh;
  margin-left: 10px;
  border: none;
  background-color: transparent;
  border-bottom: solid 2px ${({ theme }) => theme.body};
  outline: none;
  padding: 0px 30px;
  margin-top: 2vh;
  font-size: 17px;
  color: ${({ theme }) => theme.font};
`;

const Box = styled.div`
  color: ${({ theme }) => theme.icon};
`;

export default function Input() {
  return (
    <Container>
      <Box>
        <FaUser size={20} />
        <Inputs type="text" placeholder="Enter your username" />
      </Box>
      <Box>
        <FaEnvelope size={20} />
        <Inputs type="text" placeholder="Enter your email" />
      </Box>
      <Box>
        <FaKey size={20} />
        <Inputs type="text" placeholder="Enter your password" />
      </Box>
    </Container>
  );
}
