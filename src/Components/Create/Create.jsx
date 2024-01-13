import { useDispatch, useSelector } from 'react-redux'
import styles from './Crete.module.css'
import { Title } from './Title/Title';
import { Test } from './Test/Test';
import { useState } from 'react';
import { createItemAC } from '../../redux/create-reduser';
const Create = (props) => {
    
    const testItemCreate = useSelector(state => state.create);
    console.log(testItemCreate)
    const [title, setTitle] = useState('');
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
                onClick={()=>dispatch(createItemAC())}
            >+</button>
            {
                testItemCreate.questions.map((item, index) => <Test state={item} key={`item_test${index}`} />)
            }

        </main>
    )
}
export { Create }