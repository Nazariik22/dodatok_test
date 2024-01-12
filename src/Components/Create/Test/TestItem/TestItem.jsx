import styles from './TestItem.module.css'
const TestItem = (props)=>{
    return(
        <div className={styles.flex}>
        <div className={styles.item_text}>
            {props.value
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
    )
}
export {TestItem}