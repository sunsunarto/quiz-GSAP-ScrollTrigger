import React from "react";
import "../ComponentsStyle/HeroSection.css";
function HeroSection() {
    return (
        <div className="heroSection">
            <div className="heroSectionContainer">
                <div className="heroSectionText">
                    <h1>We are</h1>
                    <p>team of like-minded people, socially active companies, media personalities, volunteers who help low-income shelters and foster carers to support homeless animals.</p>
                    <br/>
                    <h1>Our primary goal</h1>
                    <p>is to provide animals with the most necessary things - food, medicine, and urgent needs for the livelihood of shelters. We believe in our power and the power of conscious citizens who care about the environment and their health, who understand the importance of helping each other, especially our little friends. Growth begins with your care for your loved ones. Animals are one of the closest creatures to humans who remain with us throughout our lives. We all know the healing power of warmth, grace, and big loving eyes.</p>
                    <br/>
                    <p className="textPin">"Animals need to have friends. Just like humans."<br/>- James Herriot, All Creatures Great and Small</p>
                    <p>Who else if not we should support our younger brothers, especially in difficult times? Let's be friends!</p>
                </div>
                <iframe width="560" height="315" src="https://www.youtube.com/watch?v=5Wk1rp99B7o&ab_channel=ISA" frameborder="0" allowfullscreen></iframe>
            </div>
        </div>
    );
}

export default HeroSection;