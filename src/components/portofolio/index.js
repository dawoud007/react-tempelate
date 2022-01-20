import React,{useState,useEffect} from 'react'
import axios from 'axios'
import {MyPortfolio,PortfolioTitle,PortfolioSpan,PortfolioList,PortfolioItem,BoxDiv,BoxImg,BoxOverlay,Boxspan} from './style.js'
const Portofolio =(props)=>
{
const [images,setImages]=useState([])
useEffect( ()=>{
  axios.get('js/data.json').then(res=>{setImages(res.data.portfolio)})
},[])

const portfolioImages=images.map((item)=>{
  return(
    <BoxDiv key={item.id}>
        <BoxImg src={item.image} alt="image"/>
        <BoxOverlay >
            <Boxspan>
                Show Image
            </Boxspan>
        </BoxOverlay>
    </BoxDiv>

  )
})



  return (
    <MyPortfolio>
               <PortfolioTitle><PortfolioSpan>My</PortfolioSpan> Portfolio</PortfolioTitle>
               <PortfolioList>
                   <PortfolioItem active>All</PortfolioItem>
                   <PortfolioItem >HTML</PortfolioItem>
                   <PortfolioItem >Photoshop</PortfolioItem>
                   <PortfolioItem >Wordpress</PortfolioItem>
                   <PortfolioItem >Mobile</PortfolioItem>
               </PortfolioList>

               <div class="box">

                   {portfolioImages}

               </div>

           </MyPortfolio>
);

}
export default Portofolio;
