import { TestItem } from "./TestItem/TestItem"

const ContainerTest = (props) => {
    return (
        <section>
           { props?.state?.test?.map(item=><TestItem state={item}/>)}
           <TestItem/>
           <TestItem/>
        </section>
    )
}
export { ContainerTest }