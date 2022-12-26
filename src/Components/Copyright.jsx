import React from "react";

const Copyright = () => {
    return (
        <div class="container-fluid copyright bg-dark py-4">
            <div class="container text-center">
                <p class="mb-2">
                    Copyright &copy;{" "}
                    <a class="fw-semi-bold" href="#">
                        Your Site Name
                    </a>
                    , All Right Reserved.
                </p>
                <p class="mb-0">
                    Designed By{" "}
                    <a class="fw-semi-bold" href="https://htmlcodex.com">
                        HTML Codex
                    </a>
                </p>
            </div>
        </div>
    );
};

export default Copyright;
