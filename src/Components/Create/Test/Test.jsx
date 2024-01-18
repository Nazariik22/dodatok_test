import { useDispatch } from 'react-redux';
import styles from './Test.module.css';
import { buttonItemAC, createItemTestAC, destroyItemAC } from '../../../redux/create-reduser';
import { TestItem } from './TestItem/TestItem';
const Test = (props) => {
    const questions_items = props.state.questions_items;
    const dispatch = useDispatch();
    console.log(props)
    return (
        <section className={styles.section}>
            <div className={`${styles.flex} ${styles.title}`}>
                <input type="text"
                    placeholder='Ввведіть запитання' />
                {props.state.value
                    ? <button
                        onClick={() => dispatch(buttonItemAC(props.state.id, false))}
                    >Одна відповідь</button>
                    : <button
                        onClick={() => dispatch(buttonItemAC(props.state.id, true))}
                    >Декілька відповідей</button>
                }
            </div>

            {
                questions_items.map((item, index) =>
                    <TestItem value={props.state.value} state={item} key={index}
                        id={props.state.id} />
                )
            }
            <div className={styles.blok_button}>
                <button className={styles.create}
                    onClick={() => dispatch(createItemTestAC(props.state.id))}
                >+</button>
                <button className={styles.btn}
                    onClick={() => dispatch(destroyItemAC(props.state.id))}
                >&#10007;</button>
            </div>
        </section>
    )
}
export { Test }