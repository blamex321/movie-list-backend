# Movie Library Web Application

## Features
1. **User Authentication** (Sign In/Sign Up)
2. **Search Movies** using OMDB API
3. **Create and Manage Movie Lists** (public and private)
4. **Responsive and User-Friendly UI**

## Running the Project Locally

### Backend

1. **Clone the backend repository:**
   ```bash
   git clone https://github.com/blamex321/movie-list-backend.git
   cd movie-list-backend
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Add a `.env` file** with the following variables:
   ```env
   MONGO_URI=your_mongodb_uri (replace with your details)
   JWT_SECRET=your_jwt_secret (replace with your details)
   ```

4. **Start the server:**
   ```bash
   node index.js
   (OR)
   nodemon
   ```

### Frontend

1. **Clone the frontend repository:**
   ```bash
   git clone https://github.com/blamex321/movie-list-frontend.git
   cd movie-list-frontend
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Add a `.env` file** with the following variable:
   ```env
   REACT_APP_OMDB_API_KEY=your_omdb_api_key
   JWT_SECRET=your_jwt_secret #(same as backend)
   REACT_APP_BACKEND_URL=your_backend_url #(include "/api" at the end)
   ```

4. **Start the frontend:**
   ```bash
   npm start
   ```

## Deployment

### Backend

**Deploy the backend on Heroku:**

1. **Create a new Heroku app.**
2. **Push the code to Heroku.**
   ```bash
   git push heroku main
   ```
3. **Set the environment variables on Heroku:**
   ```bash
   heroku config:set MONGO_URI=your_mongodb_uri
   heroku config:set JWT_SECRET=your_jwt_secret
   ```

### Frontend

**Deploy the frontend on Vercel/Netlify:**

1. **Create a new Vercel/Netlify project.**
2. **Connect your repository.**
3. **Set the environment variables on Vercel/Netlify.**

## Links

- [Deployed Application (frontend)](https://main.d3h6y8slh0sgjz.amplifyapp.com/login)
- [Backend Code](https://movie-list-backend-68qd.onrender.com/api)

## Project Structure

### Backend Repository
```
backend/
├── models/
│   ├── User.js
│   └── MovieList.js
├── routes/
│   ├── auth.js
│   └── movieList.js
├── middleware/
│   └── auth.js
├── .env
├── server.js
└── package.json
```

### Frontend Repository
```
frontend/
├── public/
├── src/
│   ├── components/
│   │   ├── Login.js
│   │   ├── Register.js
│   │   ├── MovieSearch.js
│   │   ├── MovieList.js
│   │   └── ProtectedRoute.js
│   ├── context/
│   │   └── AuthContext.js
│   ├── App.js
│   ├── index.js
│   └── .env
└── package.json
```
