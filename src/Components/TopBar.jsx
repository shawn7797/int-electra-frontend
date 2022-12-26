import React from "react";

const TopBar = () => {
    return (
        <>
            <div className="container-fluid bg-dark px-0">
                <div className="row g-0 d-none d-lg-flex">
                    <div className="col-lg-6 ps-5 text-start">
                        <div className="h-100 d-inline-flex align-items-center text-white">
                            <span>Follow Us:</span>
                            <a className="btn btn-link text-light" href="">
                                <i className="fab fa-facebook-f"></i>
                            </a>
                            <a className="btn btn-link text-light" href="">
                                <i className="fab fa-twitter"></i>
                            </a>
                            <a className="btn btn-link text-light" href="">
                                <i className="fab fa-linkedin-in"></i>
                            </a>
                            <a className="btn btn-link text-light" href="">
                                <i className="fab fa-instagram"></i>
                            </a>
                            <a className="btn btn-link text-light" href="">
                                <i class="bi-envelope-fill"></i>
                            </a>
                        </div>
                    </div>
                    <div className="col-lg-6 text-end">
                        <div className="h-100 topbar-right d-inline-flex align-items-center text-white py-2 px-5">
                            <span className="fs-5 fw-bold me-2">
                                <i className="fa fa-phone-alt me-2"></i>Call Us:
                            </span>
                            <span className="fs-5 fw-bold">+919226269036</span>
                        </div>
                    </div>
                </div>
            </div>
            <nav className="navbar navbar-expand-lg bg-white navbar-light sticky-top py-0 pe-5">
                <a href="index.html" className="navbar-brand ps-5 me-0">
                    <h1 className="text-white m-0">INT ELECTRA</h1>
                </a>
                <button
                    type="button"
                    className="navbar-toggler me-0"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarCollapse"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <div className="navbar-nav ms-auto p-4 p-lg-0">
                        <a
                            href="index.html"
                            className="nav-item nav-link active"
                        >
                            Home
                        </a>
                        <a href="about.html" className="nav-item nav-link">
                            About
                        </a>
                        <a href="service.html" className="nav-item nav-link">
                            Services
                        </a>
                        <div className="nav-item dropdown">
                            <a
                                href="#"
                                className="nav-link dropdown-toggle"
                                data-bs-toggle="dropdown"
                            >
                                Pages
                            </a>
                            <div className="dropdown-menu bg-light m-0">
                                <a
                                    href="project.html"
                                    className="dropdown-item"
                                >
                                    Projects
                                </a>
                                <a
                                    href="feature.html"
                                    className="dropdown-item"
                                >
                                    Features
                                </a>
                                <a href="team.html" className="dropdown-item">
                                    Our Team
                                </a>
                                <a
                                    href="testimonial.html"
                                    className="dropdown-item"
                                >
                                    Testimonial
                                </a>
                                <a href="404.html" className="dropdown-item">
                                    404 Page
                                </a>
                            </div>
                        </div>
                        <a href="contact.html" className="nav-item nav-link">
                            Contact
                        </a>
                    </div>
                    <a
                        href=""
                        className="btn btn-primary px-3 d-none d-lg-block"
                    >
                        Get A Quote
                    </a>
                </div>
            </nav>
        </>
    );
};

export default TopBar;
