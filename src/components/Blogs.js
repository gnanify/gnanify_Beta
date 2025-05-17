import React, { useState, useEffect } from "react";
import "../styles/Blogs.css"; // Import the Blogs.css file

const Blogs = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false); // Simulating loading state (set to false for "Coming Soon")
  }, []);

  if (loading) {
    return <div className="loading">Loading blog data...</div>;
  }

  return (
    <div className="blogs-layout">
      <aside className="sidebar">
        <h3>Blogs</h3>
        <ul>
          <li className="active">Coming Soon</li>
        </ul>
      </aside>

      <main className="blog-content">
        <h2>Coming Soon</h2>
        <div className="coming-soon-message">
          <p>We're working hard to bring you the blogs soon. Stay tuned!</p>
        </div>
      </main>
    </div>
  );
};

export default Blogs;
