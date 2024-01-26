import styles from './LaunchTestItem.module.css'


const LaunchTestItem = (props) => {
    debugger
    return (
        <label
            className={styles.label}
        >
            <input type={
                props.value
                    ? 'checkbox'
                    : 'radio'}
                    name={props.id}
            />
            {props.state.text_question}
        </label>
    )
}
export { LaunchTestItem }