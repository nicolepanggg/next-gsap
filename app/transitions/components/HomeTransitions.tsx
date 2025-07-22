"use client";
import ReactLenis from "lenis/react";

import gsap from "gsap";
import SplitType from "split-type";
import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

export default function Transitions() {
    const el = useRef(null);
    const pathname = usePathname();

    
    useEffect(() => {
        const coffeeText = new SplitType(el.current!, { types: "chars" });
        const animation = gsap.from(coffeeText.chars, {
            opacity: 0,
            y: 50,
            stagger: 0.05,
            duration: 0.8,
            ease: 'power3.out',
        });

        if (pathname === "/transitions") {
            animation.restart();
        }

        return () => {
            animation.kill();
            coffeeText.revert();
        };
    }, [pathname]);

    return (
        <ReactLenis root>
            <div className="transitions-home">
                <h1 ref={el}>Coffee</h1>
            </div>
        </ReactLenis>
    );
}