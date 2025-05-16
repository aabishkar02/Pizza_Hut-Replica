# Pizza Hut Clone

A full-stack Pizza Hut replica project with a React.js frontend and Express.js backend. This project aims to replicate the design and functionality of the Pizza Hut website.

## Project Overview

### Frontend Features
- Responsive design for various screen sizes
- React components and hooks for state management
- Modern UI with Pizza Hut's brand styling
- Interactive menu and ordering system
- User authentication interface

### Backend Features (Work in Progress)
- Express.js server with MongoDB
- Authentication system (under development)
- RESTful API endpoints
- JWT-based authentication
- Secure password handling

## Tech Stack

### Frontend
- React.js
- JavaScript (ES6+)
- CSS (Flexbox and Media Queries)
- Vite (for bundling and development)

### Backend
- Node.js & Express.js
- MongoDB & Mongoose
- JWT for authentication
- bcrypt for password hashing

## Getting Started

### Prerequisites
- Node.js
- MongoDB
- Git

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/aabishkar02/Pizza_Hut-Replica.git
cd Pizza_Hut-Replica
```

2. **Frontend Setup**
```bash
cd frontend
npm install
npm run dev
```
Frontend will run on `http://localhost:5173`

3. **Backend Setup**
```bash
cd backend
npm install
```

Create a `.env` file in the backend directory:
```bash
PORT=5000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
```

Start the backend server:
```bash
npm run dev
```
Backend will run on `http://localhost:5000`

## Project Structure
```
Pizza_Hut-Replica/
├── frontend/
│   ├── src/
│   ├── public/
│   └── package.json
├── backend/
│   ├── routes/
│   ├── models/
│   ├── middleware/
│   ├── server.js
│   └── package.json
└── README.md
```

## API Endpoints (Work in Progress)

### Authentication
The authentication system is currently under development:

- `POST /api/auth/register`: User registration
- `POST /api/auth/login`: User login
- `POST /api/auth/forgot-password`: Password reset request
- `POST /api/auth/reset-password`: Reset password
- `POST /api/auth/verify-token`: Verify JWT token

Note: Authentication features are still being implemented.

## Development Status

### Completed
- Frontend UI components
- Responsive design
- Basic Express server setup
- MongoDB connection
- User model with password hashing
- Basic authentication routes

### Work in Progress
- Complete authentication system
- Email verification
- Password reset functionality
- Social login integration
- Session management
- Security features (Rate limiting, CSRF protection)

### Planned Features
- User profile management
- Order management system
- Payment integration
- Admin dashboard
- Analytics tracking
- Real-time order tracking

## Contributing
Feel free to fork the project and submit pull requests.

## License
This project is intended for learning purposes only and is not affiliated with Pizza Hut. 