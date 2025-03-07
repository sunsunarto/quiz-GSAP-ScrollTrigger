import React, { useEffect, useRef} from "react";
import gsap from "gsap";
import "../ComponentsStyle/Teams.css";


function Teams() {
    const cardRef = useRef(null);
    useEffect(() => {
        const cards = document.querySelectorAll('.team > .team'); 
        gsap.fromTo(
          cards,
          { x: 0, y: -50, opacity: 0 }, 
          {
            y: 0,
            opacity: 1,
            duration: 0.5,
            delay: 1,
            scrollTrigger: {
              trigger: ".teams",
              start: "top 40%",
              end: 'bottom bottom',
              markers: true
            },
          },
        );
    
      }, []);
      useEffect(() => {
        const handleEnter = () => {
            gsap.to(cardRef.current, {
                duration: 0.5,
                x: 5,
                y: -5,
                ease: "power2.inOut",
            });
        };
        const handleLeave = () => {
            gsap.to(cardRef.current, {
                duration: 0.5,
                x: 0,
                y: 0,
                ease: "power2.inOut",
            });
        };

        if(cardRef.current) {
            cardRef.current.addEventListener("mouseenter", handleEnter);
            cardRef.current.addEventListener("mouseleave", handleLeave);
        }

        return () => {
            if(cardRef.current) {
                cardRef.current.removeEventListener("mouseenter", handleEnter);
                cardRef.current.removeEventListener("mouseleave", handleLeave);
            }
        }
    }, []);
    return(
    <div className="teamsCon">
        <div className="teamstext">
            <h1>Our Team</h1>
            <p>consists of completely different people who are united by a common desire - to help</p>
        </div>
        <div className="teams">
            <div className="team team1">
                <img src="https://cdn.prod.website-files.com/6264607e95d7be676470ea8d/62744ee9fce7fbaf400c22f8_2.jpg" alt="Daryna Deriy" />
                <h6>Daryna Deriy</h6>
                <p>Chairman of the Board</p>
            </div>
            <div className="team team2">
                <img src="https://cdn.prod.website-files.com/6264607e95d7be676470ea8d/62744edaac91b4183ac27e10_5.jpg" alt="Polina Snisarenko-Kulchytska" />
                <h6>Polina Snisarenko-Kulchytska</h6>
                <p>Curator of the Foundation</p>
            </div>
            <div className="team team3">
                <img src="https://cdn.prod.website-files.com/6264607e95d7be676470ea8d/62744ec97586a996f48f7a85_1.jpg" alt="" />
                <h6>Bohdan Kulchytsky</h6>
                <p>Executive Manager</p>
            </div>
            <div className="team team4">
                <img src="https://cdn.prod.website-files.com/6264607e95d7be676470ea8d/62744eae22e10d8a15f909ef_9.jpg" alt="" />
                <h6>Mykhaylo Deriy</h6>
                <p>Operation Manager</p>
            </div>
            <div className="team team5">
                <img src="https://cdn.prod.website-files.com/6264607e95d7be676470ea8d/62744e8e05f6c22bac85252a_7.jpg" alt="" />
                <h6>Ksenia Nikishina</h6>
                <p>Office manager</p>
            </div>
            <div className="team team6">
                <img src="https://cdn.prod.website-files.com/6264607e95d7be676470ea8d/62744f0eb7cd3462ef475ebf_6.jpg" alt="" />
                <h6>Anna Andriychuk</h6>
                <p>SMM-manager</p>
            </div>
            <div className="team team7">
                <img src="https://cdn.prod.website-files.com/6264607e95d7be676470ea8d/62744e6761e425c6956af3a5_3.jpg" alt="" />
                <h6>Anastasia Kovalchuk</h6>
                <p>Director</p>
            </div>
            <div className="team team8">
                <img src="https://cdn.prod.website-files.com/6264607e95d7be676470ea8d/626ae0bcd92bf48017c14083_basil-square.png" alt="" />
                <h6>Basil Gloo</h6>
                <p>Web Developer</p>
            </div>
            <div className="team team9">
                <img src="https://cdn.prod.website-files.com/6264607e95d7be676470ea8d/626ae01da2a805d176b1606b_%D0%AF%D0%BA%D0%BE%D0%B1%D1%87%D1%83%D0%BA.jpg" alt="" />
                <h6>Lina Yakobchuk</h6>
                <p>Designer</p>
            </div>
            <div className="team team10">
                <img src="https://cdn.prod.website-files.com/6264607e95d7be676470ea8d/627fc796cf3602b53a7512cf_4.jpg" alt="" />
                <h6>Anastasia Yevchenko</h6>
                <p>Translator</p>
            </div>
            <div className="team team11">
                <img src="https://cdn.prod.website-files.com/62640d8cb86529032eccb9d1/6265332e63b917130ca8d702_isa-logo-dog-clean.svg" alt="" />
                <h6>Office Managerk</h6>
                <p>open vacancy</p>
            </div>
            <div className="team team12">
                <img src="https://cdn.prod.website-files.com/62640d8cb86529032eccb9d1/6264275680ed1a3a363d12d8_isa-logo-cat-clean.svg" alt="" />
                <h6>SEO specialistk</h6>
                <p>open vacancy</p>
            </div>
        </div>
    </div>
    )
}

export default Teams;
