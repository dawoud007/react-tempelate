import React,{Component} from 'react'
import axios from 'axios'

import {ScoialMedia,ScoialMediaScoial,Icon,ScoilalP,SpanInfo1,SpanInfo2} from './style.js'
class Social extends Component{
  state={
    social:[]
  }
componentDidMount(){
axios.get('js/data.json').then(res=>{this.setState({social:res.data.social})})

}
render(){
  const {social}=this.state
  const socialMedia=social.map((item)=>{
    return(

      <ScoialMediaScoial index={item.id} key={item.id}>
          <Icon className={item.icon}></Icon>
          <ScoilalP>
              <SpanInfo1 >{item.title}</SpanInfo1>
              <SpanInfo2 >{item.body}</SpanInfo2>
          </ScoilalP>
      </ScoialMediaScoial>

    )
  })

  return (
    <ScoialMedia>

               {socialMedia}

           </ScoialMedia>
);
}
}
export default Social;
