# Secure User Profile & Access Control System

## Project Overview
This project implements a secure user identity and profile management system as part of the Lenden Club pre-interview assessment. The system focuses on **secure authentication, data protection, and clean API design**.

It provides JWT-based authentication, encrypted storage of sensitive user information (Aadhaar/ID), and a protected profile API that decrypts data only when accessed by an authenticated user. The implementation prioritizes correctness, security, and clarity over unnecessary complexity.

---

## Tech Stack

### Backend
* **Runtime:** Node.js
* **Framework:** Express.js
* **Database:** SQLite (persistent database)
* **Authentication:** JWT (JSON Web Tokens)
* **Security:** AES-256 encryption (for sensitive data), bcrypt (for password hashing)

### Frontend
* **Framework:** React
* **HTTP Client:** Axios

---

## Key Features
* ✅ **User Registration & Login:** secure JWT-based authentication.
* ✅ **Password Security:** Hashing using `bcrypt`.
* ✅ **Data Encryption:** Aadhaar/ID numbers are encrypted at rest using AES-256.
* ✅ **Protected API:** Secure profile endpoints protected by JWT middleware.
* ✅ **On-Demand Decryption:** Decryption of Aadhaar/ID occurs only at the API layer for authenticated users.
* ✅ **Frontend Integration:** Basic React interface for login and profile viewing.
* ✅ **Error Handling:** Comprehensive client-side and server-side error management.

---

## Setup & Run Instructions

### 1. Backend Setup
Navigate to the backend directory, install dependencies, and start the server.

### Backend Setup
```bash
cd backend
npm install
npm run dev
```
> The Backend runs on: `http://localhost:5000`

### 2. Frontend Setup
Open a new terminal, navigate to the frontend directory, install dependencies, and start the React app.

> The Frontend runs on: `http://localhost:3000`

---

## API Documentation

### Authentication APIs

#### 1. Register User
Creates a new user account.

* **Endpoint:** `POST /auth/register`
* **Body:**
    ```
    {
      "name": "User Name",
      "email": "user@email.com",
      "password": "password",
      "aadhaar": "1234-5678-9012"
    }
    ```

#### 2. Login User
Authenticates a user and returns a session token.

* **Endpoint:** `POST /auth/login`
* **Body:**
    ```
    {
      "email": "user@email.com",
      "password": "password"
    }
    ```
* **Response:** Returns a JWT token upon successful authentication.

### Profile API (Protected)

#### 3. Get User Profile
Retrieves the authenticated user's details with decrypted sensitive data.

* **Endpoint:** `GET /profile`
* **Headers:**
    * `Authorization`: `Bearer <JWT_TOKEN>`
* **Response:**
    ```
    {
      "id": 1,
      "name": "User Name",
      "email": "user@email.com",
      "aadhaar": "1234-5678-9012"
    }
    ```

---

## Database Schema

The project uses a `users` table in SQLite.

| Column Name | Type | Description |
| :--- | :--- | :--- |
| `id` | INTEGER | Primary Key, Auto-increment |
| `name` | TEXT | Full name of the user |
| `email` | TEXT | Unique email address |
| `password` | TEXT | Hashed password (bcrypt) |
| `aadhaar_encrypted` | TEXT | AES-256 encrypted Aadhaar number |

---

## AI Tool Usage Log

AI-based development tools were used selectively to improve productivity while maintaining full control over design decisions and implementation.

**AI-assisted tasks included:**
* Generating initial Express server boilerplate.
* Creating AES-256 encryption and decryption utility functions.
* Drafting JWT authentication middleware.
* Assisting with debugging and API testing during development.

> **Note:** Core application logic, security handling, database design, and frontend-backend integration were implemented and validated manually.

**Effectiveness Score:** 4 / 5
AI tools helped accelerate boilerplate setup and debugging, allowing more focus on secure authentication, encryption logic, and correct API integration. Minor refinements were required to tailor generated code to specific project requirements.

