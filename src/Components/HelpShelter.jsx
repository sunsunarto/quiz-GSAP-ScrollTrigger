import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import '../ComponentsStyle/HelpShelter.css';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger)

function HelpShelter() {
  const buttonRef = useRef(null)
  const buttoHelpRef = useRef(null)
  const shelterName = [
    "Shelter of Victoria Bulbyna",
    "City of faithful hearts",
    "Shelter of Natalia Tymoshenko",
    "Shelter of Jeanne Sass",
    "Shelter of Victoria Bondarenko",
    "Sterilization center",
    "Zoo chance",
    "Save lives",
    "City Center for the Treatment of Animals",
    "Society for Protection of Animals in Sumy",
    "The right to life",
    "4 paws",
    "The kingdom of cats",
    "Zvir",
    "Mercy",
    "Happy dog",
    "Give me a paw, friend",
    "Friend",
    "Hope",
    "We are for the right to life",
    "Planeta",
    "Second Life",
    "Happy shore",
    "Retrieverteam",
    "Shelter of Irina Dobrolyubova",
    "Matilda",
    "Life",
    "Second chance",
    "SOS",
    "Best friends",
  ];


  useEffect(() => {
    const handleEnter = () => {
      gsap.to(buttonRef.current, {
        duration: 0.5,
        x: 10,
        ease: 'power2.inOut',
      });
    };

    const handleLeave = () => {
      gsap.to(buttonRef.current, {
        duration: 0.5,
        x: 0,
        ease: 'power2.inOut',
      });
    };

    if (buttonRef.current) {
      buttonRef.current.addEventListener('mouseenter', handleEnter);
      buttonRef.current.addEventListener('mouseleave', handleLeave);
    }

    return () => {
      if (buttonRef.current) {
        buttonRef.current.removeEventListener('mouseenter', handleEnter);
        buttonRef.current.removeEventListener('mouseleave', handleLeave);
      }
    }
  }, [buttonRef])


  useEffect(() => {
    const cardTexts = document.querySelectorAll('.shelter-card-text'); // Select all card texts

    cardTexts.forEach(card => {
      const handleEnter = () => {
        gsap.to(card, {
          duration: 0.5,
          x: 10,
          y: -10,
          ease: 'power2.inOut',
        });
      };

      const handleLeave = () => {
        gsap.to(card, {
          duration: 0.5,
          x: 0,
          y: 0,
          ease: 'power2.inOut',
        });
      };

      card.addEventListener('mouseenter', handleEnter);
      card.addEventListener('mouseleave', handleLeave);

      return () => {
        card.removeEventListener('mouseenter', handleEnter);
        card.removeEventListener('mouseleave', handleLeave);
      };
    });
  }, []);


  useEffect(() => {
    const cards = document.querySelectorAll('.shelterCon > .shelterCard'); 
    gsap.fromTo(
      cards,
      { x: 0, y: -50, opacity: 0 }, 
      {
        y: 0,
        opacity: 1,
        duration: 2,
        delay: 1,
        stagger: 1,
        scrollTrigger: {
          trigger: ".helpShelter",
          start: "top 40%",
          end: 'bottom bottom',
          scrub: 1,
        },
      },
    );

  }, []);

  useEffect(() => {
    gsap.fromTo(
        buttoHelpRef.current,
        { x: -50, y: 0, opacity: 0 }, 
        {
          x: 0,
          opacity: 1,
          duration: 2,
          delay: 1,
          stagger: 1,
          scrollTrigger: {
            trigger: ".buttonHelp",
            start: "top 90%",
            end: 'bottom bottom',
            pin: true,
            scrub: 1,
          },
        }
      );
    }, );

  return (
    <div className="helpShelter">
      <div className="shelterText">
        <h2>We Want To Help</h2>
        <p>homeless packs, volunteers, guardians, overstayers, shelter, and other organisations.</p>
        <br/>
      </div>
      <div className='sheltercenter'>
      <div className="shelterCon">
        {shelterName.map((shelter, index) => (
          <div key={index} className="shelterCard">
            <div className="shelterCardText">
              <p>{shelter}</p>
            </div>
          </div>
        ))} 
      </div>
      </div>
      <div className='buttonHelp' ref={buttoHelpRef}>
        <button ref={buttonRef}>apply for help <img style={{width: '35px', height: '20px', transform: 'rotate(180deg)'}} src="https://cdn.prod.website-files.com/62640d8cb86529032eccb9d1/6273a272fe3407579aa3d6c9_PngItem_344959.png" alt="" /></button>
      </div>
    </div>
  );
}

export default HelpShelter;