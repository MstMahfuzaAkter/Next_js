# 🛒 GroceryHub – Full Stack Grocery Management System

A modern grocery shop project built with **Next.js**, **Firebase Authentication**, and **MongoDB**.  
Supports **Firebase login**, **mock login**, **product management**, and a **fully responsive design**.

---

## 🚀 Features

- 🔐 User Authentication
  - Register / Login / Logout
  - Firebase Email/Password
  - Google OAuth login
  - Mock Login for testing (`admin@test.com` / `123asdA!`)
- 📦 Product Management
  - Add, Edit, Delete, View Products
  - Admin-only dashboard
  - Mock or Firebase users can manage their products
- 🖥️ Responsive UI
  - Desktop & Mobile-friendly
- 🔥 Real-time Database using MongoDB + Express API
- 🎨 Clean UI using Tailwind CSS
- 🔔 Notifications via React Toastify
- ⚡ Alerts using SweetAlert2
- 🖼️ Swiper slider on Home Page
- 🛠️ Modular component-based structure

---

## 🛠️ Tech Stack

- Next.js 16+ (App Router)
- React + Context API
- Firebase Authentication
- MongoDB + Express.js backend
- Tailwind CSS
- React Toastify & SweetAlert2
- Swiper Slider

---

## 📂 Project Structure

src/
├─ app/
│ ├─ layout.js → Root layout (Navbar + Footer + AuthProvider)
│ ├─ globals.css
│ ├─ page.jsx → Home page
│ ├─ about/page.jsx
│ ├─ contact/page.jsx
│ ├─ AddProduct/page.jsx
│ ├─ ManageProducts/page.jsx
│ ├─ Login/page.jsx
│ └─ Register/page.jsx
├─ components/
│ ├─ Navbar.jsx
│ ├─ Footer.jsx
│ ├─ ProductCard.jsx
│ ├─ ProductTable.jsx
│ └─ EditModal.jsx
├─ context/
│ ├─ AuthContext.jsx
│ └─ AuthProvider.jsx
├─ firebase/
│ └─ firebase.config.js
└─ utils/
└─ helpers.js

yaml
Copy code

---

## 🔧 Setup & Installation

### 1️⃣ Clone Project

```bash
git clone https://github.com/your-username/groca.git
cd groca
2️⃣ Install Dependencies
bash
Copy code
npm install
3️⃣ Setup Environment Variables
Create a .env.local in project root:

ini
Copy code
NEXT_PUBLIC_API_URL=http://localhost:3000
NEXT_PUBLIC_FIREBASE_API_KEY=your_firebase_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_firebase_auth_domain
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_firebase_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_firebase_storage_bucket
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_firebase_app_id
Replace values with your Firebase project config.

4️⃣ Run Development Server
bash
Copy code
npm run dev
Visit http://localhost:3000.

📝 Mock Login Credentials
Email: admin@test.com

Password: 123asdA!

✅ No Firebase setup required to test mock login.

📦 Backend API (Express + MongoDB)
GET /shop – Get all products

GET /shop/:id – Get product by ID

POST /shop – Add new product

GET /ManageProducts?email=xyz – Products by user

PUT /ManageProducts/:id – Update product

DELETE /ManageProducts/:id – Delete product