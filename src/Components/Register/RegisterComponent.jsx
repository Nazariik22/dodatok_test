import { connect } from "react-redux"
import { Register } from "./Register"
import { addUserAC } from "../../redux/user-reduser"



const mapStateToProps =(state)=>{
    return{
        user:state.user.person[0].userInfo
    }
}
const mapDispatchToProps =(dispatch)=>{
    return{
        addUser:(data)=>dispatch(addUserAC(data))
    }
}

const RegisterComponent  = connect(mapStateToProps,mapDispatchToProps)(Register);

export {RegisterComponent}