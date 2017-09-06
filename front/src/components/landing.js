import React, { Component } from 'react'
import { Form, Button } from 'semantic-ui-react'

export default class Landing extends Component {

  render (){
    return (
      <div>
        <div className="ui center aligned middle aligned grid">
          <div className = "column" style={{width:"750px"}}>
            <h2> Festival Hound </h2>
            <Form onSubmit={this.props.eventSearcher}>
              <div className="field">
                <input placeholder= "Where to?" />
              </div>
              <Button color="red" type='submit'>Submit</Button>
            </Form>
          </div>
        </div>
      </div>

    )
  }
}
