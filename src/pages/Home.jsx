// ✅ React hooks for component state and side effects
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

// ✅ Newly Added: Axios is used to fetch data from GitHub API
import axios from 'axios';

import moment from 'moment'; // 🕐 Used to format the join date
import { Users, Star, GitBranch, MapPin, Calendar, ExternalLink } from 'lucide-react'; // 📦 Icons from Lucide
import '../styles/Home.css'; // 🎨 Local styles for this page

const Home = () => {
  // ✅ Existing: State hooks to track user data, loading status, and errors
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // ✅ NEWLY ADDED: useEffect to fetch GitHub profile using axios on component mount
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        setLoading(true); // ⏳ Show loading message while fetching

        // ✅ Replace 'Abdulrahman-Midraara' with your actual GitHub username if different
        const response = await axios.get('https://api.github.com/users/Abdulrahman-Midraara');

        setUser(response.data); // 📥 Store response in user state
        setError(null); // ✅ Clear any previous error
      } catch (err) {
        console.error('GitHub API error:', err);
        setError('⚠️ Failed to load profile. Please check your connection or GitHub username.');
      } finally {
        setLoading(false); // 🛑 Stop loading once finished
      }
    };

    fetchUserData(); // 🚀 Run fetch when component loads
  }, []); // 🧠 Empty dependency array = run only once

  // ✅ Already Existing: Display loading message
  if (loading) {
    return <div className="loading">Loading profile data...</div>;
  }

  // ✅ Already Existing: Display error message if fetch fails
  if (error) {
    return <div className="error">{error}</div>;
  }

  return (
    <div className="home-container">
      {user && (
        <>
          <div className="profile-card">
            {/* ✅ Avatar and Basic Info */}
            <div className="profile-header">
              <div className="avatar-container">
                <img 
                  src={user.avatar_url} 
                  alt={`${user.name}'s avatar`} 
                  className="avatar" 
                />
              </div>
              <div className="profile-info">
                <h1 className="profile-name">{user.name}</h1>
                <h2 className="profile-username">@{user.login}</h2>
                
                {/* ✅ Location info (optional) */}
                {user.location && (
                  <p className="profile-location">
                    <MapPin size={16} />
                    <span>{user.location}</span>
                  </p>
                )}

                {/* ✅ Join date formatted using moment.js */}
                <p className="profile-joined">
                  <Calendar size={16} />
                  <span>Joined on {moment(user.created_at).format('MMMM D, YYYY')}</span>
                </p>
              </div>
            </div>
            
            {/* ✅ User Bio (if exists) */}
            <div className="profile-bio">
              <p>{user.bio || 'No bio available'}</p>
            </div>

            {/* ✅ Public repo, followers, following stats */}
            <div className="profile-stats">
              <div className="stat-item">
                <GitBranch size={18} />
                <div className="stat-details">
                  <span className="stat-value">{user.public_repos}</span>
                  <span className="stat-label">Repositories</span>
                </div>
              </div>
              <div className="stat-item">
                <Users size={18} />
                <div className="stat-details">
                  <span className="stat-value">{user.followers}</span>
                  <span className="stat-label">Followers</span>
                </div>
              </div>
              <div className="stat-item">
                <Star size={18} />
                <div className="stat-details">
                  <span className="stat-value">{user.following}</span>
                  <span className="stat-label">Following</span>
                </div>
              </div>
            </div>

            {/* ✅ Optional fields: Company and Website/Blog */}
            {(user.company || user.blog) && (
              <div className="profile-links">
                {user.company && (
                  <p className="profile-company">
                    <span>Company:</span> {user.company}
                  </p>
                )}
                {user.blog && (
                  <p className="profile-website">
                    <span>Website:</span> 
                    <a 
                      href={user.blog.startsWith('http') ? user.blog : `https://${user.blog}`} 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      {user.blog} <ExternalLink size={14} />
                    </a>
                  </p>
                )}
              </div>
            )}

            {/* ✅ Action buttons to visit GitHub and Projects page */}
            <div className="profile-actions">
              <a 
                href={user.html_url} 
                className="btn btn-secondary"
                target="_blank" 
                rel="noopener noreferrer"
              >
                Visit GitHub
              </a>
              <Link to="/projects" className="btn">
                View Projects
              </Link>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Home;
