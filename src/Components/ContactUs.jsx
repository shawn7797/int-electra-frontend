import React from "react";

const ContactUs = () => {
    return (
        <div class="contact-us-wrapper container-xxl py-5">
            <div class="container">
                <div class="row g-5 justify-content-center mb-5 cards-row-wrapper">
                    <div
                        class="col-lg-4 col-md-6 wow fadeInUp"
                        data-wow-delay="0.1s"
                    >
                        <div class="bg-light text-center h-100 p-5 flexed-card flexed-card">
                            <div>
                                <div
                                    class="btn-square bg-white rounded-circle mx-auto mb-4"
                                    style={{
                                        width: "90px",
                                        height: "90px",
                                    }}
                                >
                                    <i class="fa fa-phone-alt fa-2x text-primary"></i>
                                </div>
                                <h4 class="mb-3">Phone Number</h4>
                                <a href="tel:+919226269036"><p class="mb-2">+919226269036</p></a>
                                <p class="mb-4">+919923951460</p>
                            </div>
                            <div>
                                <a
                                    class="btn btn-primary px-4"
                                    href="tel:+919226269036"
                                >
                                    Call Now{" "}
                                    <i class="fa fa-arrow-right ms-2"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div
                        class="col-lg-4 col-md-6 wow fadeInUp"
                        data-wow-delay="0.3s"
                    >
                        <div class="bg-light text-center h-100 p-5 flexed-card">
                            <div>
                                <div
                                    class="btn-square bg-white rounded-circle mx-auto mb-4"
                                    style={{
                                        width: "90px",
                                        height: "90px",
                                    }}
                                >
                                    <i class="fa fa-envelope-open fa-2x text-primary"></i>
                                </div>
                                <h4 class="mb-3">Email Address</h4>
                                <p class="mb-2">info@example.com</p>
                                <p class="mb-4">reagendsouza@yahoo.com</p>
                            </div>
                            <div>
                                <a
                                    class="btn btn-primary px-4"
                                    href="mailto:reagendsouza@yahoo.com"
                                >
                                    Email Now{" "}
                                    <i class="fa fa-arrow-right ms-2"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div
                        class="col-lg-4 col-md-6 wow fadeInUp"
                        data-wow-delay="0.5s"
                    >
                        <div class="bg-light text-center h-100 p-5 flexed-card">
                            <div>
                                <div
                                    class="btn-square bg-white rounded-circle mx-auto mb-4"
                                    style={{
                                        width: "90px",
                                        height: "90px",
                                    }}
                                >
                                    <i class="fa fa-map-marker-alt fa-2x text-primary"></i>
                                </div>
                                <h4 class="mb-3">Office Address</h4>
                                <p class="mb-2">
                                    Shop No. 6,
                                    <br />
                                    (Back Side) Mariano Apartment, Dongrim Rd.,
                                    Navelim,
                                    <br />
                                    Salcete, Goa 403 707
                                </p>
                                <a href="tel:+919226269036"><p class="mb-4">+919226269036</p></a>
                            </div>
                            <div>
                                <a
                                    class="btn btn-primary px-4"
                                    href="https://goo.gl/maps/tM1fGbawonYVTaEv5"
                                    target="blank"
                                >
                                    Direction{" "}
                                    <i class="fa fa-arrow-right ms-2"></i>
                                </a>
                            </div>
                        </div>
                        {/* <div class="row mb-5">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15396.830002898992!2d73.9679037!3d15.2564759!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x2dfb304a93225e50!2sInt%20Electra!5e0!3m2!1sen!2sin!4v1672157150566!5m2!1sen!2sin"
                                width="100%"
                                height="600"
                                style={{ border: "0" }}
                                allowfullscreen=""
                                loading="lazy"
                                referrerpolicy="no-referrer-when-downgrade"
                            ></iframe>
                        </div>
                        <div class="row g-5">
                            <div
                                class="col-lg-6 wow fadeInUp"
                                data-wow-delay="0.1s"
                            >
                                <p class="fw-medium text-uppercase text-primary mb-2">
                                    Contact Us
                                </p>
                                <h1 class="display-5 mb-4">
                                    If You Have Any Queries, Please Feel Free To
                                    Contact Us
                                </h1>
                                <p class="mb-4">
                                    The contact form is currently inactive. Get
                                    a functional and working contact form with
                                    Ajax & PHP in a few minutes. Just copy and
                                    paste the files, add a little code and
                                    you're done.{" "}
                                    <a href="https://htmlcodex.com/contact-form">
                                        Download Now
                                    </a>
                                    .
                                </p>
                                <div class="row g-4">
                                    <div class="col-6">
                                        <div class="d-flex">
                                            <div class="flex-shrink-0 btn-square bg-primary rounded-circle">
                                                <i class="fa fa-phone-alt text-white"></i>
                                            </div>
                                            <div class="ms-3">
                                                <h6>Call Us</h6>
                                                <span>+919226269036</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-6">
                                        <div class="d-flex">
                                            <div class="flex-shrink-0 btn-square bg-primary rounded-circle">
                                                <i class="fa fa-envelope text-white"></i>
                                            </div>
                                            <div class="ms-3">
                                                <h6>Mail Us</h6>
                                                <span>
                                                    reagendsouza@yahoo.com
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div
                                class="col-lg-6 wow fadeInUp"
                                data-wow-delay="0.5s"
                            >
                                <form>
                                    <div class="row g-3">
                                        <div class="col-md-6">
                                            <div class="form-floating">
                                                <input
                                                    type="text"
                                                    class="form-control"
                                                    id="name"
                                                    placeholder="Your Name"
                                                />
                                                <label for="name">
                                                    Your Name
                                                </label>
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="form-floating">
                                                <input
                                                    type="email"
                                                    class="form-control"
                                                    id="email"
                                                    placeholder="Your Email"
                                                />
                                                <label for="email">
                                                    Your Email
                                                </label>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <div class="form-floating">
                                                <input
                                                    type="text"
                                                    class="form-control"
                                                    id="subject"
                                                    placeholder="Subject"
                                                />
                                                <label for="subject">
                                                    Subject
                                                </label>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <div class="form-floating">
                                                <textarea
                                                    class="form-control"
                                                    placeholder="Leave a message here"
                                                    id="message"
                                                    style={{ height: "150px" }}
                                                ></textarea>
                                                <label for="message">
                                                    Message
                                                </label>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <button
                                                class="btn btn-primary py-3 px-5"
                                                type="submit"
                                            >
                                                Send Message
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div> */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;
