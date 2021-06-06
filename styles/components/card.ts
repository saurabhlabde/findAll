import styled from "styled-components";
import { DFAIS } from "../global";

export const CardSection = styled.div`
  height: 19.9em;
  width: 14em;
  border-radius: 1.2em;
  background-color: ${(props) => props.theme.secondary};
  overflow: hidden;
  margin-right: 0.4rem;
  padding: 0.6rem;
`;

export const TopSection = styled(DFAIS)`
  width: 100%;
`;

export const BottomSection = styled(DFAIS)`
  width: 100%;
  flex-direction: column;
  margin-top: 0.5rem;
`;

export const MediaSection = styled.div`
  width: 100%;
  height: 10em;
  border-radius: 1em;
  overflow: hidden;
`;

export const MediaImage = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
`;

export const ContentTopSec = styled(DFAIS)`
  width: 100%;
  flex-direction: column;
  padding-left: 0.5rem;
`;

export const ContentBottomSec = styled(DFAIS)`
  width: 100%;
  margin-top: 1rem;
  flex-direction: column;
`;

export const ButtonSection = styled.div`
  width: 100%;
  margin-top: 1rem;
`;

export const Heading = styled.h1`
  color: ${(props) => props.theme.t_primary};
  font-size: 0.9em;
  margin-top: 0.2rem;
  white-space: nowrap;
`;

export const SubHeading = styled.h2`
  color: ${(props) => props.theme.t_secondary};
  font-size: 0.85em;
  margin-top: 0.3rem;
  white-space: nowrap;

`;

export const SubSubHeading = styled.h3`
  color: ${(props) => props.theme.t_secondary};
  font-size: 0.8em;
  padding-right: 1rem;
  padding-left: 0.5rem;
  white-space: nowrap;
`;
