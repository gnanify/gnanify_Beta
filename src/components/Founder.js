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
    <h4>Founder & Visionary Behind Gnanify</h4>
    <p>
        I'm on a mission to **revolutionize tech learning**! As the founder of **Gnanify**, I created a platform that’s all about **breaking down the barriers** in AI, ML, Data Science, and beyond.
    </p>
    <p>
        I’m not here to teach — I’m here to **build**. My goal? To create a **global hub** where learners and innovators can come together, collaborate, and **push the limits** of what’s possible. As the **GitHub Repo Owner**, I’m constantly working to evolve Gnanify into a space where tech dreams come true.
    </p>
    <p>
        Join me on this journey as we **disrupt** the traditional learning methods and redefine what it means to be a creator in the world of **AI, ML**, and **Data Science**! 🚀
    </p>
</div>

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
