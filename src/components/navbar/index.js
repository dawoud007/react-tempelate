import React from 'react'
import{Link} from 'react-router-dom'
import {NavbarSection,Logo,UlList,H2,List,Ancor} from './style.js'
const Nav =(props)=>
{

  return (
    <NavbarSection>
    <div className="container">
    <Logo>
    <H2>Ultra Profile</H2>
    </Logo>
    <UlList>
    <List><Link pero to="/">Home</Link></List>
    <List><Link to="/work">Work</Link></List>
    <List><Link to="/portofilo">portofilo</Link></List>
    <List><Link to="/social">social</Link></List>
    <List><Link  to="/about">About</Link></List>
    <List><Link to="/contact">contact</Link></List>
    </UlList>
    </div>
    </NavbarSection>
);

}
export default Nav;
