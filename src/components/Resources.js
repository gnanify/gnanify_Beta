import React, { useState, useEffect } from "react";
import "../styles/Resources.css"; // Import the CSS for styling

const Resources = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulating loading state (you can add actual fetch later)
    setTimeout(() => {
      setLoading(false);
    }, 1500); // Optional: Adds a short delay for better UX
  }, []);

  if (loading) {
    return <div className="loading">💾 Fetching resources from the cloud dimension...</div>;
  }

  return (
    <div className="coming-soon-container">
      <h1>🚀 Incoming Transmission: Resources Detected</h1>
      <p>
        Our AI ninjas are cooking up some top-secret PDFs, cheat sheets, and brain-blasting guides. 🤓
        <br />Grab a coffee, meditate with your dataset, and check back soon. 🔥
      </p>
    </div>
  );
};

export default Resources;
