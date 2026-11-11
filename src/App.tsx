import React, { useState, useEffect, useMemo } from 'react';
import './App.css';
import { ThemeProvider } from './contexts/ThemeContext';
import BackgroundImage from './components/BackgroundImage';
import Header from './components/Header';
import Footer from './components/Footer';

interface Opportunity {
  id: string;
  icon: string;
  title: string;
  category: string;
  badge: string;
  description: string;
  tags: string[];
}

const OPPORTUNITIES_DATA: Opportunity[] = [
  {
    id: 'scholarships',
    icon: '🎓',
    title: 'Scholarships',
    category: 'Scholarships',
    badge: 'Funded',
    description: 'Find merit-based and need-based academic grants that match your profile and studies.',
    tags: ['Tuition', 'STEM', 'Global', 'Undergrad']
  },
  {
    id: 'hackathons',
    icon: '🧑‍💻',
    title: 'Hackathons',
    category: 'Hackathons',
    badge: 'Competitions',
    description: 'Join local and virtual coding hackathons, build innovative projects, and win prizes.',
    tags: ['Web3', 'AI / ML', 'Open Source', 'Teamwork']
  },
  {
    id: 'conferences',
    icon: '🌎',
    title: 'Conferences',
    category: 'Conferences',
    badge: 'Networking',
    description: 'Attend leading tech conferences, hear from industry pioneers, and build connections.',
    tags: ['Keynotes', 'Workshops', 'Student Pass', 'Global']
  },
  {
    id: 'research',
    icon: '🧑‍🔬',
    title: 'Research Programs',
    category: 'Research Programs',
    badge: 'Academia',
    description: 'Discover funded undergraduate & graduate research fellowships with top labs.',
    tags: ['Publications', 'Mentorship', 'Stipend', 'Deep Tech']
  },
  {
    id: 'apprenticeships',
    icon: '🧑‍🏫',
    title: 'Apprenticeships',
    category: 'Apprenticeships',
    badge: 'Career',
    description: 'Accelerate your career through hands-on corporate apprenticeships and paid training.',
    tags: ['Full-time', 'Mentorship', 'Entry Level', 'Industry']
  },
  {
    id: 'fellowships',
    icon: '✨',
    title: 'Fellowships & Grants',
    category: 'Fellowships',
    badge: 'Leadership',
    description: 'Access prestigious leadership incubators, founder grants, and social impact fellowships.',
    tags: ['Founders', 'Impact', 'Grants', 'Community']
  }
];

const CATEGORIES = [
  'All',
  'Scholarships',
  'Hackathons',
  'Conferences',
  'Research Programs',
  'Apprenticeships',
  'Fellowships'
];

