import styled from "styled-components";
import colors from "./colors";

import { BiEdit } from 'react-icons/bi';

import { MdDelete } from 'react-icons/md'



export const Main = styled.main`
width: 100%;
height: 100%;
`


export const Conatiner = styled.section`
   max-width: 600px;
   margin: 0 auto;
   margin-top: 10rem;
   width: 90%;
   padding: 1rem 1.8rem;
   background-color: ${colors.lightWhite};
   border-radius: 5px;
   box-shadow: 2px 2px 10px lightgray,-2px 2px 10px lightgray,2px -2px 10px lightgray,-2px -2px 10px lightgray;
   text-align: center;
`


export const ContainerHeader = styled.h1`
   font-weight:bold;
   text-transform: capitalize;
   font-size: 1.6rem;
   cursor: pointer;
`


export const Form = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  margin-top: 1rem;
 
`

export const Input = styled.input.attrs({ type: "text" })`
  width: 80%;
  height: 40px;
  font-size: 1.1rem;
  padding: 0.5rem 1rem;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  border-left:1px solid ${colors.lightgray};
  border-top:1px solid ${colors.lightgray};
  border-bottom:1px solid ${colors.lightgray};

  ${({ error }) => (
        error && `border:2px solid ${colors.danger};`
    )}
`

export const Button = styled.button`
  width: 20%;
  height: 40px;
  min-width: 100px;
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
  
`


export const Items = styled.article`
  width: 100%;
  margin:1rem auto;  
`


export const Clear = styled.button`
  background-color: white;
  color: ${colors.dangerbtn};
  margin: 0.8rem auto;
  padding: 0.5rem 1rem;
  font-size: 1.2rem;
  border-radius: 5px;
  line-height:1.2rem;
  text-transform: capitalize;
  cursor: pointer;
`

export const AlertStyle = styled.p`
  width: 100%;
  margin: 1rem 0;
  padding: 0.5rem 0;
  text-align: center;
  font-size: 1rem;
  border-radius: 5px;
  ${({ type }) => (
        (type === 'danger' && `color:${colors.danger};background-color:${colors.bgdanger}`) || (type === 'success' && `color:${colors.success};background-color:${colors.bgsuccess}`)
    )}
`


export const ItemContainer = styled.article`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem 0.9rem;
  margin: 0.4rem auto;
  border-radius: 5px;
  transition: all 1s ease;
  &:hover{
    background-color: ${colors.lightgray};
  }
`


export const Text = styled.p`
  font-size: 1rem;
  color:black;
  text-transform: capitalize;
  width: 90%;
  text-align: left;
`

export const ItemAction = styled.p`
 display: flex;
 align-items: center;
 justify-content: space-between;
 width: 10%;
 min-width: 30px;
`

export const EditButton = styled(BiEdit)`
   color:${colors.bgsuccess};    
   font-size: 1.1rem;
   cursor: pointer;
   &:hover{
    transform: scale(1.1);
    color:${colors.success};    
   }
`
export const DeleteButton = styled(MdDelete)`
  color:${colors.bgdanger};    
   font-size: 1.1rem;
   cursor: pointer;
   &:hover{
    transform: scale(1.1);
    color:${colors.danger};    
   }
`