import { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Filter, MapPin, Calendar, Clock, ExternalLink, Bookmark, Heart, Star, TrendingUp } from 'lucide-react';

const OpportunitiesPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [savedOpportunities, setSavedOpportunities] = useState(new Set());

  const categories = [
    { id: 'all', name: 'All', count: 1200 },
    { id: 'scholarships', name: 'Scholarships', count: 450 },
    { id: 'research', name: 'Research', count: 280 },
    { id: 'hackathons', name: 'Hackathons', count: 180 },
    { id: 'conferences', name: 'Conferences', count: 200 },
    { id: 'apprenticeships', name: 'Apprenticeships', count: 90 }
  ];

  const opportunities = [
    {
      id: 1,
      title: "Google Summer of Code 2025",
      organization: "Google",
      type: "Research Program",
      location: "Remote",
      deadline: "2025-04-01",
      amount: "$6,000",
      fitScore: 92,
      applicants: 15420,
      description: "Work on open source projects with mentoring from Google engineers. Perfect for students passionate about software development.",
      tags: ["Software Development", "Open Source", "Programming"],
      difficulty: "Intermediate",
      trending: true
    },
    {
      id: 2,
      title: "MIT Global Startup Workshop",
      organization: "MIT",
      type: "Conference",
      location: "Cambridge, MA",
      deadline: "2025-03-15",
      amount: "Free",
      fitScore: 87,
      applicants: 2340,
      description: "Learn from successful entrepreneurs and connect with startup ecosystems worldwide.",
      tags: ["Entrepreneurship", "Networking", "Business"],
      difficulty: "Beginner",
      trending: false
    },
    {
      id: 3,
      title: "Fulbright Research Grant",
      organization: "Fulbright Commission",
      type: "Scholarship",
      location: "Global",
      deadline: "2025-10-15",
      amount: "$25,000",
      fitScore: 76,
      applicants: 8765,
      description: "Conduct research abroad while experiencing different cultures and academic systems.",
      tags: ["Research", "International", "Academic"],
      difficulty: "Advanced",
      trending: true
    },
    {
      id: 4,
      title: "NASA Space Apps Challenge",
      organization: "NASA",
      type: "Hackathon",
      location: "Global",
      deadline: "2025-02-28",
      amount: "$50,000",
      fitScore: 94,
      applicants: 45600,
      description: "48-hour hackathon to solve challenges related to space exploration and Earth observation.",
      tags: ["Space", "Programming", "Innovation"],
      difficulty: "Intermediate",
      trending: true
    },
    {
      id: 5,
      title: "Amazon Software Engineering Apprenticeship",
      organization: "Amazon",
      type: "Apprenticeship",
      location: "Seattle, WA",
      deadline: "2025-05-01",
      amount: "$85,000/year",
      fitScore: 89,
      applicants: 5420,
      description: "12-month program combining hands-on work experience with technical training.",
      tags: ["Software Engineering", "Career Development", "Technology"],
      difficulty: "Intermediate",
      trending: false
    },
    {
      id: 6,
      title: "Rhodes Scholarship",
      organization: "Oxford University",
      type: "Scholarship",
      location: "Oxford, UK",
      deadline: "2025-09-01",
      amount: "Full Funding",
      fitScore: 65,
      applicants: 12300,
      description: "The world's oldest international scholarship programme, enabling outstanding young people to study at Oxford.",
      tags: ["Academic Excellence", "Leadership", "International"],
      difficulty: "Advanced",
      trending: false
    }
  ];

  const toggleSave = (id) => {
    const newSaved = new Set(savedOpportunities);
    if (newSaved.has(id)) {
      newSaved.delete(id);
    } else {
      newSaved.add(id);
    }
    setSavedOpportunities(newSaved);
  };

  const getFitScoreColor = (score) => {
    if (score >= 90) return 'text-green-600 bg-green-100';
    if (score >= 75) return 'text-blue-600 bg-blue-100';
    if (score >= 60) return 'text-yellow-600 bg-yellow-100';
    return 'text-gray-600 bg-gray-100';
  };

  const getDifficultyColor = (difficulty) => {
    switch(difficulty) {
      case 'Beginner': return 'text-green-600 bg-green-100';
      case 'Intermediate': return 'text-yellow-600 bg-yellow-100';
      case 'Advanced': return 'text-red-600 bg-red-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      {/* Header Section */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Discover Your Next <span className="gradient-text">Opportunity</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Browse through curated opportunities with AI-powered fit scores
            </p>

            {/* Search and Filters */}
            <div className="flex flex-col lg:flex-row gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search opportunities, organizations, or keywords..."
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <button className="flex items-center space-x-2 px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                <Filter className="w-5 h-5" />
                <span>Filters</span>
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <div className="lg:w-80">
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 sticky top-24">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Categories</h3>
              <div className="space-y-2">
                {categories.map((category) => (
                  <motion.button
                    key={category.id}
                    className={`w-full flex items-center justify-between p-3 rounded-lg transition-colors ${
                      selectedCategory === category.id
                        ? 'bg-blue-50 text-blue-700 border border-blue-200'
                        : 'hover:bg-gray-50 text-gray-700'
                    }`}
                    onClick={() => setSelectedCategory(category.id)}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span>{category.name}</span>
                    <span className="text-sm text-gray-500">{category.count}</span>
                  </motion.button>
                ))}
              </div>

              <div className="mt-8">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Fit Score Range</h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">90-100%</span>
                    <span className="text-xs text-green-600 font-medium">Perfect Match</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">75-89%</span>
                    <span className="text-xs text-blue-600 font-medium">Great Match</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">60-74%</span>
                    <span className="text-xs text-yellow-600 font-medium">Good Match</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            <div className="flex items-center justify-between mb-6">
              <p className="text-gray-600">
                Showing <span className="font-semibold">{opportunities.length}</span> opportunities
              </p>
              <select className="border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                <option>Sort by Fit Score</option>
                <option>Sort by Deadline</option>
                <option>Sort by Amount</option>
                <option>Sort by Popularity</option>
              </select>
            </div>

            {/* Opportunities Grid */}
            <div className="space-y-6">
              {opportunities.map((opportunity, index) => (
                <motion.div
                  key={opportunity.id}
                  className="card p-6 hover:shadow-lg"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  whileHover={{ y: -2 }}
                >
                  <div className="flex flex-col lg:flex-row gap-6">
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <div className="flex items-center space-x-2 mb-2">
                            <h3 className="text-xl font-bold text-gray-900">{opportunity.title}</h3>
                            {opportunity.trending && (
                              <div className="flex items-center space-x-1 px-2 py-1 bg-orange-100 text-orange-600 rounded-full text-xs font-medium">
                                <TrendingUp className="w-3 h-3" />
                                <span>Trending</span>
                              </div>
                            )}
                          </div>
                          <p className="text-gray-600 font-medium">{opportunity.organization}</p>
                        </div>
                        <motion.button
                          onClick={() => toggleSave(opportunity.id)}
                          className={`p-2 rounded-full transition-colors ${
                            savedOpportunities.has(opportunity.id)
                              ? 'text-red-500 bg-red-50'
                              : 'text-gray-400 hover:text-red-500 hover:bg-red-50'
                          }`}
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          <Heart className={`w-5 h-5 ${savedOpportunities.has(opportunity.id) ? 'fill-current' : ''}`} />
                        </motion.button>
                      </div>

                      <p className="text-gray-600 mb-4 line-clamp-2">{opportunity.description}</p>

                      <div className="flex flex-wrap gap-2 mb-4">
                        {opportunity.tags.map((tag) => (
                          <span key={tag} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
                            {tag}
                          </span>
                        ))}
                      </div>

                      <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                        <div className="flex items-center space-x-1">
                          <MapPin className="w-4 h-4" />
                          <span>{opportunity.location}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Calendar className="w-4 h-4" />
                          <span>Due: {new Date(opportunity.deadline).toLocaleDateString()}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${getDifficultyColor(opportunity.difficulty)}`}>
                            {opportunity.difficulty}
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="lg:w-48 flex flex-col space-y-4">
                      <div className="text-center">
                        <div className={`text-2xl font-bold mb-1 ${getFitScoreColor(opportunity.fitScore).split(' ')[0]}`}>
                          {opportunity.fitScore}%
                        </div>
                        <div className={`text-xs font-medium px-2 py-1 rounded-full ${getFitScoreColor(opportunity.fitScore)}`}>
                          Fit Score
                        </div>
                      </div>

                      <div className="text-center">
                        <div className="text-lg font-bold text-gray-900">{opportunity.amount}</div>
                        <div className="text-xs text-gray-500">{opportunity.type}</div>
                      </div>

                      <div className="text-center">
                        <div className="text-sm text-gray-600">{opportunity.applicants.toLocaleString()}</div>
                        <div className="text-xs text-gray-500">applicants</div>
                      </div>

                      <div className="flex flex-col space-y-2">
                        <motion.button 
                          className="btn-primary text-sm flex items-center justify-center space-x-1"
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <span>View Details</span>
                          <ExternalLink className="w-4 h-4" />
                        </motion.button>
                        <motion.button 
                          className="btn-secondary text-sm"
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <Bookmark className="w-4 h-4 mr-1" />
                          Save
                        </motion.button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Load More Button */}
            <div className="text-center mt-12">
              <motion.button
                className="btn-secondary px-8 py-3"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Load More Opportunities
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OpportunitiesPage;
