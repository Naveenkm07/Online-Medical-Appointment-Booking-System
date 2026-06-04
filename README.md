<div align="center">
  <h1>🩺 OMABS</h1>
  <p><b>Online Medical Appointment Booking System</b></p>
  <p>A next-generation healthcare platform powered by AI matching and secure health records.</p>
  
  [![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactjs.org/)
  [![Vite](https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E)](https://vitejs.dev/)
  [![Netlify Status](https://api.netlify.com/api/v1/badges/your-netlify-badge-id/deploy-status)](https://app.netlify.com/sites/your-site-name/deploys)
</div>

<br />

## 🌟 Overview

**OMABS** is a comprehensive, production-ready React application that bridges the gap between patients and healthcare professionals. The system handles end-to-end medical workflows—from AI-powered doctor recommendations and appointment scheduling to secure health records and administrative analytics.

Built from a customized design system using Vanilla CSS and modern React idioms, the platform delivers a premium, highly responsive user experience.

## ✨ Key Features

### 🧑‍⚕️ Patient Portal
* **AI Symptom Checker:** Powered by BioBERT and collaborative filtering to match symptoms to the exact right specialist.
* **Smart Booking:** Intuitive calendar slot selection with instant confirmation.
* **Health Records:** Secure document management and access to consultation histories.

### ⚕️ Doctor Portal
* **Availability Management:** Set weekly schedules and time blocks.
* **Patient Queue:** Live feed of upcoming consultations with quick access to patient medical histories.
* **Analytics:** Track consultation metrics, ratings, and revenue.

### 🛡️ Admin Dashboard
* **System Monitoring:** Live KPI widgets, API health latency tracking, and security status.
* **Doctor Verification:** Streamlined approval workflows for medical credentials.
* **Blockchain Audits:** Tamper-proof, immutable ledger logs for all health record access (Simulated).

## 🚀 Tech Stack

* **Framework:** [React 18](https://react.dev/) + [Vite](https://vitejs.dev/)
* **Routing:** `react-router-dom` v6 (Client-side routing)
* **State Management:** React Context API + `useReducer`
* **Styling:** Custom Vanilla CSS Design System (CSS Variables, Flexbox/Grid, Micro-animations)
* **Deployment:** Pre-configured for automated [Netlify](https://www.netlify.com/) deployment (`netlify.toml` included)

## 📦 Quick Start

Follow these steps to run the project locally on your machine.

### Prerequisites
* Node.js (v16.0 or higher)
* npm or yarn

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Naveenkm07/Online-Medical-Appointment-Booking-System.git
   cd Online-Medical-Appointment-Booking-System
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

4. **Build for production:**
   ```bash
   npm run build
   ```

## 📂 Project Structure

```text
omabs-react/
├── public/                 # Static assets and Netlify _redirects
├── src/
│   ├── assets/             # Images, SVG icons, illustrations
│   ├── components/         # Reusable UI components (Buttons, Cards, Navbars)
│   ├── context/            # Global State (AppContext, ToastContext)
│   ├── data/               # Mock data (Doctors, Appointments, Logs)
│   ├── layouts/            # Dashboard and Auth wrappers
│   ├── pages/              # Route components categorized by role
│   │   ├── admin/          # Admin Control Panel
│   │   ├── doctor/         # Doctor Portal
│   │   ├── ml/             # BioBERT & AI Chatbot Visualizations
│   │   ├── patient/        # Patient Dashboard
│   │   ├── public/         # Landing, Splash, and Auth screens
│   │   └── utility/        # 404, Offline, Maintenance, Design System
│   ├── router/             # React Router configuration
│   ├── utils/              # Helper functions (Formatting, Routing logic)
│   ├── App.jsx             # Root application wrapper
│   ├── main.jsx            # React entry point
│   └── styles.css          # Core CSS Design System tokens & utilities
├── index.html              # HTML shell
├── netlify.toml            # Netlify deployment configuration
└── package.json            # Dependencies and scripts
```

## 🎨 Design System

OMABS relies on a robust, bespoke CSS design system (`src/styles.css`). It utilizes dynamic CSS variables for themes (Light/Dark mode), spacing tokens, typography (Poppins/Inter), and smooth micro-interactions. You can view the full UI kit by navigating to `/design-system` in the running app.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! 
Feel free to check the [issues page](https://github.com/Naveenkm07/Online-Medical-Appointment-Booking-System/issues) if you want to contribute.

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.
