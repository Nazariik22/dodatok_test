import { NavLink } from "react-router-dom"
import styles from './TestItem.module.css'
import img from './../../../../img/icon/Creative-Tail-Animal-bat.svg'
import { useDispatch } from "react-redux"
import { deleteTestUserAC, windowAC } from "../../../../redux/person-reduser"

const TestItem = (props) => {
 
    const dispatch = useDispatch();
    return (

        <div className={styles.container}>
            <div className={styles.content}>
                <NavLink to={`/game/1/${props.state.id}/${props.userId}`}><span>&#9658;</span></NavLink>
                <img src={img} alt="" />
                <div className="title">{props.state.title}</div>
            </div>
            <div className={styles.button}>
                <button className={styles.remove}
                    onClick={() => dispatch(deleteTestUserAC(
                        props.userId,
                        props.state.id
                    ))}
                >X</button>
                <button className={styles.edit}
                    onClick={() => dispatch(windowAC(props.id))
                    }
                >&#8890;</button>
            </div>


        </div>
    )
}
export { TestItem }

