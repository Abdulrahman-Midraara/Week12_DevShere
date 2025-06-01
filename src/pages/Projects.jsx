import React, { useState, useEffect } from 'react';
import axios from 'axios'; // ✅ Added axios for HTTP requests

import ProjectCard from '../components/ProjectCard';
import '../styles/Projects.css';

const Projects = () => {
  // ✅ State to hold fetched repos, loading state, and any fetch error
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // ✅ useEffect to fetch GitHub repositories once when component mounts
  useEffect(() => {
    const fetchRepos = async () => {
      try {
        // 🔗 Replace with your GitHub username
        const response = await axios.get(
          'https://api.github.com/users/Abdulrahman-Midraara/repos?per_page=10&sort=updated'
        );
        setRepos(response.data); // ⬅️ Save data in repos state
        setLoading(false);       // ✅ Done loading
      } catch (err) {
        setError('Failed to fetch repositories');
        setLoading(false);
      }
    };

    fetchRepos(); // 🚀 Trigger fetch
  }, []);

  // ✅ Loading indicator
  if (loading) {
    return <div className="loading">Loading repositories...</div>;
  }

  // ❌ Error indicator
  if (error) {
    return <div className="error">{error}</div>;
  }

  return (
    <div className="projects-container">
      <div className="projects-header">
        <h1 className="projects-title">GitHub Projects</h1>
        <p className="projects-subtitle">My latest GitHub repositories.</p>
      </div>

      <div className="projects-grid">
        {repos.length > 0 ? (
          repos.map((repo) => (
            <ProjectCard
              key={repo.id}
              name={repo.name}
              description={repo.description}
              language={repo.language}
              html_url={repo.html_url}
              stargazers_count={repo.stargazers_count}
              forks_count={repo.forks_count}
              updated_at={repo.updated_at}
              topics={repo.topics}
              watchers_count={repo.watchers_count}
            />
          ))
        ) : (
          <div className="no-repos">
            <p>No repositories found.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Projects;
