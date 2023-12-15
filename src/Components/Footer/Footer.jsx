import { useSelector } from 'react-redux';
import styles from './Footer.module.css'



const Footer = () => {
    const state = useSelector(state=>state.footer)
    return (
        <footer >
            <div className={styles.footer}>
            <section className={styles.contact}>
                <p>Інформація про розробника:</p>
                {state.contact.map(item =>
                    <a href={item.link}
                        key={`Ключ${item.id}`}>
                        <img src="" alt="" />
                    </a>
                )}
            </section>
            <section className={styles.help}>
                {state.help.map(item => <span key={item.id}>{item.text}</span>)}
            </section>
            </div>
        </footer>
    )
}
export { Footer };