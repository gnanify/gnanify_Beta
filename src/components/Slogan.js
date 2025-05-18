import React, { useEffect, useState } from "react";
import "../styles/Slogan.css";

// Gnanify Slogans
const gnanifySlogans = [
  "Learnify, Simplify, Gnanify!",
  "Techify, Amplify, Gnanify!",
  "Clarify, Identify, Gnanify!",
  "Educify, Intensify, Gnanify!",
  "Motivate, Simplify, Gnanify!",
  "Simplify, Beautify, Gnanify!",
  "Identify, Amplify, Gnanify!",
  "Techify, Clarify, Gnanify!",
  "Verify, Magnify, Gnanify!",
  "Simplify, Verify, Gnanify!",
  "Educify, Modify, Gnanify!",
  "Clarify, Techify, Gnanify!",
  "Motivate, Electrify, Gnanify!",
  "Simplify, Unify, Gnanify!",
  "Amplify, Intensify, Gnanify!",
  "Beautify, Simplify, Gnanify!",
  "Identify, Simplify, Gnanify!",
  "Magnify, Simplify, Gnanify!",
  "Techify, Verify, Simplify!",
  "Simplify, Certify, Gnanify!",
  "Clarify, Testify, Gnanify!",
  "Motivate, Electrify, Simplify!",
  "Amplify, Verify, Gnanify!",
  "Techify, Amplify, Beautify!",
  "Simplify, Identify, Gnanify!",
  "Educify, Testify, Gnanify!",
  "Verify, Modify, Gnanify!",
  "Motivate, Amplify, Gnanify!",
  "Identify, Modify, Gnanify!",
  "Techify, Magnify, Gnanify!",
  "Simplify, Quantify, Gnanify!",
  "Clarify, Beautify, Gnanify!",
  "Motivate, Verify, Gnanify!",
  "Amplify, Simplify, Identify!",
  "Techify, Simplify, Clarify!",
  "Simplify, Identify, Verify!",
  "Magnify, Amplify, Gnanify!",
  "Educify, Identify, Gnanify!",
  "Simplify, Quantify, Certify!",
  "Techify, Simplify, Magnify!",
  "Clarify, Magnify, Electrify!",
  "Motivate, Verify, Simplify!",
  "Amplify, Certify, Gnanify!",
  "Educify, Magnify, Gnanify!",
  "Simplify, Beautify, Verify!",
  "Identify, Beautify, Gnanify!",
  "Motivate, Unify, Gnanify!",
  "Techify, Electrify, Gnanify!",
  "Simplify, Techify, Certify!",
  "Identify, Techify, Magnify!",
  "Educify, Amplify, Verify!",
  "Clarify, Testify, Beautify!",
  "Motivate, Beautify, Simplify!",
  "Techify, Simplify, Magnify!",
  "Amplify, Certify, Magnify!",
  "Simplify, Unify, Techify!",
  "Verify, Motivate, Gnanify!",
  "Identify, Simplify, Beautify!",
  "Techify, Magnify, Electrify!",
  "Simplify, Certify, Techify!",
  "Magnify, Certify, Gnanify!",
  "Motivate, Identify, Amplify!",
  "Educify, Simplify, Techify!",
  "Verify, Amplify, Techify!",
  "Motivate, Simplify, Certify!",
  "Simplify, Testify, Gnanify!"
];

