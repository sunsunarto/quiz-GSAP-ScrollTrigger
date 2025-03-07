import {useEffect, useRef} from "react";
import {gsap} from 'gsap';
import "../ComponentsStyle/Project.css";
import {ScrollTrigger} from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
function Project() {

    const button1Ref = useRef(null);
    const button2Ref = useRef(null);
    const button3Ref = useRef(null);
    const cardScroll1 = useRef(null)
    const cardScroll2 = useRef(null)
    const cardScroll3 = useRef(null)

    useEffect(() => {
    const targets = [cardScroll1.current, cardScroll2.current, cardScroll3.current];

    gsap.fromTo(
      targets,
      { x: -50, y: 0, opacity: 0 }, 
      {
        x: 0,
        opacity: 1,
        duration: 2,
        delay: 1,
        stagger: 1,
        scrollTrigger: {
          trigger: ".project",
          start: "top 40%",
          end: 'bottom bottom',
          pin: true,
          scrub: 1,
        },
      }
    );
  }, []);
    useEffect(() => { //project1
        
        const handleEnter1 = () => {
            gsap.to(button1Ref.current, {
                duration: 0.5,
                x: 10,
                y: -10,
                ease: "power2.inOut"
            });
        };
    
        const handleLeave1 = () => {
            gsap.to(button1Ref.current, {
                duration: 0.5,
                x: 0,
                y: 0,
                ease: "power2.inOut"
            });
        };
    
        if (button1Ref.current) {
            button1Ref.current.addEventListener("mouseenter", handleEnter1);
            button1Ref.current.addEventListener("mouseleave", handleLeave1);
        }
    
        return () => {
            if (button1Ref.current) {
                button1Ref.current.removeEventListener("mouseenter", handleEnter1);
                button1Ref.current.removeEventListener("mouseleave", handleLeave1);
            }
        };
    }, []);
    

    useEffect(() => { //project2
        const handleEnter2 = () => {
            gsap.to(button2Ref.current,{
                duration: 0.5,
                x: 10,
                y: -10,
                ease: "power2.inOut",
            });
        };

        const handleLeave2 = () => {
            gsap.to(button2Ref.current, {
                duration: 0.5,
                x: 0,
                y: 0,
                ease: "power2.inOut",
            });
        };

        if(button2Ref.current) {
            button2Ref.current.addEventListener("mouseenter", handleEnter2);
            button2Ref.current.addEventListener("mouseleave", handleLeave2);
        }

        return () => {
            if(button2Ref.current) {
                button2Ref.current.removeEventListener("mouseenter", handleEnter2);
                button2Ref.current.removeEventListener("mouseleave", handleLeave2);
            }
        }
    }, []);

    useEffect(() => { //project3
        const handleEnter3 = () => {
            gsap.to(button3Ref.current,{
                duration: 0.5,
                x: 10,
                y: -10,
                ease: "power2.inOut",
            });
        };

        const handleLeave3 = () => {
            gsap.to(button3Ref.current, {
                duration: 0.5,
                x: 0,
                y: 0,
                ease: "power2.inOut",
            });
        };

        if(button3Ref.current) {
            button3Ref.current.addEventListener("mouseenter", handleEnter3);
            button3Ref.current.addEventListener("mouseleave", handleLeave3);
        }

        return () => {
            if(button3Ref.current) {
                button3Ref.current.removeEventListener("mouseenter", handleEnter3);
                button3Ref.current.removeEventListener("mouseleave", handleLeave3);
            }
        }
    }, []);
    return (
        <div className="projectCon">
            <div className="projectContainer">
                <div className="projectText">
                    <h1>Our Project</h1>
                    <p>are very different in terms of priority, scale and complexity of implementation</p>    
                </div>
            </div>
            <div className="project project1" ref={cardScroll1}>
                <div className="border" ref={button1Ref}>
                <h1>Emergency Aid. WAR 2022.</h1>
                <p>providing food and medicine to the shelters and animals whitch lost homes and families due to the war</p>
                </div>
            </div>
            <div className="project project2" ref={cardScroll2}>
                <div className="border" ref={button2Ref}>
                <h1>Non-commercial feed line</h1>
                <p>constuction of industrial production base where food for shelters will be produced on free basis</p>
                </div>
            </div>
            <div className="project project3" ref={cardScroll3}>
                <div className="border" ref={button3Ref}>
                <h1>Education and Control</h1>
                <p>lectures on communication, organisation an coordination of processes, control over the use of aid</p>
                </div>
            </div>
        </div>
    );
}

export default Project;
