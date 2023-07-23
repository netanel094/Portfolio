import { styled } from "styled-components";
import PropTypes from "prop-types";

function Card({ imgSrc, title, text }) {
  return (
    <Wrapper>
      <Img src={imgSrc} draggable="false" />
      <Title>{title}</Title>
      {text}
    </Wrapper>
  );
}

Card.propTypes = {
  imgSrc: PropTypes.string,
  title: PropTypes.string,
  text: PropTypes.string,
};

export default Card;

const Title = styled.h2`
  font-size: 1.5rem;
  font-weight: bold;
`;

const Wrapper = styled.div`
  --margin: 10px;
  border: 3px solid rgb(106, 178, 184);
  border-radius: 20px;
  width: calc(100% - var(--margin) * 2);
  height: calc(100% - var(--margin) * 2);
  margin: var(--margin);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  padding: 50px;
  box-sizing: border-box;
  user-select: none;
`;

const Img = styled.img`
  width: 12rem;
  padding-bottom: 15px;
`;
