
import { useStore } from './hooks'
import { setTodoInput, addTodo } from './actions'


export { default as StoreProvider } from './Provider'
export { default as StoreContext } from './Context'

export * from './hooks'

export * from './actions'




function App() {
    const [state, dispatch] = useStore()
    const { todos, todoInput } = state
    console.log(todoInput);
    return (
        <div>
            <input
                value={todoInput}
                placeholder='Enter todo...!'
                onChange={(e) => {
                    dispatch(setTodoInput(e.target.value))
                }}
            ></input>
            <button onClick={() => {
                dispatch(addTodo(todoInput))
            }}>Add</button>
            <ul>
                {todos.map((todo, index) => {
                    return (<li key={index}>{todo}</li>)
                })}

            </ul>
        </div>
    )
}
export default App
