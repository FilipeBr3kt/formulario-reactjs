import React from "react";
import facebook from "../../assets/images/facebook-1.png";
import google from "../../assets/images/google.png";
import github from "../../assets/images/github.png";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
`;

const SocialLogin = styled.img`
  margin-top: 5vh;
  margin-bottom: 2vh;
  height: 50px;
  cursor: pointer;
`;

export default function Social() {
  return (
    <Container>
      <SocialLogin src={facebook} alt="logo facebook" />
      <SocialLogin src={google} alt="logo google" />
      <SocialLogin src={github} alt="logo github" />
    </Container>
  );
}
