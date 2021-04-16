import React, { Component } from 'react'

export default class App extends Component {

  state ={ 
      fullName : 'dribek chiheb',
      bio : 'born in 1992',
      imgSrc :<img src='https://media-exp1.licdn.com/dms/image/C4D03AQF_vRT-PIwJcw/profile-displayphoto-shrink_200_200/0/1598699242147?e=1622073600&v=beta&t=rfx_hISdFyJwN6CxaV73C6wqYeZ-YiAq3AUu8xwMFWQ'/>,
      profession : 'studient',
      show: false ,
      time:0 
}
tickHandler  = () => {
  this.setState({time : this.state.time + 1})
     return   this.state.time
   }
   componentDidMount () { 
   var timer = setInterval(this.tickHandler, 1000)
   this.setState({time : timer})

   }
render(){
 const displaytime = ()  => {

  if (this.state.time <60) {
    return this.state.time + "Seconds(s)"
  }
    const SS = this.state.time % 60 ;
    const MM = ((this.state.time /60) % 60).toFixed(0);
    const HH = (this.state.time / (60*60)).toFixed(0) ;
    return `${HH}H: ${MM}m: ${SS}s`
  }
 
 
 
 var change= e =>
   {

    this.setState({show:!this.state.show});
   }
   const x=this.state.show;
    return (
      
        <div style={{ textAlign: "center"}}>
       
       <button  onClick ={change}  >{x?'Hide My Profile':'Show My Profile'}</button>
       { 
       x && (<div style={{ textAlign: "center"}}>
         My name is {this.state.fullName} {this.state.bio} 
       {this.state.imgSrc}       
       and my profession is {this.state.profession}
       <p></p>
       <>{displaytime ()} </>
        </div>)
 }

        </div>
    )
}
                                
}