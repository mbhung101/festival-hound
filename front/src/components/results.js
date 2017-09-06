import React, { Component } from 'react'
import {Button, Form} from 'semantic-ui-react'

export default class Results extends Component {
  render(){
    return(
      <div>
        <div className="ui center aligned middle aligned grid">
          <div className = "column" style={{width:"750px"}}>
            <h2> Festival Hound </h2>
            <Form onSubmit={this.props.eventSearcher}>
              <div className="field">
                <input placeholder={this.props.searchTerm} />
              </div>
              <Button color="red" type='submit'>Submit</Button>
            </Form>
          </div>
        </div>
      </div>
    )
  }
}
