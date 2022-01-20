import React,{Component} from 'react'
import {BrowserRouter,Route}from 'react-router-dom'
import Index from './components/index/index'
import Nav from './components/navbar/index'
import Contact from './components/contact/index'
import Portofolio from './components/portofolio/index'
import About from './components/about/index'
import Social from './components/socialMedia/index'
import Work from './components/work/index'

class App extends Component{
 render() {
  return (
    <BrowserRouter>
    <Nav />
  <Route exact path='/' component={Index}/>
  <Route path='/portofilo' component={Portofolio}/>
  <Route path='/contact' component={Contact}/>
  <Route path='/social' component={Social}/>
  <Route path='/about' component={About}/>
    <Route path='/work' component={Work}/>


    </BrowserRouter>
  );
}
}
export default App;
