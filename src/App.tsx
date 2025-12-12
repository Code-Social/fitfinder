import React from 'react';
import './App.css';
import { ThemeProvider } from './contexts/ThemeContext';
import ThemeToggle from './components/ThemeToggle';
import BackgroundImage from './components/BackgroundImage';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <ThemeProvider>
      <BackgroundImage />
      <div className="container">
        < Header />     {/* Changed Static Header to Header component */}
        
        {/* main */}
        <main>
          {/* hero section*/}
          <section className="hero">
            <h2>Find Opportunities Meant for You</h2>
            <p>Discover scholarships, hackathons, conferences, and research programs based on your profile.</p>
            <div className="buttons">
              <button className="primary-btn">Start Contributing</button>
              <button className="secondary-btn">Learn More</button>
            </div>
          </section>

          {/* what you can find section */}
          <section className="opportunities">
            <h3>What Can You Discover?</h3>
            <div className="grid">
              <div className="card">
                <h4>🎓 Scholarships</h4>
                <p>Find scholarships that match your profile</p>
              </div>
              <div className="card">
                <h4>🧑‍💻 Hackathons</h4>
                <p>Join coding competitions and challenges</p>
              </div>
              <div className="card">
                <h4>🌎 Conferences</h4>
                <p>Attend global conferences and events</p>
              </div>
              <div className="card">
                <h4>🧑‍🔬 Research Programs</h4>
                <p>Discover research opportunities</p>
              </div>
              <div className="card">
                <h4>🧑‍🏫 Apprenticeships</h4>
                <p>Find hands-on learning programs</p>
              </div>
              <div className="card">
                <h4>✨ And More</h4>
                <p>Explore other growth opportunities</p>
              </div>
            </div>
          </section>

          {/* how it works */}
          <section className="how-it-works">
            <h3>How It Works</h3>
            <div className="steps">
              <div className="step">
                <div className="step-number">1</div>
                <h4>Create Your Profile</h4>
                <p>Add your skills and goals</p>
              </div>
              <div className="step">
                <div className="step-number">2</div>
                <h4>Get Match Scores</h4>
                <p>See how well you fit each opportunity</p>
              </div>
              <div className="step">
                <div className="step-number">3</div>
                <h4>Apply & Succeed</h4>
                <p>Get tips from successful applicants</p>
              </div>
            </div>
          </section>

          {/* open source */}
          <section className="open-source">
            <h3>Open Source Project</h3>
            <p>Help us build this platform! Perfect for beginners and experienced developers.</p>
            <div className="buttons">
              <a href="https://github.com/Code-Social/fitfinder" className="primary-btn">
                View on GitHub
              </a>
              <a href="https://github.com/Code-Social/fitfinder/issues" className="secondary-btn">
                Browse Issues
              </a>
            </div>
          </section>
        </main>

        {/* Footer */}
        {/* <footer>
          <p>Made with ❤️ by the open source community of Code Social</p>
        </footer> */}
        <Footer/>
      </div>
    </ThemeProvider>
  );
}

export default App;
