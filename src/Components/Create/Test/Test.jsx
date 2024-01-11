import styles from './Test.module.css';
const Test = (props) => {
    let fetch = false;
    return (
        <section className={styles.section}>
            <div className={`${styles.flex} ${styles.title}`}>
                <input type="text"
                    placeholder='Ввведіть запитання' />
                {fetch
                    ? <button>Одна відповідь</button>
                    : <button>Декілька відповідей</button>
                }
            </div>
            <div className={styles.flex}>
                <div className={styles.item_text}>
                    {fetch
                        ? <input type="checkbox" name="r1" id="" />
                        : <input type="radio" name="r1" id="" />
                    }
                    <input type="text" name=""
                        placeholder='Підпункт'
                    />
                </div>
                <div className={styles.btn}>
                    <button className={styles.create}>+</button>
                    <button className={styles.delete}>-</button>
                </div>
            </div>
        </section>
    )
}
export { Test }