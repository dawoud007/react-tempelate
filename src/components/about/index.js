import React,{Component} from 'react'
import axios from 'axios'
import {Creative,CreativeInfo,InfoTitle,TitleSpan,InfoDir,InfoDesc,InfoDescA}from "./style.js"
const About =(props)=>
{

  return (
    <Creative id="#about">
           <div class="container">
               <CreativeInfo>
                   <InfoTitle><TitleSpan>This is</TitleSpan> Me</InfoTitle>
                   <InfoDir>Creative Director</InfoDir>
                   <InfoDesc>
                       Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim est <InfoDescA href="#">explicabo</InfoDescA> maxime quibusdam quaerat nihil aliquid aperiam deleniti, repellendus dolorum. Possimus nisi cupiditate ad veritatis?
                   </InfoDesc>
                   <InfoDesc>
                       Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim est explicabo maxime quibusdam quaerat nihil aliquid aperiam deleniti, repellendus dolorum. Possimus nisi cupiditate ad veritatis?
                   </InfoDesc>
               </CreativeInfo>
           </div>
       </Creative>
);

}
export default About;
