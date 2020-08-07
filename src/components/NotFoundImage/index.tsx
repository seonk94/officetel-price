import React from 'react';
import styled, { css } from 'styled-components';
import IWillFoundYou from '@/src/assets/images/i_will_find_you.jpg'

const StyledImage = styled.img`
  max-width: 640px;
  max-height: 400px;
  height: auto;
  width: 400px;
  display: block;
`

const ImageContainer = styled.div`
  width: fit-content;
  position: relative;
`

const SubTitleCss = css`
  position: absolute;
  display: grid;
  justify-content: center;
  width: 100%;

  span {
    color: #fff;
    font-size: 18px;
    font-weight: 700;
  }
`

const TopSubTitle = styled.div`
  top: 0px;
  ${SubTitleCss}
`

const BottomSubTitle = styled.div`
  bottom: 0px;
  ${SubTitleCss}
`



function NotFoundImage({ name }: { name: string }) {

  return (
    <ImageContainer>
      <StyledImage src={IWillFoundYou} />
      <TopSubTitle>
        <span>I don't know who you are.. {name}</span>
      </TopSubTitle>
      <BottomSubTitle>
        <span>But i will find you.</span>
      </BottomSubTitle>
    </ImageContainer>
  )
}
export default NotFoundImage;
