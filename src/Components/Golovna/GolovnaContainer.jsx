import { connect } from "react-redux";
import { Golovna } from "./Golovna";

const  mapStateToProps=(state)=>{
    return{
        pages:state.golovna.pageList,
    }
}
const  mapDispatchToProps=(dispatch)=>{
    return{
       
    }
}
const GolovnaContainer=connect(
    mapStateToProps,
    mapDispatchToProps)(Golovna)
export {GolovnaContainer}