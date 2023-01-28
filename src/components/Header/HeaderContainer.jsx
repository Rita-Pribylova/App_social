import React from "react";
import { connect } from "react-redux";
import Header from "./Header";
import {logout} from "../../redux/auth-reducer";


class HeaderContainer extends React.Component {

    render () {
        return <Header {...this.props} /> //пробрасываем все пропсы в целевую компоненту
    }

}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
});

export default connect (mapStateToProps, {logout}) (HeaderContainer); // setauth.. попадет в пропсы в контейн.комп