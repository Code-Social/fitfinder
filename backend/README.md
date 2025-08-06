# FitFinder Backend

A Node.js/Express backend for the FitFinder application.

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Create a `.env` file based on `.env.example` and configure your environment variables.

3. Start the development server:
   ```bash
   npm run dev
   ```

4. The server will be running at `http://localhost:5000`

## API Endpoints

### Health Check
- `GET /api/health` - Check server status

### Opportunities
- `GET /api/opportunities` - Get all opportunities
- `GET /api/opportunities/:id` - Get specific opportunity
- `POST /api/opportunities` - Create new opportunity (admin only)

### User Profile
- `GET /api/profile/:userId` - Get user profile
- `PUT /api/profile/:userId` - Update user profile

## Project Structure

```
backend/
├── server.js          # Main server file
├── package.json       # Dependencies and scripts
├── .env              # Environment variables
└── README.md         # This file
```

## Future Enhancements

- Database integration (MongoDB/PostgreSQL)
- User authentication with JWT
- LinkedIn API integration
- AI matching algorithm
- Email notifications
- File upload for documents
- Admin panel endpoints
