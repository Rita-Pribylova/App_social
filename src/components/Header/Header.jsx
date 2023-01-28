import React from "react";
import { NavLink } from "react-router-dom";
import s from "./Header.module.css";

const Header = (props) => {
    return <header className={s.header}>

        <img src='https://i.pinimg.com/originals/43/b4/55/43b4556069c0fc54423fe1d2895af9a1.png' alt='logo'></img>

        <div className={s.loginBlock}>
            {props.isAuth ? <div> {props.login} - <button onClick={props.logout}>Log out</button></div>
                : <NavLink to={'/login'}> Login </NavLink>}
        </div>

        {/* <div className={s.logtext}> Social </div> */}

    </header>
}

export default Header;