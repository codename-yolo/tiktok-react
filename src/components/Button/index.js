import clsx from 'clsx'

import styles from './Button.module.css'

import styles2 from './Button2.module.scss'

function Button({ xam, primary, disable }) {

    const cssString = clsx(styles.btn, {
        [styles.xam]: xam,
        [styles.primary]: primary,
        [styles2.disable]: disable

    })
    return (
        // <button className={`${styles.btn} ${styles.btnFont}`}>Click me !!</button>
        // <button className={[styles.btn, styles.btnFont].join(' ')}>Click me !!</button>
        // <button className={clsx(styles.btn, styles.btnFont)}>Click me !!</button>
        <button className={cssString}>Click me !!</button>




    )
}

export default Button