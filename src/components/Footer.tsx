import React from 'react';

const Footer = () => {
  const footerStyles = `
    .footer-container {
      width: 100%;
      max-width: 1400px;
      margin: 0 auto;
      padding: 40px 20px;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
    }

    .footer-header {
      text-align: center;
      margin-bottom: 40px;
    }

    .footer-header h2 {
      font-size: 2.75rem;
      color: #2d3748;
      font-weight: 700;
      margin: 0;
    }

    .footer-content {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
      gap: 24px;
      margin-bottom: 40px;
    }

    .footer-card {
      background: rgba(255, 255, 255, 0.7);
      backdrop-filter: blur(10px);
      border-radius: 16px;
      padding: 32px 28px;
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
      transition: all 0.3s ease;
      border: 1px solid rgba(255, 255, 255, 0.8);
    }

    .footer-card:hover {
      transform: translateY(-4px);
      box-shadow: 0 8px 30px rgba(0, 0, 0, 0.12);
    }

    .card-header {
      display: flex;
      align-items: center;
      gap: 12px;
      margin-bottom: 16px;
    }

    .card-icon {
      font-size: 1.75rem;
    }

    .card-title {
      font-size: 1.4rem;
      font-weight: 700;
      color: #2d3748;
      margin: 0;
    }

    .card-description {
      color: #4a5568;
      font-size: 1rem;
      line-height: 1.6;
      margin-bottom: 20px;
    }

    .card-links {
      display: flex;
      flex-direction: column;
      gap: 10px;
    }

    .card-link {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      color: #3b82f6;
      text-decoration: none;
      font-weight: 500;
      font-size: 0.95rem;
      transition: all 0.2s ease;
      padding: 8px 12px;
      border-radius: 8px;
      background: rgba(59, 130, 246, 0.05);
      cursor: pointer;
    }

    .card-link:hover {
      background: rgba(59, 130, 246, 0.1);
      transform: translateX(4px);
    }

    .link-icon {
      font-size: 0.9rem;
      width: 16px;
      height: 16px;
      display: inline-flex;
      align-items: center;
      justify-content: center;
    }

    .footer-bottom {
      background: rgba(255, 255, 255, 0.7);
      backdrop-filter: blur(10px);
      border-radius: 16px;
      padding: 32px;
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
      border: 1px solid rgba(255, 255, 255, 0.8);
    }

    .bottom-content {
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-wrap: wrap;
      gap: 30px;
    }

    .footer-brand {
      display: flex;
      align-items: center;
      gap: 16px;
    }

    .brand-logo {
      width: 56px;
      height: 56px;
      background: linear-gradient(135deg, #3b82f6 0%, #2563eb 100%);
      border-radius: 14px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
      font-size: 1.75rem;
      box-shadow: 0 4px 15px rgba(59, 130, 246, 0.3);
    }

    .brand-info h3 {
      font-size: 1.5rem;
      color: #2d3748;
      font-weight: 700;
      margin: 0 0 4px 0;
    }

    .brand-info p {
      color: #4a5568;
      font-size: 0.95rem;
      margin: 0;
    }

    .social-section {
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      gap: 15px;
    }

    .social-label {
      color: #4a5568;
      font-size: 0.95rem;
      font-weight: 600;
    }

    .social-links {
      display: flex;
      gap: 12px;
    }

    .social-link {
      width: 48px;
      height: 48px;
      background: rgba(59, 130, 246, 0.1);
      border-radius: 12px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #3b82f6;
      font-size: 1.25rem;
      text-decoration: none;
      transition: all 0.3s ease;
      border: 1px solid rgba(59, 130, 246, 0.2);
      cursor: pointer;
    }

    .social-link:hover {
      background: #3b82f6;
      color: white;
      transform: translateY(-3px);
      box-shadow: 0 4px 12px rgba(59, 130, 246, 0.3);
    }

    .badge {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      background: linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%);
      color: #78350f;
      padding: 6px 14px;
      border-radius: 20px;
      font-weight: 700;
      font-size: 0.85rem;
      box-shadow: 0 2px 8px rgba(251, 191, 36, 0.3);
    }

    @media (max-width: 1024px) {
      .footer-content {
        grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      }
    }

    @media (max-width: 768px) {
      .footer-header h2 {
        font-size: 2rem;
      }

      .footer-content {
        grid-template-columns: 1fr;
      }

      .bottom-content {
        flex-direction: column;
        text-align: center;
      }

      .footer-brand {
        flex-direction: column;
        text-align: center;
      }

      .social-section {
        align-items: center;
      }
    }
  `;

  const GitHubIcon = () => (
    <svg className="link-icon" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
    </svg>
  );

  const DiscordIcon = () => (
    <svg className="link-icon" fill="currentColor" viewBox="0 0 24 24">
      <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z"/>
    </svg>
  );

  const GlobeIcon = () => (
    <svg className="link-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"/>
    </svg>
  );

  const InstagramIcon = () => (
    <svg className="link-icon" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
    </svg>
  );

  const BookIcon = () => (
    <svg className="link-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/>
    </svg>
  );

  const HandsIcon = () => (
    <svg className="link-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>
    </svg>
  );

  const ShareIcon = () => (
    <svg className="link-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"/>
    </svg>
  );

  const TwitterIcon = () => (
    <svg className="link-icon" fill="currentColor" viewBox="0 0 24 24">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
    </svg>
  );

  const LinkedInIcon = () => (
    <svg className="link-icon" fill="currentColor" viewBox="0 0 24 24">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
    </svg>
  );

  const CodeIcon = () => (
    <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
      <path d="M8.5 8.5l-4 4 4 4M15.5 8.5l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
    </svg>
  );

  return (
    <>
      <style>{footerStyles}</style>
      <div className="footer-container">
        <div className="footer-header">
          <h2>Connect, Support, & Contribute</h2>
        </div>

        <div className="footer-content">
          {/* Community & Help Card */}
          <div className="footer-card">
            <div className="card-header">
              <span className="card-icon">👥</span>
              <h3 className="card-title">Community & Help</h3>
            </div>
            <p className="card-description">
              Join our vibrant community for live help, discussions, and stay updated with latest news
            </p>
            <div className="card-links">
              <a href="#" className="card-link">
                <DiscordIcon />
                Join our Discord Server
              </a>
              <a href="https://codesocial.tech" className="card-link">
                <GlobeIcon />
                Visit codesocial.tech
              </a>
              <a href="#" className="card-link">
                <InstagramIcon />
                Follow on Instagram
              </a>
            </div>
          </div>

          {/* Contribute Card */}
          <div className="footer-card">
            <div className="card-header">
              <span className="card-icon">💻</span>
              <h3 className="card-title">Contribute</h3>
            </div>
            <p className="card-description">
              Start your open source journey with us. Find issues, read guides, and be part of something great
            </p>
            <div className="card-links">
              <a href="https://github.com/Code-Social/fitfinder" className="card-link">
                <GitHubIcon />
                Find an Issue to Work On
              </a>
              <a href="https://github.com/Code-Social/fitfinder" className="card-link">
                <BookIcon />
                Getting Started Guide
              </a>
              <a href="https://github.com/Code-Social/fitfinder" className="card-link">
                <HandsIcon />
                How to Contribute
              </a>
            </div>
          </div>

          {/* Support Card */}
          <div className="footer-card">
            <div className="card-header">
              <span className="card-icon">❤️</span>
              <h3 className="card-title">Support the Project</h3>
            </div>
            <p className="card-description">
              Help us grow and reach more people. Your support makes a difference!
            </p>
            <div className="card-links">
              <a href="https://github.com/Code-Social/fitfinder" className="card-link">
                <span className="badge">⭐ Star the Repo</span>
              </a>
              <a href="https://github.com/Code-Social/fitfinder" className="card-link">
                <ShareIcon />
                Share with Others
              </a>
              <a href="https://github.com/Code-Social/fitfinder" className="card-link">
                <HandsIcon />
                Become a Sponsor
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <div className="bottom-content">
            <div className="footer-brand">
              <div className="brand-info">
                <h3>CodeSocial</h3>
                <p>Built by the community, for the community</p>
              </div>
              {/* <div className="brand-logo">
                <CodeIcon />
              </div> */}
            </div>

            <div className="social-section">
              <span className="social-label">Connect With Us</span>
              <div className="social-links">
                <a href="https://github.com/Code-Social/fitfinder" className="social-link" title="GitHub">
                  <GitHubIcon />
                </a>
                <a href="#" className="social-link" title="Discord">
                  <DiscordIcon />
                </a>
                <a href="#" className="social-link" title="Twitter">
                  <TwitterIcon />
                </a>
                <a href="#" className="social-link" title="Instagram">
                  <InstagramIcon />
                </a>
                <a href="#" className="social-link" title="LinkedIn">
                  <LinkedInIcon />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;