# 🔍 Lost & Found Web Application

A full-stack web application to help users post and find lost or found items. Built with React, Firebase, Node.js, Express, MongoDB, Tailwind CSS, and JWT authentication.

## 🌐 Live Site

[Visit Live Site](https://your-live-site-link.com)

---

## 📌 Features

### 🔧 Core Functionality

- 🔐 **Authentication System**
  - Email/password login & registration
  - Social login (Google or GitHub)
  - Password validation and error toasts
  - JWT-based secure access to protected routes

- 🧭 **Navigation Bar**
  - Conditional Login/Logout
  - Profile Picture with dropdown (add, manage, recovered items)
  - Dynamic display name on hover
  - Fully responsive UI

- 🏠 **Home Page**
  - Banner/Slider (3 informative slides)
  - Latest 6 Lost & Found items with View Details
  - "See All" redirects to full list
  - 2 Extra meaningful sections
  - Framer Motion animations

- 📥 **Add Lost & Found Item** (`/addItems`)
  - Protected form with fields like title, category, location, date, etc.
  - Auto-filled user contact info
  - React Datepicker integration
  - Saves to MongoDB with success toast

- 🔍 **Post Details Page** (`/items/:id`)
  - All item details displayed
  - Conditional action button:
    - Found This!
    - This is Mine!
  - Opens modal with recovery info
  - On submit: marks item as recovered

- 🗃️ **All Items Page** (`/allItems`)
  - Cards for all Lost & Found posts
  - View Details button
  - Search by title or location

- 🛠️ **Manage My Items** (`/myItems`)
  - Table showing user's posts
  - Update/Delete functionalities
  - Update page pre-fills data

- ♻️ **All Recovered Items** (`/allRecovered`)
  - 3-column card layout
  - Layout toggle to table view
  - Shows recovery info
  - Handles no-data state

### 🛡️ Protected Routes (JWT)

- `/addItems`
- `/myItems`
- `/updateItems/:id`
- `/allRecovered`
- `/items/:id`

---

## 🛠️ Technologies Used

### Frontend
- React
- React Router DOM
- Tailwind CSS
- Framer Motion
- Axios
- React Hook Form
- React Datepicker
- Toastify / SweetAlert

### Backend
- Node.js
- Express.js
- MongoDB
- JWT

### Auth & Hosting
- Firebase Authentication
- Firebase Hosting / Vercel / Netlify

---

## 📦 Installation Instructions

### 🔻 Client Setup

```bash
git clone https://github.com/your-client-repo.git
cd client
npm install
npm run dev
