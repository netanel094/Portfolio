import { styled } from "styled-components";
import PropTypes from "prop-types";

function Card({ imgSrc, text }) {
  return (
    <Wrapper>
      <Img src={imgSrc} draggable="false" />
      {text}
    </Wrapper>
  );
}

Card.propTypes = {
  imgSrc: PropTypes.string,
  text: PropTypes.string,
};

export default Card;

const Wrapper = styled.div`
  --margin: 10px;
  border: 2px solid rgb(106, 178, 184);
  border-radius: 20px;
  width: calc(100% - var(--margin) * 2);
  height: calc(100% - var(--margin) * 2);
  margin: var(--margin);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  padding: 40px;
  box-sizing: border-box;
  user-select: none;
`;

const Img = styled.img`
  width: 10rem;
`;
