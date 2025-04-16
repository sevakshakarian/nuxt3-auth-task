# Nuxt 3 Auth Task

This is a small web application built with Nuxt 3 and TypeScript as part of a test assignment. It demonstrates login authentication, password hashing, session handling, two-factor verification, and user data display.

## 🚀 Features

- ✅ Login page with validation using **Yup**
- ✅ Password hashing via **MD5** (`crypto-js`)
- ✅ Session persistence with **localStorage**
- ✅ Two-factor authentication (2FA) simulation
- ✅ Account page with data table
- ✅ Filtering by creation date and attribute (multi-select)
- ✅ Logout functionality
- ✅ Route protection via **middleware**
- ✅ Responsive and clean design using **Tailwind CSS**
- ✅ UI components built with **Nuxt UI v2**

## 🛠 Stack

- Nuxt 3 + TypeScript
- Pinia for state management
- Tailwind CSS (with rem-based responsive layout)
- Nuxt UI 2 (beta)
- Yup (form validation)
- CryptoJS (MD5)
- Less/Sass support
- Middleware for auth flow

## 📦 Installed Packages

```
npm install @pinia/nuxt
npm install @nuxt/ui@^2.0.0-beta.31
npm install tailwindcss postcss autoprefixer
npm install crypto-js
npm install yup
```

## 🧩 Folder Structure

- `/pages/index.vue` – login page
- `/pages/verify.vue` – 2FA code verification
- `/pages/account.vue` – user account with table + filters
- `/store/auth.ts` – login, verify, logout, session logic
- `/middleware/auth.global.ts` – route protection
- `/public/users.json` – auth user mock
- `/public/data.json` – mock data for the table

## 📁 Git Branches

- `main` – project initialization
- `auth-feature` – login and session logic
- `account-page` – table with filtering and logout
- `readme-and-final-polish` – final cleanup and README

## 🧪 How to Run

```bash
npm install
npm run dev
```

## 🌐 Deployment

To deploy this project to production:

```bash
npm run build
npm run preview
```

Or host with a Node/Nitro-compatible environment (Vercel, Netlify, etc).

---

> Made with ❤️ using Nuxt 3, TypeScript, and Tailwind CSS