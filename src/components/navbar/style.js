import styled from 'styled-components'
export const NavbarSection=styled.div`


padding: 20px 0;
overflow: hidden;
background: #000;
position: relative;
border-bottom: 1px solid #0;

font-weight:700;



`


export const Logo=styled.div`
width: 50%;
float: left;
`


export const H2=styled.h2`
    font-size: 30px;
    font-weight: bold;
    color: orange;
`





export const UlList=styled.ul`
    width: 50% auto;
    float: left;
    list-style: none;
    padding:0;
`


export const List=styled.li`
  display: inline-block;
  & > a{

    display: block;
    color: orange;
    text-decoration: none;
    padding: 10px 15px;
    font-weight: bold;
    font-size: 1.1em;
    &:hover{
      color:red;
      font-size:2em;
    }


  }

  `
