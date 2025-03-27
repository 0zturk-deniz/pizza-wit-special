import React from "react";
import { NavLink, useLocation } from "react-router-dom";

function Header() {
    const location = useLocation();
    return (
        <header>
        <h1>Teknolojik Yemekler</h1>
        {location.pathname === "/order" && (
            <nav>
            <NavLink to="/">Anasayfa</NavLink>
            <NavLink to="/order">Sipariş Oluştur</NavLink>
        </nav>
        )}
        
        </header>
    );
}

export default Header;
