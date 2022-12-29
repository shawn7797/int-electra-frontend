import React from "react";

const Copyright = () => {
    return (
        <div class="container-fluid copyright bg-dark py-4">
            <div class="container text-center">
                <p class="mb-2">
                    Copyright &copy;{" "}
                    <a class="fw-semi-bold orange" href="#">
                        INT ELECTRA
                    </a>
                    <span> {new Date().getFullYear()}</span>
                </p>
                <p class="mb-0">
                    Designed By{" "}
                    <a
                        class="fw-semi-bold orange"
                        href="https://shawn7797.github.io/"
                    >
                        Shawn Mathias
                    </a>
                </p>
            </div>
        </div>
    );
};

export default Copyright;
