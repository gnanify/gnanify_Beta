import React from "react";
import "../styles/Founder.css"; // Ensure your CSS file is correctly linked

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
                        <h4>Founder & Tech Innovator at Gnanify</h4>
                        <p>
                            At  Gnanify , we’re on a mission to  transform tech education . It’s not about one person — it’s about building something powerful together! Our platform is designed to make AI, ML, Data Science, and more  accessible  to learners worldwide.
                        </p>
                        <p>
                             Collaboration is at the heart of Gnanify. Whether you're coding, contributing ideas, or helping others learn, every contribution counts. Together, we're creating a  global community  of innovators that empowers learners and creators alike to thrive.
                        </p>
                        <p>
                            This is  our journey  to disrupt how tech education is done — and we need YOU to be a part of it. Let’s  create the future  of learning, one contribution at a time! 🌍🚀
                        </p>
                    </div>
                    <div className="founder-social">
                        <a href="https://www.linkedin.com/in/kareti-gnaneswar/" target="_blank" rel="noopener noreferrer">
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
        </section>
    );
};

export default Founder;
