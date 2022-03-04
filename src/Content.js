import { useEffect, useState } from 'react'


// 1. useEffect(callback)
// 2. useEffect(callback,[])
// 3. useEffect(callback,[deps])


//---------

// 1. Callback luôn được gọi sau Component mounted
const tabs = ['posts', 'comments', 'albums']


function Content() {
    const [title, setTitle] = useState('')
    const [posts, setPosts] = useState([])
    const [type, setType] = useState('posts')
    const [showGoToTop, setShowGoToTop] = useState(false)
    const [countDown, setCountDown] = useState(180)


    useEffect(() => {
        console.log('effect');
        fetch(`https://jsonplaceholder.typicode.com/${type}`)
            .then((response) => {
                return response.json()
            })
            .then((posts) => {
                setPosts(posts)
            })
    }, [type])

    useEffect(() => {
        const handleScroll = () => {
            // console.log(window.scrollY);
            setShowGoToTop(window.scrollY >= 200)
        }
        window.addEventListener('scroll', handleScroll)


        return () => {
            window.removeEventListener('scroll', handleScroll)
        }

    }, [])


    // useEffect(() => {
    //     const timeId = setInterval(() => {
    //         setCountDown(prev => {
    //             return prev - 1
    //         })
    //     }, 1000)

    //     return () => {
    //         clearInterval(timeId)
    //     }

    // }, [])



    return (
        <div>
            {console.log('return')}
            {tabs.map(tab => {
                return (<button
                    key={tab}
                    onClick={() => { setType(tab) }}
                    style={type === tab ? {
                        color: '#fff',
                        backgroundColor: '#333'
                    } : {}}

                >{tab}</button>)
            })}
            {showGoToTop && <button
                style={{
                    position: 'fixed',
                    right: 20,
                    bottom: 20
                }}

            >Go to Top</button>}
            <input
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            ></input>
            <ul>
                {posts.map(post => {
                    return (<li key={post.id}>{post.title || post.name}</li>)
                })}
            </ul>

            <div>{countDown}</div>
        </div>
    )
}

export default Content