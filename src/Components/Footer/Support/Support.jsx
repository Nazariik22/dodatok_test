import { Link } from 'react-router-dom'
import styles from './Support.module.css'
import tel from './../../../img/footer/Group 9.png'
import email from './../../../img/footer/image 11.png'
import { useDispatch } from 'react-redux'
import { closeModalAC } from '../../../redux/footer-reduser'
const Support = () => {
    const dispatch = useDispatch();
    return (
        <div className={styles.modal}>
            <section>
                <div className={`flex  ${styles.flex}`}>
                    <h2>Служба підтримки</h2>
                    <span className={styles.close}
                        onClick={() => dispatch(closeModalAC(1))}
                    >X</span>
                </div>
                <div className={styles.container}>
                    <Link to="tel+380855769578" className={styles.link}>
                        <img src={tel} alt="tel" />
                        +(380)855-7695-78
                    </Link>
                    <Link to="mailto:example@gmail.com" className={styles.link}>
                        <img src={email} alt="email" />
                        example@gmail.com
                    </Link>
                    <h3>Години Роботи:</h3>
                    <p>Понеділок - П'ятниця: 9:00  - 18:00</p>
                    <p>Субота - Неділя: не працюємо</p>
                </div>
            </section>
        </div>
    )

}
export { Support }