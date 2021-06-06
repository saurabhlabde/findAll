import styled from "styled-components";
import { DFJCS } from "../global";

export const NavSection = styled(DFJCS)`
  background-color: rgba(0,0,0,0.1);
  width: 100%;
  justify-content: space-between;
  height: 4em;
  padding: 1rem 0.4rem 1rem 1rem;
  border-radius: 1em;
  margin: 1rem 0;
  position: sticky;
  top: 0;
`;

export const LeftSection = styled(DFJCS)``;

export const RightSection = styled(DFJCS)`
  flex: 1;
  justify-content: flex-end;
`;

export const LogoSection = styled.div``;

export const LogoText = styled.h1`
  font-size: 1.2em;
  color: orange;
`;

export const AuthButtonSection = styled(DFJCS)`
  width: 40%;
`;

export const ButtonSection = styled.div`
  margin: 0 0.2rem;
  width: 100%;
`;
