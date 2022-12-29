import Carousel from "Components/Carousel";
import Facts from "Components/Facts";
import Features from "Components/Features";
import Projects from "Components/Projects";
import Team from "Components/Team";
import Testimonials from "Components/Testimonials";
import VideoModal from "Components/VideoModal";
import React from "react";
import ProductPartner from "./ProductPartner";

const LandingPage = () => {
    return (
        <div className="landing-page-wrapper">
            <Carousel />
            <Facts />
            <Features />
            <VideoModal />
            <ProductPartner />
            {/* <Projects /> */}
            {/* <Team /> */}
        </div>
    );
};

export default LandingPage;
