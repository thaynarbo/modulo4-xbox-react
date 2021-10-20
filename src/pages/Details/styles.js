import styled from "styled-components";
import { theme } from "./../../styles/themes";
export const Container = styled.div`
  height: 100vh;
  display: grid;
  place-items: center;
`;

export const InfoContainer = styled.div`
  margin-top: 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  text-align: center;

  h2 {
    font-size: ${theme.fontSizes.h2};
    text-transform: uppercase;
  }
  img {
    max-height: 200px;
    object-fit: cover;
    border-radius: 0.85rem;
  }
`;
