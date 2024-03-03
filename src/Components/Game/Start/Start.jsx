import { QRCodeSVG } from "qrcode.react"
import { NavLink } from "react-router-dom"
import styles from './Start.module.css'
import { useDispatch } from "react-redux"
import { importTestAC, personNameAC } from "../../../redux/game-reducer"
const Start = (props) => {
    const dispatch = useDispatch();
    return (
        <main className={styles.main}>
            <QRCodeSVG value={props.urlInfo.url}
                bgColor="#ffffff"
                fgColor="#000"
                size={200} />
            <section className={styles.section}>
                <p>{props.test.title}</p>
                <p>{props.test.title_text}</p>
                <p>Посилання: {props.urlInfo.url}</p>
                <div>Прізвище та ім'я</div>
                <input type="text"
                    value={props.name}
                    onChange={(e) => {dispatch(personNameAC(
                        e.target.value
                    )) }}
                />
                <NavLink to={`/game/2/${props.urlInfo.idTest}/${props.urlInfo.personId}`}
                onClick={()=>dispatch(importTestAC(props.test))}
                >Зайти</NavLink>
            </section>
        </main>
    )
}
export { Start }