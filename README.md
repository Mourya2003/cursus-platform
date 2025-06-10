# 📘 Cursus Platform

## 🛠️ Installation Guide

Follow the steps below to install the required tools for this project:

### 1. 🎞️ Install Node.js (includes npm)

* **Website:** [https://nodejs.org](https://nodejs.org)  
* Download the **LTS** version suitable for your OS (Windows, macOS, Linux).  
* Verify installation:

```bash
node -v  
npm -v
```

### 2. 🌳 Install MongoDB

* **Website:** [https://www.mongodb.com/try/download/community](https://www.mongodb.com/try/download/community)  
* Download and install **MongoDB Community Edition**.  
* Install MongoDB Compass (optional GUI).  
* Start MongoDB server:

On Linux/macOS:

```bash
mongod
```

On Windows: use **MongoDB Compass** or run it as a service.

### 3. 📝 Install Visual Studio Code

* **Website:** [https://code.visualstudio.com](https://code.visualstudio.com)  
* Download and install the latest version.  
* Install useful extensions (optional):  
  * ESLint  
  * Prettier  
  * MongoDB  
  * GitLens  

### 4. 🧬 Install Git

* **Website:** [https://git-scm.com](https://git-scm.com)  
* Download and install the latest stable version.  
* Configure Git:

```bash
git config --global user.name "Your Name"  
git config --global user.email "you@example.com"
```

### 5. 🔍 Install Postman

* **Website:** [https://www.postman.com/downloads](https://www.postman.com/downloads)  
* Download and install the appropriate version for your OS.  
* Use Postman to test your API endpoints easily.

---

## 📐 UI/UX Wireframes

Official design wireframes created in Figma for dashboard and course creation flows.

🔗 **[Figma Wireframes – Dashboard Design](https://www.figma.com/proto/n1XBl2Cd6tfZwVGmAMS63X/Dashboard-wireframes?node-id=1140-6414&t=eRllL7oAA8kTsDsy-1)**

### 🧩 Wireframes Include:

- 📊 Instructor Dashboard Layout  
- ➕ Course Creation Page Structure  
- 🧭 Sidebar and Navigation Elements  
- 🎨 Consistent use of fonts, spacing, and colors  
- 📱 Mobile responsive design considerations  
- Used by UI/UX instructor for reference and implementation

---

# 📘 Cursus Platform - GitBook Documentation

## 📌 Overview

Cursus is an educational web platform that provides seamless access to learning materials via modern authentication and a responsive dashboard. It is built with React (Vite) for the frontend and Express.js + MongoDB for the backend.

## 🧱 Tech Stack

| Layer     | Technologies                  |
|-----------|-------------------------------|
| Frontend  | React.js, Tailwind CSS, Vite  |
| Backend   | Node.js, Express.js           |
| Database  | MongoDB                       |
| Auth & State | JWT, bcrypt, dotenv        |

## 🔐 Authentication System

**Definition:**  
User authentication verifies identity before granting access to the platform. In this system, users can log in using:

- Social login (Facebook, Twitter, Google)  
- Email and password-based login

---

## 📁 Project Structure

```
cursus-platform/
├── client/                 # React frontend
│   └── ...                 # Components, pages, assets
├── server/                 # Node.js backend
│   ├── models/             # Mongoose models
│   └── server.js           # Main backend entry
├── package.json            # Project dependencies
├── tailwind.config.js      # Tailwind setup
└── vite.config.js          # Vite setup
```

## 🖥 Backend Script (from package.json)

```json
"scripts": {
  "start": "node src/server.js",
  "dev": "nodemon src/server.js"
}
```

---

## 🧩 UI Wireframes

### 📱 Mobile Dashboard Wireframe

- Sidebar navigation  
- Notification bell, theme toggle, profile access  
- Card-based content layout

### 🖥️ Desktop Dashboard Wireframe

- Sidebar with navigation  
- Header with user controls  
- Course or module cards arranged in a grid

---

## 🧠 Features

- 🔐 JWT-based secure login system  
- 🌐 Social logins (OAuth)  
- 🛠 Modular and scalable folder structure  
- 🎨 Responsive UI with Tailwind CSS  
- 📚 Course/dashboard structure mock  

---

## 🔄 API Endpoints

| Method | Endpoint    | Description             |
|--------|-------------|-------------------------|
| POST   | /signup     | Register new user       |
| POST   | /signin     | Authenticate user       |
| GET    | /dashboard  | Fetch dashboard content |

---

## ✅ Run Locally

```bash
# Client
cd client
npm install
npm run dev

# Server
cd server
npm install
npm run dev
```

---

## 🧪 Future Enhancements

- Add user roles (Admin, Instructor, Student)  
- Course purchase and progress tracking  
- Notifications and real-time messaging
