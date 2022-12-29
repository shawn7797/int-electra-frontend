import React from "react";

const Footer = () => {
    return (
        <div
            className="container-fluid bg-dark footer mt-5 py-5 wow fadeIn"
            data-wow-delay="0.1s"
        >
            <div className="container py-5">
                <div className="row g-5">
                    <div className="col-lg-3 col-md-6">
                        <h5 className="text-white mb-4">Our Office</h5>
                        <p className="mb-2">
                            <i className="fa fa-map-marker-alt me-3"></i>Shop
                            No. 6,
                            <br /> (Back Side) Mariano Apartments, Dongrim Rd.,
                            <br />
                            Navelim, Salcete,
                            <br /> Goa 403 707
                        </p>
                        <a href="tel:+919226269036">
                            <p class="mb-2">
                                <i class="fa fa-phone-alt me-3"></i>
                                +919226269036
                            </p>
                        </a>
                        <p className="mb-2">
                            <i className="fa fa-envelope me-3"></i>
                            reagendsouza@yahoo.com
                        </p>
                        <div className="d-flex pt-3">
                            <a
                                className="btn btn-square btn-primary rounded-circle me-2"
                                href=""
                            >
                                <i className="fab fa-twitter"></i>
                            </a>
                            <a
                                className="btn btn-square btn-primary rounded-circle me-2"
                                href="https://www.facebook.com/settings?tab=profile&section=username"
                            >
                                <i className="fab fa-facebook-f"></i>
                            </a>
                            <a
                                className="btn btn-square btn-primary rounded-circle me-2"
                                href=""
                            >
                                <i className="fab fa-youtube"></i>
                            </a>
                            <a
                                className="btn btn-square btn-primary rounded-circle me-2"
                                href=""
                            >
                                <i className="fab fa-linkedin-in"></i>
                            </a>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <h5 className="text-white mb-4">Quick Links</h5>
                        <a className="btn btn-link" href="/about">
                            About Us
                        </a>
                        <a className="btn btn-link" href="contact.html">
                            Contact Us
                        </a>
                        <a className="btn btn-link" href="/services">
                            Our Services
                        </a>
                        <a className="btn btn-link" href="/terms">
                            Terms & Conditions
                        </a>
                        <a className="btn btn-link" href="/support">
                            Support
                        </a>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <h5 className="text-white mb-4">Business Hours</h5>
                        <p className="mb-1">Monday - Friday</p>
                        <h6 className="text-light">09:00 am - 07:00 pm</h6>
                        <p className="mb-1">Saturday</p>
                        <h6 className="text-light">09:00 am - 12:00 pm</h6>
                        <p className="mb-1">Sunday</p>
                        <h6 className="text-light">Closed</h6>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <h5 className="text-white mb-4">Newsletter</h5>
                        <p>
                            Dolor amet sit justo amet elitr clita ipsum elitr
                            est.
                        </p>
                        <div className="position-relative w-100">
                            <input
                                className="form-control bg-transparent w-100 py-3 ps-4 pe-5"
                                type="text"
                                placeholder="Your email"
                            />
                            <button
                                type="button"
                                className="btn btn-primary py-2 position-absolute top-0 end-0 mt-2 me-2"
                            >
                                SignUp
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
