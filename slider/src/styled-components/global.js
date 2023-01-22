
// gloabl style

import { createGlobalStyle } from "styled-components";
import colors from "./colors";


export const GlobalStyle = createGlobalStyle`
  *,:before,:after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    font-family:apple-systems,sans-serif;
    font-size: 16px;    
    line-height: 1.5;
    color: #333;
    background-color: ${colors.lightgray};
  }
`