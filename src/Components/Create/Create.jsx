import { useDispatch, useSelector } from 'react-redux'
import styles from './Crete.module.css'
import { Title } from './Title/Title';
import { Test } from './Test/Test';
import { useState } from 'react';
import { createItemAC, titleElementAC, uppdateAC } from '../../redux/create-reduser';
import { addTestAC } from '../../redux/person-reduser';
const Create = (props) => {
    const testItemCreate = useSelector(state => state.create);
    const [title, setTitle] = useState('');
    const userId = useSelector(state => state.user.userId);
    const [title_text, setTitle_text] = useState('');
    const dispatch = useDispatch();
    return (
        <main className={styles.main}>
            <Title
                title={title}
                setTitle={setTitle}
                title_text={title_text}
                setTitle_text={setTitle_text}
            />
            <button className={styles.btn}
                onClick={() => dispatch(createItemAC())}
            >+</button>
            {
                testItemCreate.questions.map((item, index) => <Test state={item} key={`item_test${index}`} />)
            }
            <button
                className={styles.btn1}
                onClick={() => {
                    dispatch(titleElementAC(
                        title,
                        title_text
                    ))
                    dispatch(addTestAC(
                        userId,
                        testItemCreate
                    ))
                    dispatch(uppdateAC())
                    setTitle('')
                    setTitle_text('')
                }}
            >Зберегти тест</button>
        </main >
    )
}
export { Create }