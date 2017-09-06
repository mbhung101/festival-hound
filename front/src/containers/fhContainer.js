import React, { Component } from 'react'
import Nav from '../components/nav'
import Landing from '../components/landing'

export default class FHContainer extends Component {
  constructor(){
    super()
    this.state = {
      search: ""
    }
    this.eventSearcher = this.eventSearcher.bind(this)
  }

  eventSearcher(e){
    e.preventDefault()
    this.setState({
      search: e.target.children[0].firstElementChild.value
    })
  }

  render () {
  if (this.state.search === ""){
  return (
    <div className="ui container">
      <Nav/>
      <Landing eventSearcher={this.eventSearcher}/>
    </div>
  )}
  } else {
    return (
      <Nav/>
      <Results/>
    )
}
}
