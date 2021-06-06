import styled from "styled-components";
import { DFJCS } from "../global";

export const BalanceSection = styled(DFJCS)`
  background-color: ${(props) => props.theme.primary};
  width: 100%;
  height: 2.7em;
  border-radius: 0.8em;
  padding: 0.1rem 0 0 0.8rem;
  overflow: hidden;
  align-items: center;
  justify-content: flex-start;
`;

export const BalanceText = styled.h1`
  font-size: 0.9em;
  opacity: 0.8;
`;
