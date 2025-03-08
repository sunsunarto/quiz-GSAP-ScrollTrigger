import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import "../ComponentsStyle/SupportUs.css";

function SupportUs() {
    useEffect(() => {
        const peoples = document.querySelectorAll(".peoples");
        peoples.forEach((person) => {
            gsap.fromTo(
                person,
                { y: 50, opacity: 0 },
                {
                    y: 0,
                    duration: 1,
                    opacity: 1,
                    ease: "power1.inOut",
                    scrollTrigger: {
                        trigger: person,
                        start: "top 90%",
                        end: "bottom 60%",
                    },
                }
            );
        });
    }, []);

    return (
        <div className="supportUsContainer">
            <div className="supportUsText">
                <h1>Socially active citizens</h1>
                <p>support us</p>
            </div>
            <div className="supportUsCenter">
            <div className="supportUsinfo">
                <div className="peoples">
                    <img src="https://cdn.prod.website-files.com/6264607e95d7be676470ea8d/628398012a964488bb09078d_13.jpg" alt="" />
                    <h6>Oleksiy Tritenko</h6>
                    <p>theater and film actor</p>
                </div>
                <div className="peoples">
                    <img src="https://cdn.prod.website-files.com/6264607e95d7be676470ea8d/628397b3f06d2066cfe8e9a2_14.jpg" alt="" />
                    <h6>Stanislav Boklan</h6>
                    <p>People's Artist of Ukraine</p>
                </div>
                <div className="peoples">
                    <img src="https://cdn.prod.website-files.com/6264607e95d7be676470ea8d/627fcdfcb2137dcf7db53e7f_12.jpg" alt="" />
                    <h6>Alexander Rudinsky</h6>
                    <p>theater and film actor</p>
                </div>
                <div className="peoples">
                    <img src="https://cdn.prod.website-files.com/6264607e95d7be676470ea8d/627fcdd72d729d8ecacf6de7_11.jpg" alt="" />
                    <h6>Oksana Zhdanova</h6>
                    <p>theater and film actress</p>
                </div>
                <div className="peoples">
                    <img src="https://cdn.prod.website-files.com/6264607e95d7be676470ea8d/627fcdaedc0f8eea17c92429_10.jpg" alt="" />
                    <h6>Natalka Denisenko</h6>
                    <p>theater and film actress</p>
                </div>
                <div className="peoples">
                    <img src="https://cdn.prod.website-files.com/6264607e95d7be676470ea8d/627fcd87d51b9051dfcbf349_09.jpg" alt="" />
                    <h6>Maksym Samchyk</h6>
                    <p>theater and film actor</p>
                </div>
                <div className="peoples">
                    <img src="https://cdn.prod.website-files.com/6264607e95d7be676470ea8d/627fcd5ca9508410b3a0d824_08.jpg" alt="" />
                    <h6>Kateryna Vyshneva</h6>
                    <p>theater and film actress</p>
                </div>
                <div className="peoples">
                    <img src="https://cdn.prod.website-files.com/6264607e95d7be676470ea8d/627fcd3288758547e6ee0e22_07.jpg" alt="" />
                    <h6>Irma Vitovska</h6>
                    <p>Honored Actress of Ukraine</p>
                </div>
                <div className="peoples">
                    <img src="https://cdn.prod.website-files.com/6264607e95d7be676470ea8d/627fcd1790c298c49bc7c436_06.jpg" alt="" />
                    <h6>Igor Portyanko</h6>
                    <p>actor of theater and cinema</p>
                </div>
                <div className="peoples">
                    <img src="https://cdn.prod.website-files.com/6264607e95d7be676470ea8d/627fccf0fc672a5dcfa87ee9_05.jpg" alt="" />
                    <h6>Dmytro Surzhikov</h6>
                    <p>Honored Artist of Ukraine</p>
                </div>
                <div className="peoples">
                    <img src="https://cdn.prod.website-files.com/6264607e95d7be676470ea8d/627fccc57c3cb5177369015e_04.jpg" alt="" />
                    <h6>Daria Barihashvili</h6>    
                    <p>theater and film actress</p>
                </div>
                <div className="peoples">
                    <img src="https://cdn.prod.website-files.com/6264607e95d7be676470ea8d/627fcc9bc50d7acc036982a9_03.jpg" alt="" />
                    <h6>Vera Kobzar</h6>
                    <p>theater and film actress</p>
                </div>
                <div className="peoples">
                    <img src="https://cdn.prod.website-files.com/6264607e95d7be676470ea8d/627fcc7339e6f5389ed03013_02.jpg" alt="" />
                    <h6>Andriy Fedynchyk</h6>
                    <p>theater and film actor</p>
                </div>
                <div className="peoples">
                    <img src="https://cdn.prod.website-files.com/6264607e95d7be676470ea8d/627fcc4b694dfd4d65a13230_01.jpg" alt="" />
                    <h6>Anastasia Nesterenko</h6>
                    <p>theater and film actress</p>
                </div>
            </div>
            </div>
        </div>
    );
}

export default SupportUs;
