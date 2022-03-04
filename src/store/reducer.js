import { ADD_TODO, SET_TODO_INPUT } from "./constants"

const initState = {
    todos: [],
    todoInput: ''
}

function reducer(state, action) {
    let newState
    switch (action.type) {
        case SET_TODO_INPUT:
            newState = {
                ...state,
                todoInput: action.payload
            }
            break
        case ADD_TODO:
            newState = {
                ...state,
                todos: [...state.todos, action.payload]
            }
            break
        default:
            throw new Error('dm co loi roi')
    }
    return newState
}
export default reducer
export { initState }