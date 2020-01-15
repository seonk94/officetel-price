import * as React from 'react';
/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import Hello from './containers/Hello';
import Summary from './containers/Summary';

const reactBody = css`
  margin: 0;
`

const sidebar = css`
  margin: 0;
  padding: 0;
  width: 200px;
  background-color: #f1f1f1;
  position: fixed;
  height: 100%;
  overflow: auto;

  @media (max-width: 600px) {
    width: 100%;
    height: auto;
    position: relative;
  }
`

const sidebarMenu = css`
  display: block;
  color: black;
  padding: 16px;
  text-decoration: none;
  &.active {
    background-color: #4CAF50;
    color: white;
  }
  &:hover:not(.active) {
    background-color: #555;
    color: white;
  }
  @media (max-width: 600px) {
    float: left;
  }
`

const content = css`
  margin-left: 200px;
  padding: 1px 16px;
  height: 1000px;
  @media (max-width: 600px) {
    margin-left: 0;
  }
`

function App() {
  return (
    <div css={reactBody}>
      <div css={sidebar}>
        <a css={sidebarMenu}>Home</a>
        <a css={sidebarMenu}>News</a>
        <a css={sidebarMenu}>Contact</a>
        <a css={sidebarMenu}>About</a>
      </div>
      <div css={content}>
        <Summary/>
      </div>
    </div>
  );
}

export default App;


/*
https://www.w3schools.com/howto/tryit.asp?filename=tryhow_css_sidebar_responsive
https://jsramblings.com/2018/02/04/styled-components-media-queries.html
https://velog.io/@velopert/create-your-own-design-system-with-storybook
https://emotion.sh/docs/media-queries#gatsby-focus-wrapper

*/
