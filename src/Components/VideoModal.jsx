import React from "react";

const VideoModal = () => {
    return (
        <div
            className="modal modal-video fade"
            id="videoModal"
            tabindex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
        >
            <div className="modal-dialog">
                <div className="modal-content rounded-0">
                    <div className="modal-header">
                        <h3 className="modal-title" id="exampleModalLabel">
                            Youtube Video
                        </h3>
                        <button
                            type="button"
                            className="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                        ></button>
                    </div>
                    <div className="modal-body">
                        <div className="ratio ratio-16x9">
                            <iframe
                                className="embed-responsive-item"
                                src=""
                                id="video"
                                allowfullscreen
                                allowscriptaccess="always"
                                allow="autoplay"
                            ></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VideoModal;
