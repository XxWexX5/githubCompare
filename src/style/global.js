import { createGlobalStyle } from "styled-components";

import "font-awesome/css/font-awesome.css";

const Global = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
    border: 0;
  }

  body {
    background-color: #9B65E6;
    text-rendering: optimizeLegibility !important;
    -webkit-font-smoothing: antialiased !important;
    font-family: sans-serif;
    font-size: 10px;
  }

  html,
  body,
  #root {
    height: 100%
  }
`;

export default Global;
