import styled from "styled-components";

export const MainSection = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  overflow-y: scroll;
  flex-direction: column;
  position: relative;

`;

export const Section = styled.section`
  width: 40vw;
  height: 100%;
  background-color: ${(props) => props.theme.primary};
`;

export const BlankSpace = styled.div`
  height: 20em;
  width: 100%;
`;
