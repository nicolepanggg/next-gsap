"use client";
import ReactLenis from "lenis/react";

export default function ProjectTransitions() {
    return (
        <ReactLenis root>
            <div className="project">
                <div className="images">
                    <img src="/img-1.jpg" alt="" />
                    <img src="/img-2.jpg" alt="" />
                    <img src="/img-3.jpg" alt="" />
                    <img src="/img-4.jpg" alt="" />
                </div>
            </div>
        </ReactLenis>
    );
}