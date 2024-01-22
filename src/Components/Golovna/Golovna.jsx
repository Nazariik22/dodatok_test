import { Comments } from "./Comments/Comments";
import { ContainerTest } from "./ContainerTest/ContainerTest";
import { ElementMain } from "./ElementMain/ElementMain";
import { Theme } from "./Theme/Theme";
import { Navigate } from "react-router-dom";
import styles from './Golovna.module.css'
import { useSelector } from "react-redux"
const Golovna = (props) => {
    const userId = useSelector(state=>state?.personData?.userId);
    const state = useSelector(state => state?.personData?.person.filter(item =>
        item.id === userId && item))[0];
    if (!props.auto) {
        return <Navigate to="/auto" replace={true} />
    }
    return (
        <>
            <main className={styles.main}>
                <ContainerTest userId={userId}
                state ={state}
                />
                {/*<Theme />
                {props.pages.map(item => <ElementMain
                    state={item}
                    key={item.id}
                />)}*/}
            </main>
            <Comments />
        </>
    );
}

export { Golovna };