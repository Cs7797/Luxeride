# 🚗 LuxeRide

A modern full-stack car rental platform built with the MERN stack.

LuxeRide allows users to browse and book cars through a clean, responsive interface, while car owners can manage their vehicles, availability, and bookings through a dedicated dashboard.

## 🌐 Live Demo

**[Visit LuxeRide](https://luxeride-main.vercel.app)**

---

## ✨ Features

### 👤 User Features

- User registration and login
- JWT-based authentication
- Browse available rental cars
- View detailed car information
- Select rental dates
- Create and manage bookings
- Responsive and modern UI
- Secure authenticated routes

### 🚘 Owner Features

- Owner dashboard
- Add and manage vehicles
- Update vehicle information
- Manage vehicle availability
- View customer bookings
- Manage rental listings

### 💳 Payments

- Stripe Checkout integration
- Secure payment flow for bookings

---

## 🛠️ Tech Stack

### Frontend

- React.js
- Vite
- Tailwind CSS
- JavaScript
- Axios
- React Router
- Framer Motion

### Backend

- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT Authentication
- REST APIs

### Payments & Deployment

- Stripe
- MongoDB Atlas
- Vercel

---

## 🏗️ Project Structure

```text
LuxeRide/
│
├── client/
│   ├── src/
│   │   ├── assets/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── context/
│   │   └── ...
│   ├── public/
│   ├── package.json
│   └── vite.config.js
│
├── server/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   ├── config/
│   ├── server.js
│   └── package.json
│
└── README.md
