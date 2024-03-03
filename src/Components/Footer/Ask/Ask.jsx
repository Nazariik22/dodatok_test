import { useDispatch, useSelector } from 'react-redux';
import styles from './Ask.module.css'
import { closeModalAC, modalItemAC } from '../../../redux/footer-reduser';

const Ask = () => {
    const dispatch = useDispatch();
    const state = useSelector(state => state.footer.help[1].question);
    return (
        <div className={styles.modal}>
            <section>
                <div className={`flex  ${styles.flex}`}>
                    <h2>Питання</h2>
                    <span className={styles.close}
                        onClick={() => dispatch(closeModalAC(2))}
                    >X</span>
                </div>
                <div className={styles.container}>
                    {state.map((item,index)=> <div className={styles.container_blok}>
                        <div className={styles.section}><h4>{item.title}</h4>
                            <span
                                onClick={()=>dispatch(modalItemAC(index))}
                            >+</span></div>
                        {item.cheked && <p>{item.text}</p>}
                    </div>)}
                </div>
            </section>
        </div>
    )

}
export { Ask }