import React, {Component} from 'react'
// import {COURSES} from '../data'
import {connect} from 'react-redux'
import {setTopicCourses} from '../actions/coursesActions'
import {setCourse} from '../actions/courseActions'
import CourseList from '../components/courseComponents/CourseList'
import CourseShow from '../components/courseComponents/CourseShow'
import {Grid, Button, Icon} from 'semantic-ui-react'
import PropTypes from 'prop-types'

class TopicCoursesContainer extends Component {

  static contextTypes = {
    router: PropTypes.object
  }

  componentWillMount () {
    this.props.setTopicCourses(this.context.router.route.match.params.topicId)
  }

  setCourseShowForm = () => {
    this.props.setCourse({form: true})
  }

  render () {
    // return class list and class show component, class list should change the store state of what
    // is in class show, this component should fetch the appropriate classes
    return (
      <Grid centered divided>
        <Grid.Row style={{'height': '700px'}}>

          <Grid.Column width={5}>
            <Grid.Row style={{'height': '600px'}}>
              <CourseList courses={this.props.courses} />
            </Grid.Row>
            <Grid.Row style={{'height': '100px'}}>
              <Button style={{'height': '100%', 'width': '100%'}}
                color='blue'
                onClick={this.setCourseShowForm}
                >
                <Icon name='plus'/>
                Add Course
              </Button>
            </Grid.Row>
          </Grid.Column>

          <Grid.Column width={11}>
            <CourseShow course={this.props.course} />
          </Grid.Column>

        </Grid.Row>

      </Grid>

    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setTopicCourses: courses => dispatch(setTopicCourses(courses)),
    setCourse: course => dispatch(setCourse(course))

  }
}

const mapStateToProps = state => {
  return {
    courses: state.courses,
    course: state.course,
    topic: state.topic
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TopicCoursesContainer)
