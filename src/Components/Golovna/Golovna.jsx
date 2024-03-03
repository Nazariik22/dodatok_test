
import { ContainerTest } from "./ContainerTest/ContainerTest";
import { Navigate } from "react-router-dom";
import styles from './Golovna.module.css'
import { useSelector } from "react-redux"
import { Statistics } from "./Statistics/Statistics";

const Golovna = (props) => {
    const window = useSelector(state => state.personData.window)
    const userId = useSelector(state => state?.personData?.userId);
    const state = useSelector(state => state?.personData?.person.filter(item =>
        item.id === userId && item))[0];
    if (!props.auto) {
        return <Navigate to="/auto" replace={true} />
    }
    return (
        <>
            <main className={styles.main}>
                <ContainerTest userId={userId}
                    state={state}
                />
                {window.chaked && <Statistics
                    state={state.test[window.id]}
                />}
            </main>

        </>
    );
}

export { Golovna };