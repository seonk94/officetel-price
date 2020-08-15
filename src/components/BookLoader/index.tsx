import React from 'react';
import BookIcon from '@/src/assets/icon/SimpleBook.svg'
import styled from 'styled-components';
import { Seraching } from '@/src/style/animation';

const BookLoaderContainer = styled.div`
  position: relative;
  width: 100px;
  height: 100px;
`
const SearchIconContainer = styled.div`
  position: absolute;
  top: 25%;
  left: 25%;

  animation: ${Seraching} 2s ease alternate infinite;

  .material-icons {
    font-size: 40px !important;
  }
`
const BookImg = styled.img`
  width: 100%;
  height: 100%;
`

function BookLoader() {

  return (
    <BookLoaderContainer>
      <BookImg src={BookIcon} alt='Book Image' />
      <SearchIconContainer>
        <span className="material-icons">
          search
        </span>
      </SearchIconContainer>
    </BookLoaderContainer>
  )
}
export default BookLoader;
