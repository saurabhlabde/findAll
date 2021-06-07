import styled from "styled-components";
import { MediaSection } from "../components/card";

export const AddSection = styled(MediaSection)`
  background-color: ${(props) => props.theme.primary};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export const HeadingAdd = styled.div`
  background-color: ${(props) => props.theme.primary};
  height: 1em;
  width: 80%;
  border-radius: 5rem;
`;

export const SubHeadingAdd = styled.div`
  background-color: ${(props) => props.theme.primary};
  height: 1em;
  width: 60%;
  border-radius: 5rem;
  margin-top: 0.5rem;
`;

export const SubSubHeadingAdd = styled.div`
  background-color: ${(props) => props.theme.primary};
  height: 1em;
  width: 30%;
  border-radius: 5rem;
  margin-left: 0.5rem;
`;

export const ButtonAdd = styled.div`
  background-color: ${(props) => props.theme.primary};
  height: 2.5em;
  width: 100%;
  border-radius: 0.8em;
`;

export const AddHeading = styled.h1`
  color: ${(props) => props.theme.t_primary};
  font-size: 1.8em;
  opacity: 0.3;
`;

