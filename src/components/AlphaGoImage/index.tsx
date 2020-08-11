import React from 'react';
import styled from 'styled-components';
import AlphaGoThink from '@/src/assets/images/alpha_go_think.jpg';

const ImageContainer = styled.div`
  position: relative; 
  width: fit-content
`
const StyledImage = styled.img`
    max-width: 640px;
    max-height: 400px;
    height: auto;
    width: 400px;
    display: block;
`

function AlphaGoImage() {

    return (
        <ImageContainer>
            <StyledImage src={AlphaGoThink}/>
        </ImageContainer>
    )
}
export default AlphaGoImage;