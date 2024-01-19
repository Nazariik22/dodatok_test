import { Comments } from "./Comments/Comments";
import { ContainerTest } from "./ContainerTest/ContainerTest";
import { ElementMain } from "./ElementMain/ElementMain";
import { Theme } from "./Theme/Theme";
import { Navigate } from "react-router-dom";

const Golovna = (props) => {
    
    if (!props.auto) {
        return <Navigate to="/auto" replace={true} />
    }
    return (
        <>
            <main className="golova">
                <ContainerTest/>
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