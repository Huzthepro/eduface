CREATE DATABASE IF NOT EXISTS edu_docker_db;
USE edu_docker_db;

CREATE TABLE IF NOT EXISTS job_applications (
  id INT PRIMARY KEY,
  title VARCHAR(25) NOT NULL,
  company VARCHAR(50) NOT NULL,
  location VARCHAR(50) NOT NULL
);
