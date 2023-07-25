import { styled } from "styled-components";
import PropTypes from "prop-types";

export default function Card({ imgSrc, title, text, link }) {
  const handleButtonClick = () => {
    window.location.href = link;
  };

  return (
    <Wrapper>
      <Img src={imgSrc} draggable="false" />
      <Title>{title}</Title>
      <Content>{text}</Content>
      <Button onClick={handleButtonClick}>Link</Button>
    </Wrapper>
  );
}

Card.propTypes = {
  imgSrc: PropTypes.string,
  title: PropTypes.string,
  text: PropTypes.string,
  link: PropTypes.string,
};

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
  padding: 30px;
  box-sizing: border-box;
  user-select: none;
`;

const Img = styled.img`
  width: 12rem;
  padding-bottom: 15px;
`;

const Content = styled.p`
  font-size: 1.1rem;
  color: black;
  text-align: left;
`;

const Button = styled.button`
  background-color: rgb(106, 178, 184);
  color: #ffffff;
  border: none;
  padding: 15px 30px;
  border-radius: 7px;
  cursor: pointer;
  margin-top: 15px;
  &:hover {
    background-color: rgb(106, 200, 200);
  }

  &:focus {
    outline: none; /* Remove the default focus outline */
    box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.3); /* Add a custom focus style */
  }
`;
