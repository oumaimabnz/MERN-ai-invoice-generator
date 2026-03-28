# MERN AI Invoice Generator

An AI-powered **Invoice Management Web Application** built with the **MERN stack** (MongoDB, Express, React, Node.js).  
This application allows users to **create, manage, and analyze invoices**, with integrated **AI features** such as invoice text parsing and automatic reminder generation.

This project demonstrates **full-stack development**, secure authentication, REST APIs, and real-world AI integration in a modern web application.

---

## Live Demo

👉 https://mern-ai-invoice-generator.vercel.app/

---

## Problem & Motivation

Managing invoices manually is time consuming and error prone, especially when dealing with unstructured data (e.g., text-based invoices or inconsistent formats).

This project explores how **AI can be integrated into a web application to automate invoice processing**, reduce manual effort, and improve data reliability.

---

## Solution

- Built a full-stack system to manage invoice lifecycle (create → track → analyze)
- Integrated AI services to:
  - Extract structured data from invoice text
  - Generate contextual payment reminders
- Designed a clean and scalable architecture separating frontend, backend, and AI workflows

---

## Features

- Authentication system with protected routes
- Full invoice lifecycle management (CRUD operations)
- Dashboard with aggregated invoice insights
- AI-powered invoice text parsing (unstructured → structured data)
- AI-generated reminder messages
- Secure API communication with JWT-based authentication
- Responsive UI for real-world usability

---

## Architecture Overview

The application follows a **modular full-stack architecture**:

- **Frontend (React)**
  - Component-based UI
  - Client-side routing using React Router
  - State management via Context API

- **Backend (Node.js / Express)**
  - REST API design
  - Business logic separation (controllers, routes, middleware)
  - Authentication & authorization

- **Database (MongoDB)**
  - Structured invoice storage
  - User-based data isolation

- **AI Integration Layer**
  - External LLM API used for:
    - text parsing
    - content generation
  - Designed to be easily replaceable or extendable
 
---

## Reliability & AI Evaluation

To ensure useful and consistent AI outputs:

- Tested AI-generated responses with different input formats  
- Refined prompts to improve structure and accuracy  
- Validated extracted invoice data before storing it  
- Focused on making outputs **usable in real application workflows**

---

## Tech Stack

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

## Project Structure

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

### Deployment

- Frontend: Vercel
- Backend: Render
- Database: MongoDB Atlas

---

### Contact

👤 Oumaima Benaziza

🔗 LinkedIn: https://www.linkedin.com/in/oumaima-benaziza

📧 Email: oumaimabenaziza21@gmail.com

---

### ⭐ Support

If you like this project or find it useful, feel free to star ⭐ the repository.
Feedback, issues, and suggestions are always welcome!



