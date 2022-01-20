import React,{Component} from 'react'
import axios from 'axios'
import {Worker,WorkTitle,WorkTitleSpan,Icon,WorkPart,PartTitle,Line,PartDisk } from './style.js'
class Work extends Component{
  state={
    works:[

    ]
  }


componentDidMount(){
  axios.get('js/data.json').then(res=>{this.setState({works:res.data.works})})
}



  render()
  {
    const {works}=this.state

    const workList=works.map((item)=>{
      return(

            <WorkPart first={item.id} key={item.id}>
                <Icon className={item.icon_name}></Icon>
                <PartTitle>{item.title}</PartTitle>
                <Line/>
                <PartDisk>
                  {item.body}
                </PartDisk>
            </WorkPart>




      )
    })
  return (
    <Worker>
              <div className="container">
                  <WorkTitle><WorkTitleSpan>My</WorkTitleSpan> Work</WorkTitle>
                 {workList}
              </div>
          </Worker>
);
}

}
export default Work;
