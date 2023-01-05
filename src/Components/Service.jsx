import React from "react";
import { Breakpoint } from "react-socks";
import "./services.style.less";

const Service = () => {
    const services = [
        {
            name: "Soil Stabilization",
            description:
                "Soil Stabilization using Green Mountain Polyurethane systems",
            image1: "images/Services/Soil-Stabilization.jpeg",
            image2: "images/Services/Soil-Stabilization.jpeg",
        },
        {
            name: "Waterproofing Solutions",
            description: (
                <ul>
                    <li>
                        Leakage arrestation using Polyurethane Grout solutions
                    </li>
                    <br />
                    <li>Chemical Resistant Concrete coatings</li>
                    <br />
                    <li>Epoxy grouting</li>
                    <br />
                    <li>Polymer Injection</li>
                    <br />
                </ul>
            ),
            image1: "images/Services/WaterProofing1.jpg",
            image2: "images/Services/WaterProofing2.jpg",
        },
        {
            name: "Civil/Electro Mechanical Engineering Works",
            description: (
                <ul>
                    <li>
                        Rehabilitation of heavy industrial structures by
                        chemical treatment
                    </li>
                    <br />
                    <li>Construction of steel foot over bridges</li>
                </ul>
            ),
            image1: "images/Services/Civil1.jpg",
            image2: "images/Services/Civil2.jpg",
        },
        {
            name: "Structural works",
            description: (
                <ul>
                    <li>Structural repairs and reinforcements</li>
                    <br />
                    <li>Carbon fibre wrapping of walls and pillars</li>
                </ul>
            ),
            image1: "images/Services/Concrete1.jpg",
            image2: "images/Services/Concrete2.jpg",
        },
        {
            name: "Specialized tailor made grout solutions for tunnels, dams, bridges and buildings",
            description: "Description here",
            image1: "images/Services/WaterProofing1.jpg",
            image2: "images/Services/WaterProofing1.jpg",
        },
        {
            name: "Underwater rehabilitation works",
            description: "Description here",
            image1: "images/Services/WaterProofing1.jpg",
            image2: "images/Services/WaterProofing1.jpg",
        },
        {
            name: "Bearing destressing and replacement for bridges",
            description:
                "Destressing and replacement of Neoprene bearings for bridges under traffic conditions",
            image1: "images/Services/Bearing2.jpg",
            image2: "images/Services/Bearing1.jpg",
        },
    ];

    return (
        <>
            <Breakpoint small down>
                <div className="container-xxl py-5 services-wrapper-mobile">
                    <div className="container">
                        <div
                            className="text-center mx-auto pb-4 wow fadeInUp"
                            data-wow-delay="0.1s"
                            style={{
                                maxWidth: "600px",
                            }}
                        >
                            <p className="fw-medium text-uppercase text-primary mb-2">
                                Our Services
                            </p>
                            <h1 className="display-5 mb-4">
                                We Provide Best Industrial Services
                            </h1>
                        </div>
                        <div className="row gy-5 gx-4">
                            {services.map((i) => (
                                <div
                                    className="col-md-6 col-lg-4 wow fadeInUp"
                                    data-wow-delay="0.1s"
                                >
                                    <div className="service-item">
                                        <img
                                            className="img-fluid"
                                            src={i.image2}
                                            alt=""
                                        />
                                        <div className="service-img">
                                            <img
                                                className="img-fluid"
                                                src={i.image1}
                                                alt=""
                                            />
                                        </div>
                                        <div className="service-detail">
                                            <div className="service-title">
                                                <hr className="w-25" />
                                                <h3 className="mb-0">
                                                    {i.name}
                                                </h3>
                                                <hr className="w-25" />
                                            </div>
                                            <div className="service-text">
                                                <p className="text-white mb-0 left-align">
                                                    {i.description}
                                                </p>
                                            </div>
                                        </div>
                                        {/* <a className="btn btn-light" href="">
                                Read More
                            </a> */}
                                    </div>
                                </div>
                            ))}
                            {/* <div
                        className="col-md-6 col-lg-4 wow fadeInUp"
                        data-wow-delay="0.3s"
                    >
                        <div className="service-item">
                            <img
                                className="img-fluid"
                                src="img/service-2.jpg"
                                alt=""
                            />
                            <div className="service-img">
                                <img
                                    className="img-fluid"
                                    src="img/service-2.jpg"
                                    alt=""
                                />
                            </div>
                            <div className="service-detail">
                                <div className="service-title">
                                    <hr className="w-25" />
                                    <h3 className="mb-0">
                                        Power & Energy Engineering
                                    </h3>
                                    <hr className="w-25" />
                                </div>
                                <div className="service-text">
                                    <p className="text-white mb-0">
                                        Erat ipsum justo amet duo et elitr
                                        dolor, est duo duo eos lorem sed diam
                                        stet diam sed stet.
                                    </p>
                                </div>
                            </div>
                            <a className="btn btn-light" href="">
                                Read More
                            </a>
                        </div>
                    </div>
                    <div
                        className="col-md-6 col-lg-4 wow fadeInUp"
                        data-wow-delay="0.5s"
                    >
                        <div className="service-item">
                            <img
                                className="img-fluid"
                                src="img/service-3.jpg"
                                alt=""
                            />
                            <div className="service-img">
                                <img
                                    className="img-fluid"
                                    src="img/service-3.jpg"
                                    alt=""
                                />
                            </div>
                            <div className="service-detail">
                                <div className="service-title">
                                    <hr className="w-25" />
                                    <h3 className="mb-0">
                                        Plumbing & Water Treatment
                                    </h3>
                                    <hr className="w-25" />
                                </div>
                                <div className="service-text">
                                    <p className="text-white mb-0">
                                        Erat ipsum justo amet duo et elitr
                                        dolor, est duo duo eos lorem sed diam
                                        stet diam sed stet.
                                    </p>
                                </div>
                            </div>
                            <a className="btn btn-light" href="">
                                Read More
                            </a>
                        </div>
                    </div> */}
                        </div>
                    </div>
                </div>
            </Breakpoint>
            <Breakpoint medium up>
                <div className="container-xxl py-5 services-wrapper">
                    <div className="container">
                        <div
                            className="text-center mx-auto pb-4 wow fadeInUp"
                            data-wow-delay="0.1s"
                            style={{
                                maxWidth: "600px",
                            }}
                        >
                            <p className="fw-medium text-uppercase text-primary mb-2">
                                Our Services
                            </p>
                            <h1 className="display-5 mb-4">
                                We Provide Best Industrial Services
                            </h1>
                        </div>
                        <div className="row gy-5 gx-4">
                            {services.map((i) => (
                                <div
                                    className="col-md-6 col-lg-4 wow fadeInUp"
                                    data-wow-delay="0.1s"
                                >
                                    <div className="service-item">
                                        <img
                                            className="img-fluid"
                                            src={i.image2}
                                            alt=""
                                        />
                                        <div className="service-img">
                                            <img
                                                className="img-fluid"
                                                src={i.image1}
                                                alt=""
                                            />
                                        </div>
                                        <div className="service-detail">
                                            <div className="service-title">
                                                <hr className="w-25" />
                                                <h3 className="mb-0">
                                                    {i.name}
                                                </h3>
                                                <hr className="w-25" />
                                            </div>
                                            <div className="service-text">
                                                <p className="text-white mb-0 left-align">
                                                    {i.description}
                                                </p>
                                            </div>
                                        </div>
                                        {/* <a className="btn btn-light" href="">
                                Read More
                            </a> */}
                                    </div>
                                </div>
                            ))}
                            {/* <div
                        className="col-md-6 col-lg-4 wow fadeInUp"
                        data-wow-delay="0.3s"
                    >
                        <div className="service-item">
                            <img
                                className="img-fluid"
                                src="img/service-2.jpg"
                                alt=""
                            />
                            <div className="service-img">
                                <img
                                    className="img-fluid"
                                    src="img/service-2.jpg"
                                    alt=""
                                />
                            </div>
                            <div className="service-detail">
                                <div className="service-title">
                                    <hr className="w-25" />
                                    <h3 className="mb-0">
                                        Power & Energy Engineering
                                    </h3>
                                    <hr className="w-25" />
                                </div>
                                <div className="service-text">
                                    <p className="text-white mb-0">
                                        Erat ipsum justo amet duo et elitr
                                        dolor, est duo duo eos lorem sed diam
                                        stet diam sed stet.
                                    </p>
                                </div>
                            </div>
                            <a className="btn btn-light" href="">
                                Read More
                            </a>
                        </div>
                    </div>
                    <div
                        className="col-md-6 col-lg-4 wow fadeInUp"
                        data-wow-delay="0.5s"
                    >
                        <div className="service-item">
                            <img
                                className="img-fluid"
                                src="img/service-3.jpg"
                                alt=""
                            />
                            <div className="service-img">
                                <img
                                    className="img-fluid"
                                    src="img/service-3.jpg"
                                    alt=""
                                />
                            </div>
                            <div className="service-detail">
                                <div className="service-title">
                                    <hr className="w-25" />
                                    <h3 className="mb-0">
                                        Plumbing & Water Treatment
                                    </h3>
                                    <hr className="w-25" />
                                </div>
                                <div className="service-text">
                                    <p className="text-white mb-0">
                                        Erat ipsum justo amet duo et elitr
                                        dolor, est duo duo eos lorem sed diam
                                        stet diam sed stet.
                                    </p>
                                </div>
                            </div>
                            <a className="btn btn-light" href="">
                                Read More
                            </a>
                        </div>
                    </div> */}
                        </div>
                    </div>
                </div>
            </Breakpoint>
        </>
    );
};

export default Service;
