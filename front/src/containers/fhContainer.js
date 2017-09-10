import React, { Component } from 'react'
import Nav from '../components/nav'
import Homepage from '../components/homepage'
import Login from '../components/login'
// import { Route, BrowserRouter } from 'react-router-dom'
// render (){
//   return (
//     <BrowserRouter>
//       <div id="main_container" className = "container">
//         <Nav/>
//         <Route exact path = '/home' render= {() =><Homepage />}/>
//         <Route exact path = '/login' render= {() =><Login />}/>
//       </div>
//     </BrowserRouter>
//   )
// }


export default class FHContainer extends Component {
  render (){
    return(
      <Homepage/>
    )
  }
}
