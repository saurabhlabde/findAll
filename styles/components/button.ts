import styled from "styled-components";

export const ButtonSection = styled.div`
  background-color: ${(props) => props.theme.b_primary};
  height: 2.5em;
  width: 100%;
  overflow: hidden;
  border-radius: 0.8em;
`;

export const ButtonSy = styled.button`
  color: ${(props) => props.theme.t_light};
  background-color: transparent;
  height: 100%;
  width: 100%;
  border: none;
  cursor: pointer;
`;
