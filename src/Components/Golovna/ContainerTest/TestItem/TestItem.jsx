import { NavLink } from "react-router-dom"
import styles from './TestItem.module.css'
import img from './../../../../img/icon/Creative-Tail-Animal-bat.svg'

const TestItem = (props) => {
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <NavLink to={`/game/el:${props.state.id}_p:${props.userId}`}><span>&#9658;</span></NavLink>
                <img src={img} alt="" />
                <div className="title">{props.state.title}</div>
            </div>
            <div className={styles.button}>
                <button className={styles.remove}>X</button>
                <button className={styles.edit}>&#8890;</button>
            </div>
        </div>
    )
}
export { TestItem }

