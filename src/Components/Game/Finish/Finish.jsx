import { NavLink } from 'react-router-dom'
import img from './../../../img/icon/Creative-Tail-Animal-bug.svg'
import styles from './Finish.module.css'
import { useDispatch } from 'react-redux'
import { uppDateGameAC } from '../../../redux/game-reducer'
import { addResaltGameAC } from '../../../redux/person-reduser'
const Finish = (props) => {
    debugger
    const dispatch = useDispatch()
    return (
        <main className={styles.main}>
            <img src={img} alt="" />
            <h2>Вітаємо {props.name}</h2>
            <p>Твій результат: <b>{props.number} балів</b></p>
            <div className={styles.container}><div width={`${props.number
                ? props.qwestion_len
                / props.number
                : 0}%`
            }></div></div>
            <NavLink to='/'
                onClick={() => {
                    debugger
                    dispatch(addResaltGameAC(
                        props.personId,
                        props.idTest,
                        {
                            personName: props.name,
                            number: props.number
                        }
                    ))
                    debugger
                    dispatch(uppDateGameAC())
                }}>Завершити проходження</NavLink>
        </main>
    )
}
export { Finish }