function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [bookmarks, setBookmarks] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('fitfinder_saved_opportunities');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('fitfinder_saved_opportunities', JSON.stringify(bookmarks));
    } catch {
      // Ignore write errors in restricted environments
    }
  }, [bookmarks]);

  const toggleBookmark = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setBookmarks(prev =>
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  const filteredOpportunities = useMemo(() => {
    return OPPORTUNITIES_DATA.filter(item => {
      // Filter by category
      if (selectedCategory === 'Saved') {
        if (!bookmarks.includes(item.id)) return false;
      } else if (selectedCategory !== 'All' && item.category !== selectedCategory) {
        return false;
      }

      // Filter by search query
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase().trim();
        const matchesTitle = item.title.toLowerCase().includes(query);
        const matchesCategory = item.category.toLowerCase().includes(query);
        const matchesDesc = item.description.toLowerCase().includes(query);
        const matchesTags = item.tags.some(tag => tag.toLowerCase().includes(query));
        return matchesTitle || matchesCategory || matchesDesc || matchesTags;
      }

      return true;
    });
  }, [selectedCategory, searchQuery, bookmarks]);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <ThemeProvider>
      <BackgroundImage />
      <div className="container">
        {/* Navigation Header with Search & Theme Toggle */}
        <Header searchQuery={searchQuery} onSearchChange={setSearchQuery} />

        {/* Main Content */}
        <main>
          {/* Hero Section */}
          <section className="hero">
            <h2 className="hero-title">
              Find Opportunities Meant for You
            </h2>

            <p className="hero-subtitle">
              Discover scholarships, hackathons, conferences, and research programs based on your profile.
            </p>

            <div className="buttons">
              <button
                className="primary-btn"
                onClick={() => scrollToSection('open-source')}
              >
                Start Contributing
              </button>
              <button
                className="secondary-btn"
                onClick={() => scrollToSection('how-it-works')}
              >
                Learn More
              </button>
            </div>
          </section>

          {/* Opportunities Section */}
          <section className="opportunities" id="opportunities">
            <h3>What Can You Discover?</h3>

            {/* Filter Pills */}
            <div className="filter-container">
              <div className="filter-pills" role="tablist" aria-label="Opportunity Categories">
                {CATEGORIES.map(category => (
                  <button
                    key={category}
                    className={`filter-pill ${selectedCategory === category ? 'active' : ''}`}
                    onClick={() => setSelectedCategory(category)}
                    role="tab"
                    aria-selected={selectedCategory === category}
                  >
                    {category}
                  </button>
                ))}
                <button
                  className={`filter-pill ${selectedCategory === 'Saved' ? 'active' : ''}`}
                  onClick={() => setSelectedCategory('Saved')}
                  role="tab"
                  aria-selected={selectedCategory === 'Saved'}
                >
                  ⭐ Saved
                  {bookmarks.length > 0 && (
                    <span className="filter-count">{bookmarks.length}</span>
                  )}
                </button>
              </div>
            </div>

            {/* Opportunities Grid */}
            <div className="grid">
              {filteredOpportunities.length > 0 ? (
                filteredOpportunities.map(opp => {
                  const isSaved = bookmarks.includes(opp.id);
                  return (
                    <div className="card" key={opp.id}>
                      <div className="card-header">
                        <span className="card-badge">{opp.badge}</span>
                        <button
                          className={`bookmark-btn ${isSaved ? 'saved' : ''}`}
                          onClick={(e) => toggleBookmark(opp.id, e)}
                          title={isSaved ? 'Remove from saved' : 'Save opportunity'}
                          aria-label={isSaved ? `Remove ${opp.title} from saved` : `Save ${opp.title}`}
                        >
                          {isSaved ? '★' : '☆'}
                        </button>
                      </div>
                      <h4>{opp.icon} {opp.title}</h4>
                      <p>{opp.description}</p>
                      <div className="card-tags">
                        {opp.tags.map(tag => (
                          <span key={tag} className="card-tag">#{tag}</span>
                        ))}
                      </div>
                    </div>
                  );
                })
              ) : (
                <div className="empty-state">
                  <div className="empty-state-icon">🔍</div>
                  <h4>No opportunities found</h4>
                  <p>
                    {searchQuery
                      ? `No results matching "${searchQuery}". Try a different keyword or category.`
                      : selectedCategory === 'Saved'
                      ? 'You have not saved any opportunities yet. Click the star on any card to save it.'
                      : 'No opportunities available in this category.'}
                  </p>
                  {(searchQuery || selectedCategory !== 'All') && (
                    <button
                      className="reset-filter-btn"
                      onClick={() => {
                        setSearchQuery('');
                        setSelectedCategory('All');
                      }}
                    >
                      Clear Filters
                    </button>
                  )}
                </div>
              )}
            </div>
          </section>

          {/* How It Works Section */}
          <section className="how-it-works" id="how-it-works">
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

          {/* Open Source Section */}
          <section className="open-source" id="open-source">
            <h3>Open Source Project</h3>
            <p>Help us build this platform! Perfect for beginners and experienced developers.</p>
            <div className="buttons">
              <a
                href="https://github.com/Code-Social/fitfinder"
                target="_blank"
                rel="noopener noreferrer"
                className="primary-btn"
              >
                View on GitHub
              </a>
              <a
                href="https://github.com/Code-Social/fitfinder/issues"
                target="_blank"
                rel="noopener noreferrer"
                className="secondary-btn"
              >
                Browse Issues
              </a>
            </div>
          </section>
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
