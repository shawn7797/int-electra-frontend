import React from "react";

const NavBar = () => {
    return (
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
                    <a href="index.html" className="nav-item nav-link active">
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
                            <a href="project.html" className="dropdown-item">
                                Projects
                            </a>
                            <a href="feature.html" className="dropdown-item">
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
                <a href="" className="btn btn-primary px-3 d-none d-lg-block">
                    Get A Quote
                </a>
            </div>
        </nav>
    );
};

export default NavBar;
