import { connect } from "react-redux";
import { Autorizathion } from "./Autorizathion";
import { loginAC } from "../../redux/user-reduser";

const mapStateToProps = (state) => {
   
    return {
        user: state.user.person,
        auto: state.user.auto
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        login: (auto,id) => dispatch(loginAC(auto,id))
    }
}

const AutorizathionContainer = connect(mapStateToProps, mapDispatchToProps)(Autorizathion);

export { AutorizathionContainer }