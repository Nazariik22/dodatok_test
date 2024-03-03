import { useDispatch, useSelector } from 'react-redux';
import styles from './Footer.module.css'
import { Support } from './Support/Support';
import { Ask } from './Ask/Ask';
import { Problem } from './Problem/Problem';
import { openModalAC } from '../../redux/footer-reduser';



const Footer = () => {
    const state = useSelector(state=>state.footer)
    const dispatch = useDispatch();
    return (
        <footer >
            {state.help[0].cheked&&<Support/>}
            {state.help[1].cheked&&<Ask/>}
            {state.help[2].cheked&&<Problem/>}
            <div className={styles.footer}>
            <section className={styles.contact}>
                <p>Інформація про розробника:</p>
                {state.contact.map(item =>
                    <a href={item.link}
                        key={`Ключ${item.id}`}>
                        <img src={item.img} alt="" />
                    </a>
                )}
            </section>
            <section className={styles.help}>
                {state.help.map((item, index)=> <span key={item.id}
                onClick={()=>dispatch(openModalAC(index+1))}
                >{item.text}</span>)}
            </section>
            </div>
        </footer>
    )
}
export { Footer };