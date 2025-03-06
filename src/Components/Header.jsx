import {useEffect, useRef} from "react";
import '../ComponentsStyle/Header.css';
import {gsap} from 'gsap';
import {ScrollTrigger} from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
function Header() {

    const image1Ref = useRef(null);
    const image2Ref = useRef(null);
    const textRef = useRef(null);
    const textIconRef = useRef(null);
    const iconMediaRef = useRef(null);

    useEffect(() => { //slideshow
        const images = [image1Ref.current, image2Ref.current];
        const tl = gsap.timeline({repeat: -1});
        tl.set(images, {y: -100, opacity: 0}) 
          .to(image1Ref.current, {y: 0, opacity: 1, duration: 1,height: 100})
          .to(image1Ref.current, {y: 100, opacity: 0, duration: 1, delay: 1, height: 0}, )
          .to(image2Ref.current, {y: 0, opacity: 1, duration: 1,height: 100}, '-=0.5') 
          .to(image2Ref.current, {y: 100, opacity: 0, duration: 1, delay: 1, height: 0}, );
    }, []);

    useEffect(() => { //text h1
        gsap.fromTo(
            textRef.current,
            { x: 100, y: 0, opacity: 0 }, 
            {
              x: 0, 
              duration: 1, 
              opacity: 1,
              ease: "power1.inOut"
            }
        )
        gsap.fromTo(
          textRef.current,
          { x: 0, y: 0 }, 
          {
            x: 400, 
            duration: 1, 
            delay: 1,
            ease: "power2.inOut", 
            scrollTrigger: { 
              trigger: ".mainHeader", 
              start: "bottom top", 
              end: "bottom bottom", 
              pin: true, 
              scrub: 5, 
              markers: true
            },
          }
        );
      }, []);

      useEffect(() => { //text p
        gsap.fromTo(
            textIconRef.current,
            { x: 0, y: 200 }, 
            {
              y: 0, 
              duration: 1, 
              ease: "power2.inOut", 
            }
        )
        gsap.fromTo(
          textIconRef.current,
          { x: 0, y: 0 }, 
          {
            y: 400, 
            duration: 1, 
            delay: 1,
            ease: "power2.inOut", 
            scrollTrigger: { 
              trigger: ".mainHeader", 
              start: "bottom top", 
              end: "bottom bottom", 
              pin: true, 
              scrub: 5, 
              markers: true
            },
          }
        );
      }, []);

      useEffect(() => { //icon
        gsap.fromTo(
            iconMediaRef.current,
            { x: 0, y: 200, opacity: 0 }, 
            {
              y: 0, 
              duration: 1,
              opacity: 1, 
              ease: "power2.inOut", 
            }
        )
        gsap.fromTo(
          iconMediaRef.current,
          { x: 0, y: 0, opacity: 1 }, 
          {
            y: 200, 
            duration: 1,
            opacity: 0, 
            delay: 1,
            ease: "power2.inOut", 
            scrollTrigger: { 
              trigger: ".mainHeader", 
              start: "bottom top",
              end: "bottom bottom", 
              scrub: 5, 
              markers: true
            },
          }
        );
      }, []);
    return (
        <div className="mainHeader">
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
            <div className="organization" ref={textIconRef}>
                <br/>
                <p>charity organization</p>
            </div>
            <div className="iconMedia" ref={iconMediaRef}>
                <img src="https://cdn.prod.website-files.com/62640d8cb86529032eccb9d1/6274433d06989d76edcff015_9055867_youtube_bxl.svg" alt="youtube" />
                <img src="https://cdn.prod.website-files.com/62640d8cb86529032eccb9d1/6274449bf840c377311f2e08_9055851_instagram_bxl.svg" alt="instagram" />
                <img src="https://cdn.prod.website-files.com/62640d8cb86529032eccb9d1/627443d78de17d2c59c8352c_9055795_facebook_bxl.svg" alt="facebook" />
                <img src="https://cdn.prod.website-files.com/62640d8cb86529032eccb9d1/6274440c6a0ab7631dce0cd1_9055888_patreon_bxl.svg" alt="patreon" />
                <img src="https://cdn.prod.website-files.com/62640d8cb86529032eccb9d1/627443f9ac91b492e4c220ba_9055800_telegram_bxl.svg" alt="telegram" />
            </div>
        </div>
    );
}

export default Header;
