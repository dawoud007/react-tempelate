import React,{Component} from 'react'
import axios from 'axios'
import {ProfileSkils,MyProfile,ProfiList,ProfileIem,ProfileSpan,ProfileSpanWeb,Skills,SkillsDesc,SkillBar,SkillBarTitle,Perc,Parent,ParentSpan,ProfileTitle,Skilltitle,TitleSpan,SkillTitleSpan } from './style.js'
class Profile extends Component{
state={
profile:[]
}
componentDidMount(){
axios.get('js/data.json').then(res=>{this.setState({profile:res.data.profile})})



}


render(){
  const {profile}=this.state
  console.log("wehfkefu")
console.log(profile)
  const skillList=profile.map((item)=>{
    return(
      <SkillBar  key={item.id}>
          <SkillBarTitle>{item.title}</SkillBarTitle>
          <Perc>{item.perc}</Perc>
          <Parent>
              <ParentSpan className={item.id} ></ParentSpan>
          </Parent>
      </SkillBar>
    )
  })

  return (
    <ProfileSkils>
               <div className="container">
                   <MyProfile>
                       <ProfileTitle><TitleSpan>My </TitleSpan>Profile</ProfileTitle>
                       <ProfiList>
                           <ProfileIem >
                               <ProfileSpan>Name</ProfileSpan>
                               Hamza Nabil
                           </ProfileIem>
                           <ProfileIem >
                               <ProfileSpan>Birthday</ProfileSpan>
                               21/1/1996
                           </ProfileIem>
                           <ProfileIem >
                               <ProfileSpan>Address</ProfileSpan>
                               Ain shams
                           </ProfileIem>
                           <ProfileIem >
                               <ProfileSpan>Phone</ProfileSpan>
                               4444 5555 6666
                           </ProfileIem>
                           <ProfileIem >
                               <ProfileSpan>Email</ProfileSpan>
                               hamza@hamza.com
                           </ProfileIem>
                           <ProfileIem >
                               <ProfileSpan>Website</ProfileSpan>
                               <ProfileSpanWeb>www.google.com</ProfileSpanWeb>
                           </ProfileIem>
                       </ProfiList>
                   </MyProfile>

                   <Skills>
                       <Skilltitle>Some <SkillTitleSpan>skills</SkillTitleSpan></Skilltitle>
                       <SkillsDesc>
                       Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos praesentium blanditiis esse cupiditate, omnis similique.
                       </SkillsDesc>
                        {skillList}

                   </Skills>

               </div>
           </ProfileSkils>
);
}

}
export default Profile;
