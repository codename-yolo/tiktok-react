import './App.css';

import { useState, useCallback, useEffect, useLayoutEffect, useMemo, useRef, useReducer, useContext, createContext } from 'react'


// import Content from './HookUseContext/Content';

// import Test from './Test'

// import TodoApp from './Todo/index'

// import Content from './Content';

// UseState lesson 1

// const orders = [100, 200, 500]

// function App() {


//1. giá trị khởi tạo với callback
//   // const [state, setState] = useState(() => { 
//   //   const total = orders.reduce((total, cur) => {
//   //     return total + cur
//   //   })
//   //   return total
//   // })


// 1.2.  giá trị khởi tạo với callback với obj
//   const [info, setInfo] = useState({
//     name: 'cuong',
//     age: 23
//   })

//   const handleClick = () => {
//     // setState((prevState => prevState + 1)) // set lại giá trị của state  và render lại App() // Dùng với callback
//     setInfo({
//       ...info,
//       address: '89, VN'
//     })
//   }

//   return (
//     <div className="App">
//       <h1>{Object.keys(info).map((key, i) => { // Lặp qua obj
//         return (<div key={i}>{key} : {info[key]}</div>)
//       })}</h1>

//       <button onClick={handleClick}>Click Me !</button>
//     </div>
//   );
// }

// useState lesson 2

// const gifts = [
//   'CPU i9',
//   'RAM 32GB RGB',
//   'RGB KEYBOARD'
// ]


// const courses = [
//   {
//     id: 1,
//     name: 'HTML, CSS'
//   },
//   {
//     id: 2,
//     name: 'JAVASCRIPT'
//   },
//   {
//     id: 3,
//     name: 'ReactJS'
//   }
// ]

// function App() {

//   //I.Random gift
//   // const [gift, setGift] = useState()

//   // function handleClick() {
//   //   const index = Math.floor(Math.random() * 3)
//   //   setGift(gifts[index])
//   // }


//   //II.One way binding && Two way binding

//   //1. const [name, setName] = useState()

//   // 2. const [name, setName] = useState()
//   // const [email, setEmail] = useState()

//   // const handleSubmit = (e) => {
//   //   console.log({
//   //     name,
//   //     email
//   //   });
//   // }


//   //Handle state với  checkbox
//   const [checked, setChecked] = useState([])
//   console.log(checked);



//   const handleSubmit = () => {
//     console.log('id : ');
//   }

//   const handleCheck = (id) => {
//     setChecked(prev => {
//       const isChecked = checked.includes(id)
//       if (isChecked) {
//         return checked.filter((item) => {
//           return item !== id
//         })
//       } else {
//         return [...prev, id]
//       }

//     })
//   }


//   return (
//     <div className="App" >
//       {/*I.1 <h1>{gift || 'Chưa có phần thưởng'}</h1>
//       <button onClick={handleClick}>Lấy phần thưởng</button> */}

//       {/*2. <input value={name} onChange={(e) => {
//         setName(e.target.value)
//       }} />
//       <button onClick={() => {
//         setName('Nguyễn Văn BBB')
//       }}>onChange</button> */}

//       {/*2. <input value={name} onChange={(e) => {
//         setName(e.target.value)
//       }} />

//       <input value={email} onChange={(e) => {
//         setEmail(e.target.value)
//       }} />
//       <button onClick={handleSubmit}>Click Me !</button> */}

//       {/*3.1 {courses.map((course) => {
//         return (
//           <div key={course.id}>
//             <input type="radio"
//               onChange={() => {
//                 setChecked(course.id) //Set state = courseID
//               }}
//               checked={checked === course.id} // Check state === courseID  thì sẽ cho checked

//             />
//             {course.name}
//           </div>

//         )
//       })} */}


//       {courses.map((course) => {
//         return (
//           <div key={course.id}>
//             <input type="checkbox"
//               onChange={() => {
//                 handleCheck(course.id)
//               }}
//               checked={checked.includes(course.id)} // Check state === courseID  thì sẽ cho checked

//             />
//             {course.name}
//           </div>

//         )
//       })}

//       <button onClick={handleSubmit}>Click Me !</button>

//     </div >
//   );
// }


//TODO LIST
// function App() {
//   const [job, setJob] = useState('')
//   const [jobs, setJobs] = useState(() => {
//     const storageJobs = JSON.parse(localStorage.getItem('jobs'))
//     console.log(storageJobs);
//     return storageJobs ?? []
//   }) // ?? Nếu vế trước là null hoăc undefined sẽ lấy vế sau 
//   const handleAddList = () => {
//     setJobs((prevJob) => {
//       const newJobs = [...prevJob, job]
//       console.log(job);
//       const jsonJobs = JSON.stringify(newJobs)
//       localStorage.setItem('jobs', jsonJobs)
//       return newJobs
//     })
//     setJob('')
//   }
//   const handleDelete = (job) => {
//     setJobs((prevList) => {
//       let newList = prevList.filter(ele => ele !== job)
//       localStorage.setItem("jobs", JSON.stringify(newList))
//       return newList ?? []
//     })
//   }
//   return (
//     <div className="App" >
//       <input value={job} onChange={(e) => {
//         setJob(e.target.value)
//       }} />
//       <button onClick={handleAddList}>
//         Add
//       </button>
//       <ul>
//         {jobs.map((job, i) => {
//           return (<li key={i}>{job}
//             <button onClick={() => handleDelete(job)}>Delete</button>
//           </li>)
//         })}
//       </ul>
//     </div>
//   )
// }


