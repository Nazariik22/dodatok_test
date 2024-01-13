import { useDispatch } from 'react-redux'
import { textNewItemValueAC } from '../../../../redux/create-reduser';
import styles from './TestItem.module.css'
const TestItem = (props) => {
    const dispatch = useDispatch();
    debugger
    return (
        <div className={styles.flex}>
            <div className={styles.item_text}>
                <input type={props.value
                    ? 'checkbox'
                    : 'radio'}
                    name={props.id} id=""
                />
                <input type="text" name=""
                    placeholder='Підпункт'
                    value={props.state.text_question}
                    onChange={(e) => dispatch(textNewItemValueAC(
                        props.id,
                        props.state.id_item,
                        e.target.value,
                    ))}
                />
            </div>
            <div className={styles.btn}>
                <button className={styles.delete}>-</button>
            </div>
        </div>
    )
}
export { TestItem }