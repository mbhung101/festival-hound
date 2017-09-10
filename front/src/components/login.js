import React, { Component } from 'react'
import { Form, Button } from 'semantic-ui-react'

export default class Login extends Component {
  render(){
    return (
      <div className="ui center aligned middle aligned grid">
        <div className="column" style={{width:450}}>
            <h2> Login </h2>
        <Form>
          <div className = "ui stacket segment">
          <div className="field">
            < input placeholder ="username"/>
          </div>
          <div className="field">
            < input placeholder= "password"/>
          </div>
          <Button color="red" type="submit" className="ui button" role="button">Submit</Button>
          </div>
        </Form>
        <div>
        </div>
        <a href="/signup"> No Account? </a>
        </div>
      </div>
    )
  }
}
