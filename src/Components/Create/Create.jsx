import { useDispatch, useSelector } from 'react-redux'
import styles from './Crete.module.css'
import { Title } from './Title/Title';
import { Test } from './Test/Test';
import { useState } from 'react';
import { createItemAC, titleElementAC, uppdateAC } from '../../redux/create-reduser';
import { addTestAC } from '../../redux/person-reduser';
import { Navigate } from 'react-router-dom';
const Create = () => {
    const auto=useSelector(state=>state.personData.auto)
    const testItemCreate = useSelector(state => state.create);
    const [title, setTitle] = useState('');
    const userId = useSelector(state => state.personData.userId);
    const [title_text, setTitle_text] = useState('');
    const dispatch = useDispatch();
    if (!auto) {
        return <Navigate to="/auto" replace={true} />
    }
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
                testItemCreate.questions.map((item, index) =>
                    <Test state={item} key={`item_test${index}`} />)
            }
            <button
                className={styles.btn1}
                onClick={() => {
                    dispatch(titleElementAC(
                        title,
                        title_text
                    ))
                    testItemCreate.title = title
                    testItemCreate.title_text = title_text
                    dispatch(addTestAC(
                        userId,
                        testItemCreate
                    ))
                    setTitle('')
                    setTitle_text('')
                    dispatch(uppdateAC())
                    alert('Тест успішно збережно')
                }}
            >Зберегти тест</button>
        </main >
    )
}
export { Create }