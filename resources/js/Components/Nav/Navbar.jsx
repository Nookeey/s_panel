import React from "react";

export default function Navbar(props) {
    function toogleNavigation() {
        document.body.classList.toggle('mini-navbar');
    }

    return (
        <nav className="navbar navbar-static-top" role="navigation" style={{marginBottom: 0}}>
            <div className="navbar-header">
                <div className="navbar-minimalize minimalize-styl-2 btn btn-primary" onClick={toogleNavigation}><i className="fa fa-bars" /> </div>
            </div>
            <ul className="nav navbar-top-links navbar-right">
                <li>
                    <a href="login.html">
                        <i className="fa fa-sign-out" /> Log out
                    </a>
                </li>
            </ul>
        </nav>
    );
}
