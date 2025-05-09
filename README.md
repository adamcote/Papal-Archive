# Papal Archive

A comprehensive web application for exploring papal history, from the early Church to the present day. This project aims to provide an interactive and educational platform for studying the history of the papacy, including detailed biographies, timelines, and historical context.

## Current Version (v0.1.0)

### What's Working
- Basic application structure and navigation
- Minimal design implementation
- Frontend-backend connection
- Database setup and configuration

### What's Not Working Yet
- Pope biographies tab (under development)
- Papal timeline (currently shows empty graph)
- Search functionality
- User authentication
- Historical document uploads

## Tech Stack

- **Frontend:**
  - React with TypeScript
  - Material-UI for components
  - Chart.js for timeline visualization
  - React Router for navigation

- **Backend:**
  - Node.js
  - Express.js
  - MongoDB for database
  - JWT for authentication (planned)

## Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (v14 or higher)
- npm (comes with Node.js)
- MongoDB (v8.0 or higher)
- Git

## Setup Instructions

1. **Clone the repository**
   ```bash
   git clone [repository-url]
   cd papal-archive
   ```

2. **Set up MongoDB**
   - Install MongoDB if you haven't already
   - Create data directory:
     ```bash
     mkdir "C:\data\db"
     ```
   - Start MongoDB:
     ```bash
     mongod
     ```

3. **Backend Setup**
   ```bash
   cd backend
   npm install
   ```
   Create a `.env` file in the backend directory with:
   ```
   PORT=5000
   MONGODB_URI=mongodb://127.0.0.1:27017/papal-archive
   JWT_SECRET=your-secret-key-here
   NODE_ENV=development
   CORS_ORIGIN=http://localhost:3000
   JWT_EXPIRES_IN=24h
   ```

4. **Frontend Setup**
   ```bash
   cd frontend
   npm install
   ```

5. **Running the Application**
   - Start MongoDB (in one terminal):
     ```bash
     mongod
     ```
   - Start the backend (in another terminal):
     ```bash
     cd backend
     npm start
     ```
   - Start the frontend (in a third terminal):
     ```bash
     cd frontend
     npm start
     ```
   - Access the application at `http://localhost:3000`

## Future Features

### Phase 1 (Next Release)
- Complete pope biographies with detailed information
- Interactive papal timeline with historical events
- Basic search functionality
- User authentication system

### Phase 2
- Historical document uploads and management
- Advanced search with filters
- User contributions and comments
- API documentation

### Phase 3
- Mobile-responsive design
- Offline access capabilities
- Multi-language support
- Advanced data visualization

## Contributing

This project is currently in its early stages. Contributions are welcome! Please read our contributing guidelines before submitting pull requests.

## License

[License information to be added]

## Contact

[Contact information to be added] 