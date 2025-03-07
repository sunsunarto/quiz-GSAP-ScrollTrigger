import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../ComponentsStyle/Partners.css";

gsap.registerPlugin(ScrollTrigger);

function Partners() {
    const partnersRef = useRef(null);

    useEffect(() => {
        const images = partnersRef.current.querySelectorAll("img");

        images.forEach((image) => {
            gsap.fromTo(
                image,
                { y: -50, opacity: 0 },
                {
                    y: 0,
                    duration: 1,
                    opacity: 1,
                    ease: "power1.inOut",
                    scrollTrigger: {
                        trigger: image,
                        start: "top 90%",
                        end: "bottom 60%",
                        scrub: true,
                    },
                }
            );
        });
    }, []);

    return (
        <div className="PartnersCon">
            <div className="partnersImg" ref={partnersRef}>
                <img src="https://cdn.prod.website-files.com/6264607e95d7be676470ea8d/62aa3401042d425391235aaa_Logo-adviRES.jpg" alt="" />
                <img src="https://cdn.prod.website-files.com/6264607e95d7be676470ea8d/62aa33e1380de680b7110ebf_ovid-wind-logo.png" alt="" />
                <img src="https://cdn.prod.website-files.com/6264607e95d7be676470ea8d/6265d803f32677c8352bc485_tbs_logo1-02-p-500.png" alt="" />
                <img src="https://cdn.prod.website-files.com/6264607e95d7be676470ea8d/6265d7edf0c46ce38f559328_download.png" alt="" />
                <img src="https://cdn.prod.website-files.com/6264607e95d7be676470ea8d/6265d7d930a5c2377aedf9d4_logo_laudis_accountancy-p-500.png" alt="" />
                <img src="https://cdn.prod.website-files.com/6264607e95d7be676470ea8d/6265d7c51ad96b1cbf31b0c0_photo_2022-04-21%2020.43.09-p-500.jpeg" alt="" />
            </div>
        </div>
    );
}

export default Partners;
