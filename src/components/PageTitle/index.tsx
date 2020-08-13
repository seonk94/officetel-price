import React, { useState, useEffect } from 'react'
import styled, { ThemeProvider } from 'styled-components';
import { FillOffset, StrokeOffset } from '@/src/style/animation';
import { useTheme } from '@/src/hooks/useTheme';

const TitleDiv = styled.div`
  height: 200px;
`
const TitleSvg = styled.svg<{ render: boolean }>`
  width: 100%;
  height: 100%;
  font-family: 'Indie Flower', cursive;

  .stroke {
    stroke: ${props => props.theme.colors.mainTextColor};
    stroke-width: 1px;
    stroke-dasharray: 250 250;
    stroke-opacity 1;
    fill: none;
    animation: ${StrokeOffset} 2s ease alternate 1;
  }

  text {
    font-size: 36px;
  }

  .fill {
    fill: ${props => props.theme.colors.mainTextColor};
    fill-opacity: 1;
    animation: ${FillOffset} 2s ease alternate 1;
    animation-timing-function: cubic-bezier(.25, .46, .45, .94)
  }
`
function PageTitle() {

  const [theme] = useTheme();
  const [render, setRender] = useState(false);
  useEffect(() => {
    setRender(true);
  }, [])

  return (
    <ThemeProvider theme={theme}>
      <TitleDiv>
        <TitleSvg version="1.1" viewBox="0 0 300 100" render={render}>
          <symbol id="fade-text">
            <text x="50%" y="50%" textAnchor="middle">Who are you</text>
          </symbol>
          <g>
            <use className="stroke" xlinkHref="#fade-text" />
            <use className="fill" xlinkHref="#fade-text" />
          </g>
        </TitleSvg>
      </TitleDiv>
    </ThemeProvider>
  )
}
export default PageTitle;
