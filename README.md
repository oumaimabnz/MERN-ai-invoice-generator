# 🧾 MERN AI Invoice Generator

An AI-powered **Invoice Management Web Application** built with the **MERN stack** (MongoDB, Express, React, Node.js).  
This application allows users to **create, manage, and analyze invoices**, with integrated **AI features** such as invoice text parsing and automatic reminder generation.

This project demonstrates **full-stack development**, secure authentication, REST APIs, and real-world AI integration in a modern web application.

---

## 🚀 Live Demo

👉 https://mern-ai-invoice-generator.vercel.app/

---

## 🧰 Tech Stack

**Frontend**
- **React**
- **React Router**
- **Axios**
- **Tailwind CSS**
- **Vite**

**Backend**
- **Node.js**
- **Express.js**
- **MongoDB (Mongoose)**

**AI Integration**
- **AI API (Groq / LLM-based service)**
- Invoice text parsing
- Reminder message generation

---

## ✨ Features

- 🔐 User authentication (Register / Login)
- 🧾 Create, update, view, and delete invoices
- 📊 Dashboard with invoice summary statistics
- 🤖 AI-powered invoice text parsing
- ✉️ AI-generated payment reminder messages
- 🛡️ Protected routes for authenticated users
- 📱 Responsive and clean UI

---

## 📁 Project Structure

````
MERN-ai-invoice-generator/
├── backend/
│ ├── controllers/ # Business logic
│ ├── models/ # Mongoose schemas
│ ├── routes/ # API routes
│ ├── middleware/ # Auth & error handling
│ └── server.js # Backend entry point
│
├── frontend/
│ ├── public/
│ ├── src/
│ │ ├── components/ # Reusable UI components
│ │ ├── pages/ # Pages (Login, Dashboard, Invoices)
│ │ ├── context/ # Auth context
│ │ ├── utils/ # API paths & helpers
│ │ ├── App.jsx
│ │ └── main.jsx
│
├── .gitignore
├── package.json
└── README.md
````

---

## 🎯 Purpose of This Project

- Practice building a **complete MERN stack application**
- Implement **secure authentication and protected routes**
- Integrate **AI services** into real business workflows
- Design a scalable backend with clean API architecture
- Build a modern, responsive frontend UI

---

## 🛠️ Getting Started

### 1️⃣ Clone the repository

```bash
git clone https://github.com/oumaimabnz/MERN-ai-invoice-generator.git
cd MERN-ai-invoice-generator
````
2️⃣ Backend Setup

````bash
cd backend
npm install
````
Create a .env file inside backend/:
````bash
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
GROQ_API_KEY=your_ai_api_key
PORT=8000
BASE_URL= "http://localhost:8000"
FRONTEND_URL= "http://localhost:5173"
````
Run the backend:
````bash
npm run dev
````
3️⃣ Frontend Setup

````bash
cd frontend
npm install
````
Create a .env file inside backend/:

````bash
VITE_BACKEND_URL="http://localhost:8000"
````
Run the frontend:
````bash
npm run dev
````
Open your browser at:

http://localhost:5173

---

### 🚢 Deployment

This project can be deployed using:

- Render (Backend + Fullstack deployment)
- Vercel / Netlify (Frontend only)
- MongoDB Atlas (Database)

Make sure to configure environment variables correctly for production.

---

### 🎯 What This Project Demonstrates

- Full-stack MERN architecture
- REST API design and integration
- Authentication with JWT
- AI integration in real use cases
- Clean and maintainable project structure
- Production-ready deployment workflow

---

### 📬 Contact

👤 Oumaima Benaziza

🔗 LinkedIn: https://www.linkedin.com/in/oumaima-benaziza

📧 Email: oumaimabenaziza21@gmail.com

---

### ⭐ Support

If you like this project or find it useful, feel free to star ⭐ the repository.
Feedback, issues, and suggestions are always welcome!



