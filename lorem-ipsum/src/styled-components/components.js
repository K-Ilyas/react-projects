import styled from "styled-components";
import colors from "./colors";



export const MainComponent = styled.main`
   width: 100%;
   height: 100vh;
   padding-top:2rem; 
`
export const Hearder = styled.header`
     width: 100%;     
`

export const HeaderTitle = styled.h1`
    font-size: 1.3rem;
    text-align: center;
    text-transform:uppercase;
    @media screen and (min-width:600px) {
      font-size: 1.8rem;
      font-weight: bold;
    }
`

export const Conatiner = styled.section`
   max-width: 800px;
   width: 80%;
   margin:1rem auto;
`

export const Form = styled.form`
   width: 100%;
   display: flex;
   align-items: center;
   justify-content: center;
`

export const Label = styled.label`
     font-size: 0.9 rem;
    @media screen and (min-width:600px) {
      font-size: 1rem;
      font-weight: bold;
    }
`

export const Input = styled.input.attrs({ type: "number" })`
   padding: 8px 12px;
   margin: 0 6px;
   border:none;
   font-size: 14px !important;
   outline: none;
   border-radius:5px;
   width: 80px;
   cursor: pointer;
`

export const Button = styled.button`
   padding: 8px 12px;
   border: none;
   outline: none;
   background-color: ${colors.bluebtn};
   transition: all 0.3s linear;
   text-transform:uppercase;
   border-radius: 5px;
   color: white;
   font-size: 0.8rem;
   font-weight: bold;
   &:hover{
    background-color: ${colors.lightbluebtn};
    transform: scale(1.05);
   }
`;

export const Paragraphs = styled.article`
    width: 100%;
    margin: 2rem auto;
    height:100%;
    display: flex;
    text-align: center;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    @media screen and (min-width:800px) {
        width: 80%;
    }
`

export const Paragraph = styled.div`
    margin: 1rem auto;
    font-size: 1rem;
    @media screen and (min-width:600px) {
      font-size: 1.4rem;
      font-weight: bold;
    }

`