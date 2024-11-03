import React from "react";
import "./Dashboard.css";
const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <div className="header">
        <div className="welcome-card">
          <p className="date">Oct 11, 2024</p>
          <h2>Welcome Back, SABS</h2>
          <p>Check out the latest updates on your quiz..</p>
          <div className="stats">
            <div className="stat">
              <p>Attended</p>
              <p>4</p>
            </div>
            <div className="stat">
              <p>Days Streak</p>
              <p>40</p>
            </div>
            <div className="stat">
              <p>Rank</p>
              <p>20</p>
            </div>
            <div className="stat">
              <p>Points</p>
              <p>200</p>
            </div>
          </div>
        </div>
        <div className="leaderboard">
          <h3>Leaderboard</h3>
          <div className="leader">1. Sheshan</div>
          <div className="leader">2. Balaji</div>
          <div className="leader">3. Siva</div>
          <button className="view-ranks">View Ranks</button>
        </div>
      </div>

      <div className="upcoming-quizzes">
        <h3>Upcoming Quizzes</h3>
        <div className="quizzes">
          <div className="quiz-card">Hidden Object</div>
          <div className="quiz-card">Lightning Round</div>
          <div className="quiz-card">Build Words</div>
          <div className="quiz-card">Calendar Placeholder</div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;