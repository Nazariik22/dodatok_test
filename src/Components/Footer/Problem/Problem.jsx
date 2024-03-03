import { useDispatch } from 'react-redux'
import styles from './Problem.module.css'
import { closeModalAC, problemAC } from '../../../redux/footer-reduser';
import { useState } from 'react';

const Problem = () => {
    const [bag, setBag] = useState('');
    const [proposition, setProposition] = useState('');
    const [error, setError] = useState('');
    const [other, setOther] = useState('');
    const [title, setTitle] = useState('');
    const [text, setText] = useState('');
    const dispatch = useDispatch();
    return (
        <div className={styles.modal}>
            <section>
                <div className={`flex  ${styles.flex}`}>
                    <h2>Повідомити про помилку</h2>
                    <span className={styles.close}
                        onClick={() => dispatch(closeModalAC(3))}
                    >X</span>
                </div>
                <div className={styles.container}>
                    <input type="text" className={styles.title} placeholder='Заголовок'
                        onChange={(e) => setTitle(e.target.value)}
                        value={title}
                    />
                    <div>
                        <textarea cols="30" rows="7" placeholder='Ваше повідомлення'
                            onChange={(e) => setText(e.target.value)}
                            value={text}
                        ></textarea>
                    </div>
                    <p>Оберіть категорію:</p>
                    <div className={styles.label}>
                        <label><input type="checkbox" checked={bag && "checked"}
                            onClick={() => setBag(bag ? false : true)} />Баги та проблеми</label>
                        <label><input type="checkbox" checked={proposition && "checked"}
                            onClick={() => setProposition(proposition ? false : true)} />Пропозиції для сайту</label>
                        <label><input type="checkbox" checked={error && "checked"}
                            onClick={() => setError(error ? false : true)} />Граматичні помилки</label>
                        <label><input type="checkbox" checked={other && "checked"}
                            onClick={() => setOther(other ? false : true)} />Інше</label>
                    </div>
                    <div className={styles.btn}>
                        <button
                            onClick={() => {
                                dispatch(problemAC({
                                    title: title,
                                    text: text,
                                    bag: bag,
                                    proposition: proposition,
                                    error: error,
                                    other: other,
                                }))
                                setTitle('')
                                setText('')
                                setBag(false)
                                setProposition(false)
                                setError(false)
                                setOther(false)
                                dispatch(closeModalAC(3))
                            }}
                        >Надіслати</button>
                        <button
                            onClick={() => dispatch(closeModalAC(3))}
                        >Скасувати</button>
                    </div>
                </div>
            </section>
        </div>
    )

}
export { Problem }