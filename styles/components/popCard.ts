import styled from "styled-components";
import { DFC } from "../global";

export const PopCardSection = styled(DFC)`
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  z-index: 999;
  overflow: hidden;
`;

export const PopCardSec = styled.div`
  background-color: ${(props) => props.theme.secondary};
  border-radius: 1.5em;
  padding: 1rem 2rem;
  width: 35em;
`;

export const HeadingSection = styled.div`
  width: 100%;
  margin: 1em 0 2em 0;
  padding-left: 0.5em;
`;

export const HeadingText = styled.h1`
  color:${props => props.theme.t_primary}
  font-size: 1.3em;
`;

export const InputSection = styled.div`
  .input {
    margin: 1rem 0;
  }
`;

export const ButtonSection = styled.div`
  width: 100%;
  margin-top: 3rem;
`;

export const AdditionalInfo = styled.div`
  width: 100%;
  margin: 2rem 0 1rem 0;
  text-align: end;
  padding-right: 1rem;
`;

export const AdditionalInfoText = styled.h1`
  font-size: 0.9em;
  cursor: pointer;
  color: orange;
`;

export const CloseButtonSection = styled.div`
  background-color: ${(props) => props.theme.secondary};
  position: absolute;
  top: 0;
  right:0;
  transform: translate(-20%,50%);
  padding:0.5rem 1rem ;
  border-radius: 5em;
  cursor: pointer;
`;

export const CloseButtonText = styled.h1`
font-size: 1em;
color:${props => props.theme.t_primary}
`;
