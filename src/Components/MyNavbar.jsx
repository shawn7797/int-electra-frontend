import React from "react";

const MyNavbar = () => {
    const activeLink =
        window.location.pathname.split("/")[
            window.location.pathname.split("/").length - 1
        ];
    const isActiveLink = (link) => activeLink == link;

    const getActiveLink = (link) =>
        isActiveLink(link) ? "nav-item nav-link active" : "nav-item nav-link";

    console.log("activeLink: ", activeLink);
    return (
        <nav className="navbar navbar-expand-lg bg-white navbar-light sticky-top py-0 pe-5">
            <a href="/" className="navbar-brand ps-5 me-0">
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
                    <a href="/" className={getActiveLink("")}>
                        Home
                    </a>
                    <a href="/about" className={getActiveLink("about")}>
                        About
                    </a>
                    <a href="/services" className={getActiveLink("services")}>
                        Services
                    </a>
                    <div className="nav-item dropdown">
                        <a
                            href="#"
                            className={
                                isActiveLink("team")
                                    ? "nav-link dropdown-toggle active"
                                    : "nav-link dropdown-toggle"
                            }
                            data-bs-toggle="dropdown"
                        >
                            Pages
                        </a>
                        <div className="dropdown-menu bg-light m-0">
                            <a href="project.html" className="dropdown-item">
                                Projects
                            </a>
                            {/* <a href="/features" className="dropdown-item">
                                Features
                            </a> */}
                            <a
                                href="/team"
                                className={
                                    isActiveLink("team")
                                        ? "dropdown-item active"
                                        : "dropdown-item"
                                }
                            >
                                Our Team
                            </a>
                            <a
                                href="testimonial.html"
                                className="dropdown-item"
                            >
                                Testimonial
                            </a>
                            {/* <a href="404.html" className="dropdown-item">
                                404 Page
                            </a> */}
                        </div>
                    </div>
                    {/* <a href="/contactUs" className="nav-item nav-link">
                        Contact
                    </a> */}
                </div>
                <a
                    href="/contactUs"
                    className="btn btn-primary px-3 d-none d-lg-block"
                >
                    {/* Get A Quote */}
                    Contact Us
                </a>
            </div>
        </nav>
    );
};

export default MyNavbar;
