import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import "../ComponentsStyle/Teams.css";

function Teams() {
    const cardRef = useRef(null);

    useEffect(() => {
        const elements = cardRef.current.querySelectorAll(".team");

        elements.forEach((element) => {
            gsap.fromTo(
                element,
                { y: 50, opacity: 0 },
                {
                    y: 0,
                    duration: 1,
                    opacity: 1,
                    ease: "power1.inOut",
                    scrollTrigger: {
                        trigger: element,
                        start: "top 90%",
                        end: "bottom 60%",
                        scrub: true,
                    },
                }
            );
        });
    }, []);

    return (
        <div className="teamsCon">
            <div className="teamstext">
                <h1>Our Team</h1>
                <p>consists of completely different people who are united by a common desire - to help</p>
            </div>
            <div className="teamCon">
                <div className="teams" ref={cardRef}>
                    <div className="team">
                        <div className="team1 info">
                            <img src="https://cdn.prod.website-files.com/6264607e95d7be676470ea8d/62744ee9fce7fbaf400c22f8_2.jpg" alt="Daryna Deriy" />
                            <h6>Daryna Deriy</h6>
                            <p>Chairman of the Board</p>
                        </div>
                    </div>
                    <div className="team">
                        <div className="team2 info">
                            <img src="https://cdn.prod.website-files.com/6264607e95d7be676470ea8d/62744edaac91b4183ac27e10_5.jpg" alt="Polina Snisarenko-Kulchytska" />
                            <h6>Polina Snisarenko-Kulchytska</h6>
                            <p>Curator of the Foundation</p>
                        </div>
                    </div>
                    <div className="team team3">
                        <div className="team3 info">
                            <img src="https://cdn.prod.website-files.com/6264607e95d7be676470ea8d/62744ec97586a996f48f7a85_1.jpg" alt="" />
                            <h6>Bohdan Kulchytsky</h6>
                            <p>Executive Manager</p>
                        </div>
                    </div>
                    <div className="team">
                        <div className="team4 info">
                            <img src="https://cdn.prod.website-files.com/6264607e95d7be676470ea8d/62744eae22e10d8a15f909ef_9.jpg" alt="" />
                            <h6>Mykhaylo Deriy</h6>
                            <p>Operation Manager</p>
                        </div>
                    </div>
                    <div className="team">
                        <div className="team5 info">
                            <img src="https://cdn.prod.website-files.com/6264607e95d7be676470ea8d/62744e8e05f6c22bac85252a_7.jpg" alt="" />
                            <h6>Ksenia Nikishina</h6>
                            <p>Office manager</p>
                        </div>
                    </div>
                    <div className="team">
                        <div className="team6 info">
                            <img src="https://cdn.prod.website-files.com/6264607e95d7be676470ea8d/62744f0eb7cd3462ef475ebf_6.jpg" alt="" />
                            <h6>Anna Andriychuk</h6>
                            <p>SMM-manager</p>
                        </div>
                    </div>
                    <div className="team">
                        <div className="team7 info">
                            <img src="https://cdn.prod.website-files.com/6264607e95d7be676470ea8d/62744e6761e425c6956af3a5_3.jpg" alt="" />
                            <h6>Anastasia Kovalchuk</h6>
                            <p>Director</p>
                        </div>
                    </div>
                    <div className="team">
                        <div className="team8 info">
                            <img src="https://cdn.prod.website-files.com/6264607e95d7be676470ea8d/626ae0bcd92bf48017c14083_basil-square.png" alt="" />
                            <h6>Basil Gloo</h6>
                            <p>Web Developer</p>
                        </div>
                    </div>
                    <div className="team">
                        <div className="team9 info">
                            <img src="https://cdn.prod.website-files.com/6264607e95d7be676470ea8d/626ae01da2a805d176b1606b_%D0%AF%D0%BA%D0%BE%D0%B1%D1%87%D1%83%D0%BA.jpg" alt="" />
                            <h6>Lina Yakobchuk</h6>
                            <p>Designer</p>
                        </div>
                    </div>
                    <div className="team">
                        <div className="team10 info">
                            <img src="https://cdn.prod.website-files.com/6264607e95d7be676470ea8d/627fc796cf3602b53a7512cf_4.jpg" alt="" />
                            <h6>Anastasia Yevchenko</h6>
                            <p>Translator</p>
                        </div>
                    </div>
                    <div className="team">
                        <div className="team11 info">
                            <img src="https://cdn.prod.website-files.com/62640d8cb86529032eccb9d1/6265332e63b917130ca8d702_isa-logo-dog-clean.svg" alt="" />
                            <h6>Office Manager</h6>
                            <p>open vacancy</p>
                        </div>
                    </div>
                    <div className="team">
                        <div className="team12 info">
                            <img src="https://cdn.prod.website-files.com/62640d8cb86529032eccb9d1/6264275680ed1a3a363d12d8_isa-logo-cat-clean.svg" alt="" />
                            <h6>SEO specialist</h6>
                            <p>open vacancy</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Teams;
