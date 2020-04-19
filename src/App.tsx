import * as React from 'react';
import Summary from './containers/Summary';
import './App.scss'

function App() {
  return (
    <div>
      <div className="sidebar">
        <a className="sidebar-menu" href="/#">Home</a>
        <a className="sidebar-menu" href="/#">지역별</a>
        <a className="sidebar-menu" href="/#">월별</a>
        <a className="sidebar-menu" href="/#">리포트</a>
      </div>
      <div className="main-content">
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
