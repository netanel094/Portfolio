import { useCallback, useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";

const limit = (min, number, max) => Math.max(Math.min(number, max), min);

function NewCarousel({ children, width }) {
  const { length } = children;
  const clickRef = useRef(false);
  const TouchRef = useRef(false);
  const [pos, setPos] = useState(0);
  const max = (length - 1) * width;

  const onMouseDown = () => {
    clickRef.current = true;
  };

  const onMouseMove = (e) => {
    if (!clickRef.current) return;
    const { movementX } = e;
    setPos((prev) => limit(0, prev - movementX, max));
  };

  const handleMouseUp = useCallback(() => {
    clickRef.current = false;
    setPos((prev) => Math.round(prev / width) * width);
  }, [width]);

  const handleTouchStart = (e) => {
    clickRef.current = true;
    TouchRef.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    const movementX = e.touches[0].clientX - TouchRef.current;
    TouchRef.current = e.touches[0].clientX;
    setPos((prev) => limit(0, prev - movementX, max));
  };

  useEffect(() => {
    const body = document.querySelector("body");
    body.addEventListener("mouseup", handleMouseUp);
    return () => body.removeEventListener("mouseup", handleMouseUp);
  }, [handleMouseUp, width]);

  return (
    <section id="carousel">
      <H1>Projects</H1>
      <Wrapper
        id="Wrapper"
        width={width}
        onMouseDown={onMouseDown}
        onMouseMove={onMouseMove}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleMouseUp}
        clickRef={clickRef}
      >
        <WrapperWrapper id="WrapperWrapper" pos={pos} length={length}>
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
    </section>
  );
}

NewCarousel.propTypes = {
  children: PropTypes.arrayOf(PropTypes.node).isRequired,
  width: PropTypes.number.isRequired,
};

export default NewCarousel;

const H1 = styled.h1`
  text-align: center;
  font-size: 6rem;
  line-height: 2;
`;

const Box = styled.div.attrs(({ pos, index, width, length }) => ({
  style: {
    scale: `${1 - Math.abs(width * index - pos) / (width * length)}`,
  },
}))`
  height: 100%;
  flex-grow: 0;
  flex-shrink: 0;
  flex-basis: var(--box-size);
  transition: scale 400ms ease-in-out;
`;

const WrapperWrapper = styled.div.attrs(({ pos }) => ({
  style: { translate: `calc( 50% - (var(--box-size) / 2) - ${pos}px ) 0` },
}))`
  display: flex;
  height: 100%;
  width: 100%;
  transition: translate 400ms ease-in-out;
`;

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

  cursor: grab;
  ${({ clickRef }) =>
    clickRef.current &&
    css`
      cursor: grabbing;
      ${WrapperWrapper} {
        transition: none;
      }
      ${Box} {
        transition: none;
      }
    `}
`;
