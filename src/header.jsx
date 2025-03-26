import React from "react";
import { NavLink, BrowserRouter } from "react-router-dom";

function Header() {
    return (
        <header>
        <h1>Teknolojik Yemekler</h1>
        <nav>
            <NavLink to="/" exact>Anasayfa</NavLink>
            <NavLink to="/order">Sipariş Oluştur</NavLink>
        </nav>
        </header>
    );
}

export default Header;
