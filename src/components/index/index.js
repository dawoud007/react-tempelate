import React,{Component} from 'react'
import Home from './../home/index'
import Footer from './../footer/index'


import About from './../about/index'
import Portofolio from './../portofolio/index'
import Work from './../work/index'
import Profile from './../profile/index'
import Social from './../socialMedia/index'
class Index extends Component{
 render() {
  return (
    <div className="index">

    <Home/>
    <Work/>
    <Portofolio/>
    <Profile/>
    <About/>
    <Social/>
    <Footer/>
    </div>
  );
}
}
export default Index
