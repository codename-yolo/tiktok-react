function logger(reducer) {
    console.log('logger run');

    return (prevState, action) => { // useReducer tra ve state va lay action cho ham reducer
        console.group(action.type);
        console.log('Prev State', prevState);
        console.log('Action', action);

        const newState = reducer(prevState, action)

        console.log('New State', newState);
        console.groupEnd()

        return newState
    }
}

export default logger