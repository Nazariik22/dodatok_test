import { Comments } from "./Comments/Comments";
import { ElementMain } from "./ElementMain/ElementMain";
import { Theme } from "./Theme/Theme";


const Golovna = (props) => {
    
    return (
        <>
            <main class="golova">
                <Theme/>
               { props.pages.map(item=><ElementMain state={item} key={item.id}/>)}
            </main>
            <Comments />
        </>
    );
}

export { Golovna };