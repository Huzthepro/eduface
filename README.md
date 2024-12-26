# Eduface

Eduface is a full-stack application built with a solid backend architecture and a Vue.js frontend. It supports Docker configurations for easier deployment and development.

---

## Setup Options

Choose one of the following setup methods:

1. [Docker Compose Setup (Recommended)](#docker-compose-setup)
2. [Standard Setup (Manual Installation)](#standard-setup)

---

## Docker Compose Setup (Recommended)

### Clone or Download the Project

Clone the repository using the following command:

```bash
git clone https://github.com/Huzthepro/eduface.git
```

Or download the ZIP file from the GitHub repository and extract it to your desired location.

---

For Docker Compose setup simply run:

```bash
docker-compose up --build
```

> **Note:** A `docker-compose.override.yml` file is included for making changes directly to the running containers without rebuilding the images.

---

## Standard Setup (Manual Installation)

### Clone or Download the Project

Clone the repository using the following command:

```bash
git clone https://github.com/Huzthepro/eduface.git
```

Or download the ZIP file from the GitHub repository and extract it to your desired location.

---

### Install Dependencies
Navigate to the project directory and install all dependencies:

```bash
npm run install-all
```

### Run the Application

```bash
npm run dev
```

- Frontend: `http://localhost:5173`
- Backend: `http://localhost:3000`

---

## Environment Configuration
For manual setup, create the .env files in the root of both frontend and backend:

### Backend `.env`

```env
DB_HOST=127.0.0.1
DB_USER=root
DB_PASSWORD=yourPassword
DB_NAME=edu_local_db
PORT=3000
```

### Frontend `.env`

```env
VITE_BACKEND_URL=http://localhost:3000
```

---

## Database Setup

For manual setup, create the database and table:

```sql
CREATE DATABASE IF NOT EXISTS edu_local_db;
USE edu_local_db;

CREATE TABLE IF NOT EXISTS job_applications (
  id INT PRIMARY KEY,
  title VARCHAR(25) NOT NULL,
  company VARCHAR(50) NOT NULL,
  location VARCHAR(50) NOT NULL
);
```

Ensure your `.env` file settings match your database configuration.

---

## API Endpoints

### 1. Fetch Mock Applications
**GET**: `http://localhost:3000/api/jobs/fetch-jobs`

Returns mock job application data.

---

### 2. Save an Application
**POST**: `http://localhost:3000/api/jobs/save-job`

**Payload:**

```json
{
  "id": "7",
  "title": "test",
  "company": "test",
  "location": "test"
}
```

---

### 3. Get All Applications
**GET**: `http://localhost:3000/api/jobs/my-jobs`

Retrieves all job applications stored in the database.

---

### 4. Health Check
**GET**: `http://localhost:3000/api/health-check`

Tests database connectivity.

---

