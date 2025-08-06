const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(helmet());
app.use(cors());
app.use(morgan('combined'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.get('/', (req, res) => {
  res.json({
    message: 'Welcome to FitFinder API',
    version: '1.0.0',
    status: 'active'
  });
});

// API Routes
app.get('/api/health', (req, res) => {
  res.json({
    status: 'OK',
    timestamp: new Date().toISOString(),
    uptime: process.uptime()
  });
});

// Opportunities endpoint (mock data for now)
app.get('/api/opportunities', (req, res) => {
  const mockOpportunities = [
    {
      id: 1,
      title: "Google Summer of Code 2025",
      organization: "Google",
      type: "Research Program",
      location: "Remote",
      deadline: "2025-04-01",
      amount: "$6,000",
      description: "Work on open source projects with mentoring from Google engineers.",
      tags: ["Software Development", "Open Source", "Programming"]
    },
    {
      id: 2,
      title: "MIT Global Startup Workshop",
      organization: "MIT",
      type: "Conference",
      location: "Cambridge, MA",
      deadline: "2025-03-15",
      amount: "Free",
      description: "Learn from successful entrepreneurs and connect with startup ecosystems worldwide.",
      tags: ["Entrepreneurship", "Networking", "Business"]
    }
  ];
  
  res.json({
    success: true,
    data: mockOpportunities,
    total: mockOpportunities.length
  });
});

// User profile endpoint (mock)
app.get('/api/profile/:userId', (req, res) => {
  const { userId } = req.params;
  
  const mockProfile = {
    id: userId,
    name: "John Doe",
    email: "john.doe@example.com",
    skills: ["JavaScript", "React", "Node.js"],
    education: "Computer Science, University XYZ",
    location: "New York, NY",
    interests: ["Technology", "Innovation", "Startups"]
  };
  
  res.json({
    success: true,
    data: mockProfile
  });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    success: false,
    message: 'Something went wrong!',
    error: process.env.NODE_ENV === 'development' ? err.message : {}
  });
});

// 404 handler
app.use('*', (req, res) => {
  res.status(404).json({
    success: false,
    message: 'Route not found'
  });
});

app.listen(PORT, () => {
  console.log(`🚀 FitFinder Backend Server running on port ${PORT}`);
  console.log(`📖 API Documentation: http://localhost:${PORT}/`);
  console.log(`🏥 Health Check: http://localhost:${PORT}/api/health`);
});
