import React, { useEffect } from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import $ from "jquery";

const Testimonials = () => {
    useEffect(() => {
        setTimeout(() => {
            $(".testimonial-carousel").owlCarousel({
                autoplay: true,
                smartSpeed: 1000,
                center: true,
                dots: false,
                loop: true,
                nav: true,
                navText: [
                    '<i class="bi bi-arrow-left"></i>',
                    '<i class="bi bi-arrow-right"></i>',
                ],
                responsive: {
                    0: {
                        items: 1,
                    },
                    768: {
                        items: 2,
                    },
                },
            });
        }, 2500);
    }, []);

    return (
        <div className="container-xxl py-5" style={{ marginTop: "10vw" }}>
            <div className="container">
                <div
                    className="text-center mx-auto wow fadeInUp"
                    data-wow-delay="0.1s"
                    style={{
                        maxWidth: "600px",
                    }}
                >
                    <p className="fw-medium text-uppercase text-primary mb-2">
                        Testimonial
                    </p>
                    <h1 className="display-5 mb-5">What Our Clients Say!</h1>
                </div>
                {/* <div
                    className="owl-carousel testimonial-carousel wow fadeInUp"
                    data-wow-delay="0.1s"
                >
                    <div className="testimonial-item text-center">
                        <div className="testimonial-img position-relative">
                            <img
                                className="img-fluid rounded-circle mx-auto mb-5"
                                src="img/testimonial-1.jpg"
                            />
                            <div className="btn-square bg-primary rounded-circle">
                                <i className="fa fa-quote-left text-white"></i>
                            </div>
                        </div>
                        <div className="testimonial-text text-center rounded p-4">
                            <p>
                                Clita clita tempor justo dolor ipsum amet kasd
                                amet duo justo duo duo labore sed sed. Magna ut
                                diam sit et amet stet eos sed clita erat magna
                                elitr erat sit sit erat at rebum justo sea
                                clita.
                            </p>
                            <h5 className="mb-1">Client Name</h5>
                            <span className="fst-italic">Profession</span>
                        </div>
                    </div>
                    <div className="testimonial-item text-center">
                        <div className="testimonial-img position-relative">
                            <img
                                className="img-fluid rounded-circle mx-auto mb-5"
                                src="img/testimonial-2.jpg"
                            />
                            <div className="btn-square bg-primary rounded-circle">
                                <i className="fa fa-quote-left text-white"></i>
                            </div>
                        </div>
                        <div className="testimonial-text text-center rounded p-4">
                            <p>
                                Clita clita tempor justo dolor ipsum amet kasd
                                amet duo justo duo duo labore sed sed. Magna ut
                                diam sit et amet stet eos sed clita erat magna
                                elitr erat sit sit erat at rebum justo sea
                                clita.
                            </p>
                            <h5 className="mb-1">Client Name</h5>
                            <span className="fst-italic">Profession</span>
                        </div>
                    </div>
                    <div className="testimonial-item text-center">
                        <div className="testimonial-img position-relative">
                            <img
                                className="img-fluid rounded-circle mx-auto mb-5"
                                src="img/testimonial-3.jpg"
                            />
                            <div className="btn-square bg-primary rounded-circle">
                                <i className="fa fa-quote-left text-white"></i>
                            </div>
                        </div>
                        <div className="testimonial-text text-center rounded p-4">
                            <p>
                                Clita clita tempor justo dolor ipsum amet kasd
                                amet duo justo duo duo labore sed sed. Magna ut
                                diam sit et amet stet eos sed clita erat magna
                                elitr erat sit sit erat at rebum justo sea
                                clita.
                            </p>
                            <h5 className="mb-1">Client Name</h5>
                            <span className="fst-italic">Profession</span>
                        </div>
                    </div>
                </div> */}
                <OwlCarousel
                    loop
                    nav
                    className="owl-theme testimonial-carousel"
                    navText={
                        '<i class="bi bi-arrow-left"></i>,<i class="bi bi-arrow-right"></i>'
                    }
                    autoplay={true}
                    smartSpeed={1000}
                    center
                    items={3}
                    dots={false}
                    responsive={{
                        0: {
                            items: 1,
                        },
                        768: {
                            items: 2,
                        },
                    }}
                >
                    <div className="item testimonial-item text-center">
                        <div className="testimonial-img position-relative">
                            <img
                                className="img-fluid rounded-circle mx-auto mb-5"
                                src="img/testimonial-1.jpg"
                            />
                            <div className="btn-square bg-primary rounded-circle">
                                <i className="fa fa-quote-left text-white"></i>
                            </div>
                        </div>
                        <div className="testimonial-text text-center rounded p-4">
                            <p>
                                Clita clita tempor justo dolor ipsum amet kasd
                                amet duo justo duo duo labore sed sed. Magna ut
                                diam sit et amet stet eos sed clita erat magna
                                elitr erat sit sit erat at rebum justo sea
                                clita.
                            </p>
                            <h5 className="mb-1">Client Name</h5>
                            <span className="fst-italic">Profession</span>
                        </div>
                    </div>
                </OwlCarousel>
            </div>
        </div>
    );
};

export default Testimonials;
