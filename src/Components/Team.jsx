import React from "react";

const Team = () => {
    const team = [
        {
            name: "Robert D'Souza",
            role: "CEO & Founder",
            image: "images/Team/Robert-D'Souza.jpeg",
        },
        {
            name: "Salim Almekar",
            role: "Project Manager",
            image: "images/Team/Salim-Almekar.jpeg",
        },
        {
            name: "Gouse Almekar",
            role: "CIDC Trained Supervisor",
            image: "/images/Team/Gouse-Almekar.jpeg",
        },
    ];

    return (
        <div class="container-xxl py-5">
            <div class="container">
                <div
                    class="text-center mx-auto wow fadeInUp"
                    data-wow-delay="0.1s"
                    style={{
                        // maxWidth: "600px",
                    }}
                >
                    <p class="fw-medium text-uppercase text-primary mb-2">
                        Our Team
                    </p>
                    <h1 class="display-5 mb-5">Meet the Team</h1>
                </div>
                <div class="row g-4">
                    {team.map((i) => (
                        <div
                            class="col-lg-4 col-md-6 wow fadeInUp team-member-wrapper"
                            data-wow-delay="0.1s"
                        >
                            <div class="team-item">
                                <img class="img-fluid" src={i.image} alt={i.name} />
                                <div class="d-flex">
                                    <div
                                        class="flex-shrink-0 btn-square bg-primary"
                                        style={{
                                            width: "90px",
                                            height: "90px",
                                        }}
                                    >
                                        <i class="fa fa-2x fa-share text-white"></i>
                                    </div>
                                    <div
                                        class="position-relative overflow-hidden bg-light d-flex flex-column justify-content-center w-100 ps-4"
                                        style={{
                                            height: "90px",
                                        }}
                                    >
                                        <h5>{i.name}</h5>
                                        <span class="text-primary">
                                            {i.role}
                                        </span>
                                        <div class="team-social">
                                            <a
                                                class="btn btn-square btn-dark rounded-circle mx-1"
                                                href=""
                                            >
                                                <i class="fab fa-facebook-f"></i>
                                            </a>
                                            <a
                                                class="btn btn-square btn-dark rounded-circle mx-1"
                                                href=""
                                            >
                                                <i class="fab fa-twitter"></i>
                                            </a>
                                            <a
                                                class="btn btn-square btn-dark rounded-circle mx-1"
                                                href=""
                                            >
                                                <i class="fab fa-instagram"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                    {/* <div
                        class="col-lg-4 col-md-6 wow fadeInUp"
                        data-wow-delay="0.1s"
                    >
                        <div class="team-item">
                            <img
                                class="img-fluid"
                                src="img/team-1.jpg"
                                alt=""
                            />
                            <div class="d-flex">
                                <div
                                    class="flex-shrink-0 btn-square bg-primary"
                                    style={{
                                        width: "90px",
                                        height: "90px",
                                    }}
                                >
                                    <i class="fa fa-2x fa-share text-white"></i>
                                </div>
                                <div
                                    class="position-relative overflow-hidden bg-light d-flex flex-column justify-content-center w-100 ps-4"
                                    style={{
                                        height: "90px",
                                    }}
                                >
                                    <h5>Rob Miller</h5>
                                    <span class="text-primary">
                                        CEO & Founder
                                    </span>
                                    <div class="team-social">
                                        <a
                                            class="btn btn-square btn-dark rounded-circle mx-1"
                                            href=""
                                        >
                                            <i class="fab fa-facebook-f"></i>
                                        </a>
                                        <a
                                            class="btn btn-square btn-dark rounded-circle mx-1"
                                            href=""
                                        >
                                            <i class="fab fa-twitter"></i>
                                        </a>
                                        <a
                                            class="btn btn-square btn-dark rounded-circle mx-1"
                                            href=""
                                        >
                                            <i class="fab fa-instagram"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div
                        class="col-lg-4 col-md-6 wow fadeInUp"
                        data-wow-delay="0.3s"
                    >
                        <div class="team-item">
                            <img
                                class="img-fluid"
                                src="img/team-2.jpg"
                                alt=""
                            />
                            <div class="d-flex">
                                <div
                                    class="flex-shrink-0 btn-square bg-primary"
                                    style={{
                                        width: "90px",
                                        height: "90px",
                                    }}
                                >
                                    <i class="fa fa-2x fa-share text-white"></i>
                                </div>
                                <div
                                    class="position-relative overflow-hidden bg-light d-flex flex-column justify-content-center w-100 ps-4"
                                    style={{
                                        height: "90px",
                                    }}
                                >
                                    <h5>Adam Crew</h5>
                                    <span class="text-primary">
                                        Project Manager
                                    </span>
                                    <div class="team-social">
                                        <a
                                            class="btn btn-square btn-dark rounded-circle mx-1"
                                            href=""
                                        >
                                            <i class="fab fa-facebook-f"></i>
                                        </a>
                                        <a
                                            class="btn btn-square btn-dark rounded-circle mx-1"
                                            href=""
                                        >
                                            <i class="fab fa-twitter"></i>
                                        </a>
                                        <a
                                            class="btn btn-square btn-dark rounded-circle mx-1"
                                            href=""
                                        >
                                            <i class="fab fa-instagram"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div
                        class="col-lg-4 col-md-6 wow fadeInUp"
                        data-wow-delay="0.5s"
                    >
                        <div class="team-item">
                            <img
                                class="img-fluid"
                                src="img/team-3.jpg"
                                alt=""
                            />
                            <div class="d-flex">
                                <div
                                    class="flex-shrink-0 btn-square bg-primary"
                                    style={{
                                        width: "90px",
                                        height: "90px",
                                    }}
                                >
                                    <i class="fa fa-2x fa-share text-white"></i>
                                </div>
                                <div
                                    class="position-relative overflow-hidden bg-light d-flex flex-column justify-content-center w-100 ps-4"
                                    style={{
                                        height: "90px",
                                    }}
                                >
                                    <h5>Peter Farel</h5>
                                    <span class="text-primary">Engineer</span>
                                    <div class="team-social">
                                        <a
                                            class="btn btn-square btn-dark rounded-circle mx-1"
                                            href=""
                                        >
                                            <i class="fab fa-facebook-f"></i>
                                        </a>
                                        <a
                                            class="btn btn-square btn-dark rounded-circle mx-1"
                                            href=""
                                        >
                                            <i class="fab fa-twitter"></i>
                                        </a>
                                        <a
                                            class="btn btn-square btn-dark rounded-circle mx-1"
                                            href=""
                                        >
                                            <i class="fab fa-instagram"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> */}
                </div>
            </div>
        </div>
    );
};

export default Team;
