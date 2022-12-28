import React from "react";

const Service = () => {
    const services = [
        {
            name: "Soil Stabilization",
            description: "Description here",
        },
        {
            name: "Waterproofing Solutions",
            description: "Description here",
        },
        {
            name: "CIVIL / ELECTRO MECHANICAL ENGINEERS",
            description: "Description here",
        },
        {
            name: "Specialized tailor made grout solutions for tunnels, dams, bridges and buildings",
            description: "Description here",
        },
    ];

    return (
        <div className="container-xxl py-5">
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
                    {services.map(i => 
                    <div
                        className="col-md-6 col-lg-4 wow fadeInUp"
                        data-wow-delay="0.1s"
                    >
                        <div className="service-item">
                            <img
                                className="img-fluid"
                                src="img/service-1.jpg"
                                alt=""
                            />
                            <div className="service-img">
                                <img
                                    className="img-fluid"
                                    src="img/service-1.jpg"
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
                                    <p className="text-white mb-0">
                                        {i.description}
                                    </p>
                                </div>
                            </div>
                            {/* <a className="btn btn-light" href="">
                                Read More
                            </a> */}
                        </div>
                    </div>)}
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
    );
};

export default Service;
