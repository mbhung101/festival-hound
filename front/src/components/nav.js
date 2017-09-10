import React, { Component } from 'react'
import { Menu, Item } from 'semantic-ui-react'

export default class Nav extends Component {
  render(){
    return(
      <div className="ui red inverted three item menu">
        <a href="/home" className="active item" link='/home' >Home</a>
        <a href="/profile" className="active item" link='/profile' >My Profile</a>
        <a href="/login" className="active item" link='/login' >Login/Sign Up</a>
      </div>
    )
  }
}
