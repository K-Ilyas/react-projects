import { createGlobalStyle } from "styled-components";
import colors from "./colors";



const GlobalStyle = createGlobalStyle`
 *,::before,::after{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
 }   
 body{
    width: 100%;
    height: 100%;
    background-color: ${colors.lightgray};
    font-family: 'Kodchasan',sans-serif;
 }
 button,input{
    font-family: 'Kodchasan',sans-serif;
    border:none;
    outline: none;
 }

`



export default GlobalStyle;