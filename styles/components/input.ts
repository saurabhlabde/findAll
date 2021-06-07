import styled from "styled-components";

export const InputSection = styled.div`
  background-color: ${(props) => props.theme.primary};
  width: 100%;
  height: 2.7em;
  border-radius: 0.8em;
  padding: 0.1rem 0 0 0.8rem;
  overflow: hidden;
`;

export const InputSy = styled.input`
  color:${props => props.theme.t_primary};
  background-color: transparent;
  height: 100%;
  width: 100%;
  outline: none;
  border: none;
  font-size: 0.9em;
`;
