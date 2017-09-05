import React, { Component } from 'react'
import { Form, Button } from 'semantic-ui-react'

export default class Landing extends Component {
  constructor(props){
    super(props)
    this.state={
      input: ""
    }
  }

  render (){
    return (
      <div>
        <h2>Where to?</h2>
        <div className="ui center aligned middle aligned grid">
          <div className = "column" style={{width:"750px"}}>
            <Form onSubmit={this.onNumberSubmit}>
              <Form.Field>
                <input type="text"/>
              </Form.Field>
              <Button color="red" type='submit'>Submit</Button>
            </Form>
          </div>
        </div>
      </div>

    )
  }
}
