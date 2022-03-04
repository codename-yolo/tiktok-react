
import { ADD_JOBS, SET_JOB, DELETE_JOB } from './constants'



export const initState = {
    job: '',
    jobs: []
}

const reducer = (state, action) => {
    console.log('Reducer run');
    console.log('Action : ', action.type);
    console.log('Data : ', action.payload);

    let newState
    switch (action.type) {
        case SET_JOB:
            newState = {
                ...state,
                job: action.payload
            }
            break
        case ADD_JOBS:
            newState = {
                ...state,
                jobs: [...state.jobs, action.payload]
            }
            break
        case DELETE_JOB:
            const newJobs = [...state.jobs]
            // const result = newJobs.filter((job, index) => {
            //   return index !== action.payload
            // })
            newJobs.splice(action.payload, 1)
            newState = {
                ...state,
                jobs: newJobs
            }
            break
        default:
            throw new Error('DM LOI ROI')
    }
    console.log('Prev State: ', state);

    console.log('New State :', newState);
    return newState
}

export default reducer