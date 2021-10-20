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
  border: 1px solid rgba(255, 255, 255, 0.05);
  border-radius: 0.85rem;
  align-items: center;
  justify-content: space-around;
  text-align: center;
  max-height: 300px;
  background-color: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  h2 {
    font-size: ${theme.fontSizes.h2};
    text-transform: uppercase;
  }
  img {
    height: 300px;
    object-fit: cover;
    border-top-left-radius: 0.85rem;
    border-bottom-left-radius: 0.85rem;
  }
  .game-info {
    padding: 1rem;
  }
`;
