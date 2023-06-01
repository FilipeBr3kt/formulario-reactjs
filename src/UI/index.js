import styled from "styled-components";

export const Btn = styled.button`
  padding: 1vh 7vw;
  background-color: ${({ theme }) => theme.button};
  color: #fff;
  border: none;
  box-shadow: none;
  margin-left: 20px;
  font-size: 20px;
  cursor: pointer;
  border-radius: 3px;
`;

export const Icone = styled.img`
  height: 60px;
  width: 60px;
`;

export const BtnTema = styled.button`
  position: absolute;
  top: 4vh;
  right: 30px;
  background-color: inherit;
  border: none;
  cursor: pointer;
`;
