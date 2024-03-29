import React from "react";
import { Breakpoint } from "react-socks";
import "./product-partner.style.less";

const ProductPartner = () => {
    return (
        <>
            <Breakpoint small down>
                <a href="https://mountaingrout.com/" target="_blank">
                    <div className="container-fluid bg-dark pt-5 my-5 px-0 product-partner-wrapper-mobile">
                        <div
                            className="text-center mx-auto wow fadeIn"
                            data-wow-delay="0.1s"
                            style={{
                                maxWidth: "600px",
                            }}
                        >
                            <div className="mountain-grout-wrapper">
                                <img src="https://mountaingrout.com/wp-content/uploads/2019/12/imageedit_1_6251666244.png" />
                            </div>
                            <p className="authorized-dealer-text">
                                We are the authorized Installer / Dealer for
                                Green Mountain Polyurethane Products U.S.A.
                            </p>
                        </div>
                    </div>
                </a>
            </Breakpoint>
            <Breakpoint medium up>
                <a href="https://mountaingrout.com/" target="_blank">
                    <div className="container-fluid bg-dark pt-5 my-5 px-0 product-partner-wrapper">
                        <div
                            className="text-center mx-auto wow fadeIn"
                            data-wow-delay="0.1s"
                            style={{
                                maxWidth: "600px",
                            }}
                        >
                            <div className="mountain-grout-wrapper">
                                <img src="https://mountaingrout.com/wp-content/uploads/2019/12/imageedit_1_6251666244.png" />
                            </div>
                            <p className="authorized-dealer-text">
                                We are the authorized Installer / Dealer for
                                Green Mountain Polyurethane Products U.S.A.
                            </p>
                        </div>
                    </div>
                </a>
            </Breakpoint>
        </>
    );
};

export default ProductPartner;
