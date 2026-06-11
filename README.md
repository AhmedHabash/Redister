# Full Stack Register App

This is a simple full-stack authentication project built with:

- Backend: Node.js + Express
- Frontend: React + Axios

The project supports basic user authentication with Register and Login features.

---

# 📁 Project Structure

Full_Stack_regerster/
│
├── server/        # Backend (Node.js + Express)
└── regester-app/  # Frontend (React)

---

# 🚀 Backend (Server)

The backend is built using Node.js and Express.

## Structure

server/
│
├── controllers/
├── routes/
├── modules/
└── index.js

## Features

- Handles authentication logic
- Provides REST API endpoints
- Uses Express routing

## API Endpoints

### Register User
POST /register

### Login User
POST /login

---

# 💻 Frontend (React App)

The frontend is built using React.

## Structure

regester-app/
│
├── src/
│   ├── components/
│   │   ├── Signup.jsx
│   │   └── Login.jsx

## Features

- Signup component for user registration
- Login component for user authentication
- Uses Axios for HTTP requests

## API Communication

The frontend communicates with backend using Axios:

```js
axios.post("http://localhost:PORT/register", data);
axios.post("http://localhost:PORT/login", data);
