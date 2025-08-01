import { styled } from "styled-components";
import PropTypes from "prop-types";
import colors from "../colors";

export default function Card({ imgSrc, title, text, link }) {
  const handleButtonClick = () => {
    window.open(link, "_blank");
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
  color: ${colors.primary};
  background: ${colors.mainTitleGradient};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 12px;
`;

const Wrapper = styled.div`
  border: none;
  border-radius: 22px;
  width: 100%;
  max-width: 420px;
  margin: 0 auto 18px auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  padding: 32px 24px 24px 24px;
  box-sizing: border-box;
  background: ${colors.cardBackground};
  box-shadow: ${colors.cardShadow};
  user-select: none;
  transition: box-shadow 0.2s, background 0.2s;
  &:hover {
    box-shadow: ${colors.cardShadowHover};
    background: #f0f7ff;
  }
`;

const Img = styled.img`
  width: 12rem;
  padding-bottom: 15px;
  border-radius: 18px;
  background: ${colors.contentBg};
  box-shadow: 0 1px 4px rgba(56, 189, 248, 0.08);
`;

const Content = styled.p`
  font-size: 1.1rem;
  color: ${colors.textSecondary};
  text-align: left;
  margin-bottom: 18px;
`;

const Button = styled.button`
  background: ${colors.primary};
  color: #fff;
  border: none;
  padding: 13px 32px;
  border-radius: 12px;
  cursor: pointer;
  margin-top: 10px;
  font-size: 1.1rem;
  font-weight: 600;
  letter-spacing: 1px;
  box-shadow: 0 2px 8px rgba(56, 189, 248, 0.1);
  transition: background 0.2s, color 0.2s, box-shadow 0.2s;
  &:hover {
    background: ${colors.secondary};
    color: #fff;
    box-shadow: 0 4px 16px rgba(56, 189, 248, 0.18);
  }
  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px ${colors.accent};
  }
`;
