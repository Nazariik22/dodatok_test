import { TestItem } from "./TestItem/TestItem"
import styles from './ContainerTest.module.css'

const ContainerTest = (props) => {
    return (
        <div>
            <h2 className={styles.title}>Список тестів</h2>
            <section className={styles.section}>
                {props.state.test.map(item =>
                    <TestItem
                        state={item}
                        userId={props.userId} />)}
            </section>
        </div>
    )
}
export { ContainerTest }