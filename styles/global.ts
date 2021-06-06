import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
*{
        box-sizing: border-box;
        padding: 0;
        margin: 0;
        font-family: Rubik;
        font-weight: normal;
}

`;

export const DFC = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const DFAIS = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
`;

export const DFJCS = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

export const DFJCAIS = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
`;
