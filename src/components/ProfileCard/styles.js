import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 1.5rem;

  justify-content: center;
  text-align: center;
  img {
    height: 150px;
    width: 150px;
    object-fit: cover;
    border-radius: 50%;
    cursor: pointer;
    &:hover {
      opacity: 0.3;
    }
  }
`;
