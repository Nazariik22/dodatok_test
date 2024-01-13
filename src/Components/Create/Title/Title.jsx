import styles from './Title.module.css';
const Title = (props) => {

    return (
        <section className={styles.section}>
            <input type="text"
                placeholder='Заголовок тесту'
            value={props.title}
                onChange={(e) => props.setTitle(e.target.value)}
            />
            <textarea cols="30" rows="4"
                placeholder='Опис тесту'
                value={props.title_text}
                onChange={(e) => props.setTitle_text(e.target.value)}
            ></textarea>
        </section>
    )
}
export { Title }