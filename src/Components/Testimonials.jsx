import React from "react";

const Testimonials = () => {
    return (
        <div class="container-xxl py-5">
            <div class="container">
                <div
                    class="text-center mx-auto wow fadeInUp"
                    data-wow-delay="0.1s"
                    style={{
                        maxWidth: "600px"
                    }}
                >
                    <p class="fw-medium text-uppercase text-primary mb-2">
                        Testimonial
                    </p>
                    <h1 class="display-5 mb-5">What Our Clients Say!</h1>
                </div>
                <div
                    class="owl-carousel testimonial-carousel wow fadeInUp"
                    data-wow-delay="0.1s"
                >
                    <div class="testimonial-item text-center">
                        <div class="testimonial-img position-relative">
                            <img
                                class="img-fluid rounded-circle mx-auto mb-5"
                                src="img/testimonial-1.jpg"
                            />
                            <div class="btn-square bg-primary rounded-circle">
                                <i class="fa fa-quote-left text-white"></i>
                            </div>
                        </div>
                        <div class="testimonial-text text-center rounded p-4">
                            <p>
                                Clita clita tempor justo dolor ipsum amet kasd
                                amet duo justo duo duo labore sed sed. Magna ut
                                diam sit et amet stet eos sed clita erat magna
                                elitr erat sit sit erat at rebum justo sea
                                clita.
                            </p>
                            <h5 class="mb-1">Client Name</h5>
                            <span class="fst-italic">Profession</span>
                        </div>
                    </div>
                    <div class="testimonial-item text-center">
                        <div class="testimonial-img position-relative">
                            <img
                                class="img-fluid rounded-circle mx-auto mb-5"
                                src="img/testimonial-2.jpg"
                            />
                            <div class="btn-square bg-primary rounded-circle">
                                <i class="fa fa-quote-left text-white"></i>
                            </div>
                        </div>
                        <div class="testimonial-text text-center rounded p-4">
                            <p>
                                Clita clita tempor justo dolor ipsum amet kasd
                                amet duo justo duo duo labore sed sed. Magna ut
                                diam sit et amet stet eos sed clita erat magna
                                elitr erat sit sit erat at rebum justo sea
                                clita.
                            </p>
                            <h5 class="mb-1">Client Name</h5>
                            <span class="fst-italic">Profession</span>
                        </div>
                    </div>
                    <div class="testimonial-item text-center">
                        <div class="testimonial-img position-relative">
                            <img
                                class="img-fluid rounded-circle mx-auto mb-5"
                                src="img/testimonial-3.jpg"
                            />
                            <div class="btn-square bg-primary rounded-circle">
                                <i class="fa fa-quote-left text-white"></i>
                            </div>
                        </div>
                        <div class="testimonial-text text-center rounded p-4">
                            <p>
                                Clita clita tempor justo dolor ipsum amet kasd
                                amet duo justo duo duo labore sed sed. Magna ut
                                diam sit et amet stet eos sed clita erat magna
                                elitr erat sit sit erat at rebum justo sea
                                clita.
                            </p>
                            <h5 class="mb-1">Client Name</h5>
                            <span class="fst-italic">Profession</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Testimonials;
