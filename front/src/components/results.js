import React, { Component } from 'react'
import {Button, Form} from 'semantic-ui-react'
import SignUp from './signup'

export default class Results extends Component {
  render(){
    return(
      <div>
        <div className="ui center aligned middle aligned grid">
          <div className = "column" style={{width:"750px"}}>
            <h2> Festival Hound </h2>
            <Form onSubmit={this.props.eventSearcher}>
              <div className="field">
                <div className="ui action input">
                  <input placeholder= {this.props.searchTerm}/>
                  <Button color="red" type='submit'>Submit</Button>
                </div>
              </div>
            </Form>
          </div>
        </div>
        <SignUp/>
      </div>
    )
  }
}
