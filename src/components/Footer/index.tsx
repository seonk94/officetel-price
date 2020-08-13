import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { useTheme } from '@/src/hooks/useTheme';

const FooterDiv = styled.div`
  display: grid;
  background: ${props => props.theme.colors.subBgColor};
  grid-template-columns: 1fr 1fr;
  align-items: center;
  padding: 0px 12px;
  color: ${props => props.theme.colors.subTextColor};
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
  color: ${props => props.theme.colors.subTextColor};
  text-decoration: none;
`

function Footer() {

  const [theme] = useTheme();

  return (
    <ThemeProvider theme={theme}>
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
    </ThemeProvider>
  )
}
export default Footer
