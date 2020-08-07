import React from 'react';
import styled from 'styled-components';
import { FooterColor } from '@/src/constants/Colors';

const FooterDiv = styled.div`
  display: grid;
  background: ${FooterColor};
  grid-template-columns: 1fr 1fr;
  align-items: center;
  padding: 0px 12px;
  color: #fff;
  font-weight: 700;
  font-family: 'Work Sans', sans-serif;
`

const BubaDiv = styled.div`
  text-align: left;
`

const GithubDiv = styled.div`
  text-align: right;
`
const GithubAnchor = styled.a`
  color: #fff;
  text-decoration: none;
`

function Footer() {
  return (
    <FooterDiv>
      <BubaDiv>
        Buba ToyProject
      </BubaDiv>
      <GithubDiv>
        <GithubAnchor href="https://github.com/seonk94/react" target="_blank">
          Github
        </GithubAnchor>
      </GithubDiv>
    </FooterDiv>
  )
}
export default Footer
