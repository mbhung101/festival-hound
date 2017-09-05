import React, { Component } from 'react'
import Nav from '../components/nav'
import Landing from '../components/landing'

export default class FHContainer extends Component {
  constructor(){
    super()
    this.state = {
    }
  }
  render () {
  return (
    <div className="ui container">
      <Nav/>
      <Landing/>
    </div>
  )}
}
