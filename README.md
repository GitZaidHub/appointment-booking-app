# Appointment Booking App using Node.js, Express & MySQL

## Project Overview

This project is a full-stack Appointment Booking / User Management Application built using:

- HTML
- CSS
- JavaScript
- Node.js
- Express.js
- MySQL
- MVC Architecture

The application allows users to:

- Register new users
- View all registered users
- Delete users
- Store data in a MySQL database
- Fetch data using REST APIs
- Display data dynamically on the frontend

---

# Features

✅ User Registration Form

✅ Store User Data in MySQL Database

✅ Fetch and Display All Users

✅ Delete Users

✅ REST API Implementation

✅ MVC Folder Structure

✅ JSON Responses using `res.json()`

✅ CORS Support

✅ Express Middleware (`express.json()`)

---

# Tech Stack

## Frontend

- HTML
- CSS
- JavaScript
- Fetch API

## Backend

- Node.js
- Express.js

## Database

- MySQL

## Additional Packages

- mysql2
- cors

---

# Project Structure

```text
appointment-booking-app/
│
├── backend/
│   ├── config/
│   │   └── db.js
│   │
│   ├── controllers/
│   │   └── userController.js
│   │
│   ├── routes/
│   │   └── userRoutes.js
│   │
│   ├── app.js
│   ├── package.json
│   └── database.sql
│
└── frontend/
    ├── index.html
    ├── style.css
    └── script.js
```

---

# Database Setup

Create a database named:

```sql
CREATE DATABASE appointment_db;
```

Select the database:

```sql
USE appointment_db;
```

Create the users table:

```sql
CREATE TABLE users (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    phone VARCHAR(20) NOT NULL
);
```

---

# Installation

## Clone Project

```bash
git clone <repository-url>
```

## Navigate to Backend

```bash
cd backend
```

## Install Dependencies

```bash
npm install
```

Installed packages:

```bash
npm install express mysql2 cors
```

---

# Backend Configuration

## Database Connection

Create a MySQL connection using:

```javascript
mysql.createConnection()
```

Database configuration includes:

- Host
- Username
- Password
- Database Name

---

# API Endpoints

## Create User

### Request

```http
POST /api/users
```

### Request Body

```json
{
  "name": "Zaid",
  "email": "zaid@gmail.com",
  "phone": "9876543210"
}
```

### Response

```json
{
  "success": true,
  "message": "User Added Successfully"
}
```

---

## Get All Users

### Request

```http
GET /api/users
```

### Response

```json
{
  "success": true,
  "users": [
    {
      "id": 1,
      "name": "Zaid",
      "email": "zaid@gmail.com",
      "phone": "9876543210"
    }
  ]
}
```

---

## Delete User

### Request

```http
DELETE /api/users/:id
```

Example:

```http
DELETE /api/users/1
```

### Response

```json
{
  "success": true,
  "message": "User Deleted"
}
```

---

# Frontend Functionality

## User Registration

Users can enter:

- Name
- Email
- Phone Number

The form sends a POST request to:

```javascript
fetch("http://localhost:5000/api/users")
```

---

## Display Users

On page load:

```javascript
fetchUsers();
```

The frontend fetches all users from the database and displays them dynamically.

---

## Delete User

Each user entry contains a Delete button.

When clicked:

```javascript
DELETE /api/users/:id
```

The user is removed from both:

- Database
- Frontend UI

---

# Middleware Used

## express.json()

Used for parsing JSON request bodies.

```javascript
app.use(express.json());
```

---

## cors()

Used to solve Cross-Origin Resource Sharing issues between frontend and backend.

```javascript
app.use(cors());
```

---

# MVC Architecture

## Model Layer

Database table:

```text
users
```

Stores:

- id
- name
- email
- phone

---

## Controller Layer

Handles:

- Create User
- Get Users
- Delete User

File:

```text
controllers/userController.js
```

---

## Route Layer

Defines API routes.

File:

```text
routes/userRoutes.js
```

---

## View Layer

Frontend files:

```text
index.html
style.css
script.js
```

---

# How to Run

## Start MySQL Server

Ensure MySQL is running.

---

## Create Database

Run the SQL queries provided above.

---

## Start Backend Server

```bash
npm start
```

Server starts on:

```text
http://localhost:5000
```

---

## Run Frontend

Open:

```text
frontend/index.html
```

using Live Server.

---

# Learning Outcomes

After completing this project, I learned:

- How to connect Node.js with MySQL
- How to create REST APIs using Express
- How to perform CRUD operations using SQL queries
- How to use Fetch API for frontend-backend communication
- How to organize code using MVC Architecture
- How to handle JSON requests and responses
- How to solve CORS issues
- How to dynamically update UI using JavaScript

---

# Conclusion

This project demonstrates a complete full-stack application where user data is stored in a MySQL database and managed through Node.js APIs. The application follows MVC architecture, making the code clean, scalable, and easy to maintain while providing a practical understanding of frontend-backend integration.
