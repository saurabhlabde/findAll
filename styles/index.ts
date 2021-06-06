import styled from "styled-components";

export const MainSection = styled.main`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  overflow-y: scroll;
  flex-direction: column;
`;

export const Section = styled.section`
  width: 40vw;
  height: 100%;
  position: relative;
  background-color: ${(props) => props.theme.primary};
  
`;
