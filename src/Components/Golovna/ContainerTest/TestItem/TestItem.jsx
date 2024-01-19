import { NavLink } from "react-router-dom"


const TestItem = (props) => {
    return (
        <div>
          <NavLink to={`/game${props.id}`}>&#8733;</NavLink>
           <img src="" alt="" />
           <div className="title">{props.title}</div>
           <div>
            <button>X</button>
            <button>&#8890;</button>
           </div>
        </div>
    )
}
export { TestItem }