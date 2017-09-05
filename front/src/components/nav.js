import React, { Component } from 'react'
import { Menu, Item } from 'semantic-ui-react'

export default class Nav extends Component {
  render(){
    return(
      <div className="ui red inverted two item menu">
        <a className="active item">Home</a>
        <a className="item">Login/Logout</a>
      </div>
    )
  }
}