//useEffect

// function App() {
//   const [state, setState] = useState(false)
//   return (
//     <div className="App" >
//       <button onClick={() => {
//         setState(!state)
//       }}>Toggle</button>
//       {state && <Content />}
//     </div>

//   )
// }

//Chia các component
// function App() {
//   return (
//     <TodoApp />
//   )
// }


//useContext 
// import { ThemeContext } from './HookUseContext/ThemeContext'

// function App() {
//   const values = useContext(ThemeContext)

//   return (
//     <div style={{ padding: 20 }}>
//       <button onClick={values.handleTheme}>Toggle theme</button>
//       <Content></Content>
//     </div>


//   )
// }


//useContext vs useReducer code TODOLIST


// import { useStore, actions } from './store'


// function App() {
//   const [state, dispatch] = useStore()
//   const { todoInput, todos } = state

//   const handleAdd = () => {
//     dispatch(actions.addTodo(todoInput))
//   }

//   return (
//     <div>
//       <input
//         value={todoInput}
//         placeholder="Enter todo..."
//         onChange={(e) => {
//           dispatch(actions.setTodoInput(e.target.value))
//         }}
//       ></input>
//       <button onClick={handleAdd}>Add</button>
//       <ul>
//         {todos.map((todo, i) => {
//           return (<li key={i}>{todo}</li>)
//         })}
//       </ul>


//     </div>
//   )
// }








//useImperativeHandle
// import Video from './Video'

// function App() {

//   const obj = {
//     className: 'abc'
//   }
//   const videoRef = useRef()
//   useEffect(() => {
//     console.log(videoRef);
//   })


//   const handlePlay = () => {
//     videoRef.current.play()
//   }
//   const handlePause = () => {
//     videoRef.current.pause()

//   }
//   return (
//     <div>

//       <Video ref={videoRef}  ></Video>
//       <button  {...obj} onClick={handlePlay}>Play</button>
//       <button onClick={handlePause}>Pause</button>

//     </div>
//   )
// }



// function App() {
//   const [title, setTitle] = useState('')
//   const [posts, setPosts] = useState([])
//   console.log(1);
//   useEffect(() => {
//     console.log(2);
//     fetch('https://jsonplaceholder.typicode.com/posts')
//       .then(response => response.json())
//       .then(posts => {
//         setPosts(posts)
//       })
//   }, [])

//   useEffect(() => {
//     console.log(4);
//     const handleScroll = () => {
//       console.log(window.scrollY);
//     }
//     window.addEventListener('scroll', handleScroll)
//   }, [])
//   return (
//     <div>
//       {console.log(3)}
//       <input
//         // value={title}
//         onChange={(e) => {
//           setTitle(e.target.value)
//         }}
//       ></input>
//       <ul>
//         {posts.map((post) => {
//           return (
//             <li key={post.id}>{post.title}</li>
//           )
//         })}
//       </ul>

//     </div >
//   )
// }

// function Content() {
//   const [count, setCount] = useState(1)
//   console.log(1);
//   useEffect(() => {
//     console.log('Mount', count);

//     return () => {
//       console.log('ClearUp lan: ', count);
//     }
//   }, [count])
//   return (
//     <div>
//       <div>{count}</div>
//       {console.log(2)}
//       <button onClick={() => {
//         setCount(count + 1)
//       }}>Click Me !</button>
//     </div>
//   )
// }

// function App() {
//   const [hide, setHide] = useState(false)
//   return (
//     <div>

//       <button onClick={() => {
//         setHide(hide ? false : true)
//       }}>Click me</button>
//       {hide && < Content />}
//     </div>

//   )
// }




// function Content() {
//   const [avatar, setAvatar] = useState()
//   console.log(1);

//   const handleAvatar = (e) => {
//     const file = e.target.files[0]
//     file.preview = URL.createObjectURL(file)
//     setAvatar(file)

//   }

//   useEffect(() => {
//     console.log('useEffect mounted');
//     return () => {
//       console.log('clear');
//       avatar && URL.revokeObjectURL(avatar.preview)
//     }
//   }, [avatar])
//   return (
//     <div>
//       {console.log(2)}
//       <input
//         type="file"
//         onChange={handleAvatar}
//       ></input>
//       {avatar && <img src={avatar.preview} alt='' ></img>}
//     </div >
//   )
// }

