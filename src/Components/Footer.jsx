import { useEffect, useRef } from "react";
import gsap from "gsap";
import "../ComponentsStyle/Footer.css";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Footer() {
    const picRef = useRef(null);
    const emailRef = useRef(null);
    const icon1ref = useRef(null);
    const icon2ref = useRef(null);
    const icon3ref = useRef(null);
    const icon4ref = useRef(null);
    const icon5ref = useRef(null);

    useEffect(() => { // picture animation
        gsap.fromTo(picRef.current, 
            { y: -100, opacity: 0 },
            {
                y: 0,
                duration: 2,
                opacity: 1,
                ease: "power1.inOut",
                scrollTrigger: {
                    trigger: picRef.current,
                    start: "top 100%",
                    end: "bottom bottom",
                    scrub: 1,
                },
            }
        );
    }, []);

    useEffect(() => { // icons animation
        const icons = [emailRef.current, icon1ref.current, icon2ref.current, icon3ref.current, icon4ref.current, icon5ref.current];

        icons.forEach((icon) => {
            const handleEnter = () => {
                gsap.to(icon, {
                    duration: 0.5,
                    scale: 0.8,
                    ease: "power2.inOut",
                });
            };
            const handleLeave = () => {
                gsap.to(icon, {
                    duration: 0.5,
                    scale: 1,
                    ease: "power2.inOut",
                });
            };

            if (icon) {
                icon.addEventListener("mouseenter", handleEnter);
                icon.addEventListener("mouseleave", handleLeave);
            }

            return () => {
                if (icon) {
                    icon.removeEventListener("mouseenter", handleEnter);
                    icon.removeEventListener("mouseleave", handleLeave);
                }
            };
        });
    }, []);

    return (
        <div className="footerCon">
            <div className="textAndIcons">
                <h1>Contact us</h1>
                <p>Kyiv, Ukraine</p>
                <p ref={emailRef}>mail@isa.co.ua</p>
                <div className="icons">
                    <img ref={icon1ref} src="https://cdn.prod.website-files.com/62640d8cb86529032eccb9d1/6274433d06989d76edcff015_9055867_youtube_bxl.svg" alt="youtube" />
                    <img ref={icon2ref} src="https://cdn.prod.website-files.com/62640d8cb86529032eccb9d1/6274449bf840c377311f2e08_9055851_instagram_bxl.svg" alt="instagram" />
                    <img ref={icon3ref} src="https://cdn.prod.website-files.com/62640d8cb86529032eccb9d1/627443d78de17d2c59c8352c_9055795_facebook_bxl.svg" alt="facebook" />
                    <img ref={icon4ref} src="https://cdn.prod.website-files.com/62640d8cb86529032eccb9d1/6274440c6a0ab7631dce0cd1_9055888_patreon_bxl.svg" alt="patreon" />
                    <img ref={icon5ref} src="https://cdn.prod.website-files.com/62640d8cb86529032eccb9d1/627443f9ac91b492e4c220ba_9055800_telegram_bxl.svg" alt="telegram" />
                </div>
            </div>
            <div className="footerImg" ref={picRef}>
                <img src="https://cdn.prod.website-files.com/62640d8cb86529032eccb9d1/62647f9fbe07235ba9b28d67_star-white-with-animals.svg" alt="" />
            </div>
        </div>
    );
}

export default Footer;