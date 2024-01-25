import styles from './LaunchTestItem.module.css'


const LaunchTestItem = (props) => {
    return (
        <label
            className={styles.label}
        >
            <input type={
                props.value
                    ? 'checkbox'
                    : 'radio'}
            />
            {props.state.text_question}
        </label>
    )
}
export { LaunchTestItem }