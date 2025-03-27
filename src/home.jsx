import React from "react";
import {Link} from "react-router-dom";

function Home() {

    return (
        <div>
            <h1>KOD ACIKTIRIR <br />PİZZA DOYURUR</h1>
            <Link to="/order">
            <button type="button">ACIKTIM</button>
            </Link>
            
        </div>
    );
}

export default Home;