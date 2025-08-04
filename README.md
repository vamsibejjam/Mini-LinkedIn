# 🚀 Mini LinkedIn - Community Platform

A simple LinkedIn-like community platform built with **React** and **Firebase**, featuring user authentication, public post feed, and user profiles.

## 🔧 Tech Stack

* **Frontend:** React + Vite + TailwindCSS
* **Backend / Database:** Firebase (Auth + Firestore)
* **Hosting:** Vercel

## ✅ Features

### 1. 👤 User Authentication

* Register / Login with email & password
* Firebase Authentication
* Persisted user sessions

### 2. 📰 Public Post Feed

* Create and view text-only posts
* Posts display author name and timestamp

### 3. 😋 Profile Page

* View user’s profile
* Bio, email, name shown
* See all posts made by the user

### 4. 📱 Responsive Design

* Fully responsive UI using TailwindCSS

## 🧪 Demo Credentials

> You can register with any email/password or use the following:

```
Email: demo@ciaan.com
Password: 123456
```

## 🌐 Live Demo

👉 [**View Deployed App Here**](https://your-vercel-link.vercel.app)
(Replace with actual URL after deployment)

## 🚀 Getting Started (Local Setup)

### Prerequisites

* Node.js & npm
* Firebase project with Firestore and Authentication enabled

### Clone & Install

```bash
git clone https://github.com/your-username/mini-linkedin.git
cd mini-linkedin
npm install
```

### Setup Firebase Config

Create a `.env` file in root:

```
VITE_API_KEY=your_api_key
VITE_AUTH_DOMAIN=your_auth_domain
VITE_PROJECT_ID=your_project_id
VITE_STORAGE_BUCKET=your_storage_bucket
VITE_MESSAGING_SENDER_ID=your_sender_id
VITE_APP_ID=your_app_id
```

> You can get these values from your Firebase Console → Project Settings

### Start Dev Server

```bash
npm run dev
```

## 📦 Deployment

Deployed using [Vercel](https://vercel.com) for quick, free hosting.
To deploy:

1. Push your code to GitHub
2. Connect your GitHub repo to Vercel
3. Add your Firebase environment variables in Vercel project settings
4. Deploy 🎉

## 📁 Folder Structure

```
src/
├── components/
│   ├── Header.jsx
│   ├── PostCard.jsx
│   └── ProfileCard.jsx
├── pages/
│   ├── Home.jsx
│   ├── Login.jsx
│   ├── Register.jsx
│   └── Profile.jsx
├── firebase.js
├── App.jsx
└── main.jsx
```

## 📌 Notes

* Built within 48 hours as part of the **CIAAN Cyber Tech Internship** challenge.
* Focused on clean UI, responsive design, and working core features.
