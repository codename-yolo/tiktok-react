import { ThemeContext } from './ThemeContext'
import { useContext } from 'react'


function Paragraph() {
    const values = useContext(ThemeContext)
    console.log(values);
    return (
        <>
            <p className={values.theme}>Tham gia nhóm Học lập trình tại F8 trên Facebook để cùng nhau trao đổi trong quá trình học tập ❤️</p>
            <button onClick={values.handleTheme}>Click</button>
        </>

    )
}

export default Paragraph