// AI/ML Slogans
const aiMlSlogans = [
  "AI + ML = Future. Be the Creator!",
  "Code the Impossible, Build the Future!",
  "Revolutionize the World with Data!",
  "Think Big, Build Bigger with AI!",
  "AI is the Future. You are the Future.",
  "Machine Learning: Unlock Your Superpower!",
  "Data is Gold. Let’s Mine It!",
  "Shape Tomorrow. Start with AI Today!",
  "Innovate, Disrupt, Lead with ML!",
  "AI: Not Just Tech. It’s the New Frontier!",
  "Your Code Can Change the World.",
  "The Future is AI. And You’re in Charge!",
  "Build the Next Big Thing with AI!",
  "Harness the Power of Data to Predict the Future!",
  "Deep Learning, Deep Insights!",
  "Your Vision, Powered by AI!",
  "Revolutionizing Industries with Machine Learning!",
  "ML = Mastering the Future.",
  "Data + AI = Limitless Possibilities!",
  "Think Data. Think AI. Think Future.",
  "AI Empowers. ML Transforms.",
  "Discover, Learn, Innovate with AI!",
  "Data Science: Shaping the Future.",
  "Unlock the Power of AI to Change the World!",
  "Machine Learning = Infinite Potential!",
  "Machine Learning: Making the Impossible, Possible.",
  "AI = The Revolution of Tomorrow.",
  "Your Future in Data Starts Now.",
  "Machine Learning: The Path to the Future.",
  "Innovating with Data Science. Changing the World.",
  "The Future is Written in Code – AI and ML.",
  "Predict the Future with the Power of Data.",
  "Empower Your Future with AI and Data Science!",
  "AI & ML: Unleashing the Next Generation of Innovation.",
  "Redefining the World Through Data!",
  "ML + AI = Unstoppable Progress.",
  "Big Data? No Problem. AI’s Got This.",
  "Machine Learning: From Data to Decisions.",
  "The Future Belongs to the Machine.",
  "AI: The Brain Behind Innovation.",
  "Transform Data into Action with ML!",
  "Machine Learning: The Key to the Future.",
  "Data is Power. AI is the Engine.",
  "Innovate, Accelerate, Lead with AI.",
  "AI and ML: The Engines of Progress.",
  "Empowering Ideas Through AI and Data Science!",
  "Machine Learning: The Fuel of Tomorrow’s Innovations.",
  "Build Smarter with AI & Machine Learning.",
  "AI = Revolutionizing the Future.",
  "Machine Learning: Your Pathway to Innovation."
];

const Slogan = () => {
  const [gnanifySlogan, setGnanifySlogan] = useState("");
  const [aiMlSlogan, setAiMlSlogan] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    // Set random Gnanify slogan
    const randomGnanifyIndex = Math.floor(Math.random() * gnanifySlogans.length);
    setGnanifySlogan(gnanifySlogans[randomGnanifyIndex]);

    // Set random AI/ML slogan
    const randomAiMlIndex = Math.floor(Math.random() * aiMlSlogans.length);
    setAiMlSlogan(aiMlSlogans[randomAiMlIndex]);
  }, []);

  const handleSearch = (e) => {
  e.preventDefault();

  // Check if the search query is not empty
  if (searchQuery.trim() !== "") {
    // Here, you can use the searchQuery to perform any search action
    // For example, if you want to log it or search within your own app
    console.log("We are working on it:", searchQuery);
    
    // Custom search logic
    // You can call a function or an API here to handle the search query
    // Example: fetchData(searchQuery);

    // Or display results inside your app:
    // setSearchResults(fetchedData);

    // For example, displaying results:
    alert(`we are working on it:`);
  } else {
    // Handle the case when the search query is empty
    alert("Please enter a search query.");
  }
};


  return (
    <div className="slogan-container">
      {/* 🔍 Search Bar */}
      <form onSubmit={handleSearch} className="search-form">
        <input
          type="text"
          placeholder="Search anything (e.g., GeeksforGeeks, React JS)..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="search-input"
        />
        <button type="submit" className="search-button">Search</button>
      </form>

      {/* 🎯 Gnanify Slogan */}
      <h2 className="gnanify-slogan">{gnanifySlogan}</h2>

      {/* 🎯 AI/ML Slogan */}
      <h2 className="aiml-slogan">{aiMlSlogan}</h2>

      <p className="slogan-description">
  🚀 Welcome to <strong>Gnanify</strong>! The hub for AI, ML, and Data Science innovators. Whether you're a student or researcher, let's push boundaries and innovate together! 🌍
  <br />
  Connect and learn — Subscribe to my <a href="https://www.youtube.com/channel/YOUR_CHANNEL_LINK" target="_blank" rel="noopener noreferrer">YouTube</a>, <a href="https://www.linkedin.com/in/YOUR_LINKEDIN" target="_blank" rel="noopener noreferrer">LinkedIn</a>, and <a href="https://twitter.com/YOUR_TWITTER" target="_blank" rel="noopener noreferrer">Twitter</a>!
</p>

    </div>
  );
};

export default Slogan;
