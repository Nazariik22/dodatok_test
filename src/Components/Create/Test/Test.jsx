import { useDispatch, useSelector } from 'react-redux';
import styles from './Test.module.css';
import { buttonItemAC } from '../../../redux/create-reduser';
import { TestItem } from './TestItem/TestItem';
const Test = (props) => {
    const questions_items = props.state.questions_items;
    const dispatch = useDispatch();
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
                    <TestItem value={props.state.value} state={item} key={index}/>
                )
            }

        </section>
    )
}
export { Test }