import React from "react";

const Carousel = () => {
    return (
        <div class="container-fluid px-0 mb-5">
            <div
                id="header-carousel"
                class="carousel slide"
                data-bs-ride="carousel"
            >
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img
                            class="w-100"
                            src="img/carousel-1.jpg"
                            alt="Image"
                        />
                        <div class="carousel-caption">
                            <div class="container">
                                <div class="row justify-content-center">
                                    <div class="col-lg-10 text-start">
                                        <p class="fs-5 fw-medium text-primary text-uppercase animated slideInRight">
                                            25 Years of Working Experience
                                        </p>
                                        <h1 class="display-1 text-white mb-5 animated slideInRight">
                                            Industrial Solution Providing
                                            Company
                                        </h1>
                                        {/* <a
                                            href=""
                                            class="btn btn-primary py-3 px-5 animated slideInRight"
                                        >
                                            Explore More
                                        </a> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img
                            class="w-100"
                            src="img/carousel-2.jpg"
                            alt="Image"
                        />
                        <div class="carousel-caption">
                            <div class="container">
                                <div class="row justify-content-center">
                                    <div class="col-lg-10 text-start">
                                        <p class="fs-5 fw-medium text-primary text-uppercase animated slideInRight">
                                            25 Years of Working Experience
                                        </p>
                                        <h1 class="display-1 text-white mb-5 animated slideInRight">
                                            The Best Reliable Industry Solution
                                        </h1>
                                        {/* <a
                                            href=""
                                            class="btn btn-primary py-3 px-5 animated slideInRight"
                                        >
                                            Explore More
                                        </a> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <button
                    class="carousel-control-prev"
                    type="button"
                    data-bs-target="#header-carousel"
                    data-bs-slide="prev"
                >
                    <span
                        class="carousel-control-prev-icon"
                        aria-hidden="true"
                    ></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button
                    class="carousel-control-next"
                    type="button"
                    data-bs-target="#header-carousel"
                    data-bs-slide="next"
                >
                    <span
                        class="carousel-control-next-icon"
                        aria-hidden="true"
                    ></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    );
};

export default Carousel;
