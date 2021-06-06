import styled from "styled-components";
import { DFAIS } from "../global";

export const CardSection = styled(DFAIS)`
  background-color: ${(props) => props.theme.secondary};
  width: 15em;
  height: 100%;
  border-radius: 1em;
  flex-direction: column;
  padding: 0.5rem 0.5rem;
  margin-right: 0.3rem;
`;

export const TopSection = styled.div`
  width: 100%;
`;

export const BottomSection = styled.div`
  width: 100%;
`;

export const HeadingSection = styled.div`
  width: 100%;
  margin: 0.5rem 0rem 1.5rem 0;
  padding-left: 0.5rem;
`;

export const Heading = styled.h1`
  font-size: 1em;
`;

export const InputSection = styled.div`
  width: 100%;
`;

export const ButtonSection = styled.div`
  width: 100%;
  margin-top: 1rem;
`;
