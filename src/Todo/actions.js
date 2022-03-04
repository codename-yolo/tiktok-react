import { SET_JOB, ADD_JOBS, DELETE_JOB } from './constants'


export const setJob = (payload) => {
    console.log('Dispatch call and truyền đối số', payload);
    return {
        payload,
        type: SET_JOB
    }
}

export const getJob = (payload) => {
    console.log('Dispatch call and truyền đối số', payload);
    return {
        payload,
        type: ADD_JOBS
    }
}



export const deleteJob = (payload) => {
    console.log('Dispatch call and truyền đối số', payload);
    return {
        payload,
        type: DELETE_JOB
    }
}