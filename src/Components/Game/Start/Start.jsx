import { QRCodeSVG } from "qrcode.react"
import { NavLink } from "react-router-dom"
import styles from './Start.module.css'
const Start = (props) => {

    return (
        <main className={styles.main}>
            <QRCodeSVG value={props.url}  
            bgColor="#000"
            fgColor="#ffffff"/>
            <section className={styles.section}>
                <p>Посилання: {props.url}</p>
                <div>Прізвище та ім'я</div>
                <input type="text"
                    value={props?.state?.name}
                    onChange={() => { }}
                />
                <NavLink to='/game/2' >Зайти</NavLink>
            </section>
        </main>
    )
}
export { Start }