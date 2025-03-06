import {useEffect, useRef} from "react";
import '../ComponentsStyle/Header.css';
import {gsap} from 'gsap';
import {ScrollTrigger} from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
function Header() {

    const buttonRef = useRef(null);
    const image1Ref = useRef(null);
    const image2Ref = useRef(null);
    const textRef = useRef(null);

    useEffect(() => { //button donate
        const handleEnter = () => {
            gsap.to(buttonRef.current, {
                duration: 0.5,
                x: 5,
                y: -5,
                ease: "power2.inOut",
            });
        };

        const handleLeave = () => {
            gsap.to(buttonRef.current, {
                duration: 0.5,
                x: 0,
                y: 0,
                ease: "power2.inOut",
            });
        };

        if(buttonRef.current) {
            buttonRef.current.addEventListener("mouseenter", handleEnter);
            buttonRef.current.addEventListener("mouseleave", handleLeave);
        }

        return () => {
            if(buttonRef.current) {
                buttonRef.current.removeEventListener("mouseenter", handleEnter);
                buttonRef.current.removeEventListener("mouseleave", handleLeave);
            }
        }
    }, []);

    useEffect(() => { //slideshow
        const images = [image1Ref.current, image2Ref.current];
        const tl = gsap.timeline({repeat: -1});
        tl.set(images, {y: -100, opacity: 0}) 
          .to(image1Ref.current, {y: 0, opacity: 1, duration: 1,height: 100})
          .to(image1Ref.current, {y: 100, opacity: 0, duration: 1, delay: 1, height: 0}, )
          .to(image2Ref.current, {y: 0, opacity: 1, duration: 1,height: 100}, '-=0.5') 
          .to(image2Ref.current, {y: 100, opacity: 0, duration: 1, delay: 1, height: 0}, );
    }, []);
    useEffect(() => {
        gsap.fromTo(
          textRef.current,
          { x: 0, y: 0 }, 
          {
            x: 400, 
            duration: 2, 
            delay: 1,
            ease: "power2.inOut", 
            scrollTrigger: { 
              trigger: ".text", 
              start: "bottom top", 
              end: "bottom bottom", 
              pin: true, 
              scrub: 5, 
              markers: true
            },
          }
        );
      }, []);
    return (
        <div className="mainHeader">
            <div className="buttonContainer">
                <div className="button" ref={buttonRef}>
                    <h1>Donate</h1>
                </div>
            </div>
            <div className="text">
                <div className="slideShow" style={{position: "relative", width: "150px", height: "150px"}}>
                    <div className="slide slide1" ref={image1Ref}>
                        <img src="https://cdn.prod.website-files.com/62640d8cb86529032eccb9d1/6265332e63b917130ca8d702_isa-logo-dog-clean.svg" alt="Slide 1" style={{height: 150, width: 150, position: "absolute", top: "0", left: "0"}}/>
                    </div>
                    <div className="slide slide2" ref={image2Ref}>
                        <img src="https://cdn.prod.website-files.com/62640d8cb86529032eccb9d1/6264275680ed1a3a363d12d8_isa-logo-cat-clean.svg" alt="Slide 2" style={{height: 150, width: 150, position: "absolute", top: "0", left: "0"}}/>
                    </div>
                </div>
                <div>
                <h1 ref={textRef}>Innovative<br/>Solutions<br/>for Animals</h1>
                </div>
            </div>
            <div className="organization">
                <br/>
                <p>charity organization</p>
            </div>
        </div>
    );
}

export default Header;
