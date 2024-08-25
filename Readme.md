
# Lancer – A Freelancing Web Application

Lancer is a modern web application designed to bridge the gap between freelancers and clients. The platform enables clients to find and recruit freelancers, browse through a range of freelance services (gigs), chat with freelancers, and complete transactions securely via integrated payment gateways.

## Features

- **User Authentication**: Secure login and signup for both freelancers and clients.
- **Gigs Posting & Ordering**: Freelancers can post their services as gigs, and clients can order them.
- **In-App Messaging**: Direct messaging between clients and freelancers to discuss project details and requirements.
- **Payment Integration**: Stripe payment gateway is integrated for secure transactions.
- **Dashboard**: Personalized dashboards for freelancers and clients to manage gigs, orders, and communications.

## Technology Stack

- **Frontend**: React.js
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Payment**: Stripe API

## Project Structure

```bash
Lancer/
├── api/
│   ├── controllers/       # Handles business logic for different routes
│   ├── middleware/        # Middleware for authentication, validation, etc.
│   ├── models/            # MongoDB schemas and models
│   ├── routes/            # API endpoints for authentication, gigs, orders, etc.
│   ├── utils/             # Utility functions (e.g., error handling, token generation)
│   ├── .env               # Environment variables for the backend
│   ├── package.json       # Dependencies and scripts for the backend
│   ├── server.js          # Main entry point for the backend application
│   └── yarn.lock          # Lockfile for consistent package installations
├── frontend/
│   ├── dist/              # Production build files
│   ├── public/            # Public assets (e.g., favicon, static images)
│   ├── src/
│   │   ├── components/    # Reusable React components
│   │   ├── pages/         # Page components for different views (Home, Dashboard, etc.)
│   │   ├── services/      # API requests and business logic for the frontend
│   │   ├── styles/        # Styling files (CSS/SCSS)
│   │   ├── App.js         # Main app component with routing logic
│   │   ├── index.js       # Entry point for the React app
│   │   ├── setupTests.js  # Test setup configuration
│   ├── .env               # Environment variables for the frontend
│   ├── .prettierrc        # Prettier configuration for code formatting
│   ├── jsconfig.json      # JavaScript project settings
│   ├── package.json       # Dependencies and scripts for the frontend
│   ├── Dockerfile         # Docker configuration for the frontend
│   ├── docker-compose.yml # Docker Compose configuration for the whole project
└── README.md              # Documentation for the project
```

## Installation

### Prerequisites

Make sure you have the following installed:

- **Node.js**: Version 16.x or higher
- **Yarn**: A package manager
- **MongoDB**: Local or cloud database (e.g., MongoDB Atlas)
- **Docker**: (Optional) For containerized deployment

### Backend Setup

1. Navigate to the `api/` directory.

   ```bash
   cd api
   ```

2. Install dependencies using Yarn:

   ```bash
   yarn install
   ```

3. Create a `.env` file in the `api/` directory. Include the following environment variables:

   ```env
   MONGO_URI=<Your MongoDB URI>
   JWT_SECRET=<Your JWT Secret>
   STRIPE_SECRET=<Your Stripe Secret Key>
   ```

4. Run the backend server:

   ```bash
   yarn start
   ```

   The backend server should now be running at `http://localhost:5000`.

### Frontend Setup

1. Navigate to the `frontend/` directory.

   ```bash
   cd frontend
   ```

2. Install dependencies using Yarn:

   ```bash
   yarn install
   ```

3. Create a `.env` file in the `frontend/` directory. Include the following environment variables:

   ```env
   REACT_APP_API_URL=<Your Backend API URL>
   REACT_APP_STRIPE_PUBLIC_KEY=<Your Stripe Public Key>
   ```

4. Run the frontend development server:

   ```bash
   yarn start
   ```

   The frontend should now be running at `http://localhost:3000`.

## Deployment

### Backend

1. Use a service like **Heroku**, **AWS**, or **DigitalOcean** to deploy the backend.
2. Set your environment variables (e.g., MongoDB URI, JWT secret, Stripe keys) in the deployment environment.

### Frontend

1. Build the frontend for production:

   ```bash
   yarn build
   ```

2. Deploy the built files in the `frontend/dist/` directory to a static hosting service like **Netlify**, **Vercel**, or **GitHub Pages**.
