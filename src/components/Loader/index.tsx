import React from 'react';
import styled, { keyframes, css } from 'styled-components';

const lineGrow = keyframes`
  0% {
    height: 0;
  }
  100% {
    height: 100%;
  }
`

const lineDefaultStyle = css`
  width: 8px;
  position: absolute;
  border-radius: 5px;
  bottom: 0;
  background: linear-gradient(to bottom, #a5d8ff, #1971c2);
`

const LoaderContainer = styled.div`
  position: relative;
  display: block;
  width: 48px;
  height: 48px;
`

const Line1 = styled.div`
  ${lineDefaultStyle}
  left: 0;
  animation: ${lineGrow} 0.5s ease alternate infinite;
`

const Line2 = styled.div`
  ${lineDefaultStyle}
  left: 20px;
  animation: ${lineGrow} 0.5s 0.2s ease alternate infinite;
`

const Line3 = styled.div`
  ${lineDefaultStyle}
  left: 40px;
  animation: ${lineGrow} 0.5s 0.4s ease alternate infinite;
`

function Loader() {

  return (
    <LoaderContainer>
      <Line1 />
      <Line2 />
      <Line3 />
    </LoaderContainer>
  )
}

export default Loader;
