
import { useDispatch } from 'react-redux'
import styles from './LaunchTestItem.module.css'
import { answerAC } from '../../../../redux/game-reducer'


const LaunchTestItem = (props) => {
    const dispatch = useDispatch()
    return (
        <label
            className={styles.label}
        >
            <input type={
                props.value
                    ? 'checkbox'
                    : 'radio'}
                name={props.id}
                checked={props.state.cheked && "checked"}
                onClick={() => dispatch(answerAC(
                    props.id,
                    props.state.id_item,
                    props.state.cheked ? false : true,
                ))}
            />
            {props.state.text_question}
        </label>
    )
}
export { LaunchTestItem }