import { DARK_MODE_TOGGLE } from '../actions/actionTypes'

const initialState = {
  darkMode: false
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case DARK_MODE_TOGGLE:
      return {
        ...state,
        darkMode: !state.darkMode
      }
    default:
      return state
  }
}

export default reducer
