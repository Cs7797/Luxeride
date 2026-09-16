# Luxeride

A full-stack car rental booking application built with the MERN stack. The platform allows users to browse cars, check their details, choose pickup and booking dates, and manage their bookings.

It also includes an owner dashboard for managing the car inventory and viewing bookings. ImageKit is used for handling car images, while JWT is used for user authentication.

## Features

### User Features

- User registration and login
- JWT-based authentication
- Browse available cars
- Search and filter cars
- View detailed information about a car
- Select pickup location
- Select pickup and booking dates
- Book a car
- View personal bookings
- Manage existing bookings

### Owner Dashboard

- Owner authentication
- Add new cars
- Upload car images
- Manage listed cars
- View booking information
- Manage car availability
- View rental activity through the dashboard

### Other Features

- Responsive UI
- Image upload and optimization using ImageKit
- Protected routes
- REST API based backend
- MongoDB database
- Date-based booking system
- Form validation
- Deployment-ready frontend and backend

---

## Tech Stack

### Frontend

- React.js
- Vite
- React Router
- Axios
- Tailwind CSS
- JavaScript

### Backend

- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT
- REST APIs

### Services

- ImageKit - Image storage and optimization
- MongoDB Atlas - Cloud database

---

## Application Flow

The application is divided into two main parts: the customer side and the owner side.

```text
                         Car Rental Platform
                                  |
                 +----------------+----------------+
                 |                                 |
              Customer                           Owner
                 |                                 |
        Browse Available Cars              Owner Dashboard
                 |                                 |
          View Car Details                  Add / Manage Cars
                 |                                 |
         Select Booking Dates               View Bookings
                 |                                 |
             Book Car                       Manage Inventory
                 |
          View My Bookings
