import React from "react";
import "./app-route.style.less";
import { MetaTags } from "react-meta-tags";
import Spinner from "Components/Spinner";
import TopBar from "Components/TopBar";
import NavBar from "Components/NavBar";
import Footer from "Components/Footer";
import Copyright from "Components/Copyright";
import { BackTop } from "antd";
import Container from "Components/Container";

const App = () => {
    return (
        <div className="app-route-wrapper">
            <MetaTags>
                <title>
                    I R P SYSTEMS, CIVIL / ELECTRO MECHANICAL ENGINEERS,
                    SPECIALISED WATER PROOFING CONTRACTORS | INT ELECTRA
                </title>
                <meta
                    name="description"
                    content="I R P SYSTEMS, CIVIL / ELECTRO MECHANICAL ENGINEERS, SPECIALISED WATER PROOFING CONTRACTORS"
                />
            </MetaTags>
            {/* <Spinner /> */}
            <TopBar />
            <NavBar />
            <Container />
            <Footer />
            <Copyright />
            <BackTop className="btn btn-lg btn-primary btn-lg-square rounded-circle back-to-top" />
        </div>
    );
};

export default App;
