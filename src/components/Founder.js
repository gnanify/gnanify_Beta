import React from "react";
import "../styles/Founder.css";

const Founder = () => {
    return (
        <section className="founder-section">
            <div className="founder-container">
                <div className="founder-card">
                    <img
                        src="https://media.licdn.com/dms/image/v2/D5603AQEmZc3ZNQbwAg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1726319583959?e=1752710400&v=beta&t=5OQJ10rClK4VTCAWXNiEqQXop-lC-XdvgdAPRWvLQU0"
                        alt="Founder"
                        className="founder-img"
                    />
                    <div className="founder-info">
                        <h2>Gnaneswar Kareti</h2>
                        <h4>Founder, CEO & Lead Educator</h4>
                        <p>
                            Passionate about revolutionizing education through AI and ML, I founded
                            Gnanify to provide top-quality learning resources In Concepts reated to AI, Ml, Data Science.
                        </p>
                        <p>
                            With expertise in AI, ML, and Data Science, my vision is to create an
                            engaging and interactive platform for learners worldwide.
                        </p>
                        <div className="founder-social">
                            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-linkedin"></i>
                            </a>
                            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-twitter"></i>
                            </a>
                            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-github"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Founder;
