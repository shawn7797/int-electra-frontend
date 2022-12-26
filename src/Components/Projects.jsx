import React from "react";

const Projects = () => {
    return (
        <div className="container-fluid bg-dark pt-5 my-5 px-0">
            <div
                className="text-center mx-auto mt-5 wow fadeIn"
                data-wow-delay="0.1s"
                style={{
                    maxWidth: "600px"
                }}
            >
                <p className="fw-medium text-uppercase text-primary mb-2">
                    Our Projects
                </p>
                <h1 className="display-5 text-white mb-5">
                    See What We Have Completed Recently
                </h1>
            </div>
            <div
                className="owl-carousel project-carousel wow fadeIn"
                data-wow-delay="0.1s"
            >
                <a className="project-item" href="">
                    <img className="img-fluid" src="img/project-1.jpg" alt="" />
                    <div className="project-title">
                        <h5 className="text-primary mb-0">Auto Engineering</h5>
                    </div>
                </a>
                <a className="project-item" href="">
                    <img className="img-fluid" src="img/project-2.jpg" alt="" />
                    <div className="project-title">
                        <h5 className="text-primary mb-0">Civil Engineering</h5>
                    </div>
                </a>
                <a className="project-item" href="">
                    <img className="img-fluid" src="img/project-3.jpg" alt="" />
                    <div className="project-title">
                        <h5 className="text-primary mb-0">Gas Engineering</h5>
                    </div>
                </a>
                <a className="project-item" href="">
                    <img className="img-fluid" src="img/project-4.jpg" alt="" />
                    <div className="project-title">
                        <h5 className="text-primary mb-0">Power Engineering</h5>
                    </div>
                </a>
                <a className="project-item" href="">
                    <img className="img-fluid" src="img/project-5.jpg" alt="" />
                    <div className="project-title">
                        <h5 className="text-primary mb-0">Energy Engineering</h5>
                    </div>
                </a>
                <a className="project-item" href="">
                    <img className="img-fluid" src="img/project-6.jpg" alt="" />
                    <div className="project-title">
                        <h5 className="text-primary mb-0">Water Engineering</h5>
                    </div>
                </a>
            </div>
        </div>
    );
};

export default Projects;
