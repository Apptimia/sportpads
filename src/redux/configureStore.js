import { createStore, combineReducers, compose } from 'redux'
import uiReducer from './reducers/ui'
import trainingsReducer from './reducers/trainings'

const rootReducer = combineReducers({
    ui: uiReducer,
    trainings: trainingsReducer
})

let composeEnhancers = compose;

if (__DEV__) {
  composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
}

const configureStore = () => {
  return (createStore(rootReducer))
}

export default configureStore
