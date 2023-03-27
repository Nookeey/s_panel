import Nav from "@/Components/Nav/Nav";
import Navbar from "@/Components/Nav/Navbar";
import React, { useEffect } from "react";

export default function App({ auth, children }) {
    return (
        <div id="app">
            <div id="wrapper">
                <Nav />

                <div id="page-wrapper" className="gray-bg dashbard-1">
                    <div className="row border-bottom">
                        <Navbar />
                    </div>

                    <div className="py-[15px] animated fadeIn">
                        { children }
                    </div>
                </div>

            </div>
        </div>
    )
}
