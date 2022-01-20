import React from 'react'
import {Father,Info,HomeTitle,HomeInfo,HomeDesk,Btn,Span} from './style.js'
const Home =(props)=>
{

  return (
    <Father>
              <div className="container">
                  <Info>
                      <HomeTitle >Mohamed Dawoud</HomeTitle>
                      <HomeInfo>Creative Developer</HomeInfo>
                      <HomeDesk>
                          Iam a professional <Span>UX Designer</Span> and Front-End Developer creating modern and resposive designs to Web and Mobile. Let us work together. Thank you.
                      </HomeDesk>
                      <Btn className="home-btn">Let's Begin</Btn>
                  </Info>
              </div>
          </Father>
);

}
export default Home;
