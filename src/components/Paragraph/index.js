import styles from './Paragraph.module.css'

console.log(styles);
function Paragraph() {
    return (
        <div className={styles.yo}>
            <h2 className={styles.yo}>component paragraph</h2>
            <h2 className={styles.paragraph}>component paragraph</h2>

        </div>

    )
}

export default Paragraph