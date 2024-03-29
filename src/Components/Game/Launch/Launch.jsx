import { LaunchTestItem } from "./LaunchTestItem/LaunchTestItem"
import styles from './Launch.module.css'
import { NavLink } from "react-router-dom"
import { useDispatch } from "react-redux";
import { numberaddAC } from "../../../redux/game-reducer";
const Launch = (props) => {
    const question = props.state.questions[props.id - 2];
    const dispatch = useDispatch();

    return (
        <main className={styles.main}>
            <h2>{question.text}</h2>
            <section>
                {question.questions_items.map(item =>
                    <LaunchTestItem
                        state={item}
                        value={question.value}
                        id={question.id}
                    />
                )}
            </section>
            <NavLink to={`/game/${props.id + 1}/${props.urlInfo.idTest}/${props.urlInfo.personId}`}
                onClick={() => dispatch(
                    numberaddAC(
                        props.numberAdd(
                            question.questions_items
                        )))}
            >Перейти</NavLink>
        </main>
    )
}
export { Launch }