// function App() {
//   const [hide, setHide] = useState(false)
//   return (
//     <div>

//       <button onClick={() => {
//         setHide(hide ? false : true)
//       }}>Click me</button>
//       {hide && < Content />}
//     </div>

//   )
// }


// function App() {
//   const [count, setCount] = useState(60)
//   console.log('renderApp');
//   const timeId = useRef()
//   const num = useRef(0)
//   const h1Ele = useRef()

//   console.log(h1Ele);

//   useEffect(() => {
//     // console.log(++num.current);
//   })
//   const handleStart = () => {
//     console.log('handle Start');
//     timeId.current = setInterval(() => {
//       setCount(prev => {
//         return prev - 1
//       })
//     }, 1000)
//   }

//   const handleStop = () => {
//     console.log('handle Stop');
//     clearInterval(timeId.current)
//   }

//   return (
//     <div style={{ padding: 20 }}>
//       {console.log('render DOM')}
//       <h1 ref={h1Ele}>{count}</h1>
//       <button onClick={handleStart}>Start</button>
//       <button onClick={handleStop}>Stop</button>

//     </div>
//   )
// }


// function App() {
//   const [name, setName] = useState('')
//   const [price, setPrice] = useState('')
//   const [products, setProducts] = useState([])
//   const inputEle = useRef()

//   const handleName = (e) => {
//     setName(e.target.value)
//   }
//   const handlePrice = (e) => {
//     setPrice(e.target.value)
//   }

//   const handleSubmit = () => {
//     setProducts([...products,
//     {
//       name,
//       price: parseInt(price)

//     }])
//     setName('')
//     setPrice('')
//     inputEle.current.focus()

//   }
//   const total = useMemo(() => {
//     const result = products.reduce((acc, product) => {
//       return acc + product.price
//     }, 0)

//     return result
//   }, [products])

//   return (
//     <div style={{ padding: 20 }}>
//       <div >
//         <input
//           ref={inputEle}
//           value={name}
//           placeholder='Enter name ...!'
//           onChange={handleName}
//         />
//       </div>
//       <div>
//         <input
//           value={price}
//           placeholder='Enter price ...!'
//           onChange={handlePrice}

//         />
//       </div>
//       <button onClick={handleSubmit}>Add</button>
//       <ul>
//         {products.map((product, i) => {
//           return (<li key={i}>{product.name}</li>)
//         })}
//       </ul>
//       <div>Total : {total} </div>

//     </div >
//   )
// }


// import Todo from './Todo'

// function App() {
//   return (
//     <div>
//       <Todo></Todo>
//     </div>
//   )
// }
// import Content from './HookUseContext/Content'

// function App() {


//   return (
//     <div>
//       <Content></Content>

//     </div>
//   )

// }

// import { useStore } from './store'
// import { setTodoInput, addTodo } from './store'


// function App() {
//   const [state, dispatch] = useStore()
//   const { todos, todoInput } = state
//   console.log(todoInput);
//   return (
//     <div>
//       <input
//         value={todoInput}
//         placeholder='Enter todo...!'
//         onChange={(e) => {
//           dispatch(setTodoInput(e.target.value))
//         }}
//       ></input>
//       <button onClick={() => {
//         dispatch(addTodo(todoInput))
//       }}>Add</button>
//       <ul>
//         {todos.map((todo, index) => {
//           return (<li key={index}>{todo}</li>)
//         })}

//       </ul>
//     </div>
//   )
// }


// import Video from './Video'

// function App() {
//   const videoRef = useRef()

//   const handlePause = () => {
//     videoRef.current.pausevideo()
//   }
//   const handlePlay = () => {
//     videoRef.current.playvideo()

//   }
//   return (
//     <div>
//       <Video ref={videoRef}></Video>
//       <button onClick={handlePlay}>Play</button>
//       <button onClick={handlePause}>Pause</button>

//     </div>
//   )
// }

// import Heading from './components/Heading'
// import Paragraph from './components/Paragraph';
// import Button from './components/Button';

// function App() {
//   return (
//     <div style={{ padding: 50 }}>
//       <Button primary ></Button>
//       <Button xam ></Button>
//       <Button disable ></Button>

//     </div>
//   )
// }


import HomePage from './pages/Home'
// import NewsPage from './pages/News'
// import ContactPage from './pages/Contact'
import { Routes, Route, Link } from 'react-router-dom'
import TodoApp from './Todo'
import TodoApp2 from './store'
import Contact from './components/contact/Contact';
function App() {
  return (
    <div>

      <Contact></Contact>
      <nav>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/TodoApp1'>News</Link>
          </li>
          <li>
            <Link to='/TodoApp2'>Contact</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/TodoApp1' element={<TodoApp />} />
        <Route path='/TodoApp2' element={<TodoApp2 />} />
      </Routes>
    </div>
  )
}


export default App;
