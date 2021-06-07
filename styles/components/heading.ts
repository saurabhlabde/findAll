import styled from "styled-components";
import { DFC, DFJCS } from "../global";

export const HeadingSection = styled(DFJCS)`
  width: 100%;
  justify-content: flex-start;
  margin: 1rem 0 1.5rem 0;
  padding-left: 1rem;
`;

export const HeadingText = styled.h1`
  font-size: 1.2em;
`;

export const AddSection = styled(DFC)`
  background-color: ${(props) => props.theme.secondary};
  padding: 0.5rem 1rem;
  border-radius: 1em;
  margin: 0 0.5rem;
  cursor: pointer;
`;

export const AddText = styled.h1`
  color: ${(props) => props.theme.t_orange};
  font-size: 0.9em;
`;
