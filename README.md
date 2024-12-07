
# Eduface

Eduface is a full-stack application designed to streamline job application management. This repository contains both the front-end and back-end components of the project.

---

## Getting Started

### Clone or Download the Project

Clone the repository using the following command:

```bash
git clone https://github.com/Huzthepro/eduface.git
```

Or download the ZIP file from the GitHub repository and extract it to your desired location.

---

### Installation

Navigate to the project directory and run the following command to install all dependencies (root, frontend, and backend):

```bash
npm run install-all
```

---

### Running the Application

Start both the front-end and back-end servers simultaneously by running:

```bash
npm run dev
```

- The front-end will be available at `http://localhost:5173` (or another configured port).
- The back-end will run on port `3000` (or the value specified in the `.env` file).

---

## Environment Configuration

Ensure you have a `.env` file in the `backend` root folder with the following contents:

```env
DB_HOST=127.0.0.1
DB_USER=root
DB_PASSWORD=yourPassword
DB_NAME=job_applications
PORT=3000
```

---

## Database Setup

Set up the database by creating a table using the following SQL schema:

```sql
CREATE TABLE IF NOT EXISTS job_applications (
  id INT PRIMARY KEY,
  title VARCHAR(25) NOT NULL,
  company VARCHAR(50) NOT NULL,
  location VARCHAR(50) NOT NULL
);
```

Make sure your database connection information in the `.env` file matches your local or remote database setup.

---

## API Endpoints

### 1. Fetch Mock Applications
**GET**: `http://localhost:3000/api/applications/fetch-applications`

This endpoint returns mock job application data.

---

### 2. Save an Application to the Database
**POST**: `http://localhost:3000/api/applications/save-application`

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

### 3. Get All Applications in the Database
**GET**: `http://localhost:3000/api/applications/my-applications`

This endpoint retrieves all job applications stored in the database.

---
