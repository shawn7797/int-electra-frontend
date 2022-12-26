import React from "react";
import Carousel from "../Components/Carousel";
import AboutSection from "../Components/AboutSection";
import Facts from "../Components/Facts";
import Features from "../Components/Features";
import VideoModal from "../Components/VideoModal";
import Service from "../Components/Service";
import Projects from "../Components/Projects";
import Team from "../Components/Team";
import Testimonials from "../Components/Testimonials";

const Container = () => {
    return (
        <div className="container-wrapper" style={{ marginTop: "-8vw" }}>
            <Carousel />
            <AboutSection />
            <Facts />
            <Features />
            <VideoModal />
            <Service />
            <Projects />
            <Team />
            <Testimonials />
        </div>
    );
};

export default Container;
