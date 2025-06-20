# 🧠 RFC Skillhub – Backend API

This is the **backend of RFC Skillhub**, a scalable internal platform designed to track employee training and certifications. It’s built using **NestJS** with a **microservices architecture**, and deployed to **Azure Kubernetes Service (AKS)** via **GitHub Actions CI/CD pipelines**.

The backend exposes RESTful APIs through an API Gateway and handles all communication via **RabbitMQ**.

---

## ⚙️ Architecture Overview

- 5 Microservices:
  - `auth` – JWT authentication and user management
  - `courses` – Courses catalog management
  - `certif` – Certification sessions
  - `todo` – Personal To-Do list tracker
  - `api-gateway` – Main API router (validates JWT, forwards requests)
- Asynchronous communication via RabbitMQ
- PostgreSQL for auth, MongoDB Atlas for other services
- Each service is containerized and deployed independently via manifests

---

## 🛠 Tech Stack

- **Framework:** NestJS (Node.js + TypeScript)
- **Communication:** RabbitMQ (event-driven)
- **Auth & Routing:** JWT + API Gateway
- **Databases:**
  - PostgreSQL (auth microservice)
  - MongoDB Atlas (courses, certifs, todo)
- **Containerization:** Docker
- **CI/CD:** GitHub Actions
- **Deployment:** Azure Kubernetes Service (AKS)
- **API Gateway:** Built-in with NestJS and secured with AuthGuard

---

## 🔐 Security Features

- JWT-based user authentication
- Bcrypt-hashed passwords
- Role-based access for admin vs trainee
- API Gateway verifies tokens before forwarding

---

## 🚀 Deployment Pipeline

Each microservice has:
- Its own Dockerfile
- Its own deployment manifest (YAML)
- GitHub Actions CI/CD pipeline for:
  - Building Docker images
  - Pushing to Azure Container Registry (ACR)
  - Deploying to AKS using `kubectl`

---

## 🧪 Testing

- Manual API testing done via **Postman**
- Microservice communication verified via **RabbitMQ dashboard**
- Token generation and route access verified via console + frontend integration

---

## 📄 License

This backend was developed for educational and internal company use. All rights reserved to RFC.



