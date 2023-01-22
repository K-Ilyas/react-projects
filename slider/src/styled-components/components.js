import styled from "styled-components";
import colors from "./colors";



export const MainComponent = styled.main`
   width:100%;
   padding-top:2rem;
   height:100vh;
   display:flex;
   flex-direction:column;
   justify-content:center;
   align-items:center;
   

`
export const HeaderComponent = styled.header`
   max-width:1000px;
   width:80%;
   margin:1rem auto;
   display:flex;
   align-items:Center;
   justify-content:center;
   
`
export const TitleComponent = styled.h1`
  font-family: "Kodchasan", sans-serif;
   font-weight:bold;
   font-size:2rem;
   text-align:center;
   @media (min-width: 600px) {
    font-size:3rem;
   }
`

export const DivDecoration = styled.div`
 font-size:2.3rem;
 font-weight:bold;
 margin-right:1rem;
 text-align:center;
 color:${colors.lightorange};
 @media (min-width: 600px) {
    font-size:3.3rem;
}
`

export const Container = styled.section`
    max-width:900px;
    width:80%;
    height: 100%;
    margin:1rem auto;
    overflow:hidden;
    position:relative;
`


export const Card = styled.article`
     width:100%;
     transition:all 0.3s linear;
     opacity: 0;
     position:absolute;
     top:0;

     ${({ position }) => (
        (position === "active" && `transform:translateX(0);opacity: 1;`)
        || (position === "next" && `transform:translateX(100%);`)
        || (position === "last" && `transform:translateX(-100%);`)
    )}
`

export const CardTitle = styled.div`
  font-family: "Kodchasan", sans-serif;
  font-weight:bold;
  font-size:2rem;
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
`


export const CardImage = styled.img`
  display: block;
  object-fit: cover;
  width: 150px;
  height: 150px;
  border-radius:50%;
  border:4px solid ${colors.gray};
  box-shadow: 0px 4px 4px gray;
`
export const Name = styled.h2`
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-size:1rem;
  margin-top:2rem;
  color: ${colors.lightorange};
`

export const Role = styled.h4`
font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
font-size:1rem;
margin-top:1rem;
color: ${colors.bluegray};
`
export const Info = styled.p`
font-family: "Kodchasan", sans-serif;
font-size:0.9rem;
margin-top:1rem;
text-align:center;
color: ${colors.bluegray};
@media (min-width: 600px) {
    font-size:1rem;
}
`

export const CardFooter = styled.p`
color:${colors.lightorange};
margin-top:1rem;
font-size:3rem;
text-align:center;

`

export const ChevronBtn = styled.button`
   background-color:${colors.bluegray};
   color:white;
   text-align:center;
   font-size:1rem;
   line-height:6px;
   border-radius:2px;
   padding:5px 8px;
   position: absolute;
   top: 200px;
   cursor:pointer;
   border:none;
   ${(props) => (
        (props.left && `left:0;`)
        || (props.right && `right:0;`)
    )}
   &:hover{
    background-color:${colors.lightorange};
    transform:scale(1.2);
   }
   @media (min-width: 600px) {
    font-size:1.3rem;
    line-height:7px;
    padding:7px 10px;
   }
`