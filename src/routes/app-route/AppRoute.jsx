import React from "react";
import "./app-route.style.less";
import Footer from "../../Components/Footer";
import Navbar from "../../Components/Navbar";
import Container from "../../Components/Container";
import { MetaTags } from "react-meta-tags";

const AppRoute = () => {
    return (
        <div className="app-route-wrapper">
            <MetaTags>
                <title>
                    I R P SYSTEMS, CIVIL / ELECTRO MECHANICAL ENGINEERS,
                    SPECIALISED WATER PROOFING CONTRACTORS | INT ELECTRA
                </title>
                <meta
                    name="description"
                    content="India's leading marketplace for solar EPC companies and Project Developers. Join today to be a part of the solar energy revolution of the 21st century."
                />
            </MetaTags>
            <Navbar />
            <Container />
            <Footer />
        </div>
    );
};

export default AppRoute;
