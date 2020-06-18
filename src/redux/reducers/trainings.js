import { ADD_TRAINING } from '../actions/actionTypes'

const initialState = {
  trainings: []
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TRAINING:
      return {
        ...state,
        trainings: action.payload
      }
    default:
      return state
  }
}

export default reducer
