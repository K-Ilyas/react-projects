import { createGlobalStyle } from 'styled-components'
import colors from './colors'



const GlobalStyle = createGlobalStyle`
    *,:before,:after{
        padding:0;
        margin:0;
        box-sizing:border-box;
    }
    body
    {
        background-color:${colors.lightgray};
        font-size:1rem;
        line-height: 1.5;
        color: #333;
        font-family: 'Kodchasan',sans-serif;
    }
    button{
        font-family: 'Kodchasan',sans-serif;
    }
    
`


export default GlobalStyle