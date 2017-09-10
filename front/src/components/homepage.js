import React, { Component } from 'react'
import Nav from './nav'
import Landing from './landing'
import Results from './results'
import Login from './login'

export default class Homepage extends Component {
  constructor(){
    super()
    this.state = {
      search: "",
      user: 0
    }
    this.eventSearcher = this.eventSearcher.bind(this)
  }

  eventSearcher(e){
    e.preventDefault()
    this.setState({
      search: e.target.children[0].children[0].firstElementChild.value
    })
  }

  render () {
    if (this.state.search === ""){
    return (
      <div className="ui container">
        <Nav/>
        <Landing eventSearcher={this.eventSearcher}/>
        <Login />        
      </div>
    )
  } else {
    return (
      <div className="ui container">
        <Nav/>
        <Results searchTerm={this.state.search}/>
      </div>
    )
    }
  }
}
