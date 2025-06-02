import React from 'react';
import { Routes, Route } from 'react-router-dom'; // ✅ Import Routes & Route for routing

// ✅ Import custom components
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// ✅ Import route-based pages
import Home from './pages/Home';
import Projects from './pages/Projects';
import Contact from './pages/Contact'; // ✅ New route added for Contact

// ✅ Import global styles (optional if you use Tailwind-only styling)
import './styles/App.css';

function App() {
  return (
    <div className="app">
      {/* ✅ Always visible Navbar */}
      <Navbar />
      
      
      <main className="main-content">
      {/* ✅ Tailwind test heading removed after confirming styling is working */}

        {/* ✅ TailwindCSS test heading - temporary check 
        <h1 className="text-3xl font-bold text-green-600 underline">
          ✅ Tailwind is working!
        </h1>*/}

        {/* ✅ Define all client-side routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} /> {/* ✅ Contact route added */}
        </Routes>
      </main>

      {/* ✅ Always visible Footer */}
      <Footer />
    </div>
  );
}

export default App;
