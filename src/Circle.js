import React from 'react';
import './App.css'
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import MotionPathPlugin from "gsap/MotionPathPlugin";

const Circle = () => {


    gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);
    gsap.defaults({ ease: "none" });


    const main = gsap.timeline({
        defaults: { duration: 1 },
        scrollTrigger: {
            trigger: "#svg",
            scrub: true,
            start: "top center",
            end: "bottom center"
        }
    })
        .to(".ball01", { duration: 0.01, autoAlpha: 1 })
        .from(".theLine", { drawSVG: 0 }, 0)
        .to(".ball01", {
            motionPath: {
                path: ".theLine",
                align: ".theLine",
                alignOrigin: [0.5, 0.5],
            }
        }, 0);



    return (
        <div className='svg-parent'>
            <svg width="225" height="225" viewBox="0 0 279 338" fill="none" xmlns="http://www.w3.org/2000/svg">

                <path class="theLine" id="Vector 3" d="M1 295.255C27.5 320.089 101.1 359.555 183.5 318.755C265.9 277.955 280.5 191.755 277.5 153.755C276.5 130.755 263.5 76.0554 219.5 41.2554C175.5 6.45543 132.167 0.0887639 116 1.25543C105.5 0.422089 78.1 1.15541 52.5 10.7554C26.9 20.3554 7.83333 35.0888 1.5 41.2554" stroke="white" stroke-width="2" />

                <circle class="ballm ball01" r="14" cx="0" cy="34"></circle>
                <circle class="ball " r="11" cx="0" cy="40"></circle>
                <circle class="ball " r="11" cx="100" cy="0"></circle>
                <circle class="ball " r="11" cx="230" cy="50"></circle>
                <circle class="ball " r="11" cx="277" cy="170"></circle>
                <circle class="ball " r="11" cx="224" cy="290"></circle>
                <circle class="ball " r="11" cx="115" cy="335"></circle>
                <circle class="ball " r="11" cx="0" cy="296"></circle>

            </svg>
        </div>
    );
};

export default Circle;