import styles from './Grafik.module.css'
const Grafik = (props) => {
    console.log(props)
    return (
        <div className={styles.container} style={{
            width: 80 *
                props.state.numbers.length
                + 'px'
        }}>
            <div className={styles.gisto}>
                <div className={styles.line_right}>
                    <span>Кількість користувачів</span>
                </div>
                <div className={styles.line_top}>{props.maxValue}</div>
                {props.state.counters.map((item, index) =>
                    <div className={styles.column}>
                        <div className={styles.progress}
                            style={{
                                height: 250 /
                                    props.maxValue
                                    * props.state.numbers[index]
                                    + 'px'
                            }}
                        ></div>
                        <div>{item}</div>
                    </div>)}
            </div>
        </div>
    )
}
export { Grafik }