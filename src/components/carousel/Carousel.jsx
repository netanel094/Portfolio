import { useCallback, useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

function NewCarousel({ children, width }) {
  const { length } = children;
  const clickRef = useRef(false);
  const [pos, setPos] = useState(0);
  const max = (length - 1) * width;

  const onMouseDown = () => {
    clickRef.current = true;
  };

  const onMouseMove = (e) => {
    if (!clickRef.current) return;
    setPos((prev) => Math.max(Math.min(prev - e.movementX, max), 0));
  };

  const handleMouseUp = useCallback(() => {
    clickRef.current = false;
    setPos((prev) => Math.round(prev / width) * width);
  }, [width]);

  useEffect(() => {
    const body = document.querySelector("body");
    body.addEventListener("mouseup", handleMouseUp);
    return () => body.removeEventListener("mouseup", handleMouseUp);
  }, [handleMouseUp, width]);

  return (
    <Section id="skills">
      <Title>Skills</Title>
      <Wrapper id="Wrapper" width={width}>
        <WrapperWrapper
          id="WrapperWrapper"
          onMouseDown={onMouseDown}
          onMouseMove={onMouseMove}
          pos={pos}
          length={length}
        >
          {children.map((child, index) => (
            <Box
              key={`Box_${index}`}
              index={index}
              pos={pos}
              width={width}
              length={length}
            >
              {child}
            </Box>
          ))}
        </WrapperWrapper>
      </Wrapper>
    </Section>
  );
}

NewCarousel.propTypes = {
  children: PropTypes.arrayOf(PropTypes.node).isRequired,
  width: PropTypes.number.isRequired,
};

export default NewCarousel;

const Wrapper = styled.div`
  --box-size: ${({ width }) => `${width}px`};
  overflow: hidden;
  width: 100%;
  --mask: linear-gradient(
      90deg,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 1) 20%,
      rgba(0, 0, 0, 1) 80%,
      rgba(0, 0, 0, 0) 100%
    )
    100% 50% / 100% 100% repeat-x;

  -webkit-mask: var(--mask);
  mask: var(--mask);
  padding-top: 100px;
`;

const Box = styled.div.attrs(({ pos, index, width, length }) => ({
  style: {
    scale: `${1 - Math.abs(width * index - pos) / (width * length)}`,
  },
}))`
  width: var(--box-size);
  height: var(--box-size);
`;

const WrapperWrapper = styled.div.attrs(({ pos }) => ({
  style: { translate: `calc( 50% - (var(--box-size) / 2) - ${pos}px ) 0` },
}))`
  display: flex;
  height: 100%;
  width: 100%;
  &:not(&:active) {
    cursor: grab;
    transition: translate 400ms ease-in-out;
    ${Box} {
      transition: scale 400ms ease-in-out;
    }
  }
  &:active {
    cursor: grabbing;
  }
`;

const Title = styled.h1`
  text-align: center;
  font-size: 6rem;
  line-height: 1.5;
  color: #1b2430;
  text-shadow: 1px 5px 10px rgba(255, 255, 255, 0.4);
`;

const Section = styled.section`
  width: 100%;
  background-color: #eaeaea;
  display: block;
`;
