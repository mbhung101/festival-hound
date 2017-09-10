import React, { Component } from 'react'
import { Form, Button } from 'semantic-ui-react'

export default class SignUp extends Component {
  render(){
    return (
      <div className= "ui containter">
        <Form>
          <div className="field">
            < input placeholder ="username"/>
          </div>
          <div className="field">
            < input placeholder= "password"/>
          </div>
          <Button color="red" type="submit" className="ui button" role="button">Submit</Button>
        </Form>
      </div>
    )
  }
}
