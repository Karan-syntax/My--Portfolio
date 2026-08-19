# Thiranex Portfolio

This is the repository for my developer portfolio website, featuring a responsive React frontend and a Node.js/Express API backend. The system connects to a local MongoDB database to manage projects and record contact messages.

## Project Structure

```
├── Backend/          # Express API server & Mongoose schemas
├── frontend/         # Vite + React client-side application
└── package.json      # Root configuration to run both concurrently
```

## Setup & Installation

### Prerequisites
- Node.js (v18+)
- MongoDB (running locally on port 27017)

### Install Dependencies
Run the installation script from the project root to install modules for both frontend and backend:

```bash
npm run install:all
```

### Environment Variables
Create a `.env` file inside the `Backend` directory:

```env
PORT=5001
MONGO_URI=mongodb://127.0.0.1:27017/portfolio_db
```

## Running the Application

To run the frontend and backend servers concurrently:

```bash
npm run dev:all
```

Once running, the applications are available at:
- **Frontend client**: http://localhost:5174/ (or port 5173)
- **Backend API**: http://localhost:5001/

## API Endpoints

- `GET /api/projects` - Retrieves the seeded portfolio projects.
- `POST /api/contact` - Saves incoming message entries to MongoDB and triggers a mail forward.
- `GET /api/seed` - Pre-populates clean project data into MongoDB.
