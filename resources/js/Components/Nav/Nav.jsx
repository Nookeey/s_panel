import React from "react";
import tw from "tailwind-styled-components"
import NavItem from "@/Components/Nav/NavItem";
import { Link } from "@inertiajs/react";

const navItems = [
    {
        href: "dashboard",
        text: "Dashboard"
    },
    {
        href: "invoice.index",
        text: "Faktury"
    },
    {
        href: "allegro.index",
        text: "Allegro"
    },
];

export default function Nav(props) {
    return (
        <>
            <nav className="navbar-default navbar-static-side" role="navigation">
                <div className="sidebar-collapse">
                    <ul className="nav metismenu" id="side-menu">
                        <li className="nav-header">
                            <div className="dropdown profile-element">
                                {/* <img alt="image" className="rounded-circle" src="img/profile_small.jpg" /> */}
                                <a data-toggle="dropdown" className="dropdown-toggle" href="index.html#">
                                <span className="block m-t-xs font-bold">SLOTH</span>
                                {/* <span className="text-muted text-xs block">Art Director <b className="caret" /></span> */}
                                </a>
                                <ul className="dropdown-menu animated fadeInRight m-t-xs">
                                    <li><a className="dropdown-item" href="profile.html">Profile</a></li>
                                    <li><a className="dropdown-item" href="contacts.html">Contacts</a></li>
                                    <li><a className="dropdown-item" href="mailbox.html">Mailbox</a></li>
                                    <li className="dropdown-divider" />
                                    <li><a className="dropdown-item" href="login.html">Logout</a></li>
                                </ul>
                            </div>
                            <div className="logo-element">
                                IN+
                            </div>
                        </li>

                        { navItems.map((item, index) => (
                            <li key={index}>
                                <Link href={route(item.href)}>{item.text}</Link>
                            </li>
                        )) }

                    </ul>
                </div>
            </nav>
        </>
    );
}


