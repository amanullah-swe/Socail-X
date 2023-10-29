import React from 'react'
import { styled } from 'styled-components'
function Styled() {
    return (
        <div>Styled</div>
    )
}
const Wrapper = styled.div`
  position: relative;
  margin: 10px 0;
  width: 100%;
  
`;

const Container = styled.div`
width: 100vw;
height: 100vh;
display: flex;
align-items: center;
justify-content: center;
`;

const Form = styled.form`
max-width: 600px;
max-height:650px;
width: 100%;
height: 100%;
display: flex;;
align-items: center;
justify-content: center;
flex-direction: column;
padding: 20px;
background-color: ${props => props.theme.background};
border-radius: 10px;
box-shadow: 1px 1px 10px 0px ${props => props.theme.text + '30'};

`;
const Input = styled.input`
  font-size: 18px;
  padding: 10px 10px 10px 5px;
  display: block;
  width: 90%;
  min-width: 0%;
  height: 30px;
  border: none;
  border-bottom: 1px solid ${props => props.theme.text};
  background-color: inherit;
  &:focus {
    outline: none;
  }
`;

const Label = styled.label`
  color: #999;
  font-size: 16px;
  font-weight: normal;
  position: absolute;
  pointer-events: none;
  left: 5px;
  top: 10px;
  transition: 0.2s ease all;
  ${Input}:focus ~ & {
    top: -18px;
    font-size: 14px;
    color: #5264ae;
  }
`;
const Label1 = styled.label`
  color: #999;
  font-size: 16px;
  font-weight: normal;
  position: absolute;
  pointer-events: none;
  transition: 0.2s ease all;
  left: 5px;
    top: -18px;
    font-size: 14px;
    color: #5264ae;
`;
const Button = styled.button`
 background: rgba(11, 165, 176, 0.1);
    fill: ${props => props.theme.text};
    border: none;
    outline: none;
    border-radius: 5px;
    font-weight: 500;
    cursor: pointer;
    transition: all ease 0.2s;
    font-size: 16px;
    margin: 20px;
    padding: 10px 20px;
    border: 1px solid ${props => props.theme.primary};
    &:hover{
        scale: 1.1;
    }

`;

const Link = styled.a`
text-decoration: underline;
line-height: 1;
word-spacing: 3px;
`;


const WrapperContainer = styled.div`
display: flex;
flex-direction: row;
align-items: start;
align-self: self-start;
width:95%;
`;

const LabelForfile = styled.label`
  color: ${props => props.theme.text};
  font-size: 16px;
  font-weight: normal;
  border-bottom: 1px solid ${props => props.theme.text};
  width: 93%;
  display: block;
  padding: 10px 0;
  margin-bottom: 10px;
`;

const ErrorMessage = styled.span`
font-size: 10px;
color: red;
`;
export default Styled;
export { ErrorMessage, WrapperContainer, LabelForfile, Link, Button, Label, Label1, Form, Container, Wrapper, Input };
