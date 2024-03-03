
import { useDispatch } from 'react-redux';
import { Grafik } from './Grafik/Grafik';
import styles from './Statistics.module.css'
import { closeWindowAC } from '../../../redux/person-reduser';
const Statistics = (props) => {
    const dispatch = useDispatch();
    let listNumber = {
        numbers: [],
        counters: [],
    }
    function countNumber(arr, data) {
        arr.forEach(element => {
            if (!data.numbers.includes(
                element.number
            )) {
                data.counters.push(1);
                data.numbers.push(
                    element.number
                );
            } else {
                data.counters[
                    data.numbers.indexOf(
                        element.number
                    )] += 1
            }
        });
    }
    countNumber(props.state.game, listNumber)

    return (
        <div className={styles.window}>
            <div className={styles.wrapper}>
                <div className={styles.title}>
                    <div>
                        <h3>{props.state.title}</h3>
                    </div>
                    <span className={styles.close}
                        onClick={() => dispatch(closeWindowAC())}
                    >X</span>
                </div>

                <section className={styles.sub_title}>
                    <p>Прізвище та ім'я:</p>
                    <p>Кількість набраних балів:</p>
                    <p>Відсоткове співвідношення:</p>
                </section>
                <section>
                    {props.state.game.map(item =>
                        <div className={styles.element}>
                            <p>{item.personName}</p>
                            <p className={styles.bal}>{item.number}</p>
                            <p className={styles.flex}>
                                0
                                <p className={styles.progres}
                                >
                                    <span style={{
                                        width: 100 /
                                            props.state.questions.length
                                            * item.number
                                            + '%'
                                    }}></span>
                                </p>
                                {props.state.questions.length}
                            </p>

                        </div>)}
                </section>
                <div className={styles.const}>
                    <p>Статистика користувачів</p>
                    <Grafik state={listNumber}
                        maxValue={props.state.questions.length}
                    />
                </div>
            </div>

        </div>
    )
}
export { Statistics }