# 🚀 Mini LinkedIn - Community Platform

A simple LinkedIn-like community platform built with **React** and **Firebase**, featuring user authentication, a public post feed, and user profiles.

## 🔧 Tech Stack

* **Frontend:** React + Vite + Tailwind CSS
* **Backend / Database:** Firebase (Auth + Firestore)
* **Hosting:** Vercel

## ✅ Features

### 1. 👤 User Authentication

* Register / Login with email & password
* Firebase Authentication
* Persistent login sessions

### 2. 🔜 Public Post Feed

* Create and view text-only posts
* Posts display author name and timestamp
* Posts are public to all logged-in users

### 3. 😋 Profile Page

* View your own and others’ profiles
* Bio, email, and name displayed
* See all posts made by the user

### 4. 📱 Responsive Design

* Fully responsive UI using Tailwind CSS

## 🧪 Demo Credentials

You can register with your own credentials, or use the demo login:

```
Email: demo@ciaan.com  
Password: 123456
```
## 🚀 Getting Started (Local Setup)

### Prerequisites

* Node.js & npm
* A Firebase project with Authentication and Firestore enabled

### Clone & Install

```bash
git clone https://github.com/your-username/mini-linkedin.git
cd mini-linkedin
npm install
```

### Firebase Config

Firebase config is hardcoded inside `src/firebase.js`:

```js
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  ...
};
```

You can copy your Firebase credentials from your Firebase Console → Project Settings.

### Start Development Server

```bash
npm run dev
```

## 📦 Deployment (on Vercel)

1. Push your project to GitHub
2. Go to [https://vercel.com](https://vercel.com)
3. Import your GitHub repo
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

---
