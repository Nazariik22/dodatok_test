import { LaunchTestItem } from "./LaunchTestItem/LaunchTestItem"
import styles from './Launch.module.css'
import { NavLink } from "react-router-dom"
const Launch = (props) => {
    return (
        <main className={styles.main}>
            <h2>props.state.text</h2>
            {/*{props.questions_items.map(item=>{
                <LaunchTestItem/>
            })}*/}
            <section>
                <LaunchTestItem
                    value={props.state.value}
                    state={props.state}
                />
            </section>
            <NavLink to={`/game/`}>Перейти</NavLink>
        </main>
    )
}
export { Launch }