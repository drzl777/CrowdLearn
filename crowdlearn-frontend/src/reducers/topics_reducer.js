import {SET_TOPICS, ADD_TOPIC, FETCH_TOPICS, REPLACE_TOPIC} from '../actions/types'

export const topicsReducer = (state = [], action) => {
  switch (action.type) {
    // case FETCH_COURSES:
    //   console.log('fetching', state)
    //   return {...state, loading: true}
    case SET_TOPICS:
      console.log('fetched', state)
      console.log(action.payload)
      return [...action.payload]// {loading: false, courses: [...action.payload]} // payload should be the viewer/user object
    case ADD_TOPIC:
      return [...state, {...action.payload}]
    case REPLACE_TOPIC:
      let nextState = [...state]
      const isCourse = el => el._id === action.payload._id
      const courseIndex = nextState.findIndex(isCourse)
      nextState[courseIndex] = {...action.payload}
      return nextState
    default:
      return state
  }
}
