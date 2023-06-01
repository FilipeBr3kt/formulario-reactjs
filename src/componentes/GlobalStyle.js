import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
* {
    box-sizing: border-box;
    font-family: "montserrat", sans-serif;
    text-decoration: none;
}

body {
    display: grid;
    place-items: center;
    background-color: ${({ theme }) => theme.body};
}
`;
