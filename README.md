# Redister
 
A full-stack authentication app (Register / Login / Home) built with the MERN stack.
 
## Live Demo
 
- **Frontend:** https://redister-frontend.vercel.app
- **Backend API:** https://redister-backend.onrender.com
> Note: The backend is hosted on Render's free tier. If it's been inactive for 15 minutes, the first request may take 30–60 seconds to wake up.
 
## Tech Stack
 
**Frontend**
- React 19
- React Router DOM
- Axios
- Tailwind CSS
**Backend**
- Node.js
- Express
- MongoDB (Atlas) with Mongoose
- dotenv
**Deployment**
- Frontend: Vercel
- Backend: Render
- Database: MongoDB Atlas
## Project Structure
 
```
Full_Stack_regerster/
├── Server/          # Backend (Express API)
│   ├── controller/
│   ├── modules/
│   ├── routes/
│   ├── index.js
│   └── package.json
└── regester-app/    # Frontend (React)
    ├── src/
    └── package.json
```
 
## Features
 
- User registration
- User login with credential validation
- Redirect to home page on successful login
- Navbar, footer, and dynamic content fetched from the API
## Getting Started Locally
 
### Backend
 
```bash
cd Server
npm install
```
 
Create a `.env` file in `Server/`:
 
```
MONGO_URI=your_mongodb_connection_string
```
 
Run:
 
```bash
npm run dev    # development with nodemon
npm start      # production
```
 
Server runs on `http://localhost:3000` by default (or `process.env.PORT`).
 
### Frontend
 
```bash
cd regester-app
npm install
```
 
Create a `.env` file in `regester-app/`:
 
```
REACT_APP_API_URL=http://localhost:3000
```
 
Run:
 
```bash
npm start
```
 
App runs on `http://localhost:3000` (or `3001` if backend occupies 3000) — adjust ports as needed.
 
## API Endpoints
 
| Method | Endpoint       | Description           |
|--------|----------------|-----------------------|
| POST   | `/register`    | Register a new user   |
| POST   | `/login/log`   | Log in an existing user |
 
## Environment Variables
 
### Backend (`Server/.env`)
 
| Variable    | Description                      |
|-------------|-----------------------------------|
| `MONGO_URI` | MongoDB Atlas connection string  |
 
### Frontend (`regester-app/.env`)
 
| Variable             | Description                  |
|----------------------|-------------------------------|
| `REACT_APP_API_URL`  | Base URL of the backend API  |
 
## Deployment Notes
 
- **Backend (Render):**
  - Root Directory: `Server`
  - Build Command: `npm install`
  - Start Command: `npm start`
  - Add `MONGO_URI` as an environment variable
- **Frontend (Vercel):**
  - Root Directory: `regester-app`
  - Framework Preset: Create React App
  - Add `REACT_APP_API_URL` as an environment variable (pointing to the Render backend URL)
## Author
 
**Ahmed Essam**
- GitHub: [engayman2002](https://github.com/engayman2002)
- LinkedIn: [ahmed-essam-13959325a](https://www.linkedin.com/in/ahmed-essam-13959325a)
