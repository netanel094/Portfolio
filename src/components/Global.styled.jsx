import styled from "styled-components";

export const StyledTitle = styled.h1`
  font-size: 6rem;
  line-height: 1.5;
  color: aliceblue;

  @media (width < 640px) {
    font-size: 4rem;
  }
  @media (width < 340) {
    font-size: 1.5rem;
  }
`;