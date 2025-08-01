import styled from "styled-components";

export const StyledTitle = styled.h2`

  font-size: 6rem;
  line-height: 1.5;
  color: aliceblue;
  text-align: center;
  height:bold
  text-shadow: 1px 2px 2px rgba(0, 0, 0, 1);
  @media (width < 640px) {
    font-size: 3rem;
  }
  @media (width < 340) {
    font-size: 1.5rem;
  }
`;
