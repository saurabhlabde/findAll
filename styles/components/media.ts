import styled from "styled-components";
import { DFC } from "../global";

export const MediaSection = styled(DFC)`
  background-color: ${(props) => props.theme.primary};
  height: 10em;
  width: 50%;
  border-radius: 1em;
  overflow: hidden;
  cursor: pointer;
`;

export const MediaImage = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
`;

export const MediaText = styled.h1`
  color: ${(props) => props.theme.t_secondary};
  opacity: 0.5;
  font-size: 1.5em;
`;

export const MediaLabel = styled.label`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const MediaInput = styled.input``;
