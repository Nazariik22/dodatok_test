import { useSelector } from 'react-redux'
import styles from './Crete.module.css'
import { Title } from './Title/Title';
import { Test } from './Test/Test';
import { useState } from 'react';
const Create = (props) => {
    debugger
    const userId = useSelector(state => state.user.userId);
    const userCreate = useSelector(state => state.create[userId - 1]);
    const [title,setTitle]=useState('');
    const [title_text,setTitle_text]=useState('');
    return (
        <main className={styles.main}>
            <Title
            title={title}
            setTitle={setTitle}
            title_text={title_text}
            setTitle_text={setTitle_text}
            />
           
            <Test/>
        </main>
    )
}
export { Create }