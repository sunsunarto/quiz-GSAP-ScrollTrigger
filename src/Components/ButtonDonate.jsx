import {useEffect, useRef} from "react";
import {gsap} from 'gsap';
import "../ComponentsStyle/ButtonDonate.css";
function ButtonDonate() {
    
    const buttonConRef = useRef(null);
    const buttonRef = useRef(null)

    useEffect(() => { //button donate
        gsap.fromTo(
            buttonConRef.current,
            { x: 0, y: -100, opacity: 0 }, 
            {
              y: 0, 
              duration: 1, 
              opacity: 1,
              ease: "power1.inOut",
              position: "fixed",
            }
        )
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
    return (
        <div className="buttonContainer" ref={buttonConRef}>
            <div className="button" ref={buttonRef}>
                <h1>Donate</h1>
            </div>
        </div>
    );
}

export default ButtonDonate;