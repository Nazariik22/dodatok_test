import { connect } from "react-redux";
import { Autorizathion } from "./Autorizathion";


const mapStateToProps = (state) => {
    return {
        user: state.personData.person,
        auto: state.personData.auto
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
       
    }
}

const AutorizathionContainer = connect(mapStateToProps, mapDispatchToProps)(Autorizathion);

export { AutorizathionContainer }