
import { ContainerTest } from "./ContainerTest/ContainerTest";

import { Navigate } from "react-router-dom";
import styles from './Golovna.module.css'
import { useSelector } from "react-redux"
const Golovna = (props) => {
    
    const userId = useSelector(state=>state?.personData?.userId);
    const state = useSelector(state => state?.personData?.person.filter(item =>
        item.id === userId && item))[0];
        console.clear()
    if (!props.auto) {
        return <Navigate to="/auto" replace={true} />
    }
    return (
        <>
            <main className={styles.main}>
                <ContainerTest userId={userId}
                state ={state}
                />
               
            </main>
           
        </>
    );
}

export { Golovna };