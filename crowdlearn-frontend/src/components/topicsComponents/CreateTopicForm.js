import React, {Component} from 'react'
import {Form, Input, Button} from 'semantic-ui-react'
import {addTopic} from '../../actions/topicsActions'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'

class CreateTopicForm extends Component {
  state = {
    name: ''
  }


  handleFormSubmit = event => {
    event.preventDefault()
    // console.log(this.props, 'at form submit');
    // Call action creator to add course
    this.props.addTopic(this.state)
  }



  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  render () {
    return (
      <Form onSubmit={this.handleFormSubmit}>
        <Form.Field>
          <label>Topic Name</label>
          <input type='text' name='name' onChange={this.handleChange} value={this.state.name}/>
        </Form.Field>
        <Form.Field >
          <div className='ui center aligned segment'>
            <Button type='submit'>Create Course</Button>
          </div>
        </Form.Field>
      </Form>
    )
  }
}

const mapStateToProps = state => {
  return {viewer: state.viewer}
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    addTopic: addTopic
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateTopicForm)
