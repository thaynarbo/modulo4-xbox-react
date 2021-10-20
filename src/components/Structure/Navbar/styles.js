import styled from "styled-components";
import { theme } from "../../../styles/themes";

export const Container = styled.header`
  background: ${theme.colors.black10};
  height: 60px;
  display: flex;
  padding: 0 0.85rem;
  justify-content: space-between;
  align-items: center;

  img {
    width: 150px;
  }

  ul {
    list-style-type: none;
    display: flex;
    column-gap: 0.5rem;

    a {
      text-decoration: none;
      color: #cfcfd0;
    }
  }
`;
