import { useState, useCallback, useEffect, useLayoutEffect, useMemo, useRef, useReducer, useContext } from 'react'
import reducer, { initState } from './reducer';
import { setJob, getJob, deleteJob } from './actions'
import logger from './logger';


function App() {
    const inputRef = useRef()
    console.log('Re-render');
    const [state, dispatch] = useReducer(logger(reducer), initState)
    useEffect(() => {
        return () => {
            console.log('Componet unmounted');
        }
    }, [])
    console.log('State in Func Component', state);
    const { job, jobs } = state
    return (
        <div style={{ padding: 20 }}>
            {console.log('Render UI')}
            <h2>TODO</h2>
            <input
                ref={inputRef}
                value={job}
                placeholder='Enter to do...'
                onChange={(e) => {
                    dispatch(setJob(e.target.value))
                }}
            ></input>
            <button onClick={() => {
                dispatch(getJob(job))
                dispatch(setJob(''))
                inputRef.current.focus()
            }}>Add</button>
            <ul>
                {jobs.map((job, i) => {
                    return (<li key={i}>
                        {job}
                        <span onClick={() => {
                            dispatch(deleteJob(i))
                        }}>x</span>
                    </li>)
                })}
            </ul>
        </div>
    )
}

export default App