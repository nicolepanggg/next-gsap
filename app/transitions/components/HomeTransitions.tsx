"use client";
import ReactLenis from "lenis/react";

import gsap from "gsap";
import SplitType from "split-type";
import { useEffect, useRef } from "react";
import { Changa } from "next/font/google";

export default function Transitions() {
    const el = useRef(null);

    
    useEffect(() => {
         const coffeeText = new SplitType(el.current!, { types: "chars,lines" });


        gsap.set(el.current, { y: 400});
        gsap.to(el.current, { y: 0, duration: 1, stagger:0.075, ease:"power4.out", delay:1 });

      }, []);  


    return (
        <ReactLenis root>
            <div className="transitions-home">
                <h1 ref={el}>Coffee</h1>
            </div>
        </ReactLenis>
    );
}