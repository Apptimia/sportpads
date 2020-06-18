import { ADD_TRAINING } from './actionTypes'

export const addTraining = (training) => {
    return {
        type: ADD_TRAINING,
        payload: training
    }
}
