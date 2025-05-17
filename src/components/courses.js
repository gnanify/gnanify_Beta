import React, { useState, useEffect } from "react";
import "../styles/Courses.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

const Courses = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading delay (you can later fetch real data)
    setTimeout(() => setLoading(false), 1000);
  }, []);

  if (loading) {
    return (
      <div className="loading">
        🎓 Calibrating neural networks... Loading your knowledge universe!
      </div>
    );
  }

  return (
    <div className="course-layout">
      <aside className="sidebar">
        <h3>Courses</h3>
        <ul>
          <li className="active">🔥 Mega AI Drops Incoming</li>
        </ul>
      </aside>

      <main className="course-content">
        <h2>🚧 Content Under Construction</h2>
        <div className="coming-soon-message">
          <p>
            We’re in the lab training models, brewing data potions, and
            crafting mind-blowing courses just for you. 🧠⚙️
            <br />
            Stay tuned — you’re about to level up like never before. 🚀
          </p>
        </div>
      </main>
    </div>
  );
};

export default Courses;
