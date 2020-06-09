import { DARK_MODE_TOGGLE } from '../actions'

const initialState = {
  darkMode: false
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case DARK_MODE_TOGGLE:
      return {
        ...state,
        darkMode: !darkMode
      }
    default:
      return state
  }
}

export default reducer
