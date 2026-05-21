# 🏟️ SportNest Server

**Backend API for SportNest — Sports Facility Booking Platform**

> RESTful API server that powers the SportNest platform, handling facilities, bookings, and authentication.

---

## 📁 GitHub Repository

🔗 [https://github.com/ahanafintesher/sportsnest-server](https://github.com/ahanafintesher/sportsnest-server)

---

## 🎯 Purpose

SportNest Server is the backend of the SportNest application. It provides:
- REST API endpoints for managing sports facilities
- Booking management for users
- JWT-based authentication verification
- MongoDB database integration

---

## ✨ Features

- 🏟️ **Facilities API** — Create, read, update, and delete sports facilities
- 📅 **Bookings API** — Manage user bookings
- 🔐 **Auth Middleware** — Secure routes using JWT verification via `jose-cjs`
- 🌐 **CORS Support** — Cross-origin requests enabled for frontend integration
- ⚙️ **Environment Config** — Secure config management with `dotenv`

---

## 📦 NPM Packages Used

| Package | Version | Purpose |
|---|---|---|
| `express` | ^5.2.1 | Web framework for building REST APIs |
| `mongodb` | ^7.2.0 | MongoDB database driver |
| `cors` | ^2.8.6 | Enable Cross-Origin Resource Sharing |
| `dotenv` | ^17.4.2 | Load environment variables from `.env` |
| `jose-cjs` | ^6.2.3 | JWT verification for authentication |

---

## 🚀 Getting Started

### Prerequisites

- Node.js (v18+)
- MongoDB database

### Installation

```bash
# Clone the repository
git clone https://github.com/ahanafintesher/sportsnest-server.git

# Navigate to the project directory
cd sportsnest-server

# Install dependencies
npm install
```

### Environment Variables

Create a `.env` file in the root directory:

```env
PORT=5000
MONGODB_URI=your_mongodb_connection_string
```

### Run the Server

```bash
node index.js
```

Server will start on [http://localhost:5000](http://localhost:5000)

---

## 🛠️ Built With

- **Node.js** — Runtime environment
- **Express.js** — Web framework
- **MongoDB** — Database
- **jose-cjs** — JWT Authentication
- **Vercel** — Deployment

---

## 🔗 Related

- 🌐 **Frontend Repo:** [SportNest Client](https://github.com/ahanafintesher/Assignment-09-SportsNest)
- 🚀 **Live Site:** [https://sports-nest-ten.vercel.app](https://sports-nest-ten.vercel.app)

---

## 👤 Author

**Ahanaf Intesher**

---

> ⭐ If you like this project, give it a star on GitHub!
