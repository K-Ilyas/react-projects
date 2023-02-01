import styled from "styled-components";
import colors from "./colors";





export const Main = styled.main`
 width: 100%;
 height: 100%;
`


export const Container = styled.section`
  width: 100%;
  height: 100%;
`



export const Form = styled.form`
  margin: 2rem 0;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  font-size: 1.2rem;
  @media screen and (min-width: 600px) {
    flex-direction: row;
  }
  @media screen and (min-width: 600px) {
    margin-left: 2rem;
  }
`

export const InputConatiner = styled.div`
display: flex;
justify-content: center;
align-items: flex-start;
margin-top:1.5rem;

@media screen and (min-width: 600px) {
    margin-top:0;
    margin-left: 1rem;
  }
`

export const Label = styled.label`
  font-weight: bold;
  margin-right: 0.2rem;
  text-transform: capitalize;
  font-size: 1.2rem;
  
  @media screen and (min-width: 600px) {
    font-size: 1.5rem;
  }
`

export const Input = styled.input.attrs({ type: "text" })`
  width: 150px;
  height: 40px;
  font-size: 1.1rem;
  padding: 0.5rem 1rem;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  ${({ error }) => (
    error && `border:2px solid ${colors.danger};`
  )}
  @media screen and (min-width: 600px) {
    font-size: 1.4rem;
    width: 250px;
    height: 50px;
  }
`

export const Button = styled.button`
  width: 70px;
  height: 40px;
  font-weight: bold;
  font-size: 0.8rem;
  text-align: center;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  text-transform: capitalize;
  color:white;
  line-height: 1.2rem;
  background-color: ${colors.lightbluebtn};
  &:hover{
    background-color: ${colors.bluebtn};
    transform: scale(1.05);
  }
  @media screen and (min-width: 600px) {
    width: 100px;
    height: 50px;
    font-size: 1.2rem;
  }
`

export const Colors = styled.article`
   min-height: calc(100vh - 114px);
   width:100%;
   height: 100%;
   display: grid;
   grid-template-columns: repeat( auto-fit, minmax(233px, 1fr) );
   grid-template-rows: repeat(auto-fit, minmax(96px, 1fr));
   `

export const ColorRender = styled.div`
  padding: 1rem 2rem;
  background-color: rgb(${({ bgColor }) => bgColor});
  cursor: pointer;
  ${({ color }) => (
    (color === 'dark' && `color:${colors.lightColor}`) || (color === 'light' && `color:${colors.darkColor}`)
  )}

`


export const Text = styled.p`
 font-size: 0.9rem;
 font-weight: bold;
 text-align: left;
`