import { connect } from "react-redux";
import { Profile } from "./Profile";

const mapStateToProps= (state)=>{
    return{
        idUser:state.personData.userId,
        auto:state.personData.auto,
        chekValue:state.personData.chekValue,
    }
}
const mapDispatchToProps= (dispatch)=>{
    return{
        
    }
}
const ProfileContainer = connect(
    mapStateToProps,
    mapDispatchToProps)(Profile)
export {ProfileContainer}