import React, { useEffect } from "react";
import "./app-route.style.less";
import { MetaTags } from "react-meta-tags";
import Spinner from "Components/Spinner";
import TopBar from "Components/TopBar";
import Footer from "Components/Footer";
import Copyright from "Components/Copyright";
import { BackTop } from "antd";
import Container from "Components/Container";
import MyNavbar from "Components/MyNavbar";
import $ from "jquery";

window.$ = $;

const App = () => {
    useEffect(() => {
        setInterval(() => {
            // document.querySelector("#spinner").classList.remove("show");
        }, 450);
    }, []);

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
            <MyNavbar />
            <Container />
            <Footer />
            <Copyright />
            <a href="#" class="btn btn-lg btn-primary btn-lg-square rounded-circle back-to-top"><i class="bi bi-arrow-up"></i></a>
        </div>
    );
};

export default